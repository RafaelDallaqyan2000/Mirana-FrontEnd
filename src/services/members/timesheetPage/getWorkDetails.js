import {HOST} from "../../index";

export function getWorkDetails( page, count){
    return fetch(`${HOST}/api/Member/GetWorkDetails`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + localStorage.getItem("token"),
        },
        body : JSON.stringify({
            "Page": page ? +page : 1,
            "Count": count
        })
    }).then(res => res.json())
}