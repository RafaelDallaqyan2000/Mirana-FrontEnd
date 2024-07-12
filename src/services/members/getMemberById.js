import { HOST } from "../index";

export function getMemberById(id) {
  return fetch(`${HOST}/api/Member/GetMemberById/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((e) => e.json())
}
