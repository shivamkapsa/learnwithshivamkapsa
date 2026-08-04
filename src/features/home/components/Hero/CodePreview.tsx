export function CodePreview() {
    return (
      <div className="rounded-2xl border border-border bg-card p-6">
        <pre className="overflow-x-auto text-sm">
  {`const profile = {
    name: "Shivam Kapsa",
    role: "Frontend Engineer",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "Node.js"
    ]
  }`}
        </pre>
      </div>
    );
  }