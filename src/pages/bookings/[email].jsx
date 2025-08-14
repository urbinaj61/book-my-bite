import Link from "next/link";
import { useRouter } from "next/router";
import ShowMyBookingsContent from "../../components/showMyBookings/ShowMyBookingsContent";

const Bookings = () => {
  const router = useRouter();
  const { email } = router.query;

  return (
    <section className="bookings-page-container">
      <h2 className="bookings-page-heading">Bookings page</h2>
      {email && <ShowMyBookingsContent email={email} />}
    </section>
  );
};

export default Bookings;
