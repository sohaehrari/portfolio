import Link from "next/link";

const skillCategories = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building modern, responsive, and interactive web interfaces with a focus on reusable components and clean UI.",
    skills: [
      {
        name: "React.js",
        level: "Advanced",
        percentage: 88,
      },
      {
        name: "Next.js",
        level: "Intermediate",
        percentage: 78,
      },
      {
        name: "React Router",
        level: "Advanced",
        percentage: 84,
      },
      {
        name: "Bootstrap",
        level: "Advanced",
        percentage: 86,
      },
      {
        name: "Responsive Design",
        level: "Advanced",
        percentage: 90,
      },
    ],
  },

  {
    number: "02",
    title: "Languages & Web",
    description:
      "Strong foundation in the core technologies used to build modern web applications.",
    skills: [
      {
        name: "JavaScript",
        level: "Advanced",
        percentage: 88,
      },
      {
        name: "HTML",
        level: "Advanced",
        percentage: 94,
      },
      {
        name: "CSS",
        level: "Advanced",
        percentage: 90,
      },
    ],
  },

  {
    number: "03",
    title: "State & Data",
    description:
      "Managing application state and working with APIs and asynchronous application data.",
    skills: [
      {
        name: "Redux Toolkit",
        level: "Intermediate",
        percentage: 76,
      },
      {
        name: "React Query",
        level: "Intermediate",
        percentage: 74,
      },
      {
        name: "useReducer",
        level: "Advanced",
        percentage: 82,
      },
      {
        name: "REST APIs",
        level: "Advanced",
        percentage: 84,
      },
    ],
  },

  {
    number: "04",
    title: "Tools & Workflow",
    description:
      "Using modern development tools to manage projects, code, dependencies, and version control.",
    skills: [
      {
        name: "Git",
        level: "Advanced",
        percentage: 86,
      },
      {
        name: "GitHub",
        level: "Advanced",
        percentage: 88,
      },
      {
        name: "Vite",
        level: "Advanced",
        percentage: 85,
      },
      {
        name: "npm",
        level: "Advanced",
        percentage: 85,
      },
      {
        name: "VS Code",
        level: "Advanced",
        percentage: 92,
      },
    ],
  },
];

