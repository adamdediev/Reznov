import './page.scss';
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"; 
import { FaTelegramPlane } from "react-icons/fa";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: "Контакты | Reznov",
  description:
    "Свяжитесь с компанией Reznov для консультации и подбора недвижимости в Москве и области.",
  openGraph: {
    title: "Контакты | Reznov",
    description:
      "Оставьте заявку или свяжитесь с нами для получения консультации.",
    url: `${baseUrl}/contacts`,
    siteName: "Reznov",
    images: [
      {
        url: `${baseUrl}/og-logo.jpg`,
        width: 1200,
        height: 630,
        alt: "Контакты Reznov",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/contacts` },
};


export default function Page() {
  return (
    <div className="bg-[#000] flex container items-center justify-center">
      <div className="w-full my-8 bg-[#1C1C1C] rounded-2xl shadow-xl md:p-10 p-4 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold text-[#85CEE4] mb-4">Контакты</h1>

          <div className="space-y-4 text-gray-300">
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#85CEE4]" />
              <a href="tel:88002017881" className="hover:underline">
                8 800 201-78-81
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#85CEE4]" />
              <a href="mailto:info@reznov-group.ru" className="hover:underline">
                info@reznov-group.ru
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#85CEE4]" />
              г. Москва, пр-д Серебрякова, д. 14, стр. 15
            </p>
          </div>
          <div className="mt-8 space-y-6 text-gray-300">
            <div>
              <h2 className="text-xl font-semibold text-[#85CEE4] mb-4">Отдел партнёрств</h2>
              <p className="flex items-center gap-2 mt-2">
                <Phone className="w-5 h-5 text-[#85CEE4]" />
                <a href="tel:89252655520" className="hover:underline">
                  8 925 265-55-20
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#85CEE4]" />
                <a href="mailto:partners@reznov-group.ru" className="hover:underline">
                  partners@reznov-group.ru
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#85CEE4] mb-4">HR-отдел</h2>
              <p className="flex items-center gap-2 mt-2">
                <Phone className="w-5 h-5 text-[#85CEE4]" />
                <a href="tel:89023996545" className="hover:underline">
                  8 902 399-65-45
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#85CEE4]" />
                <a href="mailto:hr@reznov-group.ru" className="hover:underline">
                  hr@reznov-group.ru
                </a>
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://t.me/sevoden1"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-[#85CEE4] text-gray-900 font-medium rounded-lg hover:bg-[#6FBAD0] transition"
            >
              <FaTelegramPlane className="w-5 h-5" />
              Telegram
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B79261664257&text&type=phone_number&app_absent=0"
              target="_blank"
              className="flex  items-center gap-2 px-4 py-2 bg-[#25D366] text-white font-medium rounded-lg hover:bg-[#1DA955] transition"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
        <div className="max-h-96 "> 
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A5a74ce72fd65c86cf6d665330cbb689183ffe4495a08e964ee86507a5ab5eea2&amp;source=constructor"
            width="100%"
            height="100%"
            className="rounded-2xl border-0 min-h-[300px]"
            allowFullScreen
          ></iframe>
          
        </div>
      </div>
    </div>
  );
}
