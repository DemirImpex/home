'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "../../public/locales/en.json";
import mk from "../../public/locales/mk.json";
import de from "../../public/locales/de.json";
import al from "../../public/locales/al.json";
import fr from "../../public/locales/fr.json";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'mk', 'de', 'al', 'fr'],
    // debug: process.env.NODE_ENV === 'development',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: en,
        },
        mk: {
            translation: mk,
        },
        de: {
            translation: de,
        },
        al: {
            translation: al,
        },
        fr: {
            translation: fr,
        }
    },
    // backend: {
    //   loadPath: '/locales/{{lng}}/{{ns}}.json',
    // },
  });

export default i18n;
