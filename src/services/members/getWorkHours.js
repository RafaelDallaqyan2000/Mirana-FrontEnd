import { HOST } from "..";

export function getWorkHours() {
  return fetch(`${HOST}/api/Member/GetWorkHours`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => {
    if (res.status === 401) {
      localStorage.removeItem("token");
      window.location.reload();
    } else return res.json();
  });
}
