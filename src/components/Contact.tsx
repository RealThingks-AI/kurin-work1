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
    // Filter out invalid characters in real-time
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
    // Only allow digits
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

    // Validate all fields
    const newErrors: FormErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      mobile: validateMobile(formData.mobile),
      service: validateService(formData.service),
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, mobile: true, service: true });

    // Check if any errors
    if (Object.values(newErrors).some((error) => error)) {
      toast({
        title: "Please fix the errors",
        description: "Some fields have invalid values.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate a brief delay for UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Open mailto link
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

    // Clear form after successful submission
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
    const baseStyles = "h-12";
    if (!touched[field]) return baseStyles;
    if (errors[field]) return `${baseStyles} border-destructive focus-visible:ring-destructive`;
    return `${baseStyles} border-green-500 focus-visible:ring-green-500`;
  };

  const renderFieldStatus = (field: keyof FormErrors) => {
    if (!touched[field]) return null;
    if (errors[field]) {
      return <X className="w-4 h-4 text-destructive" />;
    }
    return <Check className="w-4 h-4 text-green-500" />;
  };

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Get In Touch
          </span>
          <h2 className="heading-lg text-primary mb-6">
            Ready to <span className="text-accent">Get Started?</span>
          </h2>
          <p className="text-body">
            Contact us today for a free consultation and discover how Kurin
            Hygienic can transform your facility management.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
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
                className="flex gap-4"
              >
                <div className="p-3 rounded-xl bg-accent/10 h-fit">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-primary mb-1">
                    Head Office
                  </h4>
                  <p className="text-muted-foreground">
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
                className="flex gap-4"
              >
                <div className="p-3 rounded-xl bg-accent/10 h-fit">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-primary mb-1">
                    Phone
                  </h4>
                  <div className="space-y-1">
                    <a
                      href="tel:7038613623"
                      className="block text-muted-foreground hover:text-accent transition-colors"
                    >
                      +91 7038 613 623
                    </a>
                    <a
                      href="tel:8007770506"
                      className="block text-muted-foreground hover:text-accent transition-colors"
                    >
                      +91 800 777 05 06
                    </a>
                    <a
                      href="tel:8007770906"
                      className="block text-muted-foreground hover:text-accent transition-colors"
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
                className="flex gap-4"
              >
                <div className="p-3 rounded-xl bg-accent/10 h-fit">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-primary mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:kurin.pune@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    kurin.pune@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10"
            >
              <h4 className="font-display font-semibold text-primary mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.name}`}
                    className="p-3 rounded-full bg-accent/10 hover:bg-accent hover:scale-110 transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                  </a>
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
              className="bg-card p-8 rounded-2xl border border-border shadow-lg"
            >
              <h3 className="heading-md text-primary mb-6">Send an Enquiry</h3>

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
                    <p id="name-error" className="text-sm text-destructive mt-1">{errors.name}</p>
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
                    <p id="email-error" className="text-sm text-destructive mt-1">{errors.email}</p>
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
                    <p id="mobile-error" className="text-sm text-destructive mt-1">{errors.mobile}</p>
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
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {touched.service && errors.service && (
                    <p className="text-sm text-destructive mt-1">{errors.service}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    maxLength={1000}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Enquiry via Email
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;