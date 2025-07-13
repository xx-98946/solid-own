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
        ]);
    });
    return <Router>{routes.get()}</Router>;
}
