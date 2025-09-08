import './page.scss'
import Homepage from '../component/secondary-real-estate-search/homepage/Homepage';
import Suggest from '../component/secondary-real-estate-search/suggest/Suggest';
import WhereWork from '../component/secondary-real-estate-search/where-work/WhereWork';
import Steps from '../component/secondary-real-estate-search/steps/Steps';
import ContactForm from '../component/secondary-real-estate-search/contact-form/ContactForm';
import YandexReviews from '../component/yandex-reviews/YandexReviews';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: "Поиск вторичной недвижимости в Москве | Reznov",
  description:
    "Удобный поиск вторичного жилья в Москве и области. Фильтры по цене, площади, району. Быстрый подбор подходящих вариантов.",
  openGraph: {
    title: "Поиск вторичной недвижимости в Москве | Reznov",
    description:
      "Ищите квартиры и дома на вторичном рынке с помощью удобного поиска Reznov. Фильтры и подбор под ваши параметры.",
    url: `${baseUrl}/secondary-real-estate-search`,
    siteName: "Reznov",
    images: [
      {
        url: `${baseUrl}/og-logo.jpg`,
        width: 1200,
        height: 630,
        alt: "Поиск вторичной недвижимости Reznov",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/secondary-real-estate-search` },
};


export default function page() {
  return (
    <main>
      <Homepage />
      <Suggest />
      <WhereWork />
      <YandexReviews/>
      <Steps />
      <ContactForm />
    </main>
  )
}
