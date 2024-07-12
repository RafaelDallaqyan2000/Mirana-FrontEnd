import { HOST } from "..";

export function forgotPasswordFetch(email) {
  return fetch(`${HOST}/api/Auth/ForgotPassword`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  }).then((res) => res.json());
}
