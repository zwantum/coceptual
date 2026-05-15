"use client";
import { useState } from "react";
import SectionDots from "./ui/SectionDots";
import BrandDots from "./ui/BrandDots";
import OrbField from "./ui/OrbField";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Button text changes and success message logic
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 5000);
  };

  const features = [
    { icon: "🎨", title: "Free 3D design concept", desc: "We'll prepare a basic 3D layout for your space at no charge." },
    { icon: "📋", title: "Detailed cost breakdown", desc: "Itemised quote with material options across three budget levels." },
    { icon: "📞", title: "Response within 24 hours", desc: "Our Ranchi team will call you within one business day." },
    { icon: "🏗️", title: "Site visit included", desc: "We'll visit your space in Ranchi to understand it before quoting." },
  ];

  return (
    <section id="contact" className="relative py-16 md:py-24">
      {/* Background Orbs */}
      <OrbField>
        <div className="orb orb-o w-[360px] h-[360px] -top-[100px] -left-[80px] opacity-[0.18]" style={{ animationDelay: '-2s' }}></div>
        <div className="orb orb-p w-[280px] h-[280px] -bottom-[80px] -right-[60px] opacity-[0.16]" style={{ animationDelay: '-8s' }}></div>
        <div className="orb orb-m w-[220px] h-[220px] top-[40%] right-[20%] opacity-[0.12]" style={{ animationDelay: '-13s' }}></div>
      </OrbField>

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-[1180px]">
        <div className="section-head text-center mb-[60px]">
          <SectionDots />
          <div className="section-label mt-2">Free Consultation</div>
          <h2 className="font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] leading-tight">
            Get Your <span className="gradient-text">Free Design Quote</span> Today
          </h2>
          <p className="max-w-[560px] mx-auto mt-4 text-[var(--text-muted)]">
            Our Ranchi design team responds within 24 hours — completely free, no commitment.
          </p>
        </div>

        <div className="lead-grid grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[72px] items-start">
          {/* Left Side: Info */}
          <div className="lead-info">
            <div className="lead-features flex flex-col gap-4 mb-7">
              {features.map((feat, i) => (
                <div key={i} className="lead-feat flex items-start gap-[14px]">
                  <div className="lead-feat-icon w-[38px] h-[38px] rounded-[10px] shrink-0 flex items-center justify-center text-base bg-[var(--glass-bg)] border border-[var(--glass-border)]">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-[0.92rem] font-bold text-[var(--text-dark)]">{feat.title}</h4>
                    <p className="text-[0.82rem] text-[var(--text-muted)] mt-0.5">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="wa-box flex items-center gap-3 p-4 rounded-2xl bg-[#25d36612] border border-[#25d36633] mt-6">
              <span className="text-2xl">💬</span>
              <div>
                <div className="text-[0.8rem] text-[var(--text-muted)]">Prefer WhatsApp?</div>
                <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className="text-[#1a9c4b] font-bold text-[0.9rem] hover:underline">
                  Message us directly on WhatsApp →
                </a>
              </div>
            </div>

            <div className="glass-card mt-5 p-5 md:p-6 w-auto h-auto">
              <BrandDots dotSize="9px" style={{ marginBottom: '12px' }} />
              <p className="text-[0.82rem] text-[var(--text-muted)] leading-[1.7]">
                📍 <strong className="text-[var(--text-dark)]">Studio address:</strong> Your Studio Address, Ranchi, Jharkhand 834001<br />
                📞 <strong className="text-[var(--text-dark)]">Phone:</strong> <a href="tel:+91XXXXXXXXXX" className="text-[var(--orange)] font-semibold">+91 XX XXXX XXXX</a><br />
                ✉️ <strong className="text-[var(--text-dark)]">Email:</strong> hello@coceptualstudio.com<br />
                🕒 <strong className="text-[var(--text-dark)]">Hours:</strong> Mon–Sat, 9:30am – 7:00pm
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="glass-card form-card p-10 w-auto h-auto">
            <BrandDots dotSize="9px" oOrder={1} mOrder={2} pOrder={3} style={{ marginBottom: '14px' }} />
            <div className="form-title text-[1.2rem] font-extrabold text-[var(--text-dark)] mb-1">Start Your Interior Project</div>
            <div className="form-sub text-[0.84rem] text-[var(--text-muted)] mb-6">Fill in your details and we&apos;ll prepare a free, customised quote for your space in Ranchi.</div>
            
            <form id="leadForm" onSubmit={handleSubmit}>
              <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-[14px]">
                <div className="form-group mb-3.5">
                  <label className="block text-[0.8rem] font-bold text-[var(--text-mid)] mb-1.5 uppercase tracking-wider">Full name *</label>
                  <input type="text" placeholder="Your name" required className="form-input w-full bg-[var(--glass-bg)] border border-[var(--glass-border-heavy)] rounded-lg p-3 text-[0.88rem] outline-none focus:border-[var(--orange)] focus:shadow-[0_4px_12px_rgba(255,106,0,0.1)] focus:-translate-y-[1px] hover:shadow-sm hover:-translate-y-[1px] shadow-sm transition-all duration-300" />
                </div>
                <div className="form-group mb-3.5">
                  <label className="block text-[0.8rem] font-bold text-[var(--text-mid)] mb-1.5 uppercase tracking-wider">Phone number *</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" required className="form-input w-full bg-[var(--glass-bg)] border border-[var(--glass-border-heavy)] rounded-lg p-3 text-[0.88rem] outline-none focus:border-[var(--orange)] focus:shadow-[0_4px_12px_rgba(255,106,0,0.1)] focus:-translate-y-[1px] hover:shadow-sm hover:-translate-y-[1px] shadow-sm transition-all duration-300" />
                </div>
              </div>

              <div className="form-group mb-3.5">
                <label className="block text-[0.8rem] font-bold text-[var(--text-mid)] mb-1.5 uppercase tracking-wider">Email address</label>
                <input type="email" placeholder="you@email.com" className="form-input w-full bg-[var(--glass-bg)] border border-[var(--glass-border-heavy)] rounded-lg p-3 text-[0.88rem] outline-none focus:border-[var(--orange)] focus:shadow-[0_4px_12px_rgba(255,106,0,0.1)] focus:-translate-y-[1px] hover:shadow-sm hover:-translate-y-[1px] shadow-sm transition-all duration-300" />
              </div>

              <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-[14px]">
                <div className="form-group mb-3.5">
                  <label className="block text-[0.8rem] font-bold text-[var(--text-mid)] mb-1.5 uppercase tracking-wider">Service required *</label>
                  <select required className="form-input w-full bg-[var(--glass-bg)] border border-[var(--glass-border-heavy)] rounded-lg p-3 text-[0.88rem] outline-none focus:border-[var(--orange)] focus:shadow-[0_4px_12px_rgba(255,106,0,0.1)] focus:-translate-y-[1px] hover:shadow-sm hover:-translate-y-[1px] shadow-sm transition-all duration-300 appearance-none cursor-pointer">
                    <option value="">Select service</option>
                    <option>Home Interiors (Full)</option>
                    <option>Modular Kitchen</option>
                    <option>Office / Commercial</option>
                  </select>
                </div>
                <div className="form-group mb-3.5">
                  <label className="block text-[0.8rem] font-bold text-[var(--text-mid)] mb-1.5 uppercase tracking-wider">Your city *</label>
                  <select required className="form-input w-full bg-[var(--glass-bg)] border border-[var(--glass-border-heavy)] rounded-lg p-3 text-[0.88rem] outline-none focus:border-[var(--orange)] focus:shadow-[0_4px_12px_rgba(255,106,0,0.1)] focus:-translate-y-[1px] hover:shadow-sm hover:-translate-y-[1px] shadow-sm transition-all duration-300 appearance-none cursor-pointer">
                    <option value="">Select city</option>
                    <option>Ranchi</option>
                    <option>Jamshedpur</option>
                    <option>Bokaro</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group mb-3.5">
                <label className="block text-[0.8rem] font-bold text-[var(--text-mid)] mb-1.5 uppercase tracking-wider">Tell us about your project</label>
                <textarea placeholder="e.g. 3BHK flat in Harmu..." className="form-input w-full bg-[var(--glass-bg)] border border-[var(--glass-border-heavy)] rounded-lg p-3 text-[0.88rem] outline-none focus:border-[var(--orange)] focus:shadow-[0_4px_12px_rgba(255,106,0,0.1)] focus:-translate-y-[1px] hover:shadow-sm hover:-translate-y-[1px] shadow-sm transition-all duration-300 min-h-[88px]"></textarea>
              </div>

              <button type="submit" className="form-submit w-full p-4 text-[0.97rem] font-bold cursor-pointer border-none rounded-xl bg-gradient-to-r from-[var(--magenta)] via-[var(--orange)] to-[var(--purple)] text-white shadow-[0_6px_24px_rgba(255,106,0,0.3)] hover:opacity-90 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,106,0,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                {submitted ? "Submitting..." : "Get My Free Quote →"}
              </button>

              <div className="form-note text-[0.74rem] text-[var(--text-muted)] text-center mt-3">🔒 Your details are safe with us. No spam, no sharing.</div>
              <div className={`success-msg ${submitted ? 'show block' : 'hidden'} bg-[#25d36614] border border-[#25d3664d] rounded-lg p-3.5 text-center text-[#1a9c4b] text-[0.88rem] font-semibold mt-3 transition-all`}>
                ✓ Thank you! Our Ranchi team will contact you within 24 hours.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}