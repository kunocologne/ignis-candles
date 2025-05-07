import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import localFont from 'next/font/local';

// Load local fonts
const sofiaPro = localFont({
  src: [
    {
      path: '../../public/fonts/sofia-pro/Sofia Pro Regular Az.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sofia-pro/Sofia Pro Bold Az.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sofia-pro/Sofia Pro Light Az.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sofia-pro/Sofia Pro Medium Az.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sofia-pro/Sofia Pro Black Az.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-sofia-pro',
  display: 'swap',
});

const amadi = localFont({
  src: '../../public/fonts/Amadi-Regular.otf',
  variable: '--font-amadi',
  display: 'swap',
});

// Add Zapfino and Nyx Std in your global CSS
// These will be loaded via @font-face in globals.css

export const metadata: Metadata = {
  title: "IGNIS - Luxury Ritual Candles",
  description: "Artisanal, high-end candles for transformation, purification, and rebirth rituals. Crafted with premium materials and ancient wisdom.",
  keywords: ["luxury candles", "ritual candles", "premium", "handcrafted", "artisanal", "spiritual", "transformation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${sofiaPro.variable} ${amadi.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
