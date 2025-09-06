'use client'
import Image from 'next/image';
import HomepageImage from '/public/image/homepage-new-building.svg';
import DialogWithForm from '@/app/component/dialog-with-form/DialogWithForm';
import { useState } from 'react';

export default function Homepage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  
  return (
    <section className="homepage-new-building container">
      <h1 className="homepage-new-building__title">Более 100.000 квартир в новостройках, среди которых мы подберем идеальную для Вас</h1>
      <div className="homepage-new-building__title-mobile">
        <h2> <strong>Более 100.000 квартир </strong>
          в новостройках</h2>
        <p>среди которых мы подберем идеальную для Вас</p>
      </div>
      <div className="homepage-new-building__content">
        <Image src={HomepageImage} alt={`Homepage`} />
        <div className="homepage-new-building__button">
          <h3>Оставьте заявку на бесплатную консультацию</h3>
          <svg className='arrow-vert__animation' xmlns="http://www.w3.org/2000/svg" width="9" height="52" viewBox="0 0 9 52" fill="none">
            <path d="M4.14644 51.2307C4.34171 51.426 4.65829 51.426 4.85355 51.2307L8.03553 48.0487C8.23079 47.8534 8.23079 47.5369 8.03553 47.3416C7.84027 47.1463 7.52369 47.1463 7.32843 47.3416L4.5 50.17L1.67157 47.3416C1.47631 47.1463 1.15973 47.1463 0.964464 47.3416C0.769202 47.5369 0.769202 47.8534 0.964464 48.0487L4.14644 51.2307ZM4 0.824036L4 50.8771L5 50.8771L5 0.824036L4 0.824036Z" fill="white" />
          </svg>
          <button onClick={handleOpen}>Позвоните мне</button>
        </div>
          <button  onClick={handleOpen} className="homepage-new-building__button-mobile">Позвоните мне</button>
      </div>
      <DialogWithForm open={open} setOpen={setOpen}  />

    </section>
  )
}
