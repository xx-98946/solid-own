export async function loadText(path: string) {
    const res = await fetch(path);
    const text = await res.text();
    return text;
}
