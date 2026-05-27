"use client";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import BrandDots from "./ui/BrandDots";

export default function ServiceCard({ title, image, desc, progress, range, targetScale, index, total }) {
  const cardRef = useRef(null);

  // Track scroll progress of individual card for image parallax scaling
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [1, 0.5]);

  return (
    <div
      ref={cardRef}
      className="sticky top-0 w-full h-[75vh] md:h-[75vh] flex items-start justify-center bg-transparent px-4 sm:px-6 pt-[85px] md:pt-[105px]">



      <motion.div
        style={{
          scale,
          opacity,
          top: `${index * 15}px`,
          transformOrigin: "top center",
        }}
        className="stack-services w-full max-w-[1260px] md:h-[440px] bg-[#fcfbfe] border border-[#f0eae6] rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.10)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.09)] overflow-hidden flex flex-col md:flex-row cursor-pointer transition-all duration-300 relative"
      >
        {/* Left Column: Image with Parallax Scaling */}
        <div className="w-full md:w-[40%] h-[220px] md:h-full overflow-hidden relative">
          <motion.img
            src={image.src || image}
            alt={title}
            style={{ scale: imageScale }}
            className="w-full h-full object-cover origin-center"
          />
          {/* Subtle gradient overlay on the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent md:hidden" />
        </div>

        {/* Right Column: Content */}
        <div className="w-full md:w-[60%] p-6 sm:p-10 md:p-12 flex flex-col justify-between h-auto md:h-full">

          <div>
            {/* 3 Dots for Services Section */}
            <div className="svc-dots flex gap-[5px] mb-4 md:mb-5">
              <BrandDots count={3} dotSize="7.5px" />
            </div>

            <h3 className="text-[clamp(1.2rem,2.8vw,1.75rem)] font-extrabold text-[#1f1e1c] mb-3 md:mb-4 tracking-tight leading-snug">
              {title}
            </h3>

            <p className="text-[0.92rem] sm:text-[1.02rem] text-[#6d6a65] leading-[1.7] mb-6">
              {desc}
            </p>
          </div>

          <a
            href="#contact"
            className="svc-link mt-auto text-[var(--orange)] hover:text-[var(--orange)]/90 font-bold text-[0.92rem] inline-flex items-center gap-[6px] hover:translate-x-[4px] transition-all duration-200"
          >
            Get Quote <span className="text-base transition-transform duration-200">→</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}