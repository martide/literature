import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import Image from '@editorjs/image'
import List from '@editorjs/list'
import editorParser from 'editorjs-html'

const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")

// Custom image parser to put alt attribute
const customImageParser = ({ data }) => {
  const alt = data.alt ? data.alt : 'Image';

  return `<img src="${data.file && data.file.url ? data.file.url : data.url}" 
    alt="${alt}" ${data.caption ? `caption="${data.caption}"` : ''} />`;
};

const parser = editorParser({ image: customImageParser });

const HTMLEditorJS = element => {
  const inputEditorJSON = document.querySelector('#form-editor-json')
  const inputHTML = document.querySelector('#form-html')

  inputHTML.value = element.dataset.postData ?
    JSON.stringify(parser.parse(JSON.parse(element.dataset.postData))) : ""

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
      list: {
        class: List,
        inlineToolbar: true
      },
    },
    data: JSON.parse(element.dataset.postData || '{}'),
    onChange: () => {
      editor.save().then((outputData) => {
        inputEditorJSON.value = JSON.stringify(outputData)
        inputHTML.value = JSON.stringify(parser.parse(outputData))
      })
    }
  })
}

export { HTMLEditorJS }
