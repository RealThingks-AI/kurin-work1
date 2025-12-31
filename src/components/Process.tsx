import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Phone,
  Search,
  Wrench,
  ThumbsUp,
} from "lucide-react";

const steps = [
  { icon: Phone, title: "Contact Us", description: "Call, WhatsApp, or book online" },
  { icon: Search, title: "Inspection", description: "Expert diagnosis of your AC" },
  { icon: Wrench, title: "Service", description: "Professional work completed" },
  { icon: ThumbsUp, title: "Satisfaction", description: "Payment & your feedback" },
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
        }, 600);

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
        delay: i * 0.15,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section id="process" className="section-padding bg-[#1e293b]" ref={ref}>
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
            How It Works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="heading-lg text-white mb-6"
          >
            Simple <span className="text-accent">4-Step Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-white/70 mb-4"
          >
            Getting your AC serviced has never been easier
          </motion.p>
        </motion.div>

        {/* Desktop Steps - Single Row */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-16 left-[10%] right-[10%] h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeStep >= 3 ? 1 : activeStep >= 0 ? (activeStep + 1) / 4 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, index) => (
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
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 z-10 transition-all duration-300 ${
                      activeStep >= index
                        ? "bg-accent text-accent-foreground shadow-glow"
                        : "bg-white/20 text-white/60"
                    }`}
                    animate={activeStep === index ? { scale: [1, 1.3, 1.15], rotate: [0, 5, -5, 0] } : { scale: activeStep >= index ? 1.1 : 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Icon Circle */}
                  <motion.div
                    className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 border-2 transition-all duration-300 ${
                      activeStep >= index
                        ? "bg-accent/20 border-accent"
                        : "bg-white/10 border-white/20"
                    }`}
                    animate={activeStep === index ? { scale: [1, 1.15, 1.08], boxShadow: "0 0 30px rgba(var(--accent), 0.4)" } : {}}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      animate={activeStep === index ? { rotate: [0, -10, 10, 0] } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      <step.icon
                        className={`w-10 h-10 transition-colors duration-300 ${
                          activeStep >= index ? "text-accent" : "text-white/40"
                        }`}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Text */}
                  <motion.h3
                    className={`font-display font-bold text-lg mb-2 transition-colors duration-300 ${
                      activeStep >= index ? "text-white" : "text-white/50"
                    }`}
                    animate={activeStep === index ? { y: [0, -3, 0] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {step.title}
                  </motion.h3>
                  <p
                    className={`text-sm transition-colors duration-300 ${
                      activeStep >= index ? "text-white/70" : "text-white/40"
                    }`}
                  >
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10 overflow-hidden">
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
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-4 items-start pl-2"
                >
                  {/* Step Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        activeStep >= index
                          ? "bg-accent/20 border-accent"
                          : "bg-white/10 border-white/20"
                      }`}
                      animate={activeStep === index ? { scale: [1, 1.1, 1.05] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <step.icon
                        className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300 ${
                          activeStep >= index ? "text-accent" : "text-white/40"
                        }`}
                      />
                    </motion.div>
                    <motion.div
                      className={`absolute -top-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                        activeStep >= index
                          ? "bg-accent text-accent-foreground shadow-glow"
                          : "bg-white/20 text-white/60"
                      }`}
                      animate={activeStep === index ? { scale: [1, 1.3, 1.1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {index + 1}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-1 pr-2">
                    <h3
                      className={`font-display font-bold text-base sm:text-lg mb-1 transition-colors duration-300 ${
                        activeStep >= index ? "text-white" : "text-white/50"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm transition-colors duration-300 ${
                        activeStep >= index ? "text-white/70" : "text-white/40"
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
