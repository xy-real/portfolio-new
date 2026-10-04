import { Terminal } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-neutral-50 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-center gap-2">
          <Terminal size={24} aria-hidden="true" />
          <h2 id="about-title" className="font-mono text-2xl font-bold">About</h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <p className="text-balance text-3xl leading-tight">
              I turn manual community workflows into dependable digital systems.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Alongside my computer science studies, I serve as Acting President of the VSU Faculty of Computing Supreme Student Council. Working closely with actual users keeps my projects grounded in practical needs—from organization management and online payments to attendance and emergency information.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              I care about clear interfaces, reliable data flows, and software that remains useful under real-world constraints.
            </p>
          </div>
          <Image
            src="/self1.webp"
            alt="Xyryll Jay Taneo"
            width={1179}
            height={1600}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="max-h-[36rem] w-full rounded-2xl object-cover object-center shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
