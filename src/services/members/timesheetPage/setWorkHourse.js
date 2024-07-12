import {HOST} from "../../index";

export function setWorkHourse(WorkId, StartButton){
    return fetch(`${HOST}/api/Member/SetWorkHours`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({ WorkId,StartButton})
    })
    .then(res => res.json())
}