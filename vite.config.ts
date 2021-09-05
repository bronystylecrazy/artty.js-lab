import { defineConfig, UserConfig } from "vite";
import prefresh from '@prefresh/vite';
import ViteArtty from './scripts/index';
import path from 'path';

export default defineConfig({
    esbuild: {
        jsxInject: `import {h, $f, _} from '@artty'`,
        jsxFactory: 'h',
        jsxFragment: '$f',
    },
    plugins: [ViteArtty()],
    resolve: {
        alias: {
            '@artty': path.resolve(__dirname, './artty/old')
        }
    }
});