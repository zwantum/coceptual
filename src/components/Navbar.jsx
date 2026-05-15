"use client";
import { useState } from "react";
import Image from "next/image";
import ConceptualLogo from "../assets/CoceptualStudioLogo.webp"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[1000] w-full transform-gpu bg-white/40 backdrop-blur-xl border-b border-white/40 shadow-sm">
        <div className="nav-inner flex justify-between items-center w-full px-4 md:px-8">
          <a href="#" className="logo shrink-0">
            {/* <BrandDots dotSize="13px" /> */}
            <span className="logo-text"><Image src={ConceptualLogo} alt="logo" style={{ width: "8.2rem", height: "100%",paddingLeft:"15px" }} /></span>
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
            <a href="https://wa.me/91XXXXXXXXXX" className="btn btn-wa hover:scale-105 hover:shadow-lg transition-all duration-300" style={{ padding: '9px 20px', fontSize: '0.84rem' }} target="_blank">📞 WhatsApp</a>
          </div>
          <div className="hamburger flex flex-col lg:hidden gap-1.5 cursor-pointer p-1" onClick={() => setIsOpen(!isOpen)}>
            <span className="w-6 h-0.5 bg-[var(--text-dark)] rounded-sm transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg) translate(5px,5px)' : '' }}></span>
            <span className="w-6 h-0.5 bg-[var(--text-dark)] rounded-sm transition-opacity duration-300" style={{ opacity: isOpen ? '0' : '' }}></span>
            <span className="w-6 h-0.5 bg-[var(--text-dark)] rounded-sm transition-transform duration-300" style={{ transform: isOpen ? 'rotate(-45deg) translate(5px,-5px)' : '' }}></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open flex' : 'hidden'} fixed top-[68px] left-0 right-0 bottom-0 z-[999] overflow-y-auto bg-white/80 backdrop-blur-2xl border-t border-white/50 flex-col p-0`} id="mobileMenu">
        <div className="mobile-menu-inner flex-1 flex flex-col p-5 gap-2">
          <a href="#services" onClick={() => setIsOpen(false)} className="mobile-nav-item flex items-center gap-3.5 p-4 rounded-xl bg-white/50 border border-white/60 shadow-sm transition-all hover:bg-white/80">
            <div className="mni-dot bg-[rgba(224,32,176,0.1)] text-[var(--magenta)] w-9 h-9 rounded-lg flex items-center justify-center shrink-0">✨</div>
            <div className="mni-text text-[var(--text-dark)]"><strong className="block text-base font-bold leading-tight">Services</strong><span className="block text-xs text-[var(--text-muted)] mt-0.5">What we offer</span></div>
          </a>
          <a href="#process" onClick={() => setIsOpen(false)} className="mobile-nav-item flex items-center gap-3.5 p-4 rounded-xl bg-white/50 border border-white/60 shadow-sm transition-all hover:bg-white/80">
            <div className="mni-dot bg-[rgba(255,106,0,0.1)] text-[var(--orange)] w-9 h-9 rounded-lg flex items-center justify-center shrink-0">📋</div>
            <div className="mni-text text-[var(--text-dark)]"><strong className="block text-base font-bold leading-tight">Process</strong><span className="block text-xs text-[var(--text-muted)] mt-0.5">How we work</span></div>
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="mobile-nav-item flex items-center gap-3.5 p-4 rounded-xl bg-white/50 border border-white/60 shadow-sm transition-all hover:bg-white/80">
            <div className="mni-dot bg-[rgba(123,63,228,0.1)] text-[var(--purple)] w-9 h-9 rounded-lg flex items-center justify-center shrink-0">🏠</div>
            <div className="mni-text text-[var(--text-dark)]"><strong className="block text-base font-bold leading-tight">Portfolio</strong><span className="block text-xs text-[var(--text-muted)] mt-0.5">Our past work</span></div>
          </a>
          <a href="#cities" onClick={() => setIsOpen(false)} className="mobile-nav-item flex items-center gap-3.5 p-4 rounded-xl bg-white/50 border border-white/60 shadow-sm transition-all hover:bg-white/80">
            <div className="mni-dot bg-[rgba(37,211,102,0.1)] text-[#25D366] w-9 h-9 rounded-lg flex items-center justify-center shrink-0">📍</div>
            <div className="mni-text text-[var(--text-dark)]"><strong className="block text-base font-bold leading-tight">Coverage</strong><span className="block text-xs text-[var(--text-muted)] mt-0.5">Cities we serve</span></div>
          </a>
        </div>
        <div className="mobile-menu-footer p-5 border-t border-black/5 bg-white/40">
          <div className="mobile-menu-cta flex gap-2.5 mb-4">
            <a href="#contact" onClick={() => setIsOpen(false)} className="btn btn-outline flex-1 justify-center text-sm py-3 px-0 text-center">Get Quote</a>
            <a href="https://wa.me/91XXXXXXXXXX" className="btn btn-wa flex-1 justify-center text-sm py-3 px-0 text-center">📞 WhatsApp</a>
          </div>
        </div>
      </div>
    </>
  );
}