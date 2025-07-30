import Link from "next/link";

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
    <div>
      <Link href={"/bookings"}>
        <button>Show my Bookings</button>
      </Link>
      <p>{name}</p>
      <p>{address1}</p>
      <p>{address2}</p>
      <p>{postcode}</p>
      <p>{city}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{type}</p>
      <p>{cuisine}</p>
    </div>
  );
};

export default RestaurantMainDetails;
