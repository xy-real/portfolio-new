

'use client';

import { ArrowRight, Mail, Code, Terminal } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main>

      <section id="header" className = "flex justify-between items-center py-4 px-8 shadow-sm border-b border-gray-200">
        {/* Header content */}

        <a className="flex font-mono items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
          <Code size={24} />
          Portfolio
        </a>

        <nav className = "flex gap-6">
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
      
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center">
        {/* Hero content */}
        
        <div className="font-extrabold text-6xl mb-4">
          Xyryll Jay Taneo
        </div>

        <div className="text-lg text-gray-500">
          Junior developer with a passion for building systems that solve real world problems.
        </div>
        
        <div className = "flex gap-4 mt-4">
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

      <section id="about" className="px-8 py-20 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-5">
          <Terminal size={24} />
          <h2 className="font-mono text-2xl font-bold">ABOUT</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <div className="text-3xl">
              I architect modular applications that expand simple concepts into feature-rich, community-driven systems.
            </div>
            <div className="text-lg text-gray-600 leading-relaxed">
              As a full-stack developer and a 3rd-year CS student at VSU, my work is rooted in making a tangible impact. When I&apos;m not serving as the Acting President of the Faculty Supreme Student Council, I&apos;m bringing production-ready platforms to life using React, Next.js, and Flutter. From disaster preparedness tools to campus management systems, every line of code is written with scalability, clean architecture, and the end-user in mind.
            </div>
          </div>
          <Image src="/self1.JPG" alt="Self" width={400} height={400} className="rounded-lg w-full h-auto" />
        </div>
      </section>

      <div>
        {/* Skills & Technologies */}
      </div>

      <div>
        {/* Projects */}
      </div>

      <div>
        {/* Achievements */}
      </div>

      <div>
        {/* Contact */}
      </div>
      
    </main>
  );
}
