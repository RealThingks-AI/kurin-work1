import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicate clients for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Our Prestigious Clients
          </span>
          <h2 className="heading-lg text-primary mb-6">
            Trusted by <span className="text-accent">Industry Leaders</span>
          </h2>
          <p className="text-body">
            Kurin Hygienic's satisfied clients include many institutions and businesses in your community. 
            We take pride in building long-term relationships with our partners.
          </p>
        </motion.div>

        {/* Auto-scrolling Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* First Row - Left to Right */}
          <div className="flex mb-6 animate-scroll-left hover:[animation-play-state:paused]" style={{ animationDuration: '80s' }}>
            {duplicatedClients.map((client, index) => (
              <div
                key={`row1-${client.name}-${index}`}
                className="flex-shrink-0 mx-3 bg-white rounded-xl border border-border p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 md:h-16 w-auto min-w-[100px] max-w-[150px] object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex animate-scroll-right hover:[animation-play-state:paused]" style={{ animationDuration: '80s' }}>
            {duplicatedClients.reverse().map((client, index) => (
              <div
                key={`row2-${client.name}-${index}`}
                className="flex-shrink-0 mx-3 bg-white rounded-xl border border-border p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 md:h-16 w-auto min-w-[100px] max-w-[150px] object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/5 rounded-full border border-accent/10">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-accent/20 border-2 border-background flex items-center justify-center text-xs font-bold text-accent"
                >
                  {i}
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">50+</span> satisfied clients across industries
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;