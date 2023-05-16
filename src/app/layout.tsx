'use client';
// import React, { useEffect, useState } from 'react';
import head from 'next/head';
// Must add 'use client' for the ThemeProvider to work
import { ThemeProvider } from 'next-themes';

import './styles/globals.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // const { systemTheme, theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) return null;
  // const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    
    <html lang="en">
      <head />
      <body>
        {/* when added attribute='class' functionality broke */}
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
