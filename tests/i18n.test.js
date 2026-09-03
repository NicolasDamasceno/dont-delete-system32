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
