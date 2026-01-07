import { NavLinks } from '@/nav-links';

export const navLinks: NavLinks = [
  {
    href: '/about',
    label: 'about.label',
    description: 'about.description',
  },
  {
    href: '/contacts',
    label: 'contacts.label',
    description: 'contacts.description',
    children: [
      {
        href: 'mailto:mail@example.com',
        label: 'email.label',
        description: 'email.description',
      },
      {
        href: 'tel:+1234567890',
        label: 'tel.label',
        description: 'tel.description',
      },
    ],
  },
];
