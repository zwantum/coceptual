"use client";
import SectionDots from "./ui/SectionDots";
import OrbField from "./ui/OrbField";
import ScrollReveal from "./ui/ScrollReveal";

export default function Process() {
  const steps = [
    { n: "01", t: "Consultation", d: "Free site visit and design brief. We understand your vision, budget and timeline before anything is proposed." },
    { n: "02", t: "Design & Quote", d: "3D renders, material samples and a fully itemised fixed-price quote - no hidden costs ever." },
    { n: "03", t: "Execution", d: "Our in-house team handles civil, carpentry, electrical and finishing work entirely end-to-end." },
    { n: "04", t: "Handover", d: "Snagging check, deep clean and handover — with a 5-year warranty certificate on all carpentry." },
  ];

  return (
    <section id="process" className="">
      <OrbField>
        <div className="orb orb-p" style={{ width: '320px', height: '320px', top: '-80px', left: '-80px', opacity: 0.16, animationDelay: '-1s' }}></div>
        <div className="orb orb-m" style={{ width: '260px', height: '260px', bottom: '-60px', right: '-40px', opacity: 0.16, animationDelay: '-7s' }}></div>
      </OrbField>
      <div className="container mx-auto px-6 md:px-8 max-w-[1180px]" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-head text-center mb-10 md:mb-[60px]">
          <SectionDots pOrder={1} mOrder={2} oOrder={3} />
          <div className="section-label mt-2">How We Work</div>
          <h2 className="font-bold mb-4">Our <span className="gradient-text">4-Step Process</span></h2>
          <p className="text-[0.95rem] md:text-base px-2">From your first call to keys in hand — a smooth, transparent journey with no surprises.</p>
        </div>
        <div className="process-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[20px]">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15} type="fade-up" className="process-step h-full">
              <div className="glass-card process-card h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)] cursor-default">
                <div className="pstep-num transition-colors duration-300 group-hover:text-[var(--orange)] shrink-0">{step.n}</div>
                <h4 className="font-bold text-[1.05rem] mb-2">{step.t}</h4>
                <p className="flex-1">{step.d}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}