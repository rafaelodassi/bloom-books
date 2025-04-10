import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { Header } from './components/Header';
import { LayoutProvider } from './context/LayoutContext';
import StyledComponentsRegistry from './lib/registry';

import './globals.css';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bloom Books',
  description: 'Bloom Books',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <LayoutProvider>
            <main>
              <Header />
              {children}
            </main>
            <div id='drawer-root' />
          </LayoutProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
