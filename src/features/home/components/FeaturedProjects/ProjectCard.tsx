import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
};

export function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-card p-6">
      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-muted-foreground">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-400"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-8 flex gap-6">
        {github && (
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-amber-400 transition-colors"
          >
         <FaGithub className="h-5 w-5" />
            <span>GitHub</span>
          </Link>
        )}

        {live && (
          <Link
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-amber-400 transition-colors"
          >
            <ExternalLink size={18} />
            <span>Live Demo</span>
          </Link>
        )}
      </div>
    </div>
  );
}