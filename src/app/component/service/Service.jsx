import './service.scss'
import Image  from 'next/image';
import newBuilding from '../../../../public/image/apartment-plan.svg';
import carCard from '../../../../public/image/car-card.svg';


export default function Service() {
  return (
    <section className='service'>
    <h2 className='service__title'>услуги</h2>

    <div className="service__content-block">
    <div className="service__block-item" >

    <span className='service__block-item-card'>
    <h4>новостройки</h4>
    <a href="">Перейти</a>
    </span>
    <Image className='service__block-item-1' src={carCard} alt='car card'/>
    </div>

    <div className="service__block-item">
    <span className='service__block-item-card service__card-2'>
    <h4>вторичное жилье</h4>
    <a href="">Перейти</a>
    </span> 

    <span className='service__block-item-card service__card-3'>
    <h4>коммерческие <br/> помещения</h4>
    <a href="">Перейти</a>
    </span>

    </div>
    
    <div className="service__block-item">
    <span className='service__block-item-card service__card-4'>
    <h4>загородная <br/> недвижимость</h4>
    <a href="">Перейти</a>
    </span>
    <Image className='service__block-item-2' src={newBuilding} alt='car card'/>

    <span className='service__block-item-card service__card-5'>
    <h4>ипотека</h4>
    <a href="">Перейти</a>
    </span>
    </div>

    </div>
    </section>
  )
}
