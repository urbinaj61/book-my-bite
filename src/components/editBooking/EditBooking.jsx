import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import { getDayOfWeek } from "../../../utilities/getDayOfWeek";
import TableSelection from "../createBooking/tableSelection/TableSelection";
import TimeSlotSelectionEdit from "../editBooking/TimeSlotSelectionEdit";
import getAvailableTimeSlots from "../../../utilities/getAvailableTimeSlots";
import formatTimeSlot from "../../../utilities/formatTimeSlot";
import convertObjectToString from "../../../utilities/convertObjectToString";

const EditBooking = ({ bookingData, restaurantData, allBookedData }) => {
  //Deconstruct bookingData
  const {
    customerName,
    customerEmail,
    dateBooked,
    restaurantId,
    _id,
    restaurantAddress1,
    restaurantName,
    tableBooked,
    seatsBooked,
    timeSlot,
  } = bookingData;

  //Deconstruct restaurantdata
  const { openingTimes, tableTypes } = restaurantData;

  const router = useRouter();
  const { mutate } = useSWR(`/api/editBooking/${_id}`);

  //Get day of dateBooked. Might not be needed until date changes?????????
  let day = getDayOfWeek(dateBooked);

  //Get all timeslots for this restaurant and date entered.
  const filteredDayTimeSlots = openingTimes.filter((item) => item.day === day);

  //Determine all timeslots for this date/day boooked
  let calculatedTimeSlots = filteredDayTimeSlots[0].timeSlots;

  //Include seating to display in table select
  const includeSeating = (tableBooked, seatsBooked) => {
    return `${tableBooked}-${seatsBooked}`;
  };

  //Create our states
  const [bookedName, setBookedName] = useState(customerName);
  const [bookedEmail, setBookedEmail] = useState(customerEmail);
  const [bookedDate, setBookedDate] = useState(dateBooked);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(timeSlot);
  const [selectedTable, setSelectedTable] = useState(
    includeSeating(tableBooked, seatsBooked)
  );

  const [newBookedData, setNewBookedData] = useState(allBookedData);
  const [allTimeSlots, setAllTimeSlots] = useState(calculatedTimeSlots);
  const [newOpeningTimes, setNewOpeningTimes] = useState(filteredDayTimeSlots);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [tables] = useState(tableTypes);
  const [bookedTable, setBookedTable] = useState("");
  const [bookedSeats, setBookedSeats] = useState("");

  //We need to get the available timeSlots when we first arrive.
  //These are determined by the date already entered. So we will get all the bookings for this restaurant and
  //the date booked. We also need all timeslots for this restaurant and day. In the getAvailableTimeSlots function
  //we expect only the table number, so we need to strip out the Table part of this string. This function is also used
  //in createBooking so we need to preserve it's functionality.
  useEffect(() => {
    let newTableBooked = tableBooked.replace("Table ", "");
    const slots = getAvailableTimeSlots(
      allBookedData,
      allTimeSlots,
      newTableBooked
    );

    setAvailableTimeSlots(slots);
  }, []);

  //Handle submit. Will send our changed data to backend..........
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("seatsBooked", bookedSeats);
    const updatedBookingData = Object.fromEntries(formData);

    //We need to format the selected timeSlot(string) into an object for the DB
    typeof selectedTimeSlot === "string"
      ? (updatedBookingData.timeSlot = formatTimeSlot(selectedTimeSlot))
      : (updatedBookingData.timeSlot = selectedTimeSlot);

    const response = await fetch(`/api/editBooking/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBookingData),
    });

    if (response.ok) {
      mutate();
      router.push(`/bookings/${bookingData.customerEmail}`);
    }
    return;
  };

  //................Handle date changed................................................................................
  //Main change. We need to affect many things if this changes......
  //The first thing we need to do is grab the day of the new date.
  //We then need to re-fetch all the bookings for this restaurant and date. In case the table also changes.
  //We need a state to capture the new allBookings. We will use this state to recreate the same functionality.
  //As for now no table has been selected so we show all tables. The same with timeSlots
  //available timeslots.
  //We also need to get the new opening times for this new date.
  const handleBookedDateChange = async (e) => {
    day = getDayOfWeek(e.target.value);
    setBookedDate(e.target.value);

    //As the date has changed we need to get all bookings for this restaurant and date.
    const url = `/api/createBooking/${restaurantId}?date=${e.target.value}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const newBookings = await response.json();

    //Once we have all the data we need to establish timeslots.
    setNewBookedData(newBookings);

    //Get all timeslots for this restaurant and date entered.
    const filteredDayTimeSlots = openingTimes.filter(
      (item) => item.day === day
    );

    //Get the new opening times
    setNewOpeningTimes(filteredDayTimeSlots);

    //Determine all timeslots for this date/day boooked
    calculatedTimeSlots = filteredDayTimeSlots[0].timeSlots;

    //Reset for new table and timeSlots selection
    setAllTimeSlots(calculatedTimeSlots);
    setAvailableTimeSlots(calculatedTimeSlots);
    setSelectedTable("");
    setSelectedTimeSlot("");
  };

  //........................................................................................................

  //.............................Handle Table change..................................................................
  //If the table has changed we need to
  const handleTableSelect = (event) => {
    setSelectedTable(event.target.value);

    const [table, seats] = event.target.value.replace("Table ", "").split("-");
    setBookedTable(table);
    setBookedSeats(seats);
    const slots = getAvailableTimeSlots(newBookedData, allTimeSlots, table);
    setAvailableTimeSlots(slots);
  };

  //.....................................................................................................

  //................Handle timeslot change...............................................................
  //Only available slots will be available to select. So no extra calcs needed..
  const handleTimeSlotSelect = (event) => {
    setSelectedTimeSlot(event.target.value);
  };

  //......................................................................................................

  //Only the name has changed. No extra calcs needed.......
  const handleBookedNameChange = (e) => {
    setBookedName(e.target.value);
    //setSelectedTimeSlot(convertObjectToString(timeSlot));
  };

  //Only the email has changed. No extra calcs needed.......
  const handleBookedEmailChange = (e) => {
    setBookedEmail(e.target.value);
    //setSelectedTimeSlot(convertObjectToString(timeSlot));
  };

  return (
    <>
      <h2>Edit a booking page</h2>
      <p>{restaurantName}</p>
      <p>{restaurantAddress1}</p>
      {newOpeningTimes[0].open !== "closed" ? (
        <p>{`Opening Times: Open from ${newOpeningTimes[0].open} till ${newOpeningTimes[0].close}`}</p>
      ) : (
        <p>This restaurant is closed on this day. Please select another day</p>
      )}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="booked-date">Booked Date</label>
        <input
          type="date"
          id="booked-date"
          aria-label="booked-date"
          name="dateBooked"
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
        {newOpeningTimes[0].open !== "closed" && (
          <TableSelection
            onTableSelect={handleTableSelect}
            tables={tables}
            selectedTable={selectedTable}
          />
        )}
        {availableTimeSlots.length > 0 && (
          <TimeSlotSelectionEdit
            onTimeSlotSelect={handleTimeSlotSelect}
            availableTimeSlots={availableTimeSlots}
            selectedTimeSlot={selectedTimeSlot}
          />
        )}
        <button type="submit" disabled={newOpeningTimes[0].open === "close"}>
          Book your bite
        </button>
        <Link href={`/bookings/${customerEmail}`}>
          <button>No Change</button>
        </Link>
      </form>
    </>
  );
};

export default EditBooking;
