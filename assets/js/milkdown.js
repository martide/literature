import { Crepe } from "@milkdown/crepe";
import { $nodeSchema } from "@milkdown/utils";

const csrfToken = document
  .querySelector("meta[name='csrf-token']")
  .getAttribute("content");

const blockEditOpts = {
  blockHandle: {
    getPlacement: () => "right",
  },
  // List group configuration
  listGroup: {
    taskList: null,
  },
  // Advanced group configuration
  advancedGroup: {
    codeBlock: null,
    math: null,
  },
};

const uploadUrl = new URL("upload-image", window.location.href).href;

// Create custom image block schema plugin
// Reuses caption input as alt text to get `[alt](url)` format for markdown
// https://github.com/Milkdown/milkdown/blob/main/packages/components/src/image-block/schema.ts
const customImageBlockPlugin = $nodeSchema("image-block", () => ({
  inline: false,
  group: "block",
  selectable: true,
  draggable: true,
  isolating: true,
  marks: "",
  atom: true,
  priority: 100,
  attrs: {
    src: { default: "", validate: "string" },
    caption: { default: "", validate: "string" },
    ratio: { default: 1, validate: "number" },
  },

  parseDOM: [
    {
      tag: 'img[data-type="image-block"]',
      getAttrs: (dom) => {
        if (!(dom instanceof HTMLElement)) return null;

        return {
          src: dom.getAttribute("src") || "",
          caption: dom.getAttribute("caption") || "",
          ratio: 1,
        };
      },
    },
  ],

  toDOM: (node) => ["img", { "data-type": "image-block", ...node.attrs }],

  // Custom markdown parsing
  parseMarkdown: {
    match: ({ type }) => type === "image-block",
    runner: (state, node, type) => {
      const src = node.url;
      const caption = node.alt;
      const ratio = 1; // Always keep ratio as 1

      state.addNode(type, {
        src,
        caption,
        ratio,
      });
    },
  },

  // Custom markdown output - standard format
  toMarkdown: {
    match: (node) => node.type.name === "image-block",
    runner: (state, node) => {
      state.openNode("paragraph");
      state.addNode("image", undefined, undefined, {
        title: "",
        url: node.attrs.src,
        alt: node.attrs.caption,
      });
      state.closeNode();
    },
  },
}));

const imageBlockOpts = {
  onUpload: async (file) => {
    // Create FormData for file upload
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(uploadUrl, {
      method: "POST",
      body: formData,
      headers: {
        "X-CSRF-Token": csrfToken,
        "X-Requested-With": "XMLHttpRequest",
      },
    });

    if (response.ok) {
      const result = await response.json();
      return result.file.url;
    }

    throw new Error(`Upload failed: ${response.statusText}`);
  },
  blockCaptionPlaceholderText: "Enter image alt",
};

const MilkdownEditor = (element) => {
  const inputMarkdown = document.querySelector("#form-markdown-input");
  const defaultMarkdown = element.dataset.defaultValue || "";
  inputMarkdown.value = defaultMarkdown;

  const crepe = new Crepe({
    root: element,
    defaultValue: defaultMarkdown,
    features: {
      // Disable specific features
      [Crepe.Feature.CodeMirror]: false,
      [Crepe.Feature.Latex]: false,
    },
    featureConfigs: {
      [Crepe.Feature.BlockEdit]: blockEditOpts,
      [Crepe.Feature.ImageBlock]: imageBlockOpts,
    },
  });

  // Add custom image block plugin before creating
  crepe.editor.use(customImageBlockPlugin);

  crepe.create().then(() => {
    crepe.on((listener) => {
      listener.markdownUpdated(() => {
        inputMarkdown.value = crepe.getMarkdown();
      });
    });
  });
};

export { MilkdownEditor };
