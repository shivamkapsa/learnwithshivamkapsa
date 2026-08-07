"use client";

import { useState } from "react";

import { SearchButton } from "../SearchButton";
import { SearchDialog } from "../SearchDialog/SearchDialog";
import { useSearch } from "../../hooks/useSearch";


export function Search() {
  const [open, setOpen] = useState(false);
  const {
    query,
    setQuery,
    results,
  } = useSearch();

  return (
    <>
      <SearchButton
        onClick={() => setOpen(true)}
      />

<SearchDialog
  open={open}
  onClose={() => setOpen(false)}
  query={query}
  onQueryChange={setQuery}
  results={results}
/>
    </>
  );
}