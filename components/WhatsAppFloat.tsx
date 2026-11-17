import { Icon } from "./Icons";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a className="wa-float" href={whatsappUrl} target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
      <Icon name="wa" />
    </a>
  );
}
