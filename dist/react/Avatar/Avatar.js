"use client";
import { mergeClassName } from "../internal/style/classnames.js";
import { getInitials } from "../internal/style/initials.js";
import { forwardRef, useEffect, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
import "venomous-ui/styles/components/Avatar.css";
//#region packages/react/Avatar/Avatar.tsx
var BLOCK = "venomous--Avatar";
/**
* Avatar — 头像。图片缺省或加载失败时回退为名字首字母。
* 整体以 role="img" + name 作为无障碍名称，内部图片与首字母对读屏器隐藏，避免重复朗读；没有 name 时整体视为装饰。
*/
var Avatar = forwardRef(function Avatar({ src, name, size = "md", className, ...rest }, ref) {
	const [failedSrc, setFailedSrc] = useState(void 0);
	const imgRef = useRef(null);
	const showImage = src !== void 0 && src !== "" && failedSrc !== src;
	useEffect(() => {
		const img = imgRef.current;
		if (img && img.complete && img.naturalWidth === 0) setFailedSrc(src);
	}, [src]);
	return /* @__PURE__ */ jsx("span", {
		...name ? {
			role: "img",
			"aria-label": name
		} : { "aria-hidden": true },
		...rest,
		ref,
		className: mergeClassName(BLOCK, `${BLOCK}--size-${size}`, className),
		children: showImage ? /* @__PURE__ */ jsx("img", {
			ref: imgRef,
			src,
			alt: "",
			className: `${BLOCK}__image`,
			onError: () => setFailedSrc(src)
		}) : /* @__PURE__ */ jsx("span", {
			className: `${BLOCK}__initials`,
			"aria-hidden": "true",
			children: getInitials(name ?? "")
		})
	});
});
//#endregion
export { Avatar };

//# sourceMappingURL=Avatar.js.map