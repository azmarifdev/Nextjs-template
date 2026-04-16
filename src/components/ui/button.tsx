"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", className = "", ...props },
  ref
) {
  const tone = variant === "secondary" ? "btn secondary" : variant === "danger" ? "btn danger" : "btn";

  return <button ref={ref} {...props} className={`${tone} ${className}`.trim()} />;
});
