"use client";

import { useState } from "react";
import Image from "next/image";
import { softwareTools, softwareCategories } from "@/data/software-tools";
import { resolvePath } from "@/lib/utils";
import { Cpu, Layers, Terminal, Database, Wrench } from "lucide-react";

export function SoftwareTools() {
  const [activeCategory, setActiveCategory] = useState<string>("All Tools");

  const filteredTools =
    activeCategory === "All Tools"
      ? softwareTools
      : softwareTools.filter((t) => t.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "EDA & PCB":
        return <Layers size={14} />;
      case "Embedded IDEs":
        return <Cpu size={14} />;
      case "Software & Apps":
        return <Terminal size={14} />;
      case "Databases":
        return <Database size={14} />;
      case "Hardware Debugging":
        return <Wrench size={14} />;
      default:
        return null;
    }
  };

  return (
    <div className="software-tools-wrapper">
      {/* Category filter tabs */}
      <div
        className="software-category-bar"
        role="tablist"
        aria-label="Software and Tools Categories"
      >
        {softwareCategories.map((cat) => (
          <button
            type="button"
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            className={`software-cat-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {getCategoryIcon(cat)}
            <span>{cat}</span>
          </button>
        ))}
      </div>

      {/* Grid of software tool cards with logos */}
      <div className="software-tools-grid">
        {filteredTools.map((tool) => (
          <div key={tool.name} className="software-card">
            <div className="software-card-top">
              <div className="software-logo-box">
                <Image
                  src={resolvePath(tool.icon)}
                  alt={`${tool.name} logo`}
                  width={34}
                  height={34}
                  className="software-logo-img"
                />
              </div>
              <div className="software-title-wrap">
                <h3 className="software-name">{tool.name}</h3>
                <span className="software-category-tag">{tool.category}</span>
              </div>
            </div>

            <p className="software-desc">{tool.description}</p>

            {tool.highlight && (
              <div className="software-highlight-pill">
                <span>{tool.highlight}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

