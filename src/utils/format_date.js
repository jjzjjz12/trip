import dayjs from "dayjs";

export function formatMonthDay(date, format = "MM月DD日") {
  return dayjs(date).format(format);
}