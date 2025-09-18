"use client"
import Form from './Form';

export default function ContactForm() {
  return (
    <section className="contact-form container">
        <h2 className="title-block">свяжитесь с нами</h2>
        <div className="contact-form__block">
          <div className="contact-form__title md:w-1/2 w-full">
          <span>доверьте сделку с недвижимостью</span>
          <p>профессионалам</p>
          </div>
          <div className="contact-form__formgroup md:w-1/2 w-full">
            <Form 
              onSuccess={()=>{
                if (typeof window !== "undefined" && window.ym) {
                  window.ym(84225793, "reachGoal", "lead_podbor")
                }
              }} 
            />
          </div>
        </div>
    </section>
  )
}
