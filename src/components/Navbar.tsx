import Image from 'next/image';
import Link from 'next/link';
import { ThemeSwitch } from './theme/ThemeSwitch';
import LanguageSwitcher from './translate/LanguageSwitcher';
import { ButtonGroup } from './ui/button-group';

export function Navbar() {
  return (
    <header className="w-full py-4 px-2 md:p-4 shadow-sm">
      <nav className="w-full flex items-center justify-between">
        <Image src="/next.svg" width={100} height={30} alt="Logo" />
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <ButtonGroup>
            <LanguageSwitcher />
            <ThemeSwitch />
          </ButtonGroup>
        </div>
        <div className="block md:hidden ">Mobile</div>
      </nav>
    </header>
  );
}
