"use client";

import Link from "next/link";

import type { SearchItem } from "../../types/search";

type Props = {
  item: SearchItem;
  onSelect: () => void;
};

const badgeStyles = {
  course: "bg-blue-500/10 text-blue-400",
  note: "bg-green-500/10 text-green-400",
  blog: "bg-purple-500/10 text-purple-400",
  resource: "bg-amber-500/10 text-amber-400",
};

export function SearchResultCard({
  item,
  onSelect,
}: Props) {
  return (
    <Link
      href={item.href}
      onClick={onSelect}
      className="block rounded-xl border border-border p-4 transition-all hover:border-amber-500/40 hover:bg-muted"
    >
      <div className="flex items-center justify-between gap-4">

        <h3 className="font-semibold">
          {item.title}
        </h3>

        <span
          className={`rounded-full px-2 py-1 text-xs capitalize ${badgeStyles[item.type]}`}
        >
          {item.type}
        </span>

      </div>

      <p className="mt-2 text-sm text-muted-foreground">
        {item.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">

        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-muted px-2 py-1 text-xs"
          >
            {tag}
          </span>
        ))}

      </div>

    </Link>
  );
}