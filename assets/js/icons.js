/**
 * Inline SVG icon set — replaces emoji across the site with consistent,
 * theme-matched line icons. Each entry is a ready-to-inject <svg> string
 * (class="icon", currentColor-based) so it can be dropped straight into
 * template strings built by render.js or into static index.html markup.
 */
export const icons = {
  web: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 3.5 3 14.5 0 18c-3-3.5-3-14.5 0-18Z"/></svg>',
  mobile: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></svg>',
  database: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',
  automation: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>',
  check: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
  progress: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 22 20 2 20 Z"/><line x1="12" y1="9" x2="12" y2="14"/><circle cx="12" cy="17" r="1" style="fill:currentColor;stroke:none"/></svg>',
  pair: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3 20c0-3 2.5-5 6-5s6 2 6 5"/><path d="M13.5 15.2c2.6.4 4.5 2.2 4.5 4.8"/></svg>'
};

export const TONE_ICONS = {
  green: icons.check,
  yellow: icons.progress,
  blue: icons.pair
};
