import Image from "next/image";
import { finishes, finishPhotos } from "@/lib/site";

export function Finishes() {
  return (
    <section className="finishes" id="acabamentos">
      <div className="finishes-text">
        <h2 className="h-sec reveal">
          <span>Escolha o seu</span>
          <strong>Acabamento</strong>
        </h2>
        <p className="reveal d1">Original de fábrica ou do seu jeito. A gente prepara, pinta e finaliza cada roda para durar.</p>
        <ul className="finish-list">
          {finishes.map((f, i) => (
            <li key={f.name} className={`reveal${i ? ` d${i}` : ""}`}>
              <i className={f.swatch} />
              {f.name}
              <small>{f.note}</small>
            </li>
          ))}
        </ul>
      </div>
      <div className="finish-photos">
        {finishPhotos.map((p, i) => (
          <figure key={p.src} className={`reveal${i ? ` d${i}` : ""}`}>
            <Image src={p.src} alt={p.alt} fill sizes="(max-width: 960px) 72vw, 23vw" />
            <figcaption>{p.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
