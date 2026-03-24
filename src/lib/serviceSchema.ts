interface ServiceSchemaOptions {
  serviceName: string;
  serviceDescription: string;
  serviceType: string;
  canonicalUrl: string;
}

export const generateServiceSchema = (options: ServiceSchemaOptions): string => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": options.serviceName,
    "description": options.serviceDescription,
    "serviceType": options.serviceType,
    "url": options.canonicalUrl,
    "provider": {
      "@type": "LocalBusiness",
      "name": "AVYTA Pflegegesellschaft mbH",
      "@id": "https://www.avyta.de/#organization",
      "url": "https://www.avyta.de",
      "telephone": "+496915391405",
      "email": "info@avyta.de",
      "foundingDate": "2013",
      "priceRange": "€€",
      "image": "https://www.avyta.de/images/avyta-logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Allerheiligentor 2-4",
        "addressLocality": "Frankfurt am Main",
        "postalCode": "60311",
        "addressRegion": "Hessen",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 50.1109,
        "longitude": 8.6821
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "12:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "36",
        "bestRating": "5"
      },
      "areaServed": [
        { "@type": "City", "name": "Frankfurt am Main" },
        { "@type": "City", "name": "Bad Vilbel" }
      ]
    }
  });
};
