'use client'
import InputMask from 'react-input-mask-next'

export default function NumberForm() {
  return (
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
            />
            <button type='submit' >свяжитесь со мной</button>
        </div>
    </div>
  )
}
