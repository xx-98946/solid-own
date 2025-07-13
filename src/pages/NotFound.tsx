import { useCurrentRoute } from "@/utils";
import { useNavigate } from "@solidjs/router";

import { onMount } from "solid-js";

export default function NotFound() {
    const navigate = useNavigate();

    onMount(() => {
        useCurrentRoute();
    });

    function goHome() {
        navigate("/");
    }
    return (
        <div class="text-center">
            <div class="text-blue-400 text-4xl mt-8">404错误：页面不存在</div>
            <button class="mt-4 cursor-pointer underline pb-1" onClick={goHome}>
                返回首页
            </button>
        </div>
    );
}
