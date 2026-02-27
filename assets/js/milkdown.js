import { Crepe } from "@milkdown/crepe";
import { $nodeSchema, $prose } from "@milkdown/utils";
import { Plugin, PluginKey } from "@milkdown/prose/state";

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
// Outputs `![alt](url "caption")` format for markdown
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
    alt: { default: "", validate: "string" },
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
          alt: dom.getAttribute("alt") || "",
          caption: dom.getAttribute("caption") || "",
          ratio: 1,
        };
      },
    },
  ],

  toDOM: (node) => [
    "img",
    { "data-type": "image-block", ...node.attrs },
  ],

  // Custom markdown parsing
  parseMarkdown: {
    match: ({ type }) => type === "image-block",
    runner: (state, node, type) => {
      const src = node.url;
      const alt = node.alt;
      const caption = node.title;

      state.addNode(type, {
        src,
        alt,
        caption,
        ratio: 1,
      });
    },
  },

  // Custom markdown output - ![alt](url "caption")
  toMarkdown: {
    match: (node) => node.type.name === "image-block",
    runner: (state, node) => {
      state.openNode("paragraph");
      state.addNode("image", undefined, undefined, {
        title: node.attrs.caption,
        url: node.attrs.src,
        alt: node.attrs.alt,
      });
      state.closeNode();
    },
  },
}));

// Plugin to add alt text input to image blocks in the editor
const imageAltPlugin = $prose(() => {
  return new Plugin({
    key: new PluginKey("image-alt-input"),
    view(editorView) {
      const managedBlocks = new WeakMap();

      const sync = () => {
        const blocks =
          editorView.dom.querySelectorAll(".milkdown-image-block");

        for (const block of blocks) {
          const img = block.querySelector("img[src]");
          if (!img || !img.getAttribute("src")) {
            // Image not loaded yet, remove existing alt input
            const existing = managedBlocks.get(block);
            if (existing) {
              existing.remove();
              managedBlocks.delete(block);
            }
            continue;
          }

          // Already managed — just sync value when not focused
          const altInput = managedBlocks.get(block);
          if (altInput && block.contains(altInput)) {
            if (document.activeElement !== altInput) {
              try {
                const pos = editorView.posAtDOM(block, 0);
                const node = editorView.state.doc.nodeAt(pos);
                if (node) {
                  altInput.value = node.attrs.alt || "";
                }
              } catch {
                /* position lookup can fail during transitions */
              }
            }
            continue;
          }

          // Create alt input
          const input = document.createElement("input");
          input.className = "image-alt-input";
          input.placeholder = "Enter image alt";
          input.type = "text";

          // Set initial value
          try {
            const pos = editorView.posAtDOM(block, 0);
            const node = editorView.state.doc.nodeAt(pos);
            if (node) {
              input.value = node.attrs.alt || "";
            }
          } catch {
            /* ignore */
          }

          // Save on blur
          const saveValue = () => {
            try {
              const pos = editorView.posAtDOM(block, 0);
              const node = editorView.state.doc.nodeAt(pos);
              if (node && node.type.name === "image-block") {
                const tr = editorView.state.tr.setNodeMarkup(
                  pos,
                  undefined,
                  { ...node.attrs, alt: input.value },
                );
                editorView.dispatch(tr);
              }
            } catch {
              /* ignore */
            }
          };

          input.addEventListener("blur", saveValue);
          input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              input.blur();
            }
            e.stopPropagation();
          });
          input.addEventListener("keypress", (e) => e.stopPropagation());
          input.addEventListener("input", (e) => e.stopPropagation());

          block.appendChild(input);
          managedBlocks.set(block, input);
        }
      };

      const observer = new MutationObserver(() => {
        requestAnimationFrame(sync);
      });

      observer.observe(editorView.dom, { childList: true, subtree: true });
      setTimeout(sync, 200);

      return {
        update() {
          sync();
        },
        destroy() {
          observer.disconnect();
        },
      };
    },
  });
});

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
  blockCaptionPlaceholderText: "Enter image caption",
};

const MilkdownEditor = (element) => {
  element.addEventListener("paste", (event) => {
    for (const file of event.clipboardData.files) {
      if (file.type.startsWith("image/")) {
        event.preventDefault();

        return;
      }
    }
  });

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

  // Add custom image block plugins before creating
  crepe.editor.use(customImageBlockPlugin).use(imageAltPlugin);

  crepe.create().then(() => {
    crepe.on((listener) => {
      listener.markdownUpdated(() => {
        inputMarkdown.value = crepe.getMarkdown();
      });
    });
  });
};

export { MilkdownEditor };
