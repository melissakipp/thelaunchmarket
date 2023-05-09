'use client';

import head from 'next/head';
// Must add 'use client' for the ThemeProvider to work
import { ThemeProvider } from 'next-themes';

import './styles/globals.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const getTheme = () => {
  // useEffect(() => {
    // Get the current theme from the browser
    const themes = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    return themes;
  // }, []);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <head />
      <body>
        {/* when added attribute='class' functionality broke */}
        <ThemeProvider themes={getTheme()}>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
