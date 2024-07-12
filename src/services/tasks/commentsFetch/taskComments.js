import { HOST } from "../../index";

export function taskComments(id) {
  return fetch(`${HOST}/api/Task/TaskComments/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .catch(() => console.log("failed fetch"));
}
