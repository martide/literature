(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/lexical/Lexical.dev.js
  var require_Lexical_dev = __commonJS({
    "node_modules/lexical/Lexical.dev.js"(exports) {
      "use strict";
      function createCommand() {
        return {};
      }
      var SELECTION_CHANGE_COMMAND = createCommand();
      var CLICK_COMMAND = createCommand();
      var DELETE_CHARACTER_COMMAND = createCommand();
      var INSERT_LINE_BREAK_COMMAND = createCommand();
      var INSERT_PARAGRAPH_COMMAND = createCommand();
      var CONTROLLED_TEXT_INSERTION_COMMAND = createCommand();
      var PASTE_COMMAND = createCommand();
      var REMOVE_TEXT_COMMAND = createCommand();
      var DELETE_WORD_COMMAND = createCommand();
      var DELETE_LINE_COMMAND = createCommand();
      var FORMAT_TEXT_COMMAND2 = createCommand();
      var UNDO_COMMAND = createCommand();
      var REDO_COMMAND = createCommand();
      var KEY_ARROW_RIGHT_COMMAND = createCommand();
      var MOVE_TO_END = createCommand();
      var KEY_ARROW_LEFT_COMMAND = createCommand();
      var MOVE_TO_START = createCommand();
      var KEY_ARROW_UP_COMMAND = createCommand();
      var KEY_ARROW_DOWN_COMMAND = createCommand();
      var KEY_ENTER_COMMAND = createCommand();
      var KEY_SPACE_COMMAND = createCommand();
      var KEY_BACKSPACE_COMMAND = createCommand();
      var KEY_ESCAPE_COMMAND = createCommand();
      var KEY_DELETE_COMMAND = createCommand();
      var KEY_TAB_COMMAND = createCommand();
      var INDENT_CONTENT_COMMAND = createCommand();
      var OUTDENT_CONTENT_COMMAND = createCommand();
      var DROP_COMMAND = createCommand();
      var FORMAT_ELEMENT_COMMAND = createCommand();
      var DRAGSTART_COMMAND = createCommand();
      var DRAGOVER_COMMAND = createCommand();
      var DRAGEND_COMMAND = createCommand();
      var COPY_COMMAND = createCommand();
      var CUT_COMMAND = createCommand();
      var CLEAR_EDITOR_COMMAND = createCommand();
      var CLEAR_HISTORY_COMMAND = createCommand();
      var CAN_REDO_COMMAND = createCommand();
      var CAN_UNDO_COMMAND = createCommand();
      var FOCUS_COMMAND = createCommand();
      var BLUR_COMMAND = createCommand();
      var KEY_MODIFIER_COMMAND = createCommand();
      var getSelection = () => window.getSelection();
      var getDOMSelection = getSelection;
      var CAN_USE_DOM = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
      var documentMode = CAN_USE_DOM && "documentMode" in document ? document.documentMode : null;
      var IS_APPLE = CAN_USE_DOM && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
      var IS_FIREFOX = CAN_USE_DOM && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
      var CAN_USE_BEFORE_INPUT = CAN_USE_DOM && "InputEvent" in window && !documentMode ? "getTargetRanges" in new window.InputEvent("input") : false;
      var IS_SAFARI = CAN_USE_DOM && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
      var IS_IOS = CAN_USE_DOM && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      var DOM_ELEMENT_TYPE = 1;
      var DOM_TEXT_TYPE = 3;
      var NO_DIRTY_NODES = 0;
      var HAS_DIRTY_NODES = 1;
      var FULL_RECONCILE = 2;
      var IS_NORMAL = 0;
      var IS_TOKEN = 1;
      var IS_SEGMENTED = 2;
      var IS_BOLD = 1;
      var IS_ITALIC = 1 << 1;
      var IS_STRIKETHROUGH = 1 << 2;
      var IS_UNDERLINE = 1 << 3;
      var IS_CODE = 1 << 4;
      var IS_SUBSCRIPT = 1 << 5;
      var IS_SUPERSCRIPT = 1 << 6;
      var IS_ALL_FORMATTING = IS_BOLD | IS_ITALIC | IS_STRIKETHROUGH | IS_UNDERLINE | IS_CODE | IS_SUBSCRIPT | IS_SUPERSCRIPT;
      var IS_DIRECTIONLESS = 1;
      var IS_UNMERGEABLE = 1 << 1;
      var IS_ALIGN_LEFT = 1;
      var IS_ALIGN_CENTER = 2;
      var IS_ALIGN_RIGHT = 3;
      var IS_ALIGN_JUSTIFY = 4;
      var NON_BREAKING_SPACE = "\xA0";
      var ZERO_WIDTH_SPACE = "\u200B";
      var COMPOSITION_SUFFIX = IS_SAFARI || IS_IOS ? NON_BREAKING_SPACE : ZERO_WIDTH_SPACE;
      var DOUBLE_LINE_BREAK = "\n\n";
      var COMPOSITION_START_CHAR = IS_FIREFOX ? NON_BREAKING_SPACE : COMPOSITION_SUFFIX;
      var RTL = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";
      var LTR = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF";
      var RTL_REGEX = new RegExp("^[^" + LTR + "]*[" + RTL + "]");
      var LTR_REGEX = new RegExp("^[^" + RTL + "]*[" + LTR + "]");
      var TEXT_TYPE_TO_FORMAT = {
        bold: IS_BOLD,
        code: IS_CODE,
        italic: IS_ITALIC,
        strikethrough: IS_STRIKETHROUGH,
        subscript: IS_SUBSCRIPT,
        superscript: IS_SUPERSCRIPT,
        underline: IS_UNDERLINE
      };
      var DETAIL_TYPE_TO_DETAIL = {
        directionless: IS_DIRECTIONLESS,
        unmergeable: IS_UNMERGEABLE
      };
      var ELEMENT_TYPE_TO_FORMAT = {
        center: IS_ALIGN_CENTER,
        justify: IS_ALIGN_JUSTIFY,
        left: IS_ALIGN_LEFT,
        right: IS_ALIGN_RIGHT
      };
      var ELEMENT_FORMAT_TO_TYPE = {
        [IS_ALIGN_CENTER]: "center",
        [IS_ALIGN_JUSTIFY]: "justify",
        [IS_ALIGN_LEFT]: "left",
        [IS_ALIGN_RIGHT]: "right"
      };
      var TEXT_MODE_TO_TYPE = {
        normal: IS_NORMAL,
        segmented: IS_SEGMENTED,
        token: IS_TOKEN
      };
      var TEXT_TYPE_TO_MODE = {
        [IS_NORMAL]: "normal",
        [IS_SEGMENTED]: "segmented",
        [IS_TOKEN]: "token"
      };
      var TEXT_MUTATION_VARIANCE = 100;
      var isProcessingMutations = false;
      var lastTextEntryTimeStamp = 0;
      function getIsProcesssingMutations() {
        return isProcessingMutations;
      }
      function updateTimeStamp(event) {
        lastTextEntryTimeStamp = event.timeStamp;
      }
      function initTextEntryListener(editor) {
        if (lastTextEntryTimeStamp === 0) {
          getWindow(editor).addEventListener("textInput", updateTimeStamp, true);
        }
      }
      function isManagedLineBreak(dom, target, editor) {
        return target.__lexicalLineBreak === dom || dom[`__lexicalKey_${editor._key}`] !== void 0;
      }
      function getLastSelection(editor) {
        return editor.getEditorState().read(() => {
          const selection = $getSelection2();
          return selection !== null ? selection.clone() : null;
        });
      }
      function handleTextMutation(target, node, editor) {
        const domSelection = getDOMSelection();
        let anchorOffset = null;
        let focusOffset = null;
        if (domSelection !== null && domSelection.anchorNode === target) {
          anchorOffset = domSelection.anchorOffset;
          focusOffset = domSelection.focusOffset;
        }
        const text = target.nodeValue;
        if (text !== null) {
          $updateTextNodeFromDOMContent(node, text, anchorOffset, focusOffset, false);
        }
      }
      function shouldUpdateTextNodeFromMutation(selection, targetDOM, targetNode) {
        if ($isRangeSelection2(selection)) {
          const anchorNode = selection.anchor.getNode();
          if (anchorNode.is(targetNode) && selection.format !== anchorNode.getFormat()) {
            return false;
          }
        }
        return targetDOM.nodeType === DOM_TEXT_TYPE && targetNode.isAttached();
      }
      function $flushMutations$1(editor, mutations, observer) {
        isProcessingMutations = true;
        const shouldFlushTextMutations = performance.now() - lastTextEntryTimeStamp > TEXT_MUTATION_VARIANCE;
        try {
          updateEditor(editor, () => {
            const selection = $getSelection2() || getLastSelection(editor);
            const badDOMTargets = /* @__PURE__ */ new Map();
            const rootElement = editor.getRootElement();
            const currentEditorState = editor._editorState;
            let shouldRevertSelection = false;
            let possibleTextForFirefoxPaste = "";
            for (let i = 0; i < mutations.length; i++) {
              const mutation = mutations[i];
              const type = mutation.type;
              const targetDOM = mutation.target;
              let targetNode = $getNearestNodeFromDOMNode(targetDOM, currentEditorState);
              if ($isDecoratorNode(targetNode)) {
                continue;
              }
              if (type === "characterData") {
                if (shouldFlushTextMutations && $isTextNode(targetNode) && shouldUpdateTextNodeFromMutation(selection, targetDOM, targetNode)) {
                  handleTextMutation(
                    targetDOM,
                    targetNode
                  );
                }
              } else if (type === "childList") {
                shouldRevertSelection = true;
                const addedDOMs = mutation.addedNodes;
                for (let s = 0; s < addedDOMs.length; s++) {
                  const addedDOM = addedDOMs[s];
                  const node = getNodeFromDOMNode(addedDOM);
                  const parentDOM = addedDOM.parentNode;
                  if (parentDOM != null && node === null && (addedDOM.nodeName !== "BR" || !isManagedLineBreak(addedDOM, parentDOM, editor))) {
                    if (IS_FIREFOX) {
                      const possibleText = addedDOM.innerText || addedDOM.nodeValue;
                      if (possibleText) {
                        possibleTextForFirefoxPaste += possibleText;
                      }
                    }
                    parentDOM.removeChild(addedDOM);
                  }
                }
                const removedDOMs = mutation.removedNodes;
                const removedDOMsLength = removedDOMs.length;
                if (removedDOMsLength > 0) {
                  let unremovedBRs = 0;
                  for (let s = 0; s < removedDOMsLength; s++) {
                    const removedDOM = removedDOMs[s];
                    if (removedDOM.nodeName === "BR" && isManagedLineBreak(removedDOM, targetDOM, editor)) {
                      targetDOM.appendChild(removedDOM);
                      unremovedBRs++;
                    }
                  }
                  if (removedDOMsLength !== unremovedBRs) {
                    if (targetDOM === rootElement) {
                      targetNode = internalGetRoot(currentEditorState);
                    }
                    badDOMTargets.set(targetDOM, targetNode);
                  }
                }
              }
            }
            if (badDOMTargets.size > 0) {
              for (const [targetDOM, targetNode] of badDOMTargets) {
                if ($isElementNode(targetNode)) {
                  const childKeys = targetNode.__children;
                  let currentDOM = targetDOM.firstChild;
                  for (let s = 0; s < childKeys.length; s++) {
                    const key = childKeys[s];
                    const correctDOM = editor.getElementByKey(key);
                    if (correctDOM === null) {
                      continue;
                    }
                    if (currentDOM == null) {
                      targetDOM.appendChild(correctDOM);
                      currentDOM = correctDOM;
                    } else if (currentDOM !== correctDOM) {
                      targetDOM.replaceChild(correctDOM, currentDOM);
                    }
                    currentDOM = currentDOM.nextSibling;
                  }
                } else if ($isTextNode(targetNode)) {
                  targetNode.markDirty();
                }
              }
            }
            const records = observer.takeRecords();
            if (records.length > 0) {
              for (let i = 0; i < records.length; i++) {
                const record = records[i];
                const addedNodes = record.addedNodes;
                const target = record.target;
                for (let s = 0; s < addedNodes.length; s++) {
                  const addedDOM = addedNodes[s];
                  const parentDOM = addedDOM.parentNode;
                  if (parentDOM != null && addedDOM.nodeName === "BR" && !isManagedLineBreak(addedDOM, target, editor)) {
                    parentDOM.removeChild(addedDOM);
                  }
                }
              }
              observer.takeRecords();
            }
            if (selection !== null) {
              if (shouldRevertSelection) {
                selection.dirty = true;
                $setSelection(selection);
              }
              if (IS_FIREFOX && isFirefoxClipboardEvents(editor)) {
                selection.insertRawText(possibleTextForFirefoxPaste);
              }
            }
          });
        } finally {
          isProcessingMutations = false;
        }
      }
      function flushRootMutations(editor) {
        const observer = editor._observer;
        if (observer !== null) {
          const mutations = observer.takeRecords();
          $flushMutations$1(editor, mutations, observer);
        }
      }
      function initMutationObserver(editor) {
        initTextEntryListener(editor);
        editor._observer = new MutationObserver((mutations, observer) => {
          $flushMutations$1(editor, mutations, observer);
        });
      }
      var keyCounter = 1;
      function generateRandomKey() {
        return "" + keyCounter++;
      }
      function getRegisteredNodeOrThrow(editor, nodeType) {
        const registeredNode = editor._nodes.get(nodeType);
        if (registeredNode === void 0) {
          {
            throw Error(`registeredNode: Type ${nodeType} not found`);
          }
        }
        return registeredNode;
      }
      var scheduleMicroTask = typeof queueMicrotask === "function" ? queueMicrotask : (fn) => {
        Promise.resolve().then(fn);
      };
      function $isSelectionCapturedInDecorator(node) {
        return $isDecoratorNode($getNearestNodeFromDOMNode(node));
      }
      function isSelectionCapturedInDecoratorInput(anchorDOM) {
        const activeElement = document.activeElement;
        const nodeName = activeElement !== null ? activeElement.nodeName : null;
        return !$isDecoratorNode($getNearestNodeFromDOMNode(anchorDOM)) || nodeName !== "INPUT" && nodeName !== "TEXTAREA";
      }
      function isSelectionWithinEditor(editor, anchorDOM, focusDOM) {
        const rootElement = editor.getRootElement();
        try {
          return rootElement !== null && rootElement.contains(anchorDOM) && rootElement.contains(focusDOM) && anchorDOM !== null && isSelectionCapturedInDecoratorInput(anchorDOM) && getNearestEditorFromDOMNode(anchorDOM) === editor;
        } catch (error) {
          return false;
        }
      }
      function getNearestEditorFromDOMNode(node) {
        let currentNode = node;
        while (currentNode != null) {
          const editor = currentNode.__lexicalEditor;
          if (editor != null) {
            return editor;
          }
          currentNode = currentNode.parentNode;
        }
        return null;
      }
      function getTextDirection(text) {
        if (RTL_REGEX.test(text)) {
          return "rtl";
        }
        if (LTR_REGEX.test(text)) {
          return "ltr";
        }
        return null;
      }
      function $isTokenOrSegmented(node) {
        return node.isToken() || node.isSegmented();
      }
      function isDOMNodeLexicalTextNode(node) {
        return node.nodeType === DOM_TEXT_TYPE;
      }
      function getDOMTextNode(element) {
        let node = element;
        while (node != null) {
          if (isDOMNodeLexicalTextNode(node)) {
            return node;
          }
          node = node.firstChild;
        }
        return null;
      }
      function toggleTextFormatType(format, type, alignWithFormat) {
        const activeFormat = TEXT_TYPE_TO_FORMAT[type];
        const isStateFlagPresent = format & activeFormat;
        if (isStateFlagPresent && (alignWithFormat === null || (alignWithFormat & activeFormat) === 0)) {
          return format ^ activeFormat;
        }
        if (alignWithFormat === null || alignWithFormat & activeFormat) {
          return format | activeFormat;
        }
        return format;
      }
      function $isLeafNode(node) {
        return $isTextNode(node) || $isLineBreakNode(node) || $isDecoratorNode(node);
      }
      function $setNodeKey(node, existingKey) {
        if (existingKey != null) {
          node.__key = existingKey;
          return;
        }
        errorOnReadOnly();
        errorOnInfiniteTransforms();
        const editor = getActiveEditor();
        const editorState = getActiveEditorState();
        const key = generateRandomKey();
        editorState._nodeMap.set(key, node);
        if ($isElementNode(node)) {
          editor._dirtyElements.set(key, true);
        } else {
          editor._dirtyLeaves.add(key);
        }
        editor._cloneNotNeeded.add(key);
        editor._dirtyType = HAS_DIRTY_NODES;
        node.__key = key;
      }
      function internalMarkParentElementsAsDirty(parentKey, nodeMap, dirtyElements) {
        let nextParentKey = parentKey;
        while (nextParentKey !== null) {
          if (dirtyElements.has(nextParentKey)) {
            return;
          }
          const node = nodeMap.get(nextParentKey);
          if (node === void 0) {
            break;
          }
          dirtyElements.set(nextParentKey, false);
          nextParentKey = node.__parent;
        }
      }
      function removeFromParent(writableNode) {
        const oldParent = writableNode.getParent();
        if (oldParent !== null) {
          const writableParent = oldParent.getWritable();
          const children = writableParent.__children;
          const index = children.indexOf(writableNode.__key);
          if (index === -1) {
            {
              throw Error(`Node is not a child of its parent`);
            }
          }
          internalMarkSiblingsAsDirty(writableNode);
          children.splice(index, 1);
        }
      }
      function internalMarkNodeAsDirty(node) {
        errorOnInfiniteTransforms();
        const latest = node.getLatest();
        const parent = latest.__parent;
        const editorState = getActiveEditorState();
        const editor = getActiveEditor();
        const nodeMap = editorState._nodeMap;
        const dirtyElements = editor._dirtyElements;
        if (parent !== null) {
          internalMarkParentElementsAsDirty(parent, nodeMap, dirtyElements);
        }
        const key = latest.__key;
        editor._dirtyType = HAS_DIRTY_NODES;
        if ($isElementNode(node)) {
          dirtyElements.set(key, true);
        } else {
          editor._dirtyLeaves.add(key);
        }
      }
      function internalMarkSiblingsAsDirty(node) {
        const previousNode = node.getPreviousSibling();
        const nextNode = node.getNextSibling();
        if (previousNode !== null) {
          internalMarkNodeAsDirty(previousNode);
        }
        if (nextNode !== null) {
          internalMarkNodeAsDirty(nextNode);
        }
      }
      function $setCompositionKey(compositionKey) {
        errorOnReadOnly();
        const editor = getActiveEditor();
        const previousCompositionKey = editor._compositionKey;
        if (compositionKey !== previousCompositionKey) {
          editor._compositionKey = compositionKey;
          if (previousCompositionKey !== null) {
            const node = $getNodeByKey(previousCompositionKey);
            if (node !== null) {
              node.getWritable();
            }
          }
          if (compositionKey !== null) {
            const node = $getNodeByKey(compositionKey);
            if (node !== null) {
              node.getWritable();
            }
          }
        }
      }
      function $getCompositionKey() {
        if (isCurrentlyReadOnlyMode()) {
          return null;
        }
        const editor = getActiveEditor();
        return editor._compositionKey;
      }
      function $getNodeByKey(key, _editorState) {
        const editorState = _editorState || getActiveEditorState();
        const node = editorState._nodeMap.get(key);
        if (node === void 0) {
          return null;
        }
        return node;
      }
      function getNodeFromDOMNode(dom, editorState) {
        const editor = getActiveEditor();
        const key = dom[`__lexicalKey_${editor._key}`];
        if (key !== void 0) {
          return $getNodeByKey(key, editorState);
        }
        return null;
      }
      function $getNearestNodeFromDOMNode(startingDOM, editorState) {
        let dom = startingDOM;
        while (dom != null) {
          const node = getNodeFromDOMNode(dom, editorState);
          if (node !== null) {
            return node;
          }
          dom = dom.parentNode;
        }
        return null;
      }
      function cloneDecorators(editor) {
        const currentDecorators = editor._decorators;
        const pendingDecorators = Object.assign({}, currentDecorators);
        editor._pendingDecorators = pendingDecorators;
        return pendingDecorators;
      }
      function getEditorStateTextContent(editorState) {
        return editorState.read(() => $getRoot().getTextContent());
      }
      function markAllNodesAsDirty(editor, type) {
        updateEditor(editor, () => {
          const editorState = getActiveEditorState();
          if (editorState.isEmpty()) {
            return;
          }
          if (type === "root") {
            $getRoot().markDirty();
            return;
          }
          const nodeMap = editorState._nodeMap;
          for (const [, node] of nodeMap) {
            node.markDirty();
          }
        }, editor._pendingEditorState === null ? {
          tag: "history-merge"
        } : void 0);
      }
      function $getRoot() {
        return internalGetRoot(getActiveEditorState());
      }
      function internalGetRoot(editorState) {
        return editorState._nodeMap.get("root");
      }
      function $setSelection(selection) {
        const editorState = getActiveEditorState();
        if (selection !== null) {
          {
            if (Object.isFrozen(selection)) {
              {
                throw Error(`$setSelection called on frozen selection object. Ensure selection is cloned before passing in.`);
              }
            }
          }
          selection.dirty = true;
          selection._cachedNodes = null;
        }
        editorState._selection = selection;
      }
      function $flushMutations() {
        errorOnReadOnly();
        const editor = getActiveEditor();
        flushRootMutations(editor);
      }
      function getNodeFromDOM(dom) {
        const editor = getActiveEditor();
        const nodeKey = getNodeKeyFromDOM(dom, editor);
        if (nodeKey === null) {
          const rootElement = editor.getRootElement();
          if (dom === rootElement) {
            return $getNodeByKey("root");
          }
          return null;
        }
        return $getNodeByKey(nodeKey);
      }
      function getTextNodeOffset(node, moveSelectionToEnd) {
        return moveSelectionToEnd ? node.getTextContentSize() : 0;
      }
      function getNodeKeyFromDOM(dom, editor) {
        let node = dom;
        while (node != null) {
          const key = node[`__lexicalKey_${editor._key}`];
          if (key !== void 0) {
            return key;
          }
          node = node.parentNode;
        }
        return null;
      }
      function doesContainGrapheme(str) {
        return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(str);
      }
      function getEditorsToPropagate(editor) {
        const editorsToPropagate = [];
        let currentEditor = editor;
        while (currentEditor !== null) {
          editorsToPropagate.push(currentEditor);
          currentEditor = currentEditor._parentEditor;
        }
        return editorsToPropagate;
      }
      function createUID() {
        return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
      }
      function $updateSelectedTextFromDOM(isCompositionEnd, data) {
        const domSelection = getDOMSelection();
        if (domSelection === null) {
          return;
        }
        const anchorNode = domSelection.anchorNode;
        let {
          anchorOffset,
          focusOffset
        } = domSelection;
        if (anchorNode !== null && anchorNode.nodeType === DOM_TEXT_TYPE) {
          const node = $getNearestNodeFromDOMNode(anchorNode);
          if ($isTextNode(node)) {
            let textContent = anchorNode.nodeValue;
            if (textContent === COMPOSITION_SUFFIX && data) {
              const offset = data.length;
              textContent = data;
              anchorOffset = offset;
              focusOffset = offset;
            }
            if (textContent !== null) {
              $updateTextNodeFromDOMContent(node, textContent, anchorOffset, focusOffset, isCompositionEnd);
            }
          }
        }
      }
      function $updateTextNodeFromDOMContent(textNode, textContent, anchorOffset, focusOffset, compositionEnd) {
        let node = textNode;
        if (node.isAttached() && (compositionEnd || !node.isDirty())) {
          const isComposing = node.isComposing();
          let normalizedTextContent = textContent;
          if ((isComposing || compositionEnd) && textContent[textContent.length - 1] === COMPOSITION_SUFFIX) {
            normalizedTextContent = textContent.slice(0, -1);
          }
          const prevTextContent = node.getTextContent();
          if (compositionEnd || normalizedTextContent !== prevTextContent) {
            if (normalizedTextContent === "") {
              $setCompositionKey(null);
              if (!IS_SAFARI && !IS_IOS) {
                const editor = getActiveEditor();
                setTimeout(() => {
                  editor.update(() => {
                    if (node.isAttached()) {
                      node.remove();
                    }
                  });
                }, 20);
              } else {
                node.remove();
              }
              return;
            }
            const parent = node.getParent();
            const prevSelection = $getPreviousSelection();
            if (node.isToken() || $getCompositionKey() !== null && !isComposing || parent !== null && $isRangeSelection2(prevSelection) && !parent.canInsertTextBefore() && prevSelection.anchor.offset === 0) {
              node.markDirty();
              return;
            }
            const selection = $getSelection2();
            if (!$isRangeSelection2(selection) || anchorOffset === null || focusOffset === null) {
              node.setTextContent(normalizedTextContent);
              return;
            }
            selection.setTextNodeRange(node, anchorOffset, node, focusOffset);
            if (node.isSegmented()) {
              const originalTextContent = node.getTextContent();
              const replacement = $createTextNode(originalTextContent);
              node.replace(replacement);
              node = replacement;
            }
            node.setTextContent(normalizedTextContent);
          }
        }
      }
      function $previousSiblingDoesNotAcceptText(node) {
        const previousSibling = node.getPreviousSibling();
        return ($isTextNode(previousSibling) || $isElementNode(previousSibling) && previousSibling.isInline()) && !previousSibling.canInsertTextAfter();
      }
      function $shouldInsertTextAfterOrBeforeTextNode(selection, node) {
        if (node.isSegmented()) {
          return true;
        }
        if (!selection.isCollapsed()) {
          return false;
        }
        const offset = selection.anchor.offset;
        const parent = node.getParentOrThrow();
        const isToken = node.isToken();
        if (offset === 0) {
          return !node.canInsertTextBefore() || !parent.canInsertTextBefore() || isToken || $previousSiblingDoesNotAcceptText(node);
        } else if (offset === node.getTextContentSize()) {
          return !node.canInsertTextAfter() || !parent.canInsertTextAfter() || isToken;
        } else {
          return false;
        }
      }
      function $shouldPreventDefaultAndInsertText(selection, text) {
        const anchor = selection.anchor;
        const focus = selection.focus;
        const anchorNode = anchor.getNode();
        const domSelection = getDOMSelection();
        const domAnchorNode = domSelection !== null ? domSelection.anchorNode : null;
        const anchorKey = anchor.key;
        const backingAnchorElement = getActiveEditor().getElementByKey(anchorKey);
        const textLength = text.length;
        return anchorKey !== focus.key || !$isTextNode(anchorNode) || (textLength < 2 || doesContainGrapheme(text)) && anchor.offset !== focus.offset && !anchorNode.isComposing() || $isTokenOrSegmented(anchorNode) || anchorNode.isDirty() && textLength > 1 || backingAnchorElement !== null && !anchorNode.isComposing() && domAnchorNode !== getDOMTextNode(backingAnchorElement) || anchorNode.getFormat() !== selection.format || $shouldInsertTextAfterOrBeforeTextNode(selection, anchorNode);
      }
      function isTab(keyCode, altKey, ctrlKey, metaKey) {
        return keyCode === 9 && !altKey && !ctrlKey && !metaKey;
      }
      function isBold(keyCode, altKey, metaKey, ctrlKey) {
        return keyCode === 66 && !altKey && controlOrMeta(metaKey, ctrlKey);
      }
      function isItalic(keyCode, altKey, metaKey, ctrlKey) {
        return keyCode === 73 && !altKey && controlOrMeta(metaKey, ctrlKey);
      }
      function isUnderline(keyCode, altKey, metaKey, ctrlKey) {
        return keyCode === 85 && !altKey && controlOrMeta(metaKey, ctrlKey);
      }
      function isParagraph(keyCode, shiftKey) {
        return isReturn(keyCode) && !shiftKey;
      }
      function isLineBreak(keyCode, shiftKey) {
        return isReturn(keyCode) && shiftKey;
      }
      function isOpenLineBreak(keyCode, ctrlKey) {
        return IS_APPLE && ctrlKey && keyCode === 79;
      }
      function isDeleteWordBackward(keyCode, altKey, ctrlKey) {
        return isBackspace(keyCode) && (IS_APPLE ? altKey : ctrlKey);
      }
      function isDeleteWordForward(keyCode, altKey, ctrlKey) {
        return isDelete(keyCode) && (IS_APPLE ? altKey : ctrlKey);
      }
      function isDeleteLineBackward(keyCode, metaKey) {
        return IS_APPLE && metaKey && isBackspace(keyCode);
      }
      function isDeleteLineForward(keyCode, metaKey) {
        return IS_APPLE && metaKey && isDelete(keyCode);
      }
      function isDeleteBackward(keyCode, altKey, metaKey, ctrlKey) {
        if (IS_APPLE) {
          if (altKey || metaKey) {
            return false;
          }
          return isBackspace(keyCode) || keyCode === 72 && ctrlKey;
        }
        if (ctrlKey || altKey || metaKey) {
          return false;
        }
        return isBackspace(keyCode);
      }
      function isDeleteForward(keyCode, ctrlKey, shiftKey, altKey, metaKey) {
        if (IS_APPLE) {
          if (shiftKey || altKey || metaKey) {
            return false;
          }
          return isDelete(keyCode) || keyCode === 68 && ctrlKey;
        }
        if (ctrlKey || altKey || metaKey) {
          return false;
        }
        return isDelete(keyCode);
      }
      function isUndo(keyCode, shiftKey, metaKey, ctrlKey) {
        return keyCode === 90 && !shiftKey && controlOrMeta(metaKey, ctrlKey);
      }
      function isRedo(keyCode, shiftKey, metaKey, ctrlKey) {
        if (IS_APPLE) {
          return keyCode === 90 && metaKey && shiftKey;
        }
        return keyCode === 89 && ctrlKey || keyCode === 90 && ctrlKey && shiftKey;
      }
      function isCopy(keyCode, shiftKey, metaKey, ctrlKey) {
        if (shiftKey) {
          return false;
        }
        if (keyCode === 67) {
          return IS_APPLE ? metaKey : ctrlKey;
        }
        return false;
      }
      function isCut(keyCode, shiftKey, metaKey, ctrlKey) {
        if (shiftKey) {
          return false;
        }
        if (keyCode === 88) {
          return IS_APPLE ? metaKey : ctrlKey;
        }
        return false;
      }
      function isArrowLeft(keyCode) {
        return keyCode === 37;
      }
      function isArrowRight(keyCode) {
        return keyCode === 39;
      }
      function isArrowUp(keyCode) {
        return keyCode === 38;
      }
      function isArrowDown(keyCode) {
        return keyCode === 40;
      }
      function isMoveBackward(keyCode, ctrlKey, altKey, metaKey) {
        return isArrowLeft(keyCode) && !ctrlKey && !metaKey && !altKey;
      }
      function isMoveToStart(keyCode, ctrlKey, shiftKey, altKey, metaKey) {
        return isArrowLeft(keyCode) && !altKey && !shiftKey && (ctrlKey || metaKey);
      }
      function isMoveForward(keyCode, ctrlKey, altKey, metaKey) {
        return isArrowRight(keyCode) && !ctrlKey && !metaKey && !altKey;
      }
      function isMoveToEnd(keyCode, ctrlKey, shiftKey, altKey, metaKey) {
        return isArrowRight(keyCode) && !altKey && !shiftKey && (ctrlKey || metaKey);
      }
      function isMoveUp(keyCode, ctrlKey, metaKey) {
        return isArrowUp(keyCode) && !ctrlKey && !metaKey;
      }
      function isMoveDown(keyCode, ctrlKey, metaKey) {
        return isArrowDown(keyCode) && !ctrlKey && !metaKey;
      }
      function isModifier(ctrlKey, shiftKey, altKey, metaKey) {
        return ctrlKey || shiftKey || altKey || metaKey;
      }
      function isSpace(keyCode) {
        return keyCode === 32;
      }
      function controlOrMeta(metaKey, ctrlKey) {
        if (IS_APPLE) {
          return metaKey;
        }
        return ctrlKey;
      }
      function isReturn(keyCode) {
        return keyCode === 13;
      }
      function isBackspace(keyCode) {
        return keyCode === 8;
      }
      function isEscape(keyCode) {
        return keyCode === 27;
      }
      function isDelete(keyCode) {
        return keyCode === 46;
      }
      function getCachedClassNameArray(classNamesTheme, classNameThemeType) {
        const classNames = classNamesTheme[classNameThemeType];
        if (typeof classNames === "string") {
          const classNamesArr = classNames.split(" ");
          classNamesTheme[classNameThemeType] = classNamesArr;
          return classNamesArr;
        }
        return classNames;
      }
      function setMutatedNode(mutatedNodes2, registeredNodes, mutationListeners, node, mutation) {
        if (mutationListeners.size === 0) {
          return;
        }
        const nodeType = node.__type;
        const nodeKey = node.__key;
        const registeredNode = registeredNodes.get(nodeType);
        if (registeredNode === void 0) {
          {
            throw Error(`Type ${nodeType} not in registeredNodes`);
          }
        }
        const klass = registeredNode.klass;
        let mutatedNodesByType = mutatedNodes2.get(klass);
        if (mutatedNodesByType === void 0) {
          mutatedNodesByType = /* @__PURE__ */ new Map();
          mutatedNodes2.set(klass, mutatedNodesByType);
        }
        if (!mutatedNodesByType.has(nodeKey)) {
          mutatedNodesByType.set(nodeKey, mutation);
        }
      }
      function $nodesOfType(klass) {
        const editorState = getActiveEditorState();
        const readOnly = editorState._readOnly;
        const klassType = klass.getType();
        const nodes = editorState._nodeMap;
        const nodesOfType = [];
        for (const [, node] of nodes) {
          if (node instanceof klass && node.__type === klassType && (readOnly || node.isAttached())) {
            nodesOfType.push(node);
          }
        }
        return nodesOfType;
      }
      function resolveElement(element, isBackward, focusOffset) {
        const parent = element.getParent();
        let offset = focusOffset;
        let block = element;
        if (parent !== null) {
          if (isBackward && focusOffset === 0) {
            offset = block.getIndexWithinParent();
            block = parent;
          } else if (!isBackward && focusOffset === block.getChildrenSize()) {
            offset = block.getIndexWithinParent() + 1;
            block = parent;
          }
        }
        return block.getChildAtIndex(isBackward ? offset - 1 : offset);
      }
      function $getDecoratorNode(focus, isBackward) {
        const focusOffset = focus.offset;
        if (focus.type === "element") {
          const block = focus.getNode();
          return resolveElement(block, isBackward, focusOffset);
        } else {
          const focusNode = focus.getNode();
          if (isBackward && focusOffset === 0 || !isBackward && focusOffset === focusNode.getTextContentSize()) {
            const possibleNode = isBackward ? focusNode.getPreviousSibling() : focusNode.getNextSibling();
            if (possibleNode === null) {
              return resolveElement(focusNode.getParentOrThrow(), isBackward, focusNode.getIndexWithinParent() + (isBackward ? 0 : 1));
            }
            return possibleNode;
          }
        }
        return null;
      }
      function isFirefoxClipboardEvents(editor) {
        const event = getWindow(editor).event;
        const inputType = event && event.inputType;
        return inputType === "insertFromPaste" || inputType === "insertFromPasteAsQuotation";
      }
      function dispatchCommand(editor, type, payload) {
        return triggerCommandListeners(editor, type, payload);
      }
      function $textContentRequiresDoubleLinebreakAtEnd(node) {
        return !$isRootNode(node) && !node.isLastChild() && !node.isInline();
      }
      function getElementByKeyOrThrow(editor, key) {
        const element = editor._keyToDOMMap.get(key);
        if (element === void 0) {
          {
            throw Error(`Reconciliation: could not find DOM element for node key ${key}`);
          }
        }
        return element;
      }
      function scrollIntoViewIfNeeded(editor, anchor, rootElement, tags) {
        let anchorNode = anchor.getNode();
        if ($isElementNode(anchorNode)) {
          const descendantNode = anchorNode.getDescendantByIndex(anchor.offset);
          if (descendantNode !== null) {
            anchorNode = descendantNode;
          }
        }
        const element = editor.getElementByKey(anchorNode.__key);
        if (element !== null) {
          const rect = element.getBoundingClientRect();
          if (rect.bottom > getWindow(editor).innerHeight) {
            element.scrollIntoView(false);
          } else if (rect.top < 0) {
            element.scrollIntoView();
          } else {
            const rootRect = rootElement.getBoundingClientRect();
            if (Math.floor(rect.bottom) > Math.floor(rootRect.bottom)) {
              element.scrollIntoView(false);
            } else if (Math.floor(rect.top) < Math.floor(rootRect.top)) {
              element.scrollIntoView();
            }
          }
          tags.add("scroll-into-view");
        }
      }
      function $addUpdateTag(tag) {
        errorOnReadOnly();
        const editor = getActiveEditor();
        editor._updateTags.add(tag);
      }
      function $maybeMoveChildrenSelectionToParent(parentNode, offset = 0) {
        if (offset !== 0) {
          {
            throw Error(`TODO`);
          }
        }
        const selection = $getSelection2();
        if (!$isRangeSelection2(selection) || !$isElementNode(parentNode)) {
          return selection;
        }
        const {
          anchor,
          focus
        } = selection;
        const anchorNode = anchor.getNode();
        const focusNode = focus.getNode();
        if ($hasAncestor(anchorNode, parentNode)) {
          anchor.set(parentNode.__key, 0, "element");
        }
        if ($hasAncestor(focusNode, parentNode)) {
          focus.set(parentNode.__key, 0, "element");
        }
        return selection;
      }
      function $hasAncestor(child, targetNode) {
        let parent = child.getParent();
        while (parent !== null) {
          if (parent.is(targetNode)) {
            return true;
          }
          parent = parent.getParent();
        }
        return false;
      }
      function getDefaultView(domElem) {
        const ownerDoc = domElem.ownerDocument;
        return ownerDoc && ownerDoc.defaultView || null;
      }
      function getWindow(editor) {
        const windowObj = editor._window;
        if (windowObj === null) {
          {
            throw Error(`window object not found`);
          }
        }
        return windowObj;
      }
      function $isInlineElementOrDecoratorNode(node) {
        return $isElementNode(node) && node.isInline() || $isDecoratorNode(node) && node.isInline();
      }
      function $isRootOrShadowRoot(node) {
        return $isRootNode(node) || $isElementNode(node) && node.isShadowRoot();
      }
      function $garbageCollectDetachedDecorators(editor, pendingEditorState) {
        const currentDecorators = editor._decorators;
        const pendingDecorators = editor._pendingDecorators;
        let decorators = pendingDecorators || currentDecorators;
        const nodeMap = pendingEditorState._nodeMap;
        let key;
        for (key in decorators) {
          if (!nodeMap.has(key)) {
            if (decorators === currentDecorators) {
              decorators = cloneDecorators(editor);
            }
            delete decorators[key];
          }
        }
      }
      function $garbageCollectDetachedDeepChildNodes(node, parentKey, prevNodeMap, nodeMap, dirtyNodes) {
        const children = node.__children;
        const childrenLength = children.length;
        for (let i = 0; i < childrenLength; i++) {
          const childKey = children[i];
          const child = nodeMap.get(childKey);
          if (child !== void 0 && child.__parent === parentKey) {
            if ($isElementNode(child)) {
              $garbageCollectDetachedDeepChildNodes(child, childKey, prevNodeMap, nodeMap, dirtyNodes);
            }
            if (!prevNodeMap.has(childKey)) {
              dirtyNodes.delete(childKey);
            }
            nodeMap.delete(childKey);
          }
        }
      }
      function $garbageCollectDetachedNodes(prevEditorState, editorState, dirtyLeaves, dirtyElements) {
        const prevNodeMap = prevEditorState._nodeMap;
        const nodeMap = editorState._nodeMap;
        for (const nodeKey of dirtyLeaves) {
          const node = nodeMap.get(nodeKey);
          if (node !== void 0 && !node.isAttached()) {
            if (!prevNodeMap.has(nodeKey)) {
              dirtyLeaves.delete(nodeKey);
            }
            nodeMap.delete(nodeKey);
          }
        }
        for (const [nodeKey] of dirtyElements) {
          const node = nodeMap.get(nodeKey);
          if (node !== void 0) {
            if (!node.isAttached()) {
              if ($isElementNode(node)) {
                $garbageCollectDetachedDeepChildNodes(node, nodeKey, prevNodeMap, nodeMap, dirtyElements);
              }
              if (!prevNodeMap.has(nodeKey)) {
                dirtyElements.delete(nodeKey);
              }
              nodeMap.delete(nodeKey);
            }
          }
        }
      }
      function $canSimpleTextNodesBeMerged(node1, node2) {
        const node1Mode = node1.__mode;
        const node1Format = node1.__format;
        const node1Style = node1.__style;
        const node2Mode = node2.__mode;
        const node2Format = node2.__format;
        const node2Style = node2.__style;
        return (node1Mode === null || node1Mode === node2Mode) && (node1Format === null || node1Format === node2Format) && (node1Style === null || node1Style === node2Style);
      }
      function $mergeTextNodes(node1, node2) {
        const writableNode1 = node1.mergeWithSibling(node2);
        const normalizedNodes = getActiveEditor()._normalizedNodes;
        normalizedNodes.add(node1.__key);
        normalizedNodes.add(node2.__key);
        return writableNode1;
      }
      function $normalizeTextNode(textNode) {
        let node = textNode;
        if (node.__text === "" && node.isSimpleText() && !node.isUnmergeable()) {
          node.remove();
          return;
        }
        let previousNode;
        while ((previousNode = node.getPreviousSibling()) !== null && $isTextNode(previousNode) && previousNode.isSimpleText() && !previousNode.isUnmergeable()) {
          if (previousNode.__text === "") {
            previousNode.remove();
          } else if ($canSimpleTextNodesBeMerged(previousNode, node)) {
            node = $mergeTextNodes(previousNode, node);
            break;
          } else {
            break;
          }
        }
        let nextNode;
        while ((nextNode = node.getNextSibling()) !== null && $isTextNode(nextNode) && nextNode.isSimpleText() && !nextNode.isUnmergeable()) {
          if (nextNode.__text === "") {
            nextNode.remove();
          } else if ($canSimpleTextNodesBeMerged(node, nextNode)) {
            node = $mergeTextNodes(node, nextNode);
            break;
          } else {
            break;
          }
        }
      }
      function $normalizeSelection(selection) {
        $normalizePoint(selection.anchor);
        $normalizePoint(selection.focus);
        return selection;
      }
      function $normalizePoint(point) {
        while (point.type === "element") {
          const node = point.getNode();
          const offset = point.offset;
          let nextNode;
          let nextOffsetAtEnd;
          if (offset === node.getChildrenSize()) {
            nextNode = node.getChildAtIndex(offset - 1);
            nextOffsetAtEnd = true;
          } else {
            nextNode = node.getChildAtIndex(offset);
            nextOffsetAtEnd = false;
          }
          if ($isTextNode(nextNode)) {
            point.set(nextNode.__key, nextOffsetAtEnd ? nextNode.getTextContentSize() : 0, "text");
            break;
          } else if (!$isElementNode(nextNode)) {
            break;
          }
          point.set(nextNode.__key, nextOffsetAtEnd ? nextNode.getChildrenSize() : 0, "element");
        }
      }
      var subTreeTextContent = "";
      var subTreeDirectionedTextContent = "";
      var editorTextContent = "";
      var activeEditorConfig;
      var activeEditor$1;
      var activeEditorNodes;
      var treatAllNodesAsDirty = false;
      var activeEditorStateReadOnly = false;
      var activeMutationListeners;
      var activeTextDirection = null;
      var activeDirtyElements;
      var activeDirtyLeaves;
      var activePrevNodeMap;
      var activeNextNodeMap;
      var activePrevKeyToDOMMap;
      var mutatedNodes;
      function destroyNode(key, parentDOM) {
        const node = activePrevNodeMap.get(key);
        if (parentDOM !== null) {
          const dom = getPrevElementByKeyOrThrow(key);
          parentDOM.removeChild(dom);
        }
        if (!activeNextNodeMap.has(key)) {
          activeEditor$1._keyToDOMMap.delete(key);
        }
        if ($isElementNode(node)) {
          const children = node.__children;
          destroyChildren(children, 0, children.length - 1, null);
        }
        if (node !== void 0) {
          setMutatedNode(mutatedNodes, activeEditorNodes, activeMutationListeners, node, "destroyed");
        }
      }
      function destroyChildren(children, _startIndex, endIndex, dom) {
        let startIndex = _startIndex;
        for (; startIndex <= endIndex; ++startIndex) {
          const child = children[startIndex];
          if (child !== void 0) {
            destroyNode(child, dom);
          }
        }
      }
      function setTextAlign(domStyle, value) {
        domStyle.setProperty("text-align", value);
      }
      function setElementIndent(dom, indent) {
        dom.style.setProperty("padding-inline-start", indent === 0 ? "" : indent * 20 + "px");
      }
      function setElementFormat(dom, format) {
        const domStyle = dom.style;
        if (format === 0) {
          setTextAlign(domStyle, "");
        } else if (format === IS_ALIGN_LEFT) {
          setTextAlign(domStyle, "left");
        } else if (format === IS_ALIGN_CENTER) {
          setTextAlign(domStyle, "center");
        } else if (format === IS_ALIGN_RIGHT) {
          setTextAlign(domStyle, "right");
        } else if (format === IS_ALIGN_JUSTIFY) {
          setTextAlign(domStyle, "justify");
        }
      }
      function createNode(key, parentDOM, insertDOM) {
        const node = activeNextNodeMap.get(key);
        if (node === void 0) {
          {
            throw Error(`createNode: node does not exist in nodeMap`);
          }
        }
        const dom = node.createDOM(activeEditorConfig, activeEditor$1);
        storeDOMWithKey(key, dom, activeEditor$1);
        if ($isTextNode(node)) {
          dom.setAttribute("data-lexical-text", "true");
        } else if ($isDecoratorNode(node)) {
          dom.setAttribute("data-lexical-decorator", "true");
        }
        if ($isElementNode(node)) {
          const indent = node.__indent;
          if (indent !== 0) {
            setElementIndent(dom, indent);
          }
          const children = node.__children;
          const childrenLength = children.length;
          if (childrenLength !== 0) {
            const endIndex = childrenLength - 1;
            createChildrenWithDirection(children, endIndex, node, dom);
          }
          const format = node.__format;
          if (format !== 0) {
            setElementFormat(dom, format);
          }
          reconcileElementTerminatingLineBreak(null, children, dom);
          if ($textContentRequiresDoubleLinebreakAtEnd(node)) {
            subTreeTextContent += DOUBLE_LINE_BREAK;
            editorTextContent += DOUBLE_LINE_BREAK;
          }
        } else {
          const text = node.getTextContent();
          if ($isDecoratorNode(node)) {
            const decorator = node.decorate(activeEditor$1, activeEditorConfig);
            if (decorator !== null) {
              reconcileDecorator(key, decorator);
            }
            dom.contentEditable = "false";
          } else if ($isTextNode(node)) {
            if (!node.isDirectionless()) {
              subTreeDirectionedTextContent += text;
            }
          }
          subTreeTextContent += text;
          editorTextContent += text;
        }
        if (parentDOM !== null) {
          if (insertDOM != null) {
            parentDOM.insertBefore(dom, insertDOM);
          } else {
            const possibleLineBreak = parentDOM.__lexicalLineBreak;
            if (possibleLineBreak != null) {
              parentDOM.insertBefore(dom, possibleLineBreak);
            } else {
              parentDOM.appendChild(dom);
            }
          }
        }
        {
          Object.freeze(node);
        }
        setMutatedNode(mutatedNodes, activeEditorNodes, activeMutationListeners, node, "created");
        return dom;
      }
      function createChildrenWithDirection(children, endIndex, element, dom) {
        const previousSubTreeDirectionedTextContent = subTreeDirectionedTextContent;
        subTreeDirectionedTextContent = "";
        createChildren(children, 0, endIndex, dom, null);
        reconcileBlockDirection(element, dom);
        subTreeDirectionedTextContent = previousSubTreeDirectionedTextContent;
      }
      function createChildren(children, _startIndex, endIndex, dom, insertDOM) {
        const previousSubTreeTextContent = subTreeTextContent;
        subTreeTextContent = "";
        let startIndex = _startIndex;
        for (; startIndex <= endIndex; ++startIndex) {
          createNode(children[startIndex], dom, insertDOM);
        }
        dom.__lexicalTextContent = subTreeTextContent;
        subTreeTextContent = previousSubTreeTextContent + subTreeTextContent;
      }
      function isLastChildLineBreakOrDecorator(children, nodeMap) {
        const childKey = children[children.length - 1];
        const node = nodeMap.get(childKey);
        return $isLineBreakNode(node) || $isDecoratorNode(node);
      }
      function reconcileElementTerminatingLineBreak(prevChildren, nextChildren, dom) {
        const prevLineBreak = prevChildren !== null && (prevChildren.length === 0 || isLastChildLineBreakOrDecorator(prevChildren, activePrevNodeMap));
        const nextLineBreak = nextChildren !== null && (nextChildren.length === 0 || isLastChildLineBreakOrDecorator(nextChildren, activeNextNodeMap));
        if (prevLineBreak) {
          if (!nextLineBreak) {
            const element = dom.__lexicalLineBreak;
            if (element != null) {
              dom.removeChild(element);
            }
            dom.__lexicalLineBreak = null;
          }
        } else if (nextLineBreak) {
          const element = document.createElement("br");
          dom.__lexicalLineBreak = element;
          dom.appendChild(element);
        }
      }
      function reconcileBlockDirection(element, dom) {
        const previousSubTreeDirectionTextContent = dom.__lexicalDirTextContent;
        const previousDirection = dom.__lexicalDir;
        if (previousSubTreeDirectionTextContent !== subTreeDirectionedTextContent || previousDirection !== activeTextDirection) {
          const hasEmptyDirectionedTextContent = subTreeDirectionedTextContent === "";
          const direction = hasEmptyDirectionedTextContent ? activeTextDirection : getTextDirection(subTreeDirectionedTextContent);
          if (direction !== previousDirection) {
            const classList = dom.classList;
            const theme = activeEditorConfig.theme;
            let previousDirectionTheme = previousDirection !== null ? theme[previousDirection] : void 0;
            let nextDirectionTheme = direction !== null ? theme[direction] : void 0;
            if (previousDirectionTheme !== void 0) {
              if (typeof previousDirectionTheme === "string") {
                const classNamesArr = previousDirectionTheme.split(" ");
                previousDirectionTheme = theme[previousDirection] = classNamesArr;
              }
              classList.remove(...previousDirectionTheme);
            }
            if (direction === null || hasEmptyDirectionedTextContent && direction === "ltr") {
              dom.removeAttribute("dir");
            } else {
              if (nextDirectionTheme !== void 0) {
                if (typeof nextDirectionTheme === "string") {
                  const classNamesArr = nextDirectionTheme.split(" ");
                  nextDirectionTheme = theme[direction] = classNamesArr;
                }
                if (nextDirectionTheme !== void 0) {
                  classList.add(...nextDirectionTheme);
                }
              }
              dom.dir = direction;
            }
            if (!activeEditorStateReadOnly) {
              const writableNode = element.getWritable();
              writableNode.__dir = direction;
            }
          }
          activeTextDirection = direction;
          dom.__lexicalDirTextContent = subTreeDirectionedTextContent;
          dom.__lexicalDir = direction;
        }
      }
      function reconcileChildrenWithDirection(prevChildren, nextChildren, element, dom) {
        const previousSubTreeDirectionTextContent = subTreeDirectionedTextContent;
        subTreeDirectionedTextContent = "";
        reconcileChildren(element, prevChildren, nextChildren, dom);
        reconcileBlockDirection(element, dom);
        subTreeDirectionedTextContent = previousSubTreeDirectionTextContent;
      }
      function reconcileChildren(element, prevChildren, nextChildren, dom) {
        const previousSubTreeTextContent = subTreeTextContent;
        subTreeTextContent = "";
        const prevChildrenLength = prevChildren.length;
        const nextChildrenLength = nextChildren.length;
        if (prevChildrenLength === 1 && nextChildrenLength === 1) {
          const prevChildKey = prevChildren[0];
          const nextChildKey = nextChildren[0];
          if (prevChildKey === nextChildKey) {
            reconcileNode(prevChildKey, dom);
          } else {
            const lastDOM = getPrevElementByKeyOrThrow(prevChildKey);
            const replacementDOM = createNode(nextChildKey, null, null);
            dom.replaceChild(replacementDOM, lastDOM);
            destroyNode(prevChildKey, null);
          }
        } else if (prevChildrenLength === 0) {
          if (nextChildrenLength !== 0) {
            createChildren(nextChildren, 0, nextChildrenLength - 1, dom, null);
          }
        } else if (nextChildrenLength === 0) {
          if (prevChildrenLength !== 0) {
            const lexicalLineBreak = dom.__lexicalLineBreak;
            const canUseFastPath = lexicalLineBreak == null;
            destroyChildren(prevChildren, 0, prevChildrenLength - 1, canUseFastPath ? null : dom);
            if (canUseFastPath) {
              dom.textContent = "";
            }
          }
        } else {
          reconcileNodeChildren(prevChildren, nextChildren, prevChildrenLength, nextChildrenLength, element, dom);
        }
        if ($textContentRequiresDoubleLinebreakAtEnd(element)) {
          subTreeTextContent += DOUBLE_LINE_BREAK;
        }
        dom.__lexicalTextContent = subTreeTextContent;
        subTreeTextContent = previousSubTreeTextContent + subTreeTextContent;
      }
      function reconcileNode(key, parentDOM) {
        const prevNode = activePrevNodeMap.get(key);
        let nextNode = activeNextNodeMap.get(key);
        if (prevNode === void 0 || nextNode === void 0) {
          {
            throw Error(`reconcileNode: prevNode or nextNode does not exist in nodeMap`);
          }
        }
        const isDirty = treatAllNodesAsDirty || activeDirtyLeaves.has(key) || activeDirtyElements.has(key);
        const dom = getElementByKeyOrThrow(activeEditor$1, key);
        if (prevNode === nextNode && !isDirty) {
          if ($isElementNode(prevNode)) {
            const previousSubTreeTextContent = dom.__lexicalTextContent;
            if (previousSubTreeTextContent !== void 0) {
              subTreeTextContent += previousSubTreeTextContent;
              editorTextContent += previousSubTreeTextContent;
            }
            const previousSubTreeDirectionTextContent = dom.__lexicalDirTextContent;
            if (previousSubTreeDirectionTextContent !== void 0) {
              subTreeDirectionedTextContent += previousSubTreeDirectionTextContent;
            }
          } else {
            const text = prevNode.getTextContent();
            if ($isTextNode(prevNode) && !prevNode.isDirectionless()) {
              subTreeDirectionedTextContent += text;
            }
            editorTextContent += text;
            subTreeTextContent += text;
          }
          return dom;
        }
        if (prevNode !== nextNode && isDirty) {
          setMutatedNode(mutatedNodes, activeEditorNodes, activeMutationListeners, nextNode, "updated");
        }
        if (nextNode.updateDOM(prevNode, dom, activeEditorConfig)) {
          const replacementDOM = createNode(key, null, null);
          if (parentDOM === null) {
            {
              throw Error(`reconcileNode: parentDOM is null`);
            }
          }
          parentDOM.replaceChild(replacementDOM, dom);
          destroyNode(key, null);
          return replacementDOM;
        }
        if ($isElementNode(prevNode) && $isElementNode(nextNode)) {
          const nextIndent = nextNode.__indent;
          if (nextIndent !== prevNode.__indent) {
            setElementIndent(dom, nextIndent);
          }
          const nextFormat = nextNode.__format;
          if (nextFormat !== prevNode.__format) {
            setElementFormat(dom, nextFormat);
          }
          const prevChildren = prevNode.__children;
          const nextChildren = nextNode.__children;
          const childrenAreDifferent = prevChildren !== nextChildren;
          if (childrenAreDifferent || isDirty) {
            reconcileChildrenWithDirection(prevChildren, nextChildren, nextNode, dom);
            if (!$isRootNode(nextNode)) {
              reconcileElementTerminatingLineBreak(prevChildren, nextChildren, dom);
            }
          }
          if ($textContentRequiresDoubleLinebreakAtEnd(nextNode)) {
            subTreeTextContent += DOUBLE_LINE_BREAK;
            editorTextContent += DOUBLE_LINE_BREAK;
          }
        } else {
          const text = nextNode.getTextContent();
          if ($isDecoratorNode(nextNode)) {
            const decorator = nextNode.decorate(activeEditor$1, activeEditorConfig);
            if (decorator !== null) {
              reconcileDecorator(key, decorator);
            }
          } else if ($isTextNode(nextNode) && !nextNode.isDirectionless()) {
            subTreeDirectionedTextContent += text;
          }
          subTreeTextContent += text;
          editorTextContent += text;
        }
        if (!activeEditorStateReadOnly && $isRootNode(nextNode) && nextNode.__cachedText !== editorTextContent) {
          nextNode = nextNode.getWritable();
          nextNode.__cachedText = editorTextContent;
        }
        {
          Object.freeze(nextNode);
        }
        return dom;
      }
      function reconcileDecorator(key, decorator) {
        let pendingDecorators = activeEditor$1._pendingDecorators;
        const currentDecorators = activeEditor$1._decorators;
        if (pendingDecorators === null) {
          if (currentDecorators[key] === decorator) {
            return;
          }
          pendingDecorators = cloneDecorators(activeEditor$1);
        }
        pendingDecorators[key] = decorator;
      }
      function getFirstChild(element) {
        return element.firstChild;
      }
      function getNextSibling(element) {
        return element.nextSibling;
      }
      function reconcileNodeChildren(prevChildren, nextChildren, prevChildrenLength, nextChildrenLength, element, dom) {
        const prevEndIndex = prevChildrenLength - 1;
        const nextEndIndex = nextChildrenLength - 1;
        let prevChildrenSet;
        let nextChildrenSet;
        let siblingDOM = getFirstChild(dom);
        let prevIndex = 0;
        let nextIndex = 0;
        while (prevIndex <= prevEndIndex && nextIndex <= nextEndIndex) {
          const prevKey = prevChildren[prevIndex];
          const nextKey = nextChildren[nextIndex];
          if (prevKey === nextKey) {
            siblingDOM = getNextSibling(reconcileNode(nextKey, dom));
            prevIndex++;
            nextIndex++;
          } else {
            if (prevChildrenSet === void 0) {
              prevChildrenSet = new Set(prevChildren);
            }
            if (nextChildrenSet === void 0) {
              nextChildrenSet = new Set(nextChildren);
            }
            const nextHasPrevKey = nextChildrenSet.has(prevKey);
            const prevHasNextKey = prevChildrenSet.has(nextKey);
            if (!nextHasPrevKey) {
              siblingDOM = getNextSibling(getPrevElementByKeyOrThrow(prevKey));
              destroyNode(prevKey, dom);
              prevIndex++;
            } else if (!prevHasNextKey) {
              createNode(nextKey, dom, siblingDOM);
              nextIndex++;
            } else {
              const childDOM = getElementByKeyOrThrow(activeEditor$1, nextKey);
              if (childDOM === siblingDOM) {
                siblingDOM = getNextSibling(reconcileNode(nextKey, dom));
              } else {
                if (siblingDOM != null) {
                  dom.insertBefore(childDOM, siblingDOM);
                } else {
                  dom.appendChild(childDOM);
                }
                reconcileNode(nextKey, dom);
              }
              prevIndex++;
              nextIndex++;
            }
          }
        }
        const appendNewChildren = prevIndex > prevEndIndex;
        const removeOldChildren = nextIndex > nextEndIndex;
        if (appendNewChildren && !removeOldChildren) {
          const previousNode = nextChildren[nextEndIndex + 1];
          const insertDOM = previousNode === void 0 ? null : activeEditor$1.getElementByKey(previousNode);
          createChildren(nextChildren, nextIndex, nextEndIndex, dom, insertDOM);
        } else if (removeOldChildren && !appendNewChildren) {
          destroyChildren(prevChildren, prevIndex, prevEndIndex, dom);
        }
      }
      function reconcileRoot(prevEditorState, nextEditorState, editor, dirtyType, dirtyElements, dirtyLeaves) {
        subTreeTextContent = "";
        editorTextContent = "";
        subTreeDirectionedTextContent = "";
        treatAllNodesAsDirty = dirtyType === FULL_RECONCILE;
        activeTextDirection = null;
        activeEditor$1 = editor;
        activeEditorConfig = editor._config;
        activeEditorNodes = editor._nodes;
        activeMutationListeners = activeEditor$1._listeners.mutation;
        activeDirtyElements = dirtyElements;
        activeDirtyLeaves = dirtyLeaves;
        activePrevNodeMap = prevEditorState._nodeMap;
        activeNextNodeMap = nextEditorState._nodeMap;
        activeEditorStateReadOnly = nextEditorState._readOnly;
        activePrevKeyToDOMMap = new Map(editor._keyToDOMMap);
        const currentMutatedNodes = /* @__PURE__ */ new Map();
        mutatedNodes = currentMutatedNodes;
        reconcileNode("root", null);
        activeEditor$1 = void 0;
        activeEditorNodes = void 0;
        activeDirtyElements = void 0;
        activeDirtyLeaves = void 0;
        activePrevNodeMap = void 0;
        activeNextNodeMap = void 0;
        activeEditorConfig = void 0;
        activePrevKeyToDOMMap = void 0;
        mutatedNodes = void 0;
        return currentMutatedNodes;
      }
      function storeDOMWithKey(key, dom, editor) {
        const keyToDOMMap = editor._keyToDOMMap;
        dom["__lexicalKey_" + editor._key] = key;
        keyToDOMMap.set(key, dom);
      }
      function getPrevElementByKeyOrThrow(key) {
        const element = activePrevKeyToDOMMap.get(key);
        if (element === void 0) {
          {
            throw Error(`Reconciliation: could not find DOM element for node key ${key}`);
          }
        }
        return element;
      }
      var PASS_THROUGH_COMMAND = Object.freeze({});
      var ANDROID_COMPOSITION_LATENCY = 30;
      var rootElementEvents = [["keydown", onKeyDown], ["mousedown", onMouseDown], ["compositionstart", onCompositionStart], ["compositionend", onCompositionEnd], ["input", onInput], ["click", onClick], ["cut", PASS_THROUGH_COMMAND], ["copy", PASS_THROUGH_COMMAND], ["dragstart", PASS_THROUGH_COMMAND], ["dragover", PASS_THROUGH_COMMAND], ["dragend", PASS_THROUGH_COMMAND], ["paste", PASS_THROUGH_COMMAND], ["focus", PASS_THROUGH_COMMAND], ["blur", PASS_THROUGH_COMMAND], ["drop", PASS_THROUGH_COMMAND]];
      if (CAN_USE_BEFORE_INPUT) {
        rootElementEvents.push(["beforeinput", (event, editor) => onBeforeInput(event, editor)]);
      }
      var lastKeyDownTimeStamp = 0;
      var lastKeyCode = 0;
      var rootElementsRegistered = 0;
      var isSelectionChangeFromDOMUpdate = false;
      var isSelectionChangeFromMouseDown = false;
      var isInsertLineBreak = false;
      var isFirefoxEndingComposition = false;
      var collapsedSelectionFormat = [0, 0, "root", 0];
      function shouldSkipSelectionChange(domNode, offset) {
        return domNode !== null && domNode.nodeValue !== null && domNode.nodeType === DOM_TEXT_TYPE && offset !== 0 && offset !== domNode.nodeValue.length;
      }
      function onSelectionChange(domSelection, editor, isActive) {
        const {
          anchorNode: anchorDOM,
          anchorOffset,
          focusNode: focusDOM,
          focusOffset
        } = domSelection;
        if (isSelectionChangeFromDOMUpdate) {
          isSelectionChangeFromDOMUpdate = false;
          if (shouldSkipSelectionChange(anchorDOM, anchorOffset) && shouldSkipSelectionChange(focusDOM, focusOffset)) {
            return;
          }
        }
        updateEditor(editor, () => {
          if (!isActive) {
            $setSelection(null);
            return;
          }
          if (!isSelectionWithinEditor(editor, anchorDOM, focusDOM)) {
            return;
          }
          const selection = $getSelection2();
          if ($isRangeSelection2(selection)) {
            const anchor = selection.anchor;
            const anchorNode = anchor.getNode();
            if (selection.isCollapsed()) {
              if (domSelection.type === "Range" && domSelection.anchorNode === domSelection.focusNode) {
                selection.dirty = true;
              }
              const windowEvent = getWindow(editor).event;
              const currentTimeStamp = windowEvent ? windowEvent.timeStamp : performance.now();
              const [lastFormat, lastOffset, lastKey, timeStamp] = collapsedSelectionFormat;
              if (currentTimeStamp < timeStamp + 200 && anchor.offset === lastOffset && anchor.key === lastKey) {
                selection.format = lastFormat;
              } else {
                if (anchor.type === "text") {
                  selection.format = anchorNode.getFormat();
                } else if (anchor.type === "element") {
                  selection.format = 0;
                }
              }
            } else {
              let combinedFormat = IS_ALL_FORMATTING;
              let hasTextNodes = false;
              const nodes = selection.getNodes();
              const nodesLength = nodes.length;
              for (let i = 0; i < nodesLength; i++) {
                const node = nodes[i];
                if ($isTextNode(node)) {
                  hasTextNodes = true;
                  combinedFormat &= node.getFormat();
                  if (combinedFormat === 0) {
                    break;
                  }
                }
              }
              selection.format = hasTextNodes ? combinedFormat : 0;
            }
          }
          dispatchCommand(editor, SELECTION_CHANGE_COMMAND, void 0);
        });
      }
      function onClick(event, editor) {
        updateEditor(editor, () => {
          const selection = $getSelection2();
          const domSelection = getDOMSelection();
          const lastSelection = $getPreviousSelection();
          if ($isRangeSelection2(selection)) {
            const anchor = selection.anchor;
            const anchorNode = anchor.getNode();
            if (domSelection && anchor.type === "element" && anchor.offset === 0 && selection.isCollapsed() && !$isRootNode(anchorNode) && $getRoot().getChildrenSize() === 1 && anchorNode.getTopLevelElementOrThrow().isEmpty() && lastSelection !== null && selection.is(lastSelection)) {
              domSelection.removeAllRanges();
              selection.dirty = true;
            }
          }
          dispatchCommand(editor, CLICK_COMMAND, event);
        });
      }
      function onMouseDown(event, editor) {
        const target = event.target;
        if (target instanceof Node) {
          updateEditor(editor, () => {
            if (!$isSelectionCapturedInDecorator(target)) {
              isSelectionChangeFromMouseDown = true;
            }
          });
        }
      }
      function $applyTargetRange(selection, event) {
        if (event.getTargetRanges) {
          const targetRange = event.getTargetRanges()[0];
          if (targetRange) {
            selection.applyDOMRange(targetRange);
          }
        }
      }
      function $canRemoveText(anchorNode, focusNode) {
        return anchorNode !== focusNode || $isElementNode(anchorNode) || $isElementNode(focusNode) || !anchorNode.isToken() || !focusNode.isToken();
      }
      function isPossiblyAndroidKeyPress(timeStamp) {
        return lastKeyCode === 229 && timeStamp < lastKeyDownTimeStamp + ANDROID_COMPOSITION_LATENCY;
      }
      function onBeforeInput(event, editor) {
        const inputType = event.inputType;
        if (inputType === "deleteCompositionText" || IS_FIREFOX && isFirefoxClipboardEvents(editor)) {
          return;
        } else if (inputType === "insertCompositionText") {
          return;
        }
        updateEditor(editor, () => {
          const selection = $getSelection2();
          if (inputType === "deleteContentBackward") {
            if (selection === null) {
              const prevSelection = $getPreviousSelection();
              if (!$isRangeSelection2(prevSelection)) {
                return;
              }
              $setSelection(prevSelection.clone());
            }
            if ($isRangeSelection2(selection)) {
              if (isPossiblyAndroidKeyPress(event.timeStamp) && editor.isComposing() && selection.anchor.key === selection.focus.key) {
                $setCompositionKey(null);
                lastKeyDownTimeStamp = 0;
                setTimeout(() => {
                  updateEditor(editor, () => {
                    $setCompositionKey(null);
                  });
                }, ANDROID_COMPOSITION_LATENCY);
                if ($isRangeSelection2(selection)) {
                  const anchorNode2 = selection.anchor.getNode();
                  anchorNode2.markDirty();
                  selection.format = anchorNode2.getFormat();
                }
              } else {
                event.preventDefault();
                dispatchCommand(editor, DELETE_CHARACTER_COMMAND, true);
              }
              return;
            }
          }
          if (!$isRangeSelection2(selection)) {
            return;
          }
          const data = event.data;
          if (!selection.dirty && selection.isCollapsed() && !$isRootNode(selection.anchor.getNode())) {
            $applyTargetRange(selection, event);
          }
          const anchor = selection.anchor;
          const focus = selection.focus;
          const anchorNode = anchor.getNode();
          const focusNode = focus.getNode();
          if (inputType === "insertText" || inputType === "insertTranspose") {
            if (data === "\n") {
              event.preventDefault();
              dispatchCommand(editor, INSERT_LINE_BREAK_COMMAND, false);
            } else if (data === DOUBLE_LINE_BREAK) {
              event.preventDefault();
              dispatchCommand(editor, INSERT_PARAGRAPH_COMMAND, void 0);
            } else if (data == null && event.dataTransfer) {
              const text = event.dataTransfer.getData("text/plain");
              event.preventDefault();
              selection.insertRawText(text);
            } else if (data != null && $shouldPreventDefaultAndInsertText(selection, data)) {
              event.preventDefault();
              dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND, data);
            }
            return;
          }
          event.preventDefault();
          switch (inputType) {
            case "insertFromYank":
            case "insertFromDrop":
            case "insertReplacementText": {
              dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND, event);
              break;
            }
            case "insertFromComposition": {
              $setCompositionKey(null);
              dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND, event);
              break;
            }
            case "insertLineBreak": {
              $setCompositionKey(null);
              dispatchCommand(editor, INSERT_LINE_BREAK_COMMAND, false);
              break;
            }
            case "insertParagraph": {
              $setCompositionKey(null);
              if (isInsertLineBreak) {
                isInsertLineBreak = false;
                dispatchCommand(editor, INSERT_LINE_BREAK_COMMAND, false);
              } else {
                dispatchCommand(editor, INSERT_PARAGRAPH_COMMAND, void 0);
              }
              break;
            }
            case "insertFromPaste":
            case "insertFromPasteAsQuotation": {
              dispatchCommand(editor, PASTE_COMMAND, event);
              break;
            }
            case "deleteByComposition": {
              if ($canRemoveText(anchorNode, focusNode)) {
                dispatchCommand(editor, REMOVE_TEXT_COMMAND, void 0);
              }
              break;
            }
            case "deleteByDrag":
            case "deleteByCut": {
              dispatchCommand(editor, REMOVE_TEXT_COMMAND, void 0);
              break;
            }
            case "deleteContent": {
              dispatchCommand(editor, DELETE_CHARACTER_COMMAND, false);
              break;
            }
            case "deleteWordBackward": {
              dispatchCommand(editor, DELETE_WORD_COMMAND, true);
              break;
            }
            case "deleteWordForward": {
              dispatchCommand(editor, DELETE_WORD_COMMAND, false);
              break;
            }
            case "deleteHardLineBackward":
            case "deleteSoftLineBackward": {
              dispatchCommand(editor, DELETE_LINE_COMMAND, true);
              break;
            }
            case "deleteContentForward":
            case "deleteHardLineForward":
            case "deleteSoftLineForward": {
              dispatchCommand(editor, DELETE_LINE_COMMAND, false);
              break;
            }
            case "formatStrikeThrough": {
              dispatchCommand(editor, FORMAT_TEXT_COMMAND2, "strikethrough");
              break;
            }
            case "formatBold": {
              dispatchCommand(editor, FORMAT_TEXT_COMMAND2, "bold");
              break;
            }
            case "formatItalic": {
              dispatchCommand(editor, FORMAT_TEXT_COMMAND2, "italic");
              break;
            }
            case "formatUnderline": {
              dispatchCommand(editor, FORMAT_TEXT_COMMAND2, "underline");
              break;
            }
            case "historyUndo": {
              dispatchCommand(editor, UNDO_COMMAND, void 0);
              break;
            }
            case "historyRedo": {
              dispatchCommand(editor, REDO_COMMAND, void 0);
              break;
            }
          }
        });
      }
      function onInput(event, editor) {
        event.stopPropagation();
        updateEditor(editor, () => {
          const selection = $getSelection2();
          const data = event.data;
          if (data != null && $isRangeSelection2(selection) && $shouldPreventDefaultAndInsertText(selection, data)) {
            if (isFirefoxEndingComposition) {
              onCompositionEndImpl(editor, data);
              isFirefoxEndingComposition = false;
            }
            dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND, data);
            const textLength = data.length;
            if (IS_FIREFOX && textLength > 1 && event.inputType === "insertCompositionText" && !editor.isComposing()) {
              selection.anchor.offset -= textLength;
            }
            if (!IS_SAFARI && !IS_IOS && editor.isComposing()) {
              lastKeyDownTimeStamp = 0;
              $setCompositionKey(null);
            }
          } else {
            $updateSelectedTextFromDOM(false);
            if (isFirefoxEndingComposition) {
              onCompositionEndImpl(editor, data || void 0);
              isFirefoxEndingComposition = false;
            }
          }
          $flushMutations();
        });
      }
      function onCompositionStart(event, editor) {
        updateEditor(editor, () => {
          const selection = $getSelection2();
          if ($isRangeSelection2(selection) && !editor.isComposing()) {
            const anchor = selection.anchor;
            $setCompositionKey(anchor.key);
            if (event.timeStamp < lastKeyDownTimeStamp + ANDROID_COMPOSITION_LATENCY || anchor.type === "element" || !selection.isCollapsed() || selection.anchor.getNode().getFormat() !== selection.format) {
              dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND, COMPOSITION_START_CHAR);
            }
          }
        });
      }
      function onCompositionEndImpl(editor, data) {
        const compositionKey = editor._compositionKey;
        $setCompositionKey(null);
        if (compositionKey !== null && data != null) {
          if (data === "") {
            const node = $getNodeByKey(compositionKey);
            const textNode = getDOMTextNode(editor.getElementByKey(compositionKey));
            if (textNode !== null && textNode.nodeValue !== null && $isTextNode(node)) {
              $updateTextNodeFromDOMContent(node, textNode.nodeValue, null, null, true);
            }
            return;
          }
          if (data[data.length - 1] === "\n") {
            const selection = $getSelection2();
            if ($isRangeSelection2(selection)) {
              const focus = selection.focus;
              selection.anchor.set(focus.key, focus.offset, focus.type);
              dispatchCommand(editor, KEY_ENTER_COMMAND, null);
              return;
            }
          }
        }
        $updateSelectedTextFromDOM(true, data);
      }
      function onCompositionEnd(event, editor) {
        if (IS_FIREFOX) {
          isFirefoxEndingComposition = true;
        } else {
          updateEditor(editor, () => {
            onCompositionEndImpl(editor, event.data);
          });
        }
      }
      function onKeyDown(event, editor) {
        if (hasStoppedLexicalPropagation(event)) {
          return;
        }
        stopLexicalPropagation(event);
        lastKeyDownTimeStamp = event.timeStamp;
        lastKeyCode = event.keyCode;
        if (editor.isComposing()) {
          return;
        }
        const {
          keyCode,
          shiftKey,
          ctrlKey,
          metaKey,
          altKey
        } = event;
        if (isMoveForward(keyCode, ctrlKey, altKey, metaKey)) {
          dispatchCommand(editor, KEY_ARROW_RIGHT_COMMAND, event);
        } else if (isMoveToEnd(keyCode, ctrlKey, shiftKey, altKey, metaKey)) {
          dispatchCommand(editor, MOVE_TO_END, event);
        } else if (isMoveBackward(keyCode, ctrlKey, altKey, metaKey)) {
          dispatchCommand(editor, KEY_ARROW_LEFT_COMMAND, event);
        } else if (isMoveToStart(keyCode, ctrlKey, shiftKey, altKey, metaKey)) {
          dispatchCommand(editor, MOVE_TO_START, event);
        } else if (isMoveUp(keyCode, ctrlKey, metaKey)) {
          dispatchCommand(editor, KEY_ARROW_UP_COMMAND, event);
        } else if (isMoveDown(keyCode, ctrlKey, metaKey)) {
          dispatchCommand(editor, KEY_ARROW_DOWN_COMMAND, event);
        } else if (isLineBreak(keyCode, shiftKey)) {
          isInsertLineBreak = true;
          dispatchCommand(editor, KEY_ENTER_COMMAND, event);
        } else if (isSpace(keyCode)) {
          dispatchCommand(editor, KEY_SPACE_COMMAND, event);
        } else if (isOpenLineBreak(keyCode, ctrlKey)) {
          event.preventDefault();
          isInsertLineBreak = true;
          dispatchCommand(editor, INSERT_LINE_BREAK_COMMAND, true);
        } else if (isParagraph(keyCode, shiftKey)) {
          isInsertLineBreak = false;
          dispatchCommand(editor, KEY_ENTER_COMMAND, event);
        } else if (isDeleteBackward(keyCode, altKey, metaKey, ctrlKey)) {
          if (isBackspace(keyCode)) {
            dispatchCommand(editor, KEY_BACKSPACE_COMMAND, event);
          } else {
            event.preventDefault();
            dispatchCommand(editor, DELETE_CHARACTER_COMMAND, true);
          }
        } else if (isEscape(keyCode)) {
          dispatchCommand(editor, KEY_ESCAPE_COMMAND, event);
        } else if (isDeleteForward(keyCode, ctrlKey, shiftKey, altKey, metaKey)) {
          if (isDelete(keyCode)) {
            dispatchCommand(editor, KEY_DELETE_COMMAND, event);
          } else {
            event.preventDefault();
            dispatchCommand(editor, DELETE_CHARACTER_COMMAND, false);
          }
        } else if (isDeleteWordBackward(keyCode, altKey, ctrlKey)) {
          event.preventDefault();
          dispatchCommand(editor, DELETE_WORD_COMMAND, true);
        } else if (isDeleteWordForward(keyCode, altKey, ctrlKey)) {
          event.preventDefault();
          dispatchCommand(editor, DELETE_WORD_COMMAND, false);
        } else if (isDeleteLineBackward(keyCode, metaKey)) {
          event.preventDefault();
          dispatchCommand(editor, DELETE_LINE_COMMAND, true);
        } else if (isDeleteLineForward(keyCode, metaKey)) {
          event.preventDefault();
          dispatchCommand(editor, DELETE_LINE_COMMAND, false);
        } else if (isBold(keyCode, altKey, metaKey, ctrlKey)) {
          event.preventDefault();
          dispatchCommand(editor, FORMAT_TEXT_COMMAND2, "bold");
        } else if (isUnderline(keyCode, altKey, metaKey, ctrlKey)) {
          event.preventDefault();
          dispatchCommand(editor, FORMAT_TEXT_COMMAND2, "underline");
        } else if (isItalic(keyCode, altKey, metaKey, ctrlKey)) {
          event.preventDefault();
          dispatchCommand(editor, FORMAT_TEXT_COMMAND2, "italic");
        } else if (isTab(keyCode, altKey, ctrlKey, metaKey)) {
          dispatchCommand(editor, KEY_TAB_COMMAND, event);
        } else if (isUndo(keyCode, shiftKey, metaKey, ctrlKey)) {
          event.preventDefault();
          dispatchCommand(editor, UNDO_COMMAND, void 0);
        } else if (isRedo(keyCode, shiftKey, metaKey, ctrlKey)) {
          event.preventDefault();
          dispatchCommand(editor, REDO_COMMAND, void 0);
        } else {
          const prevSelection = editor._editorState._selection;
          if ($isNodeSelection(prevSelection)) {
            if (isCopy(keyCode, shiftKey, metaKey, ctrlKey)) {
              event.preventDefault();
              dispatchCommand(editor, COPY_COMMAND, event);
            } else if (isCut(keyCode, shiftKey, metaKey, ctrlKey)) {
              event.preventDefault();
              dispatchCommand(editor, CUT_COMMAND, event);
            }
          }
        }
        if (isModifier(ctrlKey, shiftKey, altKey, metaKey)) {
          dispatchCommand(editor, KEY_MODIFIER_COMMAND, event);
        }
      }
      function getRootElementRemoveHandles(rootElement) {
        let eventHandles = rootElement.__lexicalEventHandles;
        if (eventHandles === void 0) {
          eventHandles = [];
          rootElement.__lexicalEventHandles = eventHandles;
        }
        return eventHandles;
      }
      var activeNestedEditorsMap = /* @__PURE__ */ new Map();
      function onDocumentSelectionChange(event) {
        const domSelection = getDOMSelection();
        if (domSelection === null) {
          return;
        }
        const nextActiveEditor = getNearestEditorFromDOMNode(domSelection.anchorNode);
        if (nextActiveEditor === null) {
          return;
        }
        if (isSelectionChangeFromMouseDown) {
          isSelectionChangeFromMouseDown = false;
          updateEditor(nextActiveEditor, () => {
            const lastSelection = $getPreviousSelection();
            const domAnchorNode = domSelection.anchorNode;
            if (domAnchorNode === null) {
              return;
            }
            const nodeType = domAnchorNode.nodeType;
            if (nodeType !== DOM_ELEMENT_TYPE && nodeType !== DOM_TEXT_TYPE) {
              return;
            }
            const newSelection = internalCreateRangeSelection(lastSelection, domSelection, nextActiveEditor);
            $setSelection(newSelection);
          });
        }
        const editors = getEditorsToPropagate(nextActiveEditor);
        const rootEditor = editors[editors.length - 1];
        const rootEditorKey = rootEditor._key;
        const activeNestedEditor = activeNestedEditorsMap.get(rootEditorKey);
        const prevActiveEditor = activeNestedEditor || rootEditor;
        if (prevActiveEditor !== nextActiveEditor) {
          onSelectionChange(domSelection, prevActiveEditor, false);
        }
        onSelectionChange(domSelection, nextActiveEditor, true);
        if (nextActiveEditor !== rootEditor) {
          activeNestedEditorsMap.set(rootEditorKey, nextActiveEditor);
        } else if (activeNestedEditor) {
          activeNestedEditorsMap.delete(rootEditorKey);
        }
      }
      function stopLexicalPropagation(event) {
        event._lexicalHandled = true;
      }
      function hasStoppedLexicalPropagation(event) {
        const stopped = event._lexicalHandled === true;
        return stopped;
      }
      function addRootElementEvents(rootElement, editor) {
        if (rootElementsRegistered === 0) {
          const doc2 = rootElement.ownerDocument;
          doc2.addEventListener("selectionchange", onDocumentSelectionChange);
        }
        rootElementsRegistered++;
        rootElement.__lexicalEditor = editor;
        const removeHandles = getRootElementRemoveHandles(rootElement);
        for (let i = 0; i < rootElementEvents.length; i++) {
          const [eventName, onEvent] = rootElementEvents[i];
          const eventHandler = typeof onEvent === "function" ? (event) => {
            if (editor.isEditable()) {
              onEvent(event, editor);
            }
          } : (event) => {
            if (editor.isEditable()) {
              switch (eventName) {
                case "cut":
                  return dispatchCommand(editor, CUT_COMMAND, event);
                case "copy":
                  return dispatchCommand(editor, COPY_COMMAND, event);
                case "paste":
                  return dispatchCommand(editor, PASTE_COMMAND, event);
                case "dragstart":
                  return dispatchCommand(editor, DRAGSTART_COMMAND, event);
                case "dragover":
                  return dispatchCommand(editor, DRAGOVER_COMMAND, event);
                case "dragend":
                  return dispatchCommand(editor, DRAGEND_COMMAND, event);
                case "focus":
                  return dispatchCommand(editor, FOCUS_COMMAND, event);
                case "blur":
                  return dispatchCommand(editor, BLUR_COMMAND, event);
                case "drop":
                  return dispatchCommand(editor, DROP_COMMAND, event);
              }
            }
          };
          rootElement.addEventListener(eventName, eventHandler);
          removeHandles.push(() => {
            rootElement.removeEventListener(eventName, eventHandler);
          });
        }
      }
      function removeRootElementEvents(rootElement) {
        if (rootElementsRegistered !== 0) {
          rootElementsRegistered--;
          if (rootElementsRegistered === 0) {
            const doc2 = rootElement.ownerDocument;
            doc2.removeEventListener("selectionchange", onDocumentSelectionChange);
          }
        }
        const editor = rootElement.__lexicalEditor;
        if (editor !== null && editor !== void 0) {
          cleanActiveNestedEditorsMap(editor);
          rootElement.__lexicalEditor = null;
        }
        const removeHandles = getRootElementRemoveHandles(rootElement);
        for (let i = 0; i < removeHandles.length; i++) {
          removeHandles[i]();
        }
        rootElement.__lexicalEventHandles = [];
      }
      function cleanActiveNestedEditorsMap(editor) {
        if (editor._parentEditor !== null) {
          const editors = getEditorsToPropagate(editor);
          const rootEditor = editors[editors.length - 1];
          const rootEditorKey = rootEditor._key;
          if (activeNestedEditorsMap.get(rootEditorKey) === editor) {
            activeNestedEditorsMap.delete(rootEditorKey);
          }
        } else {
          activeNestedEditorsMap.delete(editor._key);
        }
      }
      function markSelectionChangeFromDOMUpdate() {
        isSelectionChangeFromDOMUpdate = true;
      }
      function markCollapsedSelectionFormat(format, offset, key, timeStamp) {
        collapsedSelectionFormat = [format, offset, key, timeStamp];
      }
      var Point = class {
        constructor(key, offset, type) {
          this._selection = null;
          this.key = key;
          this.offset = offset;
          this.type = type;
        }
        is(point) {
          return this.key === point.key && this.offset === point.offset && this.type === point.type;
        }
        isBefore(b) {
          let aNode = this.getNode();
          let bNode = b.getNode();
          const aOffset = this.offset;
          const bOffset = b.offset;
          if ($isElementNode(aNode)) {
            const aNodeDescendant = aNode.getDescendantByIndex(aOffset);
            aNode = aNodeDescendant != null ? aNodeDescendant : aNode;
          }
          if ($isElementNode(bNode)) {
            const bNodeDescendant = bNode.getDescendantByIndex(bOffset);
            bNode = bNodeDescendant != null ? bNodeDescendant : bNode;
          }
          if (aNode === bNode) {
            return aOffset < bOffset;
          }
          return aNode.isBefore(bNode);
        }
        getNode() {
          const key = this.key;
          const node = $getNodeByKey(key);
          if (node === null) {
            {
              throw Error(`Point.getNode: node not found`);
            }
          }
          return node;
        }
        set(key, offset, type) {
          const selection = this._selection;
          const oldKey = this.key;
          this.key = key;
          this.offset = offset;
          this.type = type;
          if (!isCurrentlyReadOnlyMode()) {
            if ($getCompositionKey() === oldKey) {
              $setCompositionKey(key);
            }
            if (selection !== null) {
              selection._cachedNodes = null;
              selection.dirty = true;
            }
          }
        }
      };
      function $createPoint(key, offset, type) {
        return new Point(key, offset, type);
      }
      function selectPointOnNode(point, node) {
        let key = node.__key;
        let offset = point.offset;
        let type = "element";
        if ($isTextNode(node)) {
          type = "text";
          const textContentLength = node.getTextContentSize();
          if (offset > textContentLength) {
            offset = textContentLength;
          }
        } else if (!$isElementNode(node)) {
          const nextSibling = node.getNextSibling();
          if ($isTextNode(nextSibling)) {
            key = nextSibling.__key;
            offset = 0;
          } else {
            const parentNode = node.getParent();
            if (parentNode) {
              key = parentNode.__key;
              offset = node.getIndexWithinParent() + 1;
            }
          }
        }
        point.set(key, offset, type);
      }
      function $moveSelectionPointToEnd(point, node) {
        if ($isElementNode(node)) {
          const lastNode = node.getLastDescendant();
          if ($isElementNode(lastNode) || $isTextNode(lastNode)) {
            selectPointOnNode(point, lastNode);
          } else {
            selectPointOnNode(point, node);
          }
        } else {
          selectPointOnNode(point, node);
        }
      }
      function $transferStartingElementPointToTextPoint(start, end, format) {
        const element = start.getNode();
        const placementNode = element.getChildAtIndex(start.offset);
        const textNode = $createTextNode();
        const target = $isRootNode(element) ? $createParagraphNode().append(textNode) : textNode;
        textNode.setFormat(format);
        if (placementNode === null) {
          element.append(target);
        } else {
          placementNode.insertBefore(target);
        }
        if (start.is(end)) {
          end.set(textNode.__key, 0, "text");
        }
        start.set(textNode.__key, 0, "text");
      }
      function $setPointValues(point, key, offset, type) {
        point.key = key;
        point.offset = offset;
        point.type = type;
      }
      var NodeSelection = class {
        constructor(objects) {
          this.dirty = false;
          this._nodes = objects;
          this._cachedNodes = null;
        }
        is(selection) {
          if (!$isNodeSelection(selection)) {
            return false;
          }
          const a = this._nodes;
          const b = selection._nodes;
          return a.size === b.size && Array.from(a).every((key) => b.has(key));
        }
        add(key) {
          this.dirty = true;
          this._nodes.add(key);
          this._cachedNodes = null;
        }
        delete(key) {
          this.dirty = true;
          this._nodes.delete(key);
          this._cachedNodes = null;
        }
        clear() {
          this.dirty = true;
          this._nodes.clear();
          this._cachedNodes = null;
        }
        has(key) {
          return this._nodes.has(key);
        }
        clone() {
          return new NodeSelection(new Set(this._nodes));
        }
        extract() {
          return this.getNodes();
        }
        insertRawText(text) {
        }
        insertText() {
        }
        insertNodes(nodes, selectStart) {
          const selectedNodes = this.getNodes();
          const selectedNodesLength = selectedNodes.length;
          const lastSelectedNode = selectedNodes[selectedNodesLength - 1];
          let selectionAtEnd;
          if ($isTextNode(lastSelectedNode)) {
            selectionAtEnd = lastSelectedNode.select();
          } else {
            const index = lastSelectedNode.getIndexWithinParent() + 1;
            selectionAtEnd = lastSelectedNode.getParentOrThrow().select(index, index);
          }
          selectionAtEnd.insertNodes(nodes, selectStart);
          for (let i = 0; i < selectedNodesLength; i++) {
            selectedNodes[i].remove();
          }
          return true;
        }
        getNodes() {
          const cachedNodes = this._cachedNodes;
          if (cachedNodes !== null) {
            return cachedNodes;
          }
          const objects = this._nodes;
          const nodes = [];
          for (const object of objects) {
            const node = $getNodeByKey(object);
            if (node !== null) {
              nodes.push(node);
            }
          }
          if (!isCurrentlyReadOnlyMode()) {
            this._cachedNodes = nodes;
          }
          return nodes;
        }
        getTextContent() {
          const nodes = this.getNodes();
          let textContent = "";
          for (let i = 0; i < nodes.length; i++) {
            textContent += nodes[i].getTextContent();
          }
          return textContent;
        }
      };
      function $isRangeSelection2(x) {
        return x instanceof RangeSelection;
      }
      var GridSelection = class {
        constructor(gridKey, anchor, focus) {
          this.gridKey = gridKey;
          this.anchor = anchor;
          this.focus = focus;
          this.dirty = false;
          this._cachedNodes = null;
          anchor._selection = this;
          focus._selection = this;
        }
        is(selection) {
          if (!DEPRECATED_$isGridSelection(selection)) {
            return false;
          }
          return this.gridKey === selection.gridKey && this.anchor.is(this.focus);
        }
        set(gridKey, anchorCellKey, focusCellKey) {
          this.dirty = true;
          this.gridKey = gridKey;
          this.anchor.key = anchorCellKey;
          this.focus.key = focusCellKey;
          this._cachedNodes = null;
        }
        clone() {
          return new GridSelection(this.gridKey, this.anchor, this.focus);
        }
        isCollapsed() {
          return false;
        }
        isBackward() {
          return this.focus.isBefore(this.anchor);
        }
        getCharacterOffsets() {
          return getCharacterOffsets(this);
        }
        extract() {
          return this.getNodes();
        }
        insertRawText(text) {
        }
        insertText() {
        }
        insertNodes(nodes, selectStart) {
          const focusNode = this.focus.getNode();
          const selection = $normalizeSelection(focusNode.select(0, focusNode.getChildrenSize()));
          return selection.insertNodes(nodes, selectStart);
        }
        getShape() {
          const anchorCellNode = $getNodeByKey(this.anchor.key);
          if (!(anchorCellNode !== null)) {
            throw Error(`getNodes: expected to find AnchorNode`);
          }
          const anchorCellNodeIndex = anchorCellNode.getIndexWithinParent();
          const anchorCelRoweIndex = anchorCellNode.getParentOrThrow().getIndexWithinParent();
          const focusCellNode = $getNodeByKey(this.focus.key);
          if (!(focusCellNode !== null)) {
            throw Error(`getNodes: expected to find FocusNode`);
          }
          const focusCellNodeIndex = focusCellNode.getIndexWithinParent();
          const focusCellRowIndex = focusCellNode.getParentOrThrow().getIndexWithinParent();
          const startX = Math.min(anchorCellNodeIndex, focusCellNodeIndex);
          const stopX = Math.max(anchorCellNodeIndex, focusCellNodeIndex);
          const startY = Math.min(anchorCelRoweIndex, focusCellRowIndex);
          const stopY = Math.max(anchorCelRoweIndex, focusCellRowIndex);
          return {
            fromX: Math.min(startX, stopX),
            fromY: Math.min(startY, stopY),
            toX: Math.max(startX, stopX),
            toY: Math.max(startY, stopY)
          };
        }
        getNodes() {
          const cachedNodes = this._cachedNodes;
          if (cachedNodes !== null) {
            return cachedNodes;
          }
          const nodesSet = /* @__PURE__ */ new Set();
          const {
            fromX,
            fromY,
            toX,
            toY
          } = this.getShape();
          const gridNode = $getNodeByKey(this.gridKey);
          if (!DEPRECATED_$isGridNode(gridNode)) {
            {
              throw Error(`getNodes: expected to find GridNode`);
            }
          }
          nodesSet.add(gridNode);
          const gridRowNodes = gridNode.getChildren();
          for (let r = fromY; r <= toY; r++) {
            const gridRowNode = gridRowNodes[r];
            nodesSet.add(gridRowNode);
            if (!DEPRECATED_$isGridRowNode(gridRowNode)) {
              {
                throw Error(`getNodes: expected to find GridRowNode`);
              }
            }
            const gridCellNodes = gridRowNode.getChildren();
            for (let c = fromX; c <= toX; c++) {
              const gridCellNode = gridCellNodes[c];
              if (!DEPRECATED_$isGridCellNode(gridCellNode)) {
                {
                  throw Error(`getNodes: expected to find GridCellNode`);
                }
              }
              nodesSet.add(gridCellNode);
              const children = gridCellNode.getChildren();
              while (children.length > 0) {
                const child = children.shift();
                nodesSet.add(child);
                if ($isElementNode(child)) {
                  children.unshift(...child.getChildren());
                }
              }
            }
          }
          const nodes = Array.from(nodesSet);
          if (!isCurrentlyReadOnlyMode()) {
            this._cachedNodes = nodes;
          }
          return nodes;
        }
        getTextContent() {
          const nodes = this.getNodes();
          let textContent = "";
          for (let i = 0; i < nodes.length; i++) {
            textContent += nodes[i].getTextContent();
          }
          return textContent;
        }
      };
      function DEPRECATED_$isGridSelection(x) {
        return x instanceof GridSelection;
      }
      var RangeSelection = class {
        constructor(anchor, focus, format) {
          this.anchor = anchor;
          this.focus = focus;
          this.dirty = false;
          this.format = format;
          this._cachedNodes = null;
          anchor._selection = this;
          focus._selection = this;
        }
        is(selection) {
          if (!$isRangeSelection2(selection)) {
            return false;
          }
          return this.anchor.is(selection.anchor) && this.focus.is(selection.focus) && this.format === selection.format;
        }
        isBackward() {
          return this.focus.isBefore(this.anchor);
        }
        isCollapsed() {
          return this.anchor.is(this.focus);
        }
        getNodes() {
          const cachedNodes = this._cachedNodes;
          if (cachedNodes !== null) {
            return cachedNodes;
          }
          const anchor = this.anchor;
          const focus = this.focus;
          let firstNode = anchor.getNode();
          let lastNode = focus.getNode();
          if ($isElementNode(firstNode)) {
            const firstNodeDescendant = firstNode.getDescendantByIndex(anchor.offset);
            firstNode = firstNodeDescendant != null ? firstNodeDescendant : firstNode;
          }
          if ($isElementNode(lastNode)) {
            const lastNodeDescendant = lastNode.getDescendantByIndex(focus.offset);
            lastNode = lastNodeDescendant != null ? lastNodeDescendant : lastNode;
          }
          let nodes;
          if (firstNode.is(lastNode)) {
            if ($isElementNode(firstNode) && (firstNode.getChildrenSize() > 0 || firstNode.excludeFromCopy())) {
              nodes = [];
            } else {
              nodes = [firstNode];
            }
          } else {
            nodes = firstNode.getNodesBetween(lastNode);
          }
          if (!isCurrentlyReadOnlyMode()) {
            this._cachedNodes = nodes;
          }
          return nodes;
        }
        setTextNodeRange(anchorNode, anchorOffset, focusNode, focusOffset) {
          $setPointValues(this.anchor, anchorNode.__key, anchorOffset, "text");
          $setPointValues(this.focus, focusNode.__key, focusOffset, "text");
          this._cachedNodes = null;
          this.dirty = true;
        }
        getTextContent() {
          const nodes = this.getNodes();
          if (nodes.length === 0) {
            return "";
          }
          const firstNode = nodes[0];
          const lastNode = nodes[nodes.length - 1];
          const anchor = this.anchor;
          const focus = this.focus;
          const isBefore = anchor.isBefore(focus);
          const [anchorOffset, focusOffset] = getCharacterOffsets(this);
          let textContent = "";
          let prevWasElement = true;
          for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if ($isElementNode(node) && !node.isInline()) {
              if (!prevWasElement) {
                textContent += "\n";
              }
              if (node.isEmpty()) {
                prevWasElement = false;
              } else {
                prevWasElement = true;
              }
            } else {
              prevWasElement = false;
              if ($isTextNode(node)) {
                let text = node.getTextContent();
                if (node === firstNode) {
                  if (node === lastNode) {
                    text = anchorOffset < focusOffset ? text.slice(anchorOffset, focusOffset) : text.slice(focusOffset, anchorOffset);
                  } else {
                    text = isBefore ? text.slice(anchorOffset) : text.slice(focusOffset);
                  }
                } else if (node === lastNode) {
                  text = isBefore ? text.slice(0, focusOffset) : text.slice(0, anchorOffset);
                }
                textContent += text;
              } else if (($isDecoratorNode(node) || $isLineBreakNode(node)) && (node !== lastNode || !this.isCollapsed())) {
                textContent += node.getTextContent();
              }
            }
          }
          return textContent;
        }
        applyDOMRange(range2) {
          const editor = getActiveEditor();
          const currentEditorState = editor.getEditorState();
          const lastSelection = currentEditorState._selection;
          const resolvedSelectionPoints = internalResolveSelectionPoints(range2.startContainer, range2.startOffset, range2.endContainer, range2.endOffset, editor, lastSelection);
          if (resolvedSelectionPoints === null) {
            return;
          }
          const [anchorPoint, focusPoint] = resolvedSelectionPoints;
          $setPointValues(this.anchor, anchorPoint.key, anchorPoint.offset, anchorPoint.type);
          $setPointValues(this.focus, focusPoint.key, focusPoint.offset, focusPoint.type);
          this._cachedNodes = null;
        }
        clone() {
          const anchor = this.anchor;
          const focus = this.focus;
          const selection = new RangeSelection($createPoint(anchor.key, anchor.offset, anchor.type), $createPoint(focus.key, focus.offset, focus.type), this.format);
          return selection;
        }
        toggleFormat(format) {
          this.format = toggleTextFormatType(this.format, format, null);
          this.dirty = true;
        }
        hasFormat(type) {
          const formatFlag = TEXT_TYPE_TO_FORMAT[type];
          return (this.format & formatFlag) !== 0;
        }
        insertRawText(text) {
          const parts = text.split(/\r?\n/);
          if (parts.length === 1) {
            this.insertText(text);
          } else {
            const nodes = [];
            const length = parts.length;
            for (let i = 0; i < length; i++) {
              const part = parts[i];
              if (part !== "") {
                nodes.push($createTextNode(part));
              }
              if (i !== length - 1) {
                nodes.push($createLineBreakNode());
              }
            }
            this.insertNodes(nodes);
          }
        }
        insertText(text) {
          const anchor = this.anchor;
          const focus = this.focus;
          const isBefore = this.isCollapsed() || anchor.isBefore(focus);
          const format = this.format;
          if (isBefore && anchor.type === "element") {
            $transferStartingElementPointToTextPoint(anchor, focus, format);
          } else if (!isBefore && focus.type === "element") {
            $transferStartingElementPointToTextPoint(focus, anchor, format);
          }
          const selectedNodes = this.getNodes();
          const selectedNodesLength = selectedNodes.length;
          const firstPoint = isBefore ? anchor : focus;
          const endPoint = isBefore ? focus : anchor;
          const startOffset = firstPoint.offset;
          const endOffset = endPoint.offset;
          let firstNode = selectedNodes[0];
          if (!$isTextNode(firstNode)) {
            {
              throw Error(`insertText: first node is not a text node`);
            }
          }
          const firstNodeText = firstNode.getTextContent();
          const firstNodeTextLength = firstNodeText.length;
          const firstNodeParent = firstNode.getParentOrThrow();
          const lastIndex = selectedNodesLength - 1;
          let lastNode = selectedNodes[lastIndex];
          if (this.isCollapsed() && startOffset === firstNodeTextLength && (firstNode.isSegmented() || firstNode.isToken() || !firstNode.canInsertTextAfter() || !firstNodeParent.canInsertTextAfter() && firstNode.getNextSibling() === null)) {
            let nextSibling = firstNode.getNextSibling();
            if (!$isTextNode(nextSibling) || $isTokenOrSegmented(nextSibling)) {
              nextSibling = $createTextNode();
              nextSibling.setFormat(format);
              if (!firstNodeParent.canInsertTextAfter()) {
                firstNodeParent.insertAfter(nextSibling);
              } else {
                firstNode.insertAfter(nextSibling);
              }
            }
            nextSibling.select(0, 0);
            firstNode = nextSibling;
            if (text !== "") {
              this.insertText(text);
              return;
            }
          } else if (this.isCollapsed() && startOffset === 0 && (firstNode.isSegmented() || firstNode.isToken() || !firstNode.canInsertTextBefore() || !firstNodeParent.canInsertTextBefore() && firstNode.getPreviousSibling() === null)) {
            let prevSibling = firstNode.getPreviousSibling();
            if (!$isTextNode(prevSibling) || $isTokenOrSegmented(prevSibling)) {
              prevSibling = $createTextNode();
              prevSibling.setFormat(format);
              if (!firstNodeParent.canInsertTextBefore()) {
                firstNodeParent.insertBefore(prevSibling);
              } else {
                firstNode.insertBefore(prevSibling);
              }
            }
            prevSibling.select();
            firstNode = prevSibling;
            if (text !== "") {
              this.insertText(text);
              return;
            }
          } else if (firstNode.isSegmented() && startOffset !== firstNodeTextLength) {
            const textNode = $createTextNode(firstNode.getTextContent());
            textNode.setFormat(format);
            firstNode.replace(textNode);
            firstNode = textNode;
          } else if (!this.isCollapsed() && text !== "") {
            const lastNodeParent = lastNode.getParent();
            if (!firstNodeParent.canInsertTextBefore() || !firstNodeParent.canInsertTextAfter() || $isElementNode(lastNodeParent) && (!lastNodeParent.canInsertTextBefore() || !lastNodeParent.canInsertTextAfter())) {
              this.insertText("");
              normalizeSelectionPointsForBoundaries(this.anchor, this.focus, null);
              this.insertText(text);
              return;
            }
          }
          if (selectedNodesLength === 1) {
            if (firstNode.isToken()) {
              const textNode = $createTextNode(text);
              textNode.select();
              firstNode.replace(textNode);
              return;
            }
            const firstNodeFormat = firstNode.getFormat();
            if (startOffset === endOffset && firstNodeFormat !== format) {
              if (firstNode.getTextContent() === "") {
                firstNode.setFormat(format);
              } else {
                const textNode = $createTextNode(text);
                textNode.setFormat(format);
                textNode.select();
                if (startOffset === 0) {
                  firstNode.insertBefore(textNode);
                } else {
                  const [targetNode] = firstNode.splitText(startOffset);
                  targetNode.insertAfter(textNode);
                }
                if (textNode.isComposing() && this.anchor.type === "text") {
                  this.anchor.offset -= text.length;
                }
                return;
              }
            }
            const delCount = endOffset - startOffset;
            firstNode = firstNode.spliceText(startOffset, delCount, text, true);
            if (firstNode.getTextContent() === "") {
              firstNode.remove();
            } else if (this.anchor.type === "text") {
              if (firstNode.isComposing()) {
                this.anchor.offset -= text.length;
              } else {
                this.format = firstNodeFormat;
              }
            }
          } else {
            const markedNodeKeysForKeep = /* @__PURE__ */ new Set([...firstNode.getParentKeys(), ...lastNode.getParentKeys()]);
            const firstElement = $isElementNode(firstNode) ? firstNode : firstNode.getParentOrThrow();
            let lastElement = $isElementNode(lastNode) ? lastNode : lastNode.getParentOrThrow();
            let lastElementChild = lastNode;
            if (!firstElement.is(lastElement) && lastElement.isInline()) {
              do {
                lastElementChild = lastElement;
                lastElement = lastElement.getParentOrThrow();
              } while (lastElement.isInline());
            }
            if (endPoint.type === "text" && (endOffset !== 0 || lastNode.getTextContent() === "") || endPoint.type === "element" && lastNode.getIndexWithinParent() < endOffset) {
              if ($isTextNode(lastNode) && !lastNode.isToken() && endOffset !== lastNode.getTextContentSize()) {
                if (lastNode.isSegmented()) {
                  const textNode = $createTextNode(lastNode.getTextContent());
                  lastNode.replace(textNode);
                  lastNode = textNode;
                }
                lastNode = lastNode.spliceText(0, endOffset, "");
                markedNodeKeysForKeep.add(lastNode.__key);
              } else {
                const lastNodeParent = lastNode.getParentOrThrow();
                if (!lastNodeParent.canBeEmpty() && lastNodeParent.getChildrenSize() === 1) {
                  lastNodeParent.remove();
                } else {
                  lastNode.remove();
                }
              }
            } else {
              markedNodeKeysForKeep.add(lastNode.__key);
            }
            const lastNodeChildren = lastElement.getChildren();
            const selectedNodesSet = new Set(selectedNodes);
            const firstAndLastElementsAreEqual = firstElement.is(lastElement);
            const insertionTarget = firstElement.isInline() && firstNode.getNextSibling() === null ? firstElement : firstNode;
            for (let i = lastNodeChildren.length - 1; i >= 0; i--) {
              const lastNodeChild = lastNodeChildren[i];
              if (lastNodeChild.is(firstNode) || $isElementNode(lastNodeChild) && lastNodeChild.isParentOf(firstNode)) {
                break;
              }
              if (lastNodeChild.isAttached()) {
                if (!selectedNodesSet.has(lastNodeChild) || lastNodeChild.is(lastElementChild)) {
                  if (!firstAndLastElementsAreEqual) {
                    insertionTarget.insertAfter(lastNodeChild);
                  }
                } else {
                  lastNodeChild.remove();
                }
              }
            }
            if (!firstAndLastElementsAreEqual) {
              let parent = lastElement;
              let lastRemovedParent = null;
              while (parent !== null) {
                const children = parent.getChildren();
                const childrenLength = children.length;
                if (childrenLength === 0 || children[childrenLength - 1].is(lastRemovedParent)) {
                  markedNodeKeysForKeep.delete(parent.__key);
                  lastRemovedParent = parent;
                }
                parent = parent.getParent();
              }
            }
            if (!firstNode.isToken()) {
              firstNode = firstNode.spliceText(startOffset, firstNodeTextLength - startOffset, text, true);
              if (firstNode.getTextContent() === "") {
                firstNode.remove();
              } else if (firstNode.isComposing() && this.anchor.type === "text") {
                this.anchor.offset -= text.length;
              }
            } else if (startOffset === firstNodeTextLength) {
              firstNode.select();
            } else {
              const textNode = $createTextNode(text);
              textNode.select();
              firstNode.replace(textNode);
            }
            for (let i = 1; i < selectedNodesLength; i++) {
              const selectedNode = selectedNodes[i];
              const key = selectedNode.__key;
              if (!markedNodeKeysForKeep.has(key)) {
                selectedNode.remove();
              }
            }
          }
        }
        removeText() {
          this.insertText("");
        }
        formatText(formatType) {
          if (this.isCollapsed()) {
            this.toggleFormat(formatType);
            $setCompositionKey(null);
            return;
          }
          const selectedNodes = this.getNodes();
          const selectedTextNodes = [];
          for (const selectedNode of selectedNodes) {
            if ($isTextNode(selectedNode)) {
              selectedTextNodes.push(selectedNode);
            }
          }
          const selectedTextNodesLength = selectedTextNodes.length;
          if (selectedTextNodesLength === 0) {
            this.toggleFormat(formatType);
            $setCompositionKey(null);
            return;
          }
          const anchor = this.anchor;
          const focus = this.focus;
          const isBackward = this.isBackward();
          const startPoint = isBackward ? focus : anchor;
          const endPoint = isBackward ? anchor : focus;
          let firstIndex = 0;
          let firstNode = selectedTextNodes[0];
          let startOffset = startPoint.type === "element" ? 0 : startPoint.offset;
          if (startPoint.type === "text" && startOffset === firstNode.getTextContentSize()) {
            firstIndex = 1;
            firstNode = selectedTextNodes[1];
            startOffset = 0;
          }
          if (firstNode == null) {
            return;
          }
          const firstNextFormat = firstNode.getFormatFlags(formatType, null);
          const lastIndex = selectedTextNodesLength - 1;
          let lastNode = selectedTextNodes[lastIndex];
          const endOffset = endPoint.type === "text" ? endPoint.offset : lastNode.getTextContentSize();
          if (firstNode.is(lastNode)) {
            if (startOffset === endOffset) {
              return;
            }
            if (startOffset === 0 && endOffset === firstNode.getTextContentSize()) {
              firstNode.setFormat(firstNextFormat);
            } else {
              const splitNodes = firstNode.splitText(startOffset, endOffset);
              const replacement = startOffset === 0 ? splitNodes[0] : splitNodes[1];
              replacement.setFormat(firstNextFormat);
              if (startPoint.type === "text") {
                startPoint.set(replacement.__key, 0, "text");
              }
              if (endPoint.type === "text") {
                endPoint.set(replacement.__key, endOffset - startOffset, "text");
              }
            }
            this.format = firstNextFormat;
            return;
          }
          if (startOffset !== 0) {
            [, firstNode] = firstNode.splitText(startOffset);
            startOffset = 0;
          }
          firstNode.setFormat(firstNextFormat);
          const lastNextFormat = lastNode.getFormatFlags(formatType, firstNextFormat);
          if (endOffset > 0) {
            if (endOffset !== lastNode.getTextContentSize()) {
              [lastNode] = lastNode.splitText(endOffset);
            }
            lastNode.setFormat(lastNextFormat);
          }
          for (let i = firstIndex + 1; i < lastIndex; i++) {
            const textNode = selectedTextNodes[i];
            if (!textNode.isToken()) {
              const nextFormat = textNode.getFormatFlags(formatType, lastNextFormat);
              textNode.setFormat(nextFormat);
            }
          }
          if (startPoint.type === "text") {
            startPoint.set(firstNode.__key, startOffset, "text");
          }
          if (endPoint.type === "text") {
            endPoint.set(lastNode.__key, endOffset, "text");
          }
          this.format = firstNextFormat | lastNextFormat;
        }
        insertNodes(nodes, selectStart) {
          if (!this.isCollapsed()) {
            this.removeText();
          }
          const anchor = this.anchor;
          const anchorOffset = anchor.offset;
          const anchorNode = anchor.getNode();
          let target = anchorNode;
          if (anchor.type === "element") {
            const element = anchor.getNode();
            const placementNode = element.getChildAtIndex(anchorOffset - 1);
            if (placementNode === null) {
              target = element;
            } else {
              target = placementNode;
            }
          }
          const siblings = [];
          const nextSiblings = anchorNode.getNextSiblings();
          const topLevelElement = $isRootOrShadowRoot(anchorNode) ? null : anchorNode.getTopLevelElementOrThrow();
          if ($isTextNode(anchorNode)) {
            const textContent = anchorNode.getTextContent();
            const textContentLength = textContent.length;
            if (anchorOffset === 0 && textContentLength !== 0) {
              const prevSibling = anchorNode.getPreviousSibling();
              if (prevSibling !== null) {
                target = prevSibling;
              } else {
                target = anchorNode.getParentOrThrow();
              }
              siblings.push(anchorNode);
            } else if (anchorOffset === textContentLength) {
              target = anchorNode;
            } else if (anchorNode.isToken()) {
              return false;
            } else {
              let danglingText;
              [target, danglingText] = anchorNode.splitText(anchorOffset);
              siblings.push(danglingText);
            }
          }
          const startingNode = target;
          siblings.push(...nextSiblings);
          const firstNode = nodes[0];
          let didReplaceOrMerge = false;
          let lastNode = null;
          for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if ($isElementNode(node) && !node.isInline()) {
              if (node.is(firstNode)) {
                if ($isElementNode(target) && target.isEmpty() && target.canReplaceWith(node)) {
                  target.replace(node);
                  target = node;
                  didReplaceOrMerge = true;
                  continue;
                }
                const firstDescendant = node.getFirstDescendant();
                if ($isLeafNode(firstDescendant)) {
                  let element = firstDescendant.getParentOrThrow();
                  while (element.isInline()) {
                    element = element.getParentOrThrow();
                  }
                  const children = element.getChildren();
                  const childrenLength = children.length;
                  if ($isElementNode(target)) {
                    for (let s = 0; s < childrenLength; s++) {
                      target.append(children[s]);
                    }
                  } else {
                    for (let s = childrenLength - 1; s >= 0; s--) {
                      target.insertAfter(children[s]);
                    }
                    target = target.getParentOrThrow();
                  }
                  lastNode = children[childrenLength - 1];
                  element.remove();
                  didReplaceOrMerge = true;
                  if (element.is(node)) {
                    continue;
                  }
                }
              }
              if ($isTextNode(target)) {
                if (topLevelElement === null) {
                  {
                    throw Error(`insertNode: topLevelElement is root node`);
                  }
                }
                target = topLevelElement;
              }
            } else if (didReplaceOrMerge && !$isDecoratorNode(node) && $isRootOrShadowRoot(target.getParent())) {
              {
                throw Error(`insertNodes: cannot insert a non-element into a root node`);
              }
            }
            didReplaceOrMerge = false;
            if ($isElementNode(target) && !target.isInline()) {
              lastNode = node;
              if ($isDecoratorNode(node) && !node.isInline()) {
                target = target.insertAfter(node);
              } else if (!$isElementNode(node)) {
                const firstChild = target.getFirstChild();
                if (firstChild !== null) {
                  firstChild.insertBefore(node);
                } else {
                  target.append(node);
                }
                target = node;
              } else {
                if (!node.canBeEmpty() && node.isEmpty()) {
                  continue;
                }
                if ($isRootOrShadowRoot(target)) {
                  const placementNode = target.getChildAtIndex(anchorOffset);
                  if (placementNode !== null) {
                    placementNode.insertBefore(node);
                  } else {
                    target.append(node);
                  }
                  target = node;
                } else {
                  target = target.insertAfter(node);
                }
              }
            } else if (!$isElementNode(node) || $isElementNode(node) && node.isInline() || $isDecoratorNode(target) && !target.isInline()) {
              lastNode = node;
              target = target.insertAfter(node);
            } else {
              const nextTarget = target.getParentOrThrow();
              if ($isLineBreakNode(target)) {
                target.remove();
              }
              target = nextTarget;
              i--;
              continue;
            }
          }
          if (selectStart) {
            if ($isTextNode(startingNode)) {
              startingNode.select();
            } else {
              const prevSibling = target.getPreviousSibling();
              if ($isTextNode(prevSibling)) {
                prevSibling.select();
              } else {
                const index = target.getIndexWithinParent();
                target.getParentOrThrow().select(index, index);
              }
            }
          }
          if ($isElementNode(target)) {
            const lastChild = $isTextNode(lastNode) ? lastNode : $isElementNode(lastNode) && lastNode.isInline() ? lastNode.getLastDescendant() : target.getLastDescendant();
            if (!selectStart) {
              if (lastChild === null) {
                target.select();
              } else if ($isTextNode(lastChild)) {
                lastChild.select();
              } else {
                lastChild.selectNext();
              }
            }
            if (siblings.length !== 0) {
              const originalTarget = target;
              for (let i = siblings.length - 1; i >= 0; i--) {
                const sibling = siblings[i];
                const prevParent = sibling.getParentOrThrow();
                if ($isElementNode(target) && !$isBlockElementNode(sibling) && !($isDecoratorNode(sibling) && !sibling.isInline())) {
                  if (originalTarget === target) {
                    target.append(sibling);
                  } else {
                    target.insertBefore(sibling);
                  }
                  target = sibling;
                } else if (!$isElementNode(target) && !$isBlockElementNode(sibling)) {
                  target.insertBefore(sibling);
                  target = sibling;
                } else {
                  if ($isElementNode(sibling) && !sibling.canInsertAfter(target)) {
                    const prevParentClone = prevParent.constructor.clone(prevParent);
                    if (!$isElementNode(prevParentClone)) {
                      {
                        throw Error(`insertNodes: cloned parent clone is not an element`);
                      }
                    }
                    prevParentClone.append(sibling);
                    target.insertAfter(prevParentClone);
                  } else {
                    target.insertAfter(sibling);
                  }
                }
                if (prevParent.isEmpty() && !prevParent.canBeEmpty()) {
                  prevParent.remove();
                }
              }
            }
          } else if (!selectStart) {
            if ($isTextNode(target)) {
              target.select();
            } else {
              const element = target.getParentOrThrow();
              const index = target.getIndexWithinParent() + 1;
              element.select(index, index);
            }
          }
          return true;
        }
        insertParagraph() {
          if (!this.isCollapsed()) {
            this.removeText();
          }
          const anchor = this.anchor;
          const anchorOffset = anchor.offset;
          let currentElement;
          let nodesToMove = [];
          let siblingsToMove = [];
          if (anchor.type === "text") {
            const anchorNode = anchor.getNode();
            nodesToMove = anchorNode.getNextSiblings().reverse();
            currentElement = anchorNode.getParentOrThrow();
            const isInline = currentElement.isInline();
            const textContentLength = isInline ? currentElement.getTextContentSize() : anchorNode.getTextContentSize();
            if (anchorOffset === 0) {
              nodesToMove.push(anchorNode);
            } else {
              if (isInline) {
                siblingsToMove = currentElement.getNextSiblings();
              }
              if (anchorOffset !== textContentLength) {
                if (!isInline || anchorOffset !== anchorNode.getTextContentSize()) {
                  const [, splitNode] = anchorNode.splitText(anchorOffset);
                  nodesToMove.push(splitNode);
                }
              }
            }
          } else {
            currentElement = anchor.getNode();
            if ($isRootOrShadowRoot(currentElement)) {
              const paragraph = $createParagraphNode();
              const child = currentElement.getChildAtIndex(anchorOffset);
              paragraph.select();
              if (child !== null) {
                child.insertBefore(paragraph);
              } else {
                currentElement.append(paragraph);
              }
              return;
            }
            nodesToMove = currentElement.getChildren().slice(anchorOffset).reverse();
          }
          const nodesToMoveLength = nodesToMove.length;
          if (anchorOffset === 0 && nodesToMoveLength > 0 && currentElement.isInline()) {
            const parent = currentElement.getParentOrThrow();
            const newElement2 = parent.insertNewAfter(this);
            if ($isElementNode(newElement2)) {
              const children = parent.getChildren();
              for (let i = 0; i < children.length; i++) {
                newElement2.append(children[i]);
              }
            }
            return;
          }
          const newElement = currentElement.insertNewAfter(this);
          if (newElement === null) {
            this.insertLineBreak();
          } else if ($isElementNode(newElement)) {
            const currentElementFirstChild = currentElement.getFirstChild();
            const isBeginning = anchorOffset === 0 && (currentElement.is(anchor.getNode()) || currentElementFirstChild && currentElementFirstChild.is(anchor.getNode()));
            if (isBeginning && nodesToMoveLength > 0) {
              currentElement.insertBefore(newElement);
              return;
            }
            let firstChild = null;
            const siblingsToMoveLength = siblingsToMove.length;
            const parent = newElement.getParentOrThrow();
            if (siblingsToMoveLength > 0) {
              for (let i = 0; i < siblingsToMoveLength; i++) {
                const siblingToMove = siblingsToMove[i];
                parent.append(siblingToMove);
              }
            }
            if (nodesToMoveLength !== 0) {
              for (let i = 0; i < nodesToMoveLength; i++) {
                const nodeToMove = nodesToMove[i];
                if (firstChild === null) {
                  newElement.append(nodeToMove);
                } else {
                  firstChild.insertBefore(nodeToMove);
                }
                firstChild = nodeToMove;
              }
            }
            if (!newElement.canBeEmpty() && newElement.getChildrenSize() === 0) {
              newElement.selectPrevious();
              newElement.remove();
            } else {
              newElement.selectStart();
            }
          }
        }
        insertLineBreak(selectStart) {
          const lineBreakNode = $createLineBreakNode();
          const anchor = this.anchor;
          if (anchor.type === "element") {
            const element = anchor.getNode();
            if ($isRootNode(element)) {
              this.insertParagraph();
            }
          }
          if (selectStart) {
            this.insertNodes([lineBreakNode], true);
          } else {
            if (this.insertNodes([lineBreakNode])) {
              lineBreakNode.selectNext(0, 0);
            }
          }
        }
        getCharacterOffsets() {
          return getCharacterOffsets(this);
        }
        extract() {
          const selectedNodes = this.getNodes();
          const selectedNodesLength = selectedNodes.length;
          const lastIndex = selectedNodesLength - 1;
          const anchor = this.anchor;
          const focus = this.focus;
          let firstNode = selectedNodes[0];
          let lastNode = selectedNodes[lastIndex];
          const [anchorOffset, focusOffset] = getCharacterOffsets(this);
          if (selectedNodesLength === 0) {
            return [];
          } else if (selectedNodesLength === 1) {
            if ($isTextNode(firstNode) && !this.isCollapsed()) {
              const startOffset = anchorOffset > focusOffset ? focusOffset : anchorOffset;
              const endOffset = anchorOffset > focusOffset ? anchorOffset : focusOffset;
              const splitNodes = firstNode.splitText(startOffset, endOffset);
              const node = startOffset === 0 ? splitNodes[0] : splitNodes[1];
              return node != null ? [node] : [];
            }
            return [firstNode];
          }
          const isBefore = anchor.isBefore(focus);
          if ($isTextNode(firstNode)) {
            const startOffset = isBefore ? anchorOffset : focusOffset;
            if (startOffset === firstNode.getTextContentSize()) {
              selectedNodes.shift();
            } else if (startOffset !== 0) {
              [, firstNode] = firstNode.splitText(startOffset);
              selectedNodes[0] = firstNode;
            }
          }
          if ($isTextNode(lastNode)) {
            const lastNodeText = lastNode.getTextContent();
            const lastNodeTextLength = lastNodeText.length;
            const endOffset = isBefore ? focusOffset : anchorOffset;
            if (endOffset === 0) {
              selectedNodes.pop();
            } else if (endOffset !== lastNodeTextLength) {
              [lastNode] = lastNode.splitText(endOffset);
              selectedNodes[lastIndex] = lastNode;
            }
          }
          return selectedNodes;
        }
        modify(alter, isBackward, granularity) {
          const focus = this.focus;
          const anchor = this.anchor;
          const collapse = alter === "move";
          const possibleNode = $getDecoratorNode(focus, isBackward);
          if ($isDecoratorNode(possibleNode) && !possibleNode.isIsolated()) {
            if (collapse) {
              const nodeSelection = $createNodeSelection();
              nodeSelection.add(possibleNode.__key);
              $setSelection(nodeSelection);
              return;
            }
            const sibling = isBackward ? possibleNode.getPreviousSibling() : possibleNode.getNextSibling();
            if (!$isTextNode(sibling)) {
              const parent = possibleNode.getParentOrThrow();
              let offset;
              let elementKey;
              if ($isElementNode(sibling)) {
                elementKey = sibling.__key;
                offset = isBackward ? sibling.getChildrenSize() : 0;
              } else {
                offset = possibleNode.getIndexWithinParent();
                elementKey = parent.__key;
                if (!isBackward) {
                  offset++;
                }
              }
              focus.set(elementKey, offset, "element");
              if (collapse) {
                anchor.set(elementKey, offset, "element");
              }
              return;
            } else {
              const siblingKey = sibling.__key;
              const offset = isBackward ? sibling.getTextContent().length : 0;
              focus.set(siblingKey, offset, "text");
              if (collapse) {
                anchor.set(siblingKey, offset, "text");
              }
              return;
            }
          }
          const domSelection = getDOMSelection();
          if (!domSelection) {
            return;
          }
          $moveNativeSelection(domSelection, alter, isBackward ? "backward" : "forward", granularity);
          if (domSelection.rangeCount > 0) {
            const range2 = domSelection.getRangeAt(0);
            this.applyDOMRange(range2);
            this.dirty = true;
            if (!collapse && (domSelection.anchorNode !== range2.startContainer || domSelection.anchorOffset !== range2.startOffset)) {
              $swapPoints(this);
            }
          }
        }
        deleteCharacter(isBackward) {
          if (this.isCollapsed()) {
            const anchor = this.anchor;
            const focus = this.focus;
            let anchorNode = anchor.getNode();
            if (!isBackward && (anchor.type === "element" && $isElementNode(anchorNode) && anchor.offset === anchorNode.getChildrenSize() || anchor.type === "text" && anchor.offset === anchorNode.getTextContentSize())) {
              const nextSibling = anchorNode.getNextSibling() || anchorNode.getParentOrThrow().getNextSibling();
              if ($isElementNode(nextSibling) && !nextSibling.canExtractContents()) {
                return;
              }
            }
            this.modify("extend", isBackward, "character");
            if (!this.isCollapsed()) {
              const focusNode = focus.type === "text" ? focus.getNode() : null;
              anchorNode = anchor.type === "text" ? anchor.getNode() : null;
              if (focusNode !== null && focusNode.isSegmented()) {
                const offset = focus.offset;
                const textContentSize = focusNode.getTextContentSize();
                if (focusNode.is(anchorNode) || isBackward && offset !== textContentSize || !isBackward && offset !== 0) {
                  $removeSegment(focusNode, isBackward, offset);
                  return;
                }
              } else if (anchorNode !== null && anchorNode.isSegmented()) {
                const offset = anchor.offset;
                const textContentSize = anchorNode.getTextContentSize();
                if (anchorNode.is(focusNode) || isBackward && offset !== 0 || !isBackward && offset !== textContentSize) {
                  $removeSegment(anchorNode, isBackward, offset);
                  return;
                }
              }
              $updateCaretSelectionForUnicodeCharacter(this, isBackward);
            } else if (isBackward && anchor.offset === 0) {
              const element = anchor.type === "element" ? anchor.getNode() : anchor.getNode().getParentOrThrow();
              if (element.collapseAtStart(this)) {
                return;
              }
            }
          }
          this.removeText();
        }
        deleteLine(isBackward) {
          if (this.isCollapsed()) {
            if (this.anchor.type === "text") {
              this.modify("extend", isBackward, "lineboundary");
            }
            const endPoint = isBackward ? this.focus : this.anchor;
            if (endPoint.offset === 0) {
              this.modify("extend", isBackward, "character");
            }
          }
          this.removeText();
        }
        deleteWord(isBackward) {
          if (this.isCollapsed()) {
            this.modify("extend", isBackward, "word");
          }
          this.removeText();
        }
      };
      function $isNodeSelection(x) {
        return x instanceof NodeSelection;
      }
      function getCharacterOffset(point) {
        const offset = point.offset;
        if (point.type === "text") {
          return offset;
        }
        const parent = point.getNode();
        return offset === parent.getChildrenSize() ? parent.getTextContent().length : 0;
      }
      function getCharacterOffsets(selection) {
        const anchor = selection.anchor;
        const focus = selection.focus;
        if (anchor.type === "element" && focus.type === "element" && anchor.key === focus.key && anchor.offset === focus.offset) {
          return [0, 0];
        }
        return [getCharacterOffset(anchor), getCharacterOffset(focus)];
      }
      function $swapPoints(selection) {
        const focus = selection.focus;
        const anchor = selection.anchor;
        const anchorKey = anchor.key;
        const anchorOffset = anchor.offset;
        const anchorType = anchor.type;
        $setPointValues(anchor, focus.key, focus.offset, focus.type);
        $setPointValues(focus, anchorKey, anchorOffset, anchorType);
        selection._cachedNodes = null;
      }
      function $moveNativeSelection(domSelection, alter, direction, granularity) {
        domSelection.modify(alter, direction, granularity);
      }
      function $updateCaretSelectionForUnicodeCharacter(selection, isBackward) {
        const anchor = selection.anchor;
        const focus = selection.focus;
        const anchorNode = anchor.getNode();
        const focusNode = focus.getNode();
        if (anchorNode === focusNode && anchor.type === "text" && focus.type === "text") {
          const anchorOffset = anchor.offset;
          const focusOffset = focus.offset;
          const isBefore = anchorOffset < focusOffset;
          const startOffset = isBefore ? anchorOffset : focusOffset;
          const endOffset = isBefore ? focusOffset : anchorOffset;
          const characterOffset = endOffset - 1;
          if (startOffset !== characterOffset) {
            const text = anchorNode.getTextContent().slice(startOffset, endOffset);
            if (!doesContainGrapheme(text)) {
              if (isBackward) {
                focus.offset = characterOffset;
              } else {
                anchor.offset = characterOffset;
              }
            }
          }
        }
      }
      function $removeSegment(node, isBackward, offset) {
        const textNode = node;
        const textContent = textNode.getTextContent();
        const split = textContent.split(/(?=\s)/g);
        const splitLength = split.length;
        let segmentOffset = 0;
        let restoreOffset = 0;
        for (let i = 0; i < splitLength; i++) {
          const text = split[i];
          const isLast = i === splitLength - 1;
          restoreOffset = segmentOffset;
          segmentOffset += text.length;
          if (isBackward && segmentOffset === offset || segmentOffset > offset || isLast) {
            split.splice(i, 1);
            if (isLast) {
              restoreOffset = void 0;
            }
            break;
          }
        }
        const nextTextContent = split.join("").trim();
        if (nextTextContent === "") {
          textNode.remove();
        } else {
          textNode.setTextContent(nextTextContent);
          textNode.select(restoreOffset, restoreOffset);
        }
      }
      function shouldResolveAncestor(resolvedElement, resolvedOffset, lastPoint) {
        const parent = resolvedElement.getParent();
        return lastPoint === null || parent === null || !parent.canBeEmpty() || parent !== lastPoint.getNode();
      }
      function internalResolveSelectionPoint(dom, offset, lastPoint) {
        let resolvedOffset = offset;
        let resolvedNode;
        if (dom.nodeType === DOM_ELEMENT_TYPE) {
          let moveSelectionToEnd = false;
          const childNodes = dom.childNodes;
          const childNodesLength = childNodes.length;
          if (resolvedOffset === childNodesLength) {
            moveSelectionToEnd = true;
            resolvedOffset = childNodesLength - 1;
          }
          const childDOM = childNodes[resolvedOffset];
          resolvedNode = getNodeFromDOM(childDOM);
          if ($isTextNode(resolvedNode)) {
            resolvedOffset = getTextNodeOffset(resolvedNode, moveSelectionToEnd);
          } else {
            let resolvedElement = getNodeFromDOM(dom);
            if (resolvedElement === null) {
              return null;
            }
            if ($isElementNode(resolvedElement)) {
              let child = resolvedElement.getChildAtIndex(resolvedOffset);
              if ($isElementNode(child) && shouldResolveAncestor(child, resolvedOffset, lastPoint)) {
                const descendant = moveSelectionToEnd ? child.getLastDescendant() : child.getFirstDescendant();
                if (descendant === null) {
                  resolvedElement = child;
                  resolvedOffset = 0;
                } else {
                  child = descendant;
                  resolvedElement = child.getParentOrThrow();
                }
              }
              if ($isTextNode(child)) {
                resolvedNode = child;
                resolvedElement = null;
                resolvedOffset = getTextNodeOffset(child, moveSelectionToEnd);
              } else if (child !== resolvedElement && moveSelectionToEnd) {
                resolvedOffset++;
              }
            } else {
              const index = resolvedElement.getIndexWithinParent();
              if (offset === 0 && $isDecoratorNode(resolvedElement) && getNodeFromDOM(dom) === resolvedElement) {
                resolvedOffset = index;
              } else {
                resolvedOffset = index + 1;
              }
              resolvedElement = resolvedElement.getParentOrThrow();
            }
            if ($isElementNode(resolvedElement)) {
              return $createPoint(resolvedElement.__key, resolvedOffset, "element");
            }
          }
        } else {
          resolvedNode = getNodeFromDOM(dom);
        }
        if (!$isTextNode(resolvedNode)) {
          return null;
        }
        return $createPoint(resolvedNode.__key, resolvedOffset, "text");
      }
      function resolveSelectionPointOnBoundary(point, isBackward, isCollapsed) {
        const offset = point.offset;
        const node = point.getNode();
        if (offset === 0) {
          const prevSibling = node.getPreviousSibling();
          const parent = node.getParent();
          if (!isBackward) {
            if ($isElementNode(prevSibling) && !isCollapsed && prevSibling.isInline()) {
              point.key = prevSibling.__key;
              point.offset = prevSibling.getChildrenSize();
              point.type = "element";
            } else if ($isTextNode(prevSibling)) {
              point.key = prevSibling.__key;
              point.offset = prevSibling.getTextContent().length;
            }
          } else if ((isCollapsed || !isBackward) && prevSibling === null && $isElementNode(parent) && parent.isInline()) {
            const parentSibling = parent.getPreviousSibling();
            if ($isTextNode(parentSibling)) {
              point.key = parentSibling.__key;
              point.offset = parentSibling.getTextContent().length;
            }
          }
        } else if (offset === node.getTextContent().length) {
          const nextSibling = node.getNextSibling();
          const parent = node.getParent();
          if (isBackward && $isElementNode(nextSibling) && nextSibling.isInline()) {
            point.key = nextSibling.__key;
            point.offset = 0;
            point.type = "element";
          } else if ((isCollapsed || isBackward) && nextSibling === null && $isElementNode(parent) && parent.isInline() && !parent.canInsertTextAfter()) {
            const parentSibling = parent.getNextSibling();
            if ($isTextNode(parentSibling)) {
              point.key = parentSibling.__key;
              point.offset = 0;
            }
          }
        }
      }
      function normalizeSelectionPointsForBoundaries(anchor, focus, lastSelection) {
        if (anchor.type === "text" && focus.type === "text") {
          const isBackward = anchor.isBefore(focus);
          const isCollapsed = anchor.is(focus);
          resolveSelectionPointOnBoundary(anchor, isBackward, isCollapsed);
          resolveSelectionPointOnBoundary(focus, !isBackward, isCollapsed);
          if (isCollapsed) {
            focus.key = anchor.key;
            focus.offset = anchor.offset;
            focus.type = anchor.type;
          }
          const editor = getActiveEditor();
          if (editor.isComposing() && editor._compositionKey !== anchor.key && $isRangeSelection2(lastSelection)) {
            const lastAnchor = lastSelection.anchor;
            const lastFocus = lastSelection.focus;
            $setPointValues(anchor, lastAnchor.key, lastAnchor.offset, lastAnchor.type);
            $setPointValues(focus, lastFocus.key, lastFocus.offset, lastFocus.type);
          }
        }
      }
      function internalResolveSelectionPoints(anchorDOM, anchorOffset, focusDOM, focusOffset, editor, lastSelection) {
        if (anchorDOM === null || focusDOM === null || !isSelectionWithinEditor(editor, anchorDOM, focusDOM)) {
          return null;
        }
        const resolvedAnchorPoint = internalResolveSelectionPoint(anchorDOM, anchorOffset, $isRangeSelection2(lastSelection) ? lastSelection.anchor : null);
        if (resolvedAnchorPoint === null) {
          return null;
        }
        const resolvedFocusPoint = internalResolveSelectionPoint(focusDOM, focusOffset, $isRangeSelection2(lastSelection) ? lastSelection.focus : null);
        if (resolvedFocusPoint === null) {
          return null;
        }
        if (resolvedAnchorPoint.type === "element" && resolvedFocusPoint.type === "element") {
          const anchorNode = getNodeFromDOM(anchorDOM);
          const focusNode = getNodeFromDOM(focusDOM);
          if ($isDecoratorNode(anchorNode) && $isDecoratorNode(focusNode)) {
            return null;
          }
        }
        normalizeSelectionPointsForBoundaries(resolvedAnchorPoint, resolvedFocusPoint, lastSelection);
        return [resolvedAnchorPoint, resolvedFocusPoint];
      }
      function $isBlockElementNode(node) {
        return $isElementNode(node) && !node.isInline();
      }
      function internalMakeRangeSelection(anchorKey, anchorOffset, focusKey, focusOffset, anchorType, focusType) {
        const editorState = getActiveEditorState();
        const selection = new RangeSelection($createPoint(anchorKey, anchorOffset, anchorType), $createPoint(focusKey, focusOffset, focusType), 0);
        selection.dirty = true;
        editorState._selection = selection;
        return selection;
      }
      function $createRangeSelection() {
        const anchor = $createPoint("root", 0, "element");
        const focus = $createPoint("root", 0, "element");
        return new RangeSelection(anchor, focus, 0);
      }
      function $createNodeSelection() {
        return new NodeSelection(/* @__PURE__ */ new Set());
      }
      function DEPRECATED_$createGridSelection() {
        const anchor = $createPoint("root", 0, "element");
        const focus = $createPoint("root", 0, "element");
        return new GridSelection("root", anchor, focus);
      }
      function internalCreateSelection(editor) {
        const currentEditorState = editor.getEditorState();
        const lastSelection = currentEditorState._selection;
        const domSelection = getDOMSelection();
        if ($isNodeSelection(lastSelection) || DEPRECATED_$isGridSelection(lastSelection)) {
          return lastSelection.clone();
        }
        return internalCreateRangeSelection(lastSelection, domSelection, editor);
      }
      function internalCreateRangeSelection(lastSelection, domSelection, editor) {
        const windowObj = editor._window;
        if (windowObj === null) {
          return null;
        }
        const windowEvent = windowObj.event;
        const eventType = windowEvent ? windowEvent.type : void 0;
        const isSelectionChange = eventType === "selectionchange";
        const useDOMSelection = !getIsProcesssingMutations() && (isSelectionChange || eventType === "beforeinput" || eventType === "compositionstart" || eventType === "compositionend" || eventType === "click" && windowEvent && windowEvent.detail === 3 || eventType === void 0);
        let anchorDOM, focusDOM, anchorOffset, focusOffset;
        if (!$isRangeSelection2(lastSelection) || useDOMSelection) {
          if (domSelection === null) {
            return null;
          }
          anchorDOM = domSelection.anchorNode;
          focusDOM = domSelection.focusNode;
          anchorOffset = domSelection.anchorOffset;
          focusOffset = domSelection.focusOffset;
          if (isSelectionChange && $isRangeSelection2(lastSelection) && !isSelectionWithinEditor(editor, anchorDOM, focusDOM)) {
            return lastSelection.clone();
          }
        } else {
          return lastSelection.clone();
        }
        const resolvedSelectionPoints = internalResolveSelectionPoints(anchorDOM, anchorOffset, focusDOM, focusOffset, editor, lastSelection);
        if (resolvedSelectionPoints === null) {
          return null;
        }
        const [resolvedAnchorPoint, resolvedFocusPoint] = resolvedSelectionPoints;
        return new RangeSelection(resolvedAnchorPoint, resolvedFocusPoint, !$isRangeSelection2(lastSelection) ? 0 : lastSelection.format);
      }
      function $getSelection2() {
        const editorState = getActiveEditorState();
        return editorState._selection;
      }
      function $getPreviousSelection() {
        const editor = getActiveEditor();
        return editor._editorState._selection;
      }
      function $updateElementSelectionOnCreateDeleteNode(selection, parentNode, nodeOffset, times = 1) {
        const anchor = selection.anchor;
        const focus = selection.focus;
        const anchorNode = anchor.getNode();
        const focusNode = focus.getNode();
        if (!parentNode.is(anchorNode) && !parentNode.is(focusNode)) {
          return;
        }
        const parentKey = parentNode.__key;
        if (selection.isCollapsed()) {
          const selectionOffset = anchor.offset;
          if (nodeOffset <= selectionOffset) {
            const newSelectionOffset = Math.max(0, selectionOffset + times);
            anchor.set(parentKey, newSelectionOffset, "element");
            focus.set(parentKey, newSelectionOffset, "element");
            $updateSelectionResolveTextNodes(selection);
          }
          return;
        }
        const isBackward = selection.isBackward();
        const firstPoint = isBackward ? focus : anchor;
        const firstPointNode = firstPoint.getNode();
        const lastPoint = isBackward ? anchor : focus;
        const lastPointNode = lastPoint.getNode();
        if (parentNode.is(firstPointNode)) {
          const firstPointOffset = firstPoint.offset;
          if (nodeOffset <= firstPointOffset) {
            firstPoint.set(parentKey, Math.max(0, firstPointOffset + times), "element");
          }
        }
        if (parentNode.is(lastPointNode)) {
          const lastPointOffset = lastPoint.offset;
          if (nodeOffset <= lastPointOffset) {
            lastPoint.set(parentKey, Math.max(0, lastPointOffset + times), "element");
          }
        }
        $updateSelectionResolveTextNodes(selection);
      }
      function $updateSelectionResolveTextNodes(selection) {
        const anchor = selection.anchor;
        const anchorOffset = anchor.offset;
        const focus = selection.focus;
        const focusOffset = focus.offset;
        const anchorNode = anchor.getNode();
        const focusNode = focus.getNode();
        if (selection.isCollapsed()) {
          if (!$isElementNode(anchorNode)) {
            return;
          }
          const childSize = anchorNode.getChildrenSize();
          const anchorOffsetAtEnd = anchorOffset >= childSize;
          const child = anchorOffsetAtEnd ? anchorNode.getChildAtIndex(childSize - 1) : anchorNode.getChildAtIndex(anchorOffset);
          if ($isTextNode(child)) {
            let newOffset = 0;
            if (anchorOffsetAtEnd) {
              newOffset = child.getTextContentSize();
            }
            anchor.set(child.__key, newOffset, "text");
            focus.set(child.__key, newOffset, "text");
          }
          return;
        }
        if ($isElementNode(anchorNode)) {
          const childSize = anchorNode.getChildrenSize();
          const anchorOffsetAtEnd = anchorOffset >= childSize;
          const child = anchorOffsetAtEnd ? anchorNode.getChildAtIndex(childSize - 1) : anchorNode.getChildAtIndex(anchorOffset);
          if ($isTextNode(child)) {
            let newOffset = 0;
            if (anchorOffsetAtEnd) {
              newOffset = child.getTextContentSize();
            }
            anchor.set(child.__key, newOffset, "text");
          }
        }
        if ($isElementNode(focusNode)) {
          const childSize = focusNode.getChildrenSize();
          const focusOffsetAtEnd = focusOffset >= childSize;
          const child = focusOffsetAtEnd ? focusNode.getChildAtIndex(childSize - 1) : focusNode.getChildAtIndex(focusOffset);
          if ($isTextNode(child)) {
            let newOffset = 0;
            if (focusOffsetAtEnd) {
              newOffset = child.getTextContentSize();
            }
            focus.set(child.__key, newOffset, "text");
          }
        }
      }
      function applySelectionTransforms(nextEditorState, editor) {
        const prevEditorState = editor.getEditorState();
        const prevSelection = prevEditorState._selection;
        const nextSelection = nextEditorState._selection;
        if ($isRangeSelection2(nextSelection)) {
          const anchor = nextSelection.anchor;
          const focus = nextSelection.focus;
          let anchorNode;
          if (anchor.type === "text") {
            anchorNode = anchor.getNode();
            anchorNode.selectionTransform(prevSelection, nextSelection);
          }
          if (focus.type === "text") {
            const focusNode = focus.getNode();
            if (anchorNode !== focusNode) {
              focusNode.selectionTransform(prevSelection, nextSelection);
            }
          }
        }
      }
      function moveSelectionPointToSibling(point, node, parent, prevSibling, nextSibling) {
        let siblingKey = null;
        let offset = 0;
        let type = null;
        if (prevSibling !== null) {
          siblingKey = prevSibling.__key;
          if ($isTextNode(prevSibling)) {
            offset = prevSibling.getTextContentSize();
            type = "text";
          } else if ($isElementNode(prevSibling)) {
            offset = prevSibling.getChildrenSize();
            type = "element";
          }
        } else {
          if (nextSibling !== null) {
            siblingKey = nextSibling.__key;
            if ($isTextNode(nextSibling)) {
              type = "text";
            } else if ($isElementNode(nextSibling)) {
              type = "element";
            }
          }
        }
        if (siblingKey !== null && type !== null) {
          point.set(siblingKey, offset, type);
        } else {
          offset = node.getIndexWithinParent();
          if (offset === -1) {
            offset = parent.getChildrenSize();
          }
          point.set(parent.__key, offset, "element");
        }
      }
      function adjustPointOffsetForMergedSibling(point, isBefore, key, target, textLength) {
        if (point.type === "text") {
          point.key = key;
          if (!isBefore) {
            point.offset += textLength;
          }
        } else if (point.offset > target.getIndexWithinParent()) {
          point.offset -= 1;
        }
      }
      function updateDOMSelection(prevSelection, nextSelection, editor, domSelection, tags, rootElement) {
        const anchorDOMNode = domSelection.anchorNode;
        const focusDOMNode = domSelection.focusNode;
        const anchorOffset = domSelection.anchorOffset;
        const focusOffset = domSelection.focusOffset;
        const activeElement = document.activeElement;
        if (tags.has("collaboration") && activeElement !== rootElement) {
          return;
        }
        if (!$isRangeSelection2(nextSelection)) {
          if (prevSelection !== null && isSelectionWithinEditor(editor, anchorDOMNode, focusDOMNode)) {
            domSelection.removeAllRanges();
          }
          return;
        }
        const anchor = nextSelection.anchor;
        const focus = nextSelection.focus;
        const anchorKey = anchor.key;
        const focusKey = focus.key;
        const anchorDOM = getElementByKeyOrThrow(editor, anchorKey);
        const focusDOM = getElementByKeyOrThrow(editor, focusKey);
        const nextAnchorOffset = anchor.offset;
        const nextFocusOffset = focus.offset;
        const nextFormat = nextSelection.format;
        const isCollapsed = nextSelection.isCollapsed();
        let nextAnchorNode = anchorDOM;
        let nextFocusNode = focusDOM;
        let anchorFormatChanged = false;
        if (anchor.type === "text") {
          nextAnchorNode = getDOMTextNode(anchorDOM);
          anchorFormatChanged = anchor.getNode().getFormat() !== nextFormat;
        }
        if (focus.type === "text") {
          nextFocusNode = getDOMTextNode(focusDOM);
        }
        if (nextAnchorNode === null || nextFocusNode === null) {
          return;
        }
        if (isCollapsed && (prevSelection === null || anchorFormatChanged || $isRangeSelection2(prevSelection) && prevSelection.format !== nextFormat)) {
          markCollapsedSelectionFormat(nextFormat, nextAnchorOffset, anchorKey, performance.now());
        }
        if (anchorOffset === nextAnchorOffset && focusOffset === nextFocusOffset && anchorDOMNode === nextAnchorNode && focusDOMNode === nextFocusNode && !(domSelection.type === "Range" && isCollapsed)) {
          if (rootElement !== null && (activeElement === null || !rootElement.contains(activeElement))) {
            rootElement.focus({
              preventScroll: true
            });
          }
          if (!(IS_IOS || IS_SAFARI) || anchor.type !== "element") {
            return;
          }
        }
        try {
          domSelection.setBaseAndExtent(nextAnchorNode, nextAnchorOffset, nextFocusNode, nextFocusOffset);
          if (nextSelection.isCollapsed() && rootElement !== null && rootElement === activeElement) {
            scrollIntoViewIfNeeded(editor, anchor, rootElement, tags);
          }
          markSelectionChangeFromDOMUpdate();
        } catch (error) {
        }
      }
      function $insertNodes(nodes, selectStart) {
        let selection = $getSelection2();
        if (selection === null) {
          selection = $getRoot().selectEnd();
        }
        return selection.insertNodes(nodes, selectStart);
      }
      var activeEditorState = null;
      var activeEditor = null;
      var isReadOnlyMode = false;
      var isAttemptingToRecoverFromReconcilerError = false;
      var infiniteTransformCount = 0;
      function isCurrentlyReadOnlyMode() {
        return isReadOnlyMode;
      }
      function errorOnReadOnly() {
        if (isReadOnlyMode) {
          {
            throw Error(`Cannot use method in read-only mode.`);
          }
        }
      }
      function errorOnInfiniteTransforms() {
        if (infiniteTransformCount > 99) {
          {
            throw Error(`One or more transforms are endlessly triggering additional transforms. May have encountered infinite recursion caused by transforms that have their preconditions too lose and/or conflict with each other.`);
          }
        }
      }
      function getActiveEditorState() {
        if (activeEditorState === null) {
          {
            throw Error(`Unable to find an active editor state. State helpers or node methods can only be used synchronously during the callback of editor.update() or editorState.read().`);
          }
        }
        return activeEditorState;
      }
      function getActiveEditor() {
        if (activeEditor === null) {
          {
            throw Error(`Unable to find an active editor. This method can only be used synchronously during the callback of editor.update().`);
          }
        }
        return activeEditor;
      }
      function $applyTransforms(editor, node, transformsCache) {
        const type = node.__type;
        const registeredNode = getRegisteredNodeOrThrow(editor, type);
        let transformsArr = transformsCache.get(type);
        if (transformsArr === void 0) {
          transformsArr = Array.from(registeredNode.transforms);
          transformsCache.set(type, transformsArr);
        }
        const transformsArrLength = transformsArr.length;
        for (let i = 0; i < transformsArrLength; i++) {
          transformsArr[i](node);
          if (!node.isAttached()) {
            break;
          }
        }
      }
      function $isNodeValidForTransform(node, compositionKey) {
        return node !== void 0 && node.__key !== compositionKey && node.isAttached();
      }
      function $normalizeAllDirtyTextNodes(editorState, editor) {
        const dirtyLeaves = editor._dirtyLeaves;
        const nodeMap = editorState._nodeMap;
        for (const nodeKey of dirtyLeaves) {
          const node = nodeMap.get(nodeKey);
          if ($isTextNode(node) && node.isAttached() && node.isSimpleText() && !node.isUnmergeable()) {
            $normalizeTextNode(node);
          }
        }
      }
      function $applyAllTransforms(editorState, editor) {
        const dirtyLeaves = editor._dirtyLeaves;
        const dirtyElements = editor._dirtyElements;
        const nodeMap = editorState._nodeMap;
        const compositionKey = $getCompositionKey();
        const transformsCache = /* @__PURE__ */ new Map();
        let untransformedDirtyLeaves = dirtyLeaves;
        let untransformedDirtyLeavesLength = untransformedDirtyLeaves.size;
        let untransformedDirtyElements = dirtyElements;
        let untransformedDirtyElementsLength = untransformedDirtyElements.size;
        while (untransformedDirtyLeavesLength > 0 || untransformedDirtyElementsLength > 0) {
          if (untransformedDirtyLeavesLength > 0) {
            editor._dirtyLeaves = /* @__PURE__ */ new Set();
            for (const nodeKey of untransformedDirtyLeaves) {
              const node = nodeMap.get(nodeKey);
              if ($isTextNode(node) && node.isAttached() && node.isSimpleText() && !node.isUnmergeable()) {
                $normalizeTextNode(node);
              }
              if (node !== void 0 && $isNodeValidForTransform(node, compositionKey)) {
                $applyTransforms(editor, node, transformsCache);
              }
              dirtyLeaves.add(nodeKey);
            }
            untransformedDirtyLeaves = editor._dirtyLeaves;
            untransformedDirtyLeavesLength = untransformedDirtyLeaves.size;
            if (untransformedDirtyLeavesLength > 0) {
              infiniteTransformCount++;
              continue;
            }
          }
          editor._dirtyLeaves = /* @__PURE__ */ new Set();
          editor._dirtyElements = /* @__PURE__ */ new Map();
          for (const currentUntransformedDirtyElement of untransformedDirtyElements) {
            const nodeKey = currentUntransformedDirtyElement[0];
            const intentionallyMarkedAsDirty = currentUntransformedDirtyElement[1];
            if (nodeKey !== "root" && !intentionallyMarkedAsDirty) {
              continue;
            }
            const node = nodeMap.get(nodeKey);
            if (node !== void 0 && $isNodeValidForTransform(node, compositionKey)) {
              $applyTransforms(editor, node, transformsCache);
            }
            dirtyElements.set(nodeKey, intentionallyMarkedAsDirty);
          }
          untransformedDirtyLeaves = editor._dirtyLeaves;
          untransformedDirtyLeavesLength = untransformedDirtyLeaves.size;
          untransformedDirtyElements = editor._dirtyElements;
          untransformedDirtyElementsLength = untransformedDirtyElements.size;
          infiniteTransformCount++;
        }
        editor._dirtyLeaves = dirtyLeaves;
        editor._dirtyElements = dirtyElements;
      }
      function $parseSerializedNode(serializedNode) {
        const internalSerializedNode = serializedNode;
        return $parseSerializedNodeImpl(internalSerializedNode, getActiveEditor()._nodes);
      }
      function $parseSerializedNodeImpl(serializedNode, registeredNodes) {
        const type = serializedNode.type;
        const registeredNode = registeredNodes.get(type);
        if (registeredNode === void 0) {
          {
            throw Error(`parseEditorState: type "${type}" + not found`);
          }
        }
        const nodeClass = registeredNode.klass;
        if (serializedNode.type !== nodeClass.getType()) {
          {
            throw Error(`LexicalNode: Node ${nodeClass.name} does not implement .importJSON().`);
          }
        }
        const node = nodeClass.importJSON(serializedNode);
        const children = serializedNode.children;
        if ($isElementNode(node) && Array.isArray(children)) {
          for (let i = 0; i < children.length; i++) {
            const serializedJSONChildNode = children[i];
            const childNode = $parseSerializedNodeImpl(serializedJSONChildNode, registeredNodes);
            node.append(childNode);
          }
        }
        return node;
      }
      function parseEditorState(serializedEditorState, editor, updateFn) {
        const editorState = createEmptyEditorState();
        const previousActiveEditorState = activeEditorState;
        const previousReadOnlyMode = isReadOnlyMode;
        const previousActiveEditor = activeEditor;
        const previousDirtyElements = editor._dirtyElements;
        const previousDirtyLeaves = editor._dirtyLeaves;
        const previousCloneNotNeeded = editor._cloneNotNeeded;
        const previousDirtyType = editor._dirtyType;
        editor._dirtyElements = /* @__PURE__ */ new Map();
        editor._dirtyLeaves = /* @__PURE__ */ new Set();
        editor._cloneNotNeeded = /* @__PURE__ */ new Set();
        editor._dirtyType = 0;
        activeEditorState = editorState;
        isReadOnlyMode = false;
        activeEditor = editor;
        try {
          const registeredNodes = editor._nodes;
          const serializedNode = serializedEditorState.root;
          $parseSerializedNodeImpl(serializedNode, registeredNodes);
          if (updateFn) {
            updateFn();
          }
          editorState._readOnly = true;
          {
            handleDEVOnlyPendingUpdateGuarantees(editorState);
          }
        } finally {
          editor._dirtyElements = previousDirtyElements;
          editor._dirtyLeaves = previousDirtyLeaves;
          editor._cloneNotNeeded = previousCloneNotNeeded;
          editor._dirtyType = previousDirtyType;
          activeEditorState = previousActiveEditorState;
          isReadOnlyMode = previousReadOnlyMode;
          activeEditor = previousActiveEditor;
        }
        return editorState;
      }
      function readEditorState(editorState, callbackFn) {
        const previousActiveEditorState = activeEditorState;
        const previousReadOnlyMode = isReadOnlyMode;
        const previousActiveEditor = activeEditor;
        activeEditorState = editorState;
        isReadOnlyMode = true;
        activeEditor = null;
        try {
          return callbackFn();
        } finally {
          activeEditorState = previousActiveEditorState;
          isReadOnlyMode = previousReadOnlyMode;
          activeEditor = previousActiveEditor;
        }
      }
      function handleDEVOnlyPendingUpdateGuarantees(pendingEditorState) {
        const nodeMap = pendingEditorState._nodeMap;
        nodeMap.set = () => {
          throw new Error("Cannot call set() on a frozen Lexical node map");
        };
        nodeMap.clear = () => {
          throw new Error("Cannot call clear() on a frozen Lexical node map");
        };
        nodeMap.delete = () => {
          throw new Error("Cannot call delete() on a frozen Lexical node map");
        };
      }
      function commitPendingUpdates(editor) {
        const pendingEditorState = editor._pendingEditorState;
        const rootElement = editor._rootElement;
        const headless = editor._headless;
        if (rootElement === null && !headless || pendingEditorState === null) {
          return;
        }
        const currentEditorState = editor._editorState;
        const currentSelection = currentEditorState._selection;
        const pendingSelection = pendingEditorState._selection;
        const needsUpdate = editor._dirtyType !== NO_DIRTY_NODES;
        const previousActiveEditorState = activeEditorState;
        const previousReadOnlyMode = isReadOnlyMode;
        const previousActiveEditor = activeEditor;
        const previouslyUpdating = editor._updating;
        const observer = editor._observer;
        let mutatedNodes2 = null;
        editor._pendingEditorState = null;
        editor._editorState = pendingEditorState;
        if (!headless && needsUpdate && observer !== null) {
          activeEditor = editor;
          activeEditorState = pendingEditorState;
          isReadOnlyMode = false;
          editor._updating = true;
          try {
            const dirtyType = editor._dirtyType;
            const dirtyElements2 = editor._dirtyElements;
            const dirtyLeaves2 = editor._dirtyLeaves;
            observer.disconnect();
            mutatedNodes2 = reconcileRoot(currentEditorState, pendingEditorState, editor, dirtyType, dirtyElements2, dirtyLeaves2);
          } catch (error) {
            if (error instanceof Error) {
              editor._onError(error);
            }
            if (!isAttemptingToRecoverFromReconcilerError) {
              resetEditor(editor, null, rootElement, pendingEditorState);
              initMutationObserver(editor);
              editor._dirtyType = FULL_RECONCILE;
              isAttemptingToRecoverFromReconcilerError = true;
              commitPendingUpdates(editor);
              isAttemptingToRecoverFromReconcilerError = false;
            } else {
              throw error;
            }
            return;
          } finally {
            observer.observe(rootElement, {
              characterData: true,
              childList: true,
              subtree: true
            });
            editor._updating = previouslyUpdating;
            activeEditorState = previousActiveEditorState;
            isReadOnlyMode = previousReadOnlyMode;
            activeEditor = previousActiveEditor;
          }
        }
        if (!pendingEditorState._readOnly) {
          pendingEditorState._readOnly = true;
          {
            handleDEVOnlyPendingUpdateGuarantees(pendingEditorState);
            if ($isRangeSelection2(pendingSelection)) {
              Object.freeze(pendingSelection.anchor);
              Object.freeze(pendingSelection.focus);
            }
            Object.freeze(pendingSelection);
          }
        }
        const dirtyLeaves = editor._dirtyLeaves;
        const dirtyElements = editor._dirtyElements;
        const normalizedNodes = editor._normalizedNodes;
        const tags = editor._updateTags;
        const deferred = editor._deferred;
        if (needsUpdate) {
          editor._dirtyType = NO_DIRTY_NODES;
          editor._cloneNotNeeded.clear();
          editor._dirtyLeaves = /* @__PURE__ */ new Set();
          editor._dirtyElements = /* @__PURE__ */ new Map();
          editor._normalizedNodes = /* @__PURE__ */ new Set();
          editor._updateTags = /* @__PURE__ */ new Set();
        }
        $garbageCollectDetachedDecorators(editor, pendingEditorState);
        const domSelection = headless ? null : getDOMSelection();
        if (editor._editable && domSelection !== null && (needsUpdate || pendingSelection === null || pendingSelection.dirty)) {
          activeEditor = editor;
          activeEditorState = pendingEditorState;
          try {
            updateDOMSelection(currentSelection, pendingSelection, editor, domSelection, tags, rootElement);
          } finally {
            activeEditor = previousActiveEditor;
            activeEditorState = previousActiveEditorState;
          }
        }
        if (mutatedNodes2 !== null) {
          triggerMutationListeners(editor, currentEditorState, pendingEditorState, mutatedNodes2, tags, dirtyLeaves);
        }
        const pendingDecorators = editor._pendingDecorators;
        if (pendingDecorators !== null) {
          editor._decorators = pendingDecorators;
          editor._pendingDecorators = null;
          triggerListeners("decorator", editor, true, pendingDecorators);
        }
        triggerTextContentListeners(editor, currentEditorState, pendingEditorState);
        triggerListeners("update", editor, true, {
          dirtyElements,
          dirtyLeaves,
          editorState: pendingEditorState,
          normalizedNodes,
          prevEditorState: currentEditorState,
          tags
        });
        triggerDeferredUpdateCallbacks(editor, deferred);
        triggerEnqueuedUpdates(editor);
      }
      function triggerTextContentListeners(editor, currentEditorState, pendingEditorState) {
        const currentTextContent = getEditorStateTextContent(currentEditorState);
        const latestTextContent = getEditorStateTextContent(pendingEditorState);
        if (currentTextContent !== latestTextContent) {
          triggerListeners("textcontent", editor, true, latestTextContent);
        }
      }
      function triggerMutationListeners(editor, currentEditorState, pendingEditorState, mutatedNodes2, updateTags, dirtyLeaves) {
        const listeners = Array.from(editor._listeners.mutation);
        const listenersLength = listeners.length;
        for (let i = 0; i < listenersLength; i++) {
          const [listener, klass] = listeners[i];
          const mutatedNodesByType = mutatedNodes2.get(klass);
          if (mutatedNodesByType !== void 0) {
            listener(mutatedNodesByType, {
              dirtyLeaves,
              updateTags
            });
          }
        }
      }
      function triggerListeners(type, editor, isCurrentlyEnqueuingUpdates, ...payload) {
        const previouslyUpdating = editor._updating;
        editor._updating = isCurrentlyEnqueuingUpdates;
        try {
          const listeners = Array.from(editor._listeners[type]);
          for (let i = 0; i < listeners.length; i++) {
            listeners[i].apply(null, payload);
          }
        } finally {
          editor._updating = previouslyUpdating;
        }
      }
      function triggerCommandListeners(editor, type, payload) {
        if (editor._updating === false || activeEditor !== editor) {
          let returnVal = false;
          editor.update(() => {
            returnVal = triggerCommandListeners(editor, type, payload);
          });
          return returnVal;
        }
        const editors = getEditorsToPropagate(editor);
        for (let i = 4; i >= 0; i--) {
          for (let e = 0; e < editors.length; e++) {
            const currentEditor = editors[e];
            const commandListeners = currentEditor._commands;
            const listenerInPriorityOrder = commandListeners.get(type);
            if (listenerInPriorityOrder !== void 0) {
              const listenersSet = listenerInPriorityOrder[i];
              if (listenersSet !== void 0) {
                const listeners = Array.from(listenersSet);
                const listenersLength = listeners.length;
                for (let j = 0; j < listenersLength; j++) {
                  if (listeners[j](payload, editor) === true) {
                    return true;
                  }
                }
              }
            }
          }
        }
        return false;
      }
      function triggerEnqueuedUpdates(editor) {
        const queuedUpdates = editor._updates;
        if (queuedUpdates.length !== 0) {
          const queuedUpdate = queuedUpdates.shift();
          if (queuedUpdate) {
            const [updateFn, options] = queuedUpdate;
            beginUpdate(editor, updateFn, options);
          }
        }
      }
      function triggerDeferredUpdateCallbacks(editor, deferred) {
        editor._deferred = [];
        if (deferred.length !== 0) {
          const previouslyUpdating = editor._updating;
          editor._updating = true;
          try {
            for (let i = 0; i < deferred.length; i++) {
              deferred[i]();
            }
          } finally {
            editor._updating = previouslyUpdating;
          }
        }
      }
      function processNestedUpdates(editor, initialSkipTransforms) {
        const queuedUpdates = editor._updates;
        let skipTransforms = initialSkipTransforms || false;
        while (queuedUpdates.length !== 0) {
          const queuedUpdate = queuedUpdates.shift();
          if (queuedUpdate) {
            const [nextUpdateFn, options] = queuedUpdate;
            let onUpdate;
            let tag;
            if (options !== void 0) {
              onUpdate = options.onUpdate;
              tag = options.tag;
              if (options.skipTransforms) {
                skipTransforms = true;
              }
              if (onUpdate) {
                editor._deferred.push(onUpdate);
              }
              if (tag) {
                editor._updateTags.add(tag);
              }
            }
            nextUpdateFn();
          }
        }
        return skipTransforms;
      }
      function beginUpdate(editor, updateFn, options) {
        const updateTags = editor._updateTags;
        let onUpdate;
        let tag;
        let skipTransforms = false;
        if (options !== void 0) {
          onUpdate = options.onUpdate;
          tag = options.tag;
          if (tag != null) {
            updateTags.add(tag);
          }
          skipTransforms = options.skipTransforms || false;
        }
        if (onUpdate) {
          editor._deferred.push(onUpdate);
        }
        const currentEditorState = editor._editorState;
        let pendingEditorState = editor._pendingEditorState;
        let editorStateWasCloned = false;
        if (pendingEditorState === null || pendingEditorState._readOnly) {
          pendingEditorState = editor._pendingEditorState = cloneEditorState(currentEditorState);
          editorStateWasCloned = true;
        }
        const previousActiveEditorState = activeEditorState;
        const previousReadOnlyMode = isReadOnlyMode;
        const previousActiveEditor = activeEditor;
        const previouslyUpdating = editor._updating;
        activeEditorState = pendingEditorState;
        isReadOnlyMode = false;
        editor._updating = true;
        activeEditor = editor;
        try {
          if (editorStateWasCloned && !editor._headless) {
            pendingEditorState._selection = internalCreateSelection(editor);
          }
          const startingCompositionKey = editor._compositionKey;
          updateFn();
          skipTransforms = processNestedUpdates(editor, skipTransforms);
          applySelectionTransforms(pendingEditorState, editor);
          if (editor._dirtyType !== NO_DIRTY_NODES) {
            if (skipTransforms) {
              $normalizeAllDirtyTextNodes(pendingEditorState, editor);
            } else {
              $applyAllTransforms(pendingEditorState, editor);
            }
            processNestedUpdates(editor);
            $garbageCollectDetachedNodes(currentEditorState, pendingEditorState, editor._dirtyLeaves, editor._dirtyElements);
          }
          const endingCompositionKey = editor._compositionKey;
          if (startingCompositionKey !== endingCompositionKey) {
            pendingEditorState._flushSync = true;
          }
          const pendingSelection = pendingEditorState._selection;
          if ($isRangeSelection2(pendingSelection)) {
            const pendingNodeMap = pendingEditorState._nodeMap;
            const anchorKey = pendingSelection.anchor.key;
            const focusKey = pendingSelection.focus.key;
            if (pendingNodeMap.get(anchorKey) === void 0 || pendingNodeMap.get(focusKey) === void 0) {
              {
                throw Error(`updateEditor: selection has been lost because the previously selected nodes have been removed and selection wasn't moved to another node. Ensure selection changes after removing/replacing a selected node.`);
              }
            }
          } else if ($isNodeSelection(pendingSelection)) {
            if (pendingSelection._nodes.size === 0) {
              pendingEditorState._selection = null;
            }
          }
        } catch (error) {
          if (error instanceof Error) {
            editor._onError(error);
          }
          editor._pendingEditorState = currentEditorState;
          editor._dirtyType = FULL_RECONCILE;
          editor._cloneNotNeeded.clear();
          editor._dirtyLeaves = /* @__PURE__ */ new Set();
          editor._dirtyElements.clear();
          commitPendingUpdates(editor);
          return;
        } finally {
          activeEditorState = previousActiveEditorState;
          isReadOnlyMode = previousReadOnlyMode;
          activeEditor = previousActiveEditor;
          editor._updating = previouslyUpdating;
          infiniteTransformCount = 0;
        }
        const shouldUpdate = editor._dirtyType !== NO_DIRTY_NODES || editorStateHasDirtySelection(pendingEditorState, editor);
        if (shouldUpdate) {
          if (pendingEditorState._flushSync) {
            pendingEditorState._flushSync = false;
            commitPendingUpdates(editor);
          } else if (editorStateWasCloned) {
            scheduleMicroTask(() => {
              commitPendingUpdates(editor);
            });
          }
        } else {
          pendingEditorState._flushSync = false;
          if (editorStateWasCloned) {
            updateTags.clear();
            editor._deferred = [];
            editor._pendingEditorState = null;
          }
        }
      }
      function updateEditor(editor, updateFn, options) {
        if (editor._updating) {
          editor._updates.push([updateFn, options]);
        } else {
          beginUpdate(editor, updateFn, options);
        }
      }
      function internalGetActiveEditor() {
        return activeEditor;
      }
      function removeNode(nodeToRemove, restoreSelection, preserveEmptyParent) {
        errorOnReadOnly();
        const key = nodeToRemove.__key;
        const parent = nodeToRemove.getParent();
        if (parent === null) {
          return;
        }
        const selection = $maybeMoveChildrenSelectionToParent(nodeToRemove);
        let selectionMoved = false;
        if ($isRangeSelection2(selection) && restoreSelection) {
          const anchor = selection.anchor;
          const focus = selection.focus;
          if (anchor.key === key) {
            moveSelectionPointToSibling(anchor, nodeToRemove, parent, nodeToRemove.getPreviousSibling(), nodeToRemove.getNextSibling());
            selectionMoved = true;
          }
          if (focus.key === key) {
            moveSelectionPointToSibling(focus, nodeToRemove, parent, nodeToRemove.getPreviousSibling(), nodeToRemove.getNextSibling());
            selectionMoved = true;
          }
        }
        const writableParent = parent.getWritable();
        const parentChildren = writableParent.__children;
        const index = parentChildren.indexOf(key);
        if (index === -1) {
          {
            throw Error(`Node is not a child of its parent`);
          }
        }
        internalMarkSiblingsAsDirty(nodeToRemove);
        parentChildren.splice(index, 1);
        const writableNodeToRemove = nodeToRemove.getWritable();
        writableNodeToRemove.__parent = null;
        if ($isRangeSelection2(selection) && restoreSelection && !selectionMoved) {
          $updateElementSelectionOnCreateDeleteNode(selection, parent, index, -1);
        }
        if (!preserveEmptyParent && !$isRootOrShadowRoot(parent) && !parent.canBeEmpty() && parent.isEmpty()) {
          removeNode(parent, restoreSelection);
        }
        if ($isRootNode(parent) && parent.isEmpty()) {
          parent.selectEnd();
        }
      }
      function $getNodeByKeyOrThrow(key) {
        const node = $getNodeByKey(key);
        if (node === null) {
          {
            throw Error(`Expected node with key ${key} to exist but it's not in the nodeMap.`);
          }
        }
        return node;
      }
      var LexicalNode = class {
        static getType() {
          {
            throw Error(`LexicalNode: Node ${this.name} does not implement .getType().`);
          }
        }
        static clone(_data) {
          {
            throw Error(`LexicalNode: Node ${this.name} does not implement .clone().`);
          }
        }
        constructor(key) {
          this.__type = this.constructor.getType();
          this.__parent = null;
          $setNodeKey(this, key);
          {
            if (this.__type !== "root") {
              errorOnReadOnly();
              errorOnTypeKlassMismatch(
                this.__type,
                this.constructor
              );
            }
          }
        }
        getType() {
          return this.__type;
        }
        isAttached() {
          let nodeKey = this.__key;
          while (nodeKey !== null) {
            if (nodeKey === "root") {
              return true;
            }
            const node = $getNodeByKey(nodeKey);
            if (node === null) {
              break;
            }
            nodeKey = node.__parent;
          }
          return false;
        }
        isSelected() {
          const selection = $getSelection2();
          if (selection == null) {
            return false;
          }
          const isSelected = selection.getNodes().some((n) => n.__key === this.__key);
          if ($isTextNode(this)) {
            return isSelected;
          }
          if ($isRangeSelection2(selection) && selection.anchor.type === "element" && selection.focus.type === "element" && selection.anchor.key === selection.focus.key && selection.anchor.offset === selection.focus.offset) {
            return false;
          }
          return isSelected;
        }
        getKey() {
          return this.__key;
        }
        getIndexWithinParent() {
          const parent = this.getParent();
          if (parent === null) {
            return -1;
          }
          const children = parent.__children;
          return children.indexOf(this.__key);
        }
        getParent() {
          const parent = this.getLatest().__parent;
          if (parent === null) {
            return null;
          }
          return $getNodeByKey(parent);
        }
        getParentOrThrow() {
          const parent = this.getParent();
          if (parent === null) {
            {
              throw Error(`Expected node ${this.__key} to have a parent.`);
            }
          }
          return parent;
        }
        getTopLevelElement() {
          let node = this;
          while (node !== null) {
            const parent = node.getParent();
            if ($isRootOrShadowRoot(parent)) {
              return node;
            }
            node = parent;
          }
          return null;
        }
        getTopLevelElementOrThrow() {
          const parent = this.getTopLevelElement();
          if (parent === null) {
            {
              throw Error(`Expected node ${this.__key} to have a top parent element.`);
            }
          }
          return parent;
        }
        getParents() {
          const parents = [];
          let node = this.getParent();
          while (node !== null) {
            parents.push(node);
            node = node.getParent();
          }
          return parents;
        }
        getParentKeys() {
          const parents = [];
          let node = this.getParent();
          while (node !== null) {
            parents.push(node.__key);
            node = node.getParent();
          }
          return parents;
        }
        getPreviousSibling() {
          const parent = this.getParent();
          if (parent === null) {
            return null;
          }
          const children = parent.__children;
          const index = children.indexOf(this.__key);
          if (index <= 0) {
            return null;
          }
          return $getNodeByKey(children[index - 1]);
        }
        getPreviousSiblings() {
          const parent = this.getParent();
          if (parent === null) {
            return [];
          }
          const children = parent.__children;
          const index = children.indexOf(this.__key);
          return children.slice(0, index).map((childKey) => $getNodeByKeyOrThrow(childKey));
        }
        getNextSibling() {
          const parent = this.getParent();
          if (parent === null) {
            return null;
          }
          const children = parent.__children;
          const childrenLength = children.length;
          const index = children.indexOf(this.__key);
          if (index >= childrenLength - 1) {
            return null;
          }
          return $getNodeByKey(children[index + 1]);
        }
        getNextSiblings() {
          const parent = this.getParent();
          if (parent === null) {
            return [];
          }
          const children = parent.__children;
          const index = children.indexOf(this.__key);
          return children.slice(index + 1).map((childKey) => $getNodeByKeyOrThrow(childKey));
        }
        getCommonAncestor(node) {
          const a = this.getParents();
          const b = node.getParents();
          if ($isElementNode(this)) {
            a.unshift(this);
          }
          if ($isElementNode(node)) {
            b.unshift(node);
          }
          const aLength = a.length;
          const bLength = b.length;
          if (aLength === 0 || bLength === 0 || a[aLength - 1] !== b[bLength - 1]) {
            return null;
          }
          const bSet = new Set(b);
          for (let i = 0; i < aLength; i++) {
            const ancestor = a[i];
            if (bSet.has(ancestor)) {
              return ancestor;
            }
          }
          return null;
        }
        is(object) {
          if (object == null) {
            return false;
          }
          return this.__key === object.__key;
        }
        isBefore(targetNode) {
          if (targetNode.isParentOf(this)) {
            return true;
          }
          if (this.isParentOf(targetNode)) {
            return false;
          }
          const commonAncestor = this.getCommonAncestor(targetNode);
          let indexA = 0;
          let indexB = 0;
          let node = this;
          while (true) {
            const parent = node.getParentOrThrow();
            if (parent === commonAncestor) {
              indexA = parent.__children.indexOf(node.__key);
              break;
            }
            node = parent;
          }
          node = targetNode;
          while (true) {
            const parent = node.getParentOrThrow();
            if (parent === commonAncestor) {
              indexB = parent.__children.indexOf(node.__key);
              break;
            }
            node = parent;
          }
          return indexA < indexB;
        }
        isParentOf(targetNode) {
          const key = this.__key;
          if (key === targetNode.__key) {
            return false;
          }
          let node = targetNode;
          while (node !== null) {
            if (node.__key === key) {
              return true;
            }
            node = node.getParent();
          }
          return false;
        }
        getNodesBetween(targetNode) {
          const isBefore = this.isBefore(targetNode);
          const nodes = [];
          const visited = /* @__PURE__ */ new Set();
          let node = this;
          while (true) {
            const key = node.__key;
            if (!visited.has(key)) {
              visited.add(key);
              nodes.push(node);
            }
            if (node === targetNode) {
              break;
            }
            const child = $isElementNode(node) ? isBefore ? node.getFirstChild() : node.getLastChild() : null;
            if (child !== null) {
              node = child;
              continue;
            }
            const nextSibling = isBefore ? node.getNextSibling() : node.getPreviousSibling();
            if (nextSibling !== null) {
              node = nextSibling;
              continue;
            }
            const parent = node.getParentOrThrow();
            if (!visited.has(parent.__key)) {
              nodes.push(parent);
            }
            if (parent === targetNode) {
              break;
            }
            let parentSibling = null;
            let ancestor = parent;
            do {
              if (ancestor === null) {
                {
                  throw Error(`getNodesBetween: ancestor is null`);
                }
              }
              parentSibling = isBefore ? ancestor.getNextSibling() : ancestor.getPreviousSibling();
              ancestor = ancestor.getParent();
              if (ancestor !== null) {
                if (parentSibling === null && !visited.has(ancestor.__key)) {
                  nodes.push(ancestor);
                }
              }
            } while (parentSibling === null);
            node = parentSibling;
          }
          if (!isBefore) {
            nodes.reverse();
          }
          return nodes;
        }
        isDirty() {
          const editor = getActiveEditor();
          const dirtyLeaves = editor._dirtyLeaves;
          return dirtyLeaves !== null && dirtyLeaves.has(this.__key);
        }
        getLatest() {
          const latest = $getNodeByKey(this.__key);
          if (latest === null) {
            {
              throw Error(`Lexical node does not exist in active editor state. Avoid using the same node references between nested closures from editor.read/editor.update.`);
            }
          }
          return latest;
        }
        getWritable() {
          errorOnReadOnly();
          const editorState = getActiveEditorState();
          const editor = getActiveEditor();
          const nodeMap = editorState._nodeMap;
          const key = this.__key;
          const latestNode = this.getLatest();
          const parent = latestNode.__parent;
          const cloneNotNeeded = editor._cloneNotNeeded;
          const selection = $getSelection2();
          if (selection !== null) {
            selection._cachedNodes = null;
          }
          if (cloneNotNeeded.has(key)) {
            internalMarkNodeAsDirty(latestNode);
            return latestNode;
          }
          const constructor = latestNode.constructor;
          const mutableNode = constructor.clone(latestNode);
          mutableNode.__parent = parent;
          if ($isElementNode(latestNode) && $isElementNode(mutableNode)) {
            mutableNode.__children = Array.from(latestNode.__children);
            mutableNode.__indent = latestNode.__indent;
            mutableNode.__format = latestNode.__format;
            mutableNode.__dir = latestNode.__dir;
          } else if ($isTextNode(latestNode) && $isTextNode(mutableNode)) {
            mutableNode.__format = latestNode.__format;
            mutableNode.__style = latestNode.__style;
            mutableNode.__mode = latestNode.__mode;
            mutableNode.__detail = latestNode.__detail;
          }
          cloneNotNeeded.add(key);
          mutableNode.__key = key;
          internalMarkNodeAsDirty(mutableNode);
          nodeMap.set(key, mutableNode);
          return mutableNode;
        }
        getTextContent() {
          return "";
        }
        getTextContentSize() {
          return this.getTextContent().length;
        }
        createDOM(_config, _editor) {
          {
            throw Error(`createDOM: base method not extended`);
          }
        }
        updateDOM(_prevNode, _dom, _config) {
          {
            throw Error(`updateDOM: base method not extended`);
          }
        }
        exportDOM(editor) {
          const element = this.createDOM(editor._config, editor);
          return {
            element
          };
        }
        exportJSON() {
          {
            throw Error(`exportJSON: base method not extended`);
          }
        }
        static importJSON(_serializedNode) {
          {
            throw Error(`LexicalNode: Node ${this.name} does not implement .importJSON().`);
          }
        }
        remove(preserveEmptyParent) {
          removeNode(this, true, preserveEmptyParent);
        }
        replace(replaceWith) {
          errorOnReadOnly();
          const toReplaceKey = this.__key;
          const writableReplaceWith = replaceWith.getWritable();
          removeFromParent(writableReplaceWith);
          const newParent = this.getParentOrThrow();
          const writableParent = newParent.getWritable();
          const children = writableParent.__children;
          const index = children.indexOf(this.__key);
          const newKey = writableReplaceWith.__key;
          if (index === -1) {
            {
              throw Error(`Node is not a child of its parent`);
            }
          }
          children.splice(index, 0, newKey);
          writableReplaceWith.__parent = newParent.__key;
          removeNode(this, false);
          internalMarkSiblingsAsDirty(writableReplaceWith);
          const selection = $getSelection2();
          if ($isRangeSelection2(selection)) {
            const anchor = selection.anchor;
            const focus = selection.focus;
            if (anchor.key === toReplaceKey) {
              $moveSelectionPointToEnd(anchor, writableReplaceWith);
            }
            if (focus.key === toReplaceKey) {
              $moveSelectionPointToEnd(focus, writableReplaceWith);
            }
          }
          if ($getCompositionKey() === toReplaceKey) {
            $setCompositionKey(newKey);
          }
          return writableReplaceWith;
        }
        insertAfter(nodeToInsert) {
          errorOnReadOnly();
          const writableSelf = this.getWritable();
          const writableNodeToInsert = nodeToInsert.getWritable();
          const oldParent = writableNodeToInsert.getParent();
          const selection = $getSelection2();
          const oldIndex = nodeToInsert.getIndexWithinParent();
          let elementAnchorSelectionOnNode = false;
          let elementFocusSelectionOnNode = false;
          if (oldParent !== null) {
            removeFromParent(writableNodeToInsert);
            if ($isRangeSelection2(selection)) {
              const oldParentKey = oldParent.__key;
              const anchor = selection.anchor;
              const focus = selection.focus;
              elementAnchorSelectionOnNode = anchor.type === "element" && anchor.key === oldParentKey && anchor.offset === oldIndex + 1;
              elementFocusSelectionOnNode = focus.type === "element" && focus.key === oldParentKey && focus.offset === oldIndex + 1;
            }
          }
          const writableParent = this.getParentOrThrow().getWritable();
          const insertKey = writableNodeToInsert.__key;
          writableNodeToInsert.__parent = writableSelf.__parent;
          const children = writableParent.__children;
          const index = children.indexOf(writableSelf.__key);
          if (index === -1) {
            {
              throw Error(`Node is not a child of its parent`);
            }
          }
          children.splice(index + 1, 0, insertKey);
          internalMarkSiblingsAsDirty(writableNodeToInsert);
          if ($isRangeSelection2(selection)) {
            $updateElementSelectionOnCreateDeleteNode(selection, writableParent, index + 1);
            const writableParentKey = writableParent.__key;
            if (elementAnchorSelectionOnNode) {
              selection.anchor.set(writableParentKey, index + 2, "element");
            }
            if (elementFocusSelectionOnNode) {
              selection.focus.set(writableParentKey, index + 2, "element");
            }
          }
          return nodeToInsert;
        }
        insertBefore(nodeToInsert) {
          const writableSelf = this.getWritable();
          const writableNodeToInsert = nodeToInsert.getWritable();
          removeFromParent(writableNodeToInsert);
          const writableParent = this.getParentOrThrow().getWritable();
          const insertKey = writableNodeToInsert.__key;
          writableNodeToInsert.__parent = writableSelf.__parent;
          const children = writableParent.__children;
          const index = children.indexOf(writableSelf.__key);
          if (index === -1) {
            {
              throw Error(`Node is not a child of its parent`);
            }
          }
          children.splice(index, 0, insertKey);
          internalMarkSiblingsAsDirty(writableNodeToInsert);
          const selection = $getSelection2();
          if ($isRangeSelection2(selection)) {
            $updateElementSelectionOnCreateDeleteNode(selection, writableParent, index);
          }
          return nodeToInsert;
        }
        selectPrevious(anchorOffset, focusOffset) {
          errorOnReadOnly();
          const prevSibling = this.getPreviousSibling();
          const parent = this.getParentOrThrow();
          if (prevSibling === null) {
            return parent.select(0, 0);
          }
          if ($isElementNode(prevSibling)) {
            return prevSibling.select();
          } else if (!$isTextNode(prevSibling)) {
            const index = prevSibling.getIndexWithinParent() + 1;
            return parent.select(index, index);
          }
          return prevSibling.select(anchorOffset, focusOffset);
        }
        selectNext(anchorOffset, focusOffset) {
          errorOnReadOnly();
          const nextSibling = this.getNextSibling();
          const parent = this.getParentOrThrow();
          if (nextSibling === null) {
            return parent.select();
          }
          if ($isElementNode(nextSibling)) {
            return nextSibling.select(0, 0);
          } else if (!$isTextNode(nextSibling)) {
            const index = nextSibling.getIndexWithinParent();
            return parent.select(index, index);
          }
          return nextSibling.select(anchorOffset, focusOffset);
        }
        markDirty() {
          this.getWritable();
        }
      };
      function errorOnTypeKlassMismatch(type, klass) {
        const registeredNode = getActiveEditor()._nodes.get(type);
        if (registeredNode === void 0) {
          {
            throw Error(`Create node: Attempted to create node ${klass.name} that was not configured to be used on the editor.`);
          }
        }
        const editorKlass = registeredNode.klass;
        if (editorKlass !== klass) {
          {
            throw Error(`Create node: Type ${type} in node ${klass.name} does not match registered node ${editorKlass.name} with the same type`);
          }
        }
      }
      var DecoratorNode = class extends LexicalNode {
        constructor(key) {
          super(key);
        }
        decorate(editor, config) {
          {
            throw Error(`decorate: base method not extended`);
          }
        }
        isIsolated() {
          return false;
        }
        isInline() {
          return true;
        }
      };
      function $isDecoratorNode(node) {
        return node instanceof DecoratorNode;
      }
      var ElementNode = class extends LexicalNode {
        constructor(key) {
          super(key);
          this.__children = [];
          this.__format = 0;
          this.__indent = 0;
          this.__dir = null;
        }
        getFormat() {
          const self2 = this.getLatest();
          return self2.__format;
        }
        getFormatType() {
          const format = this.getFormat();
          return ELEMENT_FORMAT_TO_TYPE[format] || "";
        }
        getIndent() {
          const self2 = this.getLatest();
          return self2.__indent;
        }
        getChildren() {
          const self2 = this.getLatest();
          const children = self2.__children;
          const childrenNodes = [];
          for (let i = 0; i < children.length; i++) {
            const childNode = $getNodeByKey(children[i]);
            if (childNode !== null) {
              childrenNodes.push(childNode);
            }
          }
          return childrenNodes;
        }
        getChildrenKeys() {
          return this.getLatest().__children;
        }
        getChildrenSize() {
          const self2 = this.getLatest();
          return self2.__children.length;
        }
        isEmpty() {
          return this.getChildrenSize() === 0;
        }
        isDirty() {
          const editor = getActiveEditor();
          const dirtyElements = editor._dirtyElements;
          return dirtyElements !== null && dirtyElements.has(this.__key);
        }
        isLastChild() {
          const self2 = this.getLatest();
          const parent = self2.getParentOrThrow();
          return parent.getLastChild() === self2;
        }
        getAllTextNodes() {
          const textNodes = [];
          const self2 = this.getLatest();
          const children = self2.__children;
          for (let i = 0; i < children.length; i++) {
            const childNode = $getNodeByKey(children[i]);
            if ($isTextNode(childNode)) {
              textNodes.push(childNode);
            } else if ($isElementNode(childNode)) {
              const subChildrenNodes = childNode.getAllTextNodes();
              textNodes.push(...subChildrenNodes);
            }
          }
          return textNodes;
        }
        getFirstDescendant() {
          let node = this.getFirstChild();
          while (node !== null) {
            if ($isElementNode(node)) {
              const child = node.getFirstChild();
              if (child !== null) {
                node = child;
                continue;
              }
            }
            break;
          }
          return node;
        }
        getLastDescendant() {
          let node = this.getLastChild();
          while (node !== null) {
            if ($isElementNode(node)) {
              const child = node.getLastChild();
              if (child !== null) {
                node = child;
                continue;
              }
            }
            break;
          }
          return node;
        }
        getDescendantByIndex(index) {
          const children = this.getChildren();
          const childrenLength = children.length;
          if (index >= childrenLength) {
            const resolvedNode2 = children[childrenLength - 1];
            return $isElementNode(resolvedNode2) && resolvedNode2.getLastDescendant() || resolvedNode2 || null;
          }
          const resolvedNode = children[index];
          return $isElementNode(resolvedNode) && resolvedNode.getFirstDescendant() || resolvedNode || null;
        }
        getFirstChild() {
          const self2 = this.getLatest();
          const children = self2.__children;
          const childrenLength = children.length;
          if (childrenLength === 0) {
            return null;
          }
          return $getNodeByKey(children[0]);
        }
        getFirstChildOrThrow() {
          const firstChild = this.getFirstChild();
          if (firstChild === null) {
            {
              throw Error(`Expected node ${this.__key} to have a first child.`);
            }
          }
          return firstChild;
        }
        getLastChild() {
          const self2 = this.getLatest();
          const children = self2.__children;
          const childrenLength = children.length;
          if (childrenLength === 0) {
            return null;
          }
          return $getNodeByKey(children[childrenLength - 1]);
        }
        getLastChildOrThrow() {
          const lastChild = this.getLastChild();
          if (lastChild === null) {
            {
              throw Error(`Expected node ${this.__key} to have a last child.`);
            }
          }
          return lastChild;
        }
        getChildAtIndex(index) {
          const self2 = this.getLatest();
          const children = self2.__children;
          const key = children[index];
          if (key === void 0) {
            return null;
          }
          return $getNodeByKey(key);
        }
        getTextContent() {
          let textContent = "";
          const children = this.getChildren();
          const childrenLength = children.length;
          for (let i = 0; i < childrenLength; i++) {
            const child = children[i];
            textContent += child.getTextContent();
            if ($isElementNode(child) && i !== childrenLength - 1 && !child.isInline()) {
              textContent += DOUBLE_LINE_BREAK;
            }
          }
          return textContent;
        }
        getDirection() {
          const self2 = this.getLatest();
          return self2.__dir;
        }
        hasFormat(type) {
          if (type !== "") {
            const formatFlag = ELEMENT_TYPE_TO_FORMAT[type];
            return (this.getFormat() & formatFlag) !== 0;
          }
          return false;
        }
        select(_anchorOffset, _focusOffset) {
          errorOnReadOnly();
          const selection = $getSelection2();
          let anchorOffset = _anchorOffset;
          let focusOffset = _focusOffset;
          const childrenCount = this.getChildrenSize();
          if (anchorOffset === void 0) {
            anchorOffset = childrenCount;
          }
          if (focusOffset === void 0) {
            focusOffset = childrenCount;
          }
          const key = this.__key;
          if (!$isRangeSelection2(selection)) {
            return internalMakeRangeSelection(key, anchorOffset, key, focusOffset, "element", "element");
          } else {
            selection.anchor.set(key, anchorOffset, "element");
            selection.focus.set(key, focusOffset, "element");
            selection.dirty = true;
          }
          return selection;
        }
        selectStart() {
          const firstNode = this.getFirstDescendant();
          if ($isElementNode(firstNode) || $isTextNode(firstNode)) {
            return firstNode.select(0, 0);
          }
          if (firstNode !== null) {
            return firstNode.selectPrevious();
          }
          return this.select(0, 0);
        }
        selectEnd() {
          const lastNode = this.getLastDescendant();
          if ($isElementNode(lastNode) || $isTextNode(lastNode)) {
            return lastNode.select();
          }
          if (lastNode !== null) {
            return lastNode.selectNext();
          }
          return this.select();
        }
        clear() {
          const writableSelf = this.getWritable();
          const children = this.getChildren();
          children.forEach((child) => child.remove());
          return writableSelf;
        }
        append(...nodesToAppend) {
          return this.splice(this.getChildrenSize(), 0, nodesToAppend);
        }
        setDirection(direction) {
          const self2 = this.getWritable();
          self2.__dir = direction;
          return self2;
        }
        setFormat(type) {
          const self2 = this.getWritable();
          self2.__format = type !== "" ? ELEMENT_TYPE_TO_FORMAT[type] : 0;
          return this;
        }
        setIndent(indentLevel) {
          const self2 = this.getWritable();
          self2.__indent = indentLevel;
          return this;
        }
        splice(start, deleteCount, nodesToInsert) {
          const writableSelf = this.getWritable();
          const writableSelfKey = writableSelf.__key;
          const writableSelfChildren = writableSelf.__children;
          const nodesToInsertLength = nodesToInsert.length;
          const nodesToInsertKeys = [];
          for (let i = 0; i < nodesToInsertLength; i++) {
            const nodeToInsert = nodesToInsert[i];
            const writableNodeToInsert = nodeToInsert.getWritable();
            if (nodeToInsert.__key === writableSelfKey) {
              {
                throw Error(`append: attempting to append self`);
              }
            }
            removeFromParent(writableNodeToInsert);
            writableNodeToInsert.__parent = writableSelfKey;
            const newKey = writableNodeToInsert.__key;
            nodesToInsertKeys.push(newKey);
          }
          const nodeBeforeRange = this.getChildAtIndex(start - 1);
          if (nodeBeforeRange) {
            internalMarkNodeAsDirty(nodeBeforeRange);
          }
          const nodeAfterRange = this.getChildAtIndex(start + deleteCount);
          if (nodeAfterRange) {
            internalMarkNodeAsDirty(nodeAfterRange);
          }
          let nodesToRemoveKeys;
          if (start === writableSelfChildren.length) {
            writableSelfChildren.push(...nodesToInsertKeys);
            nodesToRemoveKeys = [];
          } else {
            nodesToRemoveKeys = writableSelfChildren.splice(start, deleteCount, ...nodesToInsertKeys);
          }
          if (nodesToRemoveKeys.length) {
            const selection = $getSelection2();
            if ($isRangeSelection2(selection)) {
              const nodesToRemoveKeySet = new Set(nodesToRemoveKeys);
              const nodesToInsertKeySet = new Set(nodesToInsertKeys);
              const isPointRemoved = (point) => {
                let node = point.getNode();
                while (node) {
                  const nodeKey = node.__key;
                  if (nodesToRemoveKeySet.has(nodeKey) && !nodesToInsertKeySet.has(nodeKey)) {
                    return true;
                  }
                  node = node.getParent();
                }
                return false;
              };
              const {
                anchor,
                focus
              } = selection;
              if (isPointRemoved(anchor)) {
                moveSelectionPointToSibling(anchor, anchor.getNode(), this, nodeBeforeRange, nodeAfterRange);
              }
              if (isPointRemoved(focus)) {
                moveSelectionPointToSibling(focus, focus.getNode(), this, nodeBeforeRange, nodeAfterRange);
              }
              const nodesToRemoveKeysLength = nodesToRemoveKeys.length;
              for (let i = 0; i < nodesToRemoveKeysLength; i++) {
                const nodeToRemove = $getNodeByKey(nodesToRemoveKeys[i]);
                if (nodeToRemove != null) {
                  const writableNodeToRemove = nodeToRemove.getWritable();
                  writableNodeToRemove.__parent = null;
                }
              }
              if (writableSelfChildren.length === 0 && !this.canBeEmpty() && !$isRootOrShadowRoot(this)) {
                this.remove();
              }
            }
          }
          return writableSelf;
        }
        exportJSON() {
          return {
            children: [],
            direction: this.getDirection(),
            format: this.getFormatType(),
            indent: this.getIndent(),
            type: "element",
            version: 1
          };
        }
        insertNewAfter(selection) {
          return null;
        }
        canInsertTab() {
          return false;
        }
        canIndent() {
          return true;
        }
        collapseAtStart(selection) {
          return false;
        }
        excludeFromCopy(destination) {
          return false;
        }
        canExtractContents() {
          return true;
        }
        canReplaceWith(replacement) {
          return true;
        }
        canInsertAfter(node) {
          return true;
        }
        canBeEmpty() {
          return true;
        }
        canInsertTextBefore() {
          return true;
        }
        canInsertTextAfter() {
          return true;
        }
        isInline() {
          return false;
        }
        isShadowRoot() {
          return false;
        }
        canMergeWith(node) {
          return false;
        }
        extractWithChild(child, selection, destination) {
          return false;
        }
      };
      function $isElementNode(node) {
        return node instanceof ElementNode;
      }
      var RootNode = class extends ElementNode {
        static getType() {
          return "root";
        }
        static clone() {
          return new RootNode();
        }
        constructor() {
          super("root");
          this.__cachedText = null;
        }
        getTopLevelElementOrThrow() {
          {
            throw Error(`getTopLevelElementOrThrow: root nodes are not top level elements`);
          }
        }
        getTextContent() {
          const cachedText = this.__cachedText;
          if (isCurrentlyReadOnlyMode() || getActiveEditor()._dirtyType === NO_DIRTY_NODES) {
            if (cachedText !== null) {
              return cachedText;
            }
          }
          return super.getTextContent();
        }
        remove() {
          {
            throw Error(`remove: cannot be called on root nodes`);
          }
        }
        replace(node) {
          {
            throw Error(`replace: cannot be called on root nodes`);
          }
        }
        insertBefore(nodeToInsert) {
          {
            throw Error(`insertBefore: cannot be called on root nodes`);
          }
        }
        insertAfter(nodeToInsert) {
          {
            throw Error(`insertAfter: cannot be called on root nodes`);
          }
        }
        updateDOM(prevNode, dom) {
          return false;
        }
        append(...nodesToAppend) {
          for (let i = 0; i < nodesToAppend.length; i++) {
            const node = nodesToAppend[i];
            if (!$isElementNode(node) && !$isDecoratorNode(node)) {
              {
                throw Error(`rootNode.append: Only element or decorator nodes can be appended to the root node`);
              }
            }
          }
          return super.append(...nodesToAppend);
        }
        static importJSON(serializedNode) {
          const node = $getRoot();
          node.setFormat(serializedNode.format);
          node.setIndent(serializedNode.indent);
          node.setDirection(serializedNode.direction);
          return node;
        }
        exportJSON() {
          return {
            children: [],
            direction: this.getDirection(),
            format: this.getFormatType(),
            indent: this.getIndent(),
            type: "root",
            version: 1
          };
        }
      };
      function $createRootNode() {
        return new RootNode();
      }
      function $isRootNode(node) {
        return node instanceof RootNode;
      }
      function editorStateHasDirtySelection(editorState, editor) {
        const currentSelection = editor.getEditorState()._selection;
        const pendingSelection = editorState._selection;
        if (pendingSelection !== null) {
          if (pendingSelection.dirty || !pendingSelection.is(currentSelection)) {
            return true;
          }
        } else if (currentSelection !== null) {
          return true;
        }
        return false;
      }
      function cloneEditorState(current) {
        return new EditorState(new Map(current._nodeMap));
      }
      function createEmptyEditorState() {
        return new EditorState(/* @__PURE__ */ new Map([["root", $createRootNode()]]));
      }
      function exportNodeToJSON(node) {
        const serializedNode = node.exportJSON();
        const nodeClass = node.constructor;
        if (serializedNode.type !== nodeClass.getType()) {
          {
            throw Error(`LexicalNode: Node ${nodeClass.name} does not implement .exportJSON().`);
          }
        }
        const serializedChildren = serializedNode.children;
        if ($isElementNode(node)) {
          if (!Array.isArray(serializedChildren)) {
            {
              throw Error(`LexicalNode: Node ${nodeClass.name} is an element but .exportJSON() does not have a children array.`);
            }
          }
          const children = node.getChildren();
          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const serializedChildNode = exportNodeToJSON(child);
            serializedChildren.push(serializedChildNode);
          }
        }
        return serializedNode;
      }
      var EditorState = class {
        constructor(nodeMap, selection) {
          this._nodeMap = nodeMap;
          this._selection = selection || null;
          this._flushSync = false;
          this._readOnly = false;
        }
        isEmpty() {
          return this._nodeMap.size === 1 && this._selection === null;
        }
        read(callbackFn) {
          return readEditorState(this, callbackFn);
        }
        clone(selection) {
          const editorState = new EditorState(this._nodeMap, selection === void 0 ? this._selection : selection);
          editorState._readOnly = true;
          return editorState;
        }
        toJSON() {
          return readEditorState(this, () => ({
            root: exportNodeToJSON($getRoot())
          }));
        }
      };
      var LineBreakNode = class extends LexicalNode {
        static getType() {
          return "linebreak";
        }
        static clone(node) {
          return new LineBreakNode(node.__key);
        }
        constructor(key) {
          super(key);
        }
        getTextContent() {
          return "\n";
        }
        createDOM() {
          return document.createElement("br");
        }
        updateDOM() {
          return false;
        }
        static importDOM() {
          return {
            br: (node) => {
              const parentElement = node.parentElement;
              if (parentElement != null && parentElement.firstChild === node && parentElement.lastChild === node) {
                return null;
              }
              return {
                conversion: convertLineBreakElement,
                priority: 0
              };
            }
          };
        }
        static importJSON(serializedLineBreakNode) {
          return $createLineBreakNode();
        }
        exportJSON() {
          return {
            type: "linebreak",
            version: 1
          };
        }
      };
      function convertLineBreakElement(node) {
        return {
          node: $createLineBreakNode()
        };
      }
      function $createLineBreakNode() {
        return new LineBreakNode();
      }
      function $isLineBreakNode(node) {
        return node instanceof LineBreakNode;
      }
      function getElementOuterTag(node, format) {
        if (format & IS_CODE) {
          return "code";
        }
        if (format & IS_SUBSCRIPT) {
          return "sub";
        }
        if (format & IS_SUPERSCRIPT) {
          return "sup";
        }
        return null;
      }
      function getElementInnerTag(node, format) {
        if (format & IS_BOLD) {
          return "strong";
        }
        if (format & IS_ITALIC) {
          return "em";
        }
        return "span";
      }
      function setTextThemeClassNames(tag, prevFormat, nextFormat, dom, textClassNames) {
        const domClassList = dom.classList;
        let classNames = getCachedClassNameArray(textClassNames, "base");
        if (classNames !== void 0) {
          domClassList.add(...classNames);
        }
        classNames = getCachedClassNameArray(textClassNames, "underlineStrikethrough");
        let hasUnderlineStrikethrough = false;
        const prevUnderlineStrikethrough = prevFormat & IS_UNDERLINE && prevFormat & IS_STRIKETHROUGH;
        const nextUnderlineStrikethrough = nextFormat & IS_UNDERLINE && nextFormat & IS_STRIKETHROUGH;
        if (classNames !== void 0) {
          if (nextUnderlineStrikethrough) {
            hasUnderlineStrikethrough = true;
            if (!prevUnderlineStrikethrough) {
              domClassList.add(...classNames);
            }
          } else if (prevUnderlineStrikethrough) {
            domClassList.remove(...classNames);
          }
        }
        for (const key in TEXT_TYPE_TO_FORMAT) {
          const format = key;
          const flag = TEXT_TYPE_TO_FORMAT[format];
          classNames = getCachedClassNameArray(textClassNames, key);
          if (classNames !== void 0) {
            if (nextFormat & flag) {
              if (hasUnderlineStrikethrough && (key === "underline" || key === "strikethrough")) {
                if (prevFormat & flag) {
                  domClassList.remove(...classNames);
                }
                continue;
              }
              if ((prevFormat & flag) === 0 || prevUnderlineStrikethrough && key === "underline" || key === "strikethrough") {
                domClassList.add(...classNames);
              }
            } else if (prevFormat & flag) {
              domClassList.remove(...classNames);
            }
          }
        }
      }
      function diffComposedText(a, b) {
        const aLength = a.length;
        const bLength = b.length;
        let left = 0;
        let right = 0;
        while (left < aLength && left < bLength && a[left] === b[left]) {
          left++;
        }
        while (right + left < aLength && right + left < bLength && a[aLength - right - 1] === b[bLength - right - 1]) {
          right++;
        }
        return [left, aLength - left - right, b.slice(left, bLength - right)];
      }
      function setTextContent(nextText, dom, node) {
        const firstChild = dom.firstChild;
        const isComposing = node.isComposing();
        const suffix = isComposing ? COMPOSITION_SUFFIX : "";
        const text = nextText + suffix;
        if (firstChild == null) {
          dom.textContent = text;
        } else {
          const nodeValue = firstChild.nodeValue;
          if (nodeValue !== text) {
            if (isComposing || IS_FIREFOX) {
              const [index, remove, insert] = diffComposedText(nodeValue, text);
              if (remove !== 0) {
                firstChild.deleteData(index, remove);
              }
              firstChild.insertData(index, insert);
            } else {
              firstChild.nodeValue = text;
            }
          }
        }
      }
      function createTextInnerDOM(innerDOM, node, innerTag, format, text, config) {
        setTextContent(text, innerDOM, node);
        const theme = config.theme;
        const textClassNames = theme.text;
        if (textClassNames !== void 0) {
          setTextThemeClassNames(innerTag, 0, format, innerDOM, textClassNames);
        }
      }
      var TextNode = class extends LexicalNode {
        static getType() {
          return "text";
        }
        static clone(node) {
          return new TextNode(node.__text, node.__key);
        }
        constructor(text, key) {
          super(key);
          this.__text = text;
          this.__format = 0;
          this.__style = "";
          this.__mode = 0;
          this.__detail = 0;
        }
        getFormat() {
          const self2 = this.getLatest();
          return self2.__format;
        }
        getDetail() {
          const self2 = this.getLatest();
          return self2.__detail;
        }
        getMode() {
          const self2 = this.getLatest();
          return TEXT_TYPE_TO_MODE[self2.__mode];
        }
        getStyle() {
          const self2 = this.getLatest();
          return self2.__style;
        }
        isToken() {
          const self2 = this.getLatest();
          return self2.__mode === IS_TOKEN;
        }
        isComposing() {
          return this.__key === $getCompositionKey();
        }
        isSegmented() {
          const self2 = this.getLatest();
          return self2.__mode === IS_SEGMENTED;
        }
        isDirectionless() {
          const self2 = this.getLatest();
          return (self2.__detail & IS_DIRECTIONLESS) !== 0;
        }
        isUnmergeable() {
          const self2 = this.getLatest();
          return (self2.__detail & IS_UNMERGEABLE) !== 0;
        }
        hasFormat(type) {
          const formatFlag = TEXT_TYPE_TO_FORMAT[type];
          return (this.getFormat() & formatFlag) !== 0;
        }
        isSimpleText() {
          return this.__type === "text" && this.__mode === 0;
        }
        getTextContent() {
          const self2 = this.getLatest();
          return self2.__text;
        }
        getFormatFlags(type, alignWithFormat) {
          const self2 = this.getLatest();
          const format = self2.__format;
          return toggleTextFormatType(format, type, alignWithFormat);
        }
        createDOM(config) {
          const format = this.__format;
          const outerTag = getElementOuterTag(this, format);
          const innerTag = getElementInnerTag(this, format);
          const tag = outerTag === null ? innerTag : outerTag;
          const dom = document.createElement(tag);
          let innerDOM = dom;
          if (outerTag !== null) {
            innerDOM = document.createElement(innerTag);
            dom.appendChild(innerDOM);
          }
          const text = this.__text;
          createTextInnerDOM(innerDOM, this, innerTag, format, text, config);
          const style = this.__style;
          if (style !== "") {
            dom.style.cssText = style;
          }
          return dom;
        }
        updateDOM(prevNode, dom, config) {
          const nextText = this.__text;
          const prevFormat = prevNode.__format;
          const nextFormat = this.__format;
          const prevOuterTag = getElementOuterTag(this, prevFormat);
          const nextOuterTag = getElementOuterTag(this, nextFormat);
          const prevInnerTag = getElementInnerTag(this, prevFormat);
          const nextInnerTag = getElementInnerTag(this, nextFormat);
          const prevTag = prevOuterTag === null ? prevInnerTag : prevOuterTag;
          const nextTag = nextOuterTag === null ? nextInnerTag : nextOuterTag;
          if (prevTag !== nextTag) {
            return true;
          }
          if (prevOuterTag === nextOuterTag && prevInnerTag !== nextInnerTag) {
            const prevInnerDOM = dom.firstChild;
            if (prevInnerDOM == null) {
              {
                throw Error(`updateDOM: prevInnerDOM is null or undefined`);
              }
            }
            const nextInnerDOM = document.createElement(nextInnerTag);
            createTextInnerDOM(nextInnerDOM, this, nextInnerTag, nextFormat, nextText, config);
            dom.replaceChild(nextInnerDOM, prevInnerDOM);
            return false;
          }
          let innerDOM = dom;
          if (nextOuterTag !== null) {
            if (prevOuterTag !== null) {
              innerDOM = dom.firstChild;
              if (innerDOM == null) {
                {
                  throw Error(`updateDOM: innerDOM is null or undefined`);
                }
              }
            }
          }
          setTextContent(nextText, innerDOM, this);
          const theme = config.theme;
          const textClassNames = theme.text;
          if (textClassNames !== void 0 && prevFormat !== nextFormat) {
            setTextThemeClassNames(nextInnerTag, prevFormat, nextFormat, innerDOM, textClassNames);
          }
          const prevStyle = prevNode.__style;
          const nextStyle = this.__style;
          if (prevStyle !== nextStyle) {
            dom.style.cssText = nextStyle;
          }
          return false;
        }
        static importDOM() {
          return {
            "#text": (node) => ({
              conversion: convertTextDOMNode,
              priority: 0
            }),
            b: (node) => ({
              conversion: convertBringAttentionToElement,
              priority: 0
            }),
            code: (node) => ({
              conversion: convertTextFormatElement,
              priority: 0
            }),
            em: (node) => ({
              conversion: convertTextFormatElement,
              priority: 0
            }),
            i: (node) => ({
              conversion: convertTextFormatElement,
              priority: 0
            }),
            span: (node) => ({
              conversion: convertSpanElement,
              priority: 0
            }),
            strong: (node) => ({
              conversion: convertTextFormatElement,
              priority: 0
            }),
            u: (node) => ({
              conversion: convertTextFormatElement,
              priority: 0
            })
          };
        }
        static importJSON(serializedNode) {
          const node = $createTextNode(serializedNode.text);
          node.setFormat(serializedNode.format);
          node.setDetail(serializedNode.detail);
          node.setMode(serializedNode.mode);
          node.setStyle(serializedNode.style);
          return node;
        }
        exportJSON() {
          return {
            detail: this.getDetail(),
            format: this.getFormat(),
            mode: this.getMode(),
            style: this.getStyle(),
            text: this.getTextContent(),
            type: "text",
            version: 1
          };
        }
        selectionTransform(prevSelection, nextSelection) {
          return;
        }
        setFormat(format) {
          const self2 = this.getWritable();
          self2.__format = typeof format === "string" ? TEXT_TYPE_TO_FORMAT[format] : format;
          return self2;
        }
        setDetail(detail) {
          const self2 = this.getWritable();
          self2.__detail = typeof detail === "string" ? DETAIL_TYPE_TO_DETAIL[detail] : detail;
          return self2;
        }
        setStyle(style) {
          const self2 = this.getWritable();
          self2.__style = style;
          return self2;
        }
        toggleFormat(type) {
          const formatFlag = TEXT_TYPE_TO_FORMAT[type];
          return this.setFormat(this.getFormat() ^ formatFlag);
        }
        toggleDirectionless() {
          const self2 = this.getWritable();
          self2.__detail ^= IS_DIRECTIONLESS;
          return self2;
        }
        toggleUnmergeable() {
          const self2 = this.getWritable();
          self2.__detail ^= IS_UNMERGEABLE;
          return self2;
        }
        setMode(type) {
          const mode = TEXT_MODE_TO_TYPE[type];
          const self2 = this.getWritable();
          self2.__mode = mode;
          return self2;
        }
        setTextContent(text) {
          const writableSelf = this.getWritable();
          writableSelf.__text = text;
          return writableSelf;
        }
        select(_anchorOffset, _focusOffset) {
          errorOnReadOnly();
          let anchorOffset = _anchorOffset;
          let focusOffset = _focusOffset;
          const selection = $getSelection2();
          const text = this.getTextContent();
          const key = this.__key;
          if (typeof text === "string") {
            const lastOffset = text.length;
            if (anchorOffset === void 0) {
              anchorOffset = lastOffset;
            }
            if (focusOffset === void 0) {
              focusOffset = lastOffset;
            }
          } else {
            anchorOffset = 0;
            focusOffset = 0;
          }
          if (!$isRangeSelection2(selection)) {
            return internalMakeRangeSelection(key, anchorOffset, key, focusOffset, "text", "text");
          } else {
            const compositionKey = $getCompositionKey();
            if (compositionKey === selection.anchor.key || compositionKey === selection.focus.key) {
              $setCompositionKey(key);
            }
            selection.setTextNodeRange(this, anchorOffset, this, focusOffset);
          }
          return selection;
        }
        spliceText(offset, delCount, newText, moveSelection) {
          const writableSelf = this.getWritable();
          const text = writableSelf.__text;
          const handledTextLength = newText.length;
          let index = offset;
          if (index < 0) {
            index = handledTextLength + index;
            if (index < 0) {
              index = 0;
            }
          }
          const selection = $getSelection2();
          if (moveSelection && $isRangeSelection2(selection)) {
            const newOffset = offset + handledTextLength;
            selection.setTextNodeRange(writableSelf, newOffset, writableSelf, newOffset);
          }
          const updatedText = text.slice(0, index) + newText + text.slice(index + delCount);
          writableSelf.__text = updatedText;
          return writableSelf;
        }
        canInsertTextBefore() {
          return true;
        }
        canInsertTextAfter() {
          return true;
        }
        splitText(...splitOffsets) {
          errorOnReadOnly();
          const self2 = this.getLatest();
          const textContent = self2.getTextContent();
          const key = self2.__key;
          const compositionKey = $getCompositionKey();
          const offsetsSet = new Set(splitOffsets);
          const parts = [];
          const textLength = textContent.length;
          let string = "";
          for (let i = 0; i < textLength; i++) {
            if (string !== "" && offsetsSet.has(i)) {
              parts.push(string);
              string = "";
            }
            string += textContent[i];
          }
          if (string !== "") {
            parts.push(string);
          }
          const partsLength = parts.length;
          if (partsLength === 0) {
            return [];
          } else if (parts[0] === textContent) {
            return [self2];
          }
          const firstPart = parts[0];
          const parent = self2.getParentOrThrow();
          const parentKey = parent.__key;
          let writableNode;
          const format = self2.getFormat();
          const style = self2.getStyle();
          const detail = self2.__detail;
          let hasReplacedSelf = false;
          if (self2.isSegmented()) {
            writableNode = $createTextNode(firstPart);
            writableNode.__parent = parentKey;
            writableNode.__format = format;
            writableNode.__style = style;
            writableNode.__detail = detail;
            hasReplacedSelf = true;
          } else {
            writableNode = self2.getWritable();
            writableNode.__text = firstPart;
          }
          const selection = $getSelection2();
          const splitNodes = [writableNode];
          let textSize = firstPart.length;
          for (let i = 1; i < partsLength; i++) {
            const part = parts[i];
            const partSize = part.length;
            const sibling = $createTextNode(part).getWritable();
            sibling.__format = format;
            sibling.__style = style;
            sibling.__detail = detail;
            const siblingKey = sibling.__key;
            const nextTextSize = textSize + partSize;
            if ($isRangeSelection2(selection)) {
              const anchor = selection.anchor;
              const focus = selection.focus;
              if (anchor.key === key && anchor.type === "text" && anchor.offset > textSize && anchor.offset <= nextTextSize) {
                anchor.key = siblingKey;
                anchor.offset -= textSize;
                selection.dirty = true;
              }
              if (focus.key === key && focus.type === "text" && focus.offset > textSize && focus.offset <= nextTextSize) {
                focus.key = siblingKey;
                focus.offset -= textSize;
                selection.dirty = true;
              }
            }
            if (compositionKey === key) {
              $setCompositionKey(siblingKey);
            }
            textSize = nextTextSize;
            sibling.__parent = parentKey;
            splitNodes.push(sibling);
          }
          internalMarkSiblingsAsDirty(this);
          const writableParent = parent.getWritable();
          const writableParentChildren = writableParent.__children;
          const insertionIndex = writableParentChildren.indexOf(key);
          const splitNodesKeys = splitNodes.map((splitNode) => splitNode.__key);
          if (hasReplacedSelf) {
            writableParentChildren.splice(insertionIndex, 0, ...splitNodesKeys);
            this.remove();
          } else {
            writableParentChildren.splice(insertionIndex, 1, ...splitNodesKeys);
          }
          if ($isRangeSelection2(selection)) {
            $updateElementSelectionOnCreateDeleteNode(selection, parent, insertionIndex, partsLength - 1);
          }
          return splitNodes;
        }
        mergeWithSibling(target) {
          const isBefore = target === this.getPreviousSibling();
          if (!isBefore && target !== this.getNextSibling()) {
            {
              throw Error(`mergeWithSibling: sibling must be a previous or next sibling`);
            }
          }
          const key = this.__key;
          const targetKey = target.__key;
          const text = this.__text;
          const textLength = text.length;
          const compositionKey = $getCompositionKey();
          if (compositionKey === targetKey) {
            $setCompositionKey(key);
          }
          const selection = $getSelection2();
          if ($isRangeSelection2(selection)) {
            const anchor = selection.anchor;
            const focus = selection.focus;
            if (anchor !== null && anchor.key === targetKey) {
              adjustPointOffsetForMergedSibling(anchor, isBefore, key, target, textLength);
              selection.dirty = true;
            }
            if (focus !== null && focus.key === targetKey) {
              adjustPointOffsetForMergedSibling(focus, isBefore, key, target, textLength);
              selection.dirty = true;
            }
          }
          const targetText = target.__text;
          const newText = isBefore ? targetText + text : text + targetText;
          this.setTextContent(newText);
          const writableSelf = this.getWritable();
          target.remove();
          return writableSelf;
        }
        isTextEntity() {
          return false;
        }
      };
      function convertSpanElement(domNode) {
        const span = domNode;
        const hasBoldFontWeight = span.style.fontWeight === "700";
        const hasLinethroughTextDecoration = span.style.textDecoration === "line-through";
        const hasItalicFontStyle = span.style.fontStyle === "italic";
        const hasUnderlineTextDecoration = span.style.textDecoration === "underline";
        const verticalAlign = span.style.verticalAlign;
        return {
          forChild: (lexicalNode) => {
            if (!$isTextNode(lexicalNode)) {
              return lexicalNode;
            }
            if (hasBoldFontWeight) {
              lexicalNode.toggleFormat("bold");
            }
            if (hasLinethroughTextDecoration) {
              lexicalNode.toggleFormat("strikethrough");
            }
            if (hasItalicFontStyle) {
              lexicalNode.toggleFormat("italic");
            }
            if (hasUnderlineTextDecoration) {
              lexicalNode.toggleFormat("underline");
            }
            if (verticalAlign === "sub") {
              lexicalNode.toggleFormat("subscript");
            }
            if (verticalAlign === "super") {
              lexicalNode.toggleFormat("superscript");
            }
            return lexicalNode;
          },
          node: null
        };
      }
      function convertBringAttentionToElement(domNode) {
        const b = domNode;
        const hasNormalFontWeight = b.style.fontWeight === "normal";
        return {
          forChild: (lexicalNode) => {
            if ($isTextNode(lexicalNode) && !hasNormalFontWeight) {
              lexicalNode.toggleFormat("bold");
            }
            return lexicalNode;
          },
          node: null
        };
      }
      function convertTextDOMNode(domNode, _parent, preformatted) {
        let textContent = domNode.textContent || "";
        if (!preformatted && /\n/.test(textContent)) {
          textContent = textContent.replace(/\r?\n/gm, " ");
          if (textContent.trim().length === 0) {
            return {
              node: null
            };
          }
        }
        return {
          node: $createTextNode(textContent)
        };
      }
      var nodeNameToTextFormat = {
        code: "code",
        em: "italic",
        i: "italic",
        strong: "bold",
        u: "underline"
      };
      function convertTextFormatElement(domNode) {
        const format = nodeNameToTextFormat[domNode.nodeName.toLowerCase()];
        if (format === void 0) {
          return {
            node: null
          };
        }
        return {
          forChild: (lexicalNode) => {
            if ($isTextNode(lexicalNode)) {
              lexicalNode.toggleFormat(format);
            }
            return lexicalNode;
          },
          node: null
        };
      }
      function $createTextNode(text = "") {
        return new TextNode(text);
      }
      function $isTextNode(node) {
        return node instanceof TextNode;
      }
      var ParagraphNode = class extends ElementNode {
        static getType() {
          return "paragraph";
        }
        static clone(node) {
          return new ParagraphNode(node.__key);
        }
        createDOM(config) {
          const dom = document.createElement("p");
          const classNames = getCachedClassNameArray(config.theme, "paragraph");
          if (classNames !== void 0) {
            const domClassList = dom.classList;
            domClassList.add(...classNames);
          }
          return dom;
        }
        updateDOM(prevNode, dom) {
          return false;
        }
        static importDOM() {
          return {
            p: (node) => ({
              conversion: convertParagraphElement,
              priority: 0
            })
          };
        }
        exportDOM(editor) {
          const {
            element
          } = super.exportDOM(editor);
          if (element && this.isEmpty()) {
            element.append(document.createElement("br"));
          }
          if (element) {
            const formatType = this.getFormatType();
            element.style.textAlign = formatType;
            const direction = this.getDirection();
            if (direction) {
              element.dir = direction;
            }
            const indent = this.getIndent();
            if (indent > 0) {
              element.style.textIndent = `${indent * 20}px`;
            }
          }
          return {
            element
          };
        }
        static importJSON(serializedNode) {
          const node = $createParagraphNode();
          node.setFormat(serializedNode.format);
          node.setIndent(serializedNode.indent);
          node.setDirection(serializedNode.direction);
          return node;
        }
        exportJSON() {
          return {
            ...super.exportJSON(),
            type: "paragraph",
            version: 1
          };
        }
        insertNewAfter() {
          const newElement = $createParagraphNode();
          const direction = this.getDirection();
          newElement.setDirection(direction);
          this.insertAfter(newElement);
          return newElement;
        }
        collapseAtStart() {
          const children = this.getChildren();
          if (children.length === 0 || $isTextNode(children[0]) && children[0].getTextContent().trim() === "") {
            const nextSibling = this.getNextSibling();
            if (nextSibling !== null) {
              this.selectNext();
              this.remove();
              return true;
            }
            const prevSibling = this.getPreviousSibling();
            if (prevSibling !== null) {
              this.selectPrevious();
              this.remove();
              return true;
            }
          }
          return false;
        }
      };
      function convertParagraphElement() {
        return {
          node: $createParagraphNode()
        };
      }
      function $createParagraphNode() {
        return new ParagraphNode();
      }
      function $isParagraphNode(node) {
        return node instanceof ParagraphNode;
      }
      var COMMAND_PRIORITY_EDITOR = 0;
      var COMMAND_PRIORITY_LOW = 1;
      var COMMAND_PRIORITY_NORMAL = 2;
      var COMMAND_PRIORITY_HIGH = 3;
      var COMMAND_PRIORITY_CRITICAL = 4;
      function resetEditor(editor, prevRootElement, nextRootElement, pendingEditorState) {
        const keyNodeMap = editor._keyToDOMMap;
        keyNodeMap.clear();
        editor._editorState = createEmptyEditorState();
        editor._pendingEditorState = pendingEditorState;
        editor._compositionKey = null;
        editor._dirtyType = NO_DIRTY_NODES;
        editor._cloneNotNeeded.clear();
        editor._dirtyLeaves = /* @__PURE__ */ new Set();
        editor._dirtyElements.clear();
        editor._normalizedNodes = /* @__PURE__ */ new Set();
        editor._updateTags = /* @__PURE__ */ new Set();
        editor._updates = [];
        const observer = editor._observer;
        if (observer !== null) {
          observer.disconnect();
          editor._observer = null;
        }
        if (prevRootElement !== null) {
          prevRootElement.textContent = "";
        }
        if (nextRootElement !== null) {
          nextRootElement.textContent = "";
          keyNodeMap.set("root", nextRootElement);
        }
      }
      function initializeConversionCache(nodes) {
        const conversionCache = /* @__PURE__ */ new Map();
        const handledConversions = /* @__PURE__ */ new Set();
        nodes.forEach((node) => {
          const importDOM = node.klass.importDOM != null ? node.klass.importDOM.bind(node.klass) : null;
          if (importDOM == null || handledConversions.has(importDOM)) {
            return;
          }
          handledConversions.add(importDOM);
          const map = importDOM();
          if (map !== null) {
            Object.keys(map).forEach((key) => {
              let currentCache = conversionCache.get(key);
              if (currentCache === void 0) {
                currentCache = [];
                conversionCache.set(key, currentCache);
              }
              currentCache.push(map[key]);
            });
          }
        });
        return conversionCache;
      }
      function createEditor2(editorConfig) {
        const config = editorConfig || {};
        const activeEditor2 = internalGetActiveEditor();
        const theme = config.theme || {};
        const parentEditor = editorConfig === void 0 ? activeEditor2 : config.parentEditor || null;
        const disableEvents = config.disableEvents || false;
        const editorState = createEmptyEditorState();
        const namespace = config.namespace || (parentEditor !== null ? parentEditor._config.namespace : createUID());
        const initialEditorState = config.editorState;
        const nodes = [RootNode, TextNode, LineBreakNode, ParagraphNode, ...config.nodes || []];
        const onError = config.onError;
        const isEditable = config.editable !== void 0 ? config.editable : true;
        let registeredNodes;
        if (editorConfig === void 0 && activeEditor2 !== null) {
          registeredNodes = activeEditor2._nodes;
        } else {
          registeredNodes = /* @__PURE__ */ new Map();
          for (let i = 0; i < nodes.length; i++) {
            const klass = nodes[i];
            {
              const name = klass.name;
              if (name !== "RootNode") {
                const proto = klass.prototype;
                ["getType", "clone"].forEach((method) => {
                  if (!klass.hasOwnProperty(method)) {
                    console.warn(`${name} must implement static "${method}" method`);
                  }
                });
                if (!klass.hasOwnProperty("importDOM") && klass.hasOwnProperty("exportDOM")) {
                  console.warn(`${name} should implement "importDOM" if using a custom "exportDOM" method to ensure HTML serialization (important for copy & paste) works as expected`);
                }
                if (proto instanceof DecoratorNode) {
                  if (!proto.hasOwnProperty("decorate")) {
                    console.warn(`${proto.constructor.name} must implement "decorate" method`);
                  }
                }
                if (!klass.hasOwnProperty("importJSON")) {
                  console.warn(`${name} should implement "importJSON" method to ensure JSON and default HTML serialization works as expected`);
                }
                if (!proto.hasOwnProperty("exportJSON")) {
                  console.warn(`${name} should implement "exportJSON" method to ensure JSON and default HTML serialization works as expected`);
                }
              }
            }
            const type = klass.getType();
            registeredNodes.set(type, {
              klass,
              transforms: /* @__PURE__ */ new Set()
            });
          }
        }
        const editor = new LexicalEditor(editorState, parentEditor, registeredNodes, {
          disableEvents,
          namespace,
          theme
        }, onError ? onError : console.error, initializeConversionCache(registeredNodes), isEditable);
        if (initialEditorState !== void 0) {
          editor._pendingEditorState = initialEditorState;
          editor._dirtyType = FULL_RECONCILE;
        }
        return editor;
      }
      var LexicalEditor = class {
        constructor(editorState, parentEditor, nodes, config, onError, htmlConversions, editable) {
          this._parentEditor = parentEditor;
          this._rootElement = null;
          this._editorState = editorState;
          this._pendingEditorState = null;
          this._compositionKey = null;
          this._deferred = [];
          this._keyToDOMMap = /* @__PURE__ */ new Map();
          this._updates = [];
          this._updating = false;
          this._listeners = {
            decorator: /* @__PURE__ */ new Set(),
            editable: /* @__PURE__ */ new Set(),
            mutation: /* @__PURE__ */ new Map(),
            root: /* @__PURE__ */ new Set(),
            textcontent: /* @__PURE__ */ new Set(),
            update: /* @__PURE__ */ new Set()
          };
          this._commands = /* @__PURE__ */ new Map();
          this._config = config;
          this._nodes = nodes;
          this._decorators = {};
          this._pendingDecorators = null;
          this._dirtyType = NO_DIRTY_NODES;
          this._cloneNotNeeded = /* @__PURE__ */ new Set();
          this._dirtyLeaves = /* @__PURE__ */ new Set();
          this._dirtyElements = /* @__PURE__ */ new Map();
          this._normalizedNodes = /* @__PURE__ */ new Set();
          this._updateTags = /* @__PURE__ */ new Set();
          this._observer = null;
          this._key = createUID();
          this._onError = onError;
          this._htmlConversions = htmlConversions;
          this._editable = true;
          this._headless = false;
          this._window = null;
        }
        isComposing() {
          return this._compositionKey != null;
        }
        registerUpdateListener(listener) {
          const listenerSetOrMap = this._listeners.update;
          listenerSetOrMap.add(listener);
          return () => {
            listenerSetOrMap.delete(listener);
          };
        }
        registerEditableListener(listener) {
          const listenerSetOrMap = this._listeners.editable;
          listenerSetOrMap.add(listener);
          return () => {
            listenerSetOrMap.delete(listener);
          };
        }
        registerDecoratorListener(listener) {
          const listenerSetOrMap = this._listeners.decorator;
          listenerSetOrMap.add(listener);
          return () => {
            listenerSetOrMap.delete(listener);
          };
        }
        registerTextContentListener(listener) {
          const listenerSetOrMap = this._listeners.textcontent;
          listenerSetOrMap.add(listener);
          return () => {
            listenerSetOrMap.delete(listener);
          };
        }
        registerRootListener(listener) {
          const listenerSetOrMap = this._listeners.root;
          listener(this._rootElement, null);
          listenerSetOrMap.add(listener);
          return () => {
            listener(null, this._rootElement);
            listenerSetOrMap.delete(listener);
          };
        }
        registerCommand(command, listener, priority) {
          if (priority === void 0) {
            {
              throw Error(`Listener for type "command" requires a "priority".`);
            }
          }
          const commandsMap = this._commands;
          if (!commandsMap.has(command)) {
            commandsMap.set(command, [/* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set()]);
          }
          const listenersInPriorityOrder = commandsMap.get(command);
          if (listenersInPriorityOrder === void 0) {
            {
              throw Error(`registerCommand: Command ${String(command)} not found in command map`);
            }
          }
          const listeners = listenersInPriorityOrder[priority];
          listeners.add(listener);
          return () => {
            listeners.delete(listener);
            if (listenersInPriorityOrder.every((listenersSet) => listenersSet.size === 0)) {
              commandsMap.delete(command);
            }
          };
        }
        registerMutationListener(klass, listener) {
          const registeredNode = this._nodes.get(klass.getType());
          if (registeredNode === void 0) {
            {
              throw Error(`Node ${klass.name} has not been registered. Ensure node has been passed to createEditor.`);
            }
          }
          const mutations = this._listeners.mutation;
          mutations.set(listener, klass);
          return () => {
            mutations.delete(listener);
          };
        }
        registerNodeTransform(klass, listener) {
          const type = klass.getType();
          const registeredNode = this._nodes.get(type);
          if (registeredNode === void 0) {
            {
              throw Error(`Node ${klass.name} has not been registered. Ensure node has been passed to createEditor.`);
            }
          }
          const transforms = registeredNode.transforms;
          transforms.add(listener);
          markAllNodesAsDirty(this, type);
          return () => {
            transforms.delete(listener);
          };
        }
        hasNodes(nodes) {
          for (let i = 0; i < nodes.length; i++) {
            const klass = nodes[i];
            const type = klass.getType();
            if (!this._nodes.has(type)) {
              return false;
            }
          }
          return true;
        }
        dispatchCommand(type, payload) {
          return dispatchCommand(this, type, payload);
        }
        getDecorators() {
          return this._decorators;
        }
        getRootElement() {
          return this._rootElement;
        }
        getKey() {
          return this._key;
        }
        setRootElement(nextRootElement) {
          const prevRootElement = this._rootElement;
          if (nextRootElement !== prevRootElement) {
            const pendingEditorState = this._pendingEditorState || this._editorState;
            this._rootElement = nextRootElement;
            resetEditor(this, prevRootElement, nextRootElement, pendingEditorState);
            if (prevRootElement !== null) {
              if (!this._config.disableEvents) {
                removeRootElementEvents(prevRootElement);
              }
            }
            if (nextRootElement !== null) {
              const windowObj = getDefaultView(nextRootElement);
              const style = nextRootElement.style;
              style.userSelect = "text";
              style.whiteSpace = "pre-wrap";
              style.wordBreak = "break-word";
              nextRootElement.setAttribute("data-lexical-editor", "true");
              this._window = windowObj;
              this._dirtyType = FULL_RECONCILE;
              initMutationObserver(this);
              this._updateTags.add("history-merge");
              commitPendingUpdates(this);
              if (!this._config.disableEvents) {
                addRootElementEvents(nextRootElement, this);
              }
            } else {
              this._window = null;
            }
            triggerListeners("root", this, false, nextRootElement, prevRootElement);
          }
        }
        getElementByKey(key) {
          return this._keyToDOMMap.get(key) || null;
        }
        getEditorState() {
          return this._editorState;
        }
        setEditorState(editorState, options) {
          if (editorState.isEmpty()) {
            {
              throw Error(`setEditorState: the editor state is empty. Ensure the editor state's root node never becomes empty.`);
            }
          }
          flushRootMutations(this);
          const pendingEditorState = this._pendingEditorState;
          const tags = this._updateTags;
          const tag = options !== void 0 ? options.tag : null;
          if (pendingEditorState !== null && !pendingEditorState.isEmpty()) {
            if (tag != null) {
              tags.add(tag);
            }
            commitPendingUpdates(this);
          }
          this._pendingEditorState = editorState;
          this._dirtyType = FULL_RECONCILE;
          this._dirtyElements.set("root", false);
          this._compositionKey = null;
          if (tag != null) {
            tags.add(tag);
          }
          commitPendingUpdates(this);
        }
        parseEditorState(maybeStringifiedEditorState, updateFn) {
          const serializedEditorState = typeof maybeStringifiedEditorState === "string" ? JSON.parse(maybeStringifiedEditorState) : maybeStringifiedEditorState;
          return parseEditorState(serializedEditorState, this, updateFn);
        }
        update(updateFn, options) {
          updateEditor(this, updateFn, options);
        }
        focus(callbackFn, options = {}) {
          const rootElement = this._rootElement;
          if (rootElement !== null) {
            rootElement.setAttribute("autocapitalize", "off");
            updateEditor(this, () => {
              const selection = $getSelection2();
              const root = $getRoot();
              if (selection !== null) {
                selection.dirty = true;
              } else if (root.getChildrenSize() !== 0) {
                if (options.defaultSelection === "rootStart") {
                  root.selectStart();
                } else {
                  root.selectEnd();
                }
              }
            }, {
              onUpdate: () => {
                rootElement.removeAttribute("autocapitalize");
                if (callbackFn) {
                  callbackFn();
                }
              }
            });
            if (this._pendingEditorState === null) {
              rootElement.removeAttribute("autocapitalize");
            }
          }
        }
        blur() {
          const rootElement = this._rootElement;
          if (rootElement !== null) {
            rootElement.blur();
          }
          const domSelection = getDOMSelection();
          if (domSelection !== null) {
            domSelection.removeAllRanges();
          }
        }
        isEditable() {
          return this._editable;
        }
        setEditable(editable) {
          if (this._editable !== editable) {
            this._editable = editable;
            triggerListeners("editable", this, true, editable);
          }
        }
        toJSON() {
          return {
            editorState: this._editorState.toJSON()
          };
        }
      };
      var VERSION = "0.4.1";
      var DEPRECATED_GridCellNode = class extends ElementNode {
        constructor(colSpan, key) {
          super(key);
          this.__colSpan = colSpan;
        }
        exportJSON() {
          return {
            ...super.exportJSON(),
            colSpan: this.__colSpan
          };
        }
      };
      function DEPRECATED_$isGridCellNode(node) {
        return node instanceof DEPRECATED_GridCellNode;
      }
      var DEPRECATED_GridNode = class extends ElementNode {
      };
      function DEPRECATED_$isGridNode(node) {
        return node instanceof DEPRECATED_GridNode;
      }
      var DEPRECATED_GridRowNode = class extends ElementNode {
      };
      function DEPRECATED_$isGridRowNode(node) {
        return node instanceof DEPRECATED_GridRowNode;
      }
      exports.$addUpdateTag = $addUpdateTag;
      exports.$createLineBreakNode = $createLineBreakNode;
      exports.$createNodeSelection = $createNodeSelection;
      exports.$createParagraphNode = $createParagraphNode;
      exports.$createRangeSelection = $createRangeSelection;
      exports.$createTextNode = $createTextNode;
      exports.$getDecoratorNode = $getDecoratorNode;
      exports.$getNearestNodeFromDOMNode = $getNearestNodeFromDOMNode;
      exports.$getNodeByKey = $getNodeByKey;
      exports.$getPreviousSelection = $getPreviousSelection;
      exports.$getRoot = $getRoot;
      exports.$getSelection = $getSelection2;
      exports.$hasAncestor = $hasAncestor;
      exports.$insertNodes = $insertNodes;
      exports.$isDecoratorNode = $isDecoratorNode;
      exports.$isElementNode = $isElementNode;
      exports.$isInlineElementOrDecoratorNode = $isInlineElementOrDecoratorNode;
      exports.$isLeafNode = $isLeafNode;
      exports.$isLineBreakNode = $isLineBreakNode;
      exports.$isNodeSelection = $isNodeSelection;
      exports.$isParagraphNode = $isParagraphNode;
      exports.$isRangeSelection = $isRangeSelection2;
      exports.$isRootNode = $isRootNode;
      exports.$isRootOrShadowRoot = $isRootOrShadowRoot;
      exports.$isTextNode = $isTextNode;
      exports.$nodesOfType = $nodesOfType;
      exports.$parseSerializedNode = $parseSerializedNode;
      exports.$setCompositionKey = $setCompositionKey;
      exports.$setSelection = $setSelection;
      exports.BLUR_COMMAND = BLUR_COMMAND;
      exports.CAN_REDO_COMMAND = CAN_REDO_COMMAND;
      exports.CAN_UNDO_COMMAND = CAN_UNDO_COMMAND;
      exports.CLEAR_EDITOR_COMMAND = CLEAR_EDITOR_COMMAND;
      exports.CLEAR_HISTORY_COMMAND = CLEAR_HISTORY_COMMAND;
      exports.CLICK_COMMAND = CLICK_COMMAND;
      exports.COMMAND_PRIORITY_CRITICAL = COMMAND_PRIORITY_CRITICAL;
      exports.COMMAND_PRIORITY_EDITOR = COMMAND_PRIORITY_EDITOR;
      exports.COMMAND_PRIORITY_HIGH = COMMAND_PRIORITY_HIGH;
      exports.COMMAND_PRIORITY_LOW = COMMAND_PRIORITY_LOW;
      exports.COMMAND_PRIORITY_NORMAL = COMMAND_PRIORITY_NORMAL;
      exports.CONTROLLED_TEXT_INSERTION_COMMAND = CONTROLLED_TEXT_INSERTION_COMMAND;
      exports.COPY_COMMAND = COPY_COMMAND;
      exports.CUT_COMMAND = CUT_COMMAND;
      exports.DELETE_CHARACTER_COMMAND = DELETE_CHARACTER_COMMAND;
      exports.DELETE_LINE_COMMAND = DELETE_LINE_COMMAND;
      exports.DELETE_WORD_COMMAND = DELETE_WORD_COMMAND;
      exports.DEPRECATED_$createGridSelection = DEPRECATED_$createGridSelection;
      exports.DEPRECATED_$isGridCellNode = DEPRECATED_$isGridCellNode;
      exports.DEPRECATED_$isGridNode = DEPRECATED_$isGridNode;
      exports.DEPRECATED_$isGridRowNode = DEPRECATED_$isGridRowNode;
      exports.DEPRECATED_$isGridSelection = DEPRECATED_$isGridSelection;
      exports.DEPRECATED_GridCellNode = DEPRECATED_GridCellNode;
      exports.DEPRECATED_GridNode = DEPRECATED_GridNode;
      exports.DEPRECATED_GridRowNode = DEPRECATED_GridRowNode;
      exports.DRAGEND_COMMAND = DRAGEND_COMMAND;
      exports.DRAGOVER_COMMAND = DRAGOVER_COMMAND;
      exports.DRAGSTART_COMMAND = DRAGSTART_COMMAND;
      exports.DROP_COMMAND = DROP_COMMAND;
      exports.DecoratorNode = DecoratorNode;
      exports.ElementNode = ElementNode;
      exports.FOCUS_COMMAND = FOCUS_COMMAND;
      exports.FORMAT_ELEMENT_COMMAND = FORMAT_ELEMENT_COMMAND;
      exports.FORMAT_TEXT_COMMAND = FORMAT_TEXT_COMMAND2;
      exports.INDENT_CONTENT_COMMAND = INDENT_CONTENT_COMMAND;
      exports.INSERT_LINE_BREAK_COMMAND = INSERT_LINE_BREAK_COMMAND;
      exports.INSERT_PARAGRAPH_COMMAND = INSERT_PARAGRAPH_COMMAND;
      exports.KEY_ARROW_DOWN_COMMAND = KEY_ARROW_DOWN_COMMAND;
      exports.KEY_ARROW_LEFT_COMMAND = KEY_ARROW_LEFT_COMMAND;
      exports.KEY_ARROW_RIGHT_COMMAND = KEY_ARROW_RIGHT_COMMAND;
      exports.KEY_ARROW_UP_COMMAND = KEY_ARROW_UP_COMMAND;
      exports.KEY_BACKSPACE_COMMAND = KEY_BACKSPACE_COMMAND;
      exports.KEY_DELETE_COMMAND = KEY_DELETE_COMMAND;
      exports.KEY_ENTER_COMMAND = KEY_ENTER_COMMAND;
      exports.KEY_ESCAPE_COMMAND = KEY_ESCAPE_COMMAND;
      exports.KEY_MODIFIER_COMMAND = KEY_MODIFIER_COMMAND;
      exports.KEY_SPACE_COMMAND = KEY_SPACE_COMMAND;
      exports.KEY_TAB_COMMAND = KEY_TAB_COMMAND;
      exports.LineBreakNode = LineBreakNode;
      exports.MOVE_TO_END = MOVE_TO_END;
      exports.MOVE_TO_START = MOVE_TO_START;
      exports.OUTDENT_CONTENT_COMMAND = OUTDENT_CONTENT_COMMAND;
      exports.PASTE_COMMAND = PASTE_COMMAND;
      exports.ParagraphNode = ParagraphNode;
      exports.REDO_COMMAND = REDO_COMMAND;
      exports.REMOVE_TEXT_COMMAND = REMOVE_TEXT_COMMAND;
      exports.RootNode = RootNode;
      exports.SELECTION_CHANGE_COMMAND = SELECTION_CHANGE_COMMAND;
      exports.TextNode = TextNode;
      exports.UNDO_COMMAND = UNDO_COMMAND;
      exports.VERSION = VERSION;
      exports.createCommand = createCommand;
      exports.createEditor = createEditor2;
    }
  });

  // node_modules/lexical/Lexical.js
  var require_Lexical = __commonJS({
    "node_modules/lexical/Lexical.js"(exports, module) {
      "use strict";
      var Lexical = true ? require_Lexical_dev() : null;
      module.exports = Lexical;
    }
  });

  // node_modules/@lexical/utils/LexicalUtils.dev.js
  var require_LexicalUtils_dev = __commonJS({
    "node_modules/@lexical/utils/LexicalUtils.dev.js"(exports) {
      "use strict";
      var lexical = require_Lexical();
      function addClassNamesToElement(element, ...classNames) {
        classNames.forEach((className) => {
          if (typeof className === "string") {
            element.classList.add(...className.split(" "));
          }
        });
      }
      function removeClassNamesFromElement(element, ...classNames) {
        classNames.forEach((className) => {
          if (typeof className === "string") {
            element.classList.remove(...className.split(" "));
          }
        });
      }
      function $dfs(startingNode, endingNode) {
        const nodes = [];
        const start = (startingNode || lexical.$getRoot()).getLatest();
        const end = endingNode || (lexical.$isElementNode(start) ? start.getLastDescendant() : start);
        let node = start;
        let depth = $getDepth(node);
        while (node !== null && !node.is(end)) {
          nodes.push({
            depth,
            node
          });
          if (lexical.$isElementNode(node) && node.getChildrenSize() > 0) {
            node = node.getFirstChild();
            depth++;
          } else {
            let sibling = null;
            while (sibling === null && node !== null) {
              sibling = node.getNextSibling();
              if (sibling === null) {
                node = node.getParent();
                depth--;
              } else {
                node = sibling;
              }
            }
          }
        }
        if (node !== null && node.is(end)) {
          nodes.push({
            depth,
            node
          });
        }
        return nodes;
      }
      function $getDepth(node) {
        let innerNode = node;
        let depth = 0;
        while ((innerNode = innerNode.getParent()) !== null) {
          depth++;
        }
        return depth;
      }
      function $getNearestNodeOfType(node, klass) {
        let parent = node;
        while (parent != null) {
          if (parent instanceof klass) {
            return parent;
          }
          parent = parent.getParent();
        }
        return null;
      }
      function $getNearestBlockElementAncestorOrThrow(startNode) {
        const blockNode = $findMatchingParent(startNode, (node) => lexical.$isElementNode(node) && !node.isInline());
        if (!lexical.$isElementNode(blockNode)) {
          {
            throw Error(`Expected node ${startNode.__key} to have closest block element node.`);
          }
        }
        return blockNode;
      }
      function $findMatchingParent(startingNode, findFn) {
        let curr = startingNode;
        while (curr !== lexical.$getRoot() && curr != null) {
          if (findFn(curr)) {
            return curr;
          }
          curr = curr.getParent();
        }
        return null;
      }
      function mergeRegister(...func) {
        return () => {
          func.forEach((f) => f());
        };
      }
      function registerNestedElementResolver(editor, targetNode, cloneNode, handleOverlap) {
        const $isTargetNode = (node) => {
          return node instanceof targetNode;
        };
        const $findMatch = (node) => {
          const children = node.getChildren();
          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if ($isTargetNode(child)) {
              return null;
            }
          }
          let parentNode = node;
          let childNode = node;
          while (parentNode !== null) {
            childNode = parentNode;
            parentNode = parentNode.getParent();
            if ($isTargetNode(parentNode)) {
              return {
                child: childNode,
                parent: parentNode
              };
            }
          }
          return null;
        };
        const elementNodeTransform = (node) => {
          const match = $findMatch(node);
          if (match !== null) {
            const {
              child,
              parent
            } = match;
            if (child.is(node)) {
              handleOverlap(parent, node);
              const nextSiblings = child.getNextSiblings();
              const nextSiblingsLength = nextSiblings.length;
              parent.insertAfter(child);
              if (nextSiblingsLength !== 0) {
                const newParent = cloneNode(parent);
                child.insertAfter(newParent);
                for (let i = 0; i < nextSiblingsLength; i++) {
                  newParent.append(nextSiblings[i]);
                }
              }
              if (!parent.canBeEmpty() && parent.getChildrenSize() === 0) {
                parent.remove();
              }
            }
          }
        };
        return editor.registerNodeTransform(targetNode, elementNodeTransform);
      }
      function unstable_internalCreateNodeFromParse(parsedNode, parsedNodeMap, editor, parentKey, activeEditorState) {
        const nodeType = parsedNode.__type;
        const registeredNode = editor._nodes.get(nodeType);
        if (registeredNode === void 0) {
          {
            throw Error(`createNodeFromParse: type "${nodeType}" + not found`);
          }
        }
        for (const property in parsedNode) {
          const value = parsedNode[property];
          if (value != null && typeof value === "object") {
            const parsedEditorState = value.editorState;
            if (parsedEditorState != null) {
              const nestedEditor = lexical.createEditor({
                namespace: parsedEditorState.namespace
              });
              nestedEditor._nodes = editor._nodes;
              nestedEditor._parentEditor = editor._parentEditor;
              nestedEditor._pendingEditorState = unstable_convertLegacyJSONEditorState(nestedEditor, parsedEditorState);
              parsedNode[property] = nestedEditor;
            }
          }
        }
        const NodeKlass = registeredNode.klass;
        const parsedKey = parsedNode.__key;
        parsedNode.__key = void 0;
        const node = NodeKlass.clone(parsedNode);
        parsedNode.__key = parsedKey;
        const key = node.__key;
        activeEditorState._nodeMap.set(key, node);
        node.__parent = parentKey;
        if (lexical.$isElementNode(node)) {
          const children = parsedNode.__children;
          for (let i = 0; i < children.length; i++) {
            const childKey = children[i];
            const parsedChild = parsedNodeMap.get(childKey);
            if (parsedChild !== void 0) {
              const child = unstable_internalCreateNodeFromParse(parsedChild, parsedNodeMap, editor, key, activeEditorState);
              const newChildKey = child.__key;
              node.__children.push(newChildKey);
            }
          }
          node.__indent = parsedNode.__indent;
          node.__format = parsedNode.__format;
          node.__dir = parsedNode.__dir;
        } else if (lexical.$isTextNode(node)) {
          node.__format = parsedNode.__format;
          node.__style = parsedNode.__style;
          node.__mode = parsedNode.__mode;
          node.__detail = parsedNode.__detail;
        }
        return node;
      }
      function unstable_parseEditorState(parsedEditorState, editor) {
        const EditorStateClass = editor._editorState.constructor;
        const nodeMap = /* @__PURE__ */ new Map();
        const editorState = new EditorStateClass(nodeMap);
        const parsedNodeMap = new Map(parsedEditorState._nodeMap);
        const parsedRoot = parsedNodeMap.get("root");
        const isUpdating = editor._updating;
        try {
          editor._updating = false;
          editor.update(() => {
            const dirtyElements = editor._dirtyElements;
            const dirtyLeaves = editor._dirtyLeaves;
            const dirtyType = editor._dirtyType;
            editor._dirtyElements = /* @__PURE__ */ new Map();
            editor._dirtyLeaves = /* @__PURE__ */ new Set();
            editor._dirtyType = 0;
            try {
              unstable_internalCreateNodeFromParse(parsedRoot, parsedNodeMap, editor, null, editorState);
            } finally {
              editor._dirtyElements = dirtyElements;
              editor._dirtyLeaves = dirtyLeaves;
              editor._dirtyType = dirtyType;
            }
          });
        } finally {
          editor._updating = isUpdating;
        }
        editorState._readOnly = true;
        return editorState;
      }
      function unstable_convertLegacyJSONEditorState(editor, maybeStringifiedEditorState) {
        const parsedEditorState = typeof maybeStringifiedEditorState === "string" ? JSON.parse(maybeStringifiedEditorState) : maybeStringifiedEditorState;
        return unstable_parseEditorState(parsedEditorState, editor);
      }
      function $restoreEditorState(editor, editorState) {
        const FULL_RECONCILE = 2;
        const nodeMap = new Map(editorState._nodeMap);
        const activeEditorState = editor._pendingEditorState;
        if (activeEditorState) {
          activeEditorState._nodeMap = nodeMap;
        }
        editor._dirtyType = FULL_RECONCILE;
        const selection = editorState._selection;
        lexical.$setSelection(selection === null ? null : selection.clone());
      }
      function $insertNodeToNearestRoot(node) {
        const selection = lexical.$getSelection();
        if (lexical.$isRangeSelection(selection)) {
          const focusNode = selection.focus.getNode();
          focusNode.getTopLevelElementOrThrow().insertAfter(node);
        } else if (lexical.$isNodeSelection(selection) || lexical.DEPRECATED_$isGridSelection(selection)) {
          const nodes = selection.getNodes();
          nodes[nodes.length - 1].getTopLevelElementOrThrow().insertAfter(node);
        } else {
          const root = lexical.$getRoot();
          root.append(node);
        }
        const paragraphNode = lexical.$createParagraphNode();
        node.insertAfter(paragraphNode);
        paragraphNode.select();
        return node.getLatest();
      }
      function $wrapNodeInElement(node, createElementNode) {
        const elementNode = createElementNode();
        node.replace(elementNode);
        elementNode.append(node);
        return elementNode;
      }
      exports.$dfs = $dfs;
      exports.$findMatchingParent = $findMatchingParent;
      exports.$getNearestBlockElementAncestorOrThrow = $getNearestBlockElementAncestorOrThrow;
      exports.$getNearestNodeOfType = $getNearestNodeOfType;
      exports.$insertNodeToNearestRoot = $insertNodeToNearestRoot;
      exports.$restoreEditorState = $restoreEditorState;
      exports.$wrapNodeInElement = $wrapNodeInElement;
      exports.addClassNamesToElement = addClassNamesToElement;
      exports.mergeRegister = mergeRegister;
      exports.registerNestedElementResolver = registerNestedElementResolver;
      exports.removeClassNamesFromElement = removeClassNamesFromElement;
      exports.unstable_convertLegacyJSONEditorState = unstable_convertLegacyJSONEditorState;
    }
  });

  // node_modules/@lexical/utils/LexicalUtils.js
  var require_LexicalUtils = __commonJS({
    "node_modules/@lexical/utils/LexicalUtils.js"(exports, module) {
      "use strict";
      var LexicalUtils = true ? require_LexicalUtils_dev() : null;
      module.exports = LexicalUtils;
    }
  });

  // node_modules/@lexical/list/LexicalList.dev.js
  var require_LexicalList_dev = __commonJS({
    "node_modules/@lexical/list/LexicalList.dev.js"(exports) {
      "use strict";
      var lexical = require_Lexical();
      var utils = require_LexicalUtils();
      function $getListDepth(listNode) {
        let depth = 1;
        let parent = listNode.getParent();
        while (parent != null) {
          if ($isListItemNode(parent)) {
            const parentList = parent.getParent();
            if ($isListNode(parentList)) {
              depth++;
              parent = parentList.getParent();
              continue;
            }
            {
              throw Error(`A ListItemNode must have a ListNode for a parent.`);
            }
          }
          return depth;
        }
        return depth;
      }
      function $getTopListNode(listItem) {
        let list = listItem.getParent();
        if (!$isListNode(list)) {
          {
            throw Error(`A ListItemNode must have a ListNode for a parent.`);
          }
        }
        let parent = list;
        while (parent !== null) {
          parent = parent.getParent();
          if ($isListNode(parent)) {
            list = parent;
          }
        }
        return list;
      }
      function $getAllListItems(node) {
        let listItemNodes = [];
        const listChildren = node.getChildren().filter($isListItemNode);
        for (let i = 0; i < listChildren.length; i++) {
          const listItemNode = listChildren[i];
          const firstChild = listItemNode.getFirstChild();
          if ($isListNode(firstChild)) {
            listItemNodes = listItemNodes.concat($getAllListItems(firstChild));
          } else {
            listItemNodes.push(listItemNode);
          }
        }
        return listItemNodes;
      }
      function isNestedListNode(node) {
        return $isListItemNode(node) && $isListNode(node.getFirstChild());
      }
      function findNearestListItemNode(node) {
        let currentNode = node;
        while (currentNode !== null) {
          if ($isListItemNode(currentNode)) {
            return currentNode;
          }
          currentNode = currentNode.getParent();
        }
        return null;
      }
      function getUniqueListItemNodes(nodeList) {
        const keys = /* @__PURE__ */ new Set();
        for (let i = 0; i < nodeList.length; i++) {
          const node = nodeList[i];
          if ($isListItemNode(node)) {
            keys.add(node);
          }
        }
        return Array.from(keys);
      }
      function $removeHighestEmptyListParent(sublist) {
        let emptyListPtr = sublist;
        while (emptyListPtr.getNextSibling() == null && emptyListPtr.getPreviousSibling() == null) {
          const parent = emptyListPtr.getParent();
          if (parent == null || !($isListItemNode(emptyListPtr) || $isListNode(emptyListPtr))) {
            break;
          }
          emptyListPtr = parent;
        }
        emptyListPtr.remove();
      }
      function wrapInListItem(node) {
        const listItemWrapper = $createListItemNode();
        return listItemWrapper.append(node);
      }
      function $isSelectingEmptyListItem(anchorNode, nodes) {
        return $isListItemNode(anchorNode) && (nodes.length === 0 || nodes.length === 1 && anchorNode.is(nodes[0]) && anchorNode.getChildrenSize() === 0);
      }
      function $getListItemValue(listItem) {
        const list = listItem.getParent();
        let value = 1;
        if (list != null) {
          if (!$isListNode(list)) {
            {
              throw Error(`$getListItemValue: list node is not parent of list item node`);
            }
          } else {
            value = list.getStart();
          }
        }
        const siblings = listItem.getPreviousSiblings();
        for (let i = 0; i < siblings.length; i++) {
          const sibling = siblings[i];
          if ($isListItemNode(sibling) && !$isListNode(sibling.getFirstChild())) {
            value++;
          }
        }
        return value;
      }
      function insertList(editor, listType) {
        editor.update(() => {
          const selection = lexical.$getSelection();
          if (lexical.$isRangeSelection(selection)) {
            const nodes = selection.getNodes();
            const anchor = selection.anchor;
            const anchorNode = anchor.getNode();
            const anchorNodeParent = anchorNode.getParent();
            if ($isSelectingEmptyListItem(anchorNode, nodes)) {
              const list = $createListNode(listType);
              if (lexical.$isRootOrShadowRoot(anchorNodeParent)) {
                anchorNode.replace(list);
                const listItem = $createListItemNode();
                if (lexical.$isElementNode(anchorNode)) {
                  listItem.setFormat(anchorNode.getFormatType());
                  listItem.setIndent(anchorNode.getIndent());
                }
                list.append(listItem);
              } else if ($isListItemNode(anchorNode)) {
                const parent = anchorNode.getParentOrThrow();
                append(list, parent.getChildren());
                parent.replace(list);
              }
              return;
            } else {
              const handled = /* @__PURE__ */ new Set();
              for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                if (lexical.$isElementNode(node) && node.isEmpty() && !handled.has(node.getKey())) {
                  createListOrMerge(node, listType);
                  continue;
                }
                if (lexical.$isLeafNode(node)) {
                  let parent = node.getParent();
                  while (parent != null) {
                    const parentKey = parent.getKey();
                    if ($isListNode(parent)) {
                      if (!handled.has(parentKey)) {
                        const newListNode = $createListNode(listType);
                        append(newListNode, parent.getChildren());
                        parent.replace(newListNode);
                        updateChildrenListItemValue(newListNode);
                        handled.add(parentKey);
                      }
                      break;
                    } else {
                      const nextParent = parent.getParent();
                      if (lexical.$isRootOrShadowRoot(nextParent) && !handled.has(parentKey)) {
                        handled.add(parentKey);
                        createListOrMerge(parent, listType);
                        break;
                      }
                      parent = nextParent;
                    }
                  }
                }
              }
            }
          }
        });
      }
      function append(node, nodesToAppend) {
        node.splice(node.getChildrenSize(), 0, nodesToAppend);
      }
      function createListOrMerge(node, listType) {
        if ($isListNode(node)) {
          return node;
        }
        const previousSibling = node.getPreviousSibling();
        const nextSibling = node.getNextSibling();
        const listItem = $createListItemNode();
        listItem.setFormat(node.getFormatType());
        listItem.setIndent(node.getIndent());
        append(listItem, node.getChildren());
        if ($isListNode(previousSibling) && listType === previousSibling.getListType()) {
          previousSibling.append(listItem);
          node.remove();
          if ($isListNode(nextSibling) && listType === nextSibling.getListType()) {
            append(previousSibling, nextSibling.getChildren());
            nextSibling.remove();
          }
          return previousSibling;
        } else if ($isListNode(nextSibling) && listType === nextSibling.getListType()) {
          nextSibling.getFirstChildOrThrow().insertBefore(listItem);
          node.remove();
          return nextSibling;
        } else {
          const list = $createListNode(listType);
          list.append(listItem);
          node.replace(list);
          updateChildrenListItemValue(list);
          return list;
        }
      }
      function removeList(editor) {
        editor.update(() => {
          const selection = lexical.$getSelection();
          if (lexical.$isRangeSelection(selection)) {
            const listNodes = /* @__PURE__ */ new Set();
            const nodes = selection.getNodes();
            const anchorNode = selection.anchor.getNode();
            if ($isSelectingEmptyListItem(anchorNode, nodes)) {
              listNodes.add($getTopListNode(anchorNode));
            } else {
              for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                if (lexical.$isLeafNode(node)) {
                  const listItemNode = utils.$getNearestNodeOfType(node, ListItemNode);
                  if (listItemNode != null) {
                    listNodes.add($getTopListNode(listItemNode));
                  }
                }
              }
            }
            for (const listNode of listNodes) {
              let insertionPoint = listNode;
              const listItems = $getAllListItems(listNode);
              for (const listItemNode of listItems) {
                const paragraph = lexical.$createParagraphNode();
                append(paragraph, listItemNode.getChildren());
                insertionPoint.insertAfter(paragraph);
                insertionPoint = paragraph;
                if (listItemNode.__key === selection.anchor.key) {
                  selection.anchor.set(paragraph.getKey(), 0, "element");
                }
                if (listItemNode.__key === selection.focus.key) {
                  selection.focus.set(paragraph.getKey(), 0, "element");
                }
                listItemNode.remove();
              }
              listNode.remove();
            }
          }
        });
      }
      function updateChildrenListItemValue(list, children) {
        (children || list.getChildren()).forEach((child) => {
          const prevValue = child.getValue();
          const nextValue = $getListItemValue(child);
          if (prevValue !== nextValue) {
            child.setValue(nextValue);
          }
        });
      }
      function $handleIndent(listItemNodes) {
        const removed = /* @__PURE__ */ new Set();
        listItemNodes.forEach((listItemNode) => {
          if (isNestedListNode(listItemNode) || removed.has(listItemNode.getKey())) {
            return;
          }
          const parent = listItemNode.getParent();
          const nextSibling = listItemNode.getNextSibling();
          const previousSibling = listItemNode.getPreviousSibling();
          if (isNestedListNode(nextSibling) && isNestedListNode(previousSibling)) {
            const innerList = previousSibling.getFirstChild();
            if ($isListNode(innerList)) {
              innerList.append(listItemNode);
              const nextInnerList = nextSibling.getFirstChild();
              if ($isListNode(nextInnerList)) {
                const children = nextInnerList.getChildren();
                append(innerList, children);
                nextSibling.remove();
                removed.add(nextSibling.getKey());
              }
              updateChildrenListItemValue(innerList);
            }
          } else if (isNestedListNode(nextSibling)) {
            const innerList = nextSibling.getFirstChild();
            if ($isListNode(innerList)) {
              const firstChild = innerList.getFirstChild();
              if (firstChild !== null) {
                firstChild.insertBefore(listItemNode);
              }
              updateChildrenListItemValue(innerList);
            }
          } else if (isNestedListNode(previousSibling)) {
            const innerList = previousSibling.getFirstChild();
            if ($isListNode(innerList)) {
              innerList.append(listItemNode);
              updateChildrenListItemValue(innerList);
            }
          } else {
            if ($isListNode(parent)) {
              const newListItem = $createListItemNode();
              const newList = $createListNode(parent.getListType());
              newListItem.append(newList);
              newList.append(listItemNode);
              if (previousSibling) {
                previousSibling.insertAfter(newListItem);
              } else if (nextSibling) {
                nextSibling.insertBefore(newListItem);
              } else {
                parent.append(newListItem);
              }
            }
          }
          if ($isListNode(parent)) {
            updateChildrenListItemValue(parent);
          }
        });
      }
      function $handleOutdent(listItemNodes) {
        listItemNodes.forEach((listItemNode) => {
          if (isNestedListNode(listItemNode)) {
            return;
          }
          const parentList = listItemNode.getParent();
          const grandparentListItem = parentList ? parentList.getParent() : void 0;
          const greatGrandparentList = grandparentListItem ? grandparentListItem.getParent() : void 0;
          if ($isListNode(greatGrandparentList) && $isListItemNode(grandparentListItem) && $isListNode(parentList)) {
            const firstChild = parentList ? parentList.getFirstChild() : void 0;
            const lastChild = parentList ? parentList.getLastChild() : void 0;
            if (listItemNode.is(firstChild)) {
              grandparentListItem.insertBefore(listItemNode);
              if (parentList.isEmpty()) {
                grandparentListItem.remove();
              }
            } else if (listItemNode.is(lastChild)) {
              grandparentListItem.insertAfter(listItemNode);
              if (parentList.isEmpty()) {
                grandparentListItem.remove();
              }
            } else {
              const listType = parentList.getListType();
              const previousSiblingsListItem = $createListItemNode();
              const previousSiblingsList = $createListNode(listType);
              previousSiblingsListItem.append(previousSiblingsList);
              listItemNode.getPreviousSiblings().forEach((sibling) => previousSiblingsList.append(sibling));
              const nextSiblingsListItem = $createListItemNode();
              const nextSiblingsList = $createListNode(listType);
              nextSiblingsListItem.append(nextSiblingsList);
              append(nextSiblingsList, listItemNode.getNextSiblings());
              grandparentListItem.insertBefore(previousSiblingsListItem);
              grandparentListItem.insertAfter(nextSiblingsListItem);
              grandparentListItem.replace(listItemNode);
            }
            updateChildrenListItemValue(parentList);
            updateChildrenListItemValue(greatGrandparentList);
          }
        });
      }
      function maybeIndentOrOutdent(direction) {
        const selection = lexical.$getSelection();
        if (!lexical.$isRangeSelection(selection)) {
          return;
        }
        const selectedNodes = selection.getNodes();
        let listItemNodes = [];
        if (selectedNodes.length === 0) {
          selectedNodes.push(selection.anchor.getNode());
        }
        if (selectedNodes.length === 1) {
          const nearestListItemNode = findNearestListItemNode(selectedNodes[0]);
          if (nearestListItemNode !== null) {
            listItemNodes = [nearestListItemNode];
          }
        } else {
          listItemNodes = getUniqueListItemNodes(selectedNodes);
        }
        if (listItemNodes.length > 0) {
          if (direction === "indent") {
            $handleIndent(listItemNodes);
          } else {
            $handleOutdent(listItemNodes);
          }
        }
      }
      function indentList() {
        maybeIndentOrOutdent("indent");
      }
      function outdentList() {
        maybeIndentOrOutdent("outdent");
      }
      function $handleListInsertParagraph() {
        const selection = lexical.$getSelection();
        if (!lexical.$isRangeSelection(selection) || !selection.isCollapsed()) {
          return false;
        }
        const anchor = selection.anchor.getNode();
        if (!$isListItemNode(anchor) || anchor.getTextContent() !== "") {
          return false;
        }
        const topListNode = $getTopListNode(anchor);
        const parent = anchor.getParent();
        if (!$isListNode(parent)) {
          throw Error(`A ListItemNode must have a ListNode for a parent.`);
        }
        const grandparent = parent.getParent();
        let replacementNode;
        if (lexical.$isRootOrShadowRoot(grandparent)) {
          replacementNode = lexical.$createParagraphNode();
          topListNode.insertAfter(replacementNode);
        } else if ($isListItemNode(grandparent)) {
          replacementNode = $createListItemNode();
          grandparent.insertAfter(replacementNode);
        } else {
          return false;
        }
        replacementNode.select();
        const nextSiblings = anchor.getNextSiblings();
        if (nextSiblings.length > 0) {
          const newList = $createListNode(parent.getListType());
          if (lexical.$isParagraphNode(replacementNode)) {
            replacementNode.insertAfter(newList);
          } else {
            const newListItem = $createListItemNode();
            newListItem.append(newList);
            replacementNode.insertAfter(newListItem);
          }
          nextSiblings.forEach((sibling) => {
            sibling.remove();
            newList.append(sibling);
          });
        }
        $removeHighestEmptyListParent(anchor);
        return true;
      }
      var ListItemNode = class extends lexical.ElementNode {
        static getType() {
          return "listitem";
        }
        static clone(node) {
          return new ListItemNode(node.__value, node.__checked, node.__key);
        }
        constructor(value, checked, key) {
          super(key);
          this.__value = value === void 0 ? 1 : value;
          this.__checked = checked;
        }
        createDOM(config) {
          const element = document.createElement("li");
          const parent = this.getParent();
          if ($isListNode(parent)) {
            updateChildrenListItemValue(parent);
            updateListItemChecked(element, this, null, parent);
          }
          element.value = this.__value;
          $setListItemThemeClassNames(element, config.theme, this);
          return element;
        }
        updateDOM(prevNode, dom, config) {
          const parent = this.getParent();
          if ($isListNode(parent)) {
            updateChildrenListItemValue(parent);
            updateListItemChecked(dom, this, prevNode, parent);
          }
          dom.value = this.__value;
          $setListItemThemeClassNames(dom, config.theme, this);
          return false;
        }
        static importDOM() {
          return {
            li: (node) => ({
              conversion: convertListItemElement,
              priority: 0
            })
          };
        }
        static importJSON(serializedNode) {
          const node = new ListItemNode(serializedNode.value, serializedNode.checked);
          node.setFormat(serializedNode.format);
          node.setIndent(serializedNode.indent);
          node.setDirection(serializedNode.direction);
          return node;
        }
        exportJSON() {
          return {
            ...super.exportJSON(),
            checked: this.getChecked(),
            type: "listitem",
            value: this.getValue(),
            version: 1
          };
        }
        append(...nodes) {
          for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (lexical.$isElementNode(node) && this.canMergeWith(node)) {
              const children = node.getChildren();
              this.append(...children);
              node.remove();
            } else {
              super.append(node);
            }
          }
          return this;
        }
        replace(replaceWithNode) {
          if ($isListItemNode(replaceWithNode)) {
            return super.replace(replaceWithNode);
          }
          const list = this.getParentOrThrow();
          if ($isListNode(list)) {
            const childrenKeys = list.__children;
            const childrenLength = childrenKeys.length;
            const index = childrenKeys.indexOf(this.__key);
            if (index === 0) {
              list.insertBefore(replaceWithNode);
            } else if (index === childrenLength - 1) {
              list.insertAfter(replaceWithNode);
            } else {
              const newList = $createListNode(list.getListType());
              const children = list.getChildren();
              for (let i = index + 1; i < childrenLength; i++) {
                const child = children[i];
                newList.append(child);
              }
              list.insertAfter(replaceWithNode);
              replaceWithNode.insertAfter(newList);
            }
            this.remove();
            if (childrenLength === 1) {
              list.remove();
            }
          }
          return replaceWithNode;
        }
        insertAfter(node) {
          const listNode = this.getParentOrThrow();
          if (!$isListNode(listNode)) {
            {
              throw Error(`insertAfter: list node is not parent of list item node`);
            }
          }
          const siblings = this.getNextSiblings();
          if ($isListItemNode(node)) {
            const after = super.insertAfter(node);
            const afterListNode = node.getParentOrThrow();
            if ($isListNode(afterListNode)) {
              updateChildrenListItemValue(afterListNode);
            }
            return after;
          }
          if ($isListNode(node) && node.getListType() === listNode.getListType()) {
            let child = node;
            const children = node.getChildren();
            for (let i = children.length - 1; i >= 0; i--) {
              child = children[i];
              this.insertAfter(child);
            }
            return child;
          }
          listNode.insertAfter(node);
          if (siblings.length !== 0) {
            const newListNode = $createListNode(listNode.getListType());
            siblings.forEach((sibling) => newListNode.append(sibling));
            node.insertAfter(newListNode);
          }
          return node;
        }
        remove(preserveEmptyParent) {
          const nextSibling = this.getNextSibling();
          super.remove(preserveEmptyParent);
          if (nextSibling !== null) {
            const parent = nextSibling.getParent();
            if ($isListNode(parent)) {
              updateChildrenListItemValue(parent);
            }
          }
        }
        insertNewAfter() {
          const newElement = $createListItemNode(this.__checked == null ? void 0 : false);
          this.insertAfter(newElement);
          return newElement;
        }
        collapseAtStart(selection) {
          const paragraph = lexical.$createParagraphNode();
          const children = this.getChildren();
          children.forEach((child) => paragraph.append(child));
          const listNode = this.getParentOrThrow();
          const listNodeParent = listNode.getParentOrThrow();
          const isIndented = $isListItemNode(listNodeParent);
          if (listNode.getChildrenSize() === 1) {
            if (isIndented) {
              listNode.remove();
              listNodeParent.select();
            } else {
              listNode.replace(paragraph);
              const anchor = selection.anchor;
              const focus = selection.focus;
              const key = paragraph.getKey();
              if (anchor.type === "element" && anchor.getNode().is(this)) {
                anchor.set(key, anchor.offset, "element");
              }
              if (focus.type === "element" && focus.getNode().is(this)) {
                focus.set(key, focus.offset, "element");
              }
            }
          } else {
            listNode.insertBefore(paragraph);
            this.remove();
          }
          return true;
        }
        getValue() {
          const self2 = this.getLatest();
          return self2.__value;
        }
        setValue(value) {
          const self2 = this.getWritable();
          self2.__value = value;
        }
        getChecked() {
          const self2 = this.getLatest();
          return self2.__checked;
        }
        setChecked(checked) {
          const self2 = this.getWritable();
          self2.__checked = checked;
        }
        toggleChecked() {
          this.setChecked(!this.__checked);
        }
        getIndent() {
          const parent = this.getParent();
          if (parent === null) {
            return this.getLatest().__indent;
          }
          let listNodeParent = parent.getParentOrThrow();
          let indentLevel = 0;
          while ($isListItemNode(listNodeParent)) {
            listNodeParent = listNodeParent.getParentOrThrow().getParentOrThrow();
            indentLevel++;
          }
          return indentLevel;
        }
        setIndent(indent) {
          let currentIndent = this.getIndent();
          while (currentIndent !== indent) {
            if (currentIndent < indent) {
              $handleIndent([this]);
              currentIndent++;
            } else {
              $handleOutdent([this]);
              currentIndent--;
            }
          }
          return this;
        }
        canIndent() {
          return false;
        }
        insertBefore(nodeToInsert) {
          if ($isListItemNode(nodeToInsert)) {
            const parent = this.getParentOrThrow();
            if ($isListNode(parent)) {
              const siblings = this.getNextSiblings();
              updateChildrenListItemValue(parent, siblings);
            }
          }
          return super.insertBefore(nodeToInsert);
        }
        canInsertAfter(node) {
          return $isListItemNode(node);
        }
        canReplaceWith(replacement) {
          return $isListItemNode(replacement);
        }
        canMergeWith(node) {
          return lexical.$isParagraphNode(node) || $isListItemNode(node);
        }
        extractWithChild(child, selection) {
          if (!lexical.$isRangeSelection(selection)) {
            return false;
          }
          const anchorNode = selection.anchor.getNode();
          const focusNode = selection.focus.getNode();
          return this.isParentOf(anchorNode) && this.isParentOf(focusNode) && this.getTextContent().length === selection.getTextContent().length;
        }
      };
      function $setListItemThemeClassNames(dom, editorThemeClasses, node) {
        const classesToAdd = [];
        const classesToRemove = [];
        const listTheme = editorThemeClasses.list;
        const listItemClassName = listTheme ? listTheme.listitem : void 0;
        let nestedListItemClassName;
        if (listTheme && listTheme.nested) {
          nestedListItemClassName = listTheme.nested.listitem;
        }
        if (listItemClassName !== void 0) {
          const listItemClasses = listItemClassName.split(" ");
          classesToAdd.push(...listItemClasses);
        }
        if (listTheme) {
          const parentNode = node.getParent();
          const isCheckList = $isListNode(parentNode) && parentNode.getListType() === "check";
          const checked = node.getChecked();
          if (!isCheckList || checked) {
            classesToRemove.push(listTheme.listitemUnchecked);
          }
          if (!isCheckList || !checked) {
            classesToRemove.push(listTheme.listitemChecked);
          }
          if (isCheckList) {
            classesToAdd.push(checked ? listTheme.listitemChecked : listTheme.listitemUnchecked);
          }
        }
        if (nestedListItemClassName !== void 0) {
          const nestedListItemClasses = nestedListItemClassName.split(" ");
          if (node.getChildren().some((child) => $isListNode(child))) {
            classesToAdd.push(...nestedListItemClasses);
          } else {
            classesToRemove.push(...nestedListItemClasses);
          }
        }
        if (classesToRemove.length > 0) {
          utils.removeClassNamesFromElement(dom, ...classesToRemove);
        }
        if (classesToAdd.length > 0) {
          utils.addClassNamesToElement(dom, ...classesToAdd);
        }
      }
      function updateListItemChecked(dom, listItemNode, prevListItemNode, listNode) {
        const isCheckList = listNode.getListType() === "check";
        if (isCheckList) {
          if ($isListNode(listItemNode.getFirstChild())) {
            dom.removeAttribute("role");
            dom.removeAttribute("tabIndex");
            dom.removeAttribute("aria-checked");
          } else {
            dom.setAttribute("role", "checkbox");
            dom.setAttribute("tabIndex", "-1");
            if (!prevListItemNode || listItemNode.__checked !== prevListItemNode.__checked) {
              dom.setAttribute("aria-checked", listItemNode.getChecked() ? "true" : "false");
            }
          }
        } else {
          if (listItemNode.getChecked() != null) {
            listItemNode.setChecked(void 0);
          }
        }
      }
      function convertListItemElement(domNode) {
        return {
          node: $createListItemNode()
        };
      }
      function $createListItemNode(checked) {
        return new ListItemNode(void 0, checked);
      }
      function $isListItemNode(node) {
        return node instanceof ListItemNode;
      }
      var ListNode = class extends lexical.ElementNode {
        static getType() {
          return "list";
        }
        static clone(node) {
          const listType = node.__listType || TAG_TO_LIST_TYPE[node.__tag];
          return new ListNode(listType, node.__start, node.__key);
        }
        constructor(listType, start, key) {
          super(key);
          const _listType = TAG_TO_LIST_TYPE[listType] || listType;
          this.__listType = _listType;
          this.__tag = _listType === "number" ? "ol" : "ul";
          this.__start = start;
        }
        getTag() {
          return this.__tag;
        }
        getListType() {
          return this.__listType;
        }
        getStart() {
          return this.__start;
        }
        createDOM(config, _editor) {
          const tag = this.__tag;
          const dom = document.createElement(tag);
          if (this.__start !== 1) {
            dom.setAttribute("start", String(this.__start));
          }
          dom.__lexicalListType = this.__listType;
          setListThemeClassNames(dom, config.theme, this);
          return dom;
        }
        updateDOM(prevNode, dom, config) {
          if (prevNode.__tag !== this.__tag) {
            return true;
          }
          setListThemeClassNames(dom, config.theme, this);
          return false;
        }
        static importDOM() {
          return {
            ol: (node) => ({
              conversion: convertListNode,
              priority: 0
            }),
            ul: (node) => ({
              conversion: convertListNode,
              priority: 0
            })
          };
        }
        static importJSON(serializedNode) {
          const node = $createListNode(serializedNode.listType, serializedNode.start);
          node.setFormat(serializedNode.format);
          node.setIndent(serializedNode.indent);
          node.setDirection(serializedNode.direction);
          return node;
        }
        exportJSON() {
          return {
            ...super.exportJSON(),
            listType: this.getListType(),
            start: this.getStart(),
            tag: this.getTag(),
            type: "list",
            version: 1
          };
        }
        canBeEmpty() {
          return false;
        }
        canIndent() {
          return false;
        }
        append(...nodesToAppend) {
          for (let i = 0; i < nodesToAppend.length; i++) {
            const currentNode = nodesToAppend[i];
            if ($isListItemNode(currentNode)) {
              super.append(currentNode);
            } else {
              const listItemNode = $createListItemNode();
              if ($isListNode(currentNode)) {
                listItemNode.append(currentNode);
              } else {
                const textNode = lexical.$createTextNode(currentNode.getTextContent());
                listItemNode.append(textNode);
              }
              super.append(listItemNode);
            }
          }
          return this;
        }
        extractWithChild(child) {
          return $isListItemNode(child);
        }
      };
      function setListThemeClassNames(dom, editorThemeClasses, node) {
        const classesToAdd = [];
        const classesToRemove = [];
        const listTheme = editorThemeClasses.list;
        if (listTheme !== void 0) {
          const listLevelsClassNames = listTheme[`${node.__tag}Depth`] || [];
          const listDepth = $getListDepth(node) - 1;
          const normalizedListDepth = listDepth % listLevelsClassNames.length;
          const listLevelClassName = listLevelsClassNames[normalizedListDepth];
          const listClassName = listTheme[node.__tag];
          let nestedListClassName;
          const nestedListTheme = listTheme.nested;
          if (nestedListTheme !== void 0 && nestedListTheme.list) {
            nestedListClassName = nestedListTheme.list;
          }
          if (listClassName !== void 0) {
            classesToAdd.push(listClassName);
          }
          if (listLevelClassName !== void 0) {
            const listItemClasses = listLevelClassName.split(" ");
            classesToAdd.push(...listItemClasses);
            for (let i = 0; i < listLevelsClassNames.length; i++) {
              if (i !== normalizedListDepth) {
                classesToRemove.push(node.__tag + i);
              }
            }
          }
          if (nestedListClassName !== void 0) {
            const nestedListItemClasses = nestedListClassName.split(" ");
            if (listDepth > 1) {
              classesToAdd.push(...nestedListItemClasses);
            } else {
              classesToRemove.push(...nestedListItemClasses);
            }
          }
        }
        if (classesToRemove.length > 0) {
          utils.removeClassNamesFromElement(dom, ...classesToRemove);
        }
        if (classesToAdd.length > 0) {
          utils.addClassNamesToElement(dom, ...classesToAdd);
        }
      }
      function normalizeChildren(nodes) {
        const normalizedListItems = [];
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          if ($isListItemNode(node)) {
            normalizedListItems.push(node);
            node.getChildren().forEach((child) => {
              if ($isListNode(child)) {
                normalizedListItems.push(wrapInListItem(child));
              }
            });
          } else {
            normalizedListItems.push(wrapInListItem(node));
          }
        }
        return normalizedListItems;
      }
      function convertListNode(domNode) {
        const nodeName = domNode.nodeName.toLowerCase();
        let node = null;
        if (nodeName === "ol") {
          node = $createListNode("number");
        } else if (nodeName === "ul") {
          node = $createListNode("bullet");
        }
        return {
          after: normalizeChildren,
          node
        };
      }
      var TAG_TO_LIST_TYPE = {
        ol: "number",
        ul: "bullet"
      };
      function $createListNode(listType, start = 1) {
        return new ListNode(listType, start);
      }
      function $isListNode(node) {
        return node instanceof ListNode;
      }
      var INSERT_UNORDERED_LIST_COMMAND2 = lexical.createCommand();
      var INSERT_ORDERED_LIST_COMMAND2 = lexical.createCommand();
      var INSERT_CHECK_LIST_COMMAND = lexical.createCommand();
      var REMOVE_LIST_COMMAND = lexical.createCommand();
      exports.$createListItemNode = $createListItemNode;
      exports.$createListNode = $createListNode;
      exports.$getListDepth = $getListDepth;
      exports.$handleListInsertParagraph = $handleListInsertParagraph;
      exports.$isListItemNode = $isListItemNode;
      exports.$isListNode = $isListNode;
      exports.INSERT_CHECK_LIST_COMMAND = INSERT_CHECK_LIST_COMMAND;
      exports.INSERT_ORDERED_LIST_COMMAND = INSERT_ORDERED_LIST_COMMAND2;
      exports.INSERT_UNORDERED_LIST_COMMAND = INSERT_UNORDERED_LIST_COMMAND2;
      exports.ListItemNode = ListItemNode;
      exports.ListNode = ListNode;
      exports.REMOVE_LIST_COMMAND = REMOVE_LIST_COMMAND;
      exports.indentList = indentList;
      exports.insertList = insertList;
      exports.outdentList = outdentList;
      exports.removeList = removeList;
    }
  });

  // node_modules/@lexical/list/LexicalList.js
  var require_LexicalList = __commonJS({
    "node_modules/@lexical/list/LexicalList.js"(exports, module) {
      "use strict";
      var LexicalList = true ? require_LexicalList_dev() : null;
      module.exports = LexicalList;
    }
  });

  // node_modules/@lexical/selection/LexicalSelection.dev.js
  var require_LexicalSelection_dev = __commonJS({
    "node_modules/@lexical/selection/LexicalSelection.dev.js"(exports) {
      "use strict";
      var lexical = require_Lexical();
      var cssToStyles = /* @__PURE__ */ new Map();
      function $cloneWithProperties(node) {
        const latest = node.getLatest();
        const constructor = latest.constructor;
        const clone2 = constructor.clone(latest);
        clone2.__parent = latest.__parent;
        if (lexical.$isElementNode(latest) && lexical.$isElementNode(clone2)) {
          clone2.__children = Array.from(latest.__children);
          clone2.__format = latest.__format;
          clone2.__indent = latest.__indent;
          clone2.__dir = latest.__dir;
        } else if (lexical.$isTextNode(latest) && lexical.$isTextNode(clone2)) {
          clone2.__format = latest.__format;
          clone2.__style = latest.__style;
          clone2.__mode = latest.__mode;
          clone2.__detail = latest.__detail;
        }
        return clone2;
      }
      function $getIndexFromPossibleClone(node, parent, nodeMap) {
        const parentClone = nodeMap.get(parent.getKey());
        if (lexical.$isElementNode(parentClone)) {
          return parentClone.__children.indexOf(node.getKey());
        }
        return node.getIndexWithinParent();
      }
      function $getParentAvoidingExcludedElements(node) {
        let parent = node.getParent();
        while (parent !== null && parent.excludeFromCopy("clone")) {
          parent = parent.getParent();
        }
        return parent;
      }
      function $copyLeafNodeBranchToRoot(leaf, startingOffset, endingOffset, isLeftSide, range2, nodeMap) {
        let node = leaf;
        let offset = startingOffset;
        while (node !== null) {
          const parent = $getParentAvoidingExcludedElements(node);
          if (parent === null) {
            break;
          }
          if (!lexical.$isElementNode(node) || !node.excludeFromCopy("clone")) {
            const key = node.getKey();
            let clone2 = nodeMap.get(key);
            const needsClone = clone2 === void 0;
            if (needsClone) {
              clone2 = $cloneWithProperties(node);
              nodeMap.set(key, clone2);
            }
            if (lexical.$isTextNode(clone2) && !clone2.isSegmented() && !clone2.isToken()) {
              clone2.__text = clone2.__text.slice(isLeftSide ? offset : 0, isLeftSide ? endingOffset : offset);
            } else if (lexical.$isElementNode(clone2)) {
              clone2.__children = clone2.__children.slice(isLeftSide ? offset : 0, isLeftSide ? void 0 : (offset || 0) + 1);
            }
            if (lexical.$isRootNode(parent)) {
              if (needsClone) {
                range2.push(key);
              }
              break;
            }
          }
          offset = $getIndexFromPossibleClone(node, parent, nodeMap);
          node = parent;
        }
      }
      function errGetLatestOnClone() {
        {
          throw Error(`getLatest() on clone node`);
        }
      }
      function $cloneContents(selection) {
        const clone2 = $cloneContentsImpl(selection);
        {
          const nodeMap = clone2.nodeMap;
          for (let i = 0; i < nodeMap.length; i++) {
            const node = nodeMap[i][1];
            if (node.getLatest === errGetLatestOnClone) {
              continue;
            }
            Object.setPrototypeOf(node, Object.create(Object.getPrototypeOf(node), {
              getLatest: {
                configurable: true,
                enumerable: true,
                value: errGetLatestOnClone,
                writable: true
              }
            }));
          }
        }
        return clone2;
      }
      function $cloneContentsImpl(selection) {
        if (lexical.$isRangeSelection(selection)) {
          const anchor = selection.anchor;
          const focus = selection.focus;
          const [anchorOffset, focusOffset] = selection.getCharacterOffsets();
          const nodes = selection.getNodes();
          if (nodes.length === 0) {
            return {
              nodeMap: [],
              range: []
            };
          }
          let nodesLength = nodes.length;
          const firstNode = nodes[0];
          const firstNodeParent = firstNode.getParent();
          if (firstNodeParent !== null && (!firstNodeParent.canBeEmpty() || lexical.$isRootNode(firstNodeParent))) {
            const parentChildren = firstNodeParent.__children;
            const parentChildrenLength = parentChildren.length;
            if (parentChildrenLength === nodesLength) {
              let areTheSame = true;
              for (let i = 0; i < parentChildren.length; i++) {
                if (parentChildren[i] !== nodes[i].__key) {
                  areTheSame = false;
                  break;
                }
              }
              if (areTheSame) {
                nodesLength++;
                nodes.push(firstNodeParent);
              }
            }
          }
          const lastNode = nodes[nodesLength - 1];
          const isBefore = anchor.isBefore(focus);
          const nodeMap = /* @__PURE__ */ new Map();
          const range2 = [];
          const isOnlyText = lexical.$isTextNode(firstNode) && nodesLength === 1;
          $copyLeafNodeBranchToRoot(firstNode, isBefore ? anchorOffset : focusOffset, isOnlyText ? isBefore ? focusOffset : anchorOffset : void 0, true, range2, nodeMap);
          for (let i = 0; i < nodesLength; i++) {
            const node = nodes[i];
            const key = node.getKey();
            if (!nodeMap.has(key) && (!lexical.$isElementNode(node) || !node.excludeFromCopy("clone"))) {
              const clone2 = $cloneWithProperties(node);
              if (lexical.$isRootNode(node.getParent())) {
                range2.push(node.getKey());
              }
              if (key !== "root") {
                nodeMap.set(key, clone2);
              }
            }
          }
          $copyLeafNodeBranchToRoot(lastNode, isOnlyText ? void 0 : isBefore ? focusOffset : anchorOffset, void 0, false, range2, nodeMap);
          return {
            nodeMap: Array.from(nodeMap.entries()),
            range: range2
          };
        } else if (lexical.DEPRECATED_$isGridSelection(selection)) {
          const nodeMap = selection.getNodes().map((node) => {
            const nodeKey = node.getKey();
            const clone2 = $cloneWithProperties(node);
            return [nodeKey, clone2];
          });
          return {
            nodeMap,
            range: [selection.gridKey]
          };
        }
        {
          throw Error(`TODO`);
        }
      }
      function getStyleObjectFromCSS(css) {
        let value = cssToStyles.get(css);
        if (value === void 0) {
          value = getStyleObjectFromRawCSS(css);
          cssToStyles.set(css, value);
        }
        return value;
      }
      function getStyleObjectFromRawCSS(css) {
        const styleObject = {};
        const styles = css.split(";");
        for (const style of styles) {
          if (style !== "") {
            const [key, value] = style.split(/:([^]+)/);
            styleObject[key.trim()] = value.trim();
          }
        }
        return styleObject;
      }
      function getCSSFromStyleObject(styles) {
        let css = "";
        for (const style in styles) {
          if (style) {
            css += `${style}: ${styles[style]};`;
          }
        }
        return css;
      }
      function $addNodeStyle(node) {
        const CSSText = node.getStyle();
        const styles = getStyleObjectFromRawCSS(CSSText);
        cssToStyles.set(CSSText, styles);
      }
      function $patchNodeStyle(node, patch) {
        const prevStyles = getStyleObjectFromCSS(node.getStyle());
        const newStyles = prevStyles ? {
          ...prevStyles,
          ...patch
        } : patch;
        const newCSSText = getCSSFromStyleObject(newStyles);
        node.setStyle(newCSSText);
        cssToStyles.set(newCSSText, newStyles);
      }
      function $patchStyleText(selection, patch) {
        const selectedNodes = selection.getNodes();
        const selectedNodesLength = selectedNodes.length;
        const lastIndex = selectedNodesLength - 1;
        let firstNode = selectedNodes[0];
        let lastNode = selectedNodes[lastIndex];
        if (selection.isCollapsed()) {
          return;
        }
        const anchor = selection.anchor;
        const focus = selection.focus;
        const firstNodeText = firstNode.getTextContent();
        const firstNodeTextLength = firstNodeText.length;
        const focusOffset = focus.offset;
        let anchorOffset = anchor.offset;
        let startOffset;
        let endOffset;
        const isBefore = anchor.isBefore(focus);
        startOffset = isBefore ? anchorOffset : focusOffset;
        endOffset = isBefore ? focusOffset : anchorOffset;
        if (startOffset === firstNode.getTextContentSize()) {
          const nextSibling = firstNode.getNextSibling();
          if (lexical.$isTextNode(nextSibling)) {
            anchorOffset = 0;
            startOffset = 0;
            firstNode = nextSibling;
          }
        }
        if (firstNode.is(lastNode)) {
          if (lexical.$isTextNode(firstNode)) {
            startOffset = anchorOffset > focusOffset ? focusOffset : anchorOffset;
            endOffset = anchorOffset > focusOffset ? anchorOffset : focusOffset;
            if (startOffset === endOffset) {
              return;
            }
            if (startOffset === 0 && endOffset === firstNodeTextLength) {
              $patchNodeStyle(firstNode, patch);
              firstNode.select(startOffset, endOffset);
            } else {
              const splitNodes = firstNode.splitText(startOffset, endOffset);
              const replacement = startOffset === 0 ? splitNodes[0] : splitNodes[1];
              $patchNodeStyle(replacement, patch);
              replacement.select(0, endOffset - startOffset);
            }
          }
        } else {
          if (lexical.$isTextNode(firstNode)) {
            if (startOffset !== 0) {
              firstNode = firstNode.splitText(startOffset)[1];
              startOffset = 0;
            }
            $patchNodeStyle(firstNode, patch);
          }
          if (lexical.$isTextNode(lastNode)) {
            const lastNodeText = lastNode.getTextContent();
            const lastNodeTextLength = lastNodeText.length;
            if (endOffset !== lastNodeTextLength) {
              [lastNode] = lastNode.splitText(endOffset);
            }
            if (endOffset !== 0) {
              $patchNodeStyle(lastNode, patch);
            }
          }
          for (let i = 1; i < lastIndex; i++) {
            const selectedNode = selectedNodes[i];
            const selectedNodeKey = selectedNode.getKey();
            if (lexical.$isTextNode(selectedNode) && selectedNodeKey !== firstNode.getKey() && selectedNodeKey !== lastNode.getKey() && !selectedNode.isToken()) {
              $patchNodeStyle(selectedNode, patch);
            }
          }
        }
      }
      function $getSelectionStyleValueForProperty(selection, styleProperty, defaultValue = "") {
        let styleValue = null;
        const nodes = selection.getNodes();
        const anchor = selection.anchor;
        const focus = selection.focus;
        const isBackward = selection.isBackward();
        const endOffset = isBackward ? focus.offset : anchor.offset;
        const endNode = isBackward ? focus.getNode() : anchor.getNode();
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          if (i !== 0 && endOffset === 0 && node.is(endNode)) {
            continue;
          }
          if (lexical.$isTextNode(node)) {
            const nodeStyleValue = $getNodeStyleValueForProperty(node, styleProperty, defaultValue);
            if (styleValue === null) {
              styleValue = nodeStyleValue;
            } else if (styleValue !== nodeStyleValue) {
              styleValue = "";
              break;
            }
          }
        }
        return styleValue === null ? defaultValue : styleValue;
      }
      function $getNodeStyleValueForProperty(node, styleProperty, defaultValue) {
        const css = node.getStyle();
        const styleObject = getStyleObjectFromCSS(css);
        if (styleObject !== null) {
          return styleObject[styleProperty] || defaultValue;
        }
        return defaultValue;
      }
      function $moveCaretSelection(selection, isHoldingShift, isBackward, granularity) {
        selection.modify(isHoldingShift ? "extend" : "move", isBackward, granularity);
      }
      function $isParentElementRTL(selection) {
        const anchorNode = selection.anchor.getNode();
        const parent = lexical.$isRootNode(anchorNode) ? anchorNode : anchorNode.getParentOrThrow();
        return parent.getDirection() === "rtl";
      }
      function $moveCharacter(selection, isHoldingShift, isBackward) {
        const isRTL = $isParentElementRTL(selection);
        $moveCaretSelection(selection, isHoldingShift, isBackward ? !isRTL : isRTL, "character");
      }
      function $selectAll(selection) {
        const anchor = selection.anchor;
        const focus = selection.focus;
        const anchorNode = anchor.getNode();
        const topParent = anchorNode.getTopLevelElementOrThrow();
        const root = topParent.getParentOrThrow();
        let firstNode = root.getFirstDescendant();
        let lastNode = root.getLastDescendant();
        let firstType = "element";
        let lastType = "element";
        let lastOffset = 0;
        if (lexical.$isTextNode(firstNode)) {
          firstType = "text";
        } else if (!lexical.$isElementNode(firstNode) && firstNode !== null) {
          firstNode = firstNode.getParentOrThrow();
        }
        if (lexical.$isTextNode(lastNode)) {
          lastType = "text";
          lastOffset = lastNode.getTextContentSize();
        } else if (!lexical.$isElementNode(lastNode) && lastNode !== null) {
          lastNode = lastNode.getParentOrThrow();
        }
        if (firstNode && lastNode) {
          anchor.set(firstNode.getKey(), 0, firstType);
          focus.set(lastNode.getKey(), lastOffset, lastType);
        }
      }
      function $removeParentEmptyElements(startingNode) {
        let node = startingNode;
        while (node !== null && !lexical.$isRootOrShadowRoot(node)) {
          const latest = node.getLatest();
          const parentNode = node.getParent();
          if (latest.__children.length === 0) {
            node.remove(true);
          }
          node = parentNode;
        }
      }
      function $wrapNodes2(selection, createElement, wrappingElement = null) {
        const nodes = selection.getNodes();
        const nodesLength = nodes.length;
        const anchor = selection.anchor;
        if (nodesLength === 0 || nodesLength === 1 && anchor.type === "element" && anchor.getNode().getChildrenSize() === 0) {
          const target = anchor.type === "text" ? anchor.getNode().getParentOrThrow() : anchor.getNode();
          const children = target.getChildren();
          let element = createElement();
          element.setFormat(target.getFormatType());
          element.setIndent(target.getIndent());
          children.forEach((child) => element.append(child));
          if (wrappingElement) {
            element = wrappingElement.append(element);
          }
          target.replace(element);
          return;
        }
        let topLevelNode = null;
        let descendants = [];
        for (let i = 0; i < nodesLength; i++) {
          const node = nodes[i];
          if (lexical.$isRootOrShadowRoot(node)) {
            $wrapNodesImpl(selection, descendants, descendants.length, createElement, wrappingElement);
            descendants = [];
            topLevelNode = node;
          } else if (topLevelNode === null || topLevelNode !== null && lexical.$hasAncestor(node, topLevelNode)) {
            descendants.push(node);
          } else {
            $wrapNodesImpl(selection, descendants, descendants.length, createElement, wrappingElement);
            descendants = [node];
          }
        }
        $wrapNodesImpl(selection, descendants, descendants.length, createElement, wrappingElement);
      }
      function $wrapNodesImpl(selection, nodes, nodesLength, createElement, wrappingElement = null) {
        if (nodes.length === 0) {
          return;
        }
        const firstNode = nodes[0];
        const elementMapping = /* @__PURE__ */ new Map();
        const elements = [];
        let target = lexical.$isElementNode(firstNode) ? firstNode : firstNode.getParentOrThrow();
        if (target.isInline()) {
          target = target.getParentOrThrow();
        }
        let targetIsPrevSibling = false;
        while (target !== null) {
          const prevSibling = target.getPreviousSibling();
          if (prevSibling !== null) {
            target = prevSibling;
            targetIsPrevSibling = true;
            break;
          }
          target = target.getParentOrThrow();
          if (lexical.$isRootOrShadowRoot(target)) {
            break;
          }
        }
        const emptyElements = /* @__PURE__ */ new Set();
        for (let i = 0; i < nodesLength; i++) {
          const node = nodes[i];
          if (lexical.$isElementNode(node) && node.getChildrenSize() === 0) {
            emptyElements.add(node.getKey());
          }
        }
        const movedLeafNodes = /* @__PURE__ */ new Set();
        for (let i = 0; i < nodesLength; i++) {
          const node = nodes[i];
          let parent = node.getParent();
          if (parent !== null && parent.isInline()) {
            parent = parent.getParent();
          }
          if (parent !== null && lexical.$isLeafNode(node) && !movedLeafNodes.has(node.getKey())) {
            const parentKey = parent.getKey();
            if (elementMapping.get(parentKey) === void 0) {
              const targetElement = createElement();
              targetElement.setFormat(parent.getFormatType());
              targetElement.setIndent(parent.getIndent());
              elements.push(targetElement);
              elementMapping.set(parentKey, targetElement);
              parent.getChildren().forEach((child) => {
                targetElement.append(child);
                movedLeafNodes.add(child.getKey());
              });
              $removeParentEmptyElements(parent);
            }
          } else if (emptyElements.has(node.getKey())) {
            const targetElement = createElement();
            targetElement.setFormat(node.getFormatType());
            targetElement.setIndent(node.getIndent());
            elements.push(targetElement);
            node.remove(true);
          }
        }
        if (wrappingElement !== null) {
          for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            wrappingElement.append(element);
          }
        }
        if (lexical.$isRootOrShadowRoot(target)) {
          if (targetIsPrevSibling) {
            if (wrappingElement !== null) {
              target.insertAfter(wrappingElement);
            } else {
              for (let i = elements.length - 1; i >= 0; i--) {
                const element = elements[i];
                target.insertAfter(element);
              }
            }
          } else {
            const firstChild = target.getFirstChild();
            if (lexical.$isElementNode(firstChild)) {
              target = firstChild;
            }
            if (firstChild === null) {
              if (wrappingElement) {
                target.append(wrappingElement);
              } else {
                for (let i = 0; i < elements.length; i++) {
                  const element = elements[i];
                  target.append(element);
                }
              }
            } else {
              if (wrappingElement !== null) {
                firstChild.insertBefore(wrappingElement);
              } else {
                for (let i = 0; i < elements.length; i++) {
                  const element = elements[i];
                  firstChild.insertBefore(element);
                }
              }
            }
          }
        } else {
          if (wrappingElement) {
            target.insertAfter(wrappingElement);
          } else {
            for (let i = elements.length - 1; i >= 0; i--) {
              const element = elements[i];
              target.insertAfter(element);
            }
          }
        }
        const prevSelection = lexical.$getPreviousSelection();
        if (lexical.$isRangeSelection(prevSelection) && isPointAttached(prevSelection.anchor) && isPointAttached(prevSelection.focus)) {
          lexical.$setSelection(prevSelection.clone());
        } else {
          selection.dirty = true;
        }
      }
      function isPointAttached(point) {
        return point.getNode().isAttached();
      }
      function $isAtNodeEnd(point) {
        if (point.type === "text") {
          return point.offset === point.getNode().getTextContentSize();
        }
        return point.offset === point.getNode().getChildrenSize();
      }
      function $shouldOverrideDefaultCharacterSelection(selection, isBackward) {
        const possibleNode = lexical.$getDecoratorNode(selection.focus, isBackward);
        return lexical.$isDecoratorNode(possibleNode) && !possibleNode.isIsolated();
      }
      function getDOMTextNode(element) {
        let node = element;
        while (node != null) {
          if (node.nodeType === Node.TEXT_NODE) {
            return node;
          }
          node = node.firstChild;
        }
        return null;
      }
      function getDOMIndexWithinParent(node) {
        const parent = node.parentNode;
        if (parent == null) {
          throw new Error("Should never happen");
        }
        return [parent, Array.from(parent.childNodes).indexOf(node)];
      }
      function createDOMRange(editor, anchorNode, _anchorOffset, focusNode, _focusOffset) {
        const anchorKey = anchorNode.getKey();
        const focusKey = focusNode.getKey();
        const range2 = document.createRange();
        let anchorDOM = editor.getElementByKey(anchorKey);
        let focusDOM = editor.getElementByKey(focusKey);
        let anchorOffset = _anchorOffset;
        let focusOffset = _focusOffset;
        if (lexical.$isTextNode(anchorNode)) {
          anchorDOM = getDOMTextNode(anchorDOM);
        }
        if (lexical.$isTextNode(focusNode)) {
          focusDOM = getDOMTextNode(focusDOM);
        }
        if (anchorNode === void 0 || focusNode === void 0 || anchorDOM === null || focusDOM === null) {
          return null;
        }
        if (anchorDOM.nodeName === "BR") {
          [anchorDOM, anchorOffset] = getDOMIndexWithinParent(anchorDOM);
        }
        if (focusDOM.nodeName === "BR") {
          [focusDOM, focusOffset] = getDOMIndexWithinParent(focusDOM);
        }
        const firstChild = anchorDOM.firstChild;
        if (anchorDOM === focusDOM && firstChild != null && firstChild.nodeName === "BR" && anchorOffset === 0 && focusOffset === 0) {
          focusOffset = 1;
        }
        try {
          range2.setStart(anchorDOM, anchorOffset);
          range2.setEnd(focusDOM, focusOffset);
        } catch (e) {
          return null;
        }
        if (range2.collapsed && (anchorOffset !== focusOffset || anchorKey !== focusKey)) {
          range2.setStart(focusDOM, focusOffset);
          range2.setEnd(anchorDOM, anchorOffset);
        }
        return range2;
      }
      function createRectsFromDOMRange(editor, range2) {
        const rootElement = editor.getRootElement();
        if (rootElement === null) {
          return [];
        }
        const rootRect = rootElement.getBoundingClientRect();
        const computedStyle = getComputedStyle(rootElement);
        const rootPadding = parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
        const selectionRects = Array.from(range2.getClientRects());
        let selectionRectsLength = selectionRects.length;
        let prevRect;
        for (let i = 0; i < selectionRectsLength; i++) {
          const selectionRect = selectionRects[i];
          const isDuplicateRect = prevRect && prevRect.top === selectionRect.top && prevRect.left === selectionRect.left && prevRect.width === selectionRect.width && prevRect.height === selectionRect.height;
          const selectionSpansElement = selectionRect.width + rootPadding === rootRect.width;
          if (isDuplicateRect || selectionSpansElement) {
            selectionRects.splice(i--, 1);
            selectionRectsLength--;
            continue;
          }
          prevRect = selectionRect;
        }
        return selectionRects;
      }
      function trimTextContentFromAnchor(editor, anchor, delCount) {
        let currentNode = anchor.getNode();
        let remaining = delCount;
        if (lexical.$isElementNode(currentNode)) {
          const descendantNode = currentNode.getDescendantByIndex(anchor.offset);
          if (descendantNode !== null) {
            currentNode = descendantNode;
          }
        }
        while (remaining > 0 && currentNode !== null) {
          let nextNode = currentNode.getPreviousSibling();
          let additionalElementWhitespace = 0;
          if (nextNode === null) {
            let parent = currentNode.getParentOrThrow();
            let parentSibling = parent.getPreviousSibling();
            while (parentSibling === null) {
              parent = parent.getParent();
              if (parent === null) {
                nextNode = null;
                break;
              }
              parentSibling = parent.getPreviousSibling();
            }
            if (parent !== null) {
              additionalElementWhitespace = parent.isInline() ? 0 : 2;
              if (lexical.$isElementNode(parentSibling)) {
                nextNode = parentSibling.getLastDescendant();
              } else {
                nextNode = parentSibling;
              }
            }
          }
          let text = currentNode.getTextContent();
          if (text === "" && lexical.$isElementNode(currentNode) && !currentNode.isInline()) {
            text = "\n\n";
          }
          const textNodeSize = text.length;
          const offset = textNodeSize - remaining;
          const slicedText = text.slice(0, offset);
          if (!lexical.$isTextNode(currentNode) || remaining >= textNodeSize) {
            const parent = currentNode.getParent();
            currentNode.remove();
            if (parent != null && parent.getChildrenSize() === 0) {
              parent.remove();
            }
            remaining -= textNodeSize + additionalElementWhitespace;
            currentNode = nextNode;
          } else {
            const key = currentNode.getKey();
            const prevTextContent = editor.getEditorState().read(() => {
              const prevNode = lexical.$getNodeByKey(key);
              if (lexical.$isTextNode(prevNode) && prevNode.isSimpleText()) {
                return prevNode.getTextContent();
              }
              return null;
            });
            if (prevTextContent !== null && prevTextContent !== text) {
              const prevSelection = lexical.$getPreviousSelection();
              let target = currentNode;
              if (!currentNode.isSimpleText()) {
                const textNode = lexical.$createTextNode(prevTextContent);
                currentNode.replace(textNode);
                target = textNode;
              } else {
                currentNode.setTextContent(prevTextContent);
              }
              if (lexical.$isRangeSelection(prevSelection) && prevSelection.isCollapsed()) {
                const prevOffset = prevSelection.anchor.offset;
                target.select(prevOffset, prevOffset);
              }
            } else if (currentNode.isSimpleText()) {
              const isSelected = anchor.key === key;
              let anchorOffset = anchor.offset;
              if (anchorOffset < remaining) {
                anchorOffset = textNodeSize;
              }
              const splitStart = isSelected ? anchorOffset - remaining : 0;
              const splitEnd = isSelected ? anchorOffset : offset;
              if (isSelected && splitStart === 0) {
                const [excessNode] = currentNode.splitText(splitStart, splitEnd);
                excessNode.remove();
              } else {
                const [, excessNode] = currentNode.splitText(splitStart, splitEnd);
                excessNode.remove();
              }
            } else {
              const textNode = lexical.$createTextNode(slicedText);
              currentNode.replace(textNode);
            }
            remaining = 0;
          }
        }
      }
      function $sliceSelectedTextNodeContent(selection, textNode) {
        if (textNode.isSelected() && !textNode.isSegmented() && !textNode.isToken() && (lexical.$isRangeSelection(selection) || lexical.DEPRECATED_$isGridSelection(selection))) {
          const anchorNode = selection.anchor.getNode();
          const focusNode = selection.focus.getNode();
          const isAnchor = textNode.is(anchorNode);
          const isFocus = textNode.is(focusNode);
          if (isAnchor || isFocus) {
            const isBackward = selection.isBackward();
            const [anchorOffset, focusOffset] = selection.getCharacterOffsets();
            const isSame = anchorNode.is(focusNode);
            const isFirst = textNode.is(isBackward ? focusNode : anchorNode);
            const isLast = textNode.is(isBackward ? anchorNode : focusNode);
            let startOffset = 0;
            let endOffset = void 0;
            if (isSame) {
              startOffset = anchorOffset > focusOffset ? focusOffset : anchorOffset;
              endOffset = anchorOffset > focusOffset ? anchorOffset : focusOffset;
            } else if (isFirst) {
              const offset = isBackward ? focusOffset : anchorOffset;
              startOffset = offset;
              endOffset = void 0;
            } else if (isLast) {
              const offset = isBackward ? anchorOffset : focusOffset;
              startOffset = 0;
              endOffset = offset;
            }
            textNode.__text = textNode.__text.slice(startOffset, endOffset);
            return textNode;
          }
        }
        return textNode;
      }
      exports.$addNodeStyle = $addNodeStyle;
      exports.$cloneContents = $cloneContents;
      exports.$cloneWithProperties = $cloneWithProperties;
      exports.$getSelectionStyleValueForProperty = $getSelectionStyleValueForProperty;
      exports.$isAtNodeEnd = $isAtNodeEnd;
      exports.$isParentElementRTL = $isParentElementRTL;
      exports.$moveCaretSelection = $moveCaretSelection;
      exports.$moveCharacter = $moveCharacter;
      exports.$patchStyleText = $patchStyleText;
      exports.$selectAll = $selectAll;
      exports.$shouldOverrideDefaultCharacterSelection = $shouldOverrideDefaultCharacterSelection;
      exports.$sliceSelectedTextNodeContent = $sliceSelectedTextNodeContent;
      exports.$wrapNodes = $wrapNodes2;
      exports.$wrapNodesImpl = $wrapNodesImpl;
      exports.createDOMRange = createDOMRange;
      exports.createRectsFromDOMRange = createRectsFromDOMRange;
      exports.getStyleObjectFromCSS = getStyleObjectFromCSS;
      exports.trimTextContentFromAnchor = trimTextContentFromAnchor;
    }
  });

  // node_modules/@lexical/selection/LexicalSelection.js
  var require_LexicalSelection = __commonJS({
    "node_modules/@lexical/selection/LexicalSelection.js"(exports, module) {
      "use strict";
      var LexicalSelection = true ? require_LexicalSelection_dev() : null;
      module.exports = LexicalSelection;
    }
  });

  // node_modules/@lexical/html/LexicalHtml.dev.js
  var require_LexicalHtml_dev = __commonJS({
    "node_modules/@lexical/html/LexicalHtml.dev.js"(exports) {
      "use strict";
      var selection = require_LexicalSelection();
      var lexical = require_Lexical();
      function $generateNodesFromDOM(editor, dom) {
        let lexicalNodes = [];
        const elements = dom.body ? Array.from(dom.body.childNodes) : [];
        const elementsLength = elements.length;
        for (let i = 0; i < elementsLength; i++) {
          const element = elements[i];
          if (!IGNORE_TAGS.has(element.nodeName)) {
            const lexicalNode = $createNodesFromDOM(element, editor);
            if (lexicalNode !== null) {
              lexicalNodes = lexicalNodes.concat(lexicalNode);
            }
          }
        }
        return lexicalNodes;
      }
      function $generateHtmlFromNodes(editor, selection2) {
        if (document == null || window == null) {
          throw new Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
        }
        const container = document.createElement("div");
        const root = lexical.$getRoot();
        const topLevelChildren = root.getChildren();
        for (let i = 0; i < topLevelChildren.length; i++) {
          const topLevelNode = topLevelChildren[i];
          $appendNodesToHTML(editor, topLevelNode, container, selection2);
        }
        return container.innerHTML;
      }
      function $appendNodesToHTML(editor, currentNode, parentElement, selection$1 = null) {
        let shouldInclude = selection$1 != null ? currentNode.isSelected() : true;
        const shouldExclude = lexical.$isElementNode(currentNode) && currentNode.excludeFromCopy("html");
        let target = currentNode;
        if (selection$1 !== null) {
          let clone2 = selection.$cloneWithProperties(currentNode);
          clone2 = lexical.$isTextNode(clone2) && selection$1 != null ? selection.$sliceSelectedTextNodeContent(selection$1, clone2) : clone2;
          target = clone2;
        }
        const children = lexical.$isElementNode(target) ? target.getChildren() : [];
        const {
          element,
          after
        } = target.exportDOM(editor);
        if (!element) {
          return false;
        }
        const fragment = new DocumentFragment();
        for (let i = 0; i < children.length; i++) {
          const childNode = children[i];
          const shouldIncludeChild = $appendNodesToHTML(editor, childNode, fragment, selection$1);
          if (!shouldInclude && lexical.$isElementNode(currentNode) && shouldIncludeChild && currentNode.extractWithChild(childNode, selection$1, "html")) {
            shouldInclude = true;
          }
        }
        if (shouldInclude && !shouldExclude) {
          element.append(fragment);
          parentElement.append(element);
          if (after) {
            const newElement = after.call(target, element);
            if (newElement)
              element.replaceWith(newElement);
          }
        } else {
          parentElement.append(fragment);
        }
        return shouldInclude;
      }
      function getConversionFunction(domNode, editor) {
        const {
          nodeName
        } = domNode;
        const cachedConversions = editor._htmlConversions.get(nodeName.toLowerCase());
        let currentConversion = null;
        if (cachedConversions !== void 0) {
          for (const cachedConversion of cachedConversions) {
            const domConversion = cachedConversion(domNode);
            if (domConversion !== null && (currentConversion === null || currentConversion.priority < domConversion.priority)) {
              currentConversion = domConversion;
            }
          }
        }
        return currentConversion !== null ? currentConversion.conversion : null;
      }
      var IGNORE_TAGS = /* @__PURE__ */ new Set(["STYLE"]);
      function $createNodesFromDOM(node, editor, forChildMap = /* @__PURE__ */ new Map(), parentLexicalNode, preformatted = false) {
        let lexicalNodes = [];
        if (IGNORE_TAGS.has(node.nodeName)) {
          return lexicalNodes;
        }
        let currentLexicalNode = null;
        const transformFunction = getConversionFunction(node, editor);
        const transformOutput = transformFunction ? transformFunction(node, void 0, preformatted) : null;
        let postTransform = null;
        if (transformOutput !== null) {
          postTransform = transformOutput.after;
          currentLexicalNode = transformOutput.node;
          if (currentLexicalNode !== null) {
            for (const [, forChildFunction] of forChildMap) {
              currentLexicalNode = forChildFunction(currentLexicalNode, parentLexicalNode);
              if (!currentLexicalNode) {
                break;
              }
            }
            if (currentLexicalNode) {
              lexicalNodes.push(currentLexicalNode);
            }
          }
          if (transformOutput.forChild != null) {
            forChildMap.set(node.nodeName, transformOutput.forChild);
          }
        }
        const children = node.childNodes;
        let childLexicalNodes = [];
        for (let i = 0; i < children.length; i++) {
          childLexicalNodes.push(...$createNodesFromDOM(children[i], editor, new Map(forChildMap), currentLexicalNode, preformatted || (transformOutput && transformOutput.preformatted) === true));
        }
        if (postTransform != null) {
          childLexicalNodes = postTransform(childLexicalNodes);
        }
        if (currentLexicalNode == null) {
          lexicalNodes = lexicalNodes.concat(childLexicalNodes);
        } else {
          if (lexical.$isElementNode(currentLexicalNode)) {
            currentLexicalNode.append(...childLexicalNodes);
          }
        }
        return lexicalNodes;
      }
      exports.$generateHtmlFromNodes = $generateHtmlFromNodes;
      exports.$generateNodesFromDOM = $generateNodesFromDOM;
    }
  });

  // node_modules/@lexical/html/LexicalHtml.js
  var require_LexicalHtml = __commonJS({
    "node_modules/@lexical/html/LexicalHtml.js"(exports, module) {
      "use strict";
      var LexicalHtml = true ? require_LexicalHtml_dev() : null;
      module.exports = LexicalHtml;
    }
  });

  // node_modules/@lexical/clipboard/LexicalClipboard.dev.js
  var require_LexicalClipboard_dev = __commonJS({
    "node_modules/@lexical/clipboard/LexicalClipboard.dev.js"(exports) {
      "use strict";
      var html = require_LexicalHtml();
      var list = require_LexicalList();
      var selection = require_LexicalSelection();
      var utils = require_LexicalUtils();
      var lexical = require_Lexical();
      function $getHtmlContent(editor) {
        const selection2 = lexical.$getSelection();
        if (selection2 == null) {
          throw new Error("Expected valid LexicalSelection");
        }
        if (lexical.$isRangeSelection(selection2) && selection2.isCollapsed() || selection2.getNodes().length === 0) {
          return null;
        }
        return html.$generateHtmlFromNodes(editor, selection2);
      }
      function $getLexicalContent(editor) {
        const selection2 = lexical.$getSelection();
        if (selection2 == null) {
          throw new Error("Expected valid LexicalSelection");
        }
        if (lexical.$isRangeSelection(selection2) && selection2.isCollapsed() || selection2.getNodes().length === 0) {
          return null;
        }
        return JSON.stringify($generateJSONFromSelectedNodes(editor, selection2));
      }
      function $insertDataTransferForPlainText(dataTransfer, selection2) {
        const text = dataTransfer.getData("text/plain");
        if (text != null) {
          selection2.insertRawText(text);
        }
      }
      function $insertDataTransferForRichText(dataTransfer, selection2, editor) {
        const lexicalString = dataTransfer.getData("application/x-lexical-editor");
        if (lexicalString) {
          try {
            const payload = JSON.parse(lexicalString);
            if (payload.namespace === editor._config.namespace && Array.isArray(payload.nodes)) {
              const nodes = $generateNodesFromSerializedNodes(payload.nodes);
              return $insertGeneratedNodes(editor, nodes, selection2);
            }
          } catch {
          }
        }
        const htmlString = dataTransfer.getData("text/html");
        if (htmlString) {
          try {
            const parser = new DOMParser();
            const dom = parser.parseFromString(htmlString, "text/html");
            const nodes = html.$generateNodesFromDOM(editor, dom);
            return $insertGeneratedNodes(editor, nodes, selection2);
          } catch {
          }
        }
        const text = dataTransfer.getData("text/plain");
        if (text != null) {
          if (lexical.$isRangeSelection(selection2)) {
            const lines = text.split(/\r?\n/);
            const linesLength = lines.length;
            for (let i = 0; i < linesLength; i++) {
              selection2.insertText(lines[i]);
              if (i < linesLength - 1) {
                selection2.insertParagraph();
              }
            }
          } else {
            selection2.insertRawText(text);
          }
        }
      }
      function $insertGeneratedNodes(editor, nodes, selection2) {
        const isSelectionInsideOfGrid = lexical.DEPRECATED_$isGridSelection(selection2) || utils.$findMatchingParent(selection2.anchor.getNode(), (n) => lexical.DEPRECATED_$isGridCellNode(n)) !== null && utils.$findMatchingParent(selection2.focus.getNode(), (n) => lexical.DEPRECATED_$isGridCellNode(n)) !== null;
        if (isSelectionInsideOfGrid && nodes.length === 1 && lexical.DEPRECATED_$isGridNode(nodes[0])) {
          $mergeGridNodesStrategy(nodes, selection2, false, editor);
          return;
        }
        $basicInsertStrategy(nodes, selection2);
        return;
      }
      function $basicInsertStrategy(nodes, selection2) {
        const topLevelBlocks = [];
        let currentBlock = null;
        let list$1 = null;
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          if (list.$isListItemNode(node)) {
            if (list$1 == null) {
              list$1 = list.$createListNode("bullet");
              topLevelBlocks.push(list$1);
            }
            list$1.append(node);
            continue;
          } else if (list$1 != null) {
            list$1 = null;
          }
          if (lexical.$isDecoratorNode(node) && node.isInline() || lexical.$isElementNode(node) && node.isInline() || lexical.$isTextNode(node) || lexical.$isLineBreakNode(node)) {
            if (currentBlock === null) {
              currentBlock = lexical.$createParagraphNode();
              topLevelBlocks.push(currentBlock);
            }
            if (currentBlock !== null) {
              currentBlock.append(node);
            }
          } else {
            topLevelBlocks.push(node);
            currentBlock = null;
          }
        }
        if (lexical.$isRangeSelection(selection2)) {
          selection2.insertNodes(topLevelBlocks);
        } else if (lexical.DEPRECATED_$isGridSelection(selection2)) {
          const anchorCell = selection2.anchor.getNode();
          if (!lexical.DEPRECATED_$isGridCellNode(anchorCell)) {
            {
              throw Error(`Expected Grid Cell in Grid Selection`);
            }
          }
          anchorCell.append(...topLevelBlocks);
        }
      }
      function $mergeGridNodesStrategy(nodes, selection2, isFromLexical, editor) {
        if (nodes.length !== 1 || !lexical.DEPRECATED_$isGridNode(nodes[0])) {
          {
            throw Error(`$mergeGridNodesStrategy: Expected Grid insertion.`);
          }
        }
        const newGrid = nodes[0];
        const newGridRows = newGrid.getChildren();
        const newColumnCount = newGrid.getFirstChildOrThrow().getChildrenSize();
        const newRowCount = newGrid.getChildrenSize();
        const gridCellNode = utils.$findMatchingParent(selection2.anchor.getNode(), (n) => lexical.DEPRECATED_$isGridCellNode(n));
        const gridRowNode = gridCellNode && utils.$findMatchingParent(gridCellNode, (n) => lexical.DEPRECATED_$isGridRowNode(n));
        const gridNode = gridRowNode && utils.$findMatchingParent(gridRowNode, (n) => lexical.DEPRECATED_$isGridNode(n));
        if (!lexical.DEPRECATED_$isGridCellNode(gridCellNode) || !lexical.DEPRECATED_$isGridRowNode(gridRowNode) || !lexical.DEPRECATED_$isGridNode(gridNode)) {
          {
            throw Error(`$mergeGridNodesStrategy: Expected selection to be inside of a Grid.`);
          }
        }
        const startY = gridRowNode.getIndexWithinParent();
        const stopY = Math.min(gridNode.getChildrenSize() - 1, startY + newRowCount - 1);
        const startX = gridCellNode.getIndexWithinParent();
        const stopX = Math.min(gridRowNode.getChildrenSize() - 1, startX + newColumnCount - 1);
        const fromX = Math.min(startX, stopX);
        const fromY = Math.min(startY, stopY);
        const toX = Math.max(startX, stopX);
        const toY = Math.max(startY, stopY);
        const gridRowNodes = gridNode.getChildren();
        let newRowIdx = 0;
        let newAnchorCellKey;
        let newFocusCellKey;
        for (let r = fromY; r <= toY; r++) {
          const currentGridRowNode = gridRowNodes[r];
          if (!lexical.DEPRECATED_$isGridRowNode(currentGridRowNode)) {
            {
              throw Error(`getNodes: expected to find GridRowNode`);
            }
          }
          const newGridRowNode = newGridRows[newRowIdx];
          if (!lexical.DEPRECATED_$isGridRowNode(newGridRowNode)) {
            {
              throw Error(`getNodes: expected to find GridRowNode`);
            }
          }
          const gridCellNodes = currentGridRowNode.getChildren();
          const newGridCellNodes = newGridRowNode.getChildren();
          let newColumnIdx = 0;
          for (let c = fromX; c <= toX; c++) {
            const currentGridCellNode = gridCellNodes[c];
            if (!lexical.DEPRECATED_$isGridCellNode(currentGridCellNode)) {
              {
                throw Error(`getNodes: expected to find GridCellNode`);
              }
            }
            const newGridCellNode = newGridCellNodes[newColumnIdx];
            if (!lexical.DEPRECATED_$isGridCellNode(newGridCellNode)) {
              {
                throw Error(`getNodes: expected to find GridCellNode`);
              }
            }
            if (r === fromY && c === fromX) {
              newAnchorCellKey = currentGridCellNode.getKey();
            } else if (r === toY && c === toX) {
              newFocusCellKey = currentGridCellNode.getKey();
            }
            const originalChildren = currentGridCellNode.getChildren();
            newGridCellNode.getChildren().forEach((child) => {
              if (lexical.$isTextNode(child)) {
                const paragraphNode = lexical.$createParagraphNode();
                paragraphNode.append(child);
                currentGridCellNode.append(child);
              } else {
                currentGridCellNode.append(child);
              }
            });
            originalChildren.forEach((n) => n.remove());
            newColumnIdx++;
          }
          newRowIdx++;
        }
        if (newAnchorCellKey && newFocusCellKey) {
          const newGridSelection = lexical.DEPRECATED_$createGridSelection();
          newGridSelection.set(gridNode.getKey(), newAnchorCellKey, newFocusCellKey);
          lexical.$setSelection(newGridSelection);
          editor.dispatchCommand(lexical.SELECTION_CHANGE_COMMAND, void 0);
        }
      }
      function exportNodeToJSON(node) {
        const serializedNode = node.exportJSON();
        const nodeClass = node.constructor;
        if (serializedNode.type !== nodeClass.getType()) {
          {
            throw Error(`LexicalNode: Node ${nodeClass.name} does not implement .exportJSON().`);
          }
        }
        const serializedChildren = serializedNode.children;
        if (lexical.$isElementNode(node)) {
          if (!Array.isArray(serializedChildren)) {
            {
              throw Error(`LexicalNode: Node ${nodeClass.name} is an element but .exportJSON() does not have a children array.`);
            }
          }
        }
        return serializedNode;
      }
      function $appendNodesToJSON(editor, selection$1, currentNode, targetArray = []) {
        let shouldInclude = selection$1 != null ? currentNode.isSelected() : true;
        const shouldExclude = lexical.$isElementNode(currentNode) && currentNode.excludeFromCopy("html");
        let target = currentNode;
        if (selection$1 !== null) {
          let clone2 = selection.$cloneWithProperties(currentNode);
          clone2 = lexical.$isTextNode(clone2) && selection$1 != null ? selection.$sliceSelectedTextNodeContent(selection$1, clone2) : clone2;
          target = clone2;
        }
        const children = lexical.$isElementNode(target) ? target.getChildren() : [];
        const serializedNode = exportNodeToJSON(target);
        if (lexical.$isTextNode(target)) {
          serializedNode.text = target.__text;
        }
        for (let i = 0; i < children.length; i++) {
          const childNode = children[i];
          const shouldIncludeChild = $appendNodesToJSON(editor, selection$1, childNode, serializedNode.children);
          if (!shouldInclude && lexical.$isElementNode(currentNode) && shouldIncludeChild && currentNode.extractWithChild(childNode, selection$1, "clone")) {
            shouldInclude = true;
          }
        }
        if (shouldInclude && !shouldExclude) {
          targetArray.push(serializedNode);
        } else if (Array.isArray(serializedNode.children)) {
          for (let i = 0; i < serializedNode.children.length; i++) {
            const serializedChildNode = serializedNode.children[i];
            targetArray.push(serializedChildNode);
          }
        }
        return shouldInclude;
      }
      function $generateJSONFromSelectedNodes(editor, selection2) {
        const nodes = [];
        const root = lexical.$getRoot();
        const topLevelChildren = root.getChildren();
        for (let i = 0; i < topLevelChildren.length; i++) {
          const topLevelNode = topLevelChildren[i];
          $appendNodesToJSON(editor, selection2, topLevelNode, nodes);
        }
        return {
          namespace: editor._config.namespace,
          nodes
        };
      }
      function $generateNodesFromSerializedNodes(serializedNodes) {
        const nodes = [];
        for (let i = 0; i < serializedNodes.length; i++) {
          const serializedNode = serializedNodes[i];
          const node = lexical.$parseSerializedNode(serializedNode);
          if (lexical.$isTextNode(node)) {
            selection.$addNodeStyle(node);
          }
          nodes.push(node);
        }
        return nodes;
      }
      exports.$generateJSONFromSelectedNodes = $generateJSONFromSelectedNodes;
      exports.$generateNodesFromSerializedNodes = $generateNodesFromSerializedNodes;
      exports.$getHtmlContent = $getHtmlContent;
      exports.$getLexicalContent = $getLexicalContent;
      exports.$insertDataTransferForPlainText = $insertDataTransferForPlainText;
      exports.$insertDataTransferForRichText = $insertDataTransferForRichText;
      exports.$insertGeneratedNodes = $insertGeneratedNodes;
    }
  });

  // node_modules/@lexical/clipboard/LexicalClipboard.js
  var require_LexicalClipboard = __commonJS({
    "node_modules/@lexical/clipboard/LexicalClipboard.js"(exports, module) {
      "use strict";
      var LexicalClipboard = true ? require_LexicalClipboard_dev() : null;
      module.exports = LexicalClipboard;
    }
  });

  // node_modules/@lexical/rich-text/LexicalRichText.dev.js
  var require_LexicalRichText_dev = __commonJS({
    "node_modules/@lexical/rich-text/LexicalRichText.dev.js"(exports) {
      "use strict";
      var clipboard = require_LexicalClipboard();
      var selection = require_LexicalSelection();
      var utils = require_LexicalUtils();
      var lexical = require_Lexical();
      var CAN_USE_DOM = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
      var documentMode = CAN_USE_DOM && "documentMode" in document ? document.documentMode : null;
      CAN_USE_DOM && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
      CAN_USE_DOM && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
      var CAN_USE_BEFORE_INPUT = CAN_USE_DOM && "InputEvent" in window && !documentMode ? "getTargetRanges" in new window.InputEvent("input") : false;
      var IS_SAFARI = CAN_USE_DOM && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
      var IS_IOS = CAN_USE_DOM && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      var QuoteNode = class extends lexical.ElementNode {
        static getType() {
          return "quote";
        }
        static clone(node) {
          return new QuoteNode(node.__key);
        }
        constructor(key) {
          super(key);
        }
        createDOM(config) {
          const element = document.createElement("blockquote");
          utils.addClassNamesToElement(element, config.theme.quote);
          return element;
        }
        updateDOM(prevNode, dom) {
          return false;
        }
        static importDOM() {
          return {
            blockquote: (node) => ({
              conversion: convertBlockquoteElement,
              priority: 0
            })
          };
        }
        static importJSON(serializedNode) {
          const node = $createQuoteNode();
          node.setFormat(serializedNode.format);
          node.setIndent(serializedNode.indent);
          node.setDirection(serializedNode.direction);
          return node;
        }
        exportJSON() {
          return {
            ...super.exportJSON(),
            type: "quote"
          };
        }
        insertNewAfter() {
          const newBlock = lexical.$createParagraphNode();
          const direction = this.getDirection();
          newBlock.setDirection(direction);
          this.insertAfter(newBlock);
          return newBlock;
        }
        collapseAtStart() {
          const paragraph = lexical.$createParagraphNode();
          const children = this.getChildren();
          children.forEach((child) => paragraph.append(child));
          this.replace(paragraph);
          return true;
        }
      };
      function $createQuoteNode() {
        return new QuoteNode();
      }
      function $isQuoteNode(node) {
        return node instanceof QuoteNode;
      }
      var HeadingNode2 = class extends lexical.ElementNode {
        static getType() {
          return "heading";
        }
        static clone(node) {
          return new HeadingNode2(node.__tag, node.__key);
        }
        constructor(tag, key) {
          super(key);
          this.__tag = tag;
        }
        getTag() {
          return this.__tag;
        }
        createDOM(config) {
          const tag = this.__tag;
          const element = document.createElement(tag);
          const theme = config.theme;
          const classNames = theme.heading;
          if (classNames !== void 0) {
            const className = classNames[tag];
            utils.addClassNamesToElement(element, className);
          }
          return element;
        }
        updateDOM(prevNode, dom) {
          return false;
        }
        static importDOM() {
          return {
            h1: (node) => ({
              conversion: convertHeadingElement,
              priority: 0
            }),
            h2: (node) => ({
              conversion: convertHeadingElement,
              priority: 0
            }),
            h3: (node) => ({
              conversion: convertHeadingElement,
              priority: 0
            }),
            h4: (node) => ({
              conversion: convertHeadingElement,
              priority: 0
            }),
            h5: (node) => ({
              conversion: convertHeadingElement,
              priority: 0
            }),
            h6: (node) => ({
              conversion: convertHeadingElement,
              priority: 0
            }),
            p: (node) => {
              const paragraph = node;
              const firstChild = paragraph.firstChild;
              if (firstChild !== null && isGoogleDocsTitle(firstChild)) {
                return {
                  conversion: () => ({
                    node: null
                  }),
                  priority: 3
                };
              }
              return null;
            },
            span: (node) => {
              if (isGoogleDocsTitle(node)) {
                return {
                  conversion: (domNode) => {
                    return {
                      node: $createHeadingNode2("h1")
                    };
                  },
                  priority: 3
                };
              }
              return null;
            }
          };
        }
        static importJSON(serializedNode) {
          const node = $createHeadingNode2(serializedNode.tag);
          node.setFormat(serializedNode.format);
          node.setIndent(serializedNode.indent);
          node.setDirection(serializedNode.direction);
          return node;
        }
        exportJSON() {
          return {
            ...super.exportJSON(),
            tag: this.getTag(),
            type: "heading",
            version: 1
          };
        }
        insertNewAfter() {
          const newElement = lexical.$createParagraphNode();
          const direction = this.getDirection();
          newElement.setDirection(direction);
          this.insertAfter(newElement);
          return newElement;
        }
        collapseAtStart() {
          const paragraph = lexical.$createParagraphNode();
          const children = this.getChildren();
          children.forEach((child) => paragraph.append(child));
          this.replace(paragraph);
          return true;
        }
        extractWithChild() {
          return true;
        }
      };
      function isGoogleDocsTitle(domNode) {
        if (domNode.nodeName.toLowerCase() === "span") {
          return domNode.style.fontSize === "26pt";
        }
        return false;
      }
      function convertHeadingElement(domNode) {
        const nodeName = domNode.nodeName.toLowerCase();
        let node = null;
        if (nodeName === "h1" || nodeName === "h2" || nodeName === "h3" || nodeName === "h4" || nodeName === "h5" || nodeName === "h6") {
          node = $createHeadingNode2(nodeName);
        }
        return {
          node
        };
      }
      function convertBlockquoteElement() {
        const node = $createQuoteNode();
        return {
          node
        };
      }
      function $createHeadingNode2(headingTag) {
        return new HeadingNode2(headingTag);
      }
      function $isHeadingNode(node) {
        return node instanceof HeadingNode2;
      }
      function onPasteForRichText(event, editor) {
        event.preventDefault();
        editor.update(() => {
          const selection2 = lexical.$getSelection();
          const clipboardData = event instanceof InputEvent || event instanceof KeyboardEvent ? null : event.clipboardData;
          if (clipboardData != null && (lexical.$isRangeSelection(selection2) || lexical.DEPRECATED_$isGridSelection(selection2))) {
            clipboard.$insertDataTransferForRichText(clipboardData, selection2, editor);
          }
        }, {
          tag: "paste"
        });
      }
      function onCopyForRichText(event, editor) {
        const selection2 = lexical.$getSelection();
        if (selection2 !== null) {
          event.preventDefault();
          const clipboardData = event instanceof KeyboardEvent ? null : event.clipboardData;
          const htmlString = clipboard.$getHtmlContent(editor);
          const lexicalString = clipboard.$getLexicalContent(editor);
          if (clipboardData != null) {
            if (htmlString !== null) {
              clipboardData.setData("text/html", htmlString);
            }
            if (lexicalString !== null) {
              clipboardData.setData("application/x-lexical-editor", lexicalString);
            }
            const plainString = selection2.getTextContent();
            clipboardData.setData("text/plain", plainString);
          } else {
            const clipboard2 = navigator.clipboard;
            if (clipboard2 != null) {
              const data = [new ClipboardItem({
                "text/html": new Blob([htmlString], {
                  type: "text/html"
                })
              })];
              clipboard2.write(data);
            }
          }
        }
      }
      function onCutForRichText(event, editor) {
        onCopyForRichText(event, editor);
        const selection2 = lexical.$getSelection();
        if (lexical.$isRangeSelection(selection2)) {
          selection2.removeText();
        } else if (lexical.$isNodeSelection(selection2)) {
          selection2.getNodes().forEach((node) => node.remove());
        }
      }
      function handleIndentAndOutdent(insertTab, indentOrOutdent) {
        const selection2 = lexical.$getSelection();
        if (!lexical.$isRangeSelection(selection2)) {
          return;
        }
        const alreadyHandled = /* @__PURE__ */ new Set();
        const nodes = selection2.getNodes();
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          const key = node.getKey();
          if (alreadyHandled.has(key)) {
            continue;
          }
          alreadyHandled.add(key);
          const parentBlock = utils.$getNearestBlockElementAncestorOrThrow(node);
          if (parentBlock.canInsertTab()) {
            insertTab(node);
          } else if (parentBlock.canIndent()) {
            indentOrOutdent(parentBlock);
          }
        }
      }
      function isTargetWithinDecorator(target) {
        const node = lexical.$getNearestNodeFromDOMNode(target);
        return lexical.$isDecoratorNode(node);
      }
      function registerRichText2(editor) {
        const removeListener = utils.mergeRegister(editor.registerCommand(lexical.CLICK_COMMAND, (payload) => {
          const selection2 = lexical.$getSelection();
          if (lexical.$isNodeSelection(selection2)) {
            selection2.clear();
            return true;
          }
          return false;
        }, 0), editor.registerCommand(lexical.DELETE_CHARACTER_COMMAND, (isBackward) => {
          const selection2 = lexical.$getSelection();
          if (!lexical.$isRangeSelection(selection2)) {
            return false;
          }
          selection2.deleteCharacter(isBackward);
          return true;
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.DELETE_WORD_COMMAND, (isBackward) => {
          const selection2 = lexical.$getSelection();
          if (!lexical.$isRangeSelection(selection2)) {
            return false;
          }
          selection2.deleteWord(isBackward);
          return true;
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.DELETE_LINE_COMMAND, (isBackward) => {
          const selection2 = lexical.$getSelection();
          if (!lexical.$isRangeSelection(selection2)) {
            return false;
          }
          selection2.deleteLine(isBackward);
          return true;
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.CONTROLLED_TEXT_INSERTION_COMMAND, (eventOrText) => {
          const selection2 = lexical.$getSelection();
          if (typeof eventOrText === "string") {
            if (lexical.$isRangeSelection(selection2)) {
              selection2.insertText(eventOrText);
            } else if (lexical.DEPRECATED_$isGridSelection(selection2))
              ;
          } else {
            if (!lexical.$isRangeSelection(selection2) && !lexical.DEPRECATED_$isGridSelection(selection2)) {
              return false;
            }
            const dataTransfer = eventOrText.dataTransfer;
            if (dataTransfer != null) {
              clipboard.$insertDataTransferForRichText(dataTransfer, selection2, editor);
            } else if (lexical.$isRangeSelection(selection2)) {
              const data = eventOrText.data;
              if (data) {
                selection2.insertText(data);
              }
              return true;
            }
          }
          return true;
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.REMOVE_TEXT_COMMAND, () => {
          const selection2 = lexical.$getSelection();
          if (!lexical.$isRangeSelection(selection2)) {
            return false;
          }
          selection2.removeText();
          return true;
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.FORMAT_TEXT_COMMAND, (format) => {
          const selection2 = lexical.$getSelection();
          if (!lexical.$isRangeSelection(selection2)) {
            return false;
          }
          selection2.formatText(format);
          return true;
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.FORMAT_ELEMENT_COMMAND, (format) => {
          const selection2 = lexical.$getSelection();
          if (!lexical.$isRangeSelection(selection2) && !lexical.$isNodeSelection(selection2)) {
            return false;
          }
          const nodes = selection2.getNodes();
          for (const node of nodes) {
            const element = utils.$getNearestBlockElementAncestorOrThrow(node);
            element.setFormat(format);
          }
          return true;
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.INSERT_LINE_BREAK_COMMAND, (selectStart) => {
          const selection2 = lexical.$getSelection();
          if (!lexical.$isRangeSelection(selection2)) {
            return false;
          }
          selection2.insertLineBreak(selectStart);
          return true;
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.INSERT_PARAGRAPH_COMMAND, () => {
          const selection2 = lexical.$getSelection();
          if (!lexical.$isRangeSelection(selection2)) {
            return false;
          }
          selection2.insertParagraph();
          return true;
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.INDENT_CONTENT_COMMAND, () => {
          handleIndentAndOutdent(() => {
            editor.dispatchCommand(lexical.CONTROLLED_TEXT_INSERTION_COMMAND, "	");
          }, (block) => {
            const indent = block.getIndent();
            if (indent !== 10) {
              block.setIndent(indent + 1);
            }
          });
          return true;
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.OUTDENT_CONTENT_COMMAND, () => {
          handleIndentAndOutdent((node) => {
            if (lexical.$isTextNode(node)) {
              const textContent = node.getTextContent();
              const character = textContent[textContent.length - 1];
              if (character === "	") {
                editor.dispatchCommand(lexical.DELETE_CHARACTER_COMMAND, true);
              }
            }
          }, (block) => {
            const indent = block.getIndent();
            if (indent !== 0) {
              block.setIndent(indent - 1);
            }
          });
          return true;
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.KEY_ARROW_UP_COMMAND, (event) => {
          const selection2 = lexical.$getSelection();
          if (lexical.$isNodeSelection(selection2) && !isTargetWithinDecorator(event.target)) {
            const nodes = selection2.getNodes();
            if (nodes.length > 0) {
              nodes[0].selectPrevious();
              return true;
            }
          }
          return false;
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.KEY_ARROW_DOWN_COMMAND, (event) => {
          const selection2 = lexical.$getSelection();
          if (lexical.$isNodeSelection(selection2)) {
            const nodes = selection2.getNodes();
            if (nodes.length > 0) {
              nodes[0].selectNext(0, 0);
              return true;
            }
          }
          return false;
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.KEY_ARROW_LEFT_COMMAND, (event) => {
          const selection$1 = lexical.$getSelection();
          if (lexical.$isNodeSelection(selection$1)) {
            const nodes = selection$1.getNodes();
            if (nodes.length > 0) {
              event.preventDefault();
              nodes[0].selectPrevious();
              return true;
            }
          }
          if (!lexical.$isRangeSelection(selection$1)) {
            return false;
          }
          if (selection.$shouldOverrideDefaultCharacterSelection(selection$1, true)) {
            const isHoldingShift = event.shiftKey;
            event.preventDefault();
            selection.$moveCharacter(selection$1, isHoldingShift, true);
            return true;
          }
          return false;
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.KEY_ARROW_RIGHT_COMMAND, (event) => {
          const selection$1 = lexical.$getSelection();
          if (lexical.$isNodeSelection(selection$1) && !isTargetWithinDecorator(event.target)) {
            const nodes = selection$1.getNodes();
            if (nodes.length > 0) {
              event.preventDefault();
              nodes[0].selectNext(0, 0);
              return true;
            }
          }
          if (!lexical.$isRangeSelection(selection$1)) {
            return false;
          }
          const isHoldingShift = event.shiftKey;
          if (selection.$shouldOverrideDefaultCharacterSelection(selection$1, false)) {
            event.preventDefault();
            selection.$moveCharacter(selection$1, isHoldingShift, false);
            return true;
          }
          return false;
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.KEY_BACKSPACE_COMMAND, (event) => {
          if (isTargetWithinDecorator(event.target)) {
            return false;
          }
          const selection2 = lexical.$getSelection();
          if (!lexical.$isRangeSelection(selection2)) {
            return false;
          }
          event.preventDefault();
          const {
            anchor
          } = selection2;
          const anchorNode = anchor.getNode();
          if (selection2.isCollapsed() && anchor.offset === 0 && !lexical.$isRootNode(anchorNode)) {
            const element = utils.$getNearestBlockElementAncestorOrThrow(anchorNode);
            if (element.getIndent() > 0) {
              return editor.dispatchCommand(lexical.OUTDENT_CONTENT_COMMAND, void 0);
            }
          }
          return editor.dispatchCommand(lexical.DELETE_CHARACTER_COMMAND, true);
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.KEY_DELETE_COMMAND, (event) => {
          if (isTargetWithinDecorator(event.target)) {
            return false;
          }
          const selection2 = lexical.$getSelection();
          if (!lexical.$isRangeSelection(selection2)) {
            return false;
          }
          event.preventDefault();
          return editor.dispatchCommand(lexical.DELETE_CHARACTER_COMMAND, false);
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.KEY_ENTER_COMMAND, (event) => {
          const selection2 = lexical.$getSelection();
          if (!lexical.$isRangeSelection(selection2)) {
            return false;
          }
          if (event !== null) {
            if ((IS_IOS || IS_SAFARI) && CAN_USE_BEFORE_INPUT) {
              return false;
            }
            event.preventDefault();
            if (event.shiftKey) {
              return editor.dispatchCommand(lexical.INSERT_LINE_BREAK_COMMAND, false);
            }
          }
          return editor.dispatchCommand(lexical.INSERT_PARAGRAPH_COMMAND, void 0);
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.KEY_TAB_COMMAND, (event) => {
          const selection2 = lexical.$getSelection();
          if (!lexical.$isRangeSelection(selection2)) {
            return false;
          }
          event.preventDefault();
          return editor.dispatchCommand(event.shiftKey ? lexical.OUTDENT_CONTENT_COMMAND : lexical.INDENT_CONTENT_COMMAND, void 0);
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.KEY_ESCAPE_COMMAND, () => {
          const selection2 = lexical.$getSelection();
          if (!lexical.$isRangeSelection(selection2)) {
            return false;
          }
          editor.blur();
          return true;
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.DROP_COMMAND, (event) => {
          const selection2 = lexical.$getSelection();
          if (!lexical.$isRangeSelection(selection2)) {
            return false;
          }
          event.preventDefault();
          return true;
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.DRAGSTART_COMMAND, (event) => {
          const selection2 = lexical.$getSelection();
          if (!lexical.$isRangeSelection(selection2)) {
            return false;
          }
          event.preventDefault();
          return true;
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.COPY_COMMAND, (event) => {
          onCopyForRichText(event, editor);
          return true;
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.CUT_COMMAND, (event) => {
          onCutForRichText(event, editor);
          return true;
        }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.PASTE_COMMAND, (event) => {
          const selection2 = lexical.$getSelection();
          if (lexical.$isRangeSelection(selection2) || lexical.DEPRECATED_$isGridSelection(selection2)) {
            onPasteForRichText(event, editor);
            return true;
          }
          return false;
        }, lexical.COMMAND_PRIORITY_EDITOR));
        return removeListener;
      }
      exports.$createHeadingNode = $createHeadingNode2;
      exports.$createQuoteNode = $createQuoteNode;
      exports.$isHeadingNode = $isHeadingNode;
      exports.$isQuoteNode = $isQuoteNode;
      exports.HeadingNode = HeadingNode2;
      exports.QuoteNode = QuoteNode;
      exports.registerRichText = registerRichText2;
    }
  });

  // node_modules/@lexical/rich-text/LexicalRichText.js
  var require_LexicalRichText = __commonJS({
    "node_modules/@lexical/rich-text/LexicalRichText.js"(exports, module) {
      "use strict";
      var LexicalRichText = true ? require_LexicalRichText_dev() : null;
      module.exports = LexicalRichText;
    }
  });

  // js/lexical.js
  var lexical_exports = {};
  __export(lexical_exports, {
    HTMLEditor: () => HTMLEditor
  });
  var import_lexical, import_list, import_rich_text, import_selection, HTMLEditor;
  var init_lexical = __esm({
    "js/lexical.js"() {
      import_lexical = __toESM(require_Lexical());
      import_list = __toESM(require_LexicalList());
      import_rich_text = __toESM(require_LexicalRichText());
      import_selection = __toESM(require_LexicalSelection());
      HTMLEditor = (element) => {
        const editor = (0, import_lexical.createEditor)({
          onError: console.error,
          nodes: [
            import_rich_text.HeadingNode
          ]
        });
        editor.setRootElement(document.getElementById(element.id));
        (0, import_rich_text.registerRichText)(editor);
        element.addEventListener("heading", (e) => {
          const headingSize = e.detail.dispatcher.dataset.headingSize;
          editor.update(() => {
            const selection = (0, import_lexical.$getSelection)();
            if ((0, import_lexical.$isRangeSelection)(selection)) {
              (0, import_selection.$wrapNodes)(selection, () => (0, import_rich_text.$createHeadingNode)(headingSize));
            }
          });
        });
        element.addEventListener("bold", (e) => {
          editor.dispatchCommand(import_lexical.FORMAT_TEXT_COMMAND, "bold");
        });
        element.addEventListener("italic", (e) => {
          editor.dispatchCommand(import_lexical.FORMAT_TEXT_COMMAND, "italic");
        });
        element.addEventListener("bulletedList", (e) => {
          editor.dispatchCommand(import_list.INSERT_UNORDERED_LIST_COMMAND, void 0);
        });
        element.addEventListener("orderedList", (e) => {
          editor.dispatchCommand(import_list.INSERT_ORDERED_LIST_COMMAND, void 0);
        });
        const stringifiedEditorState = JSON.stringify(editor.getEditorState().toJSON());
        const newEditorState = editor.parseEditorState(stringifiedEditorState);
      };
    }
  });

  // ../deps/phoenix_live_view/priv/static/phoenix_live_view.esm.js
  var CONSECUTIVE_RELOADS = "consecutive-reloads";
  var MAX_RELOADS = 10;
  var RELOAD_JITTER_MIN = 5e3;
  var RELOAD_JITTER_MAX = 1e4;
  var FAILSAFE_JITTER = 3e4;
  var PHX_EVENT_CLASSES = [
    "phx-click-loading",
    "phx-change-loading",
    "phx-submit-loading",
    "phx-keydown-loading",
    "phx-keyup-loading",
    "phx-blur-loading",
    "phx-focus-loading"
  ];
  var PHX_COMPONENT = "data-phx-component";
  var PHX_LIVE_LINK = "data-phx-link";
  var PHX_TRACK_STATIC = "track-static";
  var PHX_LINK_STATE = "data-phx-link-state";
  var PHX_REF = "data-phx-ref";
  var PHX_REF_SRC = "data-phx-ref-src";
  var PHX_TRACK_UPLOADS = "track-uploads";
  var PHX_UPLOAD_REF = "data-phx-upload-ref";
  var PHX_PREFLIGHTED_REFS = "data-phx-preflighted-refs";
  var PHX_DONE_REFS = "data-phx-done-refs";
  var PHX_DROP_TARGET = "drop-target";
  var PHX_ACTIVE_ENTRY_REFS = "data-phx-active-refs";
  var PHX_LIVE_FILE_UPDATED = "phx:live-file:updated";
  var PHX_SKIP = "data-phx-skip";
  var PHX_PRUNE = "data-phx-prune";
  var PHX_PAGE_LOADING = "page-loading";
  var PHX_CONNECTED_CLASS = "phx-connected";
  var PHX_DISCONNECTED_CLASS = "phx-loading";
  var PHX_NO_FEEDBACK_CLASS = "phx-no-feedback";
  var PHX_ERROR_CLASS = "phx-error";
  var PHX_PARENT_ID = "data-phx-parent-id";
  var PHX_MAIN = "data-phx-main";
  var PHX_ROOT_ID = "data-phx-root-id";
  var PHX_TRIGGER_ACTION = "trigger-action";
  var PHX_FEEDBACK_FOR = "feedback-for";
  var PHX_HAS_FOCUSED = "phx-has-focused";
  var FOCUSABLE_INPUTS = ["text", "textarea", "number", "email", "password", "search", "tel", "url", "date", "time", "datetime-local", "color", "range"];
  var CHECKABLE_INPUTS = ["checkbox", "radio"];
  var PHX_HAS_SUBMITTED = "phx-has-submitted";
  var PHX_SESSION = "data-phx-session";
  var PHX_VIEW_SELECTOR = `[${PHX_SESSION}]`;
  var PHX_STICKY = "data-phx-sticky";
  var PHX_STATIC = "data-phx-static";
  var PHX_READONLY = "data-phx-readonly";
  var PHX_DISABLED = "data-phx-disabled";
  var PHX_DISABLE_WITH = "disable-with";
  var PHX_DISABLE_WITH_RESTORE = "data-phx-disable-with-restore";
  var PHX_HOOK = "hook";
  var PHX_DEBOUNCE = "debounce";
  var PHX_THROTTLE = "throttle";
  var PHX_UPDATE = "update";
  var PHX_KEY = "key";
  var PHX_PRIVATE = "phxPrivate";
  var PHX_AUTO_RECOVER = "auto-recover";
  var PHX_LV_DEBUG = "phx:live-socket:debug";
  var PHX_LV_PROFILE = "phx:live-socket:profiling";
  var PHX_LV_LATENCY_SIM = "phx:live-socket:latency-sim";
  var PHX_PROGRESS = "progress";
  var LOADER_TIMEOUT = 1;
  var BEFORE_UNLOAD_LOADER_TIMEOUT = 200;
  var BINDING_PREFIX = "phx-";
  var PUSH_TIMEOUT = 3e4;
  var DEBOUNCE_TRIGGER = "debounce-trigger";
  var THROTTLED = "throttled";
  var DEBOUNCE_PREV_KEY = "debounce-prev-key";
  var DEFAULTS = {
    debounce: 300,
    throttle: 300
  };
  var DYNAMICS = "d";
  var STATIC = "s";
  var COMPONENTS = "c";
  var EVENTS = "e";
  var REPLY = "r";
  var TITLE = "t";
  var TEMPLATES = "p";
  var EntryUploader = class {
    constructor(entry, chunkSize, liveSocket2) {
      this.liveSocket = liveSocket2;
      this.entry = entry;
      this.offset = 0;
      this.chunkSize = chunkSize;
      this.chunkTimer = null;
      this.uploadChannel = liveSocket2.channel(`lvu:${entry.ref}`, { token: entry.metadata() });
    }
    error(reason) {
      clearTimeout(this.chunkTimer);
      this.uploadChannel.leave();
      this.entry.error(reason);
    }
    upload() {
      this.uploadChannel.onError((reason) => this.error(reason));
      this.uploadChannel.join().receive("ok", (_data) => this.readNextChunk()).receive("error", (reason) => this.error(reason));
    }
    isDone() {
      return this.offset >= this.entry.file.size;
    }
    readNextChunk() {
      let reader = new window.FileReader();
      let blob = this.entry.file.slice(this.offset, this.chunkSize + this.offset);
      reader.onload = (e) => {
        if (e.target.error === null) {
          this.offset += e.target.result.byteLength;
          this.pushChunk(e.target.result);
        } else {
          return logError("Read error: " + e.target.error);
        }
      };
      reader.readAsArrayBuffer(blob);
    }
    pushChunk(chunk) {
      if (!this.uploadChannel.isJoined()) {
        return;
      }
      this.uploadChannel.push("chunk", chunk).receive("ok", () => {
        this.entry.progress(this.offset / this.entry.file.size * 100);
        if (!this.isDone()) {
          this.chunkTimer = setTimeout(() => this.readNextChunk(), this.liveSocket.getLatencySim() || 0);
        }
      });
    }
  };
  var logError = (msg, obj) => console.error && console.error(msg, obj);
  var isCid = (cid) => {
    let type = typeof cid;
    return type === "number" || type === "string" && /^(0|[1-9]\d*)$/.test(cid);
  };
  function detectDuplicateIds() {
    let ids = /* @__PURE__ */ new Set();
    let elems = document.querySelectorAll("*[id]");
    for (let i = 0, len = elems.length; i < len; i++) {
      if (ids.has(elems[i].id)) {
        console.error(`Multiple IDs detected: ${elems[i].id}. Ensure unique element ids.`);
      } else {
        ids.add(elems[i].id);
      }
    }
  }
  var debug = (view, kind, msg, obj) => {
    if (view.liveSocket.isDebugEnabled()) {
      console.log(`${view.id} ${kind}: ${msg} - `, obj);
    }
  };
  var closure = (val) => typeof val === "function" ? val : function() {
    return val;
  };
  var clone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  };
  var closestPhxBinding = (el, binding, borderEl) => {
    do {
      if (el.matches(`[${binding}]`)) {
        return el;
      }
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1 && !(borderEl && borderEl.isSameNode(el) || el.matches(PHX_VIEW_SELECTOR)));
    return null;
  };
  var isObject = (obj) => {
    return obj !== null && typeof obj === "object" && !(obj instanceof Array);
  };
  var isEqualObj = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);
  var isEmpty = (obj) => {
    for (let x in obj) {
      return false;
    }
    return true;
  };
  var maybe = (el, callback) => el && callback(el);
  var channelUploader = function(entries, onError, resp, liveSocket2) {
    entries.forEach((entry) => {
      let entryUploader = new EntryUploader(entry, resp.config.chunk_size, liveSocket2);
      entryUploader.upload();
    });
  };
  var Browser = {
    canPushState() {
      return typeof history.pushState !== "undefined";
    },
    dropLocal(localStorage, namespace, subkey) {
      return localStorage.removeItem(this.localKey(namespace, subkey));
    },
    updateLocal(localStorage, namespace, subkey, initial, func) {
      let current = this.getLocal(localStorage, namespace, subkey);
      let key = this.localKey(namespace, subkey);
      let newVal = current === null ? initial : func(current);
      localStorage.setItem(key, JSON.stringify(newVal));
      return newVal;
    },
    getLocal(localStorage, namespace, subkey) {
      return JSON.parse(localStorage.getItem(this.localKey(namespace, subkey)));
    },
    updateCurrentState(callback) {
      if (!this.canPushState()) {
        return;
      }
      history.replaceState(callback(history.state || {}), "", window.location.href);
    },
    pushState(kind, meta, to) {
      if (this.canPushState()) {
        if (to !== window.location.href) {
          if (meta.type == "redirect" && meta.scroll) {
            let currentState = history.state || {};
            currentState.scroll = meta.scroll;
            history.replaceState(currentState, "", window.location.href);
          }
          delete meta.scroll;
          history[kind + "State"](meta, "", to || null);
          let hashEl = this.getHashTargetEl(window.location.hash);
          if (hashEl) {
            hashEl.scrollIntoView();
          } else if (meta.type === "redirect") {
            window.scroll(0, 0);
          }
        }
      } else {
        this.redirect(to);
      }
    },
    setCookie(name, value) {
      document.cookie = `${name}=${value}`;
    },
    getCookie(name) {
      return document.cookie.replace(new RegExp(`(?:(?:^|.*;s*)${name}s*=s*([^;]*).*$)|^.*$`), "$1");
    },
    redirect(toURL, flash) {
      if (flash) {
        Browser.setCookie("__phoenix_flash__", flash + "; max-age=60000; path=/");
      }
      window.location = toURL;
    },
    localKey(namespace, subkey) {
      return `${namespace}-${subkey}`;
    },
    getHashTargetEl(maybeHash) {
      let hash = maybeHash.toString().substring(1);
      if (hash === "") {
        return;
      }
      return document.getElementById(hash) || document.querySelector(`a[name="${hash}"]`);
    }
  };
  var browser_default = Browser;
  var DOM = {
    byId(id) {
      return document.getElementById(id) || logError(`no id found for ${id}`);
    },
    removeClass(el, className) {
      el.classList.remove(className);
      if (el.classList.length === 0) {
        el.removeAttribute("class");
      }
    },
    all(node, query, callback) {
      if (!node) {
        return [];
      }
      let array = Array.from(node.querySelectorAll(query));
      return callback ? array.forEach(callback) : array;
    },
    childNodeLength(html) {
      let template = document.createElement("template");
      template.innerHTML = html;
      return template.content.childElementCount;
    },
    isUploadInput(el) {
      return el.type === "file" && el.getAttribute(PHX_UPLOAD_REF) !== null;
    },
    findUploadInputs(node) {
      return this.all(node, `input[type="file"][${PHX_UPLOAD_REF}]`);
    },
    findComponentNodeList(node, cid) {
      return this.filterWithinSameLiveView(this.all(node, `[${PHX_COMPONENT}="${cid}"]`), node);
    },
    isPhxDestroyed(node) {
      return node.id && DOM.private(node, "destroyed") ? true : false;
    },
    markPhxChildDestroyed(el) {
      if (this.isPhxChild(el)) {
        el.setAttribute(PHX_SESSION, "");
      }
      this.putPrivate(el, "destroyed", true);
    },
    findPhxChildrenInFragment(html, parentId) {
      let template = document.createElement("template");
      template.innerHTML = html;
      return this.findPhxChildren(template.content, parentId);
    },
    isIgnored(el, phxUpdate) {
      return (el.getAttribute(phxUpdate) || el.getAttribute("data-phx-update")) === "ignore";
    },
    isPhxUpdate(el, phxUpdate, updateTypes) {
      return el.getAttribute && updateTypes.indexOf(el.getAttribute(phxUpdate)) >= 0;
    },
    findPhxSticky(el) {
      return this.all(el, `[${PHX_STICKY}]`);
    },
    findPhxChildren(el, parentId) {
      return this.all(el, `${PHX_VIEW_SELECTOR}[${PHX_PARENT_ID}="${parentId}"]`);
    },
    findParentCIDs(node, cids) {
      let initial = new Set(cids);
      return cids.reduce((acc, cid) => {
        let selector = `[${PHX_COMPONENT}="${cid}"] [${PHX_COMPONENT}]`;
        this.filterWithinSameLiveView(this.all(node, selector), node).map((el) => parseInt(el.getAttribute(PHX_COMPONENT))).forEach((childCID) => acc.delete(childCID));
        return acc;
      }, initial);
    },
    filterWithinSameLiveView(nodes, parent) {
      if (parent.querySelector(PHX_VIEW_SELECTOR)) {
        return nodes.filter((el) => this.withinSameLiveView(el, parent));
      } else {
        return nodes;
      }
    },
    withinSameLiveView(node, parent) {
      while (node = node.parentNode) {
        if (node.isSameNode(parent)) {
          return true;
        }
        if (node.getAttribute(PHX_SESSION) !== null) {
          return false;
        }
      }
    },
    private(el, key) {
      return el[PHX_PRIVATE] && el[PHX_PRIVATE][key];
    },
    deletePrivate(el, key) {
      el[PHX_PRIVATE] && delete el[PHX_PRIVATE][key];
    },
    putPrivate(el, key, value) {
      if (!el[PHX_PRIVATE]) {
        el[PHX_PRIVATE] = {};
      }
      el[PHX_PRIVATE][key] = value;
    },
    updatePrivate(el, key, defaultVal, updateFunc) {
      let existing = this.private(el, key);
      if (existing === void 0) {
        this.putPrivate(el, key, updateFunc(defaultVal));
      } else {
        this.putPrivate(el, key, updateFunc(existing));
      }
    },
    copyPrivates(target, source) {
      if (source[PHX_PRIVATE]) {
        target[PHX_PRIVATE] = source[PHX_PRIVATE];
      }
    },
    putTitle(str) {
      let titleEl = document.querySelector("title");
      let { prefix, suffix } = titleEl.dataset;
      document.title = `${prefix || ""}${str}${suffix || ""}`;
    },
    debounce(el, event, phxDebounce, defaultDebounce, phxThrottle, defaultThrottle, asyncFilter, callback) {
      let debounce = el.getAttribute(phxDebounce);
      let throttle = el.getAttribute(phxThrottle);
      if (debounce === "") {
        debounce = defaultDebounce;
      }
      if (throttle === "") {
        throttle = defaultThrottle;
      }
      let value = debounce || throttle;
      switch (value) {
        case null:
          return callback();
        case "blur":
          if (this.once(el, "debounce-blur")) {
            el.addEventListener("blur", () => callback());
          }
          return;
        default:
          let timeout = parseInt(value);
          let trigger = () => throttle ? this.deletePrivate(el, THROTTLED) : callback();
          let currentCycle = this.incCycle(el, DEBOUNCE_TRIGGER, trigger);
          if (isNaN(timeout)) {
            return logError(`invalid throttle/debounce value: ${value}`);
          }
          if (throttle) {
            let newKeyDown = false;
            if (event.type === "keydown") {
              let prevKey = this.private(el, DEBOUNCE_PREV_KEY);
              this.putPrivate(el, DEBOUNCE_PREV_KEY, event.key);
              newKeyDown = prevKey !== event.key;
            }
            if (!newKeyDown && this.private(el, THROTTLED)) {
              return false;
            } else {
              callback();
              this.putPrivate(el, THROTTLED, true);
              setTimeout(() => {
                if (asyncFilter()) {
                  this.triggerCycle(el, DEBOUNCE_TRIGGER);
                }
              }, timeout);
            }
          } else {
            setTimeout(() => {
              if (asyncFilter()) {
                this.triggerCycle(el, DEBOUNCE_TRIGGER, currentCycle);
              }
            }, timeout);
          }
          let form = el.form;
          if (form && this.once(form, "bind-debounce")) {
            form.addEventListener("submit", () => {
              Array.from(new FormData(form).entries(), ([name]) => {
                let input = form.querySelector(`[name="${name}"]`);
                this.incCycle(input, DEBOUNCE_TRIGGER);
                this.deletePrivate(input, THROTTLED);
              });
            });
          }
          if (this.once(el, "bind-debounce")) {
            el.addEventListener("blur", () => this.triggerCycle(el, DEBOUNCE_TRIGGER));
          }
      }
    },
    triggerCycle(el, key, currentCycle) {
      let [cycle, trigger] = this.private(el, key);
      if (!currentCycle) {
        currentCycle = cycle;
      }
      if (currentCycle === cycle) {
        this.incCycle(el, key);
        trigger();
      }
    },
    once(el, key) {
      if (this.private(el, key) === true) {
        return false;
      }
      this.putPrivate(el, key, true);
      return true;
    },
    incCycle(el, key, trigger = function() {
    }) {
      let [currentCycle] = this.private(el, key) || [0, trigger];
      currentCycle++;
      this.putPrivate(el, key, [currentCycle, trigger]);
      return currentCycle;
    },
    discardError(container, el, phxFeedbackFor) {
      let field = el.getAttribute && el.getAttribute(phxFeedbackFor);
      let input = field && container.querySelector(`[id="${field}"], [name="${field}"]`);
      if (!input) {
        return;
      }
      if (!(this.private(input, PHX_HAS_FOCUSED) || this.private(input.form, PHX_HAS_SUBMITTED))) {
        el.classList.add(PHX_NO_FEEDBACK_CLASS);
      }
    },
    showError(inputEl, phxFeedbackFor) {
      if (inputEl.id || inputEl.name) {
        this.all(inputEl.form, `[${phxFeedbackFor}="${inputEl.id}"], [${phxFeedbackFor}="${inputEl.name}"]`, (el) => {
          this.removeClass(el, PHX_NO_FEEDBACK_CLASS);
        });
      }
    },
    isPhxChild(node) {
      return node.getAttribute && node.getAttribute(PHX_PARENT_ID);
    },
    isPhxSticky(node) {
      return node.getAttribute && node.getAttribute(PHX_STICKY) !== null;
    },
    firstPhxChild(el) {
      return this.isPhxChild(el) ? el : this.all(el, `[${PHX_PARENT_ID}]`)[0];
    },
    dispatchEvent(target, name, opts = {}) {
      let bubbles = opts.bubbles === void 0 ? true : !!opts.bubbles;
      let eventOpts = { bubbles, cancelable: true, detail: opts.detail || {} };
      let event = name === "click" ? new MouseEvent("click", eventOpts) : new CustomEvent(name, eventOpts);
      target.dispatchEvent(event);
    },
    cloneNode(node, html) {
      if (typeof html === "undefined") {
        return node.cloneNode(true);
      } else {
        let cloned = node.cloneNode(false);
        cloned.innerHTML = html;
        return cloned;
      }
    },
    mergeAttrs(target, source, opts = {}) {
      let exclude = opts.exclude || [];
      let isIgnored = opts.isIgnored;
      let sourceAttrs = source.attributes;
      for (let i = sourceAttrs.length - 1; i >= 0; i--) {
        let name = sourceAttrs[i].name;
        if (exclude.indexOf(name) < 0) {
          target.setAttribute(name, source.getAttribute(name));
        }
      }
      let targetAttrs = target.attributes;
      for (let i = targetAttrs.length - 1; i >= 0; i--) {
        let name = targetAttrs[i].name;
        if (isIgnored) {
          if (name.startsWith("data-") && !source.hasAttribute(name)) {
            target.removeAttribute(name);
          }
        } else {
          if (!source.hasAttribute(name)) {
            target.removeAttribute(name);
          }
        }
      }
    },
    mergeFocusedInput(target, source) {
      if (!(target instanceof HTMLSelectElement)) {
        DOM.mergeAttrs(target, source, { exclude: ["value"] });
      }
      if (source.readOnly) {
        target.setAttribute("readonly", true);
      } else {
        target.removeAttribute("readonly");
      }
    },
    hasSelectionRange(el) {
      return el.setSelectionRange && (el.type === "text" || el.type === "textarea");
    },
    restoreFocus(focused, selectionStart, selectionEnd) {
      if (!DOM.isTextualInput(focused)) {
        return;
      }
      let wasFocused = focused.matches(":focus");
      if (focused.readOnly) {
        focused.blur();
      }
      if (!wasFocused) {
        focused.focus();
      }
      if (this.hasSelectionRange(focused)) {
        focused.setSelectionRange(selectionStart, selectionEnd);
      }
    },
    isFormInput(el) {
      return /^(?:input|select|textarea)$/i.test(el.tagName) && el.type !== "button";
    },
    syncAttrsToProps(el) {
      if (el instanceof HTMLInputElement && CHECKABLE_INPUTS.indexOf(el.type.toLocaleLowerCase()) >= 0) {
        el.checked = el.getAttribute("checked") !== null;
      }
    },
    isTextualInput(el) {
      return FOCUSABLE_INPUTS.indexOf(el.type) >= 0;
    },
    isNowTriggerFormExternal(el, phxTriggerExternal) {
      return el.getAttribute && el.getAttribute(phxTriggerExternal) !== null;
    },
    syncPendingRef(fromEl, toEl, disableWith) {
      let ref = fromEl.getAttribute(PHX_REF);
      if (ref === null) {
        return true;
      }
      let refSrc = fromEl.getAttribute(PHX_REF_SRC);
      if (DOM.isFormInput(fromEl) || fromEl.getAttribute(disableWith) !== null) {
        if (DOM.isUploadInput(fromEl)) {
          DOM.mergeAttrs(fromEl, toEl, { isIgnored: true });
        }
        DOM.putPrivate(fromEl, PHX_REF, toEl);
        return false;
      } else {
        PHX_EVENT_CLASSES.forEach((className) => {
          fromEl.classList.contains(className) && toEl.classList.add(className);
        });
        toEl.setAttribute(PHX_REF, ref);
        toEl.setAttribute(PHX_REF_SRC, refSrc);
        return true;
      }
    },
    cleanChildNodes(container, phxUpdate) {
      if (DOM.isPhxUpdate(container, phxUpdate, ["append", "prepend"])) {
        let toRemove = [];
        container.childNodes.forEach((childNode) => {
          if (!childNode.id) {
            let isEmptyTextNode = childNode.nodeType === Node.TEXT_NODE && childNode.nodeValue.trim() === "";
            if (!isEmptyTextNode) {
              logError(`only HTML element tags with an id are allowed inside containers with phx-update.

removing illegal node: "${(childNode.outerHTML || childNode.nodeValue).trim()}"

`);
            }
            toRemove.push(childNode);
          }
        });
        toRemove.forEach((childNode) => childNode.remove());
      }
    },
    replaceRootContainer(container, tagName, attrs) {
      let retainedAttrs = /* @__PURE__ */ new Set(["id", PHX_SESSION, PHX_STATIC, PHX_MAIN, PHX_ROOT_ID]);
      if (container.tagName.toLowerCase() === tagName.toLowerCase()) {
        Array.from(container.attributes).filter((attr) => !retainedAttrs.has(attr.name.toLowerCase())).forEach((attr) => container.removeAttribute(attr.name));
        Object.keys(attrs).filter((name) => !retainedAttrs.has(name.toLowerCase())).forEach((attr) => container.setAttribute(attr, attrs[attr]));
        return container;
      } else {
        let newContainer = document.createElement(tagName);
        Object.keys(attrs).forEach((attr) => newContainer.setAttribute(attr, attrs[attr]));
        retainedAttrs.forEach((attr) => newContainer.setAttribute(attr, container.getAttribute(attr)));
        newContainer.innerHTML = container.innerHTML;
        container.replaceWith(newContainer);
        return newContainer;
      }
    },
    getSticky(el, name, defaultVal) {
      let op = (DOM.private(el, "sticky") || []).find(([existingName]) => name === existingName);
      if (op) {
        let [_name, _op, stashedResult] = op;
        return stashedResult;
      } else {
        return typeof defaultVal === "function" ? defaultVal() : defaultVal;
      }
    },
    deleteSticky(el, name) {
      this.updatePrivate(el, "sticky", [], (ops) => {
        return ops.filter(([existingName, _]) => existingName !== name);
      });
    },
    putSticky(el, name, op) {
      let stashedResult = op(el);
      this.updatePrivate(el, "sticky", [], (ops) => {
        let existingIndex = ops.findIndex(([existingName]) => name === existingName);
        if (existingIndex >= 0) {
          ops[existingIndex] = [name, op, stashedResult];
        } else {
          ops.push([name, op, stashedResult]);
        }
        return ops;
      });
    },
    applyStickyOperations(el) {
      let ops = DOM.private(el, "sticky");
      if (!ops) {
        return;
      }
      ops.forEach(([name, op, _stashed]) => this.putSticky(el, name, op));
    }
  };
  var dom_default = DOM;
  var UploadEntry = class {
    static isActive(fileEl, file) {
      let isNew = file._phxRef === void 0;
      let activeRefs = fileEl.getAttribute(PHX_ACTIVE_ENTRY_REFS).split(",");
      let isActive = activeRefs.indexOf(LiveUploader.genFileRef(file)) >= 0;
      return file.size > 0 && (isNew || isActive);
    }
    static isPreflighted(fileEl, file) {
      let preflightedRefs = fileEl.getAttribute(PHX_PREFLIGHTED_REFS).split(",");
      let isPreflighted = preflightedRefs.indexOf(LiveUploader.genFileRef(file)) >= 0;
      return isPreflighted && this.isActive(fileEl, file);
    }
    constructor(fileEl, file, view) {
      this.ref = LiveUploader.genFileRef(file);
      this.fileEl = fileEl;
      this.file = file;
      this.view = view;
      this.meta = null;
      this._isCancelled = false;
      this._isDone = false;
      this._progress = 0;
      this._lastProgressSent = -1;
      this._onDone = function() {
      };
      this._onElUpdated = this.onElUpdated.bind(this);
      this.fileEl.addEventListener(PHX_LIVE_FILE_UPDATED, this._onElUpdated);
    }
    metadata() {
      return this.meta;
    }
    progress(progress) {
      this._progress = Math.floor(progress);
      if (this._progress > this._lastProgressSent) {
        if (this._progress >= 100) {
          this._progress = 100;
          this._lastProgressSent = 100;
          this._isDone = true;
          this.view.pushFileProgress(this.fileEl, this.ref, 100, () => {
            LiveUploader.untrackFile(this.fileEl, this.file);
            this._onDone();
          });
        } else {
          this._lastProgressSent = this._progress;
          this.view.pushFileProgress(this.fileEl, this.ref, this._progress);
        }
      }
    }
    cancel() {
      this._isCancelled = true;
      this._isDone = true;
      this._onDone();
    }
    isDone() {
      return this._isDone;
    }
    error(reason = "failed") {
      this.view.pushFileProgress(this.fileEl, this.ref, { error: reason });
      LiveUploader.clearFiles(this.fileEl);
    }
    onDone(callback) {
      this._onDone = () => {
        this.fileEl.removeEventListener(PHX_LIVE_FILE_UPDATED, this._onElUpdated);
        callback();
      };
    }
    onElUpdated() {
      let activeRefs = this.fileEl.getAttribute(PHX_ACTIVE_ENTRY_REFS).split(",");
      if (activeRefs.indexOf(this.ref) === -1) {
        this.cancel();
      }
    }
    toPreflightPayload() {
      return {
        last_modified: this.file.lastModified,
        name: this.file.name,
        size: this.file.size,
        type: this.file.type,
        ref: this.ref
      };
    }
    uploader(uploaders) {
      if (this.meta.uploader) {
        let callback = uploaders[this.meta.uploader] || logError(`no uploader configured for ${this.meta.uploader}`);
        return { name: this.meta.uploader, callback };
      } else {
        return { name: "channel", callback: channelUploader };
      }
    }
    zipPostFlight(resp) {
      this.meta = resp.entries[this.ref];
      if (!this.meta) {
        logError(`no preflight upload response returned with ref ${this.ref}`, { input: this.fileEl, response: resp });
      }
    }
  };
  var liveUploaderFileRef = 0;
  var LiveUploader = class {
    static genFileRef(file) {
      let ref = file._phxRef;
      if (ref !== void 0) {
        return ref;
      } else {
        file._phxRef = (liveUploaderFileRef++).toString();
        return file._phxRef;
      }
    }
    static getEntryDataURL(inputEl, ref, callback) {
      let file = this.activeFiles(inputEl).find((file2) => this.genFileRef(file2) === ref);
      callback(URL.createObjectURL(file));
    }
    static hasUploadsInProgress(formEl) {
      let active = 0;
      dom_default.findUploadInputs(formEl).forEach((input) => {
        if (input.getAttribute(PHX_PREFLIGHTED_REFS) !== input.getAttribute(PHX_DONE_REFS)) {
          active++;
        }
      });
      return active > 0;
    }
    static serializeUploads(inputEl) {
      let files = this.activeFiles(inputEl);
      let fileData = {};
      files.forEach((file) => {
        let entry = { path: inputEl.name };
        let uploadRef = inputEl.getAttribute(PHX_UPLOAD_REF);
        fileData[uploadRef] = fileData[uploadRef] || [];
        entry.ref = this.genFileRef(file);
        entry.name = file.name || entry.ref;
        entry.type = file.type;
        entry.size = file.size;
        fileData[uploadRef].push(entry);
      });
      return fileData;
    }
    static clearFiles(inputEl) {
      inputEl.value = null;
      inputEl.removeAttribute(PHX_UPLOAD_REF);
      dom_default.putPrivate(inputEl, "files", []);
    }
    static untrackFile(inputEl, file) {
      dom_default.putPrivate(inputEl, "files", dom_default.private(inputEl, "files").filter((f) => !Object.is(f, file)));
    }
    static trackFiles(inputEl, files) {
      if (inputEl.getAttribute("multiple") !== null) {
        let newFiles = files.filter((file) => !this.activeFiles(inputEl).find((f) => Object.is(f, file)));
        dom_default.putPrivate(inputEl, "files", this.activeFiles(inputEl).concat(newFiles));
        inputEl.value = null;
      } else {
        dom_default.putPrivate(inputEl, "files", files);
      }
    }
    static activeFileInputs(formEl) {
      let fileInputs = dom_default.findUploadInputs(formEl);
      return Array.from(fileInputs).filter((el) => el.files && this.activeFiles(el).length > 0);
    }
    static activeFiles(input) {
      return (dom_default.private(input, "files") || []).filter((f) => UploadEntry.isActive(input, f));
    }
    static inputsAwaitingPreflight(formEl) {
      let fileInputs = dom_default.findUploadInputs(formEl);
      return Array.from(fileInputs).filter((input) => this.filesAwaitingPreflight(input).length > 0);
    }
    static filesAwaitingPreflight(input) {
      return this.activeFiles(input).filter((f) => !UploadEntry.isPreflighted(input, f));
    }
    constructor(inputEl, view, onComplete) {
      this.view = view;
      this.onComplete = onComplete;
      this._entries = Array.from(LiveUploader.filesAwaitingPreflight(inputEl) || []).map((file) => new UploadEntry(inputEl, file, view));
      this.numEntriesInProgress = this._entries.length;
    }
    entries() {
      return this._entries;
    }
    initAdapterUpload(resp, onError, liveSocket2) {
      this._entries = this._entries.map((entry) => {
        entry.zipPostFlight(resp);
        entry.onDone(() => {
          this.numEntriesInProgress--;
          if (this.numEntriesInProgress === 0) {
            this.onComplete();
          }
        });
        return entry;
      });
      let groupedEntries = this._entries.reduce((acc, entry) => {
        let { name, callback } = entry.uploader(liveSocket2.uploaders);
        acc[name] = acc[name] || { callback, entries: [] };
        acc[name].entries.push(entry);
        return acc;
      }, {});
      for (let name in groupedEntries) {
        let { callback, entries } = groupedEntries[name];
        callback(entries, onError, resp, liveSocket2);
      }
    }
  };
  var Hooks = {
    LiveFileUpload: {
      activeRefs() {
        return this.el.getAttribute(PHX_ACTIVE_ENTRY_REFS);
      },
      preflightedRefs() {
        return this.el.getAttribute(PHX_PREFLIGHTED_REFS);
      },
      mounted() {
        this.preflightedWas = this.preflightedRefs();
      },
      updated() {
        let newPreflights = this.preflightedRefs();
        if (this.preflightedWas !== newPreflights) {
          this.preflightedWas = newPreflights;
          if (newPreflights === "") {
            this.__view.cancelSubmit(this.el.form);
          }
        }
        if (this.activeRefs() === "") {
          this.el.value = null;
        }
        this.el.dispatchEvent(new CustomEvent(PHX_LIVE_FILE_UPDATED));
      }
    },
    LiveImgPreview: {
      mounted() {
        this.ref = this.el.getAttribute("data-phx-entry-ref");
        this.inputEl = document.getElementById(this.el.getAttribute(PHX_UPLOAD_REF));
        LiveUploader.getEntryDataURL(this.inputEl, this.ref, (url) => {
          this.url = url;
          this.el.src = url;
        });
      },
      destroyed() {
        URL.revokeObjectURL(this.url);
      }
    }
  };
  var hooks_default = Hooks;
  var DOMPostMorphRestorer = class {
    constructor(containerBefore, containerAfter, updateType) {
      let idsBefore = /* @__PURE__ */ new Set();
      let idsAfter = new Set([...containerAfter.children].map((child) => child.id));
      let elementsToModify = [];
      Array.from(containerBefore.children).forEach((child) => {
        if (child.id) {
          idsBefore.add(child.id);
          if (idsAfter.has(child.id)) {
            let previousElementId = child.previousElementSibling && child.previousElementSibling.id;
            elementsToModify.push({ elementId: child.id, previousElementId });
          }
        }
      });
      this.containerId = containerAfter.id;
      this.updateType = updateType;
      this.elementsToModify = elementsToModify;
      this.elementIdsToAdd = [...idsAfter].filter((id) => !idsBefore.has(id));
    }
    perform() {
      let container = dom_default.byId(this.containerId);
      this.elementsToModify.forEach((elementToModify) => {
        if (elementToModify.previousElementId) {
          maybe(document.getElementById(elementToModify.previousElementId), (previousElem) => {
            maybe(document.getElementById(elementToModify.elementId), (elem) => {
              let isInRightPlace = elem.previousElementSibling && elem.previousElementSibling.id == previousElem.id;
              if (!isInRightPlace) {
                previousElem.insertAdjacentElement("afterend", elem);
              }
            });
          });
        } else {
          maybe(document.getElementById(elementToModify.elementId), (elem) => {
            let isInRightPlace = elem.previousElementSibling == null;
            if (!isInRightPlace) {
              container.insertAdjacentElement("afterbegin", elem);
            }
          });
        }
      });
      if (this.updateType == "prepend") {
        this.elementIdsToAdd.reverse().forEach((elemId) => {
          maybe(document.getElementById(elemId), (elem) => container.insertAdjacentElement("afterbegin", elem));
        });
      }
    }
  };
  var DOCUMENT_FRAGMENT_NODE = 11;
  function morphAttrs(fromNode, toNode) {
    var toNodeAttrs = toNode.attributes;
    var attr;
    var attrName;
    var attrNamespaceURI;
    var attrValue;
    var fromValue;
    if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE || fromNode.nodeType === DOCUMENT_FRAGMENT_NODE) {
      return;
    }
    for (var i = toNodeAttrs.length - 1; i >= 0; i--) {
      attr = toNodeAttrs[i];
      attrName = attr.name;
      attrNamespaceURI = attr.namespaceURI;
      attrValue = attr.value;
      if (attrNamespaceURI) {
        attrName = attr.localName || attrName;
        fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);
        if (fromValue !== attrValue) {
          if (attr.prefix === "xmlns") {
            attrName = attr.name;
          }
          fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
        }
      } else {
        fromValue = fromNode.getAttribute(attrName);
        if (fromValue !== attrValue) {
          fromNode.setAttribute(attrName, attrValue);
        }
      }
    }
    var fromNodeAttrs = fromNode.attributes;
    for (var d = fromNodeAttrs.length - 1; d >= 0; d--) {
      attr = fromNodeAttrs[d];
      attrName = attr.name;
      attrNamespaceURI = attr.namespaceURI;
      if (attrNamespaceURI) {
        attrName = attr.localName || attrName;
        if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
          fromNode.removeAttributeNS(attrNamespaceURI, attrName);
        }
      } else {
        if (!toNode.hasAttribute(attrName)) {
          fromNode.removeAttribute(attrName);
        }
      }
    }
  }
  var range;
  var NS_XHTML = "http://www.w3.org/1999/xhtml";
  var doc = typeof document === "undefined" ? void 0 : document;
  var HAS_TEMPLATE_SUPPORT = !!doc && "content" in doc.createElement("template");
  var HAS_RANGE_SUPPORT = !!doc && doc.createRange && "createContextualFragment" in doc.createRange();
  function createFragmentFromTemplate(str) {
    var template = doc.createElement("template");
    template.innerHTML = str;
    return template.content.childNodes[0];
  }
  function createFragmentFromRange(str) {
    if (!range) {
      range = doc.createRange();
      range.selectNode(doc.body);
    }
    var fragment = range.createContextualFragment(str);
    return fragment.childNodes[0];
  }
  function createFragmentFromWrap(str) {
    var fragment = doc.createElement("body");
    fragment.innerHTML = str;
    return fragment.childNodes[0];
  }
  function toElement(str) {
    str = str.trim();
    if (HAS_TEMPLATE_SUPPORT) {
      return createFragmentFromTemplate(str);
    } else if (HAS_RANGE_SUPPORT) {
      return createFragmentFromRange(str);
    }
    return createFragmentFromWrap(str);
  }
  function compareNodeNames(fromEl, toEl) {
    var fromNodeName = fromEl.nodeName;
    var toNodeName = toEl.nodeName;
    var fromCodeStart, toCodeStart;
    if (fromNodeName === toNodeName) {
      return true;
    }
    fromCodeStart = fromNodeName.charCodeAt(0);
    toCodeStart = toNodeName.charCodeAt(0);
    if (fromCodeStart <= 90 && toCodeStart >= 97) {
      return fromNodeName === toNodeName.toUpperCase();
    } else if (toCodeStart <= 90 && fromCodeStart >= 97) {
      return toNodeName === fromNodeName.toUpperCase();
    } else {
      return false;
    }
  }
  function createElementNS(name, namespaceURI) {
    return !namespaceURI || namespaceURI === NS_XHTML ? doc.createElement(name) : doc.createElementNS(namespaceURI, name);
  }
  function moveChildren(fromEl, toEl) {
    var curChild = fromEl.firstChild;
    while (curChild) {
      var nextChild = curChild.nextSibling;
      toEl.appendChild(curChild);
      curChild = nextChild;
    }
    return toEl;
  }
  function syncBooleanAttrProp(fromEl, toEl, name) {
    if (fromEl[name] !== toEl[name]) {
      fromEl[name] = toEl[name];
      if (fromEl[name]) {
        fromEl.setAttribute(name, "");
      } else {
        fromEl.removeAttribute(name);
      }
    }
  }
  var specialElHandlers = {
    OPTION: function(fromEl, toEl) {
      var parentNode = fromEl.parentNode;
      if (parentNode) {
        var parentName = parentNode.nodeName.toUpperCase();
        if (parentName === "OPTGROUP") {
          parentNode = parentNode.parentNode;
          parentName = parentNode && parentNode.nodeName.toUpperCase();
        }
        if (parentName === "SELECT" && !parentNode.hasAttribute("multiple")) {
          if (fromEl.hasAttribute("selected") && !toEl.selected) {
            fromEl.setAttribute("selected", "selected");
            fromEl.removeAttribute("selected");
          }
          parentNode.selectedIndex = -1;
        }
      }
      syncBooleanAttrProp(fromEl, toEl, "selected");
    },
    INPUT: function(fromEl, toEl) {
      syncBooleanAttrProp(fromEl, toEl, "checked");
      syncBooleanAttrProp(fromEl, toEl, "disabled");
      if (fromEl.value !== toEl.value) {
        fromEl.value = toEl.value;
      }
      if (!toEl.hasAttribute("value")) {
        fromEl.removeAttribute("value");
      }
    },
    TEXTAREA: function(fromEl, toEl) {
      var newValue = toEl.value;
      if (fromEl.value !== newValue) {
        fromEl.value = newValue;
      }
      var firstChild = fromEl.firstChild;
      if (firstChild) {
        var oldValue = firstChild.nodeValue;
        if (oldValue == newValue || !newValue && oldValue == fromEl.placeholder) {
          return;
        }
        firstChild.nodeValue = newValue;
      }
    },
    SELECT: function(fromEl, toEl) {
      if (!toEl.hasAttribute("multiple")) {
        var selectedIndex = -1;
        var i = 0;
        var curChild = fromEl.firstChild;
        var optgroup;
        var nodeName;
        while (curChild) {
          nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();
          if (nodeName === "OPTGROUP") {
            optgroup = curChild;
            curChild = optgroup.firstChild;
          } else {
            if (nodeName === "OPTION") {
              if (curChild.hasAttribute("selected")) {
                selectedIndex = i;
                break;
              }
              i++;
            }
            curChild = curChild.nextSibling;
            if (!curChild && optgroup) {
              curChild = optgroup.nextSibling;
              optgroup = null;
            }
          }
        }
        fromEl.selectedIndex = selectedIndex;
      }
    }
  };
  var ELEMENT_NODE = 1;
  var DOCUMENT_FRAGMENT_NODE$1 = 11;
  var TEXT_NODE = 3;
  var COMMENT_NODE = 8;
  function noop() {
  }
  function defaultGetNodeKey(node) {
    if (node) {
      return node.getAttribute && node.getAttribute("id") || node.id;
    }
  }
  function morphdomFactory(morphAttrs2) {
    return function morphdom2(fromNode, toNode, options) {
      if (!options) {
        options = {};
      }
      if (typeof toNode === "string") {
        if (fromNode.nodeName === "#document" || fromNode.nodeName === "HTML" || fromNode.nodeName === "BODY") {
          var toNodeHtml = toNode;
          toNode = doc.createElement("html");
          toNode.innerHTML = toNodeHtml;
        } else {
          toNode = toElement(toNode);
        }
      }
      var getNodeKey = options.getNodeKey || defaultGetNodeKey;
      var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
      var onNodeAdded = options.onNodeAdded || noop;
      var onBeforeElUpdated = options.onBeforeElUpdated || noop;
      var onElUpdated = options.onElUpdated || noop;
      var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
      var onNodeDiscarded = options.onNodeDiscarded || noop;
      var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
      var childrenOnly = options.childrenOnly === true;
      var fromNodesLookup = /* @__PURE__ */ Object.create(null);
      var keyedRemovalList = [];
      function addKeyedRemoval(key) {
        keyedRemovalList.push(key);
      }
      function walkDiscardedChildNodes(node, skipKeyedNodes) {
        if (node.nodeType === ELEMENT_NODE) {
          var curChild = node.firstChild;
          while (curChild) {
            var key = void 0;
            if (skipKeyedNodes && (key = getNodeKey(curChild))) {
              addKeyedRemoval(key);
            } else {
              onNodeDiscarded(curChild);
              if (curChild.firstChild) {
                walkDiscardedChildNodes(curChild, skipKeyedNodes);
              }
            }
            curChild = curChild.nextSibling;
          }
        }
      }
      function removeNode(node, parentNode, skipKeyedNodes) {
        if (onBeforeNodeDiscarded(node) === false) {
          return;
        }
        if (parentNode) {
          parentNode.removeChild(node);
        }
        onNodeDiscarded(node);
        walkDiscardedChildNodes(node, skipKeyedNodes);
      }
      function indexTree(node) {
        if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
          var curChild = node.firstChild;
          while (curChild) {
            var key = getNodeKey(curChild);
            if (key) {
              fromNodesLookup[key] = curChild;
            }
            indexTree(curChild);
            curChild = curChild.nextSibling;
          }
        }
      }
      indexTree(fromNode);
      function handleNodeAdded(el) {
        onNodeAdded(el);
        var curChild = el.firstChild;
        while (curChild) {
          var nextSibling = curChild.nextSibling;
          var key = getNodeKey(curChild);
          if (key) {
            var unmatchedFromEl = fromNodesLookup[key];
            if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
              curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
              morphEl(unmatchedFromEl, curChild);
            } else {
              handleNodeAdded(curChild);
            }
          } else {
            handleNodeAdded(curChild);
          }
          curChild = nextSibling;
        }
      }
      function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
        while (curFromNodeChild) {
          var fromNextSibling = curFromNodeChild.nextSibling;
          if (curFromNodeKey = getNodeKey(curFromNodeChild)) {
            addKeyedRemoval(curFromNodeKey);
          } else {
            removeNode(curFromNodeChild, fromEl, true);
          }
          curFromNodeChild = fromNextSibling;
        }
      }
      function morphEl(fromEl, toEl, childrenOnly2) {
        var toElKey = getNodeKey(toEl);
        if (toElKey) {
          delete fromNodesLookup[toElKey];
        }
        if (!childrenOnly2) {
          if (onBeforeElUpdated(fromEl, toEl) === false) {
            return;
          }
          morphAttrs2(fromEl, toEl);
          onElUpdated(fromEl);
          if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
            return;
          }
        }
        if (fromEl.nodeName !== "TEXTAREA") {
          morphChildren(fromEl, toEl);
        } else {
          specialElHandlers.TEXTAREA(fromEl, toEl);
        }
      }
      function morphChildren(fromEl, toEl) {
        var curToNodeChild = toEl.firstChild;
        var curFromNodeChild = fromEl.firstChild;
        var curToNodeKey;
        var curFromNodeKey;
        var fromNextSibling;
        var toNextSibling;
        var matchingFromEl;
        outer:
          while (curToNodeChild) {
            toNextSibling = curToNodeChild.nextSibling;
            curToNodeKey = getNodeKey(curToNodeChild);
            while (curFromNodeChild) {
              fromNextSibling = curFromNodeChild.nextSibling;
              if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
                curToNodeChild = toNextSibling;
                curFromNodeChild = fromNextSibling;
                continue outer;
              }
              curFromNodeKey = getNodeKey(curFromNodeChild);
              var curFromNodeType = curFromNodeChild.nodeType;
              var isCompatible = void 0;
              if (curFromNodeType === curToNodeChild.nodeType) {
                if (curFromNodeType === ELEMENT_NODE) {
                  if (curToNodeKey) {
                    if (curToNodeKey !== curFromNodeKey) {
                      if (matchingFromEl = fromNodesLookup[curToNodeKey]) {
                        if (fromNextSibling === matchingFromEl) {
                          isCompatible = false;
                        } else {
                          fromEl.insertBefore(matchingFromEl, curFromNodeChild);
                          if (curFromNodeKey) {
                            addKeyedRemoval(curFromNodeKey);
                          } else {
                            removeNode(curFromNodeChild, fromEl, true);
                          }
                          curFromNodeChild = matchingFromEl;
                        }
                      } else {
                        isCompatible = false;
                      }
                    }
                  } else if (curFromNodeKey) {
                    isCompatible = false;
                  }
                  isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
                  if (isCompatible) {
                    morphEl(curFromNodeChild, curToNodeChild);
                  }
                } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
                  isCompatible = true;
                  if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                    curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                  }
                }
              }
              if (isCompatible) {
                curToNodeChild = toNextSibling;
                curFromNodeChild = fromNextSibling;
                continue outer;
              }
              if (curFromNodeKey) {
                addKeyedRemoval(curFromNodeKey);
              } else {
                removeNode(curFromNodeChild, fromEl, true);
              }
              curFromNodeChild = fromNextSibling;
            }
            if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
              fromEl.appendChild(matchingFromEl);
              morphEl(matchingFromEl, curToNodeChild);
            } else {
              var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
              if (onBeforeNodeAddedResult !== false) {
                if (onBeforeNodeAddedResult) {
                  curToNodeChild = onBeforeNodeAddedResult;
                }
                if (curToNodeChild.actualize) {
                  curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
                }
                fromEl.appendChild(curToNodeChild);
                handleNodeAdded(curToNodeChild);
              }
            }
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
          }
        cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);
        var specialElHandler = specialElHandlers[fromEl.nodeName];
        if (specialElHandler) {
          specialElHandler(fromEl, toEl);
        }
      }
      var morphedNode = fromNode;
      var morphedNodeType = morphedNode.nodeType;
      var toNodeType = toNode.nodeType;
      if (!childrenOnly) {
        if (morphedNodeType === ELEMENT_NODE) {
          if (toNodeType === ELEMENT_NODE) {
            if (!compareNodeNames(fromNode, toNode)) {
              onNodeDiscarded(fromNode);
              morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
            }
          } else {
            morphedNode = toNode;
          }
        } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
          if (toNodeType === morphedNodeType) {
            if (morphedNode.nodeValue !== toNode.nodeValue) {
              morphedNode.nodeValue = toNode.nodeValue;
            }
            return morphedNode;
          } else {
            morphedNode = toNode;
          }
        }
      }
      if (morphedNode === toNode) {
        onNodeDiscarded(fromNode);
      } else {
        if (toNode.isSameNode && toNode.isSameNode(morphedNode)) {
          return;
        }
        morphEl(morphedNode, toNode, childrenOnly);
        if (keyedRemovalList) {
          for (var i = 0, len = keyedRemovalList.length; i < len; i++) {
            var elToRemove = fromNodesLookup[keyedRemovalList[i]];
            if (elToRemove) {
              removeNode(elToRemove, elToRemove.parentNode, false);
            }
          }
        }
      }
      if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
        if (morphedNode.actualize) {
          morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
        }
        fromNode.parentNode.replaceChild(morphedNode, fromNode);
      }
      return morphedNode;
    };
  }
  var morphdom = morphdomFactory(morphAttrs);
  var morphdom_esm_default = morphdom;
  var DOMPatch = class {
    static patchEl(fromEl, toEl, activeElement) {
      morphdom_esm_default(fromEl, toEl, {
        childrenOnly: false,
        onBeforeElUpdated: (fromEl2, toEl2) => {
          if (activeElement && activeElement.isSameNode(fromEl2) && dom_default.isFormInput(fromEl2)) {
            dom_default.mergeFocusedInput(fromEl2, toEl2);
            return false;
          }
        }
      });
    }
    constructor(view, container, id, html, targetCID) {
      this.view = view;
      this.liveSocket = view.liveSocket;
      this.container = container;
      this.id = id;
      this.rootID = view.root.id;
      this.html = html;
      this.targetCID = targetCID;
      this.cidPatch = isCid(this.targetCID);
      this.callbacks = {
        beforeadded: [],
        beforeupdated: [],
        beforephxChildAdded: [],
        afteradded: [],
        afterupdated: [],
        afterdiscarded: [],
        afterphxChildAdded: [],
        aftertransitionsDiscarded: []
      };
    }
    before(kind, callback) {
      this.callbacks[`before${kind}`].push(callback);
    }
    after(kind, callback) {
      this.callbacks[`after${kind}`].push(callback);
    }
    trackBefore(kind, ...args) {
      this.callbacks[`before${kind}`].forEach((callback) => callback(...args));
    }
    trackAfter(kind, ...args) {
      this.callbacks[`after${kind}`].forEach((callback) => callback(...args));
    }
    markPrunableContentForRemoval() {
      dom_default.all(this.container, "[phx-update=append] > *, [phx-update=prepend] > *", (el) => {
        el.setAttribute(PHX_PRUNE, "");
      });
    }
    perform() {
      let { view, liveSocket: liveSocket2, container, html } = this;
      let targetContainer = this.isCIDPatch() ? this.targetCIDContainer(html) : container;
      if (this.isCIDPatch() && !targetContainer) {
        return;
      }
      let focused = liveSocket2.getActiveElement();
      let { selectionStart, selectionEnd } = focused && dom_default.hasSelectionRange(focused) ? focused : {};
      let phxUpdate = liveSocket2.binding(PHX_UPDATE);
      let phxFeedbackFor = liveSocket2.binding(PHX_FEEDBACK_FOR);
      let disableWith = liveSocket2.binding(PHX_DISABLE_WITH);
      let phxTriggerExternal = liveSocket2.binding(PHX_TRIGGER_ACTION);
      let phxRemove = liveSocket2.binding("remove");
      let added = [];
      let updates = [];
      let appendPrependUpdates = [];
      let pendingRemoves = [];
      let externalFormTriggered = null;
      let diffHTML = liveSocket2.time("premorph container prep", () => {
        return this.buildDiffHTML(container, html, phxUpdate, targetContainer);
      });
      this.trackBefore("added", container);
      this.trackBefore("updated", container, container);
      liveSocket2.time("morphdom", () => {
        morphdom_esm_default(targetContainer, diffHTML, {
          childrenOnly: targetContainer.getAttribute(PHX_COMPONENT) === null,
          getNodeKey: (node) => {
            return dom_default.isPhxDestroyed(node) ? null : node.id;
          },
          onBeforeNodeAdded: (el) => {
            this.trackBefore("added", el);
            return el;
          },
          onNodeAdded: (el) => {
            if (el instanceof HTMLImageElement && el.srcset) {
              el.srcset = el.srcset;
            } else if (el instanceof HTMLVideoElement && el.autoplay) {
              el.play();
            }
            if (dom_default.isNowTriggerFormExternal(el, phxTriggerExternal)) {
              externalFormTriggered = el;
            }
            dom_default.discardError(targetContainer, el, phxFeedbackFor);
            if (dom_default.isPhxChild(el) && view.ownsElement(el) || dom_default.isPhxSticky(el) && view.ownsElement(el.parentNode)) {
              this.trackAfter("phxChildAdded", el);
            }
            added.push(el);
          },
          onNodeDiscarded: (el) => {
            if (dom_default.isPhxChild(el) || dom_default.isPhxSticky(el)) {
              liveSocket2.destroyViewByEl(el);
            }
            this.trackAfter("discarded", el);
          },
          onBeforeNodeDiscarded: (el) => {
            if (el.getAttribute && el.getAttribute(PHX_PRUNE) !== null) {
              return true;
            }
            if (el.parentNode !== null && dom_default.isPhxUpdate(el.parentNode, phxUpdate, ["append", "prepend"]) && el.id) {
              return false;
            }
            if (el.getAttribute && el.getAttribute(phxRemove)) {
              pendingRemoves.push(el);
              return false;
            }
            if (this.skipCIDSibling(el)) {
              return false;
            }
            return true;
          },
          onElUpdated: (el) => {
            if (dom_default.isNowTriggerFormExternal(el, phxTriggerExternal)) {
              externalFormTriggered = el;
            }
            updates.push(el);
          },
          onBeforeElUpdated: (fromEl, toEl) => {
            dom_default.cleanChildNodes(toEl, phxUpdate);
            if (this.skipCIDSibling(toEl)) {
              return false;
            }
            if (dom_default.isPhxSticky(fromEl)) {
              return false;
            }
            if (dom_default.isIgnored(fromEl, phxUpdate)) {
              this.trackBefore("updated", fromEl, toEl);
              dom_default.mergeAttrs(fromEl, toEl, { isIgnored: true });
              updates.push(fromEl);
              dom_default.applyStickyOperations(fromEl);
              return false;
            }
            if (fromEl.type === "number" && (fromEl.validity && fromEl.validity.badInput)) {
              return false;
            }
            if (!dom_default.syncPendingRef(fromEl, toEl, disableWith)) {
              if (dom_default.isUploadInput(fromEl)) {
                this.trackBefore("updated", fromEl, toEl);
                updates.push(fromEl);
              }
              dom_default.applyStickyOperations(fromEl);
              return false;
            }
            if (dom_default.isPhxChild(toEl)) {
              let prevSession = fromEl.getAttribute(PHX_SESSION);
              dom_default.mergeAttrs(fromEl, toEl, { exclude: [PHX_STATIC] });
              if (prevSession !== "") {
                fromEl.setAttribute(PHX_SESSION, prevSession);
              }
              fromEl.setAttribute(PHX_ROOT_ID, this.rootID);
              dom_default.applyStickyOperations(fromEl);
              return false;
            }
            dom_default.copyPrivates(toEl, fromEl);
            dom_default.discardError(targetContainer, toEl, phxFeedbackFor);
            let isFocusedFormEl = focused && fromEl.isSameNode(focused) && dom_default.isFormInput(fromEl);
            if (isFocusedFormEl) {
              this.trackBefore("updated", fromEl, toEl);
              dom_default.mergeFocusedInput(fromEl, toEl);
              dom_default.syncAttrsToProps(fromEl);
              updates.push(fromEl);
              dom_default.applyStickyOperations(fromEl);
              return false;
            } else {
              if (dom_default.isPhxUpdate(toEl, phxUpdate, ["append", "prepend"])) {
                appendPrependUpdates.push(new DOMPostMorphRestorer(fromEl, toEl, toEl.getAttribute(phxUpdate)));
              }
              dom_default.syncAttrsToProps(toEl);
              dom_default.applyStickyOperations(toEl);
              this.trackBefore("updated", fromEl, toEl);
              return true;
            }
          }
        });
      });
      if (liveSocket2.isDebugEnabled()) {
        detectDuplicateIds();
      }
      if (appendPrependUpdates.length > 0) {
        liveSocket2.time("post-morph append/prepend restoration", () => {
          appendPrependUpdates.forEach((update) => update.perform());
        });
      }
      liveSocket2.silenceEvents(() => dom_default.restoreFocus(focused, selectionStart, selectionEnd));
      dom_default.dispatchEvent(document, "phx:update");
      added.forEach((el) => this.trackAfter("added", el));
      updates.forEach((el) => this.trackAfter("updated", el));
      if (pendingRemoves.length > 0) {
        liveSocket2.transitionRemoves(pendingRemoves);
        liveSocket2.requestDOMUpdate(() => {
          pendingRemoves.forEach((el) => {
            let child = dom_default.firstPhxChild(el);
            if (child) {
              liveSocket2.destroyViewByEl(child);
            }
            el.remove();
          });
          this.trackAfter("transitionsDiscarded", pendingRemoves);
        });
      }
      if (externalFormTriggered) {
        liveSocket2.disconnect();
        externalFormTriggered.submit();
      }
      return true;
    }
    isCIDPatch() {
      return this.cidPatch;
    }
    skipCIDSibling(el) {
      return el.nodeType === Node.ELEMENT_NODE && el.getAttribute(PHX_SKIP) !== null;
    }
    targetCIDContainer(html) {
      if (!this.isCIDPatch()) {
        return;
      }
      let [first, ...rest] = dom_default.findComponentNodeList(this.container, this.targetCID);
      if (rest.length === 0 && dom_default.childNodeLength(html) === 1) {
        return first;
      } else {
        return first && first.parentNode;
      }
    }
    buildDiffHTML(container, html, phxUpdate, targetContainer) {
      let isCIDPatch = this.isCIDPatch();
      let isCIDWithSingleRoot = isCIDPatch && targetContainer.getAttribute(PHX_COMPONENT) === this.targetCID.toString();
      if (!isCIDPatch || isCIDWithSingleRoot) {
        return html;
      } else {
        let diffContainer = null;
        let template = document.createElement("template");
        diffContainer = dom_default.cloneNode(targetContainer);
        let [firstComponent, ...rest] = dom_default.findComponentNodeList(diffContainer, this.targetCID);
        template.innerHTML = html;
        rest.forEach((el) => el.remove());
        Array.from(diffContainer.childNodes).forEach((child) => {
          if (child.id && child.nodeType === Node.ELEMENT_NODE && child.getAttribute(PHX_COMPONENT) !== this.targetCID.toString()) {
            child.setAttribute(PHX_SKIP, "");
            child.innerHTML = "";
          }
        });
        Array.from(template.content.childNodes).forEach((el) => diffContainer.insertBefore(el, firstComponent));
        firstComponent.remove();
        return diffContainer.outerHTML;
      }
    }
  };
  var Rendered = class {
    static extract(diff) {
      let { [REPLY]: reply, [EVENTS]: events, [TITLE]: title } = diff;
      delete diff[REPLY];
      delete diff[EVENTS];
      delete diff[TITLE];
      return { diff, title, reply: reply || null, events: events || [] };
    }
    constructor(viewId, rendered) {
      this.viewId = viewId;
      this.rendered = {};
      this.mergeDiff(rendered);
    }
    parentViewId() {
      return this.viewId;
    }
    toString(onlyCids) {
      return this.recursiveToString(this.rendered, this.rendered[COMPONENTS], onlyCids);
    }
    recursiveToString(rendered, components = rendered[COMPONENTS], onlyCids) {
      onlyCids = onlyCids ? new Set(onlyCids) : null;
      let output = { buffer: "", components, onlyCids };
      this.toOutputBuffer(rendered, null, output);
      return output.buffer;
    }
    componentCIDs(diff) {
      return Object.keys(diff[COMPONENTS] || {}).map((i) => parseInt(i));
    }
    isComponentOnlyDiff(diff) {
      if (!diff[COMPONENTS]) {
        return false;
      }
      return Object.keys(diff).length === 1;
    }
    getComponent(diff, cid) {
      return diff[COMPONENTS][cid];
    }
    mergeDiff(diff) {
      let newc = diff[COMPONENTS];
      let cache = {};
      delete diff[COMPONENTS];
      this.rendered = this.mutableMerge(this.rendered, diff);
      this.rendered[COMPONENTS] = this.rendered[COMPONENTS] || {};
      if (newc) {
        let oldc = this.rendered[COMPONENTS];
        for (let cid in newc) {
          newc[cid] = this.cachedFindComponent(cid, newc[cid], oldc, newc, cache);
        }
        for (let cid in newc) {
          oldc[cid] = newc[cid];
        }
        diff[COMPONENTS] = newc;
      }
    }
    cachedFindComponent(cid, cdiff, oldc, newc, cache) {
      if (cache[cid]) {
        return cache[cid];
      } else {
        let ndiff, stat, scid = cdiff[STATIC];
        if (isCid(scid)) {
          let tdiff;
          if (scid > 0) {
            tdiff = this.cachedFindComponent(scid, newc[scid], oldc, newc, cache);
          } else {
            tdiff = oldc[-scid];
          }
          stat = tdiff[STATIC];
          ndiff = this.cloneMerge(tdiff, cdiff);
          ndiff[STATIC] = stat;
        } else {
          ndiff = cdiff[STATIC] !== void 0 ? cdiff : this.cloneMerge(oldc[cid] || {}, cdiff);
        }
        cache[cid] = ndiff;
        return ndiff;
      }
    }
    mutableMerge(target, source) {
      if (source[STATIC] !== void 0) {
        return source;
      } else {
        this.doMutableMerge(target, source);
        return target;
      }
    }
    doMutableMerge(target, source) {
      for (let key in source) {
        let val = source[key];
        let targetVal = target[key];
        if (isObject(val) && val[STATIC] === void 0 && isObject(targetVal)) {
          this.doMutableMerge(targetVal, val);
        } else {
          target[key] = val;
        }
      }
    }
    cloneMerge(target, source) {
      let merged = { ...target, ...source };
      for (let key in merged) {
        let val = source[key];
        let targetVal = target[key];
        if (isObject(val) && val[STATIC] === void 0 && isObject(targetVal)) {
          merged[key] = this.cloneMerge(targetVal, val);
        }
      }
      return merged;
    }
    componentToString(cid) {
      return this.recursiveCIDToString(this.rendered[COMPONENTS], cid);
    }
    pruneCIDs(cids) {
      cids.forEach((cid) => delete this.rendered[COMPONENTS][cid]);
    }
    get() {
      return this.rendered;
    }
    isNewFingerprint(diff = {}) {
      return !!diff[STATIC];
    }
    templateStatic(part, templates) {
      if (typeof part === "number") {
        return templates[part];
      } else {
        return part;
      }
    }
    toOutputBuffer(rendered, templates, output) {
      if (rendered[DYNAMICS]) {
        return this.comprehensionToBuffer(rendered, templates, output);
      }
      let { [STATIC]: statics } = rendered;
      statics = this.templateStatic(statics, templates);
      output.buffer += statics[0];
      for (let i = 1; i < statics.length; i++) {
        this.dynamicToBuffer(rendered[i - 1], templates, output);
        output.buffer += statics[i];
      }
    }
    comprehensionToBuffer(rendered, templates, output) {
      let { [DYNAMICS]: dynamics, [STATIC]: statics } = rendered;
      statics = this.templateStatic(statics, templates);
      let compTemplates = templates || rendered[TEMPLATES];
      for (let d = 0; d < dynamics.length; d++) {
        let dynamic = dynamics[d];
        output.buffer += statics[0];
        for (let i = 1; i < statics.length; i++) {
          this.dynamicToBuffer(dynamic[i - 1], compTemplates, output);
          output.buffer += statics[i];
        }
      }
    }
    dynamicToBuffer(rendered, templates, output) {
      if (typeof rendered === "number") {
        output.buffer += this.recursiveCIDToString(output.components, rendered, output.onlyCids);
      } else if (isObject(rendered)) {
        this.toOutputBuffer(rendered, templates, output);
      } else {
        output.buffer += rendered;
      }
    }
    recursiveCIDToString(components, cid, onlyCids) {
      let component = components[cid] || logError(`no component for CID ${cid}`, components);
      let template = document.createElement("template");
      template.innerHTML = this.recursiveToString(component, components, onlyCids);
      let container = template.content;
      let skip = onlyCids && !onlyCids.has(cid);
      let [hasChildNodes, hasChildComponents] = Array.from(container.childNodes).reduce(([hasNodes, hasComponents], child, i) => {
        if (child.nodeType === Node.ELEMENT_NODE) {
          if (child.getAttribute(PHX_COMPONENT)) {
            return [hasNodes, true];
          }
          child.setAttribute(PHX_COMPONENT, cid);
          if (!child.id) {
            child.id = `${this.parentViewId()}-${cid}-${i}`;
          }
          if (skip) {
            child.setAttribute(PHX_SKIP, "");
            child.innerHTML = "";
          }
          return [true, hasComponents];
        } else {
          if (child.nodeValue.trim() !== "") {
            logError(`only HTML element tags are allowed at the root of components.

got: "${child.nodeValue.trim()}"

within:
`, template.innerHTML.trim());
            child.replaceWith(this.createSpan(child.nodeValue, cid));
            return [true, hasComponents];
          } else {
            child.remove();
            return [hasNodes, hasComponents];
          }
        }
      }, [false, false]);
      if (!hasChildNodes && !hasChildComponents) {
        logError("expected at least one HTML element tag inside a component, but the component is empty:\n", template.innerHTML.trim());
        return this.createSpan("", cid).outerHTML;
      } else if (!hasChildNodes && hasChildComponents) {
        logError("expected at least one HTML element tag directly inside a component, but only subcomponents were found. A component must render at least one HTML tag directly inside itself.", template.innerHTML.trim());
        return template.innerHTML;
      } else {
        return template.innerHTML;
      }
    }
    createSpan(text, cid) {
      let span = document.createElement("span");
      span.innerText = text;
      span.setAttribute(PHX_COMPONENT, cid);
      return span;
    }
  };
  var viewHookID = 1;
  var ViewHook = class {
    static makeID() {
      return viewHookID++;
    }
    static elementID(el) {
      return el.phxHookId;
    }
    constructor(view, el, callbacks) {
      this.__view = view;
      this.liveSocket = view.liveSocket;
      this.__callbacks = callbacks;
      this.__listeners = /* @__PURE__ */ new Set();
      this.__isDisconnected = false;
      this.el = el;
      this.el.phxHookId = this.constructor.makeID();
      for (let key in this.__callbacks) {
        this[key] = this.__callbacks[key];
      }
    }
    __mounted() {
      this.mounted && this.mounted();
    }
    __updated() {
      this.updated && this.updated();
    }
    __beforeUpdate() {
      this.beforeUpdate && this.beforeUpdate();
    }
    __destroyed() {
      this.destroyed && this.destroyed();
    }
    __reconnected() {
      if (this.__isDisconnected) {
        this.__isDisconnected = false;
        this.reconnected && this.reconnected();
      }
    }
    __disconnected() {
      this.__isDisconnected = true;
      this.disconnected && this.disconnected();
    }
    pushEvent(event, payload = {}, onReply = function() {
    }) {
      return this.__view.pushHookEvent(null, event, payload, onReply);
    }
    pushEventTo(phxTarget, event, payload = {}, onReply = function() {
    }) {
      return this.__view.withinTargets(phxTarget, (view, targetCtx) => {
        return view.pushHookEvent(targetCtx, event, payload, onReply);
      });
    }
    handleEvent(event, callback) {
      let callbackRef = (customEvent, bypass) => bypass ? event : callback(customEvent.detail);
      window.addEventListener(`phx:${event}`, callbackRef);
      this.__listeners.add(callbackRef);
      return callbackRef;
    }
    removeHandleEvent(callbackRef) {
      let event = callbackRef(null, true);
      window.removeEventListener(`phx:${event}`, callbackRef);
      this.__listeners.delete(callbackRef);
    }
    upload(name, files) {
      return this.__view.dispatchUploads(name, files);
    }
    uploadTo(phxTarget, name, files) {
      return this.__view.withinTargets(phxTarget, (view) => view.dispatchUploads(name, files));
    }
    __cleanup__() {
      this.__listeners.forEach((callbackRef) => this.removeHandleEvent(callbackRef));
    }
  };
  var JS = {
    exec(eventType, phxEvent, view, sourceEl, defaults) {
      let [defaultKind, defaultArgs] = defaults || [null, {}];
      let commands = phxEvent.charAt(0) === "[" ? JSON.parse(phxEvent) : [[defaultKind, defaultArgs]];
      commands.forEach(([kind, args]) => {
        if (kind === defaultKind && defaultArgs.data) {
          args.data = Object.assign(args.data || {}, defaultArgs.data);
        }
        this.filterToEls(sourceEl, args).forEach((el) => {
          this[`exec_${kind}`](eventType, phxEvent, view, sourceEl, el, args);
        });
      });
    },
    isVisible(el) {
      return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length > 0);
    },
    exec_dispatch(eventType, phxEvent, view, sourceEl, el, { to, event, detail, bubbles }) {
      detail = detail || {};
      detail.dispatcher = sourceEl;
      dom_default.dispatchEvent(el, event, { detail, bubbles });
    },
    exec_push(eventType, phxEvent, view, sourceEl, el, args) {
      if (!view.isConnected()) {
        return;
      }
      let { event, data, target, page_loading, loading, value, dispatcher } = args;
      let pushOpts = { loading, value, target, page_loading: !!page_loading };
      let targetSrc = eventType === "change" && dispatcher ? dispatcher : sourceEl;
      let phxTarget = target || targetSrc.getAttribute(view.binding("target")) || targetSrc;
      view.withinTargets(phxTarget, (targetView, targetCtx) => {
        if (eventType === "change") {
          let { newCid, _target, callback } = args;
          _target = _target || (sourceEl instanceof HTMLInputElement ? sourceEl.name : void 0);
          if (_target) {
            pushOpts._target = _target;
          }
          targetView.pushInput(sourceEl, targetCtx, newCid, event || phxEvent, pushOpts, callback);
        } else if (eventType === "submit") {
          targetView.submitForm(sourceEl, targetCtx, event || phxEvent, pushOpts);
        } else {
          targetView.pushEvent(eventType, sourceEl, targetCtx, event || phxEvent, data, pushOpts);
        }
      });
    },
    exec_add_class(eventType, phxEvent, view, sourceEl, el, { names, transition, time }) {
      this.addOrRemoveClasses(el, names, [], transition, time, view);
    },
    exec_remove_class(eventType, phxEvent, view, sourceEl, el, { names, transition, time }) {
      this.addOrRemoveClasses(el, [], names, transition, time, view);
    },
    exec_transition(eventType, phxEvent, view, sourceEl, el, { time, transition }) {
      let [transition_start, running, transition_end] = transition;
      let onStart = () => this.addOrRemoveClasses(el, transition_start.concat(running), []);
      let onDone = () => this.addOrRemoveClasses(el, transition_end, transition_start.concat(running));
      view.transition(time, onStart, onDone);
    },
    exec_toggle(eventType, phxEvent, view, sourceEl, el, { display, ins, outs, time }) {
      this.toggle(eventType, view, el, display, ins, outs, time);
    },
    exec_show(eventType, phxEvent, view, sourceEl, el, { display, transition, time }) {
      this.show(eventType, view, el, display, transition, time);
    },
    exec_hide(eventType, phxEvent, view, sourceEl, el, { display, transition, time }) {
      this.hide(eventType, view, el, display, transition, time);
    },
    exec_set_attr(eventType, phxEvent, view, sourceEl, el, { attr: [attr, val] }) {
      this.setOrRemoveAttrs(el, [[attr, val]], []);
    },
    exec_remove_attr(eventType, phxEvent, view, sourceEl, el, { attr }) {
      this.setOrRemoveAttrs(el, [], [attr]);
    },
    show(eventType, view, el, display, transition, time) {
      if (!this.isVisible(el)) {
        this.toggle(eventType, view, el, display, transition, null, time);
      }
    },
    hide(eventType, view, el, display, transition, time) {
      if (this.isVisible(el)) {
        this.toggle(eventType, view, el, display, null, transition, time);
      }
    },
    toggle(eventType, view, el, display, ins, outs, time) {
      let [inClasses, inStartClasses, inEndClasses] = ins || [[], [], []];
      let [outClasses, outStartClasses, outEndClasses] = outs || [[], [], []];
      if (inClasses.length > 0 || outClasses.length > 0) {
        if (this.isVisible(el)) {
          let onStart = () => {
            this.addOrRemoveClasses(el, outStartClasses, inClasses.concat(inStartClasses).concat(inEndClasses));
            window.requestAnimationFrame(() => {
              this.addOrRemoveClasses(el, outClasses, []);
              window.requestAnimationFrame(() => this.addOrRemoveClasses(el, outEndClasses, outStartClasses));
            });
          };
          el.dispatchEvent(new Event("phx:hide-start"));
          view.transition(time, onStart, () => {
            this.addOrRemoveClasses(el, [], outClasses.concat(outEndClasses));
            dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = "none");
            el.dispatchEvent(new Event("phx:hide-end"));
          });
        } else {
          if (eventType === "remove") {
            return;
          }
          let onStart = () => {
            this.addOrRemoveClasses(el, inStartClasses, outClasses.concat(outStartClasses).concat(outEndClasses));
            dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = display || "block");
            window.requestAnimationFrame(() => {
              this.addOrRemoveClasses(el, inClasses, []);
              window.requestAnimationFrame(() => this.addOrRemoveClasses(el, inEndClasses, inStartClasses));
            });
          };
          el.dispatchEvent(new Event("phx:show-start"));
          view.transition(time, onStart, () => {
            this.addOrRemoveClasses(el, [], inClasses.concat(inEndClasses));
            el.dispatchEvent(new Event("phx:show-end"));
          });
        }
      } else {
        if (this.isVisible(el)) {
          window.requestAnimationFrame(() => {
            el.dispatchEvent(new Event("phx:hide-start"));
            dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = "none");
            el.dispatchEvent(new Event("phx:hide-end"));
          });
        } else {
          window.requestAnimationFrame(() => {
            el.dispatchEvent(new Event("phx:show-start"));
            dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = display || "block");
            el.dispatchEvent(new Event("phx:show-end"));
          });
        }
      }
    },
    addOrRemoveClasses(el, adds, removes, transition, time, view) {
      let [transition_run, transition_start, transition_end] = transition || [[], [], []];
      if (transition_run.length > 0) {
        let onStart = () => this.addOrRemoveClasses(el, transition_start.concat(transition_run), []);
        let onDone = () => this.addOrRemoveClasses(el, adds.concat(transition_end), removes.concat(transition_run).concat(transition_start));
        return view.transition(time, onStart, onDone);
      }
      window.requestAnimationFrame(() => {
        let [prevAdds, prevRemoves] = dom_default.getSticky(el, "classes", [[], []]);
        let keepAdds = adds.filter((name) => prevAdds.indexOf(name) < 0 && !el.classList.contains(name));
        let keepRemoves = removes.filter((name) => prevRemoves.indexOf(name) < 0 && el.classList.contains(name));
        let newAdds = prevAdds.filter((name) => removes.indexOf(name) < 0).concat(keepAdds);
        let newRemoves = prevRemoves.filter((name) => adds.indexOf(name) < 0).concat(keepRemoves);
        dom_default.putSticky(el, "classes", (currentEl) => {
          currentEl.classList.remove(...newRemoves);
          currentEl.classList.add(...newAdds);
          return [newAdds, newRemoves];
        });
      });
    },
    setOrRemoveAttrs(el, sets, removes) {
      let [prevSets, prevRemoves] = dom_default.getSticky(el, "attrs", [[], []]);
      let alteredAttrs = sets.map(([attr, _val]) => attr).concat(removes);
      let newSets = prevSets.filter(([attr, _val]) => !alteredAttrs.includes(attr)).concat(sets);
      let newRemoves = prevRemoves.filter((attr) => !alteredAttrs.includes(attr)).concat(removes);
      dom_default.putSticky(el, "attrs", (currentEl) => {
        newRemoves.forEach((attr) => currentEl.removeAttribute(attr));
        newSets.forEach(([attr, val]) => currentEl.setAttribute(attr, val));
        return [newSets, newRemoves];
      });
    },
    hasAllClasses(el, classes) {
      return classes.every((name) => el.classList.contains(name));
    },
    isToggledOut(el, outClasses) {
      return !this.isVisible(el) || this.hasAllClasses(el, outClasses);
    },
    filterToEls(sourceEl, { to }) {
      return to ? dom_default.all(document, to) : [sourceEl];
    }
  };
  var js_default = JS;
  var serializeForm = (form, meta, onlyNames = []) => {
    let formData = new FormData(form);
    let toRemove = [];
    formData.forEach((val, key, _index) => {
      if (val instanceof File) {
        toRemove.push(key);
      }
    });
    toRemove.forEach((key) => formData.delete(key));
    let params = new URLSearchParams();
    for (let [key, val] of formData.entries()) {
      if (onlyNames.length === 0 || onlyNames.indexOf(key) >= 0) {
        params.append(key, val);
      }
    }
    for (let metaKey in meta) {
      params.append(metaKey, meta[metaKey]);
    }
    return params.toString();
  };
  var View = class {
    constructor(el, liveSocket2, parentView, flash) {
      this.liveSocket = liveSocket2;
      this.flash = flash;
      this.parent = parentView;
      this.root = parentView ? parentView.root : this;
      this.el = el;
      this.id = this.el.id;
      this.ref = 0;
      this.childJoins = 0;
      this.loaderTimer = null;
      this.pendingDiffs = [];
      this.pruningCIDs = [];
      this.redirect = false;
      this.href = null;
      this.joinCount = this.parent ? this.parent.joinCount - 1 : 0;
      this.joinPending = true;
      this.destroyed = false;
      this.joinCallback = function(onDone) {
        onDone && onDone();
      };
      this.stopCallback = function() {
      };
      this.pendingJoinOps = this.parent ? null : [];
      this.viewHooks = {};
      this.uploaders = {};
      this.formSubmits = [];
      this.children = this.parent ? null : {};
      this.root.children[this.id] = {};
      this.channel = this.liveSocket.channel(`lv:${this.id}`, () => {
        return {
          redirect: this.redirect ? this.href : void 0,
          url: this.redirect ? void 0 : this.href || void 0,
          params: this.connectParams(),
          session: this.getSession(),
          static: this.getStatic(),
          flash: this.flash
        };
      });
      this.showLoader(this.liveSocket.loaderTimeout);
      this.bindChannel();
    }
    setHref(href) {
      this.href = href;
    }
    setRedirect(href) {
      this.redirect = true;
      this.href = href;
    }
    isMain() {
      return this.el.getAttribute(PHX_MAIN) !== null;
    }
    connectParams() {
      let params = this.liveSocket.params(this.el);
      let manifest = dom_default.all(document, `[${this.binding(PHX_TRACK_STATIC)}]`).map((node) => node.src || node.href).filter((url) => typeof url === "string");
      if (manifest.length > 0) {
        params["_track_static"] = manifest;
      }
      params["_mounts"] = this.joinCount;
      return params;
    }
    isConnected() {
      return this.channel.canPush();
    }
    getSession() {
      return this.el.getAttribute(PHX_SESSION);
    }
    getStatic() {
      let val = this.el.getAttribute(PHX_STATIC);
      return val === "" ? null : val;
    }
    destroy(callback = function() {
    }) {
      this.destroyAllChildren();
      this.destroyed = true;
      delete this.root.children[this.id];
      if (this.parent) {
        delete this.root.children[this.parent.id][this.id];
      }
      clearTimeout(this.loaderTimer);
      let onFinished = () => {
        callback();
        for (let id in this.viewHooks) {
          this.destroyHook(this.viewHooks[id]);
        }
      };
      dom_default.markPhxChildDestroyed(this.el);
      this.log("destroyed", () => ["the child has been removed from the parent"]);
      this.channel.leave().receive("ok", onFinished).receive("error", onFinished).receive("timeout", onFinished);
    }
    setContainerClasses(...classes) {
      this.el.classList.remove(PHX_CONNECTED_CLASS, PHX_DISCONNECTED_CLASS, PHX_ERROR_CLASS);
      this.el.classList.add(...classes);
    }
    showLoader(timeout) {
      clearTimeout(this.loaderTimer);
      if (timeout) {
        this.loaderTimer = setTimeout(() => this.showLoader(), timeout);
      } else {
        for (let id in this.viewHooks) {
          this.viewHooks[id].__disconnected();
        }
        this.setContainerClasses(PHX_DISCONNECTED_CLASS);
      }
    }
    hideLoader() {
      clearTimeout(this.loaderTimer);
      this.setContainerClasses(PHX_CONNECTED_CLASS);
    }
    triggerReconnected() {
      for (let id in this.viewHooks) {
        this.viewHooks[id].__reconnected();
      }
    }
    log(kind, msgCallback) {
      this.liveSocket.log(this, kind, msgCallback);
    }
    transition(time, onStart, onDone = function() {
    }) {
      this.liveSocket.transition(time, onStart, onDone);
    }
    withinTargets(phxTarget, callback) {
      if (phxTarget instanceof HTMLElement || phxTarget instanceof SVGElement) {
        return this.liveSocket.owner(phxTarget, (view) => callback(view, phxTarget));
      }
      if (isCid(phxTarget)) {
        let targets = dom_default.findComponentNodeList(this.el, phxTarget);
        if (targets.length === 0) {
          logError(`no component found matching phx-target of ${phxTarget}`);
        } else {
          callback(this, parseInt(phxTarget));
        }
      } else {
        let targets = Array.from(document.querySelectorAll(phxTarget));
        if (targets.length === 0) {
          logError(`nothing found matching the phx-target selector "${phxTarget}"`);
        }
        targets.forEach((target) => this.liveSocket.owner(target, (view) => callback(view, target)));
      }
    }
    applyDiff(type, rawDiff, callback) {
      this.log(type, () => ["", clone(rawDiff)]);
      let { diff, reply, events, title } = Rendered.extract(rawDiff);
      if (title) {
        dom_default.putTitle(title);
      }
      callback({ diff, reply, events });
      return reply;
    }
    onJoin(resp) {
      let { rendered, container } = resp;
      if (container) {
        let [tag, attrs] = container;
        this.el = dom_default.replaceRootContainer(this.el, tag, attrs);
      }
      this.childJoins = 0;
      this.joinPending = true;
      this.flash = null;
      browser_default.dropLocal(this.liveSocket.localStorage, window.location.pathname, CONSECUTIVE_RELOADS);
      this.applyDiff("mount", rendered, ({ diff, events }) => {
        this.rendered = new Rendered(this.id, diff);
        let html = this.renderContainer(null, "join");
        this.dropPendingRefs();
        let forms = this.formsForRecovery(html);
        this.joinCount++;
        if (forms.length > 0) {
          forms.forEach(([form, newForm, newCid], i) => {
            this.pushFormRecovery(form, newCid, (resp2) => {
              if (i === forms.length - 1) {
                this.onJoinComplete(resp2, html, events);
              }
            });
          });
        } else {
          this.onJoinComplete(resp, html, events);
        }
      });
    }
    dropPendingRefs() {
      dom_default.all(document, `[${PHX_REF_SRC}="${this.id}"][${PHX_REF}]`, (el) => {
        el.removeAttribute(PHX_REF);
        el.removeAttribute(PHX_REF_SRC);
      });
    }
    onJoinComplete({ live_patch }, html, events) {
      if (this.joinCount > 1 || this.parent && !this.parent.isJoinPending()) {
        return this.applyJoinPatch(live_patch, html, events);
      }
      let newChildren = dom_default.findPhxChildrenInFragment(html, this.id).filter((toEl) => {
        let fromEl = toEl.id && this.el.querySelector(`[id="${toEl.id}"]`);
        let phxStatic = fromEl && fromEl.getAttribute(PHX_STATIC);
        if (phxStatic) {
          toEl.setAttribute(PHX_STATIC, phxStatic);
        }
        return this.joinChild(toEl);
      });
      if (newChildren.length === 0) {
        if (this.parent) {
          this.root.pendingJoinOps.push([this, () => this.applyJoinPatch(live_patch, html, events)]);
          this.parent.ackJoin(this);
        } else {
          this.onAllChildJoinsComplete();
          this.applyJoinPatch(live_patch, html, events);
        }
      } else {
        this.root.pendingJoinOps.push([this, () => this.applyJoinPatch(live_patch, html, events)]);
      }
    }
    attachTrueDocEl() {
      this.el = dom_default.byId(this.id);
      this.el.setAttribute(PHX_ROOT_ID, this.root.id);
    }
    applyJoinPatch(live_patch, html, events) {
      this.attachTrueDocEl();
      let patch = new DOMPatch(this, this.el, this.id, html, null);
      patch.markPrunableContentForRemoval();
      this.performPatch(patch, false);
      this.joinNewChildren();
      dom_default.all(this.el, `[${this.binding(PHX_HOOK)}], [data-phx-${PHX_HOOK}]`, (hookEl) => {
        let hook = this.addHook(hookEl);
        if (hook) {
          hook.__mounted();
        }
      });
      this.joinPending = false;
      this.liveSocket.dispatchEvents(events);
      this.applyPendingUpdates();
      if (live_patch) {
        let { kind, to } = live_patch;
        this.liveSocket.historyPatch(to, kind);
      }
      this.hideLoader();
      if (this.joinCount > 1) {
        this.triggerReconnected();
      }
      this.stopCallback();
    }
    triggerBeforeUpdateHook(fromEl, toEl) {
      this.liveSocket.triggerDOM("onBeforeElUpdated", [fromEl, toEl]);
      let hook = this.getHook(fromEl);
      let isIgnored = hook && dom_default.isIgnored(fromEl, this.binding(PHX_UPDATE));
      if (hook && !fromEl.isEqualNode(toEl) && !(isIgnored && isEqualObj(fromEl.dataset, toEl.dataset))) {
        hook.__beforeUpdate();
        return hook;
      }
    }
    performPatch(patch, pruneCids) {
      let removedEls = [];
      let phxChildrenAdded = false;
      let updatedHookIds = /* @__PURE__ */ new Set();
      patch.after("added", (el) => {
        this.liveSocket.triggerDOM("onNodeAdded", [el]);
        let newHook = this.addHook(el);
        if (newHook) {
          newHook.__mounted();
        }
      });
      patch.after("phxChildAdded", (el) => {
        if (dom_default.isPhxSticky(el)) {
          this.liveSocket.joinRootViews();
        } else {
          phxChildrenAdded = true;
        }
      });
      patch.before("updated", (fromEl, toEl) => {
        let hook = this.triggerBeforeUpdateHook(fromEl, toEl);
        if (hook) {
          updatedHookIds.add(fromEl.id);
        }
      });
      patch.after("updated", (el) => {
        if (updatedHookIds.has(el.id)) {
          this.getHook(el).__updated();
        }
      });
      patch.after("discarded", (el) => {
        if (el.nodeType === Node.ELEMENT_NODE) {
          removedEls.push(el);
        }
      });
      patch.after("transitionsDiscarded", (els) => this.afterElementsRemoved(els, pruneCids));
      patch.perform();
      this.afterElementsRemoved(removedEls, pruneCids);
      return phxChildrenAdded;
    }
    afterElementsRemoved(elements, pruneCids) {
      let destroyedCIDs = [];
      elements.forEach((parent) => {
        let components = dom_default.all(parent, `[${PHX_COMPONENT}]`);
        let hooks = dom_default.all(parent, `[${this.binding(PHX_HOOK)}]`);
        components.concat(parent).forEach((el) => {
          let cid = this.componentID(el);
          if (isCid(cid) && destroyedCIDs.indexOf(cid) === -1) {
            destroyedCIDs.push(cid);
          }
        });
        hooks.concat(parent).forEach((hookEl) => {
          let hook = this.getHook(hookEl);
          hook && this.destroyHook(hook);
        });
      });
      if (pruneCids) {
        this.maybePushComponentsDestroyed(destroyedCIDs);
      }
    }
    joinNewChildren() {
      dom_default.findPhxChildren(this.el, this.id).forEach((el) => this.joinChild(el));
    }
    getChildById(id) {
      return this.root.children[this.id][id];
    }
    getDescendentByEl(el) {
      if (el.id === this.id) {
        return this;
      } else {
        return this.children[el.getAttribute(PHX_PARENT_ID)][el.id];
      }
    }
    destroyDescendent(id) {
      for (let parentId in this.root.children) {
        for (let childId in this.root.children[parentId]) {
          if (childId === id) {
            return this.root.children[parentId][childId].destroy();
          }
        }
      }
    }
    joinChild(el) {
      let child = this.getChildById(el.id);
      if (!child) {
        let view = new View(el, this.liveSocket, this);
        this.root.children[this.id][view.id] = view;
        view.join();
        this.childJoins++;
        return true;
      }
    }
    isJoinPending() {
      return this.joinPending;
    }
    ackJoin(_child) {
      this.childJoins--;
      if (this.childJoins === 0) {
        if (this.parent) {
          this.parent.ackJoin(this);
        } else {
          this.onAllChildJoinsComplete();
        }
      }
    }
    onAllChildJoinsComplete() {
      this.joinCallback(() => {
        this.pendingJoinOps.forEach(([view, op]) => {
          if (!view.isDestroyed()) {
            op();
          }
        });
        this.pendingJoinOps = [];
      });
    }
    update(diff, events) {
      if (this.isJoinPending() || this.liveSocket.hasPendingLink() && !dom_default.isPhxSticky(this.el)) {
        return this.pendingDiffs.push({ diff, events });
      }
      this.rendered.mergeDiff(diff);
      let phxChildrenAdded = false;
      if (this.rendered.isComponentOnlyDiff(diff)) {
        this.liveSocket.time("component patch complete", () => {
          let parentCids = dom_default.findParentCIDs(this.el, this.rendered.componentCIDs(diff));
          parentCids.forEach((parentCID) => {
            if (this.componentPatch(this.rendered.getComponent(diff, parentCID), parentCID)) {
              phxChildrenAdded = true;
            }
          });
        });
      } else if (!isEmpty(diff)) {
        this.liveSocket.time("full patch complete", () => {
          let html = this.renderContainer(diff, "update");
          let patch = new DOMPatch(this, this.el, this.id, html, null);
          phxChildrenAdded = this.performPatch(patch, true);
        });
      }
      this.liveSocket.dispatchEvents(events);
      if (phxChildrenAdded) {
        this.joinNewChildren();
      }
    }
    renderContainer(diff, kind) {
      return this.liveSocket.time(`toString diff (${kind})`, () => {
        let tag = this.el.tagName;
        let cids = diff ? this.rendered.componentCIDs(diff).concat(this.pruningCIDs) : null;
        let html = this.rendered.toString(cids);
        return `<${tag}>${html}</${tag}>`;
      });
    }
    componentPatch(diff, cid) {
      if (isEmpty(diff))
        return false;
      let html = this.rendered.componentToString(cid);
      let patch = new DOMPatch(this, this.el, this.id, html, cid);
      let childrenAdded = this.performPatch(patch, true);
      return childrenAdded;
    }
    getHook(el) {
      return this.viewHooks[ViewHook.elementID(el)];
    }
    addHook(el) {
      if (ViewHook.elementID(el) || !el.getAttribute) {
        return;
      }
      let hookName = el.getAttribute(`data-phx-${PHX_HOOK}`) || el.getAttribute(this.binding(PHX_HOOK));
      if (hookName && !this.ownsElement(el)) {
        return;
      }
      let callbacks = this.liveSocket.getHookCallbacks(hookName);
      if (callbacks) {
        if (!el.id) {
          logError(`no DOM ID for hook "${hookName}". Hooks require a unique ID on each element.`, el);
        }
        let hook = new ViewHook(this, el, callbacks);
        this.viewHooks[ViewHook.elementID(hook.el)] = hook;
        return hook;
      } else if (hookName !== null) {
        logError(`unknown hook found for "${hookName}"`, el);
      }
    }
    destroyHook(hook) {
      hook.__destroyed();
      hook.__cleanup__();
      delete this.viewHooks[ViewHook.elementID(hook.el)];
    }
    applyPendingUpdates() {
      this.pendingDiffs.forEach(({ diff, events }) => this.update(diff, events));
      this.pendingDiffs = [];
    }
    onChannel(event, cb) {
      this.liveSocket.onChannel(this.channel, event, (resp) => {
        if (this.isJoinPending()) {
          this.root.pendingJoinOps.push([this, () => cb(resp)]);
        } else {
          this.liveSocket.requestDOMUpdate(() => cb(resp));
        }
      });
    }
    bindChannel() {
      this.liveSocket.onChannel(this.channel, "diff", (rawDiff) => {
        this.liveSocket.requestDOMUpdate(() => {
          this.applyDiff("update", rawDiff, ({ diff, events }) => this.update(diff, events));
        });
      });
      this.onChannel("redirect", ({ to, flash }) => this.onRedirect({ to, flash }));
      this.onChannel("live_patch", (redir) => this.onLivePatch(redir));
      this.onChannel("live_redirect", (redir) => this.onLiveRedirect(redir));
      this.channel.onError((reason) => this.onError(reason));
      this.channel.onClose((reason) => this.onClose(reason));
    }
    destroyAllChildren() {
      for (let id in this.root.children[this.id]) {
        this.getChildById(id).destroy();
      }
    }
    onLiveRedirect(redir) {
      let { to, kind, flash } = redir;
      let url = this.expandURL(to);
      this.liveSocket.historyRedirect(url, kind, flash);
    }
    onLivePatch(redir) {
      let { to, kind } = redir;
      this.href = this.expandURL(to);
      this.liveSocket.historyPatch(to, kind);
    }
    expandURL(to) {
      return to.startsWith("/") ? `${window.location.protocol}//${window.location.host}${to}` : to;
    }
    onRedirect({ to, flash }) {
      this.liveSocket.redirect(to, flash);
    }
    isDestroyed() {
      return this.destroyed;
    }
    join(callback) {
      if (this.isMain()) {
        this.stopCallback = this.liveSocket.withPageLoading({ to: this.href, kind: "initial" });
      }
      this.joinCallback = (onDone) => {
        onDone = onDone || function() {
        };
        callback ? callback(this.joinCount, onDone) : onDone();
      };
      this.liveSocket.wrapPush(this, { timeout: false }, () => {
        return this.channel.join().receive("ok", (data) => {
          if (!this.isDestroyed()) {
            this.liveSocket.requestDOMUpdate(() => this.onJoin(data));
          }
        }).receive("error", (resp) => !this.isDestroyed() && this.onJoinError(resp)).receive("timeout", () => !this.isDestroyed() && this.onJoinError({ reason: "timeout" }));
      });
    }
    onJoinError(resp) {
      if (resp.reason === "unauthorized" || resp.reason === "stale") {
        this.log("error", () => ["unauthorized live_redirect. Falling back to page request", resp]);
        return this.onRedirect({ to: this.href });
      }
      if (resp.redirect || resp.live_redirect) {
        this.joinPending = false;
        this.channel.leave();
      }
      if (resp.redirect) {
        return this.onRedirect(resp.redirect);
      }
      if (resp.live_redirect) {
        return this.onLiveRedirect(resp.live_redirect);
      }
      this.log("error", () => ["unable to join", resp]);
      if (this.liveSocket.isConnected()) {
        this.liveSocket.reloadWithJitter(this);
      }
    }
    onClose(reason) {
      if (this.isDestroyed()) {
        return;
      }
      if (this.liveSocket.hasPendingLink() && reason !== "leave") {
        return this.liveSocket.reloadWithJitter(this);
      }
      this.destroyAllChildren();
      this.liveSocket.dropActiveElement(this);
      if (document.activeElement) {
        document.activeElement.blur();
      }
      if (this.liveSocket.isUnloaded()) {
        this.showLoader(BEFORE_UNLOAD_LOADER_TIMEOUT);
      }
    }
    onError(reason) {
      this.onClose(reason);
      if (this.liveSocket.isConnected()) {
        this.log("error", () => ["view crashed", reason]);
      }
      if (!this.liveSocket.isUnloaded()) {
        this.displayError();
      }
    }
    displayError() {
      if (this.isMain()) {
        dom_default.dispatchEvent(window, "phx:page-loading-start", { detail: { to: this.href, kind: "error" } });
      }
      this.showLoader();
      this.setContainerClasses(PHX_DISCONNECTED_CLASS, PHX_ERROR_CLASS);
    }
    pushWithReply(refGenerator, event, payload, onReply = function() {
    }) {
      if (!this.isConnected()) {
        return;
      }
      let [ref, [el], opts] = refGenerator ? refGenerator() : [null, [], {}];
      let onLoadingDone = function() {
      };
      if (opts.page_loading || el && el.getAttribute(this.binding(PHX_PAGE_LOADING)) !== null) {
        onLoadingDone = this.liveSocket.withPageLoading({ kind: "element", target: el });
      }
      if (typeof payload.cid !== "number") {
        delete payload.cid;
      }
      return this.liveSocket.wrapPush(this, { timeout: true }, () => {
        return this.channel.push(event, payload, PUSH_TIMEOUT).receive("ok", (resp) => {
          if (ref !== null) {
            this.undoRefs(ref);
          }
          let finish = (hookReply) => {
            if (resp.redirect) {
              this.onRedirect(resp.redirect);
            }
            if (resp.live_patch) {
              this.onLivePatch(resp.live_patch);
            }
            if (resp.live_redirect) {
              this.onLiveRedirect(resp.live_redirect);
            }
            onLoadingDone();
            onReply(resp, hookReply);
          };
          if (resp.diff) {
            this.liveSocket.requestDOMUpdate(() => {
              let hookReply = this.applyDiff("update", resp.diff, ({ diff, events }) => {
                this.update(diff, events);
              });
              finish(hookReply);
            });
          } else {
            finish(null);
          }
        });
      });
    }
    undoRefs(ref) {
      dom_default.all(document, `[${PHX_REF_SRC}="${this.id}"][${PHX_REF}="${ref}"]`, (el) => {
        let disabledVal = el.getAttribute(PHX_DISABLED);
        el.removeAttribute(PHX_REF);
        el.removeAttribute(PHX_REF_SRC);
        if (el.getAttribute(PHX_READONLY) !== null) {
          el.readOnly = false;
          el.removeAttribute(PHX_READONLY);
        }
        if (disabledVal !== null) {
          el.disabled = disabledVal === "true" ? true : false;
          el.removeAttribute(PHX_DISABLED);
        }
        PHX_EVENT_CLASSES.forEach((className) => dom_default.removeClass(el, className));
        let disableRestore = el.getAttribute(PHX_DISABLE_WITH_RESTORE);
        if (disableRestore !== null) {
          el.innerText = disableRestore;
          el.removeAttribute(PHX_DISABLE_WITH_RESTORE);
        }
        let toEl = dom_default.private(el, PHX_REF);
        if (toEl) {
          let hook = this.triggerBeforeUpdateHook(el, toEl);
          DOMPatch.patchEl(el, toEl, this.liveSocket.getActiveElement());
          if (hook) {
            hook.__updated();
          }
          dom_default.deletePrivate(el, PHX_REF);
        }
      });
    }
    putRef(elements, event, opts = {}) {
      let newRef = this.ref++;
      let disableWith = this.binding(PHX_DISABLE_WITH);
      if (opts.loading) {
        elements = elements.concat(dom_default.all(document, opts.loading));
      }
      elements.forEach((el) => {
        el.classList.add(`phx-${event}-loading`);
        el.setAttribute(PHX_REF, newRef);
        el.setAttribute(PHX_REF_SRC, this.el.id);
        let disableText = el.getAttribute(disableWith);
        if (disableText !== null) {
          if (!el.getAttribute(PHX_DISABLE_WITH_RESTORE)) {
            el.setAttribute(PHX_DISABLE_WITH_RESTORE, el.innerText);
          }
          if (disableText !== "") {
            el.innerText = disableText;
          }
          el.setAttribute("disabled", "");
        }
      });
      return [newRef, elements, opts];
    }
    componentID(el) {
      let cid = el.getAttribute && el.getAttribute(PHX_COMPONENT);
      return cid ? parseInt(cid) : null;
    }
    targetComponentID(target, targetCtx, opts = {}) {
      if (isCid(targetCtx)) {
        return targetCtx;
      }
      let cidOrSelector = target.getAttribute(this.binding("target"));
      if (isCid(cidOrSelector)) {
        return parseInt(cidOrSelector);
      } else if (targetCtx && (cidOrSelector !== null || opts.target)) {
        return this.closestComponentID(targetCtx);
      } else {
        return null;
      }
    }
    closestComponentID(targetCtx) {
      if (isCid(targetCtx)) {
        return targetCtx;
      } else if (targetCtx) {
        return maybe(targetCtx.closest(`[${PHX_COMPONENT}]`), (el) => this.ownsElement(el) && this.componentID(el));
      } else {
        return null;
      }
    }
    pushHookEvent(targetCtx, event, payload, onReply) {
      if (!this.isConnected()) {
        this.log("hook", () => ["unable to push hook event. LiveView not connected", event, payload]);
        return false;
      }
      let [ref, els, opts] = this.putRef([], "hook");
      this.pushWithReply(() => [ref, els, opts], "event", {
        type: "hook",
        event,
        value: payload,
        cid: this.closestComponentID(targetCtx)
      }, (resp, reply) => onReply(reply, ref));
      return ref;
    }
    extractMeta(el, meta, value) {
      let prefix = this.binding("value-");
      for (let i = 0; i < el.attributes.length; i++) {
        if (!meta) {
          meta = {};
        }
        let name = el.attributes[i].name;
        if (name.startsWith(prefix)) {
          meta[name.replace(prefix, "")] = el.getAttribute(name);
        }
      }
      if (el.value !== void 0) {
        if (!meta) {
          meta = {};
        }
        meta.value = el.value;
        if (el.tagName === "INPUT" && CHECKABLE_INPUTS.indexOf(el.type) >= 0 && !el.checked) {
          delete meta.value;
        }
      }
      if (value) {
        if (!meta) {
          meta = {};
        }
        for (let key in value) {
          meta[key] = value[key];
        }
      }
      return meta;
    }
    pushEvent(type, el, targetCtx, phxEvent, meta, opts = {}) {
      this.pushWithReply(() => this.putRef([el], type, opts), "event", {
        type,
        event: phxEvent,
        value: this.extractMeta(el, meta, opts.value),
        cid: this.targetComponentID(el, targetCtx, opts)
      });
    }
    pushFileProgress(fileEl, entryRef, progress, onReply = function() {
    }) {
      this.liveSocket.withinOwners(fileEl.form, (view, targetCtx) => {
        view.pushWithReply(null, "progress", {
          event: fileEl.getAttribute(view.binding(PHX_PROGRESS)),
          ref: fileEl.getAttribute(PHX_UPLOAD_REF),
          entry_ref: entryRef,
          progress,
          cid: view.targetComponentID(fileEl.form, targetCtx)
        }, onReply);
      });
    }
    pushInput(inputEl, targetCtx, forceCid, phxEvent, opts, callback) {
      let uploads;
      let cid = isCid(forceCid) ? forceCid : this.targetComponentID(inputEl.form, targetCtx);
      let refGenerator = () => this.putRef([inputEl, inputEl.form], "change", opts);
      let formData;
      if (inputEl.getAttribute(this.binding("change"))) {
        formData = serializeForm(inputEl.form, { _target: opts._target }, [inputEl.name]);
      } else {
        formData = serializeForm(inputEl.form, { _target: opts._target });
      }
      if (dom_default.isUploadInput(inputEl) && inputEl.files && inputEl.files.length > 0) {
        LiveUploader.trackFiles(inputEl, Array.from(inputEl.files));
      }
      uploads = LiveUploader.serializeUploads(inputEl);
      let event = {
        type: "form",
        event: phxEvent,
        value: formData,
        uploads,
        cid
      };
      this.pushWithReply(refGenerator, "event", event, (resp) => {
        dom_default.showError(inputEl, this.liveSocket.binding(PHX_FEEDBACK_FOR));
        if (dom_default.isUploadInput(inputEl) && inputEl.getAttribute("data-phx-auto-upload") !== null) {
          if (LiveUploader.filesAwaitingPreflight(inputEl).length > 0) {
            let [ref, _els] = refGenerator();
            this.uploadFiles(inputEl.form, targetCtx, ref, cid, (_uploads) => {
              callback && callback(resp);
              this.triggerAwaitingSubmit(inputEl.form);
            });
          }
        } else {
          callback && callback(resp);
        }
      });
    }
    triggerAwaitingSubmit(formEl) {
      let awaitingSubmit = this.getScheduledSubmit(formEl);
      if (awaitingSubmit) {
        let [_el, _ref, _opts, callback] = awaitingSubmit;
        this.cancelSubmit(formEl);
        callback();
      }
    }
    getScheduledSubmit(formEl) {
      return this.formSubmits.find(([el, _ref, _opts, _callback]) => el.isSameNode(formEl));
    }
    scheduleSubmit(formEl, ref, opts, callback) {
      if (this.getScheduledSubmit(formEl)) {
        return true;
      }
      this.formSubmits.push([formEl, ref, opts, callback]);
    }
    cancelSubmit(formEl) {
      this.formSubmits = this.formSubmits.filter(([el, ref, _callback]) => {
        if (el.isSameNode(formEl)) {
          this.undoRefs(ref);
          return false;
        } else {
          return true;
        }
      });
    }
    pushFormSubmit(formEl, targetCtx, phxEvent, opts, onReply) {
      let filterIgnored = (el) => {
        let userIgnored = closestPhxBinding(el, `${this.binding(PHX_UPDATE)}=ignore`, el.form);
        return !(userIgnored || closestPhxBinding(el, "data-phx-update=ignore", el.form));
      };
      let filterDisables = (el) => {
        return el.hasAttribute(this.binding(PHX_DISABLE_WITH));
      };
      let filterButton = (el) => el.tagName == "BUTTON";
      let filterInput = (el) => ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName);
      let refGenerator = () => {
        let formElements = Array.from(formEl.elements);
        let disables = formElements.filter(filterDisables);
        let buttons = formElements.filter(filterButton).filter(filterIgnored);
        let inputs = formElements.filter(filterInput).filter(filterIgnored);
        buttons.forEach((button) => {
          button.setAttribute(PHX_DISABLED, button.disabled);
          button.disabled = true;
        });
        inputs.forEach((input) => {
          input.setAttribute(PHX_READONLY, input.readOnly);
          input.readOnly = true;
          if (input.files) {
            input.setAttribute(PHX_DISABLED, input.disabled);
            input.disabled = true;
          }
        });
        formEl.setAttribute(this.binding(PHX_PAGE_LOADING), "");
        return this.putRef([formEl].concat(disables).concat(buttons).concat(inputs), "submit", opts);
      };
      let cid = this.targetComponentID(formEl, targetCtx);
      if (LiveUploader.hasUploadsInProgress(formEl)) {
        let [ref, _els] = refGenerator();
        let push = () => this.pushFormSubmit(formEl, targetCtx, phxEvent, opts, onReply);
        return this.scheduleSubmit(formEl, ref, opts, push);
      } else if (LiveUploader.inputsAwaitingPreflight(formEl).length > 0) {
        let [ref, els] = refGenerator();
        let proxyRefGen = () => [ref, els, opts];
        this.uploadFiles(formEl, targetCtx, ref, cid, (_uploads) => {
          let formData = serializeForm(formEl, {});
          this.pushWithReply(proxyRefGen, "event", {
            type: "form",
            event: phxEvent,
            value: formData,
            cid
          }, onReply);
        });
      } else {
        let formData = serializeForm(formEl, {});
        this.pushWithReply(refGenerator, "event", {
          type: "form",
          event: phxEvent,
          value: formData,
          cid
        }, onReply);
      }
    }
    uploadFiles(formEl, targetCtx, ref, cid, onComplete) {
      let joinCountAtUpload = this.joinCount;
      let inputEls = LiveUploader.activeFileInputs(formEl);
      let numFileInputsInProgress = inputEls.length;
      inputEls.forEach((inputEl) => {
        let uploader = new LiveUploader(inputEl, this, () => {
          numFileInputsInProgress--;
          if (numFileInputsInProgress === 0) {
            onComplete();
          }
        });
        this.uploaders[inputEl] = uploader;
        let entries = uploader.entries().map((entry) => entry.toPreflightPayload());
        let payload = {
          ref: inputEl.getAttribute(PHX_UPLOAD_REF),
          entries,
          cid: this.targetComponentID(inputEl.form, targetCtx)
        };
        this.log("upload", () => ["sending preflight request", payload]);
        this.pushWithReply(null, "allow_upload", payload, (resp) => {
          this.log("upload", () => ["got preflight response", resp]);
          if (resp.error) {
            this.undoRefs(ref);
            let [entry_ref, reason] = resp.error;
            this.log("upload", () => [`error for entry ${entry_ref}`, reason]);
          } else {
            let onError = (callback) => {
              this.channel.onError(() => {
                if (this.joinCount === joinCountAtUpload) {
                  callback();
                }
              });
            };
            uploader.initAdapterUpload(resp, onError, this.liveSocket);
          }
        });
      });
    }
    dispatchUploads(name, filesOrBlobs) {
      let inputs = dom_default.findUploadInputs(this.el).filter((el) => el.name === name);
      if (inputs.length === 0) {
        logError(`no live file inputs found matching the name "${name}"`);
      } else if (inputs.length > 1) {
        logError(`duplicate live file inputs found matching the name "${name}"`);
      } else {
        dom_default.dispatchEvent(inputs[0], PHX_TRACK_UPLOADS, { detail: { files: filesOrBlobs } });
      }
    }
    pushFormRecovery(form, newCid, callback) {
      this.liveSocket.withinOwners(form, (view, targetCtx) => {
        let input = form.elements[0];
        let phxEvent = form.getAttribute(this.binding(PHX_AUTO_RECOVER)) || form.getAttribute(this.binding("change"));
        js_default.exec("change", phxEvent, view, input, ["push", { _target: input.name, newCid, callback }]);
      });
    }
    pushLinkPatch(href, targetEl, callback) {
      let linkRef = this.liveSocket.setPendingLink(href);
      let refGen = targetEl ? () => this.putRef([targetEl], "click") : null;
      let fallback = () => this.liveSocket.redirect(window.location.href);
      let push = this.pushWithReply(refGen, "live_patch", { url: href }, (resp) => {
        this.liveSocket.requestDOMUpdate(() => {
          if (resp.link_redirect) {
            this.liveSocket.replaceMain(href, null, callback, linkRef);
          } else {
            if (this.liveSocket.commitPendingLink(linkRef)) {
              this.href = href;
            }
            this.applyPendingUpdates();
            callback && callback(linkRef);
          }
        });
      });
      if (push) {
        push.receive("timeout", fallback);
      } else {
        fallback();
      }
    }
    formsForRecovery(html) {
      if (this.joinCount === 0) {
        return [];
      }
      let phxChange = this.binding("change");
      let template = document.createElement("template");
      template.innerHTML = html;
      return dom_default.all(this.el, `form[${phxChange}]`).filter((form) => form.id && this.ownsElement(form)).filter((form) => form.elements.length > 0).filter((form) => form.getAttribute(this.binding(PHX_AUTO_RECOVER)) !== "ignore").map((form) => {
        let newForm = template.content.querySelector(`form[id="${form.id}"][${phxChange}="${form.getAttribute(phxChange)}"]`);
        if (newForm) {
          return [form, newForm, this.targetComponentID(newForm)];
        } else {
          return [form, null, null];
        }
      }).filter(([form, newForm, newCid]) => newForm);
    }
    maybePushComponentsDestroyed(destroyedCIDs) {
      let willDestroyCIDs = destroyedCIDs.filter((cid) => {
        return dom_default.findComponentNodeList(this.el, cid).length === 0;
      });
      if (willDestroyCIDs.length > 0) {
        this.pruningCIDs.push(...willDestroyCIDs);
        this.pushWithReply(null, "cids_will_destroy", { cids: willDestroyCIDs }, () => {
          this.pruningCIDs = this.pruningCIDs.filter((cid) => willDestroyCIDs.indexOf(cid) !== -1);
          let completelyDestroyCIDs = willDestroyCIDs.filter((cid) => {
            return dom_default.findComponentNodeList(this.el, cid).length === 0;
          });
          if (completelyDestroyCIDs.length > 0) {
            this.pushWithReply(null, "cids_destroyed", { cids: completelyDestroyCIDs }, (resp) => {
              this.rendered.pruneCIDs(resp.cids);
            });
          }
        });
      }
    }
    ownsElement(el) {
      return el.getAttribute(PHX_PARENT_ID) === this.id || maybe(el.closest(PHX_VIEW_SELECTOR), (node) => node.id) === this.id;
    }
    submitForm(form, targetCtx, phxEvent, opts = {}) {
      dom_default.putPrivate(form, PHX_HAS_SUBMITTED, true);
      let phxFeedback = this.liveSocket.binding(PHX_FEEDBACK_FOR);
      let inputs = Array.from(form.elements);
      this.liveSocket.blurActiveElement(this);
      this.pushFormSubmit(form, targetCtx, phxEvent, opts, () => {
        inputs.forEach((input) => dom_default.showError(input, phxFeedback));
        this.liveSocket.restorePreviouslyActiveFocus();
      });
    }
    binding(kind) {
      return this.liveSocket.binding(kind);
    }
  };
  var LiveSocket = class {
    constructor(url, phxSocket, opts = {}) {
      this.unloaded = false;
      if (!phxSocket || phxSocket.constructor.name === "Object") {
        throw new Error(`
      a phoenix Socket must be provided as the second argument to the LiveSocket constructor. For example:

          import {Socket} from "phoenix"
          import {LiveSocket} from "phoenix_live_view"
          let liveSocket = new LiveSocket("/live", Socket, {...})
      `);
      }
      this.socket = new phxSocket(url, opts);
      this.bindingPrefix = opts.bindingPrefix || BINDING_PREFIX;
      this.opts = opts;
      this.params = closure(opts.params || {});
      this.viewLogger = opts.viewLogger;
      this.metadataCallbacks = opts.metadata || {};
      this.defaults = Object.assign(clone(DEFAULTS), opts.defaults || {});
      this.activeElement = null;
      this.prevActive = null;
      this.silenced = false;
      this.main = null;
      this.outgoingMainEl = null;
      this.clickStartedAtTarget = null;
      this.linkRef = 1;
      this.roots = {};
      this.href = window.location.href;
      this.pendingLink = null;
      this.currentLocation = clone(window.location);
      this.hooks = opts.hooks || {};
      this.uploaders = opts.uploaders || {};
      this.loaderTimeout = opts.loaderTimeout || LOADER_TIMEOUT;
      this.reloadWithJitterTimer = null;
      this.maxReloads = opts.maxReloads || MAX_RELOADS;
      this.reloadJitterMin = opts.reloadJitterMin || RELOAD_JITTER_MIN;
      this.reloadJitterMax = opts.reloadJitterMax || RELOAD_JITTER_MAX;
      this.failsafeJitter = opts.failsafeJitter || FAILSAFE_JITTER;
      this.localStorage = opts.localStorage || window.localStorage;
      this.sessionStorage = opts.sessionStorage || window.sessionStorage;
      this.boundTopLevelEvents = false;
      this.domCallbacks = Object.assign({ onNodeAdded: closure(), onBeforeElUpdated: closure() }, opts.dom || {});
      this.transitions = new TransitionSet();
      window.addEventListener("pagehide", (_e) => {
        this.unloaded = true;
      });
      this.socket.onOpen(() => {
        if (this.isUnloaded()) {
          window.location.reload();
        }
      });
    }
    isProfileEnabled() {
      return this.sessionStorage.getItem(PHX_LV_PROFILE) === "true";
    }
    isDebugEnabled() {
      return this.sessionStorage.getItem(PHX_LV_DEBUG) === "true";
    }
    isDebugDisabled() {
      return this.sessionStorage.getItem(PHX_LV_DEBUG) === "false";
    }
    enableDebug() {
      this.sessionStorage.setItem(PHX_LV_DEBUG, "true");
    }
    enableProfiling() {
      this.sessionStorage.setItem(PHX_LV_PROFILE, "true");
    }
    disableDebug() {
      this.sessionStorage.setItem(PHX_LV_DEBUG, "false");
    }
    disableProfiling() {
      this.sessionStorage.removeItem(PHX_LV_PROFILE);
    }
    enableLatencySim(upperBoundMs) {
      this.enableDebug();
      console.log("latency simulator enabled for the duration of this browser session. Call disableLatencySim() to disable");
      this.sessionStorage.setItem(PHX_LV_LATENCY_SIM, upperBoundMs);
    }
    disableLatencySim() {
      this.sessionStorage.removeItem(PHX_LV_LATENCY_SIM);
    }
    getLatencySim() {
      let str = this.sessionStorage.getItem(PHX_LV_LATENCY_SIM);
      return str ? parseInt(str) : null;
    }
    getSocket() {
      return this.socket;
    }
    connect() {
      if (window.location.hostname === "localhost" && !this.isDebugDisabled()) {
        this.enableDebug();
      }
      let doConnect = () => {
        if (this.joinRootViews()) {
          this.bindTopLevelEvents();
          this.socket.connect();
        } else if (this.main) {
          this.socket.connect();
        }
      };
      if (["complete", "loaded", "interactive"].indexOf(document.readyState) >= 0) {
        doConnect();
      } else {
        document.addEventListener("DOMContentLoaded", () => doConnect());
      }
    }
    disconnect(callback) {
      clearTimeout(this.reloadWithJitterTimer);
      this.socket.disconnect(callback);
    }
    replaceTransport(transport) {
      clearTimeout(this.reloadWithJitterTimer);
      this.socket.replaceTransport(transport);
      this.connect();
    }
    execJS(el, encodedJS, eventType = null) {
      this.owner(el, (view) => js_default.exec(eventType, encodedJS, view, el));
    }
    triggerDOM(kind, args) {
      this.domCallbacks[kind](...args);
    }
    time(name, func) {
      if (!this.isProfileEnabled() || !console.time) {
        return func();
      }
      console.time(name);
      let result = func();
      console.timeEnd(name);
      return result;
    }
    log(view, kind, msgCallback) {
      if (this.viewLogger) {
        let [msg, obj] = msgCallback();
        this.viewLogger(view, kind, msg, obj);
      } else if (this.isDebugEnabled()) {
        let [msg, obj] = msgCallback();
        debug(view, kind, msg, obj);
      }
    }
    requestDOMUpdate(callback) {
      this.transitions.after(callback);
    }
    transition(time, onStart, onDone = function() {
    }) {
      this.transitions.addTransition(time, onStart, onDone);
    }
    onChannel(channel, event, cb) {
      channel.on(event, (data) => {
        let latency = this.getLatencySim();
        if (!latency) {
          cb(data);
        } else {
          console.log(`simulating ${latency}ms of latency from server to client`);
          setTimeout(() => cb(data), latency);
        }
      });
    }
    wrapPush(view, opts, push) {
      let latency = this.getLatencySim();
      let oldJoinCount = view.joinCount;
      if (!latency) {
        if (this.isConnected() && opts.timeout) {
          return push().receive("timeout", () => {
            if (view.joinCount === oldJoinCount && !view.isDestroyed()) {
              this.reloadWithJitter(view, () => {
                this.log(view, "timeout", () => ["received timeout while communicating with server. Falling back to hard refresh for recovery"]);
              });
            }
          });
        } else {
          return push();
        }
      }
      console.log(`simulating ${latency}ms of latency from client to server`);
      let fakePush = {
        receives: [],
        receive(kind, cb) {
          this.receives.push([kind, cb]);
        }
      };
      setTimeout(() => {
        if (view.isDestroyed()) {
          return;
        }
        fakePush.receives.reduce((acc, [kind, cb]) => acc.receive(kind, cb), push());
      }, latency);
      return fakePush;
    }
    reloadWithJitter(view, log) {
      clearTimeout(this.reloadWithJitterTimer);
      this.disconnect();
      let minMs = this.reloadJitterMin;
      let maxMs = this.reloadJitterMax;
      let afterMs = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
      let tries = browser_default.updateLocal(this.localStorage, window.location.pathname, CONSECUTIVE_RELOADS, 0, (count) => count + 1);
      if (tries > this.maxReloads) {
        afterMs = this.failsafeJitter;
      }
      this.reloadWithJitterTimer = setTimeout(() => {
        if (view.isDestroyed() || view.isConnected()) {
          return;
        }
        view.destroy();
        log ? log() : this.log(view, "join", () => [`encountered ${tries} consecutive reloads`]);
        if (tries > this.maxReloads) {
          this.log(view, "join", () => [`exceeded ${this.maxReloads} consecutive reloads. Entering failsafe mode`]);
        }
        if (this.hasPendingLink()) {
          window.location = this.pendingLink;
        } else {
          window.location.reload();
        }
      }, afterMs);
    }
    getHookCallbacks(name) {
      return name && name.startsWith("Phoenix.") ? hooks_default[name.split(".")[1]] : this.hooks[name];
    }
    isUnloaded() {
      return this.unloaded;
    }
    isConnected() {
      return this.socket.isConnected();
    }
    getBindingPrefix() {
      return this.bindingPrefix;
    }
    binding(kind) {
      return `${this.getBindingPrefix()}${kind}`;
    }
    channel(topic, params) {
      return this.socket.channel(topic, params);
    }
    joinRootViews() {
      let rootsFound = false;
      dom_default.all(document, `${PHX_VIEW_SELECTOR}:not([${PHX_PARENT_ID}])`, (rootEl) => {
        if (!this.getRootById(rootEl.id)) {
          let view = this.newRootView(rootEl);
          view.setHref(this.getHref());
          view.join();
          if (rootEl.getAttribute(PHX_MAIN)) {
            this.main = view;
          }
        }
        rootsFound = true;
      });
      return rootsFound;
    }
    redirect(to, flash) {
      this.disconnect();
      browser_default.redirect(to, flash);
    }
    replaceMain(href, flash, callback = null, linkRef = this.setPendingLink(href)) {
      this.outgoingMainEl = this.outgoingMainEl || this.main.el;
      let newMainEl = dom_default.cloneNode(this.outgoingMainEl, "");
      this.main.showLoader(this.loaderTimeout);
      this.main.destroy();
      this.main = this.newRootView(newMainEl, flash);
      this.main.setRedirect(href);
      this.transitionRemoves();
      this.main.join((joinCount, onDone) => {
        if (joinCount === 1 && this.commitPendingLink(linkRef)) {
          this.requestDOMUpdate(() => {
            dom_default.findPhxSticky(document).forEach((el) => newMainEl.appendChild(el));
            this.outgoingMainEl.replaceWith(newMainEl);
            this.outgoingMainEl = null;
            callback && requestAnimationFrame(callback);
            onDone();
          });
        }
      });
    }
    transitionRemoves(elements) {
      let removeAttr = this.binding("remove");
      elements = elements || dom_default.all(document, `[${removeAttr}]`);
      elements.forEach((el) => {
        if (document.body.contains(el)) {
          this.execJS(el, el.getAttribute(removeAttr), "remove");
        }
      });
    }
    isPhxView(el) {
      return el.getAttribute && el.getAttribute(PHX_SESSION) !== null;
    }
    newRootView(el, flash) {
      let view = new View(el, this, null, flash);
      this.roots[view.id] = view;
      return view;
    }
    owner(childEl, callback) {
      let view = maybe(childEl.closest(PHX_VIEW_SELECTOR), (el) => this.getViewByEl(el)) || this.main;
      if (view) {
        callback(view);
      }
    }
    withinOwners(childEl, callback) {
      this.owner(childEl, (view) => callback(view, childEl));
    }
    getViewByEl(el) {
      let rootId = el.getAttribute(PHX_ROOT_ID);
      return maybe(this.getRootById(rootId), (root) => root.getDescendentByEl(el));
    }
    getRootById(id) {
      return this.roots[id];
    }
    destroyAllViews() {
      for (let id in this.roots) {
        this.roots[id].destroy();
        delete this.roots[id];
      }
      this.main = null;
    }
    destroyViewByEl(el) {
      let root = this.getRootById(el.getAttribute(PHX_ROOT_ID));
      if (root && root.id === el.id) {
        root.destroy();
        delete this.roots[root.id];
      } else if (root) {
        root.destroyDescendent(el.id);
      }
    }
    setActiveElement(target) {
      if (this.activeElement === target) {
        return;
      }
      this.activeElement = target;
      let cancel = () => {
        if (target === this.activeElement) {
          this.activeElement = null;
        }
        target.removeEventListener("mouseup", this);
        target.removeEventListener("touchend", this);
      };
      target.addEventListener("mouseup", cancel);
      target.addEventListener("touchend", cancel);
    }
    getActiveElement() {
      if (document.activeElement === document.body) {
        return this.activeElement || document.activeElement;
      } else {
        return document.activeElement || document.body;
      }
    }
    dropActiveElement(view) {
      if (this.prevActive && view.ownsElement(this.prevActive)) {
        this.prevActive = null;
      }
    }
    restorePreviouslyActiveFocus() {
      if (this.prevActive && this.prevActive !== document.body) {
        this.prevActive.focus();
      }
    }
    blurActiveElement() {
      this.prevActive = this.getActiveElement();
      if (this.prevActive !== document.body) {
        this.prevActive.blur();
      }
    }
    bindTopLevelEvents() {
      if (this.boundTopLevelEvents) {
        return;
      }
      this.boundTopLevelEvents = true;
      this.socket.onClose((event) => {
        if (event && event.code === 1e3 && this.main) {
          this.reloadWithJitter(this.main);
        }
      });
      document.body.addEventListener("click", function() {
      });
      window.addEventListener("pageshow", (e) => {
        if (e.persisted) {
          this.getSocket().disconnect();
          this.withPageLoading({ to: window.location.href, kind: "redirect" });
          window.location.reload();
        }
      }, true);
      this.bindNav();
      this.bindClicks();
      this.bindForms();
      this.bind({ keyup: "keyup", keydown: "keydown" }, (e, type, view, targetEl, phxEvent, eventTarget) => {
        let matchKey = targetEl.getAttribute(this.binding(PHX_KEY));
        let pressedKey = e.key && e.key.toLowerCase();
        if (matchKey && matchKey.toLowerCase() !== pressedKey) {
          return;
        }
        let data = { key: e.key, ...this.eventMeta(type, e, targetEl) };
        js_default.exec(type, phxEvent, view, targetEl, ["push", { data }]);
      });
      this.bind({ blur: "focusout", focus: "focusin" }, (e, type, view, targetEl, phxEvent, eventTarget) => {
        if (!eventTarget) {
          let data = { key: e.key, ...this.eventMeta(type, e, targetEl) };
          js_default.exec(type, phxEvent, view, targetEl, ["push", { data }]);
        }
      });
      this.bind({ blur: "blur", focus: "focus" }, (e, type, view, targetEl, targetCtx, phxEvent, phxTarget) => {
        if (phxTarget === "window") {
          let data = this.eventMeta(type, e, targetEl);
          js_default.exec(type, phxEvent, view, targetEl, ["push", { data }]);
        }
      });
      window.addEventListener("dragover", (e) => e.preventDefault());
      window.addEventListener("drop", (e) => {
        e.preventDefault();
        let dropTargetId = maybe(closestPhxBinding(e.target, this.binding(PHX_DROP_TARGET)), (trueTarget) => {
          return trueTarget.getAttribute(this.binding(PHX_DROP_TARGET));
        });
        let dropTarget = dropTargetId && document.getElementById(dropTargetId);
        let files = Array.from(e.dataTransfer.files || []);
        if (!dropTarget || dropTarget.disabled || files.length === 0 || !(dropTarget.files instanceof FileList)) {
          return;
        }
        LiveUploader.trackFiles(dropTarget, files);
        dropTarget.dispatchEvent(new Event("input", { bubbles: true }));
      });
      this.on(PHX_TRACK_UPLOADS, (e) => {
        let uploadTarget = e.target;
        if (!dom_default.isUploadInput(uploadTarget)) {
          return;
        }
        let files = Array.from(e.detail.files || []).filter((f) => f instanceof File || f instanceof Blob);
        LiveUploader.trackFiles(uploadTarget, files);
        uploadTarget.dispatchEvent(new Event("input", { bubbles: true }));
      });
    }
    eventMeta(eventName, e, targetEl) {
      let callback = this.metadataCallbacks[eventName];
      return callback ? callback(e, targetEl) : {};
    }
    setPendingLink(href) {
      this.linkRef++;
      this.pendingLink = href;
      return this.linkRef;
    }
    commitPendingLink(linkRef) {
      if (this.linkRef !== linkRef) {
        return false;
      } else {
        this.href = this.pendingLink;
        this.pendingLink = null;
        return true;
      }
    }
    getHref() {
      return this.href;
    }
    hasPendingLink() {
      return !!this.pendingLink;
    }
    bind(events, callback) {
      for (let event in events) {
        let browserEventName = events[event];
        this.on(browserEventName, (e) => {
          let binding = this.binding(event);
          let windowBinding = this.binding(`window-${event}`);
          let targetPhxEvent = e.target.getAttribute && e.target.getAttribute(binding);
          if (targetPhxEvent) {
            this.debounce(e.target, e, browserEventName, () => {
              this.withinOwners(e.target, (view) => {
                callback(e, event, view, e.target, targetPhxEvent, null);
              });
            });
          } else {
            dom_default.all(document, `[${windowBinding}]`, (el) => {
              let phxEvent = el.getAttribute(windowBinding);
              this.debounce(el, e, browserEventName, () => {
                this.withinOwners(el, (view) => {
                  callback(e, event, view, el, phxEvent, "window");
                });
              });
            });
          }
        });
      }
    }
    bindClicks() {
      window.addEventListener("mousedown", (e) => this.clickStartedAtTarget = e.target);
      this.bindClick("click", "click", false);
      this.bindClick("mousedown", "capture-click", true);
    }
    bindClick(eventName, bindingName, capture) {
      let click = this.binding(bindingName);
      window.addEventListener(eventName, (e) => {
        let target = null;
        if (capture) {
          target = e.target.matches(`[${click}]`) ? e.target : e.target.querySelector(`[${click}]`);
        } else {
          let clickStartedAtTarget = this.clickStartedAtTarget || e.target;
          target = closestPhxBinding(clickStartedAtTarget, click);
          this.dispatchClickAway(e, clickStartedAtTarget);
          this.clickStartedAtTarget = null;
        }
        let phxEvent = target && target.getAttribute(click);
        if (!phxEvent) {
          return;
        }
        if (target.getAttribute("href") === "#") {
          e.preventDefault();
        }
        this.debounce(target, e, "click", () => {
          this.withinOwners(target, (view) => {
            js_default.exec("click", phxEvent, view, target, ["push", { data: this.eventMeta("click", e, target) }]);
          });
        });
      }, capture);
    }
    dispatchClickAway(e, clickStartedAt) {
      let phxClickAway = this.binding("click-away");
      dom_default.all(document, `[${phxClickAway}]`, (el) => {
        if (!(el.isSameNode(clickStartedAt) || el.contains(clickStartedAt))) {
          this.withinOwners(e.target, (view) => {
            let phxEvent = el.getAttribute(phxClickAway);
            if (js_default.isVisible(el)) {
              js_default.exec("click", phxEvent, view, el, ["push", { data: this.eventMeta("click", e, e.target) }]);
            }
          });
        }
      });
    }
    bindNav() {
      if (!browser_default.canPushState()) {
        return;
      }
      if (history.scrollRestoration) {
        history.scrollRestoration = "manual";
      }
      let scrollTimer = null;
      window.addEventListener("scroll", (_e) => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          browser_default.updateCurrentState((state) => Object.assign(state, { scroll: window.scrollY }));
        }, 100);
      });
      window.addEventListener("popstate", (event) => {
        if (!this.registerNewLocation(window.location)) {
          return;
        }
        let { type, id, root, scroll } = event.state || {};
        let href = window.location.href;
        this.requestDOMUpdate(() => {
          if (this.main.isConnected() && (type === "patch" && id === this.main.id)) {
            this.main.pushLinkPatch(href, null);
          } else {
            this.replaceMain(href, null, () => {
              if (root) {
                this.replaceRootHistory();
              }
              if (typeof scroll === "number") {
                setTimeout(() => {
                  window.scrollTo(0, scroll);
                }, 0);
              }
            });
          }
        });
      }, false);
      window.addEventListener("click", (e) => {
        let target = closestPhxBinding(e.target, PHX_LIVE_LINK);
        let type = target && target.getAttribute(PHX_LIVE_LINK);
        let wantsNewTab = e.metaKey || e.ctrlKey || e.button === 1;
        if (!type || !this.isConnected() || !this.main || wantsNewTab) {
          return;
        }
        let href = target.href;
        let linkState = target.getAttribute(PHX_LINK_STATE);
        e.preventDefault();
        e.stopImmediatePropagation();
        if (this.pendingLink === href) {
          return;
        }
        this.requestDOMUpdate(() => {
          if (type === "patch") {
            this.pushHistoryPatch(href, linkState, target);
          } else if (type === "redirect") {
            this.historyRedirect(href, linkState);
          } else {
            throw new Error(`expected ${PHX_LIVE_LINK} to be "patch" or "redirect", got: ${type}`);
          }
        });
      }, false);
    }
    dispatchEvent(event, payload = {}) {
      dom_default.dispatchEvent(window, `phx:${event}`, { detail: payload });
    }
    dispatchEvents(events) {
      events.forEach(([event, payload]) => this.dispatchEvent(event, payload));
    }
    withPageLoading(info, callback) {
      dom_default.dispatchEvent(window, "phx:page-loading-start", { detail: info });
      let done = () => dom_default.dispatchEvent(window, "phx:page-loading-stop", { detail: info });
      return callback ? callback(done) : done;
    }
    pushHistoryPatch(href, linkState, targetEl) {
      this.withPageLoading({ to: href, kind: "patch" }, (done) => {
        this.main.pushLinkPatch(href, targetEl, (linkRef) => {
          this.historyPatch(href, linkState, linkRef);
          done();
        });
      });
    }
    historyPatch(href, linkState, linkRef = this.setPendingLink(href)) {
      if (!this.commitPendingLink(linkRef)) {
        return;
      }
      browser_default.pushState(linkState, { type: "patch", id: this.main.id }, href);
      this.registerNewLocation(window.location);
    }
    historyRedirect(href, linkState, flash) {
      let scroll = window.scrollY;
      this.withPageLoading({ to: href, kind: "redirect" }, (done) => {
        this.replaceMain(href, flash, () => {
          browser_default.pushState(linkState, { type: "redirect", id: this.main.id, scroll }, href);
          this.registerNewLocation(window.location);
          done();
        });
      });
    }
    replaceRootHistory() {
      browser_default.pushState("replace", { root: true, type: "patch", id: this.main.id });
    }
    registerNewLocation(newLocation) {
      let { pathname, search } = this.currentLocation;
      if (pathname + search === newLocation.pathname + newLocation.search) {
        return false;
      } else {
        this.currentLocation = clone(newLocation);
        return true;
      }
    }
    bindForms() {
      let iterations = 0;
      this.on("submit", (e) => {
        let phxEvent = e.target.getAttribute(this.binding("submit"));
        if (!phxEvent) {
          return;
        }
        e.preventDefault();
        e.target.disabled = true;
        this.withinOwners(e.target, (view) => {
          js_default.exec("submit", phxEvent, view, e.target, ["push", {}]);
        });
      }, false);
      for (let type of ["change", "input"]) {
        this.on(type, (e) => {
          let phxChange = this.binding("change");
          let input = e.target;
          let inputEvent = input.getAttribute(phxChange);
          let formEvent = input.form && input.form.getAttribute(phxChange);
          let phxEvent = inputEvent || formEvent;
          if (!phxEvent) {
            return;
          }
          if (input.type === "number" && input.validity && input.validity.badInput) {
            return;
          }
          let dispatcher = inputEvent ? input : input.form;
          let currentIterations = iterations;
          iterations++;
          let { at, type: lastType } = dom_default.private(input, "prev-iteration") || {};
          if (at === currentIterations - 1 && type !== lastType) {
            return;
          }
          dom_default.putPrivate(input, "prev-iteration", { at: currentIterations, type });
          this.debounce(input, e, type, () => {
            this.withinOwners(dispatcher, (view) => {
              dom_default.putPrivate(input, PHX_HAS_FOCUSED, true);
              if (!dom_default.isTextualInput(input)) {
                this.setActiveElement(input);
              }
              js_default.exec("change", phxEvent, view, input, ["push", { _target: e.target.name, dispatcher }]);
            });
          });
        }, false);
      }
    }
    debounce(el, event, eventType, callback) {
      if (eventType === "blur" || eventType === "focusout") {
        return callback();
      }
      let phxDebounce = this.binding(PHX_DEBOUNCE);
      let phxThrottle = this.binding(PHX_THROTTLE);
      let defaultDebounce = this.defaults.debounce.toString();
      let defaultThrottle = this.defaults.throttle.toString();
      this.withinOwners(el, (view) => {
        let asyncFilter = () => !view.isDestroyed() && document.body.contains(el);
        dom_default.debounce(el, event, phxDebounce, defaultDebounce, phxThrottle, defaultThrottle, asyncFilter, () => {
          callback();
        });
      });
    }
    silenceEvents(callback) {
      this.silenced = true;
      callback();
      this.silenced = false;
    }
    on(event, callback) {
      window.addEventListener(event, (e) => {
        if (!this.silenced) {
          callback(e);
        }
      });
    }
  };
  var TransitionSet = class {
    constructor() {
      this.transitions = /* @__PURE__ */ new Set();
      this.pendingOps = [];
      this.reset();
    }
    reset() {
      this.transitions.forEach((timer) => {
        cancelTimeout(timer);
        this.transitions.delete(timer);
      });
      this.flushPendingOps();
    }
    after(callback) {
      if (this.size() === 0) {
        callback();
      } else {
        this.pushPendingOp(callback);
      }
    }
    addTransition(time, onStart, onDone) {
      onStart();
      let timer = setTimeout(() => {
        this.transitions.delete(timer);
        onDone();
        if (this.size() === 0) {
          this.flushPendingOps();
        }
      }, time);
      this.transitions.add(timer);
    }
    pushPendingOp(op) {
      this.pendingOps.push(op);
    }
    size() {
      return this.transitions.size;
    }
    flushPendingOps() {
      this.pendingOps.forEach((op) => op());
      this.pendingOps = [];
    }
  };

  // ../deps/phoenix/priv/static/phoenix.mjs
  var closure2 = (value) => {
    if (typeof value === "function") {
      return value;
    } else {
      let closure22 = function() {
        return value;
      };
      return closure22;
    }
  };
  var globalSelf = typeof self !== "undefined" ? self : null;
  var phxWindow = typeof window !== "undefined" ? window : null;
  var global = globalSelf || phxWindow || global;
  var DEFAULT_VSN = "2.0.0";
  var SOCKET_STATES = { connecting: 0, open: 1, closing: 2, closed: 3 };
  var DEFAULT_TIMEOUT = 1e4;
  var WS_CLOSE_NORMAL = 1e3;
  var CHANNEL_STATES = {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving"
  };
  var CHANNEL_EVENTS = {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave"
  };
  var TRANSPORTS = {
    longpoll: "longpoll",
    websocket: "websocket"
  };
  var XHR_STATES = {
    complete: 4
  };
  var Push = class {
    constructor(channel, event, payload, timeout) {
      this.channel = channel;
      this.event = event;
      this.payload = payload || function() {
        return {};
      };
      this.receivedResp = null;
      this.timeout = timeout;
      this.timeoutTimer = null;
      this.recHooks = [];
      this.sent = false;
    }
    resend(timeout) {
      this.timeout = timeout;
      this.reset();
      this.send();
    }
    send() {
      if (this.hasReceived("timeout")) {
        return;
      }
      this.startTimeout();
      this.sent = true;
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload(),
        ref: this.ref,
        join_ref: this.channel.joinRef()
      });
    }
    receive(status, callback) {
      if (this.hasReceived(status)) {
        callback(this.receivedResp.response);
      }
      this.recHooks.push({ status, callback });
      return this;
    }
    reset() {
      this.cancelRefEvent();
      this.ref = null;
      this.refEvent = null;
      this.receivedResp = null;
      this.sent = false;
    }
    matchReceive({ status, response, _ref }) {
      this.recHooks.filter((h) => h.status === status).forEach((h) => h.callback(response));
    }
    cancelRefEvent() {
      if (!this.refEvent) {
        return;
      }
      this.channel.off(this.refEvent);
    }
    cancelTimeout() {
      clearTimeout(this.timeoutTimer);
      this.timeoutTimer = null;
    }
    startTimeout() {
      if (this.timeoutTimer) {
        this.cancelTimeout();
      }
      this.ref = this.channel.socket.makeRef();
      this.refEvent = this.channel.replyEventName(this.ref);
      this.channel.on(this.refEvent, (payload) => {
        this.cancelRefEvent();
        this.cancelTimeout();
        this.receivedResp = payload;
        this.matchReceive(payload);
      });
      this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout);
    }
    hasReceived(status) {
      return this.receivedResp && this.receivedResp.status === status;
    }
    trigger(status, response) {
      this.channel.trigger(this.refEvent, { status, response });
    }
  };
  var Timer = class {
    constructor(callback, timerCalc) {
      this.callback = callback;
      this.timerCalc = timerCalc;
      this.timer = null;
      this.tries = 0;
    }
    reset() {
      this.tries = 0;
      clearTimeout(this.timer);
    }
    scheduleTimeout() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.tries = this.tries + 1;
        this.callback();
      }, this.timerCalc(this.tries + 1));
    }
  };
  var Channel = class {
    constructor(topic, params, socket) {
      this.state = CHANNEL_STATES.closed;
      this.topic = topic;
      this.params = closure2(params || {});
      this.socket = socket;
      this.bindings = [];
      this.bindingRef = 0;
      this.timeout = this.socket.timeout;
      this.joinedOnce = false;
      this.joinPush = new Push(this, CHANNEL_EVENTS.join, this.params, this.timeout);
      this.pushBuffer = [];
      this.stateChangeRefs = [];
      this.rejoinTimer = new Timer(() => {
        if (this.socket.isConnected()) {
          this.rejoin();
        }
      }, this.socket.rejoinAfterMs);
      this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset()));
      this.stateChangeRefs.push(this.socket.onOpen(() => {
        this.rejoinTimer.reset();
        if (this.isErrored()) {
          this.rejoin();
        }
      }));
      this.joinPush.receive("ok", () => {
        this.state = CHANNEL_STATES.joined;
        this.rejoinTimer.reset();
        this.pushBuffer.forEach((pushEvent) => pushEvent.send());
        this.pushBuffer = [];
      });
      this.joinPush.receive("error", () => {
        this.state = CHANNEL_STATES.errored;
        if (this.socket.isConnected()) {
          this.rejoinTimer.scheduleTimeout();
        }
      });
      this.onClose(() => {
        this.rejoinTimer.reset();
        if (this.socket.hasLogger())
          this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`);
        this.state = CHANNEL_STATES.closed;
        this.socket.remove(this);
      });
      this.onError((reason) => {
        if (this.socket.hasLogger())
          this.socket.log("channel", `error ${this.topic}`, reason);
        if (this.isJoining()) {
          this.joinPush.reset();
        }
        this.state = CHANNEL_STATES.errored;
        if (this.socket.isConnected()) {
          this.rejoinTimer.scheduleTimeout();
        }
      });
      this.joinPush.receive("timeout", () => {
        if (this.socket.hasLogger())
          this.socket.log("channel", `timeout ${this.topic} (${this.joinRef()})`, this.joinPush.timeout);
        let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure2({}), this.timeout);
        leavePush.send();
        this.state = CHANNEL_STATES.errored;
        this.joinPush.reset();
        if (this.socket.isConnected()) {
          this.rejoinTimer.scheduleTimeout();
        }
      });
      this.on(CHANNEL_EVENTS.reply, (payload, ref) => {
        this.trigger(this.replyEventName(ref), payload);
      });
    }
    join(timeout = this.timeout) {
      if (this.joinedOnce) {
        throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
      } else {
        this.timeout = timeout;
        this.joinedOnce = true;
        this.rejoin();
        return this.joinPush;
      }
    }
    onClose(callback) {
      this.on(CHANNEL_EVENTS.close, callback);
    }
    onError(callback) {
      return this.on(CHANNEL_EVENTS.error, (reason) => callback(reason));
    }
    on(event, callback) {
      let ref = this.bindingRef++;
      this.bindings.push({ event, ref, callback });
      return ref;
    }
    off(event, ref) {
      this.bindings = this.bindings.filter((bind) => {
        return !(bind.event === event && (typeof ref === "undefined" || ref === bind.ref));
      });
    }
    canPush() {
      return this.socket.isConnected() && this.isJoined();
    }
    push(event, payload, timeout = this.timeout) {
      payload = payload || {};
      if (!this.joinedOnce) {
        throw new Error(`tried to push '${event}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
      }
      let pushEvent = new Push(this, event, function() {
        return payload;
      }, timeout);
      if (this.canPush()) {
        pushEvent.send();
      } else {
        pushEvent.startTimeout();
        this.pushBuffer.push(pushEvent);
      }
      return pushEvent;
    }
    leave(timeout = this.timeout) {
      this.rejoinTimer.reset();
      this.joinPush.cancelTimeout();
      this.state = CHANNEL_STATES.leaving;
      let onClose = () => {
        if (this.socket.hasLogger())
          this.socket.log("channel", `leave ${this.topic}`);
        this.trigger(CHANNEL_EVENTS.close, "leave");
      };
      let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure2({}), timeout);
      leavePush.receive("ok", () => onClose()).receive("timeout", () => onClose());
      leavePush.send();
      if (!this.canPush()) {
        leavePush.trigger("ok", {});
      }
      return leavePush;
    }
    onMessage(_event, payload, _ref) {
      return payload;
    }
    isMember(topic, event, payload, joinRef) {
      if (this.topic !== topic) {
        return false;
      }
      if (joinRef && joinRef !== this.joinRef()) {
        if (this.socket.hasLogger())
          this.socket.log("channel", "dropping outdated message", { topic, event, payload, joinRef });
        return false;
      } else {
        return true;
      }
    }
    joinRef() {
      return this.joinPush.ref;
    }
    rejoin(timeout = this.timeout) {
      if (this.isLeaving()) {
        return;
      }
      this.socket.leaveOpenTopic(this.topic);
      this.state = CHANNEL_STATES.joining;
      this.joinPush.resend(timeout);
    }
    trigger(event, payload, ref, joinRef) {
      let handledPayload = this.onMessage(event, payload, ref, joinRef);
      if (payload && !handledPayload) {
        throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
      }
      let eventBindings = this.bindings.filter((bind) => bind.event === event);
      for (let i = 0; i < eventBindings.length; i++) {
        let bind = eventBindings[i];
        bind.callback(handledPayload, ref, joinRef || this.joinRef());
      }
    }
    replyEventName(ref) {
      return `chan_reply_${ref}`;
    }
    isClosed() {
      return this.state === CHANNEL_STATES.closed;
    }
    isErrored() {
      return this.state === CHANNEL_STATES.errored;
    }
    isJoined() {
      return this.state === CHANNEL_STATES.joined;
    }
    isJoining() {
      return this.state === CHANNEL_STATES.joining;
    }
    isLeaving() {
      return this.state === CHANNEL_STATES.leaving;
    }
  };
  var Ajax = class {
    static request(method, endPoint, accept, body, timeout, ontimeout, callback) {
      if (global.XDomainRequest) {
        let req = new global.XDomainRequest();
        return this.xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback);
      } else {
        let req = new global.XMLHttpRequest();
        return this.xhrRequest(req, method, endPoint, accept, body, timeout, ontimeout, callback);
      }
    }
    static xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback) {
      req.timeout = timeout;
      req.open(method, endPoint);
      req.onload = () => {
        let response = this.parseJSON(req.responseText);
        callback && callback(response);
      };
      if (ontimeout) {
        req.ontimeout = ontimeout;
      }
      req.onprogress = () => {
      };
      req.send(body);
      return req;
    }
    static xhrRequest(req, method, endPoint, accept, body, timeout, ontimeout, callback) {
      req.open(method, endPoint, true);
      req.timeout = timeout;
      req.setRequestHeader("Content-Type", accept);
      req.onerror = () => callback && callback(null);
      req.onreadystatechange = () => {
        if (req.readyState === XHR_STATES.complete && callback) {
          let response = this.parseJSON(req.responseText);
          callback(response);
        }
      };
      if (ontimeout) {
        req.ontimeout = ontimeout;
      }
      req.send(body);
      return req;
    }
    static parseJSON(resp) {
      if (!resp || resp === "") {
        return null;
      }
      try {
        return JSON.parse(resp);
      } catch (e) {
        console && console.log("failed to parse JSON response", resp);
        return null;
      }
    }
    static serialize(obj, parentKey) {
      let queryStr = [];
      for (var key in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
          continue;
        }
        let paramKey = parentKey ? `${parentKey}[${key}]` : key;
        let paramVal = obj[key];
        if (typeof paramVal === "object") {
          queryStr.push(this.serialize(paramVal, paramKey));
        } else {
          queryStr.push(encodeURIComponent(paramKey) + "=" + encodeURIComponent(paramVal));
        }
      }
      return queryStr.join("&");
    }
    static appendParams(url, params) {
      if (Object.keys(params).length === 0) {
        return url;
      }
      let prefix = url.match(/\?/) ? "&" : "?";
      return `${url}${prefix}${this.serialize(params)}`;
    }
  };
  var LongPoll = class {
    constructor(endPoint) {
      this.endPoint = null;
      this.token = null;
      this.skipHeartbeat = true;
      this.reqs = /* @__PURE__ */ new Set();
      this.onopen = function() {
      };
      this.onerror = function() {
      };
      this.onmessage = function() {
      };
      this.onclose = function() {
      };
      this.pollEndpoint = this.normalizeEndpoint(endPoint);
      this.readyState = SOCKET_STATES.connecting;
      this.poll();
    }
    normalizeEndpoint(endPoint) {
      return endPoint.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + TRANSPORTS.websocket), "$1/" + TRANSPORTS.longpoll);
    }
    endpointURL() {
      return Ajax.appendParams(this.pollEndpoint, { token: this.token });
    }
    closeAndRetry(code, reason, wasClean) {
      this.close(code, reason, wasClean);
      this.readyState = SOCKET_STATES.connecting;
    }
    ontimeout() {
      this.onerror("timeout");
      this.closeAndRetry(1005, "timeout", false);
    }
    isActive() {
      return this.readyState === SOCKET_STATES.open || this.readyState === SOCKET_STATES.connecting;
    }
    poll() {
      this.ajax("GET", null, () => this.ontimeout(), (resp) => {
        if (resp) {
          var { status, token, messages } = resp;
          this.token = token;
        } else {
          status = 0;
        }
        switch (status) {
          case 200:
            messages.forEach((msg) => {
              setTimeout(() => this.onmessage({ data: msg }), 0);
            });
            this.poll();
            break;
          case 204:
            this.poll();
            break;
          case 410:
            this.readyState = SOCKET_STATES.open;
            this.onopen({});
            this.poll();
            break;
          case 403:
            this.onerror(403);
            this.close(1008, "forbidden", false);
            break;
          case 0:
          case 500:
            this.onerror(500);
            this.closeAndRetry(1011, "internal server error", 500);
            break;
          default:
            throw new Error(`unhandled poll status ${status}`);
        }
      });
    }
    send(body) {
      this.ajax("POST", body, () => this.onerror("timeout"), (resp) => {
        if (!resp || resp.status !== 200) {
          this.onerror(resp && resp.status);
          this.closeAndRetry(1011, "internal server error", false);
        }
      });
    }
    close(code, reason, wasClean) {
      for (let req of this.reqs) {
        req.abort();
      }
      this.readyState = SOCKET_STATES.closed;
      let opts = Object.assign({ code: 1e3, reason: void 0, wasClean: true }, { code, reason, wasClean });
      if (typeof CloseEvent !== "undefined") {
        this.onclose(new CloseEvent("close", opts));
      } else {
        this.onclose(opts);
      }
    }
    ajax(method, body, onCallerTimeout, callback) {
      let req;
      let ontimeout = () => {
        this.reqs.delete(req);
        onCallerTimeout();
      };
      req = Ajax.request(method, this.endpointURL(), "application/json", body, this.timeout, ontimeout, (resp) => {
        this.reqs.delete(req);
        if (this.isActive()) {
          callback(resp);
        }
      });
      this.reqs.add(req);
    }
  };
  var serializer_default = {
    HEADER_LENGTH: 1,
    META_LENGTH: 4,
    KINDS: { push: 0, reply: 1, broadcast: 2 },
    encode(msg, callback) {
      if (msg.payload.constructor === ArrayBuffer) {
        return callback(this.binaryEncode(msg));
      } else {
        let payload = [msg.join_ref, msg.ref, msg.topic, msg.event, msg.payload];
        return callback(JSON.stringify(payload));
      }
    },
    decode(rawPayload, callback) {
      if (rawPayload.constructor === ArrayBuffer) {
        return callback(this.binaryDecode(rawPayload));
      } else {
        let [join_ref, ref, topic, event, payload] = JSON.parse(rawPayload);
        return callback({ join_ref, ref, topic, event, payload });
      }
    },
    binaryEncode(message) {
      let { join_ref, ref, event, topic, payload } = message;
      let metaLength = this.META_LENGTH + join_ref.length + ref.length + topic.length + event.length;
      let header = new ArrayBuffer(this.HEADER_LENGTH + metaLength);
      let view = new DataView(header);
      let offset = 0;
      view.setUint8(offset++, this.KINDS.push);
      view.setUint8(offset++, join_ref.length);
      view.setUint8(offset++, ref.length);
      view.setUint8(offset++, topic.length);
      view.setUint8(offset++, event.length);
      Array.from(join_ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(topic, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(event, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      var combined = new Uint8Array(header.byteLength + payload.byteLength);
      combined.set(new Uint8Array(header), 0);
      combined.set(new Uint8Array(payload), header.byteLength);
      return combined.buffer;
    },
    binaryDecode(buffer) {
      let view = new DataView(buffer);
      let kind = view.getUint8(0);
      let decoder = new TextDecoder();
      switch (kind) {
        case this.KINDS.push:
          return this.decodePush(buffer, view, decoder);
        case this.KINDS.reply:
          return this.decodeReply(buffer, view, decoder);
        case this.KINDS.broadcast:
          return this.decodeBroadcast(buffer, view, decoder);
      }
    },
    decodePush(buffer, view, decoder) {
      let joinRefSize = view.getUint8(1);
      let topicSize = view.getUint8(2);
      let eventSize = view.getUint8(3);
      let offset = this.HEADER_LENGTH + this.META_LENGTH - 1;
      let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
      offset = offset + joinRefSize;
      let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      let event = decoder.decode(buffer.slice(offset, offset + eventSize));
      offset = offset + eventSize;
      let data = buffer.slice(offset, buffer.byteLength);
      return { join_ref: joinRef, ref: null, topic, event, payload: data };
    },
    decodeReply(buffer, view, decoder) {
      let joinRefSize = view.getUint8(1);
      let refSize = view.getUint8(2);
      let topicSize = view.getUint8(3);
      let eventSize = view.getUint8(4);
      let offset = this.HEADER_LENGTH + this.META_LENGTH;
      let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
      offset = offset + joinRefSize;
      let ref = decoder.decode(buffer.slice(offset, offset + refSize));
      offset = offset + refSize;
      let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      let event = decoder.decode(buffer.slice(offset, offset + eventSize));
      offset = offset + eventSize;
      let data = buffer.slice(offset, buffer.byteLength);
      let payload = { status: event, response: data };
      return { join_ref: joinRef, ref, topic, event: CHANNEL_EVENTS.reply, payload };
    },
    decodeBroadcast(buffer, view, decoder) {
      let topicSize = view.getUint8(1);
      let eventSize = view.getUint8(2);
      let offset = this.HEADER_LENGTH + 2;
      let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      let event = decoder.decode(buffer.slice(offset, offset + eventSize));
      offset = offset + eventSize;
      let data = buffer.slice(offset, buffer.byteLength);
      return { join_ref: null, ref: null, topic, event, payload: data };
    }
  };
  var Socket = class {
    constructor(endPoint, opts = {}) {
      this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] };
      this.channels = [];
      this.sendBuffer = [];
      this.ref = 0;
      this.timeout = opts.timeout || DEFAULT_TIMEOUT;
      this.transport = opts.transport || global.WebSocket || LongPoll;
      this.establishedConnections = 0;
      this.defaultEncoder = serializer_default.encode.bind(serializer_default);
      this.defaultDecoder = serializer_default.decode.bind(serializer_default);
      this.closeWasClean = false;
      this.binaryType = opts.binaryType || "arraybuffer";
      this.connectClock = 1;
      if (this.transport !== LongPoll) {
        this.encode = opts.encode || this.defaultEncoder;
        this.decode = opts.decode || this.defaultDecoder;
      } else {
        this.encode = this.defaultEncoder;
        this.decode = this.defaultDecoder;
      }
      let awaitingConnectionOnPageShow = null;
      if (phxWindow && phxWindow.addEventListener) {
        phxWindow.addEventListener("pagehide", (_e) => {
          if (this.conn) {
            this.disconnect();
            awaitingConnectionOnPageShow = this.connectClock;
          }
        });
        phxWindow.addEventListener("pageshow", (_e) => {
          if (awaitingConnectionOnPageShow === this.connectClock) {
            awaitingConnectionOnPageShow = null;
            this.connect();
          }
        });
      }
      this.heartbeatIntervalMs = opts.heartbeatIntervalMs || 3e4;
      this.rejoinAfterMs = (tries) => {
        if (opts.rejoinAfterMs) {
          return opts.rejoinAfterMs(tries);
        } else {
          return [1e3, 2e3, 5e3][tries - 1] || 1e4;
        }
      };
      this.reconnectAfterMs = (tries) => {
        if (opts.reconnectAfterMs) {
          return opts.reconnectAfterMs(tries);
        } else {
          return [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][tries - 1] || 5e3;
        }
      };
      this.logger = opts.logger || null;
      this.longpollerTimeout = opts.longpollerTimeout || 2e4;
      this.params = closure2(opts.params || {});
      this.endPoint = `${endPoint}/${TRANSPORTS.websocket}`;
      this.vsn = opts.vsn || DEFAULT_VSN;
      this.heartbeatTimer = null;
      this.pendingHeartbeatRef = null;
      this.reconnectTimer = new Timer(() => {
        this.teardown(() => this.connect());
      }, this.reconnectAfterMs);
    }
    getLongPollTransport() {
      return LongPoll;
    }
    replaceTransport(newTransport) {
      this.connectClock++;
      this.closeWasClean = true;
      this.reconnectTimer.reset();
      this.sendBuffer = [];
      if (this.conn) {
        this.conn.close();
        this.conn = null;
      }
      this.transport = newTransport;
    }
    protocol() {
      return location.protocol.match(/^https/) ? "wss" : "ws";
    }
    endPointURL() {
      let uri = Ajax.appendParams(Ajax.appendParams(this.endPoint, this.params()), { vsn: this.vsn });
      if (uri.charAt(0) !== "/") {
        return uri;
      }
      if (uri.charAt(1) === "/") {
        return `${this.protocol()}:${uri}`;
      }
      return `${this.protocol()}://${location.host}${uri}`;
    }
    disconnect(callback, code, reason) {
      this.connectClock++;
      this.closeWasClean = true;
      this.reconnectTimer.reset();
      this.teardown(callback, code, reason);
    }
    connect(params) {
      if (params) {
        console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor");
        this.params = closure2(params);
      }
      if (this.conn) {
        return;
      }
      this.connectClock++;
      this.closeWasClean = false;
      this.conn = new this.transport(this.endPointURL());
      this.conn.binaryType = this.binaryType;
      this.conn.timeout = this.longpollerTimeout;
      this.conn.onopen = () => this.onConnOpen();
      this.conn.onerror = (error) => this.onConnError(error);
      this.conn.onmessage = (event) => this.onConnMessage(event);
      this.conn.onclose = (event) => this.onConnClose(event);
    }
    log(kind, msg, data) {
      this.logger(kind, msg, data);
    }
    hasLogger() {
      return this.logger !== null;
    }
    onOpen(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.open.push([ref, callback]);
      return ref;
    }
    onClose(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.close.push([ref, callback]);
      return ref;
    }
    onError(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.error.push([ref, callback]);
      return ref;
    }
    onMessage(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.message.push([ref, callback]);
      return ref;
    }
    ping(callback) {
      if (!this.isConnected()) {
        return false;
      }
      let ref = this.makeRef();
      let startTime = Date.now();
      this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref });
      let onMsgRef = this.onMessage((msg) => {
        if (msg.ref === ref) {
          this.off([onMsgRef]);
          callback(Date.now() - startTime);
        }
      });
      return true;
    }
    onConnOpen() {
      if (this.hasLogger())
        this.log("transport", `connected to ${this.endPointURL()}`);
      this.closeWasClean = false;
      this.establishedConnections++;
      this.flushSendBuffer();
      this.reconnectTimer.reset();
      this.resetHeartbeat();
      this.stateChangeCallbacks.open.forEach(([, callback]) => callback());
    }
    heartbeatTimeout() {
      if (this.pendingHeartbeatRef) {
        this.pendingHeartbeatRef = null;
        if (this.hasLogger()) {
          this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
        }
        this.abnormalClose("heartbeat timeout");
      }
    }
    resetHeartbeat() {
      if (this.conn && this.conn.skipHeartbeat) {
        return;
      }
      this.pendingHeartbeatRef = null;
      clearTimeout(this.heartbeatTimer);
      setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
    }
    teardown(callback, code, reason) {
      if (!this.conn) {
        return callback && callback();
      }
      this.waitForBufferDone(() => {
        if (this.conn) {
          if (code) {
            this.conn.close(code, reason || "");
          } else {
            this.conn.close();
          }
        }
        this.waitForSocketClosed(() => {
          if (this.conn) {
            this.conn.onclose = function() {
            };
            this.conn = null;
          }
          callback && callback();
        });
      });
    }
    waitForBufferDone(callback, tries = 1) {
      if (tries === 5 || !this.conn || !this.conn.bufferedAmount) {
        callback();
        return;
      }
      setTimeout(() => {
        this.waitForBufferDone(callback, tries + 1);
      }, 150 * tries);
    }
    waitForSocketClosed(callback, tries = 1) {
      if (tries === 5 || !this.conn || this.conn.readyState === SOCKET_STATES.closed) {
        callback();
        return;
      }
      setTimeout(() => {
        this.waitForSocketClosed(callback, tries + 1);
      }, 150 * tries);
    }
    onConnClose(event) {
      let closeCode = event && event.code;
      if (this.hasLogger())
        this.log("transport", "close", event);
      this.triggerChanError();
      clearTimeout(this.heartbeatTimer);
      if (!this.closeWasClean && closeCode !== 1e3) {
        this.reconnectTimer.scheduleTimeout();
      }
      this.stateChangeCallbacks.close.forEach(([, callback]) => callback(event));
    }
    onConnError(error) {
      if (this.hasLogger())
        this.log("transport", error);
      let transportBefore = this.transport;
      let establishedBefore = this.establishedConnections;
      this.stateChangeCallbacks.error.forEach(([, callback]) => {
        callback(error, transportBefore, establishedBefore);
      });
      if (transportBefore === this.transport || establishedBefore > 0) {
        this.triggerChanError();
      }
    }
    triggerChanError() {
      this.channels.forEach((channel) => {
        if (!(channel.isErrored() || channel.isLeaving() || channel.isClosed())) {
          channel.trigger(CHANNEL_EVENTS.error);
        }
      });
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case SOCKET_STATES.connecting:
          return "connecting";
        case SOCKET_STATES.open:
          return "open";
        case SOCKET_STATES.closing:
          return "closing";
        default:
          return "closed";
      }
    }
    isConnected() {
      return this.connectionState() === "open";
    }
    remove(channel) {
      this.off(channel.stateChangeRefs);
      this.channels = this.channels.filter((c) => c.joinRef() !== channel.joinRef());
    }
    off(refs) {
      for (let key in this.stateChangeCallbacks) {
        this.stateChangeCallbacks[key] = this.stateChangeCallbacks[key].filter(([ref]) => {
          return refs.indexOf(ref) === -1;
        });
      }
    }
    channel(topic, chanParams = {}) {
      let chan = new Channel(topic, chanParams, this);
      this.channels.push(chan);
      return chan;
    }
    push(data) {
      if (this.hasLogger()) {
        let { topic, event, payload, ref, join_ref } = data;
        this.log("push", `${topic} ${event} (${join_ref}, ${ref})`, payload);
      }
      if (this.isConnected()) {
        this.encode(data, (result) => this.conn.send(result));
      } else {
        this.sendBuffer.push(() => this.encode(data, (result) => this.conn.send(result)));
      }
    }
    makeRef() {
      let newRef = this.ref + 1;
      if (newRef === this.ref) {
        this.ref = 0;
      } else {
        this.ref = newRef;
      }
      return this.ref.toString();
    }
    sendHeartbeat() {
      if (this.pendingHeartbeatRef && !this.isConnected()) {
        return;
      }
      this.pendingHeartbeatRef = this.makeRef();
      this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef });
      this.heartbeatTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
    }
    abnormalClose(reason) {
      this.closeWasClean = false;
      if (this.isConnected()) {
        this.conn.close(WS_CLOSE_NORMAL, reason);
      }
    }
    flushSendBuffer() {
      if (this.isConnected() && this.sendBuffer.length > 0) {
        this.sendBuffer.forEach((callback) => callback());
        this.sendBuffer = [];
      }
    }
    onConnMessage(rawMessage) {
      this.decode(rawMessage.data, (msg) => {
        let { topic, event, payload, ref, join_ref } = msg;
        if (ref && ref === this.pendingHeartbeatRef) {
          clearTimeout(this.heartbeatTimer);
          this.pendingHeartbeatRef = null;
          setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
        }
        if (this.hasLogger())
          this.log("receive", `${payload.status || ""} ${topic} ${event} ${ref && "(" + ref + ")" || ""}`, payload);
        for (let i = 0; i < this.channels.length; i++) {
          const channel = this.channels[i];
          if (!channel.isMember(topic, event, payload, join_ref)) {
            continue;
          }
          channel.trigger(event, payload, ref, join_ref);
        }
        for (let i = 0; i < this.stateChangeCallbacks.message.length; i++) {
          let [, callback] = this.stateChangeCallbacks.message[i];
          callback(msg);
        }
      });
    }
    leaveOpenTopic(topic) {
      let dupChannel = this.channels.find((c) => c.topic === topic && (c.isJoined() || c.isJoining()));
      if (dupChannel) {
        if (this.hasLogger())
          this.log("transport", `leaving duplicate topic "${topic}"`);
        dupChannel.leave();
      }
    }
  };

  // js/app.js
  var Hooks2 = {};
  Hooks2.HTMLEditor = {
    loadHTMLEditor() {
      const element = this.el;
      Promise.resolve().then(() => (init_lexical(), lexical_exports)).then(
        ({ HTMLEditor: HTMLEditor2 }) => {
          HTMLEditor2(element);
        }
      );
    },
    mounted() {
      this.loadHTMLEditor();
    },
    updated() {
      this.loadHTMLEditor();
    }
  };
  var csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
  var liveSocket = new LiveSocket("/live", Socket, {
    params: { _csrf_token: csrfToken },
    hooks: Hooks2
  });
  liveSocket.connect();
  window.liveSocket = liveSocket;
})();