const strengths = [
  {
    number: "01",
    title: "Responsive Web Design",
    description:
      "Creating layouts that adapt smoothly to mobile, tablet, and desktop screen sizes.",
  },
  {
    number: "02",
    title: "Reusable Components",
    description:
      "Building modular React components that keep applications organized and maintainable.",
  },
  {
    number: "03",
    title: "API Integration",
    description:
      "Connecting frontend applications with REST APIs and handling application data.",
  },
  {
    number: "04",
    title: "Clean UI Development",
    description:
      "Turning ideas and requirements into clean, accessible, and user-friendly interfaces.",
  },
  {
    number: "05",
    title: "Problem Solving",
    description:
      "Approaching development challenges logically and finding practical solutions.",
  },
  {
    number: "06",
    title: "Continuous Learning",
    description:
      "Continuously improving frontend knowledge and exploring modern development practices.",
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#07070a] text-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pb-28">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[100px] sm:h-[450px] sm:w-[450px] sm:blur-[140px]" />

        <div className="pointer-events-none absolute -right-40 top-[250px] h-72 w-72 rounded-full bg-blue-600/10 blur-[100px] sm:h-[450px] sm:w-[450px] sm:blur-[140px]" />

        <div className="relative mx-auto w-full max-w-6xl">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 sm:px-4">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />

            <span className="text-[11px] font-medium text-zinc-400 sm:text-xs">
              My Toolkit
            </span>
          </div>

          {/* Label */}
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
            Skills & Technologies
          </p>

          {/* Heading */}
          <h1 className="mt-4 max-w-4xl text-[2.65rem] font-bold leading-[1.04] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
            Technologies I use to
            <br />

            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              build for the web.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg">
            A practical toolkit built through hands-on projects, continuous
            learning, and real frontend development experience.
          </p>

          {/* Quick stats */}
          <div className="mt-10 grid grid-cols-2 border-y border-white/[0.07] sm:mt-14 sm:max-w-2xl sm:grid-cols-4">
            <div className="border-r border-white/[0.07] px-3 py-5 sm:px-5">
              <p className="text-xl font-bold sm:text-2xl">
                12+
              </p>

              <p className="mt-1 text-[11px] text-zinc-600 sm:text-xs">
                Technologies
              </p>
            </div>

            <div className="border-r-0 border-white/[0.07] px-3 py-5 sm:border-r sm:px-5">
              <p className="text-xl font-bold sm:text-2xl">
                React
              </p>

              <p className="mt-1 text-[11px] text-zinc-600 sm:text-xs">
                Main Framework
              </p>
            </div>

            <div className="border-t border-white/[0.07] px-3 py-5 sm:border-t-0 sm:border-r sm:px-5">
              <p className="text-xl font-bold sm:text-2xl">
                REST
              </p>

              <p className="mt-1 text-[11px] text-zinc-600 sm:text-xs">
                API Experience
              </p>
            </div>

            <div className="border-t border-white/[0.07] px-3 py-5 sm:border-t-0 sm:px-5">
              <p className="text-xl font-bold sm:text-2xl">
                Git
              </p>

              <p className="mt-1 text-[11px] text-zinc-600 sm:text-xs">
                Workflow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SKILL CATEGORIES
      ====================================================== */}

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:pb-28">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8 sm:mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
              Technical Skills
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              My development toolkit.
            </h2>
          </div>

          {/* Category grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
            {skillCategories.map((category) => (
              <article
                key={category.title}
                className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d0d12] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/[0.14] sm:rounded-[24px] sm:p-7"
              >
                {/* Background gradient */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/5 blur-[70px] transition duration-500 group-hover:bg-violet-500/10" />

                {/* Category Header */}
                <div className="relative flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-700 sm:text-xs">
                      {category.number}
                    </span>

                    <h3 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
                      {category.title}
                    </h3>

                    <p className="mt-2 max-w-lg text-xs leading-6 text-zinc-600 sm:text-sm sm:leading-7">
                      {category.description}
                    </p>
                  </div>

                  <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-zinc-600 sm:flex">
                    ↗
                  </span>
                </div>

                {/* Skills */}
                <div className="relative mt-7 space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      {/* Skill header */}
                      <div className="flex items-center justify-between gap-3">
                        <span className="min-w-0 truncate text-sm font-medium text-zinc-300">
                          {skill.name}
                        </span>

                        <span className="shrink-0 text-[10px] text-zinc-600 sm:text-xs">
                          {skill.level}
                        </span>
                      </div>

                      {/* Progress */}
                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
                          style={{
                            width: `${skill.percentage}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DEVELOPMENT APPROACH
      ====================================================== */}

      <section className="border-y border-white/[0.07] px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            {/* Heading */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
                Beyond Technologies
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                How I approach
                <br className="hidden sm:block" />
                <span className="text-zinc-600">
                  development.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8">
                Good frontend development is not only about knowing
                technologies. It is also about building interfaces that are
                understandable, responsive, maintainable, and useful.
              </p>
            </div>

            {/* Strengths */}
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {strengths.map((strength) => (
                <article
                  key={strength.title}
                  className="group min-w-0 rounded-2xl border border-white/[0.07] bg-[#0d0d12] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20 sm:rounded-[22px] sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-violet-400">
                      {strength.number}
                    </span>

                    <span className="text-zinc-700 transition group-hover:text-violet-400">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-6 text-base font-semibold sm:text-lg">
                    {strength.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-zinc-600 sm:text-sm sm:leading-7">
                    {strength.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CURRENT FOCUS
      ====================================================== */}

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d0d12] sm:rounded-[28px]">
            <div className="grid lg:grid-cols-[1fr_1fr]">
              {/* Left */}
              <div className="min-w-0 p-6 sm:p-8 lg:p-12">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
                  Current Focus
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                  Always learning.
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
                  I&apos;m continuously improving my frontend development
                  skills and exploring better ways to build modern web
                  applications.
                </p>

                <div className="mt-7">
                  <Link
                    href="/projects"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-zinc-200 sm:w-auto"
                  >
                    See My Projects →
                  </Link>
                </div>
              </div>

              {/* Right */}
              <div className="relative min-w-0 overflow-hidden border-t border-white/[0.07] bg-gradient-to-br from-violet-500/[0.08] via-transparent to-blue-500/[0.06] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-12">
                <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-64 w-64 rounded-full bg-violet-500/10 blur-[100px]" />

                <div className="relative space-y-3">
                  {[
                    "Building better React applications",
                    "Learning deeper Next.js patterns",
                    "Improving UI and responsive design",
                    "Writing cleaner and reusable code",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex min-w-0 items-center gap-3 rounded-xl border border-white/[0.06] bg-black/20 p-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-[10px] font-bold text-violet-400">
                        0{index + 1}
                      </span>

                      <span className="min-w-0 text-xs leading-5 text-zinc-400 sm:text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="border-t border-white/[0.07] px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-4xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
            Let&apos;s Build
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.05em] sm:text-4xl lg:text-5xl">
            Have an idea?
            <br />

            <span className="text-zinc-600">
              Let&apos;s turn it into reality.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500 sm:mt-5 sm:text-base">
            I&apos;m interested in frontend development opportunities,
            collaborations, and building useful web experiences.
          </p>

          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center">
            <Link
              href="/projects"
              className="inline-flex w-full items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-zinc-200 sm:w-auto"
            >
              Explore Projects →
            </Link>

            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.07] sm:w-auto"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}