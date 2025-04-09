'use client';

import Home from '@/components/Home/Home';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Page() {
  return (
    <>
      <LanguageSwitcher />
      <Home />
    </>
  );
}
