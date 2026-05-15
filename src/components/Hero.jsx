import OrbField from "./ui/OrbField";
import BrandDots from "./ui/BrandDots";

export default function Hero() {
  return (
    <section className="hero relative min-h-screen flex items-center pt-[68px] overflow-hidden" id="home">
      <OrbField>
        <div className="orb orb-m w-[280px] h-[280px] md:w-[420px] md:h-[420px] top-[-40px] left-[-60px] md:top-[-80px] md:left-[-100px]" style={{ animationDelay: '0s' }}></div>
        <div className="orb orb-o w-[200px] h-[200px] md:w-[300px] md:h-[300px] top-[20%] right-[-40px] md:right-[-60px]" style={{ animationDelay: '-4s' }}></div>
        <div className="orb orb-p hidden md:block w-[360px] h-[360px] bottom-[-100px] left-[35%]" style={{ animationDelay: '-8s' }}></div>
      </OrbField>
      <div className="container mx-auto px-4 md:px-8 w-full max-w-[1180px]" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
          <div className="text-center lg:text-left pt-10 lg:pt-0">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-white/90 backdrop-blur-md text-xs md:text-sm text-[var(--orange)] font-semibold mb-5 shadow-sm">Now serving Ranchi, Jamshedpur & Bokaro</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">Interior Designers<br /><span className="gradient-text">in Ranchi</span><br />You Can Trust</h1>
            <p className="hero-sub text-base md:text-[1.08rem] text-[var(--text-muted)] mb-8 max-w-lg mx-auto lg:mx-0">Coceptual Studio transforms homes and offices across Jharkhand — modular kitchens, wardrobe design, full-home interiors, and turnkey execution. One studio. Complete solution.</p>
            <div className="hero-btns flex flex-col sm:flex-row gap-3.5 mb-10 justify-center lg:justify-start">
              <a href="#contact" className="btn btn-primary text-center justify-center">Get Free Design Consultation</a>
              <a href="#projects" className="btn btn-outline text-center justify-center">View Our Work</a>
            </div>
            <div className="hero-stats flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start">
              <div className="stat pl-4 border-l-[3px] border-[var(--orange)] text-left"><div className="stat-num text-2xl md:text-[1.9rem] font-extrabold text-[var(--text-dark)] leading-none">200+</div><div className="stat-label text-xs md:text-sm text-[var(--text-muted)] mt-1">Projects delivered</div></div>
              <div className="stat pl-4 border-l-[3px] border-[var(--orange)] text-left"><div className="stat-num text-2xl md:text-[1.9rem] font-extrabold text-[var(--text-dark)] leading-none">8+</div><div className="stat-label text-xs md:text-sm text-[var(--text-muted)] mt-1">Years in Ranchi</div></div>
              <div className="stat pl-4 border-l-[3px] border-[var(--orange)] text-left"><div className="stat-num text-2xl md:text-[1.9rem] font-extrabold text-[var(--text-dark)] leading-none">4.9★</div><div className="stat-label text-xs md:text-sm text-[var(--text-muted)] mt-1">Google rating</div></div>
            </div>
          </div>
          <div className="hero-right relative flex flex-col gap-4">
            <div className="glass-card hero-main-card p-6 md:p-8 w-auto h-auto">
              <BrandDots dotSize="10px" style={{ marginBottom: '14px' }} />
              <div className="hero-img-box h-[220px] md:h-[280px] rounded-xl flex flex-col items-center justify-center gap-2 border-[1.5px] border-dashed border-[rgba(123,63,228,0.2)] bg-gradient-to-br from-[rgba(224,32,176,0.1)] via-[rgba(255,106,0,0.08)] to-[rgba(123,63,228,0.1)]">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="18" width="44" height="30" rx="4" stroke="rgba(123,63,228,0.35)" strokeWidth="2"/><path d="M18 18V14a4 4 0 014-4h12a4 4 0 014 4v4" stroke="rgba(255,106,0,0.35)" strokeWidth="2"/><circle cx="28" cy="33" r="6" stroke="rgba(224,32,176,0.35)" strokeWidth="2"/></svg>
                <p className="text-[0.75rem] text-[var(--text-muted)] tracking-widest uppercase font-semibold">Add your project photos here</p>
              </div>
              <p className="text-xs md:text-[0.8rem] text-[var(--text-muted)] mt-3 text-center">3BHK Turnkey — Harmu Housing Colony, Ranchi</p>
            </div>
            <div className="hero-mini-cards grid grid-cols-2 gap-3">
              <div className="glass-card hero-mini p-4 md:px-5 md:py-4 w-auto h-auto">
                <BrandDots dotSize="7px" style={{ marginBottom: '8px' }} />
                <small className="text-[0.7rem] md:text-[0.74rem] text-[var(--text-muted)] font-medium">Delivered on time</small>
                <strong className="block text-[0.85rem] md:text-[0.95rem] text-[var(--text-dark)] font-bold mt-0.5">98% projects</strong>
              </div>
              <div className="glass-card hero-mini p-4 md:px-5 md:py-4 w-auto h-auto">
                <BrandDots dotSize="7px" style={{ marginBottom: '8px' }} pOrder={1} oOrder={2} mOrder={3} />
                <small className="text-[0.7rem] md:text-[0.74rem] text-[var(--text-muted)] font-medium">Post-handover</small>
                <strong className="block text-[0.85rem] md:text-[0.95rem] text-[var(--text-dark)] font-bold mt-0.5">5-yr warranty</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}