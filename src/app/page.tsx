import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import WhyUs from "../components/WhyUs";
import Services from "../components/Services";
import Cities from "../components/Cities";
import Process from "../components/Process";
import Portfolio from "../components/Portfolio";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
// import CTACard from "../components/CTACard";


// Import your other perfectly mapped sections

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      {/* <CTACard/> */}
      <WhyUs />
      <Process />
      <Portfolio />
      <Cities />
      <ContactForm />
      <CTASection />
      <FAQ />
      <Footer />
      {/* Build out Services, WhyUs, Portfolio similarly using the exact HTML structures */}
    </>
  );
}
