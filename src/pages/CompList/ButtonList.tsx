import { Button } from "@/comps";
import { useClass, useSignal } from "@/utils";
import { For } from "solid-js";

type ButtonKey = keyof typeof Button.styles;
export default function ButtonList() {
    const btnList = useSignal<Array<ButtonKey>>([
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
        "slate",
        "gray",
        "zinc",
        "neutral",
        "stone",
    ]);

    return (
        <div>
            <section class="p-2 m-2">
                <h3 class="text-xl mb-2">基础用法</h3>
                <For each={btnList.get()}>
                    {(key) => (
                        <Button
                            class={useClass(Button.styles[key], "m-2 min-w-30")}
                        >
                            {key}
                        </Button>
                    )}
                </For>
            </section>

            <section class="p-2 m-2">
                <h3 class="text-xl mb-2">基础禁用</h3>
                <For each={btnList.get()}>
                    {(key) => (
                        <Button
                            class={useClass(Button.styles[key], "m-2 min-w-30")}
                            disabled
                        >
                            {key}
                        </Button>
                    )}
                </For>
            </section>

            <section class="p-2 m-2">
                <h3 class="text-xl mb-2">圆角用法</h3>
                <For each={btnList.get()}>
                    {(key) => (
                        <Button
                            class={useClass(
                                Button.styles[key],
                                "m-2 rounded-full min-w-30",
                            )}
                        >
                            {key}
                        </Button>
                    )}
                </For>
            </section>

            <section class="p-2 m-2">
                <h3 class="text-xl mb-2">圆角禁用</h3>
                <For each={btnList.get()}>
                    {(key) => (
                        <Button
                            class={useClass(
                                Button.styles[key],
                                "m-2 rounded-full min-w-30",
                            )}
                            disabled
                        >
                            {key}
                        </Button>
                    )}
                </For>
            </section>

            <section class="p-2 m-2">
                <h3 class="text-xl mb-2">朴素按钮</h3>
                <For each={btnList.get()}>
                    {(key) => (
                        <Button
                            class={useClass(
                                Button.styles[(key + "_plain") as ButtonKey],
                                "m-2 min-w-30",
                            )}
                        >
                            {key}
                        </Button>
                    )}
                </For>
            </section>
            <section class="p-2 m-2">
                <h3 class="text-xl mb-2">朴素禁用</h3>
                <For each={btnList.get()}>
                    {(key) => (
                        <Button
                            class={useClass(
                                Button.styles[(key + "_plain") as ButtonKey],
                                "m-2 min-w-30",
                            )}
                            disabled
                        >
                            {key}
                        </Button>
                    )}
                </For>
            </section>
            <section class="p-2 m-2">
                <h3 class="text-xl mb-2">文字按钮</h3>
                <For each={btnList.get()}>
                    {(key) => (
                        <Button
                            class={useClass(
                                Button.styles[(key + "_link") as ButtonKey],
                                "m-2 hover:underline hover:underline-offset-4",
                            )}
                        >
                            {key}
                        </Button>
                    )}
                </For>
            </section>
            <section class="p-2 m-2">
                <h3 class="text-xl mb-2">文字禁用</h3>
                <For each={btnList.get()}>
                    {(key) => (
                        <Button
                            class={useClass(
                                Button.styles[(key + "_link") as ButtonKey],
                                "m-2 min-w-30",
                            )}
                            disabled
                        >
                            {key}
                        </Button>
                    )}
                </For>
            </section>

            <section class="p-2 m-2">
                <h3 class="text-xl mb-2">图标按钮</h3>

                <div class="flex items-center mt-3 mx-4 flex-wrap gap-10">
                    <For each={btnList.get()}>
                        {(key) => (
                            <Button class={useClass(Button.styles[key], "p-2")}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    class="size-4"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h3V8H9zm4 0h3V8h-2z"
                                    />
                                </svg>
                            </Button>
                        )}
                    </For>
                </div>
                <div class="flex items-center mt-12 mx-4 flex-wrap gap-10">
                    <For each={btnList.get()}>
                        {(key) => (
                            <Button
                                class={useClass(
                                    Button.styles[key],
                                    "size-8 rounded-full p-1",
                                )}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    class="size-6"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h3V8H9zm4 0h3V8h-2z"
                                    />
                                </svg>
                            </Button>
                        )}
                    </For>
                </div>
            </section>
        </div>
    );
}
