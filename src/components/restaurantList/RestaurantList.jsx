import Image from "next/image";

const RestaurantList = ({ data }) => {
  return data.map((restaurant) => (
    <div key={restaurant._id}>
      <p>{restaurant.name}</p>
      {restaurant.images.map((image, index) =>
        image.imageUrl !== "" ? (
          <Image
            key={index}
            src={image.imageUrl}
            width={200}
            height={200}
            alt={`${restaurant.name} image`}
          />
        ) : null
      )}
    </div>
  ));
};

export default RestaurantList;
