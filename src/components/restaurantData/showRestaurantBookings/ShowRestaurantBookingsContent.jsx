import useSWR from "swr";
import Link from "next/link";
import { useRouter } from "next/router";
import { changeDateFormat1 } from "../../../../utilities/getDayOfWeek";

const ShowRestaurantBookingsContent = () => {
  const router = useRouter();
  const { _id } = router.query;

  const swrPath = _id
    ? `/api/restaurantData/showRestaurantBookings/${_id}`
    : null;

  const { data, error, isLoading, mutate } = useSWR(swrPath);

  const handleDelete = async (id) => {
    const response = await fetch(
      `/api/restaurantData/showRestaurantBookings/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      mutate();
    } else {
      console.error("Failed to delete booking");
    }
  };

  if (!data || data.length === 0) {
    return (
      <>
        <h2>No bookings found</h2>
        <Link href={`/`}>
          <button>Return</button>
        </Link>
      </>
    );
  }

  if (isLoading) return <p>Loading bookings</p>;
  if (error) return <p>Error loading bookings.</p>;

  return (
    <>
      <h2>Reservations:</h2>
      <ul>
        {data.map((booking) => (
          <li key={booking._id}>
            <strong>Restaurant:</strong> {booking.restaurantName}
            <br />
            <strong>Address:</strong> {booking.restaurantAddress1}
            <br />
            <strong>Booked by:</strong> {booking.customerName}
            <br />
            <strong>Date:</strong> {changeDateFormat1(booking.dateBooked)}
            <br />
            <strong>Time:</strong> {booking.timeSlot?.start} -{" "}
            {booking.timeSlot?.end}
            <br />
            <strong>Table:</strong> {booking.tableBooked}
            <br />
            <strong>Seats:</strong> {booking.seatsBooked}
            <br />
            <button onClick={() => handleDelete(booking._id)}>
              Cancel Booking
            </button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShowRestaurantBookingsContent;
