"use client";

import { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type DialogProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
};

export function Dialog({ open, title, onClose, children }: DialogProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center p-4"
      style={{ background: "rgba(2, 6, 23, 0.45)" }}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <Card className="stack w-full max-w-lg">
        <div className="row between">
          <h3>{title}</h3>
          <Button type="button" variant="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
        <div>{children}</div>
      </Card>
    </div>
  );
}
