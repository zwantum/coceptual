"use client";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import ServiceCard from "./ServiceCard";
import SectionDots from "./ui/SectionDots";
import ScrollReveal from "./ui/ScrollReveal";

// Import real services photos
import ServiceImg1 from "../assets/Services/Services_1_HomeInterior.webp";
import ServiceImg2 from "../assets/Services/Services_2_ModularKitchen.webp";
import ServiceImg3 from "../assets/Services/Services_3_Wardrobe&Storages.webp";
import ServiceImg4 from "../assets/Services/Services_4_Bedroom&LivingRoom.webp";
import ServiceImg5 from "../assets/Services/Services_5_Office&Commercial.webp";
import ServiceImg6 from "../assets/Services/Services_6_CustomFurniture.webp";
import ServiceImg7 from "../assets/Services/Services_7_TurnkeyExecutive.webp";
import ServiceImg8 from "../assets/Services/Services_8_Balcony&HomeTheatre.webp";

export default function Services() {
  const servicesData = [
    {
      title: "Home Interiors",
      image: ServiceImg1,
      desc: "Complete 2BHK, 3BHK and villa interior design in Ranchi. Living room, bedroom, kitchen, bathrooms — fully conceptualised and executed by our in-house team."
    },
    {
      title: "Modular Kitchens",
      image: ServiceImg2,
      desc: "L-shaped, U-shaped, parallel and island modular kitchens in Ranchi. Premium laminate, acrylic & membrane finishes with soft-close hardware. Transparent pricing."
    },
    {
      title: "Wardrobes & Storage",
      image: ServiceImg3,
      desc: "Sliding wardrobes, hinged wardrobes, walk-in closets and built-in storage solutions — designed to fit your exact bedroom dimensions in Ranchi."
    },
    {
      title: "Living Room & Bedroom",
      image: ServiceImg4,
      desc: "False ceiling designs, TV units, panel walls, accent lighting, modular storage and complete bedroom makeovers — your dream space, realised."
    },
    {
      title: "Office & Commercial",
      image: ServiceImg5,
      desc: "Corporate offices, clinics, retail showrooms, restaurants and co-working spaces across Ranchi and Jharkhand. Functional, brand-aligned commercial design."
    },
    {
      title: "Custom Furniture",
      image: ServiceImg6,
      desc: "Bespoke furniture manufactured in Ranchi to your exact measurements. Solid wood, plywood with veneer, MDF — crafted locally with a 5-year warranty."
    },
    {
      title: "Turnkey Execution",
      image: ServiceImg7,
      desc: "End-to-end interior work from design to handover. We manage every vendor, contractor and timeline — single-point accountability for a stress-free project."
    },
    {
      title: "Balcony & Home Theatre",
      image: ServiceImg8,
      desc: "Balcony makeovers, outdoor seating and premium home theatre setups with false ceiling, acoustic panels, projector & surround sound integration in Ranchi."
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="services" className="py-16 md:py-24 relative">
      {/* Background Orbs specifically for this section */}
      <div className="orb-field">
        <div className="orb orb-p w-[250px] h-[250px] md:w-[350px] md:h-[350px] -top-[50px] -right-[40px] md:-top-[100px] md:-right-[80px] opacity-[0.18]" style={{ animationDelay: '-2s' }}></div>
        <div className="orb orb-o hidden md:block w-[280px] h-[280px] -bottom-[80px] -left-[60px] opacity-[0.18]" style={{ animationDelay: '-7s' }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 max-w-[1180px] relative z-10 mb-10 md:mb-16">
        <ScrollReveal>
          <div className="section-head text-center">
            <SectionDots />
            <div className="section-label mt-2">What We Do</div>
            <h2 className="font-bold mb-4">
              Interior Design <span className="gradient-text">Services in Ranchi</span>
            </h2>
            <p className="text-[0.95rem] md:text-base px-2">From concept to completion — residential, commercial, and everything in between.</p>
          </div>
        </ScrollReveal>
      </div>

      {/* Cards Container with wider bounds */}
      <div className="w-full max-w-[1300px] mx-auto sm:px-6 md:px-8 relative z-10">
        {/* Stacking Cards Container */}
        <div ref={containerRef} className="relative w-full">
          {servicesData.map((svc, index) => {
            const targetScale = 1 - ((servicesData.length - index) * 0.025);
            const range = [index * (1 / servicesData.length), 1];
            return (
              <ServiceCard
                key={index}
                index={index}
                title={svc.title}
                image={svc.image}
                desc={svc.desc}
                progress={scrollYProgress}
                range={range}
                targetScale={targetScale}
                total={servicesData.length}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}