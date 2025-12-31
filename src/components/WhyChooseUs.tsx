import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Globe, Users, Handshake, Target } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const features = [
  {
    icon: Globe,
    title: "National Perspective That Delivers",
    description:
      "Our global reach and local expertise deliver unmatched perspective with detailed insight into local markets.",
    details: "With operations spanning across India, we bring a truly national perspective to workforce solutions. Our team understands regional differences in labor markets, compliance requirements, and cultural nuances. This deep local knowledge, combined with our broad network, enables us to source the right talent from anywhere in the country while ensuring seamless integration into your local operations. We maintain partnerships with training institutes and employment agencies in all major cities, giving us access to diverse talent pools that many regional agencies simply cannot match."
  },
  {
    icon: Users,
    title: "Having All The Talent In The Country",
    description:
      "Our extensive network ensures access to the best talent across the nation for your workforce needs.",
    details: "Our talent database includes over 10,000 pre-screened professionals across 14+ industries. From skilled technicians to management staff, from hospitality professionals to industrial workers, we have access to talent at every level. Our rigorous screening process includes skill assessments, background verification, and reference checks to ensure you get only the most qualified candidates. We also maintain relationships with vocational training centers, ITIs, and professional colleges to access fresh talent with the latest skills and certifications."
  },
  {
    icon: Handshake,
    title: "Building Collaborative Partnerships",
    description:
      "We design customized solutions based on your business and talent-related needs to deliver results.",
    details: "We don't believe in one-size-fits-all solutions. Our team works closely with each client to understand their unique challenges, culture, and objectives. Whether you need temporary staffing for a seasonal surge, permanent placements for critical roles, or complete workforce management outsourcing, we design solutions that fit your specific requirements. Our account managers maintain regular communication to ensure ongoing alignment with your evolving needs. Many of our clients have been with us since our founding in 2018, a testament to the lasting partnerships we build."
  },
  {
    icon: Target,
    title: "Client Satisfaction Is Our Priority",
    description:
      "We provide suited candidates in any field while maintaining respectful relationships with clients.",
    details: "Client satisfaction is measured not just by placement success rates, but by long-term retention and performance of our deployed staff. We maintain a 95% client retention rate and regularly conduct satisfaction surveys to continuously improve our services. Our dedicated support team is available 24/7 to address any concerns. We also provide regular performance reports and are always ready to make adjustments to ensure our staff meets your expectations. Your success is our success, and we go above and beyond to ensure every placement contributes to your business goals."
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            Your Trusted <span className="text-accent">Workforce Partner</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            We help employers identify the right candidates and provide job security.
          </p>
        </motion.div>

        {/* Features Grid - More Compact */}
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
              <h3 className="font-semibold text-primary mb-1 md:mb-2 text-xs md:text-sm leading-tight">
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
