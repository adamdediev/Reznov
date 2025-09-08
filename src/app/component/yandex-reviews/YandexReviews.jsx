export default function YandexReviews() {
  return (
    <div className="container">
    <div className="container-iframe "
      style={{
        width: "100%",
        height: "800px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <iframe
        style={{
          width: "100%",
          height: "100%",
          border: "1px solid #e6e6e6",
          borderRadius: "8px",
          boxSizing: "border-box",
        }}
        src="https://yandex.ru/maps-reviews-widget/147712595887?comments"
        title="Отзывы Reznov на Яндекс.Картах"
      ></iframe>
      <a
        href="https://yandex.ru/maps/org/reznov/147712595887/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "#b3b3b3",
          fontSize: "10px",
          fontFamily: "YS Text, sans-serif",
          padding: "0 16px",
          position: "absolute",
          bottom: "8px",
          width: "100%",
          textAlign: "center",
          left: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "block",
          maxHeight: "14px",
          whiteSpace: "nowrap",
          boxSizing: "border-box",
        }}
      >
        Reznov на карте Москвы — Яндекс Карты
      </a>
    </div>
    </div>
  );
}
