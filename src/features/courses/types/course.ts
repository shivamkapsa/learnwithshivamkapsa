export interface Course {

    id: number;
  
    slug: string;
  
    title: string;
  
    description: string;
  
    level: "Beginner" | "Intermediate" | "Advanced";
  
    duration: string;
  
    lessons: number;
  
    thumbnail: string;
  
    technologies: string[];
  
  }