## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Next.js Base Project

Starter template for modern Next.js projects, with opinionated setup for rapid development.

## Main Libraries & Versions

| Library                  | Version  | Purpose                           |
| ------------------------ | -------- | --------------------------------- |
| next                     | 16.1.0   | React framework                   |
| react                    | 19.2.3   | UI library                        |
| react-dom                | 19.2.3   | React DOM renderer                |
| next-intl                | ^4.6.1   | Internationalization (i18n)       |
| next-themes              | ^0.4.6   | Theme switching (dark/light)      |
| @radix-ui/react-select   | ^2.2.6   | Accessible select component       |
| @radix-ui/react-slot     | ^1.2.4   | Slot utility for composition      |
| @radix-ui/react-switch   | ^1.2.6   | Accessible switch component       |
| lucide-react             | ^0.562.0 | Icon library                      |
| class-variance-authority | ^0.7.1   | Utility for variant-based styling |
| clsx                     | ^2.1.1   | Conditional classNames            |
| tailwind-merge           | ^3.4.0   | Merge Tailwind classes            |
| tailwindcss              | ^4       | Utility-first CSS framework       |
| tw-animate-css           | ^1.4.0   | Tailwind animation utilities      |

### Dev & Tooling

| Library     | Version | Purpose                |
| ----------- | ------- | ---------------------- |
| typescript  | ^5      | Type safety            |
| eslint      | ^9      | Linting                |
| prettier    | ^3.7.4  | Code formatting        |
| husky       | ^8.0.0  | Git hooks              |
| lint-staged | ^16.2.7 | Lint only staged files |

## Project Structure

```
src/
	app/           # Next.js app directory (entrypoint, layout, global styles)
	components/    # Shared UI and theme components
	i18n/          # Internationalization config and messages
	lib/           # Utility functions
public/          # Static assets
```

## Usage Notes

- **Update dependencies**: Check the table above and update versions as needed for your project.
- **i18n**: Uses `next-intl` with language files in `src/i18n/messages/`.
- **Themes**: Dark/light mode via `next-themes` and custom ThemeSwitch component.
- **UI**: Radix UI primitives and Lucide icons for accessible, modern UI.
- **Styling**: Tailwind CSS (v4), with custom config and utility helpers.
- **Lint/Format**: Pre-configured ESLint, Prettier, Husky, and lint-staged.

## Getting Started

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## What to Update for Your Project

- `package.json`: Update name, description, author, and dependencies as needed.
- `src/i18n/messages/`: Add or edit language files for your supported locales.
- `src/components/`: Add your own UI components or modify existing ones.
- `src/app/globals.css`: Customize Tailwind and global styles.
- `next.config.ts`: Adjust Next.js config/plugins as required.
- `.env`: Add your environment variables (not committed by default).

---

This template is designed to be a solid, modern starting point for new Next.js projects. Feel free to fork, modify, and use as your base!

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
