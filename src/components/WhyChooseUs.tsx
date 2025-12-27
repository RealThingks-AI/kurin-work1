import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Globe, Users, Handshake, Target } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "National Perspective That Delivers",
    description:
      "Our global reach and local expertise deliver unmatched perspective with detailed insight into local markets.",
  },
  {
    icon: Users,
    title: "Having All The Talent In The Country",
    description:
      "Our extensive network ensures access to the best talent across the nation for your workforce needs.",
  },
  {
    icon: Handshake,
    title: "Building Collaborative Partnerships",
    description:
      "We design customized solutions based on your business and talent-related needs to deliver results.",
  },
  {
    icon: Target,
    title: "Client Satisfaction Is Our Priority",
    description:
      "We provide suited candidates in any field while maintaining respectful relationships with clients.",
  },
];

const stats = [
  { value: 1000, suffix: "+", label: "Staff Deployed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

const CountUp = ({ end, suffix, isInView }: { end: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepTime = duration / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [end, isInView]);
  
  return <>{count}{suffix}</>;
};

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent group-hover:shadow-glow transition-all duration-300 w-fit mb-3">
                <feature.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-primary mb-2 text-sm">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent/30 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Stats - Compact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: "easeOut" }}
              className="text-center p-4 bg-accent/5 rounded-lg border border-accent/10"
            >
              <div className="text-2xl md:text-3xl font-bold font-display text-accent mb-1">
                <CountUp end={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
