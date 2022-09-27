import {
  FORMAT_TEXT_COMMAND,
  createEditor,
  $getSelection,
  $isRangeSelection
} from 'lexical'
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND
} from '@lexical/list';
import {
  registerRichText,
  HeadingNode,
  $createHeadingNode
} from '@lexical/rich-text'
import {
  $wrapNodes
} from '@lexical/selection'

const HTMLEditor = element => {
  const editor = createEditor({
    onError: console.error,
    nodes: [
      HeadingNode
    ]
  })

  editor.setRootElement(document.getElementById(element.id))
  registerRichText(editor)

  element.addEventListener('heading', e => {
    const headingSize = e.detail.dispatcher.dataset.headingSize
    
    editor.update(() => {
      const selection = $getSelection();

      if ($isRangeSelection(selection)) {
        $wrapNodes(selection, () => $createHeadingNode(headingSize));
      }
    });
  })
  
  element.addEventListener('bold', e => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')
  })
  
  element.addEventListener('italic', e => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')
  })
  
  element.addEventListener('bulletedList', e => {
    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)
  })
  
  element.addEventListener('orderedList', e => {
    editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)
  })

  const stringifiedEditorState = JSON.stringify(editor.getEditorState().toJSON())
  const newEditorState = editor.parseEditorState(stringifiedEditorState);
}

export { HTMLEditor }

// const HTMLEditor = element => {
//   const editorMenu = document.querySelectorAll('.editor-menu button')
//   const textarea = document.querySelector(element.dataset.target)

//   const editor = new Editor({
//     element: document.getElementById(element.id),
//     extensions: [
//       StarterKit
//     ],
//     content: textarea.value,
//     onCreate({ editor }) {
//       textarea.value = editor.getHTML()
//       initMenus(editor)
//     },
//     onUpdate({ editor }) {
//       textarea.value = editor.getHTML()
//       initMenus(editor)
//     },
//     onSelectionUpdate({ editor }) {
//       textarea.value = editor.getHTML()
//       initMenus(editor)
//     }
//   })

//   const initMenus = editor => {
//     const menus = Array.from(editorMenu)
//     menus.pop()
//     menus.map(menu => {
//       let opts = {}

//       if (menu.dataset.level) { opts.level = parseInt(menu.dataset.level) }

//       if (editor.isActive(menu.dataset.name, opts)) {
//         menu.className = 'active'
//       } else {
//         menu.className = ''
//       }
//     })
//   }

//   element.addEventListener('heading', e => {
//     const level = parseInt(e.detail.dispatcher.dataset.level)
//     editor.chain().toggleHeading({ level }).focus().run()
//   })
  
//   element.addEventListener('bold', e => {
//     editor.chain().toggleBold().focus().run()
//   })
  
//   element.addEventListener('italic', e => {
//     editor.chain().toggleItalic().focus().run()
//   })
  
//   element.addEventListener('bulletList', e => {
//     editor.chain().focus().toggleBulletList().run()
//   })
  
//   element.addEventListener('orderedList', e => {
//     editor.chain().focus().toggleOrderedList().run()
//   })
  
//   element.addEventListener('blockquote', e => {
//     editor.chain().focus().toggleBlockquote().run()
//   })
  
//   element.addEventListener('horizontalRule', e => {
//     editor.chain().focus().setHorizontalRule().run()
//   })
// }

// export { HTMLEditor }
