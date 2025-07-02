import { defineConfig } from "vite";
import { resolve } from "node:path"

const env = process.env.NODE_ENV; // node.js 코드이다.


export default defineConfig({
    build: {
        outDir: 'docs'
    },
    server: {
        host:'localhost',
        port: 3000,
        cors:true,
    },
    css:{
        devSourcemap: true,
        modules: {
                                /* name : 파일명, local : 클래스명 */
            /* generateScopedName: "[name]__[local]___[hash:base64:5]" */
            // generateScopedName: "[hash:base64:6]"
            generateScopedName: env === 'development' ? "[hash:base64:2]" : "css-[local]-[hash:base64:6]"
        },
    },
    resolve: {
        alias: {'@': resolve(__dirname,'src') }
    }
})