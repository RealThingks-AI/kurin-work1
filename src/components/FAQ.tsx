import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your response time for inquiries?",
    answer: "We typically respond to inquiries within 2 hours during business hours. For urgent matters, please call us directly at +91 7038 613 623."
  },
  {
    question: "Do you provide 24/7 services?",
    answer: "Yes! We provide 24/7 quality services, 365 days a year. Our team is always available to support your facility management needs."
  },
  {
    question: "What areas do you serve?",
    answer: "Kurin Hygienic serves clients across India with a strong presence in Pune and surrounding regions. We work with clients nationwide."
  },
  {
    question: "Can I customize service packages?",
    answer: "Absolutely! We understand every business has unique needs. Our team works with you to create customized solutions tailored to your specific requirements and budget."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including bank transfers, checks, and online payments. Please discuss payment terms with our team."
  },
  {
    question: "Do you provide service guarantees?",
    answer: "Yes, we are committed to quality service delivery. We maintain high standards and work closely with clients to ensure satisfaction."
  },
  {
    question: "How do I book your services?",
    answer: "You can book our services by filling the contact form, calling us at +91 7038 613 623, or reaching out via WhatsApp. Our team will schedule a consultation with you."
  },
  {
    question: "Are your staff members trained and verified?",
    answer: "Yes! All our staff members undergo rigorous training and background verification. We only deploy qualified and verified professionals."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services
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
