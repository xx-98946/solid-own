import { useEffect, useSignal } from "@/utils";

export const globalTitle = useSignal("徐鑫的个人网站");

useEffect(() => {
    document.title = globalTitle.get();
});
