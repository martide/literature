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

  // node_modules/@editorjs/editorjs/dist/editor.js
  var require_editor = __commonJS({
    "node_modules/@editorjs/editorjs/dist/editor.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.EditorJS = e() : t.EditorJS = e();
      }(window, function() {
        return function(t) {
          var e = {};
          function n(o) {
            if (e[o])
              return e[o].exports;
            var r = e[o] = { i: o, l: false, exports: {} };
            return t[o].call(r.exports, r, r.exports, n), r.l = true, r.exports;
          }
          return n.m = t, n.c = e, n.d = function(t2, e2, o) {
            n.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: o });
          }, n.r = function(t2) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
          }, n.t = function(t2, e2) {
            if (1 & e2 && (t2 = n(t2)), 8 & e2)
              return t2;
            if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule)
              return t2;
            var o = /* @__PURE__ */ Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2)
              for (var r in t2)
                n.d(o, r, function(e3) {
                  return t2[e3];
                }.bind(null, r));
            return o;
          }, n.n = function(t2) {
            var e2 = t2 && t2.__esModule ? function() {
              return t2.default;
            } : function() {
              return t2;
            };
            return n.d(e2, "a", e2), e2;
          }, n.o = function(t2, e2) {
            return Object.prototype.hasOwnProperty.call(t2, e2);
          }, n.p = "", n(n.s = 187);
        }([function(t, e, n) {
          var o = n(10), r = n(17), i = n(27), a = n(23), s = n(31), l = function(t2, e2, n2) {
            var c, u, f, d, p = t2 & l.F, h = t2 & l.G, v = t2 & l.S, g = t2 & l.P, y = t2 & l.B, b = h ? o : v ? o[e2] || (o[e2] = {}) : (o[e2] || {}).prototype, m = h ? r : r[e2] || (r[e2] = {}), k = m.prototype || (m.prototype = {});
            for (c in h && (n2 = e2), n2)
              f = ((u = !p && b && void 0 !== b[c]) ? b : n2)[c], d = y && u ? s(f, o) : g && "function" == typeof f ? s(Function.call, f) : f, b && a(b, c, f, t2 & l.U), m[c] != f && i(m, c, d), g && k[c] != f && (k[c] = f);
          };
          o.core = r, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t.exports = l;
        }, function(t, e) {
          t.exports = function(t2) {
            return t2 && t2.__esModule ? t2 : { default: t2 };
          };
        }, function(t, e) {
          t.exports = function(t2, e2) {
            if (!(t2 instanceof e2))
              throw new TypeError("Cannot call a class as a function");
          };
        }, function(t, e) {
          function n(t2, e2) {
            for (var n2 = 0; n2 < e2.length; n2++) {
              var o = e2[n2];
              o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(t2, o.key, o);
            }
          }
          t.exports = function(t2, e2, o) {
            return e2 && n(t2.prototype, e2), o && n(t2, o), t2;
          };
        }, function(t, e) {
          function n(e2) {
            return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
              return t2.__proto__ || Object.getPrototypeOf(t2);
            }, n(e2);
          }
          t.exports = n;
        }, function(t, e, n) {
          var o = n(110);
          t.exports = function(t2, e2) {
            if ("function" != typeof e2 && null !== e2)
              throw new TypeError("Super expression must either be null or a function");
            t2.prototype = Object.create(e2 && e2.prototype, { constructor: { value: t2, writable: true, configurable: true } }), e2 && o(t2, e2);
          };
        }, function(t, e, n) {
          var o = n(59), r = n(152);
          t.exports = function(t2, e2) {
            return !e2 || "object" !== o(e2) && "function" != typeof e2 ? r(t2) : e2;
          };
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(371), n(21), n(403), n(14)], void 0 === (i = "function" == typeof (o = function(t2, e2, o2, r2, i2, a) {
            "use strict";
            var s, l = n(1);
            function c(t3, e3) {
              var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "log", o3 = arguments.length > 3 ? arguments[3] : void 0, r3 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "color: inherit";
              if ("console" in window && window.console[n2]) {
                var i3 = ["info", "log", "warn", "error"].includes(n2), a2 = [];
                switch (c.logLevel) {
                  case s.ERROR:
                    if ("error" !== n2)
                      return;
                    break;
                  case s.WARN:
                    if (!["error", "warn"].includes(n2))
                      return;
                    break;
                  case s.INFO:
                    if (!i3 || t3)
                      return;
                }
                o3 && a2.push(o3);
                var l2 = "Editor.js ".concat("2.25.0"), u2 = "line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";
                t3 && (i3 ? (a2.unshift(u2, r3), e3 = "%c".concat(l2, "%c ").concat(e3)) : e3 = "( ".concat(l2, " )").concat(e3));
                try {
                  if (i3)
                    if (o3) {
                      var f2;
                      (f2 = console)[n2].apply(f2, ["".concat(e3, " %o")].concat(a2));
                    } else {
                      var d2;
                      (d2 = console)[n2].apply(d2, [e3].concat(a2));
                    }
                  else
                    console[n2](e3);
                } catch (t4) {
                }
              }
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.setLogLevel = function(t3) {
              c.logLevel = t3;
            }, t2.typeOf = d, t2.isFunction = p, t2.isObject = h, t2.isString = function(t3) {
              return "string" === d(t3);
            }, t2.isBoolean = function(t3) {
              return "boolean" === d(t3);
            }, t2.isNumber = function(t3) {
              return "number" === d(t3);
            }, t2.isUndefined = v, t2.isClass = function(t3) {
              return p(t3) && /^\s*class\s+/.test(t3.toString());
            }, t2.isEmpty = function(t3) {
              return !t3 || 0 === Object.keys(t3).length && t3.constructor === Object;
            }, t2.isPromise = function(t3) {
              return Promise.resolve(t3) === t3;
            }, t2.isPrintableKey = function(t3) {
              return t3 > 47 && t3 < 58 || 32 === t3 || 13 === t3 || 229 === t3 || t3 > 64 && t3 < 91 || t3 > 95 && t3 < 112 || t3 > 185 && t3 < 193 || t3 > 218 && t3 < 223;
            }, t2.sequence = function(t3) {
              return g.apply(this, arguments);
            }, t2.array = function(t3) {
              return Array.prototype.slice.call(t3);
            }, t2.delay = function(t3, e3) {
              return function() {
                var n2 = this, o3 = arguments;
                window.setTimeout(function() {
                  return t3.apply(n2, o3);
                }, e3);
              };
            }, t2.getFileExtension = function(t3) {
              return t3.name.split(".").pop();
            }, t2.isValidMimeType = function(t3) {
              return /^[-\w]+\/([-+\w]+|\*)$/.test(t3);
            }, t2.debounce = function(t3, e3, n2) {
              var o3, r3 = this;
              return function() {
                for (var i3 = arguments.length, a2 = new Array(i3), s2 = 0; s2 < i3; s2++)
                  a2[s2] = arguments[s2];
                var l2 = r3, c2 = function() {
                  o3 = null, n2 || t3.apply(l2, a2);
                }, u2 = n2 && !o3;
                window.clearTimeout(o3), o3 = window.setTimeout(c2, e3), u2 && t3.apply(l2, a2);
              };
            }, t2.throttle = function(t3, e3) {
              var n2, o3, r3, i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a2 = null, s2 = 0;
              i3 || (i3 = {});
              var l2 = function() {
                s2 = false === i3.leading ? 0 : Date.now(), a2 = null, r3 = t3.apply(n2, o3), a2 || (n2 = o3 = null);
              };
              return function() {
                var c2 = Date.now();
                s2 || false !== i3.leading || (s2 = c2);
                var u2 = e3 - (c2 - s2);
                return n2 = this, o3 = arguments, u2 <= 0 || u2 > e3 ? (a2 && (clearTimeout(a2), a2 = null), s2 = c2, r3 = t3.apply(n2, o3), a2 || (n2 = o3 = null)) : a2 || false === i3.trailing || (a2 = setTimeout(l2, u2)), r3;
              };
            }, t2.copyTextToClipboard = function(t3) {
              var e3 = a.default.make("div", "codex-editor-clipboard", { innerHTML: t3 });
              document.body.appendChild(e3);
              var n2 = window.getSelection(), o3 = document.createRange();
              o3.selectNode(e3), window.getSelection().removeAllRanges(), n2.addRange(o3), document.execCommand("copy"), document.body.removeChild(e3);
            }, t2.getUserOS = y, t2.capitalize = function(t3) {
              return t3[0].toUpperCase() + t3.slice(1);
            }, t2.deepMerge = function t3(e3) {
              for (var n2 = arguments.length, r3 = new Array(n2 > 1 ? n2 - 1 : 0), i3 = 1; i3 < n2; i3++)
                r3[i3 - 1] = arguments[i3];
              if (!r3.length)
                return e3;
              var a2 = r3.shift();
              if (h(e3) && h(a2))
                for (var s2 in a2)
                  h(a2[s2]) ? (e3[s2] || Object.assign(e3, (0, o2.default)({}, s2, {})), t3(e3[s2], a2[s2])) : Object.assign(e3, (0, o2.default)({}, s2, a2[s2]));
              return t3.apply(void 0, [e3].concat(r3));
            }, t2.beautifyShortcut = function(t3) {
              var e3 = y();
              return t3 = t3.replace(/shift/gi, "\u21E7").replace(/backspace/gi, "\u232B").replace(/enter/gi, "\u23CE").replace(/up/gi, "\u2191").replace(/left/gi, "\u2192").replace(/down/gi, "\u2193").replace(/right/gi, "\u2190").replace(/escape/gi, "\u238B").replace(/insert/gi, "Ins").replace(/delete/gi, "\u2421").replace(/\+/gi, " + "), t3 = e3.mac ? t3.replace(/ctrl|cmd/gi, "\u2318").replace(/alt/gi, "\u2325") : t3.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN");
            }, t2.getValidUrl = function(t3) {
              try {
                return new URL(t3).href;
              } catch (t4) {
              }
              return "//" === t3.substring(0, 2) ? window.location.protocol + t3 : window.location.origin + t3;
            }, t2.generateBlockId = function() {
              return (0, i2.nanoid)(10);
            }, t2.openTab = function(t3) {
              window.open(t3, "_blank");
            }, t2.generateId = function() {
              var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
              return "".concat(t3).concat(Math.floor(1e8 * Math.random()).toString(16));
            }, t2.deprecationAssert = function(t3, e3, n2) {
              var o3 = "\xAB".concat(e3, "\xBB is deprecated and will be removed in the next major release. Please use the \xAB").concat(n2, "\xBB instead.");
              t3 && f(o3, "warn");
            }, t2.cacheable = function(t3, e3, n2) {
              var o3 = n2.value ? "value" : "get", r3 = n2[o3], i3 = "#".concat(e3, "Cache");
              if (n2[o3] = function() {
                if (void 0 === this[i3]) {
                  for (var t4 = arguments.length, e4 = new Array(t4), n3 = 0; n3 < t4; n3++)
                    e4[n3] = arguments[n3];
                  this[i3] = r3.apply.apply(r3, [this].concat(e4));
                }
                return this[i3];
              }, "get" === o3 && n2.set) {
                var a2 = n2.set;
                n2.set = function(e4) {
                  delete t3[i3], a2.apply(this, e4);
                };
              }
              return n2;
            }, t2.isMobileScreen = function() {
              return window.matchMedia("(max-width: 650px)").matches;
            }, t2.equals = function(t3, e3) {
              var n2 = Array.isArray(t3) || h(t3), o3 = Array.isArray(e3) || h(e3);
              return n2 || o3 ? JSON.stringify(t3) === JSON.stringify(e3) : t3 === e3;
            }, t2.isIosDevice = t2.isTouchSupported = t2.logLabeled = t2.log = t2.mouseButtons = t2.keyCodes = t2.LogLevels = void 0, e2 = l(e2), o2 = l(o2), r2 = l(r2), a = l(a), t2.LogLevels = s, function(t3) {
              t3.VERBOSE = "VERBOSE", t3.INFO = "INFO", t3.WARN = "WARN", t3.ERROR = "ERROR";
            }(s || (t2.LogLevels = s = {})), t2.keyCodes = { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, LEFT: 37, UP: 38, DOWN: 40, RIGHT: 39, DELETE: 46, META: 91 }, t2.mouseButtons = { LEFT: 0, WHEEL: 1, RIGHT: 2, BACKWARD: 3, FORWARD: 4 }, c.logLevel = s.VERBOSE;
            var u = c.bind(window, false);
            t2.log = u;
            var f = c.bind(window, true);
            function d(t3) {
              return Object.prototype.toString.call(t3).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            }
            function p(t3) {
              return "function" === d(t3) || "asyncfunction" === d(t3);
            }
            function h(t3) {
              return "object" === d(t3);
            }
            function v(t3) {
              return "undefined" === d(t3);
            }
            function g() {
              return (g = (0, r2.default)(e2.default.mark(function t3(n2) {
                var o3, i3, a2, s2, l2 = arguments;
                return e2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return s2 = function() {
                          return (s2 = (0, r2.default)(e2.default.mark(function t5(n3, o4, r3) {
                            return e2.default.wrap(function(t6) {
                              for (; ; )
                                switch (t6.prev = t6.next) {
                                  case 0:
                                    return t6.prev = 0, t6.next = 3, n3.function(n3.data);
                                  case 3:
                                    return t6.next = 5, o4(v(n3.data) ? {} : n3.data);
                                  case 5:
                                    t6.next = 10;
                                    break;
                                  case 7:
                                    t6.prev = 7, t6.t0 = t6.catch(0), r3(v(n3.data) ? {} : n3.data);
                                  case 10:
                                  case "end":
                                    return t6.stop();
                                }
                            }, t5, null, [[0, 7]]);
                          }))).apply(this, arguments);
                        }, a2 = function(t5, e3, n3) {
                          return s2.apply(this, arguments);
                        }, o3 = l2.length > 1 && void 0 !== l2[1] ? l2[1] : function() {
                        }, i3 = l2.length > 2 && void 0 !== l2[2] ? l2[2] : function() {
                        }, t4.abrupt("return", n2.reduce(function() {
                          var t5 = (0, r2.default)(e2.default.mark(function t6(n3, r3) {
                            return e2.default.wrap(function(t7) {
                              for (; ; )
                                switch (t7.prev = t7.next) {
                                  case 0:
                                    return t7.next = 2, n3;
                                  case 2:
                                    return t7.abrupt("return", a2(r3, o3, i3));
                                  case 3:
                                  case "end":
                                    return t7.stop();
                                }
                            }, t6);
                          }));
                          return function(e3, n3) {
                            return t5.apply(this, arguments);
                          };
                        }(), Promise.resolve()));
                      case 5:
                      case "end":
                        return t4.stop();
                    }
                }, t3);
              }))).apply(this, arguments);
            }
            function y() {
              var t3 = { win: false, mac: false, x11: false, linux: false }, e3 = Object.keys(t3).find(function(t4) {
                return -1 !== navigator.appVersion.toLowerCase().indexOf(t4);
              });
              return e3 ? (t3[e3] = true, t3) : t3;
            }
            t2.logLabeled = f;
            var b = "ontouchstart" in document.documentElement;
            t2.isTouchSupported = b;
            var m = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1);
            t2.isIosDevice = m;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o = n(59);
          function r() {
            if ("function" != typeof WeakMap)
              return null;
            var t2 = /* @__PURE__ */ new WeakMap();
            return r = function() {
              return t2;
            }, t2;
          }
          t.exports = function(t2) {
            if (t2 && t2.__esModule)
              return t2;
            if (null === t2 || "object" !== o(t2) && "function" != typeof t2)
              return { default: t2 };
            var e2 = r();
            if (e2 && e2.has(t2))
              return e2.get(t2);
            var n2 = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in t2)
              if (Object.prototype.hasOwnProperty.call(t2, a)) {
                var s = i ? Object.getOwnPropertyDescriptor(t2, a) : null;
                s && (s.get || s.set) ? Object.defineProperty(n2, a, s) : n2[a] = t2[a];
              }
            return n2.default = t2, e2 && e2.set(t2, n2), n2;
          };
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(111)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            function l(t2) {
              if ("undefined" == typeof Symbol || null == t2[Symbol.iterator]) {
                if (Array.isArray(t2) || (t2 = function(t3, e3) {
                  if (t3) {
                    if ("string" == typeof t3)
                      return c(t3, e3);
                    var n3 = Object.prototype.toString.call(t3).slice(8, -1);
                    return "Object" === n3 && t3.constructor && (n3 = t3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(n3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? c(t3, e3) : void 0;
                  }
                }(t2))) {
                  var e2 = 0, n2 = function() {
                  };
                  return { s: n2, n: function() {
                    return e2 >= t2.length ? { done: true } : { done: false, value: t2[e2++] };
                  }, e: function(t3) {
                    throw t3;
                  }, f: n2 };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var o3, r3, i3 = true, a2 = false;
              return { s: function() {
                o3 = t2[Symbol.iterator]();
              }, n: function() {
                var t3 = o3.next();
                return i3 = t3.done, t3;
              }, e: function(t3) {
                a2 = true, r3 = t3;
              }, f: function() {
                try {
                  i3 || null == o3.return || o3.return();
                } finally {
                  if (a2)
                    throw r3;
                }
              } };
            }
            function c(t2, e2) {
              (null == e2 || e2 > t2.length) && (e2 = t2.length);
              for (var n2 = 0, o3 = new Array(e2); n2 < e2; n2++)
                o3[n2] = t2[n2];
              return o3;
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var u = function() {
              function t2(e2) {
                var n2 = this, o3 = e2.config, i3 = e2.eventsDispatcher;
                if ((0, r2.default)(this, t2), this.nodes = {}, this.listeners = new a.default(), this.readOnlyMutableListeners = { on: function(t3, e3, o4) {
                  var r3 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                  n2.mutableListenerIds.push(n2.listeners.on(t3, e3, o4, r3));
                }, clearAll: function() {
                  var t3, e3 = l(n2.mutableListenerIds);
                  try {
                    for (e3.s(); !(t3 = e3.n()).done; ) {
                      var o4 = t3.value;
                      n2.listeners.offById(o4);
                    }
                  } catch (t4) {
                    e3.e(t4);
                  } finally {
                    e3.f();
                  }
                  n2.mutableListenerIds = [];
                } }, this.mutableListenerIds = [], (this instanceof t2 ? this.constructor : void 0) === t2)
                  throw new TypeError("Constructors for abstract class Module are not allowed.");
                this.config = o3, this.eventsDispatcher = i3;
              }
              return (0, i2.default)(t2, [{ key: "removeAllNodes", value: function() {
                for (var t3 in this.nodes) {
                  var e2 = this.nodes[t3];
                  e2 instanceof HTMLElement && e2.remove();
                }
              } }, { key: "state", set: function(t3) {
                this.Editor = t3;
              } }, { key: "isRtl", get: function() {
                return "rtl" === this.config.i18n.direction;
              } }]), t2;
            }();
            o2.default = u, u.displayName = "Module", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e) {
          var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
          "number" == typeof __g && (__g = n);
        }, function(t, e) {
          t.exports = function(t2) {
            try {
              return !!t2();
            } catch (t3) {
              return true;
            }
          };
        }, function(t, e, n) {
          var o = n(13);
          t.exports = function(t2) {
            if (!o(t2))
              throw TypeError(t2 + " is not an object!");
            return t2;
          };
        }, function(t, e) {
          t.exports = function(t2) {
            return "object" == typeof t2 ? null !== t2 : "function" == typeof t2;
          };
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(42), n(2), n(3), n(7)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s) {
            "use strict";
            var l = n(8), c = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = c(r2), i2 = c(i2), a = c(a), s = l(s);
            var u = function() {
              function t2() {
                (0, i2.default)(this, t2);
              }
              return (0, a.default)(t2, null, [{ key: "isSingleTag", value: function(t3) {
                return t3.tagName && ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"].includes(t3.tagName);
              } }, { key: "isLineBreakTag", value: function(t3) {
                return t3 && t3.tagName && ["BR", "WBR"].includes(t3.tagName);
              } }, { key: "make", value: function(t3) {
                var e2, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, o3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i3 = document.createElement(t3);
                for (var a2 in Array.isArray(n2) ? (e2 = i3.classList).add.apply(e2, (0, r2.default)(n2)) : n2 && i3.classList.add(n2), o3)
                  Object.prototype.hasOwnProperty.call(o3, a2) && (i3[a2] = o3[a2]);
                return i3;
              } }, { key: "text", value: function(t3) {
                return document.createTextNode(t3);
              } }, { key: "svg", value: function(t3) {
                var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 14, n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 14, o3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                return o3.classList.add("icon", "icon--" + t3), o3.setAttribute("width", e2 + "px"), o3.setAttribute("height", n2 + "px"), o3.innerHTML = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'.concat(t3, '"></use>'), o3;
              } }, { key: "append", value: function(t3, e2) {
                Array.isArray(e2) ? e2.forEach(function(e3) {
                  return t3.appendChild(e3);
                }) : t3.appendChild(e2);
              } }, { key: "prepend", value: function(t3, e2) {
                Array.isArray(e2) ? (e2 = e2.reverse()).forEach(function(e3) {
                  return t3.prepend(e3);
                }) : t3.prepend(e2);
              } }, { key: "swap", value: function(t3, e2) {
                var n2 = document.createElement("div"), o3 = t3.parentNode;
                o3.insertBefore(n2, t3), o3.insertBefore(t3, e2), o3.insertBefore(e2, n2), o3.removeChild(n2);
              } }, { key: "find", value: function() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, e2 = arguments.length > 1 ? arguments[1] : void 0;
                return t3.querySelector(e2);
              } }, { key: "get", value: function(t3) {
                return document.getElementById(t3);
              } }, { key: "findAll", value: function() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, e2 = arguments.length > 1 ? arguments[1] : void 0;
                return t3.querySelectorAll(e2);
              } }, { key: "findAllInputs", value: function(e2) {
                return s.array(e2.querySelectorAll(t2.allInputsSelector)).reduce(function(e3, n2) {
                  return t2.isNativeInput(n2) || t2.containsOnlyInlineElements(n2) ? [].concat((0, r2.default)(e3), [n2]) : [].concat((0, r2.default)(e3), (0, r2.default)(t2.getDeepestBlockElements(n2)));
                }, []);
              } }, { key: "getDeepestNode", value: function(e2) {
                var n2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o3 = n2 ? "lastChild" : "firstChild", r3 = n2 ? "previousSibling" : "nextSibling";
                if (e2 && e2.nodeType === Node.ELEMENT_NODE && e2[o3]) {
                  var i3 = e2[o3];
                  if (t2.isSingleTag(i3) && !t2.isNativeInput(i3) && !t2.isLineBreakTag(i3))
                    if (i3[r3])
                      i3 = i3[r3];
                    else {
                      if (!i3.parentNode[r3])
                        return i3.parentNode;
                      i3 = i3.parentNode[r3];
                    }
                  return this.getDeepestNode(i3, n2);
                }
                return e2;
              } }, { key: "isElement", value: function(t3) {
                return !s.isNumber(t3) && t3 && t3.nodeType && t3.nodeType === Node.ELEMENT_NODE;
              } }, { key: "isFragment", value: function(t3) {
                return !s.isNumber(t3) && t3 && t3.nodeType && t3.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
              } }, { key: "isContentEditable", value: function(t3) {
                return "true" === t3.contentEditable;
              } }, { key: "isNativeInput", value: function(t3) {
                return !(!t3 || !t3.tagName) && ["INPUT", "TEXTAREA"].includes(t3.tagName);
              } }, { key: "canSetCaret", value: function(e2) {
                var n2 = true;
                if (t2.isNativeInput(e2))
                  switch (e2.type) {
                    case "file":
                    case "checkbox":
                    case "radio":
                    case "hidden":
                    case "submit":
                    case "button":
                    case "image":
                    case "reset":
                      n2 = false;
                  }
                else
                  n2 = t2.isContentEditable(e2);
                return n2;
              } }, { key: "isNodeEmpty", value: function(t3) {
                return !(this.isSingleTag(t3) && !this.isLineBreakTag(t3)) && 0 === (this.isElement(t3) && this.isNativeInput(t3) ? t3.value : t3.textContent.replace("\u200B", "")).trim().length;
              } }, { key: "isLeaf", value: function(t3) {
                return !!t3 && 0 === t3.childNodes.length;
              } }, { key: "isEmpty", value: function(t3) {
                t3.normalize();
                for (var e2 = [t3]; e2.length > 0; )
                  if (t3 = e2.shift()) {
                    if (this.isLeaf(t3) && !this.isNodeEmpty(t3))
                      return false;
                    t3.childNodes && e2.push.apply(e2, (0, r2.default)(Array.from(t3.childNodes)));
                  }
                return true;
              } }, { key: "isHTMLString", value: function(e2) {
                var n2 = t2.make("div");
                return n2.innerHTML = e2, n2.childElementCount > 0;
              } }, { key: "getContentLength", value: function(e2) {
                return t2.isNativeInput(e2) ? e2.value.length : e2.nodeType === Node.TEXT_NODE ? e2.length : e2.textContent.length;
              } }, { key: "containsOnlyInlineElements", value: function(e2) {
                var n2;
                return s.isString(e2) ? (n2 = document.createElement("div")).innerHTML = e2 : n2 = e2, Array.from(n2.children).every(function e3(n3) {
                  return !t2.blockElements.includes(n3.tagName.toLowerCase()) && Array.from(n3.children).every(e3);
                });
              } }, { key: "getDeepestBlockElements", value: function(e2) {
                return t2.containsOnlyInlineElements(e2) ? [e2] : Array.from(e2.children).reduce(function(e3, n2) {
                  return [].concat((0, r2.default)(e3), (0, r2.default)(t2.getDeepestBlockElements(n2)));
                }, []);
              } }, { key: "getHolder", value: function(t3) {
                return s.isString(t3) ? document.getElementById(t3) : t3;
              } }, { key: "isExtensionNode", value: function(t3) {
                return t3 && ["GRAMMARLY-EXTENSION"].includes(t3.nodeName);
              } }, { key: "isAnchor", value: function(t3) {
                return "a" === t3.tagName.toLowerCase();
              } }, { key: "offset", value: function(t3) {
                var e2 = t3.getBoundingClientRect(), n2 = window.pageXOffset || document.documentElement.scrollLeft, o3 = window.pageYOffset || document.documentElement.scrollTop, r3 = e2.top + o3, i3 = e2.left + n2;
                return { top: r3, left: i3, bottom: r3 + e2.height, right: i3 + e2.width };
              } }, { key: "allInputsSelector", get: function() {
                return "[contenteditable=true], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map(function(t3) {
                  return 'input[type="'.concat(t3, '"]');
                }).join(", ");
              } }, { key: "blockElements", get: function() {
                return ["address", "article", "aside", "blockquote", "canvas", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "ruby", "section", "table", "tr", "tfoot", "ul", "video"];
              } }]), t2;
            }();
            o2.default = u, u.displayName = "Dom", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o = n(69)("wks"), r = n(44), i = n(10).Symbol, a = "function" == typeof i;
          (t.exports = function(t2) {
            return o[t2] || (o[t2] = a && i[t2] || (a ? i : r)("Symbol." + t2));
          }).store = o;
        }, function(t, e, n) {
          var o = n(33), r = Math.min;
          t.exports = function(t2) {
            return t2 > 0 ? r(o(t2), 9007199254740991) : 0;
          };
        }, function(t, e) {
          var n = t.exports = { version: "2.6.11" };
          "number" == typeof __e && (__e = n);
        }, function(t, e, n) {
          t.exports = !n(11)(function() {
            return 7 != Object.defineProperty({}, "a", { get: function() {
              return 7;
            } }).a;
          });
        }, function(t, e, n) {
          var o = n(12), r = n(116), i = n(40), a = Object.defineProperty;
          e.f = n(18) ? Object.defineProperty : function(t2, e2, n2) {
            if (o(t2), e2 = i(e2, true), o(n2), r)
              try {
                return a(t2, e2, n2);
              } catch (t3) {
              }
            if ("get" in n2 || "set" in n2)
              throw TypeError("Accessors not supported!");
            return "value" in n2 && (t2[e2] = n2.value), t2;
          };
        }, function(t, e, n) {
          t.exports = n(147);
        }, function(t, e) {
          function n(t2, e2, n2, o, r, i, a) {
            try {
              var s = t2[i](a), l = s.value;
            } catch (t3) {
              return void n2(t3);
            }
            s.done ? e2(l) : Promise.resolve(l).then(o, r);
          }
          t.exports = function(t2) {
            return function() {
              var e2 = this, o = arguments;
              return new Promise(function(r, i) {
                var a = t2.apply(e2, o);
                function s(t3) {
                  n(a, r, i, s, l, "next", t3);
                }
                function l(t3) {
                  n(a, r, i, s, l, "throw", t3);
                }
                s(void 0);
              });
            };
          };
        }, function(t, e, n) {
          var o = n(38);
          t.exports = function(t2) {
            return Object(o(t2));
          };
        }, function(t, e, n) {
          var o = n(10), r = n(27), i = n(26), a = n(44)("src"), s = n(192), l = ("" + s).split("toString");
          n(17).inspectSource = function(t2) {
            return s.call(t2);
          }, (t.exports = function(t2, e2, n2, s2) {
            var c = "function" == typeof n2;
            c && (i(n2, "name") || r(n2, "name", e2)), t2[e2] !== n2 && (c && (i(n2, a) || r(n2, a, t2[e2] ? "" + t2[e2] : l.join(String(e2)))), t2 === o ? t2[e2] = n2 : s2 ? t2[e2] ? t2[e2] = n2 : r(t2, e2, n2) : (delete t2[e2], r(t2, e2, n2)));
          })(Function.prototype, "toString", function() {
            return "function" == typeof this && this[a] || s.call(this);
          });
        }, function(t, e, n) {
          var o = n(0), r = n(11), i = n(38), a = /"/g, s = function(t2, e2, n2, o2) {
            var r2 = String(i(t2)), s2 = "<" + e2;
            return "" !== n2 && (s2 += " " + n2 + '="' + String(o2).replace(a, "&quot;") + '"'), s2 + ">" + r2 + "</" + e2 + ">";
          };
          t.exports = function(t2, e2) {
            var n2 = {};
            n2[t2] = e2(s), o(o.P + o.F * r(function() {
              var e3 = ""[t2]('"');
              return e3 !== e3.toLowerCase() || e3.split('"').length > 3;
            }), "String", n2);
          };
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(7), n(14)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s) {
            "use strict";
            var l = n(8), c = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = c(r2), i2 = c(i2), a = l(a), s = c(s);
            var u = function() {
              function t2() {
                (0, r2.default)(this, t2), this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = false, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
              }
              return (0, i2.default)(t2, [{ key: "removeFakeBackground", value: function() {
                this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = false, document.execCommand(this.commandRemoveFormat));
              } }, { key: "setFakeBackground", value: function() {
                document.execCommand(this.commandBackground, false, "#a8d6ff"), this.isFakeBackgroundEnabled = true;
              } }, { key: "save", value: function() {
                this.savedSelectionRange = t2.range;
              } }, { key: "restore", value: function() {
                if (this.savedSelectionRange) {
                  var t3 = window.getSelection();
                  t3.removeAllRanges(), t3.addRange(this.savedSelectionRange);
                }
              } }, { key: "clearSaved", value: function() {
                this.savedSelectionRange = null;
              } }, { key: "collapseToEnd", value: function() {
                var t3 = window.getSelection(), e2 = document.createRange();
                e2.selectNodeContents(t3.focusNode), e2.collapse(false), t3.removeAllRanges(), t3.addRange(e2);
              } }, { key: "findParentTag", value: function(t3, e2) {
                var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, o3 = window.getSelection(), r3 = null;
                if (!o3 || !o3.anchorNode || !o3.focusNode)
                  return null;
                var i3 = [o3.anchorNode, o3.focusNode];
                return i3.forEach(function(o4) {
                  for (var i4 = n2; i4 > 0 && o4.parentNode && (o4.tagName !== t3 || (r3 = o4, e2 && o4.classList && !o4.classList.contains(e2) && (r3 = null), !r3)); )
                    o4 = o4.parentNode, i4--;
                }), r3;
              } }, { key: "expandToTag", value: function(t3) {
                var e2 = window.getSelection();
                e2.removeAllRanges();
                var n2 = document.createRange();
                n2.selectNodeContents(t3), e2.addRange(n2);
              } }], [{ key: "isSelectionAtEditor", value: function(e2) {
                if (!e2)
                  return false;
                var n2 = e2.anchorNode || e2.focusNode;
                n2 && n2.nodeType === Node.TEXT_NODE && (n2 = n2.parentNode);
                var o3 = null;
                return n2 && n2 instanceof Element && (o3 = n2.closest(".".concat(t2.CSS.editorZone))), !!o3 && o3.nodeType === Node.ELEMENT_NODE;
              } }, { key: "isRangeAtEditor", value: function(e2) {
                if (e2) {
                  var n2 = e2.startContainer;
                  n2 && n2.nodeType === Node.TEXT_NODE && (n2 = n2.parentNode);
                  var o3 = null;
                  return n2 && n2 instanceof Element && (o3 = n2.closest(".".concat(t2.CSS.editorZone))), !!o3 && o3.nodeType === Node.ELEMENT_NODE;
                }
              } }, { key: "getRangeFromSelection", value: function(t3) {
                return t3 && t3.rangeCount ? t3.getRangeAt(0) : null;
              } }, { key: "get", value: function() {
                return window.getSelection();
              } }, { key: "setCursor", value: function(t3) {
                var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n2 = document.createRange(), o3 = window.getSelection();
                if (s.default.isNativeInput(t3)) {
                  if (!s.default.canSetCaret(t3))
                    return;
                  return t3.focus(), t3.selectionStart = t3.selectionEnd = e2, t3.getBoundingClientRect();
                }
                return n2.setStart(t3, e2), n2.setEnd(t3, e2), o3.removeAllRanges(), o3.addRange(n2), n2.getBoundingClientRect();
              } }, { key: "addFakeCursor", value: function(e2) {
                var n2 = t2.range, o3 = s.default.make("span", "codex-editor__fake-cursor");
                o3.dataset.mutationFree = "true", !n2 || e2 && !e2.contains(n2.startContainer) || (n2.collapse(), n2.insertNode(o3));
              } }, { key: "removeFakeCursor", value: function() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body, e2 = s.default.find(t3, ".codex-editor__fake-cursor");
                e2 && e2.remove();
              } }, { key: "CSS", get: function() {
                return { editorWrapper: "codex-editor", editorZone: "codex-editor__redactor" };
              } }, { key: "anchorNode", get: function() {
                var t3 = window.getSelection();
                return t3 ? t3.anchorNode : null;
              } }, { key: "anchorElement", get: function() {
                var t3 = window.getSelection();
                if (!t3)
                  return null;
                var e2 = t3.anchorNode;
                return e2 ? s.default.isElement(e2) ? e2 : e2.parentElement : null;
              } }, { key: "anchorOffset", get: function() {
                var t3 = window.getSelection();
                return t3 ? t3.anchorOffset : null;
              } }, { key: "isCollapsed", get: function() {
                var t3 = window.getSelection();
                return t3 ? t3.isCollapsed : null;
              } }, { key: "isAtEditor", get: function() {
                return this.isSelectionAtEditor(t2.get());
              } }, { key: "isSelectionExists", get: function() {
                return !!t2.get().anchorNode;
              } }, { key: "range", get: function() {
                return this.getRangeFromSelection(this.get());
              } }, { key: "rect", get: function() {
                var t3, e2 = document.selection, n2 = { x: 0, y: 0, width: 0, height: 0 };
                if (e2 && "Control" !== e2.type)
                  return t3 = (e2 = e2).createRange(), n2.x = t3.boundingLeft, n2.y = t3.boundingTop, n2.width = t3.boundingWidth, n2.height = t3.boundingHeight, n2;
                if (!window.getSelection)
                  return a.log("Method window.getSelection is not supported", "warn"), n2;
                if (null === (e2 = window.getSelection()).rangeCount || isNaN(e2.rangeCount))
                  return a.log("Method SelectionUtils.rangeCount is not supported", "warn"), n2;
                if (0 === e2.rangeCount)
                  return n2;
                if ((t3 = e2.getRangeAt(0).cloneRange()).getBoundingClientRect && (n2 = t3.getBoundingClientRect()), 0 === n2.x && 0 === n2.y) {
                  var o3 = document.createElement("span");
                  if (o3.getBoundingClientRect) {
                    o3.appendChild(document.createTextNode("\u200B")), t3.insertNode(o3), n2 = o3.getBoundingClientRect();
                    var r3 = o3.parentNode;
                    r3.removeChild(o3), r3.normalize();
                  }
                }
                return n2;
              } }, { key: "text", get: function() {
                return window.getSelection ? window.getSelection().toString() : "";
              } }]), t2;
            }();
            o2.default = u, u.displayName = "SelectionUtils", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e) {
          var n = {}.hasOwnProperty;
          t.exports = function(t2, e2) {
            return n.call(t2, e2);
          };
        }, function(t, e, n) {
          var o = n(19), r = n(43);
          t.exports = n(18) ? function(t2, e2, n2) {
            return o.f(t2, e2, r(1, n2));
          } : function(t2, e2, n2) {
            return t2[e2] = n2, t2;
          };
        }, function(t, e, n) {
          var o = n(63), r = n(38);
          t.exports = function(t2) {
            return o(r(t2));
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(11);
          t.exports = function(t2, e2) {
            return !!t2 && o(function() {
              e2 ? t2.call(null, function() {
              }, 1) : t2.call(null);
            });
          };
        }, function(t, e, n) {
          var o = n(361), r = n(362), i = n(148), a = n(363);
          t.exports = function(t2, e2) {
            return o(t2) || r(t2, e2) || i(t2, e2) || a();
          };
        }, function(t, e, n) {
          var o = n(32);
          t.exports = function(t2, e2, n2) {
            if (o(t2), void 0 === e2)
              return t2;
            switch (n2) {
              case 1:
                return function(n3) {
                  return t2.call(e2, n3);
                };
              case 2:
                return function(n3, o2) {
                  return t2.call(e2, n3, o2);
                };
              case 3:
                return function(n3, o2, r) {
                  return t2.call(e2, n3, o2, r);
                };
            }
            return function() {
              return t2.apply(e2, arguments);
            };
          };
        }, function(t, e) {
          t.exports = function(t2) {
            if ("function" != typeof t2)
              throw TypeError(t2 + " is not a function!");
            return t2;
          };
        }, function(t, e) {
          var n = Math.ceil, o = Math.floor;
          t.exports = function(t2) {
            return isNaN(t2 = +t2) ? 0 : (t2 > 0 ? o : n)(t2);
          };
        }, function(t, e, n) {
          var o = n(64), r = n(43), i = n(28), a = n(40), s = n(26), l = n(116), c = Object.getOwnPropertyDescriptor;
          e.f = n(18) ? c : function(t2, e2) {
            if (t2 = i(t2), e2 = a(e2, true), l)
              try {
                return c(t2, e2);
              } catch (t3) {
              }
            if (s(t2, e2))
              return r(!o.f.call(t2, e2), t2[e2]);
          };
        }, function(t, e, n) {
          var o = n(0), r = n(17), i = n(11);
          t.exports = function(t2, e2) {
            var n2 = (r.Object || {})[t2] || Object[t2], a = {};
            a[t2] = e2(n2), o(o.S + o.F * i(function() {
              n2(1);
            }), "Object", a);
          };
        }, function(t, e, n) {
          var o = n(31), r = n(63), i = n(22), a = n(16), s = n(132);
          t.exports = function(t2, e2) {
            var n2 = 1 == t2, l = 2 == t2, c = 3 == t2, u = 4 == t2, f = 6 == t2, d = 5 == t2 || f, p = e2 || s;
            return function(e3, s2, h) {
              for (var v, g, y = i(e3), b = r(y), m = o(s2, h, 3), k = a(b.length), x = 0, w = n2 ? p(e3, k) : l ? p(e3, 0) : void 0; k > x; x++)
                if ((d || x in b) && (g = m(v = b[x], x, y), t2)) {
                  if (n2)
                    w[x] = g;
                  else if (g)
                    switch (t2) {
                      case 3:
                        return true;
                      case 5:
                        return v;
                      case 6:
                        return x;
                      case 2:
                        w.push(v);
                    }
                  else if (u)
                    return false;
                }
              return f ? -1 : c || u ? u : w;
            };
          };
        }, function(t, e) {
          var n = {}.toString;
          t.exports = function(t2) {
            return n.call(t2).slice(8, -1);
          };
        }, function(t, e) {
          t.exports = function(t2) {
            if (null == t2)
              throw TypeError("Can't call method on  " + t2);
            return t2;
          };
        }, function(t, e, n) {
          "use strict";
          if (n(18)) {
            var o = n(45), r = n(10), i = n(11), a = n(0), s = n(80), l = n(109), c = n(31), u = n(57), f = n(43), d = n(27), p = n(58), h = n(33), v = n(16), g = n(143), y = n(47), b = n(40), m = n(26), k = n(65), x = n(13), w = n(22), S = n(101), T = n(48), E = n(50), B = n(49).f, C = n(103), _ = n(44), I = n(15), O = n(36), M = n(70), R = n(66), A = n(105), N = n(55), L = n(73), P = n(56), D = n(104), j = n(134), F = n(19), H = n(34), U = F.f, z = H.f, W = r.RangeError, Y = r.TypeError, V = r.Uint8Array, X = Array.prototype, K = l.ArrayBuffer, G = l.DataView, Z = O(0), q = O(2), J = O(3), $ = O(4), Q = O(5), tt = O(6), et = M(true), nt = M(false), ot = A.values, rt = A.keys, it = A.entries, at = X.lastIndexOf, st = X.reduce, lt = X.reduceRight, ct = X.join, ut = X.sort, ft = X.slice, dt = X.toString, pt = X.toLocaleString, ht = I("iterator"), vt = I("toStringTag"), gt = _("typed_constructor"), yt = _("def_constructor"), bt = s.CONSTR, mt = s.TYPED, kt = s.VIEW, xt = O(1, function(t2, e2) {
              return Bt(R(t2, t2[yt]), e2);
            }), wt = i(function() {
              return 1 === new V(new Uint16Array([1]).buffer)[0];
            }), St = !!V && !!V.prototype.set && i(function() {
              new V(1).set({});
            }), Tt = function(t2, e2) {
              var n2 = h(t2);
              if (n2 < 0 || n2 % e2)
                throw W("Wrong offset!");
              return n2;
            }, Et = function(t2) {
              if (x(t2) && mt in t2)
                return t2;
              throw Y(t2 + " is not a typed array!");
            }, Bt = function(t2, e2) {
              if (!x(t2) || !(gt in t2))
                throw Y("It is not a typed array constructor!");
              return new t2(e2);
            }, Ct = function(t2, e2) {
              return _t(R(t2, t2[yt]), e2);
            }, _t = function(t2, e2) {
              for (var n2 = 0, o2 = e2.length, r2 = Bt(t2, o2); o2 > n2; )
                r2[n2] = e2[n2++];
              return r2;
            }, It = function(t2, e2, n2) {
              U(t2, e2, { get: function() {
                return this._d[n2];
              } });
            }, Ot = function(t2) {
              var e2, n2, o2, r2, i2, a2, s2 = w(t2), l2 = arguments.length, u2 = l2 > 1 ? arguments[1] : void 0, f2 = void 0 !== u2, d2 = C(s2);
              if (null != d2 && !S(d2)) {
                for (a2 = d2.call(s2), o2 = [], e2 = 0; !(i2 = a2.next()).done; e2++)
                  o2.push(i2.value);
                s2 = o2;
              }
              for (f2 && l2 > 2 && (u2 = c(u2, arguments[2], 2)), e2 = 0, n2 = v(s2.length), r2 = Bt(this, n2); n2 > e2; e2++)
                r2[e2] = f2 ? u2(s2[e2], e2) : s2[e2];
              return r2;
            }, Mt = function() {
              for (var t2 = 0, e2 = arguments.length, n2 = Bt(this, e2); e2 > t2; )
                n2[t2] = arguments[t2++];
              return n2;
            }, Rt = !!V && i(function() {
              pt.call(new V(1));
            }), At = function() {
              return pt.apply(Rt ? ft.call(Et(this)) : Et(this), arguments);
            }, Nt = { copyWithin: function(t2, e2) {
              return j.call(Et(this), t2, e2, arguments.length > 2 ? arguments[2] : void 0);
            }, every: function(t2) {
              return $(Et(this), t2, arguments.length > 1 ? arguments[1] : void 0);
            }, fill: function(t2) {
              return D.apply(Et(this), arguments);
            }, filter: function(t2) {
              return Ct(this, q(Et(this), t2, arguments.length > 1 ? arguments[1] : void 0));
            }, find: function(t2) {
              return Q(Et(this), t2, arguments.length > 1 ? arguments[1] : void 0);
            }, findIndex: function(t2) {
              return tt(Et(this), t2, arguments.length > 1 ? arguments[1] : void 0);
            }, forEach: function(t2) {
              Z(Et(this), t2, arguments.length > 1 ? arguments[1] : void 0);
            }, indexOf: function(t2) {
              return nt(Et(this), t2, arguments.length > 1 ? arguments[1] : void 0);
            }, includes: function(t2) {
              return et(Et(this), t2, arguments.length > 1 ? arguments[1] : void 0);
            }, join: function(t2) {
              return ct.apply(Et(this), arguments);
            }, lastIndexOf: function(t2) {
              return at.apply(Et(this), arguments);
            }, map: function(t2) {
              return xt(Et(this), t2, arguments.length > 1 ? arguments[1] : void 0);
            }, reduce: function(t2) {
              return st.apply(Et(this), arguments);
            }, reduceRight: function(t2) {
              return lt.apply(Et(this), arguments);
            }, reverse: function() {
              for (var t2, e2 = Et(this).length, n2 = Math.floor(e2 / 2), o2 = 0; o2 < n2; )
                t2 = this[o2], this[o2++] = this[--e2], this[e2] = t2;
              return this;
            }, some: function(t2) {
              return J(Et(this), t2, arguments.length > 1 ? arguments[1] : void 0);
            }, sort: function(t2) {
              return ut.call(Et(this), t2);
            }, subarray: function(t2, e2) {
              var n2 = Et(this), o2 = n2.length, r2 = y(t2, o2);
              return new (R(n2, n2[yt]))(n2.buffer, n2.byteOffset + r2 * n2.BYTES_PER_ELEMENT, v((void 0 === e2 ? o2 : y(e2, o2)) - r2));
            } }, Lt = function(t2, e2) {
              return Ct(this, ft.call(Et(this), t2, e2));
            }, Pt = function(t2) {
              Et(this);
              var e2 = Tt(arguments[1], 1), n2 = this.length, o2 = w(t2), r2 = v(o2.length), i2 = 0;
              if (r2 + e2 > n2)
                throw W("Wrong length!");
              for (; i2 < r2; )
                this[e2 + i2] = o2[i2++];
            }, Dt = { entries: function() {
              return it.call(Et(this));
            }, keys: function() {
              return rt.call(Et(this));
            }, values: function() {
              return ot.call(Et(this));
            } }, jt = function(t2, e2) {
              return x(t2) && t2[mt] && "symbol" != typeof e2 && e2 in t2 && String(+e2) == String(e2);
            }, Ft = function(t2, e2) {
              return jt(t2, e2 = b(e2, true)) ? f(2, t2[e2]) : z(t2, e2);
            }, Ht = function(t2, e2, n2) {
              return !(jt(t2, e2 = b(e2, true)) && x(n2) && m(n2, "value")) || m(n2, "get") || m(n2, "set") || n2.configurable || m(n2, "writable") && !n2.writable || m(n2, "enumerable") && !n2.enumerable ? U(t2, e2, n2) : (t2[e2] = n2.value, t2);
            };
            bt || (H.f = Ft, F.f = Ht), a(a.S + a.F * !bt, "Object", { getOwnPropertyDescriptor: Ft, defineProperty: Ht }), i(function() {
              dt.call({});
            }) && (dt = pt = function() {
              return ct.call(this);
            });
            var Ut = p({}, Nt);
            p(Ut, Dt), d(Ut, ht, Dt.values), p(Ut, { slice: Lt, set: Pt, constructor: function() {
            }, toString: dt, toLocaleString: At }), It(Ut, "buffer", "b"), It(Ut, "byteOffset", "o"), It(Ut, "byteLength", "l"), It(Ut, "length", "e"), U(Ut, vt, { get: function() {
              return this[mt];
            } }), t.exports = function(t2, e2, n2, l2) {
              var c2 = t2 + ((l2 = !!l2) ? "Clamped" : "") + "Array", f2 = "get" + t2, p2 = "set" + t2, h2 = r[c2], y2 = h2 || {}, b2 = h2 && E(h2), m2 = !h2 || !s.ABV, w2 = {}, S2 = h2 && h2.prototype, C2 = function(t3, n3) {
                U(t3, n3, { get: function() {
                  return function(t4, n4) {
                    var o2 = t4._d;
                    return o2.v[f2](n4 * e2 + o2.o, wt);
                  }(this, n3);
                }, set: function(t4) {
                  return function(t5, n4, o2) {
                    var r2 = t5._d;
                    l2 && (o2 = (o2 = Math.round(o2)) < 0 ? 0 : o2 > 255 ? 255 : 255 & o2), r2.v[p2](n4 * e2 + r2.o, o2, wt);
                  }(this, n3, t4);
                }, enumerable: true });
              };
              m2 ? (h2 = n2(function(t3, n3, o2, r2) {
                u(t3, h2, c2, "_d");
                var i2, a2, s2, l3, f3 = 0, p3 = 0;
                if (x(n3)) {
                  if (!(n3 instanceof K || "ArrayBuffer" == (l3 = k(n3)) || "SharedArrayBuffer" == l3))
                    return mt in n3 ? _t(h2, n3) : Ot.call(h2, n3);
                  i2 = n3, p3 = Tt(o2, e2);
                  var y3 = n3.byteLength;
                  if (void 0 === r2) {
                    if (y3 % e2)
                      throw W("Wrong length!");
                    if ((a2 = y3 - p3) < 0)
                      throw W("Wrong length!");
                  } else if ((a2 = v(r2) * e2) + p3 > y3)
                    throw W("Wrong length!");
                  s2 = a2 / e2;
                } else
                  s2 = g(n3), i2 = new K(a2 = s2 * e2);
                for (d(t3, "_d", { b: i2, o: p3, l: a2, e: s2, v: new G(i2) }); f3 < s2; )
                  C2(t3, f3++);
              }), S2 = h2.prototype = T(Ut), d(S2, "constructor", h2)) : i(function() {
                h2(1);
              }) && i(function() {
                new h2(-1);
              }) && L(function(t3) {
                new h2(), new h2(null), new h2(1.5), new h2(t3);
              }, true) || (h2 = n2(function(t3, n3, o2, r2) {
                var i2;
                return u(t3, h2, c2), x(n3) ? n3 instanceof K || "ArrayBuffer" == (i2 = k(n3)) || "SharedArrayBuffer" == i2 ? void 0 !== r2 ? new y2(n3, Tt(o2, e2), r2) : void 0 !== o2 ? new y2(n3, Tt(o2, e2)) : new y2(n3) : mt in n3 ? _t(h2, n3) : Ot.call(h2, n3) : new y2(g(n3));
              }), Z(b2 !== Function.prototype ? B(y2).concat(B(b2)) : B(y2), function(t3) {
                t3 in h2 || d(h2, t3, y2[t3]);
              }), h2.prototype = S2, o || (S2.constructor = h2));
              var _2 = S2[ht], I2 = !!_2 && ("values" == _2.name || null == _2.name), O2 = Dt.values;
              d(h2, gt, true), d(S2, mt, c2), d(S2, kt, true), d(S2, yt, h2), (l2 ? new h2(1)[vt] == c2 : vt in S2) || U(S2, vt, { get: function() {
                return c2;
              } }), w2[c2] = h2, a(a.G + a.W + a.F * (h2 != y2), w2), a(a.S, c2, { BYTES_PER_ELEMENT: e2 }), a(a.S + a.F * i(function() {
                y2.of.call(h2, 1);
              }), c2, { from: Ot, of: Mt }), "BYTES_PER_ELEMENT" in S2 || d(S2, "BYTES_PER_ELEMENT", e2), a(a.P, c2, Nt), P(c2), a(a.P + a.F * St, c2, { set: Pt }), a(a.P + a.F * !I2, c2, Dt), o || S2.toString == dt || (S2.toString = dt), a(a.P + a.F * i(function() {
                new h2(1).slice();
              }), c2, { slice: Lt }), a(a.P + a.F * (i(function() {
                return [1, 2].toLocaleString() != new h2([1, 2]).toLocaleString();
              }) || !i(function() {
                S2.toLocaleString.call([1, 2]);
              })), c2, { toLocaleString: At }), N[c2] = I2 ? _2 : O2, o || I2 || d(S2, ht, O2);
            };
          } else
            t.exports = function() {
            };
        }, function(t, e, n) {
          var o = n(13);
          t.exports = function(t2, e2) {
            if (!o(t2))
              return t2;
            var n2, r;
            if (e2 && "function" == typeof (n2 = t2.toString) && !o(r = n2.call(t2)))
              return r;
            if ("function" == typeof (n2 = t2.valueOf) && !o(r = n2.call(t2)))
              return r;
            if (!e2 && "function" == typeof (n2 = t2.toString) && !o(r = n2.call(t2)))
              return r;
            throw TypeError("Can't convert object to primitive value");
          };
        }, function(t, e, n) {
          var o = n(44)("meta"), r = n(13), i = n(26), a = n(19).f, s = 0, l = Object.isExtensible || function() {
            return true;
          }, c = !n(11)(function() {
            return l(Object.preventExtensions({}));
          }), u = function(t2) {
            a(t2, o, { value: { i: "O" + ++s, w: {} } });
          }, f = t.exports = { KEY: o, NEED: false, fastKey: function(t2, e2) {
            if (!r(t2))
              return "symbol" == typeof t2 ? t2 : ("string" == typeof t2 ? "S" : "P") + t2;
            if (!i(t2, o)) {
              if (!l(t2))
                return "F";
              if (!e2)
                return "E";
              u(t2);
            }
            return t2[o].i;
          }, getWeak: function(t2, e2) {
            if (!i(t2, o)) {
              if (!l(t2))
                return true;
              if (!e2)
                return false;
              u(t2);
            }
            return t2[o].w;
          }, onFreeze: function(t2) {
            return c && f.NEED && l(t2) && !i(t2, o) && u(t2), t2;
          } };
        }, function(t, e, n) {
          var o = n(368), r = n(369), i = n(148), a = n(370);
          t.exports = function(t2) {
            return o(t2) || r(t2) || i(t2) || a();
          };
        }, function(t, e) {
          t.exports = function(t2, e2) {
            return { enumerable: !(1 & t2), configurable: !(2 & t2), writable: !(4 & t2), value: e2 };
          };
        }, function(t, e) {
          var n = 0, o = Math.random();
          t.exports = function(t2) {
            return "Symbol(".concat(void 0 === t2 ? "" : t2, ")_", (++n + o).toString(36));
          };
        }, function(t, e) {
          t.exports = false;
        }, function(t, e, n) {
          var o = n(118), r = n(88);
          t.exports = Object.keys || function(t2) {
            return o(t2, r);
          };
        }, function(t, e, n) {
          var o = n(33), r = Math.max, i = Math.min;
          t.exports = function(t2, e2) {
            return (t2 = o(t2)) < 0 ? r(t2 + e2, 0) : i(t2, e2);
          };
        }, function(t, e, n) {
          var o = n(12), r = n(119), i = n(88), a = n(87)("IE_PROTO"), s = function() {
          }, l = function() {
            var t2, e2 = n(85)("iframe"), o2 = i.length;
            for (e2.style.display = "none", n(89).appendChild(e2), e2.src = "javascript:", (t2 = e2.contentWindow.document).open(), t2.write("<script>document.F=Object<\/script>"), t2.close(), l = t2.F; o2--; )
              delete l.prototype[i[o2]];
            return l();
          };
          t.exports = Object.create || function(t2, e2) {
            var n2;
            return null !== t2 ? (s.prototype = o(t2), n2 = new s(), s.prototype = null, n2[a] = t2) : n2 = l(), void 0 === e2 ? n2 : r(n2, e2);
          };
        }, function(t, e, n) {
          var o = n(118), r = n(88).concat("length", "prototype");
          e.f = Object.getOwnPropertyNames || function(t2) {
            return o(t2, r);
          };
        }, function(t, e, n) {
          var o = n(26), r = n(22), i = n(87)("IE_PROTO"), a = Object.prototype;
          t.exports = Object.getPrototypeOf || function(t2) {
            return t2 = r(t2), o(t2, i) ? t2[i] : "function" == typeof t2.constructor && t2 instanceof t2.constructor ? t2.constructor.prototype : t2 instanceof Object ? a : null;
          };
        }, function(t, e, n) {
          var o = n(15)("unscopables"), r = Array.prototype;
          null == r[o] && n(27)(r, o, {}), t.exports = function(t2) {
            r[o][t2] = true;
          };
        }, function(t, e, n) {
          var o = n(13);
          t.exports = function(t2, e2) {
            if (!o(t2) || t2._t !== e2)
              throw TypeError("Incompatible receiver, " + e2 + " required!");
            return t2;
          };
        }, function(t, e, n) {
          var o = n(19).f, r = n(26), i = n(15)("toStringTag");
          t.exports = function(t2, e2, n2) {
            t2 && !r(t2 = n2 ? t2 : t2.prototype, i) && o(t2, i, { configurable: true, value: e2 });
          };
        }, function(t, e, n) {
          var o = n(0), r = n(38), i = n(11), a = n(91), s = "[" + a + "]", l = RegExp("^" + s + s + "*"), c = RegExp(s + s + "*$"), u = function(t2, e2, n2) {
            var r2 = {}, s2 = i(function() {
              return !!a[t2]() || "\u200B\x85" != "\u200B\x85"[t2]();
            }), l2 = r2[t2] = s2 ? e2(f) : a[t2];
            n2 && (r2[n2] = l2), o(o.P + o.F * s2, "String", r2);
          }, f = u.trim = function(t2, e2) {
            return t2 = String(r(t2)), 1 & e2 && (t2 = t2.replace(l, "")), 2 & e2 && (t2 = t2.replace(c, "")), t2;
          };
          t.exports = u;
        }, function(t, e) {
          t.exports = {};
        }, function(t, e, n) {
          "use strict";
          var o = n(10), r = n(19), i = n(18), a = n(15)("species");
          t.exports = function(t2) {
            var e2 = o[t2];
            i && e2 && !e2[a] && r.f(e2, a, { configurable: true, get: function() {
              return this;
            } });
          };
        }, function(t, e) {
          t.exports = function(t2, e2, n, o) {
            if (!(t2 instanceof e2) || void 0 !== o && o in t2)
              throw TypeError(n + ": incorrect invocation!");
            return t2;
          };
        }, function(t, e, n) {
          var o = n(23);
          t.exports = function(t2, e2, n2) {
            for (var r in e2)
              o(t2, r, e2[r], n2);
            return t2;
          };
        }, function(t, e) {
          function n(e2) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = n = function(t2) {
              return typeof t2;
            } : t.exports = n = function(t2) {
              return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
            }, n(e2);
          }
          t.exports = n;
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(150)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var l = function() {
              function t2() {
                (0, r2.default)(this, t2);
              }
              return (0, i2.default)(t2, null, [{ key: "ui", value: function(e2, n2) {
                return t2._t(e2, n2);
              } }, { key: "t", value: function(e2, n2) {
                return t2._t(e2, n2);
              } }, { key: "setDictionary", value: function(e2) {
                t2.currentDictionary = e2;
              } }, { key: "_t", value: function(e2, n2) {
                var o3 = t2.getNamespace(e2);
                return o3 && o3[n2] ? o3[n2] : n2;
              } }, { key: "getNamespace", value: function(e2) {
                return e2.split(".").reduce(function(t3, e3) {
                  return t3 && Object.keys(t3).length ? t3[e3] : {};
                }, t2.currentDictionary);
              } }]), t2;
            }();
            o2.default = l, l.displayName = "I18n", l.currentDictionary = a.default, t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(30), n(20), n(21), n(42), n(2), n(3), n(152), n(113), n(5), n(6), n(4), n(14), n(7), n(112), n(25), n(81)], void 0 === (i = "function" == typeof (o = function(t2, e2, o2, r2, i2, a, s, l, c, u, f, d, p, h, v, g, y) {
            "use strict";
            var b, m = n(8), k = n(1);
            function x() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t3) {
                return false;
              }
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.default = t2.BlockToolAPI = void 0, e2 = k(e2), o2 = k(o2), r2 = k(r2), i2 = k(i2), a = k(a), s = k(s), l = k(l), c = k(c), u = k(u), f = k(f), d = k(d), p = k(p), h = m(h), v = k(v), g = k(g), y = k(y), t2.BlockToolAPI = b, function(t3) {
              t3.APPEND_CALLBACK = "appendCallback", t3.RENDERED = "rendered", t3.MOVED = "moved", t3.UPDATED = "updated", t3.REMOVED = "removed", t3.ON_PASTE = "onPaste";
            }(b || (t2.BlockToolAPI = b = {}));
            var w = function(t3) {
              (0, u.default)(T, t3);
              var n2, y2, m2, k2, w2, S = (n2 = T, function() {
                var t4, e3 = (0, d.default)(n2);
                if (x()) {
                  var o3 = (0, d.default)(this).constructor;
                  t4 = Reflect.construct(e3, arguments, o3);
                } else
                  t4 = e3.apply(this, arguments);
                return (0, f.default)(this, t4);
              });
              function T(t4) {
                var e3, n3 = t4.id, o3 = void 0 === n3 ? h.generateBlockId() : n3, r3 = t4.data, s2 = t4.tool, c2 = t4.api, u2 = t4.readOnly, f2 = t4.tunesData;
                return (0, a.default)(this, T), (e3 = S.call(this)).cachedInputs = [], e3.tunesInstances = /* @__PURE__ */ new Map(), e3.defaultTunesInstances = /* @__PURE__ */ new Map(), e3.unavailableTunesData = {}, e3.inputIndex = 0, e3.modificationDebounceTimer = 450, e3.didMutated = h.debounce(function() {
                  var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n4 = t5 instanceof InputEvent || !t5.some(function(t6) {
                    var e4 = t6.addedNodes, n5 = void 0 === e4 ? [] : e4, o4 = t6.removedNodes;
                    return [].concat((0, i2.default)(Array.from(n5)), (0, i2.default)(Array.from(o4))).some(function(t7) {
                      return p.default.isElement(t7) && "true" === t7.dataset.mutationFree;
                    });
                  });
                  n4 && (e3.cachedInputs = [], e3.updateCurrentInput(), e3.call(b.UPDATED), e3.emit("didMutated", (0, l.default)(e3)));
                }, e3.modificationDebounceTimer), e3.handleFocus = function() {
                  e3.cachedInputs = [], e3.updateCurrentInput();
                }, e3.name = s2.name, e3.id = o3, e3.settings = s2.settings, e3.config = s2.settings.config || {}, e3.api = c2, e3.blockAPI = new v.default((0, l.default)(e3)), e3.mutationObserver = new MutationObserver(e3.didMutated), e3.tool = s2, e3.toolInstance = s2.create(r3, e3.blockAPI, u2), e3.tunes = s2.tunes, e3.composeTunes(f2), e3.holder = e3.compose(), e3;
              }
              return (0, s.default)(T, [{ key: "call", value: function(t4, e3) {
                if (h.isFunction(this.toolInstance[t4])) {
                  t4 === b.APPEND_CALLBACK && h.log("`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead", "warn");
                  try {
                    this.toolInstance[t4].call(this.toolInstance, e3);
                  } catch (e4) {
                    h.log("Error during '".concat(t4, "' call: ").concat(e4.message), "error");
                  }
                }
              } }, { key: "mergeWith", value: (w2 = (0, r2.default)(o2.default.mark(function t4(e3) {
                return o2.default.wrap(function(t5) {
                  for (; ; )
                    switch (t5.prev = t5.next) {
                      case 0:
                        return t5.next = 2, this.toolInstance.merge(e3);
                      case 2:
                      case "end":
                        return t5.stop();
                    }
                }, t4, this);
              })), function(t4) {
                return w2.apply(this, arguments);
              }) }, { key: "save", value: (k2 = (0, r2.default)(o2.default.mark(function t4() {
                var n3, r3, a2, s2, l2 = this;
                return o2.default.wrap(function(t5) {
                  for (; ; )
                    switch (t5.prev = t5.next) {
                      case 0:
                        return t5.next = 2, this.toolInstance.save(this.pluginsContent);
                      case 2:
                        return n3 = t5.sent, r3 = this.unavailableTunesData, [].concat((0, i2.default)(this.tunesInstances.entries()), (0, i2.default)(this.defaultTunesInstances.entries())).forEach(function(t6) {
                          var n4 = (0, e2.default)(t6, 2), o3 = n4[0], i3 = n4[1];
                          if (h.isFunction(i3.save))
                            try {
                              r3[o3] = i3.save();
                            } catch (t7) {
                              h.log("Tune ".concat(i3.constructor.name, " save method throws an Error %o"), "warn", t7);
                            }
                        }), a2 = window.performance.now(), t5.abrupt("return", Promise.resolve(n3).then(function(t6) {
                          return s2 = window.performance.now(), { id: l2.id, tool: l2.name, data: t6, tunes: r3, time: s2 - a2 };
                        }).catch(function(t6) {
                          h.log("Saving proccess for ".concat(l2.name, " tool failed due to the ").concat(t6), "log", "red");
                        }));
                      case 7:
                      case "end":
                        return t5.stop();
                    }
                }, t4, this);
              })), function() {
                return k2.apply(this, arguments);
              }) }, { key: "validate", value: (m2 = (0, r2.default)(o2.default.mark(function t4(e3) {
                var n3;
                return o2.default.wrap(function(t5) {
                  for (; ; )
                    switch (t5.prev = t5.next) {
                      case 0:
                        if (n3 = true, !(this.toolInstance.validate instanceof Function)) {
                          t5.next = 5;
                          break;
                        }
                        return t5.next = 4, this.toolInstance.validate(e3);
                      case 4:
                        n3 = t5.sent;
                      case 5:
                        return t5.abrupt("return", n3);
                      case 6:
                      case "end":
                        return t5.stop();
                    }
                }, t4, this);
              })), function(t4) {
                return m2.apply(this, arguments);
              }) }, { key: "renderTunes", value: function() {
                var t4 = document.createDocumentFragment(), e3 = document.createDocumentFragment();
                return this.tunesInstances.forEach(function(e4) {
                  p.default.append(t4, e4.render());
                }), this.defaultTunesInstances.forEach(function(t5) {
                  p.default.append(e3, t5.render());
                }), [t4, e3];
              } }, { key: "updateCurrentInput", value: function() {
                this.currentInput = p.default.isNativeInput(document.activeElement) || !g.default.anchorNode ? document.activeElement : g.default.anchorNode;
              } }, { key: "willSelect", value: function() {
                this.mutationObserver.observe(this.holder.firstElementChild, { childList: true, subtree: true, characterData: true, attributes: true }), this.addInputEvents();
              } }, { key: "willUnselect", value: function() {
                this.mutationObserver.disconnect(), this.removeInputEvents();
              } }, { key: "dispatchChange", value: function() {
                this.didMutated();
              } }, { key: "destroy", value: function() {
                (0, c.default)((0, d.default)(T.prototype), "destroy", this).call(this), h.isFunction(this.toolInstance.destroy) && this.toolInstance.destroy();
              } }, { key: "renderSettings", value: function() {
                if (h.isFunction(this.toolInstance.renderSettings))
                  return this.toolInstance.renderSettings();
              } }, { key: "getActiveToolboxEntry", value: (y2 = (0, r2.default)(o2.default.mark(function t4() {
                var n3, r3, i3;
                return o2.default.wrap(function(t5) {
                  for (; ; )
                    switch (t5.prev = t5.next) {
                      case 0:
                        if (1 !== (n3 = this.tool.toolbox).length) {
                          t5.next = 3;
                          break;
                        }
                        return t5.abrupt("return", Promise.resolve(this.tool.toolbox[0]));
                      case 3:
                        return t5.next = 5, this.data;
                      case 5:
                        return r3 = t5.sent, i3 = n3, t5.abrupt("return", i3.find(function(t6) {
                          return Object.entries(t6.data).some(function(t7) {
                            var n4 = (0, e2.default)(t7, 2), o3 = n4[0], i4 = n4[1];
                            return r3[o3] && h.equals(r3[o3], i4);
                          });
                        }));
                      case 8:
                      case "end":
                        return t5.stop();
                    }
                }, t4, this);
              })), function() {
                return y2.apply(this, arguments);
              }) }, { key: "compose", value: function() {
                var t4 = p.default.make("div", T.CSS.wrapper), e3 = p.default.make("div", T.CSS.content), n3 = this.toolInstance.render();
                e3.appendChild(n3);
                var o3 = e3;
                return [].concat((0, i2.default)(this.tunesInstances.values()), (0, i2.default)(this.defaultTunesInstances.values())).forEach(function(t5) {
                  if (h.isFunction(t5.wrap))
                    try {
                      o3 = t5.wrap(o3);
                    } catch (e4) {
                      h.log("Tune ".concat(t5.constructor.name, " wrap method throws an Error %o"), "warn", e4);
                    }
                }), t4.appendChild(o3), t4;
              } }, { key: "composeTunes", value: function(t4) {
                var n3 = this;
                Array.from(this.tunes.values()).forEach(function(e3) {
                  (e3.isInternal ? n3.defaultTunesInstances : n3.tunesInstances).set(e3.name, e3.create(t4[e3.name], n3.blockAPI));
                }), Object.entries(t4).forEach(function(t5) {
                  var o3 = (0, e2.default)(t5, 2), r3 = o3[0], i3 = o3[1];
                  n3.tunesInstances.has(r3) || (n3.unavailableTunesData[r3] = i3);
                });
              } }, { key: "addInputEvents", value: function() {
                var t4 = this;
                this.inputs.forEach(function(e3) {
                  e3.addEventListener("focus", t4.handleFocus), p.default.isNativeInput(e3) && e3.addEventListener("input", t4.didMutated);
                });
              } }, { key: "removeInputEvents", value: function() {
                var t4 = this;
                this.inputs.forEach(function(e3) {
                  e3.removeEventListener("focus", t4.handleFocus), p.default.isNativeInput(e3) && e3.removeEventListener("input", t4.didMutated);
                });
              } }, { key: "inputs", get: function() {
                if (0 !== this.cachedInputs.length)
                  return this.cachedInputs;
                var t4 = p.default.findAllInputs(this.holder);
                return this.inputIndex > t4.length - 1 && (this.inputIndex = t4.length - 1), this.cachedInputs = t4, t4;
              } }, { key: "currentInput", get: function() {
                return this.inputs[this.inputIndex];
              }, set: function(t4) {
                var e3 = this.inputs.findIndex(function(e4) {
                  return e4 === t4 || e4.contains(t4);
                });
                -1 !== e3 && (this.inputIndex = e3);
              } }, { key: "firstInput", get: function() {
                return this.inputs[0];
              } }, { key: "lastInput", get: function() {
                var t4 = this.inputs;
                return t4[t4.length - 1];
              } }, { key: "nextInput", get: function() {
                return this.inputs[this.inputIndex + 1];
              } }, { key: "previousInput", get: function() {
                return this.inputs[this.inputIndex - 1];
              } }, { key: "data", get: function() {
                return this.save().then(function(t4) {
                  return t4 && !h.isEmpty(t4.data) ? t4.data : {};
                });
              } }, { key: "sanitize", get: function() {
                return this.tool.sanitizeConfig;
              } }, { key: "mergeable", get: function() {
                return h.isFunction(this.toolInstance.merge);
              } }, { key: "isEmpty", get: function() {
                var t4 = p.default.isEmpty(this.pluginsContent), e3 = !this.hasMedia;
                return t4 && e3;
              } }, { key: "hasMedia", get: function() {
                return !!this.holder.querySelector(["img", "iframe", "video", "audio", "source", "input", "textarea", "twitterwidget"].join(","));
              } }, { key: "focused", set: function(t4) {
                this.holder.classList.toggle(T.CSS.focused, t4);
              }, get: function() {
                return this.holder.classList.contains(T.CSS.focused);
              } }, { key: "selected", set: function(t4) {
                t4 ? (this.holder.classList.add(T.CSS.selected), g.default.addFakeCursor(this.holder)) : (this.holder.classList.remove(T.CSS.selected), g.default.removeFakeCursor(this.holder));
              }, get: function() {
                return this.holder.classList.contains(T.CSS.selected);
              } }, { key: "stretched", set: function(t4) {
                this.holder.classList.toggle(T.CSS.wrapperStretched, t4);
              }, get: function() {
                return this.holder.classList.contains(T.CSS.wrapperStretched);
              } }, { key: "dropTarget", set: function(t4) {
                this.holder.classList.toggle(T.CSS.dropTarget, t4);
              } }, { key: "pluginsContent", get: function() {
                var t4 = this.holder.querySelector(".".concat(T.CSS.content));
                if (t4 && t4.childNodes.length)
                  for (var e3 = t4.childNodes.length - 1; e3 >= 0; e3--) {
                    var n3 = t4.childNodes[e3];
                    if (!p.default.isExtensionNode(n3))
                      return n3;
                  }
                return null;
              } }], [{ key: "CSS", get: function() {
                return { wrapper: "ce-block", wrapperStretched: "ce-block--stretched", content: "ce-block__content", focused: "ce-block--focused", selected: "ce-block--selected", dropTarget: "ce-block--drop-target" };
              } }]), T;
            }(y.default);
            t2.default = w, w.displayName = "Block";
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(381), n(7)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s) {
            "use strict";
            var l = n(8), c = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = c(r2), i2 = c(i2), a = c(a), s = l(s);
            var u = function() {
              function t2(e2) {
                var n2 = this;
                (0, r2.default)(this, t2), this.iterator = null, this.activated = false, this.onKeyDown = function(e3) {
                  if (n2.isEventReadyForHandling(e3))
                    switch (t2.usedKeys.includes(e3.keyCode) && e3.preventDefault(), e3.keyCode) {
                      case s.keyCodes.TAB:
                        n2.handleTabPress(e3);
                        break;
                      case s.keyCodes.LEFT:
                      case s.keyCodes.UP:
                        n2.flipLeft();
                        break;
                      case s.keyCodes.RIGHT:
                      case s.keyCodes.DOWN:
                        n2.flipRight();
                        break;
                      case s.keyCodes.ENTER:
                        n2.handleEnterPress(e3);
                    }
                }, this.iterator = new a.default(e2.items, e2.focusedItemClass), this.activateCallback = e2.activateCallback, this.allowedKeys = e2.allowedKeys || t2.usedKeys;
              }
              return (0, i2.default)(t2, [{ key: "activate", value: function(t3) {
                this.activated = true, t3 && this.iterator.setItems(t3), document.addEventListener("keydown", this.onKeyDown);
              } }, { key: "deactivate", value: function() {
                this.activated = false, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
              } }, { key: "focusFirst", value: function() {
                this.dropCursor(), this.flipRight();
              } }, { key: "flipLeft", value: function() {
                this.iterator.previous(), this.flipCallback();
              } }, { key: "flipRight", value: function() {
                this.iterator.next(), this.flipCallback();
              } }, { key: "hasFocus", value: function() {
                return !!this.iterator.currentItem;
              } }, { key: "dropCursor", value: function() {
                this.iterator.dropCursor();
              } }, { key: "isEventReadyForHandling", value: function(t3) {
                return this.activated && this.allowedKeys.includes(t3.keyCode);
              } }, { key: "handleTabPress", value: function(t3) {
                switch (t3.shiftKey ? a.default.directions.LEFT : a.default.directions.RIGHT) {
                  case a.default.directions.RIGHT:
                    this.flipRight();
                    break;
                  case a.default.directions.LEFT:
                    this.flipLeft();
                }
              } }, { key: "handleEnterPress", value: function(t3) {
                this.activated && (this.iterator.currentItem && this.iterator.currentItem.click(), s.isFunction(this.activateCallback) && this.activateCallback(this.iterator.currentItem), t3.preventDefault(), t3.stopPropagation());
              } }, { key: "flipCallback", value: function() {
                this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded();
              } }], [{ key: "usedKeys", get: function() {
                return [s.keyCodes.TAB, s.keyCodes.LEFT, s.keyCodes.RIGHT, s.keyCodes.ENTER, s.keyCodes.UP, s.keyCodes.DOWN];
              } }]), t2;
            }();
            o2.default = u, u.displayName = "Flipper", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o = n(37);
          t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t2) {
            return "String" == o(t2) ? t2.split("") : Object(t2);
          };
        }, function(t, e) {
          e.f = {}.propertyIsEnumerable;
        }, function(t, e, n) {
          var o = n(37), r = n(15)("toStringTag"), i = "Arguments" == o(function() {
            return arguments;
          }());
          t.exports = function(t2) {
            var e2, n2, a;
            return void 0 === t2 ? "Undefined" : null === t2 ? "Null" : "string" == typeof (n2 = function(t3, e3) {
              try {
                return t3[e3];
              } catch (t4) {
              }
            }(e2 = Object(t2), r)) ? n2 : i ? o(e2) : "Object" == (a = o(e2)) && "function" == typeof e2.callee ? "Arguments" : a;
          };
        }, function(t, e, n) {
          var o = n(12), r = n(32), i = n(15)("species");
          t.exports = function(t2, e2) {
            var n2, a = o(t2).constructor;
            return void 0 === a || null == (n2 = o(a)[i]) ? e2 : r(n2);
          };
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(7), n(379)], void 0 === (i = "function" == typeof (o = function(t2, e2, o2) {
            "use strict";
            var r2 = n(1), i2 = n(8);
            function a(t3) {
              var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = { tags: e3 }, r3 = new o2.default(n2);
              return r3.clean(t3);
            }
            function s(t3, n2) {
              return Array.isArray(t3) ? (i3 = n2, t3.map(function(t4) {
                return s(t4, i3);
              })) : e2.isObject(t3) ? function(t4, n3) {
                var o4, r4 = {};
                for (var i4 in t4)
                  if (Object.prototype.hasOwnProperty.call(t4, i4)) {
                    var a2 = t4[i4], l = (o4 = n3[i4], e2.isObject(o4) || e2.isBoolean(o4) || e2.isFunction(o4) ? n3[i4] : n3);
                    r4[i4] = s(a2, l);
                  }
                return r4;
              }(t3, n2) : e2.isString(t3) ? (o3 = t3, r3 = n2, e2.isObject(r3) ? a(o3, r3) : false === r3 ? a(o3, {}) : o3) : t3;
              var o3, r3, i3;
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.sanitizeBlocks = function(t3, n2) {
              return t3.map(function(t4) {
                var o3 = e2.isFunction(n2) ? n2(t4.tool) : n2;
                return e2.isEmpty(o3) || (t4.data = s(t4.data, o3)), t4;
              });
            }, t2.clean = a, e2 = i2(e2), o2 = r2(o2);
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(7)], void 0 === (i = "function" == typeof (o = function(t2, e2, o2, r2) {
            "use strict";
            var i2, a, s, l, c, u, f = n(8), d = n(1);
            Object.defineProperty(t2, "__esModule", { value: true }), t2.default = t2.InternalTuneSettings = t2.InternalInlineToolSettings = t2.InternalBlockToolSettings = t2.CommonInternalSettings = t2.UserSettings = t2.ToolType = void 0, e2 = d(e2), o2 = d(o2), r2 = f(r2), t2.ToolType = i2, function(t3) {
              t3[t3.Block = 0] = "Block", t3[t3.Inline = 1] = "Inline", t3[t3.Tune = 2] = "Tune";
            }(i2 || (t2.ToolType = i2 = {})), t2.UserSettings = a, function(t3) {
              t3.Shortcut = "shortcut", t3.Toolbox = "toolbox", t3.EnabledInlineTools = "inlineToolbar", t3.EnabledBlockTunes = "tunes", t3.Config = "config";
            }(a || (t2.UserSettings = a = {})), t2.CommonInternalSettings = s, function(t3) {
              t3.Shortcut = "shortcut", t3.SanitizeConfig = "sanitize";
            }(s || (t2.CommonInternalSettings = s = {})), t2.InternalBlockToolSettings = l, function(t3) {
              t3.IsEnabledLineBreaks = "enableLineBreaks", t3.Toolbox = "toolbox", t3.ConversionConfig = "conversionConfig", t3.IsReadOnlySupported = "isReadOnlySupported", t3.PasteConfig = "pasteConfig";
            }(l || (t2.InternalBlockToolSettings = l = {})), t2.InternalInlineToolSettings = c, function(t3) {
              t3.IsInline = "isInline", t3.Title = "title";
            }(c || (t2.InternalInlineToolSettings = c = {})), t2.InternalTuneSettings = u, function(t3) {
              t3.IsTune = "isTune";
            }(u || (t2.InternalTuneSettings = u = {}));
            var p = function() {
              function t3(n2) {
                var o3 = n2.name, r3 = n2.constructable, i3 = n2.config, a2 = n2.api, s2 = n2.isDefault, l2 = n2.isInternal, c2 = void 0 !== l2 && l2, u2 = n2.defaultPlaceholder;
                (0, e2.default)(this, t3), this.api = a2, this.name = o3, this.constructable = r3, this.config = i3, this.isDefault = s2, this.isInternal = c2, this.defaultPlaceholder = u2;
              }
              return (0, o2.default)(t3, [{ key: "reset", value: function() {
                if (r2.isFunction(this.constructable.reset))
                  return this.constructable.reset();
              } }, { key: "prepare", value: function() {
                if (r2.isFunction(this.constructable.prepare))
                  return this.constructable.prepare({ toolName: this.name, config: this.settings });
              } }, { key: "isInline", value: function() {
                return this.type === i2.Inline;
              } }, { key: "isBlock", value: function() {
                return this.type === i2.Block;
              } }, { key: "isTune", value: function() {
                return this.type === i2.Tune;
              } }, { key: "settings", get: function() {
                var t4 = this.config[a.Config] || {};
                return this.isDefault && !("placeholder" in t4) && this.defaultPlaceholder && (t4.placeholder = this.defaultPlaceholder), t4;
              } }, { key: "shortcut", get: function() {
                var t4 = this.constructable[s.Shortcut];
                return this.config[a.Shortcut] || t4;
              } }, { key: "sanitizeConfig", get: function() {
                return this.constructable[s.SanitizeConfig] || {};
              } }]), t3;
            }();
            t2.default = p, p.displayName = "BaseTool";
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o = n(17), r = n(10), i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
          (t.exports = function(t2, e2) {
            return i[t2] || (i[t2] = void 0 !== e2 ? e2 : {});
          })("versions", []).push({ version: o.version, mode: n(45) ? "pure" : "global", copyright: "\xA9 2019 Denis Pushkarev (zloirock.ru)" });
        }, function(t, e, n) {
          var o = n(28), r = n(16), i = n(47);
          t.exports = function(t2) {
            return function(e2, n2, a) {
              var s, l = o(e2), c = r(l.length), u = i(a, c);
              if (t2 && n2 != n2) {
                for (; c > u; )
                  if ((s = l[u++]) != s)
                    return true;
              } else
                for (; c > u; u++)
                  if ((t2 || u in l) && l[u] === n2)
                    return t2 || u || 0;
              return !t2 && -1;
            };
          };
        }, function(t, e) {
          e.f = Object.getOwnPropertySymbols;
        }, function(t, e, n) {
          var o = n(37);
          t.exports = Array.isArray || function(t2) {
            return "Array" == o(t2);
          };
        }, function(t, e, n) {
          var o = n(15)("iterator"), r = false;
          try {
            var i = [7][o]();
            i.return = function() {
              r = true;
            }, Array.from(i, function() {
              throw 2;
            });
          } catch (t2) {
          }
          t.exports = function(t2, e2) {
            if (!e2 && !r)
              return false;
            var n2 = false;
            try {
              var i2 = [7], a = i2[o]();
              a.next = function() {
                return { done: n2 = true };
              }, i2[o] = function() {
                return a;
              }, t2(i2);
            } catch (t3) {
            }
            return n2;
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(12);
          t.exports = function() {
            var t2 = o(this), e2 = "";
            return t2.global && (e2 += "g"), t2.ignoreCase && (e2 += "i"), t2.multiline && (e2 += "m"), t2.unicode && (e2 += "u"), t2.sticky && (e2 += "y"), e2;
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(65), r = RegExp.prototype.exec;
          t.exports = function(t2, e2) {
            var n2 = t2.exec;
            if ("function" == typeof n2) {
              var i = n2.call(t2, e2);
              if ("object" != typeof i)
                throw new TypeError("RegExp exec method returned something other than an Object or null");
              return i;
            }
            if ("RegExp" !== o(t2))
              throw new TypeError("RegExp#exec called on incompatible receiver");
            return r.call(t2, e2);
          };
        }, function(t, e, n) {
          "use strict";
          n(136);
          var o = n(23), r = n(27), i = n(11), a = n(38), s = n(15), l = n(106), c = s("species"), u = !i(function() {
            var t2 = /./;
            return t2.exec = function() {
              var t3 = [];
              return t3.groups = { a: "7" }, t3;
            }, "7" !== "".replace(t2, "$<a>");
          }), f = function() {
            var t2 = /(?:)/, e2 = t2.exec;
            t2.exec = function() {
              return e2.apply(this, arguments);
            };
            var n2 = "ab".split(t2);
            return 2 === n2.length && "a" === n2[0] && "b" === n2[1];
          }();
          t.exports = function(t2, e2, n2) {
            var d = s(t2), p = !i(function() {
              var e3 = {};
              return e3[d] = function() {
                return 7;
              }, 7 != ""[t2](e3);
            }), h = p ? !i(function() {
              var e3 = false, n3 = /a/;
              return n3.exec = function() {
                return e3 = true, null;
              }, "split" === t2 && (n3.constructor = {}, n3.constructor[c] = function() {
                return n3;
              }), n3[d](""), !e3;
            }) : void 0;
            if (!p || !h || "replace" === t2 && !u || "split" === t2 && !f) {
              var v = /./[d], g = n2(a, d, ""[t2], function(t3, e3, n3, o2, r2) {
                return e3.exec === l ? p && !r2 ? { done: true, value: v.call(e3, n3, o2) } : { done: true, value: t3.call(n3, e3, o2) } : { done: false };
              }), y = g[0], b = g[1];
              o(String.prototype, t2, y), r(RegExp.prototype, d, 2 == e2 ? function(t3, e3) {
                return b.call(t3, this, e3);
              } : function(t3) {
                return b.call(t3, this);
              });
            }
          };
        }, function(t, e, n) {
          var o = n(31), r = n(131), i = n(101), a = n(12), s = n(16), l = n(103), c = {}, u = {};
          (e = t.exports = function(t2, e2, n2, f, d) {
            var p, h, v, g, y = d ? function() {
              return t2;
            } : l(t2), b = o(n2, f, e2 ? 2 : 1), m = 0;
            if ("function" != typeof y)
              throw TypeError(t2 + " is not iterable!");
            if (i(y)) {
              for (p = s(t2.length); p > m; m++)
                if ((g = e2 ? b(a(h = t2[m])[0], h[1]) : b(t2[m])) === c || g === u)
                  return g;
            } else
              for (v = y.call(t2); !(h = v.next()).done; )
                if ((g = r(v, b, h.value, e2)) === c || g === u)
                  return g;
          }).BREAK = c, e.RETURN = u;
        }, function(t, e, n) {
          var o = n(10).navigator;
          t.exports = o && o.userAgent || "";
        }, function(t, e, n) {
          "use strict";
          var o = n(10), r = n(0), i = n(23), a = n(58), s = n(41), l = n(77), c = n(57), u = n(13), f = n(11), d = n(73), p = n(53), h = n(92);
          t.exports = function(t2, e2, n2, v, g, y) {
            var b = o[t2], m = b, k = g ? "set" : "add", x = m && m.prototype, w = {}, S = function(t3) {
              var e3 = x[t3];
              i(x, t3, "delete" == t3 || "has" == t3 ? function(t4) {
                return !(y && !u(t4)) && e3.call(this, 0 === t4 ? 0 : t4);
              } : "get" == t3 ? function(t4) {
                return y && !u(t4) ? void 0 : e3.call(this, 0 === t4 ? 0 : t4);
              } : "add" == t3 ? function(t4) {
                return e3.call(this, 0 === t4 ? 0 : t4), this;
              } : function(t4, n3) {
                return e3.call(this, 0 === t4 ? 0 : t4, n3), this;
              });
            };
            if ("function" == typeof m && (y || x.forEach && !f(function() {
              new m().entries().next();
            }))) {
              var T = new m(), E = T[k](y ? {} : -0, 1) != T, B = f(function() {
                T.has(1);
              }), C = d(function(t3) {
                new m(t3);
              }), _ = !y && f(function() {
                for (var t3 = new m(), e3 = 5; e3--; )
                  t3[k](e3, e3);
                return !t3.has(-0);
              });
              C || ((m = e2(function(e3, n3) {
                c(e3, m, t2);
                var o2 = h(new b(), e3, m);
                return null != n3 && l(n3, g, o2[k], o2), o2;
              })).prototype = x, x.constructor = m), (B || _) && (S("delete"), S("has"), g && S("get")), (_ || E) && S(k), y && x.clear && delete x.clear;
            } else
              m = v.getConstructor(e2, t2, g, k), a(m.prototype, n2), s.NEED = true;
            return p(m, t2), w[t2] = m, r(r.G + r.W + r.F * (m != b), w), y || v.setStrong(m, t2, g), m;
          };
        }, function(t, e, n) {
          for (var o, r = n(10), i = n(27), a = n(44), s = a("typed_array"), l = a("view"), c = !(!r.ArrayBuffer || !r.DataView), u = c, f = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9; )
            (o = r[d[f++]]) ? (i(o.prototype, s, true), i(o.prototype, l, true)) : u = false;
          t.exports = { ABV: c, CONSTR: u, TYPED: s, VIEW: l };
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(7)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2);
            var l = function() {
              function t2() {
                (0, r2.default)(this, t2), this.subscribers = {};
              }
              return (0, i2.default)(t2, [{ key: "on", value: function(t3, e2) {
                t3 in this.subscribers || (this.subscribers[t3] = []), this.subscribers[t3].push(e2);
              } }, { key: "once", value: function(t3, e2) {
                var n2 = this;
                t3 in this.subscribers || (this.subscribers[t3] = []), this.subscribers[t3].push(function o3(r3) {
                  var i3 = e2(r3), a2 = n2.subscribers[t3].indexOf(o3);
                  return -1 !== a2 && n2.subscribers[t3].splice(a2, 1), i3;
                });
              } }, { key: "emit", value: function(t3, e2) {
                !(0, a.isEmpty)(this.subscribers) && this.subscribers[t3] && this.subscribers[t3].reduce(function(t4, e3) {
                  return e3(t4) || t4;
                }, e2);
              } }, { key: "off", value: function(t3, e2) {
                for (var n2 = 0; n2 < this.subscribers[t3].length; n2++)
                  if (this.subscribers[t3][n2] === e2) {
                    delete this.subscribers[t3][n2];
                    break;
                  }
              } }, { key: "destroy", value: function() {
                this.subscribers = null;
              } }]), t2;
            }();
            o2.default = l, l.displayName = "EventsDispatcher", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c) {
            "use strict";
            var u = n(1);
            function f() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), l = u(l);
            var d = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (f()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "getMethodsForTool", value: function(t3) {
                return Object.assign(this.methods, { i18n: this.Editor.I18nAPI.getMethodsForTool(t3) });
              } }, { key: "methods", get: function() {
                return { blocks: this.Editor.BlocksAPI.methods, caret: this.Editor.CaretAPI.methods, events: this.Editor.EventsAPI.methods, listeners: this.Editor.ListenersAPI.methods, notifier: this.Editor.NotifierAPI.methods, sanitizer: this.Editor.SanitizerAPI.methods, saver: this.Editor.SaverAPI.methods, selection: this.Editor.SelectionAPI.methods, styles: this.Editor.StylesAPI.classes, toolbar: this.Editor.ToolbarAPI.methods, inlineToolbar: this.Editor.InlineToolbarAPI.methods, tooltip: this.Editor.TooltipAPI.methods, i18n: this.Editor.I18nAPI.methods, readOnly: this.Editor.ReadOnlyAPI.methods, ui: this.Editor.UiAPI.methods };
              } }]), o3;
            }((c = u(c)).default);
            o2.default = d, d.displayName = "API", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9), n(14), n(7), n(60), n(84), n(114), n(385)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d, p, h, v) {
            "use strict";
            var g = n(8), y = n(1);
            function b() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = y(r2), i2 = y(i2), a = y(a), s = y(s), l = y(l), c = y(c), u = y(u), f = g(f), d = y(d), h = y(h), v = g(v);
            var m = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (b()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3(t3) {
                var e3, i3 = t3.config, a2 = t3.eventsDispatcher;
                return (0, r2.default)(this, o3), (e3 = n2.call(this, { config: i3, eventsDispatcher: a2 })).tooltip = new h.default(), e3;
              }
              return (0, i2.default)(o3, [{ key: "toggleReadOnly", value: function(t3) {
                t3 ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : (this.drawUI(), this.enableModuleBindings());
              } }, { key: "moveAndOpen", value: function() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Editor.BlockManager.currentBlock;
                if (this.toolboxInstance.close(), this.Editor.BlockSettings.close(), t3) {
                  this.hoveredBlock = t3;
                  var e3, n3 = t3.holder, o4 = this.Editor.UI.isMobile, r3 = t3.pluginsContent, i3 = window.getComputedStyle(r3), a2 = parseInt(i3.paddingTop, 10), s2 = n3.offsetHeight;
                  e3 = o4 ? n3.offsetTop + s2 : n3.offsetTop + a2, this.nodes.wrapper.style.top = "".concat(Math.floor(e3), "px"), 1 === this.Editor.BlockManager.blocks.length && t3.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
                }
              } }, { key: "close", value: function() {
                this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), this.toolboxInstance.close(), this.Editor.BlockSettings.close());
              } }, { key: "open", value: function() {
                var t3 = this, e3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], f.delay(function() {
                  t3.nodes.wrapper.classList.add(t3.CSS.toolbarOpened), e3 ? t3.blockActions.show() : t3.blockActions.hide();
                }, 50)();
              } }, { key: "make", value: function() {
                var t3 = this;
                this.nodes.wrapper = u.default.make("div", this.CSS.toolbar), ["content", "actions"].forEach(function(e4) {
                  t3.nodes[e4] = u.default.make("div", t3.CSS[e4]);
                }), u.default.append(this.nodes.wrapper, this.nodes.content), u.default.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = u.default.make("div", this.CSS.plusButton), u.default.append(this.nodes.plusButton, u.default.svg("plus", 16, 16)), u.default.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", function() {
                  t3.tooltip.hide(true), t3.plusButtonClicked();
                }, false);
                var e3 = u.default.make("div");
                e3.appendChild(document.createTextNode(d.default.ui(p.I18nInternalNS.ui.toolbar.toolbox, "Add"))), e3.appendChild(u.default.make("div", this.CSS.plusButtonShortcut, { textContent: "\u21E5 Tab" })), this.tooltip.onHover(this.nodes.plusButton, e3, { hidingDelay: 400 }), this.nodes.settingsToggler = u.default.make("span", this.CSS.settingsToggler);
                var n3 = u.default.svg("dots", 16, 16);
                u.default.append(this.nodes.settingsToggler, n3), u.default.append(this.nodes.actions, this.nodes.settingsToggler), this.tooltip.onHover(this.nodes.settingsToggler, d.default.ui(p.I18nInternalNS.ui.blockTunes.toggler, "Click to tune"), { hidingDelay: 400 }), u.default.append(this.nodes.actions, this.makeToolbox()), u.default.append(this.nodes.actions, this.Editor.BlockSettings.nodes.wrapper), u.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
              } }, { key: "makeToolbox", value: function() {
                var t3 = this;
                return this.toolboxInstance = new v.default({ api: this.Editor.API.methods, tools: this.Editor.Tools.blockTools, i18nLabels: { filter: d.default.ui(p.I18nInternalNS.ui.toolbar.toolbox, "Filter"), nothingFound: d.default.ui(p.I18nInternalNS.ui.toolbar.toolbox, "Nothing found") } }), this.toolboxInstance.on(v.ToolboxEvent.Opened, function() {
                  t3.Editor.UI.nodes.wrapper.classList.add(t3.CSS.openedToolboxHolderModifier);
                }), this.toolboxInstance.on(v.ToolboxEvent.Closed, function() {
                  t3.Editor.UI.nodes.wrapper.classList.remove(t3.CSS.openedToolboxHolderModifier);
                }), this.toolboxInstance.on(v.ToolboxEvent.BlockAdded, function(e3) {
                  var n3 = e3.block, o4 = t3.Editor, r3 = o4.BlockManager, i3 = o4.Caret, a2 = r3.getBlockById(n3.id);
                  0 === a2.inputs.length && (a2 === r3.lastBlock ? (r3.insertAtEnd(), i3.setToBlock(r3.lastBlock)) : i3.setToBlock(r3.nextBlock));
                }), this.toolboxInstance.make();
              } }, { key: "plusButtonClicked", value: function() {
                this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.toggle();
              } }, { key: "enableModuleBindings", value: function() {
                var t3 = this;
                this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", function(e3) {
                  e3.stopPropagation(), t3.settingsTogglerClicked(), t3.toolboxInstance.close(), t3.tooltip.hide(true);
                }, true), f.isMobileScreen() || this.eventsDispatcher.on(this.Editor.UI.events.blockHovered, function(e3) {
                  t3.Editor.BlockSettings.opened || t3.toolboxInstance.opened || t3.moveAndOpen(e3.block);
                });
              } }, { key: "disableModuleBindings", value: function() {
                this.readOnlyMutableListeners.clearAll();
              } }, { key: "settingsTogglerClicked", value: function() {
                this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock);
              } }, { key: "drawUI", value: function() {
                this.Editor.BlockSettings.make(), this.make();
              } }, { key: "destroy", value: function() {
                this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy(), this.tooltip.destroy();
              } }, { key: "CSS", get: function() {
                return { toolbar: "ce-toolbar", content: "ce-toolbar__content", actions: "ce-toolbar__actions", actionsOpened: "ce-toolbar__actions--opened", toolbarOpened: "ce-toolbar--opened", openedToolboxHolderModifier: "codex-editor--toolbox-opened", plusButton: "ce-toolbar__plus", plusButtonShortcut: "ce-toolbar__plus-shortcut", settingsToggler: "ce-toolbar__settings-btn", settingsTogglerHidden: "ce-toolbar__settings-btn--hidden" };
              } }, { key: "opened", get: function() {
                return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
              } }, { key: "toolbox", get: function() {
                var t3 = this;
                return { opened: this.toolboxInstance.opened, close: function() {
                  t3.toolboxInstance.close();
                }, open: function() {
                  t3.Editor.BlockManager.currentBlock = t3.hoveredBlock, t3.toolboxInstance.open();
                }, toggle: function() {
                  return t3.toolboxInstance.toggle();
                }, hasFocus: function() {
                  return t3.toolboxInstance.hasFocus();
                } };
              } }, { key: "blockActions", get: function() {
                var t3 = this;
                return { hide: function() {
                  t3.nodes.actions.classList.remove(t3.CSS.actionsOpened);
                }, show: function() {
                  t3.nodes.actions.classList.add(t3.CSS.actionsOpened);
                } };
              } }, { key: "blockTunesToggler", get: function() {
                var t3 = this;
                return { hide: function() {
                  return t3.nodes.settingsToggler.classList.add(t3.CSS.settingsTogglerHidden);
                }, show: function() {
                  return t3.nodes.settingsToggler.classList.remove(t3.CSS.settingsTogglerHidden);
                } };
              } }]), o3;
            }(c.default);
            o2.default = m, m.displayName = "Toolbar", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(30), n(150), n(7)], void 0 === (i = "function" == typeof (o = function(t2, e2, o2, r2) {
            "use strict";
            var i2 = n(1);
            Object.defineProperty(t2, "__esModule", { value: true }), t2.I18nInternalNS = void 0, e2 = i2(e2);
            var a = function t3(n2, o3) {
              var i3 = {};
              return Object.entries(n2).forEach(function(n3) {
                var a2 = (0, e2.default)(n3, 2), s = a2[0], l = a2[1];
                if ((0, r2.isObject)(l)) {
                  var c = o3 ? "".concat(o3, ".").concat(s) : s, u = Object.values(l).every(function(t4) {
                    return (0, r2.isString)(t4);
                  });
                  i3[s] = u ? c : t3(l, c);
                } else
                  i3[s] = l;
              }), i3;
            }((o2 = i2(o2)).default);
            t2.I18nInternalNS = a;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o = n(13), r = n(10).document, i = o(r) && o(r.createElement);
          t.exports = function(t2) {
            return i ? r.createElement(t2) : {};
          };
        }, function(t, e, n) {
          e.f = n(15);
        }, function(t, e, n) {
          var o = n(69)("keys"), r = n(44);
          t.exports = function(t2) {
            return o[t2] || (o[t2] = r(t2));
          };
        }, function(t, e) {
          t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        }, function(t, e, n) {
          var o = n(10).document;
          t.exports = o && o.documentElement;
        }, function(t, e, n) {
          var o = n(13), r = n(12), i = function(t2, e2) {
            if (r(t2), !o(e2) && null !== e2)
              throw TypeError(e2 + ": can't set as prototype!");
          };
          t.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(t2, e2, o2) {
            try {
              (o2 = n(31)(Function.call, n(34).f(Object.prototype, "__proto__").set, 2))(t2, []), e2 = !(t2 instanceof Array);
            } catch (t3) {
              e2 = true;
            }
            return function(t3, n2) {
              return i(t3, n2), e2 ? t3.__proto__ = n2 : o2(t3, n2), t3;
            };
          }({}, false) : void 0), check: i };
        }, function(t, e) {
          t.exports = "	\n\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
        }, function(t, e, n) {
          var o = n(13), r = n(90).set;
          t.exports = function(t2, e2, n2) {
            var i, a = e2.constructor;
            return a !== n2 && "function" == typeof a && (i = a.prototype) !== n2.prototype && o(i) && r && r(t2, i), t2;
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(33), r = n(38);
          t.exports = function(t2) {
            var e2 = String(r(this)), n2 = "", i = o(t2);
            if (i < 0 || i == 1 / 0)
              throw RangeError("Count can't be negative");
            for (; i > 0; (i >>>= 1) && (e2 += e2))
              1 & i && (n2 += e2);
            return n2;
          };
        }, function(t, e) {
          t.exports = Math.sign || function(t2) {
            return 0 == (t2 = +t2) || t2 != t2 ? t2 : t2 < 0 ? -1 : 1;
          };
        }, function(t, e) {
          var n = Math.expm1;
          t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function(t2) {
            return 0 == (t2 = +t2) ? t2 : t2 > -1e-6 && t2 < 1e-6 ? t2 + t2 * t2 / 2 : Math.exp(t2) - 1;
          } : n;
        }, function(t, e, n) {
          var o = n(33), r = n(38);
          t.exports = function(t2) {
            return function(e2, n2) {
              var i, a, s = String(r(e2)), l = o(n2), c = s.length;
              return l < 0 || l >= c ? t2 ? "" : void 0 : (i = s.charCodeAt(l)) < 55296 || i > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? t2 ? s.charAt(l) : i : t2 ? s.slice(l, l + 2) : a - 56320 + (i - 55296 << 10) + 65536;
            };
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(45), r = n(0), i = n(23), a = n(27), s = n(55), l = n(130), c = n(53), u = n(50), f = n(15)("iterator"), d = !([].keys && "next" in [].keys()), p = function() {
            return this;
          };
          t.exports = function(t2, e2, n2, h, v, g, y) {
            l(n2, e2, h);
            var b, m, k, x = function(t3) {
              if (!d && t3 in E)
                return E[t3];
              switch (t3) {
                case "keys":
                case "values":
                  return function() {
                    return new n2(this, t3);
                  };
              }
              return function() {
                return new n2(this, t3);
              };
            }, w = e2 + " Iterator", S = "values" == v, T = false, E = t2.prototype, B = E[f] || E["@@iterator"] || v && E[v], C = B || x(v), _ = v ? S ? x("entries") : C : void 0, I = "Array" == e2 && E.entries || B;
            if (I && (k = u(I.call(new t2()))) !== Object.prototype && k.next && (c(k, w, true), o || "function" == typeof k[f] || a(k, f, p)), S && B && "values" !== B.name && (T = true, C = function() {
              return B.call(this);
            }), o && !y || !d && !T && E[f] || a(E, f, C), s[e2] = C, s[w] = p, v)
              if (b = { values: S ? C : x("values"), keys: g ? C : x("keys"), entries: _ }, y)
                for (m in b)
                  m in E || i(E, m, b[m]);
              else
                r(r.P + r.F * (d || T), e2, b);
            return b;
          };
        }, function(t, e, n) {
          var o = n(99), r = n(38);
          t.exports = function(t2, e2, n2) {
            if (o(e2))
              throw TypeError("String#" + n2 + " doesn't accept regex!");
            return String(r(t2));
          };
        }, function(t, e, n) {
          var o = n(13), r = n(37), i = n(15)("match");
          t.exports = function(t2) {
            var e2;
            return o(t2) && (void 0 !== (e2 = t2[i]) ? !!e2 : "RegExp" == r(t2));
          };
        }, function(t, e, n) {
          var o = n(15)("match");
          t.exports = function(t2) {
            var e2 = /./;
            try {
              "/./"[t2](e2);
            } catch (n2) {
              try {
                return e2[o] = false, !"/./"[t2](e2);
              } catch (t3) {
              }
            }
            return true;
          };
        }, function(t, e, n) {
          var o = n(55), r = n(15)("iterator"), i = Array.prototype;
          t.exports = function(t2) {
            return void 0 !== t2 && (o.Array === t2 || i[r] === t2);
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(19), r = n(43);
          t.exports = function(t2, e2, n2) {
            e2 in t2 ? o.f(t2, e2, r(0, n2)) : t2[e2] = n2;
          };
        }, function(t, e, n) {
          var o = n(65), r = n(15)("iterator"), i = n(55);
          t.exports = n(17).getIteratorMethod = function(t2) {
            if (null != t2)
              return t2[r] || t2["@@iterator"] || i[o(t2)];
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(22), r = n(47), i = n(16);
          t.exports = function(t2) {
            for (var e2 = o(this), n2 = i(e2.length), a = arguments.length, s = r(a > 1 ? arguments[1] : void 0, n2), l = a > 2 ? arguments[2] : void 0, c = void 0 === l ? n2 : r(l, n2); c > s; )
              e2[s++] = t2;
            return e2;
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(51), r = n(135), i = n(55), a = n(28);
          t.exports = n(97)(Array, "Array", function(t2, e2) {
            this._t = a(t2), this._i = 0, this._k = e2;
          }, function() {
            var t2 = this._t, e2 = this._k, n2 = this._i++;
            return !t2 || n2 >= t2.length ? (this._t = void 0, r(1)) : r(0, "keys" == e2 ? n2 : "values" == e2 ? t2[n2] : [n2, t2[n2]]);
          }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
        }, function(t, e, n) {
          "use strict";
          var o, r, i = n(74), a = RegExp.prototype.exec, s = String.prototype.replace, l = a, c = (o = /a/, r = /b*/g, a.call(o, "a"), a.call(r, "a"), 0 !== o.lastIndex || 0 !== r.lastIndex), u = void 0 !== /()??/.exec("")[1];
          (c || u) && (l = function(t2) {
            var e2, n2, o2, r2, l2 = this;
            return u && (n2 = new RegExp("^" + l2.source + "$(?!\\s)", i.call(l2))), c && (e2 = l2.lastIndex), o2 = a.call(l2, t2), c && o2 && (l2.lastIndex = l2.global ? o2.index + o2[0].length : e2), u && o2 && o2.length > 1 && s.call(o2[0], n2, function() {
              for (r2 = 1; r2 < arguments.length - 2; r2++)
                void 0 === arguments[r2] && (o2[r2] = void 0);
            }), o2;
          }), t.exports = l;
        }, function(t, e, n) {
          "use strict";
          var o = n(96)(true);
          t.exports = function(t2, e2, n2) {
            return e2 + (n2 ? o(t2, e2).length : 1);
          };
        }, function(t, e, n) {
          var o, r, i, a = n(31), s = n(124), l = n(89), c = n(85), u = n(10), f = u.process, d = u.setImmediate, p = u.clearImmediate, h = u.MessageChannel, v = u.Dispatch, g = 0, y = {}, b = function() {
            var t2 = +this;
            if (y.hasOwnProperty(t2)) {
              var e2 = y[t2];
              delete y[t2], e2();
            }
          }, m = function(t2) {
            b.call(t2.data);
          };
          d && p || (d = function(t2) {
            for (var e2 = [], n2 = 1; arguments.length > n2; )
              e2.push(arguments[n2++]);
            return y[++g] = function() {
              s("function" == typeof t2 ? t2 : Function(t2), e2);
            }, o(g), g;
          }, p = function(t2) {
            delete y[t2];
          }, "process" == n(37)(f) ? o = function(t2) {
            f.nextTick(a(b, t2, 1));
          } : v && v.now ? o = function(t2) {
            v.now(a(b, t2, 1));
          } : h ? (i = (r = new h()).port2, r.port1.onmessage = m, o = a(i.postMessage, i, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (o = function(t2) {
            u.postMessage(t2 + "", "*");
          }, u.addEventListener("message", m, false)) : o = "onreadystatechange" in c("script") ? function(t2) {
            l.appendChild(c("script")).onreadystatechange = function() {
              l.removeChild(this), b.call(t2);
            };
          } : function(t2) {
            setTimeout(a(b, t2, 1), 0);
          }), t.exports = { set: d, clear: p };
        }, function(t, e, n) {
          "use strict";
          var o = n(10), r = n(18), i = n(45), a = n(80), s = n(27), l = n(58), c = n(11), u = n(57), f = n(33), d = n(16), p = n(143), h = n(49).f, v = n(19).f, g = n(104), y = n(53), b = o.ArrayBuffer, m = o.DataView, k = o.Math, x = o.RangeError, w = o.Infinity, S = b, T = k.abs, E = k.pow, B = k.floor, C = k.log, _ = k.LN2, I = r ? "_b" : "buffer", O = r ? "_l" : "byteLength", M = r ? "_o" : "byteOffset";
          function R(t2, e2, n2) {
            var o2, r2, i2, a2 = new Array(n2), s2 = 8 * n2 - e2 - 1, l2 = (1 << s2) - 1, c2 = l2 >> 1, u2 = 23 === e2 ? E(2, -24) - E(2, -77) : 0, f2 = 0, d2 = t2 < 0 || 0 === t2 && 1 / t2 < 0 ? 1 : 0;
            for ((t2 = T(t2)) != t2 || t2 === w ? (r2 = t2 != t2 ? 1 : 0, o2 = l2) : (o2 = B(C(t2) / _), t2 * (i2 = E(2, -o2)) < 1 && (o2--, i2 *= 2), (t2 += o2 + c2 >= 1 ? u2 / i2 : u2 * E(2, 1 - c2)) * i2 >= 2 && (o2++, i2 /= 2), o2 + c2 >= l2 ? (r2 = 0, o2 = l2) : o2 + c2 >= 1 ? (r2 = (t2 * i2 - 1) * E(2, e2), o2 += c2) : (r2 = t2 * E(2, c2 - 1) * E(2, e2), o2 = 0)); e2 >= 8; a2[f2++] = 255 & r2, r2 /= 256, e2 -= 8)
              ;
            for (o2 = o2 << e2 | r2, s2 += e2; s2 > 0; a2[f2++] = 255 & o2, o2 /= 256, s2 -= 8)
              ;
            return a2[--f2] |= 128 * d2, a2;
          }
          function A(t2, e2, n2) {
            var o2, r2 = 8 * n2 - e2 - 1, i2 = (1 << r2) - 1, a2 = i2 >> 1, s2 = r2 - 7, l2 = n2 - 1, c2 = t2[l2--], u2 = 127 & c2;
            for (c2 >>= 7; s2 > 0; u2 = 256 * u2 + t2[l2], l2--, s2 -= 8)
              ;
            for (o2 = u2 & (1 << -s2) - 1, u2 >>= -s2, s2 += e2; s2 > 0; o2 = 256 * o2 + t2[l2], l2--, s2 -= 8)
              ;
            if (0 === u2)
              u2 = 1 - a2;
            else {
              if (u2 === i2)
                return o2 ? NaN : c2 ? -w : w;
              o2 += E(2, e2), u2 -= a2;
            }
            return (c2 ? -1 : 1) * o2 * E(2, u2 - e2);
          }
          function N(t2) {
            return t2[3] << 24 | t2[2] << 16 | t2[1] << 8 | t2[0];
          }
          function L(t2) {
            return [255 & t2];
          }
          function P(t2) {
            return [255 & t2, t2 >> 8 & 255];
          }
          function D(t2) {
            return [255 & t2, t2 >> 8 & 255, t2 >> 16 & 255, t2 >> 24 & 255];
          }
          function j(t2) {
            return R(t2, 52, 8);
          }
          function F(t2) {
            return R(t2, 23, 4);
          }
          function H(t2, e2, n2) {
            v(t2.prototype, e2, { get: function() {
              return this[n2];
            } });
          }
          function U(t2, e2, n2, o2) {
            var r2 = p(+n2);
            if (r2 + e2 > t2[O])
              throw x("Wrong index!");
            var i2 = t2[I]._b, a2 = r2 + t2[M], s2 = i2.slice(a2, a2 + e2);
            return o2 ? s2 : s2.reverse();
          }
          function z(t2, e2, n2, o2, r2, i2) {
            var a2 = p(+n2);
            if (a2 + e2 > t2[O])
              throw x("Wrong index!");
            for (var s2 = t2[I]._b, l2 = a2 + t2[M], c2 = o2(+r2), u2 = 0; u2 < e2; u2++)
              s2[l2 + u2] = c2[i2 ? u2 : e2 - u2 - 1];
          }
          if (a.ABV) {
            if (!c(function() {
              b(1);
            }) || !c(function() {
              new b(-1);
            }) || c(function() {
              return new b(), new b(1.5), new b(NaN), "ArrayBuffer" != b.name;
            })) {
              for (var W, Y = (b = function(t2) {
                return u(this, b), new S(p(t2));
              }).prototype = S.prototype, V = h(S), X = 0; V.length > X; )
                (W = V[X++]) in b || s(b, W, S[W]);
              i || (Y.constructor = b);
            }
            var K = new m(new b(2)), G = m.prototype.setInt8;
            K.setInt8(0, 2147483648), K.setInt8(1, 2147483649), !K.getInt8(0) && K.getInt8(1) || l(m.prototype, { setInt8: function(t2, e2) {
              G.call(this, t2, e2 << 24 >> 24);
            }, setUint8: function(t2, e2) {
              G.call(this, t2, e2 << 24 >> 24);
            } }, true);
          } else
            b = function(t2) {
              u(this, b, "ArrayBuffer");
              var e2 = p(t2);
              this._b = g.call(new Array(e2), 0), this[O] = e2;
            }, m = function(t2, e2, n2) {
              u(this, m, "DataView"), u(t2, b, "DataView");
              var o2 = t2[O], r2 = f(e2);
              if (r2 < 0 || r2 > o2)
                throw x("Wrong offset!");
              if (r2 + (n2 = void 0 === n2 ? o2 - r2 : d(n2)) > o2)
                throw x("Wrong length!");
              this[I] = t2, this[M] = r2, this[O] = n2;
            }, r && (H(b, "byteLength", "_l"), H(m, "buffer", "_b"), H(m, "byteLength", "_l"), H(m, "byteOffset", "_o")), l(m.prototype, { getInt8: function(t2) {
              return U(this, 1, t2)[0] << 24 >> 24;
            }, getUint8: function(t2) {
              return U(this, 1, t2)[0];
            }, getInt16: function(t2) {
              var e2 = U(this, 2, t2, arguments[1]);
              return (e2[1] << 8 | e2[0]) << 16 >> 16;
            }, getUint16: function(t2) {
              var e2 = U(this, 2, t2, arguments[1]);
              return e2[1] << 8 | e2[0];
            }, getInt32: function(t2) {
              return N(U(this, 4, t2, arguments[1]));
            }, getUint32: function(t2) {
              return N(U(this, 4, t2, arguments[1])) >>> 0;
            }, getFloat32: function(t2) {
              return A(U(this, 4, t2, arguments[1]), 23, 4);
            }, getFloat64: function(t2) {
              return A(U(this, 8, t2, arguments[1]), 52, 8);
            }, setInt8: function(t2, e2) {
              z(this, 1, t2, L, e2);
            }, setUint8: function(t2, e2) {
              z(this, 1, t2, L, e2);
            }, setInt16: function(t2, e2) {
              z(this, 2, t2, P, e2, arguments[2]);
            }, setUint16: function(t2, e2) {
              z(this, 2, t2, P, e2, arguments[2]);
            }, setInt32: function(t2, e2) {
              z(this, 4, t2, D, e2, arguments[2]);
            }, setUint32: function(t2, e2) {
              z(this, 4, t2, D, e2, arguments[2]);
            }, setFloat32: function(t2, e2) {
              z(this, 4, t2, F, e2, arguments[2]);
            }, setFloat64: function(t2, e2) {
              z(this, 8, t2, j, e2, arguments[2]);
            } });
          y(b, "ArrayBuffer"), y(m, "DataView"), s(m.prototype, a.VIEW, true), e.ArrayBuffer = b, e.DataView = m;
        }, function(t, e) {
          function n(e2, o) {
            return t.exports = n = Object.setPrototypeOf || function(t2, e3) {
              return t2.__proto__ = e3, t2;
            }, n(e2, o);
          }
          t.exports = n;
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(7)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(8), l = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = l(r2), i2 = l(i2), a = s(a);
            var c = function() {
              function t2() {
                (0, r2.default)(this, t2), this.allListeners = [];
              }
              return (0, i2.default)(t2, [{ key: "on", value: function(t3, e2, n2) {
                var o3 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], r3 = a.generateId("l"), i3 = { id: r3, element: t3, eventType: e2, handler: n2, options: o3 }, s2 = this.findOne(t3, e2, n2);
                if (!s2)
                  return this.allListeners.push(i3), t3.addEventListener(e2, n2, o3), r3;
              } }, { key: "off", value: function(t3, e2, n2, o3) {
                var r3 = this, i3 = this.findAll(t3, e2, n2);
                i3.forEach(function(t4, e3) {
                  var n3 = r3.allListeners.indexOf(i3[e3]);
                  n3 > -1 && (r3.allListeners.splice(n3, 1), t4.element.removeEventListener(t4.eventType, t4.handler, t4.options));
                });
              } }, { key: "offById", value: function(t3) {
                var e2 = this.findById(t3);
                e2 && e2.element.removeEventListener(e2.eventType, e2.handler, e2.options);
              } }, { key: "findOne", value: function(t3, e2, n2) {
                var o3 = this.findAll(t3, e2, n2);
                return o3.length > 0 ? o3[0] : null;
              } }, { key: "findAll", value: function(t3, e2, n2) {
                var o3 = t3 ? this.findByEventTarget(t3) : [];
                return t3 && e2 && n2 ? o3.filter(function(t4) {
                  return t4.eventType === e2 && t4.handler === n2;
                }) : t3 && e2 ? o3.filter(function(t4) {
                  return t4.eventType === e2;
                }) : o3;
              } }, { key: "removeAll", value: function() {
                this.allListeners.map(function(t3) {
                  t3.element.removeEventListener(t3.eventType, t3.handler, t3.options);
                }), this.allListeners = [];
              } }, { key: "destroy", value: function() {
                this.removeAll();
              } }, { key: "findByEventTarget", value: function(t3) {
                return this.allListeners.filter(function(e2) {
                  if (e2.element === t3)
                    return e2;
                });
              } }, { key: "findByType", value: function(t3) {
                return this.allListeners.filter(function(e2) {
                  if (e2.eventType === t3)
                    return e2;
                });
              } }, { key: "findByHandler", value: function(t3) {
                return this.allListeners.filter(function(e2) {
                  if (e2.handler === t3)
                    return e2;
                });
              } }, { key: "findById", value: function(t3) {
                return this.allListeners.find(function(e2) {
                  return e2.id === t3;
                });
              } }]), t2;
            }();
            o2.default = c, c.displayName = "Listeners", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e], void 0 === (i = "function" == typeof (o = function(n2) {
            "use strict";
            Object.defineProperty(n2, "__esModule", { value: true }), n2.default = void 0;
            var o2 = function(t2) {
              var e2 = { get id() {
                return t2.id;
              }, get name() {
                return t2.name;
              }, get config() {
                return t2.config;
              }, get holder() {
                return t2.holder;
              }, get isEmpty() {
                return t2.isEmpty;
              }, get selected() {
                return t2.selected;
              }, set stretched(e3) {
                t2.stretched = e3;
              }, get stretched() {
                return t2.stretched;
              }, call: function(e3, n3) {
                return t2.call(e3, n3);
              }, save: function() {
                return t2.save();
              }, validate: function(e3) {
                return t2.validate(e3);
              }, dispatchChange: function() {
                t2.dispatchChange();
              } };
              Object.setPrototypeOf(this, e2);
            };
            n2.default = o2, t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o = n(376);
          function r(e2, n2, i) {
            return "undefined" != typeof Reflect && Reflect.get ? t.exports = r = Reflect.get : t.exports = r = function(t2, e3, n3) {
              var r2 = o(t2, e3);
              if (r2) {
                var i2 = Object.getOwnPropertyDescriptor(r2, e3);
                return i2.get ? i2.get.call(n3) : i2.value;
              }
            }, r(e2, n2, i || e2);
          }
          t.exports = r;
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(380)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var l = function() {
              function t2() {
                (0, r2.default)(this, t2), this.lib = new a.default();
              }
              return (0, i2.default)(t2, [{ key: "destroy", value: function() {
                this.lib.destroy();
              } }, { key: "show", value: function(t3, e2, n2) {
                this.lib.show(t3, e2, n2);
              } }, { key: "hide", value: function() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.lib.hide(t3);
              } }, { key: "onHover", value: function(t3, e2, n2) {
                this.lib.onHover(t3, e2, n2);
              } }]), t2;
            }();
            o2.default = l, l.displayName = "Tooltip", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(42), n(2), n(3), n(384)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s) {
            "use strict";
            var l = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = l(r2), i2 = l(i2), a = l(a), s = l(s);
            var c = function() {
              function t2() {
                (0, i2.default)(this, t2), this.registeredShortcuts = /* @__PURE__ */ new Map();
              }
              return (0, a.default)(t2, [{ key: "add", value: function(t3) {
                if (this.findShortcut(t3.on, t3.name))
                  throw Error("Shortcut ".concat(t3.name, " is already registered for ").concat(t3.on, ". Please remove it before add a new handler."));
                var e2 = new s.default({ name: t3.name, on: t3.on, callback: t3.handler }), n2 = this.registeredShortcuts.get(t3.on) || [];
                this.registeredShortcuts.set(t3.on, [].concat((0, r2.default)(n2), [e2]));
              } }, { key: "remove", value: function(t3, e2) {
                var n2 = this.findShortcut(t3, e2);
                if (n2) {
                  n2.remove();
                  var o3 = this.registeredShortcuts.get(t3);
                  this.registeredShortcuts.set(t3, o3.filter(function(t4) {
                    return t4 !== n2;
                  }));
                }
              } }, { key: "findShortcut", value: function(t3, e2) {
                return (this.registeredShortcuts.get(t3) || []).find(function(t4) {
                  return t4.name === e2;
                });
              } }]), t2;
            }();
            c.displayName = "Shortcuts";
            var u = new c();
            o2.default = u, t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          t.exports = !n(18) && !n(11)(function() {
            return 7 != Object.defineProperty(n(85)("div"), "a", { get: function() {
              return 7;
            } }).a;
          });
        }, function(t, e, n) {
          var o = n(10), r = n(17), i = n(45), a = n(86), s = n(19).f;
          t.exports = function(t2) {
            var e2 = r.Symbol || (r.Symbol = i ? {} : o.Symbol || {});
            "_" == t2.charAt(0) || t2 in e2 || s(e2, t2, { value: a.f(t2) });
          };
        }, function(t, e, n) {
          var o = n(26), r = n(28), i = n(70)(false), a = n(87)("IE_PROTO");
          t.exports = function(t2, e2) {
            var n2, s = r(t2), l = 0, c = [];
            for (n2 in s)
              n2 != a && o(s, n2) && c.push(n2);
            for (; e2.length > l; )
              o(s, n2 = e2[l++]) && (~i(c, n2) || c.push(n2));
            return c;
          };
        }, function(t, e, n) {
          var o = n(19), r = n(12), i = n(46);
          t.exports = n(18) ? Object.defineProperties : function(t2, e2) {
            r(t2);
            for (var n2, a = i(e2), s = a.length, l = 0; s > l; )
              o.f(t2, n2 = a[l++], e2[n2]);
            return t2;
          };
        }, function(t, e, n) {
          var o = n(28), r = n(49).f, i = {}.toString, a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
          t.exports.f = function(t2) {
            return a && "[object Window]" == i.call(t2) ? function(t3) {
              try {
                return r(t3);
              } catch (t4) {
                return a.slice();
              }
            }(t2) : r(o(t2));
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(18), r = n(46), i = n(71), a = n(64), s = n(22), l = n(63), c = Object.assign;
          t.exports = !c || n(11)(function() {
            var t2 = {}, e2 = {}, n2 = Symbol(), o2 = "abcdefghijklmnopqrst";
            return t2[n2] = 7, o2.split("").forEach(function(t3) {
              e2[t3] = t3;
            }), 7 != c({}, t2)[n2] || Object.keys(c({}, e2)).join("") != o2;
          }) ? function(t2, e2) {
            for (var n2 = s(t2), c2 = arguments.length, u = 1, f = i.f, d = a.f; c2 > u; )
              for (var p, h = l(arguments[u++]), v = f ? r(h).concat(f(h)) : r(h), g = v.length, y = 0; g > y; )
                p = v[y++], o && !d.call(h, p) || (n2[p] = h[p]);
            return n2;
          } : c;
        }, function(t, e) {
          t.exports = Object.is || function(t2, e2) {
            return t2 === e2 ? 0 !== t2 || 1 / t2 == 1 / e2 : t2 != t2 && e2 != e2;
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(32), r = n(13), i = n(124), a = [].slice, s = {}, l = function(t2, e2, n2) {
            if (!(e2 in s)) {
              for (var o2 = [], r2 = 0; r2 < e2; r2++)
                o2[r2] = "a[" + r2 + "]";
              s[e2] = Function("F,a", "return new F(" + o2.join(",") + ")");
            }
            return s[e2](t2, n2);
          };
          t.exports = Function.bind || function(t2) {
            var e2 = o(this), n2 = a.call(arguments, 1), s2 = function() {
              var o2 = n2.concat(a.call(arguments));
              return this instanceof s2 ? l(e2, o2.length, o2) : i(e2, o2, t2);
            };
            return r(e2.prototype) && (s2.prototype = e2.prototype), s2;
          };
        }, function(t, e) {
          t.exports = function(t2, e2, n) {
            var o = void 0 === n;
            switch (e2.length) {
              case 0:
                return o ? t2() : t2.call(n);
              case 1:
                return o ? t2(e2[0]) : t2.call(n, e2[0]);
              case 2:
                return o ? t2(e2[0], e2[1]) : t2.call(n, e2[0], e2[1]);
              case 3:
                return o ? t2(e2[0], e2[1], e2[2]) : t2.call(n, e2[0], e2[1], e2[2]);
              case 4:
                return o ? t2(e2[0], e2[1], e2[2], e2[3]) : t2.call(n, e2[0], e2[1], e2[2], e2[3]);
            }
            return t2.apply(n, e2);
          };
        }, function(t, e, n) {
          var o = n(10).parseInt, r = n(54).trim, i = n(91), a = /^[-+]?0[xX]/;
          t.exports = 8 !== o(i + "08") || 22 !== o(i + "0x16") ? function(t2, e2) {
            var n2 = r(String(t2), 3);
            return o(n2, e2 >>> 0 || (a.test(n2) ? 16 : 10));
          } : o;
        }, function(t, e, n) {
          var o = n(10).parseFloat, r = n(54).trim;
          t.exports = 1 / o(n(91) + "-0") != -1 / 0 ? function(t2) {
            var e2 = r(String(t2), 3), n2 = o(e2);
            return 0 === n2 && "-" == e2.charAt(0) ? -0 : n2;
          } : o;
        }, function(t, e, n) {
          var o = n(37);
          t.exports = function(t2, e2) {
            if ("number" != typeof t2 && "Number" != o(t2))
              throw TypeError(e2);
            return +t2;
          };
        }, function(t, e, n) {
          var o = n(13), r = Math.floor;
          t.exports = function(t2) {
            return !o(t2) && isFinite(t2) && r(t2) === t2;
          };
        }, function(t, e) {
          t.exports = Math.log1p || function(t2) {
            return (t2 = +t2) > -1e-8 && t2 < 1e-8 ? t2 - t2 * t2 / 2 : Math.log(1 + t2);
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(48), r = n(43), i = n(53), a = {};
          n(27)(a, n(15)("iterator"), function() {
            return this;
          }), t.exports = function(t2, e2, n2) {
            t2.prototype = o(a, { next: r(1, n2) }), i(t2, e2 + " Iterator");
          };
        }, function(t, e, n) {
          var o = n(12);
          t.exports = function(t2, e2, n2, r) {
            try {
              return r ? e2(o(n2)[0], n2[1]) : e2(n2);
            } catch (e3) {
              var i = t2.return;
              throw void 0 !== i && o(i.call(t2)), e3;
            }
          };
        }, function(t, e, n) {
          var o = n(282);
          t.exports = function(t2, e2) {
            return new (o(t2))(e2);
          };
        }, function(t, e, n) {
          var o = n(32), r = n(22), i = n(63), a = n(16);
          t.exports = function(t2, e2, n2, s, l) {
            o(e2);
            var c = r(t2), u = i(c), f = a(c.length), d = l ? f - 1 : 0, p = l ? -1 : 1;
            if (n2 < 2)
              for (; ; ) {
                if (d in u) {
                  s = u[d], d += p;
                  break;
                }
                if (d += p, l ? d < 0 : f <= d)
                  throw TypeError("Reduce of empty array with no initial value");
              }
            for (; l ? d >= 0 : f > d; d += p)
              d in u && (s = e2(s, u[d], d, c));
            return s;
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(22), r = n(47), i = n(16);
          t.exports = [].copyWithin || function(t2, e2) {
            var n2 = o(this), a = i(n2.length), s = r(t2, a), l = r(e2, a), c = arguments.length > 2 ? arguments[2] : void 0, u = Math.min((void 0 === c ? a : r(c, a)) - l, a - s), f = 1;
            for (l < s && s < l + u && (f = -1, l += u - 1, s += u - 1); u-- > 0; )
              l in n2 ? n2[s] = n2[l] : delete n2[s], s += f, l += f;
            return n2;
          };
        }, function(t, e) {
          t.exports = function(t2, e2) {
            return { value: e2, done: !!t2 };
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(106);
          n(0)({ target: "RegExp", proto: true, forced: o !== /./.exec }, { exec: o });
        }, function(t, e, n) {
          n(18) && "g" != /./g.flags && n(19).f(RegExp.prototype, "flags", { configurable: true, get: n(74) });
        }, function(t, e, n) {
          "use strict";
          var o, r, i, a, s = n(45), l = n(10), c = n(31), u = n(65), f = n(0), d = n(13), p = n(32), h = n(57), v = n(77), g = n(66), y = n(108).set, b = n(302)(), m = n(139), k = n(303), x = n(78), w = n(140), S = l.TypeError, T = l.process, E = T && T.versions, B = E && E.v8 || "", C = l.Promise, _ = "process" == u(T), I = function() {
          }, O = r = m.f, M = !!function() {
            try {
              var t2 = C.resolve(1), e2 = (t2.constructor = {})[n(15)("species")] = function(t3) {
                t3(I, I);
              };
              return (_ || "function" == typeof PromiseRejectionEvent) && t2.then(I) instanceof e2 && 0 !== B.indexOf("6.6") && -1 === x.indexOf("Chrome/66");
            } catch (t3) {
            }
          }(), R = function(t2) {
            var e2;
            return !(!d(t2) || "function" != typeof (e2 = t2.then)) && e2;
          }, A = function(t2, e2) {
            if (!t2._n) {
              t2._n = true;
              var n2 = t2._c;
              b(function() {
                for (var o2 = t2._v, r2 = 1 == t2._s, i2 = 0, a2 = function(e3) {
                  var n3, i3, a3, s2 = r2 ? e3.ok : e3.fail, l2 = e3.resolve, c2 = e3.reject, u2 = e3.domain;
                  try {
                    s2 ? (r2 || (2 == t2._h && P(t2), t2._h = 1), true === s2 ? n3 = o2 : (u2 && u2.enter(), n3 = s2(o2), u2 && (u2.exit(), a3 = true)), n3 === e3.promise ? c2(S("Promise-chain cycle")) : (i3 = R(n3)) ? i3.call(n3, l2, c2) : l2(n3)) : c2(o2);
                  } catch (t3) {
                    u2 && !a3 && u2.exit(), c2(t3);
                  }
                }; n2.length > i2; )
                  a2(n2[i2++]);
                t2._c = [], t2._n = false, e2 && !t2._h && N(t2);
              });
            }
          }, N = function(t2) {
            y.call(l, function() {
              var e2, n2, o2, r2 = t2._v, i2 = L(t2);
              if (i2 && (e2 = k(function() {
                _ ? T.emit("unhandledRejection", r2, t2) : (n2 = l.onunhandledrejection) ? n2({ promise: t2, reason: r2 }) : (o2 = l.console) && o2.error && o2.error("Unhandled promise rejection", r2);
              }), t2._h = _ || L(t2) ? 2 : 1), t2._a = void 0, i2 && e2.e)
                throw e2.v;
            });
          }, L = function(t2) {
            return 1 !== t2._h && 0 === (t2._a || t2._c).length;
          }, P = function(t2) {
            y.call(l, function() {
              var e2;
              _ ? T.emit("rejectionHandled", t2) : (e2 = l.onrejectionhandled) && e2({ promise: t2, reason: t2._v });
            });
          }, D = function(t2) {
            var e2 = this;
            e2._d || (e2._d = true, (e2 = e2._w || e2)._v = t2, e2._s = 2, e2._a || (e2._a = e2._c.slice()), A(e2, true));
          }, j = function(t2) {
            var e2, n2 = this;
            if (!n2._d) {
              n2._d = true, n2 = n2._w || n2;
              try {
                if (n2 === t2)
                  throw S("Promise can't be resolved itself");
                (e2 = R(t2)) ? b(function() {
                  var o2 = { _w: n2, _d: false };
                  try {
                    e2.call(t2, c(j, o2, 1), c(D, o2, 1));
                  } catch (t3) {
                    D.call(o2, t3);
                  }
                }) : (n2._v = t2, n2._s = 1, A(n2, false));
              } catch (t3) {
                D.call({ _w: n2, _d: false }, t3);
              }
            }
          };
          M || (C = function(t2) {
            h(this, C, "Promise", "_h"), p(t2), o.call(this);
            try {
              t2(c(j, this, 1), c(D, this, 1));
            } catch (t3) {
              D.call(this, t3);
            }
          }, (o = function(t2) {
            this._c = [], this._a = void 0, this._s = 0, this._d = false, this._v = void 0, this._h = 0, this._n = false;
          }).prototype = n(58)(C.prototype, { then: function(t2, e2) {
            var n2 = O(g(this, C));
            return n2.ok = "function" != typeof t2 || t2, n2.fail = "function" == typeof e2 && e2, n2.domain = _ ? T.domain : void 0, this._c.push(n2), this._a && this._a.push(n2), this._s && A(this, false), n2.promise;
          }, catch: function(t2) {
            return this.then(void 0, t2);
          } }), i = function() {
            var t2 = new o();
            this.promise = t2, this.resolve = c(j, t2, 1), this.reject = c(D, t2, 1);
          }, m.f = O = function(t2) {
            return t2 === C || t2 === a ? new i(t2) : r(t2);
          }), f(f.G + f.W + f.F * !M, { Promise: C }), n(53)(C, "Promise"), n(56)("Promise"), a = n(17).Promise, f(f.S + f.F * !M, "Promise", { reject: function(t2) {
            var e2 = O(this);
            return (0, e2.reject)(t2), e2.promise;
          } }), f(f.S + f.F * (s || !M), "Promise", { resolve: function(t2) {
            return w(s && this === a ? C : this, t2);
          } }), f(f.S + f.F * !(M && n(73)(function(t2) {
            C.all(t2).catch(I);
          })), "Promise", { all: function(t2) {
            var e2 = this, n2 = O(e2), o2 = n2.resolve, r2 = n2.reject, i2 = k(function() {
              var n3 = [], i3 = 0, a2 = 1;
              v(t2, false, function(t3) {
                var s2 = i3++, l2 = false;
                n3.push(void 0), a2++, e2.resolve(t3).then(function(t4) {
                  l2 || (l2 = true, n3[s2] = t4, --a2 || o2(n3));
                }, r2);
              }), --a2 || o2(n3);
            });
            return i2.e && r2(i2.v), n2.promise;
          }, race: function(t2) {
            var e2 = this, n2 = O(e2), o2 = n2.reject, r2 = k(function() {
              v(t2, false, function(t3) {
                e2.resolve(t3).then(n2.resolve, o2);
              });
            });
            return r2.e && o2(r2.v), n2.promise;
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(32);
          function r(t2) {
            var e2, n2;
            this.promise = new t2(function(t3, o2) {
              if (void 0 !== e2 || void 0 !== n2)
                throw TypeError("Bad Promise constructor");
              e2 = t3, n2 = o2;
            }), this.resolve = o(e2), this.reject = o(n2);
          }
          t.exports.f = function(t2) {
            return new r(t2);
          };
        }, function(t, e, n) {
          var o = n(12), r = n(13), i = n(139);
          t.exports = function(t2, e2) {
            if (o(t2), r(e2) && e2.constructor === t2)
              return e2;
            var n2 = i.f(t2);
            return (0, n2.resolve)(e2), n2.promise;
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(19).f, r = n(48), i = n(58), a = n(31), s = n(57), l = n(77), c = n(97), u = n(135), f = n(56), d = n(18), p = n(41).fastKey, h = n(52), v = d ? "_s" : "size", g = function(t2, e2) {
            var n2, o2 = p(e2);
            if ("F" !== o2)
              return t2._i[o2];
            for (n2 = t2._f; n2; n2 = n2.n)
              if (n2.k == e2)
                return n2;
          };
          t.exports = { getConstructor: function(t2, e2, n2, c2) {
            var u2 = t2(function(t3, o2) {
              s(t3, u2, e2, "_i"), t3._t = e2, t3._i = r(null), t3._f = void 0, t3._l = void 0, t3[v] = 0, null != o2 && l(o2, n2, t3[c2], t3);
            });
            return i(u2.prototype, { clear: function() {
              for (var t3 = h(this, e2), n3 = t3._i, o2 = t3._f; o2; o2 = o2.n)
                o2.r = true, o2.p && (o2.p = o2.p.n = void 0), delete n3[o2.i];
              t3._f = t3._l = void 0, t3[v] = 0;
            }, delete: function(t3) {
              var n3 = h(this, e2), o2 = g(n3, t3);
              if (o2) {
                var r2 = o2.n, i2 = o2.p;
                delete n3._i[o2.i], o2.r = true, i2 && (i2.n = r2), r2 && (r2.p = i2), n3._f == o2 && (n3._f = r2), n3._l == o2 && (n3._l = i2), n3[v]--;
              }
              return !!o2;
            }, forEach: function(t3) {
              h(this, e2);
              for (var n3, o2 = a(t3, arguments.length > 1 ? arguments[1] : void 0, 3); n3 = n3 ? n3.n : this._f; )
                for (o2(n3.v, n3.k, this); n3 && n3.r; )
                  n3 = n3.p;
            }, has: function(t3) {
              return !!g(h(this, e2), t3);
            } }), d && o(u2.prototype, "size", { get: function() {
              return h(this, e2)[v];
            } }), u2;
          }, def: function(t2, e2, n2) {
            var o2, r2, i2 = g(t2, e2);
            return i2 ? i2.v = n2 : (t2._l = i2 = { i: r2 = p(e2, true), k: e2, v: n2, p: o2 = t2._l, n: void 0, r: false }, t2._f || (t2._f = i2), o2 && (o2.n = i2), t2[v]++, "F" !== r2 && (t2._i[r2] = i2)), t2;
          }, getEntry: g, setStrong: function(t2, e2, n2) {
            c(t2, e2, function(t3, n3) {
              this._t = h(t3, e2), this._k = n3, this._l = void 0;
            }, function() {
              for (var t3 = this._k, e3 = this._l; e3 && e3.r; )
                e3 = e3.p;
              return this._t && (this._l = e3 = e3 ? e3.n : this._t._f) ? u(0, "keys" == t3 ? e3.k : "values" == t3 ? e3.v : [e3.k, e3.v]) : (this._t = void 0, u(1));
            }, n2 ? "entries" : "values", !n2, true), f(e2);
          } };
        }, function(t, e, n) {
          "use strict";
          var o = n(58), r = n(41).getWeak, i = n(12), a = n(13), s = n(57), l = n(77), c = n(36), u = n(26), f = n(52), d = c(5), p = c(6), h = 0, v = function(t2) {
            return t2._l || (t2._l = new g());
          }, g = function() {
            this.a = [];
          }, y = function(t2, e2) {
            return d(t2.a, function(t3) {
              return t3[0] === e2;
            });
          };
          g.prototype = { get: function(t2) {
            var e2 = y(this, t2);
            if (e2)
              return e2[1];
          }, has: function(t2) {
            return !!y(this, t2);
          }, set: function(t2, e2) {
            var n2 = y(this, t2);
            n2 ? n2[1] = e2 : this.a.push([t2, e2]);
          }, delete: function(t2) {
            var e2 = p(this.a, function(e3) {
              return e3[0] === t2;
            });
            return ~e2 && this.a.splice(e2, 1), !!~e2;
          } }, t.exports = { getConstructor: function(t2, e2, n2, i2) {
            var c2 = t2(function(t3, o2) {
              s(t3, c2, e2, "_i"), t3._t = e2, t3._i = h++, t3._l = void 0, null != o2 && l(o2, n2, t3[i2], t3);
            });
            return o(c2.prototype, { delete: function(t3) {
              if (!a(t3))
                return false;
              var n3 = r(t3);
              return true === n3 ? v(f(this, e2)).delete(t3) : n3 && u(n3, this._i) && delete n3[this._i];
            }, has: function(t3) {
              if (!a(t3))
                return false;
              var n3 = r(t3);
              return true === n3 ? v(f(this, e2)).has(t3) : n3 && u(n3, this._i);
            } }), c2;
          }, def: function(t2, e2, n2) {
            var o2 = r(i(e2), true);
            return true === o2 ? v(t2).set(e2, n2) : o2[t2._i] = n2, t2;
          }, ufstore: v };
        }, function(t, e, n) {
          var o = n(33), r = n(16);
          t.exports = function(t2) {
            if (void 0 === t2)
              return 0;
            var e2 = o(t2), n2 = r(e2);
            if (e2 !== n2)
              throw RangeError("Wrong length!");
            return n2;
          };
        }, function(t, e, n) {
          var o = n(49), r = n(71), i = n(12), a = n(10).Reflect;
          t.exports = a && a.ownKeys || function(t2) {
            var e2 = o.f(i(t2)), n2 = r.f;
            return n2 ? e2.concat(n2(t2)) : e2;
          };
        }, function(t, e, n) {
          var o = n(16), r = n(93), i = n(38);
          t.exports = function(t2, e2, n2, a) {
            var s = String(i(t2)), l = s.length, c = void 0 === n2 ? " " : String(n2), u = o(e2);
            if (u <= l || "" == c)
              return s;
            var f = u - l, d = r.call(c, Math.ceil(f / c.length));
            return d.length > f && (d = d.slice(0, f)), a ? d + s : s + d;
          };
        }, function(t, e, n) {
          var o = n(18), r = n(46), i = n(28), a = n(64).f;
          t.exports = function(t2) {
            return function(e2) {
              for (var n2, s = i(e2), l = r(s), c = l.length, u = 0, f = []; c > u; )
                n2 = l[u++], o && !a.call(s, n2) || f.push(t2 ? [n2, s[n2]] : s[n2]);
              return f;
            };
          };
        }, function(t, e, n) {
          var o = function(t2) {
            "use strict";
            var e2 = Object.prototype, n2 = e2.hasOwnProperty, o2 = "function" == typeof Symbol ? Symbol : {}, r = o2.iterator || "@@iterator", i = o2.asyncIterator || "@@asyncIterator", a = o2.toStringTag || "@@toStringTag";
            function s(t3, e3, n3, o3) {
              var r2 = e3 && e3.prototype instanceof u ? e3 : u, i2 = Object.create(r2.prototype), a2 = new w(o3 || []);
              return i2._invoke = function(t4, e4, n4) {
                var o4 = "suspendedStart";
                return function(r3, i3) {
                  if ("executing" === o4)
                    throw new Error("Generator is already running");
                  if ("completed" === o4) {
                    if ("throw" === r3)
                      throw i3;
                    return T();
                  }
                  for (n4.method = r3, n4.arg = i3; ; ) {
                    var a3 = n4.delegate;
                    if (a3) {
                      var s2 = m(a3, n4);
                      if (s2) {
                        if (s2 === c)
                          continue;
                        return s2;
                      }
                    }
                    if ("next" === n4.method)
                      n4.sent = n4._sent = n4.arg;
                    else if ("throw" === n4.method) {
                      if ("suspendedStart" === o4)
                        throw o4 = "completed", n4.arg;
                      n4.dispatchException(n4.arg);
                    } else
                      "return" === n4.method && n4.abrupt("return", n4.arg);
                    o4 = "executing";
                    var u2 = l(t4, e4, n4);
                    if ("normal" === u2.type) {
                      if (o4 = n4.done ? "completed" : "suspendedYield", u2.arg === c)
                        continue;
                      return { value: u2.arg, done: n4.done };
                    }
                    "throw" === u2.type && (o4 = "completed", n4.method = "throw", n4.arg = u2.arg);
                  }
                };
              }(t3, n3, a2), i2;
            }
            function l(t3, e3, n3) {
              try {
                return { type: "normal", arg: t3.call(e3, n3) };
              } catch (t4) {
                return { type: "throw", arg: t4 };
              }
            }
            t2.wrap = s;
            var c = {};
            function u() {
            }
            function f() {
            }
            function d() {
            }
            var p = {};
            p[r] = function() {
              return this;
            };
            var h = Object.getPrototypeOf, v = h && h(h(S([])));
            v && v !== e2 && n2.call(v, r) && (p = v);
            var g = d.prototype = u.prototype = Object.create(p);
            function y(t3) {
              ["next", "throw", "return"].forEach(function(e3) {
                t3[e3] = function(t4) {
                  return this._invoke(e3, t4);
                };
              });
            }
            function b(t3, e3) {
              var o3;
              this._invoke = function(r2, i2) {
                function a2() {
                  return new e3(function(o4, a3) {
                    !function o5(r3, i3, a4, s2) {
                      var c2 = l(t3[r3], t3, i3);
                      if ("throw" !== c2.type) {
                        var u2 = c2.arg, f2 = u2.value;
                        return f2 && "object" == typeof f2 && n2.call(f2, "__await") ? e3.resolve(f2.__await).then(function(t4) {
                          o5("next", t4, a4, s2);
                        }, function(t4) {
                          o5("throw", t4, a4, s2);
                        }) : e3.resolve(f2).then(function(t4) {
                          u2.value = t4, a4(u2);
                        }, function(t4) {
                          return o5("throw", t4, a4, s2);
                        });
                      }
                      s2(c2.arg);
                    }(r2, i2, o4, a3);
                  });
                }
                return o3 = o3 ? o3.then(a2, a2) : a2();
              };
            }
            function m(t3, e3) {
              var n3 = t3.iterator[e3.method];
              if (void 0 === n3) {
                if (e3.delegate = null, "throw" === e3.method) {
                  if (t3.iterator.return && (e3.method = "return", e3.arg = void 0, m(t3, e3), "throw" === e3.method))
                    return c;
                  e3.method = "throw", e3.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return c;
              }
              var o3 = l(n3, t3.iterator, e3.arg);
              if ("throw" === o3.type)
                return e3.method = "throw", e3.arg = o3.arg, e3.delegate = null, c;
              var r2 = o3.arg;
              return r2 ? r2.done ? (e3[t3.resultName] = r2.value, e3.next = t3.nextLoc, "return" !== e3.method && (e3.method = "next", e3.arg = void 0), e3.delegate = null, c) : r2 : (e3.method = "throw", e3.arg = new TypeError("iterator result is not an object"), e3.delegate = null, c);
            }
            function k(t3) {
              var e3 = { tryLoc: t3[0] };
              1 in t3 && (e3.catchLoc = t3[1]), 2 in t3 && (e3.finallyLoc = t3[2], e3.afterLoc = t3[3]), this.tryEntries.push(e3);
            }
            function x(t3) {
              var e3 = t3.completion || {};
              e3.type = "normal", delete e3.arg, t3.completion = e3;
            }
            function w(t3) {
              this.tryEntries = [{ tryLoc: "root" }], t3.forEach(k, this), this.reset(true);
            }
            function S(t3) {
              if (t3) {
                var e3 = t3[r];
                if (e3)
                  return e3.call(t3);
                if ("function" == typeof t3.next)
                  return t3;
                if (!isNaN(t3.length)) {
                  var o3 = -1, i2 = function e4() {
                    for (; ++o3 < t3.length; )
                      if (n2.call(t3, o3))
                        return e4.value = t3[o3], e4.done = false, e4;
                    return e4.value = void 0, e4.done = true, e4;
                  };
                  return i2.next = i2;
                }
              }
              return { next: T };
            }
            function T() {
              return { value: void 0, done: true };
            }
            return f.prototype = g.constructor = d, d.constructor = f, d[a] = f.displayName = "GeneratorFunction", t2.isGeneratorFunction = function(t3) {
              var e3 = "function" == typeof t3 && t3.constructor;
              return !!e3 && (e3 === f || "GeneratorFunction" === (e3.displayName || e3.name));
            }, t2.mark = function(t3) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(t3, d) : (t3.__proto__ = d, a in t3 || (t3[a] = "GeneratorFunction")), t3.prototype = Object.create(g), t3;
            }, t2.awrap = function(t3) {
              return { __await: t3 };
            }, y(b.prototype), b.prototype[i] = function() {
              return this;
            }, t2.AsyncIterator = b, t2.async = function(e3, n3, o3, r2, i2) {
              void 0 === i2 && (i2 = Promise);
              var a2 = new b(s(e3, n3, o3, r2), i2);
              return t2.isGeneratorFunction(n3) ? a2 : a2.next().then(function(t3) {
                return t3.done ? t3.value : a2.next();
              });
            }, y(g), g[a] = "Generator", g[r] = function() {
              return this;
            }, g.toString = function() {
              return "[object Generator]";
            }, t2.keys = function(t3) {
              var e3 = [];
              for (var n3 in t3)
                e3.push(n3);
              return e3.reverse(), function n4() {
                for (; e3.length; ) {
                  var o3 = e3.pop();
                  if (o3 in t3)
                    return n4.value = o3, n4.done = false, n4;
                }
                return n4.done = true, n4;
              };
            }, t2.values = S, w.prototype = { constructor: w, reset: function(t3) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t3)
                for (var e3 in this)
                  "t" === e3.charAt(0) && n2.call(this, e3) && !isNaN(+e3.slice(1)) && (this[e3] = void 0);
            }, stop: function() {
              this.done = true;
              var t3 = this.tryEntries[0].completion;
              if ("throw" === t3.type)
                throw t3.arg;
              return this.rval;
            }, dispatchException: function(t3) {
              if (this.done)
                throw t3;
              var e3 = this;
              function o3(n3, o4) {
                return a2.type = "throw", a2.arg = t3, e3.next = n3, o4 && (e3.method = "next", e3.arg = void 0), !!o4;
              }
              for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
                var i2 = this.tryEntries[r2], a2 = i2.completion;
                if ("root" === i2.tryLoc)
                  return o3("end");
                if (i2.tryLoc <= this.prev) {
                  var s2 = n2.call(i2, "catchLoc"), l2 = n2.call(i2, "finallyLoc");
                  if (s2 && l2) {
                    if (this.prev < i2.catchLoc)
                      return o3(i2.catchLoc, true);
                    if (this.prev < i2.finallyLoc)
                      return o3(i2.finallyLoc);
                  } else if (s2) {
                    if (this.prev < i2.catchLoc)
                      return o3(i2.catchLoc, true);
                  } else {
                    if (!l2)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i2.finallyLoc)
                      return o3(i2.finallyLoc);
                  }
                }
              }
            }, abrupt: function(t3, e3) {
              for (var o3 = this.tryEntries.length - 1; o3 >= 0; --o3) {
                var r2 = this.tryEntries[o3];
                if (r2.tryLoc <= this.prev && n2.call(r2, "finallyLoc") && this.prev < r2.finallyLoc) {
                  var i2 = r2;
                  break;
                }
              }
              i2 && ("break" === t3 || "continue" === t3) && i2.tryLoc <= e3 && e3 <= i2.finallyLoc && (i2 = null);
              var a2 = i2 ? i2.completion : {};
              return a2.type = t3, a2.arg = e3, i2 ? (this.method = "next", this.next = i2.finallyLoc, c) : this.complete(a2);
            }, complete: function(t3, e3) {
              if ("throw" === t3.type)
                throw t3.arg;
              return "break" === t3.type || "continue" === t3.type ? this.next = t3.arg : "return" === t3.type ? (this.rval = this.arg = t3.arg, this.method = "return", this.next = "end") : "normal" === t3.type && e3 && (this.next = e3), c;
            }, finish: function(t3) {
              for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
                var n3 = this.tryEntries[e3];
                if (n3.finallyLoc === t3)
                  return this.complete(n3.completion, n3.afterLoc), x(n3), c;
              }
            }, catch: function(t3) {
              for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
                var n3 = this.tryEntries[e3];
                if (n3.tryLoc === t3) {
                  var o3 = n3.completion;
                  if ("throw" === o3.type) {
                    var r2 = o3.arg;
                    x(n3);
                  }
                  return r2;
                }
              }
              throw new Error("illegal catch attempt");
            }, delegateYield: function(t3, e3, n3) {
              return this.delegate = { iterator: S(t3), resultName: e3, nextLoc: n3 }, "next" === this.method && (this.arg = void 0), c;
            } }, t2;
          }(t.exports);
          try {
            regeneratorRuntime = o;
          } catch (t2) {
            Function("r", "regeneratorRuntime = r")(o);
          }
        }, function(t, e, n) {
          var o = n(149);
          t.exports = function(t2, e2) {
            if (t2) {
              if ("string" == typeof t2)
                return o(t2, e2);
              var n2 = Object.prototype.toString.call(t2).slice(8, -1);
              return "Object" === n2 && t2.constructor && (n2 = t2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(n2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? o(t2, e2) : void 0;
            }
          };
        }, function(t, e) {
          t.exports = function(t2, e2) {
            (null == e2 || e2 > t2.length) && (e2 = t2.length);
            for (var n = 0, o = new Array(e2); n < e2; n++)
              o[n] = t2[n];
            return o;
          };
        }, function(t) {
          t.exports = JSON.parse('{"ui":{"blockTunes":{"toggler":{"Click to tune":"","or drag to move":""}},"inlineToolbar":{"converter":{"Convert to":""}},"toolbar":{"toolbox":{"Add":"","Filter":"","Nothing found":""}}},"toolNames":{"Text":"","Link":"","Bold":"","Italic":""},"tools":{"link":{"Add a link":""},"stub":{"The block can not be displayed correctly.":""}},"blockTunes":{"delete":{"Delete":""},"moveUp":{"Move up":""},"moveDown":{"Move down":""}}}');
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(5), n(6), n(4), n(153)], void 0 === (i = "function" == typeof (o = function(t2, e2, o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            function l() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t3) {
                return false;
              }
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CriticalError = void 0, e2 = s(e2), o2 = s(o2), r2 = s(r2), i2 = s(i2);
            var c = function(t3) {
              (0, o2.default)(s2, t3);
              var n2, a2 = (n2 = s2, function() {
                var t4, e3 = (0, i2.default)(n2);
                if (l()) {
                  var o3 = (0, i2.default)(this).constructor;
                  t4 = Reflect.construct(e3, arguments, o3);
                } else
                  t4 = e3.apply(this, arguments);
                return (0, r2.default)(this, t4);
              });
              function s2() {
                return (0, e2.default)(this, s2), a2.apply(this, arguments);
              }
              return s2;
            }((0, (a = s(a)).default)(Error));
            t2.CriticalError = c, c.displayName = "CriticalError";
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e) {
          t.exports = function(t2) {
            if (void 0 === t2)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t2;
          };
        }, function(t, e, n) {
          var o = n(4), r = n(110), i = n(372), a = n(373);
          function s(e2) {
            var n2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
            return t.exports = s = function(t2) {
              if (null === t2 || !i(t2))
                return t2;
              if ("function" != typeof t2)
                throw new TypeError("Super expression must either be null or a function");
              if (void 0 !== n2) {
                if (n2.has(t2))
                  return n2.get(t2);
                n2.set(t2, e3);
              }
              function e3() {
                return a(t2, arguments, o(this).constructor);
              }
              return e3.prototype = Object.create(t2.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), r(e3, t2);
            }, s(e2);
          }
          t.exports = s;
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(7), n(112), n(9), n(61)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d, p, h) {
            "use strict";
            var v = n(8), g = n(1);
            function y() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = g(r2), i2 = g(i2), a = g(a), s = g(s), l = g(l), c = g(c), u = g(u), f = v(f), d = g(d), p = g(p), h = g(h);
            var b = function(t2) {
              (0, l.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, u.default)(e2);
                if (y()) {
                  var o4 = (0, u.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, c.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, a.default)(this, o3), (t3 = n2.apply(this, arguments)).insert = function() {
                  var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t3.config.defaultBlock, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o4 = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments.length > 3 ? arguments[3] : void 0), r3 = arguments.length > 4 ? arguments[4] : void 0, i3 = arguments.length > 5 ? arguments[5] : void 0, a2 = t3.Editor.BlockManager.insert({ tool: e3, data: n3, index: o4, needToFocus: r3, replace: i3 });
                  return new d.default(a2);
                }, t3.composeBlockData = function() {
                  var e3 = (0, i2.default)(r2.default.mark(function e4(n3) {
                    var o4, i3;
                    return r2.default.wrap(function(e5) {
                      for (; ; )
                        switch (e5.prev = e5.next) {
                          case 0:
                            return o4 = t3.Editor.Tools.blockTools.get(n3), i3 = new h.default({ tool: o4, api: t3.Editor.API, readOnly: true, data: {}, tunesData: {} }), e5.abrupt("return", i3.data);
                          case 3:
                          case "end":
                            return e5.stop();
                        }
                    }, e4);
                  }));
                  return function(t4) {
                    return e3.apply(this, arguments);
                  };
                }(), t3.update = function(e3, n3) {
                  var o4 = t3.Editor.BlockManager, r3 = o4.getBlockById(e3);
                  if (r3) {
                    var i3 = o4.getBlockIndex(r3);
                    o4.insert({ id: r3.id, tool: r3.name, data: n3, index: i3, replace: true, tunes: r3.tunes });
                  } else
                    f.log("blocks.update(): Block with passed id was not found", "warn");
                }, t3;
              }
              return (0, s.default)(o3, [{ key: "getBlocksCount", value: function() {
                return this.Editor.BlockManager.blocks.length;
              } }, { key: "getCurrentBlockIndex", value: function() {
                return this.Editor.BlockManager.currentBlockIndex;
              } }, { key: "getBlockIndex", value: function(t3) {
                var e3 = this.Editor.BlockManager.getBlockById(t3);
                if (e3)
                  return this.Editor.BlockManager.getBlockIndex(e3);
                f.logLabeled("There is no block with id `" + t3 + "`", "warn");
              } }, { key: "getBlockByIndex", value: function(t3) {
                var e3 = this.Editor.BlockManager.getBlockByIndex(t3);
                if (void 0 !== e3)
                  return new d.default(e3);
                f.logLabeled("There is no block at index `" + t3 + "`", "warn");
              } }, { key: "getById", value: function(t3) {
                var e3 = this.Editor.BlockManager.getBlockById(t3);
                return void 0 === e3 ? (f.logLabeled("There is no block with id `" + t3 + "`", "warn"), null) : new d.default(e3);
              } }, { key: "swap", value: function(t3, e3) {
                f.log("`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead", "info"), this.Editor.BlockManager.swap(t3, e3);
              } }, { key: "move", value: function(t3, e3) {
                this.Editor.BlockManager.move(t3, e3);
              } }, { key: "delete", value: function(t3) {
                try {
                  this.Editor.BlockManager.removeBlock(t3);
                } catch (t4) {
                  return void f.logLabeled(t4, "warn");
                }
                0 === this.Editor.BlockManager.blocks.length && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
              } }, { key: "clear", value: function() {
                this.Editor.BlockManager.clear(true), this.Editor.InlineToolbar.close();
              } }, { key: "render", value: function(t3) {
                return this.Editor.BlockManager.clear(), this.Editor.Renderer.render(t3.blocks);
              } }, { key: "renderFromHTML", value: function(t3) {
                return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(t3, true);
              } }, { key: "stretchBlock", value: function(t3) {
                var e3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                f.deprecationAssert(true, "blocks.stretchBlock()", "BlockAPI");
                var n3 = this.Editor.BlockManager.getBlockByIndex(t3);
                n3 && (n3.stretched = e3);
              } }, { key: "insertNewBlock", value: function() {
                f.log("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { clear: function() {
                  return t3.clear();
                }, render: function(e3) {
                  return t3.render(e3);
                }, renderFromHTML: function(e3) {
                  return t3.renderFromHTML(e3);
                }, delete: function(e3) {
                  return t3.delete(e3);
                }, swap: function(e3, n3) {
                  return t3.swap(e3, n3);
                }, move: function(e3, n3) {
                  return t3.move(e3, n3);
                }, getBlockByIndex: function(e3) {
                  return t3.getBlockByIndex(e3);
                }, getById: function(e3) {
                  return t3.getById(e3);
                }, getCurrentBlockIndex: function() {
                  return t3.getCurrentBlockIndex();
                }, getBlockIndex: function(e3) {
                  return t3.getBlockIndex(e3);
                }, getBlocksCount: function() {
                  return t3.getBlocksCount();
                }, stretchBlock: function(e3) {
                  var n3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                  return t3.stretchBlock(e3, n3);
                }, insertNewBlock: function() {
                  return t3.insertNewBlock();
                }, insert: this.insert, update: this.update, composeBlockData: this.composeBlockData };
              } }]), o3;
            }(p.default);
            o2.default = b, b.displayName = "BlocksAPI", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c) {
            "use strict";
            var u = n(1);
            function f() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), l = u(l);
            var d = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (f()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, r2.default)(this, o3), (t3 = n2.apply(this, arguments)).setToFirstBlock = function() {
                  var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t3.Editor.Caret.positions.DEFAULT, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                  return !!t3.Editor.BlockManager.firstBlock && (t3.Editor.Caret.setToBlock(t3.Editor.BlockManager.firstBlock, e3, n3), true);
                }, t3.setToLastBlock = function() {
                  var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t3.Editor.Caret.positions.DEFAULT, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                  return !!t3.Editor.BlockManager.lastBlock && (t3.Editor.Caret.setToBlock(t3.Editor.BlockManager.lastBlock, e3, n3), true);
                }, t3.setToPreviousBlock = function() {
                  var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t3.Editor.Caret.positions.DEFAULT, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                  return !!t3.Editor.BlockManager.previousBlock && (t3.Editor.Caret.setToBlock(t3.Editor.BlockManager.previousBlock, e3, n3), true);
                }, t3.setToNextBlock = function() {
                  var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t3.Editor.Caret.positions.DEFAULT, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                  return !!t3.Editor.BlockManager.nextBlock && (t3.Editor.Caret.setToBlock(t3.Editor.BlockManager.nextBlock, e3, n3), true);
                }, t3.setToBlock = function(e3) {
                  var n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t3.Editor.Caret.positions.DEFAULT, o4 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                  return !!t3.Editor.BlockManager.blocks[e3] && (t3.Editor.Caret.setToBlock(t3.Editor.BlockManager.blocks[e3], n3, o4), true);
                }, t3.focus = function() {
                  var e3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  return e3 ? t3.setToLastBlock(t3.Editor.Caret.positions.END) : t3.setToFirstBlock(t3.Editor.Caret.positions.START);
                }, t3;
              }
              return (0, i2.default)(o3, [{ key: "methods", get: function() {
                return { setToFirstBlock: this.setToFirstBlock, setToLastBlock: this.setToLastBlock, setToPreviousBlock: this.setToPreviousBlock, setToNextBlock: this.setToNextBlock, setToBlock: this.setToBlock, focus: this.focus };
              } }]), o3;
            }((c = u(c)).default);
            o2.default = d, d.displayName = "CaretAPI", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c) {
            "use strict";
            var u = n(1);
            function f() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), l = u(l);
            var d = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (f()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "on", value: function(t3, e3) {
                this.eventsDispatcher.on(t3, e3);
              } }, { key: "emit", value: function(t3, e3) {
                this.eventsDispatcher.emit(t3, e3);
              } }, { key: "off", value: function(t3, e3) {
                this.eventsDispatcher.off(t3, e3);
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { emit: function(e3, n3) {
                  return t3.emit(e3, n3);
                }, off: function(e3, n3) {
                  return t3.off(e3, n3);
                }, on: function(e3, n3) {
                  return t3.on(e3, n3);
                } };
              } }]), o3;
            }((c = u(c)).default);
            o2.default = d, d.displayName = "EventsAPI", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(60), n(7), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f) {
            "use strict";
            var d = n(1);
            function p() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = d(r2), i2 = d(i2), a = d(a), s = d(s), l = d(l), c = d(c);
            var h = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (p()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "getMethodsForTool", value: function(t3) {
                return Object.assign(this.methods, { t: function(e3) {
                  return c.default.t(o3.getNamespace(t3), e3);
                } });
              } }, { key: "methods", get: function() {
                return { t: function() {
                  (0, u.logLabeled)("I18n.t() method can be accessed only from Tools", "warn");
                } };
              } }], [{ key: "getNamespace", value: function(t3) {
                return t3.isTune() ? "blockTunes.".concat(t3.name) : "tools.".concat(t3.name);
              } }]), o3;
            }((f = d(f)).default);
            o2.default = h, h.displayName = "I18nAPI", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c) {
            "use strict";
            var u = n(1);
            function f() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), l = u(l);
            var d = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (f()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "open", value: function() {
                this.Editor.InlineToolbar.tryToShow();
              } }, { key: "close", value: function() {
                this.Editor.InlineToolbar.close();
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { close: function() {
                  return t3.close();
                }, open: function() {
                  return t3.open();
                } };
              } }]), o3;
            }((c = u(c)).default);
            o2.default = d, d.displayName = "InlineToolbarAPI", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c) {
            "use strict";
            var u = n(1);
            function f() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), l = u(l);
            var d = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (f()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "on", value: function(t3, e3, n3, o4) {
                return this.listeners.on(t3, e3, n3, o4);
              } }, { key: "off", value: function(t3, e3, n3, o4) {
                this.listeners.off(t3, e3, n3, o4);
              } }, { key: "offById", value: function(t3) {
                this.listeners.offById(t3);
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { on: function(e3, n3, o4, r3) {
                  return t3.on(e3, n3, o4, r3);
                }, off: function(e3, n3, o4, r3) {
                  return t3.off(e3, n3, o4, r3);
                }, offById: function(e3) {
                  return t3.offById(e3);
                } };
              } }]), o3;
            }((c = u(c)).default);
            o2.default = d, d.displayName = "ListenersAPI", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(377), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u) {
            "use strict";
            var f = n(1);
            function d() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = f(r2), i2 = f(i2), a = f(a), s = f(s), l = f(l), c = f(c);
            var p = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (d()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3(t3) {
                var e3, i3 = t3.config, a2 = t3.eventsDispatcher;
                return (0, r2.default)(this, o3), (e3 = n2.call(this, { config: i3, eventsDispatcher: a2 })).notifier = new c.default(), e3;
              }
              return (0, i2.default)(o3, [{ key: "show", value: function(t3) {
                return this.notifier.show(t3);
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { show: function(e3) {
                  return t3.show(e3);
                } };
              } }]), o3;
            }((u = f(u)).default);
            o2.default = p, p.displayName = "NotifierAPI", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c) {
            "use strict";
            var u = n(1);
            function f() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), l = u(l);
            var d = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (f()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "toggle", value: function(t3) {
                return this.Editor.ReadOnly.toggle(t3);
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { toggle: function(e3) {
                  return t3.toggle(e3);
                }, get isEnabled() {
                  return t3.isEnabled;
                } };
              } }, { key: "isEnabled", get: function() {
                return this.Editor.ReadOnly.isEnabled;
              } }]), o3;
            }((c = u(c)).default);
            o2.default = d, d.displayName = "ReadOnlyAPI", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9), n(67)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u) {
            "use strict";
            var f = n(1);
            function d() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = f(r2), i2 = f(i2), a = f(a), s = f(s), l = f(l);
            var p = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (d()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "clean", value: function(t3, e3) {
                return (0, u.clean)(t3, e3);
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { clean: function(e3, n3) {
                  return t3.clean(e3, n3);
                } };
              } }]), o3;
            }((c = f(c)).default);
            o2.default = p, p.displayName = "SanitizerAPI", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(7), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u) {
            "use strict";
            var f = n(8), d = n(1);
            function p() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = d(r2), i2 = d(i2), a = d(a), s = d(s), l = d(l), c = f(c);
            var h = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (p()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "save", value: function() {
                var t3 = "Editor's content can not be saved in read-only mode";
                return this.Editor.ReadOnly.isEnabled ? (c.logLabeled(t3, "warn"), Promise.reject(new Error(t3))) : this.Editor.Saver.save();
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { save: function() {
                  return t3.save();
                } };
              } }]), o3;
            }((u = d(u)).default);
            o2.default = h, h.displayName = "SaverAPI", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(25), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u) {
            "use strict";
            var f = n(1);
            function d() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = f(r2), i2 = f(i2), a = f(a), s = f(s), l = f(l), c = f(c);
            var p = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (d()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "findParentTag", value: function(t3, e3) {
                return new c.default().findParentTag(t3, e3);
              } }, { key: "expandToTag", value: function(t3) {
                new c.default().expandToTag(t3);
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { findParentTag: function(e3, n3) {
                  return t3.findParentTag(e3, n3);
                }, expandToTag: function(e3) {
                  return t3.expandToTag(e3);
                } };
              } }]), o3;
            }((u = f(u)).default);
            o2.default = p, p.displayName = "SelectionAPI", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c) {
            "use strict";
            var u = n(1);
            function f() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), l = u(l);
            var d = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (f()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "classes", get: function() {
                return { block: "cdx-block", inlineToolButton: "ce-inline-tool", inlineToolButtonActive: "ce-inline-tool--active", input: "cdx-input", loader: "cdx-loader", button: "cdx-button", settingsButton: "cdx-settings-button", settingsButtonActive: "cdx-settings-button--active" };
              } }]), o3;
            }((c = u(c)).default);
            o2.default = d, d.displayName = "StylesAPI", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9), n(7)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u) {
            "use strict";
            var f = n(8), d = n(1);
            function p() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = d(r2), i2 = d(i2), a = d(a), s = d(s), l = d(l), c = d(c), u = f(u);
            var h = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (p()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "open", value: function() {
                this.Editor.Toolbar.moveAndOpen();
              } }, { key: "close", value: function() {
                this.Editor.Toolbar.close();
              } }, { key: "toggleBlockSettings", value: function(t3) {
                -1 !== this.Editor.BlockManager.currentBlockIndex ? (null != t3 ? t3 : !this.Editor.BlockSettings.opened) ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close() : u.logLabeled("Could't toggle the Toolbar because there is no block selected ", "warn");
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { close: function() {
                  return t3.close();
                }, open: function() {
                  return t3.open();
                }, toggleBlockSettings: function(e3) {
                  return t3.toggleBlockSettings(e3);
                } };
              } }]), o3;
            }(c.default);
            o2.default = h, h.displayName = "ToolbarAPI", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9), n(114)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u) {
            "use strict";
            var f = n(1);
            function d() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = f(r2), i2 = f(i2), a = f(a), s = f(s), l = f(l), c = f(c), u = f(u);
            var p = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (d()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3(t3) {
                var e3, i3 = t3.config, a2 = t3.eventsDispatcher;
                return (0, r2.default)(this, o3), (e3 = n2.call(this, { config: i3, eventsDispatcher: a2 })).tooltip = new u.default(), e3;
              }
              return (0, i2.default)(o3, [{ key: "destroy", value: function() {
                this.tooltip.destroy();
              } }, { key: "show", value: function(t3, e3, n3) {
                this.tooltip.show(t3, e3, n3);
              } }, { key: "hide", value: function() {
                this.tooltip.hide();
              } }, { key: "onHover", value: function(t3, e3, n3) {
                this.tooltip.onHover(t3, e3, n3);
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { show: function(e3, n3, o4) {
                  return t3.show(e3, n3, o4);
                }, hide: function() {
                  return t3.hide();
                }, onHover: function(e3, n3, o4) {
                  return t3.onHover(e3, n3, o4);
                } };
              } }]), o3;
            }(c.default);
            o2.default = p, p.displayName = "TooltipAPI", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c) {
            "use strict";
            var u = n(1);
            function f() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), l = u(l);
            var d = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (f()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "methods", get: function() {
                return { nodes: this.editorNodes };
              } }, { key: "editorNodes", get: function() {
                return { wrapper: this.Editor.UI.nodes.wrapper, redactor: this.Editor.UI.nodes.redactor };
              } }]), o3;
            }((c = u(c)).default);
            o2.default = d, d.displayName = "UiAPI", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9), n(7), n(25), n(62)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d) {
            "use strict";
            var p = n(8), h = n(1);
            function v() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = h(r2), i2 = h(i2), a = h(a), s = h(s), l = h(l), c = h(c), u = p(u), f = h(f), d = h(d);
            var g = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (v()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "keydown", value: function(t3) {
                switch (this.beforeKeydownProcessing(t3), t3.keyCode) {
                  case u.keyCodes.BACKSPACE:
                    this.backspace(t3);
                    break;
                  case u.keyCodes.ENTER:
                    this.enter(t3);
                    break;
                  case u.keyCodes.DOWN:
                  case u.keyCodes.RIGHT:
                    this.arrowRightAndDown(t3);
                    break;
                  case u.keyCodes.UP:
                  case u.keyCodes.LEFT:
                    this.arrowLeftAndUp(t3);
                    break;
                  case u.keyCodes.TAB:
                    this.tabPressed(t3);
                }
              } }, { key: "beforeKeydownProcessing", value: function(t3) {
                this.needToolbarClosing(t3) && u.isPrintableKey(t3.keyCode) && (this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close(), t3.ctrlKey || t3.metaKey || t3.altKey || t3.shiftKey || (this.Editor.BlockManager.clearFocused(), this.Editor.BlockSelection.clearSelection(t3)));
              } }, { key: "keyup", value: function(t3) {
                t3.shiftKey || this.Editor.UI.checkEmptiness();
              } }, { key: "tabPressed", value: function(t3) {
                this.Editor.BlockSelection.clearSelection(t3);
                var e3 = this.Editor, n3 = e3.BlockManager, o4 = e3.InlineToolbar, r3 = e3.ConversionToolbar, i3 = n3.currentBlock;
                if (i3) {
                  var a2 = i3.isEmpty, s2 = i3.tool.isDefault && a2, l2 = !a2 && r3.opened, c2 = !a2 && !f.default.isCollapsed && o4.opened;
                  s2 ? this.activateToolbox() : l2 || c2 || this.activateBlockSettings();
                }
              } }, { key: "dragOver", value: function(t3) {
                this.Editor.BlockManager.getBlockByChildNode(t3.target).dropTarget = true;
              } }, { key: "dragLeave", value: function(t3) {
                this.Editor.BlockManager.getBlockByChildNode(t3.target).dropTarget = false;
              } }, { key: "handleCommandC", value: function(t3) {
                var e3 = this.Editor.BlockSelection;
                e3.anyBlockSelected && e3.copySelectedBlocks(t3);
              } }, { key: "handleCommandX", value: function(t3) {
                var e3 = this.Editor, n3 = e3.BlockSelection, o4 = e3.BlockManager, r3 = e3.Caret;
                n3.anyBlockSelected && n3.copySelectedBlocks(t3).then(function() {
                  var e4 = o4.removeSelectedBlocks(), i3 = o4.insertDefaultBlockAtIndex(e4, true);
                  r3.setToBlock(i3, r3.positions.START), n3.clearSelection(t3);
                });
              } }, { key: "enter", value: function(t3) {
                var e3 = this.Editor, n3 = e3.BlockManager, o4 = e3.UI;
                if (!n3.currentBlock.tool.isLineBreaksEnabled && !(o4.someToolbarOpened && o4.someFlipperButtonFocused || t3.shiftKey)) {
                  var r3 = this.Editor.BlockManager.currentBlock;
                  this.Editor.Caret.isAtStart && !this.Editor.BlockManager.currentBlock.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : r3 = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(r3), this.Editor.Toolbar.moveAndOpen(r3), t3.preventDefault();
                }
              } }, { key: "backspace", value: function(t3) {
                var e3 = this.Editor, n3 = e3.BlockManager, o4 = e3.BlockSelection, r3 = e3.Caret, i3 = n3.currentBlock, a2 = i3.tool;
                if (i3.selected || i3.isEmpty && i3.currentInput === i3.firstInput) {
                  t3.preventDefault();
                  var s2 = n3.currentBlockIndex;
                  return n3.previousBlock && 0 === n3.previousBlock.inputs.length ? n3.removeBlock(s2 - 1) : n3.removeBlock(), r3.setToBlock(n3.currentBlock, s2 ? r3.positions.END : r3.positions.START), this.Editor.Toolbar.close(), void o4.clearSelection(t3);
                }
                if (!a2.isLineBreaksEnabled || r3.isAtStart) {
                  var l2 = 0 === n3.currentBlockIndex;
                  r3.isAtStart && f.default.isCollapsed && i3.currentInput === i3.firstInput && !l2 && (t3.preventDefault(), this.mergeBlocks());
                }
              } }, { key: "mergeBlocks", value: function() {
                var t3 = this.Editor, e3 = t3.BlockManager, n3 = t3.Caret, o4 = t3.Toolbar, r3 = e3.previousBlock, i3 = e3.currentBlock;
                if (i3.name !== r3.name || !r3.mergeable)
                  return 0 === r3.inputs.length || r3.isEmpty ? (e3.removeBlock(e3.currentBlockIndex - 1), n3.setToBlock(e3.currentBlock), void o4.close()) : void (n3.navigatePrevious() && o4.close());
                n3.createShadow(r3.pluginsContent), e3.mergeBlocks(r3, i3).then(function() {
                  n3.restoreCaret(r3.pluginsContent), r3.pluginsContent.normalize(), o4.close();
                });
              } }, { key: "arrowRightAndDown", value: function(t3) {
                var e3 = this, n3 = d.default.usedKeys.includes(t3.keyCode) && (!t3.shiftKey || t3.keyCode === u.keyCodes.TAB);
                if (!this.Editor.UI.someToolbarOpened || !n3) {
                  this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
                  var o4 = this.Editor.Caret.isAtEnd || this.Editor.BlockSelection.anyBlockSelected;
                  t3.shiftKey && t3.keyCode === u.keyCodes.DOWN && o4 ? this.Editor.CrossBlockSelection.toggleBlockSelectedState() : ((t3.keyCode === u.keyCodes.DOWN || t3.keyCode === u.keyCodes.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) ? t3.preventDefault() : u.delay(function() {
                    e3.Editor.BlockManager.currentBlock && e3.Editor.BlockManager.currentBlock.updateCurrentInput();
                  }, 20)(), this.Editor.BlockSelection.clearSelection(t3));
                }
              } }, { key: "arrowLeftAndUp", value: function(t3) {
                var e3 = this;
                if (this.Editor.UI.someToolbarOpened) {
                  if (d.default.usedKeys.includes(t3.keyCode) && (!t3.shiftKey || t3.keyCode === u.keyCodes.TAB))
                    return;
                  this.Editor.UI.closeAllToolbars();
                }
                this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
                var n3 = this.Editor.Caret.isAtStart || this.Editor.BlockSelection.anyBlockSelected;
                t3.shiftKey && t3.keyCode === u.keyCodes.UP && n3 ? this.Editor.CrossBlockSelection.toggleBlockSelectedState(false) : ((t3.keyCode === u.keyCodes.UP || t3.keyCode === u.keyCodes.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) ? t3.preventDefault() : u.delay(function() {
                  e3.Editor.BlockManager.currentBlock && e3.Editor.BlockManager.currentBlock.updateCurrentInput();
                }, 20)(), this.Editor.BlockSelection.clearSelection(t3));
              } }, { key: "needToolbarClosing", value: function(t3) {
                var e3 = t3.keyCode === u.keyCodes.ENTER && this.Editor.Toolbar.toolbox.opened, n3 = t3.keyCode === u.keyCodes.ENTER && this.Editor.BlockSettings.opened, o4 = t3.keyCode === u.keyCodes.ENTER && this.Editor.InlineToolbar.opened, r3 = t3.keyCode === u.keyCodes.ENTER && this.Editor.ConversionToolbar.opened, i3 = t3.keyCode === u.keyCodes.TAB;
                return !(t3.shiftKey || i3 || e3 || n3 || o4 || r3);
              } }, { key: "activateToolbox", value: function() {
                this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
              } }, { key: "activateBlockSettings", value: function() {
                this.Editor.Toolbar.opened || (this.Editor.BlockManager.currentBlock.focused = true, this.Editor.Toolbar.moveAndOpen()), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
              } }]), o3;
            }(c.default);
            o2.default = g, g.displayName = "BlockEvents", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(61), n(9), n(14), n(7), n(382), n(112), n(383)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d, p, h, v, g, y) {
            "use strict";
            var b = n(8), m = n(1);
            function k() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = m(r2), i2 = m(i2), a = m(a), s = m(s), l = m(l), c = m(c), u = m(u), f = b(f), d = m(d), p = m(p), h = b(h), v = m(v), g = m(g);
            var x = function(t2) {
              (0, l.default)(b2, t2);
              var e2, n2, o3, d2 = (e2 = b2, function() {
                var t3, n3 = (0, u.default)(e2);
                if (k()) {
                  var o4 = (0, u.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, c.default)(this, t3);
              });
              function b2() {
                var t3;
                return (0, a.default)(this, b2), (t3 = d2.apply(this, arguments))._currentBlockIndex = -1, t3._blocks = null, t3;
              }
              return (0, s.default)(b2, [{ key: "prepare", value: function() {
                var t3 = this, e3 = new v.default(this.Editor.UI.nodes.redactor);
                this._blocks = new Proxy(e3, { set: v.default.set, get: v.default.get }), this.listeners.on(document, "copy", function(e4) {
                  return t3.Editor.BlockEvents.handleCommandC(e4);
                });
              } }, { key: "toggleReadOnly", value: function(t3) {
                t3 ? this.disableModuleBindings() : this.enableModuleBindings();
              } }, { key: "composeBlock", value: function(t3) {
                var e3 = t3.tool, n3 = t3.data, o4 = void 0 === n3 ? {} : n3, r3 = t3.id, i3 = void 0 === r3 ? void 0 : r3, a2 = t3.tunes, s2 = void 0 === a2 ? {} : a2, l2 = this.Editor.ReadOnly.isEnabled, c2 = this.Editor.Tools.blockTools.get(e3), u2 = new f.default({ id: i3, data: o4, tool: c2, api: this.Editor.API, readOnly: l2, tunesData: s2 });
                return l2 || this.bindBlockEvents(u2), u2;
              } }, { key: "insert", value: function() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e3 = t3.id, n3 = void 0 === e3 ? void 0 : e3, o4 = t3.tool, r3 = void 0 === o4 ? this.config.defaultBlock : o4, i3 = t3.data, a2 = void 0 === i3 ? {} : i3, s2 = t3.index, l2 = t3.needToFocus, c2 = void 0 === l2 || l2, u2 = t3.replace, f2 = void 0 !== u2 && u2, d3 = t3.tunes, p2 = void 0 === d3 ? {} : d3, h2 = s2;
                void 0 === h2 && (h2 = this.currentBlockIndex + (f2 ? 0 : 1));
                var v2 = this.composeBlock({ id: n3, tool: r3, data: a2, tunes: p2 });
                return f2 && this.blockDidMutated(y.BlockMutationType.Removed, this.getBlockByIndex(h2), { index: h2 }), this._blocks.insert(h2, v2, f2), this.blockDidMutated(y.BlockMutationType.Added, v2, { index: h2 }), c2 ? this.currentBlockIndex = h2 : h2 <= this.currentBlockIndex && this.currentBlockIndex++, v2;
              } }, { key: "replace", value: function(t3) {
                var e3 = t3.tool, n3 = void 0 === e3 ? this.config.defaultBlock : e3, o4 = t3.data, r3 = void 0 === o4 ? {} : o4;
                return this.insert({ tool: n3, data: r3, index: this.currentBlockIndex, replace: true });
              } }, { key: "paste", value: function(t3, e3) {
                var n3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o4 = this.insert({ tool: t3, replace: n3 });
                try {
                  o4.call(f.BlockToolAPI.ON_PASTE, e3);
                } catch (e4) {
                  h.log("".concat(t3, ": onPaste callback call is failed"), "error", e4);
                }
                return o4;
              } }, { key: "insertDefaultBlockAtIndex", value: function(t3) {
                var e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n3 = this.composeBlock({ tool: this.config.defaultBlock });
                return this._blocks[t3] = n3, this.blockDidMutated(y.BlockMutationType.Added, n3, { index: t3 }), e3 ? this.currentBlockIndex = t3 : t3 <= this.currentBlockIndex && this.currentBlockIndex++, n3;
              } }, { key: "insertAtEnd", value: function() {
                return this.currentBlockIndex = this.blocks.length - 1, this.insert();
              } }, { key: "mergeBlocks", value: (o3 = (0, i2.default)(r2.default.mark(function t3(e3, n3) {
                var o4, i3;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        if (o4 = this._blocks.indexOf(n3), !n3.isEmpty) {
                          t4.next = 3;
                          break;
                        }
                        return t4.abrupt("return");
                      case 3:
                        return t4.next = 5, n3.data;
                      case 5:
                        if (i3 = t4.sent, h.isEmpty(i3)) {
                          t4.next = 9;
                          break;
                        }
                        return t4.next = 9, e3.mergeWith(i3);
                      case 9:
                        this.removeBlock(o4), this.currentBlockIndex = this._blocks.indexOf(e3);
                      case 11:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3, e3) {
                return o3.apply(this, arguments);
              }) }, { key: "removeBlock", value: function() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentBlockIndex;
                if (!this.validateIndex(t3))
                  throw new Error("Can't find a Block to remove");
                var e3 = this._blocks[t3];
                e3.destroy(), this._blocks.remove(t3), this.blockDidMutated(y.BlockMutationType.Removed, e3, { index: t3 }), this.currentBlockIndex >= t3 && this.currentBlockIndex--, this.blocks.length ? 0 === t3 && (this.currentBlockIndex = 0) : (this.currentBlockIndex = -1, this.insert());
              } }, { key: "removeSelectedBlocks", value: function() {
                for (var t3, e3 = this.blocks.length - 1; e3 >= 0; e3--)
                  this.blocks[e3].selected && (this.removeBlock(e3), t3 = e3);
                return t3;
              } }, { key: "removeAllBlocks", value: function() {
                for (var t3 = this.blocks.length - 1; t3 >= 0; t3--)
                  this._blocks.remove(t3);
                this.currentBlockIndex = -1, this.insert(), this.currentBlock.firstInput.focus();
              } }, { key: "split", value: function() {
                var t3 = this.Editor.Caret.extractFragmentFromCaretPosition(), e3 = p.default.make("div");
                e3.appendChild(t3);
                var n3 = { text: p.default.isEmpty(e3) ? "" : e3.innerHTML };
                return this.insert({ data: n3 });
              } }, { key: "getBlockByIndex", value: function(t3) {
                return -1 === t3 && (t3 = this._blocks.length - 1), this._blocks[t3];
              } }, { key: "getBlockIndex", value: function(t3) {
                return this._blocks.indexOf(t3);
              } }, { key: "getBlockById", value: function(t3) {
                return this._blocks.array.find(function(e3) {
                  return e3.id === t3;
                });
              } }, { key: "getBlock", value: function(t3) {
                p.default.isElement(t3) || (t3 = t3.parentNode);
                var e3 = this._blocks.nodes, n3 = t3.closest(".".concat(f.default.CSS.wrapper)), o4 = e3.indexOf(n3);
                if (o4 >= 0)
                  return this._blocks[o4];
              } }, { key: "highlightCurrentNode", value: function() {
                this.clearFocused(), this.currentBlock.focused = true;
              } }, { key: "clearFocused", value: function() {
                this.blocks.forEach(function(t3) {
                  t3.focused = false;
                });
              } }, { key: "setCurrentBlockByChildNode", value: function(t3) {
                p.default.isElement(t3) || (t3 = t3.parentNode);
                var e3 = t3.closest(".".concat(f.default.CSS.wrapper));
                if (e3) {
                  var n3 = e3.closest(".".concat(this.Editor.UI.CSS.editorWrapper));
                  if (null == n3 ? void 0 : n3.isEqualNode(this.Editor.UI.nodes.wrapper))
                    return this.currentBlockIndex = this._blocks.nodes.indexOf(e3), this.currentBlock.updateCurrentInput(), this.currentBlock;
                }
              } }, { key: "getBlockByChildNode", value: function(t3) {
                p.default.isElement(t3) || (t3 = t3.parentNode);
                var e3 = t3.closest(".".concat(f.default.CSS.wrapper));
                return this.blocks.find(function(t4) {
                  return t4.holder === e3;
                });
              } }, { key: "swap", value: function(t3, e3) {
                this._blocks.swap(t3, e3), this.currentBlockIndex = e3;
              } }, { key: "move", value: function(t3) {
                var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.currentBlockIndex;
                isNaN(t3) || isNaN(e3) ? h.log("Warning during 'move' call: incorrect indices provided.", "warn") : this.validateIndex(t3) && this.validateIndex(e3) ? (this._blocks.move(t3, e3), this.currentBlockIndex = t3, this.blockDidMutated(y.BlockMutationType.Moved, this.currentBlock, { fromIndex: e3, toIndex: t3 })) : h.log("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
              } }, { key: "dropPointer", value: function() {
                this.currentBlockIndex = -1, this.clearFocused();
              } }, { key: "clear", value: function() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this._blocks.removeAll(), this.dropPointer(), t3 && this.insert(), this.Editor.UI.checkEmptiness();
              } }, { key: "destroy", value: (n2 = (0, i2.default)(r2.default.mark(function t3() {
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return t4.next = 2, Promise.all(this.blocks.map(function(t5) {
                          return t5.destroy();
                        }));
                      case 2:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function() {
                return n2.apply(this, arguments);
              }) }, { key: "bindBlockEvents", value: function(t3) {
                var e3 = this, n3 = this.Editor.BlockEvents;
                this.readOnlyMutableListeners.on(t3.holder, "keydown", function(t4) {
                  n3.keydown(t4);
                }), this.readOnlyMutableListeners.on(t3.holder, "keyup", function(t4) {
                  n3.keyup(t4);
                }), this.readOnlyMutableListeners.on(t3.holder, "dragover", function(t4) {
                  n3.dragOver(t4);
                }), this.readOnlyMutableListeners.on(t3.holder, "dragleave", function(t4) {
                  n3.dragLeave(t4);
                }), t3.on("didMutated", function(t4) {
                  return e3.blockDidMutated(y.BlockMutationType.Changed, t4, { index: e3.getBlockIndex(t4) });
                });
              } }, { key: "disableModuleBindings", value: function() {
                this.readOnlyMutableListeners.clearAll();
              } }, { key: "enableModuleBindings", value: function() {
                var t3 = this;
                this.readOnlyMutableListeners.on(document, "cut", function(e3) {
                  return t3.Editor.BlockEvents.handleCommandX(e3);
                }), this.blocks.forEach(function(e3) {
                  t3.bindBlockEvents(e3);
                });
              } }, { key: "validateIndex", value: function(t3) {
                return !(t3 < 0 || t3 >= this._blocks.length);
              } }, { key: "blockDidMutated", value: function(t3, e3) {
                var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o4 = new CustomEvent(t3, { detail: Object.assign({ target: new g.default(e3) }, n3) });
                return this.Editor.ModificationsObserver.onChange(o4), e3;
              } }, { key: "currentBlockIndex", get: function() {
                return this._currentBlockIndex;
              }, set: function(t3) {
                this._blocks[this._currentBlockIndex] && this._blocks[this._currentBlockIndex].willUnselect(), this._blocks[t3] && this._blocks[t3].willSelect(), this._currentBlockIndex = t3;
              } }, { key: "firstBlock", get: function() {
                return this._blocks[0];
              } }, { key: "lastBlock", get: function() {
                return this._blocks[this._blocks.length - 1];
              } }, { key: "currentBlock", get: function() {
                return this._blocks[this.currentBlockIndex];
              }, set: function(t3) {
                this.currentBlockIndex = this.getBlockIndex(t3);
              } }, { key: "nextBlock", get: function() {
                return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
              } }, { key: "nextContentfulBlock", get: function() {
                return this.blocks.slice(this.currentBlockIndex + 1).find(function(t3) {
                  return !!t3.inputs.length;
                });
              } }, { key: "previousContentfulBlock", get: function() {
                return this.blocks.slice(0, this.currentBlockIndex).reverse().find(function(t3) {
                  return !!t3.inputs.length;
                });
              } }, { key: "previousBlock", get: function() {
                return 0 === this.currentBlockIndex ? null : this._blocks[this.currentBlockIndex - 1];
              } }, { key: "blocks", get: function() {
                return this._blocks.array;
              } }, { key: "isEditorEmpty", get: function() {
                return this.blocks.every(function(t3) {
                  return t3.isEmpty;
                });
              } }]), b2;
            }(d.default);
            o2.default = x, x.displayName = "BlockManager", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9), n(7), n(14), n(115), n(25), n(67)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d, p, h) {
            "use strict";
            var v = n(8), g = n(1);
            function y() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = g(r2), i2 = g(i2), a = g(a), s = g(s), l = g(l), c = g(c), u = v(u), f = g(f), d = g(d), p = g(p);
            var b = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (y()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, r2.default)(this, o3), (t3 = n2.apply(this, arguments)).anyBlockSelectedCache = null, t3.needToSelectAll = false, t3.nativeInputSelected = false, t3.readyToBlockSelection = false, t3;
              }
              return (0, i2.default)(o3, [{ key: "prepare", value: function() {
                var t3 = this;
                this.selection = new p.default(), d.default.add({ name: "CMD+A", handler: function(e3) {
                  var n3 = t3.Editor, o4 = n3.BlockManager;
                  if (n3.ReadOnly.isEnabled)
                    return e3.preventDefault(), void t3.selectAllBlocks();
                  o4.currentBlock && t3.handleCommandA(e3);
                }, on: this.Editor.UI.nodes.redactor });
              } }, { key: "toggleReadOnly", value: function(t3) {
                p.default.get().removeAllRanges(), this.allBlocksSelected = false;
              } }, { key: "unSelectBlockByIndex", value: function(t3) {
                var e3 = this.Editor.BlockManager;
                (isNaN(t3) ? e3.currentBlock : e3.getBlockByIndex(t3)).selected = false, this.clearCache();
              } }, { key: "clearSelection", value: function(t3) {
                var e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n3 = this.Editor, o4 = n3.BlockManager, r3 = n3.Caret, i3 = n3.RectangleSelection;
                this.needToSelectAll = false, this.nativeInputSelected = false, this.readyToBlockSelection = false;
                var a2 = t3 && t3 instanceof KeyboardEvent, s2 = a2 && u.isPrintableKey(t3.keyCode);
                if (this.anyBlockSelected && a2 && s2 && !p.default.isSelectionExists) {
                  var l2 = o4.removeSelectedBlocks();
                  o4.insertDefaultBlockAtIndex(l2, true), r3.setToBlock(o4.currentBlock), u.delay(function() {
                    var e4 = t3.key;
                    r3.insertContentAtCaretPosition(e4.length > 1 ? "" : e4);
                  }, 20)();
                }
                this.Editor.CrossBlockSelection.clear(t3), this.anyBlockSelected && !i3.isRectActivated() ? (e3 && this.selection.restore(), this.allBlocksSelected = false) : this.Editor.RectangleSelection.clearSelection();
              } }, { key: "copySelectedBlocks", value: function(t3) {
                var e3 = this;
                t3.preventDefault();
                var n3 = f.default.make("div");
                this.selectedBlocks.forEach(function(t4) {
                  var o5 = (0, h.clean)(t4.holder.innerHTML, e3.sanitizerConfig), r4 = f.default.make("p");
                  r4.innerHTML = o5, n3.appendChild(r4);
                });
                var o4 = Array.from(n3.childNodes).map(function(t4) {
                  return t4.textContent;
                }).join("\n\n"), r3 = n3.innerHTML;
                return t3.clipboardData.setData("text/plain", o4), t3.clipboardData.setData("text/html", r3), Promise.all(this.selectedBlocks.map(function(t4) {
                  return t4.save();
                })).then(function(n4) {
                  try {
                    t3.clipboardData.setData(e3.Editor.Paste.MIME_TYPE, JSON.stringify(n4));
                  } catch (t4) {
                  }
                });
              } }, { key: "selectBlockByIndex", value: function(t3) {
                var e3, n3 = this.Editor.BlockManager;
                n3.clearFocused(), e3 = isNaN(t3) ? n3.currentBlock : n3.getBlockByIndex(t3), this.selection.save(), p.default.get().removeAllRanges(), e3.selected = true, this.clearCache(), this.Editor.InlineToolbar.close();
              } }, { key: "clearCache", value: function() {
                this.anyBlockSelectedCache = null;
              } }, { key: "destroy", value: function() {
                d.default.remove(this.Editor.UI.nodes.redactor, "CMD+A");
              } }, { key: "handleCommandA", value: function(t3) {
                if (this.Editor.RectangleSelection.clearSelection(), !f.default.isNativeInput(t3.target) || this.readyToBlockSelection) {
                  var e3 = this.Editor.BlockManager.getBlock(t3.target).inputs;
                  e3.length > 1 && !this.readyToBlockSelection ? this.readyToBlockSelection = true : 1 !== e3.length || this.needToSelectAll ? this.needToSelectAll ? (t3.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = false, this.readyToBlockSelection = false, this.Editor.ConversionToolbar.close()) : this.readyToBlockSelection && (t3.preventDefault(), this.selectBlockByIndex(), this.needToSelectAll = true) : this.needToSelectAll = true;
                } else
                  this.readyToBlockSelection = true;
              } }, { key: "selectAllBlocks", value: function() {
                this.selection.save(), p.default.get().removeAllRanges(), this.allBlocksSelected = true, this.Editor.InlineToolbar.close();
              } }, { key: "sanitizerConfig", get: function() {
                return { p: {}, h1: {}, h2: {}, h3: {}, h4: {}, h5: {}, h6: {}, ol: {}, ul: {}, li: {}, br: true, img: { src: true, width: true, height: true }, a: { href: true }, b: {}, i: {}, u: {} };
              } }, { key: "allBlocksSelected", get: function() {
                return this.Editor.BlockManager.blocks.every(function(t3) {
                  return true === t3.selected;
                });
              }, set: function(t3) {
                this.Editor.BlockManager.blocks.forEach(function(e3) {
                  e3.selected = t3;
                }), this.clearCache();
              } }, { key: "anyBlockSelected", get: function() {
                var t3 = this.Editor.BlockManager;
                return null === this.anyBlockSelectedCache && (this.anyBlockSelectedCache = t3.blocks.some(function(t4) {
                  return true === t4.selected;
                })), this.anyBlockSelectedCache;
              } }, { key: "selectedBlocks", get: function() {
                return this.Editor.BlockManager.blocks.filter(function(t3) {
                  return t3.selected;
                });
              } }]), o3;
            }(c.default);
            o2.default = b, b.displayName = "BlockSelection", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(25), n(9), n(14), n(7)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d) {
            "use strict";
            var p = n(8), h = n(1);
            function v() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = h(r2), i2 = h(i2), a = h(a), s = h(s), l = h(l), c = h(c), u = h(u), f = h(f), d = p(d);
            var g = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (v()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "setToBlock", value: function(t3) {
                var e3, n3 = this, o4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT, r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, i3 = this.Editor.BlockManager;
                switch (o4) {
                  case this.positions.START:
                    e3 = t3.firstInput;
                    break;
                  case this.positions.END:
                    e3 = t3.lastInput;
                    break;
                  default:
                    e3 = t3.currentInput;
                }
                if (e3) {
                  var a2 = f.default.getDeepestNode(e3, o4 === this.positions.END), s2 = f.default.getContentLength(a2);
                  switch (true) {
                    case o4 === this.positions.START:
                      r3 = 0;
                      break;
                    case o4 === this.positions.END:
                    case r3 > s2:
                      r3 = s2;
                  }
                  d.delay(function() {
                    n3.set(a2, r3);
                  }, 20)(), i3.setCurrentBlockByChildNode(t3.holder), i3.currentBlock.currentInput = e3;
                }
              } }, { key: "setToInput", value: function(t3) {
                var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT, n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o4 = this.Editor.BlockManager.currentBlock, r3 = f.default.getDeepestNode(t3);
                switch (e3) {
                  case this.positions.START:
                    this.set(r3, 0);
                    break;
                  case this.positions.END:
                    this.set(r3, f.default.getContentLength(r3));
                    break;
                  default:
                    n3 && this.set(r3, n3);
                }
                o4.currentInput = t3;
              } }, { key: "set", value: function(t3) {
                var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n3 = c.default.setCursor(t3, e3), o4 = n3.top, r3 = n3.bottom, i3 = window, a2 = i3.innerHeight;
                o4 < 0 && window.scrollBy(0, o4), r3 > a2 && window.scrollBy(0, r3 - a2);
              } }, { key: "setToTheLastBlock", value: function() {
                var t3 = this.Editor.BlockManager.lastBlock;
                if (t3)
                  if (t3.tool.isDefault && t3.isEmpty)
                    this.setToBlock(t3);
                  else {
                    var e3 = this.Editor.BlockManager.insertAtEnd();
                    this.setToBlock(e3);
                  }
              } }, { key: "extractFragmentFromCaretPosition", value: function() {
                var t3 = c.default.get();
                if (t3.rangeCount) {
                  var e3 = t3.getRangeAt(0), n3 = this.Editor.BlockManager.currentBlock.currentInput;
                  if (e3.deleteContents(), n3) {
                    if (f.default.isNativeInput(n3)) {
                      var o4 = n3, r3 = document.createDocumentFragment(), i3 = o4.value.substring(0, o4.selectionStart), a2 = o4.value.substring(o4.selectionStart);
                      return r3.textContent = a2, o4.value = i3, r3;
                    }
                    var s2 = e3.cloneRange();
                    return s2.selectNodeContents(n3), s2.setStart(e3.endContainer, e3.endOffset), s2.extractContents();
                  }
                }
              } }, { key: "navigateNext", value: function() {
                var t3 = this.Editor.BlockManager, e3 = t3.currentBlock, n3 = t3.nextContentfulBlock, o4 = e3.nextInput, r3 = this.isAtEnd, i3 = n3;
                if (!i3 && !o4) {
                  if (e3.tool.isDefault || !r3)
                    return false;
                  i3 = t3.insertAtEnd();
                }
                return !!r3 && (o4 ? this.setToInput(o4, this.positions.START) : this.setToBlock(i3, this.positions.START), true);
              } }, { key: "navigatePrevious", value: function() {
                var t3 = this.Editor.BlockManager, e3 = t3.currentBlock, n3 = t3.previousContentfulBlock;
                if (!e3)
                  return false;
                var o4 = e3.previousInput;
                return !(!n3 && !o4 || !this.isAtStart || (o4 ? this.setToInput(o4, this.positions.END) : this.setToBlock(n3, this.positions.END), 0));
              } }, { key: "createShadow", value: function(t3) {
                var e3 = document.createElement("span");
                e3.classList.add(o3.CSS.shadowCaret), t3.insertAdjacentElement("beforeend", e3);
              } }, { key: "restoreCaret", value: function(t3) {
                var e3 = t3.querySelector(".".concat(o3.CSS.shadowCaret));
                e3 && (new c.default().expandToTag(e3), setTimeout(function() {
                  var t4 = document.createRange();
                  t4.selectNode(e3), t4.extractContents();
                }, 50));
              } }, { key: "insertContentAtCaretPosition", value: function(t3) {
                var e3 = document.createDocumentFragment(), n3 = document.createElement("div"), o4 = c.default.get(), r3 = c.default.range;
                n3.innerHTML = t3, Array.from(n3.childNodes).forEach(function(t4) {
                  return e3.appendChild(t4);
                }), 0 === e3.childNodes.length && e3.appendChild(new Text());
                var i3 = e3.lastChild;
                r3.deleteContents(), r3.insertNode(e3);
                var a2 = document.createRange();
                a2.setStart(i3, i3.textContent.length), o4.removeAllRanges(), o4.addRange(a2);
              } }, { key: "getHigherLevelSiblings", value: function(t3, e3) {
                for (var n3 = t3, o4 = []; n3.parentNode && "true" !== n3.parentNode.contentEditable; )
                  n3 = n3.parentNode;
                for (var r3 = "left" === e3 ? "previousSibling" : "nextSibling"; n3[r3]; )
                  n3 = n3[r3], o4.push(n3);
                return o4;
              } }, { key: "positions", get: function() {
                return { START: "start", END: "end", DEFAULT: "default" };
              } }, { key: "isAtStart", get: function() {
                var t3 = c.default.get(), e3 = f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput), n3 = t3.focusNode;
                if (f.default.isNativeInput(e3))
                  return 0 === e3.selectionEnd;
                if (!t3.anchorNode)
                  return false;
                var o4 = n3.textContent.search(/\S/);
                -1 === o4 && (o4 = 0);
                var r3 = t3.focusOffset;
                return n3.nodeType !== Node.TEXT_NODE && n3.childNodes.length && (n3.childNodes[r3] ? (n3 = n3.childNodes[r3], r3 = 0) : r3 = (n3 = n3.childNodes[r3 - 1]).textContent.length), !(!f.default.isLineBreakTag(e3) && !f.default.isEmpty(e3) || !this.getHigherLevelSiblings(n3, "left").every(function(t4) {
                  var e4 = f.default.isLineBreakTag(t4), n4 = 1 === t4.children.length && f.default.isLineBreakTag(t4.children[0]), o5 = e4 || n4;
                  return f.default.isEmpty(t4) && !o5;
                }) || r3 !== o4) || (null === e3 || n3 === e3 && r3 <= o4);
              } }, { key: "isAtEnd", get: function() {
                var t3 = c.default.get(), e3 = t3.focusNode, n3 = f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput, true);
                if (f.default.isNativeInput(n3))
                  return n3.selectionEnd === n3.value.length;
                if (!t3.focusNode)
                  return false;
                var o4 = t3.focusOffset;
                if (e3.nodeType !== Node.TEXT_NODE && e3.childNodes.length && (e3.childNodes[o4 - 1] ? o4 = (e3 = e3.childNodes[o4 - 1]).textContent.length : (e3 = e3.childNodes[0], o4 = 0)), f.default.isLineBreakTag(n3) || f.default.isEmpty(n3)) {
                  var r3 = this.getHigherLevelSiblings(e3, "right");
                  if (r3.every(function(t4, e4) {
                    return e4 === r3.length - 1 && f.default.isLineBreakTag(t4) || f.default.isEmpty(t4) && !f.default.isLineBreakTag(t4);
                  }) && o4 === e3.textContent.length)
                    return true;
                }
                var i3 = n3.textContent.replace(/\s+$/, "");
                return e3 === n3 && o4 >= i3.length;
              } }], [{ key: "CSS", get: function() {
                return { shadowCaret: "cdx-shadow-caret" };
              } }]), o3;
            }(u.default);
            o2.default = g, g.displayName = "Caret", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(9), n(25), n(7)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d, p) {
            "use strict";
            var h = n(8), v = n(1);
            function g() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = v(r2), i2 = v(i2), a = v(a), s = v(s), l = v(l), c = v(c), u = v(u), f = v(f), d = v(d), p = h(p);
            var y = function(t2) {
              (0, l.default)(f2, t2);
              var e2, n2, o3 = (e2 = f2, function() {
                var t3, n3 = (0, u.default)(e2);
                if (g()) {
                  var o4 = (0, u.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, c.default)(this, t3);
              });
              function f2() {
                var t3;
                return (0, a.default)(this, f2), (t3 = o3.apply(this, arguments)).onMouseUp = function() {
                  t3.listeners.off(document, "mouseover", t3.onMouseOver), t3.listeners.off(document, "mouseup", t3.onMouseUp);
                }, t3.onMouseOver = function(e3) {
                  var n3 = t3.Editor, o4 = n3.BlockManager, r3 = n3.BlockSelection, i3 = o4.getBlockByChildNode(e3.relatedTarget) || t3.lastSelectedBlock, a2 = o4.getBlockByChildNode(e3.target);
                  if (i3 && a2 && a2 !== i3) {
                    if (i3 === t3.firstSelectedBlock)
                      return d.default.get().removeAllRanges(), i3.selected = true, a2.selected = true, void r3.clearCache();
                    if (a2 === t3.firstSelectedBlock)
                      return i3.selected = false, a2.selected = false, void r3.clearCache();
                    t3.Editor.InlineToolbar.close(), t3.toggleBlocksSelectedState(i3, a2), t3.lastSelectedBlock = a2;
                  }
                }, t3;
              }
              return (0, s.default)(f2, [{ key: "prepare", value: (n2 = (0, i2.default)(r2.default.mark(function t3() {
                var e3 = this;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        this.listeners.on(document, "mousedown", function(t5) {
                          e3.enableCrossBlockSelection(t5);
                        });
                      case 1:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function() {
                return n2.apply(this, arguments);
              }) }, { key: "watchSelection", value: function(t3) {
                if (t3.button === p.mouseButtons.LEFT) {
                  var e3 = this.Editor.BlockManager;
                  this.firstSelectedBlock = e3.getBlock(t3.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
                }
              } }, { key: "toggleBlockSelectedState", value: function() {
                var t3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e3 = this.Editor, n3 = e3.BlockManager, o4 = e3.BlockSelection;
                this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = n3.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = true, o4.clearCache(), d.default.get().removeAllRanges());
                var r3 = n3.blocks.indexOf(this.lastSelectedBlock) + (t3 ? 1 : -1), i3 = n3.blocks[r3];
                i3 && (this.lastSelectedBlock.selected !== i3.selected ? (i3.selected = true, o4.clearCache()) : (this.lastSelectedBlock.selected = false, o4.clearCache()), this.lastSelectedBlock = i3, this.Editor.InlineToolbar.close(), i3.holder.scrollIntoView({ block: "nearest" }));
              } }, { key: "clear", value: function(t3) {
                var e3 = this.Editor, n3 = e3.BlockManager, o4 = e3.BlockSelection, r3 = e3.Caret, i3 = n3.blocks.indexOf(this.firstSelectedBlock), a2 = n3.blocks.indexOf(this.lastSelectedBlock);
                if (o4.anyBlockSelected && i3 > -1 && a2 > -1)
                  if (t3 && t3 instanceof KeyboardEvent)
                    switch (t3.keyCode) {
                      case p.keyCodes.DOWN:
                      case p.keyCodes.RIGHT:
                        r3.setToBlock(n3.blocks[Math.max(i3, a2)], r3.positions.END);
                        break;
                      case p.keyCodes.UP:
                      case p.keyCodes.LEFT:
                        r3.setToBlock(n3.blocks[Math.min(i3, a2)], r3.positions.START);
                        break;
                      default:
                        r3.setToBlock(n3.blocks[Math.max(i3, a2)], r3.positions.END);
                    }
                  else
                    r3.setToBlock(n3.blocks[Math.max(i3, a2)], r3.positions.END);
                this.firstSelectedBlock = this.lastSelectedBlock = null;
              } }, { key: "enableCrossBlockSelection", value: function(t3) {
                var e3 = this.Editor.UI;
                d.default.isCollapsed || this.Editor.BlockSelection.clearSelection(t3), e3.nodes.redactor.contains(t3.target) ? this.watchSelection(t3) : this.Editor.BlockSelection.clearSelection(t3);
              } }, { key: "toggleBlocksSelectedState", value: function(t3, e3) {
                for (var n3 = this.Editor, o4 = n3.BlockManager, r3 = n3.BlockSelection, i3 = o4.blocks.indexOf(t3), a2 = o4.blocks.indexOf(e3), s2 = t3.selected !== e3.selected, l2 = Math.min(i3, a2); l2 <= Math.max(i3, a2); l2++) {
                  var c2 = o4.blocks[l2];
                  c2 !== this.firstSelectedBlock && c2 !== (s2 ? t3 : e3) && (o4.blocks[l2].selected = !o4.blocks[l2].selected, r3.clearCache());
                }
              } }, { key: "isCrossBlockSelectionStarted", get: function() {
                return !!this.firstSelectedBlock && !!this.lastSelectedBlock;
              } }]), f2;
            }(f.default);
            o2.default = y, y.displayName = "CrossBlockSelection", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(25), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d) {
            "use strict";
            var p = n(1);
            function h() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = p(r2), i2 = p(i2), a = p(a), s = p(s), l = p(l), c = p(c), u = p(u), f = p(f);
            var v = function(t2) {
              (0, l.default)(d2, t2);
              var e2, n2, o3 = (e2 = d2, function() {
                var t3, n3 = (0, u.default)(e2);
                if (h()) {
                  var o4 = (0, u.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, c.default)(this, t3);
              });
              function d2() {
                var t3;
                return (0, a.default)(this, d2), (t3 = o3.apply(this, arguments)).isStartedAtEditor = false, t3;
              }
              return (0, s.default)(d2, [{ key: "toggleReadOnly", value: function(t3) {
                t3 ? this.disableModuleBindings() : this.enableModuleBindings();
              } }, { key: "enableModuleBindings", value: function() {
                var t3 = this, e3 = this.Editor.UI;
                this.readOnlyMutableListeners.on(e3.nodes.holder, "drop", function() {
                  var e4 = (0, i2.default)(r2.default.mark(function e5(n3) {
                    return r2.default.wrap(function(e6) {
                      for (; ; )
                        switch (e6.prev = e6.next) {
                          case 0:
                            return e6.next = 2, t3.processDrop(n3);
                          case 2:
                          case "end":
                            return e6.stop();
                        }
                    }, e5);
                  }));
                  return function(t4) {
                    return e4.apply(this, arguments);
                  };
                }(), true), this.readOnlyMutableListeners.on(e3.nodes.holder, "dragstart", function() {
                  t3.processDragStart();
                }), this.readOnlyMutableListeners.on(e3.nodes.holder, "dragover", function(e4) {
                  t3.processDragOver(e4);
                }, true);
              } }, { key: "disableModuleBindings", value: function() {
                this.readOnlyMutableListeners.clearAll();
              } }, { key: "processDrop", value: (n2 = (0, i2.default)(r2.default.mark(function t3(e3) {
                var n3, o4, i3, a2, s2, l2;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return n3 = this.Editor, o4 = n3.BlockManager, i3 = n3.Caret, a2 = n3.Paste, e3.preventDefault(), o4.blocks.forEach(function(t5) {
                          t5.dropTarget = false;
                        }), f.default.isAtEditor && !f.default.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = false, (s2 = o4.setCurrentBlockByChildNode(e3.target)) ? this.Editor.Caret.setToBlock(s2, i3.positions.END) : (l2 = o4.setCurrentBlockByChildNode(o4.lastBlock.holder), this.Editor.Caret.setToBlock(l2, i3.positions.END)), t4.next = 9, a2.processDataTransfer(e3.dataTransfer, true);
                      case 9:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3) {
                return n2.apply(this, arguments);
              }) }, { key: "processDragStart", value: function() {
                f.default.isAtEditor && !f.default.isCollapsed && (this.isStartedAtEditor = true), this.Editor.InlineToolbar.close();
              } }, { key: "processDragOver", value: function(t3) {
                t3.preventDefault();
              } }]), d2;
            }((d = p(d)).default);
            o2.default = v, v.displayName = "DragNDrop", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9), n(7)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u) {
            "use strict";
            var f = n(8), d = n(1);
            function p() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = d(r2), i2 = d(i2), a = d(a), s = d(s), l = d(l), c = d(c), u = f(u);
            var h = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (p()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, r2.default)(this, o3), (t3 = n2.apply(this, arguments)).disabled = false, t3;
              }
              return (0, i2.default)(o3, [{ key: "enable", value: function() {
                this.disabled = false;
              } }, { key: "disable", value: function() {
                this.disabled = true;
              } }, { key: "onChange", value: function(t3) {
                !this.disabled && u.isFunction(this.config.onChange) && this.config.onChange(this.Editor.API.methods, t3);
              } }]), o3;
            }(c.default);
            o2.default = h, h.displayName = "ModificationsObserver", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(42), n(30), n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(9), n(14), n(7), n(67)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d, p, h, v, g) {
            "use strict";
            var y = n(8), b = n(1);
            function m() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = b(r2), i2 = b(i2), a = b(a), s = b(s), l = b(l), c = b(c), u = b(u), f = b(f), d = b(d), p = b(p), h = b(h), v = y(v);
            var k = function(t2) {
              (0, u.default)(T, t2);
              var e2, n2, o3, p2, y2, b2, k2, x, w, S = (e2 = T, function() {
                var t3, n3 = (0, d.default)(e2);
                if (m()) {
                  var o4 = (0, d.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, f.default)(this, t3);
              });
              function T() {
                var t3;
                return (0, l.default)(this, T), (t3 = S.apply(this, arguments)).MIME_TYPE = "application/x-editor-js", t3.toolsTags = {}, t3.tagsByTool = {}, t3.toolsPatterns = [], t3.toolsFiles = {}, t3.exceptionList = [], t3.processTool = function(e3) {
                  try {
                    var n3 = e3.create({}, {}, false);
                    if (false === e3.pasteConfig)
                      return void t3.exceptionList.push(e3.name);
                    if (!v.isFunction(n3.onPaste))
                      return;
                    t3.getTagsConfig(e3), t3.getFilesConfig(e3), t3.getPatternsConfig(e3);
                  } catch (t4) {
                    v.log("Paste handling for \xAB".concat(e3.name, "\xBB Tool hasn't been set up because of the error"), "warn", t4);
                  }
                }, t3.handlePasteEvent = function() {
                  var e3 = (0, s.default)(a.default.mark(function e4(n3) {
                    var o4, r3, i3;
                    return a.default.wrap(function(e5) {
                      for (; ; )
                        switch (e5.prev = e5.next) {
                          case 0:
                            if (o4 = t3.Editor, r3 = o4.BlockManager, i3 = o4.Toolbar, r3.currentBlock && (!t3.isNativeBehaviour(n3.target) || n3.clipboardData.types.includes("Files"))) {
                              e5.next = 3;
                              break;
                            }
                            return e5.abrupt("return");
                          case 3:
                            if (!r3.currentBlock || !t3.exceptionList.includes(r3.currentBlock.name)) {
                              e5.next = 5;
                              break;
                            }
                            return e5.abrupt("return");
                          case 5:
                            n3.preventDefault(), t3.processDataTransfer(n3.clipboardData), r3.clearFocused(), i3.close();
                          case 9:
                          case "end":
                            return e5.stop();
                        }
                    }, e4);
                  }));
                  return function(t4) {
                    return e3.apply(this, arguments);
                  };
                }(), t3;
              }
              return (0, c.default)(T, [{ key: "prepare", value: (w = (0, s.default)(a.default.mark(function t3() {
                return a.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        this.processTools();
                      case 1:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function() {
                return w.apply(this, arguments);
              }) }, { key: "toggleReadOnly", value: function(t3) {
                t3 ? this.unsetCallback() : this.setCallback();
              } }, { key: "processDataTransfer", value: (x = (0, s.default)(a.default.mark(function t3(e3) {
                var n3, o4, r3, i3, s2, l2, c2, u2, f2, d2 = arguments;
                return a.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        if (n3 = d2.length > 1 && void 0 !== d2[1] && d2[1], o4 = this.Editor.Tools, !((r3 = e3.types).includes ? r3.includes("Files") : r3.contains("Files"))) {
                          t4.next = 8;
                          break;
                        }
                        return t4.next = 7, this.processFiles(e3.files);
                      case 7:
                        return t4.abrupt("return");
                      case 8:
                        if (i3 = e3.getData(this.MIME_TYPE), s2 = e3.getData("text/plain"), l2 = e3.getData("text/html"), !i3) {
                          t4.next = 19;
                          break;
                        }
                        return t4.prev = 12, this.insertEditorJSData(JSON.parse(i3)), t4.abrupt("return");
                      case 17:
                        t4.prev = 17, t4.t0 = t4.catch(12);
                      case 19:
                        if (n3 && s2.trim() && l2.trim() && (l2 = "<p>" + (l2.trim() ? l2 : s2) + "</p>"), c2 = Object.keys(this.toolsTags).reduce(function(t5, e4) {
                          return t5[e4.toLowerCase()] = true, t5;
                        }, {}), u2 = Object.assign({}, c2, o4.getAllInlineToolsSanitizeConfig(), { br: {} }), (f2 = (0, g.clean)(l2, u2)).trim() && f2.trim() !== s2 && h.default.isHTMLString(f2)) {
                          t4.next = 28;
                          break;
                        }
                        return t4.next = 26, this.processText(s2);
                      case 26:
                        t4.next = 30;
                        break;
                      case 28:
                        return t4.next = 30, this.processText(f2, true);
                      case 30:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this, [[12, 17]]);
              })), function(t3) {
                return x.apply(this, arguments);
              }) }, { key: "processText", value: (k2 = (0, s.default)(a.default.mark(function t3(e3) {
                var n3, o4, r3, i3, l2, c2, u2, f2 = this, d2 = arguments;
                return a.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        if (n3 = d2.length > 1 && void 0 !== d2[1] && d2[1], o4 = this.Editor, r3 = o4.Caret, i3 = o4.BlockManager, (l2 = n3 ? this.processHTML(e3) : this.processPlain(e3)).length) {
                          t4.next = 5;
                          break;
                        }
                        return t4.abrupt("return");
                      case 5:
                        if (1 !== l2.length) {
                          t4.next = 8;
                          break;
                        }
                        return l2[0].isBlock ? this.processSingleBlock(l2.pop()) : this.processInlinePaste(l2.pop()), t4.abrupt("return");
                      case 8:
                        c2 = i3.currentBlock && i3.currentBlock.tool.isDefault, u2 = c2 && i3.currentBlock.isEmpty, l2.map(function() {
                          var t5 = (0, s.default)(a.default.mark(function t6(e4, n4) {
                            return a.default.wrap(function(t7) {
                              for (; ; )
                                switch (t7.prev = t7.next) {
                                  case 0:
                                    return t7.abrupt("return", f2.insertBlock(e4, 0 === n4 && u2));
                                  case 1:
                                  case "end":
                                    return t7.stop();
                                }
                            }, t6);
                          }));
                          return function(e4, n4) {
                            return t5.apply(this, arguments);
                          };
                        }()), i3.currentBlock && r3.setToBlock(i3.currentBlock, r3.positions.END);
                      case 12:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3) {
                return k2.apply(this, arguments);
              }) }, { key: "setCallback", value: function() {
                this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
              } }, { key: "unsetCallback", value: function() {
                this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
              } }, { key: "processTools", value: function() {
                var t3 = this.Editor.Tools.blockTools;
                Array.from(t3.values()).forEach(this.processTool);
              } }, { key: "getTagsConfig", value: function(t3) {
                var e3 = this, n3 = t3.pasteConfig.tags || [];
                n3.forEach(function(n4) {
                  Object.prototype.hasOwnProperty.call(e3.toolsTags, n4) ? v.log("Paste handler for \xAB".concat(t3.name, "\xBB Tool on \xAB").concat(n4, "\xBB tag is skipped ") + "because it is already used by \xAB".concat(e3.toolsTags[n4].tool.name, "\xBB Tool."), "warn") : e3.toolsTags[n4.toUpperCase()] = { tool: t3 };
                }), this.tagsByTool[t3.name] = n3.map(function(t4) {
                  return t4.toUpperCase();
                });
              } }, { key: "getFilesConfig", value: function(t3) {
                var e3 = t3.pasteConfig.files, n3 = void 0 === e3 ? {} : e3, o4 = n3.extensions, r3 = n3.mimeTypes;
                (o4 || r3) && (o4 && !Array.isArray(o4) && (v.log("\xABextensions\xBB property of the onDrop config for \xAB".concat(t3.name, "\xBB Tool should be an array")), o4 = []), r3 && !Array.isArray(r3) && (v.log("\xABmimeTypes\xBB property of the onDrop config for \xAB".concat(t3.name, "\xBB Tool should be an array")), r3 = []), r3 && (r3 = r3.filter(function(e4) {
                  return !!v.isValidMimeType(e4) || (v.log("MIME type value \xAB".concat(e4, "\xBB for the \xAB").concat(t3.name, "\xBB Tool is not a valid MIME type"), "warn"), false);
                })), this.toolsFiles[t3.name] = { extensions: o4 || [], mimeTypes: r3 || [] });
              } }, { key: "getPatternsConfig", value: function(t3) {
                var e3 = this;
                t3.pasteConfig.patterns && !v.isEmpty(t3.pasteConfig.patterns) && Object.entries(t3.pasteConfig.patterns).forEach(function(n3) {
                  var o4 = (0, i2.default)(n3, 2), r3 = o4[0], a2 = o4[1];
                  a2 instanceof RegExp || v.log("Pattern ".concat(a2, " for \xAB").concat(t3.name, "\xBB Tool is skipped because it should be a Regexp instance."), "warn"), e3.toolsPatterns.push({ key: r3, pattern: a2, tool: t3 });
                });
              } }, { key: "isNativeBehaviour", value: function(t3) {
                return h.default.isNativeInput(t3);
              } }, { key: "processFiles", value: (b2 = (0, s.default)(a.default.mark(function t3(e3) {
                var n3, o4, r3, i3, s2 = this;
                return a.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return n3 = this.Editor.BlockManager, t4.next = 3, Promise.all(Array.from(e3).map(function(t5) {
                          return s2.processFile(t5);
                        }));
                      case 3:
                        o4 = (o4 = t4.sent).filter(function(t5) {
                          return !!t5;
                        }), r3 = n3.currentBlock.tool.isDefault, i3 = r3 && n3.currentBlock.isEmpty, o4.forEach(function(t5, e4) {
                          n3.paste(t5.type, t5.event, 0 === e4 && i3);
                        });
                      case 8:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3) {
                return b2.apply(this, arguments);
              }) }, { key: "processFile", value: (y2 = (0, s.default)(a.default.mark(function t3(e3) {
                var n3, o4, r3, s2, l2;
                return a.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        if (n3 = v.getFileExtension(e3), o4 = Object.entries(this.toolsFiles).find(function(t5) {
                          var o5 = (0, i2.default)(t5, 2), r4 = (o5[0], o5[1]), a2 = r4.mimeTypes, s3 = r4.extensions, l3 = e3.type.split("/"), c2 = (0, i2.default)(l3, 2), u2 = c2[0], f2 = c2[1], d2 = s3.find(function(t6) {
                            return t6.toLowerCase() === n3.toLowerCase();
                          }), p3 = a2.find(function(t6) {
                            var e4 = t6.split("/"), n4 = (0, i2.default)(e4, 2), o6 = n4[0], r5 = n4[1];
                            return o6 === u2 && (r5 === f2 || "*" === r5);
                          });
                          return !!d2 || !!p3;
                        })) {
                          t4.next = 4;
                          break;
                        }
                        return t4.abrupt("return");
                      case 4:
                        return r3 = (0, i2.default)(o4, 1), s2 = r3[0], l2 = this.composePasteEvent("file", { file: e3 }), t4.abrupt("return", { event: l2, type: s2 });
                      case 7:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3) {
                return y2.apply(this, arguments);
              }) }, { key: "processHTML", value: function(t3) {
                var e3 = this, n3 = this.Editor.Tools, o4 = h.default.make("DIV");
                return o4.innerHTML = t3, this.getNodes(o4).map(function(t4) {
                  var o5, r3 = n3.defaultTool, i3 = false;
                  switch (t4.nodeType) {
                    case Node.DOCUMENT_FRAGMENT_NODE:
                      (o5 = h.default.make("div")).appendChild(t4);
                      break;
                    case Node.ELEMENT_NODE:
                      o5 = t4, i3 = true, e3.toolsTags[o5.tagName] && (r3 = e3.toolsTags[o5.tagName].tool);
                  }
                  var a2 = r3.pasteConfig.tags.reduce(function(t5, e4) {
                    return t5[e4.toLowerCase()] = {}, t5;
                  }, {}), s2 = Object.assign({}, a2, r3.baseSanitizeConfig);
                  o5.innerHTML = (0, g.clean)(o5.innerHTML, s2);
                  var l2 = e3.composePasteEvent("tag", { data: o5 });
                  return { content: o5, isBlock: i3, tool: r3.name, event: l2 };
                }).filter(function(t4) {
                  return !h.default.isNodeEmpty(t4.content) || h.default.isSingleTag(t4.content);
                });
              } }, { key: "processPlain", value: function(t3) {
                var e3 = this, n3 = this.config.defaultBlock;
                if (!t3)
                  return [];
                var o4 = n3;
                return t3.split(/\r?\n/).filter(function(t4) {
                  return t4.trim();
                }).map(function(t4) {
                  var n4 = h.default.make("div");
                  n4.textContent = t4;
                  var r3 = e3.composePasteEvent("tag", { data: n4 });
                  return { content: n4, tool: o4, isBlock: false, event: r3 };
                });
              } }, { key: "processSingleBlock", value: (p2 = (0, s.default)(a.default.mark(function t3(e3) {
                var n3, o4, r3, i3;
                return a.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        if (n3 = this.Editor, o4 = n3.Caret, r3 = n3.BlockManager, (i3 = r3.currentBlock) && e3.tool === i3.name && h.default.containsOnlyInlineElements(e3.content.innerHTML)) {
                          t4.next = 5;
                          break;
                        }
                        return this.insertBlock(e3, (null == i3 ? void 0 : i3.tool.isDefault) && i3.isEmpty), t4.abrupt("return");
                      case 5:
                        o4.insertContentAtCaretPosition(e3.content.innerHTML);
                      case 6:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3) {
                return p2.apply(this, arguments);
              }) }, { key: "processInlinePaste", value: (o3 = (0, s.default)(a.default.mark(function t3(e3) {
                var n3, o4, r3, i3, s2, l2, c2, u2;
                return a.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        if (n3 = this.Editor, o4 = n3.BlockManager, r3 = n3.Caret, i3 = e3.content, !(o4.currentBlock && o4.currentBlock.tool.isDefault && i3.textContent.length < T.PATTERN_PROCESSING_MAX_LENGTH)) {
                          t4.next = 12;
                          break;
                        }
                        return t4.next = 6, this.processPattern(i3.textContent);
                      case 6:
                        if (!(s2 = t4.sent)) {
                          t4.next = 12;
                          break;
                        }
                        return l2 = o4.currentBlock && o4.currentBlock.tool.isDefault && o4.currentBlock.isEmpty, c2 = o4.paste(s2.tool, s2.event, l2), r3.setToBlock(c2, r3.positions.END), t4.abrupt("return");
                      case 12:
                        o4.currentBlock && o4.currentBlock.currentInput ? (u2 = o4.currentBlock.tool.baseSanitizeConfig, document.execCommand("insertHTML", false, (0, g.clean)(i3.innerHTML, u2))) : this.insertBlock(e3);
                      case 13:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3) {
                return o3.apply(this, arguments);
              }) }, { key: "processPattern", value: (n2 = (0, s.default)(a.default.mark(function t3(e3) {
                var n3, o4;
                return a.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        if (n3 = this.toolsPatterns.find(function(t5) {
                          var n4 = t5.pattern.exec(e3);
                          return !!n4 && e3 === n4.shift();
                        })) {
                          t4.next = 3;
                          break;
                        }
                        return t4.abrupt("return");
                      case 3:
                        return o4 = this.composePasteEvent("pattern", { key: n3.key, data: e3 }), t4.abrupt("return", { event: o4, tool: n3.tool.name });
                      case 5:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3) {
                return n2.apply(this, arguments);
              }) }, { key: "insertBlock", value: function(t3) {
                var e3, n3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o4 = this.Editor, r3 = o4.BlockManager, i3 = o4.Caret, a2 = r3.currentBlock;
                if (n3 && a2 && a2.isEmpty)
                  return e3 = r3.paste(t3.tool, t3.event, true), void i3.setToBlock(e3, i3.positions.END);
                e3 = r3.paste(t3.tool, t3.event), i3.setToBlock(e3, i3.positions.END);
              } }, { key: "insertEditorJSData", value: function(t3) {
                var e3 = this.Editor, n3 = e3.BlockManager, o4 = e3.Caret, r3 = e3.Tools;
                (0, g.sanitizeBlocks)(t3, function(t4) {
                  return r3.blockTools.get(t4).sanitizeConfig;
                }).forEach(function(t4, e4) {
                  var r4 = t4.tool, i3 = t4.data, a2 = false;
                  0 === e4 && (a2 = n3.currentBlock && n3.currentBlock.tool.isDefault && n3.currentBlock.isEmpty);
                  var s2 = n3.insert({ tool: r4, data: i3, replace: a2 });
                  o4.setToBlock(s2, o4.positions.END);
                });
              } }, { key: "processElementNode", value: function(t3, e3, n3) {
                var o4 = Object.keys(this.toolsTags), i3 = t3, a2 = (this.toolsTags[i3.tagName] || {}).tool, s2 = this.tagsByTool[null == a2 ? void 0 : a2.name] || [], l2 = o4.includes(i3.tagName), c2 = h.default.blockElements.includes(i3.tagName.toLowerCase()), u2 = Array.from(i3.children).some(function(t4) {
                  var e4 = t4.tagName;
                  return o4.includes(e4) && !s2.includes(e4);
                }), f2 = Array.from(i3.children).some(function(t4) {
                  var e4 = t4.tagName;
                  return h.default.blockElements.includes(e4.toLowerCase());
                });
                return c2 || l2 || u2 ? l2 && !u2 || c2 && !f2 && !u2 ? [].concat((0, r2.default)(e3), [n3, i3]) : void 0 : (n3.appendChild(i3), [].concat((0, r2.default)(e3), [n3]));
              } }, { key: "getNodes", value: function(t3) {
                var e3, n3 = this;
                return Array.from(t3.childNodes).reduce(function t4(o4, i3) {
                  if (h.default.isEmpty(i3) && !h.default.isSingleTag(i3))
                    return o4;
                  var a2 = o4[o4.length - 1], s2 = new DocumentFragment();
                  switch (a2 && h.default.isFragment(a2) && (s2 = o4.pop()), i3.nodeType) {
                    case Node.ELEMENT_NODE:
                      if (e3 = n3.processElementNode(i3, o4, s2))
                        return e3;
                      break;
                    case Node.TEXT_NODE:
                      return s2.appendChild(i3), [].concat((0, r2.default)(o4), [s2]);
                    default:
                      return [].concat((0, r2.default)(o4), [s2]);
                  }
                  return [].concat((0, r2.default)(o4), (0, r2.default)(Array.from(i3.childNodes).reduce(t4, [])));
                }, []);
              } }, { key: "composePasteEvent", value: function(t3, e3) {
                return new CustomEvent(t3, { detail: e3 });
              } }]), T;
            }(p.default);
            o2.default = k, k.displayName = "Paste", k.PATTERN_PROCESSING_MAX_LENGTH = 450, t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(30), n(21), n(2), n(3), n(5), n(6), n(4), n(9), n(151)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d, p) {
            "use strict";
            var h = n(1);
            function v() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = h(r2), i2 = h(i2), a = h(a), s = h(s), l = h(l), c = h(c), u = h(u), f = h(f);
            var g = function(t2) {
              (0, c.default)(h2, t2);
              var e2, n2, o3, d2 = (e2 = h2, function() {
                var t3, n3 = (0, f.default)(e2);
                if (v()) {
                  var o4 = (0, f.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, u.default)(this, t3);
              });
              function h2() {
                var t3;
                return (0, s.default)(this, h2), (t3 = d2.apply(this, arguments)).toolsDontSupportReadOnly = [], t3.readOnlyEnabled = false, t3;
              }
              return (0, l.default)(h2, [{ key: "prepare", value: (o3 = (0, a.default)(r2.default.mark(function t3() {
                var e3, n3, o4;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        e3 = this.Editor.Tools, n3 = e3.blockTools, o4 = [], Array.from(n3.entries()).forEach(function(t5) {
                          var e4 = (0, i2.default)(t5, 2), n4 = e4[0];
                          e4[1].isReadOnlySupported || o4.push(n4);
                        }), this.toolsDontSupportReadOnly = o4, this.config.readOnly && o4.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly);
                      case 7:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function() {
                return o3.apply(this, arguments);
              }) }, { key: "toggle", value: (n2 = (0, a.default)(r2.default.mark(function t3() {
                var e3, n3, o4, i3, a2 = arguments;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        (e3 = a2.length > 0 && void 0 !== a2[0] ? a2[0] : !this.readOnlyEnabled) && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError(), n3 = this.readOnlyEnabled, this.readOnlyEnabled = e3, t4.t0 = r2.default.keys(this.Editor);
                      case 5:
                        if ((t4.t1 = t4.t0()).done) {
                          t4.next = 12;
                          break;
                        }
                        if (o4 = t4.t1.value, this.Editor[o4].toggleReadOnly) {
                          t4.next = 9;
                          break;
                        }
                        return t4.abrupt("continue", 5);
                      case 9:
                        this.Editor[o4].toggleReadOnly(e3), t4.next = 5;
                        break;
                      case 12:
                        if (n3 !== e3) {
                          t4.next = 14;
                          break;
                        }
                        return t4.abrupt("return", this.readOnlyEnabled);
                      case 14:
                        return t4.next = 16, this.Editor.Saver.save();
                      case 16:
                        return i3 = t4.sent, t4.next = 19, this.Editor.BlockManager.clear();
                      case 19:
                        return t4.next = 21, this.Editor.Renderer.render(i3.blocks);
                      case 21:
                        return t4.abrupt("return", this.readOnlyEnabled);
                      case 22:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function() {
                return n2.apply(this, arguments);
              }) }, { key: "throwCriticalError", value: function() {
                throw new p.CriticalError("To enable read-only mode all connected tools should support it. Tools ".concat(this.toolsDontSupportReadOnly.join(", "), " don't support read-only mode."));
              } }, { key: "isEnabled", get: function() {
                return this.readOnlyEnabled;
              } }]), h2;
            }((d = h(d)).default);
            o2.default = g, g.displayName = "ReadOnly", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9), n(14), n(25), n(61), n(7)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d, p) {
            "use strict";
            var h = n(8), v = n(1);
            function g(t2) {
              if ("undefined" == typeof Symbol || null == t2[Symbol.iterator]) {
                if (Array.isArray(t2) || (t2 = function(t3, e3) {
                  if (t3) {
                    if ("string" == typeof t3)
                      return y(t3, e3);
                    var n3 = Object.prototype.toString.call(t3).slice(8, -1);
                    return "Object" === n3 && t3.constructor && (n3 = t3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(n3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? y(t3, e3) : void 0;
                  }
                }(t2))) {
                  var e2 = 0, n2 = function() {
                  };
                  return { s: n2, n: function() {
                    return e2 >= t2.length ? { done: true } : { done: false, value: t2[e2++] };
                  }, e: function(t3) {
                    throw t3;
                  }, f: n2 };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var o3, r3, i3 = true, a2 = false;
              return { s: function() {
                o3 = t2[Symbol.iterator]();
              }, n: function() {
                var t3 = o3.next();
                return i3 = t3.done, t3;
              }, e: function(t3) {
                a2 = true, r3 = t3;
              }, f: function() {
                try {
                  i3 || null == o3.return || o3.return();
                } finally {
                  if (a2)
                    throw r3;
                }
              } };
            }
            function y(t2, e2) {
              (null == e2 || e2 > t2.length) && (e2 = t2.length);
              for (var n2 = 0, o3 = new Array(e2); n2 < e2; n2++)
                o3[n2] = t2[n2];
              return o3;
            }
            function b() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = v(r2), i2 = v(i2), a = v(a), s = v(s), l = v(l), c = v(c), u = v(u), f = v(f), d = v(d), p = h(p);
            var m = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (b()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, r2.default)(this, o3), (t3 = n2.apply(this, arguments)).isRectSelectionActivated = false, t3.SCROLL_SPEED = 3, t3.HEIGHT_OF_SCROLL_ZONE = 40, t3.BOTTOM_SCROLL_ZONE = 1, t3.TOP_SCROLL_ZONE = 2, t3.MAIN_MOUSE_BUTTON = 0, t3.mousedown = false, t3.isScrolling = false, t3.inScrollZone = null, t3.startX = 0, t3.startY = 0, t3.mouseX = 0, t3.mouseY = 0, t3.stackOfSelected = [], t3.listenerIds = [], t3;
              }
              return (0, i2.default)(o3, [{ key: "prepare", value: function() {
                this.enableModuleBindings();
              } }, { key: "startSelection", value: function(t3, e3) {
                var n3 = document.elementFromPoint(t3 - window.pageXOffset, e3 - window.pageYOffset);
                n3.closest(".".concat(this.Editor.Toolbar.CSS.toolbar)) || (this.Editor.BlockSelection.allBlocksSelected = false, this.clearSelection(), this.stackOfSelected = []);
                var o4 = [".".concat(d.default.CSS.content), ".".concat(this.Editor.Toolbar.CSS.toolbar), ".".concat(this.Editor.InlineToolbar.CSS.inlineToolbar)], r3 = n3.closest("." + this.Editor.UI.CSS.editorWrapper), i3 = o4.some(function(t4) {
                  return !!n3.closest(t4);
                });
                r3 && !i3 && (this.mousedown = true, this.startX = t3, this.startY = e3);
              } }, { key: "endSelection", value: function() {
                this.mousedown = false, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
              } }, { key: "isRectActivated", value: function() {
                return this.isRectSelectionActivated;
              } }, { key: "clearSelection", value: function() {
                this.isRectSelectionActivated = false;
              } }, { key: "enableModuleBindings", value: function() {
                var t3 = this, e3 = this.genHTML().container;
                this.listeners.on(e3, "mousedown", function(e4) {
                  t3.processMouseDown(e4);
                }, false), this.listeners.on(document.body, "mousemove", p.throttle(function(e4) {
                  t3.processMouseMove(e4);
                }, 10), { passive: true }), this.listeners.on(document.body, "mouseleave", function() {
                  t3.processMouseLeave();
                }), this.listeners.on(window, "scroll", p.throttle(function(e4) {
                  t3.processScroll(e4);
                }, 10), { passive: true }), this.listeners.on(document.body, "mouseup", function() {
                  t3.processMouseUp();
                }, false);
              } }, { key: "processMouseDown", value: function(t3) {
                t3.button === this.MAIN_MOUSE_BUTTON && (null !== t3.target.closest(u.default.allInputsSelector) || this.startSelection(t3.pageX, t3.pageY));
              } }, { key: "processMouseMove", value: function(t3) {
                this.changingRectangle(t3), this.scrollByZones(t3.clientY);
              } }, { key: "processMouseLeave", value: function() {
                this.clearSelection(), this.endSelection();
              } }, { key: "processScroll", value: function(t3) {
                this.changingRectangle(t3);
              } }, { key: "processMouseUp", value: function() {
                this.clearSelection(), this.endSelection();
              } }, { key: "scrollByZones", value: function(t3) {
                this.inScrollZone = null, t3 <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - t3 <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), this.inScrollZone ? this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = true) : this.isScrolling = false;
              } }, { key: "genHTML", value: function() {
                var t3 = this.Editor.UI, e3 = t3.nodes.holder.querySelector("." + t3.CSS.editorWrapper), n3 = u.default.make("div", o3.CSS.overlay, {}), r3 = u.default.make("div", o3.CSS.overlayContainer, {}), i3 = u.default.make("div", o3.CSS.rect, {});
                return r3.appendChild(i3), n3.appendChild(r3), e3.appendChild(n3), this.overlayRectangle = i3, { container: e3, overlay: n3 };
              } }, { key: "scrollVertical", value: function(t3) {
                var e3 = this;
                if (this.inScrollZone && this.mousedown) {
                  var n3 = window.pageYOffset;
                  window.scrollBy(0, t3), this.mouseY += window.pageYOffset - n3, setTimeout(function() {
                    e3.scrollVertical(t3);
                  }, 0);
                }
              } }, { key: "changingRectangle", value: function(t3) {
                if (this.mousedown) {
                  void 0 !== t3.pageY && (this.mouseX = t3.pageX, this.mouseY = t3.pageY);
                  var e3 = this.genInfoForMouseSelection(), n3 = e3.rightPos, o4 = e3.leftPos, r3 = e3.index, i3 = this.startX > n3 && this.mouseX > n3, a2 = this.startX < o4 && this.mouseX < o4;
                  this.rectCrossesBlocks = !(i3 || a2), this.isRectSelectionActivated || (this.rectCrossesBlocks = false, this.isRectSelectionActivated = true, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), void 0 !== r3 && (this.trySelectNextBlock(r3), this.inverseSelection(), f.default.get().removeAllRanges());
                }
              } }, { key: "shrinkRectangleToPoint", value: function() {
                this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px");
              } }, { key: "inverseSelection", value: function() {
                var t3 = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
                if (this.rectCrossesBlocks && !t3) {
                  var e3, n3 = g(this.stackOfSelected);
                  try {
                    for (n3.s(); !(e3 = n3.n()).done; ) {
                      var o4 = e3.value;
                      this.Editor.BlockSelection.selectBlockByIndex(o4);
                    }
                  } catch (t4) {
                    n3.e(t4);
                  } finally {
                    n3.f();
                  }
                }
                if (!this.rectCrossesBlocks && t3) {
                  var r3, i3 = g(this.stackOfSelected);
                  try {
                    for (i3.s(); !(r3 = i3.n()).done; ) {
                      var a2 = r3.value;
                      this.Editor.BlockSelection.unSelectBlockByIndex(a2);
                    }
                  } catch (t4) {
                    i3.e(t4);
                  } finally {
                    i3.f();
                  }
                }
              } }, { key: "updateRectangleSize", value: function() {
                this.mouseY >= this.startY ? (this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.mouseY - window.pageYOffset, "px")) : (this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.top = "".concat(this.mouseY - window.pageYOffset, "px")), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.mouseX - window.pageXOffset, "px")) : (this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.left = "".concat(this.mouseX - window.pageXOffset, "px"));
              } }, { key: "genInfoForMouseSelection", value: function() {
                var t3, e3 = document.body.offsetWidth / 2, n3 = this.mouseY - window.pageYOffset, o4 = document.elementFromPoint(e3, n3), r3 = this.Editor.BlockManager.getBlockByChildNode(o4);
                void 0 !== r3 && (t3 = this.Editor.BlockManager.blocks.findIndex(function(t4) {
                  return t4.holder === r3.holder;
                }));
                var i3 = this.Editor.BlockManager.lastBlock.holder.querySelector("." + d.default.CSS.content), a2 = Number.parseInt(window.getComputedStyle(i3).width, 10) / 2;
                return { index: t3, leftPos: e3 - a2, rightPos: e3 + a2 };
              } }, { key: "addBlockInSelection", value: function(t3) {
                this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(t3), this.stackOfSelected.push(t3);
              } }, { key: "trySelectNextBlock", value: function(t3) {
                var e3 = this, n3 = this.stackOfSelected[this.stackOfSelected.length - 1] === t3, o4 = this.stackOfSelected.length;
                if (!n3) {
                  var r3 = this.stackOfSelected[o4 - 1] - this.stackOfSelected[o4 - 2] > 0, i3 = 0;
                  o4 > 1 && (i3 = r3 ? 1 : -1);
                  var a2 = t3 > this.stackOfSelected[o4 - 1] && 1 === i3, s2 = t3 < this.stackOfSelected[o4 - 1] && -1 === i3, l2 = !(a2 || s2 || 0 === i3);
                  if (l2 || !(t3 > this.stackOfSelected[o4 - 1] || void 0 === this.stackOfSelected[o4 - 1])) {
                    if (!l2 && t3 < this.stackOfSelected[o4 - 1])
                      for (var c2 = this.stackOfSelected[o4 - 1] - 1; c2 >= t3; c2--)
                        this.addBlockInSelection(c2);
                    else if (l2) {
                      var u2, f2 = o4 - 1;
                      for (u2 = t3 > this.stackOfSelected[o4 - 1] ? function() {
                        return t3 > e3.stackOfSelected[f2];
                      } : function() {
                        return t3 < e3.stackOfSelected[f2];
                      }; u2(); )
                        this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[f2]), this.stackOfSelected.pop(), f2--;
                    }
                  } else
                    for (var d2 = this.stackOfSelected[o4 - 1] + 1 || t3; d2 <= t3; d2++)
                      this.addBlockInSelection(d2);
                }
              } }], [{ key: "CSS", get: function() {
                return { overlay: "codex-editor-overlay", overlayContainer: "codex-editor-overlay__container", rect: "codex-editor-overlay__rectangle", topScrollZone: "codex-editor-overlay__scroll-zone--top", bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom" };
              } }]), o3;
            }(c.default);
            o2.default = m, m.displayName = "RectangleSelection", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(9), n(7)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d) {
            "use strict";
            var p = n(8), h = n(1);
            function v() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = h(r2), i2 = h(i2), a = h(a), s = h(s), l = h(l), c = h(c), u = h(u), f = h(f), d = p(d);
            var g = function(t2) {
              (0, l.default)(p2, t2);
              var e2, n2, o3, f2 = (e2 = p2, function() {
                var t3, n3 = (0, u.default)(e2);
                if (v()) {
                  var o4 = (0, u.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, c.default)(this, t3);
              });
              function p2() {
                return (0, a.default)(this, p2), f2.apply(this, arguments);
              }
              return (0, s.default)(p2, [{ key: "render", value: (o3 = (0, i2.default)(r2.default.mark(function t3(e3) {
                var n3, o4, i3 = this;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return n3 = e3.map(function(t5) {
                          return { function: function() {
                            return i3.insertBlock(t5);
                          } };
                        }), this.Editor.ModificationsObserver.disable(), t4.next = 4, d.sequence(n3);
                      case 4:
                        return o4 = t4.sent, this.Editor.ModificationsObserver.enable(), this.Editor.UI.checkEmptiness(), t4.abrupt("return", o4);
                      case 8:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3) {
                return o3.apply(this, arguments);
              }) }, { key: "insertBlock", value: (n2 = (0, i2.default)(r2.default.mark(function t3(e3) {
                var n3, o4, i3, a2, s2, l2, c2, u2, f3, p3, h2;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        if (o4 = this.Editor, i3 = o4.Tools, a2 = o4.BlockManager, s2 = e3.type, l2 = e3.data, c2 = e3.tunes, u2 = e3.id, !i3.available.has(s2)) {
                          t4.next = 13;
                          break;
                        }
                        t4.prev = 3, a2.insert({ id: u2, tool: s2, data: l2, tunes: c2 }), t4.next = 11;
                        break;
                      case 7:
                        throw t4.prev = 7, t4.t0 = t4.catch(3), d.log("Block \xAB".concat(s2, "\xBB skipped because of plugins error"), "warn", l2), Error(t4.t0);
                      case 11:
                        t4.next = 18;
                        break;
                      case 13:
                        f3 = { savedData: { id: u2, type: s2, data: l2 }, title: s2 }, i3.unavailable.has(s2) && (p3 = i3.unavailable.get(s2).toolbox, h2 = null === (n3 = p3[0]) || void 0 === n3 ? void 0 : n3.title, f3.title = h2 || f3.title), a2.insert({ id: u2, tool: i3.stubTool, data: f3 }).stretched = true, d.log("Tool \xAB".concat(s2, "\xBB is not found. Check 'tools' property at your initial Editor.js config."), "warn");
                      case 18:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this, [[3, 7]]);
              })), function(t3) {
                return n2.apply(this, arguments);
              }) }]), p2;
            }(f.default);
            o2.default = g, g.displayName = "Renderer", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(9), n(7), n(67)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d, p) {
            "use strict";
            var h = n(8), v = n(1);
            function g() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = v(r2), i2 = v(i2), a = v(a), s = v(s), l = v(l), c = v(c), u = v(u), f = v(f), d = h(d);
            var y = function(t2) {
              (0, l.default)(h2, t2);
              var e2, n2, o3, f2 = (e2 = h2, function() {
                var t3, n3 = (0, u.default)(e2);
                if (g()) {
                  var o4 = (0, u.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, c.default)(this, t3);
              });
              function h2() {
                return (0, a.default)(this, h2), f2.apply(this, arguments);
              }
              return (0, s.default)(h2, [{ key: "save", value: (o3 = (0, i2.default)(r2.default.mark(function t3() {
                var e3, n3, o4, i3, a2, s2, l2, c2 = this;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return e3 = this.Editor, n3 = e3.BlockManager, o4 = e3.Tools, i3 = n3.blocks, a2 = [], t4.prev = 2, i3.forEach(function(t5) {
                          a2.push(c2.getSavedData(t5));
                        }), t4.next = 6, Promise.all(a2);
                      case 6:
                        return s2 = t4.sent, t4.next = 9, (0, p.sanitizeBlocks)(s2, function(t5) {
                          return o4.blockTools.get(t5).sanitizeConfig;
                        });
                      case 9:
                        return l2 = t4.sent, t4.abrupt("return", this.makeOutput(l2));
                      case 13:
                        t4.prev = 13, t4.t0 = t4.catch(2), d.logLabeled("Saving failed due to the Error %o", "error", t4.t0);
                      case 16:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this, [[2, 13]]);
              })), function() {
                return o3.apply(this, arguments);
              }) }, { key: "getSavedData", value: (n2 = (0, i2.default)(r2.default.mark(function t3(e3) {
                var n3, o4;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return t4.next = 2, e3.save();
                      case 2:
                        if (n3 = t4.sent, t4.t0 = n3, !t4.t0) {
                          t4.next = 8;
                          break;
                        }
                        return t4.next = 7, e3.validate(n3.data);
                      case 7:
                        t4.t0 = t4.sent;
                      case 8:
                        return o4 = t4.t0, t4.abrupt("return", Object.assign(Object.assign({}, n3), { isValid: o4 }));
                      case 10:
                      case "end":
                        return t4.stop();
                    }
                }, t3);
              })), function(t3) {
                return n2.apply(this, arguments);
              }) }, { key: "makeOutput", value: function(t3) {
                var e3 = this, n3 = 0, o4 = [];
                return d.log("[Editor.js saving]:", "groupCollapsed"), t3.forEach(function(t4) {
                  var r3 = t4.id, i3 = t4.tool, a2 = t4.data, s2 = t4.tunes, l2 = t4.time, c2 = t4.isValid;
                  if (n3 += l2, d.log("".concat(i3.charAt(0).toUpperCase() + i3.slice(1)), "group"), !c2)
                    return d.log("Block \xAB".concat(i3, "\xBB skipped because saved data is invalid")), void d.log(void 0, "groupEnd");
                  if (d.log(a2), d.log(void 0, "groupEnd"), i3 !== e3.Editor.Tools.stubTool) {
                    var u2 = Object.assign({ id: r3, type: i3, data: a2 }, !d.isEmpty(s2) && { tunes: s2 });
                    o4.push(u2);
                  } else
                    o4.push(a2);
                }), d.log("Total", "log", n3), d.log(void 0, "groupEnd"), { time: +new Date(), blocks: o4, version: "2.25.0" };
              } }]), h2;
            }(f.default);
            o2.default = y, y.displayName = "Saver", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(30), n(2), n(3), n(5), n(6), n(4), n(9), n(14), n(62), n(7), n(25)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d, p, h) {
            "use strict";
            var v = n(8), g = n(1);
            function y() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = g(r2), i2 = g(i2), a = g(a), s = g(s), l = g(l), c = g(c), u = g(u), f = g(f), d = g(d), p = v(p), h = g(h);
            var b = function(t2) {
              (0, s.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (y()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, l.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, i2.default)(this, o3), (t3 = n2.apply(this, arguments)).buttons = [], t3.flipper = null, t3.selection = new h.default(), t3;
              }
              return (0, a.default)(o3, [{ key: "make", value: function() {
                this.nodes.wrapper = f.default.make("div", this.CSS.wrapper), this.nodes.toolSettings = f.default.make("div", this.CSS.toolSettings), this.nodes.defaultSettings = f.default.make("div", this.CSS.defaultSettings), f.default.append(this.nodes.wrapper, [this.nodes.toolSettings, this.nodes.defaultSettings]), this.enableFlipper();
              } }, { key: "destroy", value: function() {
                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
              } }, { key: "open", value: function() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Editor.BlockManager.currentBlock;
                this.nodes.wrapper.classList.add(this.CSS.wrapperOpened), this.selection.save(), t3.selected = true, this.Editor.BlockSelection.clearCache(), this.addToolSettings(t3), this.addTunes(t3), this.eventsDispatcher.emit(this.events.opened), this.flipper.activate(this.blockTunesButtons);
              } }, { key: "close", value: function() {
                this.nodes.wrapper.classList.remove(this.CSS.wrapperOpened), h.default.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && (this.Editor.BlockManager.currentBlock.selected = false), this.nodes.toolSettings.innerHTML = "", this.nodes.defaultSettings.innerHTML = "", this.eventsDispatcher.emit(this.events.closed), this.buttons = [], this.flipper.deactivate();
              } }, { key: "addToolSettings", value: function(t3) {
                var e3 = t3.renderSettings();
                e3 && f.default.append(this.nodes.toolSettings, e3);
              } }, { key: "addTunes", value: function(t3) {
                var e3 = t3.renderTunes(), n3 = (0, r2.default)(e3, 2), o4 = n3[0], i3 = n3[1];
                f.default.append(this.nodes.toolSettings, o4), f.default.append(this.nodes.defaultSettings, i3);
              } }, { key: "enableFlipper", value: function() {
                var t3 = this;
                this.flipper = new d.default({ focusedItemClass: this.CSS.focusedButton, activateCallback: function(e3) {
                  e3 && f.default.canSetCaret(e3) ? t3.close() : p.delay(function() {
                    t3.Editor.Caret.setToBlock(t3.Editor.BlockManager.currentBlock);
                  }, 50)();
                } });
              } }, { key: "events", get: function() {
                return { opened: "block-settings-opened", closed: "block-settings-closed" };
              } }, { key: "CSS", get: function() {
                return { wrapper: "ce-settings", wrapperOpened: "ce-settings--opened", toolSettings: "ce-settings__plugin-zone", defaultSettings: "ce-settings__default-zone", button: "ce-settings__button", focusedButton: "ce-settings__button--focused", focusedButtonAnimated: "ce-settings__button--focused-animated" };
              } }, { key: "opened", get: function() {
                return this.nodes.wrapper.classList.contains(this.CSS.wrapperOpened);
              } }, { key: "blockTunesButtons", get: function() {
                var t3 = this, e3 = this.Editor.StylesAPI;
                if (0 !== this.buttons.length)
                  return this.buttons;
                var n3 = this.nodes.toolSettings.querySelectorAll(".".concat(e3.classes.settingsButton, ", ").concat(f.default.allInputsSelector)), o4 = this.nodes.defaultSettings.querySelectorAll(".".concat(this.CSS.button));
                return n3.forEach(function(e4) {
                  t3.buttons.push(e4);
                }), o4.forEach(function(e4) {
                  t3.buttons.push(e4);
                }), this.buttons;
              } }]), o3;
            }(u.default);
            o2.default = b, b.displayName = "BlockSettings", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(30), n(20), n(21), n(42), n(2), n(3), n(5), n(6), n(4), n(9), n(14), n(7), n(62), n(60), n(84), n(67)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d, p, h, v, g, y, b, m) {
            "use strict";
            var k = n(8), x = n(1);
            function w() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = x(r2), i2 = x(i2), a = x(a), s = x(s), l = x(l), c = x(c), u = x(u), f = x(f), d = x(d), p = x(p), h = x(h), v = k(v), g = x(g), y = x(y);
            var S = function(t2) {
              (0, u.default)(k2, t2);
              var e2, n2, o3, p2 = (e2 = k2, function() {
                var t3, n3 = (0, d.default)(e2);
                if (w()) {
                  var o4 = (0, d.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, f.default)(this, t3);
              });
              function k2() {
                var t3;
                return (0, l.default)(this, k2), (t3 = p2.apply(this, arguments)).opened = false, t3.tools = [], t3.flipper = null, t3.togglingCallback = null, t3;
              }
              return (0, c.default)(k2, [{ key: "make", value: function() {
                this.nodes.wrapper = h.default.make("div", [k2.CSS.conversionToolbarWrapper].concat((0, s.default)(this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []))), this.nodes.tools = h.default.make("div", k2.CSS.conversionToolbarTools);
                var t3 = h.default.make("div", k2.CSS.conversionToolbarLabel, { textContent: y.default.ui(b.I18nInternalNS.ui.inlineToolbar.converter, "Convert to") });
                return this.addTools(), this.enableFlipper(), h.default.append(this.nodes.wrapper, t3), h.default.append(this.nodes.wrapper, this.nodes.tools), this.nodes.wrapper;
              } }, { key: "destroy", value: function() {
                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
              } }, { key: "toggle", value: function(t3) {
                this.opened ? this.close() : this.open(), v.isFunction(t3) && (this.togglingCallback = t3);
              } }, { key: "open", value: function() {
                var t3 = this;
                this.filterTools(), this.opened = true, this.nodes.wrapper.classList.add(k2.CSS.conversionToolbarShowed), window.requestAnimationFrame(function() {
                  t3.flipper.activate(t3.tools.map(function(t4) {
                    return t4.button;
                  }).filter(function(t4) {
                    return !t4.classList.contains(k2.CSS.conversionToolHidden);
                  })), t3.flipper.focusFirst(), v.isFunction(t3.togglingCallback) && t3.togglingCallback(true);
                });
              } }, { key: "close", value: function() {
                this.opened = false, this.flipper.deactivate(), this.nodes.wrapper.classList.remove(k2.CSS.conversionToolbarShowed), v.isFunction(this.togglingCallback) && this.togglingCallback(false);
              } }, { key: "hasTools", value: function() {
                return 1 !== this.tools.length || this.tools[0].name !== this.config.defaultBlock;
              } }, { key: "replaceWithBlock", value: (o3 = (0, a.default)(i2.default.mark(function t3(e3, n3) {
                var o4, r3, a2, s2, l2, c2, u2, f2, d2, p3 = this;
                return i2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return o4 = this.Editor.BlockManager.currentBlock.tool, t4.next = 3, this.Editor.BlockManager.currentBlock.save();
                      case 3:
                        if (r3 = t4.sent, a2 = r3.data, s2 = this.Editor.Tools.blockTools.get(e3), l2 = "", c2 = o4.conversionConfig.export, !v.isFunction(c2)) {
                          t4.next = 12;
                          break;
                        }
                        l2 = c2(a2), t4.next = 18;
                        break;
                      case 12:
                        if (!v.isString(c2)) {
                          t4.next = 16;
                          break;
                        }
                        l2 = a2[c2], t4.next = 18;
                        break;
                      case 16:
                        return v.log("Conversion \xABexport\xBB property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), t4.abrupt("return");
                      case 18:
                        if (u2 = (0, m.clean)(l2, s2.sanitizeConfig), f2 = {}, d2 = s2.conversionConfig.import, !v.isFunction(d2)) {
                          t4.next = 25;
                          break;
                        }
                        f2 = d2(u2), t4.next = 31;
                        break;
                      case 25:
                        if (!v.isString(d2)) {
                          t4.next = 29;
                          break;
                        }
                        f2[d2] = u2, t4.next = 31;
                        break;
                      case 29:
                        return v.log("Conversion \xABimport\xBB property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), t4.abrupt("return");
                      case 31:
                        n3 && (f2 = Object.assign(f2, n3)), this.Editor.BlockManager.replace({ tool: e3, data: f2 }), this.Editor.BlockSelection.clearSelection(), this.close(), this.Editor.InlineToolbar.close(), v.delay(function() {
                          p3.Editor.Caret.setToBlock(p3.Editor.BlockManager.currentBlock);
                        }, 10)();
                      case 37:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3, e3) {
                return o3.apply(this, arguments);
              }) }, { key: "addTools", value: function() {
                var t3 = this, e3 = this.Editor.Tools.blockTools;
                Array.from(e3.entries()).forEach(function(e4) {
                  var n3 = (0, r2.default)(e4, 2), o4 = n3[0], i3 = n3[1], a2 = i3.conversionConfig;
                  a2 && a2.import && i3.toolbox.forEach(function(e5) {
                    return t3.addToolIfValid(o4, e5);
                  });
                });
              } }, { key: "addToolIfValid", value: function(t3, e3) {
                !v.isEmpty(e3) && e3.icon && this.addTool(t3, e3);
              } }, { key: "addTool", value: function(t3, e3) {
                var n3 = this, o4 = h.default.make("div", [k2.CSS.conversionTool]), r3 = h.default.make("div", [k2.CSS.conversionToolIcon]);
                o4.dataset.tool = t3, r3.innerHTML = e3.icon, h.default.append(o4, r3), h.default.append(o4, h.default.text(y.default.t(b.I18nInternalNS.toolNames, e3.title || v.capitalize(t3)))), h.default.append(this.nodes.tools, o4), this.tools.push({ name: t3, button: o4, toolboxItem: e3 }), this.listeners.on(o4, "click", (0, a.default)(i2.default.mark(function o5() {
                  return i2.default.wrap(function(o6) {
                    for (; ; )
                      switch (o6.prev = o6.next) {
                        case 0:
                          return o6.next = 2, n3.replaceWithBlock(t3, e3.data);
                        case 2:
                        case "end":
                          return o6.stop();
                      }
                  }, o5);
                })));
              } }, { key: "filterTools", value: (n2 = (0, a.default)(i2.default.mark(function t3() {
                var e3, n3, o4;
                return i2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return o4 = function(t5, e4) {
                          return t5.icon === e4.icon && t5.title === e4.title;
                        }, e3 = this.Editor.BlockManager.currentBlock, t4.next = 4, e3.getActiveToolboxEntry();
                      case 4:
                        n3 = t4.sent, this.tools.forEach(function(t5) {
                          var r3 = false;
                          if (n3) {
                            var i3 = o4(n3, t5.toolboxItem);
                            r3 = t5.button.dataset.tool === e3.name && i3;
                          }
                          t5.button.hidden = r3, t5.button.classList.toggle(k2.CSS.conversionToolHidden, r3);
                        });
                      case 6:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function() {
                return n2.apply(this, arguments);
              }) }, { key: "enableFlipper", value: function() {
                this.flipper = new g.default({ focusedItemClass: k2.CSS.conversionToolFocused });
              } }], [{ key: "CSS", get: function() {
                return { conversionToolbarWrapper: "ce-conversion-toolbar", conversionToolbarShowed: "ce-conversion-toolbar--showed", conversionToolbarTools: "ce-conversion-toolbar__tools", conversionToolbarLabel: "ce-conversion-toolbar__label", conversionTool: "ce-conversion-tool", conversionToolHidden: "ce-conversion-tool--hidden", conversionToolIcon: "ce-conversion-tool__icon", conversionToolFocused: "ce-conversion-tool--focused", conversionToolActive: "ce-conversion-tool--active" };
              } }]), k2;
            }(p.default);
            o2.default = S, S.displayName = "ConversionToolbar", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(21), n(42), n(30), n(2), n(3), n(5), n(6), n(4), n(9), n(14), n(25), n(7), n(62), n(60), n(84), n(115), n(114), n(68)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d, p, h, v, g, y, b, m, k, x, w) {
            "use strict";
            var S = n(8), T = n(1);
            function E() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = T(r2), i2 = T(i2), a = T(a), s = T(s), l = T(l), c = T(c), u = T(u), f = T(f), d = T(d), p = T(p), h = T(h), v = T(v), g = S(g), y = T(y), b = T(b), k = T(k), x = T(x);
            var B = function(t2) {
              (0, u.default)(p2, t2);
              var e2, n2, o3 = (e2 = p2, function() {
                var t3, n3 = (0, d.default)(e2);
                if (E()) {
                  var o4 = (0, d.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, f.default)(this, t3);
              });
              function p2(t3) {
                var e3, n3 = t3.config, r3 = t3.eventsDispatcher;
                return (0, l.default)(this, p2), (e3 = o3.call(this, { config: n3, eventsDispatcher: r3 })).CSS = { inlineToolbar: "ce-inline-toolbar", inlineToolbarShowed: "ce-inline-toolbar--showed", inlineToolbarLeftOriented: "ce-inline-toolbar--left-oriented", inlineToolbarRightOriented: "ce-inline-toolbar--right-oriented", inlineToolbarShortcut: "ce-inline-toolbar__shortcut", buttonsWrapper: "ce-inline-toolbar__buttons", actionsWrapper: "ce-inline-toolbar__actions", inlineToolButton: "ce-inline-tool", inputField: "cdx-input", focusedButton: "ce-inline-tool--focused", conversionToggler: "ce-inline-toolbar__dropdown", conversionTogglerHidden: "ce-inline-toolbar__dropdown--hidden", conversionTogglerContent: "ce-inline-toolbar__dropdown-content", togglerAndButtonsWrapper: "ce-inline-toolbar__toggler-and-button-wrapper" }, e3.opened = false, e3.toolbarVerticalMargin = 5, e3.buttonsList = null, e3.width = 0, e3.flipper = null, e3.tooltip = new x.default(), e3;
              }
              return (0, c.default)(p2, [{ key: "toggleReadOnly", value: function(t3) {
                t3 ? (this.destroy(), this.Editor.ConversionToolbar.destroy()) : this.make();
              } }, { key: "tryToShow", value: function() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                this.allowedToShow() ? (this.move(), this.open(e3), this.Editor.Toolbar.close()) : t3 && this.close();
              } }, { key: "move", value: function() {
                var t3 = v.default.rect, e3 = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), n3 = { x: t3.x - e3.left, y: t3.y + t3.height - e3.top + this.toolbarVerticalMargin };
                t3.width && (n3.x += Math.floor(t3.width / 2));
                var o4 = n3.x - this.width / 2, r3 = n3.x + this.width / 2;
                this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarLeftOriented, o4 < this.Editor.UI.contentRect.left), this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarRightOriented, r3 > this.Editor.UI.contentRect.right), this.nodes.wrapper.style.left = Math.floor(n3.x) + "px", this.nodes.wrapper.style.top = Math.floor(n3.y) + "px";
              } }, { key: "close", value: function() {
                var t3 = this;
                this.opened && (this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), Array.from(this.toolsInstances.entries()).forEach(function(e3) {
                  var n3 = (0, s.default)(e3, 2), o4 = n3[0], r3 = n3[1], i3 = t3.getToolShortcut(o4);
                  i3 && k.default.remove(t3.Editor.UI.nodes.redactor, i3), g.isFunction(r3.clear) && r3.clear();
                }), this.opened = false, this.flipper.deactivate(), this.Editor.ConversionToolbar.close()));
              } }, { key: "open", value: function() {
                var t3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (!this.opened) {
                  this.addToolsFiltered(), this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.buttonsList = this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)), this.opened = true, t3 && this.Editor.ConversionToolbar.hasTools() ? this.setConversionTogglerContent() : this.nodes.conversionToggler.hidden = true;
                  var e3 = Array.from(this.buttonsList);
                  e3.unshift(this.nodes.conversionToggler), e3 = e3.filter(function(t4) {
                    return !t4.hidden;
                  }), this.flipper.activate(e3);
                }
              } }, { key: "containsNode", value: function(t3) {
                return this.nodes.wrapper.contains(t3);
              } }, { key: "destroy", value: function() {
                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes(), this.tooltip.destroy();
              } }, { key: "make", value: function() {
                var t3 = this;
                this.nodes.wrapper = h.default.make("div", [this.CSS.inlineToolbar].concat((0, a.default)(this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []))), this.nodes.togglerAndButtonsWrapper = h.default.make("div", this.CSS.togglerAndButtonsWrapper), this.nodes.buttons = h.default.make("div", this.CSS.buttonsWrapper), this.nodes.actions = h.default.make("div", this.CSS.actionsWrapper), this.listeners.on(this.nodes.wrapper, "mousedown", function(e3) {
                  e3.target.closest(".".concat(t3.CSS.actionsWrapper)) || e3.preventDefault();
                }), h.default.append(this.nodes.wrapper, [this.nodes.togglerAndButtonsWrapper, this.nodes.actions]), h.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addConversionToggler(), h.default.append(this.nodes.togglerAndButtonsWrapper, this.nodes.buttons), this.prepareConversionToolbar(), this.recalculateWidth(), this.enableFlipper();
              } }, { key: "allowedToShow", value: function() {
                var t3 = v.default.get(), e3 = v.default.text;
                if (!t3 || !t3.anchorNode)
                  return false;
                if (t3.isCollapsed || e3.length < 1)
                  return false;
                var n3 = h.default.isElement(t3.anchorNode) ? t3.anchorNode : t3.anchorNode.parentElement;
                if (t3 && ["IMG", "INPUT"].includes(n3.tagName))
                  return false;
                if (null === n3.closest('[contenteditable="true"]'))
                  return false;
                var o4 = this.Editor.BlockManager.getBlock(t3.anchorNode);
                return !!o4 && 0 !== o4.tool.inlineTools.size;
              } }, { key: "recalculateWidth", value: function() {
                this.width = this.nodes.wrapper.offsetWidth;
              } }, { key: "addConversionToggler", value: function() {
                var t3 = this;
                this.nodes.conversionToggler = h.default.make("div", this.CSS.conversionToggler), this.nodes.conversionTogglerContent = h.default.make("div", this.CSS.conversionTogglerContent);
                var e3 = h.default.svg("toggler-down", 13, 13);
                this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent), this.nodes.conversionToggler.appendChild(e3), this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler), this.listeners.on(this.nodes.conversionToggler, "click", function() {
                  t3.Editor.ConversionToolbar.toggle(function(e4) {
                    !e4 && t3.opened ? t3.flipper.activate() : t3.opened && t3.flipper.deactivate();
                  });
                }), this.tooltip.onHover(this.nodes.conversionToggler, b.default.ui(m.I18nInternalNS.ui.inlineToolbar.converter, "Convert to"), { placement: "top", hidingDelay: 100 });
              } }, { key: "setConversionTogglerContent", value: (n2 = (0, i2.default)(r2.default.mark(function t3() {
                var e3, n3, o4, i3, a2, s2;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return e3 = this.Editor.BlockManager, n3 = e3.currentBlock, o4 = n3.name, i3 = n3.tool.conversionConfig, a2 = i3 && i3.export, this.nodes.conversionToggler.hidden = !a2, this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden, !a2), t4.next = 9, n3.getActiveToolboxEntry();
                      case 9:
                        if (t4.t0 = t4.sent, t4.t0) {
                          t4.next = 12;
                          break;
                        }
                        t4.t0 = {};
                      case 12:
                        s2 = t4.t0, this.nodes.conversionTogglerContent.innerHTML = s2.icon || s2.title || g.capitalize(o4);
                      case 14:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function() {
                return n2.apply(this, arguments);
              }) }, { key: "prepareConversionToolbar", value: function() {
                var t3 = this.Editor.ConversionToolbar.make();
                h.default.append(this.nodes.wrapper, t3);
              } }, { key: "addToolsFiltered", value: function() {
                var t3 = this, e3 = v.default.get(), n3 = this.Editor.BlockManager.getBlock(e3.anchorNode);
                this.nodes.buttons.innerHTML = "", this.nodes.actions.innerHTML = "", this.toolsInstances = /* @__PURE__ */ new Map(), Array.from(n3.tool.inlineTools.values()).forEach(function(e4) {
                  t3.addTool(e4);
                }), this.recalculateWidth();
              } }, { key: "addTool", value: function(t3) {
                var e3 = this, n3 = t3.create(), o4 = n3.render();
                if (o4) {
                  if (o4.dataset.tool = t3.name, this.nodes.buttons.appendChild(o4), this.toolsInstances.set(t3.name, n3), g.isFunction(n3.renderActions)) {
                    var r3 = n3.renderActions();
                    this.nodes.actions.appendChild(r3);
                  }
                  this.listeners.on(o4, "click", function(t4) {
                    e3.toolClicked(n3), t4.preventDefault();
                  });
                  var i3 = this.getToolShortcut(t3.name);
                  if (i3)
                    try {
                      this.enableShortcuts(n3, i3);
                    } catch (t4) {
                    }
                  var a2 = h.default.make("div"), s2 = b.default.t(m.I18nInternalNS.toolNames, t3.title || g.capitalize(t3.name));
                  a2.appendChild(h.default.text(s2)), i3 && a2.appendChild(h.default.make("div", this.CSS.inlineToolbarShortcut, { textContent: g.beautifyShortcut(i3) })), this.tooltip.onHover(o4, a2, { placement: "top", hidingDelay: 100 }), n3.checkState(v.default.get());
                } else
                  g.log("Render method must return an instance of Node", "warn", t3.name);
              } }, { key: "getToolShortcut", value: function(t3) {
                var e3 = this.Editor.Tools, n3 = e3.inlineTools.get(t3), o4 = e3.internal.inlineTools;
                return Array.from(o4.keys()).includes(t3) ? this.inlineTools[t3][w.CommonInternalSettings.Shortcut] : n3.shortcut;
              } }, { key: "enableShortcuts", value: function(t3, e3) {
                var n3 = this;
                k.default.add({ name: e3, handler: function(e4) {
                  var o4 = n3.Editor.BlockManager.currentBlock;
                  o4 && o4.tool.enabledInlineTools && (e4.preventDefault(), n3.toolClicked(t3));
                }, on: this.Editor.UI.nodes.redactor });
              } }, { key: "toolClicked", value: function(t3) {
                var e3 = v.default.range;
                t3.surround(e3), this.checkToolsState();
              } }, { key: "checkToolsState", value: function() {
                this.toolsInstances.forEach(function(t3) {
                  t3.checkState(v.default.get());
                });
              } }, { key: "enableFlipper", value: function() {
                this.flipper = new y.default({ focusedItemClass: this.CSS.focusedButton, allowedKeys: [g.keyCodes.ENTER, g.keyCodes.TAB] });
              } }, { key: "inlineTools", get: function() {
                var t3 = {};
                return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(function(e3) {
                  var n3 = (0, s.default)(e3, 2), o4 = n3[0], r3 = n3[1];
                  t3[o4] = r3.create();
                }), t3;
              } }]), p2;
            }(p.default);
            o2.default = B, B.displayName = "InlineToolbar", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(42), n(30), n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(59), n(389), n(9), n(7), n(390), n(391), n(392), n(393), n(394), n(398), n(399), n(400), n(185)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d, p, h, v, g, y, b, m, k, x, w, S, T, E) {
            "use strict";
            var B = n(8), C = n(1);
            function _() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = C(r2), i2 = C(i2), a = C(a), s = C(s), l = C(l), c = C(c), u = C(u), f = C(f), d = C(d), p = C(p), h = C(h), v = C(v), g = B(g), y = C(y), b = C(b), m = C(m), k = C(k), x = C(x), w = C(w), S = C(S), T = C(T), E = C(E);
            var I = function(t2, e2, n2, o3) {
              var r3, i3 = arguments.length, a2 = i3 < 3 ? e2 : null === o3 ? o3 = Object.getOwnPropertyDescriptor(e2, n2) : o3;
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, p.default)(Reflect)) && "function" == typeof Reflect.decorate)
                a2 = Reflect.decorate(t2, e2, n2, o3);
              else
                for (var s2 = t2.length - 1; s2 >= 0; s2--)
                  (r3 = t2[s2]) && (a2 = (i3 < 3 ? r3(a2) : i3 > 3 ? r3(e2, n2, a2) : r3(e2, n2)) || a2);
              return i3 > 3 && a2 && Object.defineProperty(e2, n2, a2), a2;
            }, O = function(t2) {
              (0, u.default)(p2, t2);
              var e2, n2, o3 = (e2 = p2, function() {
                var t3, n3 = (0, d.default)(e2);
                if (_()) {
                  var o4 = (0, d.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, f.default)(this, t3);
              });
              function p2() {
                var t3;
                return (0, l.default)(this, p2), (t3 = o3.apply(this, arguments)).stubTool = "stub", t3.toolsAvailable = new E.default(), t3.toolsUnavailable = new E.default(), t3;
              }
              return (0, c.default)(p2, [{ key: "prepare", value: (n2 = (0, s.default)(a.default.mark(function t3() {
                var e3, n3, o4 = this;
                return a.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        if (this.validateTools(), this.config.tools = g.deepMerge({}, this.internalTools, this.config.tools), Object.prototype.hasOwnProperty.call(this.config, "tools") && 0 !== Object.keys(this.config.tools).length) {
                          t4.next = 4;
                          break;
                        }
                        throw Error("Can't start without tools");
                      case 4:
                        if (e3 = this.prepareConfig(), this.factory = new x.default(e3, this.config, this.Editor.API), 0 !== (n3 = this.getListOfPrepareFunctions(e3)).length) {
                          t4.next = 9;
                          break;
                        }
                        return t4.abrupt("return", Promise.resolve());
                      case 9:
                        return t4.next = 11, g.sequence(n3, function(t5) {
                          o4.toolPrepareMethodSuccess(t5);
                        }, function(t5) {
                          o4.toolPrepareMethodFallback(t5);
                        });
                      case 11:
                        this.prepareBlockTools();
                      case 12:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function() {
                return n2.apply(this, arguments);
              }) }, { key: "getAllInlineToolsSanitizeConfig", value: function() {
                var t3 = {};
                return Array.from(this.inlineTools.values()).forEach(function(e3) {
                  Object.assign(t3, e3.sanitizeConfig);
                }), t3;
              } }, { key: "destroy", value: function() {
                Object.values(this.available).forEach(function() {
                  var t3 = (0, s.default)(a.default.mark(function t4(e3) {
                    return a.default.wrap(function(t5) {
                      for (; ; )
                        switch (t5.prev = t5.next) {
                          case 0:
                            if (!g.isFunction(e3.reset)) {
                              t5.next = 3;
                              break;
                            }
                            return t5.next = 3, e3.reset();
                          case 3:
                          case "end":
                            return t5.stop();
                        }
                    }, t4);
                  }));
                  return function(e3) {
                    return t3.apply(this, arguments);
                  };
                }());
              } }, { key: "toolPrepareMethodSuccess", value: function(t3) {
                var e3 = this.factory.get(t3.toolName);
                if (e3.isInline()) {
                  var n3 = ["render", "surround", "checkState"].filter(function(t4) {
                    return !e3.create()[t4];
                  });
                  if (n3.length)
                    return g.log("Incorrect Inline Tool: ".concat(e3.name, ". Some of required methods is not implemented %o"), "warn", n3), void this.toolsUnavailable.set(e3.name, e3);
                }
                this.toolsAvailable.set(e3.name, e3);
              } }, { key: "toolPrepareMethodFallback", value: function(t3) {
                this.toolsUnavailable.set(t3.toolName, this.factory.get(t3.toolName));
              } }, { key: "getListOfPrepareFunctions", value: function(t3) {
                var e3 = [];
                return Object.entries(t3).forEach(function(t4) {
                  var n3 = (0, i2.default)(t4, 2), o4 = n3[0], r3 = n3[1];
                  e3.push({ function: g.isFunction(r3.class.prepare) ? r3.class.prepare : function() {
                  }, data: { toolName: o4, config: r3.config } });
                }), e3;
              } }, { key: "prepareBlockTools", value: function() {
                var t3 = this;
                Array.from(this.blockTools.values()).forEach(function(e3) {
                  t3.assignInlineToolsToBlockTool(e3), t3.assignBlockTunesToBlockTool(e3);
                });
              } }, { key: "assignInlineToolsToBlockTool", value: function(t3) {
                var e3 = this;
                false !== this.config.inlineToolbar && (true !== t3.enabledInlineTools ? Array.isArray(t3.enabledInlineTools) && (t3.inlineTools = new E.default(t3.enabledInlineTools.map(function(t4) {
                  return [t4, e3.inlineTools.get(t4)];
                }))) : t3.inlineTools = new E.default(Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map(function(t4) {
                  return [t4, e3.inlineTools.get(t4)];
                }) : Array.from(this.inlineTools.entries())));
              } }, { key: "assignBlockTunesToBlockTool", value: function(t3) {
                var e3 = this;
                if (false !== t3.enabledBlockTunes)
                  if (Array.isArray(t3.enabledBlockTunes)) {
                    var n3 = new E.default(t3.enabledBlockTunes.map(function(t4) {
                      return [t4, e3.blockTunes.get(t4)];
                    }));
                    t3.tunes = new E.default([].concat((0, r2.default)(n3), (0, r2.default)(this.blockTunes.internalTools)));
                  } else if (Array.isArray(this.config.tunes)) {
                    var o4 = new E.default(this.config.tunes.map(function(t4) {
                      return [t4, e3.blockTunes.get(t4)];
                    }));
                    t3.tunes = new E.default([].concat((0, r2.default)(o4), (0, r2.default)(this.blockTunes.internalTools)));
                  } else
                    t3.tunes = this.blockTunes.internalTools;
              } }, { key: "validateTools", value: function() {
                for (var t3 in this.config.tools)
                  if (Object.prototype.hasOwnProperty.call(this.config.tools, t3)) {
                    if (t3 in this.internalTools)
                      return;
                    var e3 = this.config.tools[t3];
                    if (!g.isFunction(e3) && !g.isFunction(e3.class))
                      throw Error("Tool \xAB".concat(t3, "\xBB must be a constructor function or an object with function in the \xABclass\xBB property"));
                  }
              } }, { key: "prepareConfig", value: function() {
                var t3 = {};
                for (var e3 in this.config.tools)
                  g.isObject(this.config.tools[e3]) ? t3[e3] = this.config.tools[e3] : t3[e3] = { class: this.config.tools[e3] };
                return t3;
              } }, { key: "available", get: function() {
                return this.toolsAvailable;
              } }, { key: "unavailable", get: function() {
                return this.toolsUnavailable;
              } }, { key: "inlineTools", get: function() {
                return this.available.inlineTools;
              } }, { key: "blockTools", get: function() {
                return this.available.blockTools;
              } }, { key: "blockTunes", get: function() {
                return this.available.blockTunes;
              } }, { key: "defaultTool", get: function() {
                return this.blockTools.get(this.config.defaultBlock);
              } }, { key: "internal", get: function() {
                return this.available.internalTools;
              } }, { key: "internalTools", get: function() {
                return { bold: { class: y.default, isInternal: true }, italic: { class: b.default, isInternal: true }, link: { class: m.default, isInternal: true }, paragraph: { class: h.default, inlineToolbar: true, isInternal: true }, stub: { class: k.default, isInternal: true }, moveUp: { class: T.default, isInternal: true }, delete: { class: S.default, isInternal: true }, moveDown: { class: w.default, isInternal: true } };
              } }]), p2;
            }(v.default);
            o2.default = O, O.displayName = "Tools", I([g.cacheable], O.prototype, "getAllInlineToolsSanitizeConfig", null), t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(30), n(2), n(3), n(5), n(6), n(4), n(153)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u) {
            "use strict";
            var f = n(1);
            function d() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = f(r2), i2 = f(i2), a = f(a), s = f(s), l = f(l), c = f(c);
            var p = function(t2) {
              (0, s.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (d()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, l.default)(this, t3);
              });
              function o3() {
                return (0, i2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, a.default)(o3, [{ key: "blockTools", get: function() {
                return new o3(Array.from(this.entries()).filter(function(t3) {
                  return (0, r2.default)(t3, 2)[1].isBlock();
                }));
              } }, { key: "inlineTools", get: function() {
                return new o3(Array.from(this.entries()).filter(function(t3) {
                  return (0, r2.default)(t3, 2)[1].isInline();
                }));
              } }, { key: "blockTunes", get: function() {
                return new o3(Array.from(this.entries()).filter(function(t3) {
                  return (0, r2.default)(t3, 2)[1].isTune();
                }));
              } }, { key: "internalTools", get: function() {
                return new o3(Array.from(this.entries()).filter(function(t3) {
                  return (0, r2.default)(t3, 2)[1].isInternal;
                }));
              } }, { key: "externalTools", get: function() {
                return new o3(Array.from(this.entries()).filter(function(t3) {
                  return !(0, r2.default)(t3, 2)[1].isInternal;
                }));
              } }]), o3;
            }((0, (u = f(u)).default)(Map));
            o2.default = p, p.displayName = "ToolsCollection", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(30), n(42), n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(401), n(9), n(14), n(7), n(25), n(61), n(62)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d, p, h, v, g, y, b, m) {
            "use strict";
            var k = n(8), x = n(1);
            function w() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = x(r2), i2 = x(i2), a = x(a), s = x(s), l = x(l), c = x(c), u = x(u), f = x(f), d = x(d), p = x(p), h = x(h), v = x(v), g = k(g), y = x(y), b = x(b), m = x(m);
            var S = function(t2) {
              (0, u.default)(k2, t2);
              var e2, o3, h2 = (e2 = k2, function() {
                var t3, n2 = (0, d.default)(e2);
                if (w()) {
                  var o4 = (0, d.default)(this).constructor;
                  t3 = Reflect.construct(n2, arguments, o4);
                } else
                  t3 = n2.apply(this, arguments);
                return (0, f.default)(this, t3);
              });
              function k2() {
                var t3;
                return (0, l.default)(this, k2), (t3 = h2.apply(this, arguments)).isMobile = false, t3.contentRectCache = void 0, t3.resizeDebouncer = g.debounce(function() {
                  t3.windowResize();
                }, 200), t3;
              }
              return (0, c.default)(k2, [{ key: "addLoader", value: function() {
                this.nodes.loader = v.default.make("div", this.CSS.editorLoader), this.nodes.wrapper.prepend(this.nodes.loader), this.nodes.redactor.classList.add(this.CSS.editorZoneHidden);
              } }, { key: "removeLoader", value: function() {
                this.nodes.loader.remove(), this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden);
              } }, { key: "prepare", value: (o3 = (0, s.default)(a.default.mark(function t3() {
                return a.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        this.checkIsMobile(), this.make(), this.addLoader(), this.appendSVGSprite(), this.loadStyles();
                      case 5:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function() {
                return o3.apply(this, arguments);
              }) }, { key: "toggleReadOnly", value: function(t3) {
                t3 ? this.disableModuleBindings() : this.enableModuleBindings();
              } }, { key: "checkEmptiness", value: function() {
                var t3 = this.Editor.BlockManager;
                this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, t3.isEditorEmpty);
              } }, { key: "destroy", value: function() {
                this.nodes.holder.innerHTML = "";
              } }, { key: "closeAllToolbars", value: function() {
                var t3 = this.Editor, e3 = t3.Toolbar, n2 = t3.BlockSettings, o4 = t3.InlineToolbar, r3 = t3.ConversionToolbar;
                n2.close(), o4.close(), r3.close(), e3.toolbox.close();
              } }, { key: "checkIsMobile", value: function() {
                this.isMobile = window.innerWidth < 650;
              } }, { key: "make", value: function() {
                this.nodes.holder = v.default.getHolder(this.config.holder), this.nodes.wrapper = v.default.make("div", [this.CSS.editorWrapper].concat((0, i2.default)(this.isRtl ? [this.CSS.editorRtlFix] : []))), this.nodes.redactor = v.default.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);
              } }, { key: "loadStyles", value: function() {
                var t3 = n(402);
                if (!v.default.get("editor-js-styles")) {
                  var e3 = v.default.make("style", null, { id: "editor-js-styles", textContent: t3.toString() });
                  v.default.prepend(document.head, e3);
                }
              } }, { key: "enableModuleBindings", value: function() {
                var t3 = this;
                this.readOnlyMutableListeners.on(this.nodes.redactor, "click", function(e3) {
                  t3.redactorClicked(e3);
                }, false), this.readOnlyMutableListeners.on(this.nodes.redactor, "mousedown", function(e3) {
                  t3.documentTouched(e3);
                }, true), this.readOnlyMutableListeners.on(this.nodes.redactor, "touchstart", function(e3) {
                  t3.documentTouched(e3);
                }, true), this.readOnlyMutableListeners.on(document, "keydown", function(e3) {
                  t3.documentKeydown(e3);
                }, true), this.readOnlyMutableListeners.on(document, "mousedown", function(e3) {
                  t3.documentClicked(e3);
                }, true), this.readOnlyMutableListeners.on(document, "selectionchange", function(e3) {
                  t3.selectionChanged(e3);
                }, true), this.readOnlyMutableListeners.on(window, "resize", function() {
                  t3.resizeDebouncer();
                }, { passive: true }), this.watchBlockHoveredEvents();
              } }, { key: "watchBlockHoveredEvents", value: function() {
                var t3, e3 = this;
                this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", g.throttle(function(n2) {
                  var o4 = n2.target.closest(".ce-block");
                  e3.Editor.BlockSelection.anyBlockSelected || o4 && t3 !== o4 && (t3 = o4, e3.eventsDispatcher.emit(e3.events.blockHovered, { block: e3.Editor.BlockManager.getBlockByChildNode(o4) }));
                }, 20), { passive: true });
              } }, { key: "disableModuleBindings", value: function() {
                this.readOnlyMutableListeners.clearAll();
              } }, { key: "windowResize", value: function() {
                this.contentRectCache = null, this.checkIsMobile();
              } }, { key: "documentKeydown", value: function(t3) {
                switch (t3.keyCode) {
                  case g.keyCodes.ENTER:
                    this.enterPressed(t3);
                    break;
                  case g.keyCodes.BACKSPACE:
                    this.backspacePressed(t3);
                    break;
                  case g.keyCodes.ESC:
                    this.escapePressed(t3);
                    break;
                  default:
                    this.defaultBehaviour(t3);
                }
              } }, { key: "defaultBehaviour", value: function(t3) {
                var e3 = this.Editor.BlockManager.currentBlock, n2 = t3.target.closest(".".concat(this.CSS.editorWrapper)), o4 = t3.altKey || t3.ctrlKey || t3.metaKey || t3.shiftKey;
                void 0 === e3 || null !== n2 ? n2 || e3 && o4 || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close()) : this.Editor.BlockEvents.keydown(t3);
              } }, { key: "backspacePressed", value: function(t3) {
                var e3 = this.Editor, n2 = e3.BlockManager, o4 = e3.BlockSelection, r3 = e3.Caret;
                if (o4.anyBlockSelected && !y.default.isSelectionExists) {
                  var i3 = n2.removeSelectedBlocks();
                  r3.setToBlock(n2.insertDefaultBlockAtIndex(i3, true), r3.positions.START), o4.clearSelection(t3), t3.preventDefault(), t3.stopPropagation(), t3.stopImmediatePropagation();
                }
              } }, { key: "escapePressed", value: function(t3) {
                this.Editor.BlockSelection.clearSelection(t3), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.ConversionToolbar.opened ? this.Editor.ConversionToolbar.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
              } }, { key: "enterPressed", value: function(t3) {
                var e3 = this.Editor, n2 = e3.BlockManager, o4 = e3.BlockSelection, r3 = n2.currentBlockIndex >= 0;
                if (o4.anyBlockSelected && !y.default.isSelectionExists)
                  return o4.clearSelection(t3), t3.preventDefault(), t3.stopImmediatePropagation(), void t3.stopPropagation();
                if (!this.someToolbarOpened && r3 && "BODY" === t3.target.tagName) {
                  var i3 = this.Editor.BlockManager.insert();
                  this.Editor.Caret.setToBlock(i3), this.Editor.BlockManager.highlightCurrentNode(), this.Editor.Toolbar.moveAndOpen(i3);
                }
                this.Editor.BlockSelection.clearSelection(t3);
              } }, { key: "documentClicked", value: function(t3) {
                if (t3.isTrusted) {
                  var e3 = t3.target;
                  this.nodes.holder.contains(e3) || y.default.isAtEditor || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
                  var n2 = this.Editor.BlockSettings.nodes.wrapper.contains(e3), o4 = this.Editor.Toolbar.nodes.settingsToggler.contains(e3), r3 = n2 || o4;
                  if (this.Editor.BlockSettings.opened && !r3) {
                    this.Editor.BlockSettings.close();
                    var i3 = this.Editor.BlockManager.getBlockByChildNode(e3);
                    this.Editor.Toolbar.moveAndOpen(i3);
                  }
                  this.Editor.BlockSelection.clearSelection(t3);
                }
              } }, { key: "documentTouched", value: function(t3) {
                var e3 = t3.target;
                if (e3 === this.nodes.redactor) {
                  var n2 = t3 instanceof MouseEvent ? t3.clientX : t3.touches[0].clientX, o4 = t3 instanceof MouseEvent ? t3.clientY : t3.touches[0].clientY;
                  e3 = document.elementFromPoint(n2, o4);
                }
                try {
                  this.Editor.BlockManager.setCurrentBlockByChildNode(e3), this.Editor.BlockManager.highlightCurrentNode();
                } catch (t4) {
                  this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
                }
                this.Editor.Toolbar.moveAndOpen();
              } }, { key: "redactorClicked", value: function(t3) {
                var e3 = this.Editor.BlockSelection;
                if (y.default.isCollapsed) {
                  var n2 = function() {
                    t3.stopImmediatePropagation(), t3.stopPropagation();
                  }, o4 = t3.target, r3 = t3.metaKey || t3.ctrlKey;
                  if (v.default.isAnchor(o4) && r3) {
                    n2();
                    var i3 = o4.getAttribute("href"), a2 = g.getValidUrl(i3);
                    g.openTab(a2);
                  } else {
                    var s2 = this.Editor.BlockManager.getBlockByIndex(-1), l2 = v.default.offset(s2.holder).bottom, c2 = t3.pageY;
                    if (t3.target instanceof Element && t3.target.isEqualNode(this.nodes.redactor) && !e3.anyBlockSelected && l2 < c2) {
                      n2();
                      var u2 = this.Editor, f2 = u2.BlockManager, d2 = u2.Caret, p2 = u2.Toolbar;
                      f2.lastBlock.tool.isDefault && f2.lastBlock.isEmpty || f2.insertAtEnd(), d2.setToTheLastBlock(), p2.moveAndOpen(f2.lastBlock);
                    }
                  }
                }
              } }, { key: "selectionChanged", value: function(t3) {
                var e3 = this.Editor, n2 = e3.CrossBlockSelection, o4 = e3.BlockSelection, r3 = y.default.anchorElement;
                if (n2.isCrossBlockSelectionStarted && o4.anyBlockSelected && y.default.get().removeAllRanges(), r3) {
                  var i3 = null === r3.closest(".".concat(b.default.CSS.content));
                  if (i3 && (this.Editor.InlineToolbar.containsNode(r3) || this.Editor.InlineToolbar.close(), "true" !== r3.dataset.inlineToolbar))
                    return;
                  this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(r3);
                  var a2 = true !== i3;
                  this.Editor.InlineToolbar.tryToShow(true, a2);
                } else
                  y.default.range || this.Editor.InlineToolbar.close();
              } }, { key: "appendSVGSprite", value: function() {
                var t3 = v.default.make("div");
                t3.hidden = true, t3.style.display = "none", t3.innerHTML = p.default, v.default.append(this.nodes.wrapper, t3);
              } }, { key: "events", get: function() {
                return { blockHovered: "block-hovered" };
              } }, { key: "CSS", get: function() {
                return { editorWrapper: "codex-editor", editorWrapperNarrow: "codex-editor--narrow", editorZone: "codex-editor__redactor", editorZoneHidden: "codex-editor__redactor--hidden", editorLoader: "codex-editor__loader", editorEmpty: "codex-editor--empty", editorRtlFix: "codex-editor--rtl" };
              } }, { key: "contentRect", get: function() {
                if (this.contentRectCache)
                  return this.contentRectCache;
                var t3 = this.nodes.wrapper.querySelector(".".concat(b.default.CSS.content));
                return t3 ? (this.contentRectCache = t3.getBoundingClientRect(), this.contentRectCache) : { width: 650, left: 0, right: 0 };
              } }, { key: "someToolbarOpened", get: function() {
                var t3 = this.Editor, e3 = t3.Toolbar, n2 = t3.BlockSettings, o4 = t3.InlineToolbar, r3 = t3.ConversionToolbar;
                return n2.opened || o4.opened || r3.opened || e3.toolbox.opened;
              } }, { key: "someFlipperButtonFocused", get: function() {
                return !!this.Editor.Toolbar.toolbox.hasFocus() || Object.entries(this.Editor).filter(function(t3) {
                  var e3 = (0, r2.default)(t3, 2);
                  return e3[0], e3[1].flipper instanceof m.default;
                }).some(function(t3) {
                  var e3 = (0, r2.default)(t3, 2);
                  return e3[0], e3[1].flipper.hasFocus();
                });
              } }]), k2;
            }(h.default);
            o2.default = S, S.displayName = "UI", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          n(188), t.exports = n(360);
        }, function(t, e, n) {
          n(189);
        }, function(t, e, n) {
          "use strict";
          n(190), n(333), n(335), n(338), n(340), n(342), n(344), n(346), n(348), n(350), n(352), n(354), n(356), n(147);
        }, function(t, e, n) {
          n(191), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(235), n(237), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(255), n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(267), n(268), n(269), n(270), n(272), n(273), n(275), n(276), n(277), n(278), n(279), n(280), n(281), n(283), n(284), n(285), n(286), n(287), n(288), n(289), n(290), n(291), n(292), n(293), n(294), n(295), n(105), n(296), n(136), n(297), n(137), n(298), n(299), n(300), n(301), n(138), n(304), n(305), n(306), n(307), n(308), n(309), n(310), n(311), n(312), n(313), n(314), n(315), n(316), n(317), n(318), n(319), n(320), n(321), n(322), n(323), n(324), n(325), n(326), n(327), n(328), n(329), n(330), n(331), n(332), t.exports = n(17);
        }, function(t, e, n) {
          "use strict";
          var o = n(10), r = n(26), i = n(18), a = n(0), s = n(23), l = n(41).KEY, c = n(11), u = n(69), f = n(53), d = n(44), p = n(15), h = n(86), v = n(117), g = n(193), y = n(72), b = n(12), m = n(13), k = n(22), x = n(28), w = n(40), S = n(43), T = n(48), E = n(120), B = n(34), C = n(71), _ = n(19), I = n(46), O = B.f, M = _.f, R = E.f, A = o.Symbol, N = o.JSON, L = N && N.stringify, P = p("_hidden"), D = p("toPrimitive"), j = {}.propertyIsEnumerable, F = u("symbol-registry"), H = u("symbols"), U = u("op-symbols"), z = Object.prototype, W = "function" == typeof A && !!C.f, Y = o.QObject, V = !Y || !Y.prototype || !Y.prototype.findChild, X = i && c(function() {
            return 7 != T(M({}, "a", { get: function() {
              return M(this, "a", { value: 7 }).a;
            } })).a;
          }) ? function(t2, e2, n2) {
            var o2 = O(z, e2);
            o2 && delete z[e2], M(t2, e2, n2), o2 && t2 !== z && M(z, e2, o2);
          } : M, K = function(t2) {
            var e2 = H[t2] = T(A.prototype);
            return e2._k = t2, e2;
          }, G = W && "symbol" == typeof A.iterator ? function(t2) {
            return "symbol" == typeof t2;
          } : function(t2) {
            return t2 instanceof A;
          }, Z = function(t2, e2, n2) {
            return t2 === z && Z(U, e2, n2), b(t2), e2 = w(e2, true), b(n2), r(H, e2) ? (n2.enumerable ? (r(t2, P) && t2[P][e2] && (t2[P][e2] = false), n2 = T(n2, { enumerable: S(0, false) })) : (r(t2, P) || M(t2, P, S(1, {})), t2[P][e2] = true), X(t2, e2, n2)) : M(t2, e2, n2);
          }, q = function(t2, e2) {
            b(t2);
            for (var n2, o2 = g(e2 = x(e2)), r2 = 0, i2 = o2.length; i2 > r2; )
              Z(t2, n2 = o2[r2++], e2[n2]);
            return t2;
          }, J = function(t2) {
            var e2 = j.call(this, t2 = w(t2, true));
            return !(this === z && r(H, t2) && !r(U, t2)) && (!(e2 || !r(this, t2) || !r(H, t2) || r(this, P) && this[P][t2]) || e2);
          }, $ = function(t2, e2) {
            if (t2 = x(t2), e2 = w(e2, true), t2 !== z || !r(H, e2) || r(U, e2)) {
              var n2 = O(t2, e2);
              return !n2 || !r(H, e2) || r(t2, P) && t2[P][e2] || (n2.enumerable = true), n2;
            }
          }, Q = function(t2) {
            for (var e2, n2 = R(x(t2)), o2 = [], i2 = 0; n2.length > i2; )
              r(H, e2 = n2[i2++]) || e2 == P || e2 == l || o2.push(e2);
            return o2;
          }, tt = function(t2) {
            for (var e2, n2 = t2 === z, o2 = R(n2 ? U : x(t2)), i2 = [], a2 = 0; o2.length > a2; )
              !r(H, e2 = o2[a2++]) || n2 && !r(z, e2) || i2.push(H[e2]);
            return i2;
          };
          W || (s((A = function() {
            if (this instanceof A)
              throw TypeError("Symbol is not a constructor!");
            var t2 = d(arguments.length > 0 ? arguments[0] : void 0), e2 = function(n2) {
              this === z && e2.call(U, n2), r(this, P) && r(this[P], t2) && (this[P][t2] = false), X(this, t2, S(1, n2));
            };
            return i && V && X(z, t2, { configurable: true, set: e2 }), K(t2);
          }).prototype, "toString", function() {
            return this._k;
          }), B.f = $, _.f = Z, n(49).f = E.f = Q, n(64).f = J, C.f = tt, i && !n(45) && s(z, "propertyIsEnumerable", J, true), h.f = function(t2) {
            return K(p(t2));
          }), a(a.G + a.W + a.F * !W, { Symbol: A });
          for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt; )
            p(et[nt++]);
          for (var ot = I(p.store), rt = 0; ot.length > rt; )
            v(ot[rt++]);
          a(a.S + a.F * !W, "Symbol", { for: function(t2) {
            return r(F, t2 += "") ? F[t2] : F[t2] = A(t2);
          }, keyFor: function(t2) {
            if (!G(t2))
              throw TypeError(t2 + " is not a symbol!");
            for (var e2 in F)
              if (F[e2] === t2)
                return e2;
          }, useSetter: function() {
            V = true;
          }, useSimple: function() {
            V = false;
          } }), a(a.S + a.F * !W, "Object", { create: function(t2, e2) {
            return void 0 === e2 ? T(t2) : q(T(t2), e2);
          }, defineProperty: Z, defineProperties: q, getOwnPropertyDescriptor: $, getOwnPropertyNames: Q, getOwnPropertySymbols: tt });
          var it = c(function() {
            C.f(1);
          });
          a(a.S + a.F * it, "Object", { getOwnPropertySymbols: function(t2) {
            return C.f(k(t2));
          } }), N && a(a.S + a.F * (!W || c(function() {
            var t2 = A();
            return "[null]" != L([t2]) || "{}" != L({ a: t2 }) || "{}" != L(Object(t2));
          })), "JSON", { stringify: function(t2) {
            for (var e2, n2, o2 = [t2], r2 = 1; arguments.length > r2; )
              o2.push(arguments[r2++]);
            if (n2 = e2 = o2[1], (m(e2) || void 0 !== t2) && !G(t2))
              return y(e2) || (e2 = function(t3, e3) {
                if ("function" == typeof n2 && (e3 = n2.call(this, t3, e3)), !G(e3))
                  return e3;
              }), o2[1] = e2, L.apply(N, o2);
          } }), A.prototype[D] || n(27)(A.prototype, D, A.prototype.valueOf), f(A, "Symbol"), f(Math, "Math", true), f(o.JSON, "JSON", true);
        }, function(t, e, n) {
          t.exports = n(69)("native-function-to-string", Function.toString);
        }, function(t, e, n) {
          var o = n(46), r = n(71), i = n(64);
          t.exports = function(t2) {
            var e2 = o(t2), n2 = r.f;
            if (n2)
              for (var a, s = n2(t2), l = i.f, c = 0; s.length > c; )
                l.call(t2, a = s[c++]) && e2.push(a);
            return e2;
          };
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Object", { create: n(48) });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S + o.F * !n(18), "Object", { defineProperty: n(19).f });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S + o.F * !n(18), "Object", { defineProperties: n(119) });
        }, function(t, e, n) {
          var o = n(28), r = n(34).f;
          n(35)("getOwnPropertyDescriptor", function() {
            return function(t2, e2) {
              return r(o(t2), e2);
            };
          });
        }, function(t, e, n) {
          var o = n(22), r = n(50);
          n(35)("getPrototypeOf", function() {
            return function(t2) {
              return r(o(t2));
            };
          });
        }, function(t, e, n) {
          var o = n(22), r = n(46);
          n(35)("keys", function() {
            return function(t2) {
              return r(o(t2));
            };
          });
        }, function(t, e, n) {
          n(35)("getOwnPropertyNames", function() {
            return n(120).f;
          });
        }, function(t, e, n) {
          var o = n(13), r = n(41).onFreeze;
          n(35)("freeze", function(t2) {
            return function(e2) {
              return t2 && o(e2) ? t2(r(e2)) : e2;
            };
          });
        }, function(t, e, n) {
          var o = n(13), r = n(41).onFreeze;
          n(35)("seal", function(t2) {
            return function(e2) {
              return t2 && o(e2) ? t2(r(e2)) : e2;
            };
          });
        }, function(t, e, n) {
          var o = n(13), r = n(41).onFreeze;
          n(35)("preventExtensions", function(t2) {
            return function(e2) {
              return t2 && o(e2) ? t2(r(e2)) : e2;
            };
          });
        }, function(t, e, n) {
          var o = n(13);
          n(35)("isFrozen", function(t2) {
            return function(e2) {
              return !o(e2) || !!t2 && t2(e2);
            };
          });
        }, function(t, e, n) {
          var o = n(13);
          n(35)("isSealed", function(t2) {
            return function(e2) {
              return !o(e2) || !!t2 && t2(e2);
            };
          });
        }, function(t, e, n) {
          var o = n(13);
          n(35)("isExtensible", function(t2) {
            return function(e2) {
              return !!o(e2) && (!t2 || t2(e2));
            };
          });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S + o.F, "Object", { assign: n(121) });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Object", { is: n(122) });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Object", { setPrototypeOf: n(90).set });
        }, function(t, e, n) {
          "use strict";
          var o = n(65), r = {};
          r[n(15)("toStringTag")] = "z", r + "" != "[object z]" && n(23)(Object.prototype, "toString", function() {
            return "[object " + o(this) + "]";
          }, true);
        }, function(t, e, n) {
          var o = n(0);
          o(o.P, "Function", { bind: n(123) });
        }, function(t, e, n) {
          var o = n(19).f, r = Function.prototype, i = /^\s*function ([^ (]*)/;
          "name" in r || n(18) && o(r, "name", { configurable: true, get: function() {
            try {
              return ("" + this).match(i)[1];
            } catch (t2) {
              return "";
            }
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(13), r = n(50), i = n(15)("hasInstance"), a = Function.prototype;
          i in a || n(19).f(a, i, { value: function(t2) {
            if ("function" != typeof this || !o(t2))
              return false;
            if (!o(this.prototype))
              return t2 instanceof this;
            for (; t2 = r(t2); )
              if (this.prototype === t2)
                return true;
            return false;
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(125);
          o(o.G + o.F * (parseInt != r), { parseInt: r });
        }, function(t, e, n) {
          var o = n(0), r = n(126);
          o(o.G + o.F * (parseFloat != r), { parseFloat: r });
        }, function(t, e, n) {
          "use strict";
          var o = n(10), r = n(26), i = n(37), a = n(92), s = n(40), l = n(11), c = n(49).f, u = n(34).f, f = n(19).f, d = n(54).trim, p = o.Number, h = p, v = p.prototype, g = "Number" == i(n(48)(v)), y = "trim" in String.prototype, b = function(t2) {
            var e2 = s(t2, false);
            if ("string" == typeof e2 && e2.length > 2) {
              var n2, o2, r2, i2 = (e2 = y ? e2.trim() : d(e2, 3)).charCodeAt(0);
              if (43 === i2 || 45 === i2) {
                if (88 === (n2 = e2.charCodeAt(2)) || 120 === n2)
                  return NaN;
              } else if (48 === i2) {
                switch (e2.charCodeAt(1)) {
                  case 66:
                  case 98:
                    o2 = 2, r2 = 49;
                    break;
                  case 79:
                  case 111:
                    o2 = 8, r2 = 55;
                    break;
                  default:
                    return +e2;
                }
                for (var a2, l2 = e2.slice(2), c2 = 0, u2 = l2.length; c2 < u2; c2++)
                  if ((a2 = l2.charCodeAt(c2)) < 48 || a2 > r2)
                    return NaN;
                return parseInt(l2, o2);
              }
            }
            return +e2;
          };
          if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
            p = function(t2) {
              var e2 = arguments.length < 1 ? 0 : t2, n2 = this;
              return n2 instanceof p && (g ? l(function() {
                v.valueOf.call(n2);
              }) : "Number" != i(n2)) ? a(new h(b(e2)), n2, p) : b(e2);
            };
            for (var m, k = n(18) ? c(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; k.length > x; x++)
              r(h, m = k[x]) && !r(p, m) && f(p, m, u(h, m));
            p.prototype = v, v.constructor = p, n(23)(o, "Number", p);
          }
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(33), i = n(127), a = n(93), s = 1 .toFixed, l = Math.floor, c = [0, 0, 0, 0, 0, 0], u = "Number.toFixed: incorrect invocation!", f = function(t2, e2) {
            for (var n2 = -1, o2 = e2; ++n2 < 6; )
              o2 += t2 * c[n2], c[n2] = o2 % 1e7, o2 = l(o2 / 1e7);
          }, d = function(t2) {
            for (var e2 = 6, n2 = 0; --e2 >= 0; )
              n2 += c[e2], c[e2] = l(n2 / t2), n2 = n2 % t2 * 1e7;
          }, p = function() {
            for (var t2 = 6, e2 = ""; --t2 >= 0; )
              if ("" !== e2 || 0 === t2 || 0 !== c[t2]) {
                var n2 = String(c[t2]);
                e2 = "" === e2 ? n2 : e2 + a.call("0", 7 - n2.length) + n2;
              }
            return e2;
          }, h = function(t2, e2, n2) {
            return 0 === e2 ? n2 : e2 % 2 == 1 ? h(t2, e2 - 1, n2 * t2) : h(t2 * t2, e2 / 2, n2);
          };
          o(o.P + o.F * (!!s && ("0.000" !== 8e-5 .toFixed(3) || "1" !== 0.9 .toFixed(0) || "1.25" !== 1.255 .toFixed(2) || "1000000000000000128" !== 1000000000000000100 .toFixed(0)) || !n(11)(function() {
            s.call({});
          })), "Number", { toFixed: function(t2) {
            var e2, n2, o2, s2, l2 = i(this, u), c2 = r(t2), v = "", g = "0";
            if (c2 < 0 || c2 > 20)
              throw RangeError(u);
            if (l2 != l2)
              return "NaN";
            if (l2 <= -1e21 || l2 >= 1e21)
              return String(l2);
            if (l2 < 0 && (v = "-", l2 = -l2), l2 > 1e-21)
              if (n2 = (e2 = function(t3) {
                for (var e3 = 0, n3 = t3; n3 >= 4096; )
                  e3 += 12, n3 /= 4096;
                for (; n3 >= 2; )
                  e3 += 1, n3 /= 2;
                return e3;
              }(l2 * h(2, 69, 1)) - 69) < 0 ? l2 * h(2, -e2, 1) : l2 / h(2, e2, 1), n2 *= 4503599627370496, (e2 = 52 - e2) > 0) {
                for (f(0, n2), o2 = c2; o2 >= 7; )
                  f(1e7, 0), o2 -= 7;
                for (f(h(10, o2, 1), 0), o2 = e2 - 1; o2 >= 23; )
                  d(1 << 23), o2 -= 23;
                d(1 << o2), f(1, 1), d(2), g = p();
              } else
                f(0, n2), f(1 << -e2, 0), g = p() + a.call("0", c2);
            return g = c2 > 0 ? v + ((s2 = g.length) <= c2 ? "0." + a.call("0", c2 - s2) + g : g.slice(0, s2 - c2) + "." + g.slice(s2 - c2)) : v + g;
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(11), i = n(127), a = 1 .toPrecision;
          o(o.P + o.F * (r(function() {
            return "1" !== a.call(1, void 0);
          }) || !r(function() {
            a.call({});
          })), "Number", { toPrecision: function(t2) {
            var e2 = i(this, "Number#toPrecision: incorrect invocation!");
            return void 0 === t2 ? a.call(e2) : a.call(e2, t2);
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Number", { EPSILON: Math.pow(2, -52) });
        }, function(t, e, n) {
          var o = n(0), r = n(10).isFinite;
          o(o.S, "Number", { isFinite: function(t2) {
            return "number" == typeof t2 && r(t2);
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Number", { isInteger: n(128) });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Number", { isNaN: function(t2) {
            return t2 != t2;
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(128), i = Math.abs;
          o(o.S, "Number", { isSafeInteger: function(t2) {
            return r(t2) && i(t2) <= 9007199254740991;
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
        }, function(t, e, n) {
          var o = n(0), r = n(126);
          o(o.S + o.F * (Number.parseFloat != r), "Number", { parseFloat: r });
        }, function(t, e, n) {
          var o = n(0), r = n(125);
          o(o.S + o.F * (Number.parseInt != r), "Number", { parseInt: r });
        }, function(t, e, n) {
          var o = n(0), r = n(129), i = Math.sqrt, a = Math.acosh;
          o(o.S + o.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", { acosh: function(t2) {
            return (t2 = +t2) < 1 ? NaN : t2 > 9490626562425156e-8 ? Math.log(t2) + Math.LN2 : r(t2 - 1 + i(t2 - 1) * i(t2 + 1));
          } });
        }, function(t, e, n) {
          var o = n(0), r = Math.asinh;
          o(o.S + o.F * !(r && 1 / r(0) > 0), "Math", { asinh: function t2(e2) {
            return isFinite(e2 = +e2) && 0 != e2 ? e2 < 0 ? -t2(-e2) : Math.log(e2 + Math.sqrt(e2 * e2 + 1)) : e2;
          } });
        }, function(t, e, n) {
          var o = n(0), r = Math.atanh;
          o(o.S + o.F * !(r && 1 / r(-0) < 0), "Math", { atanh: function(t2) {
            return 0 == (t2 = +t2) ? t2 : Math.log((1 + t2) / (1 - t2)) / 2;
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(94);
          o(o.S, "Math", { cbrt: function(t2) {
            return r(t2 = +t2) * Math.pow(Math.abs(t2), 1 / 3);
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Math", { clz32: function(t2) {
            return (t2 >>>= 0) ? 31 - Math.floor(Math.log(t2 + 0.5) * Math.LOG2E) : 32;
          } });
        }, function(t, e, n) {
          var o = n(0), r = Math.exp;
          o(o.S, "Math", { cosh: function(t2) {
            return (r(t2 = +t2) + r(-t2)) / 2;
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(95);
          o(o.S + o.F * (r != Math.expm1), "Math", { expm1: r });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Math", { fround: n(236) });
        }, function(t, e, n) {
          var o = n(94), r = Math.pow, i = r(2, -52), a = r(2, -23), s = r(2, 127) * (2 - a), l = r(2, -126);
          t.exports = Math.fround || function(t2) {
            var e2, n2, r2 = Math.abs(t2), c = o(t2);
            return r2 < l ? c * (r2 / l / a + 1 / i - 1 / i) * l * a : (n2 = (e2 = (1 + a / i) * r2) - (e2 - r2)) > s || n2 != n2 ? c * (1 / 0) : c * n2;
          };
        }, function(t, e, n) {
          var o = n(0), r = Math.abs;
          o(o.S, "Math", { hypot: function(t2, e2) {
            for (var n2, o2, i = 0, a = 0, s = arguments.length, l = 0; a < s; )
              l < (n2 = r(arguments[a++])) ? (i = i * (o2 = l / n2) * o2 + 1, l = n2) : i += n2 > 0 ? (o2 = n2 / l) * o2 : n2;
            return l === 1 / 0 ? 1 / 0 : l * Math.sqrt(i);
          } });
        }, function(t, e, n) {
          var o = n(0), r = Math.imul;
          o(o.S + o.F * n(11)(function() {
            return -5 != r(4294967295, 5) || 2 != r.length;
          }), "Math", { imul: function(t2, e2) {
            var n2 = +t2, o2 = +e2, r2 = 65535 & n2, i = 65535 & o2;
            return 0 | r2 * i + ((65535 & n2 >>> 16) * i + r2 * (65535 & o2 >>> 16) << 16 >>> 0);
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Math", { log10: function(t2) {
            return Math.log(t2) * Math.LOG10E;
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Math", { log1p: n(129) });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Math", { log2: function(t2) {
            return Math.log(t2) / Math.LN2;
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Math", { sign: n(94) });
        }, function(t, e, n) {
          var o = n(0), r = n(95), i = Math.exp;
          o(o.S + o.F * n(11)(function() {
            return -2e-17 != !Math.sinh(-2e-17);
          }), "Math", { sinh: function(t2) {
            return Math.abs(t2 = +t2) < 1 ? (r(t2) - r(-t2)) / 2 : (i(t2 - 1) - i(-t2 - 1)) * (Math.E / 2);
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(95), i = Math.exp;
          o(o.S, "Math", { tanh: function(t2) {
            var e2 = r(t2 = +t2), n2 = r(-t2);
            return e2 == 1 / 0 ? 1 : n2 == 1 / 0 ? -1 : (e2 - n2) / (i(t2) + i(-t2));
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Math", { trunc: function(t2) {
            return (t2 > 0 ? Math.floor : Math.ceil)(t2);
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(47), i = String.fromCharCode, a = String.fromCodePoint;
          o(o.S + o.F * (!!a && 1 != a.length), "String", { fromCodePoint: function(t2) {
            for (var e2, n2 = [], o2 = arguments.length, a2 = 0; o2 > a2; ) {
              if (e2 = +arguments[a2++], r(e2, 1114111) !== e2)
                throw RangeError(e2 + " is not a valid code point");
              n2.push(e2 < 65536 ? i(e2) : i(55296 + ((e2 -= 65536) >> 10), e2 % 1024 + 56320));
            }
            return n2.join("");
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(28), i = n(16);
          o(o.S, "String", { raw: function(t2) {
            for (var e2 = r(t2.raw), n2 = i(e2.length), o2 = arguments.length, a = [], s = 0; n2 > s; )
              a.push(String(e2[s++])), s < o2 && a.push(String(arguments[s]));
            return a.join("");
          } });
        }, function(t, e, n) {
          "use strict";
          n(54)("trim", function(t2) {
            return function() {
              return t2(this, 3);
            };
          });
        }, function(t, e, n) {
          "use strict";
          var o = n(96)(true);
          n(97)(String, "String", function(t2) {
            this._t = String(t2), this._i = 0;
          }, function() {
            var t2, e2 = this._t, n2 = this._i;
            return n2 >= e2.length ? { value: void 0, done: true } : (t2 = o(e2, n2), this._i += t2.length, { value: t2, done: false });
          });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(96)(false);
          o(o.P, "String", { codePointAt: function(t2) {
            return r(this, t2);
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(16), i = n(98), a = "".endsWith;
          o(o.P + o.F * n(100)("endsWith"), "String", { endsWith: function(t2) {
            var e2 = i(this, t2, "endsWith"), n2 = arguments.length > 1 ? arguments[1] : void 0, o2 = r(e2.length), s = void 0 === n2 ? o2 : Math.min(r(n2), o2), l = String(t2);
            return a ? a.call(e2, l, s) : e2.slice(s - l.length, s) === l;
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(98);
          o(o.P + o.F * n(100)("includes"), "String", { includes: function(t2) {
            return !!~r(this, t2, "includes").indexOf(t2, arguments.length > 1 ? arguments[1] : void 0);
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.P, "String", { repeat: n(93) });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(16), i = n(98), a = "".startsWith;
          o(o.P + o.F * n(100)("startsWith"), "String", { startsWith: function(t2) {
            var e2 = i(this, t2, "startsWith"), n2 = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, e2.length)), o2 = String(t2);
            return a ? a.call(e2, o2, n2) : e2.slice(n2, n2 + o2.length) === o2;
          } });
        }, function(t, e, n) {
          "use strict";
          n(24)("anchor", function(t2) {
            return function(e2) {
              return t2(this, "a", "name", e2);
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("big", function(t2) {
            return function() {
              return t2(this, "big", "", "");
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("blink", function(t2) {
            return function() {
              return t2(this, "blink", "", "");
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("bold", function(t2) {
            return function() {
              return t2(this, "b", "", "");
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("fixed", function(t2) {
            return function() {
              return t2(this, "tt", "", "");
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("fontcolor", function(t2) {
            return function(e2) {
              return t2(this, "font", "color", e2);
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("fontsize", function(t2) {
            return function(e2) {
              return t2(this, "font", "size", e2);
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("italics", function(t2) {
            return function() {
              return t2(this, "i", "", "");
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("link", function(t2) {
            return function(e2) {
              return t2(this, "a", "href", e2);
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("small", function(t2) {
            return function() {
              return t2(this, "small", "", "");
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("strike", function(t2) {
            return function() {
              return t2(this, "strike", "", "");
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("sub", function(t2) {
            return function() {
              return t2(this, "sub", "", "");
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("sup", function(t2) {
            return function() {
              return t2(this, "sup", "", "");
            };
          });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Date", { now: function() {
            return new Date().getTime();
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(22), i = n(40);
          o(o.P + o.F * n(11)(function() {
            return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({ toISOString: function() {
              return 1;
            } });
          }), "Date", { toJSON: function(t2) {
            var e2 = r(this), n2 = i(e2);
            return "number" != typeof n2 || isFinite(n2) ? e2.toISOString() : null;
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(271);
          o(o.P + o.F * (Date.prototype.toISOString !== r), "Date", { toISOString: r });
        }, function(t, e, n) {
          "use strict";
          var o = n(11), r = Date.prototype.getTime, i = Date.prototype.toISOString, a = function(t2) {
            return t2 > 9 ? t2 : "0" + t2;
          };
          t.exports = o(function() {
            return "0385-07-25T07:06:39.999Z" != i.call(new Date(-50000000000001));
          }) || !o(function() {
            i.call(new Date(NaN));
          }) ? function() {
            if (!isFinite(r.call(this)))
              throw RangeError("Invalid time value");
            var t2 = this, e2 = t2.getUTCFullYear(), n2 = t2.getUTCMilliseconds(), o2 = e2 < 0 ? "-" : e2 > 9999 ? "+" : "";
            return o2 + ("00000" + Math.abs(e2)).slice(o2 ? -6 : -4) + "-" + a(t2.getUTCMonth() + 1) + "-" + a(t2.getUTCDate()) + "T" + a(t2.getUTCHours()) + ":" + a(t2.getUTCMinutes()) + ":" + a(t2.getUTCSeconds()) + "." + (n2 > 99 ? n2 : "0" + a(n2)) + "Z";
          } : i;
        }, function(t, e, n) {
          var o = Date.prototype, r = o.toString, i = o.getTime;
          new Date(NaN) + "" != "Invalid Date" && n(23)(o, "toString", function() {
            var t2 = i.call(this);
            return t2 == t2 ? r.call(this) : "Invalid Date";
          });
        }, function(t, e, n) {
          var o = n(15)("toPrimitive"), r = Date.prototype;
          o in r || n(27)(r, o, n(274));
        }, function(t, e, n) {
          "use strict";
          var o = n(12), r = n(40);
          t.exports = function(t2) {
            if ("string" !== t2 && "number" !== t2 && "default" !== t2)
              throw TypeError("Incorrect hint");
            return r(o(this), "number" != t2);
          };
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Array", { isArray: n(72) });
        }, function(t, e, n) {
          "use strict";
          var o = n(31), r = n(0), i = n(22), a = n(131), s = n(101), l = n(16), c = n(102), u = n(103);
          r(r.S + r.F * !n(73)(function(t2) {
            Array.from(t2);
          }), "Array", { from: function(t2) {
            var e2, n2, r2, f, d = i(t2), p = "function" == typeof this ? this : Array, h = arguments.length, v = h > 1 ? arguments[1] : void 0, g = void 0 !== v, y = 0, b = u(d);
            if (g && (v = o(v, h > 2 ? arguments[2] : void 0, 2)), null == b || p == Array && s(b))
              for (n2 = new p(e2 = l(d.length)); e2 > y; y++)
                c(n2, y, g ? v(d[y], y) : d[y]);
            else
              for (f = b.call(d), n2 = new p(); !(r2 = f.next()).done; y++)
                c(n2, y, g ? a(f, v, [r2.value, y], true) : r2.value);
            return n2.length = y, n2;
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(102);
          o(o.S + o.F * n(11)(function() {
            function t2() {
            }
            return !(Array.of.call(t2) instanceof t2);
          }), "Array", { of: function() {
            for (var t2 = 0, e2 = arguments.length, n2 = new ("function" == typeof this ? this : Array)(e2); e2 > t2; )
              r(n2, t2, arguments[t2++]);
            return n2.length = e2, n2;
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(28), i = [].join;
          o(o.P + o.F * (n(63) != Object || !n(29)(i)), "Array", { join: function(t2) {
            return i.call(r(this), void 0 === t2 ? "," : t2);
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(89), i = n(37), a = n(47), s = n(16), l = [].slice;
          o(o.P + o.F * n(11)(function() {
            r && l.call(r);
          }), "Array", { slice: function(t2, e2) {
            var n2 = s(this.length), o2 = i(this);
            if (e2 = void 0 === e2 ? n2 : e2, "Array" == o2)
              return l.call(this, t2, e2);
            for (var r2 = a(t2, n2), c = a(e2, n2), u = s(c - r2), f = new Array(u), d = 0; d < u; d++)
              f[d] = "String" == o2 ? this.charAt(r2 + d) : this[r2 + d];
            return f;
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(32), i = n(22), a = n(11), s = [].sort, l = [1, 2, 3];
          o(o.P + o.F * (a(function() {
            l.sort(void 0);
          }) || !a(function() {
            l.sort(null);
          }) || !n(29)(s)), "Array", { sort: function(t2) {
            return void 0 === t2 ? s.call(i(this)) : s.call(i(this), r(t2));
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(36)(0), i = n(29)([].forEach, true);
          o(o.P + o.F * !i, "Array", { forEach: function(t2) {
            return r(this, t2, arguments[1]);
          } });
        }, function(t, e, n) {
          var o = n(13), r = n(72), i = n(15)("species");
          t.exports = function(t2) {
            var e2;
            return r(t2) && ("function" != typeof (e2 = t2.constructor) || e2 !== Array && !r(e2.prototype) || (e2 = void 0), o(e2) && null === (e2 = e2[i]) && (e2 = void 0)), void 0 === e2 ? Array : e2;
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(36)(1);
          o(o.P + o.F * !n(29)([].map, true), "Array", { map: function(t2) {
            return r(this, t2, arguments[1]);
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(36)(2);
          o(o.P + o.F * !n(29)([].filter, true), "Array", { filter: function(t2) {
            return r(this, t2, arguments[1]);
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(36)(3);
          o(o.P + o.F * !n(29)([].some, true), "Array", { some: function(t2) {
            return r(this, t2, arguments[1]);
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(36)(4);
          o(o.P + o.F * !n(29)([].every, true), "Array", { every: function(t2) {
            return r(this, t2, arguments[1]);
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(133);
          o(o.P + o.F * !n(29)([].reduce, true), "Array", { reduce: function(t2) {
            return r(this, t2, arguments.length, arguments[1], false);
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(133);
          o(o.P + o.F * !n(29)([].reduceRight, true), "Array", { reduceRight: function(t2) {
            return r(this, t2, arguments.length, arguments[1], true);
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(70)(false), i = [].indexOf, a = !!i && 1 / [1].indexOf(1, -0) < 0;
          o(o.P + o.F * (a || !n(29)(i)), "Array", { indexOf: function(t2) {
            return a ? i.apply(this, arguments) || 0 : r(this, t2, arguments[1]);
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(28), i = n(33), a = n(16), s = [].lastIndexOf, l = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
          o(o.P + o.F * (l || !n(29)(s)), "Array", { lastIndexOf: function(t2) {
            if (l)
              return s.apply(this, arguments) || 0;
            var e2 = r(this), n2 = a(e2.length), o2 = n2 - 1;
            for (arguments.length > 1 && (o2 = Math.min(o2, i(arguments[1]))), o2 < 0 && (o2 = n2 + o2); o2 >= 0; o2--)
              if (o2 in e2 && e2[o2] === t2)
                return o2 || 0;
            return -1;
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.P, "Array", { copyWithin: n(134) }), n(51)("copyWithin");
        }, function(t, e, n) {
          var o = n(0);
          o(o.P, "Array", { fill: n(104) }), n(51)("fill");
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(36)(5), i = true;
          "find" in [] && Array(1).find(function() {
            i = false;
          }), o(o.P + o.F * i, "Array", { find: function(t2) {
            return r(this, t2, arguments.length > 1 ? arguments[1] : void 0);
          } }), n(51)("find");
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(36)(6), i = "findIndex", a = true;
          i in [] && Array(1)[i](function() {
            a = false;
          }), o(o.P + o.F * a, "Array", { findIndex: function(t2) {
            return r(this, t2, arguments.length > 1 ? arguments[1] : void 0);
          } }), n(51)(i);
        }, function(t, e, n) {
          n(56)("Array");
        }, function(t, e, n) {
          var o = n(10), r = n(92), i = n(19).f, a = n(49).f, s = n(99), l = n(74), c = o.RegExp, u = c, f = c.prototype, d = /a/g, p = /a/g, h = new c(d) !== d;
          if (n(18) && (!h || n(11)(function() {
            return p[n(15)("match")] = false, c(d) != d || c(p) == p || "/a/i" != c(d, "i");
          }))) {
            c = function(t2, e2) {
              var n2 = this instanceof c, o2 = s(t2), i2 = void 0 === e2;
              return !n2 && o2 && t2.constructor === c && i2 ? t2 : r(h ? new u(o2 && !i2 ? t2.source : t2, e2) : u((o2 = t2 instanceof c) ? t2.source : t2, o2 && i2 ? l.call(t2) : e2), n2 ? this : f, c);
            };
            for (var v = function(t2) {
              t2 in c || i(c, t2, { configurable: true, get: function() {
                return u[t2];
              }, set: function(e2) {
                u[t2] = e2;
              } });
            }, g = a(u), y = 0; g.length > y; )
              v(g[y++]);
            f.constructor = c, c.prototype = f, n(23)(o, "RegExp", c);
          }
          n(56)("RegExp");
        }, function(t, e, n) {
          "use strict";
          n(137);
          var o = n(12), r = n(74), i = n(18), a = /./.toString, s = function(t2) {
            n(23)(RegExp.prototype, "toString", t2, true);
          };
          n(11)(function() {
            return "/a/b" != a.call({ source: "a", flags: "b" });
          }) ? s(function() {
            var t2 = o(this);
            return "/".concat(t2.source, "/", "flags" in t2 ? t2.flags : !i && t2 instanceof RegExp ? r.call(t2) : void 0);
          }) : "toString" != a.name && s(function() {
            return a.call(this);
          });
        }, function(t, e, n) {
          "use strict";
          var o = n(12), r = n(16), i = n(107), a = n(75);
          n(76)("match", 1, function(t2, e2, n2, s) {
            return [function(n3) {
              var o2 = t2(this), r2 = null == n3 ? void 0 : n3[e2];
              return void 0 !== r2 ? r2.call(n3, o2) : new RegExp(n3)[e2](String(o2));
            }, function(t3) {
              var e3 = s(n2, t3, this);
              if (e3.done)
                return e3.value;
              var l = o(t3), c = String(this);
              if (!l.global)
                return a(l, c);
              var u = l.unicode;
              l.lastIndex = 0;
              for (var f, d = [], p = 0; null !== (f = a(l, c)); ) {
                var h = String(f[0]);
                d[p] = h, "" === h && (l.lastIndex = i(c, r(l.lastIndex), u)), p++;
              }
              return 0 === p ? null : d;
            }];
          });
        }, function(t, e, n) {
          "use strict";
          var o = n(12), r = n(22), i = n(16), a = n(33), s = n(107), l = n(75), c = Math.max, u = Math.min, f = Math.floor, d = /\$([$&`']|\d\d?|<[^>]*>)/g, p = /\$([$&`']|\d\d?)/g;
          n(76)("replace", 2, function(t2, e2, n2, h) {
            return [function(o2, r2) {
              var i2 = t2(this), a2 = null == o2 ? void 0 : o2[e2];
              return void 0 !== a2 ? a2.call(o2, i2, r2) : n2.call(String(i2), o2, r2);
            }, function(t3, e3) {
              var r2 = h(n2, t3, this, e3);
              if (r2.done)
                return r2.value;
              var f2 = o(t3), d2 = String(this), p2 = "function" == typeof e3;
              p2 || (e3 = String(e3));
              var g = f2.global;
              if (g) {
                var y = f2.unicode;
                f2.lastIndex = 0;
              }
              for (var b = []; ; ) {
                var m = l(f2, d2);
                if (null === m)
                  break;
                if (b.push(m), !g)
                  break;
                "" === String(m[0]) && (f2.lastIndex = s(d2, i(f2.lastIndex), y));
              }
              for (var k, x = "", w = 0, S = 0; S < b.length; S++) {
                m = b[S];
                for (var T = String(m[0]), E = c(u(a(m.index), d2.length), 0), B = [], C = 1; C < m.length; C++)
                  B.push(void 0 === (k = m[C]) ? k : String(k));
                var _ = m.groups;
                if (p2) {
                  var I = [T].concat(B, E, d2);
                  void 0 !== _ && I.push(_);
                  var O = String(e3.apply(void 0, I));
                } else
                  O = v(T, d2, E, B, _, e3);
                E >= w && (x += d2.slice(w, E) + O, w = E + T.length);
              }
              return x + d2.slice(w);
            }];
            function v(t3, e3, o2, i2, a2, s2) {
              var l2 = o2 + t3.length, c2 = i2.length, u2 = p;
              return void 0 !== a2 && (a2 = r(a2), u2 = d), n2.call(s2, u2, function(n3, r2) {
                var s3;
                switch (r2.charAt(0)) {
                  case "$":
                    return "$";
                  case "&":
                    return t3;
                  case "`":
                    return e3.slice(0, o2);
                  case "'":
                    return e3.slice(l2);
                  case "<":
                    s3 = a2[r2.slice(1, -1)];
                    break;
                  default:
                    var u3 = +r2;
                    if (0 === u3)
                      return n3;
                    if (u3 > c2) {
                      var d2 = f(u3 / 10);
                      return 0 === d2 ? n3 : d2 <= c2 ? void 0 === i2[d2 - 1] ? r2.charAt(1) : i2[d2 - 1] + r2.charAt(1) : n3;
                    }
                    s3 = i2[u3 - 1];
                }
                return void 0 === s3 ? "" : s3;
              });
            }
          });
        }, function(t, e, n) {
          "use strict";
          var o = n(12), r = n(122), i = n(75);
          n(76)("search", 1, function(t2, e2, n2, a) {
            return [function(n3) {
              var o2 = t2(this), r2 = null == n3 ? void 0 : n3[e2];
              return void 0 !== r2 ? r2.call(n3, o2) : new RegExp(n3)[e2](String(o2));
            }, function(t3) {
              var e3 = a(n2, t3, this);
              if (e3.done)
                return e3.value;
              var s = o(t3), l = String(this), c = s.lastIndex;
              r(c, 0) || (s.lastIndex = 0);
              var u = i(s, l);
              return r(s.lastIndex, c) || (s.lastIndex = c), null === u ? -1 : u.index;
            }];
          });
        }, function(t, e, n) {
          "use strict";
          var o = n(99), r = n(12), i = n(66), a = n(107), s = n(16), l = n(75), c = n(106), u = n(11), f = Math.min, d = [].push, p = "length", h = !u(function() {
            RegExp(4294967295, "y");
          });
          n(76)("split", 2, function(t2, e2, n2, u2) {
            var v;
            return v = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[p] || 2 != "ab".split(/(?:ab)*/)[p] || 4 != ".".split(/(.?)(.?)/)[p] || ".".split(/()()/)[p] > 1 || "".split(/.?/)[p] ? function(t3, e3) {
              var r2 = String(this);
              if (void 0 === t3 && 0 === e3)
                return [];
              if (!o(t3))
                return n2.call(r2, t3, e3);
              for (var i2, a2, s2, l2 = [], u3 = (t3.ignoreCase ? "i" : "") + (t3.multiline ? "m" : "") + (t3.unicode ? "u" : "") + (t3.sticky ? "y" : ""), f2 = 0, h2 = void 0 === e3 ? 4294967295 : e3 >>> 0, v2 = new RegExp(t3.source, u3 + "g"); (i2 = c.call(v2, r2)) && !((a2 = v2.lastIndex) > f2 && (l2.push(r2.slice(f2, i2.index)), i2[p] > 1 && i2.index < r2[p] && d.apply(l2, i2.slice(1)), s2 = i2[0][p], f2 = a2, l2[p] >= h2)); )
                v2.lastIndex === i2.index && v2.lastIndex++;
              return f2 === r2[p] ? !s2 && v2.test("") || l2.push("") : l2.push(r2.slice(f2)), l2[p] > h2 ? l2.slice(0, h2) : l2;
            } : "0".split(void 0, 0)[p] ? function(t3, e3) {
              return void 0 === t3 && 0 === e3 ? [] : n2.call(this, t3, e3);
            } : n2, [function(n3, o2) {
              var r2 = t2(this), i2 = null == n3 ? void 0 : n3[e2];
              return void 0 !== i2 ? i2.call(n3, r2, o2) : v.call(String(r2), n3, o2);
            }, function(t3, e3) {
              var o2 = u2(v, t3, this, e3, v !== n2);
              if (o2.done)
                return o2.value;
              var c2 = r(t3), d2 = String(this), p2 = i(c2, RegExp), g = c2.unicode, y = (c2.ignoreCase ? "i" : "") + (c2.multiline ? "m" : "") + (c2.unicode ? "u" : "") + (h ? "y" : "g"), b = new p2(h ? c2 : "^(?:" + c2.source + ")", y), m = void 0 === e3 ? 4294967295 : e3 >>> 0;
              if (0 === m)
                return [];
              if (0 === d2.length)
                return null === l(b, d2) ? [d2] : [];
              for (var k = 0, x = 0, w = []; x < d2.length; ) {
                b.lastIndex = h ? x : 0;
                var S, T = l(b, h ? d2 : d2.slice(x));
                if (null === T || (S = f(s(b.lastIndex + (h ? 0 : x)), d2.length)) === k)
                  x = a(d2, x, g);
                else {
                  if (w.push(d2.slice(k, x)), w.length === m)
                    return w;
                  for (var E = 1; E <= T.length - 1; E++)
                    if (w.push(T[E]), w.length === m)
                      return w;
                  x = k = S;
                }
              }
              return w.push(d2.slice(k)), w;
            }];
          });
        }, function(t, e, n) {
          var o = n(10), r = n(108).set, i = o.MutationObserver || o.WebKitMutationObserver, a = o.process, s = o.Promise, l = "process" == n(37)(a);
          t.exports = function() {
            var t2, e2, n2, c = function() {
              var o2, r2;
              for (l && (o2 = a.domain) && o2.exit(); t2; ) {
                r2 = t2.fn, t2 = t2.next;
                try {
                  r2();
                } catch (o3) {
                  throw t2 ? n2() : e2 = void 0, o3;
                }
              }
              e2 = void 0, o2 && o2.enter();
            };
            if (l)
              n2 = function() {
                a.nextTick(c);
              };
            else if (!i || o.navigator && o.navigator.standalone)
              if (s && s.resolve) {
                var u = s.resolve(void 0);
                n2 = function() {
                  u.then(c);
                };
              } else
                n2 = function() {
                  r.call(o, c);
                };
            else {
              var f = true, d = document.createTextNode("");
              new i(c).observe(d, { characterData: true }), n2 = function() {
                d.data = f = !f;
              };
            }
            return function(o2) {
              var r2 = { fn: o2, next: void 0 };
              e2 && (e2.next = r2), t2 || (t2 = r2, n2()), e2 = r2;
            };
          };
        }, function(t, e) {
          t.exports = function(t2) {
            try {
              return { e: false, v: t2() };
            } catch (t3) {
              return { e: true, v: t3 };
            }
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(141), r = n(52);
          t.exports = n(79)("Map", function(t2) {
            return function() {
              return t2(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, { get: function(t2) {
            var e2 = o.getEntry(r(this, "Map"), t2);
            return e2 && e2.v;
          }, set: function(t2, e2) {
            return o.def(r(this, "Map"), 0 === t2 ? 0 : t2, e2);
          } }, o, true);
        }, function(t, e, n) {
          "use strict";
          var o = n(141), r = n(52);
          t.exports = n(79)("Set", function(t2) {
            return function() {
              return t2(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, { add: function(t2) {
            return o.def(r(this, "Set"), t2 = 0 === t2 ? 0 : t2, t2);
          } }, o);
        }, function(t, e, n) {
          "use strict";
          var o, r = n(10), i = n(36)(0), a = n(23), s = n(41), l = n(121), c = n(142), u = n(13), f = n(52), d = n(52), p = !r.ActiveXObject && "ActiveXObject" in r, h = s.getWeak, v = Object.isExtensible, g = c.ufstore, y = function(t2) {
            return function() {
              return t2(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, b = { get: function(t2) {
            if (u(t2)) {
              var e2 = h(t2);
              return true === e2 ? g(f(this, "WeakMap")).get(t2) : e2 ? e2[this._i] : void 0;
            }
          }, set: function(t2, e2) {
            return c.def(f(this, "WeakMap"), t2, e2);
          } }, m = t.exports = n(79)("WeakMap", y, b, c, true, true);
          d && p && (l((o = c.getConstructor(y, "WeakMap")).prototype, b), s.NEED = true, i(["delete", "has", "get", "set"], function(t2) {
            var e2 = m.prototype, n2 = e2[t2];
            a(e2, t2, function(e3, r2) {
              if (u(e3) && !v(e3)) {
                this._f || (this._f = new o());
                var i2 = this._f[t2](e3, r2);
                return "set" == t2 ? this : i2;
              }
              return n2.call(this, e3, r2);
            });
          }));
        }, function(t, e, n) {
          "use strict";
          var o = n(142), r = n(52);
          n(79)("WeakSet", function(t2) {
            return function() {
              return t2(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, { add: function(t2) {
            return o.def(r(this, "WeakSet"), t2, true);
          } }, o, false, true);
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(80), i = n(109), a = n(12), s = n(47), l = n(16), c = n(13), u = n(10).ArrayBuffer, f = n(66), d = i.ArrayBuffer, p = i.DataView, h = r.ABV && u.isView, v = d.prototype.slice, g = r.VIEW;
          o(o.G + o.W + o.F * (u !== d), { ArrayBuffer: d }), o(o.S + o.F * !r.CONSTR, "ArrayBuffer", { isView: function(t2) {
            return h && h(t2) || c(t2) && g in t2;
          } }), o(o.P + o.U + o.F * n(11)(function() {
            return !new d(2).slice(1, void 0).byteLength;
          }), "ArrayBuffer", { slice: function(t2, e2) {
            if (void 0 !== v && void 0 === e2)
              return v.call(a(this), t2);
            for (var n2 = a(this).byteLength, o2 = s(t2, n2), r2 = s(void 0 === e2 ? n2 : e2, n2), i2 = new (f(this, d))(l(r2 - o2)), c2 = new p(this), u2 = new p(i2), h2 = 0; o2 < r2; )
              u2.setUint8(h2++, c2.getUint8(o2++));
            return i2;
          } }), n(56)("ArrayBuffer");
        }, function(t, e, n) {
          var o = n(0);
          o(o.G + o.W + o.F * !n(80).ABV, { DataView: n(109).DataView });
        }, function(t, e, n) {
          n(39)("Int8", 1, function(t2) {
            return function(e2, n2, o) {
              return t2(this, e2, n2, o);
            };
          });
        }, function(t, e, n) {
          n(39)("Uint8", 1, function(t2) {
            return function(e2, n2, o) {
              return t2(this, e2, n2, o);
            };
          });
        }, function(t, e, n) {
          n(39)("Uint8", 1, function(t2) {
            return function(e2, n2, o) {
              return t2(this, e2, n2, o);
            };
          }, true);
        }, function(t, e, n) {
          n(39)("Int16", 2, function(t2) {
            return function(e2, n2, o) {
              return t2(this, e2, n2, o);
            };
          });
        }, function(t, e, n) {
          n(39)("Uint16", 2, function(t2) {
            return function(e2, n2, o) {
              return t2(this, e2, n2, o);
            };
          });
        }, function(t, e, n) {
          n(39)("Int32", 4, function(t2) {
            return function(e2, n2, o) {
              return t2(this, e2, n2, o);
            };
          });
        }, function(t, e, n) {
          n(39)("Uint32", 4, function(t2) {
            return function(e2, n2, o) {
              return t2(this, e2, n2, o);
            };
          });
        }, function(t, e, n) {
          n(39)("Float32", 4, function(t2) {
            return function(e2, n2, o) {
              return t2(this, e2, n2, o);
            };
          });
        }, function(t, e, n) {
          n(39)("Float64", 8, function(t2) {
            return function(e2, n2, o) {
              return t2(this, e2, n2, o);
            };
          });
        }, function(t, e, n) {
          var o = n(0), r = n(32), i = n(12), a = (n(10).Reflect || {}).apply, s = Function.apply;
          o(o.S + o.F * !n(11)(function() {
            a(function() {
            });
          }), "Reflect", { apply: function(t2, e2, n2) {
            var o2 = r(t2), l = i(n2);
            return a ? a(o2, e2, l) : s.call(o2, e2, l);
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(48), i = n(32), a = n(12), s = n(13), l = n(11), c = n(123), u = (n(10).Reflect || {}).construct, f = l(function() {
            function t2() {
            }
            return !(u(function() {
            }, [], t2) instanceof t2);
          }), d = !l(function() {
            u(function() {
            });
          });
          o(o.S + o.F * (f || d), "Reflect", { construct: function(t2, e2) {
            i(t2), a(e2);
            var n2 = arguments.length < 3 ? t2 : i(arguments[2]);
            if (d && !f)
              return u(t2, e2, n2);
            if (t2 == n2) {
              switch (e2.length) {
                case 0:
                  return new t2();
                case 1:
                  return new t2(e2[0]);
                case 2:
                  return new t2(e2[0], e2[1]);
                case 3:
                  return new t2(e2[0], e2[1], e2[2]);
                case 4:
                  return new t2(e2[0], e2[1], e2[2], e2[3]);
              }
              var o2 = [null];
              return o2.push.apply(o2, e2), new (c.apply(t2, o2))();
            }
            var l2 = n2.prototype, p = r(s(l2) ? l2 : Object.prototype), h = Function.apply.call(t2, p, e2);
            return s(h) ? h : p;
          } });
        }, function(t, e, n) {
          var o = n(19), r = n(0), i = n(12), a = n(40);
          r(r.S + r.F * n(11)(function() {
            Reflect.defineProperty(o.f({}, 1, { value: 1 }), 1, { value: 2 });
          }), "Reflect", { defineProperty: function(t2, e2, n2) {
            i(t2), e2 = a(e2, true), i(n2);
            try {
              return o.f(t2, e2, n2), true;
            } catch (t3) {
              return false;
            }
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(34).f, i = n(12);
          o(o.S, "Reflect", { deleteProperty: function(t2, e2) {
            var n2 = r(i(t2), e2);
            return !(n2 && !n2.configurable) && delete t2[e2];
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(12), i = function(t2) {
            this._t = r(t2), this._i = 0;
            var e2, n2 = this._k = [];
            for (e2 in t2)
              n2.push(e2);
          };
          n(130)(i, "Object", function() {
            var t2, e2 = this._k;
            do {
              if (this._i >= e2.length)
                return { value: void 0, done: true };
            } while (!((t2 = e2[this._i++]) in this._t));
            return { value: t2, done: false };
          }), o(o.S, "Reflect", { enumerate: function(t2) {
            return new i(t2);
          } });
        }, function(t, e, n) {
          var o = n(34), r = n(50), i = n(26), a = n(0), s = n(13), l = n(12);
          a(a.S, "Reflect", { get: function t2(e2, n2) {
            var a2, c, u = arguments.length < 3 ? e2 : arguments[2];
            return l(e2) === u ? e2[n2] : (a2 = o.f(e2, n2)) ? i(a2, "value") ? a2.value : void 0 !== a2.get ? a2.get.call(u) : void 0 : s(c = r(e2)) ? t2(c, n2, u) : void 0;
          } });
        }, function(t, e, n) {
          var o = n(34), r = n(0), i = n(12);
          r(r.S, "Reflect", { getOwnPropertyDescriptor: function(t2, e2) {
            return o.f(i(t2), e2);
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(50), i = n(12);
          o(o.S, "Reflect", { getPrototypeOf: function(t2) {
            return r(i(t2));
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Reflect", { has: function(t2, e2) {
            return e2 in t2;
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(12), i = Object.isExtensible;
          o(o.S, "Reflect", { isExtensible: function(t2) {
            return r(t2), !i || i(t2);
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Reflect", { ownKeys: n(144) });
        }, function(t, e, n) {
          var o = n(0), r = n(12), i = Object.preventExtensions;
          o(o.S, "Reflect", { preventExtensions: function(t2) {
            r(t2);
            try {
              return i && i(t2), true;
            } catch (t3) {
              return false;
            }
          } });
        }, function(t, e, n) {
          var o = n(19), r = n(34), i = n(50), a = n(26), s = n(0), l = n(43), c = n(12), u = n(13);
          s(s.S, "Reflect", { set: function t2(e2, n2, s2) {
            var f, d, p = arguments.length < 4 ? e2 : arguments[3], h = r.f(c(e2), n2);
            if (!h) {
              if (u(d = i(e2)))
                return t2(d, n2, s2, p);
              h = l(0);
            }
            if (a(h, "value")) {
              if (false === h.writable || !u(p))
                return false;
              if (f = r.f(p, n2)) {
                if (f.get || f.set || false === f.writable)
                  return false;
                f.value = s2, o.f(p, n2, f);
              } else
                o.f(p, n2, l(0, s2));
              return true;
            }
            return void 0 !== h.set && (h.set.call(p, s2), true);
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(90);
          r && o(o.S, "Reflect", { setPrototypeOf: function(t2, e2) {
            r.check(t2, e2);
            try {
              return r.set(t2, e2), true;
            } catch (t3) {
              return false;
            }
          } });
        }, function(t, e, n) {
          n(334), t.exports = n(17).Array.includes;
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(70)(true);
          o(o.P, "Array", { includes: function(t2) {
            return r(this, t2, arguments.length > 1 ? arguments[1] : void 0);
          } }), n(51)("includes");
        }, function(t, e, n) {
          n(336), t.exports = n(17).Array.flatMap;
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(337), i = n(22), a = n(16), s = n(32), l = n(132);
          o(o.P, "Array", { flatMap: function(t2) {
            var e2, n2, o2 = i(this);
            return s(t2), e2 = a(o2.length), n2 = l(o2, 0), r(n2, o2, o2, e2, 0, 1, t2, arguments[1]), n2;
          } }), n(51)("flatMap");
        }, function(t, e, n) {
          "use strict";
          var o = n(72), r = n(13), i = n(16), a = n(31), s = n(15)("isConcatSpreadable");
          t.exports = function t2(e2, n2, l, c, u, f, d, p) {
            for (var h, v, g = u, y = 0, b = !!d && a(d, p, 3); y < c; ) {
              if (y in l) {
                if (h = b ? b(l[y], y, n2) : l[y], v = false, r(h) && (v = void 0 !== (v = h[s]) ? !!v : o(h)), v && f > 0)
                  g = t2(e2, n2, h, i(h.length), g, f - 1) - 1;
                else {
                  if (g >= 9007199254740991)
                    throw TypeError();
                  e2[g] = h;
                }
                g++;
              }
              y++;
            }
            return g;
          };
        }, function(t, e, n) {
          n(339), t.exports = n(17).String.padStart;
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(145), i = n(78), a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
          o(o.P + o.F * a, "String", { padStart: function(t2) {
            return r(this, t2, arguments.length > 1 ? arguments[1] : void 0, true);
          } });
        }, function(t, e, n) {
          n(341), t.exports = n(17).String.padEnd;
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(145), i = n(78), a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
          o(o.P + o.F * a, "String", { padEnd: function(t2) {
            return r(this, t2, arguments.length > 1 ? arguments[1] : void 0, false);
          } });
        }, function(t, e, n) {
          n(343), t.exports = n(17).String.trimLeft;
        }, function(t, e, n) {
          "use strict";
          n(54)("trimLeft", function(t2) {
            return function() {
              return t2(this, 1);
            };
          }, "trimStart");
        }, function(t, e, n) {
          n(345), t.exports = n(17).String.trimRight;
        }, function(t, e, n) {
          "use strict";
          n(54)("trimRight", function(t2) {
            return function() {
              return t2(this, 2);
            };
          }, "trimEnd");
        }, function(t, e, n) {
          n(347), t.exports = n(86).f("asyncIterator");
        }, function(t, e, n) {
          n(117)("asyncIterator");
        }, function(t, e, n) {
          n(349), t.exports = n(17).Object.getOwnPropertyDescriptors;
        }, function(t, e, n) {
          var o = n(0), r = n(144), i = n(28), a = n(34), s = n(102);
          o(o.S, "Object", { getOwnPropertyDescriptors: function(t2) {
            for (var e2, n2, o2 = i(t2), l = a.f, c = r(o2), u = {}, f = 0; c.length > f; )
              void 0 !== (n2 = l(o2, e2 = c[f++])) && s(u, e2, n2);
            return u;
          } });
        }, function(t, e, n) {
          n(351), t.exports = n(17).Object.values;
        }, function(t, e, n) {
          var o = n(0), r = n(146)(false);
          o(o.S, "Object", { values: function(t2) {
            return r(t2);
          } });
        }, function(t, e, n) {
          n(353), t.exports = n(17).Object.entries;
        }, function(t, e, n) {
          var o = n(0), r = n(146)(true);
          o(o.S, "Object", { entries: function(t2) {
            return r(t2);
          } });
        }, function(t, e, n) {
          "use strict";
          n(138), n(355), t.exports = n(17).Promise.finally;
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(17), i = n(10), a = n(66), s = n(140);
          o(o.P + o.R, "Promise", { finally: function(t2) {
            var e2 = a(this, r.Promise || i.Promise), n2 = "function" == typeof t2;
            return this.then(n2 ? function(n3) {
              return s(e2, t2()).then(function() {
                return n3;
              });
            } : t2, n2 ? function(n3) {
              return s(e2, t2()).then(function() {
                throw n3;
              });
            } : t2);
          } });
        }, function(t, e, n) {
          n(357), n(358), n(359), t.exports = n(17);
        }, function(t, e, n) {
          var o = n(10), r = n(0), i = n(78), a = [].slice, s = /MSIE .\./.test(i), l = function(t2) {
            return function(e2, n2) {
              var o2 = arguments.length > 2, r2 = !!o2 && a.call(arguments, 2);
              return t2(o2 ? function() {
                ("function" == typeof e2 ? e2 : Function(e2)).apply(this, r2);
              } : e2, n2);
            };
          };
          r(r.G + r.B + r.F * s, { setTimeout: l(o.setTimeout), setInterval: l(o.setInterval) });
        }, function(t, e, n) {
          var o = n(0), r = n(108);
          o(o.G + o.B, { setImmediate: r.set, clearImmediate: r.clear });
        }, function(t, e, n) {
          for (var o = n(105), r = n(46), i = n(23), a = n(10), s = n(27), l = n(55), c = n(15), u = c("iterator"), f = c("toStringTag"), d = l.Array, p = { CSSRuleList: true, CSSStyleDeclaration: false, CSSValueList: false, ClientRectList: false, DOMRectList: false, DOMStringList: false, DOMTokenList: true, DataTransferItemList: false, FileList: false, HTMLAllCollection: false, HTMLCollection: false, HTMLFormElement: false, HTMLSelectElement: false, MediaList: true, MimeTypeArray: false, NamedNodeMap: false, NodeList: true, PaintRequestList: false, Plugin: false, PluginArray: false, SVGLengthList: false, SVGNumberList: false, SVGPathSegList: false, SVGPointList: false, SVGStringList: false, SVGTransformList: false, SourceBufferList: false, StyleSheetList: true, TextTrackCueList: false, TextTrackList: false, TouchList: false }, h = r(p), v = 0; v < h.length; v++) {
            var g, y = h[v], b = p[y], m = a[y], k = m && m.prototype;
            if (k && (k[u] || s(k, u, d), k[f] || s(k, f, y), l[y] = d, b))
              for (g in o)
                k[g] || i(k, g, o[g], true);
          }
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(30), n(2), n(3), n(364), n(366), n(367), n(7)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u) {
            "use strict";
            var f = n(8), d = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = d(r2), i2 = d(i2), a = d(a), c = d(c), u = f(u);
            var p = function() {
              function t2(e2) {
                var n2 = this;
                (0, i2.default)(this, t2);
                var o3 = function() {
                };
                u.isObject(e2) && u.isFunction(e2.onReady) && (o3 = e2.onReady);
                var r3 = new c.default(e2);
                this.isReady = r3.isReady.then(function() {
                  n2.exportAPI(r3), o3();
                });
              }
              return (0, a.default)(t2, [{ key: "exportAPI", value: function(t3) {
                var e2 = this;
                ["configuration"].forEach(function(n2) {
                  e2[n2] = t3[n2];
                }), this.destroy = function() {
                  for (var n2 in Object.values(t3.moduleInstances).forEach(function(t4) {
                    u.isFunction(t4.destroy) && t4.destroy(), t4.listeners.removeAll();
                  }), t3 = null, e2)
                    Object.prototype.hasOwnProperty.call(e2, n2) && delete e2[n2];
                  Object.setPrototypeOf(e2, null);
                }, Object.setPrototypeOf(this, t3.moduleInstances.API.methods), delete this.exportAPI, Object.entries({ blocks: { clear: "clear", render: "render" }, caret: { focus: "focus" }, events: { on: "on", off: "off", emit: "emit" }, saver: { save: "save" } }).forEach(function(n2) {
                  var o3 = (0, r2.default)(n2, 2), i3 = o3[0], a2 = o3[1];
                  Object.entries(a2).forEach(function(n3) {
                    var o4 = (0, r2.default)(n3, 2), a3 = o4[0], s2 = o4[1];
                    e2[s2] = t3.moduleInstances.API.methods[i3][a3];
                  });
                });
              } }], [{ key: "version", get: function() {
                return "2.25.0";
              } }]), t2;
            }();
            o2.default = p, p.displayName = "EditorJS", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e) {
          t.exports = function(t2) {
            if (Array.isArray(t2))
              return t2;
          };
        }, function(t, e) {
          t.exports = function(t2, e2) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t2)) {
              var n = [], o = true, r = false, i = void 0;
              try {
                for (var a, s = t2[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), !e2 || n.length !== e2); o = true)
                  ;
              } catch (t3) {
                r = true, i = t3;
              } finally {
                try {
                  o || null == s.return || s.return();
                } finally {
                  if (r)
                    throw i;
                }
              }
              return n;
            }
          };
        }, function(t, e) {
          t.exports = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          };
        }, function(t, e, n) {
          (e = t.exports = function(...t2) {
            return r(...t2);
          }).__esModule = true;
          const o = n(365), r = o.default;
          Object.assign(e, o);
        }, function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.default = function() {
          }, e.revert = function() {
          };
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [], void 0 === (i = "function" == typeof (o = function() {
            "use strict";
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(t2) {
              for (var e2 = (this.document || this.ownerDocument).querySelectorAll(t2), n2 = e2.length; --n2 >= 0 && e2.item(n2) !== this; )
                ;
              return n2 > -1;
            }), Element.prototype.closest || (Element.prototype.closest = function(t2) {
              var e2 = this;
              if (!document.documentElement.contains(e2))
                return null;
              do {
                if (e2.matches(t2))
                  return e2;
                e2 = e2.parentElement || e2.parentNode;
              } while (null !== e2);
              return null;
            }), Element.prototype.prepend || (Element.prototype.prepend = function(t2) {
              var e2 = document.createDocumentFragment();
              Array.isArray(t2) || (t2 = [t2]), t2.forEach(function(t3) {
                var n2 = t3 instanceof Node;
                e2.appendChild(n2 ? t3 : document.createTextNode(t3));
              }), this.insertBefore(e2, this.firstChild);
            }), Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(t2) {
              t2 = 0 === arguments.length || !!t2;
              var e2 = this.parentNode, n2 = window.getComputedStyle(e2, null), o2 = parseInt(n2.getPropertyValue("border-top-width")), r2 = parseInt(n2.getPropertyValue("border-left-width")), i2 = this.offsetTop - e2.offsetTop < e2.scrollTop, a = this.offsetTop - e2.offsetTop + this.clientHeight - o2 > e2.scrollTop + e2.clientHeight, s = this.offsetLeft - e2.offsetLeft < e2.scrollLeft, l = this.offsetLeft - e2.offsetLeft + this.clientWidth - r2 > e2.scrollLeft + e2.clientWidth, c = i2 && !a;
              (i2 || a) && t2 && (e2.scrollTop = this.offsetTop - e2.offsetTop - e2.clientHeight / 2 - o2 + this.clientHeight / 2), (s || l) && t2 && (e2.scrollLeft = this.offsetLeft - e2.offsetLeft - e2.clientWidth / 2 - r2 + this.clientWidth / 2), (i2 || a || s || l) && !t2 && this.scrollIntoView(c);
            });
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(21), n(2), n(3), n(14), n(7), n(60), n(151), n(81)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d) {
            "use strict";
            var p = n(8), h = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = h(r2), i2 = h(i2), a = h(a), s = h(s), l = h(l), c = p(c), u = h(u), d = h(d);
            var v = n(375), g = [];
            v.keys().forEach(function(t2) {
              t2.match(/^\.\/[^_][\w/]*\.([tj])s$/) && g.push(v(t2));
            });
            var y = function() {
              function t2(e3) {
                var n3, o3, s2 = this;
                (0, a.default)(this, t2), this.moduleInstances = {}, this.eventsDispatcher = new d.default(), this.isReady = new Promise(function(t3, e4) {
                  n3 = t3, o3 = e4;
                }), Promise.resolve().then((0, i2.default)(r2.default.mark(function t3() {
                  return r2.default.wrap(function(t4) {
                    for (; ; )
                      switch (t4.prev = t4.next) {
                        case 0:
                          return s2.configuration = e3, t4.next = 3, s2.validate();
                        case 3:
                          return t4.next = 5, s2.init();
                        case 5:
                          return t4.next = 7, s2.start();
                        case 7:
                          c.logLabeled("I'm ready! (\uFF89\u25D5\u30EE\u25D5)\uFF89*:\uFF65\uFF9F\u2727", "log", "", "color: #E24A75"), setTimeout((0, i2.default)(r2.default.mark(function t5() {
                            var e4, o4, i3;
                            return r2.default.wrap(function(t6) {
                              for (; ; )
                                switch (t6.prev = t6.next) {
                                  case 0:
                                    return t6.next = 2, s2.render();
                                  case 2:
                                    s2.configuration.autofocus && (e4 = s2.moduleInstances, o4 = e4.BlockManager, (i3 = e4.Caret).setToBlock(o4.blocks[0], i3.positions.START), o4.highlightCurrentNode()), s2.moduleInstances.UI.removeLoader(), n3();
                                  case 5:
                                  case "end":
                                    return t6.stop();
                                }
                            }, t5);
                          })), 500);
                        case 9:
                        case "end":
                          return t4.stop();
                      }
                  }, t3);
                }))).catch(function(t3) {
                  c.log("Editor.js is not ready because of ".concat(t3), "error"), o3(t3);
                });
              }
              var e2, n2;
              return (0, s.default)(t2, [{ key: "validate", value: (n2 = (0, i2.default)(r2.default.mark(function t3() {
                var e3, n3, o3;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        if (e3 = this.config, n3 = e3.holderId, o3 = e3.holder, !n3 || !o3) {
                          t4.next = 3;
                          break;
                        }
                        throw Error("\xABholderId\xBB and \xABholder\xBB param can't assign at the same time.");
                      case 3:
                        if (!c.isString(o3) || l.default.get(o3)) {
                          t4.next = 5;
                          break;
                        }
                        throw Error("element with ID \xAB".concat(o3, "\xBB is missing. Pass correct holder's ID."));
                      case 5:
                        if (!o3 || !c.isObject(o3) || l.default.isElement(o3)) {
                          t4.next = 7;
                          break;
                        }
                        throw Error("\xABholder\xBB value must be an Element node");
                      case 7:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function() {
                return n2.apply(this, arguments);
              }) }, { key: "init", value: function() {
                this.constructModules(), this.configureModules();
              } }, { key: "start", value: (e2 = (0, i2.default)(r2.default.mark(function t3() {
                var e3, n3 = this;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return e3 = ["Tools", "UI", "BlockManager", "Paste", "BlockSelection", "RectangleSelection", "CrossBlockSelection", "ReadOnly"], t4.next = 3, e3.reduce(function(t5, e4) {
                          return t5.then((0, i2.default)(r2.default.mark(function t6() {
                            return r2.default.wrap(function(t7) {
                              for (; ; )
                                switch (t7.prev = t7.next) {
                                  case 0:
                                    return t7.prev = 0, t7.next = 3, n3.moduleInstances[e4].prepare();
                                  case 3:
                                    t7.next = 10;
                                    break;
                                  case 5:
                                    if (t7.prev = 5, t7.t0 = t7.catch(0), !(t7.t0 instanceof f.CriticalError)) {
                                      t7.next = 9;
                                      break;
                                    }
                                    throw new Error(t7.t0.message);
                                  case 9:
                                    c.log("Module ".concat(e4, " was skipped because of %o"), "warn", t7.t0);
                                  case 10:
                                  case "end":
                                    return t7.stop();
                                }
                            }, t6, null, [[0, 5]]);
                          })));
                        }, Promise.resolve());
                      case 3:
                      case "end":
                        return t4.stop();
                    }
                }, t3);
              })), function() {
                return e2.apply(this, arguments);
              }) }, { key: "render", value: function() {
                return this.moduleInstances.Renderer.render(this.config.data.blocks);
              } }, { key: "constructModules", value: function() {
                var t3 = this;
                g.forEach(function(e3) {
                  var n3 = c.isFunction(e3) ? e3 : e3.default;
                  try {
                    t3.moduleInstances[n3.displayName] = new n3({ config: t3.configuration, eventsDispatcher: t3.eventsDispatcher });
                  } catch (t4) {
                    c.log("Module ".concat(n3.displayName, " skipped because"), "error", t4);
                  }
                });
              } }, { key: "configureModules", value: function() {
                for (var t3 in this.moduleInstances)
                  Object.prototype.hasOwnProperty.call(this.moduleInstances, t3) && (this.moduleInstances[t3].state = this.getModulesDiff(t3));
              } }, { key: "getModulesDiff", value: function(t3) {
                var e3 = {};
                for (var n3 in this.moduleInstances)
                  n3 !== t3 && (e3[n3] = this.moduleInstances[n3]);
                return e3;
              } }, { key: "configuration", set: function(t3) {
                var e3, n3;
                c.isObject(t3) ? this.config = Object.assign({}, t3) : this.config = { holder: t3 }, c.deprecationAssert(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), null == this.config.holder && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = c.LogLevels.VERBOSE), c.setLogLevel(this.config.logLevel), c.deprecationAssert(Boolean(this.config.initialBlock), "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = void 0 !== this.config.minHeight ? this.config.minHeight : 300;
                var o3 = { type: this.config.defaultBlock, data: {} };
                this.config.placeholder = this.config.placeholder || false, this.config.sanitizer = this.config.sanitizer || { p: true, b: true, a: true }, this.config.hideToolbar = !!this.config.hideToolbar && this.config.hideToolbar, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || { blocks: [] }, this.config.onReady = this.config.onReady || function() {
                }, this.config.onChange = this.config.onChange || function() {
                }, this.config.inlineToolbar = void 0 === this.config.inlineToolbar || this.config.inlineToolbar, !c.isEmpty(this.config.data) && this.config.data.blocks && 0 !== this.config.data.blocks.length || (this.config.data = { blocks: [o3] }), this.config.readOnly = this.config.readOnly || false, (null === (e3 = this.config.i18n) || void 0 === e3 ? void 0 : e3.messages) && u.default.setDictionary(this.config.i18n.messages), this.config.i18n.direction = (null === (n3 = this.config.i18n) || void 0 === n3 ? void 0 : n3.direction) || "ltr";
              }, get: function() {
                return this.config;
              } }]), t2;
            }();
            o2.default = y, y.displayName = "Core", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o = n(149);
          t.exports = function(t2) {
            if (Array.isArray(t2))
              return o(t2);
          };
        }, function(t, e) {
          t.exports = function(t2) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t2))
              return Array.from(t2);
          };
        }, function(t, e) {
          t.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          };
        }, function(t, e) {
          t.exports = function(t2, e2, n) {
            return e2 in t2 ? Object.defineProperty(t2, e2, { value: n, enumerable: true, configurable: true, writable: true }) : t2[e2] = n, t2;
          };
        }, function(t, e) {
          t.exports = function(t2) {
            return -1 !== Function.toString.call(t2).indexOf("[native code]");
          };
        }, function(t, e, n) {
          var o = n(110), r = n(374);
          function i(e2, n2, a) {
            return r() ? t.exports = i = Reflect.construct : t.exports = i = function(t2, e3, n3) {
              var r2 = [null];
              r2.push.apply(r2, e3);
              var i2 = new (Function.bind.apply(t2, r2))();
              return n3 && o(i2, n3.prototype), i2;
            }, i.apply(null, arguments);
          }
          t.exports = i;
        }, function(t, e) {
          t.exports = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
              })), true;
            } catch (t2) {
              return false;
            }
          };
        }, function(t, e, n) {
          var o = { "./api": 82, "./api/": 82, "./api/blocks": 154, "./api/blocks.ts": 154, "./api/caret": 155, "./api/caret.ts": 155, "./api/events": 156, "./api/events.ts": 156, "./api/i18n": 157, "./api/i18n.ts": 157, "./api/index": 82, "./api/index.ts": 82, "./api/inlineToolbar": 158, "./api/inlineToolbar.ts": 158, "./api/listeners": 159, "./api/listeners.ts": 159, "./api/notifier": 160, "./api/notifier.ts": 160, "./api/readonly": 161, "./api/readonly.ts": 161, "./api/sanitizer": 162, "./api/sanitizer.ts": 162, "./api/saver": 163, "./api/saver.ts": 163, "./api/selection": 164, "./api/selection.ts": 164, "./api/styles": 165, "./api/styles.ts": 165, "./api/toolbar": 166, "./api/toolbar.ts": 166, "./api/tooltip": 167, "./api/tooltip.ts": 167, "./api/ui": 168, "./api/ui.ts": 168, "./blockEvents": 169, "./blockEvents.ts": 169, "./blockManager": 170, "./blockManager.ts": 170, "./blockSelection": 171, "./blockSelection.ts": 171, "./caret": 172, "./caret.ts": 172, "./crossBlockSelection": 173, "./crossBlockSelection.ts": 173, "./dragNDrop": 174, "./dragNDrop.ts": 174, "./modificationsObserver": 175, "./modificationsObserver.ts": 175, "./paste": 176, "./paste.ts": 176, "./readonly": 177, "./readonly.ts": 177, "./rectangleSelection": 178, "./rectangleSelection.ts": 178, "./renderer": 179, "./renderer.ts": 179, "./saver": 180, "./saver.ts": 180, "./toolbar": 83, "./toolbar/": 83, "./toolbar/blockSettings": 181, "./toolbar/blockSettings.ts": 181, "./toolbar/conversion": 182, "./toolbar/conversion.ts": 182, "./toolbar/index": 83, "./toolbar/index.ts": 83, "./toolbar/inline": 183, "./toolbar/inline.ts": 183, "./tools": 184, "./tools.ts": 184, "./ui": 186, "./ui.ts": 186 };
          function r(t2) {
            var e2 = i(t2);
            return n(e2);
          }
          function i(t2) {
            if (!n.o(o, t2)) {
              var e2 = new Error("Cannot find module '" + t2 + "'");
              throw e2.code = "MODULE_NOT_FOUND", e2;
            }
            return o[t2];
          }
          r.keys = function() {
            return Object.keys(o);
          }, r.resolve = i, t.exports = r, r.id = 375;
        }, function(t, e, n) {
          var o = n(4);
          t.exports = function(t2, e2) {
            for (; !Object.prototype.hasOwnProperty.call(t2, e2) && null !== (t2 = o(t2)); )
              ;
            return t2;
          };
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(378)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var l = function() {
              function t2() {
                (0, r2.default)(this, t2);
              }
              return (0, i2.default)(t2, [{ key: "show", value: function(t3) {
                a.default.show(t3);
              } }]), t2;
            }();
            o2.default = l, l.displayName = "Notifier", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          window, t.exports = function(t2) {
            var e2 = {};
            function n2(o) {
              if (e2[o])
                return e2[o].exports;
              var r = e2[o] = { i: o, l: false, exports: {} };
              return t2[o].call(r.exports, r, r.exports, n2), r.l = true, r.exports;
            }
            return n2.m = t2, n2.c = e2, n2.d = function(t3, e3, o) {
              n2.o(t3, e3) || Object.defineProperty(t3, e3, { enumerable: true, get: o });
            }, n2.r = function(t3) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t3, "__esModule", { value: true });
            }, n2.t = function(t3, e3) {
              if (1 & e3 && (t3 = n2(t3)), 8 & e3)
                return t3;
              if (4 & e3 && "object" == typeof t3 && t3 && t3.__esModule)
                return t3;
              var o = /* @__PURE__ */ Object.create(null);
              if (n2.r(o), Object.defineProperty(o, "default", { enumerable: true, value: t3 }), 2 & e3 && "string" != typeof t3)
                for (var r in t3)
                  n2.d(o, r, function(e4) {
                    return t3[e4];
                  }.bind(null, r));
              return o;
            }, n2.n = function(t3) {
              var e3 = t3 && t3.__esModule ? function() {
                return t3.default;
              } : function() {
                return t3;
              };
              return n2.d(e3, "a", e3), e3;
            }, n2.o = function(t3, e3) {
              return Object.prototype.hasOwnProperty.call(t3, e3);
            }, n2.p = "/", n2(n2.s = 0);
          }([function(t2, e2, n2) {
            "use strict";
            n2(1), t2.exports = function() {
              var t3 = n2(6), e3 = null;
              return { show: function(n3) {
                if (n3.message) {
                  !function() {
                    if (e3)
                      return true;
                    e3 = t3.getWrapper(), document.body.appendChild(e3);
                  }();
                  var o = null, r = n3.time || 8e3;
                  switch (n3.type) {
                    case "confirm":
                      o = t3.confirm(n3);
                      break;
                    case "prompt":
                      o = t3.prompt(n3);
                      break;
                    default:
                      o = t3.alert(n3), window.setTimeout(function() {
                        o.remove();
                      }, r);
                  }
                  e3.appendChild(o), o.classList.add("cdx-notify--bounce-in");
                }
              } };
            }();
          }, function(t2, e2, n2) {
            var o = n2(2);
            "string" == typeof o && (o = [[t2.i, o, ""]]), n2(4)(o, { hmr: true, transform: void 0, insertInto: void 0 }), o.locals && (t2.exports = o.locals);
          }, function(t2, e2, n2) {
            (t2.exports = n2(3)(false)).push([t2.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, ""]);
          }, function(t2, e2) {
            t2.exports = function(t3) {
              var e3 = [];
              return e3.toString = function() {
                return this.map(function(e4) {
                  var n2 = function(t4, e5) {
                    var n3, o = t4[1] || "", r = t4[3];
                    if (!r)
                      return o;
                    if (e5 && "function" == typeof btoa) {
                      var i = (n3 = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n3)))) + " */"), a = r.sources.map(function(t5) {
                        return "/*# sourceURL=" + r.sourceRoot + t5 + " */";
                      });
                      return [o].concat(a).concat([i]).join("\n");
                    }
                    return [o].join("\n");
                  }(e4, t3);
                  return e4[2] ? "@media " + e4[2] + "{" + n2 + "}" : n2;
                }).join("");
              }, e3.i = function(t4, n2) {
                "string" == typeof t4 && (t4 = [[null, t4, ""]]);
                for (var o = {}, r = 0; r < this.length; r++) {
                  var i = this[r][0];
                  "number" == typeof i && (o[i] = true);
                }
                for (r = 0; r < t4.length; r++) {
                  var a = t4[r];
                  "number" == typeof a[0] && o[a[0]] || (n2 && !a[2] ? a[2] = n2 : n2 && (a[2] = "(" + a[2] + ") and (" + n2 + ")"), e3.push(a));
                }
              }, e3;
            };
          }, function(t2, e2, n2) {
            var o, r, i = {}, a = (o = function() {
              return window && document && document.all && !window.atob;
            }, function() {
              return void 0 === r && (r = o.apply(this, arguments)), r;
            }), s = function(t3) {
              var e3 = {};
              return function(t4) {
                if ("function" == typeof t4)
                  return t4();
                if (void 0 === e3[t4]) {
                  var n3 = function(t5) {
                    return document.querySelector(t5);
                  }.call(this, t4);
                  if (window.HTMLIFrameElement && n3 instanceof window.HTMLIFrameElement)
                    try {
                      n3 = n3.contentDocument.head;
                    } catch (t5) {
                      n3 = null;
                    }
                  e3[t4] = n3;
                }
                return e3[t4];
              };
            }(), l = null, c = 0, u = [], f = n2(5);
            function d(t3, e3) {
              for (var n3 = 0; n3 < t3.length; n3++) {
                var o2 = t3[n3], r2 = i[o2.id];
                if (r2) {
                  r2.refs++;
                  for (var a2 = 0; a2 < r2.parts.length; a2++)
                    r2.parts[a2](o2.parts[a2]);
                  for (; a2 < o2.parts.length; a2++)
                    r2.parts.push(b(o2.parts[a2], e3));
                } else {
                  var s2 = [];
                  for (a2 = 0; a2 < o2.parts.length; a2++)
                    s2.push(b(o2.parts[a2], e3));
                  i[o2.id] = { id: o2.id, refs: 1, parts: s2 };
                }
              }
            }
            function p(t3, e3) {
              for (var n3 = [], o2 = {}, r2 = 0; r2 < t3.length; r2++) {
                var i2 = t3[r2], a2 = e3.base ? i2[0] + e3.base : i2[0], s2 = { css: i2[1], media: i2[2], sourceMap: i2[3] };
                o2[a2] ? o2[a2].parts.push(s2) : n3.push(o2[a2] = { id: a2, parts: [s2] });
              }
              return n3;
            }
            function h(t3, e3) {
              var n3 = s(t3.insertInto);
              if (!n3)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
              var o2 = u[u.length - 1];
              if ("top" === t3.insertAt)
                o2 ? o2.nextSibling ? n3.insertBefore(e3, o2.nextSibling) : n3.appendChild(e3) : n3.insertBefore(e3, n3.firstChild), u.push(e3);
              else if ("bottom" === t3.insertAt)
                n3.appendChild(e3);
              else {
                if ("object" != typeof t3.insertAt || !t3.insertAt.before)
                  throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var r2 = s(t3.insertInto + " " + t3.insertAt.before);
                n3.insertBefore(e3, r2);
              }
            }
            function v(t3) {
              if (null === t3.parentNode)
                return false;
              t3.parentNode.removeChild(t3);
              var e3 = u.indexOf(t3);
              e3 >= 0 && u.splice(e3, 1);
            }
            function g(t3) {
              var e3 = document.createElement("style");
              return void 0 === t3.attrs.type && (t3.attrs.type = "text/css"), y(e3, t3.attrs), h(t3, e3), e3;
            }
            function y(t3, e3) {
              Object.keys(e3).forEach(function(n3) {
                t3.setAttribute(n3, e3[n3]);
              });
            }
            function b(t3, e3) {
              var n3, o2, r2, i2;
              if (e3.transform && t3.css) {
                if (!(i2 = e3.transform(t3.css)))
                  return function() {
                  };
                t3.css = i2;
              }
              if (e3.singleton) {
                var a2 = c++;
                n3 = l || (l = g(e3)), o2 = x.bind(null, n3, a2, false), r2 = x.bind(null, n3, a2, true);
              } else
                t3.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n3 = function(t4) {
                  var e4 = document.createElement("link");
                  return void 0 === t4.attrs.type && (t4.attrs.type = "text/css"), t4.attrs.rel = "stylesheet", y(e4, t4.attrs), h(t4, e4), e4;
                }(e3), o2 = function(t4, e4, n4) {
                  var o3 = n4.css, r3 = n4.sourceMap, i3 = void 0 === e4.convertToAbsoluteUrls && r3;
                  (e4.convertToAbsoluteUrls || i3) && (o3 = f(o3)), r3 && (o3 += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r3)))) + " */");
                  var a3 = new Blob([o3], { type: "text/css" }), s2 = t4.href;
                  t4.href = URL.createObjectURL(a3), s2 && URL.revokeObjectURL(s2);
                }.bind(null, n3, e3), r2 = function() {
                  v(n3), n3.href && URL.revokeObjectURL(n3.href);
                }) : (n3 = g(e3), o2 = function(t4, e4) {
                  var n4 = e4.css, o3 = e4.media;
                  if (o3 && t4.setAttribute("media", o3), t4.styleSheet)
                    t4.styleSheet.cssText = n4;
                  else {
                    for (; t4.firstChild; )
                      t4.removeChild(t4.firstChild);
                    t4.appendChild(document.createTextNode(n4));
                  }
                }.bind(null, n3), r2 = function() {
                  v(n3);
                });
              return o2(t3), function(e4) {
                if (e4) {
                  if (e4.css === t3.css && e4.media === t3.media && e4.sourceMap === t3.sourceMap)
                    return;
                  o2(t3 = e4);
                } else
                  r2();
              };
            }
            t2.exports = function(t3, e3) {
              if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
                throw new Error("The style-loader cannot be used in a non-browser environment");
              (e3 = e3 || {}).attrs = "object" == typeof e3.attrs ? e3.attrs : {}, e3.singleton || "boolean" == typeof e3.singleton || (e3.singleton = a()), e3.insertInto || (e3.insertInto = "head"), e3.insertAt || (e3.insertAt = "bottom");
              var n3 = p(t3, e3);
              return d(n3, e3), function(t4) {
                for (var o2 = [], r2 = 0; r2 < n3.length; r2++) {
                  var a2 = n3[r2];
                  (s2 = i[a2.id]).refs--, o2.push(s2);
                }
                for (t4 && d(p(t4, e3), e3), r2 = 0; r2 < o2.length; r2++) {
                  var s2;
                  if (0 === (s2 = o2[r2]).refs) {
                    for (var l2 = 0; l2 < s2.parts.length; l2++)
                      s2.parts[l2]();
                    delete i[s2.id];
                  }
                }
              };
            };
            var m, k = (m = [], function(t3, e3) {
              return m[t3] = e3, m.filter(Boolean).join("\n");
            });
            function x(t3, e3, n3, o2) {
              var r2 = n3 ? "" : o2.css;
              if (t3.styleSheet)
                t3.styleSheet.cssText = k(e3, r2);
              else {
                var i2 = document.createTextNode(r2), a2 = t3.childNodes;
                a2[e3] && t3.removeChild(a2[e3]), a2.length ? t3.insertBefore(i2, a2[e3]) : t3.appendChild(i2);
              }
            }
          }, function(t2, e2) {
            t2.exports = function(t3) {
              var e3 = "undefined" != typeof window && window.location;
              if (!e3)
                throw new Error("fixUrls requires window.location");
              if (!t3 || "string" != typeof t3)
                return t3;
              var n2 = e3.protocol + "//" + e3.host, o = n2 + e3.pathname.replace(/\/[^\/]*$/, "/");
              return t3.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t4, e4) {
                var r, i = e4.trim().replace(/^"(.*)"$/, function(t5, e5) {
                  return e5;
                }).replace(/^'(.*)'$/, function(t5, e5) {
                  return e5;
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t4 : (r = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n2 + i : o + i.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")");
              });
            };
          }, function(t2, e2, n2) {
            "use strict";
            var o, r, i, a, s, l;
            t2.exports = (o = "cdx-notify", r = "cdx-notify__cross", i = "cdx-notify__button--confirm", a = "cdx-notify__button", s = "cdx-notify__btns-wrapper", { alert: l = function(t3) {
              var e3 = document.createElement("DIV"), n3 = document.createElement("DIV"), i2 = t3.message, a2 = t3.style;
              return e3.classList.add(o), a2 && e3.classList.add(o + "--" + a2), e3.innerHTML = i2, n3.classList.add(r), n3.addEventListener("click", e3.remove.bind(e3)), e3.appendChild(n3), e3;
            }, confirm: function(t3) {
              var e3 = l(t3), n3 = document.createElement("div"), o2 = document.createElement("button"), c = document.createElement("button"), u = e3.querySelector("." + r), f = t3.cancelHandler, d = t3.okHandler;
              return n3.classList.add(s), o2.innerHTML = t3.okText || "Confirm", c.innerHTML = t3.cancelText || "Cancel", o2.classList.add(a), c.classList.add(a), o2.classList.add(i), c.classList.add("cdx-notify__button--cancel"), f && "function" == typeof f && (c.addEventListener("click", f), u.addEventListener("click", f)), d && "function" == typeof d && o2.addEventListener("click", d), o2.addEventListener("click", e3.remove.bind(e3)), c.addEventListener("click", e3.remove.bind(e3)), n3.appendChild(o2), n3.appendChild(c), e3.appendChild(n3), e3;
            }, prompt: function(t3) {
              var e3 = l(t3), n3 = document.createElement("div"), o2 = document.createElement("button"), c = document.createElement("input"), u = e3.querySelector("." + r), f = t3.cancelHandler, d = t3.okHandler;
              return n3.classList.add(s), o2.innerHTML = t3.okText || "Ok", o2.classList.add(a), o2.classList.add(i), c.classList.add("cdx-notify__input"), t3.placeholder && c.setAttribute("placeholder", t3.placeholder), t3.default && (c.value = t3.default), t3.inputType && (c.type = t3.inputType), f && "function" == typeof f && u.addEventListener("click", f), d && "function" == typeof d && o2.addEventListener("click", function() {
                d(c.value);
              }), o2.addEventListener("click", e3.remove.bind(e3)), n3.appendChild(c), n3.appendChild(o2), e3.appendChild(n3), e3;
            }, getWrapper: function() {
              var t3 = document.createElement("DIV");
              return t3.classList.add("cdx-notifies"), t3;
            } });
          }]);
        }, function(t, e, n) {
          var o, r;
          void 0 === (r = "function" == typeof (o = function() {
            function t2(t3) {
              var e3 = t3.tags;
              if (!Object.keys(e3).map(function(t4) {
                return typeof e3[t4];
              }).every(function(t4) {
                return "object" === t4 || "boolean" === t4 || "function" === t4;
              }))
                throw new Error("The configuration was invalid");
              this.config = t3;
            }
            var e2 = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
            function n2(t3) {
              return -1 !== e2.indexOf(t3.nodeName);
            }
            var o2 = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
            function r2(t3) {
              return -1 !== o2.indexOf(t3.nodeName);
            }
            function i(t3, e3, n3) {
              return "function" == typeof t3.tags[e3] ? t3.tags[e3](n3) : t3.tags[e3];
            }
            function a(t3, e3) {
              return void 0 === e3 || "boolean" == typeof e3 && !e3;
            }
            function s(t3, e3, n3) {
              var o3 = t3.name.toLowerCase();
              return true !== e3 && ("function" == typeof e3[o3] ? !e3[o3](t3.value, n3) : void 0 === e3[o3] || false === e3[o3] || "string" == typeof e3[o3] && e3[o3] !== t3.value);
            }
            return t2.prototype.clean = function(t3) {
              const e3 = document.implementation.createHTMLDocument(), n3 = e3.createElement("div");
              return n3.innerHTML = t3, this._sanitize(e3, n3), n3.innerHTML;
            }, t2.prototype._sanitize = function(t3, e3) {
              var o3 = function(t4, e4) {
                return t4.createTreeWalker(e4, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT, null, false);
              }(t3, e3), l = o3.firstChild();
              if (l)
                do {
                  if (l.nodeType !== Node.TEXT_NODE) {
                    if (l.nodeType === Node.COMMENT_NODE) {
                      e3.removeChild(l), this._sanitize(t3, e3);
                      break;
                    }
                    var c, u = r2(l);
                    u && (c = Array.prototype.some.call(l.childNodes, n2));
                    var f = !!e3.parentNode, d = n2(e3) && n2(l) && f, p = l.nodeName.toLowerCase(), h = i(this.config, p, l);
                    if (u && c || a(0, h) || !this.config.keepNestedBlockElements && d) {
                      if ("SCRIPT" !== l.nodeName && "STYLE" !== l.nodeName)
                        for (; l.childNodes.length > 0; )
                          e3.insertBefore(l.childNodes[0], l);
                      e3.removeChild(l), this._sanitize(t3, e3);
                      break;
                    }
                    for (var v = 0; v < l.attributes.length; v += 1) {
                      var g = l.attributes[v];
                      s(g, h, l) && (l.removeAttribute(g.name), v -= 1);
                    }
                    this._sanitize(t3, l);
                  } else if ("" === l.data.trim() && (l.previousElementSibling && n2(l.previousElementSibling) || l.nextElementSibling && n2(l.nextElementSibling))) {
                    e3.removeChild(l), this._sanitize(t3, e3);
                    break;
                  }
                } while (l = o3.nextSibling());
            }, t2;
          }) ? o.call(e, n, e, t) : o) || (t.exports = r);
        }, function(t, e, n) {
          window, t.exports = function(t2) {
            var e2 = {};
            function n2(o) {
              if (e2[o])
                return e2[o].exports;
              var r = e2[o] = { i: o, l: false, exports: {} };
              return t2[o].call(r.exports, r, r.exports, n2), r.l = true, r.exports;
            }
            return n2.m = t2, n2.c = e2, n2.d = function(t3, e3, o) {
              n2.o(t3, e3) || Object.defineProperty(t3, e3, { enumerable: true, get: o });
            }, n2.r = function(t3) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t3, "__esModule", { value: true });
            }, n2.t = function(t3, e3) {
              if (1 & e3 && (t3 = n2(t3)), 8 & e3)
                return t3;
              if (4 & e3 && "object" == typeof t3 && t3 && t3.__esModule)
                return t3;
              var o = /* @__PURE__ */ Object.create(null);
              if (n2.r(o), Object.defineProperty(o, "default", { enumerable: true, value: t3 }), 2 & e3 && "string" != typeof t3)
                for (var r in t3)
                  n2.d(o, r, function(e4) {
                    return t3[e4];
                  }.bind(null, r));
              return o;
            }, n2.n = function(t3) {
              var e3 = t3 && t3.__esModule ? function() {
                return t3.default;
              } : function() {
                return t3;
              };
              return n2.d(e3, "a", e3), e3;
            }, n2.o = function(t3, e3) {
              return Object.prototype.hasOwnProperty.call(t3, e3);
            }, n2.p = "", n2(n2.s = 0);
          }([function(t2, e2, n2) {
            t2.exports = n2(1);
          }, function(t2, e2, n2) {
            "use strict";
            n2.r(e2), n2.d(e2, "default", function() {
              return o;
            });
            class o {
              constructor() {
                this.nodes = { wrapper: null, content: null }, this.showed = false, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => {
                  this.showed && this.hide(true);
                }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, { passive: true });
              }
              get CSS() {
                return { tooltip: "ct", tooltipContent: "ct__content", tooltipShown: "ct--shown", placement: { left: "ct--left", bottom: "ct--bottom", right: "ct--right", top: "ct--top" } };
              }
              show(t3, e3, n3) {
                this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
                const o2 = Object.assign({ placement: "bottom", marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, delay: 70, hidingDelay: 0 }, n3);
                if (o2.hidingDelay && (this.hidingDelay = o2.hidingDelay), this.nodes.content.innerHTML = "", "string" == typeof e3)
                  this.nodes.content.appendChild(document.createTextNode(e3));
                else {
                  if (!(e3 instanceof Node))
                    throw Error("[CodeX Tooltip] Wrong type of \xABcontent\xBB passed. It should be an instance of Node or String. But " + typeof e3 + " given.");
                  this.nodes.content.appendChild(e3);
                }
                switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), o2.placement) {
                  case "top":
                    this.placeTop(t3, o2);
                    break;
                  case "left":
                    this.placeLeft(t3, o2);
                    break;
                  case "right":
                    this.placeRight(t3, o2);
                    break;
                  case "bottom":
                  default:
                    this.placeBottom(t3, o2);
                }
                o2 && o2.delay ? this.showingTimeout = setTimeout(() => {
                  this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true;
                }, o2.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true);
              }
              hide(t3 = false) {
                if (this.hidingDelay && !t3)
                  return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(() => {
                    this.hide(true);
                  }, this.hidingDelay));
                this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = false, this.showingTimeout && clearTimeout(this.showingTimeout);
              }
              onHover(t3, e3, n3) {
                t3.addEventListener("mouseenter", () => {
                  this.show(t3, e3, n3);
                }), t3.addEventListener("mouseleave", () => {
                  this.hide();
                });
              }
              destroy() {
                this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
              }
              prepare() {
                this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
              }
              loadStyles() {
                const t3 = "codex-tooltips-style";
                if (document.getElementById(t3))
                  return;
                const e3 = n2(2), o2 = this.make("style", null, { textContent: e3.toString(), id: t3 });
                this.prepend(document.head, o2);
              }
              placeBottom(t3, e3) {
                const n3 = t3.getBoundingClientRect(), o2 = n3.left + t3.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, r = n3.bottom + window.pageYOffset + this.offsetTop + e3.marginTop;
                this.applyPlacement("bottom", o2, r);
              }
              placeTop(t3, e3) {
                const n3 = t3.getBoundingClientRect(), o2 = n3.left + t3.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, r = n3.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
                this.applyPlacement("top", o2, r);
              }
              placeLeft(t3, e3) {
                const n3 = t3.getBoundingClientRect(), o2 = n3.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - e3.marginLeft, r = n3.top + window.pageYOffset + t3.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                this.applyPlacement("left", o2, r);
              }
              placeRight(t3, e3) {
                const n3 = t3.getBoundingClientRect(), o2 = n3.right + this.offsetRight + e3.marginRight, r = n3.top + window.pageYOffset + t3.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                this.applyPlacement("right", o2, r);
              }
              applyPlacement(t3, e3, n3) {
                this.nodes.wrapper.classList.add(this.CSS.placement[t3]), this.nodes.wrapper.style.left = e3 + "px", this.nodes.wrapper.style.top = n3 + "px";
              }
              make(t3, e3 = null, n3 = {}) {
                const o2 = document.createElement(t3);
                Array.isArray(e3) ? o2.classList.add(...e3) : e3 && o2.classList.add(e3);
                for (const t4 in n3)
                  n3.hasOwnProperty(t4) && (o2[t4] = n3[t4]);
                return o2;
              }
              append(t3, e3) {
                Array.isArray(e3) ? e3.forEach((e4) => t3.appendChild(e4)) : t3.appendChild(e3);
              }
              prepend(t3, e3) {
                Array.isArray(e3) ? (e3 = e3.reverse()).forEach((e4) => t3.prepend(e4)) : t3.prepend(e3);
              }
            }
          }, function(t2, e2) {
            t2.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
          }]).default;
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(14), n(7), n(25)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l) {
            "use strict";
            var c = n(8), u = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = c(s), l = u(l);
            var f = function() {
              function t2(e2, n2) {
                (0, r2.default)(this, t2), this.cursor = -1, this.items = [], this.items = e2 || [], this.focusedCssClass = n2;
              }
              return (0, i2.default)(t2, [{ key: "setItems", value: function(t3) {
                this.items = t3;
              } }, { key: "next", value: function() {
                this.cursor = this.leafNodesAndReturnIndex(t2.directions.RIGHT);
              } }, { key: "previous", value: function() {
                this.cursor = this.leafNodesAndReturnIndex(t2.directions.LEFT);
              } }, { key: "dropCursor", value: function() {
                -1 !== this.cursor && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
              } }, { key: "leafNodesAndReturnIndex", value: function(e2) {
                var n2 = this;
                if (0 === this.items.length)
                  return this.cursor;
                var o3 = this.cursor;
                return -1 === o3 ? o3 = e2 === t2.directions.RIGHT ? -1 : 0 : this.items[o3].classList.remove(this.focusedCssClass), o3 = e2 === t2.directions.RIGHT ? (o3 + 1) % this.items.length : (this.items.length + o3 - 1) % this.items.length, a.default.canSetCaret(this.items[o3]) && s.delay(function() {
                  return l.default.setCursor(n2.items[o3]);
                }, 50)(), this.items[o3].classList.add(this.focusedCssClass), o3;
              } }, { key: "currentItem", get: function() {
                return -1 === this.cursor ? null : this.items[this.cursor];
              } }]), t2;
            }();
            o2.default = f, f.displayName = "DomIterator", f.directions = { RIGHT: "right", LEFT: "left" }, t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(7), n(14), n(61)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l) {
            "use strict";
            var c = n(8), u = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = c(a), s = u(s);
            var f = function() {
              function t2(e2) {
                (0, r2.default)(this, t2), this.blocks = [], this.workingArea = e2;
              }
              return (0, i2.default)(t2, [{ key: "push", value: function(t3) {
                this.blocks.push(t3), this.insertToDOM(t3);
              } }, { key: "swap", value: function(t3, e2) {
                var n2 = this.blocks[e2];
                s.default.swap(this.blocks[t3].holder, n2.holder), this.blocks[e2] = this.blocks[t3], this.blocks[t3] = n2;
              } }, { key: "move", value: function(t3, e2) {
                var n2 = this.blocks.splice(e2, 1)[0], o3 = t3 - 1, r3 = Math.max(0, o3), i3 = this.blocks[r3];
                t3 > 0 ? this.insertToDOM(n2, "afterend", i3) : this.insertToDOM(n2, "beforebegin", i3), this.blocks.splice(t3, 0, n2);
                var a2 = this.composeBlockEvent("move", { fromIndex: e2, toIndex: t3 });
                n2.call(l.BlockToolAPI.MOVED, a2);
              } }, { key: "insert", value: function(t3, e2) {
                var n2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (this.length) {
                  t3 > this.length && (t3 = this.length), n2 && (this.blocks[t3].holder.remove(), this.blocks[t3].call(l.BlockToolAPI.REMOVED));
                  var o3 = n2 ? 1 : 0;
                  if (this.blocks.splice(t3, o3, e2), t3 > 0) {
                    var r3 = this.blocks[t3 - 1];
                    this.insertToDOM(e2, "afterend", r3);
                  } else {
                    var i3 = this.blocks[t3 + 1];
                    i3 ? this.insertToDOM(e2, "beforebegin", i3) : this.insertToDOM(e2);
                  }
                } else
                  this.push(e2);
              } }, { key: "remove", value: function(t3) {
                isNaN(t3) && (t3 = this.length - 1), this.blocks[t3].holder.remove(), this.blocks[t3].call(l.BlockToolAPI.REMOVED), this.blocks.splice(t3, 1);
              } }, { key: "removeAll", value: function() {
                this.workingArea.innerHTML = "", this.blocks.forEach(function(t3) {
                  return t3.call(l.BlockToolAPI.REMOVED);
                }), this.blocks.length = 0;
              } }, { key: "insertAfter", value: function(t3, e2) {
                var n2 = this.blocks.indexOf(t3);
                this.insert(n2 + 1, e2);
              } }, { key: "get", value: function(t3) {
                return this.blocks[t3];
              } }, { key: "indexOf", value: function(t3) {
                return this.blocks.indexOf(t3);
              } }, { key: "insertToDOM", value: function(t3, e2, n2) {
                e2 ? n2.holder.insertAdjacentElement(e2, t3.holder) : this.workingArea.appendChild(t3.holder), t3.call(l.BlockToolAPI.RENDERED);
              } }, { key: "composeBlockEvent", value: function(t3, e2) {
                return new CustomEvent(t3, { detail: e2 });
              } }, { key: "length", get: function() {
                return this.blocks.length;
              } }, { key: "array", get: function() {
                return this.blocks;
              } }, { key: "nodes", get: function() {
                return a.array(this.workingArea.children);
              } }], [{ key: "set", value: function(t3, e2, n2) {
                return isNaN(Number(e2)) ? (Reflect.set(t3, e2, n2), true) : (t3.insert(+e2, n2), true);
              } }, { key: "get", value: function(t3, e2) {
                return isNaN(Number(e2)) ? Reflect.get(t3, e2) : t3.get(+e2);
              } }]), t2;
            }();
            o2.default = f, f.displayName = "Blocks", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e], void 0 === (i = "function" == typeof (o = function(t2) {
            "use strict";
            var e2;
            Object.defineProperty(t2, "__esModule", { value: true }), t2.BlockMutationType = void 0, t2.BlockMutationType = e2, function(t3) {
              t3.Added = "block-added", t3.Removed = "block-removed", t3.Moved = "block-moved", t3.Changed = "block-changed";
            }(e2 || (t2.BlockMutationType = e2 = {}));
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          window, t.exports = function(t2) {
            var e2 = {};
            function n2(o) {
              if (e2[o])
                return e2[o].exports;
              var r = e2[o] = { i: o, l: false, exports: {} };
              return t2[o].call(r.exports, r, r.exports, n2), r.l = true, r.exports;
            }
            return n2.m = t2, n2.c = e2, n2.d = function(t3, e3, o) {
              n2.o(t3, e3) || Object.defineProperty(t3, e3, { enumerable: true, get: o });
            }, n2.r = function(t3) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t3, "__esModule", { value: true });
            }, n2.t = function(t3, e3) {
              if (1 & e3 && (t3 = n2(t3)), 8 & e3)
                return t3;
              if (4 & e3 && "object" == typeof t3 && t3 && t3.__esModule)
                return t3;
              var o = /* @__PURE__ */ Object.create(null);
              if (n2.r(o), Object.defineProperty(o, "default", { enumerable: true, value: t3 }), 2 & e3 && "string" != typeof t3)
                for (var r in t3)
                  n2.d(o, r, function(e4) {
                    return t3[e4];
                  }.bind(null, r));
              return o;
            }, n2.n = function(t3) {
              var e3 = t3 && t3.__esModule ? function() {
                return t3.default;
              } : function() {
                return t3;
              };
              return n2.d(e3, "a", e3), e3;
            }, n2.o = function(t3, e3) {
              return Object.prototype.hasOwnProperty.call(t3, e3);
            }, n2.p = "", n2(n2.s = 0);
          }([function(t2, e2, n2) {
            "use strict";
            function o(t3, e3) {
              for (var n3 = 0; n3 < e3.length; n3++) {
                var o2 = e3[n3];
                o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t3, o2.key, o2);
              }
            }
            function r(t3, e3, n3) {
              return e3 && o(t3.prototype, e3), n3 && o(t3, n3), t3;
            }
            n2.r(e2);
            var i = function() {
              function t3(e3) {
                var n3 = this;
                !function(t4, e4) {
                  if (!(t4 instanceof e4))
                    throw new TypeError("Cannot call a class as a function");
                }(this, t3), this.commands = {}, this.keys = {}, this.name = e3.name, this.parseShortcutName(e3.name), this.element = e3.on, this.callback = e3.callback, this.executeShortcut = function(t4) {
                  n3.execute(t4);
                }, this.element.addEventListener("keydown", this.executeShortcut, false);
              }
              return r(t3, null, [{ key: "supportedCommands", get: function() {
                return { SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"] };
              } }, { key: "keyCodes", get: function() {
                return { 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, BACKSPACE: 8, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INSERT: 45, DELETE: 46 };
              } }]), r(t3, [{ key: "parseShortcutName", value: function(e3) {
                e3 = e3.split("+");
                for (var n3 = 0; n3 < e3.length; n3++) {
                  e3[n3] = e3[n3].toUpperCase();
                  var o2 = false;
                  for (var r2 in t3.supportedCommands)
                    if (t3.supportedCommands[r2].includes(e3[n3])) {
                      o2 = this.commands[r2] = true;
                      break;
                    }
                  o2 || (this.keys[e3[n3]] = true);
                }
                for (var i2 in t3.supportedCommands)
                  this.commands[i2] || (this.commands[i2] = false);
              } }, { key: "execute", value: function(e3) {
                var n3, o2 = { CMD: e3.ctrlKey || e3.metaKey, SHIFT: e3.shiftKey, ALT: e3.altKey }, r2 = true;
                for (n3 in this.commands)
                  this.commands[n3] !== o2[n3] && (r2 = false);
                var i2, a = true;
                for (i2 in this.keys)
                  a = a && e3.keyCode === t3.keyCodes[i2];
                r2 && a && this.callback(e3);
              } }, { key: "remove", value: function() {
                this.element.removeEventListener("keydown", this.executeShortcut);
              } }]), t3;
            }();
            e2.default = i;
          }]).default;
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(21), n(2), n(3), n(113), n(5), n(6), n(4), n(59), n(7), n(61), n(115), n(81), n(386), n(60), n(84)], void 0 === (i = "function" == typeof (o = function(t2, e2, o2, r2, i2, a, s, l, c, u, f, d, p, h, v, g, y) {
            "use strict";
            var b = n(8), m = n(1);
            function k() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t3) {
                return false;
              }
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.default = t2.ToolboxEvent = void 0, e2 = m(e2), o2 = m(o2), r2 = m(r2), i2 = m(i2), a = m(a), s = m(s), l = m(l), c = m(c), u = m(u), f = b(f), p = m(p), h = m(h), v = b(v), g = m(g);
            var x, w = function(t3, e3, n2, o3) {
              var r3, i3 = arguments.length, a2 = i3 < 3 ? e3 : null === o3 ? o3 = Object.getOwnPropertyDescriptor(e3, n2) : o3;
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, u.default)(Reflect)) && "function" == typeof Reflect.decorate)
                a2 = Reflect.decorate(t3, e3, n2, o3);
              else
                for (var s2 = t3.length - 1; s2 >= 0; s2--)
                  (r3 = t3[s2]) && (a2 = (i3 < 3 ? r3(a2) : i3 > 3 ? r3(e3, n2, a2) : r3(e3, n2)) || a2);
              return i3 > 3 && a2 && Object.defineProperty(e3, n2, a2), a2;
            };
            t2.ToolboxEvent = x, function(t3) {
              t3.Opened = "toolbox-opened", t3.Closed = "toolbox-closed", t3.BlockAdded = "toolbox-block-added";
            }(x || (t2.ToolboxEvent = x = {}));
            var S = function(t3) {
              (0, s.default)(b2, t3);
              var n2, u2, h2 = (n2 = b2, function() {
                var t4, e3 = (0, c.default)(n2);
                if (k()) {
                  var o3 = (0, c.default)(this).constructor;
                  t4 = Reflect.construct(e3, arguments, o3);
                } else
                  t4 = e3.apply(this, arguments);
                return (0, l.default)(this, t4);
              });
              function b2(t4) {
                var e3, n3 = t4.api, o3 = t4.tools, i3 = t4.i18nLabels;
                return (0, r2.default)(this, b2), (e3 = h2.call(this)).opened = false, e3.nodes = { toolbox: null }, e3.clickListenerId = null, e3.onOverlayClicked = function() {
                  e3.close();
                }, e3.api = n3, e3.tools = o3, e3.i18nLabels = i3, e3;
              }
              return (0, i2.default)(b2, [{ key: "make", value: function() {
                return this.popover = new v.default({ className: b2.CSS.toolbox, searchable: true, filterLabel: this.i18nLabels.filter, nothingFoundLabel: this.i18nLabels.nothingFound, items: this.toolboxItemsToBeDisplayed }), this.popover.on(v.PopoverEvent.OverlayClicked, this.onOverlayClicked), this.enableShortcuts(), this.nodes.toolbox = this.popover.getElement(), this.nodes.toolbox;
              } }, { key: "hasFocus", value: function() {
                return this.popover.hasFocus();
              } }, { key: "destroy", value: function() {
                (0, a.default)((0, c.default)(b2.prototype), "destroy", this).call(this), this.nodes && this.nodes.toolbox && (this.nodes.toolbox.remove(), this.nodes.toolbox = null), this.api.listeners.offById(this.clickListenerId), this.removeAllShortcuts(), this.popover.off(v.PopoverEvent.OverlayClicked, this.onOverlayClicked);
              } }, { key: "toolButtonActivated", value: function(t4, e3) {
                this.insertNewBlock(t4, e3);
              } }, { key: "open", value: function() {
                this.isEmpty || (this.shouldOpenPopoverBottom || (this.nodes.toolbox.style.setProperty("--popover-height", this.popover.calculateHeight() + "px"), this.nodes.toolbox.classList.add(b2.CSS.toolboxOpenedTop)), this.popover.show(), this.opened = true, this.emit(x.Opened));
              } }, { key: "close", value: function() {
                this.popover.hide(), this.opened = false, this.nodes.toolbox.classList.remove(b2.CSS.toolboxOpenedTop), this.emit(x.Closed);
              } }, { key: "toggle", value: function() {
                this.opened ? this.close() : this.open();
              } }, { key: "areToolboxSettingsValid", value: function(t4, e3) {
                return !(!t4 || t4 && !t4.icon && (f.log("Toolbar icon is missed. Tool %o skipped", "warn", e3), 1));
              } }, { key: "enableShortcuts", value: function() {
                var t4 = this;
                this.toolsToBeDisplayed.forEach(function(e3) {
                  var n3 = e3.shortcut;
                  n3 && t4.enableShortcutForTool(e3.name, n3);
                });
              } }, { key: "enableShortcutForTool", value: function(t4, e3) {
                var n3 = this;
                p.default.add({ name: e3, on: this.api.ui.nodes.redactor, handler: function(e4) {
                  e4.preventDefault(), n3.insertNewBlock(t4);
                } });
              } }, { key: "removeAllShortcuts", value: function() {
                var t4 = this;
                this.toolsToBeDisplayed.forEach(function(e3) {
                  var n3 = e3.shortcut;
                  n3 && p.default.remove(t4.api.ui.nodes.redactor, n3);
                });
              } }, { key: "insertNewBlock", value: (u2 = (0, o2.default)(e2.default.mark(function t4(n3, o3) {
                var r3, i3, a2, s2, l2, c2;
                return e2.default.wrap(function(t5) {
                  for (; ; )
                    switch (t5.prev = t5.next) {
                      case 0:
                        if (r3 = this.api.blocks.getCurrentBlockIndex(), i3 = this.api.blocks.getBlockByIndex(r3)) {
                          t5.next = 4;
                          break;
                        }
                        return t5.abrupt("return");
                      case 4:
                        if (a2 = i3.isEmpty ? r3 : r3 + 1, !o3) {
                          t5.next = 10;
                          break;
                        }
                        return t5.next = 8, this.api.blocks.composeBlockData(n3);
                      case 8:
                        l2 = t5.sent, s2 = Object.assign(l2, o3);
                      case 10:
                        (c2 = this.api.blocks.insert(n3, s2, void 0, a2, void 0, i3.isEmpty)).call(d.BlockToolAPI.APPEND_CALLBACK), this.api.caret.setToBlock(a2), this.emit(x.BlockAdded, { block: c2 }), this.api.toolbar.close();
                      case 15:
                      case "end":
                        return t5.stop();
                    }
                }, t4, this);
              })), function(t4, e3) {
                return u2.apply(this, arguments);
              }) }, { key: "isEmpty", get: function() {
                return 0 === this.toolsToBeDisplayed.length;
              } }, { key: "shouldOpenPopoverBottom", get: function() {
                var t4 = this.nodes.toolbox.getBoundingClientRect(), e3 = this.api.ui.nodes.redactor.getBoundingClientRect(), n3 = this.popover.calculateHeight(), o3 = t4.top + n3, r3 = t4.top - n3, i3 = Math.min(window.innerHeight, e3.bottom);
                return r3 < e3.top || o3 <= i3;
              } }, { key: "toolsToBeDisplayed", get: function() {
                var t4 = this;
                return Array.from(this.tools.values()).reduce(function(e3, n3) {
                  var o3 = n3.toolbox;
                  if (o3) {
                    var r3 = o3.filter(function(e4) {
                      return t4.areToolboxSettingsValid(e4, n3.name);
                    });
                    e3.push(Object.assign(Object.assign({}, n3), { toolbox: r3 }));
                  }
                  return e3;
                }, []);
              } }, { key: "toolboxItemsToBeDisplayed", get: function() {
                var t4 = this, e3 = function(e4, n3) {
                  return { icon: e4.icon, label: g.default.t(y.I18nInternalNS.toolNames, e4.title || f.capitalize(n3.name)), name: n3.name, onClick: function(o3) {
                    t4.toolButtonActivated(n3.name, e4.data);
                  }, secondaryLabel: n3.shortcut ? f.beautifyShortcut(n3.shortcut) : "" };
                };
                return this.toolsToBeDisplayed.reduce(function(t5, n3) {
                  return Array.isArray(n3.toolbox) ? n3.toolbox.forEach(function(o3) {
                    t5.push(e3(o3, n3));
                  }) : t5.push(e3(n3.toolbox, n3)), t5;
                }, []);
              } }], [{ key: "CSS", get: function() {
                return { toolbox: "ce-toolbox", toolboxOpenedTop: "ce-toolbox--opened-top" };
              } }]), b2;
            }(h.default);
            t2.default = S, S.displayName = "Toolbox", w([f.cacheable], S.prototype, "toolsToBeDisplayed", null), w([f.cacheable], S.prototype, "toolboxItemsToBeDisplayed", null);
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(59), n(14), n(111), n(62), n(387), n(81), n(7), n(388)], void 0 === (i = "function" == typeof (o = function(t2, e2, o2, r2, i2, a, s, l, c, u, f, d, p, h) {
            "use strict";
            var v = n(1);
            function g() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t3) {
                return false;
              }
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.default = t2.PopoverEvent = void 0, e2 = v(e2), o2 = v(o2), r2 = v(r2), i2 = v(i2), a = v(a), s = v(s), l = v(l), c = v(c), u = v(u), f = v(f), d = v(d), h = v(h);
            var y, b = function(t3, e3, n2, o3) {
              var r3, i3 = arguments.length, a2 = i3 < 3 ? e3 : null === o3 ? o3 = Object.getOwnPropertyDescriptor(e3, n2) : o3;
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, s.default)(Reflect)) && "function" == typeof Reflect.decorate)
                a2 = Reflect.decorate(t3, e3, n2, o3);
              else
                for (var l2 = t3.length - 1; l2 >= 0; l2--)
                  (r3 = t3[l2]) && (a2 = (i3 < 3 ? r3(a2) : i3 > 3 ? r3(e3, n2, a2) : r3(e3, n2)) || a2);
              return i3 > 3 && a2 && Object.defineProperty(e3, n2, a2), a2;
            };
            t2.PopoverEvent = y, function(t3) {
              t3.OverlayClicked = "overlay-clicked";
            }(y || (t2.PopoverEvent = y = {}));
            var m = function(t3) {
              (0, r2.default)(d2, t3);
              var n2, s2 = (n2 = d2, function() {
                var t4, e3 = (0, a.default)(n2);
                if (g()) {
                  var o3 = (0, a.default)(this).constructor;
                  t4 = Reflect.construct(e3, arguments, o3);
                } else
                  t4 = e3.apply(this, arguments);
                return (0, i2.default)(this, t4);
              });
              function d2(t4) {
                var n3, o3 = t4.items, r3 = t4.className, i3 = t4.searchable, a2 = t4.filterLabel, l2 = t4.nothingFoundLabel;
                return (0, e2.default)(this, d2), (n3 = s2.call(this)).isShown = false, n3.nodes = { wrapper: null, popover: null, items: null, nothingFound: null, overlay: null }, n3.scrollLocker = new h.default(), n3.items = o3, n3.className = r3 || "", n3.searchable = i3, n3.listeners = new c.default(), n3.filterLabel = a2, n3.nothingFoundLabel = l2, n3.render(), n3.enableFlipper(), n3;
              }
              return (0, o2.default)(d2, [{ key: "getElement", value: function() {
                return this.nodes.wrapper;
              } }, { key: "show", value: function() {
                var t4 = this;
                this.search.clear(), this.nodes.items.scrollTop = 0, this.nodes.popover.classList.add(d2.CSS.popoverOpened), this.nodes.overlay.classList.remove(d2.CSS.popoverOverlayHidden), this.flipper.activate(), this.searchable && window.requestAnimationFrame(function() {
                  t4.search.focus();
                }), (0, p.isMobileScreen)() && this.scrollLocker.lock(), this.isShown = true;
              } }, { key: "hide", value: function() {
                this.isShown && (this.nodes.popover.classList.remove(d2.CSS.popoverOpened), this.nodes.overlay.classList.add(d2.CSS.popoverOverlayHidden), this.flipper.deactivate(), (0, p.isMobileScreen)() && this.scrollLocker.unlock(), this.isShown = false);
              } }, { key: "destroy", value: function() {
                this.listeners.removeAll();
              } }, { key: "hasFocus", value: function() {
                return this.flipper.hasFocus();
              } }, { key: "calculateHeight", value: function() {
                var t4, e3 = this.nodes.popover.cloneNode(true);
                return e3.style.visibility = "hidden", e3.style.position = "absolute", e3.style.top = "-1000px", e3.classList.add(d2.CSS.popoverOpened), document.body.appendChild(e3), t4 = e3.offsetHeight, e3.remove(), t4;
              } }, { key: "render", value: function() {
                var t4 = this;
                this.nodes.wrapper = l.default.make("div", this.className), this.nodes.popover = l.default.make("div", d2.CSS.popover), this.nodes.wrapper.appendChild(this.nodes.popover), this.nodes.overlay = l.default.make("div", [d2.CSS.popoverOverlay, d2.CSS.popoverOverlayHidden]), this.nodes.wrapper.appendChild(this.nodes.overlay), this.searchable && this.addSearch(this.nodes.popover), this.nodes.items = l.default.make("div", d2.CSS.itemsWrapper), this.items.forEach(function(e3) {
                  t4.nodes.items.appendChild(t4.createItem(e3));
                }), this.nodes.popover.appendChild(this.nodes.items), this.nodes.nothingFound = l.default.make("div", [d2.CSS.noFoundMessage], { textContent: this.nothingFoundLabel }), this.nodes.popover.appendChild(this.nodes.nothingFound), this.listeners.on(this.nodes.popover, "click", function(e3) {
                  var n3 = e3.target.closest(".".concat(d2.CSS.item));
                  n3 && t4.itemClicked(n3);
                }), this.listeners.on(this.nodes.overlay, "click", function() {
                  t4.emit(y.OverlayClicked);
                });
              } }, { key: "addSearch", value: function(t4) {
                var e3 = this;
                this.search = new f.default({ items: this.items, placeholder: this.filterLabel, onSearch: function(t5) {
                  var n4 = [];
                  e3.items.forEach(function(o3, r3) {
                    var i3 = e3.nodes.items.children[r3];
                    t5.includes(o3) ? (n4.push(i3), i3.classList.remove(d2.CSS.itemHidden)) : i3.classList.add(d2.CSS.itemHidden);
                  }), e3.nodes.nothingFound.classList.toggle(d2.CSS.noFoundMessageShown, 0 === n4.length), e3.flipper.deactivate(), e3.flipper.activate(n4), e3.flipper.focusFirst();
                } });
                var n3 = this.search.getElement();
                t4.appendChild(n3);
              } }, { key: "createItem", value: function(t4) {
                var e3 = l.default.make("div", d2.CSS.item);
                e3.dataset.itemName = t4.name;
                var n3 = l.default.make("div", d2.CSS.itemLabel, { innerHTML: t4.label });
                return t4.icon && e3.appendChild(l.default.make("div", d2.CSS.itemIcon, { innerHTML: t4.icon })), e3.appendChild(n3), t4.secondaryLabel && e3.appendChild(l.default.make("div", d2.CSS.itemSecondaryLabel, { textContent: t4.secondaryLabel })), e3;
              } }, { key: "itemClicked", value: function(t4) {
                var e3 = this.nodes.wrapper.querySelectorAll(".".concat(d2.CSS.item)), n3 = Array.from(e3).indexOf(t4), o3 = this.items[n3];
                o3.onClick(o3);
              } }, { key: "enableFlipper", value: function() {
                var t4 = Array.from(this.nodes.wrapper.querySelectorAll(".".concat(d2.CSS.item)));
                this.flipper = new u.default({ items: t4, focusedItemClass: d2.CSS.itemFocused, allowedKeys: [p.keyCodes.TAB, p.keyCodes.UP, p.keyCodes.DOWN, p.keyCodes.ENTER] });
              } }], [{ key: "CSS", get: function() {
                return { popover: "ce-popover", popoverOpened: "ce-popover--opened", itemsWrapper: "ce-popover__items", item: "ce-popover__item", itemHidden: "ce-popover__item--hidden", itemFocused: "ce-popover__item--focused", itemLabel: "ce-popover__item-label", itemIcon: "ce-popover__item-icon", itemSecondaryLabel: "ce-popover__item-secondary-label", noFoundMessage: "ce-popover__no-found", noFoundMessageShown: "ce-popover__no-found--shown", popoverOverlay: "ce-popover__overlay", popoverOverlayHidden: "ce-popover__overlay--hidden" };
              } }]), d2;
            }(d.default);
            t2.default = m, m.displayName = "Popover", b([p.cacheable], m.prototype, "calculateHeight", null);
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(14), n(111)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s) {
            "use strict";
            var l = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = l(r2), i2 = l(i2), a = l(a), s = l(s);
            var c = function() {
              function t2(e2) {
                var n2 = e2.items, o3 = e2.onSearch, i3 = e2.placeholder;
                (0, r2.default)(this, t2), this.listeners = new s.default(), this.items = n2, this.onSearch = o3, this.render(i3);
              }
              return (0, i2.default)(t2, [{ key: "getElement", value: function() {
                return this.wrapper;
              } }, { key: "focus", value: function() {
                this.input.focus();
              } }, { key: "clear", value: function() {
                this.input.value = "", this.searchQuery = "", this.onSearch(this.foundItems);
              } }, { key: "destroy", value: function() {
                this.listeners.removeAll();
              } }, { key: "render", value: function(e2) {
                var n2 = this;
                this.wrapper = a.default.make("div", t2.CSS.wrapper);
                var o3 = a.default.make("div", t2.CSS.icon), r3 = a.default.svg("search", 16, 16);
                this.input = a.default.make("input", t2.CSS.input, { placeholder: e2 }), o3.appendChild(r3), this.wrapper.appendChild(o3), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", function() {
                  n2.searchQuery = n2.input.value, n2.onSearch(n2.foundItems);
                });
              } }, { key: "checkItem", value: function(t3) {
                var e2 = t3.label.toLowerCase(), n2 = this.searchQuery.toLowerCase();
                return e2.includes(n2);
              } }, { key: "foundItems", get: function() {
                var t3 = this;
                return this.items.filter(function(e2) {
                  return t3.checkItem(e2);
                });
              } }], [{ key: "CSS", get: function() {
                return { wrapper: "cdx-search-field", icon: "cdx-search-field__icon", input: "cdx-search-field__input" };
              } }]), t2;
            }();
            o2.default = c, c.displayName = "SearchInput", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(7)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2);
            var l = function() {
              function t2() {
                (0, r2.default)(this, t2);
              }
              return (0, i2.default)(t2, [{ key: "lock", value: function() {
                a.isIosDevice ? this.lockHard() : document.body.classList.add(t2.CSS.scrollLocked);
              } }, { key: "unlock", value: function() {
                a.isIosDevice ? this.unlockHard() : document.body.classList.remove(t2.CSS.scrollLocked);
              } }, { key: "lockHard", value: function() {
                this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty("--window-scroll-offset", "".concat(this.scrollPosition, "px")), document.body.classList.add(t2.CSS.scrollLockedHard);
              } }, { key: "unlockHard", value: function() {
                document.body.classList.remove(t2.CSS.scrollLockedHard), null !== this.scrollPosition && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
              } }]), t2;
            }();
            o2.default = l, l.displayName = "ScrollLocker", l.CSS = { scrollLocked: "ce-scroll-locked", scrollLockedHard: "ce-scroll-locked--hard" }, t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          window, t.exports = function(t2) {
            var e2 = {};
            function n2(o) {
              if (e2[o])
                return e2[o].exports;
              var r = e2[o] = { i: o, l: false, exports: {} };
              return t2[o].call(r.exports, r, r.exports, n2), r.l = true, r.exports;
            }
            return n2.m = t2, n2.c = e2, n2.d = function(t3, e3, o) {
              n2.o(t3, e3) || Object.defineProperty(t3, e3, { enumerable: true, get: o });
            }, n2.r = function(t3) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t3, "__esModule", { value: true });
            }, n2.t = function(t3, e3) {
              if (1 & e3 && (t3 = n2(t3)), 8 & e3)
                return t3;
              if (4 & e3 && "object" == typeof t3 && t3 && t3.__esModule)
                return t3;
              var o = /* @__PURE__ */ Object.create(null);
              if (n2.r(o), Object.defineProperty(o, "default", { enumerable: true, value: t3 }), 2 & e3 && "string" != typeof t3)
                for (var r in t3)
                  n2.d(o, r, function(e4) {
                    return t3[e4];
                  }.bind(null, r));
              return o;
            }, n2.n = function(t3) {
              var e3 = t3 && t3.__esModule ? function() {
                return t3.default;
              } : function() {
                return t3;
              };
              return n2.d(e3, "a", e3), e3;
            }, n2.o = function(t3, e3) {
              return Object.prototype.hasOwnProperty.call(t3, e3);
            }, n2.p = "/", n2(n2.s = 0);
          }([function(t2, e2, n2) {
            function o(t3, e3) {
              for (var n3 = 0; n3 < e3.length; n3++) {
                var o2 = e3[n3];
                o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t3, o2.key, o2);
              }
            }
            function r(t3, e3, n3) {
              return e3 && o(t3.prototype, e3), n3 && o(t3, n3), t3;
            }
            n2(1).toString();
            var i = function() {
              function t3(e3) {
                var n3 = e3.data, o2 = e3.config, r2 = e3.api, i2 = e3.readOnly;
                !function(t4, e4) {
                  if (!(t4 instanceof e4))
                    throw new TypeError("Cannot call a class as a function");
                }(this, t3), this.api = r2, this.readOnly = i2, this._CSS = { block: this.api.styles.block, wrapper: "ce-paragraph" }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = o2.placeholder ? o2.placeholder : t3.DEFAULT_PLACEHOLDER, this._data = {}, this._element = this.drawView(), this._preserveBlank = void 0 !== o2.preserveBlank && o2.preserveBlank, this.data = n3;
              }
              return r(t3, null, [{ key: "DEFAULT_PLACEHOLDER", get: function() {
                return "";
              } }]), r(t3, [{ key: "onKeyUp", value: function(t4) {
                "Backspace" !== t4.code && "Delete" !== t4.code || "" === this._element.textContent && (this._element.innerHTML = "");
              } }, { key: "drawView", value: function() {
                var t4 = document.createElement("DIV");
                return t4.classList.add(this._CSS.wrapper, this._CSS.block), t4.contentEditable = false, t4.dataset.placeholder = this.api.i18n.t(this._placeholder), this.readOnly || (t4.contentEditable = true, t4.addEventListener("keyup", this.onKeyUp)), t4;
              } }, { key: "render", value: function() {
                return this._element;
              } }, { key: "merge", value: function(t4) {
                var e3 = { text: this.data.text + t4.text };
                this.data = e3;
              } }, { key: "validate", value: function(t4) {
                return !("" === t4.text.trim() && !this._preserveBlank);
              } }, { key: "save", value: function(t4) {
                return { text: t4.innerHTML };
              } }, { key: "onPaste", value: function(t4) {
                var e3 = { text: t4.detail.data.innerHTML };
                this.data = e3;
              } }, { key: "data", get: function() {
                var t4 = this._element.innerHTML;
                return this._data.text = t4, this._data;
              }, set: function(t4) {
                this._data = t4 || {}, this._element.innerHTML = this._data.text || "";
              } }], [{ key: "conversionConfig", get: function() {
                return { export: "text", import: "text" };
              } }, { key: "sanitize", get: function() {
                return { text: { br: true } };
              } }, { key: "isReadOnlySupported", get: function() {
                return true;
              } }, { key: "pasteConfig", get: function() {
                return { tags: ["P"] };
              } }, { key: "toolbox", get: function() {
                return { icon: n2(5).default, title: "Text" };
              } }]), t3;
            }();
            t2.exports = i;
          }, function(t2, e2, n2) {
            var o = n2(2), r = n2(3);
            "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[t2.i, r, ""]]), o(r, { insert: "head", singleton: false }), t2.exports = r.locals || {};
          }, function(t2, e2, n2) {
            "use strict";
            var o, r = function() {
              var t3 = {};
              return function(e3) {
                if (void 0 === t3[e3]) {
                  var n3 = document.querySelector(e3);
                  if (window.HTMLIFrameElement && n3 instanceof window.HTMLIFrameElement)
                    try {
                      n3 = n3.contentDocument.head;
                    } catch (t4) {
                      n3 = null;
                    }
                  t3[e3] = n3;
                }
                return t3[e3];
              };
            }(), i = [];
            function a(t3) {
              for (var e3 = -1, n3 = 0; n3 < i.length; n3++)
                if (i[n3].identifier === t3) {
                  e3 = n3;
                  break;
                }
              return e3;
            }
            function s(t3, e3) {
              for (var n3 = {}, o2 = [], r2 = 0; r2 < t3.length; r2++) {
                var s2 = t3[r2], l2 = e3.base ? s2[0] + e3.base : s2[0], c2 = n3[l2] || 0, u2 = "".concat(l2, " ").concat(c2);
                n3[l2] = c2 + 1;
                var f2 = a(u2), d2 = { css: s2[1], media: s2[2], sourceMap: s2[3] };
                -1 !== f2 ? (i[f2].references++, i[f2].updater(d2)) : i.push({ identifier: u2, updater: v(d2, e3), references: 1 }), o2.push(u2);
              }
              return o2;
            }
            function l(t3) {
              var e3 = document.createElement("style"), o2 = t3.attributes || {};
              if (void 0 === o2.nonce) {
                var i2 = n2.nc;
                i2 && (o2.nonce = i2);
              }
              if (Object.keys(o2).forEach(function(t4) {
                e3.setAttribute(t4, o2[t4]);
              }), "function" == typeof t3.insert)
                t3.insert(e3);
              else {
                var a2 = r(t3.insert || "head");
                if (!a2)
                  throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                a2.appendChild(e3);
              }
              return e3;
            }
            var c, u = (c = [], function(t3, e3) {
              return c[t3] = e3, c.filter(Boolean).join("\n");
            });
            function f(t3, e3, n3, o2) {
              var r2 = n3 ? "" : o2.media ? "@media ".concat(o2.media, " {").concat(o2.css, "}") : o2.css;
              if (t3.styleSheet)
                t3.styleSheet.cssText = u(e3, r2);
              else {
                var i2 = document.createTextNode(r2), a2 = t3.childNodes;
                a2[e3] && t3.removeChild(a2[e3]), a2.length ? t3.insertBefore(i2, a2[e3]) : t3.appendChild(i2);
              }
            }
            function d(t3, e3, n3) {
              var o2 = n3.css, r2 = n3.media, i2 = n3.sourceMap;
              if (r2 ? t3.setAttribute("media", r2) : t3.removeAttribute("media"), i2 && btoa && (o2 += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i2)))), " */")), t3.styleSheet)
                t3.styleSheet.cssText = o2;
              else {
                for (; t3.firstChild; )
                  t3.removeChild(t3.firstChild);
                t3.appendChild(document.createTextNode(o2));
              }
            }
            var p = null, h = 0;
            function v(t3, e3) {
              var n3, o2, r2;
              if (e3.singleton) {
                var i2 = h++;
                n3 = p || (p = l(e3)), o2 = f.bind(null, n3, i2, false), r2 = f.bind(null, n3, i2, true);
              } else
                n3 = l(e3), o2 = d.bind(null, n3, e3), r2 = function() {
                  !function(t4) {
                    if (null === t4.parentNode)
                      return false;
                    t4.parentNode.removeChild(t4);
                  }(n3);
                };
              return o2(t3), function(e4) {
                if (e4) {
                  if (e4.css === t3.css && e4.media === t3.media && e4.sourceMap === t3.sourceMap)
                    return;
                  o2(t3 = e4);
                } else
                  r2();
              };
            }
            t2.exports = function(t3, e3) {
              (e3 = e3 || {}).singleton || "boolean" == typeof e3.singleton || (e3.singleton = (void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o));
              var n3 = s(t3 = t3 || [], e3);
              return function(t4) {
                if (t4 = t4 || [], "[object Array]" === Object.prototype.toString.call(t4)) {
                  for (var o2 = 0; o2 < n3.length; o2++) {
                    var r2 = a(n3[o2]);
                    i[r2].references--;
                  }
                  for (var l2 = s(t4, e3), c2 = 0; c2 < n3.length; c2++) {
                    var u2 = a(n3[c2]);
                    0 === i[u2].references && (i[u2].updater(), i.splice(u2, 1));
                  }
                  n3 = l2;
                }
              };
            };
          }, function(t2, e2, n2) {
            (e2 = n2(4)(false)).push([t2.i, ".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n", ""]), t2.exports = e2;
          }, function(t2, e2, n2) {
            "use strict";
            t2.exports = function(t3) {
              var e3 = [];
              return e3.toString = function() {
                return this.map(function(e4) {
                  var n3 = function(t4, e5) {
                    var n4, o, r, i = t4[1] || "", a = t4[3];
                    if (!a)
                      return i;
                    if (e5 && "function" == typeof btoa) {
                      var s = (n4 = a, o = btoa(unescape(encodeURIComponent(JSON.stringify(n4)))), r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o), "/*# ".concat(r, " */")), l = a.sources.map(function(t5) {
                        return "/*# sourceURL=".concat(a.sourceRoot || "").concat(t5, " */");
                      });
                      return [i].concat(l).concat([s]).join("\n");
                    }
                    return [i].join("\n");
                  }(e4, t3);
                  return e4[2] ? "@media ".concat(e4[2], " {").concat(n3, "}") : n3;
                }).join("");
              }, e3.i = function(t4, n3, o) {
                "string" == typeof t4 && (t4 = [[null, t4, ""]]);
                var r = {};
                if (o)
                  for (var i = 0; i < this.length; i++) {
                    var a = this[i][0];
                    null != a && (r[a] = true);
                  }
                for (var s = 0; s < t4.length; s++) {
                  var l = [].concat(t4[s]);
                  o && r[l[0]] || (n3 && (l[2] ? l[2] = "".concat(n3, " and ").concat(l[2]) : l[2] = n3), e3.push(l));
                }
              }, e3;
            };
          }, function(t2, e2, n2) {
            "use strict";
            n2.r(e2), e2.default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">\n  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>\n</svg>\n';
          }]);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(14)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var l = function() {
              function t2() {
                (0, r2.default)(this, t2), this.commandName = "bold", this.CSS = { button: "ce-inline-tool", buttonActive: "ce-inline-tool--active", buttonModifier: "ce-inline-tool--bold" }, this.nodes = { button: void 0 };
              }
              return (0, i2.default)(t2, [{ key: "render", value: function() {
                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(a.default.svg("bold", 12, 14)), this.nodes.button;
              } }, { key: "surround", value: function(t3) {
                document.execCommand(this.commandName);
              } }, { key: "checkState", value: function(t3) {
                var e2 = document.queryCommandState(this.commandName);
                return this.nodes.button.classList.toggle(this.CSS.buttonActive, e2), e2;
              } }, { key: "shortcut", get: function() {
                return "CMD+B";
              } }], [{ key: "sanitize", get: function() {
                return { b: {} };
              } }]), t2;
            }();
            o2.default = l, l.displayName = "BoldInlineTool", l.isInline = true, l.title = "Bold", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(14)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var l = function() {
              function t2() {
                (0, r2.default)(this, t2), this.commandName = "italic", this.CSS = { button: "ce-inline-tool", buttonActive: "ce-inline-tool--active", buttonModifier: "ce-inline-tool--italic" }, this.nodes = { button: null };
              }
              return (0, i2.default)(t2, [{ key: "render", value: function() {
                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(a.default.svg("italic", 4, 11)), this.nodes.button;
              } }, { key: "surround", value: function(t3) {
                document.execCommand(this.commandName);
              } }, { key: "checkState", value: function(t3) {
                var e2 = document.queryCommandState(this.commandName);
                return this.nodes.button.classList.toggle(this.CSS.buttonActive, e2), e2;
              } }, { key: "shortcut", get: function() {
                return "CMD+I";
              } }], [{ key: "sanitize", get: function() {
                return { i: {} };
              } }]), t2;
            }();
            o2.default = l, l.displayName = "ItalicInlineTool", l.isInline = true, l.title = "Italic", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(25), n(14), n(7)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l) {
            "use strict";
            var c = n(8), u = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), l = c(l);
            var f = function() {
              function t2(e2) {
                var n2 = e2.api;
                (0, r2.default)(this, t2), this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = { button: "ce-inline-tool", buttonActive: "ce-inline-tool--active", buttonModifier: "ce-inline-tool--link", buttonUnlink: "ce-inline-tool--unlink", input: "ce-inline-tool-input", inputShowed: "ce-inline-tool-input--showed" }, this.nodes = { button: null, input: null }, this.inputOpened = false, this.toolbar = n2.toolbar, this.inlineToolbar = n2.inlineToolbar, this.notifier = n2.notifier, this.i18n = n2.i18n, this.selection = new a.default();
              }
              return (0, i2.default)(t2, [{ key: "render", value: function() {
                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(s.default.svg("link", 14, 10)), this.nodes.button.appendChild(s.default.svg("unlink", 15, 11)), this.nodes.button;
              } }, { key: "renderActions", value: function() {
                var t3 = this;
                return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", function(e2) {
                  e2.keyCode === t3.ENTER_KEY && t3.enterPressed(e2);
                }), this.nodes.input;
              } }, { key: "surround", value: function(t3) {
                if (t3) {
                  this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
                  var e2 = this.selection.findParentTag("A");
                  if (e2)
                    return this.selection.expandToTag(e2), this.unlink(), this.closeActions(), this.checkState(), void this.toolbar.close();
                }
                this.toggleActions();
              } }, { key: "checkState", value: function(t3) {
                var e2 = this.selection.findParentTag("A");
                if (e2) {
                  this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
                  var n2 = e2.getAttribute("href");
                  this.nodes.input.value = "null" !== n2 ? n2 : "", this.selection.save();
                } else
                  this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
                return !!e2;
              } }, { key: "clear", value: function() {
                this.closeActions();
              } }, { key: "toggleActions", value: function() {
                this.inputOpened ? this.closeActions(false) : this.openActions(true);
              } }, { key: "openActions", value: function() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.nodes.input.classList.add(this.CSS.inputShowed), t3 && this.nodes.input.focus(), this.inputOpened = true;
              } }, { key: "closeActions", value: function() {
                var t3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (this.selection.isFakeBackgroundEnabled) {
                  var e2 = new a.default();
                  e2.save(), this.selection.restore(), this.selection.removeFakeBackground(), e2.restore();
                }
                this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", t3 && this.selection.clearSaved(), this.inputOpened = false;
              } }, { key: "enterPressed", value: function(t3) {
                var e2 = this.nodes.input.value || "";
                return e2.trim() ? this.validateURL(e2) ? (e2 = this.prepareLink(e2), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(e2), t3.preventDefault(), t3.stopPropagation(), t3.stopImmediatePropagation(), this.selection.collapseToEnd(), void this.inlineToolbar.close()) : (this.notifier.show({ message: "Pasted link is not valid.", style: "error" }), void l.log("Incorrect Link pasted", "warn", e2)) : (this.selection.restore(), this.unlink(), t3.preventDefault(), void this.closeActions());
              } }, { key: "validateURL", value: function(t3) {
                return !/\s/.test(t3);
              } }, { key: "prepareLink", value: function(t3) {
                return t3 = t3.trim(), t3 = this.addProtocol(t3);
              } }, { key: "addProtocol", value: function(t3) {
                if (/^(\w+):(\/\/)?/.test(t3))
                  return t3;
                var e2 = /^\/[^/\s]/.test(t3), n2 = "#" === t3.substring(0, 1), o3 = /^\/\/[^/\s]/.test(t3);
                return e2 || n2 || o3 || (t3 = "http://" + t3), t3;
              } }, { key: "insertLink", value: function(t3) {
                var e2 = this.selection.findParentTag("A");
                e2 && this.selection.expandToTag(e2), document.execCommand(this.commandLink, false, t3);
              } }, { key: "unlink", value: function() {
                document.execCommand(this.commandUnlink);
              } }, { key: "shortcut", get: function() {
                return "CMD+K";
              } }], [{ key: "sanitize", get: function() {
                return { a: { href: true, target: "_blank", rel: "nofollow" } };
              } }]), t2;
            }();
            o2.default = f, f.displayName = "LinkInlineTool", f.isInline = true, f.title = "Link", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(14)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var l = function() {
              function t2(e2) {
                var n2 = e2.data, o3 = e2.api;
                (0, r2.default)(this, t2), this.CSS = { wrapper: "ce-stub", info: "ce-stub__info", title: "ce-stub__title", subtitle: "ce-stub__subtitle" }, this.api = o3, this.title = n2.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = n2.savedData, this.wrapper = this.make();
              }
              return (0, i2.default)(t2, [{ key: "render", value: function() {
                return this.wrapper;
              } }, { key: "save", value: function() {
                return this.savedData;
              } }, { key: "make", value: function() {
                var t3 = a.default.make("div", this.CSS.wrapper), e2 = a.default.svg("sad-face", 52, 52), n2 = a.default.make("div", this.CSS.info), o3 = a.default.make("div", this.CSS.title, { textContent: this.title }), r3 = a.default.make("div", this.CSS.subtitle, { textContent: this.subtitle });
                return t3.appendChild(e2), n2.appendChild(o3), n2.appendChild(r3), t3.appendChild(n2), t3;
              } }]), t2;
            }();
            o2.default = l, l.displayName = "Stub", l.isReadOnlySupported = true, t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(68), n(395), n(396), n(397)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c) {
            "use strict";
            var u = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), s = u(s), l = u(l), c = u(c);
            var f = function(t2, e2) {
              var n2 = {};
              for (var o3 in t2)
                Object.prototype.hasOwnProperty.call(t2, o3) && e2.indexOf(o3) < 0 && (n2[o3] = t2[o3]);
              if (null != t2 && "function" == typeof Object.getOwnPropertySymbols) {
                var r3 = 0;
                for (o3 = Object.getOwnPropertySymbols(t2); r3 < o3.length; r3++)
                  e2.indexOf(o3[r3]) < 0 && Object.prototype.propertyIsEnumerable.call(t2, o3[r3]) && (n2[o3[r3]] = t2[o3[r3]]);
              }
              return n2;
            }, d = function() {
              function t2(e2, n2, o3) {
                (0, r2.default)(this, t2), this.api = o3, this.config = e2, this.editorConfig = n2;
              }
              return (0, i2.default)(t2, [{ key: "get", value: function(t3) {
                var e2 = this.config[t3], n2 = e2.class, o3 = e2.isInternal, r3 = void 0 !== o3 && o3, i3 = f(e2, ["class", "isInternal"]);
                return new (this.getConstructor(n2))({ name: t3, constructable: n2, config: i3, api: this.api, isDefault: t3 === this.editorConfig.defaultBlock, defaultPlaceholder: this.editorConfig.placeholder, isInternal: r3 });
              } }, { key: "getConstructor", value: function(t3) {
                switch (true) {
                  case t3[a.InternalInlineToolSettings.IsInline]:
                    return s.default;
                  case t3[a.InternalTuneSettings.IsTune]:
                    return l.default;
                  default:
                    return c.default;
                }
              } }]), t2;
            }();
            o2.default = d, d.displayName = "ToolsFactory", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(68)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c) {
            "use strict";
            var u = n(8), f = n(1);
            function d() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = f(r2), i2 = f(i2), a = f(a), s = f(s), l = f(l);
            var p = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (d()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, r2.default)(this, o3), (t3 = n2.apply(this, arguments)).type = c.ToolType.Inline, t3;
              }
              return (0, i2.default)(o3, [{ key: "create", value: function() {
                return new this.constructable({ api: this.api.getMethodsForTool(this), config: this.settings });
              } }, { key: "title", get: function() {
                return this.constructable[c.InternalInlineToolSettings.Title];
              } }]), o3;
            }((c = u(c)).default);
            o2.default = p, p.displayName = "InlineTool", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(68)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c) {
            "use strict";
            var u = n(8), f = n(1);
            function d() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = f(r2), i2 = f(i2), a = f(a), s = f(s), l = f(l);
            var p = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (d()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, r2.default)(this, o3), (t3 = n2.apply(this, arguments)).type = c.ToolType.Tune, t3;
              }
              return (0, i2.default)(o3, [{ key: "create", value: function(t3, e3) {
                return new this.constructable({ api: this.api.getMethodsForTool(this), config: this.settings, block: e3, data: t3 });
              } }]), o3;
            }((c = u(c)).default);
            o2.default = p, p.displayName = "BlockTune", t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(113), n(5), n(6), n(4), n(59), n(68), n(7), n(185)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d, p) {
            "use strict";
            var h = n(8), v = n(1);
            function g() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = v(r2), i2 = v(i2), a = v(a), s = v(s), l = v(l), c = v(c), u = v(u), f = h(f), d = h(d), p = v(p);
            var y = function(t2, e2, n2, o3) {
              var r3, i3 = arguments.length, a2 = i3 < 3 ? e2 : null === o3 ? o3 = Object.getOwnPropertyDescriptor(e2, n2) : o3;
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, u.default)(Reflect)) && "function" == typeof Reflect.decorate)
                a2 = Reflect.decorate(t2, e2, n2, o3);
              else
                for (var s2 = t2.length - 1; s2 >= 0; s2--)
                  (r3 = t2[s2]) && (a2 = (i3 < 3 ? r3(a2) : i3 > 3 ? r3(e2, n2, a2) : r3(e2, n2)) || a2);
              return i3 > 3 && a2 && Object.defineProperty(e2, n2, a2), a2;
            }, b = function(t2) {
              (0, s.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (g()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, l.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, r2.default)(this, o3), (t3 = n2.apply(this, arguments)).type = f.ToolType.Block, t3.inlineTools = new p.default(), t3.tunes = new p.default(), t3;
              }
              return (0, i2.default)(o3, [{ key: "create", value: function(t3, e3, n3) {
                return new this.constructable({ data: t3, block: e3, readOnly: n3, api: this.api.getMethodsForTool(this), config: this.settings });
              } }, { key: "isReadOnlySupported", get: function() {
                return true === this.constructable[f.InternalBlockToolSettings.IsReadOnlySupported];
              } }, { key: "isLineBreaksEnabled", get: function() {
                return this.constructable[f.InternalBlockToolSettings.IsEnabledLineBreaks];
              } }, { key: "toolbox", get: function() {
                var t3 = this.constructable[f.InternalBlockToolSettings.Toolbox], e3 = this.config[f.UserSettings.Toolbox];
                if (!d.isEmpty(t3) && false !== e3)
                  return e3 ? Array.isArray(t3) ? Array.isArray(e3) ? e3.map(function(e4, n3) {
                    var o4 = t3[n3];
                    return o4 ? Object.assign(Object.assign({}, o4), e4) : e4;
                  }) : [e3] : Array.isArray(e3) ? e3 : [Object.assign(Object.assign({}, t3), e3)] : Array.isArray(t3) ? t3 : [t3];
              } }, { key: "conversionConfig", get: function() {
                return this.constructable[f.InternalBlockToolSettings.ConversionConfig];
              } }, { key: "enabledInlineTools", get: function() {
                return this.config[f.UserSettings.EnabledInlineTools] || false;
              } }, { key: "enabledBlockTunes", get: function() {
                return this.config[f.UserSettings.EnabledBlockTunes];
              } }, { key: "pasteConfig", get: function() {
                return this.constructable[f.InternalBlockToolSettings.PasteConfig] || {};
              } }, { key: "sanitizeConfig", get: function() {
                var t3 = (0, a.default)((0, c.default)(o3.prototype), "sanitizeConfig", this), e3 = this.baseSanitizeConfig;
                if (d.isEmpty(t3))
                  return e3;
                var n3 = {};
                for (var r3 in t3)
                  if (Object.prototype.hasOwnProperty.call(t3, r3)) {
                    var i3 = t3[r3];
                    d.isObject(i3) ? n3[r3] = Object.assign({}, e3, i3) : n3[r3] = i3;
                  }
                return n3;
              } }, { key: "baseSanitizeConfig", get: function() {
                var t3 = {};
                return Array.from(this.inlineTools.values()).forEach(function(e3) {
                  return Object.assign(t3, e3.sanitizeConfig);
                }), Array.from(this.tunes.values()).forEach(function(e3) {
                  return Object.assign(t3, e3.sanitizeConfig);
                }), t3;
              } }]), o3;
            }(f.default);
            o2.default = b, b.displayName = "BlockTool", y([d.cacheable], b.prototype, "sanitizeConfig", null), y([d.cacheable], b.prototype, "baseSanitizeConfig", null), t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(14)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var l = function() {
              function t2(e2) {
                var n2 = e2.api;
                (0, r2.default)(this, t2), this.CSS = { button: "ce-settings__button", wrapper: "ce-tune-move-down", animation: "wobble" }, this.api = n2;
              }
              return (0, i2.default)(t2, [{ key: "render", value: function() {
                var t3 = this, e2 = a.default.make("div", [this.CSS.button, this.CSS.wrapper], {});
                return e2.appendChild(a.default.svg("arrow-down", 14, 14)), this.api.listeners.on(e2, "click", function(n2) {
                  return t3.handleClick(n2, e2);
                }, false), this.api.tooltip.onHover(e2, this.api.i18n.t("Move down"), { hidingDelay: 300 }), e2;
              } }, { key: "handleClick", value: function(t3, e2) {
                var n2 = this, o3 = this.api.blocks.getCurrentBlockIndex(), r3 = this.api.blocks.getBlockByIndex(o3 + 1);
                if (!r3)
                  return e2.classList.add(this.CSS.animation), void window.setTimeout(function() {
                    e2.classList.remove(n2.CSS.animation);
                  }, 500);
                var i3 = r3.holder, a2 = i3.getBoundingClientRect(), s2 = Math.abs(window.innerHeight - i3.offsetHeight);
                a2.top < window.innerHeight && (s2 = window.scrollY + i3.offsetHeight), window.scrollTo(0, s2), this.api.blocks.move(o3 + 1), this.api.toolbar.toggleBlockSettings(true), this.api.tooltip.hide();
              } }]), t2;
            }();
            o2.default = l, l.displayName = "MoveDownTune", l.isTune = true, t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(14)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var l = function() {
              function t2(e2) {
                var n2 = this, o3 = e2.api;
                (0, r2.default)(this, t2), this.CSS = { button: "ce-settings__button", buttonDelete: "ce-settings__button--delete", buttonConfirm: "ce-settings__button--confirm" }, this.nodes = { button: null }, this.api = o3, this.resetConfirmation = function() {
                  n2.setConfirmation(false);
                };
              }
              return (0, i2.default)(t2, [{ key: "render", value: function() {
                var t3 = this;
                return this.nodes.button = a.default.make("div", [this.CSS.button, this.CSS.buttonDelete], {}), this.nodes.button.appendChild(a.default.svg("cross", 12, 12)), this.api.listeners.on(this.nodes.button, "click", function(e2) {
                  return t3.handleClick(e2);
                }, false), this.api.tooltip.onHover(this.nodes.button, this.api.i18n.t("Delete"), { hidingDelay: 300 }), this.nodes.button;
              } }, { key: "handleClick", value: function(t3) {
                this.needConfirmation ? (this.api.events.off("block-settings-closed", this.resetConfirmation), this.api.blocks.delete(), this.api.toolbar.close(), this.api.tooltip.hide(), t3.stopPropagation()) : (this.setConfirmation(true), this.api.events.on("block-settings-closed", this.resetConfirmation));
              } }, { key: "setConfirmation", value: function(t3) {
                this.needConfirmation = t3, this.nodes.button.classList.add(this.CSS.buttonConfirm);
              } }]), t2;
            }();
            o2.default = l, l.displayName = "DeleteTune", l.isTune = true, t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(14)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var l = function() {
              function t2(e2) {
                var n2 = e2.api;
                (0, r2.default)(this, t2), this.CSS = { button: "ce-settings__button", wrapper: "ce-tune-move-up", animation: "wobble" }, this.api = n2;
              }
              return (0, i2.default)(t2, [{ key: "render", value: function() {
                var t3 = this, e2 = a.default.make("div", [this.CSS.button, this.CSS.wrapper], {});
                return e2.appendChild(a.default.svg("arrow-up", 14, 14)), this.api.listeners.on(e2, "click", function(n2) {
                  return t3.handleClick(n2, e2);
                }, false), this.api.tooltip.onHover(e2, this.api.i18n.t("Move up"), { hidingDelay: 300 }), e2;
              } }, { key: "handleClick", value: function(t3, e2) {
                var n2 = this, o3 = this.api.blocks.getCurrentBlockIndex(), r3 = this.api.blocks.getBlockByIndex(o3), i3 = this.api.blocks.getBlockByIndex(o3 - 1);
                if (0 === o3 || !r3 || !i3)
                  return e2.classList.add(this.CSS.animation), void window.setTimeout(function() {
                    e2.classList.remove(n2.CSS.animation);
                  }, 500);
                var a2, s2 = r3.holder, l2 = i3.holder, c = s2.getBoundingClientRect(), u = l2.getBoundingClientRect();
                a2 = u.top > 0 ? Math.abs(c.top) - Math.abs(u.top) : window.innerHeight - Math.abs(c.top) + Math.abs(u.top), window.scrollBy(0, -1 * a2), this.api.blocks.move(o3 - 1), this.api.toolbar.toggleBlockSettings(true), this.api.tooltip.hide();
              } }]), t2;
            }();
            o2.default = l, l.displayName = "MoveUpTune", l.isTune = true, t.exports = e.default;
          }) ? o.apply(e, r) : o) || (t.exports = i);
        }, function(t, e, n) {
          "use strict";
          n.r(e), e.default = '<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg">\n<symbol id="arrow-down" viewBox="0 0 14 14">\n  <path transform="matrix(1 0 0 -1 0 14)" d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="arrow-up" viewBox="0 0 14 14">\n    <path d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="bold" viewBox="0 0 12 14"><path d="M5.997 14H1.72c-.618 0-1.058-.138-1.323-.415C.132 13.308 0 12.867 0 12.262V1.738C0 1.121.135.676.406.406.676.136 1.114 0 1.719 0h4.536c.669 0 1.248.041 1.738.124.49.083.93.242 1.318.478a3.458 3.458 0 0 1 1.461 1.752c.134.366.2.753.2 1.16 0 1.401-.7 2.426-2.1 3.075 1.84.586 2.76 1.726 2.76 3.42 0 .782-.2 1.487-.602 2.114a3.61 3.61 0 0 1-1.623 1.39 5.772 5.772 0 0 1-1.471.377c-.554.073-1.2.11-1.939.11zm-.21-6.217h-2.95v4.087h3.046c1.916 0 2.874-.69 2.874-2.072 0-.707-.248-1.22-.745-1.537-.496-.319-1.238-.478-2.225-.478zM2.837 2.13v3.619h2.597c.707 0 1.252-.067 1.638-.2.385-.134.68-.389.883-.765.16-.267.239-.566.239-.897 0-.707-.252-1.176-.755-1.409-.503-.232-1.27-.348-2.301-.348H2.836z"/>\n</symbol>\n<symbol id="cross" viewBox="0 0 237 237">\n  <path transform="rotate(45 280.675 51.325)" d="M191 191V73c0-5.523 4.477-10 10-10h25c5.523 0 10 4.477 10 10v118h118c5.523 0 10 4.477 10 10v25c0 5.523-4.477 10-10 10H236v118c0 5.523-4.477 10-10 10h-25c-5.523 0-10-4.477-10-10V236H73c-5.523 0-10-4.477-10-10v-25c0-5.523 4.477-10 10-10h118z"/>\n\n</symbol>\n<symbol id="dots" viewBox="0 0 16 16">\n  <g transform="translate(4 1.5)" fill-rule="evenodd">\n    <circle cx="1.3" cy="1.3" r="1.3"/>\n    <circle cx="6.5" cy="1.3" r="1.3"/>\n    <circle cx="6.5" cy="6.5" r="1.3"/>\n    <circle cx="1.3" cy="6.5" r="1.3"/>\n    <circle cx="6.5" cy="11.7" r="1.3"/>\n    <circle cx="1.3" cy="11.7" r="1.3"/>\n  </g>\n\n</symbol>\n<symbol id="italic" viewBox="0 0 4 11">\n    <path d="M3.289 4.17L2.164 9.713c-.078.384-.238.674-.48.87-.243.198-.52.296-.831.296-.312 0-.545-.1-.699-.302-.153-.202-.192-.49-.116-.864L1.15 4.225c.077-.38.232-.665.466-.857a1.25 1.25 0 01.818-.288c.312 0 .55.096.713.288.163.192.21.46.141.801zm-.667-2.09c-.295 0-.53-.09-.706-.273-.176-.181-.233-.439-.173-.77.055-.302.207-.55.457-.745C2.45.097 2.716 0 3 0c.273 0 .5.088.68.265.179.176.238.434.177.771-.06.327-.21.583-.45.767-.24.185-.502.277-.785.277z"/>\n\n</symbol>\n<symbol id="link" viewBox="0 0 14 10">\n  <path d="M6 0v2H5a3 3 0 000 6h1v2H5A5 5 0 115 0h1zm2 0h1a5 5 0 110 10H8V8h1a3 3 0 000-6H8V0zM5 4h4a1 1 0 110 2H5a1 1 0 110-2z"/>\n\n</symbol>\n<symbol id="plus" viewBox="0 0 16 16">\n  <g transform="translate(1 1.5)" fill-rule="evenodd">\n    <rect x="6" width="2" height="13" rx="1"/>\n    <rect x=".5" y="5.5" width="13" height="2" rx="1"/>\n  </g>\n\n</symbol>\n<symbol id="sad-face" viewBox="0 0 52 52">\n    <path fill="#D76B6B" fill-rule="nonzero" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/>\n\n</symbol>\n<symbol id="search" viewBox="0 0 16 16">\n  <path d="M12.711 2.18a7.448 7.448 0 0 1 .79 9.603l2.143 2.144a1.214 1.214 0 1 1-1.717 1.717L11.783 13.5a7.446 7.446 0 1 1 .928-11.32ZM11.39 3.61a5.5 5.5 0 1 0-7.778 7.78 5.5 5.5 0 0 0 7.778-7.78Z" fill-rule="evenodd"/>\n\n</symbol>\n<symbol id="toggler-down">\n  <path d="M6.5 9.294a.792.792 0 01-.562-.232L2.233 5.356a.794.794 0 011.123-1.123L6.5 7.377l3.144-3.144a.794.794 0 011.123 1.123L7.062 9.062a.792.792 0 01-.562.232z"/>\n\n</symbol>\n<symbol id="unlink" viewBox="0 0 15 11">\n  <path d="M13.073 2.099l-1.448 1.448A3 3 0 009 2H8V0h1c1.68 0 3.166.828 4.073 2.099zM6.929 4l-.879.879L7.172 6H5a1 1 0 110-2h1.929zM6 0v2H5a3 3 0 100 6h1v2H5A5 5 0 115 0h1zm6.414 7l2.122 2.121-1.415 1.415L11 8.414l-2.121 2.122L7.464 9.12 9.586 7 7.464 4.879 8.88 3.464 11 5.586l2.121-2.122 1.415 1.415L12.414 7z"/>\n\n</symbol></svg>';
        }, function(t, e) {
          t.exports = '.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide,.codex-editor__redactor--hidden{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff "}@media (min-width:651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor__loader{position:relative;height:30vh}.codex-editor__loader:before{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:2px solid rgba(201,201,204,.48);border-top-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:editor-loader-spin .8s linear infinite;animation:editor-loader-spin .8s linear infinite;will-change:transform}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:rgba(46,170,220,.2);border:1px solid transparent}.codex-editor svg{fill:currentColor;vertical-align:middle;max-height:100%}::-moz-selection{background-color:#d4ecff}::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}@-webkit-keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1*var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width:650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover:hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus{-ms-flex-negative:0;flex-shrink:0}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width:650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}}@media (max-width:650px) and (max-width:650px){.ce-toolbar__plus{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}@media (max-width:650px){.ce-toolbar__plus{position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width:650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (max-width:650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover:hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn{margin-left:5px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width:651px){.ce-toolbar__settings-btn{width:18px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width:650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}}@media (max-width:650px) and (max-width:650px){.ce-toolbar__settings-btn{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}@media (max-width:650px){.ce-toolbar__settings-btn{position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}.ce-toolbox{--gap:8px}@media (min-width:651px){.ce-toolbox{position:absolute;top:calc(26px + var(--gap));left:0}.ce-toolbox--opened-top{top:calc(-1*(var(--gap) + var(--popover-height)))}}@media (min-width:651px){.codex-editor--narrow .ce-toolbox{left:auto;right:0}.codex-editor--narrow .ce-toolbox .ce-popover{right:0}}.ce-inline-toolbar{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}@media (max-width:650px){.ce-inline-toolbar{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}.ce-inline-toolbar{-webkit-transform:translateX(-50%) translateY(8px) scale(.9);transform:translateX(-50%) translateY(8px) scale(.9);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0;z-index:3}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.9);transform:translateX(-23px) translateY(8px) scale(.9)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translateX(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.9);transform:translateX(-100%) translateY(8px) scale(.9);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{width:100%;padding:0 6px}.ce-inline-toolbar__buttons,.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:34px;padding:0 9px 0 10px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48)}.ce-inline-toolbar__dropdown:hover{background:#eff2f5}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content{display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:500;font-size:14px}.ce-inline-toolbar__dropdown-content svg{height:12px}.ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:4px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-inline-tool:hover{background-color:#eff2f5}.ce-inline-tool{border-radius:0;line-height:normal;width:auto;padding:0 5px!important;min-width:24px}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool:not(:last-of-type){margin-right:2px}.ce-inline-tool .icon{height:12px}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48)}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}@media (max-width:650px){.ce-conversion-toolbar{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}.ce-conversion-toolbar{opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:150px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:20px;height:20px;border:1px solid rgba(201,201,204,.48);border-radius:3px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px;background:#fff}.ce-conversion-tool__icon svg{width:11px;height:11px}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-settings{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}@media (max-width:650px){.ce-settings{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}.ce-settings{top:34px;left:0;min-width:114px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-settings--left-oriented:before{left:15px;margin-left:0}.ce-settings--right-oriented:before{left:auto;right:15px;margin-left:0}@media (max-width:650px){.ce-settings{bottom:40px;right:auto;top:auto}}.ce-settings:before{left:auto;right:12px}@media (max-width:650px){.ce-settings:before{bottom:-5px;top:auto}}.ce-settings{display:none}.ce-settings--opened{display:block;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-name:panelShowing;animation-name:panelShowing}.ce-settings__plugin-zone:not(:empty){padding:3px 3px 0}.ce-settings__default-zone:not(:empty){padding:3px}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-settings__button:hover{background-color:#eff2f5}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button{line-height:32px}.ce-settings__button--disabled{cursor:not-allowed!important;opacity:.3}.ce-settings__button--selected{color:#388ae5}.ce-settings__button--delete{-webkit-transition:background-color .3s ease;transition:background-color .3s ease;will-change:background-color}.ce-settings__button--delete .icon{-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;will-change:transform}.ce-settings__button--confirm{background-color:#e24a4a!important;color:#fff}.ce-settings__button--confirm:hover{background-color:#d54a4a!important}.ce-settings__button--confirm .icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:none}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content .ce-stub,.ce-block--selected .ce-block__content img{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388ae5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388ae5,#388ae5 1px,#fff 0,#fff 6px)}.ce-block a{cursor:pointer;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width:651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important;display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.cdx-settings-button:hover{background-color:#eff2f5}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button:not(:nth-child(3n+3)){margin-right:3px}.cdx-settings-button:nth-child(n+4){margin-top:3px}.cdx-settings-button--active{color:#388ae5}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s linear infinite;animation:cdxRotation 1.2s linear infinite}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px 0 rgba(18,30,57,.04);color:#707684;text-align:center;cursor:pointer}.cdx-button:hover{background:#fbfcfe;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px 0 rgba(18,30,57,.08)}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:3.5em 0;margin:17px 0;border-radius:3px;background:#fcf7f7;color:#b46262}.ce-stub__info{margin-left:20px}.ce-stub__title{margin-bottom:3px;font-weight:600;font-size:18px;text-transform:capitalize}.ce-stub__subtitle{font-size:16px}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width:650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0 solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.ce-popover{opacity:0;will-change:opacity,transform;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:6px;min-width:200px;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;max-height:0;pointer-events:none;position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}@media (max-width:650px){.ce-popover{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}.ce-popover{z-index:4;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.ce-popover--left-oriented:before{left:15px;margin-left:0}.ce-popover--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-popover--opened{opacity:1;max-height:270px;pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease}@media (max-width:650px){.ce-popover--opened{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover::-webkit-scrollbar{width:7px}.ce-popover::-webkit-scrollbar-thumb{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:inset 0 0 2px 2px #eff2f5;box-shadow:inset 0 0 2px 2px #eff2f5;border-color:transparent;border-style:solid;border-width:4px 3px 4px 0}@media (max-width:650px){.ce-popover{position:fixed;max-width:none;min-width:auto;left:5px;right:5px;bottom:calc(5px + env(safe-area-inset-bottom));top:auto;border-radius:10px}}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (min-width:651px){.ce-popover__items{margin-top:5px}}.ce-popover__item{display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;white-space:nowrap;padding:3px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:6px}.ce-popover__item:not(:last-of-type){margin-bottom:1px}@media (hover:hover){.ce-popover__item:hover{background-color:#eff2f5}}@media (max-width:650px){.ce-popover__item{font-size:16px;padding:4px}}.ce-popover__item--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-popover__item--hidden{display:none}.ce-popover__item-icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:26px;height:26px;border:1px solid rgba(201,201,204,.48);border-radius:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}@media (max-width:650px){.ce-popover__item-icon{width:36px;height:36px;border-radius:8px}}.ce-popover__item-icon svg{width:12px;height:12px}.ce-popover__item-label:after{content:"";width:25px;display:inline-block}.ce-popover__item-secondary-label{color:#707684;font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width:650px){.ce-popover__item-secondary-label{display:none}}.ce-popover__no-found{display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;white-space:nowrap;padding:3px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:6px}.ce-popover__no-found:not(:last-of-type){margin-bottom:1px}@media (hover:hover){.ce-popover__no-found:hover{background-color:#eff2f5}}@media (max-width:650px){.ce-popover__no-found{font-size:16px;padding:4px}}.ce-popover__no-found{color:#707684;display:none;cursor:default}.ce-popover__no-found--shown{display:block}.ce-popover__no-found:hover{background-color:transparent}@media (max-width:650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1d202b;opacity:.5;z-index:3;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}.ce-popover .cdx-search-field{display:none}}.ce-popover__overlay--hidden{z-index:0;opacity:0;visibility:hidden}.cdx-search-field{--icon-margin-right:10px;background:rgba(232,232,235,.49);border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon .icon{width:14px;height:14px;color:#707684;-ms-flex-negative:0;flex-shrink:0}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}';
        }, function(t, e, n) {
          "use strict";
          n.r(e), n.d(e, "nanoid", function() {
            return s;
          }), n.d(e, "customAlphabet", function() {
            return a;
          }), n.d(e, "customRandom", function() {
            return i;
          }), n.d(e, "urlAlphabet", function() {
            return o;
          }), n.d(e, "random", function() {
            return r;
          });
          let o = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
          let r = (t2) => crypto.getRandomValues(new Uint8Array(t2)), i = (t2, e2, n2) => {
            let o2 = (2 << Math.log(t2.length - 1) / Math.LN2) - 1, r2 = -~(1.6 * o2 * e2 / t2.length);
            return () => {
              let i2 = "";
              for (; ; ) {
                let a2 = n2(r2), s2 = r2;
                for (; s2--; )
                  if (i2 += t2[a2[s2] & o2] || "", i2.length === e2)
                    return i2;
              }
            };
          }, a = (t2, e2) => i(t2, e2, r), s = (t2 = 21) => {
            let e2 = "", n2 = crypto.getRandomValues(new Uint8Array(t2));
            for (; t2--; ) {
              let o2 = 63 & n2[t2];
              e2 += o2 < 36 ? o2.toString(36) : o2 < 62 ? (o2 - 26).toString(36).toUpperCase() : o2 < 63 ? "_" : "-";
            }
            return e2;
          };
        }]);
      });
    }
  });

  // node_modules/@editorjs/header/dist/bundle.js
  var require_bundle = __commonJS({
    "node_modules/@editorjs/header/dist/bundle.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Header = t() : e.Header = t();
      }(window, function() {
        return function(e) {
          var t = {};
          function n(r) {
            if (t[r])
              return t[r].exports;
            var i = t[r] = { i: r, l: false, exports: {} };
            return e[r].call(i.exports, i, i.exports, n), i.l = true, i.exports;
          }
          return n.m = e, n.c = t, n.d = function(e2, t2, r) {
            n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: r });
          }, n.r = function(e2) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
          }, n.t = function(e2, t2) {
            if (1 & t2 && (e2 = n(e2)), 8 & t2)
              return e2;
            if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
              return e2;
            var r = /* @__PURE__ */ Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
              for (var i in e2)
                n.d(r, i, function(t3) {
                  return e2[t3];
                }.bind(null, i));
            return r;
          }, n.n = function(e2) {
            var t2 = e2 && e2.__esModule ? function() {
              return e2.default;
            } : function() {
              return e2;
            };
            return n.d(t2, "a", t2), t2;
          }, n.o = function(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          }, n.p = "/", n(n.s = 0);
        }([function(e, t, n) {
          function r(e2) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
              return typeof e3;
            } : function(e3) {
              return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
            })(e2);
          }
          function i(e2, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var r2 = t2[n2];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
            }
          }
          n(1).toString();
          var a = function() {
            function e2(t3) {
              var n2 = t3.data, r2 = t3.config, i2 = t3.api, a3 = t3.readOnly;
              !function(e3, t4) {
                if (!(e3 instanceof t4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2), this.api = i2, this.readOnly = a3, this._CSS = { block: this.api.styles.block, settingsButton: this.api.styles.settingsButton, settingsButtonActive: this.api.styles.settingsButtonActive, wrapper: "ce-header" }, this._settings = r2, this._data = this.normalizeData(n2), this.settingsButtons = [], this._element = this.getTag();
            }
            var t2, a2, o;
            return t2 = e2, o = [{ key: "conversionConfig", get: function() {
              return { export: "text", import: "text" };
            } }, { key: "sanitize", get: function() {
              return { level: false, text: {} };
            } }, { key: "isReadOnlySupported", get: function() {
              return true;
            } }, { key: "pasteConfig", get: function() {
              return { tags: ["H1", "H2", "H3", "H4", "H5", "H6"] };
            } }, { key: "toolbox", get: function() {
              return { icon: n(6).default, title: "Heading" };
            } }], (a2 = [{ key: "normalizeData", value: function(e3) {
              var t3 = {};
              return "object" !== r(e3) && (e3 = {}), t3.text = e3.text || "", t3.level = parseInt(e3.level) || this.defaultLevel.number, t3;
            } }, { key: "render", value: function() {
              return this._element;
            } }, { key: "renderSettings", value: function() {
              var e3 = this, t3 = document.createElement("DIV");
              return this.levels.length <= 1 || this.levels.forEach(function(n2) {
                var r2 = document.createElement("SPAN");
                r2.classList.add(e3._CSS.settingsButton), e3.currentLevel.number === n2.number && r2.classList.add(e3._CSS.settingsButtonActive), r2.innerHTML = n2.svg, r2.dataset.level = n2.number, r2.addEventListener("click", function() {
                  e3.setLevel(n2.number);
                }), t3.appendChild(r2), e3.settingsButtons.push(r2);
              }), t3;
            } }, { key: "setLevel", value: function(e3) {
              var t3 = this;
              this.data = { level: e3, text: this.data.text }, this.settingsButtons.forEach(function(n2) {
                n2.classList.toggle(t3._CSS.settingsButtonActive, parseInt(n2.dataset.level) === e3);
              });
            } }, { key: "merge", value: function(e3) {
              var t3 = { text: this.data.text + e3.text, level: this.data.level };
              this.data = t3;
            } }, { key: "validate", value: function(e3) {
              return "" !== e3.text.trim();
            } }, { key: "save", value: function(e3) {
              return { text: e3.innerHTML, level: this.currentLevel.number };
            } }, { key: "getTag", value: function() {
              var e3 = document.createElement(this.currentLevel.tag);
              return e3.innerHTML = this._data.text || "", e3.classList.add(this._CSS.wrapper), e3.contentEditable = this.readOnly ? "false" : "true", e3.dataset.placeholder = this.api.i18n.t(this._settings.placeholder || ""), e3;
            } }, { key: "onPaste", value: function(e3) {
              var t3 = e3.detail.data, n2 = this.defaultLevel.number;
              switch (t3.tagName) {
                case "H1":
                  n2 = 1;
                  break;
                case "H2":
                  n2 = 2;
                  break;
                case "H3":
                  n2 = 3;
                  break;
                case "H4":
                  n2 = 4;
                  break;
                case "H5":
                  n2 = 5;
                  break;
                case "H6":
                  n2 = 6;
              }
              this._settings.levels && (n2 = this._settings.levels.reduce(function(e4, t4) {
                return Math.abs(t4 - n2) < Math.abs(e4 - n2) ? t4 : e4;
              })), this.data = { level: n2, text: t3.innerHTML };
            } }, { key: "data", get: function() {
              return this._data.text = this._element.innerHTML, this._data.level = this.currentLevel.number, this._data;
            }, set: function(e3) {
              if (this._data = this.normalizeData(e3), void 0 !== e3.level && this._element.parentNode) {
                var t3 = this.getTag();
                t3.innerHTML = this._element.innerHTML, this._element.parentNode.replaceChild(t3, this._element), this._element = t3;
              }
              void 0 !== e3.text && (this._element.innerHTML = this._data.text || "");
            } }, { key: "currentLevel", get: function() {
              var e3 = this, t3 = this.levels.find(function(t4) {
                return t4.number === e3._data.level;
              });
              return t3 || (t3 = this.defaultLevel), t3;
            } }, { key: "defaultLevel", get: function() {
              var e3 = this;
              if (this._settings.defaultLevel) {
                var t3 = this.levels.find(function(t4) {
                  return t4.number === e3._settings.defaultLevel;
                });
                if (t3)
                  return t3;
                console.warn("(\u0E07'\u0300-'\u0301)\u0E07 Heading Tool: the default level specified was not found in available levels");
              }
              return this.levels[1];
            } }, { key: "levels", get: function() {
              var e3 = this, t3 = [{ number: 1, tag: "H1", svg: '<svg width="16" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.14 1.494V4.98h4.62V1.494c0-.498.098-.871.293-1.12A.927.927 0 0 1 7.82 0c.322 0 .583.123.782.37.2.246.3.62.3 1.124v9.588c0 .503-.101.88-.303 1.128a.957.957 0 0 1-.779.374.921.921 0 0 1-.77-.378c-.193-.251-.29-.626-.29-1.124V6.989H2.14v4.093c0 .503-.1.88-.302 1.128a.957.957 0 0 1-.778.374.921.921 0 0 1-.772-.378C.096 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.285.374A.922.922 0 0 1 1.06 0c.321 0 .582.123.782.37.199.246.299.62.299 1.124zm11.653 9.985V5.27c-1.279.887-2.14 1.33-2.583 1.33a.802.802 0 0 1-.563-.228.703.703 0 0 1-.245-.529c0-.232.08-.402.241-.511.161-.11.446-.25.854-.424.61-.259 1.096-.532 1.462-.818a5.84 5.84 0 0 0 .97-.962c.282-.355.466-.573.552-.655.085-.082.246-.123.483-.123.267 0 .481.093.642.28.161.186.242.443.242.77v7.813c0 .914-.345 1.371-1.035 1.371-.307 0-.554-.093-.74-.28-.187-.186-.28-.461-.28-.825z"/></svg>' }, { number: 2, tag: "H2", svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm10.99 9.288h3.527c.351 0 .62.072.804.216.185.144.277.34.277.588 0 .22-.073.408-.22.56-.146.154-.368.23-.665.23h-4.972c-.338 0-.601-.093-.79-.28a.896.896 0 0 1-.284-.659c0-.162.06-.377.182-.645s.255-.478.399-.631a38.617 38.617 0 0 1 1.621-1.598c.482-.444.827-.735 1.034-.875.369-.261.676-.523.922-.787.245-.263.432-.534.56-.81.129-.278.193-.549.193-.815 0-.288-.069-.546-.206-.773a1.428 1.428 0 0 0-.56-.53 1.618 1.618 0 0 0-.774-.19c-.59 0-1.054.26-1.392.777-.045.068-.12.252-.226.554-.106.302-.225.534-.358.696-.133.162-.328.243-.585.243a.76.76 0 0 1-.56-.223c-.149-.148-.223-.351-.223-.608 0-.31.07-.635.21-.972.139-.338.347-.645.624-.92a3.093 3.093 0 0 1 1.054-.665c.426-.169.924-.253 1.496-.253.69 0 1.277.108 1.764.324.315.144.592.343.83.595.24.252.425.544.558.875.133.33.2.674.2 1.03 0 .558-.14 1.066-.416 1.523-.277.457-.56.815-.848 1.074-.288.26-.771.666-1.45 1.22-.677.554-1.142.984-1.394 1.29a3.836 3.836 0 0 0-.331.44z"/></svg>' }, { number: 3, tag: "H3", svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm11.61 4.919c.418 0 .778-.123 1.08-.368.301-.245.452-.597.452-1.055 0-.35-.12-.65-.36-.902-.241-.252-.566-.378-.974-.378-.277 0-.505.038-.684.116a1.1 1.1 0 0 0-.426.306 2.31 2.31 0 0 0-.296.49c-.093.2-.178.388-.255.565a.479.479 0 0 1-.245.225.965.965 0 0 1-.409.081.706.706 0 0 1-.5-.22c-.152-.148-.228-.345-.228-.59 0-.236.071-.484.214-.745a2.72 2.72 0 0 1 .627-.746 3.149 3.149 0 0 1 1.024-.568 4.122 4.122 0 0 1 1.368-.214c.44 0 .842.06 1.205.18.364.12.679.294.947.52.267.228.47.49.606.79.136.3.204.622.204.967 0 .454-.099.843-.296 1.168-.198.324-.48.64-.848.95.354.19.653.408.895.653.243.245.426.516.548.813.123.298.184.619.184.964 0 .413-.083.812-.248 1.198-.166.386-.41.73-.732 1.031a3.49 3.49 0 0 1-1.147.708c-.443.17-.932.256-1.467.256a3.512 3.512 0 0 1-1.464-.293 3.332 3.332 0 0 1-1.699-1.64c-.142-.314-.214-.573-.214-.777 0-.263.085-.475.255-.636a.89.89 0 0 1 .637-.242c.127 0 .25.037.367.112a.53.53 0 0 1 .232.27c.236.63.489 1.099.759 1.405.27.306.65.46 1.14.46a1.714 1.714 0 0 0 1.46-.824c.17-.273.256-.588.256-.947 0-.53-.145-.947-.436-1.249-.29-.302-.694-.453-1.212-.453-.09 0-.231.01-.422.028-.19.018-.313.027-.367.027-.25 0-.443-.062-.579-.187-.136-.125-.204-.299-.204-.521 0-.218.081-.394.245-.528.163-.134.406-.2.728-.2h.28z"/></svg>' }, { number: 4, tag: "H4", svg: '<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm13.003 10.09v-1.252h-3.38c-.427 0-.746-.097-.96-.29-.213-.193-.32-.456-.32-.788 0-.085.016-.171.048-.259.031-.088.078-.18.141-.276.063-.097.128-.19.195-.28.068-.09.15-.2.25-.33l3.568-4.774a5.44 5.44 0 0 1 .576-.683.763.763 0 0 1 .542-.212c.682 0 1.023.39 1.023 1.171v5.212h.29c.346 0 .623.047.832.142.208.094.313.3.313.62 0 .26-.086.45-.256.568-.17.12-.427.179-.768.179h-.41v1.252c0 .346-.077.603-.23.771-.152.168-.356.253-.612.253a.78.78 0 0 1-.61-.26c-.154-.173-.232-.427-.232-.764zm-2.895-2.76h2.895V4.91L12.26 8.823z"/></svg>' }, { number: 5, tag: "H5", svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm14.16 2.645h-3.234l-.388 2.205c.644-.344 1.239-.517 1.783-.517.436 0 .843.082 1.222.245.38.164.712.39.998.677.286.289.51.63.674 1.025.163.395.245.82.245 1.273 0 .658-.148 1.257-.443 1.797-.295.54-.72.97-1.276 1.287-.556.318-1.197.477-1.923.477-.813 0-1.472-.15-1.978-.45-.506-.3-.865-.643-1.076-1.031-.21-.388-.316-.727-.316-1.018 0-.177.073-.345.22-.504a.725.725 0 0 1 .556-.238c.381 0 .665.22.85.66.182.404.427.719.736.943.309.225.654.337 1.035.337.35 0 .656-.09.919-.272.263-.182.466-.431.61-.749.142-.318.214-.678.214-1.082 0-.436-.078-.808-.232-1.117a1.607 1.607 0 0 0-.62-.69 1.674 1.674 0 0 0-.864-.229c-.39 0-.67.048-.837.143-.168.095-.41.262-.725.5-.316.239-.576.358-.78.358a.843.843 0 0 1-.592-.242c-.173-.16-.259-.344-.259-.548 0-.022.025-.177.075-.463l.572-3.26c.063-.39.181-.675.354-.852.172-.177.454-.265.844-.265h3.595c.708 0 1.062.27 1.062.81a.711.711 0 0 1-.26.572c-.172.145-.426.218-.762.218z"/></svg>' }, { number: 6, tag: "H6", svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zM12.53 7.058a3.093 3.093 0 0 1 1.004-.814 2.734 2.734 0 0 1 1.214-.264c.43 0 .827.08 1.19.24.365.161.684.39.957.686.274.296.485.645.635 1.048a3.6 3.6 0 0 1 .223 1.262c0 .637-.145 1.216-.437 1.736-.292.52-.699.926-1.221 1.218-.522.292-1.114.438-1.774.438-.76 0-1.416-.186-1.967-.557-.552-.37-.974-.919-1.265-1.645-.292-.726-.438-1.613-.438-2.662 0-.855.088-1.62.265-2.293.176-.674.43-1.233.76-1.676.33-.443.73-.778 1.2-1.004.47-.226 1.006-.339 1.608-.339.579 0 1.089.113 1.53.34.44.225.773.506.997.84.224.335.335.656.335.964 0 .185-.07.354-.21.505a.698.698 0 0 1-.536.227.874.874 0 0 1-.529-.18 1.039 1.039 0 0 1-.36-.498 1.42 1.42 0 0 0-.495-.655 1.3 1.3 0 0 0-.786-.247c-.24 0-.479.069-.716.207a1.863 1.863 0 0 0-.6.56c-.33.479-.525 1.333-.584 2.563zm1.832 4.213c.456 0 .834-.186 1.133-.56.298-.373.447-.862.447-1.468 0-.412-.07-.766-.21-1.062a1.584 1.584 0 0 0-.577-.678 1.47 1.47 0 0 0-.807-.234c-.28 0-.548.074-.804.224-.255.149-.461.365-.617.647a2.024 2.024 0 0 0-.234.994c0 .61.158 1.12.475 1.527.316.407.714.61 1.194.61z"/></svg>' }];
              return this._settings.levels ? t3.filter(function(t4) {
                return e3._settings.levels.includes(t4.number);
              }) : t3;
            } }]) && i(t2.prototype, a2), o && i(t2, o), e2;
          }();
          e.exports = a;
        }, function(e, t, n) {
          var r = n(2);
          "string" == typeof r && (r = [[e.i, r, ""]]);
          var i = { hmr: true, transform: void 0, insertInto: void 0 };
          n(4)(r, i);
          r.locals && (e.exports = r.locals);
        }, function(e, t, n) {
          (e.exports = n(3)(false)).push([e.i, "/**\n * Plugin styles\n */\n.ce-header {\n  padding: 0.6em 0 3px;\n  margin: 0;\n  line-height: 1.25em;\n  outline: none;\n}\n\n.ce-header p,\n.ce-header div{\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n/**\n * Styles for Plugin icon in Toolbar\n */\n.ce-header__icon {}\n\n.ce-header[contentEditable=true][data-placeholder]::before{\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  display: none;\n  cursor: text;\n}\n\n.ce-header[contentEditable=true][data-placeholder]:empty::before {\n  display: block;\n}\n\n.ce-header[contentEditable=true][data-placeholder]:empty:focus::before {\n  display: none;\n}\n", ""]);
        }, function(e, t) {
          e.exports = function(e2) {
            var t2 = [];
            return t2.toString = function() {
              return this.map(function(t3) {
                var n = function(e3, t4) {
                  var n2 = e3[1] || "", r = e3[3];
                  if (!r)
                    return n2;
                  if (t4 && "function" == typeof btoa) {
                    var i = (o = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), a = r.sources.map(function(e4) {
                      return "/*# sourceURL=" + r.sourceRoot + e4 + " */";
                    });
                    return [n2].concat(a).concat([i]).join("\n");
                  }
                  var o;
                  return [n2].join("\n");
                }(t3, e2);
                return t3[2] ? "@media " + t3[2] + "{" + n + "}" : n;
              }).join("");
            }, t2.i = function(e3, n) {
              "string" == typeof e3 && (e3 = [[null, e3, ""]]);
              for (var r = {}, i = 0; i < this.length; i++) {
                var a = this[i][0];
                "number" == typeof a && (r[a] = true);
              }
              for (i = 0; i < e3.length; i++) {
                var o = e3[i];
                "number" == typeof o[0] && r[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), t2.push(o));
              }
            }, t2;
          };
        }, function(e, t, n) {
          var r, i, a = {}, o = (r = function() {
            return window && document && document.all && !window.atob;
          }, function() {
            return void 0 === i && (i = r.apply(this, arguments)), i;
          }), s = function(e2) {
            return document.querySelector(e2);
          }, c = function(e2) {
            var t2 = {};
            return function(e3) {
              if ("function" == typeof e3)
                return e3();
              if (void 0 === t2[e3]) {
                var n2 = s.call(this, e3);
                if (window.HTMLIFrameElement && n2 instanceof window.HTMLIFrameElement)
                  try {
                    n2 = n2.contentDocument.head;
                  } catch (e4) {
                    n2 = null;
                  }
                t2[e3] = n2;
              }
              return t2[e3];
            };
          }(), l = null, u = 0, f = [], d = n(5);
          function h(e2, t2) {
            for (var n2 = 0; n2 < e2.length; n2++) {
              var r2 = e2[n2], i2 = a[r2.id];
              if (i2) {
                i2.refs++;
                for (var o2 = 0; o2 < i2.parts.length; o2++)
                  i2.parts[o2](r2.parts[o2]);
                for (; o2 < r2.parts.length; o2++)
                  i2.parts.push(y(r2.parts[o2], t2));
              } else {
                var s2 = [];
                for (o2 = 0; o2 < r2.parts.length; o2++)
                  s2.push(y(r2.parts[o2], t2));
                a[r2.id] = { id: r2.id, refs: 1, parts: s2 };
              }
            }
          }
          function v(e2, t2) {
            for (var n2 = [], r2 = {}, i2 = 0; i2 < e2.length; i2++) {
              var a2 = e2[i2], o2 = t2.base ? a2[0] + t2.base : a2[0], s2 = { css: a2[1], media: a2[2], sourceMap: a2[3] };
              r2[o2] ? r2[o2].parts.push(s2) : n2.push(r2[o2] = { id: o2, parts: [s2] });
            }
            return n2;
          }
          function p(e2, t2) {
            var n2 = c(e2.insertInto);
            if (!n2)
              throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r2 = f[f.length - 1];
            if ("top" === e2.insertAt)
              r2 ? r2.nextSibling ? n2.insertBefore(t2, r2.nextSibling) : n2.appendChild(t2) : n2.insertBefore(t2, n2.firstChild), f.push(t2);
            else if ("bottom" === e2.insertAt)
              n2.appendChild(t2);
            else {
              if ("object" != typeof e2.insertAt || !e2.insertAt.before)
                throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
              var i2 = c(e2.insertInto + " " + e2.insertAt.before);
              n2.insertBefore(t2, i2);
            }
          }
          function g(e2) {
            if (null === e2.parentNode)
              return false;
            e2.parentNode.removeChild(e2);
            var t2 = f.indexOf(e2);
            t2 >= 0 && f.splice(t2, 1);
          }
          function m(e2) {
            var t2 = document.createElement("style");
            return void 0 === e2.attrs.type && (e2.attrs.type = "text/css"), b(t2, e2.attrs), p(e2, t2), t2;
          }
          function b(e2, t2) {
            Object.keys(t2).forEach(function(n2) {
              e2.setAttribute(n2, t2[n2]);
            });
          }
          function y(e2, t2) {
            var n2, r2, i2, a2;
            if (t2.transform && e2.css) {
              if (!(a2 = t2.transform(e2.css)))
                return function() {
                };
              e2.css = a2;
            }
            if (t2.singleton) {
              var o2 = u++;
              n2 = l || (l = m(t2)), r2 = L.bind(null, n2, o2, false), i2 = L.bind(null, n2, o2, true);
            } else
              e2.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n2 = function(e3) {
                var t3 = document.createElement("link");
                return void 0 === e3.attrs.type && (e3.attrs.type = "text/css"), e3.attrs.rel = "stylesheet", b(t3, e3.attrs), p(e3, t3), t3;
              }(t2), r2 = _.bind(null, n2, t2), i2 = function() {
                g(n2), n2.href && URL.revokeObjectURL(n2.href);
              }) : (n2 = m(t2), r2 = H.bind(null, n2), i2 = function() {
                g(n2);
              });
            return r2(e2), function(t3) {
              if (t3) {
                if (t3.css === e2.css && t3.media === e2.media && t3.sourceMap === e2.sourceMap)
                  return;
                r2(e2 = t3);
              } else
                i2();
            };
          }
          e.exports = function(e2, t2) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
              throw new Error("The style-loader cannot be used in a non-browser environment");
            (t2 = t2 || {}).attrs = "object" == typeof t2.attrs ? t2.attrs : {}, t2.singleton || "boolean" == typeof t2.singleton || (t2.singleton = o()), t2.insertInto || (t2.insertInto = "head"), t2.insertAt || (t2.insertAt = "bottom");
            var n2 = v(e2, t2);
            return h(n2, t2), function(e3) {
              for (var r2 = [], i2 = 0; i2 < n2.length; i2++) {
                var o2 = n2[i2];
                (s2 = a[o2.id]).refs--, r2.push(s2);
              }
              e3 && h(v(e3, t2), t2);
              for (i2 = 0; i2 < r2.length; i2++) {
                var s2;
                if (0 === (s2 = r2[i2]).refs) {
                  for (var c2 = 0; c2 < s2.parts.length; c2++)
                    s2.parts[c2]();
                  delete a[s2.id];
                }
              }
            };
          };
          var w, x = (w = [], function(e2, t2) {
            return w[e2] = t2, w.filter(Boolean).join("\n");
          });
          function L(e2, t2, n2, r2) {
            var i2 = n2 ? "" : r2.css;
            if (e2.styleSheet)
              e2.styleSheet.cssText = x(t2, i2);
            else {
              var a2 = document.createTextNode(i2), o2 = e2.childNodes;
              o2[t2] && e2.removeChild(o2[t2]), o2.length ? e2.insertBefore(a2, o2[t2]) : e2.appendChild(a2);
            }
          }
          function H(e2, t2) {
            var n2 = t2.css, r2 = t2.media;
            if (r2 && e2.setAttribute("media", r2), e2.styleSheet)
              e2.styleSheet.cssText = n2;
            else {
              for (; e2.firstChild; )
                e2.removeChild(e2.firstChild);
              e2.appendChild(document.createTextNode(n2));
            }
          }
          function _(e2, t2, n2) {
            var r2 = n2.css, i2 = n2.sourceMap, a2 = void 0 === t2.convertToAbsoluteUrls && i2;
            (t2.convertToAbsoluteUrls || a2) && (r2 = d(r2)), i2 && (r2 += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i2)))) + " */");
            var o2 = new Blob([r2], { type: "text/css" }), s2 = e2.href;
            e2.href = URL.createObjectURL(o2), s2 && URL.revokeObjectURL(s2);
          }
        }, function(e, t) {
          e.exports = function(e2) {
            var t2 = "undefined" != typeof window && window.location;
            if (!t2)
              throw new Error("fixUrls requires window.location");
            if (!e2 || "string" != typeof e2)
              return e2;
            var n = t2.protocol + "//" + t2.host, r = n + t2.pathname.replace(/\/[^\/]*$/, "/");
            return e2.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e3, t3) {
              var i, a = t3.trim().replace(/^"(.*)"$/, function(e4, t4) {
                return t4;
              }).replace(/^'(.*)'$/, function(e4, t4) {
                return t4;
              });
              return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? e3 : (i = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? n + a : r + a.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")");
            });
          };
        }, function(e, t, n) {
          "use strict";
          n.r(t), t.default = '<svg width="10" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14">\n  <path d="M7.6 8.15H2.25v4.525a1.125 1.125 0 0 1-2.25 0V1.125a1.125 1.125 0 1 1 2.25 0V5.9H7.6V1.125a1.125 1.125 0 0 1 2.25 0v11.55a1.125 1.125 0 0 1-2.25 0V8.15z"/>\n</svg>\n';
        }]);
      });
    }
  });

  // node_modules/@editorjs/image/dist/bundle.js
  var require_bundle2 = __commonJS({
    "node_modules/@editorjs/image/dist/bundle.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ImageTool = e() : t.ImageTool = e();
      }(window, function() {
        return function(t) {
          var e = {};
          function n(o) {
            if (e[o])
              return e[o].exports;
            var r = e[o] = { i: o, l: false, exports: {} };
            return t[o].call(r.exports, r, r.exports, n), r.l = true, r.exports;
          }
          return n.m = t, n.c = e, n.d = function(t2, e2, o) {
            n.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: o });
          }, n.r = function(t2) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
          }, n.t = function(t2, e2) {
            if (1 & e2 && (t2 = n(t2)), 8 & e2)
              return t2;
            if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule)
              return t2;
            var o = /* @__PURE__ */ Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2)
              for (var r in t2)
                n.d(o, r, function(e3) {
                  return t2[e3];
                }.bind(null, r));
            return o;
          }, n.n = function(t2) {
            var e2 = t2 && t2.__esModule ? function() {
              return t2.default;
            } : function() {
              return t2;
            };
            return n.d(e2, "a", e2), e2;
          }, n.o = function(t2, e2) {
            return Object.prototype.hasOwnProperty.call(t2, e2);
          }, n.p = "/", n(n.s = 25);
        }([function(t, e) {
          function n(t2, e2) {
            for (var n2 = 0; n2 < e2.length; n2++) {
              var o = e2[n2];
              o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(t2, o.key, o);
            }
          }
          t.exports = function(t2, e2, o) {
            return e2 && n(t2.prototype, e2), o && n(t2, o), t2;
          };
        }, function(t, e) {
          t.exports = function(t2, e2) {
            if (!(t2 instanceof e2))
              throw new TypeError("Cannot call a class as a function");
          };
        }, function(t, e, n) {
          window, t.exports = function(t2) {
            var e2 = {};
            function n2(o) {
              if (e2[o])
                return e2[o].exports;
              var r = e2[o] = { i: o, l: false, exports: {} };
              return t2[o].call(r.exports, r, r.exports, n2), r.l = true, r.exports;
            }
            return n2.m = t2, n2.c = e2, n2.d = function(t3, e3, o) {
              n2.o(t3, e3) || Object.defineProperty(t3, e3, { enumerable: true, get: o });
            }, n2.r = function(t3) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t3, "__esModule", { value: true });
            }, n2.t = function(t3, e3) {
              if (1 & e3 && (t3 = n2(t3)), 8 & e3)
                return t3;
              if (4 & e3 && "object" == typeof t3 && t3 && t3.__esModule)
                return t3;
              var o = /* @__PURE__ */ Object.create(null);
              if (n2.r(o), Object.defineProperty(o, "default", { enumerable: true, value: t3 }), 2 & e3 && "string" != typeof t3)
                for (var r in t3)
                  n2.d(o, r, function(e4) {
                    return t3[e4];
                  }.bind(null, r));
              return o;
            }, n2.n = function(t3) {
              var e3 = t3 && t3.__esModule ? function() {
                return t3.default;
              } : function() {
                return t3;
              };
              return n2.d(e3, "a", e3), e3;
            }, n2.o = function(t3, e3) {
              return Object.prototype.hasOwnProperty.call(t3, e3);
            }, n2.p = "", n2(n2.s = 3);
          }([function(t2, e2) {
            var n2;
            n2 = function() {
              return this;
            }();
            try {
              n2 = n2 || new Function("return this")();
            } catch (t3) {
              "object" == typeof window && (n2 = window);
            }
            t2.exports = n2;
          }, function(t2, e2, n2) {
            "use strict";
            (function(t3) {
              var o = n2(2), r = setTimeout;
              function i() {
              }
              function a(t4) {
                if (!(this instanceof a))
                  throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof t4)
                  throw new TypeError("not a function");
                this._state = 0, this._handled = false, this._value = void 0, this._deferreds = [], d(t4, this);
              }
              function u(t4, e3) {
                for (; 3 === t4._state; )
                  t4 = t4._value;
                0 !== t4._state ? (t4._handled = true, a._immediateFn(function() {
                  var n3 = 1 === t4._state ? e3.onFulfilled : e3.onRejected;
                  if (null !== n3) {
                    var o2;
                    try {
                      o2 = n3(t4._value);
                    } catch (t5) {
                      return void s(e3.promise, t5);
                    }
                    c(e3.promise, o2);
                  } else
                    (1 === t4._state ? c : s)(e3.promise, t4._value);
                })) : t4._deferreds.push(e3);
              }
              function c(t4, e3) {
                try {
                  if (e3 === t4)
                    throw new TypeError("A promise cannot be resolved with itself.");
                  if (e3 && ("object" == typeof e3 || "function" == typeof e3)) {
                    var n3 = e3.then;
                    if (e3 instanceof a)
                      return t4._state = 3, t4._value = e3, void l(t4);
                    if ("function" == typeof n3)
                      return void d((o2 = n3, r2 = e3, function() {
                        o2.apply(r2, arguments);
                      }), t4);
                  }
                  t4._state = 1, t4._value = e3, l(t4);
                } catch (e4) {
                  s(t4, e4);
                }
                var o2, r2;
              }
              function s(t4, e3) {
                t4._state = 2, t4._value = e3, l(t4);
              }
              function l(t4) {
                2 === t4._state && 0 === t4._deferreds.length && a._immediateFn(function() {
                  t4._handled || a._unhandledRejectionFn(t4._value);
                });
                for (var e3 = 0, n3 = t4._deferreds.length; e3 < n3; e3++)
                  u(t4, t4._deferreds[e3]);
                t4._deferreds = null;
              }
              function f(t4, e3, n3) {
                this.onFulfilled = "function" == typeof t4 ? t4 : null, this.onRejected = "function" == typeof e3 ? e3 : null, this.promise = n3;
              }
              function d(t4, e3) {
                var n3 = false;
                try {
                  t4(function(t5) {
                    n3 || (n3 = true, c(e3, t5));
                  }, function(t5) {
                    n3 || (n3 = true, s(e3, t5));
                  });
                } catch (t5) {
                  if (n3)
                    return;
                  n3 = true, s(e3, t5);
                }
              }
              a.prototype.catch = function(t4) {
                return this.then(null, t4);
              }, a.prototype.then = function(t4, e3) {
                var n3 = new this.constructor(i);
                return u(this, new f(t4, e3, n3)), n3;
              }, a.prototype.finally = o.a, a.all = function(t4) {
                return new a(function(e3, n3) {
                  if (!t4 || void 0 === t4.length)
                    throw new TypeError("Promise.all accepts an array");
                  var o2 = Array.prototype.slice.call(t4);
                  if (0 === o2.length)
                    return e3([]);
                  var r2 = o2.length;
                  function i2(t5, a3) {
                    try {
                      if (a3 && ("object" == typeof a3 || "function" == typeof a3)) {
                        var u2 = a3.then;
                        if ("function" == typeof u2)
                          return void u2.call(a3, function(e4) {
                            i2(t5, e4);
                          }, n3);
                      }
                      o2[t5] = a3, 0 == --r2 && e3(o2);
                    } catch (t6) {
                      n3(t6);
                    }
                  }
                  for (var a2 = 0; a2 < o2.length; a2++)
                    i2(a2, o2[a2]);
                });
              }, a.resolve = function(t4) {
                return t4 && "object" == typeof t4 && t4.constructor === a ? t4 : new a(function(e3) {
                  e3(t4);
                });
              }, a.reject = function(t4) {
                return new a(function(e3, n3) {
                  n3(t4);
                });
              }, a.race = function(t4) {
                return new a(function(e3, n3) {
                  for (var o2 = 0, r2 = t4.length; o2 < r2; o2++)
                    t4[o2].then(e3, n3);
                });
              }, a._immediateFn = "function" == typeof t3 && function(e3) {
                t3(e3);
              } || function(t4) {
                r(t4, 0);
              }, a._unhandledRejectionFn = function(t4) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t4);
              }, e2.a = a;
            }).call(this, n2(5).setImmediate);
          }, function(t2, e2, n2) {
            "use strict";
            e2.a = function(t3) {
              var e3 = this.constructor;
              return this.then(function(n3) {
                return e3.resolve(t3()).then(function() {
                  return n3;
                });
              }, function(n3) {
                return e3.resolve(t3()).then(function() {
                  return e3.reject(n3);
                });
              });
            };
          }, function(t2, e2, n2) {
            "use strict";
            function o(t3) {
              return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
                return typeof t4;
              } : function(t4) {
                return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
              })(t3);
            }
            n2(4);
            var r, i, a, u, c, s, l, f = n2(8), d = (i = function(t3) {
              return new Promise(function(e3, n3) {
                t3 = u(t3), (t3 = c(t3)).beforeSend && t3.beforeSend();
                var o2 = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
                o2.open(t3.method, t3.url), o2.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t3.headers).forEach(function(e4) {
                  var n4 = t3.headers[e4];
                  o2.setRequestHeader(e4, n4);
                });
                var r2 = t3.ratio;
                o2.upload.addEventListener("progress", function(e4) {
                  var n4 = Math.round(e4.loaded / e4.total * 100), o3 = Math.ceil(n4 * r2 / 100);
                  t3.progress(Math.min(o3, 100));
                }, false), o2.addEventListener("progress", function(e4) {
                  var n4 = Math.round(e4.loaded / e4.total * 100), o3 = Math.ceil(n4 * (100 - r2) / 100) + r2;
                  t3.progress(Math.min(o3, 100));
                }, false), o2.onreadystatechange = function() {
                  if (4 === o2.readyState) {
                    var t4 = o2.response;
                    try {
                      t4 = JSON.parse(t4);
                    } catch (t5) {
                    }
                    var r3 = f.parseHeaders(o2.getAllResponseHeaders()), i2 = { body: t4, code: o2.status, headers: r3 };
                    l(o2.status) ? e3(i2) : n3(i2);
                  }
                }, o2.send(t3.data);
              });
            }, a = function(t3) {
              return t3.method = "POST", i(t3);
            }, u = function() {
              var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              if (t3.url && "string" != typeof t3.url)
                throw new Error("Url must be a string");
              if (t3.url = t3.url || "", t3.method && "string" != typeof t3.method)
                throw new Error("`method` must be a string or null");
              if (t3.method = t3.method ? t3.method.toUpperCase() : "GET", t3.headers && "object" !== o(t3.headers))
                throw new Error("`headers` must be an object or null");
              if (t3.headers = t3.headers || {}, t3.type && ("string" != typeof t3.type || !Object.values(r).includes(t3.type)))
                throw new Error("`type` must be taken from module's \xABcontentType\xBB library");
              if (t3.progress && "function" != typeof t3.progress)
                throw new Error("`progress` must be a function or null");
              if (t3.progress = t3.progress || function(t4) {
              }, t3.beforeSend = t3.beforeSend || function(t4) {
              }, t3.ratio && "number" != typeof t3.ratio)
                throw new Error("`ratio` must be a number");
              if (t3.ratio < 0 || t3.ratio > 100)
                throw new Error("`ratio` must be in a 0-100 interval");
              if (t3.ratio = t3.ratio || 90, t3.accept && "string" != typeof t3.accept)
                throw new Error("`accept` must be a string with a list of allowed mime-types");
              if (t3.accept = t3.accept || "*/*", t3.multiple && "boolean" != typeof t3.multiple)
                throw new Error("`multiple` must be a true or false");
              if (t3.multiple = t3.multiple || false, t3.fieldName && "string" != typeof t3.fieldName)
                throw new Error("`fieldName` must be a string");
              return t3.fieldName = t3.fieldName || "files", t3;
            }, c = function(t3) {
              switch (t3.method) {
                case "GET":
                  var e3 = s(t3.data, r.URLENCODED);
                  delete t3.data, t3.url = /\?/.test(t3.url) ? t3.url + "&" + e3 : t3.url + "?" + e3;
                  break;
                case "POST":
                case "PUT":
                case "DELETE":
                case "UPDATE":
                  var n3 = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).type || r.JSON;
                  }(t3);
                  (f.isFormData(t3.data) || f.isFormElement(t3.data)) && (n3 = r.FORM), t3.data = s(t3.data, n3), n3 !== d.contentType.FORM && (t3.headers["content-type"] = n3);
              }
              return t3;
            }, s = function() {
              var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              switch (arguments.length > 1 ? arguments[1] : void 0) {
                case r.URLENCODED:
                  return f.urlEncode(t3);
                case r.JSON:
                  return f.jsonEncode(t3);
                case r.FORM:
                  return f.formEncode(t3);
                default:
                  return t3;
              }
            }, l = function(t3) {
              return t3 >= 200 && t3 < 300;
            }, { contentType: r = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: i, get: function(t3) {
              return t3.method = "GET", i(t3);
            }, post: a, transport: function(t3) {
              return t3 = u(t3), f.selectFiles(t3).then(function(e3) {
                for (var n3 = new FormData(), o2 = 0; o2 < e3.length; o2++)
                  n3.append(t3.fieldName, e3[o2], e3[o2].name);
                f.isObject(t3.data) && Object.keys(t3.data).forEach(function(e4) {
                  var o3 = t3.data[e4];
                  n3.append(e4, o3);
                });
                var r2 = t3.beforeSend;
                return t3.beforeSend = function() {
                  return r2(e3);
                }, t3.data = n3, a(t3);
              });
            }, selectFiles: function(t3) {
              return delete (t3 = u(t3)).beforeSend, f.selectFiles(t3);
            } });
            t2.exports = d;
          }, function(t2, e2, n2) {
            "use strict";
            n2.r(e2);
            var o = n2(1);
            window.Promise = window.Promise || o.a;
          }, function(t2, e2, n2) {
            (function(t3) {
              var o = void 0 !== t3 && t3 || "undefined" != typeof self && self || window, r = Function.prototype.apply;
              function i(t4, e3) {
                this._id = t4, this._clearFn = e3;
              }
              e2.setTimeout = function() {
                return new i(r.call(setTimeout, o, arguments), clearTimeout);
              }, e2.setInterval = function() {
                return new i(r.call(setInterval, o, arguments), clearInterval);
              }, e2.clearTimeout = e2.clearInterval = function(t4) {
                t4 && t4.close();
              }, i.prototype.unref = i.prototype.ref = function() {
              }, i.prototype.close = function() {
                this._clearFn.call(o, this._id);
              }, e2.enroll = function(t4, e3) {
                clearTimeout(t4._idleTimeoutId), t4._idleTimeout = e3;
              }, e2.unenroll = function(t4) {
                clearTimeout(t4._idleTimeoutId), t4._idleTimeout = -1;
              }, e2._unrefActive = e2.active = function(t4) {
                clearTimeout(t4._idleTimeoutId);
                var e3 = t4._idleTimeout;
                e3 >= 0 && (t4._idleTimeoutId = setTimeout(function() {
                  t4._onTimeout && t4._onTimeout();
                }, e3));
              }, n2(6), e2.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t3 && t3.setImmediate || this && this.setImmediate, e2.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t3 && t3.clearImmediate || this && this.clearImmediate;
            }).call(this, n2(0));
          }, function(t2, e2, n2) {
            (function(t3, e3) {
              !function(t4, n3) {
                "use strict";
                if (!t4.setImmediate) {
                  var o, r, i, a, u, c = 1, s = {}, l = false, f = t4.document, d = Object.getPrototypeOf && Object.getPrototypeOf(t4);
                  d = d && d.setTimeout ? d : t4, "[object process]" === {}.toString.call(t4.process) ? o = function(t5) {
                    e3.nextTick(function() {
                      h(t5);
                    });
                  } : function() {
                    if (t4.postMessage && !t4.importScripts) {
                      var e4 = true, n4 = t4.onmessage;
                      return t4.onmessage = function() {
                        e4 = false;
                      }, t4.postMessage("", "*"), t4.onmessage = n4, e4;
                    }
                  }() ? (a = "setImmediate$" + Math.random() + "$", u = function(e4) {
                    e4.source === t4 && "string" == typeof e4.data && 0 === e4.data.indexOf(a) && h(+e4.data.slice(a.length));
                  }, t4.addEventListener ? t4.addEventListener("message", u, false) : t4.attachEvent("onmessage", u), o = function(e4) {
                    t4.postMessage(a + e4, "*");
                  }) : t4.MessageChannel ? ((i = new MessageChannel()).port1.onmessage = function(t5) {
                    h(t5.data);
                  }, o = function(t5) {
                    i.port2.postMessage(t5);
                  }) : f && "onreadystatechange" in f.createElement("script") ? (r = f.documentElement, o = function(t5) {
                    var e4 = f.createElement("script");
                    e4.onreadystatechange = function() {
                      h(t5), e4.onreadystatechange = null, r.removeChild(e4), e4 = null;
                    }, r.appendChild(e4);
                  }) : o = function(t5) {
                    setTimeout(h, 0, t5);
                  }, d.setImmediate = function(t5) {
                    "function" != typeof t5 && (t5 = new Function("" + t5));
                    for (var e4 = new Array(arguments.length - 1), n4 = 0; n4 < e4.length; n4++)
                      e4[n4] = arguments[n4 + 1];
                    var r2 = { callback: t5, args: e4 };
                    return s[c] = r2, o(c), c++;
                  }, d.clearImmediate = p;
                }
                function p(t5) {
                  delete s[t5];
                }
                function h(t5) {
                  if (l)
                    setTimeout(h, 0, t5);
                  else {
                    var e4 = s[t5];
                    if (e4) {
                      l = true;
                      try {
                        !function(t6) {
                          var e5 = t6.callback, n4 = t6.args;
                          switch (n4.length) {
                            case 0:
                              e5();
                              break;
                            case 1:
                              e5(n4[0]);
                              break;
                            case 2:
                              e5(n4[0], n4[1]);
                              break;
                            case 3:
                              e5(n4[0], n4[1], n4[2]);
                              break;
                            default:
                              e5.apply(void 0, n4);
                          }
                        }(e4);
                      } finally {
                        p(t5), l = false;
                      }
                    }
                  }
                }
              }("undefined" == typeof self ? void 0 === t3 ? this : t3 : self);
            }).call(this, n2(0), n2(7));
          }, function(t2, e2) {
            var n2, o, r = t2.exports = {};
            function i() {
              throw new Error("setTimeout has not been defined");
            }
            function a() {
              throw new Error("clearTimeout has not been defined");
            }
            function u(t3) {
              if (n2 === setTimeout)
                return setTimeout(t3, 0);
              if ((n2 === i || !n2) && setTimeout)
                return n2 = setTimeout, setTimeout(t3, 0);
              try {
                return n2(t3, 0);
              } catch (e3) {
                try {
                  return n2.call(null, t3, 0);
                } catch (e4) {
                  return n2.call(this, t3, 0);
                }
              }
            }
            !function() {
              try {
                n2 = "function" == typeof setTimeout ? setTimeout : i;
              } catch (t3) {
                n2 = i;
              }
              try {
                o = "function" == typeof clearTimeout ? clearTimeout : a;
              } catch (t3) {
                o = a;
              }
            }();
            var c, s = [], l = false, f = -1;
            function d() {
              l && c && (l = false, c.length ? s = c.concat(s) : f = -1, s.length && p());
            }
            function p() {
              if (!l) {
                var t3 = u(d);
                l = true;
                for (var e3 = s.length; e3; ) {
                  for (c = s, s = []; ++f < e3; )
                    c && c[f].run();
                  f = -1, e3 = s.length;
                }
                c = null, l = false, function(t4) {
                  if (o === clearTimeout)
                    return clearTimeout(t4);
                  if ((o === a || !o) && clearTimeout)
                    return o = clearTimeout, clearTimeout(t4);
                  try {
                    o(t4);
                  } catch (e4) {
                    try {
                      return o.call(null, t4);
                    } catch (e5) {
                      return o.call(this, t4);
                    }
                  }
                }(t3);
              }
            }
            function h(t3, e3) {
              this.fun = t3, this.array = e3;
            }
            function m() {
            }
            r.nextTick = function(t3) {
              var e3 = new Array(arguments.length - 1);
              if (arguments.length > 1)
                for (var n3 = 1; n3 < arguments.length; n3++)
                  e3[n3 - 1] = arguments[n3];
              s.push(new h(t3, e3)), 1 !== s.length || l || u(p);
            }, h.prototype.run = function() {
              this.fun.apply(null, this.array);
            }, r.title = "browser", r.browser = true, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = m, r.addListener = m, r.once = m, r.off = m, r.removeListener = m, r.removeAllListeners = m, r.emit = m, r.prependListener = m, r.prependOnceListener = m, r.listeners = function(t3) {
              return [];
            }, r.binding = function(t3) {
              throw new Error("process.binding is not supported");
            }, r.cwd = function() {
              return "/";
            }, r.chdir = function(t3) {
              throw new Error("process.chdir is not supported");
            }, r.umask = function() {
              return 0;
            };
          }, function(t2, e2, n2) {
            function o(t3, e3) {
              for (var n3 = 0; n3 < e3.length; n3++) {
                var o2 = e3[n3];
                o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t3, o2.key, o2);
              }
            }
            var r = n2(9);
            t2.exports = function() {
              function t3() {
                !function(t4, e4) {
                  if (!(t4 instanceof e4))
                    throw new TypeError("Cannot call a class as a function");
                }(this, t3);
              }
              var e3, n3;
              return e3 = t3, (n3 = [{ key: "urlEncode", value: function(t4) {
                return r(t4);
              } }, { key: "jsonEncode", value: function(t4) {
                return JSON.stringify(t4);
              } }, { key: "formEncode", value: function(t4) {
                if (this.isFormData(t4))
                  return t4;
                if (this.isFormElement(t4))
                  return new FormData(t4);
                if (this.isObject(t4)) {
                  var e4 = new FormData();
                  return Object.keys(t4).forEach(function(n4) {
                    var o2 = t4[n4];
                    e4.append(n4, o2);
                  }), e4;
                }
                throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
              } }, { key: "isObject", value: function(t4) {
                return "[object Object]" === Object.prototype.toString.call(t4);
              } }, { key: "isFormData", value: function(t4) {
                return t4 instanceof FormData;
              } }, { key: "isFormElement", value: function(t4) {
                return t4 instanceof HTMLFormElement;
              } }, { key: "selectFiles", value: function() {
                var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return new Promise(function(e4, n4) {
                  var o2 = document.createElement("INPUT");
                  o2.type = "file", t4.multiple && o2.setAttribute("multiple", "multiple"), t4.accept && o2.setAttribute("accept", t4.accept), o2.style.display = "none", document.body.appendChild(o2), o2.addEventListener("change", function(t5) {
                    var n5 = t5.target.files;
                    e4(n5), document.body.removeChild(o2);
                  }, false), o2.click();
                });
              } }, { key: "parseHeaders", value: function(t4) {
                var e4 = t4.trim().split(/[\r\n]+/), n4 = {};
                return e4.forEach(function(t5) {
                  var e5 = t5.split(": "), o2 = e5.shift(), r2 = e5.join(": ");
                  o2 && (n4[o2] = r2);
                }), n4;
              } }]) && o(e3, n3), t3;
            }();
          }, function(t2, e2) {
            var n2 = function(t3) {
              return encodeURIComponent(t3).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
            }, o = function(t3, e3, r, i) {
              return e3 = e3 || null, r = r || "&", i = i || null, t3 ? function(t4) {
                for (var e4 = new Array(), n3 = 0; n3 < t4.length; n3++)
                  t4[n3] && e4.push(t4[n3]);
                return e4;
              }(Object.keys(t3).map(function(a) {
                var u, c, s = a;
                if (i && (s = i + "[" + s + "]"), "object" == typeof t3[a] && null !== t3[a])
                  u = o(t3[a], null, r, s);
                else {
                  e3 && (c = s, s = !isNaN(parseFloat(c)) && isFinite(c) ? e3 + Number(s) : s);
                  var l = t3[a];
                  l = (l = 0 === (l = false === (l = true === l ? "1" : l) ? "0" : l) ? "0" : l) || "", u = n2(s) + "=" + n2(l);
                }
                return u;
              })).join(r).replace(/[!'()*]/g, "") : "";
            };
            t2.exports = o;
          }]);
        }, function(t, e, n) {
          t.exports = n(14);
        }, function(t, e) {
          t.exports = function(t2, e2) {
            (null == e2 || e2 > t2.length) && (e2 = t2.length);
            for (var n = 0, o = new Array(e2); n < e2; n++)
              o[n] = t2[n];
            return o;
          };
        }, function(t, e, n) {
          var o = n(4);
          t.exports = function(t2, e2) {
            if (t2) {
              if ("string" == typeof t2)
                return o(t2, e2);
              var n2 = Object.prototype.toString.call(t2).slice(8, -1);
              return "Object" === n2 && t2.constructor && (n2 = t2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(n2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? o(t2, e2) : void 0;
            }
          };
        }, function(t, e) {
          function n(t2, e2, n2, o, r, i, a) {
            try {
              var u = t2[i](a), c = u.value;
            } catch (t3) {
              return void n2(t3);
            }
            u.done ? e2(c) : Promise.resolve(c).then(o, r);
          }
          t.exports = function(t2) {
            return function() {
              var e2 = this, o = arguments;
              return new Promise(function(r, i) {
                var a = t2.apply(e2, o);
                function u(t3) {
                  n(a, r, i, u, c, "next", t3);
                }
                function c(t3) {
                  n(a, r, i, u, c, "throw", t3);
                }
                u(void 0);
              });
            };
          };
        }, function(t, e, n) {
          var o = n(19), r = n(20), i = n(5), a = n(21);
          t.exports = function(t2) {
            return o(t2) || r(t2) || i(t2) || a();
          };
        }, function(t, e) {
          t.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path></svg>';
        }, function(t, e) {
          t.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"></path></svg>';
        }, function(t, e) {
          t.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"></path></svg>';
        }, function(t, e) {
          t.exports = '<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"></path></svg>';
        }, function(t, e) {
          t.exports = '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150.242V79c0-18.778-15.222-34-34-34H79c-18.778 0-34 15.222-34 34v42.264l67.179-44.192 80.398 71.614 56.686-29.14L291 150.242zm-.345 51.622l-42.3-30.246-56.3 29.884-80.773-66.925L45 174.187V197c0 18.778 15.222 34 34 34h178c17.126 0 31.295-12.663 33.655-29.136zM79 0h178c43.63 0 79 35.37 79 79v118c0 43.63-35.37 79-79 79H79c-43.63 0-79-35.37-79-79V79C0 35.37 35.37 0 79 0z"></path></svg>';
        }, function(t, e, n) {
          var o = n(22), r = n(23), i = n(5), a = n(24);
          t.exports = function(t2, e2) {
            return o(t2) || r(t2, e2) || i(t2, e2) || a();
          };
        }, function(t, e, n) {
          var o = function(t2) {
            "use strict";
            var e2 = Object.prototype, n2 = e2.hasOwnProperty, o2 = "function" == typeof Symbol ? Symbol : {}, r = o2.iterator || "@@iterator", i = o2.asyncIterator || "@@asyncIterator", a = o2.toStringTag || "@@toStringTag";
            function u(t3, e3, n3, o3) {
              var r2 = e3 && e3.prototype instanceof l ? e3 : l, i2 = Object.create(r2.prototype), a2 = new x(o3 || []);
              return i2._invoke = function(t4, e4, n4) {
                var o4 = "suspendedStart";
                return function(r3, i3) {
                  if ("executing" === o4)
                    throw new Error("Generator is already running");
                  if ("completed" === o4) {
                    if ("throw" === r3)
                      throw i3;
                    return S();
                  }
                  for (n4.method = r3, n4.arg = i3; ; ) {
                    var a3 = n4.delegate;
                    if (a3) {
                      var u2 = b(a3, n4);
                      if (u2) {
                        if (u2 === s)
                          continue;
                        return u2;
                      }
                    }
                    if ("next" === n4.method)
                      n4.sent = n4._sent = n4.arg;
                    else if ("throw" === n4.method) {
                      if ("suspendedStart" === o4)
                        throw o4 = "completed", n4.arg;
                      n4.dispatchException(n4.arg);
                    } else
                      "return" === n4.method && n4.abrupt("return", n4.arg);
                    o4 = "executing";
                    var l2 = c(t4, e4, n4);
                    if ("normal" === l2.type) {
                      if (o4 = n4.done ? "completed" : "suspendedYield", l2.arg === s)
                        continue;
                      return { value: l2.arg, done: n4.done };
                    }
                    "throw" === l2.type && (o4 = "completed", n4.method = "throw", n4.arg = l2.arg);
                  }
                };
              }(t3, n3, a2), i2;
            }
            function c(t3, e3, n3) {
              try {
                return { type: "normal", arg: t3.call(e3, n3) };
              } catch (t4) {
                return { type: "throw", arg: t4 };
              }
            }
            t2.wrap = u;
            var s = {};
            function l() {
            }
            function f() {
            }
            function d() {
            }
            var p = {};
            p[r] = function() {
              return this;
            };
            var h = Object.getPrototypeOf, m = h && h(h(E([])));
            m && m !== e2 && n2.call(m, r) && (p = m);
            var g = d.prototype = l.prototype = Object.create(p);
            function v(t3) {
              ["next", "throw", "return"].forEach(function(e3) {
                t3[e3] = function(t4) {
                  return this._invoke(e3, t4);
                };
              });
            }
            function y(t3, e3) {
              var o3;
              this._invoke = function(r2, i2) {
                function a2() {
                  return new e3(function(o4, a3) {
                    !function o5(r3, i3, a4, u2) {
                      var s2 = c(t3[r3], t3, i3);
                      if ("throw" !== s2.type) {
                        var l2 = s2.arg, f2 = l2.value;
                        return f2 && "object" == typeof f2 && n2.call(f2, "__await") ? e3.resolve(f2.__await).then(function(t4) {
                          o5("next", t4, a4, u2);
                        }, function(t4) {
                          o5("throw", t4, a4, u2);
                        }) : e3.resolve(f2).then(function(t4) {
                          l2.value = t4, a4(l2);
                        }, function(t4) {
                          return o5("throw", t4, a4, u2);
                        });
                      }
                      u2(s2.arg);
                    }(r2, i2, o4, a3);
                  });
                }
                return o3 = o3 ? o3.then(a2, a2) : a2();
              };
            }
            function b(t3, e3) {
              var n3 = t3.iterator[e3.method];
              if (void 0 === n3) {
                if (e3.delegate = null, "throw" === e3.method) {
                  if (t3.iterator.return && (e3.method = "return", e3.arg = void 0, b(t3, e3), "throw" === e3.method))
                    return s;
                  e3.method = "throw", e3.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return s;
              }
              var o3 = c(n3, t3.iterator, e3.arg);
              if ("throw" === o3.type)
                return e3.method = "throw", e3.arg = o3.arg, e3.delegate = null, s;
              var r2 = o3.arg;
              return r2 ? r2.done ? (e3[t3.resultName] = r2.value, e3.next = t3.nextLoc, "return" !== e3.method && (e3.method = "next", e3.arg = void 0), e3.delegate = null, s) : r2 : (e3.method = "throw", e3.arg = new TypeError("iterator result is not an object"), e3.delegate = null, s);
            }
            function w(t3) {
              var e3 = { tryLoc: t3[0] };
              1 in t3 && (e3.catchLoc = t3[1]), 2 in t3 && (e3.finallyLoc = t3[2], e3.afterLoc = t3[3]), this.tryEntries.push(e3);
            }
            function _(t3) {
              var e3 = t3.completion || {};
              e3.type = "normal", delete e3.arg, t3.completion = e3;
            }
            function x(t3) {
              this.tryEntries = [{ tryLoc: "root" }], t3.forEach(w, this), this.reset(true);
            }
            function E(t3) {
              if (t3) {
                var e3 = t3[r];
                if (e3)
                  return e3.call(t3);
                if ("function" == typeof t3.next)
                  return t3;
                if (!isNaN(t3.length)) {
                  var o3 = -1, i2 = function e4() {
                    for (; ++o3 < t3.length; )
                      if (n2.call(t3, o3))
                        return e4.value = t3[o3], e4.done = false, e4;
                    return e4.value = void 0, e4.done = true, e4;
                  };
                  return i2.next = i2;
                }
              }
              return { next: S };
            }
            function S() {
              return { value: void 0, done: true };
            }
            return f.prototype = g.constructor = d, d.constructor = f, d[a] = f.displayName = "GeneratorFunction", t2.isGeneratorFunction = function(t3) {
              var e3 = "function" == typeof t3 && t3.constructor;
              return !!e3 && (e3 === f || "GeneratorFunction" === (e3.displayName || e3.name));
            }, t2.mark = function(t3) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(t3, d) : (t3.__proto__ = d, a in t3 || (t3[a] = "GeneratorFunction")), t3.prototype = Object.create(g), t3;
            }, t2.awrap = function(t3) {
              return { __await: t3 };
            }, v(y.prototype), y.prototype[i] = function() {
              return this;
            }, t2.AsyncIterator = y, t2.async = function(e3, n3, o3, r2, i2) {
              void 0 === i2 && (i2 = Promise);
              var a2 = new y(u(e3, n3, o3, r2), i2);
              return t2.isGeneratorFunction(n3) ? a2 : a2.next().then(function(t3) {
                return t3.done ? t3.value : a2.next();
              });
            }, v(g), g[a] = "Generator", g[r] = function() {
              return this;
            }, g.toString = function() {
              return "[object Generator]";
            }, t2.keys = function(t3) {
              var e3 = [];
              for (var n3 in t3)
                e3.push(n3);
              return e3.reverse(), function n4() {
                for (; e3.length; ) {
                  var o3 = e3.pop();
                  if (o3 in t3)
                    return n4.value = o3, n4.done = false, n4;
                }
                return n4.done = true, n4;
              };
            }, t2.values = E, x.prototype = { constructor: x, reset: function(t3) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !t3)
                for (var e3 in this)
                  "t" === e3.charAt(0) && n2.call(this, e3) && !isNaN(+e3.slice(1)) && (this[e3] = void 0);
            }, stop: function() {
              this.done = true;
              var t3 = this.tryEntries[0].completion;
              if ("throw" === t3.type)
                throw t3.arg;
              return this.rval;
            }, dispatchException: function(t3) {
              if (this.done)
                throw t3;
              var e3 = this;
              function o3(n3, o4) {
                return a2.type = "throw", a2.arg = t3, e3.next = n3, o4 && (e3.method = "next", e3.arg = void 0), !!o4;
              }
              for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
                var i2 = this.tryEntries[r2], a2 = i2.completion;
                if ("root" === i2.tryLoc)
                  return o3("end");
                if (i2.tryLoc <= this.prev) {
                  var u2 = n2.call(i2, "catchLoc"), c2 = n2.call(i2, "finallyLoc");
                  if (u2 && c2) {
                    if (this.prev < i2.catchLoc)
                      return o3(i2.catchLoc, true);
                    if (this.prev < i2.finallyLoc)
                      return o3(i2.finallyLoc);
                  } else if (u2) {
                    if (this.prev < i2.catchLoc)
                      return o3(i2.catchLoc, true);
                  } else {
                    if (!c2)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i2.finallyLoc)
                      return o3(i2.finallyLoc);
                  }
                }
              }
            }, abrupt: function(t3, e3) {
              for (var o3 = this.tryEntries.length - 1; o3 >= 0; --o3) {
                var r2 = this.tryEntries[o3];
                if (r2.tryLoc <= this.prev && n2.call(r2, "finallyLoc") && this.prev < r2.finallyLoc) {
                  var i2 = r2;
                  break;
                }
              }
              i2 && ("break" === t3 || "continue" === t3) && i2.tryLoc <= e3 && e3 <= i2.finallyLoc && (i2 = null);
              var a2 = i2 ? i2.completion : {};
              return a2.type = t3, a2.arg = e3, i2 ? (this.method = "next", this.next = i2.finallyLoc, s) : this.complete(a2);
            }, complete: function(t3, e3) {
              if ("throw" === t3.type)
                throw t3.arg;
              return "break" === t3.type || "continue" === t3.type ? this.next = t3.arg : "return" === t3.type ? (this.rval = this.arg = t3.arg, this.method = "return", this.next = "end") : "normal" === t3.type && e3 && (this.next = e3), s;
            }, finish: function(t3) {
              for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
                var n3 = this.tryEntries[e3];
                if (n3.finallyLoc === t3)
                  return this.complete(n3.completion, n3.afterLoc), _(n3), s;
              }
            }, catch: function(t3) {
              for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
                var n3 = this.tryEntries[e3];
                if (n3.tryLoc === t3) {
                  var o3 = n3.completion;
                  if ("throw" === o3.type) {
                    var r2 = o3.arg;
                    _(n3);
                  }
                  return r2;
                }
              }
              throw new Error("illegal catch attempt");
            }, delegateYield: function(t3, e3, n3) {
              return this.delegate = { iterator: E(t3), resultName: e3, nextLoc: n3 }, "next" === this.method && (this.arg = void 0), s;
            } }, t2;
          }(t.exports);
          try {
            regeneratorRuntime = o;
          } catch (t2) {
            Function("r", "regeneratorRuntime = r")(o);
          }
        }, function(t, e, n) {
          var o = n(16), r = n(17);
          "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[t.i, r, ""]]);
          var i = { insert: "head", singleton: false }, a = (o(r, i), r.locals ? r.locals : {});
          t.exports = a;
        }, function(t, e, n) {
          "use strict";
          var o, r = function() {
            return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o;
          }, i = function() {
            var t2 = {};
            return function(e2) {
              if (void 0 === t2[e2]) {
                var n2 = document.querySelector(e2);
                if (window.HTMLIFrameElement && n2 instanceof window.HTMLIFrameElement)
                  try {
                    n2 = n2.contentDocument.head;
                  } catch (t3) {
                    n2 = null;
                  }
                t2[e2] = n2;
              }
              return t2[e2];
            };
          }(), a = [];
          function u(t2) {
            for (var e2 = -1, n2 = 0; n2 < a.length; n2++)
              if (a[n2].identifier === t2) {
                e2 = n2;
                break;
              }
            return e2;
          }
          function c(t2, e2) {
            for (var n2 = {}, o2 = [], r2 = 0; r2 < t2.length; r2++) {
              var i2 = t2[r2], c2 = e2.base ? i2[0] + e2.base : i2[0], s2 = n2[c2] || 0, l2 = "".concat(c2, " ").concat(s2);
              n2[c2] = s2 + 1;
              var f2 = u(l2), d2 = { css: i2[1], media: i2[2], sourceMap: i2[3] };
              -1 !== f2 ? (a[f2].references++, a[f2].updater(d2)) : a.push({ identifier: l2, updater: g(d2, e2), references: 1 }), o2.push(l2);
            }
            return o2;
          }
          function s(t2) {
            var e2 = document.createElement("style"), o2 = t2.attributes || {};
            if (void 0 === o2.nonce) {
              var r2 = n.nc;
              r2 && (o2.nonce = r2);
            }
            if (Object.keys(o2).forEach(function(t3) {
              e2.setAttribute(t3, o2[t3]);
            }), "function" == typeof t2.insert)
              t2.insert(e2);
            else {
              var a2 = i(t2.insert || "head");
              if (!a2)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
              a2.appendChild(e2);
            }
            return e2;
          }
          var l, f = (l = [], function(t2, e2) {
            return l[t2] = e2, l.filter(Boolean).join("\n");
          });
          function d(t2, e2, n2, o2) {
            var r2 = n2 ? "" : o2.media ? "@media ".concat(o2.media, " {").concat(o2.css, "}") : o2.css;
            if (t2.styleSheet)
              t2.styleSheet.cssText = f(e2, r2);
            else {
              var i2 = document.createTextNode(r2), a2 = t2.childNodes;
              a2[e2] && t2.removeChild(a2[e2]), a2.length ? t2.insertBefore(i2, a2[e2]) : t2.appendChild(i2);
            }
          }
          function p(t2, e2, n2) {
            var o2 = n2.css, r2 = n2.media, i2 = n2.sourceMap;
            if (r2 ? t2.setAttribute("media", r2) : t2.removeAttribute("media"), i2 && btoa && (o2 += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i2)))), " */")), t2.styleSheet)
              t2.styleSheet.cssText = o2;
            else {
              for (; t2.firstChild; )
                t2.removeChild(t2.firstChild);
              t2.appendChild(document.createTextNode(o2));
            }
          }
          var h = null, m = 0;
          function g(t2, e2) {
            var n2, o2, r2;
            if (e2.singleton) {
              var i2 = m++;
              n2 = h || (h = s(e2)), o2 = d.bind(null, n2, i2, false), r2 = d.bind(null, n2, i2, true);
            } else
              n2 = s(e2), o2 = p.bind(null, n2, e2), r2 = function() {
                !function(t3) {
                  if (null === t3.parentNode)
                    return false;
                  t3.parentNode.removeChild(t3);
                }(n2);
              };
            return o2(t2), function(e3) {
              if (e3) {
                if (e3.css === t2.css && e3.media === t2.media && e3.sourceMap === t2.sourceMap)
                  return;
                o2(t2 = e3);
              } else
                r2();
            };
          }
          t.exports = function(t2, e2) {
            (e2 = e2 || {}).singleton || "boolean" == typeof e2.singleton || (e2.singleton = r());
            var n2 = c(t2 = t2 || [], e2);
            return function(t3) {
              if (t3 = t3 || [], "[object Array]" === Object.prototype.toString.call(t3)) {
                for (var o2 = 0; o2 < n2.length; o2++) {
                  var r2 = u(n2[o2]);
                  a[r2].references--;
                }
                for (var i2 = c(t3, e2), s2 = 0; s2 < n2.length; s2++) {
                  var l2 = u(n2[s2]);
                  0 === a[l2].references && (a[l2].updater(), a.splice(l2, 1));
                }
                n2 = i2;
              }
            };
          };
        }, function(t, e, n) {
          (e = n(18)(false)).push([t.i, '.image-tool {\n  --bg-color: #cdd1e0;\n  --front-color: #388ae5;\n  --border-color: #e8e8eb;\n}\n\n  .image-tool__image {\n    border-radius: 3px;\n    overflow: hidden;\n    margin-bottom: 10px;\n  }\n\n  .image-tool__image-picture {\n      max-width: 100%;\n      vertical-align: bottom;\n      display: block;\n    }\n\n  .image-tool__image-preloader {\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      background-size: cover;\n      margin: auto;\n      position: relative;\n      background-color: var(--bg-color);\n      background-position: center center;\n    }\n\n  .image-tool__image-preloader::after {\n        content: "";\n        position: absolute;\n        z-index: 3;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        border: 2px solid var(--bg-color);\n        border-top-color: var(--front-color);\n        left: 50%;\n        top: 50%;\n        margin-top: -30px;\n        margin-left: -30px;\n        animation: image-preloader-spin 2s infinite linear;\n        box-sizing: border-box;\n      }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]::before {\n      position: absolute !important;\n      content: attr(data-placeholder);\n      color: #707684;\n      font-weight: normal;\n      display: none;\n    }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]:empty::before {\n        display: block;\n      }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]:empty:focus::before {\n        display: none;\n      }\n\n  .image-tool--empty .image-tool__image {\n      display: none;\n    }\n\n  .image-tool--empty .image-tool__caption, .image-tool--loading .image-tool__caption {\n      display: none;\n    }\n\n  .image-tool--filled .cdx-button {\n      display: none;\n    }\n\n  .image-tool--filled .image-tool__image-preloader {\n        display: none;\n      }\n\n  .image-tool--loading .image-tool__image {\n      min-height: 200px;\n      display: flex;\n      border: 1px solid var(--border-color);\n      background-color: #fff;\n    }\n\n  .image-tool--loading .image-tool__image-picture {\n        display: none;\n      }\n\n  .image-tool--loading .cdx-button {\n      display: none;\n    }\n\n  /**\n   * Tunes\n   * ----------------\n   */\n\n  .image-tool--withBorder .image-tool__image {\n      border: 1px solid var(--border-color);\n    }\n\n  .image-tool--withBackground .image-tool__image {\n      padding: 15px;\n      background: var(--bg-color);\n    }\n\n  .image-tool--withBackground .image-tool__image-picture {\n        max-width: 60%;\n        margin: 0 auto;\n      }\n\n  .image-tool--stretched .image-tool__image-picture {\n        width: 100%;\n      }\n\n@keyframes image-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n', ""]), t.exports = e;
        }, function(t, e, n) {
          "use strict";
          t.exports = function(t2) {
            var e2 = [];
            return e2.toString = function() {
              return this.map(function(e3) {
                var n2 = function(t3, e4) {
                  var n3 = t3[1] || "", o = t3[3];
                  if (!o)
                    return n3;
                  if (e4 && "function" == typeof btoa) {
                    var r = (a = o, u = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u), "/*# ".concat(c, " */")), i = o.sources.map(function(t4) {
                      return "/*# sourceURL=".concat(o.sourceRoot || "").concat(t4, " */");
                    });
                    return [n3].concat(i).concat([r]).join("\n");
                  }
                  var a, u, c;
                  return [n3].join("\n");
                }(e3, t2);
                return e3[2] ? "@media ".concat(e3[2], " {").concat(n2, "}") : n2;
              }).join("");
            }, e2.i = function(t3, n2, o) {
              "string" == typeof t3 && (t3 = [[null, t3, ""]]);
              var r = {};
              if (o)
                for (var i = 0; i < this.length; i++) {
                  var a = this[i][0];
                  null != a && (r[a] = true);
                }
              for (var u = 0; u < t3.length; u++) {
                var c = [].concat(t3[u]);
                o && r[c[0]] || (n2 && (c[2] ? c[2] = "".concat(n2, " and ").concat(c[2]) : c[2] = n2), e2.push(c));
              }
            }, e2;
          };
        }, function(t, e, n) {
          var o = n(4);
          t.exports = function(t2) {
            if (Array.isArray(t2))
              return o(t2);
          };
        }, function(t, e) {
          t.exports = function(t2) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t2))
              return Array.from(t2);
          };
        }, function(t, e) {
          t.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          };
        }, function(t, e) {
          t.exports = function(t2) {
            if (Array.isArray(t2))
              return t2;
          };
        }, function(t, e) {
          t.exports = function(t2, e2) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t2)) {
              var n = [], o = true, r = false, i = void 0;
              try {
                for (var a, u = t2[Symbol.iterator](); !(o = (a = u.next()).done) && (n.push(a.value), !e2 || n.length !== e2); o = true)
                  ;
              } catch (t3) {
                r = true, i = t3;
              } finally {
                try {
                  o || null == u.return || u.return();
                } finally {
                  if (r)
                    throw i;
                }
              }
              return n;
            }
          };
        }, function(t, e) {
          t.exports = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          };
        }, function(t, e, n) {
          "use strict";
          n.r(e), n.d(e, "default", function() {
            return P;
          });
          var o = n(3), r = n.n(o), i = n(6), a = n.n(i), u = n(1), c = n.n(u), s = n(0), l = n.n(s), f = (n(15), n(7)), d = n.n(f), p = n(8), h = n.n(p), m = function() {
            function t2(e2) {
              var n2 = e2.api, o2 = e2.config, r2 = e2.onSelectFile, i2 = e2.readOnly;
              c()(this, t2), this.api = n2, this.config = o2, this.onSelectFile = r2, this.readOnly = i2, this.nodes = { wrapper: g("div", [this.CSS.baseClass, this.CSS.wrapper]), imageContainer: g("div", [this.CSS.imageContainer]), fileButton: this.createFileButton(), imageEl: void 0, imagePreloader: g("div", this.CSS.imagePreloader), caption: g("div", [this.CSS.input, this.CSS.caption], { contentEditable: !this.readOnly }) }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton);
            }
            return l()(t2, [{ key: "render", value: function(e2) {
              return e2.file && 0 !== Object.keys(e2.file).length ? this.toggleStatus(t2.status.UPLOADING) : this.toggleStatus(t2.status.EMPTY), this.nodes.wrapper;
            } }, { key: "createFileButton", value: function() {
              var t3 = this, e2 = g("div", [this.CSS.button]);
              return e2.innerHTML = this.config.buttonContent || "".concat(h.a, " ").concat(this.api.i18n.t("Select an Image")), e2.addEventListener("click", function() {
                t3.onSelectFile();
              }), e2;
            } }, { key: "showPreloader", value: function(e2) {
              this.nodes.imagePreloader.style.backgroundImage = "url(".concat(e2, ")"), this.toggleStatus(t2.status.UPLOADING);
            } }, { key: "hidePreloader", value: function() {
              this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(t2.status.EMPTY);
            } }, { key: "fillImage", value: function(e2) {
              var n2 = this, o2 = /\.mp4$/.test(e2) ? "VIDEO" : "IMG", r2 = { src: e2 }, i2 = "load";
              "VIDEO" === o2 && (r2.autoplay = true, r2.loop = true, r2.muted = true, r2.playsinline = true, i2 = "loadeddata"), this.nodes.imageEl = g(o2, this.CSS.imageEl, r2), this.nodes.imageEl.addEventListener(i2, function() {
                n2.toggleStatus(t2.status.FILLED), n2.nodes.imagePreloader && (n2.nodes.imagePreloader.style.backgroundImage = "");
              }), this.nodes.imageContainer.appendChild(this.nodes.imageEl);
            } }, { key: "fillCaption", value: function(t3) {
              this.nodes.caption && (this.nodes.caption.innerHTML = t3);
            } }, { key: "toggleStatus", value: function(e2) {
              for (var n2 in t2.status)
                Object.prototype.hasOwnProperty.call(t2.status, n2) && this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper, "--").concat(t2.status[n2]), e2 === t2.status[n2]);
            } }, { key: "applyTune", value: function(t3, e2) {
              this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper, "--").concat(t3), e2);
            } }, { key: "CSS", get: function() {
              return { baseClass: this.api.styles.block, loading: this.api.styles.loader, input: this.api.styles.input, button: this.api.styles.button, wrapper: "image-tool", imageContainer: "image-tool__image", imagePreloader: "image-tool__image-preloader", imageEl: "image-tool__image-picture", caption: "image-tool__caption" };
            } }], [{ key: "status", get: function() {
              return { EMPTY: "empty", UPLOADING: "loading", FILLED: "filled" };
            } }]), t2;
          }(), g = function(t2) {
            var e2, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r2 = document.createElement(t2);
            Array.isArray(n2) ? (e2 = r2.classList).add.apply(e2, d()(n2)) : n2 && r2.classList.add(n2);
            for (var i2 in o2)
              r2[i2] = o2[i2];
            return r2;
          }, v = n(9), y = n.n(v), b = n(10), w = n.n(b), _ = n(11), x = n.n(_), E = function() {
            function t2(e2) {
              var n2 = e2.api, o2 = e2.actions, r2 = e2.onChange;
              c()(this, t2), this.api = n2, this.actions = o2, this.onChange = r2, this.buttons = [];
            }
            return l()(t2, [{ key: "render", value: function(e2) {
              var n2 = this, o2 = g("div", this.CSS.wrapper);
              return this.buttons = [], t2.tunes.concat(this.actions).forEach(function(t3) {
                var r2 = n2.api.i18n.t(t3.title), i2 = g("div", [n2.CSS.buttonBase, n2.CSS.button], { innerHTML: t3.icon, title: r2 });
                i2.addEventListener("click", function() {
                  n2.tuneClicked(t3.name, t3.action);
                }), i2.dataset.tune = t3.name, i2.classList.toggle(n2.CSS.buttonActive, e2[t3.name]), n2.buttons.push(i2), n2.api.tooltip.onHover(i2, r2, { placement: "top" }), o2.appendChild(i2);
              }), o2;
            } }, { key: "tuneClicked", value: function(t3, e2) {
              if ("function" == typeof e2 && !e2(t3))
                return false;
              var n2 = this.buttons.find(function(e3) {
                return e3.dataset.tune === t3;
              });
              n2.classList.toggle(this.CSS.buttonActive, !n2.classList.contains(this.CSS.buttonActive)), this.onChange(t3);
            } }, { key: "CSS", get: function() {
              return { wrapper: "", buttonBase: this.api.styles.settingsButton, button: "image-tool__tune", buttonActive: this.api.styles.settingsButtonActive };
            } }], [{ key: "tunes", get: function() {
              return [{ name: "withBorder", icon: w.a, title: "With border" }, { name: "stretched", icon: x.a, title: "Stretch image" }, { name: "withBackground", icon: y.a, title: "With background" }];
            } }]), t2;
          }(), S = n(12), k = n.n(S), T = n(13), O = n.n(T), j = n(2), L = n.n(j), C = function() {
            function t2(e2) {
              var n2 = e2.config, o2 = e2.onUpload, r2 = e2.onError;
              c()(this, t2), this.config = n2, this.onUpload = o2, this.onError = r2;
            }
            return l()(t2, [{ key: "uploadSelectedFile", value: function(t3) {
              var e2 = this, n2 = t3.onPreview, o2 = function(t4) {
                var e3 = new FileReader();
                e3.readAsDataURL(t4), e3.onload = function(t5) {
                  n2(t5.target.result);
                };
              };
              (this.config.uploader && "function" == typeof this.config.uploader.uploadByFile ? L.a.selectFiles({ accept: this.config.types }).then(function(t4) {
                o2(t4[0]);
                var n3 = e2.config.uploader.uploadByFile(t4[0]);
                return F(n3) || console.warn("Custom uploader method uploadByFile should return a Promise"), n3;
              }) : L.a.transport({ url: this.config.endpoints.byFile, data: this.config.additionalRequestData, accept: this.config.types, headers: this.config.additionalRequestHeaders, beforeSend: function(t4) {
                o2(t4[0]);
              }, fieldName: this.config.field }).then(function(t4) {
                return t4.body;
              })).then(function(t4) {
                e2.onUpload(t4);
              }).catch(function(t4) {
                e2.onError(t4);
              });
            } }, { key: "uploadByUrl", value: function(t3) {
              var e2, n2 = this;
              this.config.uploader && "function" == typeof this.config.uploader.uploadByUrl ? F(e2 = this.config.uploader.uploadByUrl(t3)) || console.warn("Custom uploader method uploadByUrl should return a Promise") : e2 = L.a.post({ url: this.config.endpoints.byUrl, data: Object.assign({ url: t3 }, this.config.additionalRequestData), type: L.a.contentType.JSON, headers: this.config.additionalRequestHeaders }).then(function(t4) {
                return t4.body;
              }), e2.then(function(t4) {
                n2.onUpload(t4);
              }).catch(function(t4) {
                n2.onError(t4);
              });
            } }, { key: "uploadByFile", value: function(t3, e2) {
              var n2, o2 = this, r2 = e2.onPreview, i2 = new FileReader();
              if (i2.readAsDataURL(t3), i2.onload = function(t4) {
                r2(t4.target.result);
              }, this.config.uploader && "function" == typeof this.config.uploader.uploadByFile)
                F(n2 = this.config.uploader.uploadByFile(t3)) || console.warn("Custom uploader method uploadByFile should return a Promise");
              else {
                var a2 = new FormData();
                a2.append(this.config.field, t3), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(function(t4) {
                  var e3 = O()(t4, 2), n3 = e3[0], o3 = e3[1];
                  a2.append(n3, o3);
                }), n2 = L.a.post({ url: this.config.endpoints.byFile, data: a2, type: L.a.contentType.JSON, headers: this.config.additionalRequestHeaders }).then(function(t4) {
                  return t4.body;
                });
              }
              n2.then(function(t4) {
                o2.onUpload(t4);
              }).catch(function(t4) {
                o2.onError(t4);
              });
            } }]), t2;
          }();
          function F(t2) {
            return t2 && "function" == typeof t2.then;
          }
          var P = function() {
            function t2(e3) {
              var n2 = this, o2 = e3.data, r2 = e3.config, i2 = e3.api, a2 = e3.readOnly;
              c()(this, t2), this.api = i2, this.readOnly = a2, this.config = { endpoints: r2.endpoints || "", additionalRequestData: r2.additionalRequestData || {}, additionalRequestHeaders: r2.additionalRequestHeaders || {}, field: r2.field || "image", types: r2.types || "image/*", captionPlaceholder: this.api.i18n.t(r2.captionPlaceholder || "Caption"), buttonContent: r2.buttonContent || "", uploader: r2.uploader || void 0, actions: r2.actions || [] }, this.uploader = new C({ config: this.config, onUpload: function(t3) {
                return n2.onUpload(t3);
              }, onError: function(t3) {
                return n2.uploadingFailed(t3);
              } }), this.ui = new m({ api: i2, config: this.config, onSelectFile: function() {
                n2.uploader.uploadSelectedFile({ onPreview: function(t3) {
                  n2.ui.showPreloader(t3);
                } });
              }, readOnly: a2 }), this.tunes = new E({ api: i2, actions: this.config.actions, onChange: function(t3) {
                return n2.tuneToggled(t3);
              } }), this._data = {}, this.data = o2;
            }
            var e2;
            return l()(t2, null, [{ key: "isReadOnlySupported", get: function() {
              return true;
            } }, { key: "toolbox", get: function() {
              return { icon: k.a, title: "Image" };
            } }]), l()(t2, [{ key: "render", value: function() {
              return this.ui.render(this.data);
            } }, { key: "validate", value: function(t3) {
              return t3.file && t3.file.url;
            } }, { key: "save", value: function() {
              var t3 = this.ui.nodes.caption;
              return this._data.caption = t3.innerHTML, this.data;
            } }, { key: "renderSettings", value: function() {
              return this.tunes.render(this.data);
            } }, { key: "appendCallback", value: function() {
              this.ui.nodes.fileButton.click();
            } }, { key: "onPaste", value: (e2 = a()(r.a.mark(function t3(e3) {
              var n2, o2, i2, a2, u2;
              return r.a.wrap(function(t4) {
                for (; ; )
                  switch (t4.prev = t4.next) {
                    case 0:
                      t4.t0 = e3.type, t4.next = "tag" === t4.t0 ? 3 : "pattern" === t4.t0 ? 15 : "file" === t4.t0 ? 18 : 21;
                      break;
                    case 3:
                      if (n2 = e3.detail.data, !/^blob:/.test(n2.src)) {
                        t4.next = 13;
                        break;
                      }
                      return t4.next = 7, fetch(n2.src);
                    case 7:
                      return o2 = t4.sent, t4.next = 10, o2.blob();
                    case 10:
                      return i2 = t4.sent, this.uploadFile(i2), t4.abrupt("break", 21);
                    case 13:
                      return this.uploadUrl(n2.src), t4.abrupt("break", 21);
                    case 15:
                      return a2 = e3.detail.data, this.uploadUrl(a2), t4.abrupt("break", 21);
                    case 18:
                      return u2 = e3.detail.file, this.uploadFile(u2), t4.abrupt("break", 21);
                    case 21:
                    case "end":
                      return t4.stop();
                  }
              }, t3, this);
            })), function(t3) {
              return e2.apply(this, arguments);
            }) }, { key: "onUpload", value: function(t3) {
              t3.success && t3.file ? this.image = t3.file : this.uploadingFailed("incorrect response: " + JSON.stringify(t3));
            } }, { key: "uploadingFailed", value: function(t3) {
              console.log("Image Tool: uploading failed because of", t3), this.api.notifier.show({ message: this.api.i18n.t("Couldn\u2019t upload image. Please try another."), style: "error" }), this.ui.hidePreloader();
            } }, { key: "tuneToggled", value: function(t3) {
              this.setTune(t3, !this._data[t3]);
            } }, { key: "setTune", value: function(t3, e3) {
              var n2 = this;
              this._data[t3] = e3, this.ui.applyTune(t3, e3), "stretched" === t3 && Promise.resolve().then(function() {
                var t4 = n2.api.blocks.getCurrentBlockIndex();
                n2.api.blocks.stretchBlock(t4, e3);
              }).catch(function(t4) {
                console.error(t4);
              });
            } }, { key: "uploadFile", value: function(t3) {
              var e3 = this;
              this.uploader.uploadByFile(t3, { onPreview: function(t4) {
                e3.ui.showPreloader(t4);
              } });
            } }, { key: "uploadUrl", value: function(t3) {
              this.ui.showPreloader(t3), this.uploader.uploadByUrl(t3);
            } }, { key: "data", set: function(t3) {
              var e3 = this;
              this.image = t3.file, this._data.caption = t3.caption || "", this.ui.fillCaption(this._data.caption), E.tunes.forEach(function(n2) {
                var o2 = n2.name, r2 = void 0 !== t3[o2] && (true === t3[o2] || "true" === t3[o2]);
                e3.setTune(o2, r2);
              });
            }, get: function() {
              return this._data;
            } }, { key: "image", set: function(t3) {
              this._data.file = t3 || {}, t3 && t3.url && this.ui.fillImage(t3.url);
            } }], [{ key: "pasteConfig", get: function() {
              return { tags: ["img"], patterns: { image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i }, files: { mimeTypes: ["image/*"] } };
            } }]), t2;
          }();
        }]).default;
      });
    }
  });

  // node_modules/@editorjs/list/dist/bundle.js
  var require_bundle3 = __commonJS({
    "node_modules/@editorjs/list/dist/bundle.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.List = t() : e.List = t();
      }(window, function() {
        return function(e) {
          var t = {};
          function n(r) {
            if (t[r])
              return t[r].exports;
            var i = t[r] = { i: r, l: false, exports: {} };
            return e[r].call(i.exports, i, i.exports, n), i.l = true, i.exports;
          }
          return n.m = e, n.c = t, n.d = function(e2, t2, r) {
            n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: r });
          }, n.r = function(e2) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
          }, n.t = function(e2, t2) {
            if (1 & t2 && (e2 = n(e2)), 8 & t2)
              return e2;
            if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
              return e2;
            var r = /* @__PURE__ */ Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
              for (var i in e2)
                n.d(r, i, function(t3) {
                  return e2[t3];
                }.bind(null, i));
            return r;
          }, n.n = function(e2) {
            var t2 = e2 && e2.__esModule ? function() {
              return e2.default;
            } : function() {
              return e2;
            };
            return n.d(t2, "a", t2), t2;
          }, n.o = function(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          }, n.p = "/", n(n.s = 0);
        }([function(e, t, n) {
          function r(e2) {
            return function(e3) {
              if (Array.isArray(e3))
                return i(e3);
            }(e2) || function(e3) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(e3))
                return Array.from(e3);
            }(e2) || function(e3, t2) {
              if (!e3)
                return;
              if ("string" == typeof e3)
                return i(e3, t2);
              var n2 = Object.prototype.toString.call(e3).slice(8, -1);
              "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
              if ("Map" === n2 || "Set" === n2)
                return Array.from(e3);
              if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
                return i(e3, t2);
            }(e2) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function i(e2, t2) {
            (null == t2 || t2 > e2.length) && (t2 = e2.length);
            for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
              r2[n2] = e2[n2];
            return r2;
          }
          function a(e2, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var r2 = t2[n2];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
            }
          }
          function o(e2, t2, n2) {
            return t2 && a(e2.prototype, t2), n2 && a(e2, n2), e2;
          }
          n(1).toString();
          var s = function() {
            function e2(t2) {
              var n2 = t2.data, r2 = t2.config, i2 = t2.api, a2 = t2.readOnly;
              !function(e3, t3) {
                if (!(e3 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2), this._elements = { wrapper: null }, this.api = i2, this.readOnly = a2, this.settings = [{ name: "unordered", title: this.api.i18n.t("Unordered"), icon: '<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>', default: "unordered" === r2.defaultStyle || false }, { name: "ordered", title: this.api.i18n.t("Ordered"), icon: '<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><path d="M5.819 4.607h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 1 1 0-2.138zm0-4.607h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 1 1 0-2.138zm0 9.357h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 0 1 0-2.137zM1.468 4.155V1.33c-.554.404-.926.606-1.118.606a.338.338 0 0 1-.244-.104A.327.327 0 0 1 0 1.59c0-.107.035-.184.105-.234.07-.05.192-.114.369-.192.264-.118.475-.243.633-.373.158-.13.298-.276.42-.438a3.94 3.94 0 0 1 .238-.298C1.802.019 1.872 0 1.975 0c.115 0 .208.042.277.127.07.085.105.202.105.351v3.556c0 .416-.15.624-.448.624a.421.421 0 0 1-.32-.127c-.08-.085-.121-.21-.121-.376zm-.283 6.664h1.572c.156 0 .275.03.358.091a.294.294 0 0 1 .123.25.323.323 0 0 1-.098.238c-.065.065-.164.097-.296.097H.629a.494.494 0 0 1-.353-.119.372.372 0 0 1-.126-.28c0-.068.027-.16.081-.273a.977.977 0 0 1 .178-.268c.267-.264.507-.49.722-.678.215-.188.368-.312.46-.371.165-.11.302-.222.412-.334.109-.112.192-.226.25-.344a.786.786 0 0 0 .085-.345.6.6 0 0 0-.341-.553.75.75 0 0 0-.345-.08c-.263 0-.47.11-.62.329-.02.029-.054.107-.101.235a.966.966 0 0 1-.16.295c-.059.069-.145.103-.26.103a.348.348 0 0 1-.25-.094.34.34 0 0 1-.099-.258c0-.132.031-.27.093-.413.063-.143.155-.273.279-.39.123-.116.28-.21.47-.282.189-.072.411-.107.666-.107.307 0 .569.045.786.137a1.182 1.182 0 0 1 .618.623 1.18 1.18 0 0 1-.096 1.083 2.03 2.03 0 0 1-.378.457c-.128.11-.344.282-.646.517-.302.235-.509.417-.621.547a1.637 1.637 0 0 0-.148.187z"/></svg>', default: "ordered" === r2.defaultStyle || true }], this._data = { style: this.settings.find(function(e3) {
                return true === e3.default;
              }).name, items: [] }, this.data = n2;
            }
            return o(e2, null, [{ key: "isReadOnlySupported", get: function() {
              return true;
            } }, { key: "enableLineBreaks", get: function() {
              return true;
            } }, { key: "toolbox", get: function() {
              return { icon: '<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>', title: "List" };
            } }]), o(e2, [{ key: "render", value: function() {
              var e3 = this;
              return this._elements.wrapper = this.makeMainTag(this._data.style), this._data.items.length ? this._data.items.forEach(function(t2) {
                e3._elements.wrapper.appendChild(e3._make("li", e3.CSS.item, { innerHTML: t2 }));
              }) : this._elements.wrapper.appendChild(this._make("li", this.CSS.item)), this.readOnly || this._elements.wrapper.addEventListener("keydown", function(t2) {
                switch (t2.keyCode) {
                  case 13:
                    e3.getOutofList(t2);
                    break;
                  case 8:
                    e3.backspace(t2);
                }
              }, false), this._elements.wrapper;
            } }, { key: "save", value: function() {
              return this.data;
            } }, { key: "renderSettings", value: function() {
              var e3 = this, t2 = this._make("div", [this.CSS.settingsWrapper], {});
              return this.settings.forEach(function(n2) {
                var r2 = e3._make("div", e3.CSS.settingsButton, { innerHTML: n2.icon });
                r2.addEventListener("click", function() {
                  e3.toggleTune(n2.name);
                  var t3 = r2.parentNode.querySelectorAll("." + e3.CSS.settingsButton);
                  Array.from(t3).forEach(function(t4) {
                    return t4.classList.remove(e3.CSS.settingsButtonActive);
                  }), r2.classList.toggle(e3.CSS.settingsButtonActive);
                }), e3.api.tooltip.onHover(r2, n2.title, { placement: "top", hidingDelay: 500 }), e3._data.style === n2.name && r2.classList.add(e3.CSS.settingsButtonActive), t2.appendChild(r2);
              }), t2;
            } }, { key: "onPaste", value: function(e3) {
              var t2 = e3.detail.data;
              this.data = this.pasteHandler(t2);
            } }, { key: "makeMainTag", value: function(e3) {
              var t2 = "ordered" === e3 ? this.CSS.wrapperOrdered : this.CSS.wrapperUnordered, n2 = "ordered" === e3 ? "ol" : "ul";
              return this._make(n2, [this.CSS.baseBlock, this.CSS.wrapper, t2], { contentEditable: !this.readOnly });
            } }, { key: "toggleTune", value: function(e3) {
              for (var t2 = this.makeMainTag(e3); this._elements.wrapper.hasChildNodes(); )
                t2.appendChild(this._elements.wrapper.firstChild);
              this._elements.wrapper.replaceWith(t2), this._elements.wrapper = t2, this._data.style = e3;
            } }, { key: "_make", value: function(e3) {
              var t2, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a2 = document.createElement(e3);
              Array.isArray(n2) ? (t2 = a2.classList).add.apply(t2, r(n2)) : n2 && a2.classList.add(n2);
              for (var o2 in i2)
                a2[o2] = i2[o2];
              return a2;
            } }, { key: "getOutofList", value: function(e3) {
              var t2 = this._elements.wrapper.querySelectorAll("." + this.CSS.item);
              if (!(t2.length < 2)) {
                var n2 = t2[t2.length - 1], r2 = this.currentItem;
                r2 !== n2 || n2.textContent.trim().length || (r2.parentElement.removeChild(r2), this.api.blocks.insert(), this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex()), e3.preventDefault(), e3.stopPropagation());
              }
            } }, { key: "backspace", value: function(e3) {
              var t2 = this._elements.wrapper.querySelectorAll("." + this.CSS.item), n2 = t2[0];
              n2 && t2.length < 2 && !n2.innerHTML.replace("<br>", " ").trim() && e3.preventDefault();
            } }, { key: "selectItem", value: function(e3) {
              e3.preventDefault();
              var t2 = window.getSelection(), n2 = t2.anchorNode.parentNode.closest("." + this.CSS.item), r2 = new Range();
              r2.selectNodeContents(n2), t2.removeAllRanges(), t2.addRange(r2);
            } }, { key: "pasteHandler", value: function(e3) {
              var t2, n2 = e3.tagName;
              switch (n2) {
                case "OL":
                  t2 = "ordered";
                  break;
                case "UL":
                case "LI":
                  t2 = "unordered";
              }
              var r2 = { style: t2, items: [] };
              if ("LI" === n2)
                r2.items = [e3.innerHTML];
              else {
                var i2 = Array.from(e3.querySelectorAll("LI"));
                r2.items = i2.map(function(e4) {
                  return e4.innerHTML;
                }).filter(function(e4) {
                  return !!e4.trim();
                });
              }
              return r2;
            } }, { key: "CSS", get: function() {
              return { baseBlock: this.api.styles.block, wrapper: "cdx-list", wrapperOrdered: "cdx-list--ordered", wrapperUnordered: "cdx-list--unordered", item: "cdx-list__item", settingsWrapper: "cdx-list-settings", settingsButton: this.api.styles.settingsButton, settingsButtonActive: this.api.styles.settingsButtonActive };
            } }, { key: "data", set: function(e3) {
              e3 || (e3 = {}), this._data.style = e3.style || this.settings.find(function(e4) {
                return true === e4.default;
              }).name, this._data.items = e3.items || [];
              var t2 = this._elements.wrapper;
              t2 && t2.parentNode.replaceChild(this.render(), t2);
            }, get: function() {
              this._data.items = [];
              for (var e3 = this._elements.wrapper.querySelectorAll(".".concat(this.CSS.item)), t2 = 0; t2 < e3.length; t2++) {
                e3[t2].innerHTML.replace("<br>", " ").trim() && this._data.items.push(e3[t2].innerHTML);
              }
              return this._data;
            } }, { key: "currentItem", get: function() {
              var e3 = window.getSelection().anchorNode;
              return e3.nodeType !== Node.ELEMENT_NODE && (e3 = e3.parentNode), e3.closest(".".concat(this.CSS.item));
            } }], [{ key: "conversionConfig", get: function() {
              return { export: function(e3) {
                return e3.items.join(". ");
              }, import: function(e3) {
                return { items: [e3], style: "unordered" };
              } };
            } }, { key: "sanitize", get: function() {
              return { style: {}, items: { br: true } };
            } }, { key: "pasteConfig", get: function() {
              return { tags: ["OL", "UL", "LI"] };
            } }]), e2;
          }();
          e.exports = s;
        }, function(e, t, n) {
          var r = n(2), i = n(3);
          "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
          var a = { insert: "head", singleton: false };
          r(i, a);
          e.exports = i.locals || {};
        }, function(e, t, n) {
          "use strict";
          var r, i = function() {
            return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
          }, a = function() {
            var e2 = {};
            return function(t2) {
              if (void 0 === e2[t2]) {
                var n2 = document.querySelector(t2);
                if (window.HTMLIFrameElement && n2 instanceof window.HTMLIFrameElement)
                  try {
                    n2 = n2.contentDocument.head;
                  } catch (e3) {
                    n2 = null;
                  }
                e2[t2] = n2;
              }
              return e2[t2];
            };
          }(), o = [];
          function s(e2) {
            for (var t2 = -1, n2 = 0; n2 < o.length; n2++)
              if (o[n2].identifier === e2) {
                t2 = n2;
                break;
              }
            return t2;
          }
          function c(e2, t2) {
            for (var n2 = {}, r2 = [], i2 = 0; i2 < e2.length; i2++) {
              var a2 = e2[i2], c2 = t2.base ? a2[0] + t2.base : a2[0], l2 = n2[c2] || 0, u2 = "".concat(c2, " ").concat(l2);
              n2[c2] = l2 + 1;
              var d2 = s(u2), f2 = { css: a2[1], media: a2[2], sourceMap: a2[3] };
              -1 !== d2 ? (o[d2].references++, o[d2].updater(f2)) : o.push({ identifier: u2, updater: v(f2, t2), references: 1 }), r2.push(u2);
            }
            return r2;
          }
          function l(e2) {
            var t2 = document.createElement("style"), r2 = e2.attributes || {};
            if (void 0 === r2.nonce) {
              var i2 = n.nc;
              i2 && (r2.nonce = i2);
            }
            if (Object.keys(r2).forEach(function(e3) {
              t2.setAttribute(e3, r2[e3]);
            }), "function" == typeof e2.insert)
              e2.insert(t2);
            else {
              var o2 = a(e2.insert || "head");
              if (!o2)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
              o2.appendChild(t2);
            }
            return t2;
          }
          var u, d = (u = [], function(e2, t2) {
            return u[e2] = t2, u.filter(Boolean).join("\n");
          });
          function f(e2, t2, n2, r2) {
            var i2 = n2 ? "" : r2.media ? "@media ".concat(r2.media, " {").concat(r2.css, "}") : r2.css;
            if (e2.styleSheet)
              e2.styleSheet.cssText = d(t2, i2);
            else {
              var a2 = document.createTextNode(i2), o2 = e2.childNodes;
              o2[t2] && e2.removeChild(o2[t2]), o2.length ? e2.insertBefore(a2, o2[t2]) : e2.appendChild(a2);
            }
          }
          function p(e2, t2, n2) {
            var r2 = n2.css, i2 = n2.media, a2 = n2.sourceMap;
            if (i2 ? e2.setAttribute("media", i2) : e2.removeAttribute("media"), a2 && btoa && (r2 += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a2)))), " */")), e2.styleSheet)
              e2.styleSheet.cssText = r2;
            else {
              for (; e2.firstChild; )
                e2.removeChild(e2.firstChild);
              e2.appendChild(document.createTextNode(r2));
            }
          }
          var h = null, m = 0;
          function v(e2, t2) {
            var n2, r2, i2;
            if (t2.singleton) {
              var a2 = m++;
              n2 = h || (h = l(t2)), r2 = f.bind(null, n2, a2, false), i2 = f.bind(null, n2, a2, true);
            } else
              n2 = l(t2), r2 = p.bind(null, n2, t2), i2 = function() {
                !function(e3) {
                  if (null === e3.parentNode)
                    return false;
                  e3.parentNode.removeChild(e3);
                }(n2);
              };
            return r2(e2), function(t3) {
              if (t3) {
                if (t3.css === e2.css && t3.media === e2.media && t3.sourceMap === e2.sourceMap)
                  return;
                r2(e2 = t3);
              } else
                i2();
            };
          }
          e.exports = function(e2, t2) {
            (t2 = t2 || {}).singleton || "boolean" == typeof t2.singleton || (t2.singleton = i());
            var n2 = c(e2 = e2 || [], t2);
            return function(e3) {
              if (e3 = e3 || [], "[object Array]" === Object.prototype.toString.call(e3)) {
                for (var r2 = 0; r2 < n2.length; r2++) {
                  var i2 = s(n2[r2]);
                  o[i2].references--;
                }
                for (var a2 = c(e3, t2), l2 = 0; l2 < n2.length; l2++) {
                  var u2 = s(n2[l2]);
                  0 === o[u2].references && (o[u2].updater(), o.splice(u2, 1));
                }
                n2 = a2;
              }
            };
          };
        }, function(e, t, n) {
          (t = n(4)(false)).push([e.i, ".cdx-list {\n    margin: 0;\n    padding-left: 40px;\n    outline: none;\n}\n\n    .cdx-list__item {\n        padding: 5.5px 0 5.5px 3px;\n        line-height: 1.6em;\n    }\n\n    .cdx-list--unordered {\n        list-style: disc;\n    }\n\n    .cdx-list--ordered {\n        list-style: decimal;\n    }\n\n    .cdx-list-settings {\n        display: flex;\n    }\n\n    .cdx-list-settings .cdx-settings-button {\n            width: 50%;\n        }\n", ""]), e.exports = t;
        }, function(e, t, n) {
          "use strict";
          e.exports = function(e2) {
            var t2 = [];
            return t2.toString = function() {
              return this.map(function(t3) {
                var n2 = function(e3, t4) {
                  var n3 = e3[1] || "", r = e3[3];
                  if (!r)
                    return n3;
                  if (t4 && "function" == typeof btoa) {
                    var i = (o = r, s = btoa(unescape(encodeURIComponent(JSON.stringify(o)))), c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s), "/*# ".concat(c, " */")), a = r.sources.map(function(e4) {
                      return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e4, " */");
                    });
                    return [n3].concat(a).concat([i]).join("\n");
                  }
                  var o, s, c;
                  return [n3].join("\n");
                }(t3, e2);
                return t3[2] ? "@media ".concat(t3[2], " {").concat(n2, "}") : n2;
              }).join("");
            }, t2.i = function(e3, n2, r) {
              "string" == typeof e3 && (e3 = [[null, e3, ""]]);
              var i = {};
              if (r)
                for (var a = 0; a < this.length; a++) {
                  var o = this[a][0];
                  null != o && (i[o] = true);
                }
              for (var s = 0; s < e3.length; s++) {
                var c = [].concat(e3[s]);
                r && i[c[0]] || (n2 && (c[2] ? c[2] = "".concat(n2, " and ").concat(c[2]) : c[2] = n2), t2.push(c));
              }
            }, t2;
          };
        }]);
      });
    }
  });

  // node_modules/editorjs-html/build/edjsHTML.node.js
  var require_edjsHTML_node = __commonJS({
    "node_modules/editorjs-html/build/edjsHTML.node.js"(exports, module) {
      "use strict";
      var e = { delimiter: function() {
        return "<br/>";
      }, header: function(e2) {
        var t2 = e2.data;
        return "<h" + t2.level + ">" + t2.text + "</h" + t2.level + ">";
      }, paragraph: function(e2) {
        return "<p>" + e2.data.text + "</p>";
      }, list: function(e2) {
        var t2 = e2.data, r2 = "unordered" === t2.style ? "ul" : "ol", n = function(e3, t3) {
          var r3 = e3.map(function(e4) {
            if (!e4.content && !e4.items)
              return "<li>" + e4 + "</li>";
            var r4 = "";
            return e4.items && (r4 = n(e4.items, t3)), e4.content ? "<li> " + e4.content + " </li>" + r4 : void 0;
          });
          return "<" + t3 + ">" + r3.join("") + "</" + t3 + ">";
        };
        return n(t2.items, r2);
      }, image: function(e2) {
        var t2 = e2.data, r2 = t2.caption ? t2.caption : "Image";
        return '<img src="' + (t2.file && t2.file.url ? t2.file.url : t2.url) + '" alt="' + r2 + '" />';
      }, quote: function(e2) {
        var t2 = e2.data;
        return "<blockquote>" + t2.text + "</blockquote> - " + t2.caption;
      }, code: function(e2) {
        return "<pre><code>" + e2.data.code + "</code></pre>";
      }, embed: function(e2) {
        var t2 = e2.data;
        switch (t2.service) {
          case "vimeo":
            return '<iframe src="' + t2.embed + '" height="' + t2.height + '" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
          case "youtube":
            return '<iframe width="' + t2.width + '" height="' + t2.height + '" src="' + t2.embed + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
          default:
            throw new Error("Only Youtube and Vime Embeds are supported right now.");
        }
      } };
      function t(e2) {
        return new Error('\x1B[31m The Parser function of type "' + e2 + '" is not defined. \n\n  Define your custom parser functions as: \x1B[34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks \x1B[0m');
      }
      var r = function(n) {
        void 0 === n && (n = {});
        var i = Object.assign({}, e, n);
        return { parse: function(e2) {
          return e2.blocks.map(function(e3) {
            return i[e3.type] ? i[e3.type](e3) : t(e3.type);
          });
        }, parseBlock: function(e2) {
          return i[e2.type] ? i[e2.type](e2) : t(e2.type);
        }, parseStrict: function(e2) {
          var n2 = e2.blocks, o = r(i).validate({ blocks: n2 });
          if (o.length)
            throw new Error("Parser Functions missing for blocks: " + o.toString());
          for (var u = [], a = 0; a < n2.length; a++) {
            if (!i[n2[a].type])
              throw t(n2[a].type);
            u.push(i[n2[a].type](n2[a]));
          }
          return u;
        }, validate: function(e2) {
          var t2 = e2.blocks.map(function(e3) {
            return e3.type;
          }).filter(function(e3, t3, r3) {
            return r3.indexOf(e3) === t3;
          }), r2 = Object.keys(i);
          return t2.filter(function(e3) {
            return !r2.includes(e3);
          });
        } };
      };
      module.exports = r;
    }
  });

  // js/editor.js
  var editor_exports = {};
  __export(editor_exports, {
    HTMLEditorJS: () => HTMLEditorJS
  });
  var import_editorjs, import_header, import_image, import_list, import_editorjs_html, csrfToken, HTMLEditorJS;
  var init_editor = __esm({
    "js/editor.js"() {
      import_editorjs = __toESM(require_editor());
      import_header = __toESM(require_bundle());
      import_image = __toESM(require_bundle2());
      import_list = __toESM(require_bundle3());
      import_editorjs_html = __toESM(require_edjsHTML_node());
      csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
      HTMLEditorJS = (element) => {
        const inputEditorJSON = document.querySelector("#post-form_editor_json");
        const inputHTML = document.querySelector("#post-form_html");
        const editor = new import_editorjs.default({
          tools: {
            header: import_header.default,
            image: {
              class: import_image.default,
              config: {
                additionalRequestHeaders: {
                  "X-CSRF-TOKEN": csrfToken
                },
                endpoints: {
                  byFile: `${window.location.href}/upload-file`,
                  byURL: `${window.location.href}/fetch-url`
                }
              }
            },
            list: import_list.default
          },
          data: JSON.parse(element.dataset.postData || "{}"),
          onChange: () => {
            editor.save().then((outputData) => {
              inputEditorJSON.value = JSON.stringify(outputData);
              inputHTML.value = (0, import_editorjs_html.default)().parse(outputData);
            });
          }
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
  Hooks2.EditorJS = {
    loadEditorJS() {
      const element = this.el;
      Promise.resolve().then(() => (init_editor(), editor_exports)).then(
        ({ HTMLEditorJS: HTMLEditorJS2 }) => {
          HTMLEditorJS2(element);
        }
      );
    },
    mounted() {
      this.loadEditorJS();
    },
    updated() {
      this.loadEditorJS();
    }
  };
  Hooks2.HiddenInputChange = {};
  var csrfToken2 = document.querySelector("meta[name='csrf-token']").getAttribute("content");
  var liveSocket = new LiveSocket("/live", Socket, { hooks: Hooks2, params: { _csrf_token: csrfToken2 } });
  liveSocket.connect();
  window.liveSocket = liveSocket;
})();
/*! For license information please see editor.js.LICENSE.txt */
/**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */
/**
 * Image Tool for the Editor.js
 *
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */
