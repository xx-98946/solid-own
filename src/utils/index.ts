import { nanoid } from "nanoid";

export * from "./signal";
export * from "./className";
export * from "./router";
export * from "./client";

/**
 * 生成唯一id
 * @returns
 */
export function uuid() {
    return nanoid();
}

/**
 * 判断两个值是否相等
 * @param a
 * @param b
 * @returns
 */
export function isSame<T>(a: T, b: T) {
    return JSON.stringify(a) == JSON.stringify(b);
}
