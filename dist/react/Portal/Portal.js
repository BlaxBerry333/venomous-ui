"use client";
import { Fragment, useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
import { createPortal } from "react-dom";
//#region packages/react/Portal/Portal.tsx
var Portal = ({ container, children }) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (container === null) return /* @__PURE__ */ jsx(Fragment, { children });
	if (!mounted) return null;
	return createPortal(children, resolveTarget(container));
};
function resolveTarget(container) {
	if (container instanceof HTMLElement) return container;
	if (typeof container === "function") {
		const el = container();
		return el instanceof HTMLElement ? el : document.body;
	}
	if (typeof container === "string") {
		const el = document.querySelector(container);
		return el instanceof HTMLElement ? el : document.body;
	}
	return document.body;
}
//#endregion
export { Portal };

//# sourceMappingURL=Portal.js.map