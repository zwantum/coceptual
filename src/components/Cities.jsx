"use client";
import BrandDots from "./ui/BrandDots";
import SectionDots from "./ui/SectionDots";
import OrbField from "./ui/OrbField";
import ScrollReveal from "./ui/ScrollReveal";

export default function Cities() {
  return (
    <section id="cities" className="">
      {/* Exact Orb Field from HTML */}
      <OrbField>
        <div 
          className="orb orb-m" 
          style={{ width: '280px', height: '280px', top: '-70px', right: '10%', opacity: 0.15, animationDelay: '-5s' }}
        ></div>
        <div 
          className="orb orb-p" 
          style={{ width: '240px', height: '240px', bottom: '-50px', left: '-50px', opacity: 0.15, animationDelay: '-11s' }}
        ></div>
      </OrbField>

      <div className="container mx-auto px-6 md:px-8 max-w-[1180px]" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-head text-center mb-10 md:mb-[60px]">
          <SectionDots oOrder={1} mOrder={2} pOrder={3} />
          <div className="section-label mt-2">Where We Work</div>
          <h2 className="font-bold mb-4">Serving <span className="gradient-text">Pan Jharkhand</span></h2>
          <p className="text-[0.95rem] md:text-base px-2">Based in Ranchi with active project teams across all major Jharkhand cities.</p>
        </div>

        <div className="city-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-[20px]">
          {/* Ranchi Card */}
          <ScrollReveal delay={0} type="fade-up">
            <div className="glass-card city-card h-full flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)] cursor-default" style={{ width: 'auto' }}>
              <span className="city-primary-badge">Primary</span>
              <div className="city-icon">🏙️</div>
              <BrandDots 
                dotSize="8px" 
                style={{ justifyContent: 'center', marginBottom: '10px' }} 
              />
              <h4 className="font-bold text-[1.1rem]">Ranchi</h4>
              <p className="mt-2 flex-1">Our home base. Full team, fastest turnaround, all 8 services available.</p>
            </div>
          </ScrollReveal>

          {/* Jamshedpur Card */}
          <ScrollReveal delay={0.15} type="fade-up">
            <div className="glass-card city-card h-full flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)] cursor-default" style={{ width: 'auto' }}>
              <div className="city-icon">🏗️</div>
              <BrandDots 
                dotSize="8px" 
                style={{ justifyContent: 'center', marginBottom: '10px' }} 
                oOrder={1} pOrder={2} mOrder={3} 
              />
              <h4 className="font-bold text-[1.1rem]">Jamshedpur</h4>
              <p className="mt-2 flex-1">Active project team. Home interiors, modular kitchens &amp; commercial work.</p>
            </div>
          </ScrollReveal>

          {/* Bokaro Card */}
          <ScrollReveal delay={0.3} type="fade-up">
            <div className="glass-card city-card h-full flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)] cursor-default" style={{ width: 'auto' }}>
              <div className="city-icon">🏠</div>
              <BrandDots 
                dotSize="8px" 
                style={{ justifyContent: 'center', marginBottom: '10px' }} 
                pOrder={1} mOrder={2} oOrder={3} 
              />
              <h4 className="font-bold text-[1.1rem]">Bokaro</h4>
              <p className="mt-2 flex-1">Residential and commercial interior design across Bokaro Steel City.</p>
            </div>
          </ScrollReveal>

          {/* Gumla Card */}
          <ScrollReveal delay={0.45} type="fade-up">
            <div className="glass-card city-card h-full flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)] cursor-default" style={{ width: 'auto' }}>
              <div className="city-icon">🌿</div>
              <BrandDots 
                dotSize="8px" 
                style={{ justifyContent: 'center', marginBottom: '10px' }} 
                mOrder={1} pOrder={2} oOrder={3} 
              />
              <h4 className="font-bold text-[1.1rem]">Gumla</h4>
              <p className="mt-2 flex-1">Selected home interior and modular kitchen projects on request.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}