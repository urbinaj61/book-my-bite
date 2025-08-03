import { useState, useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

const editBookingPage = () => {
  const [restaurantData, setRestaurantData] = useState(null);

  const router = useRouter();
  const { _id } = router.query;

  const { data, error, isLoading } = useSWR(
    _id ? `/api/editBooking/${_id}` : null
  );

  useEffect(() => {
    if (!data?.restaurantId) return;

    const fetchData = async () => {
      try {
        console.log(data.restaurantId);
        const response = await fetch(`/api/restaurants/${data.restaurantId}`);
        const restaurant = await response.json();
        setRestaurantData(restaurant);
      } catch (error) {
        console.error("Fetch error:", error.message);
      }
    };

    fetchData();
  }, [data?.restaurantId]);

  if (error) console.error(error);
  if (isLoading) return <p>Loading...</p>;
  if (!data) return null;

  console.log({ data });
  console.log({ restaurantData });

  return (
    <>
      <div>
        <h2>Edit a booking page</h2>
      </div>
    </>
  );
};

export default editBookingPage;
