import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return <div className={twMerge("mw-card p-6", className)}>{children}</div>;
}

interface CardHeaderProps {
  title?: string;
  description?: string;
  action?: ReactNode;
  children?: ReactNode;
}

export function CardHeader({ title, description, action, children }: CardHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-mw-light-grey/40 pb-4">
      <div className="space-y-1.5">
        {title && <h2 className="text-xl font-semibold">{title}</h2>}
        {children}
        {description && <p className="text-sm text-mw-grey">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={twMerge("pt-4 space-y-4", className)}>{children}</div>;
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={twMerge("text-lg font-semibold text-mw-black", className)}>{children}</h3>;
}

export function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={twMerge("flex items-center justify-end gap-3 border-t border-mw-light-grey/40 pt-4", className)}>
      {children}
    </div>
  );
}
