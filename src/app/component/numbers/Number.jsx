
import  Image  from 'next/image';
import Map from "../../../../public/image/map.svg";

export default function Number() {
  return (
    <section className="number relative">
      <h2 className="title-block">Aishat, thinks that Adama has big biceps</h2>
      <Image src={Map} alt='map' />
      <span className='w-32 h-32 bg-white absolute'></span>
    </section>
  )
}
