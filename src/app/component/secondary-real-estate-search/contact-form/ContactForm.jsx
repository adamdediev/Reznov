"use client"
import Form from '../../contactForm/Form';
import { MessageCircle } from 'lucide-react';
import { FaTelegramPlane } from 'react-icons/fa';

export default function ContactForm() {
  return (
    <section className="contact-form container">
        <h2 className="title-block">свяжитесь с нами</h2>
        <div className="contact-form__block">
          <div className="contact-form__title md:w-1/2 w-full">
            <p>Оставьте заявку</p>
            <span>И мы перезвоним в течение 15 минут </span>
            <span>Покупка недвижимости вашей мечты уже на шаг ближе</span>
          </div>
          <div className="contact-form__formgroup md:w-1/2 w-full">
            <Form 
              onSuccess={()=>{
                if (typeof window !== "undefined" && window.ym) {
                  window.ym(84225793, "reachGoal", "lead_podbor")
                }
              }} 
            />
          </div>
        </div>
          <div className="md:mt-8 mt-0 flex flex-wrap gap-4 items-center">
            Или напишите нам в:
            <a
              href="https://t.me/reznov_realty"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-[#fff] text-gray-900 font-medium rounded-lg hover:bg-[#6FBAD0] transition"
            >
              <FaTelegramPlane className="w-5 h-5" />
              Telegram
            </a>
            <a
              href="https://wa.me/89251758526"
              target="_blank"
              className="flex  items-center gap-2 px-4 py-2 bg-[#25D366] text-white font-medium rounded-lg hover:bg-[#1DA955] transition"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
    </section>
  )
}
