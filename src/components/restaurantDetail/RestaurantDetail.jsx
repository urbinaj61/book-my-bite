import { useRouter } from "next/router";
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
    images,
    menuLinks,
    openingTimes,
  } = restaurant;
  const router = useRouter();

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

  return (
    <>
      <div>
        <RestaurantMainDetails restaurantMainDetails={restaurantMainDetails} />
        <RestaurantImages images={images} />
        <RestauranrtMenuLinks menuLinks={menuLinks} />
        <RestaurantOpeningTimes openingTimes={openingTimes} />
      </div>

      <button onClick={() => router.back()}>Return</button>
    </>
  );
};

export default RestaurantDetail;
