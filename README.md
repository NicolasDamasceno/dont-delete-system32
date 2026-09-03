# dont-delete-system32

Portfólio pessoal de Nicolas Damasceno — desenvolvedor full stack disponível para projetos freelance.

🔗 https://nicolasdamasceno.github.io/dont-delete-system32/

## Stack

HTML, CSS e JavaScript puro (ES modules) — sem build step, sem framework, sem backend. Conteúdo bilíngue (PT/EN).

## Rodando localmente

Abra `index.html` diretamente no navegador, ou sirva a pasta com qualquer servidor estático:

```bash
npx serve .
```

## Testes

Funções puras (`assets/js/i18n.js`, `assets/js/render.js`) têm cobertura de testes com o test runner nativo do Node:

```bash
npm test
```

## Adicionando um novo projeto/certificado/serviço

Edite os arrays em `assets/js/data.js` — cada item já suporta descrição bilíngue (`{ pt, en }`), tags, status/badge e link. Nenhuma mudança em `index.html` é necessária.

## Estrutura

```
index.html
assets/
  css/style.css
  js/
    data.js       # conteúdo (serviços, projetos, certificados)
    i18n.js       # resolução de idioma (testado)
    render.js     # geração de HTML dos cards (testado)
    main.js       # orquestração (DOM, toggle de idioma, menu mobile)
    i18n/pt.js
    i18n/en.js
  img/
tests/            # testes unitários (node --test)
```
