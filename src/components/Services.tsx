import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Snowflake, Wind, Gauge, Wrench, Settings, Shield, CheckCircle2, Clock, Calendar, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Snowflake,
    title: "AC Servicing",
    price: "₹399",
    description: "Complete AC servicing to ensure optimal cooling performance. Regular maintenance extends your AC's lifespan and reduces energy costs.",
    features: ["Filter cleaning & replacement", "Coil inspection & cleaning", "Refrigerant level check", "Performance optimization"],
    popular: true
  },
  {
    icon: Wind,
    title: "Deep Cleaning",
    price: "₹599",
    description: "Thorough internal cleaning for maximum efficiency. Removes dust, mold, and bacteria buildup for healthier air quality.",
    features: ["Complete internal cleaning", "Coil sanitization", "Drain pipe cleaning", "Anti-bacterial treatment"]
  },
  {
    icon: Gauge,
    title: "Gas Refill",
    price: "₹2,500",
    description: "Professional refrigerant gas refilling service. We detect leaks, repair them, and recharge with genuine R32/R410A gas.",
    features: ["Leak detection & repair", "R32/R410A gas refill", "Pressure testing", "Performance verification"]
  },
  {
    icon: Wrench,
    title: "AC Repair",
    price: "Based on issue",
    description: "Expert diagnosis and repair of all AC problems. Our technicians are trained to handle all brands and models.",
    features: ["Compressor repair/replacement", "PCB & circuit repairs", "Sensor troubleshooting", "All brand expertise"]
  },
  {
    icon: Settings,
    title: "AC Installation",
    price: "₹1,500",
    description: "Professional AC installation with proper mounting, piping, and electrical work. We ensure optimal placement for maximum efficiency.",
    features: ["Professional mounting", "Copper piping work", "Electrical wiring", "Gas charging & testing"]
  },
  {
    icon: Shield,
    title: "AMC Plans",
    price: "₹2,499/year",
    description: "Annual Maintenance Contracts for hassle-free AC care. Regular scheduled visits and priority support included.",
    features: ["Scheduled maintenance", "Priority service", "Discounted repairs", "Extended warranty"]
  }
];

type Service = typeof services[number];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const handleWhatsApp = (serviceName: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in ${serviceName}. Please provide more details.`);
    window.open(`https://wa.me/917745046520?text=${message}`, "_blank");
  };

  const handleRequestQuote = (serviceName: string) => {
    setSelectedService(null);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("prefillService", { detail: serviceName }));
      }, 500);
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedService) {
        setSelectedService(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedService]);

  return (
    <>
      <section id="services" className="py-20 md:py-28 bg-gradient-subtle" ref={ref}>
        <div className="section-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-accent/10 text-accent border border-accent/20"
            >
              <Snowflake className="w-4 h-4" />
              Our Services
            </motion.span>
            <h2 className="heading-lg text-primary mb-5">
              Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-dark">
                AC Solutions
              </span>
            </h2>
            <p className="text-body">
              Professional AC servicing, repair, and maintenance for homes and businesses.
              Transparent pricing with no hidden charges.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                onClick={() => setSelectedService(service)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onKeyDown={e => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedService(service);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${service.title}`}
                className="group relative bg-card rounded-xl md:rounded-2xl p-4 md:p-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-purple-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-[1px] rounded-2xl bg-card" />
                
                {/* Glow Effect */}
                <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/30 to-purple-dark/30 blur-xl transition-opacity duration-500 ${hoveredIndex === index ? "opacity-40" : "opacity-0"}`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-1 -right-1">
                      <span className="inline-block px-1.5 md:px-2 py-0.5 text-[8px] md:text-[10px] font-bold rounded-full bg-accent text-accent-foreground shadow-lg">
                        POPULAR
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-accent/10 to-purple-light/10 w-fit mb-3 md:mb-5 group-hover:from-accent group-hover:to-purple-dark group-hover:shadow-glow transition-all duration-500">
                    <service.icon className="w-5 h-5 md:w-6 md:h-6 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title & Price */}
                  <h3 className="font-display font-bold text-primary mb-1 md:mb-2 text-sm md:text-lg leading-tight group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Price Tag */}
                  <div className="mb-2 md:mb-3">
                    <span className="text-xs md:text-sm text-muted-foreground">Starting from</span>
                    <p className="text-lg md:text-2xl font-bold text-accent">{service.price}</p>
                  </div>
                  
                  {/* Description - Hidden on mobile */}
                  <p className="hidden md:block text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features Preview - Hidden on mobile */}
                  <div className="hidden md:flex flex-wrap gap-1.5 mb-4">
                    {service.features.slice(0, 2).map(feature => (
                      <span key={feature} className="inline-block px-2.5 py-1 text-[11px] font-medium rounded-lg bg-accent/10 text-accent">
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 2 && (
                      <span className="inline-block px-2.5 py-1 text-[11px] font-medium rounded-lg bg-muted text-muted-foreground">
                        +{service.features.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-1 text-xs md:text-sm font-medium text-accent group-hover:gap-2 transition-all duration-300">
                    <span className="hidden md:inline">Learn more</span>
                    <span className="md:hidden">View</span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                </div>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-purple-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="sm:max-w-lg focus:outline-none border-accent/20">
          {selectedService && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader>
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/10 to-purple-light/10">
                    <selectedService.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <DialogTitle className="text-xl font-display font-bold text-primary">
                      {selectedService.title}
                    </DialogTitle>
                    <p className="text-2xl font-bold text-accent mt-1">{selectedService.price}</p>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {selectedService.description}
                </p>

                <div>
                  <h4 className="font-display font-semibold text-primary mb-4 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    What's Included:
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {selectedService.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-subtle rounded-xl border border-border">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">Same-day service</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-subtle rounded-xl border border-border">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">7 days a week</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    onClick={() => handleWhatsApp(selectedService.title)}
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20"
                    size="lg"
                  >
                    WhatsApp Us
                  </Button>
                  <Button
                    onClick={() => handleRequestQuote(selectedService.title)}
                    variant="accentOutline"
                    className="flex-1"
                    size="lg"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Services;