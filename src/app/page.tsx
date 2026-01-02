import { ThemeSwitch } from '@/components/theme/ThemeSwitch';
import LanguageSwitcher from '@/components/translate/LanguageSwitcher';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('homePage');
  return (
    <>
      <h1>{t('title')}</h1>
      <ThemeSwitch />
      <LanguageSwitcher />
    </>
  );
}
