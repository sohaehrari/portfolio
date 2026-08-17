import Link from "next/link";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-[#07070a] text-white">

      {/* HERO */}
      <section className="relative flex min-h-screen items-center px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[100px]" />

        <div className="pointer-events-none absolute -right-40 bottom-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="relative mx-auto w-full max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-400">
            Frontend Developer
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-[-0.06em] sm:text-6xl lg:text-8xl">
            I build modern
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              web experiences.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
            I&apos;m Soha Ahrari, a frontend developer focused on building
            responsive, modern, and user-friendly web applications with
            React.js and Next.js.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/projects"
              className="rounded-xl bg-white px-6 py-3.5 text-center text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-200"
            >
              View My Work →
            </Link>

            <a
              href="https://github.com/sohaehrari"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-center text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              GitHub ↗
            </a>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/[0.07] px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-400">
            About Me
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-2">

            <h2 className="text-3xl font-bold tracking-[-0.05em] sm:text-5xl">
              Turning ideas into clean,
              <span className="text-zinc-600">
                {" "}functional interfaces.
              </span>
            </h2>

            <div>
              <p className="text-sm leading-7 text-zinc-500 sm:text-base">
                I enjoy transforming ideas into practical web applications.
                My focus is writing clean and reusable code while creating
                interfaces that feel simple, responsive, and intuitive.
              </p>

              <Link
                href="/about"
                className="mt-6 inline-flex text-sm text-white transition-colors duration-300 hover:text-violet-400"
              >
                More about me →
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-t border-white/[0.07] px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-400">
            Tech Stack
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] sm:text-5xl">
            Tools I work with.
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

            {[
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
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-4 text-sm text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:text-white"
              >
                {skill}
              </div>
            ))}

          </div>

          <Link
            href="/skills"
            className="mt-7 inline-flex text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
          >
            Explore all skills →
          </Link>

        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-t border-white/[0.07] px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-400">
            Selected Work
          </p>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <h2 className="text-3xl font-bold tracking-[-0.05em] sm:text-5xl">
              Projects I&apos;ve built.
            </h2>

            <Link
              href="/projects"
              className="text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
            >
              View all projects →
            </Link>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/[0.07] px-4 py-24 text-center sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-400">
            Get In Touch
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.05em] sm:text-6xl">
            Let&apos;s build something
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              great.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-500">
            I&apos;m open to frontend development opportunities,
            collaborations, and interesting projects.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-200"
          >
            Let&apos;s Talk →
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.07] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-zinc-700">
            © {new Date().getFullYear()} Soha Ahrari.
          </p>

          <div className="flex gap-5">

            <a
              href="https://github.com/sohaehrari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-600 transition-colors hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/soha-ehrari-9a97793b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-600 transition-colors hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://x.com/davod1854"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-600 transition-colors hover:text-white"
            >
              X
            </a>

          </div>

        </div>
      </footer>

    </main>
  );
}