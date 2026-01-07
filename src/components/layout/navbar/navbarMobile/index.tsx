import { Logo } from '@/components/Logo';
import { SettingsToggleGroup } from '@/components/SettingsToggleGroup';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Separator } from '@/components/ui/separator';
import { navLinks } from '@/config/navigation';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

export function NavbarMobile() {
  const t = useTranslations('navbar');
  return (
    <div className="block md:hidden">
      <Drawer direction="top" handleOnly>
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="pb-2" inert>
            <DrawerTitle className="flex items-center justify-center">
              <Logo />
            </DrawerTitle>
            <DrawerDescription>{t('description')}</DrawerDescription>
          </DrawerHeader>
          <Accordion type="single" collapsible className="flex flex-col px-4 overflow-y-scroll">
            {navLinks.map((link, index) =>
              !!link.children?.length ? (
                <AccordionItem value={link.label} key={link.href}>
                  <AccordionTrigger className="px-2">{t(link.label)}</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3 text-center px-4">
                    {link.children.map((sublink, index) => (
                      <React.Fragment key={sublink.href}>
                        {index !== 0 && <Separator />}
                        <Link href={sublink.href}>{t(sublink.label)}</Link>
                      </React.Fragment>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <React.Fragment key={link.href}>
                  <Link href={link.href} className="px-2 py-4 text-sm font-medium">
                    {t(link.label)}
                  </Link>
                  {index !== navLinks.length - 1 && <Separator />}
                </React.Fragment>
              ),
            )}
          </Accordion>
          <DrawerFooter className="flex flex-row justify-between">
            <SettingsToggleGroup />
            <DrawerClose asChild>
              <Button className="self-end">
                <XIcon />
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
