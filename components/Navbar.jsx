"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-[9999] border-b border-white/[0.06] bg-[#07070a]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="relative z-10 text-lg font-bold tracking-[-0.04em] text-white transition-colors duration-300 hover:text-violet-400 sm:text-xl"
        >
          SOHA<span className="text-violet-400">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          <Link
            href="/"
            className="text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
          >
            About
          </Link>

          <Link
            href="/skills"
            className="text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
          >
            Skills
          </Link>

          <Link
            href="/projects"
            className="text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-200 md:block"
        >
          Let&apos;s Talk
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="relative z-[10000] flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] md:hidden"
        >
          <span className="relative block h-4 w-5">
            {/* Top line */}
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                isOpen
                  ? "top-[7px] rotate-45"
                  : ""
              }`}
            />

            {/* Middle line */}
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                isOpen
                  ? "scale-x-0 opacity-0"
                  : ""
              }`}
            />

            {/* Bottom line */}
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                isOpen
                  ? "top-[7px] -rotate-45"
                  : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`border-t border-white/[0.06] bg-[#07070a]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "visible max-h-[400px] opacity-100"
            : "invisible max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">

          <Link
            href="/"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3.5 text-sm text-zinc-400 transition-all duration-300 hover:bg-white/[0.04] hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3.5 text-sm text-zinc-400 transition-all duration-300 hover:bg-white/[0.04] hover:text-white"
          >
            About
          </Link>

          <Link
            href="/skills"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3.5 text-sm text-zinc-400 transition-all duration-300 hover:bg-white/[0.04] hover:text-white"
          >
            Skills
          </Link>

          <Link
            href="/projects"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3.5 text-sm text-zinc-400 transition-all duration-300 hover:bg-white/[0.04] hover:text-white"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3.5 text-sm text-zinc-400 transition-all duration-300 hover:bg-white/[0.04] hover:text-white"
          >
            Contact
          </Link>

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-3 rounded-xl bg-white px-4 py-3.5 text-center text-sm font-semibold text-black transition-all duration-300 hover:bg-zinc-200"
          >
            Let&apos;s Talk
          </Link>

        </nav>
      </div>
    </header>
  );
}