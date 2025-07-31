import { LiveSocket } from "phoenix_live_view";
import { Socket } from "phoenix";
import { Sortable } from "sortablejs";

let Hooks = {};

Hooks.MilkdownEditor = {
  loadMilkdownEditor() {
    const element = this.el;
    import("./milkdown").then(({ MilkdownEditor }) => {
      MilkdownEditor(element);
    });
  },
  mounted() {
    this.loadMilkdownEditor();
  },
  updated() {
    this.loadMilkdownEditor();
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
