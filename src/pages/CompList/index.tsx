import ButtonList from "./ButtonList";
import RadioList from "./RadioList";

export default function CompList() {
    return (
        <main class="pr-1 w-[80vw] m-auto">
            <h1 class="text-3xl p-2 mx-6 my-2">组件库展示列表</h1>

            <section class="mx-8 my-4 border rounded-2xl shadow border-gray-200">
                <h2 class="text-2xl p-2 m-2 border-b border-b-gray-200">
                    按钮组件
                </h2>
                <ButtonList />
            </section>

            <section class="mx-8 my-4 border rounded-2xl shadow border-gray-200">
                <h2 class="text-2xl p-2 m-2 border-b border-b-gray-200">
                    单选框组件
                </h2>

                <RadioList />
            </section>
        </main>
    );
}
