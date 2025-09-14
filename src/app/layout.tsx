import type { Metadata } from "next";
import Head from 'next/head';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Script from "next/script";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Head>
        <meta property="og:image" content="public/images/secondary-homepage-mobile.jpg" />
      </Head>

      <body>
        <Header />

        {children}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {
                  if (document.scripts[j].src === r) { return; }
                }
                k=e.createElement(t), a=e.getElementsByTagName(t)[0];
                k.async=1; k.src=r;
                a.parentNode.insertBefore(k,a);
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(84225793, "init", {
                webvisor:true,
                clickmap:true,
                accurateTrackBounce:true,
                trackLinks:true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/84225793"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <Script id="yandex-ab" strategy="afterInteractive">
          {`
    (function(e, x, pe, r, i, me, nt){
      e[i]=e[i]||function(){(e[i].a=e[i].a||[]).push(arguments)},
      me=x.createElement(pe),me.async=1,me.src=r,
      nt=x.getElementsByTagName(pe)[0],nt.parentNode.insertBefore(me,nt)
    })(window, document, 'script', 'https://abt.s3.yandex.net/expjs/latest/exp.js', 'ymab');

    ymab('metrika.84225793', 'setConfig', {
      enableVisual: true,
      enableJS: true,
      enableHTML: true,
      enableRedir: true,
      enableWatch: true,
      nonce: undefined
    });

    ymab('metrika.84225793', 'init');
  `}
        </Script>

        <Footer />
      </body>
    </html>
  );
}
