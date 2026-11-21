import Link from "next/link";
import { Logo } from "./Logo";
import { Icon } from "./Icons";
import { instagramUrl, mapsDirectionsUrl, servicePages, serviceUrl, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo sizes="320px" />
          <p>Recuperação de rodas em Caratinga/MG: reforma, pintura, diamantação, solda, desempeno e revitalização de rodas de liga leve.</p>
        </div>
        <nav aria-label="Navegação do rodapé">
          <p className="f-title">Navegue</p>
          <ul>
            <li><a href="/">Início</a></li>
            <li><Link href="/servicos">Todos os serviços</Link></li>
            <li><a href="/#resultados">Resultados</a></li>
            <li><a href="/#processo">Como funciona</a></li>
            <li><a href="/#localizacao">Onde estamos</a></li>
          </ul>
        </nav>
        <nav aria-label="Serviços">
          <p className="f-title">Serviços</p>
          <ul>
            {servicePages.map((s) => (
              <li key={s.slug}>
                <Link href={serviceUrl(s.slug)}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="f-title">Contato</p>
          <ul>
            <li>
              <a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener" data-track="whatsapp" data-track-local="rodape">
                <Icon name="wa" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={instagramUrl} target="_blank" rel="noopener">
                <Icon name="ig" />@{site.instagram}
              </a>
            </li>
            <li>
              <a href={mapsDirectionsUrl} target="_blank" rel="noopener" data-track="directions" data-track-local="rodape">
                <Icon name="pin" />
                {site.address.street}, {site.address.neighborhood} — {site.address.locality}/{site.address.region}
                {site.postalCode && <>, CEP {site.postalCode}</>}
              </a>
            </li>
            {site.openingHours.map((h) => (
              <li key={h.label} className="f-hours">
                {h.label}: {h.hours}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {year} {site.name}. Todos os direitos reservados.</span>
        <span>{site.tagline} em Caratinga/MG</span>
      </div>
    </footer>
  );
}
