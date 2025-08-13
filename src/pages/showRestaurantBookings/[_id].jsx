import useSWR from "swr";
import { useRouter } from "next/router";
import ShowRestaurantBookingsContent from "@/components/restaurantData/showRestaurantBookings/ShowRestaurantBookingsContent";

const RestaurantBookings = () => {
  const router = useRouter();
  const { _id } = router.query;

  const { data, error, isLoading } = useSWR(
    `/api/restaurantData/showRestaurantBookings/${_id}`
  );

  if (error) console.error(error);
  if (isLoading) return <p>Loading...</p>;
  if (!data) return;

  return <ShowRestaurantBookingsContent restaurant={data} />;
};

export default RestaurantBookings;
