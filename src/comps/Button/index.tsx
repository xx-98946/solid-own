import type { JSX } from "solid-js";
import * as styles from "./styles.ts";

interface IButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: IButtonProps) {
    return <button {...props}></button>;
}

Button.styles = styles;
