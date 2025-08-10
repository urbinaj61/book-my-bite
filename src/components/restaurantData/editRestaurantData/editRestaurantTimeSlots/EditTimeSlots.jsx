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
        Edit timeSlots
      </summary>
      <section className="restaurant-timeSlots-container">
        <label htmlFor="">TimeSlots</label>
        <input
          type="text"
          name="timeSlotInterval"
          id="restaurant-timeslots"
          ref={timeSlotRef}
          defaultValue={timeSlotInterval}
        />
        <button type="button" onClick={handleTimeSlotCreation}>
          Enter
        </button>
      </section>
    </details>
  );
};

export default EditTimeSlots;
