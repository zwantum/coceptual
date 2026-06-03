"use client";
import BrandDots from "./ui/BrandDots";

export default function CTAStrip() {
  return (
    <div className="contact-top container mx-auto px-6 md:px-8 max-w-[1180px] mt-16 relative z-20">
      <div className="glass-card cta-strip flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
        <div>
          <div className="flex justify-center md:justify-start mb-4"><BrandDots /></div>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold mb-2 leading-tight">
            Ready to <span className="gradient-text">transform your space?</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-[460px] mx-auto md:mx-0 text-[0.95rem]">
            Join 200+ happy homeowners in Ranchi. Get a detailed quote for your project in just 24 hours.
          </p>
        </div>

        <div className="cta-btns flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
          <a href="#contact" className="btn btn-primary justify-center px-[26px] py-[13px] rounded-[10px] font-semibold w-full sm:w-auto">
            Get Free Quote →
          </a>
          <a href="https://wa.me/91XXXXXXXXXX" className="btn btn-wa justify-center px-[26px] py-[13px] rounded-[10px] font-semibold inline-flex items-center gap-2 w-full sm:w-auto">
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
