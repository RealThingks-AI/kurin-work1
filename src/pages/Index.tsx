import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kurin Hygienic – Premium Manpower & Facility Management Solutions</title>
        <meta
          name="description"
          content="Kurin Hygienic provides 24x7 quality manpower and facility management services. Staff outsourcing, housekeeping, security, and MEP services in Pune."
        />
        <meta
          name="keywords"
          content="manpower solutions, facility management, housekeeping, security services, Pune, staff outsourcing"
        />
        <link rel="canonical" href="https://kurinhygienic.com" />
      </Helmet>

      <motion.main 
        className="relative"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Navigation />
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Process />
        <Industries />
        <Clients />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <FloatingButtons />
        <BackToTop />
      </motion.main>
    </>
  );
};

export default Index;
