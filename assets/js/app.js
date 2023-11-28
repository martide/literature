import { LiveSocket } from 'phoenix_live_view'
import { Socket } from 'phoenix'
import { Sortable } from 'sortablejs'

let Hooks = {}

Hooks.EditorJS = {
  loadEditorJS() {
    const element = this.el
    element.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
        event.stopImmediatePropagation()
      }
    })
    import('./editor').then(
      ({ HTMLEditorJS }) => {
        HTMLEditorJS(element)
      }
    )
  },
  mounted() {
    this.loadEditorJS()
  },
  updated() {
    this.loadEditorJS()
  }
}

Hooks.HiddenInputChange = {
}

Hooks.HandleDragNDrop = {
  mounted() {
    const dragNDropList = document.querySelector(
      '[data-sort="drag-n-drop-list"]',
    )
    !!dragNDropList &&
      Sortable.create(dragNDropList, {
        handle: '.sort-menu',
      })
  },
  updated() {
    const dragNDropList = document.querySelector(
      '[data-sort="drag-n-drop-list"]',
    )
    !!dragNDropList &&
      Sortable.create(dragNDropList, {
        handle: '.sort-menu',
      })
  },
}

Hooks.HandleUpdateOrder = {
  mounted() {
    const updateEvent = this.el.dataset.event || 'update_order'
    const orderAttribute = this.el.dataset.orderAttribute || 'data-order-id'
    const parentSelector = this.el.dataset.parentSelector || '[data-sort="drag-n-drop-list"]'

    this.el.addEventListener('click', () => {
      const parent = document.querySelector(parentSelector)
      const elements = parent.querySelectorAll(`[${orderAttribute}]`)
      const orderIds = Array.from(elements).map((element) => element.getAttribute(orderAttribute))

      !!elements &&
        this.pushEvent(updateEvent, {
          data: orderIds,
        })
    })
  }
}

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
let liveSocket = new LiveSocket("/live", Socket, { hooks: Hooks, params: { _csrf_token: csrfToken } })

liveSocket.connect()

window.liveSocket = liveSocket
