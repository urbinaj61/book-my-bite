const EditTimeSlots = ({
  timeSlotInterval,
  isAccordionOpenTimeSlots,
  toggleAccordionTimeSlots,
  timeSlotRef,
  handleTimeSlotCreation,
}) => {
  return (
    <details className="restaurant-accordion" open={isAccordionOpenTimeSlots}>
      <summary
        className="restaurant-accordion-header"
        onClick={toggleAccordionTimeSlots}
      >
        Edit time slot interval
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
            defaultValue={timeSlotInterval}
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

export default EditTimeSlots;
