import Link from "next/link";
import RestaurantMainDetails from "./restaurantMainDetails/RestaurantMainDetails";
import RestaurantImages from "./restaurantImages/RestaurantImages";
import RestauranrtMenuLinks from "./restaurantMenuLinks/RestaurantMenuLinks";
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
    <>
      <div>
        <RestaurantMainDetails restaurantMainDetails={restaurantMainDetails} />
        {/* <RestaurantImages images={images} />
        <RestauranrtMenuLinks menuLinks={menuLinks} />
        <RestaurantOpeningTimes openingTimes={openingTimes} /> */}
      </div>
      <Link href={`/createBooking/${restaurant._id}`}>
        <button>Book your table</button>
      </Link>
      <Link href={"/restaurants"}>
        <button>Return</button>
      </Link>
    </>
  );
};

export default RestaurantDetail;
