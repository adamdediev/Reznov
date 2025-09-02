
import  Image  from 'next/image';
import Map from "../../../../public/image/map.svg";

export default function Number() {
  return (
    <section className="number ">  
      <h2 className="title-block mx-8">цифры</h2>
      <Image src={Map} alt='map' className='md:h-[650px] lg:h-[850px] h-[850px] absolute' />
    <div className="number__circle-block">
      <span className='lg:w-[216px] lg:h-[216px] w-[140px] h-[140px] sm:mt-[9px] -mt-20  sm:bg-[#A4B8BE] bg-[#1C1C1C] animate-move-sideways-1 sm:order-1 order-2  text-white sm:text-black'>
        <strong className='text-4xl'>800+</strong>
        довольных <br/> клиентов
      </span>
      <span className='lg:w-[236px] lg:h-[236px] w-[169px] h-[169px] sm:mt-[50px] -mt-8 sm:ml-0 ml-12  bg-[#1C1C1C] text-white
       animate-move-sideways-2 sm:order-2 order-6'>
        <strong className='lg;:text-4xl text-2xl'>до 30%</strong>
        скидка при покупки  <br/> новостройки
      </span>
      <span className='lg:w-[386px] lg:h-[386px] w-[160px] h-[160px] sm:ml-0 -ml-16 bg-[#85CEE4] animate-move-sideways-1 order-3 '>
        <strong className='lg:text-8xl text-3xl'>100</strong>
        застройщиков <br/> для подбора квартиры
      </span>
      <span className='lg:w-[166px] lg:h-[166px] w-[130px] h-[130px] gap-0 bg-slate-50 animate-move-sideways-2 sm:order-4 order-1 sm:ml-0 ml-28 '>
        <strong className='lg:text-3xl text-2xl'>20</strong>
        банков-партнеров
      </span>
      <span className='lg:w-[303px] lg:h-[303px] w-[215px] h-[215px] lg:mt-[-100px] -mt-10 bg-[#1C1C1C] text-white animate-move-sideways-1 sm:order-5 order-4'>
        <strong className='lg:text-5xl text-3xl'>600+ млн</strong>
        сумма проведенных <br/> сделок в 2024 г.
      </span>
      <span className='lg:w-[311px] lg:h-[311px] w-[230px] h-[230px] sm:ml-0 -ml-24 sm:mt-0 -mt-10 bg-[#A4B8BE] animate-move-sideways-2 sm:order-6 order-5'>
        <strong className='lg:text-5xl text-3xl'>на 15%</strong>
        выше рынка <br/> продаем квартиры
      </span>
      <span className='w-[273px] h-[273px] sm:mt-[-50px] bg-[#1C1C1C]  lg:flex hidden text-white animate-move-sideways-1 order-6'>
        <strong className='text-6xl'>2</strong>
        недели - среднее <br/> время 
        на нахождение
        покупателей
      </span>
    </div>
    </section>
  )
}
