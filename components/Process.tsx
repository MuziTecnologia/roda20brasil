import { steps } from "@/lib/site";

export function Process() {
  return (
    <section className="process" id="processo">
      <div className="process-head">
        <h2 className="h-sec reveal">
          <span>Simples assim</span>
          <strong>Como funciona</strong>
        </h2>
        <p className="reveal d1">Sem complicação: você manda a foto, a gente avalia e devolve a roda pronta pra rodar.</p>
      </div>
      <div className="steps">
        {steps.map((s, i) => (
          <div key={s.title} className={`step reveal${i ? ` d${i}` : ""}`}>
            {i === 0 && <span className="bar" />}
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
