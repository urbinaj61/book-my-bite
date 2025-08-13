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
      <>
        <section className="create-restaurantData">
          <aside className="content-overlay">
            <h3>Your Email has not been registered.</h3>
            <h4>Please enter your data!</h4>

            <Link href={`/createRestaurantData`}>
              <button>Create restaurant data</button>
            </Link>
            <Link href={"/restaurantHome"}>
              <button type="button">Return</button>
            </Link>
          </aside>
        </section>
      </>
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
    <section className="show-restaurant-details-main-page">
      <aside>
        <RestaurantMainDetails restaurantMainDetails={restaurantMainDetails} />
        <RestaurantImages images={images} />
        <RestaurantMenuLinks menuLinks={menuLinks} />
        <RestaurantOpeningTimes openingTimes={openingTimes} />
        <section>
          <button onClick={() => handleDelete(_id)}>
            Delete Restaurant Data
          </button>
          <Link href={`/editRestaurantData/${_id}`}>
            <button>Edit restaurant data</button>
          </Link>
          <Link
            className="button show-bookings-button"
            href={`/showRestaurantBookings/${_id}`}
          >
            <button>Show Bookings</button>
          </Link>
          <Link href={"/"}>
            <button type="button">Return</button>
          </Link>
        </section>
      </aside>
    </section>
  );
};

export default ShowRestaurantData;
