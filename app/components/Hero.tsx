import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen px-6 py-20 flex items-center justify-center">
      {/* Hero content */}
      <div className="max-w-3xl w-full text-center">
        <div className="font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-4">Xyryll Jay Taneo</div>

        <div className="text-base sm:text-lg text-gray-500">
          Junior developer with a passion for building systems that solve real world problems.
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center justify-center gap-2"
          >
            View Projects
            <ArrowRight size={20} />
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
