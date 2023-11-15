import './globals.css';
import classNames from 'classnames';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import { siteConfig } from '@configs/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: '/logo.svg',
      href: '/logo.svg',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#e0c8fd" />

        <meta property="og:title" content="Nextjs App" />
        <meta name="twitter:title" content="Nextjs App" />

        <meta name="description" content="Nextjs 13 starter template" />
        <meta property="og:description" content="Nextjs 13 starter template" />
        <meta name="twitter:description" content="Nextjs 13 starter template" />

        <meta property="og:image" content="https://i.imgur.com/Z3bMJXy.jpg" />
        <meta name="twitter:image" content="https://i.imgur.com/Z3bMJXy.jpg" />
      </head>
      <body
        className={classNames({
          'debug-screens': process.env.NODE_ENV === 'development',
        })}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
