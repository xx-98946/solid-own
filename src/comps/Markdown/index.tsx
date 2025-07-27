import { Prose } from "@/comps";
import { useEffect, useSignal } from "@/utils";
import { parse, Renderer } from "marked";
import { nanoid } from "nanoid";
import { codeToHtml } from "shiki";
import { type JSX, onMount, Show } from "solid-js";
interface IProps {
    raw: string;
}

/**
 * 生成随机编码
 * @returns
 */
function getUuid() {
    return nanoid(6);
}

export function Markdown(props: IProps) {
    // 根据uuid 存储了需要拷贝的内容
    const codeIds = useSignal<Record<string, string>>({});

    let finalHtml = useSignal("");
    /**
     * promise 不能改成同步
     * 所以就只能通过异步触发
     */
    const xxRenderer = new Renderer();
    xxRenderer.code = function (item) {
        const uuid = getUuid();
        codeIds.set({
            ...codeIds.get(),
            [uuid]: item.text,
        });
        codeToHtml(item.text, {
            lang: item.lang || "html",
            theme: "light-plus",
        }).then((res) => {
            const header = markdownHeader({
                lang: item.lang,
                dataId: uuid,
            });
            const handledHtml = `<div class="shadow rounded-sm overflow-hidden">${header}<div class="max-h-[60vh] overflow-auto pl-1">${res}</div></div>`;
            finalHtml.set(finalHtml.get().replace(uuid, handledHtml));
        });
        return uuid;
    };

    // 同步处理
    const html = parse(props.raw, {
        async: false,
        renderer: xxRenderer,
    });
    finalHtml.set(html);

    const handleCopy: JSX.EventHandler<HTMLDivElement, MouseEvent> =
        async function (e) {
            const button = e?.target?.closest(
                "button[data-id]",
            ) as HTMLButtonElement;
            if (button) {
                const codeId = button.dataset.id!;
                const code = codeIds.get()[codeId];
                await navigator.clipboard.writeText(code);
                button.innerHTML = `<span>已复制</span>${doneSvg}`;
                button.classList.add("text-green-500");
                setTimeout(() => {
                    button.classList.remove("text-green-500");
                    button.innerHTML = `${copySvg}`;
                }, 2000);
            }
        };

    return (
        <Prose>
            <div innerHTML={finalHtml.get()} onClick={handleCopy}></div>
        </Prose>
    );
}

const copySvg = `
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 512 512"
    class="hover:text-blue-500"
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
</svg>`;

const doneSvg = `
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
`;

/**
 * 生成复制粘贴的功能
 * @param props
 * @returns
 */
function markdownHeader(props: { lang?: string; dataId?: string }) {
    return `<div class="pt-2 pb-3 px-4 flex items-center justify-between  w-full text-xs  bg-gray-100 text-gray-500">
            <span class="text-sm text-gray-500 font-mono">
                ${props.lang || ""}
            </span>
            <button class="cursor-pointer inline-flex items-center duration-100 gap-2" data-id=${props.dataId}>
                ${copySvg}
            </button>
        </div>`;
}
