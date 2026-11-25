export const services = [
 {id:'google-meu-negocio',number:'01',title:'Google Meu Negócio',eyebrow:'Presença local',summary:'Organizo seu Perfil da Empresa no Google para apresentar serviços, localização e formas de contato nas buscas locais.',description:'Reviso categorias, informações, serviços, fotos, vídeos e publicações para melhorar a apresentação do seu trabalho na Pesquisa e no Google Maps.',items:['Revisão do perfil','Categorias e serviços','Fotos e conteúdo','Orientação para avaliações legítimas']},
 {id:'google-ads',number:'02',title:'Google Ads',eyebrow:'Anúncios no Google',summary:'Campanhas de pesquisa para alcançar quem já procura os serviços que você oferece.',description:'Crio e acompanho anúncios no Google para pessoas que procuram serviços como o seu. Escolho as buscas e regiões mais relevantes e acompanho os contatos. O valor dos anúncios é separado da minha gestão.',items:['Buscas relacionadas ao seu serviço','Criação dos anúncios','Acompanhamento dos contatos','Revisão e melhorias contínuas']},
 {id:'meta-ads',number:'03',title:'Meta Ads',eyebrow:'Instagram e Facebook',summary:'Anúncios no Instagram e Facebook para divulgar seus serviços a novos públicos.',description:'Planejo e acompanho anúncios no Instagram e Facebook para mostrar seus serviços a novos públicos, respeitando seu objetivo e orçamento.',items:['Escolha de quem verá os anúncios','Anúncios no Instagram e Facebook','Teste de imagens e mensagens','Acompanhamento dos resultados']},
 {id:'criacao-de-sites',number:'04',title:'Criação de sites',eyebrow:'Sites e páginas de vendas',summary:'Sites que apresentam seu trabalho, funcionam bem no celular e facilitam o contato.',description:'Crio sites e páginas de vendas com a identidade do seu negócio. Organizo as informações para que o visitante entenda seu serviço, navegue pelo celular e saiba como entrar em contato.',items:['Sites profissionais','Páginas de vendas','Atualização de sites','Melhorias para aparecer no Google']},
 {id:'sistemas-web',number:'05',title:'Sistemas para negócios',eyebrow:'Organização e atendimento',summary:'Sistemas e ferramentas para organizar clientes, agendamentos e tarefas.',description:'Crio sistemas e plataformas para facilitar agendamentos, organizar informações, controlar tarefas e oferecer serviços pela internet, conforme a necessidade do negócio.',items:['Painéis de administração','Agendamentos e cadastros','Plataformas digitais','Tarefas mais automatizadas']},
 {id:'lojas-virtuais',number:'06',title:'Lojas virtuais',eyebrow:'Comércio digital',summary:'Uma loja online para mostrar seus produtos e facilitar os pedidos.',description:'Crio lojas online com catálogo, informações dos produtos e um caminho de compra claro, tanto para quem vende quanto para quem compra.',items:['Loja online','Catálogo de produtos','Opções de pagamento e pedidos','Compra fácil pelo celular']},
 {id:'design-para-redes-sociais',number:'08',title:'Design para redes sociais',eyebrow:'Identidade nas redes',summary:'Posts, carrosséis e legendas com identidade visual e conteúdo que vale a leitura.',description:'Crio posts, carrosséis e legendas para mostrar seus serviços e manter uma identidade reconhecível nas redes sociais. Também ofereço pacotes de conteúdo.',items:['Carrosséis e posts','Identidade visual das publicações','Textos e legendas','Pacotes de conteúdo']},
 {id:'trafego-pago',number:'07',title:'Gestão de anúncios',eyebrow:'Google e redes sociais',summary:'Divulgação no Google, Instagram e Facebook com acompanhamento de resultados.',description:'Planejo, acompanho e ajusto seus anúncios no Google, Instagram e Facebook para divulgar seu serviço de acordo com seu público e orçamento.',items:['Anúncios no Google','Instagram e Facebook','Acompanhamento dos contatos','Ajustes nas campanhas']},
];
// Portfólio real: cada projeto representa um trabalho, não um nicho exclusivo.
// Coloque os PNGs em public/images/projetos/ com os nomes abaixo.
// A home mostra todos os projetos, do mais recente ao mais antigo; /portfolio também mostra TODOS.
// Para incluir novos, informe publishedAt (AAAA-MM-DD). A ordenação é automática; projetos sem data ficam ao final na ordem original.
// Botão "Visualizar site ao vivo" aparece apenas para endereço HTTPS confirmado.
// Se não houver link, mantenha url: ''.
// Descreva somente entregas comprovadas; URLs são opcionais.
const projectEntries: { title: string; category: string; description: string; scope: string; image: string; url: string; publishedAt?: string }[] = [
  {
    title: 'Helena Duarte — Estética Avançada',
    category: 'Estética feminina · Landing page premium',
    description: 'Projeto demonstrativo para clínicas de estética, com direção visual editorial, vídeo de procedimentos e apresentação dos tratamentos.',
    scope: 'Landing page responsiva com microinterações, vídeo no banner, pré-atendimento via WhatsApp e estrutura de SEO local.',
    image: '/images/projetos/helena-duarte-estetica.webp',
    url: 'https://lp-esteticafeminina.vercel.app/',
    publishedAt: '2026-11-25'
  },
  {
    title: 'NOMA Arquitetura & Interiores',
    category: 'Arquitetura e interiores · Página de apresentação',
    description: 'Página criada para apresentar projetos de arquitetura e interiores, com direção visual editorial, navegação por seções e chamadas para iniciar um projeto.',
    scope: 'Criação de página para apresentar projetos de arquitetura e interiores, com adaptação para celulares.',
    image: '/images/projetos/noma-arquitetura-interiores.png',
    url: 'https://lp-arquitetura-lauradevcode.vercel.app/'
  },
  {
    title: 'Norte Contabilidade',
    category: 'Contabilidade · Página de serviços',
    description: 'Página para apresentar serviços contábeis, com apresentação clara da proposta, navegação por serviços e chamadas para solicitação de orçamento.',
    scope: 'Criação de página de serviços contábeis, com adaptação para celulares.',
    image: '/images/projetos/norte-contabilidade.png',
    url: 'https://lp-contabilidade-lauradevcode.vercel.app/'
  },
  {
    title: 'Nova Detail — Estética Automotiva',
    category: 'Estética automotiva · Landing page',
    description: 'Landing page para apresentar serviços de estética automotiva, destacar os cuidados com o veículo e facilitar a solicitação de orçamentos.',
    scope: 'Criação de landing page com identidade visual automotiva, apresentação dos serviços e chamadas para contato pelo WhatsApp.',
    image: '/images/projetos/nova-detail-estetica-automotiva.png',
    publishedAt: '2026-11-25',
    url: 'https://lp-esteticaautomotiva-flax.vercel.app/'
  },
  {
    title: 'Wilson Alves Advocacia',
    category: 'Advocacia · Site institucional',
    description: 'Projeto desenvolvido para apresentação digital de um escritório de advocacia. Veja a captura ampliada para conhecer a interface e o trabalho visual.',
    scope: 'Projeto web para o segmento jurídico.',
    image: '/images/projetos/wilson-alves-advocacia.png',
    url: 'https://wilsonalvesadv.com.br/' // Site ao vivo ainda não verificado; mantém o botão oculto.
  },
  {
    title: 'Daiane Alcantara',
    category: 'Psicologia · Página profissional',
    description: 'Projeto de presença digital para uma profissional de psicologia. A captura mostra a composição visual e a apresentação do serviço.',
    scope: 'Projeto web para profissional da área de psicologia.',
    image: '/images/projetos/daiane-alcantara.png',
    url: 'https://www.daianealcantara.com.br/'
  },
  {
    title: 'Luan Pereira',
    category: 'Personal trainer · Site profissional',
    description: 'Projeto digital para apresentação de serviços de treinamento físico. Explore a captura para visualizar o trabalho desenvolvido.',
    scope: 'Projeto web para profissional de treinamento físico.',
    image: '/images/projetos/luan-pereira.png',
    url: 'https://lp-luan-personal.vercel.app/' // Site ao vivo ainda não verificado; mantém o botão oculto.
  }
];

// Datas iguais preservam a ordem de cadastro; insira o mais novo antes dos demais.
export const projects = [...projectEntries].sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
