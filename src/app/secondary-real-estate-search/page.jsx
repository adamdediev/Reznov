import './page.scss'
import Homepage from '../component/secondary-real-estate-search/homepage/Homepage';
import Suggest from '../component/secondary-real-estate-search/suggest/Suggest';
import WhereWork from '../component/secondary-real-estate-search/where-work/WhereWork';
import Steps from '../component/secondary-real-estate-search/steps/Steps';
import ContactForm from '../component/secondary-real-estate-search/contact-form/ContactForm';


export default function page() {
  return (
    <main>
      <Homepage />
      <Suggest />
      <WhereWork />
      <Steps />
      <ContactForm />
    </main>
  )
}
