import { useState } from "react";
import CreateYourBooking from "./CreateYourBooking";

const GetBookingDate = ({ data }) => {
  const [date, setDate] = useState();

  return (
    <section className="create-booking-wrapper">
      <section className="create-booking-container">
        <aside className="create-booking-card">
          <h3>{data.name}</h3>
          <h4>{data.address1}</h4>
          <label className="booking-info-label" htmlFor="booked date">
            Please select a date
          </label>
          <input
            className="create-date-input"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
          {date && <CreateYourBooking restaurantData={data} date={date} />}
        </aside>
      </section>
    </section>
  );
};

export default GetBookingDate;
