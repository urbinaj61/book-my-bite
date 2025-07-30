import { DateTime } from "luxon";

const getDayOfWeek = date => {
  const day = DateTime.fromISO(date).toFormat("cccc"); // Use fromISO for "yyyy-MM-dd"
  return day;
};

export default getDayOfWeek;
