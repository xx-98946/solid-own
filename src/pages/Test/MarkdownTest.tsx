import { Markdown } from "@/comps";

export default function MarkdownTest() {
    const tempMd = `
# 学习一级标题
## 前端教程

\`solid\`在很多场景都非常好用，但是其本身接口设计并不符合我的需求，所以我进行了封装。

\`\`\`js
import { defineConfig } from "vite";
\`\`\`

第二段代码

\`\`\`js
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
                target: "https://my-json-server.typicode.com/typicode",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
});

\`\`\`

    
`;
    return <Markdown raw={tempMd}></Markdown>;
}
