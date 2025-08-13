const RestaurantOpeningTimes = ({ openingTimes }) => {
  const renderedOpeningTimes =
    openingTimes.length > 0
      ? openingTimes.map((time, i) => {
          return (
            <div key={i}>
              <p>{time.day}</p>
              <p>{time.open}</p>
              <p>{time.close}</p>
            </div>
          );
        })
      : null;
  return (
    <details className="restaurant-accordion">
      <summary className="restaurant-accordion-header">
        Restaurant Opening Times
      </summary>
      <section className="restaurant-data-details">
        {renderedOpeningTimes}
      </section>
      ;
    </details>
  );
};

export default RestaurantOpeningTimes;
