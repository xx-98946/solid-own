import {
    createSignal,
    createEffect,
    type Accessor,
    type Setter,
} from "solid-js";

export const useEffect = createEffect;

/**
 * 信号类型
 */
export interface ISignal<T> {
    [k: string]: unknown;
    get: Accessor<T>;
    set: Setter<T>;
    __type: "signal";
}

/**
 * 判断变量是否是信号类型
 * @param val
 * @returns
 */
export function isSignal<T>(val: T) {
    if (val == null) {
        return false;
    }
    // @ts-ignore
    return val.__type == "signal";
}
export function useSignal<T>(initValue: () => Promise<T>): ISignal<T>;
export function useSignal<T>(initValue: ISignal<T>): ISignal<T>;
export function useSignal<T>(
    initValue: (() => T) | (() => Promise<T>),
): ISignal<T>;
export function useSignal<T>(initValue: T): ISignal<T>;
export function useSignal<T>(initValue: unknown): ISignal<T>;
export function useSignal(initValueOrCall: any) {
    /**
     * 1. 是信号返回自身
    
     */
    if (isSignal(initValueOrCall)) {
        return initValueOrCall;
    }
    /**
     * 2. 如果是函数，则监听该函数作为信号的触发条件，并返回信号
     */
    if (typeof initValueOrCall == "function") {
        const [get, set] = createSignal(null);
        Promise.resolve(initValueOrCall()).then((value: any) => {
            set(value);
        });

        useEffect(async () => {
            const newValue = await initValueOrCall();
            set(newValue);
        });
        return {
            get,
            set,
            __type: "signal",
        };
    }
    /**
     * 3. 是普通变量，则以此作为默认值生成新的信号
     */
    const [get, set] = createSignal(initValueOrCall);
    return {
        get,
        set,
        __type: "signal",
    };
}

/**
 * 异步处理函数
 * @param cb
 * @returns
 */
export function usePreload<T>(cb: () => Promise<T>) {
    const data = useSignal<T>(undefined);

    cb().then((res) => {
        // @ts-ignore
        data.set(res);
    });
    return data;
}
