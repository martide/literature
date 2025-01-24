import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Image from "@editorjs/image";
import List from "@editorjs/list";
import Table from "@editorjs/table";
import editorParser from "editorjs-html";

const csrfToken = document
  .querySelector("meta[name='csrf-token']")
  .getAttribute("content");

// Custom image parser to put alt attribute
const customImageParser = ({ data }) => {
  const alt = data.alt ? data.alt : "Image";

  return `<img src="${data.file && data.file.url ? data.file.url : data.url}" 
    alt="${alt}" ${data.caption ? `caption="${data.caption}"` : ""} />`;
};

const customTableParser = ({ data }) => {
  let tableBody = "";

  data.content.forEach((element, index) => {
    const cellTag = data.withHeadings && index == 0 ? "th" : "td";
    let row = "";

    row = "<tr>";

    element.forEach((elem) => {
      row += `<${cellTag}> ${elem} </${cellTag}>`;
    });

    tableBody += row + "</tr>";
  });

  return "<table>" + tableBody + "</table>";
};

const parser = editorParser({
  image: customImageParser,
  table: customTableParser,
});

const HTMLEditorJS = (element) => {
  const inputEditorJSON = document.querySelector("#form-editor-json");
  const inputHTML = document.querySelector("#form-html");

  if (element.dataset.postData) {
    const jsonData = JSON.parse(element.dataset.postData);
    inputEditorJSON.value = JSON.stringify(jsonData);
    inputHTML.value = parser.parse(jsonData);
  }

  const editor = new EditorJS({
    tools: {
      header: Header,
      image: {
        class: Image,
        config: {
          additionalRequestHeaders: {
            "X-CSRF-TOKEN": csrfToken,
          },
          endpoints: {
            byFile: `${window.location.href}/upload-file`,
            byURL: `${window.location.href}/fetch-url`,
          },
        },
      },
      list: {
        class: List,
        inlineToolbar: true,
      },
      table: {
        class: Table,
        inlineToolbar: true,
        config: {
          withHeadings: true,
        },
      },
    },
    data: JSON.parse(element.dataset.postData || "{}"),
    onChange: () => {
      editor.save().then((outputData) => {
        inputEditorJSON.value = JSON.stringify(outputData);
        inputHTML.value = parser.parse(outputData);
      });
    },
  });
};

export { HTMLEditorJS };
