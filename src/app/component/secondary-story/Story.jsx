import image1 from '../../../../public/image/carousel-1.jpg';
import image2 from '../../../../public/image/carousel-2.jpg';
import image3 from '../../../../public/image/carousel-3.jpg';

// import homepageMobile from '../../../../public/image/secondary-homepage-mobile.jpg';
import  Carousel  from '../carousel/Carousel';


export default function Story() {
  return (
    <section className='story'>
      <div className="container"> 
       <h2 className="title-block">Истории наших клиентов</h2>
          <div className="story__card-item">
            <div className="story__card-swiper">  
            <Carousel image1={image1} image2={image2} image3={image3} />
            </div>
          </div>
      </div>
    </section>
  )
}
