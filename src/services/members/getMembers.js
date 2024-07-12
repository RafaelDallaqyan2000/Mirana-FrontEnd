import { HOST, login } from "../index";

export function getMembers(
  page = 1,
  count = 8,
  inputVal,
  levelID,
  specialityID,
  skillID
) {
  return fetch(`${HOST}/api/Member/GetMembers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify({
      page: page,
      count: count,
      searchValue: inputVal,
      levelId: levelID,
      specialityId: specialityID,
      skillId: skillID,
    }),
  }).then((res) => {
    if (res.status === 401) {
      localStorage.removeItem("token");
      window.location.reload();
    } else return res.json();
  });
}
