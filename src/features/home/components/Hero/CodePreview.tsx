export function CodePreview() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111] shadow-2xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">

        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <span className="text-xs text-zinc-500">
          profile.ts
        </span>

      </div>

      {/* Code */}

      <pre className="overflow-x-auto p-8 text-sm leading-8 text-zinc-300">
{`const developer = {

  name: "Shivam Kapsa",

  role: "Frontend Engineer",

  skills: [
    "React",
    "Next.js",
    "Angular",
    "Node.js",
    "TypeScript"
  ],

  mission:
    "Build • Learn • Teach"
}`}
      </pre>

      {/* Footer */}

      <div className="flex flex-wrap gap-3 border-t border-white/10 px-6 py-5">

        {[
          "React",
          "Next.js",
          "Angular",
          "TypeScript",
          "Node.js",
        ].map((item) => (
          <span
            key={item}
            className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs text-amber-400"
          >
            {item}
          </span>
        ))}

      </div>

    </div>
  );
}