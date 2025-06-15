import './page.scss'
import Homepage from '../component/new-building/component/homepage/Homepage';
import WhereWork from "../component/new-building/component/where-work/WhereWork";
import Chips from "../component/new-building/component/chips/Chips";
import Partner from "../component/new-building/component/partner/Partner";
import ContactForm from "../component/contactForm/ContactForm";


export default function page() {
  return (
    <main>
        <Homepage/>
        <WhereWork/>
        <Chips/>
        <Partner/>
        <ContactForm />
    </main>
  )
}
