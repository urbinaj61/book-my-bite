const getAvailableTimeSlots = (data, timeSlots, tableBooked) => {
  const newTableBooked = `Table ${tableBooked}`;

  console.log({ tableBooked });

  const tableBookings = data.filter(
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
