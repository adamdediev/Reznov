'use client'
import InputMask from 'react-input-mask-next'
import { useState } from 'react';

export default function Form() {
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
    <form onSubmit={handleSubmit} className="w-full">
    <div className="mb-4">
      <label htmlFor="name" className="block font-semibold mb-2">
      ВАШЕ ИМЯ
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none "
      />
    </div>
    <div className="mb-6">
      <label htmlFor="phone" className="block font-semibold mb-2">
      НОМЕР ТЕЛЕФОНА
      </label>
      <InputMask
        mask="+7 (999) 999-99-99"
        value={phone}
        onChange={handlePhoneChange}
        placeholder="+7 (___) ___-__-__"
        className="w-full px-4 py-2 border rounded-md focus:outline-none"
      />
    </div>
    <button type='submit'  className="contact-form__formgroup-button" >свяжитесь со мной</button>

  </form>
  )
}
