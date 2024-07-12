import { Box } from "@mui/material";
import React, { useState } from "react";
import "./Dates.css";

export function Dates({
  startDate = "2022",
  endDate = "2023",
  calendar,
  setCalendar,
}) {
  return (
    <div
      className="datesContainer"
      onClick={(e) => {
        setCalendar(true);
      }}
    >
      <Box className="datesBoxInDiv">
        <img
          src={require("../../../../../../../../images/Vector (9).svg")}
          alt="date"
        />
        <span>{startDate + " - " + endDate}</span>
      </Box>
      <Box className="imgDiv">
        <img src={require("../../../../../../../../images/V.svg")} alt="V" />
      </Box>
    </div>
  );
}
