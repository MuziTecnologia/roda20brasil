import { Icon } from "./Icons";
import { Stripes } from "./Stripes";
import { WheelSpin } from "./WheelSpin";
import { site, whatsappUrl } from "@/lib/site";

export function Cta() {
  return (
    <section className="cta" id="contato">
      <div className="cta-art" aria-hidden="true">
        <WheelSpin src="/assets/roda-diamantada.webp" />
      </div>
      <div className="cta-text">
        <p className="eyebrow reveal">
          <Stripes />
          Orçamento sem compromisso
        </p>
        <h2 className="h-sec reveal d1" style={{ marginTop: 22 }}>
          <span>Sua roda merece</span>
          <strong>
            Ficar <em>nova</em> de novo.
          </strong>
        </h2>
        <p className="reveal d2">Mande uma foto da sua roda pelo WhatsApp e receba a avaliação direto com a nossa equipe.</p>
        <div className="cta-actions reveal d3">
          <a className="btn btn--green" href={whatsappUrl} target="_blank" rel="noopener">
            <Icon name="wa" />
            Chamar no WhatsApp
          </a>
          <div className="cta-phone">
            <small>Ou ligue</small>
            <a href={`tel:${site.phoneIntl}`}>{site.phoneDisplay}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
