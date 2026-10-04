import { ArrowUpRight, ExternalLink, GitBranch, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="overflow-hidden bg-clay px-6 py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.18em]">05 · Contact</p>
            <h2 id="contact-title" className="font-display max-w-4xl text-6xl leading-[0.9] tracking-[-0.05em] sm:text-8xl lg:text-9xl">
              Let&apos;s make something useful.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl">
              I&apos;m open to software development opportunities, project collaborations, and conversations about building practical systems for real users.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <a
              href="mailto:xyrylljay@gmail.com"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-base font-bold text-cream transition-transform hover:-translate-y-1 sm:text-lg"
            >
              <Mail size={21} aria-hidden="true" />
              Send me an email
              <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </a>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/xyryll-jay-taneo-600822269/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink/35 px-5 py-3 font-semibold transition-colors hover:bg-lime"
              >
                <ExternalLink size={18} aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href="https://github.com/xy-real"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink/35 px-5 py-3 font-semibold transition-colors hover:bg-lime"
              >
                <GitBranch size={18} aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-20 flex flex-col gap-3 border-t-2 border-ink/20 pt-6 font-mono text-xs uppercase tracking-[0.12em] text-ink/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Xyryll Jay Taneo</p>
          <p>Built with Next.js · Designed with intention</p>
        </footer>
      </div>
    </section>
  );
}
