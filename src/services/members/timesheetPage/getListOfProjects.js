import {HOST} from "../../index";

export function getListOfProjects() {
    return fetch(`${HOST}/api/Member/GetListOfProjects`, {
        headers : {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        }
    })
    .then(res => res.json())
}