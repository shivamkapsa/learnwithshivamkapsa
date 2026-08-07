import { Logo } from "@/components/shared/Logo";
import { DesktopNavigation } from "./DesktopNavigation";
import { NavbarActions } from "./NavbarActions";
import { MobileNavigation } from "./MobileNavigation";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <DesktopNavigation />

        <NavbarActions />

        <MobileNavigation />
      </div>
    </header>
  );
}
