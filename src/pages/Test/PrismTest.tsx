import { Language } from "@/comps";
import { useSignal } from "@/utils";

export default function PrismTest() {
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

    let vuetemp = `
<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>

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
            <h1>测试 Prism 的高亮</h1>

            <div class="px-4 my-2">
                <Language type="json" isInline>
                    {value.get()}
                </Language>
            </div>
            <div class="px-4 my-2">
                <Language type="javascript">{jstemp}</Language>
            </div>

            <div class="px-4 my-2">
                <Language type="markup">{vuetemp}</Language>
            </div>
        </div>
    );
}
