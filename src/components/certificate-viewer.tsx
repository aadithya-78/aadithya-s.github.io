"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, Download, ExternalLink, Maximize2, X, CheckCircle2 } from "lucide-react";
import { resolvePath } from "@/lib/utils";

export function CertificateViewer() {
  const [isOpen, setIsOpen] = useState(false);

  const pdfUrl = resolvePath("/documents/Aadithya_BE_Degree_Certificate.pdf");
  const imgUrl = "/images/degree-certificate.png";

  return (
    <div className="certificate-section-card">
      <div className="certificate-info-column">
        <div className="certificate-badge">
          <Award size={16} />
          <span>OFFICIAL ACADEMIC CREDENTIAL</span>
        </div>

        <h3 className="certificate-title">Bachelor of Engineering (B.E.)</h3>
        <p className="certificate-subtitle">
          Electronics & Communication Engineering · First Class with Distinction
        </p>

        <div className="certificate-meta-grid">
          <div className="certificate-meta-item">
            <span className="meta-label">University</span>
            <span className="meta-value">Anna University, Chennai</span>
          </div>
          <div className="certificate-meta-item">
            <span className="meta-label">Classification</span>
            <span className="meta-value highlight-distinction">
              <CheckCircle2 size={14} /> First Class with Distinction
            </span>
          </div>
          <div className="certificate-meta-item">
            <span className="meta-label">Degree Issued</span>
            <span className="meta-value">October 2024 (Exam: April 2024)</span>
          </div>
          <div className="certificate-meta-item">
            <span className="meta-label">Registration No.</span>
            <span className="meta-value font-mono">112620106001</span>
          </div>
        </div>

        <div className="certificate-actions">
          <button
            type="button"
            className="button primary"
            onClick={() => setIsOpen(true)}
          >
            <Maximize2 size={16} /> View Certificate
          </button>
          <a
            href={pdfUrl}
            download="Aadithya_BE_Degree_Certificate.pdf"
            className="button secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={16} /> Download PDF
          </a>
          <a
            href={pdfUrl}
            className="button secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} /> Open Document
          </a>
        </div>
      </div>

      <div className="certificate-preview-column">
        <button
          type="button"
          className="certificate-thumb-card"
          onClick={() => setIsOpen(true)}
          title="Click to expand degree certificate"
          aria-label="View full resolution Anna University Degree Certificate"
        >
          <div className="certificate-thumb-wrapper">
            <Image
              src={imgUrl}
              alt="Anna University Bachelor of Engineering Degree Certificate — Aadithya S"
              width={1452}
              height={2200}
              className="certificate-thumb-img"
              priority={false}
            />
            <div className="certificate-thumb-overlay">
              <Maximize2 size={24} />
              <span>Click to view full screen</span>
            </div>
          </div>
          <div className="certificate-thumb-footer">
            <span>Anna University · B.E. Degree Certificate</span>
            <span className="thumb-distinction-pill">Distinction</span>
          </div>
        </button>
      </div>

      {isOpen && (
        <div
          className="lightbox-backdrop"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Anna University Degree Certificate Modal"
        >
          <div
            className="lightbox-content certificate-lightbox"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-bar">
              <span className="lightbox-title">
                Anna University Chennai — Bachelor of Engineering (B.E.) Degree Certificate
              </span>
              <button
                type="button"
                className="lightbox-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close certificate viewer"
              >
                <X size={22} />
              </button>
            </div>

            <div className="lightbox-viewer certificate-lightbox-scroll">
              <Image
                src={imgUrl}
                alt="Anna University Bachelor of Engineering Degree Certificate — Aadithya S"
                width={1452}
                height={2200}
                className="lightbox-img certificate-full-img"
                sizes="(max-width: 900px) 95vw, 850px"
              />
            </div>

            <div className="lightbox-footer certificate-lightbox-footer">
              <a
                href={pdfUrl}
                download="Aadithya_BE_Degree_Certificate.pdf"
                className="button secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={14} /> Download PDF
              </a>
              <button
                type="button"
                className="button primary"
                onClick={() => setIsOpen(false)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

