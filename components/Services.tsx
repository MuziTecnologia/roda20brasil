import Image from "next/image";
import { Icon, ServiceIcon } from "./Icons";
import { services, whatsappUrl } from "@/lib/site";

const delay = (i: number) => (i % 4 ? ` d${i % 4}` : "");

export function Services() {
  return (
    <section className="services" id="servicos">
      <div className="services-main">
        <div className="services-head">
          <h2 className="h-sec reveal">
            <span>O que a gente faz</span>
            <strong>Serviços</strong>
          </h2>
          <p className="reveal d1">
            Da roda torta à roda personalizada: estrutura, acabamento e cor no mesmo lugar, com o cuidado que o seu carro merece.
          </p>
        </div>
        <div className="svc-grid">
          {services.map((s, i) => (
            <article key={s.title} className={`svc reveal${delay(i)}`}>
              <ServiceIcon name={s.icon} />
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </article>
          ))}
          <a className="svc svc--cta reveal d3" href={whatsappUrl} target="_blank" rel="noopener">
            <Icon name="wa" />
            <div>
              <span className="arrow">→</span>
              <h3>Orçamento pelo WhatsApp</h3>
            </div>
          </a>
        </div>
      </div>
      <div className="services-art" aria-hidden="true">
        <div className="photo">
          <Image src="/assets/rodas-diamantadas-par.webp" alt="" fill sizes="(max-width: 960px) 90vw, 40vw" />
        </div>
        <div className="badge reveal">
          <b>100%</b>
          <span>Foco em rodas</span>
        </div>
      </div>
    </section>
  );
}
