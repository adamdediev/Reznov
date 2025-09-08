'use client'
import { useState } from 'react';
import Image from 'next/image';
import homepage from '../../../../../public/image/secondary-real-estate-search/secondary-real-estate-search-homepage.svg';
import homepageMobile from '../../../../../public/image/secondary-real-estate-search/secondary-real-estate-search-homepage.svg';
import DialogWithForm from '../../dialog-with-form/DialogWithForm';

export default function Homepage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
   <>
    <section className="mt-8 mb-8 md:mb-16">
        <div className="container homepage-secondary">
        <div className="homepage-secondary__content">
          <h1><strong>Профессионально подбор недвижимости</strong></h1>
          <div> <strong>
            

<strong className='font-semibold'>Для Вас:</strong> 
Подберем лучший вариант всего за 14 дней
Получим скидку на квартиру до 30%
Поможем получить одобрение ипотеки со ставкой от 6%
Проверим юридическую чистоту объекта по 12 параметрам
Проведем сделку под ключ <strong className='font-semibold'> на Ваших условиях</strong>  
            
            </strong>
            </div>
          <button onClick={handleOpen}>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</button>
        </div>
        <div className="homepage-secondary__image">
        <Image className="md:hidden block" src={homepageMobile} alt="textСircle" role="presentation" />
        <Image className="md:block hidden" src={homepage} alt="textСircle" role="presentation" />
        </div>     
        <button className='homepage-secondary__btn md:hidden block' onClick={handleOpen}>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</button>
        </div>
    </section>
    <DialogWithForm open={open} setOpen={setOpen}  />
   </>
  );
}
