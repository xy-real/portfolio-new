import { ExternalLink, GitBranch, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-neutral-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-5 flex items-center gap-2">
          <Mail size={24} aria-hidden="true" />
          <h2 id="contact-title" className="font-mono text-2xl font-bold">Contact</h2>
        </div>

        <div className="flex max-w-3xl flex-col gap-6">
          <p className="text-balance text-3xl leading-tight">Let&apos;s build something useful together.</p>
          <p className="text-lg leading-relaxed text-gray-600">
            I&apos;m open to software development opportunities, project collaborations, and conversations about building practical systems for real users.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2 transition-colors hover:border-gray-500"
              href="mailto:xyrylljay@gmail.com"
            >
              <Mail size={18} aria-hidden="true" />
              xyrylljay@gmail.com
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2 transition-colors hover:border-gray-500"
              href="https://www.linkedin.com/in/xyryll-jay-taneo-600822269/"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2 transition-colors hover:border-gray-500"
              href="https://github.com/xy-real"
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch size={18} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>

        <p className="mt-16 border-t border-border pt-6 text-sm text-gray-500">
          © 2026 Xyryll Jay Taneo
        </p>
      </div>
    </section>
  );
}
