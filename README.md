# Site HTML estático — Desvendando o Céu Austral

Esta pasta é uma versão estática, independente e responsiva do site institucional. Não precisa de React, npm, servidor Node ou bibliotecas externas para funcionar.

## Como visualizar
- Abra `index.html` no navegador.
- As fotografias são locais e estão em `assets/`, portanto o site não depende de imagens remotas para a galeria e o conteúdo principal.

## Como publicar
Para hospedagem estática (por exemplo GitHub Pages, Netlify ou servidor institucional), envie **todo o conteúdo desta pasta** — `index.html`, `favicon.svg`, `README.md` e `assets/` — para a pasta pública do projeto. Não envie somente o arquivo HTML, pois as fotografias são arquivos separados.

## Recursos
- Layout mobile-first, menu móvel e botões com área adequada para toque.
- Galeria com visualização ampliada, fechamento por toque fora da imagem ou tecla Escape e bloqueio da rolagem de fundo.
- Imagens WebP do acervo local do projeto, carregadas sob demanda quando apropriado.
- Linha do tempo, descrição das atividades, seção do OASI, parcerias, fontes e contatos oficiais.
- A página distingue registros documentados de inferências e não presume que toda cooperação configure convênio formal permanente.

## Fontes
Os links institucionais e históricos estão listados na seção “Consulte as fontes e os registros” da página.

## Identidade visual
Identidade em azul claro (#2AA3CE) e branco, a partir do logo do projeto. O ícone do título é um selo azul com os anéis do logo e o Cruzeiro do Sul em branco (`assets/southern-cross.svg`, também usado como favicon). Variações: `southern-cross-white.svg`, `southern-cross-blue.svg` e `hero-cross.svg`. Os logos enviados estão em `assets/logo-desvendando-horizontal.png` e `assets/logo-desvendando-vertical.png`.

## Organização da página
- Menu com destaque da seção atual e botão "Fale conosco".
- "O projeto" com resumo visível e história completa recolhível.
- Atividades com filtros por tema; galeria com botão "Ver mais fotos"; fontes recolhidas em "Ver as fontes e registros".
