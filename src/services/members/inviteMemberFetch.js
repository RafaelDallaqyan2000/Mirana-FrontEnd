import { HOST } from "../index";

export function inviteMemberFetch(email, RoleId) {
  return fetch(`${HOST}/api/Member/InviteMember`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify({ email, RoleId }),
  }).then((res) => res.json());
}
