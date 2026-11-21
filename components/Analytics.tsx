"use client";

import Script from "next/script";
import { useEffect } from "react";

/**
 * Medição de conversões, sem rastreamento extra:
 * - O Google Analytics 4 só é carregado se NEXT_PUBLIC_GA_ID estiver definido (ex.: G-XXXXXXX).
 * - Qualquer link com data-track gera um evento quando clicado:
 *     data-track="whatsapp"   → clique_whatsapp
 *     data-track="directions" → clique_como_chegar
 *     data-track="phone"      → clique_telefone
 *     data-lead               → também envia solicitar_orcamento
 *   data-track-local identifica onde o clique aconteceu (hero, menu, servico_pintura…).
 * Sem GA configurado, nenhum dado sai do navegador.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const EVENTS: Record<string, string> = {
  whatsapp: "clique_whatsapp",
  directions: "clique_como_chegar",
  phone: "clique_telefone",
};

type Gtag = (...args: unknown[]) => void;

export function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      const gtag = (window as unknown as { gtag?: Gtag }).gtag;
      if (!gtag) return;
      const params = { local: el.dataset.trackLocal ?? "desconhecido", pagina: window.location.pathname };
      const name = EVENTS[el.dataset.track ?? ""];
      if (name) gtag("event", name, params);
      if (el.dataset.lead !== undefined) gtag("event", "solicitar_orcamento", params);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GA_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
