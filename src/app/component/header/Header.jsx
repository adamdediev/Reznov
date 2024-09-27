import './header.scss'
import SlideMenu from '../burger/SlideMenu';

export default function Header() {
  return (
    <div className='header__navigation'>
    <div className="container flex justify-between">
        <div className="header__logo"></div>
          <nav className='flex items-center gap-8'>
            <button className='header__btn-mobile'></button>
            <button className='header__btn md:block hidden'>обратный звонок</button>
            <div className="header__phone md:block hidden"><a href="tel:8 800 201-78-81">8 800 201-78-81</a></div>
            <SlideMenu/>
          </nav>
        </div>
    </div>
      
  )
}
