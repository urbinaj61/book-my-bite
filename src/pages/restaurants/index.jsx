import useSWR from "swr";
import RestaurantList from "@/components/restaurantList/RestaurantList";

const Restaurants = () => {
  const { data, error, isLoading } = useSWR(`api/restaurants`);

  if (error) console.error(error);
  if (!data) return;
  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      <RestaurantList data={data} />
    </main>
  );
};

export default Restaurants;
