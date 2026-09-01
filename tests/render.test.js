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
