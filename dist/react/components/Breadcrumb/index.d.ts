export type { BreadcrumbItemProps, BreadcrumbProps, BreadcrumbSeparatorProps, PolymorphicBreadcrumbItemProps, } from "./Breadcrumb.types";
export declare const Breadcrumb: (<E extends React.ElementType = "nav">(props: import("./Breadcrumb.types").BreadcrumbProps<E> & {
    ref?: React.ForwardedRef<import("./Breadcrumb.types").BreadcrumbElement>;
}) => React.ReactElement | null) & {
    Item: <E extends React.ElementType = "a">(props: import("./Breadcrumb.types").PolymorphicBreadcrumbItemProps<E> & {
        ref?: React.ForwardedRef<import("./Breadcrumb.types").BreadcrumbItemElement>;
    }) => React.ReactElement | null;
    Separator: import("react").NamedExoticComponent<import("./Breadcrumb.types").BreadcrumbSeparatorProps & import("react").RefAttributes<HTMLSpanElement>>;
};
export default Breadcrumb;
//# sourceMappingURL=index.d.ts.map