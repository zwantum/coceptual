"use client";
import BrandDots from "./ui/BrandDots";

export default function ServiceCard({ title, image, desc }) {
  return (
    <div className="glass-card service-card w-full h-full flex flex-col transition-all duration-300 hover:-translate-y-[5px] cursor-pointer" style={{ width: 'auto' }}>
      {/* Image container */}
      <div className="svc-img-wrap">
        <img
          src={image.src || image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card Body */}
      <div className="svc-content">
        {/* 2 Dots for Services Section */}
        <div className="svc-dots flex gap-[5px] mb-[14px]">
          <BrandDots count={3} dotSize="8px" />
        </div>

        <h3 className="text-[clamp(1.05rem,2vw,1.3rem)] font-bold text-[var(--text-dark)] mb-2">
          {title}
        </h3>

        <p className="flex-grow text-[0.87rem] text-[var(--text-muted)] leading-[1.6] mb-[20px]">
          {desc}
        </p>

        <a href="#contact" className="svc-link mt-auto text-[var(--orange)] font-bold text-[0.83rem] inline-flex items-center gap-[5px]">
          Get Quote <span className="text-base">→</span>
        </a>
      </div>
    </div>
  );
}