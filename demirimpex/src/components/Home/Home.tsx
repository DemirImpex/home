'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { homeTranslations } from './translations';

type Language = keyof typeof homeTranslations;

export default function Home() {
  const { language } = useLanguage();
  const currentContent = homeTranslations[language as Language];

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{currentContent.title}</h1>
        <h2 className="text-2xl text-gray-600 mb-6">{currentContent.subtitle}</h2>
        <p className="text-lg mb-8">{currentContent.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentContent.features.map((feature: string, index: number) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg">
              <p className="text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 