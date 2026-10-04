import { ArrowRight, ExternalLink, GitBranch, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="flex min-h-[calc(100svh-4rem)] items-center justify-center bg-white px-6 py-20"
    >
      <div className="w-full max-w-4xl text-center">
        <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 sm:text-sm">
          Full-stack developer · Computer science student · Student leader
        </p>
        <h1 id="hero-title" className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
          Xyryll Jay Taneo
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-gray-600 sm:text-xl">
          I build practical web and mobile systems for student organizations and community operations.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 rounded-lg bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
          >
            View Projects
            <ArrowRight size={20} aria-hidden="true" />
          </a>

          <a
            href="#contact"
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3 transition-colors hover:bg-gray-100"
          >
            <Mail size={20} aria-hidden="true" />
            Get in touch
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-5 text-sm text-gray-600" aria-label="Social profiles">
          <a
            href="https://github.com/xy-real"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-black"
          >
            <GitBranch size={18} aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/xyryll-jay-taneo-600822269/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-black"
          >
            <ExternalLink size={18} aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
