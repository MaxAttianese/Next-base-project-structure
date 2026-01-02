'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTranslations } from 'next-intl';

const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'it', label: 'IT' },
];

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState('en');
  const router = useRouter();
  const t = useTranslations('common');

  useEffect(() => {
    const match = document.cookie.match(/locale=([^;]+)/);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (match) setLocale(match[1]);
  }, []);

  const handleChange = (newLocale: string) => {
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
    setLocale(newLocale);
    router.refresh();
  };

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger className="w-32">
        <SelectValue placeholder={t('selectLanguage')} />
      </SelectTrigger>
      <SelectContent>
        {SUPPORTED_LANGUAGES.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
