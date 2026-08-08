import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

type Props = {
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  youtubeUrl: string;
};

export function VideoCard({
  title,
  description,
  duration,
  thumbnail,
  youtubeUrl,
}: Props) {
  return (
    <Link
      href={youtubeUrl}
      target="_blank"
      className="group overflow-hidden rounded-3xl border border-white/10 bg-card transition-all hover:-translate-y-1 hover:border-red-500/40"
    >
      <div className="relative aspect-video">
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover:opacity-100">
          <Play className="h-14 w-14 fill-white text-white" />
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm text-red-400">
          {duration}
        </p>

        <h3 className="mt-3 text-xl font-bold">
          {title}
        </h3>

        <p className="mt-4 text-muted-foreground">
          {description}
        </p>
      </div>
    </Link>
  );
}