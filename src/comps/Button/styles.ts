import { useClass } from "@/utils";

export const base = useClass([
    "inline-flex text-center select-none duration-100 border px-5 py-2 rounded-sm border-gray-300 cursor-pointer items-center justify-center",
    "disabled:cursor-not-allowed",
]);

export const red = useClass([
    base,
    "text-white bg-red-500/90 border-red-100",
    "hover:enabled:bg-red-500/70 hover:enabled:border-red-200",
    "active:enabled:bg-red-500 active:enabled:border-red-300",
    "disabled:border-red-200/80 disabled:bg-red-300/80",
]);

export const red_plain = useClass([
    base,
    "text-red-500 border-red-300",
    "hover:enabled:bg-red-500/90 hover:enabled:border-red-200 hover:enabled:text-white",
    "active:enabled:bg-red-600/90 active:enabled:border-red-300",
    "disabled:border-red-200/80 disabled:text-red-300",
]);

export const red_link = useClass([
    base,
    "text-red-500 border-transparent",
    "hover:enabled:text-red-400",
    "active:enabled:text-red-600",
    "disabled:text-red-300",
]);
export const orange = useClass([
    base,
    "text-white bg-orange-500/90 border-orange-100",
    "hover:enabled:bg-orange-500/70 hover:enabled:border-orange-200",
    "active:enabled:bg-orange-500 active:enabled:border-orange-300",
    "disabled:border-orange-200/80 disabled:bg-orange-300/80",
]);

export const orange_plain = useClass([
    base,
    "text-orange-500 border-orange-300",
    "hover:enabled:bg-orange-500/90 hover:enabled:border-orange-200 hover:enabled:text-white",
    "active:enabled:bg-orange-600/90 active:enabled:border-orange-300",
    "disabled:border-orange-200/80 disabled:text-orange-300",
]);

export const orange_link = useClass([
    base,
    "text-orange-500 border-transparent",
    "hover:enabled:text-orange-400",
    "active:enabled:text-orange-600",
    "disabled:text-orange-300",
]);
export const amber = useClass([
    base,
    "text-white bg-amber-500/90 border-amber-100",
    "hover:enabled:bg-amber-500/70 hover:enabled:border-amber-200",
    "active:enabled:bg-amber-500 active:enabled:border-amber-300",
    "disabled:border-amber-200/80 disabled:bg-amber-300/80",
]);

export const amber_plain = useClass([
    base,
    "text-amber-500 border-amber-300",
    "hover:enabled:bg-amber-500/90 hover:enabled:border-amber-200 hover:enabled:text-white",
    "active:enabled:bg-amber-600/90 active:enabled:border-amber-300",
    "disabled:border-amber-200/80 disabled:text-amber-300",
]);

export const amber_link = useClass([
    base,
    "text-amber-500 border-transparent",
    "hover:enabled:text-amber-400",
    "active:enabled:text-amber-600",
    "disabled:text-amber-300",
]);
export const yellow = useClass([
    base,
    "text-white bg-yellow-500/90 border-yellow-100",
    "hover:enabled:bg-yellow-500/70 hover:enabled:border-yellow-200",
    "active:enabled:bg-yellow-500 active:enabled:border-yellow-300",
    "disabled:border-yellow-200/80 disabled:bg-yellow-300/80",
]);

export const yellow_plain = useClass([
    base,
    "text-yellow-500 border-yellow-300",
    "hover:enabled:bg-yellow-500/90 hover:enabled:border-yellow-200 hover:enabled:text-white",
    "active:enabled:bg-yellow-600/90 active:enabled:border-yellow-300",
    "disabled:border-yellow-200/80 disabled:text-yellow-300",
]);

export const yellow_link = useClass([
    base,
    "text-yellow-500 border-transparent",
    "hover:enabled:text-yellow-400",
    "active:enabled:text-yellow-600",
    "disabled:text-yellow-300",
]);
export const lime = useClass([
    base,
    "text-white bg-lime-500/90 border-lime-100",
    "hover:enabled:bg-lime-500/70 hover:enabled:border-lime-200",
    "active:enabled:bg-lime-500 active:enabled:border-lime-300",
    "disabled:border-lime-200/80 disabled:bg-lime-300/80",
]);

