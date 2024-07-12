import { HOST } from "..";

export function loginFetch(email, password, rememberMe) {
  return fetch(`${HOST}/api/Auth/Login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, rememberMe }),
  }).then((res) => {
    const token = res.headers.get("auth");
    if (!!token) {
      localStorage.setItem("token", token);
      localStorage.setItem("remember", rememberMe);
    }
    return res.json();
  });
}
