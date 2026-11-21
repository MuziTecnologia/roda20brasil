import { Icon } from "./Icons";
import { Stripes } from "./Stripes";
import { WheelSpin } from "./WheelSpin";
import { site, waLink } from "@/lib/site";

type Props = {
  /** Mensagem pré-preenchida do WhatsApp (contextualizada por serviço). */
  message?: string;
  /** Identifica a origem do clique nos eventos de medição. */
  trackLocal?: string;
};

export function Cta({ message, trackLocal = "chamada_final" }: Props) {
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
        <p className="reveal d2">
          Mande pelo WhatsApp uma foto da roda inteira e outra do dano de perto. A avaliação é feita direto com a nossa equipe, aqui em Caratinga.
        </p>
        <div className="cta-actions reveal d3">
          <a className="btn btn--green" href={waLink(message)} target="_blank" rel="noopener" data-track="whatsapp" data-track-local={trackLocal} data-lead>
            <Icon name="wa" />
            Chamar no WhatsApp
          </a>
          <div className="cta-phone">
            <small>Ou ligue</small>
            <a href={`tel:${site.phoneIntl}`} data-track="phone" data-track-local={trackLocal}>
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