export const lime_plain = useClass([
    base,
    "text-lime-500 border-lime-300",
    "hover:enabled:bg-lime-500/90 hover:enabled:border-lime-200 hover:enabled:text-white",
    "active:enabled:bg-lime-600/90 active:enabled:border-lime-300",
    "disabled:border-lime-200/80 disabled:text-lime-300",
]);

export const lime_link = useClass([
    base,
    "text-lime-500 border-transparent",
    "hover:enabled:text-lime-400",
    "active:enabled:text-lime-600",
    "disabled:text-lime-300",
]);
export const green = useClass([
    base,
    "text-white bg-green-500/90 border-green-100",
    "hover:enabled:bg-green-500/70 hover:enabled:border-green-200",
    "active:enabled:bg-green-500 active:enabled:border-green-300",
    "disabled:border-green-200/80 disabled:bg-green-300/80",
]);

export const green_plain = useClass([
    base,
    "text-green-500 border-green-300",
    "hover:enabled:bg-green-500/90 hover:enabled:border-green-200 hover:enabled:text-white",
    "active:enabled:bg-green-600/90 active:enabled:border-green-300",
    "disabled:border-green-200/80 disabled:text-green-300",
]);

export const green_link = useClass([
    base,
    "text-green-500 border-transparent",
    "hover:enabled:text-green-400",
    "active:enabled:text-green-600",
    "disabled:text-green-300",
]);
export const emerald = useClass([
    base,
    "text-white bg-emerald-500/90 border-emerald-100",
    "hover:enabled:bg-emerald-500/70 hover:enabled:border-emerald-200",
    "active:enabled:bg-emerald-500 active:enabled:border-emerald-300",
    "disabled:border-emerald-200/80 disabled:bg-emerald-300/80",
]);

export const emerald_plain = useClass([
    base,
    "text-emerald-500 border-emerald-300",
    "hover:enabled:bg-emerald-500/90 hover:enabled:border-emerald-200 hover:enabled:text-white",
    "active:enabled:bg-emerald-600/90 active:enabled:border-emerald-300",
    "disabled:border-emerald-200/80 disabled:text-emerald-300",
]);

export const emerald_link = useClass([
    base,
    "text-emerald-500 border-transparent",
    "hover:enabled:text-emerald-400",
    "active:enabled:text-emerald-600",
    "disabled:text-emerald-300",
]);
export const teal = useClass([
    base,
    "text-white bg-teal-500/90 border-teal-100",
    "hover:enabled:bg-teal-500/70 hover:enabled:border-teal-200",
    "active:enabled:bg-teal-500 active:enabled:border-teal-300",
    "disabled:border-teal-200/80 disabled:bg-teal-300/80",
]);

export const teal_plain = useClass([
    base,
    "text-teal-500 border-teal-300",
    "hover:enabled:bg-teal-500/90 hover:enabled:border-teal-200 hover:enabled:text-white",
    "active:enabled:bg-teal-600/90 active:enabled:border-teal-300",
    "disabled:border-teal-200/80 disabled:text-teal-300",
]);

export const teal_link = useClass([
    base,
    "text-teal-500 border-transparent",
    "hover:enabled:text-teal-400",
    "active:enabled:text-teal-600",
    "disabled:text-teal-300",
]);
export const cyan = useClass([
    base,
    "text-white bg-cyan-500/90 border-cyan-100",
    "hover:enabled:bg-cyan-500/70 hover:enabled:border-cyan-200",
    "active:enabled:bg-cyan-500 active:enabled:border-cyan-300",
    "disabled:border-cyan-200/80 disabled:bg-cyan-300/80",
]);

export const cyan_plain = useClass([
    base,
    "text-cyan-500 border-cyan-300",
    "hover:enabled:bg-cyan-500/90 hover:enabled:border-cyan-200 hover:enabled:text-white",
    "active:enabled:bg-cyan-600/90 active:enabled:border-cyan-300",
    "disabled:border-cyan-200/80 disabled:text-cyan-300",
]);

