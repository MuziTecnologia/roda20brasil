# roda20brasil

Landing page da **Roda20 Brasil** — especialista em recuperação de rodas (solda, desempeno, pintura, diamantação, reforma e personalização).

📍 Rua Raimunda Lopes da Cunha, 19 — Caratinga/MG
📱 WhatsApp: [(34) 99769-4900](https://wa.me/5534997694900)
📸 Instagram: [@roda20brasil](https://www.instagram.com/roda20brasil/)

Feito com **Next.js 16** (App Router) + React 19 + TypeScript.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Build de produção

```bash
npm run build
npm start
```

A página é gerada como estática, então dá para publicar direto na [Vercel](https://vercel.com) importando este repositório.

## Estrutura

- `app/layout.tsx` — fontes (next/font), metadados/SEO e sprite de ícones
- `app/page.tsx` — monta a home com as seções
- `app/globals.css` — todos os estilos
- `components/` — uma seção por arquivo (`Hero`, `Services`, `Results`, `Finishes`, `Process`, `Cta`, `Location`, `Footer`…)
- `lib/site.ts` — **dados da loja e conteúdo das páginas de serviço**. Edite aqui para atualizar o site.
- `lib/seo.ts` e `lib/schema.ts` — metadados por página e dados estruturados (schema.org)
- `app/servicos/` — página de serviços e uma página para cada serviço
- `app/robots.ts` e `app/sitemap.ts` — robots.txt e sitemap.xml
- `scripts/gerar-imagens.mjs` — gera a logo transparente e a imagem de compartilhamento
- `public/assets/` — logo e fotos

## SEO

Veja [docs/SEO.md](docs/SEO.md): arquitetura de páginas, pendências de informação, configuração do Search Console/GA4 e acompanhamento.

Variáveis de ambiente opcionais (GA4 e Search Console) estão em `.env.example`.
