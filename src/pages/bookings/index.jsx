import { useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import ShowMyBookings from "@/components/showMyBookings/ShowMyBookings";
import ShowMyBookingsContent from "@/components/showMyBookingsContent/ShowMyBookingsContent";

const Bookings = () => {
  const [email, setEmail] = useState("");

  const swrPath = email ? `/api/bookings/${email}` : null;

  const { data, error, isLoading } = useSWR(swrPath);

  return (
    <>
      <div>
        <h1>Bookings page</h1>
        <ShowMyBookings setEmail={setEmail} />
        <ShowMyBookingsContent
          email={email}
          data={data}
          error={error}
          isLoading={isLoading}
        />
      </div>
      <Link href={"/"}>
        <button>Return</button>
      </Link>
    </>
  );
};

export default Bookings;
