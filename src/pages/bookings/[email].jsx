import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ShowMyBookingsContent from "../../components/showMyBookings/ShowMyBookingsContent";

const Bookings = () => {
  const router = useRouter();
  const { email } = router.query;

  return (
    <>
      <div>
        <h1>Bookings page</h1>
        {email && <ShowMyBookingsContent email={email} />}
      </div>
      <Link href={"/"}>
        <button>Return</button>
      </Link>
    </>
  );
};

export default Bookings;
