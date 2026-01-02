import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Comfort Technical Services",
    "alternateName": "CTS AC Services",
    "url": "https://comfortservice.in",
    "logo": "https://comfortservice.in/logo.png",
    "description": "Professional AC servicing, repair & installation provider in Pune & PCMC. 7+ years experience with 1000+ AC units serviced. Same-day service available.",
    "foundingDate": "2018",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7745046520",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi", "Marathi"],
      "areaServed": "IN"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Comfort Technical Services",
    "image": "https://comfortservice.in/logo.png",
    "@id": "https://comfortservice.in",
    "url": "https://comfortservice.in",
    "telephone": "+91-7745046520",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "NIKHIL NIWAS, SURVEY NO.179, SHOP NO-02",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411035",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.6298,
      "longitude": 73.7997
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "17:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "57"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does AC servicing cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AC servicing starts from just ₹399. This includes filter cleaning, coil inspection, refrigerant level check, and performance optimization. Deep cleaning services start from ₹599."
        }
      },
      {
        "@type": "Question",
        "name": "Do you service all AC brands?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We service all major AC brands including LG, Samsung, Daikin, Voltas, Blue Star, Hitachi, Carrier, Panasonic, Whirlpool, and many more."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We cover all of Pune and PCMC including Aundh, Wakad, Hinjewadi, Pimple Saudagar, Pimpri, Chinchwad, Kharadi, Viman Nagar, Baner, Kothrud, and 15+ other localities."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you come?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer same-day service for most requests made before 2 PM. Our average response time is 2-4 hours depending on your location."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide AMC plans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our AMC plans start from ₹2,499/year for homes (4 visits), ₹4,999/year for offices (6 visits with gas top-up), and custom plans for commercial establishments."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AC Repair and Maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Comfort Technical Services"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Pune, PCMC, Maharashtra, India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AC Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AC Servicing",
            "description": "Complete AC servicing including filter cleaning, coil inspection, and performance check"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AC Repair",
            "description": "Expert AC repair services for all brands and models"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AC Installation",
            "description": "Professional AC installation for split and window units"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AC Gas Refill",
            "description": "Refrigerant gas refilling and leak detection services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AC Deep Cleaning",
            "description": "Thorough deep cleaning with coil wash and anti-bacterial treatment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Annual Maintenance Contract",
            "description": "AMC plans starting from ₹2,499/year with multiple service visits"
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
