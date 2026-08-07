"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isMac = navigator.platform
        .toUpperCase()
        .includes("MAC");

      const openShortcut =
        (isMac && event.metaKey && event.key === "k") ||
        (!isMac && event.ctrlKey && event.key === "k");

      if (openShortcut) {
        event.preventDefault();
        setOpen(true);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, []);

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