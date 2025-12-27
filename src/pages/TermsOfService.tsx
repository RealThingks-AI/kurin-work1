import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Scale, FileCheck, AlertCircle, Handshake, Mail } from "lucide-react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Kurin Hygienic Services</title>
        <meta name="description" content="Terms of Service for Kurin Hygienic Services. Read our terms and conditions for using our facility management services." />
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
            <p className="text-primary-foreground/80">Last updated: December 27, 2024</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground m-0">Agreement to Terms</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Kurin Hygienic 
                Services Pvt. Ltd. ("Company", "we", "us", or "our") governing your access to and use of our website 
                and facility management services. By accessing our website or engaging our services, you agree to be 
                bound by these Terms.
              </p>
            </section>

            {/* Services */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Handshake className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground m-0">Our Services</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Kurin Hygienic Services provides comprehensive facility management solutions including:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Housekeeping and cleaning services</li>
                <li>Security guard services</li>
                <li>Pest control management</li>
                <li>Pantry and catering services</li>
                <li>Facade and glass cleaning</li>
                <li>Garden and landscaping maintenance</li>
                <li>Manpower supply solutions</li>
                <li>Integrated facility management</li>
              </ul>
            </section>

            {/* Service Agreement */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Service Agreement</h2>
              <div className="bg-secondary/30 rounded-lg p-6">
                <h3 className="text-lg font-medium text-foreground mb-3">Engagement Process</h3>
                <ol className="text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Submit an inquiry through our website, phone, or WhatsApp</li>
                  <li>Our team will schedule a consultation to assess your requirements</li>
                  <li>Receive a customized service proposal and quotation</li>
                  <li>Upon acceptance, a formal service agreement will be executed</li>
                  <li>Service commencement as per agreed schedule</li>
                </ol>
              </div>
            </section>

            {/* Client Responsibilities */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Client Responsibilities</h2>
              <p className="text-muted-foreground mb-4">As a client, you agree to:</p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Provide accurate information about your service requirements</li>
                <li>Ensure safe access to premises for our staff</li>
                <li>Notify us of any hazards or special conditions at the service location</li>
                <li>Make timely payments as per the agreed terms</li>
                <li>Communicate any concerns or issues promptly</li>
                <li>Treat our staff with respect and dignity</li>
              </ul>
            </section>

            {/* Payment Terms */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Payment Terms</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Payment Methods</h4>
                  <p className="text-sm text-muted-foreground">Bank transfers, checks, and online payments accepted.</p>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Payment Schedule</h4>
                  <p className="text-sm text-muted-foreground">As specified in your service agreement (monthly/quarterly).</p>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Late Payments</h4>
                  <p className="text-sm text-muted-foreground">Interest may apply on overdue payments as per agreement.</p>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Invoicing</h4>
                  <p className="text-sm text-muted-foreground">GST-compliant invoices provided for all services.</p>
                </div>
              </div>
            </section>

            {/* Service Standards */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Service Standards & Quality</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are committed to delivering high-quality services and maintaining professional standards:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>All staff undergo rigorous training and background verification</li>
                <li>We use industry-standard equipment and eco-friendly materials where possible</li>
                <li>Regular quality audits and supervision</li>
                <li>24/7 customer support for urgent matters</li>
                <li>Responsive issue resolution within committed timeframes</li>
              </ul>
            </section>

            {/* Liability */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground m-0">Limitation of Liability</h2>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, Kurin Hygienic Services shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages arising from or related to 
                  the use of our services. Our total liability shall not exceed the amount paid for the specific 
                  service giving rise to the claim. We maintain appropriate insurance coverage for our operations.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Either party may terminate the service agreement:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>With written notice as specified in the service agreement (typically 30 days)</li>
                <li>Immediately for material breach by the other party</li>
                <li>Upon mutual agreement in writing</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Upon termination, all outstanding payments become due, and we will complete any services in progress 
                as per the agreement terms.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on our website, including text, graphics, logos, images, and software, is the property 
                of Kurin Hygienic Services or its licensors and is protected by intellectual property laws. You may 
                not reproduce, distribute, or create derivative works without our prior written consent.
              </p>
            </section>

            {/* Confidentiality */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                We maintain strict confidentiality regarding all client information and business operations. Our 
                staff are bound by confidentiality agreements. Similarly, any proprietary information shared by us 
                must be kept confidential by the client.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any disputes arising from these Terms or our services shall first be attempted to be resolved through 
                good-faith negotiation. If unresolved, disputes shall be subject to arbitration in Pune, Maharashtra, 
                India, in accordance with the Arbitration and Conciliation Act, 1996. The language of arbitration 
                shall be English.
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
                modified Terms. We encourage you to review these Terms periodically.
              </p>
            </section>

            {/* Contact */}
            <section className="border-t border-border pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground m-0">Contact Information</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-secondary/30 rounded-lg p-6">
                <p className="text-foreground font-medium">Kurin Hygienic Services Pvt. Ltd.</p>
                <p className="text-muted-foreground">Office No. 06, Swami Plaza, Near Bird Valley Hotel</p>
                <p className="text-muted-foreground">Shahunagar, Chinchwad, Pune – 411 019</p>
                <p className="text-muted-foreground mt-2">Email: kurin.pune@gmail.com</p>
                <p className="text-muted-foreground">Phone: +91 7038 613 623</p>
              </div>
            </section>

          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TermsOfService;
