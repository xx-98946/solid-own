import { useParams } from "@solidjs/router";
import { Show } from "solid-js";
import { loadText } from "@/apis";
import { Markdown } from "@/comps";
import { usePreload } from "@/utils";
import { globalTitle } from "@/context";
export default function BlogDetail() {
    const params = useParams();
    const name = decodeURIComponent(params.id).split(".")[0];
    console.log("??name", name);
    globalTitle.update(name);
    const data = usePreload(() => loadText(`/contents/${params.id}`));

    return (
        <div class="pb-10">
            <Show when={data.get()} fallback="loading……">
                <Markdown raw={data.get()} />
            </Show>
        </div>
    );
}
