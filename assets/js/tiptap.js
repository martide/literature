import Alpine from 'alpinejs'
import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'

document.addEventListener('alpine:init', () => {
  Alpine.data('editor', (content) => {
    let editor

    return {
      updatedAt: Date.now(), // force Alpine to rerender on selection change
      init() {
        const _this = this

        editor = new Editor({
          element: this.$refs.element,
          extensions: [
            StarterKit
          ],
          content: content,
          onCreate({ editor }) {
            _this.updatedAt = Date.now()
          },
          onUpdate({ editor }) {
            _this.updatedAt = Date.now()
          },
          onSelectionUpdate({ editor }) {
            _this.updatedAt = Date.now()
          }
        });
      },
      isLoaded() {
        return editor
      },
      isActive(type, opts = {}) {
        return editor.isActive(type, opts)
      },
      toggleHeading(opts) {
        editor.chain().toggleHeading(opts).focus().run()
      },
      toggleBold() {
        editor.chain().toggleBold().focus().run()
      },
      toggleItalic() {
        editor.chain().toggleItalic().focus().run()
      },
      toggleBulletList() {
        editor.chain().toggleBulletList().focus().run()
      },
      toggleOrderedList() {
        editor.chain().toggleOrderedList().focus().run()
      },
      setBlockquote() {
        editor.chain().toggleBlockquote().focus().run()
      },
      setHorizontalRule() {
        editor.chain().setHorizontalRule().focus().run()
      }
    };
  });
});

window.Alpine = Alpine
Alpine.start()
