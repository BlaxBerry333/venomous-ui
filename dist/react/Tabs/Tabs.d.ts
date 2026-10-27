import { TabListProps, TabPanelProps, TabsProps, TabTitleProps } from './Tabs.type';
/**
 * Tabs — ARIA tabs：方向键 / Home / End 切换，roving tabindex，可选手动激活。
 *
 * 结构显式书写（TabList 包 TabTitle，TabPanel 与之平级，用 value 配对），
 * 不靠扫描 children 的组件类型：在 Next.js 服务端组件里传入的子元素类型是客户端引用，扫描会失效。
 */
export declare const Tabs: import('react').ForwardRefExoticComponent<TabsProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const TabList: import('react').ForwardRefExoticComponent<TabListProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const TabTitle: import('react').ForwardRefExoticComponent<TabTitleProps & import('react').RefAttributes<HTMLButtonElement>>;
export declare const TabPanel: import('react').ForwardRefExoticComponent<TabPanelProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Tabs.d.ts.map