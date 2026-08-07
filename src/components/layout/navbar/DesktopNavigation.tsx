"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation" className="hidden items-center gap-1 xl:flex">
      {navigation.map((item) => (
        (() => {
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive && "bg-muted text-foreground",
              )}
            >
              {item.title}
            </Link>
          );
        })()
      ))}
    </nav>
  );
}
