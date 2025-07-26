import { useRouter } from "next/router";

const RestaurantDetail = ({ restaurant }) => {
  const router = useRouter();

  return (
    <>
      <div key={restaurant._id}>
        <p>{restaurant.name}</p>
      </div>

      <button onClick={() => router.back()}>Return</button>
    </>
  );
};

export default RestaurantDetail;
