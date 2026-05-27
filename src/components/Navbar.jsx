"use client";
import { useState } from "react";
import Image from "next/image";
import ConceptualLogo from "../assets/CoceptualStudioLogo.webp"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className="top-nav"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)"
        }}
      >
        <div className="nav-inner flex justify-between items-center w-full px-6 md:px-8">
          <a href="#" className="logo shrink-0">
            {/* <BrandDots dotSize="13px" /> */}
            <span className="logo-text">
              <Image
                src={ConceptualLogo}
                alt="Coceptual Studio Logo"
                className="nav-logo-img"
                priority
              />
            </span>
          </a>
          <ul className="nav-links hidden lg:flex items-center gap-7">
            <li><a href="#services" className="relative transition-colors duration-300 hover:text-[var(--orange)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[var(--orange)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Services</a></li>
            <li><a href="#process" className="relative transition-colors duration-300 hover:text-[var(--orange)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[var(--orange)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Process</a></li>
            <li><a href="#projects" className="relative transition-colors duration-300 hover:text-[var(--orange)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[var(--orange)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Portfolio</a></li>
            <li><a href="#cities" className="relative transition-colors duration-300 hover:text-[var(--orange)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[var(--orange)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Coverage</a></li>
            <li><a href="#faq" className="relative transition-colors duration-300 hover:text-[var(--orange)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[var(--orange)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">FAQ</a></li>
          </ul>
          <div className="nav-cta hidden lg:flex">
            <a href="#contact" className="btn btn-outline hover:scale-105 hover:shadow-lg transition-all duration-300" style={{ padding: '9px 20px', fontSize: '0.84rem' }}>Get Quote</a>
            <a href="https://wa.me/91XXXXXXXXXX" className="btn btn-wa hover:scale-105 hover:shadow-lg transition-all duration-300" style={{ padding: '9px 20px', fontSize: '0.84rem' }} target="_blank"><i className="fab fa-whatsapp" style={{ fontSize: "20px" }}></i> WhatsApp</a>
          </div>
          <div className="hamburger flex flex-col lg:hidden gap-1.5 cursor-pointer p-1" onClick={() => setIsOpen(!isOpen)}>
            <span className="w-6 h-0.5 bg-[var(--text-dark)] rounded-sm transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg) translate(5px,5px)' : '' }}></span>
            <span className="w-6 h-0.5 bg-[var(--text-dark)] rounded-sm transition-opacity duration-300" style={{ opacity: isOpen ? '0' : '' }}></span>
            <span className="w-6 h-0.5 bg-[var(--text-dark)] rounded-sm transition-transform duration-300" style={{ transform: isOpen ? 'rotate(-45deg) translate(5px,-5px)' : '' }}></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed top-[var(--mobile-menu-top)] left-4 right-4 z-[999] flex flex-col p-4 bg-white/98 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-[24px] transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`} id="mobileMenu">
        <div className="mobile-menu-inner">
          <a href="#services" onClick={() => setIsOpen(false)} className="mobile-nav-item flex items-center gap-3.5 p-4 justify-between">
            <div className="mni-text text-[var(--text-dark)]"><strong className="block text-base font-bold leading-tight">Services</strong><span className="block text-xs text-[var(--text-muted)] mt-0.5">What we offer</span></div>
            <span className="mm-link-arrow">→</span>
          </a>
          <a href="#process" onClick={() => setIsOpen(false)} className="mobile-nav-item flex items-center gap-3.5 p-4 justify-between">
            <div className="mni-text text-[var(--text-dark)]"><strong className="block text-base font-bold leading-tight">Process</strong><span className="block text-xs text-[var(--text-muted)] mt-0.5">How we work</span></div>
            <span className="mm-link-arrow">→</span>
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="mobile-nav-item flex items-center gap-3.5 p-4 justify-between">
            <div className="mni-text text-[var(--text-dark)]"><strong className="block text-base font-bold leading-tight">Portfolio</strong><span className="block text-xs text-[var(--text-muted)] mt-0.5">Our past work</span></div>
            <span className="mm-link-arrow">→</span>
          </a>
          <a href="#cities" onClick={() => setIsOpen(false)} className="mobile-nav-item flex items-center gap-3.5 p-4 justify-between">
            <div className="mni-text text-[var(--text-dark)]"><strong className="block text-base font-bold leading-tight">Coverage</strong><span className="block text-xs text-[var(--text-muted)] mt-0.5">Cities we serve</span></div>
            <span className="mm-link-arrow">→</span>
          </a>

          <div className="mobile-menu-footer">
            <div className="mb-5">
              <p className="text-xs text-[var(--text-muted)]"><b>Address:</b> Coceptual Studio, Your Studio Address, Ranchi, Jharkhand 834001 </p>
            </div>
            <div className="mobile-menu-cta">
              <a href="#contact" onClick={() => setIsOpen(false)} className="nev-get-btn btn ">Get Quote</a>
              <a href="https://wa.me/91XXXXXXXXXX" className="btn btn-wa" target="_blank"><i className="fab fa-whatsapp"></i> WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}