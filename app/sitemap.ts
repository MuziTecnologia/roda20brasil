import type { MetadataRoute } from "next";
import { absoluteUrl, servicePages, serviceUrl } from "@/lib/site";

// Atualize esta data quando o conteúdo das páginas mudar.
const lastModified = new Date("2026-11-21");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/servicos"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...servicePages.map((s) => ({
      url: absoluteUrl(serviceUrl(s.slug)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
