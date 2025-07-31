import { useState, useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import getDayOfWeek from "../../../utilities/getDayOfWeek";
import getAvailableTimeSlots from "../../../utilities/getAvailableTimeSlots";
import formatTimeSlot from "../../../utilities/formatTimeSlot";
import TableSelection from "./tableSelection/TableSelection";
import TimeSlotSelection from "./timeSlotSelection/TimeSlotSelection";

//Get day from date entered
const CreateYourBooking = ({ data, date }) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedTable, setSelectedTable] = useState("");
  const [tableBooked, setTableBooked] = useState("");
  const [seatsBooked, setSeatsBooked] = useState("");

  const router = useRouter();
  const { _id } = router.query;

  const { mutate } = useSWR(`/api/createBooking/${_id}`);

  const day = getDayOfWeek(date);

  //Get all bookings for this restaurant and date entered
  const filteredDates = data.filter((item) => {
    return item.dateBooked === date;
  });

  //Get all table information for this restaurant
  const tables = filteredDates[0].restaurantId.tableTypes.map((table) => table);

  //Get opening times for this restaurant
  const openingTimes = filteredDates[0].restaurantId.openingTimes.filter(
    (item) => item.day === day
  );

  //Get all timeslots for this restaurant and date entered
  const timeSlots = openingTimes[0].timeSlots.map((item) => item);

  //Determine available timeSlots for the selected table
  const availableTimeSlots = getAvailableTimeSlots(
    filteredDates,
    timeSlots,
    tableBooked
  );

  const handleTableSelect = (event) => {
    setSelectedTable(event.target.value);
  };

  const handleTimeSlotSelect = (event) => {
    setSelectedTimeSlot(event.target.value);
  };

  useEffect(() => {
    if (selectedTable?.includes("Table ")) {
      const [table, seats] = selectedTable.replace("Table ", "").split("-");
      setTableBooked(table);
      setSeatsBooked(seats);
    }
  }, [selectedTable]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("restaurantId", _id);
    formData.append("dateBooked", date);
    formData.append("seatsBooked", seatsBooked);
    const bookingData = Object.fromEntries(formData);
    bookingData.tableBooked = `Table ${tableBooked}`;
    bookingData.timeSlot = formatTimeSlot(selectedTimeSlot);

    const response = await fetch(`/api/createBooking/${_id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    });
    if (response.ok) mutate();
    return;
  };

  return (
    <>
      {openingTimes[0].open !== "Closed" ? (
        <p>{`Opening Times: Open from ${openingTimes[0].open} till ${openingTimes[0].close}`}</p>
      ) : (
        <p>This restaurant is closed on this day</p>
      )}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="customer-name">Please enter your name</label>
        <input
          type="text"
          id="customer-name"
          aria-label="customer-name"
          name="customerName"
        />
        <label htmlFor="customer-email">Please enter your email</label>
        <input
          type="text"
          id="customer-email"
          aria-label="customer-email"
          name="customerEmail"
        />
        <TableSelection
          onTableSelect={handleTableSelect}
          tables={tables}
          selectedTable={selectedTable}
        />
        {selectedTable && (
          <TimeSlotSelection
            onTimeSlotSelect={handleTimeSlotSelect}
            availableTimeSlots={availableTimeSlots}
            selectedTimeSlot={selectedTimeSlot}
          />
        )}
        <button type="submit">Book your bite</button>
      </form>
    </>
  );
};

export default CreateYourBooking;
