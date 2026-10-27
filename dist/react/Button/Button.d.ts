import { ButtonProps } from './Button.type';
/**
 * Button — 基础按钮。
 *
 * 设计要点：
 * - 'use client'：内部给 <button> 挂了 onClick（loading 时拦截点击），服务端组件不能直接渲染带事件处理的元素。
 * - state 用 `data-venomous-loading`（运行时变化）；variant / size 用 className（永久属性）。
 * - 样式自动副作用：import 'Button.scss'，用户无需手动 import 组件 CSS。
 * - 默认 type='button' —— 避免在 <form> 内意外提交。
 * - loading 不用原生 disabled（切换瞬间会丢焦点），改用 aria-disabled + 在 click 上 preventDefault。
 *   键盘 Enter / Space 与表单隐式提交最终都派发 click，拦 click 一处即可，同时阻止 submit。
 */
export declare const Button: import('react').ForwardRefExoticComponent<ButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Button.d.ts.map