import { LiveSocket } from 'phoenix_live_view';
import { Socket } from 'phoenix';

let Hooks = {};
Hooks.HTMLEditor = {
  loadHTMLEditor() {
    const element = this.el
    
    import('./tiptap').then(
      ({ HTMLEditor }) => {
        HTMLEditor(element)
      }
    )
  },
  mounted() {
    this.loadHTMLEditor()
  },
  updated() {
    this.loadHTMLEditor()
  }
}

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
let liveSocket = new LiveSocket("/live", Socket, {
  params: { _csrf_token: csrfToken },
  hooks: Hooks
})

liveSocket.connect()

window.liveSocket = liveSocket
