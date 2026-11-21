import Link from "next/link";
import { ServiceIcon } from "./Icons";
import { serviceUrl, type ServicePage, type ServiceIcon as IconName, type ServiceSlug } from "@/lib/site";

const ICONS: Record<ServiceSlug, IconName> = {
  "desempeno-de-rodas": "desempeno",
  "solda-de-rodas": "solda",
  "pintura-de-rodas": "pintura",
  "diamantacao-de-rodas": "diamantacao",
  "reforma-de-rodas": "reforma",
};

/** Cards de serviço (mesmo visual da home), cada um levando para a sua página. */
export function ServiceCards({ items, headingLevel = 3 }: { items: ServicePage[]; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="svc-grid">
      {items.map((s, i) => (
        <article key={s.slug} className={`svc reveal${i % 4 ? ` d${i % 4}` : ""}`}>
          <ServiceIcon name={ICONS[s.slug]} />
          <div>
            <H>
              <Link className="svc-link" href={serviceUrl(s.slug)}>
                {s.name}
              </Link>
            </H>
            <p>{s.summary}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
