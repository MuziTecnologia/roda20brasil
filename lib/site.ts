// Dados da loja — fonte única de verdade para o site, metadados e dados estruturados.
// Mantenha estes dados IGUAIS aos do Perfil da Empresa no Google (nome, endereço e telefone).

export const site = {
  name: "Roda20 Brasil",
  url: "https://www.roda20brasil.com.br",
  tagline: "Especialista em recuperação de rodas",
  phoneDisplay: "(34) 99769-4900",
  phoneIntl: "+5534997694900",
  whatsappNumber: "5534997694900",
  whatsappMessage: "Olá! Vim pelo site e quero um orçamento.",
  instagram: "roda20brasil",
  address: {
    street: "Rua Raimunda Lopes da Cunha, 19",
    neighborhood: "Limoeiro",
    locality: "Caratinga",
    region: "MG",
    regionName: "Minas Gerais",
    country: "BR",
    city: "Caratinga - MG",
  },
  // Horário confirmado pela loja. Usado no site (localização e rodapé) e nos dados estruturados.
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00", label: "Segunda a sexta", hours: "8h às 18h" },
    { days: ["Saturday"], opens: "08:00", closes: "13:00", label: "Sábado", hours: "8h às 13h" },
  ],
  // Preencha quando confirmar — só então eles entram nos dados estruturados.
  // Ex.: geo: { lat: -19.79, lng: -42.14 }
  postalCode: "35300-106" as string | undefined,
  geo: undefined as { lat: number; lng: number } | undefined,
};

export const waLink = (message = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
export const whatsappUrl = waLink();
export const instagramUrl = `https://www.instagram.com/${site.instagram}/`;
const addressQuery = encodeURIComponent(`${site.address.street}, ${site.address.city}`);
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${addressQuery}&z=17&output=embed`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${addressQuery}`;
export const mapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;
export const absoluteUrl = (path = "/") => (path === "/" ? site.url : `${site.url}${path}`);

export const brandImages = {
  logoSquare: "/assets/logo.webp",
  logoTransparent: "/brand/logo-roda20-brasil.png",
  og: "/brand/og-roda20-brasil.jpg",
  storefront: "/assets/fachada-loja.webp",
};

export const navLinks = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#resultados", label: "Resultados" },
  { href: "/#acabamentos", label: "Acabamentos" },
  { href: "/#processo", label: "Processo" },
  { href: "/#localizacao", label: "Onde estamos" },
];

export const tickerItems = ["Solda", "Desempeno", "Pintura", "Diamantação", "Reforma", "Revitalização", "Personalização"];

/* ----------------------------------------------------------------------------
 * Páginas de serviço. Cada página tem conteúdo próprio (sem repetir a home).
 * Danos estruturais: o texto sempre deixa claro que a viabilidade depende de avaliação.
 * ------------------------------------------------------------------------- */

export type ServiceSlug = "desempeno-de-rodas" | "solda-de-rodas" | "pintura-de-rodas" | "diamantacao-de-rodas" | "reforma-de-rodas";

export type ServicePage = {
  slug: ServiceSlug;
  name: string; // nome curto do serviço
  summary: string; // frase curta para os cards
  title: string; // <title>
  description: string; // meta description
  h1: string;
  lead: string;
  whenTitle: string;
  when: string[];
  steps: { title: string; text: string }[];
  note?: string;
  noteTitle?: string; // título do quadro de destaque (padrão: "Importante")
  faqs: { q: string; a: string }[];
  images: { src: string; alt: string; width: number; height: number }[];
  related: ServiceSlug[];
  whatsapp: string;
};

const IMG = {
  diamantada: { src: "/assets/roda-diamantada.webp", width: 1086, height: 1448 },
  par: { src: "/assets/rodas-diamantadas-par.webp", width: 1086, height: 1448 },
  grafite: { src: "/assets/roda-grafite-fosco.webp", width: 1086, height: 1448 },
  loja: { src: "/assets/fachada-loja.webp", width: 934, height: 1684 },
};

