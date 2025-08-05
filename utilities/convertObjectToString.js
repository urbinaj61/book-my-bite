const convertObjectToString = timeSlot => {
  const convertedObject = `${timeSlot.start}-${timeSlot.end}`;
  return convertedObject;
};

export default convertObjectToString;
