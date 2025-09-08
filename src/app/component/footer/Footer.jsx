'use client'
import Image  from 'next/image';
import arrow from '../../../../public/image/footer-arrow.svg';
import Link from "next/link";
import { FaVk, FaInstagram, FaTelegramPlane, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <footer className="container">
     <div className="footer">
     <div className="footer__logo "></div>
      <div className="footer__nav">
        <ul className="footer__nav-product">
          <li><Link href="/new-building">НОВОСТРОЙКИ</Link></li>
          <li><Link href="/secondary">ВТОРИЧКА</Link></li>
          <li><Link href="/commerce">КОММЕРЦИЯ</Link></li>
          <li><Link href="/countryside">ЗАГОРОДНАЯ НЕДВИЖИМОСТЬ</Link></li>
        </ul>
        <ul className="footer__nav-contact">
          <li><a href='https://reznov-group.ru/about_us'>О НАС</a></li>
          <li><a href='/contacts'>КОНТАКТЫ</a></li>
          <li><a href='https://reznov-group.ru/career'>ВАКАНСИИ</a></li>
        </ul>
      </div>
      <div className="footer__contact">
        <span>8 (925) 175-85-26</span>
        <div className="footer__box-icon">
      <a href="https://vk.com/reznov.realty"><FaVk size={28}/></a>
      <a href="https://instagram.com/reznov.realty?igshid=NTc4MTIwNjQ2YQ=="><FaInstagram size={25} /></a>
      <a href="https://t.me/reznov_realty"><FaTelegramPlane size={25} /></a>
      <a href="https://www.youtube.com/channel/UCv5jvTO7j5wAG3Z7alk2-8A"><FaYoutube size={25} /></a>
      <a href="https://yandex.ru/maps/-/CDSqnTOz"><FaMapMarkerAlt size={25} /></a>
    </div>
      </div>
      <div className="footer__arrow" onClick={scrollToTop}>
        <Image src={arrow}  alt='arrow'/>
      </div>
     </div>
    </footer>
  )
}
