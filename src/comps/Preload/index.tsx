import type { ISignal } from "@/utils";
import { Show, type JSX } from "solid-js";

export function Preload(props: { data: ISignal<any>; children: JSX.Element }) {
    const { data, children } = props;
    return (
        <Show when={data.get()} fallback="加载中...">
            {children}
        </Show>
    );
}
