import "prismjs";
import Prism from "prismjs";
import { onMount, Show } from "solid-js";
import { useClass, usePreload, useSignal } from "@/utils";
const langs = import.meta.glob(
    "/node_modules/prismjs/components/prism-*.min.js",
);
import "prismjs/plugins/line-numbers/prism-line-numbers";

interface ILanguageProps {
    // 要处理的数据
    children: unknown;
    // 样式
    class?: string;
    // 高亮类型
    type: string;
    // 是否是块级
    isInline?: boolean;
}

function LanguageComp(props: ILanguageProps) {
    function toString() {
        const raw =
            typeof props.children == "string"
                ? props.children
                : `${JSON.stringify(props.children)}`;
        return raw;
    }
    const MdText = useSignal(() => {
        const raw = toString();
        return Prism.highlight(raw, Prism.languages[props.type], props.type);
    });

    async function loadTheme() {
        await import("./style.css");
    }

    // 必须调用一次，否则行号会不显示
    onMount(() => {
        Prism.highlightAll();
    });

    const copyStatus = useSignal(false);

    async function handleCopy() {
        await navigator.clipboard.writeText(toString());
        copyStatus.set(true);
        setTimeout(() => {
            copyStatus.set(false);
        }, 2000);
    }

    onMount(loadTheme);

    return (
        <div class={useClass("", props.class)}>
            {/* 内连 */}
            <Show when={props.isInline}>
                <code
                    class={"language-" + props.type}
                    innerHTML={MdText.get()}
                ></code>
            </Show>
            {/* 块级 */}
            <Show when={!props.isInline}>
                <pre
                    class={useClass(
                        "language-" + props.type,
                        "line-numbers match-braces",
                        "relative",
                    )}
                >
                    <div class="h-10"></div>
                    <div class="py-3 px-4 flex items-center justify-between bg-zinc-800 absolute w-full left-0 top-0 shadow-2xl">
                        <span class="text-zinc-300">{props.type}</span>
                        <Show when={copyStatus.get()}>
                            <button class="inline-flex items-center text-green-500">
                                <span class="mr-1">已复制</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-width="2"
                                    >
                                        <path d="m9 10l3.258 2.444a1 1 0 0 0 1.353-.142L20 5" />
                                        <path d="M21 12a9 9 0 1 1-6.67-8.693" />
                                    </g>
                                </svg>
                            </button>
                        </Show>
                        <Show when={!copyStatus.get()}>
                            <button
                                class="cursor-pointer inline-flex items-center text-zinc-300 hover:text-blue-500"
                                onClick={handleCopy}
                            >
                                <span class="">复制</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 512 512"
                                    class="ml-1"
                                >
                                    <rect
                                        width="336"
                                        height="336"
                                        x="128"
                                        y="128"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                        rx="57"
                                        ry="57"
                                    />
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                        d="m383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"
                                    />
                                </svg>
                            </button>
                        </Show>
                    </div>
                    <code innerHTML={MdText.get()}></code>
                </pre>
            </Show>
        </div>
    );
}

/**
 * 加载语言高亮模块
 * @param type
 */
async function loadLang(type: string) {
    await langs[`/node_modules/prismjs/components/prism-${type}.min.js`]();
}

export function LanguagePrism(props: ILanguageProps) {
    const isLoaded = usePreload(async () => {
        await loadLang(props.type);
        return true;
    });
    return (
        <Show when={isLoaded.get()} fallback="loading……">
            <LanguageComp {...props} />
        </Show>
    );
}
