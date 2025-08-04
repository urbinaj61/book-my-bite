import { DateTime } from "luxon";

export const getDayOfWeek = date => {
  const day = DateTime.fromISO(date).toFormat("cccc"); // Use fromISO for "yyyy-MM-dd"
  return day;
};

export const changeDateFormat1 = date => {
  return DateTime.fromISO(date).toFormat("dd-MM-yyyy");
};

export const changeDateFormat2 = date => {
  return DateTime.fromISO(date).toFormat("yyyy-MM-dd");
};
