import { Code2 } from "lucide-react";

const navigation = [
  { label: "About", href: "#about", mobileClassName: "hidden lg:inline" },
  { label: "Work", href: "#projects", mobileClassName: "" },
  { label: "Wins", href: "#achievements", mobileClassName: "hidden sm:inline" },
  { label: "Stack", href: "#skills", mobileClassName: "hidden md:inline" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-cream backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="flex shrink-0 items-center gap-2 font-mono font-bold tracking-tight transition-colors hover:text-lime"
          aria-label="Go to the top of the page"
        >
          <Code2 size={21} aria-hidden="true" />
          <span>xyryll.dev</span>
        </a>

        <nav aria-label="Primary navigation" className="flex items-center gap-3 text-xs font-medium sm:gap-5 sm:text-sm">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${item.mobileClassName} text-cream/70 transition-colors hover:text-cream`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-lime px-3.5 py-2 font-semibold text-ink transition-transform hover:-translate-y-0.5 sm:px-5"
          >
            Let&apos;s talk
          </a>
        </nav>
      </div>
    </header>
  );
}
