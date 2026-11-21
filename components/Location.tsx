import Image from "next/image";
import { Icon } from "./Icons";
import { Stripes } from "./Stripes";
import { mapsDirectionsUrl, mapsEmbedUrl, site, waLink } from "@/lib/site";

export function Location({ message, trackLocal = "localizacao" }: { message?: string; trackLocal?: string }) {
  return (
    <section className="location" id="localizacao" aria-labelledby="titulo-localizacao">
      <figure className="loc-photo">
        <Image
          src="/assets/fachada-loja.webp"
          alt="Fachada da loja Roda20 Brasil — Especialista em Recuperação de Rodas, na Rua Raimunda Lopes da Cunha, em Caratinga"
          fill
          sizes="(max-width: 960px) 100vw, 37vw"
        />
        <figcaption>
          <Stripes />
          Nossa loja em Caratinga
        </figcaption>
      </figure>
      <div className="loc-map">
        <iframe
          title={`Mapa: ${site.name} — ${site.address.street}, ${site.address.city}`}
          src={mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="loc-card reveal">
          <p className="eyebrow">Visite a loja</p>
          <h2 className="h-sec" id="titulo-localizacao">
            <span>Venha conhecer</span>
            <strong>Onde estamos</strong>
          </h2>
          <address className="loc-addr" style={{ fontStyle: "normal" }}>
            <Icon name="pin" />
            <span>
              <b>{site.address.street}</b>
              {site.address.neighborhood} · {site.address.city}
              {site.postalCode && <> · CEP {site.postalCode}</>}
            </span>
          </address>
          <div className="loc-addr loc-hours">
            <Icon name="clock" />
            <dl>
              {site.openingHours.map((h) => (
                <div key={h.label}>
                  <dt>{h.label}</dt>
                  <dd>{h.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="loc-actions">
            <a className="btn btn--yellow" href={mapsDirectionsUrl} target="_blank" rel="noopener" data-track="directions" data-track-local={trackLocal}>
              <Icon name="pin" />
              Como chegar
            </a>
            <a className="btn btn--ghost" href={waLink(message)} target="_blank" rel="noopener" data-track="whatsapp" data-track-local={trackLocal}>
              <Icon name="wa" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
