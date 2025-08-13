import { useState } from "react";
import Link from "next/link";
import ShowMyBookings from "@/components/showMyBookings/ShowMyBookings";
import ShowMyBookingsContent from "../../components/showMyBookings/ShowMyBookingsContent";

const Bookings = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="general-page-container allPages">
      <h2 className="general-page-heading">Bookings page</h2>
      <ShowMyBookings setEmail={setEmail} />
      {email && <ShowMyBookingsContent email={email} />}
      <Link href={"/"} className="general-link">
        <button type="button" className="return-button">
          Return
        </button>
      </Link>{" "}
    </section>
  );
};

export default Bookings;
