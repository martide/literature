import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'

const HTMLEditor = element => {
  const editorMenu = document.querySelectorAll(".editor-menu button")
  const textarea = document.querySelector(element.dataset.target)

  const editor = new Editor({
    element: document.getElementById(element.id),
    extensions: [
      StarterKit
    ],
    content: textarea.value,
    onCreate({ editor }) {
      textarea.value = editor.getHTML()
      initMenus(editor)
    },
    onUpdate({ editor }) {
      textarea.value = editor.getHTML()
      initMenus(editor)
    },
    onSelectionUpdate({ editor }) {
      textarea.value = editor.getHTML()
      initMenus(editor)
    }
  })

  const initMenus = editor => {
    const menus = Array.from(editorMenu)
    menus.pop()
    menus.map(menu => {
      let opts = {}

      if (menu.dataset.level) { opts.level = parseInt(menu.dataset.level) }

      if (editor.isActive(menu.dataset.name, opts)) {
        menu.className = "active"
      } else {
        menu.className = ""
      }
    })
  }

  element.addEventListener("heading", e => {
    const level = parseInt(e.detail.dispatcher.dataset.level)
    editor.chain().toggleHeading({ level }).focus().run()
  })
  
  element.addEventListener("bold", e => {
    editor.chain().toggleBold().focus().run()
  })
  
  element.addEventListener("italic", e => {
    editor.chain().toggleItalic().focus().run()
  })
  
  element.addEventListener("bulletList", e => {
    editor.chain().focus().toggleBulletList().run()
  })
  
  element.addEventListener("orderedList", e => {
    editor.chain().focus().toggleOrderedList().run()
  })
  
  element.addEventListener("blockquote", e => {
    editor.chain().focus().toggleBlockquote().run()
  })
  
  element.addEventListener("horizontalRule", e => {
    editor.chain().focus().setHorizontalRule().run()
  })
}

export { HTMLEditor }
