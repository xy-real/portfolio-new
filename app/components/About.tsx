import { Terminal } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="px-8 py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-5">
          <Terminal size={24} />
          <div className="font-mono text-2xl font-bold">ABOUT</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <div className="text-3xl">
              I engineer community-driven applications that combine robust architecture with real-world utility.
            </div>
            <div className="text-lg text-gray-600 leading-relaxed">
              Balancing my roles as a full-stack developer, 3rd-year CS student, and Acting President of the VSU Faculty of Computing Supreme Student
              Council, my work is deeply rooted in solving practical problems. I use modern web and mobile technologies
              to build reliable platforms that prioritize scalability and the end-user experience.
            </div>
          </div>
          <Image src="/self1.JPG" alt="Self" width={400} height={400} className="rounded-lg w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
