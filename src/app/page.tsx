import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/features/home/components/Hero";
import { CourseSection } from "@/features/home/components/Courses";
import { LearningPaths } from "@/features/home/components/LearningPaths";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CourseSection />
      <LearningPaths />
    </>
  );
}