import { Prose } from "@/comps";
import PrismTest from "./PrismTest";
import ShikiTest from "./ShikiTest";
import MarkdownTest from "./MarkdownTest";

export default function Test() {
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
