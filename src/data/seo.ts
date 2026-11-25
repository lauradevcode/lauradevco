/** SEO para o projeto Astro LauraDevCode. Sem endereço físico inventado. */
export const SITE_URL = 'https://lauradevcode.vercel.app';
export const BUSINESS_NAME = 'Laura Dev Code';
export const CONTACT_PHONE = '+5561998213684';

const pages: Record<string, { title: string; description: string; service?: string }> = {
  '/': {
    title: 'Web Designer em Brasília | Criação de Sites | Laura Dev Code',
    description: 'Criação de sites em Brasília, Google Meu Negócio, anúncios e design para redes sociais. Atendimento a psicólogos, advogados, autônomos e empresas.'
  },
  '/portfolio/': {
    title: 'Portfólio de Sites e Design | Laura Dev Code',
    description: 'Conheça sites, páginas de vendas e artes para redes sociais criados por Laura Dev Code para profissionais liberais e negócios.'
  },
  '/sobre/': {
    title: 'Sobre Laura | Criação de Sites em Brasília | Laura Dev Code',
    description: 'Conheça Laura, especialista em criação de sites e presença digital em Brasília. Atendimento direto para profissionais liberais, prestadores de serviços e empresas.'
  },
  '/contato/': {
    title: 'Contato e Orçamento | Laura Dev Code Brasília',
    description: 'Converse diretamente com Laura sobre sites, sistemas, Google Meu Negócio, anúncios e design. Atendimento em Brasília e online para todo o Brasil.'
  },
  '/servicos/google-meu-negocio/': {
    title: 'Google Meu Negócio em Brasília | Laura Dev Code',
    description: 'Organização e otimização do Perfil da Empresa no Google para negócios locais em Brasília: serviços, categorias, fotos e presença no Google Maps.',
    service: 'Otimização do Perfil da Empresa no Google'
  },
  '/servicos/google-ads/': {
    title: 'Anúncios no Google em Brasília | Laura Dev Code',
    description: 'Criação e gestão de anúncios no Google Ads em Brasília para profissionais liberais, prestadores de serviços e empresas. Acompanhamento de contatos.',
    service: 'Gestão de campanhas Google Ads'
  },
  '/servicos/meta-ads/': {
    title: 'Anúncios no Instagram e Facebook | Laura Dev Code',
    description: 'Campanhas no Instagram e Facebook para alcançar públicos estratégicos, gerar oportunidades e acompanhar o desempenho dos anúncios.',
    service: 'Gestão de campanhas Meta Ads'
  },
  '/servicos/criacao-de-sites/': {
    title: 'Criação de Sites em Brasília | Laura Dev Code',
    description: 'Criação de sites e páginas de vendas em Brasília para psicólogos, advogados, prestadores de serviços e empresas, com foco na clareza e no contato.',
    service: 'Criação de sites e páginas de vendas'
  },
  '/servicos/sistemas-web/': {
    title: 'Criação de Sistemas para Negócios | Laura Dev Code',
    description: 'Sistemas sob medida para organizar agendamentos, clientes, tarefas e serviços pela internet. Criação de ferramentas digitais para negócios.',
    service: 'Criação de sistemas para negócios'
  },
  '/servicos/lojas-virtuais/': {
    title: 'Criação de Lojas Virtuais | Laura Dev Code',
    description: 'Criação de lojas virtuais com catálogo de produtos, páginas claras e opções de compra simples para clientes e negócios.',
    service: 'Criação de lojas virtuais'
  },
  '/servicos/design-para-redes-sociais/': {
    title: 'Design para Redes Sociais | Laura Dev Code',
    description: 'Criação de posts, carrosséis e legendas para Instagram, com identidade visual. Trabalhos autorais para psicólogos e outros profissionais.',
    service: 'Design para redes sociais, posts e carrosséis'
  },
  '/servicos/trafego-pago/': {
    title: 'Gestão de Anúncios no Google e Instagram | Laura Dev Code',
    description: 'Gestão de anúncios no Google, Instagram e Facebook para profissionais liberais, prestadores de serviços e empresas. Planejamento e acompanhamento.',
    service: 'Gestão de tráfego pago'
  }
};

function normalizePath(path: string) {
  const clean = path.replace(/\/+/g, '/');
  return clean.endsWith('/') ? clean : `${clean}/`;
}
export function getSeoForPath(path: string) {
  return pages[normalizePath(path)] ?? pages['/'];
}
export const PUBLIC_PAGES = Object.keys(pages);

export function makeStructuredData(path: string, canonical: string, title: string, description: string) {
  const p = normalizePath(path);
  const company = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organizacao`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    description: 'Criação de sites em Brasília, sistemas para negócios, design para redes sociais, anúncios e otimização do Google Meu Negócio para profissionais liberais e empresas.',
    areaServed: [{ '@type': 'AdministrativeArea', name: 'Distrito Federal' }, { '@type': 'Country', name: 'Brasil' }],
    contactPoint: { '@type': 'ContactPoint', telephone: CONTACT_PHONE, contactType: 'sales', availableLanguage: 'Portuguese' },
  };
  const website = {
    '@type': 'WebSite', '@id': `${SITE_URL}/#site`, name: BUSINESS_NAME,
    url: SITE_URL, inLanguage: 'pt-BR', publisher: { '@id': `${SITE_URL}/#organizacao` }
  };
  const webpage = {
    '@type': 'WebPage', '@id': `${canonical}#pagina`, url: canonical,
    name: title, description, inLanguage: 'pt-BR',
    isPartOf: { '@id': `${SITE_URL}/#site` }, about: { '@id': `${SITE_URL}/#organizacao` }
  };
  const nodes: Record<string, unknown>[] = [company, website, webpage];
  const service = pages[p]?.service;
  if (service) nodes.push({
    '@type': 'Service', name: service, description,
    provider: { '@id': `${SITE_URL}/#organizacao` },
    serviceType: service,
    areaServed: [{ '@type': 'AdministrativeArea', name: 'Distrito Federal' }, { '@type': 'Country', name: 'Brasil' }],
    url: canonical
  });
  if (p !== '/') nodes.push({
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: service || title.split(' | ')[0], item: canonical }
    ]
  });
  return { '@context': 'https://schema.org', '@graph': nodes };
}
