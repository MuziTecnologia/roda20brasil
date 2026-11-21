import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icons";
import { Stripes } from "./Stripes";

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  crumbs: { name: string; href?: string }[];
  image: { src: string; alt: string };
  whatsappHref: string;
  trackLocal: string;
};

/** Topo das páginas internas, no mesmo visual do hero da home. */
export function PageHero({ eyebrow, title, lead, crumbs, image, whatsappHref, trackLocal }: Props) {
  return (
    <section className="page-hero">
      <div className="page-hero-text">
        <nav className="breadcrumb intro" aria-label="Você está em">
          <ol>
            {crumbs.map((c) => (
              <li key={c.name}>{c.href ? <Link href={c.href}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}</li>
            ))}
          </ol>
        </nav>
        <p className="eyebrow intro d1" style={{ marginTop: 28 }}>
          <Stripes />
          {eyebrow}
        </p>
        <h1 className="intro d1">{title}</h1>
        <p className="lead intro d2">{lead}</p>
        <div className="hero-actions intro d3">
          <a className="btn btn--yellow" href={whatsappHref} target="_blank" rel="noopener" data-track="whatsapp" data-track-local={trackLocal} data-lead>
            <Icon name="wa" />
            Pedir orçamento
          </a>
          <a className="btn btn--ghost" href="#localizacao">
            Como chegar
          </a>
        </div>
      </div>
      <div className="page-hero-art">
        <div className="slash s1" aria-hidden="true" />
        <div className="slash s2" aria-hidden="true" />
        <div className="slash s3" aria-hidden="true" />
        <div className="photo">
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 960px) 100vw, 45vw" priority />
        </div>
      </div>
    </section>
  );
}
