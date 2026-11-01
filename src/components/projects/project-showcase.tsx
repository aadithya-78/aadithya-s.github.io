"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Film,
  Layers,
  PlayCircle,
} from "lucide-react";
import { Project, ProjectImage, ProjectVideo } from "@/data/projects";
import { resolvePath } from "@/lib/utils";

function VideoPlayer({
  videos,
  title,
}: {
  videos: ProjectVideo[];
  title: string;
}) {
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const currentVideo = videos[activeVideoIdx] || videos[0];

  return (
    <div className="project-video-wrapper">
      <div className="media-badge">
        <Film size={13} />
        <span>
          VIDEO DEMONSTRATION{" "}
          {videos.length > 1 ? `(${activeVideoIdx + 1}/${videos.length})` : ""}
        </span>
      </div>

      <div className="video-player-container">
        <video
          key={currentVideo.src}
          controls
          playsInline
          preload="metadata"
          className="project-video-element"
          aria-label={`${title} video: ${currentVideo.caption}`}
        >
          <source src={resolvePath(currentVideo.src)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="gallery-caption">
        <span className="caption-count">
          {String(activeVideoIdx + 1).padStart(2, "0")} /{" "}
          {String(videos.length).padStart(2, "0")}
        </span>
        <span className="caption-text">{currentVideo.caption}</span>
      </div>

      {videos.length > 1 && (
        <div className="video-playlist-bar">
          {videos.map((vid, idx) => (
            <button
              type="button"
              key={vid.src}
              className={`video-playlist-btn ${
                idx === activeVideoIdx ? "active" : ""
              }`}
              onClick={() => setActiveVideoIdx(idx)}
            >
              <PlayCircle size={14} />
              <span>{vid.caption.split("—")[0].trim()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ImageGallery({
  images,
  title,
  onOpenLightbox,
}: {
  images: ProjectImage[];
  title: string;
  onOpenLightbox: (index: number) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = images[activeIndex] || images[0];

  if (!images.length) return null;

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="project-gallery-box">
      <div className="media-badge">
        <Layers size={13} />
        <span>
          HARDWARE & SYSTEM IMAGERY ({activeIndex + 1}/{images.length})
        </span>
      </div>

      <div className="gallery-stage">
        <button
          type="button"
          className="stage-clickable"
          onClick={() => onOpenLightbox(activeIndex)}
          title="Click to view full screen"
          aria-label={`View full resolution image: ${current.caption}`}
        >
          <Image
            src={resolvePath(current.src)}
            alt={current.caption}
            width={current.width}
            height={current.height}
            className="stage-img"
            priority={activeIndex === 0}
            sizes="(max-width: 768px) 100vw, 980px"
          />
          <div className="stage-zoom-hint">
            <Maximize2 size={16} />
            <span>Click to enlarge</span>
          </div>
        </button>

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="gallery-nav-btn prev"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="gallery-nav-btn next"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      <div className="gallery-caption">
        <span className="caption-count">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </span>
        <span className="caption-text">{current.caption}</span>
      </div>

      {images.length > 1 && (
        <div
          className="thumbnail-track"
          role="tablist"
          aria-label="Images selector"
        >
          {images.map((img, idx) => (
            <button
              type="button"
              key={img.src}
              role="tab"
              aria-selected={idx === activeIndex}
              className={`thumbnail-btn ${idx === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(idx)}
              title={img.caption}
            >
              <Image
                src={resolvePath(img.src)}
                alt=""
                width={80}
                height={60}
                className="thumbnail-img"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectMediaBlock({
  project,
  onOpenLightbox,
}: {
  project: Project;
  onOpenLightbox: (images: ProjectImage[], index: number, title: string) => void;
}) {
  const allVideos: ProjectVideo[] =
    project.videos ||
    (project.video
      ? [{ src: project.video, caption: `${project.title} Video Demonstration` }]
      : []);

  const hasVideos = allVideos.length > 0;
  const hasImages = project.images.length > 0;

  // Default to video if available, else images
  const [activeTab, setActiveTab] = useState<"video" | "images">(
    hasVideos ? "video" : "images"
  );

  return (
    <div className="project-media-container">
      {hasVideos && hasImages && (
        <div className="media-toggle-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "video"}
            className={`media-tab-btn ${activeTab === "video" ? "active" : ""}`}
            onClick={() => setActiveTab("video")}
          >
            <Film size={15} />
            <span>
              Video Demonstration {allVideos.length > 1 ? `(${allVideos.length})` : ""}
            </span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "images"}
            className={`media-tab-btn ${activeTab === "images" ? "active" : ""}`}
            onClick={() => setActiveTab("images")}
          >
            <Layers size={15} />
            <span>Images & Hardware ({project.images.length})</span>
          </button>
        </div>
      )}

      {hasVideos && activeTab === "video" && (
        <VideoPlayer videos={allVideos} title={project.title} />
      )}

      {hasImages && activeTab === "images" && (
        <ImageGallery
          images={project.images}
          title={project.title}
          onOpenLightbox={(imgIndex) =>
            onOpenLightbox(project.images, imgIndex, project.title)
          }
        />
      )}
    </div>
  );
}

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [lightboxData, setLightboxData] = useState<{
    images: ProjectImage[];
    index: number;
    title: string;
  } | null>(null);

  const openLightbox = (
    projectImages: ProjectImage[],
    index: number,
    title: string
  ) => {
    setLightboxData({ images: projectImages, index, title });
  };

  const closeLightbox = () => {
    setLightboxData(null);
  };

  const nextLightboxImage = () => {
    if (!lightboxData) return;
    setLightboxData({
      ...lightboxData,
      index: (lightboxData.index + 1) % lightboxData.images.length,
    });
  };

  const prevLightboxImage = () => {
    if (!lightboxData) return;
    setLightboxData({
      ...lightboxData,
      index:
        (lightboxData.index - 1 + lightboxData.images.length) %
        lightboxData.images.length,
    });
  };

  return (
    <>
      <div className="showcase-list" id="projects">
        {projects.map((p, idx) => (
          <article className="compact-project-card" key={p.slug} id={p.slug}>
            <header className="compact-project-header">
              <div className="compact-project-meta">
                <span className="project-index">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {p.organization && (
                  <span className="project-org">{p.organization}</span>
                )}
              </div>
              <h2 className="compact-project-title">{p.title}</h2>
              <p className="compact-project-desc">{p.description}</p>
              {p.mediaNotes && (
                <p className="compact-project-notes">{p.mediaNotes}</p>
              )}
              {p.hardware && p.hardware.length > 0 && (
                <div className="compact-project-tech">
                  {p.hardware.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <div className="compact-project-media">
              <ProjectMediaBlock
                project={p}
                onOpenLightbox={openLightbox}
              />
            </div>
          </article>
        ))}
      </div>

      {lightboxData && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxData.title}
          onClick={closeLightbox}
        >
          <div
            className="lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-bar">
              <span className="lightbox-title">
                {lightboxData.title} —{" "}
                {lightboxData.images[lightboxData.index]?.caption}
              </span>
              <button
                type="button"
                className="lightbox-close"
                onClick={closeLightbox}
                aria-label="Close fullscreen view"
              >
                <X size={22} />
              </button>
            </div>

            <div className="lightbox-viewer">
              <Image
                src={resolvePath(lightboxData.images[lightboxData.index]?.src || "")}
                alt={lightboxData.images[lightboxData.index]?.caption || ""}
                width={lightboxData.images[lightboxData.index]?.width || 1500}
                height={lightboxData.images[lightboxData.index]?.height || 1000}
                className="lightbox-img"
                sizes="95vw"
              />

              {lightboxData.images.length > 1 && (
                <>
                  <button
                    type="button"
                    className="lightbox-nav-btn prev"
                    onClick={prevLightboxImage}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button
                    type="button"
                    className="lightbox-nav-btn next"
                    onClick={nextLightboxImage}
                    aria-label="Next image"
                  >
                    <ChevronRight size={28} />
                  </button>
                </>
              )}
            </div>

            <div className="lightbox-footer">
              <span>
                {lightboxData.index + 1} of {lightboxData.images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
