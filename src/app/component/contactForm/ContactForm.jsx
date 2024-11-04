'use client'
import {Button} from "@nextui-org/button";
import InputMask from 'react-input-mask-next'
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleNameChange = (e) => {
    const value = e.target.value
    if (/^[a-zA-Zа-яА-ЯёЁ\s]*$/.test(value)) {
      setName(value)
    }
  }

  const handlePhoneChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, '')
    setPhone(numericValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Имя:", name)
    console.log("Телефон:", phone)
  }


  return (
    <section className="contact-form">
        <h2 className="title-block">свяжитесь с нами</h2>
        <div className="contact-form__block">
          <div className="contact-form__title md:w-1/2 w-full">
          <span>доверьте сделку с недвижимостью</span>
          <p>профессионалам</p>
          </div>
          <div className="contact-form__formgroup md:w-1/2 w-full">

          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              ВАШЕ ИМЯ
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:text-white"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
              НОМЕР ТЕЛЕФОНА
              </label>
              <InputMask
                mask="+7 (999) 999-99-99"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="+7 (___) ___-__-__"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:text-white"
              />
            </div>
            <Button type='submit'  className="contact-form__formgroup-button">
                свяжитесь со мной
                </Button>
          </form>
          </div>
        </div>
    </section>
  )
}
