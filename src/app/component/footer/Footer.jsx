'use client'
import Image  from 'next/image';
import arrow from '../../../../public/image/footer-arrow.svg';
import vk from '../../../../public/image/vk.svg';
import instagramm from '../../../../public/image/instagramm.svg';
import telegramm from '../../../../public/image/telegramm.svg';
import youtube from '../../../../public/image/youtube.svg';
import mapIcon from '../../../../public/image/map-icon.svg';
import Link from "next/link";

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
          <li><Link href="/commerce">ЗАГОРОДНАЯ НЕДВИЖИМОСТЬ</Link></li>
        </ul>
        <ul className="footer__nav-contact">
          <li><a href='https://reznov-group.ru/about_us'>О НАС</a></li>
          <li><a href='https://reznov-group.ru/career'>КОНТАКТЫ</a></li>
          <li><a href='https://reznov-group.ru/contacts'>ВАКАНСИИ</a></li>
        </ul>
      </div>
      <div className="footer__contact">
        <span>8 800 201-78-81</span>
        <div className="footer__box-icon">
       <a href="https://vk.com/reznov.realty"><Image src={vk}  alt='vk'/></a>  
       <a href="https://instagram.com/reznov.realty?igshid=NTc4MTIwNjQ2YQ=="><Image src={instagramm}  alt='instagramm'/></a>  
       <a href="https://t.me/reznovrealty"><Image src={telegramm}  alt='telegramm'/></a> 
       <a href="https://www.youtube.com/channel/UCv5jvTO7j5wAG3Z7alk2-8A"><Image src={youtube}  alt='youtube'/></a> 
       <a href="https://yandex.ru/maps/-/CDSqnTOz"><Image src={mapIcon}  alt='mapIcon'/></a> 
        </div>
      </div>
      <div className="footer__arrow" onClick={scrollToTop}>
        <Image src={arrow}  alt='arrow'/>
      </div>
     </div>
    </footer>
  )
}
