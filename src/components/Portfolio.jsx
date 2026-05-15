"use client";
import ProjectCard from "./ProjectCard";
import SectionDots from "./ui/SectionDots";
import OrbField from "./ui/OrbField";
import ScrollReveal from "./ui/ScrollReveal";

export default function Portfolio() {
  const projectData = [
    {
      title: "3BHK Full Home",
      location: "Harmu Housing Colony",
      tag: "Home Interiors",
      bgGradient: "linear-gradient(135deg,rgba(123,63,228,0.08),rgba(255,106,0,0.06))"
    },
    {
      title: "U-Shape Kitchen",
      location: "Lalpur, Ranchi",
      tag: "Modular Kitchen",
      bgGradient: "linear-gradient(135deg,rgba(255,106,0,0.08),rgba(224,32,176,0.06))"
    },
    {
      title: "Corporate Office",
      location: "Main Road, Ranchi",
      tag: "Office Interiors",
      bgGradient: "linear-gradient(135deg,rgba(224,32,176,0.08),rgba(123,63,228,0.06))"
    },
    {
      title: "Walk-in Wardrobe",
      location: "Kanke Road, Ranchi",
      tag: "Wardrobe Design",
      bgGradient: "linear-gradient(135deg,rgba(123,63,228,0.07),rgba(224,32,176,0.07))"
    },
    {
      title: "Home Theatre Setup",
      location: "Bariatu, Ranchi",
      tag: "Home Theatre",
      bgGradient: "linear-gradient(135deg,rgba(255,106,0,0.07),rgba(123,63,228,0.07))"
    },
    {
      title: "Living Room Makeover",
      location: "Ashok Nagar, Ranchi",
      tag: "Living Room",
      bgGradient: "linear-gradient(135deg,rgba(224,32,176,0.07),rgba(255,106,0,0.07))"
    }
  ];

  return (
    <section id="projects" className="">
      <OrbField>
        <div className="orb orb-o" style={{ width: '300px', height: '300px', top: '-80px', right: '-60px', opacity: 0.14, animationDelay: '-4s' }}></div>
        <div className="orb orb-p" style={{ width: '260px', height: '260px', bottom: '-60px', left: '-40px', opacity: 0.14, animationDelay: '-10s' }}></div>
      </OrbField>

      <div className="container mx-auto px-4 md:px-8 max-w-[1180px]" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-head text-center mb-10 md:mb-[60px]">
          <SectionDots mOrder={1} pOrder={2} oOrder={3} />
          <div className="section-label mt-2">Our Work</div>
          <h2 className="font-bold mb-4">Recent Projects <span className="gradient-text">in Ranchi</span></h2>
          <p className="text-[0.95rem] md:text-base px-2">A selection of homes and offices we&apos;ve transformed across Jharkhand.</p>
        </div>

        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[24px]">
          {projectData.map((proj, i) => (
            <ScrollReveal key={i} delay={i * 0.1} type="fade-up" className="h-full">
              <ProjectCard 
                title={proj.title}
                location={proj.location}
                tag={proj.tag}
                bgGradient={proj.bgGradient}
              />
            </ScrollReveal>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <a href="#contact" className="btn btn-outline">Request Full Portfolio →</a>
        </div>
      </div>
    </section>
  );
}