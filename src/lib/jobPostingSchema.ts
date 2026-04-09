interface JobPostingSchemaOptions {
  title: string;
  description: string;
  datePosted: string;
  employmentType: string;
  canonicalUrl: string;
  qualifications?: string[];
  responsibilities?: string[];
  jobBenefits?: string;
}

export const generateJobPostingSchema = (options: JobPostingSchemaOptions): string => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": options.title,
    "description": options.description,
    "datePosted": options.datePosted,
    "validThrough": "2026-12-31",
    "employmentType": options.employmentType,
    "url": options.canonicalUrl,
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Allerheiligentor 2-4",
        "addressLocality": "Frankfurt am Main",
        "postalCode": "60311",
        "addressRegion": "Hessen",
        "addressCountry": "DE"
      }
    },
    "hiringOrganization": {
      "@type": "Organization",
      "name": "AVYTA Pflegegesellschaft mbH",
      "@id": "https://www.avyta.de/#organization",
      "url": "https://www.avyta.de",
      "logo": "https://www.avyta.de/images/avyta-logo.png",
      "sameAs": [
        "https://www.google.com/maps/place/AVYTA+Pflegegesellschaft+mbH"
      ]
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": {
        "@type": "QuantitativeValue",
        "unitText": "MONTH"
      }
    },
    "jobBenefits": options.jobBenefits || "Firmenwagen zur Privatnutzung, 30 Urlaubstage, Firmenfitness (Wellpass), betriebliche Altersvorsorge, Prämien, Unterkunft bei Bedarf",
    "industry": "Gesundheitswesen / Ambulante Pflege",
    ...(options.qualifications && {
      "qualifications": options.qualifications.join("; ")
    }),
    ...(options.responsibilities && {
      "responsibilities": options.responsibilities.join("; ")
    })
  });
};
