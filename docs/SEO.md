# SEO — Roda20 Brasil

Guia do que está implementado no site, do que depende de informação da empresa e do que precisa ser feito manualmente nas ferramentas do Google.

## Arquitetura de páginas e palavras-chave

Cada grupo de busca tem uma única página principal, para evitar que as páginas disputem a mesma pesquisa.

| URL | Busca principal | Também cobre |
|---|---|---|
| `/` | recuperação de rodas em Caratinga | oficina de rodas em Caratinga, conserto de rodas em Caratinga, recuperação de rodas de liga leve |
| `/servicos` | serviços para rodas de liga leve em Caratinga | restauração de rodas automotivas |
| `/servicos/desempeno-de-rodas` | desempeno de rodas em Caratinga | roda empenada, roda amassada em Caratinga |
| `/servicos/solda-de-rodas` | solda de rodas / roda trincada em Caratinga | recuperação de roda trincada |
| `/servicos/pintura-de-rodas` | pintura (eletrostática) de rodas em Caratinga | pintura eletrostática de rodas, personalização de rodas, pintura de rodas esportivas |
| `/servicos/diamantacao-de-rodas` | diamantação de rodas em Caratinga | roda diamantada, roda bicolor |
| `/servicos/reforma-de-rodas` | reforma de rodas em Caratinga | revitalização de rodas, roda ralada |

O conteúdo das páginas fica em `lib/site.ts` (`servicePages`). Para mudar um texto, edite esse arquivo.

## O que está implementado

- **Metadados por página:** title, description, canonical absoluto (`https://www.roda20brasil.com.br/...`), Open Graph (pt_BR), Twitter Card e imagem social 1200×630 (`public/brand/og-roda20-brasil.jpg`). Tudo é gerado em `lib/seo.ts`.
- **Dados estruturados (JSON-LD), em `lib/schema.ts`:**
  - home: `AutoRepair` (subtipo de LocalBusiness) + `WebSite`;
  - páginas de serviço: `Service` + `BreadcrumbList`;
  - `/servicos`: `ItemList` + `BreadcrumbList`.
  - Não há avaliações, notas nem preços na marcação.
- **Arquivos para o Google:** `robots.txt` e `sitemap.xml`, gerados por `app/robots.ts` e `app/sitemap.ts`. Ao mudar o conteúdo, atualize a data em `app/sitemap.ts`.
- **Página 404:** responde com status 404 de verdade e `noindex`.
- **Endereços `*.vercel.app`:** recebem `X-Robots-Tag: noindex` (definido em `next.config.ts`), para não duplicar o domínio oficial nas buscas.
- **Domínio sem www:** a Vercel já redireciona `roda20brasil.com.br` para `https://www.roda20brasil.com.br` (308).
- **Eventos de conversão:** preparados em `components/Analytics.tsx`, mas só são enviados se o GA4 estiver configurado:
  - `clique_whatsapp`
  - `clique_como_chegar`
  - `clique_telefone`
  - `solicitar_orcamento`

  Todos levam o parâmetro `local` (hero, menu, servico_pintura…) e o parâmetro `pagina`.

## Pendências de informação da empresa

Estes dados **não entraram no site** porque ainda não foram confirmados. Quando confirmar, preencha os campos em `lib/site.ts` e eles passam a aparecer automaticamente no schema:

1. **Coordenadas** (`geo`): use as do pino do Perfil da Empresa no Google.
2. **Atendimento a outras cidades:** hoje só Caratinga é citada. Só acrescente outras cidades se o atendimento for confirmado.
3. **Telefone fixo e e-mail**, se houver.

Já confirmados e publicados no site e no schema: bairro **Limoeiro**, CEP **35300-106**, horário (**segunda a sexta, 8h às 18h; sábado, 8h às 13h**) e **pintura eletrostática a pó**.

## Ações manuais necessárias

### Google Search Console
1. Adicione uma propriedade do tipo **Domínio** para `roda20brasil.com.br` e verifique por **DNS** (registro TXT no provedor do domínio). Isso cobre www e não-www.
   - Alternativa: propriedade de prefixo de URL, verificada pela meta tag. Para isso, cadastre `NEXT_PUBLIC_GSC_VERIFICATION` na Vercel.
2. Envie o sitemap: `https://www.roda20brasil.com.br/sitemap.xml`.
3. Em "Inspeção de URL", peça a indexação da home e das 5 páginas de serviço.
4. Valide as páginas no **Teste de pesquisa aprimorada**: https://search.google.com/test/rich-results

### Google Analytics 4 (opcional)
1. Crie uma propriedade GA4 e um fluxo de dados web.
2. Cadastre `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` em Vercel → Settings → Environment Variables e faça um novo deploy.
3. Em Administrador → Eventos, marque `solicitar_orcamento` (e, se quiser, `clique_whatsapp`) como **evento-chave**.
4. **LGPD:** com o GA4 ativo, avalie incluir um aviso ou banner de cookies e uma política de privacidade.

### Perfil da Empresa no Google
- Nome, endereço e telefone precisam ser **exatamente** os do site:
  - Roda20 Brasil
  - Rua Raimunda Lopes da Cunha, 19 — Limoeiro, Caratinga/MG, CEP 35300-106
  - +55 34 99769-4900
- Informe o site `https://www.roda20brasil.com.br`, a categoria principal (por exemplo, "Oficina de rodas" ou "Serviço de reparo de rodas") e o mesmo horário do site: segunda a sexta, 8h às 18h; sábado, 8h às 13h.
- Publique fotos reais dos serviços e responda às avaliações. As avaliações devem ficar no Google, e não marcadas no site.

## Acompanhamento no Search Console

- **Desempenho → Consultas:** acompanhe impressões e cliques de "recuperação de rodas caratinga", "desempeno de rodas", "pintura de rodas caratinga" e semelhantes. Páginas com muitas impressões e CTR baixo pedem um ajuste no title e na description.
- **Indexação → Páginas:** as 7 URLs do sitemap devem aparecer como indexadas. Investigue qualquer "Rastreada, mas não indexada".
- **Core Web Vitals:** os dados de campo (usuários reais) aparecem depois de algumas semanas de tráfego. As metas são LCP ≤ 2,5 s, INP ≤ 200 ms e CLS ≤ 0,1.
- **Melhorias:** confira se a navegação estrutural (breadcrumbs) foi reconhecida.

## Ideias de conteúdo (com base em dúvidas reais)

Escreva só com fotos e casos reais da oficina:

- Quando uma roda empenada precisa de avaliação?
- O que é diamantação e como ela é feita?
- Quando vale a pena reformar uma roda em vez de trocar?
- Como cuidar de rodas pintadas e diamantadas?
- O que considerar antes de recuperar uma roda trincada? Deixe claro que depende de avaliação técnica.
- Antes e depois de trabalhos reais, com o modelo do carro e o serviço feito.

## Regenerar logo e imagem social

```bash
node scripts/gerar-imagens.mjs
```
