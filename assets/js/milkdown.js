import { Crepe } from "@milkdown/crepe";

const csrfToken = document
  .querySelector("meta[name='csrf-token']")
  .getAttribute("content");

const blockEditOpts = {
  blockHandle: {
    getPlacement: () => "right",
  },
};

const uploadUrl = new URL("upload-image", window.location.href).href;

const imageBlockOpts = {
  inlineOnUpload: async (file) => {
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

  crepe.create().then(() => {
    crepe.on((listener) => {
      listener.markdownUpdated(() => {
        inputMarkdown.value = crepe.getMarkdown();
      });
    });
  });
};

export { MilkdownEditor };
