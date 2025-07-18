import { Router } from "@solidjs/router";
import { useRoutes } from "@/utils";
import { onMount } from "solid-js";

export default function App() {
    const routes = useRoutes([
        {
            path: "/",
            component: "@/pages/Home",
        },
        {
            path: "*404",
            component: "@/pages/NotFound",
        },
        {
            path: "/CompList",
            component: "@/pages/CompList",
        },
    ]);

    onMount(() => {
        // routes.append({
        //     path: "/test",
        //     component: "@/pages/Test.tsx",
        // });
        routes.merge([
            {
                path: "/Test",
                component: "@/pages/Test",
            },
            {
                name: "博客详情",
                path: "/BlogDetail/:id",
                component: "@/pages/BlogDetail",
            },
            {
                path: "/Blogs",
                component: "@/pages/Blogs",
            },
        ]);
    });
    return <Router>{routes.get()}</Router>;
}
