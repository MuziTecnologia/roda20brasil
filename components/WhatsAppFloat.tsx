import { Icon } from "./Icons";
import { waLink } from "@/lib/site";

export function WhatsAppFloat({ message }: { message?: string }) {
  return (
    <a
      className="wa-float"
      href={waLink(message)}
      target="_blank"
      rel="noopener"
      aria-label="Falar com a Roda20 Brasil no WhatsApp"
      data-track="whatsapp"
      data-track-local="botao_flutuante"
      data-lead
    >
      <Icon name="wa" />
    </a>
  );
}
