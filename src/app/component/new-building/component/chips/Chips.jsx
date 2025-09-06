import Image from "next/image";
import Background from '/public/image/chips-background.svg'
import ContactFormPhone from "@/app/component/contact-form-phone/ContactFormPhone";

export default function Chips() {
    return (
        <section className="chips">
            <Image className='chips__background' src={Background} alt={"Background"}/>
            <div className='container'>
                <h2 className="chips__title">наши фишки</h2>
                <div className="chips__block">
                    <div className="chips__block-1">
                        <span>
                            скидки на квартиры до
                        </span>
                        <p>30%</p>
                    </div>
                    <div className="chips__block-2">
                        <div className="chips__block-2-1">
                            <span>поможем получить ипотеку в более чем</span>
                            <h2>20 <span className="chips__block-2-1-bank-mobile">банках </span></h2>
                            <span className="chips__block-2-1-bank">банках </span>
                        </div>
                        <div className="chips__block-2-2">
                            огромная база новостроек по  москве и области
                        </div>
                    </div>
                    <div className="chips__block-3">
                        закрытые продажи и
                        уникальные лоты
                    </div>

                </div>
                <ContactFormPhone />
            </div>
        </section>
    );
}
