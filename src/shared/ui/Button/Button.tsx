import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/shared/lib";
import styles from "./Button.module.scss";

type ButtonSize = "xs" | "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary" | "tertiary" | "outline" | "ghost";
type ButtonShape = "rounded" | "circle" | "pill";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    size = "sm",
    variant = "primary",
    shape = "pill",
    disabled = false,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      disabled={disabled}
      className={cn(
        styles.button,
        className,
        styles[size],
        styles[variant],
        styles[shape],
        { [styles.disabled]: disabled }
      )}
      id="button"
    >
      {children}
    </button>
  );
};

export default Button;
