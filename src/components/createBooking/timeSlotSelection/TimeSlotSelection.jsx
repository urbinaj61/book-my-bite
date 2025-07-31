const TimeSlotSelection = ({
  onTimeSlotSelect,
  availableTimeSlots,
  selectedTimeSlot,
}) => {
  return (
    <>
      <label htmlFor="time-slot-select">Please choose a Time Slot:</label>
      <select
        id="time-slot-select"
        name="time-slot-select"
        value={selectedTimeSlot}
        onChange={(e) => onTimeSlotSelect(e)}
      >
        <option value="" disabled>
          Please select a timeslot
        </option>
        {availableTimeSlots.length > 0 ? (
          availableTimeSlots.map((slot, index) => (
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

export default TimeSlotSelection;
