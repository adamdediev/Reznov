import './page.scss'
import Homepage from '../component/countryside/homepage/Homepage';
import Chips from '../component/countryside/chips/Chips';
import PhotoGallery from '../component/countryside/photo-gallery/PhotoGallery';
import ContactFormCountryside from '../component/countryside/contact-form-countryside/ContactFormCountryside';

export default function page() {
  return (
    <main>
      <Homepage />
      <Chips />
      <PhotoGallery />
      <ContactFormCountryside />
    </main>
  )
}
