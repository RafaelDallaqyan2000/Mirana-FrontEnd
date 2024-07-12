import {HOST} from "../../index";

export function getMemberDetails(id){
    return fetch(`${HOST}/api/Member/MemberDetails/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        }
    }).then(res => res.json())
}