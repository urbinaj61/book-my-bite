import TableSelection from "./tableSelection/TableSelection";
import TimeSlotSelection from "./timeSlotSelection/TimeSlotSelection";

const BookingForm = ({
  selectedTable,
  selectedTimeSlot,
  handleTableSelect,
  handleTimeSlotSelect,
  handleFormSubmit,
  tables,
  availableTimeSlots,
}) => {
  return (
    <form className="create-booking-form" onSubmit={handleFormSubmit}>
      <label className="create-booking-label" htmlFor="customer-name">
        Please enter your name
      </label>
      <input
        type="text"
        id="customer-name"
        aria-label="customer-name"
        name="customerName"
        className="create-booking-input"
      />
      <label className="create-booking-label" htmlFor="customer-email">
        Please enter your email
      </label>
      <input
        type="text"
        id="customer-email"
        aria-label="customer-email"
        name="customerEmail"
        className="create-booking-input"
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
      <button className="restaurant-create-button" type="submit">
        Book your bite
      </button>
    </form>
  );
};

export default BookingForm;
