import { tickerItems } from "@/lib/site";

export function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
