import type { Metadata, Viewport } from "next";
import { Anton, Barlow, Barlow_Condensed } from "next/font/google";
import { IconSprite } from "@/components/Icons";
import { Analytics } from "@/components/Analytics";
import { brandImages, site } from "@/lib/site";
import "./globals.css";

// Fontes auto-hospedadas pelo next/font (sem requisição ao Google no carregamento).
// Todas pré-carregadas: sem o preload de Anton/Barlow o FCP piorou nas medições do Lighthouse.
const barlowCondensed = Barlow_Condensed({
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
const barlow = Barlow({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--font-barlow", display: "swap" });

const description =
  "Especialistas em recuperação, reforma, desempeno, pintura e diamantação de rodas em Caratinga/MG. Conheça a Roda20 Brasil e solicite seu orçamento pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Recuperação de Rodas em Caratinga | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: site.name,
  icons: { icon: brandImages.logoSquare, apple: brandImages.logoSquare },
  // canonical, Open Graph e Twitter são definidos por página (lib/seo.ts → pageMetadata)
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  // Verificação do Google Search Console pela meta tag (opcional — a verificação por DNS é preferível).
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } } : {}),
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0a1a8f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${barlow.variable} ${barlowCondensed.variable}`} suppressHydrationWarning>
      <head>
        {/* Marca que o JS está ativo antes da primeira pintura: sem JS, todo o conteúdo fica visível */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <IconSprite />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