export const cyan_link = useClass([
    base,
    "text-cyan-500 border-transparent",
    "hover:enabled:text-cyan-400",
    "active:enabled:text-cyan-600",
    "disabled:text-cyan-300",
]);
export const sky = useClass([
    base,
    "text-white bg-sky-500/90 border-sky-100",
    "hover:enabled:bg-sky-500/70 hover:enabled:border-sky-200",
    "active:enabled:bg-sky-500 active:enabled:border-sky-300",
    "disabled:border-sky-200/80 disabled:bg-sky-300/80",
]);

export const sky_plain = useClass([
    base,
    "text-sky-500 border-sky-300",
    "hover:enabled:bg-sky-500/90 hover:enabled:border-sky-200 hover:enabled:text-white",
    "active:enabled:bg-sky-600/90 active:enabled:border-sky-300",
    "disabled:border-sky-200/80 disabled:text-sky-300",
]);

export const sky_link = useClass([
    base,
    "text-sky-500 border-transparent",
    "hover:enabled:text-sky-400",
    "active:enabled:text-sky-600",
    "disabled:text-sky-300",
]);
export const blue = useClass([
    base,
    "text-white bg-blue-500/90 border-blue-100",
    "hover:enabled:bg-blue-500/70 hover:enabled:border-blue-200",
    "active:enabled:bg-blue-500 active:enabled:border-blue-300",
    "disabled:border-blue-200/80 disabled:bg-blue-300/80",
]);

export const blue_plain = useClass([
    base,
    "text-blue-500 border-blue-300",
    "hover:enabled:bg-blue-500/90 hover:enabled:border-blue-200 hover:enabled:text-white",
    "active:enabled:bg-blue-600/90 active:enabled:border-blue-300",
    "disabled:border-blue-200/80 disabled:text-blue-300",
]);

export const blue_link = useClass([
    base,
    "text-blue-500 border-transparent",
    "hover:enabled:text-blue-400",
    "active:enabled:text-blue-600",
    "disabled:text-blue-300",
]);
export const indigo = useClass([
    base,
    "text-white bg-indigo-500/90 border-indigo-100",
    "hover:enabled:bg-indigo-500/70 hover:enabled:border-indigo-200",
    "active:enabled:bg-indigo-500 active:enabled:border-indigo-300",
    "disabled:border-indigo-200/80 disabled:bg-indigo-300/80",
]);

export const indigo_plain = useClass([
    base,
    "text-indigo-500 border-indigo-300",
    "hover:enabled:bg-indigo-500/90 hover:enabled:border-indigo-200 hover:enabled:text-white",
    "active:enabled:bg-indigo-600/90 active:enabled:border-indigo-300",
    "disabled:border-indigo-200/80 disabled:text-indigo-300",
]);

export const indigo_link = useClass([
    base,
    "text-indigo-500 border-transparent",
    "hover:enabled:text-indigo-400",
    "active:enabled:text-indigo-600",
    "disabled:text-indigo-300",
]);
export const violet = useClass([
    base,
    "text-white bg-violet-500/90 border-violet-100",
    "hover:enabled:bg-violet-500/70 hover:enabled:border-violet-200",
    "active:enabled:bg-violet-500 active:enabled:border-violet-300",
    "disabled:border-violet-200/80 disabled:bg-violet-300/80",
]);

export const violet_plain = useClass([
    base,
    "text-violet-500 border-violet-300",
    "hover:enabled:bg-violet-500/90 hover:enabled:border-violet-200 hover:enabled:text-white",
    "active:enabled:bg-violet-600/90 active:enabled:border-violet-300",
    "disabled:border-violet-200/80 disabled:text-violet-300",
]);

export const violet_link = useClass([
    base,
    "text-violet-500 border-transparent",
    "hover:enabled:text-violet-400",
    "active:enabled:text-violet-600",
    "disabled:text-violet-300",
]);
export const purple = useClass([
    base,
    "text-white bg-purple-500/90 border-purple-100",
    "hover:enabled:bg-purple-500/70 hover:enabled:border-purple-200",
    "active:enabled:bg-purple-500 active:enabled:border-purple-300",
    "disabled:border-purple-200/80 disabled:bg-purple-300/80",
]);

