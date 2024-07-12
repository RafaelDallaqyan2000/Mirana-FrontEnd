import {HOST} from "../../index";

export function editWorkDetails(id, localDescription) {
    return fetch(`${HOST}/api/Member/EditWorcDetail`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
            "Id": id,
            "Description": localDescription
        })
    })
    .then(res => res.json())
}