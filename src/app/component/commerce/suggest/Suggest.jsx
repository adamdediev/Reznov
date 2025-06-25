
import ContactFormPhone from '../../contact-form-phone/ContactFormPhone';

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

                <ContactFormPhone />
            </div>
        </section>

    )
}