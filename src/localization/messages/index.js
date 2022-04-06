export let Locales = {
  en: 'en',
  fr: 'fr',
  es: 'es',
};

export function translationForLocale(locale) {
  switch (locale) {
    case Locales.en:
      return require('./en_US.json');
    case Locales.fr:
      return require('./fr.json');
    case Locales.es:
      return require('./es.json');
    default:
      return require('./en_US.json');
  }
}
