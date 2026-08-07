"use client";

import { useState } from "react";

import { SearchButton } from "../SearchButton";
import { SearchDialog } from "../SearchDialog/SearchDialog";


export function Search() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SearchButton
        onClick={() => setOpen(true)}
      />

      <SearchDialog
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}