import {HOST} from "../index";

export function updatesTaskDescription(taskId, text, setState){
    return fetch(`${HOST}/api/Task/UpdatesTaskDescription`, {
        method : "POST",
        headers : {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token"),
        },
        body : JSON.stringify({
            "TaskId": taskId,
            "Description": text
        })
    })
    .then(res => res.json())
    .then(() => setState(true))
    .catch(error => error)
}