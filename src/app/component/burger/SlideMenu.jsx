'use client'
import React, { useState } from 'react'
import Burger from './Burger';
export default function SlideMenu() {

  const [opened, setOpened] = useState(false);

  // Функция для переключения состояния
  const toggleOpened = () => {
    setOpened(!opened);
  };

  return (
    <div>
        <Burger opened={opened} toggleOpened={toggleOpened} />
        <div className={ opened ? 'slide-menu':'slide-menu__none'}>
          <div className="slide-menu__header">
          <span>MENU</span>
            <Burger opened={opened} toggleOpened={toggleOpened} />
          </div>
          <div className='slide-menu__nav'>
            <ul>
              <li>главная</li>
              <li>новостройки</li>
              <li>вторичное жилье</li>
              <li>коммерческая</li>
              <li>загородная</li>
              <li>ипотека</li>
            </ul>
            <ul className='pt-12'>
              <li>о нас</li>
              <li>Блог</li>
              <li>Вакансии</li>
              <li>Контакты</li>
              <button className="header__btn mt-2">связаться с нами</button>
            </ul>
          </div>
        </div>
        <div onClick={toggleOpened} className={ opened ? 'slide-menu__background':'hidden'}></div>
    </div>
  )
}
