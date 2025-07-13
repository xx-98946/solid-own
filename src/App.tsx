import { Router } from "@solidjs/router";
import { useRoutes } from "@/utils";
import { onMount } from "solid-js";

export default function App() {
    const routes = useRoutes([
        {
            path: "/",
            component: "@/pages/Home.tsx",
        },
        {
            path: "*404",
            component: "@/pages/NotFound.tsx",
        },
    ]);

    onMount(() => {
        // routes.append({
        //     path: "/test",
        //     component: "@/pages/Test.tsx",
        // });
        routes.merge([
            {
                path: "/test",
                component: "@/pages/Test.tsx",
            },
        ]);
    });
    return <Router>{routes.get()}</Router>;
}
