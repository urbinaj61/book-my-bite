import { useState } from "react";

import getDayOfWeek from "../../../utilities/getDayOfWeek";
import TimeSlotSelection from "./timeSlotSelection/TimeSlotSelection";
import TableSelection from "./tableSelection/TableSelection";

//Get day from date entered
const CreateYourBooking = ({ data, date }) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedTable, setSelectedTable] = useState("");

  const day = getDayOfWeek(date);

  //Get all bookings for this restaurant and date entered
  const filteredDates = data.filter((item) => {
    return item.dateBooked === date;
  });

  //Get all table information for this restaurant
  const tables = filteredDates[0].restaurantId.tableTypes.map((table) => table);

  //Get tables already booked for this restaurant on the date entered
  const filteredTables = filteredDates.map((item) => item.tableBooked);

  //Determine available tables
  const availableTables = tables.filter(
    (table1) => !filteredTables.find((table2) => table2 === table1.name)
  );

  //Get opening times for this restaurant
  const openingTimes = filteredDates[0].restaurantId.openingTimes.filter(
    (item) => item.day === day
  );

  //Get all timeslots for this restaurant and date entered
  const timeSlots = openingTimes[0].timeSlots.map((item) => item);

  //Get timeSlots already booked for this restaurant and date entered
  const filteredTimeSlots = filteredDates.map((item) => item.timeSlot);

  //Determine available timeslots
  const availableTimeSlots = timeSlots.filter(
    (slot1) => !filteredTimeSlots.find((slot2) => slot2.start === slot1.start)
  );

  const handleTableSelect = (event) => {
    setSelectedTable(event.target.value);
  };

  const handleTimeSlotSelect = (event) => {
    setSelectedTimeSlot(event.target.value);
  };

  return (
    <>
      {openingTimes[0].open !== "Closed" ? (
        <p>{`Opening Times: Open from ${openingTimes[0].open} till ${openingTimes[0].close}`}</p>
      ) : (
        <p>This restaurant is closed on this day</p>
      )}
      <form>
        <label htmlFor="customer-name">Please enter your name</label>
        <input type="text" id="customer-name" aria-label="customer-name" />
        <label htmlFor="customer-email">Please enter your email</label>
        <input type="text" id="customer-email" aria-label="customer-email" />
        <TableSelection
          onTableSelect={handleTableSelect}
          availableTables={availableTables}
          selectedTable={selectedTable}
        />
        <TimeSlotSelection
          onTimeSlotSelect={handleTimeSlotSelect}
          availableTimeSlots={availableTimeSlots}
          selectedTimeSlot={selectedTimeSlot}
        />
        <button type="submit">Book your bite</button>
      </form>
    </>
  );
};

export default CreateYourBooking;
