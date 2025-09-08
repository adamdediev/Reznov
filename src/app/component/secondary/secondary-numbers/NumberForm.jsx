'use client'
import InputMask from 'react-input-mask-next'
import { useState } from 'react';

export default function NumberForm() {
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState({ type: '', message: '' })
  const [disable, setDisable] = useState(false)

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
      setDisable(true)
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: '+' + phone }),
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
    finally{
      setDisable(false)
    }
  }
  return (
    <>
      <div className="number-form">
        <div className="number-form__text">
          <p className="hidden lg:flex">более</p>
          <strong className="number-form__text-number">80%</strong>
          <span>квартир продаются  <strong className="font-medium"> дешевле</strong>, чем они стоят на самом деле</span>
        </div>
        <div className="number-form__form">
          <span><strong className="font-medium">Узнайте</strong>, за сколько можно продать Вашу квартиру</span>
          <InputMask
            mask="+7 (999) 999-99-99"
            placeholder="НОМЕР ТЕЛЕФОНА"
            className="number-form__form-input"
            onChange={handlePhoneChange}
            value={phone}
          />
          <button onClick={handleSubmit} type="submit" className={`${disable ? 'opacity-50':''} contact-form-phone__button`} disabled={disable}>свяжитесь со мной</button>
          <p className={`${error ? "opacity-100" : "opacity-0"} text-red-500 text-xs`}>Введите корректный номер телефона</p>

        </div>
      </div>
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
