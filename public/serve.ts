// main.ts
import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const pathname = url.pathname;

  // 1. 处理静态文件（自动支持 assets/ 等）
  const res = await serveDir(req, {
    fsRoot: "./dist", // 打包输出目录
    urlRoot: "",
    showDirListing: false,
    enableCors: true,
  });

  // 2. 如果找不到文件，回退到 index.html（支持前端路由）
  if (res.status === 404) {
    const index = await Deno.readFile("./dist/index.html");
    return new Response(index, {
      headers: {
        "content-type": "text/html",
      },
    });
  }

  return res;
});
