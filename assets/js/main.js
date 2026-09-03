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
