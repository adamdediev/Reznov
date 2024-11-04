import type { Metadata } from "next";
import "./globals.scss";
import Header from './component/header/Header';
import Footer from './component/footer/Footer';


export const metadata: Metadata = {
  title: "Reznov",
  description: "Reznov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black overflow-x-hidden">
        <Header/>
        <main>
        {children}
        </main>  
        <Footer/>      
        </body>
    </html>
  );
}
