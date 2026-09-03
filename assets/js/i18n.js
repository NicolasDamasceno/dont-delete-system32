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
 * exercised manually in the browser, not unit tested.
 */
export function applyStaticI18n(root, dict) {
  root.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      el.textContent = dict[key];
    }
  });
}
