import './page.scss'
import Homepage from '../component/secondary/secondary-homepage/Homepage';
import Story from '../component/secondary/secondary-story/Story';
import Numbers from '../component/secondary/secondary-numbers/Numbers';
import Steps from '../component/secondary/secondary-steps/Steps';
import Partners from '../component/secondary/secondary-partners/Partners';
import ContactForm from '../component/contactForm/ContactForm';


export default function page() {
  return (
    <main>
      <Homepage />
      <Story />
      <Numbers />
      <Steps />
      <Partners />
      <ContactForm />
    </main>
  )
}
