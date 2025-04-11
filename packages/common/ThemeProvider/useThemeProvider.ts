import { createTheme, type Theme as MuiTheme } from '@mui/material/styles';
import { useThemeMode, useThemePalette, type ThemePaletteType } from '@packages/helpers';
import { useEffect, useMemo } from 'react';

export default function useThemeProvider() {
  const { themeMode } = useThemeMode();
  const { themePalette } = useThemePalette();

  const theme = useMemo<MuiTheme>(() => {
    return createTheme({
      palette: {
        mode: themeMode,
        primary: {
          main: themePalette.main,
          dark: themePalette.dark,
          light: themePalette.light,
          contrastText: themePalette.contrastText,
        },
      },
    });
  }, [themeMode, themePalette]);

  useSetThemePaletteForScollbar(themePalette);

  return { theme };
}

function useSetThemePaletteForScollbar(themePalette: ThemePaletteType) {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
          /* 设置选中文本的样式 */
          ::selection {
            background-color: ${themePalette.opacity};                      /* 设置选中文本的背景色 */
            color: white;                                                   /* 设置选中文本的文字颜色 */
          }
    
          /* 设置滚动条的样式 */
          ::-webkit-scrollbar {
            width: 8px;                                                     /* 设置滚动条的宽度 */
            height: 8px;                                                    /* 设置滚动条的高度 */
          }
          ::-webkit-scrollbar-thumb {
            background-color: ${themePalette.main};                         /* 设置滚动条的颜色 */
            border-radius: 4px;                                             /* 设置滚动条的圆角 */
          }
          ::-webkit-scrollbar-thumb:hover {
            background-color: ${themePalette.dark};                         /* 悬停时加深颜色 */
          } 
          ::-webkit-scrollbar-track {
            background-color: rgba(0, 0, 0, 0.1);                         /* 滑轨颜色 */
            border-radius: 4px;                                             /* 圆角 */
            transition: opacity 0.5s ease-in-out;                           /* 滑轨过渡效果 */
          }
          /* Firefox 滚动条样式 */
          * {
            scrollbar-color: ${themePalette.main} rgba(0, 0, 0, 0.1);     /* 滑块 和 滑轨颜色 */
            scrollbar-width: medium;                                        /* 滚动条宽度 */
          }
          /* Firefox 滚动条的过渡效果 */
          *::-webkit-scrollbar {
            transition: opacity 0.5s ease-in-out;
          }
        `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [themePalette]);
}
