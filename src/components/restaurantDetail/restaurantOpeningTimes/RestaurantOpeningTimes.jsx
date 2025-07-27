const RestaurantOpeningTimes = ({ openingTimes }) => {
  const renderedOpeningTimes =
    openingTimes.length > 0
      ? openingTimes.map((time) => {
          return (
            <>
              <p>{time.day}</p>
              <p>{time.open}</p>
              <p>{time.close}</p>
            </>
          );
        })
      : null;
  return renderedOpeningTimes;
};

export default RestaurantOpeningTimes;
