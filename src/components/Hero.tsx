import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Snowflake, Users, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const taglines = [
  "Expert AC Service",
  "Fast Repairs",
  "Trusted Technicians",
  "24/7 Support",
];

const trustBadges = [
  { icon: Users, label: "Experienced Technicians", desc: "Skilled professionals" },
  { icon: Shield, label: "Trusted by Companies", desc: "Multiple corporate clients" },
  { icon: Clock, label: "Same/Next-Day Service", desc: "Quick response time" },
  { icon: Snowflake, label: "Service Warranty", desc: "Transparent pricing" },
];

const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Floating elements data
  const floatingElements = [
    { size: 120, x: "8%", y: "18%", duration: 10, delay: 0, opacity: 0.15 },
    { size: 80, x: "88%", y: "12%", duration: 12, delay: 1, opacity: 0.12 },
    { size: 60, x: "78%", y: "68%", duration: 8, delay: 2, opacity: 0.1 },
    { size: 140, x: "3%", y: "72%", duration: 14, delay: 0.5, opacity: 0.12 },
    { size: 70, x: "92%", y: "48%", duration: 11, delay: 1.5, opacity: 0.08 },
    { size: 50, x: "18%", y: "58%", duration: 7, delay: 2.5, opacity: 0.1 },
    { size: 90, x: "65%", y: "82%", duration: 13, delay: 0.8, opacity: 0.1 },
    { size: 55, x: "42%", y: "8%", duration: 9, delay: 1.2, opacity: 0.12 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient Overlay - Enhanced */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute inset-0 gradient-overlay" 
      />

      {/* Animated Gradient Mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-purple-light/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-accent/15 to-transparent" />
      </div>

      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Elements - Enhanced */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full pointer-events-none blur-xl"
          style={{
            width: el.size,
            height: el.size,
            left: el.x,
            top: el.y,
            background: index % 2 === 0 
              ? `radial-gradient(circle, rgba(59, 130, 246, ${el.opacity}) 0%, transparent 70%)`
              : `radial-gradient(circle, rgba(255, 255, 255, ${el.opacity * 0.6}) 0%, transparent 70%)`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [el.opacity, el.opacity * 1.5, el.opacity],
            scale: [1, 1.3, 1],
            y: [0, -40, 0],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating geometric shapes - Enhanced */}
      <motion.div
        className="absolute w-40 h-40 border border-white/10 rounded-full pointer-events-none"
        style={{ left: "12%", top: "28%" }}
        animate={{ 
          rotate: 360,
          scale: [1, 1.15, 1],
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute w-24 h-24 border border-blue-400/15 pointer-events-none"
        style={{ right: "18%", top: "22%", borderRadius: "35%" }}
        animate={{ 
          rotate: -360,
          y: [0, 25, 0],
        }}
        transition={{ 
          rotate: { duration: 18, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute w-20 h-20 border border-white/8 pointer-events-none"
        style={{ left: "72%", bottom: "32%", transform: "rotate(45deg)" }}
        animate={{ 
          rotate: [45, 135, 45],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
        }}
      />
      
      {/* Additional decorative elements */}
      <motion.div
        className="absolute w-2 h-2 bg-blue-400/40 rounded-full pointer-events-none"
        style={{ left: "25%", top: "40%" }}
        animate={{ 
          scale: [1, 2, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-3 h-3 bg-white/30 rounded-full pointer-events-none"
        style={{ right: "30%", top: "50%" }}
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 section-container py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm text-white/90 border border-white/20">
              <Snowflake className="w-4 h-4 text-accent animate-pulse" />
              All AC Solutions
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-emerald-500/20 backdrop-blur-sm text-emerald-300 border border-emerald-500/30">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              GSTIN: 27HEKPS5234F1Z4
            </span>
          </motion.div>

          {/* Animated Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="h-[5.5rem] md:h-[7rem] lg:h-[8rem] mt-6 mb-8 md:mt-8 md:mb-10 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentTagline}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="heading-xl text-white drop-shadow-lg"
              >
                {taglines[currentTagline]}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-200">
                  At Your Fingertips
                </span>
              </motion.h1>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg md:text-xl lg:text-2xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Professional AC servicing, repair & installation in Pune & PCMC.
            Trusted by 1000+ customers with 7+ years of experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-row items-center justify-center gap-2 sm:gap-4"
          >
            <Button
              variant="hero"
              size="xl"
              onClick={handleScrollToContact}
              className="group min-w-[130px] sm:min-w-[220px] text-sm sm:text-base px-4 sm:px-6"
            >
              Book Service Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <a href="tel:7745046520">
              <Button variant="heroOutline" size="xl" className="min-w-[130px] sm:min-w-[220px] text-sm sm:text-base px-4 sm:px-6">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Call Now
              </Button>
            </a>
          </motion.div>

        </div>
      </div>

      {/* Trust Badges - Bottom Section */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 bg-white/98 backdrop-blur-md py-4 md:py-6 border-t border-border/10 shadow-lg"
      >
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-3 p-2 md:p-3"
              >
                <div className="p-2 md:p-3 rounded-xl bg-accent/10">
                  <badge.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold text-primary">{badge.label}</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">{badge.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;