import { Code } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="px-8 py-20 bg-neutral-50">
      {/* Skills & Technologies */}

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-5">
          <Code size={24} />
          <div className="font-mono text-2xl font-bold">Tech Stack</div>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Frontend</h3>
            <p className="text-gray-600 leading-relaxed">
              React, Next.js, TypeScript, Tailwind CSS, JavaScript
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Backend</h3>
            <p className="text-gray-600 leading-relaxed">Node.js, Firebase, Supabase</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Tools</h3>
            <p className="text-gray-600 leading-relaxed">Git, VS Code, Figma</p>
          </div>
        </div>
      </div>
    </section>
  );
}
