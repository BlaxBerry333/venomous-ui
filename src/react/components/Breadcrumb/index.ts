import BreadcrumbRoot from "./Breadcrumb";
import BreadcrumbItem from "./BreadcrumbItem";
import BreadcrumbSeparator from "./BreadcrumbSeparator";

export type { BreadcrumbItemProps, BreadcrumbProps, BreadcrumbSeparatorProps } from "./Breadcrumb.types";

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Item: BreadcrumbItem,
  Separator: BreadcrumbSeparator,
});

export default Breadcrumb;
