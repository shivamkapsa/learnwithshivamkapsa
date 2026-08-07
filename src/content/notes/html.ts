import type { Note } from "@/features/notes/types/note";

export const htmlNote: Note = {
  id: 1,

  slug: "html",

  title: "HTML Complete Notes",

  description:
    "Complete HTML notes from beginner to advanced.",

  content: `# HTML Complete Notes

HTML is the standard markup language used to structure content on the web. It gives browsers the semantic information they need to present a page correctly and accessibly.

## Start with semantic structure

Use elements according to their meaning. A document should usually include a single \`h1\`, descriptive headings in order, and landmarks such as \`header\`, \`main\`, \`nav\`, \`section\`, and \`footer\`.

## Build accessible content

Write meaningful text for links, associate every form control with a label, and provide useful alternative text for informative images. Semantic HTML is the foundation of an inclusive interface.

## Keep documents valid

Use a complete document structure with \`<!doctype html>\`, \`html\`, \`head\`, and \`body\`. Add page-specific metadata in the head and choose HTML elements for their purpose before reaching for CSS or JavaScript.`,

  category: "Programming",

  tags: [
    "HTML",
    "Frontend",
    "Web Development",
  ],

  readingTime: "45 min",

  thumbnail: "/images/notes/html.png",
};
