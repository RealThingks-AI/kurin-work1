import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does AC servicing cost?",
    answer: "Our AC servicing starts from just ₹399. This includes filter cleaning, coil inspection, refrigerant level check, and performance optimization. Deep cleaning services start from ₹599."
  },
  {
    question: "Do you service all AC brands?",
    answer: "Yes! We service all major AC brands including LG, Samsung, Daikin, Voltas, Blue Star, Hitachi, Carrier, Panasonic, Whirlpool, and many more. Our technicians are trained to work with all types of ACs."
  },
  {
    question: "What areas do you cover?",
    answer: "We cover all of Pune and PCMC including Aundh, Wakad, Hinjewadi, Pimple Saudagar, Pimpri, Chinchwad, Kharadi, Viman Nagar, Baner, Kothrud, and 15+ other localities."
  },
  {
    question: "How quickly can you come?",
    answer: "We offer same-day service for most requests made before 2 PM. Our average response time is 2-4 hours depending on your location. For scheduled appointments, we always arrive on time."
  },
  {
    question: "Do you provide AMC plans?",
    answer: "Yes! Our AMC plans start from ₹2,499/year for homes (4 visits), ₹4,999/year for offices (6 visits with gas top-up), and custom plans for commercial establishments with 24/7 support."
  },
  {
    question: "What's included in deep cleaning?",
    answer: "Our deep cleaning service includes complete disassembly, coil washing with high-pressure water jet, drain pipe cleaning, fan blade cleaning, anti-bacterial treatment, and reassembly with testing."
  },
  {
    question: "Are your technicians certified?",
    answer: "Yes, all our technicians are trained professionals with 3+ years of experience. They undergo regular training to stay updated with the latest AC technologies and repair techniques."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Cash, UPI (Google Pay, PhonePe, Paytm), Bank Transfer, and all major debit/credit cards. Payment is collected only after service completion and your satisfaction."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            FAQ
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our AC services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-background rounded-lg border border-border shadow-sm overflow-hidden"
                >
                  <AccordionTrigger className="px-5 py-3 text-left hover:no-underline hover:bg-primary/5 transition-colors duration-300 [&[data-state=open]]:bg-primary/5">
                    <span className="text-sm md:text-base font-medium text-foreground pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-3 pt-0">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
