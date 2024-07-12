import { HOST } from "..";

export function recoverPasswordFetch(token, newPassword) {
  return fetch(`${HOST}/api/Auth/RecoverPassword`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, newPassword }),
  }).then((res) => res.json());
}
