import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center">
      {/* Hero content */}

      <div className="font-extrabold text-6xl mb-4">Xyryll Jay Taneo</div>

      <div className="text-lg text-gray-500">
        Junior developer with a passion for building systems that solve real world problems.
      </div>

      <div className="flex gap-4 mt-4">
        <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center gap-2">
          View Projects
          <ArrowRight size={20} />
        </button>

        <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 flex items-center gap-2">
          <Mail size={20} />
          Get in touch
        </button>
      </div>
    </section>
  );
}
