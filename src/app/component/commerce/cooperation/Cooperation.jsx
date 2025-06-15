import Image from "next/image";
import BackgroundLeft from '/public/image/cooperation-background-1.svg'
import BackgroundRigth from '/public/image/cooperation-background-2.svg'


export default function Cooperation() {

    return (
        <section className="cooperation">
            <Image className="cooperation__background-1" src={BackgroundLeft} alt={"BackgroundLeft"}/>
            <Image className="cooperation__background-2" src={BackgroundRigth} alt={"BackgroundRigth"}/>
            <div className="cooperation__content">
                <h2>мы сотрудничаем с <strong> крупнейшими </strong>
                    франшизами страны</h2>
                <svg className="arrow-vert hidden md:block" xmlns="http://www.w3.org/2000/svg" width="15" height="114" viewBox="0 0 15 114" fill="none">
                    <path
                        d="M6.84953 112.768C7.24005 113.159 7.87322 113.159 8.26374 112.768L14.6277 106.404C15.0182 106.014 15.0182 105.38 14.6277 104.99C14.2372 104.599 13.604 104.599 13.2135 104.99L7.55664 110.647L1.89978 104.99C1.50926 104.599 0.876093 104.599 0.485568 104.99C0.0950439 105.38 0.0950438 106.014 0.485568 106.404L6.84953 112.768ZM7.55664 0.671875L6.55664 0.671875L6.55664 112.061L7.55664 112.061L8.55664 112.061L8.55664 0.671875L7.55664 0.671875Z"
                        fill="black"/>
                </svg>
                <div className="cooperation__content-text">
                    <span>А значит, подберем для Вас коммерческое помещение в Москве, МО и СПб под конкретную франшизу, параметры у нас уже есть</span>
                </div>
            </div>
        </section>
    )
}