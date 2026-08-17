import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "CareerPath",
    category: "Opportunity Platform",
    description:
      "A modern opportunity platform designed to help users discover jobs, internships, scholarships, courses, remote work, and other career opportunities.",
    technologies: ["Next.js", "React.js", "JavaScript", "Prisma"],
    github: "https://github.com/sohaehrari/final-pro",
    live: null,
  },

  {
    number: "02",
    title: "Goal Tracker",
    category: "Productivity Application",
    description:
      "A goal-management application where users can create, edit, delete, search, and filter goals while tracking their progress and achievements.",
    technologies: ["React.js", "JavaScript", "Material UI"],
    github: "https://github.com/sohaehrari/week6",
    live: null,
  },

  {
    number: "03",
    title: "World Explorer",
    category: "Countries Explorer",
    description:
      "An interactive country exploration application that allows users to explore countries and discover useful information through a responsive interface.",
    technologies: ["React.js", "JavaScript", "REST API", "CSS"],
    github: "https://github.com/sohaehrari/world-explorer",
    live: null,
  },

  {
    number: "04",
    title: "Movie Watchlist",
    category: "Movie Management",
    description:
      "A movie watchlist manager designed to help users organize movies they want to watch through a clean and responsive interface.",
    technologies: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/sohaehrari/movie-watchlist",
    live: null,
  },

  {
    number: "05",
    title: "Pocket Classroom",
    category: "Educational Platform",
    description:
      "A responsive educational web application with reusable components and interactive interfaces focused on creating a simple learning experience.",
    technologies: ["React.js", "JavaScript", "Bootstrap"],
    github: null,
    live: "https://sohaehrari.github.io/pocket-classroom/",
  },

  {
    number: "06",
    title: "Product",
    category: "Product Application",
    description:
      "A frontend web project focused on presenting and working with products through a modern and responsive user interface.",
    technologies: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/sohaehrari/product",
    live: null,
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#07070a] px-4 pb-20 pt-28 text-white sm:px-6 sm:pt-32 lg:px-8">
      {/* Background Glow */}
      <div className="pointer-events-none fixed left-[-150px] top-[15%] h-[300px] w-[300px] rounded-full bg-violet-600/10 blur-[100px] sm:h-[500px] sm:w-[500px]" />

      <div className="pointer-events-none fixed bottom-[-150px] right-[-150px] h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[100px] sm:h-[500px] sm:w-[500px]" />

      {/* Background Grid */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:45px_45px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

      <section className="relative mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl animate-[fadeUp_0.6s_ease-out]">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-violet-400 sm:text-xs sm:tracking-[0.35em]">
            Selected Work
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-[-0.06em] sm:text-5xl md:text-6xl lg:text-7xl">
            Projects I&apos;ve
            <br />

            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              built.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8 lg:text-lg">
            A collection of practical web applications I&apos;ve built while
            developing my skills in React.js, Next.js, JavaScript, APIs, and
            modern frontend development.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0c0c10] p-5 opacity-0 transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/20 hover:shadow-2xl hover:shadow-violet-950/20 animate-[fadeUp_0.6s_ease-out_forwards] sm:rounded-[24px] sm:p-7"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-violet-500/5 blur-[80px] transition-all duration-500 group-hover:bg-violet-500/15" />

              {/* Number + Category */}
              <div className="relative flex items-center justify-between gap-3">
                <span className="text-xs font-bold tracking-[0.2em] text-zinc-700">
                  {project.number}
                </span>

                <span className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1 text-[9px] uppercase tracking-wider text-zinc-600">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="relative mt-10 flex-1">
                <h2 className="text-2xl font-bold tracking-[-0.03em] transition-colors duration-300 group-hover:text-violet-300 sm:text-3xl">
                  {project.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[10px] text-zinc-500 transition-all duration-300 group-hover:border-white/10 group-hover:text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="relative mt-8 flex flex-col gap-2 sm:flex-row">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/button inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-200"
                  >
                    Live Demo

                    <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                      ↗
                    </span>
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/button inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-semibold text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                  >
                    GitHub

                    <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                      ↗
                    </span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 text-center sm:mt-16 sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
            More on GitHub
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Want to see more of my work?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-zinc-600">
            Explore my GitHub profile to see more projects, experiments, and
            frontend development work.
          </p>

          <a
            href="https://github.com/sohaehrari"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-200 sm:w-auto"
          >
            Visit GitHub

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>

        {/* Back Home */}
        <div className="mt-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-white"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}