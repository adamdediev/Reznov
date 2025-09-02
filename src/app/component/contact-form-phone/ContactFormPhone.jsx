
'use client'
import InputMask from 'react-input-mask-next'
import { useState } from 'react';

export default function ContactFormPhone() {
  const [phone, setPhone] = useState('')

  const handlePhoneChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, '')
    setPhone(numericValue)
  }

  const handleSubmit = (e) => {
    setPhone('')
  }

  return (
  <div className="contact-form-phone__form">
    <div className="contact-form-phone__form-row">
         <span className="contact-form-phone__form-title">
         Оставьте заявку и мы подберем квартиру вашей мечты!
         </span>
         <InputMask
          mask="+7 (999) 999-99-99"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="+7 (___) ___-__-__"
          className="form-input"
        />
        <button onClick={handleSubmit} type="submit" className="contact-form-phone__button">Свяжитесь со мной</button>
    </div>
 </div>
  )
}
