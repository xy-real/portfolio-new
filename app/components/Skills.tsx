import { Braces, Code2, Database } from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Languages",
    icon: Braces,
    items: ["Java", "JavaScript", "TypeScript", "SQL", "PHP", "C", "C++"],
    className: "bg-lime text-ink",
    itemClassName: "border-ink/20",
  },
  {
    number: "02",
    title: "Frameworks & UI",
    icon: Code2,
    items: ["React", "Next.js", "Flutter", "Tailwind CSS"],
    className: "border border-cream/20 bg-cream/5 text-cream",
    itemClassName: "border-cream/20",
  },
  {
    number: "03",
    title: "Data & Tools",
    icon: Database,
    items: ["Firebase / Firestore", "Supabase", "MySQL", "Git", "GitHub", "Vercel", "Figma"],
    className: "bg-clay text-ink",
    itemClassName: "border-ink/20",
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="ink-grid px-6 py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-lime">04 · Toolkit</p>
            <h2 id="skills-title" className="font-display text-5xl leading-none tracking-[-0.04em] sm:text-7xl">
              The tools behind the work.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-cream/65 lg:justify-self-end">
            A practical stack spanning interfaces, backend services, mobile applications, databases, and product delivery.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {skillGroups.map(({ number, title, icon: Icon, items, className, itemClassName }) => (
            <article
              key={title}
              className={`${className} flex min-h-[25rem] flex-col rounded-[2rem] p-7 transition-transform hover:-translate-y-1 sm:p-8`}
            >
              <div className="flex items-start justify-between">
                <Icon size={31} strokeWidth={1.8} aria-hidden="true" />
                <span className="font-display text-4xl leading-none opacity-45">{number}</span>
              </div>
              <h3 className="font-display mt-10 text-4xl leading-none">{title}</h3>

              <ul className="mt-auto grid grid-cols-2 gap-x-5 pt-10" aria-label={title}>
                {items.map((item) => (
                  <li key={item} className={`${itemClassName} border-b py-3 font-mono text-xs sm:text-sm`}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
