/**
 * 加载静态文件的方法
 * @param path 文件路径
 * @returns
 */
export async function loadText(path: string) {
    const res = await fetch(path);
    const text = await res.text();
    return text;
}

export * from "./linkList";
