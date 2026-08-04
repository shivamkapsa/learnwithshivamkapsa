import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 transition-opacity hover:opacity-90"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 font-bold text-black">
        SM
      </div>

      <div>
        <h2 className="text-lg font-bold">
          LearnWithShivamKapsa
        </h2>

        <p className="text-xs text-muted-foreground">
          Learn • Build • Grow
        </p>
      </div>
    </Link>
  );
}