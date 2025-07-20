import { useRouteActive, useClass } from "@/utils";

export default function Home() {
    const isActive = useRouteActive("/");

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
                <a href="/test" class="text-blue-500 underline">
                    test
                </a>
                <a href="/complist" class="text-blue-500 underline">
                    组件库
                </a>
                <a href="/blogs" class="text-blue-500 underline">
                    博客
                </a>
            </nav>
        </div>
    );
}
