import { useClass, usePreload, useSignal } from "@/utils";
const themes = import.meta.glob("/node_modules/prismjs/themes/*.css");
const langs = import.meta.glob(
    "/node_modules/prismjs/components/prism-*.min.js",
);
import "prismjs";
import Prism from "prismjs";
import { onMount, Show } from "solid-js";

interface ILanguageProps {
    // 要处理的数据
    children: unknown;
    // 样式
    class?: string;
    // 高亮类型
    type: string;
    // 主题样式，小心主题是通用的，改了一个就是整体都改掉，而不是单个组件生效
    theme?:
        | "prism-coy"
        | "prism-dark"
        | "prism-funky"
        | "prism-okaidia"
        | "prism-solarizedlight"
        | "prism-tomorrow"
        | "prism-twilight"
        | "prism";
    // 是否是块级
    isInline?: boolean;
}

function LanguageComp(props: ILanguageProps) {
    const MdText = useSignal(() => {
        const raw =
            typeof props.children == "string"
                ? props.children
                : `${JSON.stringify(props.children)}`;
        return Prism.highlight(raw, Prism.languages[props.type], props.type);
    });

    async function loadTheme() {
        const theme = props.theme || "prism";
        await themes[`/node_modules/prismjs/themes/${theme}.min.css`]();
    }

    onMount(loadTheme);

    return (
        <div class={useClass("", props.class)}>
            {/* 样式只能设置给 
            :not(pre)>code[class*=language-], pre[class*=language-] {
                background: #f5f2f0;
            } */}
            <Show when={props.isInline}>
                <code
                    class={"language-" + props.type}
                    innerHTML={MdText.get()}
                ></code>
            </Show>
            <Show when={!props.isInline}>
                <pre class={"language-" + props.type}>
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

export function Language(props: ILanguageProps) {
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
