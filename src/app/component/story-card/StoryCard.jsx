import Carousel from '../carousel/Carousel';

const StoryCard = ({ title, listItems, videoSrc, images }) => {
  return (
    <div className="story__card-item">
      <div className="story__card-swiper">
        <Carousel image1={images[0]} image2={images[1]} image3={images[2]} />
      </div>
      <div className="story__content">
        <div className="story__content-text">
          <div className="story__content-title">{title}</div>
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="story__content-video">
          <video autoPlay loop muted playsInline>
            <source src={videoSrc} type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
          <p>видео-отзыв</p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
