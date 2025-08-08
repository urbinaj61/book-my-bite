const CreateTimeSlots = ({
  isAccordionOpenTimeSlots,
  toggleAccordionTimeSlots,
  timeSlotRef,
  handleTimeSlotCreation,
}) => {
  return (
    <details classname="restaurant-accordion" open={isAccordionOpenTimeSlots}>
      <summary
        classname="restaurant-accordion-header"
        onClick={toggleAccordionTimeSlots}
      >
        Add timeSlots
      </summary>
      <section className="restaurant-timeSlots-container">
        <label htmlFor="">TimeSlots</label>
        <input
          type="text"
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
