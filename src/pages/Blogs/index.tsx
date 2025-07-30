import { loadText } from "@/apis";
import { Language, Markdown, Prose } from "@/comps";
import { useEffect, usePreload, useSignal } from "@/utils";
import { useNavigate, useParams } from "@solidjs/router";
import { For, Show } from "solid-js";
export default function Blog() {
    const navigate = useNavigate();
    const blogList = useSignal([
        {
            name: "开发经验",
            path: "开发经验.md",
            desc: "人生在世数十载，能留下的不过是经验。从地心说到日心说，从牛顿力学到量子力学。",
            pubTime: "2025-07-18",
        },
        {
            name: "文件共享服务器",
            path: "文件共享服务器.md",
            desc: "该文件共享服务器是用于在局域网内共享文件，只要记住ip地址，就可以在局域网内共享服务。",
            pubTime: "2025-07-20",
        },
        {
            name: "git使用指南",
            path: "git使用指南.md",
            desc: "关于git常见命令的指南",
            pubTime: "2025-07-30",
        },
        {
            name: "信号量机制",
            path: "信号量机制.md",
            desc: "一些关于信号量机制的讲解",
            pubTime: "2025-07-30",
        },
    ]);

    function handleGoDetail(path: string) {
        navigate("/blogdetail/" + path);
    }

    return (
        <Prose>
            <section class="grid gap-4 grid-cols-1 py-4">
                <For each={blogList.get()}>
                    {(blog) => (
                        <div
                            onClick={() => handleGoDetail(blog.path)}
                            class="shadow-md p-2 pl-4 cursor-pointer overflow-hidden bg-gray-50 hover:bg-gray-100 duration-100 border-l-4 border-l-purple-400"
                        >
                            <div class="mt-1 mb-2 flex justify-between items-center">
                                <span class="text-black text-xl font-bold">
                                    {blog.name}
                                </span>
                                <div class="text-sm text-gray-500 mr-2">
                                    {blog.pubTime}
                                </div>
                            </div>
                            <div class="truncate pr-2" title={blog.desc}>
                                {blog.desc}
                            </div>
                        </div>
                    )}
                </For>
            </section>
        </Prose>
    );
}
