export default function Home() {
  return (
    <main>

      <div className = "flex justify-between py-4 px-8 shadow-sm">
        {/* Header content */}

        <div>
          Portfolio
        </div>

        <nav className = "flex space-x-4">
          <a href="#about">
            About
          </a>

          <a href="#skills">  
            Skills
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>
        </nav>
      </div>
      
      <div className="min-h-screen flex flex-col items-center justify-center">
        {/* Hero content */}
        
        <div>
          Xyryll Jay Taneo
        </div>

        <div>
          Full stack developer with a passion for building systems that solve real world problems.
        </div>
        
      </div>

      <div>
        {/* About Me */}
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
