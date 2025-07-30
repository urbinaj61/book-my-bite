import { useState } from "react";
import Link from "next/link";
import ShowMyBookings from "@/components/showMyBookings/ShowMyBookings";
import ShowMyBookingsContent from "../../components/showMyBookings/ShowMyBookingsContent";

const Bookings = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <div>
        <h1>Bookings page</h1>
        <ShowMyBookings setEmail={setEmail} />
        {email && <ShowMyBookingsContent email={email} />}
      </div>
      <Link href={"/"}>
        <button>Return</button>
      </Link>
    </>
  );
};

export default Bookings;
