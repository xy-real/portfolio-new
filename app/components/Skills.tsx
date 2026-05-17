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
            <h3 className="text-lg font-semibold mb-4">Languages</h3>
            <p className="text-gray-600 leading-relaxed">Java, JavaScript, TypeScript, SQL, PHP, C, C++</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Libraries & Frameworks</h3>
            <p className="text-gray-600 leading-relaxed">React.js, Next.js, Flutter</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Databases & Tools</h3>
            <p className="text-gray-600 leading-relaxed">Supabase, Firestore Firebase, MySQL, Git, Github, Vercel, Figma, VS Code, Firebase</p>
          </div>
        </div>
      </div>
    </section>
  );
}
