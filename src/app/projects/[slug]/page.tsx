import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Code2,
  Network,
} from "lucide-react";
import { projects } from "@/data/projects";
import { resolvePath } from "@/lib/utils";
import { profile } from "@/data/profile";
import { Architecture, ProjectVisual } from "@/components/visuals";
import { ProjectMedia } from "@/components/projects/project-media";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    openGraph: { title: p.title, description: p.description },
    ...(profile.siteUrl
      ? { alternates: { canonical: `${profile.siteUrl}/projects/${slug}` } }
      : {}),
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  const index = projects.indexOf(p),
    next = projects[(index + 1) % projects.length];
  return (
    <main id="main" className="detail-main">
      <div className="container">
        <Link href="/#projects" className="back-link">
          <ArrowLeft size={16} /> Back to engineering projects
        </Link>
        <div className="detail-heading">
          <div className="eyebrow">
            PROJECT {String(index + 1).padStart(2, "0")} /{" "}
            {p.category.toUpperCase()}
          </div>
          <h1>{p.title}</h1>
          <p>{p.description}</p>
          <span className="status-badge">
            <span className="live-dot" />
            {p.developmentStatus}
          </span>
        </div>
        <div className="detail-cover">
          <ProjectMedia project={p} index={index} detail />
        </div>
        <div className="detail-grid">
          <aside className="detail-sidebar">
            <h2>Project at a glance</h2>
            {[
              { icon: Cpu, label: "Hardware", items: p.hardware },
              { icon: Code2, label: "Software", items: p.software },
              { icon: Network, label: "Interfaces", items: p.protocols },
            ]
              .filter((g) => g.items.length)
              .map(({ icon: Icon, label, items }) => (
                <div key={label}>
                  <h3>
                    <Icon size={16} />
                    {label}
                  </h3>
                  <ul>
                    {items.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            <Link href="/#contact" className="text-link">
              Discuss a project <ArrowUpRight size={16} />
            </Link>
          </aside>
          <div className="detail-content">
            <section>
              <div className="eyebrow">01 / OVERVIEW</div>
              <h2>Project Overview</h2>
              <p>{p.description}</p>
              <p className="muted">
                {p.developmentStatus}. This case study documents the supplied
                technical scope.
              </p>
            </section>
            {p.architecture.length > 0 && (
              <section>
                <div className="eyebrow">02 / SYSTEM DESIGN</div>
                <h2>System Architecture</h2>
                <p className="muted">
                  Conceptual functional blocks; this diagram is not an
                  electrical schematic. Select a block to inspect its position
                  in the system.
                </p>
                <Architecture nodes={p.architecture} />
              </section>
            )}
            {p.projectDetails.map((d) => (
              <section key={d.title}>
                <h2>{d.title}</h2>
                <p>{d.content}</p>
              </section>
            ))}
            {p.protocols.length > 0 && (
              <section>
                <h2>Communication Interfaces</h2>
                <div className="tags">
                  {p.protocols.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </section>
            )}
            <section>
              <h2>Technical Highlights</h2>
              <ul className="highlight-list">
                {p.features.map((f) => (
                  <li key={f}>
                    <ArrowRight size={16} />
                    {f}
                  </li>
                ))}
              </ul>
            </section>
            {p.featureStatus && (
              <section>
                <h2>Feature Implementation Status</h2>
                <p className="muted">
                  The functional scope is supplied; implementation status has
                  not yet been confirmed.
                </p>
                <div className="feature-status">
                  {p.featureStatus.map((f) => (
                    <div key={f.name}>
                      <span>{f.name}</span>
                      <span>{f.status}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
            <section>
              <h2>{p.video ? "Demonstration Video" : "Project Gallery"}</h2>
              {p.video ? (
                <div className="project-video-wrapper">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="project-video-element"
                    aria-label={`${p.title} demonstration video`}
                  >
                    <source src={resolvePath(p.video)} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : p.images.length ? (
                <div className="project-photo-gallery">
                  {p.images.map((img) => (
                    <figure key={img.src}>
                      <a
                        href={img.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open full-size image: ${img.caption}`}
                      >
                        <Image
                          src={img.src}
                          alt={img.caption}
                          width={img.width}
                          height={img.height}
                          sizes="(max-width: 560px) 100vw, (max-width: 800px) 50vw, 450px"
                        />
                      </a>
                      <figcaption>{img.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              ) : (
                <div className="gallery-placeholder">
                  <ProjectVisual type={p.visual} index={index} />
                  <p>
                    Illustrative technical visual.
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>
        <Link href={`/projects/${next.slug}`} className="next-project">
          <span>
            NEXT PROJECT<strong>{next.title}</strong>
          </span>
          <ArrowUpRight size={32} />
        </Link>
      </div>
    </main>
  );
}
