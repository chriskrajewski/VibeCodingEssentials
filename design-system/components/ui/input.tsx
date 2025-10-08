"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={twMerge(
        "block w-full rounded-md border border-mw-light-grey bg-white px-3 py-2 text-sm text-mw-black shadow-sm focus:border-mw-blue focus:outline-none focus:ring-2 focus:ring-mw-blue/40 disabled:cursor-not-allowed disabled:bg-mw-light-grey/40 disabled:text-mw-grey",
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = "Input";
