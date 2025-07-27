import { useEffect, useSignal } from "@/utils";

const initTitle = "徐鑫的个人网站";
const data = useSignal(initTitle);

function update(newTitle: string) {
    data.set(`${initTitle}-${newTitle}`);
}

useEffect(() => {
    document.title = data.get();
});

export const globalTitle = {
    ...data,
    update,
};
