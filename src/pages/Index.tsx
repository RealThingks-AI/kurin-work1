import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StructuredData from "@/components/StructuredData";
import ErrorBoundary from "@/components/ErrorBoundary";
import { SectionSkeleton } from "@/components/ui/section-skeleton";

// Lazy load below-fold components
const About = lazy(() => import("@/components/About"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const Services = lazy(() => import("@/components/Services"));
const Process = lazy(() => import("@/components/Process"));
const Industries = lazy(() => import("@/components/Industries"));
const Clients = lazy(() => import("@/components/Clients"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const FloatingButtons = lazy(() => import("@/components/FloatingButtons"));

const Index = () => {
  return (
    <>
      <StructuredData />
      <Helmet>
        <title>Kurin Hygienic – Premium Manpower & Facility Management Solutions</title>
        <meta
          name="description"
          content="Kurin Hygienic provides 24x7 quality manpower and facility management services. Staff outsourcing, housekeeping, security, and MEP services in Pune."
        />
        <meta
          name="keywords"
          content="manpower solutions, facility management, housekeeping, security services, Pune, staff outsourcing"
        />
        <link rel="canonical" href="https://kurinhygienic.com" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kurinhygienic.com" />
        <meta property="og:title" content="Kurin Hygienic – Premium Manpower & Facility Management Solutions" />
        <meta property="og:description" content="Kurin Hygienic provides 24x7 quality manpower and facility management services. Staff outsourcing, housekeeping, security, and MEP services in Pune." />
        <meta property="og:image" content="https://kurinhygienic.com/favicon.png" />
        <meta property="og:site_name" content="Kurin Hygienic" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://kurinhygienic.com" />
        <meta name="twitter:title" content="Kurin Hygienic – Premium Manpower & Facility Management Solutions" />
        <meta name="twitter:description" content="Kurin Hygienic provides 24x7 quality manpower and facility management services. Staff outsourcing, housekeeping, security, and MEP services in Pune." />
        <meta name="twitter:image" content="https://kurinhygienic.com/favicon.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kurin Hygienic" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune" />
      </Helmet>

      <main className="relative">
        <Navigation />
        <Hero />
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton type="content" />}>
            <About />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton type="grid" />}>
            <WhyChooseUs />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton type="grid" />}>
            <Services />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton type="content" />}>
            <Process />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton type="grid" />}>
            <Industries />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton type="carousel" />}>
            <Clients />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton type="carousel" />}>
            <Testimonials />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton type="grid" />}>
            <FAQ />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton type="form" />}>
            <Contact />
          </Suspense>
        </ErrorBoundary>
        
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        
        <Suspense fallback={null}>
          <FloatingButtons />
        </Suspense>
      </main>
    </>
  );
};

export default Index;
