import { Container } from "@/components/shared/Container";
import { latestVideos } from "@/content/home/latestVideos";
import { VideoCard } from "./VideoCard";

export function LatestVideos() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-14">
          <p className="font-semibold text-red-500">
            YOUTUBE
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Latest Videos
          </h2>

          <p className="mt-5 max-w-2xl text-muted-foreground">
            Watch tutorials, interview preparation and programming concepts on YouTube.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestVideos.map((video) => (
            <VideoCard
              key={video.id}
              {...video}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}