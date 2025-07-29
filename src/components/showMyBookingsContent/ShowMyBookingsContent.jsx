const ShowMyBookingsContent = ({ email, data, error, isLoading }) => {
  if (!email) return <p>Please enter your email to view your bookings.</p>;
  if (isLoading) return <p>Loading bookings for {email}...</p>;
  if (error)
    return <p>Error loading bookings for {email}. Please try again.</p>;

  if (data) {
    if (data.length === 0) {
      return <p>No bookings found for {email}.</p>;
    } else {
      return (
        <>
          <h2>Your Reservations:</h2>
          <ul>
            {data.map((booking) => (
              <li key={booking._id}>
                <strong>Restaurant:</strong>{" "}
                {booking.restaurantId?.customerName}
                <br />
                <strong>Address:</strong> {booking.restaurantId?.address1}
                <br />
                <strong>Date:</strong> {booking.dateBooked}
                <br />
                <strong>Time:</strong> {booking.timeSlot?.start} -{" "}
                {booking.timeSlot?.end}
                <br />
                <strong>Table:</strong> {booking.tableBooked}
                <br />
                <strong>Seats:</strong> {booking.seatsBooked}
                <hr />
              </li>
            ))}
          </ul>
        </>
      );
    }
  }

  return <p>An unexpected error occurred or data format is incorrect.</p>;
};

export default ShowMyBookingsContent;
