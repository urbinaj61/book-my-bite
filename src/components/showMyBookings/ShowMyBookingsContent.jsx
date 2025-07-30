const ShowMyBookingsContent = ({ data, email }) => {
  if (!data || data.length === 0) {
    return <p>No bookings found for {email} </p>;
  }

  return (
    <>
      <h2>Your Reservations:</h2>
      <ul>
        {data.map((booking) => (
          <li key={booking._id}>
            <strong>Restaurant:</strong> {booking.restaurantId?.customerName}
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
};

export default ShowMyBookingsContent;
