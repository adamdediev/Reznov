'use client'
import { useState } from 'react';
import Image from 'next/image';
import textСircle from '../../../../public/image/text-circle.svg';
import houseMobile from '../../../../public/image/house-mobile.svg';
import house from '../../../../public/image/house.svg';
import DialogWithForm from '../dialog-with-form/DialogWithForm';

export default function Homepage() {
    const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
   <>
    <section className="homepage">
      <div className="homepage__blue-circle-1 md:block hidden"></div>
      <div className="homepage__blue-circle-2"></div>
      <div className="homepage__content">
        <h3>для тех, кто ищет большее</h3>
      </div>

      <div className="homepage__lead-circle">
        <div className="homepage__lead">
          <h1>Ваш путь к покупке недвижимости начинается здесь</h1>
          <button onClick={handleOpen}>Бесплатная консультация</button>
        </div>
        <div className="homepage__circle">
        <Image src={textСircle} className="homepage__circle--img" alt="textСircle" role="presentation" />
        <span className="homepage__circle-white" ></span>
        <Image src={house} className="homepage__circle--img-house" alt="house" role="presentation" />
        <div className="relative">
          <Image src={houseMobile} className="homepage__circle--img-house-mobile" alt="houseMobile" role="presentation" />
          <div className="homepage__circle--img-house-mobile-circle"></div>
        </div>

        </div>
      </div>
    </section>
    <DialogWithForm open={open} setOpen={setOpen}  />
   </>
  );
}
