(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/orderedmap/dist/index.js
  function OrderedMap(content) {
    this.content = content;
  }
  var dist_default;
  var init_dist = __esm({
    "node_modules/orderedmap/dist/index.js"() {
      OrderedMap.prototype = {
        constructor: OrderedMap,
        find: function(key) {
          for (var i = 0; i < this.content.length; i += 2)
            if (this.content[i] === key)
              return i;
          return -1;
        },
        get: function(key) {
          var found2 = this.find(key);
          return found2 == -1 ? void 0 : this.content[found2 + 1];
        },
        update: function(key, value, newKey) {
          var self2 = newKey && newKey != key ? this.remove(newKey) : this;
          var found2 = self2.find(key), content = self2.content.slice();
          if (found2 == -1) {
            content.push(newKey || key, value);
          } else {
            content[found2 + 1] = value;
            if (newKey)
              content[found2] = newKey;
          }
          return new OrderedMap(content);
        },
        remove: function(key) {
          var found2 = this.find(key);
          if (found2 == -1)
            return this;
          var content = this.content.slice();
          content.splice(found2, 2);
          return new OrderedMap(content);
        },
        addToStart: function(key, value) {
          return new OrderedMap([key, value].concat(this.remove(key).content));
        },
        addToEnd: function(key, value) {
          var content = this.remove(key).content.slice();
          content.push(key, value);
          return new OrderedMap(content);
        },
        addBefore: function(place, key, value) {
          var without = this.remove(key), content = without.content.slice();
          var found2 = without.find(place);
          content.splice(found2 == -1 ? content.length : found2, 0, key, value);
          return new OrderedMap(content);
        },
        forEach: function(f) {
          for (var i = 0; i < this.content.length; i += 2)
            f(this.content[i], this.content[i + 1]);
        },
        prepend: function(map2) {
          map2 = OrderedMap.from(map2);
          if (!map2.size)
            return this;
          return new OrderedMap(map2.content.concat(this.subtract(map2).content));
        },
        append: function(map2) {
          map2 = OrderedMap.from(map2);
          if (!map2.size)
            return this;
          return new OrderedMap(this.subtract(map2).content.concat(map2.content));
        },
        subtract: function(map2) {
          var result = this;
          map2 = OrderedMap.from(map2);
          for (var i = 0; i < map2.content.length; i += 2)
            result = result.remove(map2.content[i]);
          return result;
        },
        get size() {
          return this.content.length >> 1;
        }
      };
      OrderedMap.from = function(value) {
        if (value instanceof OrderedMap)
          return value;
        var content = [];
        if (value)
          for (var prop in value)
            content.push(prop, value[prop]);
        return new OrderedMap(content);
      };
      dist_default = OrderedMap;
    }
  });

  // node_modules/prosemirror-model/dist/index.js
  function findDiffStart(a, b, pos) {
    for (let i = 0; ; i++) {
      if (i == a.childCount || i == b.childCount)
        return a.childCount == b.childCount ? null : pos;
      let childA = a.child(i), childB = b.child(i);
      if (childA == childB) {
        pos += childA.nodeSize;
        continue;
      }
      if (!childA.sameMarkup(childB))
        return pos;
      if (childA.isText && childA.text != childB.text) {
        for (let j = 0; childA.text[j] == childB.text[j]; j++)
          pos++;
        return pos;
      }
      if (childA.content.size || childB.content.size) {
        let inner = findDiffStart(childA.content, childB.content, pos + 1);
        if (inner != null)
          return inner;
      }
      pos += childA.nodeSize;
    }
  }
  function findDiffEnd(a, b, posA, posB) {
    for (let iA = a.childCount, iB = b.childCount; ; ) {
      if (iA == 0 || iB == 0)
        return iA == iB ? null : { a: posA, b: posB };
      let childA = a.child(--iA), childB = b.child(--iB), size = childA.nodeSize;
      if (childA == childB) {
        posA -= size;
        posB -= size;
        continue;
      }
      if (!childA.sameMarkup(childB))
        return { a: posA, b: posB };
      if (childA.isText && childA.text != childB.text) {
        let same = 0, minSize = Math.min(childA.text.length, childB.text.length);
        while (same < minSize && childA.text[childA.text.length - same - 1] == childB.text[childB.text.length - same - 1]) {
          same++;
          posA--;
          posB--;
        }
        return { a: posA, b: posB };
      }
      if (childA.content.size || childB.content.size) {
        let inner = findDiffEnd(childA.content, childB.content, posA - 1, posB - 1);
        if (inner)
          return inner;
      }
      posA -= size;
      posB -= size;
    }
  }
  function retIndex(index, offset) {
    found.index = index;
    found.offset = offset;
    return found;
  }
  function compareDeep(a, b) {
    if (a === b)
      return true;
    if (!(a && typeof a == "object") || !(b && typeof b == "object"))
      return false;
    let array = Array.isArray(a);
    if (Array.isArray(b) != array)
      return false;
    if (array) {
      if (a.length != b.length)
        return false;
      for (let i = 0; i < a.length; i++)
        if (!compareDeep(a[i], b[i]))
          return false;
    } else {
      for (let p in a)
        if (!(p in b) || !compareDeep(a[p], b[p]))
          return false;
      for (let p in b)
        if (!(p in a))
          return false;
    }
    return true;
  }
  function removeRange(content, from2, to) {
    let { index, offset } = content.findIndex(from2), child = content.maybeChild(index);
    let { index: indexTo, offset: offsetTo } = content.findIndex(to);
    if (offset == from2 || child.isText) {
      if (offsetTo != to && !content.child(indexTo).isText)
        throw new RangeError("Removing non-flat range");
      return content.cut(0, from2).append(content.cut(to));
    }
    if (index != indexTo)
      throw new RangeError("Removing non-flat range");
    return content.replaceChild(index, child.copy(removeRange(child.content, from2 - offset - 1, to - offset - 1)));
  }
  function insertInto(content, dist, insert, parent) {
    let { index, offset } = content.findIndex(dist), child = content.maybeChild(index);
    if (offset == dist || child.isText) {
      if (parent && !parent.canReplace(index, index, insert))
        return null;
      return content.cut(0, dist).append(insert).append(content.cut(dist));
    }
    let inner = insertInto(child.content, dist - offset - 1, insert);
    return inner && content.replaceChild(index, child.copy(inner));
  }
  function replace($from, $to, slice2) {
    if (slice2.openStart > $from.depth)
      throw new ReplaceError("Inserted content deeper than insertion position");
    if ($from.depth - slice2.openStart != $to.depth - slice2.openEnd)
      throw new ReplaceError("Inconsistent open depths");
    return replaceOuter($from, $to, slice2, 0);
  }
  function replaceOuter($from, $to, slice2, depth) {
    let index = $from.index(depth), node = $from.node(depth);
    if (index == $to.index(depth) && depth < $from.depth - slice2.openStart) {
      let inner = replaceOuter($from, $to, slice2, depth + 1);
      return node.copy(node.content.replaceChild(index, inner));
    } else if (!slice2.content.size) {
      return close(node, replaceTwoWay($from, $to, depth));
    } else if (!slice2.openStart && !slice2.openEnd && $from.depth == depth && $to.depth == depth) {
      let parent = $from.parent, content = parent.content;
      return close(parent, content.cut(0, $from.parentOffset).append(slice2.content).append(content.cut($to.parentOffset)));
    } else {
      let { start, end } = prepareSliceForReplace(slice2, $from);
      return close(node, replaceThreeWay($from, start, end, $to, depth));
    }
  }
  function checkJoin(main, sub) {
    if (!sub.type.compatibleContent(main.type))
      throw new ReplaceError("Cannot join " + sub.type.name + " onto " + main.type.name);
  }
  function joinable($before, $after, depth) {
    let node = $before.node(depth);
    checkJoin(node, $after.node(depth));
    return node;
  }
  function addNode(child, target) {
    let last = target.length - 1;
    if (last >= 0 && child.isText && child.sameMarkup(target[last]))
      target[last] = child.withText(target[last].text + child.text);
    else
      target.push(child);
  }
  function addRange($start, $end, depth, target) {
    let node = ($end || $start).node(depth);
    let startIndex = 0, endIndex = $end ? $end.index(depth) : node.childCount;
    if ($start) {
      startIndex = $start.index(depth);
      if ($start.depth > depth) {
        startIndex++;
      } else if ($start.textOffset) {
        addNode($start.nodeAfter, target);
        startIndex++;
      }
    }
    for (let i = startIndex; i < endIndex; i++)
      addNode(node.child(i), target);
    if ($end && $end.depth == depth && $end.textOffset)
      addNode($end.nodeBefore, target);
  }
  function close(node, content) {
    if (!node.type.validContent(content))
      throw new ReplaceError("Invalid content for node " + node.type.name);
    return node.copy(content);
  }
  function replaceThreeWay($from, $start, $end, $to, depth) {
    let openStart = $from.depth > depth && joinable($from, $start, depth + 1);
    let openEnd = $to.depth > depth && joinable($end, $to, depth + 1);
    let content = [];
    addRange(null, $from, depth, content);
    if (openStart && openEnd && $start.index(depth) == $end.index(depth)) {
      checkJoin(openStart, openEnd);
      addNode(close(openStart, replaceThreeWay($from, $start, $end, $to, depth + 1)), content);
    } else {
      if (openStart)
        addNode(close(openStart, replaceTwoWay($from, $start, depth + 1)), content);
      addRange($start, $end, depth, content);
      if (openEnd)
        addNode(close(openEnd, replaceTwoWay($end, $to, depth + 1)), content);
    }
    addRange($to, null, depth, content);
    return new Fragment(content);
  }
  function replaceTwoWay($from, $to, depth) {
    let content = [];
    addRange(null, $from, depth, content);
    if ($from.depth > depth) {
      let type = joinable($from, $to, depth + 1);
      addNode(close(type, replaceTwoWay($from, $to, depth + 1)), content);
    }
    addRange($to, null, depth, content);
    return new Fragment(content);
  }
  function prepareSliceForReplace(slice2, $along) {
    let extra = $along.depth - slice2.openStart, parent = $along.node(extra);
    let node = parent.copy(slice2.content);
    for (let i = extra - 1; i >= 0; i--)
      node = $along.node(i).copy(Fragment.from(node));
    return {
      start: node.resolveNoCache(slice2.openStart + extra),
      end: node.resolveNoCache(node.content.size - slice2.openEnd - extra)
    };
  }
  function wrapMarks(marks, str) {
    for (let i = marks.length - 1; i >= 0; i--)
      str = marks[i].type.name + "(" + str + ")";
    return str;
  }
  function parseExpr(stream) {
    let exprs = [];
    do {
      exprs.push(parseExprSeq(stream));
    } while (stream.eat("|"));
    return exprs.length == 1 ? exprs[0] : { type: "choice", exprs };
  }
  function parseExprSeq(stream) {
    let exprs = [];
    do {
      exprs.push(parseExprSubscript(stream));
    } while (stream.next && stream.next != ")" && stream.next != "|");
    return exprs.length == 1 ? exprs[0] : { type: "seq", exprs };
  }
  function parseExprSubscript(stream) {
    let expr = parseExprAtom(stream);
    for (; ; ) {
      if (stream.eat("+"))
        expr = { type: "plus", expr };
      else if (stream.eat("*"))
        expr = { type: "star", expr };
      else if (stream.eat("?"))
        expr = { type: "opt", expr };
      else if (stream.eat("{"))
        expr = parseExprRange(stream, expr);
      else
        break;
    }
    return expr;
  }
  function parseNum(stream) {
    if (/\D/.test(stream.next))
      stream.err("Expected number, got '" + stream.next + "'");
    let result = Number(stream.next);
    stream.pos++;
    return result;
  }
  function parseExprRange(stream, expr) {
    let min = parseNum(stream), max = min;
    if (stream.eat(",")) {
      if (stream.next != "}")
        max = parseNum(stream);
      else
        max = -1;
    }
    if (!stream.eat("}"))
      stream.err("Unclosed braced range");
    return { type: "range", min, max, expr };
  }
  function resolveName(stream, name) {
    let types = stream.nodeTypes, type = types[name];
    if (type)
      return [type];
    let result = [];
    for (let typeName in types) {
      let type2 = types[typeName];
      if (type2.groups.indexOf(name) > -1)
        result.push(type2);
    }
    if (result.length == 0)
      stream.err("No node type or group '" + name + "' found");
    return result;
  }
  function parseExprAtom(stream) {
    if (stream.eat("(")) {
      let expr = parseExpr(stream);
      if (!stream.eat(")"))
        stream.err("Missing closing paren");
      return expr;
    } else if (!/\W/.test(stream.next)) {
      let exprs = resolveName(stream, stream.next).map((type) => {
        if (stream.inline == null)
          stream.inline = type.isInline;
        else if (stream.inline != type.isInline)
          stream.err("Mixing inline and block content");
        return { type: "name", value: type };
      });
      stream.pos++;
      return exprs.length == 1 ? exprs[0] : { type: "choice", exprs };
    } else {
      stream.err("Unexpected token '" + stream.next + "'");
    }
  }
  function nfa(expr) {
    let nfa2 = [[]];
    connect(compile(expr, 0), node());
    return nfa2;
    function node() {
      return nfa2.push([]) - 1;
    }
    function edge(from2, to, term) {
      let edge2 = { term, to };
      nfa2[from2].push(edge2);
      return edge2;
    }
    function connect(edges, to) {
      edges.forEach((edge2) => edge2.to = to);
    }
    function compile(expr2, from2) {
      if (expr2.type == "choice") {
        return expr2.exprs.reduce((out, expr3) => out.concat(compile(expr3, from2)), []);
      } else if (expr2.type == "seq") {
        for (let i = 0; ; i++) {
          let next = compile(expr2.exprs[i], from2);
          if (i == expr2.exprs.length - 1)
            return next;
          connect(next, from2 = node());
        }
      } else if (expr2.type == "star") {
        let loop = node();
        edge(from2, loop);
        connect(compile(expr2.expr, loop), loop);
        return [edge(loop)];
      } else if (expr2.type == "plus") {
        let loop = node();
        connect(compile(expr2.expr, from2), loop);
        connect(compile(expr2.expr, loop), loop);
        return [edge(loop)];
      } else if (expr2.type == "opt") {
        return [edge(from2)].concat(compile(expr2.expr, from2));
      } else if (expr2.type == "range") {
        let cur = from2;
        for (let i = 0; i < expr2.min; i++) {
          let next = node();
          connect(compile(expr2.expr, cur), next);
          cur = next;
        }
        if (expr2.max == -1) {
          connect(compile(expr2.expr, cur), cur);
        } else {
          for (let i = expr2.min; i < expr2.max; i++) {
            let next = node();
            edge(cur, next);
            connect(compile(expr2.expr, cur), next);
            cur = next;
          }
        }
        return [edge(cur)];
      } else if (expr2.type == "name") {
        return [edge(from2, void 0, expr2.value)];
      } else {
        throw new Error("Unknown expr type");
      }
    }
  }
  function cmp(a, b) {
    return b - a;
  }
  function nullFrom(nfa2, node) {
    let result = [];
    scan(node);
    return result.sort(cmp);
    function scan(node2) {
      let edges = nfa2[node2];
      if (edges.length == 1 && !edges[0].term)
        return scan(edges[0].to);
      result.push(node2);
      for (let i = 0; i < edges.length; i++) {
        let { term, to } = edges[i];
        if (!term && result.indexOf(to) == -1)
          scan(to);
      }
    }
  }
  function dfa(nfa2) {
    let labeled = /* @__PURE__ */ Object.create(null);
    return explore(nullFrom(nfa2, 0));
    function explore(states) {
      let out = [];
      states.forEach((node) => {
        nfa2[node].forEach(({ term, to }) => {
          if (!term)
            return;
          let set;
          for (let i = 0; i < out.length; i++)
            if (out[i][0] == term)
              set = out[i][1];
          nullFrom(nfa2, to).forEach((node2) => {
            if (!set)
              out.push([term, set = []]);
            if (set.indexOf(node2) == -1)
              set.push(node2);
          });
        });
      });
      let state = labeled[states.join(",")] = new ContentMatch(states.indexOf(nfa2.length - 1) > -1);
      for (let i = 0; i < out.length; i++) {
        let states2 = out[i][1].sort(cmp);
        state.next.push({ type: out[i][0], next: labeled[states2.join(",")] || explore(states2) });
      }
      return state;
    }
  }
  function checkForDeadEnds(match, stream) {
    for (let i = 0, work = [match]; i < work.length; i++) {
      let state = work[i], dead = !state.validEnd, nodes = [];
      for (let j = 0; j < state.next.length; j++) {
        let { type, next } = state.next[j];
        nodes.push(type.name);
        if (dead && !(type.isText || type.hasRequiredAttrs()))
          dead = false;
        if (work.indexOf(next) == -1)
          work.push(next);
      }
      if (dead)
        stream.err("Only non-generatable nodes (" + nodes.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
    }
  }
  function defaultAttrs(attrs) {
    let defaults = /* @__PURE__ */ Object.create(null);
    for (let attrName in attrs) {
      let attr = attrs[attrName];
      if (!attr.hasDefault)
        return null;
      defaults[attrName] = attr.default;
    }
    return defaults;
  }
  function computeAttrs(attrs, value) {
    let built = /* @__PURE__ */ Object.create(null);
    for (let name in attrs) {
      let given = value && value[name];
      if (given === void 0) {
        let attr = attrs[name];
        if (attr.hasDefault)
          given = attr.default;
        else
          throw new RangeError("No value supplied for attribute " + name);
      }
      built[name] = given;
    }
    return built;
  }
  function initAttrs(attrs) {
    let result = /* @__PURE__ */ Object.create(null);
    if (attrs)
      for (let name in attrs)
        result[name] = new Attribute(attrs[name]);
    return result;
  }
  function gatherMarks(schema, marks) {
    let found2 = [];
    for (let i = 0; i < marks.length; i++) {
      let name = marks[i], mark = schema.marks[name], ok = mark;
      if (mark) {
        found2.push(mark);
      } else {
        for (let prop in schema.marks) {
          let mark2 = schema.marks[prop];
          if (name == "_" || mark2.spec.group && mark2.spec.group.split(" ").indexOf(name) > -1)
            found2.push(ok = mark2);
        }
      }
      if (!ok)
        throw new SyntaxError("Unknown mark type: '" + marks[i] + "'");
    }
    return found2;
  }
  function wsOptionsFor(type, preserveWhitespace, base2) {
    if (preserveWhitespace != null)
      return (preserveWhitespace ? OPT_PRESERVE_WS : 0) | (preserveWhitespace === "full" ? OPT_PRESERVE_WS_FULL : 0);
    return type && type.whitespace == "pre" ? OPT_PRESERVE_WS | OPT_PRESERVE_WS_FULL : base2 & ~OPT_OPEN_LEFT;
  }
  function normalizeList(dom) {
    for (let child = dom.firstChild, prevItem = null; child; child = child.nextSibling) {
      let name = child.nodeType == 1 ? child.nodeName.toLowerCase() : null;
      if (name && listTags.hasOwnProperty(name) && prevItem) {
        prevItem.appendChild(child);
        child = prevItem;
      } else if (name == "li") {
        prevItem = child;
      } else if (name) {
        prevItem = null;
      }
    }
  }
  function matches(dom, selector) {
    return (dom.matches || dom.msMatchesSelector || dom.webkitMatchesSelector || dom.mozMatchesSelector).call(dom, selector);
  }
  function parseStyles(style2) {
    let re = /\s*([\w-]+)\s*:\s*([^;]+)/g, m, result = [];
    while (m = re.exec(style2))
      result.push(m[1], m[2].trim());
    return result;
  }
  function copy(obj) {
    let copy2 = {};
    for (let prop in obj)
      copy2[prop] = obj[prop];
    return copy2;
  }
  function markMayApply(markType, nodeType) {
    let nodes = nodeType.schema.nodes;
    for (let name in nodes) {
      let parent = nodes[name];
      if (!parent.allowsMarkType(markType))
        continue;
      let seen = [], scan = (match) => {
        seen.push(match);
        for (let i = 0; i < match.edgeCount; i++) {
          let { type, next } = match.edge(i);
          if (type == nodeType)
            return true;
          if (seen.indexOf(next) < 0 && scan(next))
            return true;
        }
      };
      if (scan(parent.contentMatch))
        return true;
    }
  }
  function findSameMarkInSet(mark, set) {
    for (let i = 0; i < set.length; i++) {
      if (mark.eq(set[i]))
        return set[i];
    }
  }
  function gatherToDOM(obj) {
    let result = {};
    for (let name in obj) {
      let toDOM = obj[name].spec.toDOM;
      if (toDOM)
        result[name] = toDOM;
    }
    return result;
  }
  function doc2(options) {
    return options.document || window.document;
  }
  var Fragment, found, Mark, ReplaceError, Slice, ResolvedPos, resolveCache, resolveCachePos, resolveCacheSize, NodeRange, emptyAttrs, Node2, TextNode, ContentMatch, TokenStream, NodeType, Attribute, MarkType, Schema, DOMParser, blockTags, ignoreTags, listTags, OPT_PRESERVE_WS, OPT_PRESERVE_WS_FULL, OPT_OPEN_LEFT, NodeContext, ParseContext, DOMSerializer;
  var init_dist2 = __esm({
    "node_modules/prosemirror-model/dist/index.js"() {
      init_dist();
      Fragment = class {
        constructor(content, size) {
          this.content = content;
          this.size = size || 0;
          if (size == null)
            for (let i = 0; i < content.length; i++)
              this.size += content[i].nodeSize;
        }
        nodesBetween(from2, to, f, nodeStart = 0, parent) {
          for (let i = 0, pos = 0; pos < to; i++) {
            let child = this.content[i], end = pos + child.nodeSize;
            if (end > from2 && f(child, nodeStart + pos, parent || null, i) !== false && child.content.size) {
              let start = pos + 1;
              child.nodesBetween(Math.max(0, from2 - start), Math.min(child.content.size, to - start), f, nodeStart + start);
            }
            pos = end;
          }
        }
        descendants(f) {
          this.nodesBetween(0, this.size, f);
        }
        textBetween(from2, to, blockSeparator, leafText) {
          let text = "", separated = true;
          this.nodesBetween(from2, to, (node, pos) => {
            if (node.isText) {
              text += node.text.slice(Math.max(from2, pos) - pos, to - pos);
              separated = !blockSeparator;
            } else if (node.isLeaf) {
              if (leafText) {
                text += typeof leafText === "function" ? leafText(node) : leafText;
              } else if (node.type.spec.leafText) {
                text += node.type.spec.leafText(node);
              }
              separated = !blockSeparator;
            } else if (!separated && node.isBlock) {
              text += blockSeparator;
              separated = true;
            }
          }, 0);
          return text;
        }
        append(other) {
          if (!other.size)
            return this;
          if (!this.size)
            return other;
          let last = this.lastChild, first2 = other.firstChild, content = this.content.slice(), i = 0;
          if (last.isText && last.sameMarkup(first2)) {
            content[content.length - 1] = last.withText(last.text + first2.text);
            i = 1;
          }
          for (; i < other.content.length; i++)
            content.push(other.content[i]);
          return new Fragment(content, this.size + other.size);
        }
        cut(from2, to = this.size) {
          if (from2 == 0 && to == this.size)
            return this;
          let result = [], size = 0;
          if (to > from2)
            for (let i = 0, pos = 0; pos < to; i++) {
              let child = this.content[i], end = pos + child.nodeSize;
              if (end > from2) {
                if (pos < from2 || end > to) {
                  if (child.isText)
                    child = child.cut(Math.max(0, from2 - pos), Math.min(child.text.length, to - pos));
                  else
                    child = child.cut(Math.max(0, from2 - pos - 1), Math.min(child.content.size, to - pos - 1));
                }
                result.push(child);
                size += child.nodeSize;
              }
              pos = end;
            }
          return new Fragment(result, size);
        }
        cutByIndex(from2, to) {
          if (from2 == to)
            return Fragment.empty;
          if (from2 == 0 && to == this.content.length)
            return this;
          return new Fragment(this.content.slice(from2, to));
        }
        replaceChild(index, node) {
          let current = this.content[index];
          if (current == node)
            return this;
          let copy2 = this.content.slice();
          let size = this.size + node.nodeSize - current.nodeSize;
          copy2[index] = node;
          return new Fragment(copy2, size);
        }
        addToStart(node) {
          return new Fragment([node].concat(this.content), this.size + node.nodeSize);
        }
        addToEnd(node) {
          return new Fragment(this.content.concat(node), this.size + node.nodeSize);
        }
        eq(other) {
          if (this.content.length != other.content.length)
            return false;
          for (let i = 0; i < this.content.length; i++)
            if (!this.content[i].eq(other.content[i]))
              return false;
          return true;
        }
        get firstChild() {
          return this.content.length ? this.content[0] : null;
        }
        get lastChild() {
          return this.content.length ? this.content[this.content.length - 1] : null;
        }
        get childCount() {
          return this.content.length;
        }
        child(index) {
          let found2 = this.content[index];
          if (!found2)
            throw new RangeError("Index " + index + " out of range for " + this);
          return found2;
        }
        maybeChild(index) {
          return this.content[index] || null;
        }
        forEach(f) {
          for (let i = 0, p = 0; i < this.content.length; i++) {
            let child = this.content[i];
            f(child, p, i);
            p += child.nodeSize;
          }
        }
        findDiffStart(other, pos = 0) {
          return findDiffStart(this, other, pos);
        }
        findDiffEnd(other, pos = this.size, otherPos = other.size) {
          return findDiffEnd(this, other, pos, otherPos);
        }
        findIndex(pos, round = -1) {
          if (pos == 0)
            return retIndex(0, pos);
          if (pos == this.size)
            return retIndex(this.content.length, pos);
          if (pos > this.size || pos < 0)
            throw new RangeError(`Position ${pos} outside of fragment (${this})`);
          for (let i = 0, curPos = 0; ; i++) {
            let cur = this.child(i), end = curPos + cur.nodeSize;
            if (end >= pos) {
              if (end == pos || round > 0)
                return retIndex(i + 1, end);
              return retIndex(i, curPos);
            }
            curPos = end;
          }
        }
        toString() {
          return "<" + this.toStringInner() + ">";
        }
        toStringInner() {
          return this.content.join(", ");
        }
        toJSON() {
          return this.content.length ? this.content.map((n) => n.toJSON()) : null;
        }
        static fromJSON(schema, value) {
          if (!value)
            return Fragment.empty;
          if (!Array.isArray(value))
            throw new RangeError("Invalid input for Fragment.fromJSON");
          return new Fragment(value.map(schema.nodeFromJSON));
        }
        static fromArray(array) {
          if (!array.length)
            return Fragment.empty;
          let joined, size = 0;
          for (let i = 0; i < array.length; i++) {
            let node = array[i];
            size += node.nodeSize;
            if (i && node.isText && array[i - 1].sameMarkup(node)) {
              if (!joined)
                joined = array.slice(0, i);
              joined[joined.length - 1] = node.withText(joined[joined.length - 1].text + node.text);
            } else if (joined) {
              joined.push(node);
            }
          }
          return new Fragment(joined || array, size);
        }
        static from(nodes) {
          if (!nodes)
            return Fragment.empty;
          if (nodes instanceof Fragment)
            return nodes;
          if (Array.isArray(nodes))
            return this.fromArray(nodes);
          if (nodes.attrs)
            return new Fragment([nodes], nodes.nodeSize);
          throw new RangeError("Can not convert " + nodes + " to a Fragment" + (nodes.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
        }
      };
      Fragment.empty = new Fragment([], 0);
      found = { index: 0, offset: 0 };
      Mark = class {
        constructor(type, attrs) {
          this.type = type;
          this.attrs = attrs;
        }
        addToSet(set) {
          let copy2, placed = false;
          for (let i = 0; i < set.length; i++) {
            let other = set[i];
            if (this.eq(other))
              return set;
            if (this.type.excludes(other.type)) {
              if (!copy2)
                copy2 = set.slice(0, i);
            } else if (other.type.excludes(this.type)) {
              return set;
            } else {
              if (!placed && other.type.rank > this.type.rank) {
                if (!copy2)
                  copy2 = set.slice(0, i);
                copy2.push(this);
                placed = true;
              }
              if (copy2)
                copy2.push(other);
            }
          }
          if (!copy2)
            copy2 = set.slice();
          if (!placed)
            copy2.push(this);
          return copy2;
        }
        removeFromSet(set) {
          for (let i = 0; i < set.length; i++)
            if (this.eq(set[i]))
              return set.slice(0, i).concat(set.slice(i + 1));
          return set;
        }
        isInSet(set) {
          for (let i = 0; i < set.length; i++)
            if (this.eq(set[i]))
              return true;
          return false;
        }
        eq(other) {
          return this == other || this.type == other.type && compareDeep(this.attrs, other.attrs);
        }
        toJSON() {
          let obj = { type: this.type.name };
          for (let _ in this.attrs) {
            obj.attrs = this.attrs;
            break;
          }
          return obj;
        }
        static fromJSON(schema, json) {
          if (!json)
            throw new RangeError("Invalid input for Mark.fromJSON");
          let type = schema.marks[json.type];
          if (!type)
            throw new RangeError(`There is no mark type ${json.type} in this schema`);
          return type.create(json.attrs);
        }
        static sameSet(a, b) {
          if (a == b)
            return true;
          if (a.length != b.length)
            return false;
          for (let i = 0; i < a.length; i++)
            if (!a[i].eq(b[i]))
              return false;
          return true;
        }
        static setFrom(marks) {
          if (!marks || Array.isArray(marks) && marks.length == 0)
            return Mark.none;
          if (marks instanceof Mark)
            return [marks];
          let copy2 = marks.slice();
          copy2.sort((a, b) => a.type.rank - b.type.rank);
          return copy2;
        }
      };
      Mark.none = [];
      ReplaceError = class extends Error {
      };
      Slice = class {
        constructor(content, openStart, openEnd) {
          this.content = content;
          this.openStart = openStart;
          this.openEnd = openEnd;
        }
        get size() {
          return this.content.size - this.openStart - this.openEnd;
        }
        insertAt(pos, fragment) {
          let content = insertInto(this.content, pos + this.openStart, fragment);
          return content && new Slice(content, this.openStart, this.openEnd);
        }
        removeBetween(from2, to) {
          return new Slice(removeRange(this.content, from2 + this.openStart, to + this.openStart), this.openStart, this.openEnd);
        }
        eq(other) {
          return this.content.eq(other.content) && this.openStart == other.openStart && this.openEnd == other.openEnd;
        }
        toString() {
          return this.content + "(" + this.openStart + "," + this.openEnd + ")";
        }
        toJSON() {
          if (!this.content.size)
            return null;
          let json = { content: this.content.toJSON() };
          if (this.openStart > 0)
            json.openStart = this.openStart;
          if (this.openEnd > 0)
            json.openEnd = this.openEnd;
          return json;
        }
        static fromJSON(schema, json) {
          if (!json)
            return Slice.empty;
          let openStart = json.openStart || 0, openEnd = json.openEnd || 0;
          if (typeof openStart != "number" || typeof openEnd != "number")
            throw new RangeError("Invalid input for Slice.fromJSON");
          return new Slice(Fragment.fromJSON(schema, json.content), openStart, openEnd);
        }
        static maxOpen(fragment, openIsolating = true) {
          let openStart = 0, openEnd = 0;
          for (let n = fragment.firstChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.firstChild)
            openStart++;
          for (let n = fragment.lastChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.lastChild)
            openEnd++;
          return new Slice(fragment, openStart, openEnd);
        }
      };
      Slice.empty = new Slice(Fragment.empty, 0, 0);
      ResolvedPos = class {
        constructor(pos, path, parentOffset) {
          this.pos = pos;
          this.path = path;
          this.parentOffset = parentOffset;
          this.depth = path.length / 3 - 1;
        }
        resolveDepth(val) {
          if (val == null)
            return this.depth;
          if (val < 0)
            return this.depth + val;
          return val;
        }
        get parent() {
          return this.node(this.depth);
        }
        get doc() {
          return this.node(0);
        }
        node(depth) {
          return this.path[this.resolveDepth(depth) * 3];
        }
        index(depth) {
          return this.path[this.resolveDepth(depth) * 3 + 1];
        }
        indexAfter(depth) {
          depth = this.resolveDepth(depth);
          return this.index(depth) + (depth == this.depth && !this.textOffset ? 0 : 1);
        }
        start(depth) {
          depth = this.resolveDepth(depth);
          return depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
        }
        end(depth) {
          depth = this.resolveDepth(depth);
          return this.start(depth) + this.node(depth).content.size;
        }
        before(depth) {
          depth = this.resolveDepth(depth);
          if (!depth)
            throw new RangeError("There is no position before the top-level node");
          return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1];
        }
        after(depth) {
          depth = this.resolveDepth(depth);
          if (!depth)
            throw new RangeError("There is no position after the top-level node");
          return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1] + this.path[depth * 3].nodeSize;
        }
        get textOffset() {
          return this.pos - this.path[this.path.length - 1];
        }
        get nodeAfter() {
          let parent = this.parent, index = this.index(this.depth);
          if (index == parent.childCount)
            return null;
          let dOff = this.pos - this.path[this.path.length - 1], child = parent.child(index);
          return dOff ? parent.child(index).cut(dOff) : child;
        }
        get nodeBefore() {
          let index = this.index(this.depth);
          let dOff = this.pos - this.path[this.path.length - 1];
          if (dOff)
            return this.parent.child(index).cut(0, dOff);
          return index == 0 ? null : this.parent.child(index - 1);
        }
        posAtIndex(index, depth) {
          depth = this.resolveDepth(depth);
          let node = this.path[depth * 3], pos = depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
          for (let i = 0; i < index; i++)
            pos += node.child(i).nodeSize;
          return pos;
        }
        marks() {
          let parent = this.parent, index = this.index();
          if (parent.content.size == 0)
            return Mark.none;
          if (this.textOffset)
            return parent.child(index).marks;
          let main = parent.maybeChild(index - 1), other = parent.maybeChild(index);
          if (!main) {
            let tmp = main;
            main = other;
            other = tmp;
          }
          let marks = main.marks;
          for (var i = 0; i < marks.length; i++)
            if (marks[i].type.spec.inclusive === false && (!other || !marks[i].isInSet(other.marks)))
              marks = marks[i--].removeFromSet(marks);
          return marks;
        }
        marksAcross($end) {
          let after = this.parent.maybeChild(this.index());
          if (!after || !after.isInline)
            return null;
          let marks = after.marks, next = $end.parent.maybeChild($end.index());
          for (var i = 0; i < marks.length; i++)
            if (marks[i].type.spec.inclusive === false && (!next || !marks[i].isInSet(next.marks)))
              marks = marks[i--].removeFromSet(marks);
          return marks;
        }
        sharedDepth(pos) {
          for (let depth = this.depth; depth > 0; depth--)
            if (this.start(depth) <= pos && this.end(depth) >= pos)
              return depth;
          return 0;
        }
        blockRange(other = this, pred) {
          if (other.pos < this.pos)
            return other.blockRange(this);
          for (let d = this.depth - (this.parent.inlineContent || this.pos == other.pos ? 1 : 0); d >= 0; d--)
            if (other.pos <= this.end(d) && (!pred || pred(this.node(d))))
              return new NodeRange(this, other, d);
          return null;
        }
        sameParent(other) {
          return this.pos - this.parentOffset == other.pos - other.parentOffset;
        }
        max(other) {
          return other.pos > this.pos ? other : this;
        }
        min(other) {
          return other.pos < this.pos ? other : this;
        }
        toString() {
          let str = "";
          for (let i = 1; i <= this.depth; i++)
            str += (str ? "/" : "") + this.node(i).type.name + "_" + this.index(i - 1);
          return str + ":" + this.parentOffset;
        }
        static resolve(doc4, pos) {
          if (!(pos >= 0 && pos <= doc4.content.size))
            throw new RangeError("Position " + pos + " out of range");
          let path = [];
          let start = 0, parentOffset = pos;
          for (let node = doc4; ; ) {
            let { index, offset } = node.content.findIndex(parentOffset);
            let rem = parentOffset - offset;
            path.push(node, index, start + offset);
            if (!rem)
              break;
            node = node.child(index);
            if (node.isText)
              break;
            parentOffset = rem - 1;
            start += offset + 1;
          }
          return new ResolvedPos(pos, path, parentOffset);
        }
        static resolveCached(doc4, pos) {
          for (let i = 0; i < resolveCache.length; i++) {
            let cached = resolveCache[i];
            if (cached.pos == pos && cached.doc == doc4)
              return cached;
          }
          let result = resolveCache[resolveCachePos] = ResolvedPos.resolve(doc4, pos);
          resolveCachePos = (resolveCachePos + 1) % resolveCacheSize;
          return result;
        }
      };
      resolveCache = [];
      resolveCachePos = 0;
      resolveCacheSize = 12;
      NodeRange = class {
        constructor($from, $to, depth) {
          this.$from = $from;
          this.$to = $to;
          this.depth = depth;
        }
        get start() {
          return this.$from.before(this.depth + 1);
        }
        get end() {
          return this.$to.after(this.depth + 1);
        }
        get parent() {
          return this.$from.node(this.depth);
        }
        get startIndex() {
          return this.$from.index(this.depth);
        }
        get endIndex() {
          return this.$to.indexAfter(this.depth);
        }
      };
      emptyAttrs = /* @__PURE__ */ Object.create(null);
      Node2 = class {
        constructor(type, attrs, content, marks = Mark.none) {
          this.type = type;
          this.attrs = attrs;
          this.marks = marks;
          this.content = content || Fragment.empty;
        }
        get nodeSize() {
          return this.isLeaf ? 1 : 2 + this.content.size;
        }
        get childCount() {
          return this.content.childCount;
        }
        child(index) {
          return this.content.child(index);
        }
        maybeChild(index) {
          return this.content.maybeChild(index);
        }
        forEach(f) {
          this.content.forEach(f);
        }
        nodesBetween(from2, to, f, startPos = 0) {
          this.content.nodesBetween(from2, to, f, startPos, this);
        }
        descendants(f) {
          this.nodesBetween(0, this.content.size, f);
        }
        get textContent() {
          return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
        }
        textBetween(from2, to, blockSeparator, leafText) {
          return this.content.textBetween(from2, to, blockSeparator, leafText);
        }
        get firstChild() {
          return this.content.firstChild;
        }
        get lastChild() {
          return this.content.lastChild;
        }
        eq(other) {
          return this == other || this.sameMarkup(other) && this.content.eq(other.content);
        }
        sameMarkup(other) {
          return this.hasMarkup(other.type, other.attrs, other.marks);
        }
        hasMarkup(type, attrs, marks) {
          return this.type == type && compareDeep(this.attrs, attrs || type.defaultAttrs || emptyAttrs) && Mark.sameSet(this.marks, marks || Mark.none);
        }
        copy(content = null) {
          if (content == this.content)
            return this;
          return new Node2(this.type, this.attrs, content, this.marks);
        }
        mark(marks) {
          return marks == this.marks ? this : new Node2(this.type, this.attrs, this.content, marks);
        }
        cut(from2, to = this.content.size) {
          if (from2 == 0 && to == this.content.size)
            return this;
          return this.copy(this.content.cut(from2, to));
        }
        slice(from2, to = this.content.size, includeParents = false) {
          if (from2 == to)
            return Slice.empty;
          let $from = this.resolve(from2), $to = this.resolve(to);
          let depth = includeParents ? 0 : $from.sharedDepth(to);
          let start = $from.start(depth), node = $from.node(depth);
          let content = node.content.cut($from.pos - start, $to.pos - start);
          return new Slice(content, $from.depth - depth, $to.depth - depth);
        }
        replace(from2, to, slice2) {
          return replace(this.resolve(from2), this.resolve(to), slice2);
        }
        nodeAt(pos) {
          for (let node = this; ; ) {
            let { index, offset } = node.content.findIndex(pos);
            node = node.maybeChild(index);
            if (!node)
              return null;
            if (offset == pos || node.isText)
              return node;
            pos -= offset + 1;
          }
        }
        childAfter(pos) {
          let { index, offset } = this.content.findIndex(pos);
          return { node: this.content.maybeChild(index), index, offset };
        }
        childBefore(pos) {
          if (pos == 0)
            return { node: null, index: 0, offset: 0 };
          let { index, offset } = this.content.findIndex(pos);
          if (offset < pos)
            return { node: this.content.child(index), index, offset };
          let node = this.content.child(index - 1);
          return { node, index: index - 1, offset: offset - node.nodeSize };
        }
        resolve(pos) {
          return ResolvedPos.resolveCached(this, pos);
        }
        resolveNoCache(pos) {
          return ResolvedPos.resolve(this, pos);
        }
        rangeHasMark(from2, to, type) {
          let found2 = false;
          if (to > from2)
            this.nodesBetween(from2, to, (node) => {
              if (type.isInSet(node.marks))
                found2 = true;
              return !found2;
            });
          return found2;
        }
        get isBlock() {
          return this.type.isBlock;
        }
        get isTextblock() {
          return this.type.isTextblock;
        }
        get inlineContent() {
          return this.type.inlineContent;
        }
        get isInline() {
          return this.type.isInline;
        }
        get isText() {
          return this.type.isText;
        }
        get isLeaf() {
          return this.type.isLeaf;
        }
        get isAtom() {
          return this.type.isAtom;
        }
        toString() {
          if (this.type.spec.toDebugString)
            return this.type.spec.toDebugString(this);
          let name = this.type.name;
          if (this.content.size)
            name += "(" + this.content.toStringInner() + ")";
          return wrapMarks(this.marks, name);
        }
        contentMatchAt(index) {
          let match = this.type.contentMatch.matchFragment(this.content, 0, index);
          if (!match)
            throw new Error("Called contentMatchAt on a node with invalid content");
          return match;
        }
        canReplace(from2, to, replacement = Fragment.empty, start = 0, end = replacement.childCount) {
          let one = this.contentMatchAt(from2).matchFragment(replacement, start, end);
          let two = one && one.matchFragment(this.content, to);
          if (!two || !two.validEnd)
            return false;
          for (let i = start; i < end; i++)
            if (!this.type.allowsMarks(replacement.child(i).marks))
              return false;
          return true;
        }
        canReplaceWith(from2, to, type, marks) {
          if (marks && !this.type.allowsMarks(marks))
            return false;
          let start = this.contentMatchAt(from2).matchType(type);
          let end = start && start.matchFragment(this.content, to);
          return end ? end.validEnd : false;
        }
        canAppend(other) {
          if (other.content.size)
            return this.canReplace(this.childCount, this.childCount, other.content);
          else
            return this.type.compatibleContent(other.type);
        }
        check() {
          if (!this.type.validContent(this.content))
            throw new RangeError(`Invalid content for node ${this.type.name}: ${this.content.toString().slice(0, 50)}`);
          let copy2 = Mark.none;
          for (let i = 0; i < this.marks.length; i++)
            copy2 = this.marks[i].addToSet(copy2);
          if (!Mark.sameSet(copy2, this.marks))
            throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((m) => m.type.name)}`);
          this.content.forEach((node) => node.check());
        }
        toJSON() {
          let obj = { type: this.type.name };
          for (let _ in this.attrs) {
            obj.attrs = this.attrs;
            break;
          }
          if (this.content.size)
            obj.content = this.content.toJSON();
          if (this.marks.length)
            obj.marks = this.marks.map((n) => n.toJSON());
          return obj;
        }
        static fromJSON(schema, json) {
          if (!json)
            throw new RangeError("Invalid input for Node.fromJSON");
          let marks = null;
          if (json.marks) {
            if (!Array.isArray(json.marks))
              throw new RangeError("Invalid mark data for Node.fromJSON");
            marks = json.marks.map(schema.markFromJSON);
          }
          if (json.type == "text") {
            if (typeof json.text != "string")
              throw new RangeError("Invalid text node in JSON");
            return schema.text(json.text, marks);
          }
          let content = Fragment.fromJSON(schema, json.content);
          return schema.nodeType(json.type).create(json.attrs, content, marks);
        }
      };
      Node2.prototype.text = void 0;
      TextNode = class extends Node2 {
        constructor(type, attrs, content, marks) {
          super(type, attrs, null, marks);
          if (!content)
            throw new RangeError("Empty text nodes are not allowed");
          this.text = content;
        }
        toString() {
          if (this.type.spec.toDebugString)
            return this.type.spec.toDebugString(this);
          return wrapMarks(this.marks, JSON.stringify(this.text));
        }
        get textContent() {
          return this.text;
        }
        textBetween(from2, to) {
          return this.text.slice(from2, to);
        }
        get nodeSize() {
          return this.text.length;
        }
        mark(marks) {
          return marks == this.marks ? this : new TextNode(this.type, this.attrs, this.text, marks);
        }
        withText(text) {
          if (text == this.text)
            return this;
          return new TextNode(this.type, this.attrs, text, this.marks);
        }
        cut(from2 = 0, to = this.text.length) {
          if (from2 == 0 && to == this.text.length)
            return this;
          return this.withText(this.text.slice(from2, to));
        }
        eq(other) {
          return this.sameMarkup(other) && this.text == other.text;
        }
        toJSON() {
          let base2 = super.toJSON();
          base2.text = this.text;
          return base2;
        }
      };
      ContentMatch = class {
        constructor(validEnd) {
          this.validEnd = validEnd;
          this.next = [];
          this.wrapCache = [];
        }
        static parse(string, nodeTypes) {
          let stream = new TokenStream(string, nodeTypes);
          if (stream.next == null)
            return ContentMatch.empty;
          let expr = parseExpr(stream);
          if (stream.next)
            stream.err("Unexpected trailing text");
          let match = dfa(nfa(expr));
          checkForDeadEnds(match, stream);
          return match;
        }
        matchType(type) {
          for (let i = 0; i < this.next.length; i++)
            if (this.next[i].type == type)
              return this.next[i].next;
          return null;
        }
        matchFragment(frag, start = 0, end = frag.childCount) {
          let cur = this;
          for (let i = start; cur && i < end; i++)
            cur = cur.matchType(frag.child(i).type);
          return cur;
        }
        get inlineContent() {
          return this.next.length && this.next[0].type.isInline;
        }
        get defaultType() {
          for (let i = 0; i < this.next.length; i++) {
            let { type } = this.next[i];
            if (!(type.isText || type.hasRequiredAttrs()))
              return type;
          }
          return null;
        }
        compatible(other) {
          for (let i = 0; i < this.next.length; i++)
            for (let j = 0; j < other.next.length; j++)
              if (this.next[i].type == other.next[j].type)
                return true;
          return false;
        }
        fillBefore(after, toEnd = false, startIndex = 0) {
          let seen = [this];
          function search(match, types) {
            let finished = match.matchFragment(after, startIndex);
            if (finished && (!toEnd || finished.validEnd))
              return Fragment.from(types.map((tp) => tp.createAndFill()));
            for (let i = 0; i < match.next.length; i++) {
              let { type, next } = match.next[i];
              if (!(type.isText || type.hasRequiredAttrs()) && seen.indexOf(next) == -1) {
                seen.push(next);
                let found2 = search(next, types.concat(type));
                if (found2)
                  return found2;
              }
            }
            return null;
          }
          return search(this, []);
        }
        findWrapping(target) {
          for (let i = 0; i < this.wrapCache.length; i += 2)
            if (this.wrapCache[i] == target)
              return this.wrapCache[i + 1];
          let computed = this.computeWrapping(target);
          this.wrapCache.push(target, computed);
          return computed;
        }
        computeWrapping(target) {
          let seen = /* @__PURE__ */ Object.create(null), active = [{ match: this, type: null, via: null }];
          while (active.length) {
            let current = active.shift(), match = current.match;
            if (match.matchType(target)) {
              let result = [];
              for (let obj = current; obj.type; obj = obj.via)
                result.push(obj.type);
              return result.reverse();
            }
            for (let i = 0; i < match.next.length; i++) {
              let { type, next } = match.next[i];
              if (!type.isLeaf && !type.hasRequiredAttrs() && !(type.name in seen) && (!current.type || next.validEnd)) {
                active.push({ match: type.contentMatch, type, via: current });
                seen[type.name] = true;
              }
            }
          }
          return null;
        }
        get edgeCount() {
          return this.next.length;
        }
        edge(n) {
          if (n >= this.next.length)
            throw new RangeError(`There's no ${n}th edge in this content match`);
          return this.next[n];
        }
        toString() {
          let seen = [];
          function scan(m) {
            seen.push(m);
            for (let i = 0; i < m.next.length; i++)
              if (seen.indexOf(m.next[i].next) == -1)
                scan(m.next[i].next);
          }
          scan(this);
          return seen.map((m, i) => {
            let out = i + (m.validEnd ? "*" : " ") + " ";
            for (let i2 = 0; i2 < m.next.length; i2++)
              out += (i2 ? ", " : "") + m.next[i2].type.name + "->" + seen.indexOf(m.next[i2].next);
            return out;
          }).join("\n");
        }
      };
      ContentMatch.empty = new ContentMatch(true);
      TokenStream = class {
        constructor(string, nodeTypes) {
          this.string = string;
          this.nodeTypes = nodeTypes;
          this.inline = null;
          this.pos = 0;
          this.tokens = string.split(/\s*(?=\b|\W|$)/);
          if (this.tokens[this.tokens.length - 1] == "")
            this.tokens.pop();
          if (this.tokens[0] == "")
            this.tokens.shift();
        }
        get next() {
          return this.tokens[this.pos];
        }
        eat(tok) {
          return this.next == tok && (this.pos++ || true);
        }
        err(str) {
          throw new SyntaxError(str + " (in content expression '" + this.string + "')");
        }
      };
      NodeType = class {
        constructor(name, schema, spec) {
          this.name = name;
          this.schema = schema;
          this.spec = spec;
          this.markSet = null;
          this.groups = spec.group ? spec.group.split(" ") : [];
          this.attrs = initAttrs(spec.attrs);
          this.defaultAttrs = defaultAttrs(this.attrs);
          this.contentMatch = null;
          this.inlineContent = null;
          this.isBlock = !(spec.inline || name == "text");
          this.isText = name == "text";
        }
        get isInline() {
          return !this.isBlock;
        }
        get isTextblock() {
          return this.isBlock && this.inlineContent;
        }
        get isLeaf() {
          return this.contentMatch == ContentMatch.empty;
        }
        get isAtom() {
          return this.isLeaf || !!this.spec.atom;
        }
        get whitespace() {
          return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
        }
        hasRequiredAttrs() {
          for (let n in this.attrs)
            if (this.attrs[n].isRequired)
              return true;
          return false;
        }
        compatibleContent(other) {
          return this == other || this.contentMatch.compatible(other.contentMatch);
        }
        computeAttrs(attrs) {
          if (!attrs && this.defaultAttrs)
            return this.defaultAttrs;
          else
            return computeAttrs(this.attrs, attrs);
        }
        create(attrs = null, content, marks) {
          if (this.isText)
            throw new Error("NodeType.create can't construct text nodes");
          return new Node2(this, this.computeAttrs(attrs), Fragment.from(content), Mark.setFrom(marks));
        }
        createChecked(attrs = null, content, marks) {
          content = Fragment.from(content);
          if (!this.validContent(content))
            throw new RangeError("Invalid content for node " + this.name);
          return new Node2(this, this.computeAttrs(attrs), content, Mark.setFrom(marks));
        }
        createAndFill(attrs = null, content, marks) {
          attrs = this.computeAttrs(attrs);
          content = Fragment.from(content);
          if (content.size) {
            let before = this.contentMatch.fillBefore(content);
            if (!before)
              return null;
            content = before.append(content);
          }
          let matched = this.contentMatch.matchFragment(content);
          let after = matched && matched.fillBefore(Fragment.empty, true);
          if (!after)
            return null;
          return new Node2(this, attrs, content.append(after), Mark.setFrom(marks));
        }
        validContent(content) {
          let result = this.contentMatch.matchFragment(content);
          if (!result || !result.validEnd)
            return false;
          for (let i = 0; i < content.childCount; i++)
            if (!this.allowsMarks(content.child(i).marks))
              return false;
          return true;
        }
        allowsMarkType(markType) {
          return this.markSet == null || this.markSet.indexOf(markType) > -1;
        }
        allowsMarks(marks) {
          if (this.markSet == null)
            return true;
          for (let i = 0; i < marks.length; i++)
            if (!this.allowsMarkType(marks[i].type))
              return false;
          return true;
        }
        allowedMarks(marks) {
          if (this.markSet == null)
            return marks;
          let copy2;
          for (let i = 0; i < marks.length; i++) {
            if (!this.allowsMarkType(marks[i].type)) {
              if (!copy2)
                copy2 = marks.slice(0, i);
            } else if (copy2) {
              copy2.push(marks[i]);
            }
          }
          return !copy2 ? marks : copy2.length ? copy2 : Mark.none;
        }
        static compile(nodes, schema) {
          let result = /* @__PURE__ */ Object.create(null);
          nodes.forEach((name, spec) => result[name] = new NodeType(name, schema, spec));
          let topType = schema.spec.topNode || "doc";
          if (!result[topType])
            throw new RangeError("Schema is missing its top node type ('" + topType + "')");
          if (!result.text)
            throw new RangeError("Every schema needs a 'text' type");
          for (let _ in result.text.attrs)
            throw new RangeError("The text node type should not have attributes");
          return result;
        }
      };
      Attribute = class {
        constructor(options) {
          this.hasDefault = Object.prototype.hasOwnProperty.call(options, "default");
          this.default = options.default;
        }
        get isRequired() {
          return !this.hasDefault;
        }
      };
      MarkType = class {
        constructor(name, rank, schema, spec) {
          this.name = name;
          this.rank = rank;
          this.schema = schema;
          this.spec = spec;
          this.attrs = initAttrs(spec.attrs);
          this.excluded = null;
          let defaults = defaultAttrs(this.attrs);
          this.instance = defaults ? new Mark(this, defaults) : null;
        }
        create(attrs = null) {
          if (!attrs && this.instance)
            return this.instance;
          return new Mark(this, computeAttrs(this.attrs, attrs));
        }
        static compile(marks, schema) {
          let result = /* @__PURE__ */ Object.create(null), rank = 0;
          marks.forEach((name, spec) => result[name] = new MarkType(name, rank++, schema, spec));
          return result;
        }
        removeFromSet(set) {
          for (var i = 0; i < set.length; i++)
            if (set[i].type == this) {
              set = set.slice(0, i).concat(set.slice(i + 1));
              i--;
            }
          return set;
        }
        isInSet(set) {
          for (let i = 0; i < set.length; i++)
            if (set[i].type == this)
              return set[i];
        }
        excludes(other) {
          return this.excluded.indexOf(other) > -1;
        }
      };
      Schema = class {
        constructor(spec) {
          this.cached = /* @__PURE__ */ Object.create(null);
          this.spec = {
            nodes: dist_default.from(spec.nodes),
            marks: dist_default.from(spec.marks || {}),
            topNode: spec.topNode
          };
          this.nodes = NodeType.compile(this.spec.nodes, this);
          this.marks = MarkType.compile(this.spec.marks, this);
          let contentExprCache = /* @__PURE__ */ Object.create(null);
          for (let prop in this.nodes) {
            if (prop in this.marks)
              throw new RangeError(prop + " can not be both a node and a mark");
            let type = this.nodes[prop], contentExpr = type.spec.content || "", markExpr = type.spec.marks;
            type.contentMatch = contentExprCache[contentExpr] || (contentExprCache[contentExpr] = ContentMatch.parse(contentExpr, this.nodes));
            type.inlineContent = type.contentMatch.inlineContent;
            type.markSet = markExpr == "_" ? null : markExpr ? gatherMarks(this, markExpr.split(" ")) : markExpr == "" || !type.inlineContent ? [] : null;
          }
          for (let prop in this.marks) {
            let type = this.marks[prop], excl = type.spec.excludes;
            type.excluded = excl == null ? [type] : excl == "" ? [] : gatherMarks(this, excl.split(" "));
          }
          this.nodeFromJSON = this.nodeFromJSON.bind(this);
          this.markFromJSON = this.markFromJSON.bind(this);
          this.topNodeType = this.nodes[this.spec.topNode || "doc"];
          this.cached.wrappings = /* @__PURE__ */ Object.create(null);
        }
        node(type, attrs = null, content, marks) {
          if (typeof type == "string")
            type = this.nodeType(type);
          else if (!(type instanceof NodeType))
            throw new RangeError("Invalid node type: " + type);
          else if (type.schema != this)
            throw new RangeError("Node type from different schema used (" + type.name + ")");
          return type.createChecked(attrs, content, marks);
        }
        text(text, marks) {
          let type = this.nodes.text;
          return new TextNode(type, type.defaultAttrs, text, Mark.setFrom(marks));
        }
        mark(type, attrs) {
          if (typeof type == "string")
            type = this.marks[type];
          return type.create(attrs);
        }
        nodeFromJSON(json) {
          return Node2.fromJSON(this, json);
        }
        markFromJSON(json) {
          return Mark.fromJSON(this, json);
        }
        nodeType(name) {
          let found2 = this.nodes[name];
          if (!found2)
            throw new RangeError("Unknown node type: " + name);
          return found2;
        }
      };
      DOMParser = class {
        constructor(schema, rules) {
          this.schema = schema;
          this.rules = rules;
          this.tags = [];
          this.styles = [];
          rules.forEach((rule) => {
            if (rule.tag)
              this.tags.push(rule);
            else if (rule.style)
              this.styles.push(rule);
          });
          this.normalizeLists = !this.tags.some((r) => {
            if (!/^(ul|ol)\b/.test(r.tag) || !r.node)
              return false;
            let node = schema.nodes[r.node];
            return node.contentMatch.matchType(node);
          });
        }
        parse(dom, options = {}) {
          let context = new ParseContext(this, options, false);
          context.addAll(dom, options.from, options.to);
          return context.finish();
        }
        parseSlice(dom, options = {}) {
          let context = new ParseContext(this, options, true);
          context.addAll(dom, options.from, options.to);
          return Slice.maxOpen(context.finish());
        }
        matchTag(dom, context, after) {
          for (let i = after ? this.tags.indexOf(after) + 1 : 0; i < this.tags.length; i++) {
            let rule = this.tags[i];
            if (matches(dom, rule.tag) && (rule.namespace === void 0 || dom.namespaceURI == rule.namespace) && (!rule.context || context.matchesContext(rule.context))) {
              if (rule.getAttrs) {
                let result = rule.getAttrs(dom);
                if (result === false)
                  continue;
                rule.attrs = result || void 0;
              }
              return rule;
            }
          }
        }
        matchStyle(prop, value, context, after) {
          for (let i = after ? this.styles.indexOf(after) + 1 : 0; i < this.styles.length; i++) {
            let rule = this.styles[i], style2 = rule.style;
            if (style2.indexOf(prop) != 0 || rule.context && !context.matchesContext(rule.context) || style2.length > prop.length && (style2.charCodeAt(prop.length) != 61 || style2.slice(prop.length + 1) != value))
              continue;
            if (rule.getAttrs) {
              let result = rule.getAttrs(value);
              if (result === false)
                continue;
              rule.attrs = result || void 0;
            }
            return rule;
          }
        }
        static schemaRules(schema) {
          let result = [];
          function insert(rule) {
            let priority = rule.priority == null ? 50 : rule.priority, i = 0;
            for (; i < result.length; i++) {
              let next = result[i], nextPriority = next.priority == null ? 50 : next.priority;
              if (nextPriority < priority)
                break;
            }
            result.splice(i, 0, rule);
          }
          for (let name in schema.marks) {
            let rules = schema.marks[name].spec.parseDOM;
            if (rules)
              rules.forEach((rule) => {
                insert(rule = copy(rule));
                rule.mark = name;
              });
          }
          for (let name in schema.nodes) {
            let rules = schema.nodes[name].spec.parseDOM;
            if (rules)
              rules.forEach((rule) => {
                insert(rule = copy(rule));
                rule.node = name;
              });
          }
          return result;
        }
        static fromSchema(schema) {
          return schema.cached.domParser || (schema.cached.domParser = new DOMParser(schema, DOMParser.schemaRules(schema)));
        }
      };
      blockTags = {
        address: true,
        article: true,
        aside: true,
        blockquote: true,
        canvas: true,
        dd: true,
        div: true,
        dl: true,
        fieldset: true,
        figcaption: true,
        figure: true,
        footer: true,
        form: true,
        h1: true,
        h2: true,
        h3: true,
        h4: true,
        h5: true,
        h6: true,
        header: true,
        hgroup: true,
        hr: true,
        li: true,
        noscript: true,
        ol: true,
        output: true,
        p: true,
        pre: true,
        section: true,
        table: true,
        tfoot: true,
        ul: true
      };
      ignoreTags = {
        head: true,
        noscript: true,
        object: true,
        script: true,
        style: true,
        title: true
      };
      listTags = { ol: true, ul: true };
      OPT_PRESERVE_WS = 1;
      OPT_PRESERVE_WS_FULL = 2;
      OPT_OPEN_LEFT = 4;
      NodeContext = class {
        constructor(type, attrs, marks, pendingMarks, solid, match, options) {
          this.type = type;
          this.attrs = attrs;
          this.marks = marks;
          this.pendingMarks = pendingMarks;
          this.solid = solid;
          this.options = options;
          this.content = [];
          this.activeMarks = Mark.none;
          this.stashMarks = [];
          this.match = match || (options & OPT_OPEN_LEFT ? null : type.contentMatch);
        }
        findWrapping(node) {
          if (!this.match) {
            if (!this.type)
              return [];
            let fill = this.type.contentMatch.fillBefore(Fragment.from(node));
            if (fill) {
              this.match = this.type.contentMatch.matchFragment(fill);
            } else {
              let start = this.type.contentMatch, wrap2;
              if (wrap2 = start.findWrapping(node.type)) {
                this.match = start;
                return wrap2;
              } else {
                return null;
              }
            }
          }
          return this.match.findWrapping(node.type);
        }
        finish(openEnd) {
          if (!(this.options & OPT_PRESERVE_WS)) {
            let last = this.content[this.content.length - 1], m;
            if (last && last.isText && (m = /[ \t\r\n\u000c]+$/.exec(last.text))) {
              let text = last;
              if (last.text.length == m[0].length)
                this.content.pop();
              else
                this.content[this.content.length - 1] = text.withText(text.text.slice(0, text.text.length - m[0].length));
            }
          }
          let content = Fragment.from(this.content);
          if (!openEnd && this.match)
            content = content.append(this.match.fillBefore(Fragment.empty, true));
          return this.type ? this.type.create(this.attrs, content, this.marks) : content;
        }
        popFromStashMark(mark) {
          for (let i = this.stashMarks.length - 1; i >= 0; i--)
            if (mark.eq(this.stashMarks[i]))
              return this.stashMarks.splice(i, 1)[0];
        }
        applyPending(nextType) {
          for (let i = 0, pending = this.pendingMarks; i < pending.length; i++) {
            let mark = pending[i];
            if ((this.type ? this.type.allowsMarkType(mark.type) : markMayApply(mark.type, nextType)) && !mark.isInSet(this.activeMarks)) {
              this.activeMarks = mark.addToSet(this.activeMarks);
              this.pendingMarks = mark.removeFromSet(this.pendingMarks);
            }
          }
        }
        inlineContext(node) {
          if (this.type)
            return this.type.inlineContent;
          if (this.content.length)
            return this.content[0].isInline;
          return node.parentNode && !blockTags.hasOwnProperty(node.parentNode.nodeName.toLowerCase());
        }
      };
      ParseContext = class {
        constructor(parser, options, isOpen) {
          this.parser = parser;
          this.options = options;
          this.isOpen = isOpen;
          this.open = 0;
          let topNode = options.topNode, topContext;
          let topOptions = wsOptionsFor(null, options.preserveWhitespace, 0) | (isOpen ? OPT_OPEN_LEFT : 0);
          if (topNode)
            topContext = new NodeContext(topNode.type, topNode.attrs, Mark.none, Mark.none, true, options.topMatch || topNode.type.contentMatch, topOptions);
          else if (isOpen)
            topContext = new NodeContext(null, null, Mark.none, Mark.none, true, null, topOptions);
          else
            topContext = new NodeContext(parser.schema.topNodeType, null, Mark.none, Mark.none, true, null, topOptions);
          this.nodes = [topContext];
          this.find = options.findPositions;
          this.needsBlock = false;
        }
        get top() {
          return this.nodes[this.open];
        }
        addDOM(dom) {
          if (dom.nodeType == 3) {
            this.addTextNode(dom);
          } else if (dom.nodeType == 1) {
            let style2 = dom.getAttribute("style");
            let marks = style2 ? this.readStyles(parseStyles(style2)) : null, top = this.top;
            if (marks != null)
              for (let i = 0; i < marks.length; i++)
                this.addPendingMark(marks[i]);
            this.addElement(dom);
            if (marks != null)
              for (let i = 0; i < marks.length; i++)
                this.removePendingMark(marks[i], top);
          }
        }
        addTextNode(dom) {
          let value = dom.nodeValue;
          let top = this.top;
          if (top.options & OPT_PRESERVE_WS_FULL || top.inlineContext(dom) || /[^ \t\r\n\u000c]/.test(value)) {
            if (!(top.options & OPT_PRESERVE_WS)) {
              value = value.replace(/[ \t\r\n\u000c]+/g, " ");
              if (/^[ \t\r\n\u000c]/.test(value) && this.open == this.nodes.length - 1) {
                let nodeBefore = top.content[top.content.length - 1];
                let domNodeBefore = dom.previousSibling;
                if (!nodeBefore || domNodeBefore && domNodeBefore.nodeName == "BR" || nodeBefore.isText && /[ \t\r\n\u000c]$/.test(nodeBefore.text))
                  value = value.slice(1);
              }
            } else if (!(top.options & OPT_PRESERVE_WS_FULL)) {
              value = value.replace(/\r?\n|\r/g, " ");
            } else {
              value = value.replace(/\r\n?/g, "\n");
            }
            if (value)
              this.insertNode(this.parser.schema.text(value));
            this.findInText(dom);
          } else {
            this.findInside(dom);
          }
        }
        addElement(dom, matchAfter) {
          let name = dom.nodeName.toLowerCase(), ruleID;
          if (listTags.hasOwnProperty(name) && this.parser.normalizeLists)
            normalizeList(dom);
          let rule = this.options.ruleFromNode && this.options.ruleFromNode(dom) || (ruleID = this.parser.matchTag(dom, this, matchAfter));
          if (rule ? rule.ignore : ignoreTags.hasOwnProperty(name)) {
            this.findInside(dom);
            this.ignoreFallback(dom);
          } else if (!rule || rule.skip || rule.closeParent) {
            if (rule && rule.closeParent)
              this.open = Math.max(0, this.open - 1);
            else if (rule && rule.skip.nodeType)
              dom = rule.skip;
            let sync, top = this.top, oldNeedsBlock = this.needsBlock;
            if (blockTags.hasOwnProperty(name)) {
              sync = true;
              if (!top.type)
                this.needsBlock = true;
            } else if (!dom.firstChild) {
              this.leafFallback(dom);
              return;
            }
            this.addAll(dom);
            if (sync)
              this.sync(top);
            this.needsBlock = oldNeedsBlock;
          } else {
            this.addElementByRule(dom, rule, rule.consuming === false ? ruleID : void 0);
          }
        }
        leafFallback(dom) {
          if (dom.nodeName == "BR" && this.top.type && this.top.type.inlineContent)
            this.addTextNode(dom.ownerDocument.createTextNode("\n"));
        }
        ignoreFallback(dom) {
          if (dom.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent))
            this.findPlace(this.parser.schema.text("-"));
        }
        readStyles(styles) {
          let marks = Mark.none;
          style:
            for (let i = 0; i < styles.length; i += 2) {
              for (let after = void 0; ; ) {
                let rule = this.parser.matchStyle(styles[i], styles[i + 1], this, after);
                if (!rule)
                  continue style;
                if (rule.ignore)
                  return null;
                marks = this.parser.schema.marks[rule.mark].create(rule.attrs).addToSet(marks);
                if (rule.consuming === false)
                  after = rule;
                else
                  break;
              }
            }
          return marks;
        }
        addElementByRule(dom, rule, continueAfter) {
          let sync, nodeType, mark;
          if (rule.node) {
            nodeType = this.parser.schema.nodes[rule.node];
            if (!nodeType.isLeaf) {
              sync = this.enter(nodeType, rule.attrs || null, rule.preserveWhitespace);
            } else if (!this.insertNode(nodeType.create(rule.attrs))) {
              this.leafFallback(dom);
            }
          } else {
            let markType = this.parser.schema.marks[rule.mark];
            mark = markType.create(rule.attrs);
            this.addPendingMark(mark);
          }
          let startIn = this.top;
          if (nodeType && nodeType.isLeaf) {
            this.findInside(dom);
          } else if (continueAfter) {
            this.addElement(dom, continueAfter);
          } else if (rule.getContent) {
            this.findInside(dom);
            rule.getContent(dom, this.parser.schema).forEach((node) => this.insertNode(node));
          } else {
            let contentDOM = dom;
            if (typeof rule.contentElement == "string")
              contentDOM = dom.querySelector(rule.contentElement);
            else if (typeof rule.contentElement == "function")
              contentDOM = rule.contentElement(dom);
            else if (rule.contentElement)
              contentDOM = rule.contentElement;
            this.findAround(dom, contentDOM, true);
            this.addAll(contentDOM);
          }
          if (sync && this.sync(startIn))
            this.open--;
          if (mark)
            this.removePendingMark(mark, startIn);
        }
        addAll(parent, startIndex, endIndex) {
          let index = startIndex || 0;
          for (let dom = startIndex ? parent.childNodes[startIndex] : parent.firstChild, end = endIndex == null ? null : parent.childNodes[endIndex]; dom != end; dom = dom.nextSibling, ++index) {
            this.findAtPoint(parent, index);
            this.addDOM(dom);
          }
          this.findAtPoint(parent, index);
        }
        findPlace(node) {
          let route, sync;
          for (let depth = this.open; depth >= 0; depth--) {
            let cx = this.nodes[depth];
            let found2 = cx.findWrapping(node);
            if (found2 && (!route || route.length > found2.length)) {
              route = found2;
              sync = cx;
              if (!found2.length)
                break;
            }
            if (cx.solid)
              break;
          }
          if (!route)
            return false;
          this.sync(sync);
          for (let i = 0; i < route.length; i++)
            this.enterInner(route[i], null, false);
          return true;
        }
        insertNode(node) {
          if (node.isInline && this.needsBlock && !this.top.type) {
            let block = this.textblockFromContext();
            if (block)
              this.enterInner(block);
          }
          if (this.findPlace(node)) {
            this.closeExtra();
            let top = this.top;
            top.applyPending(node.type);
            if (top.match)
              top.match = top.match.matchType(node.type);
            let marks = top.activeMarks;
            for (let i = 0; i < node.marks.length; i++)
              if (!top.type || top.type.allowsMarkType(node.marks[i].type))
                marks = node.marks[i].addToSet(marks);
            top.content.push(node.mark(marks));
            return true;
          }
          return false;
        }
        enter(type, attrs, preserveWS) {
          let ok = this.findPlace(type.create(attrs));
          if (ok)
            this.enterInner(type, attrs, true, preserveWS);
          return ok;
        }
        enterInner(type, attrs = null, solid = false, preserveWS) {
          this.closeExtra();
          let top = this.top;
          top.applyPending(type);
          top.match = top.match && top.match.matchType(type);
          let options = wsOptionsFor(type, preserveWS, top.options);
          if (top.options & OPT_OPEN_LEFT && top.content.length == 0)
            options |= OPT_OPEN_LEFT;
          this.nodes.push(new NodeContext(type, attrs, top.activeMarks, top.pendingMarks, solid, null, options));
          this.open++;
        }
        closeExtra(openEnd = false) {
          let i = this.nodes.length - 1;
          if (i > this.open) {
            for (; i > this.open; i--)
              this.nodes[i - 1].content.push(this.nodes[i].finish(openEnd));
            this.nodes.length = this.open + 1;
          }
        }
        finish() {
          this.open = 0;
          this.closeExtra(this.isOpen);
          return this.nodes[0].finish(this.isOpen || this.options.topOpen);
        }
        sync(to) {
          for (let i = this.open; i >= 0; i--)
            if (this.nodes[i] == to) {
              this.open = i;
              return true;
            }
          return false;
        }
        get currentPos() {
          this.closeExtra();
          let pos = 0;
          for (let i = this.open; i >= 0; i--) {
            let content = this.nodes[i].content;
            for (let j = content.length - 1; j >= 0; j--)
              pos += content[j].nodeSize;
            if (i)
              pos++;
          }
          return pos;
        }
        findAtPoint(parent, offset) {
          if (this.find)
            for (let i = 0; i < this.find.length; i++) {
              if (this.find[i].node == parent && this.find[i].offset == offset)
                this.find[i].pos = this.currentPos;
            }
        }
        findInside(parent) {
          if (this.find)
            for (let i = 0; i < this.find.length; i++) {
              if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node))
                this.find[i].pos = this.currentPos;
            }
        }
        findAround(parent, content, before) {
          if (parent != content && this.find)
            for (let i = 0; i < this.find.length; i++) {
              if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) {
                let pos = content.compareDocumentPosition(this.find[i].node);
                if (pos & (before ? 2 : 4))
                  this.find[i].pos = this.currentPos;
              }
            }
        }
        findInText(textNode) {
          if (this.find)
            for (let i = 0; i < this.find.length; i++) {
              if (this.find[i].node == textNode)
                this.find[i].pos = this.currentPos - (textNode.nodeValue.length - this.find[i].offset);
            }
        }
        matchesContext(context) {
          if (context.indexOf("|") > -1)
            return context.split(/\s*\|\s*/).some(this.matchesContext, this);
          let parts = context.split("/");
          let option = this.options.context;
          let useRoot = !this.isOpen && (!option || option.parent.type == this.nodes[0].type);
          let minDepth = -(option ? option.depth + 1 : 0) + (useRoot ? 0 : 1);
          let match = (i, depth) => {
            for (; i >= 0; i--) {
              let part = parts[i];
              if (part == "") {
                if (i == parts.length - 1 || i == 0)
                  continue;
                for (; depth >= minDepth; depth--)
                  if (match(i - 1, depth))
                    return true;
                return false;
              } else {
                let next = depth > 0 || depth == 0 && useRoot ? this.nodes[depth].type : option && depth >= minDepth ? option.node(depth - minDepth).type : null;
                if (!next || next.name != part && next.groups.indexOf(part) == -1)
                  return false;
                depth--;
              }
            }
            return true;
          };
          return match(parts.length - 1, this.open);
        }
        textblockFromContext() {
          let $context = this.options.context;
          if ($context)
            for (let d = $context.depth; d >= 0; d--) {
              let deflt = $context.node(d).contentMatchAt($context.indexAfter(d)).defaultType;
              if (deflt && deflt.isTextblock && deflt.defaultAttrs)
                return deflt;
            }
          for (let name in this.parser.schema.nodes) {
            let type = this.parser.schema.nodes[name];
            if (type.isTextblock && type.defaultAttrs)
              return type;
          }
        }
        addPendingMark(mark) {
          let found2 = findSameMarkInSet(mark, this.top.pendingMarks);
          if (found2)
            this.top.stashMarks.push(found2);
          this.top.pendingMarks = mark.addToSet(this.top.pendingMarks);
        }
        removePendingMark(mark, upto) {
          for (let depth = this.open; depth >= 0; depth--) {
            let level = this.nodes[depth];
            let found2 = level.pendingMarks.lastIndexOf(mark);
            if (found2 > -1) {
              level.pendingMarks = mark.removeFromSet(level.pendingMarks);
            } else {
              level.activeMarks = mark.removeFromSet(level.activeMarks);
              let stashMark = level.popFromStashMark(mark);
              if (stashMark && level.type && level.type.allowsMarkType(stashMark.type))
                level.activeMarks = stashMark.addToSet(level.activeMarks);
            }
            if (level == upto)
              break;
          }
        }
      };
      DOMSerializer = class {
        constructor(nodes, marks) {
          this.nodes = nodes;
          this.marks = marks;
        }
        serializeFragment(fragment, options = {}, target) {
          if (!target)
            target = doc2(options).createDocumentFragment();
          let top = target, active = [];
          fragment.forEach((node) => {
            if (active.length || node.marks.length) {
              let keep = 0, rendered = 0;
              while (keep < active.length && rendered < node.marks.length) {
                let next = node.marks[rendered];
                if (!this.marks[next.type.name]) {
                  rendered++;
                  continue;
                }
                if (!next.eq(active[keep][0]) || next.type.spec.spanning === false)
                  break;
                keep++;
                rendered++;
              }
              while (keep < active.length)
                top = active.pop()[1];
              while (rendered < node.marks.length) {
                let add = node.marks[rendered++];
                let markDOM = this.serializeMark(add, node.isInline, options);
                if (markDOM) {
                  active.push([add, top]);
                  top.appendChild(markDOM.dom);
                  top = markDOM.contentDOM || markDOM.dom;
                }
              }
            }
            top.appendChild(this.serializeNodeInner(node, options));
          });
          return target;
        }
        serializeNodeInner(node, options) {
          let { dom, contentDOM } = DOMSerializer.renderSpec(doc2(options), this.nodes[node.type.name](node));
          if (contentDOM) {
            if (node.isLeaf)
              throw new RangeError("Content hole not allowed in a leaf node spec");
            this.serializeFragment(node.content, options, contentDOM);
          }
          return dom;
        }
        serializeNode(node, options = {}) {
          let dom = this.serializeNodeInner(node, options);
          for (let i = node.marks.length - 1; i >= 0; i--) {
            let wrap2 = this.serializeMark(node.marks[i], node.isInline, options);
            if (wrap2) {
              (wrap2.contentDOM || wrap2.dom).appendChild(dom);
              dom = wrap2.dom;
            }
          }
          return dom;
        }
        serializeMark(mark, inline, options = {}) {
          let toDOM = this.marks[mark.type.name];
          return toDOM && DOMSerializer.renderSpec(doc2(options), toDOM(mark, inline));
        }
        static renderSpec(doc4, structure, xmlNS = null) {
          if (typeof structure == "string")
            return { dom: doc4.createTextNode(structure) };
          if (structure.nodeType != null)
            return { dom: structure };
          if (structure.dom && structure.dom.nodeType != null)
            return structure;
          let tagName = structure[0], space = tagName.indexOf(" ");
          if (space > 0) {
            xmlNS = tagName.slice(0, space);
            tagName = tagName.slice(space + 1);
          }
          let contentDOM;
          let dom = xmlNS ? doc4.createElementNS(xmlNS, tagName) : doc4.createElement(tagName);
          let attrs = structure[1], start = 1;
          if (attrs && typeof attrs == "object" && attrs.nodeType == null && !Array.isArray(attrs)) {
            start = 2;
            for (let name in attrs)
              if (attrs[name] != null) {
                let space2 = name.indexOf(" ");
                if (space2 > 0)
                  dom.setAttributeNS(name.slice(0, space2), name.slice(space2 + 1), attrs[name]);
                else
                  dom.setAttribute(name, attrs[name]);
              }
          }
          for (let i = start; i < structure.length; i++) {
            let child = structure[i];
            if (child === 0) {
              if (i < structure.length - 1 || i > start)
                throw new RangeError("Content hole must be the only child of its parent node");
              return { dom, contentDOM: dom };
            } else {
              let { dom: inner, contentDOM: innerContent } = DOMSerializer.renderSpec(doc4, child, xmlNS);
              dom.appendChild(inner);
              if (innerContent) {
                if (contentDOM)
                  throw new RangeError("Multiple content holes");
                contentDOM = innerContent;
              }
            }
          }
          return { dom, contentDOM };
        }
        static fromSchema(schema) {
          return schema.cached.domSerializer || (schema.cached.domSerializer = new DOMSerializer(this.nodesFromSchema(schema), this.marksFromSchema(schema)));
        }
        static nodesFromSchema(schema) {
          let result = gatherToDOM(schema.nodes);
          if (!result.text)
            result.text = (node) => node.text;
          return result;
        }
        static marksFromSchema(schema) {
          return gatherToDOM(schema.marks);
        }
      };
    }
  });

  // node_modules/prosemirror-transform/dist/index.js
  function makeRecover(index, offset) {
    return index + offset * factor16;
  }
  function recoverIndex(value) {
    return value & lower16;
  }
  function recoverOffset(value) {
    return (value - (value & lower16)) / factor16;
  }
  function mapFragment(fragment, f, parent) {
    let mapped = [];
    for (let i = 0; i < fragment.childCount; i++) {
      let child = fragment.child(i);
      if (child.content.size)
        child = child.copy(mapFragment(child.content, f, child));
      if (child.isInline)
        child = f(child, parent, i);
      mapped.push(child);
    }
    return Fragment.fromArray(mapped);
  }
  function contentBetween(doc4, from2, to) {
    let $from = doc4.resolve(from2), dist = to - from2, depth = $from.depth;
    while (dist > 0 && depth > 0 && $from.indexAfter(depth) == $from.node(depth).childCount) {
      depth--;
      dist--;
    }
    if (dist > 0) {
      let next = $from.node(depth).maybeChild($from.indexAfter(depth));
      while (dist > 0) {
        if (!next || next.isLeaf)
          return true;
        next = next.firstChild;
        dist--;
      }
    }
    return false;
  }
  function addMark(tr, from2, to, mark) {
    let removed = [], added = [];
    let removing, adding;
    tr.doc.nodesBetween(from2, to, (node, pos, parent) => {
      if (!node.isInline)
        return;
      let marks = node.marks;
      if (!mark.isInSet(marks) && parent.type.allowsMarkType(mark.type)) {
        let start = Math.max(pos, from2), end = Math.min(pos + node.nodeSize, to);
        let newSet = mark.addToSet(marks);
        for (let i = 0; i < marks.length; i++) {
          if (!marks[i].isInSet(newSet)) {
            if (removing && removing.to == start && removing.mark.eq(marks[i]))
              removing.to = end;
            else
              removed.push(removing = new RemoveMarkStep(start, end, marks[i]));
          }
        }
        if (adding && adding.to == start)
          adding.to = end;
        else
          added.push(adding = new AddMarkStep(start, end, mark));
      }
    });
    removed.forEach((s) => tr.step(s));
    added.forEach((s) => tr.step(s));
  }
  function removeMark(tr, from2, to, mark) {
    let matched = [], step = 0;
    tr.doc.nodesBetween(from2, to, (node, pos) => {
      if (!node.isInline)
        return;
      step++;
      let toRemove = null;
      if (mark instanceof MarkType) {
        let set = node.marks, found2;
        while (found2 = mark.isInSet(set)) {
          (toRemove || (toRemove = [])).push(found2);
          set = found2.removeFromSet(set);
        }
      } else if (mark) {
        if (mark.isInSet(node.marks))
          toRemove = [mark];
      } else {
        toRemove = node.marks;
      }
      if (toRemove && toRemove.length) {
        let end = Math.min(pos + node.nodeSize, to);
        for (let i = 0; i < toRemove.length; i++) {
          let style2 = toRemove[i], found2;
          for (let j = 0; j < matched.length; j++) {
            let m = matched[j];
            if (m.step == step - 1 && style2.eq(matched[j].style))
              found2 = m;
          }
          if (found2) {
            found2.to = end;
            found2.step = step;
          } else {
            matched.push({ style: style2, from: Math.max(pos, from2), to: end, step });
          }
        }
      }
    });
    matched.forEach((m) => tr.step(new RemoveMarkStep(m.from, m.to, m.style)));
  }
  function clearIncompatible(tr, pos, parentType, match = parentType.contentMatch) {
    let node = tr.doc.nodeAt(pos);
    let delSteps = [], cur = pos + 1;
    for (let i = 0; i < node.childCount; i++) {
      let child = node.child(i), end = cur + child.nodeSize;
      let allowed = match.matchType(child.type);
      if (!allowed) {
        delSteps.push(new ReplaceStep(cur, end, Slice.empty));
      } else {
        match = allowed;
        for (let j = 0; j < child.marks.length; j++)
          if (!parentType.allowsMarkType(child.marks[j].type))
            tr.step(new RemoveMarkStep(cur, end, child.marks[j]));
      }
      cur = end;
    }
    if (!match.validEnd) {
      let fill = match.fillBefore(Fragment.empty, true);
      tr.replace(cur, cur, new Slice(fill, 0, 0));
    }
    for (let i = delSteps.length - 1; i >= 0; i--)
      tr.step(delSteps[i]);
  }
  function canCut(node, start, end) {
    return (start == 0 || node.canReplace(start, node.childCount)) && (end == node.childCount || node.canReplace(0, end));
  }
  function liftTarget(range2) {
    let parent = range2.parent;
    let content = parent.content.cutByIndex(range2.startIndex, range2.endIndex);
    for (let depth = range2.depth; ; --depth) {
      let node = range2.$from.node(depth);
      let index = range2.$from.index(depth), endIndex = range2.$to.indexAfter(depth);
      if (depth < range2.depth && node.canReplace(index, endIndex, content))
        return depth;
      if (depth == 0 || node.type.spec.isolating || !canCut(node, index, endIndex))
        break;
    }
    return null;
  }
  function lift(tr, range2, target) {
    let { $from, $to, depth } = range2;
    let gapStart = $from.before(depth + 1), gapEnd = $to.after(depth + 1);
    let start = gapStart, end = gapEnd;
    let before = Fragment.empty, openStart = 0;
    for (let d = depth, splitting = false; d > target; d--)
      if (splitting || $from.index(d) > 0) {
        splitting = true;
        before = Fragment.from($from.node(d).copy(before));
        openStart++;
      } else {
        start--;
      }
    let after = Fragment.empty, openEnd = 0;
    for (let d = depth, splitting = false; d > target; d--)
      if (splitting || $to.after(d + 1) < $to.end(d)) {
        splitting = true;
        after = Fragment.from($to.node(d).copy(after));
        openEnd++;
      } else {
        end++;
      }
    tr.step(new ReplaceAroundStep(start, end, gapStart, gapEnd, new Slice(before.append(after), openStart, openEnd), before.size - openStart, true));
  }
  function findWrapping(range2, nodeType, attrs = null, innerRange = range2) {
    let around = findWrappingOutside(range2, nodeType);
    let inner = around && findWrappingInside(innerRange, nodeType);
    if (!inner)
      return null;
    return around.map(withAttrs).concat({ type: nodeType, attrs }).concat(inner.map(withAttrs));
  }
  function withAttrs(type) {
    return { type, attrs: null };
  }
  function findWrappingOutside(range2, type) {
    let { parent, startIndex, endIndex } = range2;
    let around = parent.contentMatchAt(startIndex).findWrapping(type);
    if (!around)
      return null;
    let outer = around.length ? around[0] : type;
    return parent.canReplaceWith(startIndex, endIndex, outer) ? around : null;
  }
  function findWrappingInside(range2, type) {
    let { parent, startIndex, endIndex } = range2;
    let inner = parent.child(startIndex);
    let inside = type.contentMatch.findWrapping(inner.type);
    if (!inside)
      return null;
    let lastType = inside.length ? inside[inside.length - 1] : type;
    let innerMatch = lastType.contentMatch;
    for (let i = startIndex; innerMatch && i < endIndex; i++)
      innerMatch = innerMatch.matchType(parent.child(i).type);
    if (!innerMatch || !innerMatch.validEnd)
      return null;
    return inside;
  }
  function wrap(tr, range2, wrappers) {
    let content = Fragment.empty;
    for (let i = wrappers.length - 1; i >= 0; i--) {
      if (content.size) {
        let match = wrappers[i].type.contentMatch.matchFragment(content);
        if (!match || !match.validEnd)
          throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
      }
      content = Fragment.from(wrappers[i].type.create(wrappers[i].attrs, content));
    }
    let start = range2.start, end = range2.end;
    tr.step(new ReplaceAroundStep(start, end, start, end, new Slice(content, 0, 0), wrappers.length, true));
  }
  function setBlockType(tr, from2, to, type, attrs) {
    if (!type.isTextblock)
      throw new RangeError("Type given to setBlockType should be a textblock");
    let mapFrom = tr.steps.length;
    tr.doc.nodesBetween(from2, to, (node, pos) => {
      if (node.isTextblock && !node.hasMarkup(type, attrs) && canChangeType(tr.doc, tr.mapping.slice(mapFrom).map(pos), type)) {
        tr.clearIncompatible(tr.mapping.slice(mapFrom).map(pos, 1), type);
        let mapping = tr.mapping.slice(mapFrom);
        let startM = mapping.map(pos, 1), endM = mapping.map(pos + node.nodeSize, 1);
        tr.step(new ReplaceAroundStep(startM, endM, startM + 1, endM - 1, new Slice(Fragment.from(type.create(attrs, null, node.marks)), 0, 0), 1, true));
        return false;
      }
    });
  }
  function canChangeType(doc4, pos, type) {
    let $pos = doc4.resolve(pos), index = $pos.index();
    return $pos.parent.canReplaceWith(index, index + 1, type);
  }
  function setNodeMarkup(tr, pos, type, attrs, marks) {
    let node = tr.doc.nodeAt(pos);
    if (!node)
      throw new RangeError("No node at given position");
    if (!type)
      type = node.type;
    let newNode = type.create(attrs, null, marks || node.marks);
    if (node.isLeaf)
      return tr.replaceWith(pos, pos + node.nodeSize, newNode);
    if (!type.validContent(node.content))
      throw new RangeError("Invalid content for node type " + type.name);
    tr.step(new ReplaceAroundStep(pos, pos + node.nodeSize, pos + 1, pos + node.nodeSize - 1, new Slice(Fragment.from(newNode), 0, 0), 1, true));
  }
  function canSplit(doc4, pos, depth = 1, typesAfter) {
    let $pos = doc4.resolve(pos), base2 = $pos.depth - depth;
    let innerType = typesAfter && typesAfter[typesAfter.length - 1] || $pos.parent;
    if (base2 < 0 || $pos.parent.type.spec.isolating || !$pos.parent.canReplace($pos.index(), $pos.parent.childCount) || !innerType.type.validContent($pos.parent.content.cutByIndex($pos.index(), $pos.parent.childCount)))
      return false;
    for (let d = $pos.depth - 1, i = depth - 2; d > base2; d--, i--) {
      let node = $pos.node(d), index2 = $pos.index(d);
      if (node.type.spec.isolating)
        return false;
      let rest = node.content.cutByIndex(index2, node.childCount);
      let after = typesAfter && typesAfter[i] || node;
      if (after != node)
        rest = rest.replaceChild(0, after.type.create(after.attrs));
      if (!node.canReplace(index2 + 1, node.childCount) || !after.type.validContent(rest))
        return false;
    }
    let index = $pos.indexAfter(base2);
    let baseType = typesAfter && typesAfter[0];
    return $pos.node(base2).canReplaceWith(index, index, baseType ? baseType.type : $pos.node(base2 + 1).type);
  }
  function split(tr, pos, depth = 1, typesAfter) {
    let $pos = tr.doc.resolve(pos), before = Fragment.empty, after = Fragment.empty;
    for (let d = $pos.depth, e = $pos.depth - depth, i = depth - 1; d > e; d--, i--) {
      before = Fragment.from($pos.node(d).copy(before));
      let typeAfter = typesAfter && typesAfter[i];
      after = Fragment.from(typeAfter ? typeAfter.type.create(typeAfter.attrs, after) : $pos.node(d).copy(after));
    }
    tr.step(new ReplaceStep(pos, pos, new Slice(before.append(after), depth, depth), true));
  }
  function canJoin(doc4, pos) {
    let $pos = doc4.resolve(pos), index = $pos.index();
    return joinable2($pos.nodeBefore, $pos.nodeAfter) && $pos.parent.canReplace(index, index + 1);
  }
  function joinable2(a, b) {
    return !!(a && b && !a.isLeaf && a.canAppend(b));
  }
  function join(tr, pos, depth) {
    let step = new ReplaceStep(pos - depth, pos + depth, Slice.empty, true);
    tr.step(step);
  }
  function insertPoint(doc4, pos, nodeType) {
    let $pos = doc4.resolve(pos);
    if ($pos.parent.canReplaceWith($pos.index(), $pos.index(), nodeType))
      return pos;
    if ($pos.parentOffset == 0)
      for (let d = $pos.depth - 1; d >= 0; d--) {
        let index = $pos.index(d);
        if ($pos.node(d).canReplaceWith(index, index, nodeType))
          return $pos.before(d + 1);
        if (index > 0)
          return null;
      }
    if ($pos.parentOffset == $pos.parent.content.size)
      for (let d = $pos.depth - 1; d >= 0; d--) {
        let index = $pos.indexAfter(d);
        if ($pos.node(d).canReplaceWith(index, index, nodeType))
          return $pos.after(d + 1);
        if (index < $pos.node(d).childCount)
          return null;
      }
    return null;
  }
  function dropPoint(doc4, pos, slice2) {
    let $pos = doc4.resolve(pos);
    if (!slice2.content.size)
      return pos;
    let content = slice2.content;
    for (let i = 0; i < slice2.openStart; i++)
      content = content.firstChild.content;
    for (let pass = 1; pass <= (slice2.openStart == 0 && slice2.size ? 2 : 1); pass++) {
      for (let d = $pos.depth; d >= 0; d--) {
        let bias = d == $pos.depth ? 0 : $pos.pos <= ($pos.start(d + 1) + $pos.end(d + 1)) / 2 ? -1 : 1;
        let insertPos = $pos.index(d) + (bias > 0 ? 1 : 0);
        let parent = $pos.node(d), fits = false;
        if (pass == 1) {
          fits = parent.canReplace(insertPos, insertPos, content);
        } else {
          let wrapping = parent.contentMatchAt(insertPos).findWrapping(content.firstChild.type);
          fits = wrapping && parent.canReplaceWith(insertPos, insertPos, wrapping[0]);
        }
        if (fits)
          return bias == 0 ? $pos.pos : bias < 0 ? $pos.before(d + 1) : $pos.after(d + 1);
      }
    }
    return null;
  }
  function replaceStep(doc4, from2, to = from2, slice2 = Slice.empty) {
    if (from2 == to && !slice2.size)
      return null;
    let $from = doc4.resolve(from2), $to = doc4.resolve(to);
    if (fitsTrivially($from, $to, slice2))
      return new ReplaceStep(from2, to, slice2);
    return new Fitter($from, $to, slice2).fit();
  }
  function fitsTrivially($from, $to, slice2) {
    return !slice2.openStart && !slice2.openEnd && $from.start() == $to.start() && $from.parent.canReplace($from.index(), $to.index(), slice2.content);
  }
  function dropFromFragment(fragment, depth, count) {
    if (depth == 0)
      return fragment.cutByIndex(count, fragment.childCount);
    return fragment.replaceChild(0, fragment.firstChild.copy(dropFromFragment(fragment.firstChild.content, depth - 1, count)));
  }
  function addToFragment(fragment, depth, content) {
    if (depth == 0)
      return fragment.append(content);
    return fragment.replaceChild(fragment.childCount - 1, fragment.lastChild.copy(addToFragment(fragment.lastChild.content, depth - 1, content)));
  }
  function contentAt(fragment, depth) {
    for (let i = 0; i < depth; i++)
      fragment = fragment.firstChild.content;
    return fragment;
  }
  function closeNodeStart(node, openStart, openEnd) {
    if (openStart <= 0)
      return node;
    let frag = node.content;
    if (openStart > 1)
      frag = frag.replaceChild(0, closeNodeStart(frag.firstChild, openStart - 1, frag.childCount == 1 ? openEnd - 1 : 0));
    if (openStart > 0) {
      frag = node.type.contentMatch.fillBefore(frag).append(frag);
      if (openEnd <= 0)
        frag = frag.append(node.type.contentMatch.matchFragment(frag).fillBefore(Fragment.empty, true));
    }
    return node.copy(frag);
  }
  function contentAfterFits($to, depth, type, match, open) {
    let node = $to.node(depth), index = open ? $to.indexAfter(depth) : $to.index(depth);
    if (index == node.childCount && !type.compatibleContent(node.type))
      return null;
    let fit = match.fillBefore(node.content, true, index);
    return fit && !invalidMarks(type, node.content, index) ? fit : null;
  }
  function invalidMarks(type, fragment, start) {
    for (let i = start; i < fragment.childCount; i++)
      if (!type.allowsMarks(fragment.child(i).marks))
        return true;
    return false;
  }
  function definesContent(type) {
    return type.spec.defining || type.spec.definingForContent;
  }
  function replaceRange(tr, from2, to, slice2) {
    if (!slice2.size)
      return tr.deleteRange(from2, to);
    let $from = tr.doc.resolve(from2), $to = tr.doc.resolve(to);
    if (fitsTrivially($from, $to, slice2))
      return tr.step(new ReplaceStep(from2, to, slice2));
    let targetDepths = coveredDepths($from, tr.doc.resolve(to));
    if (targetDepths[targetDepths.length - 1] == 0)
      targetDepths.pop();
    let preferredTarget = -($from.depth + 1);
    targetDepths.unshift(preferredTarget);
    for (let d = $from.depth, pos = $from.pos - 1; d > 0; d--, pos--) {
      let spec = $from.node(d).type.spec;
      if (spec.defining || spec.definingAsContext || spec.isolating)
        break;
      if (targetDepths.indexOf(d) > -1)
        preferredTarget = d;
      else if ($from.before(d) == pos)
        targetDepths.splice(1, 0, -d);
    }
    let preferredTargetIndex = targetDepths.indexOf(preferredTarget);
    let leftNodes = [], preferredDepth = slice2.openStart;
    for (let content = slice2.content, i = 0; ; i++) {
      let node = content.firstChild;
      leftNodes.push(node);
      if (i == slice2.openStart)
        break;
      content = node.content;
    }
    for (let d = preferredDepth - 1; d >= 0; d--) {
      let type = leftNodes[d].type, def = definesContent(type);
      if (def && $from.node(preferredTargetIndex).type != type)
        preferredDepth = d;
      else if (def || !type.isTextblock)
        break;
    }
    for (let j = slice2.openStart; j >= 0; j--) {
      let openDepth = (j + preferredDepth + 1) % (slice2.openStart + 1);
      let insert = leftNodes[openDepth];
      if (!insert)
        continue;
      for (let i = 0; i < targetDepths.length; i++) {
        let targetDepth = targetDepths[(i + preferredTargetIndex) % targetDepths.length], expand = true;
        if (targetDepth < 0) {
          expand = false;
          targetDepth = -targetDepth;
        }
        let parent = $from.node(targetDepth - 1), index = $from.index(targetDepth - 1);
        if (parent.canReplaceWith(index, index, insert.type, insert.marks))
          return tr.replace($from.before(targetDepth), expand ? $to.after(targetDepth) : to, new Slice(closeFragment(slice2.content, 0, slice2.openStart, openDepth), openDepth, slice2.openEnd));
      }
    }
    let startSteps = tr.steps.length;
    for (let i = targetDepths.length - 1; i >= 0; i--) {
      tr.replace(from2, to, slice2);
      if (tr.steps.length > startSteps)
        break;
      let depth = targetDepths[i];
      if (depth < 0)
        continue;
      from2 = $from.before(depth);
      to = $to.after(depth);
    }
  }
  function closeFragment(fragment, depth, oldOpen, newOpen, parent) {
    if (depth < oldOpen) {
      let first2 = fragment.firstChild;
      fragment = fragment.replaceChild(0, first2.copy(closeFragment(first2.content, depth + 1, oldOpen, newOpen, first2)));
    }
    if (depth > newOpen) {
      let match = parent.contentMatchAt(0);
      let start = match.fillBefore(fragment).append(fragment);
      fragment = start.append(match.matchFragment(start).fillBefore(Fragment.empty, true));
    }
    return fragment;
  }
  function replaceRangeWith(tr, from2, to, node) {
    if (!node.isInline && from2 == to && tr.doc.resolve(from2).parent.content.size) {
      let point = insertPoint(tr.doc, from2, node.type);
      if (point != null)
        from2 = to = point;
    }
    tr.replaceRange(from2, to, new Slice(Fragment.from(node), 0, 0));
  }
  function deleteRange(tr, from2, to) {
    let $from = tr.doc.resolve(from2), $to = tr.doc.resolve(to);
    let covered = coveredDepths($from, $to);
    for (let i = 0; i < covered.length; i++) {
      let depth = covered[i], last = i == covered.length - 1;
      if (last && depth == 0 || $from.node(depth).type.contentMatch.validEnd)
        return tr.delete($from.start(depth), $to.end(depth));
      if (depth > 0 && (last || $from.node(depth - 1).canReplace($from.index(depth - 1), $to.indexAfter(depth - 1))))
        return tr.delete($from.before(depth), $to.after(depth));
    }
    for (let d = 1; d <= $from.depth && d <= $to.depth; d++) {
      if (from2 - $from.start(d) == $from.depth - d && to > $from.end(d) && $to.end(d) - to != $to.depth - d)
        return tr.delete($from.before(d), to);
    }
    tr.delete(from2, to);
  }
  function coveredDepths($from, $to) {
    let result = [], minDepth = Math.min($from.depth, $to.depth);
    for (let d = minDepth; d >= 0; d--) {
      let start = $from.start(d);
      if (start < $from.pos - ($from.depth - d) || $to.end(d) > $to.pos + ($to.depth - d) || $from.node(d).type.spec.isolating || $to.node(d).type.spec.isolating)
        break;
      if (start == $to.start(d) || d == $from.depth && d == $to.depth && $from.parent.inlineContent && $to.parent.inlineContent && d && $to.start(d - 1) == start - 1)
        result.push(d);
    }
    return result;
  }
  var lower16, factor16, DEL_BEFORE, DEL_AFTER, DEL_ACROSS, DEL_SIDE, MapResult, StepMap, Mapping, stepsByID, Step, StepResult, AddMarkStep, RemoveMarkStep, ReplaceStep, ReplaceAroundStep, Fitter, TransformError, Transform;
  var init_dist3 = __esm({
    "node_modules/prosemirror-transform/dist/index.js"() {
      init_dist2();
      lower16 = 65535;
      factor16 = Math.pow(2, 16);
      DEL_BEFORE = 1;
      DEL_AFTER = 2;
      DEL_ACROSS = 4;
      DEL_SIDE = 8;
      MapResult = class {
        constructor(pos, delInfo, recover) {
          this.pos = pos;
          this.delInfo = delInfo;
          this.recover = recover;
        }
        get deleted() {
          return (this.delInfo & DEL_SIDE) > 0;
        }
        get deletedBefore() {
          return (this.delInfo & (DEL_BEFORE | DEL_ACROSS)) > 0;
        }
        get deletedAfter() {
          return (this.delInfo & (DEL_AFTER | DEL_ACROSS)) > 0;
        }
        get deletedAcross() {
          return (this.delInfo & DEL_ACROSS) > 0;
        }
      };
      StepMap = class {
        constructor(ranges, inverted = false) {
          this.ranges = ranges;
          this.inverted = inverted;
          if (!ranges.length && StepMap.empty)
            return StepMap.empty;
        }
        recover(value) {
          let diff = 0, index = recoverIndex(value);
          if (!this.inverted)
            for (let i = 0; i < index; i++)
              diff += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
          return this.ranges[index * 3] + diff + recoverOffset(value);
        }
        mapResult(pos, assoc = 1) {
          return this._map(pos, assoc, false);
        }
        map(pos, assoc = 1) {
          return this._map(pos, assoc, true);
        }
        _map(pos, assoc, simple) {
          let diff = 0, oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
          for (let i = 0; i < this.ranges.length; i += 3) {
            let start = this.ranges[i] - (this.inverted ? diff : 0);
            if (start > pos)
              break;
            let oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex], end = start + oldSize;
            if (pos <= end) {
              let side = !oldSize ? assoc : pos == start ? -1 : pos == end ? 1 : assoc;
              let result = start + diff + (side < 0 ? 0 : newSize);
              if (simple)
                return result;
              let recover = pos == (assoc < 0 ? start : end) ? null : makeRecover(i / 3, pos - start);
              let del2 = pos == start ? DEL_AFTER : pos == end ? DEL_BEFORE : DEL_ACROSS;
              if (assoc < 0 ? pos != start : pos != end)
                del2 |= DEL_SIDE;
              return new MapResult(result, del2, recover);
            }
            diff += newSize - oldSize;
          }
          return simple ? pos + diff : new MapResult(pos + diff, 0, null);
        }
        touches(pos, recover) {
          let diff = 0, index = recoverIndex(recover);
          let oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
          for (let i = 0; i < this.ranges.length; i += 3) {
            let start = this.ranges[i] - (this.inverted ? diff : 0);
            if (start > pos)
              break;
            let oldSize = this.ranges[i + oldIndex], end = start + oldSize;
            if (pos <= end && i == index * 3)
              return true;
            diff += this.ranges[i + newIndex] - oldSize;
          }
          return false;
        }
        forEach(f) {
          let oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
          for (let i = 0, diff = 0; i < this.ranges.length; i += 3) {
            let start = this.ranges[i], oldStart = start - (this.inverted ? diff : 0), newStart = start + (this.inverted ? 0 : diff);
            let oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex];
            f(oldStart, oldStart + oldSize, newStart, newStart + newSize);
            diff += newSize - oldSize;
          }
        }
        invert() {
          return new StepMap(this.ranges, !this.inverted);
        }
        toString() {
          return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
        }
        static offset(n) {
          return n == 0 ? StepMap.empty : new StepMap(n < 0 ? [0, -n, 0] : [0, 0, n]);
        }
      };
      StepMap.empty = new StepMap([]);
      Mapping = class {
        constructor(maps = [], mirror, from2 = 0, to = maps.length) {
          this.maps = maps;
          this.mirror = mirror;
          this.from = from2;
          this.to = to;
        }
        slice(from2 = 0, to = this.maps.length) {
          return new Mapping(this.maps, this.mirror, from2, to);
        }
        copy() {
          return new Mapping(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
        }
        appendMap(map2, mirrors) {
          this.to = this.maps.push(map2);
          if (mirrors != null)
            this.setMirror(this.maps.length - 1, mirrors);
        }
        appendMapping(mapping) {
          for (let i = 0, startSize = this.maps.length; i < mapping.maps.length; i++) {
            let mirr = mapping.getMirror(i);
            this.appendMap(mapping.maps[i], mirr != null && mirr < i ? startSize + mirr : void 0);
          }
        }
        getMirror(n) {
          if (this.mirror) {
            for (let i = 0; i < this.mirror.length; i++)
              if (this.mirror[i] == n)
                return this.mirror[i + (i % 2 ? -1 : 1)];
          }
        }
        setMirror(n, m) {
          if (!this.mirror)
            this.mirror = [];
          this.mirror.push(n, m);
        }
        appendMappingInverted(mapping) {
          for (let i = mapping.maps.length - 1, totalSize = this.maps.length + mapping.maps.length; i >= 0; i--) {
            let mirr = mapping.getMirror(i);
            this.appendMap(mapping.maps[i].invert(), mirr != null && mirr > i ? totalSize - mirr - 1 : void 0);
          }
        }
        invert() {
          let inverse = new Mapping();
          inverse.appendMappingInverted(this);
          return inverse;
        }
        map(pos, assoc = 1) {
          if (this.mirror)
            return this._map(pos, assoc, true);
          for (let i = this.from; i < this.to; i++)
            pos = this.maps[i].map(pos, assoc);
          return pos;
        }
        mapResult(pos, assoc = 1) {
          return this._map(pos, assoc, false);
        }
        _map(pos, assoc, simple) {
          let delInfo = 0;
          for (let i = this.from; i < this.to; i++) {
            let map2 = this.maps[i], result = map2.mapResult(pos, assoc);
            if (result.recover != null) {
              let corr = this.getMirror(i);
              if (corr != null && corr > i && corr < this.to) {
                i = corr;
                pos = this.maps[corr].recover(result.recover);
                continue;
              }
            }
            delInfo |= result.delInfo;
            pos = result.pos;
          }
          return simple ? pos : new MapResult(pos, delInfo, null);
        }
      };
      stepsByID = /* @__PURE__ */ Object.create(null);
      Step = class {
        getMap() {
          return StepMap.empty;
        }
        merge(other) {
          return null;
        }
        static fromJSON(schema, json) {
          if (!json || !json.stepType)
            throw new RangeError("Invalid input for Step.fromJSON");
          let type = stepsByID[json.stepType];
          if (!type)
            throw new RangeError(`No step type ${json.stepType} defined`);
          return type.fromJSON(schema, json);
        }
        static jsonID(id, stepClass) {
          if (id in stepsByID)
            throw new RangeError("Duplicate use of step JSON ID " + id);
          stepsByID[id] = stepClass;
          stepClass.prototype.jsonID = id;
          return stepClass;
        }
      };
      StepResult = class {
        constructor(doc4, failed) {
          this.doc = doc4;
          this.failed = failed;
        }
        static ok(doc4) {
          return new StepResult(doc4, null);
        }
        static fail(message) {
          return new StepResult(null, message);
        }
        static fromReplace(doc4, from2, to, slice2) {
          try {
            return StepResult.ok(doc4.replace(from2, to, slice2));
          } catch (e) {
            if (e instanceof ReplaceError)
              return StepResult.fail(e.message);
            throw e;
          }
        }
      };
      AddMarkStep = class extends Step {
        constructor(from2, to, mark) {
          super();
          this.from = from2;
          this.to = to;
          this.mark = mark;
        }
        apply(doc4) {
          let oldSlice = doc4.slice(this.from, this.to), $from = doc4.resolve(this.from);
          let parent = $from.node($from.sharedDepth(this.to));
          let slice2 = new Slice(mapFragment(oldSlice.content, (node, parent2) => {
            if (!node.isAtom || !parent2.type.allowsMarkType(this.mark.type))
              return node;
            return node.mark(this.mark.addToSet(node.marks));
          }, parent), oldSlice.openStart, oldSlice.openEnd);
          return StepResult.fromReplace(doc4, this.from, this.to, slice2);
        }
        invert() {
          return new RemoveMarkStep(this.from, this.to, this.mark);
        }
        map(mapping) {
          let from2 = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
          if (from2.deleted && to.deleted || from2.pos >= to.pos)
            return null;
          return new AddMarkStep(from2.pos, to.pos, this.mark);
        }
        merge(other) {
          if (other instanceof AddMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from)
            return new AddMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
          return null;
        }
        toJSON() {
          return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
          };
        }
        static fromJSON(schema, json) {
          if (typeof json.from != "number" || typeof json.to != "number")
            throw new RangeError("Invalid input for AddMarkStep.fromJSON");
          return new AddMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
        }
      };
      Step.jsonID("addMark", AddMarkStep);
      RemoveMarkStep = class extends Step {
        constructor(from2, to, mark) {
          super();
          this.from = from2;
          this.to = to;
          this.mark = mark;
        }
        apply(doc4) {
          let oldSlice = doc4.slice(this.from, this.to);
          let slice2 = new Slice(mapFragment(oldSlice.content, (node) => {
            return node.mark(this.mark.removeFromSet(node.marks));
          }, doc4), oldSlice.openStart, oldSlice.openEnd);
          return StepResult.fromReplace(doc4, this.from, this.to, slice2);
        }
        invert() {
          return new AddMarkStep(this.from, this.to, this.mark);
        }
        map(mapping) {
          let from2 = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
          if (from2.deleted && to.deleted || from2.pos >= to.pos)
            return null;
          return new RemoveMarkStep(from2.pos, to.pos, this.mark);
        }
        merge(other) {
          if (other instanceof RemoveMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from)
            return new RemoveMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
          return null;
        }
        toJSON() {
          return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
          };
        }
        static fromJSON(schema, json) {
          if (typeof json.from != "number" || typeof json.to != "number")
            throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
          return new RemoveMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
        }
      };
      Step.jsonID("removeMark", RemoveMarkStep);
      ReplaceStep = class extends Step {
        constructor(from2, to, slice2, structure = false) {
          super();
          this.from = from2;
          this.to = to;
          this.slice = slice2;
          this.structure = structure;
        }
        apply(doc4) {
          if (this.structure && contentBetween(doc4, this.from, this.to))
            return StepResult.fail("Structure replace would overwrite content");
          return StepResult.fromReplace(doc4, this.from, this.to, this.slice);
        }
        getMap() {
          return new StepMap([this.from, this.to - this.from, this.slice.size]);
        }
        invert(doc4) {
          return new ReplaceStep(this.from, this.from + this.slice.size, doc4.slice(this.from, this.to));
        }
        map(mapping) {
          let from2 = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
          if (from2.deletedAcross && to.deletedAcross)
            return null;
          return new ReplaceStep(from2.pos, Math.max(from2.pos, to.pos), this.slice);
        }
        merge(other) {
          if (!(other instanceof ReplaceStep) || other.structure || this.structure)
            return null;
          if (this.from + this.slice.size == other.from && !this.slice.openEnd && !other.slice.openStart) {
            let slice2 = this.slice.size + other.slice.size == 0 ? Slice.empty : new Slice(this.slice.content.append(other.slice.content), this.slice.openStart, other.slice.openEnd);
            return new ReplaceStep(this.from, this.to + (other.to - other.from), slice2, this.structure);
          } else if (other.to == this.from && !this.slice.openStart && !other.slice.openEnd) {
            let slice2 = this.slice.size + other.slice.size == 0 ? Slice.empty : new Slice(other.slice.content.append(this.slice.content), other.slice.openStart, this.slice.openEnd);
            return new ReplaceStep(other.from, this.to, slice2, this.structure);
          } else {
            return null;
          }
        }
        toJSON() {
          let json = { stepType: "replace", from: this.from, to: this.to };
          if (this.slice.size)
            json.slice = this.slice.toJSON();
          if (this.structure)
            json.structure = true;
          return json;
        }
        static fromJSON(schema, json) {
          if (typeof json.from != "number" || typeof json.to != "number")
            throw new RangeError("Invalid input for ReplaceStep.fromJSON");
          return new ReplaceStep(json.from, json.to, Slice.fromJSON(schema, json.slice), !!json.structure);
        }
      };
      Step.jsonID("replace", ReplaceStep);
      ReplaceAroundStep = class extends Step {
        constructor(from2, to, gapFrom, gapTo, slice2, insert, structure = false) {
          super();
          this.from = from2;
          this.to = to;
          this.gapFrom = gapFrom;
          this.gapTo = gapTo;
          this.slice = slice2;
          this.insert = insert;
          this.structure = structure;
        }
        apply(doc4) {
          if (this.structure && (contentBetween(doc4, this.from, this.gapFrom) || contentBetween(doc4, this.gapTo, this.to)))
            return StepResult.fail("Structure gap-replace would overwrite content");
          let gap = doc4.slice(this.gapFrom, this.gapTo);
          if (gap.openStart || gap.openEnd)
            return StepResult.fail("Gap is not a flat range");
          let inserted = this.slice.insertAt(this.insert, gap.content);
          if (!inserted)
            return StepResult.fail("Content does not fit in gap");
          return StepResult.fromReplace(doc4, this.from, this.to, inserted);
        }
        getMap() {
          return new StepMap([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert
          ]);
        }
        invert(doc4) {
          let gap = this.gapTo - this.gapFrom;
          return new ReplaceAroundStep(this.from, this.from + this.slice.size + gap, this.from + this.insert, this.from + this.insert + gap, doc4.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
        }
        map(mapping) {
          let from2 = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
          let gapFrom = mapping.map(this.gapFrom, -1), gapTo = mapping.map(this.gapTo, 1);
          if (from2.deletedAcross && to.deletedAcross || gapFrom < from2.pos || gapTo > to.pos)
            return null;
          return new ReplaceAroundStep(from2.pos, to.pos, gapFrom, gapTo, this.slice, this.insert, this.structure);
        }
        toJSON() {
          let json = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert
          };
          if (this.slice.size)
            json.slice = this.slice.toJSON();
          if (this.structure)
            json.structure = true;
          return json;
        }
        static fromJSON(schema, json) {
          if (typeof json.from != "number" || typeof json.to != "number" || typeof json.gapFrom != "number" || typeof json.gapTo != "number" || typeof json.insert != "number")
            throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
          return new ReplaceAroundStep(json.from, json.to, json.gapFrom, json.gapTo, Slice.fromJSON(schema, json.slice), json.insert, !!json.structure);
        }
      };
      Step.jsonID("replaceAround", ReplaceAroundStep);
      Fitter = class {
        constructor($from, $to, unplaced) {
          this.$from = $from;
          this.$to = $to;
          this.unplaced = unplaced;
          this.frontier = [];
          this.placed = Fragment.empty;
          for (let i = 0; i <= $from.depth; i++) {
            let node = $from.node(i);
            this.frontier.push({
              type: node.type,
              match: node.contentMatchAt($from.indexAfter(i))
            });
          }
          for (let i = $from.depth; i > 0; i--)
            this.placed = Fragment.from($from.node(i).copy(this.placed));
        }
        get depth() {
          return this.frontier.length - 1;
        }
        fit() {
          while (this.unplaced.size) {
            let fit = this.findFittable();
            if (fit)
              this.placeNodes(fit);
            else
              this.openMore() || this.dropNode();
          }
          let moveInline = this.mustMoveInline(), placedSize = this.placed.size - this.depth - this.$from.depth;
          let $from = this.$from, $to = this.close(moveInline < 0 ? this.$to : $from.doc.resolve(moveInline));
          if (!$to)
            return null;
          let content = this.placed, openStart = $from.depth, openEnd = $to.depth;
          while (openStart && openEnd && content.childCount == 1) {
            content = content.firstChild.content;
            openStart--;
            openEnd--;
          }
          let slice2 = new Slice(content, openStart, openEnd);
          if (moveInline > -1)
            return new ReplaceAroundStep($from.pos, moveInline, this.$to.pos, this.$to.end(), slice2, placedSize);
          if (slice2.size || $from.pos != this.$to.pos)
            return new ReplaceStep($from.pos, $to.pos, slice2);
          return null;
        }
        findFittable() {
          for (let pass = 1; pass <= 2; pass++) {
            for (let sliceDepth = this.unplaced.openStart; sliceDepth >= 0; sliceDepth--) {
              let fragment, parent = null;
              if (sliceDepth) {
                parent = contentAt(this.unplaced.content, sliceDepth - 1).firstChild;
                fragment = parent.content;
              } else {
                fragment = this.unplaced.content;
              }
              let first2 = fragment.firstChild;
              for (let frontierDepth = this.depth; frontierDepth >= 0; frontierDepth--) {
                let { type, match } = this.frontier[frontierDepth], wrap2, inject = null;
                if (pass == 1 && (first2 ? match.matchType(first2.type) || (inject = match.fillBefore(Fragment.from(first2), false)) : parent && type.compatibleContent(parent.type)))
                  return { sliceDepth, frontierDepth, parent, inject };
                else if (pass == 2 && first2 && (wrap2 = match.findWrapping(first2.type)))
                  return { sliceDepth, frontierDepth, parent, wrap: wrap2 };
                if (parent && match.matchType(parent.type))
                  break;
              }
            }
          }
        }
        openMore() {
          let { content, openStart, openEnd } = this.unplaced;
          let inner = contentAt(content, openStart);
          if (!inner.childCount || inner.firstChild.isLeaf)
            return false;
          this.unplaced = new Slice(content, openStart + 1, Math.max(openEnd, inner.size + openStart >= content.size - openEnd ? openStart + 1 : 0));
          return true;
        }
        dropNode() {
          let { content, openStart, openEnd } = this.unplaced;
          let inner = contentAt(content, openStart);
          if (inner.childCount <= 1 && openStart > 0) {
            let openAtEnd = content.size - openStart <= openStart + inner.size;
            this.unplaced = new Slice(dropFromFragment(content, openStart - 1, 1), openStart - 1, openAtEnd ? openStart - 1 : openEnd);
          } else {
            this.unplaced = new Slice(dropFromFragment(content, openStart, 1), openStart, openEnd);
          }
        }
        placeNodes({ sliceDepth, frontierDepth, parent, inject, wrap: wrap2 }) {
          while (this.depth > frontierDepth)
            this.closeFrontierNode();
          if (wrap2)
            for (let i = 0; i < wrap2.length; i++)
              this.openFrontierNode(wrap2[i]);
          let slice2 = this.unplaced, fragment = parent ? parent.content : slice2.content;
          let openStart = slice2.openStart - sliceDepth;
          let taken = 0, add = [];
          let { match, type } = this.frontier[frontierDepth];
          if (inject) {
            for (let i = 0; i < inject.childCount; i++)
              add.push(inject.child(i));
            match = match.matchFragment(inject);
          }
          let openEndCount = fragment.size + sliceDepth - (slice2.content.size - slice2.openEnd);
          while (taken < fragment.childCount) {
            let next = fragment.child(taken), matches2 = match.matchType(next.type);
            if (!matches2)
              break;
            taken++;
            if (taken > 1 || openStart == 0 || next.content.size) {
              match = matches2;
              add.push(closeNodeStart(next.mark(type.allowedMarks(next.marks)), taken == 1 ? openStart : 0, taken == fragment.childCount ? openEndCount : -1));
            }
          }
          let toEnd = taken == fragment.childCount;
          if (!toEnd)
            openEndCount = -1;
          this.placed = addToFragment(this.placed, frontierDepth, Fragment.from(add));
          this.frontier[frontierDepth].match = match;
          if (toEnd && openEndCount < 0 && parent && parent.type == this.frontier[this.depth].type && this.frontier.length > 1)
            this.closeFrontierNode();
          for (let i = 0, cur = fragment; i < openEndCount; i++) {
            let node = cur.lastChild;
            this.frontier.push({ type: node.type, match: node.contentMatchAt(node.childCount) });
            cur = node.content;
          }
          this.unplaced = !toEnd ? new Slice(dropFromFragment(slice2.content, sliceDepth, taken), slice2.openStart, slice2.openEnd) : sliceDepth == 0 ? Slice.empty : new Slice(dropFromFragment(slice2.content, sliceDepth - 1, 1), sliceDepth - 1, openEndCount < 0 ? slice2.openEnd : sliceDepth - 1);
        }
        mustMoveInline() {
          if (!this.$to.parent.isTextblock)
            return -1;
          let top = this.frontier[this.depth], level;
          if (!top.type.isTextblock || !contentAfterFits(this.$to, this.$to.depth, top.type, top.match, false) || this.$to.depth == this.depth && (level = this.findCloseLevel(this.$to)) && level.depth == this.depth)
            return -1;
          let { depth } = this.$to, after = this.$to.after(depth);
          while (depth > 1 && after == this.$to.end(--depth))
            ++after;
          return after;
        }
        findCloseLevel($to) {
          scan:
            for (let i = Math.min(this.depth, $to.depth); i >= 0; i--) {
              let { match, type } = this.frontier[i];
              let dropInner = i < $to.depth && $to.end(i + 1) == $to.pos + ($to.depth - (i + 1));
              let fit = contentAfterFits($to, i, type, match, dropInner);
              if (!fit)
                continue;
              for (let d = i - 1; d >= 0; d--) {
                let { match: match2, type: type2 } = this.frontier[d];
                let matches2 = contentAfterFits($to, d, type2, match2, true);
                if (!matches2 || matches2.childCount)
                  continue scan;
              }
              return { depth: i, fit, move: dropInner ? $to.doc.resolve($to.after(i + 1)) : $to };
            }
        }
        close($to) {
          let close2 = this.findCloseLevel($to);
          if (!close2)
            return null;
          while (this.depth > close2.depth)
            this.closeFrontierNode();
          if (close2.fit.childCount)
            this.placed = addToFragment(this.placed, close2.depth, close2.fit);
          $to = close2.move;
          for (let d = close2.depth + 1; d <= $to.depth; d++) {
            let node = $to.node(d), add = node.type.contentMatch.fillBefore(node.content, true, $to.index(d));
            this.openFrontierNode(node.type, node.attrs, add);
          }
          return $to;
        }
        openFrontierNode(type, attrs = null, content) {
          let top = this.frontier[this.depth];
          top.match = top.match.matchType(type);
          this.placed = addToFragment(this.placed, this.depth, Fragment.from(type.create(attrs, content)));
          this.frontier.push({ type, match: type.contentMatch });
        }
        closeFrontierNode() {
          let open = this.frontier.pop();
          let add = open.match.fillBefore(Fragment.empty, true);
          if (add.childCount)
            this.placed = addToFragment(this.placed, this.frontier.length, add);
        }
      };
      TransformError = class extends Error {
      };
      TransformError = function TransformError2(message) {
        let err = Error.call(this, message);
        err.__proto__ = TransformError2.prototype;
        return err;
      };
      TransformError.prototype = Object.create(Error.prototype);
      TransformError.prototype.constructor = TransformError;
      TransformError.prototype.name = "TransformError";
      Transform = class {
        constructor(doc4) {
          this.doc = doc4;
          this.steps = [];
          this.docs = [];
          this.mapping = new Mapping();
        }
        get before() {
          return this.docs.length ? this.docs[0] : this.doc;
        }
        step(step) {
          let result = this.maybeStep(step);
          if (result.failed)
            throw new TransformError(result.failed);
          return this;
        }
        maybeStep(step) {
          let result = step.apply(this.doc);
          if (!result.failed)
            this.addStep(step, result.doc);
          return result;
        }
        get docChanged() {
          return this.steps.length > 0;
        }
        addStep(step, doc4) {
          this.docs.push(this.doc);
          this.steps.push(step);
          this.mapping.appendMap(step.getMap());
          this.doc = doc4;
        }
        replace(from2, to = from2, slice2 = Slice.empty) {
          let step = replaceStep(this.doc, from2, to, slice2);
          if (step)
            this.step(step);
          return this;
        }
        replaceWith(from2, to, content) {
          return this.replace(from2, to, new Slice(Fragment.from(content), 0, 0));
        }
        delete(from2, to) {
          return this.replace(from2, to, Slice.empty);
        }
        insert(pos, content) {
          return this.replaceWith(pos, pos, content);
        }
        replaceRange(from2, to, slice2) {
          replaceRange(this, from2, to, slice2);
          return this;
        }
        replaceRangeWith(from2, to, node) {
          replaceRangeWith(this, from2, to, node);
          return this;
        }
        deleteRange(from2, to) {
          deleteRange(this, from2, to);
          return this;
        }
        lift(range2, target) {
          lift(this, range2, target);
          return this;
        }
        join(pos, depth = 1) {
          join(this, pos, depth);
          return this;
        }
        wrap(range2, wrappers) {
          wrap(this, range2, wrappers);
          return this;
        }
        setBlockType(from2, to = from2, type, attrs = null) {
          setBlockType(this, from2, to, type, attrs);
          return this;
        }
        setNodeMarkup(pos, type, attrs = null, marks = []) {
          setNodeMarkup(this, pos, type, attrs, marks);
          return this;
        }
        split(pos, depth = 1, typesAfter) {
          split(this, pos, depth, typesAfter);
          return this;
        }
        addMark(from2, to, mark) {
          addMark(this, from2, to, mark);
          return this;
        }
        removeMark(from2, to, mark) {
          removeMark(this, from2, to, mark);
          return this;
        }
        clearIncompatible(pos, parentType, match) {
          clearIncompatible(this, pos, parentType, match);
          return this;
        }
      };
    }
  });

  // node_modules/prosemirror-state/dist/index.js
  function checkTextSelection($pos) {
    if (!warnedAboutTextSelection && !$pos.parent.inlineContent) {
      warnedAboutTextSelection = true;
      console["warn"]("TextSelection endpoint not pointing into a node with inline content (" + $pos.parent.type.name + ")");
    }
  }
  function findSelectionIn(doc4, node, pos, index, dir, text = false) {
    if (node.inlineContent)
      return TextSelection.create(doc4, pos);
    for (let i = index - (dir > 0 ? 0 : 1); dir > 0 ? i < node.childCount : i >= 0; i += dir) {
      let child = node.child(i);
      if (!child.isAtom) {
        let inner = findSelectionIn(doc4, child, pos + dir, dir < 0 ? child.childCount : 0, dir, text);
        if (inner)
          return inner;
      } else if (!text && NodeSelection.isSelectable(child)) {
        return NodeSelection.create(doc4, pos - (dir < 0 ? child.nodeSize : 0));
      }
      pos += child.nodeSize * dir;
    }
    return null;
  }
  function selectionToInsertionEnd(tr, startLen, bias) {
    let last = tr.steps.length - 1;
    if (last < startLen)
      return;
    let step = tr.steps[last];
    if (!(step instanceof ReplaceStep || step instanceof ReplaceAroundStep))
      return;
    let map2 = tr.mapping.maps[last], end;
    map2.forEach((_from, _to, _newFrom, newTo) => {
      if (end == null)
        end = newTo;
    });
    tr.setSelection(Selection.near(tr.doc.resolve(end), bias));
  }
  function bind(f, self2) {
    return !self2 || !f ? f : f.bind(self2);
  }
  function bindProps(obj, self2, target) {
    for (let prop in obj) {
      let val = obj[prop];
      if (val instanceof Function)
        val = val.bind(self2);
      else if (prop == "handleDOMEvents")
        val = bindProps(val, self2, {});
      target[prop] = val;
    }
    return target;
  }
  function createKey(name) {
    if (name in keys)
      return name + "$" + ++keys[name];
    keys[name] = 0;
    return name + "$";
  }
  var classesById, Selection, SelectionRange, warnedAboutTextSelection, TextSelection, TextBookmark, NodeSelection, NodeBookmark, AllSelection, AllBookmark, UPDATED_SEL, UPDATED_MARKS, UPDATED_SCROLL, Transaction, FieldDesc, baseFields, Configuration, EditorState, Plugin, keys, PluginKey;
  var init_dist4 = __esm({
    "node_modules/prosemirror-state/dist/index.js"() {
      init_dist2();
      init_dist3();
      classesById = /* @__PURE__ */ Object.create(null);
      Selection = class {
        constructor($anchor, $head, ranges) {
          this.$anchor = $anchor;
          this.$head = $head;
          this.ranges = ranges || [new SelectionRange($anchor.min($head), $anchor.max($head))];
        }
        get anchor() {
          return this.$anchor.pos;
        }
        get head() {
          return this.$head.pos;
        }
        get from() {
          return this.$from.pos;
        }
        get to() {
          return this.$to.pos;
        }
        get $from() {
          return this.ranges[0].$from;
        }
        get $to() {
          return this.ranges[0].$to;
        }
        get empty() {
          let ranges = this.ranges;
          for (let i = 0; i < ranges.length; i++)
            if (ranges[i].$from.pos != ranges[i].$to.pos)
              return false;
          return true;
        }
        content() {
          return this.$from.doc.slice(this.from, this.to, true);
        }
        replace(tr, content = Slice.empty) {
          let lastNode = content.content.lastChild, lastParent = null;
          for (let i = 0; i < content.openEnd; i++) {
            lastParent = lastNode;
            lastNode = lastNode.lastChild;
          }
          let mapFrom = tr.steps.length, ranges = this.ranges;
          for (let i = 0; i < ranges.length; i++) {
            let { $from, $to } = ranges[i], mapping = tr.mapping.slice(mapFrom);
            tr.replaceRange(mapping.map($from.pos), mapping.map($to.pos), i ? Slice.empty : content);
            if (i == 0)
              selectionToInsertionEnd(tr, mapFrom, (lastNode ? lastNode.isInline : lastParent && lastParent.isTextblock) ? -1 : 1);
          }
        }
        replaceWith(tr, node) {
          let mapFrom = tr.steps.length, ranges = this.ranges;
          for (let i = 0; i < ranges.length; i++) {
            let { $from, $to } = ranges[i], mapping = tr.mapping.slice(mapFrom);
            let from2 = mapping.map($from.pos), to = mapping.map($to.pos);
            if (i) {
              tr.deleteRange(from2, to);
            } else {
              tr.replaceRangeWith(from2, to, node);
              selectionToInsertionEnd(tr, mapFrom, node.isInline ? -1 : 1);
            }
          }
        }
        static findFrom($pos, dir, textOnly = false) {
          let inner = $pos.parent.inlineContent ? new TextSelection($pos) : findSelectionIn($pos.node(0), $pos.parent, $pos.pos, $pos.index(), dir, textOnly);
          if (inner)
            return inner;
          for (let depth = $pos.depth - 1; depth >= 0; depth--) {
            let found2 = dir < 0 ? findSelectionIn($pos.node(0), $pos.node(depth), $pos.before(depth + 1), $pos.index(depth), dir, textOnly) : findSelectionIn($pos.node(0), $pos.node(depth), $pos.after(depth + 1), $pos.index(depth) + 1, dir, textOnly);
            if (found2)
              return found2;
          }
          return null;
        }
        static near($pos, bias = 1) {
          return this.findFrom($pos, bias) || this.findFrom($pos, -bias) || new AllSelection($pos.node(0));
        }
        static atStart(doc4) {
          return findSelectionIn(doc4, doc4, 0, 0, 1) || new AllSelection(doc4);
        }
        static atEnd(doc4) {
          return findSelectionIn(doc4, doc4, doc4.content.size, doc4.childCount, -1) || new AllSelection(doc4);
        }
        static fromJSON(doc4, json) {
          if (!json || !json.type)
            throw new RangeError("Invalid input for Selection.fromJSON");
          let cls = classesById[json.type];
          if (!cls)
            throw new RangeError(`No selection type ${json.type} defined`);
          return cls.fromJSON(doc4, json);
        }
        static jsonID(id, selectionClass) {
          if (id in classesById)
            throw new RangeError("Duplicate use of selection JSON ID " + id);
          classesById[id] = selectionClass;
          selectionClass.prototype.jsonID = id;
          return selectionClass;
        }
        getBookmark() {
          return TextSelection.between(this.$anchor, this.$head).getBookmark();
        }
      };
      Selection.prototype.visible = true;
      SelectionRange = class {
        constructor($from, $to) {
          this.$from = $from;
          this.$to = $to;
        }
      };
      warnedAboutTextSelection = false;
      TextSelection = class extends Selection {
        constructor($anchor, $head = $anchor) {
          checkTextSelection($anchor);
          checkTextSelection($head);
          super($anchor, $head);
        }
        get $cursor() {
          return this.$anchor.pos == this.$head.pos ? this.$head : null;
        }
        map(doc4, mapping) {
          let $head = doc4.resolve(mapping.map(this.head));
          if (!$head.parent.inlineContent)
            return Selection.near($head);
          let $anchor = doc4.resolve(mapping.map(this.anchor));
          return new TextSelection($anchor.parent.inlineContent ? $anchor : $head, $head);
        }
        replace(tr, content = Slice.empty) {
          super.replace(tr, content);
          if (content == Slice.empty) {
            let marks = this.$from.marksAcross(this.$to);
            if (marks)
              tr.ensureMarks(marks);
          }
        }
        eq(other) {
          return other instanceof TextSelection && other.anchor == this.anchor && other.head == this.head;
        }
        getBookmark() {
          return new TextBookmark(this.anchor, this.head);
        }
        toJSON() {
          return { type: "text", anchor: this.anchor, head: this.head };
        }
        static fromJSON(doc4, json) {
          if (typeof json.anchor != "number" || typeof json.head != "number")
            throw new RangeError("Invalid input for TextSelection.fromJSON");
          return new TextSelection(doc4.resolve(json.anchor), doc4.resolve(json.head));
        }
        static create(doc4, anchor, head = anchor) {
          let $anchor = doc4.resolve(anchor);
          return new this($anchor, head == anchor ? $anchor : doc4.resolve(head));
        }
        static between($anchor, $head, bias) {
          let dPos = $anchor.pos - $head.pos;
          if (!bias || dPos)
            bias = dPos >= 0 ? 1 : -1;
          if (!$head.parent.inlineContent) {
            let found2 = Selection.findFrom($head, bias, true) || Selection.findFrom($head, -bias, true);
            if (found2)
              $head = found2.$head;
            else
              return Selection.near($head, bias);
          }
          if (!$anchor.parent.inlineContent) {
            if (dPos == 0) {
              $anchor = $head;
            } else {
              $anchor = (Selection.findFrom($anchor, -bias, true) || Selection.findFrom($anchor, bias, true)).$anchor;
              if ($anchor.pos < $head.pos != dPos < 0)
                $anchor = $head;
            }
          }
          return new TextSelection($anchor, $head);
        }
      };
      Selection.jsonID("text", TextSelection);
      TextBookmark = class {
        constructor(anchor, head) {
          this.anchor = anchor;
          this.head = head;
        }
        map(mapping) {
          return new TextBookmark(mapping.map(this.anchor), mapping.map(this.head));
        }
        resolve(doc4) {
          return TextSelection.between(doc4.resolve(this.anchor), doc4.resolve(this.head));
        }
      };
      NodeSelection = class extends Selection {
        constructor($pos) {
          let node = $pos.nodeAfter;
          let $end = $pos.node(0).resolve($pos.pos + node.nodeSize);
          super($pos, $end);
          this.node = node;
        }
        map(doc4, mapping) {
          let { deleted, pos } = mapping.mapResult(this.anchor);
          let $pos = doc4.resolve(pos);
          if (deleted)
            return Selection.near($pos);
          return new NodeSelection($pos);
        }
        content() {
          return new Slice(Fragment.from(this.node), 0, 0);
        }
        eq(other) {
          return other instanceof NodeSelection && other.anchor == this.anchor;
        }
        toJSON() {
          return { type: "node", anchor: this.anchor };
        }
        getBookmark() {
          return new NodeBookmark(this.anchor);
        }
        static fromJSON(doc4, json) {
          if (typeof json.anchor != "number")
            throw new RangeError("Invalid input for NodeSelection.fromJSON");
          return new NodeSelection(doc4.resolve(json.anchor));
        }
        static create(doc4, from2) {
          return new NodeSelection(doc4.resolve(from2));
        }
        static isSelectable(node) {
          return !node.isText && node.type.spec.selectable !== false;
        }
      };
      NodeSelection.prototype.visible = false;
      Selection.jsonID("node", NodeSelection);
      NodeBookmark = class {
        constructor(anchor) {
          this.anchor = anchor;
        }
        map(mapping) {
          let { deleted, pos } = mapping.mapResult(this.anchor);
          return deleted ? new TextBookmark(pos, pos) : new NodeBookmark(pos);
        }
        resolve(doc4) {
          let $pos = doc4.resolve(this.anchor), node = $pos.nodeAfter;
          if (node && NodeSelection.isSelectable(node))
            return new NodeSelection($pos);
          return Selection.near($pos);
        }
      };
      AllSelection = class extends Selection {
        constructor(doc4) {
          super(doc4.resolve(0), doc4.resolve(doc4.content.size));
        }
        replace(tr, content = Slice.empty) {
          if (content == Slice.empty) {
            tr.delete(0, tr.doc.content.size);
            let sel = Selection.atStart(tr.doc);
            if (!sel.eq(tr.selection))
              tr.setSelection(sel);
          } else {
            super.replace(tr, content);
          }
        }
        toJSON() {
          return { type: "all" };
        }
        static fromJSON(doc4) {
          return new AllSelection(doc4);
        }
        map(doc4) {
          return new AllSelection(doc4);
        }
        eq(other) {
          return other instanceof AllSelection;
        }
        getBookmark() {
          return AllBookmark;
        }
      };
      Selection.jsonID("all", AllSelection);
      AllBookmark = {
        map() {
          return this;
        },
        resolve(doc4) {
          return new AllSelection(doc4);
        }
      };
      UPDATED_SEL = 1;
      UPDATED_MARKS = 2;
      UPDATED_SCROLL = 4;
      Transaction = class extends Transform {
        constructor(state) {
          super(state.doc);
          this.curSelectionFor = 0;
          this.updated = 0;
          this.meta = /* @__PURE__ */ Object.create(null);
          this.time = Date.now();
          this.curSelection = state.selection;
          this.storedMarks = state.storedMarks;
        }
        get selection() {
          if (this.curSelectionFor < this.steps.length) {
            this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor));
            this.curSelectionFor = this.steps.length;
          }
          return this.curSelection;
        }
        setSelection(selection) {
          if (selection.$from.doc != this.doc)
            throw new RangeError("Selection passed to setSelection must point at the current document");
          this.curSelection = selection;
          this.curSelectionFor = this.steps.length;
          this.updated = (this.updated | UPDATED_SEL) & ~UPDATED_MARKS;
          this.storedMarks = null;
          return this;
        }
        get selectionSet() {
          return (this.updated & UPDATED_SEL) > 0;
        }
        setStoredMarks(marks) {
          this.storedMarks = marks;
          this.updated |= UPDATED_MARKS;
          return this;
        }
        ensureMarks(marks) {
          if (!Mark.sameSet(this.storedMarks || this.selection.$from.marks(), marks))
            this.setStoredMarks(marks);
          return this;
        }
        addStoredMark(mark) {
          return this.ensureMarks(mark.addToSet(this.storedMarks || this.selection.$head.marks()));
        }
        removeStoredMark(mark) {
          return this.ensureMarks(mark.removeFromSet(this.storedMarks || this.selection.$head.marks()));
        }
        get storedMarksSet() {
          return (this.updated & UPDATED_MARKS) > 0;
        }
        addStep(step, doc4) {
          super.addStep(step, doc4);
          this.updated = this.updated & ~UPDATED_MARKS;
          this.storedMarks = null;
        }
        setTime(time) {
          this.time = time;
          return this;
        }
        replaceSelection(slice2) {
          this.selection.replace(this, slice2);
          return this;
        }
        replaceSelectionWith(node, inheritMarks = true) {
          let selection = this.selection;
          if (inheritMarks)
            node = node.mark(this.storedMarks || (selection.empty ? selection.$from.marks() : selection.$from.marksAcross(selection.$to) || Mark.none));
          selection.replaceWith(this, node);
          return this;
        }
        deleteSelection() {
          this.selection.replace(this);
          return this;
        }
        insertText(text, from2, to) {
          let schema = this.doc.type.schema;
          if (from2 == null) {
            if (!text)
              return this.deleteSelection();
            return this.replaceSelectionWith(schema.text(text), true);
          } else {
            if (to == null)
              to = from2;
            to = to == null ? from2 : to;
            if (!text)
              return this.deleteRange(from2, to);
            let marks = this.storedMarks;
            if (!marks) {
              let $from = this.doc.resolve(from2);
              marks = to == from2 ? $from.marks() : $from.marksAcross(this.doc.resolve(to));
            }
            this.replaceRangeWith(from2, to, schema.text(text, marks));
            if (!this.selection.empty)
              this.setSelection(Selection.near(this.selection.$to));
            return this;
          }
        }
        setMeta(key, value) {
          this.meta[typeof key == "string" ? key : key.key] = value;
          return this;
        }
        getMeta(key) {
          return this.meta[typeof key == "string" ? key : key.key];
        }
        get isGeneric() {
          for (let _ in this.meta)
            return false;
          return true;
        }
        scrollIntoView() {
          this.updated |= UPDATED_SCROLL;
          return this;
        }
        get scrolledIntoView() {
          return (this.updated & UPDATED_SCROLL) > 0;
        }
      };
      FieldDesc = class {
        constructor(name, desc, self2) {
          this.name = name;
          this.init = bind(desc.init, self2);
          this.apply = bind(desc.apply, self2);
        }
      };
      baseFields = [
        new FieldDesc("doc", {
          init(config) {
            return config.doc || config.schema.topNodeType.createAndFill();
          },
          apply(tr) {
            return tr.doc;
          }
        }),
        new FieldDesc("selection", {
          init(config, instance) {
            return config.selection || Selection.atStart(instance.doc);
          },
          apply(tr) {
            return tr.selection;
          }
        }),
        new FieldDesc("storedMarks", {
          init(config) {
            return config.storedMarks || null;
          },
          apply(tr, _marks, _old, state) {
            return state.selection.$cursor ? tr.storedMarks : null;
          }
        }),
        new FieldDesc("scrollToSelection", {
          init() {
            return 0;
          },
          apply(tr, prev) {
            return tr.scrolledIntoView ? prev + 1 : prev;
          }
        })
      ];
      Configuration = class {
        constructor(schema, plugins) {
          this.schema = schema;
          this.plugins = [];
          this.pluginsByKey = /* @__PURE__ */ Object.create(null);
          this.fields = baseFields.slice();
          if (plugins)
            plugins.forEach((plugin) => {
              if (this.pluginsByKey[plugin.key])
                throw new RangeError("Adding different instances of a keyed plugin (" + plugin.key + ")");
              this.plugins.push(plugin);
              this.pluginsByKey[plugin.key] = plugin;
              if (plugin.spec.state)
                this.fields.push(new FieldDesc(plugin.key, plugin.spec.state, plugin));
            });
        }
      };
      EditorState = class {
        constructor(config) {
          this.config = config;
        }
        get schema() {
          return this.config.schema;
        }
        get plugins() {
          return this.config.plugins;
        }
        apply(tr) {
          return this.applyTransaction(tr).state;
        }
        filterTransaction(tr, ignore = -1) {
          for (let i = 0; i < this.config.plugins.length; i++)
            if (i != ignore) {
              let plugin = this.config.plugins[i];
              if (plugin.spec.filterTransaction && !plugin.spec.filterTransaction.call(plugin, tr, this))
                return false;
            }
          return true;
        }
        applyTransaction(rootTr) {
          if (!this.filterTransaction(rootTr))
            return { state: this, transactions: [] };
          let trs = [rootTr], newState = this.applyInner(rootTr), seen = null;
          for (; ; ) {
            let haveNew = false;
            for (let i = 0; i < this.config.plugins.length; i++) {
              let plugin = this.config.plugins[i];
              if (plugin.spec.appendTransaction) {
                let n = seen ? seen[i].n : 0, oldState = seen ? seen[i].state : this;
                let tr = n < trs.length && plugin.spec.appendTransaction.call(plugin, n ? trs.slice(n) : trs, oldState, newState);
                if (tr && newState.filterTransaction(tr, i)) {
                  tr.setMeta("appendedTransaction", rootTr);
                  if (!seen) {
                    seen = [];
                    for (let j = 0; j < this.config.plugins.length; j++)
                      seen.push(j < i ? { state: newState, n: trs.length } : { state: this, n: 0 });
                  }
                  trs.push(tr);
                  newState = newState.applyInner(tr);
                  haveNew = true;
                }
                if (seen)
                  seen[i] = { state: newState, n: trs.length };
              }
            }
            if (!haveNew)
              return { state: newState, transactions: trs };
          }
        }
        applyInner(tr) {
          if (!tr.before.eq(this.doc))
            throw new RangeError("Applying a mismatched transaction");
          let newInstance = new EditorState(this.config), fields = this.config.fields;
          for (let i = 0; i < fields.length; i++) {
            let field = fields[i];
            newInstance[field.name] = field.apply(tr, this[field.name], this, newInstance);
          }
          return newInstance;
        }
        get tr() {
          return new Transaction(this);
        }
        static create(config) {
          let $config = new Configuration(config.doc ? config.doc.type.schema : config.schema, config.plugins);
          let instance = new EditorState($config);
          for (let i = 0; i < $config.fields.length; i++)
            instance[$config.fields[i].name] = $config.fields[i].init(config, instance);
          return instance;
        }
        reconfigure(config) {
          let $config = new Configuration(this.schema, config.plugins);
          let fields = $config.fields, instance = new EditorState($config);
          for (let i = 0; i < fields.length; i++) {
            let name = fields[i].name;
            instance[name] = this.hasOwnProperty(name) ? this[name] : fields[i].init(config, instance);
          }
          return instance;
        }
        toJSON(pluginFields) {
          let result = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
          if (this.storedMarks)
            result.storedMarks = this.storedMarks.map((m) => m.toJSON());
          if (pluginFields && typeof pluginFields == "object")
            for (let prop in pluginFields) {
              if (prop == "doc" || prop == "selection")
                throw new RangeError("The JSON fields `doc` and `selection` are reserved");
              let plugin = pluginFields[prop], state = plugin.spec.state;
              if (state && state.toJSON)
                result[prop] = state.toJSON.call(plugin, this[plugin.key]);
            }
          return result;
        }
        static fromJSON(config, json, pluginFields) {
          if (!json)
            throw new RangeError("Invalid input for EditorState.fromJSON");
          if (!config.schema)
            throw new RangeError("Required config field 'schema' missing");
          let $config = new Configuration(config.schema, config.plugins);
          let instance = new EditorState($config);
          $config.fields.forEach((field) => {
            if (field.name == "doc") {
              instance.doc = Node2.fromJSON(config.schema, json.doc);
            } else if (field.name == "selection") {
              instance.selection = Selection.fromJSON(instance.doc, json.selection);
            } else if (field.name == "storedMarks") {
              if (json.storedMarks)
                instance.storedMarks = json.storedMarks.map(config.schema.markFromJSON);
            } else {
              if (pluginFields)
                for (let prop in pluginFields) {
                  let plugin = pluginFields[prop], state = plugin.spec.state;
                  if (plugin.key == field.name && state && state.fromJSON && Object.prototype.hasOwnProperty.call(json, prop)) {
                    instance[field.name] = state.fromJSON.call(plugin, config, json[prop], instance);
                    return;
                  }
                }
              instance[field.name] = field.init(config, instance);
            }
          });
          return instance;
        }
      };
      Plugin = class {
        constructor(spec) {
          this.spec = spec;
          this.props = {};
          if (spec.props)
            bindProps(spec.props, this, this.props);
          this.key = spec.key ? spec.key.key : createKey("plugin");
        }
        getState(state) {
          return state[this.key];
        }
      };
      keys = /* @__PURE__ */ Object.create(null);
      PluginKey = class {
        constructor(name = "key") {
          this.key = createKey(name);
        }
        get(state) {
          return state.config.pluginsByKey[this.key];
        }
        getState(state) {
          return state[this.key];
        }
      };
    }
  });

  // node_modules/prosemirror-view/dist/index.js
  function scanFor(node, off, targetNode, targetOff, dir) {
    for (; ; ) {
      if (node == targetNode && off == targetOff)
        return true;
      if (off == (dir < 0 ? 0 : nodeSize(node))) {
        let parent = node.parentNode;
        if (!parent || parent.nodeType != 1 || hasBlockDesc(node) || atomElements.test(node.nodeName) || node.contentEditable == "false")
          return false;
        off = domIndex(node) + (dir < 0 ? 0 : 1);
        node = parent;
      } else if (node.nodeType == 1) {
        node = node.childNodes[off + (dir < 0 ? -1 : 0)];
        if (node.contentEditable == "false")
          return false;
        off = dir < 0 ? nodeSize(node) : 0;
      } else {
        return false;
      }
    }
  }
  function nodeSize(node) {
    return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
  }
  function isOnEdge(node, offset, parent) {
    for (let atStart = offset == 0, atEnd = offset == nodeSize(node); atStart || atEnd; ) {
      if (node == parent)
        return true;
      let index = domIndex(node);
      node = node.parentNode;
      if (!node)
        return false;
      atStart = atStart && index == 0;
      atEnd = atEnd && index == nodeSize(node);
    }
  }
  function hasBlockDesc(dom) {
    let desc;
    for (let cur = dom; cur; cur = cur.parentNode)
      if (desc = cur.pmViewDesc)
        break;
    return desc && desc.node && desc.node.isBlock && (desc.dom == dom || desc.contentDOM == dom);
  }
  function keyEvent(keyCode, key) {
    let event = document.createEvent("Event");
    event.initEvent("keydown", true, true);
    event.keyCode = keyCode;
    event.key = event.code = key;
    return event;
  }
  function windowRect(doc4) {
    return {
      left: 0,
      right: doc4.documentElement.clientWidth,
      top: 0,
      bottom: doc4.documentElement.clientHeight
    };
  }
  function getSide(value, side) {
    return typeof value == "number" ? value : value[side];
  }
  function clientRect(node) {
    let rect = node.getBoundingClientRect();
    let scaleX = rect.width / node.offsetWidth || 1;
    let scaleY = rect.height / node.offsetHeight || 1;
    return {
      left: rect.left,
      right: rect.left + node.clientWidth * scaleX,
      top: rect.top,
      bottom: rect.top + node.clientHeight * scaleY
    };
  }
  function scrollRectIntoView(view, rect, startDOM) {
    let scrollThreshold = view.someProp("scrollThreshold") || 0, scrollMargin = view.someProp("scrollMargin") || 5;
    let doc4 = view.dom.ownerDocument;
    for (let parent = startDOM || view.dom; ; parent = parentNode(parent)) {
      if (!parent)
        break;
      if (parent.nodeType != 1)
        continue;
      let elt = parent;
      let atTop = elt == doc4.body;
      let bounding = atTop ? windowRect(doc4) : clientRect(elt);
      let moveX = 0, moveY = 0;
      if (rect.top < bounding.top + getSide(scrollThreshold, "top"))
        moveY = -(bounding.top - rect.top + getSide(scrollMargin, "top"));
      else if (rect.bottom > bounding.bottom - getSide(scrollThreshold, "bottom"))
        moveY = rect.bottom - bounding.bottom + getSide(scrollMargin, "bottom");
      if (rect.left < bounding.left + getSide(scrollThreshold, "left"))
        moveX = -(bounding.left - rect.left + getSide(scrollMargin, "left"));
      else if (rect.right > bounding.right - getSide(scrollThreshold, "right"))
        moveX = rect.right - bounding.right + getSide(scrollMargin, "right");
      if (moveX || moveY) {
        if (atTop) {
          doc4.defaultView.scrollBy(moveX, moveY);
        } else {
          let startX = elt.scrollLeft, startY = elt.scrollTop;
          if (moveY)
            elt.scrollTop += moveY;
          if (moveX)
            elt.scrollLeft += moveX;
          let dX = elt.scrollLeft - startX, dY = elt.scrollTop - startY;
          rect = { left: rect.left - dX, top: rect.top - dY, right: rect.right - dX, bottom: rect.bottom - dY };
        }
      }
      if (atTop)
        break;
    }
  }
  function storeScrollPos(view) {
    let rect = view.dom.getBoundingClientRect(), startY = Math.max(0, rect.top);
    let refDOM, refTop;
    for (let x = (rect.left + rect.right) / 2, y = startY + 1; y < Math.min(innerHeight, rect.bottom); y += 5) {
      let dom = view.root.elementFromPoint(x, y);
      if (!dom || dom == view.dom || !view.dom.contains(dom))
        continue;
      let localRect = dom.getBoundingClientRect();
      if (localRect.top >= startY - 20) {
        refDOM = dom;
        refTop = localRect.top;
        break;
      }
    }
    return { refDOM, refTop, stack: scrollStack(view.dom) };
  }
  function scrollStack(dom) {
    let stack = [], doc4 = dom.ownerDocument;
    for (let cur = dom; cur; cur = parentNode(cur)) {
      stack.push({ dom: cur, top: cur.scrollTop, left: cur.scrollLeft });
      if (dom == doc4)
        break;
    }
    return stack;
  }
  function resetScrollPos({ refDOM, refTop, stack }) {
    let newRefTop = refDOM ? refDOM.getBoundingClientRect().top : 0;
    restoreScrollStack(stack, newRefTop == 0 ? 0 : newRefTop - refTop);
  }
  function restoreScrollStack(stack, dTop) {
    for (let i = 0; i < stack.length; i++) {
      let { dom, top, left } = stack[i];
      if (dom.scrollTop != top + dTop)
        dom.scrollTop = top + dTop;
      if (dom.scrollLeft != left)
        dom.scrollLeft = left;
    }
  }
  function focusPreventScroll(dom) {
    if (dom.setActive)
      return dom.setActive();
    if (preventScrollSupported)
      return dom.focus(preventScrollSupported);
    let stored = scrollStack(dom);
    dom.focus(preventScrollSupported == null ? {
      get preventScroll() {
        preventScrollSupported = { preventScroll: true };
        return true;
      }
    } : void 0);
    if (!preventScrollSupported) {
      preventScrollSupported = false;
      restoreScrollStack(stored, 0);
    }
  }
  function findOffsetInNode(node, coords) {
    let closest, dxClosest = 2e8, coordsClosest, offset = 0;
    let rowBot = coords.top, rowTop = coords.top;
    for (let child = node.firstChild, childIndex = 0; child; child = child.nextSibling, childIndex++) {
      let rects;
      if (child.nodeType == 1)
        rects = child.getClientRects();
      else if (child.nodeType == 3)
        rects = textRange(child).getClientRects();
      else
        continue;
      for (let i = 0; i < rects.length; i++) {
        let rect = rects[i];
        if (rect.top <= rowBot && rect.bottom >= rowTop) {
          rowBot = Math.max(rect.bottom, rowBot);
          rowTop = Math.min(rect.top, rowTop);
          let dx = rect.left > coords.left ? rect.left - coords.left : rect.right < coords.left ? coords.left - rect.right : 0;
          if (dx < dxClosest) {
            closest = child;
            dxClosest = dx;
            coordsClosest = dx && closest.nodeType == 3 ? {
              left: rect.right < coords.left ? rect.right : rect.left,
              top: coords.top
            } : coords;
            if (child.nodeType == 1 && dx)
              offset = childIndex + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0);
            continue;
          }
        }
        if (!closest && (coords.left >= rect.right && coords.top >= rect.top || coords.left >= rect.left && coords.top >= rect.bottom))
          offset = childIndex + 1;
      }
    }
    if (closest && closest.nodeType == 3)
      return findOffsetInText(closest, coordsClosest);
    if (!closest || dxClosest && closest.nodeType == 1)
      return { node, offset };
    return findOffsetInNode(closest, coordsClosest);
  }
  function findOffsetInText(node, coords) {
    let len = node.nodeValue.length;
    let range2 = document.createRange();
    for (let i = 0; i < len; i++) {
      range2.setEnd(node, i + 1);
      range2.setStart(node, i);
      let rect = singleRect(range2, 1);
      if (rect.top == rect.bottom)
        continue;
      if (inRect(coords, rect))
        return { node, offset: i + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0) };
    }
    return { node, offset: 0 };
  }
  function inRect(coords, rect) {
    return coords.left >= rect.left - 1 && coords.left <= rect.right + 1 && coords.top >= rect.top - 1 && coords.top <= rect.bottom + 1;
  }
  function targetKludge(dom, coords) {
    let parent = dom.parentNode;
    if (parent && /^li$/i.test(parent.nodeName) && coords.left < dom.getBoundingClientRect().left)
      return parent;
    return dom;
  }
  function posFromElement(view, elt, coords) {
    let { node, offset } = findOffsetInNode(elt, coords), bias = -1;
    if (node.nodeType == 1 && !node.firstChild) {
      let rect = node.getBoundingClientRect();
      bias = rect.left != rect.right && coords.left > (rect.left + rect.right) / 2 ? 1 : -1;
    }
    return view.docView.posFromDOM(node, offset, bias);
  }
  function posFromCaret(view, node, offset, coords) {
    let outside = -1;
    for (let cur = node; ; ) {
      if (cur == view.dom)
        break;
      let desc = view.docView.nearestDesc(cur, true);
      if (!desc)
        return null;
      if (desc.node.isBlock && desc.parent) {
        let rect = desc.dom.getBoundingClientRect();
        if (rect.left > coords.left || rect.top > coords.top)
          outside = desc.posBefore;
        else if (rect.right < coords.left || rect.bottom < coords.top)
          outside = desc.posAfter;
        else
          break;
      }
      cur = desc.dom.parentNode;
    }
    return outside > -1 ? outside : view.docView.posFromDOM(node, offset, 1);
  }
  function elementFromPoint(element, coords, box) {
    let len = element.childNodes.length;
    if (len && box.top < box.bottom) {
      for (let startI = Math.max(0, Math.min(len - 1, Math.floor(len * (coords.top - box.top) / (box.bottom - box.top)) - 2)), i = startI; ; ) {
        let child = element.childNodes[i];
        if (child.nodeType == 1) {
          let rects = child.getClientRects();
          for (let j = 0; j < rects.length; j++) {
            let rect = rects[j];
            if (inRect(coords, rect))
              return elementFromPoint(child, coords, rect);
          }
        }
        if ((i = (i + 1) % len) == startI)
          break;
      }
    }
    return element;
  }
  function posAtCoords(view, coords) {
    let doc4 = view.dom.ownerDocument, node, offset = 0;
    if (doc4.caretPositionFromPoint) {
      try {
        let pos2 = doc4.caretPositionFromPoint(coords.left, coords.top);
        if (pos2)
          ({ offsetNode: node, offset } = pos2);
      } catch (_) {
      }
    }
    if (!node && doc4.caretRangeFromPoint) {
      let range2 = doc4.caretRangeFromPoint(coords.left, coords.top);
      if (range2)
        ({ startContainer: node, startOffset: offset } = range2);
    }
    let elt = (view.root.elementFromPoint ? view.root : doc4).elementFromPoint(coords.left, coords.top + 1);
    let pos;
    if (!elt || !view.dom.contains(elt.nodeType != 1 ? elt.parentNode : elt)) {
      let box = view.dom.getBoundingClientRect();
      if (!inRect(coords, box))
        return null;
      elt = elementFromPoint(view.dom, coords, box);
      if (!elt)
        return null;
    }
    if (safari) {
      for (let p = elt; node && p; p = parentNode(p))
        if (p.draggable)
          node = void 0;
    }
    elt = targetKludge(elt, coords);
    if (node) {
      if (gecko && node.nodeType == 1) {
        offset = Math.min(offset, node.childNodes.length);
        if (offset < node.childNodes.length) {
          let next = node.childNodes[offset], box;
          if (next.nodeName == "IMG" && (box = next.getBoundingClientRect()).right <= coords.left && box.bottom > coords.top)
            offset++;
        }
      }
      if (node == view.dom && offset == node.childNodes.length - 1 && node.lastChild.nodeType == 1 && coords.top > node.lastChild.getBoundingClientRect().bottom)
        pos = view.state.doc.content.size;
      else if (offset == 0 || node.nodeType != 1 || node.childNodes[offset - 1].nodeName != "BR")
        pos = posFromCaret(view, node, offset, coords);
    }
    if (pos == null)
      pos = posFromElement(view, elt, coords);
    let desc = view.docView.nearestDesc(elt, true);
    return { pos, inside: desc ? desc.posAtStart - desc.border : -1 };
  }
  function singleRect(target, bias) {
    let rects = target.getClientRects();
    return !rects.length ? target.getBoundingClientRect() : rects[bias < 0 ? 0 : rects.length - 1];
  }
  function coordsAtPos(view, pos, side) {
    let { node, offset } = view.docView.domFromPos(pos, side < 0 ? -1 : 1);
    let supportEmptyRange = webkit || gecko;
    if (node.nodeType == 3) {
      if (supportEmptyRange && (BIDI.test(node.nodeValue) || (side < 0 ? !offset : offset == node.nodeValue.length))) {
        let rect = singleRect(textRange(node, offset, offset), side);
        if (gecko && offset && /\s/.test(node.nodeValue[offset - 1]) && offset < node.nodeValue.length) {
          let rectBefore = singleRect(textRange(node, offset - 1, offset - 1), -1);
          if (rectBefore.top == rect.top) {
            let rectAfter = singleRect(textRange(node, offset, offset + 1), -1);
            if (rectAfter.top != rect.top)
              return flattenV(rectAfter, rectAfter.left < rectBefore.left);
          }
        }
        return rect;
      } else {
        let from2 = offset, to = offset, takeSide = side < 0 ? 1 : -1;
        if (side < 0 && !offset) {
          to++;
          takeSide = -1;
        } else if (side >= 0 && offset == node.nodeValue.length) {
          from2--;
          takeSide = 1;
        } else if (side < 0) {
          from2--;
        } else {
          to++;
        }
        return flattenV(singleRect(textRange(node, from2, to), takeSide), takeSide < 0);
      }
    }
    if (!view.state.doc.resolve(pos).parent.inlineContent) {
      if (offset && (side < 0 || offset == nodeSize(node))) {
        let before = node.childNodes[offset - 1];
        if (before.nodeType == 1)
          return flattenH(before.getBoundingClientRect(), false);
      }
      if (offset < nodeSize(node)) {
        let after = node.childNodes[offset];
        if (after.nodeType == 1)
          return flattenH(after.getBoundingClientRect(), true);
      }
      return flattenH(node.getBoundingClientRect(), side >= 0);
    }
    if (offset && (side < 0 || offset == nodeSize(node))) {
      let before = node.childNodes[offset - 1];
      let target = before.nodeType == 3 ? textRange(before, nodeSize(before) - (supportEmptyRange ? 0 : 1)) : before.nodeType == 1 && (before.nodeName != "BR" || !before.nextSibling) ? before : null;
      if (target)
        return flattenV(singleRect(target, 1), false);
    }
    if (offset < nodeSize(node)) {
      let after = node.childNodes[offset];
      while (after.pmViewDesc && after.pmViewDesc.ignoreForCoords)
        after = after.nextSibling;
      let target = !after ? null : after.nodeType == 3 ? textRange(after, 0, supportEmptyRange ? 0 : 1) : after.nodeType == 1 ? after : null;
      if (target)
        return flattenV(singleRect(target, -1), true);
    }
    return flattenV(singleRect(node.nodeType == 3 ? textRange(node) : node, -side), side >= 0);
  }
  function flattenV(rect, left) {
    if (rect.width == 0)
      return rect;
    let x = left ? rect.left : rect.right;
    return { top: rect.top, bottom: rect.bottom, left: x, right: x };
  }
  function flattenH(rect, top) {
    if (rect.height == 0)
      return rect;
    let y = top ? rect.top : rect.bottom;
    return { top: y, bottom: y, left: rect.left, right: rect.right };
  }
  function withFlushedState(view, state, f) {
    let viewState = view.state, active = view.root.activeElement;
    if (viewState != state)
      view.updateState(state);
    if (active != view.dom)
      view.focus();
    try {
      return f();
    } finally {
      if (viewState != state)
        view.updateState(viewState);
      if (active != view.dom && active)
        active.focus();
    }
  }
  function endOfTextblockVertical(view, state, dir) {
    let sel = state.selection;
    let $pos = dir == "up" ? sel.$from : sel.$to;
    return withFlushedState(view, state, () => {
      let { node: dom } = view.docView.domFromPos($pos.pos, dir == "up" ? -1 : 1);
      for (; ; ) {
        let nearest = view.docView.nearestDesc(dom, true);
        if (!nearest)
          break;
        if (nearest.node.isBlock) {
          dom = nearest.dom;
          break;
        }
        dom = nearest.dom.parentNode;
      }
      let coords = coordsAtPos(view, $pos.pos, 1);
      for (let child = dom.firstChild; child; child = child.nextSibling) {
        let boxes;
        if (child.nodeType == 1)
          boxes = child.getClientRects();
        else if (child.nodeType == 3)
          boxes = textRange(child, 0, child.nodeValue.length).getClientRects();
        else
          continue;
        for (let i = 0; i < boxes.length; i++) {
          let box = boxes[i];
          if (box.bottom > box.top + 1 && (dir == "up" ? coords.top - box.top > (box.bottom - coords.top) * 2 : box.bottom - coords.bottom > (coords.bottom - box.top) * 2))
            return false;
        }
      }
      return true;
    });
  }
  function endOfTextblockHorizontal(view, state, dir) {
    let { $head } = state.selection;
    if (!$head.parent.isTextblock)
      return false;
    let offset = $head.parentOffset, atStart = !offset, atEnd = offset == $head.parent.content.size;
    let sel = view.domSelection();
    if (!maybeRTL.test($head.parent.textContent) || !sel.modify)
      return dir == "left" || dir == "backward" ? atStart : atEnd;
    return withFlushedState(view, state, () => {
      let oldRange = sel.getRangeAt(0), oldNode = sel.focusNode, oldOff = sel.focusOffset;
      let oldBidiLevel = sel.caretBidiLevel;
      sel.modify("move", dir, "character");
      let parentDOM = $head.depth ? view.docView.domAfterPos($head.before()) : view.dom;
      let result = !parentDOM.contains(sel.focusNode.nodeType == 1 ? sel.focusNode : sel.focusNode.parentNode) || oldNode == sel.focusNode && oldOff == sel.focusOffset;
      sel.removeAllRanges();
      sel.addRange(oldRange);
      if (oldBidiLevel != null)
        sel.caretBidiLevel = oldBidiLevel;
      return result;
    });
  }
  function endOfTextblock(view, state, dir) {
    if (cachedState == state && cachedDir == dir)
      return cachedResult;
    cachedState = state;
    cachedDir = dir;
    return cachedResult = dir == "up" || dir == "down" ? endOfTextblockVertical(view, state, dir) : endOfTextblockHorizontal(view, state, dir);
  }
  function docViewDesc(doc4, outerDeco, innerDeco, dom, view) {
    applyOuterDeco(dom, outerDeco, doc4);
    return new NodeViewDesc(void 0, doc4, outerDeco, innerDeco, dom, dom, dom, view, 0);
  }
  function renderDescs(parentDOM, descs, view) {
    let dom = parentDOM.firstChild, written = false;
    for (let i = 0; i < descs.length; i++) {
      let desc = descs[i], childDOM = desc.dom;
      if (childDOM.parentNode == parentDOM) {
        while (childDOM != dom) {
          dom = rm(dom);
          written = true;
        }
        dom = dom.nextSibling;
      } else {
        written = true;
        parentDOM.insertBefore(childDOM, dom);
      }
      if (desc instanceof MarkViewDesc) {
        let pos = dom ? dom.previousSibling : parentDOM.lastChild;
        renderDescs(desc.contentDOM, desc.children, view);
        dom = pos ? pos.nextSibling : parentDOM.firstChild;
      }
    }
    while (dom) {
      dom = rm(dom);
      written = true;
    }
    if (written && view.trackWrites == parentDOM)
      view.trackWrites = null;
  }
  function computeOuterDeco(outerDeco, node, needsWrap) {
    if (outerDeco.length == 0)
      return noDeco;
    let top = needsWrap ? noDeco[0] : new OuterDecoLevel(), result = [top];
    for (let i = 0; i < outerDeco.length; i++) {
      let attrs = outerDeco[i].type.attrs;
      if (!attrs)
        continue;
      if (attrs.nodeName)
        result.push(top = new OuterDecoLevel(attrs.nodeName));
      for (let name in attrs) {
        let val = attrs[name];
        if (val == null)
          continue;
        if (needsWrap && result.length == 1)
          result.push(top = new OuterDecoLevel(node.isInline ? "span" : "div"));
        if (name == "class")
          top.class = (top.class ? top.class + " " : "") + val;
        else if (name == "style")
          top.style = (top.style ? top.style + ";" : "") + val;
        else if (name != "nodeName")
          top[name] = val;
      }
    }
    return result;
  }
  function patchOuterDeco(outerDOM, nodeDOM, prevComputed, curComputed) {
    if (prevComputed == noDeco && curComputed == noDeco)
      return nodeDOM;
    let curDOM = nodeDOM;
    for (let i = 0; i < curComputed.length; i++) {
      let deco = curComputed[i], prev = prevComputed[i];
      if (i) {
        let parent;
        if (prev && prev.nodeName == deco.nodeName && curDOM != outerDOM && (parent = curDOM.parentNode) && parent.nodeName.toLowerCase() == deco.nodeName) {
          curDOM = parent;
        } else {
          parent = document.createElement(deco.nodeName);
          parent.pmIsDeco = true;
          parent.appendChild(curDOM);
          prev = noDeco[0];
          curDOM = parent;
        }
      }
      patchAttributes(curDOM, prev || noDeco[0], deco);
    }
    return curDOM;
  }
  function patchAttributes(dom, prev, cur) {
    for (let name in prev)
      if (name != "class" && name != "style" && name != "nodeName" && !(name in cur))
        dom.removeAttribute(name);
    for (let name in cur)
      if (name != "class" && name != "style" && name != "nodeName" && cur[name] != prev[name])
        dom.setAttribute(name, cur[name]);
    if (prev.class != cur.class) {
      let prevList = prev.class ? prev.class.split(" ").filter(Boolean) : [];
      let curList = cur.class ? cur.class.split(" ").filter(Boolean) : [];
      for (let i = 0; i < prevList.length; i++)
        if (curList.indexOf(prevList[i]) == -1)
          dom.classList.remove(prevList[i]);
      for (let i = 0; i < curList.length; i++)
        if (prevList.indexOf(curList[i]) == -1)
          dom.classList.add(curList[i]);
      if (dom.classList.length == 0)
        dom.removeAttribute("class");
    }
    if (prev.style != cur.style) {
      if (prev.style) {
        let prop = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, m;
        while (m = prop.exec(prev.style))
          dom.style.removeProperty(m[1]);
      }
      if (cur.style)
        dom.style.cssText += cur.style;
    }
  }
  function applyOuterDeco(dom, deco, node) {
    return patchOuterDeco(dom, dom, noDeco, computeOuterDeco(deco, node, dom.nodeType != 1));
  }
  function sameOuterDeco(a, b) {
    if (a.length != b.length)
      return false;
    for (let i = 0; i < a.length; i++)
      if (!a[i].type.eq(b[i].type))
        return false;
    return true;
  }
  function rm(dom) {
    let next = dom.nextSibling;
    dom.parentNode.removeChild(dom);
    return next;
  }
  function preMatch(frag, parentDesc) {
    let curDesc = parentDesc, descI = curDesc.children.length;
    let fI = frag.childCount, matched = /* @__PURE__ */ new Map(), matches2 = [];
    outer:
      while (fI > 0) {
        let desc;
        for (; ; ) {
          if (descI) {
            let next = curDesc.children[descI - 1];
            if (next instanceof MarkViewDesc) {
              curDesc = next;
              descI = next.children.length;
            } else {
              desc = next;
              descI--;
              break;
            }
          } else if (curDesc == parentDesc) {
            break outer;
          } else {
            descI = curDesc.parent.children.indexOf(curDesc);
            curDesc = curDesc.parent;
          }
        }
        let node = desc.node;
        if (!node)
          continue;
        if (node != frag.child(fI - 1))
          break;
        --fI;
        matched.set(desc, fI);
        matches2.push(desc);
      }
    return { index: fI, matched, matches: matches2.reverse() };
  }
  function compareSide(a, b) {
    return a.type.side - b.type.side;
  }
  function iterDeco(parent, deco, onWidget, onNode) {
    let locals = deco.locals(parent), offset = 0;
    if (locals.length == 0) {
      for (let i = 0; i < parent.childCount; i++) {
        let child = parent.child(i);
        onNode(child, locals, deco.forChild(offset, child), i);
        offset += child.nodeSize;
      }
      return;
    }
    let decoIndex = 0, active = [], restNode = null;
    for (let parentIndex = 0; ; ) {
      if (decoIndex < locals.length && locals[decoIndex].to == offset) {
        let widget = locals[decoIndex++], widgets;
        while (decoIndex < locals.length && locals[decoIndex].to == offset)
          (widgets || (widgets = [widget])).push(locals[decoIndex++]);
        if (widgets) {
          widgets.sort(compareSide);
          for (let i = 0; i < widgets.length; i++)
            onWidget(widgets[i], parentIndex, !!restNode);
        } else {
          onWidget(widget, parentIndex, !!restNode);
        }
      }
      let child, index;
      if (restNode) {
        index = -1;
        child = restNode;
        restNode = null;
      } else if (parentIndex < parent.childCount) {
        index = parentIndex;
        child = parent.child(parentIndex++);
      } else {
        break;
      }
      for (let i = 0; i < active.length; i++)
        if (active[i].to <= offset)
          active.splice(i--, 1);
      while (decoIndex < locals.length && locals[decoIndex].from <= offset && locals[decoIndex].to > offset)
        active.push(locals[decoIndex++]);
      let end = offset + child.nodeSize;
      if (child.isText) {
        let cutAt = end;
        if (decoIndex < locals.length && locals[decoIndex].from < cutAt)
          cutAt = locals[decoIndex].from;
        for (let i = 0; i < active.length; i++)
          if (active[i].to < cutAt)
            cutAt = active[i].to;
        if (cutAt < end) {
          restNode = child.cut(cutAt - offset);
          child = child.cut(0, cutAt - offset);
          end = cutAt;
          index = -1;
        }
      }
      let outerDeco = child.isInline && !child.isLeaf ? active.filter((d) => !d.inline) : active.slice();
      onNode(child, outerDeco, deco.forChild(offset, child), index);
      offset = end;
    }
  }
  function iosHacks(dom) {
    if (dom.nodeName == "UL" || dom.nodeName == "OL") {
      let oldCSS = dom.style.cssText;
      dom.style.cssText = oldCSS + "; list-style: square !important";
      window.getComputedStyle(dom).listStyle;
      dom.style.cssText = oldCSS;
    }
  }
  function nearbyTextNode(node, offset) {
    for (; ; ) {
      if (node.nodeType == 3)
        return node;
      if (node.nodeType == 1 && offset > 0) {
        if (node.childNodes.length > offset && node.childNodes[offset].nodeType == 3)
          return node.childNodes[offset];
        node = node.childNodes[offset - 1];
        offset = nodeSize(node);
      } else if (node.nodeType == 1 && offset < node.childNodes.length) {
        node = node.childNodes[offset];
        offset = 0;
      } else {
        return null;
      }
    }
  }
  function findTextInFragment(frag, text, from2, to) {
    for (let i = 0, pos = 0; i < frag.childCount && pos <= to; ) {
      let child = frag.child(i++), childStart = pos;
      pos += child.nodeSize;
      if (!child.isText)
        continue;
      let str = child.text;
      while (i < frag.childCount) {
        let next = frag.child(i++);
        pos += next.nodeSize;
        if (!next.isText)
          break;
        str += next.text;
      }
      if (pos >= from2) {
        let found2 = childStart < to ? str.lastIndexOf(text, to - childStart - 1) : -1;
        if (found2 >= 0 && found2 + text.length + childStart >= from2)
          return childStart + found2;
        if (from2 == to && str.length >= to + text.length - childStart && str.slice(to - childStart, to - childStart + text.length) == text)
          return to;
      }
    }
    return -1;
  }
  function replaceNodes(nodes, from2, to, view, replacement) {
    let result = [];
    for (let i = 0, off = 0; i < nodes.length; i++) {
      let child = nodes[i], start = off, end = off += child.size;
      if (start >= to || end <= from2) {
        result.push(child);
      } else {
        if (start < from2)
          result.push(child.slice(0, from2 - start, view));
        if (replacement) {
          result.push(replacement);
          replacement = void 0;
        }
        if (end > to)
          result.push(child.slice(to - start, child.size, view));
      }
    }
    return result;
  }
  function selectionFromDOM(view, origin = null) {
    let domSel = view.domSelection(), doc4 = view.state.doc;
    if (!domSel.focusNode)
      return null;
    let nearestDesc = view.docView.nearestDesc(domSel.focusNode), inWidget = nearestDesc && nearestDesc.size == 0;
    let head = view.docView.posFromDOM(domSel.focusNode, domSel.focusOffset, 1);
    if (head < 0)
      return null;
    let $head = doc4.resolve(head), $anchor, selection;
    if (selectionCollapsed(domSel)) {
      $anchor = $head;
      while (nearestDesc && !nearestDesc.node)
        nearestDesc = nearestDesc.parent;
      let nearestDescNode = nearestDesc.node;
      if (nearestDesc && nearestDescNode.isAtom && NodeSelection.isSelectable(nearestDescNode) && nearestDesc.parent && !(nearestDescNode.isInline && isOnEdge(domSel.focusNode, domSel.focusOffset, nearestDesc.dom))) {
        let pos = nearestDesc.posBefore;
        selection = new NodeSelection(head == pos ? $head : doc4.resolve(pos));
      }
    } else {
      let anchor = view.docView.posFromDOM(domSel.anchorNode, domSel.anchorOffset, 1);
      if (anchor < 0)
        return null;
      $anchor = doc4.resolve(anchor);
    }
    if (!selection) {
      let bias = origin == "pointer" || view.state.selection.head < $head.pos && !inWidget ? 1 : -1;
      selection = selectionBetween(view, $anchor, $head, bias);
    }
    return selection;
  }
  function editorOwnsSelection(view) {
    return view.editable ? view.hasFocus() : hasSelection(view) && document.activeElement && document.activeElement.contains(view.dom);
  }
  function selectionToDOM(view, force = false) {
    let sel = view.state.selection;
    syncNodeSelection(view, sel);
    if (!editorOwnsSelection(view))
      return;
    if (!force && view.input.mouseDown && view.input.mouseDown.allowDefault && chrome) {
      let domSel = view.domSelection(), curSel = view.domObserver.currentSelection;
      if (domSel.anchorNode && curSel.anchorNode && isEquivalentPosition(domSel.anchorNode, domSel.anchorOffset, curSel.anchorNode, curSel.anchorOffset)) {
        view.input.mouseDown.delayedSelectionSync = true;
        view.domObserver.setCurSelection();
        return;
      }
    }
    view.domObserver.disconnectSelection();
    if (view.cursorWrapper) {
      selectCursorWrapper(view);
    } else {
      let { anchor, head } = sel, resetEditableFrom, resetEditableTo;
      if (brokenSelectBetweenUneditable && !(sel instanceof TextSelection)) {
        if (!sel.$from.parent.inlineContent)
          resetEditableFrom = temporarilyEditableNear(view, sel.from);
        if (!sel.empty && !sel.$from.parent.inlineContent)
          resetEditableTo = temporarilyEditableNear(view, sel.to);
      }
      view.docView.setSelection(anchor, head, view.root, force);
      if (brokenSelectBetweenUneditable) {
        if (resetEditableFrom)
          resetEditable(resetEditableFrom);
        if (resetEditableTo)
          resetEditable(resetEditableTo);
      }
      if (sel.visible) {
        view.dom.classList.remove("ProseMirror-hideselection");
      } else {
        view.dom.classList.add("ProseMirror-hideselection");
        if ("onselectionchange" in document)
          removeClassOnSelectionChange(view);
      }
    }
    view.domObserver.setCurSelection();
    view.domObserver.connectSelection();
  }
  function temporarilyEditableNear(view, pos) {
    let { node, offset } = view.docView.domFromPos(pos, 0);
    let after = offset < node.childNodes.length ? node.childNodes[offset] : null;
    let before = offset ? node.childNodes[offset - 1] : null;
    if (safari && after && after.contentEditable == "false")
      return setEditable(after);
    if ((!after || after.contentEditable == "false") && (!before || before.contentEditable == "false")) {
      if (after)
        return setEditable(after);
      else if (before)
        return setEditable(before);
    }
  }
  function setEditable(element) {
    element.contentEditable = "true";
    if (safari && element.draggable) {
      element.draggable = false;
      element.wasDraggable = true;
    }
    return element;
  }
  function resetEditable(element) {
    element.contentEditable = "false";
    if (element.wasDraggable) {
      element.draggable = true;
      element.wasDraggable = null;
    }
  }
  function removeClassOnSelectionChange(view) {
    let doc4 = view.dom.ownerDocument;
    doc4.removeEventListener("selectionchange", view.input.hideSelectionGuard);
    let domSel = view.domSelection();
    let node = domSel.anchorNode, offset = domSel.anchorOffset;
    doc4.addEventListener("selectionchange", view.input.hideSelectionGuard = () => {
      if (domSel.anchorNode != node || domSel.anchorOffset != offset) {
        doc4.removeEventListener("selectionchange", view.input.hideSelectionGuard);
        setTimeout(() => {
          if (!editorOwnsSelection(view) || view.state.selection.visible)
            view.dom.classList.remove("ProseMirror-hideselection");
        }, 20);
      }
    });
  }
  function selectCursorWrapper(view) {
    let domSel = view.domSelection(), range2 = document.createRange();
    let node = view.cursorWrapper.dom, img = node.nodeName == "IMG";
    if (img)
      range2.setEnd(node.parentNode, domIndex(node) + 1);
    else
      range2.setEnd(node, 0);
    range2.collapse(false);
    domSel.removeAllRanges();
    domSel.addRange(range2);
    if (!img && !view.state.selection.visible && ie && ie_version <= 11) {
      node.disabled = true;
      node.disabled = false;
    }
  }
  function syncNodeSelection(view, sel) {
    if (sel instanceof NodeSelection) {
      let desc = view.docView.descAt(sel.from);
      if (desc != view.lastSelectedViewDesc) {
        clearNodeSelection(view);
        if (desc)
          desc.selectNode();
        view.lastSelectedViewDesc = desc;
      }
    } else {
      clearNodeSelection(view);
    }
  }
  function clearNodeSelection(view) {
    if (view.lastSelectedViewDesc) {
      if (view.lastSelectedViewDesc.parent)
        view.lastSelectedViewDesc.deselectNode();
      view.lastSelectedViewDesc = void 0;
    }
  }
  function selectionBetween(view, $anchor, $head, bias) {
    return view.someProp("createSelectionBetween", (f) => f(view, $anchor, $head)) || TextSelection.between($anchor, $head, bias);
  }
  function hasFocusAndSelection(view) {
    if (view.editable && view.root.activeElement != view.dom)
      return false;
    return hasSelection(view);
  }
  function hasSelection(view) {
    let sel = view.domSelection();
    if (!sel.anchorNode)
      return false;
    try {
      return view.dom.contains(sel.anchorNode.nodeType == 3 ? sel.anchorNode.parentNode : sel.anchorNode) && (view.editable || view.dom.contains(sel.focusNode.nodeType == 3 ? sel.focusNode.parentNode : sel.focusNode));
    } catch (_) {
      return false;
    }
  }
  function anchorInRightPlace(view) {
    let anchorDOM = view.docView.domFromPos(view.state.selection.anchor, 0);
    let domSel = view.domSelection();
    return isEquivalentPosition(anchorDOM.node, anchorDOM.offset, domSel.anchorNode, domSel.anchorOffset);
  }
  function moveSelectionBlock(state, dir) {
    let { $anchor, $head } = state.selection;
    let $side = dir > 0 ? $anchor.max($head) : $anchor.min($head);
    let $start = !$side.parent.inlineContent ? $side : $side.depth ? state.doc.resolve(dir > 0 ? $side.after() : $side.before()) : null;
    return $start && Selection.findFrom($start, dir);
  }
  function apply(view, sel) {
    view.dispatch(view.state.tr.setSelection(sel).scrollIntoView());
    return true;
  }
  function selectHorizontally(view, dir, mods) {
    let sel = view.state.selection;
    if (sel instanceof TextSelection) {
      if (!sel.empty || mods.indexOf("s") > -1) {
        return false;
      } else if (view.endOfTextblock(dir > 0 ? "right" : "left")) {
        let next = moveSelectionBlock(view.state, dir);
        if (next && next instanceof NodeSelection)
          return apply(view, next);
        return false;
      } else if (!(mac && mods.indexOf("m") > -1)) {
        let $head = sel.$head, node = $head.textOffset ? null : dir < 0 ? $head.nodeBefore : $head.nodeAfter, desc;
        if (!node || node.isText)
          return false;
        let nodePos = dir < 0 ? $head.pos - node.nodeSize : $head.pos;
        if (!(node.isAtom || (desc = view.docView.descAt(nodePos)) && !desc.contentDOM))
          return false;
        if (NodeSelection.isSelectable(node)) {
          return apply(view, new NodeSelection(dir < 0 ? view.state.doc.resolve($head.pos - node.nodeSize) : $head));
        } else if (webkit) {
          return apply(view, new TextSelection(view.state.doc.resolve(dir < 0 ? nodePos : nodePos + node.nodeSize)));
        } else {
          return false;
        }
      }
    } else if (sel instanceof NodeSelection && sel.node.isInline) {
      return apply(view, new TextSelection(dir > 0 ? sel.$to : sel.$from));
    } else {
      let next = moveSelectionBlock(view.state, dir);
      if (next)
        return apply(view, next);
      return false;
    }
  }
  function nodeLen(node) {
    return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
  }
  function isIgnorable(dom) {
    let desc = dom.pmViewDesc;
    return desc && desc.size == 0 && (dom.nextSibling || dom.nodeName != "BR");
  }
  function skipIgnoredNodesLeft(view) {
    let sel = view.domSelection();
    let node = sel.focusNode, offset = sel.focusOffset;
    if (!node)
      return;
    let moveNode, moveOffset, force = false;
    if (gecko && node.nodeType == 1 && offset < nodeLen(node) && isIgnorable(node.childNodes[offset]))
      force = true;
    for (; ; ) {
      if (offset > 0) {
        if (node.nodeType != 1) {
          break;
        } else {
          let before = node.childNodes[offset - 1];
          if (isIgnorable(before)) {
            moveNode = node;
            moveOffset = --offset;
          } else if (before.nodeType == 3) {
            node = before;
            offset = node.nodeValue.length;
          } else
            break;
        }
      } else if (isBlockNode(node)) {
        break;
      } else {
        let prev = node.previousSibling;
        while (prev && isIgnorable(prev)) {
          moveNode = node.parentNode;
          moveOffset = domIndex(prev);
          prev = prev.previousSibling;
        }
        if (!prev) {
          node = node.parentNode;
          if (node == view.dom)
            break;
          offset = 0;
        } else {
          node = prev;
          offset = nodeLen(node);
        }
      }
    }
    if (force)
      setSelFocus(view, sel, node, offset);
    else if (moveNode)
      setSelFocus(view, sel, moveNode, moveOffset);
  }
  function skipIgnoredNodesRight(view) {
    let sel = view.domSelection();
    let node = sel.focusNode, offset = sel.focusOffset;
    if (!node)
      return;
    let len = nodeLen(node);
    let moveNode, moveOffset;
    for (; ; ) {
      if (offset < len) {
        if (node.nodeType != 1)
          break;
        let after = node.childNodes[offset];
        if (isIgnorable(after)) {
          moveNode = node;
          moveOffset = ++offset;
        } else
          break;
      } else if (isBlockNode(node)) {
        break;
      } else {
        let next = node.nextSibling;
        while (next && isIgnorable(next)) {
          moveNode = next.parentNode;
          moveOffset = domIndex(next) + 1;
          next = next.nextSibling;
        }
        if (!next) {
          node = node.parentNode;
          if (node == view.dom)
            break;
          offset = len = 0;
        } else {
          node = next;
          offset = 0;
          len = nodeLen(node);
        }
      }
    }
    if (moveNode)
      setSelFocus(view, sel, moveNode, moveOffset);
  }
  function isBlockNode(dom) {
    let desc = dom.pmViewDesc;
    return desc && desc.node && desc.node.isBlock;
  }
  function setSelFocus(view, sel, node, offset) {
    if (selectionCollapsed(sel)) {
      let range2 = document.createRange();
      range2.setEnd(node, offset);
      range2.setStart(node, offset);
      sel.removeAllRanges();
      sel.addRange(range2);
    } else if (sel.extend) {
      sel.extend(node, offset);
    }
    view.domObserver.setCurSelection();
    let { state } = view;
    setTimeout(() => {
      if (view.state == state)
        selectionToDOM(view);
    }, 50);
  }
  function selectVertically(view, dir, mods) {
    let sel = view.state.selection;
    if (sel instanceof TextSelection && !sel.empty || mods.indexOf("s") > -1)
      return false;
    if (mac && mods.indexOf("m") > -1)
      return false;
    let { $from, $to } = sel;
    if (!$from.parent.inlineContent || view.endOfTextblock(dir < 0 ? "up" : "down")) {
      let next = moveSelectionBlock(view.state, dir);
      if (next && next instanceof NodeSelection)
        return apply(view, next);
    }
    if (!$from.parent.inlineContent) {
      let side = dir < 0 ? $from : $to;
      let beyond = sel instanceof AllSelection ? Selection.near(side, dir) : Selection.findFrom(side, dir);
      return beyond ? apply(view, beyond) : false;
    }
    return false;
  }
  function stopNativeHorizontalDelete(view, dir) {
    if (!(view.state.selection instanceof TextSelection))
      return true;
    let { $head, $anchor, empty: empty2 } = view.state.selection;
    if (!$head.sameParent($anchor))
      return true;
    if (!empty2)
      return false;
    if (view.endOfTextblock(dir > 0 ? "forward" : "backward"))
      return true;
    let nextNode = !$head.textOffset && (dir < 0 ? $head.nodeBefore : $head.nodeAfter);
    if (nextNode && !nextNode.isText) {
      let tr = view.state.tr;
      if (dir < 0)
        tr.delete($head.pos - nextNode.nodeSize, $head.pos);
      else
        tr.delete($head.pos, $head.pos + nextNode.nodeSize);
      view.dispatch(tr);
      return true;
    }
    return false;
  }
  function switchEditable(view, node, state) {
    view.domObserver.stop();
    node.contentEditable = state;
    view.domObserver.start();
  }
  function safariDownArrowBug(view) {
    if (!safari || view.state.selection.$head.parentOffset > 0)
      return false;
    let { focusNode, focusOffset } = view.domSelection();
    if (focusNode && focusNode.nodeType == 1 && focusOffset == 0 && focusNode.firstChild && focusNode.firstChild.contentEditable == "false") {
      let child = focusNode.firstChild;
      switchEditable(view, child, "true");
      setTimeout(() => switchEditable(view, child, "false"), 20);
    }
    return false;
  }
  function getMods(event) {
    let result = "";
    if (event.ctrlKey)
      result += "c";
    if (event.metaKey)
      result += "m";
    if (event.altKey)
      result += "a";
    if (event.shiftKey)
      result += "s";
    return result;
  }
  function captureKeyDown(view, event) {
    let code = event.keyCode, mods = getMods(event);
    if (code == 8 || mac && code == 72 && mods == "c") {
      return stopNativeHorizontalDelete(view, -1) || skipIgnoredNodesLeft(view);
    } else if (code == 46 || mac && code == 68 && mods == "c") {
      return stopNativeHorizontalDelete(view, 1) || skipIgnoredNodesRight(view);
    } else if (code == 13 || code == 27) {
      return true;
    } else if (code == 37 || mac && code == 66 && mods == "c") {
      return selectHorizontally(view, -1, mods) || skipIgnoredNodesLeft(view);
    } else if (code == 39 || mac && code == 70 && mods == "c") {
      return selectHorizontally(view, 1, mods) || skipIgnoredNodesRight(view);
    } else if (code == 38 || mac && code == 80 && mods == "c") {
      return selectVertically(view, -1, mods) || skipIgnoredNodesLeft(view);
    } else if (code == 40 || mac && code == 78 && mods == "c") {
      return safariDownArrowBug(view) || selectVertically(view, 1, mods) || skipIgnoredNodesRight(view);
    } else if (mods == (mac ? "m" : "c") && (code == 66 || code == 73 || code == 89 || code == 90)) {
      return true;
    }
    return false;
  }
  function serializeForClipboard(view, slice2) {
    let context = [], { content, openStart, openEnd } = slice2;
    while (openStart > 1 && openEnd > 1 && content.childCount == 1 && content.firstChild.childCount == 1) {
      openStart--;
      openEnd--;
      let node = content.firstChild;
      context.push(node.type.name, node.attrs != node.type.defaultAttrs ? node.attrs : null);
      content = node.content;
    }
    let serializer = view.someProp("clipboardSerializer") || DOMSerializer.fromSchema(view.state.schema);
    let doc4 = detachedDoc(), wrap2 = doc4.createElement("div");
    wrap2.appendChild(serializer.serializeFragment(content, { document: doc4 }));
    let firstChild = wrap2.firstChild, needsWrap, wrappers = 0;
    while (firstChild && firstChild.nodeType == 1 && (needsWrap = wrapMap[firstChild.nodeName.toLowerCase()])) {
      for (let i = needsWrap.length - 1; i >= 0; i--) {
        let wrapper = doc4.createElement(needsWrap[i]);
        while (wrap2.firstChild)
          wrapper.appendChild(wrap2.firstChild);
        wrap2.appendChild(wrapper);
        wrappers++;
      }
      firstChild = wrap2.firstChild;
    }
    if (firstChild && firstChild.nodeType == 1)
      firstChild.setAttribute("data-pm-slice", `${openStart} ${openEnd}${wrappers ? ` -${wrappers}` : ""} ${JSON.stringify(context)}`);
    let text = view.someProp("clipboardTextSerializer", (f) => f(slice2)) || slice2.content.textBetween(0, slice2.content.size, "\n\n");
    return { dom: wrap2, text };
  }
  function parseFromClipboard(view, text, html, plainText, $context) {
    let inCode = $context.parent.type.spec.code;
    let dom, slice2;
    if (!html && !text)
      return null;
    let asText = text && (plainText || inCode || !html);
    if (asText) {
      view.someProp("transformPastedText", (f) => {
        text = f(text, inCode || plainText);
      });
      if (inCode)
        return text ? new Slice(Fragment.from(view.state.schema.text(text.replace(/\r\n?/g, "\n"))), 0, 0) : Slice.empty;
      let parsed = view.someProp("clipboardTextParser", (f) => f(text, $context, plainText));
      if (parsed) {
        slice2 = parsed;
      } else {
        let marks = $context.marks();
        let { schema } = view.state, serializer = DOMSerializer.fromSchema(schema);
        dom = document.createElement("div");
        text.split(/(?:\r\n?|\n)+/).forEach((block) => {
          let p = dom.appendChild(document.createElement("p"));
          if (block)
            p.appendChild(serializer.serializeNode(schema.text(block, marks)));
        });
      }
    } else {
      view.someProp("transformPastedHTML", (f) => {
        html = f(html);
      });
      dom = readHTML(html);
      if (webkit)
        restoreReplacedSpaces(dom);
    }
    let contextNode = dom && dom.querySelector("[data-pm-slice]");
    let sliceData = contextNode && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(contextNode.getAttribute("data-pm-slice") || "");
    if (sliceData && sliceData[3])
      for (let i = +sliceData[3]; i > 0 && dom.firstChild; i--)
        dom = dom.firstChild;
    if (!slice2) {
      let parser = view.someProp("clipboardParser") || view.someProp("domParser") || DOMParser.fromSchema(view.state.schema);
      slice2 = parser.parseSlice(dom, {
        preserveWhitespace: !!(asText || sliceData),
        context: $context,
        ruleFromNode(dom2) {
          if (dom2.nodeName == "BR" && !dom2.nextSibling && dom2.parentNode && !inlineParents.test(dom2.parentNode.nodeName))
            return { ignore: true };
          return null;
        }
      });
    }
    if (sliceData) {
      slice2 = addContext(closeSlice(slice2, +sliceData[1], +sliceData[2]), sliceData[4]);
    } else {
      slice2 = Slice.maxOpen(normalizeSiblings(slice2.content, $context), true);
      if (slice2.openStart || slice2.openEnd) {
        let openStart = 0, openEnd = 0;
        for (let node = slice2.content.firstChild; openStart < slice2.openStart && !node.type.spec.isolating; openStart++, node = node.firstChild) {
        }
        for (let node = slice2.content.lastChild; openEnd < slice2.openEnd && !node.type.spec.isolating; openEnd++, node = node.lastChild) {
        }
        slice2 = closeSlice(slice2, openStart, openEnd);
      }
    }
    view.someProp("transformPasted", (f) => {
      slice2 = f(slice2);
    });
    return slice2;
  }
  function normalizeSiblings(fragment, $context) {
    if (fragment.childCount < 2)
      return fragment;
    for (let d = $context.depth; d >= 0; d--) {
      let parent = $context.node(d);
      let match = parent.contentMatchAt($context.index(d));
      let lastWrap, result = [];
      fragment.forEach((node) => {
        if (!result)
          return;
        let wrap2 = match.findWrapping(node.type), inLast;
        if (!wrap2)
          return result = null;
        if (inLast = result.length && lastWrap.length && addToSibling(wrap2, lastWrap, node, result[result.length - 1], 0)) {
          result[result.length - 1] = inLast;
        } else {
          if (result.length)
            result[result.length - 1] = closeRight(result[result.length - 1], lastWrap.length);
          let wrapped = withWrappers(node, wrap2);
          result.push(wrapped);
          match = match.matchType(wrapped.type);
          lastWrap = wrap2;
        }
      });
      if (result)
        return Fragment.from(result);
    }
    return fragment;
  }
  function withWrappers(node, wrap2, from2 = 0) {
    for (let i = wrap2.length - 1; i >= from2; i--)
      node = wrap2[i].create(null, Fragment.from(node));
    return node;
  }
  function addToSibling(wrap2, lastWrap, node, sibling, depth) {
    if (depth < wrap2.length && depth < lastWrap.length && wrap2[depth] == lastWrap[depth]) {
      let inner = addToSibling(wrap2, lastWrap, node, sibling.lastChild, depth + 1);
      if (inner)
        return sibling.copy(sibling.content.replaceChild(sibling.childCount - 1, inner));
      let match = sibling.contentMatchAt(sibling.childCount);
      if (match.matchType(depth == wrap2.length - 1 ? node.type : wrap2[depth + 1]))
        return sibling.copy(sibling.content.append(Fragment.from(withWrappers(node, wrap2, depth + 1))));
    }
  }
  function closeRight(node, depth) {
    if (depth == 0)
      return node;
    let fragment = node.content.replaceChild(node.childCount - 1, closeRight(node.lastChild, depth - 1));
    let fill = node.contentMatchAt(node.childCount).fillBefore(Fragment.empty, true);
    return node.copy(fragment.append(fill));
  }
  function closeRange(fragment, side, from2, to, depth, openEnd) {
    let node = side < 0 ? fragment.firstChild : fragment.lastChild, inner = node.content;
    if (depth < to - 1)
      inner = closeRange(inner, side, from2, to, depth + 1, openEnd);
    if (depth >= from2)
      inner = side < 0 ? node.contentMatchAt(0).fillBefore(inner, fragment.childCount > 1 || openEnd <= depth).append(inner) : inner.append(node.contentMatchAt(node.childCount).fillBefore(Fragment.empty, true));
    return fragment.replaceChild(side < 0 ? 0 : fragment.childCount - 1, node.copy(inner));
  }
  function closeSlice(slice2, openStart, openEnd) {
    if (openStart < slice2.openStart)
      slice2 = new Slice(closeRange(slice2.content, -1, openStart, slice2.openStart, 0, slice2.openEnd), openStart, slice2.openEnd);
    if (openEnd < slice2.openEnd)
      slice2 = new Slice(closeRange(slice2.content, 1, openEnd, slice2.openEnd, 0, 0), slice2.openStart, openEnd);
    return slice2;
  }
  function detachedDoc() {
    return _detachedDoc || (_detachedDoc = document.implementation.createHTMLDocument("title"));
  }
  function readHTML(html) {
    let metas = /^(\s*<meta [^>]*>)*/.exec(html);
    if (metas)
      html = html.slice(metas[0].length);
    let elt = detachedDoc().createElement("div");
    let firstTag = /<([a-z][^>\s]+)/i.exec(html), wrap2;
    if (wrap2 = firstTag && wrapMap[firstTag[1].toLowerCase()])
      html = wrap2.map((n) => "<" + n + ">").join("") + html + wrap2.map((n) => "</" + n + ">").reverse().join("");
    elt.innerHTML = html;
    if (wrap2)
      for (let i = 0; i < wrap2.length; i++)
        elt = elt.querySelector(wrap2[i]) || elt;
    return elt;
  }
  function restoreReplacedSpaces(dom) {
    let nodes = dom.querySelectorAll(chrome ? "span:not([class]):not([style])" : "span.Apple-converted-space");
    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i];
      if (node.childNodes.length == 1 && node.textContent == "\xA0" && node.parentNode)
        node.parentNode.replaceChild(dom.ownerDocument.createTextNode(" "), node);
    }
  }
  function addContext(slice2, context) {
    if (!slice2.size)
      return slice2;
    let schema = slice2.content.firstChild.type.schema, array;
    try {
      array = JSON.parse(context);
    } catch (e) {
      return slice2;
    }
    let { content, openStart, openEnd } = slice2;
    for (let i = array.length - 2; i >= 0; i -= 2) {
      let type = schema.nodes[array[i]];
      if (!type || type.hasRequiredAttrs())
        break;
      content = Fragment.from(type.create(array[i + 1], content));
      openStart++;
      openEnd++;
    }
    return new Slice(content, openStart, openEnd);
  }
  function initInput(view) {
    for (let event in handlers) {
      let handler = handlers[event];
      view.dom.addEventListener(event, view.input.eventHandlers[event] = (event2) => {
        if (eventBelongsToView(view, event2) && !runCustomHandler(view, event2) && (view.editable || !(event2.type in editHandlers)))
          handler(view, event2);
      });
    }
    if (safari)
      view.dom.addEventListener("input", () => null);
    ensureListeners(view);
  }
  function setSelectionOrigin(view, origin) {
    view.input.lastSelectionOrigin = origin;
    view.input.lastSelectionTime = Date.now();
  }
  function destroyInput(view) {
    view.domObserver.stop();
    for (let type in view.input.eventHandlers)
      view.dom.removeEventListener(type, view.input.eventHandlers[type]);
    clearTimeout(view.input.composingTimeout);
    clearTimeout(view.input.lastIOSEnterFallbackTimeout);
  }
  function ensureListeners(view) {
    view.someProp("handleDOMEvents", (currentHandlers) => {
      for (let type in currentHandlers)
        if (!view.input.eventHandlers[type])
          view.dom.addEventListener(type, view.input.eventHandlers[type] = (event) => runCustomHandler(view, event));
    });
  }
  function runCustomHandler(view, event) {
    return view.someProp("handleDOMEvents", (handlers2) => {
      let handler = handlers2[event.type];
      return handler ? handler(view, event) || event.defaultPrevented : false;
    });
  }
  function eventBelongsToView(view, event) {
    if (!event.bubbles)
      return true;
    if (event.defaultPrevented)
      return false;
    for (let node = event.target; node != view.dom; node = node.parentNode)
      if (!node || node.nodeType == 11 || node.pmViewDesc && node.pmViewDesc.stopEvent(event))
        return false;
    return true;
  }
  function dispatchEvent(view, event) {
    if (!runCustomHandler(view, event) && handlers[event.type] && (view.editable || !(event.type in editHandlers)))
      handlers[event.type](view, event);
  }
  function eventCoords(event) {
    return { left: event.clientX, top: event.clientY };
  }
  function isNear(event, click) {
    let dx = click.x - event.clientX, dy = click.y - event.clientY;
    return dx * dx + dy * dy < 100;
  }
  function runHandlerOnContext(view, propName, pos, inside, event) {
    if (inside == -1)
      return false;
    let $pos = view.state.doc.resolve(inside);
    for (let i = $pos.depth + 1; i > 0; i--) {
      if (view.someProp(propName, (f) => i > $pos.depth ? f(view, pos, $pos.nodeAfter, $pos.before(i), event, true) : f(view, pos, $pos.node(i), $pos.before(i), event, false)))
        return true;
    }
    return false;
  }
  function updateSelection(view, selection, origin) {
    if (!view.focused)
      view.focus();
    let tr = view.state.tr.setSelection(selection);
    if (origin == "pointer")
      tr.setMeta("pointer", true);
    view.dispatch(tr);
  }
  function selectClickedLeaf(view, inside) {
    if (inside == -1)
      return false;
    let $pos = view.state.doc.resolve(inside), node = $pos.nodeAfter;
    if (node && node.isAtom && NodeSelection.isSelectable(node)) {
      updateSelection(view, new NodeSelection($pos), "pointer");
      return true;
    }
    return false;
  }
  function selectClickedNode(view, inside) {
    if (inside == -1)
      return false;
    let sel = view.state.selection, selectedNode, selectAt;
    if (sel instanceof NodeSelection)
      selectedNode = sel.node;
    let $pos = view.state.doc.resolve(inside);
    for (let i = $pos.depth + 1; i > 0; i--) {
      let node = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
      if (NodeSelection.isSelectable(node)) {
        if (selectedNode && sel.$from.depth > 0 && i >= sel.$from.depth && $pos.before(sel.$from.depth + 1) == sel.$from.pos)
          selectAt = $pos.before(sel.$from.depth);
        else
          selectAt = $pos.before(i);
        break;
      }
    }
    if (selectAt != null) {
      updateSelection(view, NodeSelection.create(view.state.doc, selectAt), "pointer");
      return true;
    } else {
      return false;
    }
  }
  function handleSingleClick(view, pos, inside, event, selectNode) {
    return runHandlerOnContext(view, "handleClickOn", pos, inside, event) || view.someProp("handleClick", (f) => f(view, pos, event)) || (selectNode ? selectClickedNode(view, inside) : selectClickedLeaf(view, inside));
  }
  function handleDoubleClick(view, pos, inside, event) {
    return runHandlerOnContext(view, "handleDoubleClickOn", pos, inside, event) || view.someProp("handleDoubleClick", (f) => f(view, pos, event));
  }
  function handleTripleClick(view, pos, inside, event) {
    return runHandlerOnContext(view, "handleTripleClickOn", pos, inside, event) || view.someProp("handleTripleClick", (f) => f(view, pos, event)) || defaultTripleClick(view, inside, event);
  }
  function defaultTripleClick(view, inside, event) {
    if (event.button != 0)
      return false;
    let doc4 = view.state.doc;
    if (inside == -1) {
      if (doc4.inlineContent) {
        updateSelection(view, TextSelection.create(doc4, 0, doc4.content.size), "pointer");
        return true;
      }
      return false;
    }
    let $pos = doc4.resolve(inside);
    for (let i = $pos.depth + 1; i > 0; i--) {
      let node = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
      let nodePos = $pos.before(i);
      if (node.inlineContent)
        updateSelection(view, TextSelection.create(doc4, nodePos + 1, nodePos + 1 + node.content.size), "pointer");
      else if (NodeSelection.isSelectable(node))
        updateSelection(view, NodeSelection.create(doc4, nodePos), "pointer");
      else
        continue;
      return true;
    }
  }
  function forceDOMFlush(view) {
    return endComposition(view);
  }
  function inOrNearComposition(view, event) {
    if (view.composing)
      return true;
    if (safari && Math.abs(event.timeStamp - view.input.compositionEndedAt) < 500) {
      view.input.compositionEndedAt = -2e8;
      return true;
    }
    return false;
  }
  function scheduleComposeEnd(view, delay) {
    clearTimeout(view.input.composingTimeout);
    if (delay > -1)
      view.input.composingTimeout = setTimeout(() => endComposition(view), delay);
  }
  function clearComposition(view) {
    if (view.composing) {
      view.input.composing = false;
      view.input.compositionEndedAt = timestampFromCustomEvent();
    }
    while (view.input.compositionNodes.length > 0)
      view.input.compositionNodes.pop().markParentsDirty();
  }
  function timestampFromCustomEvent() {
    let event = document.createEvent("Event");
    event.initEvent("event", true, true);
    return event.timeStamp;
  }
  function endComposition(view, forceUpdate = false) {
    if (android && view.domObserver.flushingSoon >= 0)
      return;
    view.domObserver.forceFlush();
    clearComposition(view);
    if (forceUpdate || view.docView && view.docView.dirty) {
      let sel = selectionFromDOM(view);
      if (sel && !sel.eq(view.state.selection))
        view.dispatch(view.state.tr.setSelection(sel));
      else
        view.updateState(view.state);
      return true;
    }
    return false;
  }
  function captureCopy(view, dom) {
    if (!view.dom.parentNode)
      return;
    let wrap2 = view.dom.parentNode.appendChild(document.createElement("div"));
    wrap2.appendChild(dom);
    wrap2.style.cssText = "position: fixed; left: -10000px; top: 10px";
    let sel = getSelection(), range2 = document.createRange();
    range2.selectNodeContents(dom);
    view.dom.blur();
    sel.removeAllRanges();
    sel.addRange(range2);
    setTimeout(() => {
      if (wrap2.parentNode)
        wrap2.parentNode.removeChild(wrap2);
      view.focus();
    }, 50);
  }
  function sliceSingleNode(slice2) {
    return slice2.openStart == 0 && slice2.openEnd == 0 && slice2.content.childCount == 1 ? slice2.content.firstChild : null;
  }
  function capturePaste(view, event) {
    if (!view.dom.parentNode)
      return;
    let plainText = view.input.shiftKey || view.state.selection.$from.parent.type.spec.code;
    let target = view.dom.parentNode.appendChild(document.createElement(plainText ? "textarea" : "div"));
    if (!plainText)
      target.contentEditable = "true";
    target.style.cssText = "position: fixed; left: -10000px; top: 10px";
    target.focus();
    setTimeout(() => {
      view.focus();
      if (target.parentNode)
        target.parentNode.removeChild(target);
      if (plainText)
        doPaste(view, target.value, null, event);
      else
        doPaste(view, target.textContent, target.innerHTML, event);
    }, 50);
  }
  function doPaste(view, text, html, event) {
    let slice2 = parseFromClipboard(view, text, html, view.input.shiftKey, view.state.selection.$from);
    if (view.someProp("handlePaste", (f) => f(view, event, slice2 || Slice.empty)))
      return true;
    if (!slice2)
      return false;
    let singleNode = sliceSingleNode(slice2);
    let tr = singleNode ? view.state.tr.replaceSelectionWith(singleNode, view.input.shiftKey) : view.state.tr.replaceSelection(slice2);
    view.dispatch(tr.scrollIntoView().setMeta("paste", true).setMeta("uiEvent", "paste"));
    return true;
  }
  function compareObjs(a, b) {
    if (a == b)
      return true;
    for (let p in a)
      if (a[p] !== b[p])
        return false;
    for (let p in b)
      if (!(p in a))
        return false;
    return true;
  }
  function mapChildren(oldChildren, newLocal, mapping, node, offset, oldOffset, options) {
    let children = oldChildren.slice();
    let shift2 = (oldStart, oldEnd, newStart, newEnd) => {
      for (let i = 0; i < children.length; i += 3) {
        let end = children[i + 1], dSize;
        if (end < 0 || oldStart > end + oldOffset)
          continue;
        let start = children[i] + oldOffset;
        if (oldEnd >= start) {
          children[i + 1] = oldStart <= start ? -2 : -1;
        } else if (newStart >= offset && (dSize = newEnd - newStart - (oldEnd - oldStart))) {
          children[i] += dSize;
          children[i + 1] += dSize;
        }
      }
    };
    for (let i = 0; i < mapping.maps.length; i++)
      mapping.maps[i].forEach(shift2);
    let mustRebuild = false;
    for (let i = 0; i < children.length; i += 3)
      if (children[i + 1] < 0) {
        if (children[i + 1] == -2) {
          mustRebuild = true;
          children[i + 1] = -1;
          continue;
        }
        let from2 = mapping.map(oldChildren[i] + oldOffset), fromLocal = from2 - offset;
        if (fromLocal < 0 || fromLocal >= node.content.size) {
          mustRebuild = true;
          continue;
        }
        let to = mapping.map(oldChildren[i + 1] + oldOffset, -1), toLocal = to - offset;
        let { index, offset: childOffset } = node.content.findIndex(fromLocal);
        let childNode = node.maybeChild(index);
        if (childNode && childOffset == fromLocal && childOffset + childNode.nodeSize == toLocal) {
          let mapped = children[i + 2].mapInner(mapping, childNode, from2 + 1, oldChildren[i] + oldOffset + 1, options);
          if (mapped != empty) {
            children[i] = fromLocal;
            children[i + 1] = toLocal;
            children[i + 2] = mapped;
          } else {
            children[i + 1] = -2;
            mustRebuild = true;
          }
        } else {
          mustRebuild = true;
        }
      }
    if (mustRebuild) {
      let decorations = mapAndGatherRemainingDecorations(children, oldChildren, newLocal, mapping, offset, oldOffset, options);
      let built = buildTree(decorations, node, 0, options);
      newLocal = built.local;
      for (let i = 0; i < children.length; i += 3)
        if (children[i + 1] < 0) {
          children.splice(i, 3);
          i -= 3;
        }
      for (let i = 0, j = 0; i < built.children.length; i += 3) {
        let from2 = built.children[i];
        while (j < children.length && children[j] < from2)
          j += 3;
        children.splice(j, 0, built.children[i], built.children[i + 1], built.children[i + 2]);
      }
    }
    return new DecorationSet(newLocal.sort(byPos), children);
  }
  function moveSpans(spans, offset) {
    if (!offset || !spans.length)
      return spans;
    let result = [];
    for (let i = 0; i < spans.length; i++) {
      let span = spans[i];
      result.push(new Decoration(span.from + offset, span.to + offset, span.type));
    }
    return result;
  }
  function mapAndGatherRemainingDecorations(children, oldChildren, decorations, mapping, offset, oldOffset, options) {
    function gather(set, oldOffset2) {
      for (let i = 0; i < set.local.length; i++) {
        let mapped = set.local[i].map(mapping, offset, oldOffset2);
        if (mapped)
          decorations.push(mapped);
        else if (options.onRemove)
          options.onRemove(set.local[i].spec);
      }
      for (let i = 0; i < set.children.length; i += 3)
        gather(set.children[i + 2], set.children[i] + oldOffset2 + 1);
    }
    for (let i = 0; i < children.length; i += 3)
      if (children[i + 1] == -1)
        gather(children[i + 2], oldChildren[i] + oldOffset + 1);
    return decorations;
  }
  function takeSpansForNode(spans, node, offset) {
    if (node.isLeaf)
      return null;
    let end = offset + node.nodeSize, found2 = null;
    for (let i = 0, span; i < spans.length; i++) {
      if ((span = spans[i]) && span.from > offset && span.to < end) {
        (found2 || (found2 = [])).push(span);
        spans[i] = null;
      }
    }
    return found2;
  }
  function withoutNulls(array) {
    let result = [];
    for (let i = 0; i < array.length; i++)
      if (array[i] != null)
        result.push(array[i]);
    return result;
  }
  function buildTree(spans, node, offset, options) {
    let children = [], hasNulls = false;
    node.forEach((childNode, localStart) => {
      let found2 = takeSpansForNode(spans, childNode, localStart + offset);
      if (found2) {
        hasNulls = true;
        let subtree = buildTree(found2, childNode, offset + localStart + 1, options);
        if (subtree != empty)
          children.push(localStart, localStart + childNode.nodeSize, subtree);
      }
    });
    let locals = moveSpans(hasNulls ? withoutNulls(spans) : spans, -offset).sort(byPos);
    for (let i = 0; i < locals.length; i++)
      if (!locals[i].type.valid(node, locals[i])) {
        if (options.onRemove)
          options.onRemove(locals[i].spec);
        locals.splice(i--, 1);
      }
    return locals.length || children.length ? new DecorationSet(locals, children) : empty;
  }
  function byPos(a, b) {
    return a.from - b.from || a.to - b.to;
  }
  function removeOverlap(spans) {
    let working = spans;
    for (let i = 0; i < working.length - 1; i++) {
      let span = working[i];
      if (span.from != span.to)
        for (let j = i + 1; j < working.length; j++) {
          let next = working[j];
          if (next.from == span.from) {
            if (next.to != span.to) {
              if (working == spans)
                working = spans.slice();
              working[j] = next.copy(next.from, span.to);
              insertAhead(working, j + 1, next.copy(span.to, next.to));
            }
            continue;
          } else {
            if (next.from < span.to) {
              if (working == spans)
                working = spans.slice();
              working[i] = span.copy(span.from, next.from);
              insertAhead(working, j, span.copy(next.from, span.to));
            }
            break;
          }
        }
    }
    return working;
  }
  function insertAhead(array, i, deco) {
    while (i < array.length && byPos(deco, array[i]) > 0)
      i++;
    array.splice(i, 0, deco);
  }
  function viewDecorations(view) {
    let found2 = [];
    view.someProp("decorations", (f) => {
      let result = f(view.state);
      if (result && result != empty)
        found2.push(result);
    });
    if (view.cursorWrapper)
      found2.push(DecorationSet.create(view.state.doc, [view.cursorWrapper.deco]));
    return DecorationGroup.from(found2);
  }
  function checkCSS(view) {
    if (cssChecked)
      return;
    cssChecked = true;
    if (getComputedStyle(view.dom).whiteSpace == "normal")
      console["warn"]("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.");
  }
  function parseBetween(view, from_, to_) {
    let { node: parent, fromOffset, toOffset, from: from2, to } = view.docView.parseRange(from_, to_);
    let domSel = view.domSelection();
    let find;
    let anchor = domSel.anchorNode;
    if (anchor && view.dom.contains(anchor.nodeType == 1 ? anchor : anchor.parentNode)) {
      find = [{ node: anchor, offset: domSel.anchorOffset }];
      if (!selectionCollapsed(domSel))
        find.push({ node: domSel.focusNode, offset: domSel.focusOffset });
    }
    if (chrome && view.input.lastKeyCode === 8) {
      for (let off = toOffset; off > fromOffset; off--) {
        let node = parent.childNodes[off - 1], desc = node.pmViewDesc;
        if (node.nodeName == "BR" && !desc) {
          toOffset = off;
          break;
        }
        if (!desc || desc.size)
          break;
      }
    }
    let startDoc = view.state.doc;
    let parser = view.someProp("domParser") || DOMParser.fromSchema(view.state.schema);
    let $from = startDoc.resolve(from2);
    let sel = null, doc4 = parser.parse(parent, {
      topNode: $from.parent,
      topMatch: $from.parent.contentMatchAt($from.index()),
      topOpen: true,
      from: fromOffset,
      to: toOffset,
      preserveWhitespace: $from.parent.type.whitespace == "pre" ? "full" : true,
      findPositions: find,
      ruleFromNode,
      context: $from
    });
    if (find && find[0].pos != null) {
      let anchor2 = find[0].pos, head = find[1] && find[1].pos;
      if (head == null)
        head = anchor2;
      sel = { anchor: anchor2 + from2, head: head + from2 };
    }
    return { doc: doc4, sel, from: from2, to };
  }
  function ruleFromNode(dom) {
    let desc = dom.pmViewDesc;
    if (desc) {
      return desc.parseRule();
    } else if (dom.nodeName == "BR" && dom.parentNode) {
      if (safari && /^(ul|ol)$/i.test(dom.parentNode.nodeName)) {
        let skip = document.createElement("div");
        skip.appendChild(document.createElement("li"));
        return { skip };
      } else if (dom.parentNode.lastChild == dom || safari && /^(tr|table)$/i.test(dom.parentNode.nodeName)) {
        return { ignore: true };
      }
    } else if (dom.nodeName == "IMG" && dom.getAttribute("mark-placeholder")) {
      return { ignore: true };
    }
    return null;
  }
  function readDOMChange(view, from2, to, typeOver, addedNodes) {
    if (from2 < 0) {
      let origin = view.input.lastSelectionTime > Date.now() - 50 ? view.input.lastSelectionOrigin : null;
      let newSel = selectionFromDOM(view, origin);
      if (newSel && !view.state.selection.eq(newSel)) {
        let tr2 = view.state.tr.setSelection(newSel);
        if (origin == "pointer")
          tr2.setMeta("pointer", true);
        else if (origin == "key")
          tr2.scrollIntoView();
        view.dispatch(tr2);
      }
      return;
    }
    let $before = view.state.doc.resolve(from2);
    let shared = $before.sharedDepth(to);
    from2 = $before.before(shared + 1);
    to = view.state.doc.resolve(to).after(shared + 1);
    let sel = view.state.selection;
    let parse = parseBetween(view, from2, to);
    if (chrome && view.cursorWrapper && parse.sel && parse.sel.anchor == view.cursorWrapper.deco.from) {
      let text = view.cursorWrapper.deco.type.toDOM.nextSibling;
      let size = text && text.nodeValue ? text.nodeValue.length : 1;
      parse.sel = { anchor: parse.sel.anchor + size, head: parse.sel.anchor + size };
    }
    let doc4 = view.state.doc, compare = doc4.slice(parse.from, parse.to);
    let preferredPos, preferredSide;
    if (view.input.lastKeyCode === 8 && Date.now() - 100 < view.input.lastKeyCodeTime) {
      preferredPos = view.state.selection.to;
      preferredSide = "end";
    } else {
      preferredPos = view.state.selection.from;
      preferredSide = "start";
    }
    view.input.lastKeyCode = null;
    let change = findDiff(compare.content, parse.doc.content, parse.from, preferredPos, preferredSide);
    if ((ios && view.input.lastIOSEnter > Date.now() - 225 || android) && addedNodes.some((n) => n.nodeName == "DIV" || n.nodeName == "P") && (!change || change.endA >= change.endB) && view.someProp("handleKeyDown", (f) => f(view, keyEvent(13, "Enter")))) {
      view.input.lastIOSEnter = 0;
      return;
    }
    if (!change) {
      if (typeOver && sel instanceof TextSelection && !sel.empty && sel.$head.sameParent(sel.$anchor) && !view.composing && !(parse.sel && parse.sel.anchor != parse.sel.head)) {
        change = { start: sel.from, endA: sel.to, endB: sel.to };
      } else {
        if (parse.sel) {
          let sel2 = resolveSelection(view, view.state.doc, parse.sel);
          if (sel2 && !sel2.eq(view.state.selection))
            view.dispatch(view.state.tr.setSelection(sel2));
        }
        return;
      }
    }
    view.input.domChangeCount++;
    if (view.state.selection.from < view.state.selection.to && change.start == change.endB && view.state.selection instanceof TextSelection) {
      if (change.start > view.state.selection.from && change.start <= view.state.selection.from + 2 && view.state.selection.from >= parse.from) {
        change.start = view.state.selection.from;
      } else if (change.endA < view.state.selection.to && change.endA >= view.state.selection.to - 2 && view.state.selection.to <= parse.to) {
        change.endB += view.state.selection.to - change.endA;
        change.endA = view.state.selection.to;
      }
    }
    if (ie && ie_version <= 11 && change.endB == change.start + 1 && change.endA == change.start && change.start > parse.from && parse.doc.textBetween(change.start - parse.from - 1, change.start - parse.from + 1) == " \xA0") {
      change.start--;
      change.endA--;
      change.endB--;
    }
    let $from = parse.doc.resolveNoCache(change.start - parse.from);
    let $to = parse.doc.resolveNoCache(change.endB - parse.from);
    let $fromA = doc4.resolve(change.start);
    let inlineChange = $from.sameParent($to) && $from.parent.inlineContent && $fromA.end() >= change.endA;
    let nextSel;
    if ((ios && view.input.lastIOSEnter > Date.now() - 225 && (!inlineChange || addedNodes.some((n) => n.nodeName == "DIV" || n.nodeName == "P")) || !inlineChange && $from.pos < parse.doc.content.size && (nextSel = Selection.findFrom(parse.doc.resolve($from.pos + 1), 1, true)) && nextSel.head == $to.pos) && view.someProp("handleKeyDown", (f) => f(view, keyEvent(13, "Enter")))) {
      view.input.lastIOSEnter = 0;
      return;
    }
    if (view.state.selection.anchor > change.start && looksLikeJoin(doc4, change.start, change.endA, $from, $to) && view.someProp("handleKeyDown", (f) => f(view, keyEvent(8, "Backspace")))) {
      if (android && chrome)
        view.domObserver.suppressSelectionUpdates();
      return;
    }
    if (chrome && android && change.endB == change.start)
      view.input.lastAndroidDelete = Date.now();
    if (android && !inlineChange && $from.start() != $to.start() && $to.parentOffset == 0 && $from.depth == $to.depth && parse.sel && parse.sel.anchor == parse.sel.head && parse.sel.head == change.endA) {
      change.endB -= 2;
      $to = parse.doc.resolveNoCache(change.endB - parse.from);
      setTimeout(() => {
        view.someProp("handleKeyDown", function(f) {
          return f(view, keyEvent(13, "Enter"));
        });
      }, 20);
    }
    let chFrom = change.start, chTo = change.endA;
    let tr, storedMarks, markChange;
    if (inlineChange) {
      if ($from.pos == $to.pos) {
        if (ie && ie_version <= 11 && $from.parentOffset == 0) {
          view.domObserver.suppressSelectionUpdates();
          setTimeout(() => selectionToDOM(view), 20);
        }
        tr = view.state.tr.delete(chFrom, chTo);
        storedMarks = doc4.resolve(change.start).marksAcross(doc4.resolve(change.endA));
      } else if (change.endA == change.endB && (markChange = isMarkChange($from.parent.content.cut($from.parentOffset, $to.parentOffset), $fromA.parent.content.cut($fromA.parentOffset, change.endA - $fromA.start())))) {
        tr = view.state.tr;
        if (markChange.type == "add")
          tr.addMark(chFrom, chTo, markChange.mark);
        else
          tr.removeMark(chFrom, chTo, markChange.mark);
      } else if ($from.parent.child($from.index()).isText && $from.index() == $to.index() - ($to.textOffset ? 0 : 1)) {
        let text = $from.parent.textBetween($from.parentOffset, $to.parentOffset);
        if (view.someProp("handleTextInput", (f) => f(view, chFrom, chTo, text)))
          return;
        tr = view.state.tr.insertText(text, chFrom, chTo);
      }
    }
    if (!tr)
      tr = view.state.tr.replace(chFrom, chTo, parse.doc.slice(change.start - parse.from, change.endB - parse.from));
    if (parse.sel) {
      let sel2 = resolveSelection(view, tr.doc, parse.sel);
      if (sel2 && !(chrome && android && view.composing && sel2.empty && (change.start != change.endB || view.input.lastAndroidDelete < Date.now() - 100) && (sel2.head == chFrom || sel2.head == tr.mapping.map(chTo) - 1) || ie && sel2.empty && sel2.head == chFrom))
        tr.setSelection(sel2);
    }
    if (storedMarks)
      tr.ensureMarks(storedMarks);
    view.dispatch(tr.scrollIntoView());
  }
  function resolveSelection(view, doc4, parsedSel) {
    if (Math.max(parsedSel.anchor, parsedSel.head) > doc4.content.size)
      return null;
    return selectionBetween(view, doc4.resolve(parsedSel.anchor), doc4.resolve(parsedSel.head));
  }
  function isMarkChange(cur, prev) {
    let curMarks = cur.firstChild.marks, prevMarks = prev.firstChild.marks;
    let added = curMarks, removed = prevMarks, type, mark, update;
    for (let i = 0; i < prevMarks.length; i++)
      added = prevMarks[i].removeFromSet(added);
    for (let i = 0; i < curMarks.length; i++)
      removed = curMarks[i].removeFromSet(removed);
    if (added.length == 1 && removed.length == 0) {
      mark = added[0];
      type = "add";
      update = (node) => node.mark(mark.addToSet(node.marks));
    } else if (added.length == 0 && removed.length == 1) {
      mark = removed[0];
      type = "remove";
      update = (node) => node.mark(mark.removeFromSet(node.marks));
    } else {
      return null;
    }
    let updated = [];
    for (let i = 0; i < prev.childCount; i++)
      updated.push(update(prev.child(i)));
    if (Fragment.from(updated).eq(cur))
      return { mark, type };
  }
  function looksLikeJoin(old, start, end, $newStart, $newEnd) {
    if (!$newStart.parent.isTextblock || end - start <= $newEnd.pos - $newStart.pos || skipClosingAndOpening($newStart, true, false) < $newEnd.pos)
      return false;
    let $start = old.resolve(start);
    if ($start.parentOffset < $start.parent.content.size || !$start.parent.isTextblock)
      return false;
    let $next = old.resolve(skipClosingAndOpening($start, true, true));
    if (!$next.parent.isTextblock || $next.pos > end || skipClosingAndOpening($next, true, false) < end)
      return false;
    return $newStart.parent.content.cut($newStart.parentOffset).eq($next.parent.content);
  }
  function skipClosingAndOpening($pos, fromEnd, mayOpen) {
    let depth = $pos.depth, end = fromEnd ? $pos.end() : $pos.pos;
    while (depth > 0 && (fromEnd || $pos.indexAfter(depth) == $pos.node(depth).childCount)) {
      depth--;
      end++;
      fromEnd = false;
    }
    if (mayOpen) {
      let next = $pos.node(depth).maybeChild($pos.indexAfter(depth));
      while (next && !next.isLeaf) {
        next = next.firstChild;
        end++;
      }
    }
    return end;
  }
  function findDiff(a, b, pos, preferredPos, preferredSide) {
    let start = a.findDiffStart(b, pos);
    if (start == null)
      return null;
    let { a: endA, b: endB } = a.findDiffEnd(b, pos + a.size, pos + b.size);
    if (preferredSide == "end") {
      let adjust = Math.max(0, start - Math.min(endA, endB));
      preferredPos -= endA + adjust - start;
    }
    if (endA < start && a.size < b.size) {
      let move = preferredPos <= start && preferredPos >= endA ? start - preferredPos : 0;
      start -= move;
      endB = start + (endB - endA);
      endA = start;
    } else if (endB < start) {
      let move = preferredPos <= start && preferredPos >= endB ? start - preferredPos : 0;
      start -= move;
      endA = start + (endA - endB);
      endB = start;
    }
    return { start, endA, endB };
  }
  function computeDocDeco(view) {
    let attrs = /* @__PURE__ */ Object.create(null);
    attrs.class = "ProseMirror";
    attrs.contenteditable = String(view.editable);
    attrs.translate = "no";
    view.someProp("attributes", (value) => {
      if (typeof value == "function")
        value = value(view.state);
      if (value)
        for (let attr in value) {
          if (attr == "class")
            attrs.class += " " + value[attr];
          if (attr == "style") {
            attrs.style = (attrs.style ? attrs.style + ";" : "") + value[attr];
          } else if (!attrs[attr] && attr != "contenteditable" && attr != "nodeName")
            attrs[attr] = String(value[attr]);
        }
    });
    return [Decoration.node(0, view.state.doc.content.size, attrs)];
  }
  function updateCursorWrapper(view) {
    if (view.markCursor) {
      let dom = document.createElement("img");
      dom.className = "ProseMirror-separator";
      dom.setAttribute("mark-placeholder", "true");
      dom.setAttribute("alt", "");
      view.cursorWrapper = { dom, deco: Decoration.widget(view.state.selection.head, dom, { raw: true, marks: view.markCursor }) };
    } else {
      view.cursorWrapper = null;
    }
  }
  function getEditable(view) {
    return !view.someProp("editable", (value) => value(view.state) === false);
  }
  function selectionContextChanged(sel1, sel2) {
    let depth = Math.min(sel1.$anchor.sharedDepth(sel1.head), sel2.$anchor.sharedDepth(sel2.head));
    return sel1.$anchor.start(depth) != sel2.$anchor.start(depth);
  }
  function buildNodeViews(view) {
    let result = /* @__PURE__ */ Object.create(null);
    function add(obj) {
      for (let prop in obj)
        if (!Object.prototype.hasOwnProperty.call(result, prop))
          result[prop] = obj[prop];
    }
    view.someProp("nodeViews", add);
    view.someProp("markViews", add);
    return result;
  }
  function changedNodeViews(a, b) {
    let nA = 0, nB = 0;
    for (let prop in a) {
      if (a[prop] != b[prop])
        return true;
      nA++;
    }
    for (let _ in b)
      nB++;
    return nA != nB;
  }
  function checkStateComponent(plugin) {
    if (plugin.spec.state || plugin.spec.filterTransaction || plugin.spec.appendTransaction)
      throw new RangeError("Plugins passed directly to the view must not have a state component");
  }
  var nav, doc3, agent, ie_edge, ie_upto10, ie_11up, ie, ie_version, gecko, _chrome, chrome, chrome_version, safari, ios, mac, android, webkit, webkit_version, domIndex, parentNode, reusedRange, textRange, isEquivalentPosition, atomElements, selectionCollapsed, preventScrollSupported, BIDI, maybeRTL, cachedState, cachedDir, cachedResult, NOT_DIRTY, CHILD_DIRTY, CONTENT_DIRTY, NODE_DIRTY, ViewDesc, WidgetViewDesc, CompositionViewDesc, MarkViewDesc, NodeViewDesc, TextViewDesc, TrailingHackViewDesc, CustomNodeViewDesc, OuterDecoLevel, noDeco, ViewTreeUpdater, brokenSelectBetweenUneditable, inlineParents, wrapMap, _detachedDoc, handlers, editHandlers, InputState, selectNodeModifier, MouseDown, timeoutComposition, brokenClipboardAPI, Dragging, dragCopyModifier, WidgetType, InlineType, NodeType2, Decoration, none, noSpec, DecorationSet, empty, DecorationGroup, observeOptions, useCharData, SelectionState, DOMObserver, cssChecked, EditorView;
  var init_dist5 = __esm({
    "node_modules/prosemirror-view/dist/index.js"() {
      init_dist4();
      init_dist2();
      init_dist3();
      nav = typeof navigator != "undefined" ? navigator : null;
      doc3 = typeof document != "undefined" ? document : null;
      agent = nav && nav.userAgent || "";
      ie_edge = /Edge\/(\d+)/.exec(agent);
      ie_upto10 = /MSIE \d/.exec(agent);
      ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(agent);
      ie = !!(ie_upto10 || ie_11up || ie_edge);
      ie_version = ie_upto10 ? document.documentMode : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : 0;
      gecko = !ie && /gecko\/(\d+)/i.test(agent);
      gecko && +(/Firefox\/(\d+)/.exec(agent) || [0, 0])[1];
      _chrome = !ie && /Chrome\/(\d+)/.exec(agent);
      chrome = !!_chrome;
      chrome_version = _chrome ? +_chrome[1] : 0;
      safari = !ie && !!nav && /Apple Computer/.test(nav.vendor);
      ios = safari && (/Mobile\/\w+/.test(agent) || !!nav && nav.maxTouchPoints > 2);
      mac = ios || (nav ? /Mac/.test(nav.platform) : false);
      android = /Android \d/.test(agent);
      webkit = !!doc3 && "webkitFontSmoothing" in doc3.documentElement.style;
      webkit_version = webkit ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
      domIndex = function(node) {
        for (var index = 0; ; index++) {
          node = node.previousSibling;
          if (!node)
            return index;
        }
      };
      parentNode = function(node) {
        let parent = node.assignedSlot || node.parentNode;
        return parent && parent.nodeType == 11 ? parent.host : parent;
      };
      reusedRange = null;
      textRange = function(node, from2, to) {
        let range2 = reusedRange || (reusedRange = document.createRange());
        range2.setEnd(node, to == null ? node.nodeValue.length : to);
        range2.setStart(node, from2 || 0);
        return range2;
      };
      isEquivalentPosition = function(node, off, targetNode, targetOff) {
        return targetNode && (scanFor(node, off, targetNode, targetOff, -1) || scanFor(node, off, targetNode, targetOff, 1));
      };
      atomElements = /^(img|br|input|textarea|hr)$/i;
      selectionCollapsed = function(domSel) {
        let collapsed = domSel.isCollapsed;
        if (collapsed && chrome && domSel.rangeCount && !domSel.getRangeAt(0).collapsed)
          collapsed = false;
        return collapsed;
      };
      preventScrollSupported = null;
      BIDI = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
      maybeRTL = /[\u0590-\u08ac]/;
      cachedState = null;
      cachedDir = null;
      cachedResult = false;
      NOT_DIRTY = 0;
      CHILD_DIRTY = 1;
      CONTENT_DIRTY = 2;
      NODE_DIRTY = 3;
      ViewDesc = class {
        constructor(parent, children, dom, contentDOM) {
          this.parent = parent;
          this.children = children;
          this.dom = dom;
          this.contentDOM = contentDOM;
          this.dirty = NOT_DIRTY;
          dom.pmViewDesc = this;
        }
        matchesWidget(widget) {
          return false;
        }
        matchesMark(mark) {
          return false;
        }
        matchesNode(node, outerDeco, innerDeco) {
          return false;
        }
        matchesHack(nodeName) {
          return false;
        }
        parseRule() {
          return null;
        }
        stopEvent(event) {
          return false;
        }
        get size() {
          let size = 0;
          for (let i = 0; i < this.children.length; i++)
            size += this.children[i].size;
          return size;
        }
        get border() {
          return 0;
        }
        destroy() {
          this.parent = void 0;
          if (this.dom.pmViewDesc == this)
            this.dom.pmViewDesc = void 0;
          for (let i = 0; i < this.children.length; i++)
            this.children[i].destroy();
        }
        posBeforeChild(child) {
          for (let i = 0, pos = this.posAtStart; ; i++) {
            let cur = this.children[i];
            if (cur == child)
              return pos;
            pos += cur.size;
          }
        }
        get posBefore() {
          return this.parent.posBeforeChild(this);
        }
        get posAtStart() {
          return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
        }
        get posAfter() {
          return this.posBefore + this.size;
        }
        get posAtEnd() {
          return this.posAtStart + this.size - 2 * this.border;
        }
        localPosFromDOM(dom, offset, bias) {
          if (this.contentDOM && this.contentDOM.contains(dom.nodeType == 1 ? dom : dom.parentNode)) {
            if (bias < 0) {
              let domBefore, desc;
              if (dom == this.contentDOM) {
                domBefore = dom.childNodes[offset - 1];
              } else {
                while (dom.parentNode != this.contentDOM)
                  dom = dom.parentNode;
                domBefore = dom.previousSibling;
              }
              while (domBefore && !((desc = domBefore.pmViewDesc) && desc.parent == this))
                domBefore = domBefore.previousSibling;
              return domBefore ? this.posBeforeChild(desc) + desc.size : this.posAtStart;
            } else {
              let domAfter, desc;
              if (dom == this.contentDOM) {
                domAfter = dom.childNodes[offset];
              } else {
                while (dom.parentNode != this.contentDOM)
                  dom = dom.parentNode;
                domAfter = dom.nextSibling;
              }
              while (domAfter && !((desc = domAfter.pmViewDesc) && desc.parent == this))
                domAfter = domAfter.nextSibling;
              return domAfter ? this.posBeforeChild(desc) : this.posAtEnd;
            }
          }
          let atEnd;
          if (dom == this.dom && this.contentDOM) {
            atEnd = offset > domIndex(this.contentDOM);
          } else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) {
            atEnd = dom.compareDocumentPosition(this.contentDOM) & 2;
          } else if (this.dom.firstChild) {
            if (offset == 0)
              for (let search = dom; ; search = search.parentNode) {
                if (search == this.dom) {
                  atEnd = false;
                  break;
                }
                if (search.previousSibling)
                  break;
              }
            if (atEnd == null && offset == dom.childNodes.length)
              for (let search = dom; ; search = search.parentNode) {
                if (search == this.dom) {
                  atEnd = true;
                  break;
                }
                if (search.nextSibling)
                  break;
              }
          }
          return (atEnd == null ? bias > 0 : atEnd) ? this.posAtEnd : this.posAtStart;
        }
        nearestDesc(dom, onlyNodes = false) {
          for (let first2 = true, cur = dom; cur; cur = cur.parentNode) {
            let desc = this.getDesc(cur), nodeDOM;
            if (desc && (!onlyNodes || desc.node)) {
              if (first2 && (nodeDOM = desc.nodeDOM) && !(nodeDOM.nodeType == 1 ? nodeDOM.contains(dom.nodeType == 1 ? dom : dom.parentNode) : nodeDOM == dom))
                first2 = false;
              else
                return desc;
            }
          }
        }
        getDesc(dom) {
          let desc = dom.pmViewDesc;
          for (let cur = desc; cur; cur = cur.parent)
            if (cur == this)
              return desc;
        }
        posFromDOM(dom, offset, bias) {
          for (let scan = dom; scan; scan = scan.parentNode) {
            let desc = this.getDesc(scan);
            if (desc)
              return desc.localPosFromDOM(dom, offset, bias);
          }
          return -1;
        }
        descAt(pos) {
          for (let i = 0, offset = 0; i < this.children.length; i++) {
            let child = this.children[i], end = offset + child.size;
            if (offset == pos && end != offset) {
              while (!child.border && child.children.length)
                child = child.children[0];
              return child;
            }
            if (pos < end)
              return child.descAt(pos - offset - child.border);
            offset = end;
          }
        }
        domFromPos(pos, side) {
          if (!this.contentDOM)
            return { node: this.dom, offset: 0 };
          let i = 0, offset = 0;
          for (let curPos = 0; i < this.children.length; i++) {
            let child = this.children[i], end = curPos + child.size;
            if (end > pos || child instanceof TrailingHackViewDesc) {
              offset = pos - curPos;
              break;
            }
            curPos = end;
          }
          if (offset)
            return this.children[i].domFromPos(offset - this.children[i].border, side);
          for (let prev; i && !(prev = this.children[i - 1]).size && prev instanceof WidgetViewDesc && prev.side >= 0; i--) {
          }
          if (side <= 0) {
            let prev, enter2 = true;
            for (; ; i--, enter2 = false) {
              prev = i ? this.children[i - 1] : null;
              if (!prev || prev.dom.parentNode == this.contentDOM)
                break;
            }
            if (prev && side && enter2 && !prev.border && !prev.domAtom)
              return prev.domFromPos(prev.size, side);
            return { node: this.contentDOM, offset: prev ? domIndex(prev.dom) + 1 : 0 };
          } else {
            let next, enter2 = true;
            for (; ; i++, enter2 = false) {
              next = i < this.children.length ? this.children[i] : null;
              if (!next || next.dom.parentNode == this.contentDOM)
                break;
            }
            if (next && enter2 && !next.border && !next.domAtom)
              return next.domFromPos(0, side);
            return { node: this.contentDOM, offset: next ? domIndex(next.dom) : this.contentDOM.childNodes.length };
          }
        }
        parseRange(from2, to, base2 = 0) {
          if (this.children.length == 0)
            return { node: this.contentDOM, from: from2, to, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
          let fromOffset = -1, toOffset = -1;
          for (let offset = base2, i = 0; ; i++) {
            let child = this.children[i], end = offset + child.size;
            if (fromOffset == -1 && from2 <= end) {
              let childBase = offset + child.border;
              if (from2 >= childBase && to <= end - child.border && child.node && child.contentDOM && this.contentDOM.contains(child.contentDOM))
                return child.parseRange(from2, to, childBase);
              from2 = offset;
              for (let j = i; j > 0; j--) {
                let prev = this.children[j - 1];
                if (prev.size && prev.dom.parentNode == this.contentDOM && !prev.emptyChildAt(1)) {
                  fromOffset = domIndex(prev.dom) + 1;
                  break;
                }
                from2 -= prev.size;
              }
              if (fromOffset == -1)
                fromOffset = 0;
            }
            if (fromOffset > -1 && (end > to || i == this.children.length - 1)) {
              to = end;
              for (let j = i + 1; j < this.children.length; j++) {
                let next = this.children[j];
                if (next.size && next.dom.parentNode == this.contentDOM && !next.emptyChildAt(-1)) {
                  toOffset = domIndex(next.dom);
                  break;
                }
                to += next.size;
              }
              if (toOffset == -1)
                toOffset = this.contentDOM.childNodes.length;
              break;
            }
            offset = end;
          }
          return { node: this.contentDOM, from: from2, to, fromOffset, toOffset };
        }
        emptyChildAt(side) {
          if (this.border || !this.contentDOM || !this.children.length)
            return false;
          let child = this.children[side < 0 ? 0 : this.children.length - 1];
          return child.size == 0 || child.emptyChildAt(side);
        }
        domAfterPos(pos) {
          let { node, offset } = this.domFromPos(pos, 0);
          if (node.nodeType != 1 || offset == node.childNodes.length)
            throw new RangeError("No node after pos " + pos);
          return node.childNodes[offset];
        }
        setSelection(anchor, head, root, force = false) {
          let from2 = Math.min(anchor, head), to = Math.max(anchor, head);
          for (let i = 0, offset = 0; i < this.children.length; i++) {
            let child = this.children[i], end = offset + child.size;
            if (from2 > offset && to < end)
              return child.setSelection(anchor - offset - child.border, head - offset - child.border, root, force);
            offset = end;
          }
          let anchorDOM = this.domFromPos(anchor, anchor ? -1 : 1);
          let headDOM = head == anchor ? anchorDOM : this.domFromPos(head, head ? -1 : 1);
          let domSel = root.getSelection();
          let brKludge = false;
          if ((gecko || safari) && anchor == head) {
            let { node, offset } = anchorDOM;
            if (node.nodeType == 3) {
              brKludge = !!(offset && node.nodeValue[offset - 1] == "\n");
              if (brKludge && offset == node.nodeValue.length) {
                for (let scan = node, after; scan; scan = scan.parentNode) {
                  if (after = scan.nextSibling) {
                    if (after.nodeName == "BR")
                      anchorDOM = headDOM = { node: after.parentNode, offset: domIndex(after) + 1 };
                    break;
                  }
                  let desc = scan.pmViewDesc;
                  if (desc && desc.node && desc.node.isBlock)
                    break;
                }
              }
            } else {
              let prev = node.childNodes[offset - 1];
              brKludge = prev && (prev.nodeName == "BR" || prev.contentEditable == "false");
            }
          }
          if (gecko && domSel.focusNode && domSel.focusNode != headDOM.node && domSel.focusNode.nodeType == 1) {
            let after = domSel.focusNode.childNodes[domSel.focusOffset];
            if (after && after.contentEditable == "false")
              force = true;
          }
          if (!(force || brKludge && safari) && isEquivalentPosition(anchorDOM.node, anchorDOM.offset, domSel.anchorNode, domSel.anchorOffset) && isEquivalentPosition(headDOM.node, headDOM.offset, domSel.focusNode, domSel.focusOffset))
            return;
          let domSelExtended = false;
          if ((domSel.extend || anchor == head) && !brKludge) {
            domSel.collapse(anchorDOM.node, anchorDOM.offset);
            try {
              if (anchor != head)
                domSel.extend(headDOM.node, headDOM.offset);
              domSelExtended = true;
            } catch (err) {
              if (!(err instanceof DOMException))
                throw err;
            }
          }
          if (!domSelExtended) {
            if (anchor > head) {
              let tmp = anchorDOM;
              anchorDOM = headDOM;
              headDOM = tmp;
            }
            let range2 = document.createRange();
            range2.setEnd(headDOM.node, headDOM.offset);
            range2.setStart(anchorDOM.node, anchorDOM.offset);
            domSel.removeAllRanges();
            domSel.addRange(range2);
          }
        }
        ignoreMutation(mutation) {
          return !this.contentDOM && mutation.type != "selection";
        }
        get contentLost() {
          return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
        }
        markDirty(from2, to) {
          for (let offset = 0, i = 0; i < this.children.length; i++) {
            let child = this.children[i], end = offset + child.size;
            if (offset == end ? from2 <= end && to >= offset : from2 < end && to > offset) {
              let startInside = offset + child.border, endInside = end - child.border;
              if (from2 >= startInside && to <= endInside) {
                this.dirty = from2 == offset || to == end ? CONTENT_DIRTY : CHILD_DIRTY;
                if (from2 == startInside && to == endInside && (child.contentLost || child.dom.parentNode != this.contentDOM))
                  child.dirty = NODE_DIRTY;
                else
                  child.markDirty(from2 - startInside, to - startInside);
                return;
              } else {
                child.dirty = child.dom == child.contentDOM && child.dom.parentNode == this.contentDOM && !child.children.length ? CONTENT_DIRTY : NODE_DIRTY;
              }
            }
            offset = end;
          }
          this.dirty = CONTENT_DIRTY;
        }
        markParentsDirty() {
          let level = 1;
          for (let node = this.parent; node; node = node.parent, level++) {
            let dirty = level == 1 ? CONTENT_DIRTY : CHILD_DIRTY;
            if (node.dirty < dirty)
              node.dirty = dirty;
          }
        }
        get domAtom() {
          return false;
        }
        get ignoreForCoords() {
          return false;
        }
      };
      WidgetViewDesc = class extends ViewDesc {
        constructor(parent, widget, view, pos) {
          let self2, dom = widget.type.toDOM;
          if (typeof dom == "function")
            dom = dom(view, () => {
              if (!self2)
                return pos;
              if (self2.parent)
                return self2.parent.posBeforeChild(self2);
            });
          if (!widget.type.spec.raw) {
            if (dom.nodeType != 1) {
              let wrap2 = document.createElement("span");
              wrap2.appendChild(dom);
              dom = wrap2;
            }
            dom.contentEditable = "false";
            dom.classList.add("ProseMirror-widget");
          }
          super(parent, [], dom, null);
          this.widget = widget;
          this.widget = widget;
          self2 = this;
        }
        matchesWidget(widget) {
          return this.dirty == NOT_DIRTY && widget.type.eq(this.widget.type);
        }
        parseRule() {
          return { ignore: true };
        }
        stopEvent(event) {
          let stop = this.widget.spec.stopEvent;
          return stop ? stop(event) : false;
        }
        ignoreMutation(mutation) {
          return mutation.type != "selection" || this.widget.spec.ignoreSelection;
        }
        destroy() {
          this.widget.type.destroy(this.dom);
          super.destroy();
        }
        get domAtom() {
          return true;
        }
        get side() {
          return this.widget.type.side;
        }
      };
      CompositionViewDesc = class extends ViewDesc {
        constructor(parent, dom, textDOM, text) {
          super(parent, [], dom, null);
          this.textDOM = textDOM;
          this.text = text;
        }
        get size() {
          return this.text.length;
        }
        localPosFromDOM(dom, offset) {
          if (dom != this.textDOM)
            return this.posAtStart + (offset ? this.size : 0);
          return this.posAtStart + offset;
        }
        domFromPos(pos) {
          return { node: this.textDOM, offset: pos };
        }
        ignoreMutation(mut) {
          return mut.type === "characterData" && mut.target.nodeValue == mut.oldValue;
        }
      };
      MarkViewDesc = class extends ViewDesc {
        constructor(parent, mark, dom, contentDOM) {
          super(parent, [], dom, contentDOM);
          this.mark = mark;
        }
        static create(parent, mark, inline, view) {
          let custom = view.nodeViews[mark.type.name];
          let spec = custom && custom(mark, view, inline);
          if (!spec || !spec.dom)
            spec = DOMSerializer.renderSpec(document, mark.type.spec.toDOM(mark, inline));
          return new MarkViewDesc(parent, mark, spec.dom, spec.contentDOM || spec.dom);
        }
        parseRule() {
          if (this.dirty & NODE_DIRTY || this.mark.type.spec.reparseInView)
            return null;
          return { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM || void 0 };
        }
        matchesMark(mark) {
          return this.dirty != NODE_DIRTY && this.mark.eq(mark);
        }
        markDirty(from2, to) {
          super.markDirty(from2, to);
          if (this.dirty != NOT_DIRTY) {
            let parent = this.parent;
            while (!parent.node)
              parent = parent.parent;
            if (parent.dirty < this.dirty)
              parent.dirty = this.dirty;
            this.dirty = NOT_DIRTY;
          }
        }
        slice(from2, to, view) {
          let copy2 = MarkViewDesc.create(this.parent, this.mark, true, view);
          let nodes = this.children, size = this.size;
          if (to < size)
            nodes = replaceNodes(nodes, to, size, view);
          if (from2 > 0)
            nodes = replaceNodes(nodes, 0, from2, view);
          for (let i = 0; i < nodes.length; i++)
            nodes[i].parent = copy2;
          copy2.children = nodes;
          return copy2;
        }
      };
      NodeViewDesc = class extends ViewDesc {
        constructor(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view, pos) {
          super(parent, [], dom, contentDOM);
          this.node = node;
          this.outerDeco = outerDeco;
          this.innerDeco = innerDeco;
          this.nodeDOM = nodeDOM;
          if (contentDOM)
            this.updateChildren(view, pos);
        }
        static create(parent, node, outerDeco, innerDeco, view, pos) {
          let custom = view.nodeViews[node.type.name], descObj;
          let spec = custom && custom(node, view, () => {
            if (!descObj)
              return pos;
            if (descObj.parent)
              return descObj.parent.posBeforeChild(descObj);
          }, outerDeco, innerDeco);
          let dom = spec && spec.dom, contentDOM = spec && spec.contentDOM;
          if (node.isText) {
            if (!dom)
              dom = document.createTextNode(node.text);
            else if (dom.nodeType != 3)
              throw new RangeError("Text must be rendered as a DOM text node");
          } else if (!dom) {
            ({ dom, contentDOM } = DOMSerializer.renderSpec(document, node.type.spec.toDOM(node)));
          }
          if (!contentDOM && !node.isText && dom.nodeName != "BR") {
            if (!dom.hasAttribute("contenteditable"))
              dom.contentEditable = "false";
            if (node.type.spec.draggable)
              dom.draggable = true;
          }
          let nodeDOM = dom;
          dom = applyOuterDeco(dom, outerDeco, node);
          if (spec)
            return descObj = new CustomNodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM || null, nodeDOM, spec, view, pos + 1);
          else if (node.isText)
            return new TextViewDesc(parent, node, outerDeco, innerDeco, dom, nodeDOM, view);
          else
            return new NodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM || null, nodeDOM, view, pos + 1);
        }
        parseRule() {
          if (this.node.type.spec.reparseInView)
            return null;
          let rule = { node: this.node.type.name, attrs: this.node.attrs };
          if (this.node.type.whitespace == "pre")
            rule.preserveWhitespace = "full";
          if (!this.contentDOM) {
            rule.getContent = () => this.node.content;
          } else if (!this.contentLost) {
            rule.contentElement = this.contentDOM;
          } else {
            for (let i = this.children.length - 1; i >= 0; i--) {
              let child = this.children[i];
              if (this.dom.contains(child.dom.parentNode)) {
                rule.contentElement = child.dom.parentNode;
                break;
              }
            }
            if (!rule.contentElement)
              rule.getContent = () => Fragment.empty;
          }
          return rule;
        }
        matchesNode(node, outerDeco, innerDeco) {
          return this.dirty == NOT_DIRTY && node.eq(this.node) && sameOuterDeco(outerDeco, this.outerDeco) && innerDeco.eq(this.innerDeco);
        }
        get size() {
          return this.node.nodeSize;
        }
        get border() {
          return this.node.isLeaf ? 0 : 1;
        }
        updateChildren(view, pos) {
          let inline = this.node.inlineContent, off = pos;
          let composition = view.composing ? this.localCompositionInfo(view, pos) : null;
          let localComposition = composition && composition.pos > -1 ? composition : null;
          let compositionInChild = composition && composition.pos < 0;
          let updater = new ViewTreeUpdater(this, localComposition && localComposition.node);
          iterDeco(this.node, this.innerDeco, (widget, i, insideNode) => {
            if (widget.spec.marks)
              updater.syncToMarks(widget.spec.marks, inline, view);
            else if (widget.type.side >= 0 && !insideNode)
              updater.syncToMarks(i == this.node.childCount ? Mark.none : this.node.child(i).marks, inline, view);
            updater.placeWidget(widget, view, off);
          }, (child, outerDeco, innerDeco, i) => {
            updater.syncToMarks(child.marks, inline, view);
            let compIndex;
            if (updater.findNodeMatch(child, outerDeco, innerDeco, i))
              ;
            else if (compositionInChild && view.state.selection.from > off && view.state.selection.to < off + child.nodeSize && (compIndex = updater.findIndexWithChild(composition.node)) > -1 && updater.updateNodeAt(child, outerDeco, innerDeco, compIndex, view))
              ;
            else if (updater.updateNextNode(child, outerDeco, innerDeco, view, i))
              ;
            else {
              updater.addNode(child, outerDeco, innerDeco, view, off);
            }
            off += child.nodeSize;
          });
          updater.syncToMarks([], inline, view);
          if (this.node.isTextblock)
            updater.addTextblockHacks();
          updater.destroyRest();
          if (updater.changed || this.dirty == CONTENT_DIRTY) {
            if (localComposition)
              this.protectLocalComposition(view, localComposition);
            renderDescs(this.contentDOM, this.children, view);
            if (ios)
              iosHacks(this.dom);
          }
        }
        localCompositionInfo(view, pos) {
          let { from: from2, to } = view.state.selection;
          if (!(view.state.selection instanceof TextSelection) || from2 < pos || to > pos + this.node.content.size)
            return null;
          let sel = view.domSelection();
          let textNode = nearbyTextNode(sel.focusNode, sel.focusOffset);
          if (!textNode || !this.dom.contains(textNode.parentNode))
            return null;
          if (this.node.inlineContent) {
            let text = textNode.nodeValue;
            let textPos = findTextInFragment(this.node.content, text, from2 - pos, to - pos);
            return textPos < 0 ? null : { node: textNode, pos: textPos, text };
          } else {
            return { node: textNode, pos: -1, text: "" };
          }
        }
        protectLocalComposition(view, { node, pos, text }) {
          if (this.getDesc(node))
            return;
          let topNode = node;
          for (; ; topNode = topNode.parentNode) {
            if (topNode.parentNode == this.contentDOM)
              break;
            while (topNode.previousSibling)
              topNode.parentNode.removeChild(topNode.previousSibling);
            while (topNode.nextSibling)
              topNode.parentNode.removeChild(topNode.nextSibling);
            if (topNode.pmViewDesc)
              topNode.pmViewDesc = void 0;
          }
          let desc = new CompositionViewDesc(this, topNode, node, text);
          view.input.compositionNodes.push(desc);
          this.children = replaceNodes(this.children, pos, pos + text.length, view, desc);
        }
        update(node, outerDeco, innerDeco, view) {
          if (this.dirty == NODE_DIRTY || !node.sameMarkup(this.node))
            return false;
          this.updateInner(node, outerDeco, innerDeco, view);
          return true;
        }
        updateInner(node, outerDeco, innerDeco, view) {
          this.updateOuterDeco(outerDeco);
          this.node = node;
          this.innerDeco = innerDeco;
          if (this.contentDOM)
            this.updateChildren(view, this.posAtStart);
          this.dirty = NOT_DIRTY;
        }
        updateOuterDeco(outerDeco) {
          if (sameOuterDeco(outerDeco, this.outerDeco))
            return;
          let needsWrap = this.nodeDOM.nodeType != 1;
          let oldDOM = this.dom;
          this.dom = patchOuterDeco(this.dom, this.nodeDOM, computeOuterDeco(this.outerDeco, this.node, needsWrap), computeOuterDeco(outerDeco, this.node, needsWrap));
          if (this.dom != oldDOM) {
            oldDOM.pmViewDesc = void 0;
            this.dom.pmViewDesc = this;
          }
          this.outerDeco = outerDeco;
        }
        selectNode() {
          if (this.nodeDOM.nodeType == 1)
            this.nodeDOM.classList.add("ProseMirror-selectednode");
          if (this.contentDOM || !this.node.type.spec.draggable)
            this.dom.draggable = true;
        }
        deselectNode() {
          if (this.nodeDOM.nodeType == 1)
            this.nodeDOM.classList.remove("ProseMirror-selectednode");
          if (this.contentDOM || !this.node.type.spec.draggable)
            this.dom.removeAttribute("draggable");
        }
        get domAtom() {
          return this.node.isAtom;
        }
      };
      TextViewDesc = class extends NodeViewDesc {
        constructor(parent, node, outerDeco, innerDeco, dom, nodeDOM, view) {
          super(parent, node, outerDeco, innerDeco, dom, null, nodeDOM, view, 0);
        }
        parseRule() {
          let skip = this.nodeDOM.parentNode;
          while (skip && skip != this.dom && !skip.pmIsDeco)
            skip = skip.parentNode;
          return { skip: skip || true };
        }
        update(node, outerDeco, innerDeco, view) {
          if (this.dirty == NODE_DIRTY || this.dirty != NOT_DIRTY && !this.inParent() || !node.sameMarkup(this.node))
            return false;
          this.updateOuterDeco(outerDeco);
          if ((this.dirty != NOT_DIRTY || node.text != this.node.text) && node.text != this.nodeDOM.nodeValue) {
            this.nodeDOM.nodeValue = node.text;
            if (view.trackWrites == this.nodeDOM)
              view.trackWrites = null;
          }
          this.node = node;
          this.dirty = NOT_DIRTY;
          return true;
        }
        inParent() {
          let parentDOM = this.parent.contentDOM;
          for (let n = this.nodeDOM; n; n = n.parentNode)
            if (n == parentDOM)
              return true;
          return false;
        }
        domFromPos(pos) {
          return { node: this.nodeDOM, offset: pos };
        }
        localPosFromDOM(dom, offset, bias) {
          if (dom == this.nodeDOM)
            return this.posAtStart + Math.min(offset, this.node.text.length);
          return super.localPosFromDOM(dom, offset, bias);
        }
        ignoreMutation(mutation) {
          return mutation.type != "characterData" && mutation.type != "selection";
        }
        slice(from2, to, view) {
          let node = this.node.cut(from2, to), dom = document.createTextNode(node.text);
          return new TextViewDesc(this.parent, node, this.outerDeco, this.innerDeco, dom, dom, view);
        }
        markDirty(from2, to) {
          super.markDirty(from2, to);
          if (this.dom != this.nodeDOM && (from2 == 0 || to == this.nodeDOM.nodeValue.length))
            this.dirty = NODE_DIRTY;
        }
        get domAtom() {
          return false;
        }
      };
      TrailingHackViewDesc = class extends ViewDesc {
        parseRule() {
          return { ignore: true };
        }
        matchesHack(nodeName) {
          return this.dirty == NOT_DIRTY && this.dom.nodeName == nodeName;
        }
        get domAtom() {
          return true;
        }
        get ignoreForCoords() {
          return this.dom.nodeName == "IMG";
        }
      };
      CustomNodeViewDesc = class extends NodeViewDesc {
        constructor(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, spec, view, pos) {
          super(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view, pos);
          this.spec = spec;
        }
        update(node, outerDeco, innerDeco, view) {
          if (this.dirty == NODE_DIRTY)
            return false;
          if (this.spec.update) {
            let result = this.spec.update(node, outerDeco, innerDeco);
            if (result)
              this.updateInner(node, outerDeco, innerDeco, view);
            return result;
          } else if (!this.contentDOM && !node.isLeaf) {
            return false;
          } else {
            return super.update(node, outerDeco, innerDeco, view);
          }
        }
        selectNode() {
          this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
        }
        deselectNode() {
          this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
        }
        setSelection(anchor, head, root, force) {
          this.spec.setSelection ? this.spec.setSelection(anchor, head, root) : super.setSelection(anchor, head, root, force);
        }
        destroy() {
          if (this.spec.destroy)
            this.spec.destroy();
          super.destroy();
        }
        stopEvent(event) {
          return this.spec.stopEvent ? this.spec.stopEvent(event) : false;
        }
        ignoreMutation(mutation) {
          return this.spec.ignoreMutation ? this.spec.ignoreMutation(mutation) : super.ignoreMutation(mutation);
        }
      };
      OuterDecoLevel = function(nodeName) {
        if (nodeName)
          this.nodeName = nodeName;
      };
      OuterDecoLevel.prototype = /* @__PURE__ */ Object.create(null);
      noDeco = [new OuterDecoLevel()];
      ViewTreeUpdater = class {
        constructor(top, lock) {
          this.lock = lock;
          this.index = 0;
          this.stack = [];
          this.changed = false;
          this.top = top;
          this.preMatch = preMatch(top.node.content, top);
        }
        destroyBetween(start, end) {
          if (start == end)
            return;
          for (let i = start; i < end; i++)
            this.top.children[i].destroy();
          this.top.children.splice(start, end - start);
          this.changed = true;
        }
        destroyRest() {
          this.destroyBetween(this.index, this.top.children.length);
        }
        syncToMarks(marks, inline, view) {
          let keep = 0, depth = this.stack.length >> 1;
          let maxKeep = Math.min(depth, marks.length);
          while (keep < maxKeep && (keep == depth - 1 ? this.top : this.stack[keep + 1 << 1]).matchesMark(marks[keep]) && marks[keep].type.spec.spanning !== false)
            keep++;
          while (keep < depth) {
            this.destroyRest();
            this.top.dirty = NOT_DIRTY;
            this.index = this.stack.pop();
            this.top = this.stack.pop();
            depth--;
          }
          while (depth < marks.length) {
            this.stack.push(this.top, this.index + 1);
            let found2 = -1;
            for (let i = this.index; i < Math.min(this.index + 3, this.top.children.length); i++) {
              if (this.top.children[i].matchesMark(marks[depth])) {
                found2 = i;
                break;
              }
            }
            if (found2 > -1) {
              if (found2 > this.index) {
                this.changed = true;
                this.destroyBetween(this.index, found2);
              }
              this.top = this.top.children[this.index];
            } else {
              let markDesc = MarkViewDesc.create(this.top, marks[depth], inline, view);
              this.top.children.splice(this.index, 0, markDesc);
              this.top = markDesc;
              this.changed = true;
            }
            this.index = 0;
            depth++;
          }
        }
        findNodeMatch(node, outerDeco, innerDeco, index) {
          let found2 = -1, targetDesc;
          if (index >= this.preMatch.index && (targetDesc = this.preMatch.matches[index - this.preMatch.index]).parent == this.top && targetDesc.matchesNode(node, outerDeco, innerDeco)) {
            found2 = this.top.children.indexOf(targetDesc, this.index);
          } else {
            for (let i = this.index, e = Math.min(this.top.children.length, i + 5); i < e; i++) {
              let child = this.top.children[i];
              if (child.matchesNode(node, outerDeco, innerDeco) && !this.preMatch.matched.has(child)) {
                found2 = i;
                break;
              }
            }
          }
          if (found2 < 0)
            return false;
          this.destroyBetween(this.index, found2);
          this.index++;
          return true;
        }
        updateNodeAt(node, outerDeco, innerDeco, index, view) {
          let child = this.top.children[index];
          if (child.dirty == NODE_DIRTY && child.dom == child.contentDOM)
            child.dirty = CONTENT_DIRTY;
          if (!child.update(node, outerDeco, innerDeco, view))
            return false;
          this.destroyBetween(this.index, index);
          this.index = index + 1;
          return true;
        }
        findIndexWithChild(domNode) {
          for (; ; ) {
            let parent = domNode.parentNode;
            if (!parent)
              return -1;
            if (parent == this.top.contentDOM) {
              let desc = domNode.pmViewDesc;
              if (desc)
                for (let i = this.index; i < this.top.children.length; i++) {
                  if (this.top.children[i] == desc)
                    return i;
                }
              return -1;
            }
            domNode = parent;
          }
        }
        updateNextNode(node, outerDeco, innerDeco, view, index) {
          for (let i = this.index; i < this.top.children.length; i++) {
            let next = this.top.children[i];
            if (next instanceof NodeViewDesc) {
              let preMatch2 = this.preMatch.matched.get(next);
              if (preMatch2 != null && preMatch2 != index)
                return false;
              let nextDOM = next.dom;
              let locked = this.lock && (nextDOM == this.lock || nextDOM.nodeType == 1 && nextDOM.contains(this.lock.parentNode)) && !(node.isText && next.node && next.node.isText && next.nodeDOM.nodeValue == node.text && next.dirty != NODE_DIRTY && sameOuterDeco(outerDeco, next.outerDeco));
              if (!locked && next.update(node, outerDeco, innerDeco, view)) {
                this.destroyBetween(this.index, i);
                if (next.dom != nextDOM)
                  this.changed = true;
                this.index++;
                return true;
              }
              break;
            }
          }
          return false;
        }
        addNode(node, outerDeco, innerDeco, view, pos) {
          this.top.children.splice(this.index++, 0, NodeViewDesc.create(this.top, node, outerDeco, innerDeco, view, pos));
          this.changed = true;
        }
        placeWidget(widget, view, pos) {
          let next = this.index < this.top.children.length ? this.top.children[this.index] : null;
          if (next && next.matchesWidget(widget) && (widget == next.widget || !next.widget.type.toDOM.parentNode)) {
            this.index++;
          } else {
            let desc = new WidgetViewDesc(this.top, widget, view, pos);
            this.top.children.splice(this.index++, 0, desc);
            this.changed = true;
          }
        }
        addTextblockHacks() {
          let lastChild = this.top.children[this.index - 1], parent = this.top;
          while (lastChild instanceof MarkViewDesc) {
            parent = lastChild;
            lastChild = parent.children[parent.children.length - 1];
          }
          if (!lastChild || !(lastChild instanceof TextViewDesc) || /\n$/.test(lastChild.node.text)) {
            if ((safari || chrome) && lastChild && lastChild.dom.contentEditable == "false")
              this.addHackNode("IMG", parent);
            this.addHackNode("BR", this.top);
          }
        }
        addHackNode(nodeName, parent) {
          if (parent == this.top && this.index < parent.children.length && parent.children[this.index].matchesHack(nodeName)) {
            this.index++;
          } else {
            let dom = document.createElement(nodeName);
            if (nodeName == "IMG") {
              dom.className = "ProseMirror-separator";
              dom.alt = "";
            }
            if (nodeName == "BR")
              dom.className = "ProseMirror-trailingBreak";
            let hack = new TrailingHackViewDesc(this.top, [], dom, null);
            if (parent != this.top)
              parent.children.push(hack);
            else
              parent.children.splice(this.index++, 0, hack);
            this.changed = true;
          }
        }
      };
      brokenSelectBetweenUneditable = safari || chrome && chrome_version < 63;
      inlineParents = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
      wrapMap = {
        thead: ["table"],
        tbody: ["table"],
        tfoot: ["table"],
        caption: ["table"],
        colgroup: ["table"],
        col: ["table", "colgroup"],
        tr: ["table", "tbody"],
        td: ["table", "tbody", "tr"],
        th: ["table", "tbody", "tr"]
      };
      _detachedDoc = null;
      handlers = {};
      editHandlers = {};
      InputState = class {
        constructor() {
          this.shiftKey = false;
          this.mouseDown = null;
          this.lastKeyCode = null;
          this.lastKeyCodeTime = 0;
          this.lastClick = { time: 0, x: 0, y: 0, type: "" };
          this.lastSelectionOrigin = null;
          this.lastSelectionTime = 0;
          this.lastIOSEnter = 0;
          this.lastIOSEnterFallbackTimeout = -1;
          this.lastAndroidDelete = 0;
          this.composing = false;
          this.composingTimeout = -1;
          this.compositionNodes = [];
          this.compositionEndedAt = -2e8;
          this.domChangeCount = 0;
          this.eventHandlers = /* @__PURE__ */ Object.create(null);
          this.hideSelectionGuard = null;
        }
      };
      editHandlers.keydown = (view, _event) => {
        let event = _event;
        view.input.shiftKey = event.keyCode == 16 || event.shiftKey;
        if (inOrNearComposition(view, event))
          return;
        view.input.lastKeyCode = event.keyCode;
        view.input.lastKeyCodeTime = Date.now();
        if (android && chrome && event.keyCode == 13)
          return;
        if (event.keyCode != 229)
          view.domObserver.forceFlush();
        if (ios && event.keyCode == 13 && !event.ctrlKey && !event.altKey && !event.metaKey) {
          let now = Date.now();
          view.input.lastIOSEnter = now;
          view.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
            if (view.input.lastIOSEnter == now) {
              view.someProp("handleKeyDown", (f) => f(view, keyEvent(13, "Enter")));
              view.input.lastIOSEnter = 0;
            }
          }, 200);
        } else if (view.someProp("handleKeyDown", (f) => f(view, event)) || captureKeyDown(view, event)) {
          event.preventDefault();
        } else {
          setSelectionOrigin(view, "key");
        }
      };
      editHandlers.keyup = (view, event) => {
        if (event.keyCode == 16)
          view.input.shiftKey = false;
      };
      editHandlers.keypress = (view, _event) => {
        let event = _event;
        if (inOrNearComposition(view, event) || !event.charCode || event.ctrlKey && !event.altKey || mac && event.metaKey)
          return;
        if (view.someProp("handleKeyPress", (f) => f(view, event))) {
          event.preventDefault();
          return;
        }
        let sel = view.state.selection;
        if (!(sel instanceof TextSelection) || !sel.$from.sameParent(sel.$to)) {
          let text = String.fromCharCode(event.charCode);
          if (!view.someProp("handleTextInput", (f) => f(view, sel.$from.pos, sel.$to.pos, text)))
            view.dispatch(view.state.tr.insertText(text).scrollIntoView());
          event.preventDefault();
        }
      };
      selectNodeModifier = mac ? "metaKey" : "ctrlKey";
      handlers.mousedown = (view, _event) => {
        let event = _event;
        view.input.shiftKey = event.shiftKey;
        let flushed = forceDOMFlush(view);
        let now = Date.now(), type = "singleClick";
        if (now - view.input.lastClick.time < 500 && isNear(event, view.input.lastClick) && !event[selectNodeModifier]) {
          if (view.input.lastClick.type == "singleClick")
            type = "doubleClick";
          else if (view.input.lastClick.type == "doubleClick")
            type = "tripleClick";
        }
        view.input.lastClick = { time: now, x: event.clientX, y: event.clientY, type };
        let pos = view.posAtCoords(eventCoords(event));
        if (!pos)
          return;
        if (type == "singleClick") {
          if (view.input.mouseDown)
            view.input.mouseDown.done();
          view.input.mouseDown = new MouseDown(view, pos, event, !!flushed);
        } else if ((type == "doubleClick" ? handleDoubleClick : handleTripleClick)(view, pos.pos, pos.inside, event)) {
          event.preventDefault();
        } else {
          setSelectionOrigin(view, "pointer");
        }
      };
      MouseDown = class {
        constructor(view, pos, event, flushed) {
          this.view = view;
          this.pos = pos;
          this.event = event;
          this.flushed = flushed;
          this.delayedSelectionSync = false;
          this.mightDrag = null;
          this.startDoc = view.state.doc;
          this.selectNode = !!event[selectNodeModifier];
          this.allowDefault = event.shiftKey;
          let targetNode, targetPos;
          if (pos.inside > -1) {
            targetNode = view.state.doc.nodeAt(pos.inside);
            targetPos = pos.inside;
          } else {
            let $pos = view.state.doc.resolve(pos.pos);
            targetNode = $pos.parent;
            targetPos = $pos.depth ? $pos.before() : 0;
          }
          const target = flushed ? null : event.target;
          const targetDesc = target ? view.docView.nearestDesc(target, true) : null;
          this.target = targetDesc ? targetDesc.dom : null;
          let { selection } = view.state;
          if (event.button == 0 && targetNode.type.spec.draggable && targetNode.type.spec.selectable !== false || selection instanceof NodeSelection && selection.from <= targetPos && selection.to > targetPos)
            this.mightDrag = {
              node: targetNode,
              pos: targetPos,
              addAttr: !!(this.target && !this.target.draggable),
              setUneditable: !!(this.target && gecko && !this.target.hasAttribute("contentEditable"))
            };
          if (this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable)) {
            this.view.domObserver.stop();
            if (this.mightDrag.addAttr)
              this.target.draggable = true;
            if (this.mightDrag.setUneditable)
              setTimeout(() => {
                if (this.view.input.mouseDown == this)
                  this.target.setAttribute("contentEditable", "false");
              }, 20);
            this.view.domObserver.start();
          }
          view.root.addEventListener("mouseup", this.up = this.up.bind(this));
          view.root.addEventListener("mousemove", this.move = this.move.bind(this));
          setSelectionOrigin(view, "pointer");
        }
        done() {
          this.view.root.removeEventListener("mouseup", this.up);
          this.view.root.removeEventListener("mousemove", this.move);
          if (this.mightDrag && this.target) {
            this.view.domObserver.stop();
            if (this.mightDrag.addAttr)
              this.target.removeAttribute("draggable");
            if (this.mightDrag.setUneditable)
              this.target.removeAttribute("contentEditable");
            this.view.domObserver.start();
          }
          if (this.delayedSelectionSync)
            setTimeout(() => selectionToDOM(this.view));
          this.view.input.mouseDown = null;
        }
        up(event) {
          this.done();
          if (!this.view.dom.contains(event.target))
            return;
          let pos = this.pos;
          if (this.view.state.doc != this.startDoc)
            pos = this.view.posAtCoords(eventCoords(event));
          if (this.allowDefault || !pos) {
            setSelectionOrigin(this.view, "pointer");
          } else if (handleSingleClick(this.view, pos.pos, pos.inside, event, this.selectNode)) {
            event.preventDefault();
          } else if (event.button == 0 && (this.flushed || safari && this.mightDrag && !this.mightDrag.node.isAtom || chrome && !(this.view.state.selection instanceof TextSelection) && Math.min(Math.abs(pos.pos - this.view.state.selection.from), Math.abs(pos.pos - this.view.state.selection.to)) <= 2)) {
            updateSelection(this.view, Selection.near(this.view.state.doc.resolve(pos.pos)), "pointer");
            event.preventDefault();
          } else {
            setSelectionOrigin(this.view, "pointer");
          }
        }
        move(event) {
          if (!this.allowDefault && (Math.abs(this.event.x - event.clientX) > 4 || Math.abs(this.event.y - event.clientY) > 4))
            this.allowDefault = true;
          setSelectionOrigin(this.view, "pointer");
          if (event.buttons == 0)
            this.done();
        }
      };
      handlers.touchdown = (view) => {
        forceDOMFlush(view);
        setSelectionOrigin(view, "pointer");
      };
      handlers.contextmenu = (view) => forceDOMFlush(view);
      timeoutComposition = android ? 5e3 : -1;
      editHandlers.compositionstart = editHandlers.compositionupdate = (view) => {
        if (!view.composing) {
          view.domObserver.flush();
          let { state } = view, $pos = state.selection.$from;
          if (state.selection.empty && (state.storedMarks || !$pos.textOffset && $pos.parentOffset && $pos.nodeBefore.marks.some((m) => m.type.spec.inclusive === false))) {
            view.markCursor = view.state.storedMarks || $pos.marks();
            endComposition(view, true);
            view.markCursor = null;
          } else {
            endComposition(view);
            if (gecko && state.selection.empty && $pos.parentOffset && !$pos.textOffset && $pos.nodeBefore.marks.length) {
              let sel = view.domSelection();
              for (let node = sel.focusNode, offset = sel.focusOffset; node && node.nodeType == 1 && offset != 0; ) {
                let before = offset < 0 ? node.lastChild : node.childNodes[offset - 1];
                if (!before)
                  break;
                if (before.nodeType == 3) {
                  sel.collapse(before, before.nodeValue.length);
                  break;
                } else {
                  node = before;
                  offset = -1;
                }
              }
            }
          }
          view.input.composing = true;
        }
        scheduleComposeEnd(view, timeoutComposition);
      };
      editHandlers.compositionend = (view, event) => {
        if (view.composing) {
          view.input.composing = false;
          view.input.compositionEndedAt = event.timeStamp;
          scheduleComposeEnd(view, 20);
        }
      };
      brokenClipboardAPI = ie && ie_version < 15 || ios && webkit_version < 604;
      handlers.copy = editHandlers.cut = (view, _event) => {
        let event = _event;
        let sel = view.state.selection, cut = event.type == "cut";
        if (sel.empty)
          return;
        let data = brokenClipboardAPI ? null : event.clipboardData;
        let slice2 = sel.content(), { dom, text } = serializeForClipboard(view, slice2);
        if (data) {
          event.preventDefault();
          data.clearData();
          data.setData("text/html", dom.innerHTML);
          data.setData("text/plain", text);
        } else {
          captureCopy(view, dom);
        }
        if (cut)
          view.dispatch(view.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
      };
      editHandlers.paste = (view, _event) => {
        let event = _event;
        if (view.composing && !android)
          return;
        let data = brokenClipboardAPI ? null : event.clipboardData;
        if (data && doPaste(view, data.getData("text/plain"), data.getData("text/html"), event))
          event.preventDefault();
        else
          capturePaste(view, event);
      };
      Dragging = class {
        constructor(slice2, move) {
          this.slice = slice2;
          this.move = move;
        }
      };
      dragCopyModifier = mac ? "altKey" : "ctrlKey";
      handlers.dragstart = (view, _event) => {
        let event = _event;
        let mouseDown = view.input.mouseDown;
        if (mouseDown)
          mouseDown.done();
        if (!event.dataTransfer)
          return;
        let sel = view.state.selection;
        let pos = sel.empty ? null : view.posAtCoords(eventCoords(event));
        if (pos && pos.pos >= sel.from && pos.pos <= (sel instanceof NodeSelection ? sel.to - 1 : sel.to))
          ;
        else if (mouseDown && mouseDown.mightDrag) {
          view.dispatch(view.state.tr.setSelection(NodeSelection.create(view.state.doc, mouseDown.mightDrag.pos)));
        } else if (event.target && event.target.nodeType == 1) {
          let desc = view.docView.nearestDesc(event.target, true);
          if (desc && desc.node.type.spec.draggable && desc != view.docView)
            view.dispatch(view.state.tr.setSelection(NodeSelection.create(view.state.doc, desc.posBefore)));
        }
        let slice2 = view.state.selection.content(), { dom, text } = serializeForClipboard(view, slice2);
        event.dataTransfer.clearData();
        event.dataTransfer.setData(brokenClipboardAPI ? "Text" : "text/html", dom.innerHTML);
        event.dataTransfer.effectAllowed = "copyMove";
        if (!brokenClipboardAPI)
          event.dataTransfer.setData("text/plain", text);
        view.dragging = new Dragging(slice2, !event[dragCopyModifier]);
      };
      handlers.dragend = (view) => {
        let dragging = view.dragging;
        window.setTimeout(() => {
          if (view.dragging == dragging)
            view.dragging = null;
        }, 50);
      };
      editHandlers.dragover = editHandlers.dragenter = (_, e) => e.preventDefault();
      editHandlers.drop = (view, _event) => {
        let event = _event;
        let dragging = view.dragging;
        view.dragging = null;
        if (!event.dataTransfer)
          return;
        let eventPos = view.posAtCoords(eventCoords(event));
        if (!eventPos)
          return;
        let $mouse = view.state.doc.resolve(eventPos.pos);
        if (!$mouse)
          return;
        let slice2 = dragging && dragging.slice;
        if (slice2) {
          view.someProp("transformPasted", (f) => {
            slice2 = f(slice2);
          });
        } else {
          slice2 = parseFromClipboard(view, event.dataTransfer.getData(brokenClipboardAPI ? "Text" : "text/plain"), brokenClipboardAPI ? null : event.dataTransfer.getData("text/html"), false, $mouse);
        }
        let move = !!(dragging && !event[dragCopyModifier]);
        if (view.someProp("handleDrop", (f) => f(view, event, slice2 || Slice.empty, move))) {
          event.preventDefault();
          return;
        }
        if (!slice2)
          return;
        event.preventDefault();
        let insertPos = slice2 ? dropPoint(view.state.doc, $mouse.pos, slice2) : $mouse.pos;
        if (insertPos == null)
          insertPos = $mouse.pos;
        let tr = view.state.tr;
        if (move)
          tr.deleteSelection();
        let pos = tr.mapping.map(insertPos);
        let isNode = slice2.openStart == 0 && slice2.openEnd == 0 && slice2.content.childCount == 1;
        let beforeInsert = tr.doc;
        if (isNode)
          tr.replaceRangeWith(pos, pos, slice2.content.firstChild);
        else
          tr.replaceRange(pos, pos, slice2);
        if (tr.doc.eq(beforeInsert))
          return;
        let $pos = tr.doc.resolve(pos);
        if (isNode && NodeSelection.isSelectable(slice2.content.firstChild) && $pos.nodeAfter && $pos.nodeAfter.sameMarkup(slice2.content.firstChild)) {
          tr.setSelection(new NodeSelection($pos));
        } else {
          let end = tr.mapping.map(insertPos);
          tr.mapping.maps[tr.mapping.maps.length - 1].forEach((_from, _to, _newFrom, newTo) => end = newTo);
          tr.setSelection(selectionBetween(view, $pos, tr.doc.resolve(end)));
        }
        view.focus();
        view.dispatch(tr.setMeta("uiEvent", "drop"));
      };
      handlers.focus = (view) => {
        if (!view.focused) {
          view.domObserver.stop();
          view.dom.classList.add("ProseMirror-focused");
          view.domObserver.start();
          view.focused = true;
          setTimeout(() => {
            if (view.docView && view.hasFocus() && !view.domObserver.currentSelection.eq(view.domSelection()))
              selectionToDOM(view);
          }, 20);
        }
      };
      handlers.blur = (view, _event) => {
        let event = _event;
        if (view.focused) {
          view.domObserver.stop();
          view.dom.classList.remove("ProseMirror-focused");
          view.domObserver.start();
          if (event.relatedTarget && view.dom.contains(event.relatedTarget))
            view.domObserver.currentSelection.clear();
          view.focused = false;
        }
      };
      handlers.beforeinput = (view, _event) => {
        let event = _event;
        if (chrome && android && event.inputType == "deleteContentBackward") {
          view.domObserver.flushSoon();
          let { domChangeCount } = view.input;
          setTimeout(() => {
            if (view.input.domChangeCount != domChangeCount)
              return;
            view.dom.blur();
            view.focus();
            if (view.someProp("handleKeyDown", (f) => f(view, keyEvent(8, "Backspace"))))
              return;
            let { $cursor } = view.state.selection;
            if ($cursor && $cursor.pos > 0)
              view.dispatch(view.state.tr.delete($cursor.pos - 1, $cursor.pos).scrollIntoView());
          }, 50);
        }
      };
      for (let prop in editHandlers)
        handlers[prop] = editHandlers[prop];
      WidgetType = class {
        constructor(toDOM, spec) {
          this.toDOM = toDOM;
          this.spec = spec || noSpec;
          this.side = this.spec.side || 0;
        }
        map(mapping, span, offset, oldOffset) {
          let { pos, deleted } = mapping.mapResult(span.from + oldOffset, this.side < 0 ? -1 : 1);
          return deleted ? null : new Decoration(pos - offset, pos - offset, this);
        }
        valid() {
          return true;
        }
        eq(other) {
          return this == other || other instanceof WidgetType && (this.spec.key && this.spec.key == other.spec.key || this.toDOM == other.toDOM && compareObjs(this.spec, other.spec));
        }
        destroy(node) {
          if (this.spec.destroy)
            this.spec.destroy(node);
        }
      };
      InlineType = class {
        constructor(attrs, spec) {
          this.attrs = attrs;
          this.spec = spec || noSpec;
        }
        map(mapping, span, offset, oldOffset) {
          let from2 = mapping.map(span.from + oldOffset, this.spec.inclusiveStart ? -1 : 1) - offset;
          let to = mapping.map(span.to + oldOffset, this.spec.inclusiveEnd ? 1 : -1) - offset;
          return from2 >= to ? null : new Decoration(from2, to, this);
        }
        valid(_, span) {
          return span.from < span.to;
        }
        eq(other) {
          return this == other || other instanceof InlineType && compareObjs(this.attrs, other.attrs) && compareObjs(this.spec, other.spec);
        }
        static is(span) {
          return span.type instanceof InlineType;
        }
        destroy() {
        }
      };
      NodeType2 = class {
        constructor(attrs, spec) {
          this.attrs = attrs;
          this.spec = spec || noSpec;
        }
        map(mapping, span, offset, oldOffset) {
          let from2 = mapping.mapResult(span.from + oldOffset, 1);
          if (from2.deleted)
            return null;
          let to = mapping.mapResult(span.to + oldOffset, -1);
          if (to.deleted || to.pos <= from2.pos)
            return null;
          return new Decoration(from2.pos - offset, to.pos - offset, this);
        }
        valid(node, span) {
          let { index, offset } = node.content.findIndex(span.from), child;
          return offset == span.from && !(child = node.child(index)).isText && offset + child.nodeSize == span.to;
        }
        eq(other) {
          return this == other || other instanceof NodeType2 && compareObjs(this.attrs, other.attrs) && compareObjs(this.spec, other.spec);
        }
        destroy() {
        }
      };
      Decoration = class {
        constructor(from2, to, type) {
          this.from = from2;
          this.to = to;
          this.type = type;
        }
        copy(from2, to) {
          return new Decoration(from2, to, this.type);
        }
        eq(other, offset = 0) {
          return this.type.eq(other.type) && this.from + offset == other.from && this.to + offset == other.to;
        }
        map(mapping, offset, oldOffset) {
          return this.type.map(mapping, this, offset, oldOffset);
        }
        static widget(pos, toDOM, spec) {
          return new Decoration(pos, pos, new WidgetType(toDOM, spec));
        }
        static inline(from2, to, attrs, spec) {
          return new Decoration(from2, to, new InlineType(attrs, spec));
        }
        static node(from2, to, attrs, spec) {
          return new Decoration(from2, to, new NodeType2(attrs, spec));
        }
        get spec() {
          return this.type.spec;
        }
        get inline() {
          return this.type instanceof InlineType;
        }
      };
      none = [];
      noSpec = {};
      DecorationSet = class {
        constructor(local, children) {
          this.local = local.length ? local : none;
          this.children = children.length ? children : none;
        }
        static create(doc4, decorations) {
          return decorations.length ? buildTree(decorations, doc4, 0, noSpec) : empty;
        }
        find(start, end, predicate) {
          let result = [];
          this.findInner(start == null ? 0 : start, end == null ? 1e9 : end, result, 0, predicate);
          return result;
        }
        findInner(start, end, result, offset, predicate) {
          for (let i = 0; i < this.local.length; i++) {
            let span = this.local[i];
            if (span.from <= end && span.to >= start && (!predicate || predicate(span.spec)))
              result.push(span.copy(span.from + offset, span.to + offset));
          }
          for (let i = 0; i < this.children.length; i += 3) {
            if (this.children[i] < end && this.children[i + 1] > start) {
              let childOff = this.children[i] + 1;
              this.children[i + 2].findInner(start - childOff, end - childOff, result, offset + childOff, predicate);
            }
          }
        }
        map(mapping, doc4, options) {
          if (this == empty || mapping.maps.length == 0)
            return this;
          return this.mapInner(mapping, doc4, 0, 0, options || noSpec);
        }
        mapInner(mapping, node, offset, oldOffset, options) {
          let newLocal;
          for (let i = 0; i < this.local.length; i++) {
            let mapped = this.local[i].map(mapping, offset, oldOffset);
            if (mapped && mapped.type.valid(node, mapped))
              (newLocal || (newLocal = [])).push(mapped);
            else if (options.onRemove)
              options.onRemove(this.local[i].spec);
          }
          if (this.children.length)
            return mapChildren(this.children, newLocal || [], mapping, node, offset, oldOffset, options);
          else
            return newLocal ? new DecorationSet(newLocal.sort(byPos), none) : empty;
        }
        add(doc4, decorations) {
          if (!decorations.length)
            return this;
          if (this == empty)
            return DecorationSet.create(doc4, decorations);
          return this.addInner(doc4, decorations, 0);
        }
        addInner(doc4, decorations, offset) {
          let children, childIndex = 0;
          doc4.forEach((childNode, childOffset) => {
            let baseOffset = childOffset + offset, found2;
            if (!(found2 = takeSpansForNode(decorations, childNode, baseOffset)))
              return;
            if (!children)
              children = this.children.slice();
            while (childIndex < children.length && children[childIndex] < childOffset)
              childIndex += 3;
            if (children[childIndex] == childOffset)
              children[childIndex + 2] = children[childIndex + 2].addInner(childNode, found2, baseOffset + 1);
            else
              children.splice(childIndex, 0, childOffset, childOffset + childNode.nodeSize, buildTree(found2, childNode, baseOffset + 1, noSpec));
            childIndex += 3;
          });
          let local = moveSpans(childIndex ? withoutNulls(decorations) : decorations, -offset);
          for (let i = 0; i < local.length; i++)
            if (!local[i].type.valid(doc4, local[i]))
              local.splice(i--, 1);
          return new DecorationSet(local.length ? this.local.concat(local).sort(byPos) : this.local, children || this.children);
        }
        remove(decorations) {
          if (decorations.length == 0 || this == empty)
            return this;
          return this.removeInner(decorations, 0);
        }
        removeInner(decorations, offset) {
          let children = this.children, local = this.local;
          for (let i = 0; i < children.length; i += 3) {
            let found2;
            let from2 = children[i] + offset, to = children[i + 1] + offset;
            for (let j = 0, span; j < decorations.length; j++)
              if (span = decorations[j]) {
                if (span.from > from2 && span.to < to) {
                  decorations[j] = null;
                  (found2 || (found2 = [])).push(span);
                }
              }
            if (!found2)
              continue;
            if (children == this.children)
              children = this.children.slice();
            let removed = children[i + 2].removeInner(found2, from2 + 1);
            if (removed != empty) {
              children[i + 2] = removed;
            } else {
              children.splice(i, 3);
              i -= 3;
            }
          }
          if (local.length) {
            for (let i = 0, span; i < decorations.length; i++)
              if (span = decorations[i]) {
                for (let j = 0; j < local.length; j++)
                  if (local[j].eq(span, offset)) {
                    if (local == this.local)
                      local = this.local.slice();
                    local.splice(j--, 1);
                  }
              }
          }
          if (children == this.children && local == this.local)
            return this;
          return local.length || children.length ? new DecorationSet(local, children) : empty;
        }
        forChild(offset, node) {
          if (this == empty)
            return this;
          if (node.isLeaf)
            return DecorationSet.empty;
          let child, local;
          for (let i = 0; i < this.children.length; i += 3)
            if (this.children[i] >= offset) {
              if (this.children[i] == offset)
                child = this.children[i + 2];
              break;
            }
          let start = offset + 1, end = start + node.content.size;
          for (let i = 0; i < this.local.length; i++) {
            let dec = this.local[i];
            if (dec.from < end && dec.to > start && dec.type instanceof InlineType) {
              let from2 = Math.max(start, dec.from) - start, to = Math.min(end, dec.to) - start;
              if (from2 < to)
                (local || (local = [])).push(dec.copy(from2, to));
            }
          }
          if (local) {
            let localSet = new DecorationSet(local.sort(byPos), none);
            return child ? new DecorationGroup([localSet, child]) : localSet;
          }
          return child || empty;
        }
        eq(other) {
          if (this == other)
            return true;
          if (!(other instanceof DecorationSet) || this.local.length != other.local.length || this.children.length != other.children.length)
            return false;
          for (let i = 0; i < this.local.length; i++)
            if (!this.local[i].eq(other.local[i]))
              return false;
          for (let i = 0; i < this.children.length; i += 3)
            if (this.children[i] != other.children[i] || this.children[i + 1] != other.children[i + 1] || !this.children[i + 2].eq(other.children[i + 2]))
              return false;
          return true;
        }
        locals(node) {
          return removeOverlap(this.localsInner(node));
        }
        localsInner(node) {
          if (this == empty)
            return none;
          if (node.inlineContent || !this.local.some(InlineType.is))
            return this.local;
          let result = [];
          for (let i = 0; i < this.local.length; i++) {
            if (!(this.local[i].type instanceof InlineType))
              result.push(this.local[i]);
          }
          return result;
        }
      };
      DecorationSet.empty = new DecorationSet([], []);
      DecorationSet.removeOverlap = removeOverlap;
      empty = DecorationSet.empty;
      DecorationGroup = class {
        constructor(members) {
          this.members = members;
        }
        map(mapping, doc4) {
          const mappedDecos = this.members.map((member) => member.map(mapping, doc4, noSpec));
          return DecorationGroup.from(mappedDecos);
        }
        forChild(offset, child) {
          if (child.isLeaf)
            return DecorationSet.empty;
          let found2 = [];
          for (let i = 0; i < this.members.length; i++) {
            let result = this.members[i].forChild(offset, child);
            if (result == empty)
              continue;
            if (result instanceof DecorationGroup)
              found2 = found2.concat(result.members);
            else
              found2.push(result);
          }
          return DecorationGroup.from(found2);
        }
        eq(other) {
          if (!(other instanceof DecorationGroup) || other.members.length != this.members.length)
            return false;
          for (let i = 0; i < this.members.length; i++)
            if (!this.members[i].eq(other.members[i]))
              return false;
          return true;
        }
        locals(node) {
          let result, sorted = true;
          for (let i = 0; i < this.members.length; i++) {
            let locals = this.members[i].localsInner(node);
            if (!locals.length)
              continue;
            if (!result) {
              result = locals;
            } else {
              if (sorted) {
                result = result.slice();
                sorted = false;
              }
              for (let j = 0; j < locals.length; j++)
                result.push(locals[j]);
            }
          }
          return result ? removeOverlap(sorted ? result : result.sort(byPos)) : none;
        }
        static from(members) {
          switch (members.length) {
            case 0:
              return empty;
            case 1:
              return members[0];
            default:
              return new DecorationGroup(members);
          }
        }
      };
      observeOptions = {
        childList: true,
        characterData: true,
        characterDataOldValue: true,
        attributes: true,
        attributeOldValue: true,
        subtree: true
      };
      useCharData = ie && ie_version <= 11;
      SelectionState = class {
        constructor() {
          this.anchorNode = null;
          this.anchorOffset = 0;
          this.focusNode = null;
          this.focusOffset = 0;
        }
        set(sel) {
          this.anchorNode = sel.anchorNode;
          this.anchorOffset = sel.anchorOffset;
          this.focusNode = sel.focusNode;
          this.focusOffset = sel.focusOffset;
        }
        clear() {
          this.anchorNode = this.focusNode = null;
        }
        eq(sel) {
          return sel.anchorNode == this.anchorNode && sel.anchorOffset == this.anchorOffset && sel.focusNode == this.focusNode && sel.focusOffset == this.focusOffset;
        }
      };
      DOMObserver = class {
        constructor(view, handleDOMChange) {
          this.view = view;
          this.handleDOMChange = handleDOMChange;
          this.queue = [];
          this.flushingSoon = -1;
          this.observer = null;
          this.currentSelection = new SelectionState();
          this.onCharData = null;
          this.suppressingSelectionUpdates = false;
          this.observer = window.MutationObserver && new window.MutationObserver((mutations) => {
            for (let i = 0; i < mutations.length; i++)
              this.queue.push(mutations[i]);
            if (ie && ie_version <= 11 && mutations.some((m) => m.type == "childList" && m.removedNodes.length || m.type == "characterData" && m.oldValue.length > m.target.nodeValue.length))
              this.flushSoon();
            else
              this.flush();
          });
          if (useCharData) {
            this.onCharData = (e) => {
              this.queue.push({ target: e.target, type: "characterData", oldValue: e.prevValue });
              this.flushSoon();
            };
          }
          this.onSelectionChange = this.onSelectionChange.bind(this);
        }
        flushSoon() {
          if (this.flushingSoon < 0)
            this.flushingSoon = window.setTimeout(() => {
              this.flushingSoon = -1;
              this.flush();
            }, 20);
        }
        forceFlush() {
          if (this.flushingSoon > -1) {
            window.clearTimeout(this.flushingSoon);
            this.flushingSoon = -1;
            this.flush();
          }
        }
        start() {
          if (this.observer)
            this.observer.observe(this.view.dom, observeOptions);
          if (this.onCharData)
            this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData);
          this.connectSelection();
        }
        stop() {
          if (this.observer) {
            let take = this.observer.takeRecords();
            if (take.length) {
              for (let i = 0; i < take.length; i++)
                this.queue.push(take[i]);
              window.setTimeout(() => this.flush(), 20);
            }
            this.observer.disconnect();
          }
          if (this.onCharData)
            this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData);
          this.disconnectSelection();
        }
        connectSelection() {
          this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
        }
        disconnectSelection() {
          this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
        }
        suppressSelectionUpdates() {
          this.suppressingSelectionUpdates = true;
          setTimeout(() => this.suppressingSelectionUpdates = false, 50);
        }
        onSelectionChange() {
          if (!hasFocusAndSelection(this.view))
            return;
          if (this.suppressingSelectionUpdates)
            return selectionToDOM(this.view);
          if (ie && ie_version <= 11 && !this.view.state.selection.empty) {
            let sel = this.view.domSelection();
            if (sel.focusNode && isEquivalentPosition(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset))
              return this.flushSoon();
          }
          this.flush();
        }
        setCurSelection() {
          this.currentSelection.set(this.view.domSelection());
        }
        ignoreSelectionChange(sel) {
          if (sel.rangeCount == 0)
            return true;
          let container = sel.getRangeAt(0).commonAncestorContainer;
          let desc = this.view.docView.nearestDesc(container);
          if (desc && desc.ignoreMutation({
            type: "selection",
            target: container.nodeType == 3 ? container.parentNode : container
          })) {
            this.setCurSelection();
            return true;
          }
        }
        flush() {
          if (!this.view.docView || this.flushingSoon > -1)
            return;
          let mutations = this.observer ? this.observer.takeRecords() : [];
          if (this.queue.length) {
            mutations = this.queue.concat(mutations);
            this.queue.length = 0;
          }
          let sel = this.view.domSelection();
          let newSel = !this.suppressingSelectionUpdates && !this.currentSelection.eq(sel) && hasFocusAndSelection(this.view) && !this.ignoreSelectionChange(sel);
          let from2 = -1, to = -1, typeOver = false, added = [];
          if (this.view.editable) {
            for (let i = 0; i < mutations.length; i++) {
              let result = this.registerMutation(mutations[i], added);
              if (result) {
                from2 = from2 < 0 ? result.from : Math.min(result.from, from2);
                to = to < 0 ? result.to : Math.max(result.to, to);
                if (result.typeOver)
                  typeOver = true;
              }
            }
          }
          if (gecko && added.length > 1) {
            let brs = added.filter((n) => n.nodeName == "BR");
            if (brs.length == 2) {
              let a = brs[0], b = brs[1];
              if (a.parentNode && a.parentNode.parentNode == b.parentNode)
                b.remove();
              else
                a.remove();
            }
          }
          if (from2 > -1 || newSel) {
            if (from2 > -1) {
              this.view.docView.markDirty(from2, to);
              checkCSS(this.view);
            }
            this.handleDOMChange(from2, to, typeOver, added);
            if (this.view.docView && this.view.docView.dirty)
              this.view.updateState(this.view.state);
            else if (!this.currentSelection.eq(sel))
              selectionToDOM(this.view);
            this.currentSelection.set(sel);
          }
        }
        registerMutation(mut, added) {
          if (added.indexOf(mut.target) > -1)
            return null;
          let desc = this.view.docView.nearestDesc(mut.target);
          if (mut.type == "attributes" && (desc == this.view.docView || mut.attributeName == "contenteditable" || mut.attributeName == "style" && !mut.oldValue && !mut.target.getAttribute("style")))
            return null;
          if (!desc || desc.ignoreMutation(mut))
            return null;
          if (mut.type == "childList") {
            for (let i = 0; i < mut.addedNodes.length; i++)
              added.push(mut.addedNodes[i]);
            if (desc.contentDOM && desc.contentDOM != desc.dom && !desc.contentDOM.contains(mut.target))
              return { from: desc.posBefore, to: desc.posAfter };
            let prev = mut.previousSibling, next = mut.nextSibling;
            if (ie && ie_version <= 11 && mut.addedNodes.length) {
              for (let i = 0; i < mut.addedNodes.length; i++) {
                let { previousSibling, nextSibling } = mut.addedNodes[i];
                if (!previousSibling || Array.prototype.indexOf.call(mut.addedNodes, previousSibling) < 0)
                  prev = previousSibling;
                if (!nextSibling || Array.prototype.indexOf.call(mut.addedNodes, nextSibling) < 0)
                  next = nextSibling;
              }
            }
            let fromOffset = prev && prev.parentNode == mut.target ? domIndex(prev) + 1 : 0;
            let from2 = desc.localPosFromDOM(mut.target, fromOffset, -1);
            let toOffset = next && next.parentNode == mut.target ? domIndex(next) : mut.target.childNodes.length;
            let to = desc.localPosFromDOM(mut.target, toOffset, 1);
            return { from: from2, to };
          } else if (mut.type == "attributes") {
            return { from: desc.posAtStart - desc.border, to: desc.posAtEnd + desc.border };
          } else {
            return {
              from: desc.posAtStart,
              to: desc.posAtEnd,
              typeOver: mut.target.nodeValue == mut.oldValue
            };
          }
        }
      };
      cssChecked = false;
      EditorView = class {
        constructor(place, props) {
          this._root = null;
          this.focused = false;
          this.trackWrites = null;
          this.mounted = false;
          this.markCursor = null;
          this.cursorWrapper = null;
          this.lastSelectedViewDesc = void 0;
          this.input = new InputState();
          this.prevDirectPlugins = [];
          this.pluginViews = [];
          this.dragging = null;
          this._props = props;
          this.state = props.state;
          this.directPlugins = props.plugins || [];
          this.directPlugins.forEach(checkStateComponent);
          this.dispatch = this.dispatch.bind(this);
          this.dom = place && place.mount || document.createElement("div");
          if (place) {
            if (place.appendChild)
              place.appendChild(this.dom);
            else if (typeof place == "function")
              place(this.dom);
            else if (place.mount)
              this.mounted = true;
          }
          this.editable = getEditable(this);
          updateCursorWrapper(this);
          this.nodeViews = buildNodeViews(this);
          this.docView = docViewDesc(this.state.doc, computeDocDeco(this), viewDecorations(this), this.dom, this);
          this.domObserver = new DOMObserver(this, (from2, to, typeOver, added) => readDOMChange(this, from2, to, typeOver, added));
          this.domObserver.start();
          initInput(this);
          this.updatePluginViews();
        }
        get composing() {
          return this.input.composing;
        }
        get props() {
          if (this._props.state != this.state) {
            let prev = this._props;
            this._props = {};
            for (let name in prev)
              this._props[name] = prev[name];
            this._props.state = this.state;
          }
          return this._props;
        }
        update(props) {
          if (props.handleDOMEvents != this._props.handleDOMEvents)
            ensureListeners(this);
          this._props = props;
          if (props.plugins) {
            props.plugins.forEach(checkStateComponent);
            this.directPlugins = props.plugins;
          }
          this.updateStateInner(props.state, true);
        }
        setProps(props) {
          let updated = {};
          for (let name in this._props)
            updated[name] = this._props[name];
          updated.state = this.state;
          for (let name in props)
            updated[name] = props[name];
          this.update(updated);
        }
        updateState(state) {
          this.updateStateInner(state, this.state.plugins != state.plugins);
        }
        updateStateInner(state, reconfigured) {
          let prev = this.state, redraw = false, updateSel = false;
          if (state.storedMarks && this.composing) {
            clearComposition(this);
            updateSel = true;
          }
          this.state = state;
          if (reconfigured) {
            let nodeViews = buildNodeViews(this);
            if (changedNodeViews(nodeViews, this.nodeViews)) {
              this.nodeViews = nodeViews;
              redraw = true;
            }
            ensureListeners(this);
          }
          this.editable = getEditable(this);
          updateCursorWrapper(this);
          let innerDeco = viewDecorations(this), outerDeco = computeDocDeco(this);
          let scroll = reconfigured ? "reset" : state.scrollToSelection > prev.scrollToSelection ? "to selection" : "preserve";
          let updateDoc = redraw || !this.docView.matchesNode(state.doc, outerDeco, innerDeco);
          if (updateDoc || !state.selection.eq(prev.selection))
            updateSel = true;
          let oldScrollPos = scroll == "preserve" && updateSel && this.dom.style.overflowAnchor == null && storeScrollPos(this);
          if (updateSel) {
            this.domObserver.stop();
            let forceSelUpdate = updateDoc && (ie || chrome) && !this.composing && !prev.selection.empty && !state.selection.empty && selectionContextChanged(prev.selection, state.selection);
            if (updateDoc) {
              let chromeKludge = chrome ? this.trackWrites = this.domSelection().focusNode : null;
              if (redraw || !this.docView.update(state.doc, outerDeco, innerDeco, this)) {
                this.docView.updateOuterDeco([]);
                this.docView.destroy();
                this.docView = docViewDesc(state.doc, outerDeco, innerDeco, this.dom, this);
              }
              if (chromeKludge && !this.trackWrites)
                forceSelUpdate = true;
            }
            if (forceSelUpdate || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelection()) && anchorInRightPlace(this))) {
              selectionToDOM(this, forceSelUpdate);
            } else {
              syncNodeSelection(this, state.selection);
              this.domObserver.setCurSelection();
            }
            this.domObserver.start();
          }
          this.updatePluginViews(prev);
          if (scroll == "reset") {
            this.dom.scrollTop = 0;
          } else if (scroll == "to selection") {
            let startDOM = this.domSelection().focusNode;
            if (this.someProp("handleScrollToSelection", (f) => f(this)))
              ;
            else if (state.selection instanceof NodeSelection) {
              let target = this.docView.domAfterPos(state.selection.from);
              if (target.nodeType == 1)
                scrollRectIntoView(this, target.getBoundingClientRect(), startDOM);
            } else {
              scrollRectIntoView(this, this.coordsAtPos(state.selection.head, 1), startDOM);
            }
          } else if (oldScrollPos) {
            resetScrollPos(oldScrollPos);
          }
        }
        destroyPluginViews() {
          let view;
          while (view = this.pluginViews.pop())
            if (view.destroy)
              view.destroy();
        }
        updatePluginViews(prevState) {
          if (!prevState || prevState.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
            this.prevDirectPlugins = this.directPlugins;
            this.destroyPluginViews();
            for (let i = 0; i < this.directPlugins.length; i++) {
              let plugin = this.directPlugins[i];
              if (plugin.spec.view)
                this.pluginViews.push(plugin.spec.view(this));
            }
            for (let i = 0; i < this.state.plugins.length; i++) {
              let plugin = this.state.plugins[i];
              if (plugin.spec.view)
                this.pluginViews.push(plugin.spec.view(this));
            }
          } else {
            for (let i = 0; i < this.pluginViews.length; i++) {
              let pluginView = this.pluginViews[i];
              if (pluginView.update)
                pluginView.update(this, prevState);
            }
          }
        }
        someProp(propName, f) {
          let prop = this._props && this._props[propName], value;
          if (prop != null && (value = f ? f(prop) : prop))
            return value;
          for (let i = 0; i < this.directPlugins.length; i++) {
            let prop2 = this.directPlugins[i].props[propName];
            if (prop2 != null && (value = f ? f(prop2) : prop2))
              return value;
          }
          let plugins = this.state.plugins;
          if (plugins)
            for (let i = 0; i < plugins.length; i++) {
              let prop2 = plugins[i].props[propName];
              if (prop2 != null && (value = f ? f(prop2) : prop2))
                return value;
            }
        }
        hasFocus() {
          return this.root.activeElement == this.dom;
        }
        focus() {
          this.domObserver.stop();
          if (this.editable)
            focusPreventScroll(this.dom);
          selectionToDOM(this);
          this.domObserver.start();
        }
        get root() {
          let cached = this._root;
          if (cached == null)
            for (let search = this.dom.parentNode; search; search = search.parentNode) {
              if (search.nodeType == 9 || search.nodeType == 11 && search.host) {
                if (!search.getSelection)
                  Object.getPrototypeOf(search).getSelection = () => search.ownerDocument.getSelection();
                return this._root = search;
              }
            }
          return cached || document;
        }
        posAtCoords(coords) {
          return posAtCoords(this, coords);
        }
        coordsAtPos(pos, side = 1) {
          return coordsAtPos(this, pos, side);
        }
        domAtPos(pos, side = 0) {
          return this.docView.domFromPos(pos, side);
        }
        nodeDOM(pos) {
          let desc = this.docView.descAt(pos);
          return desc ? desc.nodeDOM : null;
        }
        posAtDOM(node, offset, bias = -1) {
          let pos = this.docView.posFromDOM(node, offset, bias);
          if (pos == null)
            throw new RangeError("DOM position not inside the editor");
          return pos;
        }
        endOfTextblock(dir, state) {
          return endOfTextblock(this, state || this.state, dir);
        }
        destroy() {
          if (!this.docView)
            return;
          destroyInput(this);
          this.destroyPluginViews();
          if (this.mounted) {
            this.docView.update(this.state.doc, [], viewDecorations(this), this);
            this.dom.textContent = "";
          } else if (this.dom.parentNode) {
            this.dom.parentNode.removeChild(this.dom);
          }
          this.docView.destroy();
          this.docView = null;
        }
        get isDestroyed() {
          return this.docView == null;
        }
        dispatchEvent(event) {
          return dispatchEvent(this, event);
        }
        dispatch(tr) {
          let dispatchTransaction = this._props.dispatchTransaction;
          if (dispatchTransaction)
            dispatchTransaction.call(this, tr);
          else
            this.updateState(this.state.apply(tr));
        }
        domSelection() {
          return this.root.getSelection();
        }
      };
    }
  });

  // node_modules/w3c-keyname/index.es.js
  function keyName(event) {
    var ignoreKey = brokenModifierNames && (event.ctrlKey || event.altKey || event.metaKey) || ie2 && event.shiftKey && event.key && event.key.length == 1 || event.key == "Unidentified";
    var name = !ignoreKey && event.key || (event.shiftKey ? shift : base)[event.keyCode] || event.key || "Unidentified";
    if (name == "Esc")
      name = "Escape";
    if (name == "Del")
      name = "Delete";
    if (name == "Left")
      name = "ArrowLeft";
    if (name == "Up")
      name = "ArrowUp";
    if (name == "Right")
      name = "ArrowRight";
    if (name == "Down")
      name = "ArrowDown";
    return name;
  }
  var base, shift, chrome2, gecko2, mac2, ie2, brokenModifierNames, i, i, i, code;
  var init_index_es = __esm({
    "node_modules/w3c-keyname/index.es.js"() {
      base = {
        8: "Backspace",
        9: "Tab",
        10: "Enter",
        12: "NumLock",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        44: "PrintScreen",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Meta",
        92: "Meta",
        106: "*",
        107: "+",
        108: ",",
        109: "-",
        110: ".",
        111: "/",
        144: "NumLock",
        145: "ScrollLock",
        160: "Shift",
        161: "Shift",
        162: "Control",
        163: "Control",
        164: "Alt",
        165: "Alt",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
      };
      shift = {
        48: ")",
        49: "!",
        50: "@",
        51: "#",
        52: "$",
        53: "%",
        54: "^",
        55: "&",
        56: "*",
        57: "(",
        59: ":",
        61: "+",
        173: "_",
        186: ":",
        187: "+",
        188: "<",
        189: "_",
        190: ">",
        191: "?",
        192: "~",
        219: "{",
        220: "|",
        221: "}",
        222: '"'
      };
      chrome2 = typeof navigator != "undefined" && /Chrome\/(\d+)/.exec(navigator.userAgent);
      gecko2 = typeof navigator != "undefined" && /Gecko\/\d+/.test(navigator.userAgent);
      mac2 = typeof navigator != "undefined" && /Mac/.test(navigator.platform);
      ie2 = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
      brokenModifierNames = mac2 || chrome2 && +chrome2[1] < 57;
      for (i = 0; i < 10; i++)
        base[48 + i] = base[96 + i] = String(i);
      for (i = 1; i <= 24; i++)
        base[i + 111] = "F" + i;
      for (i = 65; i <= 90; i++) {
        base[i] = String.fromCharCode(i + 32);
        shift[i] = String.fromCharCode(i);
      }
      for (code in base)
        if (!shift.hasOwnProperty(code))
          shift[code] = base[code];
    }
  });

  // node_modules/prosemirror-keymap/dist/index.js
  function normalizeKeyName(name) {
    let parts = name.split(/-(?!$)/), result = parts[parts.length - 1];
    if (result == "Space")
      result = " ";
    let alt, ctrl, shift2, meta;
    for (let i = 0; i < parts.length - 1; i++) {
      let mod = parts[i];
      if (/^(cmd|meta|m)$/i.test(mod))
        meta = true;
      else if (/^a(lt)?$/i.test(mod))
        alt = true;
      else if (/^(c|ctrl|control)$/i.test(mod))
        ctrl = true;
      else if (/^s(hift)?$/i.test(mod))
        shift2 = true;
      else if (/^mod$/i.test(mod)) {
        if (mac3)
          meta = true;
        else
          ctrl = true;
      } else
        throw new Error("Unrecognized modifier name: " + mod);
    }
    if (alt)
      result = "Alt-" + result;
    if (ctrl)
      result = "Ctrl-" + result;
    if (meta)
      result = "Meta-" + result;
    if (shift2)
      result = "Shift-" + result;
    return result;
  }
  function normalize(map2) {
    let copy2 = /* @__PURE__ */ Object.create(null);
    for (let prop in map2)
      copy2[normalizeKeyName(prop)] = map2[prop];
    return copy2;
  }
  function modifiers(name, event, shift2) {
    if (event.altKey)
      name = "Alt-" + name;
    if (event.ctrlKey)
      name = "Ctrl-" + name;
    if (event.metaKey)
      name = "Meta-" + name;
    if (shift2 !== false && event.shiftKey)
      name = "Shift-" + name;
    return name;
  }
  function keymap(bindings) {
    return new Plugin({ props: { handleKeyDown: keydownHandler(bindings) } });
  }
  function keydownHandler(bindings) {
    let map2 = normalize(bindings);
    return function(view, event) {
      let name = keyName(event), isChar = name.length == 1 && name != " ", baseName;
      let direct = map2[modifiers(name, event, !isChar)];
      if (direct && direct(view.state, view.dispatch, view))
        return true;
      if (isChar && (event.shiftKey || event.altKey || event.metaKey || name.charCodeAt(0) > 127) && (baseName = base[event.keyCode]) && baseName != name) {
        let fromCode = map2[modifiers(baseName, event, true)];
        if (fromCode && fromCode(view.state, view.dispatch, view))
          return true;
      } else if (isChar && event.shiftKey) {
        let withShift = map2[modifiers(name, event, true)];
        if (withShift && withShift(view.state, view.dispatch, view))
          return true;
      }
      return false;
    };
  }
  var mac3;
  var init_dist6 = __esm({
    "node_modules/prosemirror-keymap/dist/index.js"() {
      init_index_es();
      init_dist4();
      mac3 = typeof navigator != "undefined" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : false;
    }
  });

  // node_modules/prosemirror-commands/dist/index.js
  function textblockAt(node, side, only = false) {
    for (let scan = node; scan; scan = side == "start" ? scan.firstChild : scan.lastChild) {
      if (scan.isTextblock)
        return true;
      if (only && scan.childCount != 1)
        return false;
    }
    return false;
  }
  function findCutBefore($pos) {
    if (!$pos.parent.type.spec.isolating)
      for (let i = $pos.depth - 1; i >= 0; i--) {
        if ($pos.index(i) > 0)
          return $pos.doc.resolve($pos.before(i + 1));
        if ($pos.node(i).type.spec.isolating)
          break;
      }
    return null;
  }
  function findCutAfter($pos) {
    if (!$pos.parent.type.spec.isolating)
      for (let i = $pos.depth - 1; i >= 0; i--) {
        let parent = $pos.node(i);
        if ($pos.index(i) + 1 < parent.childCount)
          return $pos.doc.resolve($pos.after(i + 1));
        if (parent.type.spec.isolating)
          break;
      }
    return null;
  }
  function defaultBlockAt(match) {
    for (let i = 0; i < match.edgeCount; i++) {
      let { type } = match.edge(i);
      if (type.isTextblock && !type.hasRequiredAttrs())
        return type;
    }
    return null;
  }
  function joinMaybeClear(state, $pos, dispatch) {
    let before = $pos.nodeBefore, after = $pos.nodeAfter, index = $pos.index();
    if (!before || !after || !before.type.compatibleContent(after.type))
      return false;
    if (!before.content.size && $pos.parent.canReplace(index - 1, index)) {
      if (dispatch)
        dispatch(state.tr.delete($pos.pos - before.nodeSize, $pos.pos).scrollIntoView());
      return true;
    }
    if (!$pos.parent.canReplace(index, index + 1) || !(after.isTextblock || canJoin(state.doc, $pos.pos)))
      return false;
    if (dispatch)
      dispatch(state.tr.clearIncompatible($pos.pos, before.type, before.contentMatchAt(before.childCount)).join($pos.pos).scrollIntoView());
    return true;
  }
  function deleteBarrier(state, $cut, dispatch) {
    let before = $cut.nodeBefore, after = $cut.nodeAfter, conn, match;
    if (before.type.spec.isolating || after.type.spec.isolating)
      return false;
    if (joinMaybeClear(state, $cut, dispatch))
      return true;
    let canDelAfter = $cut.parent.canReplace($cut.index(), $cut.index() + 1);
    if (canDelAfter && (conn = (match = before.contentMatchAt(before.childCount)).findWrapping(after.type)) && match.matchType(conn[0] || after.type).validEnd) {
      if (dispatch) {
        let end = $cut.pos + after.nodeSize, wrap2 = Fragment.empty;
        for (let i = conn.length - 1; i >= 0; i--)
          wrap2 = Fragment.from(conn[i].create(null, wrap2));
        wrap2 = Fragment.from(before.copy(wrap2));
        let tr = state.tr.step(new ReplaceAroundStep($cut.pos - 1, end, $cut.pos, end, new Slice(wrap2, 1, 0), conn.length, true));
        let joinAt = end + 2 * conn.length;
        if (canJoin(tr.doc, joinAt))
          tr.join(joinAt);
        dispatch(tr.scrollIntoView());
      }
      return true;
    }
    let selAfter = Selection.findFrom($cut, 1);
    let range2 = selAfter && selAfter.$from.blockRange(selAfter.$to), target = range2 && liftTarget(range2);
    if (target != null && target >= $cut.depth) {
      if (dispatch)
        dispatch(state.tr.lift(range2, target).scrollIntoView());
      return true;
    }
    if (canDelAfter && textblockAt(after, "start", true) && textblockAt(before, "end")) {
      let at = before, wrap2 = [];
      for (; ; ) {
        wrap2.push(at);
        if (at.isTextblock)
          break;
        at = at.lastChild;
      }
      let afterText = after, afterDepth = 1;
      for (; !afterText.isTextblock; afterText = afterText.firstChild)
        afterDepth++;
      if (at.canReplace(at.childCount, at.childCount, afterText.content)) {
        if (dispatch) {
          let end = Fragment.empty;
          for (let i = wrap2.length - 1; i >= 0; i--)
            end = Fragment.from(wrap2[i].copy(end));
          let tr = state.tr.step(new ReplaceAroundStep($cut.pos - wrap2.length, $cut.pos + after.nodeSize, $cut.pos + afterDepth, $cut.pos + after.nodeSize - afterDepth, new Slice(end, wrap2.length, 0), 0, true));
          dispatch(tr.scrollIntoView());
        }
        return true;
      }
    }
    return false;
  }
  function selectTextblockSide(side) {
    return function(state, dispatch) {
      let sel = state.selection, $pos = side < 0 ? sel.$from : sel.$to;
      let depth = $pos.depth;
      while ($pos.node(depth).isInline) {
        if (!depth)
          return false;
        depth--;
      }
      if (!$pos.node(depth).isTextblock)
        return false;
      if (dispatch)
        dispatch(state.tr.setSelection(TextSelection.create(state.doc, side < 0 ? $pos.start(depth) : $pos.end(depth))));
      return true;
    };
  }
  function wrapIn(nodeType, attrs = null) {
    return function(state, dispatch) {
      let { $from, $to } = state.selection;
      let range2 = $from.blockRange($to), wrapping = range2 && findWrapping(range2, nodeType, attrs);
      if (!wrapping)
        return false;
      if (dispatch)
        dispatch(state.tr.wrap(range2, wrapping).scrollIntoView());
      return true;
    };
  }
  function setBlockType2(nodeType, attrs = null) {
    return function(state, dispatch) {
      let { from: from2, to } = state.selection;
      let applicable = false;
      state.doc.nodesBetween(from2, to, (node, pos) => {
        if (applicable)
          return false;
        if (!node.isTextblock || node.hasMarkup(nodeType, attrs))
          return;
        if (node.type == nodeType) {
          applicable = true;
        } else {
          let $pos = state.doc.resolve(pos), index = $pos.index();
          applicable = $pos.parent.canReplaceWith(index, index + 1, nodeType);
        }
      });
      if (!applicable)
        return false;
      if (dispatch)
        dispatch(state.tr.setBlockType(from2, to, nodeType, attrs).scrollIntoView());
      return true;
    };
  }
  function chainCommands(...commands2) {
    return function(state, dispatch, view) {
      for (let i = 0; i < commands2.length; i++)
        if (commands2[i](state, dispatch, view))
          return true;
      return false;
    };
  }
  var deleteSelection, joinBackward, selectNodeBackward, joinForward, selectNodeForward, lift2, newlineInCode, exitCode, createParagraphNear, liftEmptyBlock, splitBlock, selectParentNode, selectAll, selectTextblockStart, selectTextblockEnd, backspace, del, pcBaseKeymap, macBaseKeymap, mac4;
  var init_dist7 = __esm({
    "node_modules/prosemirror-commands/dist/index.js"() {
      init_dist3();
      init_dist2();
      init_dist4();
      deleteSelection = (state, dispatch) => {
        if (state.selection.empty)
          return false;
        if (dispatch)
          dispatch(state.tr.deleteSelection().scrollIntoView());
        return true;
      };
      joinBackward = (state, dispatch, view) => {
        let { $cursor } = state.selection;
        if (!$cursor || (view ? !view.endOfTextblock("backward", state) : $cursor.parentOffset > 0))
          return false;
        let $cut = findCutBefore($cursor);
        if (!$cut) {
          let range2 = $cursor.blockRange(), target = range2 && liftTarget(range2);
          if (target == null)
            return false;
          if (dispatch)
            dispatch(state.tr.lift(range2, target).scrollIntoView());
          return true;
        }
        let before = $cut.nodeBefore;
        if (!before.type.spec.isolating && deleteBarrier(state, $cut, dispatch))
          return true;
        if ($cursor.parent.content.size == 0 && (textblockAt(before, "end") || NodeSelection.isSelectable(before))) {
          let delStep = replaceStep(state.doc, $cursor.before(), $cursor.after(), Slice.empty);
          if (delStep && delStep.slice.size < delStep.to - delStep.from) {
            if (dispatch) {
              let tr = state.tr.step(delStep);
              tr.setSelection(textblockAt(before, "end") ? Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos, -1)), -1) : NodeSelection.create(tr.doc, $cut.pos - before.nodeSize));
              dispatch(tr.scrollIntoView());
            }
            return true;
          }
        }
        if (before.isAtom && $cut.depth == $cursor.depth - 1) {
          if (dispatch)
            dispatch(state.tr.delete($cut.pos - before.nodeSize, $cut.pos).scrollIntoView());
          return true;
        }
        return false;
      };
      selectNodeBackward = (state, dispatch, view) => {
        let { $head, empty: empty2 } = state.selection, $cut = $head;
        if (!empty2)
          return false;
        if ($head.parent.isTextblock) {
          if (view ? !view.endOfTextblock("backward", state) : $head.parentOffset > 0)
            return false;
          $cut = findCutBefore($head);
        }
        let node = $cut && $cut.nodeBefore;
        if (!node || !NodeSelection.isSelectable(node))
          return false;
        if (dispatch)
          dispatch(state.tr.setSelection(NodeSelection.create(state.doc, $cut.pos - node.nodeSize)).scrollIntoView());
        return true;
      };
      joinForward = (state, dispatch, view) => {
        let { $cursor } = state.selection;
        if (!$cursor || (view ? !view.endOfTextblock("forward", state) : $cursor.parentOffset < $cursor.parent.content.size))
          return false;
        let $cut = findCutAfter($cursor);
        if (!$cut)
          return false;
        let after = $cut.nodeAfter;
        if (deleteBarrier(state, $cut, dispatch))
          return true;
        if ($cursor.parent.content.size == 0 && (textblockAt(after, "start") || NodeSelection.isSelectable(after))) {
          let delStep = replaceStep(state.doc, $cursor.before(), $cursor.after(), Slice.empty);
          if (delStep && delStep.slice.size < delStep.to - delStep.from) {
            if (dispatch) {
              let tr = state.tr.step(delStep);
              tr.setSelection(textblockAt(after, "start") ? Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos)), 1) : NodeSelection.create(tr.doc, tr.mapping.map($cut.pos)));
              dispatch(tr.scrollIntoView());
            }
            return true;
          }
        }
        if (after.isAtom && $cut.depth == $cursor.depth - 1) {
          if (dispatch)
            dispatch(state.tr.delete($cut.pos, $cut.pos + after.nodeSize).scrollIntoView());
          return true;
        }
        return false;
      };
      selectNodeForward = (state, dispatch, view) => {
        let { $head, empty: empty2 } = state.selection, $cut = $head;
        if (!empty2)
          return false;
        if ($head.parent.isTextblock) {
          if (view ? !view.endOfTextblock("forward", state) : $head.parentOffset < $head.parent.content.size)
            return false;
          $cut = findCutAfter($head);
        }
        let node = $cut && $cut.nodeAfter;
        if (!node || !NodeSelection.isSelectable(node))
          return false;
        if (dispatch)
          dispatch(state.tr.setSelection(NodeSelection.create(state.doc, $cut.pos)).scrollIntoView());
        return true;
      };
      lift2 = (state, dispatch) => {
        let { $from, $to } = state.selection;
        let range2 = $from.blockRange($to), target = range2 && liftTarget(range2);
        if (target == null)
          return false;
        if (dispatch)
          dispatch(state.tr.lift(range2, target).scrollIntoView());
        return true;
      };
      newlineInCode = (state, dispatch) => {
        let { $head, $anchor } = state.selection;
        if (!$head.parent.type.spec.code || !$head.sameParent($anchor))
          return false;
        if (dispatch)
          dispatch(state.tr.insertText("\n").scrollIntoView());
        return true;
      };
      exitCode = (state, dispatch) => {
        let { $head, $anchor } = state.selection;
        if (!$head.parent.type.spec.code || !$head.sameParent($anchor))
          return false;
        let above = $head.node(-1), after = $head.indexAfter(-1), type = defaultBlockAt(above.contentMatchAt(after));
        if (!type || !above.canReplaceWith(after, after, type))
          return false;
        if (dispatch) {
          let pos = $head.after(), tr = state.tr.replaceWith(pos, pos, type.createAndFill());
          tr.setSelection(Selection.near(tr.doc.resolve(pos), 1));
          dispatch(tr.scrollIntoView());
        }
        return true;
      };
      createParagraphNear = (state, dispatch) => {
        let sel = state.selection, { $from, $to } = sel;
        if (sel instanceof AllSelection || $from.parent.inlineContent || $to.parent.inlineContent)
          return false;
        let type = defaultBlockAt($to.parent.contentMatchAt($to.indexAfter()));
        if (!type || !type.isTextblock)
          return false;
        if (dispatch) {
          let side = (!$from.parentOffset && $to.index() < $to.parent.childCount ? $from : $to).pos;
          let tr = state.tr.insert(side, type.createAndFill());
          tr.setSelection(TextSelection.create(tr.doc, side + 1));
          dispatch(tr.scrollIntoView());
        }
        return true;
      };
      liftEmptyBlock = (state, dispatch) => {
        let { $cursor } = state.selection;
        if (!$cursor || $cursor.parent.content.size)
          return false;
        if ($cursor.depth > 1 && $cursor.after() != $cursor.end(-1)) {
          let before = $cursor.before();
          if (canSplit(state.doc, before)) {
            if (dispatch)
              dispatch(state.tr.split(before).scrollIntoView());
            return true;
          }
        }
        let range2 = $cursor.blockRange(), target = range2 && liftTarget(range2);
        if (target == null)
          return false;
        if (dispatch)
          dispatch(state.tr.lift(range2, target).scrollIntoView());
        return true;
      };
      splitBlock = (state, dispatch) => {
        let { $from, $to } = state.selection;
        if (state.selection instanceof NodeSelection && state.selection.node.isBlock) {
          if (!$from.parentOffset || !canSplit(state.doc, $from.pos))
            return false;
          if (dispatch)
            dispatch(state.tr.split($from.pos).scrollIntoView());
          return true;
        }
        if (!$from.parent.isBlock)
          return false;
        if (dispatch) {
          let atEnd = $to.parentOffset == $to.parent.content.size;
          let tr = state.tr;
          if (state.selection instanceof TextSelection || state.selection instanceof AllSelection)
            tr.deleteSelection();
          let deflt = $from.depth == 0 ? null : defaultBlockAt($from.node(-1).contentMatchAt($from.indexAfter(-1)));
          let types = atEnd && deflt ? [{ type: deflt }] : void 0;
          let can = canSplit(tr.doc, tr.mapping.map($from.pos), 1, types);
          if (!types && !can && canSplit(tr.doc, tr.mapping.map($from.pos), 1, deflt ? [{ type: deflt }] : void 0)) {
            if (deflt)
              types = [{ type: deflt }];
            can = true;
          }
          if (can) {
            tr.split(tr.mapping.map($from.pos), 1, types);
            if (!atEnd && !$from.parentOffset && $from.parent.type != deflt) {
              let first2 = tr.mapping.map($from.before()), $first = tr.doc.resolve(first2);
              if (deflt && $from.node(-1).canReplaceWith($first.index(), $first.index() + 1, deflt))
                tr.setNodeMarkup(tr.mapping.map($from.before()), deflt);
            }
          }
          dispatch(tr.scrollIntoView());
        }
        return true;
      };
      selectParentNode = (state, dispatch) => {
        let { $from, to } = state.selection, pos;
        let same = $from.sharedDepth(to);
        if (same == 0)
          return false;
        pos = $from.before(same);
        if (dispatch)
          dispatch(state.tr.setSelection(NodeSelection.create(state.doc, pos)));
        return true;
      };
      selectAll = (state, dispatch) => {
        if (dispatch)
          dispatch(state.tr.setSelection(new AllSelection(state.doc)));
        return true;
      };
      selectTextblockStart = selectTextblockSide(-1);
      selectTextblockEnd = selectTextblockSide(1);
      backspace = chainCommands(deleteSelection, joinBackward, selectNodeBackward);
      del = chainCommands(deleteSelection, joinForward, selectNodeForward);
      pcBaseKeymap = {
        "Enter": chainCommands(newlineInCode, createParagraphNear, liftEmptyBlock, splitBlock),
        "Mod-Enter": exitCode,
        "Backspace": backspace,
        "Mod-Backspace": backspace,
        "Shift-Backspace": backspace,
        "Delete": del,
        "Mod-Delete": del,
        "Mod-a": selectAll
      };
      macBaseKeymap = {
        "Ctrl-h": pcBaseKeymap["Backspace"],
        "Alt-Backspace": pcBaseKeymap["Mod-Backspace"],
        "Ctrl-d": pcBaseKeymap["Delete"],
        "Ctrl-Alt-Backspace": pcBaseKeymap["Mod-Delete"],
        "Alt-Delete": pcBaseKeymap["Mod-Delete"],
        "Alt-d": pcBaseKeymap["Mod-Delete"],
        "Ctrl-a": selectTextblockStart,
        "Ctrl-e": selectTextblockEnd
      };
      for (let key in pcBaseKeymap)
        macBaseKeymap[key] = pcBaseKeymap[key];
      mac4 = typeof navigator != "undefined" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os != "undefined" && os.platform ? os.platform() == "darwin" : false;
    }
  });

  // node_modules/prosemirror-schema-list/dist/index.js
  function wrapInList(listType, attrs = null) {
    return function(state, dispatch) {
      let { $from, $to } = state.selection;
      let range2 = $from.blockRange($to), doJoin = false, outerRange = range2;
      if (!range2)
        return false;
      if (range2.depth >= 2 && $from.node(range2.depth - 1).type.compatibleContent(listType) && range2.startIndex == 0) {
        if ($from.index(range2.depth - 1) == 0)
          return false;
        let $insert = state.doc.resolve(range2.start - 2);
        outerRange = new NodeRange($insert, $insert, range2.depth);
        if (range2.endIndex < range2.parent.childCount)
          range2 = new NodeRange($from, state.doc.resolve($to.end(range2.depth)), range2.depth);
        doJoin = true;
      }
      let wrap2 = findWrapping(outerRange, listType, attrs, range2);
      if (!wrap2)
        return false;
      if (dispatch)
        dispatch(doWrapInList(state.tr, range2, wrap2, doJoin, listType).scrollIntoView());
      return true;
    };
  }
  function doWrapInList(tr, range2, wrappers, joinBefore, listType) {
    let content = Fragment.empty;
    for (let i = wrappers.length - 1; i >= 0; i--)
      content = Fragment.from(wrappers[i].type.create(wrappers[i].attrs, content));
    tr.step(new ReplaceAroundStep(range2.start - (joinBefore ? 2 : 0), range2.end, range2.start, range2.end, new Slice(content, 0, 0), wrappers.length, true));
    let found2 = 0;
    for (let i = 0; i < wrappers.length; i++)
      if (wrappers[i].type == listType)
        found2 = i + 1;
    let splitDepth = wrappers.length - found2;
    let splitPos = range2.start + wrappers.length - (joinBefore ? 2 : 0), parent = range2.parent;
    for (let i = range2.startIndex, e = range2.endIndex, first2 = true; i < e; i++, first2 = false) {
      if (!first2 && canSplit(tr.doc, splitPos, splitDepth)) {
        tr.split(splitPos, splitDepth);
        splitPos += 2 * splitDepth;
      }
      splitPos += parent.child(i).nodeSize;
    }
    return tr;
  }
  function liftListItem(itemType) {
    return function(state, dispatch) {
      let { $from, $to } = state.selection;
      let range2 = $from.blockRange($to, (node) => node.childCount > 0 && node.firstChild.type == itemType);
      if (!range2)
        return false;
      if (!dispatch)
        return true;
      if ($from.node(range2.depth - 1).type == itemType)
        return liftToOuterList(state, dispatch, itemType, range2);
      else
        return liftOutOfList(state, dispatch, range2);
    };
  }
  function liftToOuterList(state, dispatch, itemType, range2) {
    let tr = state.tr, end = range2.end, endOfList = range2.$to.end(range2.depth);
    if (end < endOfList) {
      tr.step(new ReplaceAroundStep(end - 1, endOfList, end, endOfList, new Slice(Fragment.from(itemType.create(null, range2.parent.copy())), 1, 0), 1, true));
      range2 = new NodeRange(tr.doc.resolve(range2.$from.pos), tr.doc.resolve(endOfList), range2.depth);
    }
    dispatch(tr.lift(range2, liftTarget(range2)).scrollIntoView());
    return true;
  }
  function liftOutOfList(state, dispatch, range2) {
    let tr = state.tr, list = range2.parent;
    for (let pos = range2.end, i = range2.endIndex - 1, e = range2.startIndex; i > e; i--) {
      pos -= list.child(i).nodeSize;
      tr.delete(pos - 1, pos + 1);
    }
    let $start = tr.doc.resolve(range2.start), item = $start.nodeAfter;
    if (tr.mapping.map(range2.end) != range2.start + $start.nodeAfter.nodeSize)
      return false;
    let atStart = range2.startIndex == 0, atEnd = range2.endIndex == list.childCount;
    let parent = $start.node(-1), indexBefore = $start.index(-1);
    if (!parent.canReplace(indexBefore + (atStart ? 0 : 1), indexBefore + 1, item.content.append(atEnd ? Fragment.empty : Fragment.from(list))))
      return false;
    let start = $start.pos, end = start + item.nodeSize;
    tr.step(new ReplaceAroundStep(start - (atStart ? 1 : 0), end + (atEnd ? 1 : 0), start + 1, end - 1, new Slice((atStart ? Fragment.empty : Fragment.from(list.copy(Fragment.empty))).append(atEnd ? Fragment.empty : Fragment.from(list.copy(Fragment.empty))), atStart ? 0 : 1, atEnd ? 0 : 1), atStart ? 0 : 1));
    dispatch(tr.scrollIntoView());
    return true;
  }
  function sinkListItem(itemType) {
    return function(state, dispatch) {
      let { $from, $to } = state.selection;
      let range2 = $from.blockRange($to, (node) => node.childCount > 0 && node.firstChild.type == itemType);
      if (!range2)
        return false;
      let startIndex = range2.startIndex;
      if (startIndex == 0)
        return false;
      let parent = range2.parent, nodeBefore = parent.child(startIndex - 1);
      if (nodeBefore.type != itemType)
        return false;
      if (dispatch) {
        let nestedBefore = nodeBefore.lastChild && nodeBefore.lastChild.type == parent.type;
        let inner = Fragment.from(nestedBefore ? itemType.create() : null);
        let slice2 = new Slice(Fragment.from(itemType.create(null, Fragment.from(parent.type.create(null, inner)))), nestedBefore ? 3 : 1, 0);
        let before = range2.start, after = range2.end;
        dispatch(state.tr.step(new ReplaceAroundStep(before - (nestedBefore ? 3 : 1), after, before, after, slice2, 1, true)).scrollIntoView());
      }
      return true;
    };
  }
  var init_dist8 = __esm({
    "node_modules/prosemirror-schema-list/dist/index.js"() {
      init_dist3();
      init_dist2();
    }
  });

  // node_modules/@tiptap/core/dist/tiptap-core.esm.js
  function createChainableState(config) {
    const { state, transaction } = config;
    let { selection } = transaction;
    let { doc: doc4 } = transaction;
    let { storedMarks } = transaction;
    return {
      ...state,
      apply: state.apply.bind(state),
      applyTransaction: state.applyTransaction.bind(state),
      filterTransaction: state.filterTransaction,
      plugins: state.plugins,
      schema: state.schema,
      reconfigure: state.reconfigure.bind(state),
      toJSON: state.toJSON.bind(state),
      get storedMarks() {
        return storedMarks;
      },
      get selection() {
        return selection;
      },
      get doc() {
        return doc4;
      },
      get tr() {
        selection = transaction.selection;
        doc4 = transaction.doc;
        storedMarks = transaction.storedMarks;
        return transaction;
      }
    };
  }
  function getExtensionField(extension, field, context) {
    if (extension.config[field] === void 0 && extension.parent) {
      return getExtensionField(extension.parent, field, context);
    }
    if (typeof extension.config[field] === "function") {
      const value = extension.config[field].bind({
        ...context,
        parent: extension.parent ? getExtensionField(extension.parent, field, context) : null
      });
      return value;
    }
    return extension.config[field];
  }
  function splitExtensions(extensions2) {
    const baseExtensions = extensions2.filter((extension) => extension.type === "extension");
    const nodeExtensions = extensions2.filter((extension) => extension.type === "node");
    const markExtensions = extensions2.filter((extension) => extension.type === "mark");
    return {
      baseExtensions,
      nodeExtensions,
      markExtensions
    };
  }
  function getAttributesFromExtensions(extensions2) {
    const extensionAttributes = [];
    const { nodeExtensions, markExtensions } = splitExtensions(extensions2);
    const nodeAndMarkExtensions = [...nodeExtensions, ...markExtensions];
    const defaultAttribute = {
      default: null,
      rendered: true,
      renderHTML: null,
      parseHTML: null,
      keepOnSplit: true,
      isRequired: false
    };
    extensions2.forEach((extension) => {
      const context = {
        name: extension.name,
        options: extension.options,
        storage: extension.storage
      };
      const addGlobalAttributes = getExtensionField(extension, "addGlobalAttributes", context);
      if (!addGlobalAttributes) {
        return;
      }
      const globalAttributes = addGlobalAttributes();
      globalAttributes.forEach((globalAttribute) => {
        globalAttribute.types.forEach((type) => {
          Object.entries(globalAttribute.attributes).forEach(([name, attribute]) => {
            extensionAttributes.push({
              type,
              name,
              attribute: {
                ...defaultAttribute,
                ...attribute
              }
            });
          });
        });
      });
    });
    nodeAndMarkExtensions.forEach((extension) => {
      const context = {
        name: extension.name,
        options: extension.options,
        storage: extension.storage
      };
      const addAttributes = getExtensionField(extension, "addAttributes", context);
      if (!addAttributes) {
        return;
      }
      const attributes = addAttributes();
      Object.entries(attributes).forEach(([name, attribute]) => {
        const mergedAttr = {
          ...defaultAttribute,
          ...attribute
        };
        if (attribute.isRequired && attribute.default === void 0) {
          delete mergedAttr.default;
        }
        extensionAttributes.push({
          type: extension.name,
          name,
          attribute: mergedAttr
        });
      });
    });
    return extensionAttributes;
  }
  function getNodeType(nameOrType, schema) {
    if (typeof nameOrType === "string") {
      if (!schema.nodes[nameOrType]) {
        throw Error(`There is no node type named '${nameOrType}'. Maybe you forgot to add the extension?`);
      }
      return schema.nodes[nameOrType];
    }
    return nameOrType;
  }
  function mergeAttributes(...objects) {
    return objects.filter((item) => !!item).reduce((items, item) => {
      const mergedAttributes = { ...items };
      Object.entries(item).forEach(([key, value]) => {
        const exists = mergedAttributes[key];
        if (!exists) {
          mergedAttributes[key] = value;
          return;
        }
        if (key === "class") {
          mergedAttributes[key] = [mergedAttributes[key], value].join(" ");
        } else if (key === "style") {
          mergedAttributes[key] = [mergedAttributes[key], value].join("; ");
        } else {
          mergedAttributes[key] = value;
        }
      });
      return mergedAttributes;
    }, {});
  }
  function getRenderedAttributes(nodeOrMark, extensionAttributes) {
    return extensionAttributes.filter((item) => item.attribute.rendered).map((item) => {
      if (!item.attribute.renderHTML) {
        return {
          [item.name]: nodeOrMark.attrs[item.name]
        };
      }
      return item.attribute.renderHTML(nodeOrMark.attrs) || {};
    }).reduce((attributes, attribute) => mergeAttributes(attributes, attribute), {});
  }
  function isFunction(value) {
    return typeof value === "function";
  }
  function callOrReturn(value, context = void 0, ...props) {
    if (isFunction(value)) {
      if (context) {
        return value.bind(context)(...props);
      }
      return value(...props);
    }
    return value;
  }
  function isEmptyObject(value = {}) {
    return Object.keys(value).length === 0 && value.constructor === Object;
  }
  function fromString(value) {
    if (typeof value !== "string") {
      return value;
    }
    if (value.match(/^[+-]?(?:\d*\.)?\d+$/)) {
      return Number(value);
    }
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    return value;
  }
  function injectExtensionAttributesToParseRule(parseRule, extensionAttributes) {
    if (parseRule.style) {
      return parseRule;
    }
    return {
      ...parseRule,
      getAttrs: (node) => {
        const oldAttributes = parseRule.getAttrs ? parseRule.getAttrs(node) : parseRule.attrs;
        if (oldAttributes === false) {
          return false;
        }
        const newAttributes = extensionAttributes.reduce((items, item) => {
          const value = item.attribute.parseHTML ? item.attribute.parseHTML(node) : fromString(node.getAttribute(item.name));
          if (value === null || value === void 0) {
            return items;
          }
          return {
            ...items,
            [item.name]: value
          };
        }, {});
        return { ...oldAttributes, ...newAttributes };
      }
    };
  }
  function cleanUpSchemaItem(data) {
    return Object.fromEntries(Object.entries(data).filter(([key, value]) => {
      if (key === "attrs" && isEmptyObject(value)) {
        return false;
      }
      return value !== null && value !== void 0;
    }));
  }
  function getSchemaByResolvedExtensions(extensions2) {
    var _a;
    const allAttributes = getAttributesFromExtensions(extensions2);
    const { nodeExtensions, markExtensions } = splitExtensions(extensions2);
    const topNode = (_a = nodeExtensions.find((extension) => getExtensionField(extension, "topNode"))) === null || _a === void 0 ? void 0 : _a.name;
    const nodes = Object.fromEntries(nodeExtensions.map((extension) => {
      const extensionAttributes = allAttributes.filter((attribute) => attribute.type === extension.name);
      const context = {
        name: extension.name,
        options: extension.options,
        storage: extension.storage
      };
      const extraNodeFields = extensions2.reduce((fields, e) => {
        const extendNodeSchema = getExtensionField(e, "extendNodeSchema", context);
        return {
          ...fields,
          ...extendNodeSchema ? extendNodeSchema(extension) : {}
        };
      }, {});
      const schema = cleanUpSchemaItem({
        ...extraNodeFields,
        content: callOrReturn(getExtensionField(extension, "content", context)),
        marks: callOrReturn(getExtensionField(extension, "marks", context)),
        group: callOrReturn(getExtensionField(extension, "group", context)),
        inline: callOrReturn(getExtensionField(extension, "inline", context)),
        atom: callOrReturn(getExtensionField(extension, "atom", context)),
        selectable: callOrReturn(getExtensionField(extension, "selectable", context)),
        draggable: callOrReturn(getExtensionField(extension, "draggable", context)),
        code: callOrReturn(getExtensionField(extension, "code", context)),
        defining: callOrReturn(getExtensionField(extension, "defining", context)),
        isolating: callOrReturn(getExtensionField(extension, "isolating", context)),
        attrs: Object.fromEntries(extensionAttributes.map((extensionAttribute) => {
          var _a2;
          return [extensionAttribute.name, { default: (_a2 = extensionAttribute === null || extensionAttribute === void 0 ? void 0 : extensionAttribute.attribute) === null || _a2 === void 0 ? void 0 : _a2.default }];
        }))
      });
      const parseHTML = callOrReturn(getExtensionField(extension, "parseHTML", context));
      if (parseHTML) {
        schema.parseDOM = parseHTML.map((parseRule) => injectExtensionAttributesToParseRule(parseRule, extensionAttributes));
      }
      const renderHTML = getExtensionField(extension, "renderHTML", context);
      if (renderHTML) {
        schema.toDOM = (node) => renderHTML({
          node,
          HTMLAttributes: getRenderedAttributes(node, extensionAttributes)
        });
      }
      const renderText = getExtensionField(extension, "renderText", context);
      if (renderText) {
        schema.toText = renderText;
      }
      return [extension.name, schema];
    }));
    const marks = Object.fromEntries(markExtensions.map((extension) => {
      const extensionAttributes = allAttributes.filter((attribute) => attribute.type === extension.name);
      const context = {
        name: extension.name,
        options: extension.options,
        storage: extension.storage
      };
      const extraMarkFields = extensions2.reduce((fields, e) => {
        const extendMarkSchema = getExtensionField(e, "extendMarkSchema", context);
        return {
          ...fields,
          ...extendMarkSchema ? extendMarkSchema(extension) : {}
        };
      }, {});
      const schema = cleanUpSchemaItem({
        ...extraMarkFields,
        inclusive: callOrReturn(getExtensionField(extension, "inclusive", context)),
        excludes: callOrReturn(getExtensionField(extension, "excludes", context)),
        group: callOrReturn(getExtensionField(extension, "group", context)),
        spanning: callOrReturn(getExtensionField(extension, "spanning", context)),
        code: callOrReturn(getExtensionField(extension, "code", context)),
        attrs: Object.fromEntries(extensionAttributes.map((extensionAttribute) => {
          var _a2;
          return [extensionAttribute.name, { default: (_a2 = extensionAttribute === null || extensionAttribute === void 0 ? void 0 : extensionAttribute.attribute) === null || _a2 === void 0 ? void 0 : _a2.default }];
        }))
      });
      const parseHTML = callOrReturn(getExtensionField(extension, "parseHTML", context));
      if (parseHTML) {
        schema.parseDOM = parseHTML.map((parseRule) => injectExtensionAttributesToParseRule(parseRule, extensionAttributes));
      }
      const renderHTML = getExtensionField(extension, "renderHTML", context);
      if (renderHTML) {
        schema.toDOM = (mark) => renderHTML({
          mark,
          HTMLAttributes: getRenderedAttributes(mark, extensionAttributes)
        });
      }
      return [extension.name, schema];
    }));
    return new Schema({
      topNode,
      nodes,
      marks
    });
  }
  function getSchemaTypeByName(name, schema) {
    return schema.nodes[name] || schema.marks[name] || null;
  }
  function isExtensionRulesEnabled(extension, enabled) {
    if (Array.isArray(enabled)) {
      return enabled.some((enabledExtension) => {
        const name = typeof enabledExtension === "string" ? enabledExtension : enabledExtension.name;
        return name === extension.name;
      });
    }
    return enabled;
  }
  function isRegExp(value) {
    return Object.prototype.toString.call(value) === "[object RegExp]";
  }
  function run$1(config) {
    var _a;
    const { editor, from: from2, to, text, rules, plugin } = config;
    const { view } = editor;
    if (view.composing) {
      return false;
    }
    const $from = view.state.doc.resolve(from2);
    if ($from.parent.type.spec.code || !!((_a = $from.nodeBefore || $from.nodeAfter) === null || _a === void 0 ? void 0 : _a.marks.find((mark) => mark.type.spec.code))) {
      return false;
    }
    let matched = false;
    const textBefore = getTextContentFromNodes($from) + text;
    rules.forEach((rule) => {
      if (matched) {
        return;
      }
      const match = inputRuleMatcherHandler(textBefore, rule.find);
      if (!match) {
        return;
      }
      const tr = view.state.tr;
      const state = createChainableState({
        state: view.state,
        transaction: tr
      });
      const range2 = {
        from: from2 - (match[0].length - text.length),
        to
      };
      const { commands: commands2, chain, can } = new CommandManager({
        editor,
        state
      });
      const handler = rule.handler({
        state,
        range: range2,
        match,
        commands: commands2,
        chain,
        can
      });
      if (handler === null || !tr.steps.length) {
        return;
      }
      tr.setMeta(plugin, {
        transform: tr,
        from: from2,
        to,
        text
      });
      view.dispatch(tr);
      matched = true;
    });
    return matched;
  }
  function inputRulesPlugin(props) {
    const { editor, rules } = props;
    const plugin = new Plugin({
      state: {
        init() {
          return null;
        },
        apply(tr, prev) {
          const stored = tr.getMeta(plugin);
          if (stored) {
            return stored;
          }
          return tr.selectionSet || tr.docChanged ? null : prev;
        }
      },
      props: {
        handleTextInput(view, from2, to, text) {
          return run$1({
            editor,
            from: from2,
            to,
            text,
            rules,
            plugin
          });
        },
        handleDOMEvents: {
          compositionend: (view) => {
            setTimeout(() => {
              const { $cursor } = view.state.selection;
              if ($cursor) {
                run$1({
                  editor,
                  from: $cursor.pos,
                  to: $cursor.pos,
                  text: "",
                  rules,
                  plugin
                });
              }
            });
            return false;
          }
        },
        handleKeyDown(view, event) {
          if (event.key !== "Enter") {
            return false;
          }
          const { $cursor } = view.state.selection;
          if ($cursor) {
            return run$1({
              editor,
              from: $cursor.pos,
              to: $cursor.pos,
              text: "\n",
              rules,
              plugin
            });
          }
          return false;
        }
      },
      isInputRules: true
    });
    return plugin;
  }
  function isNumber(value) {
    return typeof value === "number";
  }
  function run(config) {
    const { editor, state, from: from2, to, rule } = config;
    const { commands: commands2, chain, can } = new CommandManager({
      editor,
      state
    });
    const handlers2 = [];
    state.doc.nodesBetween(from2, to, (node, pos) => {
      if (!node.isTextblock || node.type.spec.code) {
        return;
      }
      const resolvedFrom = Math.max(from2, pos);
      const resolvedTo = Math.min(to, pos + node.content.size);
      const textToMatch = node.textBetween(resolvedFrom - pos, resolvedTo - pos, void 0, "\uFFFC");
      const matches2 = pasteRuleMatcherHandler(textToMatch, rule.find);
      matches2.forEach((match) => {
        if (match.index === void 0) {
          return;
        }
        const start = resolvedFrom + match.index + 1;
        const end = start + match[0].length;
        const range2 = {
          from: state.tr.mapping.map(start),
          to: state.tr.mapping.map(end)
        };
        const handler = rule.handler({
          state,
          range: range2,
          match,
          commands: commands2,
          chain,
          can
        });
        handlers2.push(handler);
      });
    });
    const success = handlers2.every((handler) => handler !== null);
    return success;
  }
  function pasteRulesPlugin(props) {
    const { editor, rules } = props;
    let dragSourceElement = null;
    let isPastedFromProseMirror = false;
    let isDroppedFromProseMirror = false;
    const plugins = rules.map((rule) => {
      return new Plugin({
        view(view) {
          const handleDragstart = (event) => {
            var _a;
            dragSourceElement = ((_a = view.dom.parentElement) === null || _a === void 0 ? void 0 : _a.contains(event.target)) ? view.dom.parentElement : null;
          };
          window.addEventListener("dragstart", handleDragstart);
          return {
            destroy() {
              window.removeEventListener("dragstart", handleDragstart);
            }
          };
        },
        props: {
          handleDOMEvents: {
            drop: (view) => {
              isDroppedFromProseMirror = dragSourceElement === view.dom.parentElement;
              return false;
            },
            paste: (view, event) => {
              var _a;
              const html = (_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.getData("text/html");
              isPastedFromProseMirror = !!(html === null || html === void 0 ? void 0 : html.includes("data-pm-slice"));
              return false;
            }
          }
        },
        appendTransaction: (transactions, oldState, state) => {
          const transaction = transactions[0];
          const isPaste = transaction.getMeta("uiEvent") === "paste" && !isPastedFromProseMirror;
          const isDrop = transaction.getMeta("uiEvent") === "drop" && !isDroppedFromProseMirror;
          if (!isPaste && !isDrop) {
            return;
          }
          const from2 = oldState.doc.content.findDiffStart(state.doc.content);
          const to = oldState.doc.content.findDiffEnd(state.doc.content);
          if (!isNumber(from2) || !to || from2 === to.b) {
            return;
          }
          const tr = state.tr;
          const chainableState = createChainableState({
            state,
            transaction: tr
          });
          const handler = run({
            editor,
            state: chainableState,
            from: Math.max(from2 - 1, 0),
            to: to.b - 1,
            rule
          });
          if (!handler || !tr.steps.length) {
            return;
          }
          return tr;
        }
      });
    });
    return plugins;
  }
  function findDuplicates(items) {
    const filtered = items.filter((el, index) => items.indexOf(el) !== index);
    return [...new Set(filtered)];
  }
  function getType(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
  }
  function isPlainObject(value) {
    if (getType(value) !== "Object") {
      return false;
    }
    return value.constructor === Object && Object.getPrototypeOf(value) === Object.prototype;
  }
  function mergeDeep(target, source) {
    const output = { ...target };
    if (isPlainObject(target) && isPlainObject(source)) {
      Object.keys(source).forEach((key) => {
        if (isPlainObject(source[key])) {
          if (!(key in target)) {
            Object.assign(output, { [key]: source[key] });
          } else {
            output[key] = mergeDeep(target[key], source[key]);
          }
        } else {
          Object.assign(output, { [key]: source[key] });
        }
      });
    }
    return output;
  }
  function getTextBetween(startNode, range2, options) {
    const { from: from2, to } = range2;
    const { blockSeparator = "\n\n", textSerializers = {} } = options || {};
    let text = "";
    let separated = true;
    startNode.nodesBetween(from2, to, (node, pos, parent, index) => {
      var _a;
      const textSerializer = textSerializers === null || textSerializers === void 0 ? void 0 : textSerializers[node.type.name];
      if (textSerializer) {
        if (node.isBlock && !separated) {
          text += blockSeparator;
          separated = true;
        }
        if (parent) {
          text += textSerializer({
            node,
            pos,
            parent,
            index,
            range: range2
          });
        }
      } else if (node.isText) {
        text += (_a = node === null || node === void 0 ? void 0 : node.text) === null || _a === void 0 ? void 0 : _a.slice(Math.max(from2, pos) - pos, to - pos);
        separated = false;
      } else if (node.isBlock && !separated) {
        text += blockSeparator;
        separated = true;
      }
    });
    return text;
  }
  function getTextSerializersFromSchema(schema) {
    return Object.fromEntries(Object.entries(schema.nodes).filter(([, node]) => node.spec.toText).map(([name, node]) => [name, node.spec.toText]));
  }
  function objectIncludes(object1, object2, options = { strict: true }) {
    const keys2 = Object.keys(object2);
    if (!keys2.length) {
      return true;
    }
    return keys2.every((key) => {
      if (options.strict) {
        return object2[key] === object1[key];
      }
      if (isRegExp(object2[key])) {
        return object2[key].test(object1[key]);
      }
      return object2[key] === object1[key];
    });
  }
  function findMarkInSet(marks, type, attributes = {}) {
    return marks.find((item) => {
      return item.type === type && objectIncludes(item.attrs, attributes);
    });
  }
  function isMarkInSet(marks, type, attributes = {}) {
    return !!findMarkInSet(marks, type, attributes);
  }
  function getMarkRange($pos, type, attributes = {}) {
    if (!$pos || !type) {
      return;
    }
    let start = $pos.parent.childAfter($pos.parentOffset);
    if ($pos.parentOffset === start.offset && start.offset !== 0) {
      start = $pos.parent.childBefore($pos.parentOffset);
    }
    if (!start.node) {
      return;
    }
    const mark = findMarkInSet([...start.node.marks], type, attributes);
    if (!mark) {
      return;
    }
    let startIndex = start.index;
    let startPos = $pos.start() + start.offset;
    let endIndex = startIndex + 1;
    let endPos = startPos + start.node.nodeSize;
    findMarkInSet([...start.node.marks], type, attributes);
    while (startIndex > 0 && mark.isInSet($pos.parent.child(startIndex - 1).marks)) {
      startIndex -= 1;
      startPos -= $pos.parent.child(startIndex).nodeSize;
    }
    while (endIndex < $pos.parent.childCount && isMarkInSet([...$pos.parent.child(endIndex).marks], type, attributes)) {
      endPos += $pos.parent.child(endIndex).nodeSize;
      endIndex += 1;
    }
    return {
      from: startPos,
      to: endPos
    };
  }
  function getMarkType(nameOrType, schema) {
    if (typeof nameOrType === "string") {
      if (!schema.marks[nameOrType]) {
        throw Error(`There is no mark type named '${nameOrType}'. Maybe you forgot to add the extension?`);
      }
      return schema.marks[nameOrType];
    }
    return nameOrType;
  }
  function isTextSelection(value) {
    return value instanceof TextSelection;
  }
  function minMax(value = 0, min = 0, max = 0) {
    return Math.min(Math.max(value, min), max);
  }
  function resolveFocusPosition(doc4, position = null) {
    if (!position) {
      return null;
    }
    const selectionAtStart = Selection.atStart(doc4);
    const selectionAtEnd = Selection.atEnd(doc4);
    if (position === "start" || position === true) {
      return selectionAtStart;
    }
    if (position === "end") {
      return selectionAtEnd;
    }
    const minPos = selectionAtStart.from;
    const maxPos = selectionAtEnd.to;
    if (position === "all") {
      return TextSelection.create(doc4, minMax(0, minPos, maxPos), minMax(doc4.content.size, minPos, maxPos));
    }
    return TextSelection.create(doc4, minMax(position, minPos, maxPos), minMax(position, minPos, maxPos));
  }
  function isiOS() {
    return [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod"
    ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
  }
  function elementFromString(value) {
    const wrappedValue = `<body>${value}</body>`;
    return new window.DOMParser().parseFromString(wrappedValue, "text/html").body;
  }
  function createNodeFromContent(content, schema, options) {
    options = {
      slice: true,
      parseOptions: {},
      ...options
    };
    if (typeof content === "object" && content !== null) {
      try {
        if (Array.isArray(content)) {
          return Fragment.fromArray(content.map((item) => schema.nodeFromJSON(item)));
        }
        return schema.nodeFromJSON(content);
      } catch (error) {
        console.warn("[tiptap warn]: Invalid content.", "Passed value:", content, "Error:", error);
        return createNodeFromContent("", schema, options);
      }
    }
    if (typeof content === "string") {
      const parser = DOMParser.fromSchema(schema);
      return options.slice ? parser.parseSlice(elementFromString(content), options.parseOptions).content : parser.parse(elementFromString(content), options.parseOptions);
    }
    return createNodeFromContent("", schema, options);
  }
  function selectionToInsertionEnd2(tr, startLen, bias) {
    const last = tr.steps.length - 1;
    if (last < startLen) {
      return;
    }
    const step = tr.steps[last];
    if (!(step instanceof ReplaceStep || step instanceof ReplaceAroundStep)) {
      return;
    }
    const map2 = tr.mapping.maps[last];
    let end = 0;
    map2.forEach((_from, _to, _newFrom, newTo) => {
      if (end === 0) {
        end = newTo;
      }
    });
    tr.setSelection(Selection.near(tr.doc.resolve(end), bias));
  }
  function isMacOS() {
    return typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
  }
  function normalizeKeyName2(name) {
    const parts = name.split(/-(?!$)/);
    let result = parts[parts.length - 1];
    if (result === "Space") {
      result = " ";
    }
    let alt;
    let ctrl;
    let shift2;
    let meta;
    for (let i = 0; i < parts.length - 1; i += 1) {
      const mod = parts[i];
      if (/^(cmd|meta|m)$/i.test(mod)) {
        meta = true;
      } else if (/^a(lt)?$/i.test(mod)) {
        alt = true;
      } else if (/^(c|ctrl|control)$/i.test(mod)) {
        ctrl = true;
      } else if (/^s(hift)?$/i.test(mod)) {
        shift2 = true;
      } else if (/^mod$/i.test(mod)) {
        if (isiOS() || isMacOS()) {
          meta = true;
        } else {
          ctrl = true;
        }
      } else {
        throw new Error(`Unrecognized modifier name: ${mod}`);
      }
    }
    if (alt) {
      result = `Alt-${result}`;
    }
    if (ctrl) {
      result = `Ctrl-${result}`;
    }
    if (meta) {
      result = `Meta-${result}`;
    }
    if (shift2) {
      result = `Shift-${result}`;
    }
    return result;
  }
  function isNodeActive(state, typeOrName, attributes = {}) {
    const { from: from2, to, empty: empty2 } = state.selection;
    const type = typeOrName ? getNodeType(typeOrName, state.schema) : null;
    const nodeRanges = [];
    state.doc.nodesBetween(from2, to, (node, pos) => {
      if (node.isText) {
        return;
      }
      const relativeFrom = Math.max(from2, pos);
      const relativeTo = Math.min(to, pos + node.nodeSize);
      nodeRanges.push({
        node,
        from: relativeFrom,
        to: relativeTo
      });
    });
    const selectionRange = to - from2;
    const matchedNodeRanges = nodeRanges.filter((nodeRange) => {
      if (!type) {
        return true;
      }
      return type.name === nodeRange.node.type.name;
    }).filter((nodeRange) => objectIncludes(nodeRange.node.attrs, attributes, { strict: false }));
    if (empty2) {
      return !!matchedNodeRanges.length;
    }
    const range2 = matchedNodeRanges.reduce((sum, nodeRange) => sum + nodeRange.to - nodeRange.from, 0);
    return range2 >= selectionRange;
  }
  function getSchemaTypeNameByName(name, schema) {
    if (schema.nodes[name]) {
      return "node";
    }
    if (schema.marks[name]) {
      return "mark";
    }
    return null;
  }
  function deleteProps(obj, propOrProps) {
    const props = typeof propOrProps === "string" ? [propOrProps] : propOrProps;
    return Object.keys(obj).reduce((newObj, prop) => {
      if (!props.includes(prop)) {
        newObj[prop] = obj[prop];
      }
      return newObj;
    }, {});
  }
  function createDocument(content, schema, parseOptions = {}) {
    return createNodeFromContent(content, schema, { slice: false, parseOptions });
  }
  function getMarkAttributes(state, typeOrName) {
    const type = getMarkType(typeOrName, state.schema);
    const { from: from2, to, empty: empty2 } = state.selection;
    const marks = [];
    if (empty2) {
      if (state.storedMarks) {
        marks.push(...state.storedMarks);
      }
      marks.push(...state.selection.$head.marks());
    } else {
      state.doc.nodesBetween(from2, to, (node) => {
        marks.push(...node.marks);
      });
    }
    const mark = marks.find((markItem) => markItem.type.name === type.name);
    if (!mark) {
      return {};
    }
    return { ...mark.attrs };
  }
  function defaultBlockAt2(match) {
    for (let i = 0; i < match.edgeCount; i += 1) {
      const { type } = match.edge(i);
      if (type.isTextblock && !type.hasRequiredAttrs()) {
        return type;
      }
    }
    return null;
  }
  function getSplittedAttributes(extensionAttributes, typeName, attributes) {
    return Object.fromEntries(Object.entries(attributes).filter(([name]) => {
      const extensionAttribute = extensionAttributes.find((item) => {
        return item.type === typeName && item.name === name;
      });
      if (!extensionAttribute) {
        return false;
      }
      return extensionAttribute.attribute.keepOnSplit;
    }));
  }
  function ensureMarks(state, splittableMarks) {
    const marks = state.storedMarks || state.selection.$to.parentOffset && state.selection.$from.marks();
    if (marks) {
      const filteredMarks = marks.filter((mark) => splittableMarks === null || splittableMarks === void 0 ? void 0 : splittableMarks.includes(mark.type.name));
      state.tr.ensureMarks(filteredMarks);
    }
  }
  function findParentNodeClosestToPos($pos, predicate) {
    for (let i = $pos.depth; i > 0; i -= 1) {
      const node = $pos.node(i);
      if (predicate(node)) {
        return {
          pos: i > 0 ? $pos.before(i) : 0,
          start: $pos.start(i),
          depth: i,
          node
        };
      }
    }
  }
  function findParentNode(predicate) {
    return (selection) => findParentNodeClosestToPos(selection.$from, predicate);
  }
  function isList(name, extensions2) {
    const { nodeExtensions } = splitExtensions(extensions2);
    const extension = nodeExtensions.find((item) => item.name === name);
    if (!extension) {
      return false;
    }
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage
    };
    const group = callOrReturn(getExtensionField(extension, "group", context));
    if (typeof group !== "string") {
      return false;
    }
    return group.split(" ").includes("list");
  }
  function isMarkActive(state, typeOrName, attributes = {}) {
    const { empty: empty2, ranges } = state.selection;
    const type = typeOrName ? getMarkType(typeOrName, state.schema) : null;
    if (empty2) {
      return !!(state.storedMarks || state.selection.$from.marks()).filter((mark) => {
        if (!type) {
          return true;
        }
        return type.name === mark.type.name;
      }).find((mark) => objectIncludes(mark.attrs, attributes, { strict: false }));
    }
    let selectionRange = 0;
    const markRanges = [];
    ranges.forEach(({ $from, $to }) => {
      const from2 = $from.pos;
      const to = $to.pos;
      state.doc.nodesBetween(from2, to, (node, pos) => {
        if (!node.isText && !node.marks.length) {
          return;
        }
        const relativeFrom = Math.max(from2, pos);
        const relativeTo = Math.min(to, pos + node.nodeSize);
        const range3 = relativeTo - relativeFrom;
        selectionRange += range3;
        markRanges.push(...node.marks.map((mark) => ({
          mark,
          from: relativeFrom,
          to: relativeTo
        })));
      });
    });
    if (selectionRange === 0) {
      return false;
    }
    const matchedRange = markRanges.filter((markRange) => {
      if (!type) {
        return true;
      }
      return type.name === markRange.mark.type.name;
    }).filter((markRange) => objectIncludes(markRange.mark.attrs, attributes, { strict: false })).reduce((sum, markRange) => sum + markRange.to - markRange.from, 0);
    const excludedRange = markRanges.filter((markRange) => {
      if (!type) {
        return true;
      }
      return markRange.mark.type !== type && markRange.mark.type.excludes(type);
    }).reduce((sum, markRange) => sum + markRange.to - markRange.from, 0);
    const range2 = matchedRange > 0 ? matchedRange + excludedRange : matchedRange;
    return range2 >= selectionRange;
  }
  function getNodeAttributes(state, typeOrName) {
    const type = getNodeType(typeOrName, state.schema);
    const { from: from2, to } = state.selection;
    const nodes = [];
    state.doc.nodesBetween(from2, to, (node2) => {
      nodes.push(node2);
    });
    const node = nodes.reverse().find((nodeItem) => nodeItem.type.name === type.name);
    if (!node) {
      return {};
    }
    return { ...node.attrs };
  }
  function getAttributes(state, typeOrName) {
    const schemaType = getSchemaTypeNameByName(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
    if (schemaType === "node") {
      return getNodeAttributes(state, typeOrName);
    }
    if (schemaType === "mark") {
      return getMarkAttributes(state, typeOrName);
    }
    return {};
  }
  function getHTMLFromFragment(fragment, schema) {
    const documentFragment = DOMSerializer.fromSchema(schema).serializeFragment(fragment);
    const temporaryDocument = document.implementation.createHTMLDocument();
    const container = temporaryDocument.createElement("div");
    container.appendChild(documentFragment);
    return container.innerHTML;
  }
  function getText(node, options) {
    const range2 = {
      from: 0,
      to: node.content.size
    };
    return getTextBetween(node, range2, options);
  }
  function isActive(state, name, attributes = {}) {
    if (!name) {
      return isNodeActive(state, null, attributes) || isMarkActive(state, null, attributes);
    }
    const schemaType = getSchemaTypeNameByName(name, state.schema);
    if (schemaType === "node") {
      return isNodeActive(state, name, attributes);
    }
    if (schemaType === "mark") {
      return isMarkActive(state, name, attributes);
    }
    return false;
  }
  function isNodeEmpty(node) {
    var _a;
    const defaultContent = (_a = node.type.createAndFill()) === null || _a === void 0 ? void 0 : _a.toJSON();
    const content = node.toJSON();
    return JSON.stringify(defaultContent) === JSON.stringify(content);
  }
  function createStyleTag(style2, nonce) {
    const tipTapStyleTag = document.querySelector("style[data-tiptap-style]");
    if (tipTapStyleTag !== null) {
      return tipTapStyleTag;
    }
    const styleNode = document.createElement("style");
    if (nonce) {
      styleNode.setAttribute("nonce", nonce);
    }
    styleNode.setAttribute("data-tiptap-style", "");
    styleNode.innerHTML = style2;
    document.getElementsByTagName("head")[0].appendChild(styleNode);
    return styleNode;
  }
  function getMarksBetween(from2, to, doc4) {
    const marks = [];
    if (from2 === to) {
      doc4.resolve(from2).marks().forEach((mark) => {
        const $pos = doc4.resolve(from2 - 1);
        const range2 = getMarkRange($pos, mark.type);
        if (!range2) {
          return;
        }
        marks.push({
          mark,
          ...range2
        });
      });
    } else {
      doc4.nodesBetween(from2, to, (node, pos) => {
        marks.push(...node.marks.map((mark) => ({
          from: pos,
          to: pos + node.nodeSize,
          mark
        })));
      });
    }
    return marks;
  }
  function markInputRule(config) {
    return new InputRule({
      find: config.find,
      handler: ({ state, range: range2, match }) => {
        const attributes = callOrReturn(config.getAttributes, void 0, match);
        if (attributes === false || attributes === null) {
          return null;
        }
        const { tr } = state;
        const captureGroup = match[match.length - 1];
        const fullMatch = match[0];
        let markEnd = range2.to;
        if (captureGroup) {
          const startSpaces = fullMatch.search(/\S/);
          const textStart = range2.from + fullMatch.indexOf(captureGroup);
          const textEnd = textStart + captureGroup.length;
          const excludedMarks = getMarksBetween(range2.from, range2.to, state.doc).filter((item) => {
            const excluded = item.mark.type.excluded;
            return excluded.find((type) => type === config.type && type !== item.mark.type);
          }).filter((item) => item.to > textStart);
          if (excludedMarks.length) {
            return null;
          }
          if (textEnd < range2.to) {
            tr.delete(textEnd, range2.to);
          }
          if (textStart > range2.from) {
            tr.delete(range2.from + startSpaces, textStart);
          }
          markEnd = range2.from + startSpaces + captureGroup.length;
          tr.addMark(range2.from + startSpaces, markEnd, config.type.create(attributes || {}));
          tr.removeStoredMark(config.type);
        }
      }
    });
  }
  function nodeInputRule(config) {
    return new InputRule({
      find: config.find,
      handler: ({ state, range: range2, match }) => {
        const attributes = callOrReturn(config.getAttributes, void 0, match) || {};
        const { tr } = state;
        const start = range2.from;
        let end = range2.to;
        if (match[1]) {
          const offset = match[0].lastIndexOf(match[1]);
          let matchStart = start + offset;
          if (matchStart > end) {
            matchStart = end;
          } else {
            end = matchStart + match[1].length;
          }
          const lastChar = match[0][match[0].length - 1];
          tr.insertText(lastChar, start + match[0].length - 1);
          tr.replaceWith(matchStart, end, config.type.create(attributes));
        } else if (match[0]) {
          tr.replaceWith(start, end, config.type.create(attributes));
        }
      }
    });
  }
  function textblockTypeInputRule(config) {
    return new InputRule({
      find: config.find,
      handler: ({ state, range: range2, match }) => {
        const $start = state.doc.resolve(range2.from);
        const attributes = callOrReturn(config.getAttributes, void 0, match) || {};
        if (!$start.node(-1).canReplaceWith($start.index(-1), $start.indexAfter(-1), config.type)) {
          return null;
        }
        state.tr.delete(range2.from, range2.to).setBlockType(range2.from, range2.from, config.type, attributes);
      }
    });
  }
  function wrappingInputRule(config) {
    return new InputRule({
      find: config.find,
      handler: ({ state, range: range2, match }) => {
        const attributes = callOrReturn(config.getAttributes, void 0, match) || {};
        const tr = state.tr.delete(range2.from, range2.to);
        const $start = tr.doc.resolve(range2.from);
        const blockRange = $start.blockRange();
        const wrapping = blockRange && findWrapping(blockRange, config.type, attributes);
        if (!wrapping) {
          return null;
        }
        tr.wrap(blockRange, wrapping);
        const before = tr.doc.resolve(range2.from - 1).nodeBefore;
        if (before && before.type === config.type && canJoin(tr.doc, range2.from - 1) && (!config.joinPredicate || config.joinPredicate(match, before))) {
          tr.join(range2.from - 1);
        }
      }
    });
  }
  function markPasteRule(config) {
    return new PasteRule({
      find: config.find,
      handler: ({ state, range: range2, match }) => {
        const attributes = callOrReturn(config.getAttributes, void 0, match);
        if (attributes === false || attributes === null) {
          return null;
        }
        const { tr } = state;
        const captureGroup = match[match.length - 1];
        const fullMatch = match[0];
        let markEnd = range2.to;
        if (captureGroup) {
          const startSpaces = fullMatch.search(/\S/);
          const textStart = range2.from + fullMatch.indexOf(captureGroup);
          const textEnd = textStart + captureGroup.length;
          const excludedMarks = getMarksBetween(range2.from, range2.to, state.doc).filter((item) => {
            const excluded = item.mark.type.excluded;
            return excluded.find((type) => type === config.type && type !== item.mark.type);
          }).filter((item) => item.to > textStart);
          if (excludedMarks.length) {
            return null;
          }
          if (textEnd < range2.to) {
            tr.delete(textEnd, range2.to);
          }
          if (textStart > range2.from) {
            tr.delete(range2.from + startSpaces, textStart);
          }
          markEnd = range2.from + startSpaces + captureGroup.length;
          tr.addMark(range2.from + startSpaces, markEnd, config.type.create(attributes || {}));
          tr.removeStoredMark(config.type);
        }
      }
    });
  }
  var CommandManager, EventEmitter, getTextContentFromNodes, InputRule, inputRuleMatcherHandler, PasteRule, pasteRuleMatcherHandler, ExtensionManager, Extension, ClipboardTextSerializer, blur, clearContent, clearNodes, command, createParagraphNear2, deleteNode, deleteRange2, deleteSelection2, enter, exitCode2, extendMarkRange, first, focus, forEach, insertContent, isFragment, insertContentAt, joinBackward2, joinForward2, keyboardShortcut, lift3, liftEmptyBlock2, liftListItem2, newlineInCode2, resetAttributes, scrollIntoView, selectAll2, selectNodeBackward2, selectNodeForward2, selectParentNode2, selectTextblockEnd2, selectTextblockStart2, setContent, setMark, setMeta, setNode, setNodeSelection, setTextSelection, sinkListItem2, splitBlock2, splitListItem, joinListBackwards, joinListForwards, toggleList, toggleMark, toggleNode, toggleWrap, undoInputRule, unsetAllMarks, unsetMark, updateAttributes, wrapIn2, wrapInList2, commands, Commands, Editable, FocusEvents, Keymap, Tabindex, extensions, style, Editor, Mark2, Node3;
  var init_tiptap_core_esm = __esm({
    "node_modules/@tiptap/core/dist/tiptap-core.esm.js"() {
      init_dist4();
      init_dist5();
      init_dist6();
      init_dist2();
      init_dist3();
      init_dist7();
      init_dist8();
      CommandManager = class {
        constructor(props) {
          this.editor = props.editor;
          this.rawCommands = this.editor.extensionManager.commands;
          this.customState = props.state;
        }
        get hasCustomState() {
          return !!this.customState;
        }
        get state() {
          return this.customState || this.editor.state;
        }
        get commands() {
          const { rawCommands, editor, state } = this;
          const { view } = editor;
          const { tr } = state;
          const props = this.buildProps(tr);
          return Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
            const method = (...args) => {
              const callback = command2(...args)(props);
              if (!tr.getMeta("preventDispatch") && !this.hasCustomState) {
                view.dispatch(tr);
              }
              return callback;
            };
            return [name, method];
          }));
        }
        get chain() {
          return () => this.createChain();
        }
        get can() {
          return () => this.createCan();
        }
        createChain(startTr, shouldDispatch = true) {
          const { rawCommands, editor, state } = this;
          const { view } = editor;
          const callbacks = [];
          const hasStartTransaction = !!startTr;
          const tr = startTr || state.tr;
          const run2 = () => {
            if (!hasStartTransaction && shouldDispatch && !tr.getMeta("preventDispatch") && !this.hasCustomState) {
              view.dispatch(tr);
            }
            return callbacks.every((callback) => callback === true);
          };
          const chain = {
            ...Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
              const chainedCommand = (...args) => {
                const props = this.buildProps(tr, shouldDispatch);
                const callback = command2(...args)(props);
                callbacks.push(callback);
                return chain;
              };
              return [name, chainedCommand];
            })),
            run: run2
          };
          return chain;
        }
        createCan(startTr) {
          const { rawCommands, state } = this;
          const dispatch = false;
          const tr = startTr || state.tr;
          const props = this.buildProps(tr, dispatch);
          const formattedCommands = Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
            return [name, (...args) => command2(...args)({ ...props, dispatch: void 0 })];
          }));
          return {
            ...formattedCommands,
            chain: () => this.createChain(tr, dispatch)
          };
        }
        buildProps(tr, shouldDispatch = true) {
          const { rawCommands, editor, state } = this;
          const { view } = editor;
          if (state.storedMarks) {
            tr.setStoredMarks(state.storedMarks);
          }
          const props = {
            tr,
            editor,
            view,
            state: createChainableState({
              state,
              transaction: tr
            }),
            dispatch: shouldDispatch ? () => void 0 : void 0,
            chain: () => this.createChain(tr),
            can: () => this.createCan(tr),
            get commands() {
              return Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
                return [name, (...args) => command2(...args)(props)];
              }));
            }
          };
          return props;
        }
      };
      EventEmitter = class {
        constructor() {
          this.callbacks = {};
        }
        on(event, fn) {
          if (!this.callbacks[event]) {
            this.callbacks[event] = [];
          }
          this.callbacks[event].push(fn);
          return this;
        }
        emit(event, ...args) {
          const callbacks = this.callbacks[event];
          if (callbacks) {
            callbacks.forEach((callback) => callback.apply(this, args));
          }
          return this;
        }
        off(event, fn) {
          const callbacks = this.callbacks[event];
          if (callbacks) {
            if (fn) {
              this.callbacks[event] = callbacks.filter((callback) => callback !== fn);
            } else {
              delete this.callbacks[event];
            }
          }
          return this;
        }
        removeAllListeners() {
          this.callbacks = {};
        }
      };
      getTextContentFromNodes = ($from, maxMatch = 500) => {
        let textBefore = "";
        $from.parent.nodesBetween(Math.max(0, $from.parentOffset - maxMatch), $from.parentOffset, (node, pos, parent, index) => {
          var _a, _b, _c;
          textBefore += ((_b = (_a = node.type.spec).toText) === null || _b === void 0 ? void 0 : _b.call(_a, {
            node,
            pos,
            parent,
            index
          })) || ((_c = $from.nodeBefore) === null || _c === void 0 ? void 0 : _c.text) || "%leaf%";
        });
        return textBefore;
      };
      InputRule = class {
        constructor(config) {
          this.find = config.find;
          this.handler = config.handler;
        }
      };
      inputRuleMatcherHandler = (text, find) => {
        if (isRegExp(find)) {
          return find.exec(text);
        }
        const inputRuleMatch = find(text);
        if (!inputRuleMatch) {
          return null;
        }
        const result = [];
        result.push(inputRuleMatch.text);
        result.index = inputRuleMatch.index;
        result.input = text;
        result.data = inputRuleMatch.data;
        if (inputRuleMatch.replaceWith) {
          if (!inputRuleMatch.text.includes(inputRuleMatch.replaceWith)) {
            console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".');
          }
          result.push(inputRuleMatch.replaceWith);
        }
        return result;
      };
      PasteRule = class {
        constructor(config) {
          this.find = config.find;
          this.handler = config.handler;
        }
      };
      pasteRuleMatcherHandler = (text, find) => {
        if (isRegExp(find)) {
          return [...text.matchAll(find)];
        }
        const matches2 = find(text);
        if (!matches2) {
          return [];
        }
        return matches2.map((pasteRuleMatch) => {
          const result = [];
          result.push(pasteRuleMatch.text);
          result.index = pasteRuleMatch.index;
          result.input = text;
          result.data = pasteRuleMatch.data;
          if (pasteRuleMatch.replaceWith) {
            if (!pasteRuleMatch.text.includes(pasteRuleMatch.replaceWith)) {
              console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".');
            }
            result.push(pasteRuleMatch.replaceWith);
          }
          return result;
        });
      };
      ExtensionManager = class {
        constructor(extensions2, editor) {
          this.splittableMarks = [];
          this.editor = editor;
          this.extensions = ExtensionManager.resolve(extensions2);
          this.schema = getSchemaByResolvedExtensions(this.extensions);
          this.extensions.forEach((extension) => {
            var _a;
            this.editor.extensionStorage[extension.name] = extension.storage;
            const context = {
              name: extension.name,
              options: extension.options,
              storage: extension.storage,
              editor: this.editor,
              type: getSchemaTypeByName(extension.name, this.schema)
            };
            if (extension.type === "mark") {
              const keepOnSplit = (_a = callOrReturn(getExtensionField(extension, "keepOnSplit", context))) !== null && _a !== void 0 ? _a : true;
              if (keepOnSplit) {
                this.splittableMarks.push(extension.name);
              }
            }
            const onBeforeCreate = getExtensionField(extension, "onBeforeCreate", context);
            if (onBeforeCreate) {
              this.editor.on("beforeCreate", onBeforeCreate);
            }
            const onCreate = getExtensionField(extension, "onCreate", context);
            if (onCreate) {
              this.editor.on("create", onCreate);
            }
            const onUpdate = getExtensionField(extension, "onUpdate", context);
            if (onUpdate) {
              this.editor.on("update", onUpdate);
            }
            const onSelectionUpdate = getExtensionField(extension, "onSelectionUpdate", context);
            if (onSelectionUpdate) {
              this.editor.on("selectionUpdate", onSelectionUpdate);
            }
            const onTransaction = getExtensionField(extension, "onTransaction", context);
            if (onTransaction) {
              this.editor.on("transaction", onTransaction);
            }
            const onFocus = getExtensionField(extension, "onFocus", context);
            if (onFocus) {
              this.editor.on("focus", onFocus);
            }
            const onBlur = getExtensionField(extension, "onBlur", context);
            if (onBlur) {
              this.editor.on("blur", onBlur);
            }
            const onDestroy = getExtensionField(extension, "onDestroy", context);
            if (onDestroy) {
              this.editor.on("destroy", onDestroy);
            }
          });
        }
        static resolve(extensions2) {
          const resolvedExtensions = ExtensionManager.sort(ExtensionManager.flatten(extensions2));
          const duplicatedNames = findDuplicates(resolvedExtensions.map((extension) => extension.name));
          if (duplicatedNames.length) {
            console.warn(`[tiptap warn]: Duplicate extension names found: [${duplicatedNames.map((item) => `'${item}'`).join(", ")}]. This can lead to issues.`);
          }
          return resolvedExtensions;
        }
        static flatten(extensions2) {
          return extensions2.map((extension) => {
            const context = {
              name: extension.name,
              options: extension.options,
              storage: extension.storage
            };
            const addExtensions = getExtensionField(extension, "addExtensions", context);
            if (addExtensions) {
              return [
                extension,
                ...this.flatten(addExtensions())
              ];
            }
            return extension;
          }).flat(10);
        }
        static sort(extensions2) {
          const defaultPriority = 100;
          return extensions2.sort((a, b) => {
            const priorityA = getExtensionField(a, "priority") || defaultPriority;
            const priorityB = getExtensionField(b, "priority") || defaultPriority;
            if (priorityA > priorityB) {
              return -1;
            }
            if (priorityA < priorityB) {
              return 1;
            }
            return 0;
          });
        }
        get commands() {
          return this.extensions.reduce((commands2, extension) => {
            const context = {
              name: extension.name,
              options: extension.options,
              storage: extension.storage,
              editor: this.editor,
              type: getSchemaTypeByName(extension.name, this.schema)
            };
            const addCommands = getExtensionField(extension, "addCommands", context);
            if (!addCommands) {
              return commands2;
            }
            return {
              ...commands2,
              ...addCommands()
            };
          }, {});
        }
        get plugins() {
          const { editor } = this;
          const extensions2 = ExtensionManager.sort([...this.extensions].reverse());
          const inputRules = [];
          const pasteRules = [];
          const allPlugins = extensions2.map((extension) => {
            const context = {
              name: extension.name,
              options: extension.options,
              storage: extension.storage,
              editor,
              type: getSchemaTypeByName(extension.name, this.schema)
            };
            const plugins = [];
            const addKeyboardShortcuts = getExtensionField(extension, "addKeyboardShortcuts", context);
            let defaultBindings = {};
            if (extension.type === "mark" && extension.config.exitable) {
              defaultBindings.ArrowRight = () => Mark2.handleExit({ editor, mark: extension });
            }
            if (addKeyboardShortcuts) {
              const bindings = Object.fromEntries(Object.entries(addKeyboardShortcuts()).map(([shortcut, method]) => {
                return [shortcut, () => method({ editor })];
              }));
              defaultBindings = { ...defaultBindings, ...bindings };
            }
            const keyMapPlugin = keymap(defaultBindings);
            plugins.push(keyMapPlugin);
            const addInputRules = getExtensionField(extension, "addInputRules", context);
            if (isExtensionRulesEnabled(extension, editor.options.enableInputRules) && addInputRules) {
              inputRules.push(...addInputRules());
            }
            const addPasteRules = getExtensionField(extension, "addPasteRules", context);
            if (isExtensionRulesEnabled(extension, editor.options.enablePasteRules) && addPasteRules) {
              pasteRules.push(...addPasteRules());
            }
            const addProseMirrorPlugins = getExtensionField(extension, "addProseMirrorPlugins", context);
            if (addProseMirrorPlugins) {
              const proseMirrorPlugins = addProseMirrorPlugins();
              plugins.push(...proseMirrorPlugins);
            }
            return plugins;
          }).flat();
          return [
            inputRulesPlugin({
              editor,
              rules: inputRules
            }),
            ...pasteRulesPlugin({
              editor,
              rules: pasteRules
            }),
            ...allPlugins
          ];
        }
        get attributes() {
          return getAttributesFromExtensions(this.extensions);
        }
        get nodeViews() {
          const { editor } = this;
          const { nodeExtensions } = splitExtensions(this.extensions);
          return Object.fromEntries(nodeExtensions.filter((extension) => !!getExtensionField(extension, "addNodeView")).map((extension) => {
            const extensionAttributes = this.attributes.filter((attribute) => attribute.type === extension.name);
            const context = {
              name: extension.name,
              options: extension.options,
              storage: extension.storage,
              editor,
              type: getNodeType(extension.name, this.schema)
            };
            const addNodeView = getExtensionField(extension, "addNodeView", context);
            if (!addNodeView) {
              return [];
            }
            const nodeview = (node, view, getPos, decorations) => {
              const HTMLAttributes = getRenderedAttributes(node, extensionAttributes);
              return addNodeView()({
                editor,
                node,
                getPos,
                decorations,
                HTMLAttributes,
                extension
              });
            };
            return [extension.name, nodeview];
          }));
        }
      };
      Extension = class {
        constructor(config = {}) {
          this.type = "extension";
          this.name = "extension";
          this.parent = null;
          this.child = null;
          this.config = {
            name: this.name,
            defaultOptions: {}
          };
          this.config = {
            ...this.config,
            ...config
          };
          this.name = this.config.name;
          if (config.defaultOptions) {
            console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`);
          }
          this.options = this.config.defaultOptions;
          if (this.config.addOptions) {
            this.options = callOrReturn(getExtensionField(this, "addOptions", {
              name: this.name
            }));
          }
          this.storage = callOrReturn(getExtensionField(this, "addStorage", {
            name: this.name,
            options: this.options
          })) || {};
        }
        static create(config = {}) {
          return new Extension(config);
        }
        configure(options = {}) {
          const extension = this.extend();
          extension.options = mergeDeep(this.options, options);
          extension.storage = callOrReturn(getExtensionField(extension, "addStorage", {
            name: extension.name,
            options: extension.options
          }));
          return extension;
        }
        extend(extendedConfig = {}) {
          const extension = new Extension(extendedConfig);
          extension.parent = this;
          this.child = extension;
          extension.name = extendedConfig.name ? extendedConfig.name : extension.parent.name;
          if (extendedConfig.defaultOptions) {
            console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${extension.name}".`);
          }
          extension.options = callOrReturn(getExtensionField(extension, "addOptions", {
            name: extension.name
          }));
          extension.storage = callOrReturn(getExtensionField(extension, "addStorage", {
            name: extension.name,
            options: extension.options
          }));
          return extension;
        }
      };
      ClipboardTextSerializer = Extension.create({
        name: "clipboardTextSerializer",
        addProseMirrorPlugins() {
          return [
            new Plugin({
              key: new PluginKey("clipboardTextSerializer"),
              props: {
                clipboardTextSerializer: () => {
                  const { editor } = this;
                  const { state, schema } = editor;
                  const { doc: doc4, selection } = state;
                  const { ranges } = selection;
                  const from2 = Math.min(...ranges.map((range3) => range3.$from.pos));
                  const to = Math.max(...ranges.map((range3) => range3.$to.pos));
                  const textSerializers = getTextSerializersFromSchema(schema);
                  const range2 = { from: from2, to };
                  return getTextBetween(doc4, range2, {
                    textSerializers
                  });
                }
              }
            })
          ];
        }
      });
      blur = () => ({ editor, view }) => {
        requestAnimationFrame(() => {
          var _a;
          if (!editor.isDestroyed) {
            view.dom.blur();
            (_a = window === null || window === void 0 ? void 0 : window.getSelection()) === null || _a === void 0 ? void 0 : _a.removeAllRanges();
          }
        });
        return true;
      };
      clearContent = (emitUpdate = false) => ({ commands: commands2 }) => {
        return commands2.setContent("", emitUpdate);
      };
      clearNodes = () => ({ state, tr, dispatch }) => {
        const { selection } = tr;
        const { ranges } = selection;
        if (!dispatch) {
          return true;
        }
        ranges.forEach(({ $from, $to }) => {
          state.doc.nodesBetween($from.pos, $to.pos, (node, pos) => {
            if (node.type.isText) {
              return;
            }
            const { doc: doc4, mapping } = tr;
            const $mappedFrom = doc4.resolve(mapping.map(pos));
            const $mappedTo = doc4.resolve(mapping.map(pos + node.nodeSize));
            const nodeRange = $mappedFrom.blockRange($mappedTo);
            if (!nodeRange) {
              return;
            }
            const targetLiftDepth = liftTarget(nodeRange);
            if (node.type.isTextblock) {
              const { defaultType } = $mappedFrom.parent.contentMatchAt($mappedFrom.index());
              tr.setNodeMarkup(nodeRange.start, defaultType);
            }
            if (targetLiftDepth || targetLiftDepth === 0) {
              tr.lift(nodeRange, targetLiftDepth);
            }
          });
        });
        return true;
      };
      command = (fn) => (props) => {
        return fn(props);
      };
      createParagraphNear2 = () => ({ state, dispatch }) => {
        return createParagraphNear(state, dispatch);
      };
      deleteNode = (typeOrName) => ({ tr, state, dispatch }) => {
        const type = getNodeType(typeOrName, state.schema);
        const $pos = tr.selection.$anchor;
        for (let depth = $pos.depth; depth > 0; depth -= 1) {
          const node = $pos.node(depth);
          if (node.type === type) {
            if (dispatch) {
              const from2 = $pos.before(depth);
              const to = $pos.after(depth);
              tr.delete(from2, to).scrollIntoView();
            }
            return true;
          }
        }
        return false;
      };
      deleteRange2 = (range2) => ({ tr, dispatch }) => {
        const { from: from2, to } = range2;
        if (dispatch) {
          tr.delete(from2, to);
        }
        return true;
      };
      deleteSelection2 = () => ({ state, dispatch }) => {
        return deleteSelection(state, dispatch);
      };
      enter = () => ({ commands: commands2 }) => {
        return commands2.keyboardShortcut("Enter");
      };
      exitCode2 = () => ({ state, dispatch }) => {
        return exitCode(state, dispatch);
      };
      extendMarkRange = (typeOrName, attributes = {}) => ({ tr, state, dispatch }) => {
        const type = getMarkType(typeOrName, state.schema);
        const { doc: doc4, selection } = tr;
        const { $from, from: from2, to } = selection;
        if (dispatch) {
          const range2 = getMarkRange($from, type, attributes);
          if (range2 && range2.from <= from2 && range2.to >= to) {
            const newSelection = TextSelection.create(doc4, range2.from, range2.to);
            tr.setSelection(newSelection);
          }
        }
        return true;
      };
      first = (commands2) => (props) => {
        const items = typeof commands2 === "function" ? commands2(props) : commands2;
        for (let i = 0; i < items.length; i += 1) {
          if (items[i](props)) {
            return true;
          }
        }
        return false;
      };
      focus = (position = null, options = {}) => ({ editor, view, tr, dispatch }) => {
        options = {
          scrollIntoView: true,
          ...options
        };
        const delayedFocus = () => {
          if (isiOS()) {
            view.dom.focus();
          }
          requestAnimationFrame(() => {
            if (!editor.isDestroyed) {
              view.focus();
              if (options === null || options === void 0 ? void 0 : options.scrollIntoView) {
                editor.commands.scrollIntoView();
              }
            }
          });
        };
        if (view.hasFocus() && position === null || position === false) {
          return true;
        }
        if (dispatch && position === null && !isTextSelection(editor.state.selection)) {
          delayedFocus();
          return true;
        }
        const selection = resolveFocusPosition(tr.doc, position) || editor.state.selection;
        const isSameSelection = editor.state.selection.eq(selection);
        if (dispatch) {
          if (!isSameSelection) {
            tr.setSelection(selection);
          }
          if (isSameSelection && tr.storedMarks) {
            tr.setStoredMarks(tr.storedMarks);
          }
          delayedFocus();
        }
        return true;
      };
      forEach = (items, fn) => (props) => {
        return items.every((item, index) => fn(item, { ...props, index }));
      };
      insertContent = (value, options) => ({ tr, commands: commands2 }) => {
        return commands2.insertContentAt({ from: tr.selection.from, to: tr.selection.to }, value, options);
      };
      isFragment = (nodeOrFragment) => {
        return nodeOrFragment.toString().startsWith("<");
      };
      insertContentAt = (position, value, options) => ({ tr, dispatch, editor }) => {
        if (dispatch) {
          options = {
            parseOptions: {},
            updateSelection: true,
            ...options
          };
          const content = createNodeFromContent(value, editor.schema, {
            parseOptions: {
              preserveWhitespace: "full",
              ...options.parseOptions
            }
          });
          if (content.toString() === "<>") {
            return true;
          }
          let { from: from2, to } = typeof position === "number" ? { from: position, to: position } : position;
          let isOnlyTextContent = true;
          let isOnlyBlockContent = true;
          const nodes = isFragment(content) ? content : [content];
          nodes.forEach((node) => {
            node.check();
            isOnlyTextContent = isOnlyTextContent ? node.isText && node.marks.length === 0 : false;
            isOnlyBlockContent = isOnlyBlockContent ? node.isBlock : false;
          });
          if (from2 === to && isOnlyBlockContent) {
            const { parent } = tr.doc.resolve(from2);
            const isEmptyTextBlock = parent.isTextblock && !parent.type.spec.code && !parent.childCount;
            if (isEmptyTextBlock) {
              from2 -= 1;
              to += 1;
            }
          }
          if (isOnlyTextContent) {
            tr.insertText(value, from2, to);
          } else {
            tr.replaceWith(from2, to, content);
          }
          if (options.updateSelection) {
            selectionToInsertionEnd2(tr, tr.steps.length - 1, -1);
          }
        }
        return true;
      };
      joinBackward2 = () => ({ state, dispatch }) => {
        return joinBackward(state, dispatch);
      };
      joinForward2 = () => ({ state, dispatch }) => {
        return joinForward(state, dispatch);
      };
      keyboardShortcut = (name) => ({ editor, view, tr, dispatch }) => {
        const keys2 = normalizeKeyName2(name).split(/-(?!$)/);
        const key = keys2.find((item) => !["Alt", "Ctrl", "Meta", "Shift"].includes(item));
        const event = new KeyboardEvent("keydown", {
          key: key === "Space" ? " " : key,
          altKey: keys2.includes("Alt"),
          ctrlKey: keys2.includes("Ctrl"),
          metaKey: keys2.includes("Meta"),
          shiftKey: keys2.includes("Shift"),
          bubbles: true,
          cancelable: true
        });
        const capturedTransaction = editor.captureTransaction(() => {
          view.someProp("handleKeyDown", (f) => f(view, event));
        });
        capturedTransaction === null || capturedTransaction === void 0 ? void 0 : capturedTransaction.steps.forEach((step) => {
          const newStep = step.map(tr.mapping);
          if (newStep && dispatch) {
            tr.maybeStep(newStep);
          }
        });
        return true;
      };
      lift3 = (typeOrName, attributes = {}) => ({ state, dispatch }) => {
        const type = getNodeType(typeOrName, state.schema);
        const isActive2 = isNodeActive(state, type, attributes);
        if (!isActive2) {
          return false;
        }
        return lift2(state, dispatch);
      };
      liftEmptyBlock2 = () => ({ state, dispatch }) => {
        return liftEmptyBlock(state, dispatch);
      };
      liftListItem2 = (typeOrName) => ({ state, dispatch }) => {
        const type = getNodeType(typeOrName, state.schema);
        return liftListItem(type)(state, dispatch);
      };
      newlineInCode2 = () => ({ state, dispatch }) => {
        return newlineInCode(state, dispatch);
      };
      resetAttributes = (typeOrName, attributes) => ({ tr, state, dispatch }) => {
        let nodeType = null;
        let markType = null;
        const schemaType = getSchemaTypeNameByName(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
        if (!schemaType) {
          return false;
        }
        if (schemaType === "node") {
          nodeType = getNodeType(typeOrName, state.schema);
        }
        if (schemaType === "mark") {
          markType = getMarkType(typeOrName, state.schema);
        }
        if (dispatch) {
          tr.selection.ranges.forEach((range2) => {
            state.doc.nodesBetween(range2.$from.pos, range2.$to.pos, (node, pos) => {
              if (nodeType && nodeType === node.type) {
                tr.setNodeMarkup(pos, void 0, deleteProps(node.attrs, attributes));
              }
              if (markType && node.marks.length) {
                node.marks.forEach((mark) => {
                  if (markType === mark.type) {
                    tr.addMark(pos, pos + node.nodeSize, markType.create(deleteProps(mark.attrs, attributes)));
                  }
                });
              }
            });
          });
        }
        return true;
      };
      scrollIntoView = () => ({ tr, dispatch }) => {
        if (dispatch) {
          tr.scrollIntoView();
        }
        return true;
      };
      selectAll2 = () => ({ tr, commands: commands2 }) => {
        return commands2.setTextSelection({
          from: 0,
          to: tr.doc.content.size
        });
      };
      selectNodeBackward2 = () => ({ state, dispatch }) => {
        return selectNodeBackward(state, dispatch);
      };
      selectNodeForward2 = () => ({ state, dispatch }) => {
        return selectNodeForward(state, dispatch);
      };
      selectParentNode2 = () => ({ state, dispatch }) => {
        return selectParentNode(state, dispatch);
      };
      selectTextblockEnd2 = () => ({ state, dispatch }) => {
        return selectTextblockEnd(state, dispatch);
      };
      selectTextblockStart2 = () => ({ state, dispatch }) => {
        return selectTextblockStart(state, dispatch);
      };
      setContent = (content, emitUpdate = false, parseOptions = {}) => ({ tr, editor, dispatch }) => {
        const { doc: doc4 } = tr;
        const document2 = createDocument(content, editor.schema, parseOptions);
        if (dispatch) {
          tr.replaceWith(0, doc4.content.size, document2).setMeta("preventUpdate", !emitUpdate);
        }
        return true;
      };
      setMark = (typeOrName, attributes = {}) => ({ tr, state, dispatch }) => {
        const { selection } = tr;
        const { empty: empty2, ranges } = selection;
        const type = getMarkType(typeOrName, state.schema);
        if (dispatch) {
          if (empty2) {
            const oldAttributes = getMarkAttributes(state, type);
            tr.addStoredMark(type.create({
              ...oldAttributes,
              ...attributes
            }));
          } else {
            ranges.forEach((range2) => {
              const from2 = range2.$from.pos;
              const to = range2.$to.pos;
              state.doc.nodesBetween(from2, to, (node, pos) => {
                const trimmedFrom = Math.max(pos, from2);
                const trimmedTo = Math.min(pos + node.nodeSize, to);
                const someHasMark = node.marks.find((mark) => mark.type === type);
                if (someHasMark) {
                  node.marks.forEach((mark) => {
                    if (type === mark.type) {
                      tr.addMark(trimmedFrom, trimmedTo, type.create({
                        ...mark.attrs,
                        ...attributes
                      }));
                    }
                  });
                } else {
                  tr.addMark(trimmedFrom, trimmedTo, type.create(attributes));
                }
              });
            });
          }
        }
        return true;
      };
      setMeta = (key, value) => ({ tr }) => {
        tr.setMeta(key, value);
        return true;
      };
      setNode = (typeOrName, attributes = {}) => ({ state, dispatch, chain }) => {
        const type = getNodeType(typeOrName, state.schema);
        if (!type.isTextblock) {
          console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.');
          return false;
        }
        return chain().command(({ commands: commands2 }) => {
          const canSetBlock = setBlockType2(type, attributes)(state);
          if (canSetBlock) {
            return true;
          }
          return commands2.clearNodes();
        }).command(({ state: updatedState }) => {
          return setBlockType2(type, attributes)(updatedState, dispatch);
        }).run();
      };
      setNodeSelection = (position) => ({ tr, dispatch }) => {
        if (dispatch) {
          const { doc: doc4 } = tr;
          const from2 = minMax(position, 0, doc4.content.size);
          const selection = NodeSelection.create(doc4, from2);
          tr.setSelection(selection);
        }
        return true;
      };
      setTextSelection = (position) => ({ tr, dispatch }) => {
        if (dispatch) {
          const { doc: doc4 } = tr;
          const { from: from2, to } = typeof position === "number" ? { from: position, to: position } : position;
          const minPos = TextSelection.atStart(doc4).from;
          const maxPos = TextSelection.atEnd(doc4).to;
          const resolvedFrom = minMax(from2, minPos, maxPos);
          const resolvedEnd = minMax(to, minPos, maxPos);
          const selection = TextSelection.create(doc4, resolvedFrom, resolvedEnd);
          tr.setSelection(selection);
        }
        return true;
      };
      sinkListItem2 = (typeOrName) => ({ state, dispatch }) => {
        const type = getNodeType(typeOrName, state.schema);
        return sinkListItem(type)(state, dispatch);
      };
      splitBlock2 = ({ keepMarks = true } = {}) => ({ tr, state, dispatch, editor }) => {
        const { selection, doc: doc4 } = tr;
        const { $from, $to } = selection;
        const extensionAttributes = editor.extensionManager.attributes;
        const newAttributes = getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs);
        if (selection instanceof NodeSelection && selection.node.isBlock) {
          if (!$from.parentOffset || !canSplit(doc4, $from.pos)) {
            return false;
          }
          if (dispatch) {
            if (keepMarks) {
              ensureMarks(state, editor.extensionManager.splittableMarks);
            }
            tr.split($from.pos).scrollIntoView();
          }
          return true;
        }
        if (!$from.parent.isBlock) {
          return false;
        }
        if (dispatch) {
          const atEnd = $to.parentOffset === $to.parent.content.size;
          if (selection instanceof TextSelection) {
            tr.deleteSelection();
          }
          const deflt = $from.depth === 0 ? void 0 : defaultBlockAt2($from.node(-1).contentMatchAt($from.indexAfter(-1)));
          let types = atEnd && deflt ? [{
            type: deflt,
            attrs: newAttributes
          }] : void 0;
          let can = canSplit(tr.doc, tr.mapping.map($from.pos), 1, types);
          if (!types && !can && canSplit(tr.doc, tr.mapping.map($from.pos), 1, deflt ? [{ type: deflt }] : void 0)) {
            can = true;
            types = deflt ? [{
              type: deflt,
              attrs: newAttributes
            }] : void 0;
          }
          if (can) {
            tr.split(tr.mapping.map($from.pos), 1, types);
            if (deflt && !atEnd && !$from.parentOffset && $from.parent.type !== deflt) {
              const first2 = tr.mapping.map($from.before());
              const $first = tr.doc.resolve(first2);
              if ($from.node(-1).canReplaceWith($first.index(), $first.index() + 1, deflt)) {
                tr.setNodeMarkup(tr.mapping.map($from.before()), deflt);
              }
            }
          }
          if (keepMarks) {
            ensureMarks(state, editor.extensionManager.splittableMarks);
          }
          tr.scrollIntoView();
        }
        return true;
      };
      splitListItem = (typeOrName) => ({ tr, state, dispatch, editor }) => {
        var _a;
        const type = getNodeType(typeOrName, state.schema);
        const { $from, $to } = state.selection;
        const node = state.selection.node;
        if (node && node.isBlock || $from.depth < 2 || !$from.sameParent($to)) {
          return false;
        }
        const grandParent = $from.node(-1);
        if (grandParent.type !== type) {
          return false;
        }
        const extensionAttributes = editor.extensionManager.attributes;
        if ($from.parent.content.size === 0 && $from.node(-1).childCount === $from.indexAfter(-1)) {
          if ($from.depth === 2 || $from.node(-3).type !== type || $from.index(-2) !== $from.node(-2).childCount - 1) {
            return false;
          }
          if (dispatch) {
            let wrap2 = Fragment.empty;
            const depthBefore = $from.index(-1) ? 1 : $from.index(-2) ? 2 : 3;
            for (let d = $from.depth - depthBefore; d >= $from.depth - 3; d -= 1) {
              wrap2 = Fragment.from($from.node(d).copy(wrap2));
            }
            const depthAfter = $from.indexAfter(-1) < $from.node(-2).childCount ? 1 : $from.indexAfter(-2) < $from.node(-3).childCount ? 2 : 3;
            const newNextTypeAttributes2 = getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs);
            const nextType2 = ((_a = type.contentMatch.defaultType) === null || _a === void 0 ? void 0 : _a.createAndFill(newNextTypeAttributes2)) || void 0;
            wrap2 = wrap2.append(Fragment.from(type.createAndFill(null, nextType2) || void 0));
            const start = $from.before($from.depth - (depthBefore - 1));
            tr.replace(start, $from.after(-depthAfter), new Slice(wrap2, 4 - depthBefore, 0));
            let sel = -1;
            tr.doc.nodesBetween(start, tr.doc.content.size, (n, pos) => {
              if (sel > -1) {
                return false;
              }
              if (n.isTextblock && n.content.size === 0) {
                sel = pos + 1;
              }
            });
            if (sel > -1) {
              tr.setSelection(TextSelection.near(tr.doc.resolve(sel)));
            }
            tr.scrollIntoView();
          }
          return true;
        }
        const nextType = $to.pos === $from.end() ? grandParent.contentMatchAt(0).defaultType : null;
        const newTypeAttributes = getSplittedAttributes(extensionAttributes, grandParent.type.name, grandParent.attrs);
        const newNextTypeAttributes = getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs);
        tr.delete($from.pos, $to.pos);
        const types = nextType ? [{ type, attrs: newTypeAttributes }, { type: nextType, attrs: newNextTypeAttributes }] : [{ type, attrs: newTypeAttributes }];
        if (!canSplit(tr.doc, $from.pos, 2)) {
          return false;
        }
        if (dispatch) {
          tr.split($from.pos, 2, types).scrollIntoView();
        }
        return true;
      };
      joinListBackwards = (tr, listType) => {
        const list = findParentNode((node) => node.type === listType)(tr.selection);
        if (!list) {
          return true;
        }
        const before = tr.doc.resolve(Math.max(0, list.pos - 1)).before(list.depth);
        if (before === void 0) {
          return true;
        }
        const nodeBefore = tr.doc.nodeAt(before);
        const canJoinBackwards = list.node.type === (nodeBefore === null || nodeBefore === void 0 ? void 0 : nodeBefore.type) && canJoin(tr.doc, list.pos);
        if (!canJoinBackwards) {
          return true;
        }
        tr.join(list.pos);
        return true;
      };
      joinListForwards = (tr, listType) => {
        const list = findParentNode((node) => node.type === listType)(tr.selection);
        if (!list) {
          return true;
        }
        const after = tr.doc.resolve(list.start).after(list.depth);
        if (after === void 0) {
          return true;
        }
        const nodeAfter = tr.doc.nodeAt(after);
        const canJoinForwards = list.node.type === (nodeAfter === null || nodeAfter === void 0 ? void 0 : nodeAfter.type) && canJoin(tr.doc, after);
        if (!canJoinForwards) {
          return true;
        }
        tr.join(after);
        return true;
      };
      toggleList = (listTypeOrName, itemTypeOrName) => ({ editor, tr, state, dispatch, chain, commands: commands2, can }) => {
        const { extensions: extensions2 } = editor.extensionManager;
        const listType = getNodeType(listTypeOrName, state.schema);
        const itemType = getNodeType(itemTypeOrName, state.schema);
        const { selection } = state;
        const { $from, $to } = selection;
        const range2 = $from.blockRange($to);
        if (!range2) {
          return false;
        }
        const parentList = findParentNode((node) => isList(node.type.name, extensions2))(selection);
        if (range2.depth >= 1 && parentList && range2.depth - parentList.depth <= 1) {
          if (parentList.node.type === listType) {
            return commands2.liftListItem(itemType);
          }
          if (isList(parentList.node.type.name, extensions2) && listType.validContent(parentList.node.content) && dispatch) {
            return chain().command(() => {
              tr.setNodeMarkup(parentList.pos, listType);
              return true;
            }).command(() => joinListBackwards(tr, listType)).command(() => joinListForwards(tr, listType)).run();
          }
        }
        return chain().command(() => {
          const canWrapInList = can().wrapInList(listType);
          if (canWrapInList) {
            return true;
          }
          return commands2.clearNodes();
        }).wrapInList(listType).command(() => joinListBackwards(tr, listType)).command(() => joinListForwards(tr, listType)).run();
      };
      toggleMark = (typeOrName, attributes = {}, options = {}) => ({ state, commands: commands2 }) => {
        const { extendEmptyMarkRange = false } = options;
        const type = getMarkType(typeOrName, state.schema);
        const isActive2 = isMarkActive(state, type, attributes);
        if (isActive2) {
          return commands2.unsetMark(type, { extendEmptyMarkRange });
        }
        return commands2.setMark(type, attributes);
      };
      toggleNode = (typeOrName, toggleTypeOrName, attributes = {}) => ({ state, commands: commands2 }) => {
        const type = getNodeType(typeOrName, state.schema);
        const toggleType = getNodeType(toggleTypeOrName, state.schema);
        const isActive2 = isNodeActive(state, type, attributes);
        if (isActive2) {
          return commands2.setNode(toggleType);
        }
        return commands2.setNode(type, attributes);
      };
      toggleWrap = (typeOrName, attributes = {}) => ({ state, commands: commands2 }) => {
        const type = getNodeType(typeOrName, state.schema);
        const isActive2 = isNodeActive(state, type, attributes);
        if (isActive2) {
          return commands2.lift(type);
        }
        return commands2.wrapIn(type, attributes);
      };
      undoInputRule = () => ({ state, dispatch }) => {
        const plugins = state.plugins;
        for (let i = 0; i < plugins.length; i += 1) {
          const plugin = plugins[i];
          let undoable;
          if (plugin.spec.isInputRules && (undoable = plugin.getState(state))) {
            if (dispatch) {
              const tr = state.tr;
              const toUndo = undoable.transform;
              for (let j = toUndo.steps.length - 1; j >= 0; j -= 1) {
                tr.step(toUndo.steps[j].invert(toUndo.docs[j]));
              }
              if (undoable.text) {
                const marks = tr.doc.resolve(undoable.from).marks();
                tr.replaceWith(undoable.from, undoable.to, state.schema.text(undoable.text, marks));
              } else {
                tr.delete(undoable.from, undoable.to);
              }
            }
            return true;
          }
        }
        return false;
      };
      unsetAllMarks = () => ({ tr, dispatch }) => {
        const { selection } = tr;
        const { empty: empty2, ranges } = selection;
        if (empty2) {
          return true;
        }
        if (dispatch) {
          ranges.forEach((range2) => {
            tr.removeMark(range2.$from.pos, range2.$to.pos);
          });
        }
        return true;
      };
      unsetMark = (typeOrName, options = {}) => ({ tr, state, dispatch }) => {
        var _a;
        const { extendEmptyMarkRange = false } = options;
        const { selection } = tr;
        const type = getMarkType(typeOrName, state.schema);
        const { $from, empty: empty2, ranges } = selection;
        if (!dispatch) {
          return true;
        }
        if (empty2 && extendEmptyMarkRange) {
          let { from: from2, to } = selection;
          const attrs = (_a = $from.marks().find((mark) => mark.type === type)) === null || _a === void 0 ? void 0 : _a.attrs;
          const range2 = getMarkRange($from, type, attrs);
          if (range2) {
            from2 = range2.from;
            to = range2.to;
          }
          tr.removeMark(from2, to, type);
        } else {
          ranges.forEach((range2) => {
            tr.removeMark(range2.$from.pos, range2.$to.pos, type);
          });
        }
        tr.removeStoredMark(type);
        return true;
      };
      updateAttributes = (typeOrName, attributes = {}) => ({ tr, state, dispatch }) => {
        let nodeType = null;
        let markType = null;
        const schemaType = getSchemaTypeNameByName(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
        if (!schemaType) {
          return false;
        }
        if (schemaType === "node") {
          nodeType = getNodeType(typeOrName, state.schema);
        }
        if (schemaType === "mark") {
          markType = getMarkType(typeOrName, state.schema);
        }
        if (dispatch) {
          tr.selection.ranges.forEach((range2) => {
            const from2 = range2.$from.pos;
            const to = range2.$to.pos;
            state.doc.nodesBetween(from2, to, (node, pos) => {
              if (nodeType && nodeType === node.type) {
                tr.setNodeMarkup(pos, void 0, {
                  ...node.attrs,
                  ...attributes
                });
              }
              if (markType && node.marks.length) {
                node.marks.forEach((mark) => {
                  if (markType === mark.type) {
                    const trimmedFrom = Math.max(pos, from2);
                    const trimmedTo = Math.min(pos + node.nodeSize, to);
                    tr.addMark(trimmedFrom, trimmedTo, markType.create({
                      ...mark.attrs,
                      ...attributes
                    }));
                  }
                });
              }
            });
          });
        }
        return true;
      };
      wrapIn2 = (typeOrName, attributes = {}) => ({ state, dispatch }) => {
        const type = getNodeType(typeOrName, state.schema);
        return wrapIn(type, attributes)(state, dispatch);
      };
      wrapInList2 = (typeOrName, attributes = {}) => ({ state, dispatch }) => {
        const type = getNodeType(typeOrName, state.schema);
        return wrapInList(type, attributes)(state, dispatch);
      };
      commands = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        blur,
        clearContent,
        clearNodes,
        command,
        createParagraphNear: createParagraphNear2,
        deleteNode,
        deleteRange: deleteRange2,
        deleteSelection: deleteSelection2,
        enter,
        exitCode: exitCode2,
        extendMarkRange,
        first,
        focus,
        forEach,
        insertContent,
        insertContentAt,
        joinBackward: joinBackward2,
        joinForward: joinForward2,
        keyboardShortcut,
        lift: lift3,
        liftEmptyBlock: liftEmptyBlock2,
        liftListItem: liftListItem2,
        newlineInCode: newlineInCode2,
        resetAttributes,
        scrollIntoView,
        selectAll: selectAll2,
        selectNodeBackward: selectNodeBackward2,
        selectNodeForward: selectNodeForward2,
        selectParentNode: selectParentNode2,
        selectTextblockEnd: selectTextblockEnd2,
        selectTextblockStart: selectTextblockStart2,
        setContent,
        setMark,
        setMeta,
        setNode,
        setNodeSelection,
        setTextSelection,
        sinkListItem: sinkListItem2,
        splitBlock: splitBlock2,
        splitListItem,
        toggleList,
        toggleMark,
        toggleNode,
        toggleWrap,
        undoInputRule,
        unsetAllMarks,
        unsetMark,
        updateAttributes,
        wrapIn: wrapIn2,
        wrapInList: wrapInList2
      });
      Commands = Extension.create({
        name: "commands",
        addCommands() {
          return {
            ...commands
          };
        }
      });
      Editable = Extension.create({
        name: "editable",
        addProseMirrorPlugins() {
          return [
            new Plugin({
              key: new PluginKey("editable"),
              props: {
                editable: () => this.editor.options.editable
              }
            })
          ];
        }
      });
      FocusEvents = Extension.create({
        name: "focusEvents",
        addProseMirrorPlugins() {
          const { editor } = this;
          return [
            new Plugin({
              key: new PluginKey("focusEvents"),
              props: {
                handleDOMEvents: {
                  focus: (view, event) => {
                    editor.isFocused = true;
                    const transaction = editor.state.tr.setMeta("focus", { event }).setMeta("addToHistory", false);
                    view.dispatch(transaction);
                    return false;
                  },
                  blur: (view, event) => {
                    editor.isFocused = false;
                    const transaction = editor.state.tr.setMeta("blur", { event }).setMeta("addToHistory", false);
                    view.dispatch(transaction);
                    return false;
                  }
                }
              }
            })
          ];
        }
      });
      Keymap = Extension.create({
        name: "keymap",
        addKeyboardShortcuts() {
          const handleBackspace = () => this.editor.commands.first(({ commands: commands2 }) => [
            () => commands2.undoInputRule(),
            () => commands2.command(({ tr }) => {
              const { selection, doc: doc4 } = tr;
              const { empty: empty2, $anchor } = selection;
              const { pos, parent } = $anchor;
              const isAtStart = Selection.atStart(doc4).from === pos;
              if (!empty2 || !isAtStart || !parent.type.isTextblock || parent.textContent.length) {
                return false;
              }
              return commands2.clearNodes();
            }),
            () => commands2.deleteSelection(),
            () => commands2.joinBackward(),
            () => commands2.selectNodeBackward()
          ]);
          const handleDelete = () => this.editor.commands.first(({ commands: commands2 }) => [
            () => commands2.deleteSelection(),
            () => commands2.joinForward(),
            () => commands2.selectNodeForward()
          ]);
          const handleEnter = () => this.editor.commands.first(({ commands: commands2 }) => [
            () => commands2.newlineInCode(),
            () => commands2.createParagraphNear(),
            () => commands2.liftEmptyBlock(),
            () => commands2.splitBlock()
          ]);
          const baseKeymap = {
            Enter: handleEnter,
            "Mod-Enter": () => this.editor.commands.exitCode(),
            Backspace: handleBackspace,
            "Mod-Backspace": handleBackspace,
            "Shift-Backspace": handleBackspace,
            Delete: handleDelete,
            "Mod-Delete": handleDelete,
            "Mod-a": () => this.editor.commands.selectAll()
          };
          const pcKeymap = {
            ...baseKeymap
          };
          const macKeymap = {
            ...baseKeymap,
            "Ctrl-h": handleBackspace,
            "Alt-Backspace": handleBackspace,
            "Ctrl-d": handleDelete,
            "Ctrl-Alt-Backspace": handleDelete,
            "Alt-Delete": handleDelete,
            "Alt-d": handleDelete,
            "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
            "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
          };
          if (isiOS() || isMacOS()) {
            return macKeymap;
          }
          return pcKeymap;
        },
        addProseMirrorPlugins() {
          return [
            new Plugin({
              key: new PluginKey("clearDocument"),
              appendTransaction: (transactions, oldState, newState) => {
                const docChanges = transactions.some((transaction) => transaction.docChanged) && !oldState.doc.eq(newState.doc);
                if (!docChanges) {
                  return;
                }
                const { empty: empty2, from: from2, to } = oldState.selection;
                const allFrom = Selection.atStart(oldState.doc).from;
                const allEnd = Selection.atEnd(oldState.doc).to;
                const allWasSelected = from2 === allFrom && to === allEnd;
                const isEmpty2 = newState.doc.textBetween(0, newState.doc.content.size, " ", " ").length === 0;
                if (empty2 || !allWasSelected || !isEmpty2) {
                  return;
                }
                const tr = newState.tr;
                const state = createChainableState({
                  state: newState,
                  transaction: tr
                });
                const { commands: commands2 } = new CommandManager({
                  editor: this.editor,
                  state
                });
                commands2.clearNodes();
                if (!tr.steps.length) {
                  return;
                }
                return tr;
              }
            })
          ];
        }
      });
      Tabindex = Extension.create({
        name: "tabindex",
        addProseMirrorPlugins() {
          return [
            new Plugin({
              key: new PluginKey("tabindex"),
              props: {
                attributes: this.editor.isEditable ? { tabindex: "0" } : {}
              }
            })
          ];
        }
      });
      extensions = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        ClipboardTextSerializer,
        Commands,
        Editable,
        FocusEvents,
        Keymap,
        Tabindex
      });
      style = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 1px !important;
  height: 1px !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
      Editor = class extends EventEmitter {
        constructor(options = {}) {
          super();
          this.isFocused = false;
          this.extensionStorage = {};
          this.options = {
            element: document.createElement("div"),
            content: "",
            injectCSS: true,
            injectNonce: void 0,
            extensions: [],
            autofocus: false,
            editable: true,
            editorProps: {},
            parseOptions: {},
            enableInputRules: true,
            enablePasteRules: true,
            enableCoreExtensions: true,
            onBeforeCreate: () => null,
            onCreate: () => null,
            onUpdate: () => null,
            onSelectionUpdate: () => null,
            onTransaction: () => null,
            onFocus: () => null,
            onBlur: () => null,
            onDestroy: () => null
          };
          this.isCapturingTransaction = false;
          this.capturedTransaction = null;
          this.setOptions(options);
          this.createExtensionManager();
          this.createCommandManager();
          this.createSchema();
          this.on("beforeCreate", this.options.onBeforeCreate);
          this.emit("beforeCreate", { editor: this });
          this.createView();
          this.injectCSS();
          this.on("create", this.options.onCreate);
          this.on("update", this.options.onUpdate);
          this.on("selectionUpdate", this.options.onSelectionUpdate);
          this.on("transaction", this.options.onTransaction);
          this.on("focus", this.options.onFocus);
          this.on("blur", this.options.onBlur);
          this.on("destroy", this.options.onDestroy);
          window.setTimeout(() => {
            if (this.isDestroyed) {
              return;
            }
            this.commands.focus(this.options.autofocus);
            this.emit("create", { editor: this });
          }, 0);
        }
        get storage() {
          return this.extensionStorage;
        }
        get commands() {
          return this.commandManager.commands;
        }
        chain() {
          return this.commandManager.chain();
        }
        can() {
          return this.commandManager.can();
        }
        injectCSS() {
          if (this.options.injectCSS && document) {
            this.css = createStyleTag(style, this.options.injectNonce);
          }
        }
        setOptions(options = {}) {
          this.options = {
            ...this.options,
            ...options
          };
          if (!this.view || !this.state || this.isDestroyed) {
            return;
          }
          if (this.options.editorProps) {
            this.view.setProps(this.options.editorProps);
          }
          this.view.updateState(this.state);
        }
        setEditable(editable) {
          this.setOptions({ editable });
          this.emit("update", { editor: this, transaction: this.state.tr });
        }
        get isEditable() {
          return this.options.editable && this.view && this.view.editable;
        }
        get state() {
          return this.view.state;
        }
        registerPlugin(plugin, handlePlugins) {
          const plugins = isFunction(handlePlugins) ? handlePlugins(plugin, [...this.state.plugins]) : [...this.state.plugins, plugin];
          const state = this.state.reconfigure({ plugins });
          this.view.updateState(state);
        }
        unregisterPlugin(nameOrPluginKey) {
          if (this.isDestroyed) {
            return;
          }
          const name = typeof nameOrPluginKey === "string" ? `${nameOrPluginKey}$` : nameOrPluginKey.key;
          const state = this.state.reconfigure({
            plugins: this.state.plugins.filter((plugin) => !plugin.key.startsWith(name))
          });
          this.view.updateState(state);
        }
        createExtensionManager() {
          const coreExtensions = this.options.enableCoreExtensions ? Object.values(extensions) : [];
          const allExtensions = [...coreExtensions, ...this.options.extensions].filter((extension) => {
            return ["extension", "node", "mark"].includes(extension === null || extension === void 0 ? void 0 : extension.type);
          });
          this.extensionManager = new ExtensionManager(allExtensions, this);
        }
        createCommandManager() {
          this.commandManager = new CommandManager({
            editor: this
          });
        }
        createSchema() {
          this.schema = this.extensionManager.schema;
        }
        createView() {
          const doc4 = createDocument(this.options.content, this.schema, this.options.parseOptions);
          const selection = resolveFocusPosition(doc4, this.options.autofocus);
          this.view = new EditorView(this.options.element, {
            ...this.options.editorProps,
            dispatchTransaction: this.dispatchTransaction.bind(this),
            state: EditorState.create({
              doc: doc4,
              selection: selection || void 0
            })
          });
          const newState = this.state.reconfigure({
            plugins: this.extensionManager.plugins
          });
          this.view.updateState(newState);
          this.createNodeViews();
          const dom = this.view.dom;
          dom.editor = this;
        }
        createNodeViews() {
          this.view.setProps({
            nodeViews: this.extensionManager.nodeViews
          });
        }
        captureTransaction(fn) {
          this.isCapturingTransaction = true;
          fn();
          this.isCapturingTransaction = false;
          const tr = this.capturedTransaction;
          this.capturedTransaction = null;
          return tr;
        }
        dispatchTransaction(transaction) {
          if (this.isCapturingTransaction) {
            if (!this.capturedTransaction) {
              this.capturedTransaction = transaction;
              return;
            }
            transaction.steps.forEach((step) => {
              var _a;
              return (_a = this.capturedTransaction) === null || _a === void 0 ? void 0 : _a.step(step);
            });
            return;
          }
          const state = this.state.apply(transaction);
          const selectionHasChanged = !this.state.selection.eq(state.selection);
          this.view.updateState(state);
          this.emit("transaction", {
            editor: this,
            transaction
          });
          if (selectionHasChanged) {
            this.emit("selectionUpdate", {
              editor: this,
              transaction
            });
          }
          const focus2 = transaction.getMeta("focus");
          const blur2 = transaction.getMeta("blur");
          if (focus2) {
            this.emit("focus", {
              editor: this,
              event: focus2.event,
              transaction
            });
          }
          if (blur2) {
            this.emit("blur", {
              editor: this,
              event: blur2.event,
              transaction
            });
          }
          if (!transaction.docChanged || transaction.getMeta("preventUpdate")) {
            return;
          }
          this.emit("update", {
            editor: this,
            transaction
          });
        }
        getAttributes(nameOrType) {
          return getAttributes(this.state, nameOrType);
        }
        isActive(nameOrAttributes, attributesOrUndefined) {
          const name = typeof nameOrAttributes === "string" ? nameOrAttributes : null;
          const attributes = typeof nameOrAttributes === "string" ? attributesOrUndefined : nameOrAttributes;
          return isActive(this.state, name, attributes);
        }
        getJSON() {
          return this.state.doc.toJSON();
        }
        getHTML() {
          return getHTMLFromFragment(this.state.doc.content, this.schema);
        }
        getText(options) {
          const { blockSeparator = "\n\n", textSerializers = {} } = options || {};
          return getText(this.state.doc, {
            blockSeparator,
            textSerializers: {
              ...textSerializers,
              ...getTextSerializersFromSchema(this.schema)
            }
          });
        }
        get isEmpty() {
          return isNodeEmpty(this.state.doc);
        }
        getCharacterCount() {
          console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.');
          return this.state.doc.content.size - 2;
        }
        destroy() {
          this.emit("destroy");
          if (this.view) {
            this.view.destroy();
          }
          this.removeAllListeners();
        }
        get isDestroyed() {
          var _a;
          return !((_a = this.view) === null || _a === void 0 ? void 0 : _a.docView);
        }
      };
      Mark2 = class {
        constructor(config = {}) {
          this.type = "mark";
          this.name = "mark";
          this.parent = null;
          this.child = null;
          this.config = {
            name: this.name,
            defaultOptions: {}
          };
          this.config = {
            ...this.config,
            ...config
          };
          this.name = this.config.name;
          if (config.defaultOptions) {
            console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`);
          }
          this.options = this.config.defaultOptions;
          if (this.config.addOptions) {
            this.options = callOrReturn(getExtensionField(this, "addOptions", {
              name: this.name
            }));
          }
          this.storage = callOrReturn(getExtensionField(this, "addStorage", {
            name: this.name,
            options: this.options
          })) || {};
        }
        static create(config = {}) {
          return new Mark2(config);
        }
        configure(options = {}) {
          const extension = this.extend();
          extension.options = mergeDeep(this.options, options);
          extension.storage = callOrReturn(getExtensionField(extension, "addStorage", {
            name: extension.name,
            options: extension.options
          }));
          return extension;
        }
        extend(extendedConfig = {}) {
          const extension = new Mark2(extendedConfig);
          extension.parent = this;
          this.child = extension;
          extension.name = extendedConfig.name ? extendedConfig.name : extension.parent.name;
          if (extendedConfig.defaultOptions) {
            console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${extension.name}".`);
          }
          extension.options = callOrReturn(getExtensionField(extension, "addOptions", {
            name: extension.name
          }));
          extension.storage = callOrReturn(getExtensionField(extension, "addStorage", {
            name: extension.name,
            options: extension.options
          }));
          return extension;
        }
        static handleExit({ editor, mark }) {
          const { tr } = editor.state;
          const currentPos = editor.state.selection.$from;
          const isAtEnd = currentPos.pos === currentPos.end();
          if (isAtEnd) {
            const currentMarks = currentPos.marks();
            const isInMark = !!currentMarks.find((m) => (m === null || m === void 0 ? void 0 : m.type.name) === mark.name);
            if (!isInMark) {
              return false;
            }
            const removeMark2 = currentMarks.find((m) => (m === null || m === void 0 ? void 0 : m.type.name) === mark.name);
            if (removeMark2) {
              tr.removeStoredMark(removeMark2);
            }
            tr.insertText(" ", currentPos.pos);
            editor.view.dispatch(tr);
            return true;
          }
          return false;
        }
      };
      Node3 = class {
        constructor(config = {}) {
          this.type = "node";
          this.name = "node";
          this.parent = null;
          this.child = null;
          this.config = {
            name: this.name,
            defaultOptions: {}
          };
          this.config = {
            ...this.config,
            ...config
          };
          this.name = this.config.name;
          if (config.defaultOptions) {
            console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`);
          }
          this.options = this.config.defaultOptions;
          if (this.config.addOptions) {
            this.options = callOrReturn(getExtensionField(this, "addOptions", {
              name: this.name
            }));
          }
          this.storage = callOrReturn(getExtensionField(this, "addStorage", {
            name: this.name,
            options: this.options
          })) || {};
        }
        static create(config = {}) {
          return new Node3(config);
        }
        configure(options = {}) {
          const extension = this.extend();
          extension.options = mergeDeep(this.options, options);
          extension.storage = callOrReturn(getExtensionField(extension, "addStorage", {
            name: extension.name,
            options: extension.options
          }));
          return extension;
        }
        extend(extendedConfig = {}) {
          const extension = new Node3(extendedConfig);
          extension.parent = this;
          this.child = extension;
          extension.name = extendedConfig.name ? extendedConfig.name : extension.parent.name;
          if (extendedConfig.defaultOptions) {
            console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${extension.name}".`);
          }
          extension.options = callOrReturn(getExtensionField(extension, "addOptions", {
            name: extension.name
          }));
          extension.storage = callOrReturn(getExtensionField(extension, "addStorage", {
            name: extension.name,
            options: extension.options
          }));
          return extension;
        }
      };
    }
  });

  // node_modules/@tiptap/extension-blockquote/dist/tiptap-extension-blockquote.esm.js
  var inputRegex, Blockquote;
  var init_tiptap_extension_blockquote_esm = __esm({
    "node_modules/@tiptap/extension-blockquote/dist/tiptap-extension-blockquote.esm.js"() {
      init_tiptap_core_esm();
      inputRegex = /^\s*>\s$/;
      Blockquote = Node3.create({
        name: "blockquote",
        addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        content: "block+",
        group: "block",
        defining: true,
        parseHTML() {
          return [
            { tag: "blockquote" }
          ];
        },
        renderHTML({ HTMLAttributes }) {
          return ["blockquote", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
        },
        addCommands() {
          return {
            setBlockquote: () => ({ commands: commands2 }) => {
              return commands2.wrapIn(this.name);
            },
            toggleBlockquote: () => ({ commands: commands2 }) => {
              return commands2.toggleWrap(this.name);
            },
            unsetBlockquote: () => ({ commands: commands2 }) => {
              return commands2.lift(this.name);
            }
          };
        },
        addKeyboardShortcuts() {
          return {
            "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
          };
        },
        addInputRules() {
          return [
            wrappingInputRule({
              find: inputRegex,
              type: this.type
            })
          ];
        }
      });
    }
  });

  // node_modules/@tiptap/extension-bold/dist/tiptap-extension-bold.esm.js
  var starInputRegex, starPasteRegex, underscoreInputRegex, underscorePasteRegex, Bold;
  var init_tiptap_extension_bold_esm = __esm({
    "node_modules/@tiptap/extension-bold/dist/tiptap-extension-bold.esm.js"() {
      init_tiptap_core_esm();
      starInputRegex = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/;
      starPasteRegex = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))/g;
      underscoreInputRegex = /(?:^|\s)((?:__)((?:[^__]+))(?:__))$/;
      underscorePasteRegex = /(?:^|\s)((?:__)((?:[^__]+))(?:__))/g;
      Bold = Mark2.create({
        name: "bold",
        addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        parseHTML() {
          return [
            {
              tag: "strong"
            },
            {
              tag: "b",
              getAttrs: (node) => node.style.fontWeight !== "normal" && null
            },
            {
              style: "font-weight",
              getAttrs: (value) => /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null
            }
          ];
        },
        renderHTML({ HTMLAttributes }) {
          return ["strong", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
        },
        addCommands() {
          return {
            setBold: () => ({ commands: commands2 }) => {
              return commands2.setMark(this.name);
            },
            toggleBold: () => ({ commands: commands2 }) => {
              return commands2.toggleMark(this.name);
            },
            unsetBold: () => ({ commands: commands2 }) => {
              return commands2.unsetMark(this.name);
            }
          };
        },
        addKeyboardShortcuts() {
          return {
            "Mod-b": () => this.editor.commands.toggleBold(),
            "Mod-B": () => this.editor.commands.toggleBold()
          };
        },
        addInputRules() {
          return [
            markInputRule({
              find: starInputRegex,
              type: this.type
            }),
            markInputRule({
              find: underscoreInputRegex,
              type: this.type
            })
          ];
        },
        addPasteRules() {
          return [
            markPasteRule({
              find: starPasteRegex,
              type: this.type
            }),
            markPasteRule({
              find: underscorePasteRegex,
              type: this.type
            })
          ];
        }
      });
    }
  });

  // node_modules/@tiptap/extension-bullet-list/dist/tiptap-extension-bullet-list.esm.js
  var inputRegex2, BulletList;
  var init_tiptap_extension_bullet_list_esm = __esm({
    "node_modules/@tiptap/extension-bullet-list/dist/tiptap-extension-bullet-list.esm.js"() {
      init_tiptap_core_esm();
      inputRegex2 = /^\s*([-+*])\s$/;
      BulletList = Node3.create({
        name: "bulletList",
        addOptions() {
          return {
            itemTypeName: "listItem",
            HTMLAttributes: {}
          };
        },
        group: "block list",
        content() {
          return `${this.options.itemTypeName}+`;
        },
        parseHTML() {
          return [
            { tag: "ul" }
          ];
        },
        renderHTML({ HTMLAttributes }) {
          return ["ul", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
        },
        addCommands() {
          return {
            toggleBulletList: () => ({ commands: commands2 }) => {
              return commands2.toggleList(this.name, this.options.itemTypeName);
            }
          };
        },
        addKeyboardShortcuts() {
          return {
            "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
          };
        },
        addInputRules() {
          return [
            wrappingInputRule({
              find: inputRegex2,
              type: this.type
            })
          ];
        }
      });
    }
  });

  // node_modules/@tiptap/extension-code/dist/tiptap-extension-code.esm.js
  var inputRegex3, pasteRegex, Code;
  var init_tiptap_extension_code_esm = __esm({
    "node_modules/@tiptap/extension-code/dist/tiptap-extension-code.esm.js"() {
      init_tiptap_core_esm();
      inputRegex3 = /(?:^|\s)((?:`)((?:[^`]+))(?:`))$/;
      pasteRegex = /(?:^|\s)((?:`)((?:[^`]+))(?:`))/g;
      Code = Mark2.create({
        name: "code",
        addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        excludes: "_",
        code: true,
        exitable: true,
        parseHTML() {
          return [
            { tag: "code" }
          ];
        },
        renderHTML({ HTMLAttributes }) {
          return ["code", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
        },
        addCommands() {
          return {
            setCode: () => ({ commands: commands2 }) => {
              return commands2.setMark(this.name);
            },
            toggleCode: () => ({ commands: commands2 }) => {
              return commands2.toggleMark(this.name);
            },
            unsetCode: () => ({ commands: commands2 }) => {
              return commands2.unsetMark(this.name);
            }
          };
        },
        addKeyboardShortcuts() {
          return {
            "Mod-e": () => this.editor.commands.toggleCode()
          };
        },
        addInputRules() {
          return [
            markInputRule({
              find: inputRegex3,
              type: this.type
            })
          ];
        },
        addPasteRules() {
          return [
            markPasteRule({
              find: pasteRegex,
              type: this.type
            })
          ];
        }
      });
    }
  });

  // node_modules/@tiptap/extension-code-block/dist/tiptap-extension-code-block.esm.js
  var backtickInputRegex, tildeInputRegex, CodeBlock;
  var init_tiptap_extension_code_block_esm = __esm({
    "node_modules/@tiptap/extension-code-block/dist/tiptap-extension-code-block.esm.js"() {
      init_tiptap_core_esm();
      init_dist4();
      backtickInputRegex = /^```([a-z]+)?[\s\n]$/;
      tildeInputRegex = /^~~~([a-z]+)?[\s\n]$/;
      CodeBlock = Node3.create({
        name: "codeBlock",
        addOptions() {
          return {
            languageClassPrefix: "language-",
            exitOnTripleEnter: true,
            exitOnArrowDown: true,
            HTMLAttributes: {}
          };
        },
        content: "text*",
        marks: "",
        group: "block",
        code: true,
        defining: true,
        addAttributes() {
          return {
            language: {
              default: null,
              parseHTML: (element) => {
                var _a;
                const { languageClassPrefix } = this.options;
                const classNames = [...((_a = element.firstElementChild) === null || _a === void 0 ? void 0 : _a.classList) || []];
                const languages = classNames.filter((className) => className.startsWith(languageClassPrefix)).map((className) => className.replace(languageClassPrefix, ""));
                const language = languages[0];
                if (!language) {
                  return null;
                }
                return language;
              },
              rendered: false
            }
          };
        },
        parseHTML() {
          return [
            {
              tag: "pre",
              preserveWhitespace: "full"
            }
          ];
        },
        renderHTML({ node, HTMLAttributes }) {
          return [
            "pre",
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
            [
              "code",
              {
                class: node.attrs.language ? this.options.languageClassPrefix + node.attrs.language : null
              },
              0
            ]
          ];
        },
        addCommands() {
          return {
            setCodeBlock: (attributes) => ({ commands: commands2 }) => {
              return commands2.setNode(this.name, attributes);
            },
            toggleCodeBlock: (attributes) => ({ commands: commands2 }) => {
              return commands2.toggleNode(this.name, "paragraph", attributes);
            }
          };
        },
        addKeyboardShortcuts() {
          return {
            "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
            Backspace: () => {
              const { empty: empty2, $anchor } = this.editor.state.selection;
              const isAtStart = $anchor.pos === 1;
              if (!empty2 || $anchor.parent.type.name !== this.name) {
                return false;
              }
              if (isAtStart || !$anchor.parent.textContent.length) {
                return this.editor.commands.clearNodes();
              }
              return false;
            },
            Enter: ({ editor }) => {
              if (!this.options.exitOnTripleEnter) {
                return false;
              }
              const { state } = editor;
              const { selection } = state;
              const { $from, empty: empty2 } = selection;
              if (!empty2 || $from.parent.type !== this.type) {
                return false;
              }
              const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;
              const endsWithDoubleNewline = $from.parent.textContent.endsWith("\n\n");
              if (!isAtEnd || !endsWithDoubleNewline) {
                return false;
              }
              return editor.chain().command(({ tr }) => {
                tr.delete($from.pos - 2, $from.pos);
                return true;
              }).exitCode().run();
            },
            ArrowDown: ({ editor }) => {
              if (!this.options.exitOnArrowDown) {
                return false;
              }
              const { state } = editor;
              const { selection, doc: doc4 } = state;
              const { $from, empty: empty2 } = selection;
              if (!empty2 || $from.parent.type !== this.type) {
                return false;
              }
              const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;
              if (!isAtEnd) {
                return false;
              }
              const after = $from.after();
              if (after === void 0) {
                return false;
              }
              const nodeAfter = doc4.nodeAt(after);
              if (nodeAfter) {
                return false;
              }
              return editor.commands.exitCode();
            }
          };
        },
        addInputRules() {
          return [
            textblockTypeInputRule({
              find: backtickInputRegex,
              type: this.type,
              getAttributes: (match) => ({
                language: match[1]
              })
            }),
            textblockTypeInputRule({
              find: tildeInputRegex,
              type: this.type,
              getAttributes: (match) => ({
                language: match[1]
              })
            })
          ];
        },
        addProseMirrorPlugins() {
          return [
            new Plugin({
              key: new PluginKey("codeBlockVSCodeHandler"),
              props: {
                handlePaste: (view, event) => {
                  if (!event.clipboardData) {
                    return false;
                  }
                  if (this.editor.isActive(this.type.name)) {
                    return false;
                  }
                  const text = event.clipboardData.getData("text/plain");
                  const vscode = event.clipboardData.getData("vscode-editor-data");
                  const vscodeData = vscode ? JSON.parse(vscode) : void 0;
                  const language = vscodeData === null || vscodeData === void 0 ? void 0 : vscodeData.mode;
                  if (!text || !language) {
                    return false;
                  }
                  const { tr } = view.state;
                  tr.replaceSelectionWith(this.type.create({ language }));
                  tr.setSelection(TextSelection.near(tr.doc.resolve(Math.max(0, tr.selection.from - 2))));
                  tr.insertText(text.replace(/\r\n?/g, "\n"));
                  tr.setMeta("paste", true);
                  view.dispatch(tr);
                  return true;
                }
              }
            })
          ];
        }
      });
    }
  });

  // node_modules/@tiptap/extension-document/dist/tiptap-extension-document.esm.js
  var Document;
  var init_tiptap_extension_document_esm = __esm({
    "node_modules/@tiptap/extension-document/dist/tiptap-extension-document.esm.js"() {
      init_tiptap_core_esm();
      Document = Node3.create({
        name: "doc",
        topNode: true,
        content: "block+"
      });
    }
  });

  // node_modules/prosemirror-dropcursor/dist/index.js
  function dropCursor(options = {}) {
    return new Plugin({
      view(editorView) {
        return new DropCursorView(editorView, options);
      }
    });
  }
  var DropCursorView;
  var init_dist9 = __esm({
    "node_modules/prosemirror-dropcursor/dist/index.js"() {
      init_dist4();
      init_dist3();
      DropCursorView = class {
        constructor(editorView, options) {
          this.editorView = editorView;
          this.cursorPos = null;
          this.element = null;
          this.timeout = -1;
          this.width = options.width || 1;
          this.color = options.color || "black";
          this.class = options.class;
          this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((name) => {
            let handler = (e) => {
              this[name](e);
            };
            editorView.dom.addEventListener(name, handler);
            return { name, handler };
          });
        }
        destroy() {
          this.handlers.forEach(({ name, handler }) => this.editorView.dom.removeEventListener(name, handler));
        }
        update(editorView, prevState) {
          if (this.cursorPos != null && prevState.doc != editorView.state.doc) {
            if (this.cursorPos > editorView.state.doc.content.size)
              this.setCursor(null);
            else
              this.updateOverlay();
          }
        }
        setCursor(pos) {
          if (pos == this.cursorPos)
            return;
          this.cursorPos = pos;
          if (pos == null) {
            this.element.parentNode.removeChild(this.element);
            this.element = null;
          } else {
            this.updateOverlay();
          }
        }
        updateOverlay() {
          let $pos = this.editorView.state.doc.resolve(this.cursorPos), rect;
          if (!$pos.parent.inlineContent) {
            let before = $pos.nodeBefore, after = $pos.nodeAfter;
            if (before || after) {
              let nodeRect = this.editorView.nodeDOM(this.cursorPos - (before ? before.nodeSize : 0)).getBoundingClientRect();
              let top = before ? nodeRect.bottom : nodeRect.top;
              if (before && after)
                top = (top + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2;
              rect = { left: nodeRect.left, right: nodeRect.right, top: top - this.width / 2, bottom: top + this.width / 2 };
            }
          }
          if (!rect) {
            let coords = this.editorView.coordsAtPos(this.cursorPos);
            rect = { left: coords.left - this.width / 2, right: coords.left + this.width / 2, top: coords.top, bottom: coords.bottom };
          }
          let parent = this.editorView.dom.offsetParent;
          if (!this.element) {
            this.element = parent.appendChild(document.createElement("div"));
            if (this.class)
              this.element.className = this.class;
            this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none; background-color: " + this.color;
          }
          let parentLeft, parentTop;
          if (!parent || parent == document.body && getComputedStyle(parent).position == "static") {
            parentLeft = -pageXOffset;
            parentTop = -pageYOffset;
          } else {
            let rect2 = parent.getBoundingClientRect();
            parentLeft = rect2.left - parent.scrollLeft;
            parentTop = rect2.top - parent.scrollTop;
          }
          this.element.style.left = rect.left - parentLeft + "px";
          this.element.style.top = rect.top - parentTop + "px";
          this.element.style.width = rect.right - rect.left + "px";
          this.element.style.height = rect.bottom - rect.top + "px";
        }
        scheduleRemoval(timeout) {
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => this.setCursor(null), timeout);
        }
        dragover(event) {
          if (!this.editorView.editable)
            return;
          let pos = this.editorView.posAtCoords({ left: event.clientX, top: event.clientY });
          let node = pos && pos.inside >= 0 && this.editorView.state.doc.nodeAt(pos.inside);
          let disableDropCursor = node && node.type.spec.disableDropCursor;
          let disabled = typeof disableDropCursor == "function" ? disableDropCursor(this.editorView, pos) : disableDropCursor;
          if (pos && !disabled) {
            let target = pos.pos;
            if (this.editorView.dragging && this.editorView.dragging.slice) {
              target = dropPoint(this.editorView.state.doc, target, this.editorView.dragging.slice);
              if (target == null)
                return this.setCursor(null);
            }
            this.setCursor(target);
            this.scheduleRemoval(5e3);
          }
        }
        dragend() {
          this.scheduleRemoval(20);
        }
        drop() {
          this.scheduleRemoval(20);
        }
        dragleave(event) {
          if (event.target == this.editorView.dom || !this.editorView.dom.contains(event.relatedTarget))
            this.setCursor(null);
        }
      };
    }
  });

  // node_modules/@tiptap/extension-dropcursor/dist/tiptap-extension-dropcursor.esm.js
  var Dropcursor;
  var init_tiptap_extension_dropcursor_esm = __esm({
    "node_modules/@tiptap/extension-dropcursor/dist/tiptap-extension-dropcursor.esm.js"() {
      init_tiptap_core_esm();
      init_dist9();
      Dropcursor = Extension.create({
        name: "dropCursor",
        addOptions() {
          return {
            color: "currentColor",
            width: 1,
            class: void 0
          };
        },
        addProseMirrorPlugins() {
          return [
            dropCursor(this.options)
          ];
        }
      });
    }
  });

  // node_modules/prosemirror-gapcursor/dist/index.js
  function closedBefore($pos) {
    for (let d = $pos.depth; d >= 0; d--) {
      let index = $pos.index(d), parent = $pos.node(d);
      if (index == 0) {
        if (parent.type.spec.isolating)
          return true;
        continue;
      }
      for (let before = parent.child(index - 1); ; before = before.lastChild) {
        if (before.childCount == 0 && !before.inlineContent || before.isAtom || before.type.spec.isolating)
          return true;
        if (before.inlineContent)
          return false;
      }
    }
    return true;
  }
  function closedAfter($pos) {
    for (let d = $pos.depth; d >= 0; d--) {
      let index = $pos.indexAfter(d), parent = $pos.node(d);
      if (index == parent.childCount) {
        if (parent.type.spec.isolating)
          return true;
        continue;
      }
      for (let after = parent.child(index); ; after = after.firstChild) {
        if (after.childCount == 0 && !after.inlineContent || after.isAtom || after.type.spec.isolating)
          return true;
        if (after.inlineContent)
          return false;
      }
    }
    return true;
  }
  function gapCursor() {
    return new Plugin({
      props: {
        decorations: drawGapCursor,
        createSelectionBetween(_view, $anchor, $head) {
          return $anchor.pos == $head.pos && GapCursor.valid($head) ? new GapCursor($head) : null;
        },
        handleClick,
        handleKeyDown,
        handleDOMEvents: { beforeinput }
      }
    });
  }
  function arrow(axis, dir) {
    const dirStr = axis == "vert" ? dir > 0 ? "down" : "up" : dir > 0 ? "right" : "left";
    return function(state, dispatch, view) {
      let sel = state.selection;
      let $start = dir > 0 ? sel.$to : sel.$from, mustMove = sel.empty;
      if (sel instanceof TextSelection) {
        if (!view.endOfTextblock(dirStr) || $start.depth == 0)
          return false;
        mustMove = false;
        $start = state.doc.resolve(dir > 0 ? $start.after() : $start.before());
      }
      let $found = GapCursor.findGapCursorFrom($start, dir, mustMove);
      if (!$found)
        return false;
      if (dispatch)
        dispatch(state.tr.setSelection(new GapCursor($found)));
      return true;
    };
  }
  function handleClick(view, pos, event) {
    if (!view || !view.editable)
      return false;
    let $pos = view.state.doc.resolve(pos);
    if (!GapCursor.valid($pos))
      return false;
    let clickPos = view.posAtCoords({ left: event.clientX, top: event.clientY });
    if (clickPos && clickPos.inside > -1 && NodeSelection.isSelectable(view.state.doc.nodeAt(clickPos.inside)))
      return false;
    view.dispatch(view.state.tr.setSelection(new GapCursor($pos)));
    return true;
  }
  function beforeinput(view, event) {
    if (event.inputType != "insertCompositionText" || !(view.state.selection instanceof GapCursor))
      return false;
    let { $from } = view.state.selection;
    let insert = $from.parent.contentMatchAt($from.index()).findWrapping(view.state.schema.nodes.text);
    if (!insert)
      return false;
    let frag = Fragment.empty;
    for (let i = insert.length - 1; i >= 0; i--)
      frag = Fragment.from(insert[i].createAndFill(null, frag));
    let tr = view.state.tr.replace($from.pos, $from.pos, new Slice(frag, 0, 0));
    tr.setSelection(TextSelection.near(tr.doc.resolve($from.pos + 1)));
    view.dispatch(tr);
    return false;
  }
  function drawGapCursor(state) {
    if (!(state.selection instanceof GapCursor))
      return null;
    let node = document.createElement("div");
    node.className = "ProseMirror-gapcursor";
    return DecorationSet.create(state.doc, [Decoration.widget(state.selection.head, node, { key: "gapcursor" })]);
  }
  var GapCursor, GapBookmark, handleKeyDown;
  var init_dist10 = __esm({
    "node_modules/prosemirror-gapcursor/dist/index.js"() {
      init_dist6();
      init_dist4();
      init_dist2();
      init_dist5();
      GapCursor = class extends Selection {
        constructor($pos) {
          super($pos, $pos);
        }
        map(doc4, mapping) {
          let $pos = doc4.resolve(mapping.map(this.head));
          return GapCursor.valid($pos) ? new GapCursor($pos) : Selection.near($pos);
        }
        content() {
          return Slice.empty;
        }
        eq(other) {
          return other instanceof GapCursor && other.head == this.head;
        }
        toJSON() {
          return { type: "gapcursor", pos: this.head };
        }
        static fromJSON(doc4, json) {
          if (typeof json.pos != "number")
            throw new RangeError("Invalid input for GapCursor.fromJSON");
          return new GapCursor(doc4.resolve(json.pos));
        }
        getBookmark() {
          return new GapBookmark(this.anchor);
        }
        static valid($pos) {
          let parent = $pos.parent;
          if (parent.isTextblock || !closedBefore($pos) || !closedAfter($pos))
            return false;
          let override = parent.type.spec.allowGapCursor;
          if (override != null)
            return override;
          let deflt = parent.contentMatchAt($pos.index()).defaultType;
          return deflt && deflt.isTextblock;
        }
        static findGapCursorFrom($pos, dir, mustMove = false) {
          search:
            for (; ; ) {
              if (!mustMove && GapCursor.valid($pos))
                return $pos;
              let pos = $pos.pos, next = null;
              for (let d = $pos.depth; ; d--) {
                let parent = $pos.node(d);
                if (dir > 0 ? $pos.indexAfter(d) < parent.childCount : $pos.index(d) > 0) {
                  next = parent.child(dir > 0 ? $pos.indexAfter(d) : $pos.index(d) - 1);
                  break;
                } else if (d == 0) {
                  return null;
                }
                pos += dir;
                let $cur = $pos.doc.resolve(pos);
                if (GapCursor.valid($cur))
                  return $cur;
              }
              for (; ; ) {
                let inside = dir > 0 ? next.firstChild : next.lastChild;
                if (!inside) {
                  if (next.isAtom && !next.isText && !NodeSelection.isSelectable(next)) {
                    $pos = $pos.doc.resolve(pos + next.nodeSize * dir);
                    mustMove = false;
                    continue search;
                  }
                  break;
                }
                next = inside;
                pos += dir;
                let $cur = $pos.doc.resolve(pos);
                if (GapCursor.valid($cur))
                  return $cur;
              }
              return null;
            }
        }
      };
      GapCursor.prototype.visible = false;
      GapCursor.findFrom = GapCursor.findGapCursorFrom;
      Selection.jsonID("gapcursor", GapCursor);
      GapBookmark = class {
        constructor(pos) {
          this.pos = pos;
        }
        map(mapping) {
          return new GapBookmark(mapping.map(this.pos));
        }
        resolve(doc4) {
          let $pos = doc4.resolve(this.pos);
          return GapCursor.valid($pos) ? new GapCursor($pos) : Selection.near($pos);
        }
      };
      handleKeyDown = keydownHandler({
        "ArrowLeft": arrow("horiz", -1),
        "ArrowRight": arrow("horiz", 1),
        "ArrowUp": arrow("vert", -1),
        "ArrowDown": arrow("vert", 1)
      });
    }
  });

  // node_modules/@tiptap/extension-gapcursor/dist/tiptap-extension-gapcursor.esm.js
  var Gapcursor;
  var init_tiptap_extension_gapcursor_esm = __esm({
    "node_modules/@tiptap/extension-gapcursor/dist/tiptap-extension-gapcursor.esm.js"() {
      init_tiptap_core_esm();
      init_dist10();
      Gapcursor = Extension.create({
        name: "gapCursor",
        addProseMirrorPlugins() {
          return [
            gapCursor()
          ];
        },
        extendNodeSchema(extension) {
          var _a;
          const context = {
            name: extension.name,
            options: extension.options,
            storage: extension.storage
          };
          return {
            allowGapCursor: (_a = callOrReturn(getExtensionField(extension, "allowGapCursor", context))) !== null && _a !== void 0 ? _a : null
          };
        }
      });
    }
  });

  // node_modules/@tiptap/extension-hard-break/dist/tiptap-extension-hard-break.esm.js
  var HardBreak;
  var init_tiptap_extension_hard_break_esm = __esm({
    "node_modules/@tiptap/extension-hard-break/dist/tiptap-extension-hard-break.esm.js"() {
      init_tiptap_core_esm();
      HardBreak = Node3.create({
        name: "hardBreak",
        addOptions() {
          return {
            keepMarks: true,
            HTMLAttributes: {}
          };
        },
        inline: true,
        group: "inline",
        selectable: false,
        parseHTML() {
          return [
            { tag: "br" }
          ];
        },
        renderHTML({ HTMLAttributes }) {
          return ["br", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)];
        },
        renderText() {
          return "\n";
        },
        addCommands() {
          return {
            setHardBreak: () => ({ commands: commands2, chain, state, editor }) => {
              return commands2.first([
                () => commands2.exitCode(),
                () => commands2.command(() => {
                  const { selection, storedMarks } = state;
                  if (selection.$from.parent.type.spec.isolating) {
                    return false;
                  }
                  const { keepMarks } = this.options;
                  const { splittableMarks } = editor.extensionManager;
                  const marks = storedMarks || selection.$to.parentOffset && selection.$from.marks();
                  return chain().insertContent({ type: this.name }).command(({ tr, dispatch }) => {
                    if (dispatch && marks && keepMarks) {
                      const filteredMarks = marks.filter((mark) => splittableMarks.includes(mark.type.name));
                      tr.ensureMarks(filteredMarks);
                    }
                    return true;
                  }).run();
                })
              ]);
            }
          };
        },
        addKeyboardShortcuts() {
          return {
            "Mod-Enter": () => this.editor.commands.setHardBreak(),
            "Shift-Enter": () => this.editor.commands.setHardBreak()
          };
        }
      });
    }
  });

  // node_modules/@tiptap/extension-heading/dist/tiptap-extension-heading.esm.js
  var Heading;
  var init_tiptap_extension_heading_esm = __esm({
    "node_modules/@tiptap/extension-heading/dist/tiptap-extension-heading.esm.js"() {
      init_tiptap_core_esm();
      Heading = Node3.create({
        name: "heading",
        addOptions() {
          return {
            levels: [1, 2, 3, 4, 5, 6],
            HTMLAttributes: {}
          };
        },
        content: "inline*",
        group: "block",
        defining: true,
        addAttributes() {
          return {
            level: {
              default: 1,
              rendered: false
            }
          };
        },
        parseHTML() {
          return this.options.levels.map((level) => ({
            tag: `h${level}`,
            attrs: { level }
          }));
        },
        renderHTML({ node, HTMLAttributes }) {
          const hasLevel = this.options.levels.includes(node.attrs.level);
          const level = hasLevel ? node.attrs.level : this.options.levels[0];
          return [`h${level}`, mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
        },
        addCommands() {
          return {
            setHeading: (attributes) => ({ commands: commands2 }) => {
              if (!this.options.levels.includes(attributes.level)) {
                return false;
              }
              return commands2.setNode(this.name, attributes);
            },
            toggleHeading: (attributes) => ({ commands: commands2 }) => {
              if (!this.options.levels.includes(attributes.level)) {
                return false;
              }
              return commands2.toggleNode(this.name, "paragraph", attributes);
            }
          };
        },
        addKeyboardShortcuts() {
          return this.options.levels.reduce((items, level) => ({
            ...items,
            ...{
              [`Mod-Alt-${level}`]: () => this.editor.commands.toggleHeading({ level })
            }
          }), {});
        },
        addInputRules() {
          return this.options.levels.map((level) => {
            return textblockTypeInputRule({
              find: new RegExp(`^(#{1,${level}})\\s$`),
              type: this.type,
              getAttributes: {
                level
              }
            });
          });
        }
      });
    }
  });

  // node_modules/rope-sequence/dist/index.es.js
  var GOOD_LEAF_SIZE, RopeSequence, Leaf, Append, ropeSequence, index_es_default;
  var init_index_es2 = __esm({
    "node_modules/rope-sequence/dist/index.es.js"() {
      GOOD_LEAF_SIZE = 200;
      RopeSequence = function RopeSequence2() {
      };
      RopeSequence.prototype.append = function append(other) {
        if (!other.length) {
          return this;
        }
        other = RopeSequence.from(other);
        return !this.length && other || other.length < GOOD_LEAF_SIZE && this.leafAppend(other) || this.length < GOOD_LEAF_SIZE && other.leafPrepend(this) || this.appendInner(other);
      };
      RopeSequence.prototype.prepend = function prepend(other) {
        if (!other.length) {
          return this;
        }
        return RopeSequence.from(other).append(this);
      };
      RopeSequence.prototype.appendInner = function appendInner(other) {
        return new Append(this, other);
      };
      RopeSequence.prototype.slice = function slice(from2, to) {
        if (from2 === void 0)
          from2 = 0;
        if (to === void 0)
          to = this.length;
        if (from2 >= to) {
          return RopeSequence.empty;
        }
        return this.sliceInner(Math.max(0, from2), Math.min(this.length, to));
      };
      RopeSequence.prototype.get = function get(i) {
        if (i < 0 || i >= this.length) {
          return void 0;
        }
        return this.getInner(i);
      };
      RopeSequence.prototype.forEach = function forEach2(f, from2, to) {
        if (from2 === void 0)
          from2 = 0;
        if (to === void 0)
          to = this.length;
        if (from2 <= to) {
          this.forEachInner(f, from2, to, 0);
        } else {
          this.forEachInvertedInner(f, from2, to, 0);
        }
      };
      RopeSequence.prototype.map = function map(f, from2, to) {
        if (from2 === void 0)
          from2 = 0;
        if (to === void 0)
          to = this.length;
        var result = [];
        this.forEach(function(elt, i) {
          return result.push(f(elt, i));
        }, from2, to);
        return result;
      };
      RopeSequence.from = function from(values) {
        if (values instanceof RopeSequence) {
          return values;
        }
        return values && values.length ? new Leaf(values) : RopeSequence.empty;
      };
      Leaf = /* @__PURE__ */ function(RopeSequence3) {
        function Leaf2(values) {
          RopeSequence3.call(this);
          this.values = values;
        }
        if (RopeSequence3)
          Leaf2.__proto__ = RopeSequence3;
        Leaf2.prototype = Object.create(RopeSequence3 && RopeSequence3.prototype);
        Leaf2.prototype.constructor = Leaf2;
        var prototypeAccessors = { length: { configurable: true }, depth: { configurable: true } };
        Leaf2.prototype.flatten = function flatten() {
          return this.values;
        };
        Leaf2.prototype.sliceInner = function sliceInner(from2, to) {
          if (from2 == 0 && to == this.length) {
            return this;
          }
          return new Leaf2(this.values.slice(from2, to));
        };
        Leaf2.prototype.getInner = function getInner(i) {
          return this.values[i];
        };
        Leaf2.prototype.forEachInner = function forEachInner(f, from2, to, start) {
          for (var i = from2; i < to; i++) {
            if (f(this.values[i], start + i) === false) {
              return false;
            }
          }
        };
        Leaf2.prototype.forEachInvertedInner = function forEachInvertedInner(f, from2, to, start) {
          for (var i = from2 - 1; i >= to; i--) {
            if (f(this.values[i], start + i) === false) {
              return false;
            }
          }
        };
        Leaf2.prototype.leafAppend = function leafAppend(other) {
          if (this.length + other.length <= GOOD_LEAF_SIZE) {
            return new Leaf2(this.values.concat(other.flatten()));
          }
        };
        Leaf2.prototype.leafPrepend = function leafPrepend(other) {
          if (this.length + other.length <= GOOD_LEAF_SIZE) {
            return new Leaf2(other.flatten().concat(this.values));
          }
        };
        prototypeAccessors.length.get = function() {
          return this.values.length;
        };
        prototypeAccessors.depth.get = function() {
          return 0;
        };
        Object.defineProperties(Leaf2.prototype, prototypeAccessors);
        return Leaf2;
      }(RopeSequence);
      RopeSequence.empty = new Leaf([]);
      Append = /* @__PURE__ */ function(RopeSequence3) {
        function Append2(left, right) {
          RopeSequence3.call(this);
          this.left = left;
          this.right = right;
          this.length = left.length + right.length;
          this.depth = Math.max(left.depth, right.depth) + 1;
        }
        if (RopeSequence3)
          Append2.__proto__ = RopeSequence3;
        Append2.prototype = Object.create(RopeSequence3 && RopeSequence3.prototype);
        Append2.prototype.constructor = Append2;
        Append2.prototype.flatten = function flatten() {
          return this.left.flatten().concat(this.right.flatten());
        };
        Append2.prototype.getInner = function getInner(i) {
          return i < this.left.length ? this.left.get(i) : this.right.get(i - this.left.length);
        };
        Append2.prototype.forEachInner = function forEachInner(f, from2, to, start) {
          var leftLen = this.left.length;
          if (from2 < leftLen && this.left.forEachInner(f, from2, Math.min(to, leftLen), start) === false) {
            return false;
          }
          if (to > leftLen && this.right.forEachInner(f, Math.max(from2 - leftLen, 0), Math.min(this.length, to) - leftLen, start + leftLen) === false) {
            return false;
          }
        };
        Append2.prototype.forEachInvertedInner = function forEachInvertedInner(f, from2, to, start) {
          var leftLen = this.left.length;
          if (from2 > leftLen && this.right.forEachInvertedInner(f, from2 - leftLen, Math.max(to, leftLen) - leftLen, start + leftLen) === false) {
            return false;
          }
          if (to < leftLen && this.left.forEachInvertedInner(f, Math.min(from2, leftLen), to, start) === false) {
            return false;
          }
        };
        Append2.prototype.sliceInner = function sliceInner(from2, to) {
          if (from2 == 0 && to == this.length) {
            return this;
          }
          var leftLen = this.left.length;
          if (to <= leftLen) {
            return this.left.slice(from2, to);
          }
          if (from2 >= leftLen) {
            return this.right.slice(from2 - leftLen, to - leftLen);
          }
          return this.left.slice(from2, leftLen).append(this.right.slice(0, to - leftLen));
        };
        Append2.prototype.leafAppend = function leafAppend(other) {
          var inner = this.right.leafAppend(other);
          if (inner) {
            return new Append2(this.left, inner);
          }
        };
        Append2.prototype.leafPrepend = function leafPrepend(other) {
          var inner = this.left.leafPrepend(other);
          if (inner) {
            return new Append2(inner, this.right);
          }
        };
        Append2.prototype.appendInner = function appendInner2(other) {
          if (this.left.depth >= Math.max(this.right.depth, other.depth) + 1) {
            return new Append2(this.left, new Append2(this.right, other));
          }
          return new Append2(this, other);
        };
        return Append2;
      }(RopeSequence);
      ropeSequence = RopeSequence;
      index_es_default = ropeSequence;
    }
  });

  // node_modules/prosemirror-history/dist/index.js
  function cutOffEvents(items, n) {
    let cutPoint;
    items.forEach((item, i) => {
      if (item.selection && n-- == 0) {
        cutPoint = i;
        return false;
      }
    });
    return items.slice(cutPoint);
  }
  function applyTransaction(history3, state, tr, options) {
    let historyTr = tr.getMeta(historyKey), rebased;
    if (historyTr)
      return historyTr.historyState;
    if (tr.getMeta(closeHistoryKey))
      history3 = new HistoryState(history3.done, history3.undone, null, 0);
    let appended = tr.getMeta("appendedTransaction");
    if (tr.steps.length == 0) {
      return history3;
    } else if (appended && appended.getMeta(historyKey)) {
      if (appended.getMeta(historyKey).redo)
        return new HistoryState(history3.done.addTransform(tr, void 0, options, mustPreserveItems(state)), history3.undone, rangesFor(tr.mapping.maps[tr.steps.length - 1]), history3.prevTime);
      else
        return new HistoryState(history3.done, history3.undone.addTransform(tr, void 0, options, mustPreserveItems(state)), null, history3.prevTime);
    } else if (tr.getMeta("addToHistory") !== false && !(appended && appended.getMeta("addToHistory") === false)) {
      let newGroup = history3.prevTime == 0 || !appended && (history3.prevTime < (tr.time || 0) - options.newGroupDelay || !isAdjacentTo(tr, history3.prevRanges));
      let prevRanges = appended ? mapRanges(history3.prevRanges, tr.mapping) : rangesFor(tr.mapping.maps[tr.steps.length - 1]);
      return new HistoryState(history3.done.addTransform(tr, newGroup ? state.selection.getBookmark() : void 0, options, mustPreserveItems(state)), Branch.empty, prevRanges, tr.time);
    } else if (rebased = tr.getMeta("rebased")) {
      return new HistoryState(history3.done.rebased(tr, rebased), history3.undone.rebased(tr, rebased), mapRanges(history3.prevRanges, tr.mapping), history3.prevTime);
    } else {
      return new HistoryState(history3.done.addMaps(tr.mapping.maps), history3.undone.addMaps(tr.mapping.maps), mapRanges(history3.prevRanges, tr.mapping), history3.prevTime);
    }
  }
  function isAdjacentTo(transform, prevRanges) {
    if (!prevRanges)
      return false;
    if (!transform.docChanged)
      return true;
    let adjacent = false;
    transform.mapping.maps[0].forEach((start, end) => {
      for (let i = 0; i < prevRanges.length; i += 2)
        if (start <= prevRanges[i + 1] && end >= prevRanges[i])
          adjacent = true;
    });
    return adjacent;
  }
  function rangesFor(map2) {
    let result = [];
    map2.forEach((_from, _to, from2, to) => result.push(from2, to));
    return result;
  }
  function mapRanges(ranges, mapping) {
    if (!ranges)
      return null;
    let result = [];
    for (let i = 0; i < ranges.length; i += 2) {
      let from2 = mapping.map(ranges[i], 1), to = mapping.map(ranges[i + 1], -1);
      if (from2 <= to)
        result.push(from2, to);
    }
    return result;
  }
  function histTransaction(history3, state, dispatch, redo2) {
    let preserveItems = mustPreserveItems(state);
    let histOptions = historyKey.get(state).spec.config;
    let pop = (redo2 ? history3.undone : history3.done).popEvent(state, preserveItems);
    if (!pop)
      return;
    let selection = pop.selection.resolve(pop.transform.doc);
    let added = (redo2 ? history3.done : history3.undone).addTransform(pop.transform, state.selection.getBookmark(), histOptions, preserveItems);
    let newHist = new HistoryState(redo2 ? added : pop.remaining, redo2 ? pop.remaining : added, null, 0);
    dispatch(pop.transform.setSelection(selection).setMeta(historyKey, { redo: redo2, historyState: newHist }).scrollIntoView());
  }
  function mustPreserveItems(state) {
    let plugins = state.plugins;
    if (cachedPreserveItemsPlugins != plugins) {
      cachedPreserveItems = false;
      cachedPreserveItemsPlugins = plugins;
      for (let i = 0; i < plugins.length; i++)
        if (plugins[i].spec.historyPreserveItems) {
          cachedPreserveItems = true;
          break;
        }
    }
    return cachedPreserveItems;
  }
  function history2(config = {}) {
    config = {
      depth: config.depth || 100,
      newGroupDelay: config.newGroupDelay || 500
    };
    return new Plugin({
      key: historyKey,
      state: {
        init() {
          return new HistoryState(Branch.empty, Branch.empty, null, 0);
        },
        apply(tr, hist, state) {
          return applyTransaction(hist, state, tr, config);
        }
      },
      config,
      props: {
        handleDOMEvents: {
          beforeinput(view, e) {
            let inputType = e.inputType;
            let command2 = inputType == "historyUndo" ? undo : inputType == "historyRedo" ? redo : null;
            if (!command2)
              return false;
            e.preventDefault();
            return command2(view.state, view.dispatch);
          }
        }
      }
    });
  }
  var max_empty_items, Branch, Item, HistoryState, DEPTH_OVERFLOW, cachedPreserveItems, cachedPreserveItemsPlugins, historyKey, closeHistoryKey, undo, redo;
  var init_dist11 = __esm({
    "node_modules/prosemirror-history/dist/index.js"() {
      init_index_es2();
      init_dist3();
      init_dist4();
      max_empty_items = 500;
      Branch = class {
        constructor(items, eventCount) {
          this.items = items;
          this.eventCount = eventCount;
        }
        popEvent(state, preserveItems) {
          if (this.eventCount == 0)
            return null;
          let end = this.items.length;
          for (; ; end--) {
            let next = this.items.get(end - 1);
            if (next.selection) {
              --end;
              break;
            }
          }
          let remap, mapFrom;
          if (preserveItems) {
            remap = this.remapping(end, this.items.length);
            mapFrom = remap.maps.length;
          }
          let transform = state.tr;
          let selection, remaining;
          let addAfter = [], addBefore = [];
          this.items.forEach((item, i) => {
            if (!item.step) {
              if (!remap) {
                remap = this.remapping(end, i + 1);
                mapFrom = remap.maps.length;
              }
              mapFrom--;
              addBefore.push(item);
              return;
            }
            if (remap) {
              addBefore.push(new Item(item.map));
              let step = item.step.map(remap.slice(mapFrom)), map2;
              if (step && transform.maybeStep(step).doc) {
                map2 = transform.mapping.maps[transform.mapping.maps.length - 1];
                addAfter.push(new Item(map2, void 0, void 0, addAfter.length + addBefore.length));
              }
              mapFrom--;
              if (map2)
                remap.appendMap(map2, mapFrom);
            } else {
              transform.maybeStep(item.step);
            }
            if (item.selection) {
              selection = remap ? item.selection.map(remap.slice(mapFrom)) : item.selection;
              remaining = new Branch(this.items.slice(0, end).append(addBefore.reverse().concat(addAfter)), this.eventCount - 1);
              return false;
            }
          }, this.items.length, 0);
          return { remaining, transform, selection };
        }
        addTransform(transform, selection, histOptions, preserveItems) {
          let newItems = [], eventCount = this.eventCount;
          let oldItems = this.items, lastItem = !preserveItems && oldItems.length ? oldItems.get(oldItems.length - 1) : null;
          for (let i = 0; i < transform.steps.length; i++) {
            let step = transform.steps[i].invert(transform.docs[i]);
            let item = new Item(transform.mapping.maps[i], step, selection), merged;
            if (merged = lastItem && lastItem.merge(item)) {
              item = merged;
              if (i)
                newItems.pop();
              else
                oldItems = oldItems.slice(0, oldItems.length - 1);
            }
            newItems.push(item);
            if (selection) {
              eventCount++;
              selection = void 0;
            }
            if (!preserveItems)
              lastItem = item;
          }
          let overflow = eventCount - histOptions.depth;
          if (overflow > DEPTH_OVERFLOW) {
            oldItems = cutOffEvents(oldItems, overflow);
            eventCount -= overflow;
          }
          return new Branch(oldItems.append(newItems), eventCount);
        }
        remapping(from2, to) {
          let maps = new Mapping();
          this.items.forEach((item, i) => {
            let mirrorPos = item.mirrorOffset != null && i - item.mirrorOffset >= from2 ? maps.maps.length - item.mirrorOffset : void 0;
            maps.appendMap(item.map, mirrorPos);
          }, from2, to);
          return maps;
        }
        addMaps(array) {
          if (this.eventCount == 0)
            return this;
          return new Branch(this.items.append(array.map((map2) => new Item(map2))), this.eventCount);
        }
        rebased(rebasedTransform, rebasedCount) {
          if (!this.eventCount)
            return this;
          let rebasedItems = [], start = Math.max(0, this.items.length - rebasedCount);
          let mapping = rebasedTransform.mapping;
          let newUntil = rebasedTransform.steps.length;
          let eventCount = this.eventCount;
          this.items.forEach((item) => {
            if (item.selection)
              eventCount--;
          }, start);
          let iRebased = rebasedCount;
          this.items.forEach((item) => {
            let pos = mapping.getMirror(--iRebased);
            if (pos == null)
              return;
            newUntil = Math.min(newUntil, pos);
            let map2 = mapping.maps[pos];
            if (item.step) {
              let step = rebasedTransform.steps[pos].invert(rebasedTransform.docs[pos]);
              let selection = item.selection && item.selection.map(mapping.slice(iRebased + 1, pos));
              if (selection)
                eventCount++;
              rebasedItems.push(new Item(map2, step, selection));
            } else {
              rebasedItems.push(new Item(map2));
            }
          }, start);
          let newMaps = [];
          for (let i = rebasedCount; i < newUntil; i++)
            newMaps.push(new Item(mapping.maps[i]));
          let items = this.items.slice(0, start).append(newMaps).append(rebasedItems);
          let branch = new Branch(items, eventCount);
          if (branch.emptyItemCount() > max_empty_items)
            branch = branch.compress(this.items.length - rebasedItems.length);
          return branch;
        }
        emptyItemCount() {
          let count = 0;
          this.items.forEach((item) => {
            if (!item.step)
              count++;
          });
          return count;
        }
        compress(upto = this.items.length) {
          let remap = this.remapping(0, upto), mapFrom = remap.maps.length;
          let items = [], events = 0;
          this.items.forEach((item, i) => {
            if (i >= upto) {
              items.push(item);
              if (item.selection)
                events++;
            } else if (item.step) {
              let step = item.step.map(remap.slice(mapFrom)), map2 = step && step.getMap();
              mapFrom--;
              if (map2)
                remap.appendMap(map2, mapFrom);
              if (step) {
                let selection = item.selection && item.selection.map(remap.slice(mapFrom));
                if (selection)
                  events++;
                let newItem = new Item(map2.invert(), step, selection), merged, last = items.length - 1;
                if (merged = items.length && items[last].merge(newItem))
                  items[last] = merged;
                else
                  items.push(newItem);
              }
            } else if (item.map) {
              mapFrom--;
            }
          }, this.items.length, 0);
          return new Branch(index_es_default.from(items.reverse()), events);
        }
      };
      Branch.empty = new Branch(index_es_default.empty, 0);
      Item = class {
        constructor(map2, step, selection, mirrorOffset) {
          this.map = map2;
          this.step = step;
          this.selection = selection;
          this.mirrorOffset = mirrorOffset;
        }
        merge(other) {
          if (this.step && other.step && !other.selection) {
            let step = other.step.merge(this.step);
            if (step)
              return new Item(step.getMap().invert(), step, this.selection);
          }
        }
      };
      HistoryState = class {
        constructor(done, undone, prevRanges, prevTime) {
          this.done = done;
          this.undone = undone;
          this.prevRanges = prevRanges;
          this.prevTime = prevTime;
        }
      };
      DEPTH_OVERFLOW = 20;
      cachedPreserveItems = false;
      cachedPreserveItemsPlugins = null;
      historyKey = new PluginKey("history");
      closeHistoryKey = new PluginKey("closeHistory");
      undo = (state, dispatch) => {
        let hist = historyKey.getState(state);
        if (!hist || hist.done.eventCount == 0)
          return false;
        if (dispatch)
          histTransaction(hist, state, dispatch, false);
        return true;
      };
      redo = (state, dispatch) => {
        let hist = historyKey.getState(state);
        if (!hist || hist.undone.eventCount == 0)
          return false;
        if (dispatch)
          histTransaction(hist, state, dispatch, true);
        return true;
      };
    }
  });

  // node_modules/@tiptap/extension-history/dist/tiptap-extension-history.esm.js
  var History;
  var init_tiptap_extension_history_esm = __esm({
    "node_modules/@tiptap/extension-history/dist/tiptap-extension-history.esm.js"() {
      init_tiptap_core_esm();
      init_dist11();
      History = Extension.create({
        name: "history",
        addOptions() {
          return {
            depth: 100,
            newGroupDelay: 500
          };
        },
        addCommands() {
          return {
            undo: () => ({ state, dispatch }) => {
              return undo(state, dispatch);
            },
            redo: () => ({ state, dispatch }) => {
              return redo(state, dispatch);
            }
          };
        },
        addProseMirrorPlugins() {
          return [
            history2(this.options)
          ];
        },
        addKeyboardShortcuts() {
          return {
            "Mod-z": () => this.editor.commands.undo(),
            "Mod-y": () => this.editor.commands.redo(),
            "Shift-Mod-z": () => this.editor.commands.redo(),
            "Mod-\u044F": () => this.editor.commands.undo(),
            "Shift-Mod-\u044F": () => this.editor.commands.redo()
          };
        }
      });
    }
  });

  // node_modules/@tiptap/extension-horizontal-rule/dist/tiptap-extension-horizontal-rule.esm.js
  var HorizontalRule;
  var init_tiptap_extension_horizontal_rule_esm = __esm({
    "node_modules/@tiptap/extension-horizontal-rule/dist/tiptap-extension-horizontal-rule.esm.js"() {
      init_tiptap_core_esm();
      init_dist4();
      HorizontalRule = Node3.create({
        name: "horizontalRule",
        addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        group: "block",
        parseHTML() {
          return [
            { tag: "hr" }
          ];
        },
        renderHTML({ HTMLAttributes }) {
          return ["hr", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)];
        },
        addCommands() {
          return {
            setHorizontalRule: () => ({ chain }) => {
              return chain().insertContent({ type: this.name }).command(({ tr, dispatch }) => {
                var _a;
                if (dispatch) {
                  const { $to } = tr.selection;
                  const posAfter = $to.end();
                  if ($to.nodeAfter) {
                    tr.setSelection(TextSelection.create(tr.doc, $to.pos));
                  } else {
                    const node = (_a = $to.parent.type.contentMatch.defaultType) === null || _a === void 0 ? void 0 : _a.create();
                    if (node) {
                      tr.insert(posAfter, node);
                      tr.setSelection(TextSelection.create(tr.doc, posAfter));
                    }
                  }
                  tr.scrollIntoView();
                }
                return true;
              }).run();
            }
          };
        },
        addInputRules() {
          return [
            nodeInputRule({
              find: /^(?:---|—-|___\s|\*\*\*\s)$/,
              type: this.type
            })
          ];
        }
      });
    }
  });

  // node_modules/@tiptap/extension-italic/dist/tiptap-extension-italic.esm.js
  var starInputRegex2, starPasteRegex2, underscoreInputRegex2, underscorePasteRegex2, Italic;
  var init_tiptap_extension_italic_esm = __esm({
    "node_modules/@tiptap/extension-italic/dist/tiptap-extension-italic.esm.js"() {
      init_tiptap_core_esm();
      starInputRegex2 = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/;
      starPasteRegex2 = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/g;
      underscoreInputRegex2 = /(?:^|\s)((?:_)((?:[^_]+))(?:_))$/;
      underscorePasteRegex2 = /(?:^|\s)((?:_)((?:[^_]+))(?:_))/g;
      Italic = Mark2.create({
        name: "italic",
        addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        parseHTML() {
          return [
            {
              tag: "em"
            },
            {
              tag: "i",
              getAttrs: (node) => node.style.fontStyle !== "normal" && null
            },
            {
              style: "font-style=italic"
            }
          ];
        },
        renderHTML({ HTMLAttributes }) {
          return ["em", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
        },
        addCommands() {
          return {
            setItalic: () => ({ commands: commands2 }) => {
              return commands2.setMark(this.name);
            },
            toggleItalic: () => ({ commands: commands2 }) => {
              return commands2.toggleMark(this.name);
            },
            unsetItalic: () => ({ commands: commands2 }) => {
              return commands2.unsetMark(this.name);
            }
          };
        },
        addKeyboardShortcuts() {
          return {
            "Mod-i": () => this.editor.commands.toggleItalic(),
            "Mod-I": () => this.editor.commands.toggleItalic()
          };
        },
        addInputRules() {
          return [
            markInputRule({
              find: starInputRegex2,
              type: this.type
            }),
            markInputRule({
              find: underscoreInputRegex2,
              type: this.type
            })
          ];
        },
        addPasteRules() {
          return [
            markPasteRule({
              find: starPasteRegex2,
              type: this.type
            }),
            markPasteRule({
              find: underscorePasteRegex2,
              type: this.type
            })
          ];
        }
      });
    }
  });

  // node_modules/@tiptap/extension-list-item/dist/tiptap-extension-list-item.esm.js
  var ListItem;
  var init_tiptap_extension_list_item_esm = __esm({
    "node_modules/@tiptap/extension-list-item/dist/tiptap-extension-list-item.esm.js"() {
      init_tiptap_core_esm();
      ListItem = Node3.create({
        name: "listItem",
        addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        content: "paragraph block*",
        defining: true,
        parseHTML() {
          return [
            {
              tag: "li"
            }
          ];
        },
        renderHTML({ HTMLAttributes }) {
          return ["li", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
        },
        addKeyboardShortcuts() {
          return {
            Enter: () => this.editor.commands.splitListItem(this.name),
            Tab: () => this.editor.commands.sinkListItem(this.name),
            "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
          };
        }
      });
    }
  });

  // node_modules/@tiptap/extension-ordered-list/dist/tiptap-extension-ordered-list.esm.js
  var inputRegex4, OrderedList;
  var init_tiptap_extension_ordered_list_esm = __esm({
    "node_modules/@tiptap/extension-ordered-list/dist/tiptap-extension-ordered-list.esm.js"() {
      init_tiptap_core_esm();
      inputRegex4 = /^(\d+)\.\s$/;
      OrderedList = Node3.create({
        name: "orderedList",
        addOptions() {
          return {
            itemTypeName: "listItem",
            HTMLAttributes: {}
          };
        },
        group: "block list",
        content() {
          return `${this.options.itemTypeName}+`;
        },
        addAttributes() {
          return {
            start: {
              default: 1,
              parseHTML: (element) => {
                return element.hasAttribute("start") ? parseInt(element.getAttribute("start") || "", 10) : 1;
              }
            }
          };
        },
        parseHTML() {
          return [
            {
              tag: "ol"
            }
          ];
        },
        renderHTML({ HTMLAttributes }) {
          const { start, ...attributesWithoutStart } = HTMLAttributes;
          return start === 1 ? ["ol", mergeAttributes(this.options.HTMLAttributes, attributesWithoutStart), 0] : ["ol", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
        },
        addCommands() {
          return {
            toggleOrderedList: () => ({ commands: commands2 }) => {
              return commands2.toggleList(this.name, this.options.itemTypeName);
            }
          };
        },
        addKeyboardShortcuts() {
          return {
            "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
          };
        },
        addInputRules() {
          return [
            wrappingInputRule({
              find: inputRegex4,
              type: this.type,
              getAttributes: (match) => ({ start: +match[1] }),
              joinPredicate: (match, node) => node.childCount + node.attrs.start === +match[1]
            })
          ];
        }
      });
    }
  });

  // node_modules/@tiptap/extension-paragraph/dist/tiptap-extension-paragraph.esm.js
  var Paragraph;
  var init_tiptap_extension_paragraph_esm = __esm({
    "node_modules/@tiptap/extension-paragraph/dist/tiptap-extension-paragraph.esm.js"() {
      init_tiptap_core_esm();
      Paragraph = Node3.create({
        name: "paragraph",
        priority: 1e3,
        addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        group: "block",
        content: "inline*",
        parseHTML() {
          return [
            { tag: "p" }
          ];
        },
        renderHTML({ HTMLAttributes }) {
          return ["p", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
        },
        addCommands() {
          return {
            setParagraph: () => ({ commands: commands2 }) => {
              return commands2.setNode(this.name);
            }
          };
        },
        addKeyboardShortcuts() {
          return {
            "Mod-Alt-0": () => this.editor.commands.setParagraph()
          };
        }
      });
    }
  });

  // node_modules/@tiptap/extension-strike/dist/tiptap-extension-strike.esm.js
  var inputRegex5, pasteRegex2, Strike;
  var init_tiptap_extension_strike_esm = __esm({
    "node_modules/@tiptap/extension-strike/dist/tiptap-extension-strike.esm.js"() {
      init_tiptap_core_esm();
      inputRegex5 = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))$/;
      pasteRegex2 = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))/g;
      Strike = Mark2.create({
        name: "strike",
        addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        parseHTML() {
          return [
            {
              tag: "s"
            },
            {
              tag: "del"
            },
            {
              tag: "strike"
            },
            {
              style: "text-decoration",
              consuming: false,
              getAttrs: (style2) => style2.includes("line-through") ? {} : false
            }
          ];
        },
        renderHTML({ HTMLAttributes }) {
          return ["s", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
        },
        addCommands() {
          return {
            setStrike: () => ({ commands: commands2 }) => {
              return commands2.setMark(this.name);
            },
            toggleStrike: () => ({ commands: commands2 }) => {
              return commands2.toggleMark(this.name);
            },
            unsetStrike: () => ({ commands: commands2 }) => {
              return commands2.unsetMark(this.name);
            }
          };
        },
        addKeyboardShortcuts() {
          return {
            "Mod-Shift-x": () => this.editor.commands.toggleStrike()
          };
        },
        addInputRules() {
          return [
            markInputRule({
              find: inputRegex5,
              type: this.type
            })
          ];
        },
        addPasteRules() {
          return [
            markPasteRule({
              find: pasteRegex2,
              type: this.type
            })
          ];
        }
      });
    }
  });

  // node_modules/@tiptap/extension-text/dist/tiptap-extension-text.esm.js
  var Text;
  var init_tiptap_extension_text_esm = __esm({
    "node_modules/@tiptap/extension-text/dist/tiptap-extension-text.esm.js"() {
      init_tiptap_core_esm();
      Text = Node3.create({
        name: "text",
        group: "inline"
      });
    }
  });

  // node_modules/@tiptap/starter-kit/dist/tiptap-starter-kit.esm.js
  var StarterKit;
  var init_tiptap_starter_kit_esm = __esm({
    "node_modules/@tiptap/starter-kit/dist/tiptap-starter-kit.esm.js"() {
      init_tiptap_core_esm();
      init_tiptap_extension_blockquote_esm();
      init_tiptap_extension_bold_esm();
      init_tiptap_extension_bullet_list_esm();
      init_tiptap_extension_code_esm();
      init_tiptap_extension_code_block_esm();
      init_tiptap_extension_document_esm();
      init_tiptap_extension_dropcursor_esm();
      init_tiptap_extension_gapcursor_esm();
      init_tiptap_extension_hard_break_esm();
      init_tiptap_extension_heading_esm();
      init_tiptap_extension_history_esm();
      init_tiptap_extension_horizontal_rule_esm();
      init_tiptap_extension_italic_esm();
      init_tiptap_extension_list_item_esm();
      init_tiptap_extension_ordered_list_esm();
      init_tiptap_extension_paragraph_esm();
      init_tiptap_extension_strike_esm();
      init_tiptap_extension_text_esm();
      StarterKit = Extension.create({
        name: "starterKit",
        addExtensions() {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
          const extensions2 = [];
          if (this.options.blockquote !== false) {
            extensions2.push(Blockquote.configure((_a = this.options) === null || _a === void 0 ? void 0 : _a.blockquote));
          }
          if (this.options.bold !== false) {
            extensions2.push(Bold.configure((_b = this.options) === null || _b === void 0 ? void 0 : _b.bold));
          }
          if (this.options.bulletList !== false) {
            extensions2.push(BulletList.configure((_c = this.options) === null || _c === void 0 ? void 0 : _c.bulletList));
          }
          if (this.options.code !== false) {
            extensions2.push(Code.configure((_d = this.options) === null || _d === void 0 ? void 0 : _d.code));
          }
          if (this.options.codeBlock !== false) {
            extensions2.push(CodeBlock.configure((_e = this.options) === null || _e === void 0 ? void 0 : _e.codeBlock));
          }
          if (this.options.document !== false) {
            extensions2.push(Document.configure((_f = this.options) === null || _f === void 0 ? void 0 : _f.document));
          }
          if (this.options.dropcursor !== false) {
            extensions2.push(Dropcursor.configure((_g = this.options) === null || _g === void 0 ? void 0 : _g.dropcursor));
          }
          if (this.options.gapcursor !== false) {
            extensions2.push(Gapcursor.configure((_h = this.options) === null || _h === void 0 ? void 0 : _h.gapcursor));
          }
          if (this.options.hardBreak !== false) {
            extensions2.push(HardBreak.configure((_j = this.options) === null || _j === void 0 ? void 0 : _j.hardBreak));
          }
          if (this.options.heading !== false) {
            extensions2.push(Heading.configure((_k = this.options) === null || _k === void 0 ? void 0 : _k.heading));
          }
          if (this.options.history !== false) {
            extensions2.push(History.configure((_l = this.options) === null || _l === void 0 ? void 0 : _l.history));
          }
          if (this.options.horizontalRule !== false) {
            extensions2.push(HorizontalRule.configure((_m = this.options) === null || _m === void 0 ? void 0 : _m.horizontalRule));
          }
          if (this.options.italic !== false) {
            extensions2.push(Italic.configure((_o = this.options) === null || _o === void 0 ? void 0 : _o.italic));
          }
          if (this.options.listItem !== false) {
            extensions2.push(ListItem.configure((_p = this.options) === null || _p === void 0 ? void 0 : _p.listItem));
          }
          if (this.options.orderedList !== false) {
            extensions2.push(OrderedList.configure((_q = this.options) === null || _q === void 0 ? void 0 : _q.orderedList));
          }
          if (this.options.paragraph !== false) {
            extensions2.push(Paragraph.configure((_r = this.options) === null || _r === void 0 ? void 0 : _r.paragraph));
          }
          if (this.options.strike !== false) {
            extensions2.push(Strike.configure((_s = this.options) === null || _s === void 0 ? void 0 : _s.strike));
          }
          if (this.options.text !== false) {
            extensions2.push(Text.configure((_t = this.options) === null || _t === void 0 ? void 0 : _t.text));
          }
          return extensions2;
        }
      });
    }
  });

  // js/tiptap.js
  var tiptap_exports = {};
  __export(tiptap_exports, {
    HTMLEditor: () => HTMLEditor
  });
  var HTMLEditor;
  var init_tiptap = __esm({
    "js/tiptap.js"() {
      init_tiptap_core_esm();
      init_tiptap_starter_kit_esm();
      HTMLEditor = (element) => {
        const editorMenu = document.querySelectorAll(".editor-menu button");
        const textarea = document.querySelector(element.dataset.target);
        const editor = new Editor({
          element: document.getElementById(element.id),
          extensions: [
            StarterKit
          ],
          content: textarea.value,
          onCreate({ editor: editor2 }) {
            textarea.value = editor2.getHTML();
            initMenus(editor2);
          },
          onUpdate({ editor: editor2 }) {
            textarea.value = editor2.getHTML();
            initMenus(editor2);
          },
          onSelectionUpdate({ editor: editor2 }) {
            textarea.value = editor2.getHTML();
            initMenus(editor2);
          }
        });
        const initMenus = (editor2) => {
          const menus = Array.from(editorMenu);
          menus.pop();
          menus.map((menu) => {
            let opts = {};
            if (menu.dataset.level) {
              opts.level = parseInt(menu.dataset.level);
            }
            if (editor2.isActive(menu.dataset.name, opts)) {
              menu.className = "active";
            } else {
              menu.className = "";
            }
          });
        };
        element.addEventListener("heading", (e) => {
          const level = parseInt(e.detail.dispatcher.dataset.level);
          editor.chain().toggleHeading({ level }).focus().run();
        });
        element.addEventListener("bold", (e) => {
          editor.chain().toggleBold().focus().run();
        });
        element.addEventListener("italic", (e) => {
          editor.chain().toggleItalic().focus().run();
        });
        element.addEventListener("bulletList", (e) => {
          editor.chain().focus().toggleBulletList().run();
        });
        element.addEventListener("orderedList", (e) => {
          editor.chain().focus().toggleOrderedList().run();
        });
        element.addEventListener("blockquote", (e) => {
          editor.chain().focus().toggleBlockquote().run();
        });
        element.addEventListener("horizontalRule", (e) => {
          editor.chain().focus().setHorizontalRule().run();
        });
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
      let isActive2 = activeRefs.indexOf(LiveUploader.genFileRef(file)) >= 0;
      return file.size > 0 && (isNew || isActive2);
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
      var parentNode2 = fromEl.parentNode;
      if (parentNode2) {
        var parentName = parentNode2.nodeName.toUpperCase();
        if (parentName === "OPTGROUP") {
          parentNode2 = parentNode2.parentNode;
          parentName = parentNode2 && parentNode2.nodeName.toUpperCase();
        }
        if (parentName === "SELECT" && !parentNode2.hasAttribute("multiple")) {
          if (fromEl.hasAttribute("selected") && !toEl.selected) {
            fromEl.setAttribute("selected", "selected");
            fromEl.removeAttribute("selected");
          }
          parentNode2.selectedIndex = -1;
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
      function removeNode(node, parentNode2, skipKeyedNodes) {
        if (onBeforeNodeDiscarded(node) === false) {
          return;
        }
        if (parentNode2) {
          parentNode2.removeChild(node);
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
      let [first2, ...rest] = dom_default.findComponentNodeList(this.container, this.targetCID);
      if (rest.length === 0 && dom_default.childNodeLength(html) === 1) {
        return first2;
      } else {
        return first2 && first2.parentNode;
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
      let commands2 = phxEvent.charAt(0) === "[" ? JSON.parse(phxEvent) : [[defaultKind, defaultArgs]];
      commands2.forEach(([kind, args]) => {
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
      this.bindings = this.bindings.filter((bind2) => {
        return !(bind2.event === event && (typeof ref === "undefined" || ref === bind2.ref));
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
      let eventBindings = this.bindings.filter((bind2) => bind2.event === event);
      for (let i = 0; i < eventBindings.length; i++) {
        let bind2 = eventBindings[i];
        bind2.callback(handledPayload, ref, joinRef || this.joinRef());
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
      Promise.resolve().then(() => (init_tiptap(), tiptap_exports)).then(
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
