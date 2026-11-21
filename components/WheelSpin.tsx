"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/** Roda que gira conforme a rolagem da página. */
export function WheelSpin({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (ref.current) ref.current.style.transform = `rotate(${window.scrollY * 0.25}deg)`;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="wheel">
      <div className="wheel-spin" ref={ref}>
        {/* imagem otimizada e redimensionada (antes carregava o arquivo original inteiro) */}
        <Image src={src} alt="" width={1086} height={1448} sizes="(max-width: 960px) 110vw, 56vw" />
      </div>
    </div>
  );
}
