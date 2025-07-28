import useSWR from "swr";
import ShowMyBookings from "@/components/showMyBookings/ShowMyBookings";
import { useState } from "react";

const Bookings = () => {
  const [email, setEmail] = useState("");
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  const swrPath = email
    ? `${baseURL}api/bookings/${encodeURIComponent(email)}`
    : null;

  const { data, error, isLoading } = useSWR(swrPath);

  let content = null;

  if (!email) {
    content = (
      <>
        <p>Please enter your email to view your bookings.</p>
      </>
    );
  } else if (isLoading) {
    content = (
      <>
        <p>Loading bookings for {email}...</p>
      </>
    );
  } else if (error) {
    content = (
      <>
        <p>Error loading bookings for {email}. Please try again.</p>
      </>
    );
  } else if (data) {
    if (data.length === 0) {
      content = (
        <>
          <p>No bookings found for {email}.</p>
        </>
      );
    } else {
      content = (
        <>
          <h2>Your Bookings:</h2>
          <ul>
            {data.map((booking) => (
              <li key={booking._id}>
                <strong>Restaurant:</strong> {booking.restaurantId?.name}
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
  } else {
    content = (
      <>
        <p>An unexpected error occurred or data format is incorrect.</p>
      </>
    );
  }

  return (
    <>
      <div>
        <h1>Bookings page</h1>
        <ShowMyBookings setEmail={setEmail} />
        {content}
      </div>
    </>
  );
};

export default Bookings;
