import { Logo } from '@/components/Logo';
import { SettingsToggleGroup } from '@/components/SettingsToggleGroup';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Menu as MenuIcon } from 'lucide-react';

export function NavbarMobile() {
  return (
    <div className="block md:hidden ">
      <Drawer direction="top">
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="flex items-center justify-center">
              <Logo />
            </DrawerTitle>
            {/* <DrawerDescription>{t('description')}</DrawerDescription> */}
          </DrawerHeader>
          {/* <div className="flex flex-col gap-4 p-4 items-center">
            <Link href="/about">{t('links.about')}</Link>
            <Separator />
            <Link href="/contact">{t('links.contact')}</Link>
          </div> */}
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
