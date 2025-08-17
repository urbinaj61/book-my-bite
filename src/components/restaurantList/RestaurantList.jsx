import RestaurantCard from "../restaurantCard/RestaurantCard";

const RestaurantList = ({ data }) => {
  return (
    <section className="main-restaurant-content-wrapper">
      <section className="restaurant-content-container">
        <h2 className="cards-page-heading">Restaurants </h2>
        {data.map((restaurant) => (
          <aside className="restaurant-content-card" key={restaurant._id}>
            <RestaurantCard restaurant={restaurant} />
          </aside>
        ))}
      </section>
    </section>
  );
};

export default RestaurantList;
