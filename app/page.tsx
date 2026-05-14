

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
          <div className="font-mono text-2xl font-bold">ABOUT</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <div className="text-3xl">
              I engineer community-driven applications that combine robust architecture with real-world utility.
            </div>
            <div className="text-lg text-gray-600 leading-relaxed">
              Balancing my roles as a full-stack developer, 3rd-year CS student, and Acting President of the VSU student council, my work is deeply rooted in solving practical problems. I use modern web and mobile technologies to build reliable platforms that prioritize scalability and the end-user experience.
            </div>
          </div>
          <Image src="/self1.JPG" alt="Self" width={400} height={400} className="rounded-lg w-full h-auto" />
        </div>
      </section>

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
            <p className="text-gray-600 leading-relaxed">
              Node.js, Firebase, Supabase
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Tools</h3>
            <p className="text-gray-600 leading-relaxed">
              Git, VS Code, Figma
            </p>
          </div>
        </div>
      </section>

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
