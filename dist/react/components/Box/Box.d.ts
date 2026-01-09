import React from "react";
import type { BoxElement, BoxProps, BoxRenderElement } from "./Box.types";
declare const Box: (<E extends BoxRenderElement = "div">(props: BoxProps & {
    as?: E;
} & React.RefAttributes<BoxElement>) => React.ReactElement | null) & {
    displayName?: string;
};
export default Box;
//# sourceMappingURL=Box.d.ts.map