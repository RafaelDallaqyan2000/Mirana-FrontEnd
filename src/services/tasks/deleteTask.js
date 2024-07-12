import { HOST } from "../index";

export function deleteTask(TaskId) {
  return fetch(`${HOST}/api/Task/DeleteTask/${TaskId}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
}
