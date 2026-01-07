export type NavLink = {
  href: string;
  label: string;
  description?: string;
  children?: Omit<NavLink, 'children'>[];
};

export type NavLinks = NavLink[];
