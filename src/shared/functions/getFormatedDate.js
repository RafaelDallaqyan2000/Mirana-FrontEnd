export function getFormatedDate(date) {
  //2022-06-16T23:59:59+04:00
  //2022-06-16
  return date.slice(0, 10);
}
// `${date.slice(11, 15)}-${
//   keys[values.indexOf(date.slice(4, 7))]
// }-${date.slice(8, 10)}`;
