import Image from "next/image";
import { Icon } from "./Icons";
import { Stripes } from "./Stripes";
import { mapsDirectionsUrl, mapsEmbedUrl, site, whatsappUrl } from "@/lib/site";

export function Location() {
  return (
    <section className="location" id="localizacao">
      <figure className="loc-photo">
        <Image
          src="/assets/fachada-loja.webp"
          alt="Fachada da loja Roda20 Brasil — Especialista em Recuperação de Rodas"
          fill
          sizes="(max-width: 960px) 100vw, 37vw"
        />
        <figcaption>
          <Stripes />
          Nossa loja
        </figcaption>
      </figure>
      <div className="loc-map">
        <iframe
          title={`Mapa: ${site.name} — ${site.address.street}`}
          src={mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="loc-card reveal">
          <p className="eyebrow">Visite a loja</p>
          <h2 className="h-sec">
            <span>Venha conhecer</span>
            <strong>Onde estamos</strong>
          </h2>
          <p className="loc-addr">
            <Icon name="pin" />
            <span>
              <b>{site.address.street}</b>
              {site.address.city}
            </span>
          </p>
          <div className="loc-actions">
            <a className="btn btn--yellow" href={mapsDirectionsUrl} target="_blank" rel="noopener">
              <Icon name="pin" />
              Como chegar
            </a>
            <a className="btn btn--ghost" href={whatsappUrl} target="_blank" rel="noopener">
              <Icon name="wa" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
