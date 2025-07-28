import { useState } from "react";
import useSWR from "swr";
import ShowMyBookings from "@/components/showMyBookings/ShowMyBookings";
import ShowMyBookingsContent from "@/components/showMyBookingsContent/ShowMyBookingsContent";

const Bookings = () => {
  const [email, setEmail] = useState("");
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  const swrPath = email ? `${baseURL}/api/bookings/${email}` : null;

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
    </>
  );
};

export default Bookings;
