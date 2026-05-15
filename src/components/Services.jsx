"use client";
import ServiceCard from "./ServiceCard";
import SectionDots from "./ui/SectionDots";
import ScrollReveal from "./ui/ScrollReveal";

export default function Services() {
  const servicesData = [
    { title: "Home Interiors", icon: "🏠", desc: "Complete 2BHK, 3BHK and villa interior design in Ranchi. Living room, bedroom, kitchen, bathrooms — fully conceptualised and executed." },
    { title: "Modular Kitchens", icon: "🍳", desc: "L-shaped, U-shaped, parallel and island modular kitchens in Ranchi. Premium laminate, acrylic & membrane finishes." },
    { title: "Wardrobes & Storage", icon: "📄", desc: "Sliding wardrobes, hinged wardrobes, walk-in closets and built-in storage solutions — designed to fit your exact dimensions." },
    { title: "Turnkey Execution", icon: "🔑", desc: "End-to-end interior work from design to handover. We manage every vendor, contractor and timeline — stress-free." }
  ];

  return (
    <section id="services" className="py-16 md:py-24 relative">
      {/* Background Orbs specifically for this section */}
      <div className="orb-field">
        <div className="orb orb-p w-[250px] h-[250px] md:w-[350px] md:h-[350px] -top-[50px] -right-[40px] md:-top-[100px] md:-right-[80px] opacity-[0.18]" style={{ animationDelay: '-2s' }}></div>
        <div className="orb orb-o hidden md:block w-[280px] h-[280px] -bottom-[80px] -left-[60px] opacity-[0.18]" style={{ animationDelay: '-7s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1180px] relative z-10">
        <ScrollReveal>
          <div className="section-head text-center mb-10 md:mb-[60px]">
            <SectionDots />
            <div className="section-label mt-2">What We Do</div>
            <h2 className="font-bold mb-4">
              Interior Design <span className="gradient-text">Services in Ranchi</span>
            </h2>
            <p className="text-[0.95rem] md:text-base px-2">From concept to completion — residential, commercial, and everything in between.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[22px]">
            {servicesData.map((svc, index) => (
              <ServiceCard 
                key={index}
                title={svc.title}
                icon={svc.icon}
                desc={svc.desc}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}