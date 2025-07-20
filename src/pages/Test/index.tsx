import { Prose } from "@/comps";
import PrismTest from "./PrismTest";
import ShikiTest from "./ShikiTest";
import MarkdownTest from "./MarkdownTest";
import { globalTitle } from "@/context";
import { useMount } from "@/utils";

export default function Test() {
    useMount(() => {
        globalTitle.set((v) => v + "-test");
    });
    return (
        <div>
            {/* <PrismTest /> */}
            {/* <Prose>
                <ShikiTest />
            </Prose> */}
            <MarkdownTest />
        </div>
    );
}
