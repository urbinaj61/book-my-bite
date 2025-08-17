import Link from "next/link";
import RestaurantMainDetails from "./restaurantMainDetails/RestaurantMainDetails";
import RestaurantImages from "./restaurantImages/RestaurantImages";
import RestaurantMenuLinks from "./restaurantMenuLinks/RestaurantMenuLinks";
import RestaurantOpeningTimes from "./restaurantOpeningTimes/RestaurantOpeningTimes";

const RestaurantDetail = ({ restaurant }) => {
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
    description,
    images,
    menuLinks,
    openingTimes,
  } = restaurant;

  const restaurantMainDetails = {
    name,
    address1,
    address2,
    postcode,
    city,
    email,
    phone,
    type,
    cuisine,
    description,
  };

  return (
    <section className="main-restaurant-content-wrapper">
      <section className="restaurant-content-container-details">
        <h2 className="cards-page-heading-details">Restaurant Data</h2>
        <aside className="restaurant-content-card-details">
          <aside className="restaurant-accordion-content-details">
            <RestaurantMainDetails
              restaurantMainDetails={restaurantMainDetails}
            />
            <RestaurantImages images={images} />
            <RestaurantMenuLinks menuLinks={menuLinks} />
            <RestaurantOpeningTimes openingTimes={openingTimes} />
          </aside>

          <aside className="restaurant-buttons-container">
            <Link
              className="card-link"
              href={`/createBooking/${restaurant._id}`}
            >
              <button className="reserve-button">Reserve</button>
            </Link>
            <Link className="card-link" href={"/restaurants"}>
              <button className="reserve-button">Return</button>
            </Link>
          </aside>
        </aside>
      </section>
    </section>
  );
};

export default RestaurantDetail;
