export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Yetix Cleaning",
  "image": "https://yetix.com.au/image.png",
  "@id": "https://yetix.com.au",
  "url": "https://yetix.com.au",
  "telephone": "+61451161253",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Melbourne CBD",
    "addressLocality": "Melbourne",
    "addressRegion": "VIC",
    "postalCode": "3000",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -37.8136,
    "longitude": 144.9631
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$",
  "servesArea": {
    "@type": "City",
    "name": "Melbourne"
  },
  "slogan": "Yetix Cleaning: The Best Professional Cleaning Service in Melbourne",
  "description": "Yetix Cleaning offers the best professional cleaning services in Melbourne. From reliable residential and commercial cleaning to comprehensive end-of-lease solutions, our experienced team ensures your space is sparkling clean.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "100"
  },
  "sameAs": [
    "https://www.facebook.com/YetixCleaning",
    "https://www.instagram.com/YetixCleaning",
    "https://www.linkedin.com/company/YetixCleaning"
  ]
};

export const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Residential Cleaning Service",
    "name": "Residential Cleaning Service by Yetix Cleaning Melbourne",
    "description": "Yetix Cleaning offers the best residential cleaning service in Melbourne, covering kitchens, bathrooms, living areas, and bedrooms for a spotless home.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Yetix Cleaning",
      "url": "https://yetix.com.au"
    },
    "areaServed": {
      "@type": "City",
      "name": "Melbourne"
    },
    "hasOffer": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "149",
        "priceCurrency": "AUD"
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Commercial Cleaning Service",
    "name": "Commercial Office Cleaning by Yetix Cleaning Melbourne",
    "description": "Professional commercial cleaning services for offices and businesses in Melbourne, ensuring a clean and productive work environment.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Yetix Cleaning",
      "url": "https://yetix.com.au"
    },
    "hasOffer": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "99",
        "priceCurrency": "AUD"
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "End of Lease Cleaning",
    "name": "End of Lease Cleaning by Yetix Cleaning Melbourne",
    "description": "Bond back guarantee with our professional end of lease cleaning service in Melbourne. We ensure your property meets real estate inspection standards.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Yetix Cleaning",
      "url": "https://yetix.com.au"
    },
    "hasOffer": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "299",
        "priceCurrency": "AUD"
      }
    }
  }
];
