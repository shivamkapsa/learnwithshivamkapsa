import { Logo } from "@/components/shared/Logo";
import { DesktopNavigation } from "./DesktopNavigation";
import { NavbarActions } from "./NavbarActions";
import { MobileNavigation } from "./MobileNavigation";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />

        <DesktopNavigation />

        <NavbarActions />

        <MobileNavigation />
      </div>
    </header>
  );
}