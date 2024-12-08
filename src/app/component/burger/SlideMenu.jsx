'use client'
import React, { useState } from 'react'
import DialogWithForm from '../dialog-with-form/DialogWithForm';
import Burger from './Burger';
export default function SlideMenu() {
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(false);
    setOpen(true)
  };
  const toggleOpened = () => {
    setOpened(!opened);
  };

  return (
    <>
       <div>
        <Burger opened={opened} toggleOpened={toggleOpened} />
        <div className={ opened ? 'slide-menu':'slide-menu__none'}>
          <div className="slide-menu__header">
          <span>MENU</span>
            <Burger opened={opened} toggleOpened={toggleOpened} />
          </div>
          <div className='slide-menu__nav'>
            <ul>
              <a href="/"><li>главная</li></a>
              <li>новостройки</li>
              <a href="/secondary"><li>вторичное жилье</li></a>
              <li>коммерческая</li>
              <li>загородная</li>
              <li>ипотека</li>
            </ul>
            <ul className='pt-12'>
              <li>о нас</li>
              <li>Блог</li>
              <li>Вакансии</li>
              <li>Контакты</li>
              <button onClick={handleOpen} className="header__btn mt-2">связаться с нами</button>
            </ul>
          </div>
        </div>
        <div onClick={toggleOpened} className={ opened ? 'slide-menu__background':'hidden'}></div>
    </div>
    <DialogWithForm open={open} setOpen={setOpen}  />
    </>

  )
}
