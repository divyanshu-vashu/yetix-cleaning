// file: app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { localBusinessSchema, serviceSchemas } from '@/lib/schema';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://yetix.com.au'), // <<-- IMPORTANT: Change this to your live domain
  title: 'Yetix Cleaning - Best Professional Cleaning Services Melbourne', // Added "Best" and clearly stated company name
  description: 'Yetix Cleaning offers the best professional cleaning services in Melbourne. From reliable residential and commercial cleaning to comprehensive end-of-lease solutions, our experienced team ensures your space is sparkling clean. Book your top-rated cleaning service in Melbourne today!', // More descriptive, integrated target keywords
  keywords: 'best cleaning service melbourne, cleaning service in melbourne, yetix cleaning, professional cleaners melbourne, house cleaning melbourne, office cleaning melbourne, residential cleaning melbourne, commercial cleaning melbourne, end of lease cleaning melbourne, top cleaning company melbourne', // Expanded keywords including target ones
  openGraph: {
    title: 'Yetix Cleaning - Best Professional Cleaning Services Melbourne',
    description: 'Yetix Cleaning offers the best professional cleaning services in Melbourne. Book your top-rated cleaning appointment today.',
    url: 'https://yetix.com.au', 
    siteName: 'Yetix Cleaning',
    images: [
      {
        url: 'https://yetix.com.au/image.png',
        width: 1200,
        height: 630,
        alt: 'Yetix Cleaning - Best Cleaning Service Melbourne',
      },
    ],
    type: 'website',
  },
  twitter: { 
    card: 'summary_large_image',
    title: 'Yetix Cleaning - Best Professional Cleaning Services Melbourne',
    description: 'Yetix Cleaning offers the best professional cleaning services in Melbourne. Book your top-rated cleaning appointment today.',
    images: ['https://yetix.com.au/image.png'], 
  },
  alternates: { 
    canonical: 'https://yetix.com.au',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create script content for JSON-LD
  const schemaScript = `
    ${JSON.stringify(localBusinessSchema, null, 2)}
    ${serviceSchemas.map(schema => JSON.stringify(schema, null, 2)).join('\n')}
  `;

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaScript }}
          key="product-jsonld"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}