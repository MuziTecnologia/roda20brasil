import Image from "next/image";
import { Logo } from "./Logo";
import { Icon } from "./Icons";
import { Stripes } from "./Stripes";
import { site, whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <Image src="/assets/fachada.webp" alt="" fill sizes="100vw" priority quality={50} />
      </div>
      <div className="hero-slash s3" aria-hidden="true" />
      <div className="hero-slash s2" aria-hidden="true" />
      <div className="hero-slash s1" aria-hidden="true" />
      <div className="hero-photo">
        <Image
          src="/assets/fachada.webp"
          alt="Fachada da loja Roda20 Brasil com um Porsche de rodas pretas na frente"
          fill
          sizes="(max-width: 960px) 100vw, 46vw"
          priority
        />
      </div>

      <div className="hero-content">
        <p className="eyebrow reveal">
          <Stripes />
          Especialista em rodas
        </p>
        <h1 className="sr-only">Roda20 Brasil — Especialista em recuperação de rodas</h1>
        <div className="reveal d1" aria-hidden="true">
          <Logo priority />
        </div>
        <p className="hero-tag reveal d2">Sua roda de volta ao padrão de fábrica — ou melhor.</p>
        <div className="hero-actions reveal d3">
          <a className="btn btn--yellow" href={whatsappUrl} target="_blank" rel="noopener">
            <Icon name="wa" />
            Fazer orçamento
          </a>
          <a className="btn btn--ghost" href="#resultados">
            Ver resultados
          </a>
        </div>
      </div>

      <div className="hero-foot">
        <ul aria-label="Principais serviços">
          <li>Solda</li>
          <li>Desempeno</li>
          <li>Pintura</li>
          <li>Personalização</li>
        </ul>
        <a className="hero-chip" href="#localizacao">
          <Icon name="pin" />
          {site.address.street}
        </a>
      </div>
    </section>
  );
}
