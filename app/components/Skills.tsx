import { Code2 } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "SQL", "PHP", "C", "C++"],
  },
  {
    title: "Frameworks & UI",
    items: ["React", "Next.js", "Flutter", "Tailwind CSS"],
  },
  {
    title: "Data & Tools",
    items: ["Firebase / Firestore", "Supabase", "MySQL", "Git", "GitHub", "Vercel", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-neutral-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <div className="mb-4 flex items-center gap-2">
            <Code2 size={24} aria-hidden="true" />
            <h2 id="skills-title" className="font-mono text-2xl font-bold">Tech Stack</h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-600">
            Technologies I use across the web, mobile, and data layers of my projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-border bg-white p-6">
              <h3 className="mb-5 text-lg font-semibold">{group.title}</h3>
              <ul className="flex flex-wrap gap-2" aria-label={group.title}>
                {group.items.map((item) => (
                  <li key={item} className="rounded-full bg-neutral-100 px-3 py-1.5 font-mono text-sm text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
