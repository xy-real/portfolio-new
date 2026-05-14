import { ArrowUpRight, Code2 } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "USSC Connect",
      role: "Backend",
      desc: "Built to streamline administrative overhead for the VSU Supreme Student Council, this platform completely digitalizes organization management. It provides admins with robust tools for tracking attendance and managing member fines, while offering students a frictionless, integrated portal to settle their dues online.",
      tech: ["React", "Next.js", "Tailwind CSS", "Firebase", "Typescript"],
      year: "2026",
      image:
        "/projects/ussc-connect.png",
    },
    {
      title: "CAMP-PAWS",
      role: "Full-Stack",
      desc: "Currently in development as a university thesis for the Faculty of Veterinary Medicine, this system tackles campus animal welfare. It utilizes crowdsourced geospatial data to help faculty and students efficiently map, monitor, and manage the health and location of stray animals within the VSU grounds.",
      tech: ["React", "Next.js", "Tailwind CSS", "Supabase", "Typescript"],
      year: "2026",
      image:
        "/projects/camp-paws.png",
    },
    {
      title: "CORAL System",
      role: "Backend",
      desc: "The foundational web application that ultimately inspired USSC Connect. Engineered specifically for the Luring Sirens faction during VSU Intramurals, CORAL replaces slow, paper-based attendance logging with a centralized, online check-in process. It allowed event organizers to easily track student participation and manage data in real-time.",
      tech: ["React", "Next.js", "Tailwind CSS", "Firebase", "Typescript"],
      year: "2023",
      image:
        "/projects/coral-project.png",
    },
    {
      title: "Crisync",
      role: "Project Manager",
      desc: "Designed to enhance community safety during severe weather events, this mobile app delivers critical, real-time alerts by directly parsing PAGASA data. Because network reliability drops during disasters, the system is architected with Supabase to provide offline-resilient data synchronization, ensuring users retain access to vital preparedness information even when connectivity is lost.",
      tech: ["Flutter", "Dart", "Supabase"],
      year: "2023",
      image:
        "/projects/crisync.png",
    },
  ];

  return (
    <section id="projects" className="px-6 py-24 bg-accent">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <Code2 size={24} />
            <div className="font-mono text-2xl font-bold">PROJECTS</div>
          </div>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href="#"
              className="group block bg-background rounded-2xl border border-border hover:border-foreground transition-all overflow-hidden"
            >
              <div className="relative aspect-2/1 overflow-hidden bg-accent">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold group-hover:underline">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 text-xs font-mono bg-foreground text-background rounded-full">
                        {project.role}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full border border-border font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground ml-4">
                    <span>{project.year}</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}