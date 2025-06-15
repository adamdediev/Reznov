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
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          ВАШЕ ИМЯ
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className="form-input"
        />
      </div>
      <div className="form-group last-group">
        <label htmlFor="phone" className="form-label">
          НОМЕР ТЕЛЕФОНА
        </label>
        <InputMask
          mask="+7 (999) 999-99-99"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="+7 (___) ___-__-__"
          className="form-input"
        />
      </div>
      <button type="submit" className="form-button">
        свяжитесь со мной
      </button>
    </form>
  )
}