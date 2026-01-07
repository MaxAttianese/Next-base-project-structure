'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
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
    if (match) setLocale(match[1]);
  }, []);

  const handleChange = (newLocale: string) => {
    // eslint-disable-next-line react-hooks/immutability
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
    setLocale(newLocale);
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{locale.toUpperCase()}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t('language')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {SUPPORTED_LANGUAGES.map((lang) => (
          <DropdownMenuCheckboxItem
            key={lang.code}
            checked={locale === lang.code}
            onCheckedChange={() => handleChange(lang.code)}
          >
            {lang.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
