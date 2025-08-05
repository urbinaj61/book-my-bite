import { useState, useEffect } from "react";
import { getDayOfWeek } from "../../../utilities/getDayOfWeek";
import TableSelection from "../createBooking/tableSelection/TableSelection";
import TimeSlotSelectionEdit from "../editBooking/TimeSlotSelectionEdit";
import getAvailableTimeSlots from "../../../utilities/getAvailableTimeSlots";
import formatTimeSlot from "../../../utilities/formatTimeSlot";

const EditBooking = ({ bookingData, restaurantData, allBookedData }) => {
  const {
    customerName,
    customerEmail,
    dateBooked,
    restaurantId,
    restaurantAddress1,
    restaurantName,
    tableBooked,
    seatsBooked,
    timeSlot,
  } = bookingData;

  const { openingTimes, tableTypes } = restaurantData;

  const includeSeating = (tableBooked, seatsBooked) => {
    return `${tableBooked}-${seatsBooked}`;
  };

  const [bookedName, setBookedName] = useState(customerName);
  const [bookedEmail, setBookedEmail] = useState(customerEmail);
  const [bookedDate, setBookedDate] = useState(dateBooked);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(timeSlot);
  const [selectedTable, setSelectedTable] = useState(
    includeSeating(tableBooked, seatsBooked)
  );

  const [newBookedData, setNewBookedData] = useState(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [bookedTable, setBookedTable] = useState("");
  const [bookedSeats, setBookedSeats] = useState("");

  let day = getDayOfWeek(dateBooked);

  //Get all timeslots for this restaurant and date entered
  const filteredDay = openingTimes.filter((item) => item.day === day);

  let timeSlots = filteredDay[0].timeSlots;

  useEffect(() => {
    let newTableBooked = tableBooked.replace("Table ", "");
    const slots = getAvailableTimeSlots(
      allBookedData,
      timeSlots,
      newTableBooked
    );

    setAvailableTimeSlots(slots);
  }, []);

  const handleFormSubmit = () => {};

  const handleBookedDateChange = async (e) => {
    //Get day if date changed
    day = getDayOfWeek(e.target.value);
    setBookedDate(e.target.value);
    setSelectedTable("");
    setSelectedTimeSlot("");

    //As the date has changed we need to get all bookings for this restaurant and date.
    const url = `/api/createBooking/${restaurantId}?date=${e.target.value}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setNewBookedData(data);
  };

  const handleBookedNameChange = (e) => {
    setBookedName(e.target.value);
  };

  const handleBookedEmailChange = (e) => {
    setBookedEmail(e.target.value);
  };

  const handleTableSelect = (event) => {
    setSelectedTable(event.target.value);

    if (event.target.value.includes("Table ")) {
      const [table, seats] = event.target.value
        .replace("Table ", "")
        .split("-");
      setBookedTable(table);
      setBookedSeats(seats);
      const slots = getAvailableTimeSlots(newBookedData, timeSlots, table);
      setAvailableTimeSlots(slots);
    } else {
      setBookedTable("");
      setBookedSeats("");
    }
  };

  const handleTimeSlotSelect = (event) => {
    setSelectedTimeSlot(event.target.value);
  };

  return (
    <>
      <h2>Edit a booking page</h2>
      <p>{restaurantName}</p>
      <p>{restaurantAddress1}</p>
      {openingTimes[0].open !== "Closed" ? (
        <p>{`Opening Times: Open from ${openingTimes[0].open} till ${openingTimes[0].close}`}</p>
      ) : (
        <p>This restaurant is closed on this day</p>
      )}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="booked-date">Booked Date</label>
        <input
          type="date"
          id="booked-date"
          aria-label="booked-date"
          name="bookedDate"
          onChange={handleBookedDateChange}
          value={bookedDate}
        />
        <label htmlFor="booked-customer-name">Booked name</label>
        <input
          type="text"
          id="booked-customer-name"
          aria-label="booked-customer-name"
          name="customerName"
          onChange={handleBookedNameChange}
          value={bookedName}
        />
        <label htmlFor="booked-customer-email">Booked email</label>
        <input
          type="text"
          id="booked-customer-email"
          aria-label="booked-customer-email"
          name="customerEmail"
          onChange={handleBookedEmailChange}
          value={bookedEmail}
        />
        <TableSelection
          onTableSelect={handleTableSelect}
          tables={tableTypes}
          selectedTable={selectedTable}
        />
        {availableTimeSlots.length > 0 && (
          <TimeSlotSelectionEdit
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

export default EditBooking;
