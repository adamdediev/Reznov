import Image  from 'next/image';
import Denis from '../../../../public/image/denis.jpg';
import Ksenia from '../../../../public/image/Ksenia.jpg';
import Sergey from '../../../../public/image/Sergey.jpeg';


export default function OurFaces() {
  return (
    <section className="our-faces">
      <h2 className="title-block">мы в лицах</h2>
      <div className="our-faces__container-card">
        <div className="our-faces__card our-faces__card-boss">

        <Image src={Denis}  alt='Denis'/>  
        <div className="our-faces__card-info">
        <h5 className="our-faces__name">Денис севостьянов</h5>
        <div className="our-faces__management">руководитель агенства <br/> </div>
        <span className="our-faces__comments"> более 10 лет в недвижимости</span>
        </div>

        </div>

        <div className="our-faces__card">
          
        <Image src={Ksenia}  alt='Ksenia'/>
        <div className="our-faces__card-info">
        <h5 className="our-faces__name">ксения сокольская</h5>
        <div className="our-faces__management">руководитель отдела работы с клиентами</div>
        <span className="our-faces__comments">ведет самые сложные кейсы</span>
        </div>
        </div>

        <div className="our-faces__card">

        <Image src={Sergey}  alt='Sergey'/>
        <div className="our-faces__card-info">
          <h5 className="our-faces__name">сергей болдин</h5>
          <div className="our-faces__management">руководитель отдела контроля качества</div>
          <span className="our-faces__comments">обучает сотрудников</span>
        </div>
        
        </div>

      </div>

    </section>
  )
}
