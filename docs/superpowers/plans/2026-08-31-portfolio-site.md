# Portfólio Pessoal (VSCode-inspired) Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a bilingual (PT/EN), static HTML/CSS/JS single-page portfolio for Nicolas Damasceno, styled after a VSCode editor window, showcasing 3 real training projects and inviting freelance contact.

**Architecture:** Zero-build static site. Content (`services`/`projects`/`certificates`) lives in a data module rendered into the DOM by small, pure, unit-tested functions (`i18n.js`, `render.js`); `main.js` is a thin DOM-orchestration layer wiring locale toggle, mobile menu and the hero typing effect. Markup and CSS implement the approved "hybrid" visual: the hero is a full editor-window mockup (title bar, sidebar-as-nav, code block); everything below is plain, readable dark-themed sections. Reference spec: `docs/superpowers/specs/2026-08-31-portfolio-site-design.md`.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript (ES modules), Node.js built-in test runner (`node --test`) for unit tests only (dev-time, not shipped). No frameworks, no bundler, no backend.

---

## Chunk 1: Foundations — data layer and pure logic (unit-tested)

### Task 1: Project scaffolding

**Files:**
- Create: `package.json`
- Create: `.gitignore`
- Create: `assets/js/` (empty dir, populated in later tasks)
- Create: `assets/css/` (empty dir)
- Create: `assets/img/projects/` (empty dir)
- Create: `assets/img/certificates/` (empty dir)
- Create: `tests/` (empty dir)

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "nicolasdamasceno-portfolio",
  "private": true,
  "type": "module",
  "scripts": {
    "test": "node --test tests/"
  }
}
```

- [ ] **Step 2: Create `.gitignore`**

```
.superpowers/
```

(`.superpowers/` holds brainstorming-session scratch files from the visual companion tool used during design — not part of the site.)

- [ ] **Step 3: Verify Node test runner works with an empty suite**

Run: `node --test tests/`
Expected: `tests 0` (passes, no errors) — confirms `type: module` + test runner wiring before real tests exist.

- [ ] **Step 4: Commit**

```bash
git add package.json .gitignore
git commit -m "chore: scaffold portfolio project (package.json, gitignore)"
```

---

### Task 2: Content data module (`data.js`)

**Files:**
- Create: `assets/js/data.js`

No tests here — this is static content, not logic. Correctness is verified by the render tests in Task 4 (which consume this exact shape) and by manual review of the copy.

- [ ] **Step 1: Write `assets/js/data.js`**

```js
export const services = [
  {
    id: 'web-fullstack',
    icon: '🌐',
    title: { pt: 'Aplicações web full stack', en: 'Full stack web applications' },
    description: {
      pt: 'Sistemas web completos, do banco de dados à interface, usando Python/Django ou .NET.',
      en: 'End-to-end web systems, from database to interface, using Python/Django or .NET.'
    }
  },
  {
    id: 'mobile',
    icon: '📱',
    title: { pt: 'Apps mobile', en: 'Mobile apps' },
    description: {
      pt: 'Aplicativos Android/iOS com React Native e Expo, integrados a APIs próprias.',
      en: 'Android/iOS apps with React Native and Expo, integrated with custom APIs.'
    }
  },
  {
    id: 'db-systems',
    icon: '🗄️',
    title: { pt: 'Sistemas com banco de dados', en: 'Database-driven systems' },
    description: {
      pt: 'Cadastro, gestão e dashboards com PostgreSQL ou SQLite, modelados sob medida.',
      en: 'Registration, management and dashboards with PostgreSQL or SQLite, custom-modeled.'
    }
  },
  {
    id: 'automation',
    icon: '⚙️',
    title: { pt: 'Automações simples em Python', en: 'Simple Python automations' },
    description: {
      pt: 'Scripts para automatizar tarefas repetitivas — nível inicial, ideal para pequenas demandas.',
      en: 'Scripts to automate repetitive tasks — entry level, ideal for small requests.'
    }
  }
];

export const projects = [
  {
    id: 'flanelinha-app',
    name: 'flanelinha-app',
    image: 'assets/img/projects/placeholder.svg',
    description: {
      pt: 'App mobile e API para cadastro de flanelinhas e emissão de carteira digital, inspirado na regulamentação da atividade em Teresina-PI.',
      en: 'Mobile app and API for registering informal parking attendants and issuing a digital ID card, inspired by local regulation in Teresina, Brazil.'
    },
    tags: ['React Native', 'Expo', 'ASP.NET Core', 'PostgreSQL', 'TypeScript'],
    status: { pt: 'Projeto de treinamento — completo', en: 'Training project — complete', tone: 'green' },
    link: 'https://github.com/NicolasDamasceno/flanelinha-app'
  },
  {
    id: 'projeto-heimdall',
    name: 'Projeto Heimdall',
    image: 'assets/img/projects/placeholder.svg',
    description: {
      pt: 'Sistema de controle de acesso do IFPI, com identificação por CPF ou matrícula. Projeto em dupla — contribuí com caso de uso, mockups, design de front-end, back-end, banco de dados e relatório.',
      en: 'Access control system for IFPI, identifying people by ID or enrollment number. Built with a partner — I contributed use-case design, mockups, front-end design, back-end, database and report.'
    },
    tags: ['Python', 'Django', 'SQLite'],
    status: { pt: 'Projeto em dupla — Projeto Integrador', en: 'Pair project — capstone', tone: 'blue' },
    link: 'https://github.com/NicolasDamasceno/Projeto-Heimdall'
  },
  {
    id: 'finshark',
    name: 'FinShark',
    image: 'assets/img/projects/placeholder.svg',
    description: {
      pt: 'Aplicação de análise financeira: consulta de ações, balanços e portfólios. Backend completo (autenticação JWT, PostgreSQL); frontend em React ainda em desenvolvimento.',
      en: 'Financial analysis application: stock lookup, balance sheets and portfolios. Backend complete (JWT auth, PostgreSQL); React frontend still in progress.'
    },
    tags: ['.NET', 'C#', 'React', 'TypeScript', 'PostgreSQL'],
    status: { pt: '🚧 Em desenvolvimento — backend concluído', en: '🚧 In progress — backend complete', tone: 'yellow' },
    link: 'https://github.com/NicolasDamasceno/DotNet-Project-Workout'
  }
];

