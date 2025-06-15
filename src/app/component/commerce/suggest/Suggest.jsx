

export default function Suggest() {


    return (
        <section className='suggest'>
            <div className="container">
                <div className="suggest__title">что мы предлагаем</div>
                <div className="suggest__container">
                    <div className="suggest__offices suggest__font">
                        <strong>ОФИСНЫЕ </strong> ПОМЕЩЕНИЯ
                    </div>
                    <div className="suggest__container-grid">
                        <div className="suggest__retail suggest__font">
                            РИТЕЙЛ ДЛЯ <strong> РОЗНИЧНЫХ </strong> <strong> ПРОДАЖ </strong> И <strong> УСЛУГОВОГО
                            БИЗНЕСА
                        </strong>
                        </div>
                        <div className="suggest__nonstationary suggest__font">
                            НЕСТАЦИОНАРНЫЕ <br/> <strong>ТОРГОВЫЕ ОБЪЕКТЫ </strong>
                        </div>
                        <div className="suggest__new-complex suggest__font">
                            <strong>В НОВЫХ </strong> ЖИЛЫХ КОМПЛЕКСАХ
                        </div>
                        <div className="suggest__standalone suggest__font">
                            <strong> ОТДЕЛЬНОСТОЯЩИЕ </strong> ЗДАНИЯ
                        </div>
                    </div>
                </div>

                <div className="suggest__form">
                    <div className="suggest__form-row">
                         <span className="suggest__form-title">
                         Оставьте заявку и мы подберем квартиру вашей мечты!
                         </span>
                        <input className="suggest__input" type="tel" placeholder="Номер телефона"/>
                        <button type="submit" className="suggest__button">Свяжитесь со мной</button>
                    </div>
                </div>
            </div>
        </section>

    )
}