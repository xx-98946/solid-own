import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
    plugins: [solid(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    server: {
        host: "0.0.0.0",
        proxy: {
            "/api": {
                // target: "https://solid-own.deno.dev/",
                target: "https://solid-own-server-mf6acd8dhe5a.xx-98946.deno.net",
                changeOrigin: true,
                rewrite(path) {
                    return path.replace(/^\/api/, "");
                },
            },
        },
    },
});
