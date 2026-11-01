import Image from "next/image";
import { ArrowUpRight, MapPin, Presentation } from "lucide-react";
import { workshops } from "@/data/workshops";
import { Reveal } from "@/components/visuals";

export function Workshops() {
  return (
    <section id="workshops" className="section section-tinted">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span>07</span> / WORKSHOPS &amp; KNOWLEDGE SHARING
              </div>
              <h2>Taking engineering beyond the workbench.</h2>
            </div>
            <p>
              Sharing practical embedded systems experience through conversation
              and hands-on learning.
            </p>
          </div>
          {workshops.map((workshop) => (
            <article key={workshop.id} aria-labelledby={`${workshop.id}-title`}>
              <div className="workshop-layout">
                <div className="workshop-copy">
                  <div className="workshop-role">
                    <Presentation size={18} />
                    {workshop.role}
                  </div>
                  <h3 id={`${workshop.id}-title`}>
                    {workshop.title}
                    <span>From code to working hardware.</span>
                  </h3>
                  <div className="workshop-venue">
                    <MapPin size={15} />
                    {workshop.venue}
                  </div>
                  <p>{workshop.description}</p>
                  <p>{workshop.reflection}</p>
                  <div className="tags">
                    {workshop.topics.map((topic) => (
                      <span key={topic}>{topic}</span>
                    ))}
                  </div>
                  <a
                    href={workshop.sourceUrl}
                    className="button secondary workshop-source"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the LinkedIn post <ArrowUpRight size={16} />
                  </a>
                </div>
                <WorkshopImage image={workshop.images[0]} featured />
              </div>
              <div className="workshop-photo-strip">
                {workshop.images.slice(1).map((image) => (
                  <WorkshopImage key={image.src} image={image} />
                ))}
              </div>
              <p className="workshop-attribution">
                Photographs from Aadithya S’s original Code2Board LinkedIn post.
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
function WorkshopImage({
  image,
  featured = false,
}: {
  image: (typeof workshops)[number]["images"][number];
  featured?: boolean;
}) {
  return (
    <figure className="workshop-photo">
      <a
        href={image.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open full-size photograph: ${image.caption}`}
      >
        <Image
          src={image.src}
          alt={image.caption}
          width={image.width}
          height={image.height}
          sizes={
            featured
              ? "(max-width: 800px) 100vw, 650px"
              : "(max-width: 560px) 100vw, 400px"
          }
        />
      </a>
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}
