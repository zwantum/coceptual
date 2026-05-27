"use client";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import OrbField from "./ui/OrbField";
import BrandDots from "./ui/BrandDots";

// Import real hero image
import HeroFrontSlide from "../assets/Top Banner/3BHK_FRONTSILDE.webp";

export default function Hero() {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs for tilt rotation
  const rotateX = useSpring(useTransform(y, [0, 1], [15, -15]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-15, 15]), { stiffness: 220, damping: 22 });

  // Glare position transform
  const glareX = useTransform(x, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(y, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };
  return (
    <section className="hero relative min-h-screen flex items-center pt-[68px] overflow-hidden" id="home">
      <OrbField>
        <div className="orb orb-m w-[280px] h-[280px] md:w-[420px] md:h-[420px] top-[-40px] left-[-60px] md:top-[-80px] md:left-[-100px]" style={{ animationDelay: '0s' }}></div>
        <div className="orb orb-o w-[200px] h-[200px] md:w-[300px] md:h-[300px] top-[20%] right-[-40px] md:right-[-60px]" style={{ animationDelay: '-4s' }}></div>
        <div className="orb orb-p hidden md:block w-[360px] h-[360px] bottom-[-100px] left-[35%]" style={{ animationDelay: '-8s' }}></div>
      </OrbField>
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[1180px]" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
          <div className="b-section text-center lg:text-left pt-10 lg:pt-0 order-2 lg:order-1">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-white/90 backdrop-blur-md text-xs md:text-sm text-[var(--orange)] font-semibold mb-5 shadow-sm">Now serving Ranchi, Jamshedpur & Bokaro</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">Interior Designers<br /><span className="gradient-text">in Ranchi</span><br />You Can Trust</h1>
            <p className="hero-sub text-base md:text-[1.08rem] text-[var(--text-muted)] mb-8 max-w-lg mx-auto lg:mx-0">Coceptual Studio transforms homes and offices across Jharkhand — modular kitchens, wardrobe design, full-home interiors, and turnkey execution. One studio. Complete solution.</p>
            <div className="hero-btns flex flex-col sm:flex-row gap-3.5 mb-10 justify-center lg:justify-start">
              <a href="#contact" className="btn btn-primary text-center justify-center">Get Free Design Consultation</a>
              <a href="#projects" className="btn btn-outline text-center justify-center">View Our Work</a>
            </div>
            <div className="hero-stats">
              <div className="stat text-left">
                <div className="stat-num">200+</div>
                <div className="stat-label">Projects delivered</div>
              </div>
              <div className="stat text-left">
                <div className="stat-num">8+</div>
                <div className="stat-label">Years in Ranchi</div>
              </div>
              <div className="stat text-left">
                <div className="stat-num">4.9★</div>
                <div className="stat-label">Google rating</div>
              </div>
            </div>
          </div>

          <div className="hero-right flex relative flex-col gap-4 mt-8 lg:mt-0 order-1 lg:order-2">
            <motion.div 
              className="glass-card hero-main-card p-4 sm:p-6 md:p-8 w-auto h-auto cursor-pointer group relative"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ 
                rotateX, 
                rotateY, 
                transformStyle: "preserve-3d",
                perspective: 1000
              }}
            >
              <BrandDots dotSize="8px" style={{ marginBottom: '12px' }} />
              <div className="hero-img-box h-[170px] sm:h-[220px] md:h-[280px] rounded-xl overflow-hidden relative">
                <img 
                  src={HeroFrontSlide.src} 
                  alt="3BHK Turnkey project at Harmu Housing Colony, Ranchi" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 select-none pointer-events-none"
                />
              </div>
              <p className="text-[10px] sm:text-xs md:text-[0.8rem] text-[var(--text-muted)] mt-3 text-center">3BHK Turnkey — Harmu Housing Colony, Ranchi</p>
              
              {/* Glare/Shine Effect */}
              <motion.div 
                className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle 240px at ${glareX} ${glareY}, rgba(255,255,255,0.22), transparent)`
                }}
              />
            </motion.div>
            <div className="hero-mini-cards grid grid-cols-2 gap-3">
              <div className="glass-card hero-mini p-3 sm:p-4 md:px-5 md:py-4 w-auto h-auto">
                <BrandDots dotSize="6px" style={{ marginBottom: '6px' }} />
                <small className="text-[0.6rem] sm:text-[0.7rem] md:text-[0.74rem] text-[var(--text-muted)] font-medium">Delivered on time</small>
                <strong className="block text-[0.75rem] sm:text-[0.85rem] md:text-[0.95rem] text-[var(--text-dark)] font-bold mt-0.5">98% projects</strong>
              </div>
              <div className="glass-card hero-mini p-3 sm:p-4 md:px-5 md:py-4 w-auto h-auto">
                <BrandDots dotSize="6px" style={{ marginBottom: '6px' }} pOrder={1} oOrder={2} mOrder={3} />
                <small className="text-[0.6rem] sm:text-[0.7rem] md:text-[0.74rem] text-[var(--text-muted)] font-medium">Post-handover</small>
                <strong className="block text-[0.75rem] sm:text-[0.85rem] md:text-[0.95rem] text-[var(--text-dark)] font-bold mt-0.5">5-yr warranty</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}