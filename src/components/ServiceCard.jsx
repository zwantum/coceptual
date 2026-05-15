"use client";
import BrandDots from "./ui/BrandDots";

export default function ServiceCard({ title, icon, desc }) {
  return (
    <div className="glass-card service-card p-[24px] md:p-[30px] w-full h-full flex flex-col transition-all duration-300 hover:-translate-y-[5px] cursor-pointer" style={{ width: 'auto' }}>
      {/* 2 Dots for Services Section */}
      <div className="svc-dots flex gap-[5px] mb-[14px]">
        <BrandDots count={2} dotSize="8px" />
      </div>

      {/* Icon Wrap */}
      <div className="svc-icon-wrap w-[44px] h-[44px] md:w-[50px] md:h-[50px] rounded-[14px] bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center text-[1.1rem] md:text-[1.3rem] mb-[18px]">
        {icon}
      </div>

      <h3 className="text-[clamp(1.05rem,2vw,1.3rem)] font-bold text-[var(--text-dark)] mb-2">
        {title}
      </h3>
      
      <p className="flex-1 text-[0.87rem] text-[var(--text-muted)] leading-[1.6] mb-8 md:mb-14">
        {desc}
      </p>

      <a href="#contact" className="svc-link mt-auto text-[var(--orange)] font-bold text-[0.83rem] inline-flex items-center gap-[5px]">
        Get Quote <span className="text-base">→</span>
      </a>
    </div>
  );
}