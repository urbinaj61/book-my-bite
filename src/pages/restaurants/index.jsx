import useSWR from "swr";
import Link from "next/link";
import RestaurantList from "@/components/restaurantList/RestaurantList";

const Restaurants = () => {
  const { data, error, isLoading } = useSWR(`api/restaurants`);

  if (error) console.error(error);
  if (!data) return;
  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      <RestaurantList data={data} />
      <Link href={"/"}>
        <button type="button">Return</button>
      </Link>
    </main>
  );
};

export default Restaurants;
