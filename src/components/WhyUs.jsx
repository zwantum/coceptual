"use client";
import BrandDots from "./ui/BrandDots";
import SectionDots from "./ui/SectionDots";
import OrbField from "./ui/OrbField";
import ScrollReveal from "./ui/ScrollReveal";

export default function WhyUs() {
  return (
    <>
      {/* <CTACard/> */}
      <section id="why" className="py-16 lg:py-24 relative">
        <div className="container-call container mx-auto px-6 md:px-8 max-w-[1180px] -mt-12 relative z-20">
          <div className="glass-card cta-strip p-6 md:p-10 lg:p-[56px_52px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
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
        {/* ---main body--- */}
        <OrbField>
          <div className="orb orb-m" style={{ width: '300px', height: '300px', bottom: '-80px', right: '-60px', opacity: 0.15, animationDelay: '-3s' }}></div>
          <div className="orb orb-o" style={{ width: '240px', height: '240px', top: '-60px', left: '20%', opacity: 0.12, animationDelay: '-9s' }}></div>
        </OrbField>
        <div className="container mx-auto px-6 md:px-8 max-w-[1180px] mt-16 md:mt-24" style={{ position: 'relative', zIndex: 1 }}>
          <div className="why-grid grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <ScrollReveal type="slide-right">
              <div>
                <SectionDots oOrder={1} pOrder={2} mOrder={3} />
                <div className="section-label">Why Coceptual Studio</div>
                <h2 className="mb-4">Ranchi&apos;s Most Trusted <span className="gradient-text">Interior Studio</span></h2>
                <p className="text-[var(--text-muted)] mb-8 md:mb-10 text-[0.95rem] md:text-base">We&apos;ve built a reputation across Jharkhand for design quality, honest pricing and on-time delivery. Here&apos;s why 200+ families chose us.</p>
                <div className="why-list flex flex-col gap-6">
                  <div className="why-item flex gap-4 md:gap-5 group transition-all duration-300 hover:translate-x-2"><div className="why-num shrink-0 w-[42px] h-[42px] rounded-xl bg-gradient-to-br from-[var(--magenta)] via-[var(--orange)] to-[var(--purple)] flex items-center justify-center font-extrabold text-white text-[0.88rem] transition-colors duration-300 group-hover:text-[var(--text-dark)]">01</div><div><h4 className="text-[var(--text-dark)] font-bold text-[0.97rem] mb-1">In-house design &amp; execution team</h4><p className="text-[0.86rem] text-[var(--text-muted)]">No outsourcing. Our own designers and carpenters work on every project — consistent quality, full accountability.</p></div></div>
                  <div className="why-item flex gap-4 md:gap-5 group transition-all duration-300 hover:translate-x-2"><div className="why-num shrink-0 w-[42px] h-[42px] rounded-xl bg-gradient-to-br from-[var(--magenta)] via-[var(--orange)] to-[var(--purple)] flex items-center justify-center font-extrabold text-white text-[0.88rem] transition-colors duration-300 group-hover:text-[var(--text-dark)]">02</div><div><h4 className="text-[var(--text-dark)] font-bold text-[0.97rem] mb-1">Transparent, fixed pricing</h4><p className="text-[0.86rem] text-[var(--text-muted)]">You get a detailed quote before work begins. No hidden costs, no surprise bills at handover.</p></div></div>
                  <div className="why-item flex gap-4 md:gap-5 group transition-all duration-300 hover:translate-x-2"><div className="why-num shrink-0 w-[42px] h-[42px] rounded-xl bg-gradient-to-br from-[var(--magenta)] via-[var(--orange)] to-[var(--purple)] flex items-center justify-center font-extrabold text-white text-[0.88rem] transition-colors duration-300 group-hover:text-[var(--text-dark)]">03</div><div><h4 className="text-[var(--text-dark)] font-bold text-[0.97rem] mb-1">On-time delivery guarantee</h4><p className="text-[0.86rem] text-[var(--text-muted)]">We sign a delivery timeline with every client and honour it. Delays cost you; we take that seriously.</p></div></div>
                  <div className="why-item flex gap-4 md:gap-5 group transition-all duration-300 hover:translate-x-2"><div className="why-num shrink-0 w-[42px] h-[42px] rounded-xl bg-gradient-to-br from-[var(--magenta)] via-[var(--orange)] to-[var(--purple)] flex items-center justify-center font-extrabold text-white text-[0.88rem] transition-colors duration-300 group-hover:text-[var(--text-dark)]">04</div><div><h4 className="text-[var(--text-dark)] font-bold text-[0.97rem] mb-1">5-year post-handover warranty</h4><p className="text-[0.86rem] text-[var(--text-muted)]">All modular furniture and carpentry comes with a 5-year warranty — total peace of mind after we leave.</p></div></div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal type="fade-up" delay={0.2}>
              <div className="why-visual flex flex-col gap-4 mt-8 lg:mt-0">
                <div className="glass-card rating-card flex items-center gap-4 md:gap-[18px] p-5 md:p-[24px_28px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)] cursor-default w-full">
                  <div className="rating-big text-3xl md:text-[2.4rem] font-extrabold bg-gradient-to-br from-[var(--magenta)] via-[var(--orange)] to-[var(--purple)] text-transparent bg-clip-text">4.9</div>
                  <div className="flex-1">
                    <div className="rating-stars text-[var(--orange)] text-sm md:text-base mb-1">★★★★★</div>
                    <div className="rating-meta"><strong className="block text-[0.85rem] md:text-[0.9rem] text-[var(--text-dark)]">Google Reviews</strong><span className="block text-[0.7rem] md:text-[0.77rem] text-[var(--text-muted)]">Based on 120+ verified reviews</span></div>
                  </div>
                  <div className="ml-auto">
                    <BrandDots dotSize="9px" style={{ flexDirection: 'column', gap: '5px' }} />
                  </div>
                </div>
                <div className="glass-card review-card p-5 md:p-[22px_24px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)] cursor-default w-full">
                  <div style={{ color: 'var(--orange)', fontSize: '0.88rem', marginBottom: '8px' }}>★★★★★</div>
                  <p className="review-text text-[0.8rem] md:text-[0.86rem] text-[var(--text-mid)] leading-[1.65] mb-[14px] italic">&quot;Coceptual Studio did our complete 3BHK interior in Doranda. The modular kitchen is absolutely stunning. Delivered on time, within budget — highly recommend.&quot;</p>
                  <div className="review-author flex items-center gap-2.5">
                    <div className="avatar w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center font-bold text-[0.7rem] md:text-[0.78rem] text-white shrink-0" style={{ background: 'var(--magenta)' }}>RK</div>
                    <div className="review-author-info"><strong className="block text-[0.8rem] md:text-[0.87rem] text-[var(--text-dark)]">Rakesh Kumar</strong><span className="block text-[0.7rem] md:text-[0.76rem] text-[var(--text-muted)]">3BHK Flat, Doranda, Ranchi</span></div>
                  </div>
                </div>
                <div className="glass-card review-card p-5 md:p-[22px_24px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)] cursor-default w-full">
                  <div style={{ color: 'var(--orange)', fontSize: '0.88rem', marginBottom: '8px' }}>★★★★★</div>
                  <p className="review-text text-[0.8rem] md:text-[0.86rem] text-[var(--text-mid)] leading-[1.65] mb-[14px] italic">&quot;"Best interior designer in Ranchi. Our office interiors at Lalpur came out amazing — professional team, great design sense and zero hassle."&quot;</p>
                  <div className="review-author flex items-center gap-2.5">
                    <div className="avatar w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center font-bold text-[0.7rem] md:text-[0.78rem] text-white shrink-0" style={{ background: 'var(--orange)' }}>SP</div>
                    <div className="review-author-info"><strong className="block text-[0.8rem] md:text-[0.87rem] text-[var(--text-dark)]">Sunita Prasad</strong><span className="block text-[0.7rem] md:text-[0.76rem] text-[var(--text-muted)]">Office Interiors, Lalpur, Ranchi</span></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}