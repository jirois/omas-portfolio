"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "01. Projects", href: "#portfolio" },
  { label: "02. About", href: "#philosophy" },
  { label: "03. Toolkit", href: "#capabilities" },
  { label: "04. Experience", href: "#experience" },
  { label: "05. Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between",
        "border-b border-grid-vis px-10 py-5",
        "transition-all duration-300",
        scrolled
          ? "bg-surface/95 backdrop-blur-md"
          : "bg-surface/80 backdrop-blur-sm",
      ].join(" ")}
    >
      {/* Logo */}
      <Link
        href="/"
        className="font-mono text-[13px] font-medium uppercase tracking-wider text-on-surface hover:text-cyan transition-colors duration-200"
      >
        Omanudhowho Ajiri
      </Link>

      {/* Links */}
      <ul className="hidden items-center gap-8 md:flex list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-mono text-[11px] font-medium uppercase tracking-wider text-on-surface-dim transition-colors duration-200 hover:text-cyan"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#"
        className="btn-glitch bg-cyan px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-black transition-all duration-200 hover-bg-cyan-bright"
      >
        Resume.PDF
      </a>
    </nav>
  );
}
