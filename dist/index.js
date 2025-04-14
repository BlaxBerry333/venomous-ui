var gf = Object.defineProperty;
var yf = (e, t, n) => t in e ? gf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var vr = (e, t, n) => yf(e, typeof t != "symbol" ? t + "" : t, n);
import { jsx as B, jsxs as Je, Fragment as Wc } from "react/jsx-runtime";
import * as R from "react";
import k, { forwardRef as qs, useContext as vf, isValidElement as $o, cloneElement as Ao, Children as bf, useState as Pr, useEffect as Uo, createElement as An, memo as Nt, useMemo as _n, useRef as xf, useCallback as Br } from "react";
import * as Sf from "react-dom";
import Qn from "react-dom";
function wf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vo = { exports: {} }, bo = { exports: {} }, xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xa;
function Tf() {
  if (Xa) return xe;
  Xa = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
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
  function T(x) {
    return E(x) === u;
  }
  return xe.AsyncMode = c, xe.ConcurrentMode = u, xe.ContextConsumer = a, xe.ContextProvider = s, xe.Element = t, xe.ForwardRef = f, xe.Fragment = r, xe.Lazy = v, xe.Memo = g, xe.Portal = n, xe.Profiler = i, xe.StrictMode = o, xe.Suspense = d, xe.isAsyncMode = function(x) {
    return T(x) || E(x) === c;
  }, xe.isConcurrentMode = T, xe.isContextConsumer = function(x) {
    return E(x) === a;
  }, xe.isContextProvider = function(x) {
    return E(x) === s;
  }, xe.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, xe.isForwardRef = function(x) {
    return E(x) === f;
  }, xe.isFragment = function(x) {
    return E(x) === r;
  }, xe.isLazy = function(x) {
    return E(x) === v;
  }, xe.isMemo = function(x) {
    return E(x) === g;
  }, xe.isPortal = function(x) {
    return E(x) === n;
  }, xe.isProfiler = function(x) {
    return E(x) === i;
  }, xe.isStrictMode = function(x) {
    return E(x) === o;
  }, xe.isSuspense = function(x) {
    return E(x) === d;
  }, xe.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === u || x === i || x === o || x === d || x === h || typeof x == "object" && x !== null && (x.$$typeof === v || x.$$typeof === g || x.$$typeof === s || x.$$typeof === a || x.$$typeof === f || x.$$typeof === y || x.$$typeof === b || x.$$typeof === S || x.$$typeof === p);
  }, xe.typeOf = E, xe;
}
var Se = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ja;
function Ef() {
  return Ja || (Ja = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function E(z) {
      return typeof z == "string" || typeof z == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      z === r || z === u || z === i || z === o || z === d || z === h || typeof z == "object" && z !== null && (z.$$typeof === v || z.$$typeof === g || z.$$typeof === s || z.$$typeof === a || z.$$typeof === f || z.$$typeof === y || z.$$typeof === b || z.$$typeof === S || z.$$typeof === p);
    }
    function T(z) {
      if (typeof z == "object" && z !== null) {
        var fe = z.$$typeof;
        switch (fe) {
          case t:
            var Te = z.type;
            switch (Te) {
              case c:
              case u:
              case r:
              case i:
              case o:
              case d:
                return Te;
              default:
                var Fe = Te && Te.$$typeof;
                switch (Fe) {
                  case a:
                  case f:
                  case v:
                  case g:
                  case s:
                    return Fe;
                  default:
                    return fe;
                }
            }
          case n:
            return fe;
        }
      }
    }
    var x = c, w = u, C = a, I = s, P = t, m = f, O = r, _ = v, L = g, A = n, D = i, M = o, W = d, te = !1;
    function Q(z) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), N(z) || T(z) === c;
    }
    function N(z) {
      return T(z) === u;
    }
    function j(z) {
      return T(z) === a;
    }
    function H(z) {
      return T(z) === s;
    }
    function V(z) {
      return typeof z == "object" && z !== null && z.$$typeof === t;
    }
    function K(z) {
      return T(z) === f;
    }
    function Z(z) {
      return T(z) === r;
    }
    function Y(z) {
      return T(z) === v;
    }
    function J(z) {
      return T(z) === g;
    }
    function $(z) {
      return T(z) === n;
    }
    function q(z) {
      return T(z) === i;
    }
    function X(z) {
      return T(z) === o;
    }
    function ie(z) {
      return T(z) === d;
    }
    Se.AsyncMode = x, Se.ConcurrentMode = w, Se.ContextConsumer = C, Se.ContextProvider = I, Se.Element = P, Se.ForwardRef = m, Se.Fragment = O, Se.Lazy = _, Se.Memo = L, Se.Portal = A, Se.Profiler = D, Se.StrictMode = M, Se.Suspense = W, Se.isAsyncMode = Q, Se.isConcurrentMode = N, Se.isContextConsumer = j, Se.isContextProvider = H, Se.isElement = V, Se.isForwardRef = K, Se.isFragment = Z, Se.isLazy = Y, Se.isMemo = J, Se.isPortal = $, Se.isProfiler = q, Se.isStrictMode = X, Se.isSuspense = ie, Se.isValidElementType = E, Se.typeOf = T;
  }()), Se;
}
var Qa;
function Gs() {
  return Qa || (Qa = 1, process.env.NODE_ENV === "production" ? bo.exports = Tf() : bo.exports = Ef()), bo.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Yi, Za;
function Cf() {
  if (Za) return Yi;
  Za = 1;
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
  return Yi = o() ? Object.assign : function(i, s) {
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
  }, Yi;
}
var qi, el;
function Ks() {
  if (el) return qi;
  el = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return qi = e, qi;
}
var Gi, tl;
function Uc() {
  return tl || (tl = 1, Gi = Function.call.bind(Object.prototype.hasOwnProperty)), Gi;
}
var Ki, nl;
function Of() {
  if (nl) return Ki;
  nl = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Ks(), n = {}, r = /* @__PURE__ */ Uc();
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
  }, Ki = o, Ki;
}
var Xi, rl;
function Rf() {
  if (rl) return Xi;
  rl = 1;
  var e = Gs(), t = Cf(), n = /* @__PURE__ */ Ks(), r = /* @__PURE__ */ Uc(), o = /* @__PURE__ */ Of(), i = function() {
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
  return Xi = function(a, c) {
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
      any: S(),
      arrayOf: E,
      element: T(),
      elementType: x(),
      instanceOf: w,
      node: m(),
      objectOf: I,
      oneOf: C,
      oneOfType: P,
      shape: _,
      exact: L
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
        var j = {}, H = 0;
      function V(Z, Y, J, $, q, X, ie) {
        if ($ = $ || h, X = X || J, ie !== n) {
          if (c) {
            var z = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw z.name = "Invariant Violation", z;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = $ + ":" + J;
            !j[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            H < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + X + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), j[fe] = !0, H++);
          }
        }
        return Y[J] == null ? Z ? Y[J] === null ? new p("The " + q + " `" + X + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new p("The " + q + " `" + X + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : N(Y, J, $, q, X);
      }
      var K = V.bind(null, !1);
      return K.isRequired = V.bind(null, !0), K;
    }
    function b(N) {
      function j(H, V, K, Z, Y, J) {
        var $ = H[V], q = M($);
        if (q !== N) {
          var X = W($);
          return new p(
            "Invalid " + Z + " `" + Y + "` of type " + ("`" + X + "` supplied to `" + K + "`, expected ") + ("`" + N + "`."),
            { expectedType: N }
          );
        }
        return null;
      }
      return y(j);
    }
    function S() {
      return y(s);
    }
    function E(N) {
      function j(H, V, K, Z, Y) {
        if (typeof N != "function")
          return new p("Property `" + Y + "` of component `" + K + "` has invalid PropType notation inside arrayOf.");
        var J = H[V];
        if (!Array.isArray(J)) {
          var $ = M(J);
          return new p("Invalid " + Z + " `" + Y + "` of type " + ("`" + $ + "` supplied to `" + K + "`, expected an array."));
        }
        for (var q = 0; q < J.length; q++) {
          var X = N(J, q, K, Z, Y + "[" + q + "]", n);
          if (X instanceof Error)
            return X;
        }
        return null;
      }
      return y(j);
    }
    function T() {
      function N(j, H, V, K, Z) {
        var Y = j[H];
        if (!a(Y)) {
          var J = M(Y);
          return new p("Invalid " + K + " `" + Z + "` of type " + ("`" + J + "` supplied to `" + V + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(N);
    }
    function x() {
      function N(j, H, V, K, Z) {
        var Y = j[H];
        if (!e.isValidElementType(Y)) {
          var J = M(Y);
          return new p("Invalid " + K + " `" + Z + "` of type " + ("`" + J + "` supplied to `" + V + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(N);
    }
    function w(N) {
      function j(H, V, K, Z, Y) {
        if (!(H[V] instanceof N)) {
          var J = N.name || h, $ = Q(H[V]);
          return new p("Invalid " + Z + " `" + Y + "` of type " + ("`" + $ + "` supplied to `" + K + "`, expected ") + ("instance of `" + J + "`."));
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
      function j(H, V, K, Z, Y) {
        for (var J = H[V], $ = 0; $ < N.length; $++)
          if (v(J, N[$]))
            return null;
        var q = JSON.stringify(N, function(ie, z) {
          var fe = W(z);
          return fe === "symbol" ? String(z) : z;
        });
        return new p("Invalid " + Z + " `" + Y + "` of value `" + String(J) + "` " + ("supplied to `" + K + "`, expected one of " + q + "."));
      }
      return y(j);
    }
    function I(N) {
      function j(H, V, K, Z, Y) {
        if (typeof N != "function")
          return new p("Property `" + Y + "` of component `" + K + "` has invalid PropType notation inside objectOf.");
        var J = H[V], $ = M(J);
        if ($ !== "object")
          return new p("Invalid " + Z + " `" + Y + "` of type " + ("`" + $ + "` supplied to `" + K + "`, expected an object."));
        for (var q in J)
          if (r(J, q)) {
            var X = N(J, q, K, Z, Y + "." + q, n);
            if (X instanceof Error)
              return X;
          }
        return null;
      }
      return y(j);
    }
    function P(N) {
      if (!Array.isArray(N))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var j = 0; j < N.length; j++) {
        var H = N[j];
        if (typeof H != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te(H) + " at index " + j + "."
          ), s;
      }
      function V(K, Z, Y, J, $) {
        for (var q = [], X = 0; X < N.length; X++) {
          var ie = N[X], z = ie(K, Z, Y, J, $, n);
          if (z == null)
            return null;
          z.data && r(z.data, "expectedType") && q.push(z.data.expectedType);
        }
        var fe = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new p("Invalid " + J + " `" + $ + "` supplied to " + ("`" + Y + "`" + fe + "."));
      }
      return y(V);
    }
    function m() {
      function N(j, H, V, K, Z) {
        return A(j[H]) ? null : new p("Invalid " + K + " `" + Z + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
      }
      return y(N);
    }
    function O(N, j, H, V, K) {
      return new p(
        (N || "React class") + ": " + j + " type `" + H + "." + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + K + "`."
      );
    }
    function _(N) {
      function j(H, V, K, Z, Y) {
        var J = H[V], $ = M(J);
        if ($ !== "object")
          return new p("Invalid " + Z + " `" + Y + "` of type `" + $ + "` " + ("supplied to `" + K + "`, expected `object`."));
        for (var q in N) {
          var X = N[q];
          if (typeof X != "function")
            return O(K, Z, Y, q, W(X));
          var ie = X(J, q, K, Z, Y + "." + q, n);
          if (ie)
            return ie;
        }
        return null;
      }
      return y(j);
    }
    function L(N) {
      function j(H, V, K, Z, Y) {
        var J = H[V], $ = M(J);
        if ($ !== "object")
          return new p("Invalid " + Z + " `" + Y + "` of type `" + $ + "` " + ("supplied to `" + K + "`, expected `object`."));
        var q = t({}, H[V], N);
        for (var X in q) {
          var ie = N[X];
          if (r(N, X) && typeof ie != "function")
            return O(K, Z, Y, X, W(ie));
          if (!ie)
            return new p(
              "Invalid " + Z + " `" + Y + "` key `" + X + "` supplied to `" + K + "`.\nBad object: " + JSON.stringify(H[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(N), null, "  ")
            );
          var z = ie(J, X, K, Z, Y + "." + X, n);
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
            var H = j.call(N), V;
            if (j !== N.entries) {
              for (; !(V = H.next()).done; )
                if (!A(V.value))
                  return !1;
            } else
              for (; !(V = H.next()).done; ) {
                var K = V.value;
                if (K && !A(K[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function D(N, j) {
      return N === "symbol" ? !0 : j ? j["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && j instanceof Symbol : !1;
    }
    function M(N) {
      var j = typeof N;
      return Array.isArray(N) ? "array" : N instanceof RegExp ? "object" : D(j, N) ? "symbol" : j;
    }
    function W(N) {
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
    function te(N) {
      var j = W(N);
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
    function Q(N) {
      return !N.constructor || !N.constructor.name ? h : N.constructor.name;
    }
    return g.checkPropTypes = o, g.resetWarningCache = o.resetWarningCache, g.PropTypes = g, g;
  }, Xi;
}
var Ji, ol;
function If() {
  if (ol) return Ji;
  ol = 1;
  var e = /* @__PURE__ */ Ks();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ji = function() {
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
  }, Ji;
}
var il;
function Pf() {
  if (il) return vo.exports;
  if (il = 1, process.env.NODE_ENV !== "production") {
    var e = Gs(), t = !0;
    vo.exports = /* @__PURE__ */ Rf()(e.isElement, t);
  } else
    vo.exports = /* @__PURE__ */ If()();
  return vo.exports;
}
var kf = /* @__PURE__ */ Pf();
const l = /* @__PURE__ */ wf(kf);
function Yc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Yc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ce() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Yc(e)) && (r && (r += " "), r += t);
  return r;
}
function Lr(e, t) {
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
              n[o][c] = Lr(i[c], s[c]);
            }
        }
      } else n[o] === void 0 && (n[o] = e[o]);
    }
  return n;
}
function $t(e, t, n = void 0) {
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
function bn(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
function Mf(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Xs(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Mf(e, t, n);
}
function Nf(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function xn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return xn(Nf(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : bn(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : bn(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const $f = (e) => {
  const t = xn(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, Or = (e, t) => {
  try {
    return $f(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function mi(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function qc(e) {
  e = xn(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, f = (u + n / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let a = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", c.push(t[3])), mi({
    type: a,
    values: c
  });
}
function ys(e) {
  e = xn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? xn(qc(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function sl(e, t) {
  const n = ys(e), r = ys(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Yt(e, t) {
  return e = xn(e), t = Xs(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, mi(e);
}
function xo(e, t, n) {
  try {
    return Yt(e, t);
  } catch {
    return e;
  }
}
function hi(e, t) {
  if (e = xn(e), t = Xs(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return mi(e);
}
function ke(e, t, n) {
  try {
    return hi(e, t);
  } catch {
    return e;
  }
}
function gi(e, t) {
  if (e = xn(e), t = Xs(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return mi(e);
}
function Me(e, t, n) {
  try {
    return gi(e, t);
  } catch {
    return e;
  }
}
function Af(e, t = 0.15) {
  return ys(e) > 0.5 ? hi(e, t) : gi(e, t);
}
function So(e, t, n) {
  try {
    return Af(e, t);
  } catch {
    return e;
  }
}
function fr(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
var wo = { exports: {} }, Ie = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var al;
function Df() {
  if (al) return Ie;
  al = 1;
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
  return Ie.ContextConsumer = i, Ie.ContextProvider = s, Ie.Element = e, Ie.ForwardRef = a, Ie.Fragment = n, Ie.Lazy = d, Ie.Memo = f, Ie.Portal = t, Ie.Profiler = o, Ie.StrictMode = r, Ie.Suspense = c, Ie.SuspenseList = u, Ie.isContextConsumer = function(p) {
    return v(p) === i;
  }, Ie.isContextProvider = function(p) {
    return v(p) === s;
  }, Ie.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Ie.isForwardRef = function(p) {
    return v(p) === a;
  }, Ie.isFragment = function(p) {
    return v(p) === n;
  }, Ie.isLazy = function(p) {
    return v(p) === d;
  }, Ie.isMemo = function(p) {
    return v(p) === f;
  }, Ie.isPortal = function(p) {
    return v(p) === t;
  }, Ie.isProfiler = function(p) {
    return v(p) === o;
  }, Ie.isStrictMode = function(p) {
    return v(p) === r;
  }, Ie.isSuspense = function(p) {
    return v(p) === c;
  }, Ie.isSuspenseList = function(p) {
    return v(p) === u;
  }, Ie.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === o || p === r || p === c || p === u || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === f || p.$$typeof === s || p.$$typeof === i || p.$$typeof === a || p.$$typeof === g || p.getModuleId !== void 0);
  }, Ie.typeOf = v, Ie;
}
var Pe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ll;
function _f() {
  return ll || (ll = 1, process.env.NODE_ENV !== "production" && function() {
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
    Pe.ContextConsumer = s, Pe.ContextProvider = a, Pe.Element = t, Pe.ForwardRef = c, Pe.Fragment = r, Pe.Lazy = h, Pe.Memo = d, Pe.Portal = n, Pe.Profiler = i, Pe.StrictMode = o, Pe.Suspense = u, Pe.SuspenseList = f, Pe.isContextConsumer = function(p) {
      return e(p) === s;
    }, Pe.isContextProvider = function(p) {
      return e(p) === a;
    }, Pe.isElement = function(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }, Pe.isForwardRef = function(p) {
      return e(p) === c;
    }, Pe.isFragment = function(p) {
      return e(p) === r;
    }, Pe.isLazy = function(p) {
      return e(p) === h;
    }, Pe.isMemo = function(p) {
      return e(p) === d;
    }, Pe.isPortal = function(p) {
      return e(p) === n;
    }, Pe.isProfiler = function(p) {
      return e(p) === i;
    }, Pe.isStrictMode = function(p) {
      return e(p) === o;
    }, Pe.isSuspense = function(p) {
      return e(p) === u;
    }, Pe.isSuspenseList = function(p) {
      return e(p) === f;
    }, Pe.isValidElementType = function(p) {
      return typeof p == "string" || typeof p == "function" || p === r || p === i || p === o || p === u || p === f || typeof p == "object" && p !== null && (p.$$typeof === h || p.$$typeof === d || p.$$typeof === a || p.$$typeof === s || p.$$typeof === c || p.$$typeof === v || p.getModuleId !== void 0);
    }, Pe.typeOf = e;
  }()), Pe;
}
var cl;
function Bf() {
  return cl || (cl = 1, process.env.NODE_ENV === "production" ? wo.exports = /* @__PURE__ */ Df() : wo.exports = /* @__PURE__ */ _f()), wo.exports;
}
var Yo = /* @__PURE__ */ Bf();
function nn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Gc(e) {
  if (/* @__PURE__ */ R.isValidElement(e) || Yo.isValidElementType(e) || !nn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Gc(e[n]);
  }), t;
}
function Ot(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return nn(e) && nn(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ R.isValidElement(t[o]) || Yo.isValidElementType(t[o]) ? r[o] = t[o] : nn(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && nn(e[o]) ? r[o] = Ot(e[o], t[o], n) : n.clone ? r[o] = nn(t[o]) ? Gc(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
function Lf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Kc(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  const c = i.type;
  return typeof c == "function" && !Lf(c) && (a = "Did you accidentally use a plain function component for an element instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const jn = fr(l.element, Kc);
jn.isRequired = fr(l.element.isRequired, Kc);
function jf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ff(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof i == "function" && !jf(i) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const zf = fr(l.elementType, Ff), Hf = "exact-prop: ​";
function to(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Hf]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function Xc(e, t = "") {
  return e.displayName || e.name || t;
}
function ul(e, t, n) {
  const r = Xc(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function Vf(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Xc(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Yo.ForwardRef:
          return ul(e, e.render, "ForwardRef");
        case Yo.Memo:
          return ul(e, e.type, "memo");
        default:
          return;
      }
  }
}
function rr(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const Js = l.oneOfType([l.func, l.object]);
function we(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : bn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function dl(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function jt(e) {
  return e && e.ownerDocument || document;
}
function qo(e) {
  return jt(e).defaultView || window;
}
function vs(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Bn = typeof window < "u" ? R.useLayoutEffect : R.useEffect;
let fl = 0;
function Wf(e) {
  const [t, n] = R.useState(e), r = e || t;
  return R.useEffect(() => {
    t == null && (fl += 1, n(`mui-${fl}`));
  }, [t]), r;
}
const Uf = {
  ...R
}, pl = Uf.useId;
function Qs(e) {
  if (pl !== void 0) {
    const t = pl();
    return e ?? t;
  }
  return Wf(e);
}
function Yf({
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
function pn(e) {
  const t = R.useRef(e);
  return Bn(() => {
    t.current = e;
  }), R.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function kt(...e) {
  return R.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      vs(n, t);
    });
  }, e);
}
const ml = {};
function Jc(e, t) {
  const n = R.useRef(ml);
  return n.current === ml && (n.current = e(t)), n;
}
const qf = [];
function Gf(e) {
  R.useEffect(e, qf);
}
class yi {
  constructor() {
    vr(this, "currentId", null);
    vr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    vr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new yi();
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
function Zn() {
  const e = Jc(yi.create).current;
  return Gf(e.disposeEffect), e;
}
function Go(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function Kf(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function Xf(e) {
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
function Qc(e, t, n, r) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const i = Xf(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Zc(e, t, ...n) {
  return e[t] === void 0 ? null : Qc(e, t, ...n);
}
function bs() {
  return null;
}
Zc.isRequired = Qc;
bs.isRequired = bs;
const Jf = process.env.NODE_ENV === "production" ? bs : Zc, hl = (e) => e, Qf = () => {
  let e = hl;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = hl;
    }
  };
}, eu = Qf(), Zf = {
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
function pt(e, t, n = "Mui") {
  const r = Zf[t];
  return r ? `${n}-${r}` : `${eu.generate(e)}-${t}`;
}
function mt(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = pt(e, o, n);
  }), r;
}
function ep(e) {
  return typeof e == "string";
}
function tu(e, t, n) {
  return e === void 0 || ep(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function nu(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function gl(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function ru(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const g = Ce(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), v = {
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
  const s = nu({
    ...o,
    ...r
  }), a = gl(r), c = gl(o), u = t(s), f = Ce(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), d = {
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
function ou(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function tp(e) {
  var d;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : ou(n, r), {
    props: a,
    internalRef: c
  } = ru({
    ...i,
    externalSlotProps: s
  }), u = kt(c, s == null ? void 0 : s.ref, (d = e.additionalProps) == null ? void 0 : d.ref);
  return tu(t, {
    ...a,
    ref: u
  }, r);
}
function pr(e) {
  var t;
  return parseInt(R.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function kr(e, t) {
  return t ? Ot(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Tn = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.string, l.object, l.array]) : {};
function np(e, t) {
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
function rp(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function op(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : bn(18, `(${t})`));
    return null;
  }
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function ip(e) {
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
const vi = {
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
}, yl = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${vi[e]}px)`
}, sp = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : vi[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function mn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || yl;
    return t.reduce((s, a, c) => (s[i.up(i.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || yl;
    return Object.keys(t).reduce((s, a) => {
      if (rp(i.keys, a)) {
        const c = op(r.containerQueries ? r : sp, a);
        c && (s[c] = n(t[a], a));
      } else if (Object.keys(i.values || vi).includes(a)) {
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
function ap(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function lp(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function bi(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Ko(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = bi(e, n) || r, t && (o = t(o, r, e)), o;
}
function Ye(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], c = s.theme, u = bi(c, r) || {};
    return mn(s, a, (d) => {
      let h = Ko(u, o, d);
      return d === h && typeof d == "string" && (h = Ko(u, o, `${t}${d === "default" ? "" : we(d)}`, d)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Tn
  } : {}, i.filterProps = [t], i;
}
function cp(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const up = {
  m: "margin",
  p: "padding"
}, dp = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, vl = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, fp = cp((e) => {
  if (e.length > 2)
    if (vl[e])
      e = vl[e];
    else
      return [e];
  const [t, n] = e.split(""), r = up[t], o = dp[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), xi = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Si = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], pp = [...xi, ...Si];
function no(e, t, n, r) {
  const o = bi(e, t, !0) ?? n;
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
function Zs(e) {
  return no(e, "spacing", 8, "spacing");
}
function ro(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function mp(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = ro(t, n), r), {});
}
function hp(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const o = fp(n), i = mp(o, r), s = e[n];
  return mn(e, s, i);
}
function iu(e, t) {
  const n = Zs(e.theme);
  return Object.keys(e).map((r) => hp(e, t, r, n)).reduce(kr, {});
}
function Ve(e) {
  return iu(e, xi);
}
Ve.propTypes = process.env.NODE_ENV !== "production" ? xi.reduce((e, t) => (e[t] = Tn, e), {}) : {};
Ve.filterProps = xi;
function We(e) {
  return iu(e, Si);
}
We.propTypes = process.env.NODE_ENV !== "production" ? Si.reduce((e, t) => (e[t] = Tn, e), {}) : {};
We.filterProps = Si;
process.env.NODE_ENV !== "production" && pp.reduce((e, t) => (e[t] = Tn, e), {});
function wi(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? kr(o, t[i](r)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, o) => Object.assign(r, o.propTypes), {}) : {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function _t(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Vt(e, t) {
  return Ye({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const gp = Vt("border", _t), yp = Vt("borderTop", _t), vp = Vt("borderRight", _t), bp = Vt("borderBottom", _t), xp = Vt("borderLeft", _t), Sp = Vt("borderColor"), wp = Vt("borderTopColor"), Tp = Vt("borderRightColor"), Ep = Vt("borderBottomColor"), Cp = Vt("borderLeftColor"), Op = Vt("outline", _t), Rp = Vt("outlineColor"), Ti = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = no(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: ro(t, r)
    });
    return mn(e, e.borderRadius, n);
  }
  return null;
};
Ti.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Tn
} : {};
Ti.filterProps = ["borderRadius"];
wi(gp, yp, vp, bp, xp, Sp, wp, Tp, Ep, Cp, Ti, Op, Rp);
const Ei = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = no(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: ro(t, r)
    });
    return mn(e, e.gap, n);
  }
  return null;
};
Ei.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Tn
} : {};
Ei.filterProps = ["gap"];
const Ci = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = no(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: ro(t, r)
    });
    return mn(e, e.columnGap, n);
  }
  return null;
};
Ci.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Tn
} : {};
Ci.filterProps = ["columnGap"];
const Oi = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = no(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: ro(t, r)
    });
    return mn(e, e.rowGap, n);
  }
  return null;
};
Oi.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Tn
} : {};
Oi.filterProps = ["rowGap"];
const Ip = Ye({
  prop: "gridColumn"
}), Pp = Ye({
  prop: "gridRow"
}), kp = Ye({
  prop: "gridAutoFlow"
}), Mp = Ye({
  prop: "gridAutoColumns"
}), Np = Ye({
  prop: "gridAutoRows"
}), $p = Ye({
  prop: "gridTemplateColumns"
}), Ap = Ye({
  prop: "gridTemplateRows"
}), Dp = Ye({
  prop: "gridTemplateAreas"
}), _p = Ye({
  prop: "gridArea"
});
wi(Ei, Ci, Oi, Ip, Pp, kp, Mp, Np, $p, Ap, Dp, _p);
function er(e, t) {
  return t === "grey" ? t : e;
}
const Bp = Ye({
  prop: "color",
  themeKey: "palette",
  transform: er
}), Lp = Ye({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: er
}), jp = Ye({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: er
});
wi(Bp, Lp, jp);
function Tt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Fp = Ye({
  prop: "width",
  transform: Tt
}), ea = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, a, c;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || vi[n];
      return r ? ((c = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: Tt(n)
      };
    };
    return mn(e, e.maxWidth, t);
  }
  return null;
};
ea.filterProps = ["maxWidth"];
const zp = Ye({
  prop: "minWidth",
  transform: Tt
}), Hp = Ye({
  prop: "height",
  transform: Tt
}), Vp = Ye({
  prop: "maxHeight",
  transform: Tt
}), Wp = Ye({
  prop: "minHeight",
  transform: Tt
});
Ye({
  prop: "size",
  cssProperty: "width",
  transform: Tt
});
Ye({
  prop: "size",
  cssProperty: "height",
  transform: Tt
});
const Up = Ye({
  prop: "boxSizing"
});
wi(Fp, ea, zp, Hp, Vp, Wp, Up);
const oo = {
  // borders
  border: {
    themeKey: "borders",
    transform: _t
  },
  borderTop: {
    themeKey: "borders",
    transform: _t
  },
  borderRight: {
    themeKey: "borders",
    transform: _t
  },
  borderBottom: {
    themeKey: "borders",
    transform: _t
  },
  borderLeft: {
    themeKey: "borders",
    transform: _t
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
    transform: _t
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ti
  },
  // palette
  color: {
    themeKey: "palette",
    transform: er
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: er
  },
  backgroundColor: {
    themeKey: "palette",
    transform: er
  },
  // spacing
  p: {
    style: We
  },
  pt: {
    style: We
  },
  pr: {
    style: We
  },
  pb: {
    style: We
  },
  pl: {
    style: We
  },
  px: {
    style: We
  },
  py: {
    style: We
  },
  padding: {
    style: We
  },
  paddingTop: {
    style: We
  },
  paddingRight: {
    style: We
  },
  paddingBottom: {
    style: We
  },
  paddingLeft: {
    style: We
  },
  paddingX: {
    style: We
  },
  paddingY: {
    style: We
  },
  paddingInline: {
    style: We
  },
  paddingInlineStart: {
    style: We
  },
  paddingInlineEnd: {
    style: We
  },
  paddingBlock: {
    style: We
  },
  paddingBlockStart: {
    style: We
  },
  paddingBlockEnd: {
    style: We
  },
  m: {
    style: Ve
  },
  mt: {
    style: Ve
  },
  mr: {
    style: Ve
  },
  mb: {
    style: Ve
  },
  ml: {
    style: Ve
  },
  mx: {
    style: Ve
  },
  my: {
    style: Ve
  },
  margin: {
    style: Ve
  },
  marginTop: {
    style: Ve
  },
  marginRight: {
    style: Ve
  },
  marginBottom: {
    style: Ve
  },
  marginLeft: {
    style: Ve
  },
  marginX: {
    style: Ve
  },
  marginY: {
    style: Ve
  },
  marginInline: {
    style: Ve
  },
  marginInlineStart: {
    style: Ve
  },
  marginInlineEnd: {
    style: Ve
  },
  marginBlock: {
    style: Ve
  },
  marginBlockStart: {
    style: Ve
  },
  marginBlockEnd: {
    style: Ve
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
    style: Ei
  },
  rowGap: {
    style: Oi
  },
  columnGap: {
    style: Ci
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
    transform: Tt
  },
  maxWidth: {
    style: ea
  },
  minWidth: {
    transform: Tt
  },
  height: {
    transform: Tt
  },
  maxHeight: {
    transform: Tt
  },
  minHeight: {
    transform: Tt
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
function Yp(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function qp(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Gp() {
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
    const h = bi(o, u) || {};
    return d ? d(s) : mn(s, r, (v) => {
      let p = Ko(h, f, v);
      return v === p && typeof v == "string" && (p = Ko(h, f, `${n}${v === "default" ? "" : we(v)}`, v)), c === !1 ? p : {
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
    const i = o.unstable_sxConfig ?? oo;
    function s(a) {
      let c = a;
      if (typeof a == "function")
        c = a(o);
      else if (typeof a != "object")
        return a;
      if (!c)
        return null;
      const u = ap(o.breakpoints), f = Object.keys(u);
      let d = u;
      return Object.keys(c).forEach((h) => {
        const g = qp(c[h], o);
        if (g != null)
          if (typeof g == "object")
            if (i[h])
              d = kr(d, e(h, g, o, i));
            else {
              const v = mn({
                theme: o
              }, g, (p) => ({
                [h]: p
              }));
              Yp(v, g) ? d[h] = t({
                sx: g,
                theme: o
              }) : d = kr(d, v);
            }
          else
            d = kr(d, e(h, g, o, i));
      }), np(o, lp(f, d));
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const Sn = Gp();
Sn.filterProps = ["sx"];
const Kp = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? oo;
  return Object.keys(e).forEach((o) => {
    n[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function su(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: r,
    otherProps: o
  } = Kp(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...s) => {
    const a = t(...s);
    return nn(a) ? {
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
function Xo() {
  return Xo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Xo.apply(null, arguments);
}
function Xp(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Jp(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Qp = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Jp(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Xp(o);
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
}(), lt = "-ms-", Jo = "-moz-", ge = "-webkit-", au = "comm", ta = "rule", na = "decl", Zp = "@import", lu = "@keyframes", em = "@layer", tm = Math.abs, Ri = String.fromCharCode, nm = Object.assign;
function rm(e, t) {
  return it(e, 0) ^ 45 ? (((t << 2 ^ it(e, 0)) << 2 ^ it(e, 1)) << 2 ^ it(e, 2)) << 2 ^ it(e, 3) : 0;
}
function cu(e) {
  return e.trim();
}
function om(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ye(e, t, n) {
  return e.replace(t, n);
}
function xs(e, t) {
  return e.indexOf(t);
}
function it(e, t) {
  return e.charCodeAt(t) | 0;
}
function jr(e, t, n) {
  return e.slice(t, n);
}
function Zt(e) {
  return e.length;
}
function ra(e) {
  return e.length;
}
function To(e, t) {
  return t.push(e), e;
}
function im(e, t) {
  return e.map(t).join("");
}
var Ii = 1, or = 1, uu = 0, St = 0, Xe = 0, mr = "";
function Pi(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Ii, column: or, length: s, return: "" };
}
function br(e, t) {
  return nm(Pi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function sm() {
  return Xe;
}
function am() {
  return Xe = St > 0 ? it(mr, --St) : 0, or--, Xe === 10 && (or = 1, Ii--), Xe;
}
function Rt() {
  return Xe = St < uu ? it(mr, St++) : 0, or++, Xe === 10 && (or = 1, Ii++), Xe;
}
function on() {
  return it(mr, St);
}
function Do() {
  return St;
}
function io(e, t) {
  return jr(mr, e, t);
}
function Fr(e) {
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
function du(e) {
  return Ii = or = 1, uu = Zt(mr = e), St = 0, [];
}
function fu(e) {
  return mr = "", e;
}
function _o(e) {
  return cu(io(St - 1, Ss(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function lm(e) {
  for (; (Xe = on()) && Xe < 33; )
    Rt();
  return Fr(e) > 2 || Fr(Xe) > 3 ? "" : " ";
}
function cm(e, t) {
  for (; --t && Rt() && !(Xe < 48 || Xe > 102 || Xe > 57 && Xe < 65 || Xe > 70 && Xe < 97); )
    ;
  return io(e, Do() + (t < 6 && on() == 32 && Rt() == 32));
}
function Ss(e) {
  for (; Rt(); )
    switch (Xe) {
      // ] ) " '
      case e:
        return St;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ss(Xe);
        break;
      // (
      case 40:
        e === 41 && Ss(e);
        break;
      // \
      case 92:
        Rt();
        break;
    }
  return St;
}
function um(e, t) {
  for (; Rt() && e + Xe !== 57; )
    if (e + Xe === 84 && on() === 47)
      break;
  return "/*" + io(t, St - 1) + "*" + Ri(e === 47 ? e : Rt());
}
function dm(e) {
  for (; !Fr(on()); )
    Rt();
  return io(e, St);
}
function fm(e) {
  return fu(Bo("", null, null, null, [""], e = du(e), 0, [0], e));
}
function Bo(e, t, n, r, o, i, s, a, c) {
  for (var u = 0, f = 0, d = s, h = 0, g = 0, v = 0, p = 1, y = 1, b = 1, S = 0, E = "", T = o, x = i, w = r, C = E; y; )
    switch (v = S, S = Rt()) {
      // (
      case 40:
        if (v != 108 && it(C, d - 1) == 58) {
          xs(C += ye(_o(S), "&", "&\f"), "&\f") != -1 && (b = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += _o(S);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += lm(v);
        break;
      // \
      case 92:
        C += cm(Do() - 1, 7);
        continue;
      // /
      case 47:
        switch (on()) {
          case 42:
          case 47:
            To(pm(um(Rt(), Do()), t, n), c);
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * p:
        a[u++] = Zt(C) * b;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (S) {
          // \0 }
          case 0:
          case 125:
            y = 0;
          // ;
          case 59 + f:
            b == -1 && (C = ye(C, /\f/g, "")), g > 0 && Zt(C) - d && To(g > 32 ? xl(C + ";", r, n, d - 1) : xl(ye(C, " ", "") + ";", r, n, d - 2), c);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (To(w = bl(C, t, n, u, f, o, a, E, T = [], x = [], d), i), S === 123)
              if (f === 0)
                Bo(C, t, w, w, T, i, d, a, x);
              else
                switch (h === 99 && it(C, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Bo(e, w, w, r && To(bl(e, w, w, 0, 0, o, a, E, o, T = [], d), x), o, x, d, a, r ? T : x);
                    break;
                  default:
                    Bo(C, w, w, w, [""], x, 0, a, x);
                }
        }
        u = f = g = 0, p = b = 1, E = C = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Zt(C), g = v;
      default:
        if (p < 1) {
          if (S == 123)
            --p;
          else if (S == 125 && p++ == 0 && am() == 125)
            continue;
        }
        switch (C += Ri(S), S * p) {
          // &
          case 38:
            b = f > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            a[u++] = (Zt(C) - 1) * b, b = 1;
            break;
          // @
          case 64:
            on() === 45 && (C += _o(Rt())), h = on(), f = d = Zt(E = C += dm(Do())), S++;
            break;
          // -
          case 45:
            v === 45 && Zt(C) == 2 && (p = 0);
        }
    }
  return i;
}
function bl(e, t, n, r, o, i, s, a, c, u, f) {
  for (var d = o - 1, h = o === 0 ? i : [""], g = ra(h), v = 0, p = 0, y = 0; v < r; ++v)
    for (var b = 0, S = jr(e, d + 1, d = tm(p = s[v])), E = e; b < g; ++b)
      (E = cu(p > 0 ? h[b] + " " + S : ye(S, /&\f/g, h[b]))) && (c[y++] = E);
  return Pi(e, t, n, o === 0 ? ta : a, c, u, f);
}
function pm(e, t, n) {
  return Pi(e, t, n, au, Ri(sm()), jr(e, 2, -2), 0);
}
function xl(e, t, n, r) {
  return Pi(e, t, n, na, jr(e, 0, r), jr(e, r + 1, -1), r);
}
function tr(e, t) {
  for (var n = "", r = ra(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function mm(e, t, n, r) {
  switch (e.type) {
    case em:
      if (e.children.length) break;
    case Zp:
    case na:
      return e.return = e.return || e.value;
    case au:
      return "";
    case lu:
      return e.return = e.value + "{" + tr(e.children, r) + "}";
    case ta:
      e.value = e.props.join(",");
  }
  return Zt(n = tr(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function hm(e) {
  var t = ra(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function gm(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function pu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ym = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = on(), o === 38 && i === 12 && (n[r] = 1), !Fr(i); )
    Rt();
  return io(t, St);
}, vm = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Fr(o)) {
      case 0:
        o === 38 && on() === 12 && (n[r] = 1), t[r] += ym(St - 1, n, r);
        break;
      case 2:
        t[r] += _o(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = on() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      // fallthrough
      default:
        t[r] += Ri(o);
    }
  while (o = Rt());
  return t;
}, bm = function(t, n) {
  return fu(vm(du(t), n));
}, Sl = /* @__PURE__ */ new WeakMap(), xm = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Sl.get(r)) && !o) {
      Sl.set(t, !0);
      for (var i = [], s = bm(n, i), a = r.props, c = 0, u = 0; c < s.length; c++)
        for (var f = 0; f < a.length; f++, u++)
          t.props[u] = i[c] ? s[c].replace(/&\f/g, a[f]) : a[f] + " " + s[c];
    }
  }
}, Sm = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function mu(e, t) {
  switch (rm(e, t)) {
    // color-adjust
    case 5103:
      return ge + "print-" + e + e;
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
      return ge + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ge + e + Jo + e + lt + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return ge + e + lt + e + e;
    // order
    case 6165:
      return ge + e + lt + "flex-" + e + e;
    // align-items
    case 5187:
      return ge + e + ye(e, /(\w+).+(:[^]+)/, ge + "box-$1$2" + lt + "flex-$1$2") + e;
    // align-self
    case 5443:
      return ge + e + lt + "flex-item-" + ye(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return ge + e + lt + "flex-line-pack" + ye(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return ge + e + lt + ye(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return ge + e + lt + ye(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return ge + "box-" + ye(e, "-grow", "") + ge + e + lt + ye(e, "grow", "positive") + e;
    // transition
    case 4554:
      return ge + ye(e, /([^-])(transform)/g, "$1" + ge + "$2") + e;
    // cursor
    case 6187:
      return ye(ye(ye(e, /(zoom-|grab)/, ge + "$1"), /(image-set)/, ge + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return ye(e, /(image-set\([^]*)/, ge + "$1$`$1");
    // justify-content
    case 4968:
      return ye(ye(e, /(.+:)(flex-)?(.*)/, ge + "box-pack:$3" + lt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ge + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ye(e, /(.+)-inline(.+)/, ge + "$1$2") + e;
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
      if (Zt(e) - 1 - t > 6) switch (it(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (it(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return ye(e, /(.+:)(.+)-([^]+)/, "$1" + ge + "$2-$3$1" + Jo + (it(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~xs(e, "stretch") ? mu(ye(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (it(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (it(e, Zt(e) - 3 - (~xs(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return ye(e, ":", ":" + ge) + e;
        // (inline-)?fl(e)x
        case 101:
          return ye(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ge + (it(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ge + "$2$3$1" + lt + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (it(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return ge + e + lt + ye(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return ge + e + lt + ye(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return ge + e + lt + ye(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ge + e + lt + e + e;
  }
  return e;
}
var wm = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case na:
      t.return = mu(t.value, t.length);
      break;
    case lu:
      return tr([br(t, {
        value: ye(t.value, "@", "@" + ge)
      })], o);
    case ta:
      if (t.length) return im(t.props, function(i) {
        switch (om(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return tr([br(t, {
              props: [ye(i, /:(read-\w+)/, ":" + Jo + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return tr([br(t, {
              props: [ye(i, /:(plac\w+)/, ":" + ge + "input-$1")]
            }), br(t, {
              props: [ye(i, /:(plac\w+)/, ":" + Jo + "$1")]
            }), br(t, {
              props: [ye(i, /:(plac\w+)/, lt + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Tm = [wm], Em = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(p) {
      var y = p.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Tm, i = {}, s, a = [];
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
  var c, u = [xm, Sm];
  {
    var f, d = [mm, gm(function(p) {
      f.insert(p);
    })], h = hm(u.concat(o, d)), g = function(y) {
      return tr(fm(y), h);
    };
    c = function(y, b, S, E) {
      f = S, g(y ? y + "{" + b.styles + "}" : b.styles), E && (v.inserted[b.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new Qp({
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
}, Qi, wl;
function Cm() {
  if (wl) return Qi;
  wl = 1;
  var e = Gs(), t = {
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
      var S = c(p);
      u && (S = S.concat(u(p)));
      for (var E = s(v), T = s(p), x = 0; x < S.length; ++x) {
        var w = S[x];
        if (!n[w] && !(y && y[w]) && !(T && T[w]) && !(E && E[w])) {
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
Cm();
var Om = !0;
function hu(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var oa = function(t, n, r) {
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
  Om === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, ia = function(t, n, r) {
  oa(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Rm(e) {
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
var Im = {
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
}, Pm = /[A-Z]|^ms/g, km = /_EMO_([^_]+?)_([^]*?)_EMO_/g, gu = function(t) {
  return t.charCodeAt(1) === 45;
}, Tl = function(t) {
  return t != null && typeof t != "boolean";
}, Zi = /* @__PURE__ */ pu(function(e) {
  return gu(e) ? e : e.replace(Pm, "-$&").toLowerCase();
}), El = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(km, function(r, o, i) {
          return en = {
            name: o,
            styles: i,
            next: en
          }, o;
        });
  }
  return Im[t] !== 1 && !gu(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function zr(e, t, n) {
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
        return en = {
          name: o.name,
          styles: o.styles,
          next: en
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            en = {
              name: s.name,
              styles: s.styles,
              next: en
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return Mm(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = en, u = n(e);
        return en = c, zr(e, t, u);
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
function Mm(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += zr(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : Tl(a) && (r += Zi(i) + ":" + El(i, a) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var c = 0; c < s.length; c++)
          Tl(s[c]) && (r += Zi(i) + ":" + El(i, s[c]) + ";");
      else {
        var u = zr(e, t, s);
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
var Cl = /label:\s*([^\s;{]+)\s*(;|$)/g, en;
function so(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  en = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += zr(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += zr(n, t, e[a]), r) {
      var c = i;
      o += c[a];
    }
  Cl.lastIndex = 0;
  for (var u = "", f; (f = Cl.exec(o)) !== null; )
    u += "-" + f[1];
  var d = Rm(o) + u;
  return {
    name: d,
    styles: o,
    next: en
  };
}
var Nm = function(t) {
  return t();
}, yu = R.useInsertionEffect ? R.useInsertionEffect : !1, vu = yu || Nm, Ol = yu || R.useLayoutEffect, bu = /* @__PURE__ */ R.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Em({
    key: "css"
  }) : null
);
bu.Provider;
var sa = function(t) {
  return /* @__PURE__ */ qs(function(n, r) {
    var o = vf(bu);
    return t(n, o, r);
  });
}, ao = /* @__PURE__ */ R.createContext({}), aa = {}.hasOwnProperty, ws = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", $m = function(t, n) {
  var r = {};
  for (var o in n)
    aa.call(n, o) && (r[o] = n[o]);
  return r[ws] = t, r;
}, Am = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return oa(n, r, o), vu(function() {
    return ia(n, r, o);
  }), null;
}, Dm = /* @__PURE__ */ sa(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[ws], i = [r], s = "";
  typeof e.className == "string" ? s = hu(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = so(i, void 0, R.useContext(ao));
  s += t.key + "-" + a.name;
  var c = {};
  for (var u in e)
    aa.call(e, u) && u !== "css" && u !== ws && (c[u] = e[u]);
  return c.className = s, n && (c.ref = n), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(Am, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ R.createElement(o, c));
}), _m = Dm, Rl = function(t, n) {
  var r = arguments;
  if (n == null || !aa.call(n, "css"))
    return R.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = _m, i[1] = $m(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return R.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Rl || (Rl = {}));
var Bm = /* @__PURE__ */ sa(function(e, t) {
  var n = e.styles, r = so([n], void 0, R.useContext(ao)), o = R.useRef();
  return Ol(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, c = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), c !== null && (a = !0, c.setAttribute("data-emotion", i), s.hydrate([c])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), Ol(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && ia(t, r.next, !0), s.tags.length) {
      var c = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = c, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function la() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return so(t);
}
function lo() {
  var e = la.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Lm = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, jm = /* @__PURE__ */ pu(
  function(e) {
    return Lm.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Fm = jm, zm = function(t) {
  return t !== "theme";
}, Il = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Fm : zm;
}, Pl = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Hm = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return oa(n, r, o), vu(function() {
    return ia(n, r, o);
  }), null;
}, Vm = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = Pl(t, n, r), c = a || Il(o), u = !c("as");
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
    var p = sa(function(y, b, S) {
      var E = u && y.as || o, T = "", x = [], w = y;
      if (y.theme == null) {
        w = {};
        for (var C in y)
          w[C] = y[C];
        w.theme = R.useContext(ao);
      }
      typeof y.className == "string" ? T = hu(b.registered, x, y.className) : y.className != null && (T = y.className + " ");
      var I = so(d.concat(x), b.registered, w);
      T += b.key + "-" + I.name, s !== void 0 && (T += " " + s);
      var P = u && a === void 0 ? Il(E) : c, m = {};
      for (var O in y)
        u && O === "as" || P(O) && (m[O] = y[O]);
      return m.className = T, S && (m.ref = S), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(Hm, {
        cache: b,
        serialized: I,
        isStringTag: typeof E == "string"
      }), /* @__PURE__ */ R.createElement(E, m));
    });
    return p.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", p.defaultProps = t.defaultProps, p.__emotion_real = p, p.__emotion_base = o, p.__emotion_styles = d, p.__emotion_forwardProp = a, Object.defineProperty(p, "toString", {
      value: function() {
        return "." + s;
      }
    }), p.withComponent = function(y, b) {
      var S = e(y, Xo({}, n, b, {
        shouldForwardProp: Pl(p, b, !0)
      }));
      return S.apply(void 0, d);
    }, p;
  };
}, Wm = [
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
], Ts = Vm.bind(null);
Wm.forEach(function(e) {
  Ts[e] = Ts(e);
});
function Um(e) {
  return e == null || Object.keys(e).length === 0;
}
function ca(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ B(Bm, {
    styles: typeof t == "function" ? (o) => t(Um(o) ? n : o) : t
  });
}
process.env.NODE_ENV !== "production" && (ca.propTypes = {
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
function xu(e, t) {
  const n = Ts(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function Ym(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const kl = [];
function Ml(e) {
  return kl[0] = e, so(kl);
}
const qm = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function Gm(e) {
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
  } = e, i = qm(t), s = Object.keys(i);
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
const Km = {
  borderRadius: 4
};
function Su(e = 8, t = Zs({
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
function Xm(e, t) {
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
function ua(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, a = Gm(n), c = Su(o);
  let u = Ot({
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
      ...Km,
      ...i
    }
  }, s);
  return u = ip(u), u.applyStyles = Xm, u = t.reduce((f, d) => Ot(f, d), u), u.unstable_sxConfig = {
    ...oo,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(d) {
    return Sn({
      sx: d,
      theme: this
    });
  }, u;
}
function Jm(e) {
  return Object.keys(e).length === 0;
}
function da(e = null) {
  const t = R.useContext(ao);
  return !t || Jm(t) ? e : t;
}
const Qm = ua();
function fa(e = Qm) {
  return da(e);
}
function wu({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = fa(n), o = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ B(ca, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (wu.propTypes = {
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
function Zm(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = xu("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(Sn);
  return /* @__PURE__ */ R.forwardRef(function(c, u) {
    const f = fa(n), {
      className: d,
      component: h = "div",
      ...g
    } = su(c);
    return /* @__PURE__ */ B(i, {
      as: h,
      ref: u,
      className: Ce(d, o ? o(r) : r),
      theme: t && f[t] || f,
      ...g
    });
  });
}
function Tu(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: Ml(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Ml(o.style));
  }), r;
}
const eh = ua();
function es(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function th(e) {
  return e ? (t, n) => n[e] : null;
}
function nh(e, t, n) {
  e.theme = sh(e.theme) ? n : e.theme[t] || e.theme;
}
function Lo(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((r) => Lo(e, r));
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
    return Eu(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function Eu(e, t, n = []) {
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
function rh(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = eh,
    rootShouldForwardProp: r = es,
    slotShouldForwardProp: o = es
  } = e;
  function i(a) {
    nh(a, t, n);
  }
  return (a, c = {}) => {
    Ym(a, (x) => x.filter((w) => w !== Sn));
    const {
      name: u,
      slot: f,
      skipVariantsResolver: d,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: g = th(Cu(f)),
      ...v
    } = c, p = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), y = h || !1;
    let b = es;
    f === "Root" || f === "root" ? b = r : f ? b = o : ah(a) && (b = void 0);
    const S = xu(a, {
      shouldForwardProp: b,
      label: ih(u, f),
      ...v
    }), E = (x) => {
      if (typeof x == "function" && x.__emotion_real !== x)
        return function(C) {
          return Lo(C, x);
        };
      if (nn(x)) {
        const w = Tu(x);
        return w.variants ? function(I) {
          return Lo(I, w);
        } : w.style;
      }
      return x;
    }, T = (...x) => {
      const w = [], C = x.map(E), I = [];
      if (w.push(i), u && g && I.push(function(_) {
        var M, W;
        const A = (W = (M = _.theme.components) == null ? void 0 : M[u]) == null ? void 0 : W.styleOverrides;
        if (!A)
          return null;
        const D = {};
        for (const te in A)
          D[te] = Lo(_, A[te]);
        return g(_, D);
      }), u && !p && I.push(function(_) {
        var D, M;
        const L = _.theme, A = (M = (D = L == null ? void 0 : L.components) == null ? void 0 : D[u]) == null ? void 0 : M.variants;
        return A ? Eu(_, A) : null;
      }), y || I.push(Sn), Array.isArray(C[0])) {
        const O = C.shift(), _ = new Array(w.length).fill(""), L = new Array(I.length).fill("");
        let A;
        A = [..._, ...O, ...L], A.raw = [..._, ...O.raw, ...L], w.unshift(A);
      }
      const P = [...w, ...C, ...I], m = S(...P);
      return a.muiName && (m.muiName = a.muiName), process.env.NODE_ENV !== "production" && (m.displayName = oh(u, f, a)), m;
    };
    return S.withConfig && (T.withConfig = S.withConfig), T;
  };
}
function oh(e, t, n) {
  return e ? `${e}${we(t || "")}` : `Styled(${Vf(n)})`;
}
function ih(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${Cu(t || "Root")}`), n;
}
function sh(e) {
  for (const t in e)
    return !1;
  return !0;
}
function ah(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Cu(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function lh(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Lr(t.components[n].defaultProps, r);
}
function ch(e, t, n, r, o) {
  const [i, s] = R.useState(() => o && n ? n(e).matches : r ? r(e).matches : t);
  return Bn(() => {
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
const uh = {
  ...R
}, Ou = uh.useSyncExternalStore;
function dh(e, t, n, r, o) {
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
    return [() => f.matches, (d) => (f.addEventListener("change", d), () => {
      f.removeEventListener("change", d);
    })];
  }, [i, n, e]);
  return Ou(c, a, s);
}
function Ru(e = {}) {
  const {
    themeId: t
  } = e;
  return function(r, o = {}) {
    let i = da();
    i && t && (i = i[t] || i);
    const s = typeof window < "u" && typeof window.matchMedia < "u", {
      defaultMatches: a = !1,
      matchMedia: c = s ? window.matchMedia : null,
      ssrMatchMedia: u = null,
      noSsr: f = !1
    } = lh({
      name: "MuiUseMediaQuery",
      props: o,
      theme: i
    });
    process.env.NODE_ENV !== "production" && typeof r == "function" && i === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
    let d = typeof r == "function" ? r(i) : r;
    d = d.replace(/^@media( ?)/m, "");
    const g = (Ou !== void 0 ? dh : ch)(d, a, c, u, f);
    return process.env.NODE_ENV !== "production" && R.useDebugValue({
      query: d,
      match: g
    }), g;
  };
}
Ru();
const pa = /* @__PURE__ */ R.createContext(null);
process.env.NODE_ENV !== "production" && (pa.displayName = "ThemeContext");
function ma() {
  const e = R.useContext(pa);
  return process.env.NODE_ENV !== "production" && R.useDebugValue(e), e;
}
const fh = typeof Symbol == "function" && Symbol.for, ph = fh ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function mh(e, t) {
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
function Qo(e) {
  const {
    children: t,
    theme: n
  } = e, r = ma();
  process.env.NODE_ENV !== "production" && r === null && typeof n == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = R.useMemo(() => {
    const i = r === null ? {
      ...n
    } : mh(r, n);
    return i != null && (i[ph] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ B(pa.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Qo.propTypes = {
  /**
   * Your component tree.
   */
  children: l.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: l.oneOfType([l.object, l.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Qo.propTypes = to(Qo.propTypes));
const Iu = /* @__PURE__ */ R.createContext();
function Pu({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ B(Iu.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (Pu.propTypes = {
  children: l.node,
  value: l.bool
});
const ku = () => R.useContext(Iu) ?? !1, Mu = /* @__PURE__ */ R.createContext(void 0);
function Nu({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ B(Mu.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Nu.propTypes = {
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
function hh(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Lr(o.defaultProps, r) : !o.styleOverrides && !o.variants ? Lr(o, r) : r;
}
function gh({
  props: e,
  name: t
}) {
  const n = R.useContext(Mu);
  return hh({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const Nl = {};
function $l(e, t, n, r = !1) {
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
function Hr(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = da(Nl), i = ma() || Nl;
  process.env.NODE_ENV !== "production" && (o === null && typeof n == "function" || r && o && !o[r] && typeof n == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = $l(r, o, n), a = $l(r, i, n, !0), c = (r ? s[r] : s).direction === "rtl";
  return /* @__PURE__ */ B(Qo, {
    theme: a,
    children: /* @__PURE__ */ B(ao.Provider, {
      value: s,
      children: /* @__PURE__ */ B(Pu, {
        value: c,
        children: /* @__PURE__ */ B(Nu, {
          value: r ? s[r].components : s.components,
          children: t
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Hr.propTypes = {
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
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Hr.propTypes = to(Hr.propTypes));
const Al = {
  theme: void 0
};
function yh(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Al.theme = o.theme, i = Tu(e(Al)), t = i, n = o.theme), i;
  };
}
const ha = "mode", ga = "color-scheme", vh = "data-color-scheme";
function bh(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = ha,
    colorSchemeStorageKey: i = ga,
    attribute: s = vh,
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
function xh() {
}
const Sh = ({
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
      return xh;
    const r = (o) => {
      const i = o.newValue;
      o.key === e && n(i);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function ts() {
}
function Dl(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function $u(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function wh(e) {
  return $u(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function Th(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = ha,
    colorSchemeStorageKey: s = ga,
    storageWindow: a = typeof window > "u" ? void 0 : window,
    storageManager: c = Sh,
    noSsr: u = !1
  } = e, f = o.join(","), d = o.length > 1, h = R.useMemo(() => c == null ? void 0 : c({
    key: i,
    storageWindow: a
  }), [c, i, a]), g = R.useMemo(() => c == null ? void 0 : c({
    key: `${s}-light`,
    storageWindow: a
  }), [c, s, a]), v = R.useMemo(() => c == null ? void 0 : c({
    key: `${s}-dark`,
    storageWindow: a
  }), [c, s, a]), [p, y] = R.useState(() => {
    const I = (h == null ? void 0 : h.get(t)) || t, P = (g == null ? void 0 : g.get(n)) || n, m = (v == null ? void 0 : v.get(r)) || r;
    return {
      mode: I,
      systemMode: Dl(I),
      lightColorScheme: P,
      darkColorScheme: m
    };
  }), [b, S] = R.useState(u || !d);
  R.useEffect(() => {
    S(!0);
  }, []);
  const E = wh(p), T = R.useCallback((I) => {
    y((P) => {
      if (I === P.mode)
        return P;
      const m = I ?? t;
      return h == null || h.set(m), {
        ...P,
        mode: m,
        systemMode: Dl(m)
      };
    });
  }, [h, t]), x = R.useCallback((I) => {
    I ? typeof I == "string" ? I && !f.includes(I) ? console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`) : y((P) => {
      const m = {
        ...P
      };
      return $u(P, (O) => {
        O === "light" && (g == null || g.set(I), m.lightColorScheme = I), O === "dark" && (v == null || v.set(I), m.darkColorScheme = I);
      }), m;
    }) : y((P) => {
      const m = {
        ...P
      }, O = I.light === null ? n : I.light, _ = I.dark === null ? r : I.dark;
      return O && (f.includes(O) ? (m.lightColorScheme = O, g == null || g.set(O)) : console.error(`\`${O}\` does not exist in \`theme.colorSchemes\`.`)), _ && (f.includes(_) ? (m.darkColorScheme = _, v == null || v.set(_)) : console.error(`\`${_}\` does not exist in \`theme.colorSchemes\`.`)), m;
    }) : y((P) => (g == null || g.set(n), v == null || v.set(r), {
      ...P,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [f, g, v, n, r]), w = R.useCallback((I) => {
    p.mode === "system" && y((P) => {
      const m = I != null && I.matches ? "dark" : "light";
      return P.systemMode === m ? P : {
        ...P,
        systemMode: m
      };
    });
  }, [p.mode]), C = R.useRef(w);
  return C.current = w, R.useEffect(() => {
    if (typeof window.matchMedia != "function" || !d)
      return;
    const I = (...m) => C.current(...m), P = window.matchMedia("(prefers-color-scheme: dark)");
    return P.addListener(I), I(P), () => {
      P.removeListener(I);
    };
  }, [d]), R.useEffect(() => {
    if (d) {
      const I = (h == null ? void 0 : h.subscribe((O) => {
        (!O || ["light", "dark", "system"].includes(O)) && T(O || t);
      })) || ts, P = (g == null ? void 0 : g.subscribe((O) => {
        (!O || f.match(O)) && x({
          light: O
        });
      })) || ts, m = (v == null ? void 0 : v.subscribe((O) => {
        (!O || f.match(O)) && x({
          dark: O
        });
      })) || ts;
      return () => {
        I(), P(), m();
      };
    }
  }, [x, T, f, t, a, d, h, g, v]), {
    ...p,
    mode: b ? p.mode : void 0,
    systemMode: b ? p.systemMode : void 0,
    colorScheme: b ? E : void 0,
    setMode: T,
    setColorScheme: x
  };
}
const Eh = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Ch(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = ha,
    colorSchemeStorageKey: o = ga,
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
  const f = () => R.useContext(u) || c, d = {}, h = {};
  function g(b) {
    var dt, yt, wt, ft;
    const {
      children: S,
      theme: E,
      modeStorageKey: T = r,
      colorSchemeStorageKey: x = o,
      disableTransitionOnChange: w = i,
      storageManager: C,
      storageWindow: I = typeof window > "u" ? void 0 : window,
      documentNode: P = typeof document > "u" ? void 0 : document,
      colorSchemeNode: m = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: O = !1,
      disableStyleSheetGeneration: _ = !1,
      defaultMode: L = "system",
      forceThemeRerender: A = !1,
      noSsr: D
    } = b, M = R.useRef(!1), W = ma(), te = R.useContext(u), Q = !!te && !O, N = R.useMemo(() => E || (typeof n == "function" ? n() : n), [E]), j = N[t], H = j || N, {
      colorSchemes: V = d,
      components: K = h,
      cssVarPrefix: Z
    } = H, Y = Object.keys(V).filter((Ee) => !!V[Ee]).join(","), J = R.useMemo(() => Y.split(","), [Y]), $ = typeof s == "string" ? s : s.light, q = typeof s == "string" ? s : s.dark, X = V[$] && V[q] ? L : ((yt = (dt = V[H.defaultColorScheme]) == null ? void 0 : dt.palette) == null ? void 0 : yt.mode) || ((wt = H.palette) == null ? void 0 : wt.mode), {
      mode: ie,
      setMode: z,
      systemMode: fe,
      lightColorScheme: Te,
      darkColorScheme: Fe,
      colorScheme: nt,
      setColorScheme: be
    } = Th({
      supportedColorSchemes: J,
      defaultLightColorScheme: $,
      defaultDarkColorScheme: q,
      modeStorageKey: T,
      colorSchemeStorageKey: x,
      defaultMode: X,
      storageManager: C,
      storageWindow: I,
      noSsr: D
    });
    let Re = ie, me = nt;
    Q && (Re = te.mode, me = te.colorScheme), process.env.NODE_ENV !== "production" && A && !H.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let Ae = me || H.defaultColorScheme;
    H.vars && !A && (Ae = H.defaultColorScheme);
    const ze = R.useMemo(() => {
      var He;
      const Ee = ((He = H.generateThemeVars) == null ? void 0 : He.call(H)) || H.vars, ue = {
        ...H,
        components: K,
        colorSchemes: V,
        cssVarPrefix: Z,
        vars: Ee
      };
      if (typeof ue.generateSpacing == "function" && (ue.spacing = ue.generateSpacing()), Ae) {
        const qe = V[Ae];
        qe && typeof qe == "object" && Object.keys(qe).forEach((De) => {
          qe[De] && typeof qe[De] == "object" ? ue[De] = {
            ...ue[De],
            ...qe[De]
          } : ue[De] = qe[De];
        });
      }
      return a ? a(ue) : ue;
    }, [H, Ae, K, V, Z]), ee = H.colorSchemeSelector;
    Bn(() => {
      if (me && m && ee && ee !== "media") {
        const Ee = ee;
        let ue = ee;
        if (Ee === "class" && (ue = ".%s"), Ee === "data" && (ue = "[data-%s]"), Ee != null && Ee.startsWith("data-") && !Ee.includes("%s") && (ue = `[${Ee}="%s"]`), ue.startsWith("."))
          m.classList.remove(...J.map((He) => ue.substring(1).replace("%s", He))), m.classList.add(ue.substring(1).replace("%s", me));
        else {
          const He = ue.replace("%s", me).match(/\[([^\]]+)\]/);
          if (He) {
            const [qe, De] = He[1].split("=");
            De || J.forEach((Hn) => {
              m.removeAttribute(qe.replace(me, Hn));
            }), m.setAttribute(qe, De ? De.replace(/"|'/g, "") : "");
          } else
            m.setAttribute(ue, me);
        }
      }
    }, [me, ee, m, J]), R.useEffect(() => {
      let Ee;
      if (w && M.current && P) {
        const ue = P.createElement("style");
        ue.appendChild(P.createTextNode(Eh)), P.head.appendChild(ue), window.getComputedStyle(P.body), Ee = setTimeout(() => {
          P.head.removeChild(ue);
        }, 1);
      }
      return () => {
        clearTimeout(Ee);
      };
    }, [me, w, P]), R.useEffect(() => (M.current = !0, () => {
      M.current = !1;
    }), []);
    const Qe = R.useMemo(() => ({
      allColorSchemes: J,
      colorScheme: me,
      darkColorScheme: Fe,
      lightColorScheme: Te,
      mode: Re,
      setColorScheme: be,
      setMode: process.env.NODE_ENV === "production" ? z : (Ee) => {
        ze.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), z(Ee);
      },
      systemMode: fe
    }), [J, me, Fe, Te, Re, be, z, fe, ze.colorSchemeSelector]);
    let rt = !0;
    (_ || H.cssVariables === !1 || Q && (W == null ? void 0 : W.cssVarPrefix) === Z) && (rt = !1);
    const ot = /* @__PURE__ */ Je(R.Fragment, {
      children: [/* @__PURE__ */ B(Hr, {
        themeId: j ? t : void 0,
        theme: ze,
        children: S
      }), rt && /* @__PURE__ */ B(ca, {
        styles: ((ft = ze.generateStyleSheets) == null ? void 0 : ft.call(ze)) || []
      })]
    });
    return Q ? ot : /* @__PURE__ */ B(u.Provider, {
      value: Qe,
      children: ot
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
    getInitColorSchemeScript: (b) => bh({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: v,
      defaultDarkColorScheme: p,
      modeStorageKey: r,
      ...b
    })
  };
}
function Oh(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const _l = (e, t, n, r = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = n : o && typeof o == "object" && (o[i] = n) : o && typeof o == "object" && (o[i] || (o[i] = r.includes(i) ? [] : {}), o = o[i]);
  });
}, Rh = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([a, c]) => {
      (!n || n && !n([...i, a])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...i, a], Array.isArray(c) ? [...s, a] : s) : t([...i, a], c, s));
    });
  }
  r(e);
}, Ih = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function ns(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return Rh(
    e,
    (a, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(a, c))) {
        const f = `--${n ? `${n}-` : ""}${a.join("-")}`, d = Ih(a, c);
        Object.assign(o, {
          [f]: d
        }), _l(i, a, `var(${f})`, u), _l(s, a, `var(${f}, ${d})`, u);
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
function Ph(e, t = {}) {
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
  } = ns(c, t);
  let h = d;
  const g = {}, {
    [a]: v,
    ...p
  } = i;
  if (Object.entries(p || {}).forEach(([E, T]) => {
    const {
      vars: x,
      css: w,
      varsWithDefaults: C
    } = ns(T, t);
    h = Ot(h, C), g[E] = {
      css: w,
      vars: x
    };
  }), v) {
    const {
      css: E,
      vars: T,
      varsWithDefaults: x
    } = ns(v, t);
    h = Ot(h, x), g[a] = {
      css: E,
      vars: T
    };
  }
  function y(E, T) {
    var w, C;
    let x = o;
    if (o === "class" && (x = ".%s"), o === "data" && (x = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (x = `[${o}="%s"]`), E) {
      if (x === "media")
        return e.defaultColorScheme === E ? ":root" : {
          [`@media (prefers-color-scheme: ${((C = (w = i[E]) == null ? void 0 : w.palette) == null ? void 0 : C.mode) || E})`]: {
            ":root": T
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
        vars: T
      }]) => {
        E = Ot(E, T);
      }), E;
    },
    generateStyleSheets: () => {
      var I, P;
      const E = [], T = e.defaultColorScheme || "light";
      function x(m, O) {
        Object.keys(O).length && E.push(typeof m == "string" ? {
          [m]: {
            ...O
          }
        } : m);
      }
      x(n(void 0, {
        ...f
      }), f);
      const {
        [T]: w,
        ...C
      } = g;
      if (w) {
        const {
          css: m
        } = w, O = (P = (I = i[T]) == null ? void 0 : I.palette) == null ? void 0 : P.mode, _ = !r && O ? {
          colorScheme: O,
          ...m
        } : {
          ...m
        };
        x(n(T, {
          ..._
        }), _);
      }
      return Object.entries(C).forEach(([m, {
        css: O
      }]) => {
        var A, D;
        const _ = (D = (A = i[m]) == null ? void 0 : A.palette) == null ? void 0 : D.mode, L = !r && _ ? {
          colorScheme: _,
          ...O
        } : {
          ...O
        };
        x(n(m, {
          ...L
        }), L);
      }), E;
    }
  };
}
function kh(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const Vr = {
  black: "#000",
  white: "#fff"
}, Mh = {
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
}, Wn = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Un = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, xr = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Yn = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, qn = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Gn = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Au() {
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
      paper: Vr.white,
      default: Vr.white
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
const Nh = Au();
function Du() {
  return {
    text: {
      primary: Vr.white,
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
      active: Vr.white,
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
const Bl = Du();
function Ll(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = gi(e.main, o) : t === "dark" && (e.dark = hi(e.main, i)));
}
function $h(e = "light") {
  return e === "dark" ? {
    main: Yn[200],
    light: Yn[50],
    dark: Yn[400]
  } : {
    main: Yn[700],
    light: Yn[400],
    dark: Yn[800]
  };
}
function Ah(e = "light") {
  return e === "dark" ? {
    main: Wn[200],
    light: Wn[50],
    dark: Wn[400]
  } : {
    main: Wn[500],
    light: Wn[300],
    dark: Wn[700]
  };
}
function Dh(e = "light") {
  return e === "dark" ? {
    main: Un[500],
    light: Un[300],
    dark: Un[700]
  } : {
    main: Un[700],
    light: Un[400],
    dark: Un[800]
  };
}
function _h(e = "light") {
  return e === "dark" ? {
    main: qn[400],
    light: qn[300],
    dark: qn[700]
  } : {
    main: qn[700],
    light: qn[500],
    dark: qn[900]
  };
}
function Bh(e = "light") {
  return e === "dark" ? {
    main: Gn[400],
    light: Gn[300],
    dark: Gn[700]
  } : {
    main: Gn[800],
    light: Gn[500],
    dark: Gn[900]
  };
}
function Lh(e = "light") {
  return e === "dark" ? {
    main: xr[400],
    light: xr[300],
    dark: xr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: xr[500],
    dark: xr[900]
  };
}
function ya(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...o
  } = e, i = e.primary || $h(t), s = e.secondary || Ah(t), a = e.error || Dh(t), c = e.info || _h(t), u = e.success || Bh(t), f = e.warning || Lh(t);
  function d(p) {
    const y = sl(p, Bl.text.primary) >= n ? Bl.text.primary : Nh.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const b = sl(p, y);
      b < 3 && console.error([`MUI: The contrast ratio of ${b}:1 for ${y} on ${p}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return y;
  }
  const h = ({
    color: p,
    name: y,
    mainShade: b = 500,
    lightShade: S = 300,
    darkShade: E = 700
  }) => {
    if (p = {
      ...p
    }, !p.main && p[b] && (p.main = p[b]), !p.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${b}\` property.` : bn(11, y ? ` (${y})` : "", b));
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
} });` : bn(12, y ? ` (${y})` : "", JSON.stringify(p.main)));
    return Ll(p, "light", S, r), Ll(p, "dark", E, r), p.contrastText || (p.contrastText = d(p.main)), p;
  };
  let g;
  return t === "light" ? g = Au() : t === "dark" && (g = Du()), process.env.NODE_ENV !== "production" && (g || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ot({
    // A collection of common colors.
    common: {
      ...Vr
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
    grey: Mh,
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
function jh(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Fh(e, t) {
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
function zh(e) {
  return Math.round(e * 1e5) / 1e5;
}
const jl = {
  textTransform: "uppercase"
}, Fl = '"Roboto", "Helvetica", "Arial", sans-serif';
function _u(e, t) {
  const {
    fontFamily: n = Fl,
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
  const h = r / 14, g = f || ((y) => `${y / c * h}rem`), v = (y, b, S, E, T) => ({
    fontFamily: n,
    fontWeight: y,
    fontSize: g(b),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: S,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Fl ? {
      letterSpacing: `${zh(E / b)}em`
    } : {},
    ...T,
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
    button: v(s, 14, 1.75, 0.4, jl),
    caption: v(i, 12, 1.66, 0.4),
    overline: v(i, 12, 2.66, 1, jl),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ot({
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
const Hh = 0.2, Vh = 0.14, Wh = 0.12;
function Le(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Hh})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Vh})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Wh})`].join(",");
}
const Uh = ["none", Le(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Le(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Le(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Le(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Le(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Le(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Le(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Le(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Le(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Le(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Le(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Le(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Le(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Le(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Le(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Le(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Le(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Le(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Le(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Le(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Le(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Le(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Le(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Le(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Yh = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, qh = {
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
function zl(e) {
  return `${Math.round(e)}ms`;
}
function Gh(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Kh(e) {
  const t = {
    ...Yh,
    ...e.easing
  }, n = {
    ...qh,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Gh,
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
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof s == "string" ? s : zl(s)} ${a} ${typeof c == "string" ? c : zl(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const Xh = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Jh(e) {
  return nn(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Bu(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !Jh(a) || s.startsWith("unstable_") ? delete r[s] : nn(a) && (r[s] = {
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
function Es(e = {}, ...t) {
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : bn(20));
  const f = ya(i), d = ua(e);
  let h = Ot(d, {
    mixins: Fh(d.breakpoints, r),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Uh.slice(),
    typography: _u(f, a),
    transitions: Kh(s),
    zIndex: {
      ...Xh
    }
  });
  if (h = Ot(h, u), h = t.reduce((g, v) => Ot(g, v), h), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], v = (p, y) => {
      let b;
      for (b in p) {
        const S = p[b];
        if (g.includes(b) && Object.keys(S).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const E = pt("", b);
            console.error([`MUI: The \`${y}\` component increases the CSS specificity of the \`${b}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${E}' syntax:`, JSON.stringify({
              root: {
                [`&.${E}`]: S
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
    ...oo,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, h.unstable_sx = function(v) {
    return Sn({
      sx: v,
      theme: this
    });
  }, h.toRuntimeSource = Bu, h;
}
function Cs(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Qh = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Cs(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Lu(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function ju(e) {
  return e === "dark" ? Qh : [];
}
function Zh(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...o
  } = e, i = ya(t);
  return {
    palette: i,
    opacity: {
      ...Lu(i.mode),
      ...n
    },
    overlays: r || ju(i.mode),
    ...o
  };
}
function eg(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const tg = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], ng = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return tg(e.cssVarPrefix).forEach((a) => {
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
function rg(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function F(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Rr(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : qc(e);
}
function dn(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Or(Rr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function og(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Jt = (e) => {
  try {
    return e();
  } catch {
  }
}, ig = (e = "mui") => Oh(e);
function rs(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = Zh({
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
  } = Es({
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
      ...Lu(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || ju(o)
  }, s;
}
function sg(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = eg,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...u
  } = e, f = Object.keys(n)[0], d = r || (n.light && f !== "light" ? "light" : f), h = ig(i), {
    [d]: g,
    light: v,
    dark: p,
    ...y
  } = n, b = {
    ...y
  };
  let S = g;
  if ((d === "dark" && !("dark" in n) || d === "light" && !("light" in n)) && (S = !0), !S)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${d}\` option is either missing or invalid.` : bn(21, d));
  const E = rs(b, S, u, d);
  v && !b.light && rs(b, v, void 0, "light"), p && !b.dark && rs(b, p, void 0, "dark");
  let T = {
    defaultColorScheme: d,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: c,
    getCssVar: h,
    colorSchemes: b,
    font: {
      ...jh(E.typography),
      ...E.font
    },
    spacing: og(u.spacing)
  };
  Object.keys(T.colorSchemes).forEach((P) => {
    const m = T.colorSchemes[P].palette, O = (_) => {
      const L = _.split("-"), A = L[1], D = L[2];
      return h(_, m[A][D]);
    };
    if (m.mode === "light" && (F(m.common, "background", "#fff"), F(m.common, "onBackground", "#000")), m.mode === "dark" && (F(m.common, "background", "#000"), F(m.common, "onBackground", "#fff")), rg(m, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), m.mode === "light") {
      F(m.Alert, "errorColor", ke(m.error.light, 0.6)), F(m.Alert, "infoColor", ke(m.info.light, 0.6)), F(m.Alert, "successColor", ke(m.success.light, 0.6)), F(m.Alert, "warningColor", ke(m.warning.light, 0.6)), F(m.Alert, "errorFilledBg", O("palette-error-main")), F(m.Alert, "infoFilledBg", O("palette-info-main")), F(m.Alert, "successFilledBg", O("palette-success-main")), F(m.Alert, "warningFilledBg", O("palette-warning-main")), F(m.Alert, "errorFilledColor", Jt(() => m.getContrastText(m.error.main))), F(m.Alert, "infoFilledColor", Jt(() => m.getContrastText(m.info.main))), F(m.Alert, "successFilledColor", Jt(() => m.getContrastText(m.success.main))), F(m.Alert, "warningFilledColor", Jt(() => m.getContrastText(m.warning.main))), F(m.Alert, "errorStandardBg", Me(m.error.light, 0.9)), F(m.Alert, "infoStandardBg", Me(m.info.light, 0.9)), F(m.Alert, "successStandardBg", Me(m.success.light, 0.9)), F(m.Alert, "warningStandardBg", Me(m.warning.light, 0.9)), F(m.Alert, "errorIconColor", O("palette-error-main")), F(m.Alert, "infoIconColor", O("palette-info-main")), F(m.Alert, "successIconColor", O("palette-success-main")), F(m.Alert, "warningIconColor", O("palette-warning-main")), F(m.AppBar, "defaultBg", O("palette-grey-100")), F(m.Avatar, "defaultBg", O("palette-grey-400")), F(m.Button, "inheritContainedBg", O("palette-grey-300")), F(m.Button, "inheritContainedHoverBg", O("palette-grey-A100")), F(m.Chip, "defaultBorder", O("palette-grey-400")), F(m.Chip, "defaultAvatarColor", O("palette-grey-700")), F(m.Chip, "defaultIconColor", O("palette-grey-700")), F(m.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), F(m.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), F(m.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), F(m.LinearProgress, "primaryBg", Me(m.primary.main, 0.62)), F(m.LinearProgress, "secondaryBg", Me(m.secondary.main, 0.62)), F(m.LinearProgress, "errorBg", Me(m.error.main, 0.62)), F(m.LinearProgress, "infoBg", Me(m.info.main, 0.62)), F(m.LinearProgress, "successBg", Me(m.success.main, 0.62)), F(m.LinearProgress, "warningBg", Me(m.warning.main, 0.62)), F(m.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.11)`), F(m.Slider, "primaryTrack", Me(m.primary.main, 0.62)), F(m.Slider, "secondaryTrack", Me(m.secondary.main, 0.62)), F(m.Slider, "errorTrack", Me(m.error.main, 0.62)), F(m.Slider, "infoTrack", Me(m.info.main, 0.62)), F(m.Slider, "successTrack", Me(m.success.main, 0.62)), F(m.Slider, "warningTrack", Me(m.warning.main, 0.62));
      const _ = So(m.background.default, 0.8);
      F(m.SnackbarContent, "bg", _), F(m.SnackbarContent, "color", Jt(() => m.getContrastText(_))), F(m.SpeedDialAction, "fabHoverBg", So(m.background.paper, 0.15)), F(m.StepConnector, "border", O("palette-grey-400")), F(m.StepContent, "border", O("palette-grey-400")), F(m.Switch, "defaultColor", O("palette-common-white")), F(m.Switch, "defaultDisabledColor", O("palette-grey-100")), F(m.Switch, "primaryDisabledColor", Me(m.primary.main, 0.62)), F(m.Switch, "secondaryDisabledColor", Me(m.secondary.main, 0.62)), F(m.Switch, "errorDisabledColor", Me(m.error.main, 0.62)), F(m.Switch, "infoDisabledColor", Me(m.info.main, 0.62)), F(m.Switch, "successDisabledColor", Me(m.success.main, 0.62)), F(m.Switch, "warningDisabledColor", Me(m.warning.main, 0.62)), F(m.TableCell, "border", Me(xo(m.divider, 1), 0.88)), F(m.Tooltip, "bg", xo(m.grey[700], 0.92));
    }
    if (m.mode === "dark") {
      F(m.Alert, "errorColor", Me(m.error.light, 0.6)), F(m.Alert, "infoColor", Me(m.info.light, 0.6)), F(m.Alert, "successColor", Me(m.success.light, 0.6)), F(m.Alert, "warningColor", Me(m.warning.light, 0.6)), F(m.Alert, "errorFilledBg", O("palette-error-dark")), F(m.Alert, "infoFilledBg", O("palette-info-dark")), F(m.Alert, "successFilledBg", O("palette-success-dark")), F(m.Alert, "warningFilledBg", O("palette-warning-dark")), F(m.Alert, "errorFilledColor", Jt(() => m.getContrastText(m.error.dark))), F(m.Alert, "infoFilledColor", Jt(() => m.getContrastText(m.info.dark))), F(m.Alert, "successFilledColor", Jt(() => m.getContrastText(m.success.dark))), F(m.Alert, "warningFilledColor", Jt(() => m.getContrastText(m.warning.dark))), F(m.Alert, "errorStandardBg", ke(m.error.light, 0.9)), F(m.Alert, "infoStandardBg", ke(m.info.light, 0.9)), F(m.Alert, "successStandardBg", ke(m.success.light, 0.9)), F(m.Alert, "warningStandardBg", ke(m.warning.light, 0.9)), F(m.Alert, "errorIconColor", O("palette-error-main")), F(m.Alert, "infoIconColor", O("palette-info-main")), F(m.Alert, "successIconColor", O("palette-success-main")), F(m.Alert, "warningIconColor", O("palette-warning-main")), F(m.AppBar, "defaultBg", O("palette-grey-900")), F(m.AppBar, "darkBg", O("palette-background-paper")), F(m.AppBar, "darkColor", O("palette-text-primary")), F(m.Avatar, "defaultBg", O("palette-grey-600")), F(m.Button, "inheritContainedBg", O("palette-grey-800")), F(m.Button, "inheritContainedHoverBg", O("palette-grey-700")), F(m.Chip, "defaultBorder", O("palette-grey-700")), F(m.Chip, "defaultAvatarColor", O("palette-grey-300")), F(m.Chip, "defaultIconColor", O("palette-grey-300")), F(m.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), F(m.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), F(m.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), F(m.LinearProgress, "primaryBg", ke(m.primary.main, 0.5)), F(m.LinearProgress, "secondaryBg", ke(m.secondary.main, 0.5)), F(m.LinearProgress, "errorBg", ke(m.error.main, 0.5)), F(m.LinearProgress, "infoBg", ke(m.info.main, 0.5)), F(m.LinearProgress, "successBg", ke(m.success.main, 0.5)), F(m.LinearProgress, "warningBg", ke(m.warning.main, 0.5)), F(m.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.13)`), F(m.Slider, "primaryTrack", ke(m.primary.main, 0.5)), F(m.Slider, "secondaryTrack", ke(m.secondary.main, 0.5)), F(m.Slider, "errorTrack", ke(m.error.main, 0.5)), F(m.Slider, "infoTrack", ke(m.info.main, 0.5)), F(m.Slider, "successTrack", ke(m.success.main, 0.5)), F(m.Slider, "warningTrack", ke(m.warning.main, 0.5));
      const _ = So(m.background.default, 0.98);
      F(m.SnackbarContent, "bg", _), F(m.SnackbarContent, "color", Jt(() => m.getContrastText(_))), F(m.SpeedDialAction, "fabHoverBg", So(m.background.paper, 0.15)), F(m.StepConnector, "border", O("palette-grey-600")), F(m.StepContent, "border", O("palette-grey-600")), F(m.Switch, "defaultColor", O("palette-grey-300")), F(m.Switch, "defaultDisabledColor", O("palette-grey-600")), F(m.Switch, "primaryDisabledColor", ke(m.primary.main, 0.55)), F(m.Switch, "secondaryDisabledColor", ke(m.secondary.main, 0.55)), F(m.Switch, "errorDisabledColor", ke(m.error.main, 0.55)), F(m.Switch, "infoDisabledColor", ke(m.info.main, 0.55)), F(m.Switch, "successDisabledColor", ke(m.success.main, 0.55)), F(m.Switch, "warningDisabledColor", ke(m.warning.main, 0.55)), F(m.TableCell, "border", ke(xo(m.divider, 1), 0.68)), F(m.Tooltip, "bg", xo(m.grey[700], 0.92));
    }
    dn(m.background, "default"), dn(m.background, "paper"), dn(m.common, "background"), dn(m.common, "onBackground"), dn(m, "divider"), Object.keys(m).forEach((_) => {
      const L = m[_];
      _ !== "tonalOffset" && L && typeof L == "object" && (L.main && F(m[_], "mainChannel", Or(Rr(L.main))), L.light && F(m[_], "lightChannel", Or(Rr(L.light))), L.dark && F(m[_], "darkChannel", Or(Rr(L.dark))), L.contrastText && F(m[_], "contrastTextChannel", Or(Rr(L.contrastText))), _ === "text" && (dn(m[_], "primary"), dn(m[_], "secondary")), _ === "action" && (L.active && dn(m[_], "active"), L.selected && dn(m[_], "selected")));
    });
  }), T = t.reduce((P, m) => Ot(P, m), T);
  const x = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: ng(T)
  }, {
    vars: w,
    generateThemeVars: C,
    generateStyleSheets: I
  } = Ph(T, x);
  return T.vars = w, Object.entries(T.colorSchemes[T.defaultColorScheme]).forEach(([P, m]) => {
    T[P] = m;
  }), T.generateThemeVars = C, T.generateStyleSheets = I, T.generateSpacing = function() {
    return Su(u.spacing, Zs(this));
  }, T.getColorSchemeSelector = kh(a), T.spacing = T.generateSpacing(), T.shouldSkipGeneratingVar = s, T.unstable_sxConfig = {
    ...oo,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, T.unstable_sx = function(m) {
    return Sn({
      sx: m,
      theme: this
    });
  }, T.toRuntimeSource = Bu, T;
}
function Hl(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: ya({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function ki(e = {}, ...t) {
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
      return Es(e, ...t);
    let f = n;
    "palette" in e || u[a] && (u[a] !== !0 ? f = u[a].palette : a === "dark" && (f = {
      mode: "dark"
    }));
    const d = Es({
      ...e,
      palette: f
    }, ...t);
    return d.defaultColorScheme = a, d.colorSchemes = u, d.palette.mode === "light" && (d.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: d.palette
    }, Hl(d, "dark", u.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: d.palette
    }, Hl(d, "light", u.light)), d;
  }
  return !n && !("light" in u) && a === "light" && (u.light = !0), sg({
    ...s,
    colorSchemes: u,
    defaultColorScheme: a,
    ...typeof r != "boolean" && r
  }, ...t);
}
const va = ki(), qt = "$$material";
function hr() {
  const e = fa(va);
  return process.env.NODE_ENV !== "production" && R.useDebugValue(e), e[qt] || e;
}
function Fu(e) {
  return /* @__PURE__ */ B(wu, {
    ...e,
    defaultTheme: va,
    themeId: qt
  });
}
process.env.NODE_ENV !== "production" && (Fu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: l.oneOfType([l.array, l.func, l.number, l.object, l.string, l.bool])
});
function ag(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const zu = (e) => ag(e) && e !== "classes", $e = rh({
  themeId: qt,
  defaultTheme: va,
  rootShouldForwardProp: zu
});
function Hu(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ B(Fu, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
function lg() {
  return su;
}
const Kt = yh;
process.env.NODE_ENV !== "production" && (l.node, l.object.isRequired);
function ht(e) {
  return gh(e);
}
class Zo {
  constructor() {
    vr(this, "mountEffect", () => {
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
    return new Zo();
  }
  static use() {
    const t = Jc(Zo.create).current, [n, r] = R.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, R.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = ug(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function cg() {
  return Zo.use();
}
function ug() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
function Vu(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Os(e, t) {
  return Os = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Os(e, t);
}
function Wu(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Os(e, t);
}
const Vl = {
  disabled: !1
};
var dg = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.shape({
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
const ei = k.createContext(null);
var fg = function(t) {
  return t.scrollTop;
}, Ir = "unmounted", kn = "exited", Mn = "entering", Xn = "entered", Rs = "exiting", cn = /* @__PURE__ */ function(e) {
  Wu(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = o, a = s && !s.isMounting ? r.enter : r.appear, c;
    return i.appearStatus = null, r.in ? a ? (c = kn, i.appearStatus = Mn) : c = Xn : r.unmountOnExit || r.mountOnEnter ? c = Ir : c = kn, i.state = {
      status: c
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === Ir ? {
      status: kn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Mn && s !== Xn && (i = Mn) : (s === Mn || s === Xn) && (i = Rs);
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
      if (this.cancelNextCallback(), i === Mn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Qn.findDOMNode(this);
          s && fg(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === kn && this.setState({
      status: Ir
    });
  }, n.performEnter = function(o) {
    var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : o, c = this.props.nodeRef ? [a] : [Qn.findDOMNode(this), a], u = c[0], f = c[1], d = this.getTimeouts(), h = a ? d.appear : d.enter;
    if (!o && !s || Vl.disabled) {
      this.safeSetState({
        status: Xn
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, f), this.safeSetState({
      status: Mn
    }, function() {
      i.props.onEntering(u, f), i.onTransitionEnd(h, function() {
        i.safeSetState({
          status: Xn
        }, function() {
          i.props.onEntered(u, f);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : Qn.findDOMNode(this);
    if (!i || Vl.disabled) {
      this.safeSetState({
        status: kn
      }, function() {
        o.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: Rs
    }, function() {
      o.props.onExiting(a), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: kn
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
    var s = this.props.nodeRef ? this.props.nodeRef.current : Qn.findDOMNode(this), a = o == null && !this.props.addEndListener;
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
    if (o === Ir)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var a = Vu(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ k.createElement(ei.Provider, {
        value: null
      }, typeof s == "function" ? s(o, a) : k.cloneElement(k.Children.only(s), a))
    );
  }, t;
}(k.Component);
cn.contextType = ei;
cn.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var n = dg;
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
function Kn() {
}
cn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Kn,
  onEntering: Kn,
  onEntered: Kn,
  onExit: Kn,
  onExiting: Kn,
  onExited: Kn
};
cn.UNMOUNTED = Ir;
cn.EXITED = kn;
cn.ENTERING = Mn;
cn.ENTERED = Xn;
cn.EXITING = Rs;
function pg(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ba(e, t) {
  var n = function(i) {
    return t && $o(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && bf.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function mg(e, t) {
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
function Nn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function hg(e, t) {
  return ba(e.children, function(n) {
    return Ao(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Nn(n, "appear", e),
      enter: Nn(n, "enter", e),
      exit: Nn(n, "exit", e)
    });
  });
}
function gg(e, t, n) {
  var r = ba(e.children), o = mg(t, r);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if ($o(s)) {
      var a = i in t, c = i in r, u = t[i], f = $o(u) && !u.props.in;
      c && (!a || f) ? o[i] = Ao(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: Nn(s, "exit", e),
        enter: Nn(s, "enter", e)
      }) : !c && a && !f ? o[i] = Ao(s, {
        in: !1
      }) : c && a && $o(u) && (o[i] = Ao(s, {
        onExited: n.bind(null, s),
        in: u.props.in,
        exit: Nn(s, "exit", e),
        enter: Nn(s, "enter", e)
      }));
    }
  }), o;
}
var yg = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, vg = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, xa = /* @__PURE__ */ function(e) {
  Wu(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = i.handleExited.bind(pg(i));
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
      children: c ? hg(o, a) : gg(o, s, a),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var s = ba(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(a) {
      var c = Xo({}, a.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, a = Vu(o, ["component", "childFactory"]), c = this.state.contextValue, u = yg(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, i === null ? /* @__PURE__ */ k.createElement(ei.Provider, {
      value: c
    }, u) : /* @__PURE__ */ k.createElement(ei.Provider, {
      value: c
    }, /* @__PURE__ */ k.createElement(i, a, u));
  }, t;
}(k.Component);
xa.propTypes = process.env.NODE_ENV !== "production" ? {
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
xa.defaultProps = vg;
function Uu(e) {
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
  } = e, [f, d] = R.useState(!1), h = Ce(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, v = Ce(n.child, f && n.childLeaving, r && n.childPulsate);
  return !a && !f && d(!0), R.useEffect(() => {
    if (!a && c != null) {
      const p = setTimeout(c, u);
      return () => {
        clearTimeout(p);
      };
    }
  }, [c, a, u]), /* @__PURE__ */ B("span", {
    className: h,
    style: g,
    children: /* @__PURE__ */ B("span", {
      className: v
    })
  });
}
process.env.NODE_ENV !== "production" && (Uu.propTypes = {
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
const Dt = mt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Is = 550, bg = 80, xg = lo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Sg = lo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, wg = lo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Tg = $e("span", {
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
}), Eg = $e(Uu, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Dt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${xg};
    animation-duration: ${Is}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Dt.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Dt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Dt.childLeaving} {
    opacity: 0;
    animation-name: ${Sg};
    animation-duration: ${Is}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Dt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${wg};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Yu = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ht({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s,
    ...a
  } = r, [c, u] = R.useState([]), f = R.useRef(0), d = R.useRef(null);
  R.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [c]);
  const h = R.useRef(!1), g = Zn(), v = R.useRef(null), p = R.useRef(null), y = R.useCallback((T) => {
    const {
      pulsate: x,
      rippleX: w,
      rippleY: C,
      rippleSize: I,
      cb: P
    } = T;
    u((m) => [...m, /* @__PURE__ */ B(Eg, {
      classes: {
        ripple: Ce(i.ripple, Dt.ripple),
        rippleVisible: Ce(i.rippleVisible, Dt.rippleVisible),
        ripplePulsate: Ce(i.ripplePulsate, Dt.ripplePulsate),
        child: Ce(i.child, Dt.child),
        childLeaving: Ce(i.childLeaving, Dt.childLeaving),
        childPulsate: Ce(i.childPulsate, Dt.childPulsate)
      },
      timeout: Is,
      pulsate: x,
      rippleX: w,
      rippleY: C,
      rippleSize: I
    }, f.current)]), f.current += 1, d.current = P;
  }, [i]), b = R.useCallback((T = {}, x = {}, w = () => {
  }) => {
    const {
      pulsate: C = !1,
      center: I = o || x.pulsate,
      fakeElement: P = !1
      // For test purposes
    } = x;
    if ((T == null ? void 0 : T.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (T == null ? void 0 : T.type) === "touchstart" && (h.current = !0);
    const m = P ? null : p.current, O = m ? m.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let _, L, A;
    if (I || T === void 0 || T.clientX === 0 && T.clientY === 0 || !T.clientX && !T.touches)
      _ = Math.round(O.width / 2), L = Math.round(O.height / 2);
    else {
      const {
        clientX: D,
        clientY: M
      } = T.touches && T.touches.length > 0 ? T.touches[0] : T;
      _ = Math.round(D - O.left), L = Math.round(M - O.top);
    }
    if (I)
      A = Math.sqrt((2 * O.width ** 2 + O.height ** 2) / 3), A % 2 === 0 && (A += 1);
    else {
      const D = Math.max(Math.abs((m ? m.clientWidth : 0) - _), _) * 2 + 2, M = Math.max(Math.abs((m ? m.clientHeight : 0) - L), L) * 2 + 2;
      A = Math.sqrt(D ** 2 + M ** 2);
    }
    T != null && T.touches ? v.current === null && (v.current = () => {
      y({
        pulsate: C,
        rippleX: _,
        rippleY: L,
        rippleSize: A,
        cb: w
      });
    }, g.start(bg, () => {
      v.current && (v.current(), v.current = null);
    })) : y({
      pulsate: C,
      rippleX: _,
      rippleY: L,
      rippleSize: A,
      cb: w
    });
  }, [o, y, g]), S = R.useCallback(() => {
    b({}, {
      pulsate: !0
    });
  }, [b]), E = R.useCallback((T, x) => {
    if (g.clear(), (T == null ? void 0 : T.type) === "touchend" && v.current) {
      v.current(), v.current = null, g.start(0, () => {
        E(T, x);
      });
      return;
    }
    v.current = null, u((w) => w.length > 0 ? w.slice(1) : w), d.current = x;
  }, [g]);
  return R.useImperativeHandle(n, () => ({
    pulsate: S,
    start: b,
    stop: E
  }), [S, b, E]), /* @__PURE__ */ B(Tg, {
    className: Ce(Dt.root, i.root, s),
    ref: p,
    ...a,
    children: /* @__PURE__ */ B(xa, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (Yu.propTypes = {
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
function Cg(e) {
  return pt("MuiButtonBase", e);
}
const Og = mt("MuiButtonBase", ["root", "disabled", "focusVisible"]), Rg = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, s = $t({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Cg, o);
  return n && r && (s.root += ` ${r}`), s;
}, Ig = $e("button", {
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
  [`&.${Og.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), qu = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ht({
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
    onDragLeave: S,
    onFocus: E,
    onFocusVisible: T,
    onKeyDown: x,
    onKeyUp: w,
    onMouseDown: C,
    onMouseLeave: I,
    onMouseUp: P,
    onTouchEnd: m,
    onTouchMove: O,
    onTouchStart: _,
    tabIndex: L = 0,
    TouchRippleProps: A,
    touchRippleRef: D,
    type: M,
    ...W
  } = r, te = R.useRef(null), Q = cg(), N = kt(Q.ref, D), [j, H] = R.useState(!1);
  u && j && H(!1), R.useImperativeHandle(o, () => ({
    focusVisible: () => {
      H(!0), te.current.focus();
    }
  }), []);
  const V = Q.shouldMount && !f && !u;
  R.useEffect(() => {
    j && h && !f && Q.pulsate();
  }, [f, h, j, Q]);
  const K = fn(Q, "start", C, d), Z = fn(Q, "stop", b, d), Y = fn(Q, "stop", S, d), J = fn(Q, "stop", P, d), $ = fn(Q, "stop", (ee) => {
    j && ee.preventDefault(), I && I(ee);
  }, d), q = fn(Q, "start", _, d), X = fn(Q, "stop", m, d), ie = fn(Q, "stop", O, d), z = fn(Q, "stop", (ee) => {
    Go(ee.target) || H(!1), p && p(ee);
  }, !1), fe = pn((ee) => {
    te.current || (te.current = ee.currentTarget), Go(ee.target) && (H(!0), T && T(ee)), E && E(ee);
  }), Te = () => {
    const ee = te.current;
    return c && c !== "button" && !(ee.tagName === "A" && ee.href);
  }, Fe = pn((ee) => {
    h && !ee.repeat && j && ee.key === " " && Q.stop(ee, () => {
      Q.start(ee);
    }), ee.target === ee.currentTarget && Te() && ee.key === " " && ee.preventDefault(), x && x(ee), ee.target === ee.currentTarget && Te() && ee.key === "Enter" && !u && (ee.preventDefault(), y && y(ee));
  }), nt = pn((ee) => {
    h && ee.key === " " && j && !ee.defaultPrevented && Q.stop(ee, () => {
      Q.pulsate(ee);
    }), w && w(ee), y && ee.target === ee.currentTarget && Te() && ee.key === " " && !ee.defaultPrevented && y(ee);
  });
  let be = c;
  be === "button" && (W.href || W.to) && (be = v);
  const Re = {};
  be === "button" ? (Re.type = M === void 0 ? "button" : M, Re.disabled = u) : (!W.href && !W.to && (Re.role = "button"), u && (Re["aria-disabled"] = u));
  const me = kt(n, te), Ae = {
    ...r,
    centerRipple: i,
    component: c,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: d,
    focusRipple: h,
    tabIndex: L,
    focusVisible: j
  }, ze = Rg(Ae);
  return /* @__PURE__ */ Je(Ig, {
    as: be,
    className: Ce(ze.root, a),
    ownerState: Ae,
    onBlur: z,
    onClick: y,
    onContextMenu: Z,
    onFocus: fe,
    onKeyDown: Fe,
    onKeyUp: nt,
    onMouseDown: K,
    onMouseLeave: $,
    onMouseUp: J,
    onDragLeave: Y,
    onTouchEnd: X,
    onTouchMove: ie,
    onTouchStart: q,
    ref: me,
    tabIndex: u ? -1 : L,
    type: M,
    ...Re,
    ...W,
    children: [s, V ? /* @__PURE__ */ B(Yu, {
      ref: N,
      center: i,
      ...A
    }) : null]
  });
});
function fn(e, t, n, r = !1) {
  return pn((o) => (n && n(o), r || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (qu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Js,
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
  component: zf,
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
function Pg(e) {
  return typeof e.main == "string";
}
function kg(e, t = []) {
  if (!Pg(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Sa(e = []) {
  return ([, t]) => t && kg(t, e);
}
function Mg(e) {
  return pt("MuiCircularProgress", e);
}
mt("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const yn = 44, Ps = lo`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, ks = lo`
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
`, Ng = typeof Ps != "string" ? la`
        animation: ${Ps} 1.4s linear infinite;
      ` : null, $g = typeof ks != "string" ? la`
        animation: ${ks} 1.4s ease-in-out infinite;
      ` : null, Ag = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, i = {
    root: ["root", n, `color${we(r)}`],
    svg: ["svg"],
    circle: ["circle", `circle${we(n)}`, o && "circleDisableShrink"]
  };
  return $t(i, Mg, t);
}, Dg = $e("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${we(n.color)}`]];
  }
})(Kt(({
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
    style: Ng || {
      animation: `${Ps} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Sa()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), _g = $e("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), Bg = $e("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${we(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(Kt(({
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
    style: $g || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${ks} 1.4s ease-in-out infinite`
    }
  }]
}))), Gu = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ht({
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
  }, v = Ag(g), p = {}, y = {}, b = {};
  if (d === "determinate") {
    const S = 2 * Math.PI * ((yn - u) / 2);
    p.strokeDasharray = S.toFixed(3), b["aria-valuenow"] = Math.round(f), p.strokeDashoffset = `${((100 - f) / 100 * S).toFixed(3)}px`, y.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ B(Dg, {
    className: Ce(v.root, o),
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
    children: /* @__PURE__ */ B(_g, {
      className: v.svg,
      ownerState: g,
      viewBox: `${yn / 2} ${yn / 2} ${yn} ${yn}`,
      children: /* @__PURE__ */ B(Bg, {
        className: v.circle,
        style: p,
        ownerState: g,
        cx: yn,
        cy: yn,
        r: (yn - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Gu.propTypes = {
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
  disableShrink: fr(l.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
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
function Lg(e) {
  return pt("MuiButton", e);
}
const Pn = mt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), Ku = /* @__PURE__ */ R.createContext({});
process.env.NODE_ENV !== "production" && (Ku.displayName = "ButtonGroupContext");
const Xu = /* @__PURE__ */ R.createContext(void 0);
process.env.NODE_ENV !== "production" && (Xu.displayName = "ButtonGroupButtonContext");
const jg = (e) => {
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
    root: ["root", s && "loading", i, `${i}${we(t)}`, `size${we(o)}`, `${i}Size${we(o)}`, `color${we(t)}`, n && "disableElevation", r && "fullWidth", s && `loadingPosition${we(a)}`],
    startIcon: ["icon", "startIcon", `iconSize${we(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${we(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, f = $t(u, Lg, c);
  return {
    ...c,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...f
  };
}, Ju = [{
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
}], Fg = $e(qu, {
  shouldForwardProp: (e) => zu(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${we(n.color)}`], t[`size${we(n.size)}`], t[`${n.variant}Size${we(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(Kt(({
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
    [`&.${Pn.disabled}`]: {
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
        [`&.${Pn.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Pn.disabled}`]: {
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
        [`&.${Pn.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Sa()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[r].main,
        "--variant-outlinedColor": (e.vars || e).palette[r].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.5)` : Yt(e.palette[r].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[r].contrastText,
        "--variant-containedBg": (e.vars || e).palette[r].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[r].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Yt(e.palette[r].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[r].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Yt(e.palette[r].main, e.palette.action.hoverOpacity)
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
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Yt(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Yt(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${Pn.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Pn.disabled}`]: {
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
        [`&.${Pn.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), zg = $e("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, n.loading && t.startIconLoadingStart, t[`iconSize${we(n.size)}`]];
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
  }, ...Ju]
})), Hg = $e("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, n.loading && t.endIconLoadingEnd, t[`iconSize${we(n.size)}`]];
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
  }, ...Ju]
})), Vg = $e("span", {
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
})), Wl = $e("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, t) => t.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), wa = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = R.useContext(Ku), o = R.useContext(Xu), i = Lr(r, t), s = ht({
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
    loading: S = null,
    loadingIndicator: E,
    loadingPosition: T = "center",
    size: x = "medium",
    startIcon: w,
    type: C,
    variant: I = "text",
    ...P
  } = s, m = Qs(b), O = E ?? /* @__PURE__ */ B(Gu, {
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
    loading: S,
    loadingIndicator: O,
    loadingPosition: T,
    size: x,
    type: C,
    variant: I
  }, L = jg(_), A = (w || S && T === "start") && /* @__PURE__ */ B(zg, {
    className: L.startIcon,
    ownerState: _,
    children: w || /* @__PURE__ */ B(Wl, {
      className: L.loadingIconPlaceholder,
      ownerState: _
    })
  }), D = (v || S && T === "end") && /* @__PURE__ */ B(Hg, {
    className: L.endIcon,
    ownerState: _,
    children: v || /* @__PURE__ */ B(Wl, {
      className: L.loadingIconPlaceholder,
      ownerState: _
    })
  }), M = o || "", W = typeof S == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ B("span", {
      className: L.loadingWrapper,
      style: {
        display: "contents"
      },
      children: S && /* @__PURE__ */ B(Vg, {
        className: L.loadingIndicator,
        ownerState: _,
        children: O
      })
    })
  ) : null;
  return /* @__PURE__ */ Je(Fg, {
    ownerState: _,
    className: Ce(r.className, L.root, f, M),
    component: u,
    disabled: d || S,
    focusRipple: !g,
    focusVisibleClassName: Ce(L.focusVisible, p),
    ref: n,
    type: C,
    id: S ? m : b,
    ...P,
    classes: L,
    children: [A, T !== "end" && W, a, T === "end" && W, D]
  });
});
process.env.NODE_ENV !== "production" && (wa.propTypes = {
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
const Qu = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), ti = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Ta = Object.freeze({
  ...Qu,
  ...ti
}), Ms = Object.freeze({
  ...Ta,
  body: "",
  hidden: !1
});
function Wg(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function Ul(e, t) {
  const n = Wg(e, t);
  for (const r in Ms)
    r in ti ? r in e && !(r in n) && (n[r] = ti[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
  return n;
}
function Ug(e, t) {
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
function Yg(e, t, n) {
  const r = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let i = {};
  function s(a) {
    i = Ul(
      r[a] || o[a],
      i
    );
  }
  return s(t), n.forEach(s), Ul(e, i);
}
function Zu(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    t(o, null), n.push(o);
  });
  const r = Ug(e);
  for (const o in r) {
    const i = r[o];
    i && (t(o, Yg(e, o, i)), n.push(o));
  }
  return n;
}
const qg = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Qu
};
function os(e, t) {
  for (const n in t)
    if (n in e && typeof e[n] != typeof t[n])
      return !1;
  return !0;
}
function ed(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !os(e, qg))
    return null;
  const n = t.icons;
  for (const o in n) {
    const i = n[o];
    if (
      // Name cannot be empty
      !o || // Must have body
      typeof i.body != "string" || // Check other props
      !os(
        i,
        Ms
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
      !os(
        i,
        Ms
      )
    )
      return null;
  }
  return t;
}
const td = /^[a-z0-9]+(-[a-z0-9]+)*$/, Mi = (e, t, n, r = "") => {
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
    return t && !jo(u) ? null : u;
  }
  const i = o[0], s = i.split("-");
  if (s.length > 1) {
    const a = {
      provider: r,
      prefix: s.shift(),
      name: s.join("-")
    };
    return t && !jo(a) ? null : a;
  }
  if (n && r === "") {
    const a = {
      provider: r,
      prefix: "",
      name: i
    };
    return t && !jo(a, n) ? null : a;
  }
  return null;
}, jo = (e, t) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e.prefix === "" || e.prefix) && e.name) : !1, Yl = /* @__PURE__ */ Object.create(null);
function Gg(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function ir(e, t) {
  const n = Yl[e] || (Yl[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = Gg(e, t));
}
function nd(e, t) {
  return ed(t) ? Zu(t, (n, r) => {
    r ? e.icons[n] = r : e.missing.add(n);
  }) : [];
}
function Kg(e, t, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[t] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let Wr = !1;
function rd(e) {
  return typeof e == "boolean" && (Wr = e), Wr;
}
function ql(e) {
  const t = typeof e == "string" ? Mi(e, !0, Wr) : e;
  if (t) {
    const n = ir(t.provider, t.prefix), r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function Xg(e, t) {
  const n = Mi(e, !0, Wr);
  if (!n)
    return !1;
  const r = ir(n.provider, n.prefix);
  return t ? Kg(r, n.name, t) : (r.missing.add(n.name), !0);
}
function Jg(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), Wr && !t && !e.prefix) {
    let o = !1;
    return ed(e) && (e.prefix = "", Zu(e, (i, s) => {
      Xg(i, s) && (o = !0);
    })), o;
  }
  const n = e.prefix;
  if (!jo({
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = ir(t, n);
  return !!nd(r, e);
}
const od = Object.freeze({
  width: null,
  height: null
}), id = Object.freeze({
  // Dimensions
  ...od,
  // Transformations
  ...ti
}), Qg = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Zg = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Gl(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const r = e.split(Qg);
  if (r === null || !r.length)
    return e;
  const o = [];
  let i = r.shift(), s = Zg.test(i);
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
function ey(e, t = "defs") {
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
function ty(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function ny(e, t, n) {
  const r = ey(e);
  return ty(r.defs, t + r.content + n);
}
const ry = (e) => e === "unset" || e === "undefined" || e === "none";
function oy(e, t) {
  const n = {
    ...Ta,
    ...e
  }, r = {
    ...id,
    ...t
  }, o = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let i = n.body;
  [n, r].forEach((p) => {
    const y = [], b = p.hFlip, S = p.vFlip;
    let E = p.rotate;
    b ? S ? E += 2 : (y.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), y.push("scale(-1 1)"), o.top = o.left = 0) : S && (y.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), y.push("scale(1 -1)"), o.top = o.left = 0);
    let T;
    switch (E < 0 && (E -= Math.floor(E / 4) * 4), E = E % 4, E) {
      case 1:
        T = o.height / 2 + o.top, y.unshift(
          "rotate(90 " + T.toString() + " " + T.toString() + ")"
        );
        break;
      case 2:
        y.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        T = o.width / 2 + o.left, y.unshift(
          "rotate(-90 " + T.toString() + " " + T.toString() + ")"
        );
        break;
    }
    E % 2 === 1 && (o.left !== o.top && (T = o.left, o.left = o.top, o.top = T), o.width !== o.height && (T = o.width, o.width = o.height, o.height = T)), y.length && (i = ny(
      i,
      '<g transform="' + y.join(" ") + '">',
      "</g>"
    ));
  });
  const s = r.width, a = r.height, c = o.width, u = o.height;
  let f, d;
  s === null ? (d = a === null ? "1em" : a === "auto" ? u : a, f = Gl(d, c / u)) : (f = s === "auto" ? c : s, d = a === null ? Gl(f, u / c) : a === "auto" ? u : a);
  const h = {}, g = (p, y) => {
    ry(y) || (h[p] = y.toString());
  };
  g("width", f), g("height", d);
  const v = [o.left, o.top, c, u];
  return h.viewBox = v.join(" "), {
    attributes: h,
    viewBox: v,
    body: i
  };
}
const iy = /\sid="(\S+)"/g, sy = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let ay = 0;
function ly(e, t = sy) {
  const n = [];
  let r;
  for (; r = iy.exec(e); )
    n.push(r[1]);
  if (!n.length)
    return e;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((i) => {
    const s = typeof t == "function" ? t(i) : t + (ay++).toString(), a = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"),
      "$1" + s + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const Ns = /* @__PURE__ */ Object.create(null);
function cy(e, t) {
  Ns[e] = t;
}
function $s(e) {
  return Ns[e] || Ns[""];
}
function Ea(e) {
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
const Ca = /* @__PURE__ */ Object.create(null), Sr = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Fo = [];
for (; Sr.length > 0; )
  Sr.length === 1 || Math.random() > 0.5 ? Fo.push(Sr.shift()) : Fo.push(Sr.pop());
Ca[""] = Ea({
  resources: ["https://api.iconify.design"].concat(Fo)
});
function uy(e, t) {
  const n = Ea(t);
  return n === null ? !1 : (Ca[e] = n, !0);
}
function Oa(e) {
  return Ca[e];
}
const dy = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Kl = dy();
function fy(e, t) {
  const n = Oa(e);
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
function py(e) {
  return e === 404;
}
const my = (e, t, n) => {
  const r = [], o = fy(e, t), i = "icons";
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
function hy(e) {
  if (typeof e == "string") {
    const t = Oa(e);
    if (t)
      return t.path;
  }
  return "/";
}
const gy = (e, t, n) => {
  if (!Kl) {
    n("abort", 424);
    return;
  }
  let r = hy(t.provider);
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
  Kl(e + r).then((i) => {
    const s = i.status;
    if (s !== 200) {
      setTimeout(() => {
        n(py(s) ? "abort" : "next", s);
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
}, yy = {
  prepare: my,
  send: gy
};
function vy(e) {
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
    const i = o.provider, s = o.prefix, a = o.name, c = n[i] || (n[i] = /* @__PURE__ */ Object.create(null)), u = c[s] || (c[s] = ir(i, s));
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
function sd(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
  });
}
function by(e) {
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
      }), s.pending.length !== a && (n || sd([e], i.id), i.callback(
        s.loaded.slice(0),
        s.missing.slice(0),
        s.pending.slice(0),
        i.abort
      ));
    });
  }));
}
let xy = 0;
function Sy(e, t, n) {
  const r = xy++, o = sd.bind(null, n, r);
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
function wy(e, t = !0, n = !1) {
  const r = [];
  return e.forEach((o) => {
    const i = typeof o == "string" ? Mi(o, t, n) : o;
    i && r.push(i);
  }), r;
}
var Ty = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Ey(e, t, n, r) {
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
  function S() {
    c = "failed", g.forEach((w) => {
      w(void 0, f);
    });
  }
  function E() {
    h.forEach((w) => {
      w.status === "pending" && (w.status = "aborted");
    }), h = [];
  }
  function T(w, C, I) {
    const P = C !== "success";
    switch (h = h.filter((m) => m !== w), c) {
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
      f = I, S();
      return;
    }
    if (P) {
      f = I, h.length || (s.length ? x() : S());
      return;
    }
    if (v(), E(), !e.random) {
      const m = e.resources.indexOf(w.resource);
      m !== -1 && m !== e.index && (e.index = m);
    }
    c = "completed", g.forEach((m) => {
      m(I);
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
          v(), c === "pending" && (E(), S());
        }, e.timeout);
        return;
      }
      S();
      return;
    }
    const C = {
      status: "pending",
      resource: w,
      callback: (I, P) => {
        T(C, I, P);
      }
    };
    h.push(C), u++, d = setTimeout(x, e.rotate), n(w, t, C.callback);
  }
  return setTimeout(x), b;
}
function ad(e) {
  const t = {
    ...Ty,
    ...e
  };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === "pending");
  }
  function o(a, c, u) {
    const f = Ey(
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
function Xl() {
}
const is = /* @__PURE__ */ Object.create(null);
function Cy(e) {
  if (!is[e]) {
    const t = Oa(e);
    if (!t)
      return;
    const n = ad(t), r = {
      config: t,
      redundancy: n
    };
    is[e] = r;
  }
  return is[e];
}
function Oy(e, t, n) {
  let r, o;
  if (typeof e == "string") {
    const i = $s(e);
    if (!i)
      return n(void 0, 424), Xl;
    o = i.send;
    const s = Cy(e);
    s && (r = s.redundancy);
  } else {
    const i = Ea(e);
    if (i) {
      r = ad(i);
      const s = e.resources ? e.resources[0] : "", a = $s(s);
      a && (o = a.send);
    }
  }
  return !r || !o ? (n(void 0, 424), Xl) : r.query(t, o, n)().abort;
}
function Jl() {
}
function Ry(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, by(e);
  }));
}
function Iy(e) {
  const t = [], n = [];
  return e.forEach((r) => {
    (r.match(td) ? t : n).push(r);
  }), {
    valid: t,
    invalid: n
  };
}
function wr(e, t, n) {
  function r() {
    const o = e.pendingIcons;
    t.forEach((i) => {
      o && o.delete(i), e.icons[i] || e.missing.add(i);
    });
  }
  if (n && typeof n == "object")
    try {
      if (!nd(e, n).length) {
        r();
        return;
      }
    } catch (o) {
      console.error(o);
    }
  r(), Ry(e);
}
function Ql(e, t) {
  e instanceof Promise ? e.then((n) => {
    t(n);
  }).catch(() => {
    t(null);
  }) : t(e);
}
function Py(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = e, o = e.iconsToLoad;
    if (delete e.iconsToLoad, !o || !o.length)
      return;
    const i = e.loadIcon;
    if (e.loadIcons && (o.length > 1 || !i)) {
      Ql(
        e.loadIcons(o, r, n),
        (f) => {
          wr(e, o, f);
        }
      );
      return;
    }
    if (i) {
      o.forEach((f) => {
        const d = i(f, r, n);
        Ql(d, (h) => {
          const g = h ? {
            prefix: r,
            icons: {
              [f]: h
            }
          } : null;
          wr(e, [f], g);
        });
      });
      return;
    }
    const { valid: s, invalid: a } = Iy(o);
    if (a.length && wr(e, a, null), !s.length)
      return;
    const c = r.match(td) ? $s(n) : null;
    if (!c) {
      wr(e, s, null);
      return;
    }
    c.prepare(n, r, s).forEach((f) => {
      Oy(n, f, (d) => {
        wr(e, f.icons, d);
      });
    });
  }));
}
const ky = (e, t) => {
  const n = wy(e, !0, rd()), r = vy(n);
  if (!r.pending.length) {
    let c = !0;
    return t && setTimeout(() => {
      c && t(
        r.loaded,
        r.missing,
        r.pending,
        Jl
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
    s = u, a = f, i.push(ir(u, f));
    const d = o[u] || (o[u] = /* @__PURE__ */ Object.create(null));
    d[f] || (d[f] = []);
  }), r.pending.forEach((c) => {
    const { provider: u, prefix: f, name: d } = c, h = ir(u, f), g = h.pendingIcons || (h.pendingIcons = /* @__PURE__ */ new Set());
    g.has(d) || (g.add(d), o[u][f].push(d));
  }), i.forEach((c) => {
    const u = o[c.provider][c.prefix];
    u.length && Py(c, u);
  }), t ? Sy(t, r, i) : Jl;
};
function My(e, t) {
  const n = {
    ...e
  };
  for (const r in t) {
    const o = t[r], i = typeof o;
    r in od ? (o === null || o && (i === "string" || i === "number")) && (n[r] = o) : i === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o);
  }
  return n;
}
const Ny = /[\s,]+/;
function $y(e, t) {
  t.split(Ny).forEach((n) => {
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
function Ay(e, t = 0) {
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
function Dy(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t)
    n += " " + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function _y(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function By(e) {
  return "data:image/svg+xml," + _y(e);
}
function Ly(e) {
  return 'url("' + By(e) + '")';
}
let Mr;
function jy() {
  try {
    Mr = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (e) => e
    });
  } catch {
    Mr = null;
  }
}
function Fy(e) {
  return Mr === void 0 && jy(), Mr ? Mr.createHTML(e) : e;
}
const ld = {
  ...id,
  inline: !1
}, zy = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Hy = {
  display: "inline-block"
}, As = {
  backgroundColor: "currentColor"
}, cd = {
  backgroundColor: "transparent"
}, Zl = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, ec = {
  WebkitMask: As,
  mask: As,
  background: cd
};
for (const e in ec) {
  const t = ec[e];
  for (const n in Zl)
    t[e + n] = Zl[n];
}
const Vy = {
  ...ld,
  inline: !0
};
function tc(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const Wy = (e, t, n) => {
  const r = t.inline ? Vy : ld, o = My(r, t), i = t.mode || "svg", s = {}, a = t.style || {}, c = {
    ...i === "svg" ? zy : {}
  };
  if (n) {
    const y = Mi(n, !1, !0);
    if (y) {
      const b = ["iconify"], S = [
        "provider",
        "prefix"
      ];
      for (const E of S)
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
          typeof b == "string" && $y(o, b);
          break;
        // Color: copy to style
        case "color":
          s.color = b;
          break;
        // Rotation as string
        case "rotate":
          typeof b == "string" ? o[y] = Ay(b) : typeof b == "number" && (o[y] = b);
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
  const u = oy(e, o), f = u.attributes;
  if (o.inline && (s.verticalAlign = "-0.125em"), i === "svg") {
    c.style = {
      ...s,
      ...a
    }, Object.assign(c, f);
    let y = 0, b = t.id;
    return typeof b == "string" && (b = b.replace(/-/g, "_")), c.dangerouslySetInnerHTML = {
      __html: Fy(ly(u.body, b ? () => b + "ID" + y++ : "iconifyReact"))
    }, An("svg", c);
  }
  const { body: d, width: h, height: g } = e, v = i === "mask" || (i === "bg" ? !1 : d.indexOf("currentColor") !== -1), p = Dy(d, {
    ...f,
    width: h + "",
    height: g + ""
  });
  return c.style = {
    ...s,
    "--svg": Ly(p),
    width: tc(f.width),
    height: tc(f.height),
    ...Hy,
    ...v ? As : cd,
    ...a
  }, An("span", c);
};
rd(!0);
cy("", yy);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !Jg(r)) && console.error(n);
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
          uy(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
function ud(e) {
  const [t, n] = Pr(!!e.ssr), [r, o] = Pr({});
  function i(g) {
    if (g) {
      const v = e.icon;
      if (typeof v == "object")
        return {
          name: "",
          data: v
        };
      const p = ql(v);
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
  const [s, a] = Pr(i(!!e.ssr));
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
    const p = ql(v);
    if (u({
      name: v,
      data: p
    }))
      if (p === void 0) {
        const y = ky([v], f);
        o({
          callback: y
        });
      } else p && ((g = e.onLoad) === null || g === void 0 || g.call(e, v));
  }
  Uo(() => (n(!0), c), []), Uo(() => {
    t && f();
  }, [e.icon, t]);
  const { name: d, data: h } = s;
  return h ? Wy({
    ...Ta,
    ...h
  }, e, d) : e.children ? e.children : e.fallback ? e.fallback : An("span", {});
}
const Uy = qs((e, t) => ud({
  ...e,
  _ref: t
}));
qs((e, t) => ud({
  inline: !0,
  ...e,
  _ref: t
}));
function ss({
  theme: e,
  ...t
}) {
  const n = qt in e ? e[qt] : void 0;
  return /* @__PURE__ */ B(Hr, {
    ...t,
    themeId: n ? qt : void 0,
    theme: n || e
  });
}
const Eo = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: Yy
} = Ch({
  themeId: qt,
  // @ts-ignore ignore module augmentation tests
  theme: () => ki({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Eo.colorSchemeStorageKey,
  modeStorageKey: Eo.modeStorageKey,
  defaultColorScheme: {
    light: Eo.defaultLightColorScheme,
    dark: Eo.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: _u(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return Sn({
        sx: r,
        theme: this
      });
    }, t;
  }
}), qy = Yy;
function Gy({
  theme: e,
  ...t
}) {
  if (typeof e == "function")
    return /* @__PURE__ */ B(ss, {
      theme: e,
      ...t
    });
  const n = qt in e ? e[qt] : e;
  return "colorSchemes" in n ? /* @__PURE__ */ B(qy, {
    theme: e,
    ...t
  }) : "vars" in n ? /* @__PURE__ */ B(ss, {
    theme: e,
    ...t
  }) : /* @__PURE__ */ B(ss, {
    theme: {
      ...e,
      vars: null
    },
    ...t
  });
}
const Ky = mt("MuiBox", ["root"]), Xy = ki(), Ni = Zm({
  themeId: qt,
  defaultTheme: Xy,
  defaultClassName: Ky.root,
  generateClassName: eu.generate
});
process.env.NODE_ENV !== "production" && (Ni.propTypes = {
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
const Ur = Nt(({ ref: e, icon: t, width: n = 20, color: r = "auto", sx: o, ...i }) => /* @__PURE__ */ B(
  Ni,
  {
    ssr: !0,
    ref: e,
    component: Uy,
    icon: t,
    sx: {
      width: n,
      height: n,
      flexShrink: 0,
      display: "inline-flex",
      color: (s) => r === "error" ? s.palette.error.main : r === "primary" ? s.palette.primary.main : r === "success" ? s.palette.success.main : "inherit",
      ...o
    },
    ...i
  }
));
Ur.displayName = "Button";
const ni = Nt(
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
    bgcolor: u,
    onClick: f,
    sx: d,
    ...h
  }) => {
    const g = _n(() => s ? /* @__PURE__ */ B(Ur, { icon: s, width: a }) : null, [s, a]);
    return /* @__PURE__ */ Je(
      wa,
      {
        variant: o ? "text" : r ? "outlined" : "contained",
        loading: t,
        disabled: n,
        startIcon: c === "start" && g,
        endIcon: c === "end" && g,
        sx: {
          minWidth: "50px",
          minHeight: "38px",
          width: i ? "40px" : "unset",
          height: i ? "40px" : "unset",
          textTransform: "none",
          fontWeight: "bold",
          borderRadius: i ? "50%" : "8px",
          padding: i ? "6px" : "auto",
          cursor: t ? "wait !important" : n ? "not-allowed !important" : "pointer",
          pointerEvents: "auto !important",
          transition: "background-color 0s, background-image 0s",
          backgroundColor: u,
          "& .MuiButton-startIcon": { svg: { color: "inherit" } },
          "& .MuiButton-endIcon": { svg: { color: "inherit" } },
          ...d
        },
        onClick: (v) => {
          v.stopPropagation(), f == null || f(v);
        },
        ...h,
        children: [
          !c && g,
          !i && e
        ]
      }
    );
  }
);
ni.displayName = "Button";
function Jy(e) {
  return pt("MuiPaper", e);
}
mt("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Qy = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return $t(i, Jy, o);
}, Zy = $e("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(Kt(({
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
}))), $i = /* @__PURE__ */ R.forwardRef(function(t, n) {
  var g;
  const r = ht({
    props: t,
    name: "MuiPaper"
  }), o = hr(), {
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
  }, h = Qy(d);
  return process.env.NODE_ENV !== "production" && o.shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ B(Zy, {
    as: s,
    ownerState: d,
    className: Ce(h.root, i),
    ref: n,
    ...f,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[a],
        ...o.vars && {
          "--Paper-overlay": (g = o.vars.overlays) == null ? void 0 : g[a]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Yt("#fff", Cs(a))}, ${Yt("#fff", Cs(a))})`
        }
      },
      ...f.style
    }
  });
});
process.env.NODE_ENV !== "production" && ($i.propTypes = {
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
  elevation: fr(Jf, (e) => {
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
const ri = Nt(({ isOutlined: e, children: t, sx: n, ...r }) => /* @__PURE__ */ B(
  $i,
  {
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
ri.displayName = "Paper";
const dd = (e) => e.scrollTop;
function oi(e, t) {
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
function Ds(e) {
  return `scale(${e}, ${e ** 2})`;
}
const ev = {
  entering: {
    opacity: 1,
    transform: Ds(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, as = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), ii = /* @__PURE__ */ R.forwardRef(function(t, n) {
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
    TransitionComponent: y = cn,
    ...b
  } = t, S = Zn(), E = R.useRef(), T = hr(), x = R.useRef(null), w = kt(x, pr(i), n), C = (D) => (M) => {
    if (D) {
      const W = x.current;
      M === void 0 ? D(W) : D(W, M);
    }
  }, I = C(f), P = C((D, M) => {
    dd(D);
    const {
      duration: W,
      delay: te,
      easing: Q
    } = oi({
      style: v,
      timeout: p,
      easing: s
    }, {
      mode: "enter"
    });
    let N;
    p === "auto" ? (N = T.transitions.getAutoHeightDuration(D.clientHeight), E.current = N) : N = W, D.style.transition = [T.transitions.create("opacity", {
      duration: N,
      delay: te
    }), T.transitions.create("transform", {
      duration: as ? N : N * 0.666,
      delay: te,
      easing: Q
    })].join(","), c && c(D, M);
  }), m = C(u), O = C(g), _ = C((D) => {
    const {
      duration: M,
      delay: W,
      easing: te
    } = oi({
      style: v,
      timeout: p,
      easing: s
    }, {
      mode: "exit"
    });
    let Q;
    p === "auto" ? (Q = T.transitions.getAutoHeightDuration(D.clientHeight), E.current = Q) : Q = M, D.style.transition = [T.transitions.create("opacity", {
      duration: Q,
      delay: W
    }), T.transitions.create("transform", {
      duration: as ? Q : Q * 0.666,
      delay: as ? W : W || Q * 0.333,
      easing: te
    })].join(","), D.style.opacity = 0, D.style.transform = Ds(0.75), d && d(D);
  }), L = C(h);
  return /* @__PURE__ */ B(y, {
    appear: o,
    in: a,
    nodeRef: x,
    onEnter: P,
    onEntered: m,
    onEntering: I,
    onExit: _,
    onExited: L,
    onExiting: O,
    addEndListener: (D) => {
      p === "auto" && S.start(E.current || 0, D), r && r(x.current, D);
    },
    timeout: p === "auto" ? null : p,
    ...b,
    children: (D, {
      ownerState: M,
      ...W
    }) => /* @__PURE__ */ R.cloneElement(i, {
      style: {
        opacity: 0,
        transform: Ds(0.75),
        visibility: D === "exited" && !a ? "hidden" : void 0,
        ...ev[D],
        ...v,
        ...i.props.style
      },
      ref: w,
      ...W
    })
  });
});
process.env.NODE_ENV !== "production" && (ii.propTypes = {
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
  children: jn.isRequired,
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
ii && (ii.muiSupportAuto = !0);
var bt = "top", zt = "bottom", Ht = "right", xt = "left", Ra = "auto", co = [bt, zt, Ht, xt], sr = "start", Yr = "end", tv = "clippingParents", fd = "viewport", Tr = "popper", nv = "reference", nc = /* @__PURE__ */ co.reduce(function(e, t) {
  return e.concat([t + "-" + sr, t + "-" + Yr]);
}, []), pd = /* @__PURE__ */ [].concat(co, [Ra]).reduce(function(e, t) {
  return e.concat([t, t + "-" + sr, t + "-" + Yr]);
}, []), rv = "beforeRead", ov = "read", iv = "afterRead", sv = "beforeMain", av = "main", lv = "afterMain", cv = "beforeWrite", uv = "write", dv = "afterWrite", fv = [rv, ov, iv, sv, av, lv, cv, uv, dv];
function an(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Mt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ln(e) {
  var t = Mt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ft(e) {
  var t = Mt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ia(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Mt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function pv(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Ft(i) || !an(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var a = o[s];
      a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function mv(e) {
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
      !Ft(o) || !an(o) || (Object.assign(o.style, a), Object.keys(i).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
const hv = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: pv,
  effect: mv,
  requires: ["computeStyles"]
};
function sn(e) {
  return e.split("-")[0];
}
var Dn = Math.max, si = Math.min, ar = Math.round;
function _s() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function md() {
  return !/^((?!chrome|android).)*safari/i.test(_s());
}
function lr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && Ft(e) && (o = e.offsetWidth > 0 && ar(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && ar(r.height) / e.offsetHeight || 1);
  var s = Ln(e) ? Mt(e) : window, a = s.visualViewport, c = !md() && n, u = (r.left + (c && a ? a.offsetLeft : 0)) / o, f = (r.top + (c && a ? a.offsetTop : 0)) / i, d = r.width / o, h = r.height / i;
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
function Pa(e) {
  var t = lr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function hd(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ia(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function hn(e) {
  return Mt(e).getComputedStyle(e);
}
function gv(e) {
  return ["table", "td", "th"].indexOf(an(e)) >= 0;
}
function En(e) {
  return ((Ln(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Ai(e) {
  return an(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ia(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    En(e)
  );
}
function rc(e) {
  return !Ft(e) || // https://github.com/popperjs/popper-core/issues/837
  hn(e).position === "fixed" ? null : e.offsetParent;
}
function yv(e) {
  var t = /firefox/i.test(_s()), n = /Trident/i.test(_s());
  if (n && Ft(e)) {
    var r = hn(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Ai(e);
  for (Ia(o) && (o = o.host); Ft(o) && ["html", "body"].indexOf(an(o)) < 0; ) {
    var i = hn(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function uo(e) {
  for (var t = Mt(e), n = rc(e); n && gv(n) && hn(n).position === "static"; )
    n = rc(n);
  return n && (an(n) === "html" || an(n) === "body" && hn(n).position === "static") ? t : n || yv(e) || t;
}
function ka(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Nr(e, t, n) {
  return Dn(e, si(t, n));
}
function vv(e, t, n) {
  var r = Nr(e, t, n);
  return r > n ? n : r;
}
function gd() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function yd(e) {
  return Object.assign({}, gd(), e);
}
function vd(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var bv = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, yd(typeof t != "number" ? t : vd(t, co));
};
function xv(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, a = sn(n.placement), c = ka(a), u = [xt, Ht].indexOf(a) >= 0, f = u ? "height" : "width";
  if (!(!i || !s)) {
    var d = bv(o.padding, n), h = Pa(i), g = c === "y" ? bt : xt, v = c === "y" ? zt : Ht, p = n.rects.reference[f] + n.rects.reference[c] - s[c] - n.rects.popper[f], y = s[c] - n.rects.reference[c], b = uo(i), S = b ? c === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, E = p / 2 - y / 2, T = d[g], x = S - h[f] - d[v], w = S / 2 - h[f] / 2 + E, C = Nr(T, w, x), I = c;
    n.modifiersData[r] = (t = {}, t[I] = C, t.centerOffset = C - w, t);
  }
}
function Sv(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || hd(t.elements.popper, o) && (t.elements.arrow = o));
}
const wv = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: xv,
  effect: Sv,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function cr(e) {
  return e.split("-")[1];
}
var Tv = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Ev(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: ar(n * o) / o || 0,
    y: ar(r * o) / o || 0
  };
}
function oc(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, a = e.position, c = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, d = e.isFixed, h = s.x, g = h === void 0 ? 0 : h, v = s.y, p = v === void 0 ? 0 : v, y = typeof f == "function" ? f({
    x: g,
    y: p
  }) : {
    x: g,
    y: p
  };
  g = y.x, p = y.y;
  var b = s.hasOwnProperty("x"), S = s.hasOwnProperty("y"), E = xt, T = bt, x = window;
  if (u) {
    var w = uo(n), C = "clientHeight", I = "clientWidth";
    if (w === Mt(n) && (w = En(n), hn(w).position !== "static" && a === "absolute" && (C = "scrollHeight", I = "scrollWidth")), w = w, o === bt || (o === xt || o === Ht) && i === Yr) {
      T = zt;
      var P = d && w === x && x.visualViewport ? x.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[C]
      );
      p -= P - r.height, p *= c ? 1 : -1;
    }
    if (o === xt || (o === bt || o === zt) && i === Yr) {
      E = Ht;
      var m = d && w === x && x.visualViewport ? x.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[I]
      );
      g -= m - r.width, g *= c ? 1 : -1;
    }
  }
  var O = Object.assign({
    position: a
  }, u && Tv), _ = f === !0 ? Ev({
    x: g,
    y: p
  }, Mt(n)) : {
    x: g,
    y: p
  };
  if (g = _.x, p = _.y, c) {
    var L;
    return Object.assign({}, O, (L = {}, L[T] = S ? "0" : "", L[E] = b ? "0" : "", L.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + p + "px)" : "translate3d(" + g + "px, " + p + "px, 0)", L));
  }
  return Object.assign({}, O, (t = {}, t[T] = S ? p + "px" : "", t[E] = b ? g + "px" : "", t.transform = "", t));
}
function Cv(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, a = n.roundOffsets, c = a === void 0 ? !0 : a, u = {
    placement: sn(t.placement),
    variation: cr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, oc(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, oc(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Ov = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Cv,
  data: {}
};
var Co = {
  passive: !0
};
function Rv(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, a = s === void 0 ? !0 : s, c = Mt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, Co);
  }), a && c.addEventListener("resize", n.update, Co), function() {
    i && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Co);
    }), a && c.removeEventListener("resize", n.update, Co);
  };
}
const Iv = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Rv,
  data: {}
};
var Pv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function zo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Pv[t];
  });
}
var kv = {
  start: "end",
  end: "start"
};
function ic(e) {
  return e.replace(/start|end/g, function(t) {
    return kv[t];
  });
}
function Ma(e) {
  var t = Mt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Na(e) {
  return lr(En(e)).left + Ma(e).scrollLeft;
}
function Mv(e, t) {
  var n = Mt(e), r = En(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, a = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = md();
    (u || !u && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a + Na(e),
    y: c
  };
}
function Nv(e) {
  var t, n = En(e), r = Ma(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Dn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Dn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -r.scrollLeft + Na(e), c = -r.scrollTop;
  return hn(o || n).direction === "rtl" && (a += Dn(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
function $a(e) {
  var t = hn(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function bd(e) {
  return ["html", "body", "#document"].indexOf(an(e)) >= 0 ? e.ownerDocument.body : Ft(e) && $a(e) ? e : bd(Ai(e));
}
function $r(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = bd(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Mt(r), s = o ? [i].concat(i.visualViewport || [], $a(r) ? r : []) : r, a = t.concat(s);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat($r(Ai(s)))
  );
}
function Bs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function $v(e, t) {
  var n = lr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function sc(e, t, n) {
  return t === fd ? Bs(Mv(e, n)) : Ln(t) ? $v(t, n) : Bs(Nv(En(e)));
}
function Av(e) {
  var t = $r(Ai(e)), n = ["absolute", "fixed"].indexOf(hn(e).position) >= 0, r = n && Ft(e) ? uo(e) : e;
  return Ln(r) ? t.filter(function(o) {
    return Ln(o) && hd(o, r) && an(o) !== "body";
  }) : [];
}
function Dv(e, t, n, r) {
  var o = t === "clippingParents" ? Av(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], a = i.reduce(function(c, u) {
    var f = sc(e, u, r);
    return c.top = Dn(f.top, c.top), c.right = si(f.right, c.right), c.bottom = si(f.bottom, c.bottom), c.left = Dn(f.left, c.left), c;
  }, sc(e, s, r));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function xd(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? sn(r) : null, i = r ? cr(r) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, c;
  switch (o) {
    case bt:
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
    case Ht:
      c = {
        x: t.x + t.width,
        y: a
      };
      break;
    case xt:
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
  var u = o ? ka(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (i) {
      case sr:
        c[u] = c[u] - (t[f] / 2 - n[f] / 2);
        break;
      case Yr:
        c[u] = c[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return c;
}
function qr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, a = n.boundary, c = a === void 0 ? tv : a, u = n.rootBoundary, f = u === void 0 ? fd : u, d = n.elementContext, h = d === void 0 ? Tr : d, g = n.altBoundary, v = g === void 0 ? !1 : g, p = n.padding, y = p === void 0 ? 0 : p, b = yd(typeof y != "number" ? y : vd(y, co)), S = h === Tr ? nv : Tr, E = e.rects.popper, T = e.elements[v ? S : h], x = Dv(Ln(T) ? T : T.contextElement || En(e.elements.popper), c, f, s), w = lr(e.elements.reference), C = xd({
    reference: w,
    element: E,
    placement: o
  }), I = Bs(Object.assign({}, E, C)), P = h === Tr ? I : w, m = {
    top: x.top - P.top + b.top,
    bottom: P.bottom - x.bottom + b.bottom,
    left: x.left - P.left + b.left,
    right: P.right - x.right + b.right
  }, O = e.modifiersData.offset;
  if (h === Tr && O) {
    var _ = O[o];
    Object.keys(m).forEach(function(L) {
      var A = [Ht, zt].indexOf(L) >= 0 ? 1 : -1, D = [bt, zt].indexOf(L) >= 0 ? "y" : "x";
      m[L] += _[D] * A;
    });
  }
  return m;
}
function _v(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, a = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? pd : c, f = cr(r), d = f ? a ? nc : nc.filter(function(v) {
    return cr(v) === f;
  }) : co, h = d.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  h.length === 0 && (h = d);
  var g = h.reduce(function(v, p) {
    return v[p] = qr(e, {
      placement: p,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[sn(p)], v;
  }, {});
  return Object.keys(g).sort(function(v, p) {
    return g[v] - g[p];
  });
}
function Bv(e) {
  if (sn(e) === Ra)
    return [];
  var t = zo(e);
  return [ic(e), t, ic(t)];
}
function Lv(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !0 : s, c = n.fallbackPlacements, u = n.padding, f = n.boundary, d = n.rootBoundary, h = n.altBoundary, g = n.flipVariations, v = g === void 0 ? !0 : g, p = n.allowedAutoPlacements, y = t.options.placement, b = sn(y), S = b === y, E = c || (S || !v ? [zo(y)] : Bv(y)), T = [y].concat(E).reduce(function(K, Z) {
      return K.concat(sn(Z) === Ra ? _v(t, {
        placement: Z,
        boundary: f,
        rootBoundary: d,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: p
      }) : Z);
    }, []), x = t.rects.reference, w = t.rects.popper, C = /* @__PURE__ */ new Map(), I = !0, P = T[0], m = 0; m < T.length; m++) {
      var O = T[m], _ = sn(O), L = cr(O) === sr, A = [bt, zt].indexOf(_) >= 0, D = A ? "width" : "height", M = qr(t, {
        placement: O,
        boundary: f,
        rootBoundary: d,
        altBoundary: h,
        padding: u
      }), W = A ? L ? Ht : xt : L ? zt : bt;
      x[D] > w[D] && (W = zo(W));
      var te = zo(W), Q = [];
      if (i && Q.push(M[_] <= 0), a && Q.push(M[W] <= 0, M[te] <= 0), Q.every(function(K) {
        return K;
      })) {
        P = O, I = !1;
        break;
      }
      C.set(O, Q);
    }
    if (I)
      for (var N = v ? 3 : 1, j = function(Z) {
        var Y = T.find(function(J) {
          var $ = C.get(J);
          if ($)
            return $.slice(0, Z).every(function(q) {
              return q;
            });
        });
        if (Y)
          return P = Y, "break";
      }, H = N; H > 0; H--) {
        var V = j(H);
        if (V === "break") break;
      }
    t.placement !== P && (t.modifiersData[r]._skip = !0, t.placement = P, t.reset = !0);
  }
}
const jv = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Lv,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ac(e, t, n) {
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
function lc(e) {
  return [bt, Ht, zt, xt].some(function(t) {
    return e[t] >= 0;
  });
}
function Fv(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = qr(t, {
    elementContext: "reference"
  }), a = qr(t, {
    altBoundary: !0
  }), c = ac(s, r), u = ac(a, o, i), f = lc(c), d = lc(u);
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
const zv = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Fv
};
function Hv(e, t, n) {
  var r = sn(e), o = [xt, bt].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], a = i[1];
  return s = s || 0, a = (a || 0) * o, [xt, Ht].indexOf(r) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function Vv(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = pd.reduce(function(f, d) {
    return f[d] = Hv(d, t.rects, i), f;
  }, {}), a = s[t.placement], c = a.x, u = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const Wv = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Vv
};
function Uv(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = xd({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const Yv = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Uv,
  data: {}
};
function qv(e) {
  return e === "x" ? "y" : "x";
}
function Gv(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !1 : s, c = n.boundary, u = n.rootBoundary, f = n.altBoundary, d = n.padding, h = n.tether, g = h === void 0 ? !0 : h, v = n.tetherOffset, p = v === void 0 ? 0 : v, y = qr(t, {
    boundary: c,
    rootBoundary: u,
    padding: d,
    altBoundary: f
  }), b = sn(t.placement), S = cr(t.placement), E = !S, T = ka(b), x = qv(T), w = t.modifiersData.popperOffsets, C = t.rects.reference, I = t.rects.popper, P = typeof p == "function" ? p(Object.assign({}, t.rects, {
    placement: t.placement
  })) : p, m = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), O = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, _ = {
    x: 0,
    y: 0
  };
  if (w) {
    if (i) {
      var L, A = T === "y" ? bt : xt, D = T === "y" ? zt : Ht, M = T === "y" ? "height" : "width", W = w[T], te = W + y[A], Q = W - y[D], N = g ? -I[M] / 2 : 0, j = S === sr ? C[M] : I[M], H = S === sr ? -I[M] : -C[M], V = t.elements.arrow, K = g && V ? Pa(V) : {
        width: 0,
        height: 0
      }, Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : gd(), Y = Z[A], J = Z[D], $ = Nr(0, C[M], K[M]), q = E ? C[M] / 2 - N - $ - Y - m.mainAxis : j - $ - Y - m.mainAxis, X = E ? -C[M] / 2 + N + $ + J + m.mainAxis : H + $ + J + m.mainAxis, ie = t.elements.arrow && uo(t.elements.arrow), z = ie ? T === "y" ? ie.clientTop || 0 : ie.clientLeft || 0 : 0, fe = (L = O == null ? void 0 : O[T]) != null ? L : 0, Te = W + q - fe - z, Fe = W + X - fe, nt = Nr(g ? si(te, Te) : te, W, g ? Dn(Q, Fe) : Q);
      w[T] = nt, _[T] = nt - W;
    }
    if (a) {
      var be, Re = T === "x" ? bt : xt, me = T === "x" ? zt : Ht, Ae = w[x], ze = x === "y" ? "height" : "width", ee = Ae + y[Re], Qe = Ae - y[me], rt = [bt, xt].indexOf(b) !== -1, ot = (be = O == null ? void 0 : O[x]) != null ? be : 0, dt = rt ? ee : Ae - C[ze] - I[ze] - ot + m.altAxis, yt = rt ? Ae + C[ze] + I[ze] - ot - m.altAxis : Qe, wt = g && rt ? vv(dt, Ae, yt) : Nr(g ? dt : ee, Ae, g ? yt : Qe);
      w[x] = wt, _[x] = wt - Ae;
    }
    t.modifiersData[r] = _;
  }
}
const Kv = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Gv,
  requiresIfExists: ["offset"]
};
function Xv(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Jv(e) {
  return e === Mt(e) || !Ft(e) ? Ma(e) : Xv(e);
}
function Qv(e) {
  var t = e.getBoundingClientRect(), n = ar(t.width) / e.offsetWidth || 1, r = ar(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Zv(e, t, n) {
  n === void 0 && (n = !1);
  var r = Ft(t), o = Ft(t) && Qv(t), i = En(t), s = lr(e, o, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((an(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  $a(i)) && (a = Jv(t)), Ft(t) ? (c = lr(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = Na(i))), {
    x: s.left + a.scrollLeft - c.x,
    y: s.top + a.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function e0(e) {
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
function t0(e) {
  var t = e0(e);
  return fv.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function n0(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function r0(e) {
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
var cc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function uc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function o0(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? cc : o;
  return function(a, c, u) {
    u === void 0 && (u = i);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, cc, i),
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
        var S = typeof b == "function" ? b(f.options) : b;
        p(), f.options = Object.assign({}, i, f.options, S), f.scrollParents = {
          reference: Ln(a) ? $r(a) : a.contextElement ? $r(a.contextElement) : [],
          popper: $r(c)
        };
        var E = t0(r0([].concat(r, f.options.modifiers)));
        return f.orderedModifiers = E.filter(function(T) {
          return T.enabled;
        }), v(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var b = f.elements, S = b.reference, E = b.popper;
          if (uc(S, E)) {
            f.rects = {
              reference: Zv(S, uo(E), f.options.strategy === "fixed"),
              popper: Pa(E)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(m) {
              return f.modifiersData[m.name] = Object.assign({}, m.data);
            });
            for (var T = 0; T < f.orderedModifiers.length; T++) {
              if (f.reset === !0) {
                f.reset = !1, T = -1;
                continue;
              }
              var x = f.orderedModifiers[T], w = x.fn, C = x.options, I = C === void 0 ? {} : C, P = x.name;
              typeof w == "function" && (f = w({
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
      update: n0(function() {
        return new Promise(function(y) {
          g.forceUpdate(), y(f);
        });
      }),
      destroy: function() {
        p(), h = !0;
      }
    };
    if (!uc(a, c))
      return g;
    g.setOptions(u).then(function(y) {
      !h && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function v() {
      f.orderedModifiers.forEach(function(y) {
        var b = y.name, S = y.options, E = S === void 0 ? {} : S, T = y.effect;
        if (typeof T == "function") {
          var x = T({
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
var i0 = [Iv, Yv, Ov, hv, Wv, jv, Kv, wv, zv], s0 = /* @__PURE__ */ o0({
  defaultModifiers: i0
});
function a0(e) {
  return typeof e == "function" ? e() : e;
}
const Gr = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, a] = R.useState(null), c = kt(/* @__PURE__ */ R.isValidElement(r) ? pr(r) : null, n);
  if (Bn(() => {
    i || a(a0(o) || document.body);
  }, [o, i]), Bn(() => {
    if (s && !i)
      return vs(n, s), () => {
        vs(n, null);
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
  return s && /* @__PURE__ */ Sf.createPortal(r, s);
});
process.env.NODE_ENV !== "production" && (Gr.propTypes = {
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
  container: l.oneOfType([rr, l.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: l.bool
});
process.env.NODE_ENV !== "production" && (Gr.propTypes = to(Gr.propTypes));
function l0(e) {
  return pt("MuiPopper", e);
}
mt("MuiPopper", ["root"]);
function c0(e, t) {
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
function ai(e) {
  return typeof e == "function" ? e() : e;
}
function Di(e) {
  return e.nodeType !== void 0;
}
function u0(e) {
  return !Di(e);
}
const d0 = (e) => {
  const {
    classes: t
  } = e;
  return $t({
    root: ["root"]
  }, l0, t);
}, f0 = {}, p0 = /* @__PURE__ */ R.forwardRef(function(t, n) {
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
  } = t, b = R.useRef(null), S = kt(b, n), E = R.useRef(null), T = kt(E, d), x = R.useRef(T);
  Bn(() => {
    x.current = T;
  }, [T]), R.useImperativeHandle(d, () => E.current, []);
  const w = c0(u, i), [C, I] = R.useState(w), [P, m] = R.useState(ai(r));
  R.useEffect(() => {
    E.current && E.current.forceUpdate();
  }), R.useEffect(() => {
    r && m(ai(r));
  }, [r]), Bn(() => {
    if (!P || !c)
      return;
    const D = (te) => {
      I(te.placement);
    };
    if (process.env.NODE_ENV !== "production" && P && Di(P) && P.nodeType === 1) {
      const te = P.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && te.top === 0 && te.left === 0 && te.right === 0 && te.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
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
        state: te
      }) => {
        D(te);
      }
    }];
    a != null && (M = M.concat(a)), f && f.modifiers != null && (M = M.concat(f.modifiers));
    const W = s0(P, b.current, {
      placement: w,
      ...f,
      modifiers: M
    });
    return x.current(W), () => {
      W.destroy(), x.current(null);
    };
  }, [P, s, a, c, f, w]);
  const O = {
    placement: C
  };
  v !== null && (O.TransitionProps = v);
  const _ = d0(t), L = g.root ?? "div", A = tp({
    elementType: L,
    externalSlotProps: h.root,
    externalForwardedProps: y,
    additionalProps: {
      role: "tooltip",
      ref: S
    },
    ownerState: t,
    className: _.root
  });
  return /* @__PURE__ */ B(L, {
    ...A,
    children: typeof o == "function" ? o(O) : o
  });
}), Sd = /* @__PURE__ */ R.forwardRef(function(t, n) {
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
    popperOptions: h = f0,
    popperRef: g,
    style: v,
    transition: p = !1,
    slotProps: y = {},
    slots: b = {},
    ...S
  } = t, [E, T] = R.useState(!0), x = () => {
    T(!1);
  }, w = () => {
    T(!0);
  };
  if (!c && !f && (!p || E))
    return null;
  let C;
  if (i)
    C = i;
  else if (r) {
    const m = ai(r);
    C = m && Di(m) ? jt(m).body : jt(null).body;
  }
  const I = !f && c && (!p || E) ? "none" : void 0, P = p ? {
    in: f,
    onEnter: x,
    onExited: w
  } : void 0;
  return /* @__PURE__ */ B(Gr, {
    disablePortal: a,
    container: C,
    children: /* @__PURE__ */ B(p0, {
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
      ...S,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: I,
        ...v
      },
      TransitionProps: P,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (Sd.propTypes = {
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
  anchorEl: fr(l.oneOfType([rr, l.object, l.func]), (e) => {
    if (e.open) {
      const t = ai(e.anchorEl);
      if (t && Di(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || u0(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
  container: l.oneOfType([rr, l.func]),
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
  popperRef: Js,
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
const m0 = $e(Sd, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), _i = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ku(), o = ht({
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
    slots: S,
    slotProps: E,
    ...T
  } = o, x = (S == null ? void 0 : S.root) ?? (a == null ? void 0 : a.Root), w = {
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
    ...T
  };
  return /* @__PURE__ */ B(m0, {
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
process.env.NODE_ENV !== "production" && (_i.propTypes = {
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
  anchorEl: l.oneOfType([rr, l.object, l.func]),
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
  container: l.oneOfType([rr, l.func]),
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
  popperRef: Js,
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
function Et(e, t) {
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
  } = i, g = f[e] || r, v = ou(d[e], o), {
    props: {
      component: p,
      ...y
    },
    internalRef: b
  } = ru({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: v
  }), S = kt(b, v == null ? void 0 : v.ref, t.ref), E = e === "root" ? p || u : p, T = tu(g, {
    ...e === "root" && !u && !f[e] && s,
    ...e !== "root" && !f[e] && s,
    ...y,
    ...E && !a && {
      as: E
    },
    ...E && a && {
      component: E
    },
    ref: S
  }, o);
  return [g, T];
}
function h0(e) {
  return pt("MuiTooltip", e);
}
const Ue = mt("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function g0(e) {
  return Math.round(e * 1e5) / 1e5;
}
const y0 = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${we(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return $t(s, h0, t);
}, v0 = $e(_i, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(Kt(({
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
      [`&[data-popper-placement*="bottom"] .${Ue.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${Ue.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${Ue.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${Ue.arrow}`]: {
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
      [`&[data-popper-placement*="right"] .${Ue.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${Ue.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Ue.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Ue.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), b0 = $e("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${we(n.placement.split("-")[0])}`]];
  }
})(Kt(({
  theme: e
}) => ({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Yt(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium,
  [`.${Ue.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${Ue.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${Ue.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${Ue.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${g0(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${Ue.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${Ue.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${Ue.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${Ue.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${Ue.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${Ue.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${Ue.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${Ue.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Ue.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Ue.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), x0 = $e("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (e, t) => t.arrow
})(Kt(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : Yt(e.palette.grey[700], 0.9),
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
let Oo = !1;
const dc = new yi();
let Er = {
  x: 0,
  y: 0
};
function Ro(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const wd = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ht({
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
    id: S,
    leaveDelay: E = 0,
    leaveTouchDelay: T = 1500,
    onClose: x,
    onOpen: w,
    open: C,
    placement: I = "bottom",
    PopperComponent: P,
    PopperProps: m = {},
    slotProps: O = {},
    slots: _ = {},
    title: L,
    TransitionComponent: A,
    TransitionProps: D,
    ...M
  } = r, W = /* @__PURE__ */ R.isValidElement(i) ? i : /* @__PURE__ */ B("span", {
    children: i
  }), te = hr(), Q = ku(), [N, j] = R.useState(), [H, V] = R.useState(null), K = R.useRef(!1), Z = h || b, Y = Zn(), J = Zn(), $ = Zn(), q = Zn(), [X, ie] = Yf({
    controlled: C,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let z = X;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: re
    } = R.useRef(C !== void 0);
    R.useEffect(() => {
      N && N.disabled && !re && L !== "" && N.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [L, N, re]);
  }
  const fe = Qs(S), Te = R.useRef(), Fe = pn(() => {
    Te.current !== void 0 && (document.body.style.WebkitUserSelect = Te.current, Te.current = void 0), q.clear();
  });
  R.useEffect(() => Fe, [Fe]);
  const nt = (re) => {
    dc.clear(), Oo = !0, ie(!0), w && !z && w(re);
  }, be = pn(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (re) => {
      dc.start(800 + E, () => {
        Oo = !1;
      }), ie(!1), x && z && x(re), Y.start(te.transitions.duration.shortest, () => {
        K.current = !1;
      });
    }
  ), Re = (re) => {
    K.current && re.type !== "touchstart" || (N && N.removeAttribute("title"), J.clear(), $.clear(), v || Oo && p ? J.start(Oo ? p : v, () => {
      nt(re);
    }) : nt(re));
  }, me = (re) => {
    J.clear(), $.start(E, () => {
      be(re);
    });
  }, [, Ae] = R.useState(!1), ze = (re) => {
    Go(re.target) || (Ae(!1), me(re));
  }, ee = (re) => {
    N || j(re.currentTarget), Go(re.target) && (Ae(!0), Re(re));
  }, Qe = (re) => {
    K.current = !0;
    const at = W.props;
    at.onTouchStart && at.onTouchStart(re);
  }, rt = (re) => {
    Qe(re), $.clear(), Y.clear(), Fe(), Te.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", q.start(y, () => {
      document.body.style.WebkitUserSelect = Te.current, Re(re);
    });
  }, ot = (re) => {
    W.props.onTouchEnd && W.props.onTouchEnd(re), Fe(), $.start(T, () => {
      be(re);
    });
  };
  R.useEffect(() => {
    if (!z)
      return;
    function re(at) {
      at.key === "Escape" && be(at);
    }
    return document.addEventListener("keydown", re), () => {
      document.removeEventListener("keydown", re);
    };
  }, [be, z]);
  const dt = kt(pr(W), j, n);
  !L && L !== 0 && (z = !1);
  const yt = R.useRef(), wt = (re) => {
    const at = W.props;
    at.onMouseMove && at.onMouseMove(re), Er = {
      x: re.clientX,
      y: re.clientY
    }, yt.current && yt.current.update();
  }, ft = {}, Ee = typeof L == "string";
  u ? (ft.title = !z && Ee && !d ? L : null, ft["aria-describedby"] = z ? fe : null) : (ft["aria-label"] = Ee ? L : null, ft["aria-labelledby"] = z && !Ee ? fe : null);
  const ue = {
    ...ft,
    ...M,
    ...W.props,
    className: Ce(M.className, W.props.className),
    onTouchStart: Qe,
    ref: dt,
    ...b ? {
      onMouseMove: wt
    } : {}
  };
  process.env.NODE_ENV !== "production" && (ue["data-mui-internal-clone-element"] = !0, R.useEffect(() => {
    N && !N.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [N]));
  const He = {};
  g || (ue.onTouchStart = rt, ue.onTouchEnd = ot), d || (ue.onMouseOver = Ro(Re, ue.onMouseOver), ue.onMouseLeave = Ro(me, ue.onMouseLeave), Z || (He.onMouseOver = Re, He.onMouseLeave = me)), f || (ue.onFocus = Ro(ee, ue.onFocus), ue.onBlur = Ro(ze, ue.onBlur), Z || (He.onFocus = ee, He.onBlur = ze)), process.env.NODE_ENV !== "production" && W.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${W.props.title}\` or the Tooltip component.`].join(`
`));
  const qe = {
    ...r,
    isRtl: Q,
    arrow: o,
    disableInteractive: Z,
    placement: I,
    PopperComponentProp: P,
    touch: K.current
  }, De = typeof O.popper == "function" ? O.popper(qe) : O.popper, Hn = R.useMemo(() => {
    var at, Ke;
    let re = [{
      name: "arrow",
      enabled: !!H,
      options: {
        element: H,
        padding: 4
      }
    }];
    return (at = m.popperOptions) != null && at.modifiers && (re = re.concat(m.popperOptions.modifiers)), (Ke = De == null ? void 0 : De.popperOptions) != null && Ke.modifiers && (re = re.concat(De.popperOptions.modifiers)), {
      ...m.popperOptions,
      ...De == null ? void 0 : De.popperOptions,
      modifiers: re
    };
  }, [H, m.popperOptions, De == null ? void 0 : De.popperOptions]), Vn = y0(qe), Vi = typeof O.transition == "function" ? O.transition(qe) : O.transition, gn = {
    slots: {
      popper: a.Popper,
      transition: a.Transition ?? A,
      tooltip: a.Tooltip,
      arrow: a.Arrow,
      ..._
    },
    slotProps: {
      arrow: O.arrow ?? c.arrow,
      popper: {
        ...m,
        ...De ?? c.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: O.tooltip ?? c.tooltip,
      transition: {
        ...D,
        ...Vi ?? c.transition
      }
    }
  }, [Xt, Wi] = Et("popper", {
    elementType: v0,
    externalForwardedProps: gn,
    ownerState: qe,
    className: Ce(Vn.popper, m == null ? void 0 : m.className)
  }), [Ui, ho] = Et("transition", {
    elementType: ii,
    externalForwardedProps: gn,
    ownerState: qe
  }), [go, ce] = Et("tooltip", {
    elementType: b0,
    className: Vn.tooltip,
    externalForwardedProps: gn,
    ownerState: qe
  }), [Ge, tt] = Et("arrow", {
    elementType: x0,
    className: Vn.arrow,
    externalForwardedProps: gn,
    ownerState: qe,
    ref: V
  });
  return /* @__PURE__ */ Je(R.Fragment, {
    children: [/* @__PURE__ */ R.cloneElement(W, ue), /* @__PURE__ */ B(Xt, {
      as: P ?? _i,
      placement: I,
      anchorEl: b ? {
        getBoundingClientRect: () => ({
          top: Er.y,
          left: Er.x,
          right: Er.x,
          bottom: Er.y,
          width: 0,
          height: 0
        })
      } : N,
      popperRef: yt,
      open: N ? z : !1,
      id: fe,
      transition: !0,
      ...He,
      ...Wi,
      popperOptions: Hn,
      children: ({
        TransitionProps: re
      }) => /* @__PURE__ */ B(Ui, {
        timeout: te.transitions.duration.shorter,
        ...re,
        ...ho,
        children: /* @__PURE__ */ Je(go, {
          ...ce,
          children: [L, o ? /* @__PURE__ */ B(Ge, {
            ...tt
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (wd.propTypes = {
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
  children: jn.isRequired,
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
function S0(e) {
  return pt("MuiTypography", e);
}
mt("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const w0 = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, T0 = lg(), E0 = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: o,
    variant: i,
    classes: s
  } = e, a = {
    root: ["root", i, e.align !== "inherit" && `align${we(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
  };
  return $t(a, S0, s);
}, C0 = $e("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${we(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(Kt(({
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
    })), ...Object.entries(e.palette).filter(Sa()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${we(n)}`
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
})), fc = {
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
}, Aa = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const {
    color: r,
    ...o
  } = ht({
    props: t,
    name: "MuiTypography"
  }), i = !w0[r], s = T0({
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
    variantMapping: v = fc,
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
  }, b = u || (h ? "p" : v[g] || fc[g]) || "span", S = E0(y);
  return /* @__PURE__ */ B(C0, {
    as: b,
    ref: n,
    className: Ce(S.root, c),
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
process.env.NODE_ENV !== "production" && (Aa.propTypes = {
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
const ur = Nt(
  ({
    text: e,
    isLabel: t,
    isTitle: n = !1,
    titleLevel: r = "h5",
    ellipsis: o = !1,
    color: i,
    sx: s,
    ...a
  }) => {
    const c = _n(
      () => /* @__PURE__ */ B(
        Aa,
        {
          component: "div",
          variant: n ? r : t ? "caption" : "body1",
          noWrap: o,
          sx: {
            fontWeight: n ? "bold" : "normal",
            color: (u) => i === "error" ? u.palette.error.main : i === "primary" ? u.palette.primary.main : i === "success" ? u.palette.success.main : "inherit",
            ...s
          },
          ...a,
          children: e
        }
      ),
      [e, n, r, o, s, a]
    );
    return o ? /* @__PURE__ */ B(wd, { arrow: !0, title: e, children: c }) : c;
  }
);
ur.displayName = "Text";
const O0 = Nt(
  ({ isOutlined: e, title: t, subtitle: n, clickable: r, onClick: o, disabled: i, children: s, sx: a }) => {
    const c = _n(() => s || /* @__PURE__ */ Je(Wc, { children: [
      t && /* @__PURE__ */ B(ur, { text: t, isTitle: !0, titleLevel: "h6", lineHeight: "1.25rem", ellipsis: !0 }),
      n && /* @__PURE__ */ B(ur, { text: n, isLabel: !0, ellipsis: !0 })
    ] }), [t, n, s]);
    return r ? /* @__PURE__ */ B(
      wa,
      {
        component: ri,
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
    ) : /* @__PURE__ */ B(ri, { isOutlined: e, sx: { ...a }, children: c });
  }
);
O0.displayName = "Card";
const Bi = Nt(
  ({ children: e, row: t, alignItems: n, justifyContent: r, gap: o = 1, sx: i, ...s }) => /* @__PURE__ */ B(
    Ni,
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
Bi.displayName = "Flex";
const Li = 0, Cn = 1, gr = 2, Td = 4;
function pc(e) {
  return () => e;
}
function R0(e) {
  e();
}
function Ed(e, t) {
  return (n) => e(t(n));
}
function mc(e, t) {
  return () => e(t);
}
function Cd(e, t) {
  return (n) => e(t, n);
}
function Da(e) {
  return e !== void 0;
}
function I0(...e) {
  return () => {
    e.map(R0);
  };
}
function yr() {
}
function ji(e, t) {
  return t(e), e;
}
function P0(e, t) {
  return t(e);
}
function Be(...e) {
  return e;
}
function Oe(e, t) {
  return e(Cn, t);
}
function de(e, t) {
  e(Li, t);
}
function _a(e) {
  e(gr);
}
function ct(e) {
  return e(Td);
}
function oe(e, t) {
  return Oe(e, Cd(t, Li));
}
function ln(e, t) {
  const n = e(Cn, (r) => {
    n(), t(r);
  });
  return n;
}
function hc(e) {
  let t, n;
  return (r) => (o) => {
    t = o, n && clearTimeout(n), n = setTimeout(() => {
      r(t);
    }, e);
  };
}
function Od(e, t) {
  return e === t;
}
function _e(e = Od) {
  let t;
  return (n) => (r) => {
    e(t, r) || (t = r, n(r));
  };
}
function se(e) {
  return (t) => (n) => {
    e(n) && t(n);
  };
}
function ne(e) {
  return (t) => Ed(t, e);
}
function tn(e) {
  return (t) => () => {
    t(e);
  };
}
function U(e, ...t) {
  const n = k0(...t);
  return (r, o) => {
    switch (r) {
      case gr:
        _a(e);
        return;
      case Cn:
        return Oe(e, n(o));
    }
  };
}
function rn(e, t) {
  return (n) => (r) => {
    n(t = e(t, r));
  };
}
function dr(e) {
  return (t) => (n) => {
    e > 0 ? e-- : t(n);
  };
}
function vn(e) {
  let t = null, n;
  return (r) => (o) => {
    t = o, !n && (n = setTimeout(() => {
      n = void 0, r(t);
    }, e));
  };
}
function pe(...e) {
  const t = new Array(e.length);
  let n = 0, r = null;
  const o = Math.pow(2, e.length) - 1;
  return e.forEach((i, s) => {
    const a = Math.pow(2, s);
    Oe(i, (c) => {
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
function k0(...e) {
  return (t) => e.reduceRight(P0, t);
}
function M0(e) {
  let t, n;
  const r = () => t == null ? void 0 : t();
  return function(o, i) {
    switch (o) {
      case Cn:
        return i ? n === i ? void 0 : (r(), n = i, t = Oe(e, i), t) : (r(), yr);
      case gr:
        r(), n = null;
        return;
    }
  };
}
function G(e) {
  let t = e;
  const n = he();
  return (r, o) => {
    switch (r) {
      case Li:
        t = o;
        break;
      case Cn: {
        o(t);
        break;
      }
      case Td:
        return t;
    }
    return n(r, o);
  };
}
function ut(e, t) {
  return ji(G(t), (n) => oe(e, n));
}
function he() {
  const e = [];
  return (t, n) => {
    switch (t) {
      case Li:
        e.slice().forEach((r) => {
          r(n);
        });
        return;
      case gr:
        e.splice(0, e.length);
        return;
      case Cn:
        return e.push(n), () => {
          const r = e.indexOf(n);
          r > -1 && e.splice(r, 1);
        };
    }
  };
}
function It(e) {
  return ji(he(), (t) => oe(e, t));
}
function ve(e, t = [], { singleton: n } = { singleton: !0 }) {
  return {
    constructor: e,
    dependencies: t,
    id: N0(),
    singleton: n
  };
}
const N0 = () => Symbol();
function $0(e) {
  const t = /* @__PURE__ */ new Map(), n = ({ constructor: r, dependencies: o, id: i, singleton: s }) => {
    if (s && t.has(i))
      return t.get(i);
    const a = r(o.map((c) => n(c)));
    return s && t.set(i, a), a;
  };
  return n(e);
}
function et(...e) {
  const t = he(), n = new Array(e.length);
  let r = 0;
  const o = Math.pow(2, e.length) - 1;
  return e.forEach((i, s) => {
    const a = Math.pow(2, s);
    Oe(i, (c) => {
      n[s] = c, r = r | a, r === o && de(t, n);
    });
  }), function(i, s) {
    switch (i) {
      case gr: {
        _a(t);
        return;
      }
      case Cn:
        return r === o && s(n), Oe(t, s);
    }
  };
}
function ae(e, t = Od) {
  return U(e, _e(t));
}
function gc(...e) {
  return function(t, n) {
    switch (t) {
      case gr:
        return;
      case Cn:
        return I0(...e.map((r) => Oe(r, n)));
    }
  };
}
var Pt = /* @__PURE__ */ ((e) => (e[e.DEBUG = 0] = "DEBUG", e[e.INFO = 1] = "INFO", e[e.WARN = 2] = "WARN", e[e.ERROR = 3] = "ERROR", e))(Pt || {});
const A0 = {
  0: "debug",
  3: "error",
  1: "log",
  2: "warn"
}, D0 = () => typeof globalThis > "u" ? window : globalThis, On = ve(
  () => {
    const e = G(
      3
      /* ERROR */
    );
    return {
      log: G((t, n, r = 1) => {
        var o;
        const i = (o = D0().VIRTUOSO_LOG_LEVEL) != null ? o : ct(e);
        r >= i && console[A0[r]](
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
function Fn(e, t, n) {
  return Ba(e, t, n).callbackRef;
}
function Ba(e, t, n) {
  const r = k.useRef(null);
  let o = (i) => {
  };
  if (typeof ResizeObserver < "u") {
    const i = k.useMemo(() => new ResizeObserver((s) => {
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
function _0(e, t, n, r, o, i, s, a, c) {
  const u = k.useCallback(
    (f) => {
      const d = B0(f.children, t, a ? "offsetWidth" : "offsetHeight", o);
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
        a ? yc("column-gap", getComputedStyle(f).columnGap, o) : yc("row-gap", getComputedStyle(f).rowGap, o)
      ), d !== null && e(d);
    },
    [e, t, o, i, s, r]
  );
  return Ba(u, n, c);
}
function B0(e, t, n, r) {
  const o = e.length;
  if (o === 0)
    return null;
  const i = [];
  for (let s = 0; s < o; s++) {
    const a = e.item(s);
    if (a.dataset.index === void 0)
      continue;
    const c = parseInt(a.dataset.index), u = parseFloat(a.dataset.knownSize), f = t(a, n);
    if (f === 0 && r("Zero-sized element, this should not happen", { child: a }, Pt.ERROR), f === u)
      continue;
    const d = i[i.length - 1];
    i.length === 0 || d.size !== f || d.endIndex !== c - 1 ? i.push({ endIndex: c, size: f, startIndex: c }) : i[i.length - 1].endIndex++;
  }
  return i;
}
function yc(e, t, n) {
  return t !== "normal" && !(t != null && t.endsWith("px")) && n(`${e} was not resolved to pixel value correctly`, t, Pt.WARN), t === "normal" ? 0 : parseInt(t ?? "0", 10);
}
function Rd(e, t, n) {
  const r = k.useRef(null), o = k.useCallback(
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
  ), { callbackRef: i, ref: s } = Ba(o, !0, n), a = k.useCallback(() => {
    o(s.current);
  }, [o, s]);
  return k.useEffect(() => {
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
const gt = ve(
  () => {
    const e = he(), t = he(), n = G(0), r = he(), o = G(0), i = he(), s = he(), a = G(0), c = G(0), u = G(0), f = G(0), d = he(), h = he(), g = G(!1), v = G(!1), p = G(!1);
    return oe(
      U(
        e,
        ne(({ scrollTop: y }) => y)
      ),
      t
    ), oe(
      U(
        e,
        ne(({ scrollHeight: y }) => y)
      ),
      s
    ), oe(t, o), {
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
), Kr = { lvl: 0 };
function Id(e, t) {
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
function Ne(e) {
  return e === Kr;
}
function Xr(e, t) {
  if (!Ne(e))
    return t === e.k ? e.v : t < e.k ? Xr(e.l, t) : Xr(e.r, t);
}
function Gt(e, t, n = "k") {
  if (Ne(e))
    return [-1 / 0, void 0];
  if (Number(e[n]) === t)
    return [e.k, e.v];
  if (Number(e[n]) < t) {
    const r = Gt(e.r, t, n);
    return r[0] === -1 / 0 ? [e.k, e.v] : r;
  }
  return Gt(e.l, t, n);
}
function Ct(e, t, n) {
  return Ne(e) ? Md(t, n, 1) : t === e.k ? Ze(e, { k: t, v: n }) : t < e.k ? vc(Ze(e, { l: Ct(e.l, t, n) })) : vc(Ze(e, { r: Ct(e.r, t, n) }));
}
function nr() {
  return Kr;
}
function Fi(e, t, n) {
  if (Ne(e))
    return [];
  const r = Gt(e, t)[0];
  return L0(js(e, r, n));
}
function Ls(e, t) {
  if (Ne(e)) return Kr;
  const { k: n, l: r, r: o } = e;
  if (t === n) {
    if (Ne(r))
      return o;
    if (Ne(o))
      return r;
    {
      const [i, s] = kd(r);
      return Ho(Ze(e, { k: i, l: Pd(r), v: s }));
    }
  } else return t < n ? Ho(Ze(e, { l: Ls(r, t) })) : Ho(Ze(e, { r: Ls(o, t) }));
}
function $n(e) {
  return Ne(e) ? [] : [...$n(e.l), { k: e.k, v: e.v }, ...$n(e.r)];
}
function js(e, t, n) {
  if (Ne(e))
    return [];
  const { k: r, l: o, r: i, v: s } = e;
  let a = [];
  return r > t && (a = a.concat(js(o, t, n))), r >= t && r <= n && a.push({ k: r, v: s }), r <= n && (a = a.concat(js(i, t, n))), a;
}
function Ho(e) {
  const { l: t, lvl: n, r } = e;
  if (r.lvl >= n - 1 && t.lvl >= n - 1)
    return e;
  if (n > r.lvl + 1) {
    if (ls(t))
      return Nd(Ze(e, { lvl: n - 1 }));
    if (!Ne(t) && !Ne(t.r))
      return Ze(t.r, {
        l: Ze(t, { r: t.r.l }),
        lvl: n,
        r: Ze(e, {
          l: t.r.r,
          lvl: n - 1
        })
      });
    throw new Error("Unexpected empty nodes");
  } else {
    if (ls(e))
      return Fs(Ze(e, { lvl: n - 1 }));
    if (!Ne(r) && !Ne(r.l)) {
      const o = r.l, i = ls(o) ? r.lvl - 1 : r.lvl;
      return Ze(o, {
        l: Ze(e, {
          lvl: n - 1,
          r: o.l
        }),
        lvl: o.lvl + 1,
        r: Fs(Ze(r, { l: o.r, lvl: i }))
      });
    } else
      throw new Error("Unexpected empty nodes");
  }
}
function Ze(e, t) {
  return Md(
    t.k !== void 0 ? t.k : e.k,
    t.v !== void 0 ? t.v : e.v,
    t.lvl !== void 0 ? t.lvl : e.lvl,
    t.l !== void 0 ? t.l : e.l,
    t.r !== void 0 ? t.r : e.r
  );
}
function Pd(e) {
  return Ne(e.r) ? e.l : Ho(Ze(e, { r: Pd(e.r) }));
}
function ls(e) {
  return Ne(e) || e.lvl > e.r.lvl;
}
function kd(e) {
  return Ne(e.r) ? [e.k, e.v] : kd(e.r);
}
function Md(e, t, n, r = Kr, o = Kr) {
  return { k: e, l: r, lvl: n, r: o, v: t };
}
function vc(e) {
  return Fs(Nd(e));
}
function Nd(e) {
  const { l: t } = e;
  return !Ne(t) && t.lvl === e.lvl ? Ze(t, { r: Ze(e, { l: t.r }) }) : e;
}
function Fs(e) {
  const { lvl: t, r: n } = e;
  return !Ne(n) && !Ne(n.r) && n.lvl === t && n.r.lvl === t ? Ze(n, { l: Ze(e, { r: n.l }), lvl: t + 1 }) : e;
}
function L0(e) {
  return Id(e, ({ k: t, v: n }) => ({ index: t, value: n }));
}
function $d(e, t) {
  return !!(e && e.startIndex === t.startIndex && e.endIndex === t.endIndex);
}
function Jr(e, t) {
  return !!(e && e[0] === t[0] && e[1] === t[1]);
}
const La = ve(
  () => ({ recalcInProgress: G(!1) }),
  [],
  { singleton: !0 }
);
function Ad(e, t, n) {
  return e[li(e, t, n)];
}
function li(e, t, n, r = 0) {
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
function j0(e, t, n, r) {
  const o = li(e, t, r), i = li(e, n, r, o);
  return e.slice(o, i + 1);
}
function wn(e, t) {
  return Math.round(e.getBoundingClientRect()[t]);
}
function zi(e) {
  return !Ne(e.groupOffsetTree);
}
function ja({ index: e }, t) {
  return t === e ? 0 : t < e ? -1 : 1;
}
function F0() {
  return {
    groupIndices: [],
    groupOffsetTree: nr(),
    lastIndex: 0,
    lastOffset: 0,
    lastSize: 0,
    offsetTree: [],
    sizeTree: nr()
  };
}
function z0(e, t) {
  let n = Ne(e) ? 0 : 1 / 0;
  for (const r of t) {
    const { endIndex: o, size: i, startIndex: s } = r;
    if (n = Math.min(n, s), Ne(e)) {
      e = Ct(e, 0, i);
      continue;
    }
    const a = Fi(e, s - 1, o + 1);
    if (a.some(G0(r)))
      continue;
    let c = !1, u = !1;
    for (const { end: f, start: d, value: h } of a)
      c ? (o >= d || i === h) && (e = Ls(e, d)) : (u = h !== i, c = !0), f > o && o >= d && h !== i && (e = Ct(e, o + 1, h));
    u && (e = Ct(e, s, i));
  }
  return [e, n];
}
function H0(e) {
  return typeof e.groupIndex < "u";
}
function V0({ offset: e }, t) {
  return t === e ? 0 : t < e ? -1 : 1;
}
function Qr(e, t, n) {
  if (t.length === 0)
    return 0;
  const { index: r, offset: o, size: i } = Ad(t, e, ja), s = e - r, a = i * s + (s - 1) * n + o;
  return a > 0 ? a + n : a;
}
function Dd(e, t) {
  if (!zi(t))
    return e;
  let n = 0;
  for (; t.groupIndices[n] <= e + n; )
    n++;
  return e + n;
}
function _d(e, t, n) {
  if (H0(e))
    return t.groupIndices[e.groupIndex] + 1;
  {
    const r = e.index === "LAST" ? n : e.index;
    let o = Dd(r, t);
    return o = Math.max(0, o, Math.min(n, o)), o;
  }
}
function W0(e, t, n, r = 0) {
  return r > 0 && (t = Math.max(t, Ad(e, r, ja).offset)), Id(j0(e, t, n, V0), q0);
}
function U0(e, [t, n, r, o]) {
  t.length > 0 && r("received item sizes", t, Pt.DEBUG);
  const i = e.sizeTree;
  let s = i, a = 0;
  if (n.length > 0 && Ne(i) && t.length === 2) {
    const h = t[0].size, g = t[1].size;
    s = n.reduce((v, p) => Ct(Ct(v, p, h), p + 1, g), s);
  } else
    [s, a] = z0(s, t);
  if (s === i)
    return e;
  const { lastIndex: c, lastOffset: u, lastSize: f, offsetTree: d } = zs(e.offsetTree, a, s, o);
  return {
    groupIndices: n,
    groupOffsetTree: n.reduce((h, g) => Ct(h, g, Qr(g, d, o)), nr()),
    lastIndex: c,
    lastOffset: u,
    lastSize: f,
    offsetTree: d,
    sizeTree: s
  };
}
function Y0(e) {
  return $n(e).map(({ k: t, v: n }, r, o) => {
    const i = o[r + 1];
    return { endIndex: i ? i.k - 1 : 1 / 0, size: n, startIndex: t };
  });
}
function bc(e, t) {
  let n = 0, r = 0;
  for (; n < e; )
    n += t[r + 1] - t[r] - 1, r++;
  return r - (n === e ? 0 : 1);
}
function zs(e, t, n, r) {
  let o = e, i = 0, s = 0, a = 0, c = 0;
  if (t !== 0) {
    c = li(o, t - 1, ja), a = o[c].offset;
    const u = Gt(n, t - 1);
    i = u[0], s = u[1], o.length && o[c].size === Gt(n, t)[1] && (c -= 1), o = o.slice(0, c + 1);
  } else
    o = [];
  for (const { start: u, value: f } of Fi(n, t, 1 / 0)) {
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
function q0(e) {
  return { index: e.index, value: e };
}
function G0(e) {
  const { endIndex: t, size: n, startIndex: r } = e;
  return (o) => o.start === r && (o.end === t || o.end === 1 / 0) && o.value === n;
}
const K0 = {
  offsetHeight: "height",
  offsetWidth: "width"
}, un = ve(
  ([{ log: e }, { recalcInProgress: t }]) => {
    const n = he(), r = he(), o = ut(r, 0), i = he(), s = he(), a = G(0), c = G([]), u = G(void 0), f = G(void 0), d = G((x, w) => wn(x, K0[w])), h = G(void 0), g = G(0), v = F0(), p = ut(
      U(n, pe(c, e, g), rn(U0, v), _e()),
      v
    ), y = ut(
      U(
        c,
        _e(),
        rn((x, w) => ({ current: w, prev: x.current }), {
          current: [],
          prev: []
        }),
        ne(({ prev: x }) => x)
      ),
      []
    );
    oe(
      U(
        c,
        se((x) => x.length > 0),
        pe(p, g),
        ne(([x, w, C]) => {
          const I = x.reduce((P, m, O) => Ct(P, m, Qr(m, w.offsetTree, C) || O), nr());
          return {
            ...w,
            groupIndices: x,
            groupOffsetTree: I
          };
        })
      ),
      p
    ), oe(
      U(
        r,
        pe(p),
        se(([x, { lastIndex: w }]) => x < w),
        ne(([x, { lastIndex: w, lastSize: C }]) => [
          {
            endIndex: w,
            size: C,
            startIndex: x
          }
        ])
      ),
      n
    ), oe(u, f);
    const b = ut(
      U(
        u,
        ne((x) => x === void 0)
      ),
      !0
    );
    oe(
      U(
        f,
        se((x) => x !== void 0 && Ne(ct(p).sizeTree)),
        ne((x) => [{ endIndex: 0, size: x, startIndex: 0 }])
      ),
      n
    );
    const S = It(
      U(
        n,
        pe(p),
        rn(
          ({ sizes: x }, [w, C]) => ({
            changed: C !== x,
            sizes: C
          }),
          { changed: !1, sizes: v }
        ),
        ne((x) => x.changed)
      )
    );
    Oe(
      U(
        a,
        rn(
          (x, w) => ({ diff: x.prev - w, prev: w }),
          { diff: 0, prev: 0 }
        ),
        ne((x) => x.diff)
      ),
      (x) => {
        const { groupIndices: w } = ct(p);
        if (x > 0)
          de(t, !0), de(i, x + bc(x, w));
        else if (x < 0) {
          const C = ct(y);
          C.length > 0 && (x -= bc(-x, C)), de(s, x);
        }
      }
    ), Oe(U(a, pe(e)), ([x, w]) => {
      x < 0 && w(
        "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
        { firstItemIndex: a },
        Pt.ERROR
      );
    });
    const E = It(i);
    oe(
      U(
        i,
        pe(p),
        ne(([x, w]) => {
          const C = w.groupIndices.length > 0, I = [], P = w.lastSize;
          if (C) {
            const m = Xr(w.sizeTree, 0);
            let O = 0, _ = 0;
            for (; O < x; ) {
              const A = w.groupIndices[_], D = w.groupIndices.length === _ + 1 ? 1 / 0 : w.groupIndices[_ + 1] - A - 1;
              I.push({
                endIndex: A,
                size: m,
                startIndex: A
              }), I.push({
                endIndex: A + 1 + D - 1,
                size: P,
                startIndex: A + 1
              }), _++, O += D + 1;
            }
            const L = $n(w.sizeTree);
            return O !== x && L.shift(), L.reduce(
              (A, { k: D, v: M }) => {
                let W = A.ranges;
                return A.prevSize !== 0 && (W = [
                  ...A.ranges,
                  {
                    endIndex: D + x - 1,
                    size: A.prevSize,
                    startIndex: A.prevIndex
                  }
                ]), {
                  prevIndex: D + x,
                  prevSize: M,
                  ranges: W
                };
              },
              {
                prevIndex: x,
                prevSize: 0,
                ranges: I
              }
            ).ranges;
          }
          return $n(w.sizeTree).reduce(
            (m, { k: O, v: _ }) => ({
              prevIndex: O + x,
              prevSize: _,
              ranges: [...m.ranges, { endIndex: O + x - 1, size: m.prevSize, startIndex: m.prevIndex }]
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
    const T = It(
      U(
        s,
        pe(p, g),
        ne(([x, { offsetTree: w }, C]) => {
          const I = -x;
          return Qr(I, w, C);
        })
      )
    );
    return oe(
      U(
        s,
        pe(p, g),
        ne(([x, w, C]) => {
          if (w.groupIndices.length > 0) {
            if (Ne(w.sizeTree))
              return w;
            let I = nr();
            const P = ct(y);
            let m = 0, O = 0, _ = 0;
            for (; m < -x; ) {
              _ = P[O];
              const L = P[O + 1] - _ - 1;
              O++, m += L + 1;
            }
            if (I = $n(w.sizeTree).reduce((L, { k: A, v: D }) => Ct(L, Math.max(0, A + x), D), I), m !== -x) {
              const L = Xr(w.sizeTree, _);
              I = Ct(I, 0, L);
              const A = Gt(w.sizeTree, -x + 1)[1];
              I = Ct(I, 1, A);
            }
            return {
              ...w,
              sizeTree: I,
              ...zs(w.offsetTree, 0, I, C)
            };
          } else {
            const I = $n(w.sizeTree).reduce((P, { k: m, v: O }) => Ct(P, Math.max(0, m + x), O), nr());
            return {
              ...w,
              sizeTree: I,
              ...zs(w.offsetTree, 0, I, C)
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
      listRefresh: S,
      shiftWith: s,
      shiftWithOffset: T,
      sizeRanges: n,
      // output
      sizes: p,
      statefulTotalCount: o,
      totalCount: r,
      trackItemSizes: b,
      unshiftWith: i
    };
  },
  Be(On, La),
  { singleton: !0 }
);
function X0(e) {
  return e.reduce(
    (t, n) => (t.groupIndices.push(t.totalCount), t.totalCount += n + 1, t),
    {
      groupIndices: [],
      totalCount: 0
    }
  );
}
const Bd = ve(
  ([{ groupIndices: e, sizes: t, totalCount: n }, { headerHeight: r, scrollTop: o }]) => {
    const i = he(), s = he(), a = It(U(i, ne(X0)));
    return oe(
      U(
        a,
        ne((c) => c.totalCount)
      ),
      n
    ), oe(
      U(
        a,
        ne((c) => c.groupIndices)
      ),
      e
    ), oe(
      U(
        et(o, t, r),
        se(([c, u]) => zi(u)),
        ne(([c, u, f]) => Gt(u.groupOffsetTree, Math.max(c - f, 0), "v")[0]),
        _e(),
        ne((c) => [c])
      ),
      s
    ), { groupCounts: i, topItemsIndexes: s };
  },
  Be(un, gt)
), Rn = ve(
  ([{ log: e }]) => {
    const t = G(!1), n = It(
      U(
        t,
        se((r) => r),
        _e()
      )
    );
    return Oe(t, (r) => {
      r && ct(e)("props updated", {}, Pt.DEBUG);
    }), { didMount: n, propsReady: t };
  },
  Be(On),
  { singleton: !0 }
), J0 = typeof document < "u" && "scrollBehavior" in document.documentElement.style;
function Ld(e) {
  const t = typeof e == "number" ? { index: e } : e;
  return t.align || (t.align = "start"), (!t.behavior || !J0) && (t.behavior = "auto"), t.offset || (t.offset = 0), t;
}
const fo = ve(
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
    const g = he(), v = he(), p = G(0);
    let y = null, b = null, S = null;
    function E() {
      y && (y(), y = null), S && (S(), S = null), b && (clearTimeout(b), b = null), de(c, !1);
    }
    return oe(
      U(
        g,
        pe(n, d, r, p, a, s, h),
        pe(e, i, o),
        ne(
          ([
            [T, x, w, C, I, P, m, O],
            _,
            L,
            A
          ]) => {
            const D = Ld(T), { align: M, behavior: W, offset: te } = D, Q = C - 1, N = _d(D, x, Q);
            let j = Qr(N, x.offsetTree, _) + P;
            M === "end" ? (j += L + Gt(x.sizeTree, N)[1] - w + A, N === Q && (j += m)) : M === "center" ? j += (L + Gt(x.sizeTree, N)[1] - w + A) / 2 : j -= I, te && (j += te);
            const H = (V) => {
              E(), V ? (O("retrying to scroll to", { location: T }, Pt.DEBUG), de(g, T)) : (de(v, !0), O("list did not change, scroll successful", {}, Pt.DEBUG));
            };
            if (E(), W === "smooth") {
              let V = !1;
              S = Oe(t, (K) => {
                V = V || K;
              }), y = ln(f, () => {
                H(V);
              });
            } else
              y = ln(U(t, Q0(150)), H);
            return b = setTimeout(() => {
              E();
            }, 1200), de(c, !0), O("scrolling from index to", { behavior: W, index: N, top: j }, Pt.DEBUG), { behavior: W, top: j };
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
  Be(un, gt, On),
  { singleton: !0 }
);
function Q0(e) {
  return (t) => {
    const n = setTimeout(() => {
      t(!1);
    }, e);
    return (r) => {
      r && (t(!0), clearTimeout(n));
    };
  };
}
function Fa(e, t) {
  e == 0 ? t() : requestAnimationFrame(() => {
    Fa(e - 1, t);
  });
}
function za(e, t) {
  const n = t - 1;
  return typeof e == "number" ? e : e.index === "LAST" ? n : e.index;
}
const po = ve(
  ([{ defaultItemSize: e, listRefresh: t, sizes: n }, { scrollTop: r }, { scrollTargetReached: o, scrollToIndex: i }, { didMount: s }]) => {
    const a = G(!0), c = G(0), u = G(!0);
    return oe(
      U(
        s,
        pe(c),
        se(([f, d]) => !!d),
        tn(!1)
      ),
      a
    ), oe(
      U(
        s,
        pe(c),
        se(([f, d]) => !!d),
        tn(!1)
      ),
      u
    ), Oe(
      U(
        et(t, s),
        pe(a, n, e, u),
        se(([[, f], d, { sizeTree: h }, g, v]) => f && (!Ne(h) || Da(g)) && !d && !v),
        pe(c)
      ),
      ([, f]) => {
        ln(o, () => {
          de(u, !0);
        }), Fa(4, () => {
          ln(r, () => {
            de(a, !0);
          }), de(i, f);
        });
      }
    ), {
      initialItemFinalLocationReached: u,
      initialTopMostItemIndex: c,
      scrolledToInitialItem: a
    };
  },
  Be(un, gt, fo, Rn),
  { singleton: !0 }
);
function jd(e, t) {
  return Math.abs(e - t) < 1.01;
}
const Zr = "up", Ar = "down", Z0 = "none", eb = {
  atBottom: !1,
  notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
  state: {
    offsetBottom: 0,
    scrollHeight: 0,
    scrollTop: 0,
    viewportHeight: 0
  }
}, tb = 0, mo = ve(([{ footerHeight: e, headerHeight: t, scrollBy: n, scrollContainerState: r, scrollTop: o, viewportHeight: i }]) => {
  const s = G(!1), a = G(!0), c = he(), u = he(), f = G(4), d = G(tb), h = ut(
    U(
      gc(U(ae(o), dr(1), tn(!0)), U(ae(o), dr(1), tn(!1), hc(100))),
      _e()
    ),
    !1
  ), g = ut(
    U(gc(U(n, tn(!0)), U(n, tn(!1), hc(200))), _e()),
    !1
  );
  oe(
    U(
      et(ae(o), ae(d)),
      ne(([S, E]) => S <= E),
      _e()
    ),
    a
  ), oe(U(a, vn(50)), u);
  const v = It(
    U(
      et(r, ae(i), ae(t), ae(e), ae(f)),
      rn((S, [{ scrollHeight: E, scrollTop: T }, x, w, C, I]) => {
        const P = T + x - E > -I, m = {
          scrollHeight: E,
          scrollTop: T,
          viewportHeight: x
        };
        if (P) {
          let _, L;
          return T > S.state.scrollTop ? (_ = "SCROLLED_DOWN", L = S.state.scrollTop - T) : (_ = "SIZE_DECREASED", L = S.state.scrollTop - T || S.scrollTopDelta), {
            atBottom: !0,
            atBottomBecause: _,
            scrollTopDelta: L,
            state: m
          };
        }
        let O;
        return m.scrollHeight > S.state.scrollHeight ? O = "SIZE_INCREASED" : x < S.state.viewportHeight ? O = "VIEWPORT_HEIGHT_DECREASING" : T < S.state.scrollTop ? O = "SCROLLING_UPWARDS" : O = "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM", {
          atBottom: !1,
          notAtBottomBecause: O,
          state: m
        };
      }, eb),
      _e((S, E) => S && S.atBottom === E.atBottom)
    )
  ), p = ut(
    U(
      r,
      rn(
        (S, { scrollHeight: E, scrollTop: T, viewportHeight: x }) => {
          if (jd(S.scrollHeight, E))
            return {
              changed: !1,
              jump: 0,
              scrollHeight: E,
              scrollTop: T
            };
          {
            const w = E - (T + x) < 1;
            return S.scrollTop !== T && w ? {
              changed: !0,
              jump: S.scrollTop - T,
              scrollHeight: E,
              scrollTop: T
            } : {
              changed: !0,
              jump: 0,
              scrollHeight: E,
              scrollTop: T
            };
          }
        },
        { changed: !1, jump: 0, scrollHeight: 0, scrollTop: 0 }
      ),
      se((S) => S.changed),
      ne((S) => S.jump)
    ),
    0
  );
  oe(
    U(
      v,
      ne((S) => S.atBottom)
    ),
    s
  ), oe(U(s, vn(50)), c);
  const y = G(Ar);
  oe(
    U(
      r,
      ne(({ scrollTop: S }) => S),
      _e(),
      rn(
        (S, E) => ct(g) ? { direction: S.direction, prevScrollTop: E } : { direction: E < S.prevScrollTop ? Zr : Ar, prevScrollTop: E },
        { direction: Ar, prevScrollTop: 0 }
      ),
      ne((S) => S.direction)
    ),
    y
  ), oe(U(r, vn(50), tn(Z0)), y);
  const b = G(0);
  return oe(
    U(
      h,
      se((S) => !S),
      tn(0)
    ),
    b
  ), oe(
    U(
      o,
      vn(100),
      pe(h),
      se(([S, E]) => !!E),
      rn(([S, E], [T]) => [E, T], [0, 0]),
      ne(([S, E]) => E - S)
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
}, Be(gt)), ci = "top", ui = "bottom", xc = "none";
function Sc(e, t, n) {
  return typeof e == "number" ? n === Zr && t === ci || n === Ar && t === ui ? e : 0 : n === Zr ? t === ci ? e.main : e.reverse : t === ui ? e.main : e.reverse;
}
function wc(e, t) {
  var n;
  return typeof e == "number" ? e : (n = e[t]) != null ? n : 0;
}
const Ha = ve(
  ([{ deviation: e, fixedHeaderHeight: t, headerHeight: n, scrollTop: r, viewportHeight: o }]) => {
    const i = he(), s = G(0), a = G(0), c = G(0), u = ut(
      U(
        et(
          ae(r),
          ae(o),
          ae(n),
          ae(i, Jr),
          ae(c),
          ae(s),
          ae(t),
          ae(e),
          ae(a)
        ),
        ne(
          ([
            f,
            d,
            h,
            [g, v],
            p,
            y,
            b,
            S,
            E
          ]) => {
            const T = f - S, x = y + b, w = Math.max(h - T, 0);
            let C = xc;
            const I = wc(E, ci), P = wc(E, ui);
            return g -= S, g += h + b, v += h + b, v -= S, g > f + x - I && (C = Zr), v < f - w + d + P && (C = Ar), C !== xc ? [
              Math.max(T - h - Sc(p, ci, C) - I, 0),
              T - w - b + d + Sc(p, ui, C) + P
            ] : null;
          }
        ),
        se((f) => f != null),
        _e(Jr)
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
  Be(gt),
  { singleton: !0 }
);
function nb(e, t, n) {
  if (zi(t)) {
    const r = Dd(e, t);
    return [
      { index: Gt(t.groupOffsetTree, r)[0], offset: 0, size: 0 },
      { data: n == null ? void 0 : n[0], index: r, offset: 0, size: 0 }
    ];
  }
  return [{ data: n == null ? void 0 : n[0], index: e, offset: 0, size: 0 }];
}
const cs = {
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
function Vo(e, t, n, r, o, i) {
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
    items: Tc(e, o, i),
    offsetBottom: v,
    offsetTop: u,
    top: g,
    topItems: Tc(t, o, i),
    topListHeight: t.reduce((p, y) => y.size + p, 0),
    totalCount: n
  };
}
function Fd(e, t, n, r, o, i) {
  let s = 0;
  if (n.groupIndices.length > 0)
    for (const f of n.groupIndices) {
      if (f - s >= e)
        break;
      s++;
    }
  const a = e + s, c = za(t, a), u = Array.from({ length: a }).map((f, d) => ({
    data: i[d + c],
    index: d + c,
    offset: 0,
    size: 0
  }));
  return Vo(u, [], a, o, n, r);
}
function Tc(e, t, n) {
  if (e.length === 0)
    return [];
  if (!zi(t))
    return e.map((u) => ({ ...u, index: u.index + n, originalIndex: u.index }));
  const r = e[0].index, o = e[e.length - 1].index, i = [], s = Fi(t.groupOffsetTree, r, o);
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
const zn = ve(
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
    const p = G([]), y = G(0), b = he();
    oe(i.topItemsIndexes, p);
    const S = ut(
      U(
        et(
          g,
          v,
          ae(c, Jr),
          ae(o),
          ae(r),
          ae(u),
          f,
          ae(p),
          ae(t),
          ae(n),
          e
        ),
        se(([w, C, , I, , , , , , , P]) => {
          const m = P && P.length !== I;
          return w && !C && !m;
        }),
        ne(
          ([
            ,
            ,
            [w, C],
            I,
            P,
            m,
            O,
            _,
            L,
            A,
            D
          ]) => {
            const M = P, { offsetTree: W, sizeTree: te } = M, Q = ct(y);
            if (I === 0)
              return { ...cs, totalCount: I };
            if (w === 0 && C === 0)
              return Q === 0 ? { ...cs, totalCount: I } : Fd(Q, m, P, L, A, D || []);
            if (Ne(te))
              return Q > 0 ? null : Vo(
                nb(za(m, I), M, D),
                [],
                I,
                A,
                M,
                L
              );
            const N = [];
            if (_.length > 0) {
              const Z = _[0], Y = _[_.length - 1];
              let J = 0;
              for (const $ of Fi(te, Z, Y)) {
                const q = $.value, X = Math.max($.start, Z), ie = Math.min($.end, Y);
                for (let z = X; z <= ie; z++)
                  N.push({ data: D == null ? void 0 : D[z], index: z, offset: J, size: q }), J += q;
              }
            }
            if (!O)
              return Vo([], N, I, A, M, L);
            const j = _.length > 0 ? _[_.length - 1] + 1 : 0, H = W0(W, w, C, j);
            if (H.length === 0)
              return null;
            const V = I - 1, K = ji([], (Z) => {
              for (const Y of H) {
                const J = Y.value;
                let $ = J.offset, q = Y.start;
                const X = J.size;
                if (J.offset < w) {
                  q += Math.floor((w - J.offset + A) / (X + A));
                  const z = q - Y.start;
                  $ += z * X + z * A;
                }
                q < j && ($ += (j - q) * X, q = j);
                const ie = Math.min(Y.end, V);
                for (let z = q; z <= ie && !($ >= C); z++)
                  Z.push({ data: D == null ? void 0 : D[z], index: z, offset: $, size: X }), $ += X + A;
              }
            });
            return Vo(K, N, I, A, M, L);
          }
        ),
        //@ts-expect-error filter needs to be fixed
        se((w) => w !== null),
        _e()
      ),
      cs
    );
    oe(
      U(
        e,
        se(Da),
        ne((w) => w == null ? void 0 : w.length)
      ),
      o
    ), oe(
      U(
        S,
        ne((w) => w.topListHeight)
      ),
      d
    ), oe(d, a), oe(
      U(
        S,
        ne((w) => [w.top, w.bottom])
      ),
      s
    ), oe(
      U(
        S,
        ne((w) => w.items)
      ),
      b
    );
    const E = It(
      U(
        S,
        se(({ items: w }) => w.length > 0),
        pe(o, e),
        se(([{ items: w }, C]) => w[w.length - 1].originalIndex === C - 1),
        ne(([, w, C]) => [w - 1, C]),
        _e(Jr),
        ne(([w]) => w)
      )
    ), T = It(
      U(
        S,
        vn(200),
        se(({ items: w, topItems: C }) => w.length > 0 && w[0].originalIndex === C.length),
        ne(({ items: w }) => w[0].index),
        _e()
      )
    ), x = It(
      U(
        S,
        se(({ items: w }) => w.length > 0),
        ne(({ items: w }) => {
          let C = 0, I = w.length - 1;
          for (; w[C].type === "group" && C < I; )
            C++;
          for (; w[I].type === "group" && I > C; )
            I--;
          return {
            endIndex: w[I].index,
            startIndex: w[C].index
          };
        }),
        _e($d)
      )
    );
    return { endReached: E, initialItemCount: y, itemsRendered: b, listState: S, rangeChanged: x, startReached: T, topItemsIndexes: p, ...h };
  },
  Be(
    un,
    Bd,
    Ha,
    po,
    fo,
    mo,
    Rn,
    La
  ),
  { singleton: !0 }
), zd = ve(
  ([{ fixedFooterHeight: e, fixedHeaderHeight: t, footerHeight: n, headerHeight: r }, { listState: o }]) => {
    const i = he(), s = ut(
      U(
        et(n, e, r, t, o),
        ne(([a, c, u, f, d]) => a + c + u + f + d.offsetBottom + d.bottom)
      ),
      0
    );
    return oe(ae(s), i), { totalListHeight: s, totalListHeightChanged: i };
  },
  Be(gt, zn),
  { singleton: !0 }
), rb = ve(
  ([{ viewportHeight: e }, { totalListHeight: t }]) => {
    const n = G(!1), r = ut(
      U(
        et(n, e, t),
        se(([o]) => o),
        ne(([, o, i]) => Math.max(0, o - i)),
        vn(0),
        _e()
      ),
      0
    );
    return { alignToBottom: n, paddingTopAddition: r };
  },
  Be(gt, zd),
  { singleton: !0 }
);
function Ec(e) {
  return e ? e === "smooth" ? "smooth" : "auto" : !1;
}
const ob = (e, t) => typeof e == "function" ? Ec(e(t)) : t && Ec(e), ib = ve(
  ([
    { listRefresh: e, totalCount: t },
    { atBottomState: n, isAtBottom: r },
    { scrollToIndex: o },
    { scrolledToInitialItem: i },
    { didMount: s, propsReady: a },
    { log: c },
    { scrollingInProgress: u }
  ]) => {
    const f = G(!1), d = he();
    let h = null;
    function g(p) {
      de(o, {
        align: "end",
        behavior: p,
        index: "LAST"
      });
    }
    Oe(
      U(
        et(U(ae(t), dr(1)), s),
        pe(ae(f), r, i, u),
        ne(([[p, y], b, S, E, T]) => {
          let x = y && E, w = "auto";
          return x && (w = ob(b, S || T), x = x && !!w), { followOutputBehavior: w, shouldFollow: x, totalCount: p };
        }),
        se(({ shouldFollow: p }) => p)
      ),
      ({ followOutputBehavior: p, totalCount: y }) => {
        h && (h(), h = null), h = ln(e, () => {
          ct(c)("following output to ", { totalCount: y }, Pt.DEBUG), g(p), h = null;
        });
      }
    );
    function v(p) {
      const y = ln(n, (b) => {
        p && !b.atBottom && b.notAtBottomBecause === "SIZE_INCREASED" && !h && (ct(c)("scrolling to bottom due to increased size", {}, Pt.DEBUG), g("auto"));
      });
      setTimeout(y, 100);
    }
    return Oe(
      U(
        et(ae(f), t, a),
        se(([p, , y]) => p && y),
        rn(
          ({ value: p }, [, y]) => ({ refreshed: p === y, value: y }),
          { refreshed: !1, value: 0 }
        ),
        se(({ refreshed: p }) => p),
        pe(f, t)
      ),
      ([, p]) => {
        ct(i) && v(p !== !1);
      }
    ), Oe(d, () => {
      v(ct(f) !== !1);
    }), Oe(et(ae(f), n), ([p, y]) => {
      p && !y.atBottom && y.notAtBottomBecause === "VIEWPORT_HEIGHT_DECREASING" && g("auto");
    }), { autoscrollToBottom: d, followOutput: f };
  },
  Be(un, mo, fo, po, Rn, On, gt)
), sb = ve(
  ([{ data: e, firstItemIndex: t, gap: n, sizes: r }, { initialTopMostItemIndex: o }, { initialItemCount: i, listState: s }, { didMount: a }]) => (oe(
    U(
      a,
      pe(i),
      se(([, c]) => c !== 0),
      pe(o, r, t, n, e),
      ne(([[, c], u, f, d, h, g = []]) => Fd(c, u, f, d, h, g))
    ),
    s
  ), {}),
  Be(un, po, zn, Rn),
  { singleton: !0 }
), ab = ve(
  ([{ didMount: e }, { scrollTo: t }, { listState: n }]) => {
    const r = G(0);
    return Oe(
      U(
        e,
        pe(r),
        se(([, o]) => o !== 0),
        ne(([, o]) => ({ top: o }))
      ),
      (o) => {
        ln(
          U(
            n,
            dr(1),
            se((i) => i.items.length > 1)
          ),
          () => {
            requestAnimationFrame(() => {
              de(t, o);
            });
          }
        );
      }
    ), {
      initialScrollTop: r
    };
  },
  Be(Rn, gt, zn),
  { singleton: !0 }
), lb = ({
  itemBottom: e,
  itemTop: t,
  locationParams: { align: n, behavior: r, ...o },
  viewportBottom: i,
  viewportTop: s
}) => t < s ? { ...o, align: n ?? "start", behavior: r } : e > i ? { ...o, align: n ?? "end", behavior: r } : null, cb = ve(
  ([
    { gap: e, sizes: t, totalCount: n },
    { fixedFooterHeight: r, fixedHeaderHeight: o, headerHeight: i, scrollingInProgress: s, scrollTop: a, viewportHeight: c },
    { scrollToIndex: u }
  ]) => {
    const f = he();
    return oe(
      U(
        f,
        pe(t, c, n, i, o, r, a),
        pe(e),
        ne(([[d, h, g, v, p, y, b, S], E]) => {
          const { align: T, behavior: x, calculateViewLocation: w = lb, done: C, ...I } = d, P = _d(d, h, v - 1), m = Qr(P, h.offsetTree, E) + p + y, O = m + Gt(h.sizeTree, P)[1], _ = S + y, L = S + g - b, A = w({
            itemBottom: O,
            itemTop: m,
            locationParams: { align: T, behavior: x, ...I },
            viewportBottom: L,
            viewportTop: _
          });
          return A ? C && ln(
            U(
              s,
              se((D) => !D),
              // skips the initial publish of false, and the cleanup call.
              // but if scrollingInProgress is true, we skip the initial publish.
              dr(ct(s) ? 1 : 2)
            ),
            C
          ) : C && C(), A;
        }),
        se((d) => d !== null)
      ),
      u
    ), {
      scrollIntoView: f
    };
  },
  Be(un, gt, fo, zn, On),
  { singleton: !0 }
), Hd = ve(
  ([{ scrollVelocity: e }]) => {
    const t = G(!1), n = he(), r = G(!1);
    return oe(
      U(
        e,
        pe(r, t, n),
        se(([o, i]) => !!i),
        ne(([o, i, s, a]) => {
          const { enter: c, exit: u } = i;
          if (s) {
            if (u(o, a))
              return !1;
          } else if (c(o, a))
            return !0;
          return s;
        }),
        _e()
      ),
      t
    ), Oe(
      U(et(t, e, n), pe(r)),
      ([[o, i, s], a]) => {
        o && a && a.change && a.change(i, s);
      }
    ), { isSeeking: t, scrollSeekConfiguration: r, scrollSeekRangeChanged: n, scrollVelocity: e };
  },
  Be(mo),
  { singleton: !0 }
), Va = ve(([{ scrollContainerState: e, scrollTo: t }]) => {
  const n = he(), r = he(), o = he(), i = G(!1), s = G(void 0);
  return oe(
    U(
      et(n, r),
      ne(([{ scrollHeight: a, scrollTop: c, viewportHeight: u }, { offsetTop: f }]) => ({
        scrollHeight: a,
        scrollTop: Math.max(0, c - f),
        viewportHeight: u
      }))
    ),
    e
  ), oe(
    U(
      t,
      pe(r),
      ne(([a, { offsetTop: c }]) => ({
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
}, Be(gt)), ub = ve(
  ([
    { sizeRanges: e, sizes: t },
    { headerHeight: n, scrollTop: r },
    { initialTopMostItemIndex: o },
    { didMount: i },
    { useWindowScroll: s, windowScrollContainerState: a, windowViewportRect: c }
  ]) => {
    const u = he(), f = G(void 0), d = G(null), h = G(null);
    return oe(a, d), oe(c, h), Oe(
      U(
        u,
        pe(t, r, s, d, h, n)
      ),
      ([g, v, p, y, b, S, E]) => {
        const T = Y0(v.sizeTree);
        y && b !== null && S !== null && (p = b.scrollTop - S.offsetTop), p -= E, g({ ranges: T, scrollTop: p });
      }
    ), oe(U(f, se(Da), ne(db)), o), oe(
      U(
        i,
        pe(f),
        se(([, g]) => g !== void 0),
        _e(),
        ne(([, g]) => g.ranges)
      ),
      e
    ), {
      getState: u,
      restoreStateFrom: f
    };
  },
  Be(un, gt, po, Rn, Va)
);
function db(e) {
  return { align: "start", index: 0, offset: e.scrollTop };
}
const fb = ve(([{ topItemsIndexes: e }]) => {
  const t = G(0);
  return oe(
    U(
      t,
      se((n) => n >= 0),
      ne((n) => Array.from({ length: n }).map((r, o) => o))
    ),
    e
  ), { topItemCount: t };
}, Be(zn));
function Vd(e) {
  let t = !1, n;
  return () => (t || (t = !0, n = e()), n);
}
const pb = Vd(() => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent)), mb = ve(
  ([
    { deviation: e, scrollBy: t, scrollingInProgress: n, scrollTop: r },
    { isAtBottom: o, isScrolling: i, lastJumpDueToItemResize: s, scrollDirection: a },
    { listState: c },
    { beforeUnshiftWith: u, gap: f, shiftWithOffset: d, sizes: h },
    { log: g },
    { recalcInProgress: v }
  ]) => {
    const p = It(
      U(
        c,
        pe(s),
        rn(
          ([, b, S, E], [{ bottom: T, items: x, offsetBottom: w, totalCount: C }, I]) => {
            const P = T + w;
            let m = 0;
            return S === C && b.length > 0 && x.length > 0 && (x[0].originalIndex === 0 && b[0].originalIndex === 0 || (m = P - E, m !== 0 && (m += I))), [m, x, C, P];
          },
          [0, [], 0, 0]
        ),
        se(([b]) => b !== 0),
        pe(r, a, n, o, g, v),
        se(([, b, S, E, , , T]) => !T && !E && b !== 0 && S === Zr),
        ne(([[b], , , , , S]) => (S("Upward scrolling compensation", { amount: b }, Pt.DEBUG), b))
      )
    );
    function y(b) {
      b > 0 ? (de(t, { behavior: "auto", top: -b }), de(e, 0)) : (de(e, 0), de(t, { behavior: "auto", top: -b }));
    }
    return Oe(U(p, pe(e, i)), ([b, S, E]) => {
      E && pb() ? de(e, S - b) : y(-b);
    }), Oe(
      U(
        et(ut(i, !1), e, v),
        se(([b, S, E]) => !b && !E && S !== 0),
        ne(([b, S]) => S),
        vn(1)
      ),
      y
    ), oe(
      U(
        d,
        ne((b) => ({ top: -b }))
      ),
      t
    ), Oe(
      U(
        u,
        pe(h, f),
        ne(([b, { groupIndices: S, lastSize: E, sizeTree: T }, x]) => {
          function w(C) {
            return C * (E + x);
          }
          if (S.length === 0)
            return w(b);
          {
            let C = 0;
            const I = Xr(T, 0);
            let P = 0, m = 0;
            for (; P < b; ) {
              P++, C += I;
              let O = S.length === m + 1 ? 1 / 0 : S[m + 1] - S[m] - 1;
              P + O > b && (C -= I, O = b - P + 1), P += O, C += w(O), m++;
            }
            return C;
          }
        })
      ),
      (b) => {
        de(e, b), requestAnimationFrame(() => {
          de(t, { top: b }), requestAnimationFrame(() => {
            de(e, 0), de(v, !1);
          });
        });
      }
    ), { deviation: e };
  },
  Be(gt, mo, zn, un, On, La)
), hb = ve(
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
  Be(
    Ha,
    sb,
    Rn,
    Hd,
    zd,
    ab,
    rb,
    Va,
    cb,
    On
  )
), Wd = ve(
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
    { listState: S, topItemsIndexes: E, ...T },
    { scrollToIndex: x },
    w,
    { topItemCount: C },
    { groupCounts: I },
    P
  ]) => (oe(T.rangeChanged, P.scrollSeekRangeChanged), oe(
    U(
      P.windowViewportRect,
      ne((m) => m.visibleHeight)
    ),
    p.viewportHeight
  ), {
    data: e,
    defaultItemHeight: t,
    firstItemIndex: n,
    fixedItemHeight: r,
    gap: o,
    groupCounts: I,
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
    listState: S,
    scrollToIndex: x,
    // output
    statefulTotalCount: u,
    trackItemSizes: d,
    // exported from stateFlagsSystem
    ...T,
    // the bag of IO from featureGroup1System
    ...P,
    ...p,
    sizes: c,
    ...y
  }),
  Be(
    un,
    po,
    gt,
    ub,
    ib,
    zn,
    fo,
    mb,
    fb,
    Bd,
    hb
  )
);
function gb(e, t) {
  const n = {}, r = {};
  let o = 0;
  const i = e.length;
  for (; o < i; )
    r[e[o]] = 1, o += 1;
  for (const s in t)
    Object.hasOwn(r, s) || (n[s] = t[s]);
  return n;
}
const Io = typeof document < "u" ? k.useLayoutEffect : k.useEffect;
function Ud(e, t, n) {
  const r = Object.keys(t.required || {}), o = Object.keys(t.optional || {}), i = Object.keys(t.methods || {}), s = Object.keys(t.events || {}), a = k.createContext({});
  function c(y, b) {
    y.propsReady && de(y.propsReady, !1);
    for (const S of r) {
      const E = y[t.required[S]];
      de(E, b[S]);
    }
    for (const S of o)
      if (S in b) {
        const E = y[t.optional[S]];
        de(E, b[S]);
      }
    y.propsReady && de(y.propsReady, !0);
  }
  function u(y) {
    return i.reduce((b, S) => (b[S] = (E) => {
      const T = y[t.methods[S]];
      de(T, E);
    }, b), {});
  }
  function f(y) {
    return s.reduce((b, S) => (b[S] = M0(y[t.events[S]]), b), {});
  }
  const d = k.forwardRef((y, b) => {
    const { children: S, ...E } = y, [T] = k.useState(() => ji($0(e), (C) => {
      c(C, E);
    })), [x] = k.useState(mc(f, T));
    Io(() => {
      for (const C of s)
        C in E && Oe(x[C], E[C]);
      return () => {
        Object.values(x).map(_a);
      };
    }, [E, x, T]), Io(() => {
      c(T, E);
    }), k.useImperativeHandle(b, pc(u(T)));
    const w = n;
    return /* @__PURE__ */ B(a.Provider, { value: T, children: n ? /* @__PURE__ */ B(w, { ...gb([...r, ...o, ...s], E), children: S }) : S });
  }), h = (y) => k.useCallback(Cd(de, k.useContext(a)[y]), [y]), g = (y) => {
    const b = k.useContext(a)[y], S = k.useCallback(
      (E) => Oe(b, E),
      [b]
    );
    return k.useSyncExternalStore(
      S,
      () => ct(b),
      () => ct(b)
    );
  }, v = (y) => {
    const b = k.useContext(a)[y], [S, E] = k.useState(mc(ct, b));
    return Io(
      () => Oe(b, (T) => {
        T !== S && E(pc(T));
      }),
      [b, S]
    ), S;
  }, p = k.version.startsWith("18") ? g : v;
  return {
    Component: d,
    useEmitter: (y, b) => {
      const S = k.useContext(a)[y];
      Io(() => Oe(S, b), [b, S]);
    },
    useEmitterValue: p,
    usePublisher: h
  };
}
const Yd = k.createContext(void 0), qd = k.createContext(void 0), Gd = typeof document < "u" ? k.useLayoutEffect : k.useEffect;
function us(e) {
  return "self" in e;
}
function yb(e) {
  return "body" in e;
}
function Kd(e, t, n, r = yr, o, i) {
  const s = k.useRef(null), a = k.useRef(null), c = k.useRef(null), u = k.useCallback(
    (h) => {
      let g, v, p;
      const y = h.target;
      if (yb(y) || us(y)) {
        const S = us(y) ? y : y.defaultView;
        p = i ? S.scrollX : S.scrollY, g = i ? S.document.documentElement.scrollWidth : S.document.documentElement.scrollHeight, v = i ? S.innerWidth : S.innerHeight;
      } else
        p = i ? y.scrollLeft : y.scrollTop, g = i ? y.scrollWidth : y.scrollHeight, v = i ? y.offsetWidth : y.offsetHeight;
      const b = () => {
        e({
          scrollHeight: g,
          scrollTop: Math.max(p, 0),
          viewportHeight: v
        });
      };
      h.suppressFlushSync ? b() : Qn.flushSync(b), a.current !== null && (p === a.current || p <= 0 || p === g - v) && (a.current = null, t(!0), c.current && (clearTimeout(c.current), c.current = null));
    },
    [e, t]
  );
  k.useEffect(() => {
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
    us(g) ? (y = Math.max(
      wn(g.document.documentElement, i ? "width" : "height"),
      i ? g.document.documentElement.scrollWidth : g.document.documentElement.scrollHeight
    ), p = i ? g.innerWidth : g.innerHeight, b = i ? window.scrollX : window.scrollY) : (y = g[i ? "scrollWidth" : "scrollHeight"], p = wn(g, i ? "width" : "height"), b = g[i ? "scrollLeft" : "scrollTop"]);
    const S = y - p;
    if (h.top = Math.ceil(Math.max(Math.min(S, h.top), 0)), jd(p, y) || h.top === b) {
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
const ds = "-webkit-sticky", Cc = "sticky", Xd = Vd(() => {
  if (typeof document > "u")
    return Cc;
  const e = document.createElement("div");
  return e.style.position = ds, e.style.position === ds ? ds : Cc;
});
function Wa(e) {
  return e;
}
const vb = /* @__PURE__ */ ve(() => {
  const e = G((c) => `Item ${c}`), t = G(null), n = G((c) => `Group ${c}`), r = G({}), o = G(Wa), i = G("div"), s = G(yr), a = (c, u = null) => ut(
    U(
      r,
      ne((f) => f[c]),
      _e()
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
}), bb = /* @__PURE__ */ ve(
  ([e, t]) => ({ ...e, ...t }),
  Be(Wd, vb)
), xb = ({ height: e }) => /* @__PURE__ */ B("div", { style: { height: e } }), Sb = { overflowAnchor: "none", position: Xd(), zIndex: 1 }, Jd = { overflowAnchor: "none" }, wb = { ...Jd, display: "inline-block", height: "100%" }, Oc = /* @__PURE__ */ k.memo(function({ showTopList: e = !1 }) {
  const t = le("listState"), n = Bt("sizeRanges"), r = le("useWindowScroll"), o = le("customScrollParent"), i = Bt("windowScrollContainerState"), s = Bt("scrollContainerState"), a = o || r ? i : s, c = le("itemContent"), u = le("context"), f = le("groupContent"), d = le("trackItemSizes"), h = le("itemSize"), g = le("log"), v = Bt("gap"), p = le("horizontalDirection"), { callbackRef: y } = _0(
    n,
    h,
    d,
    e ? yr : a,
    g,
    v,
    o,
    p,
    le("skipAnimationFrameInResizeObserver")
  ), [b, S] = k.useState(0);
  Ua("deviation", (A) => {
    b !== A && S(A);
  });
  const E = le("EmptyPlaceholder"), T = le("ScrollSeekPlaceholder") || xb, x = le("ListComponent"), w = le("ItemComponent"), C = le("GroupComponent"), I = le("computeItemKey"), P = le("isSeeking"), m = le("groupIndices").length > 0, O = le("alignToBottom"), _ = le("initialItemFinalLocationReached"), L = e ? {} : {
    boxSizing: "border-box",
    ...p ? {
      display: "inline-block",
      height: "100%",
      marginLeft: b !== 0 ? b : O ? "auto" : 0,
      paddingLeft: t.offsetTop,
      paddingRight: t.offsetBottom,
      whiteSpace: "nowrap"
    } : {
      marginTop: b !== 0 ? b : O ? "auto" : 0,
      paddingBottom: t.offsetBottom,
      paddingTop: t.offsetTop
    },
    ..._ ? {} : { visibility: "hidden" }
  };
  return !e && t.totalCount === 0 && E ? /* @__PURE__ */ B(E, { ...st(E, u) }) : /* @__PURE__ */ B(
    x,
    {
      ...st(x, u),
      "data-testid": e ? "virtuoso-top-item-list" : "virtuoso-item-list",
      ref: y,
      style: L,
      children: (e ? t.topItems : t.items).map((A) => {
        const D = A.originalIndex, M = I(D + t.firstItemIndex, A.data, u);
        return P ? /* @__PURE__ */ An(
          T,
          {
            ...st(T, u),
            height: A.size,
            index: A.index,
            key: M,
            type: A.type || "item",
            ...A.type === "group" ? {} : { groupIndex: A.groupIndex }
          }
        ) : A.type === "group" ? /* @__PURE__ */ An(
          C,
          {
            ...st(C, u),
            "data-index": D,
            "data-item-index": A.index,
            "data-known-size": A.size,
            key: M,
            style: Sb
          },
          f(A.index, u)
        ) : /* @__PURE__ */ An(
          w,
          {
            ...st(w, u),
            ...Ob(w, A.data),
            "data-index": D,
            "data-item-group-index": A.groupIndex,
            "data-item-index": A.index,
            "data-known-size": A.size,
            key: M,
            style: p ? wb : Jd
          },
          m ? c(A.index, A.groupIndex, A.data, u) : c(A.index, A.data, u)
        );
      })
    }
  );
}), Tb = {
  height: "100%",
  outline: "none",
  overflowY: "auto",
  position: "relative",
  WebkitOverflowScrolling: "touch"
}, Eb = {
  outline: "none",
  overflowX: "auto",
  position: "relative"
}, Hi = (e) => ({
  height: "100%",
  position: "absolute",
  top: 0,
  width: "100%",
  ...e ? { display: "flex", flexDirection: "column" } : {}
}), Cb = {
  position: Xd(),
  top: 0,
  width: "100%",
  zIndex: 1
};
function st(e, t) {
  if (typeof e != "string")
    return { context: t };
}
function Ob(e, t) {
  return { item: typeof e == "string" ? void 0 : t };
}
const Rb = /* @__PURE__ */ k.memo(function() {
  const e = le("HeaderComponent"), t = Bt("headerHeight"), n = le("HeaderFooterTag"), r = Fn(
    k.useMemo(
      () => (i) => {
        t(wn(i, "height"));
      },
      [t]
    ),
    !0,
    le("skipAnimationFrameInResizeObserver")
  ), o = le("context");
  return e ? /* @__PURE__ */ B(n, { ref: r, children: /* @__PURE__ */ B(e, { ...st(e, o) }) }) : null;
}), Ib = /* @__PURE__ */ k.memo(function() {
  const e = le("FooterComponent"), t = Bt("footerHeight"), n = le("HeaderFooterTag"), r = Fn(
    k.useMemo(
      () => (i) => {
        t(wn(i, "height"));
      },
      [t]
    ),
    !0,
    le("skipAnimationFrameInResizeObserver")
  ), o = le("context");
  return e ? /* @__PURE__ */ B(n, { ref: r, children: /* @__PURE__ */ B(e, { ...st(e, o) }) }) : null;
});
function Qd({ useEmitter: e, useEmitterValue: t, usePublisher: n }) {
  return k.memo(function({ children: r, style: o, ...i }) {
    const s = n("scrollContainerState"), a = t("ScrollerComponent"), c = n("smoothScrollTargetReached"), u = t("scrollerRef"), f = t("context"), d = t("horizontalDirection") || !1, { scrollByCallback: h, scrollerRef: g, scrollToCallback: v } = Kd(
      s,
      c,
      a,
      u,
      void 0,
      d
    );
    return e("scrollTo", v), e("scrollBy", h), /* @__PURE__ */ B(
      a,
      {
        "data-testid": "virtuoso-scroller",
        "data-virtuoso-scroller": !0,
        ref: g,
        style: { ...d ? Eb : Tb, ...o },
        tabIndex: 0,
        ...i,
        ...st(a, f),
        children: r
      }
    );
  });
}
function Zd({ useEmitter: e, useEmitterValue: t, usePublisher: n }) {
  return k.memo(function({ children: r, style: o, ...i }) {
    const s = n("windowScrollContainerState"), a = t("ScrollerComponent"), c = n("smoothScrollTargetReached"), u = t("totalListHeight"), f = t("deviation"), d = t("customScrollParent"), h = t("context"), g = k.useRef(null), v = t("scrollerRef"), { scrollByCallback: p, scrollerRef: y, scrollToCallback: b } = Kd(
      s,
      c,
      a,
      v,
      d
    );
    return Gd(() => {
      var S;
      return y.current = d || ((S = g.current) == null ? void 0 : S.ownerDocument.defaultView), () => {
        y.current = null;
      };
    }, [y, d]), e("windowScrollTo", b), e("scrollBy", p), /* @__PURE__ */ B(
      a,
      {
        ref: g,
        "data-virtuoso-scroller": !0,
        style: { position: "relative", ...o, ...u !== 0 ? { height: u + f } : {} },
        ...i,
        ...st(a, h),
        children: r
      }
    );
  });
}
const Pb = ({ children: e }) => {
  const t = k.useContext(Yd), n = Bt("viewportHeight"), r = Bt("fixedItemHeight"), o = le("alignToBottom"), i = le("horizontalDirection"), s = k.useMemo(
    () => Ed(n, (c) => wn(c, i ? "width" : "height")),
    [n, i]
  ), a = Fn(s, !0, le("skipAnimationFrameInResizeObserver"));
  return k.useEffect(() => {
    t && (n(t.viewportHeight), r(t.itemHeight));
  }, [t, n, r]), /* @__PURE__ */ B("div", { "data-viewport-type": "element", ref: a, style: Hi(o), children: e });
}, kb = ({ children: e }) => {
  const t = k.useContext(Yd), n = Bt("windowViewportRect"), r = Bt("fixedItemHeight"), o = le("customScrollParent"), i = Rd(
    n,
    o,
    le("skipAnimationFrameInResizeObserver")
  ), s = le("alignToBottom");
  return k.useEffect(() => {
    t && (r(t.itemHeight), n({ offsetTop: 0, visibleHeight: t.viewportHeight, visibleWidth: 100 }));
  }, [t, n, r]), /* @__PURE__ */ B("div", { "data-viewport-type": "window", ref: i, style: Hi(s), children: e });
}, Mb = ({ children: e }) => {
  const t = le("TopItemListComponent") || "div", n = le("headerHeight"), r = { ...Cb, marginTop: `${n}px` }, o = le("context");
  return /* @__PURE__ */ B(t, { style: r, ...st(t, o), children: e });
}, Nb = /* @__PURE__ */ k.memo(function(e) {
  const t = le("useWindowScroll"), n = le("topItemsIndexes").length > 0, r = le("customScrollParent"), o = le("context"), i = r || t ? Db : Ab, s = r || t ? kb : Pb;
  return /* @__PURE__ */ Je(i, { ...e, ...st(i, o), children: [
    n && /* @__PURE__ */ B(Mb, { children: /* @__PURE__ */ B(Oc, { showTopList: !0 }) }),
    /* @__PURE__ */ Je(s, { children: [
      /* @__PURE__ */ B(Rb, {}),
      /* @__PURE__ */ B(Oc, {}),
      /* @__PURE__ */ B(Ib, {})
    ] })
  ] });
}), {
  Component: $b,
  useEmitter: Ua,
  useEmitterValue: le,
  usePublisher: Bt
} = /* @__PURE__ */ Ud(
  bb,
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
  Nb
), Ab = /* @__PURE__ */ Qd({ useEmitter: Ua, useEmitterValue: le, usePublisher: Bt }), Db = /* @__PURE__ */ Zd({ useEmitter: Ua, useEmitterValue: le, usePublisher: Bt }), _b = $b, Bb = /* @__PURE__ */ ve(() => {
  const e = G((c) => /* @__PURE__ */ Je("td", { children: [
    "Item $",
    c
  ] })), t = G(null), n = G(null), r = G(null), o = G({}), i = G(Wa), s = G(yr), a = (c, u = null) => ut(
    U(
      o,
      ne((f) => f[c]),
      _e()
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
Be(Wd, Bb);
const Rc = {
  bottom: 0,
  itemHeight: 0,
  items: [],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, Lb = {
  bottom: 0,
  itemHeight: 0,
  items: [{ index: 0 }],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, { ceil: Ic, floor: di, max: Dr, min: fs, round: Pc } = Math;
function kc(e, t, n) {
  return Array.from({ length: t - e + 1 }).map((r, o) => ({ data: n === null ? null : n[o + e], index: o + e }));
}
function jb(e) {
  return {
    ...Lb,
    items: e
  };
}
function Po(e, t) {
  return e && e.width === t.width && e.height === t.height;
}
function Fb(e, t) {
  return e && e.column === t.column && e.row === t.row;
}
const zb = /* @__PURE__ */ ve(
  ([
    { increaseViewportBy: e, listBoundary: t, overscan: n, visibleRange: r },
    { footerHeight: o, headerHeight: i, scrollBy: s, scrollContainerState: a, scrollTo: c, scrollTop: u, smoothScrollTargetReached: f, viewportHeight: d },
    h,
    g,
    { didMount: v, propsReady: p },
    { customScrollParent: y, useWindowScroll: b, windowScrollContainerState: S, windowScrollTo: E, windowViewportRect: T },
    x
  ]) => {
    const w = G(0), C = G(0), I = G(Rc), P = G({ height: 0, width: 0 }), m = G({ height: 0, width: 0 }), O = he(), _ = he(), L = G(0), A = G(null), D = G({ column: 0, row: 0 }), M = he(), W = he(), te = G(!1), Q = G(0), N = G(!0), j = G(!1), H = G(!1);
    Oe(
      U(
        v,
        pe(Q),
        se(([$, q]) => !!q)
      ),
      () => {
        de(N, !1);
      }
    ), Oe(
      U(
        et(v, N, m, P, Q, j),
        se(([$, q, X, ie, , z]) => $ && !q && X.height !== 0 && ie.height !== 0 && !z)
      ),
      ([, , , , $]) => {
        de(j, !0), Fa(1, () => {
          de(O, $);
        }), ln(U(u), () => {
          de(t, [0, 0]), de(N, !0);
        });
      }
    ), oe(
      U(
        W,
        se(($) => $ != null && $.scrollTop > 0),
        tn(0)
      ),
      C
    ), Oe(
      U(
        v,
        pe(W),
        se(([, $]) => $ != null)
      ),
      ([, $]) => {
        $ && (de(P, $.viewport), de(m, $.item), de(D, $.gap), $.scrollTop > 0 && (de(te, !0), ln(U(u, dr(1)), (q) => {
          de(te, !1);
        }), de(c, { top: $.scrollTop })));
      }
    ), oe(
      U(
        P,
        ne(({ height: $ }) => $)
      ),
      d
    ), oe(
      U(
        et(
          ae(P, Po),
          ae(m, Po),
          ae(D, ($, q) => $ && $.column === q.column && $.row === q.row),
          ae(u)
        ),
        ne(([$, q, X, ie]) => ({
          gap: X,
          item: q,
          scrollTop: ie,
          viewport: $
        }))
      ),
      M
    ), oe(
      U(
        et(
          ae(w),
          r,
          ae(D, Fb),
          ae(m, Po),
          ae(P, Po),
          ae(A),
          ae(C),
          ae(te),
          ae(N),
          ae(Q)
        ),
        se(([, , , , , , , $]) => !$),
        ne(
          ([
            $,
            [q, X],
            ie,
            z,
            fe,
            Te,
            Fe,
            ,
            nt,
            be
          ]) => {
            const { column: Re, row: me } = ie, { height: Ae, width: ze } = z, { width: ee } = fe;
            if (Fe === 0 && ($ === 0 || ee === 0))
              return Rc;
            if (ze === 0) {
              const ue = za(be, $), He = ue + Math.max(Fe - 1, 0);
              return jb(kc(ue, He, Te));
            }
            const Qe = ef(ee, ze, Re);
            let rt, ot;
            nt ? q === 0 && X === 0 && Fe > 0 ? (rt = 0, ot = Fe - 1) : (rt = Qe * di((q + me) / (Ae + me)), ot = Qe * Ic((X + me) / (Ae + me)) - 1, ot = fs($ - 1, Dr(ot, Qe - 1)), rt = fs(ot, Dr(0, rt))) : (rt = 0, ot = -1);
            const dt = kc(rt, ot, Te), { bottom: yt, top: wt } = Mc(fe, ie, z, dt), ft = Ic($ / Qe), Ee = ft * Ae + (ft - 1) * me - yt;
            return { bottom: yt, itemHeight: Ae, items: dt, itemWidth: ze, offsetBottom: Ee, offsetTop: wt, top: wt };
          }
        )
      ),
      I
    ), oe(
      U(
        A,
        se(($) => $ !== null),
        ne(($) => $.length)
      ),
      w
    ), oe(
      U(
        et(P, m, I, D),
        se(([$, q, { items: X }]) => X.length > 0 && q.height !== 0 && $.height !== 0),
        ne(([$, q, { items: X }, ie]) => {
          const { bottom: z, top: fe } = Mc($, ie, q, X);
          return [fe, z];
        }),
        _e(Jr)
      ),
      t
    );
    const V = G(!1);
    oe(
      U(
        u,
        pe(V),
        ne(([$, q]) => q || $ !== 0)
      ),
      V
    );
    const K = It(
      U(
        et(I, w),
        se(([{ items: $ }]) => $.length > 0),
        pe(V),
        se(([[$, q], X]) => {
          const ie = $.items[$.items.length - 1].index === q - 1;
          return (X || $.bottom > 0 && $.itemHeight > 0 && $.offsetBottom === 0 && $.items.length === q) && ie;
        }),
        ne(([[, $]]) => $ - 1),
        _e()
      )
    ), Z = It(
      U(
        ae(I),
        se(({ items: $ }) => $.length > 0 && $[0].index === 0),
        tn(0),
        _e()
      )
    ), Y = It(
      U(
        ae(I),
        pe(te),
        se(([{ items: $ }, q]) => $.length > 0 && !q),
        ne(([{ items: $ }]) => ({
          endIndex: $[$.length - 1].index,
          startIndex: $[0].index
        })),
        _e($d),
        vn(0)
      )
    );
    oe(Y, g.scrollSeekRangeChanged), oe(
      U(
        O,
        pe(P, m, w, D),
        ne(([$, q, X, ie, z]) => {
          const fe = Ld($), { align: Te, behavior: Fe, offset: nt } = fe;
          let be = fe.index;
          be === "LAST" && (be = ie - 1), be = Dr(0, be, fs(ie - 1, be));
          let Re = Hs(q, z, X, be);
          return Te === "end" ? Re = Pc(Re - q.height + X.height) : Te === "center" && (Re = Pc(Re - q.height / 2 + X.height / 2)), nt && (Re += nt), { behavior: Fe, top: Re };
        })
      ),
      c
    );
    const J = ut(
      U(
        I,
        ne(($) => $.offsetBottom + $.bottom)
      ),
      0
    );
    return oe(
      U(
        T,
        ne(($) => ({ height: $.visibleHeight, width: $.visibleWidth }))
      ),
      P
    ), {
      customScrollParent: y,
      // input
      data: A,
      deviation: L,
      footerHeight: o,
      gap: D,
      headerHeight: i,
      increaseViewportBy: e,
      initialItemCount: C,
      itemDimensions: m,
      overscan: n,
      restoreStateFrom: W,
      scrollBy: s,
      scrollContainerState: a,
      scrollHeight: _,
      scrollTo: c,
      scrollToIndex: O,
      scrollTop: u,
      smoothScrollTargetReached: f,
      totalCount: w,
      useWindowScroll: b,
      viewportDimensions: P,
      windowScrollContainerState: S,
      windowScrollTo: E,
      windowViewportRect: T,
      ...g,
      // output
      gridState: I,
      horizontalDirection: H,
      initialTopMostItemIndex: Q,
      totalListHeight: J,
      ...h,
      endReached: K,
      propsReady: p,
      rangeChanged: Y,
      startReached: Z,
      stateChanged: M,
      stateRestoreInProgress: te,
      ...x
    };
  },
  Be(Ha, gt, mo, Hd, Rn, Va, On)
);
function ef(e, t, n) {
  return Dr(1, di((e + n) / (di(t) + n)));
}
function Mc(e, t, n, r) {
  const { height: o } = n;
  if (o === void 0 || r.length === 0)
    return { bottom: 0, top: 0 };
  const i = Hs(e, t, n, r[0].index);
  return { bottom: Hs(e, t, n, r[r.length - 1].index) + o, top: i };
}
function Hs(e, t, n, r) {
  const o = ef(e.width, n.width, t.column), i = di(r / o), s = i * n.height + Dr(0, i - 1) * t.row;
  return s > 0 ? s + t.row : s;
}
const Hb = /* @__PURE__ */ ve(() => {
  const e = G((d) => `Item ${d}`), t = G({}), n = G(null), r = G("virtuoso-grid-item"), o = G("virtuoso-grid-list"), i = G(Wa), s = G("div"), a = G(yr), c = (d, h = null) => ut(
    U(
      t,
      ne((g) => g[d]),
      _e()
    ),
    h
  ), u = G(!1), f = G(!1);
  return oe(ae(f), u), {
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
}), Vb = /* @__PURE__ */ ve(
  ([e, t]) => ({ ...e, ...t }),
  Be(zb, Hb)
), Wb = /* @__PURE__ */ k.memo(function() {
  const e = je("gridState"), t = je("listClassName"), n = je("itemClassName"), r = je("itemContent"), o = je("computeItemKey"), i = je("isSeeking"), s = Lt("scrollHeight"), a = je("ItemComponent"), c = je("ListComponent"), u = je("ScrollSeekPlaceholder"), f = je("context"), d = Lt("itemDimensions"), h = Lt("gap"), g = je("log"), v = je("stateRestoreInProgress"), p = Lt("reportReadyState"), y = Fn(
    k.useMemo(
      () => (b) => {
        const S = b.parentElement.parentElement.scrollHeight;
        s(S);
        const E = b.firstChild;
        if (E) {
          const { height: T, width: x } = E.getBoundingClientRect();
          d({ height: T, width: x });
        }
        h({
          column: Nc("column-gap", getComputedStyle(b).columnGap, g),
          row: Nc("row-gap", getComputedStyle(b).rowGap, g)
        });
      },
      [s, d, h, g]
    ),
    !0,
    !1
  );
  return Gd(() => {
    e.itemHeight > 0 && e.itemWidth > 0 && p(!0);
  }, [e]), v ? null : /* @__PURE__ */ B(
    c,
    {
      className: t,
      ref: y,
      ...st(c, f),
      "data-testid": "virtuoso-item-list",
      style: { paddingBottom: e.offsetBottom, paddingTop: e.offsetTop },
      children: e.items.map((b) => {
        const S = o(b.index, b.data, f);
        return i ? /* @__PURE__ */ B(
          u,
          {
            ...st(u, f),
            height: e.itemHeight,
            index: b.index,
            width: e.itemWidth
          },
          S
        ) : /* @__PURE__ */ An(
          a,
          {
            ...st(a, f),
            className: n,
            "data-index": b.index,
            key: S
          },
          r(b.index, b.data, f)
        );
      })
    }
  );
}), Ub = k.memo(function() {
  const e = je("HeaderComponent"), t = Lt("headerHeight"), n = je("headerFooterTag"), r = Fn(
    k.useMemo(
      () => (i) => {
        t(wn(i, "height"));
      },
      [t]
    ),
    !0,
    !1
  ), o = je("context");
  return e ? /* @__PURE__ */ B(n, { ref: r, children: /* @__PURE__ */ B(e, { ...st(e, o) }) }) : null;
}), Yb = k.memo(function() {
  const e = je("FooterComponent"), t = Lt("footerHeight"), n = je("headerFooterTag"), r = Fn(
    k.useMemo(
      () => (i) => {
        t(wn(i, "height"));
      },
      [t]
    ),
    !0,
    !1
  ), o = je("context");
  return e ? /* @__PURE__ */ B(n, { ref: r, children: /* @__PURE__ */ B(e, { ...st(e, o) }) }) : null;
}), qb = ({ children: e }) => {
  const t = k.useContext(qd), n = Lt("itemDimensions"), r = Lt("viewportDimensions"), o = Fn(
    k.useMemo(
      () => (i) => {
        r(i.getBoundingClientRect());
      },
      [r]
    ),
    !0,
    !1
  );
  return k.useEffect(() => {
    t && (r({ height: t.viewportHeight, width: t.viewportWidth }), n({ height: t.itemHeight, width: t.itemWidth }));
  }, [t, r, n]), /* @__PURE__ */ B("div", { ref: o, style: Hi(!1), children: e });
}, Gb = ({ children: e }) => {
  const t = k.useContext(qd), n = Lt("windowViewportRect"), r = Lt("itemDimensions"), o = je("customScrollParent"), i = Rd(n, o, !1);
  return k.useEffect(() => {
    t && (r({ height: t.itemHeight, width: t.itemWidth }), n({ offsetTop: 0, visibleHeight: t.viewportHeight, visibleWidth: t.viewportWidth }));
  }, [t, n, r]), /* @__PURE__ */ B("div", { ref: i, style: Hi(!1), children: e });
}, Kb = /* @__PURE__ */ k.memo(function({ ...e }) {
  const t = je("useWindowScroll"), n = je("customScrollParent"), r = n || t ? Qb : Jb, o = n || t ? Gb : qb, i = je("context");
  return /* @__PURE__ */ B(r, { ...e, ...st(r, i), children: /* @__PURE__ */ Je(o, { children: [
    /* @__PURE__ */ B(Ub, {}),
    /* @__PURE__ */ B(Wb, {}),
    /* @__PURE__ */ B(Yb, {})
  ] }) });
}), {
  Component: Xb,
  useEmitter: tf,
  useEmitterValue: je,
  usePublisher: Lt
} = /* @__PURE__ */ Ud(
  Vb,
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
  Kb
), Jb = /* @__PURE__ */ Qd({ useEmitter: tf, useEmitterValue: je, usePublisher: Lt }), Qb = /* @__PURE__ */ Zd({ useEmitter: tf, useEmitterValue: je, usePublisher: Lt });
function Nc(e, t, n) {
  return t !== "normal" && !(t != null && t.endsWith("px")) && n(`${e} was not resolved to pixel value correctly`, t, Pt.WARN), t === "normal" ? 0 : parseInt(t ?? "0", 10);
}
const Zb = Xb, Jn = {
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
}, ex = [], $c = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (u, f) => {
    const d = typeof u == "function" ? u(t) : u;
    if (!Object.is(d, t)) {
      const h = t;
      t = f ?? (typeof d != "object" || d === null) ? d : Object.assign({}, t, d), n.forEach((g) => g(t, h));
    }
  }, o = () => t, a = { setState: r, getState: o, getInitialState: () => c, subscribe: (u) => (n.add(u), () => n.delete(u)) }, c = t = e(r, o, a);
  return a;
}, tx = (e) => e ? $c(e) : $c, nx = (e) => e;
function nf(e, t = nx) {
  const n = k.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return k.useDebugValue(n), n;
}
const Ac = (e) => {
  const t = tx(e), n = (r) => nf(t, r);
  return Object.assign(n, t), n;
}, Ya = (e) => e ? Ac(e) : Ac, Dc = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, Vs = /* @__PURE__ */ new Map(), ko = (e) => {
  const t = Vs.get(e);
  return t ? Object.fromEntries(
    Object.entries(t.stores).map(([n, r]) => [n, r.getState()])
  ) : {};
}, rx = (e, t, n) => {
  if (e === void 0)
    return {
      type: "untracked",
      connection: t.connect(n)
    };
  const r = Vs.get(n.name);
  if (r)
    return { type: "tracked", store: e, ...r };
  const o = {
    connection: t.connect(n),
    stores: {}
  };
  return Vs.set(n.name, o), { type: "tracked", store: e, ...o };
}, ox = (e, t = {}) => (n, r, o) => {
  const { enabled: i, anonymousActionType: s, store: a, ...c } = t;
  let u;
  try {
    u = (i ?? (Dc ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!u)
    return e(n, r, o);
  const { connection: f, ...d } = rx(a, u, c);
  let h = !0;
  o.setState = (p, y, b) => {
    const S = n(p, y);
    if (!h) return S;
    const E = b === void 0 ? { type: s || "anonymous" } : typeof b == "string" ? { type: b } : b;
    return a === void 0 ? (f == null || f.send(E, r()), S) : (f == null || f.send(
      {
        ...E,
        type: `${a}/${E.type}`
      },
      {
        ...ko(c.name),
        [a]: o.getState()
      }
    ), S);
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
      (Dc ? "production" : void 0) !== "production" && b[0].type === "__setState" && !p && (console.warn(
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
        return ps(
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
              const S = b.state[a];
              if (S == null)
                return;
              JSON.stringify(o.getState()) !== JSON.stringify(S) && g(S);
              return;
            }
            o.dispatchFromDevtools && typeof o.dispatch == "function" && o.dispatch(b);
          }
        );
      case "DISPATCH":
        switch (p.payload.type) {
          case "RESET":
            return g(v), a === void 0 ? f == null ? void 0 : f.init(o.getState()) : f == null ? void 0 : f.init(ko(c.name));
          case "COMMIT":
            if (a === void 0) {
              f == null || f.init(o.getState());
              return;
            }
            return f == null ? void 0 : f.init(ko(c.name));
          case "ROLLBACK":
            return ps(p.state, (b) => {
              if (a === void 0) {
                g(b), f == null || f.init(o.getState());
                return;
              }
              g(b[a]), f == null || f.init(ko(c.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return ps(p.state, (b) => {
              if (a === void 0) {
                g(b);
                return;
              }
              JSON.stringify(o.getState()) !== JSON.stringify(b[a]) && g(b[a]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: b } = p.payload, S = (y = b.computedStates.slice(-1)[0]) == null ? void 0 : y.state;
            if (!S) return;
            g(a === void 0 ? S : S[a]), f == null || f.send(
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
}, rf = ox, ps = (e, t) => {
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
function ix(e, t) {
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
const Ws = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return Ws(r)(n);
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
        return Ws(r)(n);
      }
    };
  }
}, sx = (e, t) => (n, r, o) => {
  let i = {
    storage: ix(() => localStorage),
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
    s = !1, a.forEach((S) => {
      var E;
      return S((E = r()) != null ? E : h);
    });
    const b = ((y = i.onRehydrateStorage) == null ? void 0 : y.call(i, (p = r()) != null ? p : h)) || void 0;
    return Ws(u.getItem.bind(u))(i.name).then((S) => {
      if (S)
        if (typeof S.version == "number" && S.version !== i.version) {
          if (i.migrate) {
            const E = i.migrate(
              S.state,
              S.version
            );
            return E instanceof Promise ? E.then((T) => [!0, T]) : [!0, E];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, S.state];
      return [!1, void 0];
    }).then((S) => {
      var E;
      const [T, x] = S;
      if (g = i.merge(
        x,
        (E = r()) != null ? E : h
      ), n(g, !0), T)
        return f();
    }).then(() => {
      b == null || b(g, void 0), g = r(), s = !0, c.forEach((S) => S(g));
    }).catch((S) => {
      b == null || b(void 0, S);
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
}, of = sx;
function _c() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
const ax = Ya()(
  rf(
    of(
      (e) => ({
        themeMode: _c(),
        setThemeMode: (t) => e({ themeMode: t }),
        toggleThemeMode: () => e((t) => ({ themeMode: t.themeMode === "dark" ? "light" : "dark" })),
        resetThemeMode: () => e({ themeMode: _c() })
      }),
      {
        name: "VENOMOUS_UI__THEME_MODE"
      }
    )
  )
);
function sf() {
  const e = nf(ax);
  return {
    ...e,
    isDarkMode: e.themeMode === "dark"
  };
}
var af = /* @__PURE__ */ ((e) => (e.Skyblue = "Skyblue", e.Teal = "Teal", e))(af || {});
const lf = {
  Skyblue: "#0097a7",
  Teal: "#009688"
};
function Bc(e) {
  const t = lf[e];
  return {
    main: t,
    light: gi(t, 0.5),
    dark: hi(t, 0.5),
    opacity: Yt(t, 0.5),
    contrastText: "#fff"
  };
}
const lx = Ya()(
  rf(
    of(
      (e) => ({
        themePaletteName: "Skyblue",
        themePalette: Bc(
          "Skyblue"
          /* Skyblue */
        ),
        setThemePaletteName: (t) => e({ themePaletteName: t, themePalette: Bc(t) })
      }),
      {
        name: "VENOMOUS_UI__THEME_PALETTE"
      }
    )
  )
);
function cx() {
  return {
    ...lx(),
    allPaletteNames: Object.keys(af),
    allPaletteMainColors: lf
  };
}
const Cr = Ru({
  themeId: qt
});
function ux() {
  const { breakpoints: e } = hr(), t = Cr(e.down("sm")), n = Cr(e.between("sm", "md")), r = Cr(e.between("md", "lg")), o = Cr(e.between("lg", "xl")), i = Cr(e.up("xl"));
  return {
    breakpoints: e,
    isXs: t,
    isSm: n,
    isMd: r,
    isLg: o,
    isXl: i
  };
}
function dx({
  gridStyle: e,
  gridItemStyle: t,
  cols: n
}) {
  const { isXs: r, isSm: o, isMd: i, isLg: s } = ux(), a = _n(() => {
    let u;
    return r ? u = (n == null ? void 0 : n.xs) ?? Jn.xs : o ? u = (n == null ? void 0 : n.sm) ?? Jn.sm : i ? u = (n == null ? void 0 : n.md) ?? Jn.md : s ? u = (n == null ? void 0 : n.lg) ?? Jn.lg : u = (n == null ? void 0 : n.xl) ?? Jn.xl, `${100 / u}%`;
  }, [r, o, i, s, n]);
  return {
    gridComponents: _n(
      () => ({
        List: ({ ref: u, style: f, children: d, ...h }) => /* @__PURE__ */ B(
          "div",
          {
            ref: u,
            ...h,
            style: { display: "flex", flexWrap: "wrap", ...f, ...e },
            children: d
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
const fx = ({
  height: e,
  width: t,
  items: n = ex,
  renderGridItem: r,
  gridStyle: o,
  gridItemStyle: i,
  cols: s = Jn
}) => {
  const { gridComponents: a } = dx({ gridStyle: o, gridItemStyle: i, cols: s });
  return /* @__PURE__ */ B(Bi, { style: { height: e || "100%", width: t || "100%" }, children: /* @__PURE__ */ B(
    Zb,
    {
      style: { height: "100%" },
      totalCount: n.length,
      components: a,
      itemContent: (c) => r(n[c], c)
    }
  ) });
}, YS = Nt(fx), px = Nt(({ height: e, width: t, items: n, renderItem: r }) => /* @__PURE__ */ B(Bi, { style: { height: e || "100%", width: t || "100%" }, children: /* @__PURE__ */ B(
  _b,
  {
    style: { height: "100%", width: "100%" },
    totalCount: n == null ? void 0 : n.length,
    data: n,
    itemContent: (o, i) => r ? r(i, o) : i.label
  }
) }));
px.displayName = "Menu";
const mx = Nt(
  ({ icon: e = "", label: t, clickable: n, disabled: r, onClick: o, onMouseEnter: i, onMouseLeave: s, isActive: a }) => n ? /* @__PURE__ */ B(
    ni,
    {
      isGhost: !0,
      text: t,
      icon: e,
      iconWidth: 28,
      iconPosition: "start",
      sx: { py: 1, px: 2, my: 1 },
      onClick: o,
      onMouseEnter: i,
      onMouseLeave: s,
      disabled: r,
      color: a ? "primary" : "inherit"
    }
  ) : /* @__PURE__ */ Je(Bi, { row: !0, py: 1, px: 2, my: 1, children: [
    /* @__PURE__ */ B(Ur, { icon: e, width: 28, color: a ? "primary" : "auto" }),
    /* @__PURE__ */ B(ur, { text: t, ellipsis: !0, flex: 1, color: a ? "primary" : "auto" })
  ] })
);
mx.displayName = "MenuItem";
function hx(e) {
  const t = jt(e);
  return t.body === e ? qo(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function _r(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Lc(e) {
  return parseInt(qo(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function gx(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function jc(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = !i.includes(s), c = !gx(s);
    a && c && _r(s, o);
  });
}
function ms(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function yx(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (hx(r)) {
      const s = Kf(qo(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Lc(r) + s}px`;
      const a = jt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Lc(c) + s}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = jt(r).body;
    else {
      const s = r.parentElement, a = qo(r);
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
function vx(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class bx {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && _r(t.modalRef, !1);
    const o = vx(n);
    jc(n, t.mount, t.modalRef, o, !0);
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
    o.restore || (o.restore = yx(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = ms(this.containers, (s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && _r(t.modalRef, n), jc(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && _r(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const xx = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Sx(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function wx(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Tx(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || wx(e));
}
function Ex(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(xx)).forEach((r, o) => {
    const i = Sx(r);
    i === -1 || !Tx(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function Cx() {
  return !0;
}
function fi(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = Ex,
    isEnabled: s = Cx,
    open: a
  } = e, c = R.useRef(!1), u = R.useRef(null), f = R.useRef(null), d = R.useRef(null), h = R.useRef(null), g = R.useRef(!1), v = R.useRef(null), p = kt(pr(t), v), y = R.useRef(null);
  R.useEffect(() => {
    !a || !v.current || (g.current = !n);
  }, [n, a]), R.useEffect(() => {
    if (!a || !v.current)
      return;
    const E = jt(v.current);
    return v.current.contains(E.activeElement) || (v.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), v.current.setAttribute("tabIndex", "-1")), g.current && v.current.focus()), () => {
      o || (d.current && d.current.focus && (c.current = !0, d.current.focus()), d.current = null);
    };
  }, [a]), R.useEffect(() => {
    if (!a || !v.current)
      return;
    const E = jt(v.current), T = (C) => {
      y.current = C, !(r || !s() || C.key !== "Tab") && E.activeElement === v.current && C.shiftKey && (c.current = !0, f.current && f.current.focus());
    }, x = () => {
      var P, m;
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
      let I = [];
      if ((E.activeElement === u.current || E.activeElement === f.current) && (I = i(v.current)), I.length > 0) {
        const O = !!((P = y.current) != null && P.shiftKey && ((m = y.current) == null ? void 0 : m.key) === "Tab"), _ = I[0], L = I[I.length - 1];
        typeof _ != "string" && typeof L != "string" && (O ? L.focus() : _.focus());
      } else
        C.focus();
    };
    E.addEventListener("focusin", x), E.addEventListener("keydown", T, !0);
    const w = setInterval(() => {
      E.activeElement && E.activeElement.tagName === "BODY" && x();
    }, 50);
    return () => {
      clearInterval(w), E.removeEventListener("focusin", x), E.removeEventListener("keydown", T, !0);
    };
  }, [n, r, o, s, a, i]);
  const b = (E) => {
    d.current === null && (d.current = E.relatedTarget), g.current = !0, h.current = E.target;
    const T = t.props.onFocus;
    T && T(E);
  }, S = (E) => {
    d.current === null && (d.current = E.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ Je(R.Fragment, {
    children: [/* @__PURE__ */ B("div", {
      tabIndex: a ? 0 : -1,
      onFocus: S,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ R.cloneElement(t, {
      ref: p,
      onFocus: b
    }), /* @__PURE__ */ B("div", {
      tabIndex: a ? 0 : -1,
      onFocus: S,
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (fi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: jn,
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
process.env.NODE_ENV !== "production" && (fi.propTypes = to(fi.propTypes));
const Ox = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, eo = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = hr(), o = {
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
    TransitionComponent: S = cn,
    ...E
  } = t, T = R.useRef(null), x = kt(T, pr(a), n), w = (A) => (D) => {
    if (A) {
      const M = T.current;
      D === void 0 ? A(M) : A(M, D);
    }
  }, C = w(h), I = w((A, D) => {
    dd(A);
    const M = oi({
      style: y,
      timeout: b,
      easing: c
    }, {
      mode: "enter"
    });
    A.style.webkitTransition = r.transitions.create("opacity", M), A.style.transition = r.transitions.create("opacity", M), f && f(A, D);
  }), P = w(d), m = w(p), O = w((A) => {
    const D = oi({
      style: y,
      timeout: b,
      easing: c
    }, {
      mode: "exit"
    });
    A.style.webkitTransition = r.transitions.create("opacity", D), A.style.transition = r.transitions.create("opacity", D), g && g(A);
  }), _ = w(v);
  return /* @__PURE__ */ B(S, {
    appear: s,
    in: u,
    nodeRef: T,
    onEnter: I,
    onEntered: P,
    onEntering: C,
    onExit: O,
    onExited: _,
    onExiting: m,
    addEndListener: (A) => {
      i && i(T.current, A);
    },
    timeout: b,
    ...E,
    children: (A, {
      ownerState: D,
      ...M
    }) => /* @__PURE__ */ R.cloneElement(a, {
      style: {
        opacity: 0,
        visibility: A === "exited" && !u ? "hidden" : void 0,
        ...Ox[A],
        ...y,
        ...a.props.style
      },
      ref: x,
      ...M
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
  children: jn.isRequired,
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
function Rx(e) {
  return pt("MuiBackdrop", e);
}
mt("MuiBackdrop", ["root", "invisible"]);
const Ix = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return $t({
    root: ["root", n && "invisible"]
  }, Rx, t);
}, Px = $e("div", {
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
}), qa = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ht({
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
  }, b = Ix(y), S = {
    transition: g,
    root: u.Root,
    ...h
  }, E = {
    ...f,
    ...d
  }, T = {
    slots: S,
    slotProps: E
  }, [x, w] = Et("root", {
    elementType: Px,
    externalForwardedProps: T,
    className: Ce(b.root, i),
    ownerState: y
  }), [C, I] = Et("transition", {
    elementType: eo,
    externalForwardedProps: T,
    ownerState: y
  });
  return /* @__PURE__ */ B(C, {
    in: c,
    timeout: v,
    ...p,
    ...I,
    children: /* @__PURE__ */ B(x, {
      "aria-hidden": !0,
      ...w,
      classes: b,
      ref: n,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (qa.propTypes = {
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
function kx(e) {
  return typeof e == "function" ? e() : e;
}
function Mx(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Fc = () => {
}, Mo = new bx();
function Nx(e) {
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
  } = e, d = R.useRef({}), h = R.useRef(null), g = R.useRef(null), v = kt(g, f), [p, y] = R.useState(!u), b = Mx(a);
  let S = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (S = !1);
  const E = () => jt(h.current), T = () => (d.current.modalRef = g.current, d.current.mount = h.current, d.current), x = () => {
    Mo.mount(T(), {
      disableScrollLock: r
    }), g.current && (g.current.scrollTop = 0);
  }, w = pn(() => {
    const D = kx(t) || E().body;
    Mo.add(T(), D), g.current && x();
  }), C = () => Mo.isTopModal(T()), I = pn((D) => {
    h.current = D, D && (u && C() ? x() : g.current && _r(g.current, S));
  }), P = R.useCallback(() => {
    Mo.remove(T(), S);
  }, [S]);
  R.useEffect(() => () => {
    P();
  }, [P]), R.useEffect(() => {
    u ? w() : (!b || !o) && P();
  }, [u, P, b, o, w]);
  const m = (D) => (M) => {
    var W;
    (W = D.onKeyDown) == null || W.call(D, M), !(M.key !== "Escape" || M.which === 229 || // Wait until IME is settled.
    !C()) && (n || (M.stopPropagation(), c && c(M, "escapeKeyDown")));
  }, O = (D) => (M) => {
    var W;
    (W = D.onClick) == null || W.call(D, M), M.target === M.currentTarget && c && c(M, "backdropClick");
  };
  return {
    getRootProps: (D = {}) => {
      const M = nu(e);
      delete M.onTransitionEnter, delete M.onTransitionExited;
      const W = {
        ...M,
        ...D
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...W,
        onKeyDown: m(W),
        ref: v
      };
    },
    getBackdropProps: (D = {}) => {
      const M = D;
      return {
        "aria-hidden": !0,
        ...M,
        onClick: O(M),
        open: u
      };
    },
    getTransitionProps: () => {
      const D = () => {
        y(!1), i && i();
      }, M = () => {
        y(!0), s && s(), o && P();
      };
      return {
        onEnter: dl(D, (a == null ? void 0 : a.props.onEnter) ?? Fc),
        onExited: dl(M, (a == null ? void 0 : a.props.onExited) ?? Fc)
      };
    },
    rootRef: v,
    portalRef: I,
    isTopModal: C,
    exited: p,
    hasTransition: b
  };
}
function $x(e) {
  return pt("MuiModal", e);
}
mt("MuiModal", ["root", "hidden", "backdrop"]);
const Ax = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return $t({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, $x, r);
}, Dx = $e("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(Kt(({
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
}))), _x = $e(qa, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), cf = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ht({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = _x,
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
    disableRestoreFocus: S = !1,
    disableScrollLock: E = !1,
    hideBackdrop: T = !1,
    keepMounted: x = !1,
    onClose: w,
    onTransitionEnter: C,
    onTransitionExited: I,
    open: P,
    slotProps: m = {},
    slots: O = {},
    // eslint-disable-next-line react/prop-types
    theme: _,
    ...L
  } = r, A = {
    ...r,
    closeAfterTransition: c,
    disableAutoFocus: v,
    disableEnforceFocus: p,
    disableEscapeKeyDown: y,
    disablePortal: b,
    disableRestoreFocus: S,
    disableScrollLock: E,
    hideBackdrop: T,
    keepMounted: x
  }, {
    getRootProps: D,
    getBackdropProps: M,
    getTransitionProps: W,
    portalRef: te,
    isTopModal: Q,
    exited: N,
    hasTransition: j
  } = Nx({
    ...A,
    rootRef: n
  }), H = {
    ...A,
    exited: N
  }, V = Ax(H), K = {};
  if (u.props.tabIndex === void 0 && (K.tabIndex = "-1"), j) {
    const {
      onEnter: X,
      onExited: ie
    } = W();
    K.onEnter = X, K.onExited = ie;
  }
  const Z = {
    slots: {
      root: h.Root,
      backdrop: h.Backdrop,
      ...O
    },
    slotProps: {
      ...g,
      ...m
    }
  }, [Y, J] = Et("root", {
    ref: n,
    elementType: Dx,
    externalForwardedProps: {
      ...Z,
      ...L,
      component: d
    },
    getSlotProps: D,
    ownerState: H,
    className: Ce(a, V == null ? void 0 : V.root, !H.open && H.exited && (V == null ? void 0 : V.hidden))
  }), [$, q] = Et("backdrop", {
    ref: i == null ? void 0 : i.ref,
    elementType: o,
    externalForwardedProps: Z,
    shouldForwardComponentProp: !0,
    additionalProps: i,
    getSlotProps: (X) => M({
      ...X,
      onClick: (ie) => {
        X != null && X.onClick && X.onClick(ie);
      }
    }),
    className: Ce(i == null ? void 0 : i.className, V == null ? void 0 : V.backdrop),
    ownerState: H
  });
  return !x && !P && (!j || N) ? null : /* @__PURE__ */ B(Gr, {
    ref: te,
    container: f,
    disablePortal: b,
    children: /* @__PURE__ */ Je(Y, {
      ...J,
      children: [!T && o ? /* @__PURE__ */ B($, {
        ...q
      }) : null, /* @__PURE__ */ B(fi, {
        disableEnforceFocus: p,
        disableAutoFocus: v,
        disableRestoreFocus: S,
        isEnabled: Q,
        open: P,
        children: /* @__PURE__ */ R.cloneElement(u, K)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (cf.propTypes = {
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
  children: jn.isRequired,
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
  container: l.oneOfType([rr, l.func]),
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
function Bx(e) {
  return pt("MuiDialog", e);
}
const hs = mt("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), Ga = /* @__PURE__ */ R.createContext({});
process.env.NODE_ENV !== "production" && (Ga.displayName = "DialogContext");
const Lx = $e(qa, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), jx = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: o,
    fullScreen: i
  } = e, s = {
    root: ["root"],
    container: ["container", `scroll${we(n)}`],
    paper: ["paper", `paperScroll${we(n)}`, `paperWidth${we(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
  };
  return $t(s, Bx, t);
}, Fx = $e(cf, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), zx = $e("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${we(n.scroll)}`]];
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
}), Hx = $e($i, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`scrollPaper${we(n.scroll)}`], t[`paperWidth${we(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(Kt(({
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
      [`&.${hs.paperScrollBody}`]: {
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
      [`&.${hs.paperScrollBody}`]: {
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
      [`&.${hs.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), uf = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ht({
    props: t,
    name: "MuiDialog"
  }), o = hr(), i = {
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
    onClose: S,
    open: E,
    PaperComponent: T = $i,
    PaperProps: x = {},
    scroll: w = "paper",
    slots: C = {},
    slotProps: I = {},
    TransitionComponent: P = eo,
    transitionDuration: m = i,
    TransitionProps: O,
    ..._
  } = r, L = {
    ...r,
    disableEscapeKeyDown: g,
    fullScreen: v,
    fullWidth: p,
    maxWidth: y,
    scroll: w
  }, A = jx(L), D = R.useRef(), M = (fe) => {
    D.current = fe.target === fe.currentTarget;
  }, W = (fe) => {
    b && b(fe), D.current && (D.current = null, S && S(fe, "backdropClick"));
  }, te = Qs(a), Q = R.useMemo(() => ({
    titleId: te
  }), [te]), N = {
    transition: P,
    ...C
  }, j = {
    transition: O,
    paper: x,
    backdrop: f,
    ...I
  }, H = {
    slots: N,
    slotProps: j
  }, [V, K] = Et("root", {
    elementType: Fx,
    shouldForwardComponentProp: !0,
    externalForwardedProps: H,
    ownerState: L,
    className: Ce(A.root, h),
    ref: n
  }), [Z, Y] = Et("backdrop", {
    elementType: Lx,
    shouldForwardComponentProp: !0,
    externalForwardedProps: H,
    ownerState: L
  }), [J, $] = Et("paper", {
    elementType: Hx,
    shouldForwardComponentProp: !0,
    externalForwardedProps: H,
    ownerState: L,
    className: Ce(A.paper, x.className)
  }), [q, X] = Et("container", {
    elementType: zx,
    externalForwardedProps: H,
    ownerState: L,
    className: Ce(A.container)
  }), [ie, z] = Et("transition", {
    elementType: eo,
    externalForwardedProps: H,
    ownerState: L,
    additionalProps: {
      appear: !0,
      in: E,
      timeout: m,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ B(V, {
    closeAfterTransition: !0,
    slots: {
      backdrop: Z
    },
    slotProps: {
      backdrop: {
        transitionDuration: m,
        as: u,
        ...Y
      }
    },
    disableEscapeKeyDown: g,
    onClose: S,
    open: E,
    onClick: W,
    ...K,
    ..._,
    children: /* @__PURE__ */ B(ie, {
      ...z,
      children: /* @__PURE__ */ B(q, {
        onMouseDown: M,
        ...X,
        children: /* @__PURE__ */ B(J, {
          as: T,
          elevation: 24,
          role: "dialog",
          "aria-describedby": s,
          "aria-labelledby": te,
          "aria-modal": c,
          ...$,
          children: /* @__PURE__ */ B(Ga.Provider, {
            value: Q,
            children: d
          })
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (uf.propTypes = {
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
function Vx(e) {
  return pt("MuiDialogActions", e);
}
mt("MuiDialogActions", ["root", "spacing"]);
const Wx = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return $t({
    root: ["root", !n && "spacing"]
  }, Vx, t);
}, Ux = $e("div", {
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
}), df = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ht({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: o,
    disableSpacing: i = !1,
    ...s
  } = r, a = {
    ...r,
    disableSpacing: i
  }, c = Wx(a);
  return /* @__PURE__ */ B(Ux, {
    className: Ce(c.root, o),
    ownerState: a,
    ref: n,
    ...s
  });
});
process.env.NODE_ENV !== "production" && (df.propTypes = {
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
function Yx(e) {
  return pt("MuiDialogContent", e);
}
mt("MuiDialogContent", ["root", "dividers"]);
function qx(e) {
  return pt("MuiDialogTitle", e);
}
const Gx = mt("MuiDialogTitle", ["root"]), Kx = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return $t({
    root: ["root", n && "dividers"]
  }, Yx, t);
}, Xx = $e("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(Kt(({
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
      [`.${Gx.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), ff = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ht({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: o,
    dividers: i = !1,
    ...s
  } = r, a = {
    ...r,
    dividers: i
  }, c = Kx(a);
  return /* @__PURE__ */ B(Xx, {
    className: Ce(c.root, o),
    ownerState: a,
    ref: n,
    ...s
  });
});
process.env.NODE_ENV !== "production" && (ff.propTypes = {
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
const Jx = (e) => {
  const {
    classes: t
  } = e;
  return $t({
    root: ["root"]
  }, qx, t);
}, Qx = $e(Aa, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), pf = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ht({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, a = r, c = Jx(a), {
    titleId: u = i
  } = R.useContext(Ga);
  return /* @__PURE__ */ B(Qx, {
    component: "h2",
    className: Ce(c.root, o),
    ownerState: a,
    ref: n,
    variant: "h6",
    id: i ?? u,
    ...s
  });
});
process.env.NODE_ENV !== "production" && (pf.propTypes = {
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
const Zx = Nt(
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
    const p = xf(e);
    Uo(() => {
      p.current && !e && (o == null || o()), p.current = e;
    }, [e, o]);
    const y = _n(
      () => /* @__PURE__ */ Je(Wc, { children: [
        /* @__PURE__ */ B(pf, { children: /* @__PURE__ */ B(ur, { isTitle: !0, text: a }) }),
        /* @__PURE__ */ B(ff, { children: /* @__PURE__ */ B(ur, { text: c }) }),
        /* @__PURE__ */ Je(df, { children: [
          /* @__PURE__ */ B(
            ni,
            {
              text: u,
              onClick: t,
              disabled: h || i,
              isGhost: !0
            }
          ),
          /* @__PURE__ */ B(
            ni,
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
    return /* @__PURE__ */ Je(
      uf,
      {
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
Zx.displayName = "Modal";
function qS() {
  const [e, t] = Pr(!1), n = Br(() => t(!0), []), r = Br(() => t(!1), []);
  return {
    isOpen: e,
    openModal: n,
    closeModal: r
  };
}
function zc(e) {
  return e.substring(2).toLowerCase();
}
function eS(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function pi(e) {
  const {
    children: t,
    disableReactTree: n = !1,
    mouseEvent: r = "onClick",
    onClickAway: o,
    touchEvent: i = "onTouchEnd"
  } = e, s = R.useRef(!1), a = R.useRef(null), c = R.useRef(!1), u = R.useRef(!1);
  R.useEffect(() => (setTimeout(() => {
    c.current = !0;
  }, 0), () => {
    c.current = !1;
  }), []);
  const f = kt(pr(t), a), d = pn((v) => {
    const p = u.current;
    u.current = !1;
    const y = jt(a.current);
    if (!c.current || !a.current || "clientX" in v && eS(v, y))
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
  return i !== !1 && (g[i] = h(i)), R.useEffect(() => {
    if (i !== !1) {
      const v = zc(i), p = jt(a.current), y = () => {
        s.current = !0;
      };
      return p.addEventListener(v, d), p.addEventListener("touchmove", y), () => {
        p.removeEventListener(v, d), p.removeEventListener("touchmove", y);
      };
    }
  }, [d, i]), r !== !1 && (g[r] = h(r)), R.useEffect(() => {
    if (r !== !1) {
      const v = zc(r), p = jt(a.current);
      return p.addEventListener(v, d), () => {
        p.removeEventListener(v, d);
      };
    }
  }, [d, r]), /* @__PURE__ */ R.cloneElement(t, g);
}
process.env.NODE_ENV !== "production" && (pi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The wrapped element.
   */
  children: jn.isRequired,
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
process.env.NODE_ENV !== "production" && (pi.propTypes = to(pi.propTypes));
const tS = Ya((e) => ({
  activeId: null,
  setActiveId: (t) => e({ activeId: t })
}));
function nS(e) {
  const { activeId: t, setActiveId: n } = tS(), [r, o] = Pr(null), i = !!r && (!e || t === e), s = Br(
    (c) => {
      const u = c.currentTarget;
      e ? (n(e), o(u)) : o(r ? null : u);
    },
    [e, n]
  ), a = Br(() => {
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
const rS = Nt(
  ({ id: e, children: t, renderPopperHandler: n, position: r = "bottom", sx: o }) => {
    const { anchorEl: i, isOpen: s, openPopper: a, closePopper: c } = nS(e);
    return /* @__PURE__ */ B(pi, { onClickAway: c, children: /* @__PURE__ */ Je(Ni, { sx: { position: "relative" }, role: "presentation", children: [
      n({ anchorEl: i, isOpen: s, openPopper: a, closePopper: c }),
      /* @__PURE__ */ B(_i, { open: s, anchorEl: i, placement: r, transition: !0, keepMounted: !0, children: ({ TransitionProps: u }) => /* @__PURE__ */ B(eo, { ...u, children: /* @__PURE__ */ B(ri, { sx: o, children: t }) }) })
    ] }) });
  }
);
rS.displayName = "Popper";
const Us = typeof Hu({}) == "function", oS = (e, t) => ({
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
}), iS = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), mf = (e, t = !1) => {
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
    html: oS(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...iS(e),
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
}, Wo = "mui-ecs", sS = (e) => {
  const t = mf(e, !1), n = Array.isArray(t) ? t[0] : t;
  return !e.vars && n && (n.html[`:root:has(${Wo})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([r, o]) => {
    var s, a;
    const i = e.getColorSchemeSelector(r);
    i.startsWith("@") ? n[i] = {
      [`:root:not(:has(.${Wo}))`]: {
        colorScheme: (s = o.palette) == null ? void 0 : s.mode
      }
    } : n[i.replace(/\s*&/, "")] = {
      [`&:not(:has(.${Wo}))`]: {
        colorScheme: (a = o.palette) == null ? void 0 : a.mode
      }
    };
  }), t;
}, aS = Hu(Us ? ({
  theme: e,
  enableColorScheme: t
}) => mf(e, t) : ({
  theme: e
}) => sS(e));
function hf(e) {
  const t = ht({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: n,
    enableColorScheme: r = !1
  } = t;
  return /* @__PURE__ */ Je(R.Fragment, {
    children: [Us && /* @__PURE__ */ B(aS, {
      enableColorScheme: r
    }), !Us && !r && /* @__PURE__ */ B("span", {
      className: Wo,
      style: {
        display: "none"
      }
    }), n]
  });
}
process.env.NODE_ENV !== "production" && (hf.propTypes = {
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
function lS() {
  const { themeMode: e } = sf(), { themePalette: t } = cx(), n = _n(() => ki({
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
  return cS(t), { theme: n };
}
function cS(e) {
  Uo(() => {
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
const uS = Nt(({ children: e }) => {
  const { theme: t } = lS();
  return /* @__PURE__ */ Je(Gy, { theme: t, disableTransitionOnChange: !0, children: [
    /* @__PURE__ */ B(hf, {}),
    e
  ] });
});
uS.displayName = "ThemeProvider";
function dS(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const fS = (e) => {
  switch (e) {
    case "success":
      return hS;
    case "info":
      return yS;
    case "warning":
      return gS;
    case "error":
      return vS;
    default:
      return null;
  }
}, pS = Array(12).fill(0), mS = ({ visible: e, className: t }) => /* @__PURE__ */ k.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    t
  ].filter(Boolean).join(" "),
  "data-visible": e
}, /* @__PURE__ */ k.createElement("div", {
  className: "sonner-spinner"
}, pS.map((n, r) => /* @__PURE__ */ k.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${r}`
})))), hS = /* @__PURE__ */ k.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ k.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), gS = /* @__PURE__ */ k.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ k.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), yS = /* @__PURE__ */ k.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ k.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), vS = /* @__PURE__ */ k.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ k.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), bS = /* @__PURE__ */ k.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ k.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ k.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), xS = () => {
  const [e, t] = k.useState(document.hidden);
  return k.useEffect(() => {
    const n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
};
let Ys = 1;
class SS {
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
      const { message: r, ...o } = t, i = typeof (t == null ? void 0 : t.id) == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : Ys++, s = this.toasts.find((c) => c.id === i), a = t.dismissible === void 0 ? !0 : t.dismissible;
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
        ], k.isValidElement(u))
          i = !1, this.create({
            id: r,
            type: "default",
            message: u
          });
        else if (TS(u) && !u.ok) {
          i = !1;
          const d = typeof n.error == "function" ? await n.error(`HTTP error! status: ${u.status}`) : n.error, h = typeof n.description == "function" ? await n.description(`HTTP error! status: ${u.status}`) : n.description, v = typeof d == "object" && !k.isValidElement(d) ? d : {
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
          const d = typeof n.error == "function" ? await n.error(u) : n.error, h = typeof n.description == "function" ? await n.description(u) : n.description, v = typeof d == "object" && !k.isValidElement(d) ? d : {
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
          const d = typeof n.success == "function" ? await n.success(u) : n.success, h = typeof n.description == "function" ? await n.description(u) : n.description, v = typeof d == "object" && !k.isValidElement(d) ? d : {
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
          const f = typeof n.error == "function" ? await n.error(u) : n.error, d = typeof n.description == "function" ? await n.description(u) : n.description, g = typeof f == "object" && !k.isValidElement(f) ? f : {
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
      const r = (n == null ? void 0 : n.id) || Ys++;
      return this.create({
        jsx: t(r),
        id: r,
        ...n
      }), r;
    }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const vt = new SS(), wS = (e, t) => {
  const n = (t == null ? void 0 : t.id) || Ys++;
  return vt.addToast({
    title: e,
    ...t,
    id: n
  }), n;
}, TS = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", ES = wS, CS = () => vt.toasts, OS = () => vt.getActiveToasts(), gs = Object.assign(ES, {
  success: vt.success,
  info: vt.info,
  warning: vt.warning,
  error: vt.error,
  custom: vt.custom,
  message: vt.message,
  promise: vt.promise,
  dismiss: vt.dismiss,
  loading: vt.loading
}, {
  getHistory: CS,
  getToasts: OS
});
dS("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function No(e) {
  return e.label !== void 0;
}
const RS = 3, IS = "24px", PS = "16px", Hc = 4e3, kS = 356, MS = 14, NS = 45, $S = 200;
function Qt(...e) {
  return e.filter(Boolean).join(" ");
}
function AS(e) {
  const [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
const DS = (e) => {
  var t, n, r, o, i, s, a, c, u;
  const { invert: f, toast: d, unstyled: h, interacting: g, setHeights: v, visibleToasts: p, heights: y, index: b, toasts: S, expanded: E, removeToast: T, defaultRichColors: x, closeButton: w, style: C, cancelButtonStyle: I, actionButtonStyle: P, className: m = "", descriptionClassName: O = "", duration: _, position: L, gap: A, expandByDefault: D, classNames: M, icons: W, closeButtonAriaLabel: te = "Close toast" } = e, [Q, N] = k.useState(null), [j, H] = k.useState(null), [V, K] = k.useState(!1), [Z, Y] = k.useState(!1), [J, $] = k.useState(!1), [q, X] = k.useState(!1), [ie, z] = k.useState(!1), [fe, Te] = k.useState(0), [Fe, nt] = k.useState(0), be = k.useRef(d.duration || _ || Hc), Re = k.useRef(null), me = k.useRef(null), Ae = b === 0, ze = b + 1 <= p, ee = d.type, Qe = d.dismissible !== !1, rt = d.className || "", ot = d.descriptionClassName || "", dt = k.useMemo(() => y.findIndex((ce) => ce.toastId === d.id) || 0, [
    y,
    d.id
  ]), yt = k.useMemo(() => {
    var ce;
    return (ce = d.closeButton) != null ? ce : w;
  }, [
    d.closeButton,
    w
  ]), wt = k.useMemo(() => d.duration || _ || Hc, [
    d.duration,
    _
  ]), ft = k.useRef(0), Ee = k.useRef(0), ue = k.useRef(0), He = k.useRef(null), [qe, De] = L.split("-"), Hn = k.useMemo(() => y.reduce((ce, Ge, tt) => tt >= dt ? ce : ce + Ge.height, 0), [
    y,
    dt
  ]), Vn = xS(), Vi = d.invert || f, gn = ee === "loading";
  Ee.current = k.useMemo(() => dt * A + Hn, [
    dt,
    Hn
  ]), k.useEffect(() => {
    be.current = wt;
  }, [
    wt
  ]), k.useEffect(() => {
    K(!0);
  }, []), k.useEffect(() => {
    const ce = me.current;
    if (ce) {
      const Ge = ce.getBoundingClientRect().height;
      return nt(Ge), v((tt) => [
        {
          toastId: d.id,
          height: Ge,
          position: d.position
        },
        ...tt
      ]), () => v((tt) => tt.filter((re) => re.toastId !== d.id));
    }
  }, [
    v,
    d.id
  ]), k.useLayoutEffect(() => {
    if (!V) return;
    const ce = me.current, Ge = ce.style.height;
    ce.style.height = "auto";
    const tt = ce.getBoundingClientRect().height;
    ce.style.height = Ge, nt(tt), v((re) => re.find((Ke) => Ke.toastId === d.id) ? re.map((Ke) => Ke.toastId === d.id ? {
      ...Ke,
      height: tt
    } : Ke) : [
      {
        toastId: d.id,
        height: tt,
        position: d.position
      },
      ...re
    ]);
  }, [
    V,
    d.title,
    d.description,
    v,
    d.id
  ]);
  const Xt = k.useCallback(() => {
    Y(!0), Te(Ee.current), v((ce) => ce.filter((Ge) => Ge.toastId !== d.id)), setTimeout(() => {
      T(d);
    }, $S);
  }, [
    d,
    T,
    v,
    Ee
  ]);
  k.useEffect(() => {
    if (d.promise && ee === "loading" || d.duration === 1 / 0 || d.type === "loading") return;
    let ce;
    return E || g || Vn ? (() => {
      if (ue.current < ft.current) {
        const re = (/* @__PURE__ */ new Date()).getTime() - ft.current;
        be.current = be.current - re;
      }
      ue.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      be.current !== 1 / 0 && (ft.current = (/* @__PURE__ */ new Date()).getTime(), ce = setTimeout(() => {
        d.onAutoClose == null || d.onAutoClose.call(d, d), Xt();
      }, be.current));
    })(), () => clearTimeout(ce);
  }, [
    E,
    g,
    d,
    ee,
    Vn,
    Xt
  ]), k.useEffect(() => {
    d.delete && Xt();
  }, [
    Xt,
    d.delete
  ]);
  function Wi() {
    var ce;
    if (W != null && W.loading) {
      var Ge;
      return /* @__PURE__ */ k.createElement("div", {
        className: Qt(M == null ? void 0 : M.loader, d == null || (Ge = d.classNames) == null ? void 0 : Ge.loader, "sonner-loader"),
        "data-visible": ee === "loading"
      }, W.loading);
    }
    return /* @__PURE__ */ k.createElement(mS, {
      className: Qt(M == null ? void 0 : M.loader, d == null || (ce = d.classNames) == null ? void 0 : ce.loader),
      visible: ee === "loading"
    });
  }
  const Ui = d.icon || (W == null ? void 0 : W[ee]) || fS(ee);
  var ho, go;
  return /* @__PURE__ */ k.createElement("li", {
    tabIndex: 0,
    ref: me,
    className: Qt(m, rt, M == null ? void 0 : M.toast, d == null || (t = d.classNames) == null ? void 0 : t.toast, M == null ? void 0 : M.default, M == null ? void 0 : M[ee], d == null || (n = d.classNames) == null ? void 0 : n[ee]),
    "data-sonner-toast": "",
    "data-rich-colors": (ho = d.richColors) != null ? ho : x,
    "data-styled": !(d.jsx || d.unstyled || h),
    "data-mounted": V,
    "data-promise": !!d.promise,
    "data-swiped": ie,
    "data-removed": Z,
    "data-visible": ze,
    "data-y-position": qe,
    "data-x-position": De,
    "data-index": b,
    "data-front": Ae,
    "data-swiping": J,
    "data-dismissible": Qe,
    "data-type": ee,
    "data-invert": Vi,
    "data-swipe-out": q,
    "data-swipe-direction": j,
    "data-expanded": !!(E || D && V),
    style: {
      "--index": b,
      "--toasts-before": b,
      "--z-index": S.length - b,
      "--offset": `${Z ? fe : Ee.current}px`,
      "--initial-height": D ? "auto" : `${Fe}px`,
      ...C,
      ...d.style
    },
    onDragEnd: () => {
      $(!1), N(null), He.current = null;
    },
    onPointerDown: (ce) => {
      gn || !Qe || (Re.current = /* @__PURE__ */ new Date(), Te(Ee.current), ce.target.setPointerCapture(ce.pointerId), ce.target.tagName !== "BUTTON" && ($(!0), He.current = {
        x: ce.clientX,
        y: ce.clientY
      }));
    },
    onPointerUp: () => {
      var ce, Ge, tt;
      if (q || !Qe) return;
      He.current = null;
      const re = Number(((ce = me.current) == null ? void 0 : ce.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), at = Number(((Ge = me.current) == null ? void 0 : Ge.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Ke = (/* @__PURE__ */ new Date()).getTime() - ((tt = Re.current) == null ? void 0 : tt.getTime()), At = Q === "x" ? re : at, yo = Math.abs(At) / Ke;
      if (Math.abs(At) >= NS || yo > 0.11) {
        Te(Ee.current), d.onDismiss == null || d.onDismiss.call(d, d), H(Q === "x" ? re > 0 ? "right" : "left" : at > 0 ? "down" : "up"), Xt(), X(!0);
        return;
      } else {
        var Wt, Ut;
        (Wt = me.current) == null || Wt.style.setProperty("--swipe-amount-x", "0px"), (Ut = me.current) == null || Ut.style.setProperty("--swipe-amount-y", "0px");
      }
      z(!1), $(!1), N(null);
    },
    onPointerMove: (ce) => {
      var Ge, tt, re;
      if (!He.current || !Qe || ((Ge = window.getSelection()) == null ? void 0 : Ge.toString().length) > 0) return;
      const Ke = ce.clientY - He.current.y, At = ce.clientX - He.current.x;
      var yo;
      const Wt = (yo = e.swipeDirections) != null ? yo : AS(L);
      !Q && (Math.abs(At) > 1 || Math.abs(Ke) > 1) && N(Math.abs(At) > Math.abs(Ke) ? "x" : "y");
      let Ut = {
        x: 0,
        y: 0
      };
      const Ka = (In) => 1 / (1.5 + Math.abs(In) / 20);
      if (Q === "y") {
        if (Wt.includes("top") || Wt.includes("bottom"))
          if (Wt.includes("top") && Ke < 0 || Wt.includes("bottom") && Ke > 0)
            Ut.y = Ke;
          else {
            const In = Ke * Ka(Ke);
            Ut.y = Math.abs(In) < Math.abs(Ke) ? In : Ke;
          }
      } else if (Q === "x" && (Wt.includes("left") || Wt.includes("right")))
        if (Wt.includes("left") && At < 0 || Wt.includes("right") && At > 0)
          Ut.x = At;
        else {
          const In = At * Ka(At);
          Ut.x = Math.abs(In) < Math.abs(At) ? In : At;
        }
      (Math.abs(Ut.x) > 0 || Math.abs(Ut.y) > 0) && z(!0), (tt = me.current) == null || tt.style.setProperty("--swipe-amount-x", `${Ut.x}px`), (re = me.current) == null || re.style.setProperty("--swipe-amount-y", `${Ut.y}px`);
    }
  }, yt && !d.jsx && ee !== "loading" ? /* @__PURE__ */ k.createElement("button", {
    "aria-label": te,
    "data-disabled": gn,
    "data-close-button": !0,
    onClick: gn || !Qe ? () => {
    } : () => {
      Xt(), d.onDismiss == null || d.onDismiss.call(d, d);
    },
    className: Qt(M == null ? void 0 : M.closeButton, d == null || (r = d.classNames) == null ? void 0 : r.closeButton)
  }, (go = W == null ? void 0 : W.close) != null ? go : bS) : null, (ee || d.icon || d.promise) && d.icon !== null && ((W == null ? void 0 : W[ee]) !== null || d.icon) ? /* @__PURE__ */ k.createElement("div", {
    "data-icon": "",
    className: Qt(M == null ? void 0 : M.icon, d == null || (o = d.classNames) == null ? void 0 : o.icon)
  }, d.promise || d.type === "loading" && !d.icon ? d.icon || Wi() : null, d.type !== "loading" ? Ui : null) : null, /* @__PURE__ */ k.createElement("div", {
    "data-content": "",
    className: Qt(M == null ? void 0 : M.content, d == null || (i = d.classNames) == null ? void 0 : i.content)
  }, /* @__PURE__ */ k.createElement("div", {
    "data-title": "",
    className: Qt(M == null ? void 0 : M.title, d == null || (s = d.classNames) == null ? void 0 : s.title)
  }, d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title), d.description ? /* @__PURE__ */ k.createElement("div", {
    "data-description": "",
    className: Qt(O, ot, M == null ? void 0 : M.description, d == null || (a = d.classNames) == null ? void 0 : a.description)
  }, typeof d.description == "function" ? d.description() : d.description) : null), /* @__PURE__ */ k.isValidElement(d.cancel) ? d.cancel : d.cancel && No(d.cancel) ? /* @__PURE__ */ k.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: d.cancelButtonStyle || I,
    onClick: (ce) => {
      No(d.cancel) && Qe && (d.cancel.onClick == null || d.cancel.onClick.call(d.cancel, ce), Xt());
    },
    className: Qt(M == null ? void 0 : M.cancelButton, d == null || (c = d.classNames) == null ? void 0 : c.cancelButton)
  }, d.cancel.label) : null, /* @__PURE__ */ k.isValidElement(d.action) ? d.action : d.action && No(d.action) ? /* @__PURE__ */ k.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: d.actionButtonStyle || P,
    onClick: (ce) => {
      No(d.action) && (d.action.onClick == null || d.action.onClick.call(d.action, ce), !ce.defaultPrevented && Xt());
    },
    className: Qt(M == null ? void 0 : M.actionButton, d == null || (u = d.classNames) == null ? void 0 : u.actionButton)
  }, d.action.label) : null);
};
function Vc() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function _S(e, t) {
  const n = {};
  return [
    e,
    t
  ].forEach((r, o) => {
    const i = o === 1, s = i ? "--mobile-offset" : "--offset", a = i ? PS : IS;
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
const BS = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const { invert: r, position: o = "bottom-right", hotkey: i = [
    "altKey",
    "KeyT"
  ], expand: s, closeButton: a, className: c, offset: u, mobileOffset: f, theme: d = "light", richColors: h, duration: g, style: v, visibleToasts: p = RS, toastOptions: y, dir: b = Vc(), gap: S = MS, icons: E, containerAriaLabel: T = "Notifications" } = t, [x, w] = k.useState([]), C = k.useMemo(() => Array.from(new Set([
    o
  ].concat(x.filter((j) => j.position).map((j) => j.position)))), [
    x,
    o
  ]), [I, P] = k.useState([]), [m, O] = k.useState(!1), [_, L] = k.useState(!1), [A, D] = k.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), M = k.useRef(null), W = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), te = k.useRef(null), Q = k.useRef(!1), N = k.useCallback((j) => {
    w((H) => {
      var V;
      return (V = H.find((K) => K.id === j.id)) != null && V.delete || vt.dismiss(j.id), H.filter(({ id: K }) => K !== j.id);
    });
  }, []);
  return k.useEffect(() => vt.subscribe((j) => {
    if (j.dismiss) {
      requestAnimationFrame(() => {
        w((H) => H.map((V) => V.id === j.id ? {
          ...V,
          delete: !0
        } : V));
      });
      return;
    }
    setTimeout(() => {
      Qn.flushSync(() => {
        w((H) => {
          const V = H.findIndex((K) => K.id === j.id);
          return V !== -1 ? [
            ...H.slice(0, V),
            {
              ...H[V],
              ...j
            },
            ...H.slice(V + 1)
          ] : [
            j,
            ...H
          ];
        });
      });
    });
  }), [
    x
  ]), k.useEffect(() => {
    if (d !== "system") {
      D(d);
      return;
    }
    if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? D("dark") : D("light")), typeof window > "u") return;
    const j = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      j.addEventListener("change", ({ matches: H }) => {
        D(H ? "dark" : "light");
      });
    } catch {
      j.addListener(({ matches: V }) => {
        try {
          D(V ? "dark" : "light");
        } catch (K) {
          console.error(K);
        }
      });
    }
  }, [
    d
  ]), k.useEffect(() => {
    x.length <= 1 && O(!1);
  }, [
    x
  ]), k.useEffect(() => {
    const j = (H) => {
      var V;
      if (i.every((Y) => H[Y] || H.code === Y)) {
        var Z;
        O(!0), (Z = M.current) == null || Z.focus();
      }
      H.code === "Escape" && (document.activeElement === M.current || (V = M.current) != null && V.contains(document.activeElement)) && O(!1);
    };
    return document.addEventListener("keydown", j), () => document.removeEventListener("keydown", j);
  }, [
    i
  ]), k.useEffect(() => {
    if (M.current)
      return () => {
        te.current && (te.current.focus({
          preventScroll: !0
        }), te.current = null, Q.current = !1);
      };
  }, [
    M.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ k.createElement("section", {
    ref: n,
    "aria-label": `${T} ${W}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, C.map((j, H) => {
    var V;
    const [K, Z] = j.split("-");
    return x.length ? /* @__PURE__ */ k.createElement("ol", {
      key: j,
      dir: b === "auto" ? Vc() : b,
      tabIndex: -1,
      ref: M,
      className: c,
      "data-sonner-toaster": !0,
      "data-sonner-theme": A,
      "data-y-position": K,
      "data-lifted": m && x.length > 1 && !s,
      "data-x-position": Z,
      style: {
        "--front-toast-height": `${((V = I[0]) == null ? void 0 : V.height) || 0}px`,
        "--width": `${kS}px`,
        "--gap": `${S}px`,
        ...v,
        ..._S(u, f)
      },
      onBlur: (Y) => {
        Q.current && !Y.currentTarget.contains(Y.relatedTarget) && (Q.current = !1, te.current && (te.current.focus({
          preventScroll: !0
        }), te.current = null));
      },
      onFocus: (Y) => {
        Y.target instanceof HTMLElement && Y.target.dataset.dismissible === "false" || Q.current || (Q.current = !0, te.current = Y.relatedTarget);
      },
      onMouseEnter: () => O(!0),
      onMouseMove: () => O(!0),
      onMouseLeave: () => {
        _ || O(!1);
      },
      onDragEnd: () => O(!1),
      onPointerDown: (Y) => {
        Y.target instanceof HTMLElement && Y.target.dataset.dismissible === "false" || L(!0);
      },
      onPointerUp: () => L(!1)
    }, x.filter((Y) => !Y.position && H === 0 || Y.position === j).map((Y, J) => {
      var $, q;
      return /* @__PURE__ */ k.createElement(DS, {
        key: Y.id,
        icons: E,
        index: J,
        toast: Y,
        defaultRichColors: h,
        duration: ($ = y == null ? void 0 : y.duration) != null ? $ : g,
        className: y == null ? void 0 : y.className,
        descriptionClassName: y == null ? void 0 : y.descriptionClassName,
        invert: r,
        visibleToasts: p,
        closeButton: (q = y == null ? void 0 : y.closeButton) != null ? q : a,
        interacting: _,
        position: j,
        style: y == null ? void 0 : y.style,
        unstyled: y == null ? void 0 : y.unstyled,
        classNames: y == null ? void 0 : y.classNames,
        cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
        actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
        closeButtonAriaLabel: y == null ? void 0 : y.closeButtonAriaLabel,
        removeToast: N,
        toasts: x.filter((X) => X.position == Y.position),
        heights: I.filter((X) => X.position == Y.position),
        setHeights: P,
        expandByDefault: s,
        gap: S,
        expanded: m,
        swipeDirections: t.swipeDirections
      });
    })) : null;
  }));
}), LS = Nt(({ position: e = "bottom-right" }) => {
  const { isDarkMode: t } = sf();
  return /* @__PURE__ */ B(
    BS,
    {
      closeButton: !1,
      invert: t,
      visibleToasts: 3,
      position: e,
      gap: 6
    }
  );
});
LS.displayName = "Button";
function GS() {
  return Br(({ type: t, title: n, description: r }) => {
    const o = {
      description: r,
      icon: /* @__PURE__ */ B(Ur, { icon: jS(t), color: FS(t) }),
      cancel: {
        label: /* @__PURE__ */ B(Ur, { icon: "solar:close-circle-outline" }),
        onClick: () => {
        }
      },
      cancelButtonStyle: { background: "transparent" }
    };
    return t === "success" ? gs.success(n, o) : t === "error" ? gs.error(n, o) : gs.info(n, o);
  }, []);
}
function jS(e) {
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
function FS(e) {
  switch (e) {
    case "success":
      return "success";
    case "error":
      return "error";
    case "info":
      return "primary";
    default:
      return "auto";
  }
}
export {
  ni as Button,
  O0 as Card,
  Bi as Flex,
  YS as Grid,
  Ur as Icon,
  px as Menu,
  mx as MenuItem,
  Zx as Modal,
  ri as Paper,
  rS as Popper,
  ur as Text,
  af as ThemePaletteName,
  uS as ThemeProvider,
  LS as Toast,
  qS as useModal,
  ux as useThemeBreakpoint,
  sf as useThemeMode,
  cx as useThemePalette,
  GS as useToast
};
