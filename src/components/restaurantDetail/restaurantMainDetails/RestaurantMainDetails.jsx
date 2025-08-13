const RestaurantMainDetails = ({ restaurantMainDetails }) => {
  const {
    name,
    address1,
    address2,
    postCode,
    city,
    email,
    phone,
    type,
    cuisine,
    description,
  } = restaurantMainDetails;
  return (
    <details className="restaurant-accordion">
      <summary className="restaurant-accordion-header">
        Restaurant Details
      </summary>
      <section className="restaurant-data-details">
        <label>Restaurant name</label>
        <p className="main-restaurant-details_name">{name}</p>
        <label>Restaurant address</label>
        <p className="main-restaurant-details_address">{address1}</p>
        <p className="main-restaurant-details_address">{address2}</p>
        <p className="main-restaurant-details_address">{postCode}</p>
        <p className="main-restaurant-details_address">{city}</p>
        <label>Restaurant email</label>
        <p className="main-restaurant-details_email">{email}</p>
        <label>Restaurant phone</label>
        <p className="main-restaurant-details_phone">{phone}</p>
        <label>Restaurant type</label>
        <p className="main-restaurant-details_type">{type}</p>
        <label>Restaurant cuisine</label>
        <p className="main-restaurant-details_cuisine">{cuisine}</p>
        <label>Restaurant description</label>
        <p className="main-restaurant-description">{description}</p>
      </section>
    </details>
  );
};

export default RestaurantMainDetails;
