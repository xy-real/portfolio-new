import { Code2 } from "lucide-react";

const navigation = [
  { label: "About", href: "#about", mobileClassName: "hidden md:inline" },
  { label: "Projects", href: "#projects", mobileClassName: "" },
  { label: "Stack", href: "#skills", mobileClassName: "hidden md:inline" },
  { label: "Achievements", href: "#achievements", mobileClassName: "" },
  { label: "Contact", href: "#contact", mobileClassName: "" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#hero"
          className="flex shrink-0 items-center gap-2 font-mono font-bold transition-opacity hover:opacity-65"
          aria-label="Go to the top of the page"
        >
          <Code2 size={21} aria-hidden="true" />
          <span>XY</span>
        </a>

        <nav aria-label="Primary navigation" className="flex items-center gap-3 text-xs font-medium sm:gap-5 sm:text-sm">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${item.mobileClassName} text-gray-600 transition-colors hover:text-black`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
