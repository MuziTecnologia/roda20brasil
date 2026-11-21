import type { Metadata } from "next";
import { brandImages, site } from "./site";

type PageMeta = {
  /** Título sem o nome da marca (o template do layout adiciona " | Roda20 Brasil"). */
  title: string;
  description: string;
  /** Caminho canônico, ex.: "/" ou "/servicos/pintura-de-rodas". */
  path: string;
  /** Imagem social específica; por padrão usa a arte 1200x630 da marca. */
  image?: { url: string; width: number; height: number; alt: string };
  /** Use true na home: o título já vem completo. */
  absoluteTitle?: boolean;
};

const defaultImage = {
  url: brandImages.og,
  width: 1200,
  height: 630,
  alt: "Roda20 Brasil — recuperação de rodas em Caratinga/MG",
};

/** Metadados completos de uma página: title, description, canonical, Open Graph e Twitter. */
export function pageMetadata({ title, description, path, image = defaultImage, absoluteTitle }: PageMeta): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}
