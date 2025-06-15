import Image from "next/image";
import  Partner1 from"/public/image/patner-chips-1.svg";
import  Partner2 from"/public/image/patner-chips-2.svg";
import  Partner3 from"/public/image/patner-chips-3.svg";
import  Partner4 from"/public/image/patner-chips-4.svg";


export default function Partner() {
    return (
        <section className="partner">
                <div className="partner__title container">партнеры агенства</div>
            <div className="partner__block-background">
                 <div className="container partner__block-image">
                    <Image src={Partner1} alt={"Partner1"}/>
                    <Image src={Partner2} alt={"Partner2"}/>
                    <Image src={Partner3} alt={"Partner3"}/>
                    <Image src={Partner4} alt={"Partner4"}/>
                 </div>
                <div className="container partner__block-description">
                    + более 100 застройщиков
                </div>
                </div>
        </section>
);
}
