import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Users,
  Building2,
  Sparkles,
  Wrench,
  ShieldCheck,
  HardHat,
  Coffee,
  MessageCircle,
  CheckCircle2,
  Clock,
  Calendar,
  FileText,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Users,
    title: "Staff & Payroll Outsourcing",
    description:
      "Outsourcing is changing business worldwide. We take the most time-consuming financial functions off your hands and handle them faster, more accurately and at lower cost than you can in-house.",
    features: ["Recruitment & Onboarding", "Payroll Management", "Compliance Handling", "HR Administration"],
  },
  {
    icon: HardHat,
    title: "Labour Supply",
    description:
      "Reliable and skilled labour workforce for construction, manufacturing, and industrial projects. Trained workers available on-demand for short and long-term requirements.",
    features: ["Skilled Workers", "Semi-skilled Labour", "Helper Staff", "On-demand Availability"],
  },
  {
    icon: Building2,
    title: "Corporate Housekeeping",
    description:
      "We provide housekeeping services for corporate office, office campus, hospitals, multiplexes, shopping malls. Our trained personnel consistently work towards exceeding client needs.",
    features: [
      "Dusting of windowsills & ledges",
      "Removing cobwebs",
      "Vacuuming furniture",
      "Cleaning telephones & intercoms",
    ],
  },
  {
    icon: Sparkles,
    title: "Washroom Hygiene Management",
    description:
      "Complete washroom care including cleaning, sanitizing and deodorizing. We clean vanities, sinks, mirrors, showers, bathtubs, floors and tile walls at required intervals.",
    features: [
      "Sanitize & Deodorize",
      "Vanities & Sinks Cleaning",
      "Mirror Cleaning",
      "Floor & Tile Walls Washing",
    ],
  },
  {
    icon: Building2,
    title: "Floor Care Services",
    description:
      "Shopping malls, multiplexes and big retail outlets - we handle crubbing, polishing and cleaning schedule with professional manner. Trained staff and personal supervision on day to day basis.",
    features: [
      "Wet & Dry Mopping",
      "High Pressure Jet Machine",
      "Carpet Vacuuming",
      "Road Sweeping & Garbage Clearing",
    ],
  },
  {
    icon: Wrench,
    title: "MEP & Technical Services",
    description:
      "Complete MEP support including mechanical, electrical, and plumbing systems. Also covers painting, carpentry, civil work, pest control, and AC maintenance.",
    features: ["Electrical & Plumbing", "AC Maintenance", "Painting & Carpentry", "Pest Control"],
  },
  {
    icon: ShieldCheck,
    title: "Professional Security Services",
    description:
      "Trained and verified security personnel for all environments. Services include bouncers, personal security officers (PSO), residential, and commercial security.",
    features: ["Corporate Security", "Residential Guards", "Bouncer Services", "Personal Security Officers"],
  },
  {
    icon: Coffee,
    title: "Pantry & Cafeteria Services",
    description:
      "Professional pantry boys and cafeteria staff to manage your office refreshments and food services. Trained personnel ensuring hygiene and prompt service.",
    features: ["Pantry Management", "Tea/Coffee Service", "Cafeteria Staff", "Event Catering Support"],
  },
];

type Service = typeof services[number];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const handleWhatsApp = (serviceName: string) => {
    const message = encodeURIComponent(`Enquiry for ${serviceName}`);
    window.open(`https://wa.me/917038613623?text=${message}`, "_blank");
  };

  const handleRequestQuote = (serviceName: string) => {
    setSelectedService(null);
    // Navigate to contact section and pre-fill service
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      // Dispatch custom event to pre-fill service
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("prefillService", { detail: serviceName }));
      }, 500);
    }
  };

  // Handle escape key to close modal
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
      <section id="services" className="py-16 md:py-20 bg-background" ref={ref}>
        <div className="section-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="inline-block px-3 py-1.5 mb-3 text-xs font-medium rounded-full bg-accent/10 text-accent">
              What We Do
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Comprehensive <span className="text-accent">Facility Solutions</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              From staffing to security, we provide end-to-end workforce and facility management services.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                onClick={() => setSelectedService(service)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedService(service);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${service.title}`}
                className="group relative bg-card rounded-xl border border-border p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                {/* Icon */}
                <div className="p-2.5 rounded-lg bg-accent/10 w-fit mb-4 group-hover:bg-accent group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-primary mb-2 text-base">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed text-xs line-clamp-2">
                  {service.description}
                </p>

                {/* Features - Show only 2 */}
                <div className="flex flex-wrap gap-1.5">
                  {service.features.slice(0, 2).map((feature) => (
                    <span
                      key={feature}
                      className="inline-block px-2 py-0.5 text-[10px] rounded-full bg-accent/10 text-accent"
                    >
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 2 && (
                    <span className="inline-block px-2 py-0.5 text-[10px] rounded-full bg-muted text-muted-foreground">
                      +{service.features.length - 2} more
                    </span>
                  )}
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent/30 transition-colors pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="sm:max-w-lg focus:outline-none">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <selectedService.icon className="w-6 h-6 text-accent" />
                  </div>
                  <DialogTitle className="text-xl font-bold text-primary">
                    {selectedService.title}
                  </DialogTitle>
                </div>
              </DialogHeader>

              <div className="space-y-5">
                <p className="text-muted-foreground leading-relaxed">
                  {selectedService.description}
                </p>

                <div>
                  <h4 className="font-semibold text-primary mb-3 text-sm">What's Included:</h4>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-3 py-2 bg-primary/5 rounded-lg">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-sm text-foreground">Response: Within 2 hours</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-primary/5 rounded-lg">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-sm text-foreground">Available: 24/7</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    onClick={() => handleWhatsApp(selectedService.title)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Enquire on WhatsApp
                  </Button>
                  <Button
                    onClick={() => handleRequestQuote(selectedService.title)}
                    variant="outline"
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Request a Quote
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Services;
