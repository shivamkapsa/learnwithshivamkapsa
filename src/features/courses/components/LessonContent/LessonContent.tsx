type Props = {
    content: string;
  };
  
  export function LessonContent({
    content,
  }: Props) {
    return (
      <section className="prose prose-invert mt-12 max-w-none">
        <pre className="whitespace-pre-wrap font-sans">
          {content}
        </pre>
      </section>
    );
  }