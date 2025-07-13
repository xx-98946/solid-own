import { Button } from "@/comps";
import { useClass } from "@/utils";

export default function ButtonList() {
    return (
        <div>
            <section class="p-2 m-2">
                <h3 class="text-xl mb-2">基础用法</h3>
                <Button class={useClass(Button.default, "m-2")}>
                    默认按钮
                </Button>

                <Button class={useClass(Button.primary, "m-2")}>
                    主要按钮
                </Button>

                <Button class={useClass(Button.success, "m-2")}>
                    成功按钮
                </Button>

                <Button class={useClass(Button.info, "m-2")}>信息按钮</Button>

                <Button class={useClass(Button.warning, "m-2")}>
                    告警按钮
                </Button>

                <Button class={useClass(Button.danger, "m-2")}>危险按钮</Button>
            </section>

            <section class="p-2 m-2">
                <h3 class="text-xl mb-2">圆角用法</h3>
                <Button class={useClass(Button.default, "m-2 rounded-full")}>
                    默认按钮
                </Button>

                <Button class={useClass(Button.primary, "m-2 rounded-full")}>
                    主要按钮
                </Button>

                <Button class={useClass(Button.success, "m-2 rounded-full")}>
                    成功按钮
                </Button>

                <Button class={useClass(Button.info, "m-2 rounded-full")}>
                    信息按钮
                </Button>

                <Button class={useClass(Button.warning, "m-2 rounded-full")}>
                    告警按钮
                </Button>

                <Button class={useClass(Button.danger, "m-2 rounded-full")}>
                    危险按钮
                </Button>
            </section>

            <section class="p-2 m-2">
                <h3 class="text-xl mb-2">朴素按钮</h3>
                <Button class={useClass(Button.default, "m-2")}>
                    默认按钮
                </Button>

                <Button class={useClass(Button.primary_plain, "m-2")}>
                    主要按钮
                </Button>

                <Button class={useClass(Button.success_plain, "m-2")}>
                    成功按钮
                </Button>

                <Button class={useClass(Button.info_plain, "m-2")}>
                    信息按钮
                </Button>

                <Button class={useClass(Button.warning_plain, "m-2")}>
                    告警按钮
                </Button>

                <Button class={useClass(Button.danger_plain, "m-2")}>
                    危险按钮
                </Button>
            </section>
            <section class="p-2 m-2">
                <h3 class="text-xl mb-2">禁用状态</h3>

                <Button class={useClass(Button.default, "m-2")} disabled>
                    默认按钮
                </Button>

                <Button class={useClass(Button.primary, "m-2")} disabled>
                    主要按钮
                </Button>

                <Button class={useClass(Button.success, "m-2")} disabled>
                    成功按钮
                </Button>

                <Button class={useClass(Button.info, "m-2")} disabled>
                    信息按钮
                </Button>

                <Button class={useClass(Button.warning, "m-2")} disabled>
                    告警按钮
                </Button>

                <Button class={useClass(Button.danger, "m-2")} disabled>
                    危险按钮
                </Button>
            </section>
            <section class="p-2 m-2">
                <h3 class="text-xl mb-2">文字按钮</h3>
                <Button class={useClass(Button.default_link, "m-2")}>
                    默认按钮
                </Button>

                <Button class={useClass(Button.primary_link, "m-2")}>
                    主要按钮
                </Button>

                <Button class={useClass(Button.success_link, "m-2")}>
                    成功按钮
                </Button>

                <Button class={useClass(Button.info_link, "m-2")}>
                    信息按钮
                </Button>

                <Button class={useClass(Button.warning_link, "m-2")}>
                    告警按钮
                </Button>

                <Button class={useClass(Button.danger_link, "m-2")}>
                    危险按钮
                </Button>
            </section>
            <section class="p-2 m-2">
                <h3 class="text-xl mb-2">文字禁用</h3>
                <Button class={useClass(Button.default_link, "m-2")} disabled>
                    默认按钮
                </Button>

                <Button class={useClass(Button.primary_link, "m-2")} disabled>
                    主要按钮
                </Button>

                <Button class={useClass(Button.success_link, "m-2")} disabled>
                    成功按钮
                </Button>

                <Button class={useClass(Button.info_link, "m-2")} disabled>
                    信息按钮
                </Button>

                <Button class={useClass(Button.warning_link, "m-2")} disabled>
                    告警按钮
                </Button>

                <Button class={useClass(Button.danger_link, "m-2")} disabled>
                    危险按钮
                </Button>
            </section>

            <section class="p-2 m-2">
                <h3 class="text-xl mb-2">图标按钮</h3>

                <div class="flex items-center mt-3 mx-4">
                    <Button
                        class={useClass(
                            Button.info,
                            "my-2 mx-4 rounded-full p-2",
                        )}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            class="size-4"
                        >
                            <path
                                fill="currentColor"
                                d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h3V8H9zm4 0h3V8h-2z"
                            />
                        </svg>
                    </Button>
                    <Button class={useClass(Button.warning_link, "my-2 mx-4")}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            class="size-6"
                        >
                            <path
                                fill="currentColor"
                                d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h3V8H9zm4 0h3V8h-2z"
                            />
                        </svg>
                    </Button>

                    <Button class={useClass(Button.danger_plain, "my-2 mx-4")}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            class="size-6"
                        >
                            <path
                                fill="currentColor"
                                d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h3V8H9zm4 0h3V8h-2z"
                            />
                        </svg>
                    </Button>

                    <Button class={useClass(Button.primary, "my-2 mx-4")}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            class="size-6"
                        >
                            <path
                                fill="currentColor"
                                d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h3V8H9zm4 0h3V8h-2z"
                            />
                        </svg>
                    </Button>
                </div>
            </section>
        </div>
    );
}
