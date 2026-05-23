"use client";
import ProjectCard from "./ProjectCard";
import SectionDots from "./ui/SectionDots";
import OrbField from "./ui/OrbField";
import ScrollReveal from "./ui/ScrollReveal";

// Import real project photos
import ProjectImg1 from "../assets/Project Section/ProjectSection_1_3bhk.webp";
import ProjectImg2 from "../assets/Project Section/ProjectSection_2_UShapeKitchen.webp";
import ProjectImg3 from "../assets/Project Section/ProjectSection_3_CorporateOffice.webp";
import ProjectImg4 from "../assets/Project Section/ProjectSection_4_WalkingWardrobe.webp";
import ProjectImg5 from "../assets/Project Section/ProjectSection_5_HomeTheatreSetup.webp";
import ProjectImg6 from "../assets/Project Section/ProjectSection_6_LivingRoomMakeover.webp";

export default function Portfolio() {
  const projectData = [
    {
      title: "3BHK Full Home",
      location: "Harmu Housing Colony",
      tag: "Home Interiors",
      image: ProjectImg1,
      bgGradient: "linear-gradient(135deg,rgba(123,63,228,0.08),rgba(255,106,0,0.06))",
      description: "Turnkey execution · Living, kitchen, 3 bedrooms"
    },
    {
      title: "U-Shape Kitchen",
      location: "Lalpur, Ranchi",
      tag: "Modular Kitchen",
      image: ProjectImg2,
      bgGradient: "linear-gradient(135deg,rgba(255,106,0,0.08),rgba(224,32,176,0.06))",
      description: "Acrylic finish · Soft-close hardware · Granite top"
    },
    {
      title: "Corporate Office",
      location: "Main Road, Ranchi",
      tag: "Office Interiors",
      image: ProjectImg3,
      bgGradient: "linear-gradient(135deg,rgba(224,32,176,0.08),rgba(123,63,228,0.06))",
      description: "2,400 sq ft · Open plan + cabins + conference"
    },
    {
      title: "Walk-in Wardrobe",
      location: "Kanke Road, Ranchi",
      tag: "Wardrobe Design",
      image: ProjectImg4,
      bgGradient: "linear-gradient(135deg,rgba(123,63,228,0.07),rgba(224,32,176,0.07))",
      description: "130 sq ft · Full-length mirror · LED lighting"
    },
    {
      title: "Home Theatre Setup",
      location: "Bariatu, Ranchi",
      tag: "Home Theatre",
      image: ProjectImg5,
      bgGradient: "linear-gradient(135deg,rgba(255,106,0,0.07),rgba(123,63,228,0.07))",
      description: "150\" screen · Dolby Atmos · Custom false ceiling"
    },
    {
      title: "Living Room Makeover",
      location: "Ashok Nagar, Ranchi",
      tag: "Living Room",
      image: ProjectImg6,
      bgGradient: "linear-gradient(135deg,rgba(224,32,176,0.07),rgba(255,106,0,0.07))",
      description: "False ceiling · TV unit · Accent wall · Smart lighting"
    }
  ];

  return (
    <section id="projects" className="">
      <OrbField>
        <div className="orb orb-o" style={{ width: '300px', height: '300px', top: '-80px', right: '-60px', opacity: 0.14, animationDelay: '-4s' }}></div>
        <div className="orb orb-p" style={{ width: '260px', height: '260px', bottom: '-60px', left: '-40px', opacity: 0.14, animationDelay: '-10s' }}></div>
      </OrbField>

      <div className="container mx-auto px-6 md:px-8 max-w-[1180px]" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-head text-center mb-10 md:mb-[60px]">
          <SectionDots mOrder={1} pOrder={2} oOrder={3} />
          <div className="section-label mt-2">Our Work</div>
          <h2 className="font-bold mb-4">Recent Projects <span className="gradient-text">in Ranchi</span></h2>
          <p className="text-[0.95rem] md:text-base px-2">A selection of homes and offices we&apos;ve transformed across Jharkhand.</p>
        </div>

        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[24px]">
          {projectData.map((proj, i) => (
            <ScrollReveal key={i} delay={i * 0.1} type="fade-up" className="h-full">
              <ProjectCard 
                title={proj.title}
                location={proj.location}
                tag={proj.tag}
                image={proj.image}
                bgGradient={proj.bgGradient}
                description={proj.description}
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