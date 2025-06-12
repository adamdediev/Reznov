import type { Metadata } from "next";
import "./globals.scss";
import Head from 'next/head';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';

export const metadata: Metadata = {
  title: "Reznov",
  description: "Reznov",
  icons: {
    icon: [
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: '/favicon/apple-touch-icon.png',
    shortcut: '/favicon/favicon.ico',
  },
  // manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <meta property="og:image" content="public/images/secondary-homepage-mobile.jpg" />
      </Head>

      <body className="overflow-x-hidden">
        <Header/>
        <main>
        {children}
        </main>  
        <Footer/>      
        </body>
    </html>
  );
}
