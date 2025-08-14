import { useRouter } from "next/router";
import Link from "next/link";
import RestaurantMainDetails from "../restaurantDetail/restaurantMainDetails/RestaurantMainDetails";
import RestaurantImages from "../restaurantDetail/restaurantImages/RestaurantImages";
import RestaurantMenuLinks from "../restaurantDetail/restaurantMenuLinks/RestaurantMenuLinks";
import RestaurantOpeningTimes from "../restaurantDetail/restaurantOpeningTimes/RestaurantOpeningTimes";

const ShowRestaurantData = ({ data }) => {
  const router = useRouter();

  if (!data || data.length === 0) {
    return (
      <section className="bookings-page-container">
        <h2 className="bookings-page-heading">Restaurant Data</h2>
        <section className="create-restaurantData">
          <aside className="restaurant-info">
            <h3 className="booking-info">
              Your Email has not been registered.
            </h3>
            <h4 className="booking-info-label">Please enter your data!</h4>
            <aside className="buttons-container">
              <Link
                href={`/createRestaurantData`}
                className="booking-change-link"
              >
                <button className="booking-change-button">
                  Create restaurant data
                </button>
              </Link>
            </aside>
          </aside>
        </section>
      </section>
    );
  }

  const {
    _id,
    name,
    address1,
    address2,
    postCode,
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
    postCode,
    city,
    email,
    phone,
    type,
    cuisine,
  };

  const handleDelete = async (_id) => {
    const response = await fetch(
      `/api/restaurantData/deleteRestaurantData/${_id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      router.push("/");
    } else {
      console.error("Failed to delete restaurant data");
    }
  };

  return (
    <section className="main-restaurant-content-wrapper">
      <section className="restaurant-content-container">
        <h2 className="restaurant-content-heading">Restaurant Data</h2>
        <aside className="restaurant-card">
          <RestaurantMainDetails
            restaurantMainDetails={restaurantMainDetails}
          />
          <RestaurantImages images={images} />
          <RestaurantMenuLinks menuLinks={menuLinks} />
          <RestaurantOpeningTimes openingTimes={openingTimes} />
          <aside className="buttons-container">
            <button
              onClick={() => handleDelete(_id)}
              className="booking-cancel-button"
            >
              Delete Restaurant Data
            </button>
            <Link
              href={`/editRestaurantData/${_id}`}
              className="booking-change-link"
            >
              <button type="button" className="booking-change-button">
                Edit restaurant data
              </button>
            </Link>
            <Link
              className="booking-change-link"
              href={`/showRestaurantBookings/${_id}`}
            >
              <button type="button" className="booking-change-button">
                Show Bookings
              </button>
            </Link>
          </aside>
        </aside>
      </section>
    </section>
  );
};

export default ShowRestaurantData;
