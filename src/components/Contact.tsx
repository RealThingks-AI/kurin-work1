import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Check,
  X,
  Loader2,
  MessageCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Staff & Payroll Outsourcing",
  "Labour Supply",
  "Corporate Housekeeping",
  "Washroom Hygiene Management",
  "Floor Care Services",
  "MEP & Technical Services",
  "Professional Security Services",
  "Pantry & Cafeteria Services",
  "Other",
];

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

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  service?: string;
}

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Listen for prefill service event from Services modal
  useEffect(() => {
    const handlePrefill = (e: CustomEvent<string>) => {
      setFormData((prev) => ({ ...prev, service: e.detail }));
      setTouched((prev) => ({ ...prev, service: true }));
    };
    window.addEventListener("prefillService", handlePrefill as EventListener);
    return () => window.removeEventListener("prefillService", handlePrefill as EventListener);
  }, []);

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return "Name is required";
    if (!/^[a-zA-Z\s\-']+$/.test(name.trim())) {
      return "Name can only contain letters, spaces, and hyphens";
    }
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (name.trim().length > 100) return "Name must be less than 100 characters";
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return "Please enter a valid email address";
    }
    if (email.trim().length > 255) return "Email must be less than 255 characters";
    return undefined;
  };

  const validateMobile = (mobile: string): string | undefined => {
    if (!mobile.trim()) return "Mobile number is required";
    const cleanMobile = mobile.replace(/\s/g, "");
    if (!/^[0-9]+$/.test(cleanMobile)) {
      return "Mobile number can only contain digits";
    }
    if (cleanMobile.length !== 10) {
      return "Please enter a valid 10-digit mobile number";
    }
    return undefined;
  };

  const validateService = (service: string): string | undefined => {
    if (!service) return "Please select a service";
    return undefined;
  };

  // Handle field changes with real-time validation
  const handleNameChange = (value: string) => {
    const filtered = value.replace(/[^a-zA-Z\s\-']/g, "");
    setFormData({ ...formData, name: filtered });
    if (touched.name) {
      setErrors({ ...errors, name: validateName(filtered) });
    }
  };

  const handleEmailChange = (value: string) => {
    setFormData({ ...formData, email: value });
    if (touched.email) {
      setErrors({ ...errors, email: validateEmail(value) });
    }
  };

  const handleMobileChange = (value: string) => {
    const filtered = value.replace(/[^0-9]/g, "").slice(0, 10);
    setFormData({ ...formData, mobile: filtered });
    if (touched.mobile) {
      setErrors({ ...errors, mobile: validateMobile(filtered) });
    }
  };

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value });
    if (touched.service) {
      setErrors({ ...errors, service: validateService(value) });
    }
  };

  const handleBlur = (field: keyof FormErrors) => {
    setTouched({ ...touched, [field]: true });
    setFocusedField(null);
    let error: string | undefined;
    switch (field) {
      case "name":
        error = validateName(formData.name);
        break;
      case "email":
        error = validateEmail(formData.email);
        break;
      case "mobile":
        error = validateMobile(formData.mobile);
        break;
      case "service":
        error = validateService(formData.service);
        break;
    }
    setErrors({ ...errors, [field]: error });
  };

  const isFormValid = () => {
    return (
      !validateName(formData.name) &&
      !validateEmail(formData.email) &&
      !validateMobile(formData.mobile) &&
      !validateService(formData.service)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      mobile: validateMobile(formData.mobile),
      service: validateService(formData.service),
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, mobile: true, service: true });

    if (Object.values(newErrors).some((error) => error)) {
      toast({
        title: "Please fix the errors",
        description: "Some fields have invalid values.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    const subject = encodeURIComponent(`Enquiry for ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\nMobile: ${formData.mobile}\nService Required: ${formData.service}\n\nMessage:\n${formData.message.trim()}`
    );
    window.location.href = `mailto:kurin.pune@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitting(false);

    toast({
      title: "Enquiry Prepared Successfully!",
      description: "Your email client has been opened. Please send the email to complete your enquiry.",
    });

    setFormData({
      name: "",
      email: "",
      mobile: "",
      service: "",
      message: "",
    });
    setTouched({});
    setErrors({});
  };

  const getInputStyles = (field: keyof FormErrors) => {
    const baseStyles = "h-12 bg-background border-2 rounded-xl transition-all duration-300";
    const focusStyles = focusedField === field ? "border-accent ring-2 ring-accent/20" : "";
    if (!touched[field]) return `${baseStyles} ${focusStyles}`;
    if (errors[field]) return `${baseStyles} border-destructive focus-visible:ring-destructive/20 ${focusStyles}`;
    return `${baseStyles} border-success focus-visible:ring-success/20 ${focusStyles}`;
  };

  const renderFieldStatus = (field: keyof FormErrors) => {
    if (!touched[field]) return null;
    if (errors[field]) {
      return (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="p-1 rounded-full bg-destructive/10"
        >
          <X className="w-4 h-4 text-destructive" />
        </motion.div>
      );
    }
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="p-1 rounded-full bg-success/10"
      >
        <Check className="w-4 h-4 text-success" />
      </motion.div>
    );
  };

  const completedFields = Object.keys(touched).filter(
    (field) => touched[field] && !errors[field as keyof FormErrors] && formData[field as keyof typeof formData]
  ).length;
  const totalRequiredFields = 4;
  const progress = (completedFields / totalRequiredFields) * 100;

  return (
    <section id="contact" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-accent/10 text-accent border border-accent/20"
          >
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </motion.span>
          <h2 className="heading-lg text-primary mb-5">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-dark">
              Get Started?
            </span>
          </h2>
          <p className="text-body">
            Contact us today for a free consultation and discover how Kurin
            Hygienic can transform your facility management.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="heading-md text-primary mb-8">Contact Information</h3>

            <div className="space-y-6">
              {/* Address */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ x: 4 }}
                className="flex gap-4 p-4 rounded-2xl hover:bg-accent/5 transition-colors cursor-default"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent/10 to-purple-light/10 h-fit">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-primary mb-1">
                    Head Office
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Office No. 06, Swami Plaza, Near Bird Valley Hotel,
                    <br />
                    Shahunagar, Chinchwad, Pune – 411019
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ x: 4 }}
                className="flex gap-4 p-4 rounded-2xl hover:bg-accent/5 transition-colors cursor-default"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent/10 to-purple-light/10 h-fit">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-primary mb-1">
                    Phone
                  </h4>
                  <div className="space-y-1">
                    <a
                      href="tel:7038613623"
                      className="block text-muted-foreground text-sm hover:text-accent transition-colors"
                    >
                      +91 7038 613 623
                    </a>
                    <a
                      href="tel:8007770506"
                      className="block text-muted-foreground text-sm hover:text-accent transition-colors"
                    >
                      +91 800 777 05 06
                    </a>
                    <a
                      href="tel:8007770906"
                      className="block text-muted-foreground text-sm hover:text-accent transition-colors"
                    >
                      +91 800 777 09 06
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ x: 4 }}
                className="flex gap-4 p-4 rounded-2xl hover:bg-accent/5 transition-colors cursor-default"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent/10 to-purple-light/10 h-fit">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-primary mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:kurin.pune@gmail.com"
                    className="text-muted-foreground text-sm hover:text-accent transition-colors"
                  >
                    kurin.pune@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.55 }}
                whileHover={{ x: 4 }}
                className="flex gap-4 p-4 rounded-2xl hover:bg-accent/5 transition-colors cursor-default"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent/10 to-purple-light/10 h-fit">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-primary mb-1">
                    Business Hours
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    24/7 Available for Enquiries
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6"
            >
              <h4 className="font-display font-semibold text-primary mb-4">
                Find Us Here
              </h4>
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4847408037344!2d73.7856!3d18.6466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x71d2460990634769!2sSwami%20Plaza%2C%20Shahunagar%2C%20Chinchwad%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411019!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kurin Hygienic Office Location"
                  className="w-full"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/6QVwaWUMcn8pUnEb6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-sm text-accent hover:text-accent/80 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Open in Google Maps
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8"
            >
              <h4 className="font-display font-semibold text-primary mb-4">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.name}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl bg-accent/10 hover:bg-accent hover:shadow-glow transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative bg-card p-5 md:p-8 rounded-2xl md:rounded-3xl border border-border shadow-xl overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent/10 to-purple-light/10 rounded-full blur-3xl -z-10" />
              
              <div className="flex items-center justify-between mb-6">
                <h3 className="heading-md text-primary">Send an Enquiry</h3>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-xs font-medium text-muted-foreground">
                    {completedFields}/{totalRequiredFields} completed
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 bg-muted rounded-full mb-8 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent to-purple-dark rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>

              <div className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <div className="relative">
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="e.g., John Smith"
                      value={formData.name}
                      onChange={(e) => handleNameChange(e.target.value)}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => handleBlur("name")}
                      className={getInputStyles("name")}
                      maxLength={100}
                      autoComplete="name"
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={touched.name && !!errors.name}
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      {renderFieldStatus("name")}
                    </div>
                  </div>
                  {touched.name && errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      id="name-error" 
                      className="text-sm text-destructive mt-2 flex items-center gap-1"
                    >
                      <X className="w-3 h-3" />
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="e.g., your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => handleBlur("email")}
                      className={getInputStyles("email")}
                      maxLength={255}
                      autoComplete="email"
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={touched.email && !!errors.email}
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      {renderFieldStatus("email")}
                    </div>
                  </div>
                  {touched.email && errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      id="email-error" 
                      className="text-sm text-destructive mt-2 flex items-center gap-1"
                    >
                      <X className="w-3 h-3" />
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Mobile Field */}
                <div>
                  <label htmlFor="contact-mobile" className="block text-sm font-medium text-foreground mb-2">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Input
                      id="contact-mobile"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="e.g., 9876543210"
                      value={formData.mobile}
                      onChange={(e) => handleMobileChange(e.target.value)}
                      onFocus={() => setFocusedField("mobile")}
                      onBlur={() => handleBlur("mobile")}
                      className={getInputStyles("mobile")}
                      maxLength={10}
                      autoComplete="tel"
                      aria-describedby={errors.mobile ? "mobile-error" : undefined}
                      aria-invalid={touched.mobile && !!errors.mobile}
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      {renderFieldStatus("mobile")}
                    </div>
                  </div>
                  {touched.mobile && errors.mobile && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      id="mobile-error" 
                      className="text-sm text-destructive mt-2 flex items-center gap-1"
                    >
                      <X className="w-3 h-3" />
                      {errors.mobile}
                    </motion.p>
                  )}
                </div>

                {/* Service Field */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Required *
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => {
                      handleServiceChange(value);
                      setTouched({ ...touched, service: true });
                    }}
                  >
                    <SelectTrigger 
                      className={getInputStyles("service")}
                      onBlur={() => handleBlur("service")}
                      onFocus={() => setFocusedField("service")}
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover rounded-xl border-2">
                      {services.map((service) => (
                        <SelectItem 
                          key={service} 
                          value={service}
                          className="rounded-lg focus:bg-accent/10 cursor-pointer"
                        >
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {touched.service && errors.service && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-destructive mt-2 flex items-center gap-1"
                    >
                      <X className="w-3 h-3" />
                      {errors.service}
                    </motion.p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <Textarea
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    maxLength={1000}
                    className="bg-background border-2 rounded-xl resize-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                  />
                  <div className="flex justify-end mt-1">
                    <span className="text-xs text-muted-foreground">
                      {formData.message.length}/1000
                    </span>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="premium"
                  size="xl" 
                  className="w-full mt-4"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                >
                  {!isSubmitting && (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Enquiry via Email
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground mt-4">
                  By submitting, you agree to our{" "}
                  <a href="/privacy-policy" className="text-accent hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;