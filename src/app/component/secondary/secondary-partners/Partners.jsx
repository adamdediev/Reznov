import  Image  from 'next/image';
import Sber from '/public/image/sber.svg';
import Vtb from '/public/image/vtb.svg';
import Sovcombank from '/public/image/sovcombank.svg';
import OpenBank from '/public/image/open-bank.svg';
import NewBuilding from '/public/image/new-building.svg';
import Cian from '/public/image/Cian.svg';
import HouseClick from '/public/image/house-click.svg';
import Nmarket from '/public/image/Nmarket.svg';
import Avito from '/public/image/Avito.svg';

export default function Partners() {
  return (
    <section className="partners">
            <div className="container">
              <h2 className="title-block">партнеры агентства</h2>
            </div>
            <div className="partners__block">
              <div className="partners__block-1">
                    <Image src={Sber} alt={`Sber`} />
                    <Image src={Vtb} alt={`Vtb`} />
                    <Image src={Sovcombank} alt={`Sovcombank`} />
                    <Image src={OpenBank} alt={`OpenBank`} />
              </div>
              <div className="container">
              <span className='partners__text'>и еще более 10 банков-партнеров</span>
              </div>
              <div className="partners__block-2">
                <Image src={NewBuilding} alt={`NewBuilding`} />
                <Image src={Cian} alt={`Cian`} />
                <Image src={HouseClick} alt={`HouseClick`} />
                <Image src={Nmarket} alt={`Nmarket`} />
                <Image src={Avito} alt={`Avito`} />
              </div>
            </div>
    </section>
  )
}
