"use client";
import { useState } from "react";
import SectionDots from "./ui/SectionDots";
import BrandDots from "./ui/BrandDots";
import OrbField from "./ui/OrbField";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    service: "",
    city: "",
    property_type: "",
    budget: "",
    project_details: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit.");
      }

      setSubmitted(true);
      setFormData({
        full_name: "",
        phone: "",
        email: "",
        service: "",
        city: "",
        property_type: "",
        budget: "",
        project_details: ""
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const features = [
    { icon: <i className="fa-brands fa-unity" style={{ color: "rgb(28, 28, 28)" }}></i>, title: "Free 3D design concept", desc: "We'll prepare a basic 3D layout for your space at no charge." },
    { icon: <i className="fa-solid fa-file-invoice-dollar" style={{ color: "rgb(28, 28, 28)" }}></i>, title: "Detailed cost breakdown", desc: "Itemised quote with material options across three budget levels." },
    { icon: <i className="fa-solid fa-clock" style={{ color: "rgb(28, 28, 28)" }}></i>, title: "Response within 24 hours", desc: "Our Ranchi team will call you within one business day." },
    { icon: <i className="fa-solid fa-map-marker-alt" style={{ color: "rgb(28, 28, 28)" }}></i>, title: "Site visit included", desc: "We'll visit your space in Ranchi to understand it before quoting." },
  ];



  return (
    <section id="contact" className="relative py-16 md:py-24">
      {/* Background Orbs */}
      <OrbField>
        <div className="orb orb-o w-[360px] h-[360px] -top-[100px] -left-[80px] opacity-[0.18]" style={{ animationDelay: '-2s' }}></div>
        <div className="orb orb-p w-[280px] h-[280px] -bottom-[80px] -right-[60px] opacity-[0.16]" style={{ animationDelay: '-8s' }}></div>
        <div className="orb orb-m w-[220px] h-[220px] top-[40%] right-[20%] opacity-[0.12]" style={{ animationDelay: '-13s' }}></div>
      </OrbField>

      <div className="container relative z-10 mx-auto px-6 md:px-8 max-w-[1180px]">
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

        <div className="lead-grid grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-[72px] items-start">
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
              <i className="fab fa-whatsapp text-2xl text-[#25d366]"></i>
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
                <strong className="text-[var(--text-dark)]">Studio address:</strong> Your Studio Address, Ranchi, Jharkhand 834001<br />
                <strong className="text-[var(--text-dark)]">Phone:</strong> <a href="tel:+91XXXXXXXXXX" className="text-[var(--orange)] font-semibold">+91 XX XXXX XXXX</a><br />
                <strong className="text-[var(--text-dark)]">Email:</strong> hello@coceptualstudio.com<br />
                <strong className="text-[var(--text-dark)]">Hours:</strong> Mon–Sat, 9:30am – 7:00pm
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="glass-card form-card p-7 md:p-10 w-full h-auto">
            <BrandDots dotSize="9px" oOrder={1} mOrder={2} pOrder={3} style={{ marginBottom: '14px' }} />
            <div className="form-title text-[1.2rem] font-extrabold text-[var(--text-dark)] mb-1">Start Your Interior Project</div>
            <div className="form-sub text-[0.84rem] text-[var(--text-muted)] mb-6">Fill in your details and we&apos;ll prepare a free, customised quote for your space in Ranchi.</div>

            <form id="leadForm" onSubmit={handleSubmit}>
              <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-[14px]">
                <div className="form-group mb-3.5">
                  <label className="block text-[0.8rem] font-bold text-[var(--text-mid)] mb-1.5 uppercase tracking-wider">Full name *</label>
                  <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Your name" required className="form-input w-full bg-[var(--glass-bg)] border border-[var(--glass-border-heavy)] rounded-lg p-3 text-[0.88rem] outline-none focus:border-[var(--orange)] focus:shadow-[0_4px_12px_rgba(255,106,0,0.1)] focus:-translate-y-[1px] hover:shadow-sm hover:-translate-y-[1px] shadow-sm transition-all duration-300" />
                </div>
                <div className="form-group mb-3.5">
                  <label className="block text-[0.8rem] font-bold text-[var(--text-mid)] mb-1.5 uppercase tracking-wider">WhatsApp number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required className="form-input w-full bg-[var(--glass-bg)] border border-[var(--glass-border-heavy)] rounded-lg p-3 text-[0.88rem] outline-none focus:border-[var(--orange)] focus:shadow-[0_4px_12px_rgba(255,106,0,0.1)] focus:-translate-y-[1px] hover:shadow-sm hover:-translate-y-[1px] shadow-sm transition-all duration-300" />
                </div>
              </div>

              <div className="form-group mb-3.5">
                <label className="block text-[0.8rem] font-bold text-[var(--text-mid)] mb-1.5 uppercase tracking-wider">Email address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" className="form-input w-full bg-[var(--glass-bg)] border border-[var(--glass-border-heavy)] rounded-lg p-3 text-[0.88rem] outline-none focus:border-[var(--orange)] focus:shadow-[0_4px_12px_rgba(255,106,0,0.1)] focus:-translate-y-[1px] hover:shadow-sm hover:-translate-y-[1px] shadow-sm transition-all duration-300" />
              </div>

              <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-[14px]">
                <div className="form-group mb-3.5">
                  <label className="block text-[0.8rem] font-bold text-[var(--text-mid)] mb-1.5 uppercase tracking-wider">Service required *</label>
                  <select name="service" value={formData.service} onChange={handleChange} required className="form-input w-full bg-[var(--glass-bg)] border border-[var(--glass-border-heavy)] rounded-lg p-3 text-[0.88rem] outline-none focus:border-[var(--orange)] focus:shadow-[0_4px_12px_rgba(255,106,0,0.1)] focus:-translate-y-[1px] hover:shadow-sm hover:-translate-y-[1px] shadow-sm transition-all duration-300 appearance-none cursor-pointer">
                    <option value="">Select service</option>
                    <option value="Home Interiors (Full)">Home Interiors (Full)</option>
                    <option value="Modular Kitchen">Modular Kitchen</option>
                    <option value="Wardrobes & Storage">Wardrobes & Storage</option>
                    <option value="Living Room / Bedroom">Living Room / Bedroom</option>
                    <option value="Office / Commercial">Office / Commercial</option>
                    <option value="Custom Furniture">Custom Furniture</option>
                    <option value="Turnkey Execution">Turnkey Execution</option>
                    <option value="Balcony / Home Theatre">Balcony / Home Theatre</option>
                    <option value="Multiple Services">Multiple Services</option>
                  </select>
                </div>
                <div className="form-group mb-3.5">
                  <label className="block text-[0.8rem] font-bold text-[var(--text-mid)] mb-1.5 uppercase tracking-wider">Your city *</label>
                  <select name="city" value={formData.city} onChange={handleChange} required className="form-input w-full bg-[var(--glass-bg)] border border-[var(--glass-border-heavy)] rounded-lg p-3 text-[0.88rem] outline-none focus:border-[var(--orange)] focus:shadow-[0_4px_12px_rgba(255,106,0,0.1)] focus:-translate-y-[1px] hover:shadow-sm hover:-translate-y-[1px] shadow-sm transition-all duration-300 appearance-none cursor-pointer">
                    <option value="">Select city</option>
                    <option value="Ranchi">Ranchi</option>
                    <option value="Jamshedpur">Jamshedpur</option>
                    <option value="Bokaro">Bokaro</option>
                    <option value="Gumla">Gumla</option>
                    <option value="Other in Jharkhand">Other in Jharkhand</option>
                  </select>
                </div>
              </div>

              <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-[14px]">
                <div className="form-group mb-3.5">
                  <label className="block text-[0.8rem] font-bold text-[var(--text-mid)] mb-1.5 uppercase tracking-wider">Property type</label>
                  <select name="property_type" value={formData.property_type} onChange={handleChange} className="form-input w-full bg-[var(--glass-bg)] border border-[var(--glass-border-heavy)] rounded-lg p-3 text-[0.88rem] outline-none focus:border-[var(--orange)] focus:shadow-[0_4px_12px_rgba(255,106,0,0.1)] focus:-translate-y-[1px] hover:shadow-sm hover:-translate-y-[1px] shadow-sm transition-all duration-300 appearance-none cursor-pointer">
                    <option value="">Select type</option>
                    <option value="Apartment / Flat">Apartment / Flat</option>
                    <option value="Independent House / Villa">Independent House / Villa</option>
                    <option value="Office / Commercial">Office / Commercial</option>
                    <option value="Under Construction">Under Construction</option>
                  </select>
                </div>
                <div className="form-group mb-3.5">
                  <label className="block text-[0.8rem] font-bold text-[var(--text-mid)] mb-1.5 uppercase tracking-wider">Approx. budget</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} className="form-input w-full bg-[var(--glass-bg)] border border-[var(--glass-border-heavy)] rounded-lg p-3 text-[0.88rem] outline-none focus:border-[var(--orange)] focus:shadow-[0_4px_12px_rgba(255,106,0,0.1)] focus:-translate-y-[1px] hover:shadow-sm hover:-translate-y-[1px] shadow-sm transition-all duration-300 appearance-none cursor-pointer">
                    <option value="">Select range</option>
                    <option value="Under ₹3 Lakh">Under ₹3 Lakh</option>
                    <option value="₹3 – 7 Lakh">₹3 – 7 Lakh</option>
                    <option value="₹7 – 15 Lakh">₹7 – 15 Lakh</option>
                    <option value="₹15 – 30 Lakh">₹15 – 30 Lakh</option>
                    <option value="₹30 Lakh+">₹30 Lakh+</option>
                  </select>
                </div>
              </div>

              <div className="form-group mb-3.5">
                <label className="block text-[0.8rem] font-bold text-[var(--text-mid)] mb-1.5 uppercase tracking-wider">Tell us about your project</label>
                <textarea name="project_details" value={formData.project_details} onChange={handleChange} placeholder="e.g. 3BHK flat in Harmu, want modular kitchen + 3 bedrooms done. Moving in 4 months..." className="form-input w-full bg-[var(--glass-bg)] border border-[var(--glass-border-heavy)] rounded-lg p-3 text-[0.88rem] outline-none focus:border-[var(--orange)] focus:shadow-[0_4px_12px_rgba(255,106,0,0.1)] focus:-translate-y-[1px] hover:shadow-sm hover:-translate-y-[1px] shadow-sm transition-all duration-300 min-h-[88px]"></textarea>
              </div>

              <button type="submit" disabled={loading} className="form-submit w-full p-4 text-[0.97rem] font-bold cursor-pointer border-none rounded-xl bg-gradient-to-r from-[var(--magenta)] via-[var(--orange)] to-[var(--purple)] text-white shadow-[0_6px_24px_rgba(255,106,0,0.3)] hover:opacity-90 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,106,0,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                {loading ? "Submitting..." : "Get My Free Quote →"}
              </button>

              <div className="form-note text-[0.74rem] text-[var(--text-muted)] text-center mt-3">🔒 Your details are safe with us. No spam, no sharing.</div>
              {submitted && (
                <div className="success-msg bg-[#25d36614] border border-[#25d3664d] rounded-lg p-3.5 text-center text-[#1a9c4b] text-[0.88rem] font-semibold mt-3 transition-all">
                  ✓ Thank you! Our Ranchi team will contact you within 24 hours.
                </div>
              )}
              {errorMsg && (
                <div className="error-msg bg-red-500/10 border border-red-500/30 rounded-lg p-3.5 text-center text-red-500 text-[0.88rem] font-semibold mt-3">
                  ⚠️ {errorMsg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}