import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import libCss from 'vite-plugin-libcss';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.tsx"),
            name: "san-ui-lib",
            fileName: "index",
        },
        rollupOptions: {
            external: { 
                'react' : 'React',
                'react-dom' : 'ReactDOM',
                'react-scripts' : 'ReactScripts'
            }
        }
    },
    plugins: [
        libCss(),
        dts({ insertTypesEntry: true })
    ]
});