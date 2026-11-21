import Image from "next/image";
import { Logo } from "./Logo";
import { Icon } from "./Icons";
import { Stripes } from "./Stripes";
import { site, whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="titulo-principal">
      {/* fundo desfocado: imagem pequena e leve basta */}
      <div className="hero-bg" aria-hidden="true">
        <Image src="/assets/fachada.webp" alt="" fill sizes="25vw" quality={40} />
      </div>
      <div className="hero-slash s3" aria-hidden="true" />
      <div className="hero-slash s2" aria-hidden="true" />
      <div className="hero-slash s1" aria-hidden="true" />
      <div className="hero-photo">
        <Image
          src="/assets/fachada.webp"
          alt="Fachada da Roda20 Brasil em Caratinga, com um Porsche de rodas pretas estacionado na frente"
          fill
          sizes="(max-width: 960px) 100vw, 46vw"
          priority
        />
      </div>

      <div className="hero-content">
        <p className="eyebrow intro">
          <Stripes />
          Especialista em rodas
        </p>
        <h1 id="titulo-principal" className="sr-only">
          Recuperação de rodas em Caratinga/MG — {site.name}
        </h1>
        <div className="intro d1" aria-hidden="true">
          <Logo priority sizes="(max-width: 960px) 92vw, 52vw" />
        </div>
        <p className="hero-tag intro d2">Sua roda de volta ao padrão de fábrica — ou melhor.</p>
        <div className="hero-actions intro d3">
          <a className="btn btn--yellow" href={whatsappUrl} target="_blank" rel="noopener" data-track="whatsapp" data-track-local="hero" data-lead>
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
