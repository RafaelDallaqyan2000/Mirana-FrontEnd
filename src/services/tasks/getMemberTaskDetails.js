import { HOST } from "..";

export function getMemberTaskDetails(id) {
  return fetch(`${HOST}/api/Task/MemberTaskDetails/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((e) => e.json());
}
