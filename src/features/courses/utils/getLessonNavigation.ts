type LessonNavigation = {
    previous: {
      title: string;
      href: string;
    } | null;
  
    next: {
      title: string;
      href: string;
    } | null;
  };
  
  export function getLessonNavigation(): LessonNavigation {
    return {
      previous: {
        title: "Course Overview",
        href: "/courses/html",
      },
  
      next: {
        title: "HTML Elements",
        href: "/courses/html/html-elements",
      },
    };
  }