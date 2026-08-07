"use client";

import { Search } from "lucide-react";

type Props = {
  onClick: () => void;
};

export function SearchButton({ onClick }: Props) {
  return (
    <>
      {/* Desktop */}
      <button
        type="button"
        onClick={onClick}
        aria-label="Open search"
        className="hidden xl:flex h-10 items-center gap-3 rounded-lg border border-border bg-background px-4 text-sm text-muted-foreground transition-colors hover:border-amber-500/40 hover:text-foreground"
      >
        <Search className="h-4 w-4" />

        <span>Search...</span>

        <kbd className="rounded border border-border px-2 py-0.5 text-xs">
          ⌘ K
        </kbd>
      </button>

      {/* Mobile / Tablet */}
      <button
        type="button"
        onClick={onClick}
        aria-label="Open search"
        className="inline-flex xl:hidden size-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted"
      >
        <Search className="size-5" />
      </button>
    </>
  );
}