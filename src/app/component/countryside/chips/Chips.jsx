import React from 'react'
import ContactFormPhone from '../../contact-form-phone/ContactFormPhone'

export default function Chips() {
  return (
    <section className='chips-countryside'>
        <div className='chips-countryside__content container'>
           <div className='chips-countryside__block'>
           <div className='chips-countryside__block-1'>
            <h2>ОГРОМНЫЙ</h2>
            <p>выбор предложений</p> </div>
           <div className='chips-countryside__block-2'> 
           <div className='chips-countryside__block-2-1'> 
            <h2>ИНДИВИДУАЛЬНОЕ</h2>
            <p>сопровождение сделки</p> 
            </div> 
            <div className='chips-countryside__block-2-2'> 
            <p>от ведущих экспертов рынка</p> 
            <h2><span>БЕСПЛАТНАЯ</span> КОНСУЛЬТАЦИЯ</h2>
                        
            </div>

           </div>
           <div className='chips-countryside__block-3'>
            <p>расположение объектов</p>
            <h2>УДОБНОЕ</h2>
            </div>
           </div>
        </div>
        <div className="container">
        <ContactFormPhone />
        </div>
        
    </section>
  )
}
