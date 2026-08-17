import Link from "next/link";

const skills = [
  "JavaScript",
  "React.js",
  "Next.js",
  "HTML",
  "CSS",
  "Bootstrap",
  "React Router",
  "Redux Toolkit",
  "React Query",
  "REST APIs",
  "Git",
  "GitHub",
];

const strengths = [
  {
    number: "01",
    title: "Responsive Design",
    description:
      "Building interfaces that work smoothly across mobile, tablet, and desktop devices.",
  },
  {
    number: "02",
    title: "Reusable Components",
    description:
      "Creating clean and reusable React components that make applications easier to maintain.",
  },
  {
    number: "03",
    title: "API Integration",
    description:
      "Connecting frontend applications with REST APIs and working with external data.",
  },
  {
    number: "04",
    title: "Problem Solving",
    description:
      "Breaking complex requirements into practical and understandable frontend solutions.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#07070a] text-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pb-28">
        {/* Background */}
        <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[100px] sm:h-[450px] sm:w-[450px] sm:blur-[140px]" />

        <div className="pointer-events-none absolute -right-40 top-[350px] h-72 w-72 rounded-full bg-blue-600/10 blur-[100px] sm:h-[450px] sm:w-[450px] sm:blur-[140px]" />

        <div className="relative mx-auto w-full max-w-6xl">
          <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* LEFT */}
            <div className="min-w-0">
              {/* Badge */}
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 sm:px-4">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                <span className="truncate text-[11px] font-medium text-zinc-400 sm:text-xs">
                  About Me
                </span>
              </div>

              {/* Label */}
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
                Frontend Developer
              </p>

              {/* Heading */}
              <h1 className="mt-4 max-w-4xl text-[2.65rem] font-bold leading-[1.04] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
                I turn ideas into{" "}
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                  useful interfaces.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg">
                I&apos;m Soha Ahrari, a frontend developer from Herat,
                Afghanistan, focused on building responsive, modern, and
                user-friendly web applications.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 sm:mt-5 sm:text-base sm:leading-8">
                I have approximately 1–2 years of hands-on experience
                developing web applications using React.js, Next.js,
                JavaScript, CSS, and modern frontend technologies.
              </p>

              {/* Buttons */}
              <div className="mt-7 flex w-full flex-col gap-3 xs:flex-row sm:mt-9 sm:w-auto sm:flex-wrap">
                <Link
                  href="/projects"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-zinc-200 sm:w-auto sm:px-6"
                >
                  View My Projects →
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.07] sm:w-auto sm:px-6"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* RIGHT PROFILE CARD */}
            <div className="min-w-0 w-full lg:mx-auto lg:max-w-md">
              <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0d0d12] p-5 shadow-2xl shadow-black/30 sm:rounded-[32px] sm:p-8">
                {/* Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/20 blur-[70px] sm:h-48 sm:w-48" />

                {/* Avatar */}
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500 to-blue-500 shadow-xl shadow-violet-500/10 sm:h-32 sm:w-32 sm:rounded-[28px]">
                  <span className="text-3xl font-black text-white sm:text-5xl">
                    SA
                  </span>
                </div>

                <div className="relative mt-5 text-center sm:mt-7">
                  <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                    Soha Ahrari
                  </h2>

                  <p className="mt-1.5 text-sm text-violet-400">
                    Frontend Developer
                  </p>

                  <p className="mt-1 text-xs text-zinc-600">
                    Herat, Afghanistan
                  </p>
                </div>

                {/* Stats */}
                <div className="relative mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3">
                  <div className="min-w-0 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3 sm:rounded-2xl sm:p-4">
                    <p className="text-[11px] text-zinc-600 sm:text-xs">
                      Experience
                    </p>

                    <p className="mt-1 text-sm font-semibold sm:text-base">
                      1–2 Years
                    </p>
                  </div>

                  <div className="min-w-0 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3 sm:rounded-2xl sm:p-4">
                    <p className="text-[11px] text-zinc-600 sm:text-xs">
                      Focus
                    </p>

                    <p className="mt-1 text-sm font-semibold sm:text-base">
                      Frontend
                    </p>
                  </div>
                </div>

                {/* Email */}
                <a
                  href="mailto:sohaaahrari@gmail.com"
                  className="relative mt-2.5 flex min-w-0 items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3 transition hover:bg-white/[0.05] sm:mt-3 sm:rounded-2xl sm:p-4"
                >
                  <div className="min-w-0">
                    <p className="text-[11px] text-zinc-600 sm:text-xs">
                      Email
                    </p>

                    <p className="mt-1 break-all text-xs font-medium text-zinc-300 sm:text-sm">
                      sohaaahrari@gmail.com
                    </p>
                  </div>

                  <span className="shrink-0 text-zinc-600">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STORY
      ====================================================== */}

      <section className="border-t border-white/[0.07] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid min-w-0 gap-8 sm:gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
                My Story
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                A developer who
                <br className="hidden sm:block" />{" "}
                <span className="text-zinc-600">keeps learning.</span>
              </h2>
            </div>

            <div className="min-w-0 space-y-5 text-sm leading-7 text-zinc-500 sm:space-y-6 sm:text-base sm:leading-8">
              <p>
                My journey in frontend development has been built through
                practical learning and hands-on projects. I enjoy turning what
                I learn into functional web applications.
              </p>

              <p>
                I work mainly with JavaScript and React.js while developing my
                skills with Next.js and modern frontend development practices.
              </p>

              <p>
                Through projects such as Pocket Classroom, Life OS, Goal
                Tracker, Career Job, and Word Explorer, I&apos;ve gained
                practical experience building complete frontend experiences.
              </p>

              <p>
                I&apos;m continuously learning and improving my development
                skills with the goal of becoming a stronger professional
                frontend developer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ====================================================== */}

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8 sm:mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
              Technologies
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Tools I work with.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
              Technologies and tools I&apos;ve used while building practical
              frontend applications.
            </p>
          </div>

          {/* Responsive grid */}
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group min-w-0 rounded-xl border border-white/[0.07] bg-[#0d0d12] p-3.5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20 sm:rounded-2xl sm:p-5"
              >
                <div className="flex min-w-0 items-center justify-between gap-2">
                  <span className="min-w-0 truncate text-xs font-semibold sm:text-sm">
                    {skill}
                  </span>

                  <span className="hidden shrink-0 text-xs text-zinc-700 transition group-hover:text-violet-400 sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          STRENGTHS
      ====================================================== */}

      <section className="border-y border-white/[0.07] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8 max-w-2xl sm:mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
              What I Do
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              How I approach
              <br className="hidden sm:block" />{" "}
              <span className="text-zinc-600">
                frontend development.
              </span>
            </h2>
          </div>

          {/* 1 column mobile, 2 tablet/desktop */}
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
            {strengths.map((strength) => (
              <div
                key={strength.title}
                className="group min-w-0 rounded-2xl border border-white/[0.07] bg-[#0d0d12] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/[0.13] sm:rounded-[24px] sm:p-7"
              >
                <div className="flex min-w-0 items-start gap-4 sm:gap-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-[10px] font-bold text-violet-400 sm:h-10 sm:w-10 sm:rounded-xl sm:text-xs">
                    {strength.number}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-semibold sm:text-lg">
                      {strength.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-zinc-600 sm:mt-3 sm:text-sm sm:leading-7">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EDUCATION + TRAINING
      ====================================================== */}

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-8">
            {/* Education */}
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
                Education
              </p>

              <div className="mt-4 rounded-2xl border border-white/[0.07] bg-[#0d0d12] p-5 sm:mt-6 sm:rounded-[24px] sm:p-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold sm:text-xl">
                      High School
                    </h3>

                    <p className="mt-1.5 text-sm text-zinc-500">
                      Grade 12 Completed
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-white/[0.08] px-3 py-1 text-[10px] text-zinc-600 sm:text-xs">
                    Education
                  </span>
                </div>
              </div>
            </div>

            {/* Training */}
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
                Training
              </p>

              <div className="mt-4 rounded-2xl border border-white/[0.07] bg-[#0d0d12] p-5 sm:mt-6 sm:rounded-[24px] sm:p-7">
                <h3 className="text-lg font-semibold sm:text-xl">
                  Web & Frontend Development
                </h3>

                <p className="mt-2.5 text-sm leading-7 text-zinc-500">
                  Completed practical training in web design and frontend
                  development with hands-on projects using React.js and
                  Next.js.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LANGUAGES
      ====================================================== */}

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="rounded-2xl border border-white/[0.07] bg-[#0d0d12] p-5 sm:rounded-[28px] sm:p-8 lg:p-10">
            <div className="grid min-w-0 gap-7 sm:gap-8 md:grid-cols-[0.6fr_1.4fr] md:items-center">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
                  Languages
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  Communication
                </h2>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4 sm:rounded-2xl sm:p-5">
                  <p className="text-base font-semibold sm:text-lg">
                    Persian
                  </p>

                  <p className="mt-1 text-xs text-zinc-600 sm:text-sm">
                    Native
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4 sm:rounded-2xl sm:p-5">
                  <p className="text-base font-semibold sm:text-lg">
                    English
                  </p>

                  <p className="mt-1 text-xs text-zinc-600 sm:text-sm">
                    Advanced
                  </p>
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
            Let&apos;s connect
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.05em] sm:text-4xl lg:text-5xl">
            Want to see what
            <br />
            <span className="text-zinc-600">
              I can build?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500 sm:mt-5 sm:text-base">
            Explore my projects or get in touch if you&apos;d like to discuss
            a frontend opportunity or collaboration.
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
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold transition hover:bg-white/[0.07] sm:w-auto"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}