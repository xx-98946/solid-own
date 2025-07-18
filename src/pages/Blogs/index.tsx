import { loadText } from "@/apis";
import { Language, Markdown, Prose } from "@/comps";
import { useEffect, usePreload, useSignal } from "@/utils";
import { useNavigate, useParams } from "@solidjs/router";
import { For, Show } from "solid-js";
export default function Blog() {
    const navigate = useNavigate();
    const blogList = useSignal([
        {
            name: "个人经验",
            path: "经验.md",
            desc: "人生在世数十载，能留下的不过是经验。从地心说到日心说，从牛顿力学到量子力学。",
            pubTime: "2025-07-18",
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
                            class="shadow-md p-2 cursor-pointer overflow-hidden bg-gray-50 hover:bg-gray-100 duration-100"
                        >
                            <div class="my-3 flex justify-between items-center">
                                <span class="text-black text-xl font-bold">
                                    {blog.name}
                                </span>
                                <div class="text-sm text-gray-500">
                                    {blog.pubTime}
                                </div>
                            </div>
                            <div class="truncate pr-2">{blog.desc}</div>
                        </div>
                    )}
                </For>
            </section>
        </Prose>
    );
}
