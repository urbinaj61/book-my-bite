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
          <button type="button">Return</button>
        </Link>
      </>
    );
  }

  if (isLoading) return <p>Loading bookings</p>;
  if (error) return <p>Error loading bookings.</p>;

  return (
    <section className="main-content-wrapper">
      <section className="bookings-content-container">
        <h2 className="bookings-content-heading">Restaurant Reservations</h2>

        {data.map((booking) => (
          <aside key={booking._id} className="booking-card">
            <aside className="restaurant-info">
              <p className="booking-info">{booking.restaurantName}</p>
              <p className="booking-info">{booking.restaurantAddress1}</p>
              <label className="booking-info-label">Booked by</label>
              <p className="booking-info">{booking.customerName}</p>
            </aside>
            <aside className="table-booking-info">
              <label className="booking-info-label">Date Booked</label>
              <p className="booking-info">
                {changeDateFormat1(booking.dateBooked)}
              </p>
              <label className="booking-info-label">Booking Time</label>
              <p className="booking-info">
                {booking.timeSlot?.start} - {booking.timeSlot?.end}
              </p>
            </aside>

            <aside className="table-info">
              <label className="booking-info-label">Table Booked</label>
              <p className="booking-info">{booking.tableBooked}</p>
              <label className="booking-info-label">Table Booked for</label>
              <p className="booking-info">{booking.seatsBooked}</p>
            </aside>

            <aside className="buttons-container">
              <button
                onClick={() => handleDelete(booking._id)}
                className="booking-cancel-button"
              >
                Cancel Booking
              </button>
            </aside>
          </aside>
        ))}
      </section>
    </section>
  );
};

export default ShowRestaurantBookingsContent;
