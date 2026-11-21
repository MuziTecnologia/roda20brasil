import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 dias para as imagens otimizadas
  },
  async headers() {
    return [
      // Fotos e arquivos de marca: cache de 30 dias no navegador/CDN
      {
        source: "/:dir(assets|brand)/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
      // Endereços *.vercel.app duplicam o site: não devem ser indexados (o domínio oficial é www.roda20brasil.com.br)
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?<sub>.*)\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

export default nextConfig;
