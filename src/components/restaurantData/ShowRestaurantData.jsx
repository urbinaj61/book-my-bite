import RestaurantMainDetails from "../restaurantDetail/restaurantMainDetails/RestaurantMainDetails";
import RestaurantImages from "../restaurantDetail/restaurantImages/RestaurantImages";
import RestauranrtMenuLinks from "../restaurantDetail/restaurantMenuLinks/RestaurantMenuLinks";
import RestaurantOpeningTimes from "../restaurantDetail/restaurantOpeningTimes/RestaurantOpeningTimes";

const ShowRestaurantData = ({ data }) => {
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
    images,
    menuLinks,
    openingTimes,
  } = data[0];

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
  };

  if (data) {
    return (
      <>
        <RestaurantMainDetails restaurantMainDetails={restaurantMainDetails} />
        <RestaurantImages images={images} />
        <RestauranrtMenuLinks menuLinks={menuLinks} />
        <RestaurantOpeningTimes openingTimes={openingTimes} />
        <section>
          <button>Delete restaurant data</button>
          <button>Edit restaurant data</button>
          <button>Show restaurant bookings</button>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section>
          <button>Create restaurant data</button>
        </section>
      </>
    );
  }
};

export default ShowRestaurantData;