export const servicePages: ServicePage[] = [
  {
    slug: "desempeno-de-rodas",
    name: "Desempeno de rodas",
    summary: "Correção de rodas empenadas por buraco ou meio-fio.",
    title: "Desempeno de Rodas em Caratinga",
    description:
      "Roda empenada depois de buraco ou meio-fio? A Roda20 Brasil faz desempeno de rodas de liga leve em Caratinga/MG. Envie fotos pelo WhatsApp e peça sua avaliação.",
    h1: "Desempeno de rodas em Caratinga",
    lead:
      "Bateu num buraco ou no meio-fio e o volante começou a vibrar? A roda pode ter empenado. Na Roda20 Brasil avaliamos o empeno e corrigimos a roda para que ela volte a girar alinhada.",
    whenTitle: "Sinais de roda empenada",
    when: [
      "Vibração no volante ou no banco, principalmente em velocidades mais altas",
      "Trepidação que continua mesmo depois do balanceamento",
      "Pneu perdendo pressão sem furo aparente, o que pode indicar vazamento pela borda da roda",
      "Borda visivelmente amassada depois de impacto em buraco, valeta ou meio-fio",
    ],
    steps: [
      { title: "Avaliação", text: "Verificamos a roda e identificamos onde e quanto ela está empenada." },
      { title: "Correção", text: "O empeno é corrigido de forma gradual e controlada, respeitando o material da roda." },
      { title: "Conferência", text: "A roda é verificada novamente para confirmar que voltou a girar alinhada." },
      { title: "Acabamento", text: "Se o impacto também marcou a pintura ou a borda, a roda pode seguir para reforma e pintura." },
    ],
    note:
      "Nem toda roda empenada pode ser desempenada. Trincas, deformações muito severas ou danos na região dos raios exigem avaliação técnica, e a viabilidade do reparo só é confirmada depois de analisarmos a peça.",
    faqs: [
      {
        q: "Roda empenada tem conserto?",
        a: "Muitas vezes sim, principalmente quando o empeno foi causado por buraco ou meio-fio. A resposta definitiva depende da avaliação: deformações severas ou acompanhadas de trinca podem tornar o reparo inviável.",
      },
      {
        q: "Como saber se a minha roda está empenada?",
        a: "Os sinais mais comuns são vibração no volante, trepidação que não some com o balanceamento e perda de pressão do pneu sem furo. Se notou algum deles depois de um impacto, vale trazer a roda para avaliação.",
      },
      {
        q: "Posso mandar fotos antes de levar a roda?",
        a: "Pode. Envie pelo WhatsApp uma foto da roda inteira e outra do local amassado, de perto, e conte o que aconteceu. Isso ajuda na avaliação inicial; a análise final é feita com a roda em mãos.",
      },
    ],
    images: [{ ...IMG.loja, alt: "Fachada e oficina da Roda20 Brasil na Rua Raimunda Lopes da Cunha, em Caratinga" }],
    related: ["solda-de-rodas", "reforma-de-rodas"],
    whatsapp: "Olá! Vim pelo site e quero um orçamento de desempeno de rodas.",
  },
  {
    slug: "solda-de-rodas",
    name: "Solda de rodas",
    summary: "Recuperação de trincas na borda, após avaliação técnica.",
    title: "Solda de Rodas Trincadas em Caratinga",
    description:
      "Recuperação de rodas de liga leve trincadas em Caratinga/MG, com avaliação antes de qualquer reparo. Mande fotos da roda para a Roda20 Brasil pelo WhatsApp.",
    h1: "Solda de rodas trincadas em Caratinga",
    lead:
      "Trincas na borda da roda costumam aparecer depois de impactos fortes e podem provocar vazamento de ar. A Roda20 Brasil avalia cada caso e, quando o reparo é viável, recupera a roda com solda.",
    whenTitle: "Quando procurar a solda",
    when: [
      "Trinca na borda da roda depois de um impacto",
      "Pneu que perde ar mesmo sem furo",
      "Lasca ou pedaço quebrado na borda",
      "Roda que, além de trincada, também ficou empenada",
    ],
    steps: [
      { title: "Avaliação técnica", text: "Analisamos a posição, o tamanho e o tipo do dano para saber se a solda é indicada." },
      { title: "Preparação", text: "A região é limpa e preparada para receber o reparo." },
      { title: "Solda e desempeno", text: "A trinca é soldada e, se a roda também estiver empenada, ela é desempenada." },
      { title: "Acabamento", text: "O local recebe acabamento e a roda pode ser pintada para ficar com aparência uniforme." },
    ],
    note:
      "A solda não é indicada para todo tipo de dano. Trincas em regiões estruturais, como raios e cubo, ou danos muito extensos podem tornar o reparo inviável — nesses casos, a recomendação pode ser a troca da roda. Por isso toda roda passa por avaliação antes do serviço.",
    faqs: [
      {
        q: "Roda trincada tem conserto?",
        a: "Depende de onde está a trinca e do tamanho do dano. Trincas na borda muitas vezes podem ser recuperadas; danos nos raios ou no cubo exigem análise cuidadosa e, em alguns casos, o reparo não é recomendado.",
      },
      {
        q: "A roda fica com marca da solda?",
        a: "Depois da solda, a região recebe acabamento e a roda pode ser pintada para ficar com aparência uniforme.",
      },
      {
        q: "Quanto custa soldar uma roda?",
        a: "O valor depende do dano e do acabamento escolhido. Envie fotos da roda pelo WhatsApp para receber uma avaliação.",
      },
    ],
    images: [{ ...IMG.loja, alt: "Oficina da Roda20 Brasil em Caratinga, com rodas aguardando recuperação" }],
    related: ["desempeno-de-rodas", "reforma-de-rodas"],
    whatsapp: "Olá! Vim pelo site e quero avaliar uma roda trincada (solda).",
  },
  {
    slug: "pintura-de-rodas",
    name: "Pintura eletrostática e personalização",
    summary: "Pintura eletrostática a pó: preto brilho, grafite fosco, bicolor ou a cor que você quiser.",
    title: "Pintura Eletrostática de Rodas em Caratinga",
    description:
      "Pintura eletrostática a pó de rodas em Caratinga/MG: preto brilho, grafite fosco, bicolor ou a cor que você quiser. Veja trabalhos reais da Roda20 Brasil.",
    h1: "Pintura eletrostática e personalização de rodas em Caratinga",
    lead:
      "Quer devolver a cor original da roda ou dar um visual novo ao carro? A Roda20 Brasil faz pintura eletrostática a pó em rodas, com acabamentos como preto brilho, grafite fosco e bicolor, além de cores personalizadas.",
    whenTitle: "Quando pintar a roda",
    when: [
      "Pintura descascada, desbotada ou com pontos de corrosão",
      "Rodas raladas que precisam de acabamento uniforme depois da reforma",
      "Troca de cor para personalizar o carro",
      "Combinação de cores, como fundo pintado com face diamantada",
    ],
    note:
      "Na pintura eletrostática, a tinta é um pó que recebe carga elétrica e adere à roda de forma uniforme. Depois, a peça vai para a cura no forno, onde o pó se funde e forma a camada de acabamento.",
    noteTitle: "Como funciona a pintura eletrostática",
    steps: [
      { title: "Escolha do acabamento", text: "Avaliamos a roda e definimos com você a cor e o tipo de acabamento." },
      { title: "Preparação", text: "A roda é limpa e a superfície é preparada, com correção de ralados e imperfeições quando necessário." },
      { title: "Pintura eletrostática", text: "A tinta em pó é aplicada na roda e curada no forno, na cor escolhida — brilho, fosco ou bicolor." },
      { title: "Conferência", text: "Conferimos o acabamento antes de devolver a roda." },
    ],
    faqs: [
      {
        q: "Qual a diferença entre pintura comum e pintura eletrostática?",
        a: "Na pintura comum, a tinta é líquida e aplicada com pistola. Na eletrostática, a tinta é um pó atraído pela carga elétrica e depois curado no forno, o que costuma formar uma camada mais uniforme e resistente a lascas e ao desgaste do dia a dia.",
      },
      {
        q: "Posso escolher qualquer cor?",
        a: "Sim. Além dos acabamentos mais procurados, como preto brilho e grafite fosco, a roda pode ser pintada na cor que você quiser. Fale com a gente para combinar o acabamento.",
      },
      {
        q: "Quanto tempo leva a pintura?",
        a: "O prazo depende do estado da roda e do acabamento escolhido. Ele é informado junto com o orçamento.",
      },
      {
        q: "Como cuidar da roda depois de pintada?",
        a: "Lave com água, sabão neutro e escova macia, evite produtos ácidos ou abrasivos e tome cuidado com o meio-fio ao estacionar.",
      },
    ],
    images: [
      { ...IMG.grafite, alt: "Roda pintada em grafite fosco pela Roda20 Brasil" },
      { ...IMG.diamantada, alt: "Roda bicolor com fundo preto e face diamantada na oficina da Roda20 Brasil" },
    ],
    related: ["diamantacao-de-rodas", "reforma-de-rodas"],
    whatsapp: "Olá! Vim pelo site e quero um orçamento de pintura de rodas.",
  },
  {
    slug: "diamantacao-de-rodas",
    name: "Diamantação de rodas",
    summary: "Face usinada com brilho de metal e acabamento bicolor.",
    title: "Diamantação de Rodas em Caratinga",
    description:
      "Diamantação de rodas de liga leve em Caratinga/MG: face usinada com brilho de metal e acabamento bicolor. Veja rodas diamantadas pela Roda20 Brasil.",
    h1: "Diamantação de rodas em Caratinga",
    lead:
      "A diamantação é o acabamento em que a face da roda é usinada até mostrar o brilho do metal, normalmente combinada com o fundo pintado — o visual bicolor de muitas rodas originais.",
    whenTitle: "Quando diamantar",
    when: [
      "Rodas que vieram diamantadas de fábrica e estão com a face manchada, oxidada ou ralada",
      "Quem quer o visual bicolor, com fundo escuro e face em metal",
      "Recuperação do acabamento original depois de uma reforma",
    ],
    steps: [
      { title: "Avaliação", text: "Verificamos se o desenho e o estado da roda permitem a diamantação." },
      { title: "Preparação e pintura", text: "A roda é preparada e o fundo recebe a cor escolhida." },
      { title: "Usinagem da face", text: "A face é usinada até revelar o metal, com o brilho característico da roda diamantada." },
      { title: "Finalização", text: "A roda recebe o acabamento final e passa por conferência." },
    ],
    note: "Nem todo modelo de roda é indicado para diamantação. O desenho da face e o estado da roda são avaliados antes de confirmarmos o serviço.",
    faqs: [
      {
        q: "O que é uma roda diamantada?",
        a: "É a roda em que a face é usinada até aparecer o metal, com brilho e marcas finas de usinagem, enquanto o restante recebe pintura. O resultado é o acabamento bicolor.",
      },
      {
        q: "Qual a diferença entre roda diamantada e roda pintada de prata?",
        a: "Na roda diamantada, o brilho vem do próprio metal usinado. Na pintura prata, a cor vem da tinta aplicada sobre a roda.",
      },
      {
        q: "Toda roda pode ser diamantada?",
        a: "Não. O desenho da face e o estado da roda precisam permitir a usinagem. Mande fotos pelo WhatsApp para uma avaliação inicial.",
      },
    ],
    images: [
      { ...IMG.diamantada, alt: "Roda diamantada preta e prata finalizada na oficina da Roda20 Brasil, em Caratinga" },
      { ...IMG.par, alt: "Jogo de rodas diamantadas finalizado pela Roda20 Brasil" },
    ],
    related: ["pintura-de-rodas", "reforma-de-rodas"],
    whatsapp: "Olá! Vim pelo site e quero um orçamento de diamantação de rodas.",
  },
  {
    slug: "reforma-de-rodas",
    name: "Reforma e revitalização",
    summary: "Ralados, riscos e corrosão eliminados, sem trocar a roda.",
    title: "Reforma e Revitalização de Rodas em Caratinga",
    description:
      "Reforma de rodas raladas, riscadas ou com corrosão em Caratinga/MG. A Roda20 Brasil recupera a aparência das rodas de liga leve sem precisar trocar.",
    h1: "Reforma e revitalização de rodas em Caratinga",
    lead:
      "Ralados no meio-fio, riscos, corrosão e pintura gasta deixam o carro com aparência de descuido. A reforma recupera a roda para que ela volte a ter aparência de nova, sem precisar comprar outra.",
    whenTitle: "Quando reformar",
    when: [
      "Ralados de meio-fio na borda da roda",
      "Riscos, lascas e pintura descascando",
      "Corrosão e bolhas na pintura",
      "Rodas usadas em mau estado, compradas junto com o carro",
    ],
    steps: [
      { title: "Avaliação", text: "Verificamos ralados, corrosão e se há empeno ou trinca que precise de reparo antes." },
      { title: "Correção", text: "Ralados e imperfeições são corrigidos e a superfície é preparada." },
      { title: "Acabamento", text: "A roda recebe pintura ou diamantação, no acabamento escolhido." },
      { title: "Entrega", text: "Conferência final e entrega com a roda revitalizada." },
    ],
    faqs: [
      {
        q: "Vale a pena reformar ou trocar a roda?",
        a: "Quando a roda não tem dano estrutural, a reforma permite manter as rodas originais do carro com aparência renovada. Se houver trinca ou deformação severa, avaliamos primeiro se o reparo é viável.",
      },
      {
        q: "Dá para reformar só uma roda?",
        a: "Sim. Também é possível reformar o jogo completo para deixar todas as rodas com o mesmo acabamento.",
      },
      {
        q: "A reforma inclui desempeno e solda?",
        a: "Se a roda também estiver empenada ou trincada, o desempeno e a solda podem ser feitos junto com a reforma, depois da avaliação.",
      },
    ],
    images: [
      { ...IMG.par, alt: "Rodas revitalizadas com acabamento diamantado na oficina da Roda20 Brasil" },
      { ...IMG.grafite, alt: "Roda reformada e pintada em grafite fosco pela Roda20 Brasil" },
    ],
    related: ["pintura-de-rodas", "desempeno-de-rodas"],
    whatsapp: "Olá! Vim pelo site e quero um orçamento de reforma de rodas.",
  },
];

