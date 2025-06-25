import './page.scss'
import Story from '../component/secondary-homepage/component/secondary-story/Story';
import Numbers from '../component/secondary-homepage/component/secondary-numbers/Numbers';
import Steps from '../component/secondary-homepage/component/secondary-steps/Steps';
import Partners from '../component/secondary-homepage/component/secondary-partners/Partners';
import ContactForm from '../component/contactForm/ContactForm';
import Homepage from '../component/secondary-homepage/component/secondary-homepage/Homepage';

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
