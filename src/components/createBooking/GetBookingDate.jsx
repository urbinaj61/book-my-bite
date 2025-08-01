import { useState } from "react";
import CreateYourBooking from "./CreateYourBooking";

const GetBookingDate = ({ data }) => {
  const [date, setDate] = useState();

  return (
    <>
      <h2>Book your bite</h2>
      <h3>{data.name}</h3>
      <h4>{data.address1}</h4>
      <label htmlFor="booked date">Please select a date</label>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      {date && <CreateYourBooking restaurantData={data} date={date} />}
    </>
  );
};

export default GetBookingDate;
