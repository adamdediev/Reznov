'use client'
import { useEffect, useState } from 'react';
import SlideMenu from '../burger/SlideMenu';
import DialogWithForm  from '../dialog-with-form/DialogWithForm';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY>50){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className={`${isScrolled ? 'bg-dark-gray' : ''} header__navigation`}>
    <div className="container flex justify-between">
        <div className="header__logo"></div>
          <nav className='flex items-center sm:gap-8 gap-4'>
          <a href="tel:8 800 201-78-81"> <button className='header__btn-mobile'></button></a>
            <button className='header__btn md:block hidden' onClick={handleOpen}>обратный звонок</button>
            <div className="header__phone md:block hidden"><a href="tel:8 800 201-78-81">8 800 201-78-81</a></div>
            <SlideMenu/>
          </nav>
        </div>
        <DialogWithForm open={open} setOpen={setOpen}  />
    </div>
      
  )
}
