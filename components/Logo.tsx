import Image from "next/image";
import { brandImages } from "@/lib/site";

/** Logo com fundo transparente (gerada por scripts/gerar-imagens.mjs a partir da arte original). */
export function Logo({ className = "", priority = false, sizes = "180px" }: { className?: string; priority?: boolean; sizes?: string }) {
  return (
    <span className={`logo ${className}`.trim()}>
      <Image src={brandImages.logoTransparent} alt="" width={980} height={245} priority={priority} sizes={sizes} />
    </span>
  );
}
