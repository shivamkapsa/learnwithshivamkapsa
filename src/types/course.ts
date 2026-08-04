export interface Course {

    id:number;
  
    slug:string;
  
    title:string;
  
    description:string;
  
    duration:string;
  
    lessons:number;
  
    level:"Beginner" | "Intermediate" | "Advanced";
  
    free:boolean;
  
    tags:string[];
  
    image:string;
  
  }