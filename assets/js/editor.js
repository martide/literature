import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header' 
import Image from '@editorjs/image'
import List from '@editorjs/list'
import editorParser from 'editorjs-html'

if (element = document.getElementById('editorjs')) {
  const editor = new EditorJS({
    tools: { 
      header: Header,
      image: Image,
      list: List
    },
    data: JSON.parse(element.dataset.postData)
  })

  const form = document.querySelector('form')
  const inputEditorJSON = document.querySelector('#post_params_editor_json')
  const inputHTML = document.querySelector('#post_params_html')

  form.addEventListener('submit', e => {
    e.preventDefault()
    
    editor.save().then((outputData) => {
      inputEditorJSON.value = JSON.stringify(outputData)
      inputHTML.value = editorParser().parse(outputData)
      form.submit()
    }).catch((error) => {
      console.error('Saving failed: ', error)
    })
  })
}
