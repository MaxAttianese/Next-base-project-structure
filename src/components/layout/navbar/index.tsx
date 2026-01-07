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
import Link from 'next/link';
import { NavbarMobile } from './navbarMobile';
import { Logo } from '@/components/Logo';

export function Navbar() {
  const t = useTranslations('navbar');
  return (
    <header className="w-full py-4 px-2 md:p-4 shadow-sm">
      <nav className="w-full flex items-center justify-between group">
        <div className="flex items-center gap-4 w-full">
          <Link href="/" className="peer">
            <Logo />
          </Link>
          <span className="hidden md:flex h-8 border-l border-foreground opacity-0 transition-all duration-300 ease-out peer-hover:opacity-100 cursor-default"></span>
          <small className="hidden md:flex w-full opacity-0 -translate-x-3 transition-all duration-300 ease-out peer-hover:opacity-100 peer-hover:translate-x-0 cursor-default">
            {t('description')}
          </small>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) =>
                !!link.children?.length ? (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuTrigger>{t(link.label)}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul
                        className={`grid gap-2 md:grid-cols-2 ${navLinks.length > 2 ? 'w-100' : 'w-75'}`}
                      >
                        {link.children.map((sublink) => (
                          <li key={sublink.href}>
                            <Link
                              href={sublink.href}
                              className="data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4"
                            >
                              <div className="text-sm leading-none font-medium">
                                {t(sublink.label)}
                              </div>
                              <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                {sublink.description ? t(sublink.description) : ''}
                              </p>
                            </Link>
                          </li>
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
