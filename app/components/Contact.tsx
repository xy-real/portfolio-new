import { GitBranch, Link, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-8 py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-5">
          <Mail size={24} />
          <div className="font-mono text-2xl font-bold">Contact</div>
        </div>

        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="text-3xl">Let&apos;s build something impactful together.</div>
          <div className="text-lg text-gray-600 leading-relaxed">
            I&apos;m always looking for opportunities to collaborate, learn, and build alongside others. If you&apos;re putting a team together, looking for a fellow developer to brainstorm with, or just want to connect, feel free to reach out!
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background hover:border-foreground transition-colors"
              href="mailto:xyrylljay@gmail.com"
            >
              <Mail size={18} />
              xyrylljay@gmail.com
            </a>
            <a
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background hover:border-foreground transition-colors"
              href="https://www.linkedin.com/in/xyryll-jay-taneo-600822269/"
            >
              <Link size={18} />
              LinkedIn
            </a>
            <a
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background hover:border-foreground transition-colors"
              href="https://github.com/xy-real"
            >
              <GitBranch size={18} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
