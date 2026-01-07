import { SettingsToggleGroup } from '@/components/SettingsToggleGroup';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { NavbarMobile } from './navbarMobile';

export function Navbar() {
  const t = useTranslations('navbar');
  return (
    <header className="w-full py-4 px-2 md:p-4 shadow-sm">
      <nav className="w-full flex items-center justify-between">
        <Link href="/">
          <Image src="/next.svg" width={100} height={30} alt="Logo" />
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="/about">{t('links.about')}</Link>
          <Link href="/contact">{t('links.contact')}</Link>
          <SettingsToggleGroup />
        </div>
        <NavbarMobile />
      </nav>
    </header>
  );
}
