interface ILinkItem extends Record<string, unknown> {
    [key: string]: {
        link: string;
        group: string;
        icon: string;
        title: string;
    };
}
/**
 * 获取导航的数据
 * @returns
 */
export async function getLinkList() {
    const res = await fetch("/api/list");
    const data = await res.json();
    return data as ILinkItem;
}
