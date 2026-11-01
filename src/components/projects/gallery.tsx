"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";
import { projects, categories } from "@/data/projects";
import { ProjectMedia } from "@/components/projects/project-media";
export function Gallery() {
  const [category, setCategory] = useState("All Projects"),
    [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (category === "All Projects" || p.category === category) &&
          [
            p.title,
            p.category,
            p.description,
            ...p.hardware,
            ...p.software,
            ...p.protocols,
          ]
            .join(" ")
            .toLowerCase()
            .includes(query.toLowerCase().trim()),
      ),
    [category, query],
  );
  return (
    <>
      <div className="project-toolbar">
        <div className="filter-list" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              key={c}
              className={category === c ? "selected" : ""}
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="search">
          <Search size={17} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search MCU, technology, project…"
            aria-label="Search projects"
          />
          {query && (
            <button onClick={() => setQuery("")} aria-label="Clear search">
              <X size={15} />
            </button>
          )}
        </label>
      </div>
      <div className="results-label" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        <span>ENGINEERING / DEVELOPMENT / EXPLORATION</span>
      </div>
      <div className="project-grid">
        {filtered.map((p) => (
          <article className="project-card" key={p.slug}>
            <Link
              href={`/projects/${p.slug}`}
              className="project-art"
              aria-label={`View ${p.title}`}
            >
              <ProjectMedia project={p} index={projects.indexOf(p)} />
              <span className="art-number">
                {String(projects.indexOf(p) + 1).padStart(2, "0")} / PROJECT
              </span>
              <span className="art-arrow">
                <ArrowUpRight size={20} />
              </span>
            </Link>
            <div className="project-body">
              <div className="project-category">
                <span />
                {p.category}
              </div>
              <h3>
                <Link href={`/projects/${p.slug}`}>{p.title}</Link>
              </h3>
              <p>{p.description}</p>
              <div className="tags">
                {[
                  ...p.hardware.slice(0, 2),
                  ...p.software.slice(0, 1),
                  ...p.protocols.slice(0, 2),
                ].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-bottom">
                <span>{p.developmentStatus}</span>
                <Link href={`/projects/${p.slug}`}>
                  View project <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      {!filtered.length && (
        <div className="empty-state">
          <h3>No matching projects</h3>
          <p>Try another controller, technology, or category.</p>
          <button
            className="button secondary"
            onClick={() => {
              setCategory("All Projects");
              setQuery("");
            }}
          >
            Reset filters
          </button>
        </div>
      )}
    </>
  );
}
