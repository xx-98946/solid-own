import { LanguageShiki } from "@/comps";
import { useSignal } from "@/utils";

export default function ShikiTest() {
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

    let vuetemp = `<script setup>
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
        <div class="prose mx-auto">
            <h1>测试 Shiki 的高亮</h1>
            <div>
                这是一段正常的文字，没有内连字体的高亮`asflkjaslkdf`asdfas
            </div>
            <div class="mb-2">
                <span>行内高亮：</span>
                <LanguageShiki type="json" isInline>
                    {value.get()}
                </LanguageShiki>
                <span>
                    内容会对齐么，明显是不对齐的，那就只能通过自定义样式来改变了
                </span>
            </div>
            <div class="my-2">
                <LanguageShiki type="js">{jstemp}</LanguageShiki>
            </div>

            <div class="my-2">
                <LanguageShiki type="vue">{vuetemp}</LanguageShiki>
            </div>
        </div>
    );
}
