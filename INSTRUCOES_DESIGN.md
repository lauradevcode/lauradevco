# Nova área: Design para redes sociais

Esta versão foi construída sobre o arquivo **LauraDevCode_mobile_corrigido.zip**, preservando as 5 vitrines web existentes e a correção do mobile.

## Onde a novidade aparece

- **Menu:** novo link `Design` abre `/servicos/design-para-redes-sociais`.
- **Página inicial:** nova vitrine de design com dois exemplos de capa e CTA para o serviço.
- **Seção “O que eu faço”:** novo serviço `Design para redes sociais`.
- **Portfólio `/portfolio`:** categorias `Sites e landing pages` e `Design para redes sociais`, com 12 artes em ordem.
- **Serviço `/servicos/design-para-redes-sociais`:** página completa com descrição da oferta, carrosséis e chamada para orçamento.
- **Formulário:** opções `Design para redes sociais` e `Carrosséis, posts e conteúdo`.
- **SEO:** rota de design adicionada ao sitemap automático.

## As artes

Os arquivos foram convertidos dos PNGs originais para WebP, sem recortes ou mudanças no conteúdo. Ficaram em `public/images/social-media/`, de `ansiedade-01.webp` a `ansiedade-06.webp` e de `depressao-01.webp` a `depressao-06.webp`. A ordem de leitura está em `src/data/socialMedia.ts`.

O portfólio descreve as peças como **estudos autorais**, não como campanhas de clientes com resultado verificado.

## Implantação

1. Substitua os arquivos do projeto pelos da versão atualizada.
2. Na pasta do projeto, execute `npm install` e depois `npm run build`.
3. Publique a pasta/projeto no Vercel (framework Astro, output `dist`).
4. Verifique no domínio as rotas `/portfolio` e `/servicos/design-para-redes-sociais`.

> Observação: foi possível validar todas as referências às 12 imagens e o TypeScript da galeria; o build Astro não foi concluído aqui porque a instalação das dependências não terminou neste ambiente.
