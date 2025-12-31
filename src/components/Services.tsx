import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Building2, Sparkles, Wrench, ShieldCheck, HardHat, Coffee, CheckCircle2, Clock, Calendar, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
const services = [{
  icon: Users,
  title: "Staff & Payroll Outsourcing",
  description: "Outsourcing is changing business worldwide. We take the most time-consuming financial functions off your hands and handle them faster, more accurately and at lower cost than you can in-house.",
  features: ["Recruitment & Onboarding", "Payroll Management", "Compliance Handling", "HR Administration"],
  popular: true
}, {
  icon: HardHat,
  title: "Labour Supply",
  description: "Reliable and skilled labour workforce for construction, manufacturing, and industrial projects. Trained workers available on-demand for short and long-term requirements.",
  features: ["Skilled Workers", "Semi-skilled Labour", "Helper Staff", "On-demand Availability"]
}, {
  icon: Building2,
  title: "Corporate Housekeeping",
  description: "We provide housekeeping services for corporate office, office campus, hospitals, multiplexes, shopping malls. Our trained personnel consistently work towards exceeding client needs.",
  features: ["Dusting of windowsills & ledges", "Removing cobwebs", "Vacuuming furniture", "Cleaning telephones & intercoms"]
}, {
  icon: Sparkles,
  title: "Washroom Hygiene Management",
  description: "Complete washroom care including cleaning, sanitizing and deodorizing. We clean vanities, sinks, mirrors, showers, bathtubs, floors and tile walls at required intervals.",
  features: ["Sanitize & Deodorize", "Vanities & Sinks Cleaning", "Mirror Cleaning", "Floor & Tile Walls Washing"]
}, {
  icon: Building2,
  title: "Floor Care Services",
  description: "Shopping malls, multiplexes and big retail outlets - we handle crubbing, polishing and cleaning schedule with professional manner. Trained staff and personal supervision on day to day basis.",
  features: ["Wet & Dry Mopping", "High Pressure Jet Machine", "Carpet Vacuuming", "Road Sweeping & Garbage Clearing"]
}, {
  icon: Wrench,
  title: "MEP & Technical Services",
  description: "Complete MEP support including mechanical, electrical, and plumbing systems. Also covers painting, carpentry, civil work, pest control, and AC maintenance.",
  features: ["Electrical & Plumbing", "AC Maintenance", "Painting & Carpentry", "Pest Control"]
}, {
  icon: ShieldCheck,
  title: "Professional Security Services",
  description: "Trained and verified security personnel for all environments. Services include bouncers, personal security officers (PSO), residential, and commercial security.",
  features: ["Corporate Security", "Residential Guards", "Bouncer Services", "Personal Security Officers"]
}, {
  icon: Coffee,
  title: "Pantry & Cafeteria Services",
  description: "Professional pantry boys and cafeteria staff to manage your office refreshments and food services. Trained personnel ensuring hygiene and prompt service.",
  features: ["Pantry Management", "Tea/Coffee Service", "Cafeteria Staff", "Event Catering Support"]
}];
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
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
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
    const message = encodeURIComponent(`Enquiry for ${serviceName}`);
    window.open(`https://wa.me/917038613623?text=${message}`, "_blank");
  };
  const handleRequestQuote = (serviceName: string) => {
    setSelectedService(null);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth"
      });
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("prefillService", {
          detail: serviceName
        }));
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
  return <>
      <section id="services" className="py-20 md:py-28 bg-gradient-subtle" ref={ref}>
        <div className="section-container">
          {/* Header */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6
        }} className="text-center max-w-2xl mx-auto mb-16">
            <motion.span initial={{
            opacity: 0,
            scale: 0.9
          }} animate={isInView ? {
            opacity: 1,
            scale: 1
          } : {}} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-accent/10 text-accent border border-accent/20">
              <Sparkles className="w-4 h-4" />
              What We Do
            </motion.span>
            <h2 className="heading-lg text-primary mb-5">
              Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-dark">
                Facility Solutions
              </span>
            </h2>
            <p className="text-body">
              From staffing to security, we provide end-to-end workforce and facility management services
              tailored to your business needs.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {services.map((service, index) => <motion.div key={service.title} variants={itemVariants} onClick={() => setSelectedService(service)} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} onKeyDown={e => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setSelectedService(service);
            }
          }} tabIndex={0} role="button" aria-label={`View details for ${service.title}`} className="group relative bg-card rounded-xl md:rounded-2xl p-4 md:p-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 overflow-hidden">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-purple-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-[1px] rounded-2xl bg-card" />
                
                {/* Glow Effect */}
                <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/30 to-purple-dark/30 blur-xl transition-opacity duration-500 ${hoveredIndex === index ? "opacity-40" : "opacity-0"}`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Popular Badge */}
                  {service.popular && <div className="absolute -top-1 -right-1">
                      <span className="inline-block px-1.5 md:px-2 py-0.5 text-[8px] md:text-[10px] font-bold rounded-full bg-accent text-accent-foreground shadow-lg">
                        POPULAR
                      </span>
                    </div>}

                  {/* Icon */}
                  <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-accent/10 to-purple-light/10 w-fit mb-3 md:mb-5 group-hover:from-accent group-hover:to-purple-dark group-hover:shadow-glow transition-all duration-500">
                    <service.icon className="w-5 h-5 md:w-6 md:h-6 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-primary mb-2 md:mb-3 text-sm md:text-lg leading-tight group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description - Hidden on mobile */}
                  <p className="hidden md:block text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features Preview - Hidden on mobile */}
                  <div className="hidden md:flex flex-wrap gap-1.5 mb-4">
                    {service.features.slice(0, 2).map(feature => <span key={feature} className="inline-block px-2.5 py-1 text-[11px] font-medium rounded-lg bg-accent/10 text-accent">
                        {feature}
                      </span>)}
                    {service.features.length > 2 && <span className="inline-block px-2.5 py-1 text-[11px] font-medium rounded-lg bg-muted text-muted-foreground">
                        +{service.features.length - 2} more
                      </span>}
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
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Service Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="sm:max-w-lg focus:outline-none border-accent/20">
          {selectedService && <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3
        }}>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/10 to-purple-light/10">
                    <selectedService.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <DialogTitle className="text-xl font-display font-bold text-primary">
                      {selectedService.title}
                    </DialogTitle>
                    {selectedService.popular && <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-bold rounded-full bg-accent text-accent-foreground">
                        MOST POPULAR
                      </span>}
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
                  <ul className="grid grid-cols-2 gap-2">
                    {selectedService.features.map(feature => <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {feature}
                      </li>)}
                  </ul>
                </div>

                {/* Service Badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-subtle rounded-xl border border-border">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">Response: Within 2 hours</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-subtle rounded-xl border border-border">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">Available: 24/7</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button onClick={() => handleWhatsApp(selectedService.title)} className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20" size="lg">
                    
                    Enquire on WhatsApp
                  </Button>
                  <Button onClick={() => handleRequestQuote(selectedService.title)} variant="accentOutline" className="flex-1" size="lg">
                    
                    Request a Quote
                  </Button>
                </div>
              </div>
            </motion.div>}
        </DialogContent>
      </Dialog>
    </>;
};
export default Services;