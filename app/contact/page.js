import Link from "next/link";

const contactLinks = [
  {
    title: "Email",
    value: "sohaaahrari@gmail.com",
    href: "mailto:sohaaahrari@gmail.com",
    external: false,
  },
  {
    title: "Phone",
    value: "0728324530",
    href: "tel:0728324530",
    external: false,
  },
  {
    title: "GitHub",
    value: "github.com/sohaehrari",
    href: "https://github.com/sohaehrari",
    external: true,
  },
  {
    title: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/soha-ehrari-9a97793b2/",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#07070a] px-4 pb-16 pt-28 text-white sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
      {/* Background Glow */}
      <div className="pointer-events-none fixed left-[-150px] top-[20%] h-[300px] w-[300px] rounded-full bg-violet-600/10 blur-[100px] sm:h-[450px] sm:w-[450px]" />

      <div className="pointer-events-none fixed bottom-[-150px] right-[-150px] h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[100px] sm:h-[450px] sm:w-[450px]" />

      {/* Background Grid */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

      <section className="relative mx-auto w-full max-w-6xl">
        {/* ================= HEADER ================= */}

        <div className="animate-[fadeUp_0.6s_ease-out]">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-violet-400 sm:text-xs sm:tracking-[0.35em]">
            Get In Touch
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.06em] sm:text-5xl md:text-6xl lg:text-7xl">
            Let&apos;s work
            <br />

            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              together.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8 lg:text-lg">
            I&apos;m open to frontend development opportunities,
            collaborations, and interesting projects. If you have an idea,
            I&apos;d love to hear about it.
          </p>
        </div>

        {/* ================= CONTACT CARDS ================= */}

        <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4">
          {contactLinks.map((item, index) => {
            const content = (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-600">
                    {item.title}
                  </span>

                  <span className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400">
                    ↗
                  </span>
                </div>

                <p className="mt-5 break-all text-sm font-medium text-zinc-300 transition-colors duration-300 group-hover:text-white sm:text-base">
                  {item.value}
                </p>
              </>
            );

            const className = `group animate-[fadeUp_0.6s_ease-out] rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.04] sm:p-6`;

            if (item.external) {
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {content}
                </a>
              );
            }

            return (
              <a
                key={item.title}
                href={item.href}
                className={className}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {content}
              </a>
            );
          })}
        </div>

        {/* ================= CTA ================= */}

        <div className="relative mt-5 overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-violet-500/[0.08] via-white/[0.02] to-blue-500/[0.05] p-6 animate-[fadeUp_1s_ease-out] sm:mt-6 sm:p-8 md:p-10">
          {/* CTA Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-[80px]" />

          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-400 sm:text-xs">
              Available For Opportunities
            </p>

            <h2 className="mt-3 max-w-2xl text-2xl font-bold tracking-[-0.04em] sm:text-3xl md:text-4xl">
              Have a project in mind?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
              Let&apos;s discuss your idea and create something useful,
              responsive, and modern together.
            </p>

            <a
              href="mailto:sohaaahrari@gmail.com"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-200 hover:shadow-xl hover:shadow-white/5 sm:w-auto"
            >
              Send Me an Email

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* ================= SOCIAL LINKS ================= */}

        <div className="mt-10 border-t border-white/[0.07] pt-8 sm:mt-12 sm:pt-10">
          <p className="text-xs font-medium text-zinc-600">
            Find me online
          </p>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="https://github.com/sohaehrari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/soha-ehrari-9a97793b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://x.com/davod1854"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
            >
              X
            </a>
          </div>
        </div>

        {/* ================= BACK HOME ================= */}

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