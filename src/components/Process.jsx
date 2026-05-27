"use client";
import { useState } from "react";
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= steps.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? steps.length - 1 : prev - 1));
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section id="process" className="relative">
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

        {/* Mobile Slider View (visible on < sm screens) */}
        <div
          className="block sm:hidden overflow-hidden relative w-full"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out py-2"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: "100%"
            }}
          >
            {steps.map((step, i) => (
              <div key={i} className="w-full shrink-0 px-2">
                <div className="process-glass-card cursor-default mx-auto max-w-[340px]">
                  <div className="bg-number">{i + 1}</div>
                  <div className="content">
                    <div className="step">{step.n}</div>
                    <h2>{step.t}</h2>
                    <p>{step.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === index
                    ? "w-6 bg-gradient-to-r from-[var(--orange)] to-[var(--magenta)]"
                    : "w-2 bg-[rgba(0,0,0,0.15)] hover:bg-[rgba(0,0,0,0.3)]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid View (visible on >= sm screens) */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[20px]">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15} type="fade-up" className="process-step h-full">
              <div className="process-glass-card cursor-default">
                <div className="bg-number">{i + 1}</div>
                <div className="content">
                  <div className="step">{step.n}</div>
                  <h2>{step.t}</h2>
                  <p>{step.d}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}