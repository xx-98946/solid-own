import { getLinkList } from "@/apis";
import { Preload } from "@/comps";
import { useEffect, usePreload, useSignal } from "@/utils";
import { For } from "solid-js";

export default function Page() {
    const linkList = usePreload(getLinkList);
    const linkListData = useSignal(() => {
        if (linkList.get()) {
            return Object.entries(linkList.get());
        }
        return [];
    });

    useEffect(() => {
        console.log(linkList.get());
    });

    return (
        <section>
            <div class="text-center sticky top-0 bg-white text-2xl p-2 font-bold shadow">
                网址导航
            </div>
            <Preload data={linkList}>
                <div class="flex flex-wrap gap-8 p-4 w-2/3 m-auto">
                    <For each={linkListData.get()}>
                        {([key, value]) => (
                            <a
                                href={value.link}
                                class="flex items-center justify-center gap-4"
                                target="_blank"
                            >
                                <img src={value.icon} class="size-6" />
                                <span>{value.title}</span>
                            </a>
                        )}
                    </For>
                </div>
            </Preload>
        </section>
    );
}
