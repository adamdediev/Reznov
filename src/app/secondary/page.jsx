import './page.scss'
import Homepage from '../component/secondary/secondary-homepage/Homepage';
import Story from '../component/secondary/secondary-story/Story';
import Numbers from '../component/secondary/secondary-numbers/Numbers';
import Steps from '../component/secondary/secondary-steps/Steps';
import Partners from '../component/secondary/secondary-partners/Partners';
import ContactForm from '../component/contactForm/ContactForm';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: "Вторичная недвижимость в Москве | Reznov",
  description:
    "Квартиры и дома на вторичном рынке Москвы и области. Подбор вариантов, проверка юридической чистоты.",
  openGraph: {
    title: "Вторичная недвижимость в Москве | Reznov",
    description:
      "Выгодные предложения вторичного жилья. Сопровождение сделок от А до Я.",
    url: `${baseUrl}/secondary`,
    siteName: "Reznov",
    images: [
      {
        url: `${baseUrl}/og-logo.jpg`,
        width: 1200,
        height: 630,
        alt: "Вторичка Reznov",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/secondary` },
};


export default function page() {
  return (
    <main>
      <Homepage />
      <Story />
      <Numbers />
      <Steps />
      <Partners />
      <ContactForm />
    </main>
  )
}
