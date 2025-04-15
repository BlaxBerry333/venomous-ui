var Bf = Object.defineProperty;
var Lf = (e, t, n) => t in e ? Bf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Pr = (e, t, n) => Lf(e, typeof t != "symbol" ? t + "" : t, n);
import { jsx as M, jsxs as je, Fragment as ea } from "react/jsx-runtime";
import * as O from "react";
import $, { forwardRef as ta, useContext as jf, useState as Vn, useEffect as ti, createElement as Hn, memo as rt, isValidElement as Ho, cloneElement as Wo, Children as zf, useMemo as gn, useCallback as sn, useRef as Ff } from "react";
import * as Vf from "react-dom";
import ar from "react-dom";
function Sn(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
function ni() {
  return ni = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ni.apply(null, arguments);
}
function Hf(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Wf(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Uf = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Wf(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Hf(o);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var o;
      return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), pt = "-ms-", ri = "-moz-", Ee = "-webkit-", nu = "comm", na = "rule", ra = "decl", Yf = "@import", ru = "@keyframes", qf = "@layer", Gf = Math.abs, bi = String.fromCharCode, Kf = Object.assign;
function Xf(e, t) {
  return ct(e, 0) ^ 45 ? (((t << 2 ^ ct(e, 0)) << 2 ^ ct(e, 1)) << 2 ^ ct(e, 2)) << 2 ^ ct(e, 3) : 0;
}
function ou(e) {
  return e.trim();
}
function Jf(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Se(e, t, n) {
  return e.replace(t, n);
}
function Es(e, t) {
  return e.indexOf(t);
}
function ct(e, t) {
  return e.charCodeAt(t) | 0;
}
function qr(e, t, n) {
  return e.slice(t, n);
}
function en(e) {
  return e.length;
}
function oa(e) {
  return e.length;
}
function Ro(e, t) {
  return t.push(e), e;
}
function Qf(e, t) {
  return e.map(t).join("");
}
var xi = 1, fr = 1, iu = 0, Ct = 0, Qe = 0, Er = "";
function Ti(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: xi, column: fr, length: s, return: "" };
}
function kr(e, t) {
  return Kf(Ti("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Zf() {
  return Qe;
}
function ep() {
  return Qe = Ct > 0 ? ct(Er, --Ct) : 0, fr--, Qe === 10 && (fr = 1, xi--), Qe;
}
function It() {
  return Qe = Ct < iu ? ct(Er, Ct++) : 0, fr++, Qe === 10 && (fr = 1, xi++), Qe;
}
function an() {
  return ct(Er, Ct);
}
function Uo() {
  return Ct;
}
function uo(e, t) {
  return qr(Er, e, t);
}
function Gr(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function su(e) {
  return xi = fr = 1, iu = en(Er = e), Ct = 0, [];
}
function au(e) {
  return Er = "", e;
}
function Yo(e) {
  return ou(uo(Ct - 1, Ss(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function tp(e) {
  for (; (Qe = an()) && Qe < 33; )
    It();
  return Gr(e) > 2 || Gr(Qe) > 3 ? "" : " ";
}
function np(e, t) {
  for (; --t && It() && !(Qe < 48 || Qe > 102 || Qe > 57 && Qe < 65 || Qe > 70 && Qe < 97); )
    ;
  return uo(e, Uo() + (t < 6 && an() == 32 && It() == 32));
}
function Ss(e) {
  for (; It(); )
    switch (Qe) {
      // ] ) " '
      case e:
        return Ct;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ss(Qe);
        break;
      // (
      case 40:
        e === 41 && Ss(e);
        break;
      // \
      case 92:
        It();
        break;
    }
  return Ct;
}
function rp(e, t) {
  for (; It() && e + Qe !== 57; )
    if (e + Qe === 84 && an() === 47)
      break;
  return "/*" + uo(t, Ct - 1) + "*" + bi(e === 47 ? e : It());
}
function op(e) {
  for (; !Gr(an()); )
    It();
  return uo(e, Ct);
}
function ip(e) {
  return au(qo("", null, null, null, [""], e = su(e), 0, [0], e));
}
function qo(e, t, n, r, o, i, s, a, c) {
  for (var u = 0, f = 0, d = s, h = 0, g = 0, v = 0, p = 1, y = 1, b = 1, T = 0, S = "", E = o, x = i, w = r, C = S; y; )
    switch (v = T, T = It()) {
      // (
      case 40:
        if (v != 108 && ct(C, d - 1) == 58) {
          Es(C += Se(Yo(T), "&", "&\f"), "&\f") != -1 && (b = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += Yo(T);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += tp(v);
        break;
      // \
      case 92:
        C += np(Uo() - 1, 7);
        continue;
      // /
      case 47:
        switch (an()) {
          case 42:
          case 47:
            Ro(sp(rp(It(), Uo()), t, n), c);
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * p:
        a[u++] = en(C) * b;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (T) {
          // \0 }
          case 0:
          case 125:
            y = 0;
          // ;
          case 59 + f:
            b == -1 && (C = Se(C, /\f/g, "")), g > 0 && en(C) - d && Ro(g > 32 ? sl(C + ";", r, n, d - 1) : sl(Se(C, " ", "") + ";", r, n, d - 2), c);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (Ro(w = il(C, t, n, u, f, o, a, S, E = [], x = [], d), i), T === 123)
              if (f === 0)
                qo(C, t, w, w, E, i, d, a, x);
              else
                switch (h === 99 && ct(C, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    qo(e, w, w, r && Ro(il(e, w, w, 0, 0, o, a, S, o, E = [], d), x), o, x, d, a, r ? E : x);
                    break;
                  default:
                    qo(C, w, w, w, [""], x, 0, a, x);
                }
        }
        u = f = g = 0, p = b = 1, S = C = "", d = s;
        break;
      // :
      case 58:
        d = 1 + en(C), g = v;
      default:
        if (p < 1) {
          if (T == 123)
            --p;
          else if (T == 125 && p++ == 0 && ep() == 125)
            continue;
        }
        switch (C += bi(T), T * p) {
          // &
          case 38:
            b = f > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            a[u++] = (en(C) - 1) * b, b = 1;
            break;
          // @
          case 64:
            an() === 45 && (C += Yo(It())), h = an(), f = d = en(S = C += op(Uo())), T++;
            break;
          // -
          case 45:
            v === 45 && en(C) == 2 && (p = 0);
        }
    }
  return i;
}
function il(e, t, n, r, o, i, s, a, c, u, f) {
  for (var d = o - 1, h = o === 0 ? i : [""], g = oa(h), v = 0, p = 0, y = 0; v < r; ++v)
    for (var b = 0, T = qr(e, d + 1, d = Gf(p = s[v])), S = e; b < g; ++b)
      (S = ou(p > 0 ? h[b] + " " + T : Se(T, /&\f/g, h[b]))) && (c[y++] = S);
  return Ti(e, t, n, o === 0 ? na : a, c, u, f);
}
function sp(e, t, n) {
  return Ti(e, t, n, nu, bi(Zf()), qr(e, 2, -2), 0);
}
function sl(e, t, n, r) {
  return Ti(e, t, n, ra, qr(e, 0, r), qr(e, r + 1, -1), r);
}
function cr(e, t) {
  for (var n = "", r = oa(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function ap(e, t, n, r) {
  switch (e.type) {
    case qf:
      if (e.children.length) break;
    case Yf:
    case ra:
      return e.return = e.return || e.value;
    case nu:
      return "";
    case ru:
      return e.return = e.value + "{" + cr(e.children, r) + "}";
    case na:
      e.value = e.props.join(",");
  }
  return en(n = cr(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function lp(e) {
  var t = oa(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function cp(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function lu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var up = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = an(), o === 38 && i === 12 && (n[r] = 1), !Gr(i); )
    It();
  return uo(t, Ct);
}, dp = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Gr(o)) {
      case 0:
        o === 38 && an() === 12 && (n[r] = 1), t[r] += up(Ct - 1, n, r);
        break;
      case 2:
        t[r] += Yo(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = an() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      // fallthrough
      default:
        t[r] += bi(o);
    }
  while (o = It());
  return t;
}, fp = function(t, n) {
  return au(dp(su(t), n));
}, al = /* @__PURE__ */ new WeakMap(), pp = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !al.get(r)) && !o) {
      al.set(t, !0);
      for (var i = [], s = fp(n, i), a = r.props, c = 0, u = 0; c < s.length; c++)
        for (var f = 0; f < a.length; f++, u++)
          t.props[u] = i[c] ? s[c].replace(/&\f/g, a[f]) : a[f] + " " + s[c];
    }
  }
}, mp = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function cu(e, t) {
  switch (Xf(e, t)) {
    // color-adjust
    case 5103:
      return Ee + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Ee + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ee + e + ri + e + pt + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return Ee + e + pt + e + e;
    // order
    case 6165:
      return Ee + e + pt + "flex-" + e + e;
    // align-items
    case 5187:
      return Ee + e + Se(e, /(\w+).+(:[^]+)/, Ee + "box-$1$2" + pt + "flex-$1$2") + e;
    // align-self
    case 5443:
      return Ee + e + pt + "flex-item-" + Se(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return Ee + e + pt + "flex-line-pack" + Se(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return Ee + e + pt + Se(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return Ee + e + pt + Se(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return Ee + "box-" + Se(e, "-grow", "") + Ee + e + pt + Se(e, "grow", "positive") + e;
    // transition
    case 4554:
      return Ee + Se(e, /([^-])(transform)/g, "$1" + Ee + "$2") + e;
    // cursor
    case 6187:
      return Se(Se(Se(e, /(zoom-|grab)/, Ee + "$1"), /(image-set)/, Ee + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return Se(e, /(image-set\([^]*)/, Ee + "$1$`$1");
    // justify-content
    case 4968:
      return Se(Se(e, /(.+:)(flex-)?(.*)/, Ee + "box-pack:$3" + pt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ee + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Se(e, /(.+)-inline(.+)/, Ee + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (en(e) - 1 - t > 6) switch (ct(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (ct(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return Se(e, /(.+:)(.+)-([^]+)/, "$1" + Ee + "$2-$3$1" + ri + (ct(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Es(e, "stretch") ? cu(Se(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (ct(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (ct(e, en(e) - 3 - (~Es(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return Se(e, ":", ":" + Ee) + e;
        // (inline-)?fl(e)x
        case 101:
          return Se(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ee + (ct(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ee + "$2$3$1" + pt + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (ct(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return Ee + e + pt + Se(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return Ee + e + pt + Se(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return Ee + e + pt + Se(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ee + e + pt + e + e;
  }
  return e;
}
var hp = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case ra:
      t.return = cu(t.value, t.length);
      break;
    case ru:
      return cr([kr(t, {
        value: Se(t.value, "@", "@" + Ee)
      })], o);
    case na:
      if (t.length) return Qf(t.props, function(i) {
        switch (Jf(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return cr([kr(t, {
              props: [Se(i, /:(read-\w+)/, ":" + ri + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return cr([kr(t, {
              props: [Se(i, /:(plac\w+)/, ":" + Ee + "input-$1")]
            }), kr(t, {
              props: [Se(i, /:(plac\w+)/, ":" + ri + "$1")]
            }), kr(t, {
              props: [Se(i, /:(plac\w+)/, pt + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, gp = [hp], yp = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(p) {
      var y = p.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || gp, i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(p) {
      for (var y = p.getAttribute("data-emotion").split(" "), b = 1; b < y.length; b++)
        i[y[b]] = !0;
      a.push(p);
    }
  );
  var c, u = [pp, mp];
  {
    var f, d = [ap, cp(function(p) {
      f.insert(p);
    })], h = lp(u.concat(o, d)), g = function(y) {
      return cr(ip(y), h);
    };
    c = function(y, b, T, S) {
      f = T, g(y ? y + "{" + b.styles + "}" : b.styles), S && (v.inserted[b.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new Uf({
      key: n,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: c
  };
  return v.sheet.hydrate(a), v;
};
function vp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Po = { exports: {} }, Re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ll;
function bp() {
  if (ll) return Re;
  ll = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function S(x) {
    if (typeof x == "object" && x !== null) {
      var w = x.$$typeof;
      switch (w) {
        case t:
          switch (x = x.type, x) {
            case c:
            case u:
            case r:
            case i:
            case o:
            case d:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case a:
                case f:
                case v:
                case g:
                case s:
                  return x;
                default:
                  return w;
              }
          }
        case n:
          return w;
      }
    }
  }
  function E(x) {
    return S(x) === u;
  }
  return Re.AsyncMode = c, Re.ConcurrentMode = u, Re.ContextConsumer = a, Re.ContextProvider = s, Re.Element = t, Re.ForwardRef = f, Re.Fragment = r, Re.Lazy = v, Re.Memo = g, Re.Portal = n, Re.Profiler = i, Re.StrictMode = o, Re.Suspense = d, Re.isAsyncMode = function(x) {
    return E(x) || S(x) === c;
  }, Re.isConcurrentMode = E, Re.isContextConsumer = function(x) {
    return S(x) === a;
  }, Re.isContextProvider = function(x) {
    return S(x) === s;
  }, Re.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, Re.isForwardRef = function(x) {
    return S(x) === f;
  }, Re.isFragment = function(x) {
    return S(x) === r;
  }, Re.isLazy = function(x) {
    return S(x) === v;
  }, Re.isMemo = function(x) {
    return S(x) === g;
  }, Re.isPortal = function(x) {
    return S(x) === n;
  }, Re.isProfiler = function(x) {
    return S(x) === i;
  }, Re.isStrictMode = function(x) {
    return S(x) === o;
  }, Re.isSuspense = function(x) {
    return S(x) === d;
  }, Re.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === u || x === i || x === o || x === d || x === h || typeof x == "object" && x !== null && (x.$$typeof === v || x.$$typeof === g || x.$$typeof === s || x.$$typeof === a || x.$$typeof === f || x.$$typeof === y || x.$$typeof === b || x.$$typeof === T || x.$$typeof === p);
  }, Re.typeOf = S, Re;
}
var Pe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cl;
function xp() {
  return cl || (cl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function S(z) {
      return typeof z == "string" || typeof z == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      z === r || z === u || z === i || z === o || z === d || z === h || typeof z == "object" && z !== null && (z.$$typeof === v || z.$$typeof === g || z.$$typeof === s || z.$$typeof === a || z.$$typeof === f || z.$$typeof === y || z.$$typeof === b || z.$$typeof === T || z.$$typeof === p);
    }
    function E(z) {
      if (typeof z == "object" && z !== null) {
        var se = z.$$typeof;
        switch (se) {
          case t:
            var ge = z.type;
            switch (ge) {
              case c:
              case u:
              case r:
              case i:
              case o:
              case d:
                return ge;
              default:
                var Oe = ge && ge.$$typeof;
                switch (Oe) {
                  case a:
                  case f:
                  case v:
                  case g:
                  case s:
                    return Oe;
                  default:
                    return se;
                }
            }
          case n:
            return se;
        }
      }
    }
    var x = c, w = u, C = a, P = s, k = t, m = f, R = r, _ = v, B = g, A = n, L = i, I = o, U = d, Y = !1;
    function G(z) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), N(z) || E(z) === c;
    }
    function N(z) {
      return E(z) === u;
    }
    function j(z) {
      return E(z) === a;
    }
    function V(z) {
      return E(z) === s;
    }
    function W(z) {
      return typeof z == "object" && z !== null && z.$$typeof === t;
    }
    function J(z) {
      return E(z) === f;
    }
    function te(z) {
      return E(z) === r;
    }
    function K(z) {
      return E(z) === v;
    }
    function Z(z) {
      return E(z) === g;
    }
    function D(z) {
      return E(z) === n;
    }
    function X(z) {
      return E(z) === i;
    }
    function H(z) {
      return E(z) === o;
    }
    function ee(z) {
      return E(z) === d;
    }
    Pe.AsyncMode = x, Pe.ConcurrentMode = w, Pe.ContextConsumer = C, Pe.ContextProvider = P, Pe.Element = k, Pe.ForwardRef = m, Pe.Fragment = R, Pe.Lazy = _, Pe.Memo = B, Pe.Portal = A, Pe.Profiler = L, Pe.StrictMode = I, Pe.Suspense = U, Pe.isAsyncMode = G, Pe.isConcurrentMode = N, Pe.isContextConsumer = j, Pe.isContextProvider = V, Pe.isElement = W, Pe.isForwardRef = J, Pe.isFragment = te, Pe.isLazy = K, Pe.isMemo = Z, Pe.isPortal = D, Pe.isProfiler = X, Pe.isStrictMode = H, Pe.isSuspense = ee, Pe.isValidElementType = S, Pe.typeOf = E;
  }()), Pe;
}
var ul;
function ia() {
  return ul || (ul = 1, process.env.NODE_ENV === "production" ? Po.exports = bp() : Po.exports = xp()), Po.exports;
}
var Qi, dl;
function Tp() {
  if (dl) return Qi;
  dl = 1;
  var e = ia(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, n = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, r = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, o = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, i = {};
  i[e.ForwardRef] = r, i[e.Memo] = o;
  function s(v) {
    return e.isMemo(v) ? o : i[v.$$typeof] || t;
  }
  var a = Object.defineProperty, c = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, d = Object.getPrototypeOf, h = Object.prototype;
  function g(v, p, y) {
    if (typeof p != "string") {
      if (h) {
        var b = d(p);
        b && b !== h && g(v, b, y);
      }
      var T = c(p);
      u && (T = T.concat(u(p)));
      for (var S = s(v), E = s(p), x = 0; x < T.length; ++x) {
        var w = T[x];
        if (!n[w] && !(y && y[w]) && !(E && E[w]) && !(S && S[w])) {
          var C = f(p, w);
          try {
            a(v, w, C);
          } catch {
          }
        }
      }
    }
    return v;
  }
  return Qi = g, Qi;
}
Tp();
var wp = !0;
function uu(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var sa = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  wp === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, aa = function(t, n, r) {
  sa(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Ep(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Sp = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Cp = /[A-Z]|^ms/g, Op = /_EMO_([^_]+?)_([^]*?)_EMO_/g, du = function(t) {
  return t.charCodeAt(1) === 45;
}, fl = function(t) {
  return t != null && typeof t != "boolean";
}, Zi = /* @__PURE__ */ lu(function(e) {
  return du(e) ? e : e.replace(Cp, "-$&").toLowerCase();
}), pl = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Op, function(r, o, i) {
          return tn = {
            name: o,
            styles: i,
            next: tn
          }, o;
        });
  }
  return Sp[t] !== 1 && !du(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Kr(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return tn = {
          name: o.name,
          styles: o.styles,
          next: tn
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            tn = {
              name: s.name,
              styles: s.styles,
              next: tn
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return Rp(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = tn, u = n(e);
        return tn = c, Kr(e, t, u);
      }
      break;
    }
  }
  var f = n;
  if (t == null)
    return f;
  var d = t[f];
  return d !== void 0 ? d : f;
}
function Rp(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Kr(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : fl(a) && (r += Zi(i) + ":" + pl(i, a) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var c = 0; c < s.length; c++)
          fl(s[c]) && (r += Zi(i) + ":" + pl(i, s[c]) + ";");
      else {
        var u = Kr(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Zi(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var ml = /label:\s*([^\s;{]+)\s*(;|$)/g, tn;
function fo(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  tn = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Kr(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += Kr(n, t, e[a]), r) {
      var c = i;
      o += c[a];
    }
  ml.lastIndex = 0;
  for (var u = "", f; (f = ml.exec(o)) !== null; )
    u += "-" + f[1];
  var d = Ep(o) + u;
  return {
    name: d,
    styles: o,
    next: tn
  };
}
var Pp = function(t) {
  return t();
}, fu = O.useInsertionEffect ? O.useInsertionEffect : !1, pu = fu || Pp, hl = fu || O.useLayoutEffect, mu = /* @__PURE__ */ O.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ yp({
    key: "css"
  }) : null
);
mu.Provider;
var la = function(t) {
  return /* @__PURE__ */ ta(function(n, r) {
    var o = jf(mu);
    return t(n, o, r);
  });
}, po = /* @__PURE__ */ O.createContext({}), ca = {}.hasOwnProperty, Cs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", kp = function(t, n) {
  var r = {};
  for (var o in n)
    ca.call(n, o) && (r[o] = n[o]);
  return r[Cs] = t, r;
}, Ip = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return sa(n, r, o), pu(function() {
    return aa(n, r, o);
  }), null;
}, Mp = /* @__PURE__ */ la(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Cs], i = [r], s = "";
  typeof e.className == "string" ? s = uu(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = fo(i, void 0, O.useContext(po));
  s += t.key + "-" + a.name;
  var c = {};
  for (var u in e)
    ca.call(e, u) && u !== "css" && u !== Cs && (c[u] = e[u]);
  return c.className = s, n && (c.ref = n), /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(Ip, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ O.createElement(o, c));
}), Np = Mp, gl = function(t, n) {
  var r = arguments;
  if (n == null || !ca.call(n, "css"))
    return O.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = Np, i[1] = kp(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return O.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(gl || (gl = {}));
var $p = /* @__PURE__ */ la(function(e, t) {
  var n = e.styles, r = fo([n], void 0, O.useContext(po)), o = O.useRef();
  return hl(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, c = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), c !== null && (a = !0, c.setAttribute("data-emotion", i), s.hydrate([c])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), hl(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && aa(t, r.next, !0), s.tags.length) {
      var c = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = c, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function ua() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return fo(t);
}
function mo() {
  var e = ua.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Ap = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Dp = /* @__PURE__ */ lu(
  function(e) {
    return Ap.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), _p = Dp, Bp = function(t) {
  return t !== "theme";
}, yl = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? _p : Bp;
}, vl = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Lp = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return sa(n, r, o), pu(function() {
    return aa(n, r, o);
  }), null;
}, jp = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = vl(t, n, r), c = a || yl(o), u = !c("as");
  return function() {
    var f = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      d.push.apply(d, f);
    else {
      var h = f[0];
      d.push(h[0]);
      for (var g = f.length, v = 1; v < g; v++)
        d.push(f[v], h[v]);
    }
    var p = la(function(y, b, T) {
      var S = u && y.as || o, E = "", x = [], w = y;
      if (y.theme == null) {
        w = {};
        for (var C in y)
          w[C] = y[C];
        w.theme = O.useContext(po);
      }
      typeof y.className == "string" ? E = uu(b.registered, x, y.className) : y.className != null && (E = y.className + " ");
      var P = fo(d.concat(x), b.registered, w);
      E += b.key + "-" + P.name, s !== void 0 && (E += " " + s);
      var k = u && a === void 0 ? yl(S) : c, m = {};
      for (var R in y)
        u && R === "as" || k(R) && (m[R] = y[R]);
      return m.className = E, T && (m.ref = T), /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(Lp, {
        cache: b,
        serialized: P,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ O.createElement(S, m));
    });
    return p.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", p.defaultProps = t.defaultProps, p.__emotion_real = p, p.__emotion_base = o, p.__emotion_styles = d, p.__emotion_forwardProp = a, Object.defineProperty(p, "toString", {
      value: function() {
        return "." + s;
      }
    }), p.withComponent = function(y, b) {
      var T = e(y, ni({}, n, b, {
        shouldForwardProp: vl(p, b, !0)
      }));
      return T.apply(void 0, d);
    }, p;
  };
}, zp = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Os = jp.bind(null);
zp.forEach(function(e) {
  Os[e] = Os(e);
});
var ko = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var es, bl;
function Fp() {
  if (bl) return es;
  bl = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, a = 0; a < 10; a++)
        s["_" + String.fromCharCode(a)] = a;
      var c = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        u[f] = f;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return es = o() ? Object.assign : function(i, s) {
    for (var a, c = r(i), u, f = 1; f < arguments.length; f++) {
      a = Object(arguments[f]);
      for (var d in a)
        t.call(a, d) && (c[d] = a[d]);
      if (e) {
        u = e(a);
        for (var h = 0; h < u.length; h++)
          n.call(a, u[h]) && (c[u[h]] = a[u[h]]);
      }
    }
    return c;
  }, es;
}
var ts, xl;
function da() {
  if (xl) return ts;
  xl = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ts = e, ts;
}
var ns, Tl;
function hu() {
  return Tl || (Tl = 1, ns = Function.call.bind(Object.prototype.hasOwnProperty)), ns;
}
var rs, wl;
function Vp() {
  if (wl) return rs;
  wl = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ da(), n = {}, r = /* @__PURE__ */ hu();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, a, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (r(i, f)) {
          var d;
          try {
            if (typeof i[f] != "function") {
              var h = Error(
                (c || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            d = i[f](s, f, c, a, null, t);
          } catch (v) {
            d = v;
          }
          if (d && !(d instanceof Error) && e(
            (c || "React class") + ": type specification of " + a + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var g = u ? u() : "";
            e(
              "Failed " + a + " type: " + d.message + (g ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, rs = o, rs;
}
var os, El;
function Hp() {
  if (El) return os;
  El = 1;
  var e = ia(), t = Fp(), n = /* @__PURE__ */ da(), r = /* @__PURE__ */ hu(), o = /* @__PURE__ */ Vp(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(a) {
    var c = "Warning: " + a;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return os = function(a, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function d(N) {
      var j = N && (u && N[u] || N[f]);
      if (typeof j == "function")
        return j;
    }
    var h = "<<anonymous>>", g = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: T(),
      arrayOf: S,
      element: E(),
      elementType: x(),
      instanceOf: w,
      node: m(),
      objectOf: P,
      oneOf: C,
      oneOfType: k,
      shape: _,
      exact: B
    };
    function v(N, j) {
      return N === j ? N !== 0 || 1 / N === 1 / j : N !== N && j !== j;
    }
    function p(N, j) {
      this.message = N, this.data = j && typeof j == "object" ? j : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function y(N) {
      if (process.env.NODE_ENV !== "production")
        var j = {}, V = 0;
      function W(te, K, Z, D, X, H, ee) {
        if (D = D || h, H = H || Z, ee !== n) {
          if (c) {
            var z = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw z.name = "Invariant Violation", z;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = D + ":" + Z;
            !j[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            V < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + H + "` prop on `" + D + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), j[se] = !0, V++);
          }
        }
        return K[Z] == null ? te ? K[Z] === null ? new p("The " + X + " `" + H + "` is marked as required " + ("in `" + D + "`, but its value is `null`.")) : new p("The " + X + " `" + H + "` is marked as required in " + ("`" + D + "`, but its value is `undefined`.")) : null : N(K, Z, D, X, H);
      }
      var J = W.bind(null, !1);
      return J.isRequired = W.bind(null, !0), J;
    }
    function b(N) {
      function j(V, W, J, te, K, Z) {
        var D = V[W], X = I(D);
        if (X !== N) {
          var H = U(D);
          return new p(
            "Invalid " + te + " `" + K + "` of type " + ("`" + H + "` supplied to `" + J + "`, expected ") + ("`" + N + "`."),
            { expectedType: N }
          );
        }
        return null;
      }
      return y(j);
    }
    function T() {
      return y(s);
    }
    function S(N) {
      function j(V, W, J, te, K) {
        if (typeof N != "function")
          return new p("Property `" + K + "` of component `" + J + "` has invalid PropType notation inside arrayOf.");
        var Z = V[W];
        if (!Array.isArray(Z)) {
          var D = I(Z);
          return new p("Invalid " + te + " `" + K + "` of type " + ("`" + D + "` supplied to `" + J + "`, expected an array."));
        }
        for (var X = 0; X < Z.length; X++) {
          var H = N(Z, X, J, te, K + "[" + X + "]", n);
          if (H instanceof Error)
            return H;
        }
        return null;
      }
      return y(j);
    }
    function E() {
      function N(j, V, W, J, te) {
        var K = j[V];
        if (!a(K)) {
          var Z = I(K);
          return new p("Invalid " + J + " `" + te + "` of type " + ("`" + Z + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(N);
    }
    function x() {
      function N(j, V, W, J, te) {
        var K = j[V];
        if (!e.isValidElementType(K)) {
          var Z = I(K);
          return new p("Invalid " + J + " `" + te + "` of type " + ("`" + Z + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(N);
    }
    function w(N) {
      function j(V, W, J, te, K) {
        if (!(V[W] instanceof N)) {
          var Z = N.name || h, D = G(V[W]);
          return new p("Invalid " + te + " `" + K + "` of type " + ("`" + D + "` supplied to `" + J + "`, expected ") + ("instance of `" + Z + "`."));
        }
        return null;
      }
      return y(j);
    }
    function C(N) {
      if (!Array.isArray(N))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function j(V, W, J, te, K) {
        for (var Z = V[W], D = 0; D < N.length; D++)
          if (v(Z, N[D]))
            return null;
        var X = JSON.stringify(N, function(ee, z) {
          var se = U(z);
          return se === "symbol" ? String(z) : z;
        });
        return new p("Invalid " + te + " `" + K + "` of value `" + String(Z) + "` " + ("supplied to `" + J + "`, expected one of " + X + "."));
      }
      return y(j);
    }
    function P(N) {
      function j(V, W, J, te, K) {
        if (typeof N != "function")
          return new p("Property `" + K + "` of component `" + J + "` has invalid PropType notation inside objectOf.");
        var Z = V[W], D = I(Z);
        if (D !== "object")
          return new p("Invalid " + te + " `" + K + "` of type " + ("`" + D + "` supplied to `" + J + "`, expected an object."));
        for (var X in Z)
          if (r(Z, X)) {
            var H = N(Z, X, J, te, K + "." + X, n);
            if (H instanceof Error)
              return H;
          }
        return null;
      }
      return y(j);
    }
    function k(N) {
      if (!Array.isArray(N))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var j = 0; j < N.length; j++) {
        var V = N[j];
        if (typeof V != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Y(V) + " at index " + j + "."
          ), s;
      }
      function W(J, te, K, Z, D) {
        for (var X = [], H = 0; H < N.length; H++) {
          var ee = N[H], z = ee(J, te, K, Z, D, n);
          if (z == null)
            return null;
          z.data && r(z.data, "expectedType") && X.push(z.data.expectedType);
        }
        var se = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new p("Invalid " + Z + " `" + D + "` supplied to " + ("`" + K + "`" + se + "."));
      }
      return y(W);
    }
    function m() {
      function N(j, V, W, J, te) {
        return A(j[V]) ? null : new p("Invalid " + J + " `" + te + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return y(N);
    }
    function R(N, j, V, W, J) {
      return new p(
        (N || "React class") + ": " + j + " type `" + V + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + J + "`."
      );
    }
    function _(N) {
      function j(V, W, J, te, K) {
        var Z = V[W], D = I(Z);
        if (D !== "object")
          return new p("Invalid " + te + " `" + K + "` of type `" + D + "` " + ("supplied to `" + J + "`, expected `object`."));
        for (var X in N) {
          var H = N[X];
          if (typeof H != "function")
            return R(J, te, K, X, U(H));
          var ee = H(Z, X, J, te, K + "." + X, n);
          if (ee)
            return ee;
        }
        return null;
      }
      return y(j);
    }
    function B(N) {
      function j(V, W, J, te, K) {
        var Z = V[W], D = I(Z);
        if (D !== "object")
          return new p("Invalid " + te + " `" + K + "` of type `" + D + "` " + ("supplied to `" + J + "`, expected `object`."));
        var X = t({}, V[W], N);
        for (var H in X) {
          var ee = N[H];
          if (r(N, H) && typeof ee != "function")
            return R(J, te, K, H, U(ee));
          if (!ee)
            return new p(
              "Invalid " + te + " `" + K + "` key `" + H + "` supplied to `" + J + "`.\nBad object: " + JSON.stringify(V[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(N), null, "  ")
            );
          var z = ee(Z, H, J, te, K + "." + H, n);
          if (z)
            return z;
        }
        return null;
      }
      return y(j);
    }
    function A(N) {
      switch (typeof N) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !N;
        case "object":
          if (Array.isArray(N))
            return N.every(A);
          if (N === null || a(N))
            return !0;
          var j = d(N);
          if (j) {
            var V = j.call(N), W;
            if (j !== N.entries) {
              for (; !(W = V.next()).done; )
                if (!A(W.value))
                  return !1;
            } else
              for (; !(W = V.next()).done; ) {
                var J = W.value;
                if (J && !A(J[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function L(N, j) {
      return N === "symbol" ? !0 : j ? j["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && j instanceof Symbol : !1;
    }
    function I(N) {
      var j = typeof N;
      return Array.isArray(N) ? "array" : N instanceof RegExp ? "object" : L(j, N) ? "symbol" : j;
    }
    function U(N) {
      if (typeof N > "u" || N === null)
        return "" + N;
      var j = I(N);
      if (j === "object") {
        if (N instanceof Date)
          return "date";
        if (N instanceof RegExp)
          return "regexp";
      }
      return j;
    }
    function Y(N) {
      var j = U(N);
      switch (j) {
        case "array":
        case "object":
          return "an " + j;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + j;
        default:
          return j;
      }
    }
    function G(N) {
      return !N.constructor || !N.constructor.name ? h : N.constructor.name;
    }
    return g.checkPropTypes = o, g.resetWarningCache = o.resetWarningCache, g.PropTypes = g, g;
  }, os;
}
var is, Sl;
function Wp() {
  if (Sl) return is;
  Sl = 1;
  var e = /* @__PURE__ */ da();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, is = function() {
    function r(s, a, c, u, f, d) {
      if (d !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, is;
}
var Cl;
function Up() {
  if (Cl) return ko.exports;
  if (Cl = 1, process.env.NODE_ENV !== "production") {
    var e = ia(), t = !0;
    ko.exports = /* @__PURE__ */ Hp()(e.isElement, t);
  } else
    ko.exports = /* @__PURE__ */ Wp()();
  return ko.exports;
}
var Yp = /* @__PURE__ */ Up();
const l = /* @__PURE__ */ vp(Yp);
function qp(e) {
  return e == null || Object.keys(e).length === 0;
}
function fa(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ M($p, {
    styles: typeof t == "function" ? (o) => t(qp(o) ? n : o) : t
  });
}
process.env.NODE_ENV !== "production" && (fa.propTypes = {
  defaultTheme: l.object,
  styles: l.oneOfType([l.array, l.string, l.object, l.func])
});
/**
 * @mui/styled-engine v7.0.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function gu(e, t) {
  const n = Os(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function Gp(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Ol = [];
function Rl(e) {
  return Ol[0] = e, fo(Ol);
}
var Io = { exports: {} }, Ne = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pl;
function Kp() {
  if (Pl) return Ne;
  Pl = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
  function v(p) {
    if (typeof p == "object" && p !== null) {
      var y = p.$$typeof;
      switch (y) {
        case e:
          switch (p = p.type, p) {
            case n:
            case o:
            case r:
            case c:
            case u:
            case h:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case d:
                case f:
                  return p;
                case i:
                  return p;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return Ne.ContextConsumer = i, Ne.ContextProvider = s, Ne.Element = e, Ne.ForwardRef = a, Ne.Fragment = n, Ne.Lazy = d, Ne.Memo = f, Ne.Portal = t, Ne.Profiler = o, Ne.StrictMode = r, Ne.Suspense = c, Ne.SuspenseList = u, Ne.isContextConsumer = function(p) {
    return v(p) === i;
  }, Ne.isContextProvider = function(p) {
    return v(p) === s;
  }, Ne.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Ne.isForwardRef = function(p) {
    return v(p) === a;
  }, Ne.isFragment = function(p) {
    return v(p) === n;
  }, Ne.isLazy = function(p) {
    return v(p) === d;
  }, Ne.isMemo = function(p) {
    return v(p) === f;
  }, Ne.isPortal = function(p) {
    return v(p) === t;
  }, Ne.isProfiler = function(p) {
    return v(p) === o;
  }, Ne.isStrictMode = function(p) {
    return v(p) === r;
  }, Ne.isSuspense = function(p) {
    return v(p) === c;
  }, Ne.isSuspenseList = function(p) {
    return v(p) === u;
  }, Ne.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === o || p === r || p === c || p === u || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === f || p.$$typeof === s || p.$$typeof === i || p.$$typeof === a || p.$$typeof === g || p.getModuleId !== void 0);
  }, Ne.typeOf = v, Ne;
}
var $e = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kl;
function Xp() {
  return kl || (kl = 1, process.env.NODE_ENV !== "production" && function() {
    function e(p) {
      if (typeof p == "object" && p !== null) {
        var y = p.$$typeof;
        switch (y) {
          case t:
            switch (p = p.type, p) {
              case r:
              case i:
              case o:
              case u:
              case f:
              case g:
                return p;
              default:
                switch (p = p && p.$$typeof, p) {
                  case a:
                  case c:
                  case h:
                  case d:
                    return p;
                  case s:
                    return p;
                  default:
                    return y;
                }
            }
          case n:
            return y;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), v = Symbol.for("react.client.reference");
    $e.ContextConsumer = s, $e.ContextProvider = a, $e.Element = t, $e.ForwardRef = c, $e.Fragment = r, $e.Lazy = h, $e.Memo = d, $e.Portal = n, $e.Profiler = i, $e.StrictMode = o, $e.Suspense = u, $e.SuspenseList = f, $e.isContextConsumer = function(p) {
      return e(p) === s;
    }, $e.isContextProvider = function(p) {
      return e(p) === a;
    }, $e.isElement = function(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }, $e.isForwardRef = function(p) {
      return e(p) === c;
    }, $e.isFragment = function(p) {
      return e(p) === r;
    }, $e.isLazy = function(p) {
      return e(p) === h;
    }, $e.isMemo = function(p) {
      return e(p) === d;
    }, $e.isPortal = function(p) {
      return e(p) === n;
    }, $e.isProfiler = function(p) {
      return e(p) === i;
    }, $e.isStrictMode = function(p) {
      return e(p) === o;
    }, $e.isSuspense = function(p) {
      return e(p) === u;
    }, $e.isSuspenseList = function(p) {
      return e(p) === f;
    }, $e.isValidElementType = function(p) {
      return typeof p == "string" || typeof p == "function" || p === r || p === i || p === o || p === u || p === f || typeof p == "object" && p !== null && (p.$$typeof === h || p.$$typeof === d || p.$$typeof === a || p.$$typeof === s || p.$$typeof === c || p.$$typeof === v || p.getModuleId !== void 0);
    }, $e.typeOf = e;
  }()), $e;
}
var Il;
function Jp() {
  return Il || (Il = 1, process.env.NODE_ENV === "production" ? Io.exports = /* @__PURE__ */ Kp() : Io.exports = /* @__PURE__ */ Xp()), Io.exports;
}
var oi = /* @__PURE__ */ Jp();
function rn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function yu(e) {
  if (/* @__PURE__ */ O.isValidElement(e) || oi.isValidElementType(e) || !rn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = yu(e[n]);
  }), t;
}
function Mt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return rn(e) && rn(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ O.isValidElement(t[o]) || oi.isValidElementType(t[o]) ? r[o] = t[o] : rn(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && rn(e[o]) ? r[o] = Mt(e[o], t[o], n) : n.clone ? r[o] = rn(t[o]) ? yu(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Qp = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function Zp(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: r = 5,
    ...o
  } = e, i = Qp(t), s = Object.keys(i);
  function a(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function c(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${n})`;
  }
  function u(h, g) {
    const v = s.indexOf(g);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(v !== -1 && typeof t[s[v]] == "number" ? t[s[v]] : g) - r / 100}${n})`;
  }
  function f(h) {
    return s.indexOf(h) + 1 < s.length ? u(h, s[s.indexOf(h) + 1]) : a(h);
  }
  function d(h) {
    const g = s.indexOf(h);
    return g === 0 ? a(s[1]) : g === s.length - 1 ? c(s[g]) : u(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: a,
    down: c,
    between: u,
    only: f,
    not: d,
    unit: n,
    ...o
  };
}
function em(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((r) => r.startsWith("@container")).sort((r, o) => {
    var s, a;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((s = r.match(i)) == null ? void 0 : s[1]) || 0) - +(((a = o.match(i)) == null ? void 0 : a[1]) || 0);
  });
  return n.length ? n.reduce((r, o) => {
    const i = t[o];
    return delete r[o], r[o] = i, r;
  }, {
    ...t
  }) : t;
}
function tm(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function nm(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Sn(18, `(${t})`));
    return null;
  }
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function rm(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function n(i, s) {
    i.up = (...a) => t(e.breakpoints.up(...a), s), i.down = (...a) => t(e.breakpoints.down(...a), s), i.between = (...a) => t(e.breakpoints.between(...a), s), i.only = (...a) => t(e.breakpoints.only(...a), s), i.not = (...a) => {
      const c = t(e.breakpoints.not(...a), s);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const r = {}, o = (i) => (n(r, i), r);
  return n(o), {
    ...e,
    containerQueries: o
  };
}
const om = {
  borderRadius: 4
}, kn = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.string, l.object, l.array]) : {};
function zr(e, t) {
  return t ? Mt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const wi = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Ml = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${wi[e]}px)`
}, im = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : wi[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function yn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Ml;
    return t.reduce((s, a, c) => (s[i.up(i.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Ml;
    return Object.keys(t).reduce((s, a) => {
      if (tm(i.keys, a)) {
        const c = nm(r.containerQueries ? r : im, a);
        c && (s[c] = n(t[a], a));
      } else if (Object.keys(i.values || wi).includes(a)) {
        const c = i.up(a);
        s[c] = n(t[a], a);
      } else {
        const c = a;
        s[c] = t[c];
      }
      return s;
    }, {});
  }
  return n(t);
}
function sm(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function am(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function he(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Sn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ei(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function ii(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Ei(e, n) || r, t && (o = t(o, r, e)), o;
}
function qe(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], c = s.theme, u = Ei(c, r) || {};
    return yn(s, a, (d) => {
      let h = ii(u, o, d);
      return d === h && typeof d == "string" && (h = ii(u, o, `${t}${d === "default" ? "" : he(d)}`, d)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: kn
  } : {}, i.filterProps = [t], i;
}
function lm(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const cm = {
  m: "margin",
  p: "padding"
}, um = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Nl = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, dm = lm((e) => {
  if (e.length > 2)
    if (Nl[e])
      e = Nl[e];
    else
      return [e];
  const [t, n] = e.split(""), r = cm[t], o = um[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Si = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ci = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], fm = [...Si, ...Ci];
function ho(e, t, n, r) {
  const o = Ei(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const a = o[s];
    return i >= 0 ? a : typeof a == "number" ? -a : typeof a == "string" && a.startsWith("var(") ? `calc(-1 * ${a})` : `-${a}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function pa(e) {
  return ho(e, "spacing", 8, "spacing");
}
function go(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function pm(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = go(t, n), r), {});
}
function mm(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const o = dm(n), i = pm(o, r), s = e[n];
  return yn(e, s, i);
}
function vu(e, t) {
  const n = pa(e.theme);
  return Object.keys(e).map((r) => mm(e, t, r, n)).reduce(zr, {});
}
function We(e) {
  return vu(e, Si);
}
We.propTypes = process.env.NODE_ENV !== "production" ? Si.reduce((e, t) => (e[t] = kn, e), {}) : {};
We.filterProps = Si;
function Ue(e) {
  return vu(e, Ci);
}
Ue.propTypes = process.env.NODE_ENV !== "production" ? Ci.reduce((e, t) => (e[t] = kn, e), {}) : {};
Ue.filterProps = Ci;
process.env.NODE_ENV !== "production" && fm.reduce((e, t) => (e[t] = kn, e), {});
function bu(e = 8, t = pa({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return n.mui = !0, n;
}
function Oi(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? zr(o, t[i](r)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, o) => Object.assign(r, o.propTypes), {}) : {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Lt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Wt(e, t) {
  return qe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const hm = Wt("border", Lt), gm = Wt("borderTop", Lt), ym = Wt("borderRight", Lt), vm = Wt("borderBottom", Lt), bm = Wt("borderLeft", Lt), xm = Wt("borderColor"), Tm = Wt("borderTopColor"), wm = Wt("borderRightColor"), Em = Wt("borderBottomColor"), Sm = Wt("borderLeftColor"), Cm = Wt("outline", Lt), Om = Wt("outlineColor"), Ri = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ho(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: go(t, r)
    });
    return yn(e, e.borderRadius, n);
  }
  return null;
};
Ri.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: kn
} : {};
Ri.filterProps = ["borderRadius"];
Oi(hm, gm, ym, vm, bm, xm, Tm, wm, Em, Sm, Ri, Cm, Om);
const Pi = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ho(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: go(t, r)
    });
    return yn(e, e.gap, n);
  }
  return null;
};
Pi.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: kn
} : {};
Pi.filterProps = ["gap"];
const ki = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ho(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: go(t, r)
    });
    return yn(e, e.columnGap, n);
  }
  return null;
};
ki.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: kn
} : {};
ki.filterProps = ["columnGap"];
const Ii = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ho(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: go(t, r)
    });
    return yn(e, e.rowGap, n);
  }
  return null;
};
Ii.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: kn
} : {};
Ii.filterProps = ["rowGap"];
const Rm = qe({
  prop: "gridColumn"
}), Pm = qe({
  prop: "gridRow"
}), km = qe({
  prop: "gridAutoFlow"
}), Im = qe({
  prop: "gridAutoColumns"
}), Mm = qe({
  prop: "gridAutoRows"
}), Nm = qe({
  prop: "gridTemplateColumns"
}), $m = qe({
  prop: "gridTemplateRows"
}), Am = qe({
  prop: "gridTemplateAreas"
}), Dm = qe({
  prop: "gridArea"
});
Oi(Pi, ki, Ii, Rm, Pm, km, Im, Mm, Nm, $m, Am, Dm);
function ur(e, t) {
  return t === "grey" ? t : e;
}
const _m = qe({
  prop: "color",
  themeKey: "palette",
  transform: ur
}), Bm = qe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ur
}), Lm = qe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ur
});
Oi(_m, Bm, Lm);
function Pt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const jm = qe({
  prop: "width",
  transform: Pt
}), ma = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, a, c;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || wi[n];
      return r ? ((c = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: Pt(n)
      };
    };
    return yn(e, e.maxWidth, t);
  }
  return null;
};
ma.filterProps = ["maxWidth"];
const zm = qe({
  prop: "minWidth",
  transform: Pt
}), Fm = qe({
  prop: "height",
  transform: Pt
}), Vm = qe({
  prop: "maxHeight",
  transform: Pt
}), Hm = qe({
  prop: "minHeight",
  transform: Pt
});
qe({
  prop: "size",
  cssProperty: "width",
  transform: Pt
});
qe({
  prop: "size",
  cssProperty: "height",
  transform: Pt
});
const Wm = qe({
  prop: "boxSizing"
});
Oi(jm, ma, zm, Fm, Vm, Hm, Wm);
const yo = {
  // borders
  border: {
    themeKey: "borders",
    transform: Lt
  },
  borderTop: {
    themeKey: "borders",
    transform: Lt
  },
  borderRight: {
    themeKey: "borders",
    transform: Lt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Lt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Lt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Lt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ri
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ur
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ur
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ur
  },
  // spacing
  p: {
    style: Ue
  },
  pt: {
    style: Ue
  },
  pr: {
    style: Ue
  },
  pb: {
    style: Ue
  },
  pl: {
    style: Ue
  },
  px: {
    style: Ue
  },
  py: {
    style: Ue
  },
  padding: {
    style: Ue
  },
  paddingTop: {
    style: Ue
  },
  paddingRight: {
    style: Ue
  },
  paddingBottom: {
    style: Ue
  },
  paddingLeft: {
    style: Ue
  },
  paddingX: {
    style: Ue
  },
  paddingY: {
    style: Ue
  },
  paddingInline: {
    style: Ue
  },
  paddingInlineStart: {
    style: Ue
  },
  paddingInlineEnd: {
    style: Ue
  },
  paddingBlock: {
    style: Ue
  },
  paddingBlockStart: {
    style: Ue
  },
  paddingBlockEnd: {
    style: Ue
  },
  m: {
    style: We
  },
  mt: {
    style: We
  },
  mr: {
    style: We
  },
  mb: {
    style: We
  },
  ml: {
    style: We
  },
  mx: {
    style: We
  },
  my: {
    style: We
  },
  margin: {
    style: We
  },
  marginTop: {
    style: We
  },
  marginRight: {
    style: We
  },
  marginBottom: {
    style: We
  },
  marginLeft: {
    style: We
  },
  marginX: {
    style: We
  },
  marginY: {
    style: We
  },
  marginInline: {
    style: We
  },
  marginInlineStart: {
    style: We
  },
  marginInlineEnd: {
    style: We
  },
  marginBlock: {
    style: We
  },
  marginBlockStart: {
    style: We
  },
  marginBlockEnd: {
    style: We
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Pi
  },
  rowGap: {
    style: Ii
  },
  columnGap: {
    style: ki
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Pt
  },
  maxWidth: {
    style: ma
  },
  minWidth: {
    transform: Pt
  },
  height: {
    transform: Pt
  },
  maxHeight: {
    transform: Pt
  },
  minHeight: {
    transform: Pt
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Um(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Ym(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function qm() {
  function e(n, r, o, i) {
    const s = {
      [n]: r,
      theme: o
    }, a = i[n];
    if (!a)
      return {
        [n]: r
      };
    const {
      cssProperty: c = n,
      themeKey: u,
      transform: f,
      style: d
    } = a;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const h = Ei(o, u) || {};
    return d ? d(s) : yn(s, r, (v) => {
      let p = ii(h, f, v);
      return v === p && typeof v == "string" && (p = ii(h, f, `${n}${v === "default" ? "" : he(v)}`, v)), c === !1 ? p : {
        [c]: p
      };
    });
  }
  function t(n) {
    const {
      sx: r,
      theme: o = {}
    } = n || {};
    if (!r)
      return null;
    const i = o.unstable_sxConfig ?? yo;
    function s(a) {
      let c = a;
      if (typeof a == "function")
        c = a(o);
      else if (typeof a != "object")
        return a;
      if (!c)
        return null;
      const u = sm(o.breakpoints), f = Object.keys(u);
      let d = u;
      return Object.keys(c).forEach((h) => {
        const g = Ym(c[h], o);
        if (g != null)
          if (typeof g == "object")
            if (i[h])
              d = zr(d, e(h, g, o, i));
            else {
              const v = yn({
                theme: o
              }, g, (p) => ({
                [h]: p
              }));
              Um(v, g) ? d[h] = t({
                sx: g,
                theme: o
              }) : d = zr(d, v);
            }
          else
            d = zr(d, e(h, g, o, i));
      }), em(o, am(f, d));
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const Cn = qm();
Cn.filterProps = ["sx"];
function Gm(e, t) {
  var r;
  const n = this;
  if (n.vars) {
    if (!((r = n.colorSchemes) != null && r[e]) || typeof n.getColorSchemeSelector != "function")
      return {};
    let o = n.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function Mi(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, a = Zp(n), c = bu(o);
  let u = Mt({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...r
    },
    spacing: c,
    shape: {
      ...om,
      ...i
    }
  }, s);
  return u = rm(u), u.applyStyles = Gm, u = t.reduce((f, d) => Mt(f, d), u), u.unstable_sxConfig = {
    ...yo,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(d) {
    return Cn({
      sx: d,
      theme: this
    });
  }, u;
}
function Km(e) {
  return Object.keys(e).length === 0;
}
function ha(e = null) {
  const t = O.useContext(po);
  return !t || Km(t) ? e : t;
}
const Xm = Mi();
function Ni(e = Xm) {
  return ha(e);
}
function xu({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Ni(n), o = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ M(fa, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (xu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: l.object,
  /**
   * @ignore
   */
  styles: l.oneOfType([l.array, l.func, l.number, l.object, l.string, l.bool]),
  /**
   * @ignore
   */
  themeId: l.string
});
const Jm = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? yo;
  return Object.keys(e).forEach((o) => {
    n[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function Tu(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: r,
    otherProps: o
  } = Jm(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...s) => {
    const a = t(...s);
    return rn(a) ? {
      ...r,
      ...a
    } : r;
  } : i = {
    ...r,
    ...t
  }, {
    ...o,
    sx: i
  };
}
const $l = (e) => e, Qm = () => {
  let e = $l;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = $l;
    }
  };
}, wu = Qm();
function Eu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Eu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ye() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Eu(e)) && (r && (r += " "), r += t);
  return r;
}
function Zm(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = gu("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(Cn);
  return /* @__PURE__ */ O.forwardRef(function(c, u) {
    const f = Ni(n), {
      className: d,
      component: h = "div",
      ...g
    } = Tu(c);
    return /* @__PURE__ */ M(i, {
      as: h,
      ref: u,
      className: ye(d, o ? o(r) : r),
      theme: t && f[t] || f,
      ...g
    });
  });
}
const eh = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function it(e, t, n = "Mui") {
  const r = eh[t];
  return r ? `${n}-${r}` : `${wu.generate(e)}-${t}`;
}
function dt(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = it(e, o, n);
  }), r;
}
function Su(e, t = "") {
  return e.displayName || e.name || t;
}
function Al(e, t, n) {
  const r = Su(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function th(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Su(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case oi.ForwardRef:
          return Al(e, e.render, "ForwardRef");
        case oi.Memo:
          return Al(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Cu(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: Rl(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Rl(o.style));
  }), r;
}
const nh = Mi();
function ss(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function rh(e) {
  return e ? (t, n) => n[e] : null;
}
function oh(e, t, n) {
  e.theme = ah(e.theme) ? n : e.theme[t] || e.theme;
}
function Go(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((r) => Go(e, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let r;
    if (n.isProcessed)
      r = n.style;
    else {
      const {
        variants: o,
        ...i
      } = n;
      r = i;
    }
    return Ou(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function Ou(e, t, n = []) {
  var o;
  let r;
  e: for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (typeof s.props == "function") {
      if (r ?? (r = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !s.props(r))
        continue;
    } else
      for (const a in s.props)
        if (e[a] !== s.props[a] && ((o = e.ownerState) == null ? void 0 : o[a]) !== s.props[a])
          continue e;
    typeof s.style == "function" ? (r ?? (r = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), n.push(s.style(r))) : n.push(s.style);
  }
  return n;
}
function Ru(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = nh,
    rootShouldForwardProp: r = ss,
    slotShouldForwardProp: o = ss
  } = e;
  function i(a) {
    oh(a, t, n);
  }
  return (a, c = {}) => {
    Gp(a, (x) => x.filter((w) => w !== Cn));
    const {
      name: u,
      slot: f,
      skipVariantsResolver: d,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: g = rh(Pu(f)),
      ...v
    } = c, p = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), y = h || !1;
    let b = ss;
    f === "Root" || f === "root" ? b = r : f ? b = o : lh(a) && (b = void 0);
    const T = gu(a, {
      shouldForwardProp: b,
      label: sh(u, f),
      ...v
    }), S = (x) => {
      if (typeof x == "function" && x.__emotion_real !== x)
        return function(C) {
          return Go(C, x);
        };
      if (rn(x)) {
        const w = Cu(x);
        return w.variants ? function(P) {
          return Go(P, w);
        } : w.style;
      }
      return x;
    }, E = (...x) => {
      const w = [], C = x.map(S), P = [];
      if (w.push(i), u && g && P.push(function(_) {
        var I, U;
        const A = (U = (I = _.theme.components) == null ? void 0 : I[u]) == null ? void 0 : U.styleOverrides;
        if (!A)
          return null;
        const L = {};
        for (const Y in A)
          L[Y] = Go(_, A[Y]);
        return g(_, L);
      }), u && !p && P.push(function(_) {
        var L, I;
        const B = _.theme, A = (I = (L = B == null ? void 0 : B.components) == null ? void 0 : L[u]) == null ? void 0 : I.variants;
        return A ? Ou(_, A) : null;
      }), y || P.push(Cn), Array.isArray(C[0])) {
        const R = C.shift(), _ = new Array(w.length).fill(""), B = new Array(P.length).fill("");
        let A;
        A = [..._, ...R, ...B], A.raw = [..._, ...R.raw, ...B], w.unshift(A);
      }
      const k = [...w, ...C, ...P], m = T(...k);
      return a.muiName && (m.muiName = a.muiName), process.env.NODE_ENV !== "production" && (m.displayName = ih(u, f, a)), m;
    };
    return T.withConfig && (E.withConfig = T.withConfig), E;
  };
}
function ih(e, t, n) {
  return e ? `${e}${he(t || "")}` : `Styled(${th(n)})`;
}
function sh(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${Pu(t || "Root")}`), n;
}
function ah(e) {
  for (const t in e)
    return !1;
  return !0;
}
function lh(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Pu(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const ch = Ru();
function Xr(e, t) {
  const n = {
    ...t
  };
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const o = r;
      if (o === "components" || o === "slots")
        n[o] = {
          ...e[o],
          ...n[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], s = t[o];
        if (!s)
          n[o] = i || {};
        else if (!i)
          n[o] = s;
        else {
          n[o] = {
            ...s
          };
          for (const a in i)
            if (Object.prototype.hasOwnProperty.call(i, a)) {
              const c = a;
              n[o][c] = Xr(i[c], s[c]);
            }
        }
      } else n[o] === void 0 && (n[o] = e[o]);
    }
  return n;
}
function ku(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Xr(t.components[n].defaultProps, r);
}
function uh({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = Ni(n);
  return r && (o = o[r] || o), ku({
    theme: o,
    name: t,
    props: e
  });
}
const Un = typeof window < "u" ? O.useLayoutEffect : O.useEffect;
function dh(e, t, n, r, o) {
  const [i, s] = O.useState(() => o && n ? n(e).matches : r ? r(e).matches : t);
  return Un(() => {
    if (!n)
      return;
    const a = n(e), c = () => {
      s(a.matches);
    };
    return c(), a.addEventListener("change", c), () => {
      a.removeEventListener("change", c);
    };
  }, [e, n]), i;
}
const fh = {
  ...O
}, Iu = fh.useSyncExternalStore;
function ph(e, t, n, r, o) {
  const i = O.useCallback(() => t, [t]), s = O.useMemo(() => {
    if (o && n)
      return () => n(e).matches;
    if (r !== null) {
      const {
        matches: f
      } = r(e);
      return () => f;
    }
    return i;
  }, [i, e, r, o, n]), [a, c] = O.useMemo(() => {
    if (n === null)
      return [i, () => () => {
      }];
    const f = n(e);
    return [() => f.matches, (d) => (f.addEventListener("change", d), () => {
      f.removeEventListener("change", d);
    })];
  }, [i, n, e]);
  return Iu(c, a, s);
}
function Mu(e = {}) {
  const {
    themeId: t
  } = e;
  return function(r, o = {}) {
    let i = ha();
    i && t && (i = i[t] || i);
    const s = typeof window < "u" && typeof window.matchMedia < "u", {
      defaultMatches: a = !1,
      matchMedia: c = s ? window.matchMedia : null,
      ssrMatchMedia: u = null,
      noSsr: f = !1
    } = ku({
      name: "MuiUseMediaQuery",
      props: o,
      theme: i
    });
    process.env.NODE_ENV !== "production" && typeof r == "function" && i === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
    let d = typeof r == "function" ? r(i) : r;
    d = d.replace(/^@media( ?)/m, "");
    const g = (Iu !== void 0 ? ph : dh)(d, a, c, u, f);
    return process.env.NODE_ENV !== "production" && O.useDebugValue({
      query: d,
      match: g
    }), g;
  };
}
Mu();
function mh(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function ga(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), mh(e, t, n);
}
function hh(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function On(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return On(hh(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Sn(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Sn(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const gh = (e) => {
  const t = On(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, _r = (e, t) => {
  try {
    return gh(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function $i(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Nu(e) {
  e = On(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, f = (u + n / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let a = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", c.push(t[3])), $i({
    type: a,
    values: c
  });
}
function Rs(e) {
  e = On(e);
  let t = e.type === "hsl" || e.type === "hsla" ? On(Nu(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Dl(e, t) {
  const n = Rs(e), r = Rs(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function qt(e, t) {
  return e = On(e), t = ga(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, $i(e);
}
function Mo(e, t, n) {
  try {
    return qt(e, t);
  } catch {
    return e;
  }
}
function Ai(e, t) {
  if (e = On(e), t = ga(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return $i(e);
}
function Ae(e, t, n) {
  try {
    return Ai(e, t);
  } catch {
    return e;
  }
}
function Di(e, t) {
  if (e = On(e), t = ga(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return $i(e);
}
function De(e, t, n) {
  try {
    return Di(e, t);
  } catch {
    return e;
  }
}
function yh(e, t = 0.15) {
  return Rs(e) > 0.5 ? Ai(e, t) : Di(e, t);
}
function No(e, t, n) {
  try {
    return yh(e, t);
  } catch {
    return e;
  }
}
function In(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function vh(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function $u(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  const c = i.type;
  return typeof c == "function" && !vh(c) && (a = "Did you accidentally use a plain function component for an element instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Mn = In(l.element, $u);
Mn.isRequired = In(l.element.isRequired, $u);
function bh(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function xh(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof i == "function" && !bh(i) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Au = In(l.elementType, xh), Th = "exact-prop: ​";
function vo(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Th]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function vn(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const _i = l.oneOfType([l.func, l.object]);
function _l(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function Du(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function wt(e) {
  return e && e.ownerDocument || document;
}
function Rn(e) {
  return wt(e).defaultView || window;
}
function Ps(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Bl = 0;
function wh(e) {
  const [t, n] = O.useState(e), r = e || t;
  return O.useEffect(() => {
    t == null && (Bl += 1, n(`mui-${Bl}`));
  }, [t]), r;
}
const Eh = {
  ...O
}, Ll = Eh.useId;
function ya(e) {
  if (Ll !== void 0) {
    const t = Ll();
    return e ?? t;
  }
  return wh(e);
}
function Sh({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = O.useRef(e !== void 0), [i, s] = O.useState(t), a = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    O.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${r} state of ${n} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: u
    } = O.useRef(t);
    O.useEffect(() => {
      !o && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = O.useCallback((u) => {
    o || s(u);
  }, []);
  return [a, c];
}
function hn(e) {
  const t = O.useRef(e);
  return Un(() => {
    t.current = e;
  }), O.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Ot(...e) {
  return O.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Ps(n, t);
    });
  }, e);
}
const jl = {};
function _u(e, t) {
  const n = O.useRef(jl);
  return n.current === jl && (n.current = e(t)), n;
}
const Ch = [];
function Oh(e) {
  O.useEffect(e, Ch);
}
class Bi {
  constructor() {
    Pr(this, "currentId", null);
    Pr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Pr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Bi();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function lr() {
  const e = _u(Bi.create).current;
  return Oh(e.disposeEffect), e;
}
function si(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function Rh(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function Ph(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Bu(e, t, n, r) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const i = Ph(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Lu(e, t, ...n) {
  return e[t] === void 0 ? null : Bu(e, t, ...n);
}
function ks() {
  return null;
}
Lu.isRequired = Bu;
ks.isRequired = ks;
const va = process.env.NODE_ENV === "production" ? ks : Lu;
function gt(e, t, n = void 0) {
  const r = {};
  for (const o in e) {
    const i = e[o];
    let s = "", a = !0;
    for (let c = 0; c < i.length; c += 1) {
      const u = i[c];
      u && (s += (a === !0 ? "" : " ") + t(u), a = !1, n && n[u] && (s += " " + n[u]));
    }
    r[o] = s;
  }
  return r;
}
function kh(e) {
  return typeof e == "string";
}
function ju(e, t, n) {
  return e === void 0 || kh(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function zu(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function zl(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Fu(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const g = ye(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), v = {
      ...n == null ? void 0 : n.style,
      ...o == null ? void 0 : o.style,
      ...r == null ? void 0 : r.style
    }, p = {
      ...n,
      ...o,
      ...r
    };
    return g.length > 0 && (p.className = g), Object.keys(v).length > 0 && (p.style = v), {
      props: p,
      internalRef: void 0
    };
  }
  const s = zu({
    ...o,
    ...r
  }), a = zl(r), c = zl(o), u = t(s), f = ye(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), d = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...o == null ? void 0 : o.style,
    ...r == null ? void 0 : r.style
  }, h = {
    ...u,
    ...n,
    ...c,
    ...a
  };
  return f.length > 0 && (h.className = f), Object.keys(d).length > 0 && (h.style = d), {
    props: h,
    internalRef: u.ref
  };
}
function Vu(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Ih(e) {
  var d;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : Vu(n, r), {
    props: a,
    internalRef: c
  } = Fu({
    ...i,
    externalSlotProps: s
  }), u = Ot(c, s == null ? void 0 : s.ref, (d = e.additionalProps) == null ? void 0 : d.ref);
  return ju(t, {
    ...a,
    ref: u
  }, r);
}
function Gn(e) {
  var t;
  return parseInt(O.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const ba = /* @__PURE__ */ O.createContext(null);
process.env.NODE_ENV !== "production" && (ba.displayName = "ThemeContext");
function xa() {
  const e = O.useContext(ba);
  return process.env.NODE_ENV !== "production" && O.useDebugValue(e), e;
}
const Mh = typeof Symbol == "function" && Symbol.for, Nh = Mh ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function $h(e, t) {
  if (typeof t == "function") {
    const n = t(e);
    return process.env.NODE_ENV !== "production" && (n || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), n;
  }
  return {
    ...e,
    ...t
  };
}
function ai(e) {
  const {
    children: t,
    theme: n
  } = e, r = xa();
  process.env.NODE_ENV !== "production" && r === null && typeof n == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = O.useMemo(() => {
    const i = r === null ? {
      ...n
    } : $h(r, n);
    return i != null && (i[Nh] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ M(ba.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (ai.propTypes = {
  /**
   * Your component tree.
   */
  children: l.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: l.oneOfType([l.object, l.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (ai.propTypes = vo(ai.propTypes));
const Hu = /* @__PURE__ */ O.createContext();
function Wu({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ M(Hu.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (Wu.propTypes = {
  children: l.node,
  value: l.bool
});
const Ta = () => O.useContext(Hu) ?? !1, Uu = /* @__PURE__ */ O.createContext(void 0);
function Yu({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ M(Uu.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Yu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: l.node,
  /**
   * @ignore
   */
  value: l.object
});
function Ah(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Xr(o.defaultProps, r) : !o.styleOverrides && !o.variants ? Xr(o, r) : r;
}
function Dh({
  props: e,
  name: t
}) {
  const n = O.useContext(Uu);
  return Ah({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const Fl = {};
function Vl(e, t, n, r = !1) {
  return O.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), s = e ? {
        ...t,
        [e]: i
      } : i;
      return r ? () => s : s;
    }
    return e ? {
      ...t,
      [e]: n
    } : {
      ...t,
      ...n
    };
  }, [e, t, n, r]);
}
function Jr(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = ha(Fl), i = xa() || Fl;
  process.env.NODE_ENV !== "production" && (o === null && typeof n == "function" || r && o && !o[r] && typeof n == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = Vl(r, o, n), a = Vl(r, i, n, !0), c = (r ? s[r] : s).direction === "rtl";
  return /* @__PURE__ */ M(ai, {
    theme: a,
    children: /* @__PURE__ */ M(po.Provider, {
      value: s,
      children: /* @__PURE__ */ M(Wu, {
        value: c,
        children: /* @__PURE__ */ M(Yu, {
          value: r ? s[r].components : s.components,
          children: t
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Jr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: l.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: l.oneOfType([l.func, l.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: l.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Jr.propTypes = vo(Jr.propTypes));
const Hl = {
  theme: void 0
};
function _h(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Hl.theme = o.theme, i = Cu(e(Hl)), t = i, n = o.theme), i;
  };
}
const wa = "mode", Ea = "color-scheme", Bh = "data-color-scheme";
function Lh(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = wa,
    colorSchemeStorageKey: i = Ea,
    attribute: s = Bh,
    colorSchemeNode: a = "document.documentElement",
    nonce: c
  } = e || {};
  let u = "", f = s;
  if (s === "class" && (f = ".%s"), s === "data" && (f = "[data-%s]"), f.startsWith(".")) {
    const h = f.substring(1);
    u += `${a}.classList.remove('${h}'.replace('%s', light), '${h}'.replace('%s', dark));
      ${a}.classList.add('${h}'.replace('%s', colorScheme));`;
  }
  const d = f.match(/\[([^\]]+)\]/);
  if (d) {
    const [h, g] = d[1].split("=");
    g || (u += `${a}.removeAttribute('${h}'.replace('%s', light));
      ${a}.removeAttribute('${h}'.replace('%s', dark));`), u += `
      ${a}.setAttribute('${h}'.replace('%s', colorScheme), ${g ? `${g}.replace('%s', colorScheme)` : '""'});`;
  } else
    u += `${a}.setAttribute('${f}', colorScheme);`;
  return /* @__PURE__ */ M("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? c : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${i}-dark') || '${r}';
  const light = localStorage.getItem('${i}-light') || '${n}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${u}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function jh() {
}
const zh = ({
  key: e,
  storageWindow: t
}) => (!t && typeof window < "u" && (t = window), {
  get(n) {
    if (typeof window > "u")
      return;
    if (!t)
      return n;
    let r;
    try {
      r = t.localStorage.getItem(e);
    } catch {
    }
    return r || n;
  },
  set: (n) => {
    if (t)
      try {
        t.localStorage.setItem(e, n);
      } catch {
      }
  },
  subscribe: (n) => {
    if (!t)
      return jh;
    const r = (o) => {
      const i = o.newValue;
      o.key === e && n(i);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function as() {
}
function Wl(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function qu(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Fh(e) {
  return qu(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function Vh(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = wa,
    colorSchemeStorageKey: s = Ea,
    storageWindow: a = typeof window > "u" ? void 0 : window,
    storageManager: c = zh,
    noSsr: u = !1
  } = e, f = o.join(","), d = o.length > 1, h = O.useMemo(() => c == null ? void 0 : c({
    key: i,
    storageWindow: a
  }), [c, i, a]), g = O.useMemo(() => c == null ? void 0 : c({
    key: `${s}-light`,
    storageWindow: a
  }), [c, s, a]), v = O.useMemo(() => c == null ? void 0 : c({
    key: `${s}-dark`,
    storageWindow: a
  }), [c, s, a]), [p, y] = O.useState(() => {
    const P = (h == null ? void 0 : h.get(t)) || t, k = (g == null ? void 0 : g.get(n)) || n, m = (v == null ? void 0 : v.get(r)) || r;
    return {
      mode: P,
      systemMode: Wl(P),
      lightColorScheme: k,
      darkColorScheme: m
    };
  }), [b, T] = O.useState(u || !d);
  O.useEffect(() => {
    T(!0);
  }, []);
  const S = Fh(p), E = O.useCallback((P) => {
    y((k) => {
      if (P === k.mode)
        return k;
      const m = P ?? t;
      return h == null || h.set(m), {
        ...k,
        mode: m,
        systemMode: Wl(m)
      };
    });
  }, [h, t]), x = O.useCallback((P) => {
    P ? typeof P == "string" ? P && !f.includes(P) ? console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`) : y((k) => {
      const m = {
        ...k
      };
      return qu(k, (R) => {
        R === "light" && (g == null || g.set(P), m.lightColorScheme = P), R === "dark" && (v == null || v.set(P), m.darkColorScheme = P);
      }), m;
    }) : y((k) => {
      const m = {
        ...k
      }, R = P.light === null ? n : P.light, _ = P.dark === null ? r : P.dark;
      return R && (f.includes(R) ? (m.lightColorScheme = R, g == null || g.set(R)) : console.error(`\`${R}\` does not exist in \`theme.colorSchemes\`.`)), _ && (f.includes(_) ? (m.darkColorScheme = _, v == null || v.set(_)) : console.error(`\`${_}\` does not exist in \`theme.colorSchemes\`.`)), m;
    }) : y((k) => (g == null || g.set(n), v == null || v.set(r), {
      ...k,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [f, g, v, n, r]), w = O.useCallback((P) => {
    p.mode === "system" && y((k) => {
      const m = P != null && P.matches ? "dark" : "light";
      return k.systemMode === m ? k : {
        ...k,
        systemMode: m
      };
    });
  }, [p.mode]), C = O.useRef(w);
  return C.current = w, O.useEffect(() => {
    if (typeof window.matchMedia != "function" || !d)
      return;
    const P = (...m) => C.current(...m), k = window.matchMedia("(prefers-color-scheme: dark)");
    return k.addListener(P), P(k), () => {
      k.removeListener(P);
    };
  }, [d]), O.useEffect(() => {
    if (d) {
      const P = (h == null ? void 0 : h.subscribe((R) => {
        (!R || ["light", "dark", "system"].includes(R)) && E(R || t);
      })) || as, k = (g == null ? void 0 : g.subscribe((R) => {
        (!R || f.match(R)) && x({
          light: R
        });
      })) || as, m = (v == null ? void 0 : v.subscribe((R) => {
        (!R || f.match(R)) && x({
          dark: R
        });
      })) || as;
      return () => {
        P(), k(), m();
      };
    }
  }, [x, E, f, t, a, d, h, g, v]), {
    ...p,
    mode: b ? p.mode : void 0,
    systemMode: b ? p.systemMode : void 0,
    colorScheme: b ? S : void 0,
    setMode: E,
    setColorScheme: x
  };
}
const Hh = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Wh(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = wa,
    colorSchemeStorageKey: o = Ea,
    disableTransitionOnChange: i = !1,
    defaultColorScheme: s,
    resolveTheme: a
  } = e, c = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, u = /* @__PURE__ */ O.createContext(void 0);
  process.env.NODE_ENV !== "production" && (u.displayName = "ColorSchemeContext");
  const f = () => O.useContext(u) || c, d = {}, h = {};
  function g(b) {
    var yt, xt, Rt, vt;
    const {
      children: T,
      theme: S,
      modeStorageKey: E = r,
      colorSchemeStorageKey: x = o,
      disableTransitionOnChange: w = i,
      storageManager: C,
      storageWindow: P = typeof window > "u" ? void 0 : window,
      documentNode: k = typeof document > "u" ? void 0 : document,
      colorSchemeNode: m = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: R = !1,
      disableStyleSheetGeneration: _ = !1,
      defaultMode: B = "system",
      forceThemeRerender: A = !1,
      noSsr: L
    } = b, I = O.useRef(!1), U = xa(), Y = O.useContext(u), G = !!Y && !R, N = O.useMemo(() => S || (typeof n == "function" ? n() : n), [S]), j = N[t], V = j || N, {
      colorSchemes: W = d,
      components: J = h,
      cssVarPrefix: te
    } = V, K = Object.keys(W).filter((ke) => !!W[ke]).join(","), Z = O.useMemo(() => K.split(","), [K]), D = typeof s == "string" ? s : s.light, X = typeof s == "string" ? s : s.dark, H = W[D] && W[X] ? B : ((xt = (yt = W[V.defaultColorScheme]) == null ? void 0 : yt.palette) == null ? void 0 : xt.mode) || ((Rt = V.palette) == null ? void 0 : Rt.mode), {
      mode: ee,
      setMode: z,
      systemMode: se,
      lightColorScheme: ge,
      darkColorScheme: Oe,
      colorScheme: Ge,
      setColorScheme: xe
    } = Vh({
      supportedColorSchemes: Z,
      defaultLightColorScheme: D,
      defaultDarkColorScheme: X,
      modeStorageKey: E,
      colorSchemeStorageKey: x,
      defaultMode: H,
      storageManager: C,
      storageWindow: P,
      noSsr: L
    });
    let we = ee, de = Ge;
    G && (we = Y.mode, de = Y.colorScheme), process.env.NODE_ENV !== "production" && A && !V.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let Me = de || V.defaultColorScheme;
    V.vars && !A && (Me = V.defaultColorScheme);
    const ve = O.useMemo(() => {
      var He;
      const ke = ((He = V.generateThemeVars) == null ? void 0 : He.call(V)) || V.vars, fe = {
        ...V,
        components: J,
        colorSchemes: W,
        cssVarPrefix: te,
        vars: ke
      };
      if (typeof fe.generateSpacing == "function" && (fe.spacing = fe.generateSpacing()), Me) {
        const Ke = W[Me];
        Ke && typeof Ke == "object" && Object.keys(Ke).forEach((Be) => {
          Ke[Be] && typeof Ke[Be] == "object" ? fe[Be] = {
            ...fe[Be],
            ...Ke[Be]
          } : fe[Be] = Ke[Be];
        });
      }
      return a ? a(fe) : fe;
    }, [V, Me, J, W, te]), ne = V.colorSchemeSelector;
    Un(() => {
      if (de && m && ne && ne !== "media") {
        const ke = ne;
        let fe = ne;
        if (ke === "class" && (fe = ".%s"), ke === "data" && (fe = "[data-%s]"), ke != null && ke.startsWith("data-") && !ke.includes("%s") && (fe = `[${ke}="%s"]`), fe.startsWith("."))
          m.classList.remove(...Z.map((He) => fe.substring(1).replace("%s", He))), m.classList.add(fe.substring(1).replace("%s", de));
        else {
          const He = fe.replace("%s", de).match(/\[([^\]]+)\]/);
          if (He) {
            const [Ke, Be] = He[1].split("=");
            Be || Z.forEach((Jn) => {
              m.removeAttribute(Ke.replace(de, Jn));
            }), m.setAttribute(Ke, Be ? Be.replace(/"|'/g, "") : "");
          } else
            m.setAttribute(fe, de);
        }
      }
    }, [de, ne, m, Z]), O.useEffect(() => {
      let ke;
      if (w && I.current && k) {
        const fe = k.createElement("style");
        fe.appendChild(k.createTextNode(Hh)), k.head.appendChild(fe), window.getComputedStyle(k.body), ke = setTimeout(() => {
          k.head.removeChild(fe);
        }, 1);
      }
      return () => {
        clearTimeout(ke);
      };
    }, [de, w, k]), O.useEffect(() => (I.current = !0, () => {
      I.current = !1;
    }), []);
    const et = O.useMemo(() => ({
      allColorSchemes: Z,
      colorScheme: de,
      darkColorScheme: Oe,
      lightColorScheme: ge,
      mode: we,
      setColorScheme: xe,
      setMode: process.env.NODE_ENV === "production" ? z : (ke) => {
        ve.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), z(ke);
      },
      systemMode: se
    }), [Z, de, Oe, ge, we, xe, z, se, ve.colorSchemeSelector]);
    let at = !0;
    (_ || V.cssVariables === !1 || G && (U == null ? void 0 : U.cssVarPrefix) === te) && (at = !1);
    const lt = /* @__PURE__ */ je(O.Fragment, {
      children: [/* @__PURE__ */ M(Jr, {
        themeId: j ? t : void 0,
        theme: ve,
        children: T
      }), at && /* @__PURE__ */ M(fa, {
        styles: ((vt = ve.generateStyleSheets) == null ? void 0 : vt.call(ve)) || []
      })]
    });
    return G ? lt : /* @__PURE__ */ M(u.Provider, {
      value: et,
      children: lt
    });
  }
  process.env.NODE_ENV !== "production" && (g.propTypes = {
    /**
     * The component tree.
     */
    children: l.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: l.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: l.string,
    /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */
    defaultMode: l.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: l.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: l.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: l.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: l.any,
    /**
     * If `true`, theme values are recalculated when the mode changes.
     */
    forceThemeRerender: l.bool,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: l.string,
    /**
     * If `true`, the mode will be the same value as the storage without an extra rerendering after the hydration.
     * You should use this option in conjuction with `InitColorSchemeScript` component.
     */
    noSsr: l.bool,
    /**
     * The storage manager to be used for storing the mode and color scheme
     * @default using `window.localStorage`
     */
    storageManager: l.func,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: l.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: l.object
  });
  const v = typeof s == "string" ? s : s.light, p = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: g,
    useColorScheme: f,
    getInitColorSchemeScript: (b) => Lh({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: v,
      defaultDarkColorScheme: p,
      modeStorageKey: r,
      ...b
    })
  };
}
function Uh(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const Ul = (e, t, n, r = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = n : o && typeof o == "object" && (o[i] = n) : o && typeof o == "object" && (o[i] || (o[i] = r.includes(i) ? [] : {}), o = o[i]);
  });
}, Yh = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([a, c]) => {
      (!n || n && !n([...i, a])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...i, a], Array.isArray(c) ? [...s, a] : s) : t([...i, a], c, s));
    });
  }
  r(e);
}, qh = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function ls(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return Yh(
    e,
    (a, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(a, c))) {
        const f = `--${n ? `${n}-` : ""}${a.join("-")}`, d = qh(a, c);
        Object.assign(o, {
          [f]: d
        }), Ul(i, a, `var(${f})`, u), Ul(s, a, `var(${f}, ${d})`, u);
      }
    },
    (a) => a[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function Gh(e, t = {}) {
  const {
    getSelector: n = y,
    disableCssColorScheme: r,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: s,
    defaultColorScheme: a = "light",
    ...c
  } = e, {
    vars: u,
    css: f,
    varsWithDefaults: d
  } = ls(c, t);
  let h = d;
  const g = {}, {
    [a]: v,
    ...p
  } = i;
  if (Object.entries(p || {}).forEach(([S, E]) => {
    const {
      vars: x,
      css: w,
      varsWithDefaults: C
    } = ls(E, t);
    h = Mt(h, C), g[S] = {
      css: w,
      vars: x
    };
  }), v) {
    const {
      css: S,
      vars: E,
      varsWithDefaults: x
    } = ls(v, t);
    h = Mt(h, x), g[a] = {
      css: S,
      vars: E
    };
  }
  function y(S, E) {
    var w, C;
    let x = o;
    if (o === "class" && (x = ".%s"), o === "data" && (x = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (x = `[${o}="%s"]`), S) {
      if (x === "media")
        return e.defaultColorScheme === S ? ":root" : {
          [`@media (prefers-color-scheme: ${((C = (w = i[S]) == null ? void 0 : w.palette) == null ? void 0 : C.mode) || S})`]: {
            ":root": E
          }
        };
      if (x)
        return e.defaultColorScheme === S ? `:root, ${x.replace("%s", String(S))}` : x.replace("%s", String(S));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let S = {
        ...u
      };
      return Object.entries(g).forEach(([, {
        vars: E
      }]) => {
        S = Mt(S, E);
      }), S;
    },
    generateStyleSheets: () => {
      var P, k;
      const S = [], E = e.defaultColorScheme || "light";
      function x(m, R) {
        Object.keys(R).length && S.push(typeof m == "string" ? {
          [m]: {
            ...R
          }
        } : m);
      }
      x(n(void 0, {
        ...f
      }), f);
      const {
        [E]: w,
        ...C
      } = g;
      if (w) {
        const {
          css: m
        } = w, R = (k = (P = i[E]) == null ? void 0 : P.palette) == null ? void 0 : k.mode, _ = !r && R ? {
          colorScheme: R,
          ...m
        } : {
          ...m
        };
        x(n(E, {
          ..._
        }), _);
      }
      return Object.entries(C).forEach(([m, {
        css: R
      }]) => {
        var A, L;
        const _ = (L = (A = i[m]) == null ? void 0 : A.palette) == null ? void 0 : L.mode, B = !r && _ ? {
          colorScheme: _,
          ...R
        } : {
          ...R
        };
        x(n(m, {
          ...B
        }), B);
      }), S;
    }
  };
}
function Kh(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const Xh = Mi(), Jh = ch("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`maxWidth${he(String(n.maxWidth))}`], n.fixed && t.fixed, n.disableGutters && t.disableGutters];
  }
}), Qh = (e) => uh({
  props: e,
  name: "MuiContainer",
  defaultTheme: Xh
}), Zh = (e, t) => {
  const n = (c) => it(t, c), {
    classes: r,
    fixed: o,
    disableGutters: i,
    maxWidth: s
  } = e, a = {
    root: ["root", s && `maxWidth${he(String(s))}`, o && "fixed", i && "disableGutters"]
  };
  return gt(a, n, r);
};
function eg(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Jh,
    useThemeProps: n = Qh,
    componentName: r = "MuiContainer"
  } = e, o = t(({
    theme: s,
    ownerState: a
  }) => ({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    ...!a.disableGutters && {
      paddingLeft: s.spacing(2),
      paddingRight: s.spacing(2),
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [s.breakpoints.up("sm")]: {
        paddingLeft: s.spacing(3),
        paddingRight: s.spacing(3)
      }
    }
  }), ({
    theme: s,
    ownerState: a
  }) => a.fixed && Object.keys(s.breakpoints.values).reduce((c, u) => {
    const f = u, d = s.breakpoints.values[f];
    return d !== 0 && (c[s.breakpoints.up(f)] = {
      maxWidth: `${d}${s.breakpoints.unit}`
    }), c;
  }, {}), ({
    theme: s,
    ownerState: a
  }) => ({
    // @ts-ignore module augmentation fails if custom breakpoints are used
    ...a.maxWidth === "xs" && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [s.breakpoints.up("xs")]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: Math.max(s.breakpoints.values.xs, 444)
      }
    },
    ...a.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
    a.maxWidth !== "xs" && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [s.breakpoints.up(a.maxWidth)]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: `${s.breakpoints.values[a.maxWidth]}${s.breakpoints.unit}`
      }
    }
  })), i = /* @__PURE__ */ O.forwardRef(function(a, c) {
    const u = n(a), {
      className: f,
      component: d = "div",
      disableGutters: h = !1,
      fixed: g = !1,
      maxWidth: v = "lg",
      classes: p,
      ...y
    } = u, b = {
      ...u,
      component: d,
      disableGutters: h,
      fixed: g,
      maxWidth: v
    }, T = Zh(b, r);
    return (
      // @ts-ignore theme is injected by the styled util
      /* @__PURE__ */ M(o, {
        as: d,
        ownerState: b,
        className: ye(T.root, f),
        ref: c,
        ...y
      })
    );
  });
  return process.env.NODE_ENV !== "production" && (i.propTypes = {
    children: l.node,
    classes: l.object,
    className: l.string,
    component: l.elementType,
    disableGutters: l.bool,
    fixed: l.bool,
    maxWidth: l.oneOfType([l.oneOf(["xs", "sm", "md", "lg", "xl", !1]), l.string]),
    sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
  }), i;
}
const Gt = "$$material", Qr = {
  black: "#000",
  white: "#fff"
}, tg = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Zn = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, er = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Ir = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, tr = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, nr = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, rr = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Gu() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Qr.white,
      default: Qr.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const ng = Gu();
function Ku() {
  return {
    text: {
      primary: Qr.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Qr.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Yl = Ku();
function ql(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Di(e.main, o) : t === "dark" && (e.dark = Ai(e.main, i)));
}
function rg(e = "light") {
  return e === "dark" ? {
    main: tr[200],
    light: tr[50],
    dark: tr[400]
  } : {
    main: tr[700],
    light: tr[400],
    dark: tr[800]
  };
}
function og(e = "light") {
  return e === "dark" ? {
    main: Zn[200],
    light: Zn[50],
    dark: Zn[400]
  } : {
    main: Zn[500],
    light: Zn[300],
    dark: Zn[700]
  };
}
function ig(e = "light") {
  return e === "dark" ? {
    main: er[500],
    light: er[300],
    dark: er[700]
  } : {
    main: er[700],
    light: er[400],
    dark: er[800]
  };
}
function sg(e = "light") {
  return e === "dark" ? {
    main: nr[400],
    light: nr[300],
    dark: nr[700]
  } : {
    main: nr[700],
    light: nr[500],
    dark: nr[900]
  };
}
function ag(e = "light") {
  return e === "dark" ? {
    main: rr[400],
    light: rr[300],
    dark: rr[700]
  } : {
    main: rr[800],
    light: rr[500],
    dark: rr[900]
  };
}
function lg(e = "light") {
  return e === "dark" ? {
    main: Ir[400],
    light: Ir[300],
    dark: Ir[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ir[500],
    dark: Ir[900]
  };
}
function Sa(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...o
  } = e, i = e.primary || rg(t), s = e.secondary || og(t), a = e.error || ig(t), c = e.info || sg(t), u = e.success || ag(t), f = e.warning || lg(t);
  function d(p) {
    const y = Dl(p, Yl.text.primary) >= n ? Yl.text.primary : ng.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const b = Dl(p, y);
      b < 3 && console.error([`MUI: The contrast ratio of ${b}:1 for ${y} on ${p}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return y;
  }
  const h = ({
    color: p,
    name: y,
    mainShade: b = 500,
    lightShade: T = 300,
    darkShade: S = 700
  }) => {
    if (p = {
      ...p
    }, !p.main && p[b] && (p.main = p[b]), !p.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${b}\` property.` : Sn(11, y ? ` (${y})` : "", b));
    if (typeof p.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(p.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Sn(12, y ? ` (${y})` : "", JSON.stringify(p.main)));
    return ql(p, "light", T, r), ql(p, "dark", S, r), p.contrastText || (p.contrastText = d(p.main)), p;
  };
  let g;
  return t === "light" ? g = Gu() : t === "dark" && (g = Ku()), process.env.NODE_ENV !== "production" && (g || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Mt({
    // A collection of common colors.
    common: {
      ...Qr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: tg,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...g
  }, o);
}
function cg(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function ug(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function dg(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Gl = {
  textTransform: "uppercase"
}, Kl = '"Roboto", "Helvetica", "Arial", sans-serif';
function Xu(e, t) {
  const {
    fontFamily: n = Kl,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: f,
    ...d
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = r / 14, g = f || ((y) => `${y / c * h}rem`), v = (y, b, T, S, E) => ({
    fontFamily: n,
    fontWeight: y,
    fontSize: g(b),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Kl ? {
      letterSpacing: `${dg(S / b)}em`
    } : {},
    ...E,
    ...u
  }), p = {
    h1: v(o, 96, 1.167, -1.5),
    h2: v(o, 60, 1.2, -0.5),
    h3: v(i, 48, 1.167, 0),
    h4: v(i, 34, 1.235, 0.25),
    h5: v(i, 24, 1.334, 0),
    h6: v(s, 20, 1.6, 0.15),
    subtitle1: v(i, 16, 1.75, 0.15),
    subtitle2: v(s, 14, 1.57, 0.1),
    body1: v(i, 16, 1.5, 0.15),
    body2: v(i, 14, 1.43, 0.15),
    button: v(s, 14, 1.75, 0.4, Gl),
    caption: v(i, 12, 1.66, 0.4),
    overline: v(i, 12, 2.66, 1, Gl),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Mt({
    htmlFontSize: c,
    pxToRem: g,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: a,
    ...p
  }, d, {
    clone: !1
    // No need to clone deep
  });
}
const fg = 0.2, pg = 0.14, mg = 0.12;
function Fe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${fg})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${pg})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${mg})`].join(",");
}
const hg = ["none", Fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], gg = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, yg = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Xl(e) {
  return `${Math.round(e)}ms`;
}
function vg(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function bg(e) {
  const t = {
    ...gg,
    ...e.easing
  }, n = {
    ...yg,
    ...e.duration
  };
  return {
    getAutoHeightDuration: vg,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: c = 0,
        ...u
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const f = (h) => typeof h == "string", d = (h) => !Number.isNaN(parseFloat(h));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !d(s) && !f(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), f(a) || console.error('MUI: Argument "easing" must be a string.'), !d(c) && !f(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof s == "string" ? s : Xl(s)} ${a} ${typeof c == "string" ? c : Xl(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const xg = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Tg(e) {
  return rn(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Ju(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !Tg(a) || s.startsWith("unstable_") ? delete r[s] : rn(a) && (r[s] = {
        ...a
      }, n(r[s]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Is(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: a = {},
    shape: c,
    ...u
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Sn(20));
  const f = Sa(i), d = Mi(e);
  let h = Mt(d, {
    mixins: ug(d.breakpoints, r),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: hg.slice(),
    typography: Xu(f, a),
    transitions: bg(s),
    zIndex: {
      ...xg
    }
  });
  if (h = Mt(h, u), h = t.reduce((g, v) => Mt(g, v), h), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], v = (p, y) => {
      let b;
      for (b in p) {
        const T = p[b];
        if (g.includes(b) && Object.keys(T).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const S = it("", b);
            console.error([`MUI: The \`${y}\` component increases the CSS specificity of the \`${b}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${S}' syntax:`, JSON.stringify({
              root: {
                [`&.${S}`]: T
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[b] = {};
        }
      }
    };
    Object.keys(h.components).forEach((p) => {
      const y = h.components[p].styleOverrides;
      y && p.startsWith("Mui") && v(y, p);
    });
  }
  return h.unstable_sxConfig = {
    ...yo,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, h.unstable_sx = function(v) {
    return Cn({
      sx: v,
      theme: this
    });
  }, h.toRuntimeSource = Ju, h;
}
function Ms(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const wg = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Ms(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Qu(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Zu(e) {
  return e === "dark" ? wg : [];
}
function Eg(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...o
  } = e, i = Sa(t);
  return {
    palette: i,
    opacity: {
      ...Qu(i.mode),
      ...n
    },
    overlays: r || Zu(i.mode),
    ...o
  };
}
function Sg(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Cg = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Og = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Cg(e.cssVarPrefix).forEach((a) => {
        s[a] = n[a], delete n[a];
      }), i === "media" ? {
        [r]: n,
        "@media (prefers-color-scheme: dark)": {
          [r]: s
        }
      } : i ? {
        [i.replace("%s", t)]: s,
        [`${r}, ${i.replace("%s", t)}`]: n
      } : {
        [r]: {
          ...n,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `${r}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [r]: n
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return r;
};
function Rg(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function F(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Br(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Nu(e);
}
function pn(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = _r(Br(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Pg(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Qt = (e) => {
  try {
    return e();
  } catch {
  }
}, kg = (e = "mui") => Uh(e);
function cs(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = Eg({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...s
  } = Is({
    ...n,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[r] = {
    ...t,
    palette: i,
    opacity: {
      ...Qu(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Zu(o)
  }, s;
}
function Ig(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = Sg,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...u
  } = e, f = Object.keys(n)[0], d = r || (n.light && f !== "light" ? "light" : f), h = kg(i), {
    [d]: g,
    light: v,
    dark: p,
    ...y
  } = n, b = {
    ...y
  };
  let T = g;
  if ((d === "dark" && !("dark" in n) || d === "light" && !("light" in n)) && (T = !0), !T)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${d}\` option is either missing or invalid.` : Sn(21, d));
  const S = cs(b, T, u, d);
  v && !b.light && cs(b, v, void 0, "light"), p && !b.dark && cs(b, p, void 0, "dark");
  let E = {
    defaultColorScheme: d,
    ...S,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: c,
    getCssVar: h,
    colorSchemes: b,
    font: {
      ...cg(S.typography),
      ...S.font
    },
    spacing: Pg(u.spacing)
  };
  Object.keys(E.colorSchemes).forEach((k) => {
    const m = E.colorSchemes[k].palette, R = (_) => {
      const B = _.split("-"), A = B[1], L = B[2];
      return h(_, m[A][L]);
    };
    if (m.mode === "light" && (F(m.common, "background", "#fff"), F(m.common, "onBackground", "#000")), m.mode === "dark" && (F(m.common, "background", "#000"), F(m.common, "onBackground", "#fff")), Rg(m, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), m.mode === "light") {
      F(m.Alert, "errorColor", Ae(m.error.light, 0.6)), F(m.Alert, "infoColor", Ae(m.info.light, 0.6)), F(m.Alert, "successColor", Ae(m.success.light, 0.6)), F(m.Alert, "warningColor", Ae(m.warning.light, 0.6)), F(m.Alert, "errorFilledBg", R("palette-error-main")), F(m.Alert, "infoFilledBg", R("palette-info-main")), F(m.Alert, "successFilledBg", R("palette-success-main")), F(m.Alert, "warningFilledBg", R("palette-warning-main")), F(m.Alert, "errorFilledColor", Qt(() => m.getContrastText(m.error.main))), F(m.Alert, "infoFilledColor", Qt(() => m.getContrastText(m.info.main))), F(m.Alert, "successFilledColor", Qt(() => m.getContrastText(m.success.main))), F(m.Alert, "warningFilledColor", Qt(() => m.getContrastText(m.warning.main))), F(m.Alert, "errorStandardBg", De(m.error.light, 0.9)), F(m.Alert, "infoStandardBg", De(m.info.light, 0.9)), F(m.Alert, "successStandardBg", De(m.success.light, 0.9)), F(m.Alert, "warningStandardBg", De(m.warning.light, 0.9)), F(m.Alert, "errorIconColor", R("palette-error-main")), F(m.Alert, "infoIconColor", R("palette-info-main")), F(m.Alert, "successIconColor", R("palette-success-main")), F(m.Alert, "warningIconColor", R("palette-warning-main")), F(m.AppBar, "defaultBg", R("palette-grey-100")), F(m.Avatar, "defaultBg", R("palette-grey-400")), F(m.Button, "inheritContainedBg", R("palette-grey-300")), F(m.Button, "inheritContainedHoverBg", R("palette-grey-A100")), F(m.Chip, "defaultBorder", R("palette-grey-400")), F(m.Chip, "defaultAvatarColor", R("palette-grey-700")), F(m.Chip, "defaultIconColor", R("palette-grey-700")), F(m.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), F(m.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), F(m.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), F(m.LinearProgress, "primaryBg", De(m.primary.main, 0.62)), F(m.LinearProgress, "secondaryBg", De(m.secondary.main, 0.62)), F(m.LinearProgress, "errorBg", De(m.error.main, 0.62)), F(m.LinearProgress, "infoBg", De(m.info.main, 0.62)), F(m.LinearProgress, "successBg", De(m.success.main, 0.62)), F(m.LinearProgress, "warningBg", De(m.warning.main, 0.62)), F(m.Skeleton, "bg", `rgba(${R("palette-text-primaryChannel")} / 0.11)`), F(m.Slider, "primaryTrack", De(m.primary.main, 0.62)), F(m.Slider, "secondaryTrack", De(m.secondary.main, 0.62)), F(m.Slider, "errorTrack", De(m.error.main, 0.62)), F(m.Slider, "infoTrack", De(m.info.main, 0.62)), F(m.Slider, "successTrack", De(m.success.main, 0.62)), F(m.Slider, "warningTrack", De(m.warning.main, 0.62));
      const _ = No(m.background.default, 0.8);
      F(m.SnackbarContent, "bg", _), F(m.SnackbarContent, "color", Qt(() => m.getContrastText(_))), F(m.SpeedDialAction, "fabHoverBg", No(m.background.paper, 0.15)), F(m.StepConnector, "border", R("palette-grey-400")), F(m.StepContent, "border", R("palette-grey-400")), F(m.Switch, "defaultColor", R("palette-common-white")), F(m.Switch, "defaultDisabledColor", R("palette-grey-100")), F(m.Switch, "primaryDisabledColor", De(m.primary.main, 0.62)), F(m.Switch, "secondaryDisabledColor", De(m.secondary.main, 0.62)), F(m.Switch, "errorDisabledColor", De(m.error.main, 0.62)), F(m.Switch, "infoDisabledColor", De(m.info.main, 0.62)), F(m.Switch, "successDisabledColor", De(m.success.main, 0.62)), F(m.Switch, "warningDisabledColor", De(m.warning.main, 0.62)), F(m.TableCell, "border", De(Mo(m.divider, 1), 0.88)), F(m.Tooltip, "bg", Mo(m.grey[700], 0.92));
    }
    if (m.mode === "dark") {
      F(m.Alert, "errorColor", De(m.error.light, 0.6)), F(m.Alert, "infoColor", De(m.info.light, 0.6)), F(m.Alert, "successColor", De(m.success.light, 0.6)), F(m.Alert, "warningColor", De(m.warning.light, 0.6)), F(m.Alert, "errorFilledBg", R("palette-error-dark")), F(m.Alert, "infoFilledBg", R("palette-info-dark")), F(m.Alert, "successFilledBg", R("palette-success-dark")), F(m.Alert, "warningFilledBg", R("palette-warning-dark")), F(m.Alert, "errorFilledColor", Qt(() => m.getContrastText(m.error.dark))), F(m.Alert, "infoFilledColor", Qt(() => m.getContrastText(m.info.dark))), F(m.Alert, "successFilledColor", Qt(() => m.getContrastText(m.success.dark))), F(m.Alert, "warningFilledColor", Qt(() => m.getContrastText(m.warning.dark))), F(m.Alert, "errorStandardBg", Ae(m.error.light, 0.9)), F(m.Alert, "infoStandardBg", Ae(m.info.light, 0.9)), F(m.Alert, "successStandardBg", Ae(m.success.light, 0.9)), F(m.Alert, "warningStandardBg", Ae(m.warning.light, 0.9)), F(m.Alert, "errorIconColor", R("palette-error-main")), F(m.Alert, "infoIconColor", R("palette-info-main")), F(m.Alert, "successIconColor", R("palette-success-main")), F(m.Alert, "warningIconColor", R("palette-warning-main")), F(m.AppBar, "defaultBg", R("palette-grey-900")), F(m.AppBar, "darkBg", R("palette-background-paper")), F(m.AppBar, "darkColor", R("palette-text-primary")), F(m.Avatar, "defaultBg", R("palette-grey-600")), F(m.Button, "inheritContainedBg", R("palette-grey-800")), F(m.Button, "inheritContainedHoverBg", R("palette-grey-700")), F(m.Chip, "defaultBorder", R("palette-grey-700")), F(m.Chip, "defaultAvatarColor", R("palette-grey-300")), F(m.Chip, "defaultIconColor", R("palette-grey-300")), F(m.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), F(m.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), F(m.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), F(m.LinearProgress, "primaryBg", Ae(m.primary.main, 0.5)), F(m.LinearProgress, "secondaryBg", Ae(m.secondary.main, 0.5)), F(m.LinearProgress, "errorBg", Ae(m.error.main, 0.5)), F(m.LinearProgress, "infoBg", Ae(m.info.main, 0.5)), F(m.LinearProgress, "successBg", Ae(m.success.main, 0.5)), F(m.LinearProgress, "warningBg", Ae(m.warning.main, 0.5)), F(m.Skeleton, "bg", `rgba(${R("palette-text-primaryChannel")} / 0.13)`), F(m.Slider, "primaryTrack", Ae(m.primary.main, 0.5)), F(m.Slider, "secondaryTrack", Ae(m.secondary.main, 0.5)), F(m.Slider, "errorTrack", Ae(m.error.main, 0.5)), F(m.Slider, "infoTrack", Ae(m.info.main, 0.5)), F(m.Slider, "successTrack", Ae(m.success.main, 0.5)), F(m.Slider, "warningTrack", Ae(m.warning.main, 0.5));
      const _ = No(m.background.default, 0.98);
      F(m.SnackbarContent, "bg", _), F(m.SnackbarContent, "color", Qt(() => m.getContrastText(_))), F(m.SpeedDialAction, "fabHoverBg", No(m.background.paper, 0.15)), F(m.StepConnector, "border", R("palette-grey-600")), F(m.StepContent, "border", R("palette-grey-600")), F(m.Switch, "defaultColor", R("palette-grey-300")), F(m.Switch, "defaultDisabledColor", R("palette-grey-600")), F(m.Switch, "primaryDisabledColor", Ae(m.primary.main, 0.55)), F(m.Switch, "secondaryDisabledColor", Ae(m.secondary.main, 0.55)), F(m.Switch, "errorDisabledColor", Ae(m.error.main, 0.55)), F(m.Switch, "infoDisabledColor", Ae(m.info.main, 0.55)), F(m.Switch, "successDisabledColor", Ae(m.success.main, 0.55)), F(m.Switch, "warningDisabledColor", Ae(m.warning.main, 0.55)), F(m.TableCell, "border", Ae(Mo(m.divider, 1), 0.68)), F(m.Tooltip, "bg", Mo(m.grey[700], 0.92));
    }
    pn(m.background, "default"), pn(m.background, "paper"), pn(m.common, "background"), pn(m.common, "onBackground"), pn(m, "divider"), Object.keys(m).forEach((_) => {
      const B = m[_];
      _ !== "tonalOffset" && B && typeof B == "object" && (B.main && F(m[_], "mainChannel", _r(Br(B.main))), B.light && F(m[_], "lightChannel", _r(Br(B.light))), B.dark && F(m[_], "darkChannel", _r(Br(B.dark))), B.contrastText && F(m[_], "contrastTextChannel", _r(Br(B.contrastText))), _ === "text" && (pn(m[_], "primary"), pn(m[_], "secondary")), _ === "action" && (B.active && pn(m[_], "active"), B.selected && pn(m[_], "selected")));
    });
  }), E = t.reduce((k, m) => Mt(k, m), E);
  const x = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: Og(E)
  }, {
    vars: w,
    generateThemeVars: C,
    generateStyleSheets: P
  } = Gh(E, x);
  return E.vars = w, Object.entries(E.colorSchemes[E.defaultColorScheme]).forEach(([k, m]) => {
    E[k] = m;
  }), E.generateThemeVars = C, E.generateStyleSheets = P, E.generateSpacing = function() {
    return bu(u.spacing, pa(this));
  }, E.getColorSchemeSelector = Kh(a), E.spacing = E.generateSpacing(), E.shouldSkipGeneratingVar = s, E.unstable_sxConfig = {
    ...yo,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, E.unstable_sx = function(m) {
    return Cn({
      sx: m,
      theme: this
    });
  }, E.toRuntimeSource = Ju, E;
}
function Jl(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Sa({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Li(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: o = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = n == null ? void 0 : n.mode,
    ...s
  } = e, a = i || "light", c = o == null ? void 0 : o[a], u = {
    ...o,
    ...n ? {
      [a]: {
        ...typeof c != "boolean" && c,
        palette: n
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return Is(e, ...t);
    let f = n;
    "palette" in e || u[a] && (u[a] !== !0 ? f = u[a].palette : a === "dark" && (f = {
      mode: "dark"
    }));
    const d = Is({
      ...e,
      palette: f
    }, ...t);
    return d.defaultColorScheme = a, d.colorSchemes = u, d.palette.mode === "light" && (d.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: d.palette
    }, Jl(d, "dark", u.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: d.palette
    }, Jl(d, "light", u.light)), d;
  }
  return !n && !("light" in u) && a === "light" && (u.light = !0), Ig({
    ...s,
    colorSchemes: u,
    defaultColorScheme: a,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Ca = Li();
function xn() {
  const e = Ni(Ca);
  return process.env.NODE_ENV !== "production" && O.useDebugValue(e), e[Gt] || e;
}
function Mg(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Oa = (e) => Mg(e) && e !== "classes", Te = Ru({
  themeId: Gt,
  defaultTheme: Ca,
  rootShouldForwardProp: Oa
});
function us({
  theme: e,
  ...t
}) {
  const n = Gt in e ? e[Gt] : void 0;
  return /* @__PURE__ */ M(Jr, {
    ...t,
    themeId: n ? Gt : void 0,
    theme: n || e
  });
}
const $o = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: Ng
} = Wh({
  themeId: Gt,
  // @ts-ignore ignore module augmentation tests
  theme: () => Li({
    cssVariables: !0
  }),
  colorSchemeStorageKey: $o.colorSchemeStorageKey,
  modeStorageKey: $o.modeStorageKey,
  defaultColorScheme: {
    light: $o.defaultLightColorScheme,
    dark: $o.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: Xu(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return Cn({
        sx: r,
        theme: this
      });
    }, t;
  }
}), $g = Ng;
function Ag({
  theme: e,
  ...t
}) {
  if (typeof e == "function")
    return /* @__PURE__ */ M(us, {
      theme: e,
      ...t
    });
  const n = Gt in e ? e[Gt] : e;
  return "colorSchemes" in n ? /* @__PURE__ */ M($g, {
    theme: e,
    ...t
  }) : "vars" in n ? /* @__PURE__ */ M(us, {
    theme: e,
    ...t
  }) : /* @__PURE__ */ M(us, {
    theme: {
      ...e,
      vars: null
    },
    ...t
  });
}
const Dg = dt("MuiBox", ["root"]), _g = Li(), Sr = Zm({
  themeId: Gt,
  defaultTheme: _g,
  defaultClassName: Dg.root,
  generateClassName: wu.generate
});
process.env.NODE_ENV !== "production" && (Sr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: l.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const ed = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), li = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Ra = Object.freeze({
  ...ed,
  ...li
}), Ns = Object.freeze({
  ...Ra,
  body: "",
  hidden: !1
});
function Bg(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function Ql(e, t) {
  const n = Bg(e, t);
  for (const r in Ns)
    r in li ? r in e && !(r in n) && (n[r] = li[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
  return n;
}
function Lg(e, t) {
  const n = e.icons, r = e.aliases || /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  function i(s) {
    if (n[s])
      return o[s] = [];
    if (!(s in o)) {
      o[s] = null;
      const a = r[s] && r[s].parent, c = a && i(a);
      c && (o[s] = [a].concat(c));
    }
    return o[s];
  }
  return Object.keys(n).concat(Object.keys(r)).forEach(i), o;
}
function jg(e, t, n) {
  const r = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let i = {};
  function s(a) {
    i = Ql(
      r[a] || o[a],
      i
    );
  }
  return s(t), n.forEach(s), Ql(e, i);
}
function td(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    t(o, null), n.push(o);
  });
  const r = Lg(e);
  for (const o in r) {
    const i = r[o];
    i && (t(o, jg(e, o, i)), n.push(o));
  }
  return n;
}
const zg = {
  provider: "",
  aliases: {},
  not_found: {},
  ...ed
};
function ds(e, t) {
  for (const n in t)
    if (n in e && typeof e[n] != typeof t[n])
      return !1;
  return !0;
}
function nd(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !ds(e, zg))
    return null;
  const n = t.icons;
  for (const o in n) {
    const i = n[o];
    if (
      // Name cannot be empty
      !o || // Must have body
      typeof i.body != "string" || // Check other props
      !ds(
        i,
        Ns
      )
    )
      return null;
  }
  const r = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const o in r) {
    const i = r[o], s = i.parent;
    if (
      // Name cannot be empty
      !o || // Parent must be set and point to existing icon
      typeof s != "string" || !n[s] && !r[s] || // Check other props
      !ds(
        i,
        Ns
      )
    )
      return null;
  }
  return t;
}
const rd = /^[a-z0-9]+(-[a-z0-9]+)*$/, ji = (e, t, n, r = "") => {
  const o = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (o.length < 2 || o.length > 3)
      return null;
    r = o.shift().slice(1);
  }
  if (o.length > 3 || !o.length)
    return null;
  if (o.length > 1) {
    const a = o.pop(), c = o.pop(), u = {
      // Allow provider without '@': "provider:prefix:name"
      provider: o.length > 0 ? o[0] : r,
      prefix: c,
      name: a
    };
    return t && !Ko(u) ? null : u;
  }
  const i = o[0], s = i.split("-");
  if (s.length > 1) {
    const a = {
      provider: r,
      prefix: s.shift(),
      name: s.join("-")
    };
    return t && !Ko(a) ? null : a;
  }
  if (n && r === "") {
    const a = {
      provider: r,
      prefix: "",
      name: i
    };
    return t && !Ko(a, n) ? null : a;
  }
  return null;
}, Ko = (e, t) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e.prefix === "" || e.prefix) && e.name) : !1, Zl = /* @__PURE__ */ Object.create(null);
function Fg(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function pr(e, t) {
  const n = Zl[e] || (Zl[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = Fg(e, t));
}
function od(e, t) {
  return nd(t) ? td(t, (n, r) => {
    r ? e.icons[n] = r : e.missing.add(n);
  }) : [];
}
function Vg(e, t, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[t] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let Zr = !1;
function id(e) {
  return typeof e == "boolean" && (Zr = e), Zr;
}
function ec(e) {
  const t = typeof e == "string" ? ji(e, !0, Zr) : e;
  if (t) {
    const n = pr(t.provider, t.prefix), r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function Hg(e, t) {
  const n = ji(e, !0, Zr);
  if (!n)
    return !1;
  const r = pr(n.provider, n.prefix);
  return t ? Vg(r, n.name, t) : (r.missing.add(n.name), !0);
}
function Wg(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), Zr && !t && !e.prefix) {
    let o = !1;
    return nd(e) && (e.prefix = "", td(e, (i, s) => {
      Hg(i, s) && (o = !0);
    })), o;
  }
  const n = e.prefix;
  if (!Ko({
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = pr(t, n);
  return !!od(r, e);
}
const sd = Object.freeze({
  width: null,
  height: null
}), ad = Object.freeze({
  // Dimensions
  ...sd,
  // Transformations
  ...li
}), Ug = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Yg = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function tc(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const r = e.split(Ug);
  if (r === null || !r.length)
    return e;
  const o = [];
  let i = r.shift(), s = Yg.test(i);
  for (; ; ) {
    if (s) {
      const a = parseFloat(i);
      isNaN(a) ? o.push(i) : o.push(Math.ceil(a * t * n) / n);
    } else
      o.push(i);
    if (i = r.shift(), i === void 0)
      return o.join("");
    s = !s;
  }
}
function qg(e, t = "defs") {
  let n = "";
  const r = e.indexOf("<" + t);
  for (; r >= 0; ) {
    const o = e.indexOf(">", r), i = e.indexOf("</" + t);
    if (o === -1 || i === -1)
      break;
    const s = e.indexOf(">", i);
    if (s === -1)
      break;
    n += e.slice(o + 1, i).trim(), e = e.slice(0, r).trim() + e.slice(s + 1);
  }
  return {
    defs: n,
    content: e
  };
}
function Gg(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function Kg(e, t, n) {
  const r = qg(e);
  return Gg(r.defs, t + r.content + n);
}
const Xg = (e) => e === "unset" || e === "undefined" || e === "none";
function Jg(e, t) {
  const n = {
    ...Ra,
    ...e
  }, r = {
    ...ad,
    ...t
  }, o = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let i = n.body;
  [n, r].forEach((p) => {
    const y = [], b = p.hFlip, T = p.vFlip;
    let S = p.rotate;
    b ? T ? S += 2 : (y.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), y.push("scale(-1 1)"), o.top = o.left = 0) : T && (y.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), y.push("scale(1 -1)"), o.top = o.left = 0);
    let E;
    switch (S < 0 && (S -= Math.floor(S / 4) * 4), S = S % 4, S) {
      case 1:
        E = o.height / 2 + o.top, y.unshift(
          "rotate(90 " + E.toString() + " " + E.toString() + ")"
        );
        break;
      case 2:
        y.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        E = o.width / 2 + o.left, y.unshift(
          "rotate(-90 " + E.toString() + " " + E.toString() + ")"
        );
        break;
    }
    S % 2 === 1 && (o.left !== o.top && (E = o.left, o.left = o.top, o.top = E), o.width !== o.height && (E = o.width, o.width = o.height, o.height = E)), y.length && (i = Kg(
      i,
      '<g transform="' + y.join(" ") + '">',
      "</g>"
    ));
  });
  const s = r.width, a = r.height, c = o.width, u = o.height;
  let f, d;
  s === null ? (d = a === null ? "1em" : a === "auto" ? u : a, f = tc(d, c / u)) : (f = s === "auto" ? c : s, d = a === null ? tc(f, u / c) : a === "auto" ? u : a);
  const h = {}, g = (p, y) => {
    Xg(y) || (h[p] = y.toString());
  };
  g("width", f), g("height", d);
  const v = [o.left, o.top, c, u];
  return h.viewBox = v.join(" "), {
    attributes: h,
    viewBox: v,
    body: i
  };
}
const Qg = /\sid="(\S+)"/g, Zg = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let ey = 0;
function ty(e, t = Zg) {
  const n = [];
  let r;
  for (; r = Qg.exec(e); )
    n.push(r[1]);
  if (!n.length)
    return e;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((i) => {
    const s = typeof t == "function" ? t(i) : t + (ey++).toString(), a = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"),
      "$1" + s + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const $s = /* @__PURE__ */ Object.create(null);
function ny(e, t) {
  $s[e] = t;
}
function As(e) {
  return $s[e] || $s[""];
}
function Pa(e) {
  let t;
  if (typeof e.resources == "string")
    t = [e.resources];
  else if (t = e.resources, !(t instanceof Array) || !t.length)
    return null;
  return {
    // API hosts
    resources: t,
    // Root path
    path: e.path || "/",
    // URL length limit
    maxURL: e.maxURL || 500,
    // Timeout before next host is used.
    rotate: e.rotate || 750,
    // Timeout before failing query.
    timeout: e.timeout || 5e3,
    // Randomise default API end point.
    random: e.random === !0,
    // Start index
    index: e.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: e.dataAfterTimeout !== !1
  };
}
const ka = /* @__PURE__ */ Object.create(null), Mr = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Xo = [];
for (; Mr.length > 0; )
  Mr.length === 1 || Math.random() > 0.5 ? Xo.push(Mr.shift()) : Xo.push(Mr.pop());
ka[""] = Pa({
  resources: ["https://api.iconify.design"].concat(Xo)
});
function ry(e, t) {
  const n = Pa(t);
  return n === null ? !1 : (ka[e] = n, !0);
}
function Ia(e) {
  return ka[e];
}
const oy = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let nc = oy();
function iy(e, t) {
  const n = Ia(e);
  if (!n)
    return 0;
  let r;
  if (!n.maxURL)
    r = 0;
  else {
    let o = 0;
    n.resources.forEach((s) => {
      o = Math.max(o, s.length);
    });
    const i = t + ".json?icons=";
    r = n.maxURL - o - n.path.length - i.length;
  }
  return r;
}
function sy(e) {
  return e === 404;
}
const ay = (e, t, n) => {
  const r = [], o = iy(e, t), i = "icons";
  let s = {
    type: i,
    provider: e,
    prefix: t,
    icons: []
  }, a = 0;
  return n.forEach((c, u) => {
    a += c.length + 1, a >= o && u > 0 && (r.push(s), s = {
      type: i,
      provider: e,
      prefix: t,
      icons: []
    }, a = c.length), s.icons.push(c);
  }), r.push(s), r;
};
function ly(e) {
  if (typeof e == "string") {
    const t = Ia(e);
    if (t)
      return t.path;
  }
  return "/";
}
const cy = (e, t, n) => {
  if (!nc) {
    n("abort", 424);
    return;
  }
  let r = ly(t.provider);
  switch (t.type) {
    case "icons": {
      const i = t.prefix, a = t.icons.join(","), c = new URLSearchParams({
        icons: a
      });
      r += i + ".json?" + c.toString();
      break;
    }
    case "custom": {
      const i = t.uri;
      r += i.slice(0, 1) === "/" ? i.slice(1) : i;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let o = 503;
  nc(e + r).then((i) => {
    const s = i.status;
    if (s !== 200) {
      setTimeout(() => {
        n(sy(s) ? "abort" : "next", s);
      });
      return;
    }
    return o = 501, i.json();
  }).then((i) => {
    if (typeof i != "object" || i === null) {
      setTimeout(() => {
        i === 404 ? n("abort", i) : n("next", o);
      });
      return;
    }
    setTimeout(() => {
      n("success", i);
    });
  }).catch(() => {
    n("next", o);
  });
}, uy = {
  prepare: ay,
  send: cy
};
function dy(e) {
  const t = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  e.sort((o, i) => o.provider !== i.provider ? o.provider.localeCompare(i.provider) : o.prefix !== i.prefix ? o.prefix.localeCompare(i.prefix) : o.name.localeCompare(i.name));
  let r = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((o) => {
    if (r.name === o.name && r.prefix === o.prefix && r.provider === o.provider)
      return;
    r = o;
    const i = o.provider, s = o.prefix, a = o.name, c = n[i] || (n[i] = /* @__PURE__ */ Object.create(null)), u = c[s] || (c[s] = pr(i, s));
    let f;
    a in u.icons ? f = t.loaded : s === "" || u.missing.has(a) ? f = t.missing : f = t.pending;
    const d = {
      provider: i,
      prefix: s,
      name: a
    };
    f.push(d);
  }), t;
}
function ld(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
  });
}
function fy(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let n = !1;
    const r = e.provider, o = e.prefix;
    t.forEach((i) => {
      const s = i.icons, a = s.pending.length;
      s.pending = s.pending.filter((c) => {
        if (c.prefix !== o)
          return !0;
        const u = c.name;
        if (e.icons[u])
          s.loaded.push({
            provider: r,
            prefix: o,
            name: u
          });
        else if (e.missing.has(u))
          s.missing.push({
            provider: r,
            prefix: o,
            name: u
          });
        else
          return n = !0, !0;
        return !1;
      }), s.pending.length !== a && (n || ld([e], i.id), i.callback(
        s.loaded.slice(0),
        s.missing.slice(0),
        s.pending.slice(0),
        i.abort
      ));
    });
  }));
}
let py = 0;
function my(e, t, n) {
  const r = py++, o = ld.bind(null, n, r);
  if (!t.pending.length)
    return o;
  const i = {
    id: r,
    icons: t,
    callback: e,
    abort: o
  };
  return n.forEach((s) => {
    (s.loaderCallbacks || (s.loaderCallbacks = [])).push(i);
  }), o;
}
function hy(e, t = !0, n = !1) {
  const r = [];
  return e.forEach((o) => {
    const i = typeof o == "string" ? ji(o, t, n) : o;
    i && r.push(i);
  }), r;
}
var gy = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function yy(e, t, n, r) {
  const o = e.resources.length, i = e.random ? Math.floor(Math.random() * o) : e.index;
  let s;
  if (e.random) {
    let w = e.resources.slice(0);
    for (s = []; w.length > 1; ) {
      const C = Math.floor(Math.random() * w.length);
      s.push(w[C]), w = w.slice(0, C).concat(w.slice(C + 1));
    }
    s = s.concat(w);
  } else
    s = e.resources.slice(i).concat(e.resources.slice(0, i));
  const a = Date.now();
  let c = "pending", u = 0, f, d = null, h = [], g = [];
  typeof r == "function" && g.push(r);
  function v() {
    d && (clearTimeout(d), d = null);
  }
  function p() {
    c === "pending" && (c = "aborted"), v(), h.forEach((w) => {
      w.status === "pending" && (w.status = "aborted");
    }), h = [];
  }
  function y(w, C) {
    C && (g = []), typeof w == "function" && g.push(w);
  }
  function b() {
    return {
      startTime: a,
      payload: t,
      status: c,
      queriesSent: u,
      queriesPending: h.length,
      subscribe: y,
      abort: p
    };
  }
  function T() {
    c = "failed", g.forEach((w) => {
      w(void 0, f);
    });
  }
  function S() {
    h.forEach((w) => {
      w.status === "pending" && (w.status = "aborted");
    }), h = [];
  }
  function E(w, C, P) {
    const k = C !== "success";
    switch (h = h.filter((m) => m !== w), c) {
      case "pending":
        break;
      case "failed":
        if (k || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (C === "abort") {
      f = P, T();
      return;
    }
    if (k) {
      f = P, h.length || (s.length ? x() : T());
      return;
    }
    if (v(), S(), !e.random) {
      const m = e.resources.indexOf(w.resource);
      m !== -1 && m !== e.index && (e.index = m);
    }
    c = "completed", g.forEach((m) => {
      m(P);
    });
  }
  function x() {
    if (c !== "pending")
      return;
    v();
    const w = s.shift();
    if (w === void 0) {
      if (h.length) {
        d = setTimeout(() => {
          v(), c === "pending" && (S(), T());
        }, e.timeout);
        return;
      }
      T();
      return;
    }
    const C = {
      status: "pending",
      resource: w,
      callback: (P, k) => {
        E(C, P, k);
      }
    };
    h.push(C), u++, d = setTimeout(x, e.rotate), n(w, t, C.callback);
  }
  return setTimeout(x), b;
}
function cd(e) {
  const t = {
    ...gy,
    ...e
  };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === "pending");
  }
  function o(a, c, u) {
    const f = yy(
      t,
      a,
      c,
      (d, h) => {
        r(), u && u(d, h);
      }
    );
    return n.push(f), f;
  }
  function i(a) {
    return n.find((c) => a(c)) || null;
  }
  return {
    query: o,
    find: i,
    setIndex: (a) => {
      t.index = a;
    },
    getIndex: () => t.index,
    cleanup: r
  };
}
function rc() {
}
const fs = /* @__PURE__ */ Object.create(null);
function vy(e) {
  if (!fs[e]) {
    const t = Ia(e);
    if (!t)
      return;
    const n = cd(t), r = {
      config: t,
      redundancy: n
    };
    fs[e] = r;
  }
  return fs[e];
}
function by(e, t, n) {
  let r, o;
  if (typeof e == "string") {
    const i = As(e);
    if (!i)
      return n(void 0, 424), rc;
    o = i.send;
    const s = vy(e);
    s && (r = s.redundancy);
  } else {
    const i = Pa(e);
    if (i) {
      r = cd(i);
      const s = e.resources ? e.resources[0] : "", a = As(s);
      a && (o = a.send);
    }
  }
  return !r || !o ? (n(void 0, 424), rc) : r.query(t, o, n)().abort;
}
function oc() {
}
function xy(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, fy(e);
  }));
}
function Ty(e) {
  const t = [], n = [];
  return e.forEach((r) => {
    (r.match(rd) ? t : n).push(r);
  }), {
    valid: t,
    invalid: n
  };
}
function Nr(e, t, n) {
  function r() {
    const o = e.pendingIcons;
    t.forEach((i) => {
      o && o.delete(i), e.icons[i] || e.missing.add(i);
    });
  }
  if (n && typeof n == "object")
    try {
      if (!od(e, n).length) {
        r();
        return;
      }
    } catch (o) {
      console.error(o);
    }
  r(), xy(e);
}
function ic(e, t) {
  e instanceof Promise ? e.then((n) => {
    t(n);
  }).catch(() => {
    t(null);
  }) : t(e);
}
function wy(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = e, o = e.iconsToLoad;
    if (delete e.iconsToLoad, !o || !o.length)
      return;
    const i = e.loadIcon;
    if (e.loadIcons && (o.length > 1 || !i)) {
      ic(
        e.loadIcons(o, r, n),
        (f) => {
          Nr(e, o, f);
        }
      );
      return;
    }
    if (i) {
      o.forEach((f) => {
        const d = i(f, r, n);
        ic(d, (h) => {
          const g = h ? {
            prefix: r,
            icons: {
              [f]: h
            }
          } : null;
          Nr(e, [f], g);
        });
      });
      return;
    }
    const { valid: s, invalid: a } = Ty(o);
    if (a.length && Nr(e, a, null), !s.length)
      return;
    const c = r.match(rd) ? As(n) : null;
    if (!c) {
      Nr(e, s, null);
      return;
    }
    c.prepare(n, r, s).forEach((f) => {
      by(n, f, (d) => {
        Nr(e, f.icons, d);
      });
    });
  }));
}
const Ey = (e, t) => {
  const n = hy(e, !0, id()), r = dy(n);
  if (!r.pending.length) {
    let c = !0;
    return t && setTimeout(() => {
      c && t(
        r.loaded,
        r.missing,
        r.pending,
        oc
      );
    }), () => {
      c = !1;
    };
  }
  const o = /* @__PURE__ */ Object.create(null), i = [];
  let s, a;
  return r.pending.forEach((c) => {
    const { provider: u, prefix: f } = c;
    if (f === a && u === s)
      return;
    s = u, a = f, i.push(pr(u, f));
    const d = o[u] || (o[u] = /* @__PURE__ */ Object.create(null));
    d[f] || (d[f] = []);
  }), r.pending.forEach((c) => {
    const { provider: u, prefix: f, name: d } = c, h = pr(u, f), g = h.pendingIcons || (h.pendingIcons = /* @__PURE__ */ new Set());
    g.has(d) || (g.add(d), o[u][f].push(d));
  }), i.forEach((c) => {
    const u = o[c.provider][c.prefix];
    u.length && wy(c, u);
  }), t ? my(t, r, i) : oc;
};
function Sy(e, t) {
  const n = {
    ...e
  };
  for (const r in t) {
    const o = t[r], i = typeof o;
    r in sd ? (o === null || o && (i === "string" || i === "number")) && (n[r] = o) : i === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o);
  }
  return n;
}
const Cy = /[\s,]+/;
function Oy(e, t) {
  t.split(Cy).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function Ry(e, t = 0) {
  const n = e.replace(/^-?[0-9.]*/, "");
  function r(o) {
    for (; o < 0; )
      o += 4;
    return o % 4;
  }
  if (n === "") {
    const o = parseInt(e);
    return isNaN(o) ? 0 : r(o);
  } else if (n !== e) {
    let o = 0;
    switch (n) {
      case "%":
        o = 25;
        break;
      case "deg":
        o = 90;
    }
    if (o) {
      let i = parseFloat(e.slice(0, e.length - n.length));
      return isNaN(i) ? 0 : (i = i / o, i % 1 === 0 ? r(i) : 0);
    }
  }
  return t;
}
function Py(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t)
    n += " " + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function ky(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Iy(e) {
  return "data:image/svg+xml," + ky(e);
}
function My(e) {
  return 'url("' + Iy(e) + '")';
}
let Fr;
function Ny() {
  try {
    Fr = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (e) => e
    });
  } catch {
    Fr = null;
  }
}
function $y(e) {
  return Fr === void 0 && Ny(), Fr ? Fr.createHTML(e) : e;
}
const ud = {
  ...ad,
  inline: !1
}, Ay = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Dy = {
  display: "inline-block"
}, Ds = {
  backgroundColor: "currentColor"
}, dd = {
  backgroundColor: "transparent"
}, sc = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, ac = {
  WebkitMask: Ds,
  mask: Ds,
  background: dd
};
for (const e in ac) {
  const t = ac[e];
  for (const n in sc)
    t[e + n] = sc[n];
}
const _y = {
  ...ud,
  inline: !0
};
function lc(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const By = (e, t, n) => {
  const r = t.inline ? _y : ud, o = Sy(r, t), i = t.mode || "svg", s = {}, a = t.style || {}, c = {
    ...i === "svg" ? Ay : {}
  };
  if (n) {
    const y = ji(n, !1, !0);
    if (y) {
      const b = ["iconify"], T = [
        "provider",
        "prefix"
      ];
      for (const S of T)
        y[S] && b.push("iconify--" + y[S]);
      c.className = b.join(" ");
    }
  }
  for (let y in t) {
    const b = t[y];
    if (b !== void 0)
      switch (y) {
        // Properties to ignore
        case "icon":
        case "style":
        case "children":
        case "onLoad":
        case "mode":
        case "ssr":
          break;
        // Forward ref
        case "_ref":
          c.ref = b;
          break;
        // Merge class names
        case "className":
          c[y] = (c[y] ? c[y] + " " : "") + b;
          break;
        // Boolean attributes
        case "inline":
        case "hFlip":
        case "vFlip":
          o[y] = b === !0 || b === "true" || b === 1;
          break;
        // Flip as string: 'horizontal,vertical'
        case "flip":
          typeof b == "string" && Oy(o, b);
          break;
        // Color: copy to style
        case "color":
          s.color = b;
          break;
        // Rotation as string
        case "rotate":
          typeof b == "string" ? o[y] = Ry(b) : typeof b == "number" && (o[y] = b);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          b !== !0 && b !== "true" && delete c["aria-hidden"];
          break;
        // Copy missing property if it does not exist in customisations
        default:
          r[y] === void 0 && (c[y] = b);
      }
  }
  const u = Jg(e, o), f = u.attributes;
  if (o.inline && (s.verticalAlign = "-0.125em"), i === "svg") {
    c.style = {
      ...s,
      ...a
    }, Object.assign(c, f);
    let y = 0, b = t.id;
    return typeof b == "string" && (b = b.replace(/-/g, "_")), c.dangerouslySetInnerHTML = {
      __html: $y(ty(u.body, b ? () => b + "ID" + y++ : "iconifyReact"))
    }, Hn("svg", c);
  }
  const { body: d, width: h, height: g } = e, v = i === "mask" || (i === "bg" ? !1 : d.indexOf("currentColor") !== -1), p = Py(d, {
    ...f,
    width: h + "",
    height: g + ""
  });
  return c.style = {
    ...s,
    "--svg": My(p),
    width: lc(f.width),
    height: lc(f.height),
    ...Dy,
    ...v ? Ds : dd,
    ...a
  }, Hn("span", c);
};
id(!0);
ny("", uy);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !Wg(r)) && console.error(n);
      } catch {
        console.error(n);
      }
    });
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders;
    if (typeof t == "object" && t !== null)
      for (let n in t) {
        const r = "IconifyProviders[" + n + "] is invalid.";
        try {
          const o = t[n];
          if (typeof o != "object" || !o || o.resources === void 0)
            continue;
          ry(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
function fd(e) {
  const [t, n] = Vn(!!e.ssr), [r, o] = Vn({});
  function i(g) {
    if (g) {
      const v = e.icon;
      if (typeof v == "object")
        return {
          name: "",
          data: v
        };
      const p = ec(v);
      if (p)
        return {
          name: v,
          data: p
        };
    }
    return {
      name: ""
    };
  }
  const [s, a] = Vn(i(!!e.ssr));
  function c() {
    const g = r.callback;
    g && (g(), o({}));
  }
  function u(g) {
    if (JSON.stringify(s) !== JSON.stringify(g))
      return c(), a(g), !0;
  }
  function f() {
    var g;
    const v = e.icon;
    if (typeof v == "object") {
      u({
        name: "",
        data: v
      });
      return;
    }
    const p = ec(v);
    if (u({
      name: v,
      data: p
    }))
      if (p === void 0) {
        const y = Ey([v], f);
        o({
          callback: y
        });
      } else p && ((g = e.onLoad) === null || g === void 0 || g.call(e, v));
  }
  ti(() => (n(!0), c), []), ti(() => {
    t && f();
  }, [e.icon, t]);
  const { name: d, data: h } = s;
  return h ? By({
    ...Ra,
    ...h
  }, e, d) : e.children ? e.children : e.fallback ? e.fallback : Hn("span", {});
}
const Ly = ta((e, t) => fd({
  ...e,
  _ref: t
}));
ta((e, t) => fd({
  inline: !0,
  ...e,
  _ref: t
}));
const mr = rt(({ ref: e, icon: t, width: n = 20, color: r = "auto", sx: o, ...i }) => /* @__PURE__ */ M(
  Sr,
  {
    id: "VenomousUI-Icon",
    ssr: !0,
    ref: e,
    component: Ly,
    icon: t,
    sx: {
      width: n,
      height: n,
      flexShrink: 0,
      display: "inline-flex",
      color: (s) => r === "error" ? s.palette.error.main : r === "primary" ? s.palette.primary.main : r === "success" ? s.palette.success.main : r === "grey" ? s.palette.text.secondary : "inherit",
      ...o
    },
    ...i
  }
));
mr.displayName = "Icon";
function pd(e) {
  return /* @__PURE__ */ M(xu, {
    ...e,
    defaultTheme: Ca,
    themeId: Gt
  });
}
process.env.NODE_ENV !== "production" && (pd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: l.oneOfType([l.array, l.func, l.number, l.object, l.string, l.bool])
});
function md(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ M(pd, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
function jy() {
  return Tu;
}
const Dt = _h;
process.env.NODE_ENV !== "production" && (l.node, l.object.isRequired);
function st(e) {
  return Dh(e);
}
function hd(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function _s(e, t) {
  return _s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, _s(e, t);
}
function gd(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, _s(e, t);
}
const cc = {
  disabled: !1
};
var zy = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.shape({
  enter: l.number,
  exit: l.number,
  appear: l.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && l.oneOfType([l.string, l.shape({
  enter: l.string,
  exit: l.string,
  active: l.string
}), l.shape({
  enter: l.string,
  enterDone: l.string,
  enterActive: l.string,
  exit: l.string,
  exitDone: l.string,
  exitActive: l.string
})]);
const ci = $.createContext(null);
var Fy = function(t) {
  return t.scrollTop;
}, Lr = "unmounted", Ln = "exited", jn = "entering", ir = "entered", Bs = "exiting", Xt = /* @__PURE__ */ function(e) {
  gd(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = o, a = s && !s.isMounting ? r.enter : r.appear, c;
    return i.appearStatus = null, r.in ? a ? (c = Ln, i.appearStatus = jn) : c = ir : r.unmountOnExit || r.mountOnEnter ? c = Lr : c = Ln, i.state = {
      status: c
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === Lr ? {
      status: Ln
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== jn && s !== ir && (i = jn) : (s === jn || s === ir) && (i = Bs);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, i, s, a;
    return i = s = a = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, a = o.appear !== void 0 ? o.appear : s), {
      exit: i,
      enter: s,
      appear: a
    };
  }, n.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === jn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : ar.findDOMNode(this);
          s && Fy(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Ln && this.setState({
      status: Lr
    });
  }, n.performEnter = function(o) {
    var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : o, c = this.props.nodeRef ? [a] : [ar.findDOMNode(this), a], u = c[0], f = c[1], d = this.getTimeouts(), h = a ? d.appear : d.enter;
    if (!o && !s || cc.disabled) {
      this.safeSetState({
        status: ir
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, f), this.safeSetState({
      status: jn
    }, function() {
      i.props.onEntering(u, f), i.onTransitionEnd(h, function() {
        i.safeSetState({
          status: ir
        }, function() {
          i.props.onEntered(u, f);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : ar.findDOMNode(this);
    if (!i || cc.disabled) {
      this.safeSetState({
        status: Ln
      }, function() {
        o.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: Bs
    }, function() {
      o.props.onExiting(a), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: Ln
        }, function() {
          o.props.onExited(a);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, n.setNextCallback = function(o) {
    var i = this, s = !0;
    return this.nextCallback = function(a) {
      s && (s = !1, i.nextCallback = null, o(a));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : ar.findDOMNode(this), a = o == null && !this.props.addEndListener;
    if (!s || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], u = c[0], f = c[1];
      this.props.addEndListener(u, f);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === Lr)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var a = hd(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ $.createElement(ci.Provider, {
        value: null
      }, typeof s == "function" ? s(o, a) : $.cloneElement($.Children.only(s), a))
    );
  }, t;
}($.Component);
Xt.contextType = ci;
Xt.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: l.shape({
    current: typeof Element > "u" ? l.any : function(e, t, n, r, o, i) {
      var s = e[t];
      return l.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, n, r, o, i);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: l.oneOfType([l.func.isRequired, l.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: l.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: l.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: l.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: l.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: l.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: l.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = zy;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      o[i - 1] = arguments[i];
    return n.apply(void 0, [t].concat(o));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: l.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: l.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: l.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: l.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: l.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: l.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: l.func
} : {};
function or() {
}
Xt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: or,
  onEntering: or,
  onEntered: or,
  onExit: or,
  onExiting: or,
  onExited: or
};
Xt.UNMOUNTED = Lr;
Xt.EXITED = Ln;
Xt.ENTERING = jn;
Xt.ENTERED = ir;
Xt.EXITING = Bs;
function Vy(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ma(e, t) {
  var n = function(i) {
    return t && Ho(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && zf.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function Hy(e, t) {
  e = e || {}, t = t || {};
  function n(f) {
    return f in t ? t[f] : e[f];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (r[i] = o, o = []) : o.push(i);
  var s, a = {};
  for (var c in t) {
    if (r[c])
      for (s = 0; s < r[c].length; s++) {
        var u = r[c][s];
        a[r[c][s]] = n(u);
      }
    a[c] = n(c);
  }
  for (s = 0; s < o.length; s++)
    a[o[s]] = n(o[s]);
  return a;
}
function zn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Wy(e, t) {
  return Ma(e.children, function(n) {
    return Wo(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: zn(n, "appear", e),
      enter: zn(n, "enter", e),
      exit: zn(n, "exit", e)
    });
  });
}
function Uy(e, t, n) {
  var r = Ma(e.children), o = Hy(t, r);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (Ho(s)) {
      var a = i in t, c = i in r, u = t[i], f = Ho(u) && !u.props.in;
      c && (!a || f) ? o[i] = Wo(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: zn(s, "exit", e),
        enter: zn(s, "enter", e)
      }) : !c && a && !f ? o[i] = Wo(s, {
        in: !1
      }) : c && a && Ho(u) && (o[i] = Wo(s, {
        onExited: n.bind(null, s),
        in: u.props.in,
        exit: zn(s, "exit", e),
        enter: zn(s, "enter", e)
      }));
    }
  }), o;
}
var Yy = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, qy = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Na = /* @__PURE__ */ function(e) {
  gd(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = i.handleExited.bind(Vy(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, a = i.handleExited, c = i.firstRender;
    return {
      children: c ? Wy(o, a) : Uy(o, s, a),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var s = Ma(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(a) {
      var c = ni({}, a.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, a = hd(o, ["component", "childFactory"]), c = this.state.contextValue, u = Yy(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, i === null ? /* @__PURE__ */ $.createElement(ci.Provider, {
      value: c
    }, u) : /* @__PURE__ */ $.createElement(ci.Provider, {
      value: c
    }, /* @__PURE__ */ $.createElement(i, a, u));
  }, t;
}($.Component);
Na.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: l.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: l.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: l.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: l.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: l.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: l.func
} : {};
Na.defaultProps = qy;
const $a = (e) => e.scrollTop;
function hr(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = {}
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function Ls(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Gy = {
  entering: {
    opacity: 1,
    transform: Ls(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, ps = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), eo = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: s,
    in: a,
    onEnter: c,
    onEntered: u,
    onEntering: f,
    onExit: d,
    onExited: h,
    onExiting: g,
    style: v,
    timeout: p = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: y = Xt,
    ...b
  } = t, T = lr(), S = O.useRef(), E = xn(), x = O.useRef(null), w = Ot(x, Gn(i), n), C = (L) => (I) => {
    if (L) {
      const U = x.current;
      I === void 0 ? L(U) : L(U, I);
    }
  }, P = C(f), k = C((L, I) => {
    $a(L);
    const {
      duration: U,
      delay: Y,
      easing: G
    } = hr({
      style: v,
      timeout: p,
      easing: s
    }, {
      mode: "enter"
    });
    let N;
    p === "auto" ? (N = E.transitions.getAutoHeightDuration(L.clientHeight), S.current = N) : N = U, L.style.transition = [E.transitions.create("opacity", {
      duration: N,
      delay: Y
    }), E.transitions.create("transform", {
      duration: ps ? N : N * 0.666,
      delay: Y,
      easing: G
    })].join(","), c && c(L, I);
  }), m = C(u), R = C(g), _ = C((L) => {
    const {
      duration: I,
      delay: U,
      easing: Y
    } = hr({
      style: v,
      timeout: p,
      easing: s
    }, {
      mode: "exit"
    });
    let G;
    p === "auto" ? (G = E.transitions.getAutoHeightDuration(L.clientHeight), S.current = G) : G = I, L.style.transition = [E.transitions.create("opacity", {
      duration: G,
      delay: U
    }), E.transitions.create("transform", {
      duration: ps ? G : G * 0.666,
      delay: ps ? U : U || G * 0.333,
      easing: Y
    })].join(","), L.style.opacity = 0, L.style.transform = Ls(0.75), d && d(L);
  }), B = C(h);
  return /* @__PURE__ */ M(y, {
    appear: o,
    in: a,
    nodeRef: x,
    onEnter: k,
    onEntered: m,
    onEntering: P,
    onExit: _,
    onExited: B,
    onExiting: R,
    addEndListener: (L) => {
      p === "auto" && T.start(S.current || 0, L), r && r(x.current, L);
    },
    timeout: p === "auto" ? null : p,
    ...b,
    children: (L, {
      ownerState: I,
      ...U
    }) => /* @__PURE__ */ O.cloneElement(i, {
      style: {
        opacity: 0,
        transform: Ls(0.75),
        visibility: L === "exited" && !a ? "hidden" : void 0,
        ...Gy[L],
        ...v,
        ...i.props.style
      },
      ref: w,
      ...U
    })
  });
});
process.env.NODE_ENV !== "production" && (eo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: l.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: l.bool,
  /**
   * A single child content element.
   */
  children: Mn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: l.oneOfType([l.shape({
    enter: l.string,
    exit: l.string
  }), l.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: l.bool,
  /**
   * @ignore
   */
  onEnter: l.func,
  /**
   * @ignore
   */
  onEntered: l.func,
  /**
   * @ignore
   */
  onEntering: l.func,
  /**
   * @ignore
   */
  onExit: l.func,
  /**
   * @ignore
   */
  onExited: l.func,
  /**
   * @ignore
   */
  onExiting: l.func,
  /**
   * @ignore
   */
  style: l.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: l.oneOfType([l.oneOf(["auto"]), l.number, l.shape({
    appear: l.number,
    enter: l.number,
    exit: l.number
  })])
});
eo && (eo.muiSupportAuto = !0);
var Et = "top", Vt = "bottom", Ht = "right", St = "left", Aa = "auto", bo = [Et, Vt, Ht, St], gr = "start", to = "end", Ky = "clippingParents", yd = "viewport", $r = "popper", Xy = "reference", uc = /* @__PURE__ */ bo.reduce(function(e, t) {
  return e.concat([t + "-" + gr, t + "-" + to]);
}, []), vd = /* @__PURE__ */ [].concat(bo, [Aa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + gr, t + "-" + to]);
}, []), Jy = "beforeRead", Qy = "read", Zy = "afterRead", ev = "beforeMain", tv = "main", nv = "afterMain", rv = "beforeWrite", ov = "write", iv = "afterWrite", sv = [Jy, Qy, Zy, ev, tv, nv, rv, ov, iv];
function cn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function At(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Yn(e) {
  var t = At(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ft(e) {
  var t = At(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Da(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = At(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function av(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Ft(i) || !cn(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var a = o[s];
      a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function lv(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], i = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), a = s.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !Ft(o) || !cn(o) || (Object.assign(o.style, a), Object.keys(i).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
const cv = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: av,
  effect: lv,
  requires: ["computeStyles"]
};
function ln(e) {
  return e.split("-")[0];
}
var Wn = Math.max, ui = Math.min, yr = Math.round;
function js() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function bd() {
  return !/^((?!chrome|android).)*safari/i.test(js());
}
function vr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && Ft(e) && (o = e.offsetWidth > 0 && yr(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && yr(r.height) / e.offsetHeight || 1);
  var s = Yn(e) ? At(e) : window, a = s.visualViewport, c = !bd() && n, u = (r.left + (c && a ? a.offsetLeft : 0)) / o, f = (r.top + (c && a ? a.offsetTop : 0)) / i, d = r.width / o, h = r.height / i;
  return {
    width: d,
    height: h,
    top: f,
    right: u + d,
    bottom: f + h,
    left: u,
    x: u,
    y: f
  };
}
function _a(e) {
  var t = vr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function xd(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Da(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function bn(e) {
  return At(e).getComputedStyle(e);
}
function uv(e) {
  return ["table", "td", "th"].indexOf(cn(e)) >= 0;
}
function Nn(e) {
  return ((Yn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function zi(e) {
  return cn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Da(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Nn(e)
  );
}
function dc(e) {
  return !Ft(e) || // https://github.com/popperjs/popper-core/issues/837
  bn(e).position === "fixed" ? null : e.offsetParent;
}
function dv(e) {
  var t = /firefox/i.test(js()), n = /Trident/i.test(js());
  if (n && Ft(e)) {
    var r = bn(e);
    if (r.position === "fixed")
      return null;
  }
  var o = zi(e);
  for (Da(o) && (o = o.host); Ft(o) && ["html", "body"].indexOf(cn(o)) < 0; ) {
    var i = bn(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function xo(e) {
  for (var t = At(e), n = dc(e); n && uv(n) && bn(n).position === "static"; )
    n = dc(n);
  return n && (cn(n) === "html" || cn(n) === "body" && bn(n).position === "static") ? t : n || dv(e) || t;
}
function Ba(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Vr(e, t, n) {
  return Wn(e, ui(t, n));
}
function fv(e, t, n) {
  var r = Vr(e, t, n);
  return r > n ? n : r;
}
function Td() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function wd(e) {
  return Object.assign({}, Td(), e);
}
function Ed(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var pv = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, wd(typeof t != "number" ? t : Ed(t, bo));
};
function mv(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, a = ln(n.placement), c = Ba(a), u = [St, Ht].indexOf(a) >= 0, f = u ? "height" : "width";
  if (!(!i || !s)) {
    var d = pv(o.padding, n), h = _a(i), g = c === "y" ? Et : St, v = c === "y" ? Vt : Ht, p = n.rects.reference[f] + n.rects.reference[c] - s[c] - n.rects.popper[f], y = s[c] - n.rects.reference[c], b = xo(i), T = b ? c === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, S = p / 2 - y / 2, E = d[g], x = T - h[f] - d[v], w = T / 2 - h[f] / 2 + S, C = Vr(E, w, x), P = c;
    n.modifiersData[r] = (t = {}, t[P] = C, t.centerOffset = C - w, t);
  }
}
function hv(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || xd(t.elements.popper, o) && (t.elements.arrow = o));
}
const gv = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: mv,
  effect: hv,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function br(e) {
  return e.split("-")[1];
}
var yv = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function vv(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: yr(n * o) / o || 0,
    y: yr(r * o) / o || 0
  };
}
function fc(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, a = e.position, c = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, d = e.isFixed, h = s.x, g = h === void 0 ? 0 : h, v = s.y, p = v === void 0 ? 0 : v, y = typeof f == "function" ? f({
    x: g,
    y: p
  }) : {
    x: g,
    y: p
  };
  g = y.x, p = y.y;
  var b = s.hasOwnProperty("x"), T = s.hasOwnProperty("y"), S = St, E = Et, x = window;
  if (u) {
    var w = xo(n), C = "clientHeight", P = "clientWidth";
    if (w === At(n) && (w = Nn(n), bn(w).position !== "static" && a === "absolute" && (C = "scrollHeight", P = "scrollWidth")), w = w, o === Et || (o === St || o === Ht) && i === to) {
      E = Vt;
      var k = d && w === x && x.visualViewport ? x.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[C]
      );
      p -= k - r.height, p *= c ? 1 : -1;
    }
    if (o === St || (o === Et || o === Vt) && i === to) {
      S = Ht;
      var m = d && w === x && x.visualViewport ? x.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[P]
      );
      g -= m - r.width, g *= c ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: a
  }, u && yv), _ = f === !0 ? vv({
    x: g,
    y: p
  }, At(n)) : {
    x: g,
    y: p
  };
  if (g = _.x, p = _.y, c) {
    var B;
    return Object.assign({}, R, (B = {}, B[E] = T ? "0" : "", B[S] = b ? "0" : "", B.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + p + "px)" : "translate3d(" + g + "px, " + p + "px, 0)", B));
  }
  return Object.assign({}, R, (t = {}, t[E] = T ? p + "px" : "", t[S] = b ? g + "px" : "", t.transform = "", t));
}
function bv(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, a = n.roundOffsets, c = a === void 0 ? !0 : a, u = {
    placement: ln(t.placement),
    variation: br(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, fc(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, fc(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const xv = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: bv,
  data: {}
};
var Ao = {
  passive: !0
};
function Tv(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, a = s === void 0 ? !0 : s, c = At(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, Ao);
  }), a && c.addEventListener("resize", n.update, Ao), function() {
    i && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Ao);
    }), a && c.removeEventListener("resize", n.update, Ao);
  };
}
const wv = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Tv,
  data: {}
};
var Ev = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Jo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Ev[t];
  });
}
var Sv = {
  start: "end",
  end: "start"
};
function pc(e) {
  return e.replace(/start|end/g, function(t) {
    return Sv[t];
  });
}
function La(e) {
  var t = At(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function ja(e) {
  return vr(Nn(e)).left + La(e).scrollLeft;
}
function Cv(e, t) {
  var n = At(e), r = Nn(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, a = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = bd();
    (u || !u && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a + ja(e),
    y: c
  };
}
function Ov(e) {
  var t, n = Nn(e), r = La(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Wn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Wn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -r.scrollLeft + ja(e), c = -r.scrollTop;
  return bn(o || n).direction === "rtl" && (a += Wn(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
function za(e) {
  var t = bn(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Sd(e) {
  return ["html", "body", "#document"].indexOf(cn(e)) >= 0 ? e.ownerDocument.body : Ft(e) && za(e) ? e : Sd(zi(e));
}
function Hr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Sd(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = At(r), s = o ? [i].concat(i.visualViewport || [], za(r) ? r : []) : r, a = t.concat(s);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(Hr(zi(s)))
  );
}
function zs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Rv(e, t) {
  var n = vr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function mc(e, t, n) {
  return t === yd ? zs(Cv(e, n)) : Yn(t) ? Rv(t, n) : zs(Ov(Nn(e)));
}
function Pv(e) {
  var t = Hr(zi(e)), n = ["absolute", "fixed"].indexOf(bn(e).position) >= 0, r = n && Ft(e) ? xo(e) : e;
  return Yn(r) ? t.filter(function(o) {
    return Yn(o) && xd(o, r) && cn(o) !== "body";
  }) : [];
}
function kv(e, t, n, r) {
  var o = t === "clippingParents" ? Pv(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], a = i.reduce(function(c, u) {
    var f = mc(e, u, r);
    return c.top = Wn(f.top, c.top), c.right = ui(f.right, c.right), c.bottom = ui(f.bottom, c.bottom), c.left = Wn(f.left, c.left), c;
  }, mc(e, s, r));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Cd(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? ln(r) : null, i = r ? br(r) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, c;
  switch (o) {
    case Et:
      c = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Vt:
      c = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Ht:
      c = {
        x: t.x + t.width,
        y: a
      };
      break;
    case St:
      c = {
        x: t.x - n.width,
        y: a
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? Ba(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (i) {
      case gr:
        c[u] = c[u] - (t[f] / 2 - n[f] / 2);
        break;
      case to:
        c[u] = c[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return c;
}
function no(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, a = n.boundary, c = a === void 0 ? Ky : a, u = n.rootBoundary, f = u === void 0 ? yd : u, d = n.elementContext, h = d === void 0 ? $r : d, g = n.altBoundary, v = g === void 0 ? !1 : g, p = n.padding, y = p === void 0 ? 0 : p, b = wd(typeof y != "number" ? y : Ed(y, bo)), T = h === $r ? Xy : $r, S = e.rects.popper, E = e.elements[v ? T : h], x = kv(Yn(E) ? E : E.contextElement || Nn(e.elements.popper), c, f, s), w = vr(e.elements.reference), C = Cd({
    reference: w,
    element: S,
    placement: o
  }), P = zs(Object.assign({}, S, C)), k = h === $r ? P : w, m = {
    top: x.top - k.top + b.top,
    bottom: k.bottom - x.bottom + b.bottom,
    left: x.left - k.left + b.left,
    right: k.right - x.right + b.right
  }, R = e.modifiersData.offset;
  if (h === $r && R) {
    var _ = R[o];
    Object.keys(m).forEach(function(B) {
      var A = [Ht, Vt].indexOf(B) >= 0 ? 1 : -1, L = [Et, Vt].indexOf(B) >= 0 ? "y" : "x";
      m[B] += _[L] * A;
    });
  }
  return m;
}
function Iv(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, a = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? vd : c, f = br(r), d = f ? a ? uc : uc.filter(function(v) {
    return br(v) === f;
  }) : bo, h = d.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  h.length === 0 && (h = d);
  var g = h.reduce(function(v, p) {
    return v[p] = no(e, {
      placement: p,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[ln(p)], v;
  }, {});
  return Object.keys(g).sort(function(v, p) {
    return g[v] - g[p];
  });
}
function Mv(e) {
  if (ln(e) === Aa)
    return [];
  var t = Jo(e);
  return [pc(e), t, pc(t)];
}
function Nv(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !0 : s, c = n.fallbackPlacements, u = n.padding, f = n.boundary, d = n.rootBoundary, h = n.altBoundary, g = n.flipVariations, v = g === void 0 ? !0 : g, p = n.allowedAutoPlacements, y = t.options.placement, b = ln(y), T = b === y, S = c || (T || !v ? [Jo(y)] : Mv(y)), E = [y].concat(S).reduce(function(J, te) {
      return J.concat(ln(te) === Aa ? Iv(t, {
        placement: te,
        boundary: f,
        rootBoundary: d,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: p
      }) : te);
    }, []), x = t.rects.reference, w = t.rects.popper, C = /* @__PURE__ */ new Map(), P = !0, k = E[0], m = 0; m < E.length; m++) {
      var R = E[m], _ = ln(R), B = br(R) === gr, A = [Et, Vt].indexOf(_) >= 0, L = A ? "width" : "height", I = no(t, {
        placement: R,
        boundary: f,
        rootBoundary: d,
        altBoundary: h,
        padding: u
      }), U = A ? B ? Ht : St : B ? Vt : Et;
      x[L] > w[L] && (U = Jo(U));
      var Y = Jo(U), G = [];
      if (i && G.push(I[_] <= 0), a && G.push(I[U] <= 0, I[Y] <= 0), G.every(function(J) {
        return J;
      })) {
        k = R, P = !1;
        break;
      }
      C.set(R, G);
    }
    if (P)
      for (var N = v ? 3 : 1, j = function(te) {
        var K = E.find(function(Z) {
          var D = C.get(Z);
          if (D)
            return D.slice(0, te).every(function(X) {
              return X;
            });
        });
        if (K)
          return k = K, "break";
      }, V = N; V > 0; V--) {
        var W = j(V);
        if (W === "break") break;
      }
    t.placement !== k && (t.modifiersData[r]._skip = !0, t.placement = k, t.reset = !0);
  }
}
const $v = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Nv,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function hc(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function gc(e) {
  return [Et, Ht, Vt, St].some(function(t) {
    return e[t] >= 0;
  });
}
function Av(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = no(t, {
    elementContext: "reference"
  }), a = no(t, {
    altBoundary: !0
  }), c = hc(s, r), u = hc(a, o, i), f = gc(c), d = gc(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: f,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": d
  });
}
const Dv = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Av
};
function _v(e, t, n) {
  var r = ln(e), o = [St, Et].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], a = i[1];
  return s = s || 0, a = (a || 0) * o, [St, Ht].indexOf(r) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function Bv(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = vd.reduce(function(f, d) {
    return f[d] = _v(d, t.rects, i), f;
  }, {}), a = s[t.placement], c = a.x, u = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const Lv = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Bv
};
function jv(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Cd({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const zv = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: jv,
  data: {}
};
function Fv(e) {
  return e === "x" ? "y" : "x";
}
function Vv(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !1 : s, c = n.boundary, u = n.rootBoundary, f = n.altBoundary, d = n.padding, h = n.tether, g = h === void 0 ? !0 : h, v = n.tetherOffset, p = v === void 0 ? 0 : v, y = no(t, {
    boundary: c,
    rootBoundary: u,
    padding: d,
    altBoundary: f
  }), b = ln(t.placement), T = br(t.placement), S = !T, E = Ba(b), x = Fv(E), w = t.modifiersData.popperOffsets, C = t.rects.reference, P = t.rects.popper, k = typeof p == "function" ? p(Object.assign({}, t.rects, {
    placement: t.placement
  })) : p, m = typeof k == "number" ? {
    mainAxis: k,
    altAxis: k
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, k), R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, _ = {
    x: 0,
    y: 0
  };
  if (w) {
    if (i) {
      var B, A = E === "y" ? Et : St, L = E === "y" ? Vt : Ht, I = E === "y" ? "height" : "width", U = w[E], Y = U + y[A], G = U - y[L], N = g ? -P[I] / 2 : 0, j = T === gr ? C[I] : P[I], V = T === gr ? -P[I] : -C[I], W = t.elements.arrow, J = g && W ? _a(W) : {
        width: 0,
        height: 0
      }, te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Td(), K = te[A], Z = te[L], D = Vr(0, C[I], J[I]), X = S ? C[I] / 2 - N - D - K - m.mainAxis : j - D - K - m.mainAxis, H = S ? -C[I] / 2 + N + D + Z + m.mainAxis : V + D + Z + m.mainAxis, ee = t.elements.arrow && xo(t.elements.arrow), z = ee ? E === "y" ? ee.clientTop || 0 : ee.clientLeft || 0 : 0, se = (B = R == null ? void 0 : R[E]) != null ? B : 0, ge = U + X - se - z, Oe = U + H - se, Ge = Vr(g ? ui(Y, ge) : Y, U, g ? Wn(G, Oe) : G);
      w[E] = Ge, _[E] = Ge - U;
    }
    if (a) {
      var xe, we = E === "x" ? Et : St, de = E === "x" ? Vt : Ht, Me = w[x], ve = x === "y" ? "height" : "width", ne = Me + y[we], et = Me - y[de], at = [Et, St].indexOf(b) !== -1, lt = (xe = R == null ? void 0 : R[x]) != null ? xe : 0, yt = at ? ne : Me - C[ve] - P[ve] - lt + m.altAxis, xt = at ? Me + C[ve] + P[ve] - lt - m.altAxis : et, Rt = g && at ? fv(yt, Me, xt) : Vr(g ? yt : ne, Me, g ? xt : et);
      w[x] = Rt, _[x] = Rt - Me;
    }
    t.modifiersData[r] = _;
  }
}
const Hv = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Vv,
  requiresIfExists: ["offset"]
};
function Wv(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Uv(e) {
  return e === At(e) || !Ft(e) ? La(e) : Wv(e);
}
function Yv(e) {
  var t = e.getBoundingClientRect(), n = yr(t.width) / e.offsetWidth || 1, r = yr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function qv(e, t, n) {
  n === void 0 && (n = !1);
  var r = Ft(t), o = Ft(t) && Yv(t), i = Nn(t), s = vr(e, o, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((cn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  za(i)) && (a = Uv(t)), Ft(t) ? (c = vr(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = ja(i))), {
    x: s.left + a.scrollLeft - c.x,
    y: s.top + a.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Gv(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(a) {
      if (!n.has(a)) {
        var c = t.get(a);
        c && o(c);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || o(i);
  }), r;
}
function Kv(e) {
  var t = Gv(e);
  return sv.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Xv(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Jv(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var yc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function vc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Qv(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? yc : o;
  return function(a, c, u) {
    u === void 0 && (u = i);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, yc, i),
      modifiersData: {},
      elements: {
        reference: a,
        popper: c
      },
      attributes: {},
      styles: {}
    }, d = [], h = !1, g = {
      state: f,
      setOptions: function(b) {
        var T = typeof b == "function" ? b(f.options) : b;
        p(), f.options = Object.assign({}, i, f.options, T), f.scrollParents = {
          reference: Yn(a) ? Hr(a) : a.contextElement ? Hr(a.contextElement) : [],
          popper: Hr(c)
        };
        var S = Kv(Jv([].concat(r, f.options.modifiers)));
        return f.orderedModifiers = S.filter(function(E) {
          return E.enabled;
        }), v(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var b = f.elements, T = b.reference, S = b.popper;
          if (vc(T, S)) {
            f.rects = {
              reference: qv(T, xo(S), f.options.strategy === "fixed"),
              popper: _a(S)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(m) {
              return f.modifiersData[m.name] = Object.assign({}, m.data);
            });
            for (var E = 0; E < f.orderedModifiers.length; E++) {
              if (f.reset === !0) {
                f.reset = !1, E = -1;
                continue;
              }
              var x = f.orderedModifiers[E], w = x.fn, C = x.options, P = C === void 0 ? {} : C, k = x.name;
              typeof w == "function" && (f = w({
                state: f,
                options: P,
                name: k,
                instance: g
              }) || f);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Xv(function() {
        return new Promise(function(y) {
          g.forceUpdate(), y(f);
        });
      }),
      destroy: function() {
        p(), h = !0;
      }
    };
    if (!vc(a, c))
      return g;
    g.setOptions(u).then(function(y) {
      !h && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function v() {
      f.orderedModifiers.forEach(function(y) {
        var b = y.name, T = y.options, S = T === void 0 ? {} : T, E = y.effect;
        if (typeof E == "function") {
          var x = E({
            state: f,
            name: b,
            instance: g,
            options: S
          }), w = function() {
          };
          d.push(x || w);
        }
      });
    }
    function p() {
      d.forEach(function(y) {
        return y();
      }), d = [];
    }
    return g;
  };
}
var Zv = [wv, zv, xv, cv, Lv, $v, Hv, gv, Dv], eb = /* @__PURE__ */ Qv({
  defaultModifiers: Zv
});
function tb(e) {
  return typeof e == "function" ? e() : e;
}
const ro = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, a] = O.useState(null), c = Ot(/* @__PURE__ */ O.isValidElement(r) ? Gn(r) : null, n);
  if (Un(() => {
    i || a(tb(o) || document.body);
  }, [o, i]), Un(() => {
    if (s && !i)
      return Ps(n, s), () => {
        Ps(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ O.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ O.cloneElement(r, u);
    }
    return r;
  }
  return s && /* @__PURE__ */ Vf.createPortal(r, s);
});
process.env.NODE_ENV !== "production" && (ro.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: l.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: l.oneOfType([vn, l.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: l.bool
});
process.env.NODE_ENV !== "production" && (ro.propTypes = vo(ro.propTypes));
function nb(e) {
  return it("MuiPopper", e);
}
dt("MuiPopper", ["root"]);
function rb(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function di(e) {
  return typeof e == "function" ? e() : e;
}
function Fi(e) {
  return e.nodeType !== void 0;
}
function ob(e) {
  return !Fi(e);
}
const ib = (e) => {
  const {
    classes: t
  } = e;
  return gt({
    root: ["root"]
  }, nb, t);
}, sb = {}, ab = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: a,
    open: c,
    placement: u,
    popperOptions: f,
    popperRef: d,
    slotProps: h = {},
    slots: g = {},
    TransitionProps: v,
    // @ts-ignore internal logic
    ownerState: p,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...y
  } = t, b = O.useRef(null), T = Ot(b, n), S = O.useRef(null), E = Ot(S, d), x = O.useRef(E);
  Un(() => {
    x.current = E;
  }, [E]), O.useImperativeHandle(d, () => S.current, []);
  const w = rb(u, i), [C, P] = O.useState(w), [k, m] = O.useState(di(r));
  O.useEffect(() => {
    S.current && S.current.forceUpdate();
  }), O.useEffect(() => {
    r && m(di(r));
  }, [r]), Un(() => {
    if (!k || !c)
      return;
    const L = (Y) => {
      P(Y.placement);
    };
    if (process.env.NODE_ENV !== "production" && k && Fi(k) && k.nodeType === 1) {
      const Y = k.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && Y.top === 0 && Y.left === 0 && Y.right === 0 && Y.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let I = [{
      name: "preventOverflow",
      options: {
        altBoundary: s
      }
    }, {
      name: "flip",
      options: {
        altBoundary: s
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: Y
      }) => {
        L(Y);
      }
    }];
    a != null && (I = I.concat(a)), f && f.modifiers != null && (I = I.concat(f.modifiers));
    const U = eb(k, b.current, {
      placement: w,
      ...f,
      modifiers: I
    });
    return x.current(U), () => {
      U.destroy(), x.current(null);
    };
  }, [k, s, a, c, f, w]);
  const R = {
    placement: C
  };
  v !== null && (R.TransitionProps = v);
  const _ = ib(t), B = g.root ?? "div", A = Ih({
    elementType: B,
    externalSlotProps: h.root,
    externalForwardedProps: y,
    additionalProps: {
      role: "tooltip",
      ref: T
    },
    ownerState: t,
    className: _.root
  });
  return /* @__PURE__ */ M(B, {
    ...A,
    children: typeof o == "function" ? o(R) : o
  });
}), Od = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: a = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: f,
    placement: d = "bottom",
    popperOptions: h = sb,
    popperRef: g,
    style: v,
    transition: p = !1,
    slotProps: y = {},
    slots: b = {},
    ...T
  } = t, [S, E] = O.useState(!0), x = () => {
    E(!1);
  }, w = () => {
    E(!0);
  };
  if (!c && !f && (!p || S))
    return null;
  let C;
  if (i)
    C = i;
  else if (r) {
    const m = di(r);
    C = m && Fi(m) ? wt(m).body : wt(null).body;
  }
  const P = !f && c && (!p || S) ? "none" : void 0, k = p ? {
    in: f,
    onEnter: x,
    onExited: w
  } : void 0;
  return /* @__PURE__ */ M(ro, {
    disablePortal: a,
    container: C,
    children: /* @__PURE__ */ M(ab, {
      anchorEl: r,
      direction: s,
      disablePortal: a,
      modifiers: u,
      ref: n,
      open: p ? !S : f,
      placement: d,
      popperOptions: h,
      popperRef: g,
      slotProps: y,
      slots: b,
      ...T,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: P,
        ...v
      },
      TransitionProps: k,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (Od.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: In(l.oneOfType([vn, l.object, l.func]), (e) => {
    if (e.open) {
      const t = di(e.anchorEl);
      if (t && Fi(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || ob(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: l.oneOfType([l.node, l.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: l.oneOfType([vn, l.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: l.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: l.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: l.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: l.arrayOf(l.shape({
    data: l.object,
    effect: l.func,
    enabled: l.bool,
    fn: l.func,
    name: l.any,
    options: l.object,
    phase: l.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: l.arrayOf(l.string),
    requiresIfExists: l.arrayOf(l.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: l.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: l.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: l.shape({
    modifiers: l.array,
    onFirstUpdate: l.func,
    placement: l.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: l.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: _i,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: l.shape({
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: l.shape({
    root: l.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: l.bool
});
const lb = Te(Od, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Vi = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = Ta(), o = st({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    components: a,
    componentsProps: c,
    container: u,
    disablePortal: f,
    keepMounted: d,
    modifiers: h,
    open: g,
    placement: v,
    popperOptions: p,
    popperRef: y,
    transition: b,
    slots: T,
    slotProps: S,
    ...E
  } = o, x = (T == null ? void 0 : T.root) ?? (a == null ? void 0 : a.Root), w = {
    anchorEl: i,
    container: u,
    disablePortal: f,
    keepMounted: d,
    modifiers: h,
    open: g,
    placement: v,
    popperOptions: p,
    popperRef: y,
    transition: b,
    ...E
  };
  return /* @__PURE__ */ M(lb, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: {
      root: x
    },
    slotProps: S ?? c,
    ...w,
    ref: n
  });
});
process.env.NODE_ENV !== "production" && (Vi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: l.oneOfType([vn, l.object, l.func]),
  /**
   * Popper render function or node.
   */
  children: l.oneOfType([l.node, l.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: l.shape({
    Root: l.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: l.shape({
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: l.oneOfType([vn, l.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: l.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: l.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: l.arrayOf(l.shape({
    data: l.object,
    effect: l.func,
    enabled: l.bool,
    fn: l.func,
    name: l.any,
    options: l.object,
    phase: l.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: l.arrayOf(l.string),
    requiresIfExists: l.arrayOf(l.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: l.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: l.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: l.shape({
    modifiers: l.array,
    onFirstUpdate: l.func,
    placement: l.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: l.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: _i,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: l.shape({
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: l.shape({
    root: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: l.bool
});
function Ze(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: o,
    externalForwardedProps: i,
    internalForwardedProps: s,
    shouldForwardComponentProp: a = !1,
    ...c
  } = t, {
    component: u,
    slots: f = {
      [e]: void 0
    },
    slotProps: d = {
      [e]: void 0
    },
    ...h
  } = i, g = f[e] || r, v = Vu(d[e], o), {
    props: {
      component: p,
      ...y
    },
    internalRef: b
  } = Fu({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: v
  }), T = Ot(b, v == null ? void 0 : v.ref, t.ref), S = e === "root" ? p || u : p, E = ju(g, {
    ...e === "root" && !u && !f[e] && s,
    ...e !== "root" && !f[e] && s,
    ...y,
    ...S && !a && {
      as: S
    },
    ...S && a && {
      component: S
    },
    ref: T
  }, o);
  return [g, E];
}
function cb(e) {
  return it("MuiTooltip", e);
}
const Ye = dt("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function ub(e) {
  return Math.round(e * 1e5) / 1e5;
}
const db = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${he(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return gt(s, cb, t);
}, fb = Te(Vi, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(Dt(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableInteractive,
    style: {
      pointerEvents: "auto"
    }
  }, {
    props: ({
      open: t
    }) => !t,
    style: {
      pointerEvents: "none"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      [`&[data-popper-placement*="bottom"] .${Ye.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${Ye.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${Ye.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${Ye.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "0 0"
        }
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${Ye.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${Ye.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Ye.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Ye.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), pb = Te("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${he(n.placement.split("-")[0])}`]];
  }
})(Dt(({
  theme: e
}) => ({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : qt(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium,
  [`.${Ye.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${Ye.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${Ye.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${Ye.popper}[data-popper-placement*="bottom"] &`]: {
    transformOrigin: "center top",
    marginTop: "14px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      position: "relative",
      margin: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      padding: "8px 16px",
      fontSize: e.typography.pxToRem(14),
      lineHeight: `${ub(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${Ye.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${Ye.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${Ye.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${Ye.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${Ye.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${Ye.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${Ye.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${Ye.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Ye.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Ye.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), mb = Te("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (e, t) => t.arrow
})(Dt(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : qt(e.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
})));
let Do = !1;
const bc = new Bi();
let Ar = {
  x: 0,
  y: 0
};
function _o(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const Rd = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = st({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: o = !1,
    children: i,
    classes: s,
    components: a = {},
    componentsProps: c = {},
    describeChild: u = !1,
    disableFocusListener: f = !1,
    disableHoverListener: d = !1,
    disableInteractive: h = !1,
    disableTouchListener: g = !1,
    enterDelay: v = 100,
    enterNextDelay: p = 0,
    enterTouchDelay: y = 700,
    followCursor: b = !1,
    id: T,
    leaveDelay: S = 0,
    leaveTouchDelay: E = 1500,
    onClose: x,
    onOpen: w,
    open: C,
    placement: P = "bottom",
    PopperComponent: k,
    PopperProps: m = {},
    slotProps: R = {},
    slots: _ = {},
    title: B,
    TransitionComponent: A,
    TransitionProps: L,
    ...I
  } = r, U = /* @__PURE__ */ O.isValidElement(i) ? i : /* @__PURE__ */ M("span", {
    children: i
  }), Y = xn(), G = Ta(), [N, j] = O.useState(), [V, W] = O.useState(null), J = O.useRef(!1), te = h || b, K = lr(), Z = lr(), D = lr(), X = lr(), [H, ee] = Sh({
    controlled: C,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let z = H;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: oe
    } = O.useRef(C !== void 0);
    O.useEffect(() => {
      N && N.disabled && !oe && B !== "" && N.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [B, N, oe]);
  }
  const se = ya(T), ge = O.useRef(), Oe = hn(() => {
    ge.current !== void 0 && (document.body.style.WebkitUserSelect = ge.current, ge.current = void 0), X.clear();
  });
  O.useEffect(() => Oe, [Oe]);
  const Ge = (oe) => {
    bc.clear(), Do = !0, ee(!0), w && !z && w(oe);
  }, xe = hn(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (oe) => {
      bc.start(800 + S, () => {
        Do = !1;
      }), ee(!1), x && z && x(oe), K.start(Y.transitions.duration.shortest, () => {
        J.current = !1;
      });
    }
  ), we = (oe) => {
    J.current && oe.type !== "touchstart" || (N && N.removeAttribute("title"), Z.clear(), D.clear(), v || Do && p ? Z.start(Do ? p : v, () => {
      Ge(oe);
    }) : Ge(oe));
  }, de = (oe) => {
    Z.clear(), D.start(S, () => {
      xe(oe);
    });
  }, [, Me] = O.useState(!1), ve = (oe) => {
    si(oe.target) || (Me(!1), de(oe));
  }, ne = (oe) => {
    N || j(oe.currentTarget), si(oe.target) && (Me(!0), we(oe));
  }, et = (oe) => {
    J.current = !0;
    const ft = U.props;
    ft.onTouchStart && ft.onTouchStart(oe);
  }, at = (oe) => {
    et(oe), D.clear(), K.clear(), Oe(), ge.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", X.start(y, () => {
      document.body.style.WebkitUserSelect = ge.current, we(oe);
    });
  }, lt = (oe) => {
    U.props.onTouchEnd && U.props.onTouchEnd(oe), Oe(), D.start(E, () => {
      xe(oe);
    });
  };
  O.useEffect(() => {
    if (!z)
      return;
    function oe(ft) {
      ft.key === "Escape" && xe(ft);
    }
    return document.addEventListener("keydown", oe), () => {
      document.removeEventListener("keydown", oe);
    };
  }, [xe, z]);
  const yt = Ot(Gn(U), j, n);
  !B && B !== 0 && (z = !1);
  const xt = O.useRef(), Rt = (oe) => {
    const ft = U.props;
    ft.onMouseMove && ft.onMouseMove(oe), Ar = {
      x: oe.clientX,
      y: oe.clientY
    }, xt.current && xt.current.update();
  }, vt = {}, ke = typeof B == "string";
  u ? (vt.title = !z && ke && !d ? B : null, vt["aria-describedby"] = z ? se : null) : (vt["aria-label"] = ke ? B : null, vt["aria-labelledby"] = z && !ke ? se : null);
  const fe = {
    ...vt,
    ...I,
    ...U.props,
    className: ye(I.className, U.props.className),
    onTouchStart: et,
    ref: yt,
    ...b ? {
      onMouseMove: Rt
    } : {}
  };
  process.env.NODE_ENV !== "production" && (fe["data-mui-internal-clone-element"] = !0, O.useEffect(() => {
    N && !N.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [N]));
  const He = {};
  g || (fe.onTouchStart = at, fe.onTouchEnd = lt), d || (fe.onMouseOver = _o(we, fe.onMouseOver), fe.onMouseLeave = _o(de, fe.onMouseLeave), te || (He.onMouseOver = we, He.onMouseLeave = de)), f || (fe.onFocus = _o(ne, fe.onFocus), fe.onBlur = _o(ve, fe.onBlur), te || (He.onFocus = ne, He.onBlur = ve)), process.env.NODE_ENV !== "production" && U.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${U.props.title}\` or the Tooltip component.`].join(`
`));
  const Ke = {
    ...r,
    isRtl: G,
    arrow: o,
    disableInteractive: te,
    placement: P,
    PopperComponentProp: k,
    touch: J.current
  }, Be = typeof R.popper == "function" ? R.popper(Ke) : R.popper, Jn = O.useMemo(() => {
    var ft, Je;
    let oe = [{
      name: "arrow",
      enabled: !!V,
      options: {
        element: V,
        padding: 4
      }
    }];
    return (ft = m.popperOptions) != null && ft.modifiers && (oe = oe.concat(m.popperOptions.modifiers)), (Je = Be == null ? void 0 : Be.popperOptions) != null && Je.modifiers && (oe = oe.concat(Be.popperOptions.modifiers)), {
      ...m.popperOptions,
      ...Be == null ? void 0 : Be.popperOptions,
      modifiers: oe
    };
  }, [V, m.popperOptions, Be == null ? void 0 : Be.popperOptions]), Qn = db(Ke), Ki = typeof R.transition == "function" ? R.transition(Ke) : R.transition, Tn = {
    slots: {
      popper: a.Popper,
      transition: a.Transition ?? A,
      tooltip: a.Tooltip,
      arrow: a.Arrow,
      ..._
    },
    slotProps: {
      arrow: R.arrow ?? c.arrow,
      popper: {
        ...m,
        ...Be ?? c.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: R.tooltip ?? c.tooltip,
      transition: {
        ...L,
        ...Ki ?? c.transition
      }
    }
  }, [Jt, Xi] = Ze("popper", {
    elementType: fb,
    externalForwardedProps: Tn,
    ownerState: Ke,
    className: ye(Qn.popper, m == null ? void 0 : m.className)
  }), [Ji, So] = Ze("transition", {
    elementType: eo,
    externalForwardedProps: Tn,
    ownerState: Ke
  }), [Co, ue] = Ze("tooltip", {
    elementType: pb,
    className: Qn.tooltip,
    externalForwardedProps: Tn,
    ownerState: Ke
  }), [Xe, ot] = Ze("arrow", {
    elementType: mb,
    className: Qn.arrow,
    externalForwardedProps: Tn,
    ownerState: Ke,
    ref: W
  });
  return /* @__PURE__ */ je(O.Fragment, {
    children: [/* @__PURE__ */ O.cloneElement(U, fe), /* @__PURE__ */ M(Jt, {
      as: k ?? Vi,
      placement: P,
      anchorEl: b ? {
        getBoundingClientRect: () => ({
          top: Ar.y,
          left: Ar.x,
          right: Ar.x,
          bottom: Ar.y,
          width: 0,
          height: 0
        })
      } : N,
      popperRef: xt,
      open: N ? z : !1,
      id: se,
      transition: !0,
      ...He,
      ...Xi,
      popperOptions: Jn,
      children: ({
        TransitionProps: oe
      }) => /* @__PURE__ */ M(Ji, {
        timeout: Y.transitions.duration.shorter,
        ...oe,
        ...So,
        children: /* @__PURE__ */ je(Co, {
          ...ue,
          children: [B, o ? /* @__PURE__ */ M(Xe, {
            ...ot
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (Rd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: l.bool,
  /**
   * Tooltip reference element.
   */
  children: Mn.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: l.shape({
    Arrow: l.elementType,
    Popper: l.elementType,
    Tooltip: l.elementType,
    Transition: l.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: l.shape({
    arrow: l.object,
    popper: l.object,
    tooltip: l.object,
    transition: l.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: l.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: l.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: l.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: l.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: l.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: l.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: l.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: l.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: l.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: l.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: l.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: l.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: l.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: l.func,
  /**
   * If `true`, the component is shown.
   */
  open: l.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: l.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @deprecated use the `slots.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: l.elementType,
  /**
   * Props applied to the [`Popper`](https://mui.com/material-ui/api/popper/) element.
   * @deprecated use the `slotProps.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PopperProps: l.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: l.shape({
    arrow: l.oneOfType([l.func, l.object]),
    popper: l.oneOfType([l.func, l.object]),
    tooltip: l.oneOfType([l.func, l.object]),
    transition: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: l.shape({
    arrow: l.elementType,
    popper: l.elementType,
    tooltip: l.elementType,
    transition: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: l.node,
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: l.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: l.object
});
function hb(e) {
  return typeof e.main == "string";
}
function gb(e, t = []) {
  if (!hb(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Fa(e = []) {
  return ([, t]) => t && gb(t, e);
}
function yb(e) {
  return it("MuiTypography", e);
}
dt("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const vb = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, bb = jy(), xb = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: o,
    variant: i,
    classes: s
  } = e, a = {
    root: ["root", i, e.align !== "inherit" && `align${he(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
  };
  return gt(a, yb, s);
}, Tb = Te("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${he(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(Dt(({
  theme: e
}) => {
  var t;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(e.typography).filter(([n, r]) => n !== "inherit" && r && typeof r == "object").map(([n, r]) => ({
      props: {
        variant: n
      },
      style: r
    })), ...Object.entries(e.palette).filter(Fa()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${he(n)}`
      },
      style: {
        color: (e.vars || e).palette.text[n]
      }
    })), {
      props: ({
        ownerState: n
      }) => n.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), xc = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, Va = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const {
    color: r,
    ...o
  } = st({
    props: t,
    name: "MuiTypography"
  }), i = !vb[r], s = bb({
    ...o,
    ...i && {
      color: r
    }
  }), {
    align: a = "inherit",
    className: c,
    component: u,
    gutterBottom: f = !1,
    noWrap: d = !1,
    paragraph: h = !1,
    variant: g = "body1",
    variantMapping: v = xc,
    ...p
  } = s, y = {
    ...s,
    align: a,
    color: r,
    className: c,
    component: u,
    gutterBottom: f,
    noWrap: d,
    paragraph: h,
    variant: g,
    variantMapping: v
  }, b = u || (h ? "p" : v[g] || xc[g]) || "span", T = xb(y);
  return /* @__PURE__ */ M(Tb, {
    as: b,
    ref: n,
    className: ye(T.root, c),
    ...p,
    ownerState: y,
    style: {
      ...a !== "inherit" && {
        "--Typography-textAlign": a
      },
      ...p.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Va.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: l.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: l.oneOfType([l.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: l.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: l.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: l.bool,
  /**
   * @ignore
   */
  style: l.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: l.oneOfType([l.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), l.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: l.object
});
const un = rt(
  ({
    text: e,
    isLabel: t,
    isTitle: n = !1,
    titleLevel: r = "h6",
    ellipsis: o = !1,
    textColor: i = "inherit",
    sx: s,
    ...a
  }) => {
    const c = gn(
      () => /* @__PURE__ */ M(
        Va,
        {
          id: "VenomousUI-Text",
          component: "div",
          variant: n ? r : t ? "caption" : "body1",
          noWrap: o,
          sx: {
            fontWeight: n || t ? "bold" : "normal",
            color: i,
            ...s
          },
          ...a,
          children: e
        }
      ),
      [e, n, r, o, s, a]
    );
    return o ? /* @__PURE__ */ M(Rd, { arrow: !0, title: e, children: c }) : c;
  }
);
un.displayName = "Text";
const wb = rt(({ width: e = 100, text: t = "", sx: n }) => /* @__PURE__ */ je(Sr, { id: "VenomousUI-Blank", sx: { width: e, ...n }, children: [
  /* @__PURE__ */ M(mr, { width: e, icon: "solar:box-linear", color: "grey" }),
  /* @__PURE__ */ M(un, { text: t, isTitle: !0, titleLevel: "h6", textColor: "grey", textAlign: "center" })
] }));
wb.displayName = "Blank";
function Eb(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function Pd(e, t) {
  if (!e)
    return t;
  function n(s, a) {
    const c = {};
    return Object.keys(a).forEach((u) => {
      Eb(u, a[u]) && typeof s[u] == "function" && (c[u] = (...f) => {
        s[u](...f), a[u](...f);
      });
    }), c;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const a = typeof t == "function" ? t(s) : t, c = typeof e == "function" ? e({
        ...s,
        ...a
      }) : e, u = ye(s == null ? void 0 : s.className, a == null ? void 0 : a.className, c == null ? void 0 : c.className), f = n(c, a);
      return {
        ...a,
        ...c,
        ...f,
        ...!!u && {
          className: u
        },
        ...(a == null ? void 0 : a.style) && (c == null ? void 0 : c.style) && {
          style: {
            ...a.style,
            ...c.style
          }
        },
        ...(a == null ? void 0 : a.sx) && (c == null ? void 0 : c.sx) && {
          sx: [...Array.isArray(a.sx) ? a.sx : [a.sx], ...Array.isArray(c.sx) ? c.sx : [c.sx]]
        }
      };
    };
  const r = t, o = n(e, r), i = ye(r == null ? void 0 : r.className, e == null ? void 0 : e.className);
  return {
    ...t,
    ...e,
    ...o,
    ...!!i && {
      className: i
    },
    ...(r == null ? void 0 : r.style) && (e == null ? void 0 : e.style) && {
      style: {
        ...r.style,
        ...e.style
      }
    },
    ...(r == null ? void 0 : r.sx) && (e == null ? void 0 : e.sx) && {
      sx: [...Array.isArray(r.sx) ? r.sx : [r.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]]
    }
  };
}
class fi {
  constructor() {
    Pr(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new fi();
  }
  static use() {
    const t = _u(fi.create).current, [n, r] = O.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, O.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Cb(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.pulsate(...t);
    });
  }
}
function Sb() {
  return fi.use();
}
function Cb() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
function kd(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: a,
    onExited: c,
    timeout: u
  } = e, [f, d] = O.useState(!1), h = ye(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, v = ye(n.child, f && n.childLeaving, r && n.childPulsate);
  return !a && !f && d(!0), O.useEffect(() => {
    if (!a && c != null) {
      const p = setTimeout(c, u);
      return () => {
        clearTimeout(p);
      };
    }
  }, [c, a, u]), /* @__PURE__ */ M("span", {
    className: h,
    style: g,
    children: /* @__PURE__ */ M("span", {
      className: v
    })
  });
}
process.env.NODE_ENV !== "production" && (kd.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object.isRequired,
  className: l.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: l.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: l.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: l.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: l.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: l.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: l.number,
  /**
   * exit delay
   */
  timeout: l.number.isRequired
});
const Bt = dt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Fs = 550, Ob = 80, Rb = mo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Pb = mo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, kb = mo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Ib = Te("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Mb = Te(kd, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Bt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Rb};
    animation-duration: ${Fs}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Bt.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Bt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Bt.childLeaving} {
    opacity: 0;
    animation-name: ${Pb};
    animation-duration: ${Fs}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Bt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${kb};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Id = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = st({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s,
    ...a
  } = r, [c, u] = O.useState([]), f = O.useRef(0), d = O.useRef(null);
  O.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [c]);
  const h = O.useRef(!1), g = lr(), v = O.useRef(null), p = O.useRef(null), y = O.useCallback((E) => {
    const {
      pulsate: x,
      rippleX: w,
      rippleY: C,
      rippleSize: P,
      cb: k
    } = E;
    u((m) => [...m, /* @__PURE__ */ M(Mb, {
      classes: {
        ripple: ye(i.ripple, Bt.ripple),
        rippleVisible: ye(i.rippleVisible, Bt.rippleVisible),
        ripplePulsate: ye(i.ripplePulsate, Bt.ripplePulsate),
        child: ye(i.child, Bt.child),
        childLeaving: ye(i.childLeaving, Bt.childLeaving),
        childPulsate: ye(i.childPulsate, Bt.childPulsate)
      },
      timeout: Fs,
      pulsate: x,
      rippleX: w,
      rippleY: C,
      rippleSize: P
    }, f.current)]), f.current += 1, d.current = k;
  }, [i]), b = O.useCallback((E = {}, x = {}, w = () => {
  }) => {
    const {
      pulsate: C = !1,
      center: P = o || x.pulsate,
      fakeElement: k = !1
      // For test purposes
    } = x;
    if ((E == null ? void 0 : E.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (E == null ? void 0 : E.type) === "touchstart" && (h.current = !0);
    const m = k ? null : p.current, R = m ? m.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let _, B, A;
    if (P || E === void 0 || E.clientX === 0 && E.clientY === 0 || !E.clientX && !E.touches)
      _ = Math.round(R.width / 2), B = Math.round(R.height / 2);
    else {
      const {
        clientX: L,
        clientY: I
      } = E.touches && E.touches.length > 0 ? E.touches[0] : E;
      _ = Math.round(L - R.left), B = Math.round(I - R.top);
    }
    if (P)
      A = Math.sqrt((2 * R.width ** 2 + R.height ** 2) / 3), A % 2 === 0 && (A += 1);
    else {
      const L = Math.max(Math.abs((m ? m.clientWidth : 0) - _), _) * 2 + 2, I = Math.max(Math.abs((m ? m.clientHeight : 0) - B), B) * 2 + 2;
      A = Math.sqrt(L ** 2 + I ** 2);
    }
    E != null && E.touches ? v.current === null && (v.current = () => {
      y({
        pulsate: C,
        rippleX: _,
        rippleY: B,
        rippleSize: A,
        cb: w
      });
    }, g.start(Ob, () => {
      v.current && (v.current(), v.current = null);
    })) : y({
      pulsate: C,
      rippleX: _,
      rippleY: B,
      rippleSize: A,
      cb: w
    });
  }, [o, y, g]), T = O.useCallback(() => {
    b({}, {
      pulsate: !0
    });
  }, [b]), S = O.useCallback((E, x) => {
    if (g.clear(), (E == null ? void 0 : E.type) === "touchend" && v.current) {
      v.current(), v.current = null, g.start(0, () => {
        S(E, x);
      });
      return;
    }
    v.current = null, u((w) => w.length > 0 ? w.slice(1) : w), d.current = x;
  }, [g]);
  return O.useImperativeHandle(n, () => ({
    pulsate: T,
    start: b,
    stop: S
  }), [T, b, S]), /* @__PURE__ */ M(Ib, {
    className: ye(Bt.root, i.root, s),
    ref: p,
    ...a,
    children: /* @__PURE__ */ M(Na, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (Id.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: l.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string
});
function Nb(e) {
  return it("MuiButtonBase", e);
}
const $b = dt("MuiButtonBase", ["root", "disabled", "focusVisible"]), Ab = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, s = gt({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Nb, o);
  return n && r && (s.root += ` ${r}`), s;
}, Db = Te("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${$b.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Md = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = st({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: a,
    component: c = "button",
    disabled: u = !1,
    disableRipple: f = !1,
    disableTouchRipple: d = !1,
    focusRipple: h = !1,
    focusVisibleClassName: g,
    LinkComponent: v = "a",
    onBlur: p,
    onClick: y,
    onContextMenu: b,
    onDragLeave: T,
    onFocus: S,
    onFocusVisible: E,
    onKeyDown: x,
    onKeyUp: w,
    onMouseDown: C,
    onMouseLeave: P,
    onMouseUp: k,
    onTouchEnd: m,
    onTouchMove: R,
    onTouchStart: _,
    tabIndex: B = 0,
    TouchRippleProps: A,
    touchRippleRef: L,
    type: I,
    ...U
  } = r, Y = O.useRef(null), G = Sb(), N = Ot(G.ref, L), [j, V] = O.useState(!1);
  u && j && V(!1), O.useImperativeHandle(o, () => ({
    focusVisible: () => {
      V(!0), Y.current.focus();
    }
  }), []);
  const W = G.shouldMount && !f && !u;
  O.useEffect(() => {
    j && h && !f && G.pulsate();
  }, [f, h, j, G]);
  const J = mn(G, "start", C, d), te = mn(G, "stop", b, d), K = mn(G, "stop", T, d), Z = mn(G, "stop", k, d), D = mn(G, "stop", (ne) => {
    j && ne.preventDefault(), P && P(ne);
  }, d), X = mn(G, "start", _, d), H = mn(G, "stop", m, d), ee = mn(G, "stop", R, d), z = mn(G, "stop", (ne) => {
    si(ne.target) || V(!1), p && p(ne);
  }, !1), se = hn((ne) => {
    Y.current || (Y.current = ne.currentTarget), si(ne.target) && (V(!0), E && E(ne)), S && S(ne);
  }), ge = () => {
    const ne = Y.current;
    return c && c !== "button" && !(ne.tagName === "A" && ne.href);
  }, Oe = hn((ne) => {
    h && !ne.repeat && j && ne.key === " " && G.stop(ne, () => {
      G.start(ne);
    }), ne.target === ne.currentTarget && ge() && ne.key === " " && ne.preventDefault(), x && x(ne), ne.target === ne.currentTarget && ge() && ne.key === "Enter" && !u && (ne.preventDefault(), y && y(ne));
  }), Ge = hn((ne) => {
    h && ne.key === " " && j && !ne.defaultPrevented && G.stop(ne, () => {
      G.pulsate(ne);
    }), w && w(ne), y && ne.target === ne.currentTarget && ge() && ne.key === " " && !ne.defaultPrevented && y(ne);
  });
  let xe = c;
  xe === "button" && (U.href || U.to) && (xe = v);
  const we = {};
  xe === "button" ? (we.type = I === void 0 ? "button" : I, we.disabled = u) : (!U.href && !U.to && (we.role = "button"), u && (we["aria-disabled"] = u));
  const de = Ot(n, Y), Me = {
    ...r,
    centerRipple: i,
    component: c,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: d,
    focusRipple: h,
    tabIndex: B,
    focusVisible: j
  }, ve = Ab(Me);
  return /* @__PURE__ */ je(Db, {
    as: xe,
    className: ye(ve.root, a),
    ownerState: Me,
    onBlur: z,
    onClick: y,
    onContextMenu: te,
    onFocus: se,
    onKeyDown: Oe,
    onKeyUp: Ge,
    onMouseDown: J,
    onMouseLeave: D,
    onMouseUp: Z,
    onDragLeave: K,
    onTouchEnd: H,
    onTouchMove: ee,
    onTouchStart: X,
    ref: de,
    tabIndex: u ? -1 : B,
    type: I,
    ...we,
    ...U,
    children: [s, W ? /* @__PURE__ */ M(Id, {
      ref: N,
      center: i,
      ...A
    }) : null]
  });
});
function mn(e, t, n, r = !1) {
  return hn((o) => (n && n(o), r || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (Md.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: _i,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: l.bool,
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Au,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: l.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: l.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: l.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: l.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: l.string,
  /**
   * @ignore
   */
  href: l.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: l.elementType,
  /**
   * @ignore
   */
  onBlur: l.func,
  /**
   * @ignore
   */
  onClick: l.func,
  /**
   * @ignore
   */
  onContextMenu: l.func,
  /**
   * @ignore
   */
  onDragLeave: l.func,
  /**
   * @ignore
   */
  onFocus: l.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: l.func,
  /**
   * @ignore
   */
  onKeyDown: l.func,
  /**
   * @ignore
   */
  onKeyUp: l.func,
  /**
   * @ignore
   */
  onMouseDown: l.func,
  /**
   * @ignore
   */
  onMouseLeave: l.func,
  /**
   * @ignore
   */
  onMouseUp: l.func,
  /**
   * @ignore
   */
  onTouchEnd: l.func,
  /**
   * @ignore
   */
  onTouchMove: l.func,
  /**
   * @ignore
   */
  onTouchStart: l.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * @default 0
   */
  tabIndex: l.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: l.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: l.oneOfType([l.func, l.shape({
    current: l.shape({
      pulsate: l.func.isRequired,
      start: l.func.isRequired,
      stop: l.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: l.oneOfType([l.oneOf(["button", "reset", "submit"]), l.string])
});
function _b(e) {
  return it("MuiCircularProgress", e);
}
dt("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const wn = 44, Vs = mo`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Hs = mo`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, Bb = typeof Vs != "string" ? ua`
        animation: ${Vs} 1.4s linear infinite;
      ` : null, Lb = typeof Hs != "string" ? ua`
        animation: ${Hs} 1.4s ease-in-out infinite;
      ` : null, jb = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, i = {
    root: ["root", n, `color${he(r)}`],
    svg: ["svg"],
    circle: ["circle", `circle${he(n)}`, o && "circleDisableShrink"]
  };
  return gt(i, _b, t);
}, zb = Te("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${he(n.color)}`]];
  }
})(Dt(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: Bb || {
      animation: `${Vs} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Fa()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), Fb = Te("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), Vb = Te("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${he(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(Dt(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: Lb || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Hs} 1.4s ease-in-out infinite`
    }
  }]
}))), Nd = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = st({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: s = !1,
    size: a = 40,
    style: c,
    thickness: u = 3.6,
    value: f = 0,
    variant: d = "indeterminate",
    ...h
  } = r, g = {
    ...r,
    color: i,
    disableShrink: s,
    size: a,
    thickness: u,
    value: f,
    variant: d
  }, v = jb(g), p = {}, y = {}, b = {};
  if (d === "determinate") {
    const T = 2 * Math.PI * ((wn - u) / 2);
    p.strokeDasharray = T.toFixed(3), b["aria-valuenow"] = Math.round(f), p.strokeDashoffset = `${((100 - f) / 100 * T).toFixed(3)}px`, y.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ M(zb, {
    className: ye(v.root, o),
    style: {
      width: a,
      height: a,
      ...y,
      ...c
    },
    ownerState: g,
    ref: n,
    role: "progressbar",
    ...b,
    ...h,
    children: /* @__PURE__ */ M(Fb, {
      className: v.svg,
      ownerState: g,
      viewBox: `${wn / 2} ${wn / 2} ${wn} ${wn}`,
      children: /* @__PURE__ */ M(Vb, {
        className: v.circle,
        style: p,
        ownerState: g,
        cx: wn,
        cy: wn,
        r: (wn - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Nd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: l.oneOfType([l.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), l.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: In(l.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: l.oneOfType([l.number, l.string]),
  /**
   * @ignore
   */
  style: l.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: l.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: l.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: l.oneOf(["determinate", "indeterminate"])
});
function Hb(e) {
  return it("MuiButton", e);
}
const Bn = dt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), $d = /* @__PURE__ */ O.createContext({});
process.env.NODE_ENV !== "production" && ($d.displayName = "ButtonGroupContext");
const Ad = /* @__PURE__ */ O.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ad.displayName = "ButtonGroupButtonContext");
const Wb = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    loading: s,
    loadingPosition: a,
    classes: c
  } = e, u = {
    root: ["root", s && "loading", i, `${i}${he(t)}`, `size${he(o)}`, `${i}Size${he(o)}`, `color${he(t)}`, n && "disableElevation", r && "fullWidth", s && `loadingPosition${he(a)}`],
    startIcon: ["icon", "startIcon", `iconSize${he(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${he(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, f = gt(u, Hb, c);
  return {
    ...c,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...f
  };
}, Dd = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], Ub = Te(Md, {
  shouldForwardProp: (e) => Oa(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${he(n.color)}`], t[`size${he(n.size)}`], t[`${n.variant}Size${he(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(Dt(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Bn.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${Bn.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Bn.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${Bn.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(Fa()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[r].main,
        "--variant-outlinedColor": (e.vars || e).palette[r].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.5)` : qt(e.palette[r].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[r].contrastText,
        "--variant-containedBg": (e.vars || e).palette[r].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[r].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : qt(e.palette[r].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[r].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : qt(e.palette[r].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : n,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : qt(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : qt(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${Bn.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Bn.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${Bn.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), Yb = Te("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, n.loading && t.startIconLoadingStart, t[`iconSize${he(n.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...Dd]
})), qb = Te("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, n.loading && t.endIconLoadingEnd, t[`iconSize${he(n.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...Dd]
})), Gb = Te("span", {
  name: "MuiButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, t) => t.loadingIndicator
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), Tc = Te("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, t) => t.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Ha = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = O.useContext($d), o = O.useContext(Ad), i = Xr(r, t), s = st({
    props: i,
    name: "MuiButton"
  }), {
    children: a,
    color: c = "primary",
    component: u = "button",
    className: f,
    disabled: d = !1,
    disableElevation: h = !1,
    disableFocusRipple: g = !1,
    endIcon: v,
    focusVisibleClassName: p,
    fullWidth: y = !1,
    id: b,
    loading: T = null,
    loadingIndicator: S,
    loadingPosition: E = "center",
    size: x = "medium",
    startIcon: w,
    type: C,
    variant: P = "text",
    ...k
  } = s, m = ya(b), R = S ?? /* @__PURE__ */ M(Nd, {
    "aria-labelledby": m,
    color: "inherit",
    size: 16
  }), _ = {
    ...s,
    color: c,
    component: u,
    disabled: d,
    disableElevation: h,
    disableFocusRipple: g,
    fullWidth: y,
    loading: T,
    loadingIndicator: R,
    loadingPosition: E,
    size: x,
    type: C,
    variant: P
  }, B = Wb(_), A = (w || T && E === "start") && /* @__PURE__ */ M(Yb, {
    className: B.startIcon,
    ownerState: _,
    children: w || /* @__PURE__ */ M(Tc, {
      className: B.loadingIconPlaceholder,
      ownerState: _
    })
  }), L = (v || T && E === "end") && /* @__PURE__ */ M(qb, {
    className: B.endIcon,
    ownerState: _,
    children: v || /* @__PURE__ */ M(Tc, {
      className: B.loadingIconPlaceholder,
      ownerState: _
    })
  }), I = o || "", U = typeof T == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ M("span", {
      className: B.loadingWrapper,
      style: {
        display: "contents"
      },
      children: T && /* @__PURE__ */ M(Gb, {
        className: B.loadingIndicator,
        ownerState: _,
        children: R
      })
    })
  ) : null;
  return /* @__PURE__ */ je(Ub, {
    ownerState: _,
    className: ye(r.className, B.root, f, I),
    component: u,
    disabled: d || T,
    focusRipple: !g,
    focusVisibleClassName: ye(B.focusVisible, p),
    ref: n,
    type: C,
    id: T ? m : b,
    ...k,
    classes: B,
    children: [A, E !== "end" && U, a, E === "end" && U, L]
  });
});
process.env.NODE_ENV !== "production" && (Ha.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: l.oneOfType([l.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: l.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: l.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: l.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: l.bool,
  /**
   * Element placed after the children.
   */
  endIcon: l.node,
  /**
   * @ignore
   */
  focusVisibleClassName: l.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: l.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: l.string,
  /**
   * @ignore
   */
  id: l.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: l.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: l.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: l.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: l.oneOfType([l.oneOf(["small", "medium", "large"]), l.string]),
  /**
   * Element placed before the children.
   */
  startIcon: l.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * @ignore
   */
  type: l.oneOfType([l.oneOf(["button", "reset", "submit"]), l.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: l.oneOfType([l.oneOf(["contained", "outlined", "text"]), l.string])
});
const oo = rt(
  ({
    text: e,
    loading: t,
    disabled: n,
    isOutlined: r,
    isGhost: o,
    isCircle: i,
    icon: s,
    iconWidth: a,
    iconPosition: c = void 0,
    color: u = "primary",
    onClick: f,
    sx: d,
    ...h
  }) => {
    const { buttonColors: g } = Kb({ color: u, isGhost: o, isOutlined: r }), v = gn(() => s ? /* @__PURE__ */ M(mr, { icon: s, width: a }) : null, [s, a]);
    return /* @__PURE__ */ je(
      Ha,
      {
        id: "VenomousUI-Button",
        variant: o ? "text" : r ? "outlined" : "contained",
        loading: t,
        disabled: n,
        startIcon: c === "start" && v,
        endIcon: c === "end" && v,
        sx: {
          minWidth: "40px",
          minHeight: "40px",
          width: i ? "40px" : "unset",
          height: i ? "40px" : "unset",
          textTransform: "none",
          fontWeight: "bold",
          borderRadius: i ? "50%" : "8px",
          p: i ? "6px" : "auto",
          px: i ? "0" : "16px !important",
          cursor: t ? "wait !important" : n ? "not-allowed !important" : "pointer",
          pointerEvents: "auto !important",
          transition: "background-color 0s, background-image 0s",
          "& .MuiButton-startIcon": { svg: { color: "inherit" } },
          "& .MuiButton-endIcon": { svg: { color: "inherit" } },
          ...g,
          ...d
        },
        onClick: (p) => {
          p.stopPropagation(), f == null || f(p);
        },
        ...h,
        children: [
          !c && v,
          !i && e
        ]
      }
    );
  }
);
oo.displayName = "Button";
function Kb({ color: e = "primary", isGhost: t, isOutlined: n }) {
  const r = xn();
  return { buttonColors: gn(() => {
    const i = r.palette.mode === "dark", s = {
      auto: r.palette.text.primary,
      grey: r.palette.text.secondary,
      primary: r.palette.primary.main,
      success: r.palette.success.main,
      error: r.palette.error.main
    }, a = e in s ? s[e] : "inherit", c = i && ["auto", "grey"].includes(e) ? "black" : r.palette.primary.contrastText;
    return {
      backgroundColor: t || n ? "transparent" : a,
      color: t || n ? a : c,
      borderColor: n ? a : "transparent"
    };
  }, [r, e, t, n]) };
}
function Xb(e) {
  return it("MuiPaper", e);
}
dt("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Jb = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return gt(i, Xb, o);
}, Qb = Te("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(Dt(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), Cr = /* @__PURE__ */ O.forwardRef(function(t, n) {
  var g;
  const r = st({
    props: t,
    name: "MuiPaper"
  }), o = xn(), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: c = !1,
    variant: u = "elevation",
    ...f
  } = r, d = {
    ...r,
    component: s,
    elevation: a,
    square: c,
    variant: u
  }, h = Jb(d);
  return process.env.NODE_ENV !== "production" && o.shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ M(Qb, {
    as: s,
    ownerState: d,
    className: ye(h.root, i),
    ref: n,
    ...f,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[a],
        ...o.vars && {
          "--Paper-overlay": (g = o.vars.overlays) == null ? void 0 : g[a]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${qt("#fff", Ms(a))}, ${qt("#fff", Ms(a))})`
        }
      },
      ...f.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Cr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: In(va, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: l.bool,
  /**
   * @ignore
   */
  style: l.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: l.oneOfType([l.oneOf(["elevation", "outlined"]), l.string])
});
const xr = rt(({ isOutlined: e, children: t, sx: n, ...r }) => /* @__PURE__ */ M(
  Cr,
  {
    id: "VenomousUI-Paper",
    variant: e ? "outlined" : "elevation",
    elevation: e ? 0 : 3,
    square: !0,
    sx: {
      borderRadius: "8px",
      p: "16px",
      backgroundColor: ({ palette: o }) => o.background.paper,
      backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.119), rgba(255, 255, 255, 0.119));",
      ...n
    },
    ...r,
    children: t
  }
));
xr.displayName = "Paper";
const Zb = rt(
  ({ isOutlined: e, title: t, subtitle: n, clickable: r, onClick: o, disabled: i, children: s, sx: a }) => {
    const c = gn(() => s || /* @__PURE__ */ je(ea, { children: [
      t && /* @__PURE__ */ M(un, { text: t, isTitle: !0, titleLevel: "h6", lineHeight: "1.25rem", ellipsis: !0 }),
      n && /* @__PURE__ */ M(un, { text: n, isLabel: !0, ellipsis: !0 })
    ] }), [t, n, s]);
    return r ? /* @__PURE__ */ M(
      Ha,
      {
        id: "VenomousUI-Card",
        component: xr,
        isOutlined: e,
        disabled: i,
        onClick: i ? void 0 : o,
        sx: {
          display: "block",
          color: "inherit",
          textTransform: "none",
          borderRadius: "8px",
          cursor: i ? "not-allowed !important" : "pointer",
          pointerEvents: "auto !important",
          p: "16px",
          ...a
        },
        children: c
      }
    ) : /* @__PURE__ */ M(xr, { id: "VenomousUI-Card", isOutlined: e, sx: { ...a }, children: c });
  }
);
Zb.displayName = "Card";
const _d = eg({
  createStyledComponent: Te("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, t[`maxWidth${he(String(n.maxWidth))}`], n.fixed && t.fixed, n.disableGutters && t.disableGutters];
    }
  }),
  useThemeProps: (e) => st({
    props: e,
    name: "MuiContainer"
  })
});
process.env.NODE_ENV !== "production" && (_d.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: l.bool,
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */
  fixed: l.bool,
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth: l.oneOfType([l.oneOf(["xs", "sm", "md", "lg", "xl", !1]), l.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const e0 = rt(({ children: e, maxWidth: t = "lg", ...n }) => /* @__PURE__ */ M(
  _d,
  {
    id: "VenomousUI-Container",
    disableGutters: !0,
    maxWidth: t === "fullwidth" ? !1 : t,
    ...n,
    children: e
  }
));
e0.displayName = "Container";
function t0(e) {
  const t = wt(e);
  return t.body === e ? Rn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Wr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function wc(e) {
  return parseInt(Rn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function n0(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Ec(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = !i.includes(s), c = !n0(s);
    a && c && Wr(s, o);
  });
}
function ms(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function r0(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (t0(r)) {
      const s = Rh(Rn(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${wc(r) + s}px`;
      const a = wt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${wc(c) + s}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = wt(r).body;
    else {
      const s = r.parentElement, a = Rn(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && a.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    n.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: i,
      el: s,
      property: a
    }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function o0(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class i0 {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Wr(t.modalRef, !1);
    const o = o0(n);
    Ec(n, t.mount, t.modalRef, o, !0);
    const i = ms(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = ms(this.containers, (i) => i.modals.includes(t)), o = this.containers[r];
    o.restore || (o.restore = r0(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = ms(this.containers, (s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Wr(t.modalRef, n), Ec(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Wr(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const s0 = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function a0(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function l0(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function c0(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || l0(e));
}
function u0(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(s0)).forEach((r, o) => {
    const i = a0(r);
    i === -1 || !c0(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function d0() {
  return !0;
}
function pi(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = u0,
    isEnabled: s = d0,
    open: a
  } = e, c = O.useRef(!1), u = O.useRef(null), f = O.useRef(null), d = O.useRef(null), h = O.useRef(null), g = O.useRef(!1), v = O.useRef(null), p = Ot(Gn(t), v), y = O.useRef(null);
  O.useEffect(() => {
    !a || !v.current || (g.current = !n);
  }, [n, a]), O.useEffect(() => {
    if (!a || !v.current)
      return;
    const S = wt(v.current);
    return v.current.contains(S.activeElement) || (v.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), v.current.setAttribute("tabIndex", "-1")), g.current && v.current.focus()), () => {
      o || (d.current && d.current.focus && (c.current = !0, d.current.focus()), d.current = null);
    };
  }, [a]), O.useEffect(() => {
    if (!a || !v.current)
      return;
    const S = wt(v.current), E = (C) => {
      y.current = C, !(r || !s() || C.key !== "Tab") && S.activeElement === v.current && C.shiftKey && (c.current = !0, f.current && f.current.focus());
    }, x = () => {
      var k, m;
      const C = v.current;
      if (C === null)
        return;
      if (!S.hasFocus() || !s() || c.current) {
        c.current = !1;
        return;
      }
      if (C.contains(S.activeElement) || r && S.activeElement !== u.current && S.activeElement !== f.current)
        return;
      if (S.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!g.current)
        return;
      let P = [];
      if ((S.activeElement === u.current || S.activeElement === f.current) && (P = i(v.current)), P.length > 0) {
        const R = !!((k = y.current) != null && k.shiftKey && ((m = y.current) == null ? void 0 : m.key) === "Tab"), _ = P[0], B = P[P.length - 1];
        typeof _ != "string" && typeof B != "string" && (R ? B.focus() : _.focus());
      } else
        C.focus();
    };
    S.addEventListener("focusin", x), S.addEventListener("keydown", E, !0);
    const w = setInterval(() => {
      S.activeElement && S.activeElement.tagName === "BODY" && x();
    }, 50);
    return () => {
      clearInterval(w), S.removeEventListener("focusin", x), S.removeEventListener("keydown", E, !0);
    };
  }, [n, r, o, s, a, i]);
  const b = (S) => {
    d.current === null && (d.current = S.relatedTarget), g.current = !0, h.current = S.target;
    const E = t.props.onFocus;
    E && E(S);
  }, T = (S) => {
    d.current === null && (d.current = S.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ je(O.Fragment, {
    children: [/* @__PURE__ */ M("div", {
      tabIndex: a ? 0 : -1,
      onFocus: T,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ O.cloneElement(t, {
      ref: p,
      onFocus: b
    }), /* @__PURE__ */ M("div", {
      tabIndex: a ? 0 : -1,
      onFocus: T,
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (pi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Mn,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: l.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: l.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: l.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: l.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: l.func,
  /**
   * If `true`, focus is locked.
   */
  open: l.bool.isRequired
});
process.env.NODE_ENV !== "production" && (pi.propTypes = vo(pi.propTypes));
const f0 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Tr = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = xn(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: a,
    easing: c,
    in: u,
    onEnter: f,
    onEntered: d,
    onEntering: h,
    onExit: g,
    onExited: v,
    onExiting: p,
    style: y,
    timeout: b = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = Xt,
    ...S
  } = t, E = O.useRef(null), x = Ot(E, Gn(a), n), w = (A) => (L) => {
    if (A) {
      const I = E.current;
      L === void 0 ? A(I) : A(I, L);
    }
  }, C = w(h), P = w((A, L) => {
    $a(A);
    const I = hr({
      style: y,
      timeout: b,
      easing: c
    }, {
      mode: "enter"
    });
    A.style.webkitTransition = r.transitions.create("opacity", I), A.style.transition = r.transitions.create("opacity", I), f && f(A, L);
  }), k = w(d), m = w(p), R = w((A) => {
    const L = hr({
      style: y,
      timeout: b,
      easing: c
    }, {
      mode: "exit"
    });
    A.style.webkitTransition = r.transitions.create("opacity", L), A.style.transition = r.transitions.create("opacity", L), g && g(A);
  }), _ = w(v);
  return /* @__PURE__ */ M(T, {
    appear: s,
    in: u,
    nodeRef: E,
    onEnter: P,
    onEntered: k,
    onEntering: C,
    onExit: R,
    onExited: _,
    onExiting: m,
    addEndListener: (A) => {
      i && i(E.current, A);
    },
    timeout: b,
    ...S,
    children: (A, {
      ownerState: L,
      ...I
    }) => /* @__PURE__ */ O.cloneElement(a, {
      style: {
        opacity: 0,
        visibility: A === "exited" && !u ? "hidden" : void 0,
        ...f0[A],
        ...y,
        ...a.props.style
      },
      ref: x,
      ...I
    })
  });
});
process.env.NODE_ENV !== "production" && (Tr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: l.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: l.bool,
  /**
   * A single child content element.
   */
  children: Mn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: l.oneOfType([l.shape({
    enter: l.string,
    exit: l.string
  }), l.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: l.bool,
  /**
   * @ignore
   */
  onEnter: l.func,
  /**
   * @ignore
   */
  onEntered: l.func,
  /**
   * @ignore
   */
  onEntering: l.func,
  /**
   * @ignore
   */
  onExit: l.func,
  /**
   * @ignore
   */
  onExited: l.func,
  /**
   * @ignore
   */
  onExiting: l.func,
  /**
   * @ignore
   */
  style: l.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: l.oneOfType([l.number, l.shape({
    appear: l.number,
    enter: l.number,
    exit: l.number
  })])
});
function p0(e) {
  return it("MuiBackdrop", e);
}
dt("MuiBackdrop", ["root", "invisible"]);
const m0 = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return gt({
    root: ["root", n && "invisible"]
  }, p0, t);
}, h0 = Te("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), Wa = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = st({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: i,
    component: s = "div",
    invisible: a = !1,
    open: c,
    components: u = {},
    componentsProps: f = {},
    slotProps: d = {},
    slots: h = {},
    TransitionComponent: g,
    transitionDuration: v,
    ...p
  } = r, y = {
    ...r,
    component: s,
    invisible: a
  }, b = m0(y), T = {
    transition: g,
    root: u.Root,
    ...h
  }, S = {
    ...f,
    ...d
  }, E = {
    slots: T,
    slotProps: S
  }, [x, w] = Ze("root", {
    elementType: h0,
    externalForwardedProps: E,
    className: ye(b.root, i),
    ownerState: y
  }), [C, P] = Ze("transition", {
    elementType: Tr,
    externalForwardedProps: E,
    ownerState: y
  });
  return /* @__PURE__ */ M(C, {
    in: c,
    timeout: v,
    ...p,
    ...P,
    children: /* @__PURE__ */ M(x, {
      "aria-hidden": !0,
      ...w,
      classes: b,
      ref: n,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (Wa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: l.shape({
    Root: l.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: l.shape({
    root: l.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: l.bool,
  /**
   * If `true`, the component is shown.
   */
  open: l.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: l.shape({
    root: l.oneOfType([l.func, l.object]),
    transition: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: l.shape({
    root: l.elementType,
    transition: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: l.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: l.oneOfType([l.number, l.shape({
    appear: l.number,
    enter: l.number,
    exit: l.number
  })])
});
function g0(e) {
  return typeof e == "function" ? e() : e;
}
function y0(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Sc = () => {
}, Bo = new i0();
function v0(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    closeAfterTransition: o = !1,
    onTransitionEnter: i,
    onTransitionExited: s,
    children: a,
    onClose: c,
    open: u,
    rootRef: f
  } = e, d = O.useRef({}), h = O.useRef(null), g = O.useRef(null), v = Ot(g, f), [p, y] = O.useState(!u), b = y0(a);
  let T = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (T = !1);
  const S = () => wt(h.current), E = () => (d.current.modalRef = g.current, d.current.mount = h.current, d.current), x = () => {
    Bo.mount(E(), {
      disableScrollLock: r
    }), g.current && (g.current.scrollTop = 0);
  }, w = hn(() => {
    const L = g0(t) || S().body;
    Bo.add(E(), L), g.current && x();
  }), C = () => Bo.isTopModal(E()), P = hn((L) => {
    h.current = L, L && (u && C() ? x() : g.current && Wr(g.current, T));
  }), k = O.useCallback(() => {
    Bo.remove(E(), T);
  }, [T]);
  O.useEffect(() => () => {
    k();
  }, [k]), O.useEffect(() => {
    u ? w() : (!b || !o) && k();
  }, [u, k, b, o, w]);
  const m = (L) => (I) => {
    var U;
    (U = L.onKeyDown) == null || U.call(L, I), !(I.key !== "Escape" || I.which === 229 || // Wait until IME is settled.
    !C()) && (n || (I.stopPropagation(), c && c(I, "escapeKeyDown")));
  }, R = (L) => (I) => {
    var U;
    (U = L.onClick) == null || U.call(L, I), I.target === I.currentTarget && c && c(I, "backdropClick");
  };
  return {
    getRootProps: (L = {}) => {
      const I = zu(e);
      delete I.onTransitionEnter, delete I.onTransitionExited;
      const U = {
        ...I,
        ...L
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...U,
        onKeyDown: m(U),
        ref: v
      };
    },
    getBackdropProps: (L = {}) => {
      const I = L;
      return {
        "aria-hidden": !0,
        ...I,
        onClick: R(I),
        open: u
      };
    },
    getTransitionProps: () => {
      const L = () => {
        y(!1), i && i();
      }, I = () => {
        y(!0), s && s(), o && k();
      };
      return {
        onEnter: _l(L, (a == null ? void 0 : a.props.onEnter) ?? Sc),
        onExited: _l(I, (a == null ? void 0 : a.props.onExited) ?? Sc)
      };
    },
    rootRef: v,
    portalRef: P,
    isTopModal: C,
    exited: p,
    hasTransition: b
  };
}
function b0(e) {
  return it("MuiModal", e);
}
dt("MuiModal", ["root", "hidden", "backdrop"]);
const x0 = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return gt({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, b0, r);
}, T0 = Te("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(Dt(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), w0 = Te(Wa, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Hi = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = st({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = w0,
    BackdropProps: i,
    classes: s,
    className: a,
    closeAfterTransition: c = !1,
    children: u,
    container: f,
    component: d,
    components: h = {},
    componentsProps: g = {},
    disableAutoFocus: v = !1,
    disableEnforceFocus: p = !1,
    disableEscapeKeyDown: y = !1,
    disablePortal: b = !1,
    disableRestoreFocus: T = !1,
    disableScrollLock: S = !1,
    hideBackdrop: E = !1,
    keepMounted: x = !1,
    onClose: w,
    onTransitionEnter: C,
    onTransitionExited: P,
    open: k,
    slotProps: m = {},
    slots: R = {},
    // eslint-disable-next-line react/prop-types
    theme: _,
    ...B
  } = r, A = {
    ...r,
    closeAfterTransition: c,
    disableAutoFocus: v,
    disableEnforceFocus: p,
    disableEscapeKeyDown: y,
    disablePortal: b,
    disableRestoreFocus: T,
    disableScrollLock: S,
    hideBackdrop: E,
    keepMounted: x
  }, {
    getRootProps: L,
    getBackdropProps: I,
    getTransitionProps: U,
    portalRef: Y,
    isTopModal: G,
    exited: N,
    hasTransition: j
  } = v0({
    ...A,
    rootRef: n
  }), V = {
    ...A,
    exited: N
  }, W = x0(V), J = {};
  if (u.props.tabIndex === void 0 && (J.tabIndex = "-1"), j) {
    const {
      onEnter: H,
      onExited: ee
    } = U();
    J.onEnter = H, J.onExited = ee;
  }
  const te = {
    slots: {
      root: h.Root,
      backdrop: h.Backdrop,
      ...R
    },
    slotProps: {
      ...g,
      ...m
    }
  }, [K, Z] = Ze("root", {
    ref: n,
    elementType: T0,
    externalForwardedProps: {
      ...te,
      ...B,
      component: d
    },
    getSlotProps: L,
    ownerState: V,
    className: ye(a, W == null ? void 0 : W.root, !V.open && V.exited && (W == null ? void 0 : W.hidden))
  }), [D, X] = Ze("backdrop", {
    ref: i == null ? void 0 : i.ref,
    elementType: o,
    externalForwardedProps: te,
    shouldForwardComponentProp: !0,
    additionalProps: i,
    getSlotProps: (H) => I({
      ...H,
      onClick: (ee) => {
        H != null && H.onClick && H.onClick(ee);
      }
    }),
    className: ye(i == null ? void 0 : i.className, W == null ? void 0 : W.backdrop),
    ownerState: V
  });
  return !x && !k && (!j || N) ? null : /* @__PURE__ */ M(ro, {
    ref: Y,
    container: f,
    disablePortal: b,
    children: /* @__PURE__ */ je(K, {
      ...Z,
      children: [!E && o ? /* @__PURE__ */ M(D, {
        ...X
      }) : null, /* @__PURE__ */ M(pi, {
        disableEnforceFocus: p,
        disableAutoFocus: v,
        disableRestoreFocus: T,
        isEnabled: G,
        open: k,
        children: /* @__PURE__ */ O.cloneElement(u, J)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Hi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: l.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: l.object,
  /**
   * A single child content element.
   */
  children: Mn.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: l.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: l.shape({
    Backdrop: l.elementType,
    Root: l.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: l.shape({
    backdrop: l.oneOfType([l.func, l.object]),
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: l.oneOfType([vn, l.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: l.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: l.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: l.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: l.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: l.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: l.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: l.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: l.bool,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: l.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: l.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: l.func,
  /**
   * If `true`, the component is shown.
   */
  open: l.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: l.shape({
    backdrop: l.oneOfType([l.func, l.object]),
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: l.shape({
    backdrop: l.elementType,
    root: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
function E0(e, t, n) {
  const r = t.getBoundingClientRect(), o = n && n.getBoundingClientRect(), i = Rn(t);
  let s;
  if (t.fakeTransform)
    s = t.fakeTransform;
  else {
    const u = i.getComputedStyle(t);
    s = u.getPropertyValue("-webkit-transform") || u.getPropertyValue("transform");
  }
  let a = 0, c = 0;
  if (s && s !== "none" && typeof s == "string") {
    const u = s.split("(")[1].split(")")[0].split(",");
    a = parseInt(u[4], 10), c = parseInt(u[5], 10);
  }
  return e === "left" ? o ? `translateX(${o.right + a - r.left}px)` : `translateX(${i.innerWidth + a - r.left}px)` : e === "right" ? o ? `translateX(-${r.right - o.left - a}px)` : `translateX(-${r.left + r.width - a}px)` : e === "up" ? o ? `translateY(${o.bottom + c - r.top}px)` : `translateY(${i.innerHeight + c - r.top}px)` : o ? `translateY(-${r.top - o.top + r.height - c}px)` : `translateY(-${r.top + r.height - c}px)`;
}
function Bd(e) {
  return typeof e == "function" ? e() : e;
}
function Lo(e, t, n) {
  const r = Bd(n), o = E0(e, t, r);
  o && (t.style.webkitTransform = o, t.style.transform = o);
}
const Ld = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = xn(), o = {
    enter: r.transitions.easing.easeOut,
    exit: r.transitions.easing.sharp
  }, i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: c,
    container: u,
    direction: f = "down",
    easing: d = o,
    in: h,
    onEnter: g,
    onEntered: v,
    onEntering: p,
    onExit: y,
    onExited: b,
    onExiting: T,
    style: S,
    timeout: E = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = Xt,
    ...w
  } = t, C = O.useRef(null), P = Ot(Gn(c), C, n), k = (Y) => (G) => {
    Y && (G === void 0 ? Y(C.current) : Y(C.current, G));
  }, m = k((Y, G) => {
    Lo(f, Y, u), $a(Y), g && g(Y, G);
  }), R = k((Y, G) => {
    const N = hr({
      timeout: E,
      style: S,
      easing: d
    }, {
      mode: "enter"
    });
    Y.style.webkitTransition = r.transitions.create("-webkit-transform", {
      ...N
    }), Y.style.transition = r.transitions.create("transform", {
      ...N
    }), Y.style.webkitTransform = "none", Y.style.transform = "none", p && p(Y, G);
  }), _ = k(v), B = k(T), A = k((Y) => {
    const G = hr({
      timeout: E,
      style: S,
      easing: d
    }, {
      mode: "exit"
    });
    Y.style.webkitTransition = r.transitions.create("-webkit-transform", G), Y.style.transition = r.transitions.create("transform", G), Lo(f, Y, u), y && y(Y);
  }), L = k((Y) => {
    Y.style.webkitTransition = "", Y.style.transition = "", b && b(Y);
  }), I = (Y) => {
    s && s(C.current, Y);
  }, U = O.useCallback(() => {
    C.current && Lo(f, C.current, u);
  }, [f, u]);
  return O.useEffect(() => {
    if (h || f === "down" || f === "right")
      return;
    const Y = Du(() => {
      C.current && Lo(f, C.current, u);
    }), G = Rn(C.current);
    return G.addEventListener("resize", Y), () => {
      Y.clear(), G.removeEventListener("resize", Y);
    };
  }, [f, h, u]), O.useEffect(() => {
    h || U();
  }, [h, U]), /* @__PURE__ */ M(x, {
    nodeRef: C,
    onEnter: m,
    onEntered: _,
    onEntering: R,
    onExit: A,
    onExited: L,
    onExiting: B,
    addEndListener: I,
    appear: a,
    in: h,
    timeout: E,
    ...w,
    children: (Y, {
      ownerState: G,
      ...N
    }) => /* @__PURE__ */ O.cloneElement(c, {
      ref: P,
      style: {
        visibility: Y === "exited" && !h ? "hidden" : void 0,
        ...S,
        ...c.props.style
      },
      ...N
    })
  });
});
process.env.NODE_ENV !== "production" && (Ld.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: l.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: l.bool,
  /**
   * A single child content element.
   */
  children: Mn.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: In(l.oneOfType([vn, l.func]), (e) => {
    if (e.open) {
      const t = Bd(e.container);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `container` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `container` prop provided to the component is invalid.", "It should be an HTML element instance."].join(`
`));
    }
    return null;
  }),
  /**
   * Direction the child node will enter from.
   * @default 'down'
   */
  direction: l.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: l.oneOfType([l.shape({
    enter: l.string,
    exit: l.string
  }), l.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: l.bool,
  /**
   * @ignore
   */
  onEnter: l.func,
  /**
   * @ignore
   */
  onEntered: l.func,
  /**
   * @ignore
   */
  onEntering: l.func,
  /**
   * @ignore
   */
  onExit: l.func,
  /**
   * @ignore
   */
  onExited: l.func,
  /**
   * @ignore
   */
  onExiting: l.func,
  /**
   * @ignore
   */
  style: l.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: l.oneOfType([l.number, l.shape({
    appear: l.number,
    enter: l.number,
    exit: l.number
  })])
});
function S0(e) {
  return it("MuiDrawer", e);
}
dt("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const jd = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, (n.variant === "permanent" || n.variant === "persistent") && t.docked, t.modal];
}, C0 = (e) => {
  const {
    classes: t,
    anchor: n,
    variant: r
  } = e, o = {
    root: ["root", `anchor${he(n)}`],
    docked: [(r === "permanent" || r === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${he(n)}`, r !== "temporary" && `paperAnchorDocked${he(n)}`]
  };
  return gt(o, S0, t);
}, O0 = Te(Hi, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: jd
})(Dt(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
}))), R0 = Te("div", {
  shouldForwardProp: Oa,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: jd
})({
  flex: "0 0 auto"
}), P0 = Te(Cr, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperAnchor${he(n.anchor)}`], n.variant !== "temporary" && t[`paperAnchorDocked${he(n.anchor)}`]];
  }
})(Dt(({
  theme: e
}) => ({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (e.vars || e).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0,
  variants: [{
    props: {
      anchor: "left"
    },
    style: {
      left: 0
    }
  }, {
    props: {
      anchor: "top"
    },
    style: {
      top: 0,
      left: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: {
      anchor: "right"
    },
    style: {
      right: 0
    }
  }, {
    props: {
      anchor: "bottom"
    },
    style: {
      top: "auto",
      left: 0,
      bottom: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "left" && t.variant !== "temporary",
    style: {
      borderRight: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "top" && t.variant !== "temporary",
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "right" && t.variant !== "temporary",
    style: {
      borderLeft: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "bottom" && t.variant !== "temporary",
    style: {
      borderTop: `1px solid ${(e.vars || e).palette.divider}`
    }
  }]
}))), zd = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function k0(e) {
  return ["left", "right"].includes(e);
}
function I0({
  direction: e
}, t) {
  return e === "rtl" && k0(t) ? zd[t] : t;
}
const Fd = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = st({
    props: t,
    name: "MuiDrawer"
  }), o = xn(), i = Ta(), s = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    anchor: a = "left",
    BackdropProps: c,
    children: u,
    className: f,
    elevation: d = 16,
    hideBackdrop: h = !1,
    ModalProps: {
      BackdropProps: g,
      ...v
    } = {},
    onClose: p,
    open: y = !1,
    PaperProps: b = {},
    SlideProps: T,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: S,
    transitionDuration: E = s,
    variant: x = "temporary",
    slots: w = {},
    slotProps: C = {},
    ...P
  } = r, k = O.useRef(!1);
  O.useEffect(() => {
    k.current = !0;
  }, []);
  const m = I0({
    direction: i ? "rtl" : "ltr"
  }, a), _ = {
    ...r,
    anchor: a,
    elevation: d,
    open: y,
    variant: x,
    ...P
  }, B = C0(_), A = {
    slots: {
      transition: S,
      ...w
    },
    slotProps: {
      paper: b,
      transition: T,
      ...C,
      backdrop: Pd(C.backdrop || {
        ...c,
        ...g
      }, {
        transitionDuration: E
      })
    }
  }, [L, I] = Ze("root", {
    ref: n,
    elementType: O0,
    className: ye(B.root, B.modal, f),
    shouldForwardComponentProp: !0,
    ownerState: _,
    externalForwardedProps: {
      ...A,
      ...P,
      ...v
    },
    additionalProps: {
      open: y,
      onClose: p,
      hideBackdrop: h,
      slots: {
        backdrop: A.slots.backdrop
      },
      slotProps: {
        backdrop: A.slotProps.backdrop
      }
    }
  }), [U, Y] = Ze("paper", {
    elementType: P0,
    shouldForwardComponentProp: !0,
    className: ye(B.paper, b.className),
    ownerState: _,
    externalForwardedProps: A,
    additionalProps: {
      elevation: x === "temporary" ? d : 0,
      square: !0
    }
  }), [G, N] = Ze("docked", {
    elementType: R0,
    ref: n,
    className: ye(B.root, B.docked, f),
    ownerState: _,
    externalForwardedProps: A,
    additionalProps: P
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [j, V] = Ze("transition", {
    elementType: Ld,
    ownerState: _,
    externalForwardedProps: A,
    additionalProps: {
      in: y,
      direction: zd[m],
      timeout: E,
      appear: k.current
    }
  }), W = /* @__PURE__ */ M(U, {
    ...Y,
    children: u
  });
  if (x === "permanent")
    return /* @__PURE__ */ M(G, {
      ...N,
      children: W
    });
  const J = /* @__PURE__ */ M(j, {
    ...V,
    children: W
  });
  return x === "persistent" ? /* @__PURE__ */ M(G, {
    ...N,
    children: J
  }) : /* @__PURE__ */ M(L, {
    ...I,
    children: J
  });
});
process.env.NODE_ENV !== "production" && (Fd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor: l.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  BackdropProps: l.object,
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The elevation of the drawer.
   * @default 16
   */
  elevation: va,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: l.bool,
  /**
   * Props applied to the [`Modal`](https://mui.com/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: l.object,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: l.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: l.bool,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @deprecated use the `slotProps.paper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PaperProps: l.object,
  /**
   * Props applied to the [`Slide`](https://mui.com/material-ui/api/slide/) element.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SlideProps: l.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: l.shape({
    backdrop: l.oneOfType([l.func, l.object]),
    docked: l.oneOfType([l.func, l.object]),
    paper: l.oneOfType([l.func, l.object]),
    root: l.oneOfType([l.func, l.object]),
    transition: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: l.shape({
    backdrop: l.elementType,
    docked: l.elementType,
    paper: l.elementType,
    root: l.elementType,
    transition: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: l.oneOfType([l.number, l.shape({
    appear: l.number,
    enter: l.number,
    exit: l.number
  })]),
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant: l.oneOf(["permanent", "persistent", "temporary"])
});
const M0 = rt(
  ({ children: e, isOpen: t, closeDrawer: n, width: r, position: o = "right" }) => /* @__PURE__ */ M(
    Fd,
    {
      id: "VenomousUI-Drawer",
      open: t,
      onClose: n,
      anchor: o,
      slotProps: {
        paper: {
          sx: {
            width: r,
            py: "8px",
            px: "16px",
            borderRadius: "8px",
            backgroundColor: ({ palette: i }) => i.background.paper,
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.119), rgba(255, 255, 255, 0.119));",
            ...N0(o)
          }
        }
      },
      children: e
    }
  )
);
M0.displayName = "Drawer";
function N0(e) {
  switch (e) {
    case "right":
      return { borderTopRightRadius: 0, borderBottomRightRadius: 0 };
    case "top":
      return { borderTopLeftRadius: 0, borderTopRightRadius: 0 };
    case "bottom":
      return { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 };
    case "left":
    default:
      return { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 };
  }
}
function _w() {
  const [e, t] = Vn(!1), n = sn(() => {
    t(!0);
  }, []), r = sn(() => {
    t(!1);
  }, []), o = sn(() => {
    t((i) => !i);
  }, []);
  return {
    isOpen: e,
    setIsOpen: t,
    openDrawer: n,
    closeDrawer: r,
    toggleDrawer: o
  };
}
const qn = rt(
  ({ children: e, row: t, alignItems: n, justifyContent: r, gap: o = 1, sx: i, ...s }) => /* @__PURE__ */ M(
    Sr,
    {
      id: "VenomousUI-Flex",
      component: "div",
      sx: {
        display: "flex",
        flexDirection: t ? "row" : "column",
        alignItems: n || (t ? "center" : "start"),
        justifyContent: r || "start",
        ...Array.isArray(o) ? { rowGap: o[0], columnGap: o[1] } : { gap: o },
        ...i
      },
      ...s,
      children: e
    }
  )
);
qn.displayName = "Flex";
const $0 = rt(({ height: e = 50, title: t, closeDrawer: n }) => /* @__PURE__ */ je(
  qn,
  {
    id: "VenomousUI-DrawerHeader",
    row: !0,
    justifyContent: "space-between",
    height: e,
    mb: "8px",
    mt: "-8px",
    children: [
      /* @__PURE__ */ M(
        oo,
        {
          isCircle: !0,
          isGhost: !0,
          icon: "solar:close-circle-line-duotone",
          iconWidth: 24,
          color: "auto",
          onClick: n,
          sx: { width: 24, mr: "8px", ml: "-8px" }
        }
      ),
      /* @__PURE__ */ M(un, { text: t, isTitle: !0, ellipsis: !0 })
    ]
  }
));
$0.displayName = "DrawerHeader";
const Wi = 0, $n = 1, Or = 2, Vd = 4;
function Cc(e) {
  return () => e;
}
function A0(e) {
  e();
}
function Hd(e, t) {
  return (n) => e(t(n));
}
function Oc(e, t) {
  return () => e(t);
}
function Wd(e, t) {
  return (n) => e(t, n);
}
function Ua(e) {
  return e !== void 0;
}
function D0(...e) {
  return () => {
    e.map(A0);
  };
}
function Rr() {
}
function Ui(e, t) {
  return t(e), e;
}
function _0(e, t) {
  return t(e);
}
function ze(...e) {
  return e;
}
function Ie(e, t) {
  return e($n, t);
}
function pe(e, t) {
  e(Wi, t);
}
function Ya(e) {
  e(Or);
}
function mt(e) {
  return e(Vd);
}
function ie(e, t) {
  return Ie(e, Wd(t, Wi));
}
function dn(e, t) {
  const n = e($n, (r) => {
    n(), t(r);
  });
  return n;
}
function Rc(e) {
  let t, n;
  return (r) => (o) => {
    t = o, n && clearTimeout(n), n = setTimeout(() => {
      r(t);
    }, e);
  };
}
function Ud(e, t) {
  return e === t;
}
function Le(e = Ud) {
  let t;
  return (n) => (r) => {
    e(t, r) || (t = r, n(r));
  };
}
function ae(e) {
  return (t) => (n) => {
    e(n) && t(n);
  };
}
function re(e) {
  return (t) => Hd(t, e);
}
function nn(e) {
  return (t) => () => {
    t(e);
  };
}
function q(e, ...t) {
  const n = B0(...t);
  return (r, o) => {
    switch (r) {
      case Or:
        Ya(e);
        return;
      case $n:
        return Ie(e, n(o));
    }
  };
}
function on(e, t) {
  return (n) => (r) => {
    n(t = e(t, r));
  };
}
function wr(e) {
  return (t) => (n) => {
    e > 0 ? e-- : t(n);
  };
}
function En(e) {
  let t = null, n;
  return (r) => (o) => {
    t = o, !n && (n = setTimeout(() => {
      n = void 0, r(t);
    }, e));
  };
}
function me(...e) {
  const t = new Array(e.length);
  let n = 0, r = null;
  const o = Math.pow(2, e.length) - 1;
  return e.forEach((i, s) => {
    const a = Math.pow(2, s);
    Ie(i, (c) => {
      const u = n;
      n = n | a, t[s] = c, u !== o && n === o && r && (r(), r = null);
    });
  }), (i) => (s) => {
    const a = () => {
      i([s].concat(t));
    };
    n === o ? a() : r = a;
  };
}
function B0(...e) {
  return (t) => e.reduceRight(_0, t);
}
function L0(e) {
  let t, n;
  const r = () => t == null ? void 0 : t();
  return function(o, i) {
    switch (o) {
      case $n:
        return i ? n === i ? void 0 : (r(), n = i, t = Ie(e, i), t) : (r(), Rr);
      case Or:
        r(), n = null;
        return;
    }
  };
}
function Q(e) {
  let t = e;
  const n = be();
  return (r, o) => {
    switch (r) {
      case Wi:
        t = o;
        break;
      case $n: {
        o(t);
        break;
      }
      case Vd:
        return t;
    }
    return n(r, o);
  };
}
function ht(e, t) {
  return Ui(Q(t), (n) => ie(e, n));
}
function be() {
  const e = [];
  return (t, n) => {
    switch (t) {
      case Wi:
        e.slice().forEach((r) => {
          r(n);
        });
        return;
      case Or:
        e.splice(0, e.length);
        return;
      case $n:
        return e.push(n), () => {
          const r = e.indexOf(n);
          r > -1 && e.splice(r, 1);
        };
    }
  };
}
function Nt(e) {
  return Ui(be(), (t) => ie(e, t));
}
function Ce(e, t = [], { singleton: n } = { singleton: !0 }) {
  return {
    constructor: e,
    dependencies: t,
    id: j0(),
    singleton: n
  };
}
const j0 = () => Symbol();
function z0(e) {
  const t = /* @__PURE__ */ new Map(), n = ({ constructor: r, dependencies: o, id: i, singleton: s }) => {
    if (s && t.has(i))
      return t.get(i);
    const a = r(o.map((c) => n(c)));
    return s && t.set(i, a), a;
  };
  return n(e);
}
function nt(...e) {
  const t = be(), n = new Array(e.length);
  let r = 0;
  const o = Math.pow(2, e.length) - 1;
  return e.forEach((i, s) => {
    const a = Math.pow(2, s);
    Ie(i, (c) => {
      n[s] = c, r = r | a, r === o && pe(t, n);
    });
  }), function(i, s) {
    switch (i) {
      case Or: {
        Ya(t);
        return;
      }
      case $n:
        return r === o && s(n), Ie(t, s);
    }
  };
}
function le(e, t = Ud) {
  return q(e, Le(t));
}
function Pc(...e) {
  return function(t, n) {
    switch (t) {
      case Or:
        return;
      case $n:
        return D0(...e.map((r) => Ie(r, n)));
    }
  };
}
var $t = /* @__PURE__ */ ((e) => (e[e.DEBUG = 0] = "DEBUG", e[e.INFO = 1] = "INFO", e[e.WARN = 2] = "WARN", e[e.ERROR = 3] = "ERROR", e))($t || {});
const F0 = {
  0: "debug",
  3: "error",
  1: "log",
  2: "warn"
}, V0 = () => typeof globalThis > "u" ? window : globalThis, An = Ce(
  () => {
    const e = Q(
      3
      /* ERROR */
    );
    return {
      log: Q((t, n, r = 1) => {
        var o;
        const i = (o = V0().VIRTUOSO_LOG_LEVEL) != null ? o : mt(e);
        r >= i && console[F0[r]](
          "%creact-virtuoso: %c%s %o",
          "color: #0253b3; font-weight: bold",
          "color: initial",
          t,
          n
        );
      }),
      logLevel: e
    };
  },
  [],
  { singleton: !0 }
);
function Kn(e, t, n) {
  return qa(e, t, n).callbackRef;
}
function qa(e, t, n) {
  const r = $.useRef(null);
  let o = (i) => {
  };
  if (typeof ResizeObserver < "u") {
    const i = $.useMemo(() => new ResizeObserver((s) => {
      const a = () => {
        const c = s[0].target;
        c.offsetParent !== null && e(c);
      };
      n ? a() : requestAnimationFrame(a);
    }), [e]);
    o = (s) => {
      s && t ? (i.observe(s), r.current = s) : (r.current && i.unobserve(r.current), r.current = null);
    };
  }
  return { callbackRef: o, ref: r };
}
function H0(e, t, n, r, o, i, s, a, c) {
  const u = $.useCallback(
    (f) => {
      const d = W0(f.children, t, a ? "offsetWidth" : "offsetHeight", o);
      let h = f.parentElement;
      for (; !h.dataset.virtuosoScroller; )
        h = h.parentElement;
      const g = h.lastElementChild.dataset.viewportType === "window";
      let v;
      g && (v = h.ownerDocument.defaultView);
      const p = s ? a ? s.scrollLeft : s.scrollTop : g ? a ? v.scrollX || v.document.documentElement.scrollLeft : v.scrollY || v.document.documentElement.scrollTop : a ? h.scrollLeft : h.scrollTop, y = s ? a ? s.scrollWidth : s.scrollHeight : g ? a ? v.document.documentElement.scrollWidth : v.document.documentElement.scrollHeight : a ? h.scrollWidth : h.scrollHeight, b = s ? a ? s.offsetWidth : s.offsetHeight : g ? a ? v.innerWidth : v.innerHeight : a ? h.offsetWidth : h.offsetHeight;
      r({
        scrollHeight: y,
        scrollTop: Math.max(p, 0),
        viewportHeight: b
      }), i == null || i(
        a ? kc("column-gap", getComputedStyle(f).columnGap, o) : kc("row-gap", getComputedStyle(f).rowGap, o)
      ), d !== null && e(d);
    },
    [e, t, o, i, s, r]
  );
  return qa(u, n, c);
}
function W0(e, t, n, r) {
  const o = e.length;
  if (o === 0)
    return null;
  const i = [];
  for (let s = 0; s < o; s++) {
    const a = e.item(s);
    if (a.dataset.index === void 0)
      continue;
    const c = parseInt(a.dataset.index), u = parseFloat(a.dataset.knownSize), f = t(a, n);
    if (f === 0 && r("Zero-sized element, this should not happen", { child: a }, $t.ERROR), f === u)
      continue;
    const d = i[i.length - 1];
    i.length === 0 || d.size !== f || d.endIndex !== c - 1 ? i.push({ endIndex: c, size: f, startIndex: c }) : i[i.length - 1].endIndex++;
  }
  return i;
}
function kc(e, t, n) {
  return t !== "normal" && !(t != null && t.endsWith("px")) && n(`${e} was not resolved to pixel value correctly`, t, $t.WARN), t === "normal" ? 0 : parseInt(t ?? "0", 10);
}
function Yd(e, t, n) {
  const r = $.useRef(null), o = $.useCallback(
    (c) => {
      if (!(c != null && c.offsetParent))
        return;
      const u = c.getBoundingClientRect(), f = u.width;
      let d, h;
      if (t) {
        const g = t.getBoundingClientRect(), v = u.top - g.top;
        h = g.height - Math.max(0, v), d = v + t.scrollTop;
      } else {
        const g = s.current.ownerDocument.defaultView;
        h = g.innerHeight - Math.max(0, u.top), d = u.top + g.scrollY;
      }
      r.current = {
        offsetTop: d,
        visibleHeight: h,
        visibleWidth: f
      }, e(r.current);
    },
    [e, t]
  ), { callbackRef: i, ref: s } = qa(o, !0, n), a = $.useCallback(() => {
    o(s.current);
  }, [o, s]);
  return $.useEffect(() => {
    var c;
    if (t) {
      t.addEventListener("scroll", a);
      const u = new ResizeObserver(() => {
        requestAnimationFrame(a);
      });
      return u.observe(t), () => {
        t.removeEventListener("scroll", a), u.unobserve(t);
      };
    } else {
      const u = (c = s.current) == null ? void 0 : c.ownerDocument.defaultView;
      return u == null || u.addEventListener("scroll", a), u == null || u.addEventListener("resize", a), () => {
        u == null || u.removeEventListener("scroll", a), u == null || u.removeEventListener("resize", a);
      };
    }
  }, [a, t]), i;
}
const bt = Ce(
  () => {
    const e = be(), t = be(), n = Q(0), r = be(), o = Q(0), i = be(), s = be(), a = Q(0), c = Q(0), u = Q(0), f = Q(0), d = be(), h = be(), g = Q(!1), v = Q(!1), p = Q(!1);
    return ie(
      q(
        e,
        re(({ scrollTop: y }) => y)
      ),
      t
    ), ie(
      q(
        e,
        re(({ scrollHeight: y }) => y)
      ),
      s
    ), ie(t, o), {
      deviation: n,
      fixedFooterHeight: u,
      fixedHeaderHeight: c,
      footerHeight: f,
      headerHeight: a,
      horizontalDirection: v,
      scrollBy: h,
      // input
      scrollContainerState: e,
      scrollHeight: s,
      scrollingInProgress: g,
      // signals
      scrollTo: d,
      scrollTop: t,
      skipAnimationFrameInResizeObserver: p,
      smoothScrollTargetReached: r,
      // state
      statefulScrollTop: o,
      viewportHeight: i
    };
  },
  [],
  { singleton: !0 }
), io = { lvl: 0 };
function qd(e, t) {
  const n = e.length;
  if (n === 0)
    return [];
  let { index: r, value: o } = t(e[0]);
  const i = [];
  for (let s = 1; s < n; s++) {
    const { index: a, value: c } = t(e[s]);
    i.push({ end: a - 1, start: r, value: o }), r = a, o = c;
  }
  return i.push({ end: 1 / 0, start: r, value: o }), i;
}
function _e(e) {
  return e === io;
}
function so(e, t) {
  if (!_e(e))
    return t === e.k ? e.v : t < e.k ? so(e.l, t) : so(e.r, t);
}
function Kt(e, t, n = "k") {
  if (_e(e))
    return [-1 / 0, void 0];
  if (Number(e[n]) === t)
    return [e.k, e.v];
  if (Number(e[n]) < t) {
    const r = Kt(e.r, t, n);
    return r[0] === -1 / 0 ? [e.k, e.v] : r;
  }
  return Kt(e.l, t, n);
}
function kt(e, t, n) {
  return _e(e) ? Xd(t, n, 1) : t === e.k ? tt(e, { k: t, v: n }) : t < e.k ? Ic(tt(e, { l: kt(e.l, t, n) })) : Ic(tt(e, { r: kt(e.r, t, n) }));
}
function dr() {
  return io;
}
function Yi(e, t, n) {
  if (_e(e))
    return [];
  const r = Kt(e, t)[0];
  return U0(Us(e, r, n));
}
function Ws(e, t) {
  if (_e(e)) return io;
  const { k: n, l: r, r: o } = e;
  if (t === n) {
    if (_e(r))
      return o;
    if (_e(o))
      return r;
    {
      const [i, s] = Kd(r);
      return Qo(tt(e, { k: i, l: Gd(r), v: s }));
    }
  } else return t < n ? Qo(tt(e, { l: Ws(r, t) })) : Qo(tt(e, { r: Ws(o, t) }));
}
function Fn(e) {
  return _e(e) ? [] : [...Fn(e.l), { k: e.k, v: e.v }, ...Fn(e.r)];
}
function Us(e, t, n) {
  if (_e(e))
    return [];
  const { k: r, l: o, r: i, v: s } = e;
  let a = [];
  return r > t && (a = a.concat(Us(o, t, n))), r >= t && r <= n && a.push({ k: r, v: s }), r <= n && (a = a.concat(Us(i, t, n))), a;
}
function Qo(e) {
  const { l: t, lvl: n, r } = e;
  if (r.lvl >= n - 1 && t.lvl >= n - 1)
    return e;
  if (n > r.lvl + 1) {
    if (hs(t))
      return Jd(tt(e, { lvl: n - 1 }));
    if (!_e(t) && !_e(t.r))
      return tt(t.r, {
        l: tt(t, { r: t.r.l }),
        lvl: n,
        r: tt(e, {
          l: t.r.r,
          lvl: n - 1
        })
      });
    throw new Error("Unexpected empty nodes");
  } else {
    if (hs(e))
      return Ys(tt(e, { lvl: n - 1 }));
    if (!_e(r) && !_e(r.l)) {
      const o = r.l, i = hs(o) ? r.lvl - 1 : r.lvl;
      return tt(o, {
        l: tt(e, {
          lvl: n - 1,
          r: o.l
        }),
        lvl: o.lvl + 1,
        r: Ys(tt(r, { l: o.r, lvl: i }))
      });
    } else
      throw new Error("Unexpected empty nodes");
  }
}
function tt(e, t) {
  return Xd(
    t.k !== void 0 ? t.k : e.k,
    t.v !== void 0 ? t.v : e.v,
    t.lvl !== void 0 ? t.lvl : e.lvl,
    t.l !== void 0 ? t.l : e.l,
    t.r !== void 0 ? t.r : e.r
  );
}
function Gd(e) {
  return _e(e.r) ? e.l : Qo(tt(e, { r: Gd(e.r) }));
}
function hs(e) {
  return _e(e) || e.lvl > e.r.lvl;
}
function Kd(e) {
  return _e(e.r) ? [e.k, e.v] : Kd(e.r);
}
function Xd(e, t, n, r = io, o = io) {
  return { k: e, l: r, lvl: n, r: o, v: t };
}
function Ic(e) {
  return Ys(Jd(e));
}
function Jd(e) {
  const { l: t } = e;
  return !_e(t) && t.lvl === e.lvl ? tt(t, { r: tt(e, { l: t.r }) }) : e;
}
function Ys(e) {
  const { lvl: t, r: n } = e;
  return !_e(n) && !_e(n.r) && n.lvl === t && n.r.lvl === t ? tt(n, { l: tt(e, { r: n.l }), lvl: t + 1 }) : e;
}
function U0(e) {
  return qd(e, ({ k: t, v: n }) => ({ index: t, value: n }));
}
function Qd(e, t) {
  return !!(e && e.startIndex === t.startIndex && e.endIndex === t.endIndex);
}
function ao(e, t) {
  return !!(e && e[0] === t[0] && e[1] === t[1]);
}
const Ga = Ce(
  () => ({ recalcInProgress: Q(!1) }),
  [],
  { singleton: !0 }
);
function Zd(e, t, n) {
  return e[mi(e, t, n)];
}
function mi(e, t, n, r = 0) {
  let o = e.length - 1;
  for (; r <= o; ) {
    const i = Math.floor((r + o) / 2), s = e[i], a = n(s, t);
    if (a === 0)
      return i;
    if (a === -1) {
      if (o - r < 2)
        return i - 1;
      o = i - 1;
    } else {
      if (o === r)
        return i;
      r = i + 1;
    }
  }
  throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`);
}
function Y0(e, t, n, r) {
  const o = mi(e, t, r), i = mi(e, n, r, o);
  return e.slice(o, i + 1);
}
function Pn(e, t) {
  return Math.round(e.getBoundingClientRect()[t]);
}
function qi(e) {
  return !_e(e.groupOffsetTree);
}
function Ka({ index: e }, t) {
  return t === e ? 0 : t < e ? -1 : 1;
}
function q0() {
  return {
    groupIndices: [],
    groupOffsetTree: dr(),
    lastIndex: 0,
    lastOffset: 0,
    lastSize: 0,
    offsetTree: [],
    sizeTree: dr()
  };
}
function G0(e, t) {
  let n = _e(e) ? 0 : 1 / 0;
  for (const r of t) {
    const { endIndex: o, size: i, startIndex: s } = r;
    if (n = Math.min(n, s), _e(e)) {
      e = kt(e, 0, i);
      continue;
    }
    const a = Yi(e, s - 1, o + 1);
    if (a.some(tx(r)))
      continue;
    let c = !1, u = !1;
    for (const { end: f, start: d, value: h } of a)
      c ? (o >= d || i === h) && (e = Ws(e, d)) : (u = h !== i, c = !0), f > o && o >= d && h !== i && (e = kt(e, o + 1, h));
    u && (e = kt(e, s, i));
  }
  return [e, n];
}
function K0(e) {
  return typeof e.groupIndex < "u";
}
function X0({ offset: e }, t) {
  return t === e ? 0 : t < e ? -1 : 1;
}
function lo(e, t, n) {
  if (t.length === 0)
    return 0;
  const { index: r, offset: o, size: i } = Zd(t, e, Ka), s = e - r, a = i * s + (s - 1) * n + o;
  return a > 0 ? a + n : a;
}
function ef(e, t) {
  if (!qi(t))
    return e;
  let n = 0;
  for (; t.groupIndices[n] <= e + n; )
    n++;
  return e + n;
}
function tf(e, t, n) {
  if (K0(e))
    return t.groupIndices[e.groupIndex] + 1;
  {
    const r = e.index === "LAST" ? n : e.index;
    let o = ef(r, t);
    return o = Math.max(0, o, Math.min(n, o)), o;
  }
}
function J0(e, t, n, r = 0) {
  return r > 0 && (t = Math.max(t, Zd(e, r, Ka).offset)), qd(Y0(e, t, n, X0), ex);
}
function Q0(e, [t, n, r, o]) {
  t.length > 0 && r("received item sizes", t, $t.DEBUG);
  const i = e.sizeTree;
  let s = i, a = 0;
  if (n.length > 0 && _e(i) && t.length === 2) {
    const h = t[0].size, g = t[1].size;
    s = n.reduce((v, p) => kt(kt(v, p, h), p + 1, g), s);
  } else
    [s, a] = G0(s, t);
  if (s === i)
    return e;
  const { lastIndex: c, lastOffset: u, lastSize: f, offsetTree: d } = qs(e.offsetTree, a, s, o);
  return {
    groupIndices: n,
    groupOffsetTree: n.reduce((h, g) => kt(h, g, lo(g, d, o)), dr()),
    lastIndex: c,
    lastOffset: u,
    lastSize: f,
    offsetTree: d,
    sizeTree: s
  };
}
function Z0(e) {
  return Fn(e).map(({ k: t, v: n }, r, o) => {
    const i = o[r + 1];
    return { endIndex: i ? i.k - 1 : 1 / 0, size: n, startIndex: t };
  });
}
function Mc(e, t) {
  let n = 0, r = 0;
  for (; n < e; )
    n += t[r + 1] - t[r] - 1, r++;
  return r - (n === e ? 0 : 1);
}
function qs(e, t, n, r) {
  let o = e, i = 0, s = 0, a = 0, c = 0;
  if (t !== 0) {
    c = mi(o, t - 1, Ka), a = o[c].offset;
    const u = Kt(n, t - 1);
    i = u[0], s = u[1], o.length && o[c].size === Kt(n, t)[1] && (c -= 1), o = o.slice(0, c + 1);
  } else
    o = [];
  for (const { start: u, value: f } of Yi(n, t, 1 / 0)) {
    const d = u - i, h = d * s + a + d * r;
    o.push({
      index: u,
      offset: h,
      size: f
    }), i = u, a = h, s = f;
  }
  return {
    lastIndex: i,
    lastOffset: a,
    lastSize: s,
    offsetTree: o
  };
}
function ex(e) {
  return { index: e.index, value: e };
}
function tx(e) {
  const { endIndex: t, size: n, startIndex: r } = e;
  return (o) => o.start === r && (o.end === t || o.end === 1 / 0) && o.value === n;
}
const nx = {
  offsetHeight: "height",
  offsetWidth: "width"
}, fn = Ce(
  ([{ log: e }, { recalcInProgress: t }]) => {
    const n = be(), r = be(), o = ht(r, 0), i = be(), s = be(), a = Q(0), c = Q([]), u = Q(void 0), f = Q(void 0), d = Q((x, w) => Pn(x, nx[w])), h = Q(void 0), g = Q(0), v = q0(), p = ht(
      q(n, me(c, e, g), on(Q0, v), Le()),
      v
    ), y = ht(
      q(
        c,
        Le(),
        on((x, w) => ({ current: w, prev: x.current }), {
          current: [],
          prev: []
        }),
        re(({ prev: x }) => x)
      ),
      []
    );
    ie(
      q(
        c,
        ae((x) => x.length > 0),
        me(p, g),
        re(([x, w, C]) => {
          const P = x.reduce((k, m, R) => kt(k, m, lo(m, w.offsetTree, C) || R), dr());
          return {
            ...w,
            groupIndices: x,
            groupOffsetTree: P
          };
        })
      ),
      p
    ), ie(
      q(
        r,
        me(p),
        ae(([x, { lastIndex: w }]) => x < w),
        re(([x, { lastIndex: w, lastSize: C }]) => [
          {
            endIndex: w,
            size: C,
            startIndex: x
          }
        ])
      ),
      n
    ), ie(u, f);
    const b = ht(
      q(
        u,
        re((x) => x === void 0)
      ),
      !0
    );
    ie(
      q(
        f,
        ae((x) => x !== void 0 && _e(mt(p).sizeTree)),
        re((x) => [{ endIndex: 0, size: x, startIndex: 0 }])
      ),
      n
    );
    const T = Nt(
      q(
        n,
        me(p),
        on(
          ({ sizes: x }, [w, C]) => ({
            changed: C !== x,
            sizes: C
          }),
          { changed: !1, sizes: v }
        ),
        re((x) => x.changed)
      )
    );
    Ie(
      q(
        a,
        on(
          (x, w) => ({ diff: x.prev - w, prev: w }),
          { diff: 0, prev: 0 }
        ),
        re((x) => x.diff)
      ),
      (x) => {
        const { groupIndices: w } = mt(p);
        if (x > 0)
          pe(t, !0), pe(i, x + Mc(x, w));
        else if (x < 0) {
          const C = mt(y);
          C.length > 0 && (x -= Mc(-x, C)), pe(s, x);
        }
      }
    ), Ie(q(a, me(e)), ([x, w]) => {
      x < 0 && w(
        "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
        { firstItemIndex: a },
        $t.ERROR
      );
    });
    const S = Nt(i);
    ie(
      q(
        i,
        me(p),
        re(([x, w]) => {
          const C = w.groupIndices.length > 0, P = [], k = w.lastSize;
          if (C) {
            const m = so(w.sizeTree, 0);
            let R = 0, _ = 0;
            for (; R < x; ) {
              const A = w.groupIndices[_], L = w.groupIndices.length === _ + 1 ? 1 / 0 : w.groupIndices[_ + 1] - A - 1;
              P.push({
                endIndex: A,
                size: m,
                startIndex: A
              }), P.push({
                endIndex: A + 1 + L - 1,
                size: k,
                startIndex: A + 1
              }), _++, R += L + 1;
            }
            const B = Fn(w.sizeTree);
            return R !== x && B.shift(), B.reduce(
              (A, { k: L, v: I }) => {
                let U = A.ranges;
                return A.prevSize !== 0 && (U = [
                  ...A.ranges,
                  {
                    endIndex: L + x - 1,
                    size: A.prevSize,
                    startIndex: A.prevIndex
                  }
                ]), {
                  prevIndex: L + x,
                  prevSize: I,
                  ranges: U
                };
              },
              {
                prevIndex: x,
                prevSize: 0,
                ranges: P
              }
            ).ranges;
          }
          return Fn(w.sizeTree).reduce(
            (m, { k: R, v: _ }) => ({
              prevIndex: R + x,
              prevSize: _,
              ranges: [...m.ranges, { endIndex: R + x - 1, size: m.prevSize, startIndex: m.prevIndex }]
            }),
            {
              prevIndex: 0,
              prevSize: k,
              ranges: []
            }
          ).ranges;
        })
      ),
      n
    );
    const E = Nt(
      q(
        s,
        me(p, g),
        re(([x, { offsetTree: w }, C]) => {
          const P = -x;
          return lo(P, w, C);
        })
      )
    );
    return ie(
      q(
        s,
        me(p, g),
        re(([x, w, C]) => {
          if (w.groupIndices.length > 0) {
            if (_e(w.sizeTree))
              return w;
            let P = dr();
            const k = mt(y);
            let m = 0, R = 0, _ = 0;
            for (; m < -x; ) {
              _ = k[R];
              const B = k[R + 1] - _ - 1;
              R++, m += B + 1;
            }
            if (P = Fn(w.sizeTree).reduce((B, { k: A, v: L }) => kt(B, Math.max(0, A + x), L), P), m !== -x) {
              const B = so(w.sizeTree, _);
              P = kt(P, 0, B);
              const A = Kt(w.sizeTree, -x + 1)[1];
              P = kt(P, 1, A);
            }
            return {
              ...w,
              sizeTree: P,
              ...qs(w.offsetTree, 0, P, C)
            };
          } else {
            const P = Fn(w.sizeTree).reduce((k, { k: m, v: R }) => kt(k, Math.max(0, m + x), R), dr());
            return {
              ...w,
              sizeTree: P,
              ...qs(w.offsetTree, 0, P, C)
            };
          }
        })
      ),
      p
    ), {
      beforeUnshiftWith: S,
      // input
      data: h,
      defaultItemSize: f,
      firstItemIndex: a,
      fixedItemSize: u,
      gap: g,
      groupIndices: c,
      itemSize: d,
      listRefresh: T,
      shiftWith: s,
      shiftWithOffset: E,
      sizeRanges: n,
      // output
      sizes: p,
      statefulTotalCount: o,
      totalCount: r,
      trackItemSizes: b,
      unshiftWith: i
    };
  },
  ze(An, Ga),
  { singleton: !0 }
);
function rx(e) {
  return e.reduce(
    (t, n) => (t.groupIndices.push(t.totalCount), t.totalCount += n + 1, t),
    {
      groupIndices: [],
      totalCount: 0
    }
  );
}
const nf = Ce(
  ([{ groupIndices: e, sizes: t, totalCount: n }, { headerHeight: r, scrollTop: o }]) => {
    const i = be(), s = be(), a = Nt(q(i, re(rx)));
    return ie(
      q(
        a,
        re((c) => c.totalCount)
      ),
      n
    ), ie(
      q(
        a,
        re((c) => c.groupIndices)
      ),
      e
    ), ie(
      q(
        nt(o, t, r),
        ae(([c, u]) => qi(u)),
        re(([c, u, f]) => Kt(u.groupOffsetTree, Math.max(c - f, 0), "v")[0]),
        Le(),
        re((c) => [c])
      ),
      s
    ), { groupCounts: i, topItemsIndexes: s };
  },
  ze(fn, bt)
), Dn = Ce(
  ([{ log: e }]) => {
    const t = Q(!1), n = Nt(
      q(
        t,
        ae((r) => r),
        Le()
      )
    );
    return Ie(t, (r) => {
      r && mt(e)("props updated", {}, $t.DEBUG);
    }), { didMount: n, propsReady: t };
  },
  ze(An),
  { singleton: !0 }
), ox = typeof document < "u" && "scrollBehavior" in document.documentElement.style;
function rf(e) {
  const t = typeof e == "number" ? { index: e } : e;
  return t.align || (t.align = "start"), (!t.behavior || !ox) && (t.behavior = "auto"), t.offset || (t.offset = 0), t;
}
const To = Ce(
  ([
    { gap: e, listRefresh: t, sizes: n, totalCount: r },
    {
      fixedFooterHeight: o,
      fixedHeaderHeight: i,
      footerHeight: s,
      headerHeight: a,
      scrollingInProgress: c,
      scrollTo: u,
      smoothScrollTargetReached: f,
      viewportHeight: d
    },
    { log: h }
  ]) => {
    const g = be(), v = be(), p = Q(0);
    let y = null, b = null, T = null;
    function S() {
      y && (y(), y = null), T && (T(), T = null), b && (clearTimeout(b), b = null), pe(c, !1);
    }
    return ie(
      q(
        g,
        me(n, d, r, p, a, s, h),
        me(e, i, o),
        re(
          ([
            [E, x, w, C, P, k, m, R],
            _,
            B,
            A
          ]) => {
            const L = rf(E), { align: I, behavior: U, offset: Y } = L, G = C - 1, N = tf(L, x, G);
            let j = lo(N, x.offsetTree, _) + k;
            I === "end" ? (j += B + Kt(x.sizeTree, N)[1] - w + A, N === G && (j += m)) : I === "center" ? j += (B + Kt(x.sizeTree, N)[1] - w + A) / 2 : j -= P, Y && (j += Y);
            const V = (W) => {
              S(), W ? (R("retrying to scroll to", { location: E }, $t.DEBUG), pe(g, E)) : (pe(v, !0), R("list did not change, scroll successful", {}, $t.DEBUG));
            };
            if (S(), U === "smooth") {
              let W = !1;
              T = Ie(t, (J) => {
                W = W || J;
              }), y = dn(f, () => {
                V(W);
              });
            } else
              y = dn(q(t, ix(150)), V);
            return b = setTimeout(() => {
              S();
            }, 1200), pe(c, !0), R("scrolling from index to", { behavior: U, index: N, top: j }, $t.DEBUG), { behavior: U, top: j };
          }
        )
      ),
      u
    ), {
      scrollTargetReached: v,
      scrollToIndex: g,
      topListHeight: p
    };
  },
  ze(fn, bt, An),
  { singleton: !0 }
);
function ix(e) {
  return (t) => {
    const n = setTimeout(() => {
      t(!1);
    }, e);
    return (r) => {
      r && (t(!0), clearTimeout(n));
    };
  };
}
function Xa(e, t) {
  e == 0 ? t() : requestAnimationFrame(() => {
    Xa(e - 1, t);
  });
}
function Ja(e, t) {
  const n = t - 1;
  return typeof e == "number" ? e : e.index === "LAST" ? n : e.index;
}
const wo = Ce(
  ([{ defaultItemSize: e, listRefresh: t, sizes: n }, { scrollTop: r }, { scrollTargetReached: o, scrollToIndex: i }, { didMount: s }]) => {
    const a = Q(!0), c = Q(0), u = Q(!0);
    return ie(
      q(
        s,
        me(c),
        ae(([f, d]) => !!d),
        nn(!1)
      ),
      a
    ), ie(
      q(
        s,
        me(c),
        ae(([f, d]) => !!d),
        nn(!1)
      ),
      u
    ), Ie(
      q(
        nt(t, s),
        me(a, n, e, u),
        ae(([[, f], d, { sizeTree: h }, g, v]) => f && (!_e(h) || Ua(g)) && !d && !v),
        me(c)
      ),
      ([, f]) => {
        dn(o, () => {
          pe(u, !0);
        }), Xa(4, () => {
          dn(r, () => {
            pe(a, !0);
          }), pe(i, f);
        });
      }
    ), {
      initialItemFinalLocationReached: u,
      initialTopMostItemIndex: c,
      scrolledToInitialItem: a
    };
  },
  ze(fn, bt, To, Dn),
  { singleton: !0 }
);
function of(e, t) {
  return Math.abs(e - t) < 1.01;
}
const co = "up", Ur = "down", sx = "none", ax = {
  atBottom: !1,
  notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
  state: {
    offsetBottom: 0,
    scrollHeight: 0,
    scrollTop: 0,
    viewportHeight: 0
  }
}, lx = 0, Eo = Ce(([{ footerHeight: e, headerHeight: t, scrollBy: n, scrollContainerState: r, scrollTop: o, viewportHeight: i }]) => {
  const s = Q(!1), a = Q(!0), c = be(), u = be(), f = Q(4), d = Q(lx), h = ht(
    q(
      Pc(q(le(o), wr(1), nn(!0)), q(le(o), wr(1), nn(!1), Rc(100))),
      Le()
    ),
    !1
  ), g = ht(
    q(Pc(q(n, nn(!0)), q(n, nn(!1), Rc(200))), Le()),
    !1
  );
  ie(
    q(
      nt(le(o), le(d)),
      re(([T, S]) => T <= S),
      Le()
    ),
    a
  ), ie(q(a, En(50)), u);
  const v = Nt(
    q(
      nt(r, le(i), le(t), le(e), le(f)),
      on((T, [{ scrollHeight: S, scrollTop: E }, x, w, C, P]) => {
        const k = E + x - S > -P, m = {
          scrollHeight: S,
          scrollTop: E,
          viewportHeight: x
        };
        if (k) {
          let _, B;
          return E > T.state.scrollTop ? (_ = "SCROLLED_DOWN", B = T.state.scrollTop - E) : (_ = "SIZE_DECREASED", B = T.state.scrollTop - E || T.scrollTopDelta), {
            atBottom: !0,
            atBottomBecause: _,
            scrollTopDelta: B,
            state: m
          };
        }
        let R;
        return m.scrollHeight > T.state.scrollHeight ? R = "SIZE_INCREASED" : x < T.state.viewportHeight ? R = "VIEWPORT_HEIGHT_DECREASING" : E < T.state.scrollTop ? R = "SCROLLING_UPWARDS" : R = "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM", {
          atBottom: !1,
          notAtBottomBecause: R,
          state: m
        };
      }, ax),
      Le((T, S) => T && T.atBottom === S.atBottom)
    )
  ), p = ht(
    q(
      r,
      on(
        (T, { scrollHeight: S, scrollTop: E, viewportHeight: x }) => {
          if (of(T.scrollHeight, S))
            return {
              changed: !1,
              jump: 0,
              scrollHeight: S,
              scrollTop: E
            };
          {
            const w = S - (E + x) < 1;
            return T.scrollTop !== E && w ? {
              changed: !0,
              jump: T.scrollTop - E,
              scrollHeight: S,
              scrollTop: E
            } : {
              changed: !0,
              jump: 0,
              scrollHeight: S,
              scrollTop: E
            };
          }
        },
        { changed: !1, jump: 0, scrollHeight: 0, scrollTop: 0 }
      ),
      ae((T) => T.changed),
      re((T) => T.jump)
    ),
    0
  );
  ie(
    q(
      v,
      re((T) => T.atBottom)
    ),
    s
  ), ie(q(s, En(50)), c);
  const y = Q(Ur);
  ie(
    q(
      r,
      re(({ scrollTop: T }) => T),
      Le(),
      on(
        (T, S) => mt(g) ? { direction: T.direction, prevScrollTop: S } : { direction: S < T.prevScrollTop ? co : Ur, prevScrollTop: S },
        { direction: Ur, prevScrollTop: 0 }
      ),
      re((T) => T.direction)
    ),
    y
  ), ie(q(r, En(50), nn(sx)), y);
  const b = Q(0);
  return ie(
    q(
      h,
      ae((T) => !T),
      nn(0)
    ),
    b
  ), ie(
    q(
      o,
      En(100),
      me(h),
      ae(([T, S]) => !!S),
      on(([T, S], [E]) => [S, E], [0, 0]),
      re(([T, S]) => S - T)
    ),
    b
  ), {
    atBottomState: v,
    atBottomStateChange: c,
    atBottomThreshold: f,
    atTopStateChange: u,
    atTopThreshold: d,
    isAtBottom: s,
    isAtTop: a,
    isScrolling: h,
    lastJumpDueToItemResize: p,
    scrollDirection: y,
    scrollVelocity: b
  };
}, ze(bt)), hi = "top", gi = "bottom", Nc = "none";
function $c(e, t, n) {
  return typeof e == "number" ? n === co && t === hi || n === Ur && t === gi ? e : 0 : n === co ? t === hi ? e.main : e.reverse : t === gi ? e.main : e.reverse;
}
function Ac(e, t) {
  var n;
  return typeof e == "number" ? e : (n = e[t]) != null ? n : 0;
}
const Qa = Ce(
  ([{ deviation: e, fixedHeaderHeight: t, headerHeight: n, scrollTop: r, viewportHeight: o }]) => {
    const i = be(), s = Q(0), a = Q(0), c = Q(0), u = ht(
      q(
        nt(
          le(r),
          le(o),
          le(n),
          le(i, ao),
          le(c),
          le(s),
          le(t),
          le(e),
          le(a)
        ),
        re(
          ([
            f,
            d,
            h,
            [g, v],
            p,
            y,
            b,
            T,
            S
          ]) => {
            const E = f - T, x = y + b, w = Math.max(h - E, 0);
            let C = Nc;
            const P = Ac(S, hi), k = Ac(S, gi);
            return g -= T, g += h + b, v += h + b, v -= T, g > f + x - P && (C = co), v < f - w + d + k && (C = Ur), C !== Nc ? [
              Math.max(E - h - $c(p, hi, C) - P, 0),
              E - w - b + d + $c(p, gi, C) + k
            ] : null;
          }
        ),
        ae((f) => f != null),
        Le(ao)
      ),
      [0, 0]
    );
    return {
      increaseViewportBy: a,
      // input
      listBoundary: i,
      overscan: c,
      topListHeight: s,
      // output
      visibleRange: u
    };
  },
  ze(bt),
  { singleton: !0 }
);
function cx(e, t, n) {
  if (qi(t)) {
    const r = ef(e, t);
    return [
      { index: Kt(t.groupOffsetTree, r)[0], offset: 0, size: 0 },
      { data: n == null ? void 0 : n[0], index: r, offset: 0, size: 0 }
    ];
  }
  return [{ data: n == null ? void 0 : n[0], index: e, offset: 0, size: 0 }];
}
const gs = {
  bottom: 0,
  firstItemIndex: 0,
  items: [],
  offsetBottom: 0,
  offsetTop: 0,
  top: 0,
  topItems: [],
  topListHeight: 0,
  totalCount: 0
};
function Zo(e, t, n, r, o, i) {
  const { lastIndex: s, lastOffset: a, lastSize: c } = o;
  let u = 0, f = 0;
  if (e.length > 0) {
    u = e[0].offset;
    const p = e[e.length - 1];
    f = p.offset + p.size;
  }
  const d = n - s, h = a + d * c + (d - 1) * r, g = u, v = h - f;
  return {
    bottom: f,
    firstItemIndex: i,
    items: Dc(e, o, i),
    offsetBottom: v,
    offsetTop: u,
    top: g,
    topItems: Dc(t, o, i),
    topListHeight: t.reduce((p, y) => y.size + p, 0),
    totalCount: n
  };
}
function sf(e, t, n, r, o, i) {
  let s = 0;
  if (n.groupIndices.length > 0)
    for (const f of n.groupIndices) {
      if (f - s >= e)
        break;
      s++;
    }
  const a = e + s, c = Ja(t, a), u = Array.from({ length: a }).map((f, d) => ({
    data: i[d + c],
    index: d + c,
    offset: 0,
    size: 0
  }));
  return Zo(u, [], a, o, n, r);
}
function Dc(e, t, n) {
  if (e.length === 0)
    return [];
  if (!qi(t))
    return e.map((u) => ({ ...u, index: u.index + n, originalIndex: u.index }));
  const r = e[0].index, o = e[e.length - 1].index, i = [], s = Yi(t.groupOffsetTree, r, o);
  let a, c = 0;
  for (const u of e) {
    (!a || a.end < u.index) && (a = s.shift(), c = t.groupIndices.indexOf(a.start));
    let f;
    u.index === a.start ? f = {
      index: c,
      type: "group"
    } : f = {
      groupIndex: c,
      index: u.index - (c + 1) + n
    }, i.push({
      ...f,
      data: u.data,
      offset: u.offset,
      originalIndex: u.index,
      size: u.size
    });
  }
  return i;
}
const Xn = Ce(
  ([
    { data: e, firstItemIndex: t, gap: n, sizes: r, totalCount: o },
    i,
    { listBoundary: s, topListHeight: a, visibleRange: c },
    { initialTopMostItemIndex: u, scrolledToInitialItem: f },
    { topListHeight: d },
    h,
    { didMount: g },
    { recalcInProgress: v }
  ]) => {
    const p = Q([]), y = Q(0), b = be();
    ie(i.topItemsIndexes, p);
    const T = ht(
      q(
        nt(
          g,
          v,
          le(c, ao),
          le(o),
          le(r),
          le(u),
          f,
          le(p),
          le(t),
          le(n),
          e
        ),
        ae(([w, C, , P, , , , , , , k]) => {
          const m = k && k.length !== P;
          return w && !C && !m;
        }),
        re(
          ([
            ,
            ,
            [w, C],
            P,
            k,
            m,
            R,
            _,
            B,
            A,
            L
          ]) => {
            const I = k, { offsetTree: U, sizeTree: Y } = I, G = mt(y);
            if (P === 0)
              return { ...gs, totalCount: P };
            if (w === 0 && C === 0)
              return G === 0 ? { ...gs, totalCount: P } : sf(G, m, k, B, A, L || []);
            if (_e(Y))
              return G > 0 ? null : Zo(
                cx(Ja(m, P), I, L),
                [],
                P,
                A,
                I,
                B
              );
            const N = [];
            if (_.length > 0) {
              const te = _[0], K = _[_.length - 1];
              let Z = 0;
              for (const D of Yi(Y, te, K)) {
                const X = D.value, H = Math.max(D.start, te), ee = Math.min(D.end, K);
                for (let z = H; z <= ee; z++)
                  N.push({ data: L == null ? void 0 : L[z], index: z, offset: Z, size: X }), Z += X;
              }
            }
            if (!R)
              return Zo([], N, P, A, I, B);
            const j = _.length > 0 ? _[_.length - 1] + 1 : 0, V = J0(U, w, C, j);
            if (V.length === 0)
              return null;
            const W = P - 1, J = Ui([], (te) => {
              for (const K of V) {
                const Z = K.value;
                let D = Z.offset, X = K.start;
                const H = Z.size;
                if (Z.offset < w) {
                  X += Math.floor((w - Z.offset + A) / (H + A));
                  const z = X - K.start;
                  D += z * H + z * A;
                }
                X < j && (D += (j - X) * H, X = j);
                const ee = Math.min(K.end, W);
                for (let z = X; z <= ee && !(D >= C); z++)
                  te.push({ data: L == null ? void 0 : L[z], index: z, offset: D, size: H }), D += H + A;
              }
            });
            return Zo(J, N, P, A, I, B);
          }
        ),
        //@ts-expect-error filter needs to be fixed
        ae((w) => w !== null),
        Le()
      ),
      gs
    );
    ie(
      q(
        e,
        ae(Ua),
        re((w) => w == null ? void 0 : w.length)
      ),
      o
    ), ie(
      q(
        T,
        re((w) => w.topListHeight)
      ),
      d
    ), ie(d, a), ie(
      q(
        T,
        re((w) => [w.top, w.bottom])
      ),
      s
    ), ie(
      q(
        T,
        re((w) => w.items)
      ),
      b
    );
    const S = Nt(
      q(
        T,
        ae(({ items: w }) => w.length > 0),
        me(o, e),
        ae(([{ items: w }, C]) => w[w.length - 1].originalIndex === C - 1),
        re(([, w, C]) => [w - 1, C]),
        Le(ao),
        re(([w]) => w)
      )
    ), E = Nt(
      q(
        T,
        En(200),
        ae(({ items: w, topItems: C }) => w.length > 0 && w[0].originalIndex === C.length),
        re(({ items: w }) => w[0].index),
        Le()
      )
    ), x = Nt(
      q(
        T,
        ae(({ items: w }) => w.length > 0),
        re(({ items: w }) => {
          let C = 0, P = w.length - 1;
          for (; w[C].type === "group" && C < P; )
            C++;
          for (; w[P].type === "group" && P > C; )
            P--;
          return {
            endIndex: w[P].index,
            startIndex: w[C].index
          };
        }),
        Le(Qd)
      )
    );
    return { endReached: S, initialItemCount: y, itemsRendered: b, listState: T, rangeChanged: x, startReached: E, topItemsIndexes: p, ...h };
  },
  ze(
    fn,
    nf,
    Qa,
    wo,
    To,
    Eo,
    Dn,
    Ga
  ),
  { singleton: !0 }
), af = Ce(
  ([{ fixedFooterHeight: e, fixedHeaderHeight: t, footerHeight: n, headerHeight: r }, { listState: o }]) => {
    const i = be(), s = ht(
      q(
        nt(n, e, r, t, o),
        re(([a, c, u, f, d]) => a + c + u + f + d.offsetBottom + d.bottom)
      ),
      0
    );
    return ie(le(s), i), { totalListHeight: s, totalListHeightChanged: i };
  },
  ze(bt, Xn),
  { singleton: !0 }
), ux = Ce(
  ([{ viewportHeight: e }, { totalListHeight: t }]) => {
    const n = Q(!1), r = ht(
      q(
        nt(n, e, t),
        ae(([o]) => o),
        re(([, o, i]) => Math.max(0, o - i)),
        En(0),
        Le()
      ),
      0
    );
    return { alignToBottom: n, paddingTopAddition: r };
  },
  ze(bt, af),
  { singleton: !0 }
);
function _c(e) {
  return e ? e === "smooth" ? "smooth" : "auto" : !1;
}
const dx = (e, t) => typeof e == "function" ? _c(e(t)) : t && _c(e), fx = Ce(
  ([
    { listRefresh: e, totalCount: t },
    { atBottomState: n, isAtBottom: r },
    { scrollToIndex: o },
    { scrolledToInitialItem: i },
    { didMount: s, propsReady: a },
    { log: c },
    { scrollingInProgress: u }
  ]) => {
    const f = Q(!1), d = be();
    let h = null;
    function g(p) {
      pe(o, {
        align: "end",
        behavior: p,
        index: "LAST"
      });
    }
    Ie(
      q(
        nt(q(le(t), wr(1)), s),
        me(le(f), r, i, u),
        re(([[p, y], b, T, S, E]) => {
          let x = y && S, w = "auto";
          return x && (w = dx(b, T || E), x = x && !!w), { followOutputBehavior: w, shouldFollow: x, totalCount: p };
        }),
        ae(({ shouldFollow: p }) => p)
      ),
      ({ followOutputBehavior: p, totalCount: y }) => {
        h && (h(), h = null), h = dn(e, () => {
          mt(c)("following output to ", { totalCount: y }, $t.DEBUG), g(p), h = null;
        });
      }
    );
    function v(p) {
      const y = dn(n, (b) => {
        p && !b.atBottom && b.notAtBottomBecause === "SIZE_INCREASED" && !h && (mt(c)("scrolling to bottom due to increased size", {}, $t.DEBUG), g("auto"));
      });
      setTimeout(y, 100);
    }
    return Ie(
      q(
        nt(le(f), t, a),
        ae(([p, , y]) => p && y),
        on(
          ({ value: p }, [, y]) => ({ refreshed: p === y, value: y }),
          { refreshed: !1, value: 0 }
        ),
        ae(({ refreshed: p }) => p),
        me(f, t)
      ),
      ([, p]) => {
        mt(i) && v(p !== !1);
      }
    ), Ie(d, () => {
      v(mt(f) !== !1);
    }), Ie(nt(le(f), n), ([p, y]) => {
      p && !y.atBottom && y.notAtBottomBecause === "VIEWPORT_HEIGHT_DECREASING" && g("auto");
    }), { autoscrollToBottom: d, followOutput: f };
  },
  ze(fn, Eo, To, wo, Dn, An, bt)
), px = Ce(
  ([{ data: e, firstItemIndex: t, gap: n, sizes: r }, { initialTopMostItemIndex: o }, { initialItemCount: i, listState: s }, { didMount: a }]) => (ie(
    q(
      a,
      me(i),
      ae(([, c]) => c !== 0),
      me(o, r, t, n, e),
      re(([[, c], u, f, d, h, g = []]) => sf(c, u, f, d, h, g))
    ),
    s
  ), {}),
  ze(fn, wo, Xn, Dn),
  { singleton: !0 }
), mx = Ce(
  ([{ didMount: e }, { scrollTo: t }, { listState: n }]) => {
    const r = Q(0);
    return Ie(
      q(
        e,
        me(r),
        ae(([, o]) => o !== 0),
        re(([, o]) => ({ top: o }))
      ),
      (o) => {
        dn(
          q(
            n,
            wr(1),
            ae((i) => i.items.length > 1)
          ),
          () => {
            requestAnimationFrame(() => {
              pe(t, o);
            });
          }
        );
      }
    ), {
      initialScrollTop: r
    };
  },
  ze(Dn, bt, Xn),
  { singleton: !0 }
), hx = ({
  itemBottom: e,
  itemTop: t,
  locationParams: { align: n, behavior: r, ...o },
  viewportBottom: i,
  viewportTop: s
}) => t < s ? { ...o, align: n ?? "start", behavior: r } : e > i ? { ...o, align: n ?? "end", behavior: r } : null, gx = Ce(
  ([
    { gap: e, sizes: t, totalCount: n },
    { fixedFooterHeight: r, fixedHeaderHeight: o, headerHeight: i, scrollingInProgress: s, scrollTop: a, viewportHeight: c },
    { scrollToIndex: u }
  ]) => {
    const f = be();
    return ie(
      q(
        f,
        me(t, c, n, i, o, r, a),
        me(e),
        re(([[d, h, g, v, p, y, b, T], S]) => {
          const { align: E, behavior: x, calculateViewLocation: w = hx, done: C, ...P } = d, k = tf(d, h, v - 1), m = lo(k, h.offsetTree, S) + p + y, R = m + Kt(h.sizeTree, k)[1], _ = T + y, B = T + g - b, A = w({
            itemBottom: R,
            itemTop: m,
            locationParams: { align: E, behavior: x, ...P },
            viewportBottom: B,
            viewportTop: _
          });
          return A ? C && dn(
            q(
              s,
              ae((L) => !L),
              // skips the initial publish of false, and the cleanup call.
              // but if scrollingInProgress is true, we skip the initial publish.
              wr(mt(s) ? 1 : 2)
            ),
            C
          ) : C && C(), A;
        }),
        ae((d) => d !== null)
      ),
      u
    ), {
      scrollIntoView: f
    };
  },
  ze(fn, bt, To, Xn, An),
  { singleton: !0 }
), lf = Ce(
  ([{ scrollVelocity: e }]) => {
    const t = Q(!1), n = be(), r = Q(!1);
    return ie(
      q(
        e,
        me(r, t, n),
        ae(([o, i]) => !!i),
        re(([o, i, s, a]) => {
          const { enter: c, exit: u } = i;
          if (s) {
            if (u(o, a))
              return !1;
          } else if (c(o, a))
            return !0;
          return s;
        }),
        Le()
      ),
      t
    ), Ie(
      q(nt(t, e, n), me(r)),
      ([[o, i, s], a]) => {
        o && a && a.change && a.change(i, s);
      }
    ), { isSeeking: t, scrollSeekConfiguration: r, scrollSeekRangeChanged: n, scrollVelocity: e };
  },
  ze(Eo),
  { singleton: !0 }
), Za = Ce(([{ scrollContainerState: e, scrollTo: t }]) => {
  const n = be(), r = be(), o = be(), i = Q(!1), s = Q(void 0);
  return ie(
    q(
      nt(n, r),
      re(([{ scrollHeight: a, scrollTop: c, viewportHeight: u }, { offsetTop: f }]) => ({
        scrollHeight: a,
        scrollTop: Math.max(0, c - f),
        viewportHeight: u
      }))
    ),
    e
  ), ie(
    q(
      t,
      me(r),
      re(([a, { offsetTop: c }]) => ({
        ...a,
        top: a.top + c
      }))
    ),
    o
  ), {
    customScrollParent: s,
    // config
    useWindowScroll: i,
    // input
    windowScrollContainerState: n,
    // signals
    windowScrollTo: o,
    windowViewportRect: r
  };
}, ze(bt)), yx = Ce(
  ([
    { sizeRanges: e, sizes: t },
    { headerHeight: n, scrollTop: r },
    { initialTopMostItemIndex: o },
    { didMount: i },
    { useWindowScroll: s, windowScrollContainerState: a, windowViewportRect: c }
  ]) => {
    const u = be(), f = Q(void 0), d = Q(null), h = Q(null);
    return ie(a, d), ie(c, h), Ie(
      q(
        u,
        me(t, r, s, d, h, n)
      ),
      ([g, v, p, y, b, T, S]) => {
        const E = Z0(v.sizeTree);
        y && b !== null && T !== null && (p = b.scrollTop - T.offsetTop), p -= S, g({ ranges: E, scrollTop: p });
      }
    ), ie(q(f, ae(Ua), re(vx)), o), ie(
      q(
        i,
        me(f),
        ae(([, g]) => g !== void 0),
        Le(),
        re(([, g]) => g.ranges)
      ),
      e
    ), {
      getState: u,
      restoreStateFrom: f
    };
  },
  ze(fn, bt, wo, Dn, Za)
);
function vx(e) {
  return { align: "start", index: 0, offset: e.scrollTop };
}
const bx = Ce(([{ topItemsIndexes: e }]) => {
  const t = Q(0);
  return ie(
    q(
      t,
      ae((n) => n >= 0),
      re((n) => Array.from({ length: n }).map((r, o) => o))
    ),
    e
  ), { topItemCount: t };
}, ze(Xn));
function cf(e) {
  let t = !1, n;
  return () => (t || (t = !0, n = e()), n);
}
const xx = cf(() => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent)), Tx = Ce(
  ([
    { deviation: e, scrollBy: t, scrollingInProgress: n, scrollTop: r },
    { isAtBottom: o, isScrolling: i, lastJumpDueToItemResize: s, scrollDirection: a },
    { listState: c },
    { beforeUnshiftWith: u, gap: f, shiftWithOffset: d, sizes: h },
    { log: g },
    { recalcInProgress: v }
  ]) => {
    const p = Nt(
      q(
        c,
        me(s),
        on(
          ([, b, T, S], [{ bottom: E, items: x, offsetBottom: w, totalCount: C }, P]) => {
            const k = E + w;
            let m = 0;
            return T === C && b.length > 0 && x.length > 0 && (x[0].originalIndex === 0 && b[0].originalIndex === 0 || (m = k - S, m !== 0 && (m += P))), [m, x, C, k];
          },
          [0, [], 0, 0]
        ),
        ae(([b]) => b !== 0),
        me(r, a, n, o, g, v),
        ae(([, b, T, S, , , E]) => !E && !S && b !== 0 && T === co),
        re(([[b], , , , , T]) => (T("Upward scrolling compensation", { amount: b }, $t.DEBUG), b))
      )
    );
    function y(b) {
      b > 0 ? (pe(t, { behavior: "auto", top: -b }), pe(e, 0)) : (pe(e, 0), pe(t, { behavior: "auto", top: -b }));
    }
    return Ie(q(p, me(e, i)), ([b, T, S]) => {
      S && xx() ? pe(e, T - b) : y(-b);
    }), Ie(
      q(
        nt(ht(i, !1), e, v),
        ae(([b, T, S]) => !b && !S && T !== 0),
        re(([b, T]) => T),
        En(1)
      ),
      y
    ), ie(
      q(
        d,
        re((b) => ({ top: -b }))
      ),
      t
    ), Ie(
      q(
        u,
        me(h, f),
        re(([b, { groupIndices: T, lastSize: S, sizeTree: E }, x]) => {
          function w(C) {
            return C * (S + x);
          }
          if (T.length === 0)
            return w(b);
          {
            let C = 0;
            const P = so(E, 0);
            let k = 0, m = 0;
            for (; k < b; ) {
              k++, C += P;
              let R = T.length === m + 1 ? 1 / 0 : T[m + 1] - T[m] - 1;
              k + R > b && (C -= P, R = b - k + 1), k += R, C += w(R), m++;
            }
            return C;
          }
        })
      ),
      (b) => {
        pe(e, b), requestAnimationFrame(() => {
          pe(t, { top: b }), requestAnimationFrame(() => {
            pe(e, 0), pe(v, !1);
          });
        });
      }
    ), { deviation: e };
  },
  ze(bt, Eo, Xn, fn, An, Ga)
), wx = Ce(
  ([
    e,
    t,
    n,
    r,
    o,
    i,
    s,
    a,
    c,
    u
  ]) => ({
    ...e,
    ...t,
    ...n,
    ...r,
    ...o,
    ...i,
    ...s,
    ...a,
    ...c,
    ...u
  }),
  ze(
    Qa,
    px,
    Dn,
    lf,
    af,
    mx,
    ux,
    Za,
    gx,
    An
  )
), uf = Ce(
  ([
    {
      data: e,
      defaultItemSize: t,
      firstItemIndex: n,
      fixedItemSize: r,
      gap: o,
      groupIndices: i,
      itemSize: s,
      sizeRanges: a,
      sizes: c,
      statefulTotalCount: u,
      totalCount: f,
      trackItemSizes: d
    },
    { initialItemFinalLocationReached: h, initialTopMostItemIndex: g, scrolledToInitialItem: v },
    p,
    y,
    b,
    { listState: T, topItemsIndexes: S, ...E },
    { scrollToIndex: x },
    w,
    { topItemCount: C },
    { groupCounts: P },
    k
  ]) => (ie(E.rangeChanged, k.scrollSeekRangeChanged), ie(
    q(
      k.windowViewportRect,
      re((m) => m.visibleHeight)
    ),
    p.viewportHeight
  ), {
    data: e,
    defaultItemHeight: t,
    firstItemIndex: n,
    fixedItemHeight: r,
    gap: o,
    groupCounts: P,
    initialItemFinalLocationReached: h,
    initialTopMostItemIndex: g,
    scrolledToInitialItem: v,
    sizeRanges: a,
    topItemCount: C,
    topItemsIndexes: S,
    // input
    totalCount: f,
    ...b,
    groupIndices: i,
    itemSize: s,
    listState: T,
    scrollToIndex: x,
    // output
    statefulTotalCount: u,
    trackItemSizes: d,
    // exported from stateFlagsSystem
    ...E,
    // the bag of IO from featureGroup1System
    ...k,
    ...p,
    sizes: c,
    ...y
  }),
  ze(
    fn,
    wo,
    bt,
    yx,
    fx,
    Xn,
    To,
    Tx,
    bx,
    nf,
    wx
  )
);
function Ex(e, t) {
  const n = {}, r = {};
  let o = 0;
  const i = e.length;
  for (; o < i; )
    r[e[o]] = 1, o += 1;
  for (const s in t)
    Object.hasOwn(r, s) || (n[s] = t[s]);
  return n;
}
const jo = typeof document < "u" ? $.useLayoutEffect : $.useEffect;
function df(e, t, n) {
  const r = Object.keys(t.required || {}), o = Object.keys(t.optional || {}), i = Object.keys(t.methods || {}), s = Object.keys(t.events || {}), a = $.createContext({});
  function c(y, b) {
    y.propsReady && pe(y.propsReady, !1);
    for (const T of r) {
      const S = y[t.required[T]];
      pe(S, b[T]);
    }
    for (const T of o)
      if (T in b) {
        const S = y[t.optional[T]];
        pe(S, b[T]);
      }
    y.propsReady && pe(y.propsReady, !0);
  }
  function u(y) {
    return i.reduce((b, T) => (b[T] = (S) => {
      const E = y[t.methods[T]];
      pe(E, S);
    }, b), {});
  }
  function f(y) {
    return s.reduce((b, T) => (b[T] = L0(y[t.events[T]]), b), {});
  }
  const d = $.forwardRef((y, b) => {
    const { children: T, ...S } = y, [E] = $.useState(() => Ui(z0(e), (C) => {
      c(C, S);
    })), [x] = $.useState(Oc(f, E));
    jo(() => {
      for (const C of s)
        C in S && Ie(x[C], S[C]);
      return () => {
        Object.values(x).map(Ya);
      };
    }, [S, x, E]), jo(() => {
      c(E, S);
    }), $.useImperativeHandle(b, Cc(u(E)));
    const w = n;
    return /* @__PURE__ */ M(a.Provider, { value: E, children: n ? /* @__PURE__ */ M(w, { ...Ex([...r, ...o, ...s], S), children: T }) : T });
  }), h = (y) => $.useCallback(Wd(pe, $.useContext(a)[y]), [y]), g = (y) => {
    const b = $.useContext(a)[y], T = $.useCallback(
      (S) => Ie(b, S),
      [b]
    );
    return $.useSyncExternalStore(
      T,
      () => mt(b),
      () => mt(b)
    );
  }, v = (y) => {
    const b = $.useContext(a)[y], [T, S] = $.useState(Oc(mt, b));
    return jo(
      () => Ie(b, (E) => {
        E !== T && S(Cc(E));
      }),
      [b, T]
    ), T;
  }, p = $.version.startsWith("18") ? g : v;
  return {
    Component: d,
    useEmitter: (y, b) => {
      const T = $.useContext(a)[y];
      jo(() => Ie(T, b), [b, T]);
    },
    useEmitterValue: p,
    usePublisher: h
  };
}
const ff = $.createContext(void 0), pf = $.createContext(void 0), mf = typeof document < "u" ? $.useLayoutEffect : $.useEffect;
function ys(e) {
  return "self" in e;
}
function Sx(e) {
  return "body" in e;
}
function hf(e, t, n, r = Rr, o, i) {
  const s = $.useRef(null), a = $.useRef(null), c = $.useRef(null), u = $.useCallback(
    (h) => {
      let g, v, p;
      const y = h.target;
      if (Sx(y) || ys(y)) {
        const T = ys(y) ? y : y.defaultView;
        p = i ? T.scrollX : T.scrollY, g = i ? T.document.documentElement.scrollWidth : T.document.documentElement.scrollHeight, v = i ? T.innerWidth : T.innerHeight;
      } else
        p = i ? y.scrollLeft : y.scrollTop, g = i ? y.scrollWidth : y.scrollHeight, v = i ? y.offsetWidth : y.offsetHeight;
      const b = () => {
        e({
          scrollHeight: g,
          scrollTop: Math.max(p, 0),
          viewportHeight: v
        });
      };
      h.suppressFlushSync ? b() : ar.flushSync(b), a.current !== null && (p === a.current || p <= 0 || p === g - v) && (a.current = null, t(!0), c.current && (clearTimeout(c.current), c.current = null));
    },
    [e, t]
  );
  $.useEffect(() => {
    const h = o || s.current;
    return r(o || s.current), u({ suppressFlushSync: !0, target: h }), h.addEventListener("scroll", u, { passive: !0 }), () => {
      r(null), h.removeEventListener("scroll", u);
    };
  }, [s, u, n, r, o]);
  function f(h) {
    const g = s.current;
    if (!g || (i ? "offsetWidth" in g && g.offsetWidth === 0 : "offsetHeight" in g && g.offsetHeight === 0))
      return;
    const v = h.behavior === "smooth";
    let p, y, b;
    ys(g) ? (y = Math.max(
      Pn(g.document.documentElement, i ? "width" : "height"),
      i ? g.document.documentElement.scrollWidth : g.document.documentElement.scrollHeight
    ), p = i ? g.innerWidth : g.innerHeight, b = i ? window.scrollX : window.scrollY) : (y = g[i ? "scrollWidth" : "scrollHeight"], p = Pn(g, i ? "width" : "height"), b = g[i ? "scrollLeft" : "scrollTop"]);
    const T = y - p;
    if (h.top = Math.ceil(Math.max(Math.min(T, h.top), 0)), of(p, y) || h.top === b) {
      e({ scrollHeight: y, scrollTop: b, viewportHeight: p }), v && t(!0);
      return;
    }
    v ? (a.current = h.top, c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      c.current = null, a.current = null, t(!0);
    }, 1e3)) : a.current = null, i && (h = { behavior: h.behavior, left: h.top }), g.scrollTo(h);
  }
  function d(h) {
    i && (h = { behavior: h.behavior, left: h.top }), s.current.scrollBy(h);
  }
  return { scrollByCallback: d, scrollerRef: s, scrollToCallback: f };
}
const vs = "-webkit-sticky", Bc = "sticky", gf = cf(() => {
  if (typeof document > "u")
    return Bc;
  const e = document.createElement("div");
  return e.style.position = vs, e.style.position === vs ? vs : Bc;
});
function el(e) {
  return e;
}
const Cx = /* @__PURE__ */ Ce(() => {
  const e = Q((c) => `Item ${c}`), t = Q(null), n = Q((c) => `Group ${c}`), r = Q({}), o = Q(el), i = Q("div"), s = Q(Rr), a = (c, u = null) => ht(
    q(
      r,
      re((f) => f[c]),
      Le()
    ),
    u
  );
  return {
    components: r,
    computeItemKey: o,
    context: t,
    EmptyPlaceholder: a("EmptyPlaceholder"),
    FooterComponent: a("Footer"),
    GroupComponent: a("Group", "div"),
    groupContent: n,
    HeaderComponent: a("Header"),
    HeaderFooterTag: i,
    ItemComponent: a("Item", "div"),
    itemContent: e,
    ListComponent: a("List", "div"),
    ScrollerComponent: a("Scroller", "div"),
    scrollerRef: s,
    ScrollSeekPlaceholder: a("ScrollSeekPlaceholder"),
    TopItemListComponent: a("TopItemList")
  };
}), Ox = /* @__PURE__ */ Ce(
  ([e, t]) => ({ ...e, ...t }),
  ze(uf, Cx)
), Rx = ({ height: e }) => /* @__PURE__ */ M("div", { style: { height: e } }), Px = { overflowAnchor: "none", position: gf(), zIndex: 1 }, yf = { overflowAnchor: "none" }, kx = { ...yf, display: "inline-block", height: "100%" }, Lc = /* @__PURE__ */ $.memo(function({ showTopList: e = !1 }) {
  const t = ce("listState"), n = jt("sizeRanges"), r = ce("useWindowScroll"), o = ce("customScrollParent"), i = jt("windowScrollContainerState"), s = jt("scrollContainerState"), a = o || r ? i : s, c = ce("itemContent"), u = ce("context"), f = ce("groupContent"), d = ce("trackItemSizes"), h = ce("itemSize"), g = ce("log"), v = jt("gap"), p = ce("horizontalDirection"), { callbackRef: y } = H0(
    n,
    h,
    d,
    e ? Rr : a,
    g,
    v,
    o,
    p,
    ce("skipAnimationFrameInResizeObserver")
  ), [b, T] = $.useState(0);
  tl("deviation", (A) => {
    b !== A && T(A);
  });
  const S = ce("EmptyPlaceholder"), E = ce("ScrollSeekPlaceholder") || Rx, x = ce("ListComponent"), w = ce("ItemComponent"), C = ce("GroupComponent"), P = ce("computeItemKey"), k = ce("isSeeking"), m = ce("groupIndices").length > 0, R = ce("alignToBottom"), _ = ce("initialItemFinalLocationReached"), B = e ? {} : {
    boxSizing: "border-box",
    ...p ? {
      display: "inline-block",
      height: "100%",
      marginLeft: b !== 0 ? b : R ? "auto" : 0,
      paddingLeft: t.offsetTop,
      paddingRight: t.offsetBottom,
      whiteSpace: "nowrap"
    } : {
      marginTop: b !== 0 ? b : R ? "auto" : 0,
      paddingBottom: t.offsetBottom,
      paddingTop: t.offsetTop
    },
    ..._ ? {} : { visibility: "hidden" }
  };
  return !e && t.totalCount === 0 && S ? /* @__PURE__ */ M(S, { ...ut(S, u) }) : /* @__PURE__ */ M(
    x,
    {
      ...ut(x, u),
      "data-testid": e ? "virtuoso-top-item-list" : "virtuoso-item-list",
      ref: y,
      style: B,
      children: (e ? t.topItems : t.items).map((A) => {
        const L = A.originalIndex, I = P(L + t.firstItemIndex, A.data, u);
        return k ? /* @__PURE__ */ Hn(
          E,
          {
            ...ut(E, u),
            height: A.size,
            index: A.index,
            key: I,
            type: A.type || "item",
            ...A.type === "group" ? {} : { groupIndex: A.groupIndex }
          }
        ) : A.type === "group" ? /* @__PURE__ */ Hn(
          C,
          {
            ...ut(C, u),
            "data-index": L,
            "data-item-index": A.index,
            "data-known-size": A.size,
            key: I,
            style: Px
          },
          f(A.index, u)
        ) : /* @__PURE__ */ Hn(
          w,
          {
            ...ut(w, u),
            ...$x(w, A.data),
            "data-index": L,
            "data-item-group-index": A.groupIndex,
            "data-item-index": A.index,
            "data-known-size": A.size,
            key: I,
            style: p ? kx : yf
          },
          m ? c(A.index, A.groupIndex, A.data, u) : c(A.index, A.data, u)
        );
      })
    }
  );
}), Ix = {
  height: "100%",
  outline: "none",
  overflowY: "auto",
  position: "relative",
  WebkitOverflowScrolling: "touch"
}, Mx = {
  outline: "none",
  overflowX: "auto",
  position: "relative"
}, Gi = (e) => ({
  height: "100%",
  position: "absolute",
  top: 0,
  width: "100%",
  ...e ? { display: "flex", flexDirection: "column" } : {}
}), Nx = {
  position: gf(),
  top: 0,
  width: "100%",
  zIndex: 1
};
function ut(e, t) {
  if (typeof e != "string")
    return { context: t };
}
function $x(e, t) {
  return { item: typeof e == "string" ? void 0 : t };
}
const Ax = /* @__PURE__ */ $.memo(function() {
  const e = ce("HeaderComponent"), t = jt("headerHeight"), n = ce("HeaderFooterTag"), r = Kn(
    $.useMemo(
      () => (i) => {
        t(Pn(i, "height"));
      },
      [t]
    ),
    !0,
    ce("skipAnimationFrameInResizeObserver")
  ), o = ce("context");
  return e ? /* @__PURE__ */ M(n, { ref: r, children: /* @__PURE__ */ M(e, { ...ut(e, o) }) }) : null;
}), Dx = /* @__PURE__ */ $.memo(function() {
  const e = ce("FooterComponent"), t = jt("footerHeight"), n = ce("HeaderFooterTag"), r = Kn(
    $.useMemo(
      () => (i) => {
        t(Pn(i, "height"));
      },
      [t]
    ),
    !0,
    ce("skipAnimationFrameInResizeObserver")
  ), o = ce("context");
  return e ? /* @__PURE__ */ M(n, { ref: r, children: /* @__PURE__ */ M(e, { ...ut(e, o) }) }) : null;
});
function vf({ useEmitter: e, useEmitterValue: t, usePublisher: n }) {
  return $.memo(function({ children: r, style: o, ...i }) {
    const s = n("scrollContainerState"), a = t("ScrollerComponent"), c = n("smoothScrollTargetReached"), u = t("scrollerRef"), f = t("context"), d = t("horizontalDirection") || !1, { scrollByCallback: h, scrollerRef: g, scrollToCallback: v } = hf(
      s,
      c,
      a,
      u,
      void 0,
      d
    );
    return e("scrollTo", v), e("scrollBy", h), /* @__PURE__ */ M(
      a,
      {
        "data-testid": "virtuoso-scroller",
        "data-virtuoso-scroller": !0,
        ref: g,
        style: { ...d ? Mx : Ix, ...o },
        tabIndex: 0,
        ...i,
        ...ut(a, f),
        children: r
      }
    );
  });
}
function bf({ useEmitter: e, useEmitterValue: t, usePublisher: n }) {
  return $.memo(function({ children: r, style: o, ...i }) {
    const s = n("windowScrollContainerState"), a = t("ScrollerComponent"), c = n("smoothScrollTargetReached"), u = t("totalListHeight"), f = t("deviation"), d = t("customScrollParent"), h = t("context"), g = $.useRef(null), v = t("scrollerRef"), { scrollByCallback: p, scrollerRef: y, scrollToCallback: b } = hf(
      s,
      c,
      a,
      v,
      d
    );
    return mf(() => {
      var T;
      return y.current = d || ((T = g.current) == null ? void 0 : T.ownerDocument.defaultView), () => {
        y.current = null;
      };
    }, [y, d]), e("windowScrollTo", b), e("scrollBy", p), /* @__PURE__ */ M(
      a,
      {
        ref: g,
        "data-virtuoso-scroller": !0,
        style: { position: "relative", ...o, ...u !== 0 ? { height: u + f } : {} },
        ...i,
        ...ut(a, h),
        children: r
      }
    );
  });
}
const _x = ({ children: e }) => {
  const t = $.useContext(ff), n = jt("viewportHeight"), r = jt("fixedItemHeight"), o = ce("alignToBottom"), i = ce("horizontalDirection"), s = $.useMemo(
    () => Hd(n, (c) => Pn(c, i ? "width" : "height")),
    [n, i]
  ), a = Kn(s, !0, ce("skipAnimationFrameInResizeObserver"));
  return $.useEffect(() => {
    t && (n(t.viewportHeight), r(t.itemHeight));
  }, [t, n, r]), /* @__PURE__ */ M("div", { "data-viewport-type": "element", ref: a, style: Gi(o), children: e });
}, Bx = ({ children: e }) => {
  const t = $.useContext(ff), n = jt("windowViewportRect"), r = jt("fixedItemHeight"), o = ce("customScrollParent"), i = Yd(
    n,
    o,
    ce("skipAnimationFrameInResizeObserver")
  ), s = ce("alignToBottom");
  return $.useEffect(() => {
    t && (r(t.itemHeight), n({ offsetTop: 0, visibleHeight: t.viewportHeight, visibleWidth: 100 }));
  }, [t, n, r]), /* @__PURE__ */ M("div", { "data-viewport-type": "window", ref: i, style: Gi(s), children: e });
}, Lx = ({ children: e }) => {
  const t = ce("TopItemListComponent") || "div", n = ce("headerHeight"), r = { ...Nx, marginTop: `${n}px` }, o = ce("context");
  return /* @__PURE__ */ M(t, { style: r, ...ut(t, o), children: e });
}, jx = /* @__PURE__ */ $.memo(function(e) {
  const t = ce("useWindowScroll"), n = ce("topItemsIndexes").length > 0, r = ce("customScrollParent"), o = ce("context"), i = r || t ? Vx : Fx, s = r || t ? Bx : _x;
  return /* @__PURE__ */ je(i, { ...e, ...ut(i, o), children: [
    n && /* @__PURE__ */ M(Lx, { children: /* @__PURE__ */ M(Lc, { showTopList: !0 }) }),
    /* @__PURE__ */ je(s, { children: [
      /* @__PURE__ */ M(Ax, {}),
      /* @__PURE__ */ M(Lc, {}),
      /* @__PURE__ */ M(Dx, {})
    ] })
  ] });
}), {
  Component: zx,
  useEmitter: tl,
  useEmitterValue: ce,
  usePublisher: jt
} = /* @__PURE__ */ df(
  Ox,
  {
    events: {
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      endReached: "endReached",
      groupIndices: "groupIndices",
      isScrolling: "isScrolling",
      itemsRendered: "itemsRendered",
      rangeChanged: "rangeChanged",
      startReached: "startReached",
      totalListHeightChanged: "totalListHeightChanged"
    },
    methods: {
      autoscrollToBottom: "autoscrollToBottom",
      getState: "getState",
      scrollBy: "scrollBy",
      scrollIntoView: "scrollIntoView",
      scrollTo: "scrollTo",
      scrollToIndex: "scrollToIndex"
    },
    optional: {
      alignToBottom: "alignToBottom",
      atBottomThreshold: "atBottomThreshold",
      atTopThreshold: "atTopThreshold",
      components: "components",
      computeItemKey: "computeItemKey",
      context: "context",
      customScrollParent: "customScrollParent",
      data: "data",
      defaultItemHeight: "defaultItemHeight",
      firstItemIndex: "firstItemIndex",
      fixedItemHeight: "fixedItemHeight",
      followOutput: "followOutput",
      groupContent: "groupContent",
      groupCounts: "groupCounts",
      headerFooterTag: "HeaderFooterTag",
      horizontalDirection: "horizontalDirection",
      increaseViewportBy: "increaseViewportBy",
      initialItemCount: "initialItemCount",
      initialScrollTop: "initialScrollTop",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      itemContent: "itemContent",
      itemSize: "itemSize",
      logLevel: "logLevel",
      overscan: "overscan",
      restoreStateFrom: "restoreStateFrom",
      scrollerRef: "scrollerRef",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      skipAnimationFrameInResizeObserver: "skipAnimationFrameInResizeObserver",
      topItemCount: "topItemCount",
      totalCount: "totalCount",
      useWindowScroll: "useWindowScroll"
    },
    required: {}
  },
  jx
), Fx = /* @__PURE__ */ vf({ useEmitter: tl, useEmitterValue: ce, usePublisher: jt }), Vx = /* @__PURE__ */ bf({ useEmitter: tl, useEmitterValue: ce, usePublisher: jt }), Hx = zx, Wx = /* @__PURE__ */ Ce(() => {
  const e = Q((c) => /* @__PURE__ */ je("td", { children: [
    "Item $",
    c
  ] })), t = Q(null), n = Q(null), r = Q(null), o = Q({}), i = Q(el), s = Q(Rr), a = (c, u = null) => ht(
    q(
      o,
      re((f) => f[c]),
      Le()
    ),
    u
  );
  return {
    components: o,
    computeItemKey: i,
    context: t,
    EmptyPlaceholder: a("EmptyPlaceholder"),
    FillerRow: a("FillerRow"),
    fixedFooterContent: r,
    fixedHeaderContent: n,
    itemContent: e,
    ScrollerComponent: a("Scroller", "div"),
    scrollerRef: s,
    ScrollSeekPlaceholder: a("ScrollSeekPlaceholder"),
    TableBodyComponent: a("TableBody", "tbody"),
    TableComponent: a("Table", "table"),
    TableFooterComponent: a("TableFoot", "tfoot"),
    TableHeadComponent: a("TableHead", "thead"),
    TableRowComponent: a("TableRow", "tr")
  };
});
ze(uf, Wx);
const jc = {
  bottom: 0,
  itemHeight: 0,
  items: [],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, Ux = {
  bottom: 0,
  itemHeight: 0,
  items: [{ index: 0 }],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, { ceil: zc, floor: yi, max: Yr, min: bs, round: Fc } = Math;
function Vc(e, t, n) {
  return Array.from({ length: t - e + 1 }).map((r, o) => ({ data: n === null ? null : n[o + e], index: o + e }));
}
function Yx(e) {
  return {
    ...Ux,
    items: e
  };
}
function zo(e, t) {
  return e && e.width === t.width && e.height === t.height;
}
function qx(e, t) {
  return e && e.column === t.column && e.row === t.row;
}
const Gx = /* @__PURE__ */ Ce(
  ([
    { increaseViewportBy: e, listBoundary: t, overscan: n, visibleRange: r },
    { footerHeight: o, headerHeight: i, scrollBy: s, scrollContainerState: a, scrollTo: c, scrollTop: u, smoothScrollTargetReached: f, viewportHeight: d },
    h,
    g,
    { didMount: v, propsReady: p },
    { customScrollParent: y, useWindowScroll: b, windowScrollContainerState: T, windowScrollTo: S, windowViewportRect: E },
    x
  ]) => {
    const w = Q(0), C = Q(0), P = Q(jc), k = Q({ height: 0, width: 0 }), m = Q({ height: 0, width: 0 }), R = be(), _ = be(), B = Q(0), A = Q(null), L = Q({ column: 0, row: 0 }), I = be(), U = be(), Y = Q(!1), G = Q(0), N = Q(!0), j = Q(!1), V = Q(!1);
    Ie(
      q(
        v,
        me(G),
        ae(([D, X]) => !!X)
      ),
      () => {
        pe(N, !1);
      }
    ), Ie(
      q(
        nt(v, N, m, k, G, j),
        ae(([D, X, H, ee, , z]) => D && !X && H.height !== 0 && ee.height !== 0 && !z)
      ),
      ([, , , , D]) => {
        pe(j, !0), Xa(1, () => {
          pe(R, D);
        }), dn(q(u), () => {
          pe(t, [0, 0]), pe(N, !0);
        });
      }
    ), ie(
      q(
        U,
        ae((D) => D != null && D.scrollTop > 0),
        nn(0)
      ),
      C
    ), Ie(
      q(
        v,
        me(U),
        ae(([, D]) => D != null)
      ),
      ([, D]) => {
        D && (pe(k, D.viewport), pe(m, D.item), pe(L, D.gap), D.scrollTop > 0 && (pe(Y, !0), dn(q(u, wr(1)), (X) => {
          pe(Y, !1);
        }), pe(c, { top: D.scrollTop })));
      }
    ), ie(
      q(
        k,
        re(({ height: D }) => D)
      ),
      d
    ), ie(
      q(
        nt(
          le(k, zo),
          le(m, zo),
          le(L, (D, X) => D && D.column === X.column && D.row === X.row),
          le(u)
        ),
        re(([D, X, H, ee]) => ({
          gap: H,
          item: X,
          scrollTop: ee,
          viewport: D
        }))
      ),
      I
    ), ie(
      q(
        nt(
          le(w),
          r,
          le(L, qx),
          le(m, zo),
          le(k, zo),
          le(A),
          le(C),
          le(Y),
          le(N),
          le(G)
        ),
        ae(([, , , , , , , D]) => !D),
        re(
          ([
            D,
            [X, H],
            ee,
            z,
            se,
            ge,
            Oe,
            ,
            Ge,
            xe
          ]) => {
            const { column: we, row: de } = ee, { height: Me, width: ve } = z, { width: ne } = se;
            if (Oe === 0 && (D === 0 || ne === 0))
              return jc;
            if (ve === 0) {
              const fe = Ja(xe, D), He = fe + Math.max(Oe - 1, 0);
              return Yx(Vc(fe, He, ge));
            }
            const et = xf(ne, ve, we);
            let at, lt;
            Ge ? X === 0 && H === 0 && Oe > 0 ? (at = 0, lt = Oe - 1) : (at = et * yi((X + de) / (Me + de)), lt = et * zc((H + de) / (Me + de)) - 1, lt = bs(D - 1, Yr(lt, et - 1)), at = bs(lt, Yr(0, at))) : (at = 0, lt = -1);
            const yt = Vc(at, lt, ge), { bottom: xt, top: Rt } = Hc(se, ee, z, yt), vt = zc(D / et), ke = vt * Me + (vt - 1) * de - xt;
            return { bottom: xt, itemHeight: Me, items: yt, itemWidth: ve, offsetBottom: ke, offsetTop: Rt, top: Rt };
          }
        )
      ),
      P
    ), ie(
      q(
        A,
        ae((D) => D !== null),
        re((D) => D.length)
      ),
      w
    ), ie(
      q(
        nt(k, m, P, L),
        ae(([D, X, { items: H }]) => H.length > 0 && X.height !== 0 && D.height !== 0),
        re(([D, X, { items: H }, ee]) => {
          const { bottom: z, top: se } = Hc(D, ee, X, H);
          return [se, z];
        }),
        Le(ao)
      ),
      t
    );
    const W = Q(!1);
    ie(
      q(
        u,
        me(W),
        re(([D, X]) => X || D !== 0)
      ),
      W
    );
    const J = Nt(
      q(
        nt(P, w),
        ae(([{ items: D }]) => D.length > 0),
        me(W),
        ae(([[D, X], H]) => {
          const ee = D.items[D.items.length - 1].index === X - 1;
          return (H || D.bottom > 0 && D.itemHeight > 0 && D.offsetBottom === 0 && D.items.length === X) && ee;
        }),
        re(([[, D]]) => D - 1),
        Le()
      )
    ), te = Nt(
      q(
        le(P),
        ae(({ items: D }) => D.length > 0 && D[0].index === 0),
        nn(0),
        Le()
      )
    ), K = Nt(
      q(
        le(P),
        me(Y),
        ae(([{ items: D }, X]) => D.length > 0 && !X),
        re(([{ items: D }]) => ({
          endIndex: D[D.length - 1].index,
          startIndex: D[0].index
        })),
        Le(Qd),
        En(0)
      )
    );
    ie(K, g.scrollSeekRangeChanged), ie(
      q(
        R,
        me(k, m, w, L),
        re(([D, X, H, ee, z]) => {
          const se = rf(D), { align: ge, behavior: Oe, offset: Ge } = se;
          let xe = se.index;
          xe === "LAST" && (xe = ee - 1), xe = Yr(0, xe, bs(ee - 1, xe));
          let we = Gs(X, z, H, xe);
          return ge === "end" ? we = Fc(we - X.height + H.height) : ge === "center" && (we = Fc(we - X.height / 2 + H.height / 2)), Ge && (we += Ge), { behavior: Oe, top: we };
        })
      ),
      c
    );
    const Z = ht(
      q(
        P,
        re((D) => D.offsetBottom + D.bottom)
      ),
      0
    );
    return ie(
      q(
        E,
        re((D) => ({ height: D.visibleHeight, width: D.visibleWidth }))
      ),
      k
    ), {
      customScrollParent: y,
      // input
      data: A,
      deviation: B,
      footerHeight: o,
      gap: L,
      headerHeight: i,
      increaseViewportBy: e,
      initialItemCount: C,
      itemDimensions: m,
      overscan: n,
      restoreStateFrom: U,
      scrollBy: s,
      scrollContainerState: a,
      scrollHeight: _,
      scrollTo: c,
      scrollToIndex: R,
      scrollTop: u,
      smoothScrollTargetReached: f,
      totalCount: w,
      useWindowScroll: b,
      viewportDimensions: k,
      windowScrollContainerState: T,
      windowScrollTo: S,
      windowViewportRect: E,
      ...g,
      // output
      gridState: P,
      horizontalDirection: V,
      initialTopMostItemIndex: G,
      totalListHeight: Z,
      ...h,
      endReached: J,
      propsReady: p,
      rangeChanged: K,
      startReached: te,
      stateChanged: I,
      stateRestoreInProgress: Y,
      ...x
    };
  },
  ze(Qa, bt, Eo, lf, Dn, Za, An)
);
function xf(e, t, n) {
  return Yr(1, yi((e + n) / (yi(t) + n)));
}
function Hc(e, t, n, r) {
  const { height: o } = n;
  if (o === void 0 || r.length === 0)
    return { bottom: 0, top: 0 };
  const i = Gs(e, t, n, r[0].index);
  return { bottom: Gs(e, t, n, r[r.length - 1].index) + o, top: i };
}
function Gs(e, t, n, r) {
  const o = xf(e.width, n.width, t.column), i = yi(r / o), s = i * n.height + Yr(0, i - 1) * t.row;
  return s > 0 ? s + t.row : s;
}
const Kx = /* @__PURE__ */ Ce(() => {
  const e = Q((d) => `Item ${d}`), t = Q({}), n = Q(null), r = Q("virtuoso-grid-item"), o = Q("virtuoso-grid-list"), i = Q(el), s = Q("div"), a = Q(Rr), c = (d, h = null) => ht(
    q(
      t,
      re((g) => g[d]),
      Le()
    ),
    h
  ), u = Q(!1), f = Q(!1);
  return ie(le(f), u), {
    components: t,
    computeItemKey: i,
    context: n,
    FooterComponent: c("Footer"),
    HeaderComponent: c("Header"),
    headerFooterTag: s,
    itemClassName: r,
    ItemComponent: c("Item", "div"),
    itemContent: e,
    listClassName: o,
    ListComponent: c("List", "div"),
    readyStateChanged: u,
    reportReadyState: f,
    ScrollerComponent: c("Scroller", "div"),
    scrollerRef: a,
    ScrollSeekPlaceholder: c("ScrollSeekPlaceholder", "div")
  };
}), Xx = /* @__PURE__ */ Ce(
  ([e, t]) => ({ ...e, ...t }),
  ze(Gx, Kx)
), Jx = /* @__PURE__ */ $.memo(function() {
  const e = Ve("gridState"), t = Ve("listClassName"), n = Ve("itemClassName"), r = Ve("itemContent"), o = Ve("computeItemKey"), i = Ve("isSeeking"), s = zt("scrollHeight"), a = Ve("ItemComponent"), c = Ve("ListComponent"), u = Ve("ScrollSeekPlaceholder"), f = Ve("context"), d = zt("itemDimensions"), h = zt("gap"), g = Ve("log"), v = Ve("stateRestoreInProgress"), p = zt("reportReadyState"), y = Kn(
    $.useMemo(
      () => (b) => {
        const T = b.parentElement.parentElement.scrollHeight;
        s(T);
        const S = b.firstChild;
        if (S) {
          const { height: E, width: x } = S.getBoundingClientRect();
          d({ height: E, width: x });
        }
        h({
          column: Wc("column-gap", getComputedStyle(b).columnGap, g),
          row: Wc("row-gap", getComputedStyle(b).rowGap, g)
        });
      },
      [s, d, h, g]
    ),
    !0,
    !1
  );
  return mf(() => {
    e.itemHeight > 0 && e.itemWidth > 0 && p(!0);
  }, [e]), v ? null : /* @__PURE__ */ M(
    c,
    {
      className: t,
      ref: y,
      ...ut(c, f),
      "data-testid": "virtuoso-item-list",
      style: { paddingBottom: e.offsetBottom, paddingTop: e.offsetTop },
      children: e.items.map((b) => {
        const T = o(b.index, b.data, f);
        return i ? /* @__PURE__ */ M(
          u,
          {
            ...ut(u, f),
            height: e.itemHeight,
            index: b.index,
            width: e.itemWidth
          },
          T
        ) : /* @__PURE__ */ Hn(
          a,
          {
            ...ut(a, f),
            className: n,
            "data-index": b.index,
            key: T
          },
          r(b.index, b.data, f)
        );
      })
    }
  );
}), Qx = $.memo(function() {
  const e = Ve("HeaderComponent"), t = zt("headerHeight"), n = Ve("headerFooterTag"), r = Kn(
    $.useMemo(
      () => (i) => {
        t(Pn(i, "height"));
      },
      [t]
    ),
    !0,
    !1
  ), o = Ve("context");
  return e ? /* @__PURE__ */ M(n, { ref: r, children: /* @__PURE__ */ M(e, { ...ut(e, o) }) }) : null;
}), Zx = $.memo(function() {
  const e = Ve("FooterComponent"), t = zt("footerHeight"), n = Ve("headerFooterTag"), r = Kn(
    $.useMemo(
      () => (i) => {
        t(Pn(i, "height"));
      },
      [t]
    ),
    !0,
    !1
  ), o = Ve("context");
  return e ? /* @__PURE__ */ M(n, { ref: r, children: /* @__PURE__ */ M(e, { ...ut(e, o) }) }) : null;
}), eT = ({ children: e }) => {
  const t = $.useContext(pf), n = zt("itemDimensions"), r = zt("viewportDimensions"), o = Kn(
    $.useMemo(
      () => (i) => {
        r(i.getBoundingClientRect());
      },
      [r]
    ),
    !0,
    !1
  );
  return $.useEffect(() => {
    t && (r({ height: t.viewportHeight, width: t.viewportWidth }), n({ height: t.itemHeight, width: t.itemWidth }));
  }, [t, r, n]), /* @__PURE__ */ M("div", { ref: o, style: Gi(!1), children: e });
}, tT = ({ children: e }) => {
  const t = $.useContext(pf), n = zt("windowViewportRect"), r = zt("itemDimensions"), o = Ve("customScrollParent"), i = Yd(n, o, !1);
  return $.useEffect(() => {
    t && (r({ height: t.itemHeight, width: t.itemWidth }), n({ offsetTop: 0, visibleHeight: t.viewportHeight, visibleWidth: t.viewportWidth }));
  }, [t, n, r]), /* @__PURE__ */ M("div", { ref: i, style: Gi(!1), children: e });
}, nT = /* @__PURE__ */ $.memo(function({ ...e }) {
  const t = Ve("useWindowScroll"), n = Ve("customScrollParent"), r = n || t ? iT : oT, o = n || t ? tT : eT, i = Ve("context");
  return /* @__PURE__ */ M(r, { ...e, ...ut(r, i), children: /* @__PURE__ */ je(o, { children: [
    /* @__PURE__ */ M(Qx, {}),
    /* @__PURE__ */ M(Jx, {}),
    /* @__PURE__ */ M(Zx, {})
  ] }) });
}), {
  Component: rT,
  useEmitter: Tf,
  useEmitterValue: Ve,
  usePublisher: zt
} = /* @__PURE__ */ df(
  Xx,
  {
    events: {
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      endReached: "endReached",
      isScrolling: "isScrolling",
      rangeChanged: "rangeChanged",
      readyStateChanged: "readyStateChanged",
      startReached: "startReached",
      stateChanged: "stateChanged"
    },
    methods: {
      scrollBy: "scrollBy",
      scrollTo: "scrollTo",
      scrollToIndex: "scrollToIndex"
    },
    optional: {
      components: "components",
      computeItemKey: "computeItemKey",
      context: "context",
      customScrollParent: "customScrollParent",
      data: "data",
      headerFooterTag: "headerFooterTag",
      increaseViewportBy: "increaseViewportBy",
      initialItemCount: "initialItemCount",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      itemClassName: "itemClassName",
      itemContent: "itemContent",
      listClassName: "listClassName",
      logLevel: "logLevel",
      overscan: "overscan",
      restoreStateFrom: "restoreStateFrom",
      scrollerRef: "scrollerRef",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      totalCount: "totalCount",
      useWindowScroll: "useWindowScroll"
    }
  },
  nT
), oT = /* @__PURE__ */ vf({ useEmitter: Tf, useEmitterValue: Ve, usePublisher: zt }), iT = /* @__PURE__ */ bf({ useEmitter: Tf, useEmitterValue: Ve, usePublisher: zt });
function Wc(e, t, n) {
  return t !== "normal" && !(t != null && t.endsWith("px")) && n(`${e} was not resolved to pixel value correctly`, t, $t.WARN), t === "normal" ? 0 : parseInt(t ?? "0", 10);
}
const sT = rT, sr = {
  xs: 1,
  // 1行1个
  sm: 1,
  // 1行1个
  md: 2,
  // 1行2个
  lg: 3,
  // 1行3个
  xl: 4
  // 1行4个
}, aT = [], Uc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (u, f) => {
    const d = typeof u == "function" ? u(t) : u;
    if (!Object.is(d, t)) {
      const h = t;
      t = f ?? (typeof d != "object" || d === null) ? d : Object.assign({}, t, d), n.forEach((g) => g(t, h));
    }
  }, o = () => t, a = { setState: r, getState: o, getInitialState: () => c, subscribe: (u) => (n.add(u), () => n.delete(u)) }, c = t = e(r, o, a);
  return a;
}, lT = (e) => e ? Uc(e) : Uc, cT = (e) => e;
function wf(e, t = cT) {
  const n = $.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return $.useDebugValue(n), n;
}
const Yc = (e) => {
  const t = lT(e), n = (r) => wf(t, r);
  return Object.assign(n, t), n;
}, nl = (e) => e ? Yc(e) : Yc, qc = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, Ks = /* @__PURE__ */ new Map(), Fo = (e) => {
  const t = Ks.get(e);
  return t ? Object.fromEntries(
    Object.entries(t.stores).map(([n, r]) => [n, r.getState()])
  ) : {};
}, uT = (e, t, n) => {
  if (e === void 0)
    return {
      type: "untracked",
      connection: t.connect(n)
    };
  const r = Ks.get(n.name);
  if (r)
    return { type: "tracked", store: e, ...r };
  const o = {
    connection: t.connect(n),
    stores: {}
  };
  return Ks.set(n.name, o), { type: "tracked", store: e, ...o };
}, dT = (e, t = {}) => (n, r, o) => {
  const { enabled: i, anonymousActionType: s, store: a, ...c } = t;
  let u;
  try {
    u = (i ?? (qc ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!u)
    return e(n, r, o);
  const { connection: f, ...d } = uT(a, u, c);
  let h = !0;
  o.setState = (p, y, b) => {
    const T = n(p, y);
    if (!h) return T;
    const S = b === void 0 ? { type: s || "anonymous" } : typeof b == "string" ? { type: b } : b;
    return a === void 0 ? (f == null || f.send(S, r()), T) : (f == null || f.send(
      {
        ...S,
        type: `${a}/${S.type}`
      },
      {
        ...Fo(c.name),
        [a]: o.getState()
      }
    ), T);
  };
  const g = (...p) => {
    const y = h;
    h = !1, n(...p), h = y;
  }, v = e(o.setState, r, o);
  if (d.type === "untracked" ? f == null || f.init(v) : (d.stores[d.store] = o, f == null || f.init(
    Object.fromEntries(
      Object.entries(d.stores).map(([p, y]) => [
        p,
        p === d.store ? v : y.getState()
      ])
    )
  )), o.dispatchFromDevtools && typeof o.dispatch == "function") {
    let p = !1;
    const y = o.dispatch;
    o.dispatch = (...b) => {
      (qc ? "production" : void 0) !== "production" && b[0].type === "__setState" && !p && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), p = !0), y(...b);
    };
  }
  return f.subscribe((p) => {
    var y;
    switch (p.type) {
      case "ACTION":
        if (typeof p.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return xs(
          p.payload,
          (b) => {
            if (b.type === "__setState") {
              if (a === void 0) {
                g(b.state);
                return;
              }
              Object.keys(b.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const T = b.state[a];
              if (T == null)
                return;
              JSON.stringify(o.getState()) !== JSON.stringify(T) && g(T);
              return;
            }
            o.dispatchFromDevtools && typeof o.dispatch == "function" && o.dispatch(b);
          }
        );
      case "DISPATCH":
        switch (p.payload.type) {
          case "RESET":
            return g(v), a === void 0 ? f == null ? void 0 : f.init(o.getState()) : f == null ? void 0 : f.init(Fo(c.name));
          case "COMMIT":
            if (a === void 0) {
              f == null || f.init(o.getState());
              return;
            }
            return f == null ? void 0 : f.init(Fo(c.name));
          case "ROLLBACK":
            return xs(p.state, (b) => {
              if (a === void 0) {
                g(b), f == null || f.init(o.getState());
                return;
              }
              g(b[a]), f == null || f.init(Fo(c.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return xs(p.state, (b) => {
              if (a === void 0) {
                g(b);
                return;
              }
              JSON.stringify(o.getState()) !== JSON.stringify(b[a]) && g(b[a]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: b } = p.payload, T = (y = b.computedStates.slice(-1)[0]) == null ? void 0 : y.state;
            if (!T) return;
            g(a === void 0 ? T : T[a]), f == null || f.send(
              null,
              // FIXME no-any
              b
            );
            return;
          }
          case "PAUSE_RECORDING":
            return h = !h;
        }
        return;
    }
  }), v;
}, Ef = dT, xs = (e, t) => {
  let n;
  try {
    n = JSON.parse(e);
  } catch (r) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      r
    );
  }
  n !== void 0 && t(n);
};
function fT(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (o) => {
      var i;
      const s = (c) => c === null ? null : JSON.parse(c, void 0), a = (i = n.getItem(o)) != null ? i : null;
      return a instanceof Promise ? a.then(s) : s(a);
    },
    setItem: (o, i) => n.setItem(
      o,
      JSON.stringify(i, void 0)
    ),
    removeItem: (o) => n.removeItem(o)
  };
}
const Xs = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return Xs(r)(n);
      },
      catch(r) {
        return this;
      }
    };
  } catch (n) {
    return {
      then(r) {
        return this;
      },
      catch(r) {
        return Xs(r)(n);
      }
    };
  }
}, pT = (e, t) => (n, r, o) => {
  let i = {
    storage: fT(() => localStorage),
    partialize: (p) => p,
    version: 0,
    merge: (p, y) => ({
      ...y,
      ...p
    }),
    ...t
  }, s = !1;
  const a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let u = i.storage;
  if (!u)
    return e(
      (...p) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), n(...p);
      },
      r,
      o
    );
  const f = () => {
    const p = i.partialize({ ...r() });
    return u.setItem(i.name, {
      state: p,
      version: i.version
    });
  }, d = o.setState;
  o.setState = (p, y) => {
    d(p, y), f();
  };
  const h = e(
    (...p) => {
      n(...p), f();
    },
    r,
    o
  );
  o.getInitialState = () => h;
  let g;
  const v = () => {
    var p, y;
    if (!u) return;
    s = !1, a.forEach((T) => {
      var S;
      return T((S = r()) != null ? S : h);
    });
    const b = ((y = i.onRehydrateStorage) == null ? void 0 : y.call(i, (p = r()) != null ? p : h)) || void 0;
    return Xs(u.getItem.bind(u))(i.name).then((T) => {
      if (T)
        if (typeof T.version == "number" && T.version !== i.version) {
          if (i.migrate) {
            const S = i.migrate(
              T.state,
              T.version
            );
            return S instanceof Promise ? S.then((E) => [!0, E]) : [!0, S];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, T.state];
      return [!1, void 0];
    }).then((T) => {
      var S;
      const [E, x] = T;
      if (g = i.merge(
        x,
        (S = r()) != null ? S : h
      ), n(g, !0), E)
        return f();
    }).then(() => {
      b == null || b(g, void 0), g = r(), s = !0, c.forEach((T) => T(g));
    }).catch((T) => {
      b == null || b(void 0, T);
    });
  };
  return o.persist = {
    setOptions: (p) => {
      i = {
        ...i,
        ...p
      }, p.storage && (u = p.storage);
    },
    clearStorage: () => {
      u == null || u.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => v(),
    hasHydrated: () => s,
    onHydrate: (p) => (a.add(p), () => {
      a.delete(p);
    }),
    onFinishHydration: (p) => (c.add(p), () => {
      c.delete(p);
    })
  }, i.skipHydration || v(), g || h;
}, Sf = pT;
function Gc() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
const mT = nl()(
  Ef(
    Sf(
      (e) => ({
        themeMode: Gc(),
        setThemeMode: (t) => e({ themeMode: t }),
        toggleThemeMode: () => e((t) => ({ themeMode: t.themeMode === "dark" ? "light" : "dark" })),
        resetThemeMode: () => e({ themeMode: Gc() })
      }),
      {
        name: "VENOMOUS_UI__THEME_MODE"
      }
    )
  )
);
function Cf() {
  const e = wf(mT);
  return {
    ...e,
    isDarkMode: e.themeMode === "dark"
  };
}
var Of = /* @__PURE__ */ ((e) => (e.Skyblue = "Skyblue", e.Teal = "Teal", e))(Of || {});
const Rf = {
  Skyblue: "#0097a7",
  Teal: "#009688"
};
function Kc(e) {
  const t = Rf[e];
  return {
    main: t,
    light: Di(t, 0.5),
    dark: Ai(t, 0.5),
    opacity: qt(t, 0.5),
    contrastText: "#fff"
  };
}
const hT = nl()(
  Ef(
    Sf(
      (e) => ({
        themePaletteName: "Skyblue",
        themePalette: Kc(
          "Skyblue"
          /* Skyblue */
        ),
        setThemePaletteName: (t) => e({ themePaletteName: t, themePalette: Kc(t) })
      }),
      {
        name: "VENOMOUS_UI__THEME_PALETTE"
      }
    )
  )
);
function gT() {
  return {
    ...hT(),
    allPaletteNames: Object.keys(Of),
    allPaletteMainColors: Rf
  };
}
const Dr = Mu({
  themeId: Gt
});
function yT() {
  const { breakpoints: e } = xn(), t = Dr(e.down("sm")), n = Dr(e.between("sm", "md")), r = Dr(e.between("md", "lg")), o = Dr(e.between("lg", "xl")), i = Dr(e.up("xl")), s = gn(() => {
    var a;
    return ((a = [
      ["xs", t],
      ["sm", n],
      ["md", r],
      ["lg", o],
      ["xl", i]
    ].find(([, c]) => c)) == null ? void 0 : a[0].toString()) || "xs";
  }, [t, n, r, o, i]);
  return {
    isXs: t,
    isSm: n,
    isMd: r,
    isLg: o,
    isXl: i,
    breakpoints: {
      current: s,
      unit: "px",
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
      }
    }
  };
}
function vT({
  gridStyle: e,
  gridItemStyle: t,
  cols: n
}) {
  const { isXs: r, isSm: o, isMd: i, isLg: s } = yT(), a = gn(() => {
    let u;
    return r ? u = (n == null ? void 0 : n.xs) ?? sr.xs : o ? u = (n == null ? void 0 : n.sm) ?? sr.sm : i ? u = (n == null ? void 0 : n.md) ?? sr.md : s ? u = (n == null ? void 0 : n.lg) ?? sr.lg : u = (n == null ? void 0 : n.xl) ?? sr.xl, `${100 / u}%`;
  }, [r, o, i, s, n]);
  return {
    gridComponents: gn(
      () => ({
        List: ({ ref: u, style: f, children: d, ...h }) => /* @__PURE__ */ M(
          "div",
          {
            ref: u,
            ...h,
            style: { display: "flex", flexWrap: "wrap", ...f, ...e },
            children: d
          }
        ),
        Item: ({ children: u, ...f }) => /* @__PURE__ */ M(
          "div",
          {
            ...f,
            style: {
              width: a,
              display: "flex",
              boxSizing: "border-box",
              flex: "none",
              alignContent: "stretch",
              padding: "0.5rem",
              ...t
            },
            children: u
          }
        )
      }),
      [a, e, t]
    )
  };
}
const bT = ({
  height: e,
  width: t,
  items: n = aT,
  renderGridItem: r,
  gridStyle: o,
  gridItemStyle: i,
  cols: s = sr
}) => {
  const { gridComponents: a } = vT({ gridStyle: o, gridItemStyle: i, cols: s });
  return /* @__PURE__ */ M(
    qn,
    {
      id: "VenomousUI-Grid",
      sx: {
        height: e || "100%",
        width: t || "100%",
        "& > *": {
          flex: "unset",
          width: "100%"
        }
      },
      children: /* @__PURE__ */ M(
        sT,
        {
          style: { height: "100%" },
          totalCount: n.length,
          components: a,
          itemContent: (c) => r(n[c], c)
        }
      )
    }
  );
}, Bw = rt(bT), Pf = rt(({ height: e, width: t, items: n, renderItem: r, sx: o }) => /* @__PURE__ */ M(qn, { id: "VenomousUI-Menu", sx: { height: e || "100%", width: t || "100%", ...o }, children: /* @__PURE__ */ M(
  Hx,
  {
    style: { height: "100%", width: "100%" },
    totalCount: n == null ? void 0 : n.length,
    data: n,
    itemContent: (i, s) => r ? r(s, i) : s.label
  }
) }));
Pf.displayName = "Menu";
const Js = rt(
  ({
    icon: e = "",
    label: t,
    clickable: n,
    disabled: r,
    onClick: o,
    onMouseEnter: i,
    onMouseLeave: s,
    isActive: a,
    sx: c
  }) => n ? /* @__PURE__ */ M(
    oo,
    {
      id: "VenomousUI-MenuItem",
      isGhost: !0,
      text: /* @__PURE__ */ M(un, { text: t, ellipsis: !0 }),
      icon: e,
      iconWidth: 28,
      iconPosition: "start",
      onClick: o,
      onMouseEnter: i,
      onMouseLeave: s,
      disabled: r,
      color: a ? "primary" : "auto",
      sx: {
        py: 1,
        px: 2,
        transition: "background-color 0.2s ease; color 0.2s ease",
        backgroundColor: a ? "divider" : "transparent",
        "&:hover": { backgroundColor: "divider" },
        ...c
      }
    }
  ) : /* @__PURE__ */ je(qn, { row: !0, py: 1, px: 2, my: 1, sx: { ...c }, id: "VenomousUI-MenuItem", children: [
    /* @__PURE__ */ M(mr, { icon: e, width: 28, color: a ? "primary" : "auto" }),
    /* @__PURE__ */ M(un, { text: t, ellipsis: !0, flex: 1, bgcolor: a ? "primary" : "auto" })
  ] })
);
Js.displayName = "MenuItem";
function xT(e) {
  return it("MuiDialog", e);
}
const Ts = dt("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), rl = /* @__PURE__ */ O.createContext({});
process.env.NODE_ENV !== "production" && (rl.displayName = "DialogContext");
const TT = Te(Wa, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), wT = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: o,
    fullScreen: i
  } = e, s = {
    root: ["root"],
    container: ["container", `scroll${he(n)}`],
    paper: ["paper", `paperScroll${he(n)}`, `paperWidth${he(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
  };
  return gt(s, xT, t);
}, ET = Te(Hi, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), ST = Te("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${he(n.scroll)}`]];
  }
})({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&::after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    }
  }]
}), CT = Te(Cr, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`scrollPaper${he(n.scroll)}`], t[`paperWidth${he(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(Dt(({
  theme: e
}) => ({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  },
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "initial"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.maxWidth,
    style: {
      maxWidth: "calc(100% - 64px)"
    }
  }, {
    props: {
      maxWidth: "xs"
    },
    style: {
      maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
      [`&.${Ts.paperScrollBody}`]: {
        [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  }, ...Object.keys(e.breakpoints.values).filter((t) => t !== "xs").map((t) => ({
    props: {
      maxWidth: t
    },
    style: {
      maxWidth: `${e.breakpoints.values[t]}${e.breakpoints.unit}`,
      [`&.${Ts.paperScrollBody}`]: {
        [e.breakpoints.down(e.breakpoints.values[t] + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  })), {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "calc(100% - 64px)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullScreen,
    style: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0,
      [`&.${Ts.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), kf = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = st({
    props: t,
    name: "MuiDialog"
  }), o = xn(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": a,
    "aria-modal": c = !0,
    BackdropComponent: u,
    BackdropProps: f,
    children: d,
    className: h,
    disableEscapeKeyDown: g = !1,
    fullScreen: v = !1,
    fullWidth: p = !1,
    maxWidth: y = "sm",
    onClick: b,
    onClose: T,
    open: S,
    PaperComponent: E = Cr,
    PaperProps: x = {},
    scroll: w = "paper",
    slots: C = {},
    slotProps: P = {},
    TransitionComponent: k = Tr,
    transitionDuration: m = i,
    TransitionProps: R,
    ..._
  } = r, B = {
    ...r,
    disableEscapeKeyDown: g,
    fullScreen: v,
    fullWidth: p,
    maxWidth: y,
    scroll: w
  }, A = wT(B), L = O.useRef(), I = (se) => {
    L.current = se.target === se.currentTarget;
  }, U = (se) => {
    b && b(se), L.current && (L.current = null, T && T(se, "backdropClick"));
  }, Y = ya(a), G = O.useMemo(() => ({
    titleId: Y
  }), [Y]), N = {
    transition: k,
    ...C
  }, j = {
    transition: R,
    paper: x,
    backdrop: f,
    ...P
  }, V = {
    slots: N,
    slotProps: j
  }, [W, J] = Ze("root", {
    elementType: ET,
    shouldForwardComponentProp: !0,
    externalForwardedProps: V,
    ownerState: B,
    className: ye(A.root, h),
    ref: n
  }), [te, K] = Ze("backdrop", {
    elementType: TT,
    shouldForwardComponentProp: !0,
    externalForwardedProps: V,
    ownerState: B
  }), [Z, D] = Ze("paper", {
    elementType: CT,
    shouldForwardComponentProp: !0,
    externalForwardedProps: V,
    ownerState: B,
    className: ye(A.paper, x.className)
  }), [X, H] = Ze("container", {
    elementType: ST,
    externalForwardedProps: V,
    ownerState: B,
    className: ye(A.container)
  }), [ee, z] = Ze("transition", {
    elementType: Tr,
    externalForwardedProps: V,
    ownerState: B,
    additionalProps: {
      appear: !0,
      in: S,
      timeout: m,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ M(W, {
    closeAfterTransition: !0,
    slots: {
      backdrop: te
    },
    slotProps: {
      backdrop: {
        transitionDuration: m,
        as: u,
        ...K
      }
    },
    disableEscapeKeyDown: g,
    onClose: T,
    open: S,
    onClick: U,
    ...J,
    ..._,
    children: /* @__PURE__ */ M(ee, {
      ...z,
      children: /* @__PURE__ */ M(X, {
        onMouseDown: I,
        ...H,
        children: /* @__PURE__ */ M(Z, {
          as: E,
          elevation: 24,
          role: "dialog",
          "aria-describedby": s,
          "aria-labelledby": Y,
          "aria-modal": c,
          ...D,
          children: /* @__PURE__ */ M(rl.Provider, {
            value: G,
            children: d
          })
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (kf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": l.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": l.string,
  /**
   * Informs assistive technologies that the element is modal.
   * It's added on the element with role="dialog".
   * @default true
   */
  "aria-modal": l.oneOfType([l.oneOf(["false", "true"]), l.bool]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: l.elementType,
  /**
   * @ignore
   */
  BackdropProps: l.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: l.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: l.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: l.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: l.oneOfType([l.oneOf(["xs", "sm", "md", "lg", "xl", !1]), l.string]),
  /**
   * @ignore
   */
  onClick: l.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: l.func,
  /**
   * If `true`, the component is shown.
   */
  open: l.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: l.elementType,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @default {}
   * @deprecated Use `slotProps.paper` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PaperProps: l.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: l.oneOf(["body", "paper"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: l.shape({
    backdrop: l.oneOfType([l.func, l.object]),
    container: l.oneOfType([l.func, l.object]),
    paper: l.oneOfType([l.func, l.object]),
    root: l.oneOfType([l.func, l.object]),
    transition: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: l.shape({
    backdrop: l.elementType,
    container: l.elementType,
    paper: l.elementType,
    root: l.elementType,
    transition: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: l.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: l.oneOfType([l.number, l.shape({
    appear: l.number,
    enter: l.number,
    exit: l.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionProps: l.object
});
function OT(e) {
  return it("MuiDialogActions", e);
}
dt("MuiDialogActions", ["root", "spacing"]);
const RT = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return gt({
    root: ["root", !n && "spacing"]
  }, OT, t);
}, PT = Te("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableSpacing && t.spacing];
  }
})({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disableSpacing,
    style: {
      "& > :not(style) ~ :not(style)": {
        marginLeft: 8
      }
    }
  }]
}), If = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = st({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: o,
    disableSpacing: i = !1,
    ...s
  } = r, a = {
    ...r,
    disableSpacing: i
  }, c = RT(a);
  return /* @__PURE__ */ M(PT, {
    className: ye(c.root, o),
    ownerState: a,
    ref: n,
    ...s
  });
});
process.env.NODE_ENV !== "production" && (If.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: l.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
function kT(e) {
  return it("MuiDialogContent", e);
}
dt("MuiDialogContent", ["root", "dividers"]);
function IT(e) {
  return it("MuiDialogTitle", e);
}
const MT = dt("MuiDialogTitle", ["root"]), NT = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return gt({
    root: ["root", n && "dividers"]
  }, kT, t);
}, $T = Te("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(Dt(({
  theme: e
}) => ({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px",
  variants: [{
    props: ({
      ownerState: t
    }) => t.dividers,
    style: {
      padding: "16px 24px",
      borderTop: `1px solid ${(e.vars || e).palette.divider}`,
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dividers,
    style: {
      [`.${MT.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), Mf = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = st({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: o,
    dividers: i = !1,
    ...s
  } = r, a = {
    ...r,
    dividers: i
  }, c = NT(a);
  return /* @__PURE__ */ M($T, {
    className: ye(c.root, o),
    ownerState: a,
    ref: n,
    ...s
  });
});
process.env.NODE_ENV !== "production" && (Mf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: l.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const AT = (e) => {
  const {
    classes: t
  } = e;
  return gt({
    root: ["root"]
  }, IT, t);
}, DT = Te(Va, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), Nf = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = st({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, a = r, c = AT(a), {
    titleId: u = i
  } = O.useContext(rl);
  return /* @__PURE__ */ M(DT, {
    component: "h2",
    className: ye(c.root, o),
    ownerState: a,
    ref: n,
    variant: "h6",
    id: i ?? u,
    ...s
  });
});
process.env.NODE_ENV !== "production" && (Nf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * @ignore
   */
  id: l.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const _T = rt(
  ({
    isOpen: e,
    closeModal: t,
    isPrevented: n = !0,
    onSubmit: r,
    onClose: o,
    isSubmitting: i = !1,
    children: s,
    title: a = "",
    contentMessage: c = "",
    cancelButtonText: u = "Cancel",
    confirmButtonText: f = "Confirm",
    confirmButtonIsDisabled: d = !1,
    cancelButtonIsDisabled: h = !1,
    sx: g,
    ...v
  }) => {
    const p = Ff(e);
    ti(() => {
      p.current && !e && (o == null || o()), p.current = e;
    }, [e, o]);
    const y = gn(
      () => /* @__PURE__ */ je(ea, { children: [
        /* @__PURE__ */ M(Nf, { children: /* @__PURE__ */ M(un, { isTitle: !0, text: a }) }),
        /* @__PURE__ */ M(Mf, { children: /* @__PURE__ */ M(un, { text: c }) }),
        /* @__PURE__ */ je(If, { children: [
          /* @__PURE__ */ M(
            oo,
            {
              text: u,
              onClick: t,
              disabled: h || i,
              isOutlined: !0
            }
          ),
          /* @__PURE__ */ M(
            oo,
            {
              text: f,
              onClick: () => {
                (async () => (await (r == null ? void 0 : r()), t()))();
              },
              disabled: d,
              loading: i,
              autoFocus: !0
            }
          )
        ] })
      ] }),
      [
        h,
        u,
        t,
        d,
        f,
        c,
        r,
        i,
        a
      ]
    );
    return /* @__PURE__ */ je(
      kf,
      {
        id: "VenomousUI-Modal",
        open: e,
        onClose: n ? void 0 : t,
        scroll: "paper",
        keepMounted: !0,
        sx: { ...g },
        ...v,
        children: [
          !s && y,
          s
        ]
      }
    );
  }
);
_T.displayName = "Modal";
function Lw() {
  const [e, t] = Vn(!1), n = sn(() => t(!0), []), r = sn(() => t(!1), []);
  return {
    isOpen: e,
    openModal: n,
    closeModal: r
  };
}
function BT(e) {
  return typeof e == "string";
}
function LT(e) {
  return it("MuiPopover", e);
}
dt("MuiPopover", ["root", "paper"]);
function Xc(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Jc(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Qc(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function jr(e) {
  return typeof e == "function" ? e() : e;
}
const jT = (e) => {
  const {
    classes: t
  } = e;
  return gt({
    root: ["root"],
    paper: ["paper"]
  }, LT, t);
}, zT = Te(Hi, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), FT = Te(Cr, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), $f = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = st({
    props: t,
    name: "MuiPopover"
  }), {
    action: o,
    anchorEl: i,
    anchorOrigin: s = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: a,
    anchorReference: c = "anchorEl",
    children: u,
    className: f,
    container: d,
    elevation: h = 8,
    marginThreshold: g = 16,
    open: v,
    PaperProps: p = {},
    // TODO: remove in v7
    slots: y = {},
    slotProps: b = {},
    transformOrigin: T = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: S,
    // TODO: remove in v7
    transitionDuration: E = "auto",
    TransitionProps: x = {},
    // TODO: remove in v7
    disableScrollLock: w = !1,
    ...C
  } = r, P = O.useRef(), k = {
    ...r,
    anchorOrigin: s,
    anchorReference: c,
    elevation: h,
    marginThreshold: g,
    transformOrigin: T,
    TransitionComponent: S,
    transitionDuration: E,
    TransitionProps: x
  }, m = jT(k), R = O.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (a || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), a;
    const H = jr(i), ee = H && H.nodeType === 1 ? H : wt(P.current).body, z = ee.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const se = ee.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && se.top === 0 && se.left === 0 && se.right === 0 && se.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: z.top + Xc(z, s.vertical),
      left: z.left + Jc(z, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, a, c]), _ = O.useCallback((H) => ({
    vertical: Xc(H, T.vertical),
    horizontal: Jc(H, T.horizontal)
  }), [T.horizontal, T.vertical]), B = O.useCallback((H) => {
    const ee = {
      width: H.offsetWidth,
      height: H.offsetHeight
    }, z = _(ee);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Qc(z)
      };
    const se = R();
    let ge = se.top - z.vertical, Oe = se.left - z.horizontal;
    const Ge = ge + ee.height, xe = Oe + ee.width, we = Rn(jr(i)), de = we.innerHeight - g, Me = we.innerWidth - g;
    if (g !== null && ge < g) {
      const ve = ge - g;
      ge -= ve, z.vertical += ve;
    } else if (g !== null && Ge > de) {
      const ve = Ge - de;
      ge -= ve, z.vertical += ve;
    }
    if (process.env.NODE_ENV !== "production" && ee.height > de && ee.height && de && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ee.height - de}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), g !== null && Oe < g) {
      const ve = Oe - g;
      Oe -= ve, z.horizontal += ve;
    } else if (xe > Me) {
      const ve = xe - Me;
      Oe -= ve, z.horizontal += ve;
    }
    return {
      top: `${Math.round(ge)}px`,
      left: `${Math.round(Oe)}px`,
      transformOrigin: Qc(z)
    };
  }, [i, c, R, _, g]), [A, L] = O.useState(v), I = O.useCallback(() => {
    const H = P.current;
    if (!H)
      return;
    const ee = B(H);
    ee.top !== null && H.style.setProperty("top", ee.top), ee.left !== null && (H.style.left = ee.left), H.style.transformOrigin = ee.transformOrigin, L(!0);
  }, [B]);
  O.useEffect(() => (w && window.addEventListener("scroll", I), () => window.removeEventListener("scroll", I)), [i, w, I]);
  const U = () => {
    I();
  }, Y = () => {
    L(!1);
  };
  O.useEffect(() => {
    v && I();
  }), O.useImperativeHandle(o, () => v ? {
    updatePosition: () => {
      I();
    }
  } : null, [v, I]), O.useEffect(() => {
    if (!v)
      return;
    const H = Du(() => {
      I();
    }), ee = Rn(jr(i));
    return ee.addEventListener("resize", H), () => {
      H.clear(), ee.removeEventListener("resize", H);
    };
  }, [i, v, I]);
  let G = E;
  const N = {
    slots: {
      transition: S,
      ...y
    },
    slotProps: {
      transition: x,
      paper: p,
      ...b
    }
  }, [j, V] = Ze("transition", {
    elementType: eo,
    externalForwardedProps: N,
    ownerState: k,
    getSlotProps: (H) => ({
      ...H,
      onEntering: (ee, z) => {
        var se;
        (se = H.onEntering) == null || se.call(H, ee, z), U();
      },
      onExited: (ee) => {
        var z;
        (z = H.onExited) == null || z.call(H, ee), Y();
      }
    }),
    additionalProps: {
      appear: !0,
      in: v
    }
  });
  E === "auto" && !j.muiSupportAuto && (G = void 0);
  const W = d || (i ? wt(jr(i)).body : void 0), [J, {
    slots: te,
    slotProps: K,
    ...Z
  }] = Ze("root", {
    ref: n,
    elementType: zT,
    externalForwardedProps: {
      ...N,
      ...C
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: y.backdrop
      },
      slotProps: {
        backdrop: Pd(typeof b.backdrop == "function" ? b.backdrop(k) : b.backdrop, {
          invisible: !0
        })
      },
      container: W,
      open: v
    },
    ownerState: k,
    className: ye(m.root, f)
  }), [D, X] = Ze("paper", {
    ref: P,
    className: m.paper,
    elementType: FT,
    externalForwardedProps: N,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: h,
      style: A ? void 0 : {
        opacity: 0
      }
    },
    ownerState: k
  });
  return /* @__PURE__ */ M(J, {
    ...Z,
    ...!BT(J) && {
      slots: te,
      slotProps: K,
      disableScrollLock: w
    },
    children: /* @__PURE__ */ M(j, {
      ...V,
      timeout: G,
      children: /* @__PURE__ */ M(D, {
        ...X,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && ($f.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: _i,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: In(l.oneOfType([vn, l.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = jr(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: l.shape({
    horizontal: l.oneOfType([l.oneOf(["center", "left", "right"]), l.number]).isRequired,
    vertical: l.oneOfType([l.oneOf(["bottom", "center", "top"]), l.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: l.shape({
    left: l.number.isRequired,
    top: l.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: l.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: l.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  BackdropProps: l.object,
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: l.oneOfType([vn, l.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: l.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: va,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: l.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: l.func,
  /**
   * If `true`, the component is shown.
   */
  open: l.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: l.shape({
    component: Au
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: l.shape({
    backdrop: l.oneOfType([l.func, l.object]),
    paper: l.oneOfType([l.func, l.object]),
    root: l.oneOfType([l.func, l.object]),
    transition: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: l.shape({
    backdrop: l.elementType,
    paper: l.elementType,
    root: l.elementType,
    transition: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: l.shape({
    horizontal: l.oneOfType([l.oneOf(["center", "left", "right"]), l.number]).isRequired,
    vertical: l.oneOfType([l.oneOf(["bottom", "center", "top"]), l.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: l.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: l.oneOfType([l.oneOf(["auto"]), l.number, l.shape({
    appear: l.number,
    enter: l.number,
    exit: l.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: l.object
});
function VT() {
  const [e, t] = Vn(null), n = !!e, r = sn((i) => {
    const s = i.currentTarget;
    t(s);
  }, []), o = sn(() => {
    var i;
    (i = window.getSelection()) != null && i.toString() || t(null);
  }, []);
  return {
    anchorEl: e,
    isOpen: n,
    openPopover: r,
    closePopover: o
  };
}
const HT = rt(({ children: e, renderPopoverHandler: t, sx: n }) => {
  const { anchorEl: r, isOpen: o, openPopover: i, closePopover: s } = VT();
  return /* @__PURE__ */ je(ea, { children: [
    t({ anchorEl: r, isOpen: o, openPopover: i, closePopover: s }),
    /* @__PURE__ */ M(
      $f,
      {
        open: o,
        anchorEl: r,
        onClose: s,
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        transformOrigin: { vertical: "top", horizontal: "center" },
        children: /* @__PURE__ */ M(Tr, { in: o, children: /* @__PURE__ */ M(xr, { sx: n, children: e }) })
      }
    )
  ] });
});
HT.displayName = "Popover";
function Zc(e) {
  return e.substring(2).toLowerCase();
}
function WT(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function vi(e) {
  const {
    children: t,
    disableReactTree: n = !1,
    mouseEvent: r = "onClick",
    onClickAway: o,
    touchEvent: i = "onTouchEnd"
  } = e, s = O.useRef(!1), a = O.useRef(null), c = O.useRef(!1), u = O.useRef(!1);
  O.useEffect(() => (setTimeout(() => {
    c.current = !0;
  }, 0), () => {
    c.current = !1;
  }), []);
  const f = Ot(Gn(t), a), d = hn((v) => {
    const p = u.current;
    u.current = !1;
    const y = wt(a.current);
    if (!c.current || !a.current || "clientX" in v && WT(v, y))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let b;
    v.composedPath ? b = v.composedPath().includes(a.current) : b = !y.documentElement.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      v.target
    ) || a.current.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      v.target
    ), !b && (n || !p) && o(v);
  }), h = (v) => (p) => {
    u.current = !0;
    const y = t.props[v];
    y && y(p);
  }, g = {
    ref: f
  };
  return i !== !1 && (g[i] = h(i)), O.useEffect(() => {
    if (i !== !1) {
      const v = Zc(i), p = wt(a.current), y = () => {
        s.current = !0;
      };
      return p.addEventListener(v, d), p.addEventListener("touchmove", y), () => {
        p.removeEventListener(v, d), p.removeEventListener("touchmove", y);
      };
    }
  }, [d, i]), r !== !1 && (g[r] = h(r)), O.useEffect(() => {
    if (r !== !1) {
      const v = Zc(r), p = wt(a.current);
      return p.addEventListener(v, d), () => {
        p.removeEventListener(v, d);
      };
    }
  }, [d, r]), /* @__PURE__ */ O.cloneElement(t, g);
}
process.env.NODE_ENV !== "production" && (vi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The wrapped element.
   */
  children: Mn.isRequired,
  /**
   * If `true`, the React tree is ignored and only the DOM tree is considered.
   * This prop changes how portaled elements are handled.
   * @default false
   */
  disableReactTree: l.bool,
  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   * @default 'onClick'
   */
  mouseEvent: l.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", !1]),
  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: l.func.isRequired,
  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   * @default 'onTouchEnd'
   */
  touchEvent: l.oneOf(["onTouchEnd", "onTouchStart", !1])
});
process.env.NODE_ENV !== "production" && (vi.propTypes = vo(vi.propTypes));
const UT = nl((e) => ({
  activeId: null,
  setActiveId: (t) => e({ activeId: t })
}));
function YT(e) {
  const { activeId: t, setActiveId: n } = UT(), [r, o] = Vn(null), i = !!r && (!e || t === e), s = sn(
    (c) => {
      const u = c.currentTarget;
      e ? (n(e), o(u)) : o(r ? null : u);
    },
    [e, n]
  ), a = sn(() => {
    var c;
    (c = window.getSelection()) != null && c.toString() || (e && n(null), o(null));
  }, [e, n]);
  return {
    anchorEl: r,
    isOpen: i,
    openPopper: s,
    closePopper: a
  };
}
const Af = rt(
  ({ id: e, children: t, renderPopperHandler: n, position: r = "bottom", sx: o }) => {
    const { anchorEl: i, isOpen: s, openPopper: a, closePopper: c } = YT(e);
    return /* @__PURE__ */ M(vi, { onClickAway: c, children: /* @__PURE__ */ je(Sr, { sx: { position: "relative" }, role: "presentation", id: "#VenomousUI-Popper", children: [
      n({ anchorEl: i, isOpen: s, openPopper: a, closePopper: c }),
      /* @__PURE__ */ M(Vi, { open: s, anchorEl: i, placement: r, transition: !0, keepMounted: !0, children: ({ TransitionProps: u }) => /* @__PURE__ */ M(Tr, { ...u, children: /* @__PURE__ */ M(xr, { sx: o, children: t }) }) })
    ] }) });
  }
);
Af.displayName = "Popper";
const Qs = typeof md({}) == "function", qT = (e, t) => ({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%",
  // When used under CssVarsProvider, colorScheme should not be applied dynamically because it will generate the stylesheet twice for server-rendered applications.
  ...t && !e.vars && {
    colorScheme: e.palette.mode
  }
}), GT = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), Df = (e, t = !1) => {
  var i, s;
  const n = {};
  t && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([a, c]) => {
    var f, d;
    const u = e.getColorSchemeSelector(a);
    u.startsWith("@") ? n[u] = {
      ":root": {
        colorScheme: (f = c.palette) == null ? void 0 : f.mode
      }
    } : n[u.replace(/\s*&/, "")] = {
      colorScheme: (d = c.palette) == null ? void 0 : d.mode
    };
  });
  let r = {
    html: qT(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...GT(e),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    },
    ...n
  };
  const o = (s = (i = e.components) == null ? void 0 : i.MuiCssBaseline) == null ? void 0 : s.styleOverrides;
  return o && (r = [r, o]), r;
}, ei = "mui-ecs", KT = (e) => {
  const t = Df(e, !1), n = Array.isArray(t) ? t[0] : t;
  return !e.vars && n && (n.html[`:root:has(${ei})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([r, o]) => {
    var s, a;
    const i = e.getColorSchemeSelector(r);
    i.startsWith("@") ? n[i] = {
      [`:root:not(:has(.${ei}))`]: {
        colorScheme: (s = o.palette) == null ? void 0 : s.mode
      }
    } : n[i.replace(/\s*&/, "")] = {
      [`&:not(:has(.${ei}))`]: {
        colorScheme: (a = o.palette) == null ? void 0 : a.mode
      }
    };
  }), t;
}, XT = md(Qs ? ({
  theme: e,
  enableColorScheme: t
}) => Df(e, t) : ({
  theme: e
}) => KT(e));
function _f(e) {
  const t = st({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: n,
    enableColorScheme: r = !1
  } = t;
  return /* @__PURE__ */ je(O.Fragment, {
    children: [Qs && /* @__PURE__ */ M(XT, {
      enableColorScheme: r
    }), !Qs && !r && /* @__PURE__ */ M("span", {
      className: ei,
      style: {
        display: "none"
      }
    }), n]
  });
}
process.env.NODE_ENV !== "production" && (_f.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: l.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: l.bool
});
function JT() {
  const { themeMode: e } = Cf(), { themePalette: t } = gT(), n = gn(() => Li({
    palette: {
      mode: e,
      primary: {
        main: t.main,
        dark: t.dark,
        light: t.light,
        contrastText: t.contrastText
      }
    }
  }), [e, t]);
  return QT(t), { theme: n };
}
function QT(e) {
  ti(() => {
    const t = document.createElement("style");
    return t.innerHTML = `
          /* 设置选中文本的样式 */
          ::selection {
            background-color: ${e.opacity};                      /* 设置选中文本的背景色 */
            color: white;                                                   /* 设置选中文本的文字颜色 */
          }
    
          /* 设置滚动条的样式 */
          ::-webkit-scrollbar {
            width: 8px;                                                     /* 设置滚动条的宽度 */
            height: 8px;                                                    /* 设置滚动条的高度 */
          }
          ::-webkit-scrollbar-thumb {
            background-color: ${e.main};                         /* 设置滚动条的颜色 */
            border-radius: 4px;                                             /* 设置滚动条的圆角 */
          }
          ::-webkit-scrollbar-thumb:hover {
            background-color: ${e.dark};                         /* 悬停时加深颜色 */
          } 
          ::-webkit-scrollbar-track {
            background-color: rgba(0, 0, 0, 0.1);                         /* 滑轨颜色 */
            border-radius: 4px;                                             /* 圆角 */
            transition: opacity 0.5s ease-in-out;                           /* 滑轨过渡效果 */
          }
          /* Firefox 滚动条样式 */
          * {
            scrollbar-color: ${e.main} rgba(0, 0, 0, 0.1);     /* 滑块 和 滑轨颜色 */
            scrollbar-width: medium;                                        /* 滚动条宽度 */
          }
          /* Firefox 滚动条的过渡效果 */
          *::-webkit-scrollbar {
            transition: opacity 0.5s ease-in-out;
          }
        `, document.head.appendChild(t), () => {
      document.head.removeChild(t);
    };
  }, [e]);
}
const ZT = rt(({ children: e }) => {
  const { theme: t } = JT();
  return /* @__PURE__ */ je(Ag, { theme: t, disableTransitionOnChange: !0, children: [
    /* @__PURE__ */ M(_f, {}),
    e
  ] });
});
ZT.displayName = "ThemeProvider";
function ew(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const tw = (e) => {
  switch (e) {
    case "success":
      return ow;
    case "info":
      return sw;
    case "warning":
      return iw;
    case "error":
      return aw;
    default:
      return null;
  }
}, nw = Array(12).fill(0), rw = ({ visible: e, className: t }) => /* @__PURE__ */ $.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    t
  ].filter(Boolean).join(" "),
  "data-visible": e
}, /* @__PURE__ */ $.createElement("div", {
  className: "sonner-spinner"
}, nw.map((n, r) => /* @__PURE__ */ $.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${r}`
})))), ow = /* @__PURE__ */ $.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ $.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), iw = /* @__PURE__ */ $.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ $.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), sw = /* @__PURE__ */ $.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ $.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), aw = /* @__PURE__ */ $.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ $.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), lw = /* @__PURE__ */ $.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ $.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ $.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), cw = () => {
  const [e, t] = $.useState(document.hidden);
  return $.useEffect(() => {
    const n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
};
let Zs = 1;
class uw {
  constructor() {
    this.subscribe = (t) => (this.subscribers.push(t), () => {
      const n = this.subscribers.indexOf(t);
      this.subscribers.splice(n, 1);
    }), this.publish = (t) => {
      this.subscribers.forEach((n) => n(t));
    }, this.addToast = (t) => {
      this.publish(t), this.toasts = [
        ...this.toasts,
        t
      ];
    }, this.create = (t) => {
      var n;
      const { message: r, ...o } = t, i = typeof (t == null ? void 0 : t.id) == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : Zs++, s = this.toasts.find((c) => c.id === i), a = t.dismissible === void 0 ? !0 : t.dismissible;
      return this.dismissedToasts.has(i) && this.dismissedToasts.delete(i), s ? this.toasts = this.toasts.map((c) => c.id === i ? (this.publish({
        ...c,
        ...t,
        id: i,
        title: r
      }), {
        ...c,
        ...t,
        id: i,
        dismissible: a,
        title: r
      }) : c) : this.addToast({
        title: r,
        ...o,
        dismissible: a,
        id: i
      }), i;
    }, this.dismiss = (t) => (t ? (this.dismissedToasts.add(t), requestAnimationFrame(() => this.subscribers.forEach((n) => n({
      id: t,
      dismiss: !0
    })))) : this.toasts.forEach((n) => {
      this.subscribers.forEach((r) => r({
        id: n.id,
        dismiss: !0
      }));
    }), t), this.message = (t, n) => this.create({
      ...n,
      message: t
    }), this.error = (t, n) => this.create({
      ...n,
      message: t,
      type: "error"
    }), this.success = (t, n) => this.create({
      ...n,
      type: "success",
      message: t
    }), this.info = (t, n) => this.create({
      ...n,
      type: "info",
      message: t
    }), this.warning = (t, n) => this.create({
      ...n,
      type: "warning",
      message: t
    }), this.loading = (t, n) => this.create({
      ...n,
      type: "loading",
      message: t
    }), this.promise = (t, n) => {
      if (!n)
        return;
      let r;
      n.loading !== void 0 && (r = this.create({
        ...n,
        promise: t,
        type: "loading",
        message: n.loading,
        description: typeof n.description != "function" ? n.description : void 0
      }));
      const o = Promise.resolve(t instanceof Function ? t() : t);
      let i = r !== void 0, s;
      const a = o.then(async (u) => {
        if (s = [
          "resolve",
          u
        ], $.isValidElement(u))
          i = !1, this.create({
            id: r,
            type: "default",
            message: u
          });
        else if (fw(u) && !u.ok) {
          i = !1;
          const d = typeof n.error == "function" ? await n.error(`HTTP error! status: ${u.status}`) : n.error, h = typeof n.description == "function" ? await n.description(`HTTP error! status: ${u.status}`) : n.description, v = typeof d == "object" && !$.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: r,
            type: "error",
            description: h,
            ...v
          });
        } else if (u instanceof Error) {
          i = !1;
          const d = typeof n.error == "function" ? await n.error(u) : n.error, h = typeof n.description == "function" ? await n.description(u) : n.description, v = typeof d == "object" && !$.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: r,
            type: "error",
            description: h,
            ...v
          });
        } else if (n.success !== void 0) {
          i = !1;
          const d = typeof n.success == "function" ? await n.success(u) : n.success, h = typeof n.description == "function" ? await n.description(u) : n.description, v = typeof d == "object" && !$.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: r,
            type: "success",
            description: h,
            ...v
          });
        }
      }).catch(async (u) => {
        if (s = [
          "reject",
          u
        ], n.error !== void 0) {
          i = !1;
          const f = typeof n.error == "function" ? await n.error(u) : n.error, d = typeof n.description == "function" ? await n.description(u) : n.description, g = typeof f == "object" && !$.isValidElement(f) ? f : {
            message: f
          };
          this.create({
            id: r,
            type: "error",
            description: d,
            ...g
          });
        }
      }).finally(() => {
        i && (this.dismiss(r), r = void 0), n.finally == null || n.finally.call(n);
      }), c = () => new Promise((u, f) => a.then(() => s[0] === "reject" ? f(s[1]) : u(s[1])).catch(f));
      return typeof r != "string" && typeof r != "number" ? {
        unwrap: c
      } : Object.assign(r, {
        unwrap: c
      });
    }, this.custom = (t, n) => {
      const r = (n == null ? void 0 : n.id) || Zs++;
      return this.create({
        jsx: t(r),
        id: r,
        ...n
      }), r;
    }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const Tt = new uw(), dw = (e, t) => {
  const n = (t == null ? void 0 : t.id) || Zs++;
  return Tt.addToast({
    title: e,
    ...t,
    id: n
  }), n;
}, fw = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", pw = dw, mw = () => Tt.toasts, hw = () => Tt.getActiveToasts(), ws = Object.assign(pw, {
  success: Tt.success,
  info: Tt.info,
  warning: Tt.warning,
  error: Tt.error,
  custom: Tt.custom,
  message: Tt.message,
  promise: Tt.promise,
  dismiss: Tt.dismiss,
  loading: Tt.loading
}, {
  getHistory: mw,
  getToasts: hw
});
ew("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function Vo(e) {
  return e.label !== void 0;
}
const gw = 3, yw = "24px", vw = "16px", eu = 4e3, bw = 356, xw = 14, Tw = 45, ww = 200;
function Zt(...e) {
  return e.filter(Boolean).join(" ");
}
function Ew(e) {
  const [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
const Sw = (e) => {
  var t, n, r, o, i, s, a, c, u;
  const { invert: f, toast: d, unstyled: h, interacting: g, setHeights: v, visibleToasts: p, heights: y, index: b, toasts: T, expanded: S, removeToast: E, defaultRichColors: x, closeButton: w, style: C, cancelButtonStyle: P, actionButtonStyle: k, className: m = "", descriptionClassName: R = "", duration: _, position: B, gap: A, expandByDefault: L, classNames: I, icons: U, closeButtonAriaLabel: Y = "Close toast" } = e, [G, N] = $.useState(null), [j, V] = $.useState(null), [W, J] = $.useState(!1), [te, K] = $.useState(!1), [Z, D] = $.useState(!1), [X, H] = $.useState(!1), [ee, z] = $.useState(!1), [se, ge] = $.useState(0), [Oe, Ge] = $.useState(0), xe = $.useRef(d.duration || _ || eu), we = $.useRef(null), de = $.useRef(null), Me = b === 0, ve = b + 1 <= p, ne = d.type, et = d.dismissible !== !1, at = d.className || "", lt = d.descriptionClassName || "", yt = $.useMemo(() => y.findIndex((ue) => ue.toastId === d.id) || 0, [
    y,
    d.id
  ]), xt = $.useMemo(() => {
    var ue;
    return (ue = d.closeButton) != null ? ue : w;
  }, [
    d.closeButton,
    w
  ]), Rt = $.useMemo(() => d.duration || _ || eu, [
    d.duration,
    _
  ]), vt = $.useRef(0), ke = $.useRef(0), fe = $.useRef(0), He = $.useRef(null), [Ke, Be] = B.split("-"), Jn = $.useMemo(() => y.reduce((ue, Xe, ot) => ot >= yt ? ue : ue + Xe.height, 0), [
    y,
    yt
  ]), Qn = cw(), Ki = d.invert || f, Tn = ne === "loading";
  ke.current = $.useMemo(() => yt * A + Jn, [
    yt,
    Jn
  ]), $.useEffect(() => {
    xe.current = Rt;
  }, [
    Rt
  ]), $.useEffect(() => {
    J(!0);
  }, []), $.useEffect(() => {
    const ue = de.current;
    if (ue) {
      const Xe = ue.getBoundingClientRect().height;
      return Ge(Xe), v((ot) => [
        {
          toastId: d.id,
          height: Xe,
          position: d.position
        },
        ...ot
      ]), () => v((ot) => ot.filter((oe) => oe.toastId !== d.id));
    }
  }, [
    v,
    d.id
  ]), $.useLayoutEffect(() => {
    if (!W) return;
    const ue = de.current, Xe = ue.style.height;
    ue.style.height = "auto";
    const ot = ue.getBoundingClientRect().height;
    ue.style.height = Xe, Ge(ot), v((oe) => oe.find((Je) => Je.toastId === d.id) ? oe.map((Je) => Je.toastId === d.id ? {
      ...Je,
      height: ot
    } : Je) : [
      {
        toastId: d.id,
        height: ot,
        position: d.position
      },
      ...oe
    ]);
  }, [
    W,
    d.title,
    d.description,
    v,
    d.id
  ]);
  const Jt = $.useCallback(() => {
    K(!0), ge(ke.current), v((ue) => ue.filter((Xe) => Xe.toastId !== d.id)), setTimeout(() => {
      E(d);
    }, ww);
  }, [
    d,
    E,
    v,
    ke
  ]);
  $.useEffect(() => {
    if (d.promise && ne === "loading" || d.duration === 1 / 0 || d.type === "loading") return;
    let ue;
    return S || g || Qn ? (() => {
      if (fe.current < vt.current) {
        const oe = (/* @__PURE__ */ new Date()).getTime() - vt.current;
        xe.current = xe.current - oe;
      }
      fe.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      xe.current !== 1 / 0 && (vt.current = (/* @__PURE__ */ new Date()).getTime(), ue = setTimeout(() => {
        d.onAutoClose == null || d.onAutoClose.call(d, d), Jt();
      }, xe.current));
    })(), () => clearTimeout(ue);
  }, [
    S,
    g,
    d,
    ne,
    Qn,
    Jt
  ]), $.useEffect(() => {
    d.delete && Jt();
  }, [
    Jt,
    d.delete
  ]);
  function Xi() {
    var ue;
    if (U != null && U.loading) {
      var Xe;
      return /* @__PURE__ */ $.createElement("div", {
        className: Zt(I == null ? void 0 : I.loader, d == null || (Xe = d.classNames) == null ? void 0 : Xe.loader, "sonner-loader"),
        "data-visible": ne === "loading"
      }, U.loading);
    }
    return /* @__PURE__ */ $.createElement(rw, {
      className: Zt(I == null ? void 0 : I.loader, d == null || (ue = d.classNames) == null ? void 0 : ue.loader),
      visible: ne === "loading"
    });
  }
  const Ji = d.icon || (U == null ? void 0 : U[ne]) || tw(ne);
  var So, Co;
  return /* @__PURE__ */ $.createElement("li", {
    tabIndex: 0,
    ref: de,
    className: Zt(m, at, I == null ? void 0 : I.toast, d == null || (t = d.classNames) == null ? void 0 : t.toast, I == null ? void 0 : I.default, I == null ? void 0 : I[ne], d == null || (n = d.classNames) == null ? void 0 : n[ne]),
    "data-sonner-toast": "",
    "data-rich-colors": (So = d.richColors) != null ? So : x,
    "data-styled": !(d.jsx || d.unstyled || h),
    "data-mounted": W,
    "data-promise": !!d.promise,
    "data-swiped": ee,
    "data-removed": te,
    "data-visible": ve,
    "data-y-position": Ke,
    "data-x-position": Be,
    "data-index": b,
    "data-front": Me,
    "data-swiping": Z,
    "data-dismissible": et,
    "data-type": ne,
    "data-invert": Ki,
    "data-swipe-out": X,
    "data-swipe-direction": j,
    "data-expanded": !!(S || L && W),
    style: {
      "--index": b,
      "--toasts-before": b,
      "--z-index": T.length - b,
      "--offset": `${te ? se : ke.current}px`,
      "--initial-height": L ? "auto" : `${Oe}px`,
      ...C,
      ...d.style
    },
    onDragEnd: () => {
      D(!1), N(null), He.current = null;
    },
    onPointerDown: (ue) => {
      Tn || !et || (we.current = /* @__PURE__ */ new Date(), ge(ke.current), ue.target.setPointerCapture(ue.pointerId), ue.target.tagName !== "BUTTON" && (D(!0), He.current = {
        x: ue.clientX,
        y: ue.clientY
      }));
    },
    onPointerUp: () => {
      var ue, Xe, ot;
      if (X || !et) return;
      He.current = null;
      const oe = Number(((ue = de.current) == null ? void 0 : ue.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), ft = Number(((Xe = de.current) == null ? void 0 : Xe.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Je = (/* @__PURE__ */ new Date()).getTime() - ((ot = we.current) == null ? void 0 : ot.getTime()), _t = G === "x" ? oe : ft, Oo = Math.abs(_t) / Je;
      if (Math.abs(_t) >= Tw || Oo > 0.11) {
        ge(ke.current), d.onDismiss == null || d.onDismiss.call(d, d), V(G === "x" ? oe > 0 ? "right" : "left" : ft > 0 ? "down" : "up"), Jt(), H(!0);
        return;
      } else {
        var Ut, Yt;
        (Ut = de.current) == null || Ut.style.setProperty("--swipe-amount-x", "0px"), (Yt = de.current) == null || Yt.style.setProperty("--swipe-amount-y", "0px");
      }
      z(!1), D(!1), N(null);
    },
    onPointerMove: (ue) => {
      var Xe, ot, oe;
      if (!He.current || !et || ((Xe = window.getSelection()) == null ? void 0 : Xe.toString().length) > 0) return;
      const Je = ue.clientY - He.current.y, _t = ue.clientX - He.current.x;
      var Oo;
      const Ut = (Oo = e.swipeDirections) != null ? Oo : Ew(B);
      !G && (Math.abs(_t) > 1 || Math.abs(Je) > 1) && N(Math.abs(_t) > Math.abs(Je) ? "x" : "y");
      let Yt = {
        x: 0,
        y: 0
      };
      const ol = (_n) => 1 / (1.5 + Math.abs(_n) / 20);
      if (G === "y") {
        if (Ut.includes("top") || Ut.includes("bottom"))
          if (Ut.includes("top") && Je < 0 || Ut.includes("bottom") && Je > 0)
            Yt.y = Je;
          else {
            const _n = Je * ol(Je);
            Yt.y = Math.abs(_n) < Math.abs(Je) ? _n : Je;
          }
      } else if (G === "x" && (Ut.includes("left") || Ut.includes("right")))
        if (Ut.includes("left") && _t < 0 || Ut.includes("right") && _t > 0)
          Yt.x = _t;
        else {
          const _n = _t * ol(_t);
          Yt.x = Math.abs(_n) < Math.abs(_t) ? _n : _t;
        }
      (Math.abs(Yt.x) > 0 || Math.abs(Yt.y) > 0) && z(!0), (ot = de.current) == null || ot.style.setProperty("--swipe-amount-x", `${Yt.x}px`), (oe = de.current) == null || oe.style.setProperty("--swipe-amount-y", `${Yt.y}px`);
    }
  }, xt && !d.jsx && ne !== "loading" ? /* @__PURE__ */ $.createElement("button", {
    "aria-label": Y,
    "data-disabled": Tn,
    "data-close-button": !0,
    onClick: Tn || !et ? () => {
    } : () => {
      Jt(), d.onDismiss == null || d.onDismiss.call(d, d);
    },
    className: Zt(I == null ? void 0 : I.closeButton, d == null || (r = d.classNames) == null ? void 0 : r.closeButton)
  }, (Co = U == null ? void 0 : U.close) != null ? Co : lw) : null, (ne || d.icon || d.promise) && d.icon !== null && ((U == null ? void 0 : U[ne]) !== null || d.icon) ? /* @__PURE__ */ $.createElement("div", {
    "data-icon": "",
    className: Zt(I == null ? void 0 : I.icon, d == null || (o = d.classNames) == null ? void 0 : o.icon)
  }, d.promise || d.type === "loading" && !d.icon ? d.icon || Xi() : null, d.type !== "loading" ? Ji : null) : null, /* @__PURE__ */ $.createElement("div", {
    "data-content": "",
    className: Zt(I == null ? void 0 : I.content, d == null || (i = d.classNames) == null ? void 0 : i.content)
  }, /* @__PURE__ */ $.createElement("div", {
    "data-title": "",
    className: Zt(I == null ? void 0 : I.title, d == null || (s = d.classNames) == null ? void 0 : s.title)
  }, d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title), d.description ? /* @__PURE__ */ $.createElement("div", {
    "data-description": "",
    className: Zt(R, lt, I == null ? void 0 : I.description, d == null || (a = d.classNames) == null ? void 0 : a.description)
  }, typeof d.description == "function" ? d.description() : d.description) : null), /* @__PURE__ */ $.isValidElement(d.cancel) ? d.cancel : d.cancel && Vo(d.cancel) ? /* @__PURE__ */ $.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: d.cancelButtonStyle || P,
    onClick: (ue) => {
      Vo(d.cancel) && et && (d.cancel.onClick == null || d.cancel.onClick.call(d.cancel, ue), Jt());
    },
    className: Zt(I == null ? void 0 : I.cancelButton, d == null || (c = d.classNames) == null ? void 0 : c.cancelButton)
  }, d.cancel.label) : null, /* @__PURE__ */ $.isValidElement(d.action) ? d.action : d.action && Vo(d.action) ? /* @__PURE__ */ $.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: d.actionButtonStyle || k,
    onClick: (ue) => {
      Vo(d.action) && (d.action.onClick == null || d.action.onClick.call(d.action, ue), !ue.defaultPrevented && Jt());
    },
    className: Zt(I == null ? void 0 : I.actionButton, d == null || (u = d.classNames) == null ? void 0 : u.actionButton)
  }, d.action.label) : null);
};
function tu() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function Cw(e, t) {
  const n = {};
  return [
    e,
    t
  ].forEach((r, o) => {
    const i = o === 1, s = i ? "--mobile-offset" : "--offset", a = i ? vw : yw;
    function c(u) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((f) => {
        n[`${s}-${f}`] = typeof u == "number" ? `${u}px` : u;
      });
    }
    typeof r == "number" || typeof r == "string" ? c(r) : typeof r == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((u) => {
      r[u] === void 0 ? n[`${s}-${u}`] = a : n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u];
    }) : c(a);
  }), n;
}
const Ow = /* @__PURE__ */ $.forwardRef(function(t, n) {
  const { invert: r, position: o = "bottom-right", hotkey: i = [
    "altKey",
    "KeyT"
  ], expand: s, closeButton: a, className: c, offset: u, mobileOffset: f, theme: d = "light", richColors: h, duration: g, style: v, visibleToasts: p = gw, toastOptions: y, dir: b = tu(), gap: T = xw, icons: S, containerAriaLabel: E = "Notifications" } = t, [x, w] = $.useState([]), C = $.useMemo(() => Array.from(new Set([
    o
  ].concat(x.filter((j) => j.position).map((j) => j.position)))), [
    x,
    o
  ]), [P, k] = $.useState([]), [m, R] = $.useState(!1), [_, B] = $.useState(!1), [A, L] = $.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), I = $.useRef(null), U = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), Y = $.useRef(null), G = $.useRef(!1), N = $.useCallback((j) => {
    w((V) => {
      var W;
      return (W = V.find((J) => J.id === j.id)) != null && W.delete || Tt.dismiss(j.id), V.filter(({ id: J }) => J !== j.id);
    });
  }, []);
  return $.useEffect(() => Tt.subscribe((j) => {
    if (j.dismiss) {
      requestAnimationFrame(() => {
        w((V) => V.map((W) => W.id === j.id ? {
          ...W,
          delete: !0
        } : W));
      });
      return;
    }
    setTimeout(() => {
      ar.flushSync(() => {
        w((V) => {
          const W = V.findIndex((J) => J.id === j.id);
          return W !== -1 ? [
            ...V.slice(0, W),
            {
              ...V[W],
              ...j
            },
            ...V.slice(W + 1)
          ] : [
            j,
            ...V
          ];
        });
      });
    });
  }), [
    x
  ]), $.useEffect(() => {
    if (d !== "system") {
      L(d);
      return;
    }
    if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? L("dark") : L("light")), typeof window > "u") return;
    const j = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      j.addEventListener("change", ({ matches: V }) => {
        L(V ? "dark" : "light");
      });
    } catch {
      j.addListener(({ matches: W }) => {
        try {
          L(W ? "dark" : "light");
        } catch (J) {
          console.error(J);
        }
      });
    }
  }, [
    d
  ]), $.useEffect(() => {
    x.length <= 1 && R(!1);
  }, [
    x
  ]), $.useEffect(() => {
    const j = (V) => {
      var W;
      if (i.every((K) => V[K] || V.code === K)) {
        var te;
        R(!0), (te = I.current) == null || te.focus();
      }
      V.code === "Escape" && (document.activeElement === I.current || (W = I.current) != null && W.contains(document.activeElement)) && R(!1);
    };
    return document.addEventListener("keydown", j), () => document.removeEventListener("keydown", j);
  }, [
    i
  ]), $.useEffect(() => {
    if (I.current)
      return () => {
        Y.current && (Y.current.focus({
          preventScroll: !0
        }), Y.current = null, G.current = !1);
      };
  }, [
    I.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ $.createElement("section", {
    ref: n,
    "aria-label": `${E} ${U}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, C.map((j, V) => {
    var W;
    const [J, te] = j.split("-");
    return x.length ? /* @__PURE__ */ $.createElement("ol", {
      key: j,
      dir: b === "auto" ? tu() : b,
      tabIndex: -1,
      ref: I,
      className: c,
      "data-sonner-toaster": !0,
      "data-sonner-theme": A,
      "data-y-position": J,
      "data-lifted": m && x.length > 1 && !s,
      "data-x-position": te,
      style: {
        "--front-toast-height": `${((W = P[0]) == null ? void 0 : W.height) || 0}px`,
        "--width": `${bw}px`,
        "--gap": `${T}px`,
        ...v,
        ...Cw(u, f)
      },
      onBlur: (K) => {
        G.current && !K.currentTarget.contains(K.relatedTarget) && (G.current = !1, Y.current && (Y.current.focus({
          preventScroll: !0
        }), Y.current = null));
      },
      onFocus: (K) => {
        K.target instanceof HTMLElement && K.target.dataset.dismissible === "false" || G.current || (G.current = !0, Y.current = K.relatedTarget);
      },
      onMouseEnter: () => R(!0),
      onMouseMove: () => R(!0),
      onMouseLeave: () => {
        _ || R(!1);
      },
      onDragEnd: () => R(!1),
      onPointerDown: (K) => {
        K.target instanceof HTMLElement && K.target.dataset.dismissible === "false" || B(!0);
      },
      onPointerUp: () => B(!1)
    }, x.filter((K) => !K.position && V === 0 || K.position === j).map((K, Z) => {
      var D, X;
      return /* @__PURE__ */ $.createElement(Sw, {
        key: K.id,
        icons: S,
        index: Z,
        toast: K,
        defaultRichColors: h,
        duration: (D = y == null ? void 0 : y.duration) != null ? D : g,
        className: y == null ? void 0 : y.className,
        descriptionClassName: y == null ? void 0 : y.descriptionClassName,
        invert: r,
        visibleToasts: p,
        closeButton: (X = y == null ? void 0 : y.closeButton) != null ? X : a,
        interacting: _,
        position: j,
        style: y == null ? void 0 : y.style,
        unstyled: y == null ? void 0 : y.unstyled,
        classNames: y == null ? void 0 : y.classNames,
        cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
        actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
        closeButtonAriaLabel: y == null ? void 0 : y.closeButtonAriaLabel,
        removeToast: N,
        toasts: x.filter((H) => H.position == K.position),
        heights: P.filter((H) => H.position == K.position),
        setHeights: k,
        expandByDefault: s,
        gap: T,
        expanded: m,
        swipeDirections: t.swipeDirections
      });
    })) : null;
  }));
}), Rw = rt(({ position: e = "bottom-right" }) => {
  const { isDarkMode: t } = Cf();
  return /* @__PURE__ */ M(
    Ow,
    {
      closeButton: !1,
      invert: t,
      visibleToasts: 3,
      position: e,
      gap: 6
    }
  );
});
Rw.displayName = "Button";
function jw() {
  return sn(({ type: t, title: n, description: r }) => {
    const o = {
      description: r,
      icon: /* @__PURE__ */ M(mr, { icon: Pw(t), color: kw(t) }),
      cancel: {
        label: /* @__PURE__ */ M(mr, { icon: "solar:close-circle-outline" }),
        onClick: () => {
        }
      },
      cancelButtonStyle: { background: "transparent" }
    };
    return t === "success" ? ws.success(n, o) : t === "error" ? ws.error(n, o) : ws.info(n, o);
  }, []);
}
function Pw(e) {
  switch (e) {
    case "success":
      return "solar:check-circle-bold";
    case "error":
      return "solar:danger-triangle-bold";
    case "info":
    default:
      return "solar:danger-circle-bold";
  }
}
function kw(e) {
  switch (e) {
    case "success":
      return "success";
    case "error":
      return "error";
    case "info":
      return "grey";
    default:
      return "auto";
  }
}
const Iw = rt(
  ({ menuHeaderHeight: e = 50, menuWidth: t = 200, menuItems: n, activedItemUrl: r, logoSrc: o, appName: i }) => /* @__PURE__ */ je(xr, { id: "VenomousUI-AdminSideNavMenu", sx: { p: "8px", border: 1, borderColor: "divider" }, children: [
    /* @__PURE__ */ je(qn, { row: !0, gap: 0, height: e, mb: "8px", children: [
      /* @__PURE__ */ M(
        Sr,
        {
          height: 32,
          width: 32,
          component: "img",
          alt: i,
          src: o,
          loading: "lazy",
          sx: { m: "10px" }
        }
      ),
      /* @__PURE__ */ M(un, { text: i, isTitle: !0 })
    ] }),
    /* @__PURE__ */ M(
      Pf,
      {
        height: `calc(100svh - ${e}px)`,
        width: t,
        items: n,
        renderItem: (s) => {
          var a;
          return /* @__PURE__ */ M(
            Af,
            {
              id: s.label,
              position: "right",
              sx: { p: "8px", border: 1, borderColor: "divider" },
              renderPopperHandler: ({ isOpen: c, openPopper: u }) => /* @__PURE__ */ M(
                Js,
                {
                  label: s.label,
                  isActive: c || s.url === r,
                  icon: s.icon,
                  clickable: !0,
                  onClick: u,
                  onMouseEnter: u,
                  sx: { width: "100%", justifyContent: "flex-start", mb: "2px" }
                }
              ),
              children: /* @__PURE__ */ M(
                qn,
                {
                  gap: 0,
                  sx: {
                    "& #VenomousUI-MenuItem": { mb: "2px" },
                    "& #VenomousUI-MenuItem:last-child": { mb: 0 }
                  },
                  children: (a = s.subItems) == null ? void 0 : a.map((c) => /* @__PURE__ */ M(
                    Js,
                    {
                      label: c.label,
                      isActive: c.label === r,
                      icon: c.icon,
                      clickable: !0,
                      onClick: c.onClick,
                      sx: { width: "100%", justifyContent: "flex-start" }
                    },
                    c.label
                  ))
                }
              )
            }
          );
        }
      }
    )
  ] })
);
Iw.displayName = "AdminSideNavMenu";
export {
  Iw as AdminSideNavMenu,
  wb as Blank,
  oo as Button,
  Zb as Card,
  e0 as Container,
  M0 as Drawer,
  $0 as DrawerHeader,
  qn as Flex,
  Bw as Grid,
  mr as Icon,
  Pf as Menu,
  Js as MenuItem,
  _T as Modal,
  xr as Paper,
  HT as Popover,
  Af as Popper,
  un as Text,
  Of as ThemePaletteName,
  ZT as ThemeProvider,
  Rw as Toast,
  _w as useDrawer,
  Lw as useModal,
  yT as useThemeBreakpoint,
  Cf as useThemeMode,
  gT as useThemePalette,
  jw as useToast
};
