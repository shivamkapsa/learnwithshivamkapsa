import { heroContent } from "@/content/home/hero";

export function HeroStats() {
  return (
    <div className="mt-16 flex gap-10">
      {heroContent.stats.map((stat) => (
        <div key={stat.label}>
          <h3 className="text-3xl font-bold">{stat.value}</h3>

          <p className="text-sm text-muted-foreground">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}