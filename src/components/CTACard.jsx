"use client";
import BrandDots from "./ui/BrandDots";

export default function CTAStrip() {
  return (
    <div className="container mx-auto px-6 -mt-12 resltive z-20">
      <div className="glass-card cta-strip p-[56px_52px] flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <BrandDots />
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold mb-2 leading-tight">
            Ready to <span className="gradient-text">transform your space?</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-[460px] text-[0.95rem]">
            Join 200+ happy homeowners in Ranchi. Get a detailed quote for your project in just 24 hours.
          </p>
        </div>

        <div className="cta-btns flex flex-wrap gap-3 shrink-0">
          <a href="#contact" className="btn btn-primary px-[26px] py-[13px] rounded-[10px] font-semibold">
            Get Free Quote →
          </a>
          <a href="https://wa.me/91XXXXXXXXXX" className="btn btn-wa px-[26px] py-[13px] rounded-[10px] font-semibold inline-flex items-center gap-2">
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}