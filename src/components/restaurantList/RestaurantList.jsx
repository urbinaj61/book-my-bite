import RestaurantCard from "../restaurantCard/RestaurantCard";

const RestaurantList = ({ data }) => {
  return data.map((restaurant) => (
    <RestaurantCard restaurant={restaurant} key={restaurant._id} />
  ));
};

export default RestaurantList;
