"use client";

import { useTranslation } from 'react-i18next';
import './i18n';

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="text-center mt-10">
    <h1 className="text-3xl font-bold">{t('welcome')}</h1>

    <div className="mt-4 space-x-4">
      <button onClick={() => i18n.changeLanguage('en')} className="underline">EN</button>
      <button onClick={() => i18n.changeLanguage('mk')} className="underline">MK</button>
      <button onClick={() => i18n.changeLanguage('de')} className="underline">DE</button>
      <button onClick={() => i18n.changeLanguage('al')} className="underline">AL</button>
      <button onClick={() => i18n.changeLanguage('fr')} className="underline">FR</button>
    </div>
  </div>
  );
}
