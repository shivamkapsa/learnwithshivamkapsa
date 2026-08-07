"use client";

import { Search, X } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchInput({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative">

      <Search
        className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
      />

      <input
        autoFocus
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search courses, notes, blogs and resources..."
        className="h-12 w-full rounded-xl border border-border bg-background pl-11 pr-12 text-sm outline-none transition focus:border-amber-500"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 hover:bg-muted"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}

    </div>
  );
}