import { HOST } from "../index";
import { InfoInputs } from "../../pages/SignUp/infoInputs";

export function signUpFetch() {
  return fetch(`${HOST}/api/Auth/SignUp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(InfoInputs()),
  }).then((response) => {
    return response.json();
  });
}
