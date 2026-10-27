import { DEFAULT_STORAGE_KEY, DEFAULT_THEMES, THEME_ATTRIBUTE } from "./internal/style/theme.js";
import { jsx } from "react/jsx-runtime";
//#region packages/react/ThemeScript.tsx
var ThemeScript = ({ themes = DEFAULT_THEMES, storageKey = DEFAULT_STORAGE_KEY, defaultTheme = "system", enableSystem = true, nonce }) => {
	const k = JSON.stringify(storageKey);
	const v = JSON.stringify(themes);
	const d = JSON.stringify(defaultTheme);
	const a = JSON.stringify(THEME_ATTRIBUTE);
	const s = enableSystem ? "true" : "false";
	return /* @__PURE__ */ jsx("script", {
		nonce,
		dangerouslySetInnerHTML: { __html: `(function(){try{var t=null;if(${k}!==false){try{t=localStorage.getItem(${k})}catch(e){}}if(t===null||!(${v}.indexOf(t)>-1||(${s}&&t==='system')))t=${d};var r=t;if(t==='system'){r=${s}&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.setAttribute(${a},r)}catch(e){}})();` }
	});
};
//#endregion
export { ThemeScript };

//# sourceMappingURL=ThemeScript.js.map