"use client";
import BrandDots from "./ui/BrandDots";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer relative pt-14 bg-[var(--glass-bg)] backdrop-blur-md border-t border-[var(--glass-border)]">
      <div className="container mx-auto px-4 md:px-8 max-w-[1180px]">
        <div className="footer-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10">
          
          {/* Brand Column */}
          <div className="footer-brand">
            <a href="#" className="logo flex items-center gap-2.5">
              <BrandDots dotSize="11px" />
              <span className="logo-text text-[1.12rem] font-extrabold text-[var(--text-dark)]">
                Coceptual <span className="text-[var(--orange)]">Studio</span>
              </span>
            </a>
            <p className="text-[0.86rem] text-[var(--text-muted)] mt-4 leading-relaxed max-w-[260px]">
              Premier interior designers in Ranchi. Transforming homes and offices across Jharkhand since 2016.
            </p>
            <div className="footer-social flex gap-2 mt-4">
              <a href="#" className="social-btn w-[34px] h-[34px] rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border-heavy)] flex items-center justify-center text-[0.78rem] text-[var(--text-muted)] font-bold transition-all hover:bg-[var(--orange)] hover:text-white">FB</a>
              <a href="#" className="social-btn w-[34px] h-[34px] rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border-heavy)] flex items-center justify-center text-[0.78rem] text-[var(--text-muted)] font-bold transition-all hover:bg-[var(--orange)] hover:text-white">IN</a>
              <a href="#" className="social-btn w-[34px] h-[34px] rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border-heavy)] flex items-center justify-center text-[0.78rem] text-[var(--text-muted)] font-bold transition-all hover:bg-[var(--orange)] hover:text-white">TW</a>
            </div>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h5 className="text-[0.87rem] font-bold text-[var(--text-dark)] mb-3.5 tracking-wider uppercase">Services</h5>
            <ul className="flex flex-col gap-2 list-none p-0">
              <li><a href="#services" className="text-[0.83rem] text-[var(--text-muted)] hover:text-[var(--orange)] transition-colors">Home Interiors</a></li>
              <li><a href="#services" className="text-[0.83rem] text-[var(--text-muted)] hover:text-[var(--orange)] transition-colors">Modular Kitchens</a></li>
              <li><a href="#services" className="text-[0.83rem] text-[var(--text-muted)] hover:text-[var(--orange)] transition-colors">Office Design</a></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h5 className="text-[0.87rem] font-bold text-[var(--text-dark)] mb-3.5 tracking-wider uppercase">Company</h5>
            <ul className="flex flex-col gap-2 list-none p-0">
              <li><a href="#why" className="text-[0.83rem] text-[var(--text-muted)] hover:text-[var(--orange)] transition-colors">Why Choose Us</a></li>
              <li><a href="#process" className="text-[0.83rem] text-[var(--text-muted)] hover:text-[var(--orange)] transition-colors">Our Process</a></li>
              <li><a href="#faq" className="text-[0.83rem] text-[var(--text-muted)] hover:text-[var(--orange)] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h5 className="text-[0.87rem] font-bold text-[var(--text-dark)] mb-3.5 tracking-wider uppercase">Contact</h5>
            <div className="footer-contact flex flex-col gap-2">
              <div className="footer-contact-item flex items-start gap-2 text-[0.82rem] text-[var(--text-muted)]">
                <span className="text-[var(--orange)] shrink-0">📍</span>
                <span>Ranchi, Jharkhand</span>
              </div>
              <div className="footer-contact-item flex items-start gap-2 text-[0.82rem] text-[var(--text-muted)]">
                <span className="text-[var(--orange)] shrink-0">📞</span>
                <span>+91 XX XXXX XXXX</span>
              </div>
              <div className="footer-contact-item flex items-start gap-2 text-[0.82rem] text-[var(--text-muted)]">
                <span className="text-[var(--orange)] shrink-0">✉️</span>
                <span>hello@coceptualstudio.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom flex items-center justify-between py-4 border-t border-black/5 flex-wrap gap-2.5">
          <p className="text-[0.76rem] text-[var(--text-muted)]">
            © {currentYear} Coceptual Studio. All rights reserved.
          </p>
          <div className="footer-bottom-links flex gap-[18px]">
            <a href="#" className="text-[0.76rem] text-[var(--text-muted)] hover:text-[var(--orange)]">Privacy Policy</a>
            <a href="#" className="text-[0.76rem] text-[var(--text-muted)] hover:text-[var(--orange)]">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* SEO Address Bar (The tiny bar at the very bottom) */}
      <div className="footer-address-bar bg-black/[0.03] border-t border-black/[0.05] py-2.5 text-center">
        <div className="container mx-auto px-6">
          <p className="text-[0.73rem] text-[var(--text-muted)]">
           📍 Coceptual Studio, Your Studio Address, Ranchi, Jharkhand 834001  •  📞 <a href="#" className="text-[var(--orange)] font-semibold hover:underline">+91 XX XXXX XXXX </a>•  ✉ hello@coceptualstudio.com  •  GST: XXXXXXXXXXXX
          </p>
        </div>
      </div>
    </footer>
  );
}