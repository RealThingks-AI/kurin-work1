import { Phone, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/kurin2018",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/_kurin.hygienic",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://www.twitter.com/@KurinHygienic",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/@kurinpune8354",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="bg-primary py-12" ref={ref}>
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          {/* Top Row - Logo and Social */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-2xl font-display font-bold text-primary-foreground">
                Kurin<span className="text-accent">Hygienic</span>
              </span>
              <p className="text-primary-foreground/60 text-sm mt-2">
                All Manpower Solutions
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-3"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                  className="p-2.5 rounded-full bg-primary-foreground/10 hover:bg-accent hover:scale-110 transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-primary-foreground group-hover:text-accent-foreground" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/10" />

          {/* Bottom Row - Copyright, Phone, and Legal Links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center md:text-left"
            >
              <p className="text-primary-foreground/60 text-sm">
                © {currentYear} Kurin Hygienic. All rights reserved.
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-accent" />
              <a
                href="tel:7038613623"
                className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
              >
                +91 7038 613 623
              </a>
            </motion.div>

            {/* Legal Links */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 text-sm"
            >
              <Link
                to="/privacy-policy"
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-primary-foreground/30">|</span>
              <Link
                to="/terms-of-service"
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                Terms & Conditions
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;