// Dados da loja — edite aqui para atualizar o site inteiro.

export const site = {
  name: "Roda20 Brasil",
  tagline: "Especialista em recuperação de rodas",
  phoneDisplay: "(34) 99769-4900",
  phoneIntl: "+5534997694900",
  whatsappNumber: "5534997694900",
  whatsappMessage: "Olá! Vim pelo site e quero um orçamento.",
  instagram: "roda20brasil",
  address: {
    street: "Rua Raimunda Lopes da Cunha, 19",
    city: "Caratinga - MG",
  },
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
export const instagramUrl = `https://www.instagram.com/${site.instagram}/`;
const addressQuery = encodeURIComponent(`${site.address.street}, ${site.address.city}`);
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${addressQuery}&z=17&output=embed`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${addressQuery}`;

export const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#resultados", label: "Resultados" },
  { href: "#acabamentos", label: "Acabamentos" },
  { href: "#processo", label: "Processo" },
  { href: "#localizacao", label: "Onde estamos" },
];

export const tickerItems = ["Solda", "Desempeno", "Pintura", "Diamantação", "Reforma", "Revitalização", "Personalização"];

export type ServiceIcon = "solda" | "desempeno" | "pintura" | "diamantacao" | "reforma" | "revitalizacao" | "personalizacao";

export const services: { icon: ServiceIcon; title: string; text: string }[] = [
  { icon: "solda", title: "Solda", text: "Trincas e quebras recuperadas com segurança." },
  { icon: "desempeno", title: "Desempeno", text: "Roda empenada volta a rodar reta." },
  { icon: "pintura", title: "Pintura", text: "Qualquer cor, brilho ou fosco." },
  { icon: "diamantacao", title: "Diamantação", text: "Face usinada com brilho de metal." },
  { icon: "reforma", title: "Reforma", text: "Ralados, riscos e corrosão eliminados." },
  { icon: "revitalizacao", title: "Revitalização", text: "Aparência de roda nova, sem trocar." },
  { icon: "personalizacao", title: "Personalização", text: "Bicolor, detalhes e cores exclusivas." },
];

export const cars = [
  { src: "/assets/porsche-cayenne.webp", brand: "Porsche", model: "Cayenne Coupé", alt: "Porsche Cayenne Coupé preto com rodas pretas recuperadas" },
  { src: "/assets/bmw-x1.webp", brand: "BMW", model: "X1", alt: "BMW X1 azul com rodas prata recuperadas" },
  { src: "/assets/mercedes-classe-a.webp", brand: "Mercedes-Benz", model: "Classe A", alt: "Mercedes-Benz Classe A cinza com rodas pretas" },
];

export const finishes = [
  { swatch: "sw-diamond", name: "Diamantada", note: "Bicolor, face usinada" },
  { swatch: "sw-black", name: "Preto brilho", note: "Visual esportivo" },
  { swatch: "sw-graphite", name: "Grafite fosco", note: "Discreto e moderno" },
  { swatch: "sw-custom", name: "Personalizada", note: "A cor que você quiser" },
];

export const finishPhotos = [
  { src: "/assets/roda-diamantada.webp", label: "Diamantada", alt: "Roda diamantada preta e prata no suporte da oficina" },
  { src: "/assets/rodas-diamantadas-par.webp", label: "Diamantada", alt: "Jogo de rodas diamantadas recém finalizadas" },
  { src: "/assets/roda-grafite-fosco.webp", label: "Grafite fosco", alt: "Roda pintada em grafite fosco" },
];

export const steps = [
  { title: "Envie uma foto", text: "Mande fotos da roda pelo WhatsApp e conte o que aconteceu." },
  { title: "Avaliação", text: "Analisamos o dano e passamos o orçamento e o prazo." },
  { title: "Recuperação", text: "Solda, desempeno, preparação e pintura com o acabamento escolhido." },
  { title: "Pronta pra rodar", text: "Conferência final e entrega com a roda impecável." },
];
