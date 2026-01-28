/**
 * Generates FAQ Schema markup (JSON-LD) for SEO
 * @param faqs Array of FAQ objects with question and answer properties
 * @returns JSON-LD schema string for FAQPage
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return JSON.stringify(schema);
}
