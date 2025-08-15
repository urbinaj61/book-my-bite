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
      <section className="restaurant-accordion-data-container">
        <label className="restaurant-info-label">Restaurant name</label>
        <p className="main-restaurant-details">{name}</p>
        <label className="restaurant-info-label">Restaurant address</label>
        <p className="main-restaurant-details">{address1}</p>
        <p className="main-restaurant-details">{address2}</p>
        <p className="main-restaurant-details">{postCode}</p>
        <p className="main-restaurant-details">{city}</p>
        <label className="restaurant-info-label">Restaurant email</label>
        <p className="main-restaurant-details">{email}</p>
        <label className="restaurant-info-label">Restaurant phone</label>
        <p className="main-restaurant-details">{phone}</p>
        <label className="restaurant-info-label">Restaurant type</label>
        <p className="main-restaurant-details">{type}</p>
        <label className="restaurant-info-label">Restaurant cuisine</label>
        <p className="main-restaurant-details">{cuisine}</p>
        <label className="restaurant-info-label">Restaurant description</label>
        <p className="main-restaurant-details">{description}</p>
      </section>
    </details>
  );
};

export default RestaurantMainDetails;
