import { HOST } from "../index";

export function getAssignMemberToTask({ id, taskId, state }) {
  return fetch(`${HOST}/api/Task/AssignMemberToTask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify({
      UserId: id,
      TaskId: taskId,
      IsAssigned: state,
    }),
  }).catch((error) => console.log(error, "Error 1414788 in catch"));
}
