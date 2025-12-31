import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, FileText, Mail } from "lucide-react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Kurin Hygienic Services</title>
        <meta name="description" content="Privacy Policy for Kurin Hygienic Services. Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen bg-background"
      >
        {/* Header */}
        <div className="bg-slate-800 text-white py-16">
          <div className="container mx-auto px-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-10 h-10" />
              <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-primary-foreground/80">Last updated: December 27, 2024</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground m-0">Introduction</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Kurin Hygienic Services Pvt. Ltd. ("we", "our", or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website or use our services. Please read this policy carefully to understand our practices 
                regarding your personal data.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground m-0">Information We Collect</h2>
              </div>
              <div className="bg-secondary/30 rounded-lg p-6">
                <h3 className="text-lg font-medium text-foreground mb-3">Personal Information</h3>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Business/company name and address</li>
                  <li>Service inquiries and preferences</li>
                  <li>Communication history with our team</li>
                </ul>
              </div>
              <div className="bg-secondary/30 rounded-lg p-6 mt-4">
                <h3 className="text-lg font-medium text-foreground mb-3">Automatically Collected Information</h3>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the collected information for the following purposes:</p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>To respond to your inquiries and provide customer support</li>
                <li>To deliver and manage our facility management services</li>
                <li>To send you service updates and promotional communications (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
                <li>To protect against fraudulent or unauthorized activity</li>
              </ul>
            </section>

            {/* GDPR Compliance */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground m-0">GDPR Compliance & Your Rights</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Under the General Data Protection Regulation (GDPR) and applicable data protection laws, you have the following rights:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Right to Access</h4>
                  <p className="text-sm text-muted-foreground">Request a copy of your personal data we hold.</p>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Right to Rectification</h4>
                  <p className="text-sm text-muted-foreground">Request correction of inaccurate personal data.</p>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Right to Erasure</h4>
                  <p className="text-sm text-muted-foreground">Request deletion of your personal data ("right to be forgotten").</p>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Right to Restrict Processing</h4>
                  <p className="text-sm text-muted-foreground">Request limitation of processing your data.</p>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Right to Data Portability</h4>
                  <p className="text-sm text-muted-foreground">Receive your data in a structured, machine-readable format.</p>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Right to Object</h4>
                  <p className="text-sm text-muted-foreground">Object to processing based on legitimate interests or direct marketing.</p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was 
                collected, including to satisfy legal, accounting, or reporting requirements. The retention period 
                may vary depending on the context of the processing and our legal obligations.
              </p>
            </section>

            {/* Third-Party Sharing */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your data with:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside mt-4">
                <li>Service providers who assist in our operations (under confidentiality agreements)</li>
                <li>Legal authorities when required by law or to protect our rights</li>
                <li>Business partners with your explicit consent</li>
              </ul>
            </section>

            {/* Cookies */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies & Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. 
                You can control cookie preferences through your browser settings. Disabling cookies may affect 
                some website functionality.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground m-0">Contact Us</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-secondary/30 rounded-lg p-6">
                <p className="text-foreground font-medium">Kurin Hygienic Services Pvt. Ltd.</p>
                <p className="text-muted-foreground">Office No. 06, Swami Plaza, Near Bird Valley Hotel</p>
                <p className="text-muted-foreground">Shahunagar, Chinchwad, Pune – 411 019</p>
                <p className="text-muted-foreground mt-2">Email: kurin.pune@gmail.com</p>
                <p className="text-muted-foreground">Phone: +91 7038 613 623</p>
              </div>
            </section>

            {/* Updates */}
            <section className="border-t border-border pt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Policy Updates</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with 
                an updated revision date. We encourage you to review this policy periodically to stay informed 
                about how we protect your information.
              </p>
            </section>

          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PrivacyPolicy;
