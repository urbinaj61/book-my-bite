const isValidTime = time => {
  if (time.toLowerCase() === "closed") {
    return true;
  }
  const timeRegex = /^(?:2[0-3]|[01]?[0-9]):(?:00|30)|24:(?:00|30)$/;
  return timeRegex.test(time);
};

export default isValidTime;
