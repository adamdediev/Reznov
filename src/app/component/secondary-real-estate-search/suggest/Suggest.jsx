

export default function Suggest() {


    return (
        <section className='suggest'>
            <div className="container">
                <div className="suggest__title">что мы предлагаем</div>
                <div className="suggest__container">
                    <div className="suggest__offices suggest__font">
                        <strong>Готовые квартиры </strong> на вторичном рынке
                    </div>
                    <div className="suggest__container-grid">
                        <div className="suggest__retail suggest__font">
                             <strong> Квартиры в новостройках </strong> на этапе строительства
                       
                        </div>
                        <div className="suggest__nonstationary suggest__font">
                            Загородные <strong>дома </strong> и  <strong>таунхаусы </strong>
                        </div>
                        <div className="suggest__new-complex suggest__font">
                            <strong>Земельные участки </strong> 
                        </div>
                        <div className="suggest__standalone suggest__font">
                            <strong> Коммерческие помещения </strong>  для вашего бизнеса
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}