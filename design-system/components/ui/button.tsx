"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "mw" | "outline" | "default";

type ButtonSize = "xs" | "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-mw-yellow text-mw-black shadow-sm hover:bg-mw-dark-yellow",
  secondary: "bg-white text-mw-blue border border-mw-blue hover:bg-mw-blue/10",
  ghost: "bg-transparent text-mw-light-grey hover:bg-mw-blue/10",
  danger: "bg-mw-red text-white hover:bg-mw-dark-red",
  mw: "bg-mw-blue text-mw-white shadow-sm hover:bg-mw-dark-blue",
  outline: "bg-white text-mw-blue border border-mw-blue hover:bg-mw-blue/10",
  default: "bg-mw-blue text-white hover:bg-mw-dark-blue",
};

const sizeStyles: Record<ButtonSize, string> = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-base",
  lg: "px-5 py-3 text-lg",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, ...props }, ref) => (
    <button
      ref={ref}
      className={twMerge(
        "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-mw-blue disabled:cursor-not-allowed disabled:opacity-60",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    />
  ),
);

Button.displayName = "Button";
