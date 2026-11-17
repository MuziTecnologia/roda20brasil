import Image from "next/image";
import { Icon } from "./Icons";
import { cars, instagramUrl } from "@/lib/site";

export function Results() {
  return (
    <section className="results" id="resultados">
      <div className="results-head">
        <h2 className="h-sec reveal">
          <span>Clientes satisfeitos</span>
          <strong>Resultados</strong>
        </h2>
        <div className="reveal d1">
          <p>Alguns dos carros que passaram pela Roda20 e saíram com as rodas impecáveis.</p>
          <a href={instagramUrl} target="_blank" rel="noopener">
            <Icon name="ig" />
            Mais no Instagram
          </a>
        </div>
      </div>
      <div className="cars">
        {cars.map((c, i) => (
          <figure key={c.model} className={`car reveal${i ? ` d${i}` : ""}`}>
            <Image src={c.src} alt={c.alt} fill sizes="(max-width: 960px) 86vw, 33vw" />
            <figcaption>
              <div>
                <small>{c.brand}</small>
                <b>{c.model}</b>
              </div>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
