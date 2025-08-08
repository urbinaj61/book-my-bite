import Image from "next/image";
import Link from "next/link";
import DummyImage from "../dummyImage/DummyImage";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div key={restaurant._id}>
      <Link href={`/restaurants/${restaurant._id}`}>
        <p>{restaurant.name}</p>
        {restaurant.images.length > 0 ? (
          <Image
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
      <Link href={`/createBooking/${restaurant._id}`}>
        <button>Book your table</button>
      </Link>
    </div>
  );
};

export default RestaurantCard;
