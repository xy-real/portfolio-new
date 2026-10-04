import { ArrowUpRight, Braces, Network, Users } from "lucide-react";

const highlights = [
  {
    icon: Network,
    eyebrow: "Current role",
    title: "Lead Backend Developer",
    detail: "VERIS ecosystem",
    className: "bg-lime",
  },
  {
    icon: Users,
    eyebrow: "Leadership experience",
    title: "Experienced Student Leader",
    detail: "Former Acting President · VSU Faculty of Computing SSC",
    className: "bg-clay",
  },
  {
    icon: Braces,
    eyebrow: "What I build",
    title: "Web + mobile systems",
    detail: "Designed around real workflows",
    className: "bg-paper",
  },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="paper-grid px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-moss">01 · About</p>
            <h2 id="about-title" className="font-display text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl">
              Close to the users. Deep in the system.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            <p>
              I turn manual community workflows into dependable digital products. My work spans organization management, online payments, attendance, and emergency information.
            </p>
            <p>
              Student leadership has been a major part of my time at VSU, including serving as Acting President of the Faculty of Computing Supreme Student Council. That experience shapes how I build: close to real users, clear in communication, and accountable for software that has to work outside the demo.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 pt-2 text-base font-bold text-ink underline decoration-clay decoration-2 underline-offset-8"
            >
              See how that translates into products
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {highlights.map(({ icon: Icon, eyebrow, title, detail, className }) => (
            <article
              key={eyebrow}
              className={`${className} min-h-56 rounded-[1.75rem] border-2 border-ink p-6 shadow-[5px_5px_0_#17231a] transition-transform hover:-translate-y-1`}
            >
              <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
              <p className="mt-8 font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-ink/60">{eyebrow}</p>
              <h3 className="mt-2 text-2xl font-bold leading-tight">{title}</h3>
              <p className="mt-2 text-sm text-ink/65">{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
