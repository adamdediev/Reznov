import "./ourFaces.scss";
import Image  from 'next/image';
import Denis from '../../../../public/image/Ksenia.jpg';


export default function OurFaces() {
  return (
    <section className="our-faces">
      <h2>мы в лицах</h2>
      <div className="our-faces__card">
        <Image src={Denis} />
      </div>

    </section>
  )
}
