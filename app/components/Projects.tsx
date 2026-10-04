import { ArrowUpRight, Code2 } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  role: string;
  category: string;
  description: string;
  tech: string[];
  year: string;
  image: string;
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
    image: "/projects/veris-system.webp",
  },
  {
    title: "VERIS Student Portal",
    role: "Backend → Lead Backend",
    category: "VERIS ecosystem · Team project",
    description:
      "The team's student-facing portal lets students review payables across organizations, monitor clearance status, update records, and settle dues and fines remotely. I worked on the backend flows supporting these shared student services.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    year: "2026",
    image: "/projects/veris-student-portal.webp",
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
    link: {
      href: "https://checka-org.vercel.app/",
      label: "Visit live site",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 flex items-center gap-2">
            <Code2 size={24} aria-hidden="true" />
            <h2 id="projects-title" className="font-mono text-2xl font-bold">Projects</h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-600">
            Selected team and individual systems for student services, organizational operations, and community safety. The VERIS ecosystem is developed by a team; I progressed from backend developer to lead backend developer for the current academic year.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-gray-400"
            >
              <div className="relative aspect-video overflow-hidden bg-accent">
                <Image
                  src={project.image}
                  alt={`${project.title} interface preview`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex grow flex-col p-6 sm:p-7">
                <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {project.category}
                </p>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                  <span className="shrink-0 font-mono text-sm text-muted-foreground">{project.year}</span>
                </div>

                <span className="mt-3 w-fit rounded-full bg-black px-3 py-1 font-mono text-xs text-white">
                  {project.role}
                </span>

                <p className="mt-5 leading-relaxed text-gray-600">{project.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                  {project.tech.map((tech) => (
                    <li key={tech} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-gray-600">
                      {tech}
                    </li>
                  ))}
                </ul>

                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold underline-offset-4 hover:underline"
                  >
                    {project.link.label}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
