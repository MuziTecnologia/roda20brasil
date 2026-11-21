// Gera os arquivos de marca a partir da arte original (public/assets/logo.webp):
//  - public/brand/logo-roda20-brasil.png  → logo recortada com fundo transparente
//  - public/brand/og-roda20-brasil.jpg    → imagem de compartilhamento 1200x630
// Uso: node scripts/gerar-imagens.mjs
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const OUT = "public/brand";
await mkdir(OUT, { recursive: true });

// 1) Logo transparente: recorta a faixa da logo e remove o fundo azul (#0a1a8f)
const crop = { left: 150, top: 510, width: 980, height: 245 };
const bg = [10, 26, 143];
const { data, info } = await sharp("public/assets/logo.webp").extract(crop).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const rgba = Buffer.alloc(info.width * info.height * 4);
for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const a = Math.min(1, Math.max(0, (3.5 * (r + g)) / 255 - 0.65));
  // "desmistura" a cor de fundo nas bordas para não ficar halo azul
  const un = (c, k) => (a > 0 ? Math.min(255, Math.max(0, Math.round((c - (1 - a) * bg[k]) / a))) : 0);
  rgba[j] = un(r, 0);
  rgba[j + 1] = un(g, 1);
  rgba[j + 2] = un(b, 2);
  rgba[j + 3] = Math.round(a * 255);
}
const logo = sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } });
await logo.clone().png({ compressionLevel: 9 }).toFile(`${OUT}/logo-roda20-brasil.png`);

// 2) Imagem social 1200x630: fundo azul da marca + faixas + foto da fachada + logo
const W = 1200, H = 630;
const photoW = 560;
const slant = 120; // inclinação da foto
const base = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g" cx="25%" cy="45%" r="60%">
      <stop offset="0" stop-color="#1c6be6" stop-opacity=".45"/>
      <stop offset="1" stop-color="#1c6be6" stop-opacity="0"/>
    </radialGradient>
    <pattern id="p" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(25)">
      <rect width="2" height="22" fill="#ffffff" fill-opacity=".035"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="#0a1a8f"/>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect width="${W}" height="${H}" fill="url(#p)"/>
  <polygon points="${W - photoW - 54 + slant},0 ${W},0 ${W},${H} ${W - photoW - 54},${H}" fill="#19a84a"/>
  <polygon points="${W - photoW - 36 + slant},0 ${W},0 ${W},${H} ${W - photoW - 36},${H}" fill="#ffc800"/>
  <polygon points="${W - photoW - 18 + slant},0 ${W},0 ${W},${H} ${W - photoW - 18},${H}" fill="#1c6be6"/>
</svg>`);
const mask = Buffer.from(`<svg width="${photoW}" height="${H}" xmlns="http://www.w3.org/2000/svg"><polygon points="${slant},0 ${photoW},0 ${photoW},${H} 0,${H}" fill="#fff"/></svg>`);
const photo = await sharp("public/assets/fachada-loja.webp")
  .resize(photoW, H, { fit: "cover", position: "top" })
  .composite([{ input: mask, blend: "dest-in" }])
  .png()
  .toBuffer();
const logoOg = await logo.clone().resize({ width: 560 }).png().toBuffer();
await sharp(base)
  .composite([
    { input: photo, left: W - photoW, top: 0 },
    { input: logoOg, left: 44, top: Math.round((H - 140) / 2) - 10 },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(`${OUT}/og-roda20-brasil.jpg`);

console.log("ok:", `${OUT}/logo-roda20-brasil.png`, `${OUT}/og-roda20-brasil.jpg`);
