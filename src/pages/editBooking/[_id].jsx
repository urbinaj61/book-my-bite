import useSWR from "swr";
import { useRouter } from "next/router";
import EditBooking from "@/components/editBooking/EditBooking";

const editBookingPage = () => {
  const router = useRouter();
  const { _id } = router.query;

  // First SWR fetch for the main booking data
  const { data, error, isLoading } = useSWR(
    _id ? `/api/editBooking/${_id}` : null
  );

  // Dependent SWR fetches that rely on the first one
  const { data: restaurantData, error: restaurantError } = useSWR(
    data?.restaurantId ? `/api/restaurants/${data.restaurantId}` : null
  );

  const { data: allBookedData, error: bookedDataError } = useSWR(
    data?.restaurantId && data?.dateBooked
      ? `/api/createBooking/${data.restaurantId}?date=${data.dateBooked}`
      : null
  );

  // Handle loading and error states for all fetches
  if (isLoading || (!data && !error)) {
    return <p>Loading...</p>;
  }

  if (error || restaurantError || bookedDataError) {
    console.error(error || restaurantError || bookedDataError);
    return <p>Error loading data.</p>;
  }

  return (
    <div>
      {restaurantData && (
        <EditBooking
          bookingData={data}
          restaurantData={restaurantData}
          allBookedData={allBookedData}
        />
      )}
    </div>
  );
};

export default editBookingPage;
