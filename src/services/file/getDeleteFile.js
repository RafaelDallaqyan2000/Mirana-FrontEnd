import {HOST} from "../index";

export function getDeleteFile(id) {
    return  fetch(`${HOST}/api/File/DeleteFile/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
    })
    .then(res => res.json())
}