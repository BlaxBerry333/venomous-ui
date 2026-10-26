import { forwardRef } from 'react';
import { mergeClassName } from '@internal/style';
import '@packages/styles/components/Card.scss';
import type { CardProps, CardSectionProps, CardTitleProps } from './Card.type';

const BLOCK = 'venomous--Card';

/** Card — 内容分组容器。纯展示组件，无 hooks，可在服务端组件中直接使用。 */
export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = 'outlined', className, ...rest },
  ref,
) {
  return (
    <div {...rest} ref={ref} className={mergeClassName(BLOCK, `${BLOCK}--${variant}`, className)} />
  );
});

export const CardHeader = forwardRef<HTMLDivElement, CardSectionProps>(function CardHeader(
  { className, ...rest },
  ref,
) {
  return <div {...rest} ref={ref} className={mergeClassName(`${BLOCK}__header`, className)} />;
});

/** 标题，渲染为 h3；页面需要其他标题层级时，自己写对应标签并加 `venomous--Card__title` 类 */
export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(function CardTitle(
  { className, ...rest },
  ref,
) {
  return <h3 {...rest} ref={ref} className={mergeClassName(`${BLOCK}__title`, className)} />;
});

export const CardBody = forwardRef<HTMLDivElement, CardSectionProps>(function CardBody(
  { className, ...rest },
  ref,
) {
  return <div {...rest} ref={ref} className={mergeClassName(`${BLOCK}__body`, className)} />;
});

export const CardFooter = forwardRef<HTMLDivElement, CardSectionProps>(function CardFooter(
  { className, ...rest },
  ref,
) {
  return <div {...rest} ref={ref} className={mergeClassName(`${BLOCK}__footer`, className)} />;
});
