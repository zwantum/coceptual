"use client";
import { useState } from "react";
import SectionDots from "./ui/SectionDots";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the cost of interior design for a 2BHK in Ranchi?",
      a: "Typically, a full 2BHK interior project in Ranchi ranges from ₹5 lakh to ₹12 lakh. This depends on the quality of materials (laminate vs acrylic), complexity of the modular kitchen, and scope of false ceiling/lighting work."
    },
    {
      q: "How long does a full home interior project take?",
      a: "For most projects in Ranchi, we deliver in 45–60 days from the date of design finalization. Modular kitchen only projects can be completed in as little as 21 days."
    },
    {
      q: "Do you offer a warranty on your work?",
      a: "Yes, we provide a 5-year comprehensive warranty on all modular carpentry and a 1-year service warranty on electrical and plumbing work executed by our team."
    },
    {
      q: "Can I visit your ongoing projects in Ranchi?",
      a: "Absolutely. We can arrange site visits to our ongoing or recently completed projects in areas like Harmu, Lalpur, or Bariatu so you can see our quality firsthand."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-[1180px]">
        <div className="section-head text-center mb-10 md:mb-[60px]">
          <SectionDots mOrder={1} oOrder={2} pOrder={3} />
          <div className="section-label mt-2">Common Questions</div>
          <h2 className="font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] px-2">
            Interior Design <span className="gradient-text">FAQs for Ranchi</span>
          </h2>
        </div>

        <div className="faq-list max-w-[760px] mx-auto flex flex-col gap-[10px]">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`faq-item glass-card transition-transform duration-200 ${openIndex === i ? 'open' : ''}`}
            >
              <button 
                onClick={() => toggleFAQ(i)}
                className="faq-q w-full bg-none border-none text-[var(--text-dark)] text-[0.94rem] font-bold text-left p-[20px_24px] cursor-pointer flex justify-between items-center gap-3 font-inherit hover:text-[var(--orange)]"
              >
                {faq.q}
                <i className="faq-icon not-italic text-[1.3rem] text-[var(--orange)] transition-transform duration-300 leading-none">
                  {openIndex === i ? '×' : '+'}
                </i>
              </button>
              
              <div 
                className="faq-a overflow-hidden transition-[max-height] duration-500 ease-in-out"
                style={{ maxHeight: openIndex === i ? '300px' : '0' }}
              >
                <p className="p-[0_24px_20px] text-[0.88rem] text-[var(--text-muted)] leading-[1.75]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-[0.88rem] text-[var(--text-muted)] mb-4">Still have questions?</p>
          <a href="https://wa.me/91XXXXXXXXXX" className="btn btn-wa inline-flex items-center gap-2">
            💬 Ask us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}