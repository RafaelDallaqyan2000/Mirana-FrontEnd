import { month } from "./index";
export function getDateAllTasks(date, time = "") {
  //2022-06-09T00:00:00+04:00
  //09 Jun
  return date
    ? date.slice(8, 10) +
        " " +
        month[date.slice(5, 7)] +
        (time ? ` ${time} ` + date.slice(11, 16) : "")
    : "";
}
