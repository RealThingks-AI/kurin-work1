import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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
  { name: "Sukhwani Constructions", logo: sukhwaniConstructions, industry: "Real Estate & Construction", description: "One of Pune's leading real estate developers, trusted partner since 2019 for housekeeping and security staffing across multiple residential projects." },
  { name: "43 Privet Drive", logo: privetDrive, industry: "Hospitality", description: "Premium hospitality establishment where we provide trained housekeeping and maintenance staff, ensuring exceptional guest experiences." },
  { name: "Namrata Group", logo: namrataGroup, industry: "Real Estate", description: "Renowned real estate developer in Pune, partnering with us for comprehensive facility management and security services." },
  { name: "Millennium Construction", logo: millenniumConstruction, industry: "Construction", description: "Major construction company relying on our skilled labor workforce for various construction projects across Maharashtra." },
  { name: "Sukhwani Pacific", logo: sukhwaniPacific, industry: "Commercial Real Estate", description: "Commercial property development company utilizing our security and maintenance staffing services for their commercial complexes." },
  { name: "Shyama Builders", logo: shyamaBuilders, industry: "Construction", description: "Growing construction firm benefiting from our workforce solutions for both skilled and unskilled labor requirements." },
  { name: "Bhandari Associates", logo: bhandariAssociates, industry: "Engineering", description: "Engineering consultancy firm where we provide administrative and support staff to enhance operational efficiency." },
  { name: "Rohit Infra", logo: rohitInfra, industry: "Infrastructure", description: "Infrastructure development company partnering with us for project-based staffing needs and facility management." },
  { name: "Niramaya Hospital", logo: niramayaHospital, industry: "Healthcare", description: "Healthcare facility where we provide trained housekeeping, pantry, and support staff maintaining highest hygiene standards." },
  { name: "Seawind Developers", logo: seawindDevelopers, industry: "Real Estate", description: "Real estate developer trusting our workforce solutions for property management and maintenance services." },
  { name: "KIA", logo: kia, industry: "Automotive", description: "Global automotive manufacturer utilizing our skilled workforce for their manufacturing and facility management needs." },
  { name: "Sai Sagar Ventures", logo: saiSagarVentures, industry: "Real Estate", description: "Real estate venture company relying on our security and housekeeping staff for their residential projects." },
  { name: "Millennium Engineers", logo: millenniumEngineers, industry: "Engineering", description: "Engineering services firm benefiting from our technical and administrative staffing solutions." },
  { name: "Kolte-Patil", logo: koltePatil, industry: "Real Estate", description: "One of India's leading real estate companies, long-term partner for comprehensive facility management services across their properties." },
  { name: "Sealtech Engineers", logo: sealtechEngineers, industry: "Engineering", description: "Specialized engineering company where we provide trained technical support and facility maintenance staff." },
  { name: "Millennium Paramount", logo: millenniumParamount, industry: "Real Estate", description: "Premium real estate developer utilizing our complete workforce solutions including security, housekeeping, and maintenance." },
  { name: "Savali", logo: savali, industry: "Hospitality", description: "Hospitality business relying on our trained service staff to deliver exceptional customer experiences." },
];

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedClient, setSelectedClient] = useState<typeof clients[0] | null>(null);

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
            Happy Customers
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Serving <span className="text-accent">1000+ Customers</span>
          </h2>
          <p className="text-body text-muted-foreground">
            From homes to offices, we've earned the trust of residential and commercial clients across Pune & PCMC.
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
          <div className="flex mb-6 animate-scroll-left hover:[animation-play-state:paused]">
            {duplicatedClients.map((client, index) => (
              <div
                key={`row1-${client.name}-${index}`}
                onClick={() => setSelectedClient(client)}
                className="flex-shrink-0 mx-3 bg-white rounded-xl border border-border p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer"
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
          <div className="flex animate-scroll-right hover:[animation-play-state:paused]">
            {[...clients].reverse().map((client, index) => (
              <div
                key={`row2-${client.name}-${index}`}
                onClick={() => setSelectedClient(client)}
                className="flex-shrink-0 mx-3 bg-white rounded-xl border border-border p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer"
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

        {/* Client Dialog */}
        <Dialog open={selectedClient !== null} onOpenChange={() => setSelectedClient(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="flex flex-col items-center gap-4 mb-2">
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  {selectedClient && (
                    <img
                      src={selectedClient.logo}
                      alt={selectedClient.name}
                      className="h-16 w-auto max-w-[180px] object-contain"
                    />
                  )}
                </div>
                <div className="text-center">
                  <DialogTitle className="text-xl font-display mb-1">
                    {selectedClient?.name}
                  </DialogTitle>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                    {selectedClient?.industry}
                  </span>
                </div>
              </div>
              <DialogDescription className="text-base leading-relaxed pt-2 text-center">
                {selectedClient?.description}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

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
              <span className="font-semibold text-foreground">1000+</span> satisfied customers across Pune & PCMC
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;