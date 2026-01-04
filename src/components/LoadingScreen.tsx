import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import logo from '@/assets/logo.png';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  minDuration?: number;
}

const LoadingScreen = ({ onLoadingComplete, minDuration = 2000 }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    
    // Animate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const elapsed = Date.now() - startTime;
        const targetProgress = Math.min((elapsed / minDuration) * 100, 100);
        return Math.min(prev + 5, targetProgress);
      });
    }, 50);

    // Complete loading
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete?.();
      }, 400);
    }, minDuration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [minDuration, onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, hsl(222, 47%, 11%) 0%, hsl(213, 70%, 18%) 50%, hsl(199, 60%, 25%) 100%)' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Animated background particles - reduced for performance */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan/20 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0,
                }}
                animate={{
                  y: [null, -100],
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeOut',
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative flex flex-col items-center">
            {/* Logo container with glow */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-cyan/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Spinning ring */}
              <motion.div
                className="absolute -inset-4 border-2 border-cyan/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Second spinning ring */}
              <motion.div
                className="absolute -inset-8 border border-sky-400/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Logo */}
              <motion.img
                src={logo}
                alt="Comfort Technical Services"
                className="relative w-24 h-24 md:w-32 md:h-32 object-contain z-10 rounded-xl"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* Company name */}
            <motion.h1
              className="text-2xl md:text-3xl font-bold text-white mb-2 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="text-cyan">Comfort</span> Technical Services
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-white/60 text-sm mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Professional AC Services
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="w-48 md:w-64 h-1 bg-white/10 rounded-full overflow-hidden"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-sky-400 to-cyan rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.div
              className="mt-4 flex items-center gap-2 text-white/50 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span>Loading</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ...
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
