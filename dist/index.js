var Pi = Object.defineProperty;
var Oi = (e, t, r) => t in e ? Pi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var et = (e, t, r) => Oi(e, typeof t != "symbol" ? t + "" : t, r);
import { jsx as ce, jsxs as Dr, Fragment as $i } from "react/jsx-runtime";
import * as I from "react";
import it, { forwardRef as jr, useContext as Ri, isValidElement as kt, cloneElement as It, Children as ki, useState as cr, useEffect as pn, createElement as Cr, memo as Fr, useMemo as Ii } from "react";
function Ai(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wt = { exports: {} }, Et = { exports: {} }, K = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hn;
function _i() {
  if (hn) return K;
  hn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function w(b) {
    if (typeof b == "object" && b !== null) {
      var T = b.$$typeof;
      switch (T) {
        case t:
          switch (b = b.type, b) {
            case l:
            case f:
            case n:
            case i:
            case o:
            case p:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case d:
                case g:
                case S:
                case a:
                  return b;
                default:
                  return T;
              }
          }
        case r:
          return T;
      }
    }
  }
  function C(b) {
    return w(b) === f;
  }
  return K.AsyncMode = l, K.ConcurrentMode = f, K.ContextConsumer = s, K.ContextProvider = a, K.Element = t, K.ForwardRef = d, K.Fragment = n, K.Lazy = g, K.Memo = S, K.Portal = r, K.Profiler = i, K.StrictMode = o, K.Suspense = p, K.isAsyncMode = function(b) {
    return C(b) || w(b) === l;
  }, K.isConcurrentMode = C, K.isContextConsumer = function(b) {
    return w(b) === s;
  }, K.isContextProvider = function(b) {
    return w(b) === a;
  }, K.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, K.isForwardRef = function(b) {
    return w(b) === d;
  }, K.isFragment = function(b) {
    return w(b) === n;
  }, K.isLazy = function(b) {
    return w(b) === g;
  }, K.isMemo = function(b) {
    return w(b) === S;
  }, K.isPortal = function(b) {
    return w(b) === r;
  }, K.isProfiler = function(b) {
    return w(b) === i;
  }, K.isStrictMode = function(b) {
    return w(b) === o;
  }, K.isSuspense = function(b) {
    return w(b) === p;
  }, K.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === f || b === i || b === o || b === p || b === h || typeof b == "object" && b !== null && (b.$$typeof === g || b.$$typeof === S || b.$$typeof === a || b.$$typeof === s || b.$$typeof === d || b.$$typeof === y || b.$$typeof === x || b.$$typeof === O || b.$$typeof === u);
  }, K.typeOf = w, K;
}
var X = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mn;
function Mi() {
  return mn || (mn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function w(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === n || k === f || k === i || k === o || k === p || k === h || typeof k == "object" && k !== null && (k.$$typeof === g || k.$$typeof === S || k.$$typeof === a || k.$$typeof === s || k.$$typeof === d || k.$$typeof === y || k.$$typeof === x || k.$$typeof === O || k.$$typeof === u);
    }
    function C(k) {
      if (typeof k == "object" && k !== null) {
        var xe = k.$$typeof;
        switch (xe) {
          case t:
            var Me = k.type;
            switch (Me) {
              case l:
              case f:
              case n:
              case i:
              case o:
              case p:
                return Me;
              default:
                var Ct = Me && Me.$$typeof;
                switch (Ct) {
                  case s:
                  case d:
                  case g:
                  case S:
                  case a:
                    return Ct;
                  default:
                    return xe;
                }
            }
          case r:
            return xe;
        }
      }
    }
    var b = l, T = f, $ = s, L = a, Y = t, c = d, P = n, A = g, _ = S, U = r, ne = i, te = o, ue = p, ye = !1;
    function ae(k) {
      return ye || (ye = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(k) || C(k) === l;
    }
    function E(k) {
      return C(k) === f;
    }
    function R(k) {
      return C(k) === s;
    }
    function N(k) {
      return C(k) === a;
    }
    function j(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function M(k) {
      return C(k) === d;
    }
    function z(k) {
      return C(k) === n;
    }
    function B(k) {
      return C(k) === g;
    }
    function F(k) {
      return C(k) === S;
    }
    function V(k) {
      return C(k) === r;
    }
    function q(k) {
      return C(k) === i;
    }
    function W(k) {
      return C(k) === o;
    }
    function pe(k) {
      return C(k) === p;
    }
    X.AsyncMode = b, X.ConcurrentMode = T, X.ContextConsumer = $, X.ContextProvider = L, X.Element = Y, X.ForwardRef = c, X.Fragment = P, X.Lazy = A, X.Memo = _, X.Portal = U, X.Profiler = ne, X.StrictMode = te, X.Suspense = ue, X.isAsyncMode = ae, X.isConcurrentMode = E, X.isContextConsumer = R, X.isContextProvider = N, X.isElement = j, X.isForwardRef = M, X.isFragment = z, X.isLazy = B, X.isMemo = F, X.isPortal = V, X.isProfiler = q, X.isStrictMode = W, X.isSuspense = pe, X.isValidElementType = w, X.typeOf = C;
  }()), X;
}
var gn;
function Lr() {
  return gn || (gn = 1, process.env.NODE_ENV === "production" ? Et.exports = _i() : Et.exports = Mi()), Et.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var lr, yn;
function Ni() {
  if (yn) return lr;
  yn = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
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
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        f[d] = d;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return lr = o() ? Object.assign : function(i, a) {
    for (var s, l = n(i), f, d = 1; d < arguments.length; d++) {
      s = Object(arguments[d]);
      for (var p in s)
        t.call(s, p) && (l[p] = s[p]);
      if (e) {
        f = e(s);
        for (var h = 0; h < f.length; h++)
          r.call(s, f[h]) && (l[f[h]] = s[f[h]]);
      }
    }
    return l;
  }, lr;
}
var ur, bn;
function zr() {
  if (bn) return ur;
  bn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ur = e, ur;
}
var fr, vn;
function yo() {
  return vn || (vn = 1, fr = Function.call.bind(Object.prototype.hasOwnProperty)), fr;
}
var dr, Sn;
function Bi() {
  if (Sn) return dr;
  Sn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ zr(), r = {}, n = /* @__PURE__ */ yo();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, l, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (n(i, d)) {
          var p;
          try {
            if (typeof i[d] != "function") {
              var h = Error(
                (l || "React class") + ": " + s + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            p = i[d](a, d, l, s, null, t);
          } catch (g) {
            p = g;
          }
          if (p && !(p instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var S = f ? f() : "";
            e(
              "Failed " + s + " type: " + p.message + (S ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, dr = o, dr;
}
var pr, xn;
function Di() {
  if (xn) return pr;
  xn = 1;
  var e = Lr(), t = Ni(), r = /* @__PURE__ */ zr(), n = /* @__PURE__ */ yo(), o = /* @__PURE__ */ Bi(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return pr = function(s, l) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(E) {
      var R = E && (f && E[f] || E[d]);
      if (typeof R == "function")
        return R;
    }
    var h = "<<anonymous>>", S = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: O(),
      arrayOf: w,
      element: C(),
      elementType: b(),
      instanceOf: T,
      node: c(),
      objectOf: L,
      oneOf: $,
      oneOfType: Y,
      shape: A,
      exact: _
    };
    function g(E, R) {
      return E === R ? E !== 0 || 1 / E === 1 / R : E !== E && R !== R;
    }
    function u(E, R) {
      this.message = E, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    u.prototype = Error.prototype;
    function y(E) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, N = 0;
      function j(z, B, F, V, q, W, pe) {
        if (V = V || h, W = W || F, pe !== r) {
          if (l) {
            var k = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw k.name = "Invariant Violation", k;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var xe = V + ":" + F;
            !R[xe] && // Avoid spamming the console because they are often not actionable except for lib authors
            N < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + W + "` prop on `" + V + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[xe] = !0, N++);
          }
        }
        return B[F] == null ? z ? B[F] === null ? new u("The " + q + " `" + W + "` is marked as required " + ("in `" + V + "`, but its value is `null`.")) : new u("The " + q + " `" + W + "` is marked as required in " + ("`" + V + "`, but its value is `undefined`.")) : null : E(B, F, V, q, W);
      }
      var M = j.bind(null, !1);
      return M.isRequired = j.bind(null, !0), M;
    }
    function x(E) {
      function R(N, j, M, z, B, F) {
        var V = N[j], q = te(V);
        if (q !== E) {
          var W = ue(V);
          return new u(
            "Invalid " + z + " `" + B + "` of type " + ("`" + W + "` supplied to `" + M + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return y(R);
    }
    function O() {
      return y(a);
    }
    function w(E) {
      function R(N, j, M, z, B) {
        if (typeof E != "function")
          return new u("Property `" + B + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var F = N[j];
        if (!Array.isArray(F)) {
          var V = te(F);
          return new u("Invalid " + z + " `" + B + "` of type " + ("`" + V + "` supplied to `" + M + "`, expected an array."));
        }
        for (var q = 0; q < F.length; q++) {
          var W = E(F, q, M, z, B + "[" + q + "]", r);
          if (W instanceof Error)
            return W;
        }
        return null;
      }
      return y(R);
    }
    function C() {
      function E(R, N, j, M, z) {
        var B = R[N];
        if (!s(B)) {
          var F = te(B);
          return new u("Invalid " + M + " `" + z + "` of type " + ("`" + F + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(E);
    }
    function b() {
      function E(R, N, j, M, z) {
        var B = R[N];
        if (!e.isValidElementType(B)) {
          var F = te(B);
          return new u("Invalid " + M + " `" + z + "` of type " + ("`" + F + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(E);
    }
    function T(E) {
      function R(N, j, M, z, B) {
        if (!(N[j] instanceof E)) {
          var F = E.name || h, V = ae(N[j]);
          return new u("Invalid " + z + " `" + B + "` of type " + ("`" + V + "` supplied to `" + M + "`, expected ") + ("instance of `" + F + "`."));
        }
        return null;
      }
      return y(R);
    }
    function $(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function R(N, j, M, z, B) {
        for (var F = N[j], V = 0; V < E.length; V++)
          if (g(F, E[V]))
            return null;
        var q = JSON.stringify(E, function(pe, k) {
          var xe = ue(k);
          return xe === "symbol" ? String(k) : k;
        });
        return new u("Invalid " + z + " `" + B + "` of value `" + String(F) + "` " + ("supplied to `" + M + "`, expected one of " + q + "."));
      }
      return y(R);
    }
    function L(E) {
      function R(N, j, M, z, B) {
        if (typeof E != "function")
          return new u("Property `" + B + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var F = N[j], V = te(F);
        if (V !== "object")
          return new u("Invalid " + z + " `" + B + "` of type " + ("`" + V + "` supplied to `" + M + "`, expected an object."));
        for (var q in F)
          if (n(F, q)) {
            var W = E(F, q, M, z, B + "." + q, r);
            if (W instanceof Error)
              return W;
          }
        return null;
      }
      return y(R);
    }
    function Y(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var R = 0; R < E.length; R++) {
        var N = E[R];
        if (typeof N != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ye(N) + " at index " + R + "."
          ), a;
      }
      function j(M, z, B, F, V) {
        for (var q = [], W = 0; W < E.length; W++) {
          var pe = E[W], k = pe(M, z, B, F, V, r);
          if (k == null)
            return null;
          k.data && n(k.data, "expectedType") && q.push(k.data.expectedType);
        }
        var xe = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new u("Invalid " + F + " `" + V + "` supplied to " + ("`" + B + "`" + xe + "."));
      }
      return y(j);
    }
    function c() {
      function E(R, N, j, M, z) {
        return U(R[N]) ? null : new u("Invalid " + M + " `" + z + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return y(E);
    }
    function P(E, R, N, j, M) {
      return new u(
        (E || "React class") + ": " + R + " type `" + N + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function A(E) {
      function R(N, j, M, z, B) {
        var F = N[j], V = te(F);
        if (V !== "object")
          return new u("Invalid " + z + " `" + B + "` of type `" + V + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var q in E) {
          var W = E[q];
          if (typeof W != "function")
            return P(M, z, B, q, ue(W));
          var pe = W(F, q, M, z, B + "." + q, r);
          if (pe)
            return pe;
        }
        return null;
      }
      return y(R);
    }
    function _(E) {
      function R(N, j, M, z, B) {
        var F = N[j], V = te(F);
        if (V !== "object")
          return new u("Invalid " + z + " `" + B + "` of type `" + V + "` " + ("supplied to `" + M + "`, expected `object`."));
        var q = t({}, N[j], E);
        for (var W in q) {
          var pe = E[W];
          if (n(E, W) && typeof pe != "function")
            return P(M, z, B, W, ue(pe));
          if (!pe)
            return new u(
              "Invalid " + z + " `" + B + "` key `" + W + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(N[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var k = pe(F, W, M, z, B + "." + W, r);
          if (k)
            return k;
        }
        return null;
      }
      return y(R);
    }
    function U(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(U);
          if (E === null || s(E))
            return !0;
          var R = p(E);
          if (R) {
            var N = R.call(E), j;
            if (R !== E.entries) {
              for (; !(j = N.next()).done; )
                if (!U(j.value))
                  return !1;
            } else
              for (; !(j = N.next()).done; ) {
                var M = j.value;
                if (M && !U(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(E, R) {
      return E === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function te(E) {
      var R = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : ne(R, E) ? "symbol" : R;
    }
    function ue(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var R = te(E);
      if (R === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function ye(E) {
      var R = ue(E);
      switch (R) {
        case "array":
        case "object":
          return "an " + R;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + R;
        default:
          return R;
      }
    }
    function ae(E) {
      return !E.constructor || !E.constructor.name ? h : E.constructor.name;
    }
    return S.checkPropTypes = o, S.resetWarningCache = o.resetWarningCache, S.PropTypes = S, S;
  }, pr;
}
var hr, Cn;
function ji() {
  if (Cn) return hr;
  Cn = 1;
  var e = /* @__PURE__ */ zr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, hr = function() {
    function n(a, s, l, f, d, p) {
      if (p !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, hr;
}
var Tn;
function Fi() {
  if (Tn) return wt.exports;
  if (Tn = 1, process.env.NODE_ENV !== "production") {
    var e = Lr(), t = !0;
    wt.exports = /* @__PURE__ */ Di()(e.isElement, t);
  } else
    wt.exports = /* @__PURE__ */ ji()();
  return wt.exports;
}
var Li = /* @__PURE__ */ Fi();
const m = /* @__PURE__ */ Ai(Li);
function bo(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = bo(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function me() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = bo(e)) && (n && (n += " "), n += t);
  return n;
}
function Ft(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], a = t[o];
        if (!a)
          r[o] = i || {};
        else if (!i)
          r[o] = a;
        else {
          r[o] = {
            ...a
          };
          for (const s in i)
            if (Object.prototype.hasOwnProperty.call(i, s)) {
              const l = s;
              r[o][l] = Ft(i[l], a[l]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function Vr(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", s = !0;
    for (let l = 0; l < i.length; l += 1) {
      const f = i[l];
      f && (a += (s === !0 ? "" : " ") + t(f), s = !1, r && r[f] && (a += " " + r[f]));
    }
    n[o] = a;
  }
  return n;
}
function Be(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function zi(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Wr(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), zi(e, t, r);
}
function Vi(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function De(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return De(Vi(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Be(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Be(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Wi = (e) => {
  const t = De(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, at = (e, t) => {
  try {
    return Wi(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function qt(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function vo(e) {
  e = De(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (f, d = (f + r / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let s = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", l.push(t[3])), qt({
    type: s,
    values: l
  });
}
function Tr(e) {
  e = De(e);
  let t = e.type === "hsl" || e.type === "hsla" ? De(vo(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function wn(e, t) {
  const r = Tr(e), n = Tr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Ge(e, t) {
  return e = De(e), t = Wr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, qt(e);
}
function Pt(e, t, r) {
  try {
    return Ge(e, t);
  } catch {
    return e;
  }
}
function Ur(e, t) {
  if (e = De(e), t = Wr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return qt(e);
}
function Z(e, t, r) {
  try {
    return Ur(e, t);
  } catch {
    return e;
  }
}
function Yr(e, t) {
  if (e = De(e), t = Wr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return qt(e);
}
function ee(e, t, r) {
  try {
    return Yr(e, t);
  } catch {
    return e;
  }
}
function Ui(e, t = 0.15) {
  return Tr(e) > 0.5 ? Ur(e, t) : Yr(e, t);
}
function Ot(e, t, r) {
  try {
    return Ui(e, t);
  } catch {
    return e;
  }
}
function So(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
var $t = { exports: {} }, Q = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var En;
function Yi() {
  if (En) return Q;
  En = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), S = Symbol.for("react.client.reference");
  function g(u) {
    if (typeof u == "object" && u !== null) {
      var y = u.$$typeof;
      switch (y) {
        case e:
          switch (u = u.type, u) {
            case r:
            case o:
            case n:
            case l:
            case f:
            case h:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case a:
                case s:
                case p:
                case d:
                  return u;
                case i:
                  return u;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return Q.ContextConsumer = i, Q.ContextProvider = a, Q.Element = e, Q.ForwardRef = s, Q.Fragment = r, Q.Lazy = p, Q.Memo = d, Q.Portal = t, Q.Profiler = o, Q.StrictMode = n, Q.Suspense = l, Q.SuspenseList = f, Q.isContextConsumer = function(u) {
    return g(u) === i;
  }, Q.isContextProvider = function(u) {
    return g(u) === a;
  }, Q.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, Q.isForwardRef = function(u) {
    return g(u) === s;
  }, Q.isFragment = function(u) {
    return g(u) === r;
  }, Q.isLazy = function(u) {
    return g(u) === p;
  }, Q.isMemo = function(u) {
    return g(u) === d;
  }, Q.isPortal = function(u) {
    return g(u) === t;
  }, Q.isProfiler = function(u) {
    return g(u) === o;
  }, Q.isStrictMode = function(u) {
    return g(u) === n;
  }, Q.isSuspense = function(u) {
    return g(u) === l;
  }, Q.isSuspenseList = function(u) {
    return g(u) === f;
  }, Q.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === o || u === n || u === l || u === f || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === d || u.$$typeof === a || u.$$typeof === i || u.$$typeof === s || u.$$typeof === S || u.getModuleId !== void 0);
  }, Q.typeOf = g, Q;
}
var J = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pn;
function qi() {
  return Pn || (Pn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (typeof u == "object" && u !== null) {
        var y = u.$$typeof;
        switch (y) {
          case t:
            switch (u = u.type, u) {
              case n:
              case i:
              case o:
              case f:
              case d:
              case S:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case s:
                  case l:
                  case h:
                  case p:
                    return u;
                  case a:
                    return u;
                  default:
                    return y;
                }
            }
          case r:
            return y;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), S = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    J.ContextConsumer = a, J.ContextProvider = s, J.Element = t, J.ForwardRef = l, J.Fragment = n, J.Lazy = h, J.Memo = p, J.Portal = r, J.Profiler = i, J.StrictMode = o, J.Suspense = f, J.SuspenseList = d, J.isContextConsumer = function(u) {
      return e(u) === a;
    }, J.isContextProvider = function(u) {
      return e(u) === s;
    }, J.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }, J.isForwardRef = function(u) {
      return e(u) === l;
    }, J.isFragment = function(u) {
      return e(u) === n;
    }, J.isLazy = function(u) {
      return e(u) === h;
    }, J.isMemo = function(u) {
      return e(u) === p;
    }, J.isPortal = function(u) {
      return e(u) === r;
    }, J.isProfiler = function(u) {
      return e(u) === i;
    }, J.isStrictMode = function(u) {
      return e(u) === o;
    }, J.isSuspense = function(u) {
      return e(u) === f;
    }, J.isSuspenseList = function(u) {
      return e(u) === d;
    }, J.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === n || u === i || u === o || u === f || u === d || typeof u == "object" && u !== null && (u.$$typeof === h || u.$$typeof === p || u.$$typeof === s || u.$$typeof === a || u.$$typeof === l || u.$$typeof === g || u.getModuleId !== void 0);
    }, J.typeOf = e;
  }()), J;
}
var On;
function Gi() {
  return On || (On = 1, process.env.NODE_ENV === "production" ? $t.exports = /* @__PURE__ */ Yi() : $t.exports = /* @__PURE__ */ qi()), $t.exports;
}
var Lt = /* @__PURE__ */ Gi();
function Re(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function xo(e) {
  if (/* @__PURE__ */ I.isValidElement(e) || Lt.isValidElementType(e) || !Re(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = xo(e[r]);
  }), t;
}
function ve(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Re(e) && Re(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ I.isValidElement(t[o]) || Lt.isValidElementType(t[o]) ? n[o] = t[o] : Re(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Re(e[o]) ? n[o] = ve(e[o], t[o], r) : r.clone ? n[o] = Re(t[o]) ? xo(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function Hi(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ki(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  return typeof i == "function" && !Hi(i) && (s = "Did you accidentally provide a plain function component instead?"), s !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Xi = So(m.elementType, Ki);
function Co(e, t = "") {
  return e.displayName || e.name || t;
}
function $n(e, t, r) {
  const n = Co(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Qi(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Co(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Lt.ForwardRef:
          return $n(e, e.render, "ForwardRef");
        case Lt.Memo:
          return $n(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Ji = m.oneOfType([m.func, m.object]);
function fe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Be(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Zi(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const ea = typeof window < "u" ? I.useLayoutEffect : I.useEffect;
let Rn = 0;
function ta(e) {
  const [t, r] = I.useState(e), n = e || t;
  return I.useEffect(() => {
    t == null && (Rn += 1, r(`mui-${Rn}`));
  }, [t]), n;
}
const ra = {
  ...I
}, kn = ra.useId;
function na(e) {
  if (kn !== void 0) {
    const t = kn();
    return e ?? t;
  }
  return ta(e);
}
function At(e) {
  const t = I.useRef(e);
  return ea(() => {
    t.current = e;
  }), I.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function In(...e) {
  return I.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Zi(r, t);
    });
  }, e);
}
const An = {};
function To(e, t) {
  const r = I.useRef(An);
  return r.current === An && (r.current = e(t)), r;
}
const oa = [];
function ia(e) {
  I.useEffect(e, oa);
}
class qr {
  constructor() {
    et(this, "currentId", null);
    et(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    et(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new qr();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function aa() {
  const e = To(qr.create).current;
  return ia(e.disposeEffect), e;
}
function _n(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const Mn = (e) => e, sa = () => {
  let e = Mn;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Mn;
    }
  };
}, wo = sa(), ca = {
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
function mt(e, t, r = "Mui") {
  const n = ca[t];
  return n ? `${r}-${n}` : `${wo.generate(e)}-${t}`;
}
function gt(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = mt(e, o, r);
  }), n;
}
function ct(e, t) {
  return t ? ve(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const je = process.env.NODE_ENV !== "production" ? m.oneOfType([m.number, m.string, m.object, m.array]) : {};
function la(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, s;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((s = o.match(i)) == null ? void 0 : s[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function ua(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function fa(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Be(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function da(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...s) => t(e.breakpoints.up(...s), a), i.down = (...s) => t(e.breakpoints.down(...s), a), i.between = (...s) => t(e.breakpoints.between(...s), a), i.only = (...s) => t(e.breakpoints.only(...s), a), i.not = (...s) => {
      const l = t(e.breakpoints.not(...s), a);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Gt = {
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
}, Nn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Gt[e]}px)`
}, pa = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Gt[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function _e(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Nn;
    return t.reduce((a, s, l) => (a[i.up(i.keys[l])] = r(t[l]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Nn;
    return Object.keys(t).reduce((a, s) => {
      if (ua(i.keys, s)) {
        const l = fa(n.containerQueries ? n : pa, s);
        l && (a[l] = r(t[s], s));
      } else if (Object.keys(i.values || Gt).includes(s)) {
        const l = i.up(s);
        a[l] = r(t[s], s);
      } else {
        const l = s;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return r(t);
}
function ha(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function ma(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Ht(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function zt(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Ht(e, r) || n, t && (o = t(o, n, e)), o;
}
function se(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], l = a.theme, f = Ht(l, n) || {};
    return _e(a, s, (p) => {
      let h = zt(f, o, p);
      return p === h && typeof p == "string" && (h = zt(f, o, `${t}${p === "default" ? "" : fe(p)}`, p)), r === !1 ? h : {
        [r]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: je
  } : {}, i.filterProps = [t], i;
}
function ga(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const ya = {
  m: "margin",
  p: "padding"
}, ba = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Bn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, va = ga((e) => {
  if (e.length > 2)
    if (Bn[e])
      e = Bn[e];
    else
      return [e];
  const [t, r] = e.split(""), n = ya[t], o = ba[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Kt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Xt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Sa = [...Kt, ...Xt];
function yt(e, t, r, n) {
  const o = Ht(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const s = o[a];
    return i >= 0 ? s : typeof s == "number" ? -s : typeof s == "string" && s.startsWith("var(") ? `calc(-1 * ${s})` : `-${s}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Gr(e) {
  return yt(e, "spacing", 8, "spacing");
}
function bt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function xa(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = bt(t, r), n), {});
}
function Ca(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = va(r), i = xa(o, n), a = e[r];
  return _e(e, a, i);
}
function Eo(e, t) {
  const r = Gr(e.theme);
  return Object.keys(e).map((n) => Ca(e, t, n, r)).reduce(ct, {});
}
function oe(e) {
  return Eo(e, Kt);
}
oe.propTypes = process.env.NODE_ENV !== "production" ? Kt.reduce((e, t) => (e[t] = je, e), {}) : {};
oe.filterProps = Kt;
function ie(e) {
  return Eo(e, Xt);
}
ie.propTypes = process.env.NODE_ENV !== "production" ? Xt.reduce((e, t) => (e[t] = je, e), {}) : {};
ie.filterProps = Xt;
process.env.NODE_ENV !== "production" && Sa.reduce((e, t) => (e[t] = je, e), {});
function Qt(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? ct(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Te(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function we(e, t) {
  return se({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Ta = we("border", Te), wa = we("borderTop", Te), Ea = we("borderRight", Te), Pa = we("borderBottom", Te), Oa = we("borderLeft", Te), $a = we("borderColor"), Ra = we("borderTopColor"), ka = we("borderRightColor"), Ia = we("borderBottomColor"), Aa = we("borderLeftColor"), _a = we("outline", Te), Ma = we("outlineColor"), Jt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = yt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: bt(t, n)
    });
    return _e(e, e.borderRadius, r);
  }
  return null;
};
Jt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: je
} : {};
Jt.filterProps = ["borderRadius"];
Qt(Ta, wa, Ea, Pa, Oa, $a, Ra, ka, Ia, Aa, Jt, _a, Ma);
const Zt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = yt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: bt(t, n)
    });
    return _e(e, e.gap, r);
  }
  return null;
};
Zt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: je
} : {};
Zt.filterProps = ["gap"];
const er = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = yt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: bt(t, n)
    });
    return _e(e, e.columnGap, r);
  }
  return null;
};
er.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: je
} : {};
er.filterProps = ["columnGap"];
const tr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = yt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: bt(t, n)
    });
    return _e(e, e.rowGap, r);
  }
  return null;
};
tr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: je
} : {};
tr.filterProps = ["rowGap"];
const Na = se({
  prop: "gridColumn"
}), Ba = se({
  prop: "gridRow"
}), Da = se({
  prop: "gridAutoFlow"
}), ja = se({
  prop: "gridAutoColumns"
}), Fa = se({
  prop: "gridAutoRows"
}), La = se({
  prop: "gridTemplateColumns"
}), za = se({
  prop: "gridTemplateRows"
}), Va = se({
  prop: "gridTemplateAreas"
}), Wa = se({
  prop: "gridArea"
});
Qt(Zt, er, tr, Na, Ba, Da, ja, Fa, La, za, Va, Wa);
function He(e, t) {
  return t === "grey" ? t : e;
}
const Ua = se({
  prop: "color",
  themeKey: "palette",
  transform: He
}), Ya = se({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: He
}), qa = se({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: He
});
Qt(Ua, Ya, qa);
function be(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ga = se({
  prop: "width",
  transform: be
}), Hr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, s, l;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || Gt[r];
      return n ? ((l = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: be(r)
      };
    };
    return _e(e, e.maxWidth, t);
  }
  return null;
};
Hr.filterProps = ["maxWidth"];
const Ha = se({
  prop: "minWidth",
  transform: be
}), Ka = se({
  prop: "height",
  transform: be
}), Xa = se({
  prop: "maxHeight",
  transform: be
}), Qa = se({
  prop: "minHeight",
  transform: be
});
se({
  prop: "size",
  cssProperty: "width",
  transform: be
});
se({
  prop: "size",
  cssProperty: "height",
  transform: be
});
const Ja = se({
  prop: "boxSizing"
});
Qt(Ga, Hr, Ha, Ka, Xa, Qa, Ja);
const vt = {
  // borders
  border: {
    themeKey: "borders",
    transform: Te
  },
  borderTop: {
    themeKey: "borders",
    transform: Te
  },
  borderRight: {
    themeKey: "borders",
    transform: Te
  },
  borderBottom: {
    themeKey: "borders",
    transform: Te
  },
  borderLeft: {
    themeKey: "borders",
    transform: Te
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
    transform: Te
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Jt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: He
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: He
  },
  backgroundColor: {
    themeKey: "palette",
    transform: He
  },
  // spacing
  p: {
    style: ie
  },
  pt: {
    style: ie
  },
  pr: {
    style: ie
  },
  pb: {
    style: ie
  },
  pl: {
    style: ie
  },
  px: {
    style: ie
  },
  py: {
    style: ie
  },
  padding: {
    style: ie
  },
  paddingTop: {
    style: ie
  },
  paddingRight: {
    style: ie
  },
  paddingBottom: {
    style: ie
  },
  paddingLeft: {
    style: ie
  },
  paddingX: {
    style: ie
  },
  paddingY: {
    style: ie
  },
  paddingInline: {
    style: ie
  },
  paddingInlineStart: {
    style: ie
  },
  paddingInlineEnd: {
    style: ie
  },
  paddingBlock: {
    style: ie
  },
  paddingBlockStart: {
    style: ie
  },
  paddingBlockEnd: {
    style: ie
  },
  m: {
    style: oe
  },
  mt: {
    style: oe
  },
  mr: {
    style: oe
  },
  mb: {
    style: oe
  },
  ml: {
    style: oe
  },
  mx: {
    style: oe
  },
  my: {
    style: oe
  },
  margin: {
    style: oe
  },
  marginTop: {
    style: oe
  },
  marginRight: {
    style: oe
  },
  marginBottom: {
    style: oe
  },
  marginLeft: {
    style: oe
  },
  marginX: {
    style: oe
  },
  marginY: {
    style: oe
  },
  marginInline: {
    style: oe
  },
  marginInlineStart: {
    style: oe
  },
  marginInlineEnd: {
    style: oe
  },
  marginBlock: {
    style: oe
  },
  marginBlockStart: {
    style: oe
  },
  marginBlockEnd: {
    style: oe
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
    style: Zt
  },
  rowGap: {
    style: tr
  },
  columnGap: {
    style: er
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
    transform: be
  },
  maxWidth: {
    style: Hr
  },
  minWidth: {
    transform: be
  },
  height: {
    transform: be
  },
  maxHeight: {
    transform: be
  },
  minHeight: {
    transform: be
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
function Za(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function es(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ts() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, s = i[r];
    if (!s)
      return {
        [r]: n
      };
    const {
      cssProperty: l = r,
      themeKey: f,
      transform: d,
      style: p
    } = s;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const h = Ht(o, f) || {};
    return p ? p(a) : _e(a, n, (g) => {
      let u = zt(h, d, g);
      return g === u && typeof g == "string" && (u = zt(h, d, `${r}${g === "default" ? "" : fe(g)}`, g)), l === !1 ? u : {
        [l]: u
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? vt;
    function a(s) {
      let l = s;
      if (typeof s == "function")
        l = s(o);
      else if (typeof s != "object")
        return s;
      if (!l)
        return null;
      const f = ha(o.breakpoints), d = Object.keys(f);
      let p = f;
      return Object.keys(l).forEach((h) => {
        const S = es(l[h], o);
        if (S != null)
          if (typeof S == "object")
            if (i[h])
              p = ct(p, e(h, S, o, i));
            else {
              const g = _e({
                theme: o
              }, S, (u) => ({
                [h]: u
              }));
              Za(g, S) ? p[h] = t({
                sx: S,
                theme: o
              }) : p = ct(p, g);
            }
          else
            p = ct(p, e(h, S, o, i));
      }), la(o, ma(d, p));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const ze = ts();
ze.filterProps = ["sx"];
const rs = (e) => {
  var n;
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = ((n = e == null ? void 0 : e.theme) == null ? void 0 : n.unstable_sxConfig) ?? vt;
  return Object.keys(e).forEach((o) => {
    r[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function ns(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: n,
    otherProps: o
  } = rs(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...a) => {
    const s = t(...a);
    return Re(s) ? {
      ...n,
      ...s
    } : n;
  } : i = {
    ...n,
    ...t
  }, {
    ...o,
    sx: i
  };
}
function Vt() {
  return Vt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vt.apply(null, arguments);
}
function os(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function is(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var as = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(is(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = os(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), he = "-ms-", Wt = "-moz-", G = "-webkit-", Po = "comm", Kr = "rule", Xr = "decl", ss = "@import", Oo = "@keyframes", cs = "@layer", ls = Math.abs, rr = String.fromCharCode, us = Object.assign;
function fs(e, t) {
  return de(e, 0) ^ 45 ? (((t << 2 ^ de(e, 0)) << 2 ^ de(e, 1)) << 2 ^ de(e, 2)) << 2 ^ de(e, 3) : 0;
}
function $o(e) {
  return e.trim();
}
function ds(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function H(e, t, r) {
  return e.replace(t, r);
}
function wr(e, t) {
  return e.indexOf(t);
}
function de(e, t) {
  return e.charCodeAt(t) | 0;
}
function ut(e, t, r) {
  return e.slice(t, r);
}
function Oe(e) {
  return e.length;
}
function Qr(e) {
  return e.length;
}
function Rt(e, t) {
  return t.push(e), e;
}
function ps(e, t) {
  return e.map(t).join("");
}
var nr = 1, Xe = 1, Ro = 0, ge = 0, le = 0, Je = "";
function or(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: nr, column: Xe, length: a, return: "" };
}
function tt(e, t) {
  return us(or("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function hs() {
  return le;
}
function ms() {
  return le = ge > 0 ? de(Je, --ge) : 0, Xe--, le === 10 && (Xe = 1, nr--), le;
}
function Se() {
  return le = ge < Ro ? de(Je, ge++) : 0, Xe++, le === 10 && (Xe = 1, nr++), le;
}
function ke() {
  return de(Je, ge);
}
function _t() {
  return ge;
}
function St(e, t) {
  return ut(Je, e, t);
}
function ft(e) {
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
function ko(e) {
  return nr = Xe = 1, Ro = Oe(Je = e), ge = 0, [];
}
function Io(e) {
  return Je = "", e;
}
function Mt(e) {
  return $o(St(ge - 1, Er(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function gs(e) {
  for (; (le = ke()) && le < 33; )
    Se();
  return ft(e) > 2 || ft(le) > 3 ? "" : " ";
}
function ys(e, t) {
  for (; --t && Se() && !(le < 48 || le > 102 || le > 57 && le < 65 || le > 70 && le < 97); )
    ;
  return St(e, _t() + (t < 6 && ke() == 32 && Se() == 32));
}
function Er(e) {
  for (; Se(); )
    switch (le) {
      // ] ) " '
      case e:
        return ge;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Er(le);
        break;
      // (
      case 40:
        e === 41 && Er(e);
        break;
      // \
      case 92:
        Se();
        break;
    }
  return ge;
}
function bs(e, t) {
  for (; Se() && e + le !== 57; )
    if (e + le === 84 && ke() === 47)
      break;
  return "/*" + St(t, ge - 1) + "*" + rr(e === 47 ? e : Se());
}
function vs(e) {
  for (; !ft(ke()); )
    Se();
  return St(e, ge);
}
function Ss(e) {
  return Io(Nt("", null, null, null, [""], e = ko(e), 0, [0], e));
}
function Nt(e, t, r, n, o, i, a, s, l) {
  for (var f = 0, d = 0, p = a, h = 0, S = 0, g = 0, u = 1, y = 1, x = 1, O = 0, w = "", C = o, b = i, T = n, $ = w; y; )
    switch (g = O, O = Se()) {
      // (
      case 40:
        if (g != 108 && de($, p - 1) == 58) {
          wr($ += H(Mt(O), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        $ += Mt(O);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        $ += gs(g);
        break;
      // \
      case 92:
        $ += ys(_t() - 1, 7);
        continue;
      // /
      case 47:
        switch (ke()) {
          case 42:
          case 47:
            Rt(xs(bs(Se(), _t()), t, r), l);
            break;
          default:
            $ += "/";
        }
        break;
      // {
      case 123 * u:
        s[f++] = Oe($) * x;
      // } ; \0
      case 125 * u:
      case 59:
      case 0:
        switch (O) {
          // \0 }
          case 0:
          case 125:
            y = 0;
          // ;
          case 59 + d:
            x == -1 && ($ = H($, /\f/g, "")), S > 0 && Oe($) - p && Rt(S > 32 ? jn($ + ";", n, r, p - 1) : jn(H($, " ", "") + ";", n, r, p - 2), l);
            break;
          // @ ;
          case 59:
            $ += ";";
          // { rule/at-rule
          default:
            if (Rt(T = Dn($, t, r, f, d, o, s, w, C = [], b = [], p), i), O === 123)
              if (d === 0)
                Nt($, t, T, T, C, i, p, s, b);
              else
                switch (h === 99 && de($, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Nt(e, T, T, n && Rt(Dn(e, T, T, 0, 0, o, s, w, o, C = [], p), b), o, b, p, s, n ? C : b);
                    break;
                  default:
                    Nt($, T, T, T, [""], b, 0, s, b);
                }
        }
        f = d = S = 0, u = x = 1, w = $ = "", p = a;
        break;
      // :
      case 58:
        p = 1 + Oe($), S = g;
      default:
        if (u < 1) {
          if (O == 123)
            --u;
          else if (O == 125 && u++ == 0 && ms() == 125)
            continue;
        }
        switch ($ += rr(O), O * u) {
          // &
          case 38:
            x = d > 0 ? 1 : ($ += "\f", -1);
            break;
          // ,
          case 44:
            s[f++] = (Oe($) - 1) * x, x = 1;
            break;
          // @
          case 64:
            ke() === 45 && ($ += Mt(Se())), h = ke(), d = p = Oe(w = $ += vs(_t())), O++;
            break;
          // -
          case 45:
            g === 45 && Oe($) == 2 && (u = 0);
        }
    }
  return i;
}
function Dn(e, t, r, n, o, i, a, s, l, f, d) {
  for (var p = o - 1, h = o === 0 ? i : [""], S = Qr(h), g = 0, u = 0, y = 0; g < n; ++g)
    for (var x = 0, O = ut(e, p + 1, p = ls(u = a[g])), w = e; x < S; ++x)
      (w = $o(u > 0 ? h[x] + " " + O : H(O, /&\f/g, h[x]))) && (l[y++] = w);
  return or(e, t, r, o === 0 ? Kr : s, l, f, d);
}
function xs(e, t, r) {
  return or(e, t, r, Po, rr(hs()), ut(e, 2, -2), 0);
}
function jn(e, t, r, n) {
  return or(e, t, r, Xr, ut(e, 0, n), ut(e, n + 1, -1), n);
}
function Ke(e, t) {
  for (var r = "", n = Qr(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Cs(e, t, r, n) {
  switch (e.type) {
    case cs:
      if (e.children.length) break;
    case ss:
    case Xr:
      return e.return = e.return || e.value;
    case Po:
      return "";
    case Oo:
      return e.return = e.value + "{" + Ke(e.children, n) + "}";
    case Kr:
      e.value = e.props.join(",");
  }
  return Oe(r = Ke(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Ts(e) {
  var t = Qr(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function ws(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Ao(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Es = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = ke(), o === 38 && i === 12 && (r[n] = 1), !ft(i); )
    Se();
  return St(t, ge);
}, Ps = function(t, r) {
  var n = -1, o = 44;
  do
    switch (ft(o)) {
      case 0:
        o === 38 && ke() === 12 && (r[n] = 1), t[n] += Es(ge - 1, r, n);
        break;
      case 2:
        t[n] += Mt(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = ke() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      // fallthrough
      default:
        t[n] += rr(o);
    }
  while (o = Se());
  return t;
}, Os = function(t, r) {
  return Io(Ps(ko(t), r));
}, Fn = /* @__PURE__ */ new WeakMap(), $s = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Fn.get(n)) && !o) {
      Fn.set(t, !0);
      for (var i = [], a = Os(r, i), s = n.props, l = 0, f = 0; l < a.length; l++)
        for (var d = 0; d < s.length; d++, f++)
          t.props[f] = i[l] ? a[l].replace(/&\f/g, s[d]) : s[d] + " " + a[l];
    }
  }
}, Rs = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function _o(e, t) {
  switch (fs(e, t)) {
    // color-adjust
    case 5103:
      return G + "print-" + e + e;
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
      return G + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return G + e + Wt + e + he + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return G + e + he + e + e;
    // order
    case 6165:
      return G + e + he + "flex-" + e + e;
    // align-items
    case 5187:
      return G + e + H(e, /(\w+).+(:[^]+)/, G + "box-$1$2" + he + "flex-$1$2") + e;
    // align-self
    case 5443:
      return G + e + he + "flex-item-" + H(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return G + e + he + "flex-line-pack" + H(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return G + e + he + H(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return G + e + he + H(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return G + "box-" + H(e, "-grow", "") + G + e + he + H(e, "grow", "positive") + e;
    // transition
    case 4554:
      return G + H(e, /([^-])(transform)/g, "$1" + G + "$2") + e;
    // cursor
    case 6187:
      return H(H(H(e, /(zoom-|grab)/, G + "$1"), /(image-set)/, G + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return H(e, /(image-set\([^]*)/, G + "$1$`$1");
    // justify-content
    case 4968:
      return H(H(e, /(.+:)(flex-)?(.*)/, G + "box-pack:$3" + he + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + G + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return H(e, /(.+)-inline(.+)/, G + "$1$2") + e;
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
      if (Oe(e) - 1 - t > 6) switch (de(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (de(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return H(e, /(.+:)(.+)-([^]+)/, "$1" + G + "$2-$3$1" + Wt + (de(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~wr(e, "stretch") ? _o(H(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (de(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (de(e, Oe(e) - 3 - (~wr(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return H(e, ":", ":" + G) + e;
        // (inline-)?fl(e)x
        case 101:
          return H(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + G + (de(e, 14) === 45 ? "inline-" : "") + "box$3$1" + G + "$2$3$1" + he + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (de(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return G + e + he + H(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return G + e + he + H(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return G + e + he + H(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return G + e + he + e + e;
  }
  return e;
}
var ks = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Xr:
      t.return = _o(t.value, t.length);
      break;
    case Oo:
      return Ke([tt(t, {
        value: H(t.value, "@", "@" + G)
      })], o);
    case Kr:
      if (t.length) return ps(t.props, function(i) {
        switch (ds(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Ke([tt(t, {
              props: [H(i, /:(read-\w+)/, ":" + Wt + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return Ke([tt(t, {
              props: [H(i, /:(plac\w+)/, ":" + G + "input-$1")]
            }), tt(t, {
              props: [H(i, /:(plac\w+)/, ":" + Wt + "$1")]
            }), tt(t, {
              props: [H(i, /:(plac\w+)/, he + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Is = [ks], As = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(u) {
      var y = u.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(u), u.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Is, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(u) {
      for (var y = u.getAttribute("data-emotion").split(" "), x = 1; x < y.length; x++)
        i[y[x]] = !0;
      s.push(u);
    }
  );
  var l, f = [$s, Rs];
  {
    var d, p = [Cs, ws(function(u) {
      d.insert(u);
    })], h = Ts(f.concat(o, p)), S = function(y) {
      return Ke(Ss(y), h);
    };
    l = function(y, x, O, w) {
      d = O, S(y ? y + "{" + x.styles + "}" : x.styles), w && (g.inserted[x.name] = !0);
    };
  }
  var g = {
    key: r,
    sheet: new as({
      key: r,
      container: a,
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
  return g.sheet.hydrate(s), g;
}, mr, Ln;
function _s() {
  if (Ln) return mr;
  Ln = 1;
  var e = Lr(), t = {
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
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, n = {
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
  i[e.ForwardRef] = n, i[e.Memo] = o;
  function a(g) {
    return e.isMemo(g) ? o : i[g.$$typeof] || t;
  }
  var s = Object.defineProperty, l = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, d = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, h = Object.prototype;
  function S(g, u, y) {
    if (typeof u != "string") {
      if (h) {
        var x = p(u);
        x && x !== h && S(g, x, y);
      }
      var O = l(u);
      f && (O = O.concat(f(u)));
      for (var w = a(g), C = a(u), b = 0; b < O.length; ++b) {
        var T = O[b];
        if (!r[T] && !(y && y[T]) && !(C && C[T]) && !(w && w[T])) {
          var $ = d(u, T);
          try {
            s(g, T, $);
          } catch {
          }
        }
      }
    }
    return g;
  }
  return mr = S, mr;
}
_s();
var Ms = !0;
function Mo(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var Jr = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Ms === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, No = function(t, r, n) {
  Jr(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Ns(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Bs = {
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
}, Ds = /[A-Z]|^ms/g, js = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Bo = function(t) {
  return t.charCodeAt(1) === 45;
}, zn = function(t) {
  return t != null && typeof t != "boolean";
}, gr = /* @__PURE__ */ Ao(function(e) {
  return Bo(e) ? e : e.replace(Ds, "-$&").toLowerCase();
}), Vn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(js, function(n, o, i) {
          return $e = {
            name: o,
            styles: i,
            next: $e
          }, o;
        });
  }
  return Bs[t] !== 1 && !Bo(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function dt(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return $e = {
          name: o.name,
          styles: o.styles,
          next: $e
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            $e = {
              name: a.name,
              styles: a.styles,
              next: $e
            }, a = a.next;
        var s = i.styles + ";";
        return s;
      }
      return Fs(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = $e, f = r(e);
        return $e = l, dt(e, t, f);
      }
      break;
    }
  }
  var d = r;
  if (t == null)
    return d;
  var p = t[d];
  return p !== void 0 ? p : d;
}
function Fs(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += dt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var s = a;
        t != null && t[s] !== void 0 ? n += i + "{" + t[s] + "}" : zn(s) && (n += gr(i) + ":" + Vn(i, s) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var l = 0; l < a.length; l++)
          zn(a[l]) && (n += gr(i) + ":" + Vn(i, a[l]) + ";");
      else {
        var f = dt(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += gr(i) + ":" + f + ";";
            break;
          }
          default:
            n += i + "{" + f + "}";
        }
      }
    }
  return n;
}
var Wn = /label:\s*([^\s;{]+)\s*(;|$)/g, $e;
function ir(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  $e = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += dt(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += dt(r, t, e[s]), n) {
      var l = i;
      o += l[s];
    }
  Wn.lastIndex = 0;
  for (var f = "", d; (d = Wn.exec(o)) !== null; )
    f += "-" + d[1];
  var p = Ns(o) + f;
  return {
    name: p,
    styles: o,
    next: $e
  };
}
var Ls = function(t) {
  return t();
}, zs = I.useInsertionEffect ? I.useInsertionEffect : !1, Do = zs || Ls, jo = /* @__PURE__ */ I.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ As({
    key: "css"
  }) : null
);
jo.Provider;
var Fo = function(t) {
  return /* @__PURE__ */ jr(function(r, n) {
    var o = Ri(jo);
    return t(r, o, n);
  });
}, Zr = /* @__PURE__ */ I.createContext({}), en = {}.hasOwnProperty, Pr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Vs = function(t, r) {
  var n = {};
  for (var o in r)
    en.call(r, o) && (n[o] = r[o]);
  return n[Pr] = t, n;
}, Ws = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Jr(r, n, o), Do(function() {
    return No(r, n, o);
  }), null;
}, Us = /* @__PURE__ */ Fo(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[Pr], i = [n], a = "";
  typeof e.className == "string" ? a = Mo(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = ir(i, void 0, I.useContext(Zr));
  a += t.key + "-" + s.name;
  var l = {};
  for (var f in e)
    en.call(e, f) && f !== "css" && f !== Pr && (l[f] = e[f]);
  return l.className = a, r && (l.ref = r), /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(Ws, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ I.createElement(o, l));
}), Ys = Us, Un = function(t, r) {
  var n = arguments;
  if (r == null || !en.call(r, "css"))
    return I.createElement.apply(void 0, n);
  var o = n.length, i = new Array(o);
  i[0] = Ys, i[1] = Vs(t, r);
  for (var a = 2; a < o; a++)
    i[a] = n[a];
  return I.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Un || (Un = {}));
function tn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return ir(t);
}
function xt() {
  var e = tn.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var qs = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Gs = /* @__PURE__ */ Ao(
  function(e) {
    return qs.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Hs = Gs, Ks = function(t) {
  return t !== "theme";
}, Yn = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Hs : Ks;
}, qn = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Xs = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Jr(r, n, o), Do(function() {
    return No(r, n, o);
  }), null;
}, Qs = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = qn(t, r, n), l = s || Yn(o), f = !l("as");
  return function() {
    var d = arguments, p = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      var h = d[0];
      p.push(h[0]);
      for (var S = d.length, g = 1; g < S; g++)
        p.push(d[g], h[g]);
    }
    var u = Fo(function(y, x, O) {
      var w = f && y.as || o, C = "", b = [], T = y;
      if (y.theme == null) {
        T = {};
        for (var $ in y)
          T[$] = y[$];
        T.theme = I.useContext(Zr);
      }
      typeof y.className == "string" ? C = Mo(x.registered, b, y.className) : y.className != null && (C = y.className + " ");
      var L = ir(p.concat(b), x.registered, T);
      C += x.key + "-" + L.name, a !== void 0 && (C += " " + a);
      var Y = f && s === void 0 ? Yn(w) : l, c = {};
      for (var P in y)
        f && P === "as" || Y(P) && (c[P] = y[P]);
      return c.className = C, O && (c.ref = O), /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(Xs, {
        cache: x,
        serialized: L,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ I.createElement(w, c));
    });
    return u.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", u.defaultProps = t.defaultProps, u.__emotion_real = u, u.__emotion_base = o, u.__emotion_styles = p, u.__emotion_forwardProp = s, Object.defineProperty(u, "toString", {
      value: function() {
        return "." + a;
      }
    }), u.withComponent = function(y, x) {
      var O = e(y, Vt({}, r, x, {
        shouldForwardProp: qn(u, x, !0)
      }));
      return O.apply(void 0, p);
    }, u;
  };
}, Js = [
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
], Or = Qs.bind(null);
Js.forEach(function(e) {
  Or[e] = Or(e);
});
/**
 * @mui/styled-engine v7.0.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Lo(e, t) {
  const r = Or(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Zs(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Gn = [];
function Hn(e) {
  return Gn[0] = e, ir(Gn);
}
const ec = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function tc(e) {
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
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = ec(t), a = Object.keys(i);
  function s(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function l(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - n / 100}${r})`;
  }
  function f(h, S) {
    const g = a.indexOf(S);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r}) and (max-width:${(g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : S) - n / 100}${r})`;
  }
  function d(h) {
    return a.indexOf(h) + 1 < a.length ? f(h, a[a.indexOf(h) + 1]) : s(h);
  }
  function p(h) {
    const S = a.indexOf(h);
    return S === 0 ? s(a[1]) : S === a.length - 1 ? l(a[S]) : f(h, a[a.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: s,
    down: l,
    between: f,
    only: d,
    not: p,
    unit: r,
    ...o
  };
}
const rc = {
  borderRadius: 4
};
function zo(e = 8, t = Gr({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function nc(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function rn(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, s = tc(r), l = zo(o);
  let f = ve({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: l,
    shape: {
      ...rc,
      ...i
    }
  }, a);
  return f = da(f), f.applyStyles = nc, f = t.reduce((d, p) => ve(d, p), f), f.unstable_sxConfig = {
    ...vt,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, f.unstable_sx = function(p) {
    return ze({
      sx: p,
      theme: this
    });
  }, f;
}
function oc(e) {
  return Object.keys(e).length === 0;
}
function ic(e = null) {
  const t = I.useContext(Zr);
  return !t || oc(t) ? e : t;
}
const ac = rn();
function sc(e = ac) {
  return ic(e);
}
function cc(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, i = Lo("div", {
    shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as"
  })(ze);
  return /* @__PURE__ */ I.forwardRef(function(l, f) {
    const d = sc(r), {
      className: p,
      component: h = "div",
      ...S
    } = ns(l);
    return /* @__PURE__ */ ce(i, {
      as: h,
      ref: f,
      className: me(p, o ? o(n) : n),
      theme: t && d[t] || d,
      ...S
    });
  });
}
function Vo(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Hn(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Hn(o.style));
  }), n;
}
const lc = rn();
function yr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function uc(e) {
  return e ? (t, r) => r[e] : null;
}
function fc(e, t, r) {
  e.theme = mc(e.theme) ? r : e.theme[t] || e.theme;
}
function Bt(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => Bt(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...i
      } = r;
      n = i;
    }
    return Wo(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function Wo(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const a = t[i];
    if (typeof a.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !a.props(n))
        continue;
    } else
      for (const s in a.props)
        if (e[s] !== a.props[s] && ((o = e.ownerState) == null ? void 0 : o[s]) !== a.props[s])
          continue e;
    typeof a.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(a.style(n))) : r.push(a.style);
  }
  return r;
}
function dc(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = lc,
    rootShouldForwardProp: n = yr,
    slotShouldForwardProp: o = yr
  } = e;
  function i(s) {
    fc(s, t, r);
  }
  return (s, l = {}) => {
    Zs(s, (b) => b.filter((T) => T !== ze));
    const {
      name: f,
      slot: d,
      skipVariantsResolver: p,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: S = uc(Uo(d)),
      ...g
    } = l, u = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), y = h || !1;
    let x = yr;
    d === "Root" || d === "root" ? x = n : d ? x = o : gc(s) && (x = void 0);
    const O = Lo(s, {
      shouldForwardProp: x,
      label: hc(f, d),
      ...g
    }), w = (b) => {
      if (typeof b == "function" && b.__emotion_real !== b)
        return function($) {
          return Bt($, b);
        };
      if (Re(b)) {
        const T = Vo(b);
        return T.variants ? function(L) {
          return Bt(L, T);
        } : T.style;
      }
      return b;
    }, C = (...b) => {
      const T = [], $ = b.map(w), L = [];
      if (T.push(i), f && S && L.push(function(A) {
        var te, ue;
        const U = (ue = (te = A.theme.components) == null ? void 0 : te[f]) == null ? void 0 : ue.styleOverrides;
        if (!U)
          return null;
        const ne = {};
        for (const ye in U)
          ne[ye] = Bt(A, U[ye]);
        return S(A, ne);
      }), f && !u && L.push(function(A) {
        var ne, te;
        const _ = A.theme, U = (te = (ne = _ == null ? void 0 : _.components) == null ? void 0 : ne[f]) == null ? void 0 : te.variants;
        return U ? Wo(A, U) : null;
      }), y || L.push(ze), Array.isArray($[0])) {
        const P = $.shift(), A = new Array(T.length).fill(""), _ = new Array(L.length).fill("");
        let U;
        U = [...A, ...P, ..._], U.raw = [...A, ...P.raw, ..._], T.unshift(U);
      }
      const Y = [...T, ...$, ...L], c = O(...Y);
      return s.muiName && (c.muiName = s.muiName), process.env.NODE_ENV !== "production" && (c.displayName = pc(f, d, s)), c;
    };
    return O.withConfig && (C.withConfig = O.withConfig), C;
  };
}
function pc(e, t, r) {
  return e ? `${e}${fe(t || "")}` : `Styled(${Qi(r)})`;
}
function hc(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Uo(t || "Root")}`), r;
}
function mc(e) {
  for (const t in e)
    return !1;
  return !0;
}
function gc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Uo(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const yc = /* @__PURE__ */ I.createContext(void 0);
process.env.NODE_ENV !== "production" && (m.node, m.object);
function bc(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Ft(o.defaultProps, n) : !o.styleOverrides && !o.variants ? Ft(o, n) : n;
}
function vc({
  props: e,
  name: t
}) {
  const r = I.useContext(yc);
  return bc({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const Kn = {
  theme: void 0
};
function Sc(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (Kn.theme = o.theme, i = Vo(e(Kn)), t = i, r = o.theme), i;
  };
}
function xc(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Xn = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Cc = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([s, l]) => {
      (!r || r && !r([...i, s])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...i, s], Array.isArray(l) ? [...a, s] : a) : t([...i, s], l, a));
    });
  }
  n(e);
}, Tc = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function br(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return Cc(
    e,
    (s, l, f) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(s, l))) {
        const d = `--${r ? `${r}-` : ""}${s.join("-")}`, p = Tc(s, l);
        Object.assign(o, {
          [d]: p
        }), Xn(i, s, `var(${d})`, f), Xn(a, s, `var(${d}, ${p})`, f);
      }
    },
    (s) => s[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function wc(e, t = {}) {
  const {
    getSelector: r = y,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: s = "light",
    ...l
  } = e, {
    vars: f,
    css: d,
    varsWithDefaults: p
  } = br(l, t);
  let h = p;
  const S = {}, {
    [s]: g,
    ...u
  } = i;
  if (Object.entries(u || {}).forEach(([w, C]) => {
    const {
      vars: b,
      css: T,
      varsWithDefaults: $
    } = br(C, t);
    h = ve(h, $), S[w] = {
      css: T,
      vars: b
    };
  }), g) {
    const {
      css: w,
      vars: C,
      varsWithDefaults: b
    } = br(g, t);
    h = ve(h, b), S[s] = {
      css: w,
      vars: C
    };
  }
  function y(w, C) {
    var T, $;
    let b = o;
    if (o === "class" && (b = ".%s"), o === "data" && (b = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (b = `[${o}="%s"]`), w) {
      if (b === "media")
        return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${(($ = (T = i[w]) == null ? void 0 : T.palette) == null ? void 0 : $.mode) || w})`]: {
            ":root": C
          }
        };
      if (b)
        return e.defaultColorScheme === w ? `:root, ${b.replace("%s", String(w))}` : b.replace("%s", String(w));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let w = {
        ...f
      };
      return Object.entries(S).forEach(([, {
        vars: C
      }]) => {
        w = ve(w, C);
      }), w;
    },
    generateStyleSheets: () => {
      var L, Y;
      const w = [], C = e.defaultColorScheme || "light";
      function b(c, P) {
        Object.keys(P).length && w.push(typeof c == "string" ? {
          [c]: {
            ...P
          }
        } : c);
      }
      b(r(void 0, {
        ...d
      }), d);
      const {
        [C]: T,
        ...$
      } = S;
      if (T) {
        const {
          css: c
        } = T, P = (Y = (L = i[C]) == null ? void 0 : L.palette) == null ? void 0 : Y.mode, A = !n && P ? {
          colorScheme: P,
          ...c
        } : {
          ...c
        };
        b(r(C, {
          ...A
        }), A);
      }
      return Object.entries($).forEach(([c, {
        css: P
      }]) => {
        var U, ne;
        const A = (ne = (U = i[c]) == null ? void 0 : U.palette) == null ? void 0 : ne.mode, _ = !n && A ? {
          colorScheme: A,
          ...P
        } : {
          ...P
        };
        b(r(c, {
          ..._
        }), _);
      }), w;
    }
  };
}
function Ec(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const pt = {
  black: "#000",
  white: "#fff"
}, Pc = {
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
}, Ve = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, We = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, rt = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Ue = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Ye = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, qe = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Yo() {
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
      paper: pt.white,
      default: pt.white
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
const Oc = Yo();
function qo() {
  return {
    text: {
      primary: pt.white,
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
      active: pt.white,
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
const Qn = qo();
function Jn(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Yr(e.main, o) : t === "dark" && (e.dark = Ur(e.main, i)));
}
function $c(e = "light") {
  return e === "dark" ? {
    main: Ue[200],
    light: Ue[50],
    dark: Ue[400]
  } : {
    main: Ue[700],
    light: Ue[400],
    dark: Ue[800]
  };
}
function Rc(e = "light") {
  return e === "dark" ? {
    main: Ve[200],
    light: Ve[50],
    dark: Ve[400]
  } : {
    main: Ve[500],
    light: Ve[300],
    dark: Ve[700]
  };
}
function kc(e = "light") {
  return e === "dark" ? {
    main: We[500],
    light: We[300],
    dark: We[700]
  } : {
    main: We[700],
    light: We[400],
    dark: We[800]
  };
}
function Ic(e = "light") {
  return e === "dark" ? {
    main: Ye[400],
    light: Ye[300],
    dark: Ye[700]
  } : {
    main: Ye[700],
    light: Ye[500],
    dark: Ye[900]
  };
}
function Ac(e = "light") {
  return e === "dark" ? {
    main: qe[400],
    light: qe[300],
    dark: qe[700]
  } : {
    main: qe[800],
    light: qe[500],
    dark: qe[900]
  };
}
function _c(e = "light") {
  return e === "dark" ? {
    main: rt[400],
    light: rt[300],
    dark: rt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: rt[500],
    dark: rt[900]
  };
}
function nn(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || $c(t), a = e.secondary || Rc(t), s = e.error || kc(t), l = e.info || Ic(t), f = e.success || Ac(t), d = e.warning || _c(t);
  function p(u) {
    const y = wn(u, Qn.text.primary) >= r ? Qn.text.primary : Oc.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const x = wn(u, y);
      x < 3 && console.error([`MUI: The contrast ratio of ${x}:1 for ${y} on ${u}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return y;
  }
  const h = ({
    color: u,
    name: y,
    mainShade: x = 500,
    lightShade: O = 300,
    darkShade: w = 700
  }) => {
    if (u = {
      ...u
    }, !u.main && u[x] && (u.main = u[x]), !u.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${x}\` property.` : Be(11, y ? ` (${y})` : "", x));
    if (typeof u.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(u.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Be(12, y ? ` (${y})` : "", JSON.stringify(u.main)));
    return Jn(u, "light", O, n), Jn(u, "dark", w, n), u.contrastText || (u.contrastText = p(u.main)), u;
  };
  let S;
  return t === "light" ? S = Yo() : t === "dark" && (S = qo()), process.env.NODE_ENV !== "production" && (S || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), ve({
    // A collection of common colors.
    common: {
      ...pt
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
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: Pc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...S
  }, o);
}
function Mc(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Nc(e, t) {
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
function Bc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Zn = {
  textTransform: "uppercase"
}, eo = '"Roboto", "Helvetica", "Arial", sans-serif';
function Dc(e, t) {
  const {
    fontFamily: r = eo,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: s = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: d,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = n / 14, S = d || ((y) => `${y / l * h}rem`), g = (y, x, O, w, C) => ({
    fontFamily: r,
    fontWeight: y,
    fontSize: S(x),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: O,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === eo ? {
      letterSpacing: `${Bc(w / x)}em`
    } : {},
    ...C,
    ...f
  }), u = {
    h1: g(o, 96, 1.167, -1.5),
    h2: g(o, 60, 1.2, -0.5),
    h3: g(i, 48, 1.167, 0),
    h4: g(i, 34, 1.235, 0.25),
    h5: g(i, 24, 1.334, 0),
    h6: g(a, 20, 1.6, 0.15),
    subtitle1: g(i, 16, 1.75, 0.15),
    subtitle2: g(a, 14, 1.57, 0.1),
    body1: g(i, 16, 1.5, 0.15),
    body2: g(i, 14, 1.43, 0.15),
    button: g(a, 14, 1.75, 0.4, Zn),
    caption: g(i, 12, 1.66, 0.4),
    overline: g(i, 12, 2.66, 1, Zn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ve({
    htmlFontSize: l,
    pxToRem: S,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: s,
    ...u
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const jc = 0.2, Fc = 0.14, Lc = 0.12;
function re(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${jc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Fc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Lc})`].join(",");
}
const zc = ["none", re(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), re(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), re(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), re(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), re(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), re(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), re(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), re(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), re(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), re(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), re(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), re(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), re(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), re(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), re(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), re(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), re(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), re(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), re(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), re(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), re(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), re(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), re(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), re(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Vc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Wc = {
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
function to(e) {
  return `${Math.round(e)}ms`;
}
function Uc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Yc(e) {
  const t = {
    ...Vc,
    ...e.easing
  }, r = {
    ...Wc,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Uc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: s = t.easeInOut,
        delay: l = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const d = (h) => typeof h == "string", p = (h) => !Number.isNaN(parseFloat(h));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(s) || console.error('MUI: Argument "easing" must be a string.'), !p(l) && !d(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof a == "string" ? a : to(a)} ${s} ${typeof l == "string" ? l : to(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const qc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Gc(e) {
  return Re(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Go(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, s] = o[i];
      !Gc(s) || a.startsWith("unstable_") ? delete n[a] : Re(s) && (n[a] = {
        ...s
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function $r(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: s = {},
    shape: l,
    ...f
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Be(20));
  const d = nn(i), p = rn(e);
  let h = ve(p, {
    mixins: Nc(p.breakpoints, n),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: zc.slice(),
    typography: Dc(d, s),
    transitions: Yc(a),
    zIndex: {
      ...qc
    }
  });
  if (h = ve(h, f), h = t.reduce((S, g) => ve(S, g), h), process.env.NODE_ENV !== "production") {
    const S = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], g = (u, y) => {
      let x;
      for (x in u) {
        const O = u[x];
        if (S.includes(x) && Object.keys(O).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const w = mt("", x);
            console.error([`MUI: The \`${y}\` component increases the CSS specificity of the \`${x}\` internal state.`, "You can not override it like this: ", JSON.stringify(u, null, 2), "", `Instead, you need to use the '&.${w}' syntax:`, JSON.stringify({
              root: {
                [`&.${w}`]: O
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          u[x] = {};
        }
      }
    };
    Object.keys(h.components).forEach((u) => {
      const y = h.components[u].styleOverrides;
      y && u.startsWith("Mui") && g(y, u);
    });
  }
  return h.unstable_sxConfig = {
    ...vt,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, h.unstable_sx = function(g) {
    return ze({
      sx: g,
      theme: this
    });
  }, h.toRuntimeSource = Go, h;
}
function Hc(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Kc = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Hc(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Ho(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Ko(e) {
  return e === "dark" ? Kc : [];
}
function Xc(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = nn(t);
  return {
    palette: i,
    opacity: {
      ...Ho(i.mode),
      ...r
    },
    overlays: n || Ko(i.mode),
    ...o
  };
}
function Qc(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Jc = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Zc = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Jc(e.cssVarPrefix).forEach((s) => {
        a[s] = r[s], delete r[s];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function el(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function v(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function st(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : vo(e);
}
function Ie(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = at(st(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function tl(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Pe = (e) => {
  try {
    return e();
  } catch {
  }
}, rl = (e = "mui") => xc(e);
function vr(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = Xc({
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
    ...a
  } = $r({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...Ho(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Ko(o)
  }, a;
}
function nl(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = Qc,
    colorSchemeSelector: s = r.light && r.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...f
  } = e, d = Object.keys(r)[0], p = n || (r.light && d !== "light" ? "light" : d), h = rl(i), {
    [p]: S,
    light: g,
    dark: u,
    ...y
  } = r, x = {
    ...y
  };
  let O = S;
  if ((p === "dark" && !("dark" in r) || p === "light" && !("light" in r)) && (O = !0), !O)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : Be(21, p));
  const w = vr(x, O, f, p);
  g && !x.light && vr(x, g, void 0, "light"), u && !x.dark && vr(x, u, void 0, "dark");
  let C = {
    defaultColorScheme: p,
    ...w,
    cssVarPrefix: i,
    colorSchemeSelector: s,
    rootSelector: l,
    getCssVar: h,
    colorSchemes: x,
    font: {
      ...Mc(w.typography),
      ...w.font
    },
    spacing: tl(f.spacing)
  };
  Object.keys(C.colorSchemes).forEach((Y) => {
    const c = C.colorSchemes[Y].palette, P = (A) => {
      const _ = A.split("-"), U = _[1], ne = _[2];
      return h(A, c[U][ne]);
    };
    if (c.mode === "light" && (v(c.common, "background", "#fff"), v(c.common, "onBackground", "#000")), c.mode === "dark" && (v(c.common, "background", "#000"), v(c.common, "onBackground", "#fff")), el(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      v(c.Alert, "errorColor", Z(c.error.light, 0.6)), v(c.Alert, "infoColor", Z(c.info.light, 0.6)), v(c.Alert, "successColor", Z(c.success.light, 0.6)), v(c.Alert, "warningColor", Z(c.warning.light, 0.6)), v(c.Alert, "errorFilledBg", P("palette-error-main")), v(c.Alert, "infoFilledBg", P("palette-info-main")), v(c.Alert, "successFilledBg", P("palette-success-main")), v(c.Alert, "warningFilledBg", P("palette-warning-main")), v(c.Alert, "errorFilledColor", Pe(() => c.getContrastText(c.error.main))), v(c.Alert, "infoFilledColor", Pe(() => c.getContrastText(c.info.main))), v(c.Alert, "successFilledColor", Pe(() => c.getContrastText(c.success.main))), v(c.Alert, "warningFilledColor", Pe(() => c.getContrastText(c.warning.main))), v(c.Alert, "errorStandardBg", ee(c.error.light, 0.9)), v(c.Alert, "infoStandardBg", ee(c.info.light, 0.9)), v(c.Alert, "successStandardBg", ee(c.success.light, 0.9)), v(c.Alert, "warningStandardBg", ee(c.warning.light, 0.9)), v(c.Alert, "errorIconColor", P("palette-error-main")), v(c.Alert, "infoIconColor", P("palette-info-main")), v(c.Alert, "successIconColor", P("palette-success-main")), v(c.Alert, "warningIconColor", P("palette-warning-main")), v(c.AppBar, "defaultBg", P("palette-grey-100")), v(c.Avatar, "defaultBg", P("palette-grey-400")), v(c.Button, "inheritContainedBg", P("palette-grey-300")), v(c.Button, "inheritContainedHoverBg", P("palette-grey-A100")), v(c.Chip, "defaultBorder", P("palette-grey-400")), v(c.Chip, "defaultAvatarColor", P("palette-grey-700")), v(c.Chip, "defaultIconColor", P("palette-grey-700")), v(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), v(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), v(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), v(c.LinearProgress, "primaryBg", ee(c.primary.main, 0.62)), v(c.LinearProgress, "secondaryBg", ee(c.secondary.main, 0.62)), v(c.LinearProgress, "errorBg", ee(c.error.main, 0.62)), v(c.LinearProgress, "infoBg", ee(c.info.main, 0.62)), v(c.LinearProgress, "successBg", ee(c.success.main, 0.62)), v(c.LinearProgress, "warningBg", ee(c.warning.main, 0.62)), v(c.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.11)`), v(c.Slider, "primaryTrack", ee(c.primary.main, 0.62)), v(c.Slider, "secondaryTrack", ee(c.secondary.main, 0.62)), v(c.Slider, "errorTrack", ee(c.error.main, 0.62)), v(c.Slider, "infoTrack", ee(c.info.main, 0.62)), v(c.Slider, "successTrack", ee(c.success.main, 0.62)), v(c.Slider, "warningTrack", ee(c.warning.main, 0.62));
      const A = Ot(c.background.default, 0.8);
      v(c.SnackbarContent, "bg", A), v(c.SnackbarContent, "color", Pe(() => c.getContrastText(A))), v(c.SpeedDialAction, "fabHoverBg", Ot(c.background.paper, 0.15)), v(c.StepConnector, "border", P("palette-grey-400")), v(c.StepContent, "border", P("palette-grey-400")), v(c.Switch, "defaultColor", P("palette-common-white")), v(c.Switch, "defaultDisabledColor", P("palette-grey-100")), v(c.Switch, "primaryDisabledColor", ee(c.primary.main, 0.62)), v(c.Switch, "secondaryDisabledColor", ee(c.secondary.main, 0.62)), v(c.Switch, "errorDisabledColor", ee(c.error.main, 0.62)), v(c.Switch, "infoDisabledColor", ee(c.info.main, 0.62)), v(c.Switch, "successDisabledColor", ee(c.success.main, 0.62)), v(c.Switch, "warningDisabledColor", ee(c.warning.main, 0.62)), v(c.TableCell, "border", ee(Pt(c.divider, 1), 0.88)), v(c.Tooltip, "bg", Pt(c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      v(c.Alert, "errorColor", ee(c.error.light, 0.6)), v(c.Alert, "infoColor", ee(c.info.light, 0.6)), v(c.Alert, "successColor", ee(c.success.light, 0.6)), v(c.Alert, "warningColor", ee(c.warning.light, 0.6)), v(c.Alert, "errorFilledBg", P("palette-error-dark")), v(c.Alert, "infoFilledBg", P("palette-info-dark")), v(c.Alert, "successFilledBg", P("palette-success-dark")), v(c.Alert, "warningFilledBg", P("palette-warning-dark")), v(c.Alert, "errorFilledColor", Pe(() => c.getContrastText(c.error.dark))), v(c.Alert, "infoFilledColor", Pe(() => c.getContrastText(c.info.dark))), v(c.Alert, "successFilledColor", Pe(() => c.getContrastText(c.success.dark))), v(c.Alert, "warningFilledColor", Pe(() => c.getContrastText(c.warning.dark))), v(c.Alert, "errorStandardBg", Z(c.error.light, 0.9)), v(c.Alert, "infoStandardBg", Z(c.info.light, 0.9)), v(c.Alert, "successStandardBg", Z(c.success.light, 0.9)), v(c.Alert, "warningStandardBg", Z(c.warning.light, 0.9)), v(c.Alert, "errorIconColor", P("palette-error-main")), v(c.Alert, "infoIconColor", P("palette-info-main")), v(c.Alert, "successIconColor", P("palette-success-main")), v(c.Alert, "warningIconColor", P("palette-warning-main")), v(c.AppBar, "defaultBg", P("palette-grey-900")), v(c.AppBar, "darkBg", P("palette-background-paper")), v(c.AppBar, "darkColor", P("palette-text-primary")), v(c.Avatar, "defaultBg", P("palette-grey-600")), v(c.Button, "inheritContainedBg", P("palette-grey-800")), v(c.Button, "inheritContainedHoverBg", P("palette-grey-700")), v(c.Chip, "defaultBorder", P("palette-grey-700")), v(c.Chip, "defaultAvatarColor", P("palette-grey-300")), v(c.Chip, "defaultIconColor", P("palette-grey-300")), v(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), v(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), v(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), v(c.LinearProgress, "primaryBg", Z(c.primary.main, 0.5)), v(c.LinearProgress, "secondaryBg", Z(c.secondary.main, 0.5)), v(c.LinearProgress, "errorBg", Z(c.error.main, 0.5)), v(c.LinearProgress, "infoBg", Z(c.info.main, 0.5)), v(c.LinearProgress, "successBg", Z(c.success.main, 0.5)), v(c.LinearProgress, "warningBg", Z(c.warning.main, 0.5)), v(c.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.13)`), v(c.Slider, "primaryTrack", Z(c.primary.main, 0.5)), v(c.Slider, "secondaryTrack", Z(c.secondary.main, 0.5)), v(c.Slider, "errorTrack", Z(c.error.main, 0.5)), v(c.Slider, "infoTrack", Z(c.info.main, 0.5)), v(c.Slider, "successTrack", Z(c.success.main, 0.5)), v(c.Slider, "warningTrack", Z(c.warning.main, 0.5));
      const A = Ot(c.background.default, 0.98);
      v(c.SnackbarContent, "bg", A), v(c.SnackbarContent, "color", Pe(() => c.getContrastText(A))), v(c.SpeedDialAction, "fabHoverBg", Ot(c.background.paper, 0.15)), v(c.StepConnector, "border", P("palette-grey-600")), v(c.StepContent, "border", P("palette-grey-600")), v(c.Switch, "defaultColor", P("palette-grey-300")), v(c.Switch, "defaultDisabledColor", P("palette-grey-600")), v(c.Switch, "primaryDisabledColor", Z(c.primary.main, 0.55)), v(c.Switch, "secondaryDisabledColor", Z(c.secondary.main, 0.55)), v(c.Switch, "errorDisabledColor", Z(c.error.main, 0.55)), v(c.Switch, "infoDisabledColor", Z(c.info.main, 0.55)), v(c.Switch, "successDisabledColor", Z(c.success.main, 0.55)), v(c.Switch, "warningDisabledColor", Z(c.warning.main, 0.55)), v(c.TableCell, "border", Z(Pt(c.divider, 1), 0.68)), v(c.Tooltip, "bg", Pt(c.grey[700], 0.92));
    }
    Ie(c.background, "default"), Ie(c.background, "paper"), Ie(c.common, "background"), Ie(c.common, "onBackground"), Ie(c, "divider"), Object.keys(c).forEach((A) => {
      const _ = c[A];
      A !== "tonalOffset" && _ && typeof _ == "object" && (_.main && v(c[A], "mainChannel", at(st(_.main))), _.light && v(c[A], "lightChannel", at(st(_.light))), _.dark && v(c[A], "darkChannel", at(st(_.dark))), _.contrastText && v(c[A], "contrastTextChannel", at(st(_.contrastText))), A === "text" && (Ie(c[A], "primary"), Ie(c[A], "secondary")), A === "action" && (_.active && Ie(c[A], "active"), _.selected && Ie(c[A], "selected")));
    });
  }), C = t.reduce((Y, c) => ve(Y, c), C);
  const b = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: Zc(C)
  }, {
    vars: T,
    generateThemeVars: $,
    generateStyleSheets: L
  } = wc(C, b);
  return C.vars = T, Object.entries(C.colorSchemes[C.defaultColorScheme]).forEach(([Y, c]) => {
    C[Y] = c;
  }), C.generateThemeVars = $, C.generateStyleSheets = L, C.generateSpacing = function() {
    return zo(f.spacing, Gr(this));
  }, C.getColorSchemeSelector = Ec(s), C.spacing = C.generateSpacing(), C.shouldSkipGeneratingVar = a, C.unstable_sxConfig = {
    ...vt,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, C.unstable_sx = function(c) {
    return ze({
      sx: c,
      theme: this
    });
  }, C.toRuntimeSource = Go, C;
}
function ro(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: nn({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Xo(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, s = i || "light", l = o == null ? void 0 : o[s], f = {
    ...o,
    ...r ? {
      [s]: {
        ...typeof l != "boolean" && l,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return $r(e, ...t);
    let d = r;
    "palette" in e || f[s] && (f[s] !== !0 ? d = f[s].palette : s === "dark" && (d = {
      mode: "dark"
    }));
    const p = $r({
      ...e,
      palette: d
    }, ...t);
    return p.defaultColorScheme = s, p.colorSchemes = f, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: p.palette
    }, ro(p, "dark", f.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: p.palette
    }, ro(p, "light", f.light)), p;
  }
  return !r && !("light" in f) && s === "light" && (f.light = !0), nl({
    ...a,
    colorSchemes: f,
    defaultColorScheme: s,
    ...typeof n != "boolean" && n
  }, ...t);
}
const ol = Xo(), Qo = "$$material";
function il(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Jo = (e) => il(e) && e !== "classes", Ee = dc({
  themeId: Qo,
  defaultTheme: ol,
  rootShouldForwardProp: Jo
}), on = Sc;
process.env.NODE_ENV !== "production" && (m.node, m.object.isRequired);
function ar(e) {
  return vc(e);
}
class Ut {
  constructor() {
    et(this, "mountEffect", () => {
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
    return new Ut();
  }
  static use() {
    const t = To(Ut.create).current, [r, n] = I.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, I.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = sl(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function al() {
  return Ut.use();
}
function sl() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function cl(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Rr(e, t) {
  return Rr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Rr(e, t);
}
function ll(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Rr(e, t);
}
const no = it.createContext(null);
function ul(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function an(e, t) {
  var r = function(i) {
    return t && kt(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && ki.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function fl(e, t) {
  e = e || {}, t = t || {};
  function r(d) {
    return d in t ? t[d] : e[d];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, s = {};
  for (var l in t) {
    if (n[l])
      for (a = 0; a < n[l].length; a++) {
        var f = n[l][a];
        s[n[l][a]] = r(f);
      }
    s[l] = r(l);
  }
  for (a = 0; a < o.length; a++)
    s[o[a]] = r(o[a]);
  return s;
}
function Le(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function dl(e, t) {
  return an(e.children, function(r) {
    return It(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Le(r, "appear", e),
      enter: Le(r, "enter", e),
      exit: Le(r, "exit", e)
    });
  });
}
function pl(e, t, r) {
  var n = an(e.children), o = fl(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (kt(a)) {
      var s = i in t, l = i in n, f = t[i], d = kt(f) && !f.props.in;
      l && (!s || d) ? o[i] = It(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: Le(a, "exit", e),
        enter: Le(a, "enter", e)
      }) : !l && s && !d ? o[i] = It(a, {
        in: !1
      }) : l && s && kt(f) && (o[i] = It(a, {
        onExited: r.bind(null, a),
        in: f.props.in,
        exit: Le(a, "exit", e),
        enter: Le(a, "enter", e)
      }));
    }
  }), o;
}
var hl = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, ml = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, sn = /* @__PURE__ */ function(e) {
  ll(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(ul(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var a = i.children, s = i.handleExited, l = i.firstRender;
    return {
      children: l ? dl(o, s) : pl(o, a, s),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = an(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var l = Vt({}, s.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, s = cl(o, ["component", "childFactory"]), l = this.state.contextValue, f = hl(this.state.children).map(a);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ it.createElement(no.Provider, {
      value: l
    }, f) : /* @__PURE__ */ it.createElement(no.Provider, {
      value: l
    }, /* @__PURE__ */ it.createElement(i, s, f));
  }, t;
}(it.Component);
sn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: m.any,
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
  children: m.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: m.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: m.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: m.bool,
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
  childFactory: m.func
} : {};
sn.defaultProps = ml;
function Zo(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: s,
    onExited: l,
    timeout: f
  } = e, [d, p] = I.useState(!1), h = me(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), S = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, g = me(r.child, d && r.childLeaving, n && r.childPulsate);
  return !s && !d && p(!0), I.useEffect(() => {
    if (!s && l != null) {
      const u = setTimeout(l, f);
      return () => {
        clearTimeout(u);
      };
    }
  }, [l, s, f]), /* @__PURE__ */ ce("span", {
    className: h,
    style: S,
    children: /* @__PURE__ */ ce("span", {
      className: g
    })
  });
}
process.env.NODE_ENV !== "production" && (Zo.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object.isRequired,
  className: m.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: m.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: m.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: m.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: m.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: m.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: m.number,
  /**
   * exit delay
   */
  timeout: m.number.isRequired
});
const Ce = gt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), kr = 550, gl = 80, yl = xt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, bl = xt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, vl = xt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Sl = Ee("span", {
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
}), xl = Ee(Zo, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Ce.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${yl};
    animation-duration: ${kr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Ce.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Ce.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Ce.childLeaving} {
    opacity: 0;
    animation-name: ${bl};
    animation-duration: ${kr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Ce.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${vl};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, ei = /* @__PURE__ */ I.forwardRef(function(t, r) {
  const n = ar({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...s
  } = n, [l, f] = I.useState([]), d = I.useRef(0), p = I.useRef(null);
  I.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [l]);
  const h = I.useRef(!1), S = aa(), g = I.useRef(null), u = I.useRef(null), y = I.useCallback((C) => {
    const {
      pulsate: b,
      rippleX: T,
      rippleY: $,
      rippleSize: L,
      cb: Y
    } = C;
    f((c) => [...c, /* @__PURE__ */ ce(xl, {
      classes: {
        ripple: me(i.ripple, Ce.ripple),
        rippleVisible: me(i.rippleVisible, Ce.rippleVisible),
        ripplePulsate: me(i.ripplePulsate, Ce.ripplePulsate),
        child: me(i.child, Ce.child),
        childLeaving: me(i.childLeaving, Ce.childLeaving),
        childPulsate: me(i.childPulsate, Ce.childPulsate)
      },
      timeout: kr,
      pulsate: b,
      rippleX: T,
      rippleY: $,
      rippleSize: L
    }, d.current)]), d.current += 1, p.current = Y;
  }, [i]), x = I.useCallback((C = {}, b = {}, T = () => {
  }) => {
    const {
      pulsate: $ = !1,
      center: L = o || b.pulsate,
      fakeElement: Y = !1
      // For test purposes
    } = b;
    if ((C == null ? void 0 : C.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (C == null ? void 0 : C.type) === "touchstart" && (h.current = !0);
    const c = Y ? null : u.current, P = c ? c.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let A, _, U;
    if (L || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches)
      A = Math.round(P.width / 2), _ = Math.round(P.height / 2);
    else {
      const {
        clientX: ne,
        clientY: te
      } = C.touches && C.touches.length > 0 ? C.touches[0] : C;
      A = Math.round(ne - P.left), _ = Math.round(te - P.top);
    }
    if (L)
      U = Math.sqrt((2 * P.width ** 2 + P.height ** 2) / 3), U % 2 === 0 && (U += 1);
    else {
      const ne = Math.max(Math.abs((c ? c.clientWidth : 0) - A), A) * 2 + 2, te = Math.max(Math.abs((c ? c.clientHeight : 0) - _), _) * 2 + 2;
      U = Math.sqrt(ne ** 2 + te ** 2);
    }
    C != null && C.touches ? g.current === null && (g.current = () => {
      y({
        pulsate: $,
        rippleX: A,
        rippleY: _,
        rippleSize: U,
        cb: T
      });
    }, S.start(gl, () => {
      g.current && (g.current(), g.current = null);
    })) : y({
      pulsate: $,
      rippleX: A,
      rippleY: _,
      rippleSize: U,
      cb: T
    });
  }, [o, y, S]), O = I.useCallback(() => {
    x({}, {
      pulsate: !0
    });
  }, [x]), w = I.useCallback((C, b) => {
    if (S.clear(), (C == null ? void 0 : C.type) === "touchend" && g.current) {
      g.current(), g.current = null, S.start(0, () => {
        w(C, b);
      });
      return;
    }
    g.current = null, f((T) => T.length > 0 ? T.slice(1) : T), p.current = b;
  }, [S]);
  return I.useImperativeHandle(r, () => ({
    pulsate: O,
    start: x,
    stop: w
  }), [O, x, w]), /* @__PURE__ */ ce(Sl, {
    className: me(Ce.root, i.root, a),
    ref: u,
    ...s,
    children: /* @__PURE__ */ ce(sn, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (ei.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: m.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string
});
function Cl(e) {
  return mt("MuiButtonBase", e);
}
const Tl = gt("MuiButtonBase", ["root", "disabled", "focusVisible"]), wl = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = Vr({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Cl, o);
  return r && n && (a.root += ` ${n}`), a;
}, El = Ee("button", {
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
  [`&.${Tl.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ti = /* @__PURE__ */ I.forwardRef(function(t, r) {
  const n = ar({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: s,
    component: l = "button",
    disabled: f = !1,
    disableRipple: d = !1,
    disableTouchRipple: p = !1,
    focusRipple: h = !1,
    focusVisibleClassName: S,
    LinkComponent: g = "a",
    onBlur: u,
    onClick: y,
    onContextMenu: x,
    onDragLeave: O,
    onFocus: w,
    onFocusVisible: C,
    onKeyDown: b,
    onKeyUp: T,
    onMouseDown: $,
    onMouseLeave: L,
    onMouseUp: Y,
    onTouchEnd: c,
    onTouchMove: P,
    onTouchStart: A,
    tabIndex: _ = 0,
    TouchRippleProps: U,
    touchRippleRef: ne,
    type: te,
    ...ue
  } = n, ye = I.useRef(null), ae = al(), E = In(ae.ref, ne), [R, N] = I.useState(!1);
  f && R && N(!1), I.useImperativeHandle(o, () => ({
    focusVisible: () => {
      N(!0), ye.current.focus();
    }
  }), []);
  const j = ae.shouldMount && !d && !f;
  I.useEffect(() => {
    R && h && !d && ae.pulsate();
  }, [d, h, R, ae]);
  const M = Ae(ae, "start", $, p), z = Ae(ae, "stop", x, p), B = Ae(ae, "stop", O, p), F = Ae(ae, "stop", Y, p), V = Ae(ae, "stop", (D) => {
    R && D.preventDefault(), L && L(D);
  }, p), q = Ae(ae, "start", A, p), W = Ae(ae, "stop", c, p), pe = Ae(ae, "stop", P, p), k = Ae(ae, "stop", (D) => {
    _n(D.target) || N(!1), u && u(D);
  }, !1), xe = At((D) => {
    ye.current || (ye.current = D.currentTarget), _n(D.target) && (N(!0), C && C(D)), w && w(D);
  }), Me = () => {
    const D = ye.current;
    return l && l !== "button" && !(D.tagName === "A" && D.href);
  }, Ct = At((D) => {
    h && !D.repeat && R && D.key === " " && ae.stop(D, () => {
      ae.start(D);
    }), D.target === D.currentTarget && Me() && D.key === " " && D.preventDefault(), b && b(D), D.target === D.currentTarget && Me() && D.key === "Enter" && !f && (D.preventDefault(), y && y(D));
  }), Ti = At((D) => {
    h && D.key === " " && R && !D.defaultPrevented && ae.stop(D, () => {
      ae.pulsate(D);
    }), T && T(D), y && D.target === D.currentTarget && Me() && D.key === " " && !D.defaultPrevented && y(D);
  });
  let Tt = l;
  Tt === "button" && (ue.href || ue.to) && (Tt = g);
  const Ze = {};
  Tt === "button" ? (Ze.type = te === void 0 ? "button" : te, Ze.disabled = f) : (!ue.href && !ue.to && (Ze.role = "button"), f && (Ze["aria-disabled"] = f));
  const wi = In(r, ye), dn = {
    ...n,
    centerRipple: i,
    component: l,
    disabled: f,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: h,
    tabIndex: _,
    focusVisible: R
  }, Ei = wl(dn);
  return /* @__PURE__ */ Dr(El, {
    as: Tt,
    className: me(Ei.root, s),
    ownerState: dn,
    onBlur: k,
    onClick: y,
    onContextMenu: z,
    onFocus: xe,
    onKeyDown: Ct,
    onKeyUp: Ti,
    onMouseDown: M,
    onMouseLeave: V,
    onMouseUp: F,
    onDragLeave: B,
    onTouchEnd: W,
    onTouchMove: pe,
    onTouchStart: q,
    ref: wi,
    tabIndex: f ? -1 : _,
    type: te,
    ...Ze,
    ...ue,
    children: [a, j ? /* @__PURE__ */ ce(ei, {
      ref: E,
      center: i,
      ...U
    }) : null]
  });
});
function Ae(e, t, r, n = !1) {
  return At((o) => (r && r(o), n || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (ti.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Ji,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: m.bool,
  /**
   * The content of the component.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Xi,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: m.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: m.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: m.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: m.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: m.string,
  /**
   * @ignore
   */
  href: m.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: m.elementType,
  /**
   * @ignore
   */
  onBlur: m.func,
  /**
   * @ignore
   */
  onClick: m.func,
  /**
   * @ignore
   */
  onContextMenu: m.func,
  /**
   * @ignore
   */
  onDragLeave: m.func,
  /**
   * @ignore
   */
  onFocus: m.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: m.func,
  /**
   * @ignore
   */
  onKeyDown: m.func,
  /**
   * @ignore
   */
  onKeyUp: m.func,
  /**
   * @ignore
   */
  onMouseDown: m.func,
  /**
   * @ignore
   */
  onMouseLeave: m.func,
  /**
   * @ignore
   */
  onMouseUp: m.func,
  /**
   * @ignore
   */
  onTouchEnd: m.func,
  /**
   * @ignore
   */
  onTouchMove: m.func,
  /**
   * @ignore
   */
  onTouchStart: m.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * @default 0
   */
  tabIndex: m.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: m.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: m.oneOfType([m.func, m.shape({
    current: m.shape({
      pulsate: m.func.isRequired,
      start: m.func.isRequired,
      stop: m.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: m.oneOfType([m.oneOf(["button", "reset", "submit"]), m.string])
});
function Pl(e) {
  return typeof e.main == "string";
}
function Ol(e, t = []) {
  if (!Pl(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function ri(e = []) {
  return ([, t]) => t && Ol(t, e);
}
function $l(e) {
  return mt("MuiCircularProgress", e);
}
gt("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Ne = 44, Ir = xt`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Ar = xt`
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
`, Rl = typeof Ir != "string" ? tn`
        animation: ${Ir} 1.4s linear infinite;
      ` : null, kl = typeof Ar != "string" ? tn`
        animation: ${Ar} 1.4s ease-in-out infinite;
      ` : null, Il = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, i = {
    root: ["root", r, `color${fe(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${fe(r)}`, o && "circleDisableShrink"]
  };
  return Vr(i, $l, t);
}, Al = Ee("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${fe(r.color)}`]];
  }
})(on(({
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
    style: Rl || {
      animation: `${Ir} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(ri()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), _l = Ee("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), Ml = Ee("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${fe(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(on(({
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
    style: kl || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Ar} 1.4s ease-in-out infinite`
    }
  }]
}))), ni = /* @__PURE__ */ I.forwardRef(function(t, r) {
  const n = ar({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: a = !1,
    size: s = 40,
    style: l,
    thickness: f = 3.6,
    value: d = 0,
    variant: p = "indeterminate",
    ...h
  } = n, S = {
    ...n,
    color: i,
    disableShrink: a,
    size: s,
    thickness: f,
    value: d,
    variant: p
  }, g = Il(S), u = {}, y = {}, x = {};
  if (p === "determinate") {
    const O = 2 * Math.PI * ((Ne - f) / 2);
    u.strokeDasharray = O.toFixed(3), x["aria-valuenow"] = Math.round(d), u.strokeDashoffset = `${((100 - d) / 100 * O).toFixed(3)}px`, y.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ ce(Al, {
    className: me(g.root, o),
    style: {
      width: s,
      height: s,
      ...y,
      ...l
    },
    ownerState: S,
    ref: r,
    role: "progressbar",
    ...x,
    ...h,
    children: /* @__PURE__ */ ce(_l, {
      className: g.svg,
      ownerState: S,
      viewBox: `${Ne / 2} ${Ne / 2} ${Ne} ${Ne}`,
      children: /* @__PURE__ */ ce(Ml, {
        className: g.circle,
        style: u,
        ownerState: S,
        cx: Ne,
        cy: Ne,
        r: (Ne - f) / 2,
        fill: "none",
        strokeWidth: f
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (ni.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: m.oneOfType([m.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), m.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: So(m.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: m.oneOfType([m.number, m.string]),
  /**
   * @ignore
   */
  style: m.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: m.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: m.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: m.oneOf(["determinate", "indeterminate"])
});
function Nl(e) {
  return mt("MuiButton", e);
}
const Fe = gt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), oi = /* @__PURE__ */ I.createContext({});
process.env.NODE_ENV !== "production" && (oi.displayName = "ButtonGroupContext");
const ii = /* @__PURE__ */ I.createContext(void 0);
process.env.NODE_ENV !== "production" && (ii.displayName = "ButtonGroupButtonContext");
const Bl = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    loading: a,
    loadingPosition: s,
    classes: l
  } = e, f = {
    root: ["root", a && "loading", i, `${i}${fe(t)}`, `size${fe(o)}`, `${i}Size${fe(o)}`, `color${fe(t)}`, r && "disableElevation", n && "fullWidth", a && `loadingPosition${fe(s)}`],
    startIcon: ["icon", "startIcon", `iconSize${fe(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${fe(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, d = Vr(f, Nl, l);
  return {
    ...l,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, ai = [{
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
}], Dl = Ee(ti, {
  shouldForwardProp: (e) => Jo(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${fe(r.color)}`], t[`size${fe(r.size)}`], t[`${r.variant}Size${fe(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})(on(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
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
    [`&.${Fe.disabled}`]: {
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
        [`&.${Fe.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Fe.disabled}`]: {
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
        [`&.${Fe.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(ri()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : Ge(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ge(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ge(e.palette[n].main, e.palette.action.hoverOpacity)
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
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ge(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ge(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${Fe.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Fe.disabled}`]: {
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
        [`&.${Fe.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), jl = Ee("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${fe(r.size)}`]];
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
  }, ...ai]
})), Fl = Ee("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${fe(r.size)}`]];
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
  }, ...ai]
})), Ll = Ee("span", {
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
})), oo = Ee("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, t) => t.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), si = /* @__PURE__ */ I.forwardRef(function(t, r) {
  const n = I.useContext(oi), o = I.useContext(ii), i = Ft(n, t), a = ar({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: l = "primary",
    component: f = "button",
    className: d,
    disabled: p = !1,
    disableElevation: h = !1,
    disableFocusRipple: S = !1,
    endIcon: g,
    focusVisibleClassName: u,
    fullWidth: y = !1,
    id: x,
    loading: O = null,
    loadingIndicator: w,
    loadingPosition: C = "center",
    size: b = "medium",
    startIcon: T,
    type: $,
    variant: L = "text",
    ...Y
  } = a, c = na(x), P = w ?? /* @__PURE__ */ ce(ni, {
    "aria-labelledby": c,
    color: "inherit",
    size: 16
  }), A = {
    ...a,
    color: l,
    component: f,
    disabled: p,
    disableElevation: h,
    disableFocusRipple: S,
    fullWidth: y,
    loading: O,
    loadingIndicator: P,
    loadingPosition: C,
    size: b,
    type: $,
    variant: L
  }, _ = Bl(A), U = (T || O && C === "start") && /* @__PURE__ */ ce(jl, {
    className: _.startIcon,
    ownerState: A,
    children: T || /* @__PURE__ */ ce(oo, {
      className: _.loadingIconPlaceholder,
      ownerState: A
    })
  }), ne = (g || O && C === "end") && /* @__PURE__ */ ce(Fl, {
    className: _.endIcon,
    ownerState: A,
    children: g || /* @__PURE__ */ ce(oo, {
      className: _.loadingIconPlaceholder,
      ownerState: A
    })
  }), te = o || "", ue = typeof O == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ ce("span", {
      className: _.loadingWrapper,
      style: {
        display: "contents"
      },
      children: O && /* @__PURE__ */ ce(Ll, {
        className: _.loadingIndicator,
        ownerState: A,
        children: P
      })
    })
  ) : null;
  return /* @__PURE__ */ Dr(Dl, {
    ownerState: A,
    className: me(n.className, _.root, d, te),
    component: f,
    disabled: p || O,
    focusRipple: !S,
    focusVisibleClassName: me(_.focusVisible, u),
    ref: r,
    type: $,
    id: O ? c : x,
    ...Y,
    classes: _,
    children: [U, C !== "end" && ue, s, C === "end" && ue, ne]
  });
});
process.env.NODE_ENV !== "production" && (si.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: m.oneOfType([m.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), m.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: m.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: m.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: m.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: m.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: m.bool,
  /**
   * Element placed after the children.
   */
  endIcon: m.node,
  /**
   * @ignore
   */
  focusVisibleClassName: m.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: m.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: m.string,
  /**
   * @ignore
   */
  id: m.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: m.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: m.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: m.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: m.oneOfType([m.oneOf(["small", "medium", "large"]), m.string]),
  /**
   * Element placed before the children.
   */
  startIcon: m.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * @ignore
   */
  type: m.oneOfType([m.oneOf(["button", "reset", "submit"]), m.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: m.oneOfType([m.oneOf(["contained", "outlined", "text"]), m.string])
});
const ci = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Yt = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), cn = Object.freeze({
  ...ci,
  ...Yt
}), _r = Object.freeze({
  ...cn,
  body: "",
  hidden: !1
});
function zl(e, t) {
  const r = {};
  !e.hFlip != !t.hFlip && (r.hFlip = !0), !e.vFlip != !t.vFlip && (r.vFlip = !0);
  const n = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return n && (r.rotate = n), r;
}
function io(e, t) {
  const r = zl(e, t);
  for (const n in _r)
    n in Yt ? n in e && !(n in r) && (r[n] = Yt[n]) : n in t ? r[n] = t[n] : n in e && (r[n] = e[n]);
  return r;
}
function Vl(e, t) {
  const r = e.icons, n = e.aliases || /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  function i(a) {
    if (r[a])
      return o[a] = [];
    if (!(a in o)) {
      o[a] = null;
      const s = n[a] && n[a].parent, l = s && i(s);
      l && (o[a] = [s].concat(l));
    }
    return o[a];
  }
  return Object.keys(r).concat(Object.keys(n)).forEach(i), o;
}
function Wl(e, t, r) {
  const n = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let i = {};
  function a(s) {
    i = io(
      n[s] || o[s],
      i
    );
  }
  return a(t), r.forEach(a), io(e, i);
}
function li(e, t) {
  const r = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return r;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    t(o, null), r.push(o);
  });
  const n = Vl(e);
  for (const o in n) {
    const i = n[o];
    i && (t(o, Wl(e, o, i)), r.push(o));
  }
  return r;
}
const Ul = {
  provider: "",
  aliases: {},
  not_found: {},
  ...ci
};
function Sr(e, t) {
  for (const r in t)
    if (r in e && typeof e[r] != typeof t[r])
      return !1;
  return !0;
}
function ui(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Sr(e, Ul))
    return null;
  const r = t.icons;
  for (const o in r) {
    const i = r[o];
    if (
      // Name cannot be empty
      !o || // Must have body
      typeof i.body != "string" || // Check other props
      !Sr(
        i,
        _r
      )
    )
      return null;
  }
  const n = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const o in n) {
    const i = n[o], a = i.parent;
    if (
      // Name cannot be empty
      !o || // Parent must be set and point to existing icon
      typeof a != "string" || !r[a] && !n[a] || // Check other props
      !Sr(
        i,
        _r
      )
    )
      return null;
  }
  return t;
}
const fi = /^[a-z0-9]+(-[a-z0-9]+)*$/, sr = (e, t, r, n = "") => {
  const o = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (o.length < 2 || o.length > 3)
      return null;
    n = o.shift().slice(1);
  }
  if (o.length > 3 || !o.length)
    return null;
  if (o.length > 1) {
    const s = o.pop(), l = o.pop(), f = {
      // Allow provider without '@': "provider:prefix:name"
      provider: o.length > 0 ? o[0] : n,
      prefix: l,
      name: s
    };
    return t && !Dt(f) ? null : f;
  }
  const i = o[0], a = i.split("-");
  if (a.length > 1) {
    const s = {
      provider: n,
      prefix: a.shift(),
      name: a.join("-")
    };
    return t && !Dt(s) ? null : s;
  }
  if (r && n === "") {
    const s = {
      provider: n,
      prefix: "",
      name: i
    };
    return t && !Dt(s, r) ? null : s;
  }
  return null;
}, Dt = (e, t) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e.prefix === "" || e.prefix) && e.name) : !1, ao = /* @__PURE__ */ Object.create(null);
function Yl(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function Qe(e, t) {
  const r = ao[e] || (ao[e] = /* @__PURE__ */ Object.create(null));
  return r[t] || (r[t] = Yl(e, t));
}
function di(e, t) {
  return ui(t) ? li(t, (r, n) => {
    n ? e.icons[r] = n : e.missing.add(r);
  }) : [];
}
function ql(e, t, r) {
  try {
    if (typeof r.body == "string")
      return e.icons[t] = { ...r }, !0;
  } catch {
  }
  return !1;
}
let ht = !1;
function pi(e) {
  return typeof e == "boolean" && (ht = e), ht;
}
function so(e) {
  const t = typeof e == "string" ? sr(e, !0, ht) : e;
  if (t) {
    const r = Qe(t.provider, t.prefix), n = t.name;
    return r.icons[n] || (r.missing.has(n) ? null : void 0);
  }
}
function Gl(e, t) {
  const r = sr(e, !0, ht);
  if (!r)
    return !1;
  const n = Qe(r.provider, r.prefix);
  return t ? ql(n, r.name, t) : (n.missing.add(r.name), !0);
}
function Hl(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), ht && !t && !e.prefix) {
    let o = !1;
    return ui(e) && (e.prefix = "", li(e, (i, a) => {
      Gl(i, a) && (o = !0);
    })), o;
  }
  const r = e.prefix;
  if (!Dt({
    prefix: r,
    name: "a"
  }))
    return !1;
  const n = Qe(t, r);
  return !!di(n, e);
}
const hi = Object.freeze({
  width: null,
  height: null
}), mi = Object.freeze({
  // Dimensions
  ...hi,
  // Transformations
  ...Yt
}), Kl = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Xl = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function co(e, t, r) {
  if (t === 1)
    return e;
  if (r = r || 100, typeof e == "number")
    return Math.ceil(e * t * r) / r;
  if (typeof e != "string")
    return e;
  const n = e.split(Kl);
  if (n === null || !n.length)
    return e;
  const o = [];
  let i = n.shift(), a = Xl.test(i);
  for (; ; ) {
    if (a) {
      const s = parseFloat(i);
      isNaN(s) ? o.push(i) : o.push(Math.ceil(s * t * r) / r);
    } else
      o.push(i);
    if (i = n.shift(), i === void 0)
      return o.join("");
    a = !a;
  }
}
function Ql(e, t = "defs") {
  let r = "";
  const n = e.indexOf("<" + t);
  for (; n >= 0; ) {
    const o = e.indexOf(">", n), i = e.indexOf("</" + t);
    if (o === -1 || i === -1)
      break;
    const a = e.indexOf(">", i);
    if (a === -1)
      break;
    r += e.slice(o + 1, i).trim(), e = e.slice(0, n).trim() + e.slice(a + 1);
  }
  return {
    defs: r,
    content: e
  };
}
function Jl(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function Zl(e, t, r) {
  const n = Ql(e);
  return Jl(n.defs, t + n.content + r);
}
const eu = (e) => e === "unset" || e === "undefined" || e === "none";
function tu(e, t) {
  const r = {
    ...cn,
    ...e
  }, n = {
    ...mi,
    ...t
  }, o = {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height
  };
  let i = r.body;
  [r, n].forEach((u) => {
    const y = [], x = u.hFlip, O = u.vFlip;
    let w = u.rotate;
    x ? O ? w += 2 : (y.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), y.push("scale(-1 1)"), o.top = o.left = 0) : O && (y.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), y.push("scale(1 -1)"), o.top = o.left = 0);
    let C;
    switch (w < 0 && (w -= Math.floor(w / 4) * 4), w = w % 4, w) {
      case 1:
        C = o.height / 2 + o.top, y.unshift(
          "rotate(90 " + C.toString() + " " + C.toString() + ")"
        );
        break;
      case 2:
        y.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        C = o.width / 2 + o.left, y.unshift(
          "rotate(-90 " + C.toString() + " " + C.toString() + ")"
        );
        break;
    }
    w % 2 === 1 && (o.left !== o.top && (C = o.left, o.left = o.top, o.top = C), o.width !== o.height && (C = o.width, o.width = o.height, o.height = C)), y.length && (i = Zl(
      i,
      '<g transform="' + y.join(" ") + '">',
      "</g>"
    ));
  });
  const a = n.width, s = n.height, l = o.width, f = o.height;
  let d, p;
  a === null ? (p = s === null ? "1em" : s === "auto" ? f : s, d = co(p, l / f)) : (d = a === "auto" ? l : a, p = s === null ? co(d, f / l) : s === "auto" ? f : s);
  const h = {}, S = (u, y) => {
    eu(y) || (h[u] = y.toString());
  };
  S("width", d), S("height", p);
  const g = [o.left, o.top, l, f];
  return h.viewBox = g.join(" "), {
    attributes: h,
    viewBox: g,
    body: i
  };
}
const ru = /\sid="(\S+)"/g, nu = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let ou = 0;
function iu(e, t = nu) {
  const r = [];
  let n;
  for (; n = ru.exec(e); )
    r.push(n[1]);
  if (!r.length)
    return e;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return r.forEach((i) => {
    const a = typeof t == "function" ? t(i) : t + (ou++).toString(), s = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + s + ')([")]|\\.[a-z])', "g"),
      "$1" + a + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const Mr = /* @__PURE__ */ Object.create(null);
function au(e, t) {
  Mr[e] = t;
}
function Nr(e) {
  return Mr[e] || Mr[""];
}
function ln(e) {
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
const un = /* @__PURE__ */ Object.create(null), nt = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], jt = [];
for (; nt.length > 0; )
  nt.length === 1 || Math.random() > 0.5 ? jt.push(nt.shift()) : jt.push(nt.pop());
un[""] = ln({
  resources: ["https://api.iconify.design"].concat(jt)
});
function su(e, t) {
  const r = ln(t);
  return r === null ? !1 : (un[e] = r, !0);
}
function fn(e) {
  return un[e];
}
const cu = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let lo = cu();
function lu(e, t) {
  const r = fn(e);
  if (!r)
    return 0;
  let n;
  if (!r.maxURL)
    n = 0;
  else {
    let o = 0;
    r.resources.forEach((a) => {
      o = Math.max(o, a.length);
    });
    const i = t + ".json?icons=";
    n = r.maxURL - o - r.path.length - i.length;
  }
  return n;
}
function uu(e) {
  return e === 404;
}
const fu = (e, t, r) => {
  const n = [], o = lu(e, t), i = "icons";
  let a = {
    type: i,
    provider: e,
    prefix: t,
    icons: []
  }, s = 0;
  return r.forEach((l, f) => {
    s += l.length + 1, s >= o && f > 0 && (n.push(a), a = {
      type: i,
      provider: e,
      prefix: t,
      icons: []
    }, s = l.length), a.icons.push(l);
  }), n.push(a), n;
};
function du(e) {
  if (typeof e == "string") {
    const t = fn(e);
    if (t)
      return t.path;
  }
  return "/";
}
const pu = (e, t, r) => {
  if (!lo) {
    r("abort", 424);
    return;
  }
  let n = du(t.provider);
  switch (t.type) {
    case "icons": {
      const i = t.prefix, s = t.icons.join(","), l = new URLSearchParams({
        icons: s
      });
      n += i + ".json?" + l.toString();
      break;
    }
    case "custom": {
      const i = t.uri;
      n += i.slice(0, 1) === "/" ? i.slice(1) : i;
      break;
    }
    default:
      r("abort", 400);
      return;
  }
  let o = 503;
  lo(e + n).then((i) => {
    const a = i.status;
    if (a !== 200) {
      setTimeout(() => {
        r(uu(a) ? "abort" : "next", a);
      });
      return;
    }
    return o = 501, i.json();
  }).then((i) => {
    if (typeof i != "object" || i === null) {
      setTimeout(() => {
        i === 404 ? r("abort", i) : r("next", o);
      });
      return;
    }
    setTimeout(() => {
      r("success", i);
    });
  }).catch(() => {
    r("next", o);
  });
}, hu = {
  prepare: fu,
  send: pu
};
function mu(e) {
  const t = {
    loaded: [],
    missing: [],
    pending: []
  }, r = /* @__PURE__ */ Object.create(null);
  e.sort((o, i) => o.provider !== i.provider ? o.provider.localeCompare(i.provider) : o.prefix !== i.prefix ? o.prefix.localeCompare(i.prefix) : o.name.localeCompare(i.name));
  let n = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((o) => {
    if (n.name === o.name && n.prefix === o.prefix && n.provider === o.provider)
      return;
    n = o;
    const i = o.provider, a = o.prefix, s = o.name, l = r[i] || (r[i] = /* @__PURE__ */ Object.create(null)), f = l[a] || (l[a] = Qe(i, a));
    let d;
    s in f.icons ? d = t.loaded : a === "" || f.missing.has(s) ? d = t.missing : d = t.pending;
    const p = {
      provider: i,
      prefix: a,
      name: s
    };
    d.push(p);
  }), t;
}
function gi(e, t) {
  e.forEach((r) => {
    const n = r.loaderCallbacks;
    n && (r.loaderCallbacks = n.filter((o) => o.id !== t));
  });
}
function gu(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let r = !1;
    const n = e.provider, o = e.prefix;
    t.forEach((i) => {
      const a = i.icons, s = a.pending.length;
      a.pending = a.pending.filter((l) => {
        if (l.prefix !== o)
          return !0;
        const f = l.name;
        if (e.icons[f])
          a.loaded.push({
            provider: n,
            prefix: o,
            name: f
          });
        else if (e.missing.has(f))
          a.missing.push({
            provider: n,
            prefix: o,
            name: f
          });
        else
          return r = !0, !0;
        return !1;
      }), a.pending.length !== s && (r || gi([e], i.id), i.callback(
        a.loaded.slice(0),
        a.missing.slice(0),
        a.pending.slice(0),
        i.abort
      ));
    });
  }));
}
let yu = 0;
function bu(e, t, r) {
  const n = yu++, o = gi.bind(null, r, n);
  if (!t.pending.length)
    return o;
  const i = {
    id: n,
    icons: t,
    callback: e,
    abort: o
  };
  return r.forEach((a) => {
    (a.loaderCallbacks || (a.loaderCallbacks = [])).push(i);
  }), o;
}
function vu(e, t = !0, r = !1) {
  const n = [];
  return e.forEach((o) => {
    const i = typeof o == "string" ? sr(o, t, r) : o;
    i && n.push(i);
  }), n;
}
var Su = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function xu(e, t, r, n) {
  const o = e.resources.length, i = e.random ? Math.floor(Math.random() * o) : e.index;
  let a;
  if (e.random) {
    let T = e.resources.slice(0);
    for (a = []; T.length > 1; ) {
      const $ = Math.floor(Math.random() * T.length);
      a.push(T[$]), T = T.slice(0, $).concat(T.slice($ + 1));
    }
    a = a.concat(T);
  } else
    a = e.resources.slice(i).concat(e.resources.slice(0, i));
  const s = Date.now();
  let l = "pending", f = 0, d, p = null, h = [], S = [];
  typeof n == "function" && S.push(n);
  function g() {
    p && (clearTimeout(p), p = null);
  }
  function u() {
    l === "pending" && (l = "aborted"), g(), h.forEach((T) => {
      T.status === "pending" && (T.status = "aborted");
    }), h = [];
  }
  function y(T, $) {
    $ && (S = []), typeof T == "function" && S.push(T);
  }
  function x() {
    return {
      startTime: s,
      payload: t,
      status: l,
      queriesSent: f,
      queriesPending: h.length,
      subscribe: y,
      abort: u
    };
  }
  function O() {
    l = "failed", S.forEach((T) => {
      T(void 0, d);
    });
  }
  function w() {
    h.forEach((T) => {
      T.status === "pending" && (T.status = "aborted");
    }), h = [];
  }
  function C(T, $, L) {
    const Y = $ !== "success";
    switch (h = h.filter((c) => c !== T), l) {
      case "pending":
        break;
      case "failed":
        if (Y || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if ($ === "abort") {
      d = L, O();
      return;
    }
    if (Y) {
      d = L, h.length || (a.length ? b() : O());
      return;
    }
    if (g(), w(), !e.random) {
      const c = e.resources.indexOf(T.resource);
      c !== -1 && c !== e.index && (e.index = c);
    }
    l = "completed", S.forEach((c) => {
      c(L);
    });
  }
  function b() {
    if (l !== "pending")
      return;
    g();
    const T = a.shift();
    if (T === void 0) {
      if (h.length) {
        p = setTimeout(() => {
          g(), l === "pending" && (w(), O());
        }, e.timeout);
        return;
      }
      O();
      return;
    }
    const $ = {
      status: "pending",
      resource: T,
      callback: (L, Y) => {
        C($, L, Y);
      }
    };
    h.push($), f++, p = setTimeout(b, e.rotate), r(T, t, $.callback);
  }
  return setTimeout(b), x;
}
function yi(e) {
  const t = {
    ...Su,
    ...e
  };
  let r = [];
  function n() {
    r = r.filter((s) => s().status === "pending");
  }
  function o(s, l, f) {
    const d = xu(
      t,
      s,
      l,
      (p, h) => {
        n(), f && f(p, h);
      }
    );
    return r.push(d), d;
  }
  function i(s) {
    return r.find((l) => s(l)) || null;
  }
  return {
    query: o,
    find: i,
    setIndex: (s) => {
      t.index = s;
    },
    getIndex: () => t.index,
    cleanup: n
  };
}
function uo() {
}
const xr = /* @__PURE__ */ Object.create(null);
function Cu(e) {
  if (!xr[e]) {
    const t = fn(e);
    if (!t)
      return;
    const r = yi(t), n = {
      config: t,
      redundancy: r
    };
    xr[e] = n;
  }
  return xr[e];
}
function Tu(e, t, r) {
  let n, o;
  if (typeof e == "string") {
    const i = Nr(e);
    if (!i)
      return r(void 0, 424), uo;
    o = i.send;
    const a = Cu(e);
    a && (n = a.redundancy);
  } else {
    const i = ln(e);
    if (i) {
      n = yi(i);
      const a = e.resources ? e.resources[0] : "", s = Nr(a);
      s && (o = s.send);
    }
  }
  return !n || !o ? (r(void 0, 424), uo) : n.query(t, o, r)().abort;
}
function fo() {
}
function wu(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, gu(e);
  }));
}
function Eu(e) {
  const t = [], r = [];
  return e.forEach((n) => {
    (n.match(fi) ? t : r).push(n);
  }), {
    valid: t,
    invalid: r
  };
}
function ot(e, t, r) {
  function n() {
    const o = e.pendingIcons;
    t.forEach((i) => {
      o && o.delete(i), e.icons[i] || e.missing.add(i);
    });
  }
  if (r && typeof r == "object")
    try {
      if (!di(e, r).length) {
        n();
        return;
      }
    } catch (o) {
      console.error(o);
    }
  n(), wu(e);
}
function po(e, t) {
  e instanceof Promise ? e.then((r) => {
    t(r);
  }).catch(() => {
    t(null);
  }) : t(e);
}
function Pu(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: r, prefix: n } = e, o = e.iconsToLoad;
    if (delete e.iconsToLoad, !o || !o.length)
      return;
    const i = e.loadIcon;
    if (e.loadIcons && (o.length > 1 || !i)) {
      po(
        e.loadIcons(o, n, r),
        (d) => {
          ot(e, o, d);
        }
      );
      return;
    }
    if (i) {
      o.forEach((d) => {
        const p = i(d, n, r);
        po(p, (h) => {
          const S = h ? {
            prefix: n,
            icons: {
              [d]: h
            }
          } : null;
          ot(e, [d], S);
        });
      });
      return;
    }
    const { valid: a, invalid: s } = Eu(o);
    if (s.length && ot(e, s, null), !a.length)
      return;
    const l = n.match(fi) ? Nr(r) : null;
    if (!l) {
      ot(e, a, null);
      return;
    }
    l.prepare(r, n, a).forEach((d) => {
      Tu(r, d, (p) => {
        ot(e, d.icons, p);
      });
    });
  }));
}
const Ou = (e, t) => {
  const r = vu(e, !0, pi()), n = mu(r);
  if (!n.pending.length) {
    let l = !0;
    return t && setTimeout(() => {
      l && t(
        n.loaded,
        n.missing,
        n.pending,
        fo
      );
    }), () => {
      l = !1;
    };
  }
  const o = /* @__PURE__ */ Object.create(null), i = [];
  let a, s;
  return n.pending.forEach((l) => {
    const { provider: f, prefix: d } = l;
    if (d === s && f === a)
      return;
    a = f, s = d, i.push(Qe(f, d));
    const p = o[f] || (o[f] = /* @__PURE__ */ Object.create(null));
    p[d] || (p[d] = []);
  }), n.pending.forEach((l) => {
    const { provider: f, prefix: d, name: p } = l, h = Qe(f, d), S = h.pendingIcons || (h.pendingIcons = /* @__PURE__ */ new Set());
    S.has(p) || (S.add(p), o[f][d].push(p));
  }), i.forEach((l) => {
    const f = o[l.provider][l.prefix];
    f.length && Pu(l, f);
  }), t ? bu(t, n, i) : fo;
};
function $u(e, t) {
  const r = {
    ...e
  };
  for (const n in t) {
    const o = t[n], i = typeof o;
    n in hi ? (o === null || o && (i === "string" || i === "number")) && (r[n] = o) : i === typeof r[n] && (r[n] = n === "rotate" ? o % 4 : o);
  }
  return r;
}
const Ru = /[\s,]+/;
function ku(e, t) {
  t.split(Ru).forEach((r) => {
    switch (r.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function Iu(e, t = 0) {
  const r = e.replace(/^-?[0-9.]*/, "");
  function n(o) {
    for (; o < 0; )
      o += 4;
    return o % 4;
  }
  if (r === "") {
    const o = parseInt(e);
    return isNaN(o) ? 0 : n(o);
  } else if (r !== e) {
    let o = 0;
    switch (r) {
      case "%":
        o = 25;
        break;
      case "deg":
        o = 90;
    }
    if (o) {
      let i = parseFloat(e.slice(0, e.length - r.length));
      return isNaN(i) ? 0 : (i = i / o, i % 1 === 0 ? n(i) : 0);
    }
  }
  return t;
}
function Au(e, t) {
  let r = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const n in t)
    r += " " + n + '="' + t[n] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e + "</svg>";
}
function _u(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Mu(e) {
  return "data:image/svg+xml," + _u(e);
}
function Nu(e) {
  return 'url("' + Mu(e) + '")';
}
let lt;
function Bu() {
  try {
    lt = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (e) => e
    });
  } catch {
    lt = null;
  }
}
function Du(e) {
  return lt === void 0 && Bu(), lt ? lt.createHTML(e) : e;
}
const bi = {
  ...mi,
  inline: !1
}, ju = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Fu = {
  display: "inline-block"
}, Br = {
  backgroundColor: "currentColor"
}, vi = {
  backgroundColor: "transparent"
}, ho = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, mo = {
  WebkitMask: Br,
  mask: Br,
  background: vi
};
for (const e in mo) {
  const t = mo[e];
  for (const r in ho)
    t[e + r] = ho[r];
}
const Lu = {
  ...bi,
  inline: !0
};
function go(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const zu = (e, t, r) => {
  const n = t.inline ? Lu : bi, o = $u(n, t), i = t.mode || "svg", a = {}, s = t.style || {}, l = {
    ...i === "svg" ? ju : {}
  };
  if (r) {
    const y = sr(r, !1, !0);
    if (y) {
      const x = ["iconify"], O = [
        "provider",
        "prefix"
      ];
      for (const w of O)
        y[w] && x.push("iconify--" + y[w]);
      l.className = x.join(" ");
    }
  }
  for (let y in t) {
    const x = t[y];
    if (x !== void 0)
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
          l.ref = x;
          break;
        // Merge class names
        case "className":
          l[y] = (l[y] ? l[y] + " " : "") + x;
          break;
        // Boolean attributes
        case "inline":
        case "hFlip":
        case "vFlip":
          o[y] = x === !0 || x === "true" || x === 1;
          break;
        // Flip as string: 'horizontal,vertical'
        case "flip":
          typeof x == "string" && ku(o, x);
          break;
        // Color: copy to style
        case "color":
          a.color = x;
          break;
        // Rotation as string
        case "rotate":
          typeof x == "string" ? o[y] = Iu(x) : typeof x == "number" && (o[y] = x);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          x !== !0 && x !== "true" && delete l["aria-hidden"];
          break;
        // Copy missing property if it does not exist in customisations
        default:
          n[y] === void 0 && (l[y] = x);
      }
  }
  const f = tu(e, o), d = f.attributes;
  if (o.inline && (a.verticalAlign = "-0.125em"), i === "svg") {
    l.style = {
      ...a,
      ...s
    }, Object.assign(l, d);
    let y = 0, x = t.id;
    return typeof x == "string" && (x = x.replace(/-/g, "_")), l.dangerouslySetInnerHTML = {
      __html: Du(iu(f.body, x ? () => x + "ID" + y++ : "iconifyReact"))
    }, Cr("svg", l);
  }
  const { body: p, width: h, height: S } = e, g = i === "mask" || (i === "bg" ? !1 : p.indexOf("currentColor") !== -1), u = Au(p, {
    ...d,
    width: h + "",
    height: S + ""
  });
  return l.style = {
    ...a,
    "--svg": Nu(u),
    width: go(d.width),
    height: go(d.height),
    ...Fu,
    ...g ? Br : vi,
    ...s
  }, Cr("span", l);
};
pi(!0);
au("", hu);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, r = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((n) => {
      try {
        // Check if item is an object and not null/array
        (typeof n != "object" || n === null || n instanceof Array || // Check for 'icons' and 'prefix'
        typeof n.icons != "object" || typeof n.prefix != "string" || // Add icon set
        !Hl(n)) && console.error(r);
      } catch {
        console.error(r);
      }
    });
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders;
    if (typeof t == "object" && t !== null)
      for (let r in t) {
        const n = "IconifyProviders[" + r + "] is invalid.";
        try {
          const o = t[r];
          if (typeof o != "object" || !o || o.resources === void 0)
            continue;
          su(r, o) || console.error(n);
        } catch {
          console.error(n);
        }
      }
  }
}
function Si(e) {
  const [t, r] = cr(!!e.ssr), [n, o] = cr({});
  function i(S) {
    if (S) {
      const g = e.icon;
      if (typeof g == "object")
        return {
          name: "",
          data: g
        };
      const u = so(g);
      if (u)
        return {
          name: g,
          data: u
        };
    }
    return {
      name: ""
    };
  }
  const [a, s] = cr(i(!!e.ssr));
  function l() {
    const S = n.callback;
    S && (S(), o({}));
  }
  function f(S) {
    if (JSON.stringify(a) !== JSON.stringify(S))
      return l(), s(S), !0;
  }
  function d() {
    var S;
    const g = e.icon;
    if (typeof g == "object") {
      f({
        name: "",
        data: g
      });
      return;
    }
    const u = so(g);
    if (f({
      name: g,
      data: u
    }))
      if (u === void 0) {
        const y = Ou([g], d);
        o({
          callback: y
        });
      } else u && ((S = e.onLoad) === null || S === void 0 || S.call(e, g));
  }
  pn(() => (r(!0), l), []), pn(() => {
    t && d();
  }, [e.icon, t]);
  const { name: p, data: h } = a;
  return h ? zu({
    ...cn,
    ...h
  }, e, p) : e.children ? e.children : e.fallback ? e.fallback : Cr("span", {});
}
const Vu = jr((e, t) => Si({
  ...e,
  _ref: t
}));
jr((e, t) => Si({
  inline: !0,
  ...e,
  _ref: t
}));
const Wu = gt("MuiBox", ["root"]), Uu = Xo(), xi = cc({
  themeId: Qo,
  defaultTheme: Uu,
  defaultClassName: Wu.root,
  generateClassName: wo.generate
});
process.env.NODE_ENV !== "production" && (xi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: m.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: m.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object])
});
const Ci = Fr(({ ref: e, icon: t, width: r = 20, sx: n, ...o }) => /* @__PURE__ */ ce(
  xi,
  {
    ssr: !0,
    ref: e,
    component: Vu,
    icon: t,
    sx: {
      width: r,
      height: r,
      flexShrink: 0,
      display: "inline-flex",
      ...n
    },
    ...o
  }
));
Ci.displayName = "Button";
const Yu = Fr(
  ({
    sx: e,
    loading: t,
    disabled: r,
    isCircle: n,
    icon: o,
    iconWidth: i,
    iconPosition: a = void 0,
    text: s,
    onClick: l,
    ...f
  }) => {
    const d = Ii(() => o ? /* @__PURE__ */ ce(Ci, { icon: o, width: i }) : null, [o, i]);
    return /* @__PURE__ */ Dr(
      si,
      {
        variant: "contained",
        loading: t,
        disabled: r,
        startIcon: a === "start" && d,
        endIcon: a === "end" && d,
        sx: {
          minWidth: "unset",
          width: n ? "40px" : "unset",
          height: n ? "40px" : "unset",
          textTransform: "none",
          fontWeight: "bold",
          borderRadius: n ? "50%" : "8px",
          padding: n ? "6px" : "auto",
          cursor: t ? "wait !important" : r ? "not-allowed !important" : "pointer",
          pointerEvents: "auto !important",
          transition: "background-color 0s, background-image 0s",
          "& .MuiButton-startIcon": { svg: { color: "inherit" } },
          "& .MuiButton-endIcon": { svg: { color: "inherit" } },
          ...e
        },
        onClick: (p) => {
          p.stopPropagation(), l == null || l(p);
        },
        ...f,
        children: [
          !a && d,
          !n && s
        ]
      }
    );
  }
);
Yu.displayName = "Button";
const qu = Fr(({ children: e }) => /* @__PURE__ */ ce($i, { children: e }));
qu.displayName = "ThemeProvider";
export {
  Yu as Button,
  Ci as Icon,
  qu as ThemeProvider
};
