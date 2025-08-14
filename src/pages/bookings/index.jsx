import { useState } from "react";
import Link from "next/link";
import ShowMyBookings from "@/components/showMyBookings/ShowMyBookings";
import ShowMyBookingsContent from "../../components/showMyBookings/ShowMyBookingsContent";

const Bookings = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="bookings-page-container">
      {!email && <h2 className="bookings-page-heading">Bookings page</h2>}

      {!email && <ShowMyBookings setEmail={setEmail} />}
      {email && <ShowMyBookingsContent email={email} />}
    </section>
  );
};

export default Bookings;
