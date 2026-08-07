"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { navigation } from "@/config/navigation";
import { socialLinks } from "@/config/social";
import { cn } from "@/lib/utils";

const drawerTransitionDuration = 200;

export function MobileNavigation() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<number | undefined>(undefined);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setIsMounted(false);
      triggerRef.current?.focus();
    }, drawerTransitionDuration);
  }, []);

  const openMenu = () => {
    window.clearTimeout(closeTimerRef.current);
    setIsMounted(true);
    window.requestAnimationFrame(() => setIsOpen(true));
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusableElements = () =>
      drawerRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      ) ?? [];

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const elements = Array.from(focusableElements());
      const firstElement = elements[0];
      const lastElement = elements.at(-1);

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    drawerRef.current?.querySelector<HTMLElement>("button")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, isOpen]);

  useEffect(
    () => () => window.clearTimeout(closeTimerRef.current),
    [],
  );

  const portalTarget =
    typeof document === "undefined" ? null : document.body;

  return (
    <>
      <div className="xl:hidden">
        <button
          ref={triggerRef}
          type="button"
          onClick={isOpen ? closeMenu : openMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex size-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Menu aria-hidden="true" className="size-6" />
        </button>
      </div>

      {portalTarget &&
        createPortal(
          isMounted && (
            <div className="fixed inset-0 z-[100] isolate">
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className={cn(
              "absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-200",
              isOpen ? "opacity-100" : "opacity-0",
            )}
          />

          <aside
            ref={drawerRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Primary navigation"
            className={cn(
              "absolute inset-y-0 right-0 flex w-[92vw] max-w-none flex-col border-l border-border bg-background p-6 shadow-2xl transition-transform duration-200 ease-out sm:p-8 md:w-[420px]",
              isOpen ? "translate-x-0" : "translate-x-full",
            )}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-muted-foreground">
                Navigation
              </span>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="inline-flex size-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="mt-12 space-y-3">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "block rounded-lg px-5 py-4 text-lg font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive && "bg-muted text-foreground",
                    )}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto border-t border-border pt-6">
              <p className="text-sm font-semibold text-muted-foreground">
                Follow Shivam
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  GitHub
                </a>

                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  YouTube
                </a>
              </div>
            </div>
          </aside>
            </div>
          ),
          portalTarget,
        )}
    </>
  );
}
