import Form from './Form';

export default function ContactForm() {
  

  return (
    <section className="contact-form">
        <h2 className="title-block">свяжитесь с нами</h2>
        <div className="contact-form__block">
          <div className="contact-form__title md:w-1/2 w-full">
          <span>доверьте сделку с недвижимостью</span>
          <p>профессионалам</p>
          </div>
          <div className="contact-form__formgroup md:w-1/2 w-full">

            <Form/>
          </div>
        </div>
    </section>
  )
}
