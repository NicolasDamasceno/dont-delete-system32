# Portfólio Pessoal — Nicolas Damasceno

**Repositório:** `dont-delete-system32` (nome mantido de propósito — piada pessoal do autor)
**Data:** 2026-08-31
**Status:** Aprovado para planejamento de implementação

## Contexto

Análise do GitHub de `NicolasDamasceno` (152975012) mostrou: estudante de Análise e Desenvolvimento de Sistemas no IFPI Campus Teresina Central, foco atual em Python/Django, expandindo para TypeScript, React Native e .NET/C#. Repositórios de maior peso, além de disciplinas do curso:

- **flanelinha-app** — mobile (React Native/Expo) + API (ASP.NET Core) para regularização de flanelinhas em Teresina-PI. Projeto de treinamento ligado à Level33, inspirado em problema real da cidade, mas **sem cliente pagante**. Funcionalmente completo (cadastro, carteira digital, exportação PDF).
- **DotNet-Project-Workout / FinShark** — sistema de análise financeira (.NET/C# + React/TypeScript + PostgreSQL). Também treinamento Level33. **Apenas o backend está concluído**; sem frontend funcional.
- **Projeto-Heimdall** — sistema de controle de acesso (Django) para o IFPI. Projeto Integrador em dupla (2 alunos); autor contribuiu com caso de uso, mockups, design de front-end, back-end, banco de dados e relatório.
- **Portifolio-ADS-IFPI-PI1** — portfólio anterior de disciplina; será substituído por este novo portfólio.

O repositório `dont-delete-system32` está vazio (só um README) e será o portfólio pessoal, com foco em **atrair clientes freelance**.

## Objetivo

Portfólio de página única, em português e inglês, com visual inspirado na tela de um editor de código (VSCode), apresentando os 3 projetos de treinamento acima como cases honestos (nenhum é "cliente real" ainda) e convidando contato direto para trabalhos freelance. Mais projetos serão adicionados conforme forem concluídos — o conteúdo deve ser fácil de estender sem reescrever HTML.

## Stack e arquitetura

HTML + CSS + JS puro. Sem build step, sem framework, sem backend. Hospedado via GitHub Pages neste mesmo repositório, na URL padrão `nicolasdamasceno.github.io/dont-delete-system32/`.

```
dont-delete-system32/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js          # navegação/scroll, toggle de idioma, render de cards, animações
│   │   ├── data.js          # arrays de dados: projects[], certificates[], services[]
│   │   └── i18n/
│   │       ├── pt.json
│   │       └── en.json
│   ├── img/
│   │   ├── projects/        # placeholders até o autor enviar screenshots reais
│   │   └── certificates/    # placeholders
│   └── favicon.ico
└── README.md                # reescrito descrevendo o portfólio (substitui o atual)
```

- **i18n**: elementos de texto marcados com `data-i18n="chave"`; `main.js` carrega `pt.json`/`en.json` e substitui o texto. Preferência de idioma salva em `localStorage`; padrão PT se não houver preferência ou se o carregamento falhar.
- **Conteúdo orientado a dados**: projetos, certificados e serviços são objetos em `data.js`, renderizados dinamicamente pelo `main.js`. Adicionar um projeto novo é adicionar um objeto ao array — não exige tocar no HTML.
- **SEO/meta básico**: `<title>`, `<meta description>`, Open Graph (title/description/image) para preview decente ao compartilhar o link, favicon.
- **Sem formulário de contato, sem backend, sem link de currículo** (fora de escopo nesta versão).

## Estrutura de conteúdo (seções, em ordem)

1. **Hero** — dentro de uma "janela de editor" (title bar com bolinhas macOS-style, sidebar de arquivos, bloco de código). A sidebar funciona como navegação real: `home.jsx` (ativo), `sobre.md`, `projetos.md`, `certificados.md`, `contato.md` — cliques dão scroll suave até a seção correspondente. Tagline curta ("Full stack developer disponível para freelance") e CTA "Ver projetos →". Toggle PT/EN na title bar.
2. **Sobre** — bio curta (estudante de ADS no IFPI, foco em Python/Django, expandindo para TypeScript/React Native/.NET) + grade de badges de tecnologia: Python, Django, TypeScript, JavaScript, React Native, C#/.NET, PostgreSQL, HTML/CSS, Git. Apenas tecnologias com lastro real nos repositórios analisados.
3. **Serviços** ("O que eu faço") — 4 cards: Aplicações web full stack · Apps mobile (React Native) · Sistemas com banco de dados · Automações simples em Python (nível inicial).
4. **Projetos** — 3 cards com placeholder de imagem, cada um com nome, descrição curta, tags de tecnologia, badge de status e link para o repositório GitHub:
   - **flanelinha-app** — "Projeto de treinamento — completo" (verde)
   - **Projeto Heimdall** — "Projeto em dupla — Projeto Integrador" (azul), com nota explícita da contribuição pessoal do autor
   - **FinShark** — "🚧 Em desenvolvimento — backend concluído" (amarelo)
5. **Certificados** — cards placeholder (nome do curso, instituição/plataforma, ano, link quando disponível). Inclui ao menos a certificação JavaScript do FreeCodeCamp quando o autor fornecer o link/imagem.
6. **Contato** — links diretos, sem formulário, nesta ordem: e-mail (`mailto:nicolasbackprogrammer@gmail.com`), LinkedIn (`linkedin.com/in/nicolas-damasceno-045108342`), GitHub (`github.com/NicolasDamasceno`), WhatsApp (`wa.me/5586994271037`).
7. **Footer** — copyright + toque de personalidade sutil (referência ao tema pessoal do autor), sem exagero.

## Sistema visual

**Paleta fixa** (não depende do tema do SO do visitante), baseada no VSCode Dark+:
- Fundo: `#1e1e1e` (base) / `#161618` (seções alternadas)
- Texto: `#d4d4d4` (corpo), `#ffffff` (títulos)
- Acentos "syntax highlight": azul `#569cd6` (keywords/links), verde `#6a9955` (comentários/labels), laranja `#ce9178` (destaques), amarelo `#dcdcaa` (CTAs secundários)
- Botão primário: `#0e639c`

**Tipografia**: monospace (`Consolas`/`Fira Code`) para código, labels e detalhes técnicos; sans-serif (`Segoe UI`) para parágrafos longos (bio, descrições).

**Componentes**:
- Hero = janela de editor completa (title bar, sidebar-nav, bloco de código com CTA), única seção com esse tratamento
- Seções seguintes = cards escuros de cantos arredondados, cada título de seção precedido por um label estilo `// comentário`
- Tags de tecnologia = "tokens" coloridos em formato pill
- Badges de status = pill verde/amarelo/azul conforme definido acima

**Responsividade**: sidebar do hero colapsa em menu hambúrguer abaixo de ~768px; grids de projetos/serviços/certificados empilham em coluna única no mobile.

**Movimento**: scroll suave por âncora; efeito leve de "digitação" no bloco de código do hero. Ambos desligados quando `prefers-reduced-motion` estiver ativo. Sem parallax ou bibliotecas de animação externas.

## Tratamento de erros e casos-limite

- Imagem de projeto/certificado ausente ou quebrada → placeholder visual (ícone + fundo sólido)
- Falha ao carregar `pt.json`/`en.json` → texto permanece no PT hardcoded no HTML (nunca fica em branco)
- `prefers-reduced-motion` ativo → digitação e scroll suave desligados, estado final direto
- Viewport pequeno → sidebar do hero colapsa antes de cortar conteúdo

## Fora de escopo (nesta versão)

- Formulário de contato / integração com serviço externo (Formspree, EmailJS)
- Link de download de currículo em PDF
- Domínio customizado (URL padrão do GitHub Pages, mantendo o nome do repositório por escolha do autor)
- Screenshots reais dos projetos e certificados (entram como placeholder até o autor fornecer os arquivos)

## Verificação

Site estático sem framework de teste automatizado — verificação manual:
- Navegar todas as seções em PT e EN, checando o toggle de idioma
- Testar em viewport mobile (375px) e desktop (1440px)
- Checar todos os links de contato (`mailto:`, `wa.me`, LinkedIn, GitHub) e os links de projetos/certificados
- Rodar Lighthouse (acessibilidade, performance, SEO básico incluindo Open Graph)
- Validar contraste de texto sobre fundo escuro (WCAG AA)
- Confirmar que placeholders de imagem aparecem corretamente quando a imagem real está ausente
