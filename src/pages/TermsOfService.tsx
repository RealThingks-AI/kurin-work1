import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Scale, FileCheck, AlertCircle, Handshake, Mail } from "lucide-react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Comfort Technical Services</title>
        <meta name="description" content="Terms of Service for Comfort Technical Services. Read our terms and conditions for using our AC servicing, repair, and installation services." />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen bg-background"
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-10 h-10" />
              <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
            </div>
            <p className="text-primary-foreground/80">Last updated: January 2, 2025</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-semibold text-foreground m-0">Agreement to Terms</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Comfort 
                Technical Services ("Company", "we", "us", or "our") governing your access to and use of our website 
                and AC servicing, repair, and installation services. By accessing our website or engaging our services, 
                you agree to be bound by these Terms.
              </p>
            </section>

            {/* Services */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Handshake className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-semibold text-foreground m-0">Our Services</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Comfort Technical Services provides professional AC solutions including:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>AC servicing and maintenance</li>
                <li>AC repair and troubleshooting</li>
                <li>AC installation (split & window)</li>
                <li>Gas refilling and leak detection</li>
                <li>Deep cleaning services</li>
                <li>Annual Maintenance Contracts (AMC)</li>
                <li>Compressor and spare parts replacement</li>
                <li>Emergency repair services</li>
              </ul>
            </section>

            {/* Service Agreement */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Service Process</h2>
              <div className="bg-secondary/30 rounded-lg p-6">
                <h3 className="text-lg font-medium text-foreground mb-3">How It Works</h3>
                <ol className="text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Contact us via phone, WhatsApp, or the website contact form</li>
                  <li>Our team will confirm your appointment time</li>
                  <li>Technician visits your location and diagnoses the issue</li>
                  <li>Transparent pricing shared before work begins</li>
                  <li>Service completed with quality assurance</li>
                  <li>Payment collected after service completion</li>
                </ol>
              </div>
            </section>

            {/* Client Responsibilities */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Customer Responsibilities</h2>
              <p className="text-muted-foreground mb-4">As a customer, you agree to:</p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Provide accurate information about your AC unit and issues</li>
                <li>Ensure safe access to the AC unit for our technicians</li>
                <li>Be present or have someone available during the service appointment</li>
                <li>Make timely payments as per the agreed terms</li>
                <li>Communicate any concerns or issues promptly</li>
                <li>Treat our technicians with respect and dignity</li>
              </ul>
            </section>

            {/* Payment Terms */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Payment Terms</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Payment Methods</h4>
                  <p className="text-sm text-muted-foreground">Cash, UPI (Google Pay, PhonePe, Paytm), and bank transfers accepted.</p>
                </div>
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Payment Timing</h4>
                  <p className="text-sm text-muted-foreground">Payment is collected after service completion and your satisfaction.</p>
                </div>
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Pricing</h4>
                  <p className="text-sm text-muted-foreground">All prices are shared upfront. No hidden charges.</p>
                </div>
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">AMC Payments</h4>
                  <p className="text-sm text-muted-foreground">Annual contracts can be paid upfront or in installments.</p>
                </div>
              </div>
            </section>

            {/* Service Warranty */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Service Warranty</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We stand behind the quality of our work:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>30-day warranty on all service work</li>
                <li>Spare parts warranty as per manufacturer terms</li>
                <li>Free re-visit if issue persists within warranty period</li>
                <li>Trained and experienced technicians</li>
                <li>Use of genuine spare parts</li>
              </ul>
            </section>

            {/* Liability */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-semibold text-foreground m-0">Limitation of Liability</h2>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, Comfort Technical Services shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages arising from or related to 
                  the use of our services. Our total liability shall not exceed the amount paid for the specific 
                  service giving rise to the claim.
                </p>
              </div>
            </section>

            {/* Cancellation */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cancellation Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Appointments can be rescheduled or cancelled:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Free cancellation up to 2 hours before the scheduled appointment</li>
                <li>Rescheduling is always free of charge</li>
                <li>For AMC contracts, please refer to your agreement terms</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on our website, including text, graphics, logos, images, and software, is the property 
                of Comfort Technical Services or its licensors and is protected by intellectual property laws. You may 
                not reproduce, distribute, or create derivative works without our prior written consent.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any disputes arising from these Terms or our services shall first be attempted to be resolved through 
                good-faith negotiation. If unresolved, disputes shall be subject to the jurisdiction of courts in 
                Pune, Maharashtra, India.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. The courts 
                of Pune, Maharashtra shall have exclusive jurisdiction over any legal proceedings arising from 
                these Terms.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective upon posting 
                on our website. Your continued use of our services after changes constitutes acceptance of the 
                modified Terms.
              </p>
            </section>

            {/* Contact */}
            <section className="border-t border-border pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-semibold text-foreground m-0">Contact Information</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-secondary/30 rounded-lg p-6">
                <p className="text-foreground font-medium">Comfort Technical Services</p>
                <p className="text-muted-foreground">NIKHIL NIWAS, SURVEY NO.179, SHOP NO-02</p>
                <p className="text-muted-foreground">Pune, PCMC, Maharashtra 411035</p>
                <p className="text-muted-foreground mt-2">Email: comforttechnicalservice8@gmail.com</p>
                <p className="text-muted-foreground">Phone: +91 77450 46520</p>
              </div>
            </section>

          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TermsOfService;
