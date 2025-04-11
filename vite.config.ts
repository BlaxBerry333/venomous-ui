import path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: false,
      filename: '_BUNDLE_ANALYZER.html',
    }),
  ],

  resolve: {
    alias: {
      '@packages': path.resolve(__dirname, './packages'),
      '@stories': path.resolve(__dirname, './stories'),
    },
  },

  build: {
    lib: {
      name: 'venomous-ui',
      entry: path.resolve(__dirname, 'packages/index.ts'),
      fileName: 'index',
    },
    copyPublicDir: false,
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM',
          // "@emotion/react": "emotionReact",
          // "@emotion/styled": "emotionStyled",
          // "@mui/material": "MaterialUI",
        },
      },
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
});
