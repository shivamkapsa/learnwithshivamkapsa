import type { SearchItem } from "../types/search";

export function search(
  items: SearchItem[],
  query: string,
): SearchItem[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  return items.filter((item) => {
    const titleMatch = item.title
      .toLowerCase()
      .includes(normalizedQuery);

    const descriptionMatch = item.description
      .toLowerCase()
      .includes(normalizedQuery);

    const tagMatch = item.tags.some((tag) =>
      tag.toLowerCase().includes(normalizedQuery),
    );

    return (
      titleMatch ||
      descriptionMatch ||
      tagMatch
    );
  });
}