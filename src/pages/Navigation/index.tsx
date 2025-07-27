import { getLinkList } from "@/apis";
import { Preload } from "@/comps";
import { usePreload } from "@/utils";
import { For } from "solid-js";

export default function Page() {
    const linkList = usePreload(getLinkList);

    return (
        <section>
            <div>网址导航</div>
            <Preload data={linkList}>
                <div class="grid grid-cols-1 gap-8">
                    <For each={linkList.get()}>
                        {({ value, key }) => (
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
