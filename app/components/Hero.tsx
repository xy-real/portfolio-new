import { ArrowDownRight, ArrowRight, ExternalLink, GitBranch, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="hero-grid relative overflow-hidden px-6 py-16 text-cream sm:py-20 lg:min-h-[calc(100svh-4.5rem)] lg:py-24"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
        <div>
          <p className="mb-6 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-lime sm:text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-clay" aria-hidden="true" />
            Xyryll Jay Taneo · Full-stack developer
          </p>

          <h1
            id="hero-title"
            className="font-display max-w-4xl text-[clamp(3.5rem,8vw,7.75rem)] leading-[0.88] tracking-[-0.055em]"
          >
            Systems built for <span className="italic text-lime">real people.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/72 sm:text-xl">
            I design and build web and mobile platforms for student organizations and community operations—with dependable backends at the center.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-clay px-6 py-3.5 font-semibold text-ink transition-transform hover:-translate-y-1"
            >
              Explore my work
              <ArrowDownRight size={20} aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 font-semibold transition-colors hover:bg-cream hover:text-ink"
            >
              <Mail size={19} aria-hidden="true" />
              Get in touch
            </a>
          </div>

          <div className="mt-7 flex items-center gap-5 text-sm text-cream/65" aria-label="Social profiles">
            <a
              href="https://github.com/xy-real"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-lime"
            >
              <GitBranch size={18} aria-hidden="true" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/xyryll-jay-taneo-600822269/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-lime"
            >
              <ExternalLink size={18} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[29rem] lg:mr-3">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border-2 border-ink bg-clay sm:translate-x-6 sm:translate-y-6" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-2 border-cream bg-sage">
            <Image
              src="/self1.webp"
              alt="Portrait of Xyryll Jay Taneo"
              fill
              priority
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 60vw, 90vw"
              className="object-cover object-center"
            />
          </div>

          <div className="absolute -bottom-5 -left-3 max-w-[15rem] rotate-[-2deg] rounded-2xl border-2 border-ink bg-lime p-4 text-ink shadow-[6px_6px_0_#17231a] sm:-left-10 sm:p-5">
            <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em]">Current role</p>
            <p className="mt-1 text-lg font-bold leading-tight">Lead Backend Developer</p>
            <p className="mt-1 text-sm text-ink/65">VERIS ecosystem</p>
          </div>

          <div className="absolute -right-3 top-6 flex h-24 w-24 rotate-6 items-center justify-center rounded-full border-2 border-ink bg-sun p-3 text-center font-mono text-[0.65rem] font-bold uppercase leading-tight tracking-[0.12em] text-ink shadow-[4px_4px_0_#17231a] sm:-right-8">
            Experienced student leader
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 right-6 hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-cream/50 transition-colors hover:text-lime lg:flex"
      >
        Keep scrolling
        <ArrowRight size={16} className="rotate-90" aria-hidden="true" />
      </a>
    </section>
  );
}
