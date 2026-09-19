import './globals.css';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';
import BackToTop from './components/BackToTop';

export const metadata = {
  title: 'AL.Ink Studio | Professional Tattoo Studio in Kathmandu',
  description:
    'AL.Ink Studio offers professional tattoo artistry in Kathmandu. Explore our portfolio and book your appointment online.',
  keywords: [
    'AL.Ink Studio',
    'tattoo Kathmandu',
    'tattoo studio Ranibari',
    'professional tattoo artist',
  ],
  authors: [{ name: 'AL.Ink Studio' }],
  openGraph: {
    title: 'AL.Ink Studio | Professional Tattoo Studio in Kathmandu',
    description:
      'Explore AL.Ink Studio’s portfolio and book your tattoo appointment online.',
    url: 'https://www.alinkstudio.com.np',
    siteName: 'AL.Ink Studio',
    images: [
      {
        url: 'https://www.alinkstudio.com.np/hero.webp',
        width: 1200,
        height: 630,
        alt: 'AL.Ink Studio Studio',
      },
      {
        url: 'https://www.alinkstudio.com.np/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AL.Ink Studio Studio (JPEG fallback)',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AL.Ink Studio | Professional Tattoo Studio in Kathmandu',
    description:
      'Explore AL.Ink Studio’s portfolio and book your tattoo appointment online.',
    images: ['https://www.alinkstudio.com.np/hero.webp'],
  },
  alternates: {
    canonical: 'https://www.alinkstudio.com.np',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
};

export default function RootLayout({ children }) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AL.Ink Studio",
    "image": "https://www.alinkstudio.com.np/hero.webp",
    "url": "https://www.alinkstudio.com.np",
    "telephone": "+977-9816245996", 
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ranibari Marg",
      "addressLocality": "Kathmandu",
      "addressRegion": "Bagmati",
      "postalCode": "44600",
      "addressCountry": "NP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.7156,   
      "longitude": 85.3123   
    },
    "openingHours": "Mo-Su 10:00-23:00",
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/Al.Inkstudio23/",
      "https://www.instagram.com/al.inkstudio/"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="max-w-300 mx-auto px-4 text-center">
          {children}
          <BackToTop />
          <Footer />
        </main>
      </body>
    </html>
  );
}