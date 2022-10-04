import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header' 
import Image from '@editorjs/image'
import List from '@editorjs/list'
import editorParser from 'editorjs-html'

const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")

const HTMLEditorJS = element => {
  const inputEditorJSON = document.querySelector('#post-form_editor_json')
  const inputHTML = document.querySelector('#post-form_html')

  const editor = new EditorJS({
    tools: { 
      header: Header,
      image: {
        class: Image,
        config: {
          additionalRequestHeaders: {
            'X-CSRF-TOKEN': csrfToken
          },
          endpoints: {
            byFile: `${window.location.href}/upload-file`,
            byURL: `${window.location.href}/fetch-url`
          }
        }
      },
      list: List
    },
    data: JSON.parse(element.dataset.postData || '{}'),
    onChange: () => {
      editor.save().then((outputData) => {
        inputEditorJSON.value = JSON.stringify(outputData)
        inputHTML.value = editorParser().parse(outputData)
      })
    }
  })
}

export { HTMLEditorJS }
