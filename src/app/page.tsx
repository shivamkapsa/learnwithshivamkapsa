import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/features/home/components/Hero";
import { CourseSection } from "@/features/home/components/Courses";
import { LearningPaths } from "@/features/home/components/LearningPaths";
import { LatestNotes } from "@/features/home/components/LatestNotes";
import { LatestVideos } from "@/features/home/components/LatestVideos";
import { FeaturedProjects } from "@/features/home/components/FeaturedProjects";
import { Resources } from "@/features/home/components/Resources";
import { AboutPreview } from "@/features/home/components/AboutPreview";
import { ContactCTA } from "@/features/home/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CourseSection />
      <LearningPaths />
      <LatestNotes />
      <LatestVideos />
      <FeaturedProjects />
      <Resources />
      <AboutPreview />
      <ContactCTA />
      
    </>
  );
}