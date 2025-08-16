const CreateTimeSlots = ({
  isAccordionOpenTimeSlots,
  toggleAccordionTimeSlots,
  timeSlotRef,
  handleTimeSlotCreation,
}) => {
  return (
    <details open={isAccordionOpenTimeSlots}>
      <summary
        className="restaurant-accordion-header"
        onClick={toggleAccordionTimeSlots}
      >
        Add time slot interval
      </summary>
      <section className="restaurant-accordion-data-container">
        <section className="restaurant-timeSlots-container">
          <label htmlFor="">TimeSlots</label>
          <input
            className="edit-restaurant-input"
            type="text"
            name="timeSlotInterval"
            id="restaurant-timeslots"
            ref={timeSlotRef}
            placeholder="Please enter time interval"
          />
          <button
            className="table-enter-button"
            type="button"
            onClick={handleTimeSlotCreation}
          >
            Enter
          </button>
        </section>
      </section>
    </details>
  );
};

export default CreateTimeSlots;
