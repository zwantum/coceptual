"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import BrandDots from "./ui/BrandDots";

// Import real project photos
import ProjectImg1 from "../assets/Project Section/ProjectSection_1_3bhk.webp";
import ProjectImg2 from "../assets/Project Section/ProjectSection_2_UShapeKitchen.webp";
import ProjectImg3 from "../assets/Project Section/ProjectSection_3_CorporateOffice.webp";
import ProjectImg4 from "../assets/Project Section/ProjectSection_4_WalkingWardrobe.webp";
import ProjectImg5 from "../assets/Project Section/ProjectSection_5_HomeTheatreSetup.webp";
import ProjectImg6 from "../assets/Project Section/ProjectSection_6_LivingRoomMakeover.webp";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const slides = [
    {
      image: ProjectImg2,
      tag: "Modular Kitchen",
      title: "German Charcoal & Oak Kitchen",
      location: "Bariatu, Ranchi",
      accentColor: "rgba(255, 106, 0, 0.4)"
    },
    {
      image: ProjectImg6,
      tag: "Living Room",
      title: "Warm Oak Luxury Lounge",
      location: "Kanke Road, Ranchi",
      accentColor: "rgba(224, 32, 176, 0.4)"
    },
    {
      image: ProjectImg1,
      tag: "Master Bedroom",
      title: "Minimalist Japandi Suite",
      location: "Lalpur, Ranchi",
      accentColor: "rgba(123, 63, 228, 0.4)"
    },
    {
      image: ProjectImg3,
      tag: "Office Interior",
      title: "Modern Tech HQ Workspace",
      location: "Main Road, Ranchi",
      accentColor: "rgba(255, 106, 0, 0.4)"
    },
    {
      image: ProjectImg4,
      tag: "Wardrobe Design",
      title: "Bespoke Glass Walk-in Wardrobe",
      location: "Harmu Colony, Ranchi",
      accentColor: "rgba(224, 32, 176, 0.4)"
    },
    {
      image: ProjectImg5,
      tag: "Home Theatre",
      title: "Premium Dolby Home Theatre",
      location: "Bokaro Steel City",
      accentColor: "rgba(123, 63, 228, 0.4)"
    }
  ];

  // Adjust visible slides based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, slides.length - visibleSlides);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Autoplay
  useEffect(() => {
    if (isHovered || maxIndex === 0) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  // Touch handlers for mobile swipe
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
    <div
      className="slider-section mt-16 border-t border-[rgba(255,255,255,0.15)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-10 bg-gradient-to-r from-[var(--orange)] to-[var(--pink)] rounded-full"></span>
            <span className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold">Visual Gallery</span>
          </div>
          <h3 className="font-bold text-2xl md:text-3xl text-[var(--text-dark)]">
            Explore Our <span className="gradient-text">Finished Spaces</span>
          </h3>
          <p className="text-[0.9rem] text-[var(--text-muted)] mt-1">
            Realized designs showcasing our premium quality and execution.
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.4)] backdrop-blur-md transition-all duration-300 hover:border-[var(--orange)] hover:text-[var(--orange)] active:scale-95 cursor-pointer shadow-sm text-lg"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.4)] backdrop-blur-md transition-all duration-300 hover:border-[var(--orange)] hover:text-[var(--orange)] active:scale-95 cursor-pointer shadow-sm text-lg"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>

      {/* Slider Viewport */}
      <div
        className="overflow-hidden relative w-full px-1"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out py-4"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
            width: "100%"
          }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="px-3 shrink-0 transition-opacity duration-300"
              style={{ width: `${100 / visibleSlides}%` }}
            >
              <div
                className="group relative rounded-2xl overflow-hidden glass-card p-0 h-[280px] sm:h-[320px] md:h-[350px] border border-[rgba(255,255,255,0.3)] shadow-[0_12px_24px_rgba(0,0,0,0.04)] cursor-pointer"
                style={{
                  boxShadow: `0 8px 32px rgba(0, 0, 0, 0.05), inset 0 0 10px 5px rgba(255,255,255,0.6)`
                }}
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 overflow-hidden w-full h-full z-0">
                  <img
                    src={slide.image.src || slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
                </div>

                {/* Card Accent Border-Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                  style={{
                    border: `1.5px solid ${slide.accentColor}`,
                    borderRadius: "20px",
                  }}
                ></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6 z-10 text-white">
                  {/* Top Row: Tag & Dots */}
                  <div className="flex justify-between items-center">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border border-[rgba(255,255,255,0.25)]"
                      style={{ background: "rgba(0, 0, 0, 0.3)" }}
                    >
                      {slide.tag}
                    </span>
                    <BrandDots dotSize="6px" />
                  </div>

                  {/* Bottom Row: Text & Action */}
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-bold text-lg md:text-[1.15rem] leading-tight text-white mb-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] text-white">
                      {slide.title}
                    </h4>
                    <div className="flex items-center justify-between mt-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {/* <span className="text-xs text-white/80 flex items-center gap-1">
                        📍 {slide.location}
                      </span> */}
                      {/* <span className="text-xs text-[var(--orange)] font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                        View Space →
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicator Dots */}
      {maxIndex > 0 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === index
                ? "w-6 bg-gradient-to-r from-[var(--orange)] to-[var(--pink)]"
                : "w-2 bg-[rgba(0,0,0,0.15)] hover:bg-[rgba(0,0,0,0.3)]"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
