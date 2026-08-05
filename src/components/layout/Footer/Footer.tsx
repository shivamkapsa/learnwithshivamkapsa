import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";

import { footer } from "@/content/home/footer";

import { FooterColumn } from "./FooterColumn";

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo />

            <p className="mt-6 max-w-sm text-muted-foreground">
              {footer.description}
            </p>
          </div>

          <FooterColumn
            title="Quick Links"
            items={footer.quickLinks}
          />

          <FooterColumn
            title="Resources"
            items={footer.resources}
          />
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          {footer.copyright}
        </div>
      </Container>
    </footer>
  );
}