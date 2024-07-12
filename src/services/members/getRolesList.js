import { HOST } from "..";

export function getRolesList() {
  return fetch(`${HOST}/api/Member/RolesList`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => res.json());
}
