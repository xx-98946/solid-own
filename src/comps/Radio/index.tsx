import { isSame, useClass, useEffect, useSignal, type ISignal } from "@/utils";
import { For } from "solid-js";

export interface IRadioOption {
    label: string;
    value: string | number;
    disabled?: boolean;
    [k: string]: unknown;
}

interface IRadioProps {
    // 绑定的值
    value?: number | string | ISignal<number | string>;
    // 绑定的值所对应的选项
    valueOption?: ISignal<IRadioOption | undefined>;
    // 选项列表
    options: Array<IRadioOption>;
    // 标签的样式
    labelClass?: string;
    // 选项的样式
    optionClass?: string;
    // 单选框的样式
    radioClass?: string;
    // 整体样式
    class?: string;
    // 修改事件
    change?: (value: IRadioOption) => void;
}

export function Radio(props: IRadioProps) {
    const value = useSignal<string | number>(props.value);

    useEffect(() => {
        const option = props.options.find(
            (option) => option.value == value.get(),
        );
        props.valueOption?.set(option);
    });
    function handleInput(option: IRadioOption) {
        if (option.disabled) {
            return;
        }
        value.set(option.value);
        props.change?.(option);
    }
    return (
        <div class={props.class}>
            <For each={props.options}>
                {(option) => (
                    <div
                        class={useClass(
                            "group cursor-pointer inline-flex items-center duration-100 select-none",
                            props.optionClass,
                            option.disabled && "cursor-not-allowed",
                        )}
                        onClick={() => handleInput(option)}
                    >
                        <span
                            class={useClass(
                                "inline-block peer size-3.5 border-1 rounded-full mr-2 border-gray-300 duration-100  shadow",
                                !option.disabled &&
                                    "group-hover:border-blue-500",
                                props.radioClass,
                                isSame(value.get(), option.value) &&
                                    "border-blue-500 border-4",
                            )}
                        ></span>
                        <span
                            class={useClass(
                                "duration-100",
                                props.labelClass,
                                option.disabled
                                    ? "text-gray-300"
                                    : "group-hover:text-blue-500",
                                isSame(value.get(), option.value) &&
                                    "text-blue-500",
                            )}
                        >
                            {option.label}
                        </span>
                    </div>
                )}
            </For>
        </div>
    );
}
