'use client'
import InputMask from 'react-input-mask-next'
import { useState } from 'react'

export default function Form() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState({ type: '', message: '' }) // 👈 объект
  const [errors, setErrors] = useState({ name: '', phone: '' })

  const handleNameChange = (e) => {
    const value = e.target.value
    if (/^[a-zA-Zа-яА-ЯёЁ\s]*$/.test(value) || value === '') {
      setName(value)
    }
    if (errors.name) setErrors(prev => ({ ...prev, name: '' }))
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
    if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }))
  }

  const validate = () => {
    let valid = true
    const newErrors = { name: '', phone: '' }

    if (!name.trim()) {
      newErrors.name = 'Введите имя'
      valid = false
    }

    const digits = phone.replace(/\D/g, '')
    if (digits.length !== 11 || !digits.startsWith('7')) {
      newErrors.phone = 'Введите корректный номер телефона'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: '', message: '' })

    if (!validate()) return

    setStatus({ type: '', message: 'Отправка...' })

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), phone }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus({ type: 'success', message: 'Заявка успешно отправлена!' })
        setName('')
        setPhone('')
        setErrors({ name: '', phone: '' })

        // setTimeout(() => setStatus({ type: '', message: '' }), 3000)
      } else {
        setStatus({ type: 'error', message: 'Ошибка при отправке: ' + (data.error || JSON.stringify(data)) })
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Ошибка: ' + err.message })
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="form space-y-4">
      <div className="form-group">
        <label htmlFor="name" className="form-label">ВАШЕ ИМЯ</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className={`form-input ${errors.name ? 'border-red-500' : ''}`}
          required
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className="form-group last-group">
        <label htmlFor="phone" className="form-label">НОМЕР ТЕЛЕФОНА</label>
        <InputMask
          mask="+7 (999) 999-99-99"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="+7 (___) ___-__-__"
          className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
          required
        />
       <p className={`${errors.phone ? "opacity-100" : "opacity-0"} text-red-500 text-sm`}>Введите корректный номер телефона</p>
      </div>

      <button type="submit" className="form-button">свяжитесь со мной</button>

      
    </form>    
    {status.message && (
        <p
          className={`form-status ${status.type === 'success' ? 'show' : ''}`}
          style={{ background: status.type === 'error' ? 'red' : 'green' }}
        >
          {status.message}
        </p>
      )}
    </>

  )
}
