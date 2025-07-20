import { lazy } from "solid-js";
import { useSignal } from "./";
import { useCurrentMatches, type RouteDefinition } from "@solidjs/router";
const modules = import.meta.glob("@/pages/**/index.tsx");

class RouteError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "RouteError";
    }
}

export function pathToComponent(path: string) {
    const aliasPath = path.replace(/^@/, "/src") + "/index.tsx";
    const component = modules[aliasPath];
    if (component) {
        // @ts-ignore
        return lazy(component);
    }
    throw new RouteError(`"${path}" 路由文件不存在`);
}

type IRoute = Omit<RouteDefinition, "component"> & {
    component: string;
    [k: string]: unknown;
};

function toRoute(route: IRoute): RouteDefinition {
    const component = pathToComponent(route.component);
    return {
        ...route,
        component,
    };
}

export function useRoutes(initRoutes: IRoute[]) {
    const routes = useSignal(initRoutes.map(toRoute));

    /**
     * 合并新路由
     * @param newRoutes
     */
    function merge(newRoutes: IRoute[]) {
        routes.set((v) => [...v, ...newRoutes.map(toRoute)]);
    }

    function append(route: IRoute) {
        routes.set((v) => [...v, toRoute(route)]);
    }
    return {
        ...routes,
        append,
        merge,
    };
}

/**
 * 获取当前匹配的路由
 * @returns
 */
export function useCurrentRoute() {
    const matches = useCurrentMatches()();
    return matches.length ? matches[0] : { path: "" };
}

/**
 * 判断路径是否激活
 * @param path
 * @returns
 */
export function useRouteActive(path: string) {
    return useCurrentRoute().path == path;
}
