import { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline";
};

export function Badge({ variant = "default", className = "", ...props }: BadgeProps) {
  const variantClass = variant === "outline" ? "badge badge-outline" : "badge";
  return <span {...props} className={`${variantClass} ${className}`.trim()} />;
}
