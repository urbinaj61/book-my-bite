import useSWR from "swr";
import { useRouter } from "next/router";
import EditRestaurantData from "@/components/restaurantData/editRestaurantData/EditRestaurantData";

const editRestaurantDataPage = () => {
  const router = useRouter();
  const { _id } = router.query;

  const { data, error, isLoading } = useSWR(
    _id ? `/api/editRestaurantData/${_id}` : null
  );

  if (isLoading || (!data && !error)) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error(error);
    return <p>Error loading data.</p>;
  }

  return (
    <section className="bookings-page-container">
      {data && <EditRestaurantData restaurantData={data} />}
    </section>
  );
};

export default editRestaurantDataPage;
