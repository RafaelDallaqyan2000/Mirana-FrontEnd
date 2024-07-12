import { HOST } from "..";

export function updateMemberFetch(
  FirstName,
  LastName,
  Password,
  Phone,
  BirthDate,
  Token
) {
  return fetch(`${HOST}/api/Auth/UpdateMember`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      FirstName,
      LastName,
      Password,
      Phone,
      BirthDate,
      Token,
    }),
  }).then((res) => res.json());
}
