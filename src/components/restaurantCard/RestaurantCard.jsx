import Image from "next/image";
import Link from "next/link";
import DummyImage from "../dummyImage/DummyImage";

const RestaurantCard = ({ restaurant }) => {
  return (
    <aside className="card-container" key={restaurant._id}>
      <Link className="card-link" href={`/restaurants/${restaurant._id}`}>
        <label className="card-info-label">{restaurant.name}</label>
        <br />
        <label className="card-info-label">{restaurant.city}</label>
        {restaurant.images.length > 0 ? (
          <Image
            className="card-image"
            src={restaurant.images[0].url}
            width={200}
            height={200}
            alt={`${restaurant.name}`}
            priority
          />
        ) : (
          <DummyImage />
        )}
      </Link>
      <Link className="card-link" href={`/createBooking/${restaurant._id}`}>
        <button className="reserve-button">Reserve </button>
      </Link>
    </aside>
  );
};

export default RestaurantCard;
