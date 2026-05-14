

'use client';

import { ArrowRight, Mail, Code } from 'lucide-react';

export default function Home() {
  return (
    <main>

      <div className = "flex justify-between items-center py-4 px-8 shadow-sm border-b border-gray-200">
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
      </div>
      
      <div className="min-h-screen flex flex-col items-center justify-center">
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

      </div>

      <div className="min-h-screen flex py-20 px-8">
        <div className="max-w-4xl w-full">
          <div className="text-4xl font-bold mb-12">
            ABOUT
          </div>
        </div>
      </div>

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
