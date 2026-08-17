import "./globals.css";

const skills = [
  "JavaScript",
  "React.js",
  "Next.js",
  "HTML",
  "CSS",
  "Bootstrap",
  "Redux Toolkit",
  "React Query",
  "REST APIs",
  "Git & GitHub",
];

const projects = [
  {
    number: "01",
    title: "Pocket Classroom",
    description:
      "A responsive educational web application with reusable React components and interactive user interfaces.",
    technologies: ["React.js", "JavaScript", "Bootstrap"],
  },
  {
    number: "02",
    title: "Life OS",
    description:
      "A productivity and life-management application designed with a clean and responsive user experience.",
    technologies: ["React.js", "JavaScript", "CSS"],
  },
  {
    number: "03",
    title: "Goal Tracker",
    description:
      "A goal-management application that allows users to organize and track their personal goals.",
    technologies: ["React.js", "JavaScript", "Bootstrap"],
  },
];

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <header className="navbar">
        <div className="container nav-content">
          <a href="#" className="logo">
            SOHA<span>.</span>
          </a>

          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="mailto:sohaaahrari@gmail.com" className="nav-button">
            Let's Talk
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="container hero-content">
          <div className="availability">
            <span></span>
            Available for frontend opportunities
          </div>

          <p className="eyebrow">FRONTEND DEVELOPER</p>

          <h1>
            I build modern
            <br />
            <span>web experiences.</span>
          </h1>

          <p className="hero-description">
            I'm Soha Ahrari, a frontend developer focused on building
            responsive, modern, and user-friendly web applications with
            React.js and Next.js.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button button-primary">
              View My Work <span>→</span>
            </a>

            <a
              href="https://github.com/sohaEhRari"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary"
            >
              GitHub ↗
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>1–2+</strong>
              <small>Years Experience</small>
            </div>

            <div>
              <strong>5+</strong>
              <small>Projects Built</small>
            </div>

            <div>
              <strong>React</strong>
              <small>Primary Stack</small>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about-section">
        <div className="container">
          <p className="section-label">ABOUT ME</p>

          <div className="about-grid">
            <h2>Turning ideas into clean, functional interfaces.</h2>

            <p>
              I enjoy transforming ideas into practical web applications.
              My focus is writing clean and reusable code while creating
              interfaces that feel simple, responsive, and intuitive.
              I'm continuously learning modern frontend technologies and
              improving my development workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="container">
          <p className="section-label">TECH STACK</p>

          <h2 className="section-title">Tools I work with</h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span className="skill-dot"></span>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="section-label">SELECTED WORK</p>
              <h2 className="section-title">Projects I've built</h2>
            </div>

            <a
              href="https://github.com/sohaEhRari"
              target="_blank"
              rel="noopener noreferrer"
              className="view-github"
            >
              View GitHub →
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span>{project.number}</span>
                  <span className="project-arrow">↗</span>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                </div>

                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="container contact-content">
          <p className="section-label">GET IN TOUCH</p>

          <h2>
            Let's build something
            <br />
            <span>great.</span>
          </h2>

          <p>
            I'm open to frontend development opportunities, collaborations,
            and interesting projects.
          </p>

          <a
            href="mailto:sohaaahrari@gmail.com"
            className="button button-primary"
          >
            Let's Talk →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Soha Ahrari.</p>

          <div>
            <a
              href="https://github.com/sohaEhRari"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/soha-ehrari-9a97793b2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://x.com/davod1854"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}