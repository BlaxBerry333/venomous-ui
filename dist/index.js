var Zf = Object.defineProperty;
var ed = (e, t, n) => t in e ? Zf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var tr = (e, t, n) => ed(e, typeof t != "symbol" ? t + "" : t, n);
import { jsx as B, jsxs as Ye, Fragment as yc } from "react/jsx-runtime";
import * as R from "react";
import K, { forwardRef as Ss, useContext as td, isValidElement as co, cloneElement as uo, Children as nd, useState as fo, useEffect as wo, createElement as Tn, memo as rn, useMemo as Fn, useRef as rd, useCallback as Ca } from "react";
import * as od from "react-dom";
import cr from "react-dom";
function id(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Kr = { exports: {} }, Xr = { exports: {} }, ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oa;
function sd() {
  if (Oa) return ye;
  Oa = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function E(S) {
    if (typeof S == "object" && S !== null) {
      var T = S.$$typeof;
      switch (T) {
        case t:
          switch (S = S.type, S) {
            case c:
            case u:
            case r:
            case i:
            case o:
            case p:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case a:
                case f:
                case b:
                case g:
                case s:
                  return S;
                default:
                  return T;
              }
          }
        case n:
          return T;
      }
    }
  }
  function w(S) {
    return E(S) === u;
  }
  return ye.AsyncMode = c, ye.ConcurrentMode = u, ye.ContextConsumer = a, ye.ContextProvider = s, ye.Element = t, ye.ForwardRef = f, ye.Fragment = r, ye.Lazy = b, ye.Memo = g, ye.Portal = n, ye.Profiler = i, ye.StrictMode = o, ye.Suspense = p, ye.isAsyncMode = function(S) {
    return w(S) || E(S) === c;
  }, ye.isConcurrentMode = w, ye.isContextConsumer = function(S) {
    return E(S) === a;
  }, ye.isContextProvider = function(S) {
    return E(S) === s;
  }, ye.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, ye.isForwardRef = function(S) {
    return E(S) === f;
  }, ye.isFragment = function(S) {
    return E(S) === r;
  }, ye.isLazy = function(S) {
    return E(S) === b;
  }, ye.isMemo = function(S) {
    return E(S) === g;
  }, ye.isPortal = function(S) {
    return E(S) === n;
  }, ye.isProfiler = function(S) {
    return E(S) === i;
  }, ye.isStrictMode = function(S) {
    return E(S) === o;
  }, ye.isSuspense = function(S) {
    return E(S) === p;
  }, ye.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === u || S === i || S === o || S === p || S === m || typeof S == "object" && S !== null && (S.$$typeof === b || S.$$typeof === g || S.$$typeof === s || S.$$typeof === a || S.$$typeof === f || S.$$typeof === v || S.$$typeof === y || S.$$typeof === x || S.$$typeof === d);
  }, ye.typeOf = E, ye;
}
var ve = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ra;
function ad() {
  return Ra || (Ra = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function E(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === r || j === u || j === i || j === o || j === p || j === m || typeof j == "object" && j !== null && (j.$$typeof === b || j.$$typeof === g || j.$$typeof === s || j.$$typeof === a || j.$$typeof === f || j.$$typeof === v || j.$$typeof === y || j.$$typeof === x || j.$$typeof === d);
    }
    function w(j) {
      if (typeof j == "object" && j !== null) {
        var de = j.$$typeof;
        switch (de) {
          case t:
            var Ie = j.type;
            switch (Ie) {
              case c:
              case u:
              case r:
              case i:
              case o:
              case p:
                return Ie;
              default:
                var Ve = Ie && Ie.$$typeof;
                switch (Ve) {
                  case a:
                  case f:
                  case b:
                  case g:
                  case s:
                    return Ve;
                  default:
                    return de;
                }
            }
          case n:
            return de;
        }
      }
    }
    var S = c, T = u, C = a, I = s, P = t, h = f, O = r, A = b, D = g, M = n, _ = i, L = o, V = p, te = !1;
    function ee(j) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(j) || w(j) === c;
    }
    function k(j) {
      return w(j) === u;
    }
    function F(j) {
      return w(j) === a;
    }
    function W(j) {
      return w(j) === s;
    }
    function q(j) {
      return typeof j == "object" && j !== null && j.$$typeof === t;
    }
    function Y(j) {
      return w(j) === f;
    }
    function Z(j) {
      return w(j) === r;
    }
    function J(j) {
      return w(j) === b;
    }
    function X(j) {
      return w(j) === g;
    }
    function $(j) {
      return w(j) === n;
    }
    function U(j) {
      return w(j) === i;
    }
    function G(j) {
      return w(j) === o;
    }
    function oe(j) {
      return w(j) === p;
    }
    ve.AsyncMode = S, ve.ConcurrentMode = T, ve.ContextConsumer = C, ve.ContextProvider = I, ve.Element = P, ve.ForwardRef = h, ve.Fragment = O, ve.Lazy = A, ve.Memo = D, ve.Portal = M, ve.Profiler = _, ve.StrictMode = L, ve.Suspense = V, ve.isAsyncMode = ee, ve.isConcurrentMode = k, ve.isContextConsumer = F, ve.isContextProvider = W, ve.isElement = q, ve.isForwardRef = Y, ve.isFragment = Z, ve.isLazy = J, ve.isMemo = X, ve.isPortal = $, ve.isProfiler = U, ve.isStrictMode = G, ve.isSuspense = oe, ve.isValidElementType = E, ve.typeOf = w;
  }()), ve;
}
var Ia;
function xs() {
  return Ia || (Ia = 1, process.env.NODE_ENV === "production" ? Xr.exports = sd() : Xr.exports = ad()), Xr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xi, Pa;
function ld() {
  if (Pa) return xi;
  Pa = 1;
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
  return xi = o() ? Object.assign : function(i, s) {
    for (var a, c = r(i), u, f = 1; f < arguments.length; f++) {
      a = Object(arguments[f]);
      for (var p in a)
        t.call(a, p) && (c[p] = a[p]);
      if (e) {
        u = e(a);
        for (var m = 0; m < u.length; m++)
          n.call(a, u[m]) && (c[u[m]] = a[u[m]]);
      }
    }
    return c;
  }, xi;
}
var Ti, ka;
function Ts() {
  if (ka) return Ti;
  ka = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ti = e, Ti;
}
var wi, Ma;
function vc() {
  return Ma || (Ma = 1, wi = Function.call.bind(Object.prototype.hasOwnProperty)), wi;
}
var Ei, $a;
function cd() {
  if ($a) return Ei;
  $a = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Ts(), n = {}, r = /* @__PURE__ */ vc();
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
          var p;
          try {
            if (typeof i[f] != "function") {
              var m = Error(
                (c || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            p = i[f](s, f, c, a, null, t);
          } catch (b) {
            p = b;
          }
          if (p && !(p instanceof Error) && e(
            (c || "React class") + ": type specification of " + a + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var g = u ? u() : "";
            e(
              "Failed " + a + " type: " + p.message + (g ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Ei = o, Ei;
}
var Ci, Na;
function ud() {
  if (Na) return Ci;
  Na = 1;
  var e = xs(), t = ld(), n = /* @__PURE__ */ Ts(), r = /* @__PURE__ */ vc(), o = /* @__PURE__ */ cd(), i = function() {
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
  return Ci = function(a, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function p(k) {
      var F = k && (u && k[u] || k[f]);
      if (typeof F == "function")
        return F;
    }
    var m = "<<anonymous>>", g = {
      array: y("array"),
      bigint: y("bigint"),
      bool: y("boolean"),
      func: y("function"),
      number: y("number"),
      object: y("object"),
      string: y("string"),
      symbol: y("symbol"),
      any: x(),
      arrayOf: E,
      element: w(),
      elementType: S(),
      instanceOf: T,
      node: h(),
      objectOf: I,
      oneOf: C,
      oneOfType: P,
      shape: A,
      exact: D
    };
    function b(k, F) {
      return k === F ? k !== 0 || 1 / k === 1 / F : k !== k && F !== F;
    }
    function d(k, F) {
      this.message = k, this.data = F && typeof F == "object" ? F : {}, this.stack = "";
    }
    d.prototype = Error.prototype;
    function v(k) {
      if (process.env.NODE_ENV !== "production")
        var F = {}, W = 0;
      function q(Z, J, X, $, U, G, oe) {
        if ($ = $ || m, G = G || X, oe !== n) {
          if (c) {
            var j = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw j.name = "Invariant Violation", j;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var de = $ + ":" + X;
            !F[de] && // Avoid spamming the console because they are often not actionable except for lib authors
            W < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), F[de] = !0, W++);
          }
        }
        return J[X] == null ? Z ? J[X] === null ? new d("The " + U + " `" + G + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new d("The " + U + " `" + G + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : k(J, X, $, U, G);
      }
      var Y = q.bind(null, !1);
      return Y.isRequired = q.bind(null, !0), Y;
    }
    function y(k) {
      function F(W, q, Y, Z, J, X) {
        var $ = W[q], U = L($);
        if (U !== k) {
          var G = V($);
          return new d(
            "Invalid " + Z + " `" + J + "` of type " + ("`" + G + "` supplied to `" + Y + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return v(F);
    }
    function x() {
      return v(s);
    }
    function E(k) {
      function F(W, q, Y, Z, J) {
        if (typeof k != "function")
          return new d("Property `" + J + "` of component `" + Y + "` has invalid PropType notation inside arrayOf.");
        var X = W[q];
        if (!Array.isArray(X)) {
          var $ = L(X);
          return new d("Invalid " + Z + " `" + J + "` of type " + ("`" + $ + "` supplied to `" + Y + "`, expected an array."));
        }
        for (var U = 0; U < X.length; U++) {
          var G = k(X, U, Y, Z, J + "[" + U + "]", n);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return v(F);
    }
    function w() {
      function k(F, W, q, Y, Z) {
        var J = F[W];
        if (!a(J)) {
          var X = L(J);
          return new d("Invalid " + Y + " `" + Z + "` of type " + ("`" + X + "` supplied to `" + q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(k);
    }
    function S() {
      function k(F, W, q, Y, Z) {
        var J = F[W];
        if (!e.isValidElementType(J)) {
          var X = L(J);
          return new d("Invalid " + Y + " `" + Z + "` of type " + ("`" + X + "` supplied to `" + q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(k);
    }
    function T(k) {
      function F(W, q, Y, Z, J) {
        if (!(W[q] instanceof k)) {
          var X = k.name || m, $ = ee(W[q]);
          return new d("Invalid " + Z + " `" + J + "` of type " + ("`" + $ + "` supplied to `" + Y + "`, expected ") + ("instance of `" + X + "`."));
        }
        return null;
      }
      return v(F);
    }
    function C(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function F(W, q, Y, Z, J) {
        for (var X = W[q], $ = 0; $ < k.length; $++)
          if (b(X, k[$]))
            return null;
        var U = JSON.stringify(k, function(oe, j) {
          var de = V(j);
          return de === "symbol" ? String(j) : j;
        });
        return new d("Invalid " + Z + " `" + J + "` of value `" + String(X) + "` " + ("supplied to `" + Y + "`, expected one of " + U + "."));
      }
      return v(F);
    }
    function I(k) {
      function F(W, q, Y, Z, J) {
        if (typeof k != "function")
          return new d("Property `" + J + "` of component `" + Y + "` has invalid PropType notation inside objectOf.");
        var X = W[q], $ = L(X);
        if ($ !== "object")
          return new d("Invalid " + Z + " `" + J + "` of type " + ("`" + $ + "` supplied to `" + Y + "`, expected an object."));
        for (var U in X)
          if (r(X, U)) {
            var G = k(X, U, Y, Z, J + "." + U, n);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return v(F);
    }
    function P(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var F = 0; F < k.length; F++) {
        var W = k[F];
        if (typeof W != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te(W) + " at index " + F + "."
          ), s;
      }
      function q(Y, Z, J, X, $) {
        for (var U = [], G = 0; G < k.length; G++) {
          var oe = k[G], j = oe(Y, Z, J, X, $, n);
          if (j == null)
            return null;
          j.data && r(j.data, "expectedType") && U.push(j.data.expectedType);
        }
        var de = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new d("Invalid " + X + " `" + $ + "` supplied to " + ("`" + J + "`" + de + "."));
      }
      return v(q);
    }
    function h() {
      function k(F, W, q, Y, Z) {
        return M(F[W]) ? null : new d("Invalid " + Y + " `" + Z + "` supplied to " + ("`" + q + "`, expected a ReactNode."));
      }
      return v(k);
    }
    function O(k, F, W, q, Y) {
      return new d(
        (k || "React class") + ": " + F + " type `" + W + "." + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Y + "`."
      );
    }
    function A(k) {
      function F(W, q, Y, Z, J) {
        var X = W[q], $ = L(X);
        if ($ !== "object")
          return new d("Invalid " + Z + " `" + J + "` of type `" + $ + "` " + ("supplied to `" + Y + "`, expected `object`."));
        for (var U in k) {
          var G = k[U];
          if (typeof G != "function")
            return O(Y, Z, J, U, V(G));
          var oe = G(X, U, Y, Z, J + "." + U, n);
          if (oe)
            return oe;
        }
        return null;
      }
      return v(F);
    }
    function D(k) {
      function F(W, q, Y, Z, J) {
        var X = W[q], $ = L(X);
        if ($ !== "object")
          return new d("Invalid " + Z + " `" + J + "` of type `" + $ + "` " + ("supplied to `" + Y + "`, expected `object`."));
        var U = t({}, W[q], k);
        for (var G in U) {
          var oe = k[G];
          if (r(k, G) && typeof oe != "function")
            return O(Y, Z, J, G, V(oe));
          if (!oe)
            return new d(
              "Invalid " + Z + " `" + J + "` key `" + G + "` supplied to `" + Y + "`.\nBad object: " + JSON.stringify(W[q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var j = oe(X, G, Y, Z, J + "." + G, n);
          if (j)
            return j;
        }
        return null;
      }
      return v(F);
    }
    function M(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(M);
          if (k === null || a(k))
            return !0;
          var F = p(k);
          if (F) {
            var W = F.call(k), q;
            if (F !== k.entries) {
              for (; !(q = W.next()).done; )
                if (!M(q.value))
                  return !1;
            } else
              for (; !(q = W.next()).done; ) {
                var Y = q.value;
                if (Y && !M(Y[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function _(k, F) {
      return k === "symbol" ? !0 : F ? F["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && F instanceof Symbol : !1;
    }
    function L(k) {
      var F = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : _(F, k) ? "symbol" : F;
    }
    function V(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var F = L(k);
      if (F === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return F;
    }
    function te(k) {
      var F = V(k);
      switch (F) {
        case "array":
        case "object":
          return "an " + F;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + F;
        default:
          return F;
      }
    }
    function ee(k) {
      return !k.constructor || !k.constructor.name ? m : k.constructor.name;
    }
    return g.checkPropTypes = o, g.resetWarningCache = o.resetWarningCache, g.PropTypes = g, g;
  }, Ci;
}
var Oi, Aa;
function fd() {
  if (Aa) return Oi;
  Aa = 1;
  var e = /* @__PURE__ */ Ts();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Oi = function() {
    function r(s, a, c, u, f, p) {
      if (p !== e) {
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
  }, Oi;
}
var Da;
function dd() {
  if (Da) return Kr.exports;
  if (Da = 1, process.env.NODE_ENV !== "production") {
    var e = xs(), t = !0;
    Kr.exports = /* @__PURE__ */ ud()(e.isElement, t);
  } else
    Kr.exports = /* @__PURE__ */ fd()();
  return Kr.exports;
}
var pd = /* @__PURE__ */ dd();
const l = /* @__PURE__ */ id(pd);
function bc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = bc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Se() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = bc(e)) && (r && (r += " "), r += t);
  return r;
}
function Sr(e, t) {
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
              n[o][c] = Sr(i[c], s[c]);
            }
        }
      } else n[o] === void 0 && (n[o] = e[o]);
    }
  return n;
}
function St(e, t, n = void 0) {
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
function ln(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
function hd(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function ws(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), hd(e, t, n);
}
function md(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function cn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return cn(md(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ln(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ln(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const gd = (e) => {
  const t = cn(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, ur = (e, t) => {
  try {
    return gd(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function qo(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Sc(e) {
  e = cn(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, f = (u + n / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let a = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", c.push(t[3])), qo({
    type: a,
    values: c
  });
}
function Ui(e) {
  e = cn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? cn(Sc(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function _a(e, t) {
  const n = Ui(e), r = Ui(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function At(e, t) {
  return e = cn(e), t = ws(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, qo(e);
}
function Jr(e, t, n) {
  try {
    return At(e, t);
  } catch {
    return e;
  }
}
function Go(e, t) {
  if (e = cn(e), t = ws(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return qo(e);
}
function Ee(e, t, n) {
  try {
    return Go(e, t);
  } catch {
    return e;
  }
}
function Yo(e, t) {
  if (e = cn(e), t = ws(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return qo(e);
}
function Ce(e, t, n) {
  try {
    return Yo(e, t);
  } catch {
    return e;
  }
}
function yd(e, t = 0.15) {
  return Ui(e) > 0.5 ? Go(e, t) : Yo(e, t);
}
function Qr(e, t, n) {
  try {
    return yd(e, t);
  } catch {
    return e;
  }
}
function Kn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
var Zr = { exports: {} }, Te = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ba;
function vd() {
  if (Ba) return Te;
  Ba = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
  function b(d) {
    if (typeof d == "object" && d !== null) {
      var v = d.$$typeof;
      switch (v) {
        case e:
          switch (d = d.type, d) {
            case n:
            case o:
            case r:
            case c:
            case u:
            case m:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case s:
                case a:
                case p:
                case f:
                  return d;
                case i:
                  return d;
                default:
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return Te.ContextConsumer = i, Te.ContextProvider = s, Te.Element = e, Te.ForwardRef = a, Te.Fragment = n, Te.Lazy = p, Te.Memo = f, Te.Portal = t, Te.Profiler = o, Te.StrictMode = r, Te.Suspense = c, Te.SuspenseList = u, Te.isContextConsumer = function(d) {
    return b(d) === i;
  }, Te.isContextProvider = function(d) {
    return b(d) === s;
  }, Te.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, Te.isForwardRef = function(d) {
    return b(d) === a;
  }, Te.isFragment = function(d) {
    return b(d) === n;
  }, Te.isLazy = function(d) {
    return b(d) === p;
  }, Te.isMemo = function(d) {
    return b(d) === f;
  }, Te.isPortal = function(d) {
    return b(d) === t;
  }, Te.isProfiler = function(d) {
    return b(d) === o;
  }, Te.isStrictMode = function(d) {
    return b(d) === r;
  }, Te.isSuspense = function(d) {
    return b(d) === c;
  }, Te.isSuspenseList = function(d) {
    return b(d) === u;
  }, Te.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === o || d === r || d === c || d === u || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === f || d.$$typeof === s || d.$$typeof === i || d.$$typeof === a || d.$$typeof === g || d.getModuleId !== void 0);
  }, Te.typeOf = b, Te;
}
var we = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var La;
function bd() {
  return La || (La = 1, process.env.NODE_ENV !== "production" && function() {
    function e(d) {
      if (typeof d == "object" && d !== null) {
        var v = d.$$typeof;
        switch (v) {
          case t:
            switch (d = d.type, d) {
              case r:
              case i:
              case o:
              case u:
              case f:
              case g:
                return d;
              default:
                switch (d = d && d.$$typeof, d) {
                  case a:
                  case c:
                  case m:
                  case p:
                    return d;
                  case s:
                    return d;
                  default:
                    return v;
                }
            }
          case n:
            return v;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), b = Symbol.for("react.client.reference");
    we.ContextConsumer = s, we.ContextProvider = a, we.Element = t, we.ForwardRef = c, we.Fragment = r, we.Lazy = m, we.Memo = p, we.Portal = n, we.Profiler = i, we.StrictMode = o, we.Suspense = u, we.SuspenseList = f, we.isContextConsumer = function(d) {
      return e(d) === s;
    }, we.isContextProvider = function(d) {
      return e(d) === a;
    }, we.isElement = function(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }, we.isForwardRef = function(d) {
      return e(d) === c;
    }, we.isFragment = function(d) {
      return e(d) === r;
    }, we.isLazy = function(d) {
      return e(d) === m;
    }, we.isMemo = function(d) {
      return e(d) === p;
    }, we.isPortal = function(d) {
      return e(d) === n;
    }, we.isProfiler = function(d) {
      return e(d) === i;
    }, we.isStrictMode = function(d) {
      return e(d) === o;
    }, we.isSuspense = function(d) {
      return e(d) === u;
    }, we.isSuspenseList = function(d) {
      return e(d) === f;
    }, we.isValidElementType = function(d) {
      return typeof d == "string" || typeof d == "function" || d === r || d === i || d === o || d === u || d === f || typeof d == "object" && d !== null && (d.$$typeof === m || d.$$typeof === p || d.$$typeof === a || d.$$typeof === s || d.$$typeof === c || d.$$typeof === b || d.getModuleId !== void 0);
    }, we.typeOf = e;
  }()), we;
}
var ja;
function Sd() {
  return ja || (ja = 1, process.env.NODE_ENV === "production" ? Zr.exports = /* @__PURE__ */ vd() : Zr.exports = /* @__PURE__ */ bd()), Zr.exports;
}
var Eo = /* @__PURE__ */ Sd();
function Ht(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function xc(e) {
  if (/* @__PURE__ */ R.isValidElement(e) || Eo.isValidElementType(e) || !Ht(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = xc(e[n]);
  }), t;
}
function mt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return Ht(e) && Ht(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ R.isValidElement(t[o]) || Eo.isValidElementType(t[o]) ? r[o] = t[o] : Ht(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ht(e[o]) ? r[o] = mt(e[o], t[o], n) : n.clone ? r[o] = Ht(t[o]) ? xc(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
function xd(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Tc(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  const c = i.type;
  return typeof c == "function" && !xd(c) && (a = "Did you accidentally use a plain function component for an element instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Xn = Kn(l.element, Tc);
Xn.isRequired = Kn(l.element.isRequired, Tc);
function Td(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function wd(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof i == "function" && !Td(i) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ed = Kn(l.elementType, wd), Cd = "exact-prop: ​";
function Ko(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Cd]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function wc(e, t = "") {
  return e.displayName || e.name || t;
}
function Fa(e, t, n) {
  const r = wc(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function Od(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return wc(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Eo.ForwardRef:
          return Fa(e, e.render, "ForwardRef");
        case Eo.Memo:
          return Fa(e, e.type, "memo");
        default:
          return;
      }
  }
}
function zn(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const Es = l.oneOfType([l.func, l.object]);
function be(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ln(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function za(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function en(e) {
  return e && e.ownerDocument || document;
}
function Co(e) {
  return en(e).defaultView || window;
}
function qi(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const En = typeof window < "u" ? R.useLayoutEffect : R.useEffect;
let Va = 0;
function Rd(e) {
  const [t, n] = R.useState(e), r = e || t;
  return R.useEffect(() => {
    t == null && (Va += 1, n(`mui-${Va}`));
  }, [t]), r;
}
const Id = {
  ...R
}, Wa = Id.useId;
function Cs(e) {
  if (Wa !== void 0) {
    const t = Wa();
    return e ?? t;
  }
  return Rd(e);
}
function Pd({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = R.useRef(e !== void 0), [i, s] = R.useState(t), a = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    R.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${r} state of ${n} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: u
    } = R.useRef(t);
    R.useEffect(() => {
      !o && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = R.useCallback((u) => {
    o || s(u);
  }, []);
  return [a, c];
}
function an(e) {
  const t = R.useRef(e);
  return En(() => {
    t.current = e;
  }), R.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function It(...e) {
  return R.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      qi(n, t);
    });
  }, e);
}
const Ha = {};
function Ec(e, t) {
  const n = R.useRef(Ha);
  return n.current === Ha && (n.current = e(t)), n;
}
const kd = [];
function Md(e) {
  R.useEffect(e, kd);
}
class Xo {
  constructor() {
    tr(this, "currentId", null);
    tr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    tr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Xo();
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
function _n() {
  const e = Ec(Xo.create).current;
  return Md(e.disposeEffect), e;
}
function Oo(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function $d(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function Nd(e) {
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
function Cc(e, t, n, r) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const i = Nd(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Oc(e, t, ...n) {
  return e[t] === void 0 ? null : Cc(e, t, ...n);
}
function Gi() {
  return null;
}
Oc.isRequired = Cc;
Gi.isRequired = Gi;
const Ad = process.env.NODE_ENV === "production" ? Gi : Oc, Ua = (e) => e, Dd = () => {
  let e = Ua;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ua;
    }
  };
}, Rc = Dd(), _d = {
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
function ot(e, t, n = "Mui") {
  const r = _d[t];
  return r ? `${n}-${r}` : `${Rc.generate(e)}-${t}`;
}
function it(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = ot(e, o, n);
  }), r;
}
function Bd(e) {
  return typeof e == "string";
}
function Ic(e, t, n) {
  return e === void 0 || Bd(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function Pc(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function qa(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function kc(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const g = Se(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), b = {
      ...n == null ? void 0 : n.style,
      ...o == null ? void 0 : o.style,
      ...r == null ? void 0 : r.style
    }, d = {
      ...n,
      ...o,
      ...r
    };
    return g.length > 0 && (d.className = g), Object.keys(b).length > 0 && (d.style = b), {
      props: d,
      internalRef: void 0
    };
  }
  const s = Pc({
    ...o,
    ...r
  }), a = qa(r), c = qa(o), u = t(s), f = Se(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), p = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...o == null ? void 0 : o.style,
    ...r == null ? void 0 : r.style
  }, m = {
    ...u,
    ...n,
    ...c,
    ...a
  };
  return f.length > 0 && (m.className = f), Object.keys(p).length > 0 && (m.style = p), {
    props: m,
    internalRef: u.ref
  };
}
function Mc(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Ld(e) {
  var p;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : Mc(n, r), {
    props: a,
    internalRef: c
  } = kc({
    ...i,
    externalSlotProps: s
  }), u = It(c, s == null ? void 0 : s.ref, (p = e.additionalProps) == null ? void 0 : p.ref);
  return Ic(t, {
    ...a,
    ref: u
  }, r);
}
function Dr(e) {
  var t;
  return parseInt(R.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function pr(e, t) {
  return t ? mt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const dn = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.string, l.object, l.array]) : {};
function jd(e, t) {
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
function Fd(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function zd(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : ln(18, `(${t})`));
    return null;
  }
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function Vd(e) {
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
const Jo = {
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
}, Ga = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Jo[e]}px)`
}, Wd = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Jo[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function tn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Ga;
    return t.reduce((s, a, c) => (s[i.up(i.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Ga;
    return Object.keys(t).reduce((s, a) => {
      if (Fd(i.keys, a)) {
        const c = zd(r.containerQueries ? r : Wd, a);
        c && (s[c] = n(t[a], a));
      } else if (Object.keys(i.values || Jo).includes(a)) {
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
function Hd(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function Ud(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Qo(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Ro(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Qo(e, n) || r, t && (o = t(o, r, e)), o;
}
function We(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], c = s.theme, u = Qo(c, r) || {};
    return tn(s, a, (p) => {
      let m = Ro(u, o, p);
      return p === m && typeof p == "string" && (m = Ro(u, o, `${t}${p === "default" ? "" : be(p)}`, p)), n === !1 ? m : {
        [n]: m
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: dn
  } : {}, i.filterProps = [t], i;
}
function qd(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Gd = {
  m: "margin",
  p: "padding"
}, Yd = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ya = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Kd = qd((e) => {
  if (e.length > 2)
    if (Ya[e])
      e = Ya[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Gd[t], o = Yd[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Zo = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ei = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Xd = [...Zo, ...ei];
function _r(e, t, n, r) {
  const o = Qo(e, t, !0) ?? n;
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
function Os(e) {
  return _r(e, "spacing", 8, "spacing");
}
function Br(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Jd(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Br(t, n), r), {});
}
function Qd(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const o = Kd(n), i = Jd(o, r), s = e[n];
  return tn(e, s, i);
}
function $c(e, t) {
  const n = Os(e.theme);
  return Object.keys(e).map((r) => Qd(e, t, r, n)).reduce(pr, {});
}
function je(e) {
  return $c(e, Zo);
}
je.propTypes = process.env.NODE_ENV !== "production" ? Zo.reduce((e, t) => (e[t] = dn, e), {}) : {};
je.filterProps = Zo;
function Fe(e) {
  return $c(e, ei);
}
Fe.propTypes = process.env.NODE_ENV !== "production" ? ei.reduce((e, t) => (e[t] = dn, e), {}) : {};
Fe.filterProps = ei;
process.env.NODE_ENV !== "production" && Xd.reduce((e, t) => (e[t] = dn, e), {});
function ti(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? pr(o, t[i](r)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, o) => Object.assign(r, o.propTypes), {}) : {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Et(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Mt(e, t) {
  return We({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Zd = Mt("border", Et), ep = Mt("borderTop", Et), tp = Mt("borderRight", Et), np = Mt("borderBottom", Et), rp = Mt("borderLeft", Et), op = Mt("borderColor"), ip = Mt("borderTopColor"), sp = Mt("borderRightColor"), ap = Mt("borderBottomColor"), lp = Mt("borderLeftColor"), cp = Mt("outline", Et), up = Mt("outlineColor"), ni = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = _r(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: Br(t, r)
    });
    return tn(e, e.borderRadius, n);
  }
  return null;
};
ni.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: dn
} : {};
ni.filterProps = ["borderRadius"];
ti(Zd, ep, tp, np, rp, op, ip, sp, ap, lp, ni, cp, up);
const ri = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = _r(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: Br(t, r)
    });
    return tn(e, e.gap, n);
  }
  return null;
};
ri.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: dn
} : {};
ri.filterProps = ["gap"];
const oi = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = _r(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: Br(t, r)
    });
    return tn(e, e.columnGap, n);
  }
  return null;
};
oi.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: dn
} : {};
oi.filterProps = ["columnGap"];
const ii = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = _r(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: Br(t, r)
    });
    return tn(e, e.rowGap, n);
  }
  return null;
};
ii.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: dn
} : {};
ii.filterProps = ["rowGap"];
const fp = We({
  prop: "gridColumn"
}), dp = We({
  prop: "gridRow"
}), pp = We({
  prop: "gridAutoFlow"
}), hp = We({
  prop: "gridAutoColumns"
}), mp = We({
  prop: "gridAutoRows"
}), gp = We({
  prop: "gridTemplateColumns"
}), yp = We({
  prop: "gridTemplateRows"
}), vp = We({
  prop: "gridTemplateAreas"
}), bp = We({
  prop: "gridArea"
});
ti(ri, oi, ii, fp, dp, pp, hp, mp, gp, yp, vp, bp);
function Bn(e, t) {
  return t === "grey" ? t : e;
}
const Sp = We({
  prop: "color",
  themeKey: "palette",
  transform: Bn
}), xp = We({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Bn
}), Tp = We({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Bn
});
ti(Sp, xp, Tp);
function dt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const wp = We({
  prop: "width",
  transform: dt
}), Rs = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, a, c;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || Jo[n];
      return r ? ((c = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: dt(n)
      };
    };
    return tn(e, e.maxWidth, t);
  }
  return null;
};
Rs.filterProps = ["maxWidth"];
const Ep = We({
  prop: "minWidth",
  transform: dt
}), Cp = We({
  prop: "height",
  transform: dt
}), Op = We({
  prop: "maxHeight",
  transform: dt
}), Rp = We({
  prop: "minHeight",
  transform: dt
});
We({
  prop: "size",
  cssProperty: "width",
  transform: dt
});
We({
  prop: "size",
  cssProperty: "height",
  transform: dt
});
const Ip = We({
  prop: "boxSizing"
});
ti(wp, Rs, Ep, Cp, Op, Rp, Ip);
const Lr = {
  // borders
  border: {
    themeKey: "borders",
    transform: Et
  },
  borderTop: {
    themeKey: "borders",
    transform: Et
  },
  borderRight: {
    themeKey: "borders",
    transform: Et
  },
  borderBottom: {
    themeKey: "borders",
    transform: Et
  },
  borderLeft: {
    themeKey: "borders",
    transform: Et
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
    transform: Et
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ni
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Bn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Bn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Bn
  },
  // spacing
  p: {
    style: Fe
  },
  pt: {
    style: Fe
  },
  pr: {
    style: Fe
  },
  pb: {
    style: Fe
  },
  pl: {
    style: Fe
  },
  px: {
    style: Fe
  },
  py: {
    style: Fe
  },
  padding: {
    style: Fe
  },
  paddingTop: {
    style: Fe
  },
  paddingRight: {
    style: Fe
  },
  paddingBottom: {
    style: Fe
  },
  paddingLeft: {
    style: Fe
  },
  paddingX: {
    style: Fe
  },
  paddingY: {
    style: Fe
  },
  paddingInline: {
    style: Fe
  },
  paddingInlineStart: {
    style: Fe
  },
  paddingInlineEnd: {
    style: Fe
  },
  paddingBlock: {
    style: Fe
  },
  paddingBlockStart: {
    style: Fe
  },
  paddingBlockEnd: {
    style: Fe
  },
  m: {
    style: je
  },
  mt: {
    style: je
  },
  mr: {
    style: je
  },
  mb: {
    style: je
  },
  ml: {
    style: je
  },
  mx: {
    style: je
  },
  my: {
    style: je
  },
  margin: {
    style: je
  },
  marginTop: {
    style: je
  },
  marginRight: {
    style: je
  },
  marginBottom: {
    style: je
  },
  marginLeft: {
    style: je
  },
  marginX: {
    style: je
  },
  marginY: {
    style: je
  },
  marginInline: {
    style: je
  },
  marginInlineStart: {
    style: je
  },
  marginInlineEnd: {
    style: je
  },
  marginBlock: {
    style: je
  },
  marginBlockStart: {
    style: je
  },
  marginBlockEnd: {
    style: je
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
    style: ri
  },
  rowGap: {
    style: ii
  },
  columnGap: {
    style: oi
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
    transform: dt
  },
  maxWidth: {
    style: Rs
  },
  minWidth: {
    transform: dt
  },
  height: {
    transform: dt
  },
  maxHeight: {
    transform: dt
  },
  minHeight: {
    transform: dt
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
function Pp(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function kp(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mp() {
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
      style: p
    } = a;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const m = Qo(o, u) || {};
    return p ? p(s) : tn(s, r, (b) => {
      let d = Ro(m, f, b);
      return b === d && typeof b == "string" && (d = Ro(m, f, `${n}${b === "default" ? "" : be(b)}`, b)), c === !1 ? d : {
        [c]: d
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
    const i = o.unstable_sxConfig ?? Lr;
    function s(a) {
      let c = a;
      if (typeof a == "function")
        c = a(o);
      else if (typeof a != "object")
        return a;
      if (!c)
        return null;
      const u = Hd(o.breakpoints), f = Object.keys(u);
      let p = u;
      return Object.keys(c).forEach((m) => {
        const g = kp(c[m], o);
        if (g != null)
          if (typeof g == "object")
            if (i[m])
              p = pr(p, e(m, g, o, i));
            else {
              const b = tn({
                theme: o
              }, g, (d) => ({
                [m]: d
              }));
              Pp(b, g) ? p[m] = t({
                sx: g,
                theme: o
              }) : p = pr(p, b);
            }
          else
            p = pr(p, e(m, g, o, i));
      }), jd(o, Ud(f, p));
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const un = Mp();
un.filterProps = ["sx"];
const $p = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? Lr;
  return Object.keys(e).forEach((o) => {
    n[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function Nc(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: r,
    otherProps: o
  } = $p(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...s) => {
    const a = t(...s);
    return Ht(a) ? {
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
function Io() {
  return Io = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Io.apply(null, arguments);
}
function Np(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Ap(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Dp = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ap(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Np(o);
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
}(), Qe = "-ms-", Po = "-moz-", he = "-webkit-", Ac = "comm", Is = "rule", Ps = "decl", _p = "@import", Dc = "@keyframes", Bp = "@layer", Lp = Math.abs, si = String.fromCharCode, jp = Object.assign;
function Fp(e, t) {
  return Xe(e, 0) ^ 45 ? (((t << 2 ^ Xe(e, 0)) << 2 ^ Xe(e, 1)) << 2 ^ Xe(e, 2)) << 2 ^ Xe(e, 3) : 0;
}
function _c(e) {
  return e.trim();
}
function zp(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function me(e, t, n) {
  return e.replace(t, n);
}
function Yi(e, t) {
  return e.indexOf(t);
}
function Xe(e, t) {
  return e.charCodeAt(t) | 0;
}
function xr(e, t, n) {
  return e.slice(t, n);
}
function zt(e) {
  return e.length;
}
function ks(e) {
  return e.length;
}
function eo(e, t) {
  return t.push(e), e;
}
function Vp(e, t) {
  return e.map(t).join("");
}
var ai = 1, Vn = 1, Bc = 0, ft = 0, Ue = 0, Jn = "";
function li(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: ai, column: Vn, length: s, return: "" };
}
function nr(e, t) {
  return jp(li("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Wp() {
  return Ue;
}
function Hp() {
  return Ue = ft > 0 ? Xe(Jn, --ft) : 0, Vn--, Ue === 10 && (Vn = 1, ai--), Ue;
}
function gt() {
  return Ue = ft < Bc ? Xe(Jn, ft++) : 0, Vn++, Ue === 10 && (Vn = 1, ai++), Ue;
}
function qt() {
  return Xe(Jn, ft);
}
function po() {
  return ft;
}
function jr(e, t) {
  return xr(Jn, e, t);
}
function Tr(e) {
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
function Lc(e) {
  return ai = Vn = 1, Bc = zt(Jn = e), ft = 0, [];
}
function jc(e) {
  return Jn = "", e;
}
function ho(e) {
  return _c(jr(ft - 1, Ki(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Up(e) {
  for (; (Ue = qt()) && Ue < 33; )
    gt();
  return Tr(e) > 2 || Tr(Ue) > 3 ? "" : " ";
}
function qp(e, t) {
  for (; --t && gt() && !(Ue < 48 || Ue > 102 || Ue > 57 && Ue < 65 || Ue > 70 && Ue < 97); )
    ;
  return jr(e, po() + (t < 6 && qt() == 32 && gt() == 32));
}
function Ki(e) {
  for (; gt(); )
    switch (Ue) {
      // ] ) " '
      case e:
        return ft;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ki(Ue);
        break;
      // (
      case 40:
        e === 41 && Ki(e);
        break;
      // \
      case 92:
        gt();
        break;
    }
  return ft;
}
function Gp(e, t) {
  for (; gt() && e + Ue !== 57; )
    if (e + Ue === 84 && qt() === 47)
      break;
  return "/*" + jr(t, ft - 1) + "*" + si(e === 47 ? e : gt());
}
function Yp(e) {
  for (; !Tr(qt()); )
    gt();
  return jr(e, ft);
}
function Kp(e) {
  return jc(mo("", null, null, null, [""], e = Lc(e), 0, [0], e));
}
function mo(e, t, n, r, o, i, s, a, c) {
  for (var u = 0, f = 0, p = s, m = 0, g = 0, b = 0, d = 1, v = 1, y = 1, x = 0, E = "", w = o, S = i, T = r, C = E; v; )
    switch (b = x, x = gt()) {
      // (
      case 40:
        if (b != 108 && Xe(C, p - 1) == 58) {
          Yi(C += me(ho(x), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += ho(x);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += Up(b);
        break;
      // \
      case 92:
        C += qp(po() - 1, 7);
        continue;
      // /
      case 47:
        switch (qt()) {
          case 42:
          case 47:
            eo(Xp(Gp(gt(), po()), t, n), c);
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * d:
        a[u++] = zt(C) * y;
      // } ; \0
      case 125 * d:
      case 59:
      case 0:
        switch (x) {
          // \0 }
          case 0:
          case 125:
            v = 0;
          // ;
          case 59 + f:
            y == -1 && (C = me(C, /\f/g, "")), g > 0 && zt(C) - p && eo(g > 32 ? Xa(C + ";", r, n, p - 1) : Xa(me(C, " ", "") + ";", r, n, p - 2), c);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (eo(T = Ka(C, t, n, u, f, o, a, E, w = [], S = [], p), i), x === 123)
              if (f === 0)
                mo(C, t, T, T, w, i, p, a, S);
              else
                switch (m === 99 && Xe(C, 3) === 110 ? 100 : m) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    mo(e, T, T, r && eo(Ka(e, T, T, 0, 0, o, a, E, o, w = [], p), S), o, S, p, a, r ? w : S);
                    break;
                  default:
                    mo(C, T, T, T, [""], S, 0, a, S);
                }
        }
        u = f = g = 0, d = y = 1, E = C = "", p = s;
        break;
      // :
      case 58:
        p = 1 + zt(C), g = b;
      default:
        if (d < 1) {
          if (x == 123)
            --d;
          else if (x == 125 && d++ == 0 && Hp() == 125)
            continue;
        }
        switch (C += si(x), x * d) {
          // &
          case 38:
            y = f > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            a[u++] = (zt(C) - 1) * y, y = 1;
            break;
          // @
          case 64:
            qt() === 45 && (C += ho(gt())), m = qt(), f = p = zt(E = C += Yp(po())), x++;
            break;
          // -
          case 45:
            b === 45 && zt(C) == 2 && (d = 0);
        }
    }
  return i;
}
function Ka(e, t, n, r, o, i, s, a, c, u, f) {
  for (var p = o - 1, m = o === 0 ? i : [""], g = ks(m), b = 0, d = 0, v = 0; b < r; ++b)
    for (var y = 0, x = xr(e, p + 1, p = Lp(d = s[b])), E = e; y < g; ++y)
      (E = _c(d > 0 ? m[y] + " " + x : me(x, /&\f/g, m[y]))) && (c[v++] = E);
  return li(e, t, n, o === 0 ? Is : a, c, u, f);
}
function Xp(e, t, n) {
  return li(e, t, n, Ac, si(Wp()), xr(e, 2, -2), 0);
}
function Xa(e, t, n, r) {
  return li(e, t, n, Ps, xr(e, 0, r), xr(e, r + 1, -1), r);
}
function Ln(e, t) {
  for (var n = "", r = ks(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Jp(e, t, n, r) {
  switch (e.type) {
    case Bp:
      if (e.children.length) break;
    case _p:
    case Ps:
      return e.return = e.return || e.value;
    case Ac:
      return "";
    case Dc:
      return e.return = e.value + "{" + Ln(e.children, r) + "}";
    case Is:
      e.value = e.props.join(",");
  }
  return zt(n = Ln(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Qp(e) {
  var t = ks(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function Zp(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Fc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var eh = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = qt(), o === 38 && i === 12 && (n[r] = 1), !Tr(i); )
    gt();
  return jr(t, ft);
}, th = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Tr(o)) {
      case 0:
        o === 38 && qt() === 12 && (n[r] = 1), t[r] += eh(ft - 1, n, r);
        break;
      case 2:
        t[r] += ho(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = qt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      // fallthrough
      default:
        t[r] += si(o);
    }
  while (o = gt());
  return t;
}, nh = function(t, n) {
  return jc(th(Lc(t), n));
}, Ja = /* @__PURE__ */ new WeakMap(), rh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ja.get(r)) && !o) {
      Ja.set(t, !0);
      for (var i = [], s = nh(n, i), a = r.props, c = 0, u = 0; c < s.length; c++)
        for (var f = 0; f < a.length; f++, u++)
          t.props[u] = i[c] ? s[c].replace(/&\f/g, a[f]) : a[f] + " " + s[c];
    }
  }
}, oh = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function zc(e, t) {
  switch (Fp(e, t)) {
    // color-adjust
    case 5103:
      return he + "print-" + e + e;
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
      return he + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return he + e + Po + e + Qe + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return he + e + Qe + e + e;
    // order
    case 6165:
      return he + e + Qe + "flex-" + e + e;
    // align-items
    case 5187:
      return he + e + me(e, /(\w+).+(:[^]+)/, he + "box-$1$2" + Qe + "flex-$1$2") + e;
    // align-self
    case 5443:
      return he + e + Qe + "flex-item-" + me(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return he + e + Qe + "flex-line-pack" + me(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return he + e + Qe + me(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return he + e + Qe + me(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return he + "box-" + me(e, "-grow", "") + he + e + Qe + me(e, "grow", "positive") + e;
    // transition
    case 4554:
      return he + me(e, /([^-])(transform)/g, "$1" + he + "$2") + e;
    // cursor
    case 6187:
      return me(me(me(e, /(zoom-|grab)/, he + "$1"), /(image-set)/, he + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return me(e, /(image-set\([^]*)/, he + "$1$`$1");
    // justify-content
    case 4968:
      return me(me(e, /(.+:)(flex-)?(.*)/, he + "box-pack:$3" + Qe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + he + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return me(e, /(.+)-inline(.+)/, he + "$1$2") + e;
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
      if (zt(e) - 1 - t > 6) switch (Xe(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (Xe(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return me(e, /(.+:)(.+)-([^]+)/, "$1" + he + "$2-$3$1" + Po + (Xe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Yi(e, "stretch") ? zc(me(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (Xe(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Xe(e, zt(e) - 3 - (~Yi(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return me(e, ":", ":" + he) + e;
        // (inline-)?fl(e)x
        case 101:
          return me(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + he + (Xe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + he + "$2$3$1" + Qe + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (Xe(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return he + e + Qe + me(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return he + e + Qe + me(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return he + e + Qe + me(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return he + e + Qe + e + e;
  }
  return e;
}
var ih = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Ps:
      t.return = zc(t.value, t.length);
      break;
    case Dc:
      return Ln([nr(t, {
        value: me(t.value, "@", "@" + he)
      })], o);
    case Is:
      if (t.length) return Vp(t.props, function(i) {
        switch (zp(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Ln([nr(t, {
              props: [me(i, /:(read-\w+)/, ":" + Po + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return Ln([nr(t, {
              props: [me(i, /:(plac\w+)/, ":" + he + "input-$1")]
            }), nr(t, {
              props: [me(i, /:(plac\w+)/, ":" + Po + "$1")]
            }), nr(t, {
              props: [me(i, /:(plac\w+)/, Qe + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, sh = [ih], ah = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(d) {
      var v = d.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(d), d.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || sh, i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(d) {
      for (var v = d.getAttribute("data-emotion").split(" "), y = 1; y < v.length; y++)
        i[v[y]] = !0;
      a.push(d);
    }
  );
  var c, u = [rh, oh];
  {
    var f, p = [Jp, Zp(function(d) {
      f.insert(d);
    })], m = Qp(u.concat(o, p)), g = function(v) {
      return Ln(Kp(v), m);
    };
    c = function(v, y, x, E) {
      f = x, g(v ? v + "{" + y.styles + "}" : y.styles), E && (b.inserted[y.name] = !0);
    };
  }
  var b = {
    key: n,
    sheet: new Dp({
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
  return b.sheet.hydrate(a), b;
}, Ri, Qa;
function lh() {
  if (Qa) return Ri;
  Qa = 1;
  var e = xs(), t = {
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
  function s(b) {
    return e.isMemo(b) ? o : i[b.$$typeof] || t;
  }
  var a = Object.defineProperty, c = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, m = Object.prototype;
  function g(b, d, v) {
    if (typeof d != "string") {
      if (m) {
        var y = p(d);
        y && y !== m && g(b, y, v);
      }
      var x = c(d);
      u && (x = x.concat(u(d)));
      for (var E = s(b), w = s(d), S = 0; S < x.length; ++S) {
        var T = x[S];
        if (!n[T] && !(v && v[T]) && !(w && w[T]) && !(E && E[T])) {
          var C = f(d, T);
          try {
            a(b, T, C);
          } catch {
          }
        }
      }
    }
    return b;
  }
  return Ri = g, Ri;
}
lh();
var ch = !0;
function Vc(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Ms = function(t, n, r) {
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
  ch === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, $s = function(t, n, r) {
  Ms(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function uh(e) {
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
var fh = {
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
}, dh = /[A-Z]|^ms/g, ph = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Wc = function(t) {
  return t.charCodeAt(1) === 45;
}, Za = function(t) {
  return t != null && typeof t != "boolean";
}, Ii = /* @__PURE__ */ Fc(function(e) {
  return Wc(e) ? e : e.replace(dh, "-$&").toLowerCase();
}), el = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(ph, function(r, o, i) {
          return Vt = {
            name: o,
            styles: i,
            next: Vt
          }, o;
        });
  }
  return fh[t] !== 1 && !Wc(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function wr(e, t, n) {
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
        return Vt = {
          name: o.name,
          styles: o.styles,
          next: Vt
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Vt = {
              name: s.name,
              styles: s.styles,
              next: Vt
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return hh(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = Vt, u = n(e);
        return Vt = c, wr(e, t, u);
      }
      break;
    }
  }
  var f = n;
  if (t == null)
    return f;
  var p = t[f];
  return p !== void 0 ? p : f;
}
function hh(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += wr(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : Za(a) && (r += Ii(i) + ":" + el(i, a) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var c = 0; c < s.length; c++)
          Za(s[c]) && (r += Ii(i) + ":" + el(i, s[c]) + ";");
      else {
        var u = wr(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Ii(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var tl = /label:\s*([^\s;{]+)\s*(;|$)/g, Vt;
function Fr(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  Vt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += wr(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += wr(n, t, e[a]), r) {
      var c = i;
      o += c[a];
    }
  tl.lastIndex = 0;
  for (var u = "", f; (f = tl.exec(o)) !== null; )
    u += "-" + f[1];
  var p = uh(o) + u;
  return {
    name: p,
    styles: o,
    next: Vt
  };
}
var mh = function(t) {
  return t();
}, Hc = R.useInsertionEffect ? R.useInsertionEffect : !1, Uc = Hc || mh, nl = Hc || R.useLayoutEffect, qc = /* @__PURE__ */ R.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ah({
    key: "css"
  }) : null
);
qc.Provider;
var Ns = function(t) {
  return /* @__PURE__ */ Ss(function(n, r) {
    var o = td(qc);
    return t(n, o, r);
  });
}, zr = /* @__PURE__ */ R.createContext({}), As = {}.hasOwnProperty, Xi = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", gh = function(t, n) {
  var r = {};
  for (var o in n)
    As.call(n, o) && (r[o] = n[o]);
  return r[Xi] = t, r;
}, yh = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Ms(n, r, o), Uc(function() {
    return $s(n, r, o);
  }), null;
}, vh = /* @__PURE__ */ Ns(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Xi], i = [r], s = "";
  typeof e.className == "string" ? s = Vc(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = Fr(i, void 0, R.useContext(zr));
  s += t.key + "-" + a.name;
  var c = {};
  for (var u in e)
    As.call(e, u) && u !== "css" && u !== Xi && (c[u] = e[u]);
  return c.className = s, n && (c.ref = n), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(yh, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ R.createElement(o, c));
}), bh = vh, rl = function(t, n) {
  var r = arguments;
  if (n == null || !As.call(n, "css"))
    return R.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = bh, i[1] = gh(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return R.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(rl || (rl = {}));
var Sh = /* @__PURE__ */ Ns(function(e, t) {
  var n = e.styles, r = Fr([n], void 0, R.useContext(zr)), o = R.useRef();
  return nl(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, c = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), c !== null && (a = !0, c.setAttribute("data-emotion", i), s.hydrate([c])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), nl(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && $s(t, r.next, !0), s.tags.length) {
      var c = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = c, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function Ds() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Fr(t);
}
function Vr() {
  var e = Ds.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var xh = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Th = /* @__PURE__ */ Fc(
  function(e) {
    return xh.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), wh = Th, Eh = function(t) {
  return t !== "theme";
}, ol = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? wh : Eh;
}, il = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Ch = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Ms(n, r, o), Uc(function() {
    return $s(n, r, o);
  }), null;
}, Oh = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = il(t, n, r), c = a || ol(o), u = !c("as");
  return function() {
    var f = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      p.push.apply(p, f);
    else {
      var m = f[0];
      p.push(m[0]);
      for (var g = f.length, b = 1; b < g; b++)
        p.push(f[b], m[b]);
    }
    var d = Ns(function(v, y, x) {
      var E = u && v.as || o, w = "", S = [], T = v;
      if (v.theme == null) {
        T = {};
        for (var C in v)
          T[C] = v[C];
        T.theme = R.useContext(zr);
      }
      typeof v.className == "string" ? w = Vc(y.registered, S, v.className) : v.className != null && (w = v.className + " ");
      var I = Fr(p.concat(S), y.registered, T);
      w += y.key + "-" + I.name, s !== void 0 && (w += " " + s);
      var P = u && a === void 0 ? ol(E) : c, h = {};
      for (var O in v)
        u && O === "as" || P(O) && (h[O] = v[O]);
      return h.className = w, x && (h.ref = x), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(Ch, {
        cache: y,
        serialized: I,
        isStringTag: typeof E == "string"
      }), /* @__PURE__ */ R.createElement(E, h));
    });
    return d.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", d.defaultProps = t.defaultProps, d.__emotion_real = d, d.__emotion_base = o, d.__emotion_styles = p, d.__emotion_forwardProp = a, Object.defineProperty(d, "toString", {
      value: function() {
        return "." + s;
      }
    }), d.withComponent = function(v, y) {
      var x = e(v, Io({}, n, y, {
        shouldForwardProp: il(d, y, !0)
      }));
      return x.apply(void 0, p);
    }, d;
  };
}, Rh = [
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
], Ji = Oh.bind(null);
Rh.forEach(function(e) {
  Ji[e] = Ji(e);
});
function Ih(e) {
  return e == null || Object.keys(e).length === 0;
}
function _s(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ B(Sh, {
    styles: typeof t == "function" ? (o) => t(Ih(o) ? n : o) : t
  });
}
process.env.NODE_ENV !== "production" && (_s.propTypes = {
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
function Gc(e, t) {
  const n = Ji(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function Ph(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const sl = [];
function al(e) {
  return sl[0] = e, Fr(sl);
}
const kh = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function Mh(e) {
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
  } = e, i = kh(t), s = Object.keys(i);
  function a(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
  }
  function c(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - r / 100}${n})`;
  }
  function u(m, g) {
    const b = s.indexOf(g);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : g) - r / 100}${n})`;
  }
  function f(m) {
    return s.indexOf(m) + 1 < s.length ? u(m, s[s.indexOf(m) + 1]) : a(m);
  }
  function p(m) {
    const g = s.indexOf(m);
    return g === 0 ? a(s[1]) : g === s.length - 1 ? c(s[g]) : u(m, s[s.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: a,
    down: c,
    between: u,
    only: f,
    not: p,
    unit: n,
    ...o
  };
}
const $h = {
  borderRadius: 4
};
function Yc(e = 8, t = Os({
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
function Nh(e, t) {
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
function Bs(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, a = Mh(n), c = Yc(o);
  let u = mt({
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
      ...$h,
      ...i
    }
  }, s);
  return u = Vd(u), u.applyStyles = Nh, u = t.reduce((f, p) => mt(f, p), u), u.unstable_sxConfig = {
    ...Lr,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(p) {
    return un({
      sx: p,
      theme: this
    });
  }, u;
}
function Ah(e) {
  return Object.keys(e).length === 0;
}
function Ls(e = null) {
  const t = R.useContext(zr);
  return !t || Ah(t) ? e : t;
}
const Dh = Bs();
function js(e = Dh) {
  return Ls(e);
}
function Kc({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = js(n), o = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ B(_s, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (Kc.propTypes = {
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
function _h(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = Gc("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(un);
  return /* @__PURE__ */ R.forwardRef(function(c, u) {
    const f = js(n), {
      className: p,
      component: m = "div",
      ...g
    } = Nc(c);
    return /* @__PURE__ */ B(i, {
      as: m,
      ref: u,
      className: Se(p, o ? o(r) : r),
      theme: t && f[t] || f,
      ...g
    });
  });
}
function Xc(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: al(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = al(o.style));
  }), r;
}
const Bh = Bs();
function Pi(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Lh(e) {
  return e ? (t, n) => n[e] : null;
}
function jh(e, t, n) {
  e.theme = Wh(e.theme) ? n : e.theme[t] || e.theme;
}
function go(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((r) => go(e, r));
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
    return Jc(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function Jc(e, t, n = []) {
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
function Fh(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Bh,
    rootShouldForwardProp: r = Pi,
    slotShouldForwardProp: o = Pi
  } = e;
  function i(a) {
    jh(a, t, n);
  }
  return (a, c = {}) => {
    Ph(a, (S) => S.filter((T) => T !== un));
    const {
      name: u,
      slot: f,
      skipVariantsResolver: p,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: g = Lh(Qc(f)),
      ...b
    } = c, d = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), v = m || !1;
    let y = Pi;
    f === "Root" || f === "root" ? y = r : f ? y = o : Hh(a) && (y = void 0);
    const x = Gc(a, {
      shouldForwardProp: y,
      label: Vh(u, f),
      ...b
    }), E = (S) => {
      if (typeof S == "function" && S.__emotion_real !== S)
        return function(C) {
          return go(C, S);
        };
      if (Ht(S)) {
        const T = Xc(S);
        return T.variants ? function(I) {
          return go(I, T);
        } : T.style;
      }
      return S;
    }, w = (...S) => {
      const T = [], C = S.map(E), I = [];
      if (T.push(i), u && g && I.push(function(A) {
        var L, V;
        const M = (V = (L = A.theme.components) == null ? void 0 : L[u]) == null ? void 0 : V.styleOverrides;
        if (!M)
          return null;
        const _ = {};
        for (const te in M)
          _[te] = go(A, M[te]);
        return g(A, _);
      }), u && !d && I.push(function(A) {
        var _, L;
        const D = A.theme, M = (L = (_ = D == null ? void 0 : D.components) == null ? void 0 : _[u]) == null ? void 0 : L.variants;
        return M ? Jc(A, M) : null;
      }), v || I.push(un), Array.isArray(C[0])) {
        const O = C.shift(), A = new Array(T.length).fill(""), D = new Array(I.length).fill("");
        let M;
        M = [...A, ...O, ...D], M.raw = [...A, ...O.raw, ...D], T.unshift(M);
      }
      const P = [...T, ...C, ...I], h = x(...P);
      return a.muiName && (h.muiName = a.muiName), process.env.NODE_ENV !== "production" && (h.displayName = zh(u, f, a)), h;
    };
    return x.withConfig && (w.withConfig = x.withConfig), w;
  };
}
function zh(e, t, n) {
  return e ? `${e}${be(t || "")}` : `Styled(${Od(n)})`;
}
function Vh(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${Qc(t || "Root")}`), n;
}
function Wh(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Hh(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Qc(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Uh(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Sr(t.components[n].defaultProps, r);
}
function qh(e, t, n, r, o) {
  const [i, s] = R.useState(() => o && n ? n(e).matches : r ? r(e).matches : t);
  return En(() => {
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
const Gh = {
  ...R
}, Zc = Gh.useSyncExternalStore;
function Yh(e, t, n, r, o) {
  const i = R.useCallback(() => t, [t]), s = R.useMemo(() => {
    if (o && n)
      return () => n(e).matches;
    if (r !== null) {
      const {
        matches: f
      } = r(e);
      return () => f;
    }
    return i;
  }, [i, e, r, o, n]), [a, c] = R.useMemo(() => {
    if (n === null)
      return [i, () => () => {
      }];
    const f = n(e);
    return [() => f.matches, (p) => (f.addEventListener("change", p), () => {
      f.removeEventListener("change", p);
    })];
  }, [i, n, e]);
  return Zc(c, a, s);
}
function eu(e = {}) {
  const {
    themeId: t
  } = e;
  return function(r, o = {}) {
    let i = Ls();
    i && t && (i = i[t] || i);
    const s = typeof window < "u" && typeof window.matchMedia < "u", {
      defaultMatches: a = !1,
      matchMedia: c = s ? window.matchMedia : null,
      ssrMatchMedia: u = null,
      noSsr: f = !1
    } = Uh({
      name: "MuiUseMediaQuery",
      props: o,
      theme: i
    });
    process.env.NODE_ENV !== "production" && typeof r == "function" && i === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
    let p = typeof r == "function" ? r(i) : r;
    p = p.replace(/^@media( ?)/m, "");
    const g = (Zc !== void 0 ? Yh : qh)(p, a, c, u, f);
    return process.env.NODE_ENV !== "production" && R.useDebugValue({
      query: p,
      match: g
    }), g;
  };
}
eu();
const Fs = /* @__PURE__ */ R.createContext(null);
process.env.NODE_ENV !== "production" && (Fs.displayName = "ThemeContext");
function zs() {
  const e = R.useContext(Fs);
  return process.env.NODE_ENV !== "production" && R.useDebugValue(e), e;
}
const Kh = typeof Symbol == "function" && Symbol.for, Xh = Kh ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Jh(e, t) {
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
function ko(e) {
  const {
    children: t,
    theme: n
  } = e, r = zs();
  process.env.NODE_ENV !== "production" && r === null && typeof n == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = R.useMemo(() => {
    const i = r === null ? {
      ...n
    } : Jh(r, n);
    return i != null && (i[Xh] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ B(Fs.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (ko.propTypes = {
  /**
   * Your component tree.
   */
  children: l.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: l.oneOfType([l.object, l.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (ko.propTypes = Ko(ko.propTypes));
const tu = /* @__PURE__ */ R.createContext();
function nu({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ B(tu.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (nu.propTypes = {
  children: l.node,
  value: l.bool
});
const ru = () => R.useContext(tu) ?? !1, ou = /* @__PURE__ */ R.createContext(void 0);
function iu({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ B(ou.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (iu.propTypes = {
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
function Qh(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Sr(o.defaultProps, r) : !o.styleOverrides && !o.variants ? Sr(o, r) : r;
}
function Zh({
  props: e,
  name: t
}) {
  const n = R.useContext(ou);
  return Qh({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const ll = {};
function cl(e, t, n, r = !1) {
  return R.useMemo(() => {
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
function Er(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Ls(ll), i = zs() || ll;
  process.env.NODE_ENV !== "production" && (o === null && typeof n == "function" || r && o && !o[r] && typeof n == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = cl(r, o, n), a = cl(r, i, n, !0), c = (r ? s[r] : s).direction === "rtl";
  return /* @__PURE__ */ B(ko, {
    theme: a,
    children: /* @__PURE__ */ B(zr.Provider, {
      value: s,
      children: /* @__PURE__ */ B(nu, {
        value: c,
        children: /* @__PURE__ */ B(iu, {
          value: r ? s[r].components : s.components,
          children: t
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Er.propTypes = {
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
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Er.propTypes = Ko(Er.propTypes));
const ul = {
  theme: void 0
};
function em(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (ul.theme = o.theme, i = Xc(e(ul)), t = i, n = o.theme), i;
  };
}
const Vs = "mode", Ws = "color-scheme", tm = "data-color-scheme";
function nm(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = Vs,
    colorSchemeStorageKey: i = Ws,
    attribute: s = tm,
    colorSchemeNode: a = "document.documentElement",
    nonce: c
  } = e || {};
  let u = "", f = s;
  if (s === "class" && (f = ".%s"), s === "data" && (f = "[data-%s]"), f.startsWith(".")) {
    const m = f.substring(1);
    u += `${a}.classList.remove('${m}'.replace('%s', light), '${m}'.replace('%s', dark));
      ${a}.classList.add('${m}'.replace('%s', colorScheme));`;
  }
  const p = f.match(/\[([^\]]+)\]/);
  if (p) {
    const [m, g] = p[1].split("=");
    g || (u += `${a}.removeAttribute('${m}'.replace('%s', light));
      ${a}.removeAttribute('${m}'.replace('%s', dark));`), u += `
      ${a}.setAttribute('${m}'.replace('%s', colorScheme), ${g ? `${g}.replace('%s', colorScheme)` : '""'});`;
  } else
    u += `${a}.setAttribute('${f}', colorScheme);`;
  return /* @__PURE__ */ B("script", {
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
function rm() {
}
const om = ({
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
      return rm;
    const r = (o) => {
      const i = o.newValue;
      o.key === e && n(i);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function ki() {
}
function fl(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function su(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function im(e) {
  return su(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function sm(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = Vs,
    colorSchemeStorageKey: s = Ws,
    storageWindow: a = typeof window > "u" ? void 0 : window,
    storageManager: c = om,
    noSsr: u = !1
  } = e, f = o.join(","), p = o.length > 1, m = R.useMemo(() => c == null ? void 0 : c({
    key: i,
    storageWindow: a
  }), [c, i, a]), g = R.useMemo(() => c == null ? void 0 : c({
    key: `${s}-light`,
    storageWindow: a
  }), [c, s, a]), b = R.useMemo(() => c == null ? void 0 : c({
    key: `${s}-dark`,
    storageWindow: a
  }), [c, s, a]), [d, v] = R.useState(() => {
    const I = (m == null ? void 0 : m.get(t)) || t, P = (g == null ? void 0 : g.get(n)) || n, h = (b == null ? void 0 : b.get(r)) || r;
    return {
      mode: I,
      systemMode: fl(I),
      lightColorScheme: P,
      darkColorScheme: h
    };
  }), [y, x] = R.useState(u || !p);
  R.useEffect(() => {
    x(!0);
  }, []);
  const E = im(d), w = R.useCallback((I) => {
    v((P) => {
      if (I === P.mode)
        return P;
      const h = I ?? t;
      return m == null || m.set(h), {
        ...P,
        mode: h,
        systemMode: fl(h)
      };
    });
  }, [m, t]), S = R.useCallback((I) => {
    I ? typeof I == "string" ? I && !f.includes(I) ? console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`) : v((P) => {
      const h = {
        ...P
      };
      return su(P, (O) => {
        O === "light" && (g == null || g.set(I), h.lightColorScheme = I), O === "dark" && (b == null || b.set(I), h.darkColorScheme = I);
      }), h;
    }) : v((P) => {
      const h = {
        ...P
      }, O = I.light === null ? n : I.light, A = I.dark === null ? r : I.dark;
      return O && (f.includes(O) ? (h.lightColorScheme = O, g == null || g.set(O)) : console.error(`\`${O}\` does not exist in \`theme.colorSchemes\`.`)), A && (f.includes(A) ? (h.darkColorScheme = A, b == null || b.set(A)) : console.error(`\`${A}\` does not exist in \`theme.colorSchemes\`.`)), h;
    }) : v((P) => (g == null || g.set(n), b == null || b.set(r), {
      ...P,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [f, g, b, n, r]), T = R.useCallback((I) => {
    d.mode === "system" && v((P) => {
      const h = I != null && I.matches ? "dark" : "light";
      return P.systemMode === h ? P : {
        ...P,
        systemMode: h
      };
    });
  }, [d.mode]), C = R.useRef(T);
  return C.current = T, R.useEffect(() => {
    if (typeof window.matchMedia != "function" || !p)
      return;
    const I = (...h) => C.current(...h), P = window.matchMedia("(prefers-color-scheme: dark)");
    return P.addListener(I), I(P), () => {
      P.removeListener(I);
    };
  }, [p]), R.useEffect(() => {
    if (p) {
      const I = (m == null ? void 0 : m.subscribe((O) => {
        (!O || ["light", "dark", "system"].includes(O)) && w(O || t);
      })) || ki, P = (g == null ? void 0 : g.subscribe((O) => {
        (!O || f.match(O)) && S({
          light: O
        });
      })) || ki, h = (b == null ? void 0 : b.subscribe((O) => {
        (!O || f.match(O)) && S({
          dark: O
        });
      })) || ki;
      return () => {
        I(), P(), h();
      };
    }
  }, [S, w, f, t, a, p, m, g, b]), {
    ...d,
    mode: y ? d.mode : void 0,
    systemMode: y ? d.systemMode : void 0,
    colorScheme: y ? E : void 0,
    setMode: w,
    setColorScheme: S
  };
}
const am = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function lm(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = Vs,
    colorSchemeStorageKey: o = Ws,
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
  }, u = /* @__PURE__ */ R.createContext(void 0);
  process.env.NODE_ENV !== "production" && (u.displayName = "ColorSchemeContext");
  const f = () => R.useContext(u) || c, p = {}, m = {};
  function g(y) {
    var Lt, Tt, jt, $t;
    const {
      children: x,
      theme: E,
      modeStorageKey: w = r,
      colorSchemeStorageKey: S = o,
      disableTransitionOnChange: T = i,
      storageManager: C,
      storageWindow: I = typeof window > "u" ? void 0 : window,
      documentNode: P = typeof document > "u" ? void 0 : document,
      colorSchemeNode: h = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: O = !1,
      disableStyleSheetGeneration: A = !1,
      defaultMode: D = "system",
      forceThemeRerender: M = !1,
      noSsr: _
    } = y, L = R.useRef(!1), V = zs(), te = R.useContext(u), ee = !!te && !O, k = R.useMemo(() => E || (typeof n == "function" ? n() : n), [E]), F = k[t], W = F || k, {
      colorSchemes: q = p,
      components: Y = m,
      cssVarPrefix: Z
    } = W, J = Object.keys(q).filter((Le) => !!q[Le]).join(","), X = R.useMemo(() => J.split(","), [J]), $ = typeof s == "string" ? s : s.light, U = typeof s == "string" ? s : s.dark, G = q[$] && q[U] ? D : ((Tt = (Lt = q[W.defaultColorScheme]) == null ? void 0 : Lt.palette) == null ? void 0 : Tt.mode) || ((jt = W.palette) == null ? void 0 : jt.mode), {
      mode: oe,
      setMode: j,
      systemMode: de,
      lightColorScheme: Ie,
      darkColorScheme: Ve,
      colorScheme: lt,
      setColorScheme: Ne
    } = sm({
      supportedColorSchemes: X,
      defaultLightColorScheme: $,
      defaultDarkColorScheme: U,
      modeStorageKey: w,
      colorSchemeStorageKey: S,
      defaultMode: G,
      storageManager: C,
      storageWindow: I,
      noSsr: _
    });
    let Pe = oe, ke = lt;
    ee && (Pe = te.mode, ke = te.colorScheme), process.env.NODE_ENV !== "production" && M && !W.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let _e = ke || W.defaultColorScheme;
    W.vars && !M && (_e = W.defaultColorScheme);
    const He = R.useMemo(() => {
      var rt;
      const Le = ((rt = W.generateThemeVars) == null ? void 0 : rt.call(W)) || W.vars, fe = {
        ...W,
        components: Y,
        colorSchemes: q,
        cssVarPrefix: Z,
        vars: Le
      };
      if (typeof fe.generateSpacing == "function" && (fe.spacing = fe.generateSpacing()), _e) {
        const Ke = q[_e];
        Ke && typeof Ke == "object" && Object.keys(Ke).forEach((Be) => {
          Ke[Be] && typeof Ke[Be] == "object" ? fe[Be] = {
            ...fe[Be],
            ...Ke[Be]
          } : fe[Be] = Ke[Be];
        });
      }
      return a ? a(fe) : fe;
    }, [W, _e, Y, q, Z]), re = W.colorSchemeSelector;
    En(() => {
      if (ke && h && re && re !== "media") {
        const Le = re;
        let fe = re;
        if (Le === "class" && (fe = ".%s"), Le === "data" && (fe = "[data-%s]"), Le != null && Le.startsWith("data-") && !Le.includes("%s") && (fe = `[${Le}="%s"]`), fe.startsWith("."))
          h.classList.remove(...X.map((rt) => fe.substring(1).replace("%s", rt))), h.classList.add(fe.substring(1).replace("%s", ke));
        else {
          const rt = fe.replace("%s", ke).match(/\[([^\]]+)\]/);
          if (rt) {
            const [Ke, Be] = rt[1].split("=");
            Be || X.forEach((bi) => {
              h.removeAttribute(Ke.replace(ke, bi));
            }), h.setAttribute(Ke, Be ? Be.replace(/"|'/g, "") : "");
          } else
            h.setAttribute(fe, ke);
        }
      }
    }, [ke, re, h, X]), R.useEffect(() => {
      let Le;
      if (T && L.current && P) {
        const fe = P.createElement("style");
        fe.appendChild(P.createTextNode(am)), P.head.appendChild(fe), window.getComputedStyle(P.body), Le = setTimeout(() => {
          P.head.removeChild(fe);
        }, 1);
      }
      return () => {
        clearTimeout(Le);
      };
    }, [ke, T, P]), R.useEffect(() => (L.current = !0, () => {
      L.current = !1;
    }), []);
    const xt = R.useMemo(() => ({
      allColorSchemes: X,
      colorScheme: ke,
      darkColorScheme: Ve,
      lightColorScheme: Ie,
      mode: Pe,
      setColorScheme: Ne,
      setMode: process.env.NODE_ENV === "production" ? j : (Le) => {
        He.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), j(Le);
      },
      systemMode: de
    }), [X, ke, Ve, Ie, Pe, Ne, j, de, He.colorSchemeSelector]);
    let tt = !0;
    (A || W.cssVariables === !1 || ee && (V == null ? void 0 : V.cssVarPrefix) === Z) && (tt = !1);
    const nt = /* @__PURE__ */ Ye(R.Fragment, {
      children: [/* @__PURE__ */ B(Er, {
        themeId: F ? t : void 0,
        theme: He,
        children: x
      }), tt && /* @__PURE__ */ B(_s, {
        styles: (($t = He.generateStyleSheets) == null ? void 0 : $t.call(He)) || []
      })]
    });
    return ee ? nt : /* @__PURE__ */ B(u.Provider, {
      value: xt,
      children: nt
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
  const b = typeof s == "string" ? s : s.light, d = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: g,
    useColorScheme: f,
    getInitColorSchemeScript: (y) => nm({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: b,
      defaultDarkColorScheme: d,
      modeStorageKey: r,
      ...y
    })
  };
}
function cm(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const dl = (e, t, n, r = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = n : o && typeof o == "object" && (o[i] = n) : o && typeof o == "object" && (o[i] || (o[i] = r.includes(i) ? [] : {}), o = o[i]);
  });
}, um = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([a, c]) => {
      (!n || n && !n([...i, a])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...i, a], Array.isArray(c) ? [...s, a] : s) : t([...i, a], c, s));
    });
  }
  r(e);
}, fm = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Mi(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return um(
    e,
    (a, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(a, c))) {
        const f = `--${n ? `${n}-` : ""}${a.join("-")}`, p = fm(a, c);
        Object.assign(o, {
          [f]: p
        }), dl(i, a, `var(${f})`, u), dl(s, a, `var(${f}, ${p})`, u);
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
function dm(e, t = {}) {
  const {
    getSelector: n = v,
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
    varsWithDefaults: p
  } = Mi(c, t);
  let m = p;
  const g = {}, {
    [a]: b,
    ...d
  } = i;
  if (Object.entries(d || {}).forEach(([E, w]) => {
    const {
      vars: S,
      css: T,
      varsWithDefaults: C
    } = Mi(w, t);
    m = mt(m, C), g[E] = {
      css: T,
      vars: S
    };
  }), b) {
    const {
      css: E,
      vars: w,
      varsWithDefaults: S
    } = Mi(b, t);
    m = mt(m, S), g[a] = {
      css: E,
      vars: w
    };
  }
  function v(E, w) {
    var T, C;
    let S = o;
    if (o === "class" && (S = ".%s"), o === "data" && (S = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (S = `[${o}="%s"]`), E) {
      if (S === "media")
        return e.defaultColorScheme === E ? ":root" : {
          [`@media (prefers-color-scheme: ${((C = (T = i[E]) == null ? void 0 : T.palette) == null ? void 0 : C.mode) || E})`]: {
            ":root": w
          }
        };
      if (S)
        return e.defaultColorScheme === E ? `:root, ${S.replace("%s", String(E))}` : S.replace("%s", String(E));
    }
    return ":root";
  }
  return {
    vars: m,
    generateThemeVars: () => {
      let E = {
        ...u
      };
      return Object.entries(g).forEach(([, {
        vars: w
      }]) => {
        E = mt(E, w);
      }), E;
    },
    generateStyleSheets: () => {
      var I, P;
      const E = [], w = e.defaultColorScheme || "light";
      function S(h, O) {
        Object.keys(O).length && E.push(typeof h == "string" ? {
          [h]: {
            ...O
          }
        } : h);
      }
      S(n(void 0, {
        ...f
      }), f);
      const {
        [w]: T,
        ...C
      } = g;
      if (T) {
        const {
          css: h
        } = T, O = (P = (I = i[w]) == null ? void 0 : I.palette) == null ? void 0 : P.mode, A = !r && O ? {
          colorScheme: O,
          ...h
        } : {
          ...h
        };
        S(n(w, {
          ...A
        }), A);
      }
      return Object.entries(C).forEach(([h, {
        css: O
      }]) => {
        var M, _;
        const A = (_ = (M = i[h]) == null ? void 0 : M.palette) == null ? void 0 : _.mode, D = !r && A ? {
          colorScheme: A,
          ...O
        } : {
          ...O
        };
        S(n(h, {
          ...D
        }), D);
      }), E;
    }
  };
}
function pm(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const Cr = {
  black: "#000",
  white: "#fff"
}, hm = {
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
}, In = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Pn = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, rr = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, kn = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Mn = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, $n = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function au() {
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
      paper: Cr.white,
      default: Cr.white
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
const mm = au();
function lu() {
  return {
    text: {
      primary: Cr.white,
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
      active: Cr.white,
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
const pl = lu();
function hl(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Yo(e.main, o) : t === "dark" && (e.dark = Go(e.main, i)));
}
function gm(e = "light") {
  return e === "dark" ? {
    main: kn[200],
    light: kn[50],
    dark: kn[400]
  } : {
    main: kn[700],
    light: kn[400],
    dark: kn[800]
  };
}
function ym(e = "light") {
  return e === "dark" ? {
    main: In[200],
    light: In[50],
    dark: In[400]
  } : {
    main: In[500],
    light: In[300],
    dark: In[700]
  };
}
function vm(e = "light") {
  return e === "dark" ? {
    main: Pn[500],
    light: Pn[300],
    dark: Pn[700]
  } : {
    main: Pn[700],
    light: Pn[400],
    dark: Pn[800]
  };
}
function bm(e = "light") {
  return e === "dark" ? {
    main: Mn[400],
    light: Mn[300],
    dark: Mn[700]
  } : {
    main: Mn[700],
    light: Mn[500],
    dark: Mn[900]
  };
}
function Sm(e = "light") {
  return e === "dark" ? {
    main: $n[400],
    light: $n[300],
    dark: $n[700]
  } : {
    main: $n[800],
    light: $n[500],
    dark: $n[900]
  };
}
function xm(e = "light") {
  return e === "dark" ? {
    main: rr[400],
    light: rr[300],
    dark: rr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: rr[500],
    dark: rr[900]
  };
}
function Hs(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...o
  } = e, i = e.primary || gm(t), s = e.secondary || ym(t), a = e.error || vm(t), c = e.info || bm(t), u = e.success || Sm(t), f = e.warning || xm(t);
  function p(d) {
    const v = _a(d, pl.text.primary) >= n ? pl.text.primary : mm.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const y = _a(d, v);
      y < 3 && console.error([`MUI: The contrast ratio of ${y}:1 for ${v} on ${d}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const m = ({
    color: d,
    name: v,
    mainShade: y = 500,
    lightShade: x = 300,
    darkShade: E = 700
  }) => {
    if (d = {
      ...d
    }, !d.main && d[y] && (d.main = d[y]), !d.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${y}\` property.` : ln(11, v ? ` (${v})` : "", y));
    if (typeof d.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(d.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ln(12, v ? ` (${v})` : "", JSON.stringify(d.main)));
    return hl(d, "light", x, r), hl(d, "dark", E, r), d.contrastText || (d.contrastText = p(d.main)), d;
  };
  let g;
  return t === "light" ? g = au() : t === "dark" && (g = lu()), process.env.NODE_ENV !== "production" && (g || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), mt({
    // A collection of common colors.
    common: {
      ...Cr
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
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: hm,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...g
  }, o);
}
function Tm(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function wm(e, t) {
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
function Em(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ml = {
  textTransform: "uppercase"
}, gl = '"Roboto", "Helvetica", "Arial", sans-serif';
function cu(e, t) {
  const {
    fontFamily: n = gl,
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
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const m = r / 14, g = f || ((v) => `${v / c * m}rem`), b = (v, y, x, E, w) => ({
    fontFamily: n,
    fontWeight: v,
    fontSize: g(y),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: x,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === gl ? {
      letterSpacing: `${Em(E / y)}em`
    } : {},
    ...w,
    ...u
  }), d = {
    h1: b(o, 96, 1.167, -1.5),
    h2: b(o, 60, 1.2, -0.5),
    h3: b(i, 48, 1.167, 0),
    h4: b(i, 34, 1.235, 0.25),
    h5: b(i, 24, 1.334, 0),
    h6: b(s, 20, 1.6, 0.15),
    subtitle1: b(i, 16, 1.75, 0.15),
    subtitle2: b(s, 14, 1.57, 0.1),
    body1: b(i, 16, 1.5, 0.15),
    body2: b(i, 14, 1.43, 0.15),
    button: b(s, 14, 1.75, 0.4, ml),
    caption: b(i, 12, 1.66, 0.4),
    overline: b(i, 12, 2.66, 1, ml),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return mt({
    htmlFontSize: c,
    pxToRem: g,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: a,
    ...d
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const Cm = 0.2, Om = 0.14, Rm = 0.12;
function Ae(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Cm})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Om})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Rm})`].join(",");
}
const Im = ["none", Ae(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ae(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ae(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ae(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ae(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ae(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ae(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ae(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ae(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ae(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ae(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ae(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ae(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ae(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ae(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ae(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ae(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ae(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ae(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ae(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ae(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ae(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ae(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ae(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Pm = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, km = {
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
function yl(e) {
  return `${Math.round(e)}ms`;
}
function Mm(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function $m(e) {
  const t = {
    ...Pm,
    ...e.easing
  }, n = {
    ...km,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Mm,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: c = 0,
        ...u
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const f = (m) => typeof m == "string", p = (m) => !Number.isNaN(parseFloat(m));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(s) && !f(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), f(a) || console.error('MUI: Argument "easing" must be a string.'), !p(c) && !f(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof s == "string" ? s : yl(s)} ${a} ${typeof c == "string" ? c : yl(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const Nm = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Am(e) {
  return Ht(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function uu(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !Am(a) || s.startsWith("unstable_") ? delete r[s] : Ht(a) && (r[s] = {
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
function Qi(e = {}, ...t) {
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : ln(20));
  const f = Hs(i), p = Bs(e);
  let m = mt(p, {
    mixins: wm(p.breakpoints, r),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Im.slice(),
    typography: cu(f, a),
    transitions: $m(s),
    zIndex: {
      ...Nm
    }
  });
  if (m = mt(m, u), m = t.reduce((g, b) => mt(g, b), m), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], b = (d, v) => {
      let y;
      for (y in d) {
        const x = d[y];
        if (g.includes(y) && Object.keys(x).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const E = ot("", y);
            console.error([`MUI: The \`${v}\` component increases the CSS specificity of the \`${y}\` internal state.`, "You can not override it like this: ", JSON.stringify(d, null, 2), "", `Instead, you need to use the '&.${E}' syntax:`, JSON.stringify({
              root: {
                [`&.${E}`]: x
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          d[y] = {};
        }
      }
    };
    Object.keys(m.components).forEach((d) => {
      const v = m.components[d].styleOverrides;
      v && d.startsWith("Mui") && b(v, d);
    });
  }
  return m.unstable_sxConfig = {
    ...Lr,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, m.unstable_sx = function(b) {
    return un({
      sx: b,
      theme: this
    });
  }, m.toRuntimeSource = uu, m;
}
function Zi(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Dm = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Zi(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function fu(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function du(e) {
  return e === "dark" ? Dm : [];
}
function _m(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...o
  } = e, i = Hs(t);
  return {
    palette: i,
    opacity: {
      ...fu(i.mode),
      ...n
    },
    overlays: r || du(i.mode),
    ...o
  };
}
function Bm(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Lm = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], jm = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Lm(e.cssVarPrefix).forEach((a) => {
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
function Fm(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function N(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function fr(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Sc(e);
}
function Qt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = ur(fr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function zm(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ft = (e) => {
  try {
    return e();
  } catch {
  }
}, Vm = (e = "mui") => cm(e);
function $i(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = _m({
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
  } = Qi({
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
      ...fu(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || du(o)
  }, s;
}
function Wm(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = Bm,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...u
  } = e, f = Object.keys(n)[0], p = r || (n.light && f !== "light" ? "light" : f), m = Vm(i), {
    [p]: g,
    light: b,
    dark: d,
    ...v
  } = n, y = {
    ...v
  };
  let x = g;
  if ((p === "dark" && !("dark" in n) || p === "light" && !("light" in n)) && (x = !0), !x)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : ln(21, p));
  const E = $i(y, x, u, p);
  b && !y.light && $i(y, b, void 0, "light"), d && !y.dark && $i(y, d, void 0, "dark");
  let w = {
    defaultColorScheme: p,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: c,
    getCssVar: m,
    colorSchemes: y,
    font: {
      ...Tm(E.typography),
      ...E.font
    },
    spacing: zm(u.spacing)
  };
  Object.keys(w.colorSchemes).forEach((P) => {
    const h = w.colorSchemes[P].palette, O = (A) => {
      const D = A.split("-"), M = D[1], _ = D[2];
      return m(A, h[M][_]);
    };
    if (h.mode === "light" && (N(h.common, "background", "#fff"), N(h.common, "onBackground", "#000")), h.mode === "dark" && (N(h.common, "background", "#000"), N(h.common, "onBackground", "#fff")), Fm(h, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), h.mode === "light") {
      N(h.Alert, "errorColor", Ee(h.error.light, 0.6)), N(h.Alert, "infoColor", Ee(h.info.light, 0.6)), N(h.Alert, "successColor", Ee(h.success.light, 0.6)), N(h.Alert, "warningColor", Ee(h.warning.light, 0.6)), N(h.Alert, "errorFilledBg", O("palette-error-main")), N(h.Alert, "infoFilledBg", O("palette-info-main")), N(h.Alert, "successFilledBg", O("palette-success-main")), N(h.Alert, "warningFilledBg", O("palette-warning-main")), N(h.Alert, "errorFilledColor", Ft(() => h.getContrastText(h.error.main))), N(h.Alert, "infoFilledColor", Ft(() => h.getContrastText(h.info.main))), N(h.Alert, "successFilledColor", Ft(() => h.getContrastText(h.success.main))), N(h.Alert, "warningFilledColor", Ft(() => h.getContrastText(h.warning.main))), N(h.Alert, "errorStandardBg", Ce(h.error.light, 0.9)), N(h.Alert, "infoStandardBg", Ce(h.info.light, 0.9)), N(h.Alert, "successStandardBg", Ce(h.success.light, 0.9)), N(h.Alert, "warningStandardBg", Ce(h.warning.light, 0.9)), N(h.Alert, "errorIconColor", O("palette-error-main")), N(h.Alert, "infoIconColor", O("palette-info-main")), N(h.Alert, "successIconColor", O("palette-success-main")), N(h.Alert, "warningIconColor", O("palette-warning-main")), N(h.AppBar, "defaultBg", O("palette-grey-100")), N(h.Avatar, "defaultBg", O("palette-grey-400")), N(h.Button, "inheritContainedBg", O("palette-grey-300")), N(h.Button, "inheritContainedHoverBg", O("palette-grey-A100")), N(h.Chip, "defaultBorder", O("palette-grey-400")), N(h.Chip, "defaultAvatarColor", O("palette-grey-700")), N(h.Chip, "defaultIconColor", O("palette-grey-700")), N(h.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), N(h.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), N(h.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), N(h.LinearProgress, "primaryBg", Ce(h.primary.main, 0.62)), N(h.LinearProgress, "secondaryBg", Ce(h.secondary.main, 0.62)), N(h.LinearProgress, "errorBg", Ce(h.error.main, 0.62)), N(h.LinearProgress, "infoBg", Ce(h.info.main, 0.62)), N(h.LinearProgress, "successBg", Ce(h.success.main, 0.62)), N(h.LinearProgress, "warningBg", Ce(h.warning.main, 0.62)), N(h.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.11)`), N(h.Slider, "primaryTrack", Ce(h.primary.main, 0.62)), N(h.Slider, "secondaryTrack", Ce(h.secondary.main, 0.62)), N(h.Slider, "errorTrack", Ce(h.error.main, 0.62)), N(h.Slider, "infoTrack", Ce(h.info.main, 0.62)), N(h.Slider, "successTrack", Ce(h.success.main, 0.62)), N(h.Slider, "warningTrack", Ce(h.warning.main, 0.62));
      const A = Qr(h.background.default, 0.8);
      N(h.SnackbarContent, "bg", A), N(h.SnackbarContent, "color", Ft(() => h.getContrastText(A))), N(h.SpeedDialAction, "fabHoverBg", Qr(h.background.paper, 0.15)), N(h.StepConnector, "border", O("palette-grey-400")), N(h.StepContent, "border", O("palette-grey-400")), N(h.Switch, "defaultColor", O("palette-common-white")), N(h.Switch, "defaultDisabledColor", O("palette-grey-100")), N(h.Switch, "primaryDisabledColor", Ce(h.primary.main, 0.62)), N(h.Switch, "secondaryDisabledColor", Ce(h.secondary.main, 0.62)), N(h.Switch, "errorDisabledColor", Ce(h.error.main, 0.62)), N(h.Switch, "infoDisabledColor", Ce(h.info.main, 0.62)), N(h.Switch, "successDisabledColor", Ce(h.success.main, 0.62)), N(h.Switch, "warningDisabledColor", Ce(h.warning.main, 0.62)), N(h.TableCell, "border", Ce(Jr(h.divider, 1), 0.88)), N(h.Tooltip, "bg", Jr(h.grey[700], 0.92));
    }
    if (h.mode === "dark") {
      N(h.Alert, "errorColor", Ce(h.error.light, 0.6)), N(h.Alert, "infoColor", Ce(h.info.light, 0.6)), N(h.Alert, "successColor", Ce(h.success.light, 0.6)), N(h.Alert, "warningColor", Ce(h.warning.light, 0.6)), N(h.Alert, "errorFilledBg", O("palette-error-dark")), N(h.Alert, "infoFilledBg", O("palette-info-dark")), N(h.Alert, "successFilledBg", O("palette-success-dark")), N(h.Alert, "warningFilledBg", O("palette-warning-dark")), N(h.Alert, "errorFilledColor", Ft(() => h.getContrastText(h.error.dark))), N(h.Alert, "infoFilledColor", Ft(() => h.getContrastText(h.info.dark))), N(h.Alert, "successFilledColor", Ft(() => h.getContrastText(h.success.dark))), N(h.Alert, "warningFilledColor", Ft(() => h.getContrastText(h.warning.dark))), N(h.Alert, "errorStandardBg", Ee(h.error.light, 0.9)), N(h.Alert, "infoStandardBg", Ee(h.info.light, 0.9)), N(h.Alert, "successStandardBg", Ee(h.success.light, 0.9)), N(h.Alert, "warningStandardBg", Ee(h.warning.light, 0.9)), N(h.Alert, "errorIconColor", O("palette-error-main")), N(h.Alert, "infoIconColor", O("palette-info-main")), N(h.Alert, "successIconColor", O("palette-success-main")), N(h.Alert, "warningIconColor", O("palette-warning-main")), N(h.AppBar, "defaultBg", O("palette-grey-900")), N(h.AppBar, "darkBg", O("palette-background-paper")), N(h.AppBar, "darkColor", O("palette-text-primary")), N(h.Avatar, "defaultBg", O("palette-grey-600")), N(h.Button, "inheritContainedBg", O("palette-grey-800")), N(h.Button, "inheritContainedHoverBg", O("palette-grey-700")), N(h.Chip, "defaultBorder", O("palette-grey-700")), N(h.Chip, "defaultAvatarColor", O("palette-grey-300")), N(h.Chip, "defaultIconColor", O("palette-grey-300")), N(h.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), N(h.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), N(h.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), N(h.LinearProgress, "primaryBg", Ee(h.primary.main, 0.5)), N(h.LinearProgress, "secondaryBg", Ee(h.secondary.main, 0.5)), N(h.LinearProgress, "errorBg", Ee(h.error.main, 0.5)), N(h.LinearProgress, "infoBg", Ee(h.info.main, 0.5)), N(h.LinearProgress, "successBg", Ee(h.success.main, 0.5)), N(h.LinearProgress, "warningBg", Ee(h.warning.main, 0.5)), N(h.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.13)`), N(h.Slider, "primaryTrack", Ee(h.primary.main, 0.5)), N(h.Slider, "secondaryTrack", Ee(h.secondary.main, 0.5)), N(h.Slider, "errorTrack", Ee(h.error.main, 0.5)), N(h.Slider, "infoTrack", Ee(h.info.main, 0.5)), N(h.Slider, "successTrack", Ee(h.success.main, 0.5)), N(h.Slider, "warningTrack", Ee(h.warning.main, 0.5));
      const A = Qr(h.background.default, 0.98);
      N(h.SnackbarContent, "bg", A), N(h.SnackbarContent, "color", Ft(() => h.getContrastText(A))), N(h.SpeedDialAction, "fabHoverBg", Qr(h.background.paper, 0.15)), N(h.StepConnector, "border", O("palette-grey-600")), N(h.StepContent, "border", O("palette-grey-600")), N(h.Switch, "defaultColor", O("palette-grey-300")), N(h.Switch, "defaultDisabledColor", O("palette-grey-600")), N(h.Switch, "primaryDisabledColor", Ee(h.primary.main, 0.55)), N(h.Switch, "secondaryDisabledColor", Ee(h.secondary.main, 0.55)), N(h.Switch, "errorDisabledColor", Ee(h.error.main, 0.55)), N(h.Switch, "infoDisabledColor", Ee(h.info.main, 0.55)), N(h.Switch, "successDisabledColor", Ee(h.success.main, 0.55)), N(h.Switch, "warningDisabledColor", Ee(h.warning.main, 0.55)), N(h.TableCell, "border", Ee(Jr(h.divider, 1), 0.68)), N(h.Tooltip, "bg", Jr(h.grey[700], 0.92));
    }
    Qt(h.background, "default"), Qt(h.background, "paper"), Qt(h.common, "background"), Qt(h.common, "onBackground"), Qt(h, "divider"), Object.keys(h).forEach((A) => {
      const D = h[A];
      A !== "tonalOffset" && D && typeof D == "object" && (D.main && N(h[A], "mainChannel", ur(fr(D.main))), D.light && N(h[A], "lightChannel", ur(fr(D.light))), D.dark && N(h[A], "darkChannel", ur(fr(D.dark))), D.contrastText && N(h[A], "contrastTextChannel", ur(fr(D.contrastText))), A === "text" && (Qt(h[A], "primary"), Qt(h[A], "secondary")), A === "action" && (D.active && Qt(h[A], "active"), D.selected && Qt(h[A], "selected")));
    });
  }), w = t.reduce((P, h) => mt(P, h), w);
  const S = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: jm(w)
  }, {
    vars: T,
    generateThemeVars: C,
    generateStyleSheets: I
  } = dm(w, S);
  return w.vars = T, Object.entries(w.colorSchemes[w.defaultColorScheme]).forEach(([P, h]) => {
    w[P] = h;
  }), w.generateThemeVars = C, w.generateStyleSheets = I, w.generateSpacing = function() {
    return Yc(u.spacing, Os(this));
  }, w.getColorSchemeSelector = pm(a), w.spacing = w.generateSpacing(), w.shouldSkipGeneratingVar = s, w.unstable_sxConfig = {
    ...Lr,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, w.unstable_sx = function(h) {
    return un({
      sx: h,
      theme: this
    });
  }, w.toRuntimeSource = uu, w;
}
function vl(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Hs({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function ci(e = {}, ...t) {
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
      return Qi(e, ...t);
    let f = n;
    "palette" in e || u[a] && (u[a] !== !0 ? f = u[a].palette : a === "dark" && (f = {
      mode: "dark"
    }));
    const p = Qi({
      ...e,
      palette: f
    }, ...t);
    return p.defaultColorScheme = a, p.colorSchemes = u, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: p.palette
    }, vl(p, "dark", u.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: p.palette
    }, vl(p, "light", u.light)), p;
  }
  return !n && !("light" in u) && a === "light" && (u.light = !0), Wm({
    ...s,
    colorSchemes: u,
    defaultColorScheme: a,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Us = ci(), Dt = "$$material";
function Qn() {
  const e = js(Us);
  return process.env.NODE_ENV !== "production" && R.useDebugValue(e), e[Dt] || e;
}
function pu(e) {
  return /* @__PURE__ */ B(Kc, {
    ...e,
    defaultTheme: Us,
    themeId: Dt
  });
}
process.env.NODE_ENV !== "production" && (pu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: l.oneOfType([l.array, l.func, l.number, l.object, l.string, l.bool])
});
function Hm(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const hu = (e) => Hm(e) && e !== "classes", Re = Fh({
  themeId: Dt,
  defaultTheme: Us,
  rootShouldForwardProp: hu
});
function mu(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ B(pu, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
function Um() {
  return Nc;
}
const Bt = em;
process.env.NODE_ENV !== "production" && (l.node, l.object.isRequired);
function st(e) {
  return Zh(e);
}
class Mo {
  constructor() {
    tr(this, "mountEffect", () => {
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
    return new Mo();
  }
  static use() {
    const t = Ec(Mo.create).current, [n, r] = R.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, R.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Gm(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function qm() {
  return Mo.use();
}
function Gm() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
function gu(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function es(e, t) {
  return es = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, es(e, t);
}
function yu(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, es(e, t);
}
const bl = {
  disabled: !1
};
var Ym = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.shape({
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
const $o = K.createContext(null);
var Km = function(t) {
  return t.scrollTop;
}, dr = "unmounted", vn = "exited", bn = "entering", An = "entered", ts = "exiting", Xt = /* @__PURE__ */ function(e) {
  yu(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = o, a = s && !s.isMounting ? r.enter : r.appear, c;
    return i.appearStatus = null, r.in ? a ? (c = vn, i.appearStatus = bn) : c = An : r.unmountOnExit || r.mountOnEnter ? c = dr : c = vn, i.state = {
      status: c
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === dr ? {
      status: vn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== bn && s !== An && (i = bn) : (s === bn || s === An) && (i = ts);
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
      if (this.cancelNextCallback(), i === bn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : cr.findDOMNode(this);
          s && Km(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === vn && this.setState({
      status: dr
    });
  }, n.performEnter = function(o) {
    var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : o, c = this.props.nodeRef ? [a] : [cr.findDOMNode(this), a], u = c[0], f = c[1], p = this.getTimeouts(), m = a ? p.appear : p.enter;
    if (!o && !s || bl.disabled) {
      this.safeSetState({
        status: An
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, f), this.safeSetState({
      status: bn
    }, function() {
      i.props.onEntering(u, f), i.onTransitionEnd(m, function() {
        i.safeSetState({
          status: An
        }, function() {
          i.props.onEntered(u, f);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : cr.findDOMNode(this);
    if (!i || bl.disabled) {
      this.safeSetState({
        status: vn
      }, function() {
        o.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: ts
    }, function() {
      o.props.onExiting(a), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: vn
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
    if (o === dr)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var a = gu(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ K.createElement($o.Provider, {
        value: null
      }, typeof s == "function" ? s(o, a) : K.cloneElement(K.Children.only(s), a))
    );
  }, t;
}(K.Component);
Xt.contextType = $o;
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
    var n = Ym;
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
function Nn() {
}
Xt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Nn,
  onEntering: Nn,
  onEntered: Nn,
  onExit: Nn,
  onExiting: Nn,
  onExited: Nn
};
Xt.UNMOUNTED = dr;
Xt.EXITED = vn;
Xt.ENTERING = bn;
Xt.ENTERED = An;
Xt.EXITING = ts;
function Xm(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qs(e, t) {
  var n = function(i) {
    return t && co(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && nd.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function Jm(e, t) {
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
function Sn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Qm(e, t) {
  return qs(e.children, function(n) {
    return uo(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Sn(n, "appear", e),
      enter: Sn(n, "enter", e),
      exit: Sn(n, "exit", e)
    });
  });
}
function Zm(e, t, n) {
  var r = qs(e.children), o = Jm(t, r);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (co(s)) {
      var a = i in t, c = i in r, u = t[i], f = co(u) && !u.props.in;
      c && (!a || f) ? o[i] = uo(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: Sn(s, "exit", e),
        enter: Sn(s, "enter", e)
      }) : !c && a && !f ? o[i] = uo(s, {
        in: !1
      }) : c && a && co(u) && (o[i] = uo(s, {
        onExited: n.bind(null, s),
        in: u.props.in,
        exit: Sn(s, "exit", e),
        enter: Sn(s, "enter", e)
      }));
    }
  }), o;
}
var eg = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, tg = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Gs = /* @__PURE__ */ function(e) {
  yu(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = i.handleExited.bind(Xm(i));
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
      children: c ? Qm(o, a) : Zm(o, s, a),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var s = qs(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(a) {
      var c = Io({}, a.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, a = gu(o, ["component", "childFactory"]), c = this.state.contextValue, u = eg(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, i === null ? /* @__PURE__ */ K.createElement($o.Provider, {
      value: c
    }, u) : /* @__PURE__ */ K.createElement($o.Provider, {
      value: c
    }, /* @__PURE__ */ K.createElement(i, a, u));
  }, t;
}(K.Component);
Gs.propTypes = process.env.NODE_ENV !== "production" ? {
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
Gs.defaultProps = tg;
function vu(e) {
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
  } = e, [f, p] = R.useState(!1), m = Se(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, b = Se(n.child, f && n.childLeaving, r && n.childPulsate);
  return !a && !f && p(!0), R.useEffect(() => {
    if (!a && c != null) {
      const d = setTimeout(c, u);
      return () => {
        clearTimeout(d);
      };
    }
  }, [c, a, u]), /* @__PURE__ */ B("span", {
    className: m,
    style: g,
    children: /* @__PURE__ */ B("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (vu.propTypes = {
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
const wt = it("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), ns = 550, ng = 80, rg = Vr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, og = Vr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, ig = Vr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, sg = Re("span", {
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
}), ag = Re(vu, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${wt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${rg};
    animation-duration: ${ns}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${wt.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${wt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${wt.childLeaving} {
    opacity: 0;
    animation-name: ${og};
    animation-duration: ${ns}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${wt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${ig};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, bu = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = st({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s,
    ...a
  } = r, [c, u] = R.useState([]), f = R.useRef(0), p = R.useRef(null);
  R.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const m = R.useRef(!1), g = _n(), b = R.useRef(null), d = R.useRef(null), v = R.useCallback((w) => {
    const {
      pulsate: S,
      rippleX: T,
      rippleY: C,
      rippleSize: I,
      cb: P
    } = w;
    u((h) => [...h, /* @__PURE__ */ B(ag, {
      classes: {
        ripple: Se(i.ripple, wt.ripple),
        rippleVisible: Se(i.rippleVisible, wt.rippleVisible),
        ripplePulsate: Se(i.ripplePulsate, wt.ripplePulsate),
        child: Se(i.child, wt.child),
        childLeaving: Se(i.childLeaving, wt.childLeaving),
        childPulsate: Se(i.childPulsate, wt.childPulsate)
      },
      timeout: ns,
      pulsate: S,
      rippleX: T,
      rippleY: C,
      rippleSize: I
    }, f.current)]), f.current += 1, p.current = P;
  }, [i]), y = R.useCallback((w = {}, S = {}, T = () => {
  }) => {
    const {
      pulsate: C = !1,
      center: I = o || S.pulsate,
      fakeElement: P = !1
      // For test purposes
    } = S;
    if ((w == null ? void 0 : w.type) === "mousedown" && m.current) {
      m.current = !1;
      return;
    }
    (w == null ? void 0 : w.type) === "touchstart" && (m.current = !0);
    const h = P ? null : d.current, O = h ? h.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let A, D, M;
    if (I || w === void 0 || w.clientX === 0 && w.clientY === 0 || !w.clientX && !w.touches)
      A = Math.round(O.width / 2), D = Math.round(O.height / 2);
    else {
      const {
        clientX: _,
        clientY: L
      } = w.touches && w.touches.length > 0 ? w.touches[0] : w;
      A = Math.round(_ - O.left), D = Math.round(L - O.top);
    }
    if (I)
      M = Math.sqrt((2 * O.width ** 2 + O.height ** 2) / 3), M % 2 === 0 && (M += 1);
    else {
      const _ = Math.max(Math.abs((h ? h.clientWidth : 0) - A), A) * 2 + 2, L = Math.max(Math.abs((h ? h.clientHeight : 0) - D), D) * 2 + 2;
      M = Math.sqrt(_ ** 2 + L ** 2);
    }
    w != null && w.touches ? b.current === null && (b.current = () => {
      v({
        pulsate: C,
        rippleX: A,
        rippleY: D,
        rippleSize: M,
        cb: T
      });
    }, g.start(ng, () => {
      b.current && (b.current(), b.current = null);
    })) : v({
      pulsate: C,
      rippleX: A,
      rippleY: D,
      rippleSize: M,
      cb: T
    });
  }, [o, v, g]), x = R.useCallback(() => {
    y({}, {
      pulsate: !0
    });
  }, [y]), E = R.useCallback((w, S) => {
    if (g.clear(), (w == null ? void 0 : w.type) === "touchend" && b.current) {
      b.current(), b.current = null, g.start(0, () => {
        E(w, S);
      });
      return;
    }
    b.current = null, u((T) => T.length > 0 ? T.slice(1) : T), p.current = S;
  }, [g]);
  return R.useImperativeHandle(n, () => ({
    pulsate: x,
    start: y,
    stop: E
  }), [x, y, E]), /* @__PURE__ */ B(sg, {
    className: Se(wt.root, i.root, s),
    ref: d,
    ...a,
    children: /* @__PURE__ */ B(Gs, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (bu.propTypes = {
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
function lg(e) {
  return ot("MuiButtonBase", e);
}
const cg = it("MuiButtonBase", ["root", "disabled", "focusVisible"]), ug = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, s = St({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, lg, o);
  return n && r && (s.root += ` ${r}`), s;
}, fg = Re("button", {
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
  [`&.${cg.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Su = /* @__PURE__ */ R.forwardRef(function(t, n) {
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
    disableTouchRipple: p = !1,
    focusRipple: m = !1,
    focusVisibleClassName: g,
    LinkComponent: b = "a",
    onBlur: d,
    onClick: v,
    onContextMenu: y,
    onDragLeave: x,
    onFocus: E,
    onFocusVisible: w,
    onKeyDown: S,
    onKeyUp: T,
    onMouseDown: C,
    onMouseLeave: I,
    onMouseUp: P,
    onTouchEnd: h,
    onTouchMove: O,
    onTouchStart: A,
    tabIndex: D = 0,
    TouchRippleProps: M,
    touchRippleRef: _,
    type: L,
    ...V
  } = r, te = R.useRef(null), ee = qm(), k = It(ee.ref, _), [F, W] = R.useState(!1);
  u && F && W(!1), R.useImperativeHandle(o, () => ({
    focusVisible: () => {
      W(!0), te.current.focus();
    }
  }), []);
  const q = ee.shouldMount && !f && !u;
  R.useEffect(() => {
    F && m && !f && ee.pulsate();
  }, [f, m, F, ee]);
  const Y = Zt(ee, "start", C, p), Z = Zt(ee, "stop", y, p), J = Zt(ee, "stop", x, p), X = Zt(ee, "stop", P, p), $ = Zt(ee, "stop", (re) => {
    F && re.preventDefault(), I && I(re);
  }, p), U = Zt(ee, "start", A, p), G = Zt(ee, "stop", h, p), oe = Zt(ee, "stop", O, p), j = Zt(ee, "stop", (re) => {
    Oo(re.target) || W(!1), d && d(re);
  }, !1), de = an((re) => {
    te.current || (te.current = re.currentTarget), Oo(re.target) && (W(!0), w && w(re)), E && E(re);
  }), Ie = () => {
    const re = te.current;
    return c && c !== "button" && !(re.tagName === "A" && re.href);
  }, Ve = an((re) => {
    m && !re.repeat && F && re.key === " " && ee.stop(re, () => {
      ee.start(re);
    }), re.target === re.currentTarget && Ie() && re.key === " " && re.preventDefault(), S && S(re), re.target === re.currentTarget && Ie() && re.key === "Enter" && !u && (re.preventDefault(), v && v(re));
  }), lt = an((re) => {
    m && re.key === " " && F && !re.defaultPrevented && ee.stop(re, () => {
      ee.pulsate(re);
    }), T && T(re), v && re.target === re.currentTarget && Ie() && re.key === " " && !re.defaultPrevented && v(re);
  });
  let Ne = c;
  Ne === "button" && (V.href || V.to) && (Ne = b);
  const Pe = {};
  Ne === "button" ? (Pe.type = L === void 0 ? "button" : L, Pe.disabled = u) : (!V.href && !V.to && (Pe.role = "button"), u && (Pe["aria-disabled"] = u));
  const ke = It(n, te), _e = {
    ...r,
    centerRipple: i,
    component: c,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: p,
    focusRipple: m,
    tabIndex: D,
    focusVisible: F
  }, He = ug(_e);
  return /* @__PURE__ */ Ye(fg, {
    as: Ne,
    className: Se(He.root, a),
    ownerState: _e,
    onBlur: j,
    onClick: v,
    onContextMenu: Z,
    onFocus: de,
    onKeyDown: Ve,
    onKeyUp: lt,
    onMouseDown: Y,
    onMouseLeave: $,
    onMouseUp: X,
    onDragLeave: J,
    onTouchEnd: G,
    onTouchMove: oe,
    onTouchStart: U,
    ref: ke,
    tabIndex: u ? -1 : D,
    type: L,
    ...Pe,
    ...V,
    children: [s, q ? /* @__PURE__ */ B(bu, {
      ref: k,
      center: i,
      ...M
    }) : null]
  });
});
function Zt(e, t, n, r = !1) {
  return an((o) => (n && n(o), r || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (Su.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Es,
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
  component: Ed,
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
function dg(e) {
  return typeof e.main == "string";
}
function pg(e, t = []) {
  if (!dg(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Ys(e = []) {
  return ([, t]) => t && pg(t, e);
}
function hg(e) {
  return ot("MuiCircularProgress", e);
}
it("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const on = 44, rs = Vr`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, os = Vr`
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
`, mg = typeof rs != "string" ? Ds`
        animation: ${rs} 1.4s linear infinite;
      ` : null, gg = typeof os != "string" ? Ds`
        animation: ${os} 1.4s ease-in-out infinite;
      ` : null, yg = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, i = {
    root: ["root", n, `color${be(r)}`],
    svg: ["svg"],
    circle: ["circle", `circle${be(n)}`, o && "circleDisableShrink"]
  };
  return St(i, hg, t);
}, vg = Re("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${be(n.color)}`]];
  }
})(Bt(({
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
    style: mg || {
      animation: `${rs} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Ys()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), bg = Re("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), Sg = Re("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${be(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(Bt(({
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
    style: gg || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${os} 1.4s ease-in-out infinite`
    }
  }]
}))), xu = /* @__PURE__ */ R.forwardRef(function(t, n) {
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
    variant: p = "indeterminate",
    ...m
  } = r, g = {
    ...r,
    color: i,
    disableShrink: s,
    size: a,
    thickness: u,
    value: f,
    variant: p
  }, b = yg(g), d = {}, v = {}, y = {};
  if (p === "determinate") {
    const x = 2 * Math.PI * ((on - u) / 2);
    d.strokeDasharray = x.toFixed(3), y["aria-valuenow"] = Math.round(f), d.strokeDashoffset = `${((100 - f) / 100 * x).toFixed(3)}px`, v.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ B(vg, {
    className: Se(b.root, o),
    style: {
      width: a,
      height: a,
      ...v,
      ...c
    },
    ownerState: g,
    ref: n,
    role: "progressbar",
    ...y,
    ...m,
    children: /* @__PURE__ */ B(bg, {
      className: b.svg,
      ownerState: g,
      viewBox: `${on / 2} ${on / 2} ${on} ${on}`,
      children: /* @__PURE__ */ B(Sg, {
        className: b.circle,
        style: d,
        ownerState: g,
        cx: on,
        cy: on,
        r: (on - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (xu.propTypes = {
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
  disableShrink: Kn(l.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
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
function xg(e) {
  return ot("MuiButton", e);
}
const yn = it("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), Tu = /* @__PURE__ */ R.createContext({});
process.env.NODE_ENV !== "production" && (Tu.displayName = "ButtonGroupContext");
const wu = /* @__PURE__ */ R.createContext(void 0);
process.env.NODE_ENV !== "production" && (wu.displayName = "ButtonGroupButtonContext");
const Tg = (e) => {
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
    root: ["root", s && "loading", i, `${i}${be(t)}`, `size${be(o)}`, `${i}Size${be(o)}`, `color${be(t)}`, n && "disableElevation", r && "fullWidth", s && `loadingPosition${be(a)}`],
    startIcon: ["icon", "startIcon", `iconSize${be(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${be(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, f = St(u, xg, c);
  return {
    ...c,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...f
  };
}, Eu = [{
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
}], wg = Re(Su, {
  shouldForwardProp: (e) => hu(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${be(n.color)}`], t[`size${be(n.size)}`], t[`${n.variant}Size${be(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(Bt(({
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
    [`&.${yn.disabled}`]: {
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
        [`&.${yn.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${yn.disabled}`]: {
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
        [`&.${yn.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Ys()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[r].main,
        "--variant-outlinedColor": (e.vars || e).palette[r].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.5)` : At(e.palette[r].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[r].contrastText,
        "--variant-containedBg": (e.vars || e).palette[r].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[r].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : At(e.palette[r].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[r].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : At(e.palette[r].main, e.palette.action.hoverOpacity)
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
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : At(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : At(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${yn.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${yn.disabled}`]: {
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
        [`&.${yn.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), Eg = Re("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, n.loading && t.startIconLoadingStart, t[`iconSize${be(n.size)}`]];
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
  }, ...Eu]
})), Cg = Re("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, n.loading && t.endIconLoadingEnd, t[`iconSize${be(n.size)}`]];
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
  }, ...Eu]
})), Og = Re("span", {
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
})), Sl = Re("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, t) => t.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Cu = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = R.useContext(Tu), o = R.useContext(wu), i = Sr(r, t), s = st({
    props: i,
    name: "MuiButton"
  }), {
    children: a,
    color: c = "primary",
    component: u = "button",
    className: f,
    disabled: p = !1,
    disableElevation: m = !1,
    disableFocusRipple: g = !1,
    endIcon: b,
    focusVisibleClassName: d,
    fullWidth: v = !1,
    id: y,
    loading: x = null,
    loadingIndicator: E,
    loadingPosition: w = "center",
    size: S = "medium",
    startIcon: T,
    type: C,
    variant: I = "text",
    ...P
  } = s, h = Cs(y), O = E ?? /* @__PURE__ */ B(xu, {
    "aria-labelledby": h,
    color: "inherit",
    size: 16
  }), A = {
    ...s,
    color: c,
    component: u,
    disabled: p,
    disableElevation: m,
    disableFocusRipple: g,
    fullWidth: v,
    loading: x,
    loadingIndicator: O,
    loadingPosition: w,
    size: S,
    type: C,
    variant: I
  }, D = Tg(A), M = (T || x && w === "start") && /* @__PURE__ */ B(Eg, {
    className: D.startIcon,
    ownerState: A,
    children: T || /* @__PURE__ */ B(Sl, {
      className: D.loadingIconPlaceholder,
      ownerState: A
    })
  }), _ = (b || x && w === "end") && /* @__PURE__ */ B(Cg, {
    className: D.endIcon,
    ownerState: A,
    children: b || /* @__PURE__ */ B(Sl, {
      className: D.loadingIconPlaceholder,
      ownerState: A
    })
  }), L = o || "", V = typeof x == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ B("span", {
      className: D.loadingWrapper,
      style: {
        display: "contents"
      },
      children: x && /* @__PURE__ */ B(Og, {
        className: D.loadingIndicator,
        ownerState: A,
        children: O
      })
    })
  ) : null;
  return /* @__PURE__ */ Ye(wg, {
    ownerState: A,
    className: Se(r.className, D.root, f, L),
    component: u,
    disabled: p || x,
    focusRipple: !g,
    focusVisibleClassName: Se(D.focusVisible, d),
    ref: n,
    type: C,
    id: x ? h : y,
    ...P,
    classes: D,
    children: [M, w !== "end" && V, a, w === "end" && V, _]
  });
});
process.env.NODE_ENV !== "production" && (Cu.propTypes = {
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
const Ou = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), No = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Ks = Object.freeze({
  ...Ou,
  ...No
}), is = Object.freeze({
  ...Ks,
  body: "",
  hidden: !1
});
function Rg(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function xl(e, t) {
  const n = Rg(e, t);
  for (const r in is)
    r in No ? r in e && !(r in n) && (n[r] = No[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
  return n;
}
function Ig(e, t) {
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
function Pg(e, t, n) {
  const r = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let i = {};
  function s(a) {
    i = xl(
      r[a] || o[a],
      i
    );
  }
  return s(t), n.forEach(s), xl(e, i);
}
function Ru(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    t(o, null), n.push(o);
  });
  const r = Ig(e);
  for (const o in r) {
    const i = r[o];
    i && (t(o, Pg(e, o, i)), n.push(o));
  }
  return n;
}
const kg = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Ou
};
function Ni(e, t) {
  for (const n in t)
    if (n in e && typeof e[n] != typeof t[n])
      return !1;
  return !0;
}
function Iu(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Ni(e, kg))
    return null;
  const n = t.icons;
  for (const o in n) {
    const i = n[o];
    if (
      // Name cannot be empty
      !o || // Must have body
      typeof i.body != "string" || // Check other props
      !Ni(
        i,
        is
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
      !Ni(
        i,
        is
      )
    )
      return null;
  }
  return t;
}
const Pu = /^[a-z0-9]+(-[a-z0-9]+)*$/, ui = (e, t, n, r = "") => {
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
    return t && !yo(u) ? null : u;
  }
  const i = o[0], s = i.split("-");
  if (s.length > 1) {
    const a = {
      provider: r,
      prefix: s.shift(),
      name: s.join("-")
    };
    return t && !yo(a) ? null : a;
  }
  if (n && r === "") {
    const a = {
      provider: r,
      prefix: "",
      name: i
    };
    return t && !yo(a, n) ? null : a;
  }
  return null;
}, yo = (e, t) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e.prefix === "" || e.prefix) && e.name) : !1, Tl = /* @__PURE__ */ Object.create(null);
function Mg(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function Wn(e, t) {
  const n = Tl[e] || (Tl[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = Mg(e, t));
}
function ku(e, t) {
  return Iu(t) ? Ru(t, (n, r) => {
    r ? e.icons[n] = r : e.missing.add(n);
  }) : [];
}
function $g(e, t, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[t] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let Or = !1;
function Mu(e) {
  return typeof e == "boolean" && (Or = e), Or;
}
function wl(e) {
  const t = typeof e == "string" ? ui(e, !0, Or) : e;
  if (t) {
    const n = Wn(t.provider, t.prefix), r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function Ng(e, t) {
  const n = ui(e, !0, Or);
  if (!n)
    return !1;
  const r = Wn(n.provider, n.prefix);
  return t ? $g(r, n.name, t) : (r.missing.add(n.name), !0);
}
function Ag(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), Or && !t && !e.prefix) {
    let o = !1;
    return Iu(e) && (e.prefix = "", Ru(e, (i, s) => {
      Ng(i, s) && (o = !0);
    })), o;
  }
  const n = e.prefix;
  if (!yo({
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = Wn(t, n);
  return !!ku(r, e);
}
const $u = Object.freeze({
  width: null,
  height: null
}), Nu = Object.freeze({
  // Dimensions
  ...$u,
  // Transformations
  ...No
}), Dg = /(-?[0-9.]*[0-9]+[0-9.]*)/g, _g = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function El(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const r = e.split(Dg);
  if (r === null || !r.length)
    return e;
  const o = [];
  let i = r.shift(), s = _g.test(i);
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
function Bg(e, t = "defs") {
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
function Lg(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function jg(e, t, n) {
  const r = Bg(e);
  return Lg(r.defs, t + r.content + n);
}
const Fg = (e) => e === "unset" || e === "undefined" || e === "none";
function zg(e, t) {
  const n = {
    ...Ks,
    ...e
  }, r = {
    ...Nu,
    ...t
  }, o = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let i = n.body;
  [n, r].forEach((d) => {
    const v = [], y = d.hFlip, x = d.vFlip;
    let E = d.rotate;
    y ? x ? E += 2 : (v.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), v.push("scale(-1 1)"), o.top = o.left = 0) : x && (v.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), v.push("scale(1 -1)"), o.top = o.left = 0);
    let w;
    switch (E < 0 && (E -= Math.floor(E / 4) * 4), E = E % 4, E) {
      case 1:
        w = o.height / 2 + o.top, v.unshift(
          "rotate(90 " + w.toString() + " " + w.toString() + ")"
        );
        break;
      case 2:
        v.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        w = o.width / 2 + o.left, v.unshift(
          "rotate(-90 " + w.toString() + " " + w.toString() + ")"
        );
        break;
    }
    E % 2 === 1 && (o.left !== o.top && (w = o.left, o.left = o.top, o.top = w), o.width !== o.height && (w = o.width, o.width = o.height, o.height = w)), v.length && (i = jg(
      i,
      '<g transform="' + v.join(" ") + '">',
      "</g>"
    ));
  });
  const s = r.width, a = r.height, c = o.width, u = o.height;
  let f, p;
  s === null ? (p = a === null ? "1em" : a === "auto" ? u : a, f = El(p, c / u)) : (f = s === "auto" ? c : s, p = a === null ? El(f, u / c) : a === "auto" ? u : a);
  const m = {}, g = (d, v) => {
    Fg(v) || (m[d] = v.toString());
  };
  g("width", f), g("height", p);
  const b = [o.left, o.top, c, u];
  return m.viewBox = b.join(" "), {
    attributes: m,
    viewBox: b,
    body: i
  };
}
const Vg = /\sid="(\S+)"/g, Wg = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Hg = 0;
function Ug(e, t = Wg) {
  const n = [];
  let r;
  for (; r = Vg.exec(e); )
    n.push(r[1]);
  if (!n.length)
    return e;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((i) => {
    const s = typeof t == "function" ? t(i) : t + (Hg++).toString(), a = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"),
      "$1" + s + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const ss = /* @__PURE__ */ Object.create(null);
function qg(e, t) {
  ss[e] = t;
}
function as(e) {
  return ss[e] || ss[""];
}
function Xs(e) {
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
const Js = /* @__PURE__ */ Object.create(null), or = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], vo = [];
for (; or.length > 0; )
  or.length === 1 || Math.random() > 0.5 ? vo.push(or.shift()) : vo.push(or.pop());
Js[""] = Xs({
  resources: ["https://api.iconify.design"].concat(vo)
});
function Gg(e, t) {
  const n = Xs(t);
  return n === null ? !1 : (Js[e] = n, !0);
}
function Qs(e) {
  return Js[e];
}
const Yg = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Cl = Yg();
function Kg(e, t) {
  const n = Qs(e);
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
function Xg(e) {
  return e === 404;
}
const Jg = (e, t, n) => {
  const r = [], o = Kg(e, t), i = "icons";
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
function Qg(e) {
  if (typeof e == "string") {
    const t = Qs(e);
    if (t)
      return t.path;
  }
  return "/";
}
const Zg = (e, t, n) => {
  if (!Cl) {
    n("abort", 424);
    return;
  }
  let r = Qg(t.provider);
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
  Cl(e + r).then((i) => {
    const s = i.status;
    if (s !== 200) {
      setTimeout(() => {
        n(Xg(s) ? "abort" : "next", s);
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
}, ey = {
  prepare: Jg,
  send: Zg
};
function ty(e) {
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
    const i = o.provider, s = o.prefix, a = o.name, c = n[i] || (n[i] = /* @__PURE__ */ Object.create(null)), u = c[s] || (c[s] = Wn(i, s));
    let f;
    a in u.icons ? f = t.loaded : s === "" || u.missing.has(a) ? f = t.missing : f = t.pending;
    const p = {
      provider: i,
      prefix: s,
      name: a
    };
    f.push(p);
  }), t;
}
function Au(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
  });
}
function ny(e) {
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
      }), s.pending.length !== a && (n || Au([e], i.id), i.callback(
        s.loaded.slice(0),
        s.missing.slice(0),
        s.pending.slice(0),
        i.abort
      ));
    });
  }));
}
let ry = 0;
function oy(e, t, n) {
  const r = ry++, o = Au.bind(null, n, r);
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
function iy(e, t = !0, n = !1) {
  const r = [];
  return e.forEach((o) => {
    const i = typeof o == "string" ? ui(o, t, n) : o;
    i && r.push(i);
  }), r;
}
var sy = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function ay(e, t, n, r) {
  const o = e.resources.length, i = e.random ? Math.floor(Math.random() * o) : e.index;
  let s;
  if (e.random) {
    let T = e.resources.slice(0);
    for (s = []; T.length > 1; ) {
      const C = Math.floor(Math.random() * T.length);
      s.push(T[C]), T = T.slice(0, C).concat(T.slice(C + 1));
    }
    s = s.concat(T);
  } else
    s = e.resources.slice(i).concat(e.resources.slice(0, i));
  const a = Date.now();
  let c = "pending", u = 0, f, p = null, m = [], g = [];
  typeof r == "function" && g.push(r);
  function b() {
    p && (clearTimeout(p), p = null);
  }
  function d() {
    c === "pending" && (c = "aborted"), b(), m.forEach((T) => {
      T.status === "pending" && (T.status = "aborted");
    }), m = [];
  }
  function v(T, C) {
    C && (g = []), typeof T == "function" && g.push(T);
  }
  function y() {
    return {
      startTime: a,
      payload: t,
      status: c,
      queriesSent: u,
      queriesPending: m.length,
      subscribe: v,
      abort: d
    };
  }
  function x() {
    c = "failed", g.forEach((T) => {
      T(void 0, f);
    });
  }
  function E() {
    m.forEach((T) => {
      T.status === "pending" && (T.status = "aborted");
    }), m = [];
  }
  function w(T, C, I) {
    const P = C !== "success";
    switch (m = m.filter((h) => h !== T), c) {
      case "pending":
        break;
      case "failed":
        if (P || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (C === "abort") {
      f = I, x();
      return;
    }
    if (P) {
      f = I, m.length || (s.length ? S() : x());
      return;
    }
    if (b(), E(), !e.random) {
      const h = e.resources.indexOf(T.resource);
      h !== -1 && h !== e.index && (e.index = h);
    }
    c = "completed", g.forEach((h) => {
      h(I);
    });
  }
  function S() {
    if (c !== "pending")
      return;
    b();
    const T = s.shift();
    if (T === void 0) {
      if (m.length) {
        p = setTimeout(() => {
          b(), c === "pending" && (E(), x());
        }, e.timeout);
        return;
      }
      x();
      return;
    }
    const C = {
      status: "pending",
      resource: T,
      callback: (I, P) => {
        w(C, I, P);
      }
    };
    m.push(C), u++, p = setTimeout(S, e.rotate), n(T, t, C.callback);
  }
  return setTimeout(S), y;
}
function Du(e) {
  const t = {
    ...sy,
    ...e
  };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === "pending");
  }
  function o(a, c, u) {
    const f = ay(
      t,
      a,
      c,
      (p, m) => {
        r(), u && u(p, m);
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
function Ol() {
}
const Ai = /* @__PURE__ */ Object.create(null);
function ly(e) {
  if (!Ai[e]) {
    const t = Qs(e);
    if (!t)
      return;
    const n = Du(t), r = {
      config: t,
      redundancy: n
    };
    Ai[e] = r;
  }
  return Ai[e];
}
function cy(e, t, n) {
  let r, o;
  if (typeof e == "string") {
    const i = as(e);
    if (!i)
      return n(void 0, 424), Ol;
    o = i.send;
    const s = ly(e);
    s && (r = s.redundancy);
  } else {
    const i = Xs(e);
    if (i) {
      r = Du(i);
      const s = e.resources ? e.resources[0] : "", a = as(s);
      a && (o = a.send);
    }
  }
  return !r || !o ? (n(void 0, 424), Ol) : r.query(t, o, n)().abort;
}
function Rl() {
}
function uy(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, ny(e);
  }));
}
function fy(e) {
  const t = [], n = [];
  return e.forEach((r) => {
    (r.match(Pu) ? t : n).push(r);
  }), {
    valid: t,
    invalid: n
  };
}
function ir(e, t, n) {
  function r() {
    const o = e.pendingIcons;
    t.forEach((i) => {
      o && o.delete(i), e.icons[i] || e.missing.add(i);
    });
  }
  if (n && typeof n == "object")
    try {
      if (!ku(e, n).length) {
        r();
        return;
      }
    } catch (o) {
      console.error(o);
    }
  r(), uy(e);
}
function Il(e, t) {
  e instanceof Promise ? e.then((n) => {
    t(n);
  }).catch(() => {
    t(null);
  }) : t(e);
}
function dy(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = e, o = e.iconsToLoad;
    if (delete e.iconsToLoad, !o || !o.length)
      return;
    const i = e.loadIcon;
    if (e.loadIcons && (o.length > 1 || !i)) {
      Il(
        e.loadIcons(o, r, n),
        (f) => {
          ir(e, o, f);
        }
      );
      return;
    }
    if (i) {
      o.forEach((f) => {
        const p = i(f, r, n);
        Il(p, (m) => {
          const g = m ? {
            prefix: r,
            icons: {
              [f]: m
            }
          } : null;
          ir(e, [f], g);
        });
      });
      return;
    }
    const { valid: s, invalid: a } = fy(o);
    if (a.length && ir(e, a, null), !s.length)
      return;
    const c = r.match(Pu) ? as(n) : null;
    if (!c) {
      ir(e, s, null);
      return;
    }
    c.prepare(n, r, s).forEach((f) => {
      cy(n, f, (p) => {
        ir(e, f.icons, p);
      });
    });
  }));
}
const py = (e, t) => {
  const n = iy(e, !0, Mu()), r = ty(n);
  if (!r.pending.length) {
    let c = !0;
    return t && setTimeout(() => {
      c && t(
        r.loaded,
        r.missing,
        r.pending,
        Rl
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
    s = u, a = f, i.push(Wn(u, f));
    const p = o[u] || (o[u] = /* @__PURE__ */ Object.create(null));
    p[f] || (p[f] = []);
  }), r.pending.forEach((c) => {
    const { provider: u, prefix: f, name: p } = c, m = Wn(u, f), g = m.pendingIcons || (m.pendingIcons = /* @__PURE__ */ new Set());
    g.has(p) || (g.add(p), o[u][f].push(p));
  }), i.forEach((c) => {
    const u = o[c.provider][c.prefix];
    u.length && dy(c, u);
  }), t ? oy(t, r, i) : Rl;
};
function hy(e, t) {
  const n = {
    ...e
  };
  for (const r in t) {
    const o = t[r], i = typeof o;
    r in $u ? (o === null || o && (i === "string" || i === "number")) && (n[r] = o) : i === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o);
  }
  return n;
}
const my = /[\s,]+/;
function gy(e, t) {
  t.split(my).forEach((n) => {
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
function yy(e, t = 0) {
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
function vy(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t)
    n += " " + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function by(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Sy(e) {
  return "data:image/svg+xml," + by(e);
}
function xy(e) {
  return 'url("' + Sy(e) + '")';
}
let hr;
function Ty() {
  try {
    hr = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (e) => e
    });
  } catch {
    hr = null;
  }
}
function wy(e) {
  return hr === void 0 && Ty(), hr ? hr.createHTML(e) : e;
}
const _u = {
  ...Nu,
  inline: !1
}, Ey = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Cy = {
  display: "inline-block"
}, ls = {
  backgroundColor: "currentColor"
}, Bu = {
  backgroundColor: "transparent"
}, Pl = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, kl = {
  WebkitMask: ls,
  mask: ls,
  background: Bu
};
for (const e in kl) {
  const t = kl[e];
  for (const n in Pl)
    t[e + n] = Pl[n];
}
const Oy = {
  ..._u,
  inline: !0
};
function Ml(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const Ry = (e, t, n) => {
  const r = t.inline ? Oy : _u, o = hy(r, t), i = t.mode || "svg", s = {}, a = t.style || {}, c = {
    ...i === "svg" ? Ey : {}
  };
  if (n) {
    const v = ui(n, !1, !0);
    if (v) {
      const y = ["iconify"], x = [
        "provider",
        "prefix"
      ];
      for (const E of x)
        v[E] && y.push("iconify--" + v[E]);
      c.className = y.join(" ");
    }
  }
  for (let v in t) {
    const y = t[v];
    if (y !== void 0)
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
          c.ref = y;
          break;
        // Merge class names
        case "className":
          c[v] = (c[v] ? c[v] + " " : "") + y;
          break;
        // Boolean attributes
        case "inline":
        case "hFlip":
        case "vFlip":
          o[v] = y === !0 || y === "true" || y === 1;
          break;
        // Flip as string: 'horizontal,vertical'
        case "flip":
          typeof y == "string" && gy(o, y);
          break;
        // Color: copy to style
        case "color":
          s.color = y;
          break;
        // Rotation as string
        case "rotate":
          typeof y == "string" ? o[v] = yy(y) : typeof y == "number" && (o[v] = y);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          y !== !0 && y !== "true" && delete c["aria-hidden"];
          break;
        // Copy missing property if it does not exist in customisations
        default:
          r[v] === void 0 && (c[v] = y);
      }
  }
  const u = zg(e, o), f = u.attributes;
  if (o.inline && (s.verticalAlign = "-0.125em"), i === "svg") {
    c.style = {
      ...s,
      ...a
    }, Object.assign(c, f);
    let v = 0, y = t.id;
    return typeof y == "string" && (y = y.replace(/-/g, "_")), c.dangerouslySetInnerHTML = {
      __html: wy(Ug(u.body, y ? () => y + "ID" + v++ : "iconifyReact"))
    }, Tn("svg", c);
  }
  const { body: p, width: m, height: g } = e, b = i === "mask" || (i === "bg" ? !1 : p.indexOf("currentColor") !== -1), d = vy(p, {
    ...f,
    width: m + "",
    height: g + ""
  });
  return c.style = {
    ...s,
    "--svg": xy(d),
    width: Ml(f.width),
    height: Ml(f.height),
    ...Cy,
    ...b ? ls : Bu,
    ...a
  }, Tn("span", c);
};
Mu(!0);
qg("", ey);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !Ag(r)) && console.error(n);
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
          Gg(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
function Lu(e) {
  const [t, n] = fo(!!e.ssr), [r, o] = fo({});
  function i(g) {
    if (g) {
      const b = e.icon;
      if (typeof b == "object")
        return {
          name: "",
          data: b
        };
      const d = wl(b);
      if (d)
        return {
          name: b,
          data: d
        };
    }
    return {
      name: ""
    };
  }
  const [s, a] = fo(i(!!e.ssr));
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
    const b = e.icon;
    if (typeof b == "object") {
      u({
        name: "",
        data: b
      });
      return;
    }
    const d = wl(b);
    if (u({
      name: b,
      data: d
    }))
      if (d === void 0) {
        const v = py([b], f);
        o({
          callback: v
        });
      } else d && ((g = e.onLoad) === null || g === void 0 || g.call(e, b));
  }
  wo(() => (n(!0), c), []), wo(() => {
    t && f();
  }, [e.icon, t]);
  const { name: p, data: m } = s;
  return m ? Ry({
    ...Ks,
    ...m
  }, e, p) : e.children ? e.children : e.fallback ? e.fallback : Tn("span", {});
}
const Iy = Ss((e, t) => Lu({
  ...e,
  _ref: t
}));
Ss((e, t) => Lu({
  inline: !0,
  ...e,
  _ref: t
}));
function Di({
  theme: e,
  ...t
}) {
  const n = Dt in e ? e[Dt] : void 0;
  return /* @__PURE__ */ B(Er, {
    ...t,
    themeId: n ? Dt : void 0,
    theme: n || e
  });
}
const to = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: Py
} = lm({
  themeId: Dt,
  // @ts-ignore ignore module augmentation tests
  theme: () => ci({
    cssVariables: !0
  }),
  colorSchemeStorageKey: to.colorSchemeStorageKey,
  modeStorageKey: to.modeStorageKey,
  defaultColorScheme: {
    light: to.defaultLightColorScheme,
    dark: to.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: cu(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return un({
        sx: r,
        theme: this
      });
    }, t;
  }
}), ky = Py;
function My({
  theme: e,
  ...t
}) {
  if (typeof e == "function")
    return /* @__PURE__ */ B(Di, {
      theme: e,
      ...t
    });
  const n = Dt in e ? e[Dt] : e;
  return "colorSchemes" in n ? /* @__PURE__ */ B(ky, {
    theme: e,
    ...t
  }) : "vars" in n ? /* @__PURE__ */ B(Di, {
    theme: e,
    ...t
  }) : /* @__PURE__ */ B(Di, {
    theme: {
      ...e,
      vars: null
    },
    ...t
  });
}
const $y = it("MuiBox", ["root"]), Ny = ci(), Zs = _h({
  themeId: Dt,
  defaultTheme: Ny,
  defaultClassName: $y.root,
  generateClassName: Rc.generate
});
process.env.NODE_ENV !== "production" && (Zs.propTypes = {
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
const ea = rn(({ ref: e, icon: t, width: n = 20, color: r = "auto", sx: o, ...i }) => /* @__PURE__ */ B(
  Zs,
  {
    ssr: !0,
    ref: e,
    component: Iy,
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
ea.displayName = "Button";
const Ao = rn(
  ({
    text: e,
    loading: t,
    disabled: n,
    isGhost: r,
    isCircle: o,
    icon: i,
    iconWidth: s,
    iconPosition: a = void 0,
    bgcolor: c,
    onClick: u,
    sx: f,
    ...p
  }) => {
    const m = Fn(() => i ? /* @__PURE__ */ B(ea, { icon: i, width: s }) : null, [i, s]);
    return /* @__PURE__ */ Ye(
      Cu,
      {
        variant: r ? "text" : "contained",
        loading: t,
        disabled: n,
        startIcon: a === "start" && m,
        endIcon: a === "end" && m,
        sx: {
          minWidth: "unset",
          minHeight: "38px",
          width: o ? "40px" : "unset",
          height: o ? "40px" : "unset",
          textTransform: "none",
          fontWeight: "bold",
          borderRadius: o ? "50%" : "8px",
          padding: o ? "6px" : "auto",
          cursor: t ? "wait !important" : n ? "not-allowed !important" : "pointer",
          pointerEvents: "auto !important",
          transition: "background-color 0s, background-image 0s",
          backgroundColor: c,
          "& .MuiButton-startIcon": { svg: { color: "inherit" } },
          "& .MuiButton-endIcon": { svg: { color: "inherit" } },
          ...f
        },
        onClick: (g) => {
          g.stopPropagation(), u == null || u(g);
        },
        ...p,
        children: [
          !a && m,
          !o && e
        ]
      }
    );
  }
);
Ao.displayName = "Button";
const fi = 0, pn = 1, Zn = 2, ju = 4;
function $l(e) {
  return () => e;
}
function Ay(e) {
  e();
}
function Fu(e, t) {
  return (n) => e(t(n));
}
function Nl(e, t) {
  return () => e(t);
}
function zu(e, t) {
  return (n) => e(t, n);
}
function ta(e) {
  return e !== void 0;
}
function Dy(...e) {
  return () => {
    e.map(Ay);
  };
}
function er() {
}
function di(e, t) {
  return t(e), e;
}
function _y(e, t) {
  return t(e);
}
function $e(...e) {
  return e;
}
function xe(e, t) {
  return e(pn, t);
}
function ce(e, t) {
  e(fi, t);
}
function na(e) {
  e(Zn);
}
function Ze(e) {
  return e(ju);
}
function ne(e, t) {
  return xe(e, zu(t, fi));
}
function Yt(e, t) {
  const n = e(pn, (r) => {
    n(), t(r);
  });
  return n;
}
function Al(e) {
  let t, n;
  return (r) => (o) => {
    t = o, n && clearTimeout(n), n = setTimeout(() => {
      r(t);
    }, e);
  };
}
function Vu(e, t) {
  return e === t;
}
function Me(e = Vu) {
  let t;
  return (n) => (r) => {
    e(t, r) || (t = r, n(r));
  };
}
function ie(e) {
  return (t) => (n) => {
    e(n) && t(n);
  };
}
function Q(e) {
  return (t) => Fu(t, e);
}
function Wt(e) {
  return (t) => () => {
    t(e);
  };
}
function z(e, ...t) {
  const n = By(...t);
  return (r, o) => {
    switch (r) {
      case Zn:
        na(e);
        return;
      case pn:
        return xe(e, n(o));
    }
  };
}
function Ut(e, t) {
  return (n) => (r) => {
    n(t = e(t, r));
  };
}
function Hn(e) {
  return (t) => (n) => {
    e > 0 ? e-- : t(n);
  };
}
function sn(e) {
  let t = null, n;
  return (r) => (o) => {
    t = o, !n && (n = setTimeout(() => {
      n = void 0, r(t);
    }, e));
  };
}
function ue(...e) {
  const t = new Array(e.length);
  let n = 0, r = null;
  const o = Math.pow(2, e.length) - 1;
  return e.forEach((i, s) => {
    const a = Math.pow(2, s);
    xe(i, (c) => {
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
function By(...e) {
  return (t) => e.reduceRight(_y, t);
}
function Ly(e) {
  let t, n;
  const r = () => t == null ? void 0 : t();
  return function(o, i) {
    switch (o) {
      case pn:
        return i ? n === i ? void 0 : (r(), n = i, t = xe(e, i), t) : (r(), er);
      case Zn:
        r(), n = null;
        return;
    }
  };
}
function H(e) {
  let t = e;
  const n = pe();
  return (r, o) => {
    switch (r) {
      case fi:
        t = o;
        break;
      case pn: {
        o(t);
        break;
      }
      case ju:
        return t;
    }
    return n(r, o);
  };
}
function et(e, t) {
  return di(H(t), (n) => ne(e, n));
}
function pe() {
  const e = [];
  return (t, n) => {
    switch (t) {
      case fi:
        e.slice().forEach((r) => {
          r(n);
        });
        return;
      case Zn:
        e.splice(0, e.length);
        return;
      case pn:
        return e.push(n), () => {
          const r = e.indexOf(n);
          r > -1 && e.splice(r, 1);
        };
    }
  };
}
function yt(e) {
  return di(pe(), (t) => ne(e, t));
}
function ge(e, t = [], { singleton: n } = { singleton: !0 }) {
  return {
    constructor: e,
    dependencies: t,
    id: jy(),
    singleton: n
  };
}
const jy = () => Symbol();
function Fy(e) {
  const t = /* @__PURE__ */ new Map(), n = ({ constructor: r, dependencies: o, id: i, singleton: s }) => {
    if (s && t.has(i))
      return t.get(i);
    const a = r(o.map((c) => n(c)));
    return s && t.set(i, a), a;
  };
  return n(e);
}
function Ge(...e) {
  const t = pe(), n = new Array(e.length);
  let r = 0;
  const o = Math.pow(2, e.length) - 1;
  return e.forEach((i, s) => {
    const a = Math.pow(2, s);
    xe(i, (c) => {
      n[s] = c, r = r | a, r === o && ce(t, n);
    });
  }), function(i, s) {
    switch (i) {
      case Zn: {
        na(t);
        return;
      }
      case pn:
        return r === o && s(n), xe(t, s);
    }
  };
}
function se(e, t = Vu) {
  return z(e, Me(t));
}
function Dl(...e) {
  return function(t, n) {
    switch (t) {
      case Zn:
        return;
      case pn:
        return Dy(...e.map((r) => xe(r, n)));
    }
  };
}
var vt = /* @__PURE__ */ ((e) => (e[e.DEBUG = 0] = "DEBUG", e[e.INFO = 1] = "INFO", e[e.WARN = 2] = "WARN", e[e.ERROR = 3] = "ERROR", e))(vt || {});
const zy = {
  0: "debug",
  3: "error",
  1: "log",
  2: "warn"
}, Vy = () => typeof globalThis > "u" ? window : globalThis, hn = ge(
  () => {
    const e = H(
      3
      /* ERROR */
    );
    return {
      log: H((t, n, r = 1) => {
        var o;
        const i = (o = Vy().VIRTUOSO_LOG_LEVEL) != null ? o : Ze(e);
        r >= i && console[zy[r]](
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
function On(e, t, n) {
  return ra(e, t, n).callbackRef;
}
function ra(e, t, n) {
  const r = K.useRef(null);
  let o = (i) => {
  };
  if (typeof ResizeObserver < "u") {
    const i = K.useMemo(() => new ResizeObserver((s) => {
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
function Wy(e, t, n, r, o, i, s, a, c) {
  const u = K.useCallback(
    (f) => {
      const p = Hy(f.children, t, a ? "offsetWidth" : "offsetHeight", o);
      let m = f.parentElement;
      for (; !m.dataset.virtuosoScroller; )
        m = m.parentElement;
      const g = m.lastElementChild.dataset.viewportType === "window";
      let b;
      g && (b = m.ownerDocument.defaultView);
      const d = s ? a ? s.scrollLeft : s.scrollTop : g ? a ? b.scrollX || b.document.documentElement.scrollLeft : b.scrollY || b.document.documentElement.scrollTop : a ? m.scrollLeft : m.scrollTop, v = s ? a ? s.scrollWidth : s.scrollHeight : g ? a ? b.document.documentElement.scrollWidth : b.document.documentElement.scrollHeight : a ? m.scrollWidth : m.scrollHeight, y = s ? a ? s.offsetWidth : s.offsetHeight : g ? a ? b.innerWidth : b.innerHeight : a ? m.offsetWidth : m.offsetHeight;
      r({
        scrollHeight: v,
        scrollTop: Math.max(d, 0),
        viewportHeight: y
      }), i == null || i(
        a ? _l("column-gap", getComputedStyle(f).columnGap, o) : _l("row-gap", getComputedStyle(f).rowGap, o)
      ), p !== null && e(p);
    },
    [e, t, o, i, s, r]
  );
  return ra(u, n, c);
}
function Hy(e, t, n, r) {
  const o = e.length;
  if (o === 0)
    return null;
  const i = [];
  for (let s = 0; s < o; s++) {
    const a = e.item(s);
    if (a.dataset.index === void 0)
      continue;
    const c = parseInt(a.dataset.index), u = parseFloat(a.dataset.knownSize), f = t(a, n);
    if (f === 0 && r("Zero-sized element, this should not happen", { child: a }, vt.ERROR), f === u)
      continue;
    const p = i[i.length - 1];
    i.length === 0 || p.size !== f || p.endIndex !== c - 1 ? i.push({ endIndex: c, size: f, startIndex: c }) : i[i.length - 1].endIndex++;
  }
  return i;
}
function _l(e, t, n) {
  return t !== "normal" && !(t != null && t.endsWith("px")) && n(`${e} was not resolved to pixel value correctly`, t, vt.WARN), t === "normal" ? 0 : parseInt(t ?? "0", 10);
}
function Wu(e, t, n) {
  const r = K.useRef(null), o = K.useCallback(
    (c) => {
      if (!(c != null && c.offsetParent))
        return;
      const u = c.getBoundingClientRect(), f = u.width;
      let p, m;
      if (t) {
        const g = t.getBoundingClientRect(), b = u.top - g.top;
        m = g.height - Math.max(0, b), p = b + t.scrollTop;
      } else {
        const g = s.current.ownerDocument.defaultView;
        m = g.innerHeight - Math.max(0, u.top), p = u.top + g.scrollY;
      }
      r.current = {
        offsetTop: p,
        visibleHeight: m,
        visibleWidth: f
      }, e(r.current);
    },
    [e, t]
  ), { callbackRef: i, ref: s } = ra(o, !0, n), a = K.useCallback(() => {
    o(s.current);
  }, [o, s]);
  return K.useEffect(() => {
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
const at = ge(
  () => {
    const e = pe(), t = pe(), n = H(0), r = pe(), o = H(0), i = pe(), s = pe(), a = H(0), c = H(0), u = H(0), f = H(0), p = pe(), m = pe(), g = H(!1), b = H(!1), d = H(!1);
    return ne(
      z(
        e,
        Q(({ scrollTop: v }) => v)
      ),
      t
    ), ne(
      z(
        e,
        Q(({ scrollHeight: v }) => v)
      ),
      s
    ), ne(t, o), {
      deviation: n,
      fixedFooterHeight: u,
      fixedHeaderHeight: c,
      footerHeight: f,
      headerHeight: a,
      horizontalDirection: b,
      scrollBy: m,
      // input
      scrollContainerState: e,
      scrollHeight: s,
      scrollingInProgress: g,
      // signals
      scrollTo: p,
      scrollTop: t,
      skipAnimationFrameInResizeObserver: d,
      smoothScrollTargetReached: r,
      // state
      statefulScrollTop: o,
      viewportHeight: i
    };
  },
  [],
  { singleton: !0 }
), Rr = { lvl: 0 };
function Hu(e, t) {
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
function Oe(e) {
  return e === Rr;
}
function Ir(e, t) {
  if (!Oe(e))
    return t === e.k ? e.v : t < e.k ? Ir(e.l, t) : Ir(e.r, t);
}
function _t(e, t, n = "k") {
  if (Oe(e))
    return [-1 / 0, void 0];
  if (Number(e[n]) === t)
    return [e.k, e.v];
  if (Number(e[n]) < t) {
    const r = _t(e.r, t, n);
    return r[0] === -1 / 0 ? [e.k, e.v] : r;
  }
  return _t(e.l, t, n);
}
function pt(e, t, n) {
  return Oe(e) ? Gu(t, n, 1) : t === e.k ? qe(e, { k: t, v: n }) : t < e.k ? Bl(qe(e, { l: pt(e.l, t, n) })) : Bl(qe(e, { r: pt(e.r, t, n) }));
}
function jn() {
  return Rr;
}
function pi(e, t, n) {
  if (Oe(e))
    return [];
  const r = _t(e, t)[0];
  return Uy(us(e, r, n));
}
function cs(e, t) {
  if (Oe(e)) return Rr;
  const { k: n, l: r, r: o } = e;
  if (t === n) {
    if (Oe(r))
      return o;
    if (Oe(o))
      return r;
    {
      const [i, s] = qu(r);
      return bo(qe(e, { k: i, l: Uu(r), v: s }));
    }
  } else return t < n ? bo(qe(e, { l: cs(r, t) })) : bo(qe(e, { r: cs(o, t) }));
}
function xn(e) {
  return Oe(e) ? [] : [...xn(e.l), { k: e.k, v: e.v }, ...xn(e.r)];
}
function us(e, t, n) {
  if (Oe(e))
    return [];
  const { k: r, l: o, r: i, v: s } = e;
  let a = [];
  return r > t && (a = a.concat(us(o, t, n))), r >= t && r <= n && a.push({ k: r, v: s }), r <= n && (a = a.concat(us(i, t, n))), a;
}
function bo(e) {
  const { l: t, lvl: n, r } = e;
  if (r.lvl >= n - 1 && t.lvl >= n - 1)
    return e;
  if (n > r.lvl + 1) {
    if (_i(t))
      return Yu(qe(e, { lvl: n - 1 }));
    if (!Oe(t) && !Oe(t.r))
      return qe(t.r, {
        l: qe(t, { r: t.r.l }),
        lvl: n,
        r: qe(e, {
          l: t.r.r,
          lvl: n - 1
        })
      });
    throw new Error("Unexpected empty nodes");
  } else {
    if (_i(e))
      return fs(qe(e, { lvl: n - 1 }));
    if (!Oe(r) && !Oe(r.l)) {
      const o = r.l, i = _i(o) ? r.lvl - 1 : r.lvl;
      return qe(o, {
        l: qe(e, {
          lvl: n - 1,
          r: o.l
        }),
        lvl: o.lvl + 1,
        r: fs(qe(r, { l: o.r, lvl: i }))
      });
    } else
      throw new Error("Unexpected empty nodes");
  }
}
function qe(e, t) {
  return Gu(
    t.k !== void 0 ? t.k : e.k,
    t.v !== void 0 ? t.v : e.v,
    t.lvl !== void 0 ? t.lvl : e.lvl,
    t.l !== void 0 ? t.l : e.l,
    t.r !== void 0 ? t.r : e.r
  );
}
function Uu(e) {
  return Oe(e.r) ? e.l : bo(qe(e, { r: Uu(e.r) }));
}
function _i(e) {
  return Oe(e) || e.lvl > e.r.lvl;
}
function qu(e) {
  return Oe(e.r) ? [e.k, e.v] : qu(e.r);
}
function Gu(e, t, n, r = Rr, o = Rr) {
  return { k: e, l: r, lvl: n, r: o, v: t };
}
function Bl(e) {
  return fs(Yu(e));
}
function Yu(e) {
  const { l: t } = e;
  return !Oe(t) && t.lvl === e.lvl ? qe(t, { r: qe(e, { l: t.r }) }) : e;
}
function fs(e) {
  const { lvl: t, r: n } = e;
  return !Oe(n) && !Oe(n.r) && n.lvl === t && n.r.lvl === t ? qe(n, { l: qe(e, { r: n.l }), lvl: t + 1 }) : e;
}
function Uy(e) {
  return Hu(e, ({ k: t, v: n }) => ({ index: t, value: n }));
}
function Ku(e, t) {
  return !!(e && e.startIndex === t.startIndex && e.endIndex === t.endIndex);
}
function Pr(e, t) {
  return !!(e && e[0] === t[0] && e[1] === t[1]);
}
const oa = ge(
  () => ({ recalcInProgress: H(!1) }),
  [],
  { singleton: !0 }
);
function Xu(e, t, n) {
  return e[Do(e, t, n)];
}
function Do(e, t, n, r = 0) {
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
function qy(e, t, n, r) {
  const o = Do(e, t, r), i = Do(e, n, r, o);
  return e.slice(o, i + 1);
}
function fn(e, t) {
  return Math.round(e.getBoundingClientRect()[t]);
}
function hi(e) {
  return !Oe(e.groupOffsetTree);
}
function ia({ index: e }, t) {
  return t === e ? 0 : t < e ? -1 : 1;
}
function Gy() {
  return {
    groupIndices: [],
    groupOffsetTree: jn(),
    lastIndex: 0,
    lastOffset: 0,
    lastSize: 0,
    offsetTree: [],
    sizeTree: jn()
  };
}
function Yy(e, t) {
  let n = Oe(e) ? 0 : 1 / 0;
  for (const r of t) {
    const { endIndex: o, size: i, startIndex: s } = r;
    if (n = Math.min(n, s), Oe(e)) {
      e = pt(e, 0, i);
      continue;
    }
    const a = pi(e, s - 1, o + 1);
    if (a.some(tv(r)))
      continue;
    let c = !1, u = !1;
    for (const { end: f, start: p, value: m } of a)
      c ? (o >= p || i === m) && (e = cs(e, p)) : (u = m !== i, c = !0), f > o && o >= p && m !== i && (e = pt(e, o + 1, m));
    u && (e = pt(e, s, i));
  }
  return [e, n];
}
function Ky(e) {
  return typeof e.groupIndex < "u";
}
function Xy({ offset: e }, t) {
  return t === e ? 0 : t < e ? -1 : 1;
}
function kr(e, t, n) {
  if (t.length === 0)
    return 0;
  const { index: r, offset: o, size: i } = Xu(t, e, ia), s = e - r, a = i * s + (s - 1) * n + o;
  return a > 0 ? a + n : a;
}
function Ju(e, t) {
  if (!hi(t))
    return e;
  let n = 0;
  for (; t.groupIndices[n] <= e + n; )
    n++;
  return e + n;
}
function Qu(e, t, n) {
  if (Ky(e))
    return t.groupIndices[e.groupIndex] + 1;
  {
    const r = e.index === "LAST" ? n : e.index;
    let o = Ju(r, t);
    return o = Math.max(0, o, Math.min(n, o)), o;
  }
}
function Jy(e, t, n, r = 0) {
  return r > 0 && (t = Math.max(t, Xu(e, r, ia).offset)), Hu(qy(e, t, n, Xy), ev);
}
function Qy(e, [t, n, r, o]) {
  t.length > 0 && r("received item sizes", t, vt.DEBUG);
  const i = e.sizeTree;
  let s = i, a = 0;
  if (n.length > 0 && Oe(i) && t.length === 2) {
    const m = t[0].size, g = t[1].size;
    s = n.reduce((b, d) => pt(pt(b, d, m), d + 1, g), s);
  } else
    [s, a] = Yy(s, t);
  if (s === i)
    return e;
  const { lastIndex: c, lastOffset: u, lastSize: f, offsetTree: p } = ds(e.offsetTree, a, s, o);
  return {
    groupIndices: n,
    groupOffsetTree: n.reduce((m, g) => pt(m, g, kr(g, p, o)), jn()),
    lastIndex: c,
    lastOffset: u,
    lastSize: f,
    offsetTree: p,
    sizeTree: s
  };
}
function Zy(e) {
  return xn(e).map(({ k: t, v: n }, r, o) => {
    const i = o[r + 1];
    return { endIndex: i ? i.k - 1 : 1 / 0, size: n, startIndex: t };
  });
}
function Ll(e, t) {
  let n = 0, r = 0;
  for (; n < e; )
    n += t[r + 1] - t[r] - 1, r++;
  return r - (n === e ? 0 : 1);
}
function ds(e, t, n, r) {
  let o = e, i = 0, s = 0, a = 0, c = 0;
  if (t !== 0) {
    c = Do(o, t - 1, ia), a = o[c].offset;
    const u = _t(n, t - 1);
    i = u[0], s = u[1], o.length && o[c].size === _t(n, t)[1] && (c -= 1), o = o.slice(0, c + 1);
  } else
    o = [];
  for (const { start: u, value: f } of pi(n, t, 1 / 0)) {
    const p = u - i, m = p * s + a + p * r;
    o.push({
      index: u,
      offset: m,
      size: f
    }), i = u, a = m, s = f;
  }
  return {
    lastIndex: i,
    lastOffset: a,
    lastSize: s,
    offsetTree: o
  };
}
function ev(e) {
  return { index: e.index, value: e };
}
function tv(e) {
  const { endIndex: t, size: n, startIndex: r } = e;
  return (o) => o.start === r && (o.end === t || o.end === 1 / 0) && o.value === n;
}
const nv = {
  offsetHeight: "height",
  offsetWidth: "width"
}, Jt = ge(
  ([{ log: e }, { recalcInProgress: t }]) => {
    const n = pe(), r = pe(), o = et(r, 0), i = pe(), s = pe(), a = H(0), c = H([]), u = H(void 0), f = H(void 0), p = H((S, T) => fn(S, nv[T])), m = H(void 0), g = H(0), b = Gy(), d = et(
      z(n, ue(c, e, g), Ut(Qy, b), Me()),
      b
    ), v = et(
      z(
        c,
        Me(),
        Ut((S, T) => ({ current: T, prev: S.current }), {
          current: [],
          prev: []
        }),
        Q(({ prev: S }) => S)
      ),
      []
    );
    ne(
      z(
        c,
        ie((S) => S.length > 0),
        ue(d, g),
        Q(([S, T, C]) => {
          const I = S.reduce((P, h, O) => pt(P, h, kr(h, T.offsetTree, C) || O), jn());
          return {
            ...T,
            groupIndices: S,
            groupOffsetTree: I
          };
        })
      ),
      d
    ), ne(
      z(
        r,
        ue(d),
        ie(([S, { lastIndex: T }]) => S < T),
        Q(([S, { lastIndex: T, lastSize: C }]) => [
          {
            endIndex: T,
            size: C,
            startIndex: S
          }
        ])
      ),
      n
    ), ne(u, f);
    const y = et(
      z(
        u,
        Q((S) => S === void 0)
      ),
      !0
    );
    ne(
      z(
        f,
        ie((S) => S !== void 0 && Oe(Ze(d).sizeTree)),
        Q((S) => [{ endIndex: 0, size: S, startIndex: 0 }])
      ),
      n
    );
    const x = yt(
      z(
        n,
        ue(d),
        Ut(
          ({ sizes: S }, [T, C]) => ({
            changed: C !== S,
            sizes: C
          }),
          { changed: !1, sizes: b }
        ),
        Q((S) => S.changed)
      )
    );
    xe(
      z(
        a,
        Ut(
          (S, T) => ({ diff: S.prev - T, prev: T }),
          { diff: 0, prev: 0 }
        ),
        Q((S) => S.diff)
      ),
      (S) => {
        const { groupIndices: T } = Ze(d);
        if (S > 0)
          ce(t, !0), ce(i, S + Ll(S, T));
        else if (S < 0) {
          const C = Ze(v);
          C.length > 0 && (S -= Ll(-S, C)), ce(s, S);
        }
      }
    ), xe(z(a, ue(e)), ([S, T]) => {
      S < 0 && T(
        "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
        { firstItemIndex: a },
        vt.ERROR
      );
    });
    const E = yt(i);
    ne(
      z(
        i,
        ue(d),
        Q(([S, T]) => {
          const C = T.groupIndices.length > 0, I = [], P = T.lastSize;
          if (C) {
            const h = Ir(T.sizeTree, 0);
            let O = 0, A = 0;
            for (; O < S; ) {
              const M = T.groupIndices[A], _ = T.groupIndices.length === A + 1 ? 1 / 0 : T.groupIndices[A + 1] - M - 1;
              I.push({
                endIndex: M,
                size: h,
                startIndex: M
              }), I.push({
                endIndex: M + 1 + _ - 1,
                size: P,
                startIndex: M + 1
              }), A++, O += _ + 1;
            }
            const D = xn(T.sizeTree);
            return O !== S && D.shift(), D.reduce(
              (M, { k: _, v: L }) => {
                let V = M.ranges;
                return M.prevSize !== 0 && (V = [
                  ...M.ranges,
                  {
                    endIndex: _ + S - 1,
                    size: M.prevSize,
                    startIndex: M.prevIndex
                  }
                ]), {
                  prevIndex: _ + S,
                  prevSize: L,
                  ranges: V
                };
              },
              {
                prevIndex: S,
                prevSize: 0,
                ranges: I
              }
            ).ranges;
          }
          return xn(T.sizeTree).reduce(
            (h, { k: O, v: A }) => ({
              prevIndex: O + S,
              prevSize: A,
              ranges: [...h.ranges, { endIndex: O + S - 1, size: h.prevSize, startIndex: h.prevIndex }]
            }),
            {
              prevIndex: 0,
              prevSize: P,
              ranges: []
            }
          ).ranges;
        })
      ),
      n
    );
    const w = yt(
      z(
        s,
        ue(d, g),
        Q(([S, { offsetTree: T }, C]) => {
          const I = -S;
          return kr(I, T, C);
        })
      )
    );
    return ne(
      z(
        s,
        ue(d, g),
        Q(([S, T, C]) => {
          if (T.groupIndices.length > 0) {
            if (Oe(T.sizeTree))
              return T;
            let I = jn();
            const P = Ze(v);
            let h = 0, O = 0, A = 0;
            for (; h < -S; ) {
              A = P[O];
              const D = P[O + 1] - A - 1;
              O++, h += D + 1;
            }
            if (I = xn(T.sizeTree).reduce((D, { k: M, v: _ }) => pt(D, Math.max(0, M + S), _), I), h !== -S) {
              const D = Ir(T.sizeTree, A);
              I = pt(I, 0, D);
              const M = _t(T.sizeTree, -S + 1)[1];
              I = pt(I, 1, M);
            }
            return {
              ...T,
              sizeTree: I,
              ...ds(T.offsetTree, 0, I, C)
            };
          } else {
            const I = xn(T.sizeTree).reduce((P, { k: h, v: O }) => pt(P, Math.max(0, h + S), O), jn());
            return {
              ...T,
              sizeTree: I,
              ...ds(T.offsetTree, 0, I, C)
            };
          }
        })
      ),
      d
    ), {
      beforeUnshiftWith: E,
      // input
      data: m,
      defaultItemSize: f,
      firstItemIndex: a,
      fixedItemSize: u,
      gap: g,
      groupIndices: c,
      itemSize: p,
      listRefresh: x,
      shiftWith: s,
      shiftWithOffset: w,
      sizeRanges: n,
      // output
      sizes: d,
      statefulTotalCount: o,
      totalCount: r,
      trackItemSizes: y,
      unshiftWith: i
    };
  },
  $e(hn, oa),
  { singleton: !0 }
);
function rv(e) {
  return e.reduce(
    (t, n) => (t.groupIndices.push(t.totalCount), t.totalCount += n + 1, t),
    {
      groupIndices: [],
      totalCount: 0
    }
  );
}
const Zu = ge(
  ([{ groupIndices: e, sizes: t, totalCount: n }, { headerHeight: r, scrollTop: o }]) => {
    const i = pe(), s = pe(), a = yt(z(i, Q(rv)));
    return ne(
      z(
        a,
        Q((c) => c.totalCount)
      ),
      n
    ), ne(
      z(
        a,
        Q((c) => c.groupIndices)
      ),
      e
    ), ne(
      z(
        Ge(o, t, r),
        ie(([c, u]) => hi(u)),
        Q(([c, u, f]) => _t(u.groupOffsetTree, Math.max(c - f, 0), "v")[0]),
        Me(),
        Q((c) => [c])
      ),
      s
    ), { groupCounts: i, topItemsIndexes: s };
  },
  $e(Jt, at)
), mn = ge(
  ([{ log: e }]) => {
    const t = H(!1), n = yt(
      z(
        t,
        ie((r) => r),
        Me()
      )
    );
    return xe(t, (r) => {
      r && Ze(e)("props updated", {}, vt.DEBUG);
    }), { didMount: n, propsReady: t };
  },
  $e(hn),
  { singleton: !0 }
), ov = typeof document < "u" && "scrollBehavior" in document.documentElement.style;
function ef(e) {
  const t = typeof e == "number" ? { index: e } : e;
  return t.align || (t.align = "start"), (!t.behavior || !ov) && (t.behavior = "auto"), t.offset || (t.offset = 0), t;
}
const Wr = ge(
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
      viewportHeight: p
    },
    { log: m }
  ]) => {
    const g = pe(), b = pe(), d = H(0);
    let v = null, y = null, x = null;
    function E() {
      v && (v(), v = null), x && (x(), x = null), y && (clearTimeout(y), y = null), ce(c, !1);
    }
    return ne(
      z(
        g,
        ue(n, p, r, d, a, s, m),
        ue(e, i, o),
        Q(
          ([
            [w, S, T, C, I, P, h, O],
            A,
            D,
            M
          ]) => {
            const _ = ef(w), { align: L, behavior: V, offset: te } = _, ee = C - 1, k = Qu(_, S, ee);
            let F = kr(k, S.offsetTree, A) + P;
            L === "end" ? (F += D + _t(S.sizeTree, k)[1] - T + M, k === ee && (F += h)) : L === "center" ? F += (D + _t(S.sizeTree, k)[1] - T + M) / 2 : F -= I, te && (F += te);
            const W = (q) => {
              E(), q ? (O("retrying to scroll to", { location: w }, vt.DEBUG), ce(g, w)) : (ce(b, !0), O("list did not change, scroll successful", {}, vt.DEBUG));
            };
            if (E(), V === "smooth") {
              let q = !1;
              x = xe(t, (Y) => {
                q = q || Y;
              }), v = Yt(f, () => {
                W(q);
              });
            } else
              v = Yt(z(t, iv(150)), W);
            return y = setTimeout(() => {
              E();
            }, 1200), ce(c, !0), O("scrolling from index to", { behavior: V, index: k, top: F }, vt.DEBUG), { behavior: V, top: F };
          }
        )
      ),
      u
    ), {
      scrollTargetReached: b,
      scrollToIndex: g,
      topListHeight: d
    };
  },
  $e(Jt, at, hn),
  { singleton: !0 }
);
function iv(e) {
  return (t) => {
    const n = setTimeout(() => {
      t(!1);
    }, e);
    return (r) => {
      r && (t(!0), clearTimeout(n));
    };
  };
}
function sa(e, t) {
  e == 0 ? t() : requestAnimationFrame(() => {
    sa(e - 1, t);
  });
}
function aa(e, t) {
  const n = t - 1;
  return typeof e == "number" ? e : e.index === "LAST" ? n : e.index;
}
const Hr = ge(
  ([{ defaultItemSize: e, listRefresh: t, sizes: n }, { scrollTop: r }, { scrollTargetReached: o, scrollToIndex: i }, { didMount: s }]) => {
    const a = H(!0), c = H(0), u = H(!0);
    return ne(
      z(
        s,
        ue(c),
        ie(([f, p]) => !!p),
        Wt(!1)
      ),
      a
    ), ne(
      z(
        s,
        ue(c),
        ie(([f, p]) => !!p),
        Wt(!1)
      ),
      u
    ), xe(
      z(
        Ge(t, s),
        ue(a, n, e, u),
        ie(([[, f], p, { sizeTree: m }, g, b]) => f && (!Oe(m) || ta(g)) && !p && !b),
        ue(c)
      ),
      ([, f]) => {
        Yt(o, () => {
          ce(u, !0);
        }), sa(4, () => {
          Yt(r, () => {
            ce(a, !0);
          }), ce(i, f);
        });
      }
    ), {
      initialItemFinalLocationReached: u,
      initialTopMostItemIndex: c,
      scrolledToInitialItem: a
    };
  },
  $e(Jt, at, Wr, mn),
  { singleton: !0 }
);
function tf(e, t) {
  return Math.abs(e - t) < 1.01;
}
const Mr = "up", mr = "down", sv = "none", av = {
  atBottom: !1,
  notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
  state: {
    offsetBottom: 0,
    scrollHeight: 0,
    scrollTop: 0,
    viewportHeight: 0
  }
}, lv = 0, Ur = ge(([{ footerHeight: e, headerHeight: t, scrollBy: n, scrollContainerState: r, scrollTop: o, viewportHeight: i }]) => {
  const s = H(!1), a = H(!0), c = pe(), u = pe(), f = H(4), p = H(lv), m = et(
    z(
      Dl(z(se(o), Hn(1), Wt(!0)), z(se(o), Hn(1), Wt(!1), Al(100))),
      Me()
    ),
    !1
  ), g = et(
    z(Dl(z(n, Wt(!0)), z(n, Wt(!1), Al(200))), Me()),
    !1
  );
  ne(
    z(
      Ge(se(o), se(p)),
      Q(([x, E]) => x <= E),
      Me()
    ),
    a
  ), ne(z(a, sn(50)), u);
  const b = yt(
    z(
      Ge(r, se(i), se(t), se(e), se(f)),
      Ut((x, [{ scrollHeight: E, scrollTop: w }, S, T, C, I]) => {
        const P = w + S - E > -I, h = {
          scrollHeight: E,
          scrollTop: w,
          viewportHeight: S
        };
        if (P) {
          let A, D;
          return w > x.state.scrollTop ? (A = "SCROLLED_DOWN", D = x.state.scrollTop - w) : (A = "SIZE_DECREASED", D = x.state.scrollTop - w || x.scrollTopDelta), {
            atBottom: !0,
            atBottomBecause: A,
            scrollTopDelta: D,
            state: h
          };
        }
        let O;
        return h.scrollHeight > x.state.scrollHeight ? O = "SIZE_INCREASED" : S < x.state.viewportHeight ? O = "VIEWPORT_HEIGHT_DECREASING" : w < x.state.scrollTop ? O = "SCROLLING_UPWARDS" : O = "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM", {
          atBottom: !1,
          notAtBottomBecause: O,
          state: h
        };
      }, av),
      Me((x, E) => x && x.atBottom === E.atBottom)
    )
  ), d = et(
    z(
      r,
      Ut(
        (x, { scrollHeight: E, scrollTop: w, viewportHeight: S }) => {
          if (tf(x.scrollHeight, E))
            return {
              changed: !1,
              jump: 0,
              scrollHeight: E,
              scrollTop: w
            };
          {
            const T = E - (w + S) < 1;
            return x.scrollTop !== w && T ? {
              changed: !0,
              jump: x.scrollTop - w,
              scrollHeight: E,
              scrollTop: w
            } : {
              changed: !0,
              jump: 0,
              scrollHeight: E,
              scrollTop: w
            };
          }
        },
        { changed: !1, jump: 0, scrollHeight: 0, scrollTop: 0 }
      ),
      ie((x) => x.changed),
      Q((x) => x.jump)
    ),
    0
  );
  ne(
    z(
      b,
      Q((x) => x.atBottom)
    ),
    s
  ), ne(z(s, sn(50)), c);
  const v = H(mr);
  ne(
    z(
      r,
      Q(({ scrollTop: x }) => x),
      Me(),
      Ut(
        (x, E) => Ze(g) ? { direction: x.direction, prevScrollTop: E } : { direction: E < x.prevScrollTop ? Mr : mr, prevScrollTop: E },
        { direction: mr, prevScrollTop: 0 }
      ),
      Q((x) => x.direction)
    ),
    v
  ), ne(z(r, sn(50), Wt(sv)), v);
  const y = H(0);
  return ne(
    z(
      m,
      ie((x) => !x),
      Wt(0)
    ),
    y
  ), ne(
    z(
      o,
      sn(100),
      ue(m),
      ie(([x, E]) => !!E),
      Ut(([x, E], [w]) => [E, w], [0, 0]),
      Q(([x, E]) => E - x)
    ),
    y
  ), {
    atBottomState: b,
    atBottomStateChange: c,
    atBottomThreshold: f,
    atTopStateChange: u,
    atTopThreshold: p,
    isAtBottom: s,
    isAtTop: a,
    isScrolling: m,
    lastJumpDueToItemResize: d,
    scrollDirection: v,
    scrollVelocity: y
  };
}, $e(at)), _o = "top", Bo = "bottom", jl = "none";
function Fl(e, t, n) {
  return typeof e == "number" ? n === Mr && t === _o || n === mr && t === Bo ? e : 0 : n === Mr ? t === _o ? e.main : e.reverse : t === Bo ? e.main : e.reverse;
}
function zl(e, t) {
  var n;
  return typeof e == "number" ? e : (n = e[t]) != null ? n : 0;
}
const la = ge(
  ([{ deviation: e, fixedHeaderHeight: t, headerHeight: n, scrollTop: r, viewportHeight: o }]) => {
    const i = pe(), s = H(0), a = H(0), c = H(0), u = et(
      z(
        Ge(
          se(r),
          se(o),
          se(n),
          se(i, Pr),
          se(c),
          se(s),
          se(t),
          se(e),
          se(a)
        ),
        Q(
          ([
            f,
            p,
            m,
            [g, b],
            d,
            v,
            y,
            x,
            E
          ]) => {
            const w = f - x, S = v + y, T = Math.max(m - w, 0);
            let C = jl;
            const I = zl(E, _o), P = zl(E, Bo);
            return g -= x, g += m + y, b += m + y, b -= x, g > f + S - I && (C = Mr), b < f - T + p + P && (C = mr), C !== jl ? [
              Math.max(w - m - Fl(d, _o, C) - I, 0),
              w - T - y + p + Fl(d, Bo, C) + P
            ] : null;
          }
        ),
        ie((f) => f != null),
        Me(Pr)
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
  $e(at),
  { singleton: !0 }
);
function cv(e, t, n) {
  if (hi(t)) {
    const r = Ju(e, t);
    return [
      { index: _t(t.groupOffsetTree, r)[0], offset: 0, size: 0 },
      { data: n == null ? void 0 : n[0], index: r, offset: 0, size: 0 }
    ];
  }
  return [{ data: n == null ? void 0 : n[0], index: e, offset: 0, size: 0 }];
}
const Bi = {
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
function So(e, t, n, r, o, i) {
  const { lastIndex: s, lastOffset: a, lastSize: c } = o;
  let u = 0, f = 0;
  if (e.length > 0) {
    u = e[0].offset;
    const d = e[e.length - 1];
    f = d.offset + d.size;
  }
  const p = n - s, m = a + p * c + (p - 1) * r, g = u, b = m - f;
  return {
    bottom: f,
    firstItemIndex: i,
    items: Vl(e, o, i),
    offsetBottom: b,
    offsetTop: u,
    top: g,
    topItems: Vl(t, o, i),
    topListHeight: t.reduce((d, v) => v.size + d, 0),
    totalCount: n
  };
}
function nf(e, t, n, r, o, i) {
  let s = 0;
  if (n.groupIndices.length > 0)
    for (const f of n.groupIndices) {
      if (f - s >= e)
        break;
      s++;
    }
  const a = e + s, c = aa(t, a), u = Array.from({ length: a }).map((f, p) => ({
    data: i[p + c],
    index: p + c,
    offset: 0,
    size: 0
  }));
  return So(u, [], a, o, n, r);
}
function Vl(e, t, n) {
  if (e.length === 0)
    return [];
  if (!hi(t))
    return e.map((u) => ({ ...u, index: u.index + n, originalIndex: u.index }));
  const r = e[0].index, o = e[e.length - 1].index, i = [], s = pi(t.groupOffsetTree, r, o);
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
const Rn = ge(
  ([
    { data: e, firstItemIndex: t, gap: n, sizes: r, totalCount: o },
    i,
    { listBoundary: s, topListHeight: a, visibleRange: c },
    { initialTopMostItemIndex: u, scrolledToInitialItem: f },
    { topListHeight: p },
    m,
    { didMount: g },
    { recalcInProgress: b }
  ]) => {
    const d = H([]), v = H(0), y = pe();
    ne(i.topItemsIndexes, d);
    const x = et(
      z(
        Ge(
          g,
          b,
          se(c, Pr),
          se(o),
          se(r),
          se(u),
          f,
          se(d),
          se(t),
          se(n),
          e
        ),
        ie(([T, C, , I, , , , , , , P]) => {
          const h = P && P.length !== I;
          return T && !C && !h;
        }),
        Q(
          ([
            ,
            ,
            [T, C],
            I,
            P,
            h,
            O,
            A,
            D,
            M,
            _
          ]) => {
            const L = P, { offsetTree: V, sizeTree: te } = L, ee = Ze(v);
            if (I === 0)
              return { ...Bi, totalCount: I };
            if (T === 0 && C === 0)
              return ee === 0 ? { ...Bi, totalCount: I } : nf(ee, h, P, D, M, _ || []);
            if (Oe(te))
              return ee > 0 ? null : So(
                cv(aa(h, I), L, _),
                [],
                I,
                M,
                L,
                D
              );
            const k = [];
            if (A.length > 0) {
              const Z = A[0], J = A[A.length - 1];
              let X = 0;
              for (const $ of pi(te, Z, J)) {
                const U = $.value, G = Math.max($.start, Z), oe = Math.min($.end, J);
                for (let j = G; j <= oe; j++)
                  k.push({ data: _ == null ? void 0 : _[j], index: j, offset: X, size: U }), X += U;
              }
            }
            if (!O)
              return So([], k, I, M, L, D);
            const F = A.length > 0 ? A[A.length - 1] + 1 : 0, W = Jy(V, T, C, F);
            if (W.length === 0)
              return null;
            const q = I - 1, Y = di([], (Z) => {
              for (const J of W) {
                const X = J.value;
                let $ = X.offset, U = J.start;
                const G = X.size;
                if (X.offset < T) {
                  U += Math.floor((T - X.offset + M) / (G + M));
                  const j = U - J.start;
                  $ += j * G + j * M;
                }
                U < F && ($ += (F - U) * G, U = F);
                const oe = Math.min(J.end, q);
                for (let j = U; j <= oe && !($ >= C); j++)
                  Z.push({ data: _ == null ? void 0 : _[j], index: j, offset: $, size: G }), $ += G + M;
              }
            });
            return So(Y, k, I, M, L, D);
          }
        ),
        //@ts-expect-error filter needs to be fixed
        ie((T) => T !== null),
        Me()
      ),
      Bi
    );
    ne(
      z(
        e,
        ie(ta),
        Q((T) => T == null ? void 0 : T.length)
      ),
      o
    ), ne(
      z(
        x,
        Q((T) => T.topListHeight)
      ),
      p
    ), ne(p, a), ne(
      z(
        x,
        Q((T) => [T.top, T.bottom])
      ),
      s
    ), ne(
      z(
        x,
        Q((T) => T.items)
      ),
      y
    );
    const E = yt(
      z(
        x,
        ie(({ items: T }) => T.length > 0),
        ue(o, e),
        ie(([{ items: T }, C]) => T[T.length - 1].originalIndex === C - 1),
        Q(([, T, C]) => [T - 1, C]),
        Me(Pr),
        Q(([T]) => T)
      )
    ), w = yt(
      z(
        x,
        sn(200),
        ie(({ items: T, topItems: C }) => T.length > 0 && T[0].originalIndex === C.length),
        Q(({ items: T }) => T[0].index),
        Me()
      )
    ), S = yt(
      z(
        x,
        ie(({ items: T }) => T.length > 0),
        Q(({ items: T }) => {
          let C = 0, I = T.length - 1;
          for (; T[C].type === "group" && C < I; )
            C++;
          for (; T[I].type === "group" && I > C; )
            I--;
          return {
            endIndex: T[I].index,
            startIndex: T[C].index
          };
        }),
        Me(Ku)
      )
    );
    return { endReached: E, initialItemCount: v, itemsRendered: y, listState: x, rangeChanged: S, startReached: w, topItemsIndexes: d, ...m };
  },
  $e(
    Jt,
    Zu,
    la,
    Hr,
    Wr,
    Ur,
    mn,
    oa
  ),
  { singleton: !0 }
), rf = ge(
  ([{ fixedFooterHeight: e, fixedHeaderHeight: t, footerHeight: n, headerHeight: r }, { listState: o }]) => {
    const i = pe(), s = et(
      z(
        Ge(n, e, r, t, o),
        Q(([a, c, u, f, p]) => a + c + u + f + p.offsetBottom + p.bottom)
      ),
      0
    );
    return ne(se(s), i), { totalListHeight: s, totalListHeightChanged: i };
  },
  $e(at, Rn),
  { singleton: !0 }
), uv = ge(
  ([{ viewportHeight: e }, { totalListHeight: t }]) => {
    const n = H(!1), r = et(
      z(
        Ge(n, e, t),
        ie(([o]) => o),
        Q(([, o, i]) => Math.max(0, o - i)),
        sn(0),
        Me()
      ),
      0
    );
    return { alignToBottom: n, paddingTopAddition: r };
  },
  $e(at, rf),
  { singleton: !0 }
);
function Wl(e) {
  return e ? e === "smooth" ? "smooth" : "auto" : !1;
}
const fv = (e, t) => typeof e == "function" ? Wl(e(t)) : t && Wl(e), dv = ge(
  ([
    { listRefresh: e, totalCount: t },
    { atBottomState: n, isAtBottom: r },
    { scrollToIndex: o },
    { scrolledToInitialItem: i },
    { didMount: s, propsReady: a },
    { log: c },
    { scrollingInProgress: u }
  ]) => {
    const f = H(!1), p = pe();
    let m = null;
    function g(d) {
      ce(o, {
        align: "end",
        behavior: d,
        index: "LAST"
      });
    }
    xe(
      z(
        Ge(z(se(t), Hn(1)), s),
        ue(se(f), r, i, u),
        Q(([[d, v], y, x, E, w]) => {
          let S = v && E, T = "auto";
          return S && (T = fv(y, x || w), S = S && !!T), { followOutputBehavior: T, shouldFollow: S, totalCount: d };
        }),
        ie(({ shouldFollow: d }) => d)
      ),
      ({ followOutputBehavior: d, totalCount: v }) => {
        m && (m(), m = null), m = Yt(e, () => {
          Ze(c)("following output to ", { totalCount: v }, vt.DEBUG), g(d), m = null;
        });
      }
    );
    function b(d) {
      const v = Yt(n, (y) => {
        d && !y.atBottom && y.notAtBottomBecause === "SIZE_INCREASED" && !m && (Ze(c)("scrolling to bottom due to increased size", {}, vt.DEBUG), g("auto"));
      });
      setTimeout(v, 100);
    }
    return xe(
      z(
        Ge(se(f), t, a),
        ie(([d, , v]) => d && v),
        Ut(
          ({ value: d }, [, v]) => ({ refreshed: d === v, value: v }),
          { refreshed: !1, value: 0 }
        ),
        ie(({ refreshed: d }) => d),
        ue(f, t)
      ),
      ([, d]) => {
        Ze(i) && b(d !== !1);
      }
    ), xe(p, () => {
      b(Ze(f) !== !1);
    }), xe(Ge(se(f), n), ([d, v]) => {
      d && !v.atBottom && v.notAtBottomBecause === "VIEWPORT_HEIGHT_DECREASING" && g("auto");
    }), { autoscrollToBottom: p, followOutput: f };
  },
  $e(Jt, Ur, Wr, Hr, mn, hn, at)
), pv = ge(
  ([{ data: e, firstItemIndex: t, gap: n, sizes: r }, { initialTopMostItemIndex: o }, { initialItemCount: i, listState: s }, { didMount: a }]) => (ne(
    z(
      a,
      ue(i),
      ie(([, c]) => c !== 0),
      ue(o, r, t, n, e),
      Q(([[, c], u, f, p, m, g = []]) => nf(c, u, f, p, m, g))
    ),
    s
  ), {}),
  $e(Jt, Hr, Rn, mn),
  { singleton: !0 }
), hv = ge(
  ([{ didMount: e }, { scrollTo: t }, { listState: n }]) => {
    const r = H(0);
    return xe(
      z(
        e,
        ue(r),
        ie(([, o]) => o !== 0),
        Q(([, o]) => ({ top: o }))
      ),
      (o) => {
        Yt(
          z(
            n,
            Hn(1),
            ie((i) => i.items.length > 1)
          ),
          () => {
            requestAnimationFrame(() => {
              ce(t, o);
            });
          }
        );
      }
    ), {
      initialScrollTop: r
    };
  },
  $e(mn, at, Rn),
  { singleton: !0 }
), mv = ({
  itemBottom: e,
  itemTop: t,
  locationParams: { align: n, behavior: r, ...o },
  viewportBottom: i,
  viewportTop: s
}) => t < s ? { ...o, align: n ?? "start", behavior: r } : e > i ? { ...o, align: n ?? "end", behavior: r } : null, gv = ge(
  ([
    { gap: e, sizes: t, totalCount: n },
    { fixedFooterHeight: r, fixedHeaderHeight: o, headerHeight: i, scrollingInProgress: s, scrollTop: a, viewportHeight: c },
    { scrollToIndex: u }
  ]) => {
    const f = pe();
    return ne(
      z(
        f,
        ue(t, c, n, i, o, r, a),
        ue(e),
        Q(([[p, m, g, b, d, v, y, x], E]) => {
          const { align: w, behavior: S, calculateViewLocation: T = mv, done: C, ...I } = p, P = Qu(p, m, b - 1), h = kr(P, m.offsetTree, E) + d + v, O = h + _t(m.sizeTree, P)[1], A = x + v, D = x + g - y, M = T({
            itemBottom: O,
            itemTop: h,
            locationParams: { align: w, behavior: S, ...I },
            viewportBottom: D,
            viewportTop: A
          });
          return M ? C && Yt(
            z(
              s,
              ie((_) => !_),
              // skips the initial publish of false, and the cleanup call.
              // but if scrollingInProgress is true, we skip the initial publish.
              Hn(Ze(s) ? 1 : 2)
            ),
            C
          ) : C && C(), M;
        }),
        ie((p) => p !== null)
      ),
      u
    ), {
      scrollIntoView: f
    };
  },
  $e(Jt, at, Wr, Rn, hn),
  { singleton: !0 }
), of = ge(
  ([{ scrollVelocity: e }]) => {
    const t = H(!1), n = pe(), r = H(!1);
    return ne(
      z(
        e,
        ue(r, t, n),
        ie(([o, i]) => !!i),
        Q(([o, i, s, a]) => {
          const { enter: c, exit: u } = i;
          if (s) {
            if (u(o, a))
              return !1;
          } else if (c(o, a))
            return !0;
          return s;
        }),
        Me()
      ),
      t
    ), xe(
      z(Ge(t, e, n), ue(r)),
      ([[o, i, s], a]) => {
        o && a && a.change && a.change(i, s);
      }
    ), { isSeeking: t, scrollSeekConfiguration: r, scrollSeekRangeChanged: n, scrollVelocity: e };
  },
  $e(Ur),
  { singleton: !0 }
), ca = ge(([{ scrollContainerState: e, scrollTo: t }]) => {
  const n = pe(), r = pe(), o = pe(), i = H(!1), s = H(void 0);
  return ne(
    z(
      Ge(n, r),
      Q(([{ scrollHeight: a, scrollTop: c, viewportHeight: u }, { offsetTop: f }]) => ({
        scrollHeight: a,
        scrollTop: Math.max(0, c - f),
        viewportHeight: u
      }))
    ),
    e
  ), ne(
    z(
      t,
      ue(r),
      Q(([a, { offsetTop: c }]) => ({
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
}, $e(at)), yv = ge(
  ([
    { sizeRanges: e, sizes: t },
    { headerHeight: n, scrollTop: r },
    { initialTopMostItemIndex: o },
    { didMount: i },
    { useWindowScroll: s, windowScrollContainerState: a, windowViewportRect: c }
  ]) => {
    const u = pe(), f = H(void 0), p = H(null), m = H(null);
    return ne(a, p), ne(c, m), xe(
      z(
        u,
        ue(t, r, s, p, m, n)
      ),
      ([g, b, d, v, y, x, E]) => {
        const w = Zy(b.sizeTree);
        v && y !== null && x !== null && (d = y.scrollTop - x.offsetTop), d -= E, g({ ranges: w, scrollTop: d });
      }
    ), ne(z(f, ie(ta), Q(vv)), o), ne(
      z(
        i,
        ue(f),
        ie(([, g]) => g !== void 0),
        Me(),
        Q(([, g]) => g.ranges)
      ),
      e
    ), {
      getState: u,
      restoreStateFrom: f
    };
  },
  $e(Jt, at, Hr, mn, ca)
);
function vv(e) {
  return { align: "start", index: 0, offset: e.scrollTop };
}
const bv = ge(([{ topItemsIndexes: e }]) => {
  const t = H(0);
  return ne(
    z(
      t,
      ie((n) => n >= 0),
      Q((n) => Array.from({ length: n }).map((r, o) => o))
    ),
    e
  ), { topItemCount: t };
}, $e(Rn));
function sf(e) {
  let t = !1, n;
  return () => (t || (t = !0, n = e()), n);
}
const Sv = sf(() => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent)), xv = ge(
  ([
    { deviation: e, scrollBy: t, scrollingInProgress: n, scrollTop: r },
    { isAtBottom: o, isScrolling: i, lastJumpDueToItemResize: s, scrollDirection: a },
    { listState: c },
    { beforeUnshiftWith: u, gap: f, shiftWithOffset: p, sizes: m },
    { log: g },
    { recalcInProgress: b }
  ]) => {
    const d = yt(
      z(
        c,
        ue(s),
        Ut(
          ([, y, x, E], [{ bottom: w, items: S, offsetBottom: T, totalCount: C }, I]) => {
            const P = w + T;
            let h = 0;
            return x === C && y.length > 0 && S.length > 0 && (S[0].originalIndex === 0 && y[0].originalIndex === 0 || (h = P - E, h !== 0 && (h += I))), [h, S, C, P];
          },
          [0, [], 0, 0]
        ),
        ie(([y]) => y !== 0),
        ue(r, a, n, o, g, b),
        ie(([, y, x, E, , , w]) => !w && !E && y !== 0 && x === Mr),
        Q(([[y], , , , , x]) => (x("Upward scrolling compensation", { amount: y }, vt.DEBUG), y))
      )
    );
    function v(y) {
      y > 0 ? (ce(t, { behavior: "auto", top: -y }), ce(e, 0)) : (ce(e, 0), ce(t, { behavior: "auto", top: -y }));
    }
    return xe(z(d, ue(e, i)), ([y, x, E]) => {
      E && Sv() ? ce(e, x - y) : v(-y);
    }), xe(
      z(
        Ge(et(i, !1), e, b),
        ie(([y, x, E]) => !y && !E && x !== 0),
        Q(([y, x]) => x),
        sn(1)
      ),
      v
    ), ne(
      z(
        p,
        Q((y) => ({ top: -y }))
      ),
      t
    ), xe(
      z(
        u,
        ue(m, f),
        Q(([y, { groupIndices: x, lastSize: E, sizeTree: w }, S]) => {
          function T(C) {
            return C * (E + S);
          }
          if (x.length === 0)
            return T(y);
          {
            let C = 0;
            const I = Ir(w, 0);
            let P = 0, h = 0;
            for (; P < y; ) {
              P++, C += I;
              let O = x.length === h + 1 ? 1 / 0 : x[h + 1] - x[h] - 1;
              P + O > y && (C -= I, O = y - P + 1), P += O, C += T(O), h++;
            }
            return C;
          }
        })
      ),
      (y) => {
        ce(e, y), requestAnimationFrame(() => {
          ce(t, { top: y }), requestAnimationFrame(() => {
            ce(e, 0), ce(b, !1);
          });
        });
      }
    ), { deviation: e };
  },
  $e(at, Ur, Rn, Jt, hn, oa)
), Tv = ge(
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
  $e(
    la,
    pv,
    mn,
    of,
    rf,
    hv,
    uv,
    ca,
    gv,
    hn
  )
), af = ge(
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
      trackItemSizes: p
    },
    { initialItemFinalLocationReached: m, initialTopMostItemIndex: g, scrolledToInitialItem: b },
    d,
    v,
    y,
    { listState: x, topItemsIndexes: E, ...w },
    { scrollToIndex: S },
    T,
    { topItemCount: C },
    { groupCounts: I },
    P
  ]) => (ne(w.rangeChanged, P.scrollSeekRangeChanged), ne(
    z(
      P.windowViewportRect,
      Q((h) => h.visibleHeight)
    ),
    d.viewportHeight
  ), {
    data: e,
    defaultItemHeight: t,
    firstItemIndex: n,
    fixedItemHeight: r,
    gap: o,
    groupCounts: I,
    initialItemFinalLocationReached: m,
    initialTopMostItemIndex: g,
    scrolledToInitialItem: b,
    sizeRanges: a,
    topItemCount: C,
    topItemsIndexes: E,
    // input
    totalCount: f,
    ...y,
    groupIndices: i,
    itemSize: s,
    listState: x,
    scrollToIndex: S,
    // output
    statefulTotalCount: u,
    trackItemSizes: p,
    // exported from stateFlagsSystem
    ...w,
    // the bag of IO from featureGroup1System
    ...P,
    ...d,
    sizes: c,
    ...v
  }),
  $e(
    Jt,
    Hr,
    at,
    yv,
    dv,
    Rn,
    Wr,
    xv,
    bv,
    Zu,
    Tv
  )
);
function wv(e, t) {
  const n = {}, r = {};
  let o = 0;
  const i = e.length;
  for (; o < i; )
    r[e[o]] = 1, o += 1;
  for (const s in t)
    Object.hasOwn(r, s) || (n[s] = t[s]);
  return n;
}
const no = typeof document < "u" ? K.useLayoutEffect : K.useEffect;
function lf(e, t, n) {
  const r = Object.keys(t.required || {}), o = Object.keys(t.optional || {}), i = Object.keys(t.methods || {}), s = Object.keys(t.events || {}), a = K.createContext({});
  function c(v, y) {
    v.propsReady && ce(v.propsReady, !1);
    for (const x of r) {
      const E = v[t.required[x]];
      ce(E, y[x]);
    }
    for (const x of o)
      if (x in y) {
        const E = v[t.optional[x]];
        ce(E, y[x]);
      }
    v.propsReady && ce(v.propsReady, !0);
  }
  function u(v) {
    return i.reduce((y, x) => (y[x] = (E) => {
      const w = v[t.methods[x]];
      ce(w, E);
    }, y), {});
  }
  function f(v) {
    return s.reduce((y, x) => (y[x] = Ly(v[t.events[x]]), y), {});
  }
  const p = K.forwardRef((v, y) => {
    const { children: x, ...E } = v, [w] = K.useState(() => di(Fy(e), (C) => {
      c(C, E);
    })), [S] = K.useState(Nl(f, w));
    no(() => {
      for (const C of s)
        C in E && xe(S[C], E[C]);
      return () => {
        Object.values(S).map(na);
      };
    }, [E, S, w]), no(() => {
      c(w, E);
    }), K.useImperativeHandle(y, $l(u(w)));
    const T = n;
    return /* @__PURE__ */ B(a.Provider, { value: w, children: n ? /* @__PURE__ */ B(T, { ...wv([...r, ...o, ...s], E), children: x }) : x });
  }), m = (v) => K.useCallback(zu(ce, K.useContext(a)[v]), [v]), g = (v) => {
    const y = K.useContext(a)[v], x = K.useCallback(
      (E) => xe(y, E),
      [y]
    );
    return K.useSyncExternalStore(
      x,
      () => Ze(y),
      () => Ze(y)
    );
  }, b = (v) => {
    const y = K.useContext(a)[v], [x, E] = K.useState(Nl(Ze, y));
    return no(
      () => xe(y, (w) => {
        w !== x && E($l(w));
      }),
      [y, x]
    ), x;
  }, d = K.version.startsWith("18") ? g : b;
  return {
    Component: p,
    useEmitter: (v, y) => {
      const x = K.useContext(a)[v];
      no(() => xe(x, y), [y, x]);
    },
    useEmitterValue: d,
    usePublisher: m
  };
}
const cf = K.createContext(void 0), uf = K.createContext(void 0), ff = typeof document < "u" ? K.useLayoutEffect : K.useEffect;
function Li(e) {
  return "self" in e;
}
function Ev(e) {
  return "body" in e;
}
function df(e, t, n, r = er, o, i) {
  const s = K.useRef(null), a = K.useRef(null), c = K.useRef(null), u = K.useCallback(
    (m) => {
      let g, b, d;
      const v = m.target;
      if (Ev(v) || Li(v)) {
        const x = Li(v) ? v : v.defaultView;
        d = i ? x.scrollX : x.scrollY, g = i ? x.document.documentElement.scrollWidth : x.document.documentElement.scrollHeight, b = i ? x.innerWidth : x.innerHeight;
      } else
        d = i ? v.scrollLeft : v.scrollTop, g = i ? v.scrollWidth : v.scrollHeight, b = i ? v.offsetWidth : v.offsetHeight;
      const y = () => {
        e({
          scrollHeight: g,
          scrollTop: Math.max(d, 0),
          viewportHeight: b
        });
      };
      m.suppressFlushSync ? y() : cr.flushSync(y), a.current !== null && (d === a.current || d <= 0 || d === g - b) && (a.current = null, t(!0), c.current && (clearTimeout(c.current), c.current = null));
    },
    [e, t]
  );
  K.useEffect(() => {
    const m = o || s.current;
    return r(o || s.current), u({ suppressFlushSync: !0, target: m }), m.addEventListener("scroll", u, { passive: !0 }), () => {
      r(null), m.removeEventListener("scroll", u);
    };
  }, [s, u, n, r, o]);
  function f(m) {
    const g = s.current;
    if (!g || (i ? "offsetWidth" in g && g.offsetWidth === 0 : "offsetHeight" in g && g.offsetHeight === 0))
      return;
    const b = m.behavior === "smooth";
    let d, v, y;
    Li(g) ? (v = Math.max(
      fn(g.document.documentElement, i ? "width" : "height"),
      i ? g.document.documentElement.scrollWidth : g.document.documentElement.scrollHeight
    ), d = i ? g.innerWidth : g.innerHeight, y = i ? window.scrollX : window.scrollY) : (v = g[i ? "scrollWidth" : "scrollHeight"], d = fn(g, i ? "width" : "height"), y = g[i ? "scrollLeft" : "scrollTop"]);
    const x = v - d;
    if (m.top = Math.ceil(Math.max(Math.min(x, m.top), 0)), tf(d, v) || m.top === y) {
      e({ scrollHeight: v, scrollTop: y, viewportHeight: d }), b && t(!0);
      return;
    }
    b ? (a.current = m.top, c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      c.current = null, a.current = null, t(!0);
    }, 1e3)) : a.current = null, i && (m = { behavior: m.behavior, left: m.top }), g.scrollTo(m);
  }
  function p(m) {
    i && (m = { behavior: m.behavior, left: m.top }), s.current.scrollBy(m);
  }
  return { scrollByCallback: p, scrollerRef: s, scrollToCallback: f };
}
const ji = "-webkit-sticky", Hl = "sticky", pf = sf(() => {
  if (typeof document > "u")
    return Hl;
  const e = document.createElement("div");
  return e.style.position = ji, e.style.position === ji ? ji : Hl;
});
function ua(e) {
  return e;
}
const Cv = /* @__PURE__ */ ge(() => {
  const e = H((c) => `Item ${c}`), t = H(null), n = H((c) => `Group ${c}`), r = H({}), o = H(ua), i = H("div"), s = H(er), a = (c, u = null) => et(
    z(
      r,
      Q((f) => f[c]),
      Me()
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
}), Ov = /* @__PURE__ */ ge(
  ([e, t]) => ({ ...e, ...t }),
  $e(af, Cv)
), Rv = ({ height: e }) => /* @__PURE__ */ B("div", { style: { height: e } }), Iv = { overflowAnchor: "none", position: pf(), zIndex: 1 }, hf = { overflowAnchor: "none" }, Pv = { ...hf, display: "inline-block", height: "100%" }, Ul = /* @__PURE__ */ K.memo(function({ showTopList: e = !1 }) {
  const t = ae("listState"), n = Ct("sizeRanges"), r = ae("useWindowScroll"), o = ae("customScrollParent"), i = Ct("windowScrollContainerState"), s = Ct("scrollContainerState"), a = o || r ? i : s, c = ae("itemContent"), u = ae("context"), f = ae("groupContent"), p = ae("trackItemSizes"), m = ae("itemSize"), g = ae("log"), b = Ct("gap"), d = ae("horizontalDirection"), { callbackRef: v } = Wy(
    n,
    m,
    p,
    e ? er : a,
    g,
    b,
    o,
    d,
    ae("skipAnimationFrameInResizeObserver")
  ), [y, x] = K.useState(0);
  fa("deviation", (M) => {
    y !== M && x(M);
  });
  const E = ae("EmptyPlaceholder"), w = ae("ScrollSeekPlaceholder") || Rv, S = ae("ListComponent"), T = ae("ItemComponent"), C = ae("GroupComponent"), I = ae("computeItemKey"), P = ae("isSeeking"), h = ae("groupIndices").length > 0, O = ae("alignToBottom"), A = ae("initialItemFinalLocationReached"), D = e ? {} : {
    boxSizing: "border-box",
    ...d ? {
      display: "inline-block",
      height: "100%",
      marginLeft: y !== 0 ? y : O ? "auto" : 0,
      paddingLeft: t.offsetTop,
      paddingRight: t.offsetBottom,
      whiteSpace: "nowrap"
    } : {
      marginTop: y !== 0 ? y : O ? "auto" : 0,
      paddingBottom: t.offsetBottom,
      paddingTop: t.offsetTop
    },
    ...A ? {} : { visibility: "hidden" }
  };
  return !e && t.totalCount === 0 && E ? /* @__PURE__ */ B(E, { ...Je(E, u) }) : /* @__PURE__ */ B(
    S,
    {
      ...Je(S, u),
      "data-testid": e ? "virtuoso-top-item-list" : "virtuoso-item-list",
      ref: v,
      style: D,
      children: (e ? t.topItems : t.items).map((M) => {
        const _ = M.originalIndex, L = I(_ + t.firstItemIndex, M.data, u);
        return P ? /* @__PURE__ */ Tn(
          w,
          {
            ...Je(w, u),
            height: M.size,
            index: M.index,
            key: L,
            type: M.type || "item",
            ...M.type === "group" ? {} : { groupIndex: M.groupIndex }
          }
        ) : M.type === "group" ? /* @__PURE__ */ Tn(
          C,
          {
            ...Je(C, u),
            "data-index": _,
            "data-item-index": M.index,
            "data-known-size": M.size,
            key: L,
            style: Iv
          },
          f(M.index, u)
        ) : /* @__PURE__ */ Tn(
          T,
          {
            ...Je(T, u),
            ...Nv(T, M.data),
            "data-index": _,
            "data-item-group-index": M.groupIndex,
            "data-item-index": M.index,
            "data-known-size": M.size,
            key: L,
            style: d ? Pv : hf
          },
          h ? c(M.index, M.groupIndex, M.data, u) : c(M.index, M.data, u)
        );
      })
    }
  );
}), kv = {
  height: "100%",
  outline: "none",
  overflowY: "auto",
  position: "relative",
  WebkitOverflowScrolling: "touch"
}, Mv = {
  outline: "none",
  overflowX: "auto",
  position: "relative"
}, mi = (e) => ({
  height: "100%",
  position: "absolute",
  top: 0,
  width: "100%",
  ...e ? { display: "flex", flexDirection: "column" } : {}
}), $v = {
  position: pf(),
  top: 0,
  width: "100%",
  zIndex: 1
};
function Je(e, t) {
  if (typeof e != "string")
    return { context: t };
}
function Nv(e, t) {
  return { item: typeof e == "string" ? void 0 : t };
}
const Av = /* @__PURE__ */ K.memo(function() {
  const e = ae("HeaderComponent"), t = Ct("headerHeight"), n = ae("HeaderFooterTag"), r = On(
    K.useMemo(
      () => (i) => {
        t(fn(i, "height"));
      },
      [t]
    ),
    !0,
    ae("skipAnimationFrameInResizeObserver")
  ), o = ae("context");
  return e ? /* @__PURE__ */ B(n, { ref: r, children: /* @__PURE__ */ B(e, { ...Je(e, o) }) }) : null;
}), Dv = /* @__PURE__ */ K.memo(function() {
  const e = ae("FooterComponent"), t = Ct("footerHeight"), n = ae("HeaderFooterTag"), r = On(
    K.useMemo(
      () => (i) => {
        t(fn(i, "height"));
      },
      [t]
    ),
    !0,
    ae("skipAnimationFrameInResizeObserver")
  ), o = ae("context");
  return e ? /* @__PURE__ */ B(n, { ref: r, children: /* @__PURE__ */ B(e, { ...Je(e, o) }) }) : null;
});
function mf({ useEmitter: e, useEmitterValue: t, usePublisher: n }) {
  return K.memo(function({ children: r, style: o, ...i }) {
    const s = n("scrollContainerState"), a = t("ScrollerComponent"), c = n("smoothScrollTargetReached"), u = t("scrollerRef"), f = t("context"), p = t("horizontalDirection") || !1, { scrollByCallback: m, scrollerRef: g, scrollToCallback: b } = df(
      s,
      c,
      a,
      u,
      void 0,
      p
    );
    return e("scrollTo", b), e("scrollBy", m), /* @__PURE__ */ B(
      a,
      {
        "data-testid": "virtuoso-scroller",
        "data-virtuoso-scroller": !0,
        ref: g,
        style: { ...p ? Mv : kv, ...o },
        tabIndex: 0,
        ...i,
        ...Je(a, f),
        children: r
      }
    );
  });
}
function gf({ useEmitter: e, useEmitterValue: t, usePublisher: n }) {
  return K.memo(function({ children: r, style: o, ...i }) {
    const s = n("windowScrollContainerState"), a = t("ScrollerComponent"), c = n("smoothScrollTargetReached"), u = t("totalListHeight"), f = t("deviation"), p = t("customScrollParent"), m = t("context"), g = K.useRef(null), b = t("scrollerRef"), { scrollByCallback: d, scrollerRef: v, scrollToCallback: y } = df(
      s,
      c,
      a,
      b,
      p
    );
    return ff(() => {
      var x;
      return v.current = p || ((x = g.current) == null ? void 0 : x.ownerDocument.defaultView), () => {
        v.current = null;
      };
    }, [v, p]), e("windowScrollTo", y), e("scrollBy", d), /* @__PURE__ */ B(
      a,
      {
        ref: g,
        "data-virtuoso-scroller": !0,
        style: { position: "relative", ...o, ...u !== 0 ? { height: u + f } : {} },
        ...i,
        ...Je(a, m),
        children: r
      }
    );
  });
}
const _v = ({ children: e }) => {
  const t = K.useContext(cf), n = Ct("viewportHeight"), r = Ct("fixedItemHeight"), o = ae("alignToBottom"), i = ae("horizontalDirection"), s = K.useMemo(
    () => Fu(n, (c) => fn(c, i ? "width" : "height")),
    [n, i]
  ), a = On(s, !0, ae("skipAnimationFrameInResizeObserver"));
  return K.useEffect(() => {
    t && (n(t.viewportHeight), r(t.itemHeight));
  }, [t, n, r]), /* @__PURE__ */ B("div", { "data-viewport-type": "element", ref: a, style: mi(o), children: e });
}, Bv = ({ children: e }) => {
  const t = K.useContext(cf), n = Ct("windowViewportRect"), r = Ct("fixedItemHeight"), o = ae("customScrollParent"), i = Wu(
    n,
    o,
    ae("skipAnimationFrameInResizeObserver")
  ), s = ae("alignToBottom");
  return K.useEffect(() => {
    t && (r(t.itemHeight), n({ offsetTop: 0, visibleHeight: t.viewportHeight, visibleWidth: 100 }));
  }, [t, n, r]), /* @__PURE__ */ B("div", { "data-viewport-type": "window", ref: i, style: mi(s), children: e });
}, Lv = ({ children: e }) => {
  const t = ae("TopItemListComponent") || "div", n = ae("headerHeight"), r = { ...$v, marginTop: `${n}px` }, o = ae("context");
  return /* @__PURE__ */ B(t, { style: r, ...Je(t, o), children: e });
}, jv = /* @__PURE__ */ K.memo(function(e) {
  const t = ae("useWindowScroll"), n = ae("topItemsIndexes").length > 0, r = ae("customScrollParent"), o = ae("context"), i = r || t ? Vv : zv, s = r || t ? Bv : _v;
  return /* @__PURE__ */ Ye(i, { ...e, ...Je(i, o), children: [
    n && /* @__PURE__ */ B(Lv, { children: /* @__PURE__ */ B(Ul, { showTopList: !0 }) }),
    /* @__PURE__ */ Ye(s, { children: [
      /* @__PURE__ */ B(Av, {}),
      /* @__PURE__ */ B(Ul, {}),
      /* @__PURE__ */ B(Dv, {})
    ] })
  ] });
}), {
  Component: Fv,
  useEmitter: fa,
  useEmitterValue: ae,
  usePublisher: Ct
} = /* @__PURE__ */ lf(
  Ov,
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
  jv
), zv = /* @__PURE__ */ mf({ useEmitter: fa, useEmitterValue: ae, usePublisher: Ct }), Vv = /* @__PURE__ */ gf({ useEmitter: fa, useEmitterValue: ae, usePublisher: Ct }), Wv = Fv, Hv = /* @__PURE__ */ ge(() => {
  const e = H((c) => /* @__PURE__ */ Ye("td", { children: [
    "Item $",
    c
  ] })), t = H(null), n = H(null), r = H(null), o = H({}), i = H(ua), s = H(er), a = (c, u = null) => et(
    z(
      o,
      Q((f) => f[c]),
      Me()
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
$e(af, Hv);
const ql = {
  bottom: 0,
  itemHeight: 0,
  items: [],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, Uv = {
  bottom: 0,
  itemHeight: 0,
  items: [{ index: 0 }],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, { ceil: Gl, floor: Lo, max: gr, min: Fi, round: Yl } = Math;
function Kl(e, t, n) {
  return Array.from({ length: t - e + 1 }).map((r, o) => ({ data: n === null ? null : n[o + e], index: o + e }));
}
function qv(e) {
  return {
    ...Uv,
    items: e
  };
}
function ro(e, t) {
  return e && e.width === t.width && e.height === t.height;
}
function Gv(e, t) {
  return e && e.column === t.column && e.row === t.row;
}
const Yv = /* @__PURE__ */ ge(
  ([
    { increaseViewportBy: e, listBoundary: t, overscan: n, visibleRange: r },
    { footerHeight: o, headerHeight: i, scrollBy: s, scrollContainerState: a, scrollTo: c, scrollTop: u, smoothScrollTargetReached: f, viewportHeight: p },
    m,
    g,
    { didMount: b, propsReady: d },
    { customScrollParent: v, useWindowScroll: y, windowScrollContainerState: x, windowScrollTo: E, windowViewportRect: w },
    S
  ]) => {
    const T = H(0), C = H(0), I = H(ql), P = H({ height: 0, width: 0 }), h = H({ height: 0, width: 0 }), O = pe(), A = pe(), D = H(0), M = H(null), _ = H({ column: 0, row: 0 }), L = pe(), V = pe(), te = H(!1), ee = H(0), k = H(!0), F = H(!1), W = H(!1);
    xe(
      z(
        b,
        ue(ee),
        ie(([$, U]) => !!U)
      ),
      () => {
        ce(k, !1);
      }
    ), xe(
      z(
        Ge(b, k, h, P, ee, F),
        ie(([$, U, G, oe, , j]) => $ && !U && G.height !== 0 && oe.height !== 0 && !j)
      ),
      ([, , , , $]) => {
        ce(F, !0), sa(1, () => {
          ce(O, $);
        }), Yt(z(u), () => {
          ce(t, [0, 0]), ce(k, !0);
        });
      }
    ), ne(
      z(
        V,
        ie(($) => $ != null && $.scrollTop > 0),
        Wt(0)
      ),
      C
    ), xe(
      z(
        b,
        ue(V),
        ie(([, $]) => $ != null)
      ),
      ([, $]) => {
        $ && (ce(P, $.viewport), ce(h, $.item), ce(_, $.gap), $.scrollTop > 0 && (ce(te, !0), Yt(z(u, Hn(1)), (U) => {
          ce(te, !1);
        }), ce(c, { top: $.scrollTop })));
      }
    ), ne(
      z(
        P,
        Q(({ height: $ }) => $)
      ),
      p
    ), ne(
      z(
        Ge(
          se(P, ro),
          se(h, ro),
          se(_, ($, U) => $ && $.column === U.column && $.row === U.row),
          se(u)
        ),
        Q(([$, U, G, oe]) => ({
          gap: G,
          item: U,
          scrollTop: oe,
          viewport: $
        }))
      ),
      L
    ), ne(
      z(
        Ge(
          se(T),
          r,
          se(_, Gv),
          se(h, ro),
          se(P, ro),
          se(M),
          se(C),
          se(te),
          se(k),
          se(ee)
        ),
        ie(([, , , , , , , $]) => !$),
        Q(
          ([
            $,
            [U, G],
            oe,
            j,
            de,
            Ie,
            Ve,
            ,
            lt,
            Ne
          ]) => {
            const { column: Pe, row: ke } = oe, { height: _e, width: He } = j, { width: re } = de;
            if (Ve === 0 && ($ === 0 || re === 0))
              return ql;
            if (He === 0) {
              const fe = aa(Ne, $), rt = fe + Math.max(Ve - 1, 0);
              return qv(Kl(fe, rt, Ie));
            }
            const xt = yf(re, He, Pe);
            let tt, nt;
            lt ? U === 0 && G === 0 && Ve > 0 ? (tt = 0, nt = Ve - 1) : (tt = xt * Lo((U + ke) / (_e + ke)), nt = xt * Gl((G + ke) / (_e + ke)) - 1, nt = Fi($ - 1, gr(nt, xt - 1)), tt = Fi(nt, gr(0, tt))) : (tt = 0, nt = -1);
            const Lt = Kl(tt, nt, Ie), { bottom: Tt, top: jt } = Xl(de, oe, j, Lt), $t = Gl($ / xt), Le = $t * _e + ($t - 1) * ke - Tt;
            return { bottom: Tt, itemHeight: _e, items: Lt, itemWidth: He, offsetBottom: Le, offsetTop: jt, top: jt };
          }
        )
      ),
      I
    ), ne(
      z(
        M,
        ie(($) => $ !== null),
        Q(($) => $.length)
      ),
      T
    ), ne(
      z(
        Ge(P, h, I, _),
        ie(([$, U, { items: G }]) => G.length > 0 && U.height !== 0 && $.height !== 0),
        Q(([$, U, { items: G }, oe]) => {
          const { bottom: j, top: de } = Xl($, oe, U, G);
          return [de, j];
        }),
        Me(Pr)
      ),
      t
    );
    const q = H(!1);
    ne(
      z(
        u,
        ue(q),
        Q(([$, U]) => U || $ !== 0)
      ),
      q
    );
    const Y = yt(
      z(
        Ge(I, T),
        ie(([{ items: $ }]) => $.length > 0),
        ue(q),
        ie(([[$, U], G]) => {
          const oe = $.items[$.items.length - 1].index === U - 1;
          return (G || $.bottom > 0 && $.itemHeight > 0 && $.offsetBottom === 0 && $.items.length === U) && oe;
        }),
        Q(([[, $]]) => $ - 1),
        Me()
      )
    ), Z = yt(
      z(
        se(I),
        ie(({ items: $ }) => $.length > 0 && $[0].index === 0),
        Wt(0),
        Me()
      )
    ), J = yt(
      z(
        se(I),
        ue(te),
        ie(([{ items: $ }, U]) => $.length > 0 && !U),
        Q(([{ items: $ }]) => ({
          endIndex: $[$.length - 1].index,
          startIndex: $[0].index
        })),
        Me(Ku),
        sn(0)
      )
    );
    ne(J, g.scrollSeekRangeChanged), ne(
      z(
        O,
        ue(P, h, T, _),
        Q(([$, U, G, oe, j]) => {
          const de = ef($), { align: Ie, behavior: Ve, offset: lt } = de;
          let Ne = de.index;
          Ne === "LAST" && (Ne = oe - 1), Ne = gr(0, Ne, Fi(oe - 1, Ne));
          let Pe = ps(U, j, G, Ne);
          return Ie === "end" ? Pe = Yl(Pe - U.height + G.height) : Ie === "center" && (Pe = Yl(Pe - U.height / 2 + G.height / 2)), lt && (Pe += lt), { behavior: Ve, top: Pe };
        })
      ),
      c
    );
    const X = et(
      z(
        I,
        Q(($) => $.offsetBottom + $.bottom)
      ),
      0
    );
    return ne(
      z(
        w,
        Q(($) => ({ height: $.visibleHeight, width: $.visibleWidth }))
      ),
      P
    ), {
      customScrollParent: v,
      // input
      data: M,
      deviation: D,
      footerHeight: o,
      gap: _,
      headerHeight: i,
      increaseViewportBy: e,
      initialItemCount: C,
      itemDimensions: h,
      overscan: n,
      restoreStateFrom: V,
      scrollBy: s,
      scrollContainerState: a,
      scrollHeight: A,
      scrollTo: c,
      scrollToIndex: O,
      scrollTop: u,
      smoothScrollTargetReached: f,
      totalCount: T,
      useWindowScroll: y,
      viewportDimensions: P,
      windowScrollContainerState: x,
      windowScrollTo: E,
      windowViewportRect: w,
      ...g,
      // output
      gridState: I,
      horizontalDirection: W,
      initialTopMostItemIndex: ee,
      totalListHeight: X,
      ...m,
      endReached: Y,
      propsReady: d,
      rangeChanged: J,
      startReached: Z,
      stateChanged: L,
      stateRestoreInProgress: te,
      ...S
    };
  },
  $e(la, at, Ur, of, mn, ca, hn)
);
function yf(e, t, n) {
  return gr(1, Lo((e + n) / (Lo(t) + n)));
}
function Xl(e, t, n, r) {
  const { height: o } = n;
  if (o === void 0 || r.length === 0)
    return { bottom: 0, top: 0 };
  const i = ps(e, t, n, r[0].index);
  return { bottom: ps(e, t, n, r[r.length - 1].index) + o, top: i };
}
function ps(e, t, n, r) {
  const o = yf(e.width, n.width, t.column), i = Lo(r / o), s = i * n.height + gr(0, i - 1) * t.row;
  return s > 0 ? s + t.row : s;
}
const Kv = /* @__PURE__ */ ge(() => {
  const e = H((p) => `Item ${p}`), t = H({}), n = H(null), r = H("virtuoso-grid-item"), o = H("virtuoso-grid-list"), i = H(ua), s = H("div"), a = H(er), c = (p, m = null) => et(
    z(
      t,
      Q((g) => g[p]),
      Me()
    ),
    m
  ), u = H(!1), f = H(!1);
  return ne(se(f), u), {
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
}), Xv = /* @__PURE__ */ ge(
  ([e, t]) => ({ ...e, ...t }),
  $e(Yv, Kv)
), Jv = /* @__PURE__ */ K.memo(function() {
  const e = De("gridState"), t = De("listClassName"), n = De("itemClassName"), r = De("itemContent"), o = De("computeItemKey"), i = De("isSeeking"), s = Ot("scrollHeight"), a = De("ItemComponent"), c = De("ListComponent"), u = De("ScrollSeekPlaceholder"), f = De("context"), p = Ot("itemDimensions"), m = Ot("gap"), g = De("log"), b = De("stateRestoreInProgress"), d = Ot("reportReadyState"), v = On(
    K.useMemo(
      () => (y) => {
        const x = y.parentElement.parentElement.scrollHeight;
        s(x);
        const E = y.firstChild;
        if (E) {
          const { height: w, width: S } = E.getBoundingClientRect();
          p({ height: w, width: S });
        }
        m({
          column: Jl("column-gap", getComputedStyle(y).columnGap, g),
          row: Jl("row-gap", getComputedStyle(y).rowGap, g)
        });
      },
      [s, p, m, g]
    ),
    !0,
    !1
  );
  return ff(() => {
    e.itemHeight > 0 && e.itemWidth > 0 && d(!0);
  }, [e]), b ? null : /* @__PURE__ */ B(
    c,
    {
      className: t,
      ref: v,
      ...Je(c, f),
      "data-testid": "virtuoso-item-list",
      style: { paddingBottom: e.offsetBottom, paddingTop: e.offsetTop },
      children: e.items.map((y) => {
        const x = o(y.index, y.data, f);
        return i ? /* @__PURE__ */ B(
          u,
          {
            ...Je(u, f),
            height: e.itemHeight,
            index: y.index,
            width: e.itemWidth
          },
          x
        ) : /* @__PURE__ */ Tn(
          a,
          {
            ...Je(a, f),
            className: n,
            "data-index": y.index,
            key: x
          },
          r(y.index, y.data, f)
        );
      })
    }
  );
}), Qv = K.memo(function() {
  const e = De("HeaderComponent"), t = Ot("headerHeight"), n = De("headerFooterTag"), r = On(
    K.useMemo(
      () => (i) => {
        t(fn(i, "height"));
      },
      [t]
    ),
    !0,
    !1
  ), o = De("context");
  return e ? /* @__PURE__ */ B(n, { ref: r, children: /* @__PURE__ */ B(e, { ...Je(e, o) }) }) : null;
}), Zv = K.memo(function() {
  const e = De("FooterComponent"), t = Ot("footerHeight"), n = De("headerFooterTag"), r = On(
    K.useMemo(
      () => (i) => {
        t(fn(i, "height"));
      },
      [t]
    ),
    !0,
    !1
  ), o = De("context");
  return e ? /* @__PURE__ */ B(n, { ref: r, children: /* @__PURE__ */ B(e, { ...Je(e, o) }) }) : null;
}), eb = ({ children: e }) => {
  const t = K.useContext(uf), n = Ot("itemDimensions"), r = Ot("viewportDimensions"), o = On(
    K.useMemo(
      () => (i) => {
        r(i.getBoundingClientRect());
      },
      [r]
    ),
    !0,
    !1
  );
  return K.useEffect(() => {
    t && (r({ height: t.viewportHeight, width: t.viewportWidth }), n({ height: t.itemHeight, width: t.itemWidth }));
  }, [t, r, n]), /* @__PURE__ */ B("div", { ref: o, style: mi(!1), children: e });
}, tb = ({ children: e }) => {
  const t = K.useContext(uf), n = Ot("windowViewportRect"), r = Ot("itemDimensions"), o = De("customScrollParent"), i = Wu(n, o, !1);
  return K.useEffect(() => {
    t && (r({ height: t.itemHeight, width: t.itemWidth }), n({ offsetTop: 0, visibleHeight: t.viewportHeight, visibleWidth: t.viewportWidth }));
  }, [t, n, r]), /* @__PURE__ */ B("div", { ref: i, style: mi(!1), children: e });
}, nb = /* @__PURE__ */ K.memo(function({ ...e }) {
  const t = De("useWindowScroll"), n = De("customScrollParent"), r = n || t ? ib : ob, o = n || t ? tb : eb, i = De("context");
  return /* @__PURE__ */ B(r, { ...e, ...Je(r, i), children: /* @__PURE__ */ Ye(o, { children: [
    /* @__PURE__ */ B(Qv, {}),
    /* @__PURE__ */ B(Jv, {}),
    /* @__PURE__ */ B(Zv, {})
  ] }) });
}), {
  Component: rb,
  useEmitter: vf,
  useEmitterValue: De,
  usePublisher: Ot
} = /* @__PURE__ */ lf(
  Xv,
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
  nb
), ob = /* @__PURE__ */ mf({ useEmitter: vf, useEmitterValue: De, usePublisher: Ot }), ib = /* @__PURE__ */ gf({ useEmitter: vf, useEmitterValue: De, usePublisher: Ot });
function Jl(e, t, n) {
  return t !== "normal" && !(t != null && t.endsWith("px")) && n(`${e} was not resolved to pixel value correctly`, t, vt.WARN), t === "normal" ? 0 : parseInt(t ?? "0", 10);
}
const sb = rb, gi = rn(
  ({ children: e, row: t, alignItems: n, justifyContent: r, gap: o = 1, sx: i, ...s }) => /* @__PURE__ */ B(
    Zs,
    {
      component: "div",
      sx: {
        display: "flex",
        flexDirection: t ? "row" : "column",
        alignItems: n || (t ? "center" : "start"),
        justifyContent: r || "start",
        "& > *": {
          flex: "unset",
          width: "100%"
        },
        ...Array.isArray(o) ? { rowGap: o[0], columnGap: o[1] } : { gap: o },
        ...i
      },
      ...s,
      children: e
    }
  )
);
gi.displayName = "Space";
const Dn = {
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
}, ab = [], Ql = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (u, f) => {
    const p = typeof u == "function" ? u(t) : u;
    if (!Object.is(p, t)) {
      const m = t;
      t = f ?? (typeof p != "object" || p === null) ? p : Object.assign({}, t, p), n.forEach((g) => g(t, m));
    }
  }, o = () => t, a = { setState: r, getState: o, getInitialState: () => c, subscribe: (u) => (n.add(u), () => n.delete(u)) }, c = t = e(r, o, a);
  return a;
}, lb = (e) => e ? Ql(e) : Ql, cb = (e) => e;
function bf(e, t = cb) {
  const n = K.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return K.useDebugValue(n), n;
}
const Zl = (e) => {
  const t = lb(e), n = (r) => bf(t, r);
  return Object.assign(n, t), n;
}, Sf = (e) => e ? Zl(e) : Zl, ec = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, hs = /* @__PURE__ */ new Map(), oo = (e) => {
  const t = hs.get(e);
  return t ? Object.fromEntries(
    Object.entries(t.stores).map(([n, r]) => [n, r.getState()])
  ) : {};
}, ub = (e, t, n) => {
  if (e === void 0)
    return {
      type: "untracked",
      connection: t.connect(n)
    };
  const r = hs.get(n.name);
  if (r)
    return { type: "tracked", store: e, ...r };
  const o = {
    connection: t.connect(n),
    stores: {}
  };
  return hs.set(n.name, o), { type: "tracked", store: e, ...o };
}, fb = (e, t = {}) => (n, r, o) => {
  const { enabled: i, anonymousActionType: s, store: a, ...c } = t;
  let u;
  try {
    u = (i ?? (ec ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!u)
    return e(n, r, o);
  const { connection: f, ...p } = ub(a, u, c);
  let m = !0;
  o.setState = (d, v, y) => {
    const x = n(d, v);
    if (!m) return x;
    const E = y === void 0 ? { type: s || "anonymous" } : typeof y == "string" ? { type: y } : y;
    return a === void 0 ? (f == null || f.send(E, r()), x) : (f == null || f.send(
      {
        ...E,
        type: `${a}/${E.type}`
      },
      {
        ...oo(c.name),
        [a]: o.getState()
      }
    ), x);
  };
  const g = (...d) => {
    const v = m;
    m = !1, n(...d), m = v;
  }, b = e(o.setState, r, o);
  if (p.type === "untracked" ? f == null || f.init(b) : (p.stores[p.store] = o, f == null || f.init(
    Object.fromEntries(
      Object.entries(p.stores).map(([d, v]) => [
        d,
        d === p.store ? b : v.getState()
      ])
    )
  )), o.dispatchFromDevtools && typeof o.dispatch == "function") {
    let d = !1;
    const v = o.dispatch;
    o.dispatch = (...y) => {
      (ec ? "production" : void 0) !== "production" && y[0].type === "__setState" && !d && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), d = !0), v(...y);
    };
  }
  return f.subscribe((d) => {
    var v;
    switch (d.type) {
      case "ACTION":
        if (typeof d.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return zi(
          d.payload,
          (y) => {
            if (y.type === "__setState") {
              if (a === void 0) {
                g(y.state);
                return;
              }
              Object.keys(y.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const x = y.state[a];
              if (x == null)
                return;
              JSON.stringify(o.getState()) !== JSON.stringify(x) && g(x);
              return;
            }
            o.dispatchFromDevtools && typeof o.dispatch == "function" && o.dispatch(y);
          }
        );
      case "DISPATCH":
        switch (d.payload.type) {
          case "RESET":
            return g(b), a === void 0 ? f == null ? void 0 : f.init(o.getState()) : f == null ? void 0 : f.init(oo(c.name));
          case "COMMIT":
            if (a === void 0) {
              f == null || f.init(o.getState());
              return;
            }
            return f == null ? void 0 : f.init(oo(c.name));
          case "ROLLBACK":
            return zi(d.state, (y) => {
              if (a === void 0) {
                g(y), f == null || f.init(o.getState());
                return;
              }
              g(y[a]), f == null || f.init(oo(c.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return zi(d.state, (y) => {
              if (a === void 0) {
                g(y);
                return;
              }
              JSON.stringify(o.getState()) !== JSON.stringify(y[a]) && g(y[a]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: y } = d.payload, x = (v = y.computedStates.slice(-1)[0]) == null ? void 0 : v.state;
            if (!x) return;
            g(a === void 0 ? x : x[a]), f == null || f.send(
              null,
              // FIXME no-any
              y
            );
            return;
          }
          case "PAUSE_RECORDING":
            return m = !m;
        }
        return;
    }
  }), b;
}, xf = fb, zi = (e, t) => {
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
function db(e, t) {
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
const ms = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return ms(r)(n);
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
        return ms(r)(n);
      }
    };
  }
}, pb = (e, t) => (n, r, o) => {
  let i = {
    storage: db(() => localStorage),
    partialize: (d) => d,
    version: 0,
    merge: (d, v) => ({
      ...v,
      ...d
    }),
    ...t
  }, s = !1;
  const a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let u = i.storage;
  if (!u)
    return e(
      (...d) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), n(...d);
      },
      r,
      o
    );
  const f = () => {
    const d = i.partialize({ ...r() });
    return u.setItem(i.name, {
      state: d,
      version: i.version
    });
  }, p = o.setState;
  o.setState = (d, v) => {
    p(d, v), f();
  };
  const m = e(
    (...d) => {
      n(...d), f();
    },
    r,
    o
  );
  o.getInitialState = () => m;
  let g;
  const b = () => {
    var d, v;
    if (!u) return;
    s = !1, a.forEach((x) => {
      var E;
      return x((E = r()) != null ? E : m);
    });
    const y = ((v = i.onRehydrateStorage) == null ? void 0 : v.call(i, (d = r()) != null ? d : m)) || void 0;
    return ms(u.getItem.bind(u))(i.name).then((x) => {
      if (x)
        if (typeof x.version == "number" && x.version !== i.version) {
          if (i.migrate) {
            const E = i.migrate(
              x.state,
              x.version
            );
            return E instanceof Promise ? E.then((w) => [!0, w]) : [!0, E];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, x.state];
      return [!1, void 0];
    }).then((x) => {
      var E;
      const [w, S] = x;
      if (g = i.merge(
        S,
        (E = r()) != null ? E : m
      ), n(g, !0), w)
        return f();
    }).then(() => {
      y == null || y(g, void 0), g = r(), s = !0, c.forEach((x) => x(g));
    }).catch((x) => {
      y == null || y(void 0, x);
    });
  };
  return o.persist = {
    setOptions: (d) => {
      i = {
        ...i,
        ...d
      }, d.storage && (u = d.storage);
    },
    clearStorage: () => {
      u == null || u.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => b(),
    hasHydrated: () => s,
    onHydrate: (d) => (a.add(d), () => {
      a.delete(d);
    }),
    onFinishHydration: (d) => (c.add(d), () => {
      c.delete(d);
    })
  }, i.skipHydration || b(), g || m;
}, Tf = pb;
function tc() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
const hb = Sf()(
  xf(
    Tf(
      (e) => ({
        themeMode: tc(),
        setThemeMode: (t) => e({ themeMode: t }),
        toggleThemeMode: () => e((t) => ({ themeMode: t.themeMode === "dark" ? "light" : "dark" })),
        resetThemeMode: () => e({ themeMode: tc() })
      }),
      {
        name: "VENOMOUS_UI__THEME_MODE"
      }
    )
  )
);
function mb() {
  const e = bf(hb);
  return {
    ...e,
    isDarkMode: e.themeMode === "dark"
  };
}
var wf = /* @__PURE__ */ ((e) => (e.Skyblue = "Skyblue", e.Teal = "Teal", e))(wf || {});
const Ef = {
  Skyblue: "#0097a7",
  Teal: "#009688"
};
function nc(e) {
  const t = Ef[e];
  return {
    main: t,
    light: Yo(t, 0.5),
    dark: Go(t, 0.5),
    opacity: At(t, 0.5),
    contrastText: "#fff"
  };
}
const gb = Sf()(
  xf(
    Tf(
      (e) => ({
        themePaletteName: "Skyblue",
        themePalette: nc(
          "Skyblue"
          /* Skyblue */
        ),
        setThemePaletteName: (t) => e({ themePaletteName: t, themePalette: nc(t) })
      }),
      {
        name: "VENOMOUS_UI__THEME_PALETTE"
      }
    )
  )
);
function yb() {
  return {
    ...gb(),
    allPaletteNames: Object.keys(wf),
    allPaletteMainColors: Ef
  };
}
const sr = eu({
  themeId: Dt
});
function vb() {
  const { breakpoints: e } = Qn(), t = sr(e.down("sm")), n = sr(e.between("sm", "md")), r = sr(e.between("md", "lg")), o = sr(e.between("lg", "xl")), i = sr(e.up("xl"));
  return {
    breakpoints: e,
    isXs: t,
    isSm: n,
    isMd: r,
    isLg: o,
    isXl: i
  };
}
function bb({
  gridStyle: e,
  gridItemStyle: t,
  cols: n
}) {
  const { isXs: r, isSm: o, isMd: i, isLg: s } = vb(), a = Fn(() => {
    let u;
    return r ? u = (n == null ? void 0 : n.xs) ?? Dn.xs : o ? u = (n == null ? void 0 : n.sm) ?? Dn.sm : i ? u = (n == null ? void 0 : n.md) ?? Dn.md : s ? u = (n == null ? void 0 : n.lg) ?? Dn.lg : u = (n == null ? void 0 : n.xl) ?? Dn.xl, `${100 / u}%`;
  }, [r, o, i, s, n]);
  return {
    gridComponents: Fn(
      () => ({
        List: ({ ref: u, style: f, children: p, ...m }) => /* @__PURE__ */ B(
          "div",
          {
            ref: u,
            ...m,
            style: { display: "flex", flexWrap: "wrap", ...f, ...e },
            children: p
          }
        ),
        Item: ({ children: u, ...f }) => /* @__PURE__ */ B(
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
const Sb = ({
  height: e,
  width: t,
  items: n = ab,
  renderGridItem: r,
  gridStyle: o,
  gridItemStyle: i,
  cols: s = Dn
}) => {
  const { gridComponents: a } = bb({ gridStyle: o, gridItemStyle: i, cols: s });
  return /* @__PURE__ */ B(gi, { style: { height: e || "100%", width: t || "100%" }, children: /* @__PURE__ */ B(
    sb,
    {
      style: { height: "100%" },
      totalCount: n.length,
      components: a,
      itemContent: (c) => r(n[c], c)
    }
  ) });
}, YS = rn(Sb), xb = rn(({ height: e, width: t, items: n, renderItem: r }) => /* @__PURE__ */ B(gi, { style: { height: e || "100%", width: t || "100%" }, children: /* @__PURE__ */ B(
  Wv,
  {
    style: { height: "100%", width: "100%" },
    totalCount: n == null ? void 0 : n.length,
    data: n,
    itemContent: (o, i) => r ? r(i, o) : i.label
  }
) }));
xb.displayName = "Menu";
const Cf = (e) => e.scrollTop;
function jo(e, t) {
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
function gs(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Tb = {
  entering: {
    opacity: 1,
    transform: gs(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Vi = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Fo = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: s,
    in: a,
    onEnter: c,
    onEntered: u,
    onEntering: f,
    onExit: p,
    onExited: m,
    onExiting: g,
    style: b,
    timeout: d = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = Xt,
    ...y
  } = t, x = _n(), E = R.useRef(), w = Qn(), S = R.useRef(null), T = It(S, Dr(i), n), C = (_) => (L) => {
    if (_) {
      const V = S.current;
      L === void 0 ? _(V) : _(V, L);
    }
  }, I = C(f), P = C((_, L) => {
    Cf(_);
    const {
      duration: V,
      delay: te,
      easing: ee
    } = jo({
      style: b,
      timeout: d,
      easing: s
    }, {
      mode: "enter"
    });
    let k;
    d === "auto" ? (k = w.transitions.getAutoHeightDuration(_.clientHeight), E.current = k) : k = V, _.style.transition = [w.transitions.create("opacity", {
      duration: k,
      delay: te
    }), w.transitions.create("transform", {
      duration: Vi ? k : k * 0.666,
      delay: te,
      easing: ee
    })].join(","), c && c(_, L);
  }), h = C(u), O = C(g), A = C((_) => {
    const {
      duration: L,
      delay: V,
      easing: te
    } = jo({
      style: b,
      timeout: d,
      easing: s
    }, {
      mode: "exit"
    });
    let ee;
    d === "auto" ? (ee = w.transitions.getAutoHeightDuration(_.clientHeight), E.current = ee) : ee = L, _.style.transition = [w.transitions.create("opacity", {
      duration: ee,
      delay: V
    }), w.transitions.create("transform", {
      duration: Vi ? ee : ee * 0.666,
      delay: Vi ? V : V || ee * 0.333,
      easing: te
    })].join(","), _.style.opacity = 0, _.style.transform = gs(0.75), p && p(_);
  }), D = C(m);
  return /* @__PURE__ */ B(v, {
    appear: o,
    in: a,
    nodeRef: S,
    onEnter: P,
    onEntered: h,
    onEntering: I,
    onExit: A,
    onExited: D,
    onExiting: O,
    addEndListener: (_) => {
      d === "auto" && x.start(E.current || 0, _), r && r(S.current, _);
    },
    timeout: d === "auto" ? null : d,
    ...y,
    children: (_, {
      ownerState: L,
      ...V
    }) => /* @__PURE__ */ R.cloneElement(i, {
      style: {
        opacity: 0,
        transform: gs(0.75),
        visibility: _ === "exited" && !a ? "hidden" : void 0,
        ...Tb[_],
        ...b,
        ...i.props.style
      },
      ref: T,
      ...V
    })
  });
});
process.env.NODE_ENV !== "production" && (Fo.propTypes = {
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
  children: Xn.isRequired,
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
Fo && (Fo.muiSupportAuto = !0);
var ct = "top", Pt = "bottom", kt = "right", ut = "left", da = "auto", qr = [ct, Pt, kt, ut], Un = "start", $r = "end", wb = "clippingParents", Of = "viewport", ar = "popper", Eb = "reference", rc = /* @__PURE__ */ qr.reduce(function(e, t) {
  return e.concat([t + "-" + Un, t + "-" + $r]);
}, []), Rf = /* @__PURE__ */ [].concat(qr, [da]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Un, t + "-" + $r]);
}, []), Cb = "beforeRead", Ob = "read", Rb = "afterRead", Ib = "beforeMain", Pb = "main", kb = "afterMain", Mb = "beforeWrite", $b = "write", Nb = "afterWrite", Ab = [Cb, Ob, Rb, Ib, Pb, kb, Mb, $b, Nb];
function Kt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function bt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Cn(e) {
  var t = bt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Rt(e) {
  var t = bt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function pa(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = bt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Db(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Rt(i) || !Kt(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var a = o[s];
      a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function _b(e) {
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
      !Rt(o) || !Kt(o) || (Object.assign(o.style, a), Object.keys(i).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
const Bb = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Db,
  effect: _b,
  requires: ["computeStyles"]
};
function Gt(e) {
  return e.split("-")[0];
}
var wn = Math.max, zo = Math.min, qn = Math.round;
function ys() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function If() {
  return !/^((?!chrome|android).)*safari/i.test(ys());
}
function Gn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && Rt(e) && (o = e.offsetWidth > 0 && qn(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && qn(r.height) / e.offsetHeight || 1);
  var s = Cn(e) ? bt(e) : window, a = s.visualViewport, c = !If() && n, u = (r.left + (c && a ? a.offsetLeft : 0)) / o, f = (r.top + (c && a ? a.offsetTop : 0)) / i, p = r.width / o, m = r.height / i;
  return {
    width: p,
    height: m,
    top: f,
    right: u + p,
    bottom: f + m,
    left: u,
    x: u,
    y: f
  };
}
function ha(e) {
  var t = Gn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Pf(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && pa(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function nn(e) {
  return bt(e).getComputedStyle(e);
}
function Lb(e) {
  return ["table", "td", "th"].indexOf(Kt(e)) >= 0;
}
function gn(e) {
  return ((Cn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function yi(e) {
  return Kt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (pa(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    gn(e)
  );
}
function oc(e) {
  return !Rt(e) || // https://github.com/popperjs/popper-core/issues/837
  nn(e).position === "fixed" ? null : e.offsetParent;
}
function jb(e) {
  var t = /firefox/i.test(ys()), n = /Trident/i.test(ys());
  if (n && Rt(e)) {
    var r = nn(e);
    if (r.position === "fixed")
      return null;
  }
  var o = yi(e);
  for (pa(o) && (o = o.host); Rt(o) && ["html", "body"].indexOf(Kt(o)) < 0; ) {
    var i = nn(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Gr(e) {
  for (var t = bt(e), n = oc(e); n && Lb(n) && nn(n).position === "static"; )
    n = oc(n);
  return n && (Kt(n) === "html" || Kt(n) === "body" && nn(n).position === "static") ? t : n || jb(e) || t;
}
function ma(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function yr(e, t, n) {
  return wn(e, zo(t, n));
}
function Fb(e, t, n) {
  var r = yr(e, t, n);
  return r > n ? n : r;
}
function kf() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Mf(e) {
  return Object.assign({}, kf(), e);
}
function $f(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var zb = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Mf(typeof t != "number" ? t : $f(t, qr));
};
function Vb(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, a = Gt(n.placement), c = ma(a), u = [ut, kt].indexOf(a) >= 0, f = u ? "height" : "width";
  if (!(!i || !s)) {
    var p = zb(o.padding, n), m = ha(i), g = c === "y" ? ct : ut, b = c === "y" ? Pt : kt, d = n.rects.reference[f] + n.rects.reference[c] - s[c] - n.rects.popper[f], v = s[c] - n.rects.reference[c], y = Gr(i), x = y ? c === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, E = d / 2 - v / 2, w = p[g], S = x - m[f] - p[b], T = x / 2 - m[f] / 2 + E, C = yr(w, T, S), I = c;
    n.modifiersData[r] = (t = {}, t[I] = C, t.centerOffset = C - T, t);
  }
}
function Wb(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Pf(t.elements.popper, o) && (t.elements.arrow = o));
}
const Hb = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Vb,
  effect: Wb,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Yn(e) {
  return e.split("-")[1];
}
var Ub = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function qb(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: qn(n * o) / o || 0,
    y: qn(r * o) / o || 0
  };
}
function ic(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, a = e.position, c = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, p = e.isFixed, m = s.x, g = m === void 0 ? 0 : m, b = s.y, d = b === void 0 ? 0 : b, v = typeof f == "function" ? f({
    x: g,
    y: d
  }) : {
    x: g,
    y: d
  };
  g = v.x, d = v.y;
  var y = s.hasOwnProperty("x"), x = s.hasOwnProperty("y"), E = ut, w = ct, S = window;
  if (u) {
    var T = Gr(n), C = "clientHeight", I = "clientWidth";
    if (T === bt(n) && (T = gn(n), nn(T).position !== "static" && a === "absolute" && (C = "scrollHeight", I = "scrollWidth")), T = T, o === ct || (o === ut || o === kt) && i === $r) {
      w = Pt;
      var P = p && T === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        T[C]
      );
      d -= P - r.height, d *= c ? 1 : -1;
    }
    if (o === ut || (o === ct || o === Pt) && i === $r) {
      E = kt;
      var h = p && T === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        T[I]
      );
      g -= h - r.width, g *= c ? 1 : -1;
    }
  }
  var O = Object.assign({
    position: a
  }, u && Ub), A = f === !0 ? qb({
    x: g,
    y: d
  }, bt(n)) : {
    x: g,
    y: d
  };
  if (g = A.x, d = A.y, c) {
    var D;
    return Object.assign({}, O, (D = {}, D[w] = x ? "0" : "", D[E] = y ? "0" : "", D.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + d + "px)" : "translate3d(" + g + "px, " + d + "px, 0)", D));
  }
  return Object.assign({}, O, (t = {}, t[w] = x ? d + "px" : "", t[E] = y ? g + "px" : "", t.transform = "", t));
}
function Gb(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, a = n.roundOffsets, c = a === void 0 ? !0 : a, u = {
    placement: Gt(t.placement),
    variation: Yn(t.placement),
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
const Yb = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Gb,
  data: {}
};
var io = {
  passive: !0
};
function Kb(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, a = s === void 0 ? !0 : s, c = bt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, io);
  }), a && c.addEventListener("resize", n.update, io), function() {
    i && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, io);
    }), a && c.removeEventListener("resize", n.update, io);
  };
}
const Xb = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Kb,
  data: {}
};
var Jb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function xo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Jb[t];
  });
}
var Qb = {
  start: "end",
  end: "start"
};
function sc(e) {
  return e.replace(/start|end/g, function(t) {
    return Qb[t];
  });
}
function ga(e) {
  var t = bt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function ya(e) {
  return Gn(gn(e)).left + ga(e).scrollLeft;
}
function Zb(e, t) {
  var n = bt(e), r = gn(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, a = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = If();
    (u || !u && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a + ya(e),
    y: c
  };
}
function e0(e) {
  var t, n = gn(e), r = ga(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = wn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = wn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -r.scrollLeft + ya(e), c = -r.scrollTop;
  return nn(o || n).direction === "rtl" && (a += wn(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
function va(e) {
  var t = nn(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Nf(e) {
  return ["html", "body", "#document"].indexOf(Kt(e)) >= 0 ? e.ownerDocument.body : Rt(e) && va(e) ? e : Nf(yi(e));
}
function vr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Nf(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = bt(r), s = o ? [i].concat(i.visualViewport || [], va(r) ? r : []) : r, a = t.concat(s);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(vr(yi(s)))
  );
}
function vs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function t0(e, t) {
  var n = Gn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ac(e, t, n) {
  return t === Of ? vs(Zb(e, n)) : Cn(t) ? t0(t, n) : vs(e0(gn(e)));
}
function n0(e) {
  var t = vr(yi(e)), n = ["absolute", "fixed"].indexOf(nn(e).position) >= 0, r = n && Rt(e) ? Gr(e) : e;
  return Cn(r) ? t.filter(function(o) {
    return Cn(o) && Pf(o, r) && Kt(o) !== "body";
  }) : [];
}
function r0(e, t, n, r) {
  var o = t === "clippingParents" ? n0(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], a = i.reduce(function(c, u) {
    var f = ac(e, u, r);
    return c.top = wn(f.top, c.top), c.right = zo(f.right, c.right), c.bottom = zo(f.bottom, c.bottom), c.left = wn(f.left, c.left), c;
  }, ac(e, s, r));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Af(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Gt(r) : null, i = r ? Yn(r) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, c;
  switch (o) {
    case ct:
      c = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Pt:
      c = {
        x: s,
        y: t.y + t.height
      };
      break;
    case kt:
      c = {
        x: t.x + t.width,
        y: a
      };
      break;
    case ut:
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
  var u = o ? ma(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (i) {
      case Un:
        c[u] = c[u] - (t[f] / 2 - n[f] / 2);
        break;
      case $r:
        c[u] = c[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return c;
}
function Nr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, a = n.boundary, c = a === void 0 ? wb : a, u = n.rootBoundary, f = u === void 0 ? Of : u, p = n.elementContext, m = p === void 0 ? ar : p, g = n.altBoundary, b = g === void 0 ? !1 : g, d = n.padding, v = d === void 0 ? 0 : d, y = Mf(typeof v != "number" ? v : $f(v, qr)), x = m === ar ? Eb : ar, E = e.rects.popper, w = e.elements[b ? x : m], S = r0(Cn(w) ? w : w.contextElement || gn(e.elements.popper), c, f, s), T = Gn(e.elements.reference), C = Af({
    reference: T,
    element: E,
    placement: o
  }), I = vs(Object.assign({}, E, C)), P = m === ar ? I : T, h = {
    top: S.top - P.top + y.top,
    bottom: P.bottom - S.bottom + y.bottom,
    left: S.left - P.left + y.left,
    right: P.right - S.right + y.right
  }, O = e.modifiersData.offset;
  if (m === ar && O) {
    var A = O[o];
    Object.keys(h).forEach(function(D) {
      var M = [kt, Pt].indexOf(D) >= 0 ? 1 : -1, _ = [ct, Pt].indexOf(D) >= 0 ? "y" : "x";
      h[D] += A[_] * M;
    });
  }
  return h;
}
function o0(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, a = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? Rf : c, f = Yn(r), p = f ? a ? rc : rc.filter(function(b) {
    return Yn(b) === f;
  }) : qr, m = p.filter(function(b) {
    return u.indexOf(b) >= 0;
  });
  m.length === 0 && (m = p);
  var g = m.reduce(function(b, d) {
    return b[d] = Nr(e, {
      placement: d,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[Gt(d)], b;
  }, {});
  return Object.keys(g).sort(function(b, d) {
    return g[b] - g[d];
  });
}
function i0(e) {
  if (Gt(e) === da)
    return [];
  var t = xo(e);
  return [sc(e), t, sc(t)];
}
function s0(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !0 : s, c = n.fallbackPlacements, u = n.padding, f = n.boundary, p = n.rootBoundary, m = n.altBoundary, g = n.flipVariations, b = g === void 0 ? !0 : g, d = n.allowedAutoPlacements, v = t.options.placement, y = Gt(v), x = y === v, E = c || (x || !b ? [xo(v)] : i0(v)), w = [v].concat(E).reduce(function(Y, Z) {
      return Y.concat(Gt(Z) === da ? o0(t, {
        placement: Z,
        boundary: f,
        rootBoundary: p,
        padding: u,
        flipVariations: b,
        allowedAutoPlacements: d
      }) : Z);
    }, []), S = t.rects.reference, T = t.rects.popper, C = /* @__PURE__ */ new Map(), I = !0, P = w[0], h = 0; h < w.length; h++) {
      var O = w[h], A = Gt(O), D = Yn(O) === Un, M = [ct, Pt].indexOf(A) >= 0, _ = M ? "width" : "height", L = Nr(t, {
        placement: O,
        boundary: f,
        rootBoundary: p,
        altBoundary: m,
        padding: u
      }), V = M ? D ? kt : ut : D ? Pt : ct;
      S[_] > T[_] && (V = xo(V));
      var te = xo(V), ee = [];
      if (i && ee.push(L[A] <= 0), a && ee.push(L[V] <= 0, L[te] <= 0), ee.every(function(Y) {
        return Y;
      })) {
        P = O, I = !1;
        break;
      }
      C.set(O, ee);
    }
    if (I)
      for (var k = b ? 3 : 1, F = function(Z) {
        var J = w.find(function(X) {
          var $ = C.get(X);
          if ($)
            return $.slice(0, Z).every(function(U) {
              return U;
            });
        });
        if (J)
          return P = J, "break";
      }, W = k; W > 0; W--) {
        var q = F(W);
        if (q === "break") break;
      }
    t.placement !== P && (t.modifiersData[r]._skip = !0, t.placement = P, t.reset = !0);
  }
}
const a0 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: s0,
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
  return [ct, kt, Pt, ut].some(function(t) {
    return e[t] >= 0;
  });
}
function l0(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = Nr(t, {
    elementContext: "reference"
  }), a = Nr(t, {
    altBoundary: !0
  }), c = lc(s, r), u = lc(a, o, i), f = cc(c), p = cc(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: f,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": p
  });
}
const c0 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: l0
};
function u0(e, t, n) {
  var r = Gt(e), o = [ut, ct].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], a = i[1];
  return s = s || 0, a = (a || 0) * o, [ut, kt].indexOf(r) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function f0(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = Rf.reduce(function(f, p) {
    return f[p] = u0(p, t.rects, i), f;
  }, {}), a = s[t.placement], c = a.x, u = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const d0 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: f0
};
function p0(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Af({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const h0 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: p0,
  data: {}
};
function m0(e) {
  return e === "x" ? "y" : "x";
}
function g0(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !1 : s, c = n.boundary, u = n.rootBoundary, f = n.altBoundary, p = n.padding, m = n.tether, g = m === void 0 ? !0 : m, b = n.tetherOffset, d = b === void 0 ? 0 : b, v = Nr(t, {
    boundary: c,
    rootBoundary: u,
    padding: p,
    altBoundary: f
  }), y = Gt(t.placement), x = Yn(t.placement), E = !x, w = ma(y), S = m0(w), T = t.modifiersData.popperOffsets, C = t.rects.reference, I = t.rects.popper, P = typeof d == "function" ? d(Object.assign({}, t.rects, {
    placement: t.placement
  })) : d, h = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), O = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, A = {
    x: 0,
    y: 0
  };
  if (T) {
    if (i) {
      var D, M = w === "y" ? ct : ut, _ = w === "y" ? Pt : kt, L = w === "y" ? "height" : "width", V = T[w], te = V + v[M], ee = V - v[_], k = g ? -I[L] / 2 : 0, F = x === Un ? C[L] : I[L], W = x === Un ? -I[L] : -C[L], q = t.elements.arrow, Y = g && q ? ha(q) : {
        width: 0,
        height: 0
      }, Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : kf(), J = Z[M], X = Z[_], $ = yr(0, C[L], Y[L]), U = E ? C[L] / 2 - k - $ - J - h.mainAxis : F - $ - J - h.mainAxis, G = E ? -C[L] / 2 + k + $ + X + h.mainAxis : W + $ + X + h.mainAxis, oe = t.elements.arrow && Gr(t.elements.arrow), j = oe ? w === "y" ? oe.clientTop || 0 : oe.clientLeft || 0 : 0, de = (D = O == null ? void 0 : O[w]) != null ? D : 0, Ie = V + U - de - j, Ve = V + G - de, lt = yr(g ? zo(te, Ie) : te, V, g ? wn(ee, Ve) : ee);
      T[w] = lt, A[w] = lt - V;
    }
    if (a) {
      var Ne, Pe = w === "x" ? ct : ut, ke = w === "x" ? Pt : kt, _e = T[S], He = S === "y" ? "height" : "width", re = _e + v[Pe], xt = _e - v[ke], tt = [ct, ut].indexOf(y) !== -1, nt = (Ne = O == null ? void 0 : O[S]) != null ? Ne : 0, Lt = tt ? re : _e - C[He] - I[He] - nt + h.altAxis, Tt = tt ? _e + C[He] + I[He] - nt - h.altAxis : xt, jt = g && tt ? Fb(Lt, _e, Tt) : yr(g ? Lt : re, _e, g ? Tt : xt);
      T[S] = jt, A[S] = jt - _e;
    }
    t.modifiersData[r] = A;
  }
}
const y0 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: g0,
  requiresIfExists: ["offset"]
};
function v0(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function b0(e) {
  return e === bt(e) || !Rt(e) ? ga(e) : v0(e);
}
function S0(e) {
  var t = e.getBoundingClientRect(), n = qn(t.width) / e.offsetWidth || 1, r = qn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function x0(e, t, n) {
  n === void 0 && (n = !1);
  var r = Rt(t), o = Rt(t) && S0(t), i = gn(t), s = Gn(e, o, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Kt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  va(i)) && (a = b0(t)), Rt(t) ? (c = Gn(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = ya(i))), {
    x: s.left + a.scrollLeft - c.x,
    y: s.top + a.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function T0(e) {
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
function w0(e) {
  var t = T0(e);
  return Ab.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function E0(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function C0(e) {
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
function fc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function O0(e) {
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
    }, p = [], m = !1, g = {
      state: f,
      setOptions: function(y) {
        var x = typeof y == "function" ? y(f.options) : y;
        d(), f.options = Object.assign({}, i, f.options, x), f.scrollParents = {
          reference: Cn(a) ? vr(a) : a.contextElement ? vr(a.contextElement) : [],
          popper: vr(c)
        };
        var E = w0(C0([].concat(r, f.options.modifiers)));
        return f.orderedModifiers = E.filter(function(w) {
          return w.enabled;
        }), b(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!m) {
          var y = f.elements, x = y.reference, E = y.popper;
          if (fc(x, E)) {
            f.rects = {
              reference: x0(x, Gr(E), f.options.strategy === "fixed"),
              popper: ha(E)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(h) {
              return f.modifiersData[h.name] = Object.assign({}, h.data);
            });
            for (var w = 0; w < f.orderedModifiers.length; w++) {
              if (f.reset === !0) {
                f.reset = !1, w = -1;
                continue;
              }
              var S = f.orderedModifiers[w], T = S.fn, C = S.options, I = C === void 0 ? {} : C, P = S.name;
              typeof T == "function" && (f = T({
                state: f,
                options: I,
                name: P,
                instance: g
              }) || f);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: E0(function() {
        return new Promise(function(v) {
          g.forceUpdate(), v(f);
        });
      }),
      destroy: function() {
        d(), m = !0;
      }
    };
    if (!fc(a, c))
      return g;
    g.setOptions(u).then(function(v) {
      !m && u.onFirstUpdate && u.onFirstUpdate(v);
    });
    function b() {
      f.orderedModifiers.forEach(function(v) {
        var y = v.name, x = v.options, E = x === void 0 ? {} : x, w = v.effect;
        if (typeof w == "function") {
          var S = w({
            state: f,
            name: y,
            instance: g,
            options: E
          }), T = function() {
          };
          p.push(S || T);
        }
      });
    }
    function d() {
      p.forEach(function(v) {
        return v();
      }), p = [];
    }
    return g;
  };
}
var R0 = [Xb, h0, Yb, Bb, d0, a0, y0, Hb, c0], I0 = /* @__PURE__ */ O0({
  defaultModifiers: R0
});
function P0(e) {
  return typeof e == "function" ? e() : e;
}
const Ar = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, a] = R.useState(null), c = It(/* @__PURE__ */ R.isValidElement(r) ? Dr(r) : null, n);
  if (En(() => {
    i || a(P0(o) || document.body);
  }, [o, i]), En(() => {
    if (s && !i)
      return qi(n, s), () => {
        qi(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ R.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ R.cloneElement(r, u);
    }
    return r;
  }
  return s && /* @__PURE__ */ od.createPortal(r, s);
});
process.env.NODE_ENV !== "production" && (Ar.propTypes = {
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
  container: l.oneOfType([zn, l.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: l.bool
});
process.env.NODE_ENV !== "production" && (Ar.propTypes = Ko(Ar.propTypes));
function k0(e) {
  return ot("MuiPopper", e);
}
it("MuiPopper", ["root"]);
function M0(e, t) {
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
function Vo(e) {
  return typeof e == "function" ? e() : e;
}
function vi(e) {
  return e.nodeType !== void 0;
}
function $0(e) {
  return !vi(e);
}
const N0 = (e) => {
  const {
    classes: t
  } = e;
  return St({
    root: ["root"]
  }, k0, t);
}, A0 = {}, D0 = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: a,
    open: c,
    placement: u,
    popperOptions: f,
    popperRef: p,
    slotProps: m = {},
    slots: g = {},
    TransitionProps: b,
    // @ts-ignore internal logic
    ownerState: d,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...v
  } = t, y = R.useRef(null), x = It(y, n), E = R.useRef(null), w = It(E, p), S = R.useRef(w);
  En(() => {
    S.current = w;
  }, [w]), R.useImperativeHandle(p, () => E.current, []);
  const T = M0(u, i), [C, I] = R.useState(T), [P, h] = R.useState(Vo(r));
  R.useEffect(() => {
    E.current && E.current.forceUpdate();
  }), R.useEffect(() => {
    r && h(Vo(r));
  }, [r]), En(() => {
    if (!P || !c)
      return;
    const _ = (te) => {
      I(te.placement);
    };
    if (process.env.NODE_ENV !== "production" && P && vi(P) && P.nodeType === 1) {
      const te = P.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && te.top === 0 && te.left === 0 && te.right === 0 && te.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let L = [{
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
        state: te
      }) => {
        _(te);
      }
    }];
    a != null && (L = L.concat(a)), f && f.modifiers != null && (L = L.concat(f.modifiers));
    const V = I0(P, y.current, {
      placement: T,
      ...f,
      modifiers: L
    });
    return S.current(V), () => {
      V.destroy(), S.current(null);
    };
  }, [P, s, a, c, f, T]);
  const O = {
    placement: C
  };
  b !== null && (O.TransitionProps = b);
  const A = N0(t), D = g.root ?? "div", M = Ld({
    elementType: D,
    externalSlotProps: m.root,
    externalForwardedProps: v,
    additionalProps: {
      role: "tooltip",
      ref: x
    },
    ownerState: t,
    className: A.root
  });
  return /* @__PURE__ */ B(D, {
    ...M,
    children: typeof o == "function" ? o(O) : o
  });
}), Df = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: a = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: f,
    placement: p = "bottom",
    popperOptions: m = A0,
    popperRef: g,
    style: b,
    transition: d = !1,
    slotProps: v = {},
    slots: y = {},
    ...x
  } = t, [E, w] = R.useState(!0), S = () => {
    w(!1);
  }, T = () => {
    w(!0);
  };
  if (!c && !f && (!d || E))
    return null;
  let C;
  if (i)
    C = i;
  else if (r) {
    const h = Vo(r);
    C = h && vi(h) ? en(h).body : en(null).body;
  }
  const I = !f && c && (!d || E) ? "none" : void 0, P = d ? {
    in: f,
    onEnter: S,
    onExited: T
  } : void 0;
  return /* @__PURE__ */ B(Ar, {
    disablePortal: a,
    container: C,
    children: /* @__PURE__ */ B(D0, {
      anchorEl: r,
      direction: s,
      disablePortal: a,
      modifiers: u,
      ref: n,
      open: d ? !E : f,
      placement: p,
      popperOptions: m,
      popperRef: g,
      slotProps: v,
      slots: y,
      ...x,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: I,
        ...b
      },
      TransitionProps: P,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (Df.propTypes = {
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
  anchorEl: Kn(l.oneOfType([zn, l.object, l.func]), (e) => {
    if (e.open) {
      const t = Vo(e.anchorEl);
      if (t && vi(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || $0(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
  container: l.oneOfType([zn, l.func]),
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
  popperRef: Es,
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
const _0 = Re(Df, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ba = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ru(), o = st({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    components: a,
    componentsProps: c,
    container: u,
    disablePortal: f,
    keepMounted: p,
    modifiers: m,
    open: g,
    placement: b,
    popperOptions: d,
    popperRef: v,
    transition: y,
    slots: x,
    slotProps: E,
    ...w
  } = o, S = (x == null ? void 0 : x.root) ?? (a == null ? void 0 : a.Root), T = {
    anchorEl: i,
    container: u,
    disablePortal: f,
    keepMounted: p,
    modifiers: m,
    open: g,
    placement: b,
    popperOptions: d,
    popperRef: v,
    transition: y,
    ...w
  };
  return /* @__PURE__ */ B(_0, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: {
      root: S
    },
    slotProps: E ?? c,
    ...T,
    ref: n
  });
});
process.env.NODE_ENV !== "production" && (ba.propTypes = {
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
  anchorEl: l.oneOfType([zn, l.object, l.func]),
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
  container: l.oneOfType([zn, l.func]),
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
  popperRef: Es,
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
function ht(e, t) {
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
    slotProps: p = {
      [e]: void 0
    },
    ...m
  } = i, g = f[e] || r, b = Mc(p[e], o), {
    props: {
      component: d,
      ...v
    },
    internalRef: y
  } = kc({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? m : void 0,
    externalSlotProps: b
  }), x = It(y, b == null ? void 0 : b.ref, t.ref), E = e === "root" ? d || u : d, w = Ic(g, {
    ...e === "root" && !u && !f[e] && s,
    ...e !== "root" && !f[e] && s,
    ...v,
    ...E && !a && {
      as: E
    },
    ...E && a && {
      component: E
    },
    ref: x
  }, o);
  return [g, w];
}
function B0(e) {
  return ot("MuiTooltip", e);
}
const ze = it("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function L0(e) {
  return Math.round(e * 1e5) / 1e5;
}
const j0 = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${be(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return St(s, B0, t);
}, F0 = Re(ba, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(Bt(({
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
      [`&[data-popper-placement*="bottom"] .${ze.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${ze.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${ze.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${ze.arrow}`]: {
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
      [`&[data-popper-placement*="right"] .${ze.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${ze.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${ze.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${ze.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), z0 = Re("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${be(n.placement.split("-")[0])}`]];
  }
})(Bt(({
  theme: e
}) => ({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : At(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium,
  [`.${ze.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${ze.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${ze.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${ze.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${L0(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${ze.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${ze.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${ze.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${ze.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${ze.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${ze.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${ze.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${ze.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${ze.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${ze.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), V0 = Re("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (e, t) => t.arrow
})(Bt(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : At(e.palette.grey[700], 0.9),
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
let so = !1;
const dc = new Xo();
let lr = {
  x: 0,
  y: 0
};
function ao(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const _f = /* @__PURE__ */ R.forwardRef(function(t, n) {
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
    disableHoverListener: p = !1,
    disableInteractive: m = !1,
    disableTouchListener: g = !1,
    enterDelay: b = 100,
    enterNextDelay: d = 0,
    enterTouchDelay: v = 700,
    followCursor: y = !1,
    id: x,
    leaveDelay: E = 0,
    leaveTouchDelay: w = 1500,
    onClose: S,
    onOpen: T,
    open: C,
    placement: I = "bottom",
    PopperComponent: P,
    PopperProps: h = {},
    slotProps: O = {},
    slots: A = {},
    title: D,
    TransitionComponent: M,
    TransitionProps: _,
    ...L
  } = r, V = /* @__PURE__ */ R.isValidElement(i) ? i : /* @__PURE__ */ B("span", {
    children: i
  }), te = Qn(), ee = ru(), [k, F] = R.useState(), [W, q] = R.useState(null), Y = R.useRef(!1), Z = m || y, J = _n(), X = _n(), $ = _n(), U = _n(), [G, oe] = Pd({
    controlled: C,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let j = G;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: le
    } = R.useRef(C !== void 0);
    R.useEffect(() => {
      k && k.disabled && !le && D !== "" && k.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [D, k, le]);
  }
  const de = Cs(x), Ie = R.useRef(), Ve = an(() => {
    Ie.current !== void 0 && (document.body.style.WebkitUserSelect = Ie.current, Ie.current = void 0), U.clear();
  });
  R.useEffect(() => Ve, [Ve]);
  const lt = (le) => {
    dc.clear(), so = !0, oe(!0), T && !j && T(le);
  }, Ne = an(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (le) => {
      dc.start(800 + E, () => {
        so = !1;
      }), oe(!1), S && j && S(le), J.start(te.transitions.duration.shortest, () => {
        Y.current = !1;
      });
    }
  ), Pe = (le) => {
    Y.current && le.type !== "touchstart" || (k && k.removeAttribute("title"), X.clear(), $.clear(), b || so && d ? X.start(so ? d : b, () => {
      lt(le);
    }) : lt(le));
  }, ke = (le) => {
    X.clear(), $.start(E, () => {
      Ne(le);
    });
  }, [, _e] = R.useState(!1), He = (le) => {
    Oo(le.target) || (_e(!1), ke(le));
  }, re = (le) => {
    k || F(le.currentTarget), Oo(le.target) && (_e(!0), Pe(le));
  }, xt = (le) => {
    Y.current = !0;
    const Nt = V.props;
    Nt.onTouchStart && Nt.onTouchStart(le);
  }, tt = (le) => {
    xt(le), $.clear(), J.clear(), Ve(), Ie.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", U.start(v, () => {
      document.body.style.WebkitUserSelect = Ie.current, Pe(le);
    });
  }, nt = (le) => {
    V.props.onTouchEnd && V.props.onTouchEnd(le), Ve(), $.start(w, () => {
      Ne(le);
    });
  };
  R.useEffect(() => {
    if (!j)
      return;
    function le(Nt) {
      Nt.key === "Escape" && Ne(Nt);
    }
    return document.addEventListener("keydown", le), () => {
      document.removeEventListener("keydown", le);
    };
  }, [Ne, j]);
  const Lt = It(Dr(V), F, n);
  !D && D !== 0 && (j = !1);
  const Tt = R.useRef(), jt = (le) => {
    const Nt = V.props;
    Nt.onMouseMove && Nt.onMouseMove(le), lr = {
      x: le.clientX,
      y: le.clientY
    }, Tt.current && Tt.current.update();
  }, $t = {}, Le = typeof D == "string";
  u ? ($t.title = !j && Le && !p ? D : null, $t["aria-describedby"] = j ? de : null) : ($t["aria-label"] = Le ? D : null, $t["aria-labelledby"] = j && !Le ? de : null);
  const fe = {
    ...$t,
    ...L,
    ...V.props,
    className: Se(L.className, V.props.className),
    onTouchStart: xt,
    ref: Lt,
    ...y ? {
      onMouseMove: jt
    } : {}
  };
  process.env.NODE_ENV !== "production" && (fe["data-mui-internal-clone-element"] = !0, R.useEffect(() => {
    k && !k.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [k]));
  const rt = {};
  g || (fe.onTouchStart = tt, fe.onTouchEnd = nt), p || (fe.onMouseOver = ao(Pe, fe.onMouseOver), fe.onMouseLeave = ao(ke, fe.onMouseLeave), Z || (rt.onMouseOver = Pe, rt.onMouseLeave = ke)), f || (fe.onFocus = ao(re, fe.onFocus), fe.onBlur = ao(He, fe.onBlur), Z || (rt.onFocus = re, rt.onBlur = He)), process.env.NODE_ENV !== "production" && V.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${V.props.title}\` or the Tooltip component.`].join(`
`));
  const Ke = {
    ...r,
    isRtl: ee,
    arrow: o,
    disableInteractive: Z,
    placement: I,
    PopperComponentProp: P,
    touch: Y.current
  }, Be = typeof O.popper == "function" ? O.popper(Ke) : O.popper, bi = R.useMemo(() => {
    var Nt, Ea;
    let le = [{
      name: "arrow",
      enabled: !!W,
      options: {
        element: W,
        padding: 4
      }
    }];
    return (Nt = h.popperOptions) != null && Nt.modifiers && (le = le.concat(h.popperOptions.modifiers)), (Ea = Be == null ? void 0 : Be.popperOptions) != null && Ea.modifiers && (le = le.concat(Be.popperOptions.modifiers)), {
      ...h.popperOptions,
      ...Be == null ? void 0 : Be.popperOptions,
      modifiers: le
    };
  }, [W, h.popperOptions, Be == null ? void 0 : Be.popperOptions]), Si = j0(Ke), Hf = typeof O.transition == "function" ? O.transition(Ke) : O.transition, Yr = {
    slots: {
      popper: a.Popper,
      transition: a.Transition ?? M,
      tooltip: a.Tooltip,
      arrow: a.Arrow,
      ...A
    },
    slotProps: {
      arrow: O.arrow ?? c.arrow,
      popper: {
        ...h,
        ...Be ?? c.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: O.tooltip ?? c.tooltip,
      transition: {
        ..._,
        ...Hf ?? c.transition
      }
    }
  }, [Uf, qf] = ht("popper", {
    elementType: F0,
    externalForwardedProps: Yr,
    ownerState: Ke,
    className: Se(Si.popper, h == null ? void 0 : h.className)
  }), [Gf, Yf] = ht("transition", {
    elementType: Fo,
    externalForwardedProps: Yr,
    ownerState: Ke
  }), [Kf, Xf] = ht("tooltip", {
    elementType: z0,
    className: Si.tooltip,
    externalForwardedProps: Yr,
    ownerState: Ke
  }), [Jf, Qf] = ht("arrow", {
    elementType: V0,
    className: Si.arrow,
    externalForwardedProps: Yr,
    ownerState: Ke,
    ref: q
  });
  return /* @__PURE__ */ Ye(R.Fragment, {
    children: [/* @__PURE__ */ R.cloneElement(V, fe), /* @__PURE__ */ B(Uf, {
      as: P ?? ba,
      placement: I,
      anchorEl: y ? {
        getBoundingClientRect: () => ({
          top: lr.y,
          left: lr.x,
          right: lr.x,
          bottom: lr.y,
          width: 0,
          height: 0
        })
      } : k,
      popperRef: Tt,
      open: k ? j : !1,
      id: de,
      transition: !0,
      ...rt,
      ...qf,
      popperOptions: bi,
      children: ({
        TransitionProps: le
      }) => /* @__PURE__ */ B(Gf, {
        timeout: te.transitions.duration.shorter,
        ...le,
        ...Yf,
        children: /* @__PURE__ */ Ye(Kf, {
          ...Xf,
          children: [D, o ? /* @__PURE__ */ B(Jf, {
            ...Qf
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (_f.propTypes = {
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
  children: Xn.isRequired,
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
function W0(e) {
  return ot("MuiTypography", e);
}
it("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const H0 = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, U0 = Um(), q0 = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: o,
    variant: i,
    classes: s
  } = e, a = {
    root: ["root", i, e.align !== "inherit" && `align${be(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
  };
  return St(a, W0, s);
}, G0 = Re("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${be(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(Bt(({
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
    })), ...Object.entries(e.palette).filter(Ys()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${be(n)}`
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
})), pc = {
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
}, Sa = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const {
    color: r,
    ...o
  } = st({
    props: t,
    name: "MuiTypography"
  }), i = !H0[r], s = U0({
    ...o,
    ...i && {
      color: r
    }
  }), {
    align: a = "inherit",
    className: c,
    component: u,
    gutterBottom: f = !1,
    noWrap: p = !1,
    paragraph: m = !1,
    variant: g = "body1",
    variantMapping: b = pc,
    ...d
  } = s, v = {
    ...s,
    align: a,
    color: r,
    className: c,
    component: u,
    gutterBottom: f,
    noWrap: p,
    paragraph: m,
    variant: g,
    variantMapping: b
  }, y = u || (m ? "p" : b[g] || pc[g]) || "span", x = q0(v);
  return /* @__PURE__ */ B(G0, {
    as: y,
    ref: n,
    className: Se(x.root, c),
    ...d,
    ownerState: v,
    style: {
      ...a !== "inherit" && {
        "--Typography-textAlign": a
      },
      ...d.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Sa.propTypes = {
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
const Wo = rn(
  ({ text: e, isLabel: t, isTitle: n = !1, titleLevel: r = "h5", ellipsis: o = !1, sx: i, ...s }) => {
    const a = Fn(
      () => /* @__PURE__ */ B(
        Sa,
        {
          component: "div",
          variant: n ? r : t ? "caption" : "body1",
          noWrap: o,
          sx: {
            fontWeight: n ? "bold" : "normal",
            ...i
          },
          ...s,
          children: e
        }
      ),
      [e, n, r, o, i, s]
    );
    return o ? /* @__PURE__ */ B(_f, { arrow: !0, title: e, children: a }) : a;
  }
);
Wo.displayName = "Text";
const Y0 = rn(
  ({ icon: e = "", label: t, clickable: n, disabled: r, onClick: o, isActive: i }) => /* @__PURE__ */ Ye(yc, { children: [
    n && /* @__PURE__ */ B(
      Ao,
      {
        isGhost: !0,
        text: t,
        icon: e,
        iconWidth: 28,
        iconPosition: "start",
        sx: { py: 1, px: 2, my: 1 },
        onClick: o,
        disabled: r,
        color: i ? "primary" : "inherit"
      }
    ),
    !n && /* @__PURE__ */ Ye(gi, { row: !0, py: 1, px: 2, my: 1, children: [
      /* @__PURE__ */ B(ea, { icon: e, width: 28 }),
      /* @__PURE__ */ B(Wo, { text: t, ellipsis: !0, flex: 1 })
    ] })
  ] })
);
Y0.displayName = "MenuItem";
function K0(e) {
  const t = en(e);
  return t.body === e ? Co(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function br(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function hc(e) {
  return parseInt(Co(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function X0(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function mc(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = !i.includes(s), c = !X0(s);
    a && c && br(s, o);
  });
}
function Wi(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function J0(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (K0(r)) {
      const s = $d(Co(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${hc(r) + s}px`;
      const a = en(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${hc(c) + s}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = en(r).body;
    else {
      const s = r.parentElement, a = Co(r);
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
function Q0(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Z0 {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && br(t.modalRef, !1);
    const o = Q0(n);
    mc(n, t.mount, t.modalRef, o, !0);
    const i = Wi(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = Wi(this.containers, (i) => i.modals.includes(t)), o = this.containers[r];
    o.restore || (o.restore = J0(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = Wi(this.containers, (s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && br(t.modalRef, n), mc(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && br(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const eS = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function tS(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function nS(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function rS(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || nS(e));
}
function oS(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(eS)).forEach((r, o) => {
    const i = tS(r);
    i === -1 || !rS(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function iS() {
  return !0;
}
function Ho(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = oS,
    isEnabled: s = iS,
    open: a
  } = e, c = R.useRef(!1), u = R.useRef(null), f = R.useRef(null), p = R.useRef(null), m = R.useRef(null), g = R.useRef(!1), b = R.useRef(null), d = It(Dr(t), b), v = R.useRef(null);
  R.useEffect(() => {
    !a || !b.current || (g.current = !n);
  }, [n, a]), R.useEffect(() => {
    if (!a || !b.current)
      return;
    const E = en(b.current);
    return b.current.contains(E.activeElement) || (b.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), b.current.setAttribute("tabIndex", "-1")), g.current && b.current.focus()), () => {
      o || (p.current && p.current.focus && (c.current = !0, p.current.focus()), p.current = null);
    };
  }, [a]), R.useEffect(() => {
    if (!a || !b.current)
      return;
    const E = en(b.current), w = (C) => {
      v.current = C, !(r || !s() || C.key !== "Tab") && E.activeElement === b.current && C.shiftKey && (c.current = !0, f.current && f.current.focus());
    }, S = () => {
      var P, h;
      const C = b.current;
      if (C === null)
        return;
      if (!E.hasFocus() || !s() || c.current) {
        c.current = !1;
        return;
      }
      if (C.contains(E.activeElement) || r && E.activeElement !== u.current && E.activeElement !== f.current)
        return;
      if (E.activeElement !== m.current)
        m.current = null;
      else if (m.current !== null)
        return;
      if (!g.current)
        return;
      let I = [];
      if ((E.activeElement === u.current || E.activeElement === f.current) && (I = i(b.current)), I.length > 0) {
        const O = !!((P = v.current) != null && P.shiftKey && ((h = v.current) == null ? void 0 : h.key) === "Tab"), A = I[0], D = I[I.length - 1];
        typeof A != "string" && typeof D != "string" && (O ? D.focus() : A.focus());
      } else
        C.focus();
    };
    E.addEventListener("focusin", S), E.addEventListener("keydown", w, !0);
    const T = setInterval(() => {
      E.activeElement && E.activeElement.tagName === "BODY" && S();
    }, 50);
    return () => {
      clearInterval(T), E.removeEventListener("focusin", S), E.removeEventListener("keydown", w, !0);
    };
  }, [n, r, o, s, a, i]);
  const y = (E) => {
    p.current === null && (p.current = E.relatedTarget), g.current = !0, m.current = E.target;
    const w = t.props.onFocus;
    w && w(E);
  }, x = (E) => {
    p.current === null && (p.current = E.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ Ye(R.Fragment, {
    children: [/* @__PURE__ */ B("div", {
      tabIndex: a ? 0 : -1,
      onFocus: x,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ R.cloneElement(t, {
      ref: d,
      onFocus: y
    }), /* @__PURE__ */ B("div", {
      tabIndex: a ? 0 : -1,
      onFocus: x,
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Ho.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Xn,
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
process.env.NODE_ENV !== "production" && (Ho.propTypes = Ko(Ho.propTypes));
const sS = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Uo = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = Qn(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: a,
    easing: c,
    in: u,
    onEnter: f,
    onEntered: p,
    onEntering: m,
    onExit: g,
    onExited: b,
    onExiting: d,
    style: v,
    timeout: y = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = Xt,
    ...E
  } = t, w = R.useRef(null), S = It(w, Dr(a), n), T = (M) => (_) => {
    if (M) {
      const L = w.current;
      _ === void 0 ? M(L) : M(L, _);
    }
  }, C = T(m), I = T((M, _) => {
    Cf(M);
    const L = jo({
      style: v,
      timeout: y,
      easing: c
    }, {
      mode: "enter"
    });
    M.style.webkitTransition = r.transitions.create("opacity", L), M.style.transition = r.transitions.create("opacity", L), f && f(M, _);
  }), P = T(p), h = T(d), O = T((M) => {
    const _ = jo({
      style: v,
      timeout: y,
      easing: c
    }, {
      mode: "exit"
    });
    M.style.webkitTransition = r.transitions.create("opacity", _), M.style.transition = r.transitions.create("opacity", _), g && g(M);
  }), A = T(b);
  return /* @__PURE__ */ B(x, {
    appear: s,
    in: u,
    nodeRef: w,
    onEnter: I,
    onEntered: P,
    onEntering: C,
    onExit: O,
    onExited: A,
    onExiting: h,
    addEndListener: (M) => {
      i && i(w.current, M);
    },
    timeout: y,
    ...E,
    children: (M, {
      ownerState: _,
      ...L
    }) => /* @__PURE__ */ R.cloneElement(a, {
      style: {
        opacity: 0,
        visibility: M === "exited" && !u ? "hidden" : void 0,
        ...sS[M],
        ...v,
        ...a.props.style
      },
      ref: S,
      ...L
    })
  });
});
process.env.NODE_ENV !== "production" && (Uo.propTypes = {
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
  children: Xn.isRequired,
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
function aS(e) {
  return ot("MuiBackdrop", e);
}
it("MuiBackdrop", ["root", "invisible"]);
const lS = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return St({
    root: ["root", n && "invisible"]
  }, aS, t);
}, cS = Re("div", {
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
}), xa = /* @__PURE__ */ R.forwardRef(function(t, n) {
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
    slotProps: p = {},
    slots: m = {},
    TransitionComponent: g,
    transitionDuration: b,
    ...d
  } = r, v = {
    ...r,
    component: s,
    invisible: a
  }, y = lS(v), x = {
    transition: g,
    root: u.Root,
    ...m
  }, E = {
    ...f,
    ...p
  }, w = {
    slots: x,
    slotProps: E
  }, [S, T] = ht("root", {
    elementType: cS,
    externalForwardedProps: w,
    className: Se(y.root, i),
    ownerState: v
  }), [C, I] = ht("transition", {
    elementType: Uo,
    externalForwardedProps: w,
    ownerState: v
  });
  return /* @__PURE__ */ B(C, {
    in: c,
    timeout: b,
    ...d,
    ...I,
    children: /* @__PURE__ */ B(S, {
      "aria-hidden": !0,
      ...T,
      classes: y,
      ref: n,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (xa.propTypes = {
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
function uS(e) {
  return typeof e == "function" ? e() : e;
}
function fS(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const gc = () => {
}, lo = new Z0();
function dS(e) {
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
  } = e, p = R.useRef({}), m = R.useRef(null), g = R.useRef(null), b = It(g, f), [d, v] = R.useState(!u), y = fS(a);
  let x = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (x = !1);
  const E = () => en(m.current), w = () => (p.current.modalRef = g.current, p.current.mount = m.current, p.current), S = () => {
    lo.mount(w(), {
      disableScrollLock: r
    }), g.current && (g.current.scrollTop = 0);
  }, T = an(() => {
    const _ = uS(t) || E().body;
    lo.add(w(), _), g.current && S();
  }), C = () => lo.isTopModal(w()), I = an((_) => {
    m.current = _, _ && (u && C() ? S() : g.current && br(g.current, x));
  }), P = R.useCallback(() => {
    lo.remove(w(), x);
  }, [x]);
  R.useEffect(() => () => {
    P();
  }, [P]), R.useEffect(() => {
    u ? T() : (!y || !o) && P();
  }, [u, P, y, o, T]);
  const h = (_) => (L) => {
    var V;
    (V = _.onKeyDown) == null || V.call(_, L), !(L.key !== "Escape" || L.which === 229 || // Wait until IME is settled.
    !C()) && (n || (L.stopPropagation(), c && c(L, "escapeKeyDown")));
  }, O = (_) => (L) => {
    var V;
    (V = _.onClick) == null || V.call(_, L), L.target === L.currentTarget && c && c(L, "backdropClick");
  };
  return {
    getRootProps: (_ = {}) => {
      const L = Pc(e);
      delete L.onTransitionEnter, delete L.onTransitionExited;
      const V = {
        ...L,
        ..._
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...V,
        onKeyDown: h(V),
        ref: b
      };
    },
    getBackdropProps: (_ = {}) => {
      const L = _;
      return {
        "aria-hidden": !0,
        ...L,
        onClick: O(L),
        open: u
      };
    },
    getTransitionProps: () => {
      const _ = () => {
        v(!1), i && i();
      }, L = () => {
        v(!0), s && s(), o && P();
      };
      return {
        onEnter: za(_, (a == null ? void 0 : a.props.onEnter) ?? gc),
        onExited: za(L, (a == null ? void 0 : a.props.onExited) ?? gc)
      };
    },
    rootRef: b,
    portalRef: I,
    isTopModal: C,
    exited: d,
    hasTransition: y
  };
}
function pS(e) {
  return ot("MuiModal", e);
}
it("MuiModal", ["root", "hidden", "backdrop"]);
const hS = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return St({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, pS, r);
}, mS = Re("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(Bt(({
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
}))), gS = Re(xa, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Bf = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = st({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = gS,
    BackdropProps: i,
    classes: s,
    className: a,
    closeAfterTransition: c = !1,
    children: u,
    container: f,
    component: p,
    components: m = {},
    componentsProps: g = {},
    disableAutoFocus: b = !1,
    disableEnforceFocus: d = !1,
    disableEscapeKeyDown: v = !1,
    disablePortal: y = !1,
    disableRestoreFocus: x = !1,
    disableScrollLock: E = !1,
    hideBackdrop: w = !1,
    keepMounted: S = !1,
    onClose: T,
    onTransitionEnter: C,
    onTransitionExited: I,
    open: P,
    slotProps: h = {},
    slots: O = {},
    // eslint-disable-next-line react/prop-types
    theme: A,
    ...D
  } = r, M = {
    ...r,
    closeAfterTransition: c,
    disableAutoFocus: b,
    disableEnforceFocus: d,
    disableEscapeKeyDown: v,
    disablePortal: y,
    disableRestoreFocus: x,
    disableScrollLock: E,
    hideBackdrop: w,
    keepMounted: S
  }, {
    getRootProps: _,
    getBackdropProps: L,
    getTransitionProps: V,
    portalRef: te,
    isTopModal: ee,
    exited: k,
    hasTransition: F
  } = dS({
    ...M,
    rootRef: n
  }), W = {
    ...M,
    exited: k
  }, q = hS(W), Y = {};
  if (u.props.tabIndex === void 0 && (Y.tabIndex = "-1"), F) {
    const {
      onEnter: G,
      onExited: oe
    } = V();
    Y.onEnter = G, Y.onExited = oe;
  }
  const Z = {
    slots: {
      root: m.Root,
      backdrop: m.Backdrop,
      ...O
    },
    slotProps: {
      ...g,
      ...h
    }
  }, [J, X] = ht("root", {
    ref: n,
    elementType: mS,
    externalForwardedProps: {
      ...Z,
      ...D,
      component: p
    },
    getSlotProps: _,
    ownerState: W,
    className: Se(a, q == null ? void 0 : q.root, !W.open && W.exited && (q == null ? void 0 : q.hidden))
  }), [$, U] = ht("backdrop", {
    ref: i == null ? void 0 : i.ref,
    elementType: o,
    externalForwardedProps: Z,
    shouldForwardComponentProp: !0,
    additionalProps: i,
    getSlotProps: (G) => L({
      ...G,
      onClick: (oe) => {
        G != null && G.onClick && G.onClick(oe);
      }
    }),
    className: Se(i == null ? void 0 : i.className, q == null ? void 0 : q.backdrop),
    ownerState: W
  });
  return !S && !P && (!F || k) ? null : /* @__PURE__ */ B(Ar, {
    ref: te,
    container: f,
    disablePortal: y,
    children: /* @__PURE__ */ Ye(J, {
      ...X,
      children: [!w && o ? /* @__PURE__ */ B($, {
        ...U
      }) : null, /* @__PURE__ */ B(Ho, {
        disableEnforceFocus: d,
        disableAutoFocus: b,
        disableRestoreFocus: x,
        isEnabled: ee,
        open: P,
        children: /* @__PURE__ */ R.cloneElement(u, Y)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Bf.propTypes = {
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
  children: Xn.isRequired,
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
  container: l.oneOfType([zn, l.func]),
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
function yS(e) {
  return ot("MuiPaper", e);
}
it("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const vS = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return St(i, yS, o);
}, bS = Re("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(Bt(({
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
}))), Ta = /* @__PURE__ */ R.forwardRef(function(t, n) {
  var g;
  const r = st({
    props: t,
    name: "MuiPaper"
  }), o = Qn(), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: c = !1,
    variant: u = "elevation",
    ...f
  } = r, p = {
    ...r,
    component: s,
    elevation: a,
    square: c,
    variant: u
  }, m = vS(p);
  return process.env.NODE_ENV !== "production" && o.shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ B(bS, {
    as: s,
    ownerState: p,
    className: Se(m.root, i),
    ref: n,
    ...f,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[a],
        ...o.vars && {
          "--Paper-overlay": (g = o.vars.overlays) == null ? void 0 : g[a]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${At("#fff", Zi(a))}, ${At("#fff", Zi(a))})`
        }
      },
      ...f.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Ta.propTypes = {
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
  elevation: Kn(Ad, (e) => {
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
function SS(e) {
  return ot("MuiDialog", e);
}
const Hi = it("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), wa = /* @__PURE__ */ R.createContext({});
process.env.NODE_ENV !== "production" && (wa.displayName = "DialogContext");
const xS = Re(xa, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), TS = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: o,
    fullScreen: i
  } = e, s = {
    root: ["root"],
    container: ["container", `scroll${be(n)}`],
    paper: ["paper", `paperScroll${be(n)}`, `paperWidth${be(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
  };
  return St(s, SS, t);
}, wS = Re(Bf, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), ES = Re("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${be(n.scroll)}`]];
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
}), CS = Re(Ta, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`scrollPaper${be(n.scroll)}`], t[`paperWidth${be(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(Bt(({
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
      [`&.${Hi.paperScrollBody}`]: {
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
      [`&.${Hi.paperScrollBody}`]: {
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
      [`&.${Hi.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), Lf = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = st({
    props: t,
    name: "MuiDialog"
  }), o = Qn(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": a,
    "aria-modal": c = !0,
    BackdropComponent: u,
    BackdropProps: f,
    children: p,
    className: m,
    disableEscapeKeyDown: g = !1,
    fullScreen: b = !1,
    fullWidth: d = !1,
    maxWidth: v = "sm",
    onClick: y,
    onClose: x,
    open: E,
    PaperComponent: w = Ta,
    PaperProps: S = {},
    scroll: T = "paper",
    slots: C = {},
    slotProps: I = {},
    TransitionComponent: P = Uo,
    transitionDuration: h = i,
    TransitionProps: O,
    ...A
  } = r, D = {
    ...r,
    disableEscapeKeyDown: g,
    fullScreen: b,
    fullWidth: d,
    maxWidth: v,
    scroll: T
  }, M = TS(D), _ = R.useRef(), L = (de) => {
    _.current = de.target === de.currentTarget;
  }, V = (de) => {
    y && y(de), _.current && (_.current = null, x && x(de, "backdropClick"));
  }, te = Cs(a), ee = R.useMemo(() => ({
    titleId: te
  }), [te]), k = {
    transition: P,
    ...C
  }, F = {
    transition: O,
    paper: S,
    backdrop: f,
    ...I
  }, W = {
    slots: k,
    slotProps: F
  }, [q, Y] = ht("root", {
    elementType: wS,
    shouldForwardComponentProp: !0,
    externalForwardedProps: W,
    ownerState: D,
    className: Se(M.root, m),
    ref: n
  }), [Z, J] = ht("backdrop", {
    elementType: xS,
    shouldForwardComponentProp: !0,
    externalForwardedProps: W,
    ownerState: D
  }), [X, $] = ht("paper", {
    elementType: CS,
    shouldForwardComponentProp: !0,
    externalForwardedProps: W,
    ownerState: D,
    className: Se(M.paper, S.className)
  }), [U, G] = ht("container", {
    elementType: ES,
    externalForwardedProps: W,
    ownerState: D,
    className: Se(M.container)
  }), [oe, j] = ht("transition", {
    elementType: Uo,
    externalForwardedProps: W,
    ownerState: D,
    additionalProps: {
      appear: !0,
      in: E,
      timeout: h,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ B(q, {
    closeAfterTransition: !0,
    slots: {
      backdrop: Z
    },
    slotProps: {
      backdrop: {
        transitionDuration: h,
        as: u,
        ...J
      }
    },
    disableEscapeKeyDown: g,
    onClose: x,
    open: E,
    onClick: V,
    ...Y,
    ...A,
    children: /* @__PURE__ */ B(oe, {
      ...j,
      children: /* @__PURE__ */ B(U, {
        onMouseDown: L,
        ...G,
        children: /* @__PURE__ */ B(X, {
          as: w,
          elevation: 24,
          role: "dialog",
          "aria-describedby": s,
          "aria-labelledby": te,
          "aria-modal": c,
          ...$,
          children: /* @__PURE__ */ B(wa.Provider, {
            value: ee,
            children: p
          })
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Lf.propTypes = {
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
function OS(e) {
  return ot("MuiDialogActions", e);
}
it("MuiDialogActions", ["root", "spacing"]);
const RS = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return St({
    root: ["root", !n && "spacing"]
  }, OS, t);
}, IS = Re("div", {
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
}), jf = /* @__PURE__ */ R.forwardRef(function(t, n) {
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
  }, c = RS(a);
  return /* @__PURE__ */ B(IS, {
    className: Se(c.root, o),
    ownerState: a,
    ref: n,
    ...s
  });
});
process.env.NODE_ENV !== "production" && (jf.propTypes = {
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
function PS(e) {
  return ot("MuiDialogContent", e);
}
it("MuiDialogContent", ["root", "dividers"]);
function kS(e) {
  return ot("MuiDialogTitle", e);
}
const MS = it("MuiDialogTitle", ["root"]), $S = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return St({
    root: ["root", n && "dividers"]
  }, PS, t);
}, NS = Re("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(Bt(({
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
      [`.${MS.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), Ff = /* @__PURE__ */ R.forwardRef(function(t, n) {
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
  }, c = $S(a);
  return /* @__PURE__ */ B(NS, {
    className: Se(c.root, o),
    ownerState: a,
    ref: n,
    ...s
  });
});
process.env.NODE_ENV !== "production" && (Ff.propTypes = {
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
const AS = (e) => {
  const {
    classes: t
  } = e;
  return St({
    root: ["root"]
  }, kS, t);
}, DS = Re(Sa, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), zf = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = st({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, a = r, c = AS(a), {
    titleId: u = i
  } = R.useContext(wa);
  return /* @__PURE__ */ B(DS, {
    component: "h2",
    className: Se(c.root, o),
    ownerState: a,
    ref: n,
    variant: "h6",
    id: i ?? u,
    ...s
  });
});
process.env.NODE_ENV !== "production" && (zf.propTypes = {
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
const _S = rn(
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
    confirmButtonIsDisabled: p = !1,
    cancelButtonIsDisabled: m = !1,
    sx: g,
    ...b
  }) => {
    const d = rd(e);
    wo(() => {
      d.current && !e && (o == null || o()), d.current = e;
    }, [e, o]);
    const v = Fn(
      () => /* @__PURE__ */ Ye(yc, { children: [
        /* @__PURE__ */ B(zf, { children: /* @__PURE__ */ B(Wo, { isTitle: !0, text: a }) }),
        /* @__PURE__ */ B(Ff, { children: /* @__PURE__ */ B(Wo, { text: c }) }),
        /* @__PURE__ */ Ye(jf, { children: [
          /* @__PURE__ */ B(
            Ao,
            {
              text: u,
              onClick: t,
              disabled: m || i,
              isGhost: !0
            }
          ),
          /* @__PURE__ */ B(
            Ao,
            {
              text: f,
              onClick: () => {
                (async () => (await (r == null ? void 0 : r()), t()))();
              },
              disabled: p,
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
        p,
        f,
        c,
        r,
        i,
        a
      ]
    );
    return /* @__PURE__ */ Ye(
      Lf,
      {
        open: e,
        onClose: n ? void 0 : t,
        scroll: "paper",
        keepMounted: !0,
        sx: { ...g },
        ...b,
        children: [
          !s && v,
          s
        ]
      }
    );
  }
);
_S.displayName = "Modal";
function KS() {
  const [e, t] = fo(!1), n = Ca(() => t(!0), []), r = Ca(() => t(!1), []);
  return {
    isOpen: e,
    openModal: n,
    closeModal: r
  };
}
const bs = typeof mu({}) == "function", BS = (e, t) => ({
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
}), LS = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), Vf = (e, t = !1) => {
  var i, s;
  const n = {};
  t && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([a, c]) => {
    var f, p;
    const u = e.getColorSchemeSelector(a);
    u.startsWith("@") ? n[u] = {
      ":root": {
        colorScheme: (f = c.palette) == null ? void 0 : f.mode
      }
    } : n[u.replace(/\s*&/, "")] = {
      colorScheme: (p = c.palette) == null ? void 0 : p.mode
    };
  });
  let r = {
    html: BS(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...LS(e),
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
}, To = "mui-ecs", jS = (e) => {
  const t = Vf(e, !1), n = Array.isArray(t) ? t[0] : t;
  return !e.vars && n && (n.html[`:root:has(${To})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([r, o]) => {
    var s, a;
    const i = e.getColorSchemeSelector(r);
    i.startsWith("@") ? n[i] = {
      [`:root:not(:has(.${To}))`]: {
        colorScheme: (s = o.palette) == null ? void 0 : s.mode
      }
    } : n[i.replace(/\s*&/, "")] = {
      [`&:not(:has(.${To}))`]: {
        colorScheme: (a = o.palette) == null ? void 0 : a.mode
      }
    };
  }), t;
}, FS = mu(bs ? ({
  theme: e,
  enableColorScheme: t
}) => Vf(e, t) : ({
  theme: e
}) => jS(e));
function Wf(e) {
  const t = st({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: n,
    enableColorScheme: r = !1
  } = t;
  return /* @__PURE__ */ Ye(R.Fragment, {
    children: [bs && /* @__PURE__ */ B(FS, {
      enableColorScheme: r
    }), !bs && !r && /* @__PURE__ */ B("span", {
      className: To,
      style: {
        display: "none"
      }
    }), n]
  });
}
process.env.NODE_ENV !== "production" && (Wf.propTypes = {
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
function zS() {
  const { themeMode: e } = mb(), { themePalette: t } = yb(), n = Fn(() => ci({
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
  return VS(t), { theme: n };
}
function VS(e) {
  wo(() => {
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
const WS = rn(({ children: e }) => {
  const { theme: t } = zS();
  return /* @__PURE__ */ Ye(My, { theme: t, disableTransitionOnChange: !0, children: [
    /* @__PURE__ */ B(Wf, {}),
    e
  ] });
});
WS.displayName = "ThemeProvider";
export {
  Ao as Button,
  YS as Grid,
  ea as Icon,
  xb as Menu,
  Y0 as MenuItem,
  _S as Modal,
  gi as Space,
  Wo as Text,
  wf as ThemePaletteName,
  WS as ThemeProvider,
  KS as useModal,
  vb as useThemeBreakpoint,
  mb as useThemeMode,
  yb as useThemePalette
};
