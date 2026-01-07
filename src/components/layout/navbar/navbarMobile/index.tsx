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
import { Menu as MenuIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SettingsToggleGroup } from '@/components/SettingsToggleGroup';
import { Separator } from '@/components/ui/separator';

export function NavbarMobile() {
  const t = useTranslations('navbar');
  return (
    <div className="block md:hidden ">
      <Drawer direction="top">
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="flex items-center justify-center">
              <Image src="/next.svg" width={100} height={30} alt="Logo" />
            </DrawerTitle>
            <DrawerDescription>{t('description')}</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-4 p-4 items-center">
            <Link href="/about">{t('links.about')}</Link>
            <Separator />
            <Link href="/contact">{t('links.contact')}</Link>
          </div>
          <DrawerFooter className="flex flex-row justify-between">
            <SettingsToggleGroup />
            <DrawerClose asChild>
              <Button className="self-end">X</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
