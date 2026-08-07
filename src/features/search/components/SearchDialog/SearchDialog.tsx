"use client";

import { X } from "lucide-react";

type SearchDialogProps = {
  open: boolean;
  onClose: () => void;
};

export function SearchDialog({
  open,
  onClose,
}: SearchDialogProps) {
  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="fixed left-1/2 top-24 z-[100] w-[95vw] max-w-[720px] -translate-x-1/2 rounded-2xl border border-border bg-background shadow-2xl">
        <div className="flex items-center justify-between border-b border-border p-4">
          <h2 className="text-lg font-semibold">
            Search
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="rounded-md p-2 hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-8 text-center text-muted-foreground">
          Search functionality will be available in the next step.
        </div>
      </div>
    </>
  );
}