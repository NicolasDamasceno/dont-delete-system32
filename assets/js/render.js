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
