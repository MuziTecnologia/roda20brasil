import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { ServiceCards } from "@/components/ServiceCards";
import { Process } from "@/components/Process";
import { Cta } from "@/components/Cta";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { RevealObserver } from "@/components/RevealObserver";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, businessSchema, graph } from "@/lib/schema";
import { absoluteUrl, servicePages, serviceUrl, waLink } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Serviços para Rodas de Liga Leve em Caratinga",
  description:
    "Desempeno, solda, pintura, diamantação e reforma de rodas de liga leve em Caratinga/MG. Conheça cada serviço da Roda20 Brasil e peça seu orçamento pelo WhatsApp.",
  path: "/servicos",
});

export default function ServicosPage() {
  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Serviços", path: "/servicos" },
  ];
  const list = {
    "@type": "ItemList",
    name: "Serviços da Roda20 Brasil",
    itemListElement: servicePages.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: absoluteUrl(serviceUrl(s.slug)) })),
  };
  const msg = "Olá! Vim pelo site e quero um orçamento para recuperar minhas rodas.";

  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs), list, businessSchema())} />
      <Nav />
      <main id="conteudo">
        <PageHero
          eyebrow="Roda20 Brasil · Caratinga/MG"
          title="Serviços para rodas em Caratinga"
          lead="Da roda empenada à roda personalizada: na Roda20 Brasil a estrutura, o acabamento e a cor das rodas de liga leve são recuperados no mesmo lugar. Escolha o serviço e veja como funciona."
          crumbs={[{ name: "Início", href: "/" }, { name: "Serviços" }]}
          image={{ src: "/assets/rodas-diamantadas-par.webp", alt: "Jogo de rodas diamantadas finalizado pela Roda20 Brasil" }}
          whatsappHref={waLink(msg)}
          trackLocal="servicos"
        />
        <section className="related" aria-labelledby="lista-servicos">
          <h2 className="h-sec reveal" id="lista-servicos">
            <span>Escolha o serviço</span>
            <strong>O que fazemos</strong>
          </h2>
          <ServiceCards items={servicePages} />
        </section>
        <Process />
        <Cta message={msg} trackLocal="servicos" />
        <Location message={msg} trackLocal="servicos" />
      </main>
      <Footer />
      <WhatsAppFloat message={msg} />
      <RevealObserver />
    </>
  );
}
