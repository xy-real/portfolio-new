export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 max-w-6xl mx-auto">
      {/* Skills & Technologies */}

      <h2 className="text-sm uppercase tracking-wider font-mono mb-8">Tech Stack</h2>
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
    </section>
  );
}
