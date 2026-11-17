"use client";

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
        {/* recorte posicionado manualmente via CSS, por isso <img> simples */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" loading="lazy" />
      </div>
    </div>
  );
}
