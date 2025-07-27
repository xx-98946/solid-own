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

/**
 * 获取导航的数据
 * @returns
 */
export async function getLinkList() {
    const res = await fetch("/api");
    const data = await res.json();
    return data;
}
