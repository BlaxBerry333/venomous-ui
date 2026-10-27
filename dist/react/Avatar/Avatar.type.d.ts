import { HTMLAttributes } from 'react';
export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
    /** 图片地址；缺省或加载失败时显示 name 的首字母 */
    src?: string;
    /** 人名：作为无障碍名称，并用于生成首字母 */
    name?: string;
    /** 尺寸，默认 'md' */
    size?: 'sm' | 'md' | 'lg';
}
//# sourceMappingURL=Avatar.type.d.ts.map