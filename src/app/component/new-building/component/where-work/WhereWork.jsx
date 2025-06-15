'use client'
import Image from "next/image";
import Tap from '/public/image/new-buildng-tap.svg';
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
        description: 'Оставьте Ваш номер и в течение 15 минут с Вами свяжется наш менеджер. Он задаст несколько уточняющих вопросов и начнет подбор квартир по Вашим критериям.',
        restultTitle: 'подборка из проверенных вариантов'
    },
    {
        title: 'просмотр вариантов',
        description: 'После выбора окончательного варианта, наши специалисты помогут Вам получить одобрение по ипотеке даже в сложной ситуации. У нас есть преференции от нескольких банков на пониженную ставку.',
        restultTitle:'вы узнаете все о проекте, а мы согласуем скидку'
    },
    {
        title:'одобрение ипотеки',
        description:'Оставьте Ваш номер и в течение 15 минут с Вами свяжется наш менеджер. Он задаст несколько уточняющих вопросов и начнет подбор квартир по Вашим критериям.',
        restultTitle:'несколько одобренных заявок'
    },
    {
        title:'оформление документов',
        description:'Забронируем за Вами квартиру, направим в банк ДДУ для согласования сделки. Расскажем про дополнительные расходы по сделке. Поможем оформить выгодную страховку. Ускорим проведение сделки.',
        restultTitle:'полное юридическое сопровождение'
    },
    {
        title:'сделка',
        description:'В день сделки Вас будет сопровождать наш менеджер. Он ответит на все возникающие вопросы, обратит Ваше внимание на важные детали, сократит до минимума риски непредвиденных обстоятельств. Вам не придется разбираться в юридических тонкостях сделки.',
        restultTitle:'уверенность в сделке'
    },
    {
        title:'постпродажное обсуживание',
        description:'Поможем принять квартиру после ввода в эксплуатацию, посоветуем проверенные ремонтные бригады, поможем с получением права собственности.',
        restultTitle:'поддержка и после окончания строительства'
    }

]

export default function WhereWork() {
    const [open, setOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="where-work container">
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
                            <span>
                результат <ArrowSvg /> <ArrowSvgMobile/>
            </span>
                            <h3>{item.restultTitle}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
