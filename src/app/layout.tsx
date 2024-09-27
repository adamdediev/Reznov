import type { Metadata } from "next";
import "./globals.scss";
import Header from './component/header/Header';


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
      <body className="bg-black">
        <Header/>
        <main>
        {children}
        </main>        
        </body>
    </html>
  );
}
