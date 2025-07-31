const formatTimeSlot = selectedTimeSlot => {
  const [start, end] = selectedTimeSlot.split("-");

  const timeSlotObject = {
    start: start,
    end: end,
  };

  return timeSlotObject;
};

export default formatTimeSlot;
