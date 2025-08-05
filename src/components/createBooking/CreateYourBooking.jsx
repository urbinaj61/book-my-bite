import { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { getDayOfWeek } from "../../../utilities/getDayOfWeek";
import getAvailableTimeSlots from "../../../utilities/getAvailableTimeSlots";
import formatTimeSlot from "../../../utilities/formatTimeSlot";
import BookingForm from "./BookingForm";

const CreateYourBooking = ({ restaurantData, date }) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedTable, setSelectedTable] = useState("");
  const [tableBooked, setTableBooked] = useState("");
  const [seatsBooked, setSeatsBooked] = useState("");

  const router = useRouter();
  const { _id } = router.query;

  const { mutate } = useSWR(`/api/createBooking/${_id}?${date}`);

  const { data, error, isLoading } = useSWR(
    `/api/createBooking/${_id}?date=${date}`
  );

  if (error) console.error(error);
  if (isLoading) return <p>Loading...</p>;

  //Get day from date entered
  const day = getDayOfWeek(date);

  //Get all table information for this restaurant
  const tables = restaurantData.tableTypes.map((table) => table);

  //Get opening times for this restaurant
  const openingTimes = restaurantData.openingTimes.filter(
    (item) => item.day === day
  );

  //Get all timeslots for this restaurant and date entered
  let timeSlots = openingTimes[0].timeSlots?.map((item) => item);

  //Determine available timeSlots for the selected table
  const availableTimeSlots = getAvailableTimeSlots(
    data,
    timeSlots,
    tableBooked
  );

  console.log({ tableBooked });

  const handleTableSelect = (event) => {
    setSelectedTable(event.target.value);

    if (event.target.value.includes("Table ")) {
      const [table, seats] = event.target.value
        .replace("Table ", "")
        .split("-");
      setTableBooked(table);
      setSeatsBooked(seats);
    } else {
      setTableBooked("");
      setSeatsBooked("");
    }
  };

  const handleTimeSlotSelect = (event) => {
    setSelectedTimeSlot(event.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("restaurantId", _id);
    formData.append("dateBooked", date);
    formData.append("seatsBooked", seatsBooked);
    formData.append("restaurantName", restaurantData.name);
    formData.append("restaurantAddress1", restaurantData.address1);
    const bookingData = Object.fromEntries(formData);
    bookingData.tableBooked = `Table ${tableBooked}`;
    bookingData.timeSlot = formatTimeSlot(selectedTimeSlot);

    const response = await fetch(`/api/createBooking/${_id}?${date}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    });

    if (response.ok) {
      const result = await response.json(); //A new booking id is returned to us. If we need it.

      mutate();
      router.push(
        `/bookings/${bookingData.customerEmail}?${result.bookingId._id}`
      );
    }
    return;
  };

  return (
    <>
      {openingTimes[0].open !== "Closed" ? (
        <p>{`Opening Times: Open from ${openingTimes[0].open} till ${openingTimes[0].close}`}</p>
      ) : (
        <p>This restaurant is closed on this day</p>
      )}
      <BookingForm
        selectedTable={selectedTable}
        selectedTimeSlot={selectedTimeSlot}
        handleTableSelect={handleTableSelect}
        handleTimeSlotSelect={handleTimeSlotSelect}
        handleFormSubmit={handleFormSubmit}
        tables={tables}
        availableTimeSlots={availableTimeSlots}
      />
    </>
  );
};

export default CreateYourBooking;
