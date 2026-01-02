import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceAreas = [
  { name: "Aundh", popular: true },
  { name: "Wakad", popular: true },
  { name: "Hinjewadi", popular: true },
  { name: "Pimple Saudagar", popular: true },
  { name: "Baner", popular: true },
  { name: "Kothrud", popular: false },
  { name: "Pimpri", popular: true },
  { name: "Chinchwad", popular: true },
  { name: "Viman Nagar", popular: false },
  { name: "Kharadi", popular: false },
  { name: "Hadapsar", popular: false },
  { name: "Magarpatta", popular: false },
  { name: "Shivaji Nagar", popular: false },
  { name: "Deccan", popular: false },
  { name: "Nigdi", popular: false },
  { name: "Akurdi", popular: false },
  { name: "Bhosari", popular: false },
  { name: "Moshi", popular: false },
  { name: "Ravet", popular: false },
  { name: "Tathawade", popular: false },
];

const ServiceAreas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="section-padding bg-secondary/30" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Service Areas
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            We Cover All of <span className="text-accent">Pune & PCMC</span>
          </h2>
          <p className="text-body text-muted-foreground">
            Fast, reliable AC service across 20+ localities. Same-day service available in most areas.
          </p>
        </motion.div>

        {/* Areas Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto mb-10"
        >
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className={`
                inline-flex items-center gap-1.5 px-3 py-2 md:px-4 md:py-2.5 rounded-full text-sm font-medium
                transition-all duration-300 cursor-default
                ${area.popular 
                  ? "bg-accent text-accent-foreground shadow-sm" 
                  : "bg-background border border-border text-foreground hover:border-accent/50"
                }
              `}
            >
              <MapPin className="w-3.5 h-3.5" />
              {area.name}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            Don't see your area? We likely cover it too!
          </p>
          <a href="tel:7745046520">
            <Button variant="accent" size="lg" className="gap-2">
              <Phone className="w-4 h-4" />
              Call to Check Availability
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreas;
