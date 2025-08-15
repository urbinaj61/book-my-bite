const RestaurantOpeningTimes = ({ openingTimes }) => {
  const renderedOpeningTimes =
    openingTimes.length > 0
      ? openingTimes.map((time, i) => {
          return (
            <aside key={i} className="opening-times-container">
              <p className="opening-times-day">{time.day}</p>
              <p className="opening-times-range">{time.open}</p>
              <p className="opening-times-range">{time.close}</p>
            </aside>
          );
        })
      : null;
  return (
    <details className="restaurant-accordion">
      <summary className="restaurant-accordion-header">
        Restaurant Opening Times
      </summary>
      <section className="restaurant-content-card">
        <section className="restaurant-data-container">
          {renderedOpeningTimes}
        </section>
      </section>
    </details>
  );
};

export default RestaurantOpeningTimes;
