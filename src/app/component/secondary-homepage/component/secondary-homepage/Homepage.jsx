'use client'
import { useState } from 'react';
import Image from 'next/image';
import homepage from '../../../../../../public/image/secondary-homepage.jpg';
import homepageMobile from '../../../../../../public/image/secondary-homepage-mobile.jpg';
import DialogWithForm from '../../../dialog-with-form/DialogWithForm';

export default function Homepage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
   <>
    <section className="mt-8">
        <div className="container homepage-secondary">
        <div className="homepage-secondary__content">
          <h1>ПРОДАЕМ КВАРТИРЫ <strong className='font-semibold'>БЫСТРЕЕ</strong> И <strong className='font-semibold'>ДОРОЖЕ</strong> </h1>
          <div><strong className='font-semibold'>Оперативно</strong> найдем покупателя и продадим квартиру на <strong className='font-semibold'>15% выше рынка</strong> </div>
          <button onClick={handleOpen}>ХОЧУ ПРОДАТЬ</button>
        </div>
        <div className="homepage-secondary__image">
        <Image className="md:hidden block" src={homepageMobile} alt="textСircle" role="presentation" />
        <Image className="md:block hidden" src={homepage} alt="textСircle" role="presentation" />
        </div>     
        <button className='homepage-secondary__btn md:hidden block' onClick={handleOpen}>ХОЧУ ПРОДАТЬ</button>
        </div>
    </section>
    <DialogWithForm open={open} setOpen={setOpen}  />
   </>
  );
}
