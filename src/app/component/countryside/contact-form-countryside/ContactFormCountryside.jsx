
import ContactForm from '../../contactForm/ContactForm';

export default function  ContactFormCountryside() {
  return (
    <section className="countryside-contact-form container">
        <h2 className="countryside-contact-form__title ">Подберите идеальное жилье среди <strong>сотен проверенных вариантов</strong></h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="114" viewBox="0 0 15 114" fill="none">
          <path d="M6.84758 113.021C7.2381 113.412 7.87127 113.412 8.26179 113.021L14.6258 106.657C15.0163 106.267 15.0163 105.633 14.6258 105.243C14.2352 104.852 13.6021 104.852 13.2115 105.243L7.55468 110.9L1.89783 105.243C1.5073 104.852 0.87414 104.852 0.483615 105.243C0.0930907 105.633 0.0930907 106.267 0.483615 106.657L6.84758 113.021ZM7.55469 0.924805L6.55469 0.924805L6.55468 112.314L7.55468 112.314L8.55468 112.314L8.55469 0.924805L7.55469 0.924805Z" fill="black"/>
        </svg>
      <ContactForm />
    </section>
  )
}
