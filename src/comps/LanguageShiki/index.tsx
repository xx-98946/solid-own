import { onMount, Show } from "solid-js";
import { useClass, usePreload, useSignal } from "@/utils";
import { codeToHtml } from "shiki";
import "./style.css";
import { Prose } from "@/comps";

interface ILanguageProps {
    // 要处理的数据
    children: unknown;
    // 样式
    class?: string;
    // 高亮类型
    type: string;
    // 是否是块级
    isInline?: boolean;
    theme?: string;
}

export function LanguageShiki(props: ILanguageProps) {
    /**
     * 将参数统一处理为字符串类型
     * @returns
     */
    function toString() {
        const raw =
            typeof props.children == "string"
                ? props.children
                : `${JSON.stringify(props.children)}`;
        return raw;
    }

    /**
     * 生成渲染后的html格式
     */
    const MdText = useSignal(() => {
        const raw = toString();
        return codeToHtml(raw, {
            lang: props.type,
            theme: "light-plus",
        });
    });

    /**
     * 是否拷贝完成
     */
    const copyStatus = useSignal(false);

    /**
     * 拷贝代码片段
     */
    async function handleCopy() {
        await navigator.clipboard.writeText(toString());
        copyStatus.set(true);
        setTimeout(() => {
            copyStatus.set(false);
        }, 2000);
    }

    function capitalize(s: string) {
        if (s.length) {
            return s[0].toUpperCase() + s.slice(1);
        }
        return s;
    }

    return (
        <Prose class={useClass("shadow  overflow-hidden my-4")}>
            {/* 拷贝按钮 */}
            <div class="pt-2 pb-3 px-4 flex items-center justify-between  w-full shadow-2xl text-xs rounded-t bg-gray-100 text-gray-500">
                <span class="text-sm text-gray-500 font-mono">
                    {props.type}
                </span>
                <Show when={copyStatus.get()}>
                    <button class="inline-flex items-center text-blue-500">
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
                        class="cursor-pointer inline-flex items-center  hover:text-blue-500"
                        onClick={handleCopy}
                    >
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
                        <span class="ml-1">复制</span>
                    </button>
                </Show>
            </div>
            <div innerHTML={MdText.get()}></div>
        </Prose>
    );
}
