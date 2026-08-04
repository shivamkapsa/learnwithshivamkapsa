import Link from "next/link";

export function NavbarActions() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <Link
        href="https://github.com/shivamkapsa"
        target="_blank"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        GitHub
      </Link>

      <Link
        href="https://youtube.com/@namasteshivam"
        target="_blank"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        YouTube
      </Link>
    </div>
  );
}