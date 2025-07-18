import { useParams } from "@solidjs/router";
import { Show } from "solid-js";
import { loadText } from "@/apis";
import { Markdown } from "@/comps";
import { usePreload } from "@/utils";
export default function BlogDetail() {
    const params = useParams();
    const data = usePreload(() => loadText(`/contents/${params.id}`));

    return (
        <div>
            <Show when={data.get()} fallback="loading……">
                <Markdown raw={data.get()} />
            </Show>
        </div>
    );
}
