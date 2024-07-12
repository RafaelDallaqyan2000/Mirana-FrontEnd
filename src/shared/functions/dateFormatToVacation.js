const month = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  "10": "October",
  "11": "November",
  "12": "December",
};
export function dateFormatToVacation(date) {
  //2022-06-07T00:00:00
  //June 1, 2022
  return date
    ? `${month[date.slice(5, 7)]} ${+date.slice(8, 10)}, ${+date.slice(0, 4)}`
    : "";
}
