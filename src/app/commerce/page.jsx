import './page.scss';
import Homepage from "../component/commerce/homepage/Homepage";
import Comment from "../component/commerce/comment/Comment";
import Suggest from "../component/commerce/suggest/Suggest";
import Cooperation from "../component/commerce/cooperation/Cooperation";
import ContactForm from "../component/contactForm/ContactForm";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: "Коммерческая недвижимость в Москве | Reznov",
  description:
    "Офисы, склады, торговые площади и готовый бизнес в Москве и области. Индивидуальный подбор объектов.",
  openGraph: {
    title: "Коммерческая недвижимость в Москве | Reznov",
    description: "Аренда и продажа офисов, складов и торговых помещений.",
    url: `${baseUrl}/commerce`,
    siteName: "Reznov",
    images: [
      {
        url: `${baseUrl}/og-logo.jpg`,
        width: 1200,
        height: 630,
        alt: "Коммерческая недвижимость Reznov",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/commerce` },
};


export default function page() {
    return (
        <main>
            <Homepage/>
            <Comment/>
            <Suggest/>
            <Cooperation/>
            <ContactForm/>
        </main>

    )
}
