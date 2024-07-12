import { month } from ".";

export function getFormatBackDate(date) {
  //   let date = "Wed Jun 08 2022 00:00:00 GMT+0400 (Armenia Standard Time)";
  //2022-04-03T00:00:00
  let values = Object.values(month);
  let keys = Object.keys(month);
  return `${date.slice(11, 15)}-${
    keys[values.indexOf(date.slice(4, 7))]
  }-${date.slice(8, 10)}T${date.slice(16, 24)}`;
}
