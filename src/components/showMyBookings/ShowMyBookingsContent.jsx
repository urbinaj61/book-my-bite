import { useState, useEffect } from "react";
//import useSWR from "swr";

const ShowMyBookingsContent = ({ email }) => {
  const normalizedEmail = email?.trim().toLowerCase();
  const swrPath = email ? `/api/bookings/${normalizedEmail}` : null;

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(swrPath);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.error(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  //const { data, error, isLoading } = useSWR(swrPath);

  if (!data || data.length === 0) {
    return <p>No bookings found for {email} </p>;
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
