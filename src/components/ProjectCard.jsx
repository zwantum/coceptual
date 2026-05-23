"use client";
import BrandDots from "./ui/BrandDots";

export default function ProjectCard({ title, location, tag, image, bgGradient, description }) {
  return (
    <div className="project-card glass-card h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] cursor-pointer group">
      {/* Project Image */}
      <div
        className="project-img shrink-0 overflow-hidden relative w-full"
        style={!image ? { background: bgGradient } : {}}
      >
        {image ? (
          <img
            src={image.src || image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          "Add Project Photo"
        )}
      </div>

      <div className="project-info flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-1.5 shrink-0">
          <span className="project-tag">{tag}</span>
          {/* Reusable Dots for Projects */}
          <BrandDots dotSize="7px" />
        </div>

        <h4 className="text-[0.95rem] font-bold text-[var(--text-dark)] mb-1 shrink-0">
          {title} — {location}
        </h4>

        <p className="text-[0.8rem] text-[var(--text-muted)] mt-auto">
          {description || "Turnkey execution · Living, kitchen, 3 bedrooms"}
        </p>
      </div>
    </div>
  );
}