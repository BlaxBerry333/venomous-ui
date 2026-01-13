export type * from "./Flex";
export type * from "./Grid";
export declare const Space: {
    Flex: (<E extends import("./Flex").SpaceFlexRenderElement = "div">(props: import("./Flex").SpaceFlexProps & {
        as?: E;
    } & React.RefAttributes<import("./Flex").SpaceFlexElement>) => React.ReactElement | null) & {
        displayName?: string;
    };
    Grid: (<E extends import("./Grid").SpaceGridRenderElement = "div">(props: import("./Grid").SpaceGridProps & {
        as?: E;
    } & React.RefAttributes<import("./Grid").SpaceGridElement>) => React.ReactElement | null) & {
        displayName?: string;
    };
};
//# sourceMappingURL=index.d.ts.map