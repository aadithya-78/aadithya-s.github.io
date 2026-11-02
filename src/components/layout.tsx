"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  Moon,
  Sun,
  X,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { profile } from "@/data/profile";
import { resolvePath } from "@/lib/utils";
const nav = [
  ["Projects", "projects"],
  ["Degree", "education"],
  ["Tools", "tools"],
  ["Contact", "contact"],
];
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false),
    [active, setActive] = useState("");
  useEffect(() => {
    let saved = "dark";
    try {
      saved = localStorage.getItem("theme") || "dark";
    } catch {
      /* Storage can be restricted by the browser. */
    }
    document.documentElement.dataset.theme =
      saved === "light" ? "light" : "dark";
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);
  function toggleTheme() {
    const next = document.documentElement.dataset.theme !== "light";
    document.documentElement.dataset.theme = next ? "light" : "dark";
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      /* The theme still works without persistence. */
    }
  }
  return (
    <header className="header">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="Aadithya S home">
          <span className="brand-icon">
            a<span>.</span>
          </span>
          <span>
            AADITHYA S<span className="brand-sub">HARDWARE / FIRMWARE</span>
          </span>
        </Link>
        <nav
          className={open ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          {nav.map(([name, id]) => (
            <Link
              key={id}
              href={`/#${id}`}
              onClick={() => setOpen(false)}
              className={active === id ? "active" : ""}
            >
              {name}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
          >
            <Moon size={18} className="theme-moon" />
            <Sun size={18} className="theme-sun" />
          </button>
          <Link href="/#contact" className="nav-contact">
            Let’s connect <ArrowUpRight size={15} />
          </Link>
          <button
            className="icon-button menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
export function ContactAction({
  kind,
  className = "",
}: {
  kind: "email" | "github" | "linkedin" | "resume";
  className?: string;
}) {
  const [notice, setNotice] = useState(false);
  const labels = {
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    resume: "Download Resume",
  };
  const Icon = {
    email: Mail,
    github: Github,
    linkedin: Linkedin,
    resume: Download,
  }[kind];
  const value = profile[kind];
  const rawHref = kind === "email" ? `mailto:${value}` : value;
  const href = kind === "resume" ? resolvePath(rawHref) : rawHref;
  return (
    <span className="contact-action">
      {value ? (
        <a
          className={className}
          href={href}
          download={kind === "resume" ? true : undefined}
          target={
            kind === "github" || kind === "linkedin" ? "_blank" : undefined
          }
          rel="noopener noreferrer"
        >
          <Icon size={16} />
          {labels[kind]}
        </a>
      ) : (
        <button
          className={className}
          onClick={() => setNotice(!notice)}
          aria-expanded={notice}
        >
          <Icon size={16} />
          {labels[kind]}
        </button>
      )}
      {notice && (
        <span className="config-notice" role="status">
          {kind === "resume"
            ? "Resume PDF has not been provided yet."
            : `${labels[kind]} details have not been provided yet.`}
        </span>
      )}
    </span>
  );
}
export function Footer() {
  return (
    <footer className="container footer">
      <Link href="/" className="footer-name">
        AADITHYA S<span>Embedded Systems Engineer</span>
      </Link>
      <span>Thoughtfully engineered. From hardware to software.</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
