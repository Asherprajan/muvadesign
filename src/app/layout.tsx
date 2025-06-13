import React from 'react';
import '../styles/index.css';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Script from 'next/script';

const telegraf = localFont({
  src: [
    {
      path: '../fonts/PPTelegraf-Ultralight.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/PPTelegraf-UltralightSlanted.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/PPTelegraf-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/PPTelegraf-RegularSlanted.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/PPTelegraf-Ultrabold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/PPTelegraf-UltraboldSlanted.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-telegraf',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Muva Design',
  description: 'Muvadesign is a design studio that creates beautiful and functional designs for your business.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${telegraf.variable} ${inter.variable}`}>
      <body className="font-telegraf">
        {children}
        <Script id="dhws-errorTracker" src="/dhws-error-tracker.js" strategy="lazyOnload" />
        <Script id="dhws-elementInspector" src="/dhws-web-inspector.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
