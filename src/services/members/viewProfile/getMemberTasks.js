import {HOST} from "../../index";

export function getMemberTasks(Token, id, page, count) {
    return fetch(`${HOST}/api/Task/GetMemberTasks`, {
        method : "POST",
        headers : {
            "Content-Type": "application/json",
            Authorization: "Bearer " + Token,
        },
        body : JSON.stringify({
            "memberid":  id,
            "page": page,
            "count": count
        })
    }).then(res => res.json())
}