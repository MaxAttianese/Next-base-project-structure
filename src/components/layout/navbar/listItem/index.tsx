import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import Link from 'next/link';

type ListItemProps = {
  title: string;
  href: string;
  description?: string;
};

export function ListItem({ title, href, description }: ListItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          {description && (
            <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
