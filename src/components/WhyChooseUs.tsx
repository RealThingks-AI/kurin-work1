import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Clock, Shield, IndianRupee } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const features = [
  {
    icon: Users,
    title: "Experienced Technicians",
    description:
      "7+ years of expertise with all AC brands and models.",
    details: "Our technicians have over 7 years of hands-on experience servicing all major AC brands including LG, Samsung, Daikin, Voltas, Blue Star, Hitachi, and more. They undergo regular training to stay updated with the latest technologies and repair techniques. Each technician is background-verified and professionally trained to handle any AC issue efficiently."
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description:
      "No hidden charges. Upfront quotes before any work begins.",
    details: "We believe in complete transparency when it comes to pricing. Before starting any work, our technicians will inspect your AC and provide a detailed quote. There are no hidden fees or surprise charges. What we quote is what you pay. If additional issues are found, we'll always consult you first before proceeding."
  },
  {
    icon: Shield,
    title: "All Brand Expertise",
    description:
      "We service all AC brands - LG, Samsung, Daikin, Voltas & more.",
    details: "Whether you have a window AC, split AC, or cassette AC from any brand, our technicians can handle it. We maintain stock of genuine spare parts for all major brands including LG, Samsung, Daikin, Voltas, Blue Star, Hitachi, Carrier, Panasonic, Whirlpool, and many more. No brand is too old or too new for us."
  },
  {
    icon: Clock,
    title: "Quick Response",
    description:
      "Same-day service available. We reach you fast when you need us.",
    details: "We understand that a non-working AC can be an emergency. That's why we offer same-day service for most requests made before 2 PM. Our strategic presence across Pune & PCMC means we can reach most locations within 2-4 hours. For scheduled appointments, we always arrive on time or notify you in advance of any delays."
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

  return (
    <section id="why-us" className="py-16 bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-block px-3 py-1.5 mb-3 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Why Choose Us
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Your Trusted <span className="text-accent">AC Service Partner</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Professional AC services with guaranteed satisfaction
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedFeature(feature)}
              className="group relative bg-card rounded-xl border border-border p-3 md:p-5 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="p-2 md:p-3 rounded-lg bg-accent/10 group-hover:bg-accent group-hover:shadow-glow transition-all duration-300 w-fit mb-2 md:mb-3">
                <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-xs md:text-sm leading-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-[10px] md:text-xs leading-relaxed hidden md:block">
                {feature.description}
              </p>
              <p className="text-[10px] text-accent mt-2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">Click to learn more →</p>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent/30 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Feature Dialog */}
        <Dialog open={selectedFeature !== null} onOpenChange={() => setSelectedFeature(null)}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-xl bg-accent/10">
                  {selectedFeature && <selectedFeature.icon className="w-6 h-6 text-accent" />}
                </div>
                <DialogTitle className="text-xl font-display">
                  {selectedFeature?.title}
                </DialogTitle>
              </div>
              <DialogDescription className="text-base leading-relaxed pt-2">
                {selectedFeature?.details}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default WhyChooseUs;
