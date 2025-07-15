import { Language } from "@/comps";
import { useSignal } from "@/utils";

export default function Test() {
    let jstemp = `import { Language } from "@/comps";
import { useSignal } from "@/utils";

export default function Test() {
    const value = useSignal({
        a: "b",
        c: [
            "d",
            {
                e: {
                    f: "g",
                },
            },
        ],
    });
    return (
        <div>
            Test
            <Language type="json">{value.get()}</Language>
        </div>
    );
}
`;
    const value = useSignal({
        a: "b",
        c: [
            "d",
            {
                e: {
                    f: "g",
                },
            },
        ],
    });
    return (
        <div>
            Test
            <div class="px-4 my-2">
                <Language type="json" isInline>
                    {value.get()}
                </Language>
            </div>
            <div class="px-4 my-2">
                <Language type="javascript" theme="prism">
                    {jstemp}
                </Language>
            </div>
        </div>
    );
}
