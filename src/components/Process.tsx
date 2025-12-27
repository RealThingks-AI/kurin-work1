import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Megaphone,
  Search,
  UserPlus,
  FileText,
  ShieldCheck,
  Phone,
  Filter,
  Video,
  Award,
  GraduationCap,
} from "lucide-react";

const steps = [
  { icon: Megaphone, title: "Advertise the Position", description: "Wide-reaching recruitment campaigns" },
  { icon: Search, title: "Identify Hiring Needs", description: "Understanding client requirements" },
  { icon: UserPlus, title: "Recruit the Position", description: "Sourcing qualified candidates" },
  { icon: FileText, title: "Review Applications", description: "Thorough application screening" },
  { icon: ShieldCheck, title: "Background Check", description: "Comprehensive verification" },
  { icon: Phone, title: "Phone Interview", description: "Initial screening calls" },
  { icon: Filter, title: "Screening & Shortlisting", description: "Selecting top candidates" },
  { icon: Video, title: "Interviews", description: "Virtual or offline interviews" },
  { icon: Award, title: "Evaluation & Offer", description: "Final assessment and offer" },
  { icon: GraduationCap, title: "Induction", description: "Onboarding new employees" },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(-1);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (isInView && !animationComplete) {
      const startDelay = setTimeout(() => {
        let currentStep = 0;
        const interval = setInterval(() => {
          setActiveStep(currentStep);
          currentStep++;
          if (currentStep >= steps.length) {
            clearInterval(interval);
            setAnimationComplete(true);
          }
        }, 400);

        return () => clearInterval(interval);
      }, 600);

      return () => clearTimeout(startDelay);
    }
  }, [isInView, animationComplete]);

  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section id="process" className="section-padding bg-primary" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/20 text-accent border border-accent/30"
          >
            Quality Assurance
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="heading-lg text-primary-foreground mb-6"
          >
            Our <span className="text-accent">Recruiting & Selection Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-primary-foreground/70 mb-4"
          >
            Our recruitment principle mainly involves finding the right candidate with the best skills, experience, and personality to fit the job.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-primary-foreground/60"
          >
            A rigorous 10-step process ensuring you get only the best qualified and verified professionals.
          </motion.p>
        </motion.div>

        {/* Desktop Stepper - Two Rows */}
        <div className="hidden lg:block">
          {/* First Row (Steps 1-5) */}
          <div className="relative mb-8">
            {/* Progress Line Row 1 */}
            <div className="absolute top-5 left-[10%] right-[10%] h-1 bg-primary-foreground/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeStep >= 4 ? 1 : activeStep >= 0 ? (activeStep + 1) / 5 : 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            <div className="grid grid-cols-5 gap-6">
              {steps.slice(0, 5).map((step, index) => (
                <motion.div
                  key={step.title}
                  custom={index}
                  variants={stepVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step Number */}
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4 z-10 transition-all duration-300 ${
                      activeStep >= index
                        ? "bg-accent text-accent-foreground shadow-glow"
                        : "bg-primary-foreground/20 text-primary-foreground/60"
                    }`}
                    animate={activeStep === index ? { scale: [1, 1.3, 1.15], rotate: [0, 5, -5, 0] } : { scale: activeStep >= index ? 1.1 : 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Icon Circle */}
                  <motion.div
                    className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 border-2 transition-all duration-300 ${
                      activeStep >= index
                        ? "bg-accent/20 border-accent"
                        : "bg-primary-foreground/10 border-primary-foreground/20"
                    }`}
                    animate={activeStep === index ? { scale: [1, 1.15, 1.08], boxShadow: "0 0 30px rgba(var(--accent), 0.4)" } : {}}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      animate={activeStep === index ? { rotate: [0, -10, 10, 0] } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      <step.icon
                        className={`w-8 h-8 transition-colors duration-300 ${
                          activeStep >= index ? "text-accent" : "text-primary-foreground/40"
                        }`}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Text */}
                  <motion.h3
                    className={`font-display font-bold text-sm mb-1 transition-colors duration-300 ${
                      activeStep >= index ? "text-primary-foreground" : "text-primary-foreground/50"
                    }`}
                    animate={activeStep === index ? { y: [0, -3, 0] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {step.title}
                  </motion.h3>
                  <p
                    className={`text-xs transition-colors duration-300 ${
                      activeStep >= index ? "text-primary-foreground/70" : "text-primary-foreground/40"
                    }`}
                  >
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Connector Arrow */}
          <div className="flex justify-center mb-8">
            <motion.div
              className="flex items-center gap-2 text-accent"
              initial={{ opacity: 0, y: -10 }}
              animate={activeStep >= 4 ? { opacity: 1, y: 0 } : { opacity: 0.3, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div 
                className="w-8 h-0.5 bg-accent/50"
                animate={activeStep >= 4 ? { scaleX: [0, 1] } : {}}
                transition={{ duration: 0.3 }}
              />
              <motion.svg 
                className="w-6 h-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={activeStep >= 4 ? { y: [0, 3, 0] } : {}}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
              <motion.div 
                className="w-8 h-0.5 bg-accent/50"
                animate={activeStep >= 4 ? { scaleX: [0, 1] } : {}}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>

          {/* Second Row (Steps 6-10) */}
          <div className="relative">
            {/* Progress Line Row 2 */}
            <div className="absolute top-5 left-[10%] right-[10%] h-1 bg-primary-foreground/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeStep >= 9 ? 1 : activeStep >= 5 ? (activeStep - 4) / 5 : 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            <div className="grid grid-cols-5 gap-6">
              {steps.slice(5, 10).map((step, index) => {
                const actualIndex = index + 5;
                return (
                  <motion.div
                    key={step.title}
                    custom={actualIndex}
                    variants={stepVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="relative flex flex-col items-center text-center"
                  >
                    {/* Step Number */}
                    <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4 z-10 transition-all duration-300 ${
                        activeStep >= actualIndex
                          ? "bg-accent text-accent-foreground shadow-glow"
                          : "bg-primary-foreground/20 text-primary-foreground/60"
                      }`}
                      animate={activeStep === actualIndex ? { scale: [1, 1.3, 1.15], rotate: [0, 5, -5, 0] } : { scale: activeStep >= actualIndex ? 1.1 : 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {actualIndex + 1}
                    </motion.div>

                    {/* Icon Circle */}
                    <motion.div
                      className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 border-2 transition-all duration-300 ${
                        activeStep >= actualIndex
                          ? "bg-accent/20 border-accent"
                          : "bg-primary-foreground/10 border-primary-foreground/20"
                      }`}
                      animate={activeStep === actualIndex ? { scale: [1, 1.15, 1.08] } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.div
                        animate={activeStep === actualIndex ? { rotate: [0, -10, 10, 0] } : {}}
                        transition={{ duration: 0.4 }}
                      >
                        <step.icon
                          className={`w-8 h-8 transition-colors duration-300 ${
                            activeStep >= actualIndex ? "text-accent" : "text-primary-foreground/40"
                          }`}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Text */}
                    <motion.h3
                      className={`font-display font-bold text-sm mb-1 transition-colors duration-300 ${
                        activeStep >= actualIndex ? "text-primary-foreground" : "text-primary-foreground/50"
                      }`}
                      animate={activeStep === actualIndex ? { y: [0, -3, 0] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {step.title}
                    </motion.h3>
                    <p
                      className={`text-xs transition-colors duration-300 ${
                        activeStep >= actualIndex ? "text-primary-foreground/70" : "text-primary-foreground/40"
                      }`}
                    >
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-foreground/10 overflow-hidden">
              <motion.div
                className="w-full bg-accent origin-top"
                initial={{ height: 0 }}
                animate={{ height: activeStep >= 0 ? `${((activeStep + 1) / steps.length) * 100}%` : 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative flex gap-5 items-start"
                >
                  {/* Step Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        activeStep >= index
                          ? "bg-accent/20 border-accent"
                          : "bg-primary-foreground/10 border-primary-foreground/20"
                      }`}
                      animate={activeStep === index ? { scale: [1, 1.1, 1.05] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <step.icon
                        className={`w-7 h-7 transition-colors duration-300 ${
                          activeStep >= index ? "text-accent" : "text-primary-foreground/40"
                        }`}
                      />
                    </motion.div>
                    <motion.div
                      className={`absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                        activeStep >= index
                          ? "bg-accent text-accent-foreground shadow-glow"
                          : "bg-primary-foreground/20 text-primary-foreground/60"
                      }`}
                      animate={activeStep === index ? { scale: [1, 1.3, 1.1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {index + 1}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3
                      className={`font-display font-bold text-lg mb-1 transition-colors duration-300 ${
                        activeStep >= index ? "text-primary-foreground" : "text-primary-foreground/50"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm transition-colors duration-300 ${
                        activeStep >= index ? "text-primary-foreground/70" : "text-primary-foreground/40"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
