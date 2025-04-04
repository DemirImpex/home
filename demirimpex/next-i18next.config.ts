/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'mk', 'de', 'al', 'fr'],
      localeDetection: true,
      reloadOnPrerender: true,
    },
    reloadOnPrerender: process.env.NODE_ENV === 'development',
  };
  