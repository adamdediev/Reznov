import './page.scss';
import Homepage from './component/homepage/Homepage';
import Service from './component/service/Service';
import OurFaces from './component/ourFaces/OurFaces';
import Advantages from './component/advantages/Advantages';
import Number from './component/numbers/Number';
import Review from './component/review/Review';
import ContactForm from './component/contactForm/ContactForm';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: "Недвижимость в Москве и области | Reznov",
  description:
    "Reznov — подбор и продажа недвижимости в Москве и Подмосковье. Новостройки, вторичное жильё, коммерческая и загородная недвижимость.",
  openGraph: {
    title: "Недвижимость в Москве и области | Reznov",
    description:
      "Новостройки, вторичное жильё, коммерческая и загородная недвижимость от компании Reznov.",
    url: baseUrl,
    siteName: "Reznov",
    images: [
      {
        url: `${baseUrl}/og-logo.jpg`,
        width: 1200,
        height: 630,
        alt: "Reznov недвижимость",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  alternates: { canonical: baseUrl },
};


export default function Home() {
  return (
    
    <main>
      <div className="container">
      <Homepage/>
      <Service/>
      <OurFaces/>
      <Advantages/>
      <Number/>
      <Review/>
      <ContactForm/>
     </div>
    </main>
  );
}
