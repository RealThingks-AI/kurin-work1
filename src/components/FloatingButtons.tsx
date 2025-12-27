import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

const FloatingButtons = () => {
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  return (
    <>
      {/* WhatsApp FAB - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative">
          <AnimatePresence>
            {showTooltip === "whatsapp" && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap"
              >
                Chat with us on WhatsApp
              </motion.div>
            )}
          </AnimatePresence>
          <a
            href="https://wa.me/917038613623"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            onMouseEnter={() => setShowTooltip("whatsapp")}
            onMouseLeave={() => setShowTooltip(null)}
          >
            <MessageCircle className="w-7 h-7 text-primary-foreground" />
          </a>
          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25 pointer-events-none" />
        </div>
      </motion.div>

      {/* Call FAB - Bottom Left (Mobile Only) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.3 }}
        className="fixed bottom-6 left-6 z-50 md:hidden"
      >
        <div className="relative">
          <AnimatePresence>
            {showTooltip === "call" && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap"
              >
                Call us now
              </motion.div>
            )}
          </AnimatePresence>
          <a
            href="tel:7038613623"
            className="relative z-10 flex items-center justify-center w-16 h-16 bg-accent hover:bg-accent/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            onMouseEnter={() => setShowTooltip("call")}
            onMouseLeave={() => setShowTooltip(null)}
          >
            <Phone className="w-7 h-7 text-accent-foreground" />
          </a>
          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-25 pointer-events-none" />
        </div>
      </motion.div>
    </>
  );
};

export default FloatingButtons;
