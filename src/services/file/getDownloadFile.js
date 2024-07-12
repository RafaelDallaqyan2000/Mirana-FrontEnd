import axios from "axios";
import {HOST} from "../index";

export function getDownloadFile(id, fileName) {
   return  axios({
        url: `${HOST}/api/File/DownloadFile/${id}`,
        method: 'POST',
        responseType: 'blob', // important
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);
        link.click();
    })
}