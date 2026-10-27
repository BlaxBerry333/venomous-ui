import { useEffect, useLayoutEffect } from "react";
//#region internal/react/use-isomorphic-layout-effect.ts
/**
* SSR 安全的 layout effect：在浏览器端使用 useLayoutEffect（同步、无闪烁），
* 在服务端使用 useEffect（不会执行，避免 React SSR 警告 "useLayoutEffect does nothing on the server"）。
*/
var useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;
//#endregion
export { useIsomorphicLayoutEffect };

//# sourceMappingURL=use-isomorphic-layout-effect.js.map