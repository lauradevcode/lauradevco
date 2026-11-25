# LauraDevCode — novo site institucional

Site multipágina feito com Astro, CSS e JavaScript/TypeScript, com saída estática.

## Executar

```bash
npm install
npm run dev
npm run build
```

Publicar na Vercel conectando este repositório; framework Astro, comando `npm run build`, saída `dist`.

## Conteúdo e manutenção

- Serviços e textos: `src/data/content.ts`
- Projetos: `src/data/content.ts` e `src/pages/portfolio.astro`
- Estilos e paleta: `src/styles/global.css`
- Páginas: `src/pages/`
- Contato: `src/pages/contato.astro` (WhatsApp pré-configurado)

## Antes de publicar

1. Substituir os projetos ilustrativos por cases reais com imagens, nomes, links e autorização dos clientes.
2. Confirmar telefone WhatsApp, URLs e conteúdo de todos os serviços.
3. Adicionar fotos profissionais reais e imagens do portfólio em `public/images`.
4. Revisar metadados e domínio canônico se usar domínio próprio.
5. Testar em dispositivos reais e executar Lighthouse e Search Console.
6. Configurar analytics e consentimento de cookies caso adicione rastreadores.

Nenhum depoimento, resultado ou métrica foi inventado. O formulário abre o WhatsApp e não usa servidor.


## Atualizações: foto, movimento e formulário
- Foto de Laura em `public/images/laura-home.webp` (versão otimizada para web), integrada à hero com tratamento sutil de contraste, saturação e overlay.
- Efeitos de entrada com IntersectionObserver, hover nos projetos/serviços e feedback de clique. Respeita `prefers-reduced-motion`.
- Formulário de orçamento reutilizável em `src/components/BriefForm.astro`, visível ao final da home e na página `/contato`. Campos: nome, WhatsApp com DDD, serviço, descrição e faixa de orçamento.
- Após envio, abre `wa.me/5561998213684` com texto pré-preenchido. **A pessoa ainda precisa confirmar o envio no WhatsApp**; não há armazenamento de dados ou envio silencioso.
- O número do WhatsApp pode ser alterado no componente `BriefForm.astro` e em `Footer.astro`.

## Atualização: hero e portfólio com modal

- Removidos o selo textual sobre o H1 e a legenda sobre a foto da hero.
- Fundo com linhas e formas geométricas em SVG/CSS, animação lenta e discreta, sem GIF ou dependência extra; respeita a preferência de redução de movimento.
- A home e a página `/portfolio` usam `src/components/ProjectGallery.astro`: clique na capa para abrir um `<dialog>` nativo, com print ampliado (rolagem para capturas longas), contexto, escopo e botão opcional para visitar o projeto.
- Para trocar os projetos, edite **somente** o array `projects` em `src/data/content.ts`.
- Coloque cada imagem em `public/images/projetos/` e use o caminho correspondente na propriedade `image` (exemplo: `/images/projetos/advocacia.webp`). Pode usar PNG, JPG ou WEBP, ajustando a extensão no arquivo de dados.
- `url:''` esconde o botão de visita. Use um endereço público apenas quando o projeto estiver online e você puder divulgá-lo.
- Os nomes e descrições atuais são modelos editáveis: substitua pelas informações reais antes de publicar. Se uma imagem não existir, o componente exibe um aviso em vez de uma imagem inventada.

**Validação pendente:** a instalação das dependências neste ambiente expirou. Execute `npm install && npm run build` localmente antes de publicar.


## Atualização do portfólio (advocacia, psicologia e personal trainer)

A home e /portfolio exibem os três projetos em `src/data/content.ts`.
As imagens PNG **não estavam anexadas individualmente** à conversa; copie-as do seu PC conforme as instruções em `public/images/projetos/LEIA-ME.txt`.
A pasta usa os nomes curtos `wilson-alves-advocacia.png`, `daiane-alcantara.png` e `luan-pereira.png`.
Links externos não foram inventados; preencha o campo `url` de cada projeto somente com o link publicado e autorizado.


## Portfólio — Versão 5

As miniaturas agora mostram a captura **inteira**, sem zoom nem corte (`object-fit: contain`). Ao clicar, o modal exibe a imagem ampliada com rolagem.

Copie seus três arquivos PNG para `public/images/projetos/` com os nomes exatos:

- `wilson-alves-advocacia.png`
- `daiane-alcantara.png`
- `luan-pereira.png`

As referências e os títulos estão definidos em `src/data/content.ts`. As imagens locais não acompanham o ZIP, pois foram exibidas apenas em uma captura da pasta no Windows.
