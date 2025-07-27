import { useRouteActive, useClass } from "@/utils";
import { For } from "solid-js";

export default function Home() {
    const isActive = useRouteActive("/");

    const pages = [
        {
            href: "/complist",
            label: "组件库",
        },
        {
            href: "/test",
            label: "测试页",
        },
        {
            href: "/blogs",
            label: "博客列表",
        },
        {
            href: "/Navigation",
            label: "网址导航",
        },
    ];

    return (
        <div class="p-2">
            <div
                class={useClass(
                    "text-4xl",
                    useRouteActive("/") && "text-blue-500",
                )}
            >
                Home
            </div>
            <div>active: {isActive ? "true" : "false"}</div>
            <nav class="flex gap-2 items-center">
                <For each={pages}>
                    {({ href, label }) => (
                        <a href={href} class="text-blue-500 underline">
                            {label}
                        </a>
                    )}
                </For>
            </nav>
        </div>
    );
}
