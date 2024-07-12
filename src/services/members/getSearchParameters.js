import { HOST } from "../index";

export function getSearchParameters(setLevel, setSkill, setSpeciality) {
  return fetch(`${HOST}/api/Member/GetSearchParameters`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => {
    return res.json();
  });
}
