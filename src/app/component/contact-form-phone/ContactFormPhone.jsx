'use client'
import InputMask from 'react-input-mask-next'
import { useState } from 'react'

export default function ContactFormPhone({ house = false }) {
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState({ type: '', message: '' })

  const handlePhoneChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, '')
    setPhone(numericValue)
    if (error) setError('')
  }

  const validate = () => {
    if (!phone) {
      setError('Введите номер телефона')
      return false
    }
    if (phone.length !== 11 || !phone.startsWith('7')) {
      setError('Введите корректный номер телефона (+7 ...)')
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) return

    setStatus({ type: '', message: 'Отправка...' })

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: '+' + phone }), // имя не передаём
      })
      const data = await res.json()

      if (res.ok && data.success) {
        setStatus({ type: 'success', message: 'Заявка успешно отправлена!' })
        setPhone('')
        setError('')

        setTimeout(() => setStatus({ type: '', message: '' }), 3000)
      } else {
        setStatus({ type: 'error', message: 'Ошибка при отправке: ' + (data.error || JSON.stringify(data)) })
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Ошибка: ' + err.message })
    }
  }

  return (
    <div className="contact-form-phone__form">
      <div className="contact-form-phone__form-row">
        <span className="contact-form-phone__form-title">
          {house
            ? "Оставьте заявку и мы подберем дом вашей мечты!"
            : "Оставьте заявку и мы подберем квартиру вашей мечты!"}
        </span>
        <InputMask
          mask="+7 (999) 999-99-99"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="+7 (___) ___-__-__"
          className={`form-input ${error ? 'border-red-500' : ''}`}
        />
        <p className={`${error ? "opacity-100" : "opacity-0"} text-red-500 text-xs`}>Введите корректный номер телефона</p>

        <button onClick={handleSubmit} type="submit" className="contact-form-phone__button">
          Свяжитесь со мной
        </button>

        {status.message && (
          <p
            className={`form-status ${status.type === 'success' ? 'show' : ''}`}
            style={{ background: status.type === 'error' ? 'red' : 'green' }}
          >
            {status.message}
          </p>
        )}
      </div>
    </div>
  )
}
