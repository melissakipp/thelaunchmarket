'use client';

import { ThemeProvider } from 'next-themes';

import '@/src/styles/globals.scss';

import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider>
          <Header />
            {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
