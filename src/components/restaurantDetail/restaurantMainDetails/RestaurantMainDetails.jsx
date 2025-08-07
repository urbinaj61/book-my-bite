const RestaurantMainDetails = ({ restaurantMainDetails }) => {
  const {
    name,
    address1,
    address2,
    postcode,
    city,
    email,
    phone,
    type,
    cuisine,
  } = restaurantMainDetails;
  return (
    <section className="main-restaurant-details">
      <p className="main-restaurant-details_name">{name}</p>
      <p className="main-restaurant-details_address">{address1}</p>
      <p className="main-restaurant-details_address">{address2}</p>
      <p className="main-restaurant-details_address">{postcode}</p>
      <p className="main-restaurant-details_address">{city}</p>
      <p className="main-restaurant-details_email">{email}</p>
      <p className="main-restaurant-details_phone">{phone}</p>
      <p className="main-restaurant-details_type">{type}</p>
      <p className="main-restaurant-details_cuisine">{cuisine}</p>
    </section>
  );
};

export default RestaurantMainDetails;
