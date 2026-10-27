import { FC } from 'react';
export interface ThemeScriptProps {
    /** 跟 useTheme 同名参数，必须一致；默认 `['light', 'dark']` */
    themes?: readonly string[];
    /** 跟 useTheme 同名参数，必须一致；默认 'venomous-theme'，传 false 不读 storage */
    storageKey?: string | false;
    /** 跟 useTheme 同名参数，必须一致；默认 'system' */
    defaultTheme?: string;
    /** 跟 useTheme 同名参数，必须一致；默认 true */
    enableSystem?: boolean;
    /** CSP nonce（严格 Content-Security-Policy 环境下必传，跟服务端生成的 nonce 一致）*/
    nonce?: string;
}
export declare const ThemeScript: FC<ThemeScriptProps>;
//# sourceMappingURL=ThemeScript.d.ts.map