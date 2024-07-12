import { HOST } from "../index";

export function getListCompany(taskId, search = "") {
  return fetch(
    `${HOST}/api/Task/ListOfAssignableMembersInCompany/${taskId}?s=${search}`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  )
    .then((res) => res.json())
    .catch((error) => console.log(error, "ListOfAssignableMembers..."));
}
