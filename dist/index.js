var zf = Object.defineProperty;
var Vf = (e, t, n) => t in e ? zf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Pr = (e, t, n) => Vf(e, typeof t != "symbol" ? t + "" : t, n);
import { jsx as I, jsxs as Ae, Fragment as ou } from "react/jsx-runtime";
import * as O from "react";
import $, { forwardRef as oa, useContext as Hf, isValidElement as Wo, cloneElement as Uo, Children as Wf, useState as Wn, useEffect as ni, createElement as Un, memo as He, useMemo as En, Fragment as Uf, useCallback as an, useRef as Yf } from "react";
import * as qf from "react-dom";
import cr from "react-dom";
const qr = {
  black: "#000",
  white: "#fff"
}, tr = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, nr = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, rr = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, or = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, ir = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, kr = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Gf = {
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
};
function Cn(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const Kt = "$$material";
function ri() {
  return ri = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ri.apply(null, arguments);
}
function Kf(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Xf(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Jf = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Xf(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Kf(o);
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
}(), ut = "-ms-", oi = "-moz-", we = "-webkit-", iu = "comm", ia = "rule", sa = "decl", Qf = "@import", su = "@keyframes", Zf = "@layer", ep = Math.abs, Si = String.fromCharCode, tp = Object.assign;
function np(e, t) {
  return at(e, 0) ^ 45 ? (((t << 2 ^ at(e, 0)) << 2 ^ at(e, 1)) << 2 ^ at(e, 2)) << 2 ^ at(e, 3) : 0;
}
function au(e) {
  return e.trim();
}
function rp(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Se(e, t, n) {
  return e.replace(t, n);
}
function Ps(e, t) {
  return e.indexOf(t);
}
function at(e, t) {
  return e.charCodeAt(t) | 0;
}
function Gr(e, t, n) {
  return e.slice(t, n);
}
function tn(e) {
  return e.length;
}
function aa(e) {
  return e.length;
}
function Po(e, t) {
  return t.push(e), e;
}
function op(e, t) {
  return e.map(t).join("");
}
var Ei = 1, mr = 1, lu = 0, St = 0, Ze = 0, Sr = "";
function Ci(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Ei, column: mr, length: s, return: "" };
}
function Ir(e, t) {
  return tp(Ci("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ip() {
  return Ze;
}
function sp() {
  return Ze = St > 0 ? at(Sr, --St) : 0, mr--, Ze === 10 && (mr = 1, Ei--), Ze;
}
function kt() {
  return Ze = St < lu ? at(Sr, St++) : 0, mr++, Ze === 10 && (mr = 1, Ei++), Ze;
}
function ln() {
  return at(Sr, St);
}
function Yo() {
  return St;
}
function uo(e, t) {
  return Gr(Sr, e, t);
}
function Kr(e) {
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
function cu(e) {
  return Ei = mr = 1, lu = tn(Sr = e), St = 0, [];
}
function uu(e) {
  return Sr = "", e;
}
function qo(e) {
  return au(uo(St - 1, ks(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ap(e) {
  for (; (Ze = ln()) && Ze < 33; )
    kt();
  return Kr(e) > 2 || Kr(Ze) > 3 ? "" : " ";
}
function lp(e, t) {
  for (; --t && kt() && !(Ze < 48 || Ze > 102 || Ze > 57 && Ze < 65 || Ze > 70 && Ze < 97); )
    ;
  return uo(e, Yo() + (t < 6 && ln() == 32 && kt() == 32));
}
function ks(e) {
  for (; kt(); )
    switch (Ze) {
      // ] ) " '
      case e:
        return St;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && ks(Ze);
        break;
      // (
      case 40:
        e === 41 && ks(e);
        break;
      // \
      case 92:
        kt();
        break;
    }
  return St;
}
function cp(e, t) {
  for (; kt() && e + Ze !== 57; )
    if (e + Ze === 84 && ln() === 47)
      break;
  return "/*" + uo(t, St - 1) + "*" + Si(e === 47 ? e : kt());
}
function up(e) {
  for (; !Kr(ln()); )
    kt();
  return uo(e, St);
}
function dp(e) {
  return uu(Go("", null, null, null, [""], e = cu(e), 0, [0], e));
}
function Go(e, t, n, r, o, i, s, a, c) {
  for (var u = 0, f = 0, d = s, h = 0, g = 0, v = 0, p = 1, y = 1, b = 1, T = 0, E = "", S = o, x = i, w = r, C = E; y; )
    switch (v = T, T = kt()) {
      // (
      case 40:
        if (v != 108 && at(C, d - 1) == 58) {
          Ps(C += Se(qo(T), "&", "&\f"), "&\f") != -1 && (b = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += qo(T);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += ap(v);
        break;
      // \
      case 92:
        C += lp(Yo() - 1, 7);
        continue;
      // /
      case 47:
        switch (ln()) {
          case 42:
          case 47:
            Po(fp(cp(kt(), Yo()), t, n), c);
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * p:
        a[u++] = tn(C) * b;
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
            b == -1 && (C = Se(C, /\f/g, "")), g > 0 && tn(C) - d && Po(g > 32 ? cl(C + ";", r, n, d - 1) : cl(Se(C, " ", "") + ";", r, n, d - 2), c);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (Po(w = ll(C, t, n, u, f, o, a, E, S = [], x = [], d), i), T === 123)
              if (f === 0)
                Go(C, t, w, w, S, i, d, a, x);
              else
                switch (h === 99 && at(C, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Go(e, w, w, r && Po(ll(e, w, w, 0, 0, o, a, E, o, S = [], d), x), o, x, d, a, r ? S : x);
                    break;
                  default:
                    Go(C, w, w, w, [""], x, 0, a, x);
                }
        }
        u = f = g = 0, p = b = 1, E = C = "", d = s;
        break;
      // :
      case 58:
        d = 1 + tn(C), g = v;
      default:
        if (p < 1) {
          if (T == 123)
            --p;
          else if (T == 125 && p++ == 0 && sp() == 125)
            continue;
        }
        switch (C += Si(T), T * p) {
          // &
          case 38:
            b = f > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            a[u++] = (tn(C) - 1) * b, b = 1;
            break;
          // @
          case 64:
            ln() === 45 && (C += qo(kt())), h = ln(), f = d = tn(E = C += up(Yo())), T++;
            break;
          // -
          case 45:
            v === 45 && tn(C) == 2 && (p = 0);
        }
    }
  return i;
}
function ll(e, t, n, r, o, i, s, a, c, u, f) {
  for (var d = o - 1, h = o === 0 ? i : [""], g = aa(h), v = 0, p = 0, y = 0; v < r; ++v)
    for (var b = 0, T = Gr(e, d + 1, d = ep(p = s[v])), E = e; b < g; ++b)
      (E = au(p > 0 ? h[b] + " " + T : Se(T, /&\f/g, h[b]))) && (c[y++] = E);
  return Ci(e, t, n, o === 0 ? ia : a, c, u, f);
}
function fp(e, t, n) {
  return Ci(e, t, n, iu, Si(ip()), Gr(e, 2, -2), 0);
}
function cl(e, t, n, r) {
  return Ci(e, t, n, sa, Gr(e, 0, r), Gr(e, r + 1, -1), r);
}
function dr(e, t) {
  for (var n = "", r = aa(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function pp(e, t, n, r) {
  switch (e.type) {
    case Zf:
      if (e.children.length) break;
    case Qf:
    case sa:
      return e.return = e.return || e.value;
    case iu:
      return "";
    case su:
      return e.return = e.value + "{" + dr(e.children, r) + "}";
    case ia:
      e.value = e.props.join(",");
  }
  return tn(n = dr(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function mp(e) {
  var t = aa(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function hp(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function du(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var gp = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = ln(), o === 38 && i === 12 && (n[r] = 1), !Kr(i); )
    kt();
  return uo(t, St);
}, yp = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Kr(o)) {
      case 0:
        o === 38 && ln() === 12 && (n[r] = 1), t[r] += gp(St - 1, n, r);
        break;
      case 2:
        t[r] += qo(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = ln() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      // fallthrough
      default:
        t[r] += Si(o);
    }
  while (o = kt());
  return t;
}, vp = function(t, n) {
  return uu(yp(cu(t), n));
}, ul = /* @__PURE__ */ new WeakMap(), bp = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !ul.get(r)) && !o) {
      ul.set(t, !0);
      for (var i = [], s = vp(n, i), a = r.props, c = 0, u = 0; c < s.length; c++)
        for (var f = 0; f < a.length; f++, u++)
          t.props[u] = i[c] ? s[c].replace(/&\f/g, a[f]) : a[f] + " " + s[c];
    }
  }
}, xp = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function fu(e, t) {
  switch (np(e, t)) {
    // color-adjust
    case 5103:
      return we + "print-" + e + e;
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
      return we + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return we + e + oi + e + ut + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return we + e + ut + e + e;
    // order
    case 6165:
      return we + e + ut + "flex-" + e + e;
    // align-items
    case 5187:
      return we + e + Se(e, /(\w+).+(:[^]+)/, we + "box-$1$2" + ut + "flex-$1$2") + e;
    // align-self
    case 5443:
      return we + e + ut + "flex-item-" + Se(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return we + e + ut + "flex-line-pack" + Se(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return we + e + ut + Se(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return we + e + ut + Se(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return we + "box-" + Se(e, "-grow", "") + we + e + ut + Se(e, "grow", "positive") + e;
    // transition
    case 4554:
      return we + Se(e, /([^-])(transform)/g, "$1" + we + "$2") + e;
    // cursor
    case 6187:
      return Se(Se(Se(e, /(zoom-|grab)/, we + "$1"), /(image-set)/, we + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return Se(e, /(image-set\([^]*)/, we + "$1$`$1");
    // justify-content
    case 4968:
      return Se(Se(e, /(.+:)(flex-)?(.*)/, we + "box-pack:$3" + ut + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + we + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Se(e, /(.+)-inline(.+)/, we + "$1$2") + e;
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
      if (tn(e) - 1 - t > 6) switch (at(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (at(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return Se(e, /(.+:)(.+)-([^]+)/, "$1" + we + "$2-$3$1" + oi + (at(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Ps(e, "stretch") ? fu(Se(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (at(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (at(e, tn(e) - 3 - (~Ps(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return Se(e, ":", ":" + we) + e;
        // (inline-)?fl(e)x
        case 101:
          return Se(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + we + (at(e, 14) === 45 ? "inline-" : "") + "box$3$1" + we + "$2$3$1" + ut + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (at(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return we + e + ut + Se(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return we + e + ut + Se(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return we + e + ut + Se(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return we + e + ut + e + e;
  }
  return e;
}
var Tp = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case sa:
      t.return = fu(t.value, t.length);
      break;
    case su:
      return dr([Ir(t, {
        value: Se(t.value, "@", "@" + we)
      })], o);
    case ia:
      if (t.length) return op(t.props, function(i) {
        switch (rp(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return dr([Ir(t, {
              props: [Se(i, /:(read-\w+)/, ":" + oi + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return dr([Ir(t, {
              props: [Se(i, /:(plac\w+)/, ":" + we + "input-$1")]
            }), Ir(t, {
              props: [Se(i, /:(plac\w+)/, ":" + oi + "$1")]
            }), Ir(t, {
              props: [Se(i, /:(plac\w+)/, ut + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, wp = [Tp], Sp = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(p) {
      var y = p.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || wp, i = {}, s, a = [];
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
  var c, u = [bp, xp];
  {
    var f, d = [pp, hp(function(p) {
      f.insert(p);
    })], h = mp(u.concat(o, d)), g = function(y) {
      return dr(dp(y), h);
    };
    c = function(y, b, T, E) {
      f = T, g(y ? y + "{" + b.styles + "}" : b.styles), E && (v.inserted[b.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new Jf({
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
function Ep(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ko = { exports: {} }, Oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dl;
function Cp() {
  if (dl) return Oe;
  dl = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function E(x) {
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
  function S(x) {
    return E(x) === u;
  }
  return Oe.AsyncMode = c, Oe.ConcurrentMode = u, Oe.ContextConsumer = a, Oe.ContextProvider = s, Oe.Element = t, Oe.ForwardRef = f, Oe.Fragment = r, Oe.Lazy = v, Oe.Memo = g, Oe.Portal = n, Oe.Profiler = i, Oe.StrictMode = o, Oe.Suspense = d, Oe.isAsyncMode = function(x) {
    return S(x) || E(x) === c;
  }, Oe.isConcurrentMode = S, Oe.isContextConsumer = function(x) {
    return E(x) === a;
  }, Oe.isContextProvider = function(x) {
    return E(x) === s;
  }, Oe.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, Oe.isForwardRef = function(x) {
    return E(x) === f;
  }, Oe.isFragment = function(x) {
    return E(x) === r;
  }, Oe.isLazy = function(x) {
    return E(x) === v;
  }, Oe.isMemo = function(x) {
    return E(x) === g;
  }, Oe.isPortal = function(x) {
    return E(x) === n;
  }, Oe.isProfiler = function(x) {
    return E(x) === i;
  }, Oe.isStrictMode = function(x) {
    return E(x) === o;
  }, Oe.isSuspense = function(x) {
    return E(x) === d;
  }, Oe.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === u || x === i || x === o || x === d || x === h || typeof x == "object" && x !== null && (x.$$typeof === v || x.$$typeof === g || x.$$typeof === s || x.$$typeof === a || x.$$typeof === f || x.$$typeof === y || x.$$typeof === b || x.$$typeof === T || x.$$typeof === p);
  }, Oe.typeOf = E, Oe;
}
var Re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fl;
function Op() {
  return fl || (fl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function E(F) {
      return typeof F == "string" || typeof F == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      F === r || F === u || F === i || F === o || F === d || F === h || typeof F == "object" && F !== null && (F.$$typeof === v || F.$$typeof === g || F.$$typeof === s || F.$$typeof === a || F.$$typeof === f || F.$$typeof === y || F.$$typeof === b || F.$$typeof === T || F.$$typeof === p);
    }
    function S(F) {
      if (typeof F == "object" && F !== null) {
        var se = F.$$typeof;
        switch (se) {
          case t:
            var ge = F.type;
            switch (ge) {
              case c:
              case u:
              case r:
              case i:
              case o:
              case d:
                return ge;
              default:
                var Ce = ge && ge.$$typeof;
                switch (Ce) {
                  case a:
                  case f:
                  case v:
                  case g:
                  case s:
                    return Ce;
                  default:
                    return se;
                }
            }
          case n:
            return se;
        }
      }
    }
    var x = c, w = u, C = a, P = s, k = t, m = f, R = r, _ = v, B = g, A = n, L = i, M = o, U = d, Y = !1;
    function G(F) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), N(F) || S(F) === c;
    }
    function N(F) {
      return S(F) === u;
    }
    function j(F) {
      return S(F) === a;
    }
    function V(F) {
      return S(F) === s;
    }
    function W(F) {
      return typeof F == "object" && F !== null && F.$$typeof === t;
    }
    function J(F) {
      return S(F) === f;
    }
    function te(F) {
      return S(F) === r;
    }
    function K(F) {
      return S(F) === v;
    }
    function Z(F) {
      return S(F) === g;
    }
    function D(F) {
      return S(F) === n;
    }
    function X(F) {
      return S(F) === i;
    }
    function H(F) {
      return S(F) === o;
    }
    function ee(F) {
      return S(F) === d;
    }
    Re.AsyncMode = x, Re.ConcurrentMode = w, Re.ContextConsumer = C, Re.ContextProvider = P, Re.Element = k, Re.ForwardRef = m, Re.Fragment = R, Re.Lazy = _, Re.Memo = B, Re.Portal = A, Re.Profiler = L, Re.StrictMode = M, Re.Suspense = U, Re.isAsyncMode = G, Re.isConcurrentMode = N, Re.isContextConsumer = j, Re.isContextProvider = V, Re.isElement = W, Re.isForwardRef = J, Re.isFragment = te, Re.isLazy = K, Re.isMemo = Z, Re.isPortal = D, Re.isProfiler = X, Re.isStrictMode = H, Re.isSuspense = ee, Re.isValidElementType = E, Re.typeOf = S;
  }()), Re;
}
var pl;
function la() {
  return pl || (pl = 1, process.env.NODE_ENV === "production" ? ko.exports = Cp() : ko.exports = Op()), ko.exports;
}
var rs, ml;
function Rp() {
  if (ml) return rs;
  ml = 1;
  var e = la(), t = {
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
      for (var E = s(v), S = s(p), x = 0; x < T.length; ++x) {
        var w = T[x];
        if (!n[w] && !(y && y[w]) && !(S && S[w]) && !(E && E[w])) {
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
  return rs = g, rs;
}
Rp();
var Pp = !0;
function pu(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var ca = function(t, n, r) {
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
  Pp === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, ua = function(t, n, r) {
  ca(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function kp(e) {
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
var Ip = {
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
}, Mp = /[A-Z]|^ms/g, Np = /_EMO_([^_]+?)_([^]*?)_EMO_/g, mu = function(t) {
  return t.charCodeAt(1) === 45;
}, hl = function(t) {
  return t != null && typeof t != "boolean";
}, os = /* @__PURE__ */ du(function(e) {
  return mu(e) ? e : e.replace(Mp, "-$&").toLowerCase();
}), gl = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Np, function(r, o, i) {
          return nn = {
            name: o,
            styles: i,
            next: nn
          }, o;
        });
  }
  return Ip[t] !== 1 && !mu(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Xr(e, t, n) {
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
        return nn = {
          name: o.name,
          styles: o.styles,
          next: nn
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            nn = {
              name: s.name,
              styles: s.styles,
              next: nn
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return $p(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = nn, u = n(e);
        return nn = c, Xr(e, t, u);
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
function $p(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Xr(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : hl(a) && (r += os(i) + ":" + gl(i, a) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var c = 0; c < s.length; c++)
          hl(s[c]) && (r += os(i) + ":" + gl(i, s[c]) + ";");
      else {
        var u = Xr(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += os(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var yl = /label:\s*([^\s;{]+)\s*(;|$)/g, nn;
function fo(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  nn = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Xr(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += Xr(n, t, e[a]), r) {
      var c = i;
      o += c[a];
    }
  yl.lastIndex = 0;
  for (var u = "", f; (f = yl.exec(o)) !== null; )
    u += "-" + f[1];
  var d = kp(o) + u;
  return {
    name: d,
    styles: o,
    next: nn
  };
}
var Ap = function(t) {
  return t();
}, hu = O.useInsertionEffect ? O.useInsertionEffect : !1, gu = hu || Ap, vl = hu || O.useLayoutEffect, yu = /* @__PURE__ */ O.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Sp({
    key: "css"
  }) : null
);
yu.Provider;
var da = function(t) {
  return /* @__PURE__ */ oa(function(n, r) {
    var o = Hf(yu);
    return t(n, o, r);
  });
}, po = /* @__PURE__ */ O.createContext({}), fa = {}.hasOwnProperty, Is = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Dp = function(t, n) {
  var r = {};
  for (var o in n)
    fa.call(n, o) && (r[o] = n[o]);
  return r[Is] = t, r;
}, _p = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return ca(n, r, o), gu(function() {
    return ua(n, r, o);
  }), null;
}, Bp = /* @__PURE__ */ da(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Is], i = [r], s = "";
  typeof e.className == "string" ? s = pu(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = fo(i, void 0, O.useContext(po));
  s += t.key + "-" + a.name;
  var c = {};
  for (var u in e)
    fa.call(e, u) && u !== "css" && u !== Is && (c[u] = e[u]);
  return c.className = s, n && (c.ref = n), /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(_p, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ O.createElement(o, c));
}), Lp = Bp, bl = function(t, n) {
  var r = arguments;
  if (n == null || !fa.call(n, "css"))
    return O.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = Lp, i[1] = Dp(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return O.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(bl || (bl = {}));
var jp = /* @__PURE__ */ da(function(e, t) {
  var n = e.styles, r = fo([n], void 0, O.useContext(po)), o = O.useRef();
  return vl(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, c = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), c !== null && (a = !0, c.setAttribute("data-emotion", i), s.hydrate([c])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), vl(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && ua(t, r.next, !0), s.tags.length) {
      var c = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = c, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function pa() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return fo(t);
}
function mo() {
  var e = pa.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Fp = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, zp = /* @__PURE__ */ du(
  function(e) {
    return Fp.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Vp = zp, Hp = function(t) {
  return t !== "theme";
}, xl = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Vp : Hp;
}, Tl = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Wp = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return ca(n, r, o), gu(function() {
    return ua(n, r, o);
  }), null;
}, Up = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = Tl(t, n, r), c = a || xl(o), u = !c("as");
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
    var p = da(function(y, b, T) {
      var E = u && y.as || o, S = "", x = [], w = y;
      if (y.theme == null) {
        w = {};
        for (var C in y)
          w[C] = y[C];
        w.theme = O.useContext(po);
      }
      typeof y.className == "string" ? S = pu(b.registered, x, y.className) : y.className != null && (S = y.className + " ");
      var P = fo(d.concat(x), b.registered, w);
      S += b.key + "-" + P.name, s !== void 0 && (S += " " + s);
      var k = u && a === void 0 ? xl(E) : c, m = {};
      for (var R in y)
        u && R === "as" || k(R) && (m[R] = y[R]);
      return m.className = S, T && (m.ref = T), /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(Wp, {
        cache: b,
        serialized: P,
        isStringTag: typeof E == "string"
      }), /* @__PURE__ */ O.createElement(E, m));
    });
    return p.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", p.defaultProps = t.defaultProps, p.__emotion_real = p, p.__emotion_base = o, p.__emotion_styles = d, p.__emotion_forwardProp = a, Object.defineProperty(p, "toString", {
      value: function() {
        return "." + s;
      }
    }), p.withComponent = function(y, b) {
      var T = e(y, ri({}, n, b, {
        shouldForwardProp: Tl(p, b, !0)
      }));
      return T.apply(void 0, d);
    }, p;
  };
}, Yp = [
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
], Ms = Up.bind(null);
Yp.forEach(function(e) {
  Ms[e] = Ms(e);
});
var Io = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var is, wl;
function qp() {
  if (wl) return is;
  wl = 1;
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
  return is = o() ? Object.assign : function(i, s) {
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
  }, is;
}
var ss, Sl;
function ma() {
  if (Sl) return ss;
  Sl = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ss = e, ss;
}
var as, El;
function vu() {
  return El || (El = 1, as = Function.call.bind(Object.prototype.hasOwnProperty)), as;
}
var ls, Cl;
function Gp() {
  if (Cl) return ls;
  Cl = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ ma(), n = {}, r = /* @__PURE__ */ vu();
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
  }, ls = o, ls;
}
var cs, Ol;
function Kp() {
  if (Ol) return cs;
  Ol = 1;
  var e = la(), t = qp(), n = /* @__PURE__ */ ma(), r = /* @__PURE__ */ vu(), o = /* @__PURE__ */ Gp(), i = function() {
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
  return cs = function(a, c) {
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
      arrayOf: E,
      element: S(),
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
            var F = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw F.name = "Invariant Violation", F;
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
        var D = V[W], X = M(D);
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
    function E(N) {
      function j(V, W, J, te, K) {
        if (typeof N != "function")
          return new p("Property `" + K + "` of component `" + J + "` has invalid PropType notation inside arrayOf.");
        var Z = V[W];
        if (!Array.isArray(Z)) {
          var D = M(Z);
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
    function S() {
      function N(j, V, W, J, te) {
        var K = j[V];
        if (!a(K)) {
          var Z = M(K);
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
          var Z = M(K);
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
        var X = JSON.stringify(N, function(ee, F) {
          var se = U(F);
          return se === "symbol" ? String(F) : F;
        });
        return new p("Invalid " + te + " `" + K + "` of value `" + String(Z) + "` " + ("supplied to `" + J + "`, expected one of " + X + "."));
      }
      return y(j);
    }
    function P(N) {
      function j(V, W, J, te, K) {
        if (typeof N != "function")
          return new p("Property `" + K + "` of component `" + J + "` has invalid PropType notation inside objectOf.");
        var Z = V[W], D = M(Z);
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
          var ee = N[H], F = ee(J, te, K, Z, D, n);
          if (F == null)
            return null;
          F.data && r(F.data, "expectedType") && X.push(F.data.expectedType);
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
        var Z = V[W], D = M(Z);
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
        var Z = V[W], D = M(Z);
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
          var F = ee(Z, H, J, te, K + "." + H, n);
          if (F)
            return F;
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
    function M(N) {
      var j = typeof N;
      return Array.isArray(N) ? "array" : N instanceof RegExp ? "object" : L(j, N) ? "symbol" : j;
    }
    function U(N) {
      if (typeof N > "u" || N === null)
        return "" + N;
      var j = M(N);
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
  }, cs;
}
var us, Rl;
function Xp() {
  if (Rl) return us;
  Rl = 1;
  var e = /* @__PURE__ */ ma();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, us = function() {
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
  }, us;
}
var Pl;
function Jp() {
  if (Pl) return Io.exports;
  if (Pl = 1, process.env.NODE_ENV !== "production") {
    var e = la(), t = !0;
    Io.exports = /* @__PURE__ */ Kp()(e.isElement, t);
  } else
    Io.exports = /* @__PURE__ */ Xp()();
  return Io.exports;
}
var Qp = /* @__PURE__ */ Jp();
const l = /* @__PURE__ */ Ep(Qp);
function Zp(e) {
  return e == null || Object.keys(e).length === 0;
}
function ha(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ I(jp, {
    styles: typeof t == "function" ? (o) => t(Zp(o) ? n : o) : t
  });
}
process.env.NODE_ENV !== "production" && (ha.propTypes = {
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
function bu(e, t) {
  const n = Ms(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function em(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const kl = [];
function Il(e) {
  return kl[0] = e, fo(kl);
}
var Mo = { exports: {} }, Ne = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ml;
function tm() {
  if (Ml) return Ne;
  Ml = 1;
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
var Nl;
function nm() {
  return Nl || (Nl = 1, process.env.NODE_ENV !== "production" && function() {
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
var $l;
function rm() {
  return $l || ($l = 1, process.env.NODE_ENV === "production" ? Mo.exports = /* @__PURE__ */ tm() : Mo.exports = /* @__PURE__ */ nm()), Mo.exports;
}
var ii = /* @__PURE__ */ rm();
function on(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function xu(e) {
  if (/* @__PURE__ */ O.isValidElement(e) || ii.isValidElementType(e) || !on(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = xu(e[n]);
  }), t;
}
function It(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return on(e) && on(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ O.isValidElement(t[o]) || ii.isValidElementType(t[o]) ? r[o] = t[o] : on(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && on(e[o]) ? r[o] = It(e[o], t[o], n) : n.clone ? r[o] = on(t[o]) ? xu(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const om = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function im(e) {
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
  } = e, i = om(t), s = Object.keys(i);
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
function sm(e, t) {
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
function am(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function lm(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Cn(18, `(${t})`));
    return null;
  }
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function cm(e) {
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
const um = {
  borderRadius: 4
}, Mn = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.string, l.object, l.array]) : {};
function Fr(e, t) {
  return t ? It(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Oi = {
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
}, Al = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Oi[e]}px)`
}, dm = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Oi[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function yn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Al;
    return t.reduce((s, a, c) => (s[i.up(i.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Al;
    return Object.keys(t).reduce((s, a) => {
      if (am(i.keys, a)) {
        const c = lm(r.containerQueries ? r : dm, a);
        c && (s[c] = n(t[a], a));
      } else if (Object.keys(i.values || Oi).includes(a)) {
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
function fm(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function pm(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function he(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Cn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ri(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function si(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Ri(e, n) || r, t && (o = t(o, r, e)), o;
}
function Ge(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], c = s.theme, u = Ri(c, r) || {};
    return yn(s, a, (d) => {
      let h = si(u, o, d);
      return d === h && typeof d == "string" && (h = si(u, o, `${t}${d === "default" ? "" : he(d)}`, d)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Mn
  } : {}, i.filterProps = [t], i;
}
function mm(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const hm = {
  m: "margin",
  p: "padding"
}, gm = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Dl = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ym = mm((e) => {
  if (e.length > 2)
    if (Dl[e])
      e = Dl[e];
    else
      return [e];
  const [t, n] = e.split(""), r = hm[t], o = gm[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Pi = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ki = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], vm = [...Pi, ...ki];
function ho(e, t, n, r) {
  const o = Ri(e, t, !0) ?? n;
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
function ga(e) {
  return ho(e, "spacing", 8, "spacing");
}
function go(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function bm(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = go(t, n), r), {});
}
function xm(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const o = ym(n), i = bm(o, r), s = e[n];
  return yn(e, s, i);
}
function Tu(e, t) {
  const n = ga(e.theme);
  return Object.keys(e).map((r) => xm(e, t, r, n)).reduce(Fr, {});
}
function Ue(e) {
  return Tu(e, Pi);
}
Ue.propTypes = process.env.NODE_ENV !== "production" ? Pi.reduce((e, t) => (e[t] = Mn, e), {}) : {};
Ue.filterProps = Pi;
function Ye(e) {
  return Tu(e, ki);
}
Ye.propTypes = process.env.NODE_ENV !== "production" ? ki.reduce((e, t) => (e[t] = Mn, e), {}) : {};
Ye.filterProps = ki;
process.env.NODE_ENV !== "production" && vm.reduce((e, t) => (e[t] = Mn, e), {});
function wu(e = 8, t = ga({
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
function Ii(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? Fr(o, t[i](r)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, o) => Object.assign(r, o.propTypes), {}) : {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Bt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Wt(e, t) {
  return Ge({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Tm = Wt("border", Bt), wm = Wt("borderTop", Bt), Sm = Wt("borderRight", Bt), Em = Wt("borderBottom", Bt), Cm = Wt("borderLeft", Bt), Om = Wt("borderColor"), Rm = Wt("borderTopColor"), Pm = Wt("borderRightColor"), km = Wt("borderBottomColor"), Im = Wt("borderLeftColor"), Mm = Wt("outline", Bt), Nm = Wt("outlineColor"), Mi = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ho(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: go(t, r)
    });
    return yn(e, e.borderRadius, n);
  }
  return null;
};
Mi.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Mn
} : {};
Mi.filterProps = ["borderRadius"];
Ii(Tm, wm, Sm, Em, Cm, Om, Rm, Pm, km, Im, Mi, Mm, Nm);
const Ni = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ho(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: go(t, r)
    });
    return yn(e, e.gap, n);
  }
  return null;
};
Ni.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Mn
} : {};
Ni.filterProps = ["gap"];
const $i = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ho(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: go(t, r)
    });
    return yn(e, e.columnGap, n);
  }
  return null;
};
$i.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Mn
} : {};
$i.filterProps = ["columnGap"];
const Ai = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ho(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: go(t, r)
    });
    return yn(e, e.rowGap, n);
  }
  return null;
};
Ai.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Mn
} : {};
Ai.filterProps = ["rowGap"];
const $m = Ge({
  prop: "gridColumn"
}), Am = Ge({
  prop: "gridRow"
}), Dm = Ge({
  prop: "gridAutoFlow"
}), _m = Ge({
  prop: "gridAutoColumns"
}), Bm = Ge({
  prop: "gridAutoRows"
}), Lm = Ge({
  prop: "gridTemplateColumns"
}), jm = Ge({
  prop: "gridTemplateRows"
}), Fm = Ge({
  prop: "gridTemplateAreas"
}), zm = Ge({
  prop: "gridArea"
});
Ii(Ni, $i, Ai, $m, Am, Dm, _m, Bm, Lm, jm, Fm, zm);
function fr(e, t) {
  return t === "grey" ? t : e;
}
const Vm = Ge({
  prop: "color",
  themeKey: "palette",
  transform: fr
}), Hm = Ge({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: fr
}), Wm = Ge({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: fr
});
Ii(Vm, Hm, Wm);
function Rt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Um = Ge({
  prop: "width",
  transform: Rt
}), ya = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, a, c;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || Oi[n];
      return r ? ((c = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: Rt(n)
      };
    };
    return yn(e, e.maxWidth, t);
  }
  return null;
};
ya.filterProps = ["maxWidth"];
const Ym = Ge({
  prop: "minWidth",
  transform: Rt
}), qm = Ge({
  prop: "height",
  transform: Rt
}), Gm = Ge({
  prop: "maxHeight",
  transform: Rt
}), Km = Ge({
  prop: "minHeight",
  transform: Rt
});
Ge({
  prop: "size",
  cssProperty: "width",
  transform: Rt
});
Ge({
  prop: "size",
  cssProperty: "height",
  transform: Rt
});
const Xm = Ge({
  prop: "boxSizing"
});
Ii(Um, ya, Ym, qm, Gm, Km, Xm);
const yo = {
  // borders
  border: {
    themeKey: "borders",
    transform: Bt
  },
  borderTop: {
    themeKey: "borders",
    transform: Bt
  },
  borderRight: {
    themeKey: "borders",
    transform: Bt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Bt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Bt
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
    transform: Bt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Mi
  },
  // palette
  color: {
    themeKey: "palette",
    transform: fr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: fr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: fr
  },
  // spacing
  p: {
    style: Ye
  },
  pt: {
    style: Ye
  },
  pr: {
    style: Ye
  },
  pb: {
    style: Ye
  },
  pl: {
    style: Ye
  },
  px: {
    style: Ye
  },
  py: {
    style: Ye
  },
  padding: {
    style: Ye
  },
  paddingTop: {
    style: Ye
  },
  paddingRight: {
    style: Ye
  },
  paddingBottom: {
    style: Ye
  },
  paddingLeft: {
    style: Ye
  },
  paddingX: {
    style: Ye
  },
  paddingY: {
    style: Ye
  },
  paddingInline: {
    style: Ye
  },
  paddingInlineStart: {
    style: Ye
  },
  paddingInlineEnd: {
    style: Ye
  },
  paddingBlock: {
    style: Ye
  },
  paddingBlockStart: {
    style: Ye
  },
  paddingBlockEnd: {
    style: Ye
  },
  m: {
    style: Ue
  },
  mt: {
    style: Ue
  },
  mr: {
    style: Ue
  },
  mb: {
    style: Ue
  },
  ml: {
    style: Ue
  },
  mx: {
    style: Ue
  },
  my: {
    style: Ue
  },
  margin: {
    style: Ue
  },
  marginTop: {
    style: Ue
  },
  marginRight: {
    style: Ue
  },
  marginBottom: {
    style: Ue
  },
  marginLeft: {
    style: Ue
  },
  marginX: {
    style: Ue
  },
  marginY: {
    style: Ue
  },
  marginInline: {
    style: Ue
  },
  marginInlineStart: {
    style: Ue
  },
  marginInlineEnd: {
    style: Ue
  },
  marginBlock: {
    style: Ue
  },
  marginBlockStart: {
    style: Ue
  },
  marginBlockEnd: {
    style: Ue
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
    style: Ni
  },
  rowGap: {
    style: Ai
  },
  columnGap: {
    style: $i
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
    transform: Rt
  },
  maxWidth: {
    style: ya
  },
  minWidth: {
    transform: Rt
  },
  height: {
    transform: Rt
  },
  maxHeight: {
    transform: Rt
  },
  minHeight: {
    transform: Rt
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
function Jm(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Qm(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Zm() {
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
    const h = Ri(o, u) || {};
    return d ? d(s) : yn(s, r, (v) => {
      let p = si(h, f, v);
      return v === p && typeof v == "string" && (p = si(h, f, `${n}${v === "default" ? "" : he(v)}`, v)), c === !1 ? p : {
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
      const u = fm(o.breakpoints), f = Object.keys(u);
      let d = u;
      return Object.keys(c).forEach((h) => {
        const g = Qm(c[h], o);
        if (g != null)
          if (typeof g == "object")
            if (i[h])
              d = Fr(d, e(h, g, o, i));
            else {
              const v = yn({
                theme: o
              }, g, (p) => ({
                [h]: p
              }));
              Jm(v, g) ? d[h] = t({
                sx: g,
                theme: o
              }) : d = Fr(d, v);
            }
          else
            d = Fr(d, e(h, g, o, i));
      }), sm(o, pm(f, d));
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const On = Zm();
On.filterProps = ["sx"];
function eh(e, t) {
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
function Di(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, a = im(n), c = wu(o);
  let u = It({
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
      ...um,
      ...i
    }
  }, s);
  return u = cm(u), u.applyStyles = eh, u = t.reduce((f, d) => It(f, d), u), u.unstable_sxConfig = {
    ...yo,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(d) {
    return On({
      sx: d,
      theme: this
    });
  }, u;
}
function th(e) {
  return Object.keys(e).length === 0;
}
function va(e = null) {
  const t = O.useContext(po);
  return !t || th(t) ? e : t;
}
const nh = Di();
function _i(e = nh) {
  return va(e);
}
function Su({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = _i(n), o = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ I(ha, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (Su.propTypes = {
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
const rh = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? yo;
  return Object.keys(e).forEach((o) => {
    n[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function Eu(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: r,
    otherProps: o
  } = rh(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...s) => {
    const a = t(...s);
    return on(a) ? {
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
const _l = (e) => e, oh = () => {
  let e = _l;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = _l;
    }
  };
}, Cu = oh();
function Ou(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ou(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function xe() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ou(e)) && (r && (r += " "), r += t);
  return r;
}
function ih(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = bu("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(On);
  return /* @__PURE__ */ O.forwardRef(function(c, u) {
    const f = _i(n), {
      className: d,
      component: h = "div",
      ...g
    } = Eu(c);
    return /* @__PURE__ */ I(i, {
      as: h,
      ref: u,
      className: xe(d, o ? o(r) : r),
      theme: t && f[t] || f,
      ...g
    });
  });
}
const sh = {
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
function ht(e, t, n = "Mui") {
  const r = sh[t];
  return r ? `${n}-${r}` : `${Cu.generate(e)}-${t}`;
}
function Ct(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = ht(e, o, n);
  }), r;
}
function Ru(e, t = "") {
  return e.displayName || e.name || t;
}
function Bl(e, t, n) {
  const r = Ru(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function ah(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ru(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ii.ForwardRef:
          return Bl(e, e.render, "ForwardRef");
        case ii.Memo:
          return Bl(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Pu(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: Il(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Il(o.style));
  }), r;
}
const lh = Di();
function ds(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function ch(e) {
  return e ? (t, n) => n[e] : null;
}
function uh(e, t, n) {
  e.theme = ph(e.theme) ? n : e.theme[t] || e.theme;
}
function Ko(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((r) => Ko(e, r));
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
    return ku(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function ku(e, t, n = []) {
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
function Iu(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = lh,
    rootShouldForwardProp: r = ds,
    slotShouldForwardProp: o = ds
  } = e;
  function i(a) {
    uh(a, t, n);
  }
  return (a, c = {}) => {
    em(a, (x) => x.filter((w) => w !== On));
    const {
      name: u,
      slot: f,
      skipVariantsResolver: d,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: g = ch(Mu(f)),
      ...v
    } = c, p = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), y = h || !1;
    let b = ds;
    f === "Root" || f === "root" ? b = r : f ? b = o : mh(a) && (b = void 0);
    const T = bu(a, {
      shouldForwardProp: b,
      label: fh(u, f),
      ...v
    }), E = (x) => {
      if (typeof x == "function" && x.__emotion_real !== x)
        return function(C) {
          return Ko(C, x);
        };
      if (on(x)) {
        const w = Pu(x);
        return w.variants ? function(P) {
          return Ko(P, w);
        } : w.style;
      }
      return x;
    }, S = (...x) => {
      const w = [], C = x.map(E), P = [];
      if (w.push(i), u && g && P.push(function(_) {
        var M, U;
        const A = (U = (M = _.theme.components) == null ? void 0 : M[u]) == null ? void 0 : U.styleOverrides;
        if (!A)
          return null;
        const L = {};
        for (const Y in A)
          L[Y] = Ko(_, A[Y]);
        return g(_, L);
      }), u && !p && P.push(function(_) {
        var L, M;
        const B = _.theme, A = (M = (L = B == null ? void 0 : B.components) == null ? void 0 : L[u]) == null ? void 0 : M.variants;
        return A ? ku(_, A) : null;
      }), y || P.push(On), Array.isArray(C[0])) {
        const R = C.shift(), _ = new Array(w.length).fill(""), B = new Array(P.length).fill("");
        let A;
        A = [..._, ...R, ...B], A.raw = [..._, ...R.raw, ...B], w.unshift(A);
      }
      const k = [...w, ...C, ...P], m = T(...k);
      return a.muiName && (m.muiName = a.muiName), process.env.NODE_ENV !== "production" && (m.displayName = dh(u, f, a)), m;
    };
    return T.withConfig && (S.withConfig = T.withConfig), S;
  };
}
function dh(e, t, n) {
  return e ? `${e}${he(t || "")}` : `Styled(${ah(n)})`;
}
function fh(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${Mu(t || "Root")}`), n;
}
function ph(e) {
  for (const t in e)
    return !1;
  return !0;
}
function mh(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Mu(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const hh = Iu();
function Jr(e, t) {
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
              n[o][c] = Jr(i[c], s[c]);
            }
        }
      } else n[o] === void 0 && (n[o] = e[o]);
    }
  return n;
}
function Nu(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Jr(t.components[n].defaultProps, r);
}
function gh({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = _i(n);
  return r && (o = o[r] || o), Nu({
    theme: o,
    name: t,
    props: e
  });
}
const qn = typeof window < "u" ? O.useLayoutEffect : O.useEffect;
function yh(e, t, n, r, o) {
  const [i, s] = O.useState(() => o && n ? n(e).matches : r ? r(e).matches : t);
  return qn(() => {
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
const vh = {
  ...O
}, $u = vh.useSyncExternalStore;
function bh(e, t, n, r, o) {
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
  return $u(c, a, s);
}
function Au(e = {}) {
  const {
    themeId: t
  } = e;
  return function(r, o = {}) {
    let i = va();
    i && t && (i = i[t] || i);
    const s = typeof window < "u" && typeof window.matchMedia < "u", {
      defaultMatches: a = !1,
      matchMedia: c = s ? window.matchMedia : null,
      ssrMatchMedia: u = null,
      noSsr: f = !1
    } = Nu({
      name: "MuiUseMediaQuery",
      props: o,
      theme: i
    });
    process.env.NODE_ENV !== "production" && typeof r == "function" && i === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
    let d = typeof r == "function" ? r(i) : r;
    d = d.replace(/^@media( ?)/m, "");
    const g = ($u !== void 0 ? bh : yh)(d, a, c, u, f);
    return process.env.NODE_ENV !== "production" && O.useDebugValue({
      query: d,
      match: g
    }), g;
  };
}
Au();
function xh(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function ba(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), xh(e, t, n);
}
function Th(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Rn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Rn(Th(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Cn(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Cn(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const wh = (e) => {
  const t = Rn(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, _r = (e, t) => {
  try {
    return wh(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Bi(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Du(e) {
  e = Rn(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, f = (u + n / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let a = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", c.push(t[3])), Bi({
    type: a,
    values: c
  });
}
function Ns(e) {
  e = Rn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Rn(Du(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Ll(e, t) {
  const n = Ns(e), r = Ns(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Gt(e, t) {
  return e = Rn(e), t = ba(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Bi(e);
}
function No(e, t, n) {
  try {
    return Gt(e, t);
  } catch {
    return e;
  }
}
function Li(e, t) {
  if (e = Rn(e), t = ba(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Bi(e);
}
function De(e, t, n) {
  try {
    return Li(e, t);
  } catch {
    return e;
  }
}
function ji(e, t) {
  if (e = Rn(e), t = ba(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Bi(e);
}
function _e(e, t, n) {
  try {
    return ji(e, t);
  } catch {
    return e;
  }
}
function Sh(e, t = 0.15) {
  return Ns(e) > 0.5 ? Li(e, t) : ji(e, t);
}
function $o(e, t, n) {
  try {
    return Sh(e, t);
  } catch {
    return e;
  }
}
function Nn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Eh(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function _u(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  const c = i.type;
  return typeof c == "function" && !Eh(c) && (a = "Did you accidentally use a plain function component for an element instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const $n = Nn(l.element, _u);
$n.isRequired = Nn(l.element.isRequired, _u);
function Ch(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Oh(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof i == "function" && !Ch(i) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Bu = Nn(l.elementType, Oh), Rh = "exact-prop: ​";
function vo(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Rh]: (t) => {
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
const Fi = l.oneOfType([l.func, l.object]);
function jl(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function Lu(e, t = 166) {
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
function xt(e) {
  return e && e.ownerDocument || document;
}
function Pn(e) {
  return xt(e).defaultView || window;
}
function $s(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Fl = 0;
function Ph(e) {
  const [t, n] = O.useState(e), r = e || t;
  return O.useEffect(() => {
    t == null && (Fl += 1, n(`mui-${Fl}`));
  }, [t]), r;
}
const kh = {
  ...O
}, zl = kh.useId;
function xa(e) {
  if (zl !== void 0) {
    const t = zl();
    return e ?? t;
  }
  return Ph(e);
}
function Ih({
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
function gn(e) {
  const t = O.useRef(e);
  return qn(() => {
    t.current = e;
  }), O.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Et(...e) {
  return O.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      $s(n, t);
    });
  }, e);
}
const Vl = {};
function ju(e, t) {
  const n = O.useRef(Vl);
  return n.current === Vl && (n.current = e(t)), n;
}
const Mh = [];
function Nh(e) {
  O.useEffect(e, Mh);
}
class zi {
  constructor() {
    Pr(this, "currentId", null);
    Pr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Pr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new zi();
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
function ur() {
  const e = ju(zi.create).current;
  return Nh(e.disposeEffect), e;
}
function ai(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function $h(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function Ah(e) {
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
function Fu(e, t, n, r) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const i = Ah(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function zu(e, t, ...n) {
  return e[t] === void 0 ? null : Fu(e, t, ...n);
}
function As() {
  return null;
}
zu.isRequired = Fu;
As.isRequired = As;
const Ta = process.env.NODE_ENV === "production" ? As : zu;
function At(e, t, n = void 0) {
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
function Dh(e) {
  return typeof e == "string";
}
function Vu(e, t, n) {
  return e === void 0 || Dh(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function Hu(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Hl(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Wu(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const g = xe(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), v = {
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
  const s = Hu({
    ...o,
    ...r
  }), a = Hl(r), c = Hl(o), u = t(s), f = xe(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), d = {
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
function Uu(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function _h(e) {
  var d;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : Uu(n, r), {
    props: a,
    internalRef: c
  } = Wu({
    ...i,
    externalSlotProps: s
  }), u = Et(c, s == null ? void 0 : s.ref, (d = e.additionalProps) == null ? void 0 : d.ref);
  return Vu(t, {
    ...a,
    ref: u
  }, r);
}
function Xn(e) {
  var t;
  return parseInt(O.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const wa = /* @__PURE__ */ O.createContext(null);
process.env.NODE_ENV !== "production" && (wa.displayName = "ThemeContext");
function Sa() {
  const e = O.useContext(wa);
  return process.env.NODE_ENV !== "production" && O.useDebugValue(e), e;
}
const Bh = typeof Symbol == "function" && Symbol.for, Lh = Bh ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function jh(e, t) {
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
function li(e) {
  const {
    children: t,
    theme: n
  } = e, r = Sa();
  process.env.NODE_ENV !== "production" && r === null && typeof n == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = O.useMemo(() => {
    const i = r === null ? {
      ...n
    } : jh(r, n);
    return i != null && (i[Lh] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ I(wa.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (li.propTypes = {
  /**
   * Your component tree.
   */
  children: l.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: l.oneOfType([l.object, l.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (li.propTypes = vo(li.propTypes));
const Yu = /* @__PURE__ */ O.createContext();
function qu({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ I(Yu.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (qu.propTypes = {
  children: l.node,
  value: l.bool
});
const Ea = () => O.useContext(Yu) ?? !1, Gu = /* @__PURE__ */ O.createContext(void 0);
function Ku({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ I(Gu.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Ku.propTypes = {
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
function Fh(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Jr(o.defaultProps, r) : !o.styleOverrides && !o.variants ? Jr(o, r) : r;
}
function zh({
  props: e,
  name: t
}) {
  const n = O.useContext(Gu);
  return Fh({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const Wl = {};
function Ul(e, t, n, r = !1) {
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
function Qr(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = va(Wl), i = Sa() || Wl;
  process.env.NODE_ENV !== "production" && (o === null && typeof n == "function" || r && o && !o[r] && typeof n == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = Ul(r, o, n), a = Ul(r, i, n, !0), c = (r ? s[r] : s).direction === "rtl";
  return /* @__PURE__ */ I(li, {
    theme: a,
    children: /* @__PURE__ */ I(po.Provider, {
      value: s,
      children: /* @__PURE__ */ I(qu, {
        value: c,
        children: /* @__PURE__ */ I(Ku, {
          value: r ? s[r].components : s.components,
          children: t
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Qr.propTypes = {
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
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Qr.propTypes = vo(Qr.propTypes));
const Yl = {
  theme: void 0
};
function Vh(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Yl.theme = o.theme, i = Pu(e(Yl)), t = i, n = o.theme), i;
  };
}
const Ca = "mode", Oa = "color-scheme", Hh = "data-color-scheme";
function Wh(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = Ca,
    colorSchemeStorageKey: i = Oa,
    attribute: s = Hh,
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
  return /* @__PURE__ */ I("script", {
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
function Uh() {
}
const Yh = ({
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
      return Uh;
    const r = (o) => {
      const i = o.newValue;
      o.key === e && n(i);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function fs() {
}
function ql(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Xu(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function qh(e) {
  return Xu(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function Gh(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = Ca,
    colorSchemeStorageKey: s = Oa,
    storageWindow: a = typeof window > "u" ? void 0 : window,
    storageManager: c = Yh,
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
      systemMode: ql(P),
      lightColorScheme: k,
      darkColorScheme: m
    };
  }), [b, T] = O.useState(u || !d);
  O.useEffect(() => {
    T(!0);
  }, []);
  const E = qh(p), S = O.useCallback((P) => {
    y((k) => {
      if (P === k.mode)
        return k;
      const m = P ?? t;
      return h == null || h.set(m), {
        ...k,
        mode: m,
        systemMode: ql(m)
      };
    });
  }, [h, t]), x = O.useCallback((P) => {
    P ? typeof P == "string" ? P && !f.includes(P) ? console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`) : y((k) => {
      const m = {
        ...k
      };
      return Xu(k, (R) => {
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
        (!R || ["light", "dark", "system"].includes(R)) && S(R || t);
      })) || fs, k = (g == null ? void 0 : g.subscribe((R) => {
        (!R || f.match(R)) && x({
          light: R
        });
      })) || fs, m = (v == null ? void 0 : v.subscribe((R) => {
        (!R || f.match(R)) && x({
          dark: R
        });
      })) || fs;
      return () => {
        P(), k(), m();
      };
    }
  }, [x, S, f, t, a, d, h, g, v]), {
    ...p,
    mode: b ? p.mode : void 0,
    systemMode: b ? p.systemMode : void 0,
    colorScheme: b ? E : void 0,
    setMode: S,
    setColorScheme: x
  };
}
const Kh = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Xh(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = Ca,
    colorSchemeStorageKey: o = Oa,
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
    var pt, vt, Ot, mt;
    const {
      children: T,
      theme: E,
      modeStorageKey: S = r,
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
    } = b, M = O.useRef(!1), U = Sa(), Y = O.useContext(u), G = !!Y && !R, N = O.useMemo(() => E || (typeof n == "function" ? n() : n), [E]), j = N[t], V = j || N, {
      colorSchemes: W = d,
      components: J = h,
      cssVarPrefix: te
    } = V, K = Object.keys(W).filter((ke) => !!W[ke]).join(","), Z = O.useMemo(() => K.split(","), [K]), D = typeof s == "string" ? s : s.light, X = typeof s == "string" ? s : s.dark, H = W[D] && W[X] ? B : ((vt = (pt = W[V.defaultColorScheme]) == null ? void 0 : pt.palette) == null ? void 0 : vt.mode) || ((Ot = V.palette) == null ? void 0 : Ot.mode), {
      mode: ee,
      setMode: F,
      systemMode: se,
      lightColorScheme: ge,
      darkColorScheme: Ce,
      colorScheme: Ke,
      setColorScheme: be
    } = Gh({
      supportedColorSchemes: Z,
      defaultLightColorScheme: D,
      defaultDarkColorScheme: X,
      modeStorageKey: S,
      colorSchemeStorageKey: x,
      defaultMode: H,
      storageManager: C,
      storageWindow: P,
      noSsr: L
    });
    let Te = ee, de = Ke;
    G && (Te = Y.mode, de = Y.colorScheme), process.env.NODE_ENV !== "production" && A && !V.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let Me = de || V.defaultColorScheme;
    V.vars && !A && (Me = V.defaultColorScheme);
    const ye = O.useMemo(() => {
      var We;
      const ke = ((We = V.generateThemeVars) == null ? void 0 : We.call(V)) || V.vars, fe = {
        ...V,
        components: J,
        colorSchemes: W,
        cssVarPrefix: te,
        vars: ke
      };
      if (typeof fe.generateSpacing == "function" && (fe.spacing = fe.generateSpacing()), Me) {
        const Xe = W[Me];
        Xe && typeof Xe == "object" && Object.keys(Xe).forEach((Le) => {
          Xe[Le] && typeof Xe[Le] == "object" ? fe[Le] = {
            ...fe[Le],
            ...Xe[Le]
          } : fe[Le] = Xe[Le];
        });
      }
      return a ? a(fe) : fe;
    }, [V, Me, J, W, te]), ne = V.colorSchemeSelector;
    qn(() => {
      if (de && m && ne && ne !== "media") {
        const ke = ne;
        let fe = ne;
        if (ke === "class" && (fe = ".%s"), ke === "data" && (fe = "[data-%s]"), ke != null && ke.startsWith("data-") && !ke.includes("%s") && (fe = `[${ke}="%s"]`), fe.startsWith("."))
          m.classList.remove(...Z.map((We) => fe.substring(1).replace("%s", We))), m.classList.add(fe.substring(1).replace("%s", de));
        else {
          const We = fe.replace("%s", de).match(/\[([^\]]+)\]/);
          if (We) {
            const [Xe, Le] = We[1].split("=");
            Le || Z.forEach((Zn) => {
              m.removeAttribute(Xe.replace(de, Zn));
            }), m.setAttribute(Xe, Le ? Le.replace(/"|'/g, "") : "");
          } else
            m.setAttribute(fe, de);
        }
      }
    }, [de, ne, m, Z]), O.useEffect(() => {
      let ke;
      if (w && M.current && k) {
        const fe = k.createElement("style");
        fe.appendChild(k.createTextNode(Kh)), k.head.appendChild(fe), window.getComputedStyle(k.body), ke = setTimeout(() => {
          k.head.removeChild(fe);
        }, 1);
      }
      return () => {
        clearTimeout(ke);
      };
    }, [de, w, k]), O.useEffect(() => (M.current = !0, () => {
      M.current = !1;
    }), []);
    const tt = O.useMemo(() => ({
      allColorSchemes: Z,
      colorScheme: de,
      darkColorScheme: Ce,
      lightColorScheme: ge,
      mode: Te,
      setColorScheme: be,
      setMode: process.env.NODE_ENV === "production" ? F : (ke) => {
        ye.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), F(ke);
      },
      systemMode: se
    }), [Z, de, Ce, ge, Te, be, F, se, ye.colorSchemeSelector]);
    let it = !0;
    (_ || V.cssVariables === !1 || G && (U == null ? void 0 : U.cssVarPrefix) === te) && (it = !1);
    const st = /* @__PURE__ */ Ae(O.Fragment, {
      children: [/* @__PURE__ */ I(Qr, {
        themeId: j ? t : void 0,
        theme: ye,
        children: T
      }), it && /* @__PURE__ */ I(ha, {
        styles: ((mt = ye.generateStyleSheets) == null ? void 0 : mt.call(ye)) || []
      })]
    });
    return G ? st : /* @__PURE__ */ I(u.Provider, {
      value: tt,
      children: st
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
    getInitColorSchemeScript: (b) => Wh({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: v,
      defaultDarkColorScheme: p,
      modeStorageKey: r,
      ...b
    })
  };
}
function Jh(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const Gl = (e, t, n, r = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = n : o && typeof o == "object" && (o[i] = n) : o && typeof o == "object" && (o[i] || (o[i] = r.includes(i) ? [] : {}), o = o[i]);
  });
}, Qh = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([a, c]) => {
      (!n || n && !n([...i, a])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...i, a], Array.isArray(c) ? [...s, a] : s) : t([...i, a], c, s));
    });
  }
  r(e);
}, Zh = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function ps(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return Qh(
    e,
    (a, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(a, c))) {
        const f = `--${n ? `${n}-` : ""}${a.join("-")}`, d = Zh(a, c);
        Object.assign(o, {
          [f]: d
        }), Gl(i, a, `var(${f})`, u), Gl(s, a, `var(${f}, ${d})`, u);
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
function eg(e, t = {}) {
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
  } = ps(c, t);
  let h = d;
  const g = {}, {
    [a]: v,
    ...p
  } = i;
  if (Object.entries(p || {}).forEach(([E, S]) => {
    const {
      vars: x,
      css: w,
      varsWithDefaults: C
    } = ps(S, t);
    h = It(h, C), g[E] = {
      css: w,
      vars: x
    };
  }), v) {
    const {
      css: E,
      vars: S,
      varsWithDefaults: x
    } = ps(v, t);
    h = It(h, x), g[a] = {
      css: E,
      vars: S
    };
  }
  function y(E, S) {
    var w, C;
    let x = o;
    if (o === "class" && (x = ".%s"), o === "data" && (x = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (x = `[${o}="%s"]`), E) {
      if (x === "media")
        return e.defaultColorScheme === E ? ":root" : {
          [`@media (prefers-color-scheme: ${((C = (w = i[E]) == null ? void 0 : w.palette) == null ? void 0 : C.mode) || E})`]: {
            ":root": S
          }
        };
      if (x)
        return e.defaultColorScheme === E ? `:root, ${x.replace("%s", String(E))}` : x.replace("%s", String(E));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let E = {
        ...u
      };
      return Object.entries(g).forEach(([, {
        vars: S
      }]) => {
        E = It(E, S);
      }), E;
    },
    generateStyleSheets: () => {
      var P, k;
      const E = [], S = e.defaultColorScheme || "light";
      function x(m, R) {
        Object.keys(R).length && E.push(typeof m == "string" ? {
          [m]: {
            ...R
          }
        } : m);
      }
      x(n(void 0, {
        ...f
      }), f);
      const {
        [S]: w,
        ...C
      } = g;
      if (w) {
        const {
          css: m
        } = w, R = (k = (P = i[S]) == null ? void 0 : P.palette) == null ? void 0 : k.mode, _ = !r && R ? {
          colorScheme: R,
          ...m
        } : {
          ...m
        };
        x(n(S, {
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
      }), E;
    }
  };
}
function tg(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const ng = Di(), rg = hh("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`maxWidth${he(String(n.maxWidth))}`], n.fixed && t.fixed, n.disableGutters && t.disableGutters];
  }
}), og = (e) => gh({
  props: e,
  name: "MuiContainer",
  defaultTheme: ng
}), ig = (e, t) => {
  const n = (c) => ht(t, c), {
    classes: r,
    fixed: o,
    disableGutters: i,
    maxWidth: s
  } = e, a = {
    root: ["root", s && `maxWidth${he(String(s))}`, o && "fixed", i && "disableGutters"]
  };
  return At(a, n, r);
};
function sg(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = rg,
    useThemeProps: n = og,
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
    }, T = ig(b, r);
    return (
      // @ts-ignore theme is injected by the styled util
      /* @__PURE__ */ I(o, {
        as: d,
        ownerState: b,
        className: xe(T.root, f),
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
function Ju() {
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
      paper: qr.white,
      default: qr.white
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
const ag = Ju();
function Qu() {
  return {
    text: {
      primary: qr.white,
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
      active: qr.white,
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
const Kl = Qu();
function Xl(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = ji(e.main, o) : t === "dark" && (e.dark = Li(e.main, i)));
}
function lg(e = "light") {
  return e === "dark" ? {
    main: rr[200],
    light: rr[50],
    dark: rr[400]
  } : {
    main: rr[700],
    light: rr[400],
    dark: rr[800]
  };
}
function cg(e = "light") {
  return e === "dark" ? {
    main: nr[200],
    light: nr[50],
    dark: nr[400]
  } : {
    main: nr[500],
    light: nr[300],
    dark: nr[700]
  };
}
function ug(e = "light") {
  return e === "dark" ? {
    main: tr[500],
    light: tr[300],
    dark: tr[700]
  } : {
    main: tr[700],
    light: tr[400],
    dark: tr[800]
  };
}
function dg(e = "light") {
  return e === "dark" ? {
    main: or[400],
    light: or[300],
    dark: or[700]
  } : {
    main: or[700],
    light: or[500],
    dark: or[900]
  };
}
function fg(e = "light") {
  return e === "dark" ? {
    main: ir[400],
    light: ir[300],
    dark: ir[700]
  } : {
    main: ir[800],
    light: ir[500],
    dark: ir[900]
  };
}
function pg(e = "light") {
  return e === "dark" ? {
    main: kr[400],
    light: kr[300],
    dark: kr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: kr[500],
    dark: kr[900]
  };
}
function Ra(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...o
  } = e, i = e.primary || lg(t), s = e.secondary || cg(t), a = e.error || ug(t), c = e.info || dg(t), u = e.success || fg(t), f = e.warning || pg(t);
  function d(p) {
    const y = Ll(p, Kl.text.primary) >= n ? Kl.text.primary : ag.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const b = Ll(p, y);
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
    darkShade: E = 700
  }) => {
    if (p = {
      ...p
    }, !p.main && p[b] && (p.main = p[b]), !p.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${b}\` property.` : Cn(11, y ? ` (${y})` : "", b));
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
} });` : Cn(12, y ? ` (${y})` : "", JSON.stringify(p.main)));
    return Xl(p, "light", T, r), Xl(p, "dark", E, r), p.contrastText || (p.contrastText = d(p.main)), p;
  };
  let g;
  return t === "light" ? g = Ju() : t === "dark" && (g = Qu()), process.env.NODE_ENV !== "production" && (g || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), It({
    // A collection of common colors.
    common: {
      ...qr
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
    grey: Gf,
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
function mg(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function hg(e, t) {
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
function gg(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Jl = {
  textTransform: "uppercase"
}, Ql = '"Roboto", "Helvetica", "Arial", sans-serif';
function Zu(e, t) {
  const {
    fontFamily: n = Ql,
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
  const h = r / 14, g = f || ((y) => `${y / c * h}rem`), v = (y, b, T, E, S) => ({
    fontFamily: n,
    fontWeight: y,
    fontSize: g(b),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Ql ? {
      letterSpacing: `${gg(E / b)}em`
    } : {},
    ...S,
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
    button: v(s, 14, 1.75, 0.4, Jl),
    caption: v(i, 12, 1.66, 0.4),
    overline: v(i, 12, 2.66, 1, Jl),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return It({
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
const yg = 0.2, vg = 0.14, bg = 0.12;
function ze(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${yg})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${vg})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${bg})`].join(",");
}
const xg = ["none", ze(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ze(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ze(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ze(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ze(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ze(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ze(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ze(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ze(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ze(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ze(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ze(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ze(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ze(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ze(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ze(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ze(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ze(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ze(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ze(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ze(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ze(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ze(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ze(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Tg = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, wg = {
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
function Zl(e) {
  return `${Math.round(e)}ms`;
}
function Sg(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Eg(e) {
  const t = {
    ...Tg,
    ...e.easing
  }, n = {
    ...wg,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Sg,
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
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof s == "string" ? s : Zl(s)} ${a} ${typeof c == "string" ? c : Zl(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const Cg = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Og(e) {
  return on(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ed(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !Og(a) || s.startsWith("unstable_") ? delete r[s] : on(a) && (r[s] = {
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
function Ds(e = {}, ...t) {
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Cn(20));
  const f = Ra(i), d = Di(e);
  let h = It(d, {
    mixins: hg(d.breakpoints, r),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: xg.slice(),
    typography: Zu(f, a),
    transitions: Eg(s),
    zIndex: {
      ...Cg
    }
  });
  if (h = It(h, u), h = t.reduce((g, v) => It(g, v), h), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], v = (p, y) => {
      let b;
      for (b in p) {
        const T = p[b];
        if (g.includes(b) && Object.keys(T).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const E = ht("", b);
            console.error([`MUI: The \`${y}\` component increases the CSS specificity of the \`${b}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${E}' syntax:`, JSON.stringify({
              root: {
                [`&.${E}`]: T
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
    return On({
      sx: v,
      theme: this
    });
  }, h.toRuntimeSource = ed, h;
}
function _s(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Rg = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = _s(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function td(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function nd(e) {
  return e === "dark" ? Rg : [];
}
function Pg(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...o
  } = e, i = Ra(t);
  return {
    palette: i,
    opacity: {
      ...td(i.mode),
      ...n
    },
    overlays: r || nd(i.mode),
    ...o
  };
}
function kg(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Ig = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Mg = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Ig(e.cssVarPrefix).forEach((a) => {
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
function Ng(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function z(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Br(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Du(e);
}
function mn(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = _r(Br(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function $g(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Zt = (e) => {
  try {
    return e();
  } catch {
  }
}, Ag = (e = "mui") => Jh(e);
function ms(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = Pg({
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
  } = Ds({
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
      ...td(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || nd(o)
  }, s;
}
function Dg(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = kg,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...u
  } = e, f = Object.keys(n)[0], d = r || (n.light && f !== "light" ? "light" : f), h = Ag(i), {
    [d]: g,
    light: v,
    dark: p,
    ...y
  } = n, b = {
    ...y
  };
  let T = g;
  if ((d === "dark" && !("dark" in n) || d === "light" && !("light" in n)) && (T = !0), !T)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${d}\` option is either missing or invalid.` : Cn(21, d));
  const E = ms(b, T, u, d);
  v && !b.light && ms(b, v, void 0, "light"), p && !b.dark && ms(b, p, void 0, "dark");
  let S = {
    defaultColorScheme: d,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: c,
    getCssVar: h,
    colorSchemes: b,
    font: {
      ...mg(E.typography),
      ...E.font
    },
    spacing: $g(u.spacing)
  };
  Object.keys(S.colorSchemes).forEach((k) => {
    const m = S.colorSchemes[k].palette, R = (_) => {
      const B = _.split("-"), A = B[1], L = B[2];
      return h(_, m[A][L]);
    };
    if (m.mode === "light" && (z(m.common, "background", "#fff"), z(m.common, "onBackground", "#000")), m.mode === "dark" && (z(m.common, "background", "#000"), z(m.common, "onBackground", "#fff")), Ng(m, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), m.mode === "light") {
      z(m.Alert, "errorColor", De(m.error.light, 0.6)), z(m.Alert, "infoColor", De(m.info.light, 0.6)), z(m.Alert, "successColor", De(m.success.light, 0.6)), z(m.Alert, "warningColor", De(m.warning.light, 0.6)), z(m.Alert, "errorFilledBg", R("palette-error-main")), z(m.Alert, "infoFilledBg", R("palette-info-main")), z(m.Alert, "successFilledBg", R("palette-success-main")), z(m.Alert, "warningFilledBg", R("palette-warning-main")), z(m.Alert, "errorFilledColor", Zt(() => m.getContrastText(m.error.main))), z(m.Alert, "infoFilledColor", Zt(() => m.getContrastText(m.info.main))), z(m.Alert, "successFilledColor", Zt(() => m.getContrastText(m.success.main))), z(m.Alert, "warningFilledColor", Zt(() => m.getContrastText(m.warning.main))), z(m.Alert, "errorStandardBg", _e(m.error.light, 0.9)), z(m.Alert, "infoStandardBg", _e(m.info.light, 0.9)), z(m.Alert, "successStandardBg", _e(m.success.light, 0.9)), z(m.Alert, "warningStandardBg", _e(m.warning.light, 0.9)), z(m.Alert, "errorIconColor", R("palette-error-main")), z(m.Alert, "infoIconColor", R("palette-info-main")), z(m.Alert, "successIconColor", R("palette-success-main")), z(m.Alert, "warningIconColor", R("palette-warning-main")), z(m.AppBar, "defaultBg", R("palette-grey-100")), z(m.Avatar, "defaultBg", R("palette-grey-400")), z(m.Button, "inheritContainedBg", R("palette-grey-300")), z(m.Button, "inheritContainedHoverBg", R("palette-grey-A100")), z(m.Chip, "defaultBorder", R("palette-grey-400")), z(m.Chip, "defaultAvatarColor", R("palette-grey-700")), z(m.Chip, "defaultIconColor", R("palette-grey-700")), z(m.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), z(m.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), z(m.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), z(m.LinearProgress, "primaryBg", _e(m.primary.main, 0.62)), z(m.LinearProgress, "secondaryBg", _e(m.secondary.main, 0.62)), z(m.LinearProgress, "errorBg", _e(m.error.main, 0.62)), z(m.LinearProgress, "infoBg", _e(m.info.main, 0.62)), z(m.LinearProgress, "successBg", _e(m.success.main, 0.62)), z(m.LinearProgress, "warningBg", _e(m.warning.main, 0.62)), z(m.Skeleton, "bg", `rgba(${R("palette-text-primaryChannel")} / 0.11)`), z(m.Slider, "primaryTrack", _e(m.primary.main, 0.62)), z(m.Slider, "secondaryTrack", _e(m.secondary.main, 0.62)), z(m.Slider, "errorTrack", _e(m.error.main, 0.62)), z(m.Slider, "infoTrack", _e(m.info.main, 0.62)), z(m.Slider, "successTrack", _e(m.success.main, 0.62)), z(m.Slider, "warningTrack", _e(m.warning.main, 0.62));
      const _ = $o(m.background.default, 0.8);
      z(m.SnackbarContent, "bg", _), z(m.SnackbarContent, "color", Zt(() => m.getContrastText(_))), z(m.SpeedDialAction, "fabHoverBg", $o(m.background.paper, 0.15)), z(m.StepConnector, "border", R("palette-grey-400")), z(m.StepContent, "border", R("palette-grey-400")), z(m.Switch, "defaultColor", R("palette-common-white")), z(m.Switch, "defaultDisabledColor", R("palette-grey-100")), z(m.Switch, "primaryDisabledColor", _e(m.primary.main, 0.62)), z(m.Switch, "secondaryDisabledColor", _e(m.secondary.main, 0.62)), z(m.Switch, "errorDisabledColor", _e(m.error.main, 0.62)), z(m.Switch, "infoDisabledColor", _e(m.info.main, 0.62)), z(m.Switch, "successDisabledColor", _e(m.success.main, 0.62)), z(m.Switch, "warningDisabledColor", _e(m.warning.main, 0.62)), z(m.TableCell, "border", _e(No(m.divider, 1), 0.88)), z(m.Tooltip, "bg", No(m.grey[700], 0.92));
    }
    if (m.mode === "dark") {
      z(m.Alert, "errorColor", _e(m.error.light, 0.6)), z(m.Alert, "infoColor", _e(m.info.light, 0.6)), z(m.Alert, "successColor", _e(m.success.light, 0.6)), z(m.Alert, "warningColor", _e(m.warning.light, 0.6)), z(m.Alert, "errorFilledBg", R("palette-error-dark")), z(m.Alert, "infoFilledBg", R("palette-info-dark")), z(m.Alert, "successFilledBg", R("palette-success-dark")), z(m.Alert, "warningFilledBg", R("palette-warning-dark")), z(m.Alert, "errorFilledColor", Zt(() => m.getContrastText(m.error.dark))), z(m.Alert, "infoFilledColor", Zt(() => m.getContrastText(m.info.dark))), z(m.Alert, "successFilledColor", Zt(() => m.getContrastText(m.success.dark))), z(m.Alert, "warningFilledColor", Zt(() => m.getContrastText(m.warning.dark))), z(m.Alert, "errorStandardBg", De(m.error.light, 0.9)), z(m.Alert, "infoStandardBg", De(m.info.light, 0.9)), z(m.Alert, "successStandardBg", De(m.success.light, 0.9)), z(m.Alert, "warningStandardBg", De(m.warning.light, 0.9)), z(m.Alert, "errorIconColor", R("palette-error-main")), z(m.Alert, "infoIconColor", R("palette-info-main")), z(m.Alert, "successIconColor", R("palette-success-main")), z(m.Alert, "warningIconColor", R("palette-warning-main")), z(m.AppBar, "defaultBg", R("palette-grey-900")), z(m.AppBar, "darkBg", R("palette-background-paper")), z(m.AppBar, "darkColor", R("palette-text-primary")), z(m.Avatar, "defaultBg", R("palette-grey-600")), z(m.Button, "inheritContainedBg", R("palette-grey-800")), z(m.Button, "inheritContainedHoverBg", R("palette-grey-700")), z(m.Chip, "defaultBorder", R("palette-grey-700")), z(m.Chip, "defaultAvatarColor", R("palette-grey-300")), z(m.Chip, "defaultIconColor", R("palette-grey-300")), z(m.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), z(m.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), z(m.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), z(m.LinearProgress, "primaryBg", De(m.primary.main, 0.5)), z(m.LinearProgress, "secondaryBg", De(m.secondary.main, 0.5)), z(m.LinearProgress, "errorBg", De(m.error.main, 0.5)), z(m.LinearProgress, "infoBg", De(m.info.main, 0.5)), z(m.LinearProgress, "successBg", De(m.success.main, 0.5)), z(m.LinearProgress, "warningBg", De(m.warning.main, 0.5)), z(m.Skeleton, "bg", `rgba(${R("palette-text-primaryChannel")} / 0.13)`), z(m.Slider, "primaryTrack", De(m.primary.main, 0.5)), z(m.Slider, "secondaryTrack", De(m.secondary.main, 0.5)), z(m.Slider, "errorTrack", De(m.error.main, 0.5)), z(m.Slider, "infoTrack", De(m.info.main, 0.5)), z(m.Slider, "successTrack", De(m.success.main, 0.5)), z(m.Slider, "warningTrack", De(m.warning.main, 0.5));
      const _ = $o(m.background.default, 0.98);
      z(m.SnackbarContent, "bg", _), z(m.SnackbarContent, "color", Zt(() => m.getContrastText(_))), z(m.SpeedDialAction, "fabHoverBg", $o(m.background.paper, 0.15)), z(m.StepConnector, "border", R("palette-grey-600")), z(m.StepContent, "border", R("palette-grey-600")), z(m.Switch, "defaultColor", R("palette-grey-300")), z(m.Switch, "defaultDisabledColor", R("palette-grey-600")), z(m.Switch, "primaryDisabledColor", De(m.primary.main, 0.55)), z(m.Switch, "secondaryDisabledColor", De(m.secondary.main, 0.55)), z(m.Switch, "errorDisabledColor", De(m.error.main, 0.55)), z(m.Switch, "infoDisabledColor", De(m.info.main, 0.55)), z(m.Switch, "successDisabledColor", De(m.success.main, 0.55)), z(m.Switch, "warningDisabledColor", De(m.warning.main, 0.55)), z(m.TableCell, "border", De(No(m.divider, 1), 0.68)), z(m.Tooltip, "bg", No(m.grey[700], 0.92));
    }
    mn(m.background, "default"), mn(m.background, "paper"), mn(m.common, "background"), mn(m.common, "onBackground"), mn(m, "divider"), Object.keys(m).forEach((_) => {
      const B = m[_];
      _ !== "tonalOffset" && B && typeof B == "object" && (B.main && z(m[_], "mainChannel", _r(Br(B.main))), B.light && z(m[_], "lightChannel", _r(Br(B.light))), B.dark && z(m[_], "darkChannel", _r(Br(B.dark))), B.contrastText && z(m[_], "contrastTextChannel", _r(Br(B.contrastText))), _ === "text" && (mn(m[_], "primary"), mn(m[_], "secondary")), _ === "action" && (B.active && mn(m[_], "active"), B.selected && mn(m[_], "selected")));
    });
  }), S = t.reduce((k, m) => It(k, m), S);
  const x = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: Mg(S)
  }, {
    vars: w,
    generateThemeVars: C,
    generateStyleSheets: P
  } = eg(S, x);
  return S.vars = w, Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([k, m]) => {
    S[k] = m;
  }), S.generateThemeVars = C, S.generateStyleSheets = P, S.generateSpacing = function() {
    return wu(u.spacing, ga(this));
  }, S.getColorSchemeSelector = tg(a), S.spacing = S.generateSpacing(), S.shouldSkipGeneratingVar = s, S.unstable_sxConfig = {
    ...yo,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, S.unstable_sx = function(m) {
    return On({
      sx: m,
      theme: this
    });
  }, S.toRuntimeSource = ed, S;
}
function ec(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Ra({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Vi(e = {}, ...t) {
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
      return Ds(e, ...t);
    let f = n;
    "palette" in e || u[a] && (u[a] !== !0 ? f = u[a].palette : a === "dark" && (f = {
      mode: "dark"
    }));
    const d = Ds({
      ...e,
      palette: f
    }, ...t);
    return d.defaultColorScheme = a, d.colorSchemes = u, d.palette.mode === "light" && (d.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: d.palette
    }, ec(d, "dark", u.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: d.palette
    }, ec(d, "light", u.light)), d;
  }
  return !n && !("light" in u) && a === "light" && (u.light = !0), Dg({
    ...s,
    colorSchemes: u,
    defaultColorScheme: a,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Pa = Vi();
function xn() {
  const e = _i(Pa);
  return process.env.NODE_ENV !== "production" && O.useDebugValue(e), e[Kt] || e;
}
function _g(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ka = (e) => _g(e) && e !== "classes", Pe = Iu({
  themeId: Kt,
  defaultTheme: Pa,
  rootShouldForwardProp: ka
});
function hs({
  theme: e,
  ...t
}) {
  const n = Kt in e ? e[Kt] : void 0;
  return /* @__PURE__ */ I(Qr, {
    ...t,
    themeId: n ? Kt : void 0,
    theme: n || e
  });
}
const Ao = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: Bg
} = Xh({
  themeId: Kt,
  // @ts-ignore ignore module augmentation tests
  theme: () => Vi({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Ao.colorSchemeStorageKey,
  modeStorageKey: Ao.modeStorageKey,
  defaultColorScheme: {
    light: Ao.defaultLightColorScheme,
    dark: Ao.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: Zu(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return On({
        sx: r,
        theme: this
      });
    }, t;
  }
}), Lg = Bg;
function jg({
  theme: e,
  ...t
}) {
  if (typeof e == "function")
    return /* @__PURE__ */ I(hs, {
      theme: e,
      ...t
    });
  const n = Kt in e ? e[Kt] : e;
  return "colorSchemes" in n ? /* @__PURE__ */ I(Lg, {
    theme: e,
    ...t
  }) : "vars" in n ? /* @__PURE__ */ I(hs, {
    theme: e,
    ...t
  }) : /* @__PURE__ */ I(hs, {
    theme: {
      ...e,
      vars: null
    },
    ...t
  });
}
function rd(e) {
  return /* @__PURE__ */ I(Su, {
    ...e,
    defaultTheme: Pa,
    themeId: Kt
  });
}
process.env.NODE_ENV !== "production" && (rd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: l.oneOfType([l.array, l.func, l.number, l.object, l.string, l.bool])
});
function od(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ I(rd, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
function Fg() {
  return Eu;
}
const Ut = Vh;
process.env.NODE_ENV !== "production" && (l.node, l.object.isRequired);
function gt(e) {
  return zh(e);
}
function zg(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function id(e, t) {
  if (!e)
    return t;
  function n(s, a) {
    const c = {};
    return Object.keys(a).forEach((u) => {
      zg(u, a[u]) && typeof s[u] == "function" && (c[u] = (...f) => {
        s[u](...f), a[u](...f);
      });
    }), c;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const a = typeof t == "function" ? t(s) : t, c = typeof e == "function" ? e({
        ...s,
        ...a
      }) : e, u = xe(s == null ? void 0 : s.className, a == null ? void 0 : a.className, c == null ? void 0 : c.className), f = n(c, a);
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
  const r = t, o = n(e, r), i = xe(r == null ? void 0 : r.className, e == null ? void 0 : e.className);
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
function sd(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Bs(e, t) {
  return Bs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Bs(e, t);
}
function ad(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Bs(e, t);
}
const tc = {
  disabled: !1
};
var Vg = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.shape({
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
var Hg = function(t) {
  return t.scrollTop;
}, Lr = "unmounted", Fn = "exited", zn = "entering", ar = "entered", Ls = "exiting", Jt = /* @__PURE__ */ function(e) {
  ad(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = o, a = s && !s.isMounting ? r.enter : r.appear, c;
    return i.appearStatus = null, r.in ? a ? (c = Fn, i.appearStatus = zn) : c = ar : r.unmountOnExit || r.mountOnEnter ? c = Lr : c = Fn, i.state = {
      status: c
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === Lr ? {
      status: Fn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== zn && s !== ar && (i = zn) : (s === zn || s === ar) && (i = Ls);
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
      if (this.cancelNextCallback(), i === zn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : cr.findDOMNode(this);
          s && Hg(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Fn && this.setState({
      status: Lr
    });
  }, n.performEnter = function(o) {
    var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : o, c = this.props.nodeRef ? [a] : [cr.findDOMNode(this), a], u = c[0], f = c[1], d = this.getTimeouts(), h = a ? d.appear : d.enter;
    if (!o && !s || tc.disabled) {
      this.safeSetState({
        status: ar
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, f), this.safeSetState({
      status: zn
    }, function() {
      i.props.onEntering(u, f), i.onTransitionEnd(h, function() {
        i.safeSetState({
          status: ar
        }, function() {
          i.props.onEntered(u, f);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : cr.findDOMNode(this);
    if (!i || tc.disabled) {
      this.safeSetState({
        status: Fn
      }, function() {
        o.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: Ls
    }, function() {
      o.props.onExiting(a), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: Fn
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
    var s = this.props.nodeRef ? this.props.nodeRef.current : cr.findDOMNode(this), a = o == null && !this.props.addEndListener;
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
    var a = sd(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ $.createElement(ci.Provider, {
        value: null
      }, typeof s == "function" ? s(o, a) : $.cloneElement($.Children.only(s), a))
    );
  }, t;
}($.Component);
Jt.contextType = ci;
Jt.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var n = Vg;
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
function sr() {
}
Jt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: sr,
  onEntering: sr,
  onEntered: sr,
  onExit: sr,
  onExiting: sr,
  onExited: sr
};
Jt.UNMOUNTED = Lr;
Jt.EXITED = Fn;
Jt.ENTERING = zn;
Jt.ENTERED = ar;
Jt.EXITING = Ls;
function Wg(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ia(e, t) {
  var n = function(i) {
    return t && Wo(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Wf.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function Ug(e, t) {
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
function Vn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Yg(e, t) {
  return Ia(e.children, function(n) {
    return Uo(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Vn(n, "appear", e),
      enter: Vn(n, "enter", e),
      exit: Vn(n, "exit", e)
    });
  });
}
function qg(e, t, n) {
  var r = Ia(e.children), o = Ug(t, r);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (Wo(s)) {
      var a = i in t, c = i in r, u = t[i], f = Wo(u) && !u.props.in;
      c && (!a || f) ? o[i] = Uo(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: Vn(s, "exit", e),
        enter: Vn(s, "enter", e)
      }) : !c && a && !f ? o[i] = Uo(s, {
        in: !1
      }) : c && a && Wo(u) && (o[i] = Uo(s, {
        onExited: n.bind(null, s),
        in: u.props.in,
        exit: Vn(s, "exit", e),
        enter: Vn(s, "enter", e)
      }));
    }
  }), o;
}
var Gg = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Kg = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Ma = /* @__PURE__ */ function(e) {
  ad(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = i.handleExited.bind(Wg(i));
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
      children: c ? Yg(o, a) : qg(o, s, a),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var s = Ia(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(a) {
      var c = ri({}, a.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, a = sd(o, ["component", "childFactory"]), c = this.state.contextValue, u = Gg(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, i === null ? /* @__PURE__ */ $.createElement(ci.Provider, {
      value: c
    }, u) : /* @__PURE__ */ $.createElement(ci.Provider, {
      value: c
    }, /* @__PURE__ */ $.createElement(i, a, u));
  }, t;
}($.Component);
Ma.propTypes = process.env.NODE_ENV !== "production" ? {
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
Ma.defaultProps = Kg;
const Na = (e) => e.scrollTop;
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
function Xg(e) {
  return ht("MuiPaper", e);
}
Ct("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Jg = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return At(i, Xg, o);
}, Qg = Pe("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(Ut(({
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
}))), Er = /* @__PURE__ */ O.forwardRef(function(t, n) {
  var g;
  const r = gt({
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
  }, h = Jg(d);
  return process.env.NODE_ENV !== "production" && o.shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ I(Qg, {
    as: s,
    ownerState: d,
    className: xe(h.root, i),
    ref: n,
    ...f,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[a],
        ...o.vars && {
          "--Paper-overlay": (g = o.vars.overlays) == null ? void 0 : g[a]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Gt("#fff", _s(a))}, ${Gt("#fff", _s(a))})`
        }
      },
      ...f.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Er.propTypes = {
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
  elevation: Nn(Ta, (e) => {
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
function et(e, t) {
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
  } = i, g = f[e] || r, v = Uu(d[e], o), {
    props: {
      component: p,
      ...y
    },
    internalRef: b
  } = Wu({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: v
  }), T = Et(b, v == null ? void 0 : v.ref, t.ref), E = e === "root" ? p || u : p, S = Vu(g, {
    ...e === "root" && !u && !f[e] && s,
    ...e !== "root" && !f[e] && s,
    ...y,
    ...E && !a && {
      as: E
    },
    ...E && a && {
      component: E
    },
    ref: T
  }, o);
  return [g, S];
}
class ui {
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
    return new ui();
  }
  static use() {
    const t = ju(ui.create).current, [n, r] = O.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, O.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = ey(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Zg() {
  return ui.use();
}
function ey() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
function ld(e) {
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
  } = e, [f, d] = O.useState(!1), h = xe(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, v = xe(n.child, f && n.childLeaving, r && n.childPulsate);
  return !a && !f && d(!0), O.useEffect(() => {
    if (!a && c != null) {
      const p = setTimeout(c, u);
      return () => {
        clearTimeout(p);
      };
    }
  }, [c, a, u]), /* @__PURE__ */ I("span", {
    className: h,
    style: g,
    children: /* @__PURE__ */ I("span", {
      className: v
    })
  });
}
process.env.NODE_ENV !== "production" && (ld.propTypes = {
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
const _t = Ct("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), js = 550, ty = 80, ny = mo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, ry = mo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, oy = mo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, iy = Pe("span", {
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
}), sy = Pe(ld, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${_t.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${ny};
    animation-duration: ${js}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${_t.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${_t.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${_t.childLeaving} {
    opacity: 0;
    animation-name: ${ry};
    animation-duration: ${js}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${_t.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${oy};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, cd = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = gt({
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
  const h = O.useRef(!1), g = ur(), v = O.useRef(null), p = O.useRef(null), y = O.useCallback((S) => {
    const {
      pulsate: x,
      rippleX: w,
      rippleY: C,
      rippleSize: P,
      cb: k
    } = S;
    u((m) => [...m, /* @__PURE__ */ I(sy, {
      classes: {
        ripple: xe(i.ripple, _t.ripple),
        rippleVisible: xe(i.rippleVisible, _t.rippleVisible),
        ripplePulsate: xe(i.ripplePulsate, _t.ripplePulsate),
        child: xe(i.child, _t.child),
        childLeaving: xe(i.childLeaving, _t.childLeaving),
        childPulsate: xe(i.childPulsate, _t.childPulsate)
      },
      timeout: js,
      pulsate: x,
      rippleX: w,
      rippleY: C,
      rippleSize: P
    }, f.current)]), f.current += 1, d.current = k;
  }, [i]), b = O.useCallback((S = {}, x = {}, w = () => {
  }) => {
    const {
      pulsate: C = !1,
      center: P = o || x.pulsate,
      fakeElement: k = !1
      // For test purposes
    } = x;
    if ((S == null ? void 0 : S.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (S == null ? void 0 : S.type) === "touchstart" && (h.current = !0);
    const m = k ? null : p.current, R = m ? m.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let _, B, A;
    if (P || S === void 0 || S.clientX === 0 && S.clientY === 0 || !S.clientX && !S.touches)
      _ = Math.round(R.width / 2), B = Math.round(R.height / 2);
    else {
      const {
        clientX: L,
        clientY: M
      } = S.touches && S.touches.length > 0 ? S.touches[0] : S;
      _ = Math.round(L - R.left), B = Math.round(M - R.top);
    }
    if (P)
      A = Math.sqrt((2 * R.width ** 2 + R.height ** 2) / 3), A % 2 === 0 && (A += 1);
    else {
      const L = Math.max(Math.abs((m ? m.clientWidth : 0) - _), _) * 2 + 2, M = Math.max(Math.abs((m ? m.clientHeight : 0) - B), B) * 2 + 2;
      A = Math.sqrt(L ** 2 + M ** 2);
    }
    S != null && S.touches ? v.current === null && (v.current = () => {
      y({
        pulsate: C,
        rippleX: _,
        rippleY: B,
        rippleSize: A,
        cb: w
      });
    }, g.start(ty, () => {
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
  }, [b]), E = O.useCallback((S, x) => {
    if (g.clear(), (S == null ? void 0 : S.type) === "touchend" && v.current) {
      v.current(), v.current = null, g.start(0, () => {
        E(S, x);
      });
      return;
    }
    v.current = null, u((w) => w.length > 0 ? w.slice(1) : w), d.current = x;
  }, [g]);
  return O.useImperativeHandle(n, () => ({
    pulsate: T,
    start: b,
    stop: E
  }), [T, b, E]), /* @__PURE__ */ I(iy, {
    className: xe(_t.root, i.root, s),
    ref: p,
    ...a,
    children: /* @__PURE__ */ I(Ma, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (cd.propTypes = {
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
function ay(e) {
  return ht("MuiButtonBase", e);
}
const ly = Ct("MuiButtonBase", ["root", "disabled", "focusVisible"]), cy = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, s = At({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, ay, o);
  return n && r && (s.root += ` ${r}`), s;
}, uy = Pe("button", {
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
  [`&.${ly.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ud = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = gt({
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
    onFocus: E,
    onFocusVisible: S,
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
    type: M,
    ...U
  } = r, Y = O.useRef(null), G = Zg(), N = Et(G.ref, L), [j, V] = O.useState(!1);
  u && j && V(!1), O.useImperativeHandle(o, () => ({
    focusVisible: () => {
      V(!0), Y.current.focus();
    }
  }), []);
  const W = G.shouldMount && !f && !u;
  O.useEffect(() => {
    j && h && !f && G.pulsate();
  }, [f, h, j, G]);
  const J = hn(G, "start", C, d), te = hn(G, "stop", b, d), K = hn(G, "stop", T, d), Z = hn(G, "stop", k, d), D = hn(G, "stop", (ne) => {
    j && ne.preventDefault(), P && P(ne);
  }, d), X = hn(G, "start", _, d), H = hn(G, "stop", m, d), ee = hn(G, "stop", R, d), F = hn(G, "stop", (ne) => {
    ai(ne.target) || V(!1), p && p(ne);
  }, !1), se = gn((ne) => {
    Y.current || (Y.current = ne.currentTarget), ai(ne.target) && (V(!0), S && S(ne)), E && E(ne);
  }), ge = () => {
    const ne = Y.current;
    return c && c !== "button" && !(ne.tagName === "A" && ne.href);
  }, Ce = gn((ne) => {
    h && !ne.repeat && j && ne.key === " " && G.stop(ne, () => {
      G.start(ne);
    }), ne.target === ne.currentTarget && ge() && ne.key === " " && ne.preventDefault(), x && x(ne), ne.target === ne.currentTarget && ge() && ne.key === "Enter" && !u && (ne.preventDefault(), y && y(ne));
  }), Ke = gn((ne) => {
    h && ne.key === " " && j && !ne.defaultPrevented && G.stop(ne, () => {
      G.pulsate(ne);
    }), w && w(ne), y && ne.target === ne.currentTarget && ge() && ne.key === " " && !ne.defaultPrevented && y(ne);
  });
  let be = c;
  be === "button" && (U.href || U.to) && (be = v);
  const Te = {};
  be === "button" ? (Te.type = M === void 0 ? "button" : M, Te.disabled = u) : (!U.href && !U.to && (Te.role = "button"), u && (Te["aria-disabled"] = u));
  const de = Et(n, Y), Me = {
    ...r,
    centerRipple: i,
    component: c,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: d,
    focusRipple: h,
    tabIndex: B,
    focusVisible: j
  }, ye = cy(Me);
  return /* @__PURE__ */ Ae(uy, {
    as: be,
    className: xe(ye.root, a),
    ownerState: Me,
    onBlur: F,
    onClick: y,
    onContextMenu: te,
    onFocus: se,
    onKeyDown: Ce,
    onKeyUp: Ke,
    onMouseDown: J,
    onMouseLeave: D,
    onMouseUp: Z,
    onDragLeave: K,
    onTouchEnd: H,
    onTouchMove: ee,
    onTouchStart: X,
    ref: de,
    tabIndex: u ? -1 : B,
    type: M,
    ...Te,
    ...U,
    children: [s, W ? /* @__PURE__ */ I(cd, {
      ref: N,
      center: i,
      ...A
    }) : null]
  });
});
function hn(e, t, n, r = !1) {
  return gn((o) => (n && n(o), r || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (ud.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Fi,
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
  component: Bu,
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
function dy(e) {
  return typeof e.main == "string";
}
function fy(e, t = []) {
  if (!dy(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function $a(e = []) {
  return ([, t]) => t && fy(t, e);
}
function py(e) {
  return ht("MuiCircularProgress", e);
}
Ct("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const wn = 44, Fs = mo`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, zs = mo`
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
`, my = typeof Fs != "string" ? pa`
        animation: ${Fs} 1.4s linear infinite;
      ` : null, hy = typeof zs != "string" ? pa`
        animation: ${zs} 1.4s ease-in-out infinite;
      ` : null, gy = (e) => {
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
  return At(i, py, t);
}, yy = Pe("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${he(n.color)}`]];
  }
})(Ut(({
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
    style: my || {
      animation: `${Fs} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter($a()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), vy = Pe("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), by = Pe("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${he(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(Ut(({
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
    style: hy || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${zs} 1.4s ease-in-out infinite`
    }
  }]
}))), dd = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = gt({
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
  }, v = gy(g), p = {}, y = {}, b = {};
  if (d === "determinate") {
    const T = 2 * Math.PI * ((wn - u) / 2);
    p.strokeDasharray = T.toFixed(3), b["aria-valuenow"] = Math.round(f), p.strokeDashoffset = `${((100 - f) / 100 * T).toFixed(3)}px`, y.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ I(yy, {
    className: xe(v.root, o),
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
    children: /* @__PURE__ */ I(vy, {
      className: v.svg,
      ownerState: g,
      viewBox: `${wn / 2} ${wn / 2} ${wn} ${wn}`,
      children: /* @__PURE__ */ I(by, {
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
process.env.NODE_ENV !== "production" && (dd.propTypes = {
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
  disableShrink: Nn(l.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
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
function xy(e) {
  return ht("MuiTypography", e);
}
Ct("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Ty = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, wy = Fg(), Sy = (e) => {
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
  return At(a, xy, s);
}, Ey = Pe("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${he(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(Ut(({
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
    })), ...Object.entries(e.palette).filter($a()).map(([n]) => ({
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
})), nc = {
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
}, fd = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const {
    color: r,
    ...o
  } = gt({
    props: t,
    name: "MuiTypography"
  }), i = !Ty[r], s = wy({
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
    variantMapping: v = nc,
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
  }, b = u || (h ? "p" : v[g] || nc[g]) || "span", T = Sy(y);
  return /* @__PURE__ */ I(Ey, {
    as: b,
    ref: n,
    className: xe(T.root, c),
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
process.env.NODE_ENV !== "production" && (fd.propTypes = {
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
var Tt = "top", zt = "bottom", Vt = "right", wt = "left", Aa = "auto", bo = [Tt, zt, Vt, wt], gr = "start", Zr = "end", Cy = "clippingParents", pd = "viewport", Mr = "popper", Oy = "reference", rc = /* @__PURE__ */ bo.reduce(function(e, t) {
  return e.concat([t + "-" + gr, t + "-" + Zr]);
}, []), md = /* @__PURE__ */ [].concat(bo, [Aa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + gr, t + "-" + Zr]);
}, []), Ry = "beforeRead", Py = "read", ky = "afterRead", Iy = "beforeMain", My = "main", Ny = "afterMain", $y = "beforeWrite", Ay = "write", Dy = "afterWrite", _y = [Ry, Py, ky, Iy, My, Ny, $y, Ay, Dy];
function un(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function $t(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Gn(e) {
  var t = $t(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ft(e) {
  var t = $t(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Da(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = $t(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function By(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Ft(i) || !un(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var a = o[s];
      a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function Ly(e) {
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
      !Ft(o) || !un(o) || (Object.assign(o.style, a), Object.keys(i).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
const jy = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: By,
  effect: Ly,
  requires: ["computeStyles"]
};
function cn(e) {
  return e.split("-")[0];
}
var Yn = Math.max, di = Math.min, yr = Math.round;
function Vs() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function hd() {
  return !/^((?!chrome|android).)*safari/i.test(Vs());
}
function vr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && Ft(e) && (o = e.offsetWidth > 0 && yr(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && yr(r.height) / e.offsetHeight || 1);
  var s = Gn(e) ? $t(e) : window, a = s.visualViewport, c = !hd() && n, u = (r.left + (c && a ? a.offsetLeft : 0)) / o, f = (r.top + (c && a ? a.offsetTop : 0)) / i, d = r.width / o, h = r.height / i;
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
function gd(e, t) {
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
  return $t(e).getComputedStyle(e);
}
function Fy(e) {
  return ["table", "td", "th"].indexOf(un(e)) >= 0;
}
function An(e) {
  return ((Gn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Hi(e) {
  return un(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Da(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    An(e)
  );
}
function oc(e) {
  return !Ft(e) || // https://github.com/popperjs/popper-core/issues/837
  bn(e).position === "fixed" ? null : e.offsetParent;
}
function zy(e) {
  var t = /firefox/i.test(Vs()), n = /Trident/i.test(Vs());
  if (n && Ft(e)) {
    var r = bn(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Hi(e);
  for (Da(o) && (o = o.host); Ft(o) && ["html", "body"].indexOf(un(o)) < 0; ) {
    var i = bn(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function xo(e) {
  for (var t = $t(e), n = oc(e); n && Fy(n) && bn(n).position === "static"; )
    n = oc(n);
  return n && (un(n) === "html" || un(n) === "body" && bn(n).position === "static") ? t : n || zy(e) || t;
}
function Ba(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function zr(e, t, n) {
  return Yn(e, di(t, n));
}
function Vy(e, t, n) {
  var r = zr(e, t, n);
  return r > n ? n : r;
}
function yd() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function vd(e) {
  return Object.assign({}, yd(), e);
}
function bd(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Hy = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, vd(typeof t != "number" ? t : bd(t, bo));
};
function Wy(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, a = cn(n.placement), c = Ba(a), u = [wt, Vt].indexOf(a) >= 0, f = u ? "height" : "width";
  if (!(!i || !s)) {
    var d = Hy(o.padding, n), h = _a(i), g = c === "y" ? Tt : wt, v = c === "y" ? zt : Vt, p = n.rects.reference[f] + n.rects.reference[c] - s[c] - n.rects.popper[f], y = s[c] - n.rects.reference[c], b = xo(i), T = b ? c === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, E = p / 2 - y / 2, S = d[g], x = T - h[f] - d[v], w = T / 2 - h[f] / 2 + E, C = zr(S, w, x), P = c;
    n.modifiersData[r] = (t = {}, t[P] = C, t.centerOffset = C - w, t);
  }
}
function Uy(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || gd(t.elements.popper, o) && (t.elements.arrow = o));
}
const Yy = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Wy,
  effect: Uy,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function br(e) {
  return e.split("-")[1];
}
var qy = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Gy(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: yr(n * o) / o || 0,
    y: yr(r * o) / o || 0
  };
}
function ic(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, a = e.position, c = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, d = e.isFixed, h = s.x, g = h === void 0 ? 0 : h, v = s.y, p = v === void 0 ? 0 : v, y = typeof f == "function" ? f({
    x: g,
    y: p
  }) : {
    x: g,
    y: p
  };
  g = y.x, p = y.y;
  var b = s.hasOwnProperty("x"), T = s.hasOwnProperty("y"), E = wt, S = Tt, x = window;
  if (u) {
    var w = xo(n), C = "clientHeight", P = "clientWidth";
    if (w === $t(n) && (w = An(n), bn(w).position !== "static" && a === "absolute" && (C = "scrollHeight", P = "scrollWidth")), w = w, o === Tt || (o === wt || o === Vt) && i === Zr) {
      S = zt;
      var k = d && w === x && x.visualViewport ? x.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[C]
      );
      p -= k - r.height, p *= c ? 1 : -1;
    }
    if (o === wt || (o === Tt || o === zt) && i === Zr) {
      E = Vt;
      var m = d && w === x && x.visualViewport ? x.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[P]
      );
      g -= m - r.width, g *= c ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: a
  }, u && qy), _ = f === !0 ? Gy({
    x: g,
    y: p
  }, $t(n)) : {
    x: g,
    y: p
  };
  if (g = _.x, p = _.y, c) {
    var B;
    return Object.assign({}, R, (B = {}, B[S] = T ? "0" : "", B[E] = b ? "0" : "", B.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + p + "px)" : "translate3d(" + g + "px, " + p + "px, 0)", B));
  }
  return Object.assign({}, R, (t = {}, t[S] = T ? p + "px" : "", t[E] = b ? g + "px" : "", t.transform = "", t));
}
function Ky(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, a = n.roundOffsets, c = a === void 0 ? !0 : a, u = {
    placement: cn(t.placement),
    variation: br(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ic(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ic(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Xy = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ky,
  data: {}
};
var Do = {
  passive: !0
};
function Jy(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, a = s === void 0 ? !0 : s, c = $t(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, Do);
  }), a && c.addEventListener("resize", n.update, Do), function() {
    i && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Do);
    }), a && c.removeEventListener("resize", n.update, Do);
  };
}
const Qy = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Jy,
  data: {}
};
var Zy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Xo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Zy[t];
  });
}
var ev = {
  start: "end",
  end: "start"
};
function sc(e) {
  return e.replace(/start|end/g, function(t) {
    return ev[t];
  });
}
function La(e) {
  var t = $t(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function ja(e) {
  return vr(An(e)).left + La(e).scrollLeft;
}
function tv(e, t) {
  var n = $t(e), r = An(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, a = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = hd();
    (u || !u && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a + ja(e),
    y: c
  };
}
function nv(e) {
  var t, n = An(e), r = La(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Yn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Yn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -r.scrollLeft + ja(e), c = -r.scrollTop;
  return bn(o || n).direction === "rtl" && (a += Yn(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
function Fa(e) {
  var t = bn(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function xd(e) {
  return ["html", "body", "#document"].indexOf(un(e)) >= 0 ? e.ownerDocument.body : Ft(e) && Fa(e) ? e : xd(Hi(e));
}
function Vr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = xd(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = $t(r), s = o ? [i].concat(i.visualViewport || [], Fa(r) ? r : []) : r, a = t.concat(s);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(Vr(Hi(s)))
  );
}
function Hs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function rv(e, t) {
  var n = vr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ac(e, t, n) {
  return t === pd ? Hs(tv(e, n)) : Gn(t) ? rv(t, n) : Hs(nv(An(e)));
}
function ov(e) {
  var t = Vr(Hi(e)), n = ["absolute", "fixed"].indexOf(bn(e).position) >= 0, r = n && Ft(e) ? xo(e) : e;
  return Gn(r) ? t.filter(function(o) {
    return Gn(o) && gd(o, r) && un(o) !== "body";
  }) : [];
}
function iv(e, t, n, r) {
  var o = t === "clippingParents" ? ov(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], a = i.reduce(function(c, u) {
    var f = ac(e, u, r);
    return c.top = Yn(f.top, c.top), c.right = di(f.right, c.right), c.bottom = di(f.bottom, c.bottom), c.left = Yn(f.left, c.left), c;
  }, ac(e, s, r));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Td(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? cn(r) : null, i = r ? br(r) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, c;
  switch (o) {
    case Tt:
      c = {
        x: s,
        y: t.y - n.height
      };
      break;
    case zt:
      c = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Vt:
      c = {
        x: t.x + t.width,
        y: a
      };
      break;
    case wt:
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
      case Zr:
        c[u] = c[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return c;
}
function eo(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, a = n.boundary, c = a === void 0 ? Cy : a, u = n.rootBoundary, f = u === void 0 ? pd : u, d = n.elementContext, h = d === void 0 ? Mr : d, g = n.altBoundary, v = g === void 0 ? !1 : g, p = n.padding, y = p === void 0 ? 0 : p, b = vd(typeof y != "number" ? y : bd(y, bo)), T = h === Mr ? Oy : Mr, E = e.rects.popper, S = e.elements[v ? T : h], x = iv(Gn(S) ? S : S.contextElement || An(e.elements.popper), c, f, s), w = vr(e.elements.reference), C = Td({
    reference: w,
    element: E,
    placement: o
  }), P = Hs(Object.assign({}, E, C)), k = h === Mr ? P : w, m = {
    top: x.top - k.top + b.top,
    bottom: k.bottom - x.bottom + b.bottom,
    left: x.left - k.left + b.left,
    right: k.right - x.right + b.right
  }, R = e.modifiersData.offset;
  if (h === Mr && R) {
    var _ = R[o];
    Object.keys(m).forEach(function(B) {
      var A = [Vt, zt].indexOf(B) >= 0 ? 1 : -1, L = [Tt, zt].indexOf(B) >= 0 ? "y" : "x";
      m[B] += _[L] * A;
    });
  }
  return m;
}
function sv(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, a = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? md : c, f = br(r), d = f ? a ? rc : rc.filter(function(v) {
    return br(v) === f;
  }) : bo, h = d.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  h.length === 0 && (h = d);
  var g = h.reduce(function(v, p) {
    return v[p] = eo(e, {
      placement: p,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[cn(p)], v;
  }, {});
  return Object.keys(g).sort(function(v, p) {
    return g[v] - g[p];
  });
}
function av(e) {
  if (cn(e) === Aa)
    return [];
  var t = Xo(e);
  return [sc(e), t, sc(t)];
}
function lv(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !0 : s, c = n.fallbackPlacements, u = n.padding, f = n.boundary, d = n.rootBoundary, h = n.altBoundary, g = n.flipVariations, v = g === void 0 ? !0 : g, p = n.allowedAutoPlacements, y = t.options.placement, b = cn(y), T = b === y, E = c || (T || !v ? [Xo(y)] : av(y)), S = [y].concat(E).reduce(function(J, te) {
      return J.concat(cn(te) === Aa ? sv(t, {
        placement: te,
        boundary: f,
        rootBoundary: d,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: p
      }) : te);
    }, []), x = t.rects.reference, w = t.rects.popper, C = /* @__PURE__ */ new Map(), P = !0, k = S[0], m = 0; m < S.length; m++) {
      var R = S[m], _ = cn(R), B = br(R) === gr, A = [Tt, zt].indexOf(_) >= 0, L = A ? "width" : "height", M = eo(t, {
        placement: R,
        boundary: f,
        rootBoundary: d,
        altBoundary: h,
        padding: u
      }), U = A ? B ? Vt : wt : B ? zt : Tt;
      x[L] > w[L] && (U = Xo(U));
      var Y = Xo(U), G = [];
      if (i && G.push(M[_] <= 0), a && G.push(M[U] <= 0, M[Y] <= 0), G.every(function(J) {
        return J;
      })) {
        k = R, P = !1;
        break;
      }
      C.set(R, G);
    }
    if (P)
      for (var N = v ? 3 : 1, j = function(te) {
        var K = S.find(function(Z) {
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
const cv = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: lv,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function lc(e, t, n) {
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
function cc(e) {
  return [Tt, Vt, zt, wt].some(function(t) {
    return e[t] >= 0;
  });
}
function uv(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = eo(t, {
    elementContext: "reference"
  }), a = eo(t, {
    altBoundary: !0
  }), c = lc(s, r), u = lc(a, o, i), f = cc(c), d = cc(u);
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
const dv = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: uv
};
function fv(e, t, n) {
  var r = cn(e), o = [wt, Tt].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], a = i[1];
  return s = s || 0, a = (a || 0) * o, [wt, Vt].indexOf(r) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function pv(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = md.reduce(function(f, d) {
    return f[d] = fv(d, t.rects, i), f;
  }, {}), a = s[t.placement], c = a.x, u = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const mv = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: pv
};
function hv(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Td({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const gv = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: hv,
  data: {}
};
function yv(e) {
  return e === "x" ? "y" : "x";
}
function vv(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !1 : s, c = n.boundary, u = n.rootBoundary, f = n.altBoundary, d = n.padding, h = n.tether, g = h === void 0 ? !0 : h, v = n.tetherOffset, p = v === void 0 ? 0 : v, y = eo(t, {
    boundary: c,
    rootBoundary: u,
    padding: d,
    altBoundary: f
  }), b = cn(t.placement), T = br(t.placement), E = !T, S = Ba(b), x = yv(S), w = t.modifiersData.popperOffsets, C = t.rects.reference, P = t.rects.popper, k = typeof p == "function" ? p(Object.assign({}, t.rects, {
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
      var B, A = S === "y" ? Tt : wt, L = S === "y" ? zt : Vt, M = S === "y" ? "height" : "width", U = w[S], Y = U + y[A], G = U - y[L], N = g ? -P[M] / 2 : 0, j = T === gr ? C[M] : P[M], V = T === gr ? -P[M] : -C[M], W = t.elements.arrow, J = g && W ? _a(W) : {
        width: 0,
        height: 0
      }, te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : yd(), K = te[A], Z = te[L], D = zr(0, C[M], J[M]), X = E ? C[M] / 2 - N - D - K - m.mainAxis : j - D - K - m.mainAxis, H = E ? -C[M] / 2 + N + D + Z + m.mainAxis : V + D + Z + m.mainAxis, ee = t.elements.arrow && xo(t.elements.arrow), F = ee ? S === "y" ? ee.clientTop || 0 : ee.clientLeft || 0 : 0, se = (B = R == null ? void 0 : R[S]) != null ? B : 0, ge = U + X - se - F, Ce = U + H - se, Ke = zr(g ? di(Y, ge) : Y, U, g ? Yn(G, Ce) : G);
      w[S] = Ke, _[S] = Ke - U;
    }
    if (a) {
      var be, Te = S === "x" ? Tt : wt, de = S === "x" ? zt : Vt, Me = w[x], ye = x === "y" ? "height" : "width", ne = Me + y[Te], tt = Me - y[de], it = [Tt, wt].indexOf(b) !== -1, st = (be = R == null ? void 0 : R[x]) != null ? be : 0, pt = it ? ne : Me - C[ye] - P[ye] - st + m.altAxis, vt = it ? Me + C[ye] + P[ye] - st - m.altAxis : tt, Ot = g && it ? Vy(pt, Me, vt) : zr(g ? pt : ne, Me, g ? vt : tt);
      w[x] = Ot, _[x] = Ot - Me;
    }
    t.modifiersData[r] = _;
  }
}
const bv = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: vv,
  requiresIfExists: ["offset"]
};
function xv(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Tv(e) {
  return e === $t(e) || !Ft(e) ? La(e) : xv(e);
}
function wv(e) {
  var t = e.getBoundingClientRect(), n = yr(t.width) / e.offsetWidth || 1, r = yr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Sv(e, t, n) {
  n === void 0 && (n = !1);
  var r = Ft(t), o = Ft(t) && wv(t), i = An(t), s = vr(e, o, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((un(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Fa(i)) && (a = Tv(t)), Ft(t) ? (c = vr(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = ja(i))), {
    x: s.left + a.scrollLeft - c.x,
    y: s.top + a.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Ev(e) {
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
function Cv(e) {
  var t = Ev(e);
  return _y.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Ov(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Rv(e) {
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
var uc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function dc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Pv(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? uc : o;
  return function(a, c, u) {
    u === void 0 && (u = i);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, uc, i),
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
          reference: Gn(a) ? Vr(a) : a.contextElement ? Vr(a.contextElement) : [],
          popper: Vr(c)
        };
        var E = Cv(Rv([].concat(r, f.options.modifiers)));
        return f.orderedModifiers = E.filter(function(S) {
          return S.enabled;
        }), v(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var b = f.elements, T = b.reference, E = b.popper;
          if (dc(T, E)) {
            f.rects = {
              reference: Sv(T, xo(E), f.options.strategy === "fixed"),
              popper: _a(E)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(m) {
              return f.modifiersData[m.name] = Object.assign({}, m.data);
            });
            for (var S = 0; S < f.orderedModifiers.length; S++) {
              if (f.reset === !0) {
                f.reset = !1, S = -1;
                continue;
              }
              var x = f.orderedModifiers[S], w = x.fn, C = x.options, P = C === void 0 ? {} : C, k = x.name;
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
      update: Ov(function() {
        return new Promise(function(y) {
          g.forceUpdate(), y(f);
        });
      }),
      destroy: function() {
        p(), h = !0;
      }
    };
    if (!dc(a, c))
      return g;
    g.setOptions(u).then(function(y) {
      !h && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function v() {
      f.orderedModifiers.forEach(function(y) {
        var b = y.name, T = y.options, E = T === void 0 ? {} : T, S = y.effect;
        if (typeof S == "function") {
          var x = S({
            state: f,
            name: b,
            instance: g,
            options: E
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
var kv = [Qy, gv, Xy, jy, mv, cv, bv, Yy, dv], Iv = /* @__PURE__ */ Pv({
  defaultModifiers: kv
});
function Mv(e) {
  return typeof e == "function" ? e() : e;
}
const to = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, a] = O.useState(null), c = Et(/* @__PURE__ */ O.isValidElement(r) ? Xn(r) : null, n);
  if (qn(() => {
    i || a(Mv(o) || document.body);
  }, [o, i]), qn(() => {
    if (s && !i)
      return $s(n, s), () => {
        $s(n, null);
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
  return s && /* @__PURE__ */ qf.createPortal(r, s);
});
process.env.NODE_ENV !== "production" && (to.propTypes = {
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
process.env.NODE_ENV !== "production" && (to.propTypes = vo(to.propTypes));
function Nv(e) {
  return ht("MuiPopper", e);
}
Ct("MuiPopper", ["root"]);
function $v(e, t) {
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
function fi(e) {
  return typeof e == "function" ? e() : e;
}
function Wi(e) {
  return e.nodeType !== void 0;
}
function Av(e) {
  return !Wi(e);
}
const Dv = (e) => {
  const {
    classes: t
  } = e;
  return At({
    root: ["root"]
  }, Nv, t);
}, _v = {}, Bv = /* @__PURE__ */ O.forwardRef(function(t, n) {
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
  } = t, b = O.useRef(null), T = Et(b, n), E = O.useRef(null), S = Et(E, d), x = O.useRef(S);
  qn(() => {
    x.current = S;
  }, [S]), O.useImperativeHandle(d, () => E.current, []);
  const w = $v(u, i), [C, P] = O.useState(w), [k, m] = O.useState(fi(r));
  O.useEffect(() => {
    E.current && E.current.forceUpdate();
  }), O.useEffect(() => {
    r && m(fi(r));
  }, [r]), qn(() => {
    if (!k || !c)
      return;
    const L = (Y) => {
      P(Y.placement);
    };
    if (process.env.NODE_ENV !== "production" && k && Wi(k) && k.nodeType === 1) {
      const Y = k.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && Y.top === 0 && Y.left === 0 && Y.right === 0 && Y.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let M = [{
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
    a != null && (M = M.concat(a)), f && f.modifiers != null && (M = M.concat(f.modifiers));
    const U = Iv(k, b.current, {
      placement: w,
      ...f,
      modifiers: M
    });
    return x.current(U), () => {
      U.destroy(), x.current(null);
    };
  }, [k, s, a, c, f, w]);
  const R = {
    placement: C
  };
  v !== null && (R.TransitionProps = v);
  const _ = Dv(t), B = g.root ?? "div", A = _h({
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
  return /* @__PURE__ */ I(B, {
    ...A,
    children: typeof o == "function" ? o(R) : o
  });
}), wd = /* @__PURE__ */ O.forwardRef(function(t, n) {
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
    popperOptions: h = _v,
    popperRef: g,
    style: v,
    transition: p = !1,
    slotProps: y = {},
    slots: b = {},
    ...T
  } = t, [E, S] = O.useState(!0), x = () => {
    S(!1);
  }, w = () => {
    S(!0);
  };
  if (!c && !f && (!p || E))
    return null;
  let C;
  if (i)
    C = i;
  else if (r) {
    const m = fi(r);
    C = m && Wi(m) ? xt(m).body : xt(null).body;
  }
  const P = !f && c && (!p || E) ? "none" : void 0, k = p ? {
    in: f,
    onEnter: x,
    onExited: w
  } : void 0;
  return /* @__PURE__ */ I(to, {
    disablePortal: a,
    container: C,
    children: /* @__PURE__ */ I(Bv, {
      anchorEl: r,
      direction: s,
      disablePortal: a,
      modifiers: u,
      ref: n,
      open: p ? !E : f,
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
process.env.NODE_ENV !== "production" && (wd.propTypes = {
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
  anchorEl: Nn(l.oneOfType([vn, l.object, l.func]), (e) => {
    if (e.open) {
      const t = fi(e.anchorEl);
      if (t && Wi(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Av(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
  popperRef: Fi,
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
const Lv = Pe(wd, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Ui = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = Ea(), o = gt({
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
    slotProps: E,
    ...S
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
    ...S
  };
  return /* @__PURE__ */ I(Lv, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: {
      root: x
    },
    slotProps: E ?? c,
    ...w,
    ref: n
  });
});
process.env.NODE_ENV !== "production" && (Ui.propTypes = {
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
  popperRef: Fi,
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
function jv(e) {
  return typeof e == "string";
}
const Fv = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, xr = /* @__PURE__ */ O.forwardRef(function(t, n) {
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
    TransitionComponent: T = Jt,
    ...E
  } = t, S = O.useRef(null), x = Et(S, Xn(a), n), w = (A) => (L) => {
    if (A) {
      const M = S.current;
      L === void 0 ? A(M) : A(M, L);
    }
  }, C = w(h), P = w((A, L) => {
    Na(A);
    const M = hr({
      style: y,
      timeout: b,
      easing: c
    }, {
      mode: "enter"
    });
    A.style.webkitTransition = r.transitions.create("opacity", M), A.style.transition = r.transitions.create("opacity", M), f && f(A, L);
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
  return /* @__PURE__ */ I(T, {
    appear: s,
    in: u,
    nodeRef: S,
    onEnter: P,
    onEntered: k,
    onEntering: C,
    onExit: R,
    onExited: _,
    onExiting: m,
    addEndListener: (A) => {
      i && i(S.current, A);
    },
    timeout: b,
    ...E,
    children: (A, {
      ownerState: L,
      ...M
    }) => /* @__PURE__ */ O.cloneElement(a, {
      style: {
        opacity: 0,
        visibility: A === "exited" && !u ? "hidden" : void 0,
        ...Fv[A],
        ...y,
        ...a.props.style
      },
      ref: x,
      ...M
    })
  });
});
process.env.NODE_ENV !== "production" && (xr.propTypes = {
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
  children: $n.isRequired,
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
function zv(e) {
  return ht("MuiBackdrop", e);
}
Ct("MuiBackdrop", ["root", "invisible"]);
const Vv = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return At({
    root: ["root", n && "invisible"]
  }, zv, t);
}, Hv = Pe("div", {
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
}), za = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = gt({
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
  }, b = Vv(y), T = {
    transition: g,
    root: u.Root,
    ...h
  }, E = {
    ...f,
    ...d
  }, S = {
    slots: T,
    slotProps: E
  }, [x, w] = et("root", {
    elementType: Hv,
    externalForwardedProps: S,
    className: xe(b.root, i),
    ownerState: y
  }), [C, P] = et("transition", {
    elementType: xr,
    externalForwardedProps: S,
    ownerState: y
  });
  return /* @__PURE__ */ I(C, {
    in: c,
    timeout: v,
    ...p,
    ...P,
    children: /* @__PURE__ */ I(x, {
      "aria-hidden": !0,
      ...w,
      classes: b,
      ref: n,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (za.propTypes = {
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
const Wv = Ct("MuiBox", ["root"]), Uv = Vi(), Cr = ih({
  themeId: Kt,
  defaultTheme: Uv,
  defaultClassName: Wv.root,
  generateClassName: Cu.generate
});
process.env.NODE_ENV !== "production" && (Cr.propTypes = {
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
function Yv(e) {
  return ht("MuiButton", e);
}
const jn = Ct("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), Sd = /* @__PURE__ */ O.createContext({});
process.env.NODE_ENV !== "production" && (Sd.displayName = "ButtonGroupContext");
const Ed = /* @__PURE__ */ O.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ed.displayName = "ButtonGroupButtonContext");
const qv = (e) => {
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
  }, f = At(u, Yv, c);
  return {
    ...c,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...f
  };
}, Cd = [{
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
}], Gv = Pe(ud, {
  shouldForwardProp: (e) => ka(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${he(n.color)}`], t[`size${he(n.size)}`], t[`${n.variant}Size${he(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(Ut(({
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
    [`&.${jn.disabled}`]: {
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
        [`&.${jn.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${jn.disabled}`]: {
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
        [`&.${jn.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter($a()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[r].main,
        "--variant-outlinedColor": (e.vars || e).palette[r].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.5)` : Gt(e.palette[r].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[r].contrastText,
        "--variant-containedBg": (e.vars || e).palette[r].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[r].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Gt(e.palette[r].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[r].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Gt(e.palette[r].main, e.palette.action.hoverOpacity)
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
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Gt(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Gt(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${jn.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${jn.disabled}`]: {
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
        [`&.${jn.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), Kv = Pe("span", {
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
  }, ...Cd]
})), Xv = Pe("span", {
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
  }, ...Cd]
})), Jv = Pe("span", {
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
})), fc = Pe("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, t) => t.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Va = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = O.useContext(Sd), o = O.useContext(Ed), i = Jr(r, t), s = gt({
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
    loadingIndicator: E,
    loadingPosition: S = "center",
    size: x = "medium",
    startIcon: w,
    type: C,
    variant: P = "text",
    ...k
  } = s, m = xa(b), R = E ?? /* @__PURE__ */ I(dd, {
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
    loadingPosition: S,
    size: x,
    type: C,
    variant: P
  }, B = qv(_), A = (w || T && S === "start") && /* @__PURE__ */ I(Kv, {
    className: B.startIcon,
    ownerState: _,
    children: w || /* @__PURE__ */ I(fc, {
      className: B.loadingIconPlaceholder,
      ownerState: _
    })
  }), L = (v || T && S === "end") && /* @__PURE__ */ I(Xv, {
    className: B.endIcon,
    ownerState: _,
    children: v || /* @__PURE__ */ I(fc, {
      className: B.loadingIconPlaceholder,
      ownerState: _
    })
  }), M = o || "", U = typeof T == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ I("span", {
      className: B.loadingWrapper,
      style: {
        display: "contents"
      },
      children: T && /* @__PURE__ */ I(Jv, {
        className: B.loadingIndicator,
        ownerState: _,
        children: R
      })
    })
  ) : null;
  return /* @__PURE__ */ Ae(Gv, {
    ownerState: _,
    className: xe(r.className, B.root, f, M),
    component: u,
    disabled: d || T,
    focusRipple: !g,
    focusVisibleClassName: xe(B.focusVisible, p),
    ref: n,
    type: C,
    id: T ? m : b,
    ...k,
    classes: B,
    children: [A, S !== "end" && U, a, S === "end" && U, L]
  });
});
process.env.NODE_ENV !== "production" && (Va.propTypes = {
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
function pc(e) {
  return e.substring(2).toLowerCase();
}
function Qv(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function pi(e) {
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
  const f = Et(Xn(t), a), d = gn((v) => {
    const p = u.current;
    u.current = !1;
    const y = xt(a.current);
    if (!c.current || !a.current || "clientX" in v && Qv(v, y))
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
      const v = pc(i), p = xt(a.current), y = () => {
        s.current = !0;
      };
      return p.addEventListener(v, d), p.addEventListener("touchmove", y), () => {
        p.removeEventListener(v, d), p.removeEventListener("touchmove", y);
      };
    }
  }, [d, i]), r !== !1 && (g[r] = h(r)), O.useEffect(() => {
    if (r !== !1) {
      const v = pc(r), p = xt(a.current);
      return p.addEventListener(v, d), () => {
        p.removeEventListener(v, d);
      };
    }
  }, [d, r]), /* @__PURE__ */ O.cloneElement(t, g);
}
process.env.NODE_ENV !== "production" && (pi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The wrapped element.
   */
  children: $n.isRequired,
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
process.env.NODE_ENV !== "production" && (pi.propTypes = vo(pi.propTypes));
const Od = sg({
  createStyledComponent: Pe("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, t[`maxWidth${he(String(n.maxWidth))}`], n.fixed && t.fixed, n.disableGutters && t.disableGutters];
    }
  }),
  useThemeProps: (e) => gt({
    props: e,
    name: "MuiContainer"
  })
});
process.env.NODE_ENV !== "production" && (Od.propTypes = {
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
const Ws = typeof od({}) == "function", Zv = (e, t) => ({
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
}), eb = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), Rd = (e, t = !1) => {
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
    html: Zv(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...eb(e),
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
}, Jo = "mui-ecs", tb = (e) => {
  const t = Rd(e, !1), n = Array.isArray(t) ? t[0] : t;
  return !e.vars && n && (n.html[`:root:has(${Jo})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([r, o]) => {
    var s, a;
    const i = e.getColorSchemeSelector(r);
    i.startsWith("@") ? n[i] = {
      [`:root:not(:has(.${Jo}))`]: {
        colorScheme: (s = o.palette) == null ? void 0 : s.mode
      }
    } : n[i.replace(/\s*&/, "")] = {
      [`&:not(:has(.${Jo}))`]: {
        colorScheme: (a = o.palette) == null ? void 0 : a.mode
      }
    };
  }), t;
}, nb = od(Ws ? ({
  theme: e,
  enableColorScheme: t
}) => Rd(e, t) : ({
  theme: e
}) => tb(e));
function Pd(e) {
  const t = gt({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: n,
    enableColorScheme: r = !1
  } = t;
  return /* @__PURE__ */ Ae(O.Fragment, {
    children: [Ws && /* @__PURE__ */ I(nb, {
      enableColorScheme: r
    }), !Ws && !r && /* @__PURE__ */ I("span", {
      className: Jo,
      style: {
        display: "none"
      }
    }), n]
  });
}
process.env.NODE_ENV !== "production" && (Pd.propTypes = {
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
function rb(e) {
  const t = xt(e);
  return t.body === e ? Pn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Hr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function mc(e) {
  return parseInt(Pn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function ob(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function hc(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = !i.includes(s), c = !ob(s);
    a && c && Hr(s, o);
  });
}
function gs(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function ib(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (rb(r)) {
      const s = $h(Pn(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${mc(r) + s}px`;
      const a = xt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${mc(c) + s}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = xt(r).body;
    else {
      const s = r.parentElement, a = Pn(r);
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
function sb(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class ab {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Hr(t.modalRef, !1);
    const o = sb(n);
    hc(n, t.mount, t.modalRef, o, !0);
    const i = gs(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = gs(this.containers, (i) => i.modals.includes(t)), o = this.containers[r];
    o.restore || (o.restore = ib(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = gs(this.containers, (s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Hr(t.modalRef, n), hc(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Hr(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const lb = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function cb(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function ub(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function db(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || ub(e));
}
function fb(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(lb)).forEach((r, o) => {
    const i = cb(r);
    i === -1 || !db(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function pb() {
  return !0;
}
function mi(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = fb,
    isEnabled: s = pb,
    open: a
  } = e, c = O.useRef(!1), u = O.useRef(null), f = O.useRef(null), d = O.useRef(null), h = O.useRef(null), g = O.useRef(!1), v = O.useRef(null), p = Et(Xn(t), v), y = O.useRef(null);
  O.useEffect(() => {
    !a || !v.current || (g.current = !n);
  }, [n, a]), O.useEffect(() => {
    if (!a || !v.current)
      return;
    const E = xt(v.current);
    return v.current.contains(E.activeElement) || (v.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), v.current.setAttribute("tabIndex", "-1")), g.current && v.current.focus()), () => {
      o || (d.current && d.current.focus && (c.current = !0, d.current.focus()), d.current = null);
    };
  }, [a]), O.useEffect(() => {
    if (!a || !v.current)
      return;
    const E = xt(v.current), S = (C) => {
      y.current = C, !(r || !s() || C.key !== "Tab") && E.activeElement === v.current && C.shiftKey && (c.current = !0, f.current && f.current.focus());
    }, x = () => {
      var k, m;
      const C = v.current;
      if (C === null)
        return;
      if (!E.hasFocus() || !s() || c.current) {
        c.current = !1;
        return;
      }
      if (C.contains(E.activeElement) || r && E.activeElement !== u.current && E.activeElement !== f.current)
        return;
      if (E.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!g.current)
        return;
      let P = [];
      if ((E.activeElement === u.current || E.activeElement === f.current) && (P = i(v.current)), P.length > 0) {
        const R = !!((k = y.current) != null && k.shiftKey && ((m = y.current) == null ? void 0 : m.key) === "Tab"), _ = P[0], B = P[P.length - 1];
        typeof _ != "string" && typeof B != "string" && (R ? B.focus() : _.focus());
      } else
        C.focus();
    };
    E.addEventListener("focusin", x), E.addEventListener("keydown", S, !0);
    const w = setInterval(() => {
      E.activeElement && E.activeElement.tagName === "BODY" && x();
    }, 50);
    return () => {
      clearInterval(w), E.removeEventListener("focusin", x), E.removeEventListener("keydown", S, !0);
    };
  }, [n, r, o, s, a, i]);
  const b = (E) => {
    d.current === null && (d.current = E.relatedTarget), g.current = !0, h.current = E.target;
    const S = t.props.onFocus;
    S && S(E);
  }, T = (E) => {
    d.current === null && (d.current = E.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ Ae(O.Fragment, {
    children: [/* @__PURE__ */ I("div", {
      tabIndex: a ? 0 : -1,
      onFocus: T,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ O.cloneElement(t, {
      ref: p,
      onFocus: b
    }), /* @__PURE__ */ I("div", {
      tabIndex: a ? 0 : -1,
      onFocus: T,
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (mi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: $n,
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
process.env.NODE_ENV !== "production" && (mi.propTypes = vo(mi.propTypes));
function mb(e) {
  return typeof e == "function" ? e() : e;
}
function hb(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const gc = () => {
}, _o = new ab();
function gb(e) {
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
  } = e, d = O.useRef({}), h = O.useRef(null), g = O.useRef(null), v = Et(g, f), [p, y] = O.useState(!u), b = hb(a);
  let T = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (T = !1);
  const E = () => xt(h.current), S = () => (d.current.modalRef = g.current, d.current.mount = h.current, d.current), x = () => {
    _o.mount(S(), {
      disableScrollLock: r
    }), g.current && (g.current.scrollTop = 0);
  }, w = gn(() => {
    const L = mb(t) || E().body;
    _o.add(S(), L), g.current && x();
  }), C = () => _o.isTopModal(S()), P = gn((L) => {
    h.current = L, L && (u && C() ? x() : g.current && Hr(g.current, T));
  }), k = O.useCallback(() => {
    _o.remove(S(), T);
  }, [T]);
  O.useEffect(() => () => {
    k();
  }, [k]), O.useEffect(() => {
    u ? w() : (!b || !o) && k();
  }, [u, k, b, o, w]);
  const m = (L) => (M) => {
    var U;
    (U = L.onKeyDown) == null || U.call(L, M), !(M.key !== "Escape" || M.which === 229 || // Wait until IME is settled.
    !C()) && (n || (M.stopPropagation(), c && c(M, "escapeKeyDown")));
  }, R = (L) => (M) => {
    var U;
    (U = L.onClick) == null || U.call(L, M), M.target === M.currentTarget && c && c(M, "backdropClick");
  };
  return {
    getRootProps: (L = {}) => {
      const M = Hu(e);
      delete M.onTransitionEnter, delete M.onTransitionExited;
      const U = {
        ...M,
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
      const M = L;
      return {
        "aria-hidden": !0,
        ...M,
        onClick: R(M),
        open: u
      };
    },
    getTransitionProps: () => {
      const L = () => {
        y(!1), i && i();
      }, M = () => {
        y(!0), s && s(), o && k();
      };
      return {
        onEnter: jl(L, (a == null ? void 0 : a.props.onEnter) ?? gc),
        onExited: jl(M, (a == null ? void 0 : a.props.onExited) ?? gc)
      };
    },
    rootRef: v,
    portalRef: P,
    isTopModal: C,
    exited: p,
    hasTransition: b
  };
}
function yb(e) {
  return ht("MuiModal", e);
}
Ct("MuiModal", ["root", "hidden", "backdrop"]);
const vb = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return At({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, yb, r);
}, bb = Pe("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(Ut(({
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
}))), xb = Pe(za, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Yi = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = gt({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = xb,
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
    disableScrollLock: E = !1,
    hideBackdrop: S = !1,
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
    disableScrollLock: E,
    hideBackdrop: S,
    keepMounted: x
  }, {
    getRootProps: L,
    getBackdropProps: M,
    getTransitionProps: U,
    portalRef: Y,
    isTopModal: G,
    exited: N,
    hasTransition: j
  } = gb({
    ...A,
    rootRef: n
  }), V = {
    ...A,
    exited: N
  }, W = vb(V), J = {};
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
  }, [K, Z] = et("root", {
    ref: n,
    elementType: bb,
    externalForwardedProps: {
      ...te,
      ...B,
      component: d
    },
    getSlotProps: L,
    ownerState: V,
    className: xe(a, W == null ? void 0 : W.root, !V.open && V.exited && (W == null ? void 0 : W.hidden))
  }), [D, X] = et("backdrop", {
    ref: i == null ? void 0 : i.ref,
    elementType: o,
    externalForwardedProps: te,
    shouldForwardComponentProp: !0,
    additionalProps: i,
    getSlotProps: (H) => M({
      ...H,
      onClick: (ee) => {
        H != null && H.onClick && H.onClick(ee);
      }
    }),
    className: xe(i == null ? void 0 : i.className, W == null ? void 0 : W.backdrop),
    ownerState: V
  });
  return !x && !k && (!j || N) ? null : /* @__PURE__ */ I(to, {
    ref: Y,
    container: f,
    disablePortal: b,
    children: /* @__PURE__ */ Ae(K, {
      ...Z,
      children: [!S && o ? /* @__PURE__ */ I(D, {
        ...X
      }) : null, /* @__PURE__ */ I(mi, {
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
process.env.NODE_ENV !== "production" && (Yi.propTypes = {
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
  children: $n.isRequired,
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
function Tb(e) {
  return ht("MuiDialog", e);
}
const ys = Ct("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), kd = /* @__PURE__ */ O.createContext({});
process.env.NODE_ENV !== "production" && (kd.displayName = "DialogContext");
const wb = Pe(za, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), Sb = (e) => {
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
  return At(s, Tb, t);
}, Eb = Pe(Yi, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), Cb = Pe("div", {
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
}), Ob = Pe(Er, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`scrollPaper${he(n.scroll)}`], t[`paperWidth${he(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(Ut(({
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
      [`&.${ys.paperScrollBody}`]: {
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
      [`&.${ys.paperScrollBody}`]: {
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
      [`&.${ys.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), Id = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = gt({
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
    open: E,
    PaperComponent: S = Er,
    PaperProps: x = {},
    scroll: w = "paper",
    slots: C = {},
    slotProps: P = {},
    TransitionComponent: k = xr,
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
  }, A = Sb(B), L = O.useRef(), M = (se) => {
    L.current = se.target === se.currentTarget;
  }, U = (se) => {
    b && b(se), L.current && (L.current = null, T && T(se, "backdropClick"));
  }, Y = xa(a), G = O.useMemo(() => ({
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
  }, [W, J] = et("root", {
    elementType: Eb,
    shouldForwardComponentProp: !0,
    externalForwardedProps: V,
    ownerState: B,
    className: xe(A.root, h),
    ref: n
  }), [te, K] = et("backdrop", {
    elementType: wb,
    shouldForwardComponentProp: !0,
    externalForwardedProps: V,
    ownerState: B
  }), [Z, D] = et("paper", {
    elementType: Ob,
    shouldForwardComponentProp: !0,
    externalForwardedProps: V,
    ownerState: B,
    className: xe(A.paper, x.className)
  }), [X, H] = et("container", {
    elementType: Cb,
    externalForwardedProps: V,
    ownerState: B,
    className: xe(A.container)
  }), [ee, F] = et("transition", {
    elementType: xr,
    externalForwardedProps: V,
    ownerState: B,
    additionalProps: {
      appear: !0,
      in: E,
      timeout: m,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ I(W, {
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
    open: E,
    onClick: U,
    ...J,
    ..._,
    children: /* @__PURE__ */ I(ee, {
      ...F,
      children: /* @__PURE__ */ I(X, {
        onMouseDown: M,
        ...H,
        children: /* @__PURE__ */ I(Z, {
          as: S,
          elevation: 24,
          role: "dialog",
          "aria-describedby": s,
          "aria-labelledby": Y,
          "aria-modal": c,
          ...D,
          children: /* @__PURE__ */ I(kd.Provider, {
            value: G,
            children: d
          })
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Id.propTypes = {
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
function Rb(e, t, n) {
  const r = t.getBoundingClientRect(), o = n && n.getBoundingClientRect(), i = Pn(t);
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
function Md(e) {
  return typeof e == "function" ? e() : e;
}
function Bo(e, t, n) {
  const r = Md(n), o = Rb(e, t, r);
  o && (t.style.webkitTransform = o, t.style.transform = o);
}
const Nd = /* @__PURE__ */ O.forwardRef(function(t, n) {
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
    style: E,
    timeout: S = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = Jt,
    ...w
  } = t, C = O.useRef(null), P = Et(Xn(c), C, n), k = (Y) => (G) => {
    Y && (G === void 0 ? Y(C.current) : Y(C.current, G));
  }, m = k((Y, G) => {
    Bo(f, Y, u), Na(Y), g && g(Y, G);
  }), R = k((Y, G) => {
    const N = hr({
      timeout: S,
      style: E,
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
      timeout: S,
      style: E,
      easing: d
    }, {
      mode: "exit"
    });
    Y.style.webkitTransition = r.transitions.create("-webkit-transform", G), Y.style.transition = r.transitions.create("transform", G), Bo(f, Y, u), y && y(Y);
  }), L = k((Y) => {
    Y.style.webkitTransition = "", Y.style.transition = "", b && b(Y);
  }), M = (Y) => {
    s && s(C.current, Y);
  }, U = O.useCallback(() => {
    C.current && Bo(f, C.current, u);
  }, [f, u]);
  return O.useEffect(() => {
    if (h || f === "down" || f === "right")
      return;
    const Y = Lu(() => {
      C.current && Bo(f, C.current, u);
    }), G = Pn(C.current);
    return G.addEventListener("resize", Y), () => {
      Y.clear(), G.removeEventListener("resize", Y);
    };
  }, [f, h, u]), O.useEffect(() => {
    h || U();
  }, [h, U]), /* @__PURE__ */ I(x, {
    nodeRef: C,
    onEnter: m,
    onEntered: _,
    onEntering: R,
    onExit: A,
    onExited: L,
    onExiting: B,
    addEndListener: M,
    appear: a,
    in: h,
    timeout: S,
    ...w,
    children: (Y, {
      ownerState: G,
      ...N
    }) => /* @__PURE__ */ O.cloneElement(c, {
      ref: P,
      style: {
        visibility: Y === "exited" && !h ? "hidden" : void 0,
        ...E,
        ...c.props.style
      },
      ...N
    })
  });
});
process.env.NODE_ENV !== "production" && (Nd.propTypes = {
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
  children: $n.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: Nn(l.oneOfType([vn, l.func]), (e) => {
    if (e.open) {
      const t = Md(e.container);
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
function Pb(e) {
  return ht("MuiDrawer", e);
}
Ct("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const $d = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, (n.variant === "permanent" || n.variant === "persistent") && t.docked, t.modal];
}, kb = (e) => {
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
  return At(o, Pb, t);
}, Ib = Pe(Yi, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: $d
})(Ut(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
}))), Mb = Pe("div", {
  shouldForwardProp: ka,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: $d
})({
  flex: "0 0 auto"
}), Nb = Pe(Er, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperAnchor${he(n.anchor)}`], n.variant !== "temporary" && t[`paperAnchorDocked${he(n.anchor)}`]];
  }
})(Ut(({
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
}))), Ad = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function $b(e) {
  return ["left", "right"].includes(e);
}
function Ab({
  direction: e
}, t) {
  return e === "rtl" && $b(t) ? Ad[t] : t;
}
const Dd = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = gt({
    props: t,
    name: "MuiDrawer"
  }), o = xn(), i = Ea(), s = {
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
    TransitionComponent: E,
    transitionDuration: S = s,
    variant: x = "temporary",
    slots: w = {},
    slotProps: C = {},
    ...P
  } = r, k = O.useRef(!1);
  O.useEffect(() => {
    k.current = !0;
  }, []);
  const m = Ab({
    direction: i ? "rtl" : "ltr"
  }, a), _ = {
    ...r,
    anchor: a,
    elevation: d,
    open: y,
    variant: x,
    ...P
  }, B = kb(_), A = {
    slots: {
      transition: E,
      ...w
    },
    slotProps: {
      paper: b,
      transition: T,
      ...C,
      backdrop: id(C.backdrop || {
        ...c,
        ...g
      }, {
        transitionDuration: S
      })
    }
  }, [L, M] = et("root", {
    ref: n,
    elementType: Ib,
    className: xe(B.root, B.modal, f),
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
  }), [U, Y] = et("paper", {
    elementType: Nb,
    shouldForwardComponentProp: !0,
    className: xe(B.paper, b.className),
    ownerState: _,
    externalForwardedProps: A,
    additionalProps: {
      elevation: x === "temporary" ? d : 0,
      square: !0
    }
  }), [G, N] = et("docked", {
    elementType: Mb,
    ref: n,
    className: xe(B.root, B.docked, f),
    ownerState: _,
    externalForwardedProps: A,
    additionalProps: P
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [j, V] = et("transition", {
    elementType: Nd,
    ownerState: _,
    externalForwardedProps: A,
    additionalProps: {
      in: y,
      direction: Ad[m],
      timeout: S,
      appear: k.current
    }
  }), W = /* @__PURE__ */ I(U, {
    ...Y,
    children: u
  });
  if (x === "permanent")
    return /* @__PURE__ */ I(G, {
      ...N,
      children: W
    });
  const J = /* @__PURE__ */ I(j, {
    ...V,
    children: W
  });
  return x === "persistent" ? /* @__PURE__ */ I(G, {
    ...N,
    children: J
  }) : /* @__PURE__ */ I(L, {
    ...M,
    children: J
  });
});
process.env.NODE_ENV !== "production" && (Dd.propTypes = {
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
  elevation: Ta,
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
function Us(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Db = {
  entering: {
    opacity: 1,
    transform: Us(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, vs = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), no = /* @__PURE__ */ O.forwardRef(function(t, n) {
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
    TransitionComponent: y = Jt,
    ...b
  } = t, T = ur(), E = O.useRef(), S = xn(), x = O.useRef(null), w = Et(x, Xn(i), n), C = (L) => (M) => {
    if (L) {
      const U = x.current;
      M === void 0 ? L(U) : L(U, M);
    }
  }, P = C(f), k = C((L, M) => {
    Na(L);
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
    p === "auto" ? (N = S.transitions.getAutoHeightDuration(L.clientHeight), E.current = N) : N = U, L.style.transition = [S.transitions.create("opacity", {
      duration: N,
      delay: Y
    }), S.transitions.create("transform", {
      duration: vs ? N : N * 0.666,
      delay: Y,
      easing: G
    })].join(","), c && c(L, M);
  }), m = C(u), R = C(g), _ = C((L) => {
    const {
      duration: M,
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
    p === "auto" ? (G = S.transitions.getAutoHeightDuration(L.clientHeight), E.current = G) : G = M, L.style.transition = [S.transitions.create("opacity", {
      duration: G,
      delay: U
    }), S.transitions.create("transform", {
      duration: vs ? G : G * 0.666,
      delay: vs ? U : U || G * 0.333,
      easing: Y
    })].join(","), L.style.opacity = 0, L.style.transform = Us(0.75), d && d(L);
  }), B = C(h);
  return /* @__PURE__ */ I(y, {
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
      p === "auto" && T.start(E.current || 0, L), r && r(x.current, L);
    },
    timeout: p === "auto" ? null : p,
    ...b,
    children: (L, {
      ownerState: M,
      ...U
    }) => /* @__PURE__ */ O.cloneElement(i, {
      style: {
        opacity: 0,
        transform: Us(0.75),
        visibility: L === "exited" && !a ? "hidden" : void 0,
        ...Db[L],
        ...v,
        ...i.props.style
      },
      ref: w,
      ...U
    })
  });
});
process.env.NODE_ENV !== "production" && (no.propTypes = {
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
  children: $n.isRequired,
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
no && (no.muiSupportAuto = !0);
function _b(e) {
  return ht("MuiPopover", e);
}
Ct("MuiPopover", ["root", "paper"]);
function yc(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function vc(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function bc(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function jr(e) {
  return typeof e == "function" ? e() : e;
}
const Bb = (e) => {
  const {
    classes: t
  } = e;
  return At({
    root: ["root"],
    paper: ["paper"]
  }, _b, t);
}, Lb = Pe(Yi, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), jb = Pe(Er, {
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
}), _d = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = gt({
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
    TransitionComponent: E,
    // TODO: remove in v7
    transitionDuration: S = "auto",
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
    TransitionComponent: E,
    transitionDuration: S,
    TransitionProps: x
  }, m = Bb(k), R = O.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (a || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), a;
    const H = jr(i), ee = H && H.nodeType === 1 ? H : xt(P.current).body, F = ee.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const se = ee.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && se.top === 0 && se.left === 0 && se.right === 0 && se.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: F.top + yc(F, s.vertical),
      left: F.left + vc(F, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, a, c]), _ = O.useCallback((H) => ({
    vertical: yc(H, T.vertical),
    horizontal: vc(H, T.horizontal)
  }), [T.horizontal, T.vertical]), B = O.useCallback((H) => {
    const ee = {
      width: H.offsetWidth,
      height: H.offsetHeight
    }, F = _(ee);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: bc(F)
      };
    const se = R();
    let ge = se.top - F.vertical, Ce = se.left - F.horizontal;
    const Ke = ge + ee.height, be = Ce + ee.width, Te = Pn(jr(i)), de = Te.innerHeight - g, Me = Te.innerWidth - g;
    if (g !== null && ge < g) {
      const ye = ge - g;
      ge -= ye, F.vertical += ye;
    } else if (g !== null && Ke > de) {
      const ye = Ke - de;
      ge -= ye, F.vertical += ye;
    }
    if (process.env.NODE_ENV !== "production" && ee.height > de && ee.height && de && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ee.height - de}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), g !== null && Ce < g) {
      const ye = Ce - g;
      Ce -= ye, F.horizontal += ye;
    } else if (be > Me) {
      const ye = be - Me;
      Ce -= ye, F.horizontal += ye;
    }
    return {
      top: `${Math.round(ge)}px`,
      left: `${Math.round(Ce)}px`,
      transformOrigin: bc(F)
    };
  }, [i, c, R, _, g]), [A, L] = O.useState(v), M = O.useCallback(() => {
    const H = P.current;
    if (!H)
      return;
    const ee = B(H);
    ee.top !== null && H.style.setProperty("top", ee.top), ee.left !== null && (H.style.left = ee.left), H.style.transformOrigin = ee.transformOrigin, L(!0);
  }, [B]);
  O.useEffect(() => (w && window.addEventListener("scroll", M), () => window.removeEventListener("scroll", M)), [i, w, M]);
  const U = () => {
    M();
  }, Y = () => {
    L(!1);
  };
  O.useEffect(() => {
    v && M();
  }), O.useImperativeHandle(o, () => v ? {
    updatePosition: () => {
      M();
    }
  } : null, [v, M]), O.useEffect(() => {
    if (!v)
      return;
    const H = Lu(() => {
      M();
    }), ee = Pn(jr(i));
    return ee.addEventListener("resize", H), () => {
      H.clear(), ee.removeEventListener("resize", H);
    };
  }, [i, v, M]);
  let G = S;
  const N = {
    slots: {
      transition: E,
      ...y
    },
    slotProps: {
      transition: x,
      paper: p,
      ...b
    }
  }, [j, V] = et("transition", {
    elementType: no,
    externalForwardedProps: N,
    ownerState: k,
    getSlotProps: (H) => ({
      ...H,
      onEntering: (ee, F) => {
        var se;
        (se = H.onEntering) == null || se.call(H, ee, F), U();
      },
      onExited: (ee) => {
        var F;
        (F = H.onExited) == null || F.call(H, ee), Y();
      }
    }),
    additionalProps: {
      appear: !0,
      in: v
    }
  });
  S === "auto" && !j.muiSupportAuto && (G = void 0);
  const W = d || (i ? xt(jr(i)).body : void 0), [J, {
    slots: te,
    slotProps: K,
    ...Z
  }] = et("root", {
    ref: n,
    elementType: Lb,
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
        backdrop: id(typeof b.backdrop == "function" ? b.backdrop(k) : b.backdrop, {
          invisible: !0
        })
      },
      container: W,
      open: v
    },
    ownerState: k,
    className: xe(m.root, f)
  }), [D, X] = et("paper", {
    ref: P,
    className: m.paper,
    elementType: jb,
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
  return /* @__PURE__ */ I(J, {
    ...Z,
    ...!jv(J) && {
      slots: te,
      slotProps: K,
      disableScrollLock: w
    },
    children: /* @__PURE__ */ I(j, {
      ...V,
      timeout: G,
      children: /* @__PURE__ */ I(D, {
        ...X,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (_d.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Fi,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Nn(l.oneOfType([vn, l.func]), (e) => {
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
  elevation: Ta,
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
    component: Bu
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
function Fb(e) {
  return ht("MuiTooltip", e);
}
const qe = Ct("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function zb(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Vb = (e) => {
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
  return At(s, Fb, t);
}, Hb = Pe(Ui, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(Ut(({
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
      [`&[data-popper-placement*="bottom"] .${qe.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${qe.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${qe.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${qe.arrow}`]: {
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
      [`&[data-popper-placement*="right"] .${qe.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${qe.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${qe.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${qe.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), Wb = Pe("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${he(n.placement.split("-")[0])}`]];
  }
})(Ut(({
  theme: e
}) => ({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Gt(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium,
  [`.${qe.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${qe.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${qe.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${qe.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${zb(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${qe.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${qe.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${qe.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${qe.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${qe.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${qe.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${qe.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${qe.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${qe.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${qe.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), Ub = Pe("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (e, t) => t.arrow
})(Ut(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : Gt(e.palette.grey[700], 0.9),
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
let Lo = !1;
const xc = new zi();
let Nr = {
  x: 0,
  y: 0
};
function jo(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const Ha = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = gt({
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
    leaveDelay: E = 0,
    leaveTouchDelay: S = 1500,
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
    ...M
  } = r, U = /* @__PURE__ */ O.isValidElement(i) ? i : /* @__PURE__ */ I("span", {
    children: i
  }), Y = xn(), G = Ea(), [N, j] = O.useState(), [V, W] = O.useState(null), J = O.useRef(!1), te = h || b, K = ur(), Z = ur(), D = ur(), X = ur(), [H, ee] = Ih({
    controlled: C,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let F = H;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: oe
    } = O.useRef(C !== void 0);
    O.useEffect(() => {
      N && N.disabled && !oe && B !== "" && N.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [B, N, oe]);
  }
  const se = xa(T), ge = O.useRef(), Ce = gn(() => {
    ge.current !== void 0 && (document.body.style.WebkitUserSelect = ge.current, ge.current = void 0), X.clear();
  });
  O.useEffect(() => Ce, [Ce]);
  const Ke = (oe) => {
    xc.clear(), Lo = !0, ee(!0), w && !F && w(oe);
  }, be = gn(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (oe) => {
      xc.start(800 + E, () => {
        Lo = !1;
      }), ee(!1), x && F && x(oe), K.start(Y.transitions.duration.shortest, () => {
        J.current = !1;
      });
    }
  ), Te = (oe) => {
    J.current && oe.type !== "touchstart" || (N && N.removeAttribute("title"), Z.clear(), D.clear(), v || Lo && p ? Z.start(Lo ? p : v, () => {
      Ke(oe);
    }) : Ke(oe));
  }, de = (oe) => {
    Z.clear(), D.start(E, () => {
      be(oe);
    });
  }, [, Me] = O.useState(!1), ye = (oe) => {
    ai(oe.target) || (Me(!1), de(oe));
  }, ne = (oe) => {
    N || j(oe.currentTarget), ai(oe.target) && (Me(!0), Te(oe));
  }, tt = (oe) => {
    J.current = !0;
    const ct = U.props;
    ct.onTouchStart && ct.onTouchStart(oe);
  }, it = (oe) => {
    tt(oe), D.clear(), K.clear(), Ce(), ge.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", X.start(y, () => {
      document.body.style.WebkitUserSelect = ge.current, Te(oe);
    });
  }, st = (oe) => {
    U.props.onTouchEnd && U.props.onTouchEnd(oe), Ce(), D.start(S, () => {
      be(oe);
    });
  };
  O.useEffect(() => {
    if (!F)
      return;
    function oe(ct) {
      ct.key === "Escape" && be(ct);
    }
    return document.addEventListener("keydown", oe), () => {
      document.removeEventListener("keydown", oe);
    };
  }, [be, F]);
  const pt = Et(Xn(U), j, n);
  !B && B !== 0 && (F = !1);
  const vt = O.useRef(), Ot = (oe) => {
    const ct = U.props;
    ct.onMouseMove && ct.onMouseMove(oe), Nr = {
      x: oe.clientX,
      y: oe.clientY
    }, vt.current && vt.current.update();
  }, mt = {}, ke = typeof B == "string";
  u ? (mt.title = !F && ke && !d ? B : null, mt["aria-describedby"] = F ? se : null) : (mt["aria-label"] = ke ? B : null, mt["aria-labelledby"] = F && !ke ? se : null);
  const fe = {
    ...mt,
    ...M,
    ...U.props,
    className: xe(M.className, U.props.className),
    onTouchStart: tt,
    ref: pt,
    ...b ? {
      onMouseMove: Ot
    } : {}
  };
  process.env.NODE_ENV !== "production" && (fe["data-mui-internal-clone-element"] = !0, O.useEffect(() => {
    N && !N.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [N]));
  const We = {};
  g || (fe.onTouchStart = it, fe.onTouchEnd = st), d || (fe.onMouseOver = jo(Te, fe.onMouseOver), fe.onMouseLeave = jo(de, fe.onMouseLeave), te || (We.onMouseOver = Te, We.onMouseLeave = de)), f || (fe.onFocus = jo(ne, fe.onFocus), fe.onBlur = jo(ye, fe.onBlur), te || (We.onFocus = ne, We.onBlur = ye)), process.env.NODE_ENV !== "production" && U.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${U.props.title}\` or the Tooltip component.`].join(`
`));
  const Xe = {
    ...r,
    isRtl: G,
    arrow: o,
    disableInteractive: te,
    placement: P,
    PopperComponentProp: k,
    touch: J.current
  }, Le = typeof R.popper == "function" ? R.popper(Xe) : R.popper, Zn = O.useMemo(() => {
    var ct, Qe;
    let oe = [{
      name: "arrow",
      enabled: !!V,
      options: {
        element: V,
        padding: 4
      }
    }];
    return (ct = m.popperOptions) != null && ct.modifiers && (oe = oe.concat(m.popperOptions.modifiers)), (Qe = Le == null ? void 0 : Le.popperOptions) != null && Qe.modifiers && (oe = oe.concat(Le.popperOptions.modifiers)), {
      ...m.popperOptions,
      ...Le == null ? void 0 : Le.popperOptions,
      modifiers: oe
    };
  }, [V, m.popperOptions, Le == null ? void 0 : Le.popperOptions]), er = Vb(Xe), es = typeof R.transition == "function" ? R.transition(Xe) : R.transition, Tn = {
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
        ...Le ?? c.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: R.tooltip ?? c.tooltip,
      transition: {
        ...L,
        ...es ?? c.transition
      }
    }
  }, [Qt, ts] = et("popper", {
    elementType: Hb,
    externalForwardedProps: Tn,
    ownerState: Xe,
    className: xe(er.popper, m == null ? void 0 : m.className)
  }), [ns, Co] = et("transition", {
    elementType: no,
    externalForwardedProps: Tn,
    ownerState: Xe
  }), [Oo, ue] = et("tooltip", {
    elementType: Wb,
    className: er.tooltip,
    externalForwardedProps: Tn,
    ownerState: Xe
  }), [Je, ot] = et("arrow", {
    elementType: Ub,
    className: er.arrow,
    externalForwardedProps: Tn,
    ownerState: Xe,
    ref: W
  });
  return /* @__PURE__ */ Ae(O.Fragment, {
    children: [/* @__PURE__ */ O.cloneElement(U, fe), /* @__PURE__ */ I(Qt, {
      as: k ?? Ui,
      placement: P,
      anchorEl: b ? {
        getBoundingClientRect: () => ({
          top: Nr.y,
          left: Nr.x,
          right: Nr.x,
          bottom: Nr.y,
          width: 0,
          height: 0
        })
      } : N,
      popperRef: vt,
      open: N ? F : !1,
      id: se,
      transition: !0,
      ...We,
      ...ts,
      popperOptions: Zn,
      children: ({
        TransitionProps: oe
      }) => /* @__PURE__ */ I(ns, {
        timeout: Y.transitions.duration.shorter,
        ...oe,
        ...Co,
        children: /* @__PURE__ */ Ae(Oo, {
          ...ue,
          children: [B, o ? /* @__PURE__ */ I(Je, {
            ...ot
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ha.propTypes = {
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
  children: $n.isRequired,
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
const $r = Au({
  themeId: Kt
}), Bd = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), hi = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Wa = Object.freeze({
  ...Bd,
  ...hi
}), Ys = Object.freeze({
  ...Wa,
  body: "",
  hidden: !1
});
function Yb(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function Tc(e, t) {
  const n = Yb(e, t);
  for (const r in Ys)
    r in hi ? r in e && !(r in n) && (n[r] = hi[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
  return n;
}
function qb(e, t) {
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
function Gb(e, t, n) {
  const r = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let i = {};
  function s(a) {
    i = Tc(
      r[a] || o[a],
      i
    );
  }
  return s(t), n.forEach(s), Tc(e, i);
}
function Ld(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    t(o, null), n.push(o);
  });
  const r = qb(e);
  for (const o in r) {
    const i = r[o];
    i && (t(o, Gb(e, o, i)), n.push(o));
  }
  return n;
}
const Kb = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Bd
};
function bs(e, t) {
  for (const n in t)
    if (n in e && typeof e[n] != typeof t[n])
      return !1;
  return !0;
}
function jd(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !bs(e, Kb))
    return null;
  const n = t.icons;
  for (const o in n) {
    const i = n[o];
    if (
      // Name cannot be empty
      !o || // Must have body
      typeof i.body != "string" || // Check other props
      !bs(
        i,
        Ys
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
      !bs(
        i,
        Ys
      )
    )
      return null;
  }
  return t;
}
const Fd = /^[a-z0-9]+(-[a-z0-9]+)*$/, qi = (e, t, n, r = "") => {
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
    return t && !Qo(u) ? null : u;
  }
  const i = o[0], s = i.split("-");
  if (s.length > 1) {
    const a = {
      provider: r,
      prefix: s.shift(),
      name: s.join("-")
    };
    return t && !Qo(a) ? null : a;
  }
  if (n && r === "") {
    const a = {
      provider: r,
      prefix: "",
      name: i
    };
    return t && !Qo(a, n) ? null : a;
  }
  return null;
}, Qo = (e, t) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e.prefix === "" || e.prefix) && e.name) : !1, wc = /* @__PURE__ */ Object.create(null);
function Xb(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function Tr(e, t) {
  const n = wc[e] || (wc[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = Xb(e, t));
}
function zd(e, t) {
  return jd(t) ? Ld(t, (n, r) => {
    r ? e.icons[n] = r : e.missing.add(n);
  }) : [];
}
function Jb(e, t, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[t] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let ro = !1;
function Vd(e) {
  return typeof e == "boolean" && (ro = e), ro;
}
function Sc(e) {
  const t = typeof e == "string" ? qi(e, !0, ro) : e;
  if (t) {
    const n = Tr(t.provider, t.prefix), r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function Qb(e, t) {
  const n = qi(e, !0, ro);
  if (!n)
    return !1;
  const r = Tr(n.provider, n.prefix);
  return t ? Jb(r, n.name, t) : (r.missing.add(n.name), !0);
}
function Zb(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), ro && !t && !e.prefix) {
    let o = !1;
    return jd(e) && (e.prefix = "", Ld(e, (i, s) => {
      Qb(i, s) && (o = !0);
    })), o;
  }
  const n = e.prefix;
  if (!Qo({
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = Tr(t, n);
  return !!zd(r, e);
}
const Hd = Object.freeze({
  width: null,
  height: null
}), Wd = Object.freeze({
  // Dimensions
  ...Hd,
  // Transformations
  ...hi
}), e0 = /(-?[0-9.]*[0-9]+[0-9.]*)/g, t0 = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Ec(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const r = e.split(e0);
  if (r === null || !r.length)
    return e;
  const o = [];
  let i = r.shift(), s = t0.test(i);
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
function n0(e, t = "defs") {
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
function r0(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function o0(e, t, n) {
  const r = n0(e);
  return r0(r.defs, t + r.content + n);
}
const i0 = (e) => e === "unset" || e === "undefined" || e === "none";
function s0(e, t) {
  const n = {
    ...Wa,
    ...e
  }, r = {
    ...Wd,
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
    let E = p.rotate;
    b ? T ? E += 2 : (y.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), y.push("scale(-1 1)"), o.top = o.left = 0) : T && (y.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), y.push("scale(1 -1)"), o.top = o.left = 0);
    let S;
    switch (E < 0 && (E -= Math.floor(E / 4) * 4), E = E % 4, E) {
      case 1:
        S = o.height / 2 + o.top, y.unshift(
          "rotate(90 " + S.toString() + " " + S.toString() + ")"
        );
        break;
      case 2:
        y.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        S = o.width / 2 + o.left, y.unshift(
          "rotate(-90 " + S.toString() + " " + S.toString() + ")"
        );
        break;
    }
    E % 2 === 1 && (o.left !== o.top && (S = o.left, o.left = o.top, o.top = S), o.width !== o.height && (S = o.width, o.width = o.height, o.height = S)), y.length && (i = o0(
      i,
      '<g transform="' + y.join(" ") + '">',
      "</g>"
    ));
  });
  const s = r.width, a = r.height, c = o.width, u = o.height;
  let f, d;
  s === null ? (d = a === null ? "1em" : a === "auto" ? u : a, f = Ec(d, c / u)) : (f = s === "auto" ? c : s, d = a === null ? Ec(f, u / c) : a === "auto" ? u : a);
  const h = {}, g = (p, y) => {
    i0(y) || (h[p] = y.toString());
  };
  g("width", f), g("height", d);
  const v = [o.left, o.top, c, u];
  return h.viewBox = v.join(" "), {
    attributes: h,
    viewBox: v,
    body: i
  };
}
const a0 = /\sid="(\S+)"/g, l0 = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let c0 = 0;
function u0(e, t = l0) {
  const n = [];
  let r;
  for (; r = a0.exec(e); )
    n.push(r[1]);
  if (!n.length)
    return e;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((i) => {
    const s = typeof t == "function" ? t(i) : t + (c0++).toString(), a = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"),
      "$1" + s + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const qs = /* @__PURE__ */ Object.create(null);
function d0(e, t) {
  qs[e] = t;
}
function Gs(e) {
  return qs[e] || qs[""];
}
function Ua(e) {
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
const Ya = /* @__PURE__ */ Object.create(null), Ar = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Zo = [];
for (; Ar.length > 0; )
  Ar.length === 1 || Math.random() > 0.5 ? Zo.push(Ar.shift()) : Zo.push(Ar.pop());
Ya[""] = Ua({
  resources: ["https://api.iconify.design"].concat(Zo)
});
function f0(e, t) {
  const n = Ua(t);
  return n === null ? !1 : (Ya[e] = n, !0);
}
function qa(e) {
  return Ya[e];
}
const p0 = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Cc = p0();
function m0(e, t) {
  const n = qa(e);
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
function h0(e) {
  return e === 404;
}
const g0 = (e, t, n) => {
  const r = [], o = m0(e, t), i = "icons";
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
function y0(e) {
  if (typeof e == "string") {
    const t = qa(e);
    if (t)
      return t.path;
  }
  return "/";
}
const v0 = (e, t, n) => {
  if (!Cc) {
    n("abort", 424);
    return;
  }
  let r = y0(t.provider);
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
  Cc(e + r).then((i) => {
    const s = i.status;
    if (s !== 200) {
      setTimeout(() => {
        n(h0(s) ? "abort" : "next", s);
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
}, b0 = {
  prepare: g0,
  send: v0
};
function x0(e) {
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
    const i = o.provider, s = o.prefix, a = o.name, c = n[i] || (n[i] = /* @__PURE__ */ Object.create(null)), u = c[s] || (c[s] = Tr(i, s));
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
function Ud(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
  });
}
function T0(e) {
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
      }), s.pending.length !== a && (n || Ud([e], i.id), i.callback(
        s.loaded.slice(0),
        s.missing.slice(0),
        s.pending.slice(0),
        i.abort
      ));
    });
  }));
}
let w0 = 0;
function S0(e, t, n) {
  const r = w0++, o = Ud.bind(null, n, r);
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
function E0(e, t = !0, n = !1) {
  const r = [];
  return e.forEach((o) => {
    const i = typeof o == "string" ? qi(o, t, n) : o;
    i && r.push(i);
  }), r;
}
var C0 = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function O0(e, t, n, r) {
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
  function E() {
    h.forEach((w) => {
      w.status === "pending" && (w.status = "aborted");
    }), h = [];
  }
  function S(w, C, P) {
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
    if (v(), E(), !e.random) {
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
          v(), c === "pending" && (E(), T());
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
        S(C, P, k);
      }
    };
    h.push(C), u++, d = setTimeout(x, e.rotate), n(w, t, C.callback);
  }
  return setTimeout(x), b;
}
function Yd(e) {
  const t = {
    ...C0,
    ...e
  };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === "pending");
  }
  function o(a, c, u) {
    const f = O0(
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
function Oc() {
}
const xs = /* @__PURE__ */ Object.create(null);
function R0(e) {
  if (!xs[e]) {
    const t = qa(e);
    if (!t)
      return;
    const n = Yd(t), r = {
      config: t,
      redundancy: n
    };
    xs[e] = r;
  }
  return xs[e];
}
function P0(e, t, n) {
  let r, o;
  if (typeof e == "string") {
    const i = Gs(e);
    if (!i)
      return n(void 0, 424), Oc;
    o = i.send;
    const s = R0(e);
    s && (r = s.redundancy);
  } else {
    const i = Ua(e);
    if (i) {
      r = Yd(i);
      const s = e.resources ? e.resources[0] : "", a = Gs(s);
      a && (o = a.send);
    }
  }
  return !r || !o ? (n(void 0, 424), Oc) : r.query(t, o, n)().abort;
}
function Rc() {
}
function k0(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, T0(e);
  }));
}
function I0(e) {
  const t = [], n = [];
  return e.forEach((r) => {
    (r.match(Fd) ? t : n).push(r);
  }), {
    valid: t,
    invalid: n
  };
}
function Dr(e, t, n) {
  function r() {
    const o = e.pendingIcons;
    t.forEach((i) => {
      o && o.delete(i), e.icons[i] || e.missing.add(i);
    });
  }
  if (n && typeof n == "object")
    try {
      if (!zd(e, n).length) {
        r();
        return;
      }
    } catch (o) {
      console.error(o);
    }
  r(), k0(e);
}
function Pc(e, t) {
  e instanceof Promise ? e.then((n) => {
    t(n);
  }).catch(() => {
    t(null);
  }) : t(e);
}
function M0(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = e, o = e.iconsToLoad;
    if (delete e.iconsToLoad, !o || !o.length)
      return;
    const i = e.loadIcon;
    if (e.loadIcons && (o.length > 1 || !i)) {
      Pc(
        e.loadIcons(o, r, n),
        (f) => {
          Dr(e, o, f);
        }
      );
      return;
    }
    if (i) {
      o.forEach((f) => {
        const d = i(f, r, n);
        Pc(d, (h) => {
          const g = h ? {
            prefix: r,
            icons: {
              [f]: h
            }
          } : null;
          Dr(e, [f], g);
        });
      });
      return;
    }
    const { valid: s, invalid: a } = I0(o);
    if (a.length && Dr(e, a, null), !s.length)
      return;
    const c = r.match(Fd) ? Gs(n) : null;
    if (!c) {
      Dr(e, s, null);
      return;
    }
    c.prepare(n, r, s).forEach((f) => {
      P0(n, f, (d) => {
        Dr(e, f.icons, d);
      });
    });
  }));
}
const N0 = (e, t) => {
  const n = E0(e, !0, Vd()), r = x0(n);
  if (!r.pending.length) {
    let c = !0;
    return t && setTimeout(() => {
      c && t(
        r.loaded,
        r.missing,
        r.pending,
        Rc
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
    s = u, a = f, i.push(Tr(u, f));
    const d = o[u] || (o[u] = /* @__PURE__ */ Object.create(null));
    d[f] || (d[f] = []);
  }), r.pending.forEach((c) => {
    const { provider: u, prefix: f, name: d } = c, h = Tr(u, f), g = h.pendingIcons || (h.pendingIcons = /* @__PURE__ */ new Set());
    g.has(d) || (g.add(d), o[u][f].push(d));
  }), i.forEach((c) => {
    const u = o[c.provider][c.prefix];
    u.length && M0(c, u);
  }), t ? S0(t, r, i) : Rc;
};
function $0(e, t) {
  const n = {
    ...e
  };
  for (const r in t) {
    const o = t[r], i = typeof o;
    r in Hd ? (o === null || o && (i === "string" || i === "number")) && (n[r] = o) : i === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o);
  }
  return n;
}
const A0 = /[\s,]+/;
function D0(e, t) {
  t.split(A0).forEach((n) => {
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
function _0(e, t = 0) {
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
function B0(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t)
    n += " " + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function L0(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function j0(e) {
  return "data:image/svg+xml," + L0(e);
}
function F0(e) {
  return 'url("' + j0(e) + '")';
}
let Wr;
function z0() {
  try {
    Wr = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (e) => e
    });
  } catch {
    Wr = null;
  }
}
function V0(e) {
  return Wr === void 0 && z0(), Wr ? Wr.createHTML(e) : e;
}
const qd = {
  ...Wd,
  inline: !1
}, H0 = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, W0 = {
  display: "inline-block"
}, Ks = {
  backgroundColor: "currentColor"
}, Gd = {
  backgroundColor: "transparent"
}, kc = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, Ic = {
  WebkitMask: Ks,
  mask: Ks,
  background: Gd
};
for (const e in Ic) {
  const t = Ic[e];
  for (const n in kc)
    t[e + n] = kc[n];
}
const U0 = {
  ...qd,
  inline: !0
};
function Mc(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const Y0 = (e, t, n) => {
  const r = t.inline ? U0 : qd, o = $0(r, t), i = t.mode || "svg", s = {}, a = t.style || {}, c = {
    ...i === "svg" ? H0 : {}
  };
  if (n) {
    const y = qi(n, !1, !0);
    if (y) {
      const b = ["iconify"], T = [
        "provider",
        "prefix"
      ];
      for (const E of T)
        y[E] && b.push("iconify--" + y[E]);
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
          typeof b == "string" && D0(o, b);
          break;
        // Color: copy to style
        case "color":
          s.color = b;
          break;
        // Rotation as string
        case "rotate":
          typeof b == "string" ? o[y] = _0(b) : typeof b == "number" && (o[y] = b);
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
  const u = s0(e, o), f = u.attributes;
  if (o.inline && (s.verticalAlign = "-0.125em"), i === "svg") {
    c.style = {
      ...s,
      ...a
    }, Object.assign(c, f);
    let y = 0, b = t.id;
    return typeof b == "string" && (b = b.replace(/-/g, "_")), c.dangerouslySetInnerHTML = {
      __html: V0(u0(u.body, b ? () => b + "ID" + y++ : "iconifyReact"))
    }, Un("svg", c);
  }
  const { body: d, width: h, height: g } = e, v = i === "mask" || (i === "bg" ? !1 : d.indexOf("currentColor") !== -1), p = B0(d, {
    ...f,
    width: h + "",
    height: g + ""
  });
  return c.style = {
    ...s,
    "--svg": F0(p),
    width: Mc(f.width),
    height: Mc(f.height),
    ...W0,
    ...v ? Ks : Gd,
    ...a
  }, Un("span", c);
};
Vd(!0);
d0("", b0);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !Zb(r)) && console.error(n);
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
          f0(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
function Kd(e) {
  const [t, n] = Wn(!!e.ssr), [r, o] = Wn({});
  function i(g) {
    if (g) {
      const v = e.icon;
      if (typeof v == "object")
        return {
          name: "",
          data: v
        };
      const p = Sc(v);
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
  const [s, a] = Wn(i(!!e.ssr));
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
    const p = Sc(v);
    if (u({
      name: v,
      data: p
    }))
      if (p === void 0) {
        const y = N0([v], f);
        o({
          callback: y
        });
      } else p && ((g = e.onLoad) === null || g === void 0 || g.call(e, v));
  }
  ni(() => (n(!0), c), []), ni(() => {
    t && f();
  }, [e.icon, t]);
  const { name: d, data: h } = s;
  return h ? Y0({
    ...Wa,
    ...h
  }, e, d) : e.children ? e.children : e.fallback ? e.fallback : Un("span", {});
}
const q0 = oa((e, t) => Kd({
  ...e,
  _ref: t
}));
oa((e, t) => Kd({
  inline: !0,
  ...e,
  _ref: t
}));
const kn = He(({ ref: e, icon: t, width: n = 20, color: r = "auto", sx: o, ...i }) => /* @__PURE__ */ I(
  Cr,
  {
    id: "VenomousUI-Icon",
    ssr: !0,
    ref: e,
    component: q0,
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
kn.displayName = "Icon";
const Ht = He(
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
    const c = En(
      () => /* @__PURE__ */ I(
        fd,
        {
          id: "VenomousUI-Text",
          component: "div",
          variant: n ? r : t ? "caption" : "body1",
          noWrap: o,
          sx: {
            fontWeight: n || t ? "bold" : "normal",
            color: (u) => i === "error" ? u.palette.error.main : i === "primary" ? u.palette.primary.main : i === "success" ? u.palette.success.main : i === "grey" ? u.palette.text.secondary : "inherit",
            ...s
          },
          ...a,
          children: e
        }
      ),
      [e, n, r, o, s, a]
    );
    return o ? /* @__PURE__ */ I(Ha, { arrow: !0, title: e, children: c }) : c;
  }
);
Ht.displayName = "Text";
const G0 = He(({ width: e = 100, text: t = "", sx: n }) => /* @__PURE__ */ Ae(Cr, { id: "VenomousUI-Blank", sx: { width: e, ...n }, children: [
  /* @__PURE__ */ I(kn, { width: e, icon: "solar:box-linear", color: "grey" }),
  /* @__PURE__ */ I(Ht, { text: t, isTitle: !0, titleLevel: "h6", textColor: "grey", textAlign: "center" })
] }));
G0.displayName = "Blank";
const Kn = He(
  ({
    text: e,
    loading: t,
    disabled: n,
    isOutlined: r,
    isGhost: o,
    isCircle: i,
    icon: s,
    iconWidth: a = 20,
    iconPosition: c = void 0,
    color: u = "primary",
    onClick: f,
    sx: d,
    ...h
  }) => {
    const { buttonColors: g } = K0({ color: u, isGhost: o, isOutlined: r }), v = En(() => s ? /* @__PURE__ */ I(kn, { icon: s, width: a }) : null, [s, a]);
    return /* @__PURE__ */ Ae(
      Va,
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
          "& .MuiButton-startIcon": { svg: { color: "inherit", mr: "8px" } },
          "& .MuiButton-endIcon": { svg: { color: "inherit", ml: "8px" } },
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
Kn.displayName = "Button";
function K0({ color: e = "primary", isGhost: t, isOutlined: n }) {
  const r = xn();
  return { buttonColors: En(() => {
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
function To() {
  return {
    paperCommonStyles: En(
      () => ({
        p: "8px",
        borderRadius: "8px !important",
        backgroundColor: ({ palette: t }) => t.background.paper,
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.119), rgba(255, 255, 255, 0.119));"
      }),
      []
    )
  };
}
const oo = He(({ isOutlined: e, children: t, sx: n, ...r }) => {
  const { paperCommonStyles: o } = To();
  return /* @__PURE__ */ I(
    Er,
    {
      id: "VenomousUI-Paper",
      variant: e ? "outlined" : "elevation",
      elevation: e ? 0 : 3,
      square: !0,
      sx: {
        ...o,
        ...n
      },
      ...r,
      children: t
    }
  );
});
oo.displayName = "Paper";
const Gi = He(
  ({ isOutlined: e, clickable: t, onClick: n, disabled: r, children: o, sx: i }) => t ? /* @__PURE__ */ I(
    Va,
    {
      id: "VenomousUI-Card",
      component: oo,
      isOutlined: e,
      disabled: r,
      onClick: r ? void 0 : n,
      sx: {
        display: "block",
        color: "inherit",
        textTransform: "none",
        borderRadius: "8px",
        cursor: r ? "not-allowed !important" : "pointer",
        pointerEvents: "auto !important",
        p: "16px",
        ...e ? {
          border: 1,
          borderColor: "divider"
        } : {},
        ...i
      },
      children: o
    }
  ) : /* @__PURE__ */ I(oo, { id: "VenomousUI-Card", isOutlined: e, sx: { p: "16px", ...i }, children: o })
);
Gi.displayName = "Card";
const dn = He(
  ({ children: e, row: t, alignItems: n, justifyContent: r, gap: o = 1, sx: i, ...s }) => /* @__PURE__ */ I(
    Cr,
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
dn.displayName = "Flex";
const X0 = He(
  ({ title: e, subtitle: t, headerStartExtra: n, headerEndExtra: r, children: o, ...i }) => /* @__PURE__ */ Ae(Gi, { ...i, children: [
    /* @__PURE__ */ Ae(dn, { row: !0, mb: "8px", justifyContent: "space-between", alignItems: "center", children: [
      n && /* @__PURE__ */ I("div", { style: { marginRight: t ? "8px" : 0 }, children: n }),
      /* @__PURE__ */ Ae(dn, { gap: 0, children: [
        e && /* @__PURE__ */ I(Ht, { text: e, isTitle: !0, titleLevel: "h6", lineHeight: "1.25rem", ellipsis: !0 }),
        t && /* @__PURE__ */ I(Ht, { text: t, isLabel: !0, ellipsis: !0 })
      ] }),
      r && /* @__PURE__ */ I(
        "div",
        {
          style: {
            marginRight: t ? "-8px" : 0,
            marginTop: t ? "-8px" : 0,
            marginLeft: "8px"
          },
          children: r
        }
      )
    ] }),
    o
  ] })
);
X0.displayName = "ExhibitCard";
const Ki = 0, Dn = 1, Or = 2, Xd = 4;
function Nc(e) {
  return () => e;
}
function J0(e) {
  e();
}
function Jd(e, t) {
  return (n) => e(t(n));
}
function $c(e, t) {
  return () => e(t);
}
function Qd(e, t) {
  return (n) => e(t, n);
}
function Ga(e) {
  return e !== void 0;
}
function Q0(...e) {
  return () => {
    e.map(J0);
  };
}
function Rr() {
}
function Xi(e, t) {
  return t(e), e;
}
function Z0(e, t) {
  return t(e);
}
function Fe(...e) {
  return e;
}
function Ie(e, t) {
  return e(Dn, t);
}
function pe(e, t) {
  e(Ki, t);
}
function Ka(e) {
  e(Or);
}
function dt(e) {
  return e(Xd);
}
function ie(e, t) {
  return Ie(e, Qd(t, Ki));
}
function fn(e, t) {
  const n = e(Dn, (r) => {
    n(), t(r);
  });
  return n;
}
function Ac(e) {
  let t, n;
  return (r) => (o) => {
    t = o, n && clearTimeout(n), n = setTimeout(() => {
      r(t);
    }, e);
  };
}
function Zd(e, t) {
  return e === t;
}
function je(e = Zd) {
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
  return (t) => Jd(t, e);
}
function rn(e) {
  return (t) => () => {
    t(e);
  };
}
function q(e, ...t) {
  const n = ex(...t);
  return (r, o) => {
    switch (r) {
      case Or:
        Ka(e);
        return;
      case Dn:
        return Ie(e, n(o));
    }
  };
}
function sn(e, t) {
  return (n) => (r) => {
    n(t = e(t, r));
  };
}
function wr(e) {
  return (t) => (n) => {
    e > 0 ? e-- : t(n);
  };
}
function Sn(e) {
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
function ex(...e) {
  return (t) => e.reduceRight(Z0, t);
}
function tx(e) {
  let t, n;
  const r = () => t == null ? void 0 : t();
  return function(o, i) {
    switch (o) {
      case Dn:
        return i ? n === i ? void 0 : (r(), n = i, t = Ie(e, i), t) : (r(), Rr);
      case Or:
        r(), n = null;
        return;
    }
  };
}
function Q(e) {
  let t = e;
  const n = ve();
  return (r, o) => {
    switch (r) {
      case Ki:
        t = o;
        break;
      case Dn: {
        o(t);
        break;
      }
      case Xd:
        return t;
    }
    return n(r, o);
  };
}
function ft(e, t) {
  return Xi(Q(t), (n) => ie(e, n));
}
function ve() {
  const e = [];
  return (t, n) => {
    switch (t) {
      case Ki:
        e.slice().forEach((r) => {
          r(n);
        });
        return;
      case Or:
        e.splice(0, e.length);
        return;
      case Dn:
        return e.push(n), () => {
          const r = e.indexOf(n);
          r > -1 && e.splice(r, 1);
        };
    }
  };
}
function Mt(e) {
  return Xi(ve(), (t) => ie(e, t));
}
function Ee(e, t = [], { singleton: n } = { singleton: !0 }) {
  return {
    constructor: e,
    dependencies: t,
    id: nx(),
    singleton: n
  };
}
const nx = () => Symbol();
function rx(e) {
  const t = /* @__PURE__ */ new Map(), n = ({ constructor: r, dependencies: o, id: i, singleton: s }) => {
    if (s && t.has(i))
      return t.get(i);
    const a = r(o.map((c) => n(c)));
    return s && t.set(i, a), a;
  };
  return n(e);
}
function rt(...e) {
  const t = ve(), n = new Array(e.length);
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
        Ka(t);
        return;
      }
      case Dn:
        return r === o && s(n), Ie(t, s);
    }
  };
}
function le(e, t = Zd) {
  return q(e, je(t));
}
function Dc(...e) {
  return function(t, n) {
    switch (t) {
      case Or:
        return;
      case Dn:
        return Q0(...e.map((r) => Ie(r, n)));
    }
  };
}
var Nt = /* @__PURE__ */ ((e) => (e[e.DEBUG = 0] = "DEBUG", e[e.INFO = 1] = "INFO", e[e.WARN = 2] = "WARN", e[e.ERROR = 3] = "ERROR", e))(Nt || {});
const ox = {
  0: "debug",
  3: "error",
  1: "log",
  2: "warn"
}, ix = () => typeof globalThis > "u" ? window : globalThis, _n = Ee(
  () => {
    const e = Q(
      3
      /* ERROR */
    );
    return {
      log: Q((t, n, r = 1) => {
        var o;
        const i = (o = ix().VIRTUOSO_LOG_LEVEL) != null ? o : dt(e);
        r >= i && console[ox[r]](
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
function Jn(e, t, n) {
  return Xa(e, t, n).callbackRef;
}
function Xa(e, t, n) {
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
function sx(e, t, n, r, o, i, s, a, c) {
  const u = $.useCallback(
    (f) => {
      const d = ax(f.children, t, a ? "offsetWidth" : "offsetHeight", o);
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
        a ? _c("column-gap", getComputedStyle(f).columnGap, o) : _c("row-gap", getComputedStyle(f).rowGap, o)
      ), d !== null && e(d);
    },
    [e, t, o, i, s, r]
  );
  return Xa(u, n, c);
}
function ax(e, t, n, r) {
  const o = e.length;
  if (o === 0)
    return null;
  const i = [];
  for (let s = 0; s < o; s++) {
    const a = e.item(s);
    if (a.dataset.index === void 0)
      continue;
    const c = parseInt(a.dataset.index), u = parseFloat(a.dataset.knownSize), f = t(a, n);
    if (f === 0 && r("Zero-sized element, this should not happen", { child: a }, Nt.ERROR), f === u)
      continue;
    const d = i[i.length - 1];
    i.length === 0 || d.size !== f || d.endIndex !== c - 1 ? i.push({ endIndex: c, size: f, startIndex: c }) : i[i.length - 1].endIndex++;
  }
  return i;
}
function _c(e, t, n) {
  return t !== "normal" && !(t != null && t.endsWith("px")) && n(`${e} was not resolved to pixel value correctly`, t, Nt.WARN), t === "normal" ? 0 : parseInt(t ?? "0", 10);
}
function ef(e, t, n) {
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
  ), { callbackRef: i, ref: s } = Xa(o, !0, n), a = $.useCallback(() => {
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
const yt = Ee(
  () => {
    const e = ve(), t = ve(), n = Q(0), r = ve(), o = Q(0), i = ve(), s = ve(), a = Q(0), c = Q(0), u = Q(0), f = Q(0), d = ve(), h = ve(), g = Q(!1), v = Q(!1), p = Q(!1);
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
function tf(e, t) {
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
function Be(e) {
  return e === io;
}
function so(e, t) {
  if (!Be(e))
    return t === e.k ? e.v : t < e.k ? so(e.l, t) : so(e.r, t);
}
function Xt(e, t, n = "k") {
  if (Be(e))
    return [-1 / 0, void 0];
  if (Number(e[n]) === t)
    return [e.k, e.v];
  if (Number(e[n]) < t) {
    const r = Xt(e.r, t, n);
    return r[0] === -1 / 0 ? [e.k, e.v] : r;
  }
  return Xt(e.l, t, n);
}
function Pt(e, t, n) {
  return Be(e) ? of(t, n, 1) : t === e.k ? nt(e, { k: t, v: n }) : t < e.k ? Bc(nt(e, { l: Pt(e.l, t, n) })) : Bc(nt(e, { r: Pt(e.r, t, n) }));
}
function pr() {
  return io;
}
function Ji(e, t, n) {
  if (Be(e))
    return [];
  const r = Xt(e, t)[0];
  return lx(Js(e, r, n));
}
function Xs(e, t) {
  if (Be(e)) return io;
  const { k: n, l: r, r: o } = e;
  if (t === n) {
    if (Be(r))
      return o;
    if (Be(o))
      return r;
    {
      const [i, s] = rf(r);
      return ei(nt(e, { k: i, l: nf(r), v: s }));
    }
  } else return t < n ? ei(nt(e, { l: Xs(r, t) })) : ei(nt(e, { r: Xs(o, t) }));
}
function Hn(e) {
  return Be(e) ? [] : [...Hn(e.l), { k: e.k, v: e.v }, ...Hn(e.r)];
}
function Js(e, t, n) {
  if (Be(e))
    return [];
  const { k: r, l: o, r: i, v: s } = e;
  let a = [];
  return r > t && (a = a.concat(Js(o, t, n))), r >= t && r <= n && a.push({ k: r, v: s }), r <= n && (a = a.concat(Js(i, t, n))), a;
}
function ei(e) {
  const { l: t, lvl: n, r } = e;
  if (r.lvl >= n - 1 && t.lvl >= n - 1)
    return e;
  if (n > r.lvl + 1) {
    if (Ts(t))
      return sf(nt(e, { lvl: n - 1 }));
    if (!Be(t) && !Be(t.r))
      return nt(t.r, {
        l: nt(t, { r: t.r.l }),
        lvl: n,
        r: nt(e, {
          l: t.r.r,
          lvl: n - 1
        })
      });
    throw new Error("Unexpected empty nodes");
  } else {
    if (Ts(e))
      return Qs(nt(e, { lvl: n - 1 }));
    if (!Be(r) && !Be(r.l)) {
      const o = r.l, i = Ts(o) ? r.lvl - 1 : r.lvl;
      return nt(o, {
        l: nt(e, {
          lvl: n - 1,
          r: o.l
        }),
        lvl: o.lvl + 1,
        r: Qs(nt(r, { l: o.r, lvl: i }))
      });
    } else
      throw new Error("Unexpected empty nodes");
  }
}
function nt(e, t) {
  return of(
    t.k !== void 0 ? t.k : e.k,
    t.v !== void 0 ? t.v : e.v,
    t.lvl !== void 0 ? t.lvl : e.lvl,
    t.l !== void 0 ? t.l : e.l,
    t.r !== void 0 ? t.r : e.r
  );
}
function nf(e) {
  return Be(e.r) ? e.l : ei(nt(e, { r: nf(e.r) }));
}
function Ts(e) {
  return Be(e) || e.lvl > e.r.lvl;
}
function rf(e) {
  return Be(e.r) ? [e.k, e.v] : rf(e.r);
}
function of(e, t, n, r = io, o = io) {
  return { k: e, l: r, lvl: n, r: o, v: t };
}
function Bc(e) {
  return Qs(sf(e));
}
function sf(e) {
  const { l: t } = e;
  return !Be(t) && t.lvl === e.lvl ? nt(t, { r: nt(e, { l: t.r }) }) : e;
}
function Qs(e) {
  const { lvl: t, r: n } = e;
  return !Be(n) && !Be(n.r) && n.lvl === t && n.r.lvl === t ? nt(n, { l: nt(e, { r: n.l }), lvl: t + 1 }) : e;
}
function lx(e) {
  return tf(e, ({ k: t, v: n }) => ({ index: t, value: n }));
}
function af(e, t) {
  return !!(e && e.startIndex === t.startIndex && e.endIndex === t.endIndex);
}
function ao(e, t) {
  return !!(e && e[0] === t[0] && e[1] === t[1]);
}
const Ja = Ee(
  () => ({ recalcInProgress: Q(!1) }),
  [],
  { singleton: !0 }
);
function lf(e, t, n) {
  return e[gi(e, t, n)];
}
function gi(e, t, n, r = 0) {
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
function cx(e, t, n, r) {
  const o = gi(e, t, r), i = gi(e, n, r, o);
  return e.slice(o, i + 1);
}
function In(e, t) {
  return Math.round(e.getBoundingClientRect()[t]);
}
function Qi(e) {
  return !Be(e.groupOffsetTree);
}
function Qa({ index: e }, t) {
  return t === e ? 0 : t < e ? -1 : 1;
}
function ux() {
  return {
    groupIndices: [],
    groupOffsetTree: pr(),
    lastIndex: 0,
    lastOffset: 0,
    lastSize: 0,
    offsetTree: [],
    sizeTree: pr()
  };
}
function dx(e, t) {
  let n = Be(e) ? 0 : 1 / 0;
  for (const r of t) {
    const { endIndex: o, size: i, startIndex: s } = r;
    if (n = Math.min(n, s), Be(e)) {
      e = Pt(e, 0, i);
      continue;
    }
    const a = Ji(e, s - 1, o + 1);
    if (a.some(vx(r)))
      continue;
    let c = !1, u = !1;
    for (const { end: f, start: d, value: h } of a)
      c ? (o >= d || i === h) && (e = Xs(e, d)) : (u = h !== i, c = !0), f > o && o >= d && h !== i && (e = Pt(e, o + 1, h));
    u && (e = Pt(e, s, i));
  }
  return [e, n];
}
function fx(e) {
  return typeof e.groupIndex < "u";
}
function px({ offset: e }, t) {
  return t === e ? 0 : t < e ? -1 : 1;
}
function lo(e, t, n) {
  if (t.length === 0)
    return 0;
  const { index: r, offset: o, size: i } = lf(t, e, Qa), s = e - r, a = i * s + (s - 1) * n + o;
  return a > 0 ? a + n : a;
}
function cf(e, t) {
  if (!Qi(t))
    return e;
  let n = 0;
  for (; t.groupIndices[n] <= e + n; )
    n++;
  return e + n;
}
function uf(e, t, n) {
  if (fx(e))
    return t.groupIndices[e.groupIndex] + 1;
  {
    const r = e.index === "LAST" ? n : e.index;
    let o = cf(r, t);
    return o = Math.max(0, o, Math.min(n, o)), o;
  }
}
function mx(e, t, n, r = 0) {
  return r > 0 && (t = Math.max(t, lf(e, r, Qa).offset)), tf(cx(e, t, n, px), yx);
}
function hx(e, [t, n, r, o]) {
  t.length > 0 && r("received item sizes", t, Nt.DEBUG);
  const i = e.sizeTree;
  let s = i, a = 0;
  if (n.length > 0 && Be(i) && t.length === 2) {
    const h = t[0].size, g = t[1].size;
    s = n.reduce((v, p) => Pt(Pt(v, p, h), p + 1, g), s);
  } else
    [s, a] = dx(s, t);
  if (s === i)
    return e;
  const { lastIndex: c, lastOffset: u, lastSize: f, offsetTree: d } = Zs(e.offsetTree, a, s, o);
  return {
    groupIndices: n,
    groupOffsetTree: n.reduce((h, g) => Pt(h, g, lo(g, d, o)), pr()),
    lastIndex: c,
    lastOffset: u,
    lastSize: f,
    offsetTree: d,
    sizeTree: s
  };
}
function gx(e) {
  return Hn(e).map(({ k: t, v: n }, r, o) => {
    const i = o[r + 1];
    return { endIndex: i ? i.k - 1 : 1 / 0, size: n, startIndex: t };
  });
}
function Lc(e, t) {
  let n = 0, r = 0;
  for (; n < e; )
    n += t[r + 1] - t[r] - 1, r++;
  return r - (n === e ? 0 : 1);
}
function Zs(e, t, n, r) {
  let o = e, i = 0, s = 0, a = 0, c = 0;
  if (t !== 0) {
    c = gi(o, t - 1, Qa), a = o[c].offset;
    const u = Xt(n, t - 1);
    i = u[0], s = u[1], o.length && o[c].size === Xt(n, t)[1] && (c -= 1), o = o.slice(0, c + 1);
  } else
    o = [];
  for (const { start: u, value: f } of Ji(n, t, 1 / 0)) {
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
function yx(e) {
  return { index: e.index, value: e };
}
function vx(e) {
  const { endIndex: t, size: n, startIndex: r } = e;
  return (o) => o.start === r && (o.end === t || o.end === 1 / 0) && o.value === n;
}
const bx = {
  offsetHeight: "height",
  offsetWidth: "width"
}, pn = Ee(
  ([{ log: e }, { recalcInProgress: t }]) => {
    const n = ve(), r = ve(), o = ft(r, 0), i = ve(), s = ve(), a = Q(0), c = Q([]), u = Q(void 0), f = Q(void 0), d = Q((x, w) => In(x, bx[w])), h = Q(void 0), g = Q(0), v = ux(), p = ft(
      q(n, me(c, e, g), sn(hx, v), je()),
      v
    ), y = ft(
      q(
        c,
        je(),
        sn((x, w) => ({ current: w, prev: x.current }), {
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
          const P = x.reduce((k, m, R) => Pt(k, m, lo(m, w.offsetTree, C) || R), pr());
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
    const b = ft(
      q(
        u,
        re((x) => x === void 0)
      ),
      !0
    );
    ie(
      q(
        f,
        ae((x) => x !== void 0 && Be(dt(p).sizeTree)),
        re((x) => [{ endIndex: 0, size: x, startIndex: 0 }])
      ),
      n
    );
    const T = Mt(
      q(
        n,
        me(p),
        sn(
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
        sn(
          (x, w) => ({ diff: x.prev - w, prev: w }),
          { diff: 0, prev: 0 }
        ),
        re((x) => x.diff)
      ),
      (x) => {
        const { groupIndices: w } = dt(p);
        if (x > 0)
          pe(t, !0), pe(i, x + Lc(x, w));
        else if (x < 0) {
          const C = dt(y);
          C.length > 0 && (x -= Lc(-x, C)), pe(s, x);
        }
      }
    ), Ie(q(a, me(e)), ([x, w]) => {
      x < 0 && w(
        "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
        { firstItemIndex: a },
        Nt.ERROR
      );
    });
    const E = Mt(i);
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
            const B = Hn(w.sizeTree);
            return R !== x && B.shift(), B.reduce(
              (A, { k: L, v: M }) => {
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
                  prevSize: M,
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
          return Hn(w.sizeTree).reduce(
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
    const S = Mt(
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
            if (Be(w.sizeTree))
              return w;
            let P = pr();
            const k = dt(y);
            let m = 0, R = 0, _ = 0;
            for (; m < -x; ) {
              _ = k[R];
              const B = k[R + 1] - _ - 1;
              R++, m += B + 1;
            }
            if (P = Hn(w.sizeTree).reduce((B, { k: A, v: L }) => Pt(B, Math.max(0, A + x), L), P), m !== -x) {
              const B = so(w.sizeTree, _);
              P = Pt(P, 0, B);
              const A = Xt(w.sizeTree, -x + 1)[1];
              P = Pt(P, 1, A);
            }
            return {
              ...w,
              sizeTree: P,
              ...Zs(w.offsetTree, 0, P, C)
            };
          } else {
            const P = Hn(w.sizeTree).reduce((k, { k: m, v: R }) => Pt(k, Math.max(0, m + x), R), pr());
            return {
              ...w,
              sizeTree: P,
              ...Zs(w.offsetTree, 0, P, C)
            };
          }
        })
      ),
      p
    ), {
      beforeUnshiftWith: E,
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
      shiftWithOffset: S,
      sizeRanges: n,
      // output
      sizes: p,
      statefulTotalCount: o,
      totalCount: r,
      trackItemSizes: b,
      unshiftWith: i
    };
  },
  Fe(_n, Ja),
  { singleton: !0 }
);
function xx(e) {
  return e.reduce(
    (t, n) => (t.groupIndices.push(t.totalCount), t.totalCount += n + 1, t),
    {
      groupIndices: [],
      totalCount: 0
    }
  );
}
const df = Ee(
  ([{ groupIndices: e, sizes: t, totalCount: n }, { headerHeight: r, scrollTop: o }]) => {
    const i = ve(), s = ve(), a = Mt(q(i, re(xx)));
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
        rt(o, t, r),
        ae(([c, u]) => Qi(u)),
        re(([c, u, f]) => Xt(u.groupOffsetTree, Math.max(c - f, 0), "v")[0]),
        je(),
        re((c) => [c])
      ),
      s
    ), { groupCounts: i, topItemsIndexes: s };
  },
  Fe(pn, yt)
), Bn = Ee(
  ([{ log: e }]) => {
    const t = Q(!1), n = Mt(
      q(
        t,
        ae((r) => r),
        je()
      )
    );
    return Ie(t, (r) => {
      r && dt(e)("props updated", {}, Nt.DEBUG);
    }), { didMount: n, propsReady: t };
  },
  Fe(_n),
  { singleton: !0 }
), Tx = typeof document < "u" && "scrollBehavior" in document.documentElement.style;
function ff(e) {
  const t = typeof e == "number" ? { index: e } : e;
  return t.align || (t.align = "start"), (!t.behavior || !Tx) && (t.behavior = "auto"), t.offset || (t.offset = 0), t;
}
const wo = Ee(
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
    const g = ve(), v = ve(), p = Q(0);
    let y = null, b = null, T = null;
    function E() {
      y && (y(), y = null), T && (T(), T = null), b && (clearTimeout(b), b = null), pe(c, !1);
    }
    return ie(
      q(
        g,
        me(n, d, r, p, a, s, h),
        me(e, i, o),
        re(
          ([
            [S, x, w, C, P, k, m, R],
            _,
            B,
            A
          ]) => {
            const L = ff(S), { align: M, behavior: U, offset: Y } = L, G = C - 1, N = uf(L, x, G);
            let j = lo(N, x.offsetTree, _) + k;
            M === "end" ? (j += B + Xt(x.sizeTree, N)[1] - w + A, N === G && (j += m)) : M === "center" ? j += (B + Xt(x.sizeTree, N)[1] - w + A) / 2 : j -= P, Y && (j += Y);
            const V = (W) => {
              E(), W ? (R("retrying to scroll to", { location: S }, Nt.DEBUG), pe(g, S)) : (pe(v, !0), R("list did not change, scroll successful", {}, Nt.DEBUG));
            };
            if (E(), U === "smooth") {
              let W = !1;
              T = Ie(t, (J) => {
                W = W || J;
              }), y = fn(f, () => {
                V(W);
              });
            } else
              y = fn(q(t, wx(150)), V);
            return b = setTimeout(() => {
              E();
            }, 1200), pe(c, !0), R("scrolling from index to", { behavior: U, index: N, top: j }, Nt.DEBUG), { behavior: U, top: j };
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
  Fe(pn, yt, _n),
  { singleton: !0 }
);
function wx(e) {
  return (t) => {
    const n = setTimeout(() => {
      t(!1);
    }, e);
    return (r) => {
      r && (t(!0), clearTimeout(n));
    };
  };
}
function Za(e, t) {
  e == 0 ? t() : requestAnimationFrame(() => {
    Za(e - 1, t);
  });
}
function el(e, t) {
  const n = t - 1;
  return typeof e == "number" ? e : e.index === "LAST" ? n : e.index;
}
const So = Ee(
  ([{ defaultItemSize: e, listRefresh: t, sizes: n }, { scrollTop: r }, { scrollTargetReached: o, scrollToIndex: i }, { didMount: s }]) => {
    const a = Q(!0), c = Q(0), u = Q(!0);
    return ie(
      q(
        s,
        me(c),
        ae(([f, d]) => !!d),
        rn(!1)
      ),
      a
    ), ie(
      q(
        s,
        me(c),
        ae(([f, d]) => !!d),
        rn(!1)
      ),
      u
    ), Ie(
      q(
        rt(t, s),
        me(a, n, e, u),
        ae(([[, f], d, { sizeTree: h }, g, v]) => f && (!Be(h) || Ga(g)) && !d && !v),
        me(c)
      ),
      ([, f]) => {
        fn(o, () => {
          pe(u, !0);
        }), Za(4, () => {
          fn(r, () => {
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
  Fe(pn, yt, wo, Bn),
  { singleton: !0 }
);
function pf(e, t) {
  return Math.abs(e - t) < 1.01;
}
const co = "up", Ur = "down", Sx = "none", Ex = {
  atBottom: !1,
  notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
  state: {
    offsetBottom: 0,
    scrollHeight: 0,
    scrollTop: 0,
    viewportHeight: 0
  }
}, Cx = 0, Eo = Ee(([{ footerHeight: e, headerHeight: t, scrollBy: n, scrollContainerState: r, scrollTop: o, viewportHeight: i }]) => {
  const s = Q(!1), a = Q(!0), c = ve(), u = ve(), f = Q(4), d = Q(Cx), h = ft(
    q(
      Dc(q(le(o), wr(1), rn(!0)), q(le(o), wr(1), rn(!1), Ac(100))),
      je()
    ),
    !1
  ), g = ft(
    q(Dc(q(n, rn(!0)), q(n, rn(!1), Ac(200))), je()),
    !1
  );
  ie(
    q(
      rt(le(o), le(d)),
      re(([T, E]) => T <= E),
      je()
    ),
    a
  ), ie(q(a, Sn(50)), u);
  const v = Mt(
    q(
      rt(r, le(i), le(t), le(e), le(f)),
      sn((T, [{ scrollHeight: E, scrollTop: S }, x, w, C, P]) => {
        const k = S + x - E > -P, m = {
          scrollHeight: E,
          scrollTop: S,
          viewportHeight: x
        };
        if (k) {
          let _, B;
          return S > T.state.scrollTop ? (_ = "SCROLLED_DOWN", B = T.state.scrollTop - S) : (_ = "SIZE_DECREASED", B = T.state.scrollTop - S || T.scrollTopDelta), {
            atBottom: !0,
            atBottomBecause: _,
            scrollTopDelta: B,
            state: m
          };
        }
        let R;
        return m.scrollHeight > T.state.scrollHeight ? R = "SIZE_INCREASED" : x < T.state.viewportHeight ? R = "VIEWPORT_HEIGHT_DECREASING" : S < T.state.scrollTop ? R = "SCROLLING_UPWARDS" : R = "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM", {
          atBottom: !1,
          notAtBottomBecause: R,
          state: m
        };
      }, Ex),
      je((T, E) => T && T.atBottom === E.atBottom)
    )
  ), p = ft(
    q(
      r,
      sn(
        (T, { scrollHeight: E, scrollTop: S, viewportHeight: x }) => {
          if (pf(T.scrollHeight, E))
            return {
              changed: !1,
              jump: 0,
              scrollHeight: E,
              scrollTop: S
            };
          {
            const w = E - (S + x) < 1;
            return T.scrollTop !== S && w ? {
              changed: !0,
              jump: T.scrollTop - S,
              scrollHeight: E,
              scrollTop: S
            } : {
              changed: !0,
              jump: 0,
              scrollHeight: E,
              scrollTop: S
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
  ), ie(q(s, Sn(50)), c);
  const y = Q(Ur);
  ie(
    q(
      r,
      re(({ scrollTop: T }) => T),
      je(),
      sn(
        (T, E) => dt(g) ? { direction: T.direction, prevScrollTop: E } : { direction: E < T.prevScrollTop ? co : Ur, prevScrollTop: E },
        { direction: Ur, prevScrollTop: 0 }
      ),
      re((T) => T.direction)
    ),
    y
  ), ie(q(r, Sn(50), rn(Sx)), y);
  const b = Q(0);
  return ie(
    q(
      h,
      ae((T) => !T),
      rn(0)
    ),
    b
  ), ie(
    q(
      o,
      Sn(100),
      me(h),
      ae(([T, E]) => !!E),
      sn(([T, E], [S]) => [E, S], [0, 0]),
      re(([T, E]) => E - T)
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
}, Fe(yt)), yi = "top", vi = "bottom", jc = "none";
function Fc(e, t, n) {
  return typeof e == "number" ? n === co && t === yi || n === Ur && t === vi ? e : 0 : n === co ? t === yi ? e.main : e.reverse : t === vi ? e.main : e.reverse;
}
function zc(e, t) {
  var n;
  return typeof e == "number" ? e : (n = e[t]) != null ? n : 0;
}
const tl = Ee(
  ([{ deviation: e, fixedHeaderHeight: t, headerHeight: n, scrollTop: r, viewportHeight: o }]) => {
    const i = ve(), s = Q(0), a = Q(0), c = Q(0), u = ft(
      q(
        rt(
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
            E
          ]) => {
            const S = f - T, x = y + b, w = Math.max(h - S, 0);
            let C = jc;
            const P = zc(E, yi), k = zc(E, vi);
            return g -= T, g += h + b, v += h + b, v -= T, g > f + x - P && (C = co), v < f - w + d + k && (C = Ur), C !== jc ? [
              Math.max(S - h - Fc(p, yi, C) - P, 0),
              S - w - b + d + Fc(p, vi, C) + k
            ] : null;
          }
        ),
        ae((f) => f != null),
        je(ao)
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
  Fe(yt),
  { singleton: !0 }
);
function Ox(e, t, n) {
  if (Qi(t)) {
    const r = cf(e, t);
    return [
      { index: Xt(t.groupOffsetTree, r)[0], offset: 0, size: 0 },
      { data: n == null ? void 0 : n[0], index: r, offset: 0, size: 0 }
    ];
  }
  return [{ data: n == null ? void 0 : n[0], index: e, offset: 0, size: 0 }];
}
const ws = {
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
function ti(e, t, n, r, o, i) {
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
    items: Vc(e, o, i),
    offsetBottom: v,
    offsetTop: u,
    top: g,
    topItems: Vc(t, o, i),
    topListHeight: t.reduce((p, y) => y.size + p, 0),
    totalCount: n
  };
}
function mf(e, t, n, r, o, i) {
  let s = 0;
  if (n.groupIndices.length > 0)
    for (const f of n.groupIndices) {
      if (f - s >= e)
        break;
      s++;
    }
  const a = e + s, c = el(t, a), u = Array.from({ length: a }).map((f, d) => ({
    data: i[d + c],
    index: d + c,
    offset: 0,
    size: 0
  }));
  return ti(u, [], a, o, n, r);
}
function Vc(e, t, n) {
  if (e.length === 0)
    return [];
  if (!Qi(t))
    return e.map((u) => ({ ...u, index: u.index + n, originalIndex: u.index }));
  const r = e[0].index, o = e[e.length - 1].index, i = [], s = Ji(t.groupOffsetTree, r, o);
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
const Qn = Ee(
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
    const p = Q([]), y = Q(0), b = ve();
    ie(i.topItemsIndexes, p);
    const T = ft(
      q(
        rt(
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
            const M = k, { offsetTree: U, sizeTree: Y } = M, G = dt(y);
            if (P === 0)
              return { ...ws, totalCount: P };
            if (w === 0 && C === 0)
              return G === 0 ? { ...ws, totalCount: P } : mf(G, m, k, B, A, L || []);
            if (Be(Y))
              return G > 0 ? null : ti(
                Ox(el(m, P), M, L),
                [],
                P,
                A,
                M,
                B
              );
            const N = [];
            if (_.length > 0) {
              const te = _[0], K = _[_.length - 1];
              let Z = 0;
              for (const D of Ji(Y, te, K)) {
                const X = D.value, H = Math.max(D.start, te), ee = Math.min(D.end, K);
                for (let F = H; F <= ee; F++)
                  N.push({ data: L == null ? void 0 : L[F], index: F, offset: Z, size: X }), Z += X;
              }
            }
            if (!R)
              return ti([], N, P, A, M, B);
            const j = _.length > 0 ? _[_.length - 1] + 1 : 0, V = mx(U, w, C, j);
            if (V.length === 0)
              return null;
            const W = P - 1, J = Xi([], (te) => {
              for (const K of V) {
                const Z = K.value;
                let D = Z.offset, X = K.start;
                const H = Z.size;
                if (Z.offset < w) {
                  X += Math.floor((w - Z.offset + A) / (H + A));
                  const F = X - K.start;
                  D += F * H + F * A;
                }
                X < j && (D += (j - X) * H, X = j);
                const ee = Math.min(K.end, W);
                for (let F = X; F <= ee && !(D >= C); F++)
                  te.push({ data: L == null ? void 0 : L[F], index: F, offset: D, size: H }), D += H + A;
              }
            });
            return ti(J, N, P, A, M, B);
          }
        ),
        //@ts-expect-error filter needs to be fixed
        ae((w) => w !== null),
        je()
      ),
      ws
    );
    ie(
      q(
        e,
        ae(Ga),
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
    const E = Mt(
      q(
        T,
        ae(({ items: w }) => w.length > 0),
        me(o, e),
        ae(([{ items: w }, C]) => w[w.length - 1].originalIndex === C - 1),
        re(([, w, C]) => [w - 1, C]),
        je(ao),
        re(([w]) => w)
      )
    ), S = Mt(
      q(
        T,
        Sn(200),
        ae(({ items: w, topItems: C }) => w.length > 0 && w[0].originalIndex === C.length),
        re(({ items: w }) => w[0].index),
        je()
      )
    ), x = Mt(
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
        je(af)
      )
    );
    return { endReached: E, initialItemCount: y, itemsRendered: b, listState: T, rangeChanged: x, startReached: S, topItemsIndexes: p, ...h };
  },
  Fe(
    pn,
    df,
    tl,
    So,
    wo,
    Eo,
    Bn,
    Ja
  ),
  { singleton: !0 }
), hf = Ee(
  ([{ fixedFooterHeight: e, fixedHeaderHeight: t, footerHeight: n, headerHeight: r }, { listState: o }]) => {
    const i = ve(), s = ft(
      q(
        rt(n, e, r, t, o),
        re(([a, c, u, f, d]) => a + c + u + f + d.offsetBottom + d.bottom)
      ),
      0
    );
    return ie(le(s), i), { totalListHeight: s, totalListHeightChanged: i };
  },
  Fe(yt, Qn),
  { singleton: !0 }
), Rx = Ee(
  ([{ viewportHeight: e }, { totalListHeight: t }]) => {
    const n = Q(!1), r = ft(
      q(
        rt(n, e, t),
        ae(([o]) => o),
        re(([, o, i]) => Math.max(0, o - i)),
        Sn(0),
        je()
      ),
      0
    );
    return { alignToBottom: n, paddingTopAddition: r };
  },
  Fe(yt, hf),
  { singleton: !0 }
);
function Hc(e) {
  return e ? e === "smooth" ? "smooth" : "auto" : !1;
}
const Px = (e, t) => typeof e == "function" ? Hc(e(t)) : t && Hc(e), kx = Ee(
  ([
    { listRefresh: e, totalCount: t },
    { atBottomState: n, isAtBottom: r },
    { scrollToIndex: o },
    { scrolledToInitialItem: i },
    { didMount: s, propsReady: a },
    { log: c },
    { scrollingInProgress: u }
  ]) => {
    const f = Q(!1), d = ve();
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
        rt(q(le(t), wr(1)), s),
        me(le(f), r, i, u),
        re(([[p, y], b, T, E, S]) => {
          let x = y && E, w = "auto";
          return x && (w = Px(b, T || S), x = x && !!w), { followOutputBehavior: w, shouldFollow: x, totalCount: p };
        }),
        ae(({ shouldFollow: p }) => p)
      ),
      ({ followOutputBehavior: p, totalCount: y }) => {
        h && (h(), h = null), h = fn(e, () => {
          dt(c)("following output to ", { totalCount: y }, Nt.DEBUG), g(p), h = null;
        });
      }
    );
    function v(p) {
      const y = fn(n, (b) => {
        p && !b.atBottom && b.notAtBottomBecause === "SIZE_INCREASED" && !h && (dt(c)("scrolling to bottom due to increased size", {}, Nt.DEBUG), g("auto"));
      });
      setTimeout(y, 100);
    }
    return Ie(
      q(
        rt(le(f), t, a),
        ae(([p, , y]) => p && y),
        sn(
          ({ value: p }, [, y]) => ({ refreshed: p === y, value: y }),
          { refreshed: !1, value: 0 }
        ),
        ae(({ refreshed: p }) => p),
        me(f, t)
      ),
      ([, p]) => {
        dt(i) && v(p !== !1);
      }
    ), Ie(d, () => {
      v(dt(f) !== !1);
    }), Ie(rt(le(f), n), ([p, y]) => {
      p && !y.atBottom && y.notAtBottomBecause === "VIEWPORT_HEIGHT_DECREASING" && g("auto");
    }), { autoscrollToBottom: d, followOutput: f };
  },
  Fe(pn, Eo, wo, So, Bn, _n, yt)
), Ix = Ee(
  ([{ data: e, firstItemIndex: t, gap: n, sizes: r }, { initialTopMostItemIndex: o }, { initialItemCount: i, listState: s }, { didMount: a }]) => (ie(
    q(
      a,
      me(i),
      ae(([, c]) => c !== 0),
      me(o, r, t, n, e),
      re(([[, c], u, f, d, h, g = []]) => mf(c, u, f, d, h, g))
    ),
    s
  ), {}),
  Fe(pn, So, Qn, Bn),
  { singleton: !0 }
), Mx = Ee(
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
        fn(
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
  Fe(Bn, yt, Qn),
  { singleton: !0 }
), Nx = ({
  itemBottom: e,
  itemTop: t,
  locationParams: { align: n, behavior: r, ...o },
  viewportBottom: i,
  viewportTop: s
}) => t < s ? { ...o, align: n ?? "start", behavior: r } : e > i ? { ...o, align: n ?? "end", behavior: r } : null, $x = Ee(
  ([
    { gap: e, sizes: t, totalCount: n },
    { fixedFooterHeight: r, fixedHeaderHeight: o, headerHeight: i, scrollingInProgress: s, scrollTop: a, viewportHeight: c },
    { scrollToIndex: u }
  ]) => {
    const f = ve();
    return ie(
      q(
        f,
        me(t, c, n, i, o, r, a),
        me(e),
        re(([[d, h, g, v, p, y, b, T], E]) => {
          const { align: S, behavior: x, calculateViewLocation: w = Nx, done: C, ...P } = d, k = uf(d, h, v - 1), m = lo(k, h.offsetTree, E) + p + y, R = m + Xt(h.sizeTree, k)[1], _ = T + y, B = T + g - b, A = w({
            itemBottom: R,
            itemTop: m,
            locationParams: { align: S, behavior: x, ...P },
            viewportBottom: B,
            viewportTop: _
          });
          return A ? C && fn(
            q(
              s,
              ae((L) => !L),
              // skips the initial publish of false, and the cleanup call.
              // but if scrollingInProgress is true, we skip the initial publish.
              wr(dt(s) ? 1 : 2)
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
  Fe(pn, yt, wo, Qn, _n),
  { singleton: !0 }
), gf = Ee(
  ([{ scrollVelocity: e }]) => {
    const t = Q(!1), n = ve(), r = Q(!1);
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
        je()
      ),
      t
    ), Ie(
      q(rt(t, e, n), me(r)),
      ([[o, i, s], a]) => {
        o && a && a.change && a.change(i, s);
      }
    ), { isSeeking: t, scrollSeekConfiguration: r, scrollSeekRangeChanged: n, scrollVelocity: e };
  },
  Fe(Eo),
  { singleton: !0 }
), nl = Ee(([{ scrollContainerState: e, scrollTo: t }]) => {
  const n = ve(), r = ve(), o = ve(), i = Q(!1), s = Q(void 0);
  return ie(
    q(
      rt(n, r),
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
}, Fe(yt)), Ax = Ee(
  ([
    { sizeRanges: e, sizes: t },
    { headerHeight: n, scrollTop: r },
    { initialTopMostItemIndex: o },
    { didMount: i },
    { useWindowScroll: s, windowScrollContainerState: a, windowViewportRect: c }
  ]) => {
    const u = ve(), f = Q(void 0), d = Q(null), h = Q(null);
    return ie(a, d), ie(c, h), Ie(
      q(
        u,
        me(t, r, s, d, h, n)
      ),
      ([g, v, p, y, b, T, E]) => {
        const S = gx(v.sizeTree);
        y && b !== null && T !== null && (p = b.scrollTop - T.offsetTop), p -= E, g({ ranges: S, scrollTop: p });
      }
    ), ie(q(f, ae(Ga), re(Dx)), o), ie(
      q(
        i,
        me(f),
        ae(([, g]) => g !== void 0),
        je(),
        re(([, g]) => g.ranges)
      ),
      e
    ), {
      getState: u,
      restoreStateFrom: f
    };
  },
  Fe(pn, yt, So, Bn, nl)
);
function Dx(e) {
  return { align: "start", index: 0, offset: e.scrollTop };
}
const _x = Ee(([{ topItemsIndexes: e }]) => {
  const t = Q(0);
  return ie(
    q(
      t,
      ae((n) => n >= 0),
      re((n) => Array.from({ length: n }).map((r, o) => o))
    ),
    e
  ), { topItemCount: t };
}, Fe(Qn));
function yf(e) {
  let t = !1, n;
  return () => (t || (t = !0, n = e()), n);
}
const Bx = yf(() => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent)), Lx = Ee(
  ([
    { deviation: e, scrollBy: t, scrollingInProgress: n, scrollTop: r },
    { isAtBottom: o, isScrolling: i, lastJumpDueToItemResize: s, scrollDirection: a },
    { listState: c },
    { beforeUnshiftWith: u, gap: f, shiftWithOffset: d, sizes: h },
    { log: g },
    { recalcInProgress: v }
  ]) => {
    const p = Mt(
      q(
        c,
        me(s),
        sn(
          ([, b, T, E], [{ bottom: S, items: x, offsetBottom: w, totalCount: C }, P]) => {
            const k = S + w;
            let m = 0;
            return T === C && b.length > 0 && x.length > 0 && (x[0].originalIndex === 0 && b[0].originalIndex === 0 || (m = k - E, m !== 0 && (m += P))), [m, x, C, k];
          },
          [0, [], 0, 0]
        ),
        ae(([b]) => b !== 0),
        me(r, a, n, o, g, v),
        ae(([, b, T, E, , , S]) => !S && !E && b !== 0 && T === co),
        re(([[b], , , , , T]) => (T("Upward scrolling compensation", { amount: b }, Nt.DEBUG), b))
      )
    );
    function y(b) {
      b > 0 ? (pe(t, { behavior: "auto", top: -b }), pe(e, 0)) : (pe(e, 0), pe(t, { behavior: "auto", top: -b }));
    }
    return Ie(q(p, me(e, i)), ([b, T, E]) => {
      E && Bx() ? pe(e, T - b) : y(-b);
    }), Ie(
      q(
        rt(ft(i, !1), e, v),
        ae(([b, T, E]) => !b && !E && T !== 0),
        re(([b, T]) => T),
        Sn(1)
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
        re(([b, { groupIndices: T, lastSize: E, sizeTree: S }, x]) => {
          function w(C) {
            return C * (E + x);
          }
          if (T.length === 0)
            return w(b);
          {
            let C = 0;
            const P = so(S, 0);
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
  Fe(yt, Eo, Qn, pn, _n, Ja)
), jx = Ee(
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
  Fe(
    tl,
    Ix,
    Bn,
    gf,
    hf,
    Mx,
    Rx,
    nl,
    $x,
    _n
  )
), vf = Ee(
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
    { listState: T, topItemsIndexes: E, ...S },
    { scrollToIndex: x },
    w,
    { topItemCount: C },
    { groupCounts: P },
    k
  ]) => (ie(S.rangeChanged, k.scrollSeekRangeChanged), ie(
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
    topItemsIndexes: E,
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
    ...S,
    // the bag of IO from featureGroup1System
    ...k,
    ...p,
    sizes: c,
    ...y
  }),
  Fe(
    pn,
    So,
    yt,
    Ax,
    kx,
    Qn,
    wo,
    Lx,
    _x,
    df,
    jx
  )
);
function Fx(e, t) {
  const n = {}, r = {};
  let o = 0;
  const i = e.length;
  for (; o < i; )
    r[e[o]] = 1, o += 1;
  for (const s in t)
    Object.hasOwn(r, s) || (n[s] = t[s]);
  return n;
}
const Fo = typeof document < "u" ? $.useLayoutEffect : $.useEffect;
function bf(e, t, n) {
  const r = Object.keys(t.required || {}), o = Object.keys(t.optional || {}), i = Object.keys(t.methods || {}), s = Object.keys(t.events || {}), a = $.createContext({});
  function c(y, b) {
    y.propsReady && pe(y.propsReady, !1);
    for (const T of r) {
      const E = y[t.required[T]];
      pe(E, b[T]);
    }
    for (const T of o)
      if (T in b) {
        const E = y[t.optional[T]];
        pe(E, b[T]);
      }
    y.propsReady && pe(y.propsReady, !0);
  }
  function u(y) {
    return i.reduce((b, T) => (b[T] = (E) => {
      const S = y[t.methods[T]];
      pe(S, E);
    }, b), {});
  }
  function f(y) {
    return s.reduce((b, T) => (b[T] = tx(y[t.events[T]]), b), {});
  }
  const d = $.forwardRef((y, b) => {
    const { children: T, ...E } = y, [S] = $.useState(() => Xi(rx(e), (C) => {
      c(C, E);
    })), [x] = $.useState($c(f, S));
    Fo(() => {
      for (const C of s)
        C in E && Ie(x[C], E[C]);
      return () => {
        Object.values(x).map(Ka);
      };
    }, [E, x, S]), Fo(() => {
      c(S, E);
    }), $.useImperativeHandle(b, Nc(u(S)));
    const w = n;
    return /* @__PURE__ */ I(a.Provider, { value: S, children: n ? /* @__PURE__ */ I(w, { ...Fx([...r, ...o, ...s], E), children: T }) : T });
  }), h = (y) => $.useCallback(Qd(pe, $.useContext(a)[y]), [y]), g = (y) => {
    const b = $.useContext(a)[y], T = $.useCallback(
      (E) => Ie(b, E),
      [b]
    );
    return $.useSyncExternalStore(
      T,
      () => dt(b),
      () => dt(b)
    );
  }, v = (y) => {
    const b = $.useContext(a)[y], [T, E] = $.useState($c(dt, b));
    return Fo(
      () => Ie(b, (S) => {
        S !== T && E(Nc(S));
      }),
      [b, T]
    ), T;
  }, p = $.version.startsWith("18") ? g : v;
  return {
    Component: d,
    useEmitter: (y, b) => {
      const T = $.useContext(a)[y];
      Fo(() => Ie(T, b), [b, T]);
    },
    useEmitterValue: p,
    usePublisher: h
  };
}
const xf = $.createContext(void 0), Tf = $.createContext(void 0), wf = typeof document < "u" ? $.useLayoutEffect : $.useEffect;
function Ss(e) {
  return "self" in e;
}
function zx(e) {
  return "body" in e;
}
function Sf(e, t, n, r = Rr, o, i) {
  const s = $.useRef(null), a = $.useRef(null), c = $.useRef(null), u = $.useCallback(
    (h) => {
      let g, v, p;
      const y = h.target;
      if (zx(y) || Ss(y)) {
        const T = Ss(y) ? y : y.defaultView;
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
      h.suppressFlushSync ? b() : cr.flushSync(b), a.current !== null && (p === a.current || p <= 0 || p === g - v) && (a.current = null, t(!0), c.current && (clearTimeout(c.current), c.current = null));
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
    Ss(g) ? (y = Math.max(
      In(g.document.documentElement, i ? "width" : "height"),
      i ? g.document.documentElement.scrollWidth : g.document.documentElement.scrollHeight
    ), p = i ? g.innerWidth : g.innerHeight, b = i ? window.scrollX : window.scrollY) : (y = g[i ? "scrollWidth" : "scrollHeight"], p = In(g, i ? "width" : "height"), b = g[i ? "scrollLeft" : "scrollTop"]);
    const T = y - p;
    if (h.top = Math.ceil(Math.max(Math.min(T, h.top), 0)), pf(p, y) || h.top === b) {
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
const Es = "-webkit-sticky", Wc = "sticky", Ef = yf(() => {
  if (typeof document > "u")
    return Wc;
  const e = document.createElement("div");
  return e.style.position = Es, e.style.position === Es ? Es : Wc;
});
function rl(e) {
  return e;
}
const Vx = /* @__PURE__ */ Ee(() => {
  const e = Q((c) => `Item ${c}`), t = Q(null), n = Q((c) => `Group ${c}`), r = Q({}), o = Q(rl), i = Q("div"), s = Q(Rr), a = (c, u = null) => ft(
    q(
      r,
      re((f) => f[c]),
      je()
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
}), Hx = /* @__PURE__ */ Ee(
  ([e, t]) => ({ ...e, ...t }),
  Fe(vf, Vx)
), Wx = ({ height: e }) => /* @__PURE__ */ I("div", { style: { height: e } }), Ux = { overflowAnchor: "none", position: Ef(), zIndex: 1 }, Cf = { overflowAnchor: "none" }, Yx = { ...Cf, display: "inline-block", height: "100%" }, Uc = /* @__PURE__ */ $.memo(function({ showTopList: e = !1 }) {
  const t = ce("listState"), n = Lt("sizeRanges"), r = ce("useWindowScroll"), o = ce("customScrollParent"), i = Lt("windowScrollContainerState"), s = Lt("scrollContainerState"), a = o || r ? i : s, c = ce("itemContent"), u = ce("context"), f = ce("groupContent"), d = ce("trackItemSizes"), h = ce("itemSize"), g = ce("log"), v = Lt("gap"), p = ce("horizontalDirection"), { callbackRef: y } = sx(
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
  ol("deviation", (A) => {
    b !== A && T(A);
  });
  const E = ce("EmptyPlaceholder"), S = ce("ScrollSeekPlaceholder") || Wx, x = ce("ListComponent"), w = ce("ItemComponent"), C = ce("GroupComponent"), P = ce("computeItemKey"), k = ce("isSeeking"), m = ce("groupIndices").length > 0, R = ce("alignToBottom"), _ = ce("initialItemFinalLocationReached"), B = e ? {} : {
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
  return !e && t.totalCount === 0 && E ? /* @__PURE__ */ I(E, { ...lt(E, u) }) : /* @__PURE__ */ I(
    x,
    {
      ...lt(x, u),
      "data-testid": e ? "virtuoso-top-item-list" : "virtuoso-item-list",
      ref: y,
      style: B,
      children: (e ? t.topItems : t.items).map((A) => {
        const L = A.originalIndex, M = P(L + t.firstItemIndex, A.data, u);
        return k ? /* @__PURE__ */ Un(
          S,
          {
            ...lt(S, u),
            height: A.size,
            index: A.index,
            key: M,
            type: A.type || "item",
            ...A.type === "group" ? {} : { groupIndex: A.groupIndex }
          }
        ) : A.type === "group" ? /* @__PURE__ */ Un(
          C,
          {
            ...lt(C, u),
            "data-index": L,
            "data-item-index": A.index,
            "data-known-size": A.size,
            key: M,
            style: Ux
          },
          f(A.index, u)
        ) : /* @__PURE__ */ Un(
          w,
          {
            ...lt(w, u),
            ...Xx(w, A.data),
            "data-index": L,
            "data-item-group-index": A.groupIndex,
            "data-item-index": A.index,
            "data-known-size": A.size,
            key: M,
            style: p ? Yx : Cf
          },
          m ? c(A.index, A.groupIndex, A.data, u) : c(A.index, A.data, u)
        );
      })
    }
  );
}), qx = {
  height: "100%",
  outline: "none",
  overflowY: "auto",
  position: "relative",
  WebkitOverflowScrolling: "touch"
}, Gx = {
  outline: "none",
  overflowX: "auto",
  position: "relative"
}, Zi = (e) => ({
  height: "100%",
  position: "absolute",
  top: 0,
  width: "100%",
  ...e ? { display: "flex", flexDirection: "column" } : {}
}), Kx = {
  position: Ef(),
  top: 0,
  width: "100%",
  zIndex: 1
};
function lt(e, t) {
  if (typeof e != "string")
    return { context: t };
}
function Xx(e, t) {
  return { item: typeof e == "string" ? void 0 : t };
}
const Jx = /* @__PURE__ */ $.memo(function() {
  const e = ce("HeaderComponent"), t = Lt("headerHeight"), n = ce("HeaderFooterTag"), r = Jn(
    $.useMemo(
      () => (i) => {
        t(In(i, "height"));
      },
      [t]
    ),
    !0,
    ce("skipAnimationFrameInResizeObserver")
  ), o = ce("context");
  return e ? /* @__PURE__ */ I(n, { ref: r, children: /* @__PURE__ */ I(e, { ...lt(e, o) }) }) : null;
}), Qx = /* @__PURE__ */ $.memo(function() {
  const e = ce("FooterComponent"), t = Lt("footerHeight"), n = ce("HeaderFooterTag"), r = Jn(
    $.useMemo(
      () => (i) => {
        t(In(i, "height"));
      },
      [t]
    ),
    !0,
    ce("skipAnimationFrameInResizeObserver")
  ), o = ce("context");
  return e ? /* @__PURE__ */ I(n, { ref: r, children: /* @__PURE__ */ I(e, { ...lt(e, o) }) }) : null;
});
function Of({ useEmitter: e, useEmitterValue: t, usePublisher: n }) {
  return $.memo(function({ children: r, style: o, ...i }) {
    const s = n("scrollContainerState"), a = t("ScrollerComponent"), c = n("smoothScrollTargetReached"), u = t("scrollerRef"), f = t("context"), d = t("horizontalDirection") || !1, { scrollByCallback: h, scrollerRef: g, scrollToCallback: v } = Sf(
      s,
      c,
      a,
      u,
      void 0,
      d
    );
    return e("scrollTo", v), e("scrollBy", h), /* @__PURE__ */ I(
      a,
      {
        "data-testid": "virtuoso-scroller",
        "data-virtuoso-scroller": !0,
        ref: g,
        style: { ...d ? Gx : qx, ...o },
        tabIndex: 0,
        ...i,
        ...lt(a, f),
        children: r
      }
    );
  });
}
function Rf({ useEmitter: e, useEmitterValue: t, usePublisher: n }) {
  return $.memo(function({ children: r, style: o, ...i }) {
    const s = n("windowScrollContainerState"), a = t("ScrollerComponent"), c = n("smoothScrollTargetReached"), u = t("totalListHeight"), f = t("deviation"), d = t("customScrollParent"), h = t("context"), g = $.useRef(null), v = t("scrollerRef"), { scrollByCallback: p, scrollerRef: y, scrollToCallback: b } = Sf(
      s,
      c,
      a,
      v,
      d
    );
    return wf(() => {
      var T;
      return y.current = d || ((T = g.current) == null ? void 0 : T.ownerDocument.defaultView), () => {
        y.current = null;
      };
    }, [y, d]), e("windowScrollTo", b), e("scrollBy", p), /* @__PURE__ */ I(
      a,
      {
        ref: g,
        "data-virtuoso-scroller": !0,
        style: { position: "relative", ...o, ...u !== 0 ? { height: u + f } : {} },
        ...i,
        ...lt(a, h),
        children: r
      }
    );
  });
}
const Zx = ({ children: e }) => {
  const t = $.useContext(xf), n = Lt("viewportHeight"), r = Lt("fixedItemHeight"), o = ce("alignToBottom"), i = ce("horizontalDirection"), s = $.useMemo(
    () => Jd(n, (c) => In(c, i ? "width" : "height")),
    [n, i]
  ), a = Jn(s, !0, ce("skipAnimationFrameInResizeObserver"));
  return $.useEffect(() => {
    t && (n(t.viewportHeight), r(t.itemHeight));
  }, [t, n, r]), /* @__PURE__ */ I("div", { "data-viewport-type": "element", ref: a, style: Zi(o), children: e });
}, eT = ({ children: e }) => {
  const t = $.useContext(xf), n = Lt("windowViewportRect"), r = Lt("fixedItemHeight"), o = ce("customScrollParent"), i = ef(
    n,
    o,
    ce("skipAnimationFrameInResizeObserver")
  ), s = ce("alignToBottom");
  return $.useEffect(() => {
    t && (r(t.itemHeight), n({ offsetTop: 0, visibleHeight: t.viewportHeight, visibleWidth: 100 }));
  }, [t, n, r]), /* @__PURE__ */ I("div", { "data-viewport-type": "window", ref: i, style: Zi(s), children: e });
}, tT = ({ children: e }) => {
  const t = ce("TopItemListComponent") || "div", n = ce("headerHeight"), r = { ...Kx, marginTop: `${n}px` }, o = ce("context");
  return /* @__PURE__ */ I(t, { style: r, ...lt(t, o), children: e });
}, nT = /* @__PURE__ */ $.memo(function(e) {
  const t = ce("useWindowScroll"), n = ce("topItemsIndexes").length > 0, r = ce("customScrollParent"), o = ce("context"), i = r || t ? iT : oT, s = r || t ? eT : Zx;
  return /* @__PURE__ */ Ae(i, { ...e, ...lt(i, o), children: [
    n && /* @__PURE__ */ I(tT, { children: /* @__PURE__ */ I(Uc, { showTopList: !0 }) }),
    /* @__PURE__ */ Ae(s, { children: [
      /* @__PURE__ */ I(Jx, {}),
      /* @__PURE__ */ I(Uc, {}),
      /* @__PURE__ */ I(Qx, {})
    ] })
  ] });
}), {
  Component: rT,
  useEmitter: ol,
  useEmitterValue: ce,
  usePublisher: Lt
} = /* @__PURE__ */ bf(
  Hx,
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
  nT
), oT = /* @__PURE__ */ Of({ useEmitter: ol, useEmitterValue: ce, usePublisher: Lt }), iT = /* @__PURE__ */ Rf({ useEmitter: ol, useEmitterValue: ce, usePublisher: Lt }), sT = rT, aT = /* @__PURE__ */ Ee(() => {
  const e = Q((c) => /* @__PURE__ */ Ae("td", { children: [
    "Item $",
    c
  ] })), t = Q(null), n = Q(null), r = Q(null), o = Q({}), i = Q(rl), s = Q(Rr), a = (c, u = null) => ft(
    q(
      o,
      re((f) => f[c]),
      je()
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
Fe(vf, aT);
const Yc = {
  bottom: 0,
  itemHeight: 0,
  items: [],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, lT = {
  bottom: 0,
  itemHeight: 0,
  items: [{ index: 0 }],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, { ceil: qc, floor: bi, max: Yr, min: Cs, round: Gc } = Math;
function Kc(e, t, n) {
  return Array.from({ length: t - e + 1 }).map((r, o) => ({ data: n === null ? null : n[o + e], index: o + e }));
}
function cT(e) {
  return {
    ...lT,
    items: e
  };
}
function zo(e, t) {
  return e && e.width === t.width && e.height === t.height;
}
function uT(e, t) {
  return e && e.column === t.column && e.row === t.row;
}
const dT = /* @__PURE__ */ Ee(
  ([
    { increaseViewportBy: e, listBoundary: t, overscan: n, visibleRange: r },
    { footerHeight: o, headerHeight: i, scrollBy: s, scrollContainerState: a, scrollTo: c, scrollTop: u, smoothScrollTargetReached: f, viewportHeight: d },
    h,
    g,
    { didMount: v, propsReady: p },
    { customScrollParent: y, useWindowScroll: b, windowScrollContainerState: T, windowScrollTo: E, windowViewportRect: S },
    x
  ]) => {
    const w = Q(0), C = Q(0), P = Q(Yc), k = Q({ height: 0, width: 0 }), m = Q({ height: 0, width: 0 }), R = ve(), _ = ve(), B = Q(0), A = Q(null), L = Q({ column: 0, row: 0 }), M = ve(), U = ve(), Y = Q(!1), G = Q(0), N = Q(!0), j = Q(!1), V = Q(!1);
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
        rt(v, N, m, k, G, j),
        ae(([D, X, H, ee, , F]) => D && !X && H.height !== 0 && ee.height !== 0 && !F)
      ),
      ([, , , , D]) => {
        pe(j, !0), Za(1, () => {
          pe(R, D);
        }), fn(q(u), () => {
          pe(t, [0, 0]), pe(N, !0);
        });
      }
    ), ie(
      q(
        U,
        ae((D) => D != null && D.scrollTop > 0),
        rn(0)
      ),
      C
    ), Ie(
      q(
        v,
        me(U),
        ae(([, D]) => D != null)
      ),
      ([, D]) => {
        D && (pe(k, D.viewport), pe(m, D.item), pe(L, D.gap), D.scrollTop > 0 && (pe(Y, !0), fn(q(u, wr(1)), (X) => {
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
        rt(
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
      M
    ), ie(
      q(
        rt(
          le(w),
          r,
          le(L, uT),
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
            F,
            se,
            ge,
            Ce,
            ,
            Ke,
            be
          ]) => {
            const { column: Te, row: de } = ee, { height: Me, width: ye } = F, { width: ne } = se;
            if (Ce === 0 && (D === 0 || ne === 0))
              return Yc;
            if (ye === 0) {
              const fe = el(be, D), We = fe + Math.max(Ce - 1, 0);
              return cT(Kc(fe, We, ge));
            }
            const tt = Pf(ne, ye, Te);
            let it, st;
            Ke ? X === 0 && H === 0 && Ce > 0 ? (it = 0, st = Ce - 1) : (it = tt * bi((X + de) / (Me + de)), st = tt * qc((H + de) / (Me + de)) - 1, st = Cs(D - 1, Yr(st, tt - 1)), it = Cs(st, Yr(0, it))) : (it = 0, st = -1);
            const pt = Kc(it, st, ge), { bottom: vt, top: Ot } = Xc(se, ee, F, pt), mt = qc(D / tt), ke = mt * Me + (mt - 1) * de - vt;
            return { bottom: vt, itemHeight: Me, items: pt, itemWidth: ye, offsetBottom: ke, offsetTop: Ot, top: Ot };
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
        rt(k, m, P, L),
        ae(([D, X, { items: H }]) => H.length > 0 && X.height !== 0 && D.height !== 0),
        re(([D, X, { items: H }, ee]) => {
          const { bottom: F, top: se } = Xc(D, ee, X, H);
          return [se, F];
        }),
        je(ao)
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
    const J = Mt(
      q(
        rt(P, w),
        ae(([{ items: D }]) => D.length > 0),
        me(W),
        ae(([[D, X], H]) => {
          const ee = D.items[D.items.length - 1].index === X - 1;
          return (H || D.bottom > 0 && D.itemHeight > 0 && D.offsetBottom === 0 && D.items.length === X) && ee;
        }),
        re(([[, D]]) => D - 1),
        je()
      )
    ), te = Mt(
      q(
        le(P),
        ae(({ items: D }) => D.length > 0 && D[0].index === 0),
        rn(0),
        je()
      )
    ), K = Mt(
      q(
        le(P),
        me(Y),
        ae(([{ items: D }, X]) => D.length > 0 && !X),
        re(([{ items: D }]) => ({
          endIndex: D[D.length - 1].index,
          startIndex: D[0].index
        })),
        je(af),
        Sn(0)
      )
    );
    ie(K, g.scrollSeekRangeChanged), ie(
      q(
        R,
        me(k, m, w, L),
        re(([D, X, H, ee, F]) => {
          const se = ff(D), { align: ge, behavior: Ce, offset: Ke } = se;
          let be = se.index;
          be === "LAST" && (be = ee - 1), be = Yr(0, be, Cs(ee - 1, be));
          let Te = ea(X, F, H, be);
          return ge === "end" ? Te = Gc(Te - X.height + H.height) : ge === "center" && (Te = Gc(Te - X.height / 2 + H.height / 2)), Ke && (Te += Ke), { behavior: Ce, top: Te };
        })
      ),
      c
    );
    const Z = ft(
      q(
        P,
        re((D) => D.offsetBottom + D.bottom)
      ),
      0
    );
    return ie(
      q(
        S,
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
      windowScrollTo: E,
      windowViewportRect: S,
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
      stateChanged: M,
      stateRestoreInProgress: Y,
      ...x
    };
  },
  Fe(tl, yt, Eo, gf, Bn, nl, _n)
);
function Pf(e, t, n) {
  return Yr(1, bi((e + n) / (bi(t) + n)));
}
function Xc(e, t, n, r) {
  const { height: o } = n;
  if (o === void 0 || r.length === 0)
    return { bottom: 0, top: 0 };
  const i = ea(e, t, n, r[0].index);
  return { bottom: ea(e, t, n, r[r.length - 1].index) + o, top: i };
}
function ea(e, t, n, r) {
  const o = Pf(e.width, n.width, t.column), i = bi(r / o), s = i * n.height + Yr(0, i - 1) * t.row;
  return s > 0 ? s + t.row : s;
}
const fT = /* @__PURE__ */ Ee(() => {
  const e = Q((d) => `Item ${d}`), t = Q({}), n = Q(null), r = Q("virtuoso-grid-item"), o = Q("virtuoso-grid-list"), i = Q(rl), s = Q("div"), a = Q(Rr), c = (d, h = null) => ft(
    q(
      t,
      re((g) => g[d]),
      je()
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
}), pT = /* @__PURE__ */ Ee(
  ([e, t]) => ({ ...e, ...t }),
  Fe(dT, fT)
), mT = /* @__PURE__ */ $.memo(function() {
  const e = Ve("gridState"), t = Ve("listClassName"), n = Ve("itemClassName"), r = Ve("itemContent"), o = Ve("computeItemKey"), i = Ve("isSeeking"), s = jt("scrollHeight"), a = Ve("ItemComponent"), c = Ve("ListComponent"), u = Ve("ScrollSeekPlaceholder"), f = Ve("context"), d = jt("itemDimensions"), h = jt("gap"), g = Ve("log"), v = Ve("stateRestoreInProgress"), p = jt("reportReadyState"), y = Jn(
    $.useMemo(
      () => (b) => {
        const T = b.parentElement.parentElement.scrollHeight;
        s(T);
        const E = b.firstChild;
        if (E) {
          const { height: S, width: x } = E.getBoundingClientRect();
          d({ height: S, width: x });
        }
        h({
          column: Jc("column-gap", getComputedStyle(b).columnGap, g),
          row: Jc("row-gap", getComputedStyle(b).rowGap, g)
        });
      },
      [s, d, h, g]
    ),
    !0,
    !1
  );
  return wf(() => {
    e.itemHeight > 0 && e.itemWidth > 0 && p(!0);
  }, [e]), v ? null : /* @__PURE__ */ I(
    c,
    {
      className: t,
      ref: y,
      ...lt(c, f),
      "data-testid": "virtuoso-item-list",
      style: { paddingBottom: e.offsetBottom, paddingTop: e.offsetTop },
      children: e.items.map((b) => {
        const T = o(b.index, b.data, f);
        return i ? /* @__PURE__ */ I(
          u,
          {
            ...lt(u, f),
            height: e.itemHeight,
            index: b.index,
            width: e.itemWidth
          },
          T
        ) : /* @__PURE__ */ Un(
          a,
          {
            ...lt(a, f),
            className: n,
            "data-index": b.index,
            key: T
          },
          r(b.index, b.data, f)
        );
      })
    }
  );
}), hT = $.memo(function() {
  const e = Ve("HeaderComponent"), t = jt("headerHeight"), n = Ve("headerFooterTag"), r = Jn(
    $.useMemo(
      () => (i) => {
        t(In(i, "height"));
      },
      [t]
    ),
    !0,
    !1
  ), o = Ve("context");
  return e ? /* @__PURE__ */ I(n, { ref: r, children: /* @__PURE__ */ I(e, { ...lt(e, o) }) }) : null;
}), gT = $.memo(function() {
  const e = Ve("FooterComponent"), t = jt("footerHeight"), n = Ve("headerFooterTag"), r = Jn(
    $.useMemo(
      () => (i) => {
        t(In(i, "height"));
      },
      [t]
    ),
    !0,
    !1
  ), o = Ve("context");
  return e ? /* @__PURE__ */ I(n, { ref: r, children: /* @__PURE__ */ I(e, { ...lt(e, o) }) }) : null;
}), yT = ({ children: e }) => {
  const t = $.useContext(Tf), n = jt("itemDimensions"), r = jt("viewportDimensions"), o = Jn(
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
  }, [t, r, n]), /* @__PURE__ */ I("div", { ref: o, style: Zi(!1), children: e });
}, vT = ({ children: e }) => {
  const t = $.useContext(Tf), n = jt("windowViewportRect"), r = jt("itemDimensions"), o = Ve("customScrollParent"), i = ef(n, o, !1);
  return $.useEffect(() => {
    t && (r({ height: t.itemHeight, width: t.itemWidth }), n({ offsetTop: 0, visibleHeight: t.viewportHeight, visibleWidth: t.viewportWidth }));
  }, [t, n, r]), /* @__PURE__ */ I("div", { ref: i, style: Zi(!1), children: e });
}, bT = /* @__PURE__ */ $.memo(function({ ...e }) {
  const t = Ve("useWindowScroll"), n = Ve("customScrollParent"), r = n || t ? wT : TT, o = n || t ? vT : yT, i = Ve("context");
  return /* @__PURE__ */ I(r, { ...e, ...lt(r, i), children: /* @__PURE__ */ Ae(o, { children: [
    /* @__PURE__ */ I(hT, {}),
    /* @__PURE__ */ I(mT, {}),
    /* @__PURE__ */ I(gT, {})
  ] }) });
}), {
  Component: xT,
  useEmitter: kf,
  useEmitterValue: Ve,
  usePublisher: jt
} = /* @__PURE__ */ bf(
  pT,
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
  bT
), TT = /* @__PURE__ */ Of({ useEmitter: kf, useEmitterValue: Ve, usePublisher: jt }), wT = /* @__PURE__ */ Rf({ useEmitter: kf, useEmitterValue: Ve, usePublisher: jt });
function Jc(e, t, n) {
  return t !== "normal" && !(t != null && t.endsWith("px")) && n(`${e} was not resolved to pixel value correctly`, t, Nt.WARN), t === "normal" ? 0 : parseInt(t ?? "0", 10);
}
const ST = xT, xi = He(({ height: e, width: t, isVirtualized: n, items: r, renderItem: o, sx: i }) => n ? /* @__PURE__ */ I(dn, { id: "VenomousUI-Menu", sx: { height: e || "100%", width: t || "100%", ...i }, children: /* @__PURE__ */ I(
  sT,
  {
    style: { height: "100%", width: "100%" },
    totalCount: r == null ? void 0 : r.length,
    data: r,
    itemContent: (s, a) => o ? o(a, s) : a.label
  }
) }) : /* @__PURE__ */ I(
  dn,
  {
    id: "VenomousUI-Menu",
    gap: 1,
    sx: {
      height: e || "100%",
      width: t || "100%",
      overflowY: "scroll",
      overflowX: "hidden",
      ...i,
      "& > #VenomousUI-MenuItem": {
        width: "100% !important"
      }
      // '& #VenomousUI-MenuItem': { mb: '4px' },
      // '& #VenomousUI-MenuItem:last-child': { mb: 0 },
    },
    children: r == null ? void 0 : r.map((s, a) => /* @__PURE__ */ I(Uf, { children: o ? o(s, a) : s.label }, s.label))
  }
));
xi.displayName = "Menu";
const Ti = He(
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
  }) => n ? /* @__PURE__ */ I(
    Kn,
    {
      id: "VenomousUI-MenuItem",
      isGhost: !0,
      text: /* @__PURE__ */ I(Ht, { text: t, ellipsis: !0 }),
      icon: e,
      iconWidth: 28,
      iconPosition: "start",
      onClick: o,
      onMouseEnter: i,
      onMouseLeave: s,
      disabled: r,
      color: a ? "primary" : "auto",
      sx: {
        py: "8px",
        px: "16px",
        width: "100%",
        justifyContent: "flex-start",
        transition: "background-color 0.2s ease; color 0.2s ease",
        backgroundColor: a ? "divider" : "transparent",
        "&:hover": { backgroundColor: "divider" },
        ...c
      }
    }
  ) : /* @__PURE__ */ Ae(dn, { row: !0, py: "8px", px: "16px", sx: { width: "100%", ...c }, id: "VenomousUI-MenuItem", children: [
    /* @__PURE__ */ I(kn, { icon: e, width: 28, color: a ? "primary" : "auto" }),
    /* @__PURE__ */ I(Ht, { text: t, ellipsis: !0, flex: 1, textColor: a ? "primary" : "auto" })
  ] })
);
Ti.displayName = "MenuItem";
function ET() {
  const [e, t] = Wn(null), n = !!e, r = an((i) => {
    const s = i.currentTarget;
    t(s);
  }, []), o = an(() => {
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
const If = He(({ children: e, renderPopoverHandler: t, sx: n }) => {
  const { paperCommonStyles: r } = To(), { anchorEl: o, isOpen: i, openPopover: s, closePopover: a } = ET();
  return /* @__PURE__ */ Ae(ou, { children: [
    t({ anchorEl: o, isOpen: i, openPopover: s, closePopover: a }),
    /* @__PURE__ */ I(
      _d,
      {
        open: i,
        anchorEl: o,
        onClose: a,
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        transformOrigin: { vertical: "top", horizontal: "center" },
        slotProps: {
          paper: {
            elevation: 3,
            square: !0,
            sx: {
              ...r,
              border: 1,
              borderColor: "divider",
              ...n
            }
          }
        },
        children: /* @__PURE__ */ I(xr, { in: i, children: /* @__PURE__ */ I("div", { children: e }) })
      }
    )
  ] });
});
If.displayName = "Popover";
const CT = He(
  ({ icon: e = "solar:menu-dots-line-duotone", menuItems: t }) => /* @__PURE__ */ I(
    If,
    {
      renderPopoverHandler: ({ isOpen: n, openPopover: r }) => /* @__PURE__ */ I(
        Kn,
        {
          isCircle: !0,
          isGhost: !0,
          color: "auto",
          icon: e,
          iconWidth: 20,
          disabled: n,
          onClick: r
        }
      ),
      children: /* @__PURE__ */ I(xi, { items: t, renderItem: (n) => /* @__PURE__ */ I(Ti, { ...n, clickable: !0 }) })
    }
  )
);
CT.displayName = "ExhibitCardActionButton";
const OT = He(({ children: e, maxWidth: t = "lg", ...n }) => /* @__PURE__ */ I(
  Od,
  {
    id: "VenomousUI-Container",
    disableGutters: !0,
    maxWidth: t === "fullwidth" ? !1 : t,
    ...n,
    children: e
  }
));
OT.displayName = "Container";
const Mf = He(
  ({ children: e, isOpen: t, closeDrawer: n, width: r, position: o = "right" }) => {
    const { paperCommonStyles: i } = To();
    return /* @__PURE__ */ I(
      Dd,
      {
        id: "VenomousUI-Drawer",
        open: t,
        onClose: n,
        anchor: o,
        keepMounted: !0,
        slotProps: {
          paper: {
            sx: {
              ...i,
              ...RT(o),
              width: r,
              py: "8px",
              px: "16px"
            }
          }
        },
        children: /* @__PURE__ */ I("div", { style: { width: "100%" }, children: e })
      }
    );
  }
);
Mf.displayName = "Drawer";
function RT(e) {
  switch (e) {
    case "right":
      return { borderTopRightRadius: "0px !important", borderBottomRightRadius: "0px !important" };
    case "top":
      return { borderTopLeftRadius: "0px !important", borderTopRightRadius: "0px !important" };
    case "bottom":
      return {
        borderBottomLeftRadius: "0px !important",
        borderBottomRightRadius: "0px !important"
      };
    case "left":
    default:
      return { borderTopLeftRadius: "0px !important", borderBottomLeftRadius: "0px !important" };
  }
}
function PT() {
  const [e, t] = Wn(!1), n = an(() => {
    t(!0);
  }, []), r = an(() => {
    t(!1);
  }, []), o = an(() => {
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
const Nf = He(({ height: e = 50, title: t, closeDrawer: n }) => {
  const { paperCommonStyles: r } = To();
  return /* @__PURE__ */ Ae(
    dn,
    {
      id: "VenomousUI-DrawerHeader",
      row: !0,
      sx: {
        ...r,
        borderRadius: 0,
        height: e,
        width: "100%",
        position: "sticky",
        top: 0,
        left: 0,
        justifyContent: "space-between",
        transform: "translateY(-8px)"
      },
      children: [
        n && /* @__PURE__ */ I(
          Kn,
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
        /* @__PURE__ */ I(Ht, { text: t, isTitle: !0, ellipsis: !0 })
      ]
    }
  );
});
Nf.displayName = "DrawerHeader";
const lr = {
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
}, kT = [], Qc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (u, f) => {
    const d = typeof u == "function" ? u(t) : u;
    if (!Object.is(d, t)) {
      const h = t;
      t = f ?? (typeof d != "object" || d === null) ? d : Object.assign({}, t, d), n.forEach((g) => g(t, h));
    }
  }, o = () => t, a = { setState: r, getState: o, getInitialState: () => c, subscribe: (u) => (n.add(u), () => n.delete(u)) }, c = t = e(r, o, a);
  return a;
}, IT = (e) => e ? Qc(e) : Qc, MT = (e) => e;
function $f(e, t = MT) {
  const n = $.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return $.useDebugValue(n), n;
}
const Zc = (e) => {
  const t = IT(e), n = (r) => $f(t, r);
  return Object.assign(n, t), n;
}, il = (e) => e ? Zc(e) : Zc, eu = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, ta = /* @__PURE__ */ new Map(), Vo = (e) => {
  const t = ta.get(e);
  return t ? Object.fromEntries(
    Object.entries(t.stores).map(([n, r]) => [n, r.getState()])
  ) : {};
}, NT = (e, t, n) => {
  if (e === void 0)
    return {
      type: "untracked",
      connection: t.connect(n)
    };
  const r = ta.get(n.name);
  if (r)
    return { type: "tracked", store: e, ...r };
  const o = {
    connection: t.connect(n),
    stores: {}
  };
  return ta.set(n.name, o), { type: "tracked", store: e, ...o };
}, $T = (e, t = {}) => (n, r, o) => {
  const { enabled: i, anonymousActionType: s, store: a, ...c } = t;
  let u;
  try {
    u = (i ?? (eu ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!u)
    return e(n, r, o);
  const { connection: f, ...d } = NT(a, u, c);
  let h = !0;
  o.setState = (p, y, b) => {
    const T = n(p, y);
    if (!h) return T;
    const E = b === void 0 ? { type: s || "anonymous" } : typeof b == "string" ? { type: b } : b;
    return a === void 0 ? (f == null || f.send(E, r()), T) : (f == null || f.send(
      {
        ...E,
        type: `${a}/${E.type}`
      },
      {
        ...Vo(c.name),
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
      (eu ? "production" : void 0) !== "production" && b[0].type === "__setState" && !p && (console.warn(
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
        return Os(
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
            return g(v), a === void 0 ? f == null ? void 0 : f.init(o.getState()) : f == null ? void 0 : f.init(Vo(c.name));
          case "COMMIT":
            if (a === void 0) {
              f == null || f.init(o.getState());
              return;
            }
            return f == null ? void 0 : f.init(Vo(c.name));
          case "ROLLBACK":
            return Os(p.state, (b) => {
              if (a === void 0) {
                g(b), f == null || f.init(o.getState());
                return;
              }
              g(b[a]), f == null || f.init(Vo(c.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return Os(p.state, (b) => {
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
}, Af = $T, Os = (e, t) => {
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
function AT(e, t) {
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
const na = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return na(r)(n);
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
        return na(r)(n);
      }
    };
  }
}, DT = (e, t) => (n, r, o) => {
  let i = {
    storage: AT(() => localStorage),
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
      var E;
      return T((E = r()) != null ? E : h);
    });
    const b = ((y = i.onRehydrateStorage) == null ? void 0 : y.call(i, (p = r()) != null ? p : h)) || void 0;
    return na(u.getItem.bind(u))(i.name).then((T) => {
      if (T)
        if (typeof T.version == "number" && T.version !== i.version) {
          if (i.migrate) {
            const E = i.migrate(
              T.state,
              T.version
            );
            return E instanceof Promise ? E.then((S) => [!0, S]) : [!0, E];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, T.state];
      return [!1, void 0];
    }).then((T) => {
      var E;
      const [S, x] = T;
      if (g = i.merge(
        x,
        (E = r()) != null ? E : h
      ), n(g, !0), S)
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
}, Df = DT;
function tu() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
const _T = il()(
  Af(
    Df(
      (e) => ({
        themeMode: tu(),
        setThemeMode: (t) => e({ themeMode: t }),
        toggleThemeMode: () => e((t) => ({ themeMode: t.themeMode === "dark" ? "light" : "dark" })),
        resetThemeMode: () => e({ themeMode: tu() })
      }),
      {
        name: "VENOMOUS_UI__THEME_MODE"
      }
    )
  )
);
function sl() {
  const e = $f(_T);
  return {
    ...e,
    isDarkMode: e.themeMode === "dark"
  };
}
var _f = /* @__PURE__ */ ((e) => (e.Skyblue = "Skyblue", e.Teal = "Teal", e))(_f || {});
const Bf = {
  Skyblue: "#0097a7",
  Teal: "#009688"
};
function wi(e) {
  const t = Bf[e];
  return {
    main: t,
    light: ji(t, 0.5),
    dark: Li(t, 0.5),
    opacity: Gt(t, 0.5),
    contrastText: "#fff"
  };
}
const BT = il()(
  Af(
    Df(
      (e) => ({
        themePaletteName: "Skyblue",
        themePalette: wi(
          "Skyblue"
          /* Skyblue */
        ),
        setThemePaletteName: (t) => e({ themePaletteName: t, themePalette: wi(t) })
      }),
      {
        name: "VENOMOUS_UI__THEME_PALETTE"
      }
    )
  )
);
function Lf() {
  return {
    ...BT(),
    allPaletteNames: Object.keys(_f),
    allPaletteMainColors: Bf
  };
}
function LT() {
  const { breakpoints: e } = xn(), t = $r(e.down("sm")), n = $r(e.between("sm", "md")), r = $r(e.between("md", "lg")), o = $r(e.between("lg", "xl")), i = $r(e.up("xl")), s = En(() => {
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
function jT({
  gridStyle: e,
  cols: t
}) {
  const { isXs: n, isSm: r, isMd: o, isLg: i } = LT(), s = En(() => {
    let c;
    return n ? c = (t == null ? void 0 : t.xs) ?? lr.xs : r ? c = (t == null ? void 0 : t.sm) ?? lr.sm : o ? c = (t == null ? void 0 : t.md) ?? lr.md : i ? c = (t == null ? void 0 : t.lg) ?? lr.lg : c = (t == null ? void 0 : t.xl) ?? lr.xl, `${100 / c}%`;
  }, [n, r, o, i, t]);
  return {
    gridComponents: En(
      () => ({
        List: ({ ref: c, style: u, children: f, ...d }) => /* @__PURE__ */ I(
          "div",
          {
            ref: c,
            ...d,
            style: { display: "flex", flexWrap: "wrap", ...u, ...e },
            children: f
          }
        ),
        Item: ({ children: c, ...u }) => /* @__PURE__ */ I(
          "div",
          {
            ...u,
            style: {
              width: s,
              display: "flex",
              boxSizing: "border-box",
              flex: "none",
              alignContent: "stretch"
            },
            children: c
          }
        )
      }),
      [s, e]
    )
  };
}
const FT = ({
  height: e,
  width: t,
  items: n = kT,
  renderGridItem: r,
  gridStyle: o,
  cols: i = lr
}) => {
  const { gridComponents: s } = jT({ gridStyle: o, cols: i });
  return /* @__PURE__ */ I(
    dn,
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
      children: /* @__PURE__ */ I(
        ST,
        {
          style: { height: "100%" },
          totalCount: n.length,
          components: s,
          itemContent: (a) => r(n[a], a)
        }
      )
    }
  );
}, zT = He(FT), jf = He(
  ({ isOpen: e, closeModal: t, isPrevented: n = !0, children: r, sx: o, ...i }) => {
    const { paperCommonStyles: s } = To();
    return /* @__PURE__ */ I(
      Id,
      {
        id: "VenomousUI-Modal",
        open: e,
        onClose: n ? void 0 : t,
        scroll: "paper",
        keepMounted: !0,
        sx: { ...o },
        slotProps: {
          paper: {
            sx: {
              ...s
            }
          }
        },
        ...i,
        children: r
      }
    );
  }
);
jf.displayName = "Modal";
function $w() {
  const [e, t] = Wn(!1), n = an(() => t(!0), []), r = an(() => t(!1), []);
  return {
    isOpen: e,
    openModal: n,
    closeModal: r
  };
}
const VT = He(
  ({
    onSubmit: e,
    onClose: t,
    isSubmitting: n = !1,
    title: r = "",
    contentMessage: o = "",
    cancelButtonText: i = "Cancel",
    confirmButtonText: s = "Confirm",
    confirmButtonIsDisabled: a = !1,
    cancelButtonIsDisabled: c = !1,
    ...u
  }) => {
    const f = Yf(u.isOpen);
    return ni(() => {
      f.current && !u.isOpen && (t == null || t()), f.current = u.isOpen;
    }, [u.isOpen, t]), /* @__PURE__ */ Ae(jf, { isPrevented: !0, ...u, children: [
      /* @__PURE__ */ I(Ht, { isTitle: !0, text: r, p: "8px" }),
      /* @__PURE__ */ I(Ht, { text: o, p: "8px", pb: "24px" }),
      /* @__PURE__ */ Ae(dn, { row: !0, justifyContent: "flex-end", children: [
        /* @__PURE__ */ I(
          Kn,
          {
            text: i,
            onClick: u.closeModal,
            disabled: c || n,
            isOutlined: !0
          }
        ),
        /* @__PURE__ */ I(
          Kn,
          {
            text: s,
            onClick: () => {
              (async () => (await (e == null ? void 0 : e()), u.closeModal()))();
            },
            disabled: a,
            loading: n,
            autoFocus: !0
          }
        )
      ] })
    ] });
  }
);
VT.displayName = "ConfirmModal";
const HT = il((e) => ({
  activeId: null,
  setActiveId: (t) => e({ activeId: t })
}));
function WT(e) {
  const { activeId: t, setActiveId: n } = HT(), [r, o] = Wn(null), i = !!r && (!e || t === e), s = an(
    (c) => {
      const u = c.currentTarget;
      e ? (n(e), o(u)) : o(r ? null : u);
    },
    [e, n]
  ), a = an(() => {
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
const Ff = He(
  ({ id: e, children: t, renderPopperHandler: n, position: r = "bottom", sx: o, contentSx: i }) => {
    const { anchorEl: s, isOpen: a, openPopper: c, closePopper: u } = WT(e);
    return /* @__PURE__ */ I(pi, { onClickAway: u, children: /* @__PURE__ */ Ae(Cr, { sx: { position: "relative", ...o }, role: "presentation", id: "#VenomousUI-Popper", children: [
      n({ anchorEl: s, isOpen: a, openPopper: c, closePopper: u }),
      /* @__PURE__ */ I(Ui, { open: a, anchorEl: s, placement: r, transition: !0, keepMounted: !0, children: ({ TransitionProps: f }) => /* @__PURE__ */ I(xr, { ...f, children: /* @__PURE__ */ I(oo, { isOutlined: !0, sx: { width: "100%", ...i }, children: t }) }) })
    ] }) });
  }
);
Ff.displayName = "Popper";
function UT() {
  const { themeMode: e } = sl(), { themePalette: t } = Lf(), n = En(() => Vi({
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
  return YT(t), { theme: n };
}
function YT(e) {
  ni(() => {
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
const qT = He(({ children: e }) => {
  const { theme: t } = UT();
  return /* @__PURE__ */ Ae(jg, { theme: t, disableTransitionOnChange: !0, children: [
    /* @__PURE__ */ I(Pd, {}),
    e
  ] });
});
qT.displayName = "ThemeProvider";
function GT(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const KT = (e) => {
  switch (e) {
    case "success":
      return QT;
    case "info":
      return ew;
    case "warning":
      return ZT;
    case "error":
      return tw;
    default:
      return null;
  }
}, XT = Array(12).fill(0), JT = ({ visible: e, className: t }) => /* @__PURE__ */ $.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    t
  ].filter(Boolean).join(" "),
  "data-visible": e
}, /* @__PURE__ */ $.createElement("div", {
  className: "sonner-spinner"
}, XT.map((n, r) => /* @__PURE__ */ $.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${r}`
})))), QT = /* @__PURE__ */ $.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ $.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), ZT = /* @__PURE__ */ $.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ $.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), ew = /* @__PURE__ */ $.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ $.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), tw = /* @__PURE__ */ $.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ $.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), nw = /* @__PURE__ */ $.createElement("svg", {
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
})), rw = () => {
  const [e, t] = $.useState(document.hidden);
  return $.useEffect(() => {
    const n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
};
let ra = 1;
class ow {
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
      const { message: r, ...o } = t, i = typeof (t == null ? void 0 : t.id) == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : ra++, s = this.toasts.find((c) => c.id === i), a = t.dismissible === void 0 ? !0 : t.dismissible;
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
        else if (sw(u) && !u.ok) {
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
      const r = (n == null ? void 0 : n.id) || ra++;
      return this.create({
        jsx: t(r),
        id: r,
        ...n
      }), r;
    }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const bt = new ow(), iw = (e, t) => {
  const n = (t == null ? void 0 : t.id) || ra++;
  return bt.addToast({
    title: e,
    ...t,
    id: n
  }), n;
}, sw = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", aw = iw, lw = () => bt.toasts, cw = () => bt.getActiveToasts(), Rs = Object.assign(aw, {
  success: bt.success,
  info: bt.info,
  warning: bt.warning,
  error: bt.error,
  custom: bt.custom,
  message: bt.message,
  promise: bt.promise,
  dismiss: bt.dismiss,
  loading: bt.loading
}, {
  getHistory: lw,
  getToasts: cw
});
GT("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function Ho(e) {
  return e.label !== void 0;
}
const uw = 3, dw = "24px", fw = "16px", nu = 4e3, pw = 356, mw = 14, hw = 45, gw = 200;
function en(...e) {
  return e.filter(Boolean).join(" ");
}
function yw(e) {
  const [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
const vw = (e) => {
  var t, n, r, o, i, s, a, c, u;
  const { invert: f, toast: d, unstyled: h, interacting: g, setHeights: v, visibleToasts: p, heights: y, index: b, toasts: T, expanded: E, removeToast: S, defaultRichColors: x, closeButton: w, style: C, cancelButtonStyle: P, actionButtonStyle: k, className: m = "", descriptionClassName: R = "", duration: _, position: B, gap: A, expandByDefault: L, classNames: M, icons: U, closeButtonAriaLabel: Y = "Close toast" } = e, [G, N] = $.useState(null), [j, V] = $.useState(null), [W, J] = $.useState(!1), [te, K] = $.useState(!1), [Z, D] = $.useState(!1), [X, H] = $.useState(!1), [ee, F] = $.useState(!1), [se, ge] = $.useState(0), [Ce, Ke] = $.useState(0), be = $.useRef(d.duration || _ || nu), Te = $.useRef(null), de = $.useRef(null), Me = b === 0, ye = b + 1 <= p, ne = d.type, tt = d.dismissible !== !1, it = d.className || "", st = d.descriptionClassName || "", pt = $.useMemo(() => y.findIndex((ue) => ue.toastId === d.id) || 0, [
    y,
    d.id
  ]), vt = $.useMemo(() => {
    var ue;
    return (ue = d.closeButton) != null ? ue : w;
  }, [
    d.closeButton,
    w
  ]), Ot = $.useMemo(() => d.duration || _ || nu, [
    d.duration,
    _
  ]), mt = $.useRef(0), ke = $.useRef(0), fe = $.useRef(0), We = $.useRef(null), [Xe, Le] = B.split("-"), Zn = $.useMemo(() => y.reduce((ue, Je, ot) => ot >= pt ? ue : ue + Je.height, 0), [
    y,
    pt
  ]), er = rw(), es = d.invert || f, Tn = ne === "loading";
  ke.current = $.useMemo(() => pt * A + Zn, [
    pt,
    Zn
  ]), $.useEffect(() => {
    be.current = Ot;
  }, [
    Ot
  ]), $.useEffect(() => {
    J(!0);
  }, []), $.useEffect(() => {
    const ue = de.current;
    if (ue) {
      const Je = ue.getBoundingClientRect().height;
      return Ke(Je), v((ot) => [
        {
          toastId: d.id,
          height: Je,
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
    const ue = de.current, Je = ue.style.height;
    ue.style.height = "auto";
    const ot = ue.getBoundingClientRect().height;
    ue.style.height = Je, Ke(ot), v((oe) => oe.find((Qe) => Qe.toastId === d.id) ? oe.map((Qe) => Qe.toastId === d.id ? {
      ...Qe,
      height: ot
    } : Qe) : [
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
  const Qt = $.useCallback(() => {
    K(!0), ge(ke.current), v((ue) => ue.filter((Je) => Je.toastId !== d.id)), setTimeout(() => {
      S(d);
    }, gw);
  }, [
    d,
    S,
    v,
    ke
  ]);
  $.useEffect(() => {
    if (d.promise && ne === "loading" || d.duration === 1 / 0 || d.type === "loading") return;
    let ue;
    return E || g || er ? (() => {
      if (fe.current < mt.current) {
        const oe = (/* @__PURE__ */ new Date()).getTime() - mt.current;
        be.current = be.current - oe;
      }
      fe.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      be.current !== 1 / 0 && (mt.current = (/* @__PURE__ */ new Date()).getTime(), ue = setTimeout(() => {
        d.onAutoClose == null || d.onAutoClose.call(d, d), Qt();
      }, be.current));
    })(), () => clearTimeout(ue);
  }, [
    E,
    g,
    d,
    ne,
    er,
    Qt
  ]), $.useEffect(() => {
    d.delete && Qt();
  }, [
    Qt,
    d.delete
  ]);
  function ts() {
    var ue;
    if (U != null && U.loading) {
      var Je;
      return /* @__PURE__ */ $.createElement("div", {
        className: en(M == null ? void 0 : M.loader, d == null || (Je = d.classNames) == null ? void 0 : Je.loader, "sonner-loader"),
        "data-visible": ne === "loading"
      }, U.loading);
    }
    return /* @__PURE__ */ $.createElement(JT, {
      className: en(M == null ? void 0 : M.loader, d == null || (ue = d.classNames) == null ? void 0 : ue.loader),
      visible: ne === "loading"
    });
  }
  const ns = d.icon || (U == null ? void 0 : U[ne]) || KT(ne);
  var Co, Oo;
  return /* @__PURE__ */ $.createElement("li", {
    tabIndex: 0,
    ref: de,
    className: en(m, it, M == null ? void 0 : M.toast, d == null || (t = d.classNames) == null ? void 0 : t.toast, M == null ? void 0 : M.default, M == null ? void 0 : M[ne], d == null || (n = d.classNames) == null ? void 0 : n[ne]),
    "data-sonner-toast": "",
    "data-rich-colors": (Co = d.richColors) != null ? Co : x,
    "data-styled": !(d.jsx || d.unstyled || h),
    "data-mounted": W,
    "data-promise": !!d.promise,
    "data-swiped": ee,
    "data-removed": te,
    "data-visible": ye,
    "data-y-position": Xe,
    "data-x-position": Le,
    "data-index": b,
    "data-front": Me,
    "data-swiping": Z,
    "data-dismissible": tt,
    "data-type": ne,
    "data-invert": es,
    "data-swipe-out": X,
    "data-swipe-direction": j,
    "data-expanded": !!(E || L && W),
    style: {
      "--index": b,
      "--toasts-before": b,
      "--z-index": T.length - b,
      "--offset": `${te ? se : ke.current}px`,
      "--initial-height": L ? "auto" : `${Ce}px`,
      ...C,
      ...d.style
    },
    onDragEnd: () => {
      D(!1), N(null), We.current = null;
    },
    onPointerDown: (ue) => {
      Tn || !tt || (Te.current = /* @__PURE__ */ new Date(), ge(ke.current), ue.target.setPointerCapture(ue.pointerId), ue.target.tagName !== "BUTTON" && (D(!0), We.current = {
        x: ue.clientX,
        y: ue.clientY
      }));
    },
    onPointerUp: () => {
      var ue, Je, ot;
      if (X || !tt) return;
      We.current = null;
      const oe = Number(((ue = de.current) == null ? void 0 : ue.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), ct = Number(((Je = de.current) == null ? void 0 : Je.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Qe = (/* @__PURE__ */ new Date()).getTime() - ((ot = Te.current) == null ? void 0 : ot.getTime()), Dt = G === "x" ? oe : ct, Ro = Math.abs(Dt) / Qe;
      if (Math.abs(Dt) >= hw || Ro > 0.11) {
        ge(ke.current), d.onDismiss == null || d.onDismiss.call(d, d), V(G === "x" ? oe > 0 ? "right" : "left" : ct > 0 ? "down" : "up"), Qt(), H(!0);
        return;
      } else {
        var Yt, qt;
        (Yt = de.current) == null || Yt.style.setProperty("--swipe-amount-x", "0px"), (qt = de.current) == null || qt.style.setProperty("--swipe-amount-y", "0px");
      }
      F(!1), D(!1), N(null);
    },
    onPointerMove: (ue) => {
      var Je, ot, oe;
      if (!We.current || !tt || ((Je = window.getSelection()) == null ? void 0 : Je.toString().length) > 0) return;
      const Qe = ue.clientY - We.current.y, Dt = ue.clientX - We.current.x;
      var Ro;
      const Yt = (Ro = e.swipeDirections) != null ? Ro : yw(B);
      !G && (Math.abs(Dt) > 1 || Math.abs(Qe) > 1) && N(Math.abs(Dt) > Math.abs(Qe) ? "x" : "y");
      let qt = {
        x: 0,
        y: 0
      };
      const al = (Ln) => 1 / (1.5 + Math.abs(Ln) / 20);
      if (G === "y") {
        if (Yt.includes("top") || Yt.includes("bottom"))
          if (Yt.includes("top") && Qe < 0 || Yt.includes("bottom") && Qe > 0)
            qt.y = Qe;
          else {
            const Ln = Qe * al(Qe);
            qt.y = Math.abs(Ln) < Math.abs(Qe) ? Ln : Qe;
          }
      } else if (G === "x" && (Yt.includes("left") || Yt.includes("right")))
        if (Yt.includes("left") && Dt < 0 || Yt.includes("right") && Dt > 0)
          qt.x = Dt;
        else {
          const Ln = Dt * al(Dt);
          qt.x = Math.abs(Ln) < Math.abs(Dt) ? Ln : Dt;
        }
      (Math.abs(qt.x) > 0 || Math.abs(qt.y) > 0) && F(!0), (ot = de.current) == null || ot.style.setProperty("--swipe-amount-x", `${qt.x}px`), (oe = de.current) == null || oe.style.setProperty("--swipe-amount-y", `${qt.y}px`);
    }
  }, vt && !d.jsx && ne !== "loading" ? /* @__PURE__ */ $.createElement("button", {
    "aria-label": Y,
    "data-disabled": Tn,
    "data-close-button": !0,
    onClick: Tn || !tt ? () => {
    } : () => {
      Qt(), d.onDismiss == null || d.onDismiss.call(d, d);
    },
    className: en(M == null ? void 0 : M.closeButton, d == null || (r = d.classNames) == null ? void 0 : r.closeButton)
  }, (Oo = U == null ? void 0 : U.close) != null ? Oo : nw) : null, (ne || d.icon || d.promise) && d.icon !== null && ((U == null ? void 0 : U[ne]) !== null || d.icon) ? /* @__PURE__ */ $.createElement("div", {
    "data-icon": "",
    className: en(M == null ? void 0 : M.icon, d == null || (o = d.classNames) == null ? void 0 : o.icon)
  }, d.promise || d.type === "loading" && !d.icon ? d.icon || ts() : null, d.type !== "loading" ? ns : null) : null, /* @__PURE__ */ $.createElement("div", {
    "data-content": "",
    className: en(M == null ? void 0 : M.content, d == null || (i = d.classNames) == null ? void 0 : i.content)
  }, /* @__PURE__ */ $.createElement("div", {
    "data-title": "",
    className: en(M == null ? void 0 : M.title, d == null || (s = d.classNames) == null ? void 0 : s.title)
  }, d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title), d.description ? /* @__PURE__ */ $.createElement("div", {
    "data-description": "",
    className: en(R, st, M == null ? void 0 : M.description, d == null || (a = d.classNames) == null ? void 0 : a.description)
  }, typeof d.description == "function" ? d.description() : d.description) : null), /* @__PURE__ */ $.isValidElement(d.cancel) ? d.cancel : d.cancel && Ho(d.cancel) ? /* @__PURE__ */ $.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: d.cancelButtonStyle || P,
    onClick: (ue) => {
      Ho(d.cancel) && tt && (d.cancel.onClick == null || d.cancel.onClick.call(d.cancel, ue), Qt());
    },
    className: en(M == null ? void 0 : M.cancelButton, d == null || (c = d.classNames) == null ? void 0 : c.cancelButton)
  }, d.cancel.label) : null, /* @__PURE__ */ $.isValidElement(d.action) ? d.action : d.action && Ho(d.action) ? /* @__PURE__ */ $.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: d.actionButtonStyle || k,
    onClick: (ue) => {
      Ho(d.action) && (d.action.onClick == null || d.action.onClick.call(d.action, ue), !ue.defaultPrevented && Qt());
    },
    className: en(M == null ? void 0 : M.actionButton, d == null || (u = d.classNames) == null ? void 0 : u.actionButton)
  }, d.action.label) : null);
};
function ru() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function bw(e, t) {
  const n = {};
  return [
    e,
    t
  ].forEach((r, o) => {
    const i = o === 1, s = i ? "--mobile-offset" : "--offset", a = i ? fw : dw;
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
const xw = /* @__PURE__ */ $.forwardRef(function(t, n) {
  const { invert: r, position: o = "bottom-right", hotkey: i = [
    "altKey",
    "KeyT"
  ], expand: s, closeButton: a, className: c, offset: u, mobileOffset: f, theme: d = "light", richColors: h, duration: g, style: v, visibleToasts: p = uw, toastOptions: y, dir: b = ru(), gap: T = mw, icons: E, containerAriaLabel: S = "Notifications" } = t, [x, w] = $.useState([]), C = $.useMemo(() => Array.from(new Set([
    o
  ].concat(x.filter((j) => j.position).map((j) => j.position)))), [
    x,
    o
  ]), [P, k] = $.useState([]), [m, R] = $.useState(!1), [_, B] = $.useState(!1), [A, L] = $.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), M = $.useRef(null), U = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), Y = $.useRef(null), G = $.useRef(!1), N = $.useCallback((j) => {
    w((V) => {
      var W;
      return (W = V.find((J) => J.id === j.id)) != null && W.delete || bt.dismiss(j.id), V.filter(({ id: J }) => J !== j.id);
    });
  }, []);
  return $.useEffect(() => bt.subscribe((j) => {
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
      cr.flushSync(() => {
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
        R(!0), (te = M.current) == null || te.focus();
      }
      V.code === "Escape" && (document.activeElement === M.current || (W = M.current) != null && W.contains(document.activeElement)) && R(!1);
    };
    return document.addEventListener("keydown", j), () => document.removeEventListener("keydown", j);
  }, [
    i
  ]), $.useEffect(() => {
    if (M.current)
      return () => {
        Y.current && (Y.current.focus({
          preventScroll: !0
        }), Y.current = null, G.current = !1);
      };
  }, [
    M.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ $.createElement("section", {
    ref: n,
    "aria-label": `${S} ${U}`,
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
      dir: b === "auto" ? ru() : b,
      tabIndex: -1,
      ref: M,
      className: c,
      "data-sonner-toaster": !0,
      "data-sonner-theme": A,
      "data-y-position": J,
      "data-lifted": m && x.length > 1 && !s,
      "data-x-position": te,
      style: {
        "--front-toast-height": `${((W = P[0]) == null ? void 0 : W.height) || 0}px`,
        "--width": `${pw}px`,
        "--gap": `${T}px`,
        ...v,
        ...bw(u, f)
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
      return /* @__PURE__ */ $.createElement(vw, {
        key: K.id,
        icons: E,
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
}), Tw = He(({ position: e = "bottom-right" }) => {
  const { isDarkMode: t } = sl();
  return /* @__PURE__ */ I(
    xw,
    {
      closeButton: !1,
      invert: t,
      visibleToasts: 3,
      position: e,
      gap: 6
    }
  );
});
Tw.displayName = "Button";
function Aw() {
  return an(({ type: t, title: n, description: r }) => {
    const o = {
      description: r,
      icon: /* @__PURE__ */ I(kn, { icon: ww(t), color: Sw(t) }),
      cancel: {
        label: /* @__PURE__ */ I(kn, { icon: "solar:close-circle-outline" }),
        onClick: () => {
        }
      },
      cancelButtonStyle: { background: "transparent" }
    };
    return t === "success" ? Rs.success(n, o) : t === "error" ? Rs.error(n, o) : Rs.info(n, o);
  }, []);
}
function ww(e) {
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
function Sw(e) {
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
const Ew = He(
  ({ children: e, width: t = 300, title: n = "Settings" }) => {
    const { isOpen: r, openDrawer: o, closeDrawer: i } = PT();
    return /* @__PURE__ */ Ae(ou, { children: [
      /* @__PURE__ */ I(
        Kn,
        {
          isCircle: !0,
          isGhost: !0,
          icon: "solar:settings-line-duotone",
          iconWidth: 28,
          onClick: o
        }
      ),
      /* @__PURE__ */ Ae(Mf, { width: t, position: "right", isOpen: r, closeDrawer: i, children: [
        /* @__PURE__ */ I(Nf, { title: n, closeDrawer: i }),
        /* @__PURE__ */ I(Ht, { text: "ThemeMode", isLabel: !0, ellipsis: !0 }),
        /* @__PURE__ */ I(Cw, {}),
        /* @__PURE__ */ I("br", {}),
        /* @__PURE__ */ I(Ht, { text: "ThemePalettes", isLabel: !0, ellipsis: !0 }),
        /* @__PURE__ */ I(Ow, {}),
        /* @__PURE__ */ I("br", {}),
        e
      ] })
    ] });
  }
);
Ew.displayName = "AdminSettingsDrawer";
function Cw() {
  const { isDarkMode: e, toggleThemeMode: t } = sl();
  return /* @__PURE__ */ I(
    Gi,
    {
      isOutlined: !0,
      clickable: !0,
      onClick: t,
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
      },
      children: /* @__PURE__ */ I(
        kn,
        {
          icon: e ? "solar:moon-bold-duotone" : "solar:sun-2-bold-duotone",
          width: 24,
          color: "primary"
        }
      )
    }
  );
}
function Ow() {
  const { allPaletteNames: e, themePaletteName: t, setThemePaletteName: n } = Lf();
  return /* @__PURE__ */ I(
    zT,
    {
      cols: { xs: 3, sm: 3, md: 3, lg: 3, xl: 3 },
      height: 80 * Math.ceil(e.length / 3),
      items: e.map((r) => r),
      renderGridItem: (r) => /* @__PURE__ */ I(Ha, { title: r, arrow: !0, children: /* @__PURE__ */ I("div", { style: { margin: "4px", width: "100%" }, children: /* @__PURE__ */ I(
        Gi,
        {
          isOutlined: !0,
          clickable: !0,
          disabled: r === t,
          onClick: () => n(r),
          sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: r === t ? wi(r).main : "transparent"
          },
          children: /* @__PURE__ */ I(
            kn,
            {
              icon: "solar:siderbar-bold-duotone",
              width: 40,
              sx: {
                color: r === t ? "white" : wi(r).main
              }
            }
          )
        }
      ) }) })
    }
  );
}
const Rw = He(
  ({ menuHeaderHeight: e = 50, menuWidth: t = 220, menuItems: n, activedItemUrl: r, logoSrc: o, appName: i }) => /* @__PURE__ */ Ae(
    oo,
    {
      id: "VenomousUI-AdminSideNavMenu",
      isOutlined: !0,
      sx: { width: t, height: "100svh" },
      children: [
        /* @__PURE__ */ Ae(dn, { row: !0, gap: 0, height: e, mb: "8px", children: [
          /* @__PURE__ */ I(
            Cr,
            {
              width: 32,
              height: 32,
              component: "img",
              alt: i,
              src: o,
              draggable: !1,
              loading: "lazy",
              sx: { m: "10px" }
            }
          ),
          /* @__PURE__ */ I(Ht, { text: i, isTitle: !0 })
        ] }),
        /* @__PURE__ */ I(
          xi,
          {
            width: "100%",
            height: `calc(100svh - ${e}px)`,
            items: n,
            renderItem: (s) => /* @__PURE__ */ I(
              Ff,
              {
                id: s.label,
                position: "right",
                sx: { width: "100%" },
                contentSx: { p: "8px" },
                renderPopperHandler: ({ isOpen: a, openPopper: c }) => /* @__PURE__ */ I(
                  Ti,
                  {
                    label: s.label,
                    isActive: a || s.url === r,
                    icon: s.icon,
                    clickable: !0,
                    onClick: c,
                    onMouseEnter: c
                  }
                ),
                children: /* @__PURE__ */ I(
                  xi,
                  {
                    items: s.subItems,
                    renderItem: (a) => /* @__PURE__ */ I(
                      Ti,
                      {
                        label: a.label,
                        isActive: a.label === r,
                        icon: a.icon,
                        clickable: !0,
                        onClick: a.onClick
                      },
                      a.label
                    )
                  }
                )
              }
            )
          }
        )
      ]
    }
  )
);
Rw.displayName = "AdminSideNavMenu";
export {
  Ew as AdminSettingsDrawer,
  Rw as AdminSideNavMenu,
  G0 as Blank,
  Kn as Button,
  Gi as Card,
  VT as ConfirmModal,
  OT as Container,
  Mf as Drawer,
  Nf as DrawerHeader,
  X0 as ExhibitCard,
  CT as ExhibitCardActionButton,
  dn as Flex,
  zT as Grid,
  kn as Icon,
  xi as Menu,
  Ti as MenuItem,
  jf as Modal,
  oo as Paper,
  If as Popover,
  Ff as Popper,
  Ht as Text,
  _f as ThemePaletteName,
  qT as ThemeProvider,
  Tw as Toast,
  PT as useDrawer,
  $w as useModal,
  To as usePaper,
  LT as useThemeBreakpoint,
  sl as useThemeMode,
  Lf as useThemePalette,
  Aw as useToast
};
