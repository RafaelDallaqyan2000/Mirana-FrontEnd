import { HOST } from "..";

export function getMemberVacationsAbsences() {
  return fetch(`${HOST}/api/Member/GetMemberVacationsAbsences`, {
    method: "POST",
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
