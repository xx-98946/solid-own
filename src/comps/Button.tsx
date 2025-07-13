import { useClass } from "@/utils";
import type { JSX } from "solid-js";

interface IButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: IButtonProps) {
    return <button {...props}></button>;
}

Button.base = useClass([
    "inline-block text-center select-none duration-100 border px-5 py-2 rounded-sm border-gray-300 cursor-pointer",
    "disabled:cursor-not-allowed",
]);

Button.default = useClass([
    Button.base,
    "border-gray-300 text-gray-600 cursor-pointer",
    "hover:enabled:bg-blue-100 hover:enabled:text-blue-500 hover:enabled:border-blue-100",
    "active:enabled:bg-blue-200 active:enabled:text-blue-600 active:enabled:border-blue-200",
    "disabled:text-gray-300 disabled:border-gray-200",
]);

Button.primary = useClass([
    Button.base,
    "text-white bg-blue-500/90 border-blue-100",
    "hover:enabled:bg-blue-500/70 hover:enabled:border-blue-200",
    "active:enabled:bg-blue-500 active:enabled:border-blue-300",
    "disabled:border-blue-200/80 disabled:bg-blue-300/80",
]);

Button.success = useClass([
    Button.base,
    "text-white bg-green-500/90 border-green-100",
    "hover:enabled:bg-green-500/70 hover:enabled:border-green-200",
    "active:enabled:bg-green-500 active:enabled:border-green-300",
    "disabled:border-green-200/80 disabled:bg-green-300/80",
]);

Button.info = useClass([
    Button.base,
    "text-white bg-gray-500/80 border-gray-100",
    "hover:enabled:bg-gray-500/60 hover:enabled:border-gray-200",
    "active:enabled:bg-gray-500 active:enabled:border-gray-300",
    "disabled:border-gray-200 disabled:bg-gray-300",
]);

Button.warning = useClass([
    Button.base,
    "text-white bg-orange-500/80 border-orange-100",
    "hover:enabled:bg-orange-500/60 hover:enabled:border-orange-200",
    "active:enabled:bg-orange-500 active:enabled:border-orange-300",
    "disabled:border-orange-200/80 disabled:bg-orange-300/80",
]);

Button.danger = useClass([
    Button.base,
    "text-white bg-red-500/80 border-red-100",
    "hover:enabled:bg-red-500/60 hover:enabled:border-red-200",
    "active:enabled:bg-red-500 active:enabled:border-red-300",
    "disabled:border-red-200/80 disabled:bg-red-300/80",
]);

Button.primary_plain = useClass([
    Button.base,
    "text-blue-500 border-blue-300",
    "hover:enabled:bg-blue-500/90 hover:enabled:border-blue-200 hover:enabled:text-white",
    "active:enabled:bg-blue-600/90 active:enabled:border-blue-300",
    "disabled:border-blue-200/80 disabled:bg-blue-300/80",
]);

Button.success_plain = useClass([
    Button.base,
    "text-green-500 border-green-300",
    "hover:enabled:bg-green-500/90 hover:enabled:border-green-200 hover:enabled:text-white",
    "active:enabled:bg-green-600/90 active:enabled:border-green-300",
    "disabled:border-green-200/80 disabled:bg-green-300/80",
]);

Button.info_plain = useClass([
    Button.base,
    "text-gray-500 border-gray-300",
    "hover:enabled:bg-gray-500/90 hover:enabled:border-gray-200 hover:enabled:text-white",
    "active:enabled:bg-gray-600/90 active:enabled:border-gray-300",
    "disabled:border-gray-200/80 disabled:bg-gray-300/80",
]);

Button.warning_plain = useClass([
    Button.base,
    "text-orange-500 border-orange-300",
    "hover:enabled:bg-orange-500/90 hover:enabled:border-orange-200 hover:enabled:text-white",
    "active:enabled:bg-orange-600/90 active:enabled:border-orange-300",
    "disabled:border-orange-200/80 disabled:bg-orange-300/80",
]);

Button.danger_plain = useClass([
    Button.base,
    "text-red-500 border-red-300",
    "hover:enabled:bg-red-500/90 hover:enabled:border-red-200 hover:enabled:text-white",
    "active:enabled:bg-red-600/90 active:enabled:border-red-300",
    "disabled:border-red-200/80 disabled:bg-red-300/80",
]);

Button.default_link = useClass([
    Button.base,
    "text-gray-700 border-transparent",
    "hover:enabled:text-gray-500",
    "active:enabled:text-gray-900",
    "disabled:text-gray:400",
]);

Button.primary_link = useClass([
    Button.base,
    "text-blue-500 border-transparent",
    "hover:enabled:text-blue-400",
    "active:enabled:text-blue-600",
    "disabled:text-blue-300",
]);

Button.success_link = useClass([
    Button.base,
    "text-green-500 border-transparent",
    "hover:enabled:text-green-400",
    "active:enabled:text-green-600",
    "disabled:text-green-300",
]);

Button.info_link = useClass([
    Button.base,
    "text-gray-500 border-transparent",
    "hover:enabled:text-gray-400",
    "active:enabled:text-gray-600",
    "disabled:text-gray-300",
]);

Button.warning_link = useClass([
    Button.base,
    "text-orange-500 border-transparent",
    "hover:enabled:text-orange-400",
    "active:enabled:text-orange-600",
    "disabled:text-orange-300",
]);
Button.danger_link = useClass([
    Button.base,
    "text-red-500 border-transparent",
    "hover:enabled:text-red-400",
    "active:enabled:text-red-600",
    "disabled:text-red-300",
]);
