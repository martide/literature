import 'flowbite';
import './tiptap';

import { LiveSocket } from 'phoenix_live_view';
import { Socket } from 'phoenix';

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
let liveSocket = new LiveSocket("/live", Socket, {params: {_csrf_token: csrfToken}})

liveSocket.connect()
window.liveSocket = liveSocket
