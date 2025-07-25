import { useMemo } from "react";

const useTimeSlots = (startTime, endTime, slotLengthHours) =>
  useMemo(() => {
    const toMinutes = (timeStr) => {
      const parts = timeStr.split(":");
      const hours = Number(parts[0]);
      const minutes = Number(parts[1]);
      return hours * 60 + minutes;
    };

    const toTimeStr = (totalMinutes) => {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      const hourStr = hours < 10 ? "0" + hours : "" + hours;
      const minuteStr = minutes < 10 ? "0" + minutes : "" + minutes;
      return hourStr + ":" + minuteStr;
    };

    const slots = [];
    const start = toMinutes(startTime);
    const end = toMinutes(endTime);
    const slotLength = slotLengthHours * 60;
    const numberOfSlots = Math.floor((end - start) / slotLength);

    for (let i = 0; i < numberOfSlots; i++) {
      const slotStart = start + i * slotLength;
      const slotEnd = slotStart + slotLength;
      slots.push({
        start: toTimeStr(slotStart),
        end: toTimeStr(slotEnd),
      });
    }

    return slots;
  }, [startTime, endTime, slotLengthHours]);

export default useTimeSlots;
