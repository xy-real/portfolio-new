import { Code } from "lucide-react";

export default function Header() {
  return (
    <section
      id="header"
      className="flex justify-between items-center py-4 px-8 shadow-sm border-b border-gray-200"
    >
      {/* Header content */}

      <a className="flex font-mono items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
        <Code size={24} />
        Portfolio
      </a>

      <nav className="flex gap-6">
        <a href="#about" className="text-gray-700 hover:text-black transition-colors font-medium">
          About
        </a>

        <a href="#skills" className="text-gray-700 hover:text-black transition-colors font-medium">
          Skills
        </a>

        <a href="#projects" className="text-gray-700 hover:text-black transition-colors font-medium">
          Projects
        </a>

        <a href="#contact" className="text-gray-700 hover:text-black transition-colors font-medium">
          Contact
        </a>
      </nav>
    </section>
  );
}
