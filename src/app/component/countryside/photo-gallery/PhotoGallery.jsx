import Image from 'next/image';
import PhotoGalleryImage from '/public/image/image-countryside.jpg';
import PhotoGalleryImage1 from '/public/image/countryside-mobile-image-1.jpg';
import PhotoGalleryImage2 from '/public/image/countryside-mobile-image-2.jpg';
import PhotoGalleryImage3 from '/public/image/countryside-mobile-image-3.jpg';


export default function PhotoGallery() {
  return (
    <section className='photo-gllery'>
        <Image src={PhotoGalleryImage} alt='PhotoGalleryImage' className='photo-gllery__desktop' />
        
        <div className='photo-gllery__mobile'>
        <Image src={PhotoGalleryImage1} alt='PhotoGalleryImage1'  />
        <Image src={PhotoGalleryImage2} alt='PhotoGalleryImage2'  />
        <Image src={PhotoGalleryImage3} alt='PhotoGalleryImage3'  />
        </div>
    </section>
  )
}
