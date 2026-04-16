"use client";

import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className = "", error, ...props },
  ref
) {
  const borderColor = error ? "#ef4444" : "var(--border)";

  return (
    <input
      ref={ref}
      {...props}
      className={`input ${className}`.trim()}
      style={{ borderColor }}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${props.name || props.id || "field"}-error` : undefined}
    />
  );
});
