import RestaurantCard from "../restaurantCard/RestaurantCard";

const RestaurantList = ({ data }) => {
  return data.map((restaurant) => <RestaurantCard restaurant={restaurant} />);
};

export default RestaurantList;
