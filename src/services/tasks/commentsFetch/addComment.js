import { HOST } from "../../index";

export function addComment(TaskId, Comment) {
  return fetch(`${HOST}/api/Task/AddTaskComment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify({ TaskId, Comment }),
  })
    .then((res) => res.json())
    .catch(() => console.log("failed fetch"));
}
