import Link from "next/link";

type Item = {
  title: string;
  href: string;
};

type Props = {
  title: string;
  items: Item[];
};

export function FooterColumn({
  title,
  items,
}: Props) {
  return (
    <div>
      <h3 className="mb-5 text-lg font-semibold">
        {title}
      </h3>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className="text-muted-foreground transition hover:text-amber-500"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}