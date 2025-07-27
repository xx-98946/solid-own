import { useClass } from "@/utils";
import type { JSX } from "solid-js";

interface IProps {
    children: JSX.Element;
    class?: string;
}
export function Prose(props: IProps) {
    return (
        <div
            class={useClass(
                "mx-auto prose prose-pre:m-0 prose-h1:mt-4 prose-h2:my-4",
                props.class,
            )}
        >
            {props.children}
        </div>
    );
}
