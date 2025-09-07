import './page.scss'
import Homepage from '../component/new-building/component/homepage/Homepage';
import WhereWork from "../component/new-building/component/where-work/WhereWork";
import Chips from "../component/new-building/component/chips/Chips";
import Partner from "../component/new-building/component/partner/Partner";
import ContactForm from "../component/contactForm/ContactForm";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: "Новостройки Москвы и Подмосковья | Reznov",
  description:
    "Каталог новостроек в Москве и области. Выгодные цены, надёжные застройщики, полное сопровождение сделок.",
  openGraph: {
    title: "Новостройки Москвы и Подмосковья | Reznov",
    description:
      "Широкий выбор новостроек. Подбор квартир и помощь в оформлении ипотеки.",
    url: `${baseUrl}/new-building`,
    siteName: "Reznov",
    images: [
      {
        url: `${baseUrl}/og-logo.jpg`,
        width: 1200,
        height: 630,
        alt: "Новостройки Reznov",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/new-building` },
};


export default function page() {
  return (
    <main>
        <Homepage/>
        <WhereWork/>
        <Chips/>
        <Partner/>
        <ContactForm />
    </main>
  )
}
