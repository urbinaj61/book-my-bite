import { useState } from "react";
import CreateYourBooking from "./CreateYourBooking";

const GetBookingDate = ({ data }) => {
  const [date, setDate] = useState();

  return (
    <>
      <h2>Book your bite</h2>
      <h3>{data[0].restaurantId.name}</h3>
      <h4>{data[0].restaurantId.address1}</h4>
      <label htmlFor="booked date">Please select a date</label>
      <input type="date" onChange={(e) => setDate(e.target.value)} />{" "}
      {date && <CreateYourBooking data={data} date={date} />}
    </>
  );
};

export default GetBookingDate;
