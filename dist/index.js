var Sc = Object.defineProperty;
var Cc = (e, t, n) => t in e ? Sc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Zt = (e, t, n) => Cc(e, typeof t != "symbol" ? t + "" : t, n);
import { jsx as U, jsxs as et, Fragment as Ia } from "react/jsx-runtime";
import * as S from "react";
import ct, { forwardRef as ko, useContext as Oc, isValidElement as Kn, cloneElement as Xn, Children as Pc, useState as Qn, useEffect as ro, createElement as oo, memo as Sn, useMemo as $o, useRef as Rc, useCallback as gi } from "react";
import * as kc from "react-dom";
import Bn from "react-dom";
function $c(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ln = { exports: {} }, Fn = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yi;
function Nc() {
  if (yi) return ne;
  yi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function T(x) {
    if (typeof x == "object" && x !== null) {
      var w = x.$$typeof;
      switch (w) {
        case t:
          switch (x = x.type, x) {
            case l:
            case u:
            case r:
            case i:
            case o:
            case h:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case c:
                case p:
                case g:
                case y:
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
  function b(x) {
    return T(x) === u;
  }
  return ne.AsyncMode = l, ne.ConcurrentMode = u, ne.ContextConsumer = c, ne.ContextProvider = s, ne.Element = t, ne.ForwardRef = p, ne.Fragment = r, ne.Lazy = g, ne.Memo = y, ne.Portal = n, ne.Profiler = i, ne.StrictMode = o, ne.Suspense = h, ne.isAsyncMode = function(x) {
    return b(x) || T(x) === l;
  }, ne.isConcurrentMode = b, ne.isContextConsumer = function(x) {
    return T(x) === c;
  }, ne.isContextProvider = function(x) {
    return T(x) === s;
  }, ne.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, ne.isForwardRef = function(x) {
    return T(x) === p;
  }, ne.isFragment = function(x) {
    return T(x) === r;
  }, ne.isLazy = function(x) {
    return T(x) === g;
  }, ne.isMemo = function(x) {
    return T(x) === y;
  }, ne.isPortal = function(x) {
    return T(x) === n;
  }, ne.isProfiler = function(x) {
    return T(x) === i;
  }, ne.isStrictMode = function(x) {
    return T(x) === o;
  }, ne.isSuspense = function(x) {
    return T(x) === h;
  }, ne.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === u || x === i || x === o || x === h || x === m || typeof x == "object" && x !== null && (x.$$typeof === g || x.$$typeof === y || x.$$typeof === s || x.$$typeof === c || x.$$typeof === p || x.$$typeof === v || x.$$typeof === E || x.$$typeof === C || x.$$typeof === f);
  }, ne.typeOf = T, ne;
}
var re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vi;
function Ac() {
  return vi || (vi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function T(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === r || M === u || M === i || M === o || M === h || M === m || typeof M == "object" && M !== null && (M.$$typeof === g || M.$$typeof === y || M.$$typeof === s || M.$$typeof === c || M.$$typeof === p || M.$$typeof === v || M.$$typeof === E || M.$$typeof === C || M.$$typeof === f);
    }
    function b(M) {
      if (typeof M == "object" && M !== null) {
        var pe = M.$$typeof;
        switch (pe) {
          case t:
            var xe = M.type;
            switch (xe) {
              case l:
              case u:
              case r:
              case i:
              case o:
              case h:
                return xe;
              default:
                var qe = xe && xe.$$typeof;
                switch (qe) {
                  case c:
                  case p:
                  case g:
                  case y:
                  case s:
                    return qe;
                  default:
                    return pe;
                }
            }
          case n:
            return pe;
        }
      }
    }
    var x = l, w = u, O = c, j = s, _ = t, d = p, R = r, I = g, $ = y, B = n, N = i, A = o, L = h, Z = !1;
    function K(M) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(M) || b(M) === l;
    }
    function k(M) {
      return b(M) === u;
    }
    function D(M) {
      return b(M) === c;
    }
    function F(M) {
      return b(M) === s;
    }
    function W(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function V(M) {
      return b(M) === p;
    }
    function z(M) {
      return b(M) === r;
    }
    function q(M) {
      return b(M) === g;
    }
    function H(M) {
      return b(M) === y;
    }
    function Y(M) {
      return b(M) === n;
    }
    function Q(M) {
      return b(M) === i;
    }
    function G(M) {
      return b(M) === o;
    }
    function ie(M) {
      return b(M) === h;
    }
    re.AsyncMode = x, re.ConcurrentMode = w, re.ContextConsumer = O, re.ContextProvider = j, re.Element = _, re.ForwardRef = d, re.Fragment = R, re.Lazy = I, re.Memo = $, re.Portal = B, re.Profiler = N, re.StrictMode = A, re.Suspense = L, re.isAsyncMode = K, re.isConcurrentMode = k, re.isContextConsumer = D, re.isContextProvider = F, re.isElement = W, re.isForwardRef = V, re.isFragment = z, re.isLazy = q, re.isMemo = H, re.isPortal = Y, re.isProfiler = Q, re.isStrictMode = G, re.isSuspense = ie, re.isValidElementType = T, re.typeOf = b;
  }()), re;
}
var bi;
function No() {
  return bi || (bi = 1, process.env.NODE_ENV === "production" ? Fn.exports = Nc() : Fn.exports = Ac()), Fn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Vr, xi;
function Ic() {
  if (xi) return Vr;
  xi = 1;
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
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(s).map(function(p) {
        return s[p];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        u[p] = p;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Vr = o() ? Object.assign : function(i, s) {
    for (var c, l = r(i), u, p = 1; p < arguments.length; p++) {
      c = Object(arguments[p]);
      for (var h in c)
        t.call(c, h) && (l[h] = c[h]);
      if (e) {
        u = e(c);
        for (var m = 0; m < u.length; m++)
          n.call(c, u[m]) && (l[u[m]] = c[u[m]]);
      }
    }
    return l;
  }, Vr;
}
var Wr, Ei;
function Ao() {
  if (Ei) return Wr;
  Ei = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Wr = e, Wr;
}
var Ur, Ti;
function Ma() {
  return Ti || (Ti = 1, Ur = Function.call.bind(Object.prototype.hasOwnProperty)), Ur;
}
var zr, wi;
function Mc() {
  if (wi) return zr;
  wi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Ao(), n = {}, r = /* @__PURE__ */ Ma();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, c, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (r(i, p)) {
          var h;
          try {
            if (typeof i[p] != "function") {
              var m = Error(
                (l || "React class") + ": " + c + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            h = i[p](s, p, l, c, null, t);
          } catch (g) {
            h = g;
          }
          if (h && !(h instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in n)) {
            n[h.message] = !0;
            var y = u ? u() : "";
            e(
              "Failed " + c + " type: " + h.message + (y ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, zr = o, zr;
}
var qr, Si;
function Dc() {
  if (Si) return qr;
  Si = 1;
  var e = No(), t = Ic(), n = /* @__PURE__ */ Ao(), r = /* @__PURE__ */ Ma(), o = /* @__PURE__ */ Mc(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return qr = function(c, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function h(k) {
      var D = k && (u && k[u] || k[p]);
      if (typeof D == "function")
        return D;
    }
    var m = "<<anonymous>>", y = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: C(),
      arrayOf: T,
      element: b(),
      elementType: x(),
      instanceOf: w,
      node: d(),
      objectOf: j,
      oneOf: O,
      oneOfType: _,
      shape: I,
      exact: $
    };
    function g(k, D) {
      return k === D ? k !== 0 || 1 / k === 1 / D : k !== k && D !== D;
    }
    function f(k, D) {
      this.message = k, this.data = D && typeof D == "object" ? D : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function v(k) {
      if (process.env.NODE_ENV !== "production")
        var D = {}, F = 0;
      function W(z, q, H, Y, Q, G, ie) {
        if (Y = Y || m, G = G || H, ie !== n) {
          if (l) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var pe = Y + ":" + H;
            !D[pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            F < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), D[pe] = !0, F++);
          }
        }
        return q[H] == null ? z ? q[H] === null ? new f("The " + Q + " `" + G + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new f("The " + Q + " `" + G + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : k(q, H, Y, Q, G);
      }
      var V = W.bind(null, !1);
      return V.isRequired = W.bind(null, !0), V;
    }
    function E(k) {
      function D(F, W, V, z, q, H) {
        var Y = F[W], Q = A(Y);
        if (Q !== k) {
          var G = L(Y);
          return new f(
            "Invalid " + z + " `" + q + "` of type " + ("`" + G + "` supplied to `" + V + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return v(D);
    }
    function C() {
      return v(s);
    }
    function T(k) {
      function D(F, W, V, z, q) {
        if (typeof k != "function")
          return new f("Property `" + q + "` of component `" + V + "` has invalid PropType notation inside arrayOf.");
        var H = F[W];
        if (!Array.isArray(H)) {
          var Y = A(H);
          return new f("Invalid " + z + " `" + q + "` of type " + ("`" + Y + "` supplied to `" + V + "`, expected an array."));
        }
        for (var Q = 0; Q < H.length; Q++) {
          var G = k(H, Q, V, z, q + "[" + Q + "]", n);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return v(D);
    }
    function b() {
      function k(D, F, W, V, z) {
        var q = D[F];
        if (!c(q)) {
          var H = A(q);
          return new f("Invalid " + V + " `" + z + "` of type " + ("`" + H + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(k);
    }
    function x() {
      function k(D, F, W, V, z) {
        var q = D[F];
        if (!e.isValidElementType(q)) {
          var H = A(q);
          return new f("Invalid " + V + " `" + z + "` of type " + ("`" + H + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(k);
    }
    function w(k) {
      function D(F, W, V, z, q) {
        if (!(F[W] instanceof k)) {
          var H = k.name || m, Y = K(F[W]);
          return new f("Invalid " + z + " `" + q + "` of type " + ("`" + Y + "` supplied to `" + V + "`, expected ") + ("instance of `" + H + "`."));
        }
        return null;
      }
      return v(D);
    }
    function O(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function D(F, W, V, z, q) {
        for (var H = F[W], Y = 0; Y < k.length; Y++)
          if (g(H, k[Y]))
            return null;
        var Q = JSON.stringify(k, function(ie, M) {
          var pe = L(M);
          return pe === "symbol" ? String(M) : M;
        });
        return new f("Invalid " + z + " `" + q + "` of value `" + String(H) + "` " + ("supplied to `" + V + "`, expected one of " + Q + "."));
      }
      return v(D);
    }
    function j(k) {
      function D(F, W, V, z, q) {
        if (typeof k != "function")
          return new f("Property `" + q + "` of component `" + V + "` has invalid PropType notation inside objectOf.");
        var H = F[W], Y = A(H);
        if (Y !== "object")
          return new f("Invalid " + z + " `" + q + "` of type " + ("`" + Y + "` supplied to `" + V + "`, expected an object."));
        for (var Q in H)
          if (r(H, Q)) {
            var G = k(H, Q, V, z, q + "." + Q, n);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return v(D);
    }
    function _(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var D = 0; D < k.length; D++) {
        var F = k[D];
        if (typeof F != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Z(F) + " at index " + D + "."
          ), s;
      }
      function W(V, z, q, H, Y) {
        for (var Q = [], G = 0; G < k.length; G++) {
          var ie = k[G], M = ie(V, z, q, H, Y, n);
          if (M == null)
            return null;
          M.data && r(M.data, "expectedType") && Q.push(M.data.expectedType);
        }
        var pe = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new f("Invalid " + H + " `" + Y + "` supplied to " + ("`" + q + "`" + pe + "."));
      }
      return v(W);
    }
    function d() {
      function k(D, F, W, V, z) {
        return B(D[F]) ? null : new f("Invalid " + V + " `" + z + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return v(k);
    }
    function R(k, D, F, W, V) {
      return new f(
        (k || "React class") + ": " + D + " type `" + F + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + V + "`."
      );
    }
    function I(k) {
      function D(F, W, V, z, q) {
        var H = F[W], Y = A(H);
        if (Y !== "object")
          return new f("Invalid " + z + " `" + q + "` of type `" + Y + "` " + ("supplied to `" + V + "`, expected `object`."));
        for (var Q in k) {
          var G = k[Q];
          if (typeof G != "function")
            return R(V, z, q, Q, L(G));
          var ie = G(H, Q, V, z, q + "." + Q, n);
          if (ie)
            return ie;
        }
        return null;
      }
      return v(D);
    }
    function $(k) {
      function D(F, W, V, z, q) {
        var H = F[W], Y = A(H);
        if (Y !== "object")
          return new f("Invalid " + z + " `" + q + "` of type `" + Y + "` " + ("supplied to `" + V + "`, expected `object`."));
        var Q = t({}, F[W], k);
        for (var G in Q) {
          var ie = k[G];
          if (r(k, G) && typeof ie != "function")
            return R(V, z, q, G, L(ie));
          if (!ie)
            return new f(
              "Invalid " + z + " `" + q + "` key `" + G + "` supplied to `" + V + "`.\nBad object: " + JSON.stringify(F[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var M = ie(H, G, V, z, q + "." + G, n);
          if (M)
            return M;
        }
        return null;
      }
      return v(D);
    }
    function B(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(B);
          if (k === null || c(k))
            return !0;
          var D = h(k);
          if (D) {
            var F = D.call(k), W;
            if (D !== k.entries) {
              for (; !(W = F.next()).done; )
                if (!B(W.value))
                  return !1;
            } else
              for (; !(W = F.next()).done; ) {
                var V = W.value;
                if (V && !B(V[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function N(k, D) {
      return k === "symbol" ? !0 : D ? D["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && D instanceof Symbol : !1;
    }
    function A(k) {
      var D = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : N(D, k) ? "symbol" : D;
    }
    function L(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var D = A(k);
      if (D === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return D;
    }
    function Z(k) {
      var D = L(k);
      switch (D) {
        case "array":
        case "object":
          return "an " + D;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + D;
        default:
          return D;
      }
    }
    function K(k) {
      return !k.constructor || !k.constructor.name ? m : k.constructor.name;
    }
    return y.checkPropTypes = o, y.resetWarningCache = o.resetWarningCache, y.PropTypes = y, y;
  }, qr;
}
var Hr, Ci;
function _c() {
  if (Ci) return Hr;
  Ci = 1;
  var e = /* @__PURE__ */ Ao();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Hr = function() {
    function r(s, c, l, u, p, h) {
      if (h !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
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
  }, Hr;
}
var Oi;
function jc() {
  if (Oi) return Ln.exports;
  if (Oi = 1, process.env.NODE_ENV !== "production") {
    var e = No(), t = !0;
    Ln.exports = /* @__PURE__ */ Dc()(e.isElement, t);
  } else
    Ln.exports = /* @__PURE__ */ _c()();
  return Ln.exports;
}
var Bc = /* @__PURE__ */ jc();
const a = /* @__PURE__ */ $c(Bc);
function Da(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Da(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ae() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Da(e)) && (r && (r += " "), r += t);
  return r;
}
function ir(e, t) {
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
          for (const c in i)
            if (Object.prototype.hasOwnProperty.call(i, c)) {
              const l = c;
              n[o][l] = ir(i[l], s[l]);
            }
        }
      } else n[o] === void 0 && (n[o] = e[o]);
    }
  return n;
}
function Me(e, t, n = void 0) {
  const r = {};
  for (const o in e) {
    const i = e[o];
    let s = "", c = !0;
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l];
      u && (s += (c === !0 ? "" : " ") + t(u), c = !1, n && n[u] && (s += " " + n[u]));
    }
    r[o] = s;
  }
  return r;
}
function ht(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
function Lc(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Io(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Lc(e, t, n);
}
function Fc(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function mt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return mt(Fc(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ht(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ht(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const Vc = (e) => {
  const t = mt(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, sn = (e, t) => {
  try {
    return Vc(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Er(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function _a(e) {
  e = mt(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, p = (u + n / 30) % 12) => o - i * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let c = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), Er({
    type: c,
    values: l
  });
}
function io(e) {
  e = mt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? mt(_a(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Pi(e, t) {
  const n = io(e), r = io(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Je(e, t) {
  return e = mt(e), t = Io(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Er(e);
}
function Vn(e, t, n) {
  try {
    return Je(e, t);
  } catch {
    return e;
  }
}
function Mo(e, t) {
  if (e = mt(e), t = Io(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Er(e);
}
function le(e, t, n) {
  try {
    return Mo(e, t);
  } catch {
    return e;
  }
}
function Do(e, t) {
  if (e = mt(e), t = Io(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Er(e);
}
function ue(e, t, n) {
  try {
    return Do(e, t);
  } catch {
    return e;
  }
}
function Wc(e, t = 0.15) {
  return io(e) > 0.5 ? Mo(e, t) : Do(e, t);
}
function Wn(e, t, n) {
  try {
    return Wc(e, t);
  } catch {
    return e;
  }
}
function Ht(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
var Un = { exports: {} }, se = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ri;
function Uc() {
  if (Ri) return se;
  Ri = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
  function g(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case e:
          switch (f = f.type, f) {
            case n:
            case o:
            case r:
            case l:
            case u:
            case m:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case c:
                case h:
                case p:
                  return f;
                case i:
                  return f;
                default:
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return se.ContextConsumer = i, se.ContextProvider = s, se.Element = e, se.ForwardRef = c, se.Fragment = n, se.Lazy = h, se.Memo = p, se.Portal = t, se.Profiler = o, se.StrictMode = r, se.Suspense = l, se.SuspenseList = u, se.isContextConsumer = function(f) {
    return g(f) === i;
  }, se.isContextProvider = function(f) {
    return g(f) === s;
  }, se.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, se.isForwardRef = function(f) {
    return g(f) === c;
  }, se.isFragment = function(f) {
    return g(f) === n;
  }, se.isLazy = function(f) {
    return g(f) === h;
  }, se.isMemo = function(f) {
    return g(f) === p;
  }, se.isPortal = function(f) {
    return g(f) === t;
  }, se.isProfiler = function(f) {
    return g(f) === o;
  }, se.isStrictMode = function(f) {
    return g(f) === r;
  }, se.isSuspense = function(f) {
    return g(f) === l;
  }, se.isSuspenseList = function(f) {
    return g(f) === u;
  }, se.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === o || f === r || f === l || f === u || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === p || f.$$typeof === s || f.$$typeof === i || f.$$typeof === c || f.$$typeof === y || f.getModuleId !== void 0);
  }, se.typeOf = g, se;
}
var ce = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ki;
function zc() {
  return ki || (ki = 1, process.env.NODE_ENV !== "production" && function() {
    function e(f) {
      if (typeof f == "object" && f !== null) {
        var v = f.$$typeof;
        switch (v) {
          case t:
            switch (f = f.type, f) {
              case r:
              case i:
              case o:
              case u:
              case p:
              case y:
                return f;
              default:
                switch (f = f && f.$$typeof, f) {
                  case c:
                  case l:
                  case m:
                  case h:
                    return f;
                  case s:
                    return f;
                  default:
                    return v;
                }
            }
          case n:
            return v;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    ce.ContextConsumer = s, ce.ContextProvider = c, ce.Element = t, ce.ForwardRef = l, ce.Fragment = r, ce.Lazy = m, ce.Memo = h, ce.Portal = n, ce.Profiler = i, ce.StrictMode = o, ce.Suspense = u, ce.SuspenseList = p, ce.isContextConsumer = function(f) {
      return e(f) === s;
    }, ce.isContextProvider = function(f) {
      return e(f) === c;
    }, ce.isElement = function(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }, ce.isForwardRef = function(f) {
      return e(f) === l;
    }, ce.isFragment = function(f) {
      return e(f) === r;
    }, ce.isLazy = function(f) {
      return e(f) === m;
    }, ce.isMemo = function(f) {
      return e(f) === h;
    }, ce.isPortal = function(f) {
      return e(f) === n;
    }, ce.isProfiler = function(f) {
      return e(f) === i;
    }, ce.isStrictMode = function(f) {
      return e(f) === o;
    }, ce.isSuspense = function(f) {
      return e(f) === u;
    }, ce.isSuspenseList = function(f) {
      return e(f) === p;
    }, ce.isValidElementType = function(f) {
      return typeof f == "string" || typeof f == "function" || f === r || f === i || f === o || f === u || f === p || typeof f == "object" && f !== null && (f.$$typeof === m || f.$$typeof === h || f.$$typeof === c || f.$$typeof === s || f.$$typeof === l || f.$$typeof === g || f.getModuleId !== void 0);
    }, ce.typeOf = e;
  }()), ce;
}
var $i;
function qc() {
  return $i || ($i = 1, process.env.NODE_ENV === "production" ? Un.exports = /* @__PURE__ */ Uc() : Un.exports = /* @__PURE__ */ zc()), Un.exports;
}
var ar = /* @__PURE__ */ qc();
function Ze(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ja(e) {
  if (/* @__PURE__ */ S.isValidElement(e) || ar.isValidElementType(e) || !Ze(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = ja(e[n]);
  }), t;
}
function Ne(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return Ze(e) && Ze(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ S.isValidElement(t[o]) || ar.isValidElementType(t[o]) ? r[o] = t[o] : Ze(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ze(e[o]) ? r[o] = Ne(e[o], t[o], n) : n.clone ? r[o] = Ze(t[o]) ? ja(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
function Hc(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ba(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const l = i.type;
  return typeof l == "function" && !Hc(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Yt = Ht(a.element, Ba);
Yt.isRequired = Ht(a.element.isRequired, Ba);
function Yc(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Gc(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !Yc(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Kc = Ht(a.elementType, Gc), Xc = "exact-prop: ​";
function La(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Xc]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function Fa(e, t = "") {
  return e.displayName || e.name || t;
}
function Ni(e, t, n) {
  const r = Fa(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function Qc(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Fa(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ar.ForwardRef:
          return Ni(e, e.render, "ForwardRef");
        case ar.Memo:
          return Ni(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Lt(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const _o = a.oneOfType([a.func, a.object]);
function oe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ht(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ai(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function lt(e) {
  return e && e.ownerDocument || document;
}
function sr(e) {
  return lt(e).defaultView || window;
}
function ao(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const mn = typeof window < "u" ? S.useLayoutEffect : S.useEffect;
let Ii = 0;
function Jc(e) {
  const [t, n] = S.useState(e), r = e || t;
  return S.useEffect(() => {
    t == null && (Ii += 1, n(`mui-${Ii}`));
  }, [t]), r;
}
const Zc = {
  ...S
}, Mi = Zc.useId;
function jo(e) {
  if (Mi !== void 0) {
    const t = Mi();
    return e ?? t;
  }
  return Jc(e);
}
function el({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = S.useRef(e !== void 0), [i, s] = S.useState(t), c = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    S.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${r} state of ${n} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: u
    } = S.useRef(t);
    S.useEffect(() => {
      !o && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const l = S.useCallback((u) => {
    o || s(u);
  }, []);
  return [c, l];
}
function dt(e) {
  const t = S.useRef(e);
  return mn(() => {
    t.current = e;
  }), S.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Ve(...e) {
  return S.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      ao(n, t);
    });
  }, e);
}
const Di = {};
function Va(e, t) {
  const n = S.useRef(Di);
  return n.current === Di && (n.current = e(t)), n;
}
const tl = [];
function nl(e) {
  S.useEffect(e, tl);
}
class Tr {
  constructor() {
    Zt(this, "currentId", null);
    Zt(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Zt(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Tr();
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
function _t() {
  const e = Va(Tr.create).current;
  return nl(e.disposeEffect), e;
}
function cr(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function rl(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function ol(e) {
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
function Wa(e, t, n, r) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const i = ol(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Ua(e, t, ...n) {
  return e[t] === void 0 ? null : Wa(e, t, ...n);
}
function so() {
  return null;
}
Ua.isRequired = Wa;
so.isRequired = so;
const il = process.env.NODE_ENV === "production" ? so : Ua, _i = (e) => e, al = () => {
  let e = _i;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = _i;
    }
  };
}, za = al(), sl = {
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
function Te(e, t, n = "Mui") {
  const r = sl[t];
  return r ? `${n}-${r}` : `${za.generate(e)}-${t}`;
}
function we(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = Te(e, o, n);
  }), r;
}
function cl(e) {
  return typeof e == "string";
}
function qa(e, t, n) {
  return e === void 0 || cl(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function Ha(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function ji(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Ya(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const y = ae(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), g = {
      ...n == null ? void 0 : n.style,
      ...o == null ? void 0 : o.style,
      ...r == null ? void 0 : r.style
    }, f = {
      ...n,
      ...o,
      ...r
    };
    return y.length > 0 && (f.className = y), Object.keys(g).length > 0 && (f.style = g), {
      props: f,
      internalRef: void 0
    };
  }
  const s = Ha({
    ...o,
    ...r
  }), c = ji(r), l = ji(o), u = t(s), p = ae(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), h = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...o == null ? void 0 : o.style,
    ...r == null ? void 0 : r.style
  }, m = {
    ...u,
    ...n,
    ...l,
    ...c
  };
  return p.length > 0 && (m.className = p), Object.keys(h).length > 0 && (m.style = h), {
    props: m,
    internalRef: u.ref
  };
}
function Ga(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function ll(e) {
  var h;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : Ga(n, r), {
    props: c,
    internalRef: l
  } = Ya({
    ...i,
    externalSlotProps: s
  }), u = Ve(l, s == null ? void 0 : s.ref, (h = e.additionalProps) == null ? void 0 : h.ref);
  return qa(t, {
    ...c,
    ref: u
  }, r);
}
function Cn(e) {
  var t;
  return parseInt(S.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function un(e, t) {
  return t ? Ne(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const gt = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.string, a.object, a.array]) : {};
function ul(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((r) => r.startsWith("@container")).sort((r, o) => {
    var s, c;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((s = r.match(i)) == null ? void 0 : s[1]) || 0) - +(((c = o.match(i)) == null ? void 0 : c[1]) || 0);
  });
  return n.length ? n.reduce((r, o) => {
    const i = t[o];
    return delete r[o], r[o] = i, r;
  }, {
    ...t
  }) : t;
}
function fl(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function pl(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : ht(18, `(${t})`));
    return null;
  }
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function dl(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function n(i, s) {
    i.up = (...c) => t(e.breakpoints.up(...c), s), i.down = (...c) => t(e.breakpoints.down(...c), s), i.between = (...c) => t(e.breakpoints.between(...c), s), i.only = (...c) => t(e.breakpoints.only(...c), s), i.not = (...c) => {
      const l = t(e.breakpoints.not(...c), s);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const r = {}, o = (i) => (n(r, i), r);
  return n(o), {
    ...e,
    containerQueries: o
  };
}
const wr = {
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
}, Bi = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${wr[e]}px)`
}, hl = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : wr[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function ut(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Bi;
    return t.reduce((s, c, l) => (s[i.up(i.keys[l])] = n(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Bi;
    return Object.keys(t).reduce((s, c) => {
      if (fl(i.keys, c)) {
        const l = pl(r.containerQueries ? r : hl, c);
        l && (s[l] = n(t[c], c));
      } else if (Object.keys(i.values || wr).includes(c)) {
        const l = i.up(c);
        s[l] = n(t[c], c);
      } else {
        const l = c;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function ml(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function gl(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Sr(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function lr(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Sr(e, n) || r, t && (o = t(o, r, e)), o;
}
function ye(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const c = s[t], l = s.theme, u = Sr(l, r) || {};
    return ut(s, c, (h) => {
      let m = lr(u, o, h);
      return h === m && typeof h == "string" && (m = lr(u, o, `${t}${h === "default" ? "" : oe(h)}`, h)), n === !1 ? m : {
        [n]: m
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: gt
  } : {}, i.filterProps = [t], i;
}
function yl(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const vl = {
  m: "margin",
  p: "padding"
}, bl = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Li = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, xl = yl((e) => {
  if (e.length > 2)
    if (Li[e])
      e = Li[e];
    else
      return [e];
  const [t, n] = e.split(""), r = vl[t], o = bl[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Cr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Or = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], El = [...Cr, ...Or];
function On(e, t, n, r) {
  const o = Sr(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const c = o[s];
    return i >= 0 ? c : typeof c == "number" ? -c : typeof c == "string" && c.startsWith("var(") ? `calc(-1 * ${c})` : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Bo(e) {
  return On(e, "spacing", 8, "spacing");
}
function Pn(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Tl(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Pn(t, n), r), {});
}
function wl(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const o = xl(n), i = Tl(o, r), s = e[n];
  return ut(e, s, i);
}
function Ka(e, t) {
  const n = Bo(e.theme);
  return Object.keys(e).map((r) => wl(e, t, r, n)).reduce(un, {});
}
function he(e) {
  return Ka(e, Cr);
}
he.propTypes = process.env.NODE_ENV !== "production" ? Cr.reduce((e, t) => (e[t] = gt, e), {}) : {};
he.filterProps = Cr;
function me(e) {
  return Ka(e, Or);
}
me.propTypes = process.env.NODE_ENV !== "production" ? Or.reduce((e, t) => (e[t] = gt, e), {}) : {};
me.filterProps = Or;
process.env.NODE_ENV !== "production" && El.reduce((e, t) => (e[t] = gt, e), {});
function Pr(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? un(o, t[i](r)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, o) => Object.assign(r, o.propTypes), {}) : {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Le(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ze(e, t) {
  return ye({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Sl = ze("border", Le), Cl = ze("borderTop", Le), Ol = ze("borderRight", Le), Pl = ze("borderBottom", Le), Rl = ze("borderLeft", Le), kl = ze("borderColor"), $l = ze("borderTopColor"), Nl = ze("borderRightColor"), Al = ze("borderBottomColor"), Il = ze("borderLeftColor"), Ml = ze("outline", Le), Dl = ze("outlineColor"), Rr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = On(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: Pn(t, r)
    });
    return ut(e, e.borderRadius, n);
  }
  return null;
};
Rr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: gt
} : {};
Rr.filterProps = ["borderRadius"];
Pr(Sl, Cl, Ol, Pl, Rl, kl, $l, Nl, Al, Il, Rr, Ml, Dl);
const kr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = On(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: Pn(t, r)
    });
    return ut(e, e.gap, n);
  }
  return null;
};
kr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: gt
} : {};
kr.filterProps = ["gap"];
const $r = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = On(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: Pn(t, r)
    });
    return ut(e, e.columnGap, n);
  }
  return null;
};
$r.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: gt
} : {};
$r.filterProps = ["columnGap"];
const Nr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = On(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: Pn(t, r)
    });
    return ut(e, e.rowGap, n);
  }
  return null;
};
Nr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: gt
} : {};
Nr.filterProps = ["rowGap"];
const _l = ye({
  prop: "gridColumn"
}), jl = ye({
  prop: "gridRow"
}), Bl = ye({
  prop: "gridAutoFlow"
}), Ll = ye({
  prop: "gridAutoColumns"
}), Fl = ye({
  prop: "gridAutoRows"
}), Vl = ye({
  prop: "gridTemplateColumns"
}), Wl = ye({
  prop: "gridTemplateRows"
}), Ul = ye({
  prop: "gridTemplateAreas"
}), zl = ye({
  prop: "gridArea"
});
Pr(kr, $r, Nr, _l, jl, Bl, Ll, Fl, Vl, Wl, Ul, zl);
function jt(e, t) {
  return t === "grey" ? t : e;
}
const ql = ye({
  prop: "color",
  themeKey: "palette",
  transform: jt
}), Hl = ye({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: jt
}), Yl = ye({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: jt
});
Pr(ql, Hl, Yl);
function ke(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Gl = ye({
  prop: "width",
  transform: ke
}), Lo = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, c, l;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || wr[n];
      return r ? ((l = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: ke(n)
      };
    };
    return ut(e, e.maxWidth, t);
  }
  return null;
};
Lo.filterProps = ["maxWidth"];
const Kl = ye({
  prop: "minWidth",
  transform: ke
}), Xl = ye({
  prop: "height",
  transform: ke
}), Ql = ye({
  prop: "maxHeight",
  transform: ke
}), Jl = ye({
  prop: "minHeight",
  transform: ke
});
ye({
  prop: "size",
  cssProperty: "width",
  transform: ke
});
ye({
  prop: "size",
  cssProperty: "height",
  transform: ke
});
const Zl = ye({
  prop: "boxSizing"
});
Pr(Gl, Lo, Kl, Xl, Ql, Jl, Zl);
const Rn = {
  // borders
  border: {
    themeKey: "borders",
    transform: Le
  },
  borderTop: {
    themeKey: "borders",
    transform: Le
  },
  borderRight: {
    themeKey: "borders",
    transform: Le
  },
  borderBottom: {
    themeKey: "borders",
    transform: Le
  },
  borderLeft: {
    themeKey: "borders",
    transform: Le
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
    transform: Le
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Rr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: jt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: jt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: jt
  },
  // spacing
  p: {
    style: me
  },
  pt: {
    style: me
  },
  pr: {
    style: me
  },
  pb: {
    style: me
  },
  pl: {
    style: me
  },
  px: {
    style: me
  },
  py: {
    style: me
  },
  padding: {
    style: me
  },
  paddingTop: {
    style: me
  },
  paddingRight: {
    style: me
  },
  paddingBottom: {
    style: me
  },
  paddingLeft: {
    style: me
  },
  paddingX: {
    style: me
  },
  paddingY: {
    style: me
  },
  paddingInline: {
    style: me
  },
  paddingInlineStart: {
    style: me
  },
  paddingInlineEnd: {
    style: me
  },
  paddingBlock: {
    style: me
  },
  paddingBlockStart: {
    style: me
  },
  paddingBlockEnd: {
    style: me
  },
  m: {
    style: he
  },
  mt: {
    style: he
  },
  mr: {
    style: he
  },
  mb: {
    style: he
  },
  ml: {
    style: he
  },
  mx: {
    style: he
  },
  my: {
    style: he
  },
  margin: {
    style: he
  },
  marginTop: {
    style: he
  },
  marginRight: {
    style: he
  },
  marginBottom: {
    style: he
  },
  marginLeft: {
    style: he
  },
  marginX: {
    style: he
  },
  marginY: {
    style: he
  },
  marginInline: {
    style: he
  },
  marginInlineStart: {
    style: he
  },
  marginInlineEnd: {
    style: he
  },
  marginBlock: {
    style: he
  },
  marginBlockStart: {
    style: he
  },
  marginBlockEnd: {
    style: he
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
    style: kr
  },
  rowGap: {
    style: Nr
  },
  columnGap: {
    style: $r
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
    transform: ke
  },
  maxWidth: {
    style: Lo
  },
  minWidth: {
    transform: ke
  },
  height: {
    transform: ke
  },
  maxHeight: {
    transform: ke
  },
  minHeight: {
    transform: ke
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
function eu(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function tu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function nu() {
  function e(n, r, o, i) {
    const s = {
      [n]: r,
      theme: o
    }, c = i[n];
    if (!c)
      return {
        [n]: r
      };
    const {
      cssProperty: l = n,
      themeKey: u,
      transform: p,
      style: h
    } = c;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const m = Sr(o, u) || {};
    return h ? h(s) : ut(s, r, (g) => {
      let f = lr(m, p, g);
      return g === f && typeof g == "string" && (f = lr(m, p, `${n}${g === "default" ? "" : oe(g)}`, g)), l === !1 ? f : {
        [l]: f
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
    const i = o.unstable_sxConfig ?? Rn;
    function s(c) {
      let l = c;
      if (typeof c == "function")
        l = c(o);
      else if (typeof c != "object")
        return c;
      if (!l)
        return null;
      const u = ml(o.breakpoints), p = Object.keys(u);
      let h = u;
      return Object.keys(l).forEach((m) => {
        const y = tu(l[m], o);
        if (y != null)
          if (typeof y == "object")
            if (i[m])
              h = un(h, e(m, y, o, i));
            else {
              const g = ut({
                theme: o
              }, y, (f) => ({
                [m]: f
              }));
              eu(g, y) ? h[m] = t({
                sx: y,
                theme: o
              }) : h = un(h, g);
            }
          else
            h = un(h, e(m, y, o, i));
      }), ul(o, gl(p, h));
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const Ot = nu();
Ot.filterProps = ["sx"];
const ru = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? Rn;
  return Object.keys(e).forEach((o) => {
    n[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function Xa(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: r,
    otherProps: o
  } = ru(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...s) => {
    const c = t(...s);
    return Ze(c) ? {
      ...r,
      ...c
    } : r;
  } : i = {
    ...r,
    ...t
  }, {
    ...o,
    sx: i
  };
}
function ur() {
  return ur = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ur.apply(null, arguments);
}
function ou(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function iu(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var au = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(iu(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = ou(o);
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
}(), Ee = "-ms-", fr = "-moz-", ee = "-webkit-", Qa = "comm", Fo = "rule", Vo = "decl", su = "@import", Ja = "@keyframes", cu = "@layer", lu = Math.abs, Ar = String.fromCharCode, uu = Object.assign;
function fu(e, t) {
  return be(e, 0) ^ 45 ? (((t << 2 ^ be(e, 0)) << 2 ^ be(e, 1)) << 2 ^ be(e, 2)) << 2 ^ be(e, 3) : 0;
}
function Za(e) {
  return e.trim();
}
function pu(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function te(e, t, n) {
  return e.replace(t, n);
}
function co(e, t) {
  return e.indexOf(t);
}
function be(e, t) {
  return e.charCodeAt(t) | 0;
}
function gn(e, t, n) {
  return e.slice(t, n);
}
function Xe(e) {
  return e.length;
}
function Wo(e) {
  return e.length;
}
function zn(e, t) {
  return t.push(e), e;
}
function du(e, t) {
  return e.map(t).join("");
}
var Ir = 1, Ft = 1, es = 0, Oe = 0, ve = 0, Gt = "";
function Mr(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Ir, column: Ft, length: s, return: "" };
}
function en(e, t) {
  return uu(Mr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function hu() {
  return ve;
}
function mu() {
  return ve = Oe > 0 ? be(Gt, --Oe) : 0, Ft--, ve === 10 && (Ft = 1, Ir--), ve;
}
function Ae() {
  return ve = Oe < es ? be(Gt, Oe++) : 0, Ft++, ve === 10 && (Ft = 1, Ir++), ve;
}
function tt() {
  return be(Gt, Oe);
}
function Jn() {
  return Oe;
}
function kn(e, t) {
  return gn(Gt, e, t);
}
function yn(e) {
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
function ts(e) {
  return Ir = Ft = 1, es = Xe(Gt = e), Oe = 0, [];
}
function ns(e) {
  return Gt = "", e;
}
function Zn(e) {
  return Za(kn(Oe - 1, lo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function gu(e) {
  for (; (ve = tt()) && ve < 33; )
    Ae();
  return yn(e) > 2 || yn(ve) > 3 ? "" : " ";
}
function yu(e, t) {
  for (; --t && Ae() && !(ve < 48 || ve > 102 || ve > 57 && ve < 65 || ve > 70 && ve < 97); )
    ;
  return kn(e, Jn() + (t < 6 && tt() == 32 && Ae() == 32));
}
function lo(e) {
  for (; Ae(); )
    switch (ve) {
      // ] ) " '
      case e:
        return Oe;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && lo(ve);
        break;
      // (
      case 40:
        e === 41 && lo(e);
        break;
      // \
      case 92:
        Ae();
        break;
    }
  return Oe;
}
function vu(e, t) {
  for (; Ae() && e + ve !== 57; )
    if (e + ve === 84 && tt() === 47)
      break;
  return "/*" + kn(t, Oe - 1) + "*" + Ar(e === 47 ? e : Ae());
}
function bu(e) {
  for (; !yn(tt()); )
    Ae();
  return kn(e, Oe);
}
function xu(e) {
  return ns(er("", null, null, null, [""], e = ts(e), 0, [0], e));
}
function er(e, t, n, r, o, i, s, c, l) {
  for (var u = 0, p = 0, h = s, m = 0, y = 0, g = 0, f = 1, v = 1, E = 1, C = 0, T = "", b = o, x = i, w = r, O = T; v; )
    switch (g = C, C = Ae()) {
      // (
      case 40:
        if (g != 108 && be(O, h - 1) == 58) {
          co(O += te(Zn(C), "&", "&\f"), "&\f") != -1 && (E = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        O += Zn(C);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        O += gu(g);
        break;
      // \
      case 92:
        O += yu(Jn() - 1, 7);
        continue;
      // /
      case 47:
        switch (tt()) {
          case 42:
          case 47:
            zn(Eu(vu(Ae(), Jn()), t, n), l);
            break;
          default:
            O += "/";
        }
        break;
      // {
      case 123 * f:
        c[u++] = Xe(O) * E;
      // } ; \0
      case 125 * f:
      case 59:
      case 0:
        switch (C) {
          // \0 }
          case 0:
          case 125:
            v = 0;
          // ;
          case 59 + p:
            E == -1 && (O = te(O, /\f/g, "")), y > 0 && Xe(O) - h && zn(y > 32 ? Vi(O + ";", r, n, h - 1) : Vi(te(O, " ", "") + ";", r, n, h - 2), l);
            break;
          // @ ;
          case 59:
            O += ";";
          // { rule/at-rule
          default:
            if (zn(w = Fi(O, t, n, u, p, o, c, T, b = [], x = [], h), i), C === 123)
              if (p === 0)
                er(O, t, w, w, b, i, h, c, x);
              else
                switch (m === 99 && be(O, 3) === 110 ? 100 : m) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    er(e, w, w, r && zn(Fi(e, w, w, 0, 0, o, c, T, o, b = [], h), x), o, x, h, c, r ? b : x);
                    break;
                  default:
                    er(O, w, w, w, [""], x, 0, c, x);
                }
        }
        u = p = y = 0, f = E = 1, T = O = "", h = s;
        break;
      // :
      case 58:
        h = 1 + Xe(O), y = g;
      default:
        if (f < 1) {
          if (C == 123)
            --f;
          else if (C == 125 && f++ == 0 && mu() == 125)
            continue;
        }
        switch (O += Ar(C), C * f) {
          // &
          case 38:
            E = p > 0 ? 1 : (O += "\f", -1);
            break;
          // ,
          case 44:
            c[u++] = (Xe(O) - 1) * E, E = 1;
            break;
          // @
          case 64:
            tt() === 45 && (O += Zn(Ae())), m = tt(), p = h = Xe(T = O += bu(Jn())), C++;
            break;
          // -
          case 45:
            g === 45 && Xe(O) == 2 && (f = 0);
        }
    }
  return i;
}
function Fi(e, t, n, r, o, i, s, c, l, u, p) {
  for (var h = o - 1, m = o === 0 ? i : [""], y = Wo(m), g = 0, f = 0, v = 0; g < r; ++g)
    for (var E = 0, C = gn(e, h + 1, h = lu(f = s[g])), T = e; E < y; ++E)
      (T = Za(f > 0 ? m[E] + " " + C : te(C, /&\f/g, m[E]))) && (l[v++] = T);
  return Mr(e, t, n, o === 0 ? Fo : c, l, u, p);
}
function Eu(e, t, n) {
  return Mr(e, t, n, Qa, Ar(hu()), gn(e, 2, -2), 0);
}
function Vi(e, t, n, r) {
  return Mr(e, t, n, Vo, gn(e, 0, r), gn(e, r + 1, -1), r);
}
function Bt(e, t) {
  for (var n = "", r = Wo(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Tu(e, t, n, r) {
  switch (e.type) {
    case cu:
      if (e.children.length) break;
    case su:
    case Vo:
      return e.return = e.return || e.value;
    case Qa:
      return "";
    case Ja:
      return e.return = e.value + "{" + Bt(e.children, r) + "}";
    case Fo:
      e.value = e.props.join(",");
  }
  return Xe(n = Bt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function wu(e) {
  var t = Wo(e);
  return function(n, r, o, i) {
    for (var s = "", c = 0; c < t; c++)
      s += e[c](n, r, o, i) || "";
    return s;
  };
}
function Su(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function rs(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Cu = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = tt(), o === 38 && i === 12 && (n[r] = 1), !yn(i); )
    Ae();
  return kn(t, Oe);
}, Ou = function(t, n) {
  var r = -1, o = 44;
  do
    switch (yn(o)) {
      case 0:
        o === 38 && tt() === 12 && (n[r] = 1), t[r] += Cu(Oe - 1, n, r);
        break;
      case 2:
        t[r] += Zn(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = tt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      // fallthrough
      default:
        t[r] += Ar(o);
    }
  while (o = Ae());
  return t;
}, Pu = function(t, n) {
  return ns(Ou(ts(t), n));
}, Wi = /* @__PURE__ */ new WeakMap(), Ru = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Wi.get(r)) && !o) {
      Wi.set(t, !0);
      for (var i = [], s = Pu(n, i), c = r.props, l = 0, u = 0; l < s.length; l++)
        for (var p = 0; p < c.length; p++, u++)
          t.props[u] = i[l] ? s[l].replace(/&\f/g, c[p]) : c[p] + " " + s[l];
    }
  }
}, ku = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function os(e, t) {
  switch (fu(e, t)) {
    // color-adjust
    case 5103:
      return ee + "print-" + e + e;
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
      return ee + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ee + e + fr + e + Ee + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return ee + e + Ee + e + e;
    // order
    case 6165:
      return ee + e + Ee + "flex-" + e + e;
    // align-items
    case 5187:
      return ee + e + te(e, /(\w+).+(:[^]+)/, ee + "box-$1$2" + Ee + "flex-$1$2") + e;
    // align-self
    case 5443:
      return ee + e + Ee + "flex-item-" + te(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return ee + e + Ee + "flex-line-pack" + te(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return ee + e + Ee + te(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return ee + e + Ee + te(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return ee + "box-" + te(e, "-grow", "") + ee + e + Ee + te(e, "grow", "positive") + e;
    // transition
    case 4554:
      return ee + te(e, /([^-])(transform)/g, "$1" + ee + "$2") + e;
    // cursor
    case 6187:
      return te(te(te(e, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return te(e, /(image-set\([^]*)/, ee + "$1$`$1");
    // justify-content
    case 4968:
      return te(te(e, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + Ee + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return te(e, /(.+)-inline(.+)/, ee + "$1$2") + e;
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
      if (Xe(e) - 1 - t > 6) switch (be(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (be(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return te(e, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + fr + (be(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~co(e, "stretch") ? os(te(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (be(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (be(e, Xe(e) - 3 - (~co(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return te(e, ":", ":" + ee) + e;
        // (inline-)?fl(e)x
        case 101:
          return te(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ee + (be(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + Ee + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (be(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return ee + e + Ee + te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return ee + e + Ee + te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return ee + e + Ee + te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ee + e + Ee + e + e;
  }
  return e;
}
var $u = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Vo:
      t.return = os(t.value, t.length);
      break;
    case Ja:
      return Bt([en(t, {
        value: te(t.value, "@", "@" + ee)
      })], o);
    case Fo:
      if (t.length) return du(t.props, function(i) {
        switch (pu(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Bt([en(t, {
              props: [te(i, /:(read-\w+)/, ":" + fr + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return Bt([en(t, {
              props: [te(i, /:(plac\w+)/, ":" + ee + "input-$1")]
            }), en(t, {
              props: [te(i, /:(plac\w+)/, ":" + fr + "$1")]
            }), en(t, {
              props: [te(i, /:(plac\w+)/, Ee + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Nu = [$u], Au = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(f) {
      var v = f.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Nu, i = {}, s, c = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(f) {
      for (var v = f.getAttribute("data-emotion").split(" "), E = 1; E < v.length; E++)
        i[v[E]] = !0;
      c.push(f);
    }
  );
  var l, u = [Ru, ku];
  {
    var p, h = [Tu, Su(function(f) {
      p.insert(f);
    })], m = wu(u.concat(o, h)), y = function(v) {
      return Bt(xu(v), m);
    };
    l = function(v, E, C, T) {
      p = C, y(v ? v + "{" + E.styles + "}" : E.styles), T && (g.inserted[E.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new au({
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
    insert: l
  };
  return g.sheet.hydrate(c), g;
}, Yr, Ui;
function Iu() {
  if (Ui) return Yr;
  Ui = 1;
  var e = No(), t = {
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
  function s(g) {
    return e.isMemo(g) ? o : i[g.$$typeof] || t;
  }
  var c = Object.defineProperty, l = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, p = Object.getOwnPropertyDescriptor, h = Object.getPrototypeOf, m = Object.prototype;
  function y(g, f, v) {
    if (typeof f != "string") {
      if (m) {
        var E = h(f);
        E && E !== m && y(g, E, v);
      }
      var C = l(f);
      u && (C = C.concat(u(f)));
      for (var T = s(g), b = s(f), x = 0; x < C.length; ++x) {
        var w = C[x];
        if (!n[w] && !(v && v[w]) && !(b && b[w]) && !(T && T[w])) {
          var O = p(f, w);
          try {
            c(g, w, O);
          } catch {
          }
        }
      }
    }
    return g;
  }
  return Yr = y, Yr;
}
Iu();
var Mu = !0;
function is(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Uo = function(t, n, r) {
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
  Mu === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, as = function(t, n, r) {
  Uo(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Du(e) {
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
var _u = {
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
}, ju = /[A-Z]|^ms/g, Bu = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ss = function(t) {
  return t.charCodeAt(1) === 45;
}, zi = function(t) {
  return t != null && typeof t != "boolean";
}, Gr = /* @__PURE__ */ rs(function(e) {
  return ss(e) ? e : e.replace(ju, "-$&").toLowerCase();
}), qi = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Bu, function(r, o, i) {
          return Qe = {
            name: o,
            styles: i,
            next: Qe
          }, o;
        });
  }
  return _u[t] !== 1 && !ss(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function vn(e, t, n) {
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
        return Qe = {
          name: o.name,
          styles: o.styles,
          next: Qe
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Qe = {
              name: s.name,
              styles: s.styles,
              next: Qe
            }, s = s.next;
        var c = i.styles + ";";
        return c;
      }
      return Lu(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = Qe, u = n(e);
        return Qe = l, vn(e, t, u);
      }
      break;
    }
  }
  var p = n;
  if (t == null)
    return p;
  var h = t[p];
  return h !== void 0 ? h : p;
}
function Lu(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += vn(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var c = s;
        t != null && t[c] !== void 0 ? r += i + "{" + t[c] + "}" : zi(c) && (r += Gr(i) + ":" + qi(i, c) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var l = 0; l < s.length; l++)
          zi(s[l]) && (r += Gr(i) + ":" + qi(i, s[l]) + ";");
      else {
        var u = vn(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Gr(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var Hi = /label:\s*([^\s;{]+)\s*(;|$)/g, Qe;
function Dr(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  Qe = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += vn(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += vn(n, t, e[c]), r) {
      var l = i;
      o += l[c];
    }
  Hi.lastIndex = 0;
  for (var u = "", p; (p = Hi.exec(o)) !== null; )
    u += "-" + p[1];
  var h = Du(o) + u;
  return {
    name: h,
    styles: o,
    next: Qe
  };
}
var Fu = function(t) {
  return t();
}, Vu = S.useInsertionEffect ? S.useInsertionEffect : !1, cs = Vu || Fu, ls = /* @__PURE__ */ S.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Au({
    key: "css"
  }) : null
);
ls.Provider;
var us = function(t) {
  return /* @__PURE__ */ ko(function(n, r) {
    var o = Oc(ls);
    return t(n, o, r);
  });
}, zo = /* @__PURE__ */ S.createContext({}), qo = {}.hasOwnProperty, uo = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Wu = function(t, n) {
  var r = {};
  for (var o in n)
    qo.call(n, o) && (r[o] = n[o]);
  return r[uo] = t, r;
}, Uu = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Uo(n, r, o), cs(function() {
    return as(n, r, o);
  }), null;
}, zu = /* @__PURE__ */ us(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[uo], i = [r], s = "";
  typeof e.className == "string" ? s = is(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var c = Dr(i, void 0, S.useContext(zo));
  s += t.key + "-" + c.name;
  var l = {};
  for (var u in e)
    qo.call(e, u) && u !== "css" && u !== uo && (l[u] = e[u]);
  return l.className = s, n && (l.ref = n), /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(Uu, {
    cache: t,
    serialized: c,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ S.createElement(o, l));
}), qu = zu, Yi = function(t, n) {
  var r = arguments;
  if (n == null || !qo.call(n, "css"))
    return S.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = qu, i[1] = Wu(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return S.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Yi || (Yi = {}));
function Ho() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Dr(t);
}
function $n() {
  var e = Ho.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Hu = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Yu = /* @__PURE__ */ rs(
  function(e) {
    return Hu.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Gu = Yu, Ku = function(t) {
  return t !== "theme";
}, Gi = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Gu : Ku;
}, Ki = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Xu = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Uo(n, r, o), cs(function() {
    return as(n, r, o);
  }), null;
}, Qu = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var c = Ki(t, n, r), l = c || Gi(o), u = !l("as");
  return function() {
    var p = arguments, h = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && h.push("label:" + i + ";"), p[0] == null || p[0].raw === void 0)
      h.push.apply(h, p);
    else {
      var m = p[0];
      h.push(m[0]);
      for (var y = p.length, g = 1; g < y; g++)
        h.push(p[g], m[g]);
    }
    var f = us(function(v, E, C) {
      var T = u && v.as || o, b = "", x = [], w = v;
      if (v.theme == null) {
        w = {};
        for (var O in v)
          w[O] = v[O];
        w.theme = S.useContext(zo);
      }
      typeof v.className == "string" ? b = is(E.registered, x, v.className) : v.className != null && (b = v.className + " ");
      var j = Dr(h.concat(x), E.registered, w);
      b += E.key + "-" + j.name, s !== void 0 && (b += " " + s);
      var _ = u && c === void 0 ? Gi(T) : l, d = {};
      for (var R in v)
        u && R === "as" || _(R) && (d[R] = v[R]);
      return d.className = b, C && (d.ref = C), /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(Xu, {
        cache: E,
        serialized: j,
        isStringTag: typeof T == "string"
      }), /* @__PURE__ */ S.createElement(T, d));
    });
    return f.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", f.defaultProps = t.defaultProps, f.__emotion_real = f, f.__emotion_base = o, f.__emotion_styles = h, f.__emotion_forwardProp = c, Object.defineProperty(f, "toString", {
      value: function() {
        return "." + s;
      }
    }), f.withComponent = function(v, E) {
      var C = e(v, ur({}, n, E, {
        shouldForwardProp: Ki(f, E, !0)
      }));
      return C.apply(void 0, h);
    }, f;
  };
}, Ju = [
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
], fo = Qu.bind(null);
Ju.forEach(function(e) {
  fo[e] = fo(e);
});
/**
 * @mui/styled-engine v7.0.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function fs(e, t) {
  const n = fo(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function Zu(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Xi = [];
function Qi(e) {
  return Xi[0] = e, Dr(Xi);
}
const ef = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function tf(e) {
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
  } = e, i = ef(t), s = Object.keys(i);
  function c(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
  }
  function l(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - r / 100}${n})`;
  }
  function u(m, y) {
    const g = s.indexOf(y);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n}) and (max-width:${(g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : y) - r / 100}${n})`;
  }
  function p(m) {
    return s.indexOf(m) + 1 < s.length ? u(m, s[s.indexOf(m) + 1]) : c(m);
  }
  function h(m) {
    const y = s.indexOf(m);
    return y === 0 ? c(s[1]) : y === s.length - 1 ? l(s[y]) : u(m, s[s.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: c,
    down: l,
    between: u,
    only: p,
    not: h,
    unit: n,
    ...o
  };
}
const nf = {
  borderRadius: 4
};
function ps(e = 8, t = Bo({
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
function rf(e, t) {
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
function Yo(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, c = tf(n), l = ps(o);
  let u = Ne({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...r
    },
    spacing: l,
    shape: {
      ...nf,
      ...i
    }
  }, s);
  return u = dl(u), u.applyStyles = rf, u = t.reduce((p, h) => Ne(p, h), u), u.unstable_sxConfig = {
    ...Rn,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(h) {
    return Ot({
      sx: h,
      theme: this
    });
  }, u;
}
function of(e) {
  return Object.keys(e).length === 0;
}
function af(e = null) {
  const t = S.useContext(zo);
  return !t || of(t) ? e : t;
}
const sf = Yo();
function ds(e = sf) {
  return af(e);
}
function cf(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = fs("div", {
    shouldForwardProp: (c) => c !== "theme" && c !== "sx" && c !== "as"
  })(Ot);
  return /* @__PURE__ */ S.forwardRef(function(l, u) {
    const p = ds(n), {
      className: h,
      component: m = "div",
      ...y
    } = Xa(l);
    return /* @__PURE__ */ U(i, {
      as: m,
      ref: u,
      className: ae(h, o ? o(r) : r),
      theme: t && p[t] || p,
      ...y
    });
  });
}
function hs(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: Qi(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Qi(o.style));
  }), r;
}
const lf = Yo();
function Kr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function uf(e) {
  return e ? (t, n) => n[e] : null;
}
function ff(e, t, n) {
  e.theme = mf(e.theme) ? n : e.theme[t] || e.theme;
}
function tr(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((r) => tr(e, r));
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
    return ms(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function ms(e, t, n = []) {
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
      for (const c in s.props)
        if (e[c] !== s.props[c] && ((o = e.ownerState) == null ? void 0 : o[c]) !== s.props[c])
          continue e;
    typeof s.style == "function" ? (r ?? (r = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), n.push(s.style(r))) : n.push(s.style);
  }
  return n;
}
function pf(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = lf,
    rootShouldForwardProp: r = Kr,
    slotShouldForwardProp: o = Kr
  } = e;
  function i(c) {
    ff(c, t, n);
  }
  return (c, l = {}) => {
    Zu(c, (x) => x.filter((w) => w !== Ot));
    const {
      name: u,
      slot: p,
      skipVariantsResolver: h,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: y = uf(gs(p)),
      ...g
    } = l, f = h !== void 0 ? h : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), v = m || !1;
    let E = Kr;
    p === "Root" || p === "root" ? E = r : p ? E = o : gf(c) && (E = void 0);
    const C = fs(c, {
      shouldForwardProp: E,
      label: hf(u, p),
      ...g
    }), T = (x) => {
      if (typeof x == "function" && x.__emotion_real !== x)
        return function(O) {
          return tr(O, x);
        };
      if (Ze(x)) {
        const w = hs(x);
        return w.variants ? function(j) {
          return tr(j, w);
        } : w.style;
      }
      return x;
    }, b = (...x) => {
      const w = [], O = x.map(T), j = [];
      if (w.push(i), u && y && j.push(function(I) {
        var A, L;
        const B = (L = (A = I.theme.components) == null ? void 0 : A[u]) == null ? void 0 : L.styleOverrides;
        if (!B)
          return null;
        const N = {};
        for (const Z in B)
          N[Z] = tr(I, B[Z]);
        return y(I, N);
      }), u && !f && j.push(function(I) {
        var N, A;
        const $ = I.theme, B = (A = (N = $ == null ? void 0 : $.components) == null ? void 0 : N[u]) == null ? void 0 : A.variants;
        return B ? ms(I, B) : null;
      }), v || j.push(Ot), Array.isArray(O[0])) {
        const R = O.shift(), I = new Array(w.length).fill(""), $ = new Array(j.length).fill("");
        let B;
        B = [...I, ...R, ...$], B.raw = [...I, ...R.raw, ...$], w.unshift(B);
      }
      const _ = [...w, ...O, ...j], d = C(..._);
      return c.muiName && (d.muiName = c.muiName), process.env.NODE_ENV !== "production" && (d.displayName = df(u, p, c)), d;
    };
    return C.withConfig && (b.withConfig = C.withConfig), b;
  };
}
function df(e, t, n) {
  return e ? `${e}${oe(t || "")}` : `Styled(${Qc(n)})`;
}
function hf(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${gs(t || "Root")}`), n;
}
function mf(e) {
  for (const t in e)
    return !1;
  return !0;
}
function gf(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function gs(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const yf = /* @__PURE__ */ S.createContext();
process.env.NODE_ENV !== "production" && (a.node, a.bool);
const ys = () => S.useContext(yf) ?? !1, vf = /* @__PURE__ */ S.createContext(void 0);
process.env.NODE_ENV !== "production" && (a.node, a.object);
function bf(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? ir(o.defaultProps, r) : !o.styleOverrides && !o.variants ? ir(o, r) : r;
}
function xf({
  props: e,
  name: t
}) {
  const n = S.useContext(vf);
  return bf({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const Ji = {
  theme: void 0
};
function Ef(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Ji.theme = o.theme, i = hs(e(Ji)), t = i, n = o.theme), i;
  };
}
function Tf(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const Zi = (e, t, n, r = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = n : o && typeof o == "object" && (o[i] = n) : o && typeof o == "object" && (o[i] || (o[i] = r.includes(i) ? [] : {}), o = o[i]);
  });
}, wf = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([c, l]) => {
      (!n || n && !n([...i, c])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? r(l, [...i, c], Array.isArray(l) ? [...s, c] : s) : t([...i, c], l, s));
    });
  }
  r(e);
}, Sf = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Xr(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return wf(
    e,
    (c, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!r || !r(c, l))) {
        const p = `--${n ? `${n}-` : ""}${c.join("-")}`, h = Sf(c, l);
        Object.assign(o, {
          [p]: h
        }), Zi(i, c, `var(${p})`, u), Zi(s, c, `var(${p}, ${h})`, u);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function Cf(e, t = {}) {
  const {
    getSelector: n = v,
    disableCssColorScheme: r,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: s,
    defaultColorScheme: c = "light",
    ...l
  } = e, {
    vars: u,
    css: p,
    varsWithDefaults: h
  } = Xr(l, t);
  let m = h;
  const y = {}, {
    [c]: g,
    ...f
  } = i;
  if (Object.entries(f || {}).forEach(([T, b]) => {
    const {
      vars: x,
      css: w,
      varsWithDefaults: O
    } = Xr(b, t);
    m = Ne(m, O), y[T] = {
      css: w,
      vars: x
    };
  }), g) {
    const {
      css: T,
      vars: b,
      varsWithDefaults: x
    } = Xr(g, t);
    m = Ne(m, x), y[c] = {
      css: T,
      vars: b
    };
  }
  function v(T, b) {
    var w, O;
    let x = o;
    if (o === "class" && (x = ".%s"), o === "data" && (x = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (x = `[${o}="%s"]`), T) {
      if (x === "media")
        return e.defaultColorScheme === T ? ":root" : {
          [`@media (prefers-color-scheme: ${((O = (w = i[T]) == null ? void 0 : w.palette) == null ? void 0 : O.mode) || T})`]: {
            ":root": b
          }
        };
      if (x)
        return e.defaultColorScheme === T ? `:root, ${x.replace("%s", String(T))}` : x.replace("%s", String(T));
    }
    return ":root";
  }
  return {
    vars: m,
    generateThemeVars: () => {
      let T = {
        ...u
      };
      return Object.entries(y).forEach(([, {
        vars: b
      }]) => {
        T = Ne(T, b);
      }), T;
    },
    generateStyleSheets: () => {
      var j, _;
      const T = [], b = e.defaultColorScheme || "light";
      function x(d, R) {
        Object.keys(R).length && T.push(typeof d == "string" ? {
          [d]: {
            ...R
          }
        } : d);
      }
      x(n(void 0, {
        ...p
      }), p);
      const {
        [b]: w,
        ...O
      } = y;
      if (w) {
        const {
          css: d
        } = w, R = (_ = (j = i[b]) == null ? void 0 : j.palette) == null ? void 0 : _.mode, I = !r && R ? {
          colorScheme: R,
          ...d
        } : {
          ...d
        };
        x(n(b, {
          ...I
        }), I);
      }
      return Object.entries(O).forEach(([d, {
        css: R
      }]) => {
        var B, N;
        const I = (N = (B = i[d]) == null ? void 0 : B.palette) == null ? void 0 : N.mode, $ = !r && I ? {
          colorScheme: I,
          ...R
        } : {
          ...R
        };
        x(n(d, {
          ...$
        }), $);
      }), T;
    }
  };
}
function Of(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const bn = {
  black: "#000",
  white: "#fff"
}, Pf = {
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
}, kt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, $t = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, tn = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Nt = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, At = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, It = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function vs() {
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
      paper: bn.white,
      default: bn.white
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
const Rf = vs();
function bs() {
  return {
    text: {
      primary: bn.white,
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
      active: bn.white,
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
const ea = bs();
function ta(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Do(e.main, o) : t === "dark" && (e.dark = Mo(e.main, i)));
}
function kf(e = "light") {
  return e === "dark" ? {
    main: Nt[200],
    light: Nt[50],
    dark: Nt[400]
  } : {
    main: Nt[700],
    light: Nt[400],
    dark: Nt[800]
  };
}
function $f(e = "light") {
  return e === "dark" ? {
    main: kt[200],
    light: kt[50],
    dark: kt[400]
  } : {
    main: kt[500],
    light: kt[300],
    dark: kt[700]
  };
}
function Nf(e = "light") {
  return e === "dark" ? {
    main: $t[500],
    light: $t[300],
    dark: $t[700]
  } : {
    main: $t[700],
    light: $t[400],
    dark: $t[800]
  };
}
function Af(e = "light") {
  return e === "dark" ? {
    main: At[400],
    light: At[300],
    dark: At[700]
  } : {
    main: At[700],
    light: At[500],
    dark: At[900]
  };
}
function If(e = "light") {
  return e === "dark" ? {
    main: It[400],
    light: It[300],
    dark: It[700]
  } : {
    main: It[800],
    light: It[500],
    dark: It[900]
  };
}
function Mf(e = "light") {
  return e === "dark" ? {
    main: tn[400],
    light: tn[300],
    dark: tn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: tn[500],
    dark: tn[900]
  };
}
function Go(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...o
  } = e, i = e.primary || kf(t), s = e.secondary || $f(t), c = e.error || Nf(t), l = e.info || Af(t), u = e.success || If(t), p = e.warning || Mf(t);
  function h(f) {
    const v = Pi(f, ea.text.primary) >= n ? ea.text.primary : Rf.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const E = Pi(f, v);
      E < 3 && console.error([`MUI: The contrast ratio of ${E}:1 for ${v} on ${f}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const m = ({
    color: f,
    name: v,
    mainShade: E = 500,
    lightShade: C = 300,
    darkShade: T = 700
  }) => {
    if (f = {
      ...f
    }, !f.main && f[E] && (f.main = f[E]), !f.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${E}\` property.` : ht(11, v ? ` (${v})` : "", E));
    if (typeof f.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(f.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ht(12, v ? ` (${v})` : "", JSON.stringify(f.main)));
    return ta(f, "light", C, r), ta(f, "dark", T, r), f.contrastText || (f.contrastText = h(f.main)), f;
  };
  let y;
  return t === "light" ? y = vs() : t === "dark" && (y = bs()), process.env.NODE_ENV !== "production" && (y || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ne({
    // A collection of common colors.
    common: {
      ...bn
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Pf,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...y
  }, o);
}
function Df(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function _f(e, t) {
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
function jf(e) {
  return Math.round(e * 1e5) / 1e5;
}
const na = {
  textTransform: "uppercase"
}, ra = '"Roboto", "Helvetica", "Arial", sans-serif';
function Bf(e, t) {
  const {
    fontFamily: n = ra,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: p,
    ...h
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const m = r / 14, y = p || ((v) => `${v / l * m}rem`), g = (v, E, C, T, b) => ({
    fontFamily: n,
    fontWeight: v,
    fontSize: y(E),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === ra ? {
      letterSpacing: `${jf(T / E)}em`
    } : {},
    ...b,
    ...u
  }), f = {
    h1: g(o, 96, 1.167, -1.5),
    h2: g(o, 60, 1.2, -0.5),
    h3: g(i, 48, 1.167, 0),
    h4: g(i, 34, 1.235, 0.25),
    h5: g(i, 24, 1.334, 0),
    h6: g(s, 20, 1.6, 0.15),
    subtitle1: g(i, 16, 1.75, 0.15),
    subtitle2: g(s, 14, 1.57, 0.1),
    body1: g(i, 16, 1.5, 0.15),
    body2: g(i, 14, 1.43, 0.15),
    button: g(s, 14, 1.75, 0.4, na),
    caption: g(i, 12, 1.66, 0.4),
    overline: g(i, 12, 2.66, 1, na),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ne({
    htmlFontSize: l,
    pxToRem: y,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: c,
    ...f
  }, h, {
    clone: !1
    // No need to clone deep
  });
}
const Lf = 0.2, Ff = 0.14, Vf = 0.12;
function de(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Lf})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ff})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Vf})`].join(",");
}
const Wf = ["none", de(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), de(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), de(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), de(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), de(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), de(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), de(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), de(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), de(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), de(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), de(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), de(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), de(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), de(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), de(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), de(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), de(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), de(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), de(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), de(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), de(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), de(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), de(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), de(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Uf = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, zf = {
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
function oa(e) {
  return `${Math.round(e)}ms`;
}
function qf(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Hf(e) {
  const t = {
    ...Uf,
    ...e.easing
  }, n = {
    ...zf,
    ...e.duration
  };
  return {
    getAutoHeightDuration: qf,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: c = t.easeInOut,
        delay: l = 0,
        ...u
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const p = (m) => typeof m == "string", h = (m) => !Number.isNaN(parseFloat(m));
        !p(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(s) && !p(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), p(c) || console.error('MUI: Argument "easing" must be a string.'), !h(l) && !p(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof s == "string" ? s : oa(s)} ${c} ${typeof l == "string" ? l : oa(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const Yf = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Gf(e) {
  return Ze(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function xs(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, c] = o[i];
      !Gf(c) || s.startsWith("unstable_") ? delete r[s] : Ze(c) && (r[s] = {
        ...c
      }, n(r[s]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function po(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: c = {},
    shape: l,
    ...u
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : ht(20));
  const p = Go(i), h = Yo(e);
  let m = Ne(h, {
    mixins: _f(h.breakpoints, r),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Wf.slice(),
    typography: Bf(p, c),
    transitions: Hf(s),
    zIndex: {
      ...Yf
    }
  });
  if (m = Ne(m, u), m = t.reduce((y, g) => Ne(y, g), m), process.env.NODE_ENV !== "production") {
    const y = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], g = (f, v) => {
      let E;
      for (E in f) {
        const C = f[E];
        if (y.includes(E) && Object.keys(C).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const T = Te("", E);
            console.error([`MUI: The \`${v}\` component increases the CSS specificity of the \`${E}\` internal state.`, "You can not override it like this: ", JSON.stringify(f, null, 2), "", `Instead, you need to use the '&.${T}' syntax:`, JSON.stringify({
              root: {
                [`&.${T}`]: C
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          f[E] = {};
        }
      }
    };
    Object.keys(m.components).forEach((f) => {
      const v = m.components[f].styleOverrides;
      v && f.startsWith("Mui") && g(v, f);
    });
  }
  return m.unstable_sxConfig = {
    ...Rn,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, m.unstable_sx = function(g) {
    return Ot({
      sx: g,
      theme: this
    });
  }, m.toRuntimeSource = xs, m;
}
function ho(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Kf = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = ho(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Es(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Ts(e) {
  return e === "dark" ? Kf : [];
}
function Xf(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...o
  } = e, i = Go(t);
  return {
    palette: i,
    opacity: {
      ...Es(i.mode),
      ...n
    },
    overlays: r || Ts(i.mode),
    ...o
  };
}
function Qf(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Jf = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Zf = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Jf(e.cssVarPrefix).forEach((c) => {
        s[c] = n[c], delete n[c];
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
function ep(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function P(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function cn(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : _a(e);
}
function at(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = sn(cn(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function tp(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ke = (e) => {
  try {
    return e();
  } catch {
  }
}, np = (e = "mui") => Tf(e);
function Qr(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = Xf({
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
  } = po({
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
      ...Es(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Ts(o)
  }, s;
}
function rp(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = Qf,
    colorSchemeSelector: c = n.light && n.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...u
  } = e, p = Object.keys(n)[0], h = r || (n.light && p !== "light" ? "light" : p), m = np(i), {
    [h]: y,
    light: g,
    dark: f,
    ...v
  } = n, E = {
    ...v
  };
  let C = y;
  if ((h === "dark" && !("dark" in n) || h === "light" && !("light" in n)) && (C = !0), !C)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : ht(21, h));
  const T = Qr(E, C, u, h);
  g && !E.light && Qr(E, g, void 0, "light"), f && !E.dark && Qr(E, f, void 0, "dark");
  let b = {
    defaultColorScheme: h,
    ...T,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: l,
    getCssVar: m,
    colorSchemes: E,
    font: {
      ...Df(T.typography),
      ...T.font
    },
    spacing: tp(u.spacing)
  };
  Object.keys(b.colorSchemes).forEach((_) => {
    const d = b.colorSchemes[_].palette, R = (I) => {
      const $ = I.split("-"), B = $[1], N = $[2];
      return m(I, d[B][N]);
    };
    if (d.mode === "light" && (P(d.common, "background", "#fff"), P(d.common, "onBackground", "#000")), d.mode === "dark" && (P(d.common, "background", "#000"), P(d.common, "onBackground", "#fff")), ep(d, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), d.mode === "light") {
      P(d.Alert, "errorColor", le(d.error.light, 0.6)), P(d.Alert, "infoColor", le(d.info.light, 0.6)), P(d.Alert, "successColor", le(d.success.light, 0.6)), P(d.Alert, "warningColor", le(d.warning.light, 0.6)), P(d.Alert, "errorFilledBg", R("palette-error-main")), P(d.Alert, "infoFilledBg", R("palette-info-main")), P(d.Alert, "successFilledBg", R("palette-success-main")), P(d.Alert, "warningFilledBg", R("palette-warning-main")), P(d.Alert, "errorFilledColor", Ke(() => d.getContrastText(d.error.main))), P(d.Alert, "infoFilledColor", Ke(() => d.getContrastText(d.info.main))), P(d.Alert, "successFilledColor", Ke(() => d.getContrastText(d.success.main))), P(d.Alert, "warningFilledColor", Ke(() => d.getContrastText(d.warning.main))), P(d.Alert, "errorStandardBg", ue(d.error.light, 0.9)), P(d.Alert, "infoStandardBg", ue(d.info.light, 0.9)), P(d.Alert, "successStandardBg", ue(d.success.light, 0.9)), P(d.Alert, "warningStandardBg", ue(d.warning.light, 0.9)), P(d.Alert, "errorIconColor", R("palette-error-main")), P(d.Alert, "infoIconColor", R("palette-info-main")), P(d.Alert, "successIconColor", R("palette-success-main")), P(d.Alert, "warningIconColor", R("palette-warning-main")), P(d.AppBar, "defaultBg", R("palette-grey-100")), P(d.Avatar, "defaultBg", R("palette-grey-400")), P(d.Button, "inheritContainedBg", R("palette-grey-300")), P(d.Button, "inheritContainedHoverBg", R("palette-grey-A100")), P(d.Chip, "defaultBorder", R("palette-grey-400")), P(d.Chip, "defaultAvatarColor", R("palette-grey-700")), P(d.Chip, "defaultIconColor", R("palette-grey-700")), P(d.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), P(d.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), P(d.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), P(d.LinearProgress, "primaryBg", ue(d.primary.main, 0.62)), P(d.LinearProgress, "secondaryBg", ue(d.secondary.main, 0.62)), P(d.LinearProgress, "errorBg", ue(d.error.main, 0.62)), P(d.LinearProgress, "infoBg", ue(d.info.main, 0.62)), P(d.LinearProgress, "successBg", ue(d.success.main, 0.62)), P(d.LinearProgress, "warningBg", ue(d.warning.main, 0.62)), P(d.Skeleton, "bg", `rgba(${R("palette-text-primaryChannel")} / 0.11)`), P(d.Slider, "primaryTrack", ue(d.primary.main, 0.62)), P(d.Slider, "secondaryTrack", ue(d.secondary.main, 0.62)), P(d.Slider, "errorTrack", ue(d.error.main, 0.62)), P(d.Slider, "infoTrack", ue(d.info.main, 0.62)), P(d.Slider, "successTrack", ue(d.success.main, 0.62)), P(d.Slider, "warningTrack", ue(d.warning.main, 0.62));
      const I = Wn(d.background.default, 0.8);
      P(d.SnackbarContent, "bg", I), P(d.SnackbarContent, "color", Ke(() => d.getContrastText(I))), P(d.SpeedDialAction, "fabHoverBg", Wn(d.background.paper, 0.15)), P(d.StepConnector, "border", R("palette-grey-400")), P(d.StepContent, "border", R("palette-grey-400")), P(d.Switch, "defaultColor", R("palette-common-white")), P(d.Switch, "defaultDisabledColor", R("palette-grey-100")), P(d.Switch, "primaryDisabledColor", ue(d.primary.main, 0.62)), P(d.Switch, "secondaryDisabledColor", ue(d.secondary.main, 0.62)), P(d.Switch, "errorDisabledColor", ue(d.error.main, 0.62)), P(d.Switch, "infoDisabledColor", ue(d.info.main, 0.62)), P(d.Switch, "successDisabledColor", ue(d.success.main, 0.62)), P(d.Switch, "warningDisabledColor", ue(d.warning.main, 0.62)), P(d.TableCell, "border", ue(Vn(d.divider, 1), 0.88)), P(d.Tooltip, "bg", Vn(d.grey[700], 0.92));
    }
    if (d.mode === "dark") {
      P(d.Alert, "errorColor", ue(d.error.light, 0.6)), P(d.Alert, "infoColor", ue(d.info.light, 0.6)), P(d.Alert, "successColor", ue(d.success.light, 0.6)), P(d.Alert, "warningColor", ue(d.warning.light, 0.6)), P(d.Alert, "errorFilledBg", R("palette-error-dark")), P(d.Alert, "infoFilledBg", R("palette-info-dark")), P(d.Alert, "successFilledBg", R("palette-success-dark")), P(d.Alert, "warningFilledBg", R("palette-warning-dark")), P(d.Alert, "errorFilledColor", Ke(() => d.getContrastText(d.error.dark))), P(d.Alert, "infoFilledColor", Ke(() => d.getContrastText(d.info.dark))), P(d.Alert, "successFilledColor", Ke(() => d.getContrastText(d.success.dark))), P(d.Alert, "warningFilledColor", Ke(() => d.getContrastText(d.warning.dark))), P(d.Alert, "errorStandardBg", le(d.error.light, 0.9)), P(d.Alert, "infoStandardBg", le(d.info.light, 0.9)), P(d.Alert, "successStandardBg", le(d.success.light, 0.9)), P(d.Alert, "warningStandardBg", le(d.warning.light, 0.9)), P(d.Alert, "errorIconColor", R("palette-error-main")), P(d.Alert, "infoIconColor", R("palette-info-main")), P(d.Alert, "successIconColor", R("palette-success-main")), P(d.Alert, "warningIconColor", R("palette-warning-main")), P(d.AppBar, "defaultBg", R("palette-grey-900")), P(d.AppBar, "darkBg", R("palette-background-paper")), P(d.AppBar, "darkColor", R("palette-text-primary")), P(d.Avatar, "defaultBg", R("palette-grey-600")), P(d.Button, "inheritContainedBg", R("palette-grey-800")), P(d.Button, "inheritContainedHoverBg", R("palette-grey-700")), P(d.Chip, "defaultBorder", R("palette-grey-700")), P(d.Chip, "defaultAvatarColor", R("palette-grey-300")), P(d.Chip, "defaultIconColor", R("palette-grey-300")), P(d.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), P(d.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), P(d.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), P(d.LinearProgress, "primaryBg", le(d.primary.main, 0.5)), P(d.LinearProgress, "secondaryBg", le(d.secondary.main, 0.5)), P(d.LinearProgress, "errorBg", le(d.error.main, 0.5)), P(d.LinearProgress, "infoBg", le(d.info.main, 0.5)), P(d.LinearProgress, "successBg", le(d.success.main, 0.5)), P(d.LinearProgress, "warningBg", le(d.warning.main, 0.5)), P(d.Skeleton, "bg", `rgba(${R("palette-text-primaryChannel")} / 0.13)`), P(d.Slider, "primaryTrack", le(d.primary.main, 0.5)), P(d.Slider, "secondaryTrack", le(d.secondary.main, 0.5)), P(d.Slider, "errorTrack", le(d.error.main, 0.5)), P(d.Slider, "infoTrack", le(d.info.main, 0.5)), P(d.Slider, "successTrack", le(d.success.main, 0.5)), P(d.Slider, "warningTrack", le(d.warning.main, 0.5));
      const I = Wn(d.background.default, 0.98);
      P(d.SnackbarContent, "bg", I), P(d.SnackbarContent, "color", Ke(() => d.getContrastText(I))), P(d.SpeedDialAction, "fabHoverBg", Wn(d.background.paper, 0.15)), P(d.StepConnector, "border", R("palette-grey-600")), P(d.StepContent, "border", R("palette-grey-600")), P(d.Switch, "defaultColor", R("palette-grey-300")), P(d.Switch, "defaultDisabledColor", R("palette-grey-600")), P(d.Switch, "primaryDisabledColor", le(d.primary.main, 0.55)), P(d.Switch, "secondaryDisabledColor", le(d.secondary.main, 0.55)), P(d.Switch, "errorDisabledColor", le(d.error.main, 0.55)), P(d.Switch, "infoDisabledColor", le(d.info.main, 0.55)), P(d.Switch, "successDisabledColor", le(d.success.main, 0.55)), P(d.Switch, "warningDisabledColor", le(d.warning.main, 0.55)), P(d.TableCell, "border", le(Vn(d.divider, 1), 0.68)), P(d.Tooltip, "bg", Vn(d.grey[700], 0.92));
    }
    at(d.background, "default"), at(d.background, "paper"), at(d.common, "background"), at(d.common, "onBackground"), at(d, "divider"), Object.keys(d).forEach((I) => {
      const $ = d[I];
      I !== "tonalOffset" && $ && typeof $ == "object" && ($.main && P(d[I], "mainChannel", sn(cn($.main))), $.light && P(d[I], "lightChannel", sn(cn($.light))), $.dark && P(d[I], "darkChannel", sn(cn($.dark))), $.contrastText && P(d[I], "contrastTextChannel", sn(cn($.contrastText))), I === "text" && (at(d[I], "primary"), at(d[I], "secondary")), I === "action" && ($.active && at(d[I], "active"), $.selected && at(d[I], "selected")));
    });
  }), b = t.reduce((_, d) => Ne(_, d), b);
  const x = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: Zf(b)
  }, {
    vars: w,
    generateThemeVars: O,
    generateStyleSheets: j
  } = Cf(b, x);
  return b.vars = w, Object.entries(b.colorSchemes[b.defaultColorScheme]).forEach(([_, d]) => {
    b[_] = d;
  }), b.generateThemeVars = O, b.generateStyleSheets = j, b.generateSpacing = function() {
    return ps(u.spacing, Bo(this));
  }, b.getColorSchemeSelector = Of(c), b.spacing = b.generateSpacing(), b.shouldSkipGeneratingVar = s, b.unstable_sxConfig = {
    ...Rn,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, b.unstable_sx = function(d) {
    return Ot({
      sx: d,
      theme: this
    });
  }, b.toRuntimeSource = xs, b;
}
function ia(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Go({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function ws(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: o = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = n == null ? void 0 : n.mode,
    ...s
  } = e, c = i || "light", l = o == null ? void 0 : o[c], u = {
    ...o,
    ...n ? {
      [c]: {
        ...typeof l != "boolean" && l,
        palette: n
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return po(e, ...t);
    let p = n;
    "palette" in e || u[c] && (u[c] !== !0 ? p = u[c].palette : c === "dark" && (p = {
      mode: "dark"
    }));
    const h = po({
      ...e,
      palette: p
    }, ...t);
    return h.defaultColorScheme = c, h.colorSchemes = u, h.palette.mode === "light" && (h.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: h.palette
    }, ia(h, "dark", u.dark)), h.palette.mode === "dark" && (h.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: h.palette
    }, ia(h, "light", u.light)), h;
  }
  return !n && !("light" in u) && c === "light" && (u.light = !0), rp({
    ...s,
    colorSchemes: u,
    defaultColorScheme: c,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Ss = ws(), Ko = "$$material";
function Nn() {
  const e = ds(Ss);
  return process.env.NODE_ENV !== "production" && S.useDebugValue(e), e[Ko] || e;
}
function op(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Cs = (e) => op(e) && e !== "classes", fe = pf({
  themeId: Ko,
  defaultTheme: Ss,
  rootShouldForwardProp: Cs
});
function ip() {
  return Xa;
}
const Ge = Ef;
process.env.NODE_ENV !== "production" && (a.node, a.object.isRequired);
function Pe(e) {
  return xf(e);
}
class pr {
  constructor() {
    Zt(this, "mountEffect", () => {
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
    return new pr();
  }
  static use() {
    const t = Va(pr.create).current, [n, r] = S.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, S.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = sp(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function ap() {
  return pr.use();
}
function sp() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
function Os(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function mo(e, t) {
  return mo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, mo(e, t);
}
function Ps(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, mo(e, t);
}
const aa = {
  disabled: !1
};
var cp = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.shape({
  enter: a.number,
  exit: a.number,
  appear: a.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && a.oneOfType([a.string, a.shape({
  enter: a.string,
  exit: a.string,
  active: a.string
}), a.shape({
  enter: a.string,
  enterDone: a.string,
  enterActive: a.string,
  exit: a.string,
  exitDone: a.string,
  exitActive: a.string
})]);
const dr = ct.createContext(null);
var lp = function(t) {
  return t.scrollTop;
}, ln = "unmounted", Tt = "exited", wt = "entering", Dt = "entered", go = "exiting", ot = /* @__PURE__ */ function(e) {
  Ps(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = o, c = s && !s.isMounting ? r.enter : r.appear, l;
    return i.appearStatus = null, r.in ? c ? (l = Tt, i.appearStatus = wt) : l = Dt : r.unmountOnExit || r.mountOnEnter ? l = ln : l = Tt, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === ln ? {
      status: Tt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== wt && s !== Dt && (i = wt) : (s === wt || s === Dt) && (i = go);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, i, s, c;
    return i = s = c = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, c = o.appear !== void 0 ? o.appear : s), {
      exit: i,
      enter: s,
      appear: c
    };
  }, n.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === wt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Bn.findDOMNode(this);
          s && lp(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Tt && this.setState({
      status: ln
    });
  }, n.performEnter = function(o) {
    var i = this, s = this.props.enter, c = this.context ? this.context.isMounting : o, l = this.props.nodeRef ? [c] : [Bn.findDOMNode(this), c], u = l[0], p = l[1], h = this.getTimeouts(), m = c ? h.appear : h.enter;
    if (!o && !s || aa.disabled) {
      this.safeSetState({
        status: Dt
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, p), this.safeSetState({
      status: wt
    }, function() {
      i.props.onEntering(u, p), i.onTransitionEnd(m, function() {
        i.safeSetState({
          status: Dt
        }, function() {
          i.props.onEntered(u, p);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), c = this.props.nodeRef ? void 0 : Bn.findDOMNode(this);
    if (!i || aa.disabled) {
      this.safeSetState({
        status: Tt
      }, function() {
        o.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: go
    }, function() {
      o.props.onExiting(c), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: Tt
        }, function() {
          o.props.onExited(c);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, n.setNextCallback = function(o) {
    var i = this, s = !0;
    return this.nextCallback = function(c) {
      s && (s = !1, i.nextCallback = null, o(c));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : Bn.findDOMNode(this), c = o == null && !this.props.addEndListener;
    if (!s || c) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], u = l[0], p = l[1];
      this.props.addEndListener(u, p);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === ln)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var c = Os(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ct.createElement(dr.Provider, {
        value: null
      }, typeof s == "function" ? s(o, c) : ct.cloneElement(ct.Children.only(s), c))
    );
  }, t;
}(ct.Component);
ot.contextType = dr;
ot.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: a.shape({
    current: typeof Element > "u" ? a.any : function(e, t, n, r, o, i) {
      var s = e[t];
      return a.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, n, r, o, i);
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
  children: a.oneOfType([a.func.isRequired, a.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: a.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: a.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: a.bool,
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
  appear: a.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: a.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: a.bool,
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
    var n = cp;
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
  addEndListener: a.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: a.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: a.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: a.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: a.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: a.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: a.func
} : {};
function Mt() {
}
ot.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Mt,
  onEntering: Mt,
  onEntered: Mt,
  onExit: Mt,
  onExiting: Mt,
  onExited: Mt
};
ot.UNMOUNTED = ln;
ot.EXITED = Tt;
ot.ENTERING = wt;
ot.ENTERED = Dt;
ot.EXITING = go;
function up(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Xo(e, t) {
  var n = function(i) {
    return t && Kn(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Pc.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function fp(e, t) {
  e = e || {}, t = t || {};
  function n(p) {
    return p in t ? t[p] : e[p];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (r[i] = o, o = []) : o.push(i);
  var s, c = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var u = r[l][s];
        c[r[l][s]] = n(u);
      }
    c[l] = n(l);
  }
  for (s = 0; s < o.length; s++)
    c[o[s]] = n(o[s]);
  return c;
}
function St(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function pp(e, t) {
  return Xo(e.children, function(n) {
    return Xn(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: St(n, "appear", e),
      enter: St(n, "enter", e),
      exit: St(n, "exit", e)
    });
  });
}
function dp(e, t, n) {
  var r = Xo(e.children), o = fp(t, r);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (Kn(s)) {
      var c = i in t, l = i in r, u = t[i], p = Kn(u) && !u.props.in;
      l && (!c || p) ? o[i] = Xn(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: St(s, "exit", e),
        enter: St(s, "enter", e)
      }) : !l && c && !p ? o[i] = Xn(s, {
        in: !1
      }) : l && c && Kn(u) && (o[i] = Xn(s, {
        onExited: n.bind(null, s),
        in: u.props.in,
        exit: St(s, "exit", e),
        enter: St(s, "enter", e)
      }));
    }
  }), o;
}
var hp = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, mp = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Qo = /* @__PURE__ */ function(e) {
  Ps(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = i.handleExited.bind(up(i));
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
    var s = i.children, c = i.handleExited, l = i.firstRender;
    return {
      children: l ? pp(o, c) : dp(o, s, c),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var s = Xo(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var l = ur({}, c.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, c = Os(o, ["component", "childFactory"]), l = this.state.contextValue, u = hp(this.state.children).map(s);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ ct.createElement(dr.Provider, {
      value: l
    }, u) : /* @__PURE__ */ ct.createElement(dr.Provider, {
      value: l
    }, /* @__PURE__ */ ct.createElement(i, c, u));
  }, t;
}(ct.Component);
Qo.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: a.any,
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
  children: a.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: a.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: a.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: a.bool,
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
  childFactory: a.func
} : {};
Qo.defaultProps = mp;
function Rs(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: c,
    onExited: l,
    timeout: u
  } = e, [p, h] = S.useState(!1), m = ae(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), y = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, g = ae(n.child, p && n.childLeaving, r && n.childPulsate);
  return !c && !p && h(!0), S.useEffect(() => {
    if (!c && l != null) {
      const f = setTimeout(l, u);
      return () => {
        clearTimeout(f);
      };
    }
  }, [l, c, u]), /* @__PURE__ */ U("span", {
    className: m,
    style: y,
    children: /* @__PURE__ */ U("span", {
      className: g
    })
  });
}
process.env.NODE_ENV !== "production" && (Rs.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object.isRequired,
  className: a.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: a.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: a.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: a.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: a.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: a.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: a.number,
  /**
   * exit delay
   */
  timeout: a.number.isRequired
});
const Be = we("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), yo = 550, gp = 80, yp = $n`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, vp = $n`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, bp = $n`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, xp = fe("span", {
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
}), Ep = fe(Rs, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Be.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${yp};
    animation-duration: ${yo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Be.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Be.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Be.childLeaving} {
    opacity: 0;
    animation-name: ${vp};
    animation-duration: ${yo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Be.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${bp};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, ks = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Pe({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s,
    ...c
  } = r, [l, u] = S.useState([]), p = S.useRef(0), h = S.useRef(null);
  S.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [l]);
  const m = S.useRef(!1), y = _t(), g = S.useRef(null), f = S.useRef(null), v = S.useCallback((b) => {
    const {
      pulsate: x,
      rippleX: w,
      rippleY: O,
      rippleSize: j,
      cb: _
    } = b;
    u((d) => [...d, /* @__PURE__ */ U(Ep, {
      classes: {
        ripple: ae(i.ripple, Be.ripple),
        rippleVisible: ae(i.rippleVisible, Be.rippleVisible),
        ripplePulsate: ae(i.ripplePulsate, Be.ripplePulsate),
        child: ae(i.child, Be.child),
        childLeaving: ae(i.childLeaving, Be.childLeaving),
        childPulsate: ae(i.childPulsate, Be.childPulsate)
      },
      timeout: yo,
      pulsate: x,
      rippleX: w,
      rippleY: O,
      rippleSize: j
    }, p.current)]), p.current += 1, h.current = _;
  }, [i]), E = S.useCallback((b = {}, x = {}, w = () => {
  }) => {
    const {
      pulsate: O = !1,
      center: j = o || x.pulsate,
      fakeElement: _ = !1
      // For test purposes
    } = x;
    if ((b == null ? void 0 : b.type) === "mousedown" && m.current) {
      m.current = !1;
      return;
    }
    (b == null ? void 0 : b.type) === "touchstart" && (m.current = !0);
    const d = _ ? null : f.current, R = d ? d.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let I, $, B;
    if (j || b === void 0 || b.clientX === 0 && b.clientY === 0 || !b.clientX && !b.touches)
      I = Math.round(R.width / 2), $ = Math.round(R.height / 2);
    else {
      const {
        clientX: N,
        clientY: A
      } = b.touches && b.touches.length > 0 ? b.touches[0] : b;
      I = Math.round(N - R.left), $ = Math.round(A - R.top);
    }
    if (j)
      B = Math.sqrt((2 * R.width ** 2 + R.height ** 2) / 3), B % 2 === 0 && (B += 1);
    else {
      const N = Math.max(Math.abs((d ? d.clientWidth : 0) - I), I) * 2 + 2, A = Math.max(Math.abs((d ? d.clientHeight : 0) - $), $) * 2 + 2;
      B = Math.sqrt(N ** 2 + A ** 2);
    }
    b != null && b.touches ? g.current === null && (g.current = () => {
      v({
        pulsate: O,
        rippleX: I,
        rippleY: $,
        rippleSize: B,
        cb: w
      });
    }, y.start(gp, () => {
      g.current && (g.current(), g.current = null);
    })) : v({
      pulsate: O,
      rippleX: I,
      rippleY: $,
      rippleSize: B,
      cb: w
    });
  }, [o, v, y]), C = S.useCallback(() => {
    E({}, {
      pulsate: !0
    });
  }, [E]), T = S.useCallback((b, x) => {
    if (y.clear(), (b == null ? void 0 : b.type) === "touchend" && g.current) {
      g.current(), g.current = null, y.start(0, () => {
        T(b, x);
      });
      return;
    }
    g.current = null, u((w) => w.length > 0 ? w.slice(1) : w), h.current = x;
  }, [y]);
  return S.useImperativeHandle(n, () => ({
    pulsate: C,
    start: E,
    stop: T
  }), [C, E, T]), /* @__PURE__ */ U(xp, {
    className: ae(Be.root, i.root, s),
    ref: f,
    ...c,
    children: /* @__PURE__ */ U(Qo, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (ks.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: a.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string
});
function Tp(e) {
  return Te("MuiButtonBase", e);
}
const wp = we("MuiButtonBase", ["root", "disabled", "focusVisible"]), Sp = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, s = Me({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Tp, o);
  return n && r && (s.root += ` ${r}`), s;
}, Cp = fe("button", {
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
  [`&.${wp.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), $s = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Pe({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: c,
    component: l = "button",
    disabled: u = !1,
    disableRipple: p = !1,
    disableTouchRipple: h = !1,
    focusRipple: m = !1,
    focusVisibleClassName: y,
    LinkComponent: g = "a",
    onBlur: f,
    onClick: v,
    onContextMenu: E,
    onDragLeave: C,
    onFocus: T,
    onFocusVisible: b,
    onKeyDown: x,
    onKeyUp: w,
    onMouseDown: O,
    onMouseLeave: j,
    onMouseUp: _,
    onTouchEnd: d,
    onTouchMove: R,
    onTouchStart: I,
    tabIndex: $ = 0,
    TouchRippleProps: B,
    touchRippleRef: N,
    type: A,
    ...L
  } = r, Z = S.useRef(null), K = ap(), k = Ve(K.ref, N), [D, F] = S.useState(!1);
  u && D && F(!1), S.useImperativeHandle(o, () => ({
    focusVisible: () => {
      F(!0), Z.current.focus();
    }
  }), []);
  const W = K.shouldMount && !p && !u;
  S.useEffect(() => {
    D && m && !p && K.pulsate();
  }, [p, m, D, K]);
  const V = st(K, "start", O, h), z = st(K, "stop", E, h), q = st(K, "stop", C, h), H = st(K, "stop", _, h), Y = st(K, "stop", (X) => {
    D && X.preventDefault(), j && j(X);
  }, h), Q = st(K, "start", I, h), G = st(K, "stop", d, h), ie = st(K, "stop", R, h), M = st(K, "stop", (X) => {
    cr(X.target) || F(!1), f && f(X);
  }, !1), pe = dt((X) => {
    Z.current || (Z.current = X.currentTarget), cr(X.target) && (F(!0), b && b(X)), T && T(X);
  }), xe = () => {
    const X = Z.current;
    return l && l !== "button" && !(X.tagName === "A" && X.href);
  }, qe = dt((X) => {
    m && !X.repeat && D && X.key === " " && K.stop(X, () => {
      K.start(X);
    }), X.target === X.currentTarget && xe() && X.key === " " && X.preventDefault(), x && x(X), X.target === X.currentTarget && xe() && X.key === "Enter" && !u && (X.preventDefault(), v && v(X));
  }), vt = dt((X) => {
    m && X.key === " " && D && !X.defaultPrevented && K.stop(X, () => {
      K.pulsate(X);
    }), w && w(X), v && X.target === X.currentTarget && xe() && X.key === " " && !X.defaultPrevented && v(X);
  });
  let De = l;
  De === "button" && (L.href || L.to) && (De = g);
  const _e = {};
  De === "button" ? (_e.type = A === void 0 ? "button" : A, _e.disabled = u) : (!L.href && !L.to && (_e.role = "button"), u && (_e["aria-disabled"] = u));
  const bt = Ve(n, Z), Re = {
    ...r,
    centerRipple: i,
    component: l,
    disabled: u,
    disableRipple: p,
    disableTouchRipple: h,
    focusRipple: m,
    tabIndex: $,
    focusVisible: D
  }, it = Sp(Re);
  return /* @__PURE__ */ et(Cp, {
    as: De,
    className: ae(it.root, c),
    ownerState: Re,
    onBlur: M,
    onClick: v,
    onContextMenu: z,
    onFocus: pe,
    onKeyDown: qe,
    onKeyUp: vt,
    onMouseDown: V,
    onMouseLeave: Y,
    onMouseUp: H,
    onDragLeave: q,
    onTouchEnd: G,
    onTouchMove: ie,
    onTouchStart: Q,
    ref: bt,
    tabIndex: u ? -1 : $,
    type: A,
    ..._e,
    ...L,
    children: [s, W ? /* @__PURE__ */ U(ks, {
      ref: k,
      center: i,
      ...B
    }) : null]
  });
});
function st(e, t, n, r = !1) {
  return dt((o) => (n && n(o), r || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && ($s.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: _o,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: a.bool,
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Kc,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: a.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: a.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: a.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: a.string,
  /**
   * @ignore
   */
  href: a.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: a.elementType,
  /**
   * @ignore
   */
  onBlur: a.func,
  /**
   * @ignore
   */
  onClick: a.func,
  /**
   * @ignore
   */
  onContextMenu: a.func,
  /**
   * @ignore
   */
  onDragLeave: a.func,
  /**
   * @ignore
   */
  onFocus: a.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: a.func,
  /**
   * @ignore
   */
  onKeyDown: a.func,
  /**
   * @ignore
   */
  onKeyUp: a.func,
  /**
   * @ignore
   */
  onMouseDown: a.func,
  /**
   * @ignore
   */
  onMouseLeave: a.func,
  /**
   * @ignore
   */
  onMouseUp: a.func,
  /**
   * @ignore
   */
  onTouchEnd: a.func,
  /**
   * @ignore
   */
  onTouchMove: a.func,
  /**
   * @ignore
   */
  onTouchStart: a.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * @default 0
   */
  tabIndex: a.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: a.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: a.oneOfType([a.func, a.shape({
    current: a.shape({
      pulsate: a.func.isRequired,
      start: a.func.isRequired,
      stop: a.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: a.oneOfType([a.oneOf(["button", "reset", "submit"]), a.string])
});
function Op(e) {
  return typeof e.main == "string";
}
function Pp(e, t = []) {
  if (!Op(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Jo(e = []) {
  return ([, t]) => t && Pp(t, e);
}
function Rp(e) {
  return Te("MuiCircularProgress", e);
}
we("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const pt = 44, vo = $n`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, bo = $n`
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
`, kp = typeof vo != "string" ? Ho`
        animation: ${vo} 1.4s linear infinite;
      ` : null, $p = typeof bo != "string" ? Ho`
        animation: ${bo} 1.4s ease-in-out infinite;
      ` : null, Np = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, i = {
    root: ["root", n, `color${oe(r)}`],
    svg: ["svg"],
    circle: ["circle", `circle${oe(n)}`, o && "circleDisableShrink"]
  };
  return Me(i, Rp, t);
}, Ap = fe("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${oe(n.color)}`]];
  }
})(Ge(({
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
    style: kp || {
      animation: `${vo} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Jo()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), Ip = fe("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), Mp = fe("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${oe(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(Ge(({
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
    style: $p || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${bo} 1.4s ease-in-out infinite`
    }
  }]
}))), Ns = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Pe({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: s = !1,
    size: c = 40,
    style: l,
    thickness: u = 3.6,
    value: p = 0,
    variant: h = "indeterminate",
    ...m
  } = r, y = {
    ...r,
    color: i,
    disableShrink: s,
    size: c,
    thickness: u,
    value: p,
    variant: h
  }, g = Np(y), f = {}, v = {}, E = {};
  if (h === "determinate") {
    const C = 2 * Math.PI * ((pt - u) / 2);
    f.strokeDasharray = C.toFixed(3), E["aria-valuenow"] = Math.round(p), f.strokeDashoffset = `${((100 - p) / 100 * C).toFixed(3)}px`, v.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ U(Ap, {
    className: ae(g.root, o),
    style: {
      width: c,
      height: c,
      ...v,
      ...l
    },
    ownerState: y,
    ref: n,
    role: "progressbar",
    ...E,
    ...m,
    children: /* @__PURE__ */ U(Ip, {
      className: g.svg,
      ownerState: y,
      viewBox: `${pt / 2} ${pt / 2} ${pt} ${pt}`,
      children: /* @__PURE__ */ U(Mp, {
        className: g.circle,
        style: f,
        ownerState: y,
        cx: pt,
        cy: pt,
        r: (pt - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Ns.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: a.oneOfType([a.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), a.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Ht(a.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: a.oneOfType([a.number, a.string]),
  /**
   * @ignore
   */
  style: a.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: a.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: a.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: a.oneOf(["determinate", "indeterminate"])
});
function Dp(e) {
  return Te("MuiButton", e);
}
const Et = we("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), As = /* @__PURE__ */ S.createContext({});
process.env.NODE_ENV !== "production" && (As.displayName = "ButtonGroupContext");
const Is = /* @__PURE__ */ S.createContext(void 0);
process.env.NODE_ENV !== "production" && (Is.displayName = "ButtonGroupButtonContext");
const _p = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    loading: s,
    loadingPosition: c,
    classes: l
  } = e, u = {
    root: ["root", s && "loading", i, `${i}${oe(t)}`, `size${oe(o)}`, `${i}Size${oe(o)}`, `color${oe(t)}`, n && "disableElevation", r && "fullWidth", s && `loadingPosition${oe(c)}`],
    startIcon: ["icon", "startIcon", `iconSize${oe(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${oe(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, p = Me(u, Dp, l);
  return {
    ...l,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...p
  };
}, Ms = [{
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
}], jp = fe($s, {
  shouldForwardProp: (e) => Cs(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${oe(n.color)}`], t[`size${oe(n.size)}`], t[`${n.variant}Size${oe(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(Ge(({
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
    [`&.${Et.disabled}`]: {
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
        [`&.${Et.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Et.disabled}`]: {
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
        [`&.${Et.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Jo()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[r].main,
        "--variant-outlinedColor": (e.vars || e).palette[r].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.5)` : Je(e.palette[r].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[r].contrastText,
        "--variant-containedBg": (e.vars || e).palette[r].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[r].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette[r].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[r].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette[r].main, e.palette.action.hoverOpacity)
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
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${Et.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Et.disabled}`]: {
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
        [`&.${Et.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), Bp = fe("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, n.loading && t.startIconLoadingStart, t[`iconSize${oe(n.size)}`]];
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
  }, ...Ms]
})), Lp = fe("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, n.loading && t.endIconLoadingEnd, t[`iconSize${oe(n.size)}`]];
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
  }, ...Ms]
})), Fp = fe("span", {
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
})), sa = fe("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, t) => t.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Ds = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = S.useContext(As), o = S.useContext(Is), i = ir(r, t), s = Pe({
    props: i,
    name: "MuiButton"
  }), {
    children: c,
    color: l = "primary",
    component: u = "button",
    className: p,
    disabled: h = !1,
    disableElevation: m = !1,
    disableFocusRipple: y = !1,
    endIcon: g,
    focusVisibleClassName: f,
    fullWidth: v = !1,
    id: E,
    loading: C = null,
    loadingIndicator: T,
    loadingPosition: b = "center",
    size: x = "medium",
    startIcon: w,
    type: O,
    variant: j = "text",
    ..._
  } = s, d = jo(E), R = T ?? /* @__PURE__ */ U(Ns, {
    "aria-labelledby": d,
    color: "inherit",
    size: 16
  }), I = {
    ...s,
    color: l,
    component: u,
    disabled: h,
    disableElevation: m,
    disableFocusRipple: y,
    fullWidth: v,
    loading: C,
    loadingIndicator: R,
    loadingPosition: b,
    size: x,
    type: O,
    variant: j
  }, $ = _p(I), B = (w || C && b === "start") && /* @__PURE__ */ U(Bp, {
    className: $.startIcon,
    ownerState: I,
    children: w || /* @__PURE__ */ U(sa, {
      className: $.loadingIconPlaceholder,
      ownerState: I
    })
  }), N = (g || C && b === "end") && /* @__PURE__ */ U(Lp, {
    className: $.endIcon,
    ownerState: I,
    children: g || /* @__PURE__ */ U(sa, {
      className: $.loadingIconPlaceholder,
      ownerState: I
    })
  }), A = o || "", L = typeof C == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ U("span", {
      className: $.loadingWrapper,
      style: {
        display: "contents"
      },
      children: C && /* @__PURE__ */ U(Fp, {
        className: $.loadingIndicator,
        ownerState: I,
        children: R
      })
    })
  ) : null;
  return /* @__PURE__ */ et(jp, {
    ownerState: I,
    className: ae(r.className, $.root, p, A),
    component: u,
    disabled: h || C,
    focusRipple: !y,
    focusVisibleClassName: ae($.focusVisible, f),
    ref: n,
    type: O,
    id: C ? d : E,
    ..._,
    classes: $,
    children: [B, b !== "end" && L, c, b === "end" && L, N]
  });
});
process.env.NODE_ENV !== "production" && (Ds.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: a.oneOfType([a.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), a.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: a.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: a.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: a.bool,
  /**
   * Element placed after the children.
   */
  endIcon: a.node,
  /**
   * @ignore
   */
  focusVisibleClassName: a.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: a.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: a.string,
  /**
   * @ignore
   */
  id: a.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: a.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: a.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: a.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: a.oneOfType([a.oneOf(["small", "medium", "large"]), a.string]),
  /**
   * Element placed before the children.
   */
  startIcon: a.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * @ignore
   */
  type: a.oneOfType([a.oneOf(["button", "reset", "submit"]), a.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: a.oneOfType([a.oneOf(["contained", "outlined", "text"]), a.string])
});
const _s = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), hr = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Zo = Object.freeze({
  ..._s,
  ...hr
}), xo = Object.freeze({
  ...Zo,
  body: "",
  hidden: !1
});
function Vp(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function ca(e, t) {
  const n = Vp(e, t);
  for (const r in xo)
    r in hr ? r in e && !(r in n) && (n[r] = hr[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
  return n;
}
function Wp(e, t) {
  const n = e.icons, r = e.aliases || /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  function i(s) {
    if (n[s])
      return o[s] = [];
    if (!(s in o)) {
      o[s] = null;
      const c = r[s] && r[s].parent, l = c && i(c);
      l && (o[s] = [c].concat(l));
    }
    return o[s];
  }
  return Object.keys(n).concat(Object.keys(r)).forEach(i), o;
}
function Up(e, t, n) {
  const r = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let i = {};
  function s(c) {
    i = ca(
      r[c] || o[c],
      i
    );
  }
  return s(t), n.forEach(s), ca(e, i);
}
function js(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    t(o, null), n.push(o);
  });
  const r = Wp(e);
  for (const o in r) {
    const i = r[o];
    i && (t(o, Up(e, o, i)), n.push(o));
  }
  return n;
}
const zp = {
  provider: "",
  aliases: {},
  not_found: {},
  ..._s
};
function Jr(e, t) {
  for (const n in t)
    if (n in e && typeof e[n] != typeof t[n])
      return !1;
  return !0;
}
function Bs(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Jr(e, zp))
    return null;
  const n = t.icons;
  for (const o in n) {
    const i = n[o];
    if (
      // Name cannot be empty
      !o || // Must have body
      typeof i.body != "string" || // Check other props
      !Jr(
        i,
        xo
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
      !Jr(
        i,
        xo
      )
    )
      return null;
  }
  return t;
}
const Ls = /^[a-z0-9]+(-[a-z0-9]+)*$/, _r = (e, t, n, r = "") => {
  const o = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (o.length < 2 || o.length > 3)
      return null;
    r = o.shift().slice(1);
  }
  if (o.length > 3 || !o.length)
    return null;
  if (o.length > 1) {
    const c = o.pop(), l = o.pop(), u = {
      // Allow provider without '@': "provider:prefix:name"
      provider: o.length > 0 ? o[0] : r,
      prefix: l,
      name: c
    };
    return t && !nr(u) ? null : u;
  }
  const i = o[0], s = i.split("-");
  if (s.length > 1) {
    const c = {
      provider: r,
      prefix: s.shift(),
      name: s.join("-")
    };
    return t && !nr(c) ? null : c;
  }
  if (n && r === "") {
    const c = {
      provider: r,
      prefix: "",
      name: i
    };
    return t && !nr(c, n) ? null : c;
  }
  return null;
}, nr = (e, t) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e.prefix === "" || e.prefix) && e.name) : !1, la = /* @__PURE__ */ Object.create(null);
function qp(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function Vt(e, t) {
  const n = la[e] || (la[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = qp(e, t));
}
function Fs(e, t) {
  return Bs(t) ? js(t, (n, r) => {
    r ? e.icons[n] = r : e.missing.add(n);
  }) : [];
}
function Hp(e, t, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[t] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let xn = !1;
function Vs(e) {
  return typeof e == "boolean" && (xn = e), xn;
}
function ua(e) {
  const t = typeof e == "string" ? _r(e, !0, xn) : e;
  if (t) {
    const n = Vt(t.provider, t.prefix), r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function Yp(e, t) {
  const n = _r(e, !0, xn);
  if (!n)
    return !1;
  const r = Vt(n.provider, n.prefix);
  return t ? Hp(r, n.name, t) : (r.missing.add(n.name), !0);
}
function Gp(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), xn && !t && !e.prefix) {
    let o = !1;
    return Bs(e) && (e.prefix = "", js(e, (i, s) => {
      Yp(i, s) && (o = !0);
    })), o;
  }
  const n = e.prefix;
  if (!nr({
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = Vt(t, n);
  return !!Fs(r, e);
}
const Ws = Object.freeze({
  width: null,
  height: null
}), Us = Object.freeze({
  // Dimensions
  ...Ws,
  // Transformations
  ...hr
}), Kp = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Xp = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function fa(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const r = e.split(Kp);
  if (r === null || !r.length)
    return e;
  const o = [];
  let i = r.shift(), s = Xp.test(i);
  for (; ; ) {
    if (s) {
      const c = parseFloat(i);
      isNaN(c) ? o.push(i) : o.push(Math.ceil(c * t * n) / n);
    } else
      o.push(i);
    if (i = r.shift(), i === void 0)
      return o.join("");
    s = !s;
  }
}
function Qp(e, t = "defs") {
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
function Jp(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function Zp(e, t, n) {
  const r = Qp(e);
  return Jp(r.defs, t + r.content + n);
}
const ed = (e) => e === "unset" || e === "undefined" || e === "none";
function td(e, t) {
  const n = {
    ...Zo,
    ...e
  }, r = {
    ...Us,
    ...t
  }, o = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let i = n.body;
  [n, r].forEach((f) => {
    const v = [], E = f.hFlip, C = f.vFlip;
    let T = f.rotate;
    E ? C ? T += 2 : (v.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), v.push("scale(-1 1)"), o.top = o.left = 0) : C && (v.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), v.push("scale(1 -1)"), o.top = o.left = 0);
    let b;
    switch (T < 0 && (T -= Math.floor(T / 4) * 4), T = T % 4, T) {
      case 1:
        b = o.height / 2 + o.top, v.unshift(
          "rotate(90 " + b.toString() + " " + b.toString() + ")"
        );
        break;
      case 2:
        v.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        b = o.width / 2 + o.left, v.unshift(
          "rotate(-90 " + b.toString() + " " + b.toString() + ")"
        );
        break;
    }
    T % 2 === 1 && (o.left !== o.top && (b = o.left, o.left = o.top, o.top = b), o.width !== o.height && (b = o.width, o.width = o.height, o.height = b)), v.length && (i = Zp(
      i,
      '<g transform="' + v.join(" ") + '">',
      "</g>"
    ));
  });
  const s = r.width, c = r.height, l = o.width, u = o.height;
  let p, h;
  s === null ? (h = c === null ? "1em" : c === "auto" ? u : c, p = fa(h, l / u)) : (p = s === "auto" ? l : s, h = c === null ? fa(p, u / l) : c === "auto" ? u : c);
  const m = {}, y = (f, v) => {
    ed(v) || (m[f] = v.toString());
  };
  y("width", p), y("height", h);
  const g = [o.left, o.top, l, u];
  return m.viewBox = g.join(" "), {
    attributes: m,
    viewBox: g,
    body: i
  };
}
const nd = /\sid="(\S+)"/g, rd = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let od = 0;
function id(e, t = rd) {
  const n = [];
  let r;
  for (; r = nd.exec(e); )
    n.push(r[1]);
  if (!n.length)
    return e;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((i) => {
    const s = typeof t == "function" ? t(i) : t + (od++).toString(), c = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
      "$1" + s + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const Eo = /* @__PURE__ */ Object.create(null);
function ad(e, t) {
  Eo[e] = t;
}
function To(e) {
  return Eo[e] || Eo[""];
}
function ei(e) {
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
const ti = /* @__PURE__ */ Object.create(null), nn = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], rr = [];
for (; nn.length > 0; )
  nn.length === 1 || Math.random() > 0.5 ? rr.push(nn.shift()) : rr.push(nn.pop());
ti[""] = ei({
  resources: ["https://api.iconify.design"].concat(rr)
});
function sd(e, t) {
  const n = ei(t);
  return n === null ? !1 : (ti[e] = n, !0);
}
function ni(e) {
  return ti[e];
}
const cd = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let pa = cd();
function ld(e, t) {
  const n = ni(e);
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
function ud(e) {
  return e === 404;
}
const fd = (e, t, n) => {
  const r = [], o = ld(e, t), i = "icons";
  let s = {
    type: i,
    provider: e,
    prefix: t,
    icons: []
  }, c = 0;
  return n.forEach((l, u) => {
    c += l.length + 1, c >= o && u > 0 && (r.push(s), s = {
      type: i,
      provider: e,
      prefix: t,
      icons: []
    }, c = l.length), s.icons.push(l);
  }), r.push(s), r;
};
function pd(e) {
  if (typeof e == "string") {
    const t = ni(e);
    if (t)
      return t.path;
  }
  return "/";
}
const dd = (e, t, n) => {
  if (!pa) {
    n("abort", 424);
    return;
  }
  let r = pd(t.provider);
  switch (t.type) {
    case "icons": {
      const i = t.prefix, c = t.icons.join(","), l = new URLSearchParams({
        icons: c
      });
      r += i + ".json?" + l.toString();
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
  pa(e + r).then((i) => {
    const s = i.status;
    if (s !== 200) {
      setTimeout(() => {
        n(ud(s) ? "abort" : "next", s);
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
}, hd = {
  prepare: fd,
  send: dd
};
function md(e) {
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
    const i = o.provider, s = o.prefix, c = o.name, l = n[i] || (n[i] = /* @__PURE__ */ Object.create(null)), u = l[s] || (l[s] = Vt(i, s));
    let p;
    c in u.icons ? p = t.loaded : s === "" || u.missing.has(c) ? p = t.missing : p = t.pending;
    const h = {
      provider: i,
      prefix: s,
      name: c
    };
    p.push(h);
  }), t;
}
function zs(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
  });
}
function gd(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let n = !1;
    const r = e.provider, o = e.prefix;
    t.forEach((i) => {
      const s = i.icons, c = s.pending.length;
      s.pending = s.pending.filter((l) => {
        if (l.prefix !== o)
          return !0;
        const u = l.name;
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
      }), s.pending.length !== c && (n || zs([e], i.id), i.callback(
        s.loaded.slice(0),
        s.missing.slice(0),
        s.pending.slice(0),
        i.abort
      ));
    });
  }));
}
let yd = 0;
function vd(e, t, n) {
  const r = yd++, o = zs.bind(null, n, r);
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
function bd(e, t = !0, n = !1) {
  const r = [];
  return e.forEach((o) => {
    const i = typeof o == "string" ? _r(o, t, n) : o;
    i && r.push(i);
  }), r;
}
var xd = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Ed(e, t, n, r) {
  const o = e.resources.length, i = e.random ? Math.floor(Math.random() * o) : e.index;
  let s;
  if (e.random) {
    let w = e.resources.slice(0);
    for (s = []; w.length > 1; ) {
      const O = Math.floor(Math.random() * w.length);
      s.push(w[O]), w = w.slice(0, O).concat(w.slice(O + 1));
    }
    s = s.concat(w);
  } else
    s = e.resources.slice(i).concat(e.resources.slice(0, i));
  const c = Date.now();
  let l = "pending", u = 0, p, h = null, m = [], y = [];
  typeof r == "function" && y.push(r);
  function g() {
    h && (clearTimeout(h), h = null);
  }
  function f() {
    l === "pending" && (l = "aborted"), g(), m.forEach((w) => {
      w.status === "pending" && (w.status = "aborted");
    }), m = [];
  }
  function v(w, O) {
    O && (y = []), typeof w == "function" && y.push(w);
  }
  function E() {
    return {
      startTime: c,
      payload: t,
      status: l,
      queriesSent: u,
      queriesPending: m.length,
      subscribe: v,
      abort: f
    };
  }
  function C() {
    l = "failed", y.forEach((w) => {
      w(void 0, p);
    });
  }
  function T() {
    m.forEach((w) => {
      w.status === "pending" && (w.status = "aborted");
    }), m = [];
  }
  function b(w, O, j) {
    const _ = O !== "success";
    switch (m = m.filter((d) => d !== w), l) {
      case "pending":
        break;
      case "failed":
        if (_ || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (O === "abort") {
      p = j, C();
      return;
    }
    if (_) {
      p = j, m.length || (s.length ? x() : C());
      return;
    }
    if (g(), T(), !e.random) {
      const d = e.resources.indexOf(w.resource);
      d !== -1 && d !== e.index && (e.index = d);
    }
    l = "completed", y.forEach((d) => {
      d(j);
    });
  }
  function x() {
    if (l !== "pending")
      return;
    g();
    const w = s.shift();
    if (w === void 0) {
      if (m.length) {
        h = setTimeout(() => {
          g(), l === "pending" && (T(), C());
        }, e.timeout);
        return;
      }
      C();
      return;
    }
    const O = {
      status: "pending",
      resource: w,
      callback: (j, _) => {
        b(O, j, _);
      }
    };
    m.push(O), u++, h = setTimeout(x, e.rotate), n(w, t, O.callback);
  }
  return setTimeout(x), E;
}
function qs(e) {
  const t = {
    ...xd,
    ...e
  };
  let n = [];
  function r() {
    n = n.filter((c) => c().status === "pending");
  }
  function o(c, l, u) {
    const p = Ed(
      t,
      c,
      l,
      (h, m) => {
        r(), u && u(h, m);
      }
    );
    return n.push(p), p;
  }
  function i(c) {
    return n.find((l) => c(l)) || null;
  }
  return {
    query: o,
    find: i,
    setIndex: (c) => {
      t.index = c;
    },
    getIndex: () => t.index,
    cleanup: r
  };
}
function da() {
}
const Zr = /* @__PURE__ */ Object.create(null);
function Td(e) {
  if (!Zr[e]) {
    const t = ni(e);
    if (!t)
      return;
    const n = qs(t), r = {
      config: t,
      redundancy: n
    };
    Zr[e] = r;
  }
  return Zr[e];
}
function wd(e, t, n) {
  let r, o;
  if (typeof e == "string") {
    const i = To(e);
    if (!i)
      return n(void 0, 424), da;
    o = i.send;
    const s = Td(e);
    s && (r = s.redundancy);
  } else {
    const i = ei(e);
    if (i) {
      r = qs(i);
      const s = e.resources ? e.resources[0] : "", c = To(s);
      c && (o = c.send);
    }
  }
  return !r || !o ? (n(void 0, 424), da) : r.query(t, o, n)().abort;
}
function ha() {
}
function Sd(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, gd(e);
  }));
}
function Cd(e) {
  const t = [], n = [];
  return e.forEach((r) => {
    (r.match(Ls) ? t : n).push(r);
  }), {
    valid: t,
    invalid: n
  };
}
function rn(e, t, n) {
  function r() {
    const o = e.pendingIcons;
    t.forEach((i) => {
      o && o.delete(i), e.icons[i] || e.missing.add(i);
    });
  }
  if (n && typeof n == "object")
    try {
      if (!Fs(e, n).length) {
        r();
        return;
      }
    } catch (o) {
      console.error(o);
    }
  r(), Sd(e);
}
function ma(e, t) {
  e instanceof Promise ? e.then((n) => {
    t(n);
  }).catch(() => {
    t(null);
  }) : t(e);
}
function Od(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = e, o = e.iconsToLoad;
    if (delete e.iconsToLoad, !o || !o.length)
      return;
    const i = e.loadIcon;
    if (e.loadIcons && (o.length > 1 || !i)) {
      ma(
        e.loadIcons(o, r, n),
        (p) => {
          rn(e, o, p);
        }
      );
      return;
    }
    if (i) {
      o.forEach((p) => {
        const h = i(p, r, n);
        ma(h, (m) => {
          const y = m ? {
            prefix: r,
            icons: {
              [p]: m
            }
          } : null;
          rn(e, [p], y);
        });
      });
      return;
    }
    const { valid: s, invalid: c } = Cd(o);
    if (c.length && rn(e, c, null), !s.length)
      return;
    const l = r.match(Ls) ? To(n) : null;
    if (!l) {
      rn(e, s, null);
      return;
    }
    l.prepare(n, r, s).forEach((p) => {
      wd(n, p, (h) => {
        rn(e, p.icons, h);
      });
    });
  }));
}
const Pd = (e, t) => {
  const n = bd(e, !0, Vs()), r = md(n);
  if (!r.pending.length) {
    let l = !0;
    return t && setTimeout(() => {
      l && t(
        r.loaded,
        r.missing,
        r.pending,
        ha
      );
    }), () => {
      l = !1;
    };
  }
  const o = /* @__PURE__ */ Object.create(null), i = [];
  let s, c;
  return r.pending.forEach((l) => {
    const { provider: u, prefix: p } = l;
    if (p === c && u === s)
      return;
    s = u, c = p, i.push(Vt(u, p));
    const h = o[u] || (o[u] = /* @__PURE__ */ Object.create(null));
    h[p] || (h[p] = []);
  }), r.pending.forEach((l) => {
    const { provider: u, prefix: p, name: h } = l, m = Vt(u, p), y = m.pendingIcons || (m.pendingIcons = /* @__PURE__ */ new Set());
    y.has(h) || (y.add(h), o[u][p].push(h));
  }), i.forEach((l) => {
    const u = o[l.provider][l.prefix];
    u.length && Od(l, u);
  }), t ? vd(t, r, i) : ha;
};
function Rd(e, t) {
  const n = {
    ...e
  };
  for (const r in t) {
    const o = t[r], i = typeof o;
    r in Ws ? (o === null || o && (i === "string" || i === "number")) && (n[r] = o) : i === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o);
  }
  return n;
}
const kd = /[\s,]+/;
function $d(e, t) {
  t.split(kd).forEach((n) => {
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
function Nd(e, t = 0) {
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
function Ad(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t)
    n += " " + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function Id(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Md(e) {
  return "data:image/svg+xml," + Id(e);
}
function Dd(e) {
  return 'url("' + Md(e) + '")';
}
let fn;
function _d() {
  try {
    fn = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (e) => e
    });
  } catch {
    fn = null;
  }
}
function jd(e) {
  return fn === void 0 && _d(), fn ? fn.createHTML(e) : e;
}
const Hs = {
  ...Us,
  inline: !1
}, Bd = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Ld = {
  display: "inline-block"
}, wo = {
  backgroundColor: "currentColor"
}, Ys = {
  backgroundColor: "transparent"
}, ga = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, ya = {
  WebkitMask: wo,
  mask: wo,
  background: Ys
};
for (const e in ya) {
  const t = ya[e];
  for (const n in ga)
    t[e + n] = ga[n];
}
const Fd = {
  ...Hs,
  inline: !0
};
function va(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const Vd = (e, t, n) => {
  const r = t.inline ? Fd : Hs, o = Rd(r, t), i = t.mode || "svg", s = {}, c = t.style || {}, l = {
    ...i === "svg" ? Bd : {}
  };
  if (n) {
    const v = _r(n, !1, !0);
    if (v) {
      const E = ["iconify"], C = [
        "provider",
        "prefix"
      ];
      for (const T of C)
        v[T] && E.push("iconify--" + v[T]);
      l.className = E.join(" ");
    }
  }
  for (let v in t) {
    const E = t[v];
    if (E !== void 0)
      switch (v) {
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
          l.ref = E;
          break;
        // Merge class names
        case "className":
          l[v] = (l[v] ? l[v] + " " : "") + E;
          break;
        // Boolean attributes
        case "inline":
        case "hFlip":
        case "vFlip":
          o[v] = E === !0 || E === "true" || E === 1;
          break;
        // Flip as string: 'horizontal,vertical'
        case "flip":
          typeof E == "string" && $d(o, E);
          break;
        // Color: copy to style
        case "color":
          s.color = E;
          break;
        // Rotation as string
        case "rotate":
          typeof E == "string" ? o[v] = Nd(E) : typeof E == "number" && (o[v] = E);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          E !== !0 && E !== "true" && delete l["aria-hidden"];
          break;
        // Copy missing property if it does not exist in customisations
        default:
          r[v] === void 0 && (l[v] = E);
      }
  }
  const u = td(e, o), p = u.attributes;
  if (o.inline && (s.verticalAlign = "-0.125em"), i === "svg") {
    l.style = {
      ...s,
      ...c
    }, Object.assign(l, p);
    let v = 0, E = t.id;
    return typeof E == "string" && (E = E.replace(/-/g, "_")), l.dangerouslySetInnerHTML = {
      __html: jd(id(u.body, E ? () => E + "ID" + v++ : "iconifyReact"))
    }, oo("svg", l);
  }
  const { body: h, width: m, height: y } = e, g = i === "mask" || (i === "bg" ? !1 : h.indexOf("currentColor") !== -1), f = Ad(h, {
    ...p,
    width: m + "",
    height: y + ""
  });
  return l.style = {
    ...s,
    "--svg": Dd(f),
    width: va(p.width),
    height: va(p.height),
    ...Ld,
    ...g ? wo : Ys,
    ...c
  }, oo("span", l);
};
Vs(!0);
ad("", hd);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !Gp(r)) && console.error(n);
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
          sd(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
function Gs(e) {
  const [t, n] = Qn(!!e.ssr), [r, o] = Qn({});
  function i(y) {
    if (y) {
      const g = e.icon;
      if (typeof g == "object")
        return {
          name: "",
          data: g
        };
      const f = ua(g);
      if (f)
        return {
          name: g,
          data: f
        };
    }
    return {
      name: ""
    };
  }
  const [s, c] = Qn(i(!!e.ssr));
  function l() {
    const y = r.callback;
    y && (y(), o({}));
  }
  function u(y) {
    if (JSON.stringify(s) !== JSON.stringify(y))
      return l(), c(y), !0;
  }
  function p() {
    var y;
    const g = e.icon;
    if (typeof g == "object") {
      u({
        name: "",
        data: g
      });
      return;
    }
    const f = ua(g);
    if (u({
      name: g,
      data: f
    }))
      if (f === void 0) {
        const v = Pd([g], p);
        o({
          callback: v
        });
      } else f && ((y = e.onLoad) === null || y === void 0 || y.call(e, g));
  }
  ro(() => (n(!0), l), []), ro(() => {
    t && p();
  }, [e.icon, t]);
  const { name: h, data: m } = s;
  return m ? Vd({
    ...Zo,
    ...m
  }, e, h) : e.children ? e.children : e.fallback ? e.fallback : oo("span", {});
}
const Wd = ko((e, t) => Gs({
  ...e,
  _ref: t
}));
ko((e, t) => Gs({
  inline: !0,
  ...e,
  _ref: t
}));
const Ud = we("MuiBox", ["root"]), zd = ws(), Ks = cf({
  themeId: Ko,
  defaultTheme: zd,
  defaultClassName: Ud.root,
  generateClassName: za.generate
});
process.env.NODE_ENV !== "production" && (Ks.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: a.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
const Xs = Sn(({ ref: e, icon: t, width: n = 20, color: r = "auto", sx: o, ...i }) => /* @__PURE__ */ U(
  Ks,
  {
    ssr: !0,
    ref: e,
    component: Wd,
    icon: t,
    sx: {
      width: n,
      height: n,
      flexShrink: 0,
      display: "inline-flex",
      color: (s) => r === "error" ? s.palette.error.main : r === "primary" ? s.palette.primary.main : "inherit",
      ...o
    },
    ...i
  }
));
Xs.displayName = "Button";
const So = Sn(
  ({
    sx: e,
    loading: t,
    disabled: n,
    isCircle: r,
    icon: o,
    iconWidth: i,
    iconPosition: s = void 0,
    text: c,
    onClick: l,
    ...u
  }) => {
    const p = $o(() => o ? /* @__PURE__ */ U(Xs, { icon: o, width: i }) : null, [o, i]);
    return /* @__PURE__ */ et(
      Ds,
      {
        variant: "contained",
        loading: t,
        disabled: n,
        startIcon: s === "start" && p,
        endIcon: s === "end" && p,
        sx: {
          minWidth: "unset",
          width: r ? "40px" : "unset",
          height: r ? "40px" : "unset",
          textTransform: "none",
          fontWeight: "bold",
          borderRadius: r ? "50%" : "8px",
          padding: r ? "6px" : "auto",
          cursor: t ? "wait !important" : n ? "not-allowed !important" : "pointer",
          pointerEvents: "auto !important",
          transition: "background-color 0s, background-image 0s",
          "& .MuiButton-startIcon": { svg: { color: "inherit" } },
          "& .MuiButton-endIcon": { svg: { color: "inherit" } },
          ...e
        },
        onClick: (h) => {
          h.stopPropagation(), l == null || l(h);
        },
        ...u,
        children: [
          !s && p,
          !r && c
        ]
      }
    );
  }
);
So.displayName = "Button";
function qd(e) {
  const t = lt(e);
  return t.body === e ? sr(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function pn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function ba(e) {
  return parseInt(sr(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Hd(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function xa(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const c = !i.includes(s), l = !Hd(s);
    c && l && pn(s, o);
  });
}
function eo(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function Yd(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (qd(r)) {
      const s = rl(sr(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${ba(r) + s}px`;
      const c = lt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(c, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${ba(l) + s}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = lt(r).body;
    else {
      const s = r.parentElement, c = sr(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && c.getComputedStyle(s).overflowY === "scroll" ? s : r;
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
      property: c
    }) => {
      i ? s.style.setProperty(c, i) : s.style.removeProperty(c);
    });
  };
}
function Gd(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Kd {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && pn(t.modalRef, !1);
    const o = Gd(n);
    xa(n, t.mount, t.modalRef, o, !0);
    const i = eo(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = eo(this.containers, (i) => i.modals.includes(t)), o = this.containers[r];
    o.restore || (o.restore = Yd(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = eo(this.containers, (s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && pn(t.modalRef, n), xa(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && pn(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Xd = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Qd(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Jd(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Zd(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Jd(e));
}
function eh(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Xd)).forEach((r, o) => {
    const i = Qd(r);
    i === -1 || !Zd(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function th() {
  return !0;
}
function mr(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = eh,
    isEnabled: s = th,
    open: c
  } = e, l = S.useRef(!1), u = S.useRef(null), p = S.useRef(null), h = S.useRef(null), m = S.useRef(null), y = S.useRef(!1), g = S.useRef(null), f = Ve(Cn(t), g), v = S.useRef(null);
  S.useEffect(() => {
    !c || !g.current || (y.current = !n);
  }, [n, c]), S.useEffect(() => {
    if (!c || !g.current)
      return;
    const T = lt(g.current);
    return g.current.contains(T.activeElement) || (g.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), g.current.setAttribute("tabIndex", "-1")), y.current && g.current.focus()), () => {
      o || (h.current && h.current.focus && (l.current = !0, h.current.focus()), h.current = null);
    };
  }, [c]), S.useEffect(() => {
    if (!c || !g.current)
      return;
    const T = lt(g.current), b = (O) => {
      v.current = O, !(r || !s() || O.key !== "Tab") && T.activeElement === g.current && O.shiftKey && (l.current = !0, p.current && p.current.focus());
    }, x = () => {
      var _, d;
      const O = g.current;
      if (O === null)
        return;
      if (!T.hasFocus() || !s() || l.current) {
        l.current = !1;
        return;
      }
      if (O.contains(T.activeElement) || r && T.activeElement !== u.current && T.activeElement !== p.current)
        return;
      if (T.activeElement !== m.current)
        m.current = null;
      else if (m.current !== null)
        return;
      if (!y.current)
        return;
      let j = [];
      if ((T.activeElement === u.current || T.activeElement === p.current) && (j = i(g.current)), j.length > 0) {
        const R = !!((_ = v.current) != null && _.shiftKey && ((d = v.current) == null ? void 0 : d.key) === "Tab"), I = j[0], $ = j[j.length - 1];
        typeof I != "string" && typeof $ != "string" && (R ? $.focus() : I.focus());
      } else
        O.focus();
    };
    T.addEventListener("focusin", x), T.addEventListener("keydown", b, !0);
    const w = setInterval(() => {
      T.activeElement && T.activeElement.tagName === "BODY" && x();
    }, 50);
    return () => {
      clearInterval(w), T.removeEventListener("focusin", x), T.removeEventListener("keydown", b, !0);
    };
  }, [n, r, o, s, c, i]);
  const E = (T) => {
    h.current === null && (h.current = T.relatedTarget), y.current = !0, m.current = T.target;
    const b = t.props.onFocus;
    b && b(T);
  }, C = (T) => {
    h.current === null && (h.current = T.relatedTarget), y.current = !0;
  };
  return /* @__PURE__ */ et(S.Fragment, {
    children: [/* @__PURE__ */ U("div", {
      tabIndex: c ? 0 : -1,
      onFocus: C,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ S.cloneElement(t, {
      ref: f,
      onFocus: E
    }), /* @__PURE__ */ U("div", {
      tabIndex: c ? 0 : -1,
      onFocus: C,
      ref: p,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (mr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Yt,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: a.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: a.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: a.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: a.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: a.func,
  /**
   * If `true`, focus is locked.
   */
  open: a.bool.isRequired
});
process.env.NODE_ENV !== "production" && (mr.propTypes = La(mr.propTypes));
function nh(e) {
  return typeof e == "function" ? e() : e;
}
const En = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, c] = S.useState(null), l = Ve(/* @__PURE__ */ S.isValidElement(r) ? Cn(r) : null, n);
  if (mn(() => {
    i || c(nh(o) || document.body);
  }, [o, i]), mn(() => {
    if (s && !i)
      return ao(n, s), () => {
        ao(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ S.isValidElement(r)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ S.cloneElement(r, u);
    }
    return r;
  }
  return s && /* @__PURE__ */ kc.createPortal(r, s);
});
process.env.NODE_ENV !== "production" && (En.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: a.node,
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
  container: a.oneOfType([Lt, a.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool
});
process.env.NODE_ENV !== "production" && (En.propTypes = La(En.propTypes));
function $e(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: o,
    externalForwardedProps: i,
    internalForwardedProps: s,
    shouldForwardComponentProp: c = !1,
    ...l
  } = t, {
    component: u,
    slots: p = {
      [e]: void 0
    },
    slotProps: h = {
      [e]: void 0
    },
    ...m
  } = i, y = p[e] || r, g = Ga(h[e], o), {
    props: {
      component: f,
      ...v
    },
    internalRef: E
  } = Ya({
    className: n,
    ...l,
    externalForwardedProps: e === "root" ? m : void 0,
    externalSlotProps: g
  }), C = Ve(E, g == null ? void 0 : g.ref, t.ref), T = e === "root" ? f || u : f, b = qa(y, {
    ...e === "root" && !u && !p[e] && s,
    ...e !== "root" && !p[e] && s,
    ...v,
    ...T && !c && {
      as: T
    },
    ...T && c && {
      component: T
    },
    ref: C
  }, o);
  return [y, b];
}
const Qs = (e) => e.scrollTop;
function gr(e, t) {
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
const rh = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, yr = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Nn(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: c,
    easing: l,
    in: u,
    onEnter: p,
    onEntered: h,
    onEntering: m,
    onExit: y,
    onExited: g,
    onExiting: f,
    style: v,
    timeout: E = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = ot,
    ...T
  } = t, b = S.useRef(null), x = Ve(b, Cn(c), n), w = (B) => (N) => {
    if (B) {
      const A = b.current;
      N === void 0 ? B(A) : B(A, N);
    }
  }, O = w(m), j = w((B, N) => {
    Qs(B);
    const A = gr({
      style: v,
      timeout: E,
      easing: l
    }, {
      mode: "enter"
    });
    B.style.webkitTransition = r.transitions.create("opacity", A), B.style.transition = r.transitions.create("opacity", A), p && p(B, N);
  }), _ = w(h), d = w(f), R = w((B) => {
    const N = gr({
      style: v,
      timeout: E,
      easing: l
    }, {
      mode: "exit"
    });
    B.style.webkitTransition = r.transitions.create("opacity", N), B.style.transition = r.transitions.create("opacity", N), y && y(B);
  }), I = w(g);
  return /* @__PURE__ */ U(C, {
    appear: s,
    in: u,
    nodeRef: b,
    onEnter: j,
    onEntered: _,
    onEntering: O,
    onExit: R,
    onExited: I,
    onExiting: d,
    addEndListener: (B) => {
      i && i(b.current, B);
    },
    timeout: E,
    ...T,
    children: (B, {
      ownerState: N,
      ...A
    }) => /* @__PURE__ */ S.cloneElement(c, {
      style: {
        opacity: 0,
        visibility: B === "exited" && !u ? "hidden" : void 0,
        ...rh[B],
        ...v,
        ...c.props.style
      },
      ref: x,
      ...A
    })
  });
});
process.env.NODE_ENV !== "production" && (yr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: a.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: a.bool,
  /**
   * A single child content element.
   */
  children: Yt.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: a.oneOfType([a.shape({
    enter: a.string,
    exit: a.string
  }), a.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: a.bool,
  /**
   * @ignore
   */
  onEnter: a.func,
  /**
   * @ignore
   */
  onEntered: a.func,
  /**
   * @ignore
   */
  onEntering: a.func,
  /**
   * @ignore
   */
  onExit: a.func,
  /**
   * @ignore
   */
  onExited: a.func,
  /**
   * @ignore
   */
  onExiting: a.func,
  /**
   * @ignore
   */
  style: a.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: a.oneOfType([a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })])
});
function oh(e) {
  return Te("MuiBackdrop", e);
}
we("MuiBackdrop", ["root", "invisible"]);
const ih = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Me({
    root: ["root", n && "invisible"]
  }, oh, t);
}, ah = fe("div", {
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
}), ri = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Pe({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: i,
    component: s = "div",
    invisible: c = !1,
    open: l,
    components: u = {},
    componentsProps: p = {},
    slotProps: h = {},
    slots: m = {},
    TransitionComponent: y,
    transitionDuration: g,
    ...f
  } = r, v = {
    ...r,
    component: s,
    invisible: c
  }, E = ih(v), C = {
    transition: y,
    root: u.Root,
    ...m
  }, T = {
    ...p,
    ...h
  }, b = {
    slots: C,
    slotProps: T
  }, [x, w] = $e("root", {
    elementType: ah,
    externalForwardedProps: b,
    className: ae(E.root, i),
    ownerState: v
  }), [O, j] = $e("transition", {
    elementType: yr,
    externalForwardedProps: b,
    ownerState: v
  });
  return /* @__PURE__ */ U(O, {
    in: l,
    timeout: g,
    ...f,
    ...j,
    children: /* @__PURE__ */ U(x, {
      "aria-hidden": !0,
      ...w,
      classes: E,
      ref: n,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (ri.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: a.shape({
    Root: a.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: a.shape({
    root: a.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: a.bool,
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: a.shape({
    root: a.oneOfType([a.func, a.object]),
    transition: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: a.shape({
    root: a.elementType,
    transition: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: a.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: a.oneOfType([a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })])
});
function sh(e) {
  return typeof e == "function" ? e() : e;
}
function ch(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Ea = () => {
}, qn = new Kd();
function lh(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    closeAfterTransition: o = !1,
    onTransitionEnter: i,
    onTransitionExited: s,
    children: c,
    onClose: l,
    open: u,
    rootRef: p
  } = e, h = S.useRef({}), m = S.useRef(null), y = S.useRef(null), g = Ve(y, p), [f, v] = S.useState(!u), E = ch(c);
  let C = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (C = !1);
  const T = () => lt(m.current), b = () => (h.current.modalRef = y.current, h.current.mount = m.current, h.current), x = () => {
    qn.mount(b(), {
      disableScrollLock: r
    }), y.current && (y.current.scrollTop = 0);
  }, w = dt(() => {
    const N = sh(t) || T().body;
    qn.add(b(), N), y.current && x();
  }), O = () => qn.isTopModal(b()), j = dt((N) => {
    m.current = N, N && (u && O() ? x() : y.current && pn(y.current, C));
  }), _ = S.useCallback(() => {
    qn.remove(b(), C);
  }, [C]);
  S.useEffect(() => () => {
    _();
  }, [_]), S.useEffect(() => {
    u ? w() : (!E || !o) && _();
  }, [u, _, E, o, w]);
  const d = (N) => (A) => {
    var L;
    (L = N.onKeyDown) == null || L.call(N, A), !(A.key !== "Escape" || A.which === 229 || // Wait until IME is settled.
    !O()) && (n || (A.stopPropagation(), l && l(A, "escapeKeyDown")));
  }, R = (N) => (A) => {
    var L;
    (L = N.onClick) == null || L.call(N, A), A.target === A.currentTarget && l && l(A, "backdropClick");
  };
  return {
    getRootProps: (N = {}) => {
      const A = Ha(e);
      delete A.onTransitionEnter, delete A.onTransitionExited;
      const L = {
        ...A,
        ...N
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...L,
        onKeyDown: d(L),
        ref: g
      };
    },
    getBackdropProps: (N = {}) => {
      const A = N;
      return {
        "aria-hidden": !0,
        ...A,
        onClick: R(A),
        open: u
      };
    },
    getTransitionProps: () => {
      const N = () => {
        v(!1), i && i();
      }, A = () => {
        v(!0), s && s(), o && _();
      };
      return {
        onEnter: Ai(N, (c == null ? void 0 : c.props.onEnter) ?? Ea),
        onExited: Ai(A, (c == null ? void 0 : c.props.onExited) ?? Ea)
      };
    },
    rootRef: g,
    portalRef: j,
    isTopModal: O,
    exited: f,
    hasTransition: E
  };
}
function uh(e) {
  return Te("MuiModal", e);
}
we("MuiModal", ["root", "hidden", "backdrop"]);
const fh = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return Me({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, uh, r);
}, ph = fe("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(Ge(({
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
}))), dh = fe(ri, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Js = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Pe({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = dh,
    BackdropProps: i,
    classes: s,
    className: c,
    closeAfterTransition: l = !1,
    children: u,
    container: p,
    component: h,
    components: m = {},
    componentsProps: y = {},
    disableAutoFocus: g = !1,
    disableEnforceFocus: f = !1,
    disableEscapeKeyDown: v = !1,
    disablePortal: E = !1,
    disableRestoreFocus: C = !1,
    disableScrollLock: T = !1,
    hideBackdrop: b = !1,
    keepMounted: x = !1,
    onClose: w,
    onTransitionEnter: O,
    onTransitionExited: j,
    open: _,
    slotProps: d = {},
    slots: R = {},
    // eslint-disable-next-line react/prop-types
    theme: I,
    ...$
  } = r, B = {
    ...r,
    closeAfterTransition: l,
    disableAutoFocus: g,
    disableEnforceFocus: f,
    disableEscapeKeyDown: v,
    disablePortal: E,
    disableRestoreFocus: C,
    disableScrollLock: T,
    hideBackdrop: b,
    keepMounted: x
  }, {
    getRootProps: N,
    getBackdropProps: A,
    getTransitionProps: L,
    portalRef: Z,
    isTopModal: K,
    exited: k,
    hasTransition: D
  } = lh({
    ...B,
    rootRef: n
  }), F = {
    ...B,
    exited: k
  }, W = fh(F), V = {};
  if (u.props.tabIndex === void 0 && (V.tabIndex = "-1"), D) {
    const {
      onEnter: G,
      onExited: ie
    } = L();
    V.onEnter = G, V.onExited = ie;
  }
  const z = {
    slots: {
      root: m.Root,
      backdrop: m.Backdrop,
      ...R
    },
    slotProps: {
      ...y,
      ...d
    }
  }, [q, H] = $e("root", {
    ref: n,
    elementType: ph,
    externalForwardedProps: {
      ...z,
      ...$,
      component: h
    },
    getSlotProps: N,
    ownerState: F,
    className: ae(c, W == null ? void 0 : W.root, !F.open && F.exited && (W == null ? void 0 : W.hidden))
  }), [Y, Q] = $e("backdrop", {
    ref: i == null ? void 0 : i.ref,
    elementType: o,
    externalForwardedProps: z,
    shouldForwardComponentProp: !0,
    additionalProps: i,
    getSlotProps: (G) => A({
      ...G,
      onClick: (ie) => {
        G != null && G.onClick && G.onClick(ie);
      }
    }),
    className: ae(i == null ? void 0 : i.className, W == null ? void 0 : W.backdrop),
    ownerState: F
  });
  return !x && !_ && (!D || k) ? null : /* @__PURE__ */ U(En, {
    ref: Z,
    container: p,
    disablePortal: E,
    children: /* @__PURE__ */ et(q, {
      ...H,
      children: [!b && o ? /* @__PURE__ */ U(Y, {
        ...Q
      }) : null, /* @__PURE__ */ U(mr, {
        disableEnforceFocus: f,
        disableAutoFocus: g,
        disableRestoreFocus: C,
        isEnabled: K,
        open: _,
        children: /* @__PURE__ */ S.cloneElement(u, V)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Js.propTypes = {
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
  BackdropComponent: a.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: a.object,
  /**
   * A single child content element.
   */
  children: Yt.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: a.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: a.shape({
    Backdrop: a.elementType,
    Root: a.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: a.shape({
    backdrop: a.oneOfType([a.func, a.object]),
    root: a.oneOfType([a.func, a.object])
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
  container: a.oneOfType([Lt, a.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: a.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: a.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: a.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: a.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: a.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: a.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: a.bool,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: a.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: a.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: a.func,
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: a.shape({
    backdrop: a.oneOfType([a.func, a.object]),
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: a.shape({
    backdrop: a.elementType,
    root: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
function hh(e) {
  return Te("MuiPaper", e);
}
we("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const mh = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Me(i, hh, o);
}, gh = fe("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(Ge(({
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
}))), oi = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var y;
  const r = Pe({
    props: t,
    name: "MuiPaper"
  }), o = Nn(), {
    className: i,
    component: s = "div",
    elevation: c = 1,
    square: l = !1,
    variant: u = "elevation",
    ...p
  } = r, h = {
    ...r,
    component: s,
    elevation: c,
    square: l,
    variant: u
  }, m = mh(h);
  return process.env.NODE_ENV !== "production" && o.shadows[c] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${c}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${c}]\` is defined.`].join(`
`)), /* @__PURE__ */ U(gh, {
    as: s,
    ownerState: h,
    className: ae(m.root, i),
    ref: n,
    ...p,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[c],
        ...o.vars && {
          "--Paper-overlay": (y = o.vars.overlays) == null ? void 0 : y[c]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Je("#fff", ho(c))}, ${Je("#fff", ho(c))})`
        }
      },
      ...p.style
    }
  });
});
process.env.NODE_ENV !== "production" && (oi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Ht(il, (e) => {
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
  square: a.bool,
  /**
   * @ignore
   */
  style: a.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: a.oneOfType([a.oneOf(["elevation", "outlined"]), a.string])
});
function yh(e) {
  return Te("MuiDialog", e);
}
const to = we("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), ii = /* @__PURE__ */ S.createContext({});
process.env.NODE_ENV !== "production" && (ii.displayName = "DialogContext");
const vh = fe(ri, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), bh = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: o,
    fullScreen: i
  } = e, s = {
    root: ["root"],
    container: ["container", `scroll${oe(n)}`],
    paper: ["paper", `paperScroll${oe(n)}`, `paperWidth${oe(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
  };
  return Me(s, yh, t);
}, xh = fe(Js, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), Eh = fe("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${oe(n.scroll)}`]];
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
}), Th = fe(oi, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`scrollPaper${oe(n.scroll)}`], t[`paperWidth${oe(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(Ge(({
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
      [`&.${to.paperScrollBody}`]: {
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
      [`&.${to.paperScrollBody}`]: {
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
      [`&.${to.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), Zs = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Pe({
    props: t,
    name: "MuiDialog"
  }), o = Nn(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": c,
    "aria-modal": l = !0,
    BackdropComponent: u,
    BackdropProps: p,
    children: h,
    className: m,
    disableEscapeKeyDown: y = !1,
    fullScreen: g = !1,
    fullWidth: f = !1,
    maxWidth: v = "sm",
    onClick: E,
    onClose: C,
    open: T,
    PaperComponent: b = oi,
    PaperProps: x = {},
    scroll: w = "paper",
    slots: O = {},
    slotProps: j = {},
    TransitionComponent: _ = yr,
    transitionDuration: d = i,
    TransitionProps: R,
    ...I
  } = r, $ = {
    ...r,
    disableEscapeKeyDown: y,
    fullScreen: g,
    fullWidth: f,
    maxWidth: v,
    scroll: w
  }, B = bh($), N = S.useRef(), A = (pe) => {
    N.current = pe.target === pe.currentTarget;
  }, L = (pe) => {
    E && E(pe), N.current && (N.current = null, C && C(pe, "backdropClick"));
  }, Z = jo(c), K = S.useMemo(() => ({
    titleId: Z
  }), [Z]), k = {
    transition: _,
    ...O
  }, D = {
    transition: R,
    paper: x,
    backdrop: p,
    ...j
  }, F = {
    slots: k,
    slotProps: D
  }, [W, V] = $e("root", {
    elementType: xh,
    shouldForwardComponentProp: !0,
    externalForwardedProps: F,
    ownerState: $,
    className: ae(B.root, m),
    ref: n
  }), [z, q] = $e("backdrop", {
    elementType: vh,
    shouldForwardComponentProp: !0,
    externalForwardedProps: F,
    ownerState: $
  }), [H, Y] = $e("paper", {
    elementType: Th,
    shouldForwardComponentProp: !0,
    externalForwardedProps: F,
    ownerState: $,
    className: ae(B.paper, x.className)
  }), [Q, G] = $e("container", {
    elementType: Eh,
    externalForwardedProps: F,
    ownerState: $,
    className: ae(B.container)
  }), [ie, M] = $e("transition", {
    elementType: yr,
    externalForwardedProps: F,
    ownerState: $,
    additionalProps: {
      appear: !0,
      in: T,
      timeout: d,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ U(W, {
    closeAfterTransition: !0,
    slots: {
      backdrop: z
    },
    slotProps: {
      backdrop: {
        transitionDuration: d,
        as: u,
        ...q
      }
    },
    disableEscapeKeyDown: y,
    onClose: C,
    open: T,
    onClick: L,
    ...V,
    ...I,
    children: /* @__PURE__ */ U(ie, {
      ...M,
      children: /* @__PURE__ */ U(Q, {
        onMouseDown: A,
        ...G,
        children: /* @__PURE__ */ U(H, {
          as: b,
          elevation: 24,
          role: "dialog",
          "aria-describedby": s,
          "aria-labelledby": Z,
          "aria-modal": l,
          ...Y,
          children: /* @__PURE__ */ U(ii.Provider, {
            value: K,
            children: h
          })
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Zs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": a.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": a.string,
  /**
   * Informs assistive technologies that the element is modal.
   * It's added on the element with role="dialog".
   * @default true
   */
  "aria-modal": a.oneOfType([a.oneOf(["false", "true"]), a.bool]),
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
  BackdropComponent: a.elementType,
  /**
   * @ignore
   */
  BackdropProps: a.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: a.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: a.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: a.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: a.oneOfType([a.oneOf(["xs", "sm", "md", "lg", "xl", !1]), a.string]),
  /**
   * @ignore
   */
  onClick: a.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: a.func,
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: a.elementType,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @default {}
   * @deprecated Use `slotProps.paper` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PaperProps: a.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: a.oneOf(["body", "paper"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: a.shape({
    backdrop: a.oneOfType([a.func, a.object]),
    container: a.oneOfType([a.func, a.object]),
    paper: a.oneOfType([a.func, a.object]),
    root: a.oneOfType([a.func, a.object]),
    transition: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: a.shape({
    backdrop: a.elementType,
    container: a.elementType,
    paper: a.elementType,
    root: a.elementType,
    transition: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: a.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: a.oneOfType([a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionProps: a.object
});
function wh(e) {
  return Te("MuiDialogActions", e);
}
we("MuiDialogActions", ["root", "spacing"]);
const Sh = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return Me({
    root: ["root", !n && "spacing"]
  }, wh, t);
}, Ch = fe("div", {
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
}), ec = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Pe({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: o,
    disableSpacing: i = !1,
    ...s
  } = r, c = {
    ...r,
    disableSpacing: i
  }, l = Sh(c);
  return /* @__PURE__ */ U(Ch, {
    className: ae(l.root, o),
    ownerState: c,
    ref: n,
    ...s
  });
});
process.env.NODE_ENV !== "production" && (ec.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: a.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
function Oh(e) {
  return Te("MuiDialogContent", e);
}
we("MuiDialogContent", ["root", "dividers"]);
function Ph(e) {
  return Te("MuiDialogTitle", e);
}
const Rh = we("MuiDialogTitle", ["root"]), kh = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return Me({
    root: ["root", n && "dividers"]
  }, Oh, t);
}, $h = fe("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(Ge(({
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
      [`.${Rh.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), tc = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Pe({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: o,
    dividers: i = !1,
    ...s
  } = r, c = {
    ...r,
    dividers: i
  }, l = kh(c);
  return /* @__PURE__ */ U($h, {
    className: ae(l.root, o),
    ownerState: c,
    ref: n,
    ...s
  });
});
process.env.NODE_ENV !== "production" && (tc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: a.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
function Nh(e) {
  return Te("MuiTypography", e);
}
we("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Ah = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Ih = ip(), Mh = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: o,
    variant: i,
    classes: s
  } = e, c = {
    root: ["root", i, e.align !== "inherit" && `align${oe(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
  };
  return Me(c, Nh, s);
}, Dh = fe("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${oe(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(Ge(({
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
    })), ...Object.entries(e.palette).filter(Jo()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${oe(n)}`
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
})), Ta = {
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
}, ai = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    color: r,
    ...o
  } = Pe({
    props: t,
    name: "MuiTypography"
  }), i = !Ah[r], s = Ih({
    ...o,
    ...i && {
      color: r
    }
  }), {
    align: c = "inherit",
    className: l,
    component: u,
    gutterBottom: p = !1,
    noWrap: h = !1,
    paragraph: m = !1,
    variant: y = "body1",
    variantMapping: g = Ta,
    ...f
  } = s, v = {
    ...s,
    align: c,
    color: r,
    className: l,
    component: u,
    gutterBottom: p,
    noWrap: h,
    paragraph: m,
    variant: y,
    variantMapping: g
  }, E = u || (m ? "p" : g[y] || Ta[y]) || "span", C = Mh(v);
  return /* @__PURE__ */ U(Dh, {
    as: E,
    ref: n,
    className: ae(C.root, l),
    ...f,
    ownerState: v,
    style: {
      ...c !== "inherit" && {
        "--Typography-textAlign": c
      },
      ...f.style
    }
  });
});
process.env.NODE_ENV !== "production" && (ai.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: a.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: a.oneOfType([a.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), a.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: a.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: a.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: a.bool,
  /**
   * @ignore
   */
  style: a.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: a.oneOfType([a.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), a.string]),
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
  variantMapping: a.object
});
const _h = (e) => {
  const {
    classes: t
  } = e;
  return Me({
    root: ["root"]
  }, Ph, t);
}, jh = fe(ai, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), nc = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Pe({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, c = r, l = _h(c), {
    titleId: u = i
  } = S.useContext(ii);
  return /* @__PURE__ */ U(jh, {
    component: "h2",
    className: ae(l.root, o),
    ownerState: c,
    ref: n,
    variant: "h6",
    id: i ?? u,
    ...s
  });
});
process.env.NODE_ENV !== "production" && (nc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * @ignore
   */
  id: a.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
function Co(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Bh = {
  entering: {
    opacity: 1,
    transform: Co(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, no = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), vr = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: s,
    in: c,
    onEnter: l,
    onEntered: u,
    onEntering: p,
    onExit: h,
    onExited: m,
    onExiting: y,
    style: g,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = ot,
    ...E
  } = t, C = _t(), T = S.useRef(), b = Nn(), x = S.useRef(null), w = Ve(x, Cn(i), n), O = (N) => (A) => {
    if (N) {
      const L = x.current;
      A === void 0 ? N(L) : N(L, A);
    }
  }, j = O(p), _ = O((N, A) => {
    Qs(N);
    const {
      duration: L,
      delay: Z,
      easing: K
    } = gr({
      style: g,
      timeout: f,
      easing: s
    }, {
      mode: "enter"
    });
    let k;
    f === "auto" ? (k = b.transitions.getAutoHeightDuration(N.clientHeight), T.current = k) : k = L, N.style.transition = [b.transitions.create("opacity", {
      duration: k,
      delay: Z
    }), b.transitions.create("transform", {
      duration: no ? k : k * 0.666,
      delay: Z,
      easing: K
    })].join(","), l && l(N, A);
  }), d = O(u), R = O(y), I = O((N) => {
    const {
      duration: A,
      delay: L,
      easing: Z
    } = gr({
      style: g,
      timeout: f,
      easing: s
    }, {
      mode: "exit"
    });
    let K;
    f === "auto" ? (K = b.transitions.getAutoHeightDuration(N.clientHeight), T.current = K) : K = A, N.style.transition = [b.transitions.create("opacity", {
      duration: K,
      delay: L
    }), b.transitions.create("transform", {
      duration: no ? K : K * 0.666,
      delay: no ? L : L || K * 0.333,
      easing: Z
    })].join(","), N.style.opacity = 0, N.style.transform = Co(0.75), h && h(N);
  }), $ = O(m);
  return /* @__PURE__ */ U(v, {
    appear: o,
    in: c,
    nodeRef: x,
    onEnter: _,
    onEntered: d,
    onEntering: j,
    onExit: I,
    onExited: $,
    onExiting: R,
    addEndListener: (N) => {
      f === "auto" && C.start(T.current || 0, N), r && r(x.current, N);
    },
    timeout: f === "auto" ? null : f,
    ...E,
    children: (N, {
      ownerState: A,
      ...L
    }) => /* @__PURE__ */ S.cloneElement(i, {
      style: {
        opacity: 0,
        transform: Co(0.75),
        visibility: N === "exited" && !c ? "hidden" : void 0,
        ...Bh[N],
        ...g,
        ...i.props.style
      },
      ref: w,
      ...L
    })
  });
});
process.env.NODE_ENV !== "production" && (vr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: a.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: a.bool,
  /**
   * A single child content element.
   */
  children: Yt.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: a.oneOfType([a.shape({
    enter: a.string,
    exit: a.string
  }), a.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: a.bool,
  /**
   * @ignore
   */
  onEnter: a.func,
  /**
   * @ignore
   */
  onEntered: a.func,
  /**
   * @ignore
   */
  onEntering: a.func,
  /**
   * @ignore
   */
  onExit: a.func,
  /**
   * @ignore
   */
  onExited: a.func,
  /**
   * @ignore
   */
  onExiting: a.func,
  /**
   * @ignore
   */
  style: a.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: a.oneOfType([a.oneOf(["auto"]), a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })])
});
vr && (vr.muiSupportAuto = !0);
var Se = "top", We = "bottom", Ue = "right", Ce = "left", si = "auto", An = [Se, We, Ue, Ce], Wt = "start", Tn = "end", Lh = "clippingParents", rc = "viewport", on = "popper", Fh = "reference", wa = /* @__PURE__ */ An.reduce(function(e, t) {
  return e.concat([t + "-" + Wt, t + "-" + Tn]);
}, []), oc = /* @__PURE__ */ [].concat(An, [si]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Wt, t + "-" + Tn]);
}, []), Vh = "beforeRead", Wh = "read", Uh = "afterRead", zh = "beforeMain", qh = "main", Hh = "afterMain", Yh = "beforeWrite", Gh = "write", Kh = "afterWrite", Xh = [Vh, Wh, Uh, zh, qh, Hh, Yh, Gh, Kh];
function rt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ie(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Pt(e) {
  var t = Ie(e).Element;
  return e instanceof t || e instanceof Element;
}
function Fe(e) {
  var t = Ie(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ci(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ie(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Qh(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Fe(i) || !rt(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var c = o[s];
      c === !1 ? i.removeAttribute(s) : i.setAttribute(s, c === !0 ? "" : c);
    }));
  });
}
function Jh(e) {
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
      var o = t.elements[r], i = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), c = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !Fe(o) || !rt(o) || (Object.assign(o.style, c), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const Zh = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Qh,
  effect: Jh,
  requires: ["computeStyles"]
};
function nt(e) {
  return e.split("-")[0];
}
var Ct = Math.max, br = Math.min, Ut = Math.round;
function Oo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ic() {
  return !/^((?!chrome|android).)*safari/i.test(Oo());
}
function zt(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && Fe(e) && (o = e.offsetWidth > 0 && Ut(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Ut(r.height) / e.offsetHeight || 1);
  var s = Pt(e) ? Ie(e) : window, c = s.visualViewport, l = !ic() && n, u = (r.left + (l && c ? c.offsetLeft : 0)) / o, p = (r.top + (l && c ? c.offsetTop : 0)) / i, h = r.width / o, m = r.height / i;
  return {
    width: h,
    height: m,
    top: p,
    right: u + h,
    bottom: p + m,
    left: u,
    x: u,
    y: p
  };
}
function li(e) {
  var t = zt(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function ac(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ci(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ft(e) {
  return Ie(e).getComputedStyle(e);
}
function em(e) {
  return ["table", "td", "th"].indexOf(rt(e)) >= 0;
}
function yt(e) {
  return ((Pt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function jr(e) {
  return rt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ci(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    yt(e)
  );
}
function Sa(e) {
  return !Fe(e) || // https://github.com/popperjs/popper-core/issues/837
  ft(e).position === "fixed" ? null : e.offsetParent;
}
function tm(e) {
  var t = /firefox/i.test(Oo()), n = /Trident/i.test(Oo());
  if (n && Fe(e)) {
    var r = ft(e);
    if (r.position === "fixed")
      return null;
  }
  var o = jr(e);
  for (ci(o) && (o = o.host); Fe(o) && ["html", "body"].indexOf(rt(o)) < 0; ) {
    var i = ft(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function In(e) {
  for (var t = Ie(e), n = Sa(e); n && em(n) && ft(n).position === "static"; )
    n = Sa(n);
  return n && (rt(n) === "html" || rt(n) === "body" && ft(n).position === "static") ? t : n || tm(e) || t;
}
function ui(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function dn(e, t, n) {
  return Ct(e, br(t, n));
}
function nm(e, t, n) {
  var r = dn(e, t, n);
  return r > n ? n : r;
}
function sc() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function cc(e) {
  return Object.assign({}, sc(), e);
}
function lc(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var rm = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, cc(typeof t != "number" ? t : lc(t, An));
};
function om(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, c = nt(n.placement), l = ui(c), u = [Ce, Ue].indexOf(c) >= 0, p = u ? "height" : "width";
  if (!(!i || !s)) {
    var h = rm(o.padding, n), m = li(i), y = l === "y" ? Se : Ce, g = l === "y" ? We : Ue, f = n.rects.reference[p] + n.rects.reference[l] - s[l] - n.rects.popper[p], v = s[l] - n.rects.reference[l], E = In(i), C = E ? l === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, T = f / 2 - v / 2, b = h[y], x = C - m[p] - h[g], w = C / 2 - m[p] / 2 + T, O = dn(b, w, x), j = l;
    n.modifiersData[r] = (t = {}, t[j] = O, t.centerOffset = O - w, t);
  }
}
function im(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || ac(t.elements.popper, o) && (t.elements.arrow = o));
}
const am = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: om,
  effect: im,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function qt(e) {
  return e.split("-")[1];
}
var sm = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function cm(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Ut(n * o) / o || 0,
    y: Ut(r * o) / o || 0
  };
}
function Ca(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, c = e.position, l = e.gpuAcceleration, u = e.adaptive, p = e.roundOffsets, h = e.isFixed, m = s.x, y = m === void 0 ? 0 : m, g = s.y, f = g === void 0 ? 0 : g, v = typeof p == "function" ? p({
    x: y,
    y: f
  }) : {
    x: y,
    y: f
  };
  y = v.x, f = v.y;
  var E = s.hasOwnProperty("x"), C = s.hasOwnProperty("y"), T = Ce, b = Se, x = window;
  if (u) {
    var w = In(n), O = "clientHeight", j = "clientWidth";
    if (w === Ie(n) && (w = yt(n), ft(w).position !== "static" && c === "absolute" && (O = "scrollHeight", j = "scrollWidth")), w = w, o === Se || (o === Ce || o === Ue) && i === Tn) {
      b = We;
      var _ = h && w === x && x.visualViewport ? x.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[O]
      );
      f -= _ - r.height, f *= l ? 1 : -1;
    }
    if (o === Ce || (o === Se || o === We) && i === Tn) {
      T = Ue;
      var d = h && w === x && x.visualViewport ? x.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[j]
      );
      y -= d - r.width, y *= l ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: c
  }, u && sm), I = p === !0 ? cm({
    x: y,
    y: f
  }, Ie(n)) : {
    x: y,
    y: f
  };
  if (y = I.x, f = I.y, l) {
    var $;
    return Object.assign({}, R, ($ = {}, $[b] = C ? "0" : "", $[T] = E ? "0" : "", $.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + f + "px)" : "translate3d(" + y + "px, " + f + "px, 0)", $));
  }
  return Object.assign({}, R, (t = {}, t[b] = C ? f + "px" : "", t[T] = E ? y + "px" : "", t.transform = "", t));
}
function lm(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, c = n.roundOffsets, l = c === void 0 ? !0 : c, u = {
    placement: nt(t.placement),
    variation: qt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ca(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ca(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const um = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: lm,
  data: {}
};
var Hn = {
  passive: !0
};
function fm(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, c = s === void 0 ? !0 : s, l = Ie(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(p) {
    p.addEventListener("scroll", n.update, Hn);
  }), c && l.addEventListener("resize", n.update, Hn), function() {
    i && u.forEach(function(p) {
      p.removeEventListener("scroll", n.update, Hn);
    }), c && l.removeEventListener("resize", n.update, Hn);
  };
}
const pm = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: fm,
  data: {}
};
var dm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function or(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return dm[t];
  });
}
var hm = {
  start: "end",
  end: "start"
};
function Oa(e) {
  return e.replace(/start|end/g, function(t) {
    return hm[t];
  });
}
function fi(e) {
  var t = Ie(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function pi(e) {
  return zt(yt(e)).left + fi(e).scrollLeft;
}
function mm(e, t) {
  var n = Ie(e), r = yt(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, c = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = ic();
    (u || !u && t === "fixed") && (c = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: c + pi(e),
    y: l
  };
}
function gm(e) {
  var t, n = yt(e), r = fi(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ct(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Ct(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), c = -r.scrollLeft + pi(e), l = -r.scrollTop;
  return ft(o || n).direction === "rtl" && (c += Ct(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function di(e) {
  var t = ft(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function uc(e) {
  return ["html", "body", "#document"].indexOf(rt(e)) >= 0 ? e.ownerDocument.body : Fe(e) && di(e) ? e : uc(jr(e));
}
function hn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = uc(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Ie(r), s = o ? [i].concat(i.visualViewport || [], di(r) ? r : []) : r, c = t.concat(s);
  return o ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(hn(jr(s)))
  );
}
function Po(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function ym(e, t) {
  var n = zt(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Pa(e, t, n) {
  return t === rc ? Po(mm(e, n)) : Pt(t) ? ym(t, n) : Po(gm(yt(e)));
}
function vm(e) {
  var t = hn(jr(e)), n = ["absolute", "fixed"].indexOf(ft(e).position) >= 0, r = n && Fe(e) ? In(e) : e;
  return Pt(r) ? t.filter(function(o) {
    return Pt(o) && ac(o, r) && rt(o) !== "body";
  }) : [];
}
function bm(e, t, n, r) {
  var o = t === "clippingParents" ? vm(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], c = i.reduce(function(l, u) {
    var p = Pa(e, u, r);
    return l.top = Ct(p.top, l.top), l.right = br(p.right, l.right), l.bottom = br(p.bottom, l.bottom), l.left = Ct(p.left, l.left), l;
  }, Pa(e, s, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function fc(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? nt(r) : null, i = r ? qt(r) : null, s = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case Se:
      l = {
        x: s,
        y: t.y - n.height
      };
      break;
    case We:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Ue:
      l = {
        x: t.x + t.width,
        y: c
      };
      break;
    case Ce:
      l = {
        x: t.x - n.width,
        y: c
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? ui(o) : null;
  if (u != null) {
    var p = u === "y" ? "height" : "width";
    switch (i) {
      case Wt:
        l[u] = l[u] - (t[p] / 2 - n[p] / 2);
        break;
      case Tn:
        l[u] = l[u] + (t[p] / 2 - n[p] / 2);
        break;
    }
  }
  return l;
}
function wn(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, c = n.boundary, l = c === void 0 ? Lh : c, u = n.rootBoundary, p = u === void 0 ? rc : u, h = n.elementContext, m = h === void 0 ? on : h, y = n.altBoundary, g = y === void 0 ? !1 : y, f = n.padding, v = f === void 0 ? 0 : f, E = cc(typeof v != "number" ? v : lc(v, An)), C = m === on ? Fh : on, T = e.rects.popper, b = e.elements[g ? C : m], x = bm(Pt(b) ? b : b.contextElement || yt(e.elements.popper), l, p, s), w = zt(e.elements.reference), O = fc({
    reference: w,
    element: T,
    placement: o
  }), j = Po(Object.assign({}, T, O)), _ = m === on ? j : w, d = {
    top: x.top - _.top + E.top,
    bottom: _.bottom - x.bottom + E.bottom,
    left: x.left - _.left + E.left,
    right: _.right - x.right + E.right
  }, R = e.modifiersData.offset;
  if (m === on && R) {
    var I = R[o];
    Object.keys(d).forEach(function($) {
      var B = [Ue, We].indexOf($) >= 0 ? 1 : -1, N = [Se, We].indexOf($) >= 0 ? "y" : "x";
      d[$] += I[N] * B;
    });
  }
  return d;
}
function xm(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, c = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? oc : l, p = qt(r), h = p ? c ? wa : wa.filter(function(g) {
    return qt(g) === p;
  }) : An, m = h.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  m.length === 0 && (m = h);
  var y = m.reduce(function(g, f) {
    return g[f] = wn(e, {
      placement: f,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[nt(f)], g;
  }, {});
  return Object.keys(y).sort(function(g, f) {
    return y[g] - y[f];
  });
}
function Em(e) {
  if (nt(e) === si)
    return [];
  var t = or(e);
  return [Oa(e), t, Oa(t)];
}
function Tm(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, c = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, p = n.boundary, h = n.rootBoundary, m = n.altBoundary, y = n.flipVariations, g = y === void 0 ? !0 : y, f = n.allowedAutoPlacements, v = t.options.placement, E = nt(v), C = E === v, T = l || (C || !g ? [or(v)] : Em(v)), b = [v].concat(T).reduce(function(V, z) {
      return V.concat(nt(z) === si ? xm(t, {
        placement: z,
        boundary: p,
        rootBoundary: h,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: f
      }) : z);
    }, []), x = t.rects.reference, w = t.rects.popper, O = /* @__PURE__ */ new Map(), j = !0, _ = b[0], d = 0; d < b.length; d++) {
      var R = b[d], I = nt(R), $ = qt(R) === Wt, B = [Se, We].indexOf(I) >= 0, N = B ? "width" : "height", A = wn(t, {
        placement: R,
        boundary: p,
        rootBoundary: h,
        altBoundary: m,
        padding: u
      }), L = B ? $ ? Ue : Ce : $ ? We : Se;
      x[N] > w[N] && (L = or(L));
      var Z = or(L), K = [];
      if (i && K.push(A[I] <= 0), c && K.push(A[L] <= 0, A[Z] <= 0), K.every(function(V) {
        return V;
      })) {
        _ = R, j = !1;
        break;
      }
      O.set(R, K);
    }
    if (j)
      for (var k = g ? 3 : 1, D = function(z) {
        var q = b.find(function(H) {
          var Y = O.get(H);
          if (Y)
            return Y.slice(0, z).every(function(Q) {
              return Q;
            });
        });
        if (q)
          return _ = q, "break";
      }, F = k; F > 0; F--) {
        var W = D(F);
        if (W === "break") break;
      }
    t.placement !== _ && (t.modifiersData[r]._skip = !0, t.placement = _, t.reset = !0);
  }
}
const wm = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Tm,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ra(e, t, n) {
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
function ka(e) {
  return [Se, Ue, We, Ce].some(function(t) {
    return e[t] >= 0;
  });
}
function Sm(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = wn(t, {
    elementContext: "reference"
  }), c = wn(t, {
    altBoundary: !0
  }), l = Ra(s, r), u = Ra(c, o, i), p = ka(l), h = ka(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: p,
    hasPopperEscaped: h
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": p,
    "data-popper-escaped": h
  });
}
const Cm = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Sm
};
function Om(e, t, n) {
  var r = nt(e), o = [Ce, Se].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], c = i[1];
  return s = s || 0, c = (c || 0) * o, [Ce, Ue].indexOf(r) >= 0 ? {
    x: c,
    y: s
  } : {
    x: s,
    y: c
  };
}
function Pm(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = oc.reduce(function(p, h) {
    return p[h] = Om(h, t.rects, i), p;
  }, {}), c = s[t.placement], l = c.x, u = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const Rm = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Pm
};
function km(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = fc({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const $m = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: km,
  data: {}
};
function Nm(e) {
  return e === "x" ? "y" : "x";
}
function Am(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, c = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, h = n.padding, m = n.tether, y = m === void 0 ? !0 : m, g = n.tetherOffset, f = g === void 0 ? 0 : g, v = wn(t, {
    boundary: l,
    rootBoundary: u,
    padding: h,
    altBoundary: p
  }), E = nt(t.placement), C = qt(t.placement), T = !C, b = ui(E), x = Nm(b), w = t.modifiersData.popperOffsets, O = t.rects.reference, j = t.rects.popper, _ = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, d = typeof _ == "number" ? {
    mainAxis: _,
    altAxis: _
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, _), R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, I = {
    x: 0,
    y: 0
  };
  if (w) {
    if (i) {
      var $, B = b === "y" ? Se : Ce, N = b === "y" ? We : Ue, A = b === "y" ? "height" : "width", L = w[b], Z = L + v[B], K = L - v[N], k = y ? -j[A] / 2 : 0, D = C === Wt ? O[A] : j[A], F = C === Wt ? -j[A] : -O[A], W = t.elements.arrow, V = y && W ? li(W) : {
        width: 0,
        height: 0
      }, z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : sc(), q = z[B], H = z[N], Y = dn(0, O[A], V[A]), Q = T ? O[A] / 2 - k - Y - q - d.mainAxis : D - Y - q - d.mainAxis, G = T ? -O[A] / 2 + k + Y + H + d.mainAxis : F + Y + H + d.mainAxis, ie = t.elements.arrow && In(t.elements.arrow), M = ie ? b === "y" ? ie.clientTop || 0 : ie.clientLeft || 0 : 0, pe = ($ = R == null ? void 0 : R[b]) != null ? $ : 0, xe = L + Q - pe - M, qe = L + G - pe, vt = dn(y ? br(Z, xe) : Z, L, y ? Ct(K, qe) : K);
      w[b] = vt, I[b] = vt - L;
    }
    if (c) {
      var De, _e = b === "x" ? Se : Ce, bt = b === "x" ? We : Ue, Re = w[x], it = x === "y" ? "height" : "width", X = Re + v[_e], Kt = Re - v[bt], Xt = [Se, Ce].indexOf(E) !== -1, Mn = (De = R == null ? void 0 : R[x]) != null ? De : 0, Dn = Xt ? X : Re - O[it] - j[it] - Mn + d.altAxis, Rt = Xt ? Re + O[it] + j[it] - Mn - d.altAxis : Kt, _n = y && Xt ? nm(Dn, Re, Rt) : dn(y ? Dn : X, Re, y ? Rt : Kt);
      w[x] = _n, I[x] = _n - Re;
    }
    t.modifiersData[r] = I;
  }
}
const Im = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Am,
  requiresIfExists: ["offset"]
};
function Mm(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Dm(e) {
  return e === Ie(e) || !Fe(e) ? fi(e) : Mm(e);
}
function _m(e) {
  var t = e.getBoundingClientRect(), n = Ut(t.width) / e.offsetWidth || 1, r = Ut(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function jm(e, t, n) {
  n === void 0 && (n = !1);
  var r = Fe(t), o = Fe(t) && _m(t), i = yt(t), s = zt(e, o, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((rt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  di(i)) && (c = Dm(t)), Fe(t) ? (l = zt(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = pi(i))), {
    x: s.left + c.scrollLeft - l.x,
    y: s.top + c.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Bm(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(c) {
      if (!n.has(c)) {
        var l = t.get(c);
        l && o(l);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || o(i);
  }), r;
}
function Lm(e) {
  var t = Bm(e);
  return Xh.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Fm(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Vm(e) {
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
var $a = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Na() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Wm(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? $a : o;
  return function(c, l, u) {
    u === void 0 && (u = i);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, $a, i),
      modifiersData: {},
      elements: {
        reference: c,
        popper: l
      },
      attributes: {},
      styles: {}
    }, h = [], m = !1, y = {
      state: p,
      setOptions: function(E) {
        var C = typeof E == "function" ? E(p.options) : E;
        f(), p.options = Object.assign({}, i, p.options, C), p.scrollParents = {
          reference: Pt(c) ? hn(c) : c.contextElement ? hn(c.contextElement) : [],
          popper: hn(l)
        };
        var T = Lm(Vm([].concat(r, p.options.modifiers)));
        return p.orderedModifiers = T.filter(function(b) {
          return b.enabled;
        }), g(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!m) {
          var E = p.elements, C = E.reference, T = E.popper;
          if (Na(C, T)) {
            p.rects = {
              reference: jm(C, In(T), p.options.strategy === "fixed"),
              popper: li(T)
            }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(d) {
              return p.modifiersData[d.name] = Object.assign({}, d.data);
            });
            for (var b = 0; b < p.orderedModifiers.length; b++) {
              if (p.reset === !0) {
                p.reset = !1, b = -1;
                continue;
              }
              var x = p.orderedModifiers[b], w = x.fn, O = x.options, j = O === void 0 ? {} : O, _ = x.name;
              typeof w == "function" && (p = w({
                state: p,
                options: j,
                name: _,
                instance: y
              }) || p);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Fm(function() {
        return new Promise(function(v) {
          y.forceUpdate(), v(p);
        });
      }),
      destroy: function() {
        f(), m = !0;
      }
    };
    if (!Na(c, l))
      return y;
    y.setOptions(u).then(function(v) {
      !m && u.onFirstUpdate && u.onFirstUpdate(v);
    });
    function g() {
      p.orderedModifiers.forEach(function(v) {
        var E = v.name, C = v.options, T = C === void 0 ? {} : C, b = v.effect;
        if (typeof b == "function") {
          var x = b({
            state: p,
            name: E,
            instance: y,
            options: T
          }), w = function() {
          };
          h.push(x || w);
        }
      });
    }
    function f() {
      h.forEach(function(v) {
        return v();
      }), h = [];
    }
    return y;
  };
}
var Um = [pm, $m, um, Zh, Rm, wm, Im, am, Cm], zm = /* @__PURE__ */ Wm({
  defaultModifiers: Um
});
function qm(e) {
  return Te("MuiPopper", e);
}
we("MuiPopper", ["root"]);
function Hm(e, t) {
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
function xr(e) {
  return typeof e == "function" ? e() : e;
}
function Br(e) {
  return e.nodeType !== void 0;
}
function Ym(e) {
  return !Br(e);
}
const Gm = (e) => {
  const {
    classes: t
  } = e;
  return Me({
    root: ["root"]
  }, qm, t);
}, Km = {}, Xm = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: c,
    open: l,
    placement: u,
    popperOptions: p,
    popperRef: h,
    slotProps: m = {},
    slots: y = {},
    TransitionProps: g,
    // @ts-ignore internal logic
    ownerState: f,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...v
  } = t, E = S.useRef(null), C = Ve(E, n), T = S.useRef(null), b = Ve(T, h), x = S.useRef(b);
  mn(() => {
    x.current = b;
  }, [b]), S.useImperativeHandle(h, () => T.current, []);
  const w = Hm(u, i), [O, j] = S.useState(w), [_, d] = S.useState(xr(r));
  S.useEffect(() => {
    T.current && T.current.forceUpdate();
  }), S.useEffect(() => {
    r && d(xr(r));
  }, [r]), mn(() => {
    if (!_ || !l)
      return;
    const N = (Z) => {
      j(Z.placement);
    };
    if (process.env.NODE_ENV !== "production" && _ && Br(_) && _.nodeType === 1) {
      const Z = _.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && Z.top === 0 && Z.left === 0 && Z.right === 0 && Z.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let A = [{
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
        state: Z
      }) => {
        N(Z);
      }
    }];
    c != null && (A = A.concat(c)), p && p.modifiers != null && (A = A.concat(p.modifiers));
    const L = zm(_, E.current, {
      placement: w,
      ...p,
      modifiers: A
    });
    return x.current(L), () => {
      L.destroy(), x.current(null);
    };
  }, [_, s, c, l, p, w]);
  const R = {
    placement: O
  };
  g !== null && (R.TransitionProps = g);
  const I = Gm(t), $ = y.root ?? "div", B = ll({
    elementType: $,
    externalSlotProps: m.root,
    externalForwardedProps: v,
    additionalProps: {
      role: "tooltip",
      ref: C
    },
    ownerState: t,
    className: I.root
  });
  return /* @__PURE__ */ U($, {
    ...B,
    children: typeof o == "function" ? o(R) : o
  });
}), pc = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: c = !1,
    keepMounted: l = !1,
    modifiers: u,
    open: p,
    placement: h = "bottom",
    popperOptions: m = Km,
    popperRef: y,
    style: g,
    transition: f = !1,
    slotProps: v = {},
    slots: E = {},
    ...C
  } = t, [T, b] = S.useState(!0), x = () => {
    b(!1);
  }, w = () => {
    b(!0);
  };
  if (!l && !p && (!f || T))
    return null;
  let O;
  if (i)
    O = i;
  else if (r) {
    const d = xr(r);
    O = d && Br(d) ? lt(d).body : lt(null).body;
  }
  const j = !p && l && (!f || T) ? "none" : void 0, _ = f ? {
    in: p,
    onEnter: x,
    onExited: w
  } : void 0;
  return /* @__PURE__ */ U(En, {
    disablePortal: c,
    container: O,
    children: /* @__PURE__ */ U(Xm, {
      anchorEl: r,
      direction: s,
      disablePortal: c,
      modifiers: u,
      ref: n,
      open: f ? !T : p,
      placement: h,
      popperOptions: m,
      popperRef: y,
      slotProps: v,
      slots: E,
      ...C,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: j,
        ...g
      },
      TransitionProps: _,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (pc.propTypes = {
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
  anchorEl: Ht(a.oneOfType([Lt, a.object, a.func]), (e) => {
    if (e.open) {
      const t = xr(e.anchorEl);
      if (t && Br(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Ym(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: a.oneOfType([a.node, a.func]),
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
  container: a.oneOfType([Lt, a.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: a.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: a.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: a.arrayOf(a.shape({
    data: a.object,
    effect: a.func,
    enabled: a.bool,
    fn: a.func,
    name: a.any,
    options: a.object,
    phase: a.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: a.arrayOf(a.string),
    requiresIfExists: a.arrayOf(a.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: a.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: a.shape({
    modifiers: a.array,
    onFirstUpdate: a.func,
    placement: a.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: a.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: _o,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: a.shape({
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: a.shape({
    root: a.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: a.bool
});
const Qm = fe(pc, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), hi = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = ys(), o = Pe({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    components: c,
    componentsProps: l,
    container: u,
    disablePortal: p,
    keepMounted: h,
    modifiers: m,
    open: y,
    placement: g,
    popperOptions: f,
    popperRef: v,
    transition: E,
    slots: C,
    slotProps: T,
    ...b
  } = o, x = (C == null ? void 0 : C.root) ?? (c == null ? void 0 : c.Root), w = {
    anchorEl: i,
    container: u,
    disablePortal: p,
    keepMounted: h,
    modifiers: m,
    open: y,
    placement: g,
    popperOptions: f,
    popperRef: v,
    transition: E,
    ...b
  };
  return /* @__PURE__ */ U(Qm, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: {
      root: x
    },
    slotProps: T ?? l,
    ...w,
    ref: n
  });
});
process.env.NODE_ENV !== "production" && (hi.propTypes = {
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
  anchorEl: a.oneOfType([Lt, a.object, a.func]),
  /**
   * Popper render function or node.
   */
  children: a.oneOfType([a.node, a.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: a.shape({
    Root: a.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: a.shape({
    root: a.oneOfType([a.func, a.object])
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
  container: a.oneOfType([Lt, a.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: a.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: a.arrayOf(a.shape({
    data: a.object,
    effect: a.func,
    enabled: a.bool,
    fn: a.func,
    name: a.any,
    options: a.object,
    phase: a.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: a.arrayOf(a.string),
    requiresIfExists: a.arrayOf(a.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: a.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: a.shape({
    modifiers: a.array,
    onFirstUpdate: a.func,
    placement: a.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: a.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: _o,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: a.shape({
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: a.shape({
    root: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: a.bool
});
function Jm(e) {
  return Te("MuiTooltip", e);
}
const ge = we("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function Zm(e) {
  return Math.round(e * 1e5) / 1e5;
}
const eg = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${oe(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return Me(s, Jm, t);
}, tg = fe(hi, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(Ge(({
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
      [`&[data-popper-placement*="bottom"] .${ge.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${ge.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${ge.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${ge.arrow}`]: {
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
      [`&[data-popper-placement*="right"] .${ge.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${ge.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${ge.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${ge.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), ng = fe("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${oe(n.placement.split("-")[0])}`]];
  }
})(Ge(({
  theme: e
}) => ({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Je(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium,
  [`.${ge.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${ge.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${ge.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${ge.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${Zm(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${ge.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${ge.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${ge.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${ge.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${ge.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${ge.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${ge.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${ge.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${ge.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${ge.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), rg = fe("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (e, t) => t.arrow
})(Ge(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : Je(e.palette.grey[700], 0.9),
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
let Yn = !1;
const Aa = new Tr();
let an = {
  x: 0,
  y: 0
};
function Gn(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const dc = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Pe({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: o = !1,
    children: i,
    classes: s,
    components: c = {},
    componentsProps: l = {},
    describeChild: u = !1,
    disableFocusListener: p = !1,
    disableHoverListener: h = !1,
    disableInteractive: m = !1,
    disableTouchListener: y = !1,
    enterDelay: g = 100,
    enterNextDelay: f = 0,
    enterTouchDelay: v = 700,
    followCursor: E = !1,
    id: C,
    leaveDelay: T = 0,
    leaveTouchDelay: b = 1500,
    onClose: x,
    onOpen: w,
    open: O,
    placement: j = "bottom",
    PopperComponent: _,
    PopperProps: d = {},
    slotProps: R = {},
    slots: I = {},
    title: $,
    TransitionComponent: B,
    TransitionProps: N,
    ...A
  } = r, L = /* @__PURE__ */ S.isValidElement(i) ? i : /* @__PURE__ */ U("span", {
    children: i
  }), Z = Nn(), K = ys(), [k, D] = S.useState(), [F, W] = S.useState(null), V = S.useRef(!1), z = m || E, q = _t(), H = _t(), Y = _t(), Q = _t(), [G, ie] = el({
    controlled: O,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let M = G;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: J
    } = S.useRef(O !== void 0);
    S.useEffect(() => {
      k && k.disabled && !J && $ !== "" && k.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [$, k, J]);
  }
  const pe = jo(C), xe = S.useRef(), qe = dt(() => {
    xe.current !== void 0 && (document.body.style.WebkitUserSelect = xe.current, xe.current = void 0), Q.clear();
  });
  S.useEffect(() => qe, [qe]);
  const vt = (J) => {
    Aa.clear(), Yn = !0, ie(!0), w && !M && w(J);
  }, De = dt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (J) => {
      Aa.start(800 + T, () => {
        Yn = !1;
      }), ie(!1), x && M && x(J), q.start(Z.transitions.duration.shortest, () => {
        V.current = !1;
      });
    }
  ), _e = (J) => {
    V.current && J.type !== "touchstart" || (k && k.removeAttribute("title"), H.clear(), Y.clear(), g || Yn && f ? H.start(Yn ? f : g, () => {
      vt(J);
    }) : vt(J));
  }, bt = (J) => {
    H.clear(), Y.start(T, () => {
      De(J);
    });
  }, [, Re] = S.useState(!1), it = (J) => {
    cr(J.target) || (Re(!1), bt(J));
  }, X = (J) => {
    k || D(J.currentTarget), cr(J.target) && (Re(!0), _e(J));
  }, Kt = (J) => {
    V.current = !0;
    const Ye = L.props;
    Ye.onTouchStart && Ye.onTouchStart(J);
  }, Xt = (J) => {
    Kt(J), Y.clear(), q.clear(), qe(), xe.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Q.start(v, () => {
      document.body.style.WebkitUserSelect = xe.current, _e(J);
    });
  }, Mn = (J) => {
    L.props.onTouchEnd && L.props.onTouchEnd(J), qe(), Y.start(b, () => {
      De(J);
    });
  };
  S.useEffect(() => {
    if (!M)
      return;
    function J(Ye) {
      Ye.key === "Escape" && De(Ye);
    }
    return document.addEventListener("keydown", J), () => {
      document.removeEventListener("keydown", J);
    };
  }, [De, M]);
  const Dn = Ve(Cn(L), D, n);
  !$ && $ !== 0 && (M = !1);
  const Rt = S.useRef(), _n = (J) => {
    const Ye = L.props;
    Ye.onMouseMove && Ye.onMouseMove(J), an = {
      x: J.clientX,
      y: J.clientY
    }, Rt.current && Rt.current.update();
  }, Qt = {}, Lr = typeof $ == "string";
  u ? (Qt.title = !M && Lr && !h ? $ : null, Qt["aria-describedby"] = M ? pe : null) : (Qt["aria-label"] = Lr ? $ : null, Qt["aria-labelledby"] = M && !Lr ? pe : null);
  const je = {
    ...Qt,
    ...A,
    ...L.props,
    className: ae(A.className, L.props.className),
    onTouchStart: Kt,
    ref: Dn,
    ...E ? {
      onMouseMove: _n
    } : {}
  };
  process.env.NODE_ENV !== "production" && (je["data-mui-internal-clone-element"] = !0, S.useEffect(() => {
    k && !k.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [k]));
  const Jt = {};
  y || (je.onTouchStart = Xt, je.onTouchEnd = Mn), h || (je.onMouseOver = Gn(_e, je.onMouseOver), je.onMouseLeave = Gn(bt, je.onMouseLeave), z || (Jt.onMouseOver = _e, Jt.onMouseLeave = bt)), p || (je.onFocus = Gn(X, je.onFocus), je.onBlur = Gn(it, je.onBlur), z || (Jt.onFocus = X, Jt.onBlur = it)), process.env.NODE_ENV !== "production" && L.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${L.props.title}\` or the Tooltip component.`].join(`
`));
  const xt = {
    ...r,
    isRtl: K,
    arrow: o,
    disableInteractive: z,
    placement: j,
    PopperComponentProp: _,
    touch: V.current
  }, He = typeof R.popper == "function" ? R.popper(xt) : R.popper, hc = S.useMemo(() => {
    var Ye, mi;
    let J = [{
      name: "arrow",
      enabled: !!F,
      options: {
        element: F,
        padding: 4
      }
    }];
    return (Ye = d.popperOptions) != null && Ye.modifiers && (J = J.concat(d.popperOptions.modifiers)), (mi = He == null ? void 0 : He.popperOptions) != null && mi.modifiers && (J = J.concat(He.popperOptions.modifiers)), {
      ...d.popperOptions,
      ...He == null ? void 0 : He.popperOptions,
      modifiers: J
    };
  }, [F, d.popperOptions, He == null ? void 0 : He.popperOptions]), Fr = eg(xt), mc = typeof R.transition == "function" ? R.transition(xt) : R.transition, jn = {
    slots: {
      popper: c.Popper,
      transition: c.Transition ?? B,
      tooltip: c.Tooltip,
      arrow: c.Arrow,
      ...I
    },
    slotProps: {
      arrow: R.arrow ?? l.arrow,
      popper: {
        ...d,
        ...He ?? l.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: R.tooltip ?? l.tooltip,
      transition: {
        ...N,
        ...mc ?? l.transition
      }
    }
  }, [gc, yc] = $e("popper", {
    elementType: tg,
    externalForwardedProps: jn,
    ownerState: xt,
    className: ae(Fr.popper, d == null ? void 0 : d.className)
  }), [vc, bc] = $e("transition", {
    elementType: vr,
    externalForwardedProps: jn,
    ownerState: xt
  }), [xc, Ec] = $e("tooltip", {
    elementType: ng,
    className: Fr.tooltip,
    externalForwardedProps: jn,
    ownerState: xt
  }), [Tc, wc] = $e("arrow", {
    elementType: rg,
    className: Fr.arrow,
    externalForwardedProps: jn,
    ownerState: xt,
    ref: W
  });
  return /* @__PURE__ */ et(S.Fragment, {
    children: [/* @__PURE__ */ S.cloneElement(L, je), /* @__PURE__ */ U(gc, {
      as: _ ?? hi,
      placement: j,
      anchorEl: E ? {
        getBoundingClientRect: () => ({
          top: an.y,
          left: an.x,
          right: an.x,
          bottom: an.y,
          width: 0,
          height: 0
        })
      } : k,
      popperRef: Rt,
      open: k ? M : !1,
      id: pe,
      transition: !0,
      ...Jt,
      ...yc,
      popperOptions: hc,
      children: ({
        TransitionProps: J
      }) => /* @__PURE__ */ U(vc, {
        timeout: Z.transitions.duration.shorter,
        ...J,
        ...bc,
        children: /* @__PURE__ */ et(xc, {
          ...Ec,
          children: [$, o ? /* @__PURE__ */ U(Tc, {
            ...wc
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (dc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: a.bool,
  /**
   * Tooltip reference element.
   */
  children: Yt.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: a.shape({
    Arrow: a.elementType,
    Popper: a.elementType,
    Tooltip: a.elementType,
    Transition: a.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: a.shape({
    arrow: a.object,
    popper: a.object,
    tooltip: a.object,
    transition: a.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: a.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: a.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: a.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: a.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: a.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: a.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: a.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: a.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: a.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: a.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: a.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: a.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: a.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: a.func,
  /**
   * If `true`, the component is shown.
   */
  open: a.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: a.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @deprecated use the `slots.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: a.elementType,
  /**
   * Props applied to the [`Popper`](https://mui.com/material-ui/api/popper/) element.
   * @deprecated use the `slotProps.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PopperProps: a.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: a.shape({
    arrow: a.oneOfType([a.func, a.object]),
    popper: a.oneOfType([a.func, a.object]),
    tooltip: a.oneOfType([a.func, a.object]),
    transition: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: a.shape({
    arrow: a.elementType,
    popper: a.elementType,
    tooltip: a.elementType,
    transition: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: a.node,
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: a.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: a.object
});
const Ro = Sn(
  ({ text: e, isTitle: t = !1, titleLevel: n = "h5", ellipsis: r = !1, sx: o, ...i }) => {
    const s = $o(
      () => /* @__PURE__ */ U(
        ai,
        {
          component: "div",
          variant: t ? n : "body1",
          noWrap: r,
          sx: {
            fontWeight: t ? "bold" : "normal",
            ...o
          },
          ...i,
          children: e
        }
      ),
      [e, t, n, r, o, i]
    );
    return r ? /* @__PURE__ */ U(dc, { arrow: !0, title: e, children: s }) : s;
  }
);
Ro.displayName = "Text";
const og = Sn(
  ({
    isOpen: e,
    closeModal: t,
    isPrevented: n = !0,
    onSubmit: r,
    onClose: o,
    isSubmitting: i = !1,
    children: s,
    title: c = "",
    contentMessage: l = "",
    cancelButtonText: u = "Cancel",
    confirmButtonText: p = "Confirm",
    confirmButtonIsDisabled: h = !1,
    cancelButtonIsDisabled: m = !1,
    sx: y,
    ...g
  }) => {
    const f = Rc(e);
    ro(() => {
      f.current && !e && (o == null || o()), f.current = e;
    }, [e, o]);
    const v = $o(
      () => /* @__PURE__ */ et(Ia, { children: [
        /* @__PURE__ */ U(nc, { children: /* @__PURE__ */ U(Ro, { isTitle: !0, text: c }) }),
        /* @__PURE__ */ U(tc, { children: /* @__PURE__ */ U(Ro, { text: l }) }),
        /* @__PURE__ */ et(ec, { children: [
          /* @__PURE__ */ U(
            So,
            {
              text: u,
              onClick: t,
              disabled: m || i,
              variant: "outlined"
            }
          ),
          /* @__PURE__ */ U(
            So,
            {
              text: p,
              onClick: () => {
                (async () => (await (r == null ? void 0 : r()), t()))();
              },
              disabled: h,
              loading: i,
              autoFocus: !0
            }
          )
        ] })
      ] }),
      [
        m,
        u,
        t,
        h,
        p,
        l,
        r,
        i,
        c
      ]
    );
    return /* @__PURE__ */ et(
      Zs,
      {
        open: e,
        onClose: n ? void 0 : t,
        scroll: "paper",
        keepMounted: !0,
        sx: { ...y },
        ...g,
        children: [
          !s && v,
          s
        ]
      }
    );
  }
);
og.displayName = "Modal";
function ug() {
  const [e, t] = Qn(!1), n = gi(() => t(!0), []), r = gi(() => t(!1), []);
  return {
    isOpen: e,
    openModal: n,
    closeModal: r
  };
}
const ig = Sn(({ children: e }) => /* @__PURE__ */ U(Ia, { children: e }));
ig.displayName = "ThemeProvider";
export {
  So as Button,
  Xs as Icon,
  og as Modal,
  Ro as Text,
  ig as ThemeProvider,
  ug as useModal
};
