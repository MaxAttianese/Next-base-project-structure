import { SettingsToggleGroup } from '@/components/SettingsToggleGroup';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { navLinks } from '@/config/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ListItem } from './listItem';
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
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) =>
                !!link.children?.length ? (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuTrigger>{t(link.label)}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul
                        className={`grid gap-2 md:grid-cols-2 ${link.children.length > 2 ? 'w-100' : 'w-75'}`}
                      >
                        {link.children.map((link) => (
                          <ListItem
                            key={link.href}
                            href={link.href}
                            title={t(link.label)}
                            description={t(link.description ?? '')}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuLink asChild key={link.href} className="px-4 font-medium">
                    <Link href={link.href}>{t(link.label)}</Link>
                  </NavigationMenuLink>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
          <SettingsToggleGroup />
        </div>
        <NavbarMobile />
      </nav>
    </header>
  );
}
