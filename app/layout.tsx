import type { Metadata, Viewport } from "next";
import { Anton, Barlow, Barlow_Condensed } from "next/font/google";
import { IconSprite } from "@/components/Icons";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
const barlow = Barlow({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--font-barlow", display: "swap" });
const barlowCondensed = Barlow_Condensed({
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roda20 Brasil | Especialista em Rodas",
  description:
    "Roda20 Brasil — especialista em recuperação de rodas: solda, desempeno, pintura, diamantação, reforma e personalização. Orçamento pelo WhatsApp.",
  icons: { icon: "/assets/logo.webp" },
  openGraph: {
    title: "Roda20 Brasil | Especialista em Rodas",
    description: "Solda, desempeno, pintura, diamantação, reforma e personalização de rodas.",
    images: ["/assets/fachada-loja.webp"],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1a8f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <IconSprite />
        {children}
      </body>
    </html>
  );
}
