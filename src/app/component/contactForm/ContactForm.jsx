import {Button} from "@nextui-org/button";

export default function ContactForm() {
  return (
    <section className="contact-form">
        <h2 className="title-block">свяжитесь с нами</h2>
        <div className="contact-form__block">
          <div className="contact-form__title w-1/2">
          <span>доверьте сделку с недвижимостью</span>
          профессионалам
          </div>
          <div className="contact-form__formgroup w-1/2">

          <Button  className="contact-form__formgroup-button">
          свяжитесь со мной
          </Button>
          </div>
        </div>

    </section>
  )
}
