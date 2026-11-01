"use client";
import { useState, useEffect } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  Cpu,
  CircuitBoard,
  Code2,
  Layers,
  MapPin,
  Radio,
  Workflow,
  GraduationCap,
  Terminal,
  Network,
} from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { skillGroups } from "@/data/skills";
import { workflow } from "@/data/workflow";
import { projects } from "@/data/projects";
import { Board, Reveal, Architecture } from "./visuals";
import { ContactAction } from "./layout";
import { Gallery } from "./projects/gallery";

function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">
          <span>{number}</span> / {label}
        </div>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
export function Hero() {
  const titles = [
    "Hardware Design Engineer",
    "Embedded Firmware Developer",
    "PCB Design Engineer",
    "Industrial Automation Developer",
    "IoT Systems Developer",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % titles.length),
      3500,
    );
    return () => clearInterval(timer);
  }, [titles.length]);
  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" />
      <div className="container">
        <div className="hero-topline">
          <span>
            <span className="live-dot" /> HARDWARE MEETS POSSIBILITY
          </span>
          <span>
            <MapPin size={13} /> CHENNAI, INDIA
          </span>
        </div>
        <div className="hero-layout">
          <Reveal className="hero-copy">
            <div className="eyebrow hero-intro">
              ENGINEER. BUILDER. PROBLEM SOLVER.
            </div>
            <h1>
              Hi, I’m{" "}
              <span>
                Aadithya S<span className="cyan">.</span>
              </span>
            </h1>
            <h2>
              Embedded Systems
              <br />
              <span>Engineer</span>
              <span className="title-cursor" aria-hidden="true">
                _
              </span>
            </h2>
            <p className="rotating-title" key={index}>
              <span /> {titles[index]}
            </p>
            <p className="hero-description">{profile.introduction}</p>
            <div className="hero-buttons">
              <a href="#projects" className="button primary">
                Explore My Projects <ArrowUpRight size={17} />
              </a>
              <ContactAction kind="resume" className="button secondary" />
            </div>
            <a href="#contact" className="hero-contact">
              Have a project in mind?{" "}
              <span>
                Contact me <ArrowRight size={14} />
              </span>
            </a>
          </Reveal>
          <Reveal className="hero-art">
            <Board />
          </Reveal>
        </div>
        <div className="hero-bottom">
          <div className="technology-strip">
            {[
              "STM32",
              "ESP32",
              "LPC1768",
              "nRF52840",
              "PCB Design",
              "Embedded C",
              "FreeRTOS",
              "IoT",
            ].map((t) => (
              <a key={t} href="#skills">
                {t}
              </a>
            ))}
          </div>
          <a className="scroll-cue" href="#about">
            <ArrowDown size={15} /> SCROLL TO EXPLORE
          </a>
        </div>
      </div>
    </section>
  );
}
export function About() {
  const expertise = [
    {
      icon: CircuitBoard,
      title: "Embedded Hardware",
      body: "Circuit design, component selection, schematic capture, PCB layout, prototyping, and hardware debugging.",
    },
    {
      icon: Code2,
      title: "Firmware Development",
      body: "Embedded C/C++, peripherals, interrupts, RTOS, device drivers, and communication protocols.",
    },
    {
      icon: Terminal,
      title: "Software Integration",
      body: "C# .NET applications, embedded-to-PC communication, SQL connectivity, and device configuration.",
    },
    {
      icon: Layers,
      title: "System Development",
      body: "Hardware-software integration, testing, troubleshooting, and prototype validation.",
    },
  ];
  return (
    <section id="about" className="section container">
      <Reveal>
        <SectionHeading
          number="01"
          label="ABOUT ME"
          title="Thinking in systems. Building with purpose."
        />
        <div className="about-grid">
          <div className="about-copy">
            <p className="large-copy">
              I’m an Embedded Systems Engineer based in Chennai, working at the
              intersection of <em>hardware, firmware, and software.</em>
            </p>
            <p>
              My engineering experience includes industrial automation
              equipment, wiring harness testing systems, connected monitoring
              solutions, and medical electronic devices.
            </p>
            <p>
              I work across microcontroller platforms and development
              environments, from schematic capture and PCB layout to firmware
              debugging, communication protocols, and system validation.
            </p>
            <p>
              I enjoy solving problems that need both hardware and software
              expertise, especially when a product must operate reliably in a
              real-world environment.
            </p>
            <div className="about-signature">
              <span className="signature-mark">a.</span>
              <div>
                Aadithya S<small>Embedded Systems Engineer · Chennai</small>
              </div>
            </div>
          </div>
          <div className="expertise-grid">
            {expertise.map(({ icon: Icon, title, body }, i) => (
              <article className="expertise-card" key={title}>
                <div>
                  <Icon size={23} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
export function Experience() {
  return (
    <section id="experience" className="section section-tinted">
      <div className="container">
        <Reveal>
          <SectionHeading
            number="02"
            label="PROFESSIONAL EXPERIENCE"
            title="Engineering in the real world."
            description="Hands-on development across industrial automation, connected systems, and medical electronics."
          />
          <div className="experience-timeline">
            {experience.map((e, i) => (
              <article className="experience-row" key={e.company}>
                <div className="experience-company">
                  <span className="timeline-point" />
                  <span className="mono muted">0{i + 1} / EXPERIENCE</span>
                  <h3>{e.company}</h3>
                  {e.location && (
                    <span className="muted small">{e.location}</span>
                  )}
                </div>
                <div className="experience-work">
                  <span className="role">{e.role}</span>
                  <h4>{e.focus}</h4>
                  <p>{e.description}</p>
                  <div className="tags">
                    {e.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <Link href={`/projects/${e.slug}`} className="text-link">
                    Explore the engineering <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
export function Skills() {
  const [selected, setSelected] = useState("All Skills");
  const icons = [Cpu, Code2, CircuitBoard, Terminal, Network, Radio, Layers];
  return (
    <section id="skills" className="section container">
      <Reveal>
        <SectionHeading
          number="03"
          label="TECHNICAL TOOLKIT"
          title="The right tools. A connected skill set."
          description="Platforms and technologies I use to take a system from circuit to application."
        />
        <div
          className="filter-list skill-filters"
          aria-label="Skill categories"
        >
          {["All Skills", ...skillGroups.map((g) => g.name)].map((name) => (
            <button
              key={name}
              onClick={() => setSelected(name)}
              className={selected === name ? "selected" : ""}
              aria-pressed={selected === name}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="skills-grid">
          {skillGroups
            .filter((g) => selected === "All Skills" || g.name === selected)
            .map((g) => {
              const Icon = icons[skillGroups.indexOf(g)];
              return (
                <article className="skill-card" key={g.name}>
                  <Icon size={22} />
                  <h3>{g.name}</h3>
                  <p>{g.application}</p>
                  <div className="tags">
                    {g.skills.map((s) => (
                      <span
                        className={s.startsWith("KiCad") ? "emphasis" : ""}
                        key={s}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
        </div>
      </Reveal>
    </section>
  );
}
export function Projects() {
  return (
    <section id="projects" className="section section-tinted">
      <div className="container">
        <Reveal>
          <SectionHeading
            number="04"
            label="SELECTED ENGINEERING"
            title="Built around real problems."
            description="A closer look at the hardware, firmware, and software behind my work."
          />
          <Gallery />
        </Reveal>
      </div>
    </section>
  );
}
export function Process() {
  const [step, setStep] = useState(0);
  const [project, setProject] = useState("wiring-harness-navigation");
  const chosen = projects.find((p) => p.slug === project)!;
  return (
    <>
      <section id="workflow" className="section container">
        <Reveal>
          <SectionHeading
            number="05"
            label="ENGINEERING WORKFLOW"
            title="From concept to working hardware."
            description="A connected development process, with the complete system in view."
          />
          <div className="workflow-grid">
            {workflow.map(([name, description], i) => (
              <button
                key={name}
                className={`workflow-node ${step === i ? "selected" : ""}`}
                onClick={() => setStep(i)}
                onMouseEnter={() => setStep(i)}
                aria-pressed={step === i}
                aria-describedby="workflow-description"
                title={description}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <strong>{name}</strong>
                <ArrowUpRight size={16} />
              </button>
            ))}
          </div>
          <div
            className="workflow-description"
            id="workflow-description"
            aria-live="polite"
          >
            <Workflow size={23} />
            <div>
              <strong>{workflow[step][0]}</strong>
              <p>{workflow[step][1]}</p>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="architecture-section section-tinted">
        <div className="container">
          <Reveal>
            <div className="eyebrow">SYSTEMS IN FOCUS</div>
            <h2>See how it connects.</h2>
            <p className="muted">
              Conceptual architecture based on the supplied project scope.
            </p>
            <div className="filter-list architecture-tabs">
              {[
                "wiring-harness-navigation",
                "energy-monitoring",
                "smart-rtms",
              ].map((slug) => (
                <button
                  key={slug}
                  onClick={() => setProject(slug)}
                  aria-pressed={project === slug}
                  className={project === slug ? "selected" : ""}
                >
                  {projects.find((p) => p.slug === slug)!.title}
                </button>
              ))}
            </div>
            <Architecture nodes={chosen.architecture} />
            <Link className="text-link" href={`/projects/${chosen.slug}`}>
              Explore system details <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
export function Education() {
  return (
    <section id="education" className="section container">
      <Reveal>
        <SectionHeading
          number="06"
          label="EDUCATION"
          title="A foundation for what comes next."
        />
        <div className="education-grid">
          {education.map((e) => (
            <article key={e.degree} className="education-card">
              <div>
                <GraduationCap size={23} />
                <span>{e.year}</span>
              </div>
              <h3>{e.degree}</h3>
              <p>{e.specialization}</p>
              {e.institution && <p className="small">{e.institution}</p>}
              <span className="education-status">{e.status}</span>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <Reveal>
          <div className="contact-content">
            <div className="eyebrow">
              <span className="live-dot" /> LET’S CONNECT
            </div>
            <h2>
              Let’s build something
              <br />
              <span>meaningful.</span>
              <ArrowUpRight className="contact-arrow" />
            </h2>
            <p>
              Interested in embedded systems, electronics development,
              industrial automation, or a hardware-software integration project?
              Feel free to connect.
            </p>
            <div className="contact-buttons">
              <ContactAction kind="email" className="button primary" />
              <ContactAction kind="linkedin" className="button secondary" />
              <ContactAction kind="github" className="button secondary" />
              <ContactAction kind="resume" className="button secondary" />
            </div>
            {(!profile.email ||
              !profile.linkedin ||
              !profile.github ||
              !profile.resume) && (
              <p className="contact-config">
                Contact links and resume are awaiting profile configuration.
              </p>
            )}
            <div className="contact-location">
              <MapPin size={15} /> Chennai, Tamil Nadu, India
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
