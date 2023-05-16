'use client';
import head from 'next/head';
import { ThemeProvider } from 'next-themes';

import './styles/globals.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
