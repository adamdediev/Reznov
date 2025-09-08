import './page.scss'
import Homepage from '../component/countryside/homepage/Homepage';
import Chips from '../component/countryside/chips/Chips';
import PhotoGallery from '../component/countryside/photo-gallery/PhotoGallery';
import ContactFormCountryside from '../component/countryside/contact-form-countryside/ContactFormCountryside';
import YandexReviews from '../component/yandex-reviews/YandexReviews';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: "Загородная недвижимость | Reznov",
  description:
    "Дома, коттеджи и участки в Подмосковье. Подбор и сопровождение сделок по загородной недвижимости.",
  openGraph: {
    title: "Загородная недвижимость | Reznov",
    description: "Каталог домов и коттеджей для комфортной жизни за городом.",
    url: `${baseUrl}/countryside`,
    siteName: "Reznov",
    images: [
      {
        url: `${baseUrl}/og-logo.jpg`,
        width: 1200,
        height: 630,
        alt: "Загородная недвижимость Reznov",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/countryside` },
};


export default function page() {
  return (
    <main>
      <Homepage />
      <Chips />
      <PhotoGallery />
      <YandexReviews />
      <ContactFormCountryside />
    </main>
  )
}
