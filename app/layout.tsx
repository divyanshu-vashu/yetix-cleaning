import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Yetix Cleaning - Professional Cleaning Services Melbourne',
  description: 'Premium cleaning services in Melbourne. Residential and commercial cleaning with experienced professionals. Call now to book your cleaning appointment.',
  keywords: 'cleaning services Melbourne, house cleaning, office cleaning, professional cleaners, residential cleaning, commercial cleaning',
  openGraph: {
    title: 'Yetix Cleaning - Professional Cleaning Services Melbourne',
    description: 'Premium cleaning services in Melbourne. Book your cleaning appointment today.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}