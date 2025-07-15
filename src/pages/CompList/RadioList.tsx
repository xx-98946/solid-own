import { Language, Radio, type IRadioOption } from "@/comps";
import { useClass, useSignal } from "@/utils";
import { onMount } from "solid-js";

export default function RadioList() {
    const value = useSignal<string | number>("");
    const valueOption1 = useSignal<IRadioOption | undefined>(undefined);
    const valueOption2 = useSignal<IRadioOption | undefined>(undefined);
    const radioOptions = [
        {
            label: "选项1",
            value: "1",
        },
        {
            label: "选项2",
            value: "2",
        },
        {
            label: "选项3",
            value: "3",
        },
        {
            label: "禁用选项",
            value: "4",
            disabled: true,
        },
    ];
    onMount(() => {
        value.set("1");
    });
    return (
        <div>
            <section class="p-2 m-2">
                <h3 class="text-xl mb-2">平铺用法</h3>
                <Radio
                    options={radioOptions}
                    value={value}
                    optionClass={useClass("mr-8 ")}
                    valueOption={valueOption1}
                />
                {/* <input type="radio" /> */}
            </section>

            <section class="p-2 m-2">
                <h3 class="text-xl mb-2">垂直用法</h3>
                <Radio
                    options={radioOptions}
                    value={value}
                    class="flex flex-col"
                    optionClass={useClass("mt-3 ")}
                    valueOption={valueOption2}
                />
            </section>
            <Language type="json">{valueOption1.get()}</Language>
        </div>
    );
}
