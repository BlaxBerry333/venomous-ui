import { CardProps, CardSectionProps, CardTitleProps } from './Card.type';
/** Card — 内容分组容器。纯展示组件，无 hooks，可在服务端组件中直接使用。 */
export declare const Card: import('react').ForwardRefExoticComponent<CardProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const CardHeader: import('react').ForwardRefExoticComponent<CardSectionProps & import('react').RefAttributes<HTMLDivElement>>;
/** 标题，渲染为 h3；页面需要其他标题层级时，自己写对应标签并加 `venomous--Card__title` 类 */
export declare const CardTitle: import('react').ForwardRefExoticComponent<CardTitleProps & import('react').RefAttributes<HTMLHeadingElement>>;
export declare const CardBody: import('react').ForwardRefExoticComponent<CardSectionProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const CardFooter: import('react').ForwardRefExoticComponent<CardSectionProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Card.d.ts.map