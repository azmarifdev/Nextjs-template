import { HTMLAttributes, ReactNode, forwardRef } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { children, className = "", ...props },
  ref
) {
  return (
    <div ref={ref} {...props} className={`card ${className}`.trim()}>
      {children}
    </div>
  );
});
