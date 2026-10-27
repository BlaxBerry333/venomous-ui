import { HTMLAttributes } from 'react';
export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
    /** 'text' 一行文字高度 / 'rect' 矩形 / 'circle' 圆形；默认 'text' */
    shape?: 'text' | 'rect' | 'circle';
    /** 宽度，数字按 px；默认 text / rect 撑满，circle 与高度相同 */
    width?: number | string;
    /** 高度，数字按 px；默认 text 为一行字高，rect / circle 为 2.5rem */
    height?: number | string;
}
//# sourceMappingURL=Skeleton.type.d.ts.map