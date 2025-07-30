const CreateYourBooking = ({ data, date }) => {
  const filteredDates = data.filter((item) => {
    return item.dateBooked === date;
  });

  console.log(filteredDates);

  return (
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
  );
};

export default CreateYourBooking;
