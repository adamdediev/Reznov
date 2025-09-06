'use client'
import { useState } from 'react';
import Image  from 'next/image';
import newBuilding from '../../../../public/image/apartment-plan.svg';
import carCard from '../../../../public/image/car-card.svg';
import mobileCard from '../../../../public/image/card-mobile.svg';
import DialogWithForm from '../dialog-with-form/DialogWithForm';


export default function Service() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <>
       <section className='service'>
    <div className="service-mobile__image">
    <Image className='service-moblie__build' src={newBuilding} alt='building'/>
    <Image className='service-moblie__card' src={mobileCard} alt='car card'/>
    </div>
    <h2 className='service__title title-block'>услуги</h2>
    <div className="service__content-block">
    <div className="service__block-item" >

    <span className='service__block-item-card'>
    <h4>новостройки</h4>
    <a href="/new-building">Перейти</a>
    </span>
    <Image className='service__block-item-1' src={carCard} alt='car card'/>
    </div>

    <div className="service__block-item">
    <span className='service__block-item-card service__card-2'>
    <h4>вторичное жилье</h4>
    <a href="/secondary">Перейти</a>
    </span> 

    <span className='service__block-item-card service__card-3'>
    <h4>коммерческие <br/> помещения</h4>
    <a href="/commerce">Перейти</a>
    </span>

    </div>
    
    <div className="service__block-item">
    <span className='service__block-item-card service__card-4'>
    <h4>загородная <br/> недвижимость</h4>
    <a href="/countryside">Перейти</a>
    </span>
    <Image className='service__block-item-2' src={newBuilding} alt='car card'/>

    <span className='service__block-item-card service__card-5'>
    <h4>ипотека</h4>
    <a onClick={handleOpen}>Звонок</a>
    </span>
    </div>

    </div>
    <div className="service-mobile__content-block">
      <a href='/new-building' className="service-mobile__card">
        <h3>новостройки</h3>
        <span className='service-mobile__card-1'></span>
      </a>
      <a href='/secondary' className="service-mobile__card">
        <h3>вторичное <br/> жилье</h3>
        <span className='service-mobile__card-2'></span>
      </a>
      <a href='/country' className="service-mobile__card">
        <h3>загородная <br/> недвижимость</h3>
        <span className='service-mobile__card-3'></span>
      </a>
      <a href='/commerce' className="service-mobile__card">
        <h3>коммерческие <br/> помещения</h3>
        <span className='service-mobile__card-4'></span>
      </a>
      <a onClick={handleOpen} className="service-mobile__card">
        <h3>ипотека</h3>
        <span className='service-mobile__card-5'></span>
      </a>
    </div>
    <div className="service-mobile__footer">
      <div className="service-mobile__footer-circle-text">
        <span></span>
        <h3>Не знаете, с  чего начать?</h3>
      </div>
      <button onClick={handleOpen} className="service-mobile__footer-btn">проконсультируйте меня</button>
    </div>
    </section>
    <DialogWithForm open={open} setOpen={setOpen}  />
    </>
  )
}
