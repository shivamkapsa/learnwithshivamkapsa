export interface Blog {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  readingTime: string;
}
