import useSWR from "swr";
import { useRouter } from "next/router";
import GetBookingDate from "@/components/createBooking/GetBookingDate";

const CreateBookingPage = () => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const { _id } = router.query;

  const { data, error, isLoading } = useSWR(
    `${baseURL}api/createBooking/${_id}`
  );

  if (error) console.error(error);
  if (!data) return;
  if (isLoading) return <p>Loading...</p>;

  console.log(data);

  return (
    <>
      <div>
        <h2>Create a booking page</h2>
        <GetBookingDate data={data} />
      </div>
    </>
  );
};

export default CreateBookingPage;
