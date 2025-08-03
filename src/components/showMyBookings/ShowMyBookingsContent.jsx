import useSWR from "swr";

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

  if (!data || data.length === 0) {
    return <p>No bookings found for {email} entered</p>;
  }

  if (isLoading) return <p>Loading bookings for {normalizedEmail}...</p>;
  if (error)
    return (
      <p>Error loading bookings for {normalizedEmail}. Please try again.</p>
    );

  return (
    <>
      <h2>Your Reservations:</h2>
      <ul>
        {data.map((booking) => (
          <li key={booking._id}>
            <strong>Restaurant:</strong> {booking.restaurantName}
            <br />
            <strong>Address:</strong> {booking.restaurantAddress1}
            <br />
            <strong>Booked by:</strong> {booking.customerName}
            <br />
            <strong>Date:</strong> {booking.dateBooked}
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

export default ShowMyBookingsContent;
