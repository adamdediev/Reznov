'use client'
import Image from "next/image";
import Tap from '/public/image/shema-advantages.svg';
import { useState } from "react";

const ArrowSvg = () => (
    <svg className='where-work__arrow' xmlns="http://www.w3.org/2000/svg" width="90" height="8" viewBox="0 0 90 8" fill="none">
        <path
            d="M89.8457 4.38328C90.041 4.18802 90.041 3.87143 89.8457 3.67617L86.6638 0.49419C86.4685 0.298928 86.1519 0.298928 85.9566 0.49419C85.7614 0.689452 85.7614 1.00603 85.9566 1.2013L88.7851 4.02972L85.9566 6.85815C85.7614 7.05341 85.7614 7.37 85.9566 7.56526C86.1519 7.76052 86.4685 7.76052 86.6638 7.56526L89.8457 4.38328ZM0.392578 4.52972H89.4922V3.52972H0.392578V4.52972Z"
            fill="#85CEE4"
        />
    </svg>
);

const ArrowSvgMobile = () => (
    <svg className='where-work__arrow-mobile' xmlns="http://www.w3.org/2000/svg" width="9" height="43" viewBox="0 0 9 43" fill="none">
        <path
            d="M4.14644 42.3036C4.34171 42.4989 4.65829 42.4989 4.85355 42.3036L8.03553 39.1217C8.23079 38.9264 8.23079 38.6098 8.03553 38.4146C7.84027 38.2193 7.52369 38.2193 7.32843 38.4146L4.5 41.243L1.67157 38.4146C1.47631 38.2193 1.15973 38.2193 0.964464 38.4146C0.769202 38.6098 0.769202 38.9264 0.964464 39.1217L4.14644 42.3036ZM4.5 0.391235L4 0.391235L4 41.9501L4.5 41.9501L5 41.9501L5 0.391235L4.5 0.391235Z"
            fill="#85CEE4"/>
    </svg>
)

const card = [
    {
        title: 'бесплатная консультация',
        description: 'Согласуем с вами параметры объекта и прочие критерии, которые для вас важны. Сориентируем на рынке недвижимости, подскажем какие варианты вы можете для себя рассмотреть',
    },
    {
        title: 'Поиск вариантов',
        description: 'Отбираем лучшие варианты недвижимости, которые вам подойдут - просматриваем все объявления на площадках, а также лоты в базах агентств и закрытых продажах',
    },
    {
        title:'Организуем просмотры',
        description:'сопроводим вас на просмотре или осмотрим объект за вас, проверим его реальное состояние и юридическую чистоту, поторгуемся, договоримся о проведении сделки на ваших условиях ',
    },
    {
        title:'Проведем сделку под ключ',
        description:'подготовим все необходимые документы, поможем с одобрением ипотеки, сопроводим на сделке в банке, проследим за взаиморасчетами и регистрацией договора',
    },
    {
        title:'Произведем приемку объекта',
        description:'проследим, чтобы все договоренности были соблюдены, коммунальные платежи оплачены, необходимые документы и имущество передано',
    },


]

export default function WhereWork() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
    <section className="where-work">
        <div className="container">
            <Image className="where-work__image" src={Tap} alt="Tap"/>
            <h3 className="where-work__title">как это работает</h3>
            <div className="where-work__content">

                {card.map((item, i) => (
                    <div
                        key={i}
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className={`where-work__button${openIndex === i ? ' open' : ''}`}
                        style={{ cursor: "pointer" }}
                    >
                        <span className={`where-work__button-title ${openIndex === i ? '' : 'open-content'}`}>
                            {item.title}
                        </span>
                                        <div className={`where-work__button-content${openIndex === i ? ' block' : ''}`}>
                            <span>
                                процесс <ArrowSvg /> <ArrowSvgMobile/>
                            </span>
                                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
}
