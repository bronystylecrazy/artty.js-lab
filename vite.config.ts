import { defineConfig, UserConfig } from "vite";
import prefresh from '@prefresh/vite';
import ViteArtty from './scripts/index';
export default defineConfig({
    esbuild: {
        jsxInject: `import {h, $f, _} from '../artty'`,
        jsxFactory: 'h',
        jsxFragment: 'f',
    },
    plugins: [ViteArtty()]
});