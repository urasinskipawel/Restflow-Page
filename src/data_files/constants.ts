import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "RestFlow",
  tagline: "Zrewolucjonizuj zarządzanie swoją restauracją z Restflow",
  description: "Restflow to idealne narzędzie dla właścicieli restauracji, szefów kuchni, menedżerów i zespołów zarządzających, którzy szukają nowoczesnego i efektywnego sposobu na zarządzanie codziennymi obowiązkami.",
  description_short: "Restflow to idealne narzędzie do nowoczesnego i efektywnego sposobu na zarządzanie codziennymi obowiązkami.",
  url: "",
  author: "Paweł Urasiński",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description: "Kontroluj swoje zaopatrzenie, oszczędzaj czas, pieniądze i nerwy oraz nigdy nie przegap najniższych cen u swoich dostawców - to wszystko oraz więcej zaoferuje Ci RestFlow!",
  image: ogImageSrc,
};
