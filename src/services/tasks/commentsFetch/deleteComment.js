import { HOST } from "../../index";

export function deleteComment(CommentId, TaskId) {
  return fetch(`${HOST}/api/Task/DeletTaskComment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify({ CommentId, TaskId }),
  })
    .then((res) => res.json())
}
