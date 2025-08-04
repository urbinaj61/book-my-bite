const TimeSlotSelectionEdit = ({
  onTimeSlotSelect,
  availableTimeSlots,
  selectedTimeSlot,
}) => {
  //Create a new, reordered array with the selected timeSlot first
  const reorderedTimeSlots = selectedTimeSlot
    ? [selectedTimeSlot, ...availableTimeSlots]
    : availableTimeSlots;

  return (
    <>
      <label htmlFor="time-slot-select">Please choose a Time Slot:</label>
      <select
        id="time-slot-select"
        name="timeSlot"
        value={selectedTimeSlot}
        onChange={(e) => onTimeSlotSelect(e)}
      >
        <option value="" disabled>
          Please select a timeslot
        </option>
        {reorderedTimeSlots.length > 0 ? (
          reorderedTimeSlots.map((slot, index) => (
            <option key={index} value={`${slot.start}-${slot.end}`}>
              {`${slot.start} - ${slot.end}`}
            </option>
          ))
        ) : (
          <option value="" disabled>
            `No timeslots are available`
          </option>
        )}
      </select>
    </>
  );
};

export default TimeSlotSelectionEdit;