export const getService = (slug: string) => servicePages.find((s) => s.slug === slug);
export const serviceUrl = (slug: ServiceSlug) => `/servicos/${slug}`;

/* ---------------------------- Conteúdo da home ---------------------------- */

export type ServiceIcon = "solda" | "desempeno" | "pintura" | "diamantacao" | "reforma" | "revitalizacao" | "personalizacao";

export const services: { icon: ServiceIcon; title: string; text: string; slug: ServiceSlug }[] = [
  { icon: "solda", title: "Solda", text: "Trincas e quebras avaliadas e recuperadas.", slug: "solda-de-rodas" },
  { icon: "desempeno", title: "Desempeno", text: "Roda empenada volta a rodar reta.", slug: "desempeno-de-rodas" },
  { icon: "pintura", title: "Pintura", text: "Eletrostática a pó, brilho ou fosco.", slug: "pintura-de-rodas" },
  { icon: "diamantacao", title: "Diamantação", text: "Face usinada com brilho de metal.", slug: "diamantacao-de-rodas" },
  { icon: "reforma", title: "Reforma", text: "Ralados, riscos e corrosão eliminados.", slug: "reforma-de-rodas" },
  { icon: "revitalizacao", title: "Revitalização", text: "Aparência de roda nova, sem trocar.", slug: "reforma-de-rodas" },
  { icon: "personalizacao", title: "Personalização", text: "Bicolor, detalhes e cores exclusivas.", slug: "pintura-de-rodas" },
];

