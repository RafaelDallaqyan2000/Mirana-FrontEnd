import { HOST } from "..";

export function getUpdatesTaskDueDate(TaskId, StartDate, EndDate) {
  return fetch(`${HOST}/api/Task/UpdatesTaskDueDate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify({ TaskId, StartDate, EndDate }),
  }).then((res) => res.json());
}
