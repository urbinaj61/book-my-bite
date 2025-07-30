import getDayOfWeek from "../../../utilities/getDayOfWeek";

const CreateYourBooking = ({ data, date }) => {
  const day = getDayOfWeek(date);

  const filteredDates = data.filter((item) => {
    return item.dateBooked === date;
  });

  const openingTimes = filteredDates[0].restaurantId.openingTimes.filter(
    (item) => item.day === day
  );

  const timeSlots = openingTimes.map((item) => item.timeSlots);
  const filteredTimeSlots = filteredDates.map((item) => item.timeSlot);
  console.log("timeSlots", timeSlots, "filteredTimeSlots", filteredTimeSlots);

  const uniqueDates = filteredDates.filter((filtered) =>
    timeSlots[0].every((slot) => slot.start !== filtered.start)
  );

  console.log("unique", uniqueDates);

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
        <label htmlFor="table-selected">Please select your table</label>
        <select name="" id="table-selected"></select>
        <label htmlFor="timeslot-selected">Please select your timeslot</label>
        <select name="" id="timeslot-selected"></select>
        <button type="submit">Book your bite</button>
      </form>
    </>
  );
};

export default CreateYourBooking;
