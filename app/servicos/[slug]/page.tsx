import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { ServiceCards } from "@/components/ServiceCards";
import { Cta } from "@/components/Cta";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { RevealObserver } from "@/components/RevealObserver";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, businessSchema, graph, serviceSchema } from "@/lib/schema";
import { getService, servicePages, serviceUrl, waLink, type ServicePage } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const s = getService((await params).slug);
  if (!s) return {};
  // imagem social: arte 1200x630 da marca (fotos verticais ficam cortadas nas prévias de link)
  return pageMetadata({ title: s.title, description: s.description, path: serviceUrl(s.slug) });
}

export default async function ServicePageRoute({ params }: Params) {
  const s = getService((await params).slug);
  if (!s) notFound();

  const wa = waLink(s.whatsapp);
  const track = `servico_${s.slug.replace(/-de-rodas$/, "")}`;
  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Serviços", path: "/servicos" },
    { name: s.name, path: serviceUrl(s.slug) },
  ];
  const related = s.related.map((slug) => getService(slug)).filter(Boolean) as ServicePage[];

  return (
    <>
      <JsonLd data={graph(serviceSchema(s), breadcrumbSchema(crumbs), businessSchema())} />
      <Nav />
      <main id="conteudo">
        <PageHero
          eyebrow="Roda20 Brasil · Caratinga/MG"
          title={s.h1}
          lead={s.lead}
          crumbs={[{ name: "Início", href: "/" }, { name: "Serviços", href: "/servicos" }, { name: s.name }]}
          image={s.images[0]}
          whatsappHref={wa}
          trackLocal={track}
        />

        <section className="sp-detail" aria-labelledby="quando">
          <div>
            <h2 className="h-sec reveal" id="quando">
              <span>{s.name}</span>
              <strong>{s.whenTitle}</strong>
            </h2>
            <ul className="check-list">
              {s.when.map((w, i) => (
                <li key={w} className={`reveal${i % 4 ? ` d${i % 4}` : ""}`}>
                  {w}
                </li>
              ))}
            </ul>
            <p className="sp-tip reveal" style={{ marginTop: 18 }}>
              <b>Dica para o orçamento:</b> mande pelo WhatsApp uma foto da roda inteira e outra do dano de perto, e conte o que aconteceu.
            </p>
          </div>
          <div className="sp-aside">
            {s.note && (
              <div className="sp-note reveal">
                <b>{s.noteTitle ?? "Importante"}</b>
                {s.note}
              </div>
            )}
            <div className="sp-photos">
              {s.images.map((img) => (
                <figure key={img.src} className="reveal">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 960px) 50vw, 22vw" />
                  <figcaption>{img.alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="process" aria-labelledby="como-fazemos">
          <div className="process-head">
            <h2 className="h-sec reveal" id="como-fazemos">
              <span>Passo a passo</span>
              <strong>Como fazemos</strong>
            </h2>
            <p className="reveal d1">Cada roda é avaliada antes do serviço. O orçamento e o prazo são passados depois dessa análise.</p>
          </div>
          <div className="steps">
            {s.steps.map((st, i) => (
              <div key={st.title} className={`step reveal${i ? ` d${i}` : ""}`}>
                {i === 0 && <span className="bar" />}
                <h3>{st.title}</h3>
                <p>{st.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="faq" aria-labelledby="duvidas">
          <h2 className="h-sec reveal" id="duvidas">
            <span>Perguntas frequentes</span>
            <strong>Dúvidas sobre {s.name.toLowerCase()}</strong>
          </h2>
          <div className="faq-list">
            {s.faqs.map((f, i) => (
              <details key={f.q} className="reveal" open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="related" aria-labelledby="relacionados">
          <h2 className="h-sec reveal" id="relacionados">
            <span>Veja também</span>
            <strong>Outros serviços</strong>
          </h2>
          <ServiceCards items={related} />
          <p style={{ marginTop: 24 }}>
            <Link className="btn btn--ghost" href="/servicos" style={{ color: "var(--blue)", boxShadow: "inset 0 0 0 2px var(--blue)" }}>
              Todos os serviços
            </Link>
          </p>
        </section>

        <Cta message={s.whatsapp} trackLocal={track} />
        <Location message={s.whatsapp} trackLocal={track} />
      </main>
      <Footer />
      <WhatsAppFloat message={s.whatsapp} />
      <RevealObserver />
    </>
  );
}
