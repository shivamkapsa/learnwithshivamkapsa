export type SearchType =
  | "course"
  | "note"
  | "resource"
  | "blog";

export interface SearchItem {
  id: string;

  type: SearchType;

  title: string;

  description: string;

  href: string;

  tags: string[];
}