import { heroContent } from "@/content/home/hero";
import { Button } from "@/components/ui/button";

export function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button size="lg">
        {heroContent.primaryButton}
      </Button>

      <Button variant="outline" size="lg">
        {heroContent.secondaryButton}
      </Button>
    </div>
  );
}