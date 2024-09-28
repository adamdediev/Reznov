import "./homepage.scss";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__blue-circle-1 md:block hidden"></div>
      <div className="homepage__blue-circle-2"></div>
      <div className="homepage__content">
        <h2>для тех, кто ищет большее</h2>
      </div>

      <div className="homepage__lead-circle">
        <div className="homepage__lead">
          <h1>Ваш путь к покупке недвижимости начинается здесь</h1>
          <button>Бесплатная консультация</button>
        </div>
        <div className="homepage__circle">
        <img className="homepage__circle--img" src="./image/text-circle.svg" alt="" />
        <img className="homepage__circle--img-house" src="./image/house.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
