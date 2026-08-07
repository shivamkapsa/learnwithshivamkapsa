"use client";

import { useMemo, useState } from "react";

import { searchIndex } from "../data";
import { search } from "../utils";
import type { SearchItem } from "../types/search";

export function useSearch() {
  const [query, setQuery] = useState("");

  const results: SearchItem[] = useMemo(() => {
    const value = query.trim();

    if (!value) {
      return searchIndex;
    }

    return search(searchIndex, value);
  }, [query]);

  return {
    query,
    setQuery,
    results,
  };
}