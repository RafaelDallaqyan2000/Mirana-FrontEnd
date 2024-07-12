import {HOST} from "../../index";

export function addDailyWorkDetails(selectVal, inputVal){
    return fetch(`${HOST}/api/Member/AddDailyWorkDetails`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
            "Type":  selectVal,
            "description": inputVal
        })
    })
    .then(res => res.json())
}