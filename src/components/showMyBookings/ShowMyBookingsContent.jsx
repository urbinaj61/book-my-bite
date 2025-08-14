import useSWR from "swr";
import Link from "next/link";
import { changeDateFormat1 } from "../../../utilities/getDayOfWeek";

const ShowMyBookingsContent = ({ email }) => {
  const normalizedEmail = email?.trim().toLowerCase();
  const swrPath = email ? `/api/bookings/${normalizedEmail}` : null;

  const { data, error, isLoading, mutate } = useSWR(swrPath);

  const handleDelete = async (id) => {
    const response = await fetch(`/api/bookings/${normalizedEmail}?id=${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      mutate();
    } else {
      console.error("Failed to delete booking");
    }
  };

  if (isLoading)
    return (
      <p className="bookings-content-heading">
        Loading bookings for {normalizedEmail}...
      </p>
    );
  if (error)
    return (
      <p className="bookings-content-heading">
        Error loading bookings for {normalizedEmail}. Please try again.
      </p>
    );

  if (!data || data.length === 0) {
    return (
      <p className="bookings-content-heading">
        No bookings found for {email} entered
      </p>
    );
  }

  return (
    <section className="main-content-wrapper">
      <section className="bookings-content-container">
        <h2 className="bookings-content-heading">Your Reservations</h2>
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
              <Link
                href={`/editBooking/${booking._id}`}
                className="booking-change-link"
              >
                <button type="button" className="booking-change-button">
                  Change Booking
                </button>
              </Link>
              <button
                type="button"
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

export default ShowMyBookingsContent;
