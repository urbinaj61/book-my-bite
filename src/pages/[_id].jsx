import useSWR from "swr";
import { useRouter } from "next/router";
import RestaurantDetail from "@/components/restaurantDetail/RestaurantDetail";

const Restaurant = () => {
  const router = useRouter();
  const { _id } = router.query;

  const { data, error, isLoading } = useSWR(`api/restaurants/${_id}`);

  if (error) console.error(error);
  if (isLoading) return <p>Loading...</p>;
  if (!data) return;

  return <RestaurantDetail restaurant={data} />;
};

export default Restaurant;
