import '../styles/globals.css';
import { Header } from '@/components/Header/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'CarpTravel',
  description: 'Find the best leisure activities in the Carpathians',
  openGraph: {
    type: 'website',
    url: 'https://carp-travel-psi.vercel.app/',
    title: 'CarpTravel',
    siteName: 'CarpTravel',
    description: 'Find the best leisure activities in the Carpathians',
    images: [
      { url: 'assets/images/ogpLogo.png' },
      { url: 'assets/images/ogpLogo.jpg' },
    ],
  },
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
