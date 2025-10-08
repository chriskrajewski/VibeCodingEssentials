import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type BadgeTone = "info" | "success" | "warning" | "danger" | "neutral";

const toneStyles: Record<BadgeTone, string> = {
  info: "bg-mw-blue/15 text-mw-dark-blue",
  success: "bg-mw-green/20 text-mw-dark-green",
  warning: "bg-mw-orange/20 text-mw-dark-grey",
  danger: "bg-mw-red/20 text-mw-dark-red",
  neutral: "bg-mw-light-grey/30 text-mw-grey",
};

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={twMerge(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
