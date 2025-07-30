import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import fs from "node:fs";

/**
 * 生成多多页面打包
 * @returns
 */
function multipleHtmlInputPlugin() {
    const htmlFiles = fs
        .readdirSync(__dirname)
        .filter((file) => file.endsWith(".html"));

    const input = Object.fromEntries(
        htmlFiles.map((name) => [
            name.replace(".html", ""),
            path.resolve(__dirname, name),
        ]),
    );
    return input;
}

export default defineConfig({
    plugins: [solid(), tailwindcss()],
    build: {
        rollupOptions: {
            input: multipleHtmlInputPlugin(),
        },
    },
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
