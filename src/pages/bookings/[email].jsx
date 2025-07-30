import useSWR from "swr";
import ShowMyBookingsContent from "@/components/showMyBookings/ShowMyBookingsContent";

const ShowBookingsPage = ({ email }) => {
  const normalizedEmail = email.trim().toLowerCase();
  const swrPath = email ? `/api/bookings/${normalizedEmail}` : null;

  const { data, error, isLoading } = useSWR(swrPath);

  if (isLoading) return <p>Loading bookings for {normalizedEmail}...</p>;
  if (!data) return <p>No data to display</p>;
  if (error)
    return (
      <p>Error loading bookings for {normalizedEmail}. Please try again.</p>
    );

  return (
    <ShowMyBookingsContent data={data} normalizedEmail={normalizedEmail} />
  );
};

export default ShowBookingsPage;
