/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty,
        k = {}, l = a.document, m = "2.1.4", n = function (a, b) {
            return new n.fn.init(a, b)
        }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
            return d.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        }, pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return n.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(d.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: f, sort: c.sort, splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === n.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
        }, isPlainObject: function (a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        }, camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++) if (d = b.apply(a[e], c), d === !1) break
                } else for (e in a) if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break
            } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        }, inArray: function (a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h) for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        }, now: Date.now, support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = "length" in a && a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0,
            x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) {
                return a === b && (l = !0), 0
            }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P),
            W = new RegExp("^" + N + "$"), X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g,
            ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, ea = function () {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) ;
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode) return d;
                        if (h.id === j) return d.push(h), d
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                } else {
                    if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {
                    } finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = ga.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function (a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {
            }
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [w, n, m];
                                    break
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function (a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0
                    }
                }), contains: ia(function (a) {
                    return a = a.replace(ca, da), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: ia(function (a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return Z.test(a.nodeName)
                }, input: function (a) {
                    return Y.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: oa(function () {
                    return [0]
                }), last: oa(function (a, b) {
                    return [b - 1]
                }), eq: oa(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: oa(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }), odd: oa(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }), lt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }), gt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) d.pseudos[b] = ma(b);
        for (b in {submit: !0, reset: !0}) d.pseudos[b] = na(b);

        function qa() {
        }

        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function sa(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else while (b = b[d]) if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0
                }
            }
        }

        function ta(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c
        }

        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
                return a === b
            }, h, !0), l = sa(function (a) {
                return J(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++) if (c = d.relative[a[i].type]) m = [sa(ta(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
                    return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                }
                m.push(c)
            }
            return ta(m)
        }

        function ya(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k),
                    v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++]) if (o(l, g, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++]) o(r, s, g, h);
                    if (f) {
                        if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));
                        s = va(s)
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? ia(f) : f
        }

        return h = ga.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function (a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return g.call(b, a) >= 0 !== c
        })
    }

    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
                for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        }, filter: function (a) {
            return this.pushStack(x(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(x(this, a || [], !0))
        }, is: function (a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
    n.extend({
        dir: function (a, b, c) {
            var d = [], e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
                if (e && n(a).is(c)) break;
                d.push(a)
            }
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function (a) {
            var b = n(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) ;
        return a
    }

    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return n.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return n.dir(a, "parentNode", c)
        }, next: function (a) {
            return D(a, "nextSibling")
        }, prev: function (a) {
            return D(a, "previousSibling")
        }, nextAll: function (a) {
            return n.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return n.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return n.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return n.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return n.sibling(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};

    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    n.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break
            }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
        }, k = {
            add: function () {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function (b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                        })
                    }(arguments), d ? f = h.length : b && (e = c, j(b))
                }
                return this
            }, remove: function () {
                return h && n.each(arguments, function (a, b) {
                    var c;
                    while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                }), this
            }, has: function (a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
            }, empty: function () {
                return h = [], f = 0, this
            }, disable: function () {
                return h = i = b = void 0, this
            }, disabled: function () {
                return !h
            }, lock: function () {
                return i = void 0, b || k.disable(), this
            }, locked: function () {
                return !i
            }, fireWith: function (a, b) {
                return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
            }, fire: function () {
                return k.fireWith(this, arguments), this
            }, fired: function () {
                return !!c
            }
        };
        return k
    }, n.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
                c = "pending", d = {
                    state: function () {
                        return c
                    }, always: function () {
                        return e.done(arguments).fail(arguments), this
                    }, then: function () {
                        var a = arguments;
                        return n.Deferred(function (c) {
                            n.each(b, function (b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? n.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
                    return function (e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                }, i, j, k;
            if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        }, ready: function (a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });

    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }

    n.ready.promise = function (b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
            return j.call(n(a), c)
        })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = n.expando + K.uid++
    }

    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function (a) {
            if (!K.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        }, set: function (a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (n.isEmptyObject(f)) n.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f
        }, get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        }, access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        }, remove: function (a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--) delete g[d[c]]
            }
        }, hasData: function (a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        }, discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
            } catch (e) {
            }
            M.set(a, b, c)
        } else c = void 0;
        return c
    }

    n.extend({
        hasData: function (a) {
            return M.hasData(a) || L.hasData(a)
        }, data: function (a, b, c) {
            return M.access(a, b, c)
        }, removeData: function (a, b) {
            M.remove(a, b)
        }, _data: function (a, b, c) {
            return L.access(a, b, c)
        }, _removeData: function (a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                M.set(this, a)
            }) : J(this, function (b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) return c;
                    if (c = M.get(f, d), void 0 !== c) return c;
                    if (c = P(f, d, void 0), void 0 !== c) return c
                } else this.each(function () {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function () {
                    L.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function (a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    }, T = /^(?:checkbox|radio)$/i;
    !function () {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (a) {
        }
    }

    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--) if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b,
                r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                d.length && g.push({elem: i, handlers: d})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = n.extend(new n.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $; else if (!d) return this;
            return 1 === e && (f = d, d = function (a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ba = /<([\w:]+)/,
        ca = /<|&#?\w+;/, da = /<(?:script|style|link)/i, ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fa = /^$|\/(?:java|ecma)script/i, ga = /^true\/(.*)/, ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ia = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;

    function ja(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function ka(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function la(a) {
        var b = ga.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function na(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }

    function oa(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pa(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    n.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
            if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]); else na(a, h);
            return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if (e = a[m], e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e); else if (ca.test(e)) {
                f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
                while (j--) f = f.lastChild;
                n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++]) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
                j = 0;
                while (e = f[j++]) fa.test(e.type || "") && c.push(e)
            }
            return k
        }, cleanData: function (a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function (a) {
            return J(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        }, html: function (a) {
            return J(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(aa, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
                if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qa, ra = {};

    function sa(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f
    }

    function ta(a) {
        var b = l, c = ra[a];
        return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c
    }

    var ua = /^margin/, va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wa = function (b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };

    function xa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function ya(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    !function () {
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
            }

            a.getComputedStyle && n.extend(k, {
                pixelPosition: function () {
                    return g(), b
                }, boxSizingReliable: function () {
                    return null == c && g(), c
                }, reliableMarginRight: function () {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
                }
            })
        }
    }(), n.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var za = /^(none|table(?!-c[ea]).+)/, Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
        Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
        Ca = {position: "absolute", visibility: "hidden", display: "block"},
        Da = {letterSpacing: "0", fontWeight: "400"}, Ea = ["Webkit", "O", "Moz", "ms"];

    function Fa(a, b) {
        if (b in a) return b;
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ea.length;
        while (e--) if (b = Ea[e] + c, b in a) return b;
        return d
    }

    function Ga(a, b, c) {
        var d = Aa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Ha(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ia(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wa(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = xa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
                    return Ia(a, b, d)
                }) : Ia(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && wa(a);
                return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, {display: "inline-block"}, xa, [a, "marginRight"]) : void 0
    }), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ua.test(a) || (n.cssHooks[a + b].set = Ga)
    }), n.fn.extend({
        css: function (a, b) {
            return J(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return Ja(this, !0)
        }, hide: function () {
            return Ja(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a, b, c, d, e)
    }

    n.Tween = Ka, Ka.prototype = {
        constructor: Ka, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Ka.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Ka.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this
        }
    }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Ka.prototype.init, n.fx.step = {};
    var La, Ma, Na = /^(?:toggle|show|hide)$/, Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pa = /queueHooks$/, Qa = [Va], Ra = {
            "*": [function (a, b) {
                var c = this.createTween(a, b), d = c.cur(), e = Oa.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                    g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)), h = 1, i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function Sa() {
        return setTimeout(function () {
            La = void 0
        }), La = n.now()
    }

    function Ta(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }

    function Va(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], Na.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0
            }
            m[d] = q && q[d] || n.style(a, d)
        } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                n(a).hide()
            }), l.done(function () {
                var b;
                L.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wa(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function Xa(a, b, c) {
        var d, e, f = 0, g = Qa.length, h = n.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e) return !1;
            for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: La || Sa(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (Wa(k, j.opts.specialEasing); g > f; f++) if (d = Qa[f].call(j, a, k, j.opts)) return d;
        return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    n.Animation = n.extend(Xa, {
        tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? Qa.unshift(a) : Qa.push(a)
        }
    }), n.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
                var b = Xa(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Ta("show"),
        slideUp: Ta("hide"),
        slideToggle: Ta("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function () {
        var a, b = 0, c = n.timers;
        for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), La = void 0
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
        Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
        clearInterval(Ma), Ma = null
    }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
    }();
    var Ya, Za, $a = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)),
                void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Za = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = $a[b] || n.find.attr;
        $a[b] = function (a, b, d) {
            var e, f;
            return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
        }
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    });
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                f = 0;
                while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = n.trim(d), c.className !== g && (c.className = g)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                f = 0;
                while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var bb = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cb = n.now(), db = /\?/;
    n.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, n.parseXML = function (a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var eb = /#.*$/, fb = /([?&])_=[^&]*/, gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ib = /^(?:GET|HEAD)$/, jb = /^\/\//,
        kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lb = {}, mb = {}, nb = "*/".concat("*"),
        ob = a.location.href, pb = kb.exec(ob.toLowerCase()) || [];

    function qb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function rb(a, b, c, d) {
        var e = {}, f = a === mb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function sb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function tb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function ub(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ob,
            type: "GET",
            isLocal: hb.test(pb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
        },
        ajaxPrefilter: qb(lb),
        ajaxTransport: qb(mb),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(),
                p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                    readyState: 0, getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!f) {
                                f = {};
                                while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2]
                            }
                            b = f[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    }, getAllResponseHeaders: function () {
                        return 2 === t ? e : null
                    }, setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    }, overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this
                    }, statusCode: function (a) {
                        var b;
                        if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                        return this
                    }, abort: function (a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (j in {success: 1, error: 1, complete: 1}) v[j](k[j]);
            if (c = rb(mb, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }

            return v
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n._evalUrl = function (a) {
        return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, n.fn.extend({
        wrapAll: function (a) {
            var b;
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this)
        }, wrapInner: function (a) {
            return this.each(n.isFunction(a) ? function (b) {
                n(this).wrapInner(a.call(this, b))
            } : function () {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var vb = /%20/g, wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function (b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
    }

    n.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a) Ab(c, a[c], b, e);
        return d.join("&").replace(vb, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {name: b.name, value: a.replace(xb, "\r\n")}
                }) : {name: b.name, value: c.replace(xb, "\r\n")}
            }).get()
        }
    }), n.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Bb = 0, Cb = {}, Db = {0: 200, 1223: 204}, Eb = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Cb) Cb[a]()
    }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
        var b;
        return k.cors || Eb && !a.crossDomain ? {
            send: function (c, d) {
                var e, f = a.xhr(), g = ++Bb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function (a) {
                    return function () {
                        b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            }, abort: function () {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var Fb = [], Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Fb.pop() || n.expando + "_" + cb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g,
            h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Hb = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Ib = a.document.documentElement;

    function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        }, position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || Ib;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ib
            })
        }
    }), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function (e) {
            return J(this, function (b, e, f) {
                var g = Jb(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
            return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({Height: "height", Width: "width"}, function (a, b) {
        n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function () {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var Kb = a.jQuery, Lb = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});
;
;(function ($, window, document, undefined) {
    var drag, state, e;
    drag = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    };
    state = {isTouch: false, isScrolling: false, isSwiping: false, direction: false, inMotion: false};
    e = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    };

    function Owl(element, options) {
        this.settings = null;
        this.options = $.extend({}, Owl.Defaults, options);
        this.$element = $(element);
        this.drag = $.extend({}, drag);
        this.state = $.extend({}, state);
        this.e = $.extend({}, e);
        this._plugins = {};
        this._supress = {};
        this._current = null;
        this._speed = null;
        this._coordinates = [];
        this._breakpoint = null;
        this._width = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._invalidated = {};
        this._pipe = [];
        $.each(Owl.Plugins, $.proxy(function (key, plugin) {
            this._plugins[key[0].toLowerCase() + key.slice(1)] = new plugin(this);
        }, this));
        $.each(Owl.Pipe, $.proxy(function (priority, worker) {
            this._pipe.push({'filter': worker.filter, 'run': $.proxy(worker.run, this)});
        }, this));
        this.setup();
        this.initialize();
    }

    Owl.Defaults = {
        items: 1,
        loop: false,
        center: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        margin: 0,
        stagePadding: 0,
        merge: false,
        mergeFit: true,
        autoWidth: false,
        startPosition: 0,
        rtl: false,
        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,
        responsiveClass: false,
        fallbackEasing: 'swing',
        info: false,
        nestedItemSelector: false,
        itemElement: 'div',
        stageElement: 'div',
        themeClass: 'owl-theme',
        baseClass: 'owl-carousel',
        itemClass: 'owl-item',
        centerClass: 'center',
        activeClass: 'active'
    };
    Owl.Width = {Default: 'default', Inner: 'inner', Outer: 'outer'};
    Owl.Plugins = {};
    Owl.Pipe = [{
        filter: ['width', 'items', 'settings'], run: function (cache) {
            cache.current = this._items && this._items[this.relative(this._current)];
        }
    }, {
        filter: ['items', 'settings'], run: function () {
            var cached = this._clones, clones = this.$stage.children('.cloned');
            if (clones.length !== cached.length || (!this.settings.loop && cached.length > 0)) {
                this.$stage.children('.cloned').remove();
                this._clones = [];
            }
        }
    }, {
        filter: ['items', 'settings'], run: function () {
            var i, n, clones = this._clones, items = this._items,
                delta = this.settings.loop ? clones.length - Math.max(this.settings.items * 2, 4) : 0;
            for (i = 0, n = Math.abs(delta / 2); i < n; i++) {
                if (delta > 0) {
                    this.$stage.children().eq(items.length + clones.length - 1).remove();
                    clones.pop();
                    this.$stage.children().eq(0).remove();
                    clones.pop();
                } else {
                    clones.push(clones.length / 2);
                    this.$stage.append(items[clones[clones.length - 1]].clone().addClass('cloned'));
                    clones.push(items.length - 1 - (clones.length - 1) / 2);
                    this.$stage.prepend(items[clones[clones.length - 1]].clone().addClass('cloned'));
                }
            }
        }
    }, {
        filter: ['width', 'items', 'settings'], run: function () {
            var rtl = (this.settings.rtl ? 1 : -1), width = (this.width() / this.settings.items).toFixed(3),
                coordinate = 0, merge, i, n;
            this._coordinates = [];
            for (i = 0, n = this._clones.length + this._items.length; i < n; i++) {
                merge = this._mergers[this.relative(i)];
                merge = (this.settings.mergeFit && Math.min(merge, this.settings.items)) || merge;
                coordinate += (this.settings.autoWidth ? this._items[this.relative(i)].width() + this.settings.margin : width * merge) * rtl;
                this._coordinates.push(coordinate);
            }
        }
    }, {
        filter: ['width', 'items', 'settings'], run: function () {
            var i, n, width = (this.width() / this.settings.items).toFixed(3), css = {
                'width': Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
                'padding-left': this.settings.stagePadding || '',
                'padding-right': this.settings.stagePadding || ''
            };
            this.$stage.css(css);
            css = {'width': this.settings.autoWidth ? 'auto' : width - this.settings.margin};
            css[this.settings.rtl ? 'margin-left' : 'margin-right'] = this.settings.margin;
            if (!this.settings.autoWidth && $.grep(this._mergers, function (v) {
                return v > 1
            }).length > 0) {
                for (i = 0, n = this._coordinates.length; i < n; i++) {
                    css.width = Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1] || 0) - this.settings.margin;
                    this.$stage.children().eq(i).css(css);
                }
            } else {
                this.$stage.children().css(css);
            }
        }
    }, {
        filter: ['width', 'items', 'settings'], run: function (cache) {
            cache.current && this.reset(this.$stage.children().index(cache.current));
        }
    }, {
        filter: ['position'], run: function () {
            this.animate(this.coordinates(this._current));
        }
    }, {
        filter: ['width', 'position', 'items', 'settings'], run: function () {
            var rtl = this.settings.rtl ? 1 : -1, padding = this.settings.stagePadding * 2,
                begin = this.coordinates(this.current()) + padding, end = begin + this.width() * rtl, inner, outer,
                matches = [], i, n;
            for (i = 0, n = this._coordinates.length; i < n; i++) {
                inner = this._coordinates[i - 1] || 0;
                outer = Math.abs(this._coordinates[i]) + padding * rtl;
                if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end))) || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
                    matches.push(i);
                }
            }
            this.$stage.children('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
            this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass(this.settings.activeClass);
            if (this.settings.center) {
                this.$stage.children('.' + this.settings.centerClass).removeClass(this.settings.centerClass);
                this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
            }
        }
    }];
    Owl.prototype.initialize = function () {
        this.trigger('initialize');
        this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass('owl-rtl', this.settings.rtl);
        this.browserSupport();
        if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find('img');
            nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
            width = this.$element.children(nestedSelector).width();
            if (imgs.length && width <= 0) {
                this.preloadAutoWidthImages(imgs);
                return false;
            }
        }
        this.$element.addClass('owl-loading');
        this.$stage = $('<' + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">');
        this.$element.append(this.$stage.parent());
        this.replace(this.$element.children().not(this.$stage.parent()));
        this._width = this.$element.width();
        this.refresh();
        this.$element.removeClass('owl-loading').addClass('owl-loaded');
        this.eventsCall();
        this.internalEvents();
        this.addTriggerableEvents();
        this.trigger('initialized');
    };
    Owl.prototype.setup = function () {
        var viewport = this.viewport(), overwrites = this.options.responsive, match = -1, settings = null;
        if (!overwrites) {
            settings = $.extend({}, this.options);
        } else {
            $.each(overwrites, function (breakpoint) {
                if (breakpoint <= viewport && breakpoint > match) {
                    match = Number(breakpoint);
                }
            });
            settings = $.extend({}, this.options, overwrites[match]);
            delete settings.responsive;
            if (settings.responsiveClass) {
                this.$element.attr('class', function (i, c) {
                    return c.replace(/\b owl-responsive-\S+/g, '');
                }).addClass('owl-responsive-' + match);
            }
        }
        if (this.settings === null || this._breakpoint !== match) {
            this.trigger('change', {property: {name: 'settings', value: settings}});
            this._breakpoint = match;
            this.settings = settings;
            this.invalidate('settings');
            this.trigger('changed', {property: {name: 'settings', value: this.settings}});
        }
    };
    Owl.prototype.optionsLogic = function () {
        this.$element.toggleClass('owl-center', this.settings.center);
        if (this.settings.loop && this._items.length < this.settings.items) {
            this.settings.loop = false;
        }
        if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false;
        }
    };
    Owl.prototype.prepare = function (item) {
        var event = this.trigger('prepare', {content: item});
        if (!event.data) {
            event.data = $('<' + this.settings.itemElement + '/>').addClass(this.settings.itemClass).append(item)
        }
        this.trigger('prepared', {content: event.data});
        return event.data;
    };
    Owl.prototype.update = function () {
        var i = 0, n = this._pipe.length, filter = $.proxy(function (p) {
            return this[p]
        }, this._invalidated), cache = {};
        while (i < n) {
            if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                this._pipe[i].run(cache);
            }
            i++;
        }
        this._invalidated = {};
    };
    Owl.prototype.width = function (dimension) {
        dimension = dimension || Owl.Width.Default;
        switch (dimension) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin;
        }
    };
    Owl.prototype.refresh = function () {
        if (this._items.length === 0) {
            return false;
        }
        var start = new Date().getTime();
        this.trigger('refresh');
        this.setup();
        this.optionsLogic();
        this.$stage.addClass('owl-refresh');
        this.update();
        this.$stage.removeClass('owl-refresh');
        this.state.orientation = window.orientation;
        this.watchVisibility();
        this.trigger('refreshed');
    };
    Owl.prototype.eventsCall = function () {
        this.e._onDragStart = $.proxy(function (e) {
            this.onDragStart(e);
        }, this);
        this.e._onDragMove = $.proxy(function (e) {
            this.onDragMove(e);
        }, this);
        this.e._onDragEnd = $.proxy(function (e) {
            this.onDragEnd(e);
        }, this);
        this.e._onResize = $.proxy(function (e) {
            this.onResize(e);
        }, this);
        this.e._transitionEnd = $.proxy(function (e) {
            this.transitionEnd(e);
        }, this);
        this.e._preventClick = $.proxy(function (e) {
            this.preventClick(e);
        }, this);
    };
    Owl.prototype.onThrottledResize = function () {
        window.clearTimeout(this.resizeTimer);
        this.resizeTimer = window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
    };
    Owl.prototype.onResize = function () {
        if (!this._items.length) {
            return false;
        }
        if (this._width === this.$element.width()) {
            return false;
        }
        if (this.trigger('resize').isDefaultPrevented()) {
            return false;
        }
        this._width = this.$element.width();
        this.invalidate('width');
        this.refresh();
        this.trigger('resized');
    };
    Owl.prototype.eventsRouter = function (event) {
        var type = event.type;
        if (type === "mousedown" || type === "touchstart") {
            this.onDragStart(event);
        } else if (type === "mousemove" || type === "touchmove") {
            this.onDragMove(event);
        } else if (type === "mouseup" || type === "touchend") {
            this.onDragEnd(event);
        } else if (type === "touchcancel") {
            this.onDragEnd(event);
        }
    };
    Owl.prototype.internalEvents = function () {
        var isTouch = isTouchSupport(), isTouchIE = isTouchSupportIE();
        if (this.settings.mouseDrag) {
            this.$stage.on('mousedown', $.proxy(function (event) {
                this.eventsRouter(event)
            }, this));
            this.$stage.on('dragstart', function () {
                return false
            });
            this.$stage.get(0).onselectstart = function () {
                return false
            };
        } else {
            this.$element.addClass('owl-text-select-on');
        }
        if (this.settings.touchDrag && !isTouchIE) {
            this.$stage.on('touchstart touchcancel', $.proxy(function (event) {
                this.eventsRouter(event)
            }, this));
        }
        if (this.transitionEndVendor) {
            this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
        }
        if (this.settings.responsive !== false) {
            this.on(window, 'resize', $.proxy(this.onThrottledResize, this));
        }
    };
    Owl.prototype.onDragStart = function (event) {
        var ev, isTouchEvent, pageX, pageY, animatedPos;
        ev = event.originalEvent || event || window.event;
        if (ev.which === 3 || this.state.isTouch) {
            return false;
        }
        if (ev.type === 'mousedown') {
            this.$stage.addClass('owl-grab');
        }
        this.trigger('drag');
        this.drag.startTime = new Date().getTime();
        this.speed(0);
        this.state.isTouch = true;
        this.state.isScrolling = false;
        this.state.isSwiping = false;
        this.drag.distance = 0;
        pageX = getTouches(ev).x;
        pageY = getTouches(ev).y;
        this.drag.offsetX = this.$stage.position().left;
        this.drag.offsetY = this.$stage.position().top;
        if (this.settings.rtl) {
            this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width()
                + this.settings.margin;
        }
        if (this.state.inMotion && this.support3d) {
            animatedPos = this.getTransformProperty();
            this.drag.offsetX = animatedPos;
            this.animate(animatedPos);
            this.state.inMotion = true;
        } else if (this.state.inMotion && !this.support3d) {
            this.state.inMotion = false;
            return false;
        }
        this.drag.startX = pageX - this.drag.offsetX;
        this.drag.startY = pageY - this.drag.offsetY;
        this.drag.start = pageX - this.drag.startX;
        this.drag.targetEl = ev.target || ev.srcElement;
        this.drag.updatedX = this.drag.start;
        if (this.drag.targetEl.tagName === "IMG" || this.drag.targetEl.tagName === "A") {
            this.drag.targetEl.draggable = false;
        }
        $(document).on('mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents', $.proxy(function (event) {
            this.eventsRouter(event)
        }, this));
    };
    Owl.prototype.onDragMove = function (event) {
        var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;
        if (!this.state.isTouch) {
            return;
        }
        if (this.state.isScrolling) {
            return;
        }
        ev = event.originalEvent || event || window.event;
        pageX = getTouches(ev).x;
        pageY = getTouches(ev).y;
        this.drag.currentX = pageX - this.drag.startX;
        this.drag.currentY = pageY - this.drag.startY;
        this.drag.distance = this.drag.currentX - this.drag.offsetX;
        if (this.drag.distance < 0) {
            this.state.direction = this.settings.rtl ? 'right' : 'left';
        } else if (this.drag.distance > 0) {
            this.state.direction = this.settings.rtl ? 'left' : 'right';
        }
        if (this.settings.loop) {
            if (this.op(this.drag.currentX, '>', this.coordinates(this.minimum())) && this.state.direction === 'right') {
                this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
            } else if (this.op(this.drag.currentX, '<', this.coordinates(this.maximum())) && this.state.direction === 'left') {
                this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
            }
        } else {
            minValue = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maxValue = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
            this.drag.currentX = Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
        }
        if ((this.drag.distance > 8 || this.drag.distance < -8)) {
            if (ev.preventDefault !== undefined) {
                ev.preventDefault();
            } else {
                ev.returnValue = false;
            }
            this.state.isSwiping = true;
        }
        this.drag.updatedX = this.drag.currentX;
        if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
            this.state.isScrolling = true;
            this.drag.updatedX = this.drag.start;
        }
        this.animate(this.drag.updatedX);
    };
    Owl.prototype.onDragEnd = function (event) {
        var compareTimes, distanceAbs, closest;
        if (!this.state.isTouch) {
            return;
        }
        if (event.type === 'mouseup') {
            this.$stage.removeClass('owl-grab');
        }
        this.trigger('dragged');
        this.drag.targetEl.removeAttribute("draggable");
        this.state.isTouch = false;
        this.state.isScrolling = false;
        this.state.isSwiping = false;
        if (this.drag.distance === 0 && this.state.inMotion !== true) {
            this.state.inMotion = false;
            return false;
        }
        this.drag.endTime = new Date().getTime();
        compareTimes = this.drag.endTime - this.drag.startTime;
        distanceAbs = Math.abs(this.drag.distance);
        if (distanceAbs > 3 || compareTimes > 300) {
            this.removeClick(this.drag.targetEl);
        }
        closest = this.closest(this.drag.updatedX);
        this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
        this.current(closest);
        this.invalidate('position');
        this.update();
        if (!this.settings.pullDrag && this.drag.updatedX === this.coordinates(closest)) {
            this.transitionEnd();
        }
        this.drag.distance = 0;
        $(document).off('.owl.dragEvents');
    };
    Owl.prototype.removeClick = function (target) {
        this.drag.targetEl = target;
        $(target).on('click.preventClick', this.e._preventClick);
        window.setTimeout(function () {
            $(target).off('click.preventClick');
        }, 300);
    };
    Owl.prototype.preventClick = function (ev) {
        if (ev.preventDefault) {
            ev.preventDefault();
        } else {
            ev.returnValue = false;
        }
        if (ev.stopPropagation) {
            ev.stopPropagation();
        }
        $(ev.target).off('click.preventClick');
    };
    Owl.prototype.getTransformProperty = function () {
        var transform, matrix3d;
        transform = window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + 'transform');
        transform = transform.replace(/matrix(3d)?\(|\)/g, '').split(',');
        matrix3d = transform.length === 16;
        return matrix3d !== true ? transform[4] : transform[12];
    };
    Owl.prototype.closest = function (coordinate) {
        var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();
        if (!this.settings.freeDrag) {
            $.each(coordinates, $.proxy(function (index, value) {
                if (coordinate > value - pull && coordinate < value + pull) {
                    position = index;
                } else if (this.op(coordinate, '<', value) && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
                    position = this.state.direction === 'left' ? index + 1 : index;
                }
                return position === -1;
            }, this));
        }
        if (!this.settings.loop) {
            if (this.op(coordinate, '>', coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
            } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
            }
        }
        return position;
    };
    Owl.prototype.animate = function (coordinate) {
        this.trigger('translate');
        this.state.inMotion = this.speed() > 0;
        if (this.support3d) {
            this.$stage.css({
                transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)',
                transition: (this.speed() / 1000) + 's'
            });
        } else if (this.state.isTouch) {
            this.$stage.css({left: coordinate + 'px'});
        } else {
            this.$stage.animate({left: coordinate}, this.speed() / 1000, this.settings.fallbackEasing, $.proxy(function () {
                if (this.state.inMotion) {
                    this.transitionEnd();
                }
            }, this));
        }
    };
    Owl.prototype.current = function (position) {
        if (position === undefined) {
            return this._current;
        }
        if (this._items.length === 0) {
            return undefined;
        }
        position = this.normalize(position);
        if (this._current !== position) {
            var event = this.trigger('change', {property: {name: 'position', value: position}});
            if (event.data !== undefined) {
                position = this.normalize(event.data);
            }
            this._current = position;
            this.invalidate('position');
            this.trigger('changed', {property: {name: 'position', value: this._current}});
        }
        return this._current;
    };
    Owl.prototype.invalidate = function (part) {
        this._invalidated[part] = true;
    }
    Owl.prototype.reset = function (position) {
        position = this.normalize(position);
        if (position === undefined) {
            return;
        }
        this._speed = 0;
        this._current = position;
        this.suppress(['translate', 'translated']);
        this.animate(this.coordinates(position));
        this.release(['translate', 'translated']);
    };
    Owl.prototype.normalize = function (position, relative) {
        var n = (relative ? this._items.length : this._items.length + this._clones.length);
        if (!$.isNumeric(position) || n < 1) {
            return undefined;
        }
        if (this._clones.length) {
            position = ((position % n) + n) % n;
        } else {
            position = Math.max(this.minimum(relative), Math.min(this.maximum(relative), position));
        }
        return position;
    };
    Owl.prototype.relative = function (position) {
        position = this.normalize(position);
        position = position - this._clones.length / 2;
        return this.normalize(position, true);
    };
    Owl.prototype.maximum = function (relative) {
        var maximum, width, i = 0, coordinate, settings = this.settings;
        if (relative) {
            return this._items.length - 1;
        }
        if (!settings.loop && settings.center) {
            maximum = this._items.length - 1;
        } else if (!settings.loop && !settings.center) {
            maximum = this._items.length - settings.items;
        } else if (settings.loop || settings.center) {
            maximum = this._items.length + settings.items;
        } else if (settings.autoWidth || settings.merge) {
            revert = settings.rtl ? 1 : -1;
            width = this.$stage.width() - this.$element.width();
            while (coordinate = this.coordinates(i)) {
                if (coordinate * revert >= width) {
                    break;
                }
                maximum = ++i;
            }
        } else {
            throw'Can not detect maximum absolute position.'
        }
        return maximum;
    };
    Owl.prototype.minimum = function (relative) {
        if (relative) {
            return 0;
        }
        return this._clones.length / 2;
    };
    Owl.prototype.items = function (position) {
        if (position === undefined) {
            return this._items.slice();
        }
        position = this.normalize(position, true);
        return this._items[position];
    };
    Owl.prototype.mergers = function (position) {
        if (position === undefined) {
            return this._mergers.slice();
        }
        position = this.normalize(position, true);
        return this._mergers[position];
    };
    Owl.prototype.clones = function (position) {
        var odd = this._clones.length / 2, even = odd + this._items.length, map = function (index) {
            return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2
        };
        if (position === undefined) {
            return $.map(this._clones, function (v, i) {
                return map(i)
            });
        }
        return $.map(this._clones, function (v, i) {
            return v === position ? map(i) : null
        });
    };
    Owl.prototype.speed = function (speed) {
        if (speed !== undefined) {
            this._speed = speed;
        }
        return this._speed;
    };
    Owl.prototype.coordinates = function (position) {
        var coordinate = null;
        if (position === undefined) {
            return $.map(this._coordinates, $.proxy(function (coordinate, index) {
                return this.coordinates(index);
            }, this));
        }
        if (this.settings.center) {
            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
        } else {
            coordinate = this._coordinates[position - 1] || 0;
        }
        return coordinate;
    };
    Owl.prototype.duration = function (from, to, factor) {
        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
    };
    Owl.prototype.to = function (position, speed) {
        if (this.settings.loop) {
            var distance = position - this.relative(this.current()), revert = this.current(), before = this.current(),
                after = this.current() + distance, direction = before - after < 0 ? true : false,
                items = this._clones.length + this._items.length;
            if (after < this.settings.items && direction === false) {
                revert = before + this._items.length;
                this.reset(revert);
            } else if (after >= items - this.settings.items && direction === true) {
                revert = before - this._items.length;
                this.reset(revert);
            }
            window.clearTimeout(this.e._goToLoop);
            this.e._goToLoop = window.setTimeout($.proxy(function () {
                this.speed(this.duration(this.current(), revert + distance, speed));
                this.current(revert + distance);
                this.update();
            }, this), 30);
        } else {
            this.speed(this.duration(this.current(), position, speed));
            this.current(position);
            this.update();
        }
    };
    Owl.prototype.next = function (speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
    };
    Owl.prototype.prev = function (speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
    };
    Owl.prototype.transitionEnd = function (event) {
        if (event !== undefined) {
            event.stopPropagation();
            if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                return false;
            }
        }
        this.state.inMotion = false;
        this.trigger('translated');
    };
    Owl.prototype.viewport = function () {
        var width;
        if (this.options.responsiveBaseElement !== window) {
            width = $(this.options.responsiveBaseElement).width();
        } else if (window.innerWidth) {
            width = window.innerWidth;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            width = document.documentElement.clientWidth;
        } else {
            throw'Can not detect viewport width.';
        }
        return width;
    };
    Owl.prototype.replace = function (content) {
        this.$stage.empty();
        this._items = [];
        if (content) {
            content = (content instanceof jQuery) ? content : $(content);
        }
        if (this.settings.nestedItemSelector) {
            content = content.find('.' + this.settings.nestedItemSelector);
        }
        content.filter(function () {
            return this.nodeType === 1;
        }).each($.proxy(function (index, item) {
            item = this.prepare(item);
            this.$stage.append(item);
            this._items.push(item);
            this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
        }, this));
        this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate('items');
    };
    Owl.prototype.add = function (content, position) {
        position = position === undefined ? this._items.length : this.normalize(position, true);
        this.trigger('add', {content: content, position: position});
        if (this._items.length === 0 || position === this._items.length) {
            this.$stage.append(content);
            this._items.push(content);
            this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
        } else {
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
        }
        this.invalidate('items');
        this.trigger('added', {content: content, position: position});
    };
    Owl.prototype.remove = function (position) {
        position = this.normalize(position, true);
        if (position === undefined) {
            return;
        }
        this.trigger('remove', {content: this._items[position], position: position});
        this._items[position].remove();
        this._items.splice(position, 1);
        this._mergers.splice(position, 1);
        this.invalidate('items');
        this.trigger('removed', {content: null, position: position});
    };
    Owl.prototype.addTriggerableEvents = function () {
        var handler = $.proxy(function (callback, event) {
            return $.proxy(function (e) {
                if (e.relatedTarget !== this) {
                    this.suppress([event]);
                    callback.apply(this, [].slice.call(arguments, 1));
                    this.release([event]);
                }
            }, this);
        }, this);
        $.each({
            'next': this.next,
            'prev': this.prev,
            'to': this.to,
            'destroy': this.destroy,
            'refresh': this.refresh,
            'replace': this.replace,
            'add': this.add,
            'remove': this.remove
        }, $.proxy(function (event, callback) {
            this.$element.on(event + '.owl.carousel', handler(callback, event + '.owl.carousel'));
        }, this));
    };
    Owl.prototype.watchVisibility = function () {
        if (!isElVisible(this.$element.get(0))) {
            this.$element.addClass('owl-hidden');
            window.clearInterval(this.e._checkVisibile);
            this.e._checkVisibile = window.setInterval($.proxy(checkVisible, this), 500);
        }

        function isElVisible(el) {
            return el.offsetWidth > 0 && el.offsetHeight > 0;
        }

        function checkVisible() {
            if (isElVisible(this.$element.get(0))) {
                this.$element.removeClass('owl-hidden');
                this.refresh();
                window.clearInterval(this.e._checkVisibile);
            }
        }
    };
    Owl.prototype.preloadAutoWidthImages = function (imgs) {
        var loaded, that, $el, img;
        loaded = 0;
        that = this;
        imgs.each(function (i, el) {
            $el = $(el);
            img = new Image();
            img.onload = function () {
                loaded++;
                $el.attr('src', img.src);
                $el.css('opacity', 1);
                if (loaded >= imgs.length) {
                    that.state.imagesLoaded = true;
                    that.initialize();
                }
            };
            img.src = $el.attr('src') || $el.attr('data-src') || $el.attr('data-src-retina');
        });
    };
    Owl.prototype.destroy = function () {
        if (this.$element.hasClass(this.settings.themeClass)) {
            this.$element.removeClass(this.settings.themeClass);
        }
        if (this.settings.responsive !== false) {
            $(window).off('resize.owl.carousel');
        }
        if (this.transitionEndVendor) {
            this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        }
        for (var i in this._plugins) {
            this._plugins[i].destroy();
        }
        if (this.settings.mouseDrag || this.settings.touchDrag) {
            this.$stage.off('mousedown touchstart touchcancel');
            $(document).off('.owl.dragEvents');
            this.$stage.get(0).onselectstart = function () {
            };
            this.$stage.off('dragstart', function () {
                return false
            });
        }
        this.$element.off('.owl');
        this.$stage.children('.cloned').remove();
        this.e = null;
        this.$element.removeData('owlCarousel');
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$stage.unwrap();
    };
    Owl.prototype.op = function (a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
            case'<':
                return rtl ? a > b : a < b;
            case'>':
                return rtl ? a < b : a > b;
            case'>=':
                return rtl ? a <= b : a >= b;
            case'<=':
                return rtl ? a >= b : a <= b;
            default:
                break;
        }
    };
    Owl.prototype.on = function (element, event, listener, capture) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, capture);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, listener);
        }
    };
    Owl.prototype.off = function (element, event, listener, capture) {
        if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture);
        } else if (element.detachEvent) {
            element.detachEvent('on' + event, listener);
        }
    };
    Owl.prototype.trigger = function (name, data, namespace) {
        var status = {item: {count: this._items.length, index: this.current()}},
            handler = $.camelCase($.grep(['on', name, namespace], function (v) {
                return v
            }).join('-').toLowerCase()),
            event = $.Event([name, 'owl', namespace || 'carousel'].join('.').toLowerCase(), $.extend({relatedTarget: this}, status, data));
        if (!this._supress[name]) {
            $.each(this._plugins, function (name, plugin) {
                if (plugin.onTrigger) {
                    plugin.onTrigger(event);
                }
            });
            this.$element.trigger(event);
            if (this.settings && typeof this.settings[handler] === 'function') {
                this.settings[handler].apply(this, event);
            }
        }
        return event;
    };
    Owl.prototype.suppress = function (events) {
        $.each(events, $.proxy(function (index, event) {
            this._supress[event] = true;
        }, this));
    }
    Owl.prototype.release = function (events) {
        $.each(events, $.proxy(function (index, event) {
            delete this._supress[event];
        }, this));
    }
    Owl.prototype.browserSupport = function () {
        this.support3d = isPerspective();
        if (this.support3d) {
            this.transformVendor = isTransform();
            var endVendors = ['transitionend', 'webkitTransitionEnd', 'transitionend', 'oTransitionEnd'];
            this.transitionEndVendor = endVendors[isTransition()];
            this.vendorName = this.transformVendor.replace(/Transform/i, '');
            this.vendorName = this.vendorName !== '' ? '-' + this.vendorName.toLowerCase() + '-' : '';
        }
        this.state.orientation = window.orientation;
    };

    function getTouches(event) {
        if (event.touches !== undefined) {
            return {x: event.touches[0].pageX, y: event.touches[0].pageY};
        }
        if (event.touches === undefined) {
            if (event.pageX !== undefined) {
                return {x: event.pageX, y: event.pageY};
            }
            if (event.pageX === undefined) {
                return {x: event.clientX, y: event.clientY};
            }
        }
    }

    function isStyleSupported(array) {
        var p, s, fake = document.createElement('div'), list = array;
        for (p in list) {
            s = list[p];
            if (typeof fake.style[s] !== 'undefined') {
                fake = null;
                return [s, p];
            }
        }
        return [false];
    }

    function isTransition() {
        return isStyleSupported(['transition', 'WebkitTransition', 'MozTransition', 'OTransition'])[1];
    }

    function isTransform() {
        return isStyleSupported(['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform'])[0];
    }

    function isPerspective() {
        return isStyleSupported(['perspective', 'webkitPerspective', 'MozPerspective', 'OPerspective', 'MsPerspective'])[0];
    }

    function isTouchSupport() {
        return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);
    }

    function isTouchSupportIE() {
        return window.navigator.msPointerEnabled;
    }

    $.fn.owlCarousel = function (options) {
        return this.each(function () {
            if (!$(this).data('owlCarousel')) {
                $(this).data('owlCarousel', new Owl(this, options));
            }
        });
    };
    $.fn.owlCarousel.Constructor = Owl;
})(window.Zepto || window.jQuery, window, document);
;(function ($, window, document, undefined) {
    var Lazy = function (carousel) {
        this._core = carousel;
        this._loaded = [];
        this._handlers = {
            'initialized.owl.carousel change.owl.carousel': $.proxy(function (e) {
                if (!e.namespace) {
                    return;
                }
                if (!this._core.settings || !this._core.settings.lazyLoad) {
                    return;
                }
                if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
                    var settings = this._core.settings,
                        n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
                        i = ((settings.center && n * -1) || 0),
                        position = ((e.property && e.property.value) || this._core.current()) + i,
                        clones = this._core.clones().length, load = $.proxy(function (i, v) {
                            this.load(v)
                        }, this);
                    while (i++ < n) {
                        this.load(clones / 2 + this._core.relative(position));
                        clones && $.each(this._core.clones(this._core.relative(position++)), load);
                    }
                }
            }, this)
        };
        this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
    }
    Lazy.Defaults = {lazyLoad: false}
    Lazy.prototype.load = function (position) {
        var $item = this._core.$stage.children().eq(position), $elements = $item && $item.find('.owl-lazy');
        if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
            return;
        }
        $elements.each($.proxy(function (index, element) {
            var $element = $(element), image,
                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');
            this._core.trigger('load', {element: $element, url: url}, 'lazy');
            if ($element.is('img')) {
                $element.one('load.owl.lazy', $.proxy(function () {
                    $element.css('opacity', 1);
                    this._core.trigger('loaded', {element: $element, url: url}, 'lazy');
                }, this)).attr('src', url);
            } else {
                image = new Image();
                image.onload = $.proxy(function () {
                    $element.css({'background-image': 'url(' + url + ')', 'opacity': '1'});
                    this._core.trigger('loaded', {element: $element, url: url}, 'lazy');
                }, this);
                image.src = url;
            }
        }, this));
        this._loaded.push($item.get(0));
    }
    Lazy.prototype.destroy = function () {
        var handler, property;
        for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    }
    $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
})(window.Zepto || window.jQuery, window, document);
;(function ($, window, document, undefined) {
    var AutoHeight = function (carousel) {
        this._core = carousel;
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function () {
                if (this._core.settings.autoHeight) {
                    this.update();
                }
            }, this), 'changed.owl.carousel': $.proxy(function (e) {
                if (this._core.settings.autoHeight && e.property.name == 'position') {
                    this.update();
                }
            }, this), 'loaded.owl.lazy': $.proxy(function (e) {
                if (this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current())) {
                    this.update();
                }
            }, this)
        };
        this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
    };
    AutoHeight.Defaults = {autoHeight: false, autoHeightClass: 'owl-height'};
    AutoHeight.prototype.update = function () {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass);
    };
    AutoHeight.prototype.destroy = function () {
        var handler, property;
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
})(window.Zepto || window.jQuery, window, document);
;(function ($, window, document, undefined) {
    var Video = function (carousel) {
        this._core = carousel;
        this._videos = {};
        this._playing = null;
        this._fullscreen = false;
        this._handlers = {
            'resize.owl.carousel': $.proxy(function (e) {
                if (this._core.settings.video && !this.isInFullScreen()) {
                    e.preventDefault();
                }
            }, this), 'refresh.owl.carousel changed.owl.carousel': $.proxy(function (e) {
                if (this._playing) {
                    this.stop();
                }
            }, this), 'prepared.owl.carousel': $.proxy(function (e) {
                var $element = $(e.content).find('.owl-video');
                if ($element.length) {
                    $element.css('display', 'none');
                    this.fetch($element, $(e.content));
                }
            }, this)
        };
        this._core.options = $.extend({}, Video.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function (e) {
            this.play(e);
        }, this));
    };
    Video.Defaults = {video: false, videoHeight: false, videoWidth: false};
    Video.prototype.fetch = function (target, item) {
        var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
            id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
            width = target.attr('data-width') || this._core.settings.videoWidth,
            height = target.attr('data-height') || this._core.settings.videoHeight, url = target.attr('href');
        if (url) {
            id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
            if (id[3].indexOf('youtu') > -1) {
                type = 'youtube';
            } else if (id[3].indexOf('vimeo') > -1) {
                type = 'vimeo';
            } else {
                throw new Error('Video URL not supported.');
            }
            id = id[6];
        } else {
            throw new Error('Missing video URL.');
        }
        this._videos[url] = {type: type, id: id, width: width, height: height};
        item.attr('data-video', url);
        this.thumbnail(target, this._videos[url]);
    };
    Video.prototype.thumbnail = function (target, video) {
        var tnLink, icon, path,
            dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
            customTn = target.find('img'), srcType = 'src', lazyClass = '', settings = this._core.settings,
            create = function (path) {
                icon = '<div class="owl-video-play-icon"></div>';
                if (settings.lazyLoad) {
                    tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
                } else {
                    tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
                }
                target.after(tnLink);
                target.after(icon);
            };
        target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');
        if (this._core.settings.lazyLoad) {
            srcType = 'data-src';
            lazyClass = 'owl-lazy';
        }
        if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return false;
        }
        if (video.type === 'youtube') {
            path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
            create(path);
        } else if (video.type === 'vimeo') {
            $.ajax({
                type: 'GET',
                url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function (data) {
                    path = data[0].thumbnail_large;
                    create(path);
                }
            });
        }
    };
    Video.prototype.stop = function () {
        this._core.trigger('stop', null, 'video');
        this._playing.find('.owl-video-frame').remove();
        this._playing.removeClass('owl-video-playing');
        this._playing = null;
    };
    Video.prototype.play = function (ev) {
        this._core.trigger('play', null, 'video');
        if (this._playing) {
            this.stop();
        }
        var target = $(ev.target || ev.srcElement), item = target.closest('.' + this._core.settings.itemClass),
            video = this._videos[item.attr('data-video')], width = video.width || '100%',
            height = video.height || this._core.$stage.height(), html, wrap;
        if (video.type === 'youtube') {
            html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/'
                + video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
        } else if (video.type === 'vimeo') {
            html = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width
                + '" height="' + height
                + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        }
        item.addClass('owl-video-playing');
        this._playing = item;
        wrap = $('<div style="height:' + height + 'px; width:' + width + 'px" class="owl-video-frame">'
            + html + '</div>');
        target.after(wrap);
    };
    Video.prototype.isInFullScreen = function () {
        var element = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
        if (element && $(element).parent().hasClass('owl-video-frame')) {
            this._core.speed(0);
            this._fullscreen = true;
        }
        if (element && this._fullscreen && this._playing) {
            return false;
        }
        if (this._fullscreen) {
            this._fullscreen = false;
            return false;
        }
        if (this._playing) {
            if (this._core.state.orientation !== window.orientation) {
                this._core.state.orientation = window.orientation;
                return false;
            }
        }
        return true;
    };
    Video.prototype.destroy = function () {
        var handler, property;
        this._core.$element.off('click.owl.video');
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Video = Video;
})(window.Zepto || window.jQuery, window, document);
;(function ($, window, document, undefined) {
    var Animate = function (scope) {
        this.core = scope;
        this.core.options = $.extend({}, Animate.Defaults, this.core.options);
        this.swapping = true;
        this.previous = undefined;
        this.next = undefined;
        this.handlers = {
            'change.owl.carousel': $.proxy(function (e) {
                if (e.property.name == 'position') {
                    this.previous = this.core.current();
                    this.next = e.property.value;
                }
            }, this), 'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function (e) {
                this.swapping = e.type == 'translated';
            }, this), 'translate.owl.carousel': $.proxy(function (e) {
                if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                    this.swap();
                }
            }, this)
        };
        this.core.$element.on(this.handlers);
    };
    Animate.Defaults = {animateOut: false, animateIn: false};
    Animate.prototype.swap = function () {
        if (this.core.settings.items !== 1 || !this.core.support3d) {
            return;
        }
        this.core.speed(0);
        var left, clear = $.proxy(this.clear, this), previous = this.core.$stage.children().eq(this.previous),
            next = this.core.$stage.children().eq(this.next), incoming = this.core.settings.animateIn,
            outgoing = this.core.settings.animateOut;
        if (this.core.current() === this.previous) {
            return;
        }
        if (outgoing) {
            left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
            previous.css({'left': left + 'px'}).addClass('animated owl-animated-out').addClass(outgoing).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
        }
        if (incoming) {
            next.addClass('animated owl-animated-in').addClass(incoming).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
        }
    };
    Animate.prototype.clear = function (e) {
        $(e.target).css({'left': ''}).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
        this.core.transitionEnd();
    }
    Animate.prototype.destroy = function () {
        var handler, property;
        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
})(window.Zepto || window.jQuery, window, document);
;(function ($, window, document, undefined) {
    var Autoplay = function (scope) {
        this.core = scope;
        this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);
        this.handlers = {
            'translated.owl.carousel refreshed.owl.carousel': $.proxy(function () {
                this.autoplay();
            }, this), 'play.owl.autoplay': $.proxy(function (e, t, s) {
                this.play(t, s);
            }, this), 'stop.owl.autoplay': $.proxy(function () {
                this.stop();
            }, this), 'mouseover.owl.autoplay': $.proxy(function () {
                if (this.core.settings.autoplayHoverPause) {
                    this.pause();
                }
            }, this), 'mouseleave.owl.autoplay': $.proxy(function () {
                if (this.core.settings.autoplayHoverPause) {
                    this.autoplay();
                }
            }, this)
        };
        this.core.$element.on(this.handlers);
    };
    Autoplay.Defaults = {autoplay: false, autoplayTimeout: 5000, autoplayHoverPause: false, autoplaySpeed: false};
    Autoplay.prototype.autoplay = function () {
        if (this.core.settings.autoplay && !this.core.state.videoPlay) {
            window.clearInterval(this.interval);
            this.interval = window.setInterval($.proxy(function () {
                this.play();
            }, this), this.core.settings.autoplayTimeout);
        } else {
            window.clearInterval(this.interval);
        }
    };
    Autoplay.prototype.play = function (timeout, speed) {
        if (document.hidden === true) {
            return;
        }
        if (this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion) {
            return;
        }
        if (this.core.settings.autoplay === false) {
            window.clearInterval(this.interval);
            return;
        }
        this.core.next(this.core.settings.autoplaySpeed);
    };
    Autoplay.prototype.stop = function () {
        window.clearInterval(this.interval);
    };
    Autoplay.prototype.pause = function () {
        window.clearInterval(this.interval);
    };
    Autoplay.prototype.destroy = function () {
        var handler, property;
        window.clearInterval(this.interval);
        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
})(window.Zepto || window.jQuery, window, document);
;(function ($, window, document, undefined) {
    'use strict';
    var Navigation = function (carousel) {
        this._core = carousel;
        this._initialized = false;
        this._pages = [];
        this._controls = {};
        this._templates = [];
        this.$element = this._core.$element;
        this._overrides = {next: this._core.next, prev: this._core.prev, to: this._core.to};
        this._handlers = {
            'prepared.owl.carousel': $.proxy(function (e) {
                if (this._core.settings.dotsData) {
                    this._templates.push($(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
                }
            }, this), 'add.owl.carousel': $.proxy(function (e) {
                if (this._core.settings.dotsData) {
                    this._templates.splice(e.position, 0, $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
                }
            }, this), 'remove.owl.carousel prepared.owl.carousel': $.proxy(function (e) {
                if (this._core.settings.dotsData) {
                    this._templates.splice(e.position, 1);
                }
            }, this), 'change.owl.carousel': $.proxy(function (e) {
                if (e.property.name == 'position') {
                    if (!this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                        var current = this._core.current(), maximum = this._core.maximum(),
                            minimum = this._core.minimum();
                        e.data = e.property.value > maximum ? current >= maximum ? minimum : maximum : e.property.value < minimum ? maximum : e.property.value;
                    }
                }
            }, this), 'changed.owl.carousel': $.proxy(function (e) {
                if (e.property.name == 'position') {
                    this.draw();
                }
            }, this), 'refreshed.owl.carousel': $.proxy(function () {
                if (!this._initialized) {
                    this.initialize();
                    this._initialized = true;
                }
                this._core.trigger('refresh', null, 'navigation');
                this.update();
                this.draw();
                this._core.trigger('refreshed', null, 'navigation');
            }, this)
        };
        this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
        this.$element.on(this._handlers);
    }
    Navigation.Defaults = {
        nav: false,
        navRewind: true,
        navText: ['prev', 'next'],
        navSpeed: false,
        navElement: 'div',
        navContainer: false,
        navContainerClass: 'owl-nav',
        navClass: ['owl-prev', 'owl-next'],
        slideBy: 1,
        dotClass: 'owl-dot',
        dotsClass: 'owl-dots',
        dots: true,
        dotsEach: false,
        dotData: false,
        dotsSpeed: false,
        dotsContainer: false,
        controlsClass: 'owl-controls'
    }
    Navigation.prototype.initialize = function () {
        var $container, override, options = this._core.settings;
        if (!options.dotsData) {
            this._templates = [$('<div>').addClass(options.dotClass).append($('<span>')).prop('outerHTML')];
        }
        if (!options.navContainer || !options.dotsContainer) {
            this._controls.$container = $('<div>').addClass(options.controlsClass).appendTo(this.$element);
        }
        this._controls.$indicators = options.dotsContainer ? $(options.dotsContainer) : $('<div>').hide().addClass(options.dotsClass).appendTo(this._controls.$container);
        this._controls.$indicators.on('click', 'div', $.proxy(function (e) {
            var index = $(e.target).parent().is(this._controls.$indicators) ? $(e.target).index() : $(e.target).parent().index();
            e.preventDefault();
            this.to(index, options.dotsSpeed);
        }, this));
        $container = options.navContainer ? $(options.navContainer) : $('<div>').addClass(options.navContainerClass).prependTo(this._controls.$container);
        this._controls.$next = $('<' + options.navElement + '>');
        this._controls.$previous = this._controls.$next.clone();
        this._controls.$previous.addClass(options.navClass[0]).html(options.navText[0]).hide().prependTo($container).on('click', $.proxy(function (e) {
            this.prev(options.navSpeed);
        }, this));
        this._controls.$next.addClass(options.navClass[1]).html(options.navText[1]).hide().appendTo($container).on('click', $.proxy(function (e) {
            this.next(options.navSpeed);
        }, this));
        for (override in this._overrides) {
            this._core[override] = $.proxy(this[override], this);
        }
    }
    Navigation.prototype.destroy = function () {
        var handler, control, property, override;
        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (control in this._controls) {
            this._controls[control].remove();
        }
        for (override in this.overides) {
            this._core[override] = this._overrides[override];
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    }
    Navigation.prototype.update = function () {
        var i, j, k, options = this._core.settings, lower = this._core.clones().length / 2,
            upper = lower + this._core.items().length,
            size = options.center || options.autoWidth || options.dotData ? 1 : options.dotsEach || options.items;
        if (options.slideBy !== 'page') {
            options.slideBy = Math.min(options.slideBy, options.items);
        }
        if (options.dots || options.slideBy == 'page') {
            this._pages = [];
            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    this._pages.push({start: i - lower, end: i - lower + size - 1});
                    j = 0, ++k;
                }
                j += this._core.mergers(this._core.relative(i));
            }
        }
    }
    Navigation.prototype.draw = function () {
        var difference, i, html = '', options = this._core.settings, $items = this._core.$stage.children(),
            index = this._core.relative(this._core.current());
        if (options.nav && !options.loop && !options.navRewind) {
            this._controls.$previous.toggleClass('disabled', index <= 0);
            this._controls.$next.toggleClass('disabled', index >= this._core.maximum());
        }
        this._controls.$previous.toggle(options.nav);
        this._controls.$next.toggle(options.nav);
        if (options.dots) {
            difference = this._pages.length - this._controls.$indicators.children().length;
            if (options.dotData && difference !== 0) {
                for (i = 0; i < this._controls.$indicators.children().length; i++) {
                    html += this._templates[this._core.relative(i)];
                }
                this._controls.$indicators.html(html);
            } else if (difference > 0) {
                html = new Array(difference + 1).join(this._templates[0]);
                this._controls.$indicators.append(html);
            } else if (difference < 0) {
                this._controls.$indicators.children().slice(difference).remove();
            }
            this._controls.$indicators.find('.active').removeClass('active');
            this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass('active');
        }
        this._controls.$indicators.toggle(options.dots);
    }
    Navigation.prototype.onTrigger = function (event) {
        var settings = this._core.settings;
        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotData ? 1 : settings.dotsEach || settings.items)
        };
    }
    Navigation.prototype.current = function () {
        var index = this._core.relative(this._core.current());
        return $.grep(this._pages, function (o) {
            return o.start <= index && o.end >= index;
        }).pop();
    }
    Navigation.prototype.getPosition = function (successor) {
        var position, length, options = this._core.settings;
        if (options.slideBy == 'page') {
            position = $.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[((position % length) + length) % length].start;
        } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor ? position += options.slideBy : position -= options.slideBy;
        }
        return position;
    }
    Navigation.prototype.next = function (speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    }
    Navigation.prototype.prev = function (speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    }
    Navigation.prototype.to = function (position, speed, standard) {
        var length;
        if (!standard) {
            length = this._pages.length;
            $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
        } else {
            $.proxy(this._overrides.to, this._core)(position, speed);
        }
    }
    $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
})(window.Zepto || window.jQuery, window, document);
;(function ($, window, document, undefined) {
    'use strict';
    var Hash = function (carousel) {
        this._core = carousel;
        this._hashes = {};
        this.$element = this._core.$element;
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function () {
                if (this._core.settings.startPosition == 'URLHash') {
                    $(window).trigger('hashchange.owl.navigation');
                }
            }, this), 'prepared.owl.carousel': $.proxy(function (e) {
                var hash = $(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');
                this._hashes[hash] = e.content;
            }, this)
        };
        this._core.options = $.extend({}, Hash.Defaults, this._core.options);
        this.$element.on(this._handlers);
        $(window).on('hashchange.owl.navigation', $.proxy(function () {
            var hash = window.location.hash.substring(1), items = this._core.$stage.children(),
                position = this._hashes[hash] && items.index(this._hashes[hash]) || 0;
            if (!hash) {
                return false;
            }
            this._core.to(position, false, true);
        }, this));
    }
    Hash.Defaults = {URLhashListener: false}
    Hash.prototype.destroy = function () {
        var handler, property;
        $(window).off('hashchange.owl.navigation');
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    }
    $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
})(window.Zepto || window.jQuery, window, document);
;/* jQuery elevateZoom 3.0.8 - Demo's and documentation: - www.elevateweb.co.uk/image-zoom - Copyright (c) 2013 Andrew Eades - www.elevateweb.co.uk - Dual licensed under the LGPL licenses. - http://en.wikipedia.org/wiki/MIT_License - http://en.wikipedia.org/wiki/GNU_General_Public_License */
"function" !== typeof Object.create && (Object.create = function (d) {
    function h() {
    }

    h.prototype = d;
    return new h
});
(function (d, h, l, m) {
    var k = {
        init: function (b, a) {
            var c = this;
            c.elem = a;
            c.$elem = d(a);
            c.imageSrc = c.$elem.data("zoom-image") ? c.$elem.data("zoom-image") : c.$elem.attr("src");
            c.options = d.extend({}, d.fn.elevateZoom.options, b);
            c.options.tint && (c.options.lensColour = "none", c.options.lensOpacity = "1");
            "inner" == c.options.zoomType && (c.options.showLens = !1);
            c.$elem.parent().removeAttr("title").removeAttr("alt");
            c.zoomImage = c.imageSrc;
            c.refresh(1);
            d("#" + c.options.gallery + " a").click(function (a) {
                c.options.galleryActiveClass &&
                (d("#" + c.options.gallery + " a").removeClass(c.options.galleryActiveClass), d(this).addClass(c.options.galleryActiveClass));
                a.preventDefault();
                d(this).data("zoom-image") ? c.zoomImagePre = d(this).data("zoom-image") : c.zoomImagePre = d(this).data("image");
                c.swaptheimage(d(this).data("image"), c.zoomImagePre);
                return !1
            })
        }, refresh: function (b) {
            var a = this;
            setTimeout(function () {
                a.fetch(a.imageSrc)
            }, b || a.options.refresh)
        }, fetch: function (b) {
            var a = this, c = new Image;
            c.onload = function () {
                a.largeWidth = c.width;
                a.largeHeight =
                    c.height;
                a.startZoom();
                a.currentImage = a.imageSrc;
                a.options.onZoomedImageLoaded(a.$elem)
            };
            c.src = b
        }, startZoom: function () {
            var b = this;
            b.nzWidth = b.$elem.width();
            b.nzHeight = b.$elem.height();
            b.isWindowActive = !1;
            b.isLensActive = !1;
            b.isTintActive = !1;
            b.overWindow = !1;
            b.options.imageCrossfade && (b.zoomWrap = b.$elem.wrap('<div style="height:' + b.nzHeight + "px;width:" + b.nzWidth + 'px;" class="zoomWrapper" />'), b.$elem.css("position", "absolute"));
            b.zoomLock = 1;
            b.scrollingLock = !1;
            b.changeBgSize = !1;
            b.currentZoomLevel = b.options.zoomLevel;
            b.nzOffset = b.$elem.offset();
            b.widthRatio = b.largeWidth / b.currentZoomLevel / b.nzWidth;
            b.heightRatio = b.largeHeight / b.currentZoomLevel / b.nzHeight;
            "window" == b.options.zoomType && (b.zoomWindowStyle = "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " + String(b.options.zoomWindowBgColour) + ";width: " + String(b.options.zoomWindowWidth) + "px;height: " + String(b.options.zoomWindowHeight) + "px;float: left;background-size: " + b.largeWidth / b.currentZoomLevel + "px " + b.largeHeight / b.currentZoomLevel +
                "px;display: none;z-index:100;border: " + String(b.options.borderSize) + "px solid " + b.options.borderColour + ";background-repeat: no-repeat;position: absolute;");
            if ("inner" == b.options.zoomType) {
                var a = b.$elem.css("border-left-width");
                b.zoomWindowStyle = "overflow: hidden;margin-left: " + String(a) + ";margin-top: " + String(a) + ";background-position: 0px 0px;width: " + String(b.nzWidth) + "px;height: " + String(b.nzHeight) + "px;float: left;display: none;cursor:" + b.options.cursor + ";px solid " + b.options.borderColour + ";background-repeat: no-repeat;position: absolute;"
            }
            "window" ==
            b.options.zoomType && (lensHeight = b.nzHeight < b.options.zoomWindowWidth / b.widthRatio ? b.nzHeight : String(b.options.zoomWindowHeight / b.heightRatio), lensWidth = b.largeWidth < b.options.zoomWindowWidth ? b.nzWidth : b.options.zoomWindowWidth / b.widthRatio, b.lensStyle = "background-position: 0px 0px;width: " + String(b.options.zoomWindowWidth / b.widthRatio) + "px;height: " + String(b.options.zoomWindowHeight / b.heightRatio) + "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" +
                b.options.lensOpacity + ";filter: alpha(opacity = " + 100 * b.options.lensOpacity + "); zoom:1;width:" + lensWidth + "px;height:" + lensHeight + "px;background-color:" + b.options.lensColour + ";cursor:" + b.options.cursor + ";border: " + b.options.lensBorderSize + "px solid " + b.options.lensBorderColour + ";background-repeat: no-repeat;position: absolute;");
            b.tintStyle = "display: block;position: absolute;background-color: " + b.options.tintColour + ";filter:alpha(opacity=0);opacity: 0;width: " + b.nzWidth + "px;height: " + b.nzHeight + "px;";
            b.lensRound = "";
            "lens" == b.options.zoomType && (b.lensStyle = "background-position: 0px 0px;float: left;display: none;border: " + String(b.options.borderSize) + "px solid " + b.options.borderColour + ";width:" + String(b.options.lensSize) + "px;height:" + String(b.options.lensSize) + "px;background-repeat: no-repeat;position: absolute;");
            "round" == b.options.lensShape && (b.lensRound = "border-top-left-radius: " + String(b.options.lensSize / 2 + b.options.borderSize) + "px;border-top-right-radius: " + String(b.options.lensSize / 2 + b.options.borderSize) +
                "px;border-bottom-left-radius: " + String(b.options.lensSize / 2 + b.options.borderSize) + "px;border-bottom-right-radius: " + String(b.options.lensSize / 2 + b.options.borderSize) + "px;");
            b.zoomContainer = d('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' + b.nzOffset.left + "px;top:" + b.nzOffset.top + "px;height:" + b.nzHeight + "px;width:" + b.nzWidth + 'px;"></div>');
            d("body").append(b.zoomContainer);
            b.options.containLensZoom && "lens" == b.options.zoomType && b.zoomContainer.css("overflow",
                "hidden");
            "inner" != b.options.zoomType && (b.zoomLens = d("<div class='zoomLens' style='" + b.lensStyle + b.lensRound + "'>&nbsp;</div>").appendTo(b.zoomContainer).click(function () {
                b.$elem.trigger("click")
            }), b.options.tint && (b.tintContainer = d("<div/>").addClass("tintContainer"), b.zoomTint = d("<div class='zoomTint' style='" + b.tintStyle + "'></div>"), b.zoomLens.wrap(b.tintContainer), b.zoomTintcss = b.zoomLens.after(b.zoomTint), b.zoomTintImage = d('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' +
                b.nzWidth + "px; height: " + b.nzHeight + 'px;" src="' + b.imageSrc + '">').appendTo(b.zoomLens).click(function () {
                b.$elem.trigger("click")
            })));
            isNaN(b.options.zoomWindowPosition) ? b.zoomWindow = d("<div style='z-index:999;left:" + b.windowOffsetLeft + "px;top:" + b.windowOffsetTop + "px;" + b.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function () {
                b.$elem.trigger("click")
            }) : b.zoomWindow = d("<div style='z-index:999;left:" + b.windowOffsetLeft + "px;top:" + b.windowOffsetTop + "px;" + b.zoomWindowStyle +
                "' class='zoomWindow'>&nbsp;</div>").appendTo(b.zoomContainer).click(function () {
                b.$elem.trigger("click")
            });
            b.zoomWindowContainer = d("<div/>").addClass("zoomWindowContainer").css("width", b.options.zoomWindowWidth);
            b.zoomWindow.wrap(b.zoomWindowContainer);
            "lens" == b.options.zoomType && b.zoomLens.css({backgroundImage: "url('" + b.imageSrc + "')"});
            "window" == b.options.zoomType && b.zoomWindow.css({backgroundImage: "url('" + b.imageSrc + "')"});
            "inner" == b.options.zoomType && b.zoomWindow.css({
                backgroundImage: "url('" + b.imageSrc +
                    "')"
            });
            b.$elem.bind("touchmove", function (a) {
                a.preventDefault();
                b.setPosition(a.originalEvent.touches[0] || a.originalEvent.changedTouches[0])
            });
            b.zoomContainer.bind("touchmove", function (a) {
                "inner" == b.options.zoomType && b.showHideWindow("show");
                a.preventDefault();
                b.setPosition(a.originalEvent.touches[0] || a.originalEvent.changedTouches[0])
            });
            b.zoomContainer.bind("touchend", function (a) {
                b.showHideWindow("hide");
                b.options.showLens && b.showHideLens("hide");
                b.options.tint && "inner" != b.options.zoomType && b.showHideTint("hide")
            });
            b.$elem.bind("touchend", function (a) {
                b.showHideWindow("hide");
                b.options.showLens && b.showHideLens("hide");
                b.options.tint && "inner" != b.options.zoomType && b.showHideTint("hide")
            });
            b.options.showLens && (b.zoomLens.bind("touchmove", function (a) {
                a.preventDefault();
                b.setPosition(a.originalEvent.touches[0] || a.originalEvent.changedTouches[0])
            }), b.zoomLens.bind("touchend", function (a) {
                b.showHideWindow("hide");
                b.options.showLens && b.showHideLens("hide");
                b.options.tint && "inner" != b.options.zoomType && b.showHideTint("hide")
            }));
            b.$elem.bind("mousemove", function (a) {
                !1 == b.overWindow && b.setElements("show");
                if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), b.currentLoc = a;
                b.lastX = a.clientX;
                b.lastY = a.clientY
            });
            b.zoomContainer.bind("mousemove", function (a) {
                !1 == b.overWindow && b.setElements("show");
                if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), b.currentLoc = a;
                b.lastX = a.clientX;
                b.lastY = a.clientY
            });
            "inner" != b.options.zoomType && b.zoomLens.bind("mousemove", function (a) {
                if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a),
                    b.currentLoc = a;
                b.lastX = a.clientX;
                b.lastY = a.clientY
            });
            b.options.tint && "inner" != b.options.zoomType && b.zoomTint.bind("mousemove", function (a) {
                if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), b.currentLoc = a;
                b.lastX = a.clientX;
                b.lastY = a.clientY
            });
            "inner" == b.options.zoomType && b.zoomWindow.bind("mousemove", function (a) {
                if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), b.currentLoc = a;
                b.lastX = a.clientX;
                b.lastY = a.clientY
            });
            b.zoomContainer.add(b.$elem).mouseenter(function () {
                !1 == b.overWindow &&
                b.setElements("show")
            }).mouseleave(function () {
                b.scrollLock || b.setElements("hide")
            });
            "inner" != b.options.zoomType && b.zoomWindow.mouseenter(function () {
                b.overWindow = !0;
                b.setElements("hide")
            }).mouseleave(function () {
                b.overWindow = !1
            });
            b.minZoomLevel = b.options.minZoomLevel ? b.options.minZoomLevel : 2 * b.options.scrollZoomIncrement;
            b.options.scrollZoom && b.zoomContainer.add(b.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (a) {
                b.scrollLock = !0;
                clearTimeout(d.data(this, "timer"));
                d.data(this, "timer",
                    setTimeout(function () {
                        b.scrollLock = !1
                    }, 250));
                var e = a.originalEvent.wheelDelta || -1 * a.originalEvent.detail;
                a.stopImmediatePropagation();
                a.stopPropagation();
                a.preventDefault();
                0 < e / 120 ? b.currentZoomLevel >= b.minZoomLevel && b.changeZoomLevel(b.currentZoomLevel - b.options.scrollZoomIncrement) : b.options.maxZoomLevel ? b.currentZoomLevel <= b.options.maxZoomLevel && b.changeZoomLevel(parseFloat(b.currentZoomLevel) + b.options.scrollZoomIncrement) : b.changeZoomLevel(parseFloat(b.currentZoomLevel) + b.options.scrollZoomIncrement);
                return !1
            })
        }, setElements: function (b) {
            if (!this.options.zoomEnabled) return !1;
            "show" == b && this.isWindowSet && ("inner" == this.options.zoomType && this.showHideWindow("show"), "window" == this.options.zoomType && this.showHideWindow("show"), this.options.showLens && this.showHideLens("show"), this.options.tint && "inner" != this.options.zoomType && this.showHideTint("show"));
            "hide" == b && ("window" == this.options.zoomType && this.showHideWindow("hide"), this.options.tint || this.showHideWindow("hide"), this.options.showLens && this.showHideLens("hide"),
            this.options.tint && this.showHideTint("hide"))
        }, setPosition: function (b) {
            if (!this.options.zoomEnabled) return !1;
            this.nzHeight = this.$elem.height();
            this.nzWidth = this.$elem.width();
            this.nzOffset = this.$elem.offset();
            this.options.tint && "inner" != this.options.zoomType && (this.zoomTint.css({top: 0}), this.zoomTint.css({left: 0}));
            this.options.responsive && !this.options.scrollZoom && this.options.showLens && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight /
                this.heightRatio), lensWidth = this.largeWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.widthRatio = this.largeWidth / this.nzWidth, this.heightRatio = this.largeHeight / this.nzHeight, "lens" != this.options.zoomType && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.options.zoomWindowWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth /
                this.widthRatio, this.zoomLens.css("width", lensWidth), this.zoomLens.css("height", lensHeight), this.options.tint && (this.zoomTintImage.css("width", this.nzWidth), this.zoomTintImage.css("height", this.nzHeight))), "lens" == this.options.zoomType && this.zoomLens.css({
                width: String(this.options.lensSize) + "px",
                height: String(this.options.lensSize) + "px"
            }));
            this.zoomContainer.css({top: this.nzOffset.top});
            this.zoomContainer.css({left: this.nzOffset.left});
            this.mouseLeft = parseInt(b.pageX - this.nzOffset.left);
            this.mouseTop =
                parseInt(b.pageY - this.nzOffset.top);
            "window" == this.options.zoomType && (this.Etoppos = this.mouseTop < this.zoomLens.height() / 2, this.Eboppos = this.mouseTop > this.nzHeight - this.zoomLens.height() / 2 - 2 * this.options.lensBorderSize, this.Eloppos = this.mouseLeft < 0 + this.zoomLens.width() / 2, this.Eroppos = this.mouseLeft > this.nzWidth - this.zoomLens.width() / 2 - 2 * this.options.lensBorderSize);
            "inner" == this.options.zoomType && (this.Etoppos = this.mouseTop < this.nzHeight / 2 / this.heightRatio, this.Eboppos = this.mouseTop > this.nzHeight -
                this.nzHeight / 2 / this.heightRatio, this.Eloppos = this.mouseLeft < 0 + this.nzWidth / 2 / this.widthRatio, this.Eroppos = this.mouseLeft > this.nzWidth - this.nzWidth / 2 / this.widthRatio - 2 * this.options.lensBorderSize);
            0 >= this.mouseLeft || 0 > this.mouseTop || this.mouseLeft > this.nzWidth || this.mouseTop > this.nzHeight ? this.setElements("hide") : (this.options.showLens && (this.lensLeftPos = String(this.mouseLeft - this.zoomLens.width() / 2), this.lensTopPos = String(this.mouseTop - this.zoomLens.height() / 2)), this.Etoppos && (this.lensTopPos = 0),
            this.Eloppos && (this.tintpos = this.lensLeftPos = this.windowLeftPos = 0), "window" == this.options.zoomType && (this.Eboppos && (this.lensTopPos = Math.max(this.nzHeight - this.zoomLens.height() - 2 * this.options.lensBorderSize, 0)), this.Eroppos && (this.lensLeftPos = this.nzWidth - this.zoomLens.width() - 2 * this.options.lensBorderSize)), "inner" == this.options.zoomType && (this.Eboppos && (this.lensTopPos = Math.max(this.nzHeight - 2 * this.options.lensBorderSize, 0)), this.Eroppos && (this.lensLeftPos = this.nzWidth - this.nzWidth - 2 * this.options.lensBorderSize)),
            "lens" == this.options.zoomType && (this.windowLeftPos = String(-1 * ((b.pageX - this.nzOffset.left) * this.widthRatio - this.zoomLens.width() / 2)), this.windowTopPos = String(-1 * ((b.pageY - this.nzOffset.top) * this.heightRatio - this.zoomLens.height() / 2)), this.zoomLens.css({backgroundPosition: this.windowLeftPos + "px " + this.windowTopPos + "px"}), this.changeBgSize && (this.nzHeight > this.nzWidth ? ("lens" == this.options.zoomType && this.zoomLens.css({
                "background-size": this.largeWidth / this.newvalueheight + "px " + this.largeHeight / this.newvalueheight +
                    "px"
            }), this.zoomWindow.css({"background-size": this.largeWidth / this.newvalueheight + "px " + this.largeHeight / this.newvalueheight + "px"})) : ("lens" == this.options.zoomType && this.zoomLens.css({"background-size": this.largeWidth / this.newvaluewidth + "px " + this.largeHeight / this.newvaluewidth + "px"}), this.zoomWindow.css({"background-size": this.largeWidth / this.newvaluewidth + "px " + this.largeHeight / this.newvaluewidth + "px"})), this.changeBgSize = !1), this.setWindowPostition(b)), this.options.tint && "inner" != this.options.zoomType &&
            this.setTintPosition(b), "window" == this.options.zoomType && this.setWindowPostition(b), "inner" == this.options.zoomType && this.setWindowPostition(b), this.options.showLens && (this.fullwidth && "lens" != this.options.zoomType && (this.lensLeftPos = 0), this.zoomLens.css({
                left: this.lensLeftPos + "px",
                top: this.lensTopPos + "px"
            })))
        }, showHideWindow: function (b) {
            "show" != b || this.isWindowActive || (this.options.zoomWindowFadeIn ? this.zoomWindow.stop(!0, !0, !1).fadeIn(this.options.zoomWindowFadeIn) : this.zoomWindow.show(), this.isWindowActive =
                !0);
            "hide" == b && this.isWindowActive && (this.options.zoomWindowFadeOut ? this.zoomWindow.stop(!0, !0).fadeOut(this.options.zoomWindowFadeOut) : this.zoomWindow.hide(), this.isWindowActive = !1)
        }, showHideLens: function (b) {
            "show" != b || this.isLensActive || (this.options.lensFadeIn ? this.zoomLens.stop(!0, !0, !1).fadeIn(this.options.lensFadeIn) : this.zoomLens.show(), this.isLensActive = !0);
            "hide" == b && this.isLensActive && (this.options.lensFadeOut ? this.zoomLens.stop(!0, !0).fadeOut(this.options.lensFadeOut) : this.zoomLens.hide(),
                this.isLensActive = !1)
        }, showHideTint: function (b) {
            "show" != b || this.isTintActive || (this.options.zoomTintFadeIn ? this.zoomTint.css({opacity: this.options.tintOpacity}).animate().stop(!0, !0).fadeIn("slow") : (this.zoomTint.css({opacity: this.options.tintOpacity}).animate(), this.zoomTint.show()), this.isTintActive = !0);
            "hide" == b && this.isTintActive && (this.options.zoomTintFadeOut ? this.zoomTint.stop(!0, !0).fadeOut(this.options.zoomTintFadeOut) : this.zoomTint.hide(), this.isTintActive = !1)
        }, setLensPostition: function (b) {
        },
        setWindowPostition: function (b) {
            var a = this;
            if (isNaN(a.options.zoomWindowPosition)) a.externalContainer = d("#" + a.options.zoomWindowPosition), a.externalContainerWidth = a.externalContainer.width(), a.externalContainerHeight = a.externalContainer.height(), a.externalContainerOffset = a.externalContainer.offset(), a.windowOffsetTop = a.externalContainerOffset.top, a.windowOffsetLeft = a.externalContainerOffset.left; else switch (a.options.zoomWindowPosition) {
                case 1:
                    a.windowOffsetTop = a.options.zoomWindowOffety;
                    a.windowOffsetLeft =
                        +a.nzWidth;
                    break;
                case 2:
                    a.options.zoomWindowHeight > a.nzHeight && (a.windowOffsetTop = -1 * (a.options.zoomWindowHeight / 2 - a.nzHeight / 2), a.windowOffsetLeft = a.nzWidth);
                    break;
                case 3:
                    a.windowOffsetTop = a.nzHeight - a.zoomWindow.height() - 2 * a.options.borderSize;
                    a.windowOffsetLeft = a.nzWidth;
                    break;
                case 4:
                    a.windowOffsetTop = a.nzHeight;
                    a.windowOffsetLeft = a.nzWidth;
                    break;
                case 5:
                    a.windowOffsetTop = a.nzHeight;
                    a.windowOffsetLeft = a.nzWidth - a.zoomWindow.width() - 2 * a.options.borderSize;
                    break;
                case 6:
                    a.options.zoomWindowHeight >
                    a.nzHeight && (a.windowOffsetTop = a.nzHeight, a.windowOffsetLeft = -1 * (a.options.zoomWindowWidth / 2 - a.nzWidth / 2 + 2 * a.options.borderSize));
                    break;
                case 7:
                    a.windowOffsetTop = a.nzHeight;
                    a.windowOffsetLeft = 0;
                    break;
                case 8:
                    a.windowOffsetTop = a.nzHeight;
                    a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
                    break;
                case 9:
                    a.windowOffsetTop = a.nzHeight - a.zoomWindow.height() - 2 * a.options.borderSize;
                    a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
                    break;
                case 10:
                    a.options.zoomWindowHeight > a.nzHeight &&
                    (a.windowOffsetTop = -1 * (a.options.zoomWindowHeight / 2 - a.nzHeight / 2), a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize));
                    break;
                case 11:
                    a.windowOffsetTop = a.options.zoomWindowOffety;
                    a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
                    break;
                case 12:
                    a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
                    a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
                    break;
                case 13:
                    a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
                    a.windowOffsetLeft =
                        0;
                    break;
                case 14:
                    a.options.zoomWindowHeight > a.nzHeight && (a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize), a.windowOffsetLeft = -1 * (a.options.zoomWindowWidth / 2 - a.nzWidth / 2 + 2 * a.options.borderSize));
                    break;
                case 15:
                    a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
                    a.windowOffsetLeft = a.nzWidth - a.zoomWindow.width() - 2 * a.options.borderSize;
                    break;
                case 16:
                    a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
                    a.windowOffsetLeft = a.nzWidth;
                    break;
                default:
                    a.windowOffsetTop =
                        a.options.zoomWindowOffety, a.windowOffsetLeft = a.nzWidth
            }
            a.isWindowSet = !0;
            a.windowOffsetTop += a.options.zoomWindowOffety;
            a.windowOffsetLeft += a.options.zoomWindowOffetx;
            a.zoomWindow.css({top: a.windowOffsetTop});
            a.zoomWindow.css({left: a.windowOffsetLeft});
            "inner" == a.options.zoomType && (a.zoomWindow.css({top: 0}), a.zoomWindow.css({left: 0}));
            a.windowLeftPos = String(-1 * ((b.pageX - a.nzOffset.left) * a.widthRatio - a.zoomWindow.width() / 2));
            a.windowTopPos = String(-1 * ((b.pageY - a.nzOffset.top) * a.heightRatio - a.zoomWindow.height() /
                2));
            a.Etoppos && (a.windowTopPos = 0);
            a.Eloppos && (a.windowLeftPos = 0);
            a.Eboppos && (a.windowTopPos = -1 * (a.largeHeight / a.currentZoomLevel - a.zoomWindow.height()));
            a.Eroppos && (a.windowLeftPos = -1 * (a.largeWidth / a.currentZoomLevel - a.zoomWindow.width()));
            a.fullheight && (a.windowTopPos = 0);
            a.fullwidth && (a.windowLeftPos = 0);
            if ("window" == a.options.zoomType || "inner" == a.options.zoomType) 1 == a.zoomLock && (1 >= a.widthRatio && (a.windowLeftPos = 0), 1 >= a.heightRatio && (a.windowTopPos = 0)), a.largeHeight < a.options.zoomWindowHeight && (a.windowTopPos =
                0), a.largeWidth < a.options.zoomWindowWidth && (a.windowLeftPos = 0), a.options.easing ? (a.xp || (a.xp = 0), a.yp || (a.yp = 0), a.loop || (a.loop = setInterval(function () {
                a.xp += (a.windowLeftPos - a.xp) / a.options.easingAmount;
                a.yp += (a.windowTopPos - a.yp) / a.options.easingAmount;
                a.scrollingLock ? (clearInterval(a.loop), a.xp = a.windowLeftPos, a.yp = a.windowTopPos, a.xp = -1 * ((b.pageX - a.nzOffset.left) * a.widthRatio - a.zoomWindow.width() / 2), a.yp = -1 * ((b.pageY - a.nzOffset.top) * a.heightRatio - a.zoomWindow.height() / 2), a.changeBgSize && (a.nzHeight >
                a.nzWidth ? ("lens" == a.options.zoomType && a.zoomLens.css({"background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px"}), a.zoomWindow.css({"background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px"})) : ("lens" != a.options.zoomType && a.zoomLens.css({"background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvalueheight + "px"}), a.zoomWindow.css({"background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px"})),
                    a.changeBgSize = !1), a.zoomWindow.css({backgroundPosition: a.windowLeftPos + "px " + a.windowTopPos + "px"}), a.scrollingLock = !1, a.loop = !1) : (a.changeBgSize && (a.nzHeight > a.nzWidth ? ("lens" == a.options.zoomType && a.zoomLens.css({"background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px"}), a.zoomWindow.css({"background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px"})) : ("lens" != a.options.zoomType && a.zoomLens.css({
                    "background-size": a.largeWidth / a.newvaluewidth +
                        "px " + a.largeHeight / a.newvaluewidth + "px"
                }), a.zoomWindow.css({"background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px"})), a.changeBgSize = !1), a.zoomWindow.css({backgroundPosition: a.xp + "px " + a.yp + "px"}))
            }, 16))) : (a.changeBgSize && (a.nzHeight > a.nzWidth ? ("lens" == a.options.zoomType && a.zoomLens.css({"background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px"}), a.zoomWindow.css({
                "background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight /
                    a.newvalueheight + "px"
            })) : ("lens" == a.options.zoomType && a.zoomLens.css({"background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px"}), a.largeHeight / a.newvaluewidth < a.options.zoomWindowHeight ? a.zoomWindow.css({"background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px"}) : a.zoomWindow.css({"background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px"})), a.changeBgSize = !1), a.zoomWindow.css({
                backgroundPosition: a.windowLeftPos +
                    "px " + a.windowTopPos + "px"
            }))
        }, setTintPosition: function (b) {
            this.nzOffset = this.$elem.offset();
            this.tintpos = String(-1 * (b.pageX - this.nzOffset.left - this.zoomLens.width() / 2));
            this.tintposy = String(-1 * (b.pageY - this.nzOffset.top - this.zoomLens.height() / 2));
            this.Etoppos && (this.tintposy = 0);
            this.Eloppos && (this.tintpos = 0);
            this.Eboppos && (this.tintposy = -1 * (this.nzHeight - this.zoomLens.height() - 2 * this.options.lensBorderSize));
            this.Eroppos && (this.tintpos = -1 * (this.nzWidth - this.zoomLens.width() - 2 * this.options.lensBorderSize));
            this.options.tint && (this.fullheight && (this.tintposy = 0), this.fullwidth && (this.tintpos = 0), this.zoomTintImage.css({left: this.tintpos + "px"}), this.zoomTintImage.css({top: this.tintposy + "px"}))
        }, swaptheimage: function (b, a) {
            var c = this, e = new Image;
            c.options.loadingIcon && (c.spinner = d("<div style=\"background: url('" + c.options.loadingIcon + "') no-repeat center;height:" + c.nzHeight + "px;width:" + c.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"></div>'), c.$elem.after(c.spinner));
            c.options.onImageSwap(c.$elem);
            e.onload = function () {
                c.largeWidth = e.width;
                c.largeHeight = e.height;
                c.zoomImage = a;
                c.zoomWindow.css({"background-size": c.largeWidth + "px " + c.largeHeight + "px"});
                c.zoomWindow.css({"background-size": c.largeWidth + "px " + c.largeHeight + "px"});
                c.swapAction(b, a)
            };
            e.src = a
        }, swapAction: function (b, a) {
            var c = this, e = new Image;
            e.onload = function () {
                c.nzHeight = e.height;
                c.nzWidth = e.width;
                c.options.onImageSwapComplete(c.$elem);
                c.doneCallback()
            };
            e.src = b;
            c.currentZoomLevel = c.options.zoomLevel;
            c.options.maxZoomLevel =
                !1;
            "lens" == c.options.zoomType && c.zoomLens.css({backgroundImage: "url('" + a + "')"});
            "window" == c.options.zoomType && c.zoomWindow.css({backgroundImage: "url('" + a + "')"});
            "inner" == c.options.zoomType && c.zoomWindow.css({backgroundImage: "url('" + a + "')"});
            c.currentImage = a;
            if (c.options.imageCrossfade) {
                var f = c.$elem, g = f.clone();
                c.$elem.attr("src", b);
                c.$elem.after(g);
                g.stop(!0).fadeOut(c.options.imageCrossfade, function () {
                    d(this).remove()
                });
                c.$elem.width("auto").removeAttr("width");
                c.$elem.height("auto").removeAttr("height");
                f.fadeIn(c.options.imageCrossfade);
                c.options.tint && "inner" != c.options.zoomType && (f = c.zoomTintImage, g = f.clone(), c.zoomTintImage.attr("src", a), c.zoomTintImage.after(g), g.stop(!0).fadeOut(c.options.imageCrossfade, function () {
                    d(this).remove()
                }), f.fadeIn(c.options.imageCrossfade), c.zoomTint.css({height: c.$elem.height()}), c.zoomTint.css({width: c.$elem.width()}));
                c.zoomContainer.css("height", c.$elem.height());
                c.zoomContainer.css("width", c.$elem.width());
                "inner" != c.options.zoomType || c.options.constrainType ||
                (c.zoomWrap.parent().css("height", c.$elem.height()), c.zoomWrap.parent().css("width", c.$elem.width()), c.zoomWindow.css("height", c.$elem.height()), c.zoomWindow.css("width", c.$elem.width()))
            } else c.$elem.attr("src", b), c.options.tint && (c.zoomTintImage.attr("src", a), c.zoomTintImage.attr("height", c.$elem.height()), c.zoomTintImage.css({height: c.$elem.height()}), c.zoomTint.css({height: c.$elem.height()})), c.zoomContainer.css("height", c.$elem.height()), c.zoomContainer.css("width", c.$elem.width());
            c.options.imageCrossfade &&
            (c.zoomWrap.css("height", c.$elem.height()), c.zoomWrap.css("width", c.$elem.width()));
            c.options.constrainType && ("height" == c.options.constrainType && (c.zoomContainer.css("height", c.options.constrainSize), c.zoomContainer.css("width", "auto"), c.options.imageCrossfade ? (c.zoomWrap.css("height", c.options.constrainSize), c.zoomWrap.css("width", "auto"), c.constwidth = c.zoomWrap.width()) : (c.$elem.css("height", c.options.constrainSize), c.$elem.css("width", "auto"), c.constwidth = c.$elem.width()), "inner" == c.options.zoomType &&
            (c.zoomWrap.parent().css("height", c.options.constrainSize), c.zoomWrap.parent().css("width", c.constwidth), c.zoomWindow.css("height", c.options.constrainSize), c.zoomWindow.css("width", c.constwidth)), c.options.tint && (c.tintContainer.css("height", c.options.constrainSize), c.tintContainer.css("width", c.constwidth), c.zoomTint.css("height", c.options.constrainSize), c.zoomTint.css("width", c.constwidth), c.zoomTintImage.css("height", c.options.constrainSize), c.zoomTintImage.css("width", c.constwidth))), "width" ==
            c.options.constrainType && (c.zoomContainer.css("height", "auto"), c.zoomContainer.css("width", c.options.constrainSize), c.options.imageCrossfade ? (c.zoomWrap.css("height", "auto"), c.zoomWrap.css("width", c.options.constrainSize), c.constheight = c.zoomWrap.height()) : (c.$elem.css("height", "auto"), c.$elem.css("width", c.options.constrainSize), c.constheight = c.$elem.height()), "inner" == c.options.zoomType && (c.zoomWrap.parent().css("height", c.constheight), c.zoomWrap.parent().css("width", c.options.constrainSize), c.zoomWindow.css("height",
                c.constheight), c.zoomWindow.css("width", c.options.constrainSize)), c.options.tint && (c.tintContainer.css("height", c.constheight), c.tintContainer.css("width", c.options.constrainSize), c.zoomTint.css("height", c.constheight), c.zoomTint.css("width", c.options.constrainSize), c.zoomTintImage.css("height", c.constheight), c.zoomTintImage.css("width", c.options.constrainSize))))
        }, doneCallback: function () {
            this.options.loadingIcon && this.spinner.hide();
            this.nzOffset = this.$elem.offset();
            this.nzWidth = this.$elem.width();
            this.nzHeight = this.$elem.height();
            this.currentZoomLevel = this.options.zoomLevel;
            this.widthRatio = this.largeWidth / this.nzWidth;
            this.heightRatio = this.largeHeight / this.nzHeight;
            "window" == this.options.zoomType && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.options.zoomWindowWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.zoomLens && (this.zoomLens.css("width",
                lensWidth), this.zoomLens.css("height", lensHeight)))
        }, getCurrentImage: function () {
            return this.zoomImage
        }, getGalleryList: function () {
            var b = this;
            b.gallerylist = [];
            b.options.gallery ? d("#" + b.options.gallery + " a").each(function () {
                    var a = "";
                    d(this).data("zoom-image") ? a = d(this).data("zoom-image") : d(this).data("image") && (a = d(this).data("image"));
                    a == b.zoomImage ? b.gallerylist.unshift({
                        href: "" + a + "",
                        title: d(this).find("img").attr("title")
                    }) : b.gallerylist.push({href: "" + a + "", title: d(this).find("img").attr("title")})
                }) :
                b.gallerylist.push({href: "" + b.zoomImage + "", title: d(this).find("img").attr("title")});
            return b.gallerylist
        }, changeZoomLevel: function (b) {
            this.scrollingLock = !0;
            this.newvalue = parseFloat(b).toFixed(2);
            newvalue = parseFloat(b).toFixed(2);
            maxheightnewvalue = this.largeHeight / (this.options.zoomWindowHeight / this.nzHeight * this.nzHeight);
            maxwidthtnewvalue = this.largeWidth / (this.options.zoomWindowWidth / this.nzWidth * this.nzWidth);
            "inner" != this.options.zoomType && (maxheightnewvalue <= newvalue ? (this.heightRatio = this.largeHeight /
                maxheightnewvalue / this.nzHeight, this.newvalueheight = maxheightnewvalue, this.fullheight = !0) : (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue, this.fullheight = !1), maxwidthtnewvalue <= newvalue ? (this.widthRatio = this.largeWidth / maxwidthtnewvalue / this.nzWidth, this.newvaluewidth = maxwidthtnewvalue, this.fullwidth = !0) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1), "lens" == this.options.zoomType && (maxheightnewvalue <= newvalue ?
                (this.fullwidth = !0, this.newvaluewidth = maxheightnewvalue) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1)));
            "inner" == this.options.zoomType && (maxheightnewvalue = parseFloat(this.largeHeight / this.nzHeight).toFixed(2), maxwidthtnewvalue = parseFloat(this.largeWidth / this.nzWidth).toFixed(2), newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue), newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue), maxheightnewvalue <= newvalue ? (this.heightRatio = this.largeHeight /
                newvalue / this.nzHeight, this.newvalueheight = newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue, this.fullheight = !0) : (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue, this.fullheight = !1), maxwidthtnewvalue <= newvalue ? (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue > maxwidthtnewvalue ? maxwidthtnewvalue : newvalue, this.fullwidth = !0) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth =
                newvalue, this.fullwidth = !1));
            scrcontinue = !1;
            "inner" == this.options.zoomType && (this.nzWidth > this.nzHeight && (this.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, this.fullwidth = this.fullheight = !0)), this.nzHeight > this.nzWidth && (this.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, this.fullwidth = this.fullheight = !0)));
            "inner" != this.options.zoomType && (scrcontinue = !0);
            scrcontinue && (this.zoomLock = 0, this.changeZoom = !0, this.options.zoomWindowHeight / this.heightRatio <= this.nzHeight &&
            (this.currentZoomLevel = this.newvalueheight, "lens" != this.options.zoomType && "inner" != this.options.zoomType && (this.changeBgSize = !0, this.zoomLens.css({height: String(this.options.zoomWindowHeight / this.heightRatio) + "px"})), "lens" == this.options.zoomType || "inner" == this.options.zoomType) && (this.changeBgSize = !0), this.options.zoomWindowWidth / this.widthRatio <= this.nzWidth && ("inner" != this.options.zoomType && this.newvaluewidth > this.newvalueheight && (this.currentZoomLevel = this.newvaluewidth), "lens" != this.options.zoomType &&
            "inner" != this.options.zoomType && (this.changeBgSize = !0, this.zoomLens.css({width: String(this.options.zoomWindowWidth / this.widthRatio) + "px"})), "lens" == this.options.zoomType || "inner" == this.options.zoomType) && (this.changeBgSize = !0), "inner" == this.options.zoomType && (this.changeBgSize = !0, this.nzWidth > this.nzHeight && (this.currentZoomLevel = this.newvaluewidth), this.nzHeight > this.nzWidth && (this.currentZoomLevel = this.newvaluewidth)));
            this.setPosition(this.currentLoc)
        }, closeAll: function () {
            self.zoomWindow && self.zoomWindow.hide();
            self.zoomLens && self.zoomLens.hide();
            self.zoomTint && self.zoomTint.hide()
        }, changeState: function (b) {
            "enable" == b && (this.options.zoomEnabled = !0);
            "disable" == b && (this.options.zoomEnabled = !1)
        }
    };
    d.fn.elevateZoom = function (b) {
        return this.each(function () {
            var a = Object.create(k);
            a.init(b, this);
            d.data(this, "elevateZoom", a)
        })
    };
    d.fn.elevateZoom.options = {
        zoomActivation: "hover",
        zoomEnabled: !0,
        preloading: 1,
        zoomLevel: 1,
        scrollZoom: !1,
        scrollZoomIncrement: 0.1,
        minZoomLevel: !1,
        maxZoomLevel: !1,
        easing: !1,
        easingAmount: 12,
        lensSize: 200,
        zoomWindowWidth: 400,
        zoomWindowHeight: 400,
        zoomWindowOffetx: 0,
        zoomWindowOffety: 0,
        zoomWindowPosition: 1,
        zoomWindowBgColour: "#fff",
        lensFadeIn: !1,
        lensFadeOut: !1,
        debug: !1,
        zoomWindowFadeIn: !1,
        zoomWindowFadeOut: !1,
        zoomWindowAlwaysShow: !1,
        zoomTintFadeIn: !1,
        zoomTintFadeOut: !1,
        borderSize: 4,
        showLens: !0,
        borderColour: "#888",
        lensBorderSize: 1,
        lensBorderColour: "#000",
        lensShape: "square",
        zoomType: "window",
        containLensZoom: !1,
        lensColour: "white",
        lensOpacity: 0.4,
        lenszoom: !1,
        tint: !1,
        tintColour: "#333",
        tintOpacity: 0.4,
        gallery: !1,
        galleryActiveClass: "zoomGalleryActive",
        imageCrossfade: !1,
        constrainType: !1,
        constrainSize: !1,
        loadingIcon: !1,
        cursor: "default",
        responsive: !0,
        onComplete: d.noop,
        onZoomedImageLoaded: function () {
        },
        onImageSwap: d.noop,
        onImageSwapComplete: d.noop
    }
})(jQuery, window, document);
;/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function (s, H, f, w) {
    var K = f("html"), q = f(s), p = f(H), b = f.fancybox = function () {
        b.open.apply(this, arguments)
    }, J = navigator.userAgent.match(/msie/i), C = null, t = H.createTouch !== w, u = function (a) {
        return a && a.hasOwnProperty && a instanceof f
    }, r = function (a) {
        return a && "string" === f.type(a)
    }, F = function (a) {
        return r(a) && 0 < a.indexOf("%")
    }, m = function (a, d) {
        var e = parseInt(a, 10) || 0;
        d && F(a) && (e *= b.getViewport()[d] / 100);
        return Math.ceil(e)
    }, x = function (a, b) {
        return m(a, b) + "px"
    };
    f.extend(b, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !t,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3E3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {dataType: "html", headers: {"X-fancyBox": !0}},
            iframe: {scrolling: "auto", preload: !0},
            swf: {wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always"},
            keys: {
                next: {13: "left", 34: "up", 39: "left", 40: "up"},
                prev: {8: "right", 33: "down", 37: "right", 38: "down"},
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {next: "left", prev: "right"},
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                    (J ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {overlay: !0, title: !0},
            onCancel: f.noop,
            beforeLoad: f.noop,
            afterLoad: f.noop,
            beforeShow: f.noop,
            afterShow: f.noop,
            beforeChange: f.noop,
            beforeClose: f.noop,
            afterClose: f.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {timer: null, isActive: !1},
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function (a, d) {
            if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = u(a) ? f(a).get() : [a]), f.each(a, function (e, c) {
                var l = {}, g, h, k, n, m;
                "object" === f.type(c) && (c.nodeType && (c = f(c)), u(c) ? (l = {
                    href: c.data("fancybox-href") || c.attr("href"),
                    title: f("<div/>").text(c.data("fancybox-title") || c.attr("title")).html(),
                    isDom: !0,
                    element: c
                }, f.metadata && f.extend(!0, l, c.metadata())) : l = c);
                g = d.href || l.href || (r(c) ? c : null);
                h = d.title !== w ? d.title : l.title || "";
                n = (k = d.content || l.content) ? "html" : d.type || l.type;
                !n && l.isDom && (n = c.data("fancybox-type"), n || (n = (n = c.prop("class").match(/fancybox\.(\w+)/)) ? n[1] : null));
                r(g) && (n || (b.isImage(g) ? n = "image" : b.isSWF(g) ? n = "swf" : "#" === g.charAt(0) ? n = "inline" : r(c) && (n = "html", k = c)), "ajax" === n && (m = g.split(/\s+/, 2), g = m.shift(), m = m.shift()));
                k || ("inline" === n ? g ? k = f(r(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : l.isDom && (k = c) : "html" === n ? k = g : n || g || !l.isDom || (n = "inline", k = c));
                f.extend(l, {href: g, type: n, content: k, title: h, selector: m});
                a[e] = l
            }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== w && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
        },
        cancel: function () {
            var a = b.coming;
            a && !1 === b.trigger("onCancel") || (b.hideLoading(), a && (b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a)))
        },
        close: function (a) {
            b.cancel();
            !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (b.isOpen && !0 !== a ? (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]()) : (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut())))
        },
        play: function (a) {
            var d = function () {
                clearTimeout(b.player.timer)
            }, e = function () {
                d();
                b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed))
            }, c = function () {
                d();
                p.unbind(".player");
                b.player.isActive = !1;
                b.trigger("onPlayEnd")
            };
            !0 === a || !b.player.isActive && !1 !== a ? b.current && (b.current.loop || b.current.index < b.group.length - 1) && (b.player.isActive = !0, p.bind({
                "onCancel.player beforeClose.player": c,
                "onUpdate.player": e,
                "beforeLoad.player": d
            }), e(), b.trigger("onPlayStart")) : c()
        },
        next: function (a) {
            var d = b.current;
            d && (r(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
        },
        prev: function (a) {
            var d = b.current;
            d && (r(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
        },
        jumpto: function (a, d, e) {
            var c = b.current;
            c && (a = m(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== w && (b.cancel(), b._start(a)))
        },
        reposition: function (a, d) {
            var e = b.current, c = e ? e.wrap : null, l;
            c && (l = b._getPosition(d), a && "scroll" === a.type ? (delete l.position, c.stop(!0, !0).animate(l, 200)) : (c.css(l), e.pos = f.extend({}, e.dim, l)))
        },
        update: function (a) {
            var d = a && a.originalEvent && a.originalEvent.type, e = !d || "orientationchange" === d;
            e && (clearTimeout(C), C = null);
            b.isOpen && !C && (C = setTimeout(function () {
                var c = b.current;
                c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), C = null)
            }, e && !t ? 0 : 300))
        },
        toggle: function (a) {
            b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, t && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update())
        },
        hideLoading: function () {
            p.unbind(".loading");
            f("#fancybox-loading").remove()
        },
        showLoading: function () {
            var a, d;
            b.hideLoading();
            a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
            p.bind("keydown.loading", function (a) {
                27 === (a.which || a.keyCode) && (a.preventDefault(), b.cancel())
            });
            b.defaults.fixed || (d = b.getViewport(), a.css({
                position: "absolute",
                top: 0.5 * d.h + d.y,
                left: 0.5 * d.w + d.x
            }));
            b.trigger("onLoading")
        },
        getViewport: function () {
            var a = b.current && b.current.locked || !1, d = {x: q.scrollLeft(), y: q.scrollTop()};
            a && a.length ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = t && s.innerWidth ? s.innerWidth : q.width(), d.h = t && s.innerHeight ? s.innerHeight : q.height());
            return d
        },
        unbindEvents: function () {
            b.wrap && u(b.wrap) && b.wrap.unbind(".fb");
            p.unbind(".fb");
            q.unbind(".fb")
        },
        bindEvents: function () {
            var a = b.current, d;
            a && (q.bind("orientationchange.fb" + (t ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function (e) {
                var c = e.which || e.keyCode, l = e.target || e.srcElement;
                if (27 === c && b.coming) return !1;
                e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || l && (l.type || f(l).is("[contenteditable]")) || f.each(d, function (d, l) {
                    if (1 < a.group.length && l[c] !== w) return b[d](l[c]), e.preventDefault(), !1;
                    if (-1 < f.inArray(c, l)) return b[d](), e.preventDefault(), !1
                })
            }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, l, g) {
                for (var h = f(d.target || null), k = !1; h.length && !(k || h.is(".fancybox-skin") || h.is(".fancybox-wrap"));) k = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
                0 !== c && !k && 1 < b.group.length && !a.canShrink && (0 < g || 0 < l ? b.prev(0 < g ? "down" : "left") : (0 > g || 0 > l) && b.next(0 > g ? "up" : "right"), d.preventDefault())
            }))
        },
        trigger: function (a, d) {
            var e, c = d || b.coming || b.current;
            if (c) {
                f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
                if (!1 === e) return !1;
                c.helpers && f.each(c.helpers, function (d, e) {
                    if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c)
                })
            }
            p.trigger(a)
        },
        isImage: function (a) {
            return r(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function (a) {
            return r(a) && a.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function (a) {
            var d = {}, e, c;
            a = m(a);
            e = b.group[a] || null;
            if (!e) return !1;
            d = f.extend(!0, {}, b.opts, e);
            e = d.margin;
            c = d.padding;
            "number" === f.type(e) && (d.margin = [e, e, e, e]);
            "number" === f.type(c) && (d.padding = [c, c, c, c]);
            d.modal && f.extend(!0, d, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {overlay: {closeClick: !1}}
            });
            d.autoSize && (d.autoWidth = d.autoHeight = !0);
            "auto" === d.width && (d.autoWidth = !0);
            "auto" === d.height && (d.autoHeight = !0);
            d.group = b.group;
            d.index = a;
            b.coming = d;
            if (!1 === b.trigger("beforeLoad")) b.coming = null; else {
                c = d.type;
                e = d.href;
                if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
                b.isActive = !0;
                if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
                "image" === c && (d.aspectRatio = !0);
                "iframe" === c && t && (d.scrolling = "scroll");
                d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (t ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
                f.extend(d, {
                    skin: f(".fancybox-skin", d.wrap),
                    outer: f(".fancybox-outer", d.wrap),
                    inner: f(".fancybox-inner", d.wrap)
                });
                f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
                    d.skin.css("padding" + b, x(d.padding[a]))
                });
                b.trigger("onReady");
                if ("inline" === c || "html" === c) {
                    if (!d.content || !d.content.length) return b._error("content")
                } else if (!e) return b._error("href");
                "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
            }
        },
        _error: function (a) {
            f.extend(b.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: a,
                content: b.coming.tpl.error
            });
            b._afterLoad()
        },
        _loadImage: function () {
            var a = b.imgPreload = new Image;
            a.onload = function () {
                this.onload = this.onerror = null;
                b.coming.width = this.width / b.opts.pixelRatio;
                b.coming.height = this.height / b.opts.pixelRatio;
                b._afterLoad()
            };
            a.onerror = function () {
                this.onload = this.onerror = null;
                b._error("image")
            };
            a.src = b.coming.href;
            !0 !== a.complete && b.showLoading()
        },
        _loadAjax: function () {
            var a = b.coming;
            b.showLoading();
            b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
                url: a.href, error: function (a, e) {
                    b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
                }, success: function (d, e) {
                    "success" === e && (a.content = d, b._afterLoad())
                }
            }))
        },
        _loadIframe: function () {
            var a = b.coming,
                d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", t ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function () {
                try {
                    f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (a) {
                }
            });
            a.iframe.preload && (b.showLoading(), d.one("load", function () {
                f(this).data("ready", 1);
                t || f(this).bind("load.fb", b.update);
                f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                b._afterLoad()
            }));
            a.content = d.appendTo(a.inner);
            a.iframe.preload || b._afterLoad()
        },
        _preloadImages: function () {
            var a = b.group, d = b.current, e = a.length, c = d.preload ? Math.min(d.preload, e - 1) : 0, f, g;
            for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
        },
        _afterLoad: function () {
            var a = b.coming, d = b.current, e, c, l, g, h;
            b.hideLoading();
            if (a && !1 !== b.isActive) if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null; else {
                d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                b.unbindEvents();
                e = a.content;
                c = a.type;
                l = a.scrolling;
                f.extend(b, {wrap: a.wrap, skin: a.skin, outer: a.outer, inner: a.inner, current: a, previous: d});
                g = a.href;
                switch (c) {
                    case"inline":
                    case"ajax":
                    case"html":
                        a.selector ? e = f("<div>").html(e).find(a.selector) : u(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () {
                            f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                        }));
                        break;
                    case"image":
                        e = a.tpl.image.replace(/\{href\}/g, g);
                        break;
                    case"swf":
                        e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function (a, b) {
                            e += '<param name="' + a + '" value="' + b + '"></param>';
                            h += " " + a + '="' + b + '"'
                        }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
                }
                u(e) && e.parent().is(a.inner) || a.inner.append(e);
                b.trigger("beforeShow");
                a.inner.css("overflow", "yes" === l ? "scroll" : "no" === l ? "hidden" : l);
                b._setDimension();
                b.reposition();
                b.isOpen = !1;
                b.coming = null;
                b.bindEvents();
                if (!b.isOpened) f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove(); else if (d.prevMethod) b.transitions[d.prevMethod]();
                b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                b._preloadImages()
            }
        },
        _setDimension: function () {
            var a = b.getViewport(), d = 0, e = !1, c = !1, e = b.wrap, l = b.skin, g = b.inner, h = b.current,
                c = h.width, k = h.height, n = h.minWidth, v = h.minHeight, p = h.maxWidth, q = h.maxHeight,
                t = h.scrolling, r = h.scrollOutside ? h.scrollbarWidth : 0, y = h.margin, z = m(y[1] + y[3]),
                s = m(y[0] + y[2]), w, A, u, D, B, G, C, E, I;
            e.add(l).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
            y = m(l.outerWidth(!0) - l.width());
            w = m(l.outerHeight(!0) - l.height());
            A = z + y;
            u = s + w;
            D = F(c) ? (a.w - A) * m(c) / 100 : c;
            B = F(k) ? (a.h - u) * m(k) / 100 : k;
            if ("iframe" === h.type) {
                if (I = h.content, h.autoHeight && 1 === I.data("ready")) try {
                    I[0].contentWindow.document.location && (g.width(D).height(9999), G = I.contents().find("body"), r && G.css("overflow-x", "hidden"), B = G.outerHeight(!0))
                } catch (H) {
                }
            } else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(D), h.autoHeight || g.height(B), h.autoWidth && (D = g.width()), h.autoHeight && (B = g.height()), g.removeClass("fancybox-tmp");
            c = m(D);
            k = m(B);
            E = D / B;
            n = m(F(n) ? m(n, "w") - A : n);
            p = m(F(p) ? m(p, "w") - A : p);
            v = m(F(v) ? m(v, "h") - u : v);
            q = m(F(q) ? m(q, "h") - u : q);
            G = p;
            C = q;
            h.fitToView && (p = Math.min(a.w - A, p), q = Math.min(a.h - u, q));
            A = a.w - z;
            s = a.h - s;
            h.aspectRatio ? (c > p && (c = p, k = m(c / E)), k > q && (k = q, c = m(k * E)), c < n && (c = n, k = m(c / E)), k < v && (k = v, c = m(k * E))) : (c = Math.max(n, Math.min(c, p)), h.autoHeight && "iframe" !== h.type && (g.width(c), k = g.height()), k = Math.max(v, Math.min(k, q)));
            if (h.fitToView) if (g.width(c).height(k), e.width(c + y), a = e.width(), z = e.height(), h.aspectRatio) for (; (a > A || z > s) && c > n && k > v && !(19 < d++);) k = Math.max(v, Math.min(q, k - 10)), c = m(k * E), c < n && (c = n, k = m(c / E)), c > p && (c = p, k = m(c / E)), g.width(c).height(k), e.width(c + y), a = e.width(), z = e.height(); else c = Math.max(n, Math.min(c, c - (a - A))), k = Math.max(v, Math.min(k, k - (z - s)));
            r && "auto" === t && k < B && c + y + r < A && (c += r);
            g.width(c).height(k);
            e.width(c + y);
            a = e.width();
            z = e.height();
            e = (a > A || z > s) && c > n && k > v;
            c = h.aspectRatio ? c < G && k < C && c < D && k < B : (c < G || k < C) && (c < D || k < B);
            f.extend(h, {
                dim: {width: x(a), height: x(z)},
                origWidth: D,
                origHeight: B,
                canShrink: e,
                canExpand: c,
                wPadding: y,
                hPadding: w,
                wrapSpace: z - l.outerHeight(!0),
                skinSpace: l.height() - k
            });
            !I && h.autoHeight && k > v && k < q && !c && g.height("auto")
        },
        _getPosition: function (a) {
            var d = b.current, e = b.getViewport(), c = d.margin, f = b.wrap.width() + c[1] + c[3],
                g = b.wrap.height() + c[0] + c[2], c = {position: "absolute", top: c[0], left: c[3]};
            d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
            c.top = x(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
            c.left = x(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
            return c
        },
        _afterZoomIn: function () {
            var a = b.current;
            a && ((b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
                f(d.target).is("a") || f(d.target).parent().is("a") || (d.preventDefault(), b[a.closeClick ? "close" : "next"]())
            }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) {
                a.preventDefault();
                b.close()
            }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), a.loop || a.index !== a.group.length - 1) ? b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play(!0)) : b.play(!1))
        },
        _afterZoomOut: function (a) {
            a = a || b.current;
            f(".fancybox-wrap").trigger("onReset").remove();
            f.extend(b, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            b.trigger("afterClose", a)
        }
    });
    b.transitions = {
        getOrigPosition: function () {
            var a = b.current, d = a.element, e = a.orig, c = {}, f = 50, g = 50, h = a.hPadding, k = a.wPadding,
                n = b.getViewport();
            !e && a.isDom && d.is(":visible") && (e = d.find("img:first"), e.length || (e = d));
            u(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = n.y + (n.h - g) * a.topRatio, c.left = n.x + (n.w - f) * a.leftRatio);
            if ("fixed" === b.wrap.css("position") || a.locked) c.top -= n.y, c.left -= n.x;
            return c = {
                top: x(c.top - h * a.topRatio),
                left: x(c.left - k * a.leftRatio),
                width: x(f + k),
                height: x(g + h)
            }
        }, step: function (a, d) {
            var e, c, f = d.prop;
            c = b.current;
            var g = c.wrapSpace, h = c.skinSpace;
            if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](m("width" === f ? c : c - g * e)), b.inner[f](m("width" === f ? c : c - g * e - h * e))
        }, zoomIn: function () {
            var a = b.current, d = a.pos, e = a.openEffect, c = "elastic" === e, l = f.extend({opacity: 1}, d);
            delete l.position;
            c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
            b.wrap.css(d).animate(l, {
                duration: "none" === e ? 0 : a.openSpeed,
                easing: a.openEasing,
                step: c ? this.step : null,
                complete: b._afterZoomIn
            })
        }, zoomOut: function () {
            var a = b.current, d = a.closeEffect, e = "elastic" === d, c = {opacity: 0.1};
            e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
            b.wrap.animate(c, {
                duration: "none" === d ? 0 : a.closeSpeed,
                easing: a.closeEasing,
                step: e ? this.step : null,
                complete: b._afterZoomOut
            })
        }, changeIn: function () {
            var a = b.current, d = a.nextEffect, e = a.pos, c = {opacity: 1}, f = b.direction, g;
            e.opacity = 0.1;
            "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = x(m(e[g]) - 200), c[g] = "+=200px") : (e[g] = x(m(e[g]) + 200), c[g] = "-=200px"));
            "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
                duration: a.nextSpeed,
                easing: a.nextEasing,
                complete: b._afterZoomIn
            })
        }, changeOut: function () {
            var a = b.previous, d = a.prevEffect, e = {opacity: 0.1}, c = b.direction;
            "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
            a.wrap.animate(e, {
                duration: "none" === d ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function () {
                    f(this).trigger("onReset").remove()
                }
            })
        }
    };
    b.helpers.overlay = {
        defaults: {closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !t, fixed: !0},
        overlay: null,
        fixed: !1,
        el: f("html"),
        create: function (a) {
            var d;
            a = f.extend({}, this.defaults, a);
            this.overlay && this.close();
            d = b.coming ? b.coming.parent : a.parent;
            this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(d && d.lenth ? d : "body");
            this.fixed = !1;
            a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function (a) {
            var d = this;
            a = f.extend({}, this.defaults, a);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
            this.fixed || (q.bind("resize.overlay", f.proxy(this.update, this)), this.update());
            a.closeClick && this.overlay.bind("click.overlay", function (a) {
                if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : d.close(), !1
            });
            this.overlay.css(a.css).show()
        },
        close: function () {
            q.unbind("resize.overlay");
            this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), this.el.removeClass("fancybox-lock"), q.scrollTop(this.scrollV).scrollLeft(this.scrollH));
            f(".fancybox-overlay").remove().hide();
            f.extend(this, {overlay: null, fixed: !1})
        },
        update: function () {
            var a = "100%", b;
            this.overlay.width(a).height("100%");
            J ? (b = Math.max(H.documentElement.offsetWidth, H.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > q.width() && (a = p.width());
            this.overlay.width(a).height(p.height())
        },
        onReady: function (a, b) {
            var e = this.overlay;
            f(".fancybox-overlay").stop(!0, !0);
            e || this.create(a);
            a.locked && this.fixed && b.fixed && (b.locked = this.overlay.append(b.wrap), b.fixed = !1);
            !0 === a.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function (a, b) {
            b.locked && !this.el.hasClass("fancybox-lock") && (!1 !== this.fixPosition && f("*").filter(function () {
                return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin"), this.scrollV = q.scrollTop(), this.scrollH = q.scrollLeft(), this.el.addClass("fancybox-lock"), q.scrollTop(this.scrollV).scrollLeft(this.scrollH));
            this.open(a)
        },
        onUpdate: function () {
            this.fixed || this.update()
        },
        afterClose: function (a) {
            this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
        }
    };
    b.helpers.title = {
        defaults: {type: "float", position: "bottom"}, beforeShow: function (a) {
            var d = b.current, e = d.title, c = a.type;
            f.isFunction(e) && (e = e.call(d.element, d));
            if (r(e) && "" !== f.trim(e)) {
                d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
                switch (c) {
                    case"inside":
                        c = b.skin;
                        break;
                    case"outside":
                        c = b.wrap;
                        break;
                    case"over":
                        c = b.inner;
                        break;
                    default:
                        c = b.skin, d.appendTo("body"), J && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(m(d.css("margin-bottom")))
                }
                d["top" === a.position ? "prependTo" : "appendTo"](c)
            }
        }
    };
    f.fn.fancybox = function (a) {
        var d, e = f(this), c = this.selector || "", l = function (g) {
            var h = f(this).blur(), k = d, l, m;
            g.ctrlKey || g.altKey || g.shiftKey || g.metaKey || h.is(".fancybox-wrap") || (l = a.groupAttr || "data-fancybox-group", m = h.attr(l), m || (l = "rel", m = h.get(0)[l]), m && "" !== m && "nofollow" !== m && (h = c.length ? f(c) : e, h = h.filter("[" + l + '="' + m + '"]'), k = h.index(this)), a.index = k, !1 !== b.open(h, a) && g.preventDefault())
        };
        a = a || {};
        d = a.index || 0;
        c && !1 !== a.live ? p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", l) : e.unbind("click.fb-start").bind("click.fb-start", l);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    };
    p.ready(function () {
        var a, d;
        f.scrollbarWidth === w && (f.scrollbarWidth = function () {
            var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                b = a.children(), b = b.innerWidth() - b.height(99).innerWidth();
            a.remove();
            return b
        });
        f.support.fixedPosition === w && (f.support.fixedPosition = function () {
            var a = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                b = 20 === a[0].offsetTop || 15 === a[0].offsetTop;
            a.remove();
            return b
        }());
        f.extend(b.defaults, {scrollbarWidth: f.scrollbarWidth(), fixed: f.support.fixedPosition, parent: f("body")});
        a = f(s).width();
        K.addClass("fancybox-lock-test");
        d = f(s).width();
        K.removeClass("fancybox-lock-test");
        f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px !important;}</style>").appendTo("head")
    })
})(window, document, jQuery);
/*!
 * Buttons helper for fancyBox
 * version: 1.0.5 (Mon, 15 Oct 2012)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             buttons: {
 *                 position : 'top'
 *             }
 *         }
 *     });
 *
 */
;(function ($) {
    var F = $.fancybox;
    F.helpers.buttons = {
        defaults: {
            skipSingle: false,
            position: 'top',
            tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>'
        }, list: null, buttons: null, beforeLoad: function (opts, obj) {
            if (opts.skipSingle && obj.group.length < 2) {
                obj.helpers.buttons = false;
                obj.closeBtn = true;
                return;
            }
            obj.margin[opts.position === 'bottom' ? 2 : 0] += 30;
        }, onPlayStart: function () {
            if (this.buttons) {
                this.buttons.play.attr('title', 'Pause slideshow').addClass('btnPlayOn');
            }
        }, onPlayEnd: function () {
            if (this.buttons) {
                this.buttons.play.attr('title', 'Start slideshow').removeClass('btnPlayOn');
            }
        }, afterShow: function (opts, obj) {
            var buttons = this.buttons;
            if (!buttons) {
                this.list = $(opts.tpl).addClass(opts.position).appendTo('body');
                buttons = {
                    prev: this.list.find('.btnPrev').click(F.prev),
                    next: this.list.find('.btnNext').click(F.next),
                    play: this.list.find('.btnPlay').click(F.play),
                    toggle: this.list.find('.btnToggle').click(F.toggle),
                    close: this.list.find('.btnClose').click(F.close)
                }
            }
            if (obj.index > 0 || obj.loop) {
                buttons.prev.removeClass('btnDisabled');
            } else {
                buttons.prev.addClass('btnDisabled');
            }
            if (obj.loop || obj.index < obj.group.length - 1) {
                buttons.next.removeClass('btnDisabled');
                buttons.play.removeClass('btnDisabled');
            } else {
                buttons.next.addClass('btnDisabled');
                buttons.play.addClass('btnDisabled');
            }
            this.buttons = buttons;
            this.onUpdate(opts, obj);
        }, onUpdate: function (opts, obj) {
            var toggle;
            if (!this.buttons) {
                return;
            }
            toggle = this.buttons.toggle.removeClass('btnDisabled btnToggleOn');
            if (obj.canShrink) {
                toggle.addClass('btnToggleOn');
            } else if (!obj.canExpand) {
                toggle.addClass('btnDisabled');
            }
        }, beforeClose: function () {
            if (this.list) {
                this.list.remove();
            }
            this.list = null;
            this.buttons = null;
        }
    };
}(jQuery));
;
/*!
 * jQuery Raty - A Star Rating Plugin
 *
 * The MIT License
 *
 * @author  : Washington Botelho
 * @doc     : http://wbotelhos.com/raty
 * @version : 2.7.0
 *
 */
;(function ($) {
    'use strict';
    var methods = {
        init: function (options) {
            return this.each(function () {
                this.self = $(this);
                methods.destroy.call(this.self);
                this.opt = $.extend(true, {}, $.fn.raty.defaults, options);
                methods._adjustCallback.call(this);
                methods._adjustNumber.call(this);
                methods._adjustHints.call(this);
                this.opt.score = methods._adjustedScore.call(this, this.opt.score);
                if (this.opt.starType !== 'img') {
                    methods._adjustStarType.call(this);
                }
                methods._adjustPath.call(this);
                methods._createStars.call(this);
                if (this.opt.cancel) {
                    methods._createCancel.call(this);
                }
                if (this.opt.precision) {
                    methods._adjustPrecision.call(this);
                }
                methods._createScore.call(this);
                methods._apply.call(this, this.opt.score);
                methods._setTitle.call(this, this.opt.score);
                methods._target.call(this, this.opt.score);
                if (this.opt.readOnly) {
                    methods._lock.call(this);
                } else {
                    this.style.cursor = 'pointer';
                    methods._binds.call(this);
                }
            });
        }, _adjustCallback: function () {
            var options = ['number', 'readOnly', 'score', 'scoreName', 'target', 'path'];
            for (var i = 0; i < options.length; i++) {
                if (typeof this.opt[options[i]] === 'function') {
                    this.opt[options[i]] = this.opt[options[i]].call(this);
                }
            }
        }, _adjustedScore: function (score) {
            if (!score) {
                return score;
            }
            return methods._between(score, 0, this.opt.number);
        }, _adjustHints: function () {
            if (!this.opt.hints) {
                this.opt.hints = [];
            }
            if (!this.opt.halfShow && !this.opt.half) {
                return;
            }
            var steps = this.opt.precision ? 10 : 2;
            for (var i = 0; i < this.opt.number; i++) {
                var group = this.opt.hints[i];
                if (Object.prototype.toString.call(group) !== '[object Array]') {
                    group = [group];
                }
                this.opt.hints[i] = [];
                for (var j = 0; j < steps; j++) {
                    var
                        hint = group[j], last = group[group.length - 1];
                    if (last === undefined) {
                        last = null;
                    }
                    this.opt.hints[i][j] = hint === undefined ? last : hint;
                }
            }
        }, _adjustNumber: function () {
            this.opt.number = methods._between(this.opt.number, 1, this.opt.numberMax);
        }, _adjustPath: function () {
            this.opt.path = this.opt.path || '';
            if (this.opt.path && this.opt.path.charAt(this.opt.path.length - 1) !== 'index.html') {
                this.opt.path += 'index.html';
            }
        }, _adjustPrecision: function () {
            this.opt.half = true;
        }, _adjustStarType: function () {
            var replaces = ['cancelOff', 'cancelOn', 'starHalf', 'starOff', 'starOn'];
            this.opt.path = '';
            for (var i = 0; i < replaces.length; i++) {
                this.opt[replaces[i]] = this.opt[replaces[i]].replace('.', '-');
            }
        }, _apply: function (score) {
            methods._fill.call(this, score);
            if (score) {
                if (score > 0) {
                    this.score.val(score);
                }
                methods._roundStars.call(this, score);
            }
        }, _between: function (value, min, max) {
            return Math.min(Math.max(parseFloat(value), min), max);
        }, _binds: function () {
            if (this.cancel) {
                methods._bindOverCancel.call(this);
                methods._bindClickCancel.call(this);
                methods._bindOutCancel.call(this);
            }
            methods._bindOver.call(this);
            methods._bindClick.call(this);
            methods._bindOut.call(this);
        }, _bindClick: function () {
            var that = this;
            that.stars.on('click.raty', function (evt) {
                var
                    execute = true,
                    score = (that.opt.half || that.opt.precision) ? that.self.data('score') : (this.alt || $(this).data('alt'));
                if (that.opt.click) {
                    execute = that.opt.click.call(that, +score, evt);
                }
                if (execute || execute === undefined) {
                    if (that.opt.half && !that.opt.precision) {
                        score = methods._roundHalfScore.call(that, score);
                    }
                    methods._apply.call(that, score);
                }
            });
        }, _bindClickCancel: function () {
            var that = this;
            that.cancel.on('click.raty', function (evt) {
                that.score.removeAttr('value');
                if (that.opt.click) {
                    that.opt.click.call(that, null, evt);
                }
            });
        }, _bindOut: function () {
            var that = this;
            that.self.on('mouseleave.raty', function (evt) {
                var score = +that.score.val() || undefined;
                methods._apply.call(that, score);
                methods._target.call(that, score, evt);
                methods._resetTitle.call(that);
                if (that.opt.mouseout) {
                    that.opt.mouseout.call(that, score, evt);
                }
            });
        }, _bindOutCancel: function () {
            var that = this;
            that.cancel.on('mouseleave.raty', function (evt) {
                var icon = that.opt.cancelOff;
                if (that.opt.starType !== 'img') {
                    icon = that.opt.cancelClass + ' ' + icon;
                }
                methods._setIcon.call(that, this, icon);
                if (that.opt.mouseout) {
                    var score = +that.score.val() || undefined;
                    that.opt.mouseout.call(that, score, evt);
                }
            });
        }, _bindOver: function () {
            var that = this, action = that.opt.half ? 'mousemove.raty' : 'mouseover.raty';
            that.stars.on(action, function (evt) {
                var score = methods._getScoreByPosition.call(that, evt, this);
                methods._fill.call(that, score);
                if (that.opt.half) {
                    methods._roundStars.call(that, score, evt);
                    methods._setTitle.call(that, score, evt);
                    that.self.data('score', score);
                }
                methods._target.call(that, score, evt);
                if (that.opt.mouseover) {
                    that.opt.mouseover.call(that, score, evt);
                }
            });
        }, _bindOverCancel: function () {
            var that = this;
            that.cancel.on('mouseover.raty', function (evt) {
                var
                    starOff = that.opt.path + that.opt.starOff, icon = that.opt.cancelOn;
                if (that.opt.starType === 'img') {
                    that.stars.attr('src', starOff);
                } else {
                    icon = that.opt.cancelClass + ' ' + icon;
                    that.stars.attr('class', starOff);
                }
                methods._setIcon.call(that, this, icon);
                methods._target.call(that, null, evt);
                if (that.opt.mouseover) {
                    that.opt.mouseover.call(that, null);
                }
            });
        }, _buildScoreField: function () {
            return $('<input />', {name: this.opt.scoreName, type: 'hidden'}).appendTo(this);
        }, _createCancel: function () {
            var icon = this.opt.path + this.opt.cancelOff, cancel = $('<' + this.opt.starType + ' />', {
                title: this.opt.cancelHint,
                'class': this.opt.cancelClass
            });
            if (this.opt.starType === 'img') {
                cancel.attr({src: icon, alt: 'x'});
            } else {
                cancel.attr('data-alt', 'x').addClass(icon);
            }
            if (this.opt.cancelPlace === 'left') {
                this.self.prepend('&#160;').prepend(cancel);
            } else {
                this.self.append('&#160;').append(cancel);
            }
            this.cancel = cancel;
        }, _createScore: function () {
            var score = $(this.opt.targetScore);
            this.score = score.length ? score : methods._buildScoreField.call(this);
        }, _createStars: function () {
            for (var i = 1; i <= this.opt.number; i++) {
                var
                    name = methods._nameForIndex.call(this, i), attrs = {alt: i, src: this.opt.path + this.opt[name]};
                if (this.opt.starType !== 'img') {
                    attrs = {'data-alt': i, 'class': attrs.src};
                }
                attrs.title = methods._getHint.call(this, i);
                $('<' + this.opt.starType + ' />', attrs).appendTo(this);
                if (this.opt.space) {
                    this.self.append(i < this.opt.number ? '&#160;' : '');
                }
            }
            this.stars = this.self.children(this.opt.starType);
        }, _error: function (message) {
            $(this).text(message);
            $.error(message);
        }, _fill: function (score) {
            var hash = 0;
            for (var i = 1; i <= this.stars.length; i++) {
                var
                    icon, star = this.stars[i - 1], turnOn = methods._turnOn.call(this, i, score);
                if (this.opt.iconRange && this.opt.iconRange.length > hash) {
                    var irange = this.opt.iconRange[hash];
                    icon = methods._getRangeIcon.call(this, irange, turnOn);
                    if (i <= irange.range) {
                        methods._setIcon.call(this, star, icon);
                    }
                    if (i === irange.range) {
                        hash++;
                    }
                } else {
                    icon = this.opt[turnOn ? 'starOn' : 'starOff'];
                    methods._setIcon.call(this, star, icon);
                }
            }
        }, _getFirstDecimal: function (number) {
            var
                decimal = number.toString().split('.')[1], result = 0;
            if (decimal) {
                result = parseInt(decimal.charAt(0), 10);
                if (decimal.slice(1, 5) === '9999') {
                    result++;
                }
            }
            return result;
        }, _getRangeIcon: function (irange, turnOn) {
            return turnOn ? irange.on || this.opt.starOn : irange.off || this.opt.starOff;
        }, _getScoreByPosition: function (evt, icon) {
            var score = parseInt(icon.alt || icon.getAttribute('data-alt'), 10);
            if (this.opt.half) {
                var
                    size = methods._getWidth.call(this),
                    percent = parseFloat((evt.pageX - $(icon).offset().left) / size);
                score = score - 1 + percent;
            }
            return score;
        }, _getHint: function (score, evt) {
            if (score !== 0 && !score) {
                return this.opt.noRatedMsg;
            }
            var
                decimal = methods._getFirstDecimal.call(this, score), integer = Math.ceil(score),
                group = this.opt.hints[(integer || 1) - 1], hint = group, set = !evt || this.move;
            if (this.opt.precision) {
                if (set) {
                    decimal = decimal === 0 ? 9 : decimal - 1;
                }
                hint = group[decimal];
            } else if (this.opt.halfShow || this.opt.half) {
                decimal = set && decimal === 0 ? 1 : decimal > 5 ? 1 : 0;
                hint = group[decimal];
            }
            return hint === '' ? '' : hint || score;
        }, _getWidth: function () {
            var width = this.stars[0].width || parseFloat(this.stars.eq(0).css('font-size'));
            if (!width) {
                methods._error.call(this, 'Could not get the icon width!');
            }
            return width;
        }, _lock: function () {
            var hint = methods._getHint.call(this, this.score.val());
            this.style.cursor = '';
            this.title = hint;
            this.score.prop('readonly', true);
            this.stars.prop('title', hint);
            if (this.cancel) {
                this.cancel.hide();
            }
            this.self.data('readonly', true);
        }, _nameForIndex: function (i) {
            return this.opt.score && this.opt.score >= i ? 'starOn' : 'starOff';
        }, _resetTitle: function (star) {
            for (var i = 0; i < this.opt.number; i++) {
                this.stars[i].title = methods._getHint.call(this, i + 1);
            }
        }, _roundHalfScore: function (score) {
            var integer = parseInt(score, 10), decimal = methods._getFirstDecimal.call(this, score);
            if (decimal !== 0) {
                decimal = decimal > 5 ? 1 : 0.5;
            }
            return integer + decimal;
        }, _roundStars: function (score, evt) {
            var
                decimal = (score % 1).toFixed(2), name;
            if (evt || this.move) {
                name = decimal > 0.5 ? 'starOn' : 'starHalf';
            } else if (decimal > this.opt.round.down) {
                name = 'starOn';
                if (this.opt.halfShow && decimal < this.opt.round.up) {
                    name = 'starHalf';
                } else if (decimal < this.opt.round.full) {
                    name = 'starOff';
                }
            }
            if (name) {
                var
                    icon = this.opt[name], star = this.stars[Math.ceil(score) - 1];
                methods._setIcon.call(this, star, icon);
            }
        }, _setIcon: function (star, icon) {
            star[this.opt.starType === 'img' ? 'src' : 'className'] = this.opt.path + icon;
        }, _setTarget: function (target, score) {
            if (score) {
                score = this.opt.targetFormat.toString().replace('{score}', score);
            }
            if (target.is(':input')) {
                target.val(score);
            } else {
                target.html(score);
            }
        }, _setTitle: function (score, evt) {
            if (score) {
                var
                    integer = parseInt(Math.ceil(score), 10), star = this.stars[integer - 1];
                star.title = methods._getHint.call(this, score, evt);
            }
        }, _target: function (score, evt) {
            if (this.opt.target) {
                var target = $(this.opt.target);
                if (!target.length) {
                    methods._error.call(this, 'Target selector invalid or missing!');
                }
                var mouseover = evt && evt.type === 'mouseover';
                if (score === undefined) {
                    score = this.opt.targetText;
                } else if (score === null) {
                    score = mouseover ? this.opt.cancelHint : this.opt.targetText;
                } else {
                    if (this.opt.targetType === 'hint') {
                        score = methods._getHint.call(this, score, evt);
                    } else if (this.opt.precision) {
                        score = parseFloat(score).toFixed(1);
                    }
                    var mousemove = evt && evt.type === 'mousemove';
                    if (!mouseover && !mousemove && !this.opt.targetKeep) {
                        score = this.opt.targetText;
                    }
                }
                methods._setTarget.call(this, target, score);
            }
        }, _turnOn: function (i, score) {
            return this.opt.single ? (i === score) : (i <= score);
        }, _unlock: function () {
            this.style.cursor = 'pointer';
            this.removeAttribute('title');
            this.score.removeAttr('readonly');
            this.self.data('readonly', false);
            for (var i = 0; i < this.opt.number; i++) {
                this.stars[i].title = methods._getHint.call(this, i + 1);
            }
            if (this.cancel) {
                this.cancel.css('display', '');
            }
        }, cancel: function (click) {
            return this.each(function () {
                var self = $(this);
                if (self.data('readonly') !== true) {
                    methods[click ? 'click' : 'score'].call(self, null);
                    this.score.removeAttr('value');
                }
            });
        }, click: function (score) {
            return this.each(function () {
                if ($(this).data('readonly') !== true) {
                    score = methods._adjustedScore.call(this, score);
                    methods._apply.call(this, score);
                    if (this.opt.click) {
                        this.opt.click.call(this, score, $.Event('click'));
                    }
                    methods._target.call(this, score);
                }
            });
        }, destroy: function () {
            return this.each(function () {
                var self = $(this), raw = self.data('raw');
                if (raw) {
                    self.off('.raty').empty().css({cursor: raw.style.cursor}).removeData('readonly');
                } else {
                    self.data('raw', self.clone()[0]);
                }
            });
        }, getScore: function () {
            var score = [], value;
            this.each(function () {
                value = this.score.val();
                score.push(value ? +value : undefined);
            });
            return (score.length > 1) ? score : score[0];
        }, move: function (score) {
            return this.each(function () {
                var
                    integer = parseInt(score, 10), decimal = methods._getFirstDecimal.call(this, score);
                if (integer >= this.opt.number) {
                    integer = this.opt.number - 1;
                    decimal = 10;
                }
                var
                    width = methods._getWidth.call(this), steps = width / 10, star = $(this.stars[integer]),
                    percent = star.offset().left + steps * decimal, evt = $.Event('mousemove', {pageX: percent});
                this.move = true;
                star.trigger(evt);
                this.move = false;
            });
        }, readOnly: function (readonly) {
            return this.each(function () {
                var self = $(this);
                if (self.data('readonly') !== readonly) {
                    if (readonly) {
                        self.off('.raty').children('img').off('.raty');
                        methods._lock.call(this);
                    } else {
                        methods._binds.call(this);
                        methods._unlock.call(this);
                    }
                    self.data('readonly', readonly);
                }
            });
        }, reload: function () {
            return methods.set.call(this, {});
        }, score: function () {
            var self = $(this);
            return arguments.length ? methods.setScore.apply(self, arguments) : methods.getScore.call(self);
        }, set: function (options) {
            return this.each(function () {
                $(this).raty($.extend({}, this.opt, options));
            });
        }, setScore: function (score) {
            return this.each(function () {
                if ($(this).data('readonly') !== true) {
                    score = methods._adjustedScore.call(this, score);
                    methods._apply.call(this, score);
                    methods._target.call(this, score);
                }
            });
        }
    };
    $.fn.raty = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist!');
        }
    };
    $.fn.raty.defaults = {
        cancel: false,
        cancelClass: 'raty-cancel',
        cancelHint: 'Cancel this rating!',
        cancelOff: 'cancel-off.png',
        cancelOn: 'cancel-on.png',
        cancelPlace: 'left',
        click: undefined,
        half: false,
        halfShow: true,
        hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
        iconRange: undefined,
        mouseout: undefined,
        mouseover: undefined,
        noRatedMsg: 'Not rated yet!',
        number: 5,
        numberMax: 20,
        path: undefined,
        precision: false,
        readOnly: false,
        round: {down: 0.25, full: 0.6, up: 0.76},
        score: undefined,
        scoreName: 'score',
        single: false,
        space: true,
        starHalf: 'images/star-half.png',
        starOff: 'images/star-off.png',
        starOn: 'images/star-on.png',
        starType: 'img',
        target: undefined,
        targetFormat: '{score}',
        targetKeep: false,
        targetScore: undefined,
        targetText: '',
        targetType: 'hint'
    };
})(jQuery);
;(function (t, e) {
    "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Spinner = e()
})(this, function () {
    "use strict";

    function t(t, e) {
        var i, n = document.createElement(t || "div");
        for (i in e) n[i] = e[i];
        return n
    }

    function e(t) {
        for (var e = 1, i = arguments.length; i > e; e++) t.appendChild(arguments[e]);
        return t
    }

    function i(t, e, i, n) {
        var r = ["opacity", e, ~~(100 * t), i, n].join("-"), o = .01 + 100 * (i / n),
            a = Math.max(1 - (1 - t) / e * (100 - o), t), s = u.substring(0, u.indexOf("Animation")).toLowerCase(),
            l = s && "-" + s + "-" || "";
        return c[r] || (p.insertRule("@" + l + "keyframes " + r + "{" + "0%{opacity:" + a + "}" + o + "%{opacity:" + t + "}" + (o + .01) + "%{opacity:1}" + (o + e) % 100 + "%{opacity:" + t + "}" + "100%{opacity:" + a + "}" + "}", p.cssRules.length), c[r] = 1), r
    }

    function n(t, e) {
        var i, n, r = t.style;
        for (e = e.charAt(0).toUpperCase() + e.slice(1), n = 0; d.length > n; n++) if (i = d[n] + e, void 0 !== r[i]) return i;
        return void 0 !== r[e] ? e : void 0
    }

    function r(t, e) {
        for (var i in e) t.style[n(t, i) || i] = e[i];
        return t
    }

    function o(t) {
        for (var e = 1; arguments.length > e; e++) {
            var i = arguments[e];
            for (var n in i) void 0 === t[n] && (t[n] = i[n])
        }
        return t
    }

    function a(t, e) {
        return "string" == typeof t ? t : t[e % t.length]
    }

    function s(t) {
        this.opts = o(t || {}, s.defaults, f)
    }

    function l() {
        function i(e, i) {
            return t("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', i)
        }

        p.addRule(".spin-vml", "behavior:url(#default#VML)"), s.prototype.lines = function (t, n) {
            function o() {
                return r(i("group", {coordsize: d + " " + d, coordorigin: -u + " " + -u}), {width: d, height: d})
            }

            function s(t, s, l) {
                e(p, e(r(o(), {
                    rotation: 360 / n.lines * t + "deg",
                    left: ~~s
                }), e(r(i("roundrect", {arcsize: n.corners}), {
                    width: u,
                    height: n.width,
                    left: n.radius,
                    top: -n.width >> 1,
                    filter: l
                }), i("fill", {color: a(n.color, t), opacity: n.opacity}), i("stroke", {opacity: 0}))))
            }

            var l, u = n.length + n.width, d = 2 * u, c = 2 * -(n.width + n.length) + "px",
                p = r(o(), {position: "absolute", top: c, left: c});
            if (n.shadow) for (l = 1; n.lines >= l; l++) s(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (l = 1; n.lines >= l; l++) s(l);
            return e(t, p)
        }, s.prototype.opacity = function (t, e, i, n) {
            var r = t.firstChild;
            n = n.shadow && n.lines || 0, r && r.childNodes.length > e + n && (r = r.childNodes[e + n], r = r && r.firstChild, r = r && r.firstChild, r && (r.opacity = i))
        }
    }

    var u, d = ["webkit", "Moz", "ms", "O"], c = {}, p = function () {
        var i = t("style", {type: "text/css"});
        return e(document.getElementsByTagName("head")[0], i), i.sheet || i.styleSheet
    }(), f = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        rotate: 0,
        corners: 1,
        color: "#000",
        direction: 1,
        speed: 1,
        trail: 100,
        opacity: .25,
        fps: 20,
        zIndex: 2e9,
        className: "spinner",
        top: "50%",
        left: "50%",
        position: "absolute"
    };
    s.defaults = {}, o(s.prototype, {
        spin: function (e) {
            this.stop();
            var i = this, n = i.opts,
                o = i.el = r(t(0, {className: n.className}), {position: n.position, width: 0, zIndex: n.zIndex});
            if (n.radius + n.length + n.width, r(o, {
                left: n.left,
                top: n.top
            }), e && e.insertBefore(o, e.firstChild || null), o.setAttribute("role", "progressbar"), i.lines(o, i.opts), !u) {
                var a, s = 0, l = (n.lines - 1) * (1 - n.direction) / 2, d = n.fps, c = d / n.speed,
                    p = (1 - n.opacity) / (c * n.trail / 100), f = c / n.lines;
                (function h() {
                    s++;
                    for (var t = 0; n.lines > t; t++) a = Math.max(1 - (s + (n.lines - t) * f) % c * p, n.opacity), i.opacity(o, t * n.direction + l, a, n);
                    i.timeout = i.el && setTimeout(h, ~~(1e3 / d))
                })()
            }
            return i
        }, stop: function () {
            var t = this.el;
            return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = void 0), this
        }, lines: function (n, o) {
            function s(e, i) {
                return r(t(), {
                    position: "absolute",
                    width: o.length + o.width + "px",
                    height: o.width + "px",
                    background: e,
                    boxShadow: i,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / o.lines * d + o.rotate) + "deg) translate(" + o.radius + "px" + ",0)",
                    borderRadius: (o.corners * o.width >> 1) + "px"
                })
            }

            for (var l, d = 0, c = (o.lines - 1) * (1 - o.direction) / 2; o.lines > d; d++) l = r(t(), {
                position: "absolute",
                top: 1 + ~(o.width / 2) + "px",
                transform: o.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: o.opacity,
                animation: u && i(o.opacity, o.trail, c + d * o.direction, o.lines) + " " + 1 / o.speed + "s linear infinite"
            }), o.shadow && e(l, r(s("#000", "0 0 4px #000"), {top: "2px"})), e(n, e(l, s(a(o.color, d), "0 0 1px rgba(0,0,0,.1)")));
            return n
        }, opacity: function (t, e, i) {
            t.childNodes.length > e && (t.childNodes[e].style.opacity = i)
        }
    });
    var h = r(t("group"), {behavior: "url(#default#VML)"});
    return !n(h, "transform") && h.adj ? l() : u = n(h, "animation"), s
});
;/*!
 * Ladda 0.9.4 (2014-06-21, 11:24)
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2014 Hakim El Hattab, http://hakim.se
 */
(function (t, e) {
    "object" == typeof exports ? module.exports = e(require("spin.html")) : "function" == typeof define && define.amd ? define(["spin"], e) : t.Ladda = e(t.Spinner)
})(this, function (t) {
    "use strict";

    function e(t) {
        if (t === void 0) return console.warn("Ladda button target must be defined."), void 0;
        t.querySelector(".ladda-label") || (t.innerHTML = '<span class="ladda-label">' + t.innerHTML + "</span>");
        var e, n = document.createElement("span");
        n.className = "ladda-spinner", t.appendChild(n);
        var r, a = {
            start: function () {
                return e || (e = o(t)), t.setAttribute("disabled", ""), t.setAttribute("data-loading", ""), clearTimeout(r), e.spin(n), this.setProgress(0), this
            }, startAfter: function (t) {
                return clearTimeout(r), r = setTimeout(function () {
                    a.start()
                }, t), this
            }, stop: function () {
                return t.removeAttribute("disabled"), t.removeAttribute("data-loading"), clearTimeout(r), e && (r = setTimeout(function () {
                    e.stop()
                }, 1e3)), this
            }, toggle: function () {
                return this.isLoading() ? this.stop() : this.start(), this
            }, setProgress: function (e) {
                e = Math.max(Math.min(e, 1), 0);
                var n = t.querySelector(".ladda-progress");
                0 === e && n && n.parentNode ? n.parentNode.removeChild(n) : (n || (n = document.createElement("div"), n.className = "ladda-progress", t.appendChild(n)), n.style.width = (e || 0) * t.offsetWidth + "px")
            }, enable: function () {
                return this.stop(), this
            }, disable: function () {
                return this.stop(), t.setAttribute("disabled", ""), this
            }, isLoading: function () {
                return t.hasAttribute("data-loading")
            }, remove: function () {
                clearTimeout(r), t.removeAttribute("disabled", ""), t.removeAttribute("data-loading", ""), e && (e.stop(), e = null);
                for (var n = 0, i = u.length; i > n; n++) if (a === u[n]) {
                    u.splice(n, 1);
                    break
                }
            }
        };
        return u.push(a), a
    }

    function n(t, e) {
        for (; t.parentNode && t.tagName !== e;) t = t.parentNode;
        return e === t.tagName ? t : void 0
    }

    function r(t) {
        for (var e = ["input", "textarea"], n = [], r = 0; e.length > r; r++) for (var a = t.getElementsByTagName(e[r]), i = 0; a.length > i; i++) a[i].hasAttribute("required") && n.push(a[i]);
        return n
    }

    function a(t, a) {
        a = a || {};
        var i = [];
        "string" == typeof t ? i = s(document.querySelectorAll(t)) : "object" == typeof t && "string" == typeof t.nodeName && (i = [t]);
        for (var o = 0, u = i.length; u > o; o++) (function () {
            var t = i[o];
            if ("function" == typeof t.addEventListener) {
                var s = e(t), u = -1;
                t.addEventListener("click", function () {
                    var e = !0, i = n(t, "FORM");
                    if (i !== void 0) for (var o = r(i), d = 0; o.length > d; d++) "" === o[d].value.replace(/^\s+|\s+$/g, "") && (e = !1);
                    e && (s.startAfter(1), "number" == typeof a.timeout && (clearTimeout(u), u = setTimeout(s.stop, a.timeout)), "function" == typeof a.callback && a.callback.apply(null, [s]))
                }, !1)
            }
        })()
    }

    function i() {
        for (var t = 0, e = u.length; e > t; t++) u[t].stop()
    }

    function o(e) {
        var n, r = e.offsetHeight;
        0 === r && (r = parseFloat(window.getComputedStyle(e).height)), r > 32 && (r *= .8), e.hasAttribute("data-spinner-size") && (r = parseInt(e.getAttribute("data-spinner-size"), 10)), e.hasAttribute("data-spinner-color") && (n = e.getAttribute("data-spinner-color"));
        var a = 12, i = .2 * r, o = .6 * i, s = 7 > i ? 2 : 3;
        return new t({
            color: n || "#fff",
            lines: a,
            radius: i,
            length: o,
            width: s,
            zIndex: "auto",
            top: "auto",
            left: "auto",
            className: ""
        })
    }

    function s(t) {
        for (var e = [], n = 0; t.length > n; n++) e.push(t[n]);
        return e
    }

    var u = [];
    return {bind: a, create: e, stopAll: i}
});
;(function (jQuery) {
    var domfocus = false;
    var mousefocus = false;
    var zoomactive = false;
    var tabindexcounter = 5000;
    var ascrailcounter = 2000;
    var globalmaxzindex = 0;
    var $ = jQuery;

    function getScriptPath() {
        var scripts = document.getElementsByTagName('script');
        var path = scripts[scripts.length - 1].src.split('?')[0];
        return (path.split('index.html').length > 0) ? path.split('index.html').slice(0, -1).join('index.html') + '/' : '';
    }

    var scriptpath = getScriptPath();
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    var setAnimationFrame = window.requestAnimationFrame || false;
    var clearAnimationFrame = window.cancelAnimationFrame || false;
    if (!setAnimationFrame) {
        for (var vx in vendors) {
            var v = vendors[vx];
            if (!setAnimationFrame) setAnimationFrame = window[v + 'RequestAnimationFrame'];
            if (!clearAnimationFrame) clearAnimationFrame = window[v + 'CancelAnimationFrame'] || window[v + 'CancelRequestAnimationFrame'];
        }
    }
    var clsMutationObserver = window.MutationObserver || window.WebKitMutationObserver || false;
    var _globaloptions = {
        zindex: "auto",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorcolor: "#424242",
        cursorwidth: "5px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "5px",
        scrollspeed: 60,
        mousescrollstep: 8 * 3,
        touchbehavior: false,
        hwacceleration: true,
        usetransition: true,
        boxzoom: false,
        dblclickzoom: true,
        gesturezoom: true,
        grabcursorenabled: true,
        autohidemode: true,
        background: "",
        iframeautoresize: true,
        cursorminheight: 32,
        preservenativescrolling: true,
        railoffset: false,
        bouncescroll: true,
        spacebarenabled: true,
        railpadding: {top: 0, right: 0, left: 0, bottom: 0},
        disableoutline: true,
        horizrailenabled: true,
        railalign: "right",
        railvalign: "bottom",
        enabletranslate3d: true,
        enablemousewheel: true,
        enablekeyboard: true,
        smoothscroll: true,
        sensitiverail: true,
        enablemouselockapi: true,
        cursorfixedheight: false,
        directionlockdeadzone: 6,
        hidecursordelay: 400,
        nativeparentscrolling: true,
        enablescrollonselection: true,
        overflowx: true,
        overflowy: true,
        cursordragspeed: 0.3,
        rtlmode: false,
        cursordragontouch: false,
        oneaxismousemode: "auto"
    }
    var browserdetected = false;
    var getBrowserDetection = function () {
        if (browserdetected) return browserdetected;
        var domtest = document.createElement('DIV');
        var d = {};
        d.haspointerlock = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document;
        d.isopera = ("opera" in window);
        d.isopera12 = (d.isopera && ("getUserMedia" in navigator));
        d.isoperamini = (Object.prototype.toString.call(window.operamini) === "[object OperaMini]");
        d.isie = (("all" in document) && ("attachEvent" in domtest) && !d.isopera);
        d.isieold = (d.isie && !("msInterpolationMode" in domtest.style));
        d.isie7 = d.isie && !d.isieold && (!("documentMode" in document) || (document.documentMode == 7));
        d.isie8 = d.isie && ("documentMode" in document) && (document.documentMode == 8);
        d.isie9 = d.isie && ("performance" in window) && (document.documentMode >= 9);
        d.isie10 = d.isie && ("performance" in window) && (document.documentMode >= 10);
        d.isie9mobile = /iemobile.9/i.test(navigator.userAgent);
        if (d.isie9mobile) d.isie9 = false;
        d.isie7mobile = (!d.isie9mobile && d.isie7) && /iemobile/i.test(navigator.userAgent);
        d.ismozilla = ("MozAppearance" in domtest.style);
        d.iswebkit = ("WebkitAppearance" in domtest.style);
        d.ischrome = ("chrome" in window);
        d.ischrome22 = (d.ischrome && d.haspointerlock);
        d.ischrome26 = (d.ischrome && ("transition" in domtest.style));
        d.cantouch = ("ontouchstart" in document.documentElement) || ("ontouchstart" in window);
        d.hasmstouch = (window.navigator.msPointerEnabled || false);
        d.ismac = /^mac$/i.test(navigator.platform);
        d.isios = (d.cantouch && /iphone|ipad|ipod/i.test(navigator.platform));
        d.isios4 = ((d.isios) && !("seal" in Object));
        d.isandroid = (/android/i.test(navigator.userAgent));
        d.trstyle = false;
        d.hastransform = false;
        d.hastranslate3d = false;
        d.transitionstyle = false;
        d.hastransition = false;
        d.transitionend = false;
        var check = ['transform', 'msTransform', 'webkitTransform', 'MozTransform', 'OTransform'];
        for (var a = 0; a < check.length; a++) {
            if (typeof domtest.style[check[a]] != "undefined") {
                d.trstyle = check[a];
                break;
            }
        }
        d.hastransform = (d.trstyle != false);
        if (d.hastransform) {
            domtest.style[d.trstyle] = "translate3d(1px,2px,3px)";
            d.hastranslate3d = /translate3d/.test(domtest.style[d.trstyle]);
        }
        d.transitionstyle = false;
        d.prefixstyle = '';
        d.transitionend = false;
        var check = ['transition', 'webkitTransition', 'MozTransition', 'OTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
        var prefix = ['', '-webkit-', '-moz-', '-o-', '-o', '-ms-', '-khtml-'];
        var evs = ['transitionend', 'webkitTransitionEnd', 'transitionend', 'otransitionend', 'oTransitionEnd', 'msTransitionEnd', 'KhtmlTransitionEnd'];
        for (var a = 0; a < check.length; a++) {
            if (check[a] in domtest.style) {
                d.transitionstyle = check[a];
                d.prefixstyle = prefix[a];
                d.transitionend = evs[a];
                break;
            }
        }
        if (d.ischrome26) {
            d.prefixstyle = prefix[1];
        }
        d.hastransition = (d.transitionstyle);

        function detectCursorGrab() {
            var lst = ['-moz-grab', '-webkit-grab', 'grab'];
            if ((d.ischrome && !d.ischrome22) || d.isie) lst = [];
            for (var a = 0; a < lst.length; a++) {
                var p = lst[a];
                domtest.style['cursor'] = p;
                if (domtest.style['cursor'] == p) return p;
            }
            return 'url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize';
        }

        d.cursorgrabvalue = detectCursorGrab();
        d.hasmousecapture = ("setCapture" in domtest);
        d.hasMutationObserver = (clsMutationObserver !== false);
        domtest = null;
        browserdetected = d;
        return d;
    }
    var NiceScrollClass = function (myopt, me) {
        var self = this;
        this.version = '3.5.0 BETA5';
        this.name = 'nicescroll';
        this.me = me;
        this.opt = {doc: $("body"), win: false};
        $.extend(this.opt, _globaloptions);
        this.opt.snapbackspeed = 80;
        if (myopt || false) {
            for (var a in self.opt) {
                if (typeof myopt[a] != "undefined") self.opt[a] = myopt[a];
            }
        }
        this.doc = self.opt.doc;
        this.iddoc = (this.doc && this.doc[0]) ? this.doc[0].id || '' : '';
        this.ispage = /BODY|HTML/.test((self.opt.win) ? self.opt.win[0].nodeName : this.doc[0].nodeName);
        this.haswrapper = (self.opt.win !== false);
        this.win = self.opt.win || (this.ispage ? $(window) : this.doc);
        this.docscroll = (this.ispage && !this.haswrapper) ? $(window) : this.win;
        this.body = $("body");
        this.viewport = false;
        this.isfixed = false;
        this.iframe = false;
        this.isiframe = ((this.doc[0].nodeName == 'IFRAME') && (this.win[0].nodeName == 'IFRAME'));
        this.istextarea = (this.win[0].nodeName == 'TEXTAREA');
        this.forcescreen = false;
        this.canshowonmouseevent = (self.opt.autohidemode != "scroll");
        this.onmousedown = false;
        this.onmouseup = false;
        this.onmousemove = false;
        this.onmousewheel = false;
        this.onkeypress = false;
        this.ongesturezoom = false;
        this.onclick = false;
        this.onscrollstart = false;
        this.onscrollend = false;
        this.onscrollcancel = false;
        this.onzoomin = false;
        this.onzoomout = false;
        this.view = false;
        this.page = false;
        this.scroll = {x: 0, y: 0};
        this.scrollratio = {x: 0, y: 0};
        this.cursorheight = 20;
        this.scrollvaluemax = 0;
        this.checkrtlmode = false;
        this.scrollrunning = false;
        this.scrollmom = false;
        this.observer = false;
        this.observerremover = false;
        do {
            this.id = "ascrail" + (ascrailcounter++);
        } while (document.getElementById(this.id));
        this.rail = false;
        this.cursor = false;
        this.cursorfreezed = false;
        this.selectiondrag = false;
        this.zoom = false;
        this.zoomactive = false;
        this.hasfocus = false;
        this.hasmousefocus = false;
        this.visibility = true;
        this.locked = false;
        this.hidden = false;
        this.cursoractive = true;
        this.overflowx = self.opt.overflowx;
        this.overflowy = self.opt.overflowy;
        this.nativescrollingarea = false;
        this.checkarea = 0;
        this.events = [];
        this.saved = {};
        this.delaylist = {};
        this.synclist = {};
        this.lastdeltax = 0;
        this.lastdeltay = 0;
        this.detected = getBrowserDetection();
        var cap = $.extend({}, this.detected);
        this.canhwscroll = (cap.hastransform && self.opt.hwacceleration);
        this.ishwscroll = (this.canhwscroll && self.haswrapper);
        this.istouchcapable = false;
        if (cap.cantouch && cap.ischrome && !cap.isios && !cap.isandroid) {
            this.istouchcapable = true;
            cap.cantouch = false;
        }
        if (cap.cantouch && cap.ismozilla && !cap.isios && !cap.isandroid) {
            this.istouchcapable = true;
            cap.cantouch = false;
        }
        if (!self.opt.enablemouselockapi) {
            cap.hasmousecapture = false;
            cap.haspointerlock = false;
        }
        this.delayed = function (name, fn, tm, lazy) {
            var dd = self.delaylist[name];
            var nw = (new Date()).getTime();
            if (!lazy && dd && dd.tt) return false;
            if (dd && dd.tt) clearTimeout(dd.tt);
            if (dd && dd.last + tm > nw && !dd.tt) {
                self.delaylist[name] = {
                    last: nw + tm, tt: setTimeout(function () {
                        self.delaylist[name].tt = 0;
                        fn.call();
                    }, tm)
                }
            } else if (!dd || !dd.tt) {
                self.delaylist[name] = {last: nw, tt: 0}
                setTimeout(function () {
                    fn.call();
                }, 0);
            }
        };
        this.debounced = function (name, fn, tm) {
            var dd = self.delaylist[name];
            var nw = (new Date()).getTime();
            self.delaylist[name] = fn;
            if (!dd) {
                setTimeout(function () {
                    var fn = self.delaylist[name];
                    self.delaylist[name] = false;
                    fn.call();
                }, tm);
            }
        }
        this.synched = function (name, fn) {
            function requestSync() {
                if (self.onsync) return;
                setAnimationFrame(function () {
                    self.onsync = false;
                    for (name in self.synclist) {
                        var fn = self.synclist[name];
                        if (fn) fn.call(self);
                        self.synclist[name] = false;
                    }
                });
                self.onsync = true;
            };self.synclist[name] = fn;
            requestSync();
            return name;
        };
        this.unsynched = function (name) {
            if (self.synclist[name]) self.synclist[name] = false;
        }
        this.css = function (el, pars) {
            for (var n in pars) {
                self.saved.css.push([el, n, el.css(n)]);
                el.css(n, pars[n]);
            }
        };
        this.scrollTop = function (val) {
            return (typeof val == "undefined") ? self.getScrollTop() : self.setScrollTop(val);
        };
        this.scrollLeft = function (val) {
            return (typeof val == "undefined") ? self.getScrollLeft() : self.setScrollLeft(val);
        };
        BezierClass = function (st, ed, spd, p1, p2, p3, p4) {
            this.st = st;
            this.ed = ed;
            this.spd = spd;
            this.p1 = p1 || 0;
            this.p2 = p2 || 1;
            this.p3 = p3 || 0;
            this.p4 = p4 || 1;
            this.ts = (new Date()).getTime();
            this.df = this.ed - this.st;
        };
        BezierClass.prototype = {
            B2: function (t) {
                return 3 * t * t * (1 - t)
            }, B3: function (t) {
                return 3 * t * (1 - t) * (1 - t)
            }, B4: function (t) {
                return (1 - t) * (1 - t) * (1 - t)
            }, getNow: function () {
                var nw = (new Date()).getTime();
                var pc = 1 - ((nw - this.ts) / this.spd);
                var bz = this.B2(pc) + this.B3(pc) + this.B4(pc);
                return (pc < 0) ? this.ed : this.st + Math.round(this.df * bz);
            }, update: function (ed, spd) {
                this.st = this.getNow();
                this.ed = ed;
                this.spd = spd;
                this.ts = (new Date()).getTime();
                this.df = this.ed - this.st;
                return this;
            }
        };
        if (this.ishwscroll) {
            this.doc.translate = {x: 0, y: 0, tx: "0px", ty: "0px"};
            if (cap.hastranslate3d && cap.isios) this.doc.css("-webkit-backface-visibility", "hidden");

            function getMatrixValues() {
                var tr = self.doc.css(cap.trstyle);
                if (tr && (tr.substr(0, 6) == "matrix")) {
                    return tr.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, '').split(/, +/);
                }
                return false;
            }

            this.getScrollTop = function (last) {
                if (!last) {
                    var mtx = getMatrixValues();
                    if (mtx) return (mtx.length == 16) ? -mtx[13] : -mtx[5];
                    if (self.timerscroll && self.timerscroll.bz) return self.timerscroll.bz.getNow();
                }
                return self.doc.translate.y;
            };
            this.getScrollLeft = function (last) {
                if (!last) {
                    var mtx = getMatrixValues();
                    if (mtx) return (mtx.length == 16) ? -mtx[12] : -mtx[4];
                    if (self.timerscroll && self.timerscroll.bh) return self.timerscroll.bh.getNow();
                }
                return self.doc.translate.x;
            };
            if (document.createEvent) {
                this.notifyScrollEvent = function (el) {
                    var e = document.createEvent("UIEvents");
                    e.initUIEvent("scroll", false, true, window, 1);
                    el.dispatchEvent(e);
                };
            } else if (document.fireEvent) {
                this.notifyScrollEvent = function (el) {
                    var e = document.createEventObject();
                    el.fireEvent("onscroll");
                    e.cancelBubble = true;
                };
            } else {
                this.notifyScrollEvent = function (el, add) {
                };
            }
            if (cap.hastranslate3d && self.opt.enabletranslate3d) {
                this.setScrollTop = function (val, silent) {
                    self.doc.translate.y = val;
                    self.doc.translate.ty = (val * -1) + "px";
                    self.doc.css(cap.trstyle, "translate3d(" + self.doc.translate.tx + "," + self.doc.translate.ty + ",0px)");
                    if (!silent) self.notifyScrollEvent(self.win[0]);
                };
                this.setScrollLeft = function (val, silent) {
                    self.doc.translate.x = val;
                    self.doc.translate.tx = (val * -1) + "px";
                    self.doc.css(cap.trstyle, "translate3d(" + self.doc.translate.tx + "," + self.doc.translate.ty + ",0px)");
                    if (!silent) self.notifyScrollEvent(self.win[0]);
                };
            } else {
                this.setScrollTop = function (val, silent) {
                    self.doc.translate.y = val;
                    self.doc.translate.ty = (val * -1) + "px";
                    self.doc.css(cap.trstyle, "translate(" + self.doc.translate.tx + "," + self.doc.translate.ty + ")");
                    if (!silent) self.notifyScrollEvent(self.win[0]);
                };
                this.setScrollLeft = function (val, silent) {
                    self.doc.translate.x = val;
                    self.doc.translate.tx = (val * -1) + "px";
                    self.doc.css(cap.trstyle, "translate(" + self.doc.translate.tx + "," + self.doc.translate.ty + ")");
                    if (!silent) self.notifyScrollEvent(self.win[0]);
                };
            }
        } else {
            this.getScrollTop = function () {
                return self.docscroll.scrollTop();
            };
            this.setScrollTop = function (val) {
                return self.docscroll.scrollTop(val);
            };
            this.getScrollLeft = function () {
                return self.docscroll.scrollLeft();
            };
            this.setScrollLeft = function (val) {
                return self.docscroll.scrollLeft(val);
            };
        }
        this.getTarget = function (e) {
            if (!e) return false;
            if (e.target) return e.target;
            if (e.srcElement) return e.srcElement;
            return false;
        };
        this.hasParent = function (e, id) {
            if (!e) return false;
            var el = e.target || e.srcElement || e || false;
            while (el && el.id != id) {
                el = el.parentNode || false;
            }
            return (el !== false);
        };

        function getZIndex() {
            var dom = self.win;
            if ("zIndex" in dom) return dom.zIndex();
            while (dom.length > 0) {
                if (dom[0].nodeType == 9) return false;
                var zi = dom.css('zIndex');
                if (!isNaN(zi) && zi != 0) return parseInt(zi);
                dom = dom.parent();
            }
            return false;
        };var _convertBorderWidth = {"thin": 1, "medium": 3, "thick": 5};

        function getWidthToPixel(dom, prop, chkheight) {
            var wd = dom.css(prop);
            var px = parseFloat(wd);
            if (isNaN(px)) {
                px = _convertBorderWidth[wd] || 0;
                var brd = (px == 3) ? ((chkheight) ? (self.win.outerHeight() - self.win.innerHeight()) : (self.win.outerWidth() - self.win.innerWidth())) : 1;
                if (self.isie8 && px) px += 1;
                return (brd) ? px : 0;
            }
            return px;
        };this.getOffset = function () {
            if (self.isfixed) return {top: parseFloat(self.win.css('top')), left: parseFloat(self.win.css('left'))};
            if (!self.viewport) return self.win.offset();
            var ww = self.win.offset();
            var vp = self.viewport.offset();
            return {
                top: ww.top - vp.top + self.viewport.scrollTop(),
                left: ww.left - vp.left + self.viewport.scrollLeft()
            };
        };
        this.updateScrollBar = function (len) {
            if (self.ishwscroll) {
                self.rail.css({height: self.win.innerHeight()});
                if (self.railh) self.railh.css({width: self.win.innerWidth()});
            } else {
                var wpos = self.getOffset();
                var pos = {top: wpos.top, left: wpos.left};
                pos.top += getWidthToPixel(self.win, 'border-top-width', true);
                var brd = (self.win.outerWidth() - self.win.innerWidth()) / 2;
                pos.left += (self.rail.align) ? self.win.outerWidth() - getWidthToPixel(self.win, 'border-right-width') - self.rail.width : getWidthToPixel(self.win, 'border-left-width');
                var off = self.opt.railoffset;
                if (off) {
                    if (off.top) pos.top += off.top;
                    if (self.rail.align && off.left) pos.left += off.left;
                }
                if (!self.locked) self.rail.css({
                    top: pos.top,
                    left: pos.left,
                    height: (len) ? len.h : self.win.innerHeight()
                });
                if (self.zoom) {
                    self.zoom.css({
                        top: pos.top + 1,
                        left: (self.rail.align == 1) ? pos.left - 20 : pos.left + self.rail.width + 4
                    });
                }
                if (self.railh && !self.locked) {
                    var pos = {top: wpos.top, left: wpos.left};
                    var y = (self.railh.align) ? pos.top + getWidthToPixel(self.win, 'border-top-width', true) + self.win.innerHeight() - self.railh.height : pos.top + getWidthToPixel(self.win, 'border-top-width', true);
                    var x = pos.left + getWidthToPixel(self.win, 'border-left-width');
                    self.railh.css({top: y, left: x, width: self.railh.width});
                }
            }
        };
        this.doRailClick = function (e, dbl, hr) {
            var fn, pg, cur, pos;
            if (self.locked) return;
            self.cancelEvent(e);
            if (dbl) {
                fn = (hr) ? self.doScrollLeft : self.doScrollTop;
                cur = (hr) ? ((e.pageX - self.railh.offset().left - (self.cursorwidth / 2)) * self.scrollratio.x) : ((e.pageY - self.rail.offset().top - (self.cursorheight / 2)) * self.scrollratio.y);
                fn(cur);
            } else {
                fn = (hr) ? self.doScrollLeftBy : self.doScrollBy;
                cur = (hr) ? self.scroll.x : self.scroll.y;
                pos = (hr) ? e.pageX - self.railh.offset().left : e.pageY - self.rail.offset().top;
                pg = (hr) ? self.view.w : self.view.h;
                (cur >= pos) ? fn(pg) : fn(-pg);
            }
        }
        self.hasanimationframe = (setAnimationFrame);
        self.hascancelanimationframe = (clearAnimationFrame);
        if (!self.hasanimationframe) {
            setAnimationFrame = function (fn) {
                return setTimeout(fn, 15 - Math.floor((+new Date) / 1000) % 16)
            };
            clearAnimationFrame = clearInterval;
        } else if (!self.hascancelanimationframe) clearAnimationFrame = function () {
            self.cancelAnimationFrame = true
        };
        this.init = function () {
            self.saved.css = [];
            if (cap.isie7mobile) return true;
            if (cap.isoperamini) return true;
            if (cap.hasmstouch) self.css((self.ispage) ? $("html") : self.win, {'-ms-touch-action': 'none'});
            self.zindex = "auto";
            if (!self.ispage && self.opt.zindex == "auto") {
                self.zindex = getZIndex() || "auto";
            } else {
                self.zindex = self.opt.zindex;
            }
            if (!self.ispage && self.zindex != "auto") {
                if (self.zindex > globalmaxzindex) globalmaxzindex = self.zindex;
            }
            if (self.isie && self.zindex == 0 && self.opt.zindex == "auto") {
                self.zindex = "auto";
            }
            if (!self.ispage || (!cap.cantouch && !cap.isieold && !cap.isie9mobile)) {
                var cont = self.docscroll;
                if (self.ispage) cont = (self.haswrapper) ? self.win : self.doc;
                if (!cap.isie9mobile) self.css(cont, {'overflow-y': 'hidden'});
                if (self.ispage && cap.isie7) {
                    if (self.doc[0].nodeName == 'BODY') self.css($("html"), {'overflow-y': 'hidden'}); else if (self.doc[0].nodeName == 'HTML') self.css($("body"), {'overflow-y': 'hidden'});
                }
                if (cap.isios && !self.ispage && !self.haswrapper) self.css($("body"), {"-webkit-overflow-scrolling": "touch"});
                var cursor = $(document.createElement('div'));
                cursor.css({
                    position: "relative",
                    top: 0,
                    "float": "right",
                    width: self.opt.cursorwidth,
                    height: "0px",
                    'background-color': self.opt.cursorcolor,
                    border: self.opt.cursorborder,
                    'background-clip': 'padding-box',
                    '-webkit-border-radius': self.opt.cursorborderradius,
                    '-moz-border-radius': self.opt.cursorborderradius,
                    'border-radius': self.opt.cursorborderradius
                });
                cursor.hborder = parseFloat(cursor.outerHeight() - cursor.innerHeight());
                self.cursor = cursor;
                var rail = $(document.createElement('div'));
                rail.attr('id', self.id);
                rail.addClass('nicescroll-rails');
                var v, a, kp = ["left", "right"];
                for (var n in kp) {
                    a = kp[n];
                    v = self.opt.railpadding[a];
                    (v) ? rail.css("padding-" + a, v + "px") : self.opt.railpadding[a] = 0;
                }
                rail.append(cursor);
                rail.width = Math.max(parseFloat(self.opt.cursorwidth), cursor.outerWidth()) + self.opt.railpadding['left'] + self.opt.railpadding['right'];
                rail.css({
                    width: rail.width + "px",
                    'zIndex': self.zindex,
                    "background": self.opt.background,
                    cursor: "default"
                });
                rail.visibility = true;
                rail.scrollable = true;
                rail.align = (self.opt.railalign == "left") ? 0 : 1;
                self.rail = rail;
                self.rail.drag = false;
                var zoom = false;
                if (self.opt.boxzoom && !self.ispage && !cap.isieold) {
                    zoom = document.createElement('div');
                    self.bind(zoom, "click", self.doZoom);
                    self.zoom = $(zoom);
                    self.zoom.css({
                        "cursor": "pointer",
                        'z-index': self.zindex,
                        'backgroundImage': 'url(' + scriptpath + 'zoomico.png)',
                        'height': 18,
                        'width': 18,
                        'backgroundPosition': '0px 0px'
                    });
                    if (self.opt.dblclickzoom) self.bind(self.win, "dblclick", self.doZoom);
                    if (cap.cantouch && self.opt.gesturezoom) {
                        self.ongesturezoom = function (e) {
                            if (e.scale > 1.5) self.doZoomIn(e);
                            if (e.scale < 0.8) self.doZoomOut(e);
                            return self.cancelEvent(e);
                        };
                        self.bind(self.win, "gestureend", self.ongesturezoom);
                    }
                }
                self.railh = false;
                if (self.opt.horizrailenabled) {
                    self.css(cont, {'overflow-x': 'hidden'});
                    var cursor = $(document.createElement('div'));
                    cursor.css({
                        position: "relative",
                        top: 0,
                        height: self.opt.cursorwidth,
                        width: "0px",
                        'background-color': self.opt.cursorcolor,
                        border: self.opt.cursorborder,
                        'background-clip': 'padding-box',
                        '-webkit-border-radius': self.opt.cursorborderradius,
                        '-moz-border-radius': self.opt.cursorborderradius,
                        'border-radius': self.opt.cursorborderradius
                    });
                    cursor.wborder = parseFloat(cursor.outerWidth() - cursor.innerWidth());
                    self.cursorh = cursor;
                    var railh = $(document.createElement('div'));
                    railh.attr('id', self.id + '-hr');
                    railh.addClass('nicescroll-rails');
                    railh.height = Math.max(parseFloat(self.opt.cursorwidth), cursor.outerHeight());
                    railh.css({height: railh.height + "px", 'zIndex': self.zindex, "background": self.opt.background});
                    railh.append(cursor);
                    railh.visibility = true;
                    railh.scrollable = true;
                    railh.align = (self.opt.railvalign == "top") ? 0 : 1;
                    self.railh = railh;
                    self.railh.drag = false;
                }
                if (self.ispage) {
                    rail.css({position: "fixed", top: "0px", height: "100%"});
                    (rail.align) ? rail.css({right: "0px"}) : rail.css({left: "0px"});
                    self.body.append(rail);
                    if (self.railh) {
                        railh.css({position: "fixed", left: "0px", width: "100%"});
                        (railh.align) ? railh.css({bottom: "0px"}) : railh.css({top: "0px"});
                        self.body.append(railh);
                    }
                } else {
                    if (self.ishwscroll) {
                        if (self.win.css('position') == 'static') self.css(self.win, {'position': 'relative'});
                        var bd = (self.win[0].nodeName == 'HTML') ? self.body : self.win;
                        if (self.zoom) {
                            self.zoom.css({position: "absolute", top: 1, right: 0, "margin-right": rail.width + 4});
                            bd.append(self.zoom);
                        }
                        rail.css({position: "absolute", top: 0});
                        (rail.align) ? rail.css({right: 0}) : rail.css({left: 0});
                        bd.append(rail);
                        if (railh) {
                            railh.css({position: "absolute", left: 0, bottom: 0});
                            (railh.align) ? railh.css({bottom: 0}) : railh.css({top: 0});
                            bd.append(railh);
                        }
                    } else {
                        self.isfixed = (self.win.css("position") == "fixed");
                        var rlpos = (self.isfixed) ? "fixed" : "absolute";
                        if (!self.isfixed) self.viewport = self.getViewport(self.win[0]);
                        if (self.viewport) {
                            self.body = self.viewport;
                            if ((/relative|absolute/.test(self.viewport.css("position"))) == false) self.css(self.viewport, {"position": "relative"});
                        }
                        rail.css({position: rlpos});
                        if (self.zoom) self.zoom.css({position: rlpos});
                        self.updateScrollBar();
                        self.body.append(rail);
                        if (self.zoom) self.body.append(self.zoom);
                        if (self.railh) {
                            railh.css({position: rlpos});
                            self.body.append(railh);
                        }
                    }
                    if (cap.isios) self.css(self.win, {
                        '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
                        '-webkit-touch-callout': 'none'
                    });
                    if (cap.isie && self.opt.disableoutline) self.win.attr("hideFocus", "true");
                    if (cap.iswebkit && self.opt.disableoutline) self.win.css({"outline": "none"});
                }
                if (self.opt.autohidemode === false) {
                    self.autohidedom = false;
                    self.rail.css({opacity: self.opt.cursoropacitymax});
                    if (self.railh) self.railh.css({opacity: self.opt.cursoropacitymax});
                } else if (self.opt.autohidemode === true) {
                    self.autohidedom = $().add(self.rail);
                    if (cap.isie8) self.autohidedom = self.autohidedom.add(self.cursor);
                    if (self.railh) self.autohidedom = self.autohidedom.add(self.railh);
                    if (self.railh && cap.isie8) self.autohidedom = self.autohidedom.add(self.cursorh);
                } else if (self.opt.autohidemode == "scroll") {
                    self.autohidedom = $().add(self.rail);
                    if (self.railh) self.autohidedom = self.autohidedom.add(self.railh);
                } else if (self.opt.autohidemode == "cursor") {
                    self.autohidedom = $().add(self.cursor);
                    if (self.railh) self.autohidedom = self.autohidedom.add(self.cursorh);
                } else if (self.opt.autohidemode == "hidden") {
                    self.autohidedom = false;
                    self.hide();
                    self.locked = false;
                }
                if (cap.isie9mobile) {
                    self.scrollmom = new ScrollMomentumClass2D(self);
                    self.onmangotouch = function (e) {
                        var py = self.getScrollTop();
                        var px = self.getScrollLeft();
                        if ((py == self.scrollmom.lastscrolly) && (px == self.scrollmom.lastscrollx)) return true;
                        var dfy = py - self.mangotouch.sy;
                        var dfx = px - self.mangotouch.sx;
                        var df = Math.round(Math.sqrt(Math.pow(dfx, 2) + Math.pow(dfy, 2)));
                        if (df == 0) return;
                        var dry = (dfy < 0) ? -1 : 1;
                        var drx = (dfx < 0) ? -1 : 1;
                        var tm = +new Date();
                        if (self.mangotouch.lazy) clearTimeout(self.mangotouch.lazy);
                        if (((tm - self.mangotouch.tm) > 80) || (self.mangotouch.dry != dry) || (self.mangotouch.drx != drx)) {
                            self.scrollmom.stop();
                            self.scrollmom.reset(px, py);
                            self.mangotouch.sy = py;
                            self.mangotouch.ly = py;
                            self.mangotouch.sx = px;
                            self.mangotouch.lx = px;
                            self.mangotouch.dry = dry;
                            self.mangotouch.drx = drx;
                            self.mangotouch.tm = tm;
                        } else {
                            self.scrollmom.stop();
                            self.scrollmom.update(self.mangotouch.sx - dfx, self.mangotouch.sy - dfy);
                            var gap = tm - self.mangotouch.tm;
                            self.mangotouch.tm = tm;
                            var ds = Math.max(Math.abs(self.mangotouch.ly - py), Math.abs(self.mangotouch.lx - px));
                            self.mangotouch.ly = py;
                            self.mangotouch.lx = px;
                            if (ds > 2) {
                                self.mangotouch.lazy = setTimeout(function () {
                                    self.mangotouch.lazy = false;
                                    self.mangotouch.dry = 0;
                                    self.mangotouch.drx = 0;
                                    self.mangotouch.tm = 0;
                                    self.scrollmom.doMomentum(30);
                                }, 100);
                            }
                        }
                    }
                    var top = self.getScrollTop();
                    var lef = self.getScrollLeft();
                    self.mangotouch = {sy: top, ly: top, dry: 0, sx: lef, lx: lef, drx: 0, lazy: false, tm: 0};
                    self.bind(self.docscroll, "scroll", self.onmangotouch);
                } else {
                    if (cap.cantouch || self.istouchcapable || self.opt.touchbehavior || cap.hasmstouch) {
                        self.scrollmom = new ScrollMomentumClass2D(self);
                        self.ontouchstart = function (e) {
                            if (e.pointerType && e.pointerType != 2) return false;
                            if (!self.locked) {
                                if (cap.hasmstouch) {
                                    var tg = (e.target) ? e.target : false;
                                    while (tg) {
                                        var nc = $(tg).getNiceScroll();
                                        if ((nc.length > 0) && (nc[0].me == self.me)) break;
                                        if (nc.length > 0) return false;
                                        if ((tg.nodeName == 'DIV') && (tg.id == self.id)) break;
                                        tg = (tg.parentNode) ? tg.parentNode : false;
                                    }
                                }
                                self.cancelScroll();
                                var tg = self.getTarget(e);
                                if (tg) {
                                    var skp = (/INPUT/i.test(tg.nodeName)) && (/range/i.test(tg.type));
                                    if (skp) return self.stopPropagation(e);
                                }
                                if (!("clientX" in e) && ("changedTouches" in e)) {
                                    e.clientX = e.changedTouches[0].clientX;
                                    e.clientY = e.changedTouches[0].clientY;
                                }
                                if (self.forcescreen) {
                                    var le = e;
                                    var e = {"original": (e.original) ? e.original : e};
                                    e.clientX = le.screenX;
                                    e.clientY = le.screenY;
                                }
                                self.rail.drag = {
                                    x: e.clientX,
                                    y: e.clientY,
                                    sx: self.scroll.x,
                                    sy: self.scroll.y,
                                    st: self.getScrollTop(),
                                    sl: self.getScrollLeft(),
                                    pt: 2,
                                    dl: false
                                };
                                if (self.ispage || !self.opt.directionlockdeadzone) {
                                    self.rail.drag.dl = "f";
                                } else {
                                    var view = {w: $(window).width(), h: $(window).height()};
                                    var page = {
                                        w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                                        h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                                    }
                                    var maxh = Math.max(0, page.h - view.h);
                                    var maxw = Math.max(0, page.w - view.w);
                                    if (!self.rail.scrollable && self.railh.scrollable) self.rail.drag.ck = (maxh > 0) ? "v" : false; else if (self.rail.scrollable && !self.railh.scrollable) self.rail.drag.ck = (maxw > 0) ? "h" : false; else self.rail.drag.ck = false;
                                    if (!self.rail.drag.ck) self.rail.drag.dl = "f";
                                }
                                if (self.opt.touchbehavior && self.isiframe && cap.isie) {
                                    var wp = self.win.position();
                                    self.rail.drag.x += wp.left;
                                    self.rail.drag.y += wp.top;
                                }
                                self.hasmoving = false;
                                self.lastmouseup = false;
                                self.scrollmom.reset(e.clientX, e.clientY);
                                if (!cap.cantouch && !this.istouchcapable && !cap.hasmstouch) {
                                    var ip = (tg) ? /INPUT|SELECT|TEXTAREA/i.test(tg.nodeName) : false;
                                    if (!ip) {
                                        if (!self.ispage && cap.hasmousecapture) tg.setCapture();
                                        return (self.opt.touchbehavior) ? self.cancelEvent(e) : self.stopPropagation(e);
                                    }
                                    if (/SUBMIT|CANCEL|BUTTON/i.test($(tg).attr('type'))) {
                                        pc = {"tg": tg, "click": false};
                                        self.preventclick = pc;
                                    }
                                }
                            }
                        };
                        self.ontouchend = function (e) {
                            if (e.pointerType && e.pointerType != 2) return false;
                            if (self.rail.drag && (self.rail.drag.pt == 2)) {
                                self.scrollmom.doMomentum();
                                self.rail.drag = false;
                                if (self.hasmoving) {
                                    self.hasmoving = false;
                                    self.lastmouseup = true;
                                    self.hideCursor();
                                    if (cap.hasmousecapture) document.releaseCapture();
                                    if (!cap.cantouch) return self.cancelEvent(e);
                                }
                            }
                        };
                        var moveneedoffset = (self.opt.touchbehavior && self.isiframe && !cap.hasmousecapture);
                        self.ontouchmove = function (e, byiframe) {
                            if (e.pointerType && e.pointerType != 2) return false;
                            if (self.rail.drag && (self.rail.drag.pt == 2)) {
                                if (cap.cantouch && (typeof e.original == "undefined")) return true;
                                self.hasmoving = true;
                                if (self.preventclick && !self.preventclick.click) {
                                    self.preventclick.click = self.preventclick.tg.onclick || false;
                                    self.preventclick.tg.onclick = self.onpreventclick;
                                }
                                var ev = $.extend({"original": e}, e);
                                e = ev;
                                if (("changedTouches" in e)) {
                                    e.clientX = e.changedTouches[0].clientX;
                                    e.clientY = e.changedTouches[0].clientY;
                                }
                                if (self.forcescreen) {
                                    var le = e;
                                    var e = {"original": (e.original) ? e.original : e};
                                    e.clientX = le.screenX;
                                    e.clientY = le.screenY;
                                }
                                var ofx = ofy = 0;
                                if (moveneedoffset && !byiframe) {
                                    var wp = self.win.position();
                                    ofx = -wp.left;
                                    ofy = -wp.top;
                                }
                                var fy = e.clientY + ofy;
                                var my = (fy - self.rail.drag.y);
                                var fx = e.clientX + ofx;
                                var mx = (fx - self.rail.drag.x);
                                var ny = self.rail.drag.st - my;
                                if (self.ishwscroll && self.opt.bouncescroll) {
                                    if (ny < 0) {
                                        ny = Math.round(ny / 2);
                                    } else if (ny > self.page.maxh) {
                                        ny = self.page.maxh + Math.round((ny - self.page.maxh) / 2);
                                    }
                                } else {
                                    if (ny < 0) {
                                        ny = 0;
                                        fy = 0
                                    }
                                    if (ny > self.page.maxh) {
                                        ny = self.page.maxh;
                                        fy = 0
                                    }
                                }
                                if (self.railh && self.railh.scrollable) {
                                    var nx = self.rail.drag.sl - mx;
                                    if (self.ishwscroll && self.opt.bouncescroll) {
                                        if (nx < 0) {
                                            nx = Math.round(nx / 2);
                                        } else if (nx > self.page.maxw) {
                                            nx = self.page.maxw + Math.round((nx - self.page.maxw) / 2);
                                        }
                                    } else {
                                        if (nx < 0) {
                                            nx = 0;
                                            fx = 0
                                        }
                                        if (nx > self.page.maxw) {
                                            nx = self.page.maxw;
                                            fx = 0
                                        }
                                    }
                                }
                                var grabbed = false;
                                if (self.rail.drag.dl) {
                                    grabbed = true;
                                    if (self.rail.drag.dl == "v") nx = self.rail.drag.sl; else if (self.rail.drag.dl == "h") ny = self.rail.drag.st;
                                } else {
                                    var ay = Math.abs(my);
                                    var ax = Math.abs(mx);
                                    var dz = self.opt.directionlockdeadzone;
                                    if (self.rail.drag.ck == "v") {
                                        if (ay > dz && (ax <= (ay * 0.3))) {
                                            self.rail.drag = false;
                                            return true;
                                        } else if (ax > dz) {
                                            self.rail.drag.dl = "f";
                                            $("body").scrollTop($("body").scrollTop());
                                        }
                                    } else if (self.rail.drag.ck == "h") {
                                        if (ax > dz && (ay <= (ax * 0.3))) {
                                            self.rail.drag = false;
                                            return true;
                                        } else if (ay > dz) {
                                            self.rail.drag.dl = "f";
                                            $("body").scrollLeft($("body").scrollLeft());
                                        }
                                    }
                                }
                                self.synched("touchmove", function () {
                                    if (self.rail.drag && (self.rail.drag.pt == 2)) {
                                        if (self.prepareTransition) self.prepareTransition(0);
                                        if (self.rail.scrollable) self.setScrollTop(ny);
                                        self.scrollmom.update(fx, fy);
                                        if (self.railh && self.railh.scrollable) {
                                            self.setScrollLeft(nx);
                                            self.showCursor(ny, nx);
                                        } else {
                                            self.showCursor(ny);
                                        }
                                        if (cap.isie10) document.selection.clear();
                                    }
                                });
                                if (cap.ischrome && self.istouchcapable) grabbed = false;
                                if (grabbed) return self.cancelEvent(e);
                            }
                        };
                    }
                    self.onmousedown = function (e, hronly) {
                        if (self.rail.drag && self.rail.drag.pt != 1) return;
                        if (self.locked) return self.cancelEvent(e);
                        self.cancelScroll();
                        self.rail.drag = {
                            x: e.clientX,
                            y: e.clientY,
                            sx: self.scroll.x,
                            sy: self.scroll.y,
                            pt: 1,
                            hr: (!!hronly)
                        };
                        var tg = self.getTarget(e);
                        if (!self.ispage && cap.hasmousecapture) tg.setCapture();
                        if (self.isiframe && !cap.hasmousecapture) {
                            self.saved["csspointerevents"] = self.doc.css("pointer-events");
                            self.css(self.doc, {"pointer-events": "none"});
                        }
                        return self.cancelEvent(e);
                    };
                    self.onmouseup = function (e) {
                        if (self.rail.drag) {
                            if (cap.hasmousecapture) document.releaseCapture();
                            if (self.isiframe && !cap.hasmousecapture) self.doc.css("pointer-events", self.saved["csspointerevents"]);
                            if (self.rail.drag.pt != 1) return;
                            self.rail.drag = false;
                            return self.cancelEvent(e);
                        }
                    };
                    self.onmousemove = function (e) {
                        if (self.rail.drag) {
                            if (self.rail.drag.pt != 1) return;
                            if (cap.ischrome && e.which == 0) return self.onmouseup(e);
                            self.cursorfreezed = true;
                            if (self.rail.drag.hr) {
                                self.scroll.x = self.rail.drag.sx + (e.clientX - self.rail.drag.x);
                                if (self.scroll.x < 0) self.scroll.x = 0;
                                var mw = self.scrollvaluemaxw;
                                if (self.scroll.x > mw) self.scroll.x = mw;
                            } else {
                                self.scroll.y = self.rail.drag.sy + (e.clientY - self.rail.drag.y);
                                if (self.scroll.y < 0) self.scroll.y = 0;
                                var my = self.scrollvaluemax;
                                if (self.scroll.y > my) self.scroll.y = my;
                            }
                            self.synched('mousemove', function () {
                                if (self.rail.drag && (self.rail.drag.pt == 1)) {
                                    self.showCursor();
                                    if (self.rail.drag.hr) self.doScrollLeft(Math.round(self.scroll.x * self.scrollratio.x), self.opt.cursordragspeed); else self.doScrollTop(Math.round(self.scroll.y * self.scrollratio.y), self.opt.cursordragspeed);
                                }
                            });
                            return self.cancelEvent(e);
                        }
                    };
                    if (cap.cantouch || self.opt.touchbehavior) {
                        self.onpreventclick = function (e) {
                            if (self.preventclick) {
                                self.preventclick.tg.onclick = self.preventclick.click;
                                self.preventclick = false;
                                return self.cancelEvent(e);
                            }
                        }
                        self.bind(self.win, "mousedown", self.ontouchstart);
                        self.onclick = (cap.isios) ? false : function (e) {
                            if (self.lastmouseup) {
                                self.lastmouseup = false;
                                return self.cancelEvent(e);
                            } else {
                                return true;
                            }
                        };
                        if (self.opt.grabcursorenabled && cap.cursorgrabvalue) {
                            self.css((self.ispage) ? self.doc : self.win, {'cursor': cap.cursorgrabvalue});
                            self.css(self.rail, {'cursor': cap.cursorgrabvalue});
                        }
                    } else {
                        function checkSelectionScroll(e) {
                            if (!self.selectiondrag) return;
                            if (e) {
                                var ww = self.win.outerHeight();
                                var df = (e.pageY - self.selectiondrag.top);
                                if (df > 0 && df < ww) df = 0;
                                if (df >= ww) df -= ww;
                                self.selectiondrag.df = df;
                            }
                            if (self.selectiondrag.df == 0) return;
                            var rt = -Math.floor(self.selectiondrag.df / 6) * 2;
                            self.doScrollBy(rt);
                            self.debounced("doselectionscroll", function () {
                                checkSelectionScroll()
                            }, 50);
                        }

                        if ("getSelection" in document) {
                            self.hasTextSelected = function () {
                                return (document.getSelection().rangeCount > 0);
                            }
                        } else if ("selection" in document) {
                            self.hasTextSelected = function () {
                                return (document.selection.type != "None");
                            }
                        } else {
                            self.hasTextSelected = function () {
                                return false;
                            }
                        }
                        self.onselectionstart = function (e) {
                            if (self.ispage) return;
                            self.selectiondrag = self.win.offset();
                        }
                        self.onselectionend = function (e) {
                            self.selectiondrag = false;
                        }
                        self.onselectiondrag = function (e) {
                            if (!self.selectiondrag) return;
                            if (self.hasTextSelected()) self.debounced("selectionscroll", function () {
                                checkSelectionScroll(e)
                            }, 250);
                        }
                    }
                    if (cap.hasmstouch) {
                        self.css(self.rail, {'-ms-touch-action': 'none'});
                        self.css(self.cursor, {'-ms-touch-action': 'none'});
                        self.bind(self.win, "MSPointerDown", self.ontouchstart);
                        self.bind(document, "MSPointerUp", self.ontouchend);
                        self.bind(document, "MSPointerMove", self.ontouchmove);
                        self.bind(self.cursor, "MSGestureHold", function (e) {
                            e.preventDefault()
                        });
                        self.bind(self.cursor, "contextmenu", function (e) {
                            e.preventDefault()
                        });
                    }
                    if (this.istouchcapable) {
                        self.bind(self.win, "touchstart", self.ontouchstart);
                        self.bind(document, "touchend", self.ontouchend);
                        self.bind(document, "touchcancel", self.ontouchend);
                        self.bind(document, "touchmove", self.ontouchmove);
                    }
                    self.bind(self.cursor, "mousedown", self.onmousedown);
                    self.bind(self.cursor, "mouseup", self.onmouseup);
                    if (self.railh) {
                        self.bind(self.cursorh, "mousedown", function (e) {
                            self.onmousedown(e, true)
                        });
                        self.bind(self.cursorh, "mouseup", function (e) {
                            if (self.rail.drag && self.rail.drag.pt == 2) return;
                            self.rail.drag = false;
                            self.hasmoving = false;
                            self.hideCursor();
                            if (cap.hasmousecapture) document.releaseCapture();
                            return self.cancelEvent(e);
                        });
                    }
                    if (self.opt.cursordragontouch || !cap.cantouch && !self.opt.touchbehavior) {
                        self.rail.css({"cursor": "default"});
                        self.railh && self.railh.css({"cursor": "default"});
                        self.jqbind(self.rail, "mouseenter", function () {
                            if (self.canshowonmouseevent) self.showCursor();
                            self.rail.active = true;
                        });
                        self.jqbind(self.rail, "mouseleave", function () {
                            self.rail.active = false;
                            if (!self.rail.drag) self.hideCursor();
                        });
                        if (self.opt.sensitiverail) {
                            self.bind(self.rail, "click", function (e) {
                                self.doRailClick(e, false, false)
                            });
                            self.bind(self.rail, "dblclick", function (e) {
                                self.doRailClick(e, true, false)
                            });
                            self.bind(self.cursor, "click", function (e) {
                                self.cancelEvent(e)
                            });
                            self.bind(self.cursor, "dblclick", function (e) {
                                self.cancelEvent(e)
                            });
                        }
                        if (self.railh) {
                            self.jqbind(self.railh, "mouseenter", function () {
                                if (self.canshowonmouseevent) self.showCursor();
                                self.rail.active = true;
                            });
                            self.jqbind(self.railh, "mouseleave", function () {
                                self.rail.active = false;
                                if (!self.rail.drag) self.hideCursor();
                            });
                            if (self.opt.sensitiverail) {
                                self.bind(self.railh, "click", function (e) {
                                    self.doRailClick(e, false, true)
                                });
                                self.bind(self.railh, "dblclick", function (e) {
                                    self.doRailClick(e, true, true)
                                });
                                self.bind(self.cursorh, "click", function (e) {
                                    self.cancelEvent(e)
                                });
                                self.bind(self.cursorh, "dblclick", function (e) {
                                    self.cancelEvent(e)
                                });
                            }
                        }
                    }
                    if (!cap.cantouch && !self.opt.touchbehavior) {
                        self.bind((cap.hasmousecapture) ? self.win : document, "mouseup", self.onmouseup);
                        self.bind(document, "mousemove", self.onmousemove);
                        if (self.onclick) self.bind(document, "click", self.onclick);
                        if (!self.ispage && self.opt.enablescrollonselection) {
                            self.bind(self.win[0], "mousedown", self.onselectionstart);
                            self.bind(document, "mouseup", self.onselectionend);
                            self.bind(self.cursor, "mouseup", self.onselectionend);
                            if (self.cursorh) self.bind(self.cursorh, "mouseup", self.onselectionend);
                            self.bind(document, "mousemove", self.onselectiondrag);
                        }
                        if (self.zoom) {
                            self.jqbind(self.zoom, "mouseenter", function () {
                                if (self.canshowonmouseevent) self.showCursor();
                                self.rail.active = true;
                            });
                            self.jqbind(self.zoom, "mouseleave", function () {
                                self.rail.active = false;
                                if (!self.rail.drag) self.hideCursor();
                            });
                        }
                    } else {
                        self.bind((cap.hasmousecapture) ? self.win : document, "mouseup", self.ontouchend);
                        self.bind(document, "mousemove", self.ontouchmove);
                        if (self.onclick) self.bind(document, "click", self.onclick);
                        if (self.opt.cursordragontouch) {
                            self.bind(self.cursor, "mousedown", self.onmousedown);
                            self.bind(self.cursor, "mousemove", self.onmousemove);
                            self.cursorh && self.bind(self.cursorh, "mousedown", self.onmousedown);
                            self.cursorh && self.bind(self.cursorh, "mousemove", self.onmousemove);
                        }
                    }
                    if (self.opt.enablemousewheel) {
                        if (!self.isiframe) self.bind((cap.isie && self.ispage) ? document : self.win, "mousewheel", self.onmousewheel);
                        self.bind(self.rail, "mousewheel", self.onmousewheel);
                        if (self.railh) self.bind(self.railh, "mousewheel", self.onmousewheelhr);
                    }
                    if (!self.ispage && !cap.cantouch && !(/HTML|BODY/.test(self.win[0].nodeName))) {
                        if (!self.win.attr("tabindex")) self.win.attr({"tabindex": tabindexcounter++});
                        self.jqbind(self.win, "focus", function (e) {
                            domfocus = (self.getTarget(e)).id || true;
                            self.hasfocus = true;
                            if (self.canshowonmouseevent) self.noticeCursor();
                        });
                        self.jqbind(self.win, "blur", function (e) {
                            domfocus = false;
                            self.hasfocus = false;
                        });
                        self.jqbind(self.win, "mouseenter", function (e) {
                            mousefocus = (self.getTarget(e)).id || true;
                            self.hasmousefocus = true;
                            if (self.canshowonmouseevent) self.noticeCursor();
                        });
                        self.jqbind(self.win, "mouseleave", function () {
                            mousefocus = false;
                            self.hasmousefocus = false;
                        });
                    }
                    ;
                }
                self.onkeypress = function (e) {
                    if (self.locked && self.page.maxh == 0) return true;
                    e = (e) ? e : window.e;
                    var tg = self.getTarget(e);
                    if (tg && /INPUT|TEXTAREA|SELECT|OPTION/.test(tg.nodeName)) {
                        var tp = tg.getAttribute('type') || tg.type || false;
                        if ((!tp) || !(/submit|button|cancel/i.tp)) return true;
                    }
                    if (self.hasfocus || (self.hasmousefocus && !domfocus) || (self.ispage && !domfocus && !mousefocus)) {
                        var key = e.keyCode;
                        if (self.locked && key != 27) return self.cancelEvent(e);
                        var ctrl = e.ctrlKey || false;
                        var shift = e.shiftKey || false;
                        var ret = false;
                        switch (key) {
                            case 38:
                            case 63233:
                                self.doScrollBy(24 * 3);
                                ret = true;
                                break;
                            case 40:
                            case 63235:
                                self.doScrollBy(-24 * 3);
                                ret = true;
                                break;
                            case 37:
                            case 63232:
                                if (self.railh) {
                                    (ctrl) ? self.doScrollLeft(0) : self.doScrollLeftBy(24 * 3);
                                    ret = true;
                                }
                                break;
                            case 39:
                            case 63234:
                                if (self.railh) {
                                    (ctrl) ? self.doScrollLeft(self.page.maxw) : self.doScrollLeftBy(-24 * 3);
                                    ret = true;
                                }
                                break;
                            case 33:
                            case 63276:
                                self.doScrollBy(self.view.h);
                                ret = true;
                                break;
                            case 34:
                            case 63277:
                                self.doScrollBy(-self.view.h);
                                ret = true;
                                break;
                            case 36:
                            case 63273:
                                (self.railh && ctrl) ? self.doScrollPos(0, 0) : self.doScrollTo(0);
                                ret = true;
                                break;
                            case 35:
                            case 63275:
                                (self.railh && ctrl) ? self.doScrollPos(self.page.maxw, self.page.maxh) : self.doScrollTo(self.page.maxh);
                                ret = true;
                                break;
                            case 32:
                                if (self.opt.spacebarenabled) {
                                    (shift) ? self.doScrollBy(self.view.h) : self.doScrollBy(-self.view.h);
                                    ret = true;
                                }
                                break;
                            case 27:
                                if (self.zoomactive) {
                                    self.doZoom();
                                    ret = true;
                                }
                                break;
                        }
                        if (ret) return self.cancelEvent(e);
                    }
                };
                if (self.opt.enablekeyboard) self.bind(document, (cap.isopera && !cap.isopera12) ? "keypress" : "keydown", self.onkeypress);
                self.bind(window, 'resize', self.lazyResize);
                self.bind(window, 'orientationchange', self.lazyResize);
                self.bind(window, "load", self.lazyResize);
                if (cap.ischrome && !self.ispage && !self.haswrapper) {
                    var tmp = self.win.attr("style");
                    var ww = parseFloat(self.win.css("width")) + 1;
                    self.win.css('width', ww);
                    self.synched("chromefix", function () {
                        self.win.attr("style", tmp)
                    });
                }
                self.onAttributeChange = function (e) {
                    self.lazyResize(250);
                }
                if (!self.ispage && !self.haswrapper) {
                    if (clsMutationObserver !== false) {
                        self.observer = new clsMutationObserver(function (mutations) {
                            mutations.forEach(self.onAttributeChange);
                        });
                        self.observer.observe(self.win[0], {
                            childList: true,
                            characterData: false,
                            attributes: true,
                            subtree: false
                        });
                        self.observerremover = new clsMutationObserver(function (mutations) {
                            mutations.forEach(function (mo) {
                                if (mo.removedNodes.length > 0) {
                                    for (var dd in mo.removedNodes) {
                                        if (mo.removedNodes[dd] == self.win[0]) return self.remove();
                                    }
                                }
                            });
                        });
                        self.observerremover.observe(self.win[0].parentNode, {
                            childList: true,
                            characterData: false,
                            attributes: false,
                            subtree: false
                        });
                    } else {
                        self.bind(self.win, (cap.isie && !cap.isie9) ? "propertychange" : "DOMAttrModified", self.onAttributeChange);
                        if (cap.isie9) self.win[0].attachEvent("onpropertychange", self.onAttributeChange);
                        self.bind(self.win, "DOMNodeRemoved", function (e) {
                            if (e.target == self.win[0]) self.remove();
                        });
                    }
                }
                if (!self.ispage && self.opt.boxzoom) self.bind(window, "resize", self.resizeZoom);
                if (self.istextarea) self.bind(self.win, "mouseup", self.lazyResize);
                self.checkrtlmode = true;
                self.lazyResize(30);
            }
            if (this.doc[0].nodeName == 'IFRAME') {
                function oniframeload(e) {
                    self.iframexd = false;
                    try {
                        var doc = 'contentDocument' in this ? this.contentDocument : this.contentWindow.document;
                        var a = doc.domain;
                    } catch (e) {
                        self.iframexd = true;
                        doc = false
                    }
                    ;
                    if (self.iframexd) {
                        if ("console" in window) console.log('NiceScroll error: policy restriced iframe');
                        return true;
                    }
                    self.forcescreen = true;
                    if (self.isiframe) {
                        self.iframe = {
                            "doc": $(doc),
                            "html": self.doc.contents().find('html')[0],
                            "body": self.doc.contents().find('body')[0]
                        };
                        self.getContentSize = function () {
                            return {
                                w: Math.max(self.iframe.html.scrollWidth, self.iframe.body.scrollWidth),
                                h: Math.max(self.iframe.html.scrollHeight, self.iframe.body.scrollHeight)
                            }
                        }
                        self.docscroll = $(self.iframe.body);
                    }
                    if (!cap.isios && self.opt.iframeautoresize && !self.isiframe) {
                        self.win.scrollTop(0);
                        self.doc.height("");
                        var hh = Math.max(doc.getElementsByTagName('html')[0].scrollHeight, doc.body.scrollHeight);
                        self.doc.height(hh);
                    }
                    self.lazyResize(30);
                    if (cap.isie7) self.css($(self.iframe.html), {'overflow-y': 'hidden'});
                    self.css($(self.iframe.body), {'overflow-y': 'hidden'});
                    if (cap.isios && self.haswrapper) {
                        self.css($(doc.body), {'-webkit-transform': 'translate3d(0,0,0)'});
                        console.log(1);
                    }
                    if ('contentWindow' in this) {
                        self.bind(this.contentWindow, "scroll", self.onscroll);
                    } else {
                        self.bind(doc, "scroll", self.onscroll);
                    }
                    if (self.opt.enablemousewheel) {
                        self.bind(doc, "mousewheel", self.onmousewheel);
                    }
                    if (self.opt.enablekeyboard) self.bind(doc, (cap.isopera) ? "keypress" : "keydown", self.onkeypress);
                    if (cap.cantouch || self.opt.touchbehavior) {
                        self.bind(doc, "mousedown", self.ontouchstart);
                        self.bind(doc, "mousemove", function (e) {
                            self.ontouchmove(e, true)
                        });
                        if (self.opt.grabcursorenabled && cap.cursorgrabvalue) self.css($(doc.body), {'cursor': cap.cursorgrabvalue});
                    }
                    self.bind(doc, "mouseup", self.ontouchend);
                    if (self.zoom) {
                        if (self.opt.dblclickzoom) self.bind(doc, 'dblclick', self.doZoom);
                        if (self.ongesturezoom) self.bind(doc, "gestureend", self.ongesturezoom);
                    }
                };
                if (this.doc[0].readyState && this.doc[0].readyState == "complete") {
                    setTimeout(function () {
                        oniframeload.call(self.doc[0], false)
                    }, 500);
                }
                self.bind(this.doc, "load", oniframeload);
            }
        };
        this.showCursor = function (py, px) {
            if (self.cursortimeout) {
                clearTimeout(self.cursortimeout);
                self.cursortimeout = 0;
            }
            if (!self.rail) return;
            if (self.autohidedom) {
                self.autohidedom.stop().css({opacity: self.opt.cursoropacitymax});
                self.cursoractive = true;
            }
            if (!self.rail.drag || self.rail.drag.pt != 1) {
                if ((typeof py != "undefined") && (py !== false)) {
                    self.scroll.y = Math.round(py * 1 / self.scrollratio.y);
                }
                if (typeof px != "undefined") {
                    self.scroll.x = Math.round(px * 1 / self.scrollratio.x);
                }
            }
            self.cursor.css({height: self.cursorheight, top: self.scroll.y});
            if (self.cursorh) {
                (!self.rail.align && self.rail.visibility) ? self.cursorh.css({
                    width: self.cursorwidth,
                    left: self.scroll.x + self.rail.width
                }) : self.cursorh.css({width: self.cursorwidth, left: self.scroll.x});
                self.cursoractive = true;
            }
            if (self.zoom) self.zoom.stop().css({opacity: self.opt.cursoropacitymax});
        };
        this.hideCursor = function (tm) {
            if (self.cursortimeout) return;
            if (!self.rail) return;
            if (!self.autohidedom) return;
            self.cursortimeout = setTimeout(function () {
                if (!self.rail.active || !self.showonmouseevent) {
                    self.autohidedom.stop().animate({opacity: self.opt.cursoropacitymin});
                    if (self.zoom) self.zoom.stop().animate({opacity: self.opt.cursoropacitymin});
                    self.cursoractive = false;
                }
                self.cursortimeout = 0;
            }, tm || self.opt.hidecursordelay);
        };
        this.noticeCursor = function (tm, py, px) {
            self.showCursor(py, px);
            if (!self.rail.active) self.hideCursor(tm);
        };
        this.getContentSize = (self.ispage) ? function () {
            return {
                w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }
        } : (self.haswrapper) ? function () {
            return {
                w: self.doc.outerWidth() + parseInt(self.win.css('paddingLeft')) + parseInt(self.win.css('paddingRight')),
                h: self.doc.outerHeight() + parseInt(self.win.css('paddingTop')) + parseInt(self.win.css('paddingBottom'))
            }
        } : function () {
            return {w: self.docscroll[0].scrollWidth, h: self.docscroll[0].scrollHeight}
        };
        this.onResize = function (e, page) {
            if (!self.win) return false;
            if (!self.haswrapper && !self.ispage) {
                if (self.win.css('display') == 'none') {
                    if (self.visibility) self.hideRail().hideRailHr();
                    return false;
                } else {
                    if (!self.hidden && !self.visibility) self.showRail().showRailHr();
                }
            }
            var premaxh = self.page.maxh;
            var premaxw = self.page.maxw;
            var preview = {h: self.view.h, w: self.view.w};
            self.view = {
                w: (self.ispage) ? self.win.width() : parseInt(self.win[0].clientWidth),
                h: (self.ispage) ? self.win.height() : parseInt(self.win[0].clientHeight)
            };
            self.page = (page) ? page : self.getContentSize();
            self.page.maxh = Math.max(0, self.page.h - self.view.h);
            self.page.maxw = Math.max(0, self.page.w - self.view.w);
            if ((self.page.maxh == premaxh) && (self.page.maxw == premaxw) && (self.view.w == preview.w)) {
                if (!self.ispage) {
                    var pos = self.win.offset();
                    if (self.lastposition) {
                        var lst = self.lastposition;
                        if ((lst.top == pos.top) && (lst.left == pos.left)) return self;
                    }
                    self.lastposition = pos;
                } else {
                    return self;
                }
            }
            if (self.page.maxh == 0) {
                self.hideRail();
                self.scrollvaluemax = 0;
                self.scroll.y = 0;
                self.scrollratio.y = 0;
                self.cursorheight = 0;
                self.setScrollTop(0);
                self.rail.scrollable = false;
            } else {
                self.rail.scrollable = true;
            }
            if (self.page.maxw == 0) {
                self.hideRailHr();
                self.scrollvaluemaxw = 0;
                self.scroll.x = 0;
                self.scrollratio.x = 0;
                self.cursorwidth = 0;
                self.setScrollLeft(0);
                self.railh.scrollable = false;
            } else {
                self.railh.scrollable = true;
            }
            self.locked = (self.page.maxh == 0) && (self.page.maxw == 0);
            if (self.locked) {
                if (!self.ispage) self.updateScrollBar(self.view);
                return false;
            }
            if (!self.hidden && !self.visibility) {
                self.showRail().showRailHr();
            } else if (!self.hidden && !self.railh.visibility) self.showRailHr();
            if (self.istextarea && self.win.css('resize') && self.win.css('resize') != 'none') self.view.h -= 20;
            self.cursorheight = Math.min(self.view.h, Math.round(self.view.h * (self.view.h / self.page.h)));
            self.cursorheight = (self.opt.cursorfixedheight) ? self.opt.cursorfixedheight : Math.max(self.opt.cursorminheight, self.cursorheight);
            self.cursorwidth = Math.min(self.view.w, Math.round(self.view.w * (self.view.w / self.page.w)));
            self.cursorwidth = (self.opt.cursorfixedheight) ? self.opt.cursorfixedheight : Math.max(self.opt.cursorminheight, self.cursorwidth);
            self.scrollvaluemax = self.view.h - self.cursorheight - self.cursor.hborder;
            if (self.railh) {
                self.railh.width = (self.page.maxh > 0) ? (self.view.w - self.rail.width) : self.view.w;
                self.scrollvaluemaxw = self.railh.width - self.cursorwidth - self.cursorh.wborder;
            }
            if (self.checkrtlmode && self.railh) {
                self.checkrtlmode = false;
                if (self.opt.rtlmode && self.scroll.x == 0) self.setScrollLeft(self.page.maxw);
            }
            if (!self.ispage) self.updateScrollBar(self.view);
            self.scrollratio = {x: (self.page.maxw / self.scrollvaluemaxw), y: (self.page.maxh / self.scrollvaluemax)};
            var sy = self.getScrollTop();
            if (sy > self.page.maxh) {
                self.doScrollTop(self.page.maxh);
            } else {
                self.scroll.y = Math.round(self.getScrollTop() * (1 / self.scrollratio.y));
                self.scroll.x = Math.round(self.getScrollLeft() * (1 / self.scrollratio.x));
                if (self.cursoractive) self.noticeCursor();
            }
            if (self.scroll.y && (self.getScrollTop() == 0)) self.doScrollTo(Math.floor(self.scroll.y * self.scrollratio.y));
            return self;
        };
        this.resize = self.onResize;
        this.lazyResize = function (tm) {
            tm = (isNaN(tm)) ? 30 : tm;
            self.delayed('resize', self.resize, tm);
            return self;
        }

        function _modernWheelEvent(dom, name, fn, bubble) {
            self._bind(dom, name, function (e) {
                var e = (e) ? e : window.event;
                var event = {
                    original: e,
                    target: e.target || e.srcElement,
                    type: "wheel",
                    deltaMode: e.type == "MozMousePixelScroll" ? 0 : 1,
                    deltaX: 0,
                    deltaZ: 0,
                    preventDefault: function () {
                        e.preventDefault ? e.preventDefault() : e.returnValue = false;
                        return false;
                    },
                    stopImmediatePropagation: function () {
                        (e.stopImmediatePropagation) ? e.stopImmediatePropagation() : e.cancelBubble = true;
                    }
                };
                if (name == "mousewheel") {
                    event.deltaY = -1 / 40 * e.wheelDelta;
                    e.wheelDeltaX && (event.deltaX = -1 / 40 * e.wheelDeltaX);
                } else {
                    event.deltaY = e.detail;
                }
                return fn.call(dom, event);
            }, bubble);
        };this._bind = function (el, name, fn, bubble) {
            self.events.push({e: el, n: name, f: fn, b: bubble, q: false});
            if (el.addEventListener) {
                el.addEventListener(name, fn, bubble || false);
            } else if (el.attachEvent) {
                el.attachEvent("on" + name, fn);
            } else {
                el["on" + name] = fn;
            }
        };
        this.jqbind = function (dom, name, fn) {
            self.events.push({e: dom, n: name, f: fn, q: true});
            $(dom).bind(name, fn);
        }
        this.bind = function (dom, name, fn, bubble) {
            var el = ("jquery" in dom) ? dom[0] : dom;
            if (name == 'mousewheel') {
                if ("onwheel" in self.win) {
                    self._bind(el, "wheel", fn, bubble || false);
                } else {
                    var wname = (typeof document.onmousewheel != "undefined") ? "mousewheel" : "DOMMouseScroll";
                    _modernWheelEvent(el, wname, fn, bubble || false);
                    if (wname == "DOMMouseScroll") _modernWheelEvent(el, "MozMousePixelScroll", fn, bubble || false);
                }
            } else if (el.addEventListener) {
                if (cap.cantouch && /mouseup|mousedown|mousemove/.test(name)) {
                    var tt = (name == 'mousedown') ? 'touchstart' : (name == 'mouseup') ? 'touchend' : 'touchmove';
                    self._bind(el, tt, function (e) {
                        if (e.touches) {
                            if (e.touches.length < 2) {
                                var ev = (e.touches.length) ? e.touches[0] : e;
                                ev.original = e;
                                fn.call(this, ev);
                            }
                        } else if (e.changedTouches) {
                            var ev = e.changedTouches[0];
                            ev.original = e;
                            fn.call(this, ev);
                        }
                    }, bubble || false);
                }
                self._bind(el, name, fn, bubble || false);
                if (cap.cantouch && name == "mouseup") self._bind(el, "touchcancel", fn, bubble || false);
            } else {
                self._bind(el, name, function (e) {
                    e = e || window.event || false;
                    if (e) {
                        if (e.srcElement) e.target = e.srcElement;
                    }
                    if (!("pageY" in e)) {
                        e.pageX = e.clientX + document.documentElement.scrollLeft;
                        e.pageY = e.clientY + document.documentElement.scrollTop;
                    }
                    return ((fn.call(el, e) === false) || bubble === false) ? self.cancelEvent(e) : true;
                });
            }
        };
        this._unbind = function (el, name, fn, bub) {
            if (el.removeEventListener) {
                el.removeEventListener(name, fn, bub);
            } else if (el.detachEvent) {
                el.detachEvent('on' + name, fn);
            } else {
                el['on' + name] = false;
            }
        };
        this.unbindAll = function () {
            for (var a = 0; a < self.events.length; a++) {
                var r = self.events[a];
                (r.q) ? r.e.unbind(r.n, r.f) : self._unbind(r.e, r.n, r.f, r.b);
            }
        };
        this.cancelEvent = function (e) {
            var e = (e.original) ? e.original : (e) ? e : window.event || false;
            if (!e) return false;
            if (e.preventDefault) e.preventDefault();
            if (e.stopPropagation) e.stopPropagation();
            if (e.preventManipulation) e.preventManipulation();
            e.cancelBubble = true;
            e.cancel = true;
            e.returnValue = false;
            return false;
        };
        this.stopPropagation = function (e) {
            var e = (e.original) ? e.original : (e) ? e : window.event || false;
            if (!e) return false;
            if (e.stopPropagation) return e.stopPropagation();
            if (e.cancelBubble) e.cancelBubble = true;
            return false;
        }
        this.showRail = function () {
            if ((self.page.maxh != 0) && (self.ispage || self.win.css('display') != 'none')) {
                self.visibility = true;
                self.rail.visibility = true;
                self.rail.css('display', 'block');
            }
            return self;
        };
        this.showRailHr = function () {
            if (!self.railh) return self;
            if ((self.page.maxw != 0) && (self.ispage || self.win.css('display') != 'none')) {
                self.railh.visibility = true;
                self.railh.css('display', 'block');
            }
            return self;
        };
        this.hideRail = function () {
            self.visibility = false;
            self.rail.visibility = false;
            self.rail.css('display', 'none');
            return self;
        };
        this.hideRailHr = function () {
            if (!self.railh) return self;
            self.railh.visibility = false;
            self.railh.css('display', 'none');
            return self;
        };
        this.show = function () {
            self.hidden = false;
            self.locked = false;
            return self.showRail().showRailHr();
        };
        this.hide = function () {
            self.hidden = true;
            self.locked = true;
            return self.hideRail().hideRailHr();
        };
        this.toggle = function () {
            return (self.hidden) ? self.show() : self.hide();
        };
        this.remove = function () {
            self.stop();
            if (self.cursortimeout) clearTimeout(self.cursortimeout);
            self.doZoomOut();
            self.unbindAll();
            if (cap.isie9) self.win[0].detachEvent("onpropertychange", self.onAttributeChange);
            if (self.observer !== false) self.observer.disconnect();
            if (self.observerremover !== false) self.observerremover.disconnect();
            self.events = null;
            if (self.cursor) {
                self.cursor.remove();
            }
            if (self.cursorh) {
                self.cursorh.remove();
            }
            if (self.rail) {
                self.rail.remove();
            }
            if (self.railh) {
                self.railh.remove();
            }
            if (self.zoom) {
                self.zoom.remove();
            }
            for (var a = 0; a < self.saved.css.length; a++) {
                var d = self.saved.css[a];
                d[0].css(d[1], (typeof d[2] == "undefined") ? '' : d[2]);
            }
            self.saved = false;
            self.me.data('__nicescroll', '');
            var lst = $.nicescroll;
            lst.each(function (i) {
                if (!this) return;
                if (this.id === self.id) {
                    delete lst[i];
                    for (var b = ++i; b < lst.length; b++, i++) lst[i] = lst[b];
                    lst.length--;
                    if (lst.length) delete lst[lst.length];
                }
            });
            for (var i in self) {
                self[i] = null;
                delete self[i];
            }
            self = null;
        };
        this.scrollstart = function (fn) {
            this.onscrollstart = fn;
            return self;
        }
        this.scrollend = function (fn) {
            this.onscrollend = fn;
            return self;
        }
        this.scrollcancel = function (fn) {
            this.onscrollcancel = fn;
            return self;
        }
        this.zoomin = function (fn) {
            this.onzoomin = fn;
            return self;
        }
        this.zoomout = function (fn) {
            this.onzoomout = fn;
            return self;
        }
        this.isScrollable = function (e) {
            var dom = (e.target) ? e.target : e;
            if (dom.nodeName == 'OPTION') return true;
            while (dom && (dom.nodeType == 1) && !(/BODY|HTML/.test(dom.nodeName))) {
                var dd = $(dom);
                var ov = dd.css('overflowY') || dd.css('overflowX') || dd.css('overflow') || '';
                if (/scroll|auto/.test(ov)) return (dom.clientHeight != dom.scrollHeight);
                dom = (dom.parentNode) ? dom.parentNode : false;
            }
            return false;
        };
        this.getViewport = function (me) {
            var dom = (me && me.parentNode) ? me.parentNode : false;
            while (dom && (dom.nodeType == 1) && !(/BODY|HTML/.test(dom.nodeName))) {
                var dd = $(dom);
                var ov = dd.css('overflowY') || dd.css('overflowX') || dd.css('overflow') || '';
                if ((/scroll|auto/.test(ov)) && (dom.clientHeight != dom.scrollHeight)) return dd;
                if (dd.getNiceScroll().length > 0) return dd;
                dom = (dom.parentNode) ? dom.parentNode : false;
            }
            return false;
        };

        function execScrollWheel(e, hr, chkscroll) {
            var px, py;
            var rt = 1;
            if (e.deltaMode == 0) {
                px = -Math.floor(e.deltaX * (self.opt.mousescrollstep / (18 * 3)));
                py = -Math.floor(e.deltaY * (self.opt.mousescrollstep / (18 * 3)));
            } else if (e.deltaMode == 1) {
                px = -Math.floor(e.deltaX * self.opt.mousescrollstep);
                py = -Math.floor(e.deltaY * self.opt.mousescrollstep);
            }
            if (hr && self.opt.oneaxismousemode && (px == 0) && py) {
                px = py;
                py = 0;
            }
            if (px) {
                if (self.scrollmom) {
                    self.scrollmom.stop()
                }
                self.lastdeltax += px;
                self.debounced("mousewheelx", function () {
                    var dt = self.lastdeltax;
                    self.lastdeltax = 0;
                    if (!self.rail.drag) {
                        self.doScrollLeftBy(dt)
                    }
                }, 120);
            }
            if (py) {
                if (self.opt.nativeparentscrolling && chkscroll && !self.ispage && !self.zoomactive) {
                    if (py < 0) {
                        if (self.getScrollTop() >= self.page.maxh) return true;
                    } else {
                        if (self.getScrollTop() <= 0) return true;
                    }
                }
                if (self.scrollmom) {
                    self.scrollmom.stop()
                }
                self.lastdeltay += py;
                self.debounced("mousewheely", function () {
                    var dt = self.lastdeltay;
                    self.lastdeltay = 0;
                    if (!self.rail.drag) {
                        self.doScrollBy(dt)
                    }
                }, 120);
            }
            e.stopImmediatePropagation();
            return e.preventDefault();
        };this.onmousewheel = function (e) {
            if (self.locked) {
                self.debounced("checkunlock", self.resize, 250);
                return true;
            }
            if (self.rail.drag) return self.cancelEvent(e);
            if (self.opt.oneaxismousemode == "auto" && e.deltaX != 0) self.opt.oneaxismousemode = false;
            if (self.opt.oneaxismousemode && e.deltaX == 0) {
                if (!self.rail.scrollable) {
                    if (self.railh && self.railh.scrollable) {
                        return self.onmousewheelhr(e);
                    } else {
                        return true;
                    }
                }
            }
            var nw = +(new Date());
            var chk = false;
            if (self.opt.preservenativescrolling && ((self.checkarea + 600) < nw)) {
                self.nativescrollingarea = self.isScrollable(e);
                chk = true;
            }
            self.checkarea = nw;
            if (self.nativescrollingarea) return true;
            var ret = execScrollWheel(e, false, chk);
            if (ret) self.checkarea = 0;
            return ret;
        };
        this.onmousewheelhr = function (e) {
            if (self.locked || !self.railh.scrollable) return true;
            if (self.rail.drag) return self.cancelEvent(e);
            var nw = +(new Date());
            var chk = false;
            if (self.opt.preservenativescrolling && ((self.checkarea + 600) < nw)) {
                self.nativescrollingarea = self.isScrollable(e);
                chk = true;
            }
            self.checkarea = nw;
            if (self.nativescrollingarea) return true;
            if (self.locked) return self.cancelEvent(e);
            return execScrollWheel(e, true, chk);
        };
        this.stop = function () {
            self.cancelScroll();
            if (self.scrollmon) self.scrollmon.stop();
            self.cursorfreezed = false;
            self.scroll.y = Math.round(self.getScrollTop() * (1 / self.scrollratio.y));
            self.noticeCursor();
            return self;
        };
        this.getTransitionSpeed = function (dif) {
            var sp = Math.round(self.opt.scrollspeed * 10);
            var ex = Math.min(sp, Math.round((dif / 20) * self.opt.scrollspeed));
            return (ex > 20) ? ex : 0;
        }
        if (!self.opt.smoothscroll) {
            this.doScrollLeft = function (x, spd) {
                var y = self.getScrollTop();
                self.doScrollPos(x, y, spd);
            }
            this.doScrollTop = function (y, spd) {
                var x = self.getScrollLeft();
                self.doScrollPos(x, y, spd);
            }
            this.doScrollPos = function (x, y, spd) {
                var nx = (x > self.page.maxw) ? self.page.maxw : x;
                if (nx < 0) nx = 0;
                var ny = (y > self.page.maxh) ? self.page.maxh : y;
                if (ny < 0) ny = 0;
                self.synched('scroll', function () {
                    self.setScrollTop(ny);
                    self.setScrollLeft(nx);
                });
            }
            this.cancelScroll = function () {
            };
        } else if (self.ishwscroll && cap.hastransition && self.opt.usetransition) {
            this.prepareTransition = function (dif, istime) {
                var ex = (istime) ? ((dif > 20) ? dif : 0) : self.getTransitionSpeed(dif);
                var trans = (ex) ? cap.prefixstyle + 'transform ' + ex + 'ms ease-out' : '';
                if (!self.lasttransitionstyle || self.lasttransitionstyle != trans) {
                    self.lasttransitionstyle = trans;
                    self.doc.css(cap.transitionstyle, trans);
                }
                return ex;
            };
            this.doScrollLeft = function (x, spd) {
                var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
                self.doScrollPos(x, y, spd);
            }
            this.doScrollTop = function (y, spd) {
                var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
                self.doScrollPos(x, y, spd);
            }
            this.doScrollPos = function (x, y, spd) {
                var py = self.getScrollTop();
                var px = self.getScrollLeft();
                if (((self.newscrolly - py) * (y - py) < 0) || ((self.newscrollx - px) * (x - px) < 0)) self.cancelScroll();
                if (self.opt.bouncescroll == false) {
                    if (y < 0) y = 0; else if (y > self.page.maxh) y = self.page.maxh;
                    if (x < 0) x = 0; else if (x > self.page.maxw) x = self.page.maxw;
                }
                if (self.scrollrunning && x == self.newscrollx && y == self.newscrolly) return false;
                self.newscrolly = y;
                self.newscrollx = x;
                self.newscrollspeed = spd || false;
                if (self.timer) return false;
                self.timer = setTimeout(function () {
                    var top = self.getScrollTop();
                    var lft = self.getScrollLeft();
                    var dst = {};
                    dst.x = x - lft;
                    dst.y = y - top;
                    dst.px = lft;
                    dst.py = top;
                    var dd = Math.round(Math.sqrt(Math.pow(dst.x, 2) + Math.pow(dst.y, 2)));
                    var ms = (self.newscrollspeed && self.newscrollspeed > 1) ? self.newscrollspeed : self.getTransitionSpeed(dd);
                    if (self.newscrollspeed && self.newscrollspeed <= 1) ms *= self.newscrollspeed;
                    self.prepareTransition(ms, true);
                    if (self.timerscroll && self.timerscroll.tm) clearInterval(self.timerscroll.tm);
                    if (ms > 0) {
                        if (!self.scrollrunning && self.onscrollstart) {
                            var info = {
                                "type": "scrollstart",
                                "current": {"x": lft, "y": top},
                                "request": {"x": x, "y": y},
                                "end": {"x": self.newscrollx, "y": self.newscrolly},
                                "speed": ms
                            };
                            self.onscrollstart.call(self, info);
                        }
                        if (cap.transitionend) {
                            if (!self.scrollendtrapped) {
                                self.scrollendtrapped = true;
                                self.bind(self.doc, cap.transitionend, self.onScrollEnd, false);
                            }
                        } else {
                            if (self.scrollendtrapped) clearTimeout(self.scrollendtrapped);
                            self.scrollendtrapped = setTimeout(self.onScrollEnd, ms);
                        }
                        var py = top;
                        var px = lft;
                        self.timerscroll = {
                            bz: new BezierClass(py, self.newscrolly, ms, 0, 0, 0.58, 1),
                            bh: new BezierClass(px, self.newscrollx, ms, 0, 0, 0.58, 1)
                        };
                        if (!self.cursorfreezed) self.timerscroll.tm = setInterval(function () {
                            self.showCursor(self.getScrollTop(), self.getScrollLeft())
                        }, 60);
                    }
                    self.synched("doScroll-set", function () {
                        self.timer = 0;
                        if (self.scrollendtrapped) self.scrollrunning = true;
                        self.setScrollTop(self.newscrolly);
                        self.setScrollLeft(self.newscrollx);
                        if (!self.scrollendtrapped) self.onScrollEnd();
                    });
                }, 50);
            };
            this.cancelScroll = function () {
                if (!self.scrollendtrapped) return true;
                var py = self.getScrollTop();
                var px = self.getScrollLeft();
                self.scrollrunning = false;
                if (!cap.transitionend) clearTimeout(cap.transitionend);
                self.scrollendtrapped = false;
                self._unbind(self.doc, cap.transitionend, self.onScrollEnd);
                self.prepareTransition(0);
                self.setScrollTop(py);
                if (self.railh) self.setScrollLeft(px);
                if (self.timerscroll && self.timerscroll.tm) clearInterval(self.timerscroll.tm);
                self.timerscroll = false;
                self.cursorfreezed = false;
                self.showCursor(py, px);
                return self;
            };
            this.onScrollEnd = function () {
                if (self.scrollendtrapped) self._unbind(self.doc, cap.transitionend, self.onScrollEnd);
                self.scrollendtrapped = false;
                self.prepareTransition(0);
                if (self.timerscroll && self.timerscroll.tm) clearInterval(self.timerscroll.tm);
                self.timerscroll = false;
                var py = self.getScrollTop();
                var px = self.getScrollLeft();
                self.setScrollTop(py);
                if (self.railh) self.setScrollLeft(px);
                self.noticeCursor(false, py, px);
                self.cursorfreezed = false;
                if (py < 0) py = 0
                else if (py > self.page.maxh) py = self.page.maxh;
                if (px < 0) px = 0
                else if (px > self.page.maxw) px = self.page.maxw;
                if ((py != self.newscrolly) || (px != self.newscrollx)) return self.doScrollPos(px, py, self.opt.snapbackspeed);
                if (self.onscrollend && self.scrollrunning) {
                    var info = {
                        "type": "scrollend",
                        "current": {"x": px, "y": py},
                        "end": {"x": self.newscrollx, "y": self.newscrolly}
                    };
                    self.onscrollend.call(self, info);
                }
                self.scrollrunning = false;
            };
        } else {
            this.doScrollLeft = function (x, spd) {
                var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
                self.doScrollPos(x, y, spd);
            }
            this.doScrollTop = function (y, spd) {
                var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
                self.doScrollPos(x, y, spd);
            }
            this.doScrollPos = function (x, y, spd) {
                var y = ((typeof y == "undefined") || (y === false)) ? self.getScrollTop(true) : y;
                if ((self.timer) && (self.newscrolly == y) && (self.newscrollx == x)) return true;
                if (self.timer) clearAnimationFrame(self.timer);
                self.timer = 0;
                var py = self.getScrollTop();
                var px = self.getScrollLeft();
                if (((self.newscrolly - py) * (y - py) < 0) || ((self.newscrollx - px) * (x - px) < 0)) self.cancelScroll();
                self.newscrolly = y;
                self.newscrollx = x;
                if (!self.bouncescroll || !self.rail.visibility) {
                    if (self.newscrolly < 0) {
                        self.newscrolly = 0;
                    } else if (self.newscrolly > self.page.maxh) {
                        self.newscrolly = self.page.maxh;
                    }
                }
                if (!self.bouncescroll || !self.railh.visibility) {
                    if (self.newscrollx < 0) {
                        self.newscrollx = 0;
                    } else if (self.newscrollx > self.page.maxw) {
                        self.newscrollx = self.page.maxw;
                    }
                }
                self.dst = {};
                self.dst.x = x - px;
                self.dst.y = y - py;
                self.dst.px = px;
                self.dst.py = py;
                var dst = Math.round(Math.sqrt(Math.pow(self.dst.x, 2) + Math.pow(self.dst.y, 2)));
                self.dst.ax = self.dst.x / dst;
                self.dst.ay = self.dst.y / dst;
                var pa = 0;
                var pe = dst;
                if (self.dst.x == 0) {
                    pa = py;
                    pe = y;
                    self.dst.ay = 1;
                    self.dst.py = 0;
                } else if (self.dst.y == 0) {
                    pa = px;
                    pe = x;
                    self.dst.ax = 1;
                    self.dst.px = 0;
                }
                var ms = self.getTransitionSpeed(dst);
                if (spd && spd <= 1) ms *= spd;
                if (ms > 0) {
                    self.bzscroll = (self.bzscroll) ? self.bzscroll.update(pe, ms) : new BezierClass(pa, pe, ms, 0, 1, 0, 1);
                } else {
                    self.bzscroll = false;
                }
                if (self.timer) return;
                if ((py == self.page.maxh && y >= self.page.maxh) || (px == self.page.maxw && x >= self.page.maxw)) self.checkContentSize();
                var sync = 1;

                function scrolling() {
                    if (self.cancelAnimationFrame) return true;
                    self.scrollrunning = true;
                    sync = 1 - sync;
                    if (sync) return (self.timer = setAnimationFrame(scrolling) || 1);
                    var done = 0;
                    var sc = sy = self.getScrollTop();
                    if (self.dst.ay) {
                        sc = (self.bzscroll) ? self.dst.py + (self.bzscroll.getNow() * self.dst.ay) : self.newscrolly;
                        var dr = sc - sy;
                        if ((dr < 0 && sc < self.newscrolly) || (dr > 0 && sc > self.newscrolly)) sc = self.newscrolly;
                        self.setScrollTop(sc);
                        if (sc == self.newscrolly) done = 1;
                    } else {
                        done = 1;
                    }
                    var scx = sx = self.getScrollLeft();
                    if (self.dst.ax) {
                        scx = (self.bzscroll) ? self.dst.px + (self.bzscroll.getNow() * self.dst.ax) : self.newscrollx;
                        var dr = scx - sx;
                        if ((dr < 0 && scx < self.newscrollx) || (dr > 0 && scx > self.newscrollx)) scx = self.newscrollx;
                        self.setScrollLeft(scx);
                        if (scx == self.newscrollx) done += 1;
                    } else {
                        done += 1;
                    }
                    if (done == 2) {
                        self.timer = 0;
                        self.cursorfreezed = false;
                        self.bzscroll = false;
                        self.scrollrunning = false;
                        if (sc < 0) sc = 0; else if (sc > self.page.maxh) sc = self.page.maxh;
                        if (scx < 0) scx = 0; else if (scx > self.page.maxw) scx = self.page.maxw;
                        if ((scx != self.newscrollx) || (sc != self.newscrolly)) self.doScrollPos(scx, sc); else {
                            if (self.onscrollend) {
                                var info = {
                                    "type": "scrollend",
                                    "current": {"x": sx, "y": sy},
                                    "end": {"x": self.newscrollx, "y": self.newscrolly}
                                };
                                self.onscrollend.call(self, info);
                            }
                        }
                    } else {
                        self.timer = setAnimationFrame(scrolling) || 1;
                    }
                };self.cancelAnimationFrame = false;
                self.timer = 1;
                if (self.onscrollstart && !self.scrollrunning) {
                    var info = {
                        "type": "scrollstart",
                        "current": {"x": px, "y": py},
                        "request": {"x": x, "y": y},
                        "end": {"x": self.newscrollx, "y": self.newscrolly},
                        "speed": ms
                    };
                    self.onscrollstart.call(self, info);
                }
                scrolling();
                if ((py == self.page.maxh && y >= py) || (px == self.page.maxw && x >= px)) self.checkContentSize();
                self.noticeCursor();
            };
            this.cancelScroll = function () {
                if (self.timer) clearAnimationFrame(self.timer);
                self.timer = 0;
                self.bzscroll = false;
                self.scrollrunning = false;
                return self;
            };
        }
        this.doScrollBy = function (stp, relative) {
            var ny = 0;
            if (relative) {
                ny = Math.floor((self.scroll.y - stp) * self.scrollratio.y)
            } else {
                var sy = (self.timer) ? self.newscrolly : self.getScrollTop(true);
                ny = sy - stp;
            }
            if (self.bouncescroll) {
                var haf = Math.round(self.view.h / 2);
                if (ny < -haf) ny = -haf
                else if (ny > (self.page.maxh + haf)) ny = (self.page.maxh + haf);
            }
            self.cursorfreezed = false;
            py = self.getScrollTop(true);
            if (ny < 0 && py <= 0) return self.noticeCursor(); else if (ny > self.page.maxh && py >= self.page.maxh) {
                self.checkContentSize();
                return self.noticeCursor();
            }
            self.doScrollTop(ny);
        };
        this.doScrollLeftBy = function (stp, relative) {
            var nx = 0;
            if (relative) {
                nx = Math.floor((self.scroll.x - stp) * self.scrollratio.x)
            } else {
                var sx = (self.timer) ? self.newscrollx : self.getScrollLeft(true);
                nx = sx - stp;
            }
            if (self.bouncescroll) {
                var haf = Math.round(self.view.w / 2);
                if (nx < -haf) nx = -haf
                else if (nx > (self.page.maxw + haf)) nx = (self.page.maxw + haf);
            }
            self.cursorfreezed = false;
            px = self.getScrollLeft(true);
            if (nx < 0 && px <= 0) return self.noticeCursor(); else if (nx > self.page.maxw && px >= self.page.maxw) return self.noticeCursor();
            self.doScrollLeft(nx);
        };
        this.doScrollTo = function (pos, relative) {
            var ny = (relative) ? Math.round(pos * self.scrollratio.y) : pos;
            if (ny < 0) ny = 0
            else if (ny > self.page.maxh) ny = self.page.maxh;
            self.cursorfreezed = false;
            self.doScrollTop(pos);
        };
        this.checkContentSize = function () {
            var pg = self.getContentSize();
            if ((pg.h != self.page.h) || (pg.w != self.page.w)) self.resize(false, pg);
        };
        self.onscroll = function (e) {
            if (self.rail.drag) return;
            if (!self.cursorfreezed) {
                self.synched('scroll', function () {
                    self.scroll.y = Math.round(self.getScrollTop() * (1 / self.scrollratio.y));
                    if (self.railh) self.scroll.x = Math.round(self.getScrollLeft() * (1 / self.scrollratio.x));
                    self.noticeCursor();
                });
            }
        };
        self.bind(self.docscroll, "scroll", self.onscroll);
        this.doZoomIn = function (e) {
            if (self.zoomactive) return;
            self.zoomactive = true;
            self.zoomrestore = {style: {}};
            var lst = ['position', 'top', 'left', 'zIndex', 'backgroundColor', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight'];
            var win = self.win[0].style;
            for (var a in lst) {
                var pp = lst[a];
                self.zoomrestore.style[pp] = (typeof win[pp] != "undefined") ? win[pp] : '';
            }
            self.zoomrestore.style.width = self.win.css('width');
            self.zoomrestore.style.height = self.win.css('height');
            self.zoomrestore.padding = {
                w: self.win.outerWidth() - self.win.width(),
                h: self.win.outerHeight() - self.win.height()
            };
            if (cap.isios4) {
                self.zoomrestore.scrollTop = $(window).scrollTop();
                $(window).scrollTop(0);
            }
            self.win.css({
                "position": (cap.isios4) ? "absolute" : "fixed",
                "top": 0,
                "left": 0,
                "z-index": globalmaxzindex + 100,
                "margin": "0px"
            });
            var bkg = self.win.css("backgroundColor");
            if (bkg == "" || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(bkg)) self.win.css("backgroundColor", "#fff");
            self.rail.css({"z-index": globalmaxzindex + 101});
            self.zoom.css({"z-index": globalmaxzindex + 102});
            self.zoom.css('backgroundPosition', '0px -18px');
            self.resizeZoom();
            if (self.onzoomin) self.onzoomin.call(self);
            return self.cancelEvent(e);
        };
        this.doZoomOut = function (e) {
            if (!self.zoomactive) return;
            self.zoomactive = false;
            self.win.css("margin", "");
            self.win.css(self.zoomrestore.style);
            if (cap.isios4) {
                $(window).scrollTop(self.zoomrestore.scrollTop);
            }
            self.rail.css({"z-index": self.zindex});
            self.zoom.css({"z-index": self.zindex});
            self.zoomrestore = false;
            self.zoom.css('backgroundPosition', '0px 0px');
            self.onResize();
            if (self.onzoomout) self.onzoomout.call(self);
            return self.cancelEvent(e);
        };
        this.doZoom = function (e) {
            return (self.zoomactive) ? self.doZoomOut(e) : self.doZoomIn(e);
        };
        this.resizeZoom = function () {
            if (!self.zoomactive) return;
            var py = self.getScrollTop();
            self.win.css({
                width: $(window).width() - self.zoomrestore.padding.w + "px",
                height: $(window).height() - self.zoomrestore.padding.h + "px"
            });
            self.onResize();
            self.setScrollTop(Math.min(self.page.maxh, py));
        };
        this.init();
        $.nicescroll.push(this);
    };
    var ScrollMomentumClass2D = function (nc) {
        var self = this;
        this.nc = nc;
        this.lastx = 0;
        this.lasty = 0;
        this.speedx = 0;
        this.speedy = 0;
        this.lasttime = 0;
        this.steptime = 0;
        this.snapx = false;
        this.snapy = false;
        this.demulx = 0;
        this.demuly = 0;
        this.lastscrollx = -1;
        this.lastscrolly = -1;
        this.chkx = 0;
        this.chky = 0;
        this.timer = 0;
        this.time = function () {
            return +new Date();
        };
        this.reset = function (px, py) {
            self.stop();
            var now = self.time();
            self.steptime = 0;
            self.lasttime = now;
            self.speedx = 0;
            self.speedy = 0;
            self.lastx = px;
            self.lasty = py;
            self.lastscrollx = -1;
            self.lastscrolly = -1;
        };
        this.update = function (px, py) {
            var now = self.time();
            self.steptime = now - self.lasttime;
            self.lasttime = now;
            var dy = py - self.lasty;
            var dx = px - self.lastx;
            var sy = self.nc.getScrollTop();
            var sx = self.nc.getScrollLeft();
            var newy = sy + dy;
            var newx = sx + dx;
            self.snapx = (newx < 0) || (newx > self.nc.page.maxw);
            self.snapy = (newy < 0) || (newy > self.nc.page.maxh);
            self.speedx = dx;
            self.speedy = dy;
            self.lastx = px;
            self.lasty = py;
        };
        this.stop = function () {
            self.nc.unsynched("domomentum2d");
            if (self.timer) clearTimeout(self.timer);
            self.timer = 0;
            self.lastscrollx = -1;
            self.lastscrolly = -1;
        };
        this.doSnapy = function (nx, ny) {
            var snap = false;
            if (ny < 0) {
                ny = 0;
                snap = true;
            } else if (ny > self.nc.page.maxh) {
                ny = self.nc.page.maxh;
                snap = true;
            }
            if (nx < 0) {
                nx = 0;
                snap = true;
            } else if (nx > self.nc.page.maxw) {
                nx = self.nc.page.maxw;
                snap = true;
            }
            if (snap) self.nc.doScrollPos(nx, ny, self.nc.opt.snapbackspeed);
        };
        this.doMomentum = function (gp) {
            var t = self.time();
            var l = (gp) ? t + gp : self.lasttime;
            var sl = self.nc.getScrollLeft();
            var st = self.nc.getScrollTop();
            var pageh = self.nc.page.maxh;
            var pagew = self.nc.page.maxw;
            self.speedx = (pagew > 0) ? Math.min(60, self.speedx) : 0;
            self.speedy = (pageh > 0) ? Math.min(60, self.speedy) : 0;
            var chk = l && (t - l) <= 60;
            if ((st < 0) || (st > pageh) || (sl < 0) || (sl > pagew)) chk = false;
            var sy = (self.speedy && chk) ? self.speedy : false;
            var sx = (self.speedx && chk) ? self.speedx : false;
            if (sy || sx) {
                var tm = Math.max(16, self.steptime);
                if (tm > 50) {
                    var xm = tm / 50;
                    self.speedx *= xm;
                    self.speedy *= xm;
                    tm = 50;
                }
                self.demulxy = 0;
                self.lastscrollx = self.nc.getScrollLeft();
                self.chkx = self.lastscrollx;
                self.lastscrolly = self.nc.getScrollTop();
                self.chky = self.lastscrolly;
                var nx = self.lastscrollx;
                var ny = self.lastscrolly;
                var onscroll = function () {
                    var df = ((self.time() - t) > 600) ? 0.04 : 0.02;
                    if (self.speedx) {
                        nx = Math.floor(self.lastscrollx - (self.speedx * (1 - self.demulxy)));
                        self.lastscrollx = nx;
                        if ((nx < 0) || (nx > pagew)) df = 0.10;
                    }
                    if (self.speedy) {
                        ny = Math.floor(self.lastscrolly - (self.speedy * (1 - self.demulxy)));
                        self.lastscrolly = ny;
                        if ((ny < 0) || (ny > pageh)) df = 0.10;
                    }
                    self.demulxy = Math.min(1, self.demulxy + df);
                    self.nc.synched("domomentum2d", function () {
                        if (self.speedx) {
                            var scx = self.nc.getScrollLeft();
                            if (scx != self.chkx) self.stop();
                            self.chkx = nx;
                            self.nc.setScrollLeft(nx);
                        }
                        if (self.speedy) {
                            var scy = self.nc.getScrollTop();
                            if (scy != self.chky) self.stop();
                            self.chky = ny;
                            self.nc.setScrollTop(ny);
                        }
                        if (!self.timer) {
                            self.nc.hideCursor();
                            self.doSnapy(nx, ny);
                        }
                    });
                    if (self.demulxy < 1) {
                        self.timer = setTimeout(onscroll, tm);
                    } else {
                        self.stop();
                        self.nc.hideCursor();
                        self.doSnapy(nx, ny);
                    }
                };
                onscroll();
            } else {
                self.doSnapy(self.nc.getScrollLeft(), self.nc.getScrollTop());
            }
        }
    };
    var _scrollTop = jQuery.fn.scrollTop;
    jQuery.cssHooks["pageYOffset"] = {
        get: function (elem, computed, extra) {
            var nice = $.data(elem, '__nicescroll') || false;
            return (nice && nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(elem);
        }, set: function (elem, value) {
            var nice = $.data(elem, '__nicescroll') || false;
            (nice && nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call(elem, value);
            return this;
        }
    };
    jQuery.fn.scrollTop = function (value) {
        if (typeof value == "undefined") {
            var nice = (this[0]) ? $.data(this[0], '__nicescroll') || false : false;
            return (nice && nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(this);
        } else {
            return this.each(function () {
                var nice = $.data(this, '__nicescroll') || false;
                (nice && nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call($(this), value);
            });
        }
    }
    var _scrollLeft = jQuery.fn.scrollLeft;
    $.cssHooks.pageXOffset = {
        get: function (elem, computed, extra) {
            var nice = $.data(elem, '__nicescroll') || false;
            return (nice && nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(elem);
        }, set: function (elem, value) {
            var nice = $.data(elem, '__nicescroll') || false;
            (nice && nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call(elem, value);
            return this;
        }
    };
    jQuery.fn.scrollLeft = function (value) {
        if (typeof value == "undefined") {
            var nice = (this[0]) ? $.data(this[0], '__nicescroll') || false : false;
            return (nice && nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(this);
        } else {
            return this.each(function () {
                var nice = $.data(this, '__nicescroll') || false;
                (nice && nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call($(this), value);
            });
        }
    }
    var NiceScrollArray = function (doms) {
        var self = this;
        this.length = 0;
        this.name = "nicescrollarray";
        this.each = function (fn) {
            for (var a = 0, i = 0; a < self.length; a++) fn.call(self[a], i++);
            return self;
        };
        this.push = function (nice) {
            self[self.length] = nice;
            self.length++;
        };
        this.eq = function (idx) {
            return self[idx];
        };
        if (doms) {
            for (a = 0; a < doms.length; a++) {
                var nice = $.data(doms[a], '__nicescroll') || false;
                if (nice) {
                    this[this.length] = nice;
                    this.length++;
                }
            }
            ;
        }
        return this;
    };

    function mplex(el, lst, fn) {
        for (var a = 0; a < lst.length; a++) fn(el, lst[a]);
    };mplex(NiceScrollArray.prototype, ['show', 'hide', 'toggle', 'onResize', 'resize', 'remove', 'stop', 'doScrollPos'], function (e, n) {
        e[n] = function () {
            var args = arguments;
            return this.each(function () {
                this[n].apply(this, args);
            });
        };
    });
    jQuery.fn.getNiceScroll = function (index) {
        if (typeof index == "undefined") {
            return new NiceScrollArray(this);
        } else {
            var nice = this[index] && $.data(this[index], '__nicescroll') || false;
            return nice;
        }
    };
    jQuery.extend(jQuery.expr[':'], {
        nicescroll: function (a) {
            return ($.data(a, '__nicescroll')) ? true : false;
        }
    });
    $.fn.niceScroll = function (wrapper, opt) {
        if (typeof opt == "undefined") {
            if ((typeof wrapper == "object") && !("jquery" in wrapper)) {
                opt = wrapper;
                wrapper = false;
            }
        }
        var ret = new NiceScrollArray();
        if (typeof opt == "undefined") opt = {};
        if (wrapper || false) {
            opt.doc = $(wrapper);
            opt.win = $(this);
        }
        var docundef = !("doc" in opt);
        if (!docundef && !("win" in opt)) opt.win = $(this);
        this.each(function () {
            var nice = $(this).data('__nicescroll') || false;
            if (!nice) {
                opt.doc = (docundef) ? $(this) : opt.doc;
                nice = new NiceScrollClass(opt, $(this));
                $(this).data('__nicescroll', nice);
            }
            ret.push(nice);
        });
        return (ret.length == 1) ? ret[0] : ret;
    };
    window.NiceScroll = {
        getjQuery: function () {
            return jQuery
        }
    };
    if (!$.nicescroll) {
        $.nicescroll = new NiceScrollArray();
        $.nicescroll.options = _globaloptions;
    }
})(jQuery);
;(function ($) {
    'use strict';

    function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }

    function bit_rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    }

    function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }

    function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }

    function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }

    function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    function binl_md5(x, len) {
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;
        var i, olda, oldb, oldc, oldd, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
        for (i = 0; i < x.length; i += 16) {
            olda = a;
            oldb = b;
            oldc = c;
            oldd = d;
            a = md5_ff(a, b, c, d, x[i], 7, -680876936);
            d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = md5_gg(b, c, d, a, x[i], 20, -373897302);
            a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = md5_hh(d, a, b, c, x[i], 11, -358537222);
            c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = md5_ii(a, b, c, d, x[i], 6, -198630844);
            d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return [a, b, c, d];
    }

    function binl2rstr(input) {
        var i, output = '';
        for (i = 0; i < input.length * 32; i += 8) {
            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
        }
        return output;
    }

    function rstr2binl(input) {
        var i, output = [];
        output[(input.length >> 2) - 1] = undefined;
        for (i = 0; i < output.length; i += 1) {
            output[i] = 0;
        }
        for (i = 0; i < input.length * 8; i += 8) {
            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
        }
        return output;
    }

    function rstr_md5(s) {
        return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
    }

    function rstr_hmac_md5(key, data) {
        var i, bkey = rstr2binl(key), ipad = [], opad = [], hash;
        ipad[15] = opad[15] = undefined;
        if (bkey.length > 16) {
            bkey = binl_md5(bkey, key.length * 8);
        }
        for (i = 0; i < 16; i += 1) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
    }

    function rstr2hex(input) {
        var hex_tab = '0123456789abcdef', output = '', x, i;
        for (i = 0; i < input.length; i += 1) {
            x = input.charCodeAt(i);
            output += hex_tab.charAt((x >>> 4) & 0x0F) +
                hex_tab.charAt(x & 0x0F);
        }
        return output;
    }

    function str2rstr_utf8(input) {
        return unescape(encodeURIComponent(input));
    }

    function raw_md5(s) {
        return rstr_md5(str2rstr_utf8(s));
    }

    function hex_md5(s) {
        return rstr2hex(raw_md5(s));
    }

    function raw_hmac_md5(k, d) {
        return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
    }

    function hex_hmac_md5(k, d) {
        return rstr2hex(raw_hmac_md5(k, d));
    }

    $.md5 = function (string, key, raw) {
        if (!key) {
            if (!raw) {
                return hex_md5(string);
            } else {
                return raw_md5(string);
            }
        }
        if (!raw) {
            return hex_hmac_md5(key, string);
        } else {
            return raw_hmac_md5(key, string);
        }
    };
}(typeof jQuery === 'function' ? jQuery : this));
;(function (window, document) {
    var modalClass = '.sweet-alert', overlayClass = '.sweet-overlay',
        alertTypes = ['error', 'warning', 'info', 'success'], defaultParams = {
            title: '',
            text: '',
            type: null,
            allowOutsideClick: false,
            showCancelButton: false,
            closeOnConfirm: true,
            closeOnCancel: true,
            confirmButtonText: 'OK',
            confirmButtonClass: 'btn-primary',
            cancelButtonText: 'Cancel',
            imageUrl: null,
            imageSize: null,
            timer: null
        };
    var getModal = function () {
        return document.querySelector(modalClass);
    }, getOverlay = function () {
        return document.querySelector(overlayClass);
    }, hasClass = function (elem, className) {
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    }, addClass = function (elem, className) {
        if (!hasClass(elem, className)) {
            elem.className += ' ' + className;
        }
    }, removeClass = function (elem, className) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(' ' + className + ' ') >= 0) {
                newClass = newClass.replace(' ' + className + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
    }, escapeHtml = function (str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }, _show = function (elem) {
        elem.style.opacity = '';
        elem.style.display = 'block';
    }, show = function (elems) {
        if (elems && !elems.length) {
            return _show(elems);
        }
        for (var i = 0; i < elems.length; ++i) {
            _show(elems[i]);
        }
    }, _hide = function (elem) {
        elem.style.opacity = '';
        elem.style.display = 'none';
    }, hide = function (elems) {
        if (elems && !elems.length) {
            return _hide(elems);
        }
        for (var i = 0; i < elems.length; ++i) {
            _hide(elems[i]);
        }
    }, isDescendant = function (parent, child) {
        var node = child.parentNode;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }, getTopMargin = function (elem) {
        elem.style.left = '-9999px';
        elem.style.display = 'block';
        var height = elem.clientHeight;
        var padding = parseInt(getComputedStyle(elem).getPropertyValue('padding'), 10);
        elem.style.left = '';
        elem.style.display = 'none';
        return ('-' + parseInt(height / 2 + padding) + 'px');
    }, fadeIn = function (elem, interval) {
        if (+elem.style.opacity < 1) {
            interval = interval || 16;
            elem.style.opacity = 0;
            elem.style.display = 'block';
            var last = +new Date();
            var tick = function () {
                elem.style.opacity = +elem.style.opacity + (new Date() - last) / 100;
                last = +new Date();
                if (+elem.style.opacity < 1) {
                    setTimeout(tick, interval);
                }
            };
            tick();
        }
    }, fadeOut = function (elem, interval) {
        interval = interval || 16;
        elem.style.opacity = 1;
        var last = +new Date();
        var tick = function () {
            elem.style.opacity = +elem.style.opacity - (new Date() - last) / 100;
            last = +new Date();
            if (+elem.style.opacity > 0) {
                setTimeout(tick, interval);
            } else {
                elem.style.display = 'none';
            }
        };
        tick();
    }, fireClick = function (node) {
        if (MouseEvent) {
            var mevt = new MouseEvent('click', {view: window, bubbles: false, cancelable: true});
            node.dispatchEvent(mevt);
        } else if (document.createEvent) {
            var evt = document.createEvent('MouseEvents');
            evt.initEvent('click', false, false);
            node.dispatchEvent(evt);
        } else if (document.createEventObject) {
            node.fireEvent('onclick');
        } else if (typeof node.onclick === 'function') {
            node.onclick();
        }
    }, stopEventPropagation = function (e) {
        if (typeof e.stopPropagation === 'function') {
            e.stopPropagation();
            e.preventDefault();
        } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
            window.event.cancelBubble = true;
        }
    };
    var previousActiveElement, previousDocumentClick, previousWindowKeyDown, lastFocusedButton;
    window.sweetAlertInitialize = function () {
        var sweetHTML = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p class="lead text-muted">Text</p><p><button class="cancel btn btn-default btn-lg" tabIndex="2">Cancel</button> <button class="confirm btn btn-lg" tabIndex="1">OK</button></p></div>',
            sweetWrap = document.createElement('div');
        sweetWrap.innerHTML = sweetHTML;
        document.body.appendChild(sweetWrap);
    }
    window.sweetAlert = window.swal = function () {
        if (arguments[0] === undefined) {
            window.console.error('sweetAlert expects at least 1 attribute!');
            return false;
        }
        var params = extend({}, defaultParams);
        switch (typeof arguments[0]) {
            case'string':
                params.title = arguments[0];
                params.text = arguments[1] || '';
                params.type = arguments[2] || '';
                break;
            case'object':
                if (arguments[0].title === undefined) {
                    window.console.error('Missing "title" argument!');
                    return false;
                }
                params.title = arguments[0].title;
                params.text = arguments[0].text || defaultParams.text;
                params.type = arguments[0].type || defaultParams.type;
                params.allowOutsideClick = arguments[0].allowOutsideClick || defaultParams.allowOutsideClick;
                params.showCancelButton = arguments[0].showCancelButton !== undefined ? arguments[0].showCancelButton : defaultParams.showCancelButton;
                params.closeOnConfirm = arguments[0].closeOnConfirm !== undefined ? arguments[0].closeOnConfirm : defaultParams.closeOnConfirm;
                params.closeOnCancel = arguments[0].closeOnCancel !== undefined ? arguments[0].closeOnCancel : defaultParams.closeOnCancel;
                params.timer = arguments[0].timer || defaultParams.timer;
                params.confirmButtonText = (defaultParams.showCancelButton) ? 'Confirm' : defaultParams.confirmButtonText;
                params.confirmButtonText = arguments[0].confirmButtonText || defaultParams.confirmButtonText;
                params.confirmButtonClass = arguments[0].confirmButtonClass || defaultParams.confirmButtonClass;
                params.cancelButtonText = arguments[0].cancelButtonText || defaultParams.cancelButtonText;
                params.imageUrl = arguments[0].imageUrl || defaultParams.imageUrl;
                params.imageSize = arguments[0].imageSize || defaultParams.imageSize;
                params.doneFunction = arguments[1] || null;
                break;
            default:
                window.console.error('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]);
                return false;
        }
        setParameters(params);
        fixVerticalPosition();
        openModal();
        var modal = getModal();
        var onButtonEvent = function (e) {
            var target = e.target || e.srcElement, targetedConfirm = (target.className.indexOf('confirm') > -1),
                modalIsVisible = hasClass(modal, 'visible'),
                doneFunctionExists = (params.doneFunction && modal.getAttribute('data-has-done-function') === 'true');
            switch (e.type) {
                case("click"):
                    if (targetedConfirm && doneFunctionExists && modalIsVisible) {
                        params.doneFunction(true);
                        if (params.closeOnConfirm) {
                            closeModal();
                        }
                    } else if (doneFunctionExists && modalIsVisible) {
                        var functionAsStr = String(params.doneFunction).replace(/\s/g, '');
                        var functionHandlesCancel = functionAsStr.substring(0, 9) === "function(" && functionAsStr.substring(9, 10) !== ")";
                        if (functionHandlesCancel) {
                            params.doneFunction(false);
                        }
                        if (params.closeOnCancel) {
                            closeModal();
                        }
                    } else {
                        closeModal();
                    }
                    break;
            }
        };
        var $buttons = modal.querySelectorAll('button');
        for (var i = 0; i < $buttons.length; i++) {
            $buttons[i].onclick = onButtonEvent;
        }
        previousDocumentClick = document.onclick;
        document.onclick = function (e) {
            var target = e.target || e.srcElement;
            var clickedOnModal = (modal === target), clickedOnModalChild = isDescendant(modal, e.target),
                modalIsVisible = hasClass(modal, 'visible'),
                outsideClickIsAllowed = modal.getAttribute('data-allow-ouside-click') === 'true';
            if (!clickedOnModal && !clickedOnModalChild && modalIsVisible && outsideClickIsAllowed) {
                closeModal();
            }
        };
        var $okButton = modal.querySelector('button.confirm'), $cancelButton = modal.querySelector('button.cancel'),
            $modalButtons = modal.querySelectorAll('button:not([type=hidden])');

        function handleKeyDown(e) {
            var keyCode = e.keyCode || e.which;
            if ([9, 13, 32, 27].indexOf(keyCode) === -1) {
                return;
            }
            var $targetElement = e.target || e.srcElement;
            var btnIndex = -1;
            for (var i = 0; i < $modalButtons.length; i++) {
                if ($targetElement === $modalButtons[i]) {
                    btnIndex = i;
                    break;
                }
            }
            if (keyCode === 9) {
                if (btnIndex === -1) {
                    $targetElement = $okButton;
                } else {
                    if (btnIndex === $modalButtons.length - 1) {
                        $targetElement = $modalButtons[0];
                    } else {
                        $targetElement = $modalButtons[btnIndex + 1];
                    }
                }
                stopEventPropagation(e);
                $targetElement.focus();
            } else {
                if (keyCode === 13 || keyCode === 32) {
                    if (btnIndex === -1) {
                        $targetElement = $okButton;
                    } else {
                        $targetElement = undefined;
                    }
                } else if (keyCode === 27 && !($cancelButton.hidden || $cancelButton.style.display === 'none')) {
                    $targetElement = $cancelButton;
                } else {
                    $targetElement = undefined;
                }
                if ($targetElement !== undefined) {
                    fireClick($targetElement, e);
                }
            }
        }

        previousWindowKeyDown = window.onkeydown;
        window.onkeydown = handleKeyDown;

        function handleOnBlur(e) {
            var $targetElement = e.target || e.srcElement, $focusElement = e.relatedTarget,
                modalIsVisible = hasClass(modal, 'visible');
            if (modalIsVisible) {
                var btnIndex = -1;
                if ($focusElement !== null) {
                    for (var i = 0; i < $modalButtons.length; i++) {
                        if ($focusElement === $modalButtons[i]) {
                            btnIndex = i;
                            break;
                        }
                    }
                    if (btnIndex === -1) {
                        $targetElement.focus();
                    }
                } else {
                    lastFocusedButton = $targetElement;
                }
            }
        }

        $okButton.onblur = handleOnBlur;
        $cancelButton.onblur = handleOnBlur;
        window.onfocus = function () {
            window.setTimeout(function () {
                if (lastFocusedButton !== undefined) {
                    lastFocusedButton.focus();
                    lastFocusedButton = undefined;
                }
            }, 0);
        };
    };
    window.swal.setDefaults = function (userParams) {
        if (!userParams) {
            throw new Error('userParams is required');
        }
        if (typeof userParams !== 'object') {
            throw new Error('userParams has to be a object');
        }
        extend(defaultParams, userParams);
    };

    function setParameters(params) {
        var modal = getModal();
        var $title = modal.querySelector('h2'), $text = modal.querySelector('p'),
            $cancelBtn = modal.querySelector('button.cancel'), $confirmBtn = modal.querySelector('button.confirm');
        $title.innerHTML = escapeHtml(params.title).split("\n").join("<br>");
        $text.innerHTML = escapeHtml(params.text || '').split("\n").join("<br>");
        if (params.text) {
            show($text);
        }
        hide(modal.querySelectorAll('.icon'));
        if (params.type) {
            var validType = false;
            for (var i = 0; i < alertTypes.length; i++) {
                if (params.type === alertTypes[i]) {
                    validType = true;
                    break;
                }
            }
            if (!validType) {
                window.console.error('Unknown alert type: ' + params.type);
                return false;
            }
            var $icon = modal.querySelector('.icon.' + params.type);
            show($icon);
            switch (params.type) {
                case"success":
                    addClass($icon, 'animate');
                    addClass($icon.querySelector('.tip'), 'animateSuccessTip');
                    addClass($icon.querySelector('.long'), 'animateSuccessLong');
                    break;
                case"error":
                    addClass($icon, 'animateErrorIcon');
                    addClass($icon.querySelector('.x-mark'), 'animateXMark');
                    break;
                case"warning":
                    addClass($icon, 'pulseWarning');
                    addClass($icon.querySelector('.body'), 'pulseWarningIns');
                    addClass($icon.querySelector('.dot'), 'pulseWarningIns');
                    break;
            }
        }
        if (params.imageUrl) {
            var $customIcon = modal.querySelector('.icon.custom');
            $customIcon.style.backgroundImage = 'url(' + params.imageUrl + ')';
            show($customIcon);
            var _imgWidth = 80, _imgHeight = 80;
            if (params.imageSize) {
                var imgWidth = params.imageSize.split('x')[0];
                var imgHeight = params.imageSize.split('x')[1];
                if (!imgWidth || !imgHeight) {
                    window.console.error("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + params.imageSize);
                } else {
                    _imgWidth = imgWidth;
                    _imgHeight = imgHeight;
                    $customIcon.css({'width': imgWidth + 'px', 'height': imgHeight + 'px'});
                }
            }
            $customIcon.setAttribute('style', $customIcon.getAttribute('style') + 'width:' + _imgWidth + 'px; height:' + _imgHeight + 'px');
        }
        modal.setAttribute('data-has-cancel-button', params.showCancelButton);
        if (params.showCancelButton) {
            $cancelBtn.style.display = 'inline-block';
        } else {
            hide($cancelBtn);
        }
        if (params.cancelButtonText) {
            $cancelBtn.innerHTML = escapeHtml(params.cancelButtonText);
        }
        if (params.confirmButtonText) {
            $confirmBtn.innerHTML = escapeHtml(params.confirmButtonText);
        }
        $confirmBtn.className = 'confirm btn btn-lg'
        addClass($confirmBtn, params.confirmButtonClass);
        modal.setAttribute('data-allow-ouside-click', params.allowOutsideClick);
        var hasDoneFunction = (params.doneFunction) ? true : false;
        modal.setAttribute('data-has-done-function', hasDoneFunction);
        modal.setAttribute('data-timer', params.timer);
    }

    function colorLuminance(hex, lum) {
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        lum = lum || 0;
        var rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00" + c).substr(c.length);
        }
        return rgb;
    }

    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    }

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
    }

    function setFocusStyle($button, bgColor) {
        var rgbColor = hexToRgb(bgColor);
        $button.style.boxShadow = '0 0 2px rgba(' + rgbColor + ', 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)';
    }

    function openModal() {
        var modal = getModal();
        fadeIn(getOverlay(), 10);
        show(modal);
        addClass(modal, 'showSweetAlert');
        removeClass(modal, 'hideSweetAlert');
        previousActiveElement = document.activeElement;
        var $okButton = modal.querySelector('button.confirm');
        $okButton.focus();
        setTimeout(function () {
            addClass(modal, 'visible');
        }, 500);
        var timer = modal.getAttribute('data-timer');
        if (timer !== "null" && timer !== "") {
            setTimeout(function () {
                closeModal();
            }, timer);
        }
    }

    function closeModal() {
        var modal = getModal();
        fadeOut(getOverlay(), 5);
        fadeOut(modal, 5);
        removeClass(modal, 'showSweetAlert');
        addClass(modal, 'hideSweetAlert');
        removeClass(modal, 'visible');
        var $successIcon = modal.querySelector('.icon.success');
        removeClass($successIcon, 'animate');
        removeClass($successIcon.querySelector('.tip'), 'animateSuccessTip');
        removeClass($successIcon.querySelector('.long'), 'animateSuccessLong');
        var $errorIcon = modal.querySelector('.icon.error');
        removeClass($errorIcon, 'animateErrorIcon');
        removeClass($errorIcon.querySelector('.x-mark'), 'animateXMark');
        var $warningIcon = modal.querySelector('.icon.warning');
        removeClass($warningIcon, 'pulseWarning');
        removeClass($warningIcon.querySelector('.body'), 'pulseWarningIns');
        removeClass($warningIcon.querySelector('.dot'), 'pulseWarningIns');
        window.onkeydown = previousWindowKeyDown;
        document.onclick = previousDocumentClick;
        if (previousActiveElement) {
            previousActiveElement.focus();
        }
        lastFocusedButton = undefined;
    }

    function fixVerticalPosition() {
        var modal = getModal();
        modal.style.marginTop = getTopMargin(getModal());
    }

    (function () {
        if (document.readyState === "complete" || document.readyState === "interactive" && document.body) {
            sweetAlertInitialize();
        } else {
            if (document.addEventListener) {
                document.addEventListener('DOMContentLoaded', function factorial() {
                    document.removeEventListener('DOMContentLoaded', arguments.callee, false);
                    sweetAlertInitialize();
                }, false);
            } else if (document.attachEvent) {
                document.attachEvent('onreadystatechange', function () {
                    if (document.readyState === 'complete') {
                        document.detachEvent('onreadystatechange', arguments.callee);
                        sweetAlertInitialize();
                    }
                });
            }
        }
    })();
})(window, document);
;/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
!function (a, b, c, d) {
    var e = a(b);
    a.fn.lazyload = function (f) {
        function g() {
            var b = 0;
            i.each(function () {
                var c = a(this);
                if (!j.skip_invisible || c.is(":visible")) if (a.abovethetop(this, j) || a.leftofbegin(this, j)) ; else if (a.belowthefold(this, j) || a.rightoffold(this, j)) {
                    if (++b > j.failure_limit) return !1
                } else c.trigger("appear"), b = 0
            })
        }

        var h, i = this, j = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: b,
            data_attribute: "original",
            skip_invisible: !0,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };
        return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(j, f)), h = j.container === d || j.container === b ? e : a(j.container), 0 === j.event.indexOf("scroll") && h.bind(j.event, function () {
            return g()
        }), this.each(function () {
            var b = this, c = a(b);
            b.loaded = !1, (c.attr("src") === d || c.attr("src") === !1) && c.is("img") && c.attr("src", j.placeholder), c.one("appear", function () {
                if (!this.loaded) {
                    if (j.appear) {
                        var d = i.length;
                        j.appear.call(b, d, j)
                    }
                    a("<img />").bind("load", function () {
                        var d = c.attr("data-" + j.data_attribute);
                        c.hide(), c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"), c[j.effect](j.effect_speed), b.loaded = !0;
                        var e = a.grep(i, function (a) {
                            return !a.loaded
                        });
                        if (i = a(e), j.load) {
                            var f = i.length;
                            j.load.call(b, f, j)
                        }
                    }).attr("src", c.attr("data-" + j.data_attribute))
                }
            }), 0 !== j.event.indexOf("scroll") && c.bind(j.event, function () {
                b.loaded || c.trigger("appear")
            })
        }), e.bind("resize", function () {
            g()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function (b) {
            b.originalEvent && b.originalEvent.persisted && i.each(function () {
                a(this).trigger("appear")
            })
        }), a(c).ready(function () {
            g()
        }), this
    }, a.belowthefold = function (c, f) {
        var g;
        return g = f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height(), g <= a(c).offset().top - f.threshold
    }, a.rightoffold = function (c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width(), g <= a(c).offset().left - f.threshold
    }, a.abovethetop = function (c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top, g >= a(c).offset().top + f.threshold + a(c).height()
    }, a.leftofbegin = function (c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left, g >= a(c).offset().left + f.threshold + a(c).width()
    }, a.inviewport = function (b, c) {
        return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c))
    }, a.extend(a.expr[":"], {
        "below-the-fold": function (b) {
            return a.belowthefold(b, {threshold: 0})
        }, "above-the-top": function (b) {
            return !a.belowthefold(b, {threshold: 0})
        }, "right-of-screen": function (b) {
            return a.rightoffold(b, {threshold: 0})
        }, "left-of-screen": function (b) {
            return !a.rightoffold(b, {threshold: 0})
        }, "in-viewport": function (b) {
            return a.inviewport(b, {threshold: 0})
        }, "above-the-fold": function (b) {
            return !a.belowthefold(b, {threshold: 0})
        }, "right-of-fold": function (b) {
            return a.rightoffold(b, {threshold: 0})
        }, "left-of-fold": function (b) {
            return !a.rightoffold(b, {threshold: 0})
        }
    })
}(jQuery, window, document);
;/*!
 Colorbox v1.5.4 - 2014-03-07
 jQuery lightbox and modal window plugin
 (c) 2014 Jack Moore - http://www.jacklmoore.com/colorbox
 license: http://www.opensource.org/licenses/mit-license.php
*/
(function ($, document, window) {
    var
        defaults = {
            html: false,
            photo: false,
            iframe: false,
            inline: false,
            transition: "elastic",
            speed: 300,
            fadeOut: 300,
            width: false,
            initialWidth: "600",
            innerWidth: false,
            maxWidth: false,
            height: false,
            initialHeight: "450",
            innerHeight: false,
            maxHeight: false,
            scalePhotos: true,
            scrolling: true,
            opacity: 0.4,
            preloading: true,
            className: false,
            overlayClose: true,
            escKey: true,
            arrowKey: true,
            top: false,
            bottom: false,
            left: false,
            right: false,
            fixed: false,
            data: undefined,
            closeButton: true,
            fastIframe: true,
            open: false,
            reposition: true,
            loop: true,
            slideshow: false,
            slideshowAuto: true,
            slideshowSpeed: 2500,
            slideshowStart: "start slideshow",
            slideshowStop: "stop slideshow",
            photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
            retinaImage: false,
            retinaUrl: false,
            retinaSuffix: '@2x.$1',
            current: "image {current} of {total}",
            previous: "previous",
            next: "next",
            close: "close",
            xhrError: "This content failed to load.",
            imgError: "This image failed to load.",
            returnFocus: true,
            trapFocus: true,
            onOpen: false,
            onLoad: false,
            onComplete: false,
            onCleanup: false,
            onClosed: false,
            rel: function () {
                return this.rel;
            },
            href: function () {
                return $(this).attr('href');
            },
            title: function () {
                return this.title;
            }
        }, colorbox = 'colorbox', prefix = 'cbox', boxElement = prefix + 'Element', event_open = prefix + '_open',
        event_load = prefix + '_load', event_complete = prefix + '_complete', event_cleanup = prefix + '_cleanup',
        event_closed = prefix + '_closed', event_purge = prefix + '_purge', $overlay, $box, $wrap, $content, $topBorder,
        $leftBorder, $rightBorder, $bottomBorder, $related, $window, $loaded, $loadingBay, $loadingOverlay, $title,
        $current, $slideshow, $next, $prev, $close, $groupControls, $events = $('<a/>'), settings, interfaceHeight,
        interfaceWidth, loadedHeight, loadedWidth, index, photo, open, active, closing, loadingTimer, publicMethod,
        div = "div", requests = 0, previousCSS = {}, init;

    function $tag(tag, id, css) {
        var element = document.createElement(tag);
        if (id) {
            element.id = prefix + id;
        }
        if (css) {
            element.style.cssText = css;
        }
        return $(element);
    }

    function winheight() {
        return window.innerHeight ? window.innerHeight : $(window).height();
    }

    function Settings(element, options) {
        if (options !== Object(options)) {
            options = {};
        }
        this.cache = {};
        this.el = element;
        this.value = function (key) {
            var dataAttr;
            if (this.cache[key] === undefined) {
                dataAttr = $(this.el).attr('data-cbox-' + key);
                if (dataAttr !== undefined) {
                    this.cache[key] = dataAttr;
                } else if (options[key] !== undefined) {
                    this.cache[key] = options[key];
                } else if (defaults[key] !== undefined) {
                    this.cache[key] = defaults[key];
                }
            }
            return this.cache[key];
        };
        this.get = function (key) {
            var value = this.value(key);
            return $.isFunction(value) ? value.call(this.el, this) : value;
        };
    }

    function getIndex(increment) {
        var
            max = $related.length, newIndex = (index + increment) % max;
        return (newIndex < 0) ? max + newIndex : newIndex;
    }

    function setSize(size, dimension) {
        return Math.round((/%/.test(size) ? ((dimension === 'x' ? $window.width() : winheight()) / 100) : 1) * parseInt(size, 10));
    }

    function isImage(settings, url) {
        return settings.get('photo') || settings.get('photoRegex').test(url);
    }

    function retinaUrl(settings, url) {
        return settings.get('retinaUrl') && window.devicePixelRatio > 1 ? url.replace(settings.get('photoRegex'), settings.get('retinaSuffix')) : url;
    }

    function trapFocus(e) {
        if ('contains' in $box[0] && !$box[0].contains(e.target) && e.target !== $overlay[0]) {
            e.stopPropagation();
            $box.focus();
        }
    }

    function setClass(str) {
        if (setClass.str !== str) {
            $box.add($overlay).removeClass(setClass.str).addClass(str);
            setClass.str = str;
        }
    }

    function getRelated() {
        index = 0;
        if (rel && rel !== 'nofollow') {
            $related = $('.' + boxElement).filter(function () {
                var options = $.data(this, colorbox);
                var settings = new Settings(this, options);
                return (settings.get('rel') === rel);
            });
            index = $related.index(settings.el);
            if (index === -1) {
                $related = $related.add(settings.el);
                index = $related.length - 1;
            }
        } else {
            $related = $(settings.el);
        }
    }

    function trigger(event) {
        $(document).trigger(event);
        $events.triggerHandler(event);
    }

    var slideshow = (function () {
        var active, className = prefix + "Slideshow_", click = "click." + prefix, timeOut;

        function clear() {
            clearTimeout(timeOut);
        }

        function set() {
            if (settings.get('loop') || $related[index + 1]) {
                clear();
                timeOut = setTimeout(publicMethod.next, settings.get('slideshowSpeed'));
            }
        }

        function start() {
            $slideshow.html(settings.get('slideshowStop')).unbind(click).one(click, stop);
            $events.bind(event_complete, set).bind(event_load, clear);
            $box.removeClass(className + "off").addClass(className + "on");
        }

        function stop() {
            clear();
            $events.unbind(event_complete, set).unbind(event_load, clear);
            $slideshow.html(settings.get('slideshowStart')).unbind(click).one(click, function () {
                publicMethod.next();
                start();
            });
            $box.removeClass(className + "on").addClass(className + "off");
        }

        function reset() {
            active = false;
            $slideshow.hide();
            clear();
            $events.unbind(event_complete, set).unbind(event_load, clear);
            $box.removeClass(className + "off " + className + "on");
        }

        return function () {
            if (active) {
                if (!settings.get('slideshow')) {
                    $events.unbind(event_cleanup, reset);
                    reset();
                }
            } else {
                if (settings.get('slideshow') && $related[1]) {
                    active = true;
                    $events.one(event_cleanup, reset);
                    if (settings.get('slideshowAuto')) {
                        start();
                    } else {
                        stop();
                    }
                    $slideshow.show();
                }
            }
        };
    }());

    function launch(element) {
        var options;
        if (!closing) {
            options = $(element).data('colorbox');
            settings = new Settings(element, options);
            rel = settings.get('rel');
            getRelated();
            if (!open) {
                open = active = true;
                setClass(settings.get('className'));
                $box.css({visibility: 'hidden', display: 'block'});
                $loaded = $tag(div, 'LoadedContent', 'width:0; height:0; overflow:hidden; visibility:hidden');
                $content.css({width: '', height: ''}).append($loaded);
                interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height();
                interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
                loadedHeight = $loaded.outerHeight(true);
                loadedWidth = $loaded.outerWidth(true);
                settings.w = setSize(settings.get('initialWidth'), 'x');
                settings.h = setSize(settings.get('initialHeight'), 'y');
                $loaded.css({width: '', height: settings.h});
                publicMethod.position();
                trigger(event_open);
                settings.get('onOpen');
                $groupControls.add($title).hide();
                $box.focus();
                if (settings.get('trapFocus')) {
                    if (document.addEventListener) {
                        document.addEventListener('focus', trapFocus, true);
                        $events.one(event_closed, function () {
                            document.removeEventListener('focus', trapFocus, true);
                        });
                    }
                }
                if (settings.get('returnFocus')) {
                    $events.one(event_closed, function () {
                        $(settings.el).focus();
                    });
                }
            }
            $overlay.css({
                opacity: parseFloat(settings.get('opacity')),
                cursor: settings.get('overlayClose') ? "pointer" : "auto",
                visibility: 'visible'
            }).show();
            if (settings.get('closeButton')) {
                $close.html(settings.get('close')).appendTo($content);
            } else {
                $close.appendTo('<div/>');
            }
            load();
        }
    }

    function appendHTML() {
        if (!$box && document.body) {
            init = false;
            $window = $(window);
            $box = $tag(div).attr({
                id: colorbox,
                'class': $.support.opacity === false ? prefix + 'IE' : '',
                role: 'dialog',
                tabindex: '-1'
            }).hide();
            $overlay = $tag(div, "Overlay").hide();
            $loadingOverlay = $([$tag(div, "LoadingOverlay")[0], $tag(div, "LoadingGraphic")[0]]);
            $wrap = $tag(div, "Wrapper");
            $content = $tag(div, "Content").append($title = $tag(div, "Title"), $current = $tag(div, "Current"), $prev = $('<button type="button"/>').attr({id: prefix + 'Previous'}), $next = $('<button type="button"/>').attr({id: prefix + 'Next'}), $slideshow = $tag('button', "Slideshow"), $loadingOverlay);
            $close = $('<button type="button"/>').attr({id: prefix + 'Close'});
            $wrap.append($tag(div).append($tag(div, "TopLeft"), $topBorder = $tag(div, "TopCenter"), $tag(div, "TopRight")), $tag(div, false, 'clear:left').append($leftBorder = $tag(div, "MiddleLeft"), $content, $rightBorder = $tag(div, "MiddleRight")), $tag(div, false, 'clear:left').append($tag(div, "BottomLeft"), $bottomBorder = $tag(div, "BottomCenter"), $tag(div, "BottomRight"))).find('div div').css({'float': 'left'});
            $loadingBay = $tag(div, false, 'position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;');
            $groupControls = $next.add($prev).add($current).add($slideshow);
            $(document.body).append($overlay, $box.append($wrap, $loadingBay));
        }
    }

    function addBindings() {
        function clickHandler(e) {
            if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                launch(this);
            }
        }

        if ($box) {
            if (!init) {
                init = true;
                $next.click(function () {
                    publicMethod.next();
                });
                $prev.click(function () {
                    publicMethod.prev();
                });
                $close.click(function () {
                    publicMethod.close();
                });
                $overlay.click(function () {
                    if (settings.get('overlayClose')) {
                        publicMethod.close();
                    }
                });
                $(document).bind('keydown.' + prefix, function (e) {
                    var key = e.keyCode;
                    if (open && settings.get('escKey') && key === 27) {
                        e.preventDefault();
                        publicMethod.close();
                    }
                    if (open && settings.get('arrowKey') && $related[1] && !e.altKey) {
                        if (key === 37) {
                            e.preventDefault();
                            $prev.click();
                        } else if (key === 39) {
                            e.preventDefault();
                            $next.click();
                        }
                    }
                });
                if ($.isFunction($.fn.on)) {
                    $(document).on('click.' + prefix, '.' + boxElement, clickHandler);
                } else {
                    $('.' + boxElement).live('click.' + prefix, clickHandler);
                }
            }
            return true;
        }
        return false;
    }

    if ($.colorbox) {
        return;
    }
    $(appendHTML);
    publicMethod = $.fn[colorbox] = $[colorbox] = function (options, callback) {
        var settings;
        var $obj = this;
        options = options || {};
        if ($.isFunction($obj)) {
            $obj = $('<a/>');
            options.open = true;
        } else if (!$obj[0]) {
            return $obj;
        }
        if (!$obj[0]) {
            return $obj;
        }
        appendHTML();
        if (addBindings()) {
            if (callback) {
                options.onComplete = callback;
            }
            $obj.each(function () {
                var old = $.data(this, colorbox) || {};
                $.data(this, colorbox, $.extend(old, options));
            }).addClass(boxElement);
            settings = new Settings($obj[0], options);
            if (settings.get('open')) {
                launch($obj[0]);
            }
        }
        return $obj;
    };
    publicMethod.position = function (speed, loadedCallback) {
        var
            css, top = 0, left = 0, offset = $box.offset(), scrollTop, scrollLeft;
        $window.unbind('resize.' + prefix);
        $box.css({top: -9e4, left: -9e4});
        scrollTop = $window.scrollTop();
        scrollLeft = $window.scrollLeft();
        if (settings.get('fixed')) {
            offset.top -= scrollTop;
            offset.left -= scrollLeft;
            $box.css({position: 'fixed'});
        } else {
            top = scrollTop;
            left = scrollLeft;
            $box.css({position: 'absolute'});
        }
        if (settings.get('right') !== false) {
            left += Math.max($window.width() - settings.w - loadedWidth - interfaceWidth - setSize(settings.get('right'), 'x'), 0);
        } else if (settings.get('left') !== false) {
            left += setSize(settings.get('left'), 'x');
        } else {
            left += Math.round(Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2);
        }
        if (settings.get('bottom') !== false) {
            top += Math.max(winheight() - settings.h - loadedHeight - interfaceHeight - setSize(settings.get('bottom'), 'y'), 0);
        } else if (settings.get('top') !== false) {
            top += setSize(settings.get('top'), 'y');
        } else {
            top += Math.round(Math.max(winheight() - settings.h - loadedHeight - interfaceHeight, 0) / 2);
        }
        $box.css({top: offset.top, left: offset.left, visibility: 'visible'});
        $wrap[0].style.width = $wrap[0].style.height = "9999px";

        function modalDimensions() {
            $topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = (parseInt($box[0].style.width, 10) - interfaceWidth) + 'px';
            $content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = (parseInt($box[0].style.height, 10) - interfaceHeight) + 'px';
        }

        css = {
            width: settings.w + loadedWidth + interfaceWidth,
            height: settings.h + loadedHeight + interfaceHeight,
            top: top,
            left: left
        };
        if (speed) {
            var tempSpeed = 0;
            $.each(css, function (i) {
                if (css[i] !== previousCSS[i]) {
                    tempSpeed = speed;
                    return;
                }
            });
            speed = tempSpeed;
        }
        previousCSS = css;
        if (!speed) {
            $box.css(css);
        }
        $box.dequeue().animate(css, {
            duration: speed || 0, complete: function () {
                modalDimensions();
                active = false;
                $wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + "px";
                $wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + "px";
                if (settings.get('reposition')) {
                    setTimeout(function () {
                        $window.bind('resize.' + prefix, publicMethod.position);
                    }, 1);
                }
                if (loadedCallback) {
                    loadedCallback();
                }
            }, step: modalDimensions
        });
    };
    publicMethod.resize = function (options) {
        var scrolltop;
        if (open) {
            options = options || {};
            if (options.width) {
                settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
            }
            if (options.innerWidth) {
                settings.w = setSize(options.innerWidth, 'x');
            }
            $loaded.css({width: settings.w});
            if (options.height) {
                settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
            }
            if (options.innerHeight) {
                settings.h = setSize(options.innerHeight, 'y');
            }
            if (!options.innerHeight && !options.height) {
                scrolltop = $loaded.scrollTop();
                $loaded.css({height: "auto"});
                settings.h = $loaded.height();
            }
            $loaded.css({height: settings.h});
            if (scrolltop) {
                $loaded.scrollTop(scrolltop);
            }
            publicMethod.position(settings.get('transition') === "none" ? 0 : settings.get('speed'));
        }
    };
    publicMethod.prep = function (object) {
        if (!open) {
            return;
        }
        var callback, speed = settings.get('transition') === "none" ? 0 : settings.get('speed');
        $loaded.remove();
        $loaded = $tag(div, 'LoadedContent').append(object);

        function getWidth() {
            settings.w = settings.w || $loaded.width();
            settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
            return settings.w;
        }

        function getHeight() {
            settings.h = settings.h || $loaded.height();
            settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
            return settings.h;
        }

        $loaded.hide().appendTo($loadingBay.show()).css({
            width: getWidth(),
            overflow: settings.get('scrolling') ? 'auto' : 'hidden'
        }).css({height: getHeight()}).prependTo($content);
        $loadingBay.hide();
        $(photo).css({'float': 'none'});
        setClass(settings.get('className'));
        callback = function () {
            var total = $related.length, iframe, complete;
            if (!open) {
                return;
            }

            function removeFilter() {
                if ($.support.opacity === false) {
                    $box[0].style.removeAttribute('filter');
                }
            }

            complete = function () {
                clearTimeout(loadingTimer);
                $loadingOverlay.hide();
                trigger(event_complete);
                settings.get('onComplete');
            };
            $title.html(settings.get('title')).show();
            $loaded.show();
            if (total > 1) {
                if (typeof settings.get('current') === "string") {
                    $current.html(settings.get('current').replace('{current}', index + 1).replace('{total}', total)).show();
                }
                $next[(settings.get('loop') || index < total - 1) ? "show" : "hide"]().html(settings.get('next'));
                $prev[(settings.get('loop') || index) ? "show" : "hide"]().html(settings.get('previous'));
                slideshow();
                if (settings.get('preloading')) {
                    $.each([getIndex(-1), getIndex(1)], function () {
                        var img, i = $related[this], settings = new Settings(i, $.data(i, colorbox)),
                            src = settings.get('href');
                        if (src && isImage(settings, src)) {
                            src = retinaUrl(settings, src);
                            img = document.createElement('img');
                            img.src = src;
                        }
                    });
                }
            } else {
                $groupControls.hide();
            }
            if (settings.get('iframe')) {
                iframe = document.createElement('iframe');
                if ('frameBorder' in iframe) {
                    iframe.frameBorder = 0;
                }
                if ('allowTransparency' in iframe) {
                    iframe.allowTransparency = "true";
                }
                if (!settings.get('scrolling')) {
                    iframe.scrolling = "no";
                }
                $(iframe).attr({
                    src: settings.get('href'),
                    name: (new Date()).getTime(),
                    'class': prefix + 'Iframe',
                    allowFullScreen: true
                }).one('load', complete).appendTo($loaded);
                $events.one(event_purge, function () {
                    iframe.src = "http://about:blank/";
                });
                if (settings.get('fastIframe')) {
                    $(iframe).trigger('load');
                }
            } else {
                complete();
            }
            if (settings.get('transition') === 'fade') {
                $box.fadeTo(speed, 1, removeFilter);
            } else {
                removeFilter();
            }
        };
        if (settings.get('transition') === 'fade') {
            $box.fadeTo(speed, 0, function () {
                publicMethod.position(0, callback);
            });
        } else {
            publicMethod.position(speed, callback);
        }
    };

    function load() {
        var href, setResize, prep = publicMethod.prep, $inline, request = ++requests;
        active = true;
        photo = false;
        trigger(event_purge);
        trigger(event_load);
        settings.get('onLoad');
        settings.h = settings.get('height') ? setSize(settings.get('height'), 'y') - loadedHeight - interfaceHeight : settings.get('innerHeight') && setSize(settings.get('innerHeight'), 'y');
        settings.w = settings.get('width') ? setSize(settings.get('width'), 'x') - loadedWidth - interfaceWidth : settings.get('innerWidth') && setSize(settings.get('innerWidth'), 'x');
        settings.mw = settings.w;
        settings.mh = settings.h;
        if (settings.get('maxWidth')) {
            settings.mw = setSize(settings.get('maxWidth'), 'x') - loadedWidth - interfaceWidth;
            settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
        }
        if (settings.get('maxHeight')) {
            settings.mh = setSize(settings.get('maxHeight'), 'y') - loadedHeight - interfaceHeight;
            settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
        }
        href = settings.get('href');
        loadingTimer = setTimeout(function () {
            $loadingOverlay.show();
        }, 100);
        if (settings.get('inline')) {
            $inline = $tag(div).hide().insertBefore($(href)[0]);
            $events.one(event_purge, function () {
                $inline.replaceWith($loaded.children());
            });
            prep($(href));
        } else if (settings.get('iframe')) {
            prep(" ");
        } else if (settings.get('html')) {
            prep(settings.get('html'));
        } else if (isImage(settings, href)) {
            href = retinaUrl(settings, href);
            photo = document.createElement('img');
            $(photo).addClass(prefix + 'Photo').bind('error', function () {
                prep($tag(div, 'Error').html(settings.get('imgError')));
            }).one('load', function () {
                var percent;
                if (request !== requests) {
                    return;
                }
                $.each(['alt', 'longdesc', 'aria-describedby'], function (i, val) {
                    var attr = $(settings.el).attr(val) || $(settings.el).attr('data-' + val);
                    if (attr) {
                        photo.setAttribute(val, attr);
                    }
                });
                if (settings.get('retinaImage') && window.devicePixelRatio > 1) {
                    photo.height = photo.height / window.devicePixelRatio;
                    photo.width = photo.width / window.devicePixelRatio;
                }
                if (settings.get('scalePhotos')) {
                    setResize = function () {
                        photo.height -= photo.height * percent;
                        photo.width -= photo.width * percent;
                    };
                    if (settings.mw && photo.width > settings.mw) {
                        percent = (photo.width - settings.mw) / photo.width;
                        setResize();
                    }
                    if (settings.mh && photo.height > settings.mh) {
                        percent = (photo.height - settings.mh) / photo.height;
                        setResize();
                    }
                }
                if (settings.h) {
                    photo.style.marginTop = Math.max(settings.mh - photo.height, 0) / 2 + 'px';
                }
                if ($related[1] && (settings.get('loop') || $related[index + 1])) {
                    photo.style.cursor = 'pointer';
                    photo.onclick = function () {
                        publicMethod.next();
                    };
                }
                photo.style.width = photo.width + 'px';
                photo.style.height = photo.height + 'px';
                setTimeout(function () {
                    prep(photo);
                }, 1);
            });
            setTimeout(function () {
                photo.src = href;
            }, 1);
        } else if (href) {
            $loadingBay.load(href, settings.get('data'), function (data, status) {
                if (request === requests) {
                    prep(status === 'error' ? $tag(div, 'Error').html(settings.get('xhrError')) : $(this).contents());
                }
            });
        }
    }

    publicMethod.next = function () {
        if (!active && $related[1] && (settings.get('loop') || $related[index + 1])) {
            index = getIndex(1);
            launch($related[index]);
        }
    };
    publicMethod.prev = function () {
        if (!active && $related[1] && (settings.get('loop') || index)) {
            index = getIndex(-1);
            launch($related[index]);
        }
    };
    publicMethod.close = function () {
        if (open && !closing) {
            closing = true;
            open = false;
            trigger(event_cleanup);
            settings.get('onCleanup');
            $window.unbind('.' + prefix);
            $overlay.fadeTo(settings.get('fadeOut') || 0, 0);
            $box.stop().fadeTo(settings.get('fadeOut') || 0, 0, function () {
                $box.add($overlay).css({'opacity': 1, cursor: 'auto'}).hide();
                trigger(event_purge);
                $loaded.remove();
                setTimeout(function () {
                    closing = false;
                    trigger(event_closed);
                    settings.get('onClosed');
                }, 1);
            });
        }
    };
    publicMethod.remove = function () {
        if (!$box) {
            return;
        }
        $box.stop();
        $.colorbox.close();
        $box.stop().remove();
        $overlay.remove();
        closing = false;
        $box = null;
        $('.' + boxElement).removeData(colorbox).removeClass(boxElement);
        $(document).unbind('click.' + prefix);
    };
    publicMethod.element = function () {
        return $(settings.el);
    };
    publicMethod.settings = defaults;
}(jQuery, document, window));
;var bIsChrome = false;
var dont_hide_overlay = false;
var isMobile = false;
(function ($) {
    $(".link_login_popup").colorbox({
        inline: true, width: "340px", onComplete: function () {
            $("#login_email").focus();
        }
    });
    $(".link_register_popup").colorbox({
        inline: true, width: "340px", onComplete: function () {
            $("#register_name").focus();
        }
    });
    $(".link_forgot_popup").colorbox({
        inline: true, width: "340px", onComplete: function () {
            $("#forgot_email").focus();
        }
    });
    $(".link_reset_popup").colorbox({
        inline: true, width: "340px", onComplete: function () {
            $("#reset_password").focus();
        }
    });
    $.fn.menumaker = function (options) {
        var cssmenu = $(this), settings = $.extend({title: "", format: "dropdown", sticky: false}, options);
        return this.each(function () {
            cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
            $(this).find("#menu-button").on('click', function () {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.hide().removeClass('open');
                } else {
                    mainmenu.show().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').slideToggle();
                    }
                }
            });
            cssmenu.find('li ul').parent().addClass('has-sub');
            multiTg = function () {
                cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                cssmenu.find('.submenu-button').on('click', function () {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').slideToggle();
                    } else {
                        $(this).siblings('ul').addClass('open').slideToggle();
                    }
                });
            };
            if (settings.format === 'multitoggle') multiTg(); else cssmenu.addClass('dropdown');
            if (settings.sticky === true) cssmenu.css('position', 'fixed');
            resizeFix = function () {
                if ($(window).width() > 980) {
                    cssmenu.find('ul').show();
                }
                if ($(window).width() <= 980) {
                    cssmenu.find('ul').hide().removeClass('open');
                }
            };
            resizeFix();
        });
    };
})(jQuery);
(function ($) {
    $(document).ready(function () {
        $("#main_cate_menu").menumaker({title: "", format: "multitoggle"});
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
            isMobile = true;
        }
    });
})(jQuery);
$(document).ready(function () {
    $('#slide_banner').each(function () {
        if ($(this).find("div").length > 1) {
            var has_nav = true;
            if ($(this).hasClass("mb")) {
                has_nav = false;
            }
            $(this).owlCarousel({
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: false,
                nav: has_nav,
                navSpeed: 500,
                dots: false,
                margin: 25,
                smartSpeed: 1000,
                loop: true,
                items: 1
            })
        }
    });
    $('.slide_pros').each(function () {
        if ($(this).find("div").length > 1) $(this).owlCarousel({
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            nav: true,
            navSpeed: 500,
            dots: false,
            margin: 15,
            smartSpeed: 1000,
            loop: true,
            items: 5,
            responsive: {0: {items: 1}, 320: {items: 2}, 640: {items: 3}, 768: {items: 4}, 980: {items: 5}}
        })
    });
    autoresize();

    function autoresize() {
        var w0 = $('#right_top_main').outerWidth();
        $('.list_categories').css('width', w0 + 1);
        var h0 = $('.t_menu').outerHeight();
        var n = $("#main_cate_menu .m_li").length;
        var h_c = h0 * n + n;
        $('#main_cate_menu').css('height', h_c);
        $('.list_categories').css('min-height', h_c + 1);
        if ($(window).width() < 768) {
            $(".most-viewed ul").hide();
            $('.most-viewed .title_filter').click(function (e) {
                var _ul = $(this).next('.most-viewed ul');
                if (_ul.hasClass("open")) {
                    _ul.slideUp('slow');
                    _ul.removeClass("open");
                } else {
                    _ul.slideDown('slow');
                    _ul.addClass("open");
                }
                $(this).toggleClass('current');
                e.preventDefault();
            });
        }
        var w1 = $('.container').outerWidth();
        $('#nav_Tab').css('width', w1);
    }

    var zoomCollection = '#image';
    if ($(zoomCollection).hasClass('not-zoom') == true) {
        $(zoomCollection).bind('touchstart', function () {
            $(zoomCollection).unbind('touchmove');
        });
    }
    $(zoomCollection).elevateZoom({
        lensShape: "basic",
        lensSize: 150,
        gallery: 'image-additional-carousel',
        cursor: 'crosshair',
        galleryActiveClass: "active"
    });
    $(".main_img img").bind("click", function (e) {
        var ez = $('.main_img img').data('elevateZoom');
        $.fancybox(ez.getGalleryList());
        return false;
    });
    $('.slide_thumbs .thumb:first .imagezoom').addClass('active');
    $('.slide_thumbs .thumb:first .imagezoom').removeClass('fancybox_pro');
    $('.slide_thumbs').each(function () {
        if ($(this).find("div").length > 1) {
            $(this).owlCarousel({
                autoplay: true,
                autoplayTimeout: 10000,
                autoplayHoverPause: true,
                nav: true,
                navSpeed: 500,
                dots: false,
                margin: 10,
                smartSpeed: 1000,
                loop: true,
                items: 4,
                responsive: {0: {items: 3}, 480: {items: 4}, 768: {items: 3}, 980: {items: 4}}
            })
        } else {
            $(this).parent().hide();
            $('.slide_thumbs .imagezoom').removeClass('fancybox_pro');
        }
    });
    $('#tab_menu_detail a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('#tab_menu_detail a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        var target = this.hash, menu = target;
        $target = $(target);
        $('html, body').stop().animate({'scrollTop': $target.offset().top}, 500, 'swing', function () {
        });
    });
    $("#video_side iframe, .info_g iframe").wrap("<div class='videoWrapper'></div>");
    $(".videoWrapper").wrap("<div class='youtubevideowrap'></div>");
    $('#keyword').keypress(function (event) {
        if (event.keyCode == '13') {
            searchProducts();
        }
    });
    $("#lnk-search").click(function () {
        searchProducts();
    });
    if ($('#keyword_empty').exists()) {
        $('#keyword_empty').keypress(function (event) {
            if (event.keyCode == '13') {
                searchProducts('keyword_empty');
            }
        });
        $("#btn-search").click(function () {
            searchProducts('keyword_empty');
        });
    }
    $("img.lazy").lazyload({effect: "fadeIn"});
    $("body").append('<div id="overlay"></div><div id="pn_to_top"><a href="javascript: void(0)"></a></div>');
    if ($(".user-link").length > 0) {
        if (isMobile === true) {
            $(".user-link").click(function () {
                $("#panel-user-login").show();
                $(".user-link").css("z-index", "9999");
                $(".header-news-promotion-notify").css("z-index", "99991");
                showOverlay();
            });
        } else {
            $(".user-link").hover(function () {
                $("#panel-user-login").show();
                $(".user-link").css("z-index", "9999");
                $(".header-news-promotion-notify").css("z-index", "99991");
                showOverlay();
            }, function () {
            });
        }
        $("#panel-user-login").hover(function () {
        }, function () {
            $(this).hide();
            hideOverlay();
            $(".user-link").css("z-index", "1");
        });
        $(".link_login_popup").click(function () {
            $("#panel-user-login").hide();
            hideOverlay();
        });
        $(".link_register_popup").click(function () {
            $("#panel-user-login").hide();
            hideOverlay();
        });
    }
    if ($(".header-news-promotion-notify").length > 0) {
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: '/my_news_promotion.php',
            data: {action: "total_notify"},
            beforeSend: function () {
            },
            success: function (data) {
                if (data.status == 'success') {
                    if (data.total !== undefined && data.total > 0) {
                        if ($("#elm-news-promotion-notify").length > 0) {
                            $("#elm-news-promotion-notify").html(data.total).show();
                        }
                        $(".header-news-promotion-notify").html(data.total).show();
                    }
                }
            }
        });
    }
});
$(".collap").click(function () {
    $(".form_write_comment").toggle("200");
});
$(".write_comment_btn").click(function () {
    var $el = $(this);
    $el.text($el.text() == "Đóng" ? "Viết nhận xét của bạn" : "Đóng");
    $("#review_name").focus();
});
$(".review_action").click(function () {
    $(this).parent().next(".quick_reply").toggle("200").siblings(".quick_reply:visible").hide(200);
});
$(".review_action").click(function () {
    var $el1 = $(this);
    $el1.text($el1.text() == "Hủy bỏ" ? "Gửi trả lời" : "Hủy bỏ");
    $el.toggleClass('cl_red');
});

function searchProducts(input) {
    if (typeof (input) == 'undefined') input = 'keyword';
    var keyword = $("#" + input).val();
    if (keyword == "" || keyword == "Nhập tên sản phẩm") {
        $("#" + input).focus();
        swal({
            title: "Thông báo lỗi",
            text: "Bạn vui lòng nhập từ khóa tìm kiếm",
            type: "error",
            showCancelButton: false
        });
    } else {
        window.location = sSearchUrl + '?keyword=' + keyword;
    }
}

var windowPopupLogin;

function callPopupLogin(url, url_redirect_param) {
    if (typeof (url_redirect_param) == 'undefined') url_redirect_param = '';
    url_redirect = url_redirect_param;
    $("#panel-user-login").hide();
    var screenX = typeof window.screenX != "undefined" ? window.screenX : window.screenLeft,
        screenY = typeof window.screenY != "undefined" ? window.screenY : window.screenTop,
        outerWidth = typeof window.outerWidth != "undefined" ? window.outerWidth : document.body.clientWidth,
        outerHeight = typeof window.outerHeight != "undefined" ? window.outerHeight : (document.body.clientHeight - 22),
        width = 600, height = 600, left = parseInt(screenX + ((outerWidth - width) / 2), 10),
        top = parseInt(screenY + ((outerHeight - height) / 2.5), 10),
        features = ("width=" + width + ",height=" + height + ",left=" + left + ",top=" + top);
    windowPopupLogin = window.open(url, "windowPopupLogin", features);
    if (window.focus) {
        windowPopupLogin.focus()
    }
    return false;
}

function popUpClosed(isLoginRegiterFB, data_user) {
    if (isLoginRegiterFB == 1) {
        if (typeof (oFunctionSubmitFromPopupLogin) == "function") oFunctionSubmitFromPopupLogin.call(); else {
            dont_hide_overlay = false;
            $("#popup-center iframe").attr("src", "");
            $("#popup-center").hide();
            hideOverlay();
            if (url_redirect != '') {
                window.location = url_redirect;
            } else window.location.reload();
        }
    } else if (isLoginRegiterFB == 2) {
        dont_hide_overlay = false;
        $("#popup-center iframe").attr("src", "");
        $("#popup-center").hide();
        hideOverlay();
        if (url_redirect != '') {
            window.location = url_redirect;
        } else window.location.reload();
    } else {
        dont_hide_overlay = false;
        $("#popup-center iframe").attr("src", "");
        $("#popup-center").hide();
        hideOverlay();
    }
}

function forgot() {
    var email = $("#forgot_email").val();
    $("#login_email").closest(".input_form").removeClass('has-error');
    if (email == '') {
        $("#forgot_email").closest(".input_form").addClass('has-error');
        $("#forgot_email").focus();
        return false;
    } else if (!email_valid(email) && !validatePhone(email)) {
        $("#forgot_email").closest(".input_form").addClass('has-error');
        $("#forgot_email").focus();
        swal('', 'E-mail hoặc số điện thoại quý khách nhập không đúng định dạng', 'error');
        return false;
    }
    var l_btn = Ladda.create(document.querySelector('#button_forgot'));
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: '/forgot.php',
        data: $("#forgot_form").serialize(),
        beforeSend: function () {
            l_btn.start();
        },
        success: function (data) {
            l_btn.stop();
            if (data.status == 'success') {
                window.location = decodeURIComponent(data.direct_url);
            } else if (data.status == 'fail') {
                if (typeof (data.message) != 'undefined') {
                    if (typeof (data.input) != 'undefined') {
                        if (data.input == 'email') {
                            $("#forgot_email").focus();
                        }
                    }
                    swal('', data.message, 'error');
                }
            }
        }
    });
}

function resetPass() {
    var reset_password = $("#reset_password").val();
    var reset_retype_password = $("#reset_retype_password").val();
    $("#reset_password").closest(".input_form").removeClass('has-error');
    $("#reset_retype_password").closest(".input_form").removeClass('has-error');
    if (reset_password == '') {
        $("#reset_password").closest(".input_form").addClass('has-error');
        $("#reset_password").focus();
        return false;
    }
    if (reset_retype_password == '') {
        $("#reset_retype_password").closest(".input_form").addClass('has-error');
        $("#reset_retype_password").focus();
        return false;
    } else if (reset_retype_password != reset_password) {
        $("#reset_retype_password").closest(".input_form").addClass('has-error');
        $("#reset_retype_password").focus();
        swal('', 'Bạn nhập lại mật khẩu không đúng', 'error');
        return false;
    }
    var data_form = $("#reset_form").serializeArray();
    var data_post = new Array();
    for (var i in data_form) {
        var param_name = data_form[i].name;
        var param_value = data_form[i].value;
        if (param_name == 'password' || param_name == 'retype_password') {
            param_value = $.md5(param_value);
        }
        data_post.push({"name": param_name, "value": param_value});
    }
    var l_btn = Ladda.create(document.querySelector('#button_reset_pass'));
    $.ajax({
        type: 'post', dataType: 'json', url: '/resetPass.php', data: data_post, beforeSend: function () {
            l_btn.start();
        }, success: function (data) {
            l_btn.stop();
            if (data.status == 'success') {
                window.location = decodeURIComponent(data.direct_url);
            } else if (data.status == 'fail') {
                if (typeof (data.message) != 'undefined') {
                    swal('', data.message, 'error');
                }
            }
        }
    });
}

function signin() {
    var email = $("#login_email").val();
    var password = $("#login_password").val();
    $("#login_email").closest(".input_form").removeClass('has-error');
    $("#login_password").closest(".input_form").removeClass('has-error');
    if (email == '') {
        $("#login_email").closest(".input_form").addClass('has-error');
        $("#login_email").focus();
        return false;
    } else if (!email_valid(email) && !validatePhone(email)) {
        $("#login_email").closest(".input_form").addClass('has-error');
        $("#login_email").focus();
        swal('', 'E-mail hoặc số điện thoại quý khách nhập không đúng định dạng', 'error');
        return false;
    }
    if (password == '') {
        $("#login_password").closest(".input_form").addClass('has-error');
        $("#login_password").focus();
        return false;
    }
    var data_form = $("#signin_form").serializeArray();
    var data_post = new Array();
    for (var i in data_form) {
        var param_name = data_form[i].name;
        var param_value = data_form[i].value;
        if (param_name == 'password') {
            param_value = $.md5(param_value);
        }
        data_post.push({"name": param_name, "value": param_value});
    }
    var l_btn = Ladda.create(document.querySelector('#button_login'));
    $.ajax({
        type: 'post', dataType: 'json', url: '/signin.php', data: data_post, beforeSend: function () {
            l_btn.start();
        }, success: function (data) {
            l_btn.stop();
            if (data.status == 'success') {
                window.location = decodeURIComponent(data.direct_url);
            } else if (data.status == 'fail') {
                if (typeof (data.message) != 'undefined') {
                    if (typeof (data.input) != 'undefined') {
                        if (data.input == 'email') {
                            $("#login_email").focus();
                        } else if (data.input == 'password') {
                            $("#login_password").focus();
                        }
                    }
                    swal('', data.message, 'error');
                }
            }
        }
    });
}

function signup() {
    var name = $("#register_name").val();
    var phone = $("#register_phone").val();
    var email = $("#register_email").val();
    var password = $("#register_password").val();
    var confirm_password = $("#register_confirm_password").val();
    $("#register_name").closest(".input_form").removeClass('has-error');
    $("#register_phone").closest(".input_form").removeClass('has-error');
    $("#register_email").closest(".input_form").removeClass('has-error');
    $("#register_password").closest(".input_form").removeClass('has-error');
    $("#register_confirm_password").closest(".input_form").removeClass('has-error');
    if (name == '') {
        $("#register_name").closest(".input_form").addClass('has-error');
        $("#register_name").focus();
        return false;
    }
    if (phone == '') {
        $("#register_phone").closest(".input_form").addClass('has-error');
        $("#register_phone").focus();
        return false;
    } else if (!validatePhone(phone)) {
        $("#register_phone").closest(".input_form").addClass('has-error');
        $("#register_phone").focus();
        swal('', 'Số điện thoại không đúng định dạng', 'error');
        return false;
    }
    if (email == '') {
        $("#register_email").closest(".input_form").addClass('has-error');
        $("#register_email").focus();
        return false;
    } else if (!email_valid(email)) {
        $("#register_email").closest(".input_form").addClass('has-error');
        $("#register_email").focus();
        swal('', 'E-mail bạn nhập không đúng định dạng', 'error');
        return false;
    }
    if (password == '') {
        $("#register_password").closest(".input_form").addClass('has-error');
        $("#register_password").focus();
        return false;
    }
    if (confirm_password == '') {
        $("#register_confirm_password").closest(".input_form").addClass('has-error');
        $("#register_confirm_password").focus();
        return false;
    } else if (confirm_password != password) {
        $("#register_confirm_password").closest(".input_form").addClass('has-error');
        $("#register_confirm_password").focus();
        swal('', 'Nhập lại mật khẩu không đúng', 'error');
        return false;
    }
    var data_form = $("#signup_form").serializeArray();
    var data_post = new Array();
    for (var i in data_form) {
        var param_name = data_form[i].name;
        var param_value = data_form[i].value;
        if (param_name == 'password' || param_name == 'confirm_password') {
            param_value = $.md5(param_value);
        }
        data_post.push({"name": param_name, "value": param_value});
    }
    var l_btn = Ladda.create(document.querySelector('#button_register'));
    $.ajax({
        type: 'post', dataType: 'json', url: '/signup.php', data: data_post, beforeSend: function () {
            l_btn.start();
        }, success: function (data) {
            l_btn.stop();
            if (data.status == 'success') {
                window.location = signup_success_url + "?url=" + data.direct_url;
            } else if (data.status == 'fail') {
                if (typeof (data.message) != 'undefined') {
                    if (typeof (data.input) != 'undefined') {
                        if (data.input == 'email') {
                            $("#register_email").focus();
                        } else if (data.input == 'password') {
                            $("#register_password").focus();
                        }
                    }
                    swal('', data.message, 'error');
                    return false;
                }
            }
        }
    });
}

function openVerifyPhone() {
    var phone = $("#phone_in_verfify").val();
    var l_btn = Ladda.create(document.querySelector('#btn-open-verify-phone'));
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: '/ajax/send_otp_code.php',
        data: {phone: phone},
        beforeSend: function () {
            l_btn.start();
        },
        success: function (data) {
            l_btn.stop();
            if (data.status == 'success') {
                showOverlay();
                $("#order_in_3s_modal").show();
                $("#verify_code").focus();
                $("#order_in_3s_modal .verify-alert").removeClass("verify-alert--error").addClass("verify-alert--success").html("Đã gửi mã xác thực đến số điện thoại của quý khách");
                $("#order_in_3s_modal .verify-send-code").html('<span id="btn-send-again-verify-code">Gửi lại mã (' + time_dalay_send_code + ')</span>');
                runTimeDelaySendCode();
            } else if (data.status == "fail" && typeof data.message != 'undefined' && data.message != '') {
                swal("", data.message, "error");
            }
        }
    });
}

function hideVerify() {
    hideOverlay()
    $("#order_in_3s_modal").hide();
    $("#order_in_3s_modal .verify-alert").removeClass("verify-alert--success verify-alert--error").html("");
}

var time_dalay_send_code = 30;

function runTimeDelaySendCode() {
    var _time = time_dalay_send_code;
    var _runTime = setInterval(function () {
        _time = _time - 1;
        $("#btn-send-again-verify-code").html("Gửi lại mã (" + _time + ")");
        if (_time <= 0) {
            clearInterval(_runTime);
            $("#order_in_3s_modal .verify-send-code").html('<button type="button" class="btn btn-link btn-sm ladda-button" id="btn-send-verify-code" data-style="zoom-in" data-spinner-code="#000000" onclick="sendVerifyCode();">Gửi lại mã</button>');
        }
    }, 1000);
}

function sendVerifyCode() {
    $("#order_in_3s_modal .verify-alert").removeClass("verify-alert--error verify-alert--success").html("");
    var phone = $("#phone_in_verfify").val();
    if (phone != "") {
        var l_btn = Ladda.create(document.querySelector('#btn-send-verify-code'));
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: '/ajax/send_otp_code.php',
            data: {phone: phone},
            beforeSend: function () {
                l_btn.start();
            },
            success: function (data) {
                l_btn.stop();
                if (data.status == 'success') {
                    $("#order_in_3s_modal .verify-alert").removeClass("verify-alert--error").addClass("verify-alert--success").html("Đã gửi mã xác thực đến số điện thoại của quý khách");
                    $("#order_in_3s_modal .verify-send-code").html('<span id="btn-send-again-verify-code">Gửi lại mã (' + time_dalay_send_code + ')</span>');
                    runTimeDelaySendCode();
                } else if (data.status == "fail" && typeof data.message != 'undefined' && data.message != '') {
                    swal("", data.message, "error");
                }
            }
        });
    }
}

function beginVerify(_this) {
    var code = $("#verify_code").val();
    if (code != "") {
        var l_btn = Ladda.create(_this);
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: '/ajax/verify_otp_code.php',
            data: {code: code},
            beforeSend: function () {
                l_btn.start();
            },
            success: function (data) {
                l_btn.stop();
                if (data.status == 'success') {
                } else if (data.status == 'fail') {
                    $("#order_in_3s_modal .verify-alert").removeClass("verify-alert--success").addClass("verify-alert--error").html(data.message);
                }
            }
        });
    } else {
        $("#order_in_3s_modal .verify-alert").removeClass("verify-alert--success").addClass("verify-alert--error").html("Quý khách vui lòng nhập mã xác thực");
        $("#verify_code").focus();
    }
}

var oTimeoutSearchProduct;

function searchSuggestion() {
    clearTimeout(oTimeoutSearchProduct);
    var sKeyword = $("#keyword").val();
    if (sKeyword == "") {
        return false;
    } else if (sKeyword.length < 3) {
        return false;
    }
    oTimeoutSearchProduct = setTimeout(function () {
        var url = 'ajax/searchSuggestions.html';
        var data_post = 'keyword=' + sKeyword;
        $.ajax({
            beforeSend: function () {
            }, type: 'POST', dataType: 'html', url: url, data: data_post, success: function (sHtml) {
                $("#pn_result_auto_complete #pn_result_auto_complete_frame").html(sHtml);
                $("#pn_result_auto_complete").show();
                setTimeout(function () {
                    $("#pn_result_auto_complete #pn_result_auto_complete_frame").css("height", $(".pn_result_auto_complete_container").outerHeight() * 1 + 10);
                }, 50);
                $(document).bind("click", function () {
                    $("#pn_result_auto_complete").hide();
                });
            }
        });
    }, 500);
}

function addToQuotation(sProductCode, bDirect) {
    if (typeof (bDirect) == "undefined") bDirect = false;
    var url = 'ajax/addToQuotation.html';
    var data_post = 'code=' + sProductCode;
    $.ajax({
        beforeSend: function () {
            $("#pn_lnk_add_quotation_" + sProductCode).hide();
            $("#pn_add_quotation_waiting_" + sProductCode).show();
        }, type: 'POST', dataType: 'html', url: url, data: data_post, success: function (sMsg) {
            $("#pn_add_quotation_waiting_" + sProductCode).hide();
            if (sMsg == "done") {
                if (bDirect == true) {
                    window.location.href = sQuotationUrl;
                } else {
                    $("#pn_add_quotation_result_" + sProductCode).show();
                    setTimeout(function () {
                        $("#pn_add_quotation_result_" + sProductCode).hide();
                    }, 4000);
                }
            }
        }
    });
}

function addCart(code, action, is_direct_to_cart, is_order_fast) {
    if (typeof (is_direct_to_cart) == 'undefined') is_direct_to_cart = false;
    if (typeof (is_order_fast) == 'undefined') is_order_fast = false;
    if (action == "contact") {
        var url = 'ajax/getProductInfo.html';
        var data_post = 'code=' + code;
        $.ajax({
            beforeSend: function () {
            }, type: 'POST', dataType: 'json', url: url, data: data_post, success: function (oResult) {
                if (oResult.productID > 0) showOrderForm(oResult.id, oResult.name, oResult.img);
            }
        });
    } else {
        var url = 'ajax/addToCart.html';
        var data_post = 'code=' + code;
        $.ajax({
            beforeSend: function () {
            }, type: 'POST', dataType: 'json', url: url, data: data_post, success: function (data) {
                if (data.result == "done") {
                    if (is_direct_to_cart == true) {
                        if (typeof data.product_add_cart != 'undefined') {
                            $("#popup-added-to-cart .product_info").html(data.product_add_cart);
                            $("#popup-added-to-cart").show();
                            $("#sp_total_product_in_cart_header").html(data.total);
                            $("#sp_total_amount_in_cart_header").html(data.total_amount_compact);
                        }
                    } else if (is_order_fast == true) {
                        window.location = sUrlCart;
                    } else {
                        $('.search_form .search_box').addClass("has_product_in_cart");
                        $("#cart-list tbody").html(data.list);
                        $("#sp_total_product_in_cart_header").html(data.total);
                        $("#sp_total_amount_in_cart_header").html(data.total_amount_compact);
                        $(".cart-count").html('<span>' + data.total + '</span>');
                        $("#total-amount").html(data.total_amount + ' đ');
                        $("#cart_form").show();
                        $("#cart-modal .cart-total").show();
                        $("#cart-modal .btn-continue").show();
                        $("#cart-modal .btn-payment").show();
                        $("#cart-empty").hide();
                        $('#cart-modal #cart-list').niceScroll();
                        showCart();
                    }
                }
            }
        });
    }
}

function updateCart(url_direct) {
    if (typeof (url_direct) == 'undefined') url_direct = '';
    $.post("ajax/update_cart.html", $("#cart_form").serialize(), function (oResult) {
        if (typeof (oResult) == "object") {
            $("#total-money").html(oResult.total_amount + " đ");
            for (var i in oResult.product) {
                $("#sp_thanhtien_" + i).html(oResult.product[i].amount + " đ");
            }
            $('#freeship_text').hide();
            if (typeof oResult.freeship != 'undefined' && oResult.freeship == 1) {
                $('#freeship_text').show();
            }
            if (url_direct != '') {
                window.location = url_direct;
            }
        }
    }, 'json');
}

function removeProductInCart(product_id) {
    $.ajax({
        beforeSend: function () {
        },
        type: 'POST',
        dataType: 'json',
        url: 'ajax/removeProductInCart.php',
        data: 'product_id=' + product_id,
        success: function (data) {
            if (data.result == "done") {
                if (data.total > 0) {
                    $("#cart-list tbody").html(data.list);
                    $(".cart-count").html('<span>' + data.total + '</span>');
                    $("#total-amount").html(data.total_amount + ' đ');
                } else {
                    $("#cart-list tbody").html('');
                    $(".cart-count").html('<span>0</span>');
                    $("#cart_form").hide();
                    $("#cart-modal .cart-total").hide();
                    $("#cart-modal .btn-continue").hide();
                    $("#cart-modal .btn-payment").hide();
                    $("#cart-modal #cart-list").getNiceScroll().hide();
                    $("#cart-empty").show();
                }
            }
        }
    });
}

function changeShipTime(iKey) {
    if (typeof (aShipTimeData[iKey]) != "undefined") {
        $("#sp_ship_zone_note").html(aShipTimeData[iKey]);
    }
}

function showCart() {
    showOverlay();
    iWindowWidth = $(window).width();
    iWindowHeight = $(window).height();
    var iScrollTop = $(window).scrollTop();
    var iTopPopup = Math.ceil(iWindowHeight / 2) - Math.ceil($("#cart-modal").height() / 2);
    iTopPopup = iTopPopup + iScrollTop;
    var iLeftPopup = Math.ceil(iWindowWidth / 2) - Math.ceil($("#cart-modal").width() / 2);
    $("#cart-modal").css({"top": iTopPopup + "px", "left": iLeftPopup + "px"}).show();
}

function hideCart() {
    $("#cart-modal").hide();
    hideOverlay();
}

function hidePopupCart() {
    $("#popup-added-to-cart").hide();
}

function removeURLParameter(url, parameter) {
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {
        var prefix = encodeURIComponent(parameter) + '=';
        var pars = urlparts[1].split(/[&;]/g);
        for (var i = pars.length; i-- > 0;) {
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                pars.splice(i, 1);
            }
        }
        url = urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");
        return url;
    } else {
        return url;
    }
}

function showOverlay() {
    setBodyOverflow(true);
    disable_scroll();
    iWindowWidth = $(window).width();
    iDocumentHeight = $(document).height();
    $('#pn_overlay').width(iWindowWidth).height(iDocumentHeight).show();
    $('#pn_overlay').bind("click", function () {
        $("#panel-user-login").hide();
        if (typeof (hideCart) == 'function') hideCart();
        if (typeof (hideOrderForm) == 'function') hideOrderForm();
        if (typeof (hideThongBao) == 'function') hideThongBao();
        if (typeof (hideMuaHang3s) == 'function') hideMuaHang3s();
    });
}

function hideOverlay() {
    if (dont_hide_overlay == false) {
        $('#pn_overlay').hide().unbind('click');
        enable_scroll()
        setBodyOverflow();
    }
}

function direct(sUrl) {
    window.location = sUrl;
}

function setBodyOverflow(bHidden) {
    if (bHidden == true) $("body").css("overflow", "hidden"); else {
        $("body").css("overflow", "auto");
        enable_scroll();
    }
}

var keys = [37, 38, 39, 40];

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
    preventDefault(e);
}

function disable_scroll() {
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
}

function validatePhone(txtPhone) {
    var a = txtPhone;
    var filter = /^[0-9-+]+$/;
    if (filter.test(a)) {
        return true;
    } else {
        return false;
    }
}

function email_valid(str) {
    var at = "@"
    var dot = "."
    var lat = str.indexOf(at)
    var lstr = str.length
    var ldot = str.indexOf(dot)
    if (str.indexOf(at) == -1) {
        return false
    }
    if (str.indexOf(at) == -1 || str.indexOf(at) == 0 || str.indexOf(at) == lstr) {
        return false
    }
    if (str.indexOf(dot) == -1 || str.indexOf(dot) == 0 || str.indexOf(dot) == lstr) {
        return false
    }
    if (str.indexOf(at, (lat + 1)) != -1) {
        return false
    }
    if (str.substring(lat - 1, lat) == dot || str.substring(lat + 1, lat + 2) == dot) {
        return false
    }
    if (str.indexOf(dot, (lat + 2)) == -1) {
        return false
    }
    if (str.indexOf(" ") != -1) {
        return false
    }
    return true
}

jQuery(function ($) {
    $.easing.elasout = function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    };
});
jQuery.fn.exists = function () {
    return this.length > 0;
}

function showThongBao() {
    showOverlay();
    iWindowWidth = $(window).width();
    iWindowHeight = $(window).height();
    var iScrollTop = $(window).scrollTop();
    var iTopPopup = Math.ceil(iWindowHeight / 2) - Math.ceil($("#pn-thong-bao").height() / 2);
    iTopPopup = iTopPopup + iScrollTop;
    var iLeftPopup = Math.ceil(iWindowWidth / 2) - Math.ceil($("#pn-thong-bao").width() / 2);
    $("#pn-thong-bao").css({"top": iTopPopup + "px", "left": iLeftPopup + "px"}).show();
}

function hideThongBao() {
    $("#pn-thong-bao").hide();
    hideOverlay();
}

function showMessage(message) {
    swal('', message, 'error');
}

function selectCity(city, district_id, district, _function_callback) {
    if (typeof (district_id) == 'undefined') {
        district_id = 'district';
    }
    if (city > 0) {
        $.ajax({
            beforeSend: function () {
            },
            type: 'POST',
            dataType: 'json',
            url: '/ajax/selectCity.php',
            data: 'city=' + city,
            success: function (data) {
                _option = '<option value="0" selected></option>';
                if (typeof (data.list) != 'undefined') {
                    for (var i in data.list) {
                        var i_value = parseInt(i);
                        var selected = '';
                        if (district == i_value) selected = 'selected';
                        _option += '<option value="' + i_value + '" ' + selected + '>' + data.list[i] + '</option>';
                    }
                }
                $("#" + district_id).html(_option);
                $("#" + district_id).val(district);
                if (typeof (_function_callback) != 'undefined') {
                    _function_callback.call();
                }
            }
        });
    } else {
        $("#" + district_id).html("");
    }
}

function selectDistrict(district, ward_id, ward, _function_callback) {
    if (typeof (ward_id) == 'undefined') {
        ward_id = 'ward';
    }
    if (district > 0) {
        $.ajax({
            beforeSend: function () {
            },
            type: 'POST',
            dataType: 'json',
            url: '/ajax/selectDistrict.php',
            data: 'district=' + district,
            success: function (data) {
                _option = '<option value="0" selected></option>';
                if (typeof (data.list) != 'undefined') {
                    for (var i in data.list) {
                        var i_value = parseInt(i);
                        var selected = '';
                        if (ward == i_value) selected = 'selected';
                        _option += '<option value="' + i_value + '" ' + selected + '>' + data.list[i] + '</option>';
                    }
                }
                $("#" + ward_id).html(_option);
                $("#" + ward_id).val(ward);
                if (typeof (_function_callback) != 'undefined') {
                    _function_callback.call();
                }
            }
        });
    } else {
        $("#" + ward_id).html("");
    }
}

function addCommas(nStr) {
    var nDec = "";
    if (nStr.indexOf(".") > -1) {
        var aDec = nStr.split(".");
        nDec = "." + aDec[1];
        nStr = aDec[0];
    }
    nStr = removeCommas(nStr);
    nStr += '';
    x = nStr.split(',');
    x1 = x[0];
    x2 = x.length > 1 ? ',' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    var sReturn = x1 + x2;
    sReturn = sReturn + nDec;
    return sReturn;
}

function removeCommas(theString) {
    var rgx = /(\,)/g;
    return theString.replace(rgx, "");
}