type Props = {
  content: string;
};

export function BlogContent({ content }: Props) {
  return (
    <article className="mt-12 rounded-2xl border border-border bg-card p-8">
      <div className="prose prose-invert max-w-none">
        <pre className="whitespace-pre-wrap font-sans leading-8">{content}</pre>
      </div>
    </article>
  );
}
