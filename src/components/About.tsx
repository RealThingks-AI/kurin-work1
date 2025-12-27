import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Zap,
  Shield,
  Heart,
  Target,
  Eye,
  Rocket,
} from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  { icon: Users, label: "Collaboration", description: "Working together for success" },
  { icon: Zap, label: "Empowerment", description: "Enabling growth at every level" },
  { icon: Shield, label: "Integrity", description: "Honest and transparent dealings" },
  { icon: Heart, label: "Respect", description: "Valuing every individual" },
  { icon: Target, label: "Responsibility", description: "Accountable for our actions" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-light-gray" ref={ref}>
      <div className="section-container">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutTeam}
                alt="Kurin Hygienic Team"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Stats Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-8 py-6 rounded-2xl shadow-glow"
            >
              <div className="text-4xl font-bold font-display">2018</div>
              <div className="text-sm opacity-90">Established</div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
              About Us
            </span>
            <h2 className="heading-lg text-primary mb-6">
              Your Trusted Partner in{" "}
              <span className="text-accent">Workforce Solutions</span>
            </h2>
            <p className="text-body mb-6">
              Established in 2018, Kurin Hygienic delivers single-window solutions
              for all workforce and facility challenges. The company has grown into
              a professional organization with well-planned strategies, trained
              supervisory staff, and a strong technology foundation.
            </p>
            <p className="text-body mb-8">
              Thousands of staff from all locations are working satisfactorily and
              comfortably growing with Kurin Hygienic. Our single window goal is to
              provide solutions for all work troubles with latest technology,
              machineries, and trained operators.
            </p>

            {/* Vision & Mission Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 bg-background rounded-xl border border-border shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Eye className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-primary">
                    Our Vision
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  To fulfill manpower needs by offering the right people for the
                  right jobs, creating career growth opportunities nationwide.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="p-6 bg-background rounded-xl border border-border shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Rocket className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-primary">
                    Our Mission
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  To provide innovative workforce solutions, connecting human
                  potential to the power of business.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="heading-md text-primary mb-8">Our Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group p-5 bg-background rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 cursor-pointer"
              >
                <div className="p-3 rounded-full bg-accent/10 w-fit mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-display font-semibold text-primary mb-1">
                  {value.label}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
