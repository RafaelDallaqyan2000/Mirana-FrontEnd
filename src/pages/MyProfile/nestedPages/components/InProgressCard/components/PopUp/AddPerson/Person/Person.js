import { Avatar, Box } from "@mui/material";
import React from "react";
import { getAssignMemberToTask } from "../../../../../../../../../services";
import { RandomColor } from "../../../../../../../../../shared";
import "./person.css";

export function Person({ onChange, data, taskId, userArr, setUserArr }) {
  return data.isInTask ? (
    <Box
      className="personContainer"
      id={data.id}
      onClick={(e) => {
        data.isInTask = false;
        onChange();
        setUserArr(
          userArr.filter((e) => {
            return e.id !== data.id;
          })
        );

        getAssignMemberToTask({ id: data.id, taskId, state: false });
      }}
    >
      <div className="personDiv">
        {data.image ? (
          <Avatar className="avatar" src={data.image} />
        ) : (
          <RandomColor firstName={data.firstName} lastName={data.lastName} />
        )}
        <span>
          {data.firstName + " "}
          {" " + data.lastName}
        </span>
      </div>
      <img
        alt="delete"
        src={require("../../../../../../../../../images/closeIcon.svg")}
        style={{ height: "6px", width: "6px", cursor: "pointer" }}
      />
    </Box>
  ) : (
    <Box
      id={data.id}
      className="personContainer"
      onClick={(e) => {
        data.isInTask = true;
        onChange();
        getAssignMemberToTask({ id: data.id, taskId, state: true }).then(() =>
          setUserArr([
            ...userArr,
            {
              id: data.id,
              image: data.image,
              lastName: data.lastName,
              firstName: data.firstName,
            },
          ])
        );
      }}
    >
      <div className="personDiv">
        {data.image ? (
          <Avatar className="avatar" src={data.image} />
        ) : (
          <RandomColor firstName={data.firstName} lastName={data.lastName} />
        )}
        <span>
          {data.firstName + " "}
          {" " + data.lastName}
        </span>
      </div>
      <img
        className="add"
        alt="add"
        src={require("../../../../../../../../../images/plus.svg")}
      />
    </Box>
  );
}
