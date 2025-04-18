import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import { qrcode } from "vite-plugin-qrcode";
// import Terminal from 'vite-plugin-terminal'

export default defineConfig( {
    plugins: [
        mkcert(),
        qrcode(),
    // Terminal( {
    //     output: [ "console", "terminal" ],
    //     console: "terminal"
    // } )
    ],
} );
