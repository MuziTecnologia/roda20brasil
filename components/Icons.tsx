import type { ServiceIcon as ServiceIconName } from "@/lib/site";

/** Sprite global: filtro que remove o fundo azul da logo + ícones reutilizáveis. */
export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <filter id="keyBlue" colorInterpolationFilters="sRGB">
        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  3.5 3.5 0 0 -0.65" />
      </filter>
      <symbol id="i-wa" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5.1 5.24-1.37A9.9 9.9 0 1 0 12.04 2Zm0 18.1c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.1.82.83-3.03-.2-.31a8.2 8.2 0 1 1 7.02 3.86Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.22-.08-.39-.12-.55.13-.16.24-.63.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3c-.22.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.46-.6 1.66-1.18.2-.57.2-1.07.15-1.17-.06-.1-.22-.16-.47-.28Z"
        />
      </symbol>
      <symbol id="i-ig" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2" d="M7 2.5h10A4.5 4.5 0 0 1 21.5 7v10a4.5 4.5 0 0 1-4.5 4.5H7A4.5 4.5 0 0 1 2.5 17V7A4.5 4.5 0 0 1 7 2.5Z" />
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" />
      </symbol>
      <symbol id="i-pin" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
      </symbol>
    </svg>
  );
}

export function Icon({ name }: { name: "wa" | "ig" | "pin" }) {
  return (
    <svg aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2.6, strokeLinejoin: "round", strokeLinecap: "round" } as const;

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  const props = { viewBox: "0 0 48 48", "aria-hidden": true, ...stroke };
  switch (name) {
    case "solda":
      return (
        <svg {...props}>
          <path d="M10 38 30 18M26 14l8 8M30 10l8 8-4 4-8-8z" />
          <path d="M8 26l3 2M6 34l4-1M14 42l1-4M18 30l-2 3" />
        </svg>
      );
    case "desempeno":
      return (
        <svg {...props}>
          <circle cx="24" cy="24" r="15" />
          <circle cx="24" cy="24" r="4" />
          <path d="M24 4v6M24 38v6M4 24h6M38 24h6" />
          <path d="M33 6l-2 4 4 1" />
        </svg>
      );
    case "pintura":
      return (
        <svg {...props}>
          <path d="M14 8h16v10H14zM30 11h6M22 18v6M17 24h10l-2 16h-6z" />
          <path d="M40 9v.01M43 13v.01M40 17v.01" />
        </svg>
      );
    case "diamantacao":
      return (
        <svg {...props}>
          <path d="M12 8h24l8 11-20 22L4 19z" />
          <path d="M4 19h40M18 8l-4 11 10 22 10-22-4-11" />
        </svg>
      );
    case "reforma":
      return (
        <svg {...props}>
          <path d="M30 6a9 9 0 0 0-8 12L7 33a4 4 0 0 0 6 6l15-15a9 9 0 0 0 12-8l-6 2-4-4z" />
        </svg>
      );
    case "revitalizacao":
      return (
        <svg {...props}>
          <path d="M40 20A16 16 0 0 0 10 14M8 28a16 16 0 0 0 30 6" />
          <path d="M10 6v8h8M38 42v-8h-8" />
        </svg>
      );
    case "personalizacao":
      return (
        <svg {...props}>
          <path d="M24 4l4 12 12 4-12 4-4 12-4-12-12-4 12-4z" />
          <path d="M38 34l1.5 4.5L44 40l-4.5 1.5L38 46l-1.5-4.5L32 40l4.5-1.5z" />
        </svg>
      );
  }
}
