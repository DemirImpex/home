'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 flex gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md ${
          language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('mk')}
        className={`px-3 py-1 rounded-md ${
          language === 'mk' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        MK
      </button>
    </div>
  );
} 