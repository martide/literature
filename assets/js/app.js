import { LiveSocket } from 'phoenix_live_view';
import { Socket } from 'phoenix';

let Hooks = {}

Hooks.EditorJS = {
  loadEditorJS() {
    const element = this.el

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

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
let liveSocket = new LiveSocket("/live", Socket, {hooks: Hooks, params: { _csrf_token: csrfToken } })

liveSocket.connect()

window.liveSocket = liveSocket
