import useSWR from "swr";
import { useRouter } from "next/router";
import ShowRestaurantData from "@/components/restaurantData/ShowRestaurantData";

const showRestaurantData = () => {
  const router = useRouter();
  const { email } = router.query;

  // First SWR fetch for restaurant data
  const { data, error, isLoading } = useSWR(
    email ? `/api/restaurantData/${email}` : null
  );

  // Handle loading and error states for all fetches
  if (isLoading || (!data && !error)) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error(error);
    return <p>Error loading data.</p>;
  }

  return <div>{<ShowRestaurantData data={data} />}</div>;
};

export default showRestaurantData;
