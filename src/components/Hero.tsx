import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

// Client logos
import sukhwaniConstructions from "@/assets/clients/sukhwani-constructions.png";
import privetDrive from "@/assets/clients/privet-drive.png";
import namrataGroup from "@/assets/clients/namrata-group.png";
import millenniumConstruction from "@/assets/clients/millennium-construction.png";
import sukhwaniPacific from "@/assets/clients/sukhwani-pacific.png";
import shyamaBuilders from "@/assets/clients/shyama-builders.png";
import bhandariAssociates from "@/assets/clients/bhandari-associates.png";
import rohitInfra from "@/assets/clients/rohit-infra.png";
import niramayaHospital from "@/assets/clients/niramaya-hospital.png";
import seawindDevelopers from "@/assets/clients/seawind-developers.png";
import kia from "@/assets/clients/kia.png";
import saiSagarVentures from "@/assets/clients/sai-sagar-ventures.png";
import millenniumEngineers from "@/assets/clients/millennium-engineers.png";
import koltePatil from "@/assets/clients/kolte-patil.png";
import sealtechEngineers from "@/assets/clients/sealtech-engineers.png";
import millenniumParamount from "@/assets/clients/millennium-paramount.png";
import savali from "@/assets/clients/savali.png";

const clients = [
  { name: "Sukhwani Constructions", logo: sukhwaniConstructions },
  { name: "43 Privet Drive", logo: privetDrive },
  { name: "Namrata Group", logo: namrataGroup },
  { name: "Millennium Construction", logo: millenniumConstruction },
  { name: "Sukhwani Pacific", logo: sukhwaniPacific },
  { name: "Shyama Builders", logo: shyamaBuilders },
  { name: "Bhandari Associates", logo: bhandariAssociates },
  { name: "Rohit Infra", logo: rohitInfra },
  { name: "Niramaya Hospital", logo: niramayaHospital },
  { name: "Seawind Developers", logo: seawindDevelopers },
  { name: "KIA", logo: kia },
  { name: "Sai Sagar Ventures", logo: saiSagarVentures },
  { name: "Millennium Engineers", logo: millenniumEngineers },
  { name: "Kolte-Patil", logo: koltePatil },
  { name: "Sealtech Engineers", logo: sealtechEngineers },
  { name: "Millennium Paramount", logo: millenniumParamount },
  { name: "Savali", logo: savali },
];

const Hero = () => {
  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute inset-0 gradient-overlay" 
      />

      {/* Content */}
      <div className="relative z-10 section-container py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium rounded-full bg-accent/20 text-accent border border-accent/30">
              All Manpower Solutions
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              ISO 9001:2015 Certified
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
          >
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-xl text-primary-foreground mb-6"
          >
            Quality Manpower{" "}
            <span className="text-gradient bg-gradient-to-r from-accent to-blue-300">
              At Your Fingertips
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Providing 24×7 quality services, 365 days a year. We connect human
            potential to the power of business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="hero"
              size="xl"
              onClick={handleScrollToContact}
              className="group min-w-[200px]"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <a href="tel:7038613623">
              <Button variant="heroOutline" size="xl" className="min-w-[200px]">
                <Phone className="w-5 h-5" />
                +91 7038 613 623
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Client Marquee */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-6 border-t border-border/20"
      >
        <div className="w-full px-0">
          <p className="text-center text-muted-foreground text-sm mb-4 font-medium tracking-wider uppercase">
            Trusted by Industry Leaders
          </p>
          <div className="relative overflow-hidden w-full">
            <div className="flex w-max animate-marquee">
              <div className="flex whitespace-nowrap">
                {clients.map((client) => (
                  <div
                    key={client.name}
                    className="flex-shrink-0 px-8 py-4 mx-4 bg-white rounded-xl shadow-sm flex items-center justify-center min-w-[180px]"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      loading="lazy"
                      className="h-20 w-auto max-w-[160px] object-contain"
                    />
                  </div>
                ))}
              </div>

              <div className="flex whitespace-nowrap" aria-hidden="true">
                {clients.map((client) => (
                  <div
                    key={`${client.name}-dup`}
                    className="flex-shrink-0 px-8 py-4 mx-4 bg-white rounded-xl shadow-sm flex items-center justify-center min-w-[180px]"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      loading="lazy"
                      className="h-20 w-auto max-w-[160px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
