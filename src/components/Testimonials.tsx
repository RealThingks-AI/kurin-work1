import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Kurin Hygienic has transformed our facility management completely. Their professional team and attention to detail are exceptional. We couldn't ask for better service!",
    name: "Rajesh Kumar",
    company: "Niramaya Hospital",
    rating: 5,
  },
  {
    quote: "The level of professionalism and reliability from Kurin Hygienic is outstanding. They handle everything seamlessly and our workspace has never looked better.",
    name: "Priya Sharma",
    company: "Millennium Construction",
    rating: 5,
  },
  {
    quote: "Outstanding service quality and responsive team. Kurin Hygienic truly understands our business needs and delivers consistent results.",
    name: "Vikram Patel",
    company: "KIA Motors",
    rating: 5,
  },
  {
    quote: "We've been working with Kurin Hygienic for over 3 years now. Their dedication to maintaining high standards and quick response to our needs is commendable.",
    name: "Anita Deshmukh",
    company: "Kolte Patil Developers",
    rating: 5,
  },
  {
    quote: "Excellent housekeeping and security services. The team is well-trained, punctual, and always ready to go the extra mile for client satisfaction.",
    name: "Suresh Mehta",
    company: "Sukhwani Constructions",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Resume auto-play after user interaction
  useEffect(() => {
    if (isAutoPlaying) return;
    const timeout = setTimeout(() => setIsAutoPlaying(true), 10000);
    return () => clearTimeout(timeout);
  }, [isAutoPlaying]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
      setIsAutoPlaying(false);
    } else if (e.key === "ArrowRight") {
      nextSlide();
      setIsAutoPlaying(false);
    }
  };

  return (
    <section 
      id="testimonials" 
      className="py-12 md:py-16 bg-primary/5"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Client testimonials"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our satisfied clients
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              prevSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground focus:ring-2 focus:ring-accent focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              nextSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground focus:ring-2 focus:ring-accent focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Testimonial Card */}
          <div className="overflow-hidden px-8 md:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-background rounded-2xl p-8 md:p-12 shadow-lg border border-border relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8">
                  <Quote className="w-12 h-12 text-accent/20" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-accent">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8" role="tablist">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                role="tab"
                aria-selected={currentIndex === index}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                  currentIndex === index
                    ? "bg-accent w-8"
                    : "bg-accent/30 hover:bg-accent/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
