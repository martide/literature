import { LiveSocket } from "phoenix_live_view";
import { Socket } from "phoenix";
import { Sortable } from "sortablejs";
import { Crepe } from "@milkdown/crepe";
import { getHTML } from "@milkdown/kit/utils";
import { commonmark } from "@milkdown/kit/preset/commonmark";

let Hooks = {};

Hooks.MarkdownEditor = {
  mounted() {
    const inputMarkdown = document.querySelector("#form-markdown-input");
    const defaultMarkdown = this.el.dataset.defaultValue || "";
    inputMarkdown.value = defaultMarkdown;

    const crepe = new Crepe({
      root: this.el,
      defaultValue: defaultMarkdown,
      features: {
        // Disable specific features
        [Crepe.Feature.CodeMirror]: false,
        [Crepe.Feature.Latex]: false,
      },
      featureConfigs: {
        [Crepe.Feature.BlockEdit]: {
          blockHandle: {
            getPlacement: () => "right",
          },
        },
        [Crepe.Feature.ImageBlock]: {
          inlineOnUpload: async (file) => {
            // Create FormData for file upload
            const formData = new FormData();
            formData.append("image", file);

            // Get CSRF token
            const csrfToken = document
              .querySelector('meta[name="csrf-token"]')
              .getAttribute("content");

            const response = await fetch(
              `${window.location.href}/upload-image`,
              {
                method: "POST",
                body: formData,
                headers: {
                  "X-CSRF-Token": csrfToken,
                  "X-Requested-With": "XMLHttpRequest",
                },
              },
            );

            if (response.ok) {
              const result = await response.json();
              return result.file.url;
            }

            throw new Error(`Upload failed: ${response.statusText}`);
          },
        },
      },
    });

    this.el.crepe = crepe;

    crepe.create().then(() => {
      crepe.on((listener) => {
        listener.markdownUpdated((markdown) => {
          console.log(crepe.getMarkdown());
          inputMarkdown.value = crepe.getMarkdown();
        });
      });
    });
  },
};

Hooks.EditorJS = {
  loadEditorJS() {
    const element = this.el;
    element.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        event.stopImmediatePropagation();
      }
    });
    import("./editor").then(({ HTMLEditorJS }) => {
      HTMLEditorJS(element);
    });
  },
  mounted() {
    this.loadEditorJS();
  },
  updated() {
    this.loadEditorJS();
  },
};

Hooks.HandleDragNDrop = {
  mounted() {
    const dragNDropList = document.querySelector(
      '[data-sort="drag-n-drop-list"]',
    );
    !!dragNDropList &&
      Sortable.create(dragNDropList, {
        handle: ".sort-menu",
      });
  },
  updated() {
    const dragNDropList = document.querySelector(
      '[data-sort="drag-n-drop-list"]',
    );
    !!dragNDropList &&
      Sortable.create(dragNDropList, {
        handle: ".sort-menu",
      });
  },
};

Hooks.HandleUpdateOrder = {
  mounted() {
    const updateEvent = this.el.dataset.event || "update_order";
    const orderAttribute = this.el.dataset.orderAttribute || "data-order-id";
    const parentSelector =
      this.el.dataset.parentSelector || '[data-sort="drag-n-drop-list"]';

    this.el.addEventListener("click", () => {
      const parent = document.querySelector(parentSelector);
      const elements = parent.querySelectorAll(`[${orderAttribute}]`);
      const orderIds = Array.from(elements).map((element) =>
        element.getAttribute(orderAttribute),
      );

      !!elements &&
        this.pushEvent(updateEvent, {
          data: orderIds,
        });
    });
  },
};

Hooks.Accordion = {
  mounted() {
    const execOpen = this.el.getAttribute("data-exec-open");
    const execClose = this.el.getAttribute("data-exec-close");

    if (this.el.getAttribute("aria-expanded") === "true") {
      window.liveSocket.execJS(this.el, execOpen);
    }

    this.el.addEventListener("toggle_accordion", () => {
      if (this.el.getAttribute("aria-expanded") === "true") {
        window.liveSocket.execJS(this.el, execClose);
      } else {
        window.liveSocket.execJS(this.el, execOpen);
      }
    });
  },
};

Hooks.SubmitUpdateStaticPages = {
  mounted() {
    this.el.addEventListener("submit", async (event) => {
      event.preventDefault();

      const form = this.el;
      const formData = new FormData(form);
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;

      try {
        // Update button state
        submitButton.disabled = true;
        submitButton.textContent = "Updating...";
        submitButton.classList.add("loading");

        // Get CSRF token
        const csrfToken = document
          .querySelector('meta[name="csrf-token"]')
          .getAttribute("content");

        // Make the request
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRF-Token": csrfToken,
          },
        });

        if (response.ok) {
          const result = await response.json();

          this.pushEvent("show_alert", {
            message: result.message,
            type: "success",
          });
        } else {
          this.pushEvent("show_alert", {
            type: "error",
            message: "An error occurred while updating static pages.",
          });
          console.error(response);
        }
      } catch (error) {
        this.pushEvent("show_alert", {
          type: "error",
          message: "An error occurred while updating static pages.",
        });
        console.error("Error:", error);
      } finally {
        // Reset button state
        submitButton.disabled = false;
        submitButton.textContent = originalText;
        submitButton.classList.remove("loading");
      }
    });
  },
};

let csrfToken = document
  .querySelector("meta[name='csrf-token']")
  .getAttribute("content");
let liveSocket = new LiveSocket("/live", Socket, {
  hooks: Hooks,
  params: { _csrf_token: csrfToken },
});

liveSocket.connect();

window.liveSocket = liveSocket;
