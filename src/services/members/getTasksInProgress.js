import React from "react";
import { HOST } from "../index";

export function getTasksInProgress(id) {
  return fetch(`${HOST}/api/Member/GetTasksInProgress/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => {
    if (res.status === 401) {
      localStorage.removeItem("token");
      window.location.reload();
    } else return res.json();
  });
}
