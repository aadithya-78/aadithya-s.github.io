import Image from "next/image";
import { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/visuals";
import { resolvePath } from "@/lib/utils";

// The first supplied image is the cover, so replacing project imagery is data-only.
export function ProjectMedia({
  project,
  index,
  detail = false,
}: {
  project: Project;
  index: number;
  detail?: boolean;
}) {
  if (project.video) {
    return (
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black flex items-center justify-center">
        <video
          controls
          playsInline
          preload="metadata"
          className="w-full h-full object-contain"
          aria-label={`${project.title} demonstration video`}
        >
          <source src={resolvePath(project.video)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  const image = project.images[0];
  if (!image)
    return (
      <>
        <ProjectVisual type={project.visual} index={index} />
        {detail && (
          <span className="illustration-label">
            Technical illustration · Not a project photograph
          </span>
        )}
      </>
    );
  return (
    <>
      <Image
        src={image.src}
        alt={image.caption}
        fill
        sizes={
          detail
            ? "(max-width: 800px) 100vw, 1280px"
            : "(max-width: 560px) 100vw, (max-width: 800px) 50vw, 420px"
        }
        preload={detail}
        className={`project-cover-image ${detail ? "project-cover-detail" : ""}`}
      />
      {detail ? (
        <span className="project-cover-caption">{image.caption}</span>
      ) : (
        <span className="project-image-label">
          {image.caption.includes("render") ? "PCB RENDER" : "PROJECT IMAGE"}
        </span>
      )}
    </>
  );
}
