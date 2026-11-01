import Image from "next/image";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { ProjectShowcase } from "@/components/projects/project-showcase";
import { CertificateViewer } from "@/components/certificate-viewer";
import { ContactAction } from "@/components/layout";
import { MapPin, ArrowDown, Phone } from "lucide-react";
import { resolvePath } from "@/lib/utils";

export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.introduction,
    homeLocation: { "@type": "Place", name: profile.location },
    ...(profile.siteUrl ? { url: profile.siteUrl } : {}),
    sameAs: [profile.github, profile.linkedin].filter(Boolean),
  };

  // Only display the 6 featured projects in the requested order
  const displayProjects = projects.filter((p) => p.featured);

  return (
    <main id="main" className="compact-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />

      {/* Prominent Hero with Aadithya.jpeg photo */}
      <section className="compact-hero">
        <div className="container">
          <div className="compact-hero-grid">
            <div className="compact-hero-content">
              <div className="compact-hero-top">
                <span className="live-dot-badge">
                  <span className="live-dot" /> AVAILABLE FOR HARDWARE & FIRMWARE ROLES
                </span>
                <span className="location-tag">
                  <MapPin size={13} /> {profile.location}
                </span>
              </div>

              <h1 className="compact-hero-title">
                {profile.name}
                <span className="compact-hero-role"> — {profile.title}</span>
              </h1>

              <p className="compact-hero-desc">
                {profile.introduction}
              </p>

              <div className="compact-hero-actions">
                <a href="#projects" className="button primary">
                  View Projects & Demos <ArrowDown size={15} />
                </a>
                <ContactAction kind="resume" className="button secondary" />
                <ContactAction kind="email" className="button secondary" />
                <ContactAction kind="linkedin" className="button secondary" />
                {profile.phone && (
                  <a href={`tel:${profile.phone}`} className="button secondary">
                    <Phone size={15} /> {profile.phone}
                  </a>
                )}
              </div>
            </div>

            {profile.avatar && (
              <div className="hero-photo-showcase">
                <div className="hero-photo-frame">
                  <Image
                    src={resolvePath(profile.avatar)}
                    alt={profile.name}
                    width={460}
                    height={307}
                    priority
                    className="hero-photo-img"
                  />
                  <div className="hero-photo-caption">
                    <span className="photo-name">{profile.name}</span>
                    <span className="photo-title">{profile.title} · Chennai</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Projects: Content & Media in One View, Ordered strictly */}
      <section className="compact-showcase-section">
        <div className="container">
          <div className="compact-section-heading">
            <div className="eyebrow">PORTFOLIO WORK</div>
            <h2>Engineering Projects & Demonstrations</h2>
            <p>
              Direct hardware prototypes, embedded firmware, board designs, and live video demonstrations.
            </p>
          </div>

          <ProjectShowcase projects={displayProjects} />
        </div>
      </section>

      {/* Degree Certificate Section */}
      <section id="education" className="compact-certificate-section">
        <div className="container">
          <div className="compact-section-heading">
            <div className="eyebrow">ACADEMIC CREDENTIAL</div>
            <h2>Anna University Degree Certificate</h2>
            <p>
              Bachelor of Engineering in Electronics and Communication Engineering · First Class with Distinction (April 2024).
            </p>
          </div>

          <CertificateViewer />
        </div>
      </section>

      {/* Short, clean Contact section */}
      <section id="contact" className="compact-contact-section">
        <div className="container">
          <div className="compact-contact-box">
            <div className="eyebrow">GET IN TOUCH</div>
            <h2>Let’s connect.</h2>
            <p>
              Open to embedded engineering opportunities, hardware/firmware design, and collaborative development.
            </p>
            <div className="compact-contact-buttons">
              <ContactAction kind="email" className="button primary" />
              <ContactAction kind="linkedin" className="button secondary" />
              <ContactAction kind="resume" className="button secondary" />
              {profile.phone && (
                <a href={`tel:${profile.phone}`} className="button secondary">
                  <Phone size={15} /> {profile.phone}
                </a>
              )}
            </div>
            <div className="compact-location">
              <MapPin size={14} /> Chennai, Tamil Nadu, India
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
