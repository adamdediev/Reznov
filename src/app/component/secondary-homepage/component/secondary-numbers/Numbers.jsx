import NumbersForm from './NumberForm'

export default function Numbers() {
  return (
    <section className='numbers'>
     <div className="container"> 
      <h2 className="title-block">цифры</h2>
        <div className="numbers__card-container">
          <div className="w-100 md:w-1/4 numbers__card-1">
            <p>продаем квартиры в среднем на 15% <strong>выше их рыночной стоимости</strong></p>
            <span>15%</span>
          </div>
            <div className="w-100 md:w-2/4 numbers__card">
              <div className="w-100 numbers__card-2">
                <p>15-20</p>
                <span>клиентов ежемесячно обращаются к нам за подбором квартиры, <strong>Ваш будущий покупатель уже у нас</strong> </span>
              </div>
              <div className="w-100 numbers__card-3">
              <p>6</p>
              <span> лет на рынке</span>
              </div>
            </div>
          <div className="w-100 md:w-1/4 numbers__card-4">
            <p>&gt;800+</p>
            <span>довольных клиентов</span>
          </div>
        </div>
        <NumbersForm />
     </div>
    </section>
  )
}
