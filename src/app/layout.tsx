import '@/src/styles/globals.scss';
import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';
import { Providers } from './providers';

// Remove 'use client' from layout - it should be server component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
