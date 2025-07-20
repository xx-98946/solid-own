import { nanoid } from "nanoid";
/**
 * 生成唯一id
 * @returns
 */
export function uuid() {
    return nanoid();
}

/**
 * 判断两个值是否字面量相等
 * @param a
 * @param b
 * @returns
 */
export function isSame<T>(a: T, b: T) {
    return JSON.stringify(a) == JSON.stringify(b);
}
