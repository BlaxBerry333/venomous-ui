let f = 0;
function C(g) {
  let s = [];
  const c = /* @__PURE__ */ new Set();
  function a() {
    c.forEach((e) => e());
  }
  const o = {
    getToasts() {
      return s;
    },
    add(e) {
      const t = String(f++), n = {
        id: t,
        type: e.type ?? "info",
        title: e.title,
        description: e.description,
        duration: e.duration ?? 4e3,
        closable: e.closable ?? !0,
        createdAt: Date.now(),
        onClose: e.onClose,
        onAutoClose: e.onAutoClose
      };
      if (s = [...s, n], s.length > 5) {
        const r = s.slice(0, s.length - 5);
        s = s.slice(-5), r.forEach((i) => {
          var d;
          return (d = i.onAutoClose) == null ? void 0 : d.call(i);
        });
      }
      return a(), t;
    },
    dismiss(e) {
      var n;
      const t = s.find((r) => r.id === e);
      t && (s = s.filter((r) => r.id !== e), a(), (n = t.onClose) == null || n.call(t));
    },
    dismissAll() {
      const e = s;
      s = [], a(), e.forEach((t) => {
        var n;
        return (n = t.onClose) == null ? void 0 : n.call(t);
      });
    },
    subscribe(e) {
      return c.add(e), () => {
        c.delete(e);
      };
    }
  };
  function l(e, t) {
    return o.add({ title: e, ...t });
  }
  const u = Object.assign(l, {
    success: (e, t) => o.add({ title: e, type: "success", ...t }),
    error: (e, t) => o.add({ title: e, type: "error", ...t }),
    warning: (e, t) => o.add({ title: e, type: "warning", ...t }),
    info: (e, t) => o.add({ title: e, type: "info", ...t }),
    dismiss: (e) => {
      e ? o.dismiss(e) : o.dismissAll();
    }
  });
  return { store: o, toast: u };
}
const m = C(), x = m.store;
export {
  C as createToastStore,
  x as toastStore
};
