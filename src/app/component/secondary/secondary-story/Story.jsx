import image1 from '/public/image/carousel-1.svg';
import image2 from '/public/image/carousel-2.svg';
import image3 from '/public/image/carousel-3.svg';
import StoryCard from '../../story-card/StoryCard';
import StoryCardMobile from '../../story-card/StoryCardMobile';


export default function Story() {

  const stories = [
    {
      title: 'Юлия 2 года безуспешно пыталась продать свои апартаменты за 7,9 млн руб.',
      listItems: [
        'через неделю после обращения к нам был получен аванс',
        'апартаменты проданы за 8,8 млн руб.',
      ],
      videoSrc: '/video/video-1.mp4',
      images: [image1, image2, image3],
    },
    {
      title: 'Сергей работал с риелтором, но тот практически год не мог продать его трехкомнатную квартиру за 15,5 млн руб.',
      listItems: [
        'мы продали квартиру за месяц',
        'квартира продана за 17,2 млн руб.',
      ],
      videoSrc: '/video/video-1.mp4',
      images: [image1, image2, image3], 
    },
    {
      title: 'Ирина уже нашла покупателя на свою квартиру, но тот продавливал ее по цене и прочим условиям покупки. Двухкомнатную квартиру евро-формата она уже почти продала за 8 млн руб.',
      listItems: [
        'мы отстояли интересы клиента, сделка прошла на наших условиях',
        'квартира продана нами за 9,2 млн руб.',
      ],
      videoSrc: '/video/video-1.mp4',
      images: [image1, image2, image3], 
    },
  ];

  return (
    <section className='story'>
      <div className="container"> 
       <h2 className="title-block">Истории наших клиентов</h2>
        <div className="story__card">
        {stories.map((story, index) => (
          <StoryCard
            key={index}
            title={story.title}
            listItems={story.listItems}
            videoSrc={story.videoSrc}
            images={story.images}
          />
        ))}
        <div className="text-white text-left">Больше отзывов на <a className="border-b border-white" href="https://yandex.ru/maps/-/CDSqnTOz">Яндекс картах</a></div>
        </div>
        <div className="story__card-mobile">
          <StoryCardMobile slides={stories} />
        </div>
      </div>
    </section>
  )
}
