// Dados estruturados (schema.org / JSON-LD). Só usa informações confirmadas em lib/site.ts.
import { absoluteUrl, brandImages, instagramUrl, mapsPlaceUrl, servicePages, serviceUrl, site, type ServicePage } from "./site";

export const ids = {
  business: `${site.url}/#empresa`,
  website: `${site.url}/#website`,
  logo: `${site.url}/#logo`,
};

const postalAddress = () => ({
  "@type": "PostalAddress",
  streetAddress: `${site.address.street} - ${site.address.neighborhood}`,
  addressLocality: site.address.locality,
  addressRegion: site.address.region,
  addressCountry: site.address.country,
  ...(site.postalCode ? { postalCode: site.postalCode } : {}),
});

const caratinga = {
  "@type": "City",
  name: "Caratinga",
  containedInPlace: { "@type": "State", name: site.address.regionName },
};

export function businessSchema() {
  return {
    "@type": "AutoRepair",
    "@id": ids.business,
    name: site.name,
    description:
      "Recuperação, reforma, desempeno, solda, pintura eletrostática, diamantação e personalização de rodas automotivas de liga leve em Caratinga, Minas Gerais.",
    url: absoluteUrl("/"),
    telephone: site.phoneIntl,
    logo: { "@type": "ImageObject", "@id": ids.logo, url: absoluteUrl(brandImages.logoSquare), width: 1254, height: 1254 },
    image: [absoluteUrl(brandImages.storefront), absoluteUrl(brandImages.og)],
    address: postalAddress(),
    hasMap: mapsPlaceUrl,
    areaServed: caratinga,
    sameAs: [instagramUrl],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneIntl,
      contactType: "customer service",
      availableLanguage: "pt-BR",
    },
    knowsAbout: ["Recuperação de rodas de liga leve", "Desempeno de rodas", "Solda de rodas", "Pintura eletrostática de rodas", "Diamantação de rodas"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços para rodas",
      itemListElement: servicePages.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: absoluteUrl(serviceUrl(s.slug)) },
      })),
    },
    ...(site.geo ? { geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng } } : {}),
    openingHoursSpecification: site.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
      opens: h.opens,
      closes: h.closes,
    })),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    url: absoluteUrl("/"),
    name: site.name,
    inLanguage: "pt-BR",
    publisher: { "@id": ids.business },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function serviceSchema(s: ServicePage) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(serviceUrl(s.slug))}#servico`,
    name: s.h1,
    serviceType: s.name,
    description: s.description,
    url: absoluteUrl(serviceUrl(s.slug)),
    image: s.images.map((img) => absoluteUrl(img.src)),
    provider: { "@id": ids.business },
    areaServed: caratinga,
  };
}

export const graph = (...nodes: object[]) => ({ "@context": "https://schema.org", "@graph": nodes });