export const certificates = [
  {
    id: 'freecodecamp-js',
    name: 'JavaScript Algorithms and Data Structures',
    image: 'assets/img/certificates/placeholder.svg',
    issuer: 'freeCodeCamp',
    year: null,
    link: null
  }
];
```

> Note: `certificates[0].year` and `.link` are `null` until Nicolas provides the real completion date/certificate URL — `render.js` (Task 4) is required to degrade gracefully when either is missing.

- [ ] **Step 2: Commit**

```bash
git add assets/js/data.js
git commit -m "feat: add portfolio content data (services, projects, certificates)"
```

---

### Task 3: `i18n.js` — pure locale-resolution logic (TDD)

**Files:**
- Create: `assets/js/i18n.js`
- Test: `tests/i18n.test.js`

- [ ] **Step 1: Write the failing tests**

```js
// tests/i18n.test.js
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  resolveInitialLocale,
  loadStoredLocale,
  saveLocale,
  getLocaleField
} from '../assets/js/i18n.js';

test('resolveInitialLocale returns the stored value when supported', () => {
  assert.equal(resolveInitialLocale('en'), 'en');
  assert.equal(resolveInitialLocale('pt'), 'pt');
});

test('resolveInitialLocale falls back to pt for unsupported or missing values', () => {
  assert.equal(resolveInitialLocale('fr'), 'pt');
  assert.equal(resolveInitialLocale(null), 'pt');
  assert.equal(resolveInitialLocale(undefined), 'pt');
});

function createFakeStorage(initial = {}) {
  const store = { ...initial };
  return {
    getItem: (key) => (key in store ? store[key] : null),
    setItem: (key, value) => { store[key] = value; },
    _store: store
  };
}

test('loadStoredLocale reads the "locale" key from the given storage', () => {
  const storage = createFakeStorage({ locale: 'en' });
  assert.equal(loadStoredLocale(storage), 'en');
});

test('loadStoredLocale returns null when storage access throws', () => {
  const storage = { getItem() { throw new Error('blocked'); } };
  assert.equal(loadStoredLocale(storage), null);
});

test('saveLocale persists the value under the "locale" key', () => {
  const storage = createFakeStorage();
  saveLocale(storage, 'en');
  assert.equal(storage._store.locale, 'en');
});

test('saveLocale swallows storage errors instead of throwing', () => {
  const storage = { setItem() { throw new Error('quota exceeded'); } };
  assert.doesNotThrow(() => saveLocale(storage, 'en'));
});

test('getLocaleField returns the field for the requested locale', () => {
  assert.equal(getLocaleField({ pt: 'Olá', en: 'Hello' }, 'en'), 'Hello');
});

test('getLocaleField falls back to pt when the requested locale is missing', () => {
  assert.equal(getLocaleField({ pt: 'Olá' }, 'en'), 'Olá');
});

