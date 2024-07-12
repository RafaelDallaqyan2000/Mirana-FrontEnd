import { HOST } from "../index";

export function getUserDetails() {
  return fetch(`${HOST}/api/Member/UserDetails`, {  //UserDetails
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => res.json());
}
