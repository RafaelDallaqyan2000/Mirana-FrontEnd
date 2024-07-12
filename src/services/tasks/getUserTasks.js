import { HOST } from "..";

export function getUserTasks(page, count, Token) {
  return fetch(`${HOST}/api/Task/GetUserTasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify({ page, count, Token }),
  }).then((res) => {
    if (res.status === 401) {
      localStorage.removeItem("token");
      window.location.reload();
    } else return res.json();
  });
}
