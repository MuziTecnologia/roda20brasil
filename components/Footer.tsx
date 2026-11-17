import { Logo } from "./Logo";
import { Icon } from "./Icons";
import { instagramUrl, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Especialistas em rodas automotivas: reforma, pintura, diamantação, solda, desempeno e revitalização.</p>
        </div>
        <div>
          <h4>Navegue</h4>
          <ul>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#resultados">Resultados</a></li>
            <li><a href="#acabamentos">Acabamentos</a></li>
            <li><a href="#processo">Como funciona</a></li>
          </ul>
        </div>
        <div>
          <h4>Serviços</h4>
          <ul>
            <li>Solda e desempeno</li>
            <li>Pintura</li>
            <li>Diamantação</li>
            <li>Personalização</li>
          </ul>
        </div>
        <div>
          <h4>Contato</h4>
          <ul>
            <li>
              <a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener">
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
              <a href="#localizacao">
                <Icon name="pin" />
                {site.address.street} — {site.address.city.replace(" - ", "/")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {year} {site.name}. Todos os direitos reservados.</span>
        <span>{site.tagline}</span>
      </div>
    </footer>
  );
}
