import Image from "next/image";

/** Logo recortada da arte original; o filtro #keyBlue deixa o fundo azul transparente. */
export function Logo({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <span className={`logo ${className}`.trim()}>
      <Image src="/assets/logo.webp" alt="" width={1254} height={1254} priority={priority} sizes="(max-width: 960px) 130vw, 70vw" />
    </span>
  );
}
