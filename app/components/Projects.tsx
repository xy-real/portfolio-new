import { ArrowUpRight, Layers3 } from "lucide-react";
import Image from "next/image";

const toneStyles = {
  sage: {
    card: "bg-[#dfe9d9]",
    category: "text-moss",
    action: "bg-moss text-cream hover:bg-ink",
  },
  sand: {
    card: "bg-[#fff7e9]",
    category: "text-[#8b5b3f]",
    action: "bg-clay text-ink hover:bg-sun",
  },
  clay: {
    card: "bg-[#efd7c8]",
    category: "text-[#804329]",
    action: "bg-ink text-cream hover:bg-moss",
  },
  sun: {
    card: "bg-[#f8e2a9]",
    category: "text-[#795c12]",
    action: "bg-ink text-cream hover:bg-moss",
  },
  sky: {
    card: "bg-[#dce8e8]",
    category: "text-[#345c5e]",
    action: "bg-[#345c5e] text-cream hover:bg-ink",
  },
} as const;

type Project = {
  title: string;
  role: string;
  category: string;
  description: string;
  tech: string[];
  year: string;
  image: string;
  tone: keyof typeof toneStyles;
  featured?: boolean;
  imageFit?: "cover" | "contain";
  imagePadded?: boolean;
  link?: {
    href: string;
    label: string;
  };
};

const projects: Project[] = [
  {
    title: "USSC Connect",
    role: "Backend → Lead Backend",
    category: "VERIS ecosystem · Team project",
    description:
      "The VERIS development team built this council-specific interface for the VSU Supreme Student Council. I started as a backend developer, implementing workflows for attendance, member fines, and online payment tracking, and now lead backend development across the ecosystem.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    year: "2026",
    image: "/projects/ussc-connect.webp",
    imageFit: "contain",
    tone: "sage",
    featured: true,
    link: {
      href: "https://ussc-connect.fc-ssc.online/",
      label: "Visit live site",
    },
  },
  {
    title: "VERIS System",
    role: "Backend → Lead Backend",
    category: "VERIS ecosystem · Team project",
    description:
      "The team's general administrative interface gives council officers a broader view of student eligibility, organizational charges, and payment settlements. My contribution focuses on the shared backend and the data flows connecting it to the same database as USSC Connect.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    year: "2026",
    image: "/projects/veris-system.png",
    imageFit: "contain",
    tone: "sand",
    link: {
      href: "https://veris.fc-ssc.online/",
      label: "Visit live site",
    },
  },
  {
    title: "VERIS Student Portal",
    role: "Backend → Lead Backend",
    category: "VERIS ecosystem · Team project",
    description:
      "The team's student-facing portal lets students review payables across organizations, monitor clearance status, update records, and settle dues and fines remotely. I worked on the backend flows supporting these shared student services.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    year: "2026",
    image: "/projects/veris-student-portal.png",
    imageFit: "contain",
    tone: "clay",
    link: {
      href: "https://veris-student-portal.fc-ssc.online/",
      label: "Visit live site",
    },
  },
  {
    title: "Crisync",
    role: "Project Manager",
    category: "Community safety",
    description:
      "I coordinated the design of a mobile emergency-preparedness app that parses PAGASA data and keeps critical information available during unreliable connectivity through offline-resilient synchronization.",
    tech: ["Flutter", "Dart", "Supabase"],
    year: "2026",
    image: "/projects/crisync.png",
    imageFit: "contain",
    imagePadded: true,
    tone: "sun",
    link: {
      href: "https://github.com/xy-real/project_bihon",
      label: "View source code",
    },
  },
  {
    title: "CORAL System",
    role: "Backend",
    category: "Event operations",
    description:
      "I built backend workflows that replaced paper-based attendance during VSU Intramurals with centralized online check-ins and real-time participation records for event organizers.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    year: "2025",
    image: "/projects/coral-project.webp",
    imageFit: "contain",
    tone: "sky",
    link: {
      href: "https://checka-org.vercel.app/",
      label: "Visit live site",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-paper px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-clay">02 · Selected work</p>
            <h2 id="projects-title" className="font-display text-5xl leading-none tracking-[-0.04em] sm:text-7xl">
              Built around real workflows.
            </h2>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-ink/15 bg-cream p-5 text-muted-foreground lg:ml-auto lg:max-w-2xl">
            <Layers3 className="mt-1 shrink-0 text-moss" size={24} aria-hidden="true" />
            <p className="leading-relaxed">
              The VERIS ecosystem is developed by a team; I progressed from backend developer to lead backend developer for the current academic year. The remaining projects highlight product leadership and independent backend work.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const styles = toneStyles[project.tone];

            return (
              <article
                key={project.title}
                className={`${styles.card} group overflow-hidden rounded-[2rem] border-2 border-ink/15 shadow-[6px_6px_0_rgb(23_35_26_/_0.16)] transition-transform hover:-translate-y-1 ${project.featured ? "md:col-span-2 lg:grid lg:grid-cols-[1.15fr_0.85fr]" : "flex h-full flex-col"}`}
              >
                <div
                  className={`relative overflow-hidden border-ink/15 bg-white ${project.featured ? "aspect-[16/10] border-b-2 lg:aspect-auto lg:min-h-[31rem] lg:border-r-2 lg:border-b-0" : "aspect-[16/10] border-b-2"}`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    fill
                    sizes={project.featured ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                    className={`${project.imageFit === "contain" ? `object-contain ${project.imagePadded ? "p-10 sm:p-14" : ""}` : "object-cover"} transition-transform duration-500 group-hover:scale-[1.02]`}
                  />
                </div>

                <div className="flex grow flex-col p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className={`${styles.category} font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em]`}>
                        {project.category}
                      </p>
                      <h3 className="font-display mt-3 text-4xl leading-none tracking-[-0.035em] sm:text-5xl">{project.title}</h3>
                    </div>
                    <span className="shrink-0 rounded-full border border-ink/25 px-3 py-1 font-mono text-xs">{project.year}</span>
                  </div>

                  <span className="mt-5 w-fit rounded-full bg-ink px-3 py-1.5 font-mono text-[0.7rem] font-semibold text-cream">
                    {project.role}
                  </span>

                  <p className="mt-6 leading-relaxed text-ink/70">{project.description}</p>

                  <div className="mt-auto pt-6">
                    <ul className="flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                      {project.tech.map((tech) => (
                        <li key={tech} className="rounded-full border border-ink/20 bg-white/35 px-3 py-1 font-mono text-[0.68rem]">
                          {tech}
                        </li>
                      ))}
                    </ul>

                    {project.link && (
                      <a
                        href={project.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`${styles.action} mt-6 inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-colors`}
                      >
                        {project.link.label}
                        <ArrowUpRight size={17} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
