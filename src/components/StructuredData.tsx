import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kurin Hygienic Services",
    "alternateName": "Kurin Hygienic",
    "url": "https://kurinhygienic.com",
    "logo": "https://kurinhygienic.com/logo.png",
    "description": "Premium Manpower & Facility Management Solutions provider offering 24x7 quality services including staff outsourcing, housekeeping, security, and MEP services.",
    "foundingDate": "2010",
    "sameAs": [
      "https://www.facebook.com/kurinhygienic",
      "https://www.linkedin.com/company/kurinhygienic",
      "https://www.instagram.com/kurinhygienic"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi", "Marathi"],
      "areaServed": "IN"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kurin Hygienic Services",
    "image": "https://kurinhygienic.com/logo.png",
    "@id": "https://kurinhygienic.com",
    "url": "https://kurinhygienic.com",
    "telephone": "+91-9876543210",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pune",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5204,
      "longitude": 73.8567
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Kurin Hygienic provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide comprehensive facility management services including housekeeping, security services, staff outsourcing, MEP services, pest control, landscaping, and specialized cleaning solutions for various industries."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve a wide range of industries including IT Parks, Manufacturing, Healthcare, Hospitality, Retail, Government, Education, and Residential complexes across Pune and Maharashtra."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide 24/7 services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide round-the-clock 24x7 services to ensure your facilities are always well-maintained and secure. Our team is available at all times to address any urgent requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How can I request a quote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can request a quote by filling out our contact form on the website, calling us directly, or sending us an email. Our team will get back to you within 24 hours with a customized proposal."
        }
      },
      {
        "@type": "Question",
        "name": "Are your staff trained and verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our staff undergo thorough background verification and comprehensive training programs. We ensure they are skilled, professional, and adhere to the highest industry standards."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Facility Management",
    "provider": {
      "@type": "Organization",
      "name": "Kurin Hygienic Services"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Pune, Maharashtra, India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Facility Management Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Housekeeping Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Security Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Staff Outsourcing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MEP Services"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
