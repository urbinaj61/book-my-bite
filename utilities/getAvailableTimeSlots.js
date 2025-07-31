const getAvailableTimeSlots = (filteredDates, timeSlots, tableBooked) => {
  const newTableBooked = `Table ${tableBooked}`;

  const tableBookings = filteredDates.filter(
    booked => booked.tableBooked === newTableBooked
  );

  if (tableBookings.length > 0) {
    let availableTimeSlots = [...timeSlots];

    tableBookings.forEach(booking => {
      const bookedTimeSlot = booking.timeSlot;
      availableTimeSlots = availableTimeSlots.filter(
        slot => slot.start !== bookedTimeSlot.start
      );
    });
    return availableTimeSlots;
  }

  return timeSlots;
};

export default getAvailableTimeSlots;