export const purple_plain = useClass([
    base,
    "text-purple-500 border-purple-300",
    "hover:enabled:bg-purple-500/90 hover:enabled:border-purple-200 hover:enabled:text-white",
    "active:enabled:bg-purple-600/90 active:enabled:border-purple-300",
    "disabled:border-purple-200/80 disabled:text-purple-300",
]);

export const purple_link = useClass([
    base,
    "text-purple-500 border-transparent",
    "hover:enabled:text-purple-400",
    "active:enabled:text-purple-600",
    "disabled:text-purple-300",
]);
export const fuchsia = useClass([
    base,
    "text-white bg-fuchsia-500/90 border-fuchsia-100",
    "hover:enabled:bg-fuchsia-500/70 hover:enabled:border-fuchsia-200",
    "active:enabled:bg-fuchsia-500 active:enabled:border-fuchsia-300",
    "disabled:border-fuchsia-200/80 disabled:bg-fuchsia-300/80",
]);

export const fuchsia_plain = useClass([
    base,
    "text-fuchsia-500 border-fuchsia-300",
    "hover:enabled:bg-fuchsia-500/90 hover:enabled:border-fuchsia-200 hover:enabled:text-white",
    "active:enabled:bg-fuchsia-600/90 active:enabled:border-fuchsia-300",
    "disabled:border-fuchsia-200/80 disabled:text-fuchsia-300",
]);

export const fuchsia_link = useClass([
    base,
    "text-fuchsia-500 border-transparent",
    "hover:enabled:text-fuchsia-400",
    "active:enabled:text-fuchsia-600",
    "disabled:text-fuchsia-300",
]);
export const pink = useClass([
    base,
    "text-white bg-pink-500/90 border-pink-100",
    "hover:enabled:bg-pink-500/70 hover:enabled:border-pink-200",
    "active:enabled:bg-pink-500 active:enabled:border-pink-300",
    "disabled:border-pink-200/80 disabled:bg-pink-300/80",
]);

export const pink_plain = useClass([
    base,
    "text-pink-500 border-pink-300",
    "hover:enabled:bg-pink-500/90 hover:enabled:border-pink-200 hover:enabled:text-white",
    "active:enabled:bg-pink-600/90 active:enabled:border-pink-300",
    "disabled:border-pink-200/80 disabled:text-pink-300",
]);

export const pink_link = useClass([
    base,
    "text-pink-500 border-transparent",
    "hover:enabled:text-pink-400",
    "active:enabled:text-pink-600",
    "disabled:text-pink-300",
]);
export const rose = useClass([
    base,
    "text-white bg-rose-500/90 border-rose-100",
    "hover:enabled:bg-rose-500/70 hover:enabled:border-rose-200",
    "active:enabled:bg-rose-500 active:enabled:border-rose-300",
    "disabled:border-rose-200/80 disabled:bg-rose-300/80",
]);

export const rose_plain = useClass([
    base,
    "text-rose-500 border-rose-300",
    "hover:enabled:bg-rose-500/90 hover:enabled:border-rose-200 hover:enabled:text-white",
    "active:enabled:bg-rose-600/90 active:enabled:border-rose-300",
    "disabled:border-rose-200/80 disabled:text-rose-300",
]);

export const rose_link = useClass([
    base,
    "text-rose-500 border-transparent",
    "hover:enabled:text-rose-400",
    "active:enabled:text-rose-600",
    "disabled:text-rose-300",
]);
export const slate = useClass([
    base,
    "text-white bg-slate-500/90 border-slate-100",
    "hover:enabled:bg-slate-500/70 hover:enabled:border-slate-200",
    "active:enabled:bg-slate-500 active:enabled:border-slate-300",
    "disabled:border-slate-200/80 disabled:bg-slate-300/80",
]);

export const slate_plain = useClass([
    base,
    "text-slate-500 border-slate-300",
    "hover:enabled:bg-slate-500/90 hover:enabled:border-slate-200 hover:enabled:text-white",
    "active:enabled:bg-slate-600/90 active:enabled:border-slate-300",
    "disabled:border-slate-200/80 disabled:text-slate-300",
]);

