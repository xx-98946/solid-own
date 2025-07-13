import { useActive, useClass } from "@/utils";

export default function Home() {
    const isActive = useActive("/");

    return (
        <div class="p-2">
            <div
                class={useClass("text-4xl", useActive("/") && "text-blue-500")}
            >
                Home
            </div>
            <div>active: {isActive ? "true" : "false"}</div>
            <a href="/test" class="text-blue-500 underline">
                test
            </a>
        </div>
    );
}