export const cars = [
  { src: "/assets/porsche-cayenne.webp", brand: "Porsche", model: "Cayenne Coupé", alt: "Porsche Cayenne Coupé preto com rodas pretas, atendido pela Roda20 Brasil" },
  { src: "/assets/bmw-x1.webp", brand: "BMW", model: "X1", alt: "BMW X1 azul com rodas prata, atendido pela Roda20 Brasil" },
  { src: "/assets/mercedes-classe-a.webp", brand: "Mercedes-Benz", model: "Classe A", alt: "Mercedes-Benz Classe A cinza com rodas pretas, atendido pela Roda20 Brasil" },
];

export const finishes = [
  { swatch: "sw-diamond", name: "Diamantada", note: "Bicolor, face usinada" },
  { swatch: "sw-black", name: "Preto brilho", note: "Visual esportivo" },
  { swatch: "sw-graphite", name: "Grafite fosco", note: "Discreto e moderno" },
  { swatch: "sw-custom", name: "Personalizada", note: "A cor que você quiser" },
];

export const finishPhotos = [
  { src: "/assets/roda-diamantada.webp", label: "Diamantada", alt: "Roda diamantada preta e prata finalizada na oficina da Roda20 Brasil, em Caratinga" },
  { src: "/assets/rodas-diamantadas-par.webp", label: "Diamantada", alt: "Jogo de rodas diamantadas recém-finalizadas pela Roda20 Brasil" },
  { src: "/assets/roda-grafite-fosco.webp", label: "Grafite fosco", alt: "Roda pintada em grafite fosco pela Roda20 Brasil" },
];

export const steps = [
  { title: "Envie uma foto", text: "Mande pelo WhatsApp uma foto da roda inteira e outra do dano de perto, e conte o que aconteceu." },
  { title: "Avaliação", text: "Analisamos o dano e passamos o orçamento e o prazo." },
  { title: "Recuperação", text: "Solda, desempeno, preparação e pintura com o acabamento escolhido." },
  { title: "Pronta pra rodar", text: "Conferência final e entrega com a roda impecável." },
];
