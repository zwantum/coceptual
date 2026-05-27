"use client";

export default function CTASection() {
  return (
    <div className="cta2-wrap py-16 md:py-[80px] relative">
      <div className="container mx-auto px-6 md:px-8 max-w-[1180px]">
        <div className="cta2-inner relative z-10 overflow-hidden bg-gradient-to-br from-[var(--magenta)] via-[var(--orange)] to-[var(--purple)] rounded-[28px] p-[36px] md:p-[60px_56px] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

          {/* Decorative Background Orbs (Pseudo-elements from original CSS) */}
          <div
            className="absolute -top-[40px] -right-[40px] w-[300px] h-[300px] rounded-full bg-white/10 pointer-events-none"
            style={{ zIndex: 0 }}
          ></div>
          <div
            className="absolute -bottom-[60px] left-[20%] w-[200px] h-[200px] rounded-full bg-white/5 pointer-events-none"
            style={{ zIndex: 0 }}
          ></div>

          <div className="relative z-10">
            <h2 className="text-white mb-2 leading-tight font-bold">
              Ranchi&apos;s interior design experts — one call away
            </h2>
            <p className="text-white/80 max-w-[480px]">
              Call or WhatsApp to discuss your project — free, fast and friendly advice from our Ranchi team.
            </p>
          </div>

          <div className="cta2-btns flex flex-nowrap gap-1 w-full md:w-auto shrink-0 relative z-10">
            <a
              href="tel:+91XXXXXXXXXX"
              className="btn btn-ghost flex-1 md:flex-none justify-center bg-white/15 text-white border-[1.5px] border-white/40 px-4 md:px-[26px] py-[13px] rounded-[10px] hover:bg-white/25 transition-all text-sm md:text-[0.93rem] whitespace-nowrap"
            >
              <i className="fa-solid fa-phone"></i> Call Now
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost flex-1 md:flex-none justify-center bg-white/15 text-white border-[1.5px] border-white/40 px-4 md:px-[26px] py-[13px] rounded-[10px] hover:bg-white/25 transition-all text-sm md:text-[0.93rem] whitespace-nowrap"
            >
              <i className="fab fa-whatsapp" style={{ fontSize: "20px" }}></i> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}