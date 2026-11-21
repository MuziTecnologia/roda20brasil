import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icons";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="conteudo" className="not-found">
        <span className="code" aria-hidden="true">404</span>
        <h1 className="h-sec">
          <span>Ops, essa página saiu da pista</span>
          <strong>Página não encontrada</strong>
        </h1>
        <p style={{ maxWidth: 560, color: "rgba(255,255,255,.8)" }}>
          O endereço pode ter mudado ou não existe mais. Veja nossos serviços ou fale com a gente pelo WhatsApp.
        </p>
        <div className="hero-actions">
          <Link className="btn btn--yellow" href="/">
            Voltar ao início
          </Link>
          <Link className="btn btn--ghost" href="/servicos">
            Ver serviços
          </Link>
          <a className="btn btn--ghost" href={whatsappUrl} target="_blank" rel="noopener" data-track="whatsapp" data-track-local="pagina_404">
            <Icon name="wa" />
            WhatsApp
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