test('getLocaleField returns plain strings unchanged', () => {
  assert.equal(getLocaleField('texto simples', 'en'), 'texto simples');
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `node --test tests/i18n.test.js`
Expected: FAIL — `Cannot find module '../assets/js/i18n.js'` (file doesn't exist yet).

- [ ] **Step 3: Write `assets/js/i18n.js`**

```js
export const SUPPORTED_LOCALES = ['pt', 'en'];
export const DEFAULT_LOCALE = 'pt';

export function resolveInitialLocale(storedValue) {
  return SUPPORTED_LOCALES.includes(storedValue) ? storedValue : DEFAULT_LOCALE;
}

export function loadStoredLocale(storage) {
  try {
    return storage.getItem('locale');
  } catch {
    return null;
  }
}

export function saveLocale(storage, locale) {
  try {
    storage.setItem('locale', locale);
  } catch {
    // ignore storage failures (e.g. private browsing quota)
  }
}

export function getLocaleField(field, locale) {
  if (field && typeof field === 'object') {
    return field[locale] ?? field.pt ?? '';
  }
  return field ?? '';
}

/**
 * Applies a flat { key: string } dictionary to every element with a
 * matching data-i18n="key" attribute under `root`. DOM-dependent —
 * exercised manually in the browser (Task 6/8), not unit tested.
 */
export function applyStaticI18n(root, dict) {
  root.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      el.textContent = dict[key];
    }
  });
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test tests/i18n.test.js`
Expected: PASS — 9 tests, 0 failures. (`applyStaticI18n` is untested here by design — it requires a live DOM; covered by manual browser verification in Task 11.)

- [ ] **Step 5: Commit**

```bash
git add assets/js/i18n.js tests/i18n.test.js
git commit -m "feat: add i18n locale-resolution logic with unit tests"
```

---

### Task 4: `render.js` — pure HTML-string builders (TDD)

**Files:**
- Create: `assets/js/render.js`
- Test: `tests/render.test.js`

- [ ] **Step 1: Write the failing tests**

```js
// tests/render.test.js
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  escapeHtml,
  renderStatusBadge,
  renderTechTags,
  renderProjectCard,
  renderServiceCard,
  renderCertificateCard
} from '../assets/js/render.js';

test('escapeHtml escapes all dangerous characters', () => {
  assert.equal(escapeHtml(`<script>&"'</script>`), '&lt;script&gt;&amp;&quot;&#39;&lt;/script&gt;');
});

test('renderStatusBadge picks the locale label and tone class', () => {
  const status = { pt: 'Completo', en: 'Complete', tone: 'green' };
  assert.equal(renderStatusBadge(status, 'en'), '<span class="badge badge--green">Complete</span>');
});

test('renderTechTags renders one tag element per entry', () => {
  assert.equal(
    renderTechTags(['Python', 'Django']),
    '<span class="tag">Python</span><span class="tag">Django</span>'
  );
});

test('renderTechTags returns an empty string for no tags', () => {
  assert.equal(renderTechTags([]), '');
  assert.equal(renderTechTags(undefined), '');
});

test('renderProjectCard includes name, locale description and GitHub link', () => {
  const project = {
    name: 'flanelinha-app',
    image: 'assets/img/projects/placeholder.svg',
    description: { pt: 'Descrição PT', en: 'Description EN' },
    tags: ['TypeScript'],
    status: { pt: 'Completo', en: 'Complete', tone: 'green' },
    link: 'https://github.com/NicolasDamasceno/flanelinha-app'
  };
  const html = renderProjectCard(project, 'en');
  assert.match(html, /flanelinha-app/);
  assert.match(html, /Description EN/);
  assert.doesNotMatch(html, /Descrição PT/);
  assert.match(html, /href="https:\/\/github\.com\/NicolasDamasceno\/flanelinha-app"/);
});

test('renderProjectCard escapes untrusted-looking fields', () => {
  const project = {
    name: '<b>x</b>',
    image: 'a.svg',
    description: { pt: '<i>y</i>', en: '<i>y</i>' },
    tags: [],
    status: { pt: 'Completo', en: 'Complete', tone: 'green' },
    link: 'https://example.com'
  };
  const html = renderProjectCard(project, 'pt');
  assert.doesNotMatch(html, /<b>x<\/b>/);
  assert.match(html, /&lt;b&gt;x&lt;\/b&gt;/);
});

test('renderServiceCard includes icon, locale title and description', () => {
  const service = {
    icon: '🌐',
    title: { pt: 'Título', en: 'Title' },
    description: { pt: 'Desc PT', en: 'Desc EN' }
  };
  const html = renderServiceCard(service, 'pt');
  assert.match(html, /Título/);
  assert.match(html, /Desc PT/);
});

test('renderCertificateCard shows a disabled placeholder when there is no link', () => {
  const certificate = { name: 'Curso X', image: 'a.svg', issuer: 'Plataforma Y', year: null, link: null };
  const html = renderCertificateCard(certificate, 'pt');
  assert.match(html, /Link em breve/);
  assert.doesNotMatch(html, /<a class="card-link"/);
});

test('renderCertificateCard shows the year and a real link when both are provided', () => {
  const certificate = { name: 'Curso X', image: 'a.svg', issuer: 'Plataforma Y', year: 2025, link: 'https://example.com/cert' };
  const html = renderCertificateCard(certificate, 'en');
  assert.match(html, /Plataforma Y · 2025/);
  assert.match(html, /View certificate/);
  assert.match(html, /href="https:\/\/example\.com\/cert"/);
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `node --test tests/render.test.js`
Expected: FAIL — `Cannot find module '../assets/js/render.js'`.

- [ ] **Step 3: Write `assets/js/render.js`**

```js
import { getLocaleField } from './i18n.js';

export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));
}

export function renderStatusBadge(status, locale) {
  const label = getLocaleField(status, locale);
  const tone = status?.tone ?? 'green';
  return `<span class="badge badge--${escapeHtml(tone)}">${escapeHtml(label)}</span>`;
}

export function renderTechTags(tags = []) {
  return tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
}

export function renderProjectCard(project, locale) {
  const description = getLocaleField(project.description, locale);
  return `<article class="card project-card">
    <div class="card-image" style="background-image:url('${escapeHtml(project.image)}')"></div>
    <div class="card-body">
      <h3>${escapeHtml(project.name)}</h3>
      ${renderStatusBadge(project.status, locale)}
      <p>${escapeHtml(description)}</p>
      <div class="tags">${renderTechTags(project.tags)}</div>
      <a class="card-link" href="${escapeHtml(project.link)}" target="_blank" rel="noopener">GitHub →</a>
    </div>
  </article>`;
}

export function renderProjects(projects, locale) {
  return projects.map((project) => renderProjectCard(project, locale)).join('');
}

export function renderServiceCard(service, locale) {
  const title = getLocaleField(service.title, locale);
  const description = getLocaleField(service.description, locale);
  return `<article class="card service-card">
    <div class="service-icon" aria-hidden="true">${service.icon}</div>
    <h3>${escapeHtml(title)}</h3>
    <p>${escapeHtml(description)}</p>
  </article>`;
}

export function renderServices(services, locale) {
  return services.map((service) => renderServiceCard(service, locale)).join('');
}

export function renderCertificateCard(certificate, locale) {
  const yearLabel = certificate.year ? ` · ${certificate.year}` : '';
  const linkHtml = certificate.link
    ? `<a class="card-link" href="${escapeHtml(certificate.link)}" target="_blank" rel="noopener">${locale === 'en' ? 'View certificate' : 'Ver certificado'} →</a>`
    : `<span class="card-link card-link--disabled">${locale === 'en' ? 'Link coming soon' : 'Link em breve'}</span>`;
  return `<article class="card certificate-card">
    <div class="card-image" style="background-image:url('${escapeHtml(certificate.image)}')"></div>
    <div class="card-body">
      <h3>${escapeHtml(certificate.name)}</h3>
      <p>${escapeHtml(certificate.issuer)}${yearLabel}</p>
      ${linkHtml}
    </div>
  </article>`;
}

export function renderCertificates(certificates, locale) {
  return certificates.map((certificate) => renderCertificateCard(certificate, locale)).join('');
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test tests/render.test.js`
Expected: PASS — 9 tests, 0 failures.

Run full suite to confirm nothing regressed: `npm test`
Expected: `tests 18`, `pass 18`, `fail 0` (9 from Task 3 + 9 from this task).

- [ ] **Step 5: Commit**

```bash
git add assets/js/render.js tests/render.test.js
git commit -m "feat: add pure card/badge/tag renderers with unit tests"
```

---

## Chunk 2: Presentation layer — markup, styles, interactivity, assets

### Task 5: i18n dictionaries (`pt.js`, `en.js`)

**Files:**
- Create: `assets/js/i18n/pt.js`
- Create: `assets/js/i18n/en.js`

> Implementation note (deviation from the spec's literal `.json` filenames): `fetch()` of local `.json` files is blocked by the browser's CORS policy when the site is opened directly via `file://` (works over `http(s)`, breaks for local testing without a server). Shipping the dictionaries as ES modules (`export const dict = {...}`) that `main.js` imports directly avoids `fetch()` entirely, keeps the "open `index.html`, no server required" workflow from the spec's verification section intact, and preserves the exact same behavior (two flat PT/EN string dictionaries, one `data-i18n` key per entry).

- [ ] **Step 1: Write `assets/js/i18n/pt.js`**

```js
export const dict = {
  'nav.menuToggle': '☰ Menu',
  'hero.comment': '// disponível para projetos freelance',
  'hero.cta': 'Ver projetos →',
  'hero.status': '⚡ 3 projetos em destaque',
  'sobre.label': '// sobre mim',
  'sobre.heading': 'Quem sou eu',
  'sobre.body': 'Estudante de Análise e Desenvolvimento de Sistemas no IFPI, com foco atual em Python e Django, expandindo para TypeScript, React Native e .NET. Gosto de resolver problemas reais com código.',
  'servicos.label': '// o que eu faço',
  'servicos.heading': 'Serviços',
  'projetos.label': '// projetos',
  'projetos.heading': 'Projetos em destaque',
  'certificados.label': '// certificados',
  'certificados.heading': 'Certificados',
  'contato.label': '// contato',
  'contato.heading': 'Vamos trabalhar juntos?',
  'footer.text': '© 2026 Nicolas Damasceno — feito com HTML, CSS e JS puro (e um pouco de teia de aranha 🕷️)'
};
```

- [ ] **Step 2: Write `assets/js/i18n/en.js`**

```js
export const dict = {
  'nav.menuToggle': '☰ Menu',
  'hero.comment': '// available for freelance projects',
  'hero.cta': 'See projects →',
  'hero.status': '⚡ 3 featured projects',
  'sobre.label': '// about me',
  'sobre.heading': 'Who I am',
  'sobre.body': 'Systems Analysis and Development student at IFPI, currently focused on Python and Django, expanding into TypeScript, React Native and .NET. I like solving real problems with code.',
  'servicos.label': '// what I do',
  'servicos.heading': 'Services',
  'projetos.label': '// projects',
  'projetos.heading': 'Featured projects',
  'certificados.label': '// certificates',
  'certificados.heading': 'Certificates',
  'contato.label': '// contact',
  'contato.heading': "Let's work together?",
  'footer.text': '© 2026 Nicolas Damasceno — built with plain HTML, CSS and JS (and a bit of spider web 🕷️)'
};
```

- [ ] **Step 3: Commit**

```bash
git add assets/js/i18n/pt.js assets/js/i18n/en.js
git commit -m "feat: add PT/EN static-text dictionaries"
```

---

### Task 6: Page markup (`index.html`)

**Files:**
- Create: `index.html`

- [ ] **Step 1: Write `index.html`**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nicolas Damasceno — Full Stack Developer</title>
  <meta name="description" content="Portfólio de Nicolas Damasceno, desenvolvedor full stack disponível para projetos freelance." />
  <meta property="og:title" content="Nicolas Damasceno — Full Stack Developer" />
  <meta property="og:description" content="Portfólio de Nicolas Damasceno, desenvolvedor full stack disponível para projetos freelance." />
  <meta property="og:type" content="website" />
  <link rel="icon" type="image/svg+xml" href="assets/img/favicon.svg" />
  <link rel="stylesheet" href="assets/css/style.css" />
</head>
<body>
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>

  <header class="hero" id="home">
    <div class="editor-window">
      <div class="title-bar">
        <span class="dot dot--red"></span>
        <span class="dot dot--yellow"></span>
        <span class="dot dot--green"></span>
        <span class="title-bar__name">nicolas-damasceno — portfolio</span>
        <button id="locale-toggle" class="locale-toggle" type="button" aria-label="Switch language">EN</button>
      </div>

      <button id="menu-toggle" class="menu-toggle" type="button" aria-expanded="false" aria-controls="editor-sidebar" data-i18n="nav.menuToggle">☰ Menu</button>

      <div class="editor-body">
        <nav class="editor-sidebar" id="editor-sidebar">
          <p class="editor-sidebar__label">EXPLORER</p>
          <a class="file active" href="#home">home.jsx</a>
          <a class="file" href="#sobre">sobre.md</a>
          <a class="file" href="#projetos">projetos.md</a>
          <a class="file" href="#certificados">certificados.md</a>
          <a class="file" href="#contato">contato.md</a>
        </nav>

        <div class="editor-code" id="conteudo">
          <p class="code-comment" data-i18n="hero.comment">// disponível para projetos freelance</p>
          <p class="code-line"><span class="kw">const</span> <span class="var">nicolas</span> = {</p>
          <p class="code-line code-line--indent"><span class="prop">nome</span>: <span class="str">"Nicolas Damasceno"</span>,</p>
          <p class="code-line code-line--indent"><span class="prop">papel</span>: <span class="str">"Full Stack Developer"</span>,</p>
          <p class="code-line code-line--indent"><span class="prop">stack</span>: [<span class="str">"Python"</span>, <span class="str">"Django"</span>, <span class="str">"TypeScript"</span>],</p>
          <p class="code-line">};</p>
          <a class="cta-button" href="#projetos" data-i18n="hero.cta">Ver projetos →</a>
        </div>
      </div>

      <div class="status-bar">
        <span>⎇ main</span>
        <span>UTF-8</span>
        <span data-i18n="hero.status">⚡ 3 projetos em destaque</span>
      </div>
    </div>
  </header>

  <main>
    <section class="section" id="sobre">
      <p class="section-label" data-i18n="sobre.label">// sobre mim</p>
      <h2 data-i18n="sobre.heading">Quem sou eu</h2>
      <p class="section-text" data-i18n="sobre.body">Estudante de Análise e Desenvolvimento de Sistemas no IFPI, com foco atual em Python e Django, expandindo para TypeScript, React Native e .NET. Gosto de resolver problemas reais com código.</p>
      <ul class="tech-grid" aria-label="Tecnologias">
        <li class="tag">Python</li>
        <li class="tag">Django</li>
        <li class="tag">TypeScript</li>
        <li class="tag">JavaScript</li>
        <li class="tag">React Native</li>
        <li class="tag">C# / .NET</li>
        <li class="tag">PostgreSQL</li>
        <li class="tag">HTML / CSS</li>
        <li class="tag">Git</li>
      </ul>
    </section>

    <section class="section section--alt" id="servicos">
      <p class="section-label" data-i18n="servicos.label">// o que eu faço</p>
      <h2 data-i18n="servicos.heading">Serviços</h2>
      <div class="grid" id="services-grid"></div>
      <noscript>
        <ul class="fallback-list">
          <li>Aplicações web full stack</li>
          <li>Apps mobile (React Native)</li>
          <li>Sistemas com banco de dados</li>
          <li>Automações simples em Python</li>
        </ul>
      </noscript>
    </section>

    <section class="section" id="projetos">
      <p class="section-label" data-i18n="projetos.label">// projetos</p>
      <h2 data-i18n="projetos.heading">Projetos em destaque</h2>
      <div class="grid" id="projects-grid"></div>
      <noscript>
        <ul class="fallback-list">
          <li><a href="https://github.com/NicolasDamasceno/flanelinha-app">flanelinha-app</a></li>
          <li><a href="https://github.com/NicolasDamasceno/Projeto-Heimdall">Projeto Heimdall</a></li>
          <li><a href="https://github.com/NicolasDamasceno/DotNet-Project-Workout">FinShark</a></li>
        </ul>
      </noscript>
    </section>

    <section class="section section--alt" id="certificados">
      <p class="section-label" data-i18n="certificados.label">// certificados</p>
      <h2 data-i18n="certificados.heading">Certificados</h2>
      <div class="grid" id="certificates-grid"></div>
      <noscript>
        <ul class="fallback-list">
          <li>JavaScript Algorithms and Data Structures — freeCodeCamp</li>
        </ul>
      </noscript>
    </section>

    <section class="section" id="contato">
      <p class="section-label" data-i18n="contato.label">// contato</p>
      <h2 data-i18n="contato.heading">Vamos trabalhar juntos?</h2>
      <div class="contact-links">
        <a class="contact-link" href="mailto:nicolasbackprogrammer@gmail.com">✉️ E-mail</a>
        <a class="contact-link" href="https://www.linkedin.com/in/nicolas-damasceno-045108342/" target="_blank" rel="noopener">💼 LinkedIn</a>
        <a class="contact-link" href="https://github.com/NicolasDamasceno" target="_blank" rel="noopener">🐙 GitHub</a>
        <a class="contact-link" href="https://wa.me/5586994271037" target="_blank" rel="noopener">💬 WhatsApp</a>
      </div>
    </section>
  </main>

  <footer class="footer">
    <p data-i18n="footer.text">© 2026 Nicolas Damasceno — feito com HTML, CSS e JS puro (e um pouco de teia de aranha 🕷️)</p>
  </footer>

  <script type="module" src="assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open the file in a browser and confirm it loads without console errors**

The dynamic sections (`#services-grid`, `#projects-grid`, `#certificates-grid`) will be empty until Task 8 (`main.js`) exists — that's expected at this point. Confirm: page renders, hero window and all static section headings/text are visible, `<noscript>` fallback lists are present in the DOM (View Source) but hidden (JS is enabled).

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add portfolio page markup"
```

---

### Task 7: Stylesheet (`style.css`)

**Files:**
- Create: `assets/css/style.css`

- [ ] **Step 1: Write `assets/css/style.css`**

```css
:root {
  --bg-base: #1e1e1e;
  --bg-alt: #161618;
  --bg-panel: #252526;
  --bg-titlebar: #323233;
  --border: #333333;
  --text-primary: #ffffff;
  --text-body: #d4d4d4;
  --text-muted: #9d9d9d;
  --accent-blue: #569cd6;
  --accent-green: #6a9955;
  --accent-orange: #ce9178;
  --accent-yellow: #dcdcaa;
  --button-primary: #0e639c;
  --button-primary-hover: #1177bb;
  --font-mono: 'Fira Code', Consolas, 'Courier New', monospace;
  --font-sans: 'Segoe UI', system-ui, sans-serif;
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  background: var(--bg-base);
  color: var(--text-body);
  font-family: var(--font-sans);
  line-height: 1.6;
}

.skip-link {
  position: absolute;
  left: -999px;
  top: 0;
  background: var(--button-primary);
  color: #fff;
  padding: 0.5rem 1rem;
  z-index: 100;
}
.skip-link:focus { left: 0; }

/* ===== HERO / EDITOR WINDOW ===== */
.hero { padding: 2rem 1rem; }

.editor-window {
  max-width: 960px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  font-family: var(--font-mono);
}

.title-bar {
  background: var(--bg-titlebar);
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.dot { width: 12px; height: 12px; border-radius: 50%; display: inline-block; }
.dot--red { background: #ff5f56; }
.dot--yellow { background: #ffbd2e; }
.dot--green { background: #27c93f; }
.title-bar__name { color: var(--text-muted); font-size: 0.75rem; margin-left: 0.75rem; }
.locale-toggle {
  margin-left: auto;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-body);
  border-radius: 4px;
  padding: 0.25rem 0.6rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  cursor: pointer;
}
.locale-toggle:hover, .locale-toggle:focus-visible { border-color: var(--accent-blue); color: var(--accent-blue); }

.menu-toggle {
  display: none;
  width: 100%;
  background: var(--bg-panel);
  color: var(--text-body);
  border: none;
  border-bottom: 1px solid var(--border);
  padding: 0.6rem 1rem;
  text-align: left;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  cursor: pointer;
}

.editor-body { display: flex; min-height: 280px; }

.editor-sidebar {
  background: var(--bg-panel);
  width: 170px;
  flex-shrink: 0;
  padding: 0.75rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.editor-sidebar__label { color: var(--text-muted); font-size: 0.65rem; letter-spacing: 0.08em; margin: 0 0 0.5rem 0.5rem; }
.editor-sidebar .file {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.75rem;
  padding: 0.35rem 0.5rem;
  border-left: 2px solid transparent;
  border-radius: 2px;
}
.editor-sidebar .file:hover, .editor-sidebar .file:focus-visible { background: rgba(255, 255, 255, 0.05); color: var(--text-primary); }
.editor-sidebar .file.active { color: var(--text-primary); border-left-color: var(--accent-blue); }

.editor-code { background: var(--bg-base); padding: 1.5rem; flex: 1; font-size: 0.85rem; }
.code-comment { color: var(--accent-green); margin: 0 0 0.75rem; }
.code-line { margin: 0.15rem 0; }
.code-line--indent { padding-left: 1.25rem; }
.kw { color: var(--accent-blue); }
.prop { color: #9cdcfe; }
.str { color: var(--accent-orange); }
.cta-button {
  display: inline-block;
  margin-top: 1.25rem;
  background: var(--button-primary);
  color: #fff;
  text-decoration: none;
  padding: 0.6rem 1.1rem;
  border-radius: 4px;
  font-size: 0.8rem;
}
.cta-button:hover, .cta-button:focus-visible { background: var(--button-primary-hover); }

.status-bar { background: #007acc; color: #fff; font-size: 0.65rem; padding: 0.35rem 1rem; display: flex; gap: 1.25rem; }

.editor-code[data-typing='true'] .code-line:last-of-type::after {
  content: '▍';
  animation: blink 1s steps(2) infinite;
  color: var(--accent-blue);
}
@keyframes blink { 50% { opacity: 0; } }

/* ===== SECTIONS ===== */
.section { max-width: 960px; margin: 0 auto; padding: 3rem 1.5rem; }
.section--alt { background: var(--bg-alt); max-width: none; }
.section--alt > * { max-width: 960px; margin-left: auto; margin-right: auto; }
.section-label { color: var(--accent-green); font-family: var(--font-mono); font-size: 0.75rem; margin: 0 0 0.5rem; }
.section h2 { color: var(--text-primary); margin: 0 0 1.25rem; font-size: 1.6rem; }
.section-text { max-width: 65ch; }

.tech-grid { list-style: none; display: flex; flex-wrap: wrap; gap: 0.5rem; padding: 0; margin: 1.5rem 0 0; }

.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; }

.card { background: var(--bg-panel); border-radius: 10px; overflow: hidden; border: 1px solid var(--border); }
.card-image { aspect-ratio: 16 / 10; background-color: var(--bg-titlebar); background-size: cover; background-position: center; }
.card-body { padding: 1rem 1.25rem 1.25rem; }
.card-body h3 { color: var(--text-primary); margin: 0 0 0.5rem; font-size: 1rem; }
.card-body p { margin: 0.5rem 0; font-size: 0.85rem; }
.card-link { display: inline-block; margin-top: 0.5rem; color: var(--accent-blue); font-family: var(--font-mono); font-size: 0.75rem; text-decoration: none; }
.card-link:hover, .card-link:focus-visible { text-decoration: underline; }
.card-link--disabled { color: var(--text-muted); cursor: default; }

.service-card { padding: 1.25rem; text-align: left; }
.service-icon { font-size: 1.5rem; margin-bottom: 0.5rem; }

.tag {
  display: inline-block;
  background: rgba(86, 156, 214, 0.15);
  color: var(--accent-blue);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  margin: 0.15rem 0.3rem 0.15rem 0;
}

.badge { display: inline-block; font-family: var(--font-mono); font-size: 0.7rem; padding: 0.2rem 0.6rem; border-radius: 999px; margin-bottom: 0.5rem; }
.badge--green { background: rgba(106, 153, 85, 0.2); color: var(--accent-green); }
.badge--yellow { background: rgba(220, 220, 170, 0.2); color: var(--accent-yellow); }
.badge--blue { background: rgba(86, 156, 214, 0.2); color: var(--accent-blue); }

.fallback-list { font-size: 0.9rem; }
.fallback-list a { color: var(--accent-blue); }

.contact-links { display: flex; flex-wrap: wrap; gap: 0.75rem; }
.contact-link {
  background: var(--bg-panel);
  border: 1px solid var(--border);
  color: var(--text-body);
  text-decoration: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
}
.contact-link:hover, .contact-link:focus-visible { border-color: var(--accent-blue); color: var(--accent-blue); }

.footer { text-align: center; padding: 1.5rem; font-size: 0.75rem; color: var(--text-muted); }

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .menu-toggle { display: block; }
  .editor-body { flex-direction: column; }
  .editor-sidebar { width: 100%; flex-direction: row; flex-wrap: wrap; display: none; }
  .editor-sidebar.open { display: flex; }
  .editor-sidebar__label { display: none; }
}

/* ===== REDUCED MOTION ===== */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .editor-code[data-typing='true'] .code-line:last-of-type::after { animation: none; }
}

/* ===== FOCUS VISIBILITY ===== */
a:focus-visible, button:focus-visible { outline: 2px solid var(--accent-blue); outline-offset: 2px; }
```

- [ ] **Step 2: Open `index.html` in a browser and visually confirm**

Dark editor-window hero renders with title bar dots, sidebar file list and syntax-highlighted code block; sections below alternate `--bg-base`/`--bg-alt`; tags/badges show pill shapes. Resize to <768px width and confirm the sidebar hides behind the "☰ Menu" button and the layout doesn't overflow horizontally.

- [ ] **Step 3: Commit**

```bash
git add assets/css/style.css
git commit -m "feat: add VSCode-inspired dark theme stylesheet"
```

---

### Task 8: Orchestration script (`main.js`)

**Files:**
- Create: `assets/js/main.js`

- [ ] **Step 1: Write `assets/js/main.js`**

```js
import { services, projects, certificates } from './data.js';
import { resolveInitialLocale, loadStoredLocale, saveLocale, applyStaticI18n } from './i18n.js';
import { renderServices, renderProjects, renderCertificates } from './render.js';
import { dict as ptDict } from './i18n/pt.js';
import { dict as enDict } from './i18n/en.js';

const DICTS = { pt: ptDict, en: enDict };

let currentLocale = resolveInitialLocale(loadStoredLocale(window.localStorage));

function renderDynamicSections(locale) {
  document.getElementById('services-grid').innerHTML = renderServices(services, locale);
  document.getElementById('projects-grid').innerHTML = renderProjects(projects, locale);
  document.getElementById('certificates-grid').innerHTML = renderCertificates(certificates, locale);
}

function applyLocale(locale) {
  currentLocale = locale;
  document.documentElement.lang = locale === 'en' ? 'en' : 'pt-BR';
  applyStaticI18n(document, DICTS[locale]);
  renderDynamicSections(locale);
  const toggle = document.getElementById('locale-toggle');
  toggle.textContent = locale === 'en' ? 'PT' : 'EN';
  toggle.setAttribute('aria-label', locale === 'en' ? 'Mudar para português' : 'Switch to English');
}

document.getElementById('locale-toggle').addEventListener('click', () => {
  const next = currentLocale === 'en' ? 'pt' : 'en';
  saveLocale(window.localStorage, next);
  applyLocale(next);
});

const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('editor-sidebar');
menuToggle.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

sidebar.querySelectorAll('.file').forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.querySelectorAll('.file').forEach((f) => f.classList.remove('active'));
    link.classList.add('active');
    if (window.matchMedia('(max-width: 768px)').matches) {
      sidebar.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  document.getElementById('conteudo').setAttribute('data-typing', 'true');
}

applyLocale(currentLocale);
```

This file is DOM-orchestration glue (event wiring, `localStorage`/`matchMedia` access) — it composes the already-unit-tested `i18n.js`/`render.js` functions and is verified manually in the browser (Task 11), consistent with the spec's "no test framework, manual verification" decision for anything that isn't pure logic.

- [ ] **Step 2: Open `index.html` in a browser and confirm end-to-end behavior**

- Services/Projects/Certificates grids populate with real cards (no longer empty)
- Clicking the `EN`/`PT` button in the title bar swaps all static text AND re-renders the three grids in the new language
- Clicking a sidebar file link scrolls smoothly to that section and marks it `active`
- Below 768px width, the "☰ Menu" button toggles the sidebar open/closed
- No errors in the browser console

- [ ] **Step 3: Commit**

```bash
git add assets/js/main.js
git commit -m "feat: wire up locale toggle, dynamic rendering and hero interactions"
```

---

### Task 9: Placeholder and favicon assets

**Files:**
- Create: `assets/img/favicon.svg`
- Create: `assets/img/projects/placeholder.svg`
- Create: `assets/img/certificates/placeholder.svg`

- [ ] **Step 1: Write `assets/img/favicon.svg`**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#1e1e1e"/>
  <text x="16" y="21" font-family="Consolas, monospace" font-size="13" fill="#569cd6" text-anchor="middle">&lt;/&gt;</text>
</svg>
```

- [ ] **Step 2: Write `assets/img/projects/placeholder.svg`**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250">
  <rect width="400" height="250" fill="#252526"/>
  <text x="200" y="115" font-family="Consolas, monospace" font-size="14" fill="#6a9955" text-anchor="middle">// screenshot em breve</text>
  <text x="200" y="145" font-family="Consolas, monospace" font-size="26" fill="#569cd6" text-anchor="middle">&lt;/&gt;</text>
</svg>
```

- [ ] **Step 3: Write `assets/img/certificates/placeholder.svg`**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250">
  <rect width="400" height="250" fill="#252526"/>
  <text x="200" y="125" font-family="Consolas, monospace" font-size="14" fill="#dcdcaa" text-anchor="middle">CERTIFICADO EM BREVE</text>
</svg>
```

- [ ] **Step 4: Reload `index.html` and confirm placeholders render**

The favicon shows in the browser tab; every project/certificate card shows the corresponding placeholder graphic instead of a broken-image icon.

- [ ] **Step 5: Commit**

```bash
git add assets/img/favicon.svg assets/img/projects/placeholder.svg assets/img/certificates/placeholder.svg
git commit -m "feat: add favicon and placeholder graphics for projects/certificates"
```

---

### Task 10: Rewrite `README.md`

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Replace the README content**

```markdown
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
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: rewrite README for the portfolio site"
```

---

### Task 11: Manual verification pass (per spec's Verificação checklist)

**Files:** none (verification only)

- [ ] **Step 1: Run the full automated test suite**

Run: `npm test`
Expected: all `i18n.js`/`render.js` tests pass (18 tests, 0 failures).

- [ ] **Step 2: Serve the site locally and open it in a browser**

```bash
npx --yes serve . -l 4173
```

Open `http://localhost:4173` (via the environment's browser-opening tool, or ask the human to open it) and, for **both** PT and EN (toggle via the title-bar button):

- Confirm all 6 sections are present and readable: Hero, Sobre, Serviços, Projetos, Certificados, Contato
- Confirm the 3 project cards show correct name/description/tags/status badge/GitHub link, and the FinShark card visibly shows the "🚧 in progress" badge
- Confirm the certificate card shows the "link em breve"/"link coming soon" state (no real link/year yet)
- Confirm all contact links resolve to the right target: `mailto:nicolasbackprogrammer@gmail.com`, LinkedIn profile, GitHub profile, `wa.me/5586994271037`

- [ ] **Step 3: Responsive check**

Using browser devtools, test at 375px (mobile) and 1440px (desktop) widths. Confirm: no horizontal overflow/scrollbar at either width, sidebar collapses into the "☰ Menu" button below 768px and reopens on click, all card grids reflow to a single column on mobile.

- [ ] **Step 4: No-JS fallback check**

Disable JavaScript in the browser (devtools → Settings → Debugger, or an extension) and reload. Confirm the `<noscript>` fallback lists for Serviços/Projetos/Certificados are visible instead of empty grids.

- [ ] **Step 5: Reduced-motion check**

Enable "prefers-reduced-motion: reduce" via devtools' rendering emulation. Reload and confirm the hero code block's blinking cursor no longer animates and scrolling via sidebar links jumps instantly instead of smooth-scrolling.

- [ ] **Step 6: Accessibility/SEO pass**

Run Lighthouse (Chrome DevTools → Lighthouse tab) against the served page. Report the Accessibility, Performance and SEO scores; investigate and fix any Accessibility score below 90 (common culprits at this stage: color contrast, missing `alt` text — none of the images here are informational `<img>` tags, they're CSS backgrounds, so add `role="img"` + `aria-label` to `.card-image` divs if Lighthouse flags them).

- [ ] **Step 7: Report results and flag anything requiring human visual judgment**

Summarize pass/fail for each check above. Explicitly flag to the user: final aesthetic judgment (does the VSCode theme "feel right", are placeholder graphics acceptable for now) is a subjective call reserved for the human, not something to self-certify as "good" — this task confirms the site is *functionally* correct.

- [ ] **Step 8: Final commit (if any fixes were made during verification)**

```bash
git add -A
git commit -m "fix: address issues found during manual verification"
```