export const slate_link = useClass([
    base,
    "text-slate-500 border-transparent",
    "hover:enabled:text-slate-400",
    "active:enabled:text-slate-600",
    "disabled:text-slate-300",
]);
export const gray = useClass([
    base,
    "text-white bg-gray-500/90 border-gray-100",
    "hover:enabled:bg-gray-500/70 hover:enabled:border-gray-200",
    "active:enabled:bg-gray-500 active:enabled:border-gray-300",
    "disabled:border-gray-200/80 disabled:bg-gray-300/80",
]);

export const gray_plain = useClass([
    base,
    "text-gray-500 border-gray-300",
    "hover:enabled:bg-gray-500/90 hover:enabled:border-gray-200 hover:enabled:text-white",
    "active:enabled:bg-gray-600/90 active:enabled:border-gray-300",
    "disabled:border-gray-200/80 disabled:text-gray-300",
]);

export const gray_link = useClass([
    base,
    "text-gray-500 border-transparent",
    "hover:enabled:text-gray-400",
    "active:enabled:text-gray-600",
    "disabled:text-gray-300",
]);
export const zinc = useClass([
    base,
    "text-white bg-zinc-500/90 border-zinc-100",
    "hover:enabled:bg-zinc-500/70 hover:enabled:border-zinc-200",
    "active:enabled:bg-zinc-500 active:enabled:border-zinc-300",
    "disabled:border-zinc-200/80 disabled:bg-zinc-300/80",
]);

export const zinc_plain = useClass([
    base,
    "text-zinc-500 border-zinc-300",
    "hover:enabled:bg-zinc-500/90 hover:enabled:border-zinc-200 hover:enabled:text-white",
    "active:enabled:bg-zinc-600/90 active:enabled:border-zinc-300",
    "disabled:border-zinc-200/80 disabled:text-zinc-300",
]);

export const zinc_link = useClass([
    base,
    "text-zinc-500 border-transparent",
    "hover:enabled:text-zinc-400",
    "active:enabled:text-zinc-600",
    "disabled:text-zinc-300",
]);
export const neutral = useClass([
    base,
    "text-white bg-neutral-500/90 border-neutral-100",
    "hover:enabled:bg-neutral-500/70 hover:enabled:border-neutral-200",
    "active:enabled:bg-neutral-500 active:enabled:border-neutral-300",
    "disabled:border-neutral-200/80 disabled:bg-neutral-300/80",
]);

export const neutral_plain = useClass([
    base,
    "text-neutral-500 border-neutral-300",
    "hover:enabled:bg-neutral-500/90 hover:enabled:border-neutral-200 hover:enabled:text-white",
    "active:enabled:bg-neutral-600/90 active:enabled:border-neutral-300",
    "disabled:border-neutral-200/80 disabled:text-neutral-300",
]);

export const neutral_link = useClass([
    base,
    "text-neutral-500 border-transparent",
    "hover:enabled:text-neutral-400",
    "active:enabled:text-neutral-600",
    "disabled:text-neutral-300",
]);
export const stone = useClass([
    base,
    "text-white bg-stone-500/90 border-stone-100",
    "hover:enabled:bg-stone-500/70 hover:enabled:border-stone-200",
    "active:enabled:bg-stone-500 active:enabled:border-stone-300",
    "disabled:border-stone-200/80 disabled:bg-stone-300/80",
]);

export const stone_plain = useClass([
    base,
    "text-stone-500 border-stone-300",
    "hover:enabled:bg-stone-500/90 hover:enabled:border-stone-200 hover:enabled:text-white",
    "active:enabled:bg-stone-600/90 active:enabled:border-stone-300",
    "disabled:border-stone-200/80 disabled:text-stone-300",
]);

export const stone_link = useClass([
    base,
    "text-stone-500 border-transparent",
    "hover:enabled:text-stone-400",
    "active:enabled:text-stone-600",
    "disabled:text-stone-300",
]);
