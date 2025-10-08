"use client";

import { forwardRef, LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={twMerge("text-sm font-medium text-mw-grey", className)}
    {...props}
  />
));

Label.displayName = "Label";
