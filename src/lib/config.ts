/**
 * Configuração central da Culturalia.
 * Pontos de edição rápida — domínio, contato, redes, etc.
 */

export const SITE = {
  name: 'Culturalia Produções',
  shortName: 'Culturalia',
  slogan: 'Viva esse espetáculo!',
  description:
    'Produtora artística e cultural que democratiza arte, cultura e entretenimento no Brasil. Teatro, dança, música e projetos que transformam vidas.',
  url: 'https://culturalia.art.br',
  locale: 'pt-BR',
  founded: 2019,
  city: 'São Paulo',
  state: 'SP',
} as const;

export const CONTACT = {
  email: 'contato@culturalia.art.br',
  whatsapp: '5511936188087', // sem espaços, formato internacional
  whatsappDisplay: '+55 (11) 93618-8087',
  whatsappMessage:
    'Olá, Culturalia! Cheguei pelo site e gostaria de falar com vocês.',
} as const;

export const SOCIAL = {
  instagram: {
    label: 'Instagram',
    handle: '@culturalia.br',
    url: 'https://instagram.com/culturalia.br',
  },
} as const;

export const NAV = [
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Espetáculos', href: '/portfolio' },
  { label: 'Agenda', href: '/agenda' },
  { label: 'Contato', href: '/contato' },
] as const;

export const FOUNDER = {
  name: 'Hílary Silva',
  role: 'Diretora Artística e Fundadora',
  bio: 'Formada em Química pela USP, Hílary Silva sempre soube que seu lugar era nas artes. Com mais de 15 anos de experiência em produção cultural — passando por eventos, festivais e projetos das mais diversas áreas —, ela fundou a Culturalia em 2019 com um propósito claro: democratizar o acesso à arte e à cultura no Brasil. Nos últimos anos, tem se dedicado especialmente a produções de teatro e musical, com um olhar sensível para a educação inclusiva. Cada espetáculo que assina é, antes de tudo, um ato de conexão.',
} as const;

export const SERVICES = [
  {
    slug: 'consultoria',
    title: 'Consultoria',
    short: 'Assessoria estratégica para artistas e produtoras.',
    description:
      'Consultoria em planejamento artístico, modelos de negócio para artes cênicas, estratégia de carreira para artistas e estruturação de produtoras culturais. Também oferecemos consultoria especializada em presença digital: criação de sites e portfólios online para artistas e produtores culturais que querem mostrar seu trabalho com identidade, profissionalismo e beleza.',
    color: 'cyan',
    icon: 'spark',
  },
  {
    slug: 'producao-executiva',
    title: 'Produção Executiva',
    short: 'Coordenação completa de espetáculos de teatro, dança e música.',
    description:
      'Conduzimos a produção do início ao fim — desde a concepção até a estreia. Cuidamos de equipe, ensaios, cenografia, figurinos, técnica e temporadas, garantindo que cada apresentação seja uma celebração única.',
    color: 'royal',
    icon: 'theater',
  },
  {
    slug: 'captacao-de-recursos',
    title: 'Captação de Recursos',
    short: 'Lei Rouanet, editais públicos e patrocínios privados.',
    description:
      'Elaboramos projetos culturais, conduzimos a aprovação em leis de incentivo (Rouanet, ProAC, leis municipais) e prospectamos patrocinadores. Transformamos boas ideias em projetos viáveis financeiramente.',
    color: 'magenta',
    icon: 'megaphone',
  },
  {
    slug: 'gestao-cultural',
    title: 'Gestão Cultural & Curadoria',
    short: 'Curadoria de temporadas, festivais e mostras.',
    description:
      'Programação de temporadas, festivais e mostras artísticas com curadoria que valoriza diversidade, qualidade e relevância. Gerimos espaços culturais com foco em formação de público.',
    color: 'mustard',
    icon: 'calendar',
  },
  {
    slug: 'workshops',
    title: 'Workshops & Formação',
    short: 'Oficinas e capacitações em artes cênicas.',
    description:
      'Cursos, oficinas e formações em teatro, dança, voz e expressão corporal. Para artistas em formação e para o público geral que quer se aproximar das artes.',
    color: 'orange',
    icon: 'mask',
  },
] as const;

export const FEATURED_SHOWS = [
  {
    slug: 'jazz-it-up',
    title: 'Jazz It Up',
    tagline: 'Musical',
    year: '',
    venue: '',
    duration: '',
    description:
      'Uma celebração ao jazz com música ao vivo, dança e teatro em um espetáculo que faz o público mergulhar na efervescência das casas noturnas dos anos 20.',
    color: 'magenta',
  },
  {
    slug: 'liberdade-liberdade',
    title: 'Liberdade, Liberdade — O Musical',
    tagline: 'Musical',
    year: '',
    venue: '',
    duration: '',
    description:
      'Adaptação musical do clássico de Millôr Fernandes e Flávio Rangel. Um manifesto cênico em defesa da liberdade, com elenco diverso e direção musical original.',
    color: 'royal',
  },
] as const;

/** Helper para gerar link wa.me com mensagem pré-preenchida */
export function whatsappLink(message: string = CONTACT.whatsappMessage): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}
