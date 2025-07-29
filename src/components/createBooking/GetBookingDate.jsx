import { useState } from "react";
import CreateYourBooking from "./CreateYourBooking";

const GetBookingDate = ({ data }) => {
  const [date, setDate] = useState();

  console.log(data);

  return (
    <>
      <h2>Book your bite</h2>
      <label htmlFor="booked date">Please select a date</label>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      {date && <CreateYourBooking data={data} date={date} />}
    </>
  );
};

export default GetBookingDate;
