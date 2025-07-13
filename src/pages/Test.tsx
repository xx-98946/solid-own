import { useClass, useSignal } from "@/utils";
import { test } from "@/apis";
import { onMount } from "solid-js";

export default function Test() {
    const count = useSignal(0);
    const double = useSignal(() => count.get() * 2);

    function handleAdd() {
        count.set((v) => v + 1);
    }

    onMount(test);

    return (
        <div class="p-2">
            <h2 class="text-2xl">Test</h2>
            <div>count: {count.get()}</div>
            <button
                onClick={handleAdd}
                class={useClass(
                    "border py-1 px-2 cursor-pointer rounded-sm text-blue-500",
                    count.get() == 3 && "text-orange-500",
                )}
            >
                +1
            </button>
            <div>double: {double.get()}</div>
        </div>
    );
}
