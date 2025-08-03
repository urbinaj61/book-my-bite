import useSWR from "swr";
import { useRouter } from "next/router";

const CreateBookingPage = () => {
  const router = useRouter();
  const { _id } = router.query;

  console.log(_id);

  const { data, error, isLoading } = useSWR(`/api/editBooking/${_id}`);

  if (error) console.error(error);
  if (!data) return;
  if (isLoading) return <p>Loading...</p>;

  console.log({ data });

  return (
    <>
      <div>
        <h2>Create a booking page</h2>
      </div>
    </>
  );
};

export default CreateBookingPage;
