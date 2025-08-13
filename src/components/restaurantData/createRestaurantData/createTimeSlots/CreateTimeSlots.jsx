const CreateTimeSlots = ({
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
        Add time slot interval
      </summary>
      <section className="restaurant-timeSlots-container">
        <label htmlFor="">TimeSlots</label>
        <input
          type="text"
          name="timeSlotInterval"
          id="restaurant-timeslots"
          ref={timeSlotRef}
          placeholder="Please enter table seating interval)"
        />
        <button type="button" onClick={handleTimeSlotCreation}>
          Enter
        </button>
      </section>
    </details>
  );
};

export default CreateTimeSlots;
