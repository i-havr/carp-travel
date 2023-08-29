import '../styles/globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'CarpTravel',
  description: 'Find the best leisure activities in the Carpathians',
};

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <div id="menu-modal-root"></div>
        {children}
      </body>
    </html>
  );
}
