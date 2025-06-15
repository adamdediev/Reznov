import Image from "next/image";
import HomepageImage from '/public/image/commerce.jpg'

export default function Homepage() {
    return (
        <section className="homepage-commerce">
            <div className="homepage-commerce__background-container">
                <Image
                    className="homepage-commerce__background"
                    src={HomepageImage}
                    alt={'HomepageImage'}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="homepage-commerce__content container">
                <div className="homepage-commerce__title">
                    <h1>Коммерческие помещения</h1>
                    <span> для разных сфер дейстельности</span>
                </div>
                <svg className="hidden md:block arrow-horiz" xmlns="http://www.w3.org/2000/svg" width="121" height="8" viewBox="0 0 121 8" fill="none">
                    <path
                        d="M120.354 4.26695C120.549 4.07152 120.549 3.75493 120.353 3.55984L117.169 0.380605C116.973 0.185512 116.657 0.185785 116.461 0.381215C116.266 0.576645 116.267 0.893228 116.462 1.08832L119.293 3.91431L116.467 6.74517C116.272 6.9406 116.272 7.25719 116.468 7.45228C116.663 7.64737 116.98 7.6471 117.175 7.45167L120.354 4.26695ZM0.000431219 4.51719L120 4.4137L120 3.4137L-0.000431219 3.51719L0.000431219 4.51719Z"
                        fill="black"/>
                </svg>
                <svg className="md:hidden arrow-vert" xmlns="http://www.w3.org/2000/svg" width="8" height="42" viewBox="0 0 8 42" fill="none">
                    <path
                        d="M3.69918 41.4756C3.89444 41.6709 4.21102 41.6709 4.40629 41.4756L7.58827 38.2936C7.78353 38.0984 7.78353 37.7818 7.58827 37.5865C7.393 37.3913 7.07642 37.3913 6.88116 37.5865L4.05273 40.4149L1.22431 37.5865C1.02904 37.3913 0.712461 37.3913 0.517199 37.5865C0.321937 37.7818 0.321937 38.0984 0.517199 38.2936L3.69918 41.4756ZM4.05273 0.76062L3.55273 0.76062L3.55273 41.1221L4.05273 41.1221L4.55273 41.1221L4.55273 0.76062L4.05273 0.76062Z"
                        fill="black"/>
                </svg>
                <button>заказать подбор</button>
            </div>
        </section>
    );
}