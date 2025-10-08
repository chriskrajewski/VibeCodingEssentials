"use client";

import { forwardRef, TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, rows = 4, ...props }, ref) => (
  <textarea
    ref={ref}
    rows={rows}
    className={twMerge(
      "block w-full resize-y rounded-md border border-mw-light-grey bg-white px-3 py-2 text-sm text-mw-black shadow-sm focus:border-mw-blue focus:outline-none focus:ring-2 focus:ring-mw-blue/40 disabled:cursor-not-allowed disabled:bg-mw-light-grey/40 disabled:text-mw-grey",
      className,
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";
