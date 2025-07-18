import type { JSX } from "solid-js";

/**
 * 调用组件，并生成静态的文本
 * @param Comp
 * @param props
 * @returns
 */
export function plain<T>(Comp: (props: T) => JSX.Element, props = {} as T) {
    const comp = Comp(props) as any;
    return comp.outerHTML;
}
