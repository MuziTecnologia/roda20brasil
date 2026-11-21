import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Services } from "@/components/Services";
import { Results } from "@/components/Results";
import { Finishes } from "@/components/Finishes";
import { Process } from "@/components/Process";
import { Cta } from "@/components/Cta";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { RevealObserver } from "@/components/RevealObserver";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { businessSchema, graph, websiteSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Recuperação de Rodas em Caratinga | Roda20 Brasil",
  absoluteTitle: true,
  description:
    "Especialistas em recuperação, reforma, desempeno, pintura e diamantação de rodas em Caratinga/MG. Conheça a Roda20 Brasil e solicite seu orçamento pelo WhatsApp.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={graph(businessSchema(), websiteSchema())} />
      <Nav />
      <main id="conteudo">
        <Hero />
        <Ticker />
        <Services />
        <Results />
        <Finishes />
        <Process />
        <Cta />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
      <RevealObserver />
    </>
  );
}
