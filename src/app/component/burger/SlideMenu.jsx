'use client'
import React, { useState } from 'react'
import DialogWithForm from '../dialog-with-form/DialogWithForm';
import Burger from './Burger';
import Link from "next/link";
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
              <Link href="/"><li>главная</li></Link>
              <Link href="/new-building"><li>новостройки</li></Link>
              <Link href="/secondary"><li>вторичное жилье</li></Link>
              <Link href="/commerce"><li>коммерческая</li></Link>
              <Link href="/commerce"><li>загородная</li></Link>

            </ul>
            <ul className='pt-12'>
              <li><a href='https://reznov-group.ru/about_us'>о нас</a></li>
              <li><a href='https://reznov-group.ru/career'>Вакансии</a></li>
              <li><a href='https://reznov-group.ru/contacts'>Контакты</a></li>
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
