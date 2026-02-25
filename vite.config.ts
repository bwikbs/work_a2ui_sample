import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: [
      { find: /^@a2ui\/lit\/ui$/, replacement: path.resolve(__dirname, 'src/lib/a2ui-lit/0.8/ui/ui.ts') },
      { find: /^@a2ui\/lit$/, replacement: path.resolve(__dirname, 'src/lib/a2ui-lit/index.ts') },
      { find: /^@a2ui\/lit\/(.*)$/, replacement: path.resolve(__dirname, 'src/lib/a2ui-lit/0.8/$1') },
      { find: /^@a2ui\/web_core$/, replacement: path.resolve(__dirname, 'src/lib/a2ui-web-core/v0_8/index.ts') },
      { find: /^@a2ui\/web_core\/(.*)$/, replacement: path.resolve(__dirname, 'src/lib/a2ui-web-core/v0_8/$1') },
    ]
  },
  build: {
    target: 'esnext'
  }
});
