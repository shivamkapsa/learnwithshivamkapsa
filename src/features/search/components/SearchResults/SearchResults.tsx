"use client";

import { SearchResultCard } from "../SearchResultCard";

import type { SearchItem } from "../../types/search";

type Props = {
  results: SearchItem[];
  onSelect: () => void;
};

export function SearchResults({
  results,
  onSelect,
}: Props) {
  if (!results.length) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <h3 className="text-lg font-semibold">
          No results found
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Try searching for React, HTML, JavaScript, Next.js or Node.js.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {results.map((item) => (
        <SearchResultCard
          key={item.id}
          item={item}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}